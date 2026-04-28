import { Ht as toValue, S as computed } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { at as useI18n } from "./core-CbSPiy-O.js";
import { s as useWorkflowsStore } from "./users.store-yC1MS1aJ.js";
//#region src/app/composables/useActivationError.ts
/**
* Composable for activation error helpers.
* Resolves a node ID to a formatted activation error message reactively.
*/
function useActivationError(nodeId) {
	const workflowsStore = useWorkflowsStore();
	const i18n = useI18n();
	return { errorMessage: computed(() => {
		const id = toValue(nodeId);
		if (!id) return void 0;
		const node = workflowsStore.getNodeById(id);
		if (!node) return void 0;
		return i18n.baseText("workflowActivator.showError.nodeError", { interpolate: { nodeName: node.name } });
	}) };
}
//#endregion
export { useActivationError as t };
