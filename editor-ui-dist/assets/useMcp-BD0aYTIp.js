import { p as useTelemetry } from "./users.store-CUxYM5yQ.js";
//#region src/features/ai/mcpAccess/composables/useMcp.ts
function useMcp() {
	const telemetry = useTelemetry();
	const trackMcpAccessEnabledForWorkflow = (workflowId) => {
		telemetry.track("User gave MCP access to workflow", { workflow_id: workflowId });
	};
	const trackUserToggledMcpAccess = (enabled) => {
		telemetry.track("User toggled MCP access", { state: enabled });
	};
	return {
		trackMcpAccessEnabledForWorkflow,
		trackUserToggledMcpAccess
	};
}
//#endregion
export { useMcp as t };
