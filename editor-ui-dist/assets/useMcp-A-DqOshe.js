import { t as useTelemetry } from "./useTelemetry-C3cN19b2.js";
import { ca as WEBHOOK_NODE_TYPE } from "./constants-CiCQTzlI.js";
const MCP_SETTINGS_VIEW = "McpSettings";
const MCP_STORE = "mcp";
const LOADING_INDICATOR_TIMEOUT = 200;
const MCP_DOCS_PAGE_URL = "https://docs.n8n.io";
function useMcp() {
	const telemetry = useTelemetry();
	const isEligibleForMcpAccess = (workflow) => {
		if (!workflow.active) return false;
		return workflow.nodes.some((node) => node.type === "n8n-nodes-base.webhook" && node.disabled !== true);
	};
	const trackMcpAccessEnabledForWorkflow = (workflowId) => {
		telemetry.track("User gave MCP access to workflow", { workflow_id: workflowId });
	};
	const trackUserToggledMcpAccess = (enabled) => {
		telemetry.track("User toggled MCP access", { state: enabled });
	};
	return {
		isEligibleForMcpAccess,
		trackMcpAccessEnabledForWorkflow,
		trackUserToggledMcpAccess
	};
}
export { MCP_STORE as a, MCP_SETTINGS_VIEW as i, LOADING_INDICATOR_TIMEOUT as n, MCP_DOCS_PAGE_URL as r, useMcp as t };
