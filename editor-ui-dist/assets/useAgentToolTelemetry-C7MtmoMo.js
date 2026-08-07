import { Ut as toValue } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { cn as TELEMETRY_EVENT, n as useTelemetry } from "./posthog.store-CHWQ6Zed.js";
//#region src/features/agents/composables/useAgentToolTelemetry.ts
/** Identifier payload — node_type for node tools, workflow name for workflow tools. */
function identityProps(ref) {
	if (ref.type === "node") return { node_type: ref.node?.nodeType };
	if (ref.type === "workflow") return { workflow: ref.workflow };
	return { custom_id: ref.id };
}
function useAgentToolTelemetry(agentId) {
	const telemetry = useTelemetry();
	function agentProps() {
		const resolvedAgentId = toValue(agentId);
		return resolvedAgentId ? { agent_id: resolvedAgentId } : {};
	}
	/** Fired when the user clicks Connect on an Available row — a new-ref flow begins. */
	function trackAddStarted(toolType) {
		telemetry.track(TELEMETRY_EVENT.AGENTS.USER_STARTED_ADDING_AGENT_TOOL, {
			tool_type: toolType,
			source: "manual",
			...agentProps()
		});
	}
	/** Fired when a new tool ref is saved for the first time. */
	function trackAdded(ref) {
		telemetry.track(TELEMETRY_EVENT.AGENTS.USER_ADDED_AGENT_TOOL, {
			tool_type: ref.type,
			has_approval: ref.requireApproval ?? false,
			...identityProps(ref),
			...agentProps()
		});
	}
	/** Fired when a new MCP server is saved for the first time. */
	function trackAddedMcpServer(server) {
		telemetry.track(TELEMETRY_EVENT.AGENTS.USER_ADDED_AGENT_TOOL, {
			tool_type: "mcpServer",
			has_approval: false,
			server_name: server.name,
			authentication: server.authentication,
			...agentProps()
		});
	}
	/** Fired when an existing tool's config is saved. */
	function trackEdited(ref) {
		telemetry.track(TELEMETRY_EVENT.AGENTS.USER_EDITED_AGENT_TOOL, {
			tool_type: ref.type,
			...identityProps(ref),
			...agentProps()
		});
	}
	/** Fired when the user confirms removing a tool (from modal or sidebar). */
	function trackRemoved(ref) {
		telemetry.track(TELEMETRY_EVENT.AGENTS.USER_REMOVED_AGENT_TOOL, {
			tool_type: ref.type,
			...identityProps(ref),
			...agentProps()
		});
	}
	/** Fired when the user confirms removing an MCP server from the config modal. */
	function trackRemovedMcpServer(server) {
		telemetry.track(TELEMETRY_EVENT.AGENTS.USER_REMOVED_AGENT_TOOL, {
			tool_type: "mcpServer",
			server_name: server.name,
			...agentProps()
		});
	}
	return {
		trackAddStarted,
		trackAdded,
		trackAddedMcpServer,
		trackEdited,
		trackRemoved,
		trackRemovedMcpServer
	};
}
//#endregion
export { useAgentToolTelemetry as t };
