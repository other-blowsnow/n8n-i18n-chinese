import { Ft as ref } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { at as useI18n } from "./core-CeTE1DvB.js";
import { Bt as useWorkflowSaving, Dt as injectWorkflowState, Et as useWorkflowHelpers, Fn as useToast, Ft as globalLinkActionsEventBus, G as SampleTemplates, Ir as isValidNodeConnectionType, Ji as getTriggerNodeServiceName, Ln as useExternalHooks, Lt as codeNodeEditorEventBus, Y as isTutorialTemplateId, at as useCredentialsStore, b as getExecutionErrorToastConfiguration, cr as useWorkflowsListStore, fa as parse, ia as createWorkflowDocumentId, kt as useBuilderStore, m as clearPopupWindowState, oa as injectWorkflowDocumentStore, pr as useTelemetry, r as useUIStore, s as useWorkflowsStore, sa as useWorkflowDocumentStore, ur as useNodeHelpers, w as useNodeTypesStore, y as getExecutionErrorMessage, zt as useDocumentTitle } from "./users.store-CMUNEDY7.js";
import { Hs as TRIMMED_TASK_DATA_CONNECTIONS_KEY, Ns as EVALUATION_TRIGGER_NODE_TYPE, Oi as WORKFLOW_SETTINGS_MODAL_KEY, _o as generateNodesGraph, do as createRunExecutionData, ts as isCommunityPackageName } from "./constants-BehPiBy1.js";
import { T as defineStore, t as useRootStore } from "./useRootStore-D7Ov37x3.js";
import { it as sendGetWorkerStatus, t as useSettingsStore } from "./settings.store-f02P_MNr.js";
import { t as useBannersStore } from "./banners.store-qs2q4RbB.js";
import { t as useAssistantStore } from "./assistant.store-BZJRpkdV.js";
import { t as useCanvasOperations } from "./useCanvasOperations-BgmvuBht.js";
import { i as useSchemaPreviewStore, t as useRunWorkflow } from "./useRunWorkflow-CNiLTr5U.js";
import { t as usePushConnectionStore } from "./pushConnection.store-DOpaaEiB.js";
import { t as useReadyToRunStore } from "./readyToRun.store-DhQy8Wou.js";
import { t as useAITemplatesStarterCollectionStore } from "./aiTemplatesStarterCollection.store-CUF388ip.js";
//#region src/app/composables/usePushConnection/handlers/builderCreditsUpdated.ts
async function builderCreditsUpdated(event) {
	useBuilderStore().updateBuilderCredits(event.data.creditsQuota, event.data.creditsClaimed);
}
//#endregion
//#region src/app/composables/usePushConnection/handlers/executionFinished.ts
/**
* Handles the 'executionFinished' event, which happens when a workflow execution is finished.
*/
async function executionFinished({ data }, options) {
	const workflowsStore = useWorkflowsStore();
	const workflowsListStore = useWorkflowsListStore();
	const uiStore = useUIStore();
	const aiTemplatesStarterCollectionStore = useAITemplatesStarterCollectionStore();
	const readyToRunStore = useReadyToRunStore();
	options.workflowState.executingNode.lastAddedExecutingNode = null;
	if (typeof workflowsStore.activeExecutionId === "undefined") return;
	const telemetry = useTelemetry();
	clearPopupWindowState();
	const templateId = workflowsListStore.getWorkflowById(data.workflowId)?.meta?.templateId;
	if (templateId) {
		if (templateId === SampleTemplates.EasyAiTemplate) telemetry.track("User executed test AI workflow", { status: data.status });
		else if (templateId.startsWith("035_template_onboarding")) aiTemplatesStarterCollectionStore.trackUserExecutedWorkflow(templateId.split("-").pop() ?? "", data.status);
		else if (templateId === "ready-to-run-ai-workflow" || templateId === "ready-to-run-ai-workflow-v5" || templateId === "ready-to-run-ai-workflow-v6") if (data.status === "success") readyToRunStore.trackExecuteAiWorkflowSuccess();
		else readyToRunStore.trackExecuteAiWorkflow(data.status);
		else if (isTutorialTemplateId(templateId)) telemetry.track("User executed tutorial template", {
			template: templateId,
			status: data.status
		});
	}
	uiStore.setProcessingExecutionResults(true);
	let successToastAlreadyShown = false;
	if (data.status === "success") {
		handleExecutionFinishedWithSuccessOrOther(options.workflowState, data.status, successToastAlreadyShown);
		successToastAlreadyShown = true;
	}
	const execution = await fetchExecutionData(data.executionId);
	/**
	* This accounts for the case where the execution is not stored.
	* We clear the active execution id and set processing to false and return early.
	* Returning early presists existing run data up to this point.
	*/
	if (!execution) {
		options.workflowState.setActiveExecutionId(void 0);
		uiStore.setProcessingExecutionResults(false);
		return;
	}
	const runExecutionData = getRunExecutionData(execution);
	uiStore.setProcessingExecutionResults(false);
	if (execution.data?.waitTill !== void 0) handleExecutionFinishedWithWaitTill(data.workflowId, options);
	else if (execution.status === "error" || execution.status === "canceled") handleExecutionFinishedWithErrorOrCanceled(execution, runExecutionData);
	else handleExecutionFinishedWithSuccessOrOther(options.workflowState, execution.status, successToastAlreadyShown);
	setRunExecutionData(execution, runExecutionData, options.workflowState);
	continueEvaluationLoop(execution, options);
}
/**
* Implicit looping: This will re-trigger the evaluation trigger if it exists on a successful execution of the workflow.
* @param execution
* @param router
*/
function continueEvaluationLoop(execution, opts) {
	if (execution.status !== "success" || execution.data?.startData?.destinationNode !== void 0) return;
	const evaluationTrigger = execution.workflowData.nodes.find((node) => node.type === EVALUATION_TRIGGER_NODE_TYPE);
	const triggerRunData = evaluationTrigger ? execution?.data?.resultData?.runData[evaluationTrigger.name] : void 0;
	if (!evaluationTrigger || triggerRunData === void 0) return;
	const mainData = triggerRunData[0]?.data?.main[0];
	const rowsLeft = mainData ? mainData[0]?.json?._rowsLeft : 0;
	if (rowsLeft && rowsLeft > 0) {
		const { runWorkflow } = useRunWorkflow(opts);
		runWorkflow({
			triggerNode: evaluationTrigger.name,
			nodeData: triggerRunData[0],
			rerunTriggerNode: true
		});
	}
}
/**
* Fetches the execution data from the server and returns a simplified execution object
*/
async function fetchExecutionData(executionId) {
	const workflowsStore = useWorkflowsStore();
	try {
		const executionResponse = await workflowsStore.fetchExecutionDataById(executionId);
		if (!executionResponse?.data) return;
		return {
			id: executionId,
			workflowId: executionResponse.workflowId,
			workflowData: workflowsStore.workflow,
			data: executionResponse.data,
			status: executionResponse.status,
			startedAt: workflowsStore.workflowExecutionData?.startedAt,
			stoppedAt: /* @__PURE__ */ new Date()
		};
	} catch {
		return;
	}
}
/**
* Returns the run execution data from the execution object in a normalized format
*/
function getRunExecutionData(execution) {
	return createRunExecutionData({
		...execution.data,
		startData: execution.data?.startData,
		resultData: execution.data?.resultData ?? { runData: {} },
		executionData: execution.data?.executionData
	});
}
/**
* Returns the error message for the execution run data if the execution status is crashed or canceled,
* or a fallback error message otherwise
*/
function getRunDataExecutedErrorMessage(execution) {
	const i18n = useI18n();
	if (execution.status === "crashed") return i18n.baseText("pushConnection.executionFailed.message");
	else if (execution.status === "canceled") {
		const workflowsStore = useWorkflowsStore();
		return i18n.baseText("executionsList.showMessage.stopExecution.message", { interpolate: { activeExecutionId: workflowsStore.activeExecutionId ?? "" } });
	}
	return getExecutionErrorMessage({
		error: execution.data?.resultData.error,
		lastNodeExecuted: execution.data?.resultData.lastNodeExecuted
	});
}
/**
* Handle the case when the workflow execution finished with `waitTill`,
* meaning that it's in a waiting state.
*/
function handleExecutionFinishedWithWaitTill(workflowId, options) {
	const workflowsStore = useWorkflowsStore();
	const settingsStore = useSettingsStore();
	const workflowSaving = useWorkflowSaving(options);
	const workflowObject = workflowsStore.workflowObject;
	if (!(((workflowId ? useWorkflowDocumentStore(createWorkflowDocumentId(workflowId)) : void 0)?.settings ?? {}).saveManualExecutions ?? settingsStore.saveManualExecutions)) {
		const uiStore = useUIStore();
		globalLinkActionsEventBus.emit("registerGlobalLinkAction", {
			key: "open-settings",
			action: async () => {
				if (!workflowsStore.isWorkflowSaved[workflowsStore.workflowId]) await workflowSaving.saveAsNewWorkflow();
				uiStore.openModal(WORKFLOW_SETTINGS_MODAL_KEY);
			}
		});
	}
	useDocumentTitle().setDocumentTitle(workflowObject.name, "IDLE");
}
/**
* Handle the case when the workflow execution finished with an `error` or `canceled` status.
*/
function handleExecutionFinishedWithErrorOrCanceled(execution, runExecutionData) {
	const toast = useToast();
	const i18n = useI18n();
	const telemetry = useTelemetry();
	const workflowsStore = useWorkflowsStore();
	const documentTitle = useDocumentTitle();
	const workflowHelpers = useWorkflowHelpers();
	const workflowObject = workflowsStore.workflowObject;
	documentTitle.setDocumentTitle(workflowObject.name, "ERROR");
	if (runExecutionData.resultData.error?.name === "ExpressionError" && runExecutionData.resultData.error.functionality === "pairedItem") {
		const error = runExecutionData.resultData.error;
		workflowHelpers.getWorkflowDataToSave().then((workflowData) => {
			const eventData = {
				caused_by_credential: false,
				error_message: error.description,
				error_title: error.message,
				error_type: error.context.type,
				node_graph_string: JSON.stringify(generateNodesGraph(workflowData, workflowHelpers.getNodeTypes()).nodeGraph),
				workflow_id: workflowsStore.workflowId
			};
			if (error.context.nodeCause && ["paired_item_no_info", "paired_item_invalid_info"].includes(error.context.type)) {
				const node = workflowObject.getNode(error.context.nodeCause);
				if (node) {
					eventData.is_pinned = !!(workflowsStore.workflowId ? useWorkflowDocumentStore(createWorkflowDocumentId(workflowsStore.workflowId)) : void 0)?.pinData?.[node.name];
					eventData.mode = node.parameters.mode;
					eventData.node_type = node.type;
					eventData.operation = node.parameters.operation;
					eventData.resource = node.parameters.resource;
				}
			}
			telemetry.track("Instance FE emitted paired item error", eventData);
		});
	}
	if (execution.status === "canceled") toast.showMessage({
		title: i18n.baseText("nodeView.showMessage.stopExecutionTry.title"),
		type: "success"
	});
	else if (execution.data?.resultData.error) {
		const { message, title } = getExecutionErrorToastConfiguration({
			error: execution.data.resultData.error,
			lastNodeExecuted: execution.data?.resultData.lastNodeExecuted
		});
		toast.showMessage({
			title,
			message,
			type: "error",
			duration: 0
		});
		useBuilderStore().incrementManualExecutionStats("error");
	}
}
/**
* Handle the case when the workflow execution finished successfully.
*
* On successful completion without data, we show a success toast
* immediately, even though we still need to fetch and deserialize the
* full execution data, to minimize perceived latency.
*/
function handleExecutionFinishedSuccessfully(workflowName, message, workflowState) {
	const toast = useToast();
	useDocumentTitle().setDocumentTitle(workflowName, "IDLE");
	workflowState.setActiveExecutionId(void 0);
	toast.showMessage({
		title: message,
		type: "success"
	});
}
/**
* Handle the case when the workflow execution finished successfully.
*/
function handleExecutionFinishedWithSuccessOrOther(workflowState, executionStatus, successToastAlreadyShown) {
	const workflowsStore = useWorkflowsStore();
	const toast = useToast();
	const i18n = useI18n();
	const nodeTypesStore = useNodeTypesStore();
	const workflowName = workflowsStore.workflowObject.name ?? "";
	const workflowDocumentStore = workflowsStore.workflowId ? useWorkflowDocumentStore(createWorkflowDocumentId(workflowsStore.workflowId)) : void 0;
	useDocumentTitle().setDocumentTitle(workflowName, "IDLE");
	const workflowExecution = workflowsStore.getWorkflowExecution;
	if (workflowExecution?.executedNode) {
		const node = workflowDocumentStore?.getNodeByName(workflowExecution.executedNode) ?? null;
		const nodeType = node && nodeTypesStore.getNodeType(node.type, node.typeVersion);
		const nodeOutput = workflowExecution.data?.resultData?.runData?.[workflowExecution.executedNode];
		if (nodeType?.polling && !nodeOutput) toast.showMessage({
			title: i18n.baseText("pushConnection.pollingNode.dataNotFound", { interpolate: { service: getTriggerNodeServiceName(nodeType) } }),
			message: i18n.baseText("pushConnection.pollingNode.dataNotFound.message", { interpolate: { service: getTriggerNodeServiceName(nodeType) } }),
			type: "success"
		});
		else if (!nodeOutput && !successToastAlreadyShown) toast.showMessage({
			title: i18n.baseText("pushConnection.nodeNotExecuted"),
			message: i18n.baseText("pushConnection.nodeNotExecuted.message"),
			type: "warning"
		});
		else if (!successToastAlreadyShown) handleExecutionFinishedSuccessfully(workflowName, i18n.baseText("pushConnection.nodeExecutedSuccessfully"), workflowState);
	} else if (!successToastAlreadyShown) handleExecutionFinishedSuccessfully(workflowName, i18n.baseText("pushConnection.workflowExecutedSuccessfully"), workflowState);
	if (executionStatus === "success" && !successToastAlreadyShown) useBuilderStore().incrementManualExecutionStats("success");
}
function setRunExecutionData(execution, runExecutionData, workflowState) {
	const workflowsStore = useWorkflowsStore();
	const nodeHelpers = useNodeHelpers();
	const runDataExecutedErrorMessage = getRunDataExecutedErrorMessage(execution);
	const workflowExecution = workflowsStore.getWorkflowExecution;
	workflowState.executingNode.executingNode.length = 0;
	if (workflowExecution === null) return;
	workflowState.setWorkflowExecutionData({
		...workflowExecution,
		status: execution.status,
		id: execution.id,
		stoppedAt: execution.stoppedAt
	});
	workflowsStore.setWorkflowExecutionRunData(runExecutionData);
	workflowState.setActiveExecutionId(void 0);
	nodeHelpers.updateNodesExecutionIssues();
	const lastNodeExecuted = runExecutionData.resultData.lastNodeExecuted;
	let itemsCount = 0;
	if (lastNodeExecuted && runExecutionData.resultData.runData[lastNodeExecuted] && !runDataExecutedErrorMessage) itemsCount = runExecutionData.resultData.runData[lastNodeExecuted][0].data?.main[0]?.length ?? 0;
	workflowState.setActiveExecutionId(void 0);
	useExternalHooks().run("pushConnection.executionFinished", {
		itemsCount,
		nodeName: runExecutionData.resultData.lastNodeExecuted,
		errorMessage: runDataExecutedErrorMessage,
		runDataExecutedStartData: runExecutionData.startData,
		resultDataError: runExecutionData.resultData.error
	});
	const lineNumber = runExecutionData.resultData?.error?.lineNumber;
	codeNodeEditorEventBus.emit("highlightLine", lineNumber ?? "last");
}
//#endregion
//#region src/app/composables/usePushConnection/handlers/executionRecovered.ts
async function executionRecovered({ data }, options) {
	const workflowsStore = useWorkflowsStore();
	const uiStore = useUIStore();
	if (typeof workflowsStore.activeExecutionId === "undefined") return;
	uiStore.setProcessingExecutionResults(true);
	const execution = await fetchExecutionData(data.executionId);
	if (!execution) {
		uiStore.setProcessingExecutionResults(false);
		return;
	}
	const runExecutionData = getRunExecutionData(execution);
	uiStore.setProcessingExecutionResults(false);
	if (execution.data?.waitTill !== void 0) handleExecutionFinishedWithWaitTill(execution.workflowId ?? "", options);
	else if (execution.status === "error" || execution.status === "canceled") handleExecutionFinishedWithErrorOrCanceled(execution, runExecutionData);
	else handleExecutionFinishedWithSuccessOrOther(options.workflowState, execution.status, false);
	setRunExecutionData(execution, runExecutionData, options.workflowState);
}
//#endregion
//#region src/app/composables/usePushConnection/handlers/executionStarted.ts
/**
* Handles the 'executionStarted' event, which happens when a workflow is executed.
*/
async function executionStarted({ data }, options) {
	const workflowsStore = useWorkflowsStore();
	const isIframe = window !== window.parent;
	if (typeof workflowsStore.activeExecutionId === "undefined" && !isIframe) return;
	const needsInit = workflowsStore.activeExecutionId === null || typeof workflowsStore.activeExecutionId === "undefined" || isIframe && workflowsStore.activeExecutionId !== data.executionId;
	if (needsInit) options.workflowState.setActiveExecutionId(data.executionId);
	if (!workflowsStore.workflowExecutionData?.data || needsInit) {
		const wf = workflowsStore.workflow;
		options.workflowState.setWorkflowExecutionData({
			id: data.executionId,
			finished: false,
			mode: "manual",
			status: "running",
			createdAt: /* @__PURE__ */ new Date(),
			startedAt: /* @__PURE__ */ new Date(),
			workflowData: {
				id: wf.id,
				name: wf.name,
				active: wf.active,
				isArchived: wf.isArchived,
				nodes: wf.nodes,
				connections: wf.connections,
				createdAt: wf.createdAt,
				updatedAt: wf.updatedAt,
				versionId: wf.versionId ?? "",
				activeVersionId: wf.activeVersionId ?? null
			},
			data: createRunExecutionData()
		});
	}
	if (workflowsStore.workflowExecutionData?.data && data.flattedRunData) workflowsStore.workflowExecutionData.data.resultData.runData = parse(data.flattedRunData);
}
//#endregion
//#region src/app/composables/usePushConnection/handlers/nodeDescriptionUpdated.ts
/**
* Handles the 'nodeDescriptionUpdated' event from the push connection, which indicates
* that a node description has been updated.
*/
async function nodeDescriptionUpdated(_event) {
	const nodeTypesStore = useNodeTypesStore();
	const credentialsStore = useCredentialsStore();
	await nodeTypesStore.getNodeTypes();
	await credentialsStore.fetchCredentialTypes(true);
}
//#endregion
//#region src/app/composables/usePushConnection/handlers/nodeExecuteAfter.ts
/**
* Handles the 'nodeExecuteAfter' event, which happens after a node is executed.
*/
async function nodeExecuteAfter({ data: pushData }, { workflowState }) {
	const workflowsStore = useWorkflowsStore();
	const assistantStore = useAssistantStore();
	/**
	* We trim the actual data returned from the node execution to avoid performance issues
	* when dealing with large datasets. Instead of storing the actual data, we initially store
	* a placeholder object indicating that the data has been trimmed until the
	* `nodeExecuteAfterData` event comes in.
	*/
	const placeholderOutputData = { main: [] };
	if (pushData.itemCountByConnectionType && typeof pushData.itemCountByConnectionType === "object") {
		const fillObject = { json: { [TRIMMED_TASK_DATA_CONNECTIONS_KEY]: true } };
		for (const [connectionType, outputs] of Object.entries(pushData.itemCountByConnectionType)) if (isValidNodeConnectionType(connectionType)) placeholderOutputData[connectionType] = outputs.map((count) => Array.from({ length: count }, () => fillObject));
	}
	const pushDataWithPlaceholderOutputData = {
		...pushData,
		data: {
			...pushData.data,
			data: placeholderOutputData
		}
	};
	workflowsStore.updateNodeExecutionStatus(pushDataWithPlaceholderOutputData);
	workflowState.executingNode.removeExecutingNode(pushData.nodeName);
	assistantStore.onNodeExecution(pushData);
}
//#endregion
//#region src/app/composables/usePushConnection/handlers/nodeExecuteAfterData.ts
/**
* Handles the 'nodeExecuteAfterData' event, which is sent after a node has executed and contains the resulting data.
*/
async function nodeExecuteAfterData({ data: pushData }) {
	const workflowsStore = useWorkflowsStore();
	const schemaPreviewStore = useSchemaPreviewStore();
	workflowsStore.updateNodeExecutionRunData(pushData);
	schemaPreviewStore.trackSchemaPreviewExecution(pushData);
}
//#endregion
//#region src/app/composables/usePushConnection/handlers/nodeExecuteBefore.ts
/**
* Handles the 'nodeExecuteBefore' event, which happens before a node is executed.
*/
async function nodeExecuteBefore({ data }, { workflowState }) {
	const workflowsStore = useWorkflowsStore();
	workflowState.executingNode.addExecutingNode(data.nodeName);
	workflowsStore.addNodeExecutionStartedData(data);
}
//#endregion
//#region src/app/composables/usePushConnection/handlers/reloadNodeType.ts
/**
* Handles the 'reloadNodeType' event from the push connection, which indicates
* that a node type needs to be reloaded.
*/
async function reloadNodeType({ data }) {
	const nodeTypesStore = useNodeTypesStore();
	await nodeTypesStore.getNodeTypes();
	const isCommunityNode = isCommunityPackageName(data.name);
	await nodeTypesStore.getFullNodesProperties([data], !isCommunityNode);
}
//#endregion
//#region src/app/composables/usePushConnection/handlers/removeNodeType.ts
/**
* Handles the 'removeNodeType' event from the push connection, which indicates
* that a node type needs to be removed
*/
async function removeNodeType({ data }) {
	const nodeTypesStore = useNodeTypesStore();
	const credentialsStore = useCredentialsStore();
	const nodesToBeRemoved = [data];
	await credentialsStore.fetchCredentialTypes(false).then(() => {
		nodeTypesStore.removeNodeTypes(nodesToBeRemoved);
	});
}
//#endregion
//#region src/app/composables/usePushConnection/handlers/sendConsoleMessage.ts
/**
* Handles the 'sendConsoleMessage' event from the push connection, which indicates
* that a console message should be sent.
*/
async function sendConsoleMessage({ data }) {
	console.log(data.source, ...data.messages);
}
var STALE_SECONDS = 120 * 1e3;
var useOrchestrationStore = defineStore("orchestrationManager", {
	state: () => ({
		initialStatusReceived: false,
		workers: {},
		workersHistory: {},
		workersLastUpdated: {},
		statusInterval: null
	}),
	actions: {
		updateWorkerStatus(data) {
			this.workers[data.senderId] = data;
			if (!this.workersHistory[data.senderId]) this.workersHistory[data.senderId] = [];
			this.workersHistory[data.senderId].push({
				data,
				timestamp: Date.now()
			});
			if (this.workersHistory[data.senderId].length > 100) this.workersHistory[data.senderId].shift();
			this.workersLastUpdated[data.senderId] = Date.now();
			this.initialStatusReceived = true;
		},
		removeStaleWorkers() {
			for (const id in this.workersLastUpdated) if (this.workersLastUpdated[id] + STALE_SECONDS < Date.now()) {
				delete this.workers[id];
				delete this.workersHistory[id];
				delete this.workersLastUpdated[id];
			}
		},
		startWorkerStatusPolling() {
			const rootStore = useRootStore();
			if (!this.statusInterval) this.statusInterval = setInterval(async () => {
				await sendGetWorkerStatus(rootStore.restApiContext);
				this.removeStaleWorkers();
			}, 1e3);
		},
		stopWorkerStatusPolling() {
			if (this.statusInterval) {
				clearInterval(this.statusInterval);
				this.statusInterval = null;
			}
		},
		getWorkerLastUpdated(workerId) {
			return this.workersLastUpdated[workerId] ?? 0;
		},
		getWorkerStatus(workerId) {
			return this.workers[workerId];
		},
		getWorkerStatusHistory(workerId) {
			return this.workersHistory[workerId] ?? [];
		}
	}
});
//#endregion
//#region src/app/composables/usePushConnection/handlers/sendWorkerStatusMessage.ts
/**
* Handles the 'sendWorkerStatusMessage' event from the push connection, which indicates
* that a worker status message should be sent.
*/
async function sendWorkerStatusMessage({ data }) {
	useOrchestrationStore().updateWorkerStatus(data.status);
}
//#endregion
//#region src/app/composables/usePushConnection/handlers/testWebhookDeleted.ts
/**
* Handles the 'testWebhookDeleted' push message, which is sent when a test webhook is deleted.
*/
async function testWebhookDeleted({ data }, options) {
	const workflowsStore = useWorkflowsStore();
	if (data.workflowId === workflowsStore.workflowId) {
		workflowsStore.executionWaitingForWebhook = false;
		options.workflowState.setActiveExecutionId(void 0);
	}
}
//#endregion
//#region src/app/composables/usePushConnection/handlers/testWebhookReceived.ts
/**
* Handles the 'testWebhookReceived' push message, which is sent when a test webhook is received.
*/
async function testWebhookReceived({ data }, options) {
	const workflowsStore = useWorkflowsStore();
	if (data.workflowId === workflowsStore.workflowId) {
		workflowsStore.executionWaitingForWebhook = false;
		options.workflowState.setActiveExecutionId(data.executionId ?? null);
	}
}
//#endregion
//#region src/app/composables/usePushConnection/handlers/workflowActivated.ts
async function workflowActivated({ data }) {
	const { initializeWorkspace } = useCanvasOperations();
	const workflowsStore = useWorkflowsStore();
	const workflowsListStore = useWorkflowsListStore();
	const workflowDocumentStore = injectWorkflowDocumentStore();
	const bannersStore = useBannersStore();
	const uiStore = useUIStore();
	const { workflowId, activeVersionId } = data;
	const workflowIsBeingViewed = workflowsStore.workflowId === workflowId;
	const activeVersionChanged = workflowDocumentStore?.value?.activeVersionId !== activeVersionId;
	if (workflowIsBeingViewed && activeVersionChanged) {
		if (!uiStore.stateIsDirty) {
			const updatedWorkflow = await workflowsListStore.fetchWorkflow(workflowId);
			if (!updatedWorkflow.checksum) throw new Error("Failed to fetch workflow");
			await initializeWorkspace(updatedWorkflow);
		}
	}
	if (workflowIsBeingViewed) bannersStore.removeBannerFromStack("WORKFLOW_AUTO_DEACTIVATED");
}
//#endregion
//#region src/app/composables/usePushConnection/handlers/workflowAutoDeactivated.ts
async function workflowAutoDeactivated({ data }) {
	const workflowsStore = useWorkflowsStore();
	const workflowsListStore = useWorkflowsListStore();
	const workflowDocumentStore = injectWorkflowDocumentStore();
	const { initializeWorkspace } = useCanvasOperations();
	const bannersStore = useBannersStore();
	const uiStore = useUIStore();
	workflowsStore.setWorkflowInactive(data.workflowId);
	if (workflowsStore.workflowId === data.workflowId) {
		if (!uiStore.stateIsDirty) {
			const updatedWorkflow = await workflowsListStore.fetchWorkflow(data.workflowId);
			if (!updatedWorkflow.checksum) throw new Error("Failed to fetch workflow");
			await initializeWorkspace(updatedWorkflow);
		} else workflowDocumentStore?.value?.setActiveState({
			activeVersionId: null,
			activeVersion: null
		});
		bannersStore.pushBannerToStack("WORKFLOW_AUTO_DEACTIVATED");
	}
}
//#endregion
//#region src/app/composables/usePushConnection/handlers/workflowDeactivated.ts
async function workflowDeactivated({ data }) {
	const { initializeWorkspace } = useCanvasOperations();
	const workflowsStore = useWorkflowsStore();
	const workflowsListStore = useWorkflowsListStore();
	const workflowDocumentStore = injectWorkflowDocumentStore();
	const uiStore = useUIStore();
	if (workflowsStore.workflowId === data.workflowId) if (!uiStore.stateIsDirty) {
		const updatedWorkflow = await workflowsListStore.fetchWorkflow(data.workflowId);
		if (!updatedWorkflow.checksum) throw new Error("Failed to fetch workflow");
		await initializeWorkspace(updatedWorkflow);
	} else workflowDocumentStore?.value?.setActiveState({
		activeVersionId: null,
		activeVersion: null
	});
}
//#endregion
//#region src/app/composables/usePushConnection/handlers/workflowFailedToActivate.ts
async function workflowFailedToActivate({ data }, _options) {
	const workflowsStore = useWorkflowsStore();
	const workflowDocumentStore = injectWorkflowDocumentStore();
	if (workflowsStore.workflowId !== data.workflowId) return;
	workflowsStore.setWorkflowInactive(data.workflowId);
	workflowDocumentStore?.value?.setActiveState({
		activeVersionId: null,
		activeVersion: null
	});
	const toast = useToast();
	const i18n = useI18n();
	toast.showError(new Error(data.errorMessage), i18n.baseText("workflowActivator.showError.title", { interpolate: { newStateName: "activated" } }) + ":");
}
//#endregion
//#region ../../@n8n/utils/src/event-queue.ts
/**
* Create an event queue that processes events sequentially.
*
* @param processEvent - Async function that processes a single event.
* @returns A function that enqueues events for processing.
*/
function createEventQueue(processEvent) {
	const queue = [];
	let processing = false;
	/**
	* Process the next event in the queue (if not already processing).
	*/
	async function processNext() {
		if (processing || queue.length === 0) return;
		processing = true;
		const currentEvent = queue.shift();
		if (currentEvent !== void 0) try {
			await processEvent(currentEvent);
		} catch (error) {
			console.error("Error processing event:", error);
		}
		processing = false;
		await processNext();
	}
	/**
	* Enqueue an event and trigger processing.
	*
	* @param event - The event to enqueue.
	*/
	function enqueue(event) {
		queue.push(event);
		processNext();
	}
	return { enqueue };
}
//#endregion
//#region src/app/composables/usePushConnection/usePushConnection.ts
function usePushConnection({ router, workflowState }) {
	const pushStore = usePushConnectionStore();
	const options = {
		router,
		workflowState: workflowState ?? injectWorkflowState()
	};
	const { enqueue } = createEventQueue(processEvent);
	const removeEventListener = ref(null);
	function initialize() {
		removeEventListener.value = pushStore.addEventListener((message) => {
			enqueue(message);
		});
	}
	function terminate() {
		if (typeof removeEventListener.value === "function") removeEventListener.value();
	}
	/**
	* Process received push message event by calling the correct handler
	*/
	async function processEvent(event) {
		switch (event.type) {
			case "testWebhookDeleted": return await testWebhookDeleted(event, options);
			case "testWebhookReceived": return await testWebhookReceived(event, options);
			case "reloadNodeType": return await reloadNodeType(event);
			case "removeNodeType": return await removeNodeType(event);
			case "nodeDescriptionUpdated": return await nodeDescriptionUpdated(event);
			case "nodeExecuteBefore": return await nodeExecuteBefore(event, options);
			case "nodeExecuteAfter": return await nodeExecuteAfter(event, options);
			case "nodeExecuteAfterData": return await nodeExecuteAfterData(event);
			case "executionStarted": return await executionStarted(event, options);
			case "sendWorkerStatusMessage": return await sendWorkerStatusMessage(event);
			case "sendConsoleMessage": return await sendConsoleMessage(event);
			case "workflowFailedToActivate": return await workflowFailedToActivate(event, options);
			case "executionFinished": return await executionFinished(event, options);
			case "executionRecovered": return await executionRecovered(event, options);
			case "workflowActivated": return await workflowActivated(event);
			case "workflowDeactivated": return await workflowDeactivated(event);
			case "workflowAutoDeactivated": return await workflowAutoDeactivated(event);
			case "updateBuilderCredits": return await builderCreditsUpdated(event);
		}
	}
	return {
		initialize,
		terminate
	};
}
//#endregion
export { useOrchestrationStore as n, usePushConnection as t };
