import { Bt as toRaw, It as ref, Pt as reactive, S as computed, gt as watch } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { v as i18n } from "./_MapCache-BtQ700Y1.js";
import { t as useToast } from "./useToast-Cy_7sZsy.js";
import { i as defineStore } from "./constants-_KyxTaQQ.js";
import { Xn as makeRestApiRequest, t as useRootStore } from "./useRootStore-xTXN1Ozx.js";
import { t as useSettingsStore } from "./settings.store-CWNcTN8c.js";
import "./settings.store-Dgx0IX_2.js";
import { t as hasPermission } from "./permissions-DAvMkygQ.js";
import { t as usePushConnectionStore } from "./pushConnection.store-C5CllT56.js";
import { n as COMPUTER_USE_CONNECTION_TYPE, t as BROWSER_USE_CONNECTION_TYPE } from "./constants-DgQ4v8gO.js";
//#region src/features/ai/instanceAi/instanceAi.api.ts
/**
* POST /instance-ai/chat/:threadId -> { runId }
* Sends a user message. Events arrive separately via the SSE connection.
*/
async function postMessage(context, threadId, message, attachments, handoffContext, timeZone, pushRef) {
	return await makeRestApiRequest(context, "POST", `/instance-ai/chat/${threadId}`, {
		message,
		...attachments && attachments.length > 0 ? { attachments } : {},
		...handoffContext ? { context: handoffContext } : {},
		...timeZone ? { timeZone } : {},
		...pushRef ? { pushRef } : {}
	});
}
async function ensureThread(context, threadId, projectId, launch) {
	return await makeRestApiRequest(context, "POST", "/instance-ai/threads", {
		threadId,
		projectId,
		...launch
	});
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
	return await makeRestApiRequest(context, "POST", `/instance-ai/confirm/${requestId}`, payload);
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
* POST /instance-ai/browser/create-link -> { connectUrl, expiresAt, ttlSeconds }
* Create (or refresh) a direct browser session and return the opaque URL that
* opens the Browser Use extension connect page.
*/
async function createBrowserLink(context) {
	return await makeRestApiRequest(context, "POST", "/instance-ai/browser/create-link");
}
/**
* GET /instance-ai/browser/status -> { connected, connectedAt, toolCategories }
* Check whether the Browser Use extension is connected directly to the server.
*/
async function getBrowserStatus(context) {
	return await makeRestApiRequest(context, "GET", "/instance-ai/browser/status");
}
/**
* POST /instance-ai/browser/disconnect-session -> { ok }
* Tear down the current user's direct browser session.
*/
async function disconnectBrowserSession(context) {
	await makeRestApiRequest(context, "POST", "/instance-ai/browser/disconnect-session");
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
async function fetchServiceCredentials(context) {
	return await makeRestApiRequest(context, "GET", "/instance-ai/settings/service-credentials");
}
async function fetchInstanceModelCredentials(context) {
	return await makeRestApiRequest(context, "GET", "/instance-ai/settings/model-credentials");
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
	const serviceCredentials = ref([]);
	const instanceModelCredentials = ref([]);
	const draft = reactive({});
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
	const browserConnected = ref(false);
	const browserConnectedAt = ref(null);
	const browserToolCategories = ref([]);
	const browserStatusLoaded = ref(false);
	const browserConnectUrl = ref(null);
	const browserConnectUrlExpiresAt = ref(null);
	let browserConnectUrlRequestId = 0;
	const isInstanceAiDisabled = computed(() => settingsStore.moduleSettings?.["instance-ai"]?.enabled !== true);
	const isLocalGatewayDisabledByAdmin = computed(() => settingsStore.moduleSettings?.["instance-ai"]?.localGatewayDisabled !== false);
	/** Whether the local gateway is effectively disabled (admin override OR user preference). */
	const isLocalGatewayDisabled = computed(() => isLocalGatewayDisabledByAdmin.value || preferences.value?.localGatewayDisabled === true);
	const isBrowserUseEnabledByAdmin = computed(() => settingsStore.moduleSettings?.["instance-ai"]?.browserUseEnabled === true);
	const isProxyEnabled = computed(() => settingsStore.moduleSettings?.["instance-ai"]?.proxyEnabled === true);
	const isCloudManaged = computed(() => settingsStore.moduleSettings?.["instance-ai"]?.cloudManaged === true);
	const isSandboxEnabled = computed(() => settingsStore.moduleSettings?.["instance-ai"]?.sandboxEnabled === true);
	const isWorkflowBuilderAvailable = computed(() => settingsStore.moduleSettings?.["instance-ai"]?.workflowBuilderAvailable ?? true);
	function syncInstanceAiFlagIntoGlobalModuleSettings(adminRes) {
		const ms = settingsStore.moduleSettings;
		const prev = ms["instance-ai"];
		const merged = {
			enabled: adminRes.enabled,
			localGatewayDisabled: adminRes.localGatewayDisabled ?? prev?.localGatewayDisabled ?? false,
			browserUseEnabled: adminRes.browserUseEnabled ?? prev?.browserUseEnabled ?? true,
			proxyEnabled: prev?.proxyEnabled ?? false,
			cloudManaged: prev?.cloudManaged ?? false,
			sandboxEnabled: adminRes.sandboxEnabled,
			workflowBuilderAvailable: adminRes.sandboxEnabled ? prev?.workflowBuilderAvailable ?? true : false,
			sandboxUnavailableReason: adminRes.sandboxEnabled ? prev?.sandboxUnavailableReason ?? null : null,
			runDebugEnabled: prev?.runDebugEnabled ?? false
		};
		settingsStore.moduleSettings = {
			...ms,
			"instance-ai": merged
		};
	}
	const canManage = computed(() => hasPermission(["rbac"], { rbac: { scope: "instanceAi:manage" } }));
	const canManageAiUsage = computed(() => hasPermission(["rbac"], { rbac: { scope: "aiAssistant:manage" } }));
	const canManageInstanceCredentials = computed(() => hasPermission(["rbac"], { rbac: { scope: "credential:manageInstance" } }));
	async function fetch() {
		isLoading.value = true;
		try {
			const promises = [canManage.value ? fetchSettings(rootStore.restApiContext) : Promise.resolve(null), fetchPreferences(rootStore.restApiContext)];
			const [s, p] = await Promise.all(promises);
			settings.value = s;
			preferences.value = p;
			if (!isCloudManaged.value && canManage.value) {
				const [sc, imc] = await Promise.all([fetchServiceCredentials(rootStore.restApiContext), isProxyEnabled.value ? Promise.resolve([]) : fetchInstanceModelCredentials(rootStore.restApiContext)]);
				serviceCredentials.value = sc;
				instanceModelCredentials.value = imc;
			}
			clearDraft();
		} catch {
			toast.showError(new Error(i18n.baseText("settings.n8nAgent.toast.loadError")), i18n.baseText("settings.n8nAgent.toast.errorTitle"));
		} finally {
			isLoading.value = false;
		}
	}
	/**
	* Persists the staged admin draft. Returns whether the save succeeded; on
	* failure the draft is discarded so a later unrelated save can't flush it.
	*/
	async function save() {
		if (Object.keys(draft).length === 0) return true;
		isSaving.value = true;
		try {
			const result = await updateSettings(rootStore.restApiContext, { ...toRaw(draft) });
			settings.value = result;
			clearDraft();
			toast.showMessage({
				title: i18n.baseText("settings.n8nAgent.toast.saved"),
				type: "success"
			});
			syncInstanceAiFlagIntoGlobalModuleSettings(result);
			await settingsStore.getModuleSettings().catch(() => {});
			return true;
		} catch (error) {
			clearDraft();
			toast.showError(error, i18n.baseText("settings.n8nAgent.toast.errorTitle"));
			return false;
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
			syncInstanceAiFlagIntoGlobalModuleSettings(result);
			await settingsStore.getModuleSettings().catch(() => {});
			toast.showMessage({
				title: i18n.baseText("settings.n8nAgent.toast.saved"),
				type: "success"
			});
			return true;
		} catch {
			toast.showError(new Error(i18n.baseText("settings.n8nAgent.toast.saveError")), i18n.baseText("settings.n8nAgent.toast.errorTitle"));
			return false;
		} finally {
			isSaving.value = false;
		}
	}
	async function persistLocalGatewayPreference(disabled) {
		try {
			preferences.value = await updatePreferences(rootStore.restApiContext, { localGatewayDisabled: disabled });
		} catch {
			toast.showError(new Error(i18n.baseText("settings.n8nAgent.toast.preferenceError")), i18n.baseText("settings.n8nAgent.toast.errorTitle"));
		}
	}
	async function ensurePreferencesLoaded() {
		if (preferences.value) return;
		try {
			preferences.value = await fetchPreferences(rootStore.restApiContext);
		} catch {}
	}
	const isGatewayBrowserCategoryEnabled = computed(() => gatewayToolCategories.value.find((c) => c.name === "browser")?.enabled === true);
	/** Connected through either channel: direct extension session or daemon browser category. */
	const isBrowserUseConnected = computed(() => browserConnected.value || gatewayConnected.value && isGatewayBrowserCategoryEnabled.value);
	const connections = computed(() => {
		const result = [];
		if (!isLocalGatewayDisabled.value) result.push({
			type: COMPUTER_USE_CONNECTION_TYPE,
			name: gatewayDirectory.value ?? i18n.baseText("instanceAi.connections.add.computerUse"),
			subtitle: gatewayConnected.value ? i18n.baseText("instanceAi.connections.types.computerUse.subtitle") : i18n.baseText("instanceAi.connections.row.status.disconnected"),
			status: gatewayConnected.value ? "connected" : "disconnected"
		});
		if (isBrowserUseEnabledByAdmin.value) result.push({
			type: BROWSER_USE_CONNECTION_TYPE,
			name: isBrowserUseConnected.value ? "Google Chrome" : i18n.baseText("instanceAi.connections.add.browserUse"),
			subtitle: isBrowserUseConnected.value ? i18n.baseText("instanceAi.connections.types.browserUse.subtitle") : i18n.baseText("instanceAi.connections.row.status.disconnected"),
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
		if (value === void 0) delete draft[key];
		else draft[key] = value;
	}
	function clearDraft() {
		for (const key of Object.keys(draft)) delete draft[key];
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
	async function fetchBrowserStatus() {
		try {
			const status = await getBrowserStatus(rootStore.restApiContext);
			browserConnected.value = status.connected;
			browserConnectedAt.value = status.connectedAt;
			browserToolCategories.value = status.toolCategories ?? [];
		} catch {} finally {
			browserStatusLoaded.value = true;
		}
	}
	function clearBrowserConnectUrl() {
		browserConnectUrlRequestId++;
		browserConnectUrl.value = null;
		browserConnectUrlExpiresAt.value = null;
	}
	/**
	* Fetch a fresh opaque extension connect URL from the server. The URL is
	* stored (not displayed) so the setup modal can open it on user click.
	*/
	async function fetchBrowserConnectUrl() {
		const requestId = ++browserConnectUrlRequestId;
		try {
			const result = await createBrowserLink(rootStore.restApiContext);
			if (requestId !== browserConnectUrlRequestId) return null;
			browserConnectUrl.value = result.connectUrl;
			browserConnectUrlExpiresAt.value = result.expiresAt;
			return result.connectUrl;
		} catch {
			toast.showError(new Error(i18n.baseText("instanceAi.browserUse.connectLinkError.message")), i18n.baseText("instanceAi.browserUse.connectLinkError.title"));
			return null;
		}
	}
	/** Tears down the direct browser session on the server. */
	async function disconnectBrowserUse() {
		try {
			await disconnectBrowserSession(rootStore.restApiContext);
		} catch {
			toast.showError(new Error(i18n.baseText("instanceAi.browserUse.disconnectError.message")), i18n.baseText("instanceAi.browserUse.disconnectError.title"));
			return;
		}
		clearBrowserConnectUrl();
		browserConnected.value = false;
		browserConnectedAt.value = null;
		browserToolCategories.value = [];
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
			if (message.type === "instanceAiGatewayStateChanged") {
				gatewayConnected.value = message.data.connected;
				gatewayDirectory.value = message.data.directory;
				gatewayHostIdentifier.value = message.data.hostIdentifier ?? null;
				gatewayToolCategories.value = message.data.toolCategories ?? [];
				if (message.data.connected) markGatewayEverConnected();
				return;
			}
			if (message.type === "instanceAiBrowserStateChanged") {
				browserConnected.value = message.data.connected;
				browserConnectedAt.value = message.data.connectedAt;
				browserToolCategories.value = message.data.toolCategories ?? [];
			}
		});
		stopPushReconnectWatch = watch(() => pushStore.isConnected, (now, prev) => {
			if (now && !prev) {
				fetchGatewayStatus();
				fetchBrowserStatus();
			}
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
		if (isCloudManaged.value) return;
		try {
			serviceCredentials.value = await fetchServiceCredentials(rootStore.restApiContext);
		} catch {}
	}
	async function refreshInstanceModelCredentials() {
		if (isProxyEnabled.value || !canManage.value) return;
		try {
			instanceModelCredentials.value = await fetchInstanceModelCredentials(rootStore.restApiContext);
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
		canManageAiUsage,
		canManageInstanceCredentials,
		settings,
		preferences,
		serviceCredentials,
		instanceModelCredentials,
		draft,
		isLoading,
		isSaving,
		fetch,
		save,
		persistEnabled,
		persistLocalGatewayPreference,
		ensurePreferencesLoaded,
		setField,
		setPermission,
		getPermission,
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
		isInstanceAiDisabled,
		isLocalGatewayDisabled,
		isLocalGatewayDisabledByAdmin,
		isBrowserUseEnabledByAdmin,
		isProxyEnabled,
		isSandboxEnabled,
		isWorkflowBuilderAvailable,
		fetchGatewayStatus,
		connectLocalGateway,
		isCloudManaged,
		startGatewayPushListener,
		stopGatewayPushListener,
		fetchSetupCommand,
		clearSetupCommand,
		refreshCredentials,
		refreshInstanceModelCredentials,
		refreshModuleSettings,
		browserConnected,
		browserConnectedAt,
		browserToolCategories,
		browserStatusLoaded,
		browserConnectUrl,
		browserConnectUrlExpiresAt,
		fetchBrowserStatus,
		fetchBrowserConnectUrl,
		clearBrowserConnectUrl,
		disconnectBrowserUse,
		connections,
		isBrowserUseConnected,
		disconnectComputerUse,
		removeComputerUse
	};
});
//#endregion
export { postCancelTask as a, postMessage as c, postCancel as i, ensureThread as n, postConfirmation as o, getInstanceAiCredits as r, postFeedback as s, useInstanceAiSettingsStore as t };
