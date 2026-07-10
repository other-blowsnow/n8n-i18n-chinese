import { S as computed } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { Kt as injectWorkflowExecutionStateStore } from "./workflowDocument.store-CHzX8xP5.js";
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
