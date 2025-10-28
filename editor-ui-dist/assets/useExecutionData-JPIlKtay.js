import { C as computed } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { o as useWorkflowsStore } from "./useTelemetry-C3cN19b2.js";
function useExecutionData({ node }) {
	const workflowsStore = useWorkflowsStore();
	const workflowExecution = computed(() => {
		return workflowsStore.getWorkflowExecution;
	});
	const workflowRunData = computed(() => {
		if (workflowExecution.value === null) return null;
		const executionData = workflowExecution.value.data;
		if (!executionData?.resultData?.runData) return null;
		return executionData.resultData.runData;
	});
	return {
		workflowExecution,
		workflowRunData,
		hasNodeRun: computed(() => {
			if (workflowsStore.subWorkflowExecutionError) return true;
			return Boolean(node.value && workflowRunData.value && Object.prototype.hasOwnProperty.bind(workflowRunData.value)(node.value.name));
		})
	};
}
export { useExecutionData as t };
