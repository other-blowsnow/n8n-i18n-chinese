import { f5 as makeRestApiRequest, a9 as useWorkflowsStore, Z as useUIStore, f6 as clearPopupWindowState, ap as useTelemetry, f7 as isPrebuiltAgentTemplateId, cr as parse, f8 as hasTrimmedItem, v as useSettingsStore, az as useWorkflowSaving, aA as useWorkflowHelpers, ao as WORKFLOW_SETTINGS_MODAL_KEY, a as useToast, f9 as generateNodesGraph, c as useI18n, fa as getExecutionErrorToastConfiguration, ah as useNodeTypesStore, fb as getTriggerNodeServiceName, bS as useNodeHelpers, fc as hasTrimmedData, bs as useExternalHooks, fd as codeNodeEditorEventBus, fe as SampleTemplates, dn as EVALUATION_TRIGGER_NODE_TYPE, bT as useRunWorkflow, ff as getExecutionErrorMessage, db as useCredentialsStore, fg as useAssistantStore, fh as useSchemaPreviewStore, fi as isCommunityPackageName, a7 as defineStore, at as useRootStore, a8 as usePushConnectionStore, r as ref } from "./index-BsWH3eYA.js";
import { g as globalLinkActionsEventBus } from "./global-link-actions-BfMXCg-D.js";
import { u as useAITemplatesStarterCollectionStore, a as useReadyToRunWorkflowsStore } from "./readyToRunWorkflows.store-SI6MsPeC.js";
var GET_STATUS_ENDPOINT = "/orchestration/worker/status";
var sendGetWorkerStatus = async (context) => {
  await makeRestApiRequest(context, "POST", GET_STATUS_ENDPOINT);
};
async function executionFinished({ data }, options) {
  const workflowsStore = useWorkflowsStore();
  const uiStore = useUIStore();
  const aiTemplatesStarterCollectionStore = useAITemplatesStarterCollectionStore();
  const readyToRunWorkflowsStore = useReadyToRunWorkflowsStore();
  workflowsStore.lastAddedExecutingNode = null;
  if (typeof workflowsStore.activeExecutionId === "undefined") {
    return;
  }
  const telemetry = useTelemetry();
  clearPopupWindowState();
  const workflow = workflowsStore.getWorkflowById(data.workflowId);
  const templateId = workflow?.meta?.templateId;
  if (templateId) {
    const isEasyAIWorkflow = templateId === SampleTemplates.EasyAiTemplate;
    if (isEasyAIWorkflow) {
      telemetry.track("User executed test AI workflow", {
        status: data.status
      });
    } else if (templateId.startsWith("035_template_onboarding")) {
      aiTemplatesStarterCollectionStore.trackUserExecutedWorkflow(
        templateId.split("-").pop() ?? "",
        data.status
      );
    } else if (templateId.startsWith("37_onboarding_experiments_batch_aug11")) {
      readyToRunWorkflowsStore.trackExecuteWorkflow(templateId.split("-").pop() ?? "", data.status);
    } else if (isPrebuiltAgentTemplateId(templateId)) {
      telemetry.track("User executed pre-built Agent", {
        template: templateId,
        status: data.status
      });
    }
  }
  uiStore.setProcessingExecutionResults(true);
  let successToastAlreadyShown = false;
  let execution;
  if (data.rawData) {
    const { executionId, workflowId, status, rawData } = data;
    execution = {
      id: executionId,
      workflowId,
      workflowData: workflowsStore.workflow,
      data: parse(rawData),
      status,
      startedAt: workflowsStore.workflowExecutionData?.startedAt ?? /* @__PURE__ */ new Date(),
      stoppedAt: /* @__PURE__ */ new Date()
    };
  } else {
    if (data.status === "success") {
      handleExecutionFinishedSuccessfully(data.workflowId);
      successToastAlreadyShown = true;
    }
    execution = await fetchExecutionData(data.executionId);
    if (!execution) {
      uiStore.setProcessingExecutionResults(false);
      return;
    }
  }
  const runExecutionData = getRunExecutionData(execution);
  uiStore.setProcessingExecutionResults(false);
  if (execution.data?.waitTill !== void 0) {
    handleExecutionFinishedWithWaitTill(options);
  } else if (execution.status === "error" || execution.status === "canceled") {
    handleExecutionFinishedWithErrorOrCanceled(execution, runExecutionData);
  } else {
    handleExecutionFinishedWithOther(successToastAlreadyShown);
  }
  setRunExecutionData(execution, runExecutionData);
  continueEvaluationLoop(execution, options.router);
}
function continueEvaluationLoop(execution, router) {
  if (execution.status !== "success" || execution.data?.startData?.destinationNode !== void 0) {
    return;
  }
  const evaluationTrigger = execution.workflowData.nodes.find(
    (node) => node.type === EVALUATION_TRIGGER_NODE_TYPE
  );
  const triggerRunData = evaluationTrigger ? execution?.data?.resultData?.runData[evaluationTrigger.name] : void 0;
  if (!evaluationTrigger || triggerRunData === void 0) {
    return;
  }
  const mainData = triggerRunData[0]?.data?.main[0];
  const rowsLeft = mainData ? mainData[0]?.json?._rowsLeft : 0;
  if (rowsLeft && rowsLeft > 0) {
    const { runWorkflow } = useRunWorkflow({ router });
    void runWorkflow({
      triggerNode: evaluationTrigger.name,
      // pass output of previous node run to trigger next run
      nodeData: triggerRunData[0],
      rerunTriggerNode: true
    });
  }
}
async function fetchExecutionData(executionId) {
  const workflowsStore = useWorkflowsStore();
  try {
    const executionResponse = await workflowsStore.fetchExecutionDataById(executionId);
    if (!executionResponse?.data) {
      return;
    }
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
  const workflowsStore = useWorkflowsStore();
  const runExecutionData = {
    startData: execution.data?.startData,
    resultData: execution.data?.resultData ?? { runData: {} },
    executionData: execution.data?.executionData
  };
  if (workflowsStore.workflowExecutionData?.workflowId === execution.workflowId) {
    const activeRunData = workflowsStore.workflowExecutionData?.data?.resultData?.runData;
    if (activeRunData) {
      for (const key of Object.keys(activeRunData)) {
        if (hasTrimmedItem(activeRunData[key])) continue;
        runExecutionData.resultData.runData[key] = activeRunData[key];
      }
    }
  }
  return runExecutionData;
}
function getRunDataExecutedErrorMessage(execution) {
  const i18n = useI18n();
  if (execution.status === "crashed") {
    return i18n.baseText("pushConnection.executionFailed.message");
  } else if (execution.status === "canceled") {
    const workflowsStore = useWorkflowsStore();
    return i18n.baseText("executionsList.showMessage.stopExecution.message", {
      interpolate: { activeExecutionId: workflowsStore.activeExecutionId ?? "" }
    });
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
  const workflowHelpers = useWorkflowHelpers();
  const workflowObject = workflowsStore.workflowObject;
  const workflowSettings = workflowsStore.workflowSettings;
  const saveManualExecutions = workflowSettings.saveManualExecutions ?? settingsStore.saveManualExecutions;
  if (!saveManualExecutions) {
    const uiStore = useUIStore();
    globalLinkActionsEventBus.emit("registerGlobalLinkAction", {
      key: "open-settings",
      action: async () => {
        if (workflowsStore.isNewWorkflow) await workflowSaving.saveAsNewWorkflow();
        uiStore.openModal(WORKFLOW_SETTINGS_MODAL_KEY);
      }
    });
  }
  workflowHelpers.setDocumentTitle(workflowObject.name, "IDLE");
}
function handleExecutionFinishedWithErrorOrCanceled(execution, runExecutionData) {
  const toast = useToast();
  const i18n = useI18n();
  const telemetry = useTelemetry();
  const workflowsStore = useWorkflowsStore();
  const workflowHelpers = useWorkflowHelpers();
  const workflowObject = workflowsStore.workflowObject;
  workflowHelpers.setDocumentTitle(workflowObject.name, "ERROR");
  if (runExecutionData.resultData.error?.name === "ExpressionError" && runExecutionData.resultData.error.functionality === "pairedItem") {
    const error = runExecutionData.resultData.error;
    void workflowHelpers.getWorkflowDataToSave().then((workflowData) => {
      const eventData = {
        caused_by_credential: false,
        error_message: error.description,
        error_title: error.message,
        error_type: error.context.type,
        node_graph_string: JSON.stringify(
          generateNodesGraph(
            workflowData,
            workflowHelpers.getNodeTypes()
          ).nodeGraph
        ),
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
  if (execution.status === "canceled") {
    toast.showMessage({
      title: i18n.baseText("nodeView.showMessage.stopExecutionTry.title"),
      type: "success"
    });
  } else if (execution.data?.resultData.error) {
    const { message, title } = getExecutionErrorToastConfiguration({
      error: execution.data.resultData.error,
      lastNodeExecuted: execution.data?.resultData.lastNodeExecuted
    });
    toast.showMessage({ title, message, type: "error", duration: 0 });
  }
}
function handleExecutionFinishedSuccessfully(workflowId) {
  const workflowsStore = useWorkflowsStore();
  const workflowHelpers = useWorkflowHelpers();
  const toast = useToast();
  const i18n = useI18n();
  workflowHelpers.setDocumentTitle(workflowsStore.getWorkflowById(workflowId)?.name, "IDLE");
  workflowsStore.setActiveExecutionId(void 0);
  toast.showMessage({
    title: i18n.baseText("pushConnection.workflowExecutedSuccessfully"),
    type: "success"
  });
}
function handleExecutionFinishedWithOther(successToastAlreadyShown) {
  const workflowsStore = useWorkflowsStore();
  const toast = useToast();
  const i18n = useI18n();
  const workflowHelpers = useWorkflowHelpers();
  const nodeTypesStore = useNodeTypesStore();
  const workflowObject = workflowsStore.workflowObject;
  workflowHelpers.setDocumentTitle(workflowObject.name, "IDLE");
  const workflowExecution = workflowsStore.getWorkflowExecution;
  if (workflowExecution?.executedNode) {
    const node = workflowsStore.getNodeByName(workflowExecution.executedNode);
    const nodeType = node && nodeTypesStore.getNodeType(node.type, node.typeVersion);
    const nodeOutput = workflowExecution?.executedNode && workflowExecution.data?.resultData?.runData?.[workflowExecution.executedNode];
    if (nodeType?.polling && !nodeOutput) {
      toast.showMessage({
        title: i18n.baseText("pushConnection.pollingNode.dataNotFound", {
          interpolate: {
            service: getTriggerNodeServiceName(nodeType)
          }
        }),
        message: i18n.baseText("pushConnection.pollingNode.dataNotFound.message", {
          interpolate: {
            service: getTriggerNodeServiceName(nodeType)
          }
        }),
        type: "success"
      });
    } else {
      toast.showMessage({
        title: i18n.baseText("pushConnection.nodeExecutedSuccessfully"),
        type: "success"
      });
    }
  } else if (!successToastAlreadyShown) {
    toast.showMessage({
      title: i18n.baseText("pushConnection.workflowExecutedSuccessfully"),
      type: "success"
    });
  }
}
function setRunExecutionData(execution, runExecutionData) {
  const workflowsStore = useWorkflowsStore();
  const nodeHelpers = useNodeHelpers();
  const runDataExecutedErrorMessage = getRunDataExecutedErrorMessage(execution);
  const workflowExecution = workflowsStore.getWorkflowExecution;
  if (workflowsStore.getWorkflowRunData && !hasTrimmedData(workflowsStore.getWorkflowRunData)) {
    runExecutionData.resultData.runData = workflowsStore.getWorkflowRunData;
  }
  workflowsStore.executingNode.length = 0;
  workflowsStore.setWorkflowExecutionData({
    ...workflowExecution,
    status: execution.status,
    id: execution.id,
    stoppedAt: execution.stoppedAt
  });
  workflowsStore.setWorkflowExecutionRunData(runExecutionData);
  workflowsStore.setActiveExecutionId(void 0);
  nodeHelpers.updateNodesExecutionIssues();
  const lastNodeExecuted = runExecutionData.resultData.lastNodeExecuted;
  let itemsCount = 0;
  if (lastNodeExecuted && runExecutionData.resultData.runData[lastNodeExecuted] && !runDataExecutedErrorMessage) {
    itemsCount = runExecutionData.resultData.runData[lastNodeExecuted][0].data?.main[0]?.length ?? 0;
  }
  workflowsStore.setActiveExecutionId(void 0);
  void useExternalHooks().run("pushConnection.executionFinished", {
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
  if (typeof workflowsStore.activeExecutionId === "undefined") {
    return;
  }
  uiStore.setProcessingExecutionResults(true);
  const execution = await fetchExecutionData(data.executionId);
  if (!execution) {
    uiStore.setProcessingExecutionResults(false);
    return;
  }
  const runExecutionData = getRunExecutionData(execution);
  uiStore.setProcessingExecutionResults(false);
  if (execution.data?.waitTill !== void 0) {
    handleExecutionFinishedWithWaitTill(options);
  } else if (execution.status === "error" || execution.status === "canceled") {
    handleExecutionFinishedWithErrorOrCanceled(execution, runExecutionData);
  } else {
    handleExecutionFinishedWithOther(false);
  }
  setRunExecutionData(execution, runExecutionData);
}
async function executionStarted({ data }) {
  const workflowsStore = useWorkflowsStore();
  if (typeof workflowsStore.activeExecutionId === "undefined") {
    return;
  } else if (workflowsStore.activeExecutionId === null) {
    workflowsStore.setActiveExecutionId(data.executionId);
  }
  if (workflowsStore.workflowExecutionData?.data && data.flattedRunData) {
    workflowsStore.workflowExecutionData.data.resultData.runData = parse(data.flattedRunData);
  }
}
async function nodeDescriptionUpdated(_event) {
  const nodeTypesStore = useNodeTypesStore();
  const credentialsStore = useCredentialsStore();
  await nodeTypesStore.getNodeTypes();
  await credentialsStore.fetchCredentialTypes(true);
}
async function nodeExecuteAfter({ data: pushData }) {
  const workflowsStore = useWorkflowsStore();
  const assistantStore = useAssistantStore();
  const schemaPreviewStore = useSchemaPreviewStore();
  if (pushData.itemCount && pushData.data?.data?.main && Array.isArray(pushData.data.data.main[0]) && pushData.data.data.main[0].length < pushData.itemCount) {
    pushData.data.data.main[0]?.push(...new Array(pushData.itemCount - 1).fill({ json: {} }));
  }
  workflowsStore.updateNodeExecutionData(pushData);
  workflowsStore.removeExecutingNode(pushData.nodeName);
  void assistantStore.onNodeExecution(pushData);
  void schemaPreviewStore.trackSchemaPreviewExecution(pushData);
}
async function nodeExecuteBefore({ data }) {
  const workflowsStore = useWorkflowsStore();
  workflowsStore.addExecutingNode(data.nodeName);
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
const STALE_SECONDS = 120 * 1e3;
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
      if (!this.workersHistory[data.senderId]) {
        this.workersHistory[data.senderId] = [];
      }
      this.workersHistory[data.senderId].push({ data, timestamp: Date.now() });
      if (this.workersHistory[data.senderId].length > WORKER_HISTORY_LENGTH) {
        this.workersHistory[data.senderId].shift();
      }
      this.workersLastUpdated[data.senderId] = Date.now();
      this.initialStatusReceived = true;
    },
    removeStaleWorkers() {
      for (const id in this.workersLastUpdated) {
        if (this.workersLastUpdated[id] + STALE_SECONDS < Date.now()) {
          delete this.workers[id];
          delete this.workersHistory[id];
          delete this.workersLastUpdated[id];
        }
      }
    },
    startWorkerStatusPolling() {
      const rootStore = useRootStore();
      if (!this.statusInterval) {
        this.statusInterval = setInterval(async () => {
          await sendGetWorkerStatus(rootStore.restApiContext);
          this.removeStaleWorkers();
        }, 1e3);
      }
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
  const orchestrationStore = useOrchestrationStore();
  orchestrationStore.updateWorkerStatus(data.status);
}
async function testWebhookDeleted({ data }) {
  const workflowsStore = useWorkflowsStore();
  if (data.workflowId === workflowsStore.workflowId) {
    workflowsStore.executionWaitingForWebhook = false;
    workflowsStore.setActiveExecutionId(void 0);
  }
}
async function testWebhookReceived({ data }) {
  const workflowsStore = useWorkflowsStore();
  if (data.workflowId === workflowsStore.workflowId) {
    workflowsStore.executionWaitingForWebhook = false;
    workflowsStore.setActiveExecutionId(data.executionId ?? null);
  }
}
async function workflowActivated({ data }) {
  const workflowsStore = useWorkflowsStore();
  workflowsStore.setWorkflowActive(data.workflowId);
}
async function workflowDeactivated({ data }) {
  const workflowsStore = useWorkflowsStore();
  workflowsStore.setWorkflowInactive(data.workflowId);
}
async function workflowFailedToActivate({ data }) {
  const workflowsStore = useWorkflowsStore();
  if (workflowsStore.workflowId !== data.workflowId) {
    return;
  }
  workflowsStore.setWorkflowInactive(data.workflowId);
  workflowsStore.setActive(false);
  const toast = useToast();
  const i18n = useI18n();
  toast.showError(
    new Error(data.errorMessage),
    i18n.baseText("workflowActivator.showError.title", {
      interpolate: { newStateName: "activated" }
    }) + ":"
  );
}
function createEventQueue(processEvent) {
  const queue = [];
  let processing = false;
  async function processNext() {
    if (processing || queue.length === 0) {
      return;
    }
    processing = true;
    const currentEvent = queue.shift();
    if (currentEvent !== void 0) {
      try {
        await processEvent(currentEvent);
      } catch (error) {
        console.error("Error processing event:", error);
      }
    }
    processing = false;
    await processNext();
  }
  function enqueue(event) {
    queue.push(event);
    void processNext();
  }
  return { enqueue };
}
function usePushConnection(options) {
  const pushStore = usePushConnectionStore();
  const { enqueue } = createEventQueue(processEvent);
  const removeEventListener = ref(null);
  function initialize() {
    removeEventListener.value = pushStore.addEventListener((message) => {
      enqueue(message);
    });
  }
  function terminate() {
    if (typeof removeEventListener.value === "function") {
      removeEventListener.value();
    }
  }
  async function processEvent(event) {
    switch (event.type) {
      case "testWebhookDeleted":
        return await testWebhookDeleted(event);
      case "testWebhookReceived":
        return await testWebhookReceived(event);
      case "reloadNodeType":
        return await reloadNodeType(event);
      case "removeNodeType":
        return await removeNodeType(event);
      case "nodeDescriptionUpdated":
        return await nodeDescriptionUpdated();
      case "nodeExecuteBefore":
        return await nodeExecuteBefore(event);
      case "nodeExecuteAfter":
        return await nodeExecuteAfter(event);
      case "executionStarted":
        return await executionStarted(event);
      case "sendWorkerStatusMessage":
        return await sendWorkerStatusMessage(event);
      case "sendConsoleMessage":
        return await sendConsoleMessage(event);
      case "workflowFailedToActivate":
        return await workflowFailedToActivate(event);
      case "executionFinished":
        return await executionFinished(event, options);
      case "executionRecovered":
        return await executionRecovered(event, options);
      case "workflowActivated":
        return await workflowActivated(event);
      case "workflowDeactivated":
        return await workflowDeactivated(event);
    }
  }
  return {
    initialize,
    terminate
  };
}
export {
  WORKER_HISTORY_LENGTH as W,
  useOrchestrationStore as a,
  usePushConnection as u
};
