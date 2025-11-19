import { C as computed, It as ref } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { Bo as useSettingsStore, Qs as useRootStore, fc as makeRestApiRequest, o as useWorkflowsStore, xc as defineStore, yr as isWorkflowListItem } from "./useTelemetry-C2EhNQhN.js";
import { i as MCP_STORE } from "./mcp.constants-BCNosk1p.js";
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
const useMCPStore = defineStore("mcp", () => {
	const workflowsStore = useWorkflowsStore();
	const rootStore = useRootStore();
	const settingsStore = useSettingsStore();
	const currentUserMCPKey = ref(null);
	const oauthClients = ref([]);
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
	return {
		mcpAccessEnabled,
		fetchWorkflowsAvailableForMCP,
		setMcpAccessEnabled,
		toggleWorkflowMcpAccess,
		currentUserMCPKey,
		getOrCreateApiKey,
		generateNewApiKey,
		oauthClients,
		getAllOAuthClients,
		removeOAuthClient
	};
});
export { useMCPStore as t };
