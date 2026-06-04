import { Ft as ref, R as inject } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { Ki as isEmpty, Pr as DEFAULT_SETTINGS, Vt as createWorkflowDocumentId, Wt as useWorkflowDocumentStore, a as createExecutionDataId, c as clearPopupWindowState, i as useWorkflowExecutionStateStore, n as createWorkflowExecutionStateId, na as getNewWorkflow, o as useExecutionDataStore, r as disposeWorkflowExecutionStateStore, t as useWorkflowsStore } from "./workflows.store-fKRofyHu.js";
import { A as IN_PROGRESS_EXECUTION_ID, Sl as WorkflowStateKey } from "./constants-Brs44Mbc.js";
import { T as defineStore, t as useRootStore } from "./useRootStore-NTSmdx9S.js";
import { Rn as STORES } from "./settings.store-CrL-o4BC.js";
import { t as useBuilderStore } from "./builder.store-B8hcAQ92.js";
import { t as useDocumentTitle } from "./useDocumentTitle-BoZ4pEPK.js";
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
		const stateStore = useWorkflowExecutionStateStore(createWorkflowExecutionStateId(ws.workflowId));
		if (workflowResultData === null) {
			stateStore.setPendingExecution(null);
			stateStore.clearDisplayedExecution();
		} else if (workflowResultData.id === "__IN_PROGRESS__") {
			stateStore.setPendingExecution(workflowResultData);
			stateStore.setActiveExecutionId(null);
			useExecutionDataStore(createExecutionDataId(IN_PROGRESS_EXECUTION_ID)).setExecution(workflowResultData);
		} else {
			stateStore.trackExecutionId(workflowResultData.id);
			useExecutionDataStore(createExecutionDataId(workflowResultData.id)).setExecution(workflowResultData);
			if (typeof stateStore.activeExecutionId !== "string") {
				stateStore.setPendingExecution(null);
				stateStore.setActiveExecutionId(void 0);
				stateStore.setDisplayedExecutionId(workflowResultData.id);
			}
		}
	}
	function setActiveExecutionId(id) {
		useWorkflowExecutionStateStore(createWorkflowExecutionStateId(ws.workflowId)).setActiveExecutionId(id);
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
		const stateStore = useWorkflowExecutionStateStore(createWorkflowExecutionStateId(ws.workflowId));
		const activeExecutionId = stateStore.activeExecutionId;
		stateStore.setActiveExecutionId(void 0);
		workflowStateStore.executingNode.clearNodeExecutionQueue();
		stateStore.setExecutionWaitingForWebhook(false);
		const workflowDocumentStore = useWorkflowDocumentStore(createWorkflowDocumentId(ws.workflowId));
		documentTitle.setDocumentTitle(workflowDocumentStore.name, "IDLE");
		if (typeof activeExecutionId === "string") {
			const executionDataStore = useExecutionDataStore(createExecutionDataId(activeExecutionId));
			executionDataStore.clearExecutionStartedData();
			executionDataStore.markAsStopped(stopData);
		} else if (activeExecutionId === null) {
			const executionDataStore = useExecutionDataStore(createExecutionDataId(IN_PROGRESS_EXECUTION_ID));
			executionDataStore.clearExecutionStartedData();
			executionDataStore.markAsStopped(stopData);
			if (stopData) stateStore.applyStopDataToPendingExecution(stopData);
		} else {
			const displayedExecutionId = stateStore.displayedExecutionId;
			if (typeof displayedExecutionId === "string") {
				const executionDataStore = useExecutionDataStore(createExecutionDataId(displayedExecutionId));
				executionDataStore.clearExecutionStartedData();
				executionDataStore.markAsStopped(stopData);
			}
		}
		clearPopupWindowState();
	}
	function resetState() {
		const wid = ws.workflowId;
		if (!wid) {
			workflowStateStore.executingNode.executingNode.length = 0;
			useBuilderStore().resetManualExecutionStats();
			return;
		}
		const stateStore = useWorkflowExecutionStateStore(createWorkflowExecutionStateId(wid));
		stateStore.resetExecutionState();
		disposeWorkflowExecutionStateStore(stateStore);
		workflowStateStore.executingNode.executingNode.length = 0;
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
