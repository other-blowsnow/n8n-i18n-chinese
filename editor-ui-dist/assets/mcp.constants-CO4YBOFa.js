//#region src/features/ai/mcpAccess/mcp.constants.ts
var MCP_ENDPOINT = "mcp-server/http";
var MCP_DOCS_PAGE_URL = "https://docs.n8n.io/connect/connect-to-n8n-mcp-server";
var MCP_SCOPE_GROUPS = [
	{
		key: "workflows",
		resources: ["workflow", "tag"]
	},
	{
		key: "executions",
		resources: ["execution"]
	},
	{
		key: "credentials",
		resources: ["credential"]
	},
	{
		key: "dataTables",
		resources: ["dataTable"]
	},
	{
		key: "projectsAndFolders",
		resources: ["project"]
	}
];
var ELIGIBLE_WORKFLOWS_DOCS_SECTION = "workflow-eligibility";
var MCP_SETTINGS_VIEW = "McpSettings";
var MCP_WORKFLOWS_VIEW = "McpSettingsWorkflows";
var MCP_CLIENTS_VIEW = "McpSettingsClients";
var MCP_CONNECT_WORKFLOWS_MODAL_KEY = "mcpConnectWorkflowsModal";
//#endregion
export { MCP_ENDPOINT as a, MCP_WORKFLOWS_VIEW as c, MCP_DOCS_PAGE_URL as i, MCP_CLIENTS_VIEW as n, MCP_SCOPE_GROUPS as o, MCP_CONNECT_WORKFLOWS_MODAL_KEY as r, MCP_SETTINGS_VIEW as s, ELIGIBLE_WORKFLOWS_DOCS_SECTION as t };
