import { L as hasInjectionContext, R as inject, S as computed } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { lt as useRoute } from "./src-mYri3GUV.js";
import { Nc as WorkflowIdKey, zr as VIEWS } from "./constants-D-WeCtpr.js";
//#region src/app/composables/useWorkflowId.ts
function useWorkflowId() {
	const injectedWorkflowId = hasInjectionContext() ? inject(WorkflowIdKey, null) : null;
	if (injectedWorkflowId) return injectedWorkflowId;
	const route = useRoute();
	return computed(() => {
		if (route.name === VIEWS.DEMO || route.name === VIEWS.DEMO_DIFF) return "demo";
		const workflowId = route.params.workflowId;
		return (Array.isArray(workflowId) ? workflowId[0] : workflowId) ?? "";
	});
}
//#endregion
export { useWorkflowId as t };
