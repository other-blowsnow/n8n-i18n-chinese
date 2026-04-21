import { Ft as ref, Nt as reactive, S as computed, zt as toRaw } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { Fn as useToast, ci as hasPermission } from "./users.store-EUaYYYY-.js";
import { T as defineStore, c as makeRestApiRequest, t as useRootStore } from "./useRootStore-3wVnX35v.js";
import { t as useSettingsStore } from "./settings.store-DJhMgRBM.js";
import { t as usePushConnectionStore } from "./pushConnection.store-DtV1odaL.js";
//#region src/features/ai/instanceAi/instanceAi.api.ts
/**
* POST /instance-ai/chat/:threadId -> { runId }
* Sends a user message. Events arrive separately via the SSE connection.
*/
async function postMessage(context, threadId, message, researchMode, attachments, timeZone, pushRef) {
	return await makeRestApiRequest(context, "POST", `/instance-ai/chat/${threadId}`, {
		message,
		...researchMode ? { researchMode } : {},
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
* POST /instance-ai/chat/:threadId/tasks/:taskId/cancel -> 200 OK
* Cancel a specific background task.
*/
async function postCancelTask(context, threadId, taskId) {
	await makeRestApiRequest(context, "POST", `/instance-ai/chat/${threadId}/tasks/${taskId}/cancel`);
}
/**
* POST /instance-ai/confirm/:requestId -> 200 OK
* Approve or deny a confirmation request (HITL).
*/
async function postConfirmation(context, requestId, approved, credentialId, credentials, autoSetup, userInput, domainAccessAction, setupWorkflowData, answers, resourceDecision) {
	const payload = {
		approved,
		...credentialId ? { credentialId } : {},
		...credentials ? { credentials } : {},
		...autoSetup ? { autoSetup } : {},
		...userInput !== void 0 ? { userInput } : {},
		...domainAccessAction ? { domainAccessAction } : {},
		...setupWorkflowData?.action ? { action: setupWorkflowData.action } : {},
		...setupWorkflowData?.nodeCredentials ? { nodeCredentials: setupWorkflowData.nodeCredentials } : {},
		...setupWorkflowData?.nodeParameters ? { nodeParameters: setupWorkflowData.nodeParameters } : {},
		...setupWorkflowData?.testTriggerNode ? { testTriggerNode: setupWorkflowData.testTriggerNode } : {},
		...answers ? { answers } : {},
		...resourceDecision ? { resourceDecision } : {}
	};
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
* POST /instance-ai/gateway/create-link -> { token, command }
* Generate a dynamic gateway token and pre-built CLI command.
*/
async function createGatewayLink(context) {
	return await makeRestApiRequest(context, "POST", "/instance-ai/gateway/create-link");
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
	const isDaemonConnecting = ref(false);
	const setupCommand = ref(null);
	const isGatewayPolling = ref(false);
	const gatewayConnected = ref(false);
	const gatewayDirectory = ref(null);
	const gatewayHostIdentifier = ref(null);
	const gatewayToolCategories = ref([]);
	const isGatewayConnected = computed(() => gatewayConnected.value);
	const activeDirectory = computed(() => gatewayDirectory.value);
	const isLocalGatewayDisabled = computed(() => settingsStore.moduleSettings?.["instance-ai"]?.localGatewayDisabled === true);
	const isProxyEnabled = computed(() => settingsStore.moduleSettings?.["instance-ai"]?.proxyEnabled === true);
	const isDirty = computed(() => {
		if (!settings.value && !preferences.value) return false;
		return Object.keys(draft).length > 0 || Object.keys(preferencesDraft).length > 0;
	});
	function syncInstanceAiFlagIntoGlobalModuleSettings(adminRes) {
		const ms = settingsStore.moduleSettings;
		const prev = ms["instance-ai"];
		const merged = {
			enabled: adminRes.enabled,
			localGatewayDisabled: prev?.localGatewayDisabled ?? false,
			proxyEnabled: prev?.proxyEnabled ?? false,
			optinModalDismissed: adminRes.optinModalDismissed
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
	async function persistOptinModalDismissed() {
		try {
			const result = await updateSettings(rootStore.restApiContext, { optinModalDismissed: true });
			settings.value = result;
			syncInstanceAiFlagIntoGlobalModuleSettings(result);
		} catch (error) {}
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
	let gatewayPollTimer = null;
	function pollGatewayStatus() {
		if (isGatewayPolling.value) return;
		isGatewayPolling.value = true;
		getGatewayStatus(rootStore.restApiContext).then((status) => {
			gatewayConnected.value = status.connected;
			gatewayDirectory.value = status.directory;
			gatewayHostIdentifier.value = status.hostIdentifier ?? null;
			gatewayToolCategories.value = status.toolCategories ?? [];
		}).catch(() => {});
		gatewayPollTimer = setInterval(async () => {
			try {
				const status = await getGatewayStatus(rootStore.restApiContext);
				const wasConnected = gatewayConnected.value;
				gatewayConnected.value = status.connected;
				gatewayDirectory.value = status.directory;
				gatewayHostIdentifier.value = status.hostIdentifier ?? null;
				gatewayToolCategories.value = status.toolCategories ?? [];
				if (!status.connected && wasConnected) {
					daemonConnectAttempted = false;
					startDaemonProbing();
				}
			} catch {}
		}, 3e3);
	}
	function stopGatewayPolling() {
		if (gatewayPollTimer) {
			clearInterval(gatewayPollTimer);
			gatewayPollTimer = null;
		}
		isGatewayPolling.value = false;
	}
	const DAEMON_BASE = "http://127.0.0.1:7655";
	let daemonEventSource = null;
	let daemonConnectAttempted = false;
	async function connectDaemon() {
		if (isGatewayConnected.value || isDaemonConnecting.value || daemonConnectAttempted) return;
		daemonConnectAttempted = true;
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
			pollGatewayStatus();
		} catch (error) {
			const message = error instanceof Error ? error.message : "Failed to connect daemon";
			toast.showError(new Error(message), "Daemon connection failed");
		} finally {
			isDaemonConnecting.value = false;
			stopDaemonProbing();
		}
	}
	function startDaemonProbing() {
		if (daemonEventSource || daemonConnectAttempted || isGatewayConnected.value) return;
		daemonEventSource = new EventSource(`${DAEMON_BASE}/events`);
		daemonEventSource.addEventListener("ready", () => {
			connectDaemon();
		});
	}
	function stopDaemonProbing() {
		if (daemonEventSource) {
			daemonEventSource.close();
			daemonEventSource = null;
		}
	}
	let removeGatewayPushListener = null;
	function startGatewayPushListener() {
		if (removeGatewayPushListener) return;
		removeGatewayPushListener = usePushConnectionStore().addEventListener((message) => {
			if (message.type !== "instanceAiGatewayStateChanged") return;
			gatewayConnected.value = message.data.connected;
			gatewayDirectory.value = message.data.directory;
			gatewayHostIdentifier.value = message.data.hostIdentifier ?? null;
			gatewayToolCategories.value = message.data.toolCategories ?? [];
			if (!message.data.connected) {
				daemonConnectAttempted = false;
				startDaemonProbing();
			}
		});
	}
	function stopGatewayPushListener() {
		if (removeGatewayPushListener) {
			removeGatewayPushListener();
			removeGatewayPushListener = null;
		}
	}
	async function fetchSetupCommand() {
		try {
			setupCommand.value = (await createGatewayLink(rootStore.restApiContext)).command;
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
		await settingsStore.getModuleSettings();
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
		persistOptinModalDismissed,
		setField,
		setPreferenceField,
		setPermission,
		getPermission,
		reset,
		isDaemonConnecting,
		setupCommand,
		isGatewayPolling,
		isGatewayConnected,
		gatewayDirectory,
		gatewayHostIdentifier,
		gatewayToolCategories,
		activeDirectory,
		isLocalGatewayDisabled,
		isProxyEnabled,
		pollGatewayStatus,
		stopGatewayPolling,
		startDaemonProbing,
		stopDaemonProbing,
		startGatewayPushListener,
		stopGatewayPushListener,
		fetchSetupCommand,
		refreshCredentials,
		refreshModuleSettings
	};
});
//#endregion
export { postCancelTask as a, postCancel as i, ensureThread as n, postConfirmation as o, getInstanceAiCredits as r, postMessage as s, useInstanceAiSettingsStore as t };
