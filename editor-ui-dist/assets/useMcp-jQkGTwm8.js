import { p as useTelemetry } from "./builder.store-BjWbk2Wl.js";
import { $n as SCHEDULE_TRIGGER_NODE_TYPE, Vt as CHAT_TRIGGER_NODE_TYPE, fn as FORM_TRIGGER_NODE_TYPE, vr as WEBHOOK_NODE_TYPE } from "./constants-ksa9xIxI.js";
function useMcp() {
	const telemetry = useTelemetry();
	const mcpTriggerMap = {
		[SCHEDULE_TRIGGER_NODE_TYPE]: "Schedule Trigger",
		[WEBHOOK_NODE_TYPE]: "Webhook Trigger",
		[FORM_TRIGGER_NODE_TYPE]: "Form Trigger",
		[CHAT_TRIGGER_NODE_TYPE]: "Chat Trigger"
	};
	const isEligibleForMcpAccess = (workflow) => {
		return workflow.nodes.some((node) => Object.keys(mcpTriggerMap).includes(node.type) && node.disabled !== true);
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
		trackUserToggledMcpAccess,
		mcpTriggerMap
	};
}
export { useMcp as t };
