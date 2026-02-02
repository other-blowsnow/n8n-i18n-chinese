import { C as computed } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { s as useWorkflowsStore } from "./users.store-qBZsmf9-.js";
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
			return Boolean(node.value && workflowRunData.value && Object.prototype.hasOwnProperty.bind(workflowRunData.value)(node.value.name));
		})
	};
}
export { useExecutionData as t };
