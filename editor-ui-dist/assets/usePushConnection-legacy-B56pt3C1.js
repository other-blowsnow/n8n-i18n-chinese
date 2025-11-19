;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-CVC6fg6H.js", "./useTelemetry-legacy-BdQlQKwu.js", "./useToast-legacy-D8KBGcJW.js", "./constants-legacy-B0GcWb62.js", "./assistant.store-legacy-D5C3Qmmi.js", "./useExternalHooks-legacy-CI7QLTD3.js", "./useWorkflowSaving-legacy-CRxiFnlk.js", "./useRunWorkflow-legacy-6mzz_m9l.js", "./schemaPreview.store-legacy-B2ITMEum.js", "./readyToRunWorkflows.store-legacy-D55qrb6S.js", "./readyToRunWorkflowsV2.store-legacy-C5SMFEOl.js"], function (_export, _context) {
    "use strict";

    var ref, useI18n, getExecutionErrorToastConfiguration, isPrebuiltAgentTemplateId, useSettingsStore, useCredentialsStore, useUIStore, getExecutionErrorMessage, getTriggerNodeServiceName, useRootStore, injectWorkflowState, useDocumentTitle, parse, isValidNodeConnectionType, sendGetWorkerStatus, codeNodeEditorEventBus, isTutorialTemplateId, globalLinkActionsEventBus, useWorkflowHelpers, useWorkflowsStore, clearPopupWindowState, useNodeTypesStore, useTelemetry, SampleTemplates, defineStore, useNodeHelpers, useToast, TRIMMED_TASK_DATA_CONNECTIONS_KEY, isCommunityPackageName, EVALUATION_TRIGGER_NODE_TYPE, generateNodesGraph, WORKFLOW_SETTINGS_MODAL_KEY, useBuilderStore, useAssistantStore, useExternalHooks, useWorkflowSaving, usePushConnectionStore, useRunWorkflow, useSchemaPreviewStore, useAITemplatesStarterCollectionStore, useReadyToRunWorkflowsStore, useReadyToRunWorkflowsV2Store, WORKER_HISTORY_LENGTH, STALE_SECONDS, useOrchestrationStore;
    //#region src/app/composables/usePushConnection/handlers/builderCreditsUpdated.ts
    async function builderCreditsUpdated(event) {
      useBuilderStore().updateBuilderCredits(event.data.creditsQuota, event.data.creditsClaimed);
    }

    //#endregion
    //#region src/app/composables/usePushConnection/handlers/executionFinished.ts
    /**
    * Handles the 'executionFinished' event, which happens when a workflow execution is finished.
    */
    async function executionFinished({
      data
    }, options) {
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
        if (templateId === SampleTemplates.EasyAiTemplate) telemetry.track("User executed test AI workflow", {
          status: data.status
        });else if (templateId.startsWith("035_template_onboarding")) aiTemplatesStarterCollectionStore.trackUserExecutedWorkflow(templateId.split("-").pop() ?? "", data.status);else if (templateId.startsWith("37_onboarding_experiments_batch_aug11")) readyToRunWorkflowsStore.trackExecuteWorkflow(templateId.split("-").pop() ?? "", data.status);else if (templateId === "ready-to-run-ai-workflow-v1" || templateId === "ready-to-run-ai-workflow-v2" || templateId === "ready-to-run-ai-workflow-v3" || templateId === "ready-to-run-ai-workflow-v4") {
          if (data.status === "success") readyToRunWorkflowsV2Store.trackExecuteAiWorkflowSuccess();else readyToRunWorkflowsV2Store.trackExecuteAiWorkflow(data.status);
        } else if (isPrebuiltAgentTemplateId(templateId)) telemetry.track("User executed pre-built Agent", {
          template: templateId,
          status: data.status
        });else if (isTutorialTemplateId(templateId)) telemetry.track("User executed tutorial template", {
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
      if (execution.data?.waitTill !== void 0) handleExecutionFinishedWithWaitTill(options);else if (execution.status === "error" || execution.status === "canceled") handleExecutionFinishedWithErrorOrCanceled(execution, runExecutionData);else handleExecutionFinishedWithSuccessOrOther(options.workflowState, successToastAlreadyShown);
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
      const evaluationTrigger = execution.workflowData.nodes.find(node => node.type === EVALUATION_TRIGGER_NODE_TYPE);
      const triggerRunData = evaluationTrigger ? execution?.data?.resultData?.runData[evaluationTrigger.name] : void 0;
      if (!evaluationTrigger || triggerRunData === void 0) return;
      const mainData = triggerRunData[0]?.data?.main[0];
      const rowsLeft = mainData ? mainData[0]?.json?._rowsLeft : 0;
      if (rowsLeft && rowsLeft > 0) {
        const {
          runWorkflow
        } = useRunWorkflow(opts);
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
          data: parse(executionResponse.data),
          status: executionResponse.status,
          startedAt: workflowsStore.workflowExecutionData?.startedAt,
          stoppedAt: /* @__PURE__ */new Date()
        };
      } catch {
        return;
      }
    }
    /**
    * Returns the run execution data from the execution object in a normalized format
    */
    function getRunExecutionData(execution) {
      return {
        ...execution.data,
        startData: execution.data?.startData,
        resultData: execution.data?.resultData ?? {
          runData: {}
        },
        executionData: execution.data?.executionData
      };
    }
    /**
    * Returns the error message for the execution run data if the execution status is crashed or canceled,
    * or a fallback error message otherwise
    */
    function getRunDataExecutedErrorMessage(execution) {
      const i18n = useI18n();
      if (execution.status === "crashed") return i18n.baseText("pushConnection.executionFailed.message");else if (execution.status === "canceled") {
        const workflowsStore = useWorkflowsStore();
        return i18n.baseText("executionsList.showMessage.stopExecution.message", {
          interpolate: {
            activeExecutionId: workflowsStore.activeExecutionId ?? ""
          }
        });
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
        workflowHelpers.getWorkflowDataToSave().then(workflowData => {
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
      });else if (execution.data?.resultData.error) {
        const {
          message,
          title
        } = getExecutionErrorToastConfiguration({
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
        });else if (!successToastAlreadyShown) handleExecutionFinishedSuccessfully(workflowName, i18n.baseText("pushConnection.nodeExecutedSuccessfully"), workflowState);
      } else if (!successToastAlreadyShown) handleExecutionFinishedSuccessfully(workflowName, i18n.baseText("pushConnection.workflowExecutedSuccessfully"), workflowState);
    }
    function setRunExecutionData(execution, runExecutionData, workflowState) {
      const workflowsStore = useWorkflowsStore();
      const nodeHelpers = useNodeHelpers({
        workflowState
      });
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
    async function executionRecovered({
      data
    }, options) {
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
      if (execution.data?.waitTill !== void 0) handleExecutionFinishedWithWaitTill(options);else if (execution.status === "error" || execution.status === "canceled") handleExecutionFinishedWithErrorOrCanceled(execution, runExecutionData);else handleExecutionFinishedWithSuccessOrOther(options.workflowState, false);
      setRunExecutionData(execution, runExecutionData, options.workflowState);
    }

    //#endregion
    //#region src/app/composables/usePushConnection/handlers/executionStarted.ts
    /**
    * Handles the 'executionStarted' event, which happens when a workflow is executed.
    */
    async function executionStarted({
      data
    }, options) {
      const workflowsStore = useWorkflowsStore();
      if (typeof workflowsStore.activeExecutionId === "undefined") return;else if (workflowsStore.activeExecutionId === null) options.workflowState.setActiveExecutionId(data.executionId);
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
    async function nodeExecuteAfter({
      data: pushData
    }, {
      workflowState
    }) {
      const workflowsStore = useWorkflowsStore();
      const assistantStore = useAssistantStore();
      /**
      * We trim the actual data returned from the node execution to avoid performance issues
      * when dealing with large datasets. Instead of storing the actual data, we initially store
      * a placeholder object indicating that the data has been trimmed until the
      * `nodeExecuteAfterData` event comes in.
      */
      const placeholderOutputData = {
        main: []
      };
      if (pushData.itemCountByConnectionType && typeof pushData.itemCountByConnectionType === "object") {
        const fillObject = {
          json: {
            [TRIMMED_TASK_DATA_CONNECTIONS_KEY]: true
          }
        };
        for (const [connectionType, outputs] of Object.entries(pushData.itemCountByConnectionType)) if (isValidNodeConnectionType(connectionType)) placeholderOutputData[connectionType] = outputs.map(count => Array.from({
          length: count
        }, () => fillObject));
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
    async function nodeExecuteAfterData({
      data: pushData
    }) {
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
    async function nodeExecuteBefore({
      data
    }, {
      workflowState
    }) {
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
    async function reloadNodeType({
      data
    }) {
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
    async function removeNodeType({
      data
    }) {
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
    async function sendConsoleMessage({
      data
    }) {
      console.log(data.source, ...data.messages);
    }

    //#endregion
    //#region src/features/settings/orchestration.ee/orchestration.store.ts

    //#endregion
    //#region src/app/composables/usePushConnection/handlers/sendWorkerStatusMessage.ts
    /**
    * Handles the 'sendWorkerStatusMessage' event from the push connection, which indicates
    * that a worker status message should be sent.
    */
    async function sendWorkerStatusMessage({
      data
    }) {
      useOrchestrationStore().updateWorkerStatus(data.status);
    }

    //#endregion
    //#region src/app/composables/usePushConnection/handlers/testWebhookDeleted.ts
    /**
    * Handles the 'testWebhookDeleted' push message, which is sent when a test webhook is deleted.
    */
    async function testWebhookDeleted({
      data
    }, options) {
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
    async function testWebhookReceived({
      data
    }, options) {
      const workflowsStore = useWorkflowsStore();
      if (data.workflowId === workflowsStore.workflowId) {
        workflowsStore.executionWaitingForWebhook = false;
        options.workflowState.setActiveExecutionId(data.executionId ?? null);
      }
    }

    //#endregion
    //#region src/app/composables/usePushConnection/handlers/workflowActivated.ts
    async function workflowActivated({
      data
    }) {
      useWorkflowsStore().setWorkflowActive(data.workflowId);
    }

    //#endregion
    //#region src/app/composables/usePushConnection/handlers/workflowDeactivated.ts
    async function workflowDeactivated({
      data
    }) {
      useWorkflowsStore().setWorkflowInactive(data.workflowId);
    }

    //#endregion
    //#region src/app/composables/usePushConnection/handlers/workflowFailedToActivate.ts
    async function workflowFailedToActivate({
      data
    }, options) {
      const workflowsStore = useWorkflowsStore();
      if (workflowsStore.workflowId !== data.workflowId) return;
      workflowsStore.setWorkflowInactive(data.workflowId);
      options.workflowState.setActive(false);
      const toast = useToast();
      const i18n = useI18n();
      toast.showError(new Error(data.errorMessage), i18n.baseText("workflowActivator.showError.title", {
        interpolate: {
          newStateName: "activated"
        }
      }) + ":");
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
      return {
        enqueue
      };
    }

    //#endregion
    //#region src/app/composables/usePushConnection/usePushConnection.ts
    function usePushConnection({
      router,
      workflowState
    }) {
      const pushStore = usePushConnectionStore();
      const options = {
        router,
        workflowState: workflowState ?? injectWorkflowState()
      };
      const {
        enqueue
      } = createEventQueue(processEvent);
      const removeEventListener = ref(null);
      function initialize() {
        removeEventListener.value = pushStore.addEventListener(message => {
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
          case "testWebhookDeleted":
            return await testWebhookDeleted(event, options);
          case "testWebhookReceived":
            return await testWebhookReceived(event, options);
          case "reloadNodeType":
            return await reloadNodeType(event);
          case "removeNodeType":
            return await removeNodeType(event);
          case "nodeDescriptionUpdated":
            return await nodeDescriptionUpdated(event);
          case "nodeExecuteBefore":
            return await nodeExecuteBefore(event, options);
          case "nodeExecuteAfter":
            return await nodeExecuteAfter(event, options);
          case "nodeExecuteAfterData":
            return await nodeExecuteAfterData(event);
          case "executionStarted":
            return await executionStarted(event, options);
          case "sendWorkerStatusMessage":
            return await sendWorkerStatusMessage(event);
          case "sendConsoleMessage":
            return await sendConsoleMessage(event);
          case "workflowFailedToActivate":
            return await workflowFailedToActivate(event, options);
          case "executionFinished":
            return await executionFinished(event, options);
          case "executionRecovered":
            return await executionRecovered(event, options);
          case "workflowActivated":
            return await workflowActivated(event);
          case "workflowDeactivated":
            return await workflowDeactivated(event);
          case "updateBuilderCredits":
            return await builderCreditsUpdated(event);
        }
      }
      return {
        initialize,
        terminate
      };
    }

    //#endregion
    _export("t", usePushConnection);
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_useTelemetryLegacy00FJs) {
        getExecutionErrorToastConfiguration = _useTelemetryLegacy00FJs.$;
        isPrebuiltAgentTemplateId = _useTelemetryLegacy00FJs.At;
        useSettingsStore = _useTelemetryLegacy00FJs.Bo;
        useCredentialsStore = _useTelemetryLegacy00FJs.Ht;
        useUIStore = _useTelemetryLegacy00FJs.Ni;
        getExecutionErrorMessage = _useTelemetryLegacy00FJs.Q;
        getTriggerNodeServiceName = _useTelemetryLegacy00FJs.Qr;
        useRootStore = _useTelemetryLegacy00FJs.Qs;
        injectWorkflowState = _useTelemetryLegacy00FJs.Sn;
        useDocumentTitle = _useTelemetryLegacy00FJs.Tn;
        parse = _useTelemetryLegacy00FJs.ci;
        isValidNodeConnectionType = _useTelemetryLegacy00FJs.gr;
        sendGetWorkerStatus = _useTelemetryLegacy00FJs.gs;
        codeNodeEditorEventBus = _useTelemetryLegacy00FJs.ji;
        isTutorialTemplateId = _useTelemetryLegacy00FJs.jt;
        globalLinkActionsEventBus = _useTelemetryLegacy00FJs.ki;
        useWorkflowHelpers = _useTelemetryLegacy00FJs.mn;
        useWorkflowsStore = _useTelemetryLegacy00FJs.o;
        clearPopupWindowState = _useTelemetryLegacy00FJs.q;
        useNodeTypesStore = _useTelemetryLegacy00FJs.rt;
        useTelemetry = _useTelemetryLegacy00FJs.t;
        SampleTemplates = _useTelemetryLegacy00FJs.wt;
        defineStore = _useTelemetryLegacy00FJs.xc;
        useNodeHelpers = _useTelemetryLegacy00FJs.xn;
      }, function (_useToastLegacy00HJs) {
        useToast = _useToastLegacy00HJs.t;
      }, function (_constantsLegacy00NJs) {
        TRIMMED_TASK_DATA_CONNECTIONS_KEY = _constantsLegacy00NJs.Sa;
        isCommunityPackageName = _constantsLegacy00NJs.Ui;
        EVALUATION_TRIGGER_NODE_TYPE = _constantsLegacy00NJs.fa;
        generateNodesGraph = _constantsLegacy00NJs.pi;
        WORKFLOW_SETTINGS_MODAL_KEY = _constantsLegacy00NJs.qo;
      }, function (_assistantStoreLegacy00RJs) {
        useBuilderStore = _assistantStoreLegacy00RJs.i;
        useAssistantStore = _assistantStoreLegacy00RJs.t;
      }, function (_useExternalHooksLegacy00XJs) {
        useExternalHooks = _useExternalHooksLegacy00XJs.t;
      }, function (_useWorkflowSavingLegacy019Js) {
        useWorkflowSaving = _useWorkflowSavingLegacy019Js.t;
      }, function (_useRunWorkflowLegacy01fJs) {
        usePushConnectionStore = _useRunWorkflowLegacy01fJs.i;
        useRunWorkflow = _useRunWorkflowLegacy01fJs.t;
      }, function (_schemaPreviewStoreLegacy02lJs) {
        useSchemaPreviewStore = _schemaPreviewStoreLegacy02lJs.t;
      }, function (_readyToRunWorkflowsStoreLegacy03VJs) {
        useAITemplatesStarterCollectionStore = _readyToRunWorkflowsStoreLegacy03VJs.n;
        useReadyToRunWorkflowsStore = _readyToRunWorkflowsStoreLegacy03VJs.t;
      }, function (_readyToRunWorkflowsV2StoreLegacy03XJs) {
        useReadyToRunWorkflowsV2Store = _readyToRunWorkflowsV2StoreLegacy03XJs.t;
      }],
      execute: function () {
        _export("n", WORKER_HISTORY_LENGTH = 100);
        STALE_SECONDS = 120 * 1e3;
        _export("r", useOrchestrationStore = defineStore("orchestrationManager", {
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
        }));
      }
    };
  });
})();