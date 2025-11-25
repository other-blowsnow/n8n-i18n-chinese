import { t as useTelemetry } from "./useTelemetry-Ct6_U3iA.js";
import { On as WEBHOOK_NODE_TYPE, Q as CHAT_TRIGGER_NODE_TYPE, St as FORM_TRIGGER_NODE_TYPE, ln as SCHEDULE_TRIGGER_NODE_TYPE } from "./constants-C-5XMlPK.js";
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
