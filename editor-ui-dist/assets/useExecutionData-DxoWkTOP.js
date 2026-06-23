import { S as computed } from "./vue.runtime.esm-bundler-CiTcVoZc.js";
import { _ as injectWorkflowExecutionStateStore } from "./workflows.store-Cb_U1DcB.js";
//#region src/features/execution/executions/composables/useExecutionData.ts
function useExecutionData({ node }) {
	const workflowExecutionStateStore = injectWorkflowExecutionStateStore();
	const workflowExecution = computed(() => workflowExecutionStateStore.value.activeExecution);
	const workflowRunData = computed(() => workflowExecutionStateStore.value.activeExecutionRunData);
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
