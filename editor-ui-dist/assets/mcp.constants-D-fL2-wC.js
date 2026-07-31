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
/** Icons per scope resource prefix, shown in the client details modal. */
var MCP_SCOPE_RESOURCE_ICONS = {
	workflow: "workflow",
	execution: "history",
	credential: "key-round",
	dataTable: "table",
	project: "folder",
	tag: "tags"
};
var ELIGIBLE_WORKFLOWS_DOCS_SECTION = "workflow-eligibility";
var MCP_SETTINGS_VIEW = "McpSettings";
var MCP_CONNECT_WORKFLOWS_MODAL_KEY = "mcpConnectWorkflowsModal";
//#endregion
export { MCP_SCOPE_GROUPS as a, MCP_ENDPOINT as i, MCP_CONNECT_WORKFLOWS_MODAL_KEY as n, MCP_SCOPE_RESOURCE_ICONS as o, MCP_DOCS_PAGE_URL as r, MCP_SETTINGS_VIEW as s, ELIGIBLE_WORKFLOWS_DOCS_SECTION as t };
