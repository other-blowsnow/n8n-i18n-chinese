import { S as computed } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { dc as INSTANCE_AI_MCP_CONNECTIONS_EXPERIMENT, lc as INSTANCE_AI_BROWSER_USE_EXPERIMENT, uc as INSTANCE_AI_COMPUTER_USE_EXPERIMENT } from "./constants-BzyjfRY2.js";
import { g as usePostHog } from "./users.store-3B2-cSx1.js";
//#region src/experiments/instanceAiMcpConnections/useInstanceAiMcpConnectionsExperiment.ts
function useInstanceAiMcpConnectionsExperiment() {
	const posthogStore = usePostHog();
	return { isFeatureEnabled: computed(() => posthogStore.getVariant(INSTANCE_AI_MCP_CONNECTIONS_EXPERIMENT.name) === INSTANCE_AI_MCP_CONNECTIONS_EXPERIMENT.variant) };
}
//#endregion
//#region src/experiments/instanceAiComputerUse/useInstanceAiComputerUseExperiment.ts
function useInstanceAiComputerUseExperiment() {
	const posthogStore = usePostHog();
	return { isFeatureEnabled: computed(() => posthogStore.getVariant(INSTANCE_AI_COMPUTER_USE_EXPERIMENT.name) === INSTANCE_AI_COMPUTER_USE_EXPERIMENT.variant) };
}
//#endregion
//#region src/experiments/instanceAiBrowserUse/useInstanceAiBrowserUseExperiment.ts
function useInstanceAiBrowserUseExperiment() {
	const posthogStore = usePostHog();
	return { isFeatureEnabled: computed(() => posthogStore.getVariant(INSTANCE_AI_BROWSER_USE_EXPERIMENT.name) === INSTANCE_AI_BROWSER_USE_EXPERIMENT.variant) };
}
//#endregion
export { useInstanceAiComputerUseExperiment as n, useInstanceAiMcpConnectionsExperiment as r, useInstanceAiBrowserUseExperiment as t };
