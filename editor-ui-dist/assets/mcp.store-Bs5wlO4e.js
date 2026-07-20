import { It as ref, S as computed } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { i as i18n } from "./src-B1khmGvj.js";
import { Fi as isWorkflowListItem, r as createWorkflowDocumentId, s as useWorkflowDocumentStore } from "./workflowDocument.store-DhwnT2JR.js";
import { T as defineStore, c as makeRestApiRequest, s as getFullApiResponse, t as useRootStore } from "./useRootStore-DORNi26-.js";
import { t as useSettingsStore } from "./settings.store-BSo6Wkgz.js";
import { t as useWorkflowsListStore } from "./workflowsList.store-BfnM1vpV.js";
//#region src/features/ai/mcpAccess/mcp.api.ts
async function updateMcpSettings(context, enabled) {
	return await makeRestApiRequest(context, "PATCH", "/mcp/settings", { mcpAccessEnabled: enabled });
}
async function fetchApiKey(context) {
	return await makeRestApiRequest(context, "GET", "/mcp/api-key");
}
async function rotateApiKey(context) {
	return await makeRestApiRequest(context, "POST", "/mcp/api-key/rotate");
}
async function getAllowedRedirectUris(context) {
	return await makeRestApiRequest(context, "GET", "/mcp/oauth/allowed-redirect-uris");
}
async function updateAllowedRedirectUris(context, uris) {
	return await makeRestApiRequest(context, "PATCH", "/mcp/oauth/allowed-redirect-uris", { uris });
}
/**
* Bulk-toggles MCP availability for a set of workflows scoped by either an
* explicit id list, a project, or a folder (+ its descendants).
*/
async function toggleWorkflowsMcpAccessApi(context, target, availableInMCP) {
	return await makeRestApiRequest(context, "PATCH", "/mcp/workflows/toggle-access", {
		availableInMCP,
		...target
	});
}
async function fetchOAuthClients(context) {
	return await makeRestApiRequest(context, "GET", "/mcp/oauth-clients");
}
async function fetchInstanceMcpClientStats(context) {
	return await makeRestApiRequest(context, "GET", "/mcp/oauth-clients/instance-stats");
}
async function deleteOAuthClient(context, clientId) {
	return await makeRestApiRequest(context, "DELETE", `/mcp/oauth-clients/${encodeURIComponent(clientId)}`);
}
async function fetchMcpEligibleWorkflows(context, options) {
	const params = {};
	if (options?.take !== void 0) params.take = options.take;
	if (options?.skip !== void 0) params.skip = options.skip;
	if (options?.query) params.filter = JSON.stringify({ query: options.query });
	return await getFullApiResponse(context, "GET", "/mcp/workflows", params);
}
//#endregion
//#region src/features/ai/mcpAccess/mcp.store.ts
var useMCPStore = defineStore("mcp", () => {
	const workflowsListStore = useWorkflowsListStore();
	const rootStore = useRootStore();
	const settingsStore = useSettingsStore();
	const currentUserMCPKey = ref(null);
	const oauthClients = ref([]);
	const allowedRedirectUris = ref([]);
	const instanceClientStats = ref(null);
	const connectPopoverOpen = ref(false);
	const mcpAccessEnabled = computed(() => !!settingsStore.moduleSettings.mcp?.mcpAccessEnabled);
	const mcpManagedByEnv = computed(() => !!settingsStore.moduleSettings.mcp?.mcpManagedByEnv);
	async function fetchWorkflowsAvailableForMCP(page = 1, pageSize = 50) {
		const { data, count } = await workflowsListStore.fetchWorkflowsPageWithCount(void 0, page, pageSize, "updatedAt:desc", {
			isArchived: false,
			availableInMCP: true
		}, false, false);
		return {
			data: data.filter(isWorkflowListItem),
			count
		};
	}
	async function setMcpAccessEnabled(enabled) {
		const { mcpAccessEnabled: updated } = await updateMcpSettings(rootStore.restApiContext, enabled);
		settingsStore.moduleSettings.mcp = {
			mcpManagedByEnv: false,
			...settingsStore.moduleSettings.mcp ?? {},
			mcpAccessEnabled: updated
		};
		return updated;
	}
	function applyAvailableInMCPToLocalStores(workflowId, availableInMCP) {
		const existing = workflowsListStore.workflowsById[workflowId];
		if (existing) if (existing.settings) existing.settings.availableInMCP = availableInMCP;
		else existing.settings = { availableInMCP };
		useWorkflowDocumentStore(createWorkflowDocumentId(workflowId)).mergeSettings({ availableInMCP });
	}
	async function toggleWorkflowMcpAccess(workflowId, availableInMCP) {
		const response = await toggleWorkflowsMcpAccessApi(rootStore.restApiContext, { workflowIds: [workflowId] }, availableInMCP);
		if (!new Set([...response.updatedIds ?? [], ...response.unchangedIds ?? []]).has(workflowId)) throw new Error(i18n.baseText("workflowSettings.toggleMCP.updateSkippedError", { interpolate: { workflowId } }));
		applyAvailableInMCPToLocalStores(workflowId, availableInMCP);
		return response;
	}
	/**
	* Bulk-toggle MCP availability, scoped by an id list, a project,
	* or a folder (+ descendants)
	*/
	async function toggleWorkflowsMcpAccess(target, availableInMCP) {
		const response = await toggleWorkflowsMcpAccessApi(rootStore.restApiContext, target, availableInMCP);
		const confirmedIds = new Set([...response.updatedIds ?? [], ...response.unchangedIds ?? []]);
		for (const id of confirmedIds) applyAvailableInMCPToLocalStores(id, availableInMCP);
		return response;
	}
	async function getOrCreateApiKey() {
		const apiKey = await fetchApiKey(rootStore.restApiContext);
		currentUserMCPKey.value = apiKey;
		return apiKey;
	}
	async function generateNewApiKey() {
		const apiKey = await rotateApiKey(rootStore.restApiContext);
		currentUserMCPKey.value = apiKey;
		return apiKey;
	}
	function resetCurrentUserMCPKey() {
		currentUserMCPKey.value = null;
	}
	async function getAllOAuthClients() {
		const response = await fetchOAuthClients(rootStore.restApiContext);
		oauthClients.value = response.data;
		return response.data;
	}
	async function getInstanceClientStats() {
		try {
			const stats = await fetchInstanceMcpClientStats(rootStore.restApiContext);
			instanceClientStats.value = stats;
			return stats;
		} catch {
			instanceClientStats.value = null;
			return null;
		}
	}
	async function removeOAuthClient(clientId) {
		const response = await deleteOAuthClient(rootStore.restApiContext, clientId);
		oauthClients.value = oauthClients.value.filter((client) => client.id !== clientId);
		return response;
	}
	async function getMcpEligibleWorkflows(options) {
		return await fetchMcpEligibleWorkflows(rootStore.restApiContext, options);
	}
	function openConnectPopover() {
		connectPopoverOpen.value = true;
	}
	function closeConnectPopover() {
		connectPopoverOpen.value = false;
	}
	async function fetchAllowedRedirectUris() {
		const response = await getAllowedRedirectUris(rootStore.restApiContext);
		allowedRedirectUris.value = response.uris;
		return response.uris;
	}
	async function setAllowedRedirectUris(uris) {
		await updateAllowedRedirectUris(rootStore.restApiContext, uris);
		allowedRedirectUris.value = uris;
	}
	return {
		mcpAccessEnabled,
		mcpManagedByEnv,
		fetchWorkflowsAvailableForMCP,
		setMcpAccessEnabled,
		toggleWorkflowMcpAccess,
		toggleWorkflowsMcpAccess,
		currentUserMCPKey,
		getOrCreateApiKey,
		generateNewApiKey,
		resetCurrentUserMCPKey,
		oauthClients,
		instanceClientStats,
		getAllOAuthClients,
		getInstanceClientStats,
		removeOAuthClient,
		getMcpEligibleWorkflows,
		allowedRedirectUris,
		fetchAllowedRedirectUris,
		setAllowedRedirectUris,
		connectPopoverOpen,
		openConnectPopover,
		closeConnectPopover
	};
});
//#endregion
export { useMCPStore as t };
