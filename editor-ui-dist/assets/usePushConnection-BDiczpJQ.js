import { It as ref } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { gt as useI18n } from "./_MapCache-pT3vKw8Z.js";
import { $ as getExecutionErrorToastConfiguration, At as isPrebuiltAgentTemplateId, Bo as useSettingsStore, Ht as useCredentialsStore, Ni as useUIStore, Q as getExecutionErrorMessage, Qr as getTriggerNodeServiceName, Qs as useRootStore, Sn as injectWorkflowState, Tn as useDocumentTitle, ci as parse, gr as isValidNodeConnectionType, gs as sendGetWorkerStatus, ji as codeNodeEditorEventBus, jt as isTutorialTemplateId, ki as globalLinkActionsEventBus, mn as useWorkflowHelpers, o as useWorkflowsStore, q as clearPopupWindowState, rt as useNodeTypesStore, t as useTelemetry, wt as SampleTemplates, xc as defineStore, xn as useNodeHelpers } from "./useTelemetry-C2EhNQhN.js";
import { t as useToast } from "./useToast-C8xM63lB.js";
import { Sa as TRIMMED_TASK_DATA_CONNECTIONS_KEY, Ui as isCommunityPackageName, fa as EVALUATION_TRIGGER_NODE_TYPE, pi as generateNodesGraph, qo as WORKFLOW_SETTINGS_MODAL_KEY } from "./constants-C_oOJnqT.js";
import { i as useBuilderStore, t as useAssistantStore } from "./assistant.store-CKoUz8Lx.js";
import { t as useExternalHooks } from "./useExternalHooks-CE2Rdzfk.js";
import { t as useWorkflowSaving } from "./useWorkflowSaving-eHdXvbOs.js";
import { i as usePushConnectionStore, t as useRunWorkflow } from "./useRunWorkflow-CekP-uxB.js";
import { t as useSchemaPreviewStore } from "./schemaPreview.store-C5btNE_R.js";
import { n as useAITemplatesStarterCollectionStore, t as useReadyToRunWorkflowsStore } from "./readyToRunWorkflows.store-FlEk_nDy.js";
import { t as useReadyToRunWorkflowsV2Store } from "./readyToRunWorkflowsV2.store-DpzmixIa.js";
async function builderCreditsUpdated(event) {
	useBuilderStore().updateBuilderCredits(event.data.creditsQuota, event.data.creditsClaimed);
}
async function executionFinished({ data }, options) {
	const workflowsStore = useWorkflowsStore();
	const uiStore = useUIStore();
	const aiTemplatesStarterCollectionStore = useAITemplatesStarterCollectionStore();
	const readyToRunWorkflowsStore = useReadyToRunWorkflowsStore();
	const readyToRunWorkflowsV2Store = useReadyToRunWorkflowsV2Store();
	options.workflowState.executingNode.lastAddedExecutingNode = null;
	if (typeof workflowsStore.activeExecutionId === "undefined") return;
	const telemetry = useTelemetry();
	clearPopupWindowState();
	const templateId = workflowsStore.getWorkflowById(data.workflowId)?.meta?.templateId;
	if (templateId) {
		if (templateId === SampleTemplates.EasyAiTemplate) telemetry.track("User executed test AI workflow", { status: data.status });
		else if (templateId.startsWith("035_template_onboarding")) aiTemplatesStarterCollectionStore.trackUserExecutedWorkflow(templateId.split("-").pop() ?? "", data.status);
		else if (templateId.startsWith("37_onboarding_experiments_batch_aug11")) readyToRunWorkflowsStore.trackExecuteWorkflow(templateId.split("-").pop() ?? "", data.status);
		else if (templateId === "ready-to-run-ai-workflow-v1" || templateId === "ready-to-run-ai-workflow-v2" || templateId === "ready-to-run-ai-workflow-v3" || templateId === "ready-to-run-ai-workflow-v4") if (data.status === "success") readyToRunWorkflowsV2Store.trackExecuteAiWorkflowSuccess();
		else readyToRunWorkflowsV2Store.trackExecuteAiWorkflow(data.status);
		else if (isPrebuiltAgentTemplateId(templateId)) telemetry.track("User executed pre-built Agent", {
			template: templateId,
			status: data.status
		});
		else if (isTutorialTemplateId(templateId)) telemetry.track("User executed tutorial template", {
			template: templateId,
			status: data.status
		});
	}
	uiStore.setProcessingExecutionResults(true);
	let successToastAlreadyShown = false;
	if (data.status === "success") {
		handleExecutionFinishedWithSuccessOrOther(options.workflowState, successToastAlreadyShown);
		successToastAlreadyShown = true;
	}
	const execution = await fetchExecutionData(data.executionId);
	if (!execution) {
		options.workflowState.setActiveExecutionId(void 0);
		uiStore.setProcessingExecutionResults(false);
		return;
	}
	const runExecutionData = getRunExecutionData(execution);
	uiStore.setProcessingExecutionResults(false);
	if (execution.data?.waitTill !== void 0) handleExecutionFinishedWithWaitTill(options);
	else if (execution.status === "error" || execution.status === "canceled") handleExecutionFinishedWithErrorOrCanceled(execution, runExecutionData);
	else handleExecutionFinishedWithSuccessOrOther(options.workflowState, successToastAlreadyShown);
	setRunExecutionData(execution, runExecutionData, options.workflowState);
	continueEvaluationLoop(execution, options);
}
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
async function fetchExecutionData(executionId) {
	const workflowsStore = useWorkflowsStore();
	try {
		const executionResponse = await workflowsStore.fetchExecutionDataById(executionId);
		if (!executionResponse?.data) return;
		return {
			id: executionId,
			workflowId: executionResponse.workflowId,
			workflowData: workflowsStore.workflow,
			data: parse(executionResponse.data),
			status: executionResponse.status,
			startedAt: workflowsStore.workflowExecutionData?.startedAt,
			stoppedAt: /* @__PURE__ */ new Date()
		};
	} catch {
		return;
	}
}
function getRunExecutionData(execution) {
	return {
		...execution.data,
		startData: execution.data?.startData,
		resultData: execution.data?.resultData ?? { runData: {} },
		executionData: execution.data?.executionData
	};
}
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
function handleExecutionFinishedWithWaitTill(options) {
	const workflowsStore = useWorkflowsStore();
	const settingsStore = useSettingsStore();
	const workflowSaving = useWorkflowSaving(options);
	const workflowObject = workflowsStore.workflowObject;
	if (!(workflowsStore.workflowSettings.saveManualExecutions ?? settingsStore.saveManualExecutions)) {
		const uiStore = useUIStore();
		globalLinkActionsEventBus.emit("registerGlobalLinkAction", {
			key: "open-settings",
			action: async () => {
				if (workflowsStore.isNewWorkflow) await workflowSaving.saveAsNewWorkflow();
				uiStore.openModal(WORKFLOW_SETTINGS_MODAL_KEY);
			}
		});
	}
	useDocumentTitle().setDocumentTitle(workflowObject.name, "IDLE");
}
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
					eventData.is_pinned = !!workflowObject.getPinDataOfNode(node.name);
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
	}
}
function handleExecutionFinishedSuccessfully(workflowName, message, workflowState) {
	const toast = useToast();
	useDocumentTitle().setDocumentTitle(workflowName, "IDLE");
	workflowState.setActiveExecutionId(void 0);
	toast.showMessage({
		title: message,
		type: "success"
	});
}
function handleExecutionFinishedWithSuccessOrOther(workflowState, successToastAlreadyShown) {
	const workflowsStore = useWorkflowsStore();
	const toast = useToast();
	const i18n = useI18n();
	const nodeTypesStore = useNodeTypesStore();
	const workflowName = workflowsStore.workflowObject.name ?? "";
	useDocumentTitle().setDocumentTitle(workflowName, "IDLE");
	const workflowExecution = workflowsStore.getWorkflowExecution;
	if (workflowExecution?.executedNode) {
		const node = workflowsStore.getNodeByName(workflowExecution.executedNode);
		const nodeType = node && nodeTypesStore.getNodeType(node.type, node.typeVersion);
		const nodeOutput = workflowExecution.data?.resultData?.runData?.[workflowExecution.executedNode];
		if (nodeType?.polling && !nodeOutput) toast.showMessage({
			title: i18n.baseText("pushConnection.pollingNode.dataNotFound", { interpolate: { service: getTriggerNodeServiceName(nodeType) } }),
			message: i18n.baseText("pushConnection.pollingNode.dataNotFound.message", { interpolate: { service: getTriggerNodeServiceName(nodeType) } }),
			type: "success"
		});
		else if (!successToastAlreadyShown) handleExecutionFinishedSuccessfully(workflowName, i18n.baseText("pushConnection.nodeExecutedSuccessfully"), workflowState);
	} else if (!successToastAlreadyShown) handleExecutionFinishedSuccessfully(workflowName, i18n.baseText("pushConnection.workflowExecutedSuccessfully"), workflowState);
}
function setRunExecutionData(execution, runExecutionData, workflowState) {
	const workflowsStore = useWorkflowsStore();
	const nodeHelpers = useNodeHelpers({ workflowState });
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
	if (execution.data?.waitTill !== void 0) handleExecutionFinishedWithWaitTill(options);
	else if (execution.status === "error" || execution.status === "canceled") handleExecutionFinishedWithErrorOrCanceled(execution, runExecutionData);
	else handleExecutionFinishedWithSuccessOrOther(options.workflowState, false);
	setRunExecutionData(execution, runExecutionData, options.workflowState);
}
async function executionStarted({ data }, options) {
	const workflowsStore = useWorkflowsStore();
	if (typeof workflowsStore.activeExecutionId === "undefined") return;
	else if (workflowsStore.activeExecutionId === null) options.workflowState.setActiveExecutionId(data.executionId);
	if (workflowsStore.workflowExecutionData?.data && data.flattedRunData) workflowsStore.workflowExecutionData.data.resultData.runData = parse(data.flattedRunData);
}
async function nodeDescriptionUpdated(_event) {
	const nodeTypesStore = useNodeTypesStore();
	const credentialsStore = useCredentialsStore();
	await nodeTypesStore.getNodeTypes();
	await credentialsStore.fetchCredentialTypes(true);
}
async function nodeExecuteAfter({ data: pushData }, { workflowState }) {
	const workflowsStore = useWorkflowsStore();
	const assistantStore = useAssistantStore();
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
async function nodeExecuteAfterData({ data: pushData }) {
	const workflowsStore = useWorkflowsStore();
	const schemaPreviewStore = useSchemaPreviewStore();
	workflowsStore.updateNodeExecutionRunData(pushData);
	schemaPreviewStore.trackSchemaPreviewExecution(pushData);
}
async function nodeExecuteBefore({ data }, { workflowState }) {
	const workflowsStore = useWorkflowsStore();
	workflowState.executingNode.addExecutingNode(data.nodeName);
	workflowsStore.addNodeExecutionStartedData(data);
}
async function reloadNodeType({ data }) {
	const nodeTypesStore = useNodeTypesStore();
	await nodeTypesStore.getNodeTypes();
	const isCommunityNode = isCommunityPackageName(data.name);
	await nodeTypesStore.getFullNodesProperties([data], !isCommunityNode);
}
async function removeNodeType({ data }) {
	const nodeTypesStore = useNodeTypesStore();
	const credentialsStore = useCredentialsStore();
	const nodesToBeRemoved = [data];
	await credentialsStore.fetchCredentialTypes(false).then(() => {
		nodeTypesStore.removeNodeTypes(nodesToBeRemoved);
	});
}
async function sendConsoleMessage({ data }) {
	console.log(data.source, ...data.messages);
}
const WORKER_HISTORY_LENGTH = 100;
var STALE_SECONDS = 120 * 1e3;
const useOrchestrationStore = defineStore("orchestrationManager", {
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
async function sendWorkerStatusMessage({ data }) {
	useOrchestrationStore().updateWorkerStatus(data.status);
}
async function testWebhookDeleted({ data }, options) {
	const workflowsStore = useWorkflowsStore();
	if (data.workflowId === workflowsStore.workflowId) {
		workflowsStore.executionWaitingForWebhook = false;
		options.workflowState.setActiveExecutionId(void 0);
	}
}
async function testWebhookReceived({ data }, options) {
	const workflowsStore = useWorkflowsStore();
	if (data.workflowId === workflowsStore.workflowId) {
		workflowsStore.executionWaitingForWebhook = false;
		options.workflowState.setActiveExecutionId(data.executionId ?? null);
	}
}
async function workflowActivated({ data }) {
	useWorkflowsStore().setWorkflowActive(data.workflowId);
}
async function workflowDeactivated({ data }) {
	useWorkflowsStore().setWorkflowInactive(data.workflowId);
}
async function workflowFailedToActivate({ data }, options) {
	const workflowsStore = useWorkflowsStore();
	if (workflowsStore.workflowId !== data.workflowId) return;
	workflowsStore.setWorkflowInactive(data.workflowId);
	options.workflowState.setActive(false);
	const toast = useToast();
	const i18n = useI18n();
	toast.showError(new Error(data.errorMessage), i18n.baseText("workflowActivator.showError.title", { interpolate: { newStateName: "activated" } }) + ":");
}
function createEventQueue(processEvent) {
	const queue = [];
	let processing = false;
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
	function enqueue(event) {
		queue.push(event);
		processNext();
	}
	return { enqueue };
}
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
			case "updateBuilderCredits": return await builderCreditsUpdated(event);
		}
	}
	return {
		initialize,
		terminate
	};
}
export { WORKER_HISTORY_LENGTH as n, useOrchestrationStore as r, usePushConnection as t };
