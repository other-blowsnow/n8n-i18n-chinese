import { fc as makeRestApiRequest, a0 as defineStore, a2 as useWorkflowsStore, au as useRootStore, v as useSettingsStore, r as ref, x as computed, hc as isWorkflowListItem, hd as MCP_STORE } from "./index-lkSN61-i.js";
async function updateMcpSettings(context, enabled) {
  return await makeRestApiRequest(context, "PATCH", "/mcp/settings", {
    mcpAccessEnabled: enabled
  });
}
async function fetchApiKey(context) {
  return await makeRestApiRequest(context, "GET", "/mcp/api-key");
}
async function rotateApiKey(context) {
  return await makeRestApiRequest(context, "POST", "/mcp/api-key/rotate");
}
async function toggleWorkflowMcpAccessApi(context, workflowId, availableInMCP) {
  return await makeRestApiRequest(
    context,
    "PATCH",
    `/mcp/workflows/${encodeURIComponent(workflowId)}/toggle-access`,
    {
      availableInMCP
    }
  );
}
const useMCPStore = defineStore(MCP_STORE, () => {
  const workflowsStore = useWorkflowsStore();
  const rootStore = useRootStore();
  const settingsStore = useSettingsStore();
  const currentUserMCPKey = ref(null);
  const mcpAccessEnabled = computed(() => !!settingsStore.moduleSettings.mcp?.mcpAccessEnabled);
  async function fetchWorkflowsAvailableForMCP(page = 1, pageSize = 50) {
    const workflows = await workflowsStore.fetchWorkflowsPage(
      void 0,
      // projectId
      page,
      pageSize,
      "updatedAt:desc",
      { isArchived: false, availableInMCP: true },
      false,
      // includeFolders
      false
      // includeAllVersions
    );
    return workflows.filter(isWorkflowListItem);
  }
  async function setMcpAccessEnabled(enabled) {
    const { mcpAccessEnabled: updated } = await updateMcpSettings(
      rootStore.restApiContext,
      enabled
    );
    settingsStore.moduleSettings.mcp = {
      ...settingsStore.moduleSettings.mcp ?? {},
      mcpAccessEnabled: updated
    };
    return updated;
  }
  async function toggleWorkflowMcpAccess(workflowId, availableInMCP) {
    const response = await toggleWorkflowMcpAccessApi(
      rootStore.restApiContext,
      workflowId,
      availableInMCP
    );
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
export {
  useMCPStore as u
};
