import { C as computed, It as ref } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { Cr as isWorkflowListItem, Js as useRootStore, gc as defineStore, o as useWorkflowsStore, sc as makeRestApiRequest, zo as useSettingsStore } from "./useTelemetry-C3cN19b2.js";
import { a as MCP_STORE } from "./useMcp-A-DqOshe.js";
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
const useMCPStore = defineStore("mcp", () => {
	const workflowsStore = useWorkflowsStore();
	const rootStore = useRootStore();
	const settingsStore = useSettingsStore();
	const currentUserMCPKey = ref(null);
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
	return {
		mcpAccessEnabled,
		fetchWorkflowsAvailableForMCP,
		setMcpAccessEnabled,
		toggleWorkflowMcpAccess,
		currentUserMCPKey,
		getOrCreateApiKey,
		generateNewApiKey
	};
});
export { useMCPStore as t };
