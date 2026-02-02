import { C as computed, It as ref } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { Qr as isWorkflowListItem, fs as useSettingsStore, s as useWorkflowsStore } from "./users.store-qBZsmf9-.js";
import { A as defineStore, d as makeRestApiRequest, r as useRootStore, u as getFullApiResponse } from "./_baseOrderBy-3Uh8XZv3.js";
import { c as MCP_STORE } from "./mcp.constants-KkEUiiK2.js";
async function updateMcpSettings(context, enabled) {
	return await makeRestApiRequest(context, "PATCH", "/mcp/settings", { mcpAccessEnabled: enabled });
}
async function fetchApiKey(context) {
	return await makeRestApiRequest(context, "GET", "/mcp/api-key");
}
async function rotateApiKey(context) {
	return await makeRestApiRequest(context, "POST", "/mcp/api-key/rotate");
}
async function toggleWorkflowMcpAccessApi(context, workflowId, availableInMCP) {
	return await makeRestApiRequest(context, "PATCH", `/mcp/workflows/${encodeURIComponent(workflowId)}/toggle-access`, { availableInMCP });
}
async function fetchOAuthClients(context) {
	return await makeRestApiRequest(context, "GET", "/mcp/oauth-clients");
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
const useMCPStore = defineStore("mcp", () => {
	const workflowsStore = useWorkflowsStore();
	const rootStore = useRootStore();
	const settingsStore = useSettingsStore();
	const currentUserMCPKey = ref(null);
	const oauthClients = ref([]);
	const connectPopoverOpen = ref(false);
	const mcpAccessEnabled = computed(() => !!settingsStore.moduleSettings.mcp?.mcpAccessEnabled);
	async function fetchWorkflowsAvailableForMCP(page = 1, pageSize = 50) {
		return (await workflowsStore.fetchWorkflowsPage(void 0, page, pageSize, "updatedAt:desc", {
			isArchived: false,
			availableInMCP: true
		}, false, false)).filter(isWorkflowListItem);
	}
	async function setMcpAccessEnabled(enabled) {
		const { mcpAccessEnabled: updated } = await updateMcpSettings(rootStore.restApiContext, enabled);
		settingsStore.moduleSettings.mcp = {
			...settingsStore.moduleSettings.mcp ?? {},
			mcpAccessEnabled: updated
		};
		return updated;
	}
	async function toggleWorkflowMcpAccess(workflowId, availableInMCP) {
		const response = await toggleWorkflowMcpAccessApi(rootStore.restApiContext, workflowId, availableInMCP);
		const { id, settings, versionId } = response;
		if (id === workflowsStore.workflowId) {
			workflowsStore.setWorkflowVersionId(versionId);
			if (settings) workflowsStore.private.setWorkflowSettings(settings);
		}
		if (workflowsStore.workflowsById[id]) workflowsStore.workflowsById[id] = {
			...workflowsStore.workflowsById[id],
			settings,
			versionId
		};
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
		fetchWorkflowsAvailableForMCP,
		setMcpAccessEnabled,
		toggleWorkflowMcpAccess,
		currentUserMCPKey,
		getOrCreateApiKey,
		generateNewApiKey,
		resetCurrentUserMCPKey,
		oauthClients,
		getAllOAuthClients,
		removeOAuthClient,
		getMcpEligibleWorkflows,
		connectPopoverOpen,
		openConnectPopover,
		closeConnectPopover
	};
});
export { useMCPStore as t };
