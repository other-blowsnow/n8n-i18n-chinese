import { S as computed, tt as provide } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import { _t as useRoute } from "./src-Bqvpi8Q1.js";
import { Bc as WorkflowIdKey, hs as VIEWS } from "./constants-B5_ykVXd.js";
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
export { useProvideWorkflowId as t };
