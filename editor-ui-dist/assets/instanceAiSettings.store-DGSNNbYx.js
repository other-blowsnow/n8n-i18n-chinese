import { Ft as ref, Nt as reactive, S as computed, gt as watch, zt as toRaw } from "./vue.runtime.esm-bundler-C6vn67cX.js";
import { i as i18n } from "./src-DQKWamAF.js";
import { t as useToast } from "./useToast-fCpp7iAn.js";
import { T as defineStore, c as makeRestApiRequest, t as useRootStore } from "./useRootStore-BUCt9XJo.js";
import { t as useSettingsStore } from "./settings.store-B-RgkKfn.js";
import { n as hasPermission } from "./users.store-0wV1ayWS.js";
import { t as usePushConnectionStore } from "./pushConnection.store-XBbpRkf_.js";
//#region src/features/ai/instanceAi/instanceAi.api.ts
/**
* POST /instance-ai/chat/:threadId -> { runId }
* Sends a user message. Events arrive separately via the SSE connection.
*/
async function postMessage(context, threadId, message, attachments, timeZone, pushRef) {
	return await makeRestApiRequest(context, "POST", `/instance-ai/chat/${threadId}`, {
		message,
		...attachments && attachments.length > 0 ? { attachments } : {},
		...timeZone ? { timeZone } : {},
		...pushRef ? { pushRef } : {}
	});
}
async function ensureThread(context, threadId) {
	return await makeRestApiRequest(context, "POST", "/instance-ai/threads", { ...threadId ? { threadId } : {} });
}
/**
* POST /instance-ai/chat/:threadId/cancel -> 200 OK
* Idempotent cancel of the active run on this thread.
*/
async function postCancel(context, threadId) {
	await makeRestApiRequest(context, "POST", `/instance-ai/chat/${threadId}/cancel`);
}
/**
* POST /instance-ai/feedback/:threadId/:responseId -> { ok: true }
* Annotate the LangSmith trace for this response with a thumbs-up/down rating
* and optional text comment. Idempotent: re-submitting upserts the record.
*/
async function postFeedback(context, threadId, responseId, payload) {
	await makeRestApiRequest(context, "POST", `/instance-ai/feedback/${threadId}/${responseId}`, payload);
}
/**
* POST /instance-ai/chat/:threadId/tasks/:taskId/cancel -> 200 OK
* Cancel a specific background task.
*/
async function postCancelTask(context, threadId, taskId) {
	await makeRestApiRequest(context, "POST", `/instance-ai/chat/${threadId}/tasks/${taskId}/cancel`);
}
/**
* POST /instance-ai/confirm/:requestId -> 200 OK
* Resolve a confirmation request (HITL). The request body is a discriminated
* union on `kind`.
*/
async function postConfirmation(context, requestId, payload) {
	await makeRestApiRequest(context, "POST", `/instance-ai/confirm/${requestId}`, payload);
}
/**
* GET /instance-ai/credits -> { creditsQuota, creditsClaimed }
* Returns -1 quota when proxy is disabled.
*/
async function getInstanceAiCredits(context) {
	return await makeRestApiRequest(context, "GET", "/instance-ai/credits");
}
/**
* POST /instance-ai/gateway/create-link -> { token, command, expiresAt, ttlSeconds }
* Generate a dynamic gateway token and pre-built CLI command.
*/
async function createGatewayLink(context) {
	return await makeRestApiRequest(context, "POST", "/instance-ai/gateway/create-link");
}
/**
* POST /instance-ai/gateway/disconnect-session -> { ok }
* Tear down the current user's gateway session so its tools are no longer
* exposed to the agent. Does not change the user's localGatewayDisabled
* preference.
*/
async function disconnectGatewaySession(context) {
	await makeRestApiRequest(context, "POST", "/instance-ai/gateway/disconnect-session");
}
/**
* GET /instance-ai/gateway/status -> { connected, connectedAt, directory, hostIdentifier, toolCategories }
* Check whether the gateway daemon is currently connected.
*/
async function getGatewayStatus(context) {
	return await makeRestApiRequest(context, "GET", "/instance-ai/gateway/status");
}
//#endregion
//#region src/features/ai/instanceAi/instanceAi.settings.api.ts
async function fetchSettings(context) {
	return await makeRestApiRequest(context, "GET", "/instance-ai/settings");
}
async function updateSettings(context, body) {
	return await makeRestApiRequest(context, "PUT", "/instance-ai/settings", body);
}
async function fetchPreferences(context) {
	return await makeRestApiRequest(context, "GET", "/instance-ai/preferences");
}
async function updatePreferences(context, body) {
	return await makeRestApiRequest(context, "PUT", "/instance-ai/preferences", body);
}
async function fetchModelCredentials(context) {
	return await makeRestApiRequest(context, "GET", "/instance-ai/settings/credentials");
}
async function fetchServiceCredentials(context) {
	return await makeRestApiRequest(context, "GET", "/instance-ai/settings/service-credentials");
}
//#endregion
//#region src/features/ai/instanceAi/instanceAiSettings.store.ts
var useInstanceAiSettingsStore = defineStore("instanceAiSettings", () => {
	const rootStore = useRootStore();
	const settingsStore = useSettingsStore();
	const toast = useToast();
	const isLoading = ref(false);
	const isSaving = ref(false);
	const settings = ref(null);
	const preferences = ref(null);
	const credentials = ref([]);
	const serviceCredentials = ref([]);
	const draft = reactive({});
	const preferencesDraft = reactive({});
	const HAS_CONNECTED_STORAGE_KEY = "instanceAi.gateway.hasConnected";
	const isDaemonConnecting = ref(false);
	const setupCommand = ref(null);
	const setupCommandExpiresAt = ref(null);
	const setupCommandTtlSeconds = ref(null);
	const setupCommandFetchedAt = ref(null);
	let setupCommandRequestId = 0;
	const hasEverConnectedGateway = ref(typeof localStorage !== "undefined" && localStorage.getItem(HAS_CONNECTED_STORAGE_KEY) === "true");
	function markGatewayEverConnected() {
		if (hasEverConnectedGateway.value) return;
		hasEverConnectedGateway.value = true;
		try {
			localStorage.setItem(HAS_CONNECTED_STORAGE_KEY, "true");
		} catch {}
	}
	function clearGatewayEverConnected() {
		hasEverConnectedGateway.value = false;
		try {
			localStorage.removeItem(HAS_CONNECTED_STORAGE_KEY);
		} catch {}
	}
	const gatewayConnected = ref(false);
	const gatewayStatusLoaded = ref(false);
	const gatewayDirectory = ref(null);
	const gatewayHostIdentifier = ref(null);
	const gatewayToolCategories = ref([]);
	const isGatewayConnected = computed(() => gatewayConnected.value);
	const activeDirectory = computed(() => gatewayDirectory.value);
	const isInstanceAiDisabled = computed(() => settingsStore.moduleSettings?.["instance-ai"]?.enabled !== true);
	const isLocalGatewayDisabledByAdmin = computed(() => settingsStore.moduleSettings?.["instance-ai"]?.localGatewayDisabled !== false);
	/** Whether the local gateway is effectively disabled (admin override OR user preference). */
	const isLocalGatewayDisabled = computed(() => isLocalGatewayDisabledByAdmin.value || preferences.value?.localGatewayDisabled === true);
	const isProxyEnabled = computed(() => settingsStore.moduleSettings?.["instance-ai"]?.proxyEnabled === true);
	const isCloudManaged = computed(() => settingsStore.moduleSettings?.["instance-ai"]?.cloudManaged === true);
	const isDirty = computed(() => {
		if (!settings.value && !preferences.value) return false;
		return Object.keys(draft).length > 0 || Object.keys(preferencesDraft).length > 0;
	});
	function syncInstanceAiFlagIntoGlobalModuleSettings(adminRes) {
		const ms = settingsStore.moduleSettings;
		const prev = ms["instance-ai"];
		const merged = {
			enabled: adminRes.enabled,
			localGatewayDisabled: adminRes.localGatewayDisabled ?? prev?.localGatewayDisabled ?? false,
			proxyEnabled: prev?.proxyEnabled ?? false,
			cloudManaged: prev?.cloudManaged ?? false
		};
		settingsStore.moduleSettings = {
			...ms,
			"instance-ai": merged
		};
	}
	const canManage = computed(() => hasPermission(["rbac"], { rbac: { scope: "instanceAi:manage" } }));
	async function fetch() {
		isLoading.value = true;
		try {
			const promises = [canManage.value ? fetchSettings(rootStore.restApiContext) : Promise.resolve(null), fetchPreferences(rootStore.restApiContext)];
			const [s, p] = await Promise.all(promises);
			settings.value = s;
			preferences.value = p;
			if (!isProxyEnabled.value) {
				const credPromises = [fetchModelCredentials(rootStore.restApiContext), canManage.value ? fetchServiceCredentials(rootStore.restApiContext) : Promise.resolve([])];
				const [c, sc] = await Promise.all(credPromises);
				credentials.value = c;
				serviceCredentials.value = sc;
			}
			clearDraft();
		} catch {
			toast.showError(/* @__PURE__ */ new Error("Failed to load settings"), "Settings error");
		} finally {
			isLoading.value = false;
		}
	}
	async function save() {
		isSaving.value = true;
		try {
			const hasAdminChanges = Object.keys(draft).length > 0;
			const hasPreferenceChanges = Object.keys(preferencesDraft).length > 0;
			const [adminResult, prefsResult] = await Promise.allSettled([hasAdminChanges ? updateSettings(rootStore.restApiContext, { ...toRaw(draft) }) : Promise.resolve(settings.value), hasPreferenceChanges ? updatePreferences(rootStore.restApiContext, preferencesDraft) : Promise.resolve(preferences.value)]);
			if (adminResult.status === "fulfilled" && adminResult.value) settings.value = adminResult.value;
			if (prefsResult.status === "fulfilled" && prefsResult.value) preferences.value = prefsResult.value;
			const failed = [adminResult, prefsResult].filter((r) => r.status === "rejected");
			if (failed.length > 0) throw failed[0].reason;
			clearDraft();
			toast.showMessage({
				title: "Settings saved",
				type: "success"
			});
			if (hasAdminChanges) {
				await settingsStore.getModuleSettings();
				const adminSaved = adminResult.status === "fulfilled" && adminResult.value ? adminResult.value : null;
				if (adminSaved) syncInstanceAiFlagIntoGlobalModuleSettings(adminSaved);
			}
		} catch {
			toast.showError(/* @__PURE__ */ new Error("Failed to save settings"), "Settings error");
		} finally {
			isSaving.value = false;
		}
	}
	/** Persists only the Instance AI on/off flag (does not send other admin draft fields). */
	async function persistEnabled(value) {
		isSaving.value = true;
		try {
			const result = await updateSettings(rootStore.restApiContext, { enabled: value });
			settings.value = result;
			delete draft.enabled;
			await settingsStore.getModuleSettings();
			syncInstanceAiFlagIntoGlobalModuleSettings(result);
			toast.showMessage({
				title: "Settings saved",
				type: "success"
			});
		} catch {
			toast.showError(/* @__PURE__ */ new Error("Failed to save settings"), "Settings error");
		} finally {
			isSaving.value = false;
		}
	}
	async function persistLocalGatewayPreference(disabled) {
		try {
			preferences.value = await updatePreferences(rootStore.restApiContext, { localGatewayDisabled: disabled });
		} catch {
			toast.showError(/* @__PURE__ */ new Error("Failed to save preference"), "Settings error");
		}
	}
	async function ensurePreferencesLoaded() {
		if (preferences.value) return;
		try {
			preferences.value = await fetchPreferences(rootStore.restApiContext);
		} catch {}
	}
	const hasBrowserCategory = computed(() => gatewayToolCategories.value.some((c) => c.name === "browser"));
	const isBrowserUseConnected = computed(() => gatewayToolCategories.value.find((c) => c.name === "browser")?.enabled === true);
	const connections = computed(() => {
		const result = [];
		if (!isLocalGatewayDisabled.value) result.push({
			type: "computer-use",
			name: gatewayDirectory.value ?? i18n.baseText("instanceAi.connections.add.computerUse"),
			subtitle: gatewayConnected.value ? i18n.baseText("instanceAi.connections.types.computerUse.subtitle") : i18n.baseText("instanceAi.connections.row.status.disconnected"),
			status: gatewayConnected.value ? "connected" : "disconnected"
		});
		if (gatewayConnected.value && hasBrowserCategory.value) result.push({
			type: "browser-use",
			name: "Google Chrome",
			subtitle: i18n.baseText("instanceAi.connections.types.browserUse.subtitle"),
			status: isBrowserUseConnected.value ? "connected" : "disconnected"
		});
		return result;
	});
	/**
	* Tears down the paired gateway session on the server (so its tools are no
	* longer exposed to the agent). User preference stays enabled — the user
	* can re-pair via the setup modal.
	*/
	async function disconnectComputerUse() {
		try {
			await disconnectGatewaySession(rootStore.restApiContext);
		} catch {
			toast.showError(new Error(i18n.baseText("instanceAi.connections.disconnectError.message")), i18n.baseText("instanceAi.connections.disconnectError.title"));
			return;
		}
		clearSetupCommand();
		clearGatewayEverConnected();
		gatewayConnected.value = false;
		gatewayToolCategories.value = [];
		gatewayDirectory.value = null;
		gatewayHostIdentifier.value = null;
	}
	/** Destructive: disables the user preference and removes the row from the list. */
	async function removeComputerUse() {
		await disconnectComputerUse();
		await persistLocalGatewayPreference(true);
	}
	function setField(key, value) {
		draft[key] = value;
	}
	function setPreferenceField(key, value) {
		preferencesDraft[key] = value;
	}
	function clearDraft() {
		for (const key of Object.keys(draft)) delete draft[key];
		for (const key of Object.keys(preferencesDraft)) delete preferencesDraft[key];
	}
	function setPermission(key, value) {
		draft.permissions = {
			...draft.permissions ?? {},
			[key]: value
		};
	}
	function getPermission(key) {
		const draftVal = draft.permissions?.[key];
		if (draftVal !== void 0) return draftVal;
		return settings.value?.permissions?.[key] ?? "require_approval";
	}
	function reset() {
		clearDraft();
	}
	async function fetchGatewayStatus() {
		try {
			const status = await getGatewayStatus(rootStore.restApiContext);
			gatewayConnected.value = status.connected;
			gatewayDirectory.value = status.directory;
			gatewayHostIdentifier.value = status.hostIdentifier ?? null;
			gatewayToolCategories.value = status.toolCategories ?? [];
			if (status.connected) markGatewayEverConnected();
		} catch {} finally {
			gatewayStatusLoaded.value = true;
		}
	}
	const DAEMON_BASE = "http://127.0.0.1:7655";
	/**
	* User-initiated pairing with a running `@n8n/computer-use` daemon.
	* Returns true on success, false on failure (a toast is shown on failure).
	*/
	async function connectLocalGateway() {
		if (isGatewayConnected.value || isDaemonConnecting.value) return isGatewayConnected.value;
		isDaemonConnecting.value = true;
		try {
			const result = await createGatewayLink(rootStore.restApiContext);
			let baseUrl = rootStore.restApiContext.baseUrl.replace(/\/rest$/, "");
			if (!baseUrl.startsWith("http://") && !baseUrl.startsWith("https://")) baseUrl = `${window.location.protocol}//${window.location.host}${baseUrl}`;
			const res = await globalThis.fetch(`${DAEMON_BASE}/connect`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					url: baseUrl,
					token: result.token
				})
			});
			if (!res.ok) {
				const body = await res.json();
				throw new Error(body.error ?? "Daemon connection failed");
			}
			fetchGatewayStatus();
			return true;
		} catch {
			toast.showError(/* @__PURE__ */ new Error("Could not reach the local daemon. Make sure `npx @n8n/computer-use` is running."), "Connection failed");
			return false;
		} finally {
			isDaemonConnecting.value = false;
		}
	}
	let removeGatewayPushListener = null;
	let stopPushReconnectWatch = null;
	function startGatewayPushListener() {
		if (removeGatewayPushListener) return;
		const pushStore = usePushConnectionStore();
		removeGatewayPushListener = pushStore.addEventListener((message) => {
			if (message.type !== "instanceAiGatewayStateChanged") return;
			gatewayConnected.value = message.data.connected;
			gatewayDirectory.value = message.data.directory;
			gatewayHostIdentifier.value = message.data.hostIdentifier ?? null;
			gatewayToolCategories.value = message.data.toolCategories ?? [];
			if (message.data.connected) markGatewayEverConnected();
		});
		stopPushReconnectWatch = watch(() => pushStore.isConnected, (now, prev) => {
			if (now && !prev) fetchGatewayStatus();
		});
	}
	function stopGatewayPushListener() {
		if (removeGatewayPushListener) {
			removeGatewayPushListener();
			removeGatewayPushListener = null;
		}
		if (stopPushReconnectWatch) {
			stopPushReconnectWatch();
			stopPushReconnectWatch = null;
		}
	}
	function clearSetupCommand() {
		setupCommandRequestId++;
		setupCommand.value = null;
		setupCommandExpiresAt.value = null;
		setupCommandTtlSeconds.value = null;
		setupCommandFetchedAt.value = null;
	}
	async function fetchSetupCommand() {
		const requestId = ++setupCommandRequestId;
		setupCommand.value = null;
		setupCommandExpiresAt.value = null;
		setupCommandTtlSeconds.value = null;
		setupCommandFetchedAt.value = null;
		if (isLocalGatewayDisabled.value) return;
		const requestStartedAt = Date.now();
		try {
			const result = await createGatewayLink(rootStore.restApiContext);
			if (requestId !== setupCommandRequestId) return;
			setupCommand.value = result.command;
			setupCommandExpiresAt.value = result.expiresAt;
			setupCommandTtlSeconds.value = result.ttlSeconds;
			setupCommandFetchedAt.value = requestStartedAt;
		} catch {}
	}
	async function refreshCredentials() {
		if (isProxyEnabled.value) return;
		try {
			const [c, sc] = await Promise.all([fetchModelCredentials(rootStore.restApiContext), fetchServiceCredentials(rootStore.restApiContext)]);
			credentials.value = c;
			serviceCredentials.value = sc;
		} catch {}
	}
	async function refreshModuleSettings() {
		const promises = [settingsStore.getModuleSettings()];
		if (!preferences.value) promises.push(fetchPreferences(rootStore.restApiContext).then((p) => {
			preferences.value = p;
		}));
		await Promise.all(promises);
	}
	return {
		canManage,
		settings,
		preferences,
		credentials,
		serviceCredentials,
		draft,
		preferencesDraft,
		isLoading,
		isSaving,
		isDirty,
		fetch,
		save,
		persistEnabled,
		persistLocalGatewayPreference,
		ensurePreferencesLoaded,
		setField,
		setPreferenceField,
		setPermission,
		getPermission,
		reset,
		isDaemonConnecting,
		setupCommand,
		setupCommandExpiresAt,
		setupCommandTtlSeconds,
		setupCommandFetchedAt,
		hasEverConnectedGateway,
		isGatewayConnected,
		gatewayStatusLoaded,
		gatewayDirectory,
		gatewayHostIdentifier,
		gatewayToolCategories,
		activeDirectory,
		isInstanceAiDisabled,
		isLocalGatewayDisabled,
		isLocalGatewayDisabledByAdmin,
		isProxyEnabled,
		fetchGatewayStatus,
		connectLocalGateway,
		isCloudManaged,
		startGatewayPushListener,
		stopGatewayPushListener,
		fetchSetupCommand,
		clearSetupCommand,
		refreshCredentials,
		refreshModuleSettings,
		connections,
		isBrowserUseConnected,
		disconnectComputerUse,
		removeComputerUse
	};
});
//#endregion
export { postCancelTask as a, postMessage as c, postCancel as i, ensureThread as n, postConfirmation as o, getInstanceAiCredits as r, postFeedback as s, useInstanceAiSettingsStore as t };
