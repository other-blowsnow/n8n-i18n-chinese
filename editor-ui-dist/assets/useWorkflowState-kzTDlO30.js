import { Ft as ref, R as inject } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { Wr as DEFAULT_SETTINGS, ia as isEmpty, l as clearPopupWindowState, ma as getNewWorkflow, pn as useWorkflowDocumentStore, s as useWorkflowsStore, un as createWorkflowDocumentId } from "./users.store-C7j4ikpF.js";
import { Sl as WorkflowStateKey } from "./constants-B2-iseoM.js";
import { T as defineStore, t as useRootStore } from "./useRootStore-CX_m119O.js";
import { In as STORES } from "./settings.store-D1h6gV_f.js";
import { t as useBuilderStore } from "./builder.store-CUPtNnKK.js";
import { t as useDocumentTitle } from "./useDocumentTitle-DTGPlvkt.js";
//#region src/app/composables/useExecutingNode.ts
/**
* Composable to keep track of the currently executing node.
* The queue is used to keep track of the order in which nodes are executed and to ensure that
* the UI reflects the correct execution status.
*
* Once a node is added to the queue, it will be removed after a short delay
* to allow the running spinner to show for a small amount of time.
*
* The number of additions and removals from the queue should always be equal.
* A node can exist multiple times in the queue, in order to prevent the loading spinner from
* disappearing when a node is executed multiple times in quick succession.
*/
function useExecutingNode() {
	const executingNode = ref([]);
	const lastAddedExecutingNode = ref(null);
	function addExecutingNode(nodeName) {
		executingNode.value.push(nodeName);
		lastAddedExecutingNode.value = nodeName;
	}
	function removeExecutingNode(nodeName) {
		const executionIndex = executingNode.value.indexOf(nodeName);
		if (executionIndex === -1) return;
		executingNode.value.splice(executionIndex, 1);
	}
	function clearNodeExecutionQueue() {
		executingNode.value = [];
		lastAddedExecutingNode.value = null;
	}
	function isNodeExecuting(nodeName) {
		return executingNode.value.includes(nodeName);
	}
	return {
		executingNode,
		lastAddedExecutingNode,
		addExecutingNode,
		removeExecutingNode,
		isNodeExecuting,
		clearNodeExecutionQueue
	};
}
//#endregion
//#region src/app/stores/workflowState.store.ts
var useWorkflowStateStore = defineStore(STORES.WORKFLOW_STATE, () => {
	return { executingNode: useExecutingNode() };
});
//#endregion
//#region src/app/composables/useWorkflowState.ts
function useWorkflowState() {
	const ws = useWorkflowsStore();
	const workflowStateStore = useWorkflowStateStore();
	const rootStore = useRootStore();
	function setWorkflowExecutionData(workflowResultData) {
		ws.setWorkflowExecutionData(workflowResultData);
	}
	function setActiveExecutionId(id) {
		ws.private.setActiveExecutionId(id);
	}
	async function getNewWorkflowData(name, projectId, parentFolderId) {
		let workflowData = {
			name: "",
			settings: { ...DEFAULT_SETTINGS }
		};
		try {
			const data = {
				name,
				projectId,
				parentFolderId
			};
			workflowData = await getNewWorkflow(rootStore.restApiContext, isEmpty(data) ? void 0 : data);
		} catch (e) {
			workflowData.name = name || "My workflow";
		}
		return workflowData;
	}
	const documentTitle = useDocumentTitle();
	function markExecutionAsStopped(stopData) {
		setActiveExecutionId(void 0);
		workflowStateStore.executingNode.clearNodeExecutionQueue();
		ws.setExecutionWaitingForWebhook(false);
		const workflowDocumentStore = useWorkflowDocumentStore(createWorkflowDocumentId(ws.workflowId));
		documentTitle.setDocumentTitle(workflowDocumentStore.name, "IDLE");
		ws.clearExecutionStartedData();
		clearPopupWindowState();
		if (!ws.workflowExecutionData) return;
		const runData = ws.workflowExecutionData.data?.resultData.runData ?? {};
		for (const nodeName in runData) runData[nodeName] = runData[nodeName].filter(({ executionStatus }) => executionStatus === "success");
		if (stopData) {
			ws.workflowExecutionData.status = stopData.status;
			ws.workflowExecutionData.startedAt = stopData.startedAt;
			ws.workflowExecutionData.stoppedAt = stopData.stoppedAt;
		}
	}
	function resetState() {
		setWorkflowExecutionData(null);
		setActiveExecutionId(void 0);
		workflowStateStore.executingNode.executingNode.length = 0;
		ws.setExecutionWaitingForWebhook(false);
		useBuilderStore().resetManualExecutionStats();
	}
	return {
		resetState,
		setWorkflowExecutionData,
		setActiveExecutionId,
		getNewWorkflowData,
		markExecutionAsStopped,
		executingNode: workflowStateStore.executingNode
	};
}
function injectWorkflowState() {
	return inject(WorkflowStateKey, () => {
		return useWorkflowState();
	}, true);
}
//#endregion
export { useWorkflowState as n, injectWorkflowState as t };
