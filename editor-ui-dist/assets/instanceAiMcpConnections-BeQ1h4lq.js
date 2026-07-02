import { S as computed } from "./vue.runtime.esm-bundler-CDDUUZhE.js";
import { Iu as INSTANCE_AI_MCP_CONNECTIONS_EXPERIMENT } from "./constants-Xm8Zfd-h.js";
import { g as usePostHog } from "./users.store-B52ADdpG.js";
//#region src/experiments/instanceAiMcpConnections/useInstanceAiMcpConnectionsExperiment.ts
function useInstanceAiMcpConnectionsExperiment() {
	const posthogStore = usePostHog();
	return { isFeatureEnabled: computed(() => posthogStore.getVariant(INSTANCE_AI_MCP_CONNECTIONS_EXPERIMENT.name) === INSTANCE_AI_MCP_CONNECTIONS_EXPERIMENT.variant) };
}
//#endregion
export { useInstanceAiMcpConnectionsExperiment as t };
