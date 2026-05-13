import { S as computed } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { $t as createWorkflowDocumentId, nn as useWorkflowDocumentStore, s as useWorkflowsStore, zt as useEnvironmentsStore } from "./users.store-Dv9IVEcY.js";
//#region src/features/workflows/canvas/experimental/composables/useExpressionResolveCtx.ts
function useExpressionResolveCtx(node) {
	const environmentsStore = useEnvironmentsStore();
	const workflowsStore = useWorkflowsStore();
	const workflowDocumentStore = computed(() => useWorkflowDocumentStore(createWorkflowDocumentId(workflowsStore.workflowId)));
	return computed(() => {
		if (!node.value || !workflowDocumentStore.value) return;
		const runIndex = 0;
		const execution = workflowsStore.workflowExecutionData;
		const nodeName = node.value.name;
		function findInputNode() {
			const source = (execution?.data?.resultData.runData[nodeName] ?? [])[runIndex]?.source[0];
			if (source) return {
				name: source.previousNode,
				branchIndex: source.previousNodeOutput ?? 0,
				runIndex: source.previousNodeRun ?? 0
			};
			const inputs = workflowDocumentStore.value.getParentNodesByDepth(nodeName, 1);
			if (inputs.length > 0) return {
				name: inputs[0].name,
				branchIndex: inputs[0].indicies[0] ?? 0,
				runIndex: 0
			};
		}
		return {
			localResolve: true,
			envVars: environmentsStore.variablesAsObject,
			workflow: workflowDocumentStore.value.getWorkflowObjectAccessorSnapshot(),
			execution,
			nodeName,
			additionalKeys: {},
			inputNode: findInputNode(),
			connections: workflowDocumentStore.value.connectionsBySourceNode
		};
	});
}
//#endregion
export { useExpressionResolveCtx as t };
