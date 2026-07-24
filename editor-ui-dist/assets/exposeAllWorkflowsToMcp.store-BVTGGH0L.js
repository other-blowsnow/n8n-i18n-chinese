import { S as computed } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { Ed as EXPOSE_ALL_WORKFLOWS_TO_MCP_EXPERIMENT } from "./constants-CSBjw1Ht.js";
import { T as defineStore } from "./useRootStore-hyBq4XlJ.js";
import { Vn as STORES } from "./settings.store-C5bX9q6f.js";
import { g as usePostHog, p as useTelemetry } from "./users.store-CsyV7tYv.js";
import { n as getExperimentTelemetryPayload } from "./utils-CVWwKpBR.js";
//#region src/experiments/exposeAllWorkflowsToMcp/stores/exposeAllWorkflowsToMcp.store.ts
var useExposeAllWorkflowsToMcpStore = defineStore(STORES.EXPERIMENT_EXPOSE_ALL_WORKFLOWS_TO_MCP, () => {
	const posthogStore = usePostHog();
	const telemetry = useTelemetry();
	const currentVariant = computed(() => posthogStore.getVariant(EXPOSE_ALL_WORKFLOWS_TO_MCP_EXPERIMENT.name));
	const isEnabled = computed(() => posthogStore.isVariantEnabled(EXPOSE_ALL_WORKFLOWS_TO_MCP_EXPERIMENT.name, EXPOSE_ALL_WORKFLOWS_TO_MCP_EXPERIMENT.variant));
	const getTelemetryPayload = () => getExperimentTelemetryPayload(EXPOSE_ALL_WORKFLOWS_TO_MCP_EXPERIMENT, currentVariant.value);
	function trackConfirmed() {
		telemetry.track("MCP expose all workflows confirmed", getTelemetryPayload());
	}
	function trackDeclined() {
		telemetry.track("MCP expose all workflows declined", getTelemetryPayload());
	}
	function trackDismissed() {
		telemetry.track("MCP expose all workflows modal dismissed", getTelemetryPayload());
	}
	return {
		currentVariant,
		isEnabled,
		trackConfirmed,
		trackDeclined,
		trackDismissed
	};
});
//#endregion
export { useExposeAllWorkflowsToMcpStore as t };
