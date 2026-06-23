import { It as ref, S as computed } from "./vue.runtime.esm-bundler-CiTcVoZc.js";
import { s as useI18n } from "./src-D8xRy2J0.js";
import { t as useToast } from "./useToast-DAdCVdhz.js";
import { As as generateNodesGraph, Ss as createRunExecutionData, Yc as EVALUATION_TRIGGER_NODE_TYPE, na as WORKFLOW_SETTINGS_MODAL_KEY, ol as TRIMMED_TASK_DATA_CONNECTIONS_KEY, yc as isCommunityPackageName } from "./constants-BiYlbN9Z.js";
import { Ci as isValidNodeConnectionType, Gt as useWorkflowHelpers, M as useNodeTypesStore, S as useWorkflowDocumentStore, Un as getTriggerNodeServiceName, f as openFormPopupWindow, h as parse, l as getExecutionErrorMessage, ni as createExecutionDataId, r as clearPopupWindowState, ri as useExecutionDataStore, rt as SampleTemplates, st as isTutorialTemplateId, t as useWorkflowsStore, u as getExecutionErrorToastConfiguration, v as useWorkflowExecutionStateStore, vt as useCredentialsStore, x as injectWorkflowDocumentStore, y as createWorkflowDocumentId } from "./workflows.store-Cb_U1DcB.js";
import { T as defineStore, t as useRootStore } from "./useRootStore-DbgDMM5M.js";
import { at as sendGetWorkerStatus, t as useSettingsStore } from "./settings.store-DROe9gro.js";
import { t as useBannersStore } from "./banners.store-CTpeJdoJ.js";
import { f as useUIStore, p as useTelemetry } from "./users.store-CUZkGc51.js";
import { t as useWorkflowsListStore } from "./workflowsList.store-CHLmHbKZ.js";
import { t as useDocumentTitle } from "./useDocumentTitle-B687jMRp.js";
import { t as useExternalHooks } from "./useExternalHooks-CHBADWsB.js";
import { r as useWorkflowSaving, t as useBuilderStore } from "./builder.store-CtNK1dxn.js";
import { t as useNodeHelpers } from "./useNodeHelpers-1JmJdsk0.js";
import { i as globalLinkActionsEventBus, o as codeNodeEditorEventBus } from "./event-bus-D26CxQSb.js";
import { t as useAssistantStore } from "./assistant.store-YQJ9GxDW.js";
import { t as useCanvasOperations } from "./useCanvasOperations-B7hvlwMm.js";
import { i as useSchemaPreviewStore, t as useRunWorkflow } from "./useRunWorkflow-iyyCZVlB.js";
import { t as usePushConnectionStore } from "./pushConnection.store-CcpWZbe3.js";
import { t as useEditorContext } from "./useEditorContext-L2G6oLNO.js";
import { t as useActivationError } from "./useActivationError-bPP6brEn.js";
import { t as useReadyToRunStore } from "./readyToRun.store-OxDVpfXG.js";
import { t as useAITemplatesStarterCollectionStore } from "./aiTemplatesStarterCollection.store-CDU8VTR6.js";
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
	const { documentId, suppressExecutionSuccessToasts, suppressExecutionErrorToasts } = options;
	const workflowsListStore = useWorkflowsListStore();
	const uiStore = useUIStore();
	const aiTemplatesStarterCollectionStore = useAITemplatesStarterCollectionStore();
	const readyToRunStore = useReadyToRunStore();
	const workflowExecutionStateStore = useWorkflowExecutionStateStore(documentId);
	const { activeExecutionId, stoppedExecutionId } = workflowExecutionStateStore;
	const isFinishOfStoppedExecution = activeExecutionId === void 0 && stoppedExecutionId === data.executionId;
	const belongsToThisDocument = activeExecutionId === data.executionId || activeExecutionId === null && data.workflowId === workflowExecutionStateStore.workflowId || isFinishOfStoppedExecution;
	if (isFinishOfStoppedExecution) workflowExecutionStateStore.clearStoppedExecutionId();
	if (belongsToThisDocument || activeExecutionId === void 0) workflowExecutionStateStore.executingNode.clearNodeExecutionQueue();
	if (!belongsToThisDocument) return;
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
		handleExecutionFinishedWithSuccessOrOther(documentId, data.status, successToastAlreadyShown, suppressExecutionSuccessToasts);
		successToastAlreadyShown = true;
	}
	const execution = await fetchExecutionData(data.executionId, documentId);
	/**
	* This accounts for the case where the execution is not stored.
	* We clear the active execution id and set processing to false and return early.
	* Returning early presists existing run data up to this point.
	*/
	if (!execution) {
		workflowExecutionStateStore.setActiveExecutionId(void 0);
		uiStore.setProcessingExecutionResults(false);
		return;
	}
	const runExecutionData = getRunExecutionData(execution);
	uiStore.setProcessingExecutionResults(false);
	if (execution.data?.waitTill !== void 0) handleExecutionFinishedWithWaitTill(data.workflowId, options);
	else if (execution.status === "error" || execution.status === "canceled") handleExecutionFinishedWithErrorOrCanceled(execution, runExecutionData, documentId, suppressExecutionErrorToasts);
	else handleExecutionFinishedWithSuccessOrOther(documentId, execution.status, successToastAlreadyShown, suppressExecutionSuccessToasts);
	setRunExecutionData(execution, runExecutionData, documentId);
	continueEvaluationLoop(execution, options);
}
/**
* Implicit looping: This will re-trigger the evaluation trigger if it exists on a successful execution of the workflow.
* @param execution
* @param opts
*/
function continueEvaluationLoop(execution, opts) {
	if (execution.status !== "success" || execution.data?.startData?.destinationNode !== void 0) return;
	const evaluationTrigger = execution.workflowData.nodes.find((node) => node.type === EVALUATION_TRIGGER_NODE_TYPE);
	const triggerRunData = evaluationTrigger ? execution?.data?.resultData?.runData[evaluationTrigger.name] : void 0;
	if (!evaluationTrigger || triggerRunData === void 0) return;
	const mainData = triggerRunData[0]?.data?.main[0];
	const rowsLeft = mainData ? mainData[0]?.json?._rowsLeft : 0;
	if (rowsLeft && rowsLeft > 0) {
		const { runWorkflow } = useRunWorkflow({
			router: opts.router,
			workflowDocumentStore: computed(() => useWorkflowDocumentStore(opts.documentId))
		});
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
async function fetchExecutionData(executionId, documentId) {
	const workflowsStore = useWorkflowsStore();
	const workflowDocumentStore = useWorkflowDocumentStore(documentId);
	try {
		const executionResponse = await workflowsStore.fetchExecutionDataById(executionId);
		if (!executionResponse?.data) return;
		return {
			id: executionId,
			workflowId: executionResponse.workflowId,
			workflowData: workflowDocumentStore.getSnapshot(),
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
function getRunDataExecutedErrorMessage(execution, documentId) {
	const i18n = useI18n();
	if (execution.status === "crashed") return i18n.baseText("pushConnection.executionFailed.message");
	else if (execution.status === "canceled") {
		const workflowExecutionStateStore = useWorkflowExecutionStateStore(documentId);
		return i18n.baseText("executionsList.showMessage.stopExecution.message", { interpolate: { activeExecutionId: workflowExecutionStateStore.activeExecutionId ?? "" } });
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
	const workflowSaving = useWorkflowSaving({ router: options.router });
	const workflowDocumentStore = useWorkflowDocumentStore(createWorkflowDocumentId(workflowId));
	if (!(workflowDocumentStore.settings.saveManualExecutions ?? settingsStore.saveManualExecutions)) {
		const uiStore = useUIStore();
		globalLinkActionsEventBus.emit("registerGlobalLinkAction", {
			key: "open-settings",
			action: async () => {
				if (!workflowsStore.isWorkflowSaved[useWorkflowDocumentStore(options.documentId).workflowId]) await workflowSaving.saveAsNewWorkflow();
				uiStore.openModal(WORKFLOW_SETTINGS_MODAL_KEY);
			}
		});
	}
	useDocumentTitle().setDocumentTitle(workflowDocumentStore.name, "IDLE");
}
/**
* Handle the case when the workflow execution finished with an `error` or `canceled` status.
*/
function handleExecutionFinishedWithErrorOrCanceled(execution, runExecutionData, documentId, suppressToasts = false) {
	const toast = useToast();
	const i18n = useI18n();
	const telemetry = useTelemetry();
	const workflowDocumentStore = useWorkflowDocumentStore(documentId);
	const documentTitle = useDocumentTitle();
	const workflowHelpers = useWorkflowHelpers();
	documentTitle.setDocumentTitle(workflowDocumentStore.name, "ERROR");
	if (runExecutionData.resultData.error?.name === "ExpressionError" && runExecutionData.resultData.error.functionality === "pairedItem") {
		const error = runExecutionData.resultData.error;
		const workflowData = workflowDocumentStore.serialize();
		const eventData = {
			caused_by_credential: false,
			error_message: error.description,
			error_title: error.message,
			error_type: error.context.type,
			node_graph_string: JSON.stringify(generateNodesGraph(workflowData, workflowHelpers.getNodeTypes()).nodeGraph),
			workflow_id: workflowDocumentStore.workflowId
		};
		if (error.context.nodeCause && ["paired_item_no_info", "paired_item_invalid_info"].includes(error.context.type)) {
			const node = workflowDocumentStore.getNodeByName(error.context.nodeCause);
			if (node) {
				eventData.is_pinned = !!workflowDocumentStore.pinnedDataByNodeName?.[node.name];
				eventData.mode = node.parameters.mode;
				eventData.node_type = node.type;
				eventData.operation = node.parameters.operation;
				eventData.resource = node.parameters.resource;
			}
		}
		telemetry.track("Instance FE emitted paired item error", eventData);
	}
	if (execution.status === "canceled") {
		if (!suppressToasts) toast.showMessage({
			title: i18n.baseText("nodeView.showMessage.stopExecutionTry.title"),
			type: "success"
		});
	} else if (execution.data?.resultData.error) {
		if (!suppressToasts) {
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
		}
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
function handleExecutionFinishedSuccessfully(workflowName, message, documentId, suppressToasts = false) {
	const toast = useToast();
	useDocumentTitle().setDocumentTitle(workflowName, "IDLE");
	useWorkflowExecutionStateStore(documentId).setActiveExecutionId(void 0);
	if (!suppressToasts) toast.showMessage({
		title: message,
		type: "success"
	});
}
/**
* Handle the case when the workflow execution finished successfully.
*/
function handleExecutionFinishedWithSuccessOrOther(documentId, executionStatus, successToastAlreadyShown, suppressToasts = false) {
	const workflowsStore = useWorkflowsStore();
	const toast = useToast();
	const i18n = useI18n();
	const nodeTypesStore = useNodeTypesStore();
	const workflowDocumentStore = useWorkflowDocumentStore(documentId);
	const workflowName = workflowDocumentStore.name;
	useDocumentTitle().setDocumentTitle(workflowName, "IDLE");
	const workflowExecution = workflowsStore.getWorkflowExecution;
	if (workflowExecution?.executedNode) {
		const node = workflowDocumentStore.getNodeByName(workflowExecution.executedNode) ?? null;
		const nodeType = node && nodeTypesStore.getNodeType(node.type, node.typeVersion);
		const nodeOutput = workflowExecution.data?.resultData?.runData?.[workflowExecution.executedNode];
		if (nodeType?.polling && !nodeOutput) {
			if (!suppressToasts) toast.showMessage({
				title: i18n.baseText("pushConnection.pollingNode.dataNotFound", { interpolate: { service: getTriggerNodeServiceName(nodeType) } }),
				message: i18n.baseText("pushConnection.pollingNode.dataNotFound.message", { interpolate: { service: getTriggerNodeServiceName(nodeType) } }),
				type: "success"
			});
		} else if (!nodeOutput && !successToastAlreadyShown) {
			if (!suppressToasts) toast.showMessage({
				title: i18n.baseText("pushConnection.nodeNotExecuted"),
				message: i18n.baseText("pushConnection.nodeNotExecuted.message"),
				type: "warning"
			});
		} else if (!successToastAlreadyShown) handleExecutionFinishedSuccessfully(workflowName, i18n.baseText("pushConnection.nodeExecutedSuccessfully"), documentId, suppressToasts);
	} else if (!successToastAlreadyShown) handleExecutionFinishedSuccessfully(workflowName, i18n.baseText("pushConnection.workflowExecutedSuccessfully"), documentId, suppressToasts);
	if (executionStatus === "success" && !successToastAlreadyShown) useBuilderStore().incrementManualExecutionStats("success");
}
function setRunExecutionData(execution, runExecutionData, documentId) {
	const workflowExecutionStateStore = useWorkflowExecutionStateStore(documentId);
	const nodeHelpers = useNodeHelpers();
	const runDataExecutedErrorMessage = getRunDataExecutedErrorMessage(execution, documentId);
	workflowExecutionStateStore.executingNode.clearNodeExecutionQueue();
	const executionDataStore = useExecutionDataStore(createExecutionDataId(execution.id));
	const workflowExecution = executionDataStore.getExecutionSnapshot();
	if (workflowExecution === null) return;
	executionDataStore.setExecution({
		...workflowExecution,
		status: execution.status,
		id: execution.id,
		stoppedAt: execution.stoppedAt
	});
	executionDataStore.setExecutionRunData(runExecutionData);
	workflowExecutionStateStore.setActiveExecutionId(void 0);
	nodeHelpers.updateNodesExecutionIssues();
	const lastNodeExecuted = runExecutionData.resultData.lastNodeExecuted;
	let itemsCount = 0;
	if (lastNodeExecuted && runExecutionData.resultData.runData[lastNodeExecuted] && !runDataExecutedErrorMessage) itemsCount = runExecutionData.resultData.runData[lastNodeExecuted][0].data?.main[0]?.length ?? 0;
	workflowExecutionStateStore.setActiveExecutionId(void 0);
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
	const { documentId, suppressExecutionSuccessToasts, suppressExecutionErrorToasts } = options;
	const workflowExecutionStateStore = useWorkflowExecutionStateStore(documentId);
	const uiStore = useUIStore();
	if (workflowExecutionStateStore.activeExecutionId !== data.executionId) return;
	uiStore.setProcessingExecutionResults(true);
	const execution = await fetchExecutionData(data.executionId, documentId);
	if (!execution) {
		uiStore.setProcessingExecutionResults(false);
		return;
	}
	const runExecutionData = getRunExecutionData(execution);
	uiStore.setProcessingExecutionResults(false);
	if (execution.data?.waitTill !== void 0) handleExecutionFinishedWithWaitTill(execution.workflowId ?? "", options);
	else if (execution.status === "error" || execution.status === "canceled") handleExecutionFinishedWithErrorOrCanceled(execution, runExecutionData, documentId, suppressExecutionErrorToasts);
	else handleExecutionFinishedWithSuccessOrOther(documentId, execution.status, false, suppressExecutionSuccessToasts);
	setRunExecutionData(execution, runExecutionData, documentId);
}
//#endregion
//#region src/app/composables/usePushConnection/handlers/executionStarted.ts
/**
* Handles the 'executionStarted' event, which happens when a workflow is executed.
*/
async function executionStarted({ data }, { documentId }) {
	const workflowDocumentStore = useWorkflowDocumentStore(documentId);
	const workflowExecutionStateStore = useWorkflowExecutionStateStore(documentId);
	const isIframe = window !== window.parent;
	if (!isIframe && data.workflowId !== workflowExecutionStateStore.workflowId) return;
	if (typeof workflowExecutionStateStore.activeExecutionId === "undefined" && !isIframe) return;
	const needsInit = workflowExecutionStateStore.activeExecutionId === null || typeof workflowExecutionStateStore.activeExecutionId === "undefined" || isIframe && workflowExecutionStateStore.activeExecutionId !== data.executionId;
	if (needsInit) workflowExecutionStateStore.promotePendingExecution(data.executionId);
	const executionDataStore = useExecutionDataStore(createExecutionDataId(data.executionId));
	if (!executionDataStore.execution?.data || needsInit) executionDataStore.setExecution({
		id: data.executionId,
		finished: false,
		mode: "manual",
		status: "running",
		createdAt: /* @__PURE__ */ new Date(),
		startedAt: /* @__PURE__ */ new Date(),
		workflowData: workflowDocumentStore.getSnapshot(),
		data: createRunExecutionData()
	});
	if (executionDataStore.execution?.data && data.flattedRunData) executionDataStore.setExecutionRunData({
		...executionDataStore.execution.data,
		resultData: {
			...executionDataStore.execution.data.resultData,
			runData: parse(data.flattedRunData)
		}
	});
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
//#region src/app/composables/usePushConnection/handlers/trackNodeExecution.ts
async function trackNodeExecution(pushData, workflowId) {
	const nodeName = pushData.nodeName;
	if (pushData.data.error) {
		const telemetry = useTelemetry();
		const workflowHelpers = useWorkflowHelpers();
		const settingsStore = useSettingsStore();
		const workflowDocumentStore = useWorkflowDocumentStore(createWorkflowDocumentId(workflowId));
		const node = workflowDocumentStore.getNodeByName(nodeName);
		telemetry.track("Manual exec errored", {
			error_title: pushData.data.error.message,
			node_type: node?.type,
			node_type_version: node?.typeVersion,
			node_id: node?.id,
			node_graph_string: JSON.stringify(generateNodesGraph(workflowDocumentStore.serialize(), workflowHelpers.getNodeTypes(), { isCloudDeployment: settingsStore.isCloudDeployment }).nodeGraph)
		});
	}
}
//#endregion
//#region src/app/composables/usePushConnection/handlers/nodeExecuteAfter.ts
/**
* Handles the 'nodeExecuteAfter' event, which happens after a node is executed.
*/
async function nodeExecuteAfter({ data: pushData }, { documentId }) {
	const workflowExecutionStateStore = useWorkflowExecutionStateStore(documentId);
	const assistantStore = useAssistantStore();
	if (workflowExecutionStateStore.activeExecutionId !== pushData.executionId) return;
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
	useExecutionDataStore(createExecutionDataId(pushData.executionId)).updateNodeExecutionStatus(pushDataWithPlaceholderOutputData);
	if (pushDataWithPlaceholderOutputData.data.executionStatus !== "waiting") trackNodeExecution(pushDataWithPlaceholderOutputData, workflowExecutionStateStore.workflowId);
	workflowExecutionStateStore.executingNode.removeExecutingNode(pushData.nodeName);
	if (pushData.data.executionStatus === "waiting" && pushData.data.metadata?.resumeFormUrl) openFormPopupWindow(pushData.data.metadata.resumeFormUrl);
	else if (pushData.data.executionStatus !== "waiting") trackNodeExecution(pushData, workflowExecutionStateStore.workflowId);
	assistantStore.onNodeExecution(pushData);
}
//#endregion
//#region src/app/composables/usePushConnection/handlers/nodeExecuteAfterData.ts
/**
* Handles the 'nodeExecuteAfterData' event, which is sent after a node has executed and contains the resulting data.
*/
async function nodeExecuteAfterData({ data: pushData }, { documentId }) {
	const workflowDocumentStore = useWorkflowDocumentStore(documentId);
	const workflowExecutionStateStore = useWorkflowExecutionStateStore(documentId);
	const schemaPreviewStore = useSchemaPreviewStore();
	if (workflowExecutionStateStore.activeExecutionId !== pushData.executionId) return;
	useExecutionDataStore(createExecutionDataId(pushData.executionId)).updateNodeExecutionRunData(pushData);
	const node = workflowDocumentStore.getNodeByName(pushData.nodeName);
	if (!node) return;
	schemaPreviewStore.trackSchemaPreviewExecution(workflowDocumentStore.workflowId, node, pushData);
}
//#endregion
//#region src/app/composables/usePushConnection/handlers/nodeExecuteBefore.ts
/**
* Handles the 'nodeExecuteBefore' event, which happens before a node is executed.
*/
async function nodeExecuteBefore({ data }, { documentId }) {
	const workflowExecutionStateStore = useWorkflowExecutionStateStore(documentId);
	if (workflowExecutionStateStore.activeExecutionId !== data.executionId) return;
	workflowExecutionStateStore.executingNode.addExecutingNode(data.nodeName);
	useExecutionDataStore(createExecutionDataId(data.executionId)).addNodeExecutionStartedData(data);
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
async function testWebhookDeleted({ data }, { documentId }) {
	const workflowExecutionStateStore = useWorkflowExecutionStateStore(documentId);
	if (data.workflowId === workflowExecutionStateStore.workflowId) {
		workflowExecutionStateStore.setExecutionWaitingForWebhook(false);
		workflowExecutionStateStore.setActiveExecutionId(void 0);
	}
}
//#endregion
//#region src/app/composables/usePushConnection/handlers/testWebhookReceived.ts
/**
* Handles the 'testWebhookReceived' push message, which is sent when a test webhook is received.
*/
async function testWebhookReceived({ data }, { documentId }) {
	const workflowExecutionStateStore = useWorkflowExecutionStateStore(documentId);
	if (data.workflowId === workflowExecutionStateStore.workflowId) {
		workflowExecutionStateStore.setExecutionWaitingForWebhook(false);
		workflowExecutionStateStore.setActiveExecutionId(data.executionId ?? null);
	}
}
//#endregion
//#region src/app/composables/usePushConnection/handlers/workflowActivated.ts
async function workflowActivated({ data }, { documentId }) {
	const { initializeWorkspace } = useCanvasOperations();
	const workflowsListStore = useWorkflowsListStore();
	const workflowDocumentStore = useWorkflowDocumentStore(documentId);
	const bannersStore = useBannersStore();
	const uiStore = useUIStore();
	const { workflowId, activeVersionId } = data;
	const workflowIsBeingViewed = workflowDocumentStore.workflowId === workflowId;
	const activeVersionChanged = workflowDocumentStore.activeVersionId !== activeVersionId;
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
async function workflowAutoDeactivated({ data }, { documentId }) {
	const workflowsStore = useWorkflowsStore();
	const workflowsListStore = useWorkflowsListStore();
	const workflowDocumentStore = useWorkflowDocumentStore(documentId);
	const { initializeWorkspace } = useCanvasOperations();
	const bannersStore = useBannersStore();
	const uiStore = useUIStore();
	workflowsStore.setWorkflowInactive(data.workflowId);
	if (workflowDocumentStore.workflowId === data.workflowId) {
		if (!uiStore.stateIsDirty) {
			const updatedWorkflow = await workflowsListStore.fetchWorkflow(data.workflowId);
			if (!updatedWorkflow.checksum) throw new Error("Failed to fetch workflow");
			await initializeWorkspace(updatedWorkflow);
		} else workflowDocumentStore.setActiveState({
			activeVersionId: null,
			activeVersion: null
		});
		bannersStore.pushBannerToStack("WORKFLOW_AUTO_DEACTIVATED");
	}
}
//#endregion
//#region src/app/composables/usePushConnection/handlers/workflowDeactivated.ts
async function workflowDeactivated({ data }, { documentId }) {
	const { initializeWorkspace } = useCanvasOperations();
	const workflowsListStore = useWorkflowsListStore();
	const workflowDocumentStore = useWorkflowDocumentStore(documentId);
	const uiStore = useUIStore();
	if (workflowDocumentStore.workflowId === data.workflowId) if (!uiStore.stateIsDirty) {
		const updatedWorkflow = await workflowsListStore.fetchWorkflow(data.workflowId);
		if (!updatedWorkflow.checksum) throw new Error("Failed to fetch workflow");
		await initializeWorkspace(updatedWorkflow);
	} else workflowDocumentStore.setActiveState({
		activeVersionId: null,
		activeVersion: null
	});
}
//#endregion
//#region src/app/composables/usePushConnection/handlers/workflowFailedToActivate.ts
async function workflowFailedToActivate({ data }, { documentId }) {
	const workflowsStore = useWorkflowsStore();
	const workflowDocumentStore = useWorkflowDocumentStore(documentId);
	if (workflowDocumentStore.workflowId !== data.workflowId) return;
	workflowsStore.setWorkflowInactive(data.workflowId);
	workflowDocumentStore.setActiveState({
		activeVersionId: null,
		activeVersion: null
	});
	const toast = useToast();
	const i18n = useI18n();
	const { errorMessage } = useActivationError(() => data.nodeId);
	const title = i18n.baseText("workflowActivator.showError.title", { interpolate: { newStateName: "activated" } });
	toast.showError(new Error(data.errorMessage), title, {
		message: errorMessage.value,
		description: data.errorDescription
	});
}
//#endregion
//#region src/app/composables/usePushConnection/handlers/workflowPartiallyActivated.ts
async function workflowPartiallyActivated({ data }, { documentId }) {
	const { initializeWorkspace } = useCanvasOperations();
	const workflowsListStore = useWorkflowsListStore();
	const workflowDocumentStore = useWorkflowDocumentStore(documentId);
	const bannersStore = useBannersStore();
	const uiStore = useUIStore();
	const { workflowId, activeVersionId } = data;
	if (workflowDocumentStore.workflowId !== workflowId) return;
	const toast = useToast();
	const i18n = useI18n();
	toast.showError(new Error(data.errorMessage), i18n.baseText("workflowActivator.showError.partialTitle"));
	if (workflowDocumentStore.activeVersionId !== activeVersionId && !uiStore.stateIsDirty) {
		const updatedWorkflow = await workflowsListStore.fetchWorkflow(workflowId);
		if (!updatedWorkflow.checksum) throw new Error("Failed to fetch workflow");
		await initializeWorkspace(updatedWorkflow);
	}
	bannersStore.removeBannerFromStack("WORKFLOW_AUTO_DEACTIVATED");
}
//#endregion
//#region src/app/composables/usePushConnection/handlers/workflowSettingsUpdated.ts
async function workflowSettingsUpdated({ data: { workflowId, settings, checksum } }, { documentId }) {
	const listEntry = useWorkflowsListStore().workflowsById[workflowId];
	if (listEntry) {
		if (listEntry.settings) Object.assign(listEntry.settings, settings);
		else listEntry.settings = { ...settings };
		if (checksum) listEntry.checksum = checksum;
	}
	const workflowDocumentStore = useWorkflowDocumentStore(documentId);
	if (workflowId !== workflowDocumentStore.workflowId) return;
	workflowDocumentStore.mergeSettings(settings);
	if (checksum) workflowDocumentStore.setChecksum(checksum);
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
function usePushConnection({ router }) {
	const pushStore = usePushConnectionStore();
	const workflowDocumentStore = injectWorkflowDocumentStore();
	const { executionSuccessToasts, executionErrorToasts } = useEditorContext();
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
		const options = {
			router,
			documentId: workflowDocumentStore.value.documentId,
			suppressExecutionSuccessToasts: !executionSuccessToasts.value,
			suppressExecutionErrorToasts: !executionErrorToasts.value
		};
		switch (event.type) {
			case "testWebhookDeleted": return await testWebhookDeleted(event, options);
			case "testWebhookReceived": return await testWebhookReceived(event, options);
			case "reloadNodeType": return await reloadNodeType(event);
			case "removeNodeType": return await removeNodeType(event);
			case "nodeDescriptionUpdated": return await nodeDescriptionUpdated(event);
			case "nodeExecuteBefore": return await nodeExecuteBefore(event, options);
			case "nodeExecuteAfter": return await nodeExecuteAfter(event, options);
			case "nodeExecuteAfterData": return await nodeExecuteAfterData(event, options);
			case "executionStarted": return await executionStarted(event, options);
			case "sendWorkerStatusMessage": return await sendWorkerStatusMessage(event);
			case "sendConsoleMessage": return await sendConsoleMessage(event);
			case "workflowFailedToActivate": return await workflowFailedToActivate(event, options);
			case "workflowPartiallyActivated": return await workflowPartiallyActivated(event, options);
			case "executionFinished": return await executionFinished(event, options);
			case "executionRecovered": return await executionRecovered(event, options);
			case "workflowActivated": return await workflowActivated(event, options);
			case "workflowDeactivated": return await workflowDeactivated(event, options);
			case "workflowAutoDeactivated": return await workflowAutoDeactivated(event, options);
			case "workflowSettingsUpdated": return await workflowSettingsUpdated(event, options);
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
