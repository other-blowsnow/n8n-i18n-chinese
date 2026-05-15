import { S as computed } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { s as useWorkflowsStore } from "./users.store-ONgXjJ_v.js";
//#region src/features/execution/executions/composables/useExecutionData.ts
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
//#endregion
export { useExecutionData as t };
