import { gr as useTelemetry } from "./users.store-BBfDn-OZ.js";
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
export { useMcp as t };
