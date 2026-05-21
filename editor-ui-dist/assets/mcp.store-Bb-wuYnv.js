import { Ft as ref, S as computed } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { tt as i18n } from "./core-CzIVo7k9.js";
import { Jt as useWorkflowsListStore, Wn as isWorkflowListItem, pn as useWorkflowDocumentStore, s as useWorkflowsStore, un as createWorkflowDocumentId } from "./users.store-Dpbobzbe.js";
import { T as defineStore, c as makeRestApiRequest, s as getFullApiResponse, t as useRootStore } from "./useRootStore-CX_m119O.js";
import { t as useSettingsStore } from "./settings.store-D1h6gV_f.js";
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
	const workflowsStore = useWorkflowsStore();
	const workflowsListStore = useWorkflowsListStore();
	const rootStore = useRootStore();
	const settingsStore = useSettingsStore();
	const currentUserMCPKey = ref(null);
	const oauthClients = ref([]);
	const instanceClientStats = ref(null);
	const connectPopoverOpen = ref(false);
	const mcpAccessEnabled = computed(() => !!settingsStore.moduleSettings.mcp?.mcpAccessEnabled);
	const mcpManagedByEnv = computed(() => !!settingsStore.moduleSettings.mcp?.mcpManagedByEnv);
	async function fetchWorkflowsAvailableForMCP(page = 1, pageSize = 50) {
		return (await workflowsListStore.fetchWorkflowsPage(void 0, page, pageSize, "updatedAt:desc", {
			isArchived: false,
			availableInMCP: true
		}, false, false)).filter(isWorkflowListItem);
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
		if (workflowId === workflowsStore.workflowId) useWorkflowDocumentStore(createWorkflowDocumentId(workflowId)).mergeSettings({ availableInMCP });
	}
	async function toggleWorkflowMcpAccess(workflowId, availableInMCP) {
		const response = await toggleWorkflowsMcpAccessApi(rootStore.restApiContext, { workflowIds: [workflowId] }, availableInMCP);
		if (!(response.updatedIds ?? []).includes(workflowId)) throw new Error(i18n.baseText("workflowSettings.toggleMCP.updateSkippedError", { interpolate: { workflowId } }));
		applyAvailableInMCPToLocalStores(workflowId, availableInMCP);
		return response;
	}
	/**
	* Bulk-toggle MCP availability, scoped by an id list, a project,
	* or a folder (+ descendants)
	*/
	async function toggleWorkflowsMcpAccess(target, availableInMCP) {
		const response = await toggleWorkflowsMcpAccessApi(rootStore.restApiContext, target, availableInMCP);
		for (const id of response.updatedIds ?? []) applyAvailableInMCPToLocalStores(id, availableInMCP);
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
		connectPopoverOpen,
		openConnectPopover,
		closeConnectPopover
	};
});
//#endregion
export { useMCPStore as t };
