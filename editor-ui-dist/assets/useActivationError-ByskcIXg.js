import { S as computed, Ut as toValue } from "./vue.runtime.esm-bundler-CiTcVoZc.js";
import { s as useI18n } from "./src-Ug6bR7N9.js";
import { b as injectWorkflowDocumentStore } from "./workflows.store-BmW1SZ12.js";
//#region src/app/composables/useActivationError.ts
/**
* Composable for activation error helpers.
* Resolves a node ID to a formatted activation error message reactively.
*/
function useActivationError(nodeId) {
	const workflowDocumentStore = injectWorkflowDocumentStore();
	const i18n = useI18n();
	return { errorMessage: computed(() => {
		const id = toValue(nodeId);
		if (!id) return void 0;
		const node = workflowDocumentStore.value?.getNodeById(id);
		if (!node) return void 0;
		return i18n.baseText("workflowActivator.showError.nodeError", { interpolate: { nodeName: node.name } });
	}) };
}
//#endregion
export { useActivationError as t };
