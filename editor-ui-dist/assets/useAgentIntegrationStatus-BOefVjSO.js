import { Ft as ref } from "./vue.runtime.esm-bundler-C6vn67cX.js";
import { a as ResponseError, t as useRootStore } from "./useRootStore-BOF8LYEF.js";
import "./settings.store-D_uIyAbF.js";
import { _ as getIntegrationStatus, d as disconnectIntegration, r as connectIntegration, x as listAgentIntegrations } from "./useAgentApi-_V3Bnq9X.js";
//#region src/features/agents/composables/useAgentIntegrationsCatalog.ts
var catalog = ref(null);
var inFlight = null;
function useAgentIntegrationsCatalog() {
	const rootStore = useRootStore();
	async function ensureLoaded(projectId) {
		if (catalog.value) return catalog.value;
		if (!inFlight) inFlight = listAgentIntegrations(rootStore.restApiContext, projectId).then((list) => {
			catalog.value = list;
			inFlight = null;
			return list;
		}).catch((err) => {
			inFlight = null;
			throw err;
		});
		return await inFlight;
	}
	return {
		catalog,
		ensureLoaded
	};
}
//#endregion
//#region src/features/agents/composables/useAgentIntegrationStatus.ts
/**
* Module-level cache keyed by `${projectId}:${agentId}` so every caller
* (Triggers panel, Add-Trigger modal, future surfaces) sees the same
* reactive state. When one caller connects/disconnects an integration, the
* other renders automatically — no events, no prop-drilling.
*/
var cache = /* @__PURE__ */ new Map();
function getOrCreate(projectId, agentId) {
	const key = `${projectId}:${agentId}`;
	let state = cache.get(key);
	if (!state) {
		state = {
			statuses: ref({}),
			connectedCredentials: ref({}),
			integrationSettings: ref({}),
			loadingMap: ref({}),
			errorMessages: ref({}),
			errorIsConflict: ref({}),
			fetchInFlight: null
		};
		cache.set(key, state);
	}
	return state;
}
function applyStatus(state, integrationTypes, integrations) {
	for (const type of integrationTypes) {
		state.statuses.value[type] = "disconnected";
		state.connectedCredentials.value[type] = "";
		state.integrationSettings.value[type] = void 0;
	}
	for (const integration of integrations) {
		state.statuses.value[integration.type] = "connected";
		state.connectedCredentials.value[integration.type] = typeof integration.credentialId === "string" ? integration.credentialId : "";
		state.integrationSettings.value[integration.type] = integration.settings;
	}
}
function syncAgentIntegrationStatusCache(projectId, agentId, integrationTypes, integrations) {
	applyStatus(getOrCreate(projectId, agentId), integrationTypes, integrations);
}
function useAgentIntegrationStatus(projectId, agentId) {
	const rootStore = useRootStore();
	const state = getOrCreate(projectId, agentId);
	async function fetchStatus(integrationTypes) {
		if (state.fetchInFlight) {
			await state.fetchInFlight;
			return;
		}
		state.fetchInFlight = (async () => {
			try {
				applyStatus(state, integrationTypes, (await getIntegrationStatus(rootStore.restApiContext, projectId, agentId)).integrations ?? []);
			} catch {
				for (const type of integrationTypes) if (state.statuses.value[type] !== "connected") state.statuses.value[type] = "unknown";
			} finally {
				state.fetchInFlight = null;
			}
		})();
		await state.fetchInFlight;
	}
	async function connect(type, credId, settings) {
		state.loadingMap.value[type] = true;
		state.errorMessages.value[type] = "";
		state.errorIsConflict.value[type] = false;
		try {
			const result = await connectIntegration(rootStore.restApiContext, projectId, agentId, type, credId, settings);
			state.statuses.value[type] = "connected";
			state.connectedCredentials.value[type] = credId;
			state.integrationSettings.value[type] = settings;
			return result;
		} catch (e) {
			const msg = e instanceof Error ? e.message : typeof e === "object" && e !== null && "message" in e ? String(e.message) : "Failed to connect";
			state.errorMessages.value[type] = msg;
			state.errorIsConflict.value[type] = e instanceof ResponseError && e.httpStatusCode === 409;
			throw e;
		} finally {
			state.loadingMap.value[type] = false;
		}
	}
	async function disconnect(type, credId) {
		state.loadingMap.value[type] = true;
		try {
			await disconnectIntegration(rootStore.restApiContext, projectId, agentId, type, credId);
			state.statuses.value[type] = "disconnected";
			state.connectedCredentials.value[type] = "";
			state.integrationSettings.value[type] = void 0;
		} finally {
			state.loadingMap.value[type] = false;
		}
	}
	function isConnected(type) {
		return state.statuses.value[type] === "connected";
	}
	return {
		statuses: state.statuses,
		connectedCredentials: state.connectedCredentials,
		integrationSettings: state.integrationSettings,
		loadingMap: state.loadingMap,
		errorMessages: state.errorMessages,
		errorIsConflict: state.errorIsConflict,
		fetchStatus,
		connect,
		disconnect,
		isConnected
	};
}
//#endregion
export { useAgentIntegrationStatus as n, useAgentIntegrationsCatalog as r, syncAgentIntegrationStatusCache as t };
