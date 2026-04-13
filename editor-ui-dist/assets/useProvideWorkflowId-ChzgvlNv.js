import { S as computed, tt as provide } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { ct as useRoute } from "./src-BcKVP470.js";
import { Qo as VIEWS, wc as WorkflowIdKey } from "./constants-fJx0oi9Z.js";
//#region src/app/composables/useProvideWorkflowId.ts
function useProvideWorkflowId() {
	const route = useRoute();
	const workflowId = computed(() => {
		if (route.name === VIEWS.DEMO) return "demo";
		const name = route.params.name;
		return (Array.isArray(name) ? name[0] : name) ?? "";
	});
	provide(WorkflowIdKey, workflowId);
	return workflowId;
}
//#endregion
export { useProvideWorkflowId as t };
