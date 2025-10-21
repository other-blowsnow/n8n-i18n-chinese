import { a as useToast, r as ref, x as computed, c as useI18n$1, bC as usePinnedData, am as useMessage, an as MODAL_CONFIRM, bD as v4, a2 as useWorkflowsStore, bE as injectWorkflowState, au as useRootStore, bF as useLogsStore, b as useRouter, bG as useNodeHelpers, bH as useRunWorkflow, bI as isChatNode, a8 as watch, V as VIEWS, bJ as chatEventBus, a4 as PLACEHOLDER_EMPTY_WORKFLOW_ID, bK as provide, d as defineComponent, h as createElementBlock, g as openBlock, n as normalizeClass, i as createVNode, j as createBaseVNode, k as unref, p as N8nText, w as withCtx, Y as renderSlot, l as createTextVNode, t as toDisplayString, _ as _export_sfc, bL as useTimestamp, e as createBlock, f as createCommentVNode, a3 as useRoute, af as useSourceControlStore, bM as useCanvasOperations, ae as useNodeTypesStore, bN as START_NODE_TYPE, bO as getScrollbarWidth, q as N8nButton, B as withModifiers, aa as N8nTooltip, F as Fragment, O as N8nRadioButtons, bP as inject, bQ as isRef, bR as toRefs, o as onMounted, bS as normalizeProps, bT as guardReactiveProps, bu as resolveDynamicComponent, K as mergeProps, A as renderList, bU as markdownLink, bV as useFileDialog, bh as onUnmounted, ap as normalizeStyle, b4 as withDirectives, bW as vModelText, bX as withKeys, N as N8nIcon, bY as useAttrs, bZ as useClipboard, ab as _sfc_main$h, b_ as createSlots, a_ as useNDVStore, b$ as PopOutWindowKey, c0 as resolveDirective, c1 as RunData, ac as I18nT, C as N8nLink, c2 as NDVEmptyState, c3 as waitingNodeTooltip, c4 as RunDataItemCount, b0 as useLocalStorage, c5 as useExperimentalNdvStore, aH as useTemplateRef, c6 as LOG_DETAILS_PANEL_STATE, c7 as KeyboardShortcutTooltip, c8 as NodeIcon, c9 as N8nResizeWrapper, ca as useStyles, aO as N8nActionDropdown, cb as shallowRef, Q as useUIStore, cc as useCanvasStore, al as useTelemetry, cd as canvasEventBus, ay as useDocumentTitle, ce as onScopeDispose, X as onBeforeUnmount, cf as useProvideTooltipAppendTo, cg as LOGS_PANEL_STATE, ch as LOCAL_STORAGE_PANEL_HEIGHT, ci as LOCAL_STORAGE_OVERVIEW_PANEL_WIDTH, cj as LOCAL_STORAGE_PANEL_WIDTH, ck as useActiveElement, bo as useKeybindings, cl as toRef, Z as nextTick, cm as ndvEventBus } from "./index-lkSN61-i.js";
import { p as processFiles, g as getInputKey, e as extractBotResponse, r as restoreChatHistory, u as upperFirst, _ as _sfc_main$g, a as getTotalConsumedTokens, b as getSubtreeTotalConsumedTokens, L as LogsOverviewRows, i as isSubNodeLog, c as isPlaceholderLog, d as LogsViewNodeName, f as findSelectedLogEntry, h as getEntryAtRelativeIndex, j as getDepth, k as findLogEntryRec, l as useLogsExecutionData, m as useLogsTreeExpand } from "./useLogsTreeExpand-BcUbZr_c.js";
import { H as HighlightJS, V as VueMarkdown } from "./core-aAY3Jgyx.js";
import "./AnimatedSpinner-D5rgVQbZ.js";
function constructChatWebsocketUrl(url, executionId, sessionId2, isPublic) {
  const baseUrl = new URL(url).origin;
  const wsProtocol = baseUrl.startsWith("https") ? "wss" : "ws";
  const wsUrl = baseUrl.replace(/^https?/, wsProtocol);
  return `${wsUrl}/chat?sessionId=${sessionId2}&executionId=${executionId}${isPublic ? "&isPublic=true" : ""}`;
}
function useChatMessaging({
  chatTrigger,
  sessionId: sessionId2,
  executionResultData,
  onRunChatWorkflow,
  ws,
  onNewMessage
}) {
  const locale = useI18n$1();
  const { showError } = useToast();
  const previousMessageIndex = ref(0);
  const isLoading = ref(false);
  const setLoadingState = (loading) => {
    isLoading.value = loading;
  };
  async function convertFileToBinaryData(file) {
    const reader = new FileReader();
    return await new Promise((resolve, reject) => {
      reader.onload = () => {
        const binaryData = {
          data: reader.result.split("base64,")?.[1] ?? "",
          mimeType: file.type,
          fileName: file.name,
          fileSize: `${file.size} bytes`,
          fileExtension: file.name.split(".").pop() ?? "",
          fileType: file.type.split("/")[0]
        };
        resolve(binaryData);
      };
      reader.onerror = () => {
        reject(new Error("Failed to convert file to binary data"));
      };
      reader.readAsDataURL(file);
    });
  }
  async function getKeyedFiles(files) {
    const binaryData = {};
    await Promise.all(
      files.map(async (file, index) => {
        const data = await convertFileToBinaryData(file);
        const key = `data${index}`;
        binaryData[key] = data;
      })
    );
    return binaryData;
  }
  function extractFileMeta(file) {
    return {
      fileName: file.name,
      fileSize: `${file.size} bytes`,
      fileExtension: file.name.split(".").pop() ?? "",
      fileType: file.type.split("/")[0],
      mimeType: file.type
    };
  }
  async function startWorkflowWithMessage(message, files) {
    const triggerNode = chatTrigger.value;
    if (!triggerNode) {
      showError(new Error("Chat Trigger Node could not be found!"), "Trigger Node not found");
      return;
    }
    const inputKey = getInputKey(triggerNode);
    const inputPayload = {
      json: {
        sessionId: sessionId2,
        action: "sendMessage",
        [inputKey]: message
      }
    };
    if (files && files.length > 0) {
      const filesMeta = files.map((file) => extractFileMeta(file));
      const binaryData = await getKeyedFiles(files);
      inputPayload.json.files = filesMeta;
      inputPayload.binary = binaryData;
    }
    const nodeData = {
      startTime: Date.now(),
      executionTime: 0,
      executionIndex: 0,
      executionStatus: "success",
      data: {
        main: [[inputPayload]]
      },
      source: [null]
    };
    isLoading.value = true;
    const response = await onRunChatWorkflow({
      triggerNode: triggerNode.name,
      nodeData,
      source: "RunData.ManualChatMessage",
      message
    });
    isLoading.value = false;
    ws.value = null;
    if (!response?.executionId) {
      return;
    }
    const responseMode = triggerNode.parameters.options?.responseMode;
    if (responseMode === "responseNodes") return;
    const chatMessage = executionResultData.value ? extractBotResponse(
      executionResultData.value,
      response.executionId,
      locale.baseText("chat.window.chat.response.empty")
    ) : void 0;
    if (chatMessage !== void 0) {
      onNewMessage(chatMessage);
    }
  }
  async function sendMessage(message, files) {
    previousMessageIndex.value = 0;
    if (message.trim() === "" && (!files || files.length === 0)) {
      showError(
        new Error(locale.baseText("chat.window.chat.provideMessage")),
        locale.baseText("chat.window.chat.emptyChatMessage")
      );
      return;
    }
    const pinnedChatData = usePinnedData(chatTrigger.value);
    if (pinnedChatData.hasData.value) {
      const confirmResult = await useMessage().confirm(
        locale.baseText("chat.window.chat.unpinAndExecute.description"),
        locale.baseText("chat.window.chat.unpinAndExecute.title"),
        {
          confirmButtonText: locale.baseText("chat.window.chat.unpinAndExecute.confirm"),
          cancelButtonText: locale.baseText("chat.window.chat.unpinAndExecute.cancel")
        }
      );
      if (!(confirmResult === MODAL_CONFIRM)) return;
      pinnedChatData.unsetData("unpin-and-send-chat-message-modal");
    }
    const newMessage = {
      text: message,
      sender: "user",
      sessionId: sessionId2,
      id: v4(),
      files
    };
    onNewMessage(newMessage);
    if (ws.value?.readyState === WebSocket.OPEN && !isLoading.value) {
      ws.value.send(
        JSON.stringify({
          sessionId: sessionId2,
          action: "sendMessage",
          chatInput: message,
          files: await processFiles(files)
        })
      );
      isLoading.value = true;
    } else {
      await startWorkflowWithMessage(newMessage.text, files);
    }
  }
  return {
    previousMessageIndex,
    isLoading: computed(() => isLoading.value),
    setLoadingState,
    sendMessage
  };
}
const ChatSymbol$1 = "Chat";
const ChatOptionsSymbol = "ChatOptions";
const ChatSymbol = "Chat";
function useChatState(isReadOnly) {
  const locale = useI18n$1();
  const workflowsStore = useWorkflowsStore();
  const workflowState = injectWorkflowState();
  const rootStore = useRootStore();
  const logsStore = useLogsStore();
  const router = useRouter();
  const nodeHelpers = useNodeHelpers();
  const { runWorkflow } = useRunWorkflow({ router });
  const ws = ref(null);
  const messages2 = computed(() => logsStore.chatSessionMessages);
  const currentSessionId = computed(() => logsStore.chatSessionId);
  const previousChatMessages = computed(() => workflowsStore.getPastChatMessages);
  const chatTriggerNode = computed(() => workflowsStore.allNodes.find(isChatNode) ?? null);
  const allowFileUploads = computed(
    () => chatTriggerNode.value?.parameters?.options?.allowFileUploads === true
  );
  const allowedFilesMimeTypes = computed(
    () => chatTriggerNode.value?.parameters?.options?.allowedFilesMimeTypes?.toString() ?? ""
  );
  const respondNodesResponseMode = computed(
    () => chatTriggerNode.value?.parameters?.options?.responseMode === "responseNodes"
  );
  const { sendMessage, isLoading, setLoadingState } = useChatMessaging({
    chatTrigger: chatTriggerNode,
    sessionId: currentSessionId.value,
    executionResultData: computed(() => workflowsStore.getWorkflowExecution?.data?.resultData),
    onRunChatWorkflow,
    onNewMessage: logsStore.addChatMessage,
    ws
  });
  function createChatConfig(params) {
    const chatConfig2 = {
      messages: params.messages,
      sendMessage: params.sendMessage,
      initialMessages: ref([]),
      currentSessionId: params.currentSessionId,
      waitingForResponse: params.isLoading
    };
    const chatOptions2 = {
      i18n: {
        en: {
          title: "",
          footer: "",
          subtitle: "",
          inputPlaceholder: params.locale.baseText("chat.window.chat.placeholder"),
          getStarted: "",
          closeButtonTooltip: ""
        }
      },
      webhookUrl: "",
      mode: "window",
      showWindowCloseButton: true,
      disabled: params.isDisabled,
      allowFileUploads: params.allowFileUploads,
      allowedFilesMimeTypes
    };
    return { chatConfig: chatConfig2, chatOptions: chatOptions2 };
  }
  const { chatConfig, chatOptions } = createChatConfig({
    messages: messages2,
    sendMessage,
    currentSessionId,
    isLoading,
    isDisabled: computed(() => isReadOnly),
    allowFileUploads,
    locale
  });
  const restoredChatMessages = computed(
    () => restoreChatHistory(
      workflowsStore.workflowExecutionData,
      locale.baseText("chat.window.chat.response.empty")
    )
  );
  provide(ChatSymbol, chatConfig);
  provide(ChatOptionsSymbol, chatOptions);
  async function createExecutionPromise() {
    return await new Promise((resolve) => {
      const resolveIfFinished = (isRunning) => {
        if (!isRunning) {
          unwatch();
          resolve();
        }
      };
      const unwatch = watch(() => workflowsStore.isWorkflowRunning, resolveIfFinished);
      resolveIfFinished(workflowsStore.isWorkflowRunning);
    });
  }
  async function onRunChatWorkflow(payload) {
    const runWorkflowOptions = {
      triggerNode: payload.triggerNode,
      nodeData: payload.nodeData,
      source: payload.source
    };
    if (workflowsStore.chatPartialExecutionDestinationNode) {
      runWorkflowOptions.destinationNode = workflowsStore.chatPartialExecutionDestinationNode;
      workflowsStore.chatPartialExecutionDestinationNode = null;
    }
    const response = await runWorkflow(runWorkflowOptions);
    if (response) {
      if (respondNodesResponseMode.value) {
        const wsUrl = constructChatWebsocketUrl(
          rootStore.urlBaseEditor,
          response.executionId,
          currentSessionId.value,
          false
        );
        ws.value = new WebSocket(wsUrl);
        ws.value.onmessage = (event) => {
          if (event.data === "n8n|heartbeat") {
            ws.value?.send("n8n|heartbeat-ack");
            return;
          }
          if (event.data === "n8n|continue") {
            setLoadingState(true);
            return;
          }
          setLoadingState(false);
          const newMessage = {
            text: event.data,
            sender: "bot",
            sessionId: currentSessionId.value,
            id: v4()
          };
          logsStore.addChatMessage(newMessage);
          if (logsStore.isOpen) {
            chatEventBus.emit("focusInput");
          }
        };
        ws.value.onclose = () => {
          setLoadingState(false);
          ws.value = null;
        };
      }
      await createExecutionPromise();
      workflowsStore.appendChatMessage(payload.message);
      return response;
    }
    return;
  }
  function refreshSession() {
    workflowState.setWorkflowExecutionData(null);
    nodeHelpers.updateNodesExecutionIssues();
    logsStore.resetChatSessionId();
    logsStore.resetMessages();
    if (logsStore.isOpen) {
      chatEventBus.emit("focusInput");
    }
  }
  function displayExecution(executionId) {
    const route = router.resolve({
      name: VIEWS.EXECUTION_PREVIEW,
      params: { name: workflowsStore.workflowId, executionId }
    });
    window.open(route.href, "_blank");
  }
  watch(
    () => workflowsStore.workflowId,
    (_newWorkflowId, prevWorkflowId) => {
      if (prevWorkflowId === PLACEHOLDER_EMPTY_WORKFLOW_ID) {
        return;
      }
      refreshSession();
    }
  );
  return {
    currentSessionId: computed(() => logsStore.chatSessionId),
    messages: computed(
      () => isReadOnly ? restoredChatMessages.value : logsStore.chatSessionMessages
    ),
    previousChatMessages,
    sendMessage,
    refreshSession,
    displayExecution
  };
}
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "LogsPanelHeader",
  props: {
    title: {},
    isClickable: { type: Boolean }
  },
  emits: ["click"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    function handleClick() {
      if (__props.isClickable) {
        emit("click");
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("header", {
        class: normalizeClass([_ctx.$style.container, { [_ctx.$style.clickable]: _ctx.isClickable }]),
        onClick: handleClick
      }, [
        createVNode(unref(N8nText), {
          class: normalizeClass(_ctx.$style.title),
          bold: true,
          size: "small"
        }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "title", {}, () => [
              createTextVNode(toDisplayString(_ctx.title), 1)
            ])
          ]),
          _: 3
        }, 8, ["class"]),
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.actions)
        }, [
          renderSlot(_ctx.$slots, "actions")
        ], 2)
      ], 2);
    };
  }
});
const container$7 = "_container_1y331_123";
const clickable = "_clickable_1y331_135";
const title$2 = "_title_1y331_143";
const actions$1 = "_actions_1y331_151";
const style0$9 = {
  container: container$7,
  clickable,
  title: title$2,
  actions: actions$1
};
const cssModules$9 = {
  "$style": style0$9
};
const LogsPanelHeader = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__cssModules", cssModules$9]]);
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "LogsViewExecutionSummary",
  props: {
    status: {},
    consumedTokens: {},
    startTime: {},
    timeTook: {}
  },
  setup(__props) {
    const locale = useI18n$1();
    const now = useTimestamp({ interval: 1e3 });
    const executionStatusText = computed(
      () => __props.status === "running" || __props.status === "waiting" ? locale.baseText("logs.overview.body.summaryText.for", {
        interpolate: {
          status: upperFirst(__props.status),
          time: locale.displayTimer(Math.floor((now.value - __props.startTime) / 1e3) * 1e3, true)
        }
      }) : __props.timeTook === void 0 ? upperFirst(__props.status) : locale.baseText("logs.overview.body.summaryText.in", {
        interpolate: {
          status: upperFirst(__props.status),
          time: locale.displayTimer(__props.timeTook, true)
        }
      })
    );
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(N8nText), {
        tag: "div",
        color: "text-light",
        size: "small",
        class: normalizeClass(_ctx.$style.container)
      }, {
        default: withCtx(() => [
          createBaseVNode("span", null, toDisplayString(executionStatusText.value), 1),
          _ctx.consumedTokens.totalTokens > 0 ? (openBlock(), createBlock(_sfc_main$g, {
            key: 0,
            "consumed-tokens": _ctx.consumedTokens
          }, null, 8, ["consumed-tokens"])) : createCommentVNode("", true)
        ]),
        _: 1
      }, 8, ["class"]);
    };
  }
});
const container$6 = "_container_1sayb_123";
const style0$8 = {
  container: container$6
};
const cssModules$8 = {
  "$style": style0$8
};
const LogsViewExecutionSummary = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__cssModules", cssModules$8]]);
function useClearExecutionButtonVisible() {
  const route = useRoute();
  const sourceControlStore = useSourceControlStore();
  const workflowsStore = useWorkflowsStore();
  const workflowExecutionData = computed(() => workflowsStore.workflowExecutionData);
  const isWorkflowRunning = computed(() => workflowsStore.isWorkflowRunning);
  const isReadOnlyRoute = computed(() => !!route?.meta?.readOnlyCanvas);
  const { editableWorkflow } = useCanvasOperations();
  const nodeTypesStore = useNodeTypesStore();
  const isReadOnlyEnvironment = computed(() => sourceControlStore.preferences.branchReadOnly);
  const allTriggerNodesDisabled = computed(
    () => editableWorkflow.value.nodes.filter((node) => node.type === START_NODE_TYPE || nodeTypesStore.isTriggerNode(node.type)).every((node) => node.disabled)
  );
  return computed(
    () => !isReadOnlyRoute.value && !isReadOnlyEnvironment.value && !isWorkflowRunning.value && !allTriggerNodesDisabled.value && !!workflowExecutionData.value
  );
}
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "LogsOverviewPanel",
  props: {
    isOpen: { type: Boolean },
    selected: {},
    isReadOnly: { type: Boolean },
    isCompact: { type: Boolean },
    execution: {},
    entries: {},
    flatLogEntries: {},
    latestNodeInfo: {},
    isHeaderClickable: { type: Boolean }
  },
  emits: ["clickHeader", "select", "clearExecutionData", "openNdv", "toggleExpanded"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const locale = useI18n$1();
    const isClearExecutionButtonVisible = useClearExecutionButtonVisible();
    const isEmpty = computed(() => __props.flatLogEntries.length === 0 || __props.execution === void 0);
    const switchViewOptions = computed(() => [
      { label: locale.baseText("logs.overview.header.switch.overview"), value: "overview" },
      { label: locale.baseText("logs.overview.header.switch.details"), value: "details" }
    ]);
    const hasStaticScrollbar = getScrollbarWidth() > 0;
    const consumedTokens = computed(
      () => getTotalConsumedTokens(
        ...__props.entries.map(
          (entry) => getSubtreeTotalConsumedTokens(
            entry,
            false
            // Exclude token usages from sub workflow which is loaded only after expanding the row
          )
        )
      )
    );
    const timeTook = computed(
      () => __props.execution?.startedAt && __props.execution.stoppedAt ? +new Date(__props.execution.stoppedAt) - +new Date(__props.execution.startedAt) : void 0
    );
    const shouldShowTokenCountColumn = computed(
      () => consumedTokens.value.totalTokens > 0 || __props.entries.some((entry) => getSubtreeTotalConsumedTokens(entry, true).totalTokens > 0)
    );
    function handleSwitchView(value) {
      emit("select", value === "overview" ? void 0 : __props.flatLogEntries[0]);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([_ctx.$style.container, hasStaticScrollbar ? _ctx.$style.staticScrollBar : ""]),
        "data-test-id": "logs-overview"
      }, [
        createVNode(LogsPanelHeader, {
          title: unref(locale).baseText("logs.overview.header.title"),
          "data-test-id": "logs-overview-header",
          "is-clickable": _ctx.isHeaderClickable,
          onClick: _cache[1] || (_cache[1] = ($event) => emit("clickHeader"))
        }, {
          actions: withCtx(() => [
            unref(isClearExecutionButtonVisible) ? (openBlock(), createBlock(unref(N8nTooltip), {
              key: 0,
              content: unref(locale).baseText("logs.overview.header.actions.clearExecution.tooltip")
            }, {
              default: withCtx(() => [
                createVNode(unref(N8nButton), {
                  size: "mini",
                  type: "secondary",
                  icon: "trash-2",
                  "icon-size": "medium",
                  "data-test-id": "clear-execution-data-button",
                  class: normalizeClass(_ctx.$style.clearButton),
                  onClick: _cache[0] || (_cache[0] = withModifiers(($event) => emit("clearExecutionData"), ["stop"]))
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(locale).baseText("logs.overview.header.actions.clearExecution")), 1)
                  ]),
                  _: 1
                }, 8, ["class"])
              ]),
              _: 1
            }, 8, ["content"])) : createCommentVNode("", true),
            renderSlot(_ctx.$slots, "actions")
          ]),
          _: 3
        }, 8, ["title", "is-clickable"]),
        _ctx.isOpen ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass([_ctx.$style.content, isEmpty.value ? _ctx.$style.empty : ""]),
          "data-test-id": "logs-overview-body"
        }, [
          isEmpty.value || _ctx.execution === void 0 ? (openBlock(), createBlock(unref(N8nText), {
            key: 0,
            tag: "p",
            size: "medium",
            color: "text-base",
            class: normalizeClass(_ctx.$style.emptyText),
            "data-test-id": "logs-overview-empty"
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(locale).baseText("logs.overview.body.empty.message")), 1)
            ]),
            _: 1
          }, 8, ["class"])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            createVNode(LogsViewExecutionSummary, {
              "data-test-id": "logs-overview-status",
              class: normalizeClass(_ctx.$style.summary),
              status: _ctx.execution.status,
              "consumed-tokens": consumedTokens.value,
              "start-time": +new Date(_ctx.execution.startedAt),
              "time-took": timeTook.value
            }, null, 8, ["class", "status", "consumed-tokens", "start-time", "time-took"]),
            createVNode(LogsOverviewRows, {
              "is-read-only": _ctx.isReadOnly,
              selected: _ctx.selected,
              "is-compact": _ctx.isCompact,
              "should-show-token-count-column": shouldShowTokenCountColumn.value,
              "latest-node-info": _ctx.latestNodeInfo,
              "flat-log-entries": _ctx.flatLogEntries,
              "can-open-ndv": true,
              onToggleExpanded: _cache[2] || (_cache[2] = ($event) => emit("toggleExpanded", $event)),
              onOpenNdv: _cache[3] || (_cache[3] = ($event) => emit("openNdv", $event)),
              onSelect: _cache[4] || (_cache[4] = ($event) => emit("select", $event))
            }, null, 8, ["is-read-only", "selected", "is-compact", "should-show-token-count-column", "latest-node-info", "flat-log-entries"]),
            createVNode(unref(N8nRadioButtons), {
              size: "small-medium",
              class: normalizeClass(_ctx.$style.switchViewButtons),
              "model-value": _ctx.selected ? "details" : "overview",
              options: switchViewOptions.value,
              "onUpdate:modelValue": handleSwitchView
            }, null, 8, ["class", "model-value", "options"])
          ], 64))
        ], 2)) : createCommentVNode("", true)
      ], 2);
    };
  }
});
const container$5 = "_container_svlfi_123";
const clearButton = "_clearButton_svlfi_133";
const content$1 = "_content_svlfi_139";
const empty = "_empty_svlfi_149";
const emptyText = "_emptyText_svlfi_154";
const summary = "_summary_svlfi_159";
const switchViewButtons = "_switchViewButtons_svlfi_163";
const style0$7 = {
  container: container$5,
  clearButton,
  content: content$1,
  empty,
  emptyText,
  summary,
  switchViewButtons
};
const cssModules$7 = {
  "$style": style0$7
};
const LogsOverviewPanel = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__cssModules", cssModules$7]]);
function bash(hljs) {
  const regex = hljs.regex;
  const VAR = {};
  const BRACED_VAR = {
    begin: /\$\{/,
    end: /\}/,
    contains: [
      "self",
      {
        begin: /:-/,
        contains: [VAR]
      }
      // default values
    ]
  };
  Object.assign(VAR, {
    className: "variable",
    variants: [
      { begin: regex.concat(
        /\$[\w\d#@][\w\d_]*/,
        // negative look-ahead tries to avoid matching patterns that are not
        // Perl at all like $ident$, @ident@, etc.
        `(?![\\w\\d])(?![$])`
      ) },
      BRACED_VAR
    ]
  });
  const SUBST = {
    className: "subst",
    begin: /\$\(/,
    end: /\)/,
    contains: [hljs.BACKSLASH_ESCAPE]
  };
  const COMMENT = hljs.inherit(
    hljs.COMMENT(),
    {
      match: [
        /(^|\s)/,
        /#.*$/
      ],
      scope: {
        2: "comment"
      }
    }
  );
  const HERE_DOC = {
    begin: /<<-?\s*(?=\w+)/,
    starts: { contains: [
      hljs.END_SAME_AS_BEGIN({
        begin: /(\w+)/,
        end: /(\w+)/,
        className: "string"
      })
    ] }
  };
  const QUOTE_STRING = {
    className: "string",
    begin: /"/,
    end: /"/,
    contains: [
      hljs.BACKSLASH_ESCAPE,
      VAR,
      SUBST
    ]
  };
  SUBST.contains.push(QUOTE_STRING);
  const ESCAPED_QUOTE = {
    match: /\\"/
  };
  const APOS_STRING = {
    className: "string",
    begin: /'/,
    end: /'/
  };
  const ESCAPED_APOS = {
    match: /\\'/
  };
  const ARITHMETIC = {
    begin: /\$?\(\(/,
    end: /\)\)/,
    contains: [
      {
        begin: /\d+#[0-9a-f]+/,
        className: "number"
      },
      hljs.NUMBER_MODE,
      VAR
    ]
  };
  const SH_LIKE_SHELLS = [
    "fish",
    "bash",
    "zsh",
    "sh",
    "csh",
    "ksh",
    "tcsh",
    "dash",
    "scsh"
  ];
  const KNOWN_SHEBANG = hljs.SHEBANG({
    binary: `(${SH_LIKE_SHELLS.join("|")})`,
    relevance: 10
  });
  const FUNCTION = {
    className: "function",
    begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
    returnBegin: true,
    contains: [hljs.inherit(hljs.TITLE_MODE, { begin: /\w[\w\d_]*/ })],
    relevance: 0
  };
  const KEYWORDS2 = [
    "if",
    "then",
    "else",
    "elif",
    "fi",
    "time",
    "for",
    "while",
    "until",
    "in",
    "do",
    "done",
    "case",
    "esac",
    "coproc",
    "function",
    "select"
  ];
  const LITERALS2 = [
    "true",
    "false"
  ];
  const PATH_MODE = { match: /(\/[a-z._-]+)+/ };
  const SHELL_BUILT_INS = [
    "break",
    "cd",
    "continue",
    "eval",
    "exec",
    "exit",
    "export",
    "getopts",
    "hash",
    "pwd",
    "readonly",
    "return",
    "shift",
    "test",
    "times",
    "trap",
    "umask",
    "unset"
  ];
  const BASH_BUILT_INS = [
    "alias",
    "bind",
    "builtin",
    "caller",
    "command",
    "declare",
    "echo",
    "enable",
    "help",
    "let",
    "local",
    "logout",
    "mapfile",
    "printf",
    "read",
    "readarray",
    "source",
    "sudo",
    "type",
    "typeset",
    "ulimit",
    "unalias"
  ];
  const ZSH_BUILT_INS = [
    "autoload",
    "bg",
    "bindkey",
    "bye",
    "cap",
    "chdir",
    "clone",
    "comparguments",
    "compcall",
    "compctl",
    "compdescribe",
    "compfiles",
    "compgroups",
    "compquote",
    "comptags",
    "comptry",
    "compvalues",
    "dirs",
    "disable",
    "disown",
    "echotc",
    "echoti",
    "emulate",
    "fc",
    "fg",
    "float",
    "functions",
    "getcap",
    "getln",
    "history",
    "integer",
    "jobs",
    "kill",
    "limit",
    "log",
    "noglob",
    "popd",
    "print",
    "pushd",
    "pushln",
    "rehash",
    "sched",
    "setcap",
    "setopt",
    "stat",
    "suspend",
    "ttyctl",
    "unfunction",
    "unhash",
    "unlimit",
    "unsetopt",
    "vared",
    "wait",
    "whence",
    "where",
    "which",
    "zcompile",
    "zformat",
    "zftp",
    "zle",
    "zmodload",
    "zparseopts",
    "zprof",
    "zpty",
    "zregexparse",
    "zsocket",
    "zstyle",
    "ztcp"
  ];
  const GNU_CORE_UTILS = [
    "chcon",
    "chgrp",
    "chown",
    "chmod",
    "cp",
    "dd",
    "df",
    "dir",
    "dircolors",
    "ln",
    "ls",
    "mkdir",
    "mkfifo",
    "mknod",
    "mktemp",
    "mv",
    "realpath",
    "rm",
    "rmdir",
    "shred",
    "sync",
    "touch",
    "truncate",
    "vdir",
    "b2sum",
    "base32",
    "base64",
    "cat",
    "cksum",
    "comm",
    "csplit",
    "cut",
    "expand",
    "fmt",
    "fold",
    "head",
    "join",
    "md5sum",
    "nl",
    "numfmt",
    "od",
    "paste",
    "ptx",
    "pr",
    "sha1sum",
    "sha224sum",
    "sha256sum",
    "sha384sum",
    "sha512sum",
    "shuf",
    "sort",
    "split",
    "sum",
    "tac",
    "tail",
    "tr",
    "tsort",
    "unexpand",
    "uniq",
    "wc",
    "arch",
    "basename",
    "chroot",
    "date",
    "dirname",
    "du",
    "echo",
    "env",
    "expr",
    "factor",
    // "false", // keyword literal already
    "groups",
    "hostid",
    "id",
    "link",
    "logname",
    "nice",
    "nohup",
    "nproc",
    "pathchk",
    "pinky",
    "printenv",
    "printf",
    "pwd",
    "readlink",
    "runcon",
    "seq",
    "sleep",
    "stat",
    "stdbuf",
    "stty",
    "tee",
    "test",
    "timeout",
    // "true", // keyword literal already
    "tty",
    "uname",
    "unlink",
    "uptime",
    "users",
    "who",
    "whoami",
    "yes"
  ];
  return {
    name: "Bash",
    aliases: [
      "sh",
      "zsh"
    ],
    keywords: {
      $pattern: /\b[a-z][a-z0-9._-]+\b/,
      keyword: KEYWORDS2,
      literal: LITERALS2,
      built_in: [
        ...SHELL_BUILT_INS,
        ...BASH_BUILT_INS,
        // Shell modifiers
        "set",
        "shopt",
        ...ZSH_BUILT_INS,
        ...GNU_CORE_UTILS
      ]
    },
    contains: [
      KNOWN_SHEBANG,
      // to catch known shells and boost relevancy
      hljs.SHEBANG(),
      // to catch unknown shells but still highlight the shebang
      FUNCTION,
      ARITHMETIC,
      COMMENT,
      HERE_DOC,
      PATH_MODE,
      QUOTE_STRING,
      ESCAPED_QUOTE,
      APOS_STRING,
      ESCAPED_APOS,
      VAR
    ]
  };
}
const IDENT_RE$1 = "[A-Za-z$_][0-9A-Za-z$_]*";
const KEYWORDS$1 = [
  "as",
  // for exports
  "in",
  "of",
  "if",
  "for",
  "while",
  "finally",
  "var",
  "new",
  "function",
  "do",
  "return",
  "void",
  "else",
  "break",
  "catch",
  "instanceof",
  "with",
  "throw",
  "case",
  "default",
  "try",
  "switch",
  "continue",
  "typeof",
  "delete",
  "let",
  "yield",
  "const",
  "class",
  // JS handles these with a special rule
  // "get",
  // "set",
  "debugger",
  "async",
  "await",
  "static",
  "import",
  "from",
  "export",
  "extends",
  // It's reached stage 3, which is "recommended for implementation":
  "using"
];
const LITERALS$1 = [
  "true",
  "false",
  "null",
  "undefined",
  "NaN",
  "Infinity"
];
const TYPES$1 = [
  // Fundamental objects
  "Object",
  "Function",
  "Boolean",
  "Symbol",
  // numbers and dates
  "Math",
  "Date",
  "Number",
  "BigInt",
  // text
  "String",
  "RegExp",
  // Indexed collections
  "Array",
  "Float32Array",
  "Float64Array",
  "Int8Array",
  "Uint8Array",
  "Uint8ClampedArray",
  "Int16Array",
  "Int32Array",
  "Uint16Array",
  "Uint32Array",
  "BigInt64Array",
  "BigUint64Array",
  // Keyed collections
  "Set",
  "Map",
  "WeakSet",
  "WeakMap",
  // Structured data
  "ArrayBuffer",
  "SharedArrayBuffer",
  "Atomics",
  "DataView",
  "JSON",
  // Control abstraction objects
  "Promise",
  "Generator",
  "GeneratorFunction",
  "AsyncFunction",
  // Reflection
  "Reflect",
  "Proxy",
  // Internationalization
  "Intl",
  // WebAssembly
  "WebAssembly"
];
const ERROR_TYPES$1 = [
  "Error",
  "EvalError",
  "InternalError",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "TypeError",
  "URIError"
];
const BUILT_IN_GLOBALS$1 = [
  "setInterval",
  "setTimeout",
  "clearInterval",
  "clearTimeout",
  "require",
  "exports",
  "eval",
  "isFinite",
  "isNaN",
  "parseFloat",
  "parseInt",
  "decodeURI",
  "decodeURIComponent",
  "encodeURI",
  "encodeURIComponent",
  "escape",
  "unescape"
];
const BUILT_IN_VARIABLES$1 = [
  "arguments",
  "this",
  "super",
  "console",
  "window",
  "document",
  "localStorage",
  "sessionStorage",
  "module",
  "global"
  // Node.js
];
const BUILT_INS$1 = [].concat(
  BUILT_IN_GLOBALS$1,
  TYPES$1,
  ERROR_TYPES$1
);
function javascript$1(hljs) {
  const regex = hljs.regex;
  const hasClosingTag = (match, { after }) => {
    const tag = "</" + match[0].slice(1);
    const pos = match.input.indexOf(tag, after);
    return pos !== -1;
  };
  const IDENT_RE$1$1 = IDENT_RE$1;
  const FRAGMENT = {
    begin: "<>",
    end: "</>"
  };
  const XML_SELF_CLOSING = /<[A-Za-z0-9\\._:-]+\s*\/>/;
  const XML_TAG = {
    begin: /<[A-Za-z0-9\\._:-]+/,
    end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
    /**
     * @param {RegExpMatchArray} match
     * @param {CallbackResponse} response
     */
    isTrulyOpeningTag: (match, response) => {
      const afterMatchIndex = match[0].length + match.index;
      const nextChar = match.input[afterMatchIndex];
      if (
        // HTML should not include another raw `<` inside a tag
        // nested type?
        // `<Array<Array<number>>`, etc.
        nextChar === "<" || // the , gives away that this is not HTML
        // `<T, A extends keyof T, V>`
        nextChar === ","
      ) {
        response.ignoreMatch();
        return;
      }
      if (nextChar === ">") {
        if (!hasClosingTag(match, { after: afterMatchIndex })) {
          response.ignoreMatch();
        }
      }
      let m;
      const afterMatch = match.input.substring(afterMatchIndex);
      if (m = afterMatch.match(/^\s*=/)) {
        response.ignoreMatch();
        return;
      }
      if (m = afterMatch.match(/^\s+extends\s+/)) {
        if (m.index === 0) {
          response.ignoreMatch();
          return;
        }
      }
    }
  };
  const KEYWORDS$1$1 = {
    $pattern: IDENT_RE$1,
    keyword: KEYWORDS$1,
    literal: LITERALS$1,
    built_in: BUILT_INS$1,
    "variable.language": BUILT_IN_VARIABLES$1
  };
  const decimalDigits = "[0-9](_?[0-9])*";
  const frac = `\\.(${decimalDigits})`;
  const decimalInteger = `0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*`;
  const NUMBER = {
    className: "number",
    variants: [
      // DecimalLiteral
      { begin: `(\\b(${decimalInteger})((${frac})|\\.)?|(${frac}))[eE][+-]?(${decimalDigits})\\b` },
      { begin: `\\b(${decimalInteger})\\b((${frac})\\b|\\.)?|(${frac})\\b` },
      // DecimalBigIntegerLiteral
      { begin: `\\b(0|[1-9](_?[0-9])*)n\\b` },
      // NonDecimalIntegerLiteral
      { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
      { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
      { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
      // LegacyOctalIntegerLiteral (does not include underscore separators)
      // https://tc39.es/ecma262/#sec-additional-syntax-numeric-literals
      { begin: "\\b0[0-7]+n?\\b" }
    ],
    relevance: 0
  };
  const SUBST = {
    className: "subst",
    begin: "\\$\\{",
    end: "\\}",
    keywords: KEYWORDS$1$1,
    contains: []
    // defined later
  };
  const HTML_TEMPLATE = {
    begin: ".?html`",
    end: "",
    starts: {
      end: "`",
      returnEnd: false,
      contains: [
        hljs.BACKSLASH_ESCAPE,
        SUBST
      ],
      subLanguage: "xml"
    }
  };
  const CSS_TEMPLATE = {
    begin: ".?css`",
    end: "",
    starts: {
      end: "`",
      returnEnd: false,
      contains: [
        hljs.BACKSLASH_ESCAPE,
        SUBST
      ],
      subLanguage: "css"
    }
  };
  const GRAPHQL_TEMPLATE = {
    begin: ".?gql`",
    end: "",
    starts: {
      end: "`",
      returnEnd: false,
      contains: [
        hljs.BACKSLASH_ESCAPE,
        SUBST
      ],
      subLanguage: "graphql"
    }
  };
  const TEMPLATE_STRING = {
    className: "string",
    begin: "`",
    end: "`",
    contains: [
      hljs.BACKSLASH_ESCAPE,
      SUBST
    ]
  };
  const JSDOC_COMMENT = hljs.COMMENT(
    /\/\*\*(?!\/)/,
    "\\*/",
    {
      relevance: 0,
      contains: [
        {
          begin: "(?=@[A-Za-z]+)",
          relevance: 0,
          contains: [
            {
              className: "doctag",
              begin: "@[A-Za-z]+"
            },
            {
              className: "type",
              begin: "\\{",
              end: "\\}",
              excludeEnd: true,
              excludeBegin: true,
              relevance: 0
            },
            {
              className: "variable",
              begin: IDENT_RE$1$1 + "(?=\\s*(-)|$)",
              endsParent: true,
              relevance: 0
            },
            // eat spaces (not newlines) so we can find
            // types or variables
            {
              begin: /(?=[^\n])\s/,
              relevance: 0
            }
          ]
        }
      ]
    }
  );
  const COMMENT = {
    className: "comment",
    variants: [
      JSDOC_COMMENT,
      hljs.C_BLOCK_COMMENT_MODE,
      hljs.C_LINE_COMMENT_MODE
    ]
  };
  const SUBST_INTERNALS = [
    hljs.APOS_STRING_MODE,
    hljs.QUOTE_STRING_MODE,
    HTML_TEMPLATE,
    CSS_TEMPLATE,
    GRAPHQL_TEMPLATE,
    TEMPLATE_STRING,
    // Skip numbers when they are part of a variable name
    { match: /\$\d+/ },
    NUMBER
    // This is intentional:
    // See https://github.com/highlightjs/highlight.js/issues/3288
    // hljs.REGEXP_MODE
  ];
  SUBST.contains = SUBST_INTERNALS.concat({
    // we need to pair up {} inside our subst to prevent
    // it from ending too early by matching another }
    begin: /\{/,
    end: /\}/,
    keywords: KEYWORDS$1$1,
    contains: [
      "self"
    ].concat(SUBST_INTERNALS)
  });
  const SUBST_AND_COMMENTS = [].concat(COMMENT, SUBST.contains);
  const PARAMS_CONTAINS = SUBST_AND_COMMENTS.concat([
    // eat recursive parens in sub expressions
    {
      begin: /(\s*)\(/,
      end: /\)/,
      keywords: KEYWORDS$1$1,
      contains: ["self"].concat(SUBST_AND_COMMENTS)
    }
  ]);
  const PARAMS = {
    className: "params",
    // convert this to negative lookbehind in v12
    begin: /(\s*)\(/,
    // to match the parms with
    end: /\)/,
    excludeBegin: true,
    excludeEnd: true,
    keywords: KEYWORDS$1$1,
    contains: PARAMS_CONTAINS
  };
  const CLASS_OR_EXTENDS = {
    variants: [
      // class Car extends vehicle
      {
        match: [
          /class/,
          /\s+/,
          IDENT_RE$1$1,
          /\s+/,
          /extends/,
          /\s+/,
          regex.concat(IDENT_RE$1$1, "(", regex.concat(/\./, IDENT_RE$1$1), ")*")
        ],
        scope: {
          1: "keyword",
          3: "title.class",
          5: "keyword",
          7: "title.class.inherited"
        }
      },
      // class Car
      {
        match: [
          /class/,
          /\s+/,
          IDENT_RE$1$1
        ],
        scope: {
          1: "keyword",
          3: "title.class"
        }
      }
    ]
  };
  const CLASS_REFERENCE = {
    relevance: 0,
    match: regex.either(
      // Hard coded exceptions
      /\bJSON/,
      // Float32Array, OutT
      /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
      // CSSFactory, CSSFactoryT
      /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
      // FPs, FPsT
      /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/
      // P
      // single letters are not highlighted
      // BLAH
      // this will be flagged as a UPPER_CASE_CONSTANT instead
    ),
    className: "title.class",
    keywords: {
      _: [
        // se we still get relevance credit for JS library classes
        ...TYPES$1,
        ...ERROR_TYPES$1
      ]
    }
  };
  const USE_STRICT = {
    label: "use_strict",
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use (strict|asm)['"]/
  };
  const FUNCTION_DEFINITION = {
    variants: [
      {
        match: [
          /function/,
          /\s+/,
          IDENT_RE$1$1,
          /(?=\s*\()/
        ]
      },
      // anonymous function
      {
        match: [
          /function/,
          /\s*(?=\()/
        ]
      }
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    label: "func.def",
    contains: [PARAMS],
    illegal: /%/
  };
  const UPPER_CASE_CONSTANT = {
    relevance: 0,
    match: /\b[A-Z][A-Z_0-9]+\b/,
    className: "variable.constant"
  };
  function noneOf(list) {
    return regex.concat("(?!", list.join("|"), ")");
  }
  const FUNCTION_CALL = {
    match: regex.concat(
      /\b/,
      noneOf([
        ...BUILT_IN_GLOBALS$1,
        "super",
        "import"
      ].map((x) => `${x}\\s*\\(`)),
      IDENT_RE$1$1,
      regex.lookahead(/\s*\(/)
    ),
    className: "title.function",
    relevance: 0
  };
  const PROPERTY_ACCESS = {
    begin: regex.concat(/\./, regex.lookahead(
      regex.concat(IDENT_RE$1$1, /(?![0-9A-Za-z$_(])/)
    )),
    end: IDENT_RE$1$1,
    excludeBegin: true,
    keywords: "prototype",
    className: "property",
    relevance: 0
  };
  const GETTER_OR_SETTER = {
    match: [
      /get|set/,
      /\s+/,
      IDENT_RE$1$1,
      /(?=\()/
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      {
        // eat to avoid empty params
        begin: /\(\)/
      },
      PARAMS
    ]
  };
  const FUNC_LEAD_IN_RE = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + hljs.UNDERSCORE_IDENT_RE + ")\\s*=>";
  const FUNCTION_VARIABLE = {
    match: [
      /const|var|let/,
      /\s+/,
      IDENT_RE$1$1,
      /\s*/,
      /=\s*/,
      /(async\s*)?/,
      // async is optional
      regex.lookahead(FUNC_LEAD_IN_RE)
    ],
    keywords: "async",
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      PARAMS
    ]
  };
  return {
    name: "JavaScript",
    aliases: ["js", "jsx", "mjs", "cjs"],
    keywords: KEYWORDS$1$1,
    // this will be extended by TypeScript
    exports: { PARAMS_CONTAINS, CLASS_REFERENCE },
    illegal: /#(?![$_A-z])/,
    contains: [
      hljs.SHEBANG({
        label: "shebang",
        binary: "node",
        relevance: 5
      }),
      USE_STRICT,
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE,
      HTML_TEMPLATE,
      CSS_TEMPLATE,
      GRAPHQL_TEMPLATE,
      TEMPLATE_STRING,
      COMMENT,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      NUMBER,
      CLASS_REFERENCE,
      {
        scope: "attr",
        match: IDENT_RE$1$1 + regex.lookahead(":"),
        relevance: 0
      },
      FUNCTION_VARIABLE,
      {
        // "value" container
        begin: "(" + hljs.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
        keywords: "return throw case",
        relevance: 0,
        contains: [
          COMMENT,
          hljs.REGEXP_MODE,
          {
            className: "function",
            // we have to count the parens to make sure we actually have the
            // correct bounding ( ) before the =>.  There could be any number of
            // sub-expressions inside also surrounded by parens.
            begin: FUNC_LEAD_IN_RE,
            returnBegin: true,
            end: "\\s*=>",
            contains: [
              {
                className: "params",
                variants: [
                  {
                    begin: hljs.UNDERSCORE_IDENT_RE,
                    relevance: 0
                  },
                  {
                    className: null,
                    begin: /\(\s*\)/,
                    skip: true
                  },
                  {
                    begin: /(\s*)\(/,
                    end: /\)/,
                    excludeBegin: true,
                    excludeEnd: true,
                    keywords: KEYWORDS$1$1,
                    contains: PARAMS_CONTAINS
                  }
                ]
              }
            ]
          },
          {
            // could be a comma delimited list of params to a function call
            begin: /,/,
            relevance: 0
          },
          {
            match: /\s+/,
            relevance: 0
          },
          {
            // JSX
            variants: [
              { begin: FRAGMENT.begin, end: FRAGMENT.end },
              { match: XML_SELF_CLOSING },
              {
                begin: XML_TAG.begin,
                // we carefully check the opening tag to see if it truly
                // is a tag and not a false positive
                "on:begin": XML_TAG.isTrulyOpeningTag,
                end: XML_TAG.end
              }
            ],
            subLanguage: "xml",
            contains: [
              {
                begin: XML_TAG.begin,
                end: XML_TAG.end,
                skip: true,
                contains: ["self"]
              }
            ]
          }
        ]
      },
      FUNCTION_DEFINITION,
      {
        // prevent this from getting swallowed up by function
        // since they appear "function like"
        beginKeywords: "while if switch catch for"
      },
      {
        // we have to count the parens to make sure we actually have the correct
        // bounding ( ).  There could be any number of sub-expressions inside
        // also surrounded by parens.
        begin: "\\b(?!function)" + hljs.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
        // end parens
        returnBegin: true,
        label: "func.def",
        contains: [
          PARAMS,
          hljs.inherit(hljs.TITLE_MODE, { begin: IDENT_RE$1$1, className: "title.function" })
        ]
      },
      // catch ... so it won't trigger the property rule below
      {
        match: /\.\.\./,
        relevance: 0
      },
      PROPERTY_ACCESS,
      // hack: prevents detection of keywords in some circumstances
      // .keyword()
      // $keyword = x
      {
        match: "\\$" + IDENT_RE$1$1,
        relevance: 0
      },
      {
        match: [/\bconstructor(?=\s*\()/],
        className: { 1: "title.function" },
        contains: [PARAMS]
      },
      FUNCTION_CALL,
      UPPER_CASE_CONSTANT,
      CLASS_OR_EXTENDS,
      GETTER_OR_SETTER,
      {
        match: /\$[(.]/
        // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      }
    ]
  };
}
function python(hljs) {
  const regex = hljs.regex;
  const IDENT_RE2 = new RegExp("[\\p{XID_Start}_]\\p{XID_Continue}*", "u");
  const RESERVED_WORDS = [
    "and",
    "as",
    "assert",
    "async",
    "await",
    "break",
    "case",
    "class",
    "continue",
    "def",
    "del",
    "elif",
    "else",
    "except",
    "finally",
    "for",
    "from",
    "global",
    "if",
    "import",
    "in",
    "is",
    "lambda",
    "match",
    "nonlocal|10",
    "not",
    "or",
    "pass",
    "raise",
    "return",
    "try",
    "while",
    "with",
    "yield"
  ];
  const BUILT_INS2 = [
    "__import__",
    "abs",
    "all",
    "any",
    "ascii",
    "bin",
    "bool",
    "breakpoint",
    "bytearray",
    "bytes",
    "callable",
    "chr",
    "classmethod",
    "compile",
    "complex",
    "delattr",
    "dict",
    "dir",
    "divmod",
    "enumerate",
    "eval",
    "exec",
    "filter",
    "float",
    "format",
    "frozenset",
    "getattr",
    "globals",
    "hasattr",
    "hash",
    "help",
    "hex",
    "id",
    "input",
    "int",
    "isinstance",
    "issubclass",
    "iter",
    "len",
    "list",
    "locals",
    "map",
    "max",
    "memoryview",
    "min",
    "next",
    "object",
    "oct",
    "open",
    "ord",
    "pow",
    "print",
    "property",
    "range",
    "repr",
    "reversed",
    "round",
    "set",
    "setattr",
    "slice",
    "sorted",
    "staticmethod",
    "str",
    "sum",
    "super",
    "tuple",
    "type",
    "vars",
    "zip"
  ];
  const LITERALS2 = [
    "__debug__",
    "Ellipsis",
    "False",
    "None",
    "NotImplemented",
    "True"
  ];
  const TYPES2 = [
    "Any",
    "Callable",
    "Coroutine",
    "Dict",
    "List",
    "Literal",
    "Generic",
    "Optional",
    "Sequence",
    "Set",
    "Tuple",
    "Type",
    "Union"
  ];
  const KEYWORDS2 = {
    $pattern: /[A-Za-z]\w+|__\w+__/,
    keyword: RESERVED_WORDS,
    built_in: BUILT_INS2,
    literal: LITERALS2,
    type: TYPES2
  };
  const PROMPT = {
    className: "meta",
    begin: /^(>>>|\.\.\.) /
  };
  const SUBST = {
    className: "subst",
    begin: /\{/,
    end: /\}/,
    keywords: KEYWORDS2,
    illegal: /#/
  };
  const LITERAL_BRACKET = {
    begin: /\{\{/,
    relevance: 0
  };
  const STRING = {
    className: "string",
    contains: [hljs.BACKSLASH_ESCAPE],
    variants: [
      {
        begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,
        end: /'''/,
        contains: [
          hljs.BACKSLASH_ESCAPE,
          PROMPT
        ],
        relevance: 10
      },
      {
        begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,
        end: /"""/,
        contains: [
          hljs.BACKSLASH_ESCAPE,
          PROMPT
        ],
        relevance: 10
      },
      {
        begin: /([fF][rR]|[rR][fF]|[fF])'''/,
        end: /'''/,
        contains: [
          hljs.BACKSLASH_ESCAPE,
          PROMPT,
          LITERAL_BRACKET,
          SUBST
        ]
      },
      {
        begin: /([fF][rR]|[rR][fF]|[fF])"""/,
        end: /"""/,
        contains: [
          hljs.BACKSLASH_ESCAPE,
          PROMPT,
          LITERAL_BRACKET,
          SUBST
        ]
      },
      {
        begin: /([uU]|[rR])'/,
        end: /'/,
        relevance: 10
      },
      {
        begin: /([uU]|[rR])"/,
        end: /"/,
        relevance: 10
      },
      {
        begin: /([bB]|[bB][rR]|[rR][bB])'/,
        end: /'/
      },
      {
        begin: /([bB]|[bB][rR]|[rR][bB])"/,
        end: /"/
      },
      {
        begin: /([fF][rR]|[rR][fF]|[fF])'/,
        end: /'/,
        contains: [
          hljs.BACKSLASH_ESCAPE,
          LITERAL_BRACKET,
          SUBST
        ]
      },
      {
        begin: /([fF][rR]|[rR][fF]|[fF])"/,
        end: /"/,
        contains: [
          hljs.BACKSLASH_ESCAPE,
          LITERAL_BRACKET,
          SUBST
        ]
      },
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE
    ]
  };
  const digitpart = "[0-9](_?[0-9])*";
  const pointfloat = `(\\b(${digitpart}))?\\.(${digitpart})|\\b(${digitpart})\\.`;
  const lookahead = `\\b|${RESERVED_WORDS.join("|")}`;
  const NUMBER = {
    className: "number",
    relevance: 0,
    variants: [
      // exponentfloat, pointfloat
      // https://docs.python.org/3.9/reference/lexical_analysis.html#floating-point-literals
      // optionally imaginary
      // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
      // Note: no leading \b because floats can start with a decimal point
      // and we don't want to mishandle e.g. `fn(.5)`,
      // no trailing \b for pointfloat because it can end with a decimal point
      // and we don't want to mishandle e.g. `0..hex()`; this should be safe
      // because both MUST contain a decimal point and so cannot be confused with
      // the interior part of an identifier
      {
        begin: `(\\b(${digitpart})|(${pointfloat}))[eE][+-]?(${digitpart})[jJ]?(?=${lookahead})`
      },
      {
        begin: `(${pointfloat})[jJ]?`
      },
      // decinteger, bininteger, octinteger, hexinteger
      // https://docs.python.org/3.9/reference/lexical_analysis.html#integer-literals
      // optionally "long" in Python 2
      // https://docs.python.org/2.7/reference/lexical_analysis.html#integer-and-long-integer-literals
      // decinteger is optionally imaginary
      // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
      {
        begin: `\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${lookahead})`
      },
      {
        begin: `\\b0[bB](_?[01])+[lL]?(?=${lookahead})`
      },
      {
        begin: `\\b0[oO](_?[0-7])+[lL]?(?=${lookahead})`
      },
      {
        begin: `\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${lookahead})`
      },
      // imagnumber (digitpart-based)
      // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
      {
        begin: `\\b(${digitpart})[jJ](?=${lookahead})`
      }
    ]
  };
  const COMMENT_TYPE = {
    className: "comment",
    begin: regex.lookahead(/# type:/),
    end: /$/,
    keywords: KEYWORDS2,
    contains: [
      {
        // prevent keywords from coloring `type`
        begin: /# type:/
      },
      // comment within a datatype comment includes no keywords
      {
        begin: /#/,
        end: /\b\B/,
        endsWithParent: true
      }
    ]
  };
  const PARAMS = {
    className: "params",
    variants: [
      // Exclude params in functions without params
      {
        className: "",
        begin: /\(\s*\)/,
        skip: true
      },
      {
        begin: /\(/,
        end: /\)/,
        excludeBegin: true,
        excludeEnd: true,
        keywords: KEYWORDS2,
        contains: [
          "self",
          PROMPT,
          NUMBER,
          STRING,
          hljs.HASH_COMMENT_MODE
        ]
      }
    ]
  };
  SUBST.contains = [
    STRING,
    NUMBER,
    PROMPT
  ];
  return {
    name: "Python",
    aliases: [
      "py",
      "gyp",
      "ipython"
    ],
    unicodeRegex: true,
    keywords: KEYWORDS2,
    illegal: /(<\/|\?)|=>/,
    contains: [
      PROMPT,
      NUMBER,
      {
        // very common convention
        scope: "variable.language",
        match: /\bself\b/
      },
      {
        // eat "if" prior to string so that it won't accidentally be
        // labeled as an f-string
        beginKeywords: "if",
        relevance: 0
      },
      { match: /\bor\b/, scope: "keyword" },
      STRING,
      COMMENT_TYPE,
      hljs.HASH_COMMENT_MODE,
      {
        match: [
          /\bdef/,
          /\s+/,
          IDENT_RE2
        ],
        scope: {
          1: "keyword",
          3: "title.function"
        },
        contains: [PARAMS]
      },
      {
        variants: [
          {
            match: [
              /\bclass/,
              /\s+/,
              IDENT_RE2,
              /\s*/,
              /\(\s*/,
              IDENT_RE2,
              /\s*\)/
            ]
          },
          {
            match: [
              /\bclass/,
              /\s+/,
              IDENT_RE2
            ]
          }
        ],
        scope: {
          1: "keyword",
          3: "title.class",
          6: "title.class.inherited"
        }
      },
      {
        className: "meta",
        begin: /^[\t ]*@/,
        end: /(?=#)|$/,
        contains: [
          NUMBER,
          PARAMS,
          STRING
        ]
      }
    ]
  };
}
const IDENT_RE = "[A-Za-z$_][0-9A-Za-z$_]*";
const KEYWORDS = [
  "as",
  // for exports
  "in",
  "of",
  "if",
  "for",
  "while",
  "finally",
  "var",
  "new",
  "function",
  "do",
  "return",
  "void",
  "else",
  "break",
  "catch",
  "instanceof",
  "with",
  "throw",
  "case",
  "default",
  "try",
  "switch",
  "continue",
  "typeof",
  "delete",
  "let",
  "yield",
  "const",
  "class",
  // JS handles these with a special rule
  // "get",
  // "set",
  "debugger",
  "async",
  "await",
  "static",
  "import",
  "from",
  "export",
  "extends",
  // It's reached stage 3, which is "recommended for implementation":
  "using"
];
const LITERALS = [
  "true",
  "false",
  "null",
  "undefined",
  "NaN",
  "Infinity"
];
const TYPES = [
  // Fundamental objects
  "Object",
  "Function",
  "Boolean",
  "Symbol",
  // numbers and dates
  "Math",
  "Date",
  "Number",
  "BigInt",
  // text
  "String",
  "RegExp",
  // Indexed collections
  "Array",
  "Float32Array",
  "Float64Array",
  "Int8Array",
  "Uint8Array",
  "Uint8ClampedArray",
  "Int16Array",
  "Int32Array",
  "Uint16Array",
  "Uint32Array",
  "BigInt64Array",
  "BigUint64Array",
  // Keyed collections
  "Set",
  "Map",
  "WeakSet",
  "WeakMap",
  // Structured data
  "ArrayBuffer",
  "SharedArrayBuffer",
  "Atomics",
  "DataView",
  "JSON",
  // Control abstraction objects
  "Promise",
  "Generator",
  "GeneratorFunction",
  "AsyncFunction",
  // Reflection
  "Reflect",
  "Proxy",
  // Internationalization
  "Intl",
  // WebAssembly
  "WebAssembly"
];
const ERROR_TYPES = [
  "Error",
  "EvalError",
  "InternalError",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "TypeError",
  "URIError"
];
const BUILT_IN_GLOBALS = [
  "setInterval",
  "setTimeout",
  "clearInterval",
  "clearTimeout",
  "require",
  "exports",
  "eval",
  "isFinite",
  "isNaN",
  "parseFloat",
  "parseInt",
  "decodeURI",
  "decodeURIComponent",
  "encodeURI",
  "encodeURIComponent",
  "escape",
  "unescape"
];
const BUILT_IN_VARIABLES = [
  "arguments",
  "this",
  "super",
  "console",
  "window",
  "document",
  "localStorage",
  "sessionStorage",
  "module",
  "global"
  // Node.js
];
const BUILT_INS = [].concat(
  BUILT_IN_GLOBALS,
  TYPES,
  ERROR_TYPES
);
function javascript(hljs) {
  const regex = hljs.regex;
  const hasClosingTag = (match, { after }) => {
    const tag = "</" + match[0].slice(1);
    const pos = match.input.indexOf(tag, after);
    return pos !== -1;
  };
  const IDENT_RE$12 = IDENT_RE;
  const FRAGMENT = {
    begin: "<>",
    end: "</>"
  };
  const XML_SELF_CLOSING = /<[A-Za-z0-9\\._:-]+\s*\/>/;
  const XML_TAG = {
    begin: /<[A-Za-z0-9\\._:-]+/,
    end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
    /**
     * @param {RegExpMatchArray} match
     * @param {CallbackResponse} response
     */
    isTrulyOpeningTag: (match, response) => {
      const afterMatchIndex = match[0].length + match.index;
      const nextChar = match.input[afterMatchIndex];
      if (
        // HTML should not include another raw `<` inside a tag
        // nested type?
        // `<Array<Array<number>>`, etc.
        nextChar === "<" || // the , gives away that this is not HTML
        // `<T, A extends keyof T, V>`
        nextChar === ","
      ) {
        response.ignoreMatch();
        return;
      }
      if (nextChar === ">") {
        if (!hasClosingTag(match, { after: afterMatchIndex })) {
          response.ignoreMatch();
        }
      }
      let m;
      const afterMatch = match.input.substring(afterMatchIndex);
      if (m = afterMatch.match(/^\s*=/)) {
        response.ignoreMatch();
        return;
      }
      if (m = afterMatch.match(/^\s+extends\s+/)) {
        if (m.index === 0) {
          response.ignoreMatch();
          return;
        }
      }
    }
  };
  const KEYWORDS$12 = {
    $pattern: IDENT_RE,
    keyword: KEYWORDS,
    literal: LITERALS,
    built_in: BUILT_INS,
    "variable.language": BUILT_IN_VARIABLES
  };
  const decimalDigits = "[0-9](_?[0-9])*";
  const frac = `\\.(${decimalDigits})`;
  const decimalInteger = `0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*`;
  const NUMBER = {
    className: "number",
    variants: [
      // DecimalLiteral
      { begin: `(\\b(${decimalInteger})((${frac})|\\.)?|(${frac}))[eE][+-]?(${decimalDigits})\\b` },
      { begin: `\\b(${decimalInteger})\\b((${frac})\\b|\\.)?|(${frac})\\b` },
      // DecimalBigIntegerLiteral
      { begin: `\\b(0|[1-9](_?[0-9])*)n\\b` },
      // NonDecimalIntegerLiteral
      { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
      { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
      { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
      // LegacyOctalIntegerLiteral (does not include underscore separators)
      // https://tc39.es/ecma262/#sec-additional-syntax-numeric-literals
      { begin: "\\b0[0-7]+n?\\b" }
    ],
    relevance: 0
  };
  const SUBST = {
    className: "subst",
    begin: "\\$\\{",
    end: "\\}",
    keywords: KEYWORDS$12,
    contains: []
    // defined later
  };
  const HTML_TEMPLATE = {
    begin: ".?html`",
    end: "",
    starts: {
      end: "`",
      returnEnd: false,
      contains: [
        hljs.BACKSLASH_ESCAPE,
        SUBST
      ],
      subLanguage: "xml"
    }
  };
  const CSS_TEMPLATE = {
    begin: ".?css`",
    end: "",
    starts: {
      end: "`",
      returnEnd: false,
      contains: [
        hljs.BACKSLASH_ESCAPE,
        SUBST
      ],
      subLanguage: "css"
    }
  };
  const GRAPHQL_TEMPLATE = {
    begin: ".?gql`",
    end: "",
    starts: {
      end: "`",
      returnEnd: false,
      contains: [
        hljs.BACKSLASH_ESCAPE,
        SUBST
      ],
      subLanguage: "graphql"
    }
  };
  const TEMPLATE_STRING = {
    className: "string",
    begin: "`",
    end: "`",
    contains: [
      hljs.BACKSLASH_ESCAPE,
      SUBST
    ]
  };
  const JSDOC_COMMENT = hljs.COMMENT(
    /\/\*\*(?!\/)/,
    "\\*/",
    {
      relevance: 0,
      contains: [
        {
          begin: "(?=@[A-Za-z]+)",
          relevance: 0,
          contains: [
            {
              className: "doctag",
              begin: "@[A-Za-z]+"
            },
            {
              className: "type",
              begin: "\\{",
              end: "\\}",
              excludeEnd: true,
              excludeBegin: true,
              relevance: 0
            },
            {
              className: "variable",
              begin: IDENT_RE$12 + "(?=\\s*(-)|$)",
              endsParent: true,
              relevance: 0
            },
            // eat spaces (not newlines) so we can find
            // types or variables
            {
              begin: /(?=[^\n])\s/,
              relevance: 0
            }
          ]
        }
      ]
    }
  );
  const COMMENT = {
    className: "comment",
    variants: [
      JSDOC_COMMENT,
      hljs.C_BLOCK_COMMENT_MODE,
      hljs.C_LINE_COMMENT_MODE
    ]
  };
  const SUBST_INTERNALS = [
    hljs.APOS_STRING_MODE,
    hljs.QUOTE_STRING_MODE,
    HTML_TEMPLATE,
    CSS_TEMPLATE,
    GRAPHQL_TEMPLATE,
    TEMPLATE_STRING,
    // Skip numbers when they are part of a variable name
    { match: /\$\d+/ },
    NUMBER
    // This is intentional:
    // See https://github.com/highlightjs/highlight.js/issues/3288
    // hljs.REGEXP_MODE
  ];
  SUBST.contains = SUBST_INTERNALS.concat({
    // we need to pair up {} inside our subst to prevent
    // it from ending too early by matching another }
    begin: /\{/,
    end: /\}/,
    keywords: KEYWORDS$12,
    contains: [
      "self"
    ].concat(SUBST_INTERNALS)
  });
  const SUBST_AND_COMMENTS = [].concat(COMMENT, SUBST.contains);
  const PARAMS_CONTAINS = SUBST_AND_COMMENTS.concat([
    // eat recursive parens in sub expressions
    {
      begin: /(\s*)\(/,
      end: /\)/,
      keywords: KEYWORDS$12,
      contains: ["self"].concat(SUBST_AND_COMMENTS)
    }
  ]);
  const PARAMS = {
    className: "params",
    // convert this to negative lookbehind in v12
    begin: /(\s*)\(/,
    // to match the parms with
    end: /\)/,
    excludeBegin: true,
    excludeEnd: true,
    keywords: KEYWORDS$12,
    contains: PARAMS_CONTAINS
  };
  const CLASS_OR_EXTENDS = {
    variants: [
      // class Car extends vehicle
      {
        match: [
          /class/,
          /\s+/,
          IDENT_RE$12,
          /\s+/,
          /extends/,
          /\s+/,
          regex.concat(IDENT_RE$12, "(", regex.concat(/\./, IDENT_RE$12), ")*")
        ],
        scope: {
          1: "keyword",
          3: "title.class",
          5: "keyword",
          7: "title.class.inherited"
        }
      },
      // class Car
      {
        match: [
          /class/,
          /\s+/,
          IDENT_RE$12
        ],
        scope: {
          1: "keyword",
          3: "title.class"
        }
      }
    ]
  };
  const CLASS_REFERENCE = {
    relevance: 0,
    match: regex.either(
      // Hard coded exceptions
      /\bJSON/,
      // Float32Array, OutT
      /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
      // CSSFactory, CSSFactoryT
      /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
      // FPs, FPsT
      /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/
      // P
      // single letters are not highlighted
      // BLAH
      // this will be flagged as a UPPER_CASE_CONSTANT instead
    ),
    className: "title.class",
    keywords: {
      _: [
        // se we still get relevance credit for JS library classes
        ...TYPES,
        ...ERROR_TYPES
      ]
    }
  };
  const USE_STRICT = {
    label: "use_strict",
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use (strict|asm)['"]/
  };
  const FUNCTION_DEFINITION = {
    variants: [
      {
        match: [
          /function/,
          /\s+/,
          IDENT_RE$12,
          /(?=\s*\()/
        ]
      },
      // anonymous function
      {
        match: [
          /function/,
          /\s*(?=\()/
        ]
      }
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    label: "func.def",
    contains: [PARAMS],
    illegal: /%/
  };
  const UPPER_CASE_CONSTANT = {
    relevance: 0,
    match: /\b[A-Z][A-Z_0-9]+\b/,
    className: "variable.constant"
  };
  function noneOf(list) {
    return regex.concat("(?!", list.join("|"), ")");
  }
  const FUNCTION_CALL = {
    match: regex.concat(
      /\b/,
      noneOf([
        ...BUILT_IN_GLOBALS,
        "super",
        "import"
      ].map((x) => `${x}\\s*\\(`)),
      IDENT_RE$12,
      regex.lookahead(/\s*\(/)
    ),
    className: "title.function",
    relevance: 0
  };
  const PROPERTY_ACCESS = {
    begin: regex.concat(/\./, regex.lookahead(
      regex.concat(IDENT_RE$12, /(?![0-9A-Za-z$_(])/)
    )),
    end: IDENT_RE$12,
    excludeBegin: true,
    keywords: "prototype",
    className: "property",
    relevance: 0
  };
  const GETTER_OR_SETTER = {
    match: [
      /get|set/,
      /\s+/,
      IDENT_RE$12,
      /(?=\()/
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      {
        // eat to avoid empty params
        begin: /\(\)/
      },
      PARAMS
    ]
  };
  const FUNC_LEAD_IN_RE = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + hljs.UNDERSCORE_IDENT_RE + ")\\s*=>";
  const FUNCTION_VARIABLE = {
    match: [
      /const|var|let/,
      /\s+/,
      IDENT_RE$12,
      /\s*/,
      /=\s*/,
      /(async\s*)?/,
      // async is optional
      regex.lookahead(FUNC_LEAD_IN_RE)
    ],
    keywords: "async",
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      PARAMS
    ]
  };
  return {
    name: "JavaScript",
    aliases: ["js", "jsx", "mjs", "cjs"],
    keywords: KEYWORDS$12,
    // this will be extended by TypeScript
    exports: { PARAMS_CONTAINS, CLASS_REFERENCE },
    illegal: /#(?![$_A-z])/,
    contains: [
      hljs.SHEBANG({
        label: "shebang",
        binary: "node",
        relevance: 5
      }),
      USE_STRICT,
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE,
      HTML_TEMPLATE,
      CSS_TEMPLATE,
      GRAPHQL_TEMPLATE,
      TEMPLATE_STRING,
      COMMENT,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      NUMBER,
      CLASS_REFERENCE,
      {
        scope: "attr",
        match: IDENT_RE$12 + regex.lookahead(":"),
        relevance: 0
      },
      FUNCTION_VARIABLE,
      {
        // "value" container
        begin: "(" + hljs.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
        keywords: "return throw case",
        relevance: 0,
        contains: [
          COMMENT,
          hljs.REGEXP_MODE,
          {
            className: "function",
            // we have to count the parens to make sure we actually have the
            // correct bounding ( ) before the =>.  There could be any number of
            // sub-expressions inside also surrounded by parens.
            begin: FUNC_LEAD_IN_RE,
            returnBegin: true,
            end: "\\s*=>",
            contains: [
              {
                className: "params",
                variants: [
                  {
                    begin: hljs.UNDERSCORE_IDENT_RE,
                    relevance: 0
                  },
                  {
                    className: null,
                    begin: /\(\s*\)/,
                    skip: true
                  },
                  {
                    begin: /(\s*)\(/,
                    end: /\)/,
                    excludeBegin: true,
                    excludeEnd: true,
                    keywords: KEYWORDS$12,
                    contains: PARAMS_CONTAINS
                  }
                ]
              }
            ]
          },
          {
            // could be a comma delimited list of params to a function call
            begin: /,/,
            relevance: 0
          },
          {
            match: /\s+/,
            relevance: 0
          },
          {
            // JSX
            variants: [
              { begin: FRAGMENT.begin, end: FRAGMENT.end },
              { match: XML_SELF_CLOSING },
              {
                begin: XML_TAG.begin,
                // we carefully check the opening tag to see if it truly
                // is a tag and not a false positive
                "on:begin": XML_TAG.isTrulyOpeningTag,
                end: XML_TAG.end
              }
            ],
            subLanguage: "xml",
            contains: [
              {
                begin: XML_TAG.begin,
                end: XML_TAG.end,
                skip: true,
                contains: ["self"]
              }
            ]
          }
        ]
      },
      FUNCTION_DEFINITION,
      {
        // prevent this from getting swallowed up by function
        // since they appear "function like"
        beginKeywords: "while if switch catch for"
      },
      {
        // we have to count the parens to make sure we actually have the correct
        // bounding ( ).  There could be any number of sub-expressions inside
        // also surrounded by parens.
        begin: "\\b(?!function)" + hljs.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
        // end parens
        returnBegin: true,
        label: "func.def",
        contains: [
          PARAMS,
          hljs.inherit(hljs.TITLE_MODE, { begin: IDENT_RE$12, className: "title.function" })
        ]
      },
      // catch ... so it won't trigger the property rule below
      {
        match: /\.\.\./,
        relevance: 0
      },
      PROPERTY_ACCESS,
      // hack: prevents detection of keywords in some circumstances
      // .keyword()
      // $keyword = x
      {
        match: "\\$" + IDENT_RE$12,
        relevance: 0
      },
      {
        match: [/\bconstructor(?=\s*\()/],
        className: { 1: "title.function" },
        contains: [PARAMS]
      },
      FUNCTION_CALL,
      UPPER_CASE_CONSTANT,
      CLASS_OR_EXTENDS,
      GETTER_OR_SETTER,
      {
        match: /\$[(.]/
        // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      }
    ]
  };
}
function typescript(hljs) {
  const regex = hljs.regex;
  const tsLanguage = javascript(hljs);
  const IDENT_RE$12 = IDENT_RE;
  const TYPES2 = [
    "any",
    "void",
    "number",
    "boolean",
    "string",
    "object",
    "never",
    "symbol",
    "bigint",
    "unknown"
  ];
  const NAMESPACE = {
    begin: [
      /namespace/,
      /\s+/,
      hljs.IDENT_RE
    ],
    beginScope: {
      1: "keyword",
      3: "title.class"
    }
  };
  const INTERFACE = {
    beginKeywords: "interface",
    end: /\{/,
    excludeEnd: true,
    keywords: {
      keyword: "interface extends",
      built_in: TYPES2
    },
    contains: [tsLanguage.exports.CLASS_REFERENCE]
  };
  const USE_STRICT = {
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use strict['"]/
  };
  const TS_SPECIFIC_KEYWORDS = [
    "type",
    // "namespace",
    "interface",
    "public",
    "private",
    "protected",
    "implements",
    "declare",
    "abstract",
    "readonly",
    "enum",
    "override",
    "satisfies"
  ];
  const KEYWORDS$12 = {
    $pattern: IDENT_RE,
    keyword: KEYWORDS.concat(TS_SPECIFIC_KEYWORDS),
    literal: LITERALS,
    built_in: BUILT_INS.concat(TYPES2),
    "variable.language": BUILT_IN_VARIABLES
  };
  const DECORATOR = {
    className: "meta",
    begin: "@" + IDENT_RE$12
  };
  const swapMode = (mode, label, replacement) => {
    const indx = mode.contains.findIndex((m) => m.label === label);
    if (indx === -1) {
      throw new Error("can not find mode to replace");
    }
    mode.contains.splice(indx, 1, replacement);
  };
  Object.assign(tsLanguage.keywords, KEYWORDS$12);
  tsLanguage.exports.PARAMS_CONTAINS.push(DECORATOR);
  const ATTRIBUTE_HIGHLIGHT = tsLanguage.contains.find((c) => c.scope === "attr");
  const OPTIONAL_KEY_OR_ARGUMENT = Object.assign(
    {},
    ATTRIBUTE_HIGHLIGHT,
    { match: regex.concat(IDENT_RE$12, regex.lookahead(/\s*\?:/)) }
  );
  tsLanguage.exports.PARAMS_CONTAINS.push([
    tsLanguage.exports.CLASS_REFERENCE,
    // class reference for highlighting the params types
    ATTRIBUTE_HIGHLIGHT,
    // highlight the params key
    OPTIONAL_KEY_OR_ARGUMENT
    // Added for optional property assignment highlighting
  ]);
  tsLanguage.contains = tsLanguage.contains.concat([
    DECORATOR,
    NAMESPACE,
    INTERFACE,
    OPTIONAL_KEY_OR_ARGUMENT
    // Added for optional property assignment highlighting
  ]);
  swapMode(tsLanguage, "shebang", hljs.SHEBANG());
  swapMode(tsLanguage, "use_strict", USE_STRICT);
  const functionDeclaration = tsLanguage.contains.find((m) => m.label === "func.def");
  functionDeclaration.relevance = 0;
  Object.assign(tsLanguage, {
    name: "TypeScript",
    aliases: [
      "ts",
      "tsx",
      "mts",
      "cts"
    ]
  });
  return tsLanguage;
}
function xml(hljs) {
  const regex = hljs.regex;
  const TAG_NAME_RE = regex.concat(/[\p{L}_]/u, regex.optional(/[\p{L}0-9_.-]*:/u), /[\p{L}0-9_.-]*/u);
  const XML_IDENT_RE = /[\p{L}0-9._:-]+/u;
  const XML_ENTITIES = {
    className: "symbol",
    begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/
  };
  const XML_META_KEYWORDS = {
    begin: /\s/,
    contains: [
      {
        className: "keyword",
        begin: /#?[a-z_][a-z1-9_-]+/,
        illegal: /\n/
      }
    ]
  };
  const XML_META_PAR_KEYWORDS = hljs.inherit(XML_META_KEYWORDS, {
    begin: /\(/,
    end: /\)/
  });
  const APOS_META_STRING_MODE = hljs.inherit(hljs.APOS_STRING_MODE, { className: "string" });
  const QUOTE_META_STRING_MODE = hljs.inherit(hljs.QUOTE_STRING_MODE, { className: "string" });
  const TAG_INTERNALS = {
    endsWithParent: true,
    illegal: /</,
    relevance: 0,
    contains: [
      {
        className: "attr",
        begin: XML_IDENT_RE,
        relevance: 0
      },
      {
        begin: /=\s*/,
        relevance: 0,
        contains: [
          {
            className: "string",
            endsParent: true,
            variants: [
              {
                begin: /"/,
                end: /"/,
                contains: [XML_ENTITIES]
              },
              {
                begin: /'/,
                end: /'/,
                contains: [XML_ENTITIES]
              },
              { begin: /[^\s"'=<>`]+/ }
            ]
          }
        ]
      }
    ]
  };
  return {
    name: "HTML, XML",
    aliases: [
      "html",
      "xhtml",
      "rss",
      "atom",
      "xjb",
      "xsd",
      "xsl",
      "plist",
      "wsf",
      "svg"
    ],
    case_insensitive: true,
    unicodeRegex: true,
    contains: [
      {
        className: "meta",
        begin: /<![a-z]/,
        end: />/,
        relevance: 10,
        contains: [
          XML_META_KEYWORDS,
          QUOTE_META_STRING_MODE,
          APOS_META_STRING_MODE,
          XML_META_PAR_KEYWORDS,
          {
            begin: /\[/,
            end: /\]/,
            contains: [
              {
                className: "meta",
                begin: /<![a-z]/,
                end: />/,
                contains: [
                  XML_META_KEYWORDS,
                  XML_META_PAR_KEYWORDS,
                  QUOTE_META_STRING_MODE,
                  APOS_META_STRING_MODE
                ]
              }
            ]
          }
        ]
      },
      hljs.COMMENT(
        /<!--/,
        /-->/,
        { relevance: 10 }
      ),
      {
        begin: /<!\[CDATA\[/,
        end: /\]\]>/,
        relevance: 10
      },
      XML_ENTITIES,
      // xml processing instructions
      {
        className: "meta",
        end: /\?>/,
        variants: [
          {
            begin: /<\?xml/,
            relevance: 10,
            contains: [
              QUOTE_META_STRING_MODE
            ]
          },
          {
            begin: /<\?[a-z][a-z0-9]+/
          }
        ]
      },
      {
        className: "tag",
        /*
        The lookahead pattern (?=...) ensures that 'begin' only matches
        '<style' as a single word, followed by a whitespace or an
        ending bracket.
        */
        begin: /<style(?=\s|>)/,
        end: />/,
        keywords: { name: "style" },
        contains: [TAG_INTERNALS],
        starts: {
          end: /<\/style>/,
          returnEnd: true,
          subLanguage: [
            "css",
            "xml"
          ]
        }
      },
      {
        className: "tag",
        // See the comment in the <style tag about the lookahead pattern
        begin: /<script(?=\s|>)/,
        end: />/,
        keywords: { name: "script" },
        contains: [TAG_INTERNALS],
        starts: {
          end: /<\/script>/,
          returnEnd: true,
          subLanguage: [
            "javascript",
            "handlebars",
            "xml"
          ]
        }
      },
      // we need this for now for jSX
      {
        className: "tag",
        begin: /<>|<\/>/
      },
      // open tag
      {
        className: "tag",
        begin: regex.concat(
          /</,
          regex.lookahead(regex.concat(
            TAG_NAME_RE,
            // <tag/>
            // <tag>
            // <tag ...
            regex.either(/\/>/, />/, /\s/)
          ))
        ),
        end: /\/?>/,
        contains: [
          {
            className: "name",
            begin: TAG_NAME_RE,
            relevance: 0,
            starts: TAG_INTERNALS
          }
        ]
      },
      // close tag
      {
        className: "tag",
        begin: regex.concat(
          /<\//,
          regex.lookahead(regex.concat(
            TAG_NAME_RE,
            />/
          ))
        ),
        contains: [
          {
            className: "name",
            begin: TAG_NAME_RE,
            relevance: 0
          },
          {
            begin: />/,
            relevance: 0,
            endsParent: true
          }
        ]
      }
    ]
  };
}
function useChat() {
  return inject(ChatSymbol$1);
}
function useOptions() {
  const options = inject(ChatOptionsSymbol);
  return {
    options
  };
}
function useI18n() {
  const { options } = useOptions();
  const language = options?.defaultLanguage ?? "en";
  function t(key) {
    const val = options?.i18n?.[language]?.[key];
    if (isRef(val)) {
      return val.value;
    }
    return val ?? key;
  }
  function te(key) {
    return !!options?.i18n?.[language]?.[key];
  }
  return { t, te };
}
const _hoisted_1$c = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function render$7(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$c, _cache[0] || (_cache[0] = [
    createBaseVNode("path", {
      fill: "currentColor",
      d: "M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12z"
    }, null, -1)
  ]));
}
const IconDelete = { name: "mdi-closeThick", render: render$7 };
const _hoisted_1$b = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function render$6(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$b, _cache[0] || (_cache[0] = [
    createBaseVNode("path", {
      fill: "currentColor",
      d: "M13 9h5.5L13 3.5zM6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2m0 18h12v-8l-4 4l-2-2zM8 9a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"
    }, null, -1)
  ]));
}
const IconFileImage = { name: "mdi-fileImage", render: render$6 };
const _hoisted_1$a = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function render$5(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$a, _cache[0] || (_cache[0] = [
    createBaseVNode("path", {
      fill: "currentColor",
      d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zm-1 11h-2v5a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2c.4 0 .7.1 1 .3V11h3zm0-4V3.5L18.5 9z"
    }, null, -1)
  ]));
}
const IconFileMusic = { name: "mdi-fileMusic", render: render$5 };
const _hoisted_1$9 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$9, _cache[0] || (_cache[0] = [
    createBaseVNode("path", {
      fill: "currentColor",
      d: "M13 9h5.5L13 3.5zM6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2m9 16v-2H6v2zm3-4v-2H6v2z"
    }, null, -1)
  ]));
}
const IconFileText = { name: "mdi-fileText", render: render$4 };
const _hoisted_1$8 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$8, _cache[0] || (_cache[0] = [
    createBaseVNode("path", {
      fill: "currentColor",
      d: "M13 9h5.5L13 3.5zM6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2m11 17v-6l-3 2.2V13H7v6h7v-2.2z"
    }, null, -1)
  ]));
}
const IconFileVideo = { name: "mdi-fileVideo", render: render$3 };
const _hoisted_1$7 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$7, _cache[0] || (_cache[0] = [
    createBaseVNode("path", {
      fill: "currentColor",
      d: "M14 3v2h3.59l-9.83 9.83l1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2z"
    }, null, -1)
  ]));
}
const IconPreview = { name: "mdi-openInNew", render: render$2 };
const _hoisted_1$6 = { class: "chat-file-name" };
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "ChatFile",
  props: {
    file: {},
    isRemovable: { type: Boolean },
    isPreviewable: { type: Boolean }
  },
  emits: ["remove"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const iconMapper = {
      document: IconFileText,
      audio: IconFileMusic,
      image: IconFileImage,
      video: IconFileVideo
    };
    const TypeIcon = computed(() => {
      const type = props.file?.type.split("/")[0];
      return iconMapper[type] || IconFileText;
    });
    function onClick() {
      if (props.isPreviewable) {
        window.open(URL.createObjectURL(props.file));
      }
    }
    function onDelete() {
      emit("remove", props.file);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "chat-file",
        onClick
      }, [
        createVNode(unref(TypeIcon)),
        createBaseVNode("p", _hoisted_1$6, toDisplayString(_ctx.file.name), 1),
        _ctx.isRemovable ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: "chat-file-delete",
          onClick: withModifiers(onDelete, ["stop"])
        }, [
          createVNode(unref(IconDelete))
        ])) : _ctx.isPreviewable ? (openBlock(), createBlock(unref(IconPreview), {
          key: 1,
          class: "chat-file-preview"
        })) : createCommentVNode("", true)
      ]);
    };
  }
});
const ChatFile = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-70b9370d"]]);
const _hoisted_1$5 = {
  key: 0,
  class: "chat-message-actions"
};
const _hoisted_2$2 = {
  key: 2,
  class: "chat-message-files"
};
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "Message",
  props: {
    message: {}
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    HighlightJS.registerLanguage("javascript", javascript$1);
    HighlightJS.registerLanguage("typescript", typescript);
    HighlightJS.registerLanguage("python", python);
    HighlightJS.registerLanguage("xml", xml);
    HighlightJS.registerLanguage("bash", bash);
    const { message } = toRefs(props);
    const { options } = useOptions();
    const messageContainer = ref(null);
    const fileSources = ref({});
    const messageText = computed(() => {
      return message.value.text || "&lt;Empty response&gt;";
    });
    const classes = computed(() => {
      return {
        "chat-message-from-user": message.value.sender === "user",
        "chat-message-from-bot": message.value.sender === "bot",
        "chat-message-transparent": message.value.transparent === true
      };
    });
    const linksNewTabPlugin = (vueMarkdownItInstance) => {
      vueMarkdownItInstance.use(markdownLink, {
        attrs: {
          target: "_blank",
          rel: "noopener"
        }
      });
    };
    const scrollToView = () => {
      if (messageContainer.value?.scrollIntoView) {
        messageContainer.value.scrollIntoView({
          block: "start"
        });
      }
    };
    const markdownOptions = {
      highlight(str, lang) {
        if (lang && HighlightJS.getLanguage(lang)) {
          try {
            return HighlightJS.highlight(str, { language: lang }).value;
          } catch {
          }
        }
        return "";
      }
    };
    const messageComponents = { ...options?.messageComponents ?? {} };
    __expose({ scrollToView });
    const readFileAsDataURL = async (file) => await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
    onMounted(async () => {
      if (message.value.files) {
        for (const file of message.value.files) {
          try {
            const dataURL = await readFileAsDataURL(file);
            fileSources.value[file.name] = dataURL;
          } catch (error) {
            console.error("Error reading file:", error);
          }
        }
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "messageContainer",
        ref: messageContainer,
        class: normalizeClass(["chat-message", classes.value])
      }, [
        !!_ctx.$slots.beforeMessage ? (openBlock(), createElementBlock("div", _hoisted_1$5, [
          renderSlot(_ctx.$slots, "beforeMessage", normalizeProps(guardReactiveProps({ message: unref(message) })))
        ])) : createCommentVNode("", true),
        renderSlot(_ctx.$slots, "default", {}, () => [
          unref(message).type === "component" && messageComponents[unref(message).key] ? (openBlock(), createBlock(resolveDynamicComponent(messageComponents[unref(message).key]), normalizeProps(mergeProps({ key: 0 }, unref(message).arguments)), null, 16)) : (openBlock(), createBlock(unref(VueMarkdown), {
            key: 1,
            class: "chat-message-markdown",
            source: messageText.value,
            options: markdownOptions,
            plugins: [linksNewTabPlugin]
          }, null, 8, ["source", "plugins"])),
          (unref(message).files ?? []).length > 0 ? (openBlock(), createElementBlock("div", _hoisted_2$2, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(message).files ?? [], (file) => {
              return openBlock(), createElementBlock("div", {
                key: file.name,
                class: "chat-message-file"
              }, [
                createVNode(ChatFile, {
                  file,
                  "is-removable": false,
                  "is-previewable": true
                }, null, 8, ["file"])
              ]);
            }), 128))
          ])) : createCommentVNode("", true)
        ])
      ], 2);
    };
  }
});
const _hoisted_1$4 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4, _cache[0] || (_cache[0] = [
    createBaseVNode("path", {
      fill: "currentColor",
      d: "M16.5 6v11.5a4 4 0 0 1-4 4a4 4 0 0 1-4-4V5A2.5 2.5 0 0 1 11 2.5A2.5 2.5 0 0 1 13.5 5v10.5a1 1 0 0 1-1 1a1 1 0 0 1-1-1V6H10v9.5a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5V5a4 4 0 0 0-4-4a4 4 0 0 0-4 4v12.5a5.5 5.5 0 0 0 5.5 5.5a5.5 5.5 0 0 0 5.5-5.5V6z"
    }, null, -1)
  ]));
}
const IconPaperclip = { name: "mdi-paperclip", render: render$1 };
const _hoisted_1$3 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3, _cache[0] || (_cache[0] = [
    createBaseVNode("path", {
      fill: "currentColor",
      d: "m2 21l21-9L2 3v7l15 2l-15 2z"
    }, null, -1)
  ]));
}
const IconSend = { name: "mdi-send", render };
const _hoisted_1$2 = { class: "chat-inputs" };
const _hoisted_2$1 = {
  key: 0,
  class: "chat-input-left-panel"
};
const _hoisted_3$1 = ["disabled", "placeholder"];
const _hoisted_4 = { class: "chat-inputs-controls" };
const _hoisted_5 = ["disabled"];
const _hoisted_6 = ["disabled"];
const _hoisted_7 = {
  key: 0,
  class: "chat-files"
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "Input",
  props: {
    placeholder: { default: "inputPlaceholder" }
  },
  emits: ["arrowKeyDown", "escapeKeyDown"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const { t } = useI18n();
    const emit = __emit;
    const { options } = useOptions();
    const chatStore = useChat();
    const { waitingForResponse } = chatStore;
    const files = ref(null);
    const chatTextArea = ref(null);
    const input = ref("");
    const isSubmitting = ref(false);
    const resizeObserver = ref(null);
    const waitingForChatResponse = ref(false);
    const isSubmitDisabled = computed(() => {
      if (waitingForChatResponse.value) return false;
      return input.value === "" || unref(waitingForResponse) || options.disabled?.value === true;
    });
    const isInputDisabled = computed(() => options.disabled?.value === true);
    const isFileUploadDisabled = computed(
      () => isFileUploadAllowed.value && unref(waitingForResponse) && !options.disabled?.value
    );
    const isFileUploadAllowed = computed(() => unref(options.allowFileUploads) === true);
    const allowedFileTypes = computed(() => unref(options.allowedFilesMimeTypes));
    const styleVars = computed(() => {
      const controlsCount = isFileUploadAllowed.value ? 2 : 1;
      return {
        "--controls-count": controlsCount
      };
    });
    const {
      open: openFileDialog,
      reset: resetFileDialog,
      onChange
    } = useFileDialog({
      multiple: true,
      reset: false
    });
    onChange((newFiles) => {
      if (!newFiles) return;
      const newFilesDT = new DataTransfer();
      if (files.value) {
        for (let i = 0; i < files.value.length; i++) {
          newFilesDT.items.add(files.value[i]);
        }
      }
      for (let i = 0; i < newFiles.length; i++) {
        newFilesDT.items.add(newFiles[i]);
      }
      files.value = newFilesDT.files;
    });
    onMounted(() => {
      chatEventBus.on("focusInput", focusChatInput);
      chatEventBus.on("blurInput", blurChatInput);
      chatEventBus.on("setInputValue", setInputValue);
      if (chatTextArea.value) {
        resizeObserver.value = new ResizeObserver((entries) => {
          for (const entry of entries) {
            if (entry.target === chatTextArea.value) {
              adjustTextAreaHeight();
            }
          }
        });
        resizeObserver.value.observe(chatTextArea.value);
      }
    });
    onUnmounted(() => {
      chatEventBus.off("focusInput", focusChatInput);
      chatEventBus.off("blurInput", blurChatInput);
      chatEventBus.off("setInputValue", setInputValue);
      if (resizeObserver.value) {
        resizeObserver.value.disconnect();
        resizeObserver.value = null;
      }
    });
    function blurChatInput() {
      if (chatTextArea.value) {
        chatTextArea.value.blur();
      }
    }
    function focusChatInput() {
      if (chatTextArea.value) {
        chatTextArea.value.focus();
      }
    }
    function setInputValue(value) {
      input.value = value;
      focusChatInput();
    }
    function attachFiles() {
      if (files.value) {
        const filesToAttach = Array.from(files.value);
        resetFileDialog();
        files.value = null;
        return filesToAttach;
      }
      return [];
    }
    function setupWebsocketConnection(executionId) {
      if (options.webhookUrl && chatStore.currentSessionId.value) {
        try {
          const wsUrl = constructChatWebsocketUrl(
            options.webhookUrl,
            executionId,
            chatStore.currentSessionId.value,
            true
          );
          chatStore.ws = new WebSocket(wsUrl);
          chatStore.ws.onmessage = (e) => {
            if (e.data === "n8n|heartbeat") {
              chatStore.ws?.send("n8n|heartbeat-ack");
              return;
            }
            if (e.data === "n8n|continue") {
              waitingForChatResponse.value = false;
              chatStore.waitingForResponse.value = true;
              return;
            }
            const newMessage = {
              id: v4(),
              text: e.data,
              sender: "bot"
            };
            chatStore.messages.value.push(newMessage);
            waitingForChatResponse.value = true;
            chatStore.waitingForResponse.value = false;
          };
          chatStore.ws.onclose = () => {
            chatStore.ws = null;
            waitingForChatResponse.value = false;
            chatStore.waitingForResponse.value = false;
          };
        } catch (error) {
          console.error("Error setting up websocket connection", error);
        }
      }
    }
    async function processFiles2(data) {
      if (!data || data.length === 0) return [];
      const filePromises = data.map(async (file) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve({
            name: file.name,
            type: file.type,
            data: reader.result
          });
          reader.onerror = () => reject(new Error(`Error reading file: ${reader.error?.message ?? "Unknown error"}`));
          reader.readAsDataURL(file);
        });
      });
      return await Promise.all(filePromises);
    }
    async function respondToChatNode(ws, messageText) {
      const sentMessage = {
        id: v4(),
        text: messageText,
        sender: "user",
        files: files.value ? attachFiles() : void 0
      };
      chatStore.messages.value.push(sentMessage);
      ws.send(
        JSON.stringify({
          sessionId: chatStore.currentSessionId.value,
          action: "sendMessage",
          chatInput: messageText,
          files: await processFiles2(sentMessage.files)
        })
      );
      chatStore.waitingForResponse.value = true;
      waitingForChatResponse.value = false;
    }
    async function onSubmit(event) {
      event.preventDefault();
      if (isSubmitDisabled.value) {
        return;
      }
      const messageText = input.value;
      input.value = "";
      isSubmitting.value = true;
      if (chatStore.ws && waitingForChatResponse.value) {
        await respondToChatNode(chatStore.ws, messageText);
        return;
      }
      const response = await chatStore.sendMessage(messageText, attachFiles());
      if (response?.executionId) {
        setupWebsocketConnection(response.executionId);
      }
      isSubmitting.value = false;
    }
    async function onSubmitKeydown(event) {
      if (event.shiftKey || event.isComposing) {
        return;
      }
      await onSubmit(event);
      adjustTextAreaHeight();
    }
    function onFileRemove(file) {
      if (!files.value) return;
      const dt = new DataTransfer();
      for (let i = 0; i < files.value.length; i++) {
        const currentFile = files.value[i];
        if (file.name !== currentFile.name) dt.items.add(currentFile);
      }
      resetFileDialog();
      files.value = dt.files;
    }
    function onKeyDown(event) {
      if (event.key === "ArrowUp" || event.key === "ArrowDown") {
        event.preventDefault();
        emit("arrowKeyDown", {
          key: event.key,
          currentInputValue: input.value
        });
      } else if (event.key === "Escape") {
        event.preventDefault();
        emit("escapeKeyDown", {
          currentInputValue: input.value
        });
      }
    }
    function onOpenFileDialog() {
      if (isFileUploadDisabled.value) return;
      openFileDialog({ accept: unref(allowedFileTypes) });
    }
    function adjustTextAreaHeight() {
      const textarea = chatTextArea.value;
      if (!textarea) return;
      textarea.style.height = "var(--chat--textarea--height)";
      const newHeight = Math.min(textarea.scrollHeight, 480);
      textarea.style.height = `${newHeight}px`;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "chat-input",
        style: normalizeStyle(styleVars.value),
        onKeydown: withModifiers(onKeyDown, ["stop"])
      }, [
        createBaseVNode("div", _hoisted_1$2, [
          _ctx.$slots.leftPanel ? (openBlock(), createElementBlock("div", _hoisted_2$1, [
            renderSlot(_ctx.$slots, "leftPanel", {}, void 0, true)
          ])) : createCommentVNode("", true),
          withDirectives(createBaseVNode("textarea", {
            ref_key: "chatTextArea",
            ref: chatTextArea,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => input.value = $event),
            "data-test-id": "chat-input",
            disabled: isInputDisabled.value,
            placeholder: unref(t)(props.placeholder),
            onKeydown: withKeys(onSubmitKeydown, ["enter"]),
            onInput: adjustTextAreaHeight,
            onMousedown: adjustTextAreaHeight,
            onFocus: adjustTextAreaHeight
          }, null, 40, _hoisted_3$1), [
            [vModelText, input.value]
          ]),
          createBaseVNode("div", _hoisted_4, [
            isFileUploadAllowed.value ? (openBlock(), createElementBlock("button", {
              key: 0,
              disabled: isFileUploadDisabled.value,
              class: "chat-input-file-button",
              "data-test-id": "chat-attach-file-button",
              onClick: onOpenFileDialog
            }, [
              createVNode(unref(IconPaperclip), {
                height: "24",
                width: "24"
              })
            ], 8, _hoisted_5)) : createCommentVNode("", true),
            createBaseVNode("button", {
              disabled: isSubmitDisabled.value,
              class: "chat-input-send-button",
              onClick: onSubmit
            }, [
              createVNode(unref(IconSend), {
                height: "24",
                width: "24"
              })
            ], 8, _hoisted_6)
          ])
        ]),
        files.value?.length && (!isSubmitting.value || waitingForChatResponse.value) ? (openBlock(), createElementBlock("div", _hoisted_7, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(files.value, (file) => {
            return openBlock(), createBlock(ChatFile, {
              key: file.name,
              file,
              "is-removable": true,
              "is-previewable": true,
              onRemove: onFileRemove
            }, null, 8, ["file"]);
          }), 128))
        ])) : createCommentVNode("", true)
      ], 36);
    };
  }
});
const ChatInput = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-71b23fec"]]);
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "MessageTyping",
  props: {
    animation: { default: "bouncing" }
  },
  setup(__props) {
    const props = __props;
    const message = {
      id: "typing",
      text: "",
      sender: "bot"
    };
    const messageContainer = ref();
    const classes = computed(() => {
      return {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        "chat-message-typing": true,
        [`chat-message-typing-animation-${props.animation}`]: true
      };
    });
    onMounted(() => {
      messageContainer.value?.scrollToView();
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(_sfc_main$b), {
        ref_key: "messageContainer",
        ref: messageContainer,
        class: normalizeClass(classes.value),
        message,
        "data-test-id": "chat-message-typing"
      }, {
        default: withCtx(() => _cache[0] || (_cache[0] = [
          createBaseVNode("div", { class: "chat-message-typing-body" }, [
            createBaseVNode("span", { class: "chat-message-typing-circle" }),
            createBaseVNode("span", { class: "chat-message-typing-circle" }),
            createBaseVNode("span", { class: "chat-message-typing-circle" })
          ], -1)
        ])),
        _: 1
      }, 8, ["class"]);
    };
  }
});
const _hoisted_1$1 = {
  key: 0,
  class: "empty-container"
};
const _hoisted_2 = {
  class: "empty",
  "data-test-id": "chat-messages-empty"
};
const _hoisted_3 = {
  key: 1,
  class: "chat-messages-list"
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "MessagesList",
  props: {
    messages: {},
    emptyText: {}
  },
  setup(__props) {
    const chatStore = useChat();
    const messageComponents = ref([]);
    const { initialMessages, waitingForResponse } = chatStore;
    watch(
      () => messageComponents.value.length,
      () => {
        const lastMessageComponent = messageComponents.value[messageComponents.value.length - 1];
        if (lastMessageComponent) {
          lastMessageComponent.scrollToView();
        }
      }
    );
    return (_ctx, _cache) => {
      return _ctx.emptyText && unref(initialMessages).length === 0 && _ctx.messages.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(unref(N8nIcon), {
            icon: "message-circle",
            size: "large",
            class: "emptyIcon"
          }),
          createVNode(unref(N8nText), {
            tag: "p",
            size: "medium",
            color: "text-base"
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.emptyText), 1)
            ]),
            _: 1
          })
        ])
      ])) : (openBlock(), createElementBlock("div", _hoisted_3, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(initialMessages), (initialMessage) => {
          return openBlock(), createBlock(_sfc_main$b, {
            key: initialMessage.id,
            message: initialMessage
          }, null, 8, ["message"]);
        }), 128)),
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.messages, (message) => {
          return openBlock(), createBlock(_sfc_main$b, {
            key: message.id,
            ref_for: true,
            ref_key: "messageComponents",
            ref: messageComponents,
            message
          }, {
            beforeMessage: withCtx(({ message: message2 }) => [
              renderSlot(_ctx.$slots, "beforeMessage", mergeProps({ ref_for: true }, { message: message2 }))
            ]),
            _: 2
          }, 1032, ["message"]);
        }), 128)),
        unref(waitingForResponse) ? (openBlock(), createBlock(_sfc_main$9, { key: 0 })) : createCommentVNode("", true)
      ]));
    };
  }
});
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "MessageOptionTooltip",
  props: {
    placement: {
      type: String,
      default: "top"
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.container)
      }, [
        createVNode(unref(N8nTooltip), { placement: __props.placement }, {
          content: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          default: withCtx(() => [
            createBaseVNode("span", {
              class: normalizeClass(_ctx.$style.icon)
            }, [
              createVNode(unref(N8nIcon), {
                icon: "info",
                size: "xsmall"
              })
            ], 2)
          ]),
          _: 3
        }, 8, ["placement"])
      ], 2);
    };
  }
});
const container$4 = "_container_1v2rk_123";
const icon$2 = "_icon_1v2rk_129";
const style0$6 = {
  container: container$4,
  icon: icon$2
};
const cssModules$6 = {
  "$style": style0$6
};
const MessageOptionTooltip = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__cssModules", cssModules$6]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "MessageOptionAction",
  props: {
    label: {},
    icon: {},
    placement: {}
  },
  setup(__props) {
    const attrs = useAttrs();
    const onClick = () => {
      attrs.onClick?.();
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.container)
      }, [
        createVNode(unref(N8nTooltip), { placement: _ctx.placement }, {
          content: withCtx(() => [
            createTextVNode(toDisplayString(_ctx.label), 1)
          ]),
          default: withCtx(() => [
            createVNode(unref(N8nIcon), {
              class: normalizeClass(_ctx.$style.icon),
              icon: _ctx.icon,
              size: "xsmall",
              onClick
            }, null, 8, ["class", "icon"])
          ]),
          _: 1
        }, 8, ["placement"])
      ], 2);
    };
  }
});
const container$3 = "_container_14jp1_123";
const icon$1 = "_icon_14jp1_129";
const style0$5 = {
  container: container$3,
  icon: icon$1
};
const cssModules$5 = {
  "$style": style0$5
};
const MessageOptionAction = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__cssModules", cssModules$5]]);
const _hoisted_1 = ["onClick"];
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "ChatMessagesPanel",
  props: {
    pastChatMessages: {},
    messages: {},
    sessionId: {},
    showCloseButton: { type: Boolean },
    isOpen: { type: Boolean, default: true },
    isReadOnly: { type: Boolean, default: false },
    isHeaderClickable: { type: Boolean }
  },
  emits: ["displayExecution", "sendMessage", "refreshSession", "close", "clickHeader"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const clipboard = useClipboard();
    const locale = useI18n$1();
    const toast = useToast();
    const previousMessageIndex = ref(-1);
    const currentInputBuffer = ref("");
    const sessionIdText = computed(
      () => locale.baseText("chat.window.session.id", {
        interpolate: { id: `${props.sessionId.slice(0, 5)}...` }
      })
    );
    const inputPlaceholder = computed(() => {
      if (props.messages.length > 0) {
        return locale.baseText("chat.window.chat.placeholder");
      }
      return locale.baseText("chat.window.chat.placeholderPristine");
    });
    function isTextMessage(message) {
      return message.type === "text" || !message.type;
    }
    function repostMessage(message) {
      void sendMessage(message.text);
    }
    function reuseMessage(message) {
      chatEventBus.emit("setInputValue", message.text);
    }
    function sendMessage(message) {
      previousMessageIndex.value = -1;
      currentInputBuffer.value = "";
      emit("sendMessage", message);
    }
    function onRefreshSession() {
      emit("refreshSession");
    }
    function onArrowKeyDown({ currentInputValue, key }) {
      const pastMessages = props.pastChatMessages;
      if (pastMessages.length === 0) return;
      if (currentInputValue.length === 0 && previousMessageIndex.value !== -1) {
        previousMessageIndex.value = -1;
        currentInputBuffer.value = "";
      }
      if (previousMessageIndex.value === -1 && currentInputValue.length > 0) {
        currentInputBuffer.value = currentInputValue;
      }
      if (key === "ArrowUp") {
        chatEventBus.emit("blurInput");
        if (previousMessageIndex.value === -1) {
          previousMessageIndex.value = pastMessages.length - 1;
        } else if (previousMessageIndex.value > 0) {
          previousMessageIndex.value--;
        }
        const selectedMessage = pastMessages[previousMessageIndex.value];
        chatEventBus.emit("setInputValue", selectedMessage);
        chatEventBus.emit("focusInput");
      } else if (key === "ArrowDown") {
        if (previousMessageIndex.value === -1) return;
        chatEventBus.emit("blurInput");
        if (previousMessageIndex.value < pastMessages.length - 1) {
          previousMessageIndex.value++;
          const selectedMessage = pastMessages[previousMessageIndex.value];
          chatEventBus.emit("setInputValue", selectedMessage);
        } else {
          previousMessageIndex.value = -1;
          chatEventBus.emit("setInputValue", currentInputBuffer.value);
          currentInputBuffer.value = "";
        }
        chatEventBus.emit("focusInput");
      }
    }
    function onEscapeKey() {
      if (previousMessageIndex.value === -1) return;
      previousMessageIndex.value = -1;
      chatEventBus.emit("setInputValue", currentInputBuffer.value);
      currentInputBuffer.value = "";
    }
    async function copySessionId() {
      await clipboard.copy(props.sessionId);
      toast.showMessage({
        title: locale.baseText("generic.copiedToClipboard"),
        message: "",
        type: "success"
      });
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([_ctx.$style.chat, "ignore-key-press-canvas"]),
        "data-test-id": "workflow-lm-chat-dialog",
        tabindex: "0"
      }, [
        createVNode(LogsPanelHeader, {
          "data-test-id": "chat-header",
          title: unref(locale).baseText("chat.window.title"),
          "is-clickable": _ctx.isHeaderClickable,
          onClick: _cache[0] || (_cache[0] = ($event) => emit("clickHeader"))
        }, {
          actions: withCtx(() => [
            unref(clipboard).isSupported && !_ctx.isReadOnly ? (openBlock(), createBlock(unref(N8nTooltip), { key: 0 }, {
              content: withCtx(() => [
                createTextVNode(toDisplayString(_ctx.sessionId) + " ", 1),
                _cache[3] || (_cache[3] = createBaseVNode("br", null, null, -1)),
                createTextVNode(" " + toDisplayString(unref(locale).baseText("chat.window.session.id.copy")), 1)
              ]),
              default: withCtx(() => [
                createVNode(unref(N8nButton), {
                  "data-test-id": "chat-session-id",
                  type: "secondary",
                  size: "mini",
                  class: normalizeClass(_ctx.$style.newHeaderButton),
                  onClick: withModifiers(copySessionId, ["stop"])
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(sessionIdText.value), 1)
                  ]),
                  _: 1
                }, 8, ["class"])
              ]),
              _: 1
            })) : createCommentVNode("", true),
            _ctx.messages.length > 0 && !_ctx.isReadOnly ? (openBlock(), createBlock(unref(N8nTooltip), {
              key: 1,
              content: unref(locale).baseText("chat.window.session.resetSession")
            }, {
              default: withCtx(() => [
                createVNode(unref(_sfc_main$h), {
                  class: normalizeClass(_ctx.$style.newHeaderButton),
                  "data-test-id": "refresh-session-button",
                  outline: "",
                  type: "secondary",
                  size: "small",
                  "icon-size": "medium",
                  icon: "undo-2",
                  title: unref(locale).baseText("chat.window.session.reset"),
                  onClick: withModifiers(onRefreshSession, ["stop"])
                }, null, 8, ["class", "title"])
              ]),
              _: 1
            }, 8, ["content"])) : createCommentVNode("", true)
          ]),
          _: 1
        }, 8, ["title", "is-clickable"]),
        _ctx.isOpen ? (openBlock(), createElementBlock("main", {
          key: 0,
          class: normalizeClass(_ctx.$style.chatBody),
          "data-test-id": "canvas-chat-body"
        }, [
          createVNode(_sfc_main$8, {
            messages: _ctx.messages,
            class: normalizeClass(_ctx.$style.messages),
            "empty-text": unref(locale).baseText("chat.window.chat.emptyChatMessage.v2")
          }, {
            beforeMessage: withCtx(({ message }) => [
              !_ctx.isReadOnly && message.sender === "bot" && !message.id.includes("preload") ? (openBlock(), createBlock(MessageOptionTooltip, {
                key: 0,
                placement: "right",
                "data-test-id": "execution-id-tooltip"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(locale).baseText("chat.window.chat.chatMessageOptions.executionId")) + ": ", 1),
                  createBaseVNode("a", {
                    href: "#",
                    onClick: ($event) => emit("displayExecution", message.id)
                  }, toDisplayString(message.id), 9, _hoisted_1)
                ]),
                _: 2
              }, 1024)) : createCommentVNode("", true),
              !_ctx.isReadOnly && isTextMessage(message) && message.sender === "user" ? (openBlock(), createBlock(MessageOptionAction, {
                key: 1,
                "data-test-id": "repost-message-button",
                icon: "redo-2",
                label: unref(locale).baseText("chat.window.chat.chatMessageOptions.repostMessage"),
                placement: "left",
                onClickOnce: ($event) => repostMessage(message)
              }, null, 8, ["label", "onClickOnce"])) : createCommentVNode("", true),
              !_ctx.isReadOnly && isTextMessage(message) && message.sender === "user" ? (openBlock(), createBlock(MessageOptionAction, {
                key: 2,
                "data-test-id": "reuse-message-button",
                icon: "files",
                label: unref(locale).baseText("chat.window.chat.chatMessageOptions.reuseMessage"),
                placement: "left",
                onClick: ($event) => reuseMessage(message)
              }, null, 8, ["label", "onClick"])) : createCommentVNode("", true)
            ]),
            _: 1
          }, 8, ["messages", "class", "empty-text"])
        ], 2)) : createCommentVNode("", true),
        _ctx.isOpen ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass(_ctx.$style.messagesInput)
        }, [
          createVNode(ChatInput, {
            "data-test-id": "lm-chat-inputs",
            placeholder: inputPlaceholder.value,
            onArrowKeyDown,
            onEscapeKeyDown: onEscapeKey
          }, createSlots({ _: 2 }, [
            _ctx.pastChatMessages.length > 0 ? {
              name: "leftPanel",
              fn: withCtx(() => [
                createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.messagesHistory)
                }, [
                  createVNode(unref(N8nButton), {
                    title: "Navigate to previous message",
                    icon: "chevron-up",
                    type: "tertiary",
                    text: "",
                    size: "mini",
                    disabled: previousMessageIndex.value === 0,
                    onClick: _cache[1] || (_cache[1] = ($event) => onArrowKeyDown({ currentInputValue: "", key: "ArrowUp" }))
                  }, null, 8, ["disabled"]),
                  createVNode(unref(N8nButton), {
                    title: "Navigate to next message",
                    icon: "chevron-down",
                    type: "tertiary",
                    text: "",
                    size: "mini",
                    disabled: previousMessageIndex.value === -1,
                    onClick: _cache[2] || (_cache[2] = ($event) => onArrowKeyDown({ currentInputValue: "", key: "ArrowDown" }))
                  }, null, 8, ["disabled"])
                ], 2)
              ]),
              key: "0"
            } : void 0
          ]), 1032, ["placeholder"])
        ], 2)) : createCommentVNode("", true)
      ], 2);
    };
  }
});
const chat$1 = "_chat_uw011_123";
const chatHeader = "_chatHeader_uw011_151";
const chatTitle = "_chatTitle_uw011_164";
const session = "_session_uw011_168";
const sessionId = "_sessionId_uw011_176";
const copyable = "_copyable_uw011_182";
const headerButton = "_headerButton_uw011_186";
const newHeaderButton = "_newHeaderButton_uw011_191";
const chatBody = "_chatBody_uw011_196";
const messages = "_messages_uw011_205";
const messagesInput = "_messagesInput_uw011_216";
const messagesHistory = "_messagesHistory_uw011_250";
const style0$4 = {
  chat: chat$1,
  chatHeader,
  chatTitle,
  session,
  sessionId,
  copyable,
  headerButton,
  newHeaderButton,
  chatBody,
  messages,
  messagesInput,
  messagesHistory
};
const cssModules$4 = {
  "$style": style0$4
};
const ChatMessagesPanel = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__cssModules", cssModules$4]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "LogsViewRunData",
  props: {
    title: {},
    paneType: {},
    logEntry: {},
    collapsingTableColumnName: {},
    searchShortcut: {}
  },
  emits: ["collapsingTableColumnChanged"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const locale = useI18n$1();
    const ndvStore = useNDVStore();
    const popOutWindow = inject(PopOutWindowKey, ref());
    const displayMode = ref(__props.paneType === "input" ? "schema" : "table");
    const isMultipleInput = computed(
      () => __props.paneType === "input" && (__props.logEntry.runData?.source.length ?? 0) > 1
    );
    const runDataProps = computed(() => {
      if (isSubNodeLog(__props.logEntry) || __props.paneType === "output") {
        return { node: __props.logEntry.node, runIndex: __props.logEntry.runIndex };
      }
      const source = __props.logEntry.runData?.source[0];
      const node = source && __props.logEntry.workflow.getNode(source.previousNode);
      if (!source || !node) {
        return void 0;
      }
      return {
        node: {
          ...node,
          disabled: false
          // For RunData component to render data from disabled nodes as well
        },
        runIndex: source.previousNodeRun ?? 0,
        overrideOutputs: [source.previousNodeOutput ?? 0]
      };
    });
    const isExecuting = computed(
      () => __props.paneType === "output" && (__props.logEntry.runData?.executionStatus === "running" || __props.logEntry.runData?.executionStatus === "waiting")
    );
    function handleClickOpenNdv() {
      ndvStore.setActiveNodeName(__props.logEntry.node.name, "logs_view");
    }
    function handleChangeDisplayMode(value) {
      displayMode.value = value;
    }
    return (_ctx, _cache) => {
      const _directive_n8n_html = resolveDirective("n8n-html");
      return runDataProps.value ? (openBlock(), createBlock(RunData, mergeProps({ key: 0 }, runDataProps.value, {
        key: `run-data${unref(popOutWindow) ? "-pop-out" : ""}`,
        class: _ctx.$style.component,
        "workflow-object": _ctx.logEntry.workflow,
        "workflow-execution": _ctx.logEntry.execution,
        "too-much-data-title": unref(locale).baseText("ndv.output.tooMuchData.title"),
        "no-data-in-branch-message": unref(locale).baseText("ndv.output.noOutputDataInBranch"),
        "executing-message": unref(locale).baseText("ndv.output.executing"),
        "pane-type": _ctx.paneType,
        "disable-run-index-selection": true,
        compact: true,
        "show-actions-on-hover": true,
        "disable-pin": true,
        "disable-edit": true,
        "disable-hover-highlight": true,
        "disable-settings-hint": true,
        "display-mode": displayMode.value,
        "disable-ai-content": !unref(isSubNodeLog)(_ctx.logEntry),
        "is-executing": isExecuting.value,
        "table-header-bg-color": "light",
        "collapsing-table-column-name": _ctx.collapsingTableColumnName,
        "search-shortcut": _ctx.searchShortcut,
        onDisplayModeChange: handleChangeDisplayMode,
        onCollapsingTableColumnChanged: _cache[0] || (_cache[0] = ($event) => emit("collapsingTableColumnChanged", $event))
      }), createSlots({
        header: withCtx(() => [
          createVNode(unref(N8nText), {
            class: normalizeClass(_ctx.$style.title),
            bold: true,
            color: "text-light",
            size: "small"
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.title), 1)
            ]),
            _: 1
          }, 8, ["class"])
        ]),
        "header-end": withCtx((itemCountProps) => [
          createVNode(RunDataItemCount, mergeProps(itemCountProps, {
            search: displayMode.value === "schema" ? "" : itemCountProps.search
          }), null, 16, ["search"])
        ]),
        "no-output-data": withCtx(() => [
          createVNode(NDVEmptyState, {
            title: unref(locale).baseText("ndv.output.noOutputData.title")
          }, null, 8, ["title"])
        ]),
        "node-waiting": withCtx(() => [
          createVNode(NDVEmptyState, {
            title: unref(locale).baseText("ndv.output.waitNodeWaiting.title"),
            wide: ""
          }, {
            default: withCtx(() => [
              withDirectives(createBaseVNode("span", null, null, 512), [
                [_directive_n8n_html, unref(waitingNodeTooltip)(_ctx.logEntry.node, _ctx.logEntry.workflow)]
              ])
            ]),
            _: 1
          }, 8, ["title"])
        ]),
        _: 2
      }, [
        isMultipleInput.value ? {
          name: "content",
          fn: withCtx(() => []),
          key: "0"
        } : void 0,
        isMultipleInput.value ? {
          name: "callout-message",
          fn: withCtx(() => [
            createVNode(unref(I18nT), {
              keypath: "logs.details.body.multipleInputs",
              scope: "global"
            }, {
              button: withCtx(() => [
                createVNode(unref(N8nLink), {
                  size: "small",
                  onClick: handleClickOpenNdv
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(locale).baseText("logs.details.body.multipleInputs.openingTheNode")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          key: "1"
        } : void 0
      ]), 1040, ["class", "workflow-object", "workflow-execution", "too-much-data-title", "no-data-in-branch-message", "executing-message", "pane-type", "display-mode", "disable-ai-content", "is-executing", "collapsing-table-column-name", "search-shortcut"])) : createCommentVNode("", true);
    };
  }
});
const component = "_component_1v5g3_123";
const title$1 = "_title_1v5g3_127";
const style0$3 = {
  component,
  title: title$1
};
const cssModules$3 = {
  "$style": style0$3
};
const LogsViewRunData = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__cssModules", cssModules$3]]);
function useResizablePanel(localStorageKey, {
  container: container2,
  defaultSize,
  snap = true,
  minSize = 0,
  maxSize = (size) => size,
  position = "left",
  allowCollapse,
  allowFullSize
}) {
  const containerSize = ref(0);
  const persistedSize = useLocalStorage(localStorageKey, -1, { writeDefaults: false });
  const isResizing = ref(false);
  const sizeOnResizeStart = ref();
  const minSizeValue = computed(() => resolveSize(minSize, containerSize.value));
  const maxSizeValue = computed(() => resolveSize(maxSize, containerSize.value));
  const constrainedSize = computed(() => {
    const sizeInPixels = persistedSize.value >= 0 && persistedSize.value <= 1 ? containerSize.value * persistedSize.value : -1;
    if (isResizing.value && allowCollapse && sizeInPixels < 30) {
      return 0;
    }
    if (isResizing.value && allowFullSize && sizeInPixels > containerSize.value - 30) {
      return containerSize.value;
    }
    const defaultSizeValue = resolveSize(defaultSize, containerSize.value);
    if (Number.isNaN(sizeInPixels) || !Number.isFinite(sizeInPixels) || sizeInPixels < 0) {
      return defaultSizeValue;
    }
    return Math.max(
      minSizeValue.value,
      Math.min(
        snap && Math.abs(defaultSizeValue - sizeInPixels) < 30 ? defaultSizeValue : sizeInPixels,
        maxSizeValue.value
      )
    );
  });
  function getSize(el) {
    return position === "bottom" ? el.height : el.width;
  }
  function getOffsetSize(el) {
    return position === "bottom" ? el.offsetHeight : el.offsetWidth;
  }
  function getValue(data) {
    return position === "bottom" ? data.y : data.x;
  }
  function resolveSize(getter, containerSizeValue) {
    return typeof getter === "number" ? getter : getter(containerSizeValue);
  }
  function onResize(data) {
    const containerRect = unref(container2)?.getBoundingClientRect();
    const newSizeInPixels = Math.max(
      0,
      position === "bottom" ? (containerRect ? getSize(containerRect) : 0) - getValue(data) : getValue(data) - (containerRect ? getValue(containerRect) : 0)
    );
    isResizing.value = true;
    persistedSize.value = newSizeInPixels / containerSize.value;
    if (sizeOnResizeStart.value === void 0) {
      sizeOnResizeStart.value = persistedSize.value;
    }
  }
  function onResizeEnd() {
    if (minSizeValue.value > 0 && constrainedSize.value <= 0 || maxSizeValue.value < containerSize.value && constrainedSize.value >= containerSize.value) {
      persistedSize.value = sizeOnResizeStart.value;
    }
    sizeOnResizeStart.value = void 0;
    isResizing.value = false;
  }
  watch(
    () => unref(container2),
    (el, _, onCleanUp) => {
      if (!el) {
        return;
      }
      const observer = new ResizeObserver(() => {
        containerSize.value = getOffsetSize(el);
      });
      observer.observe(el);
      containerSize.value = getOffsetSize(el);
      onCleanUp(() => observer.disconnect());
    },
    { immediate: true }
  );
  return {
    isResizing: computed(() => isResizing.value),
    isCollapsed: computed(() => isResizing.value && constrainedSize.value <= 0),
    isFullSize: computed(() => isResizing.value && constrainedSize.value >= containerSize.value),
    size: constrainedSize,
    onResize,
    onResizeEnd
  };
}
const MIN_IO_PANEL_WIDTH = 200;
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "LogDetailsPanel",
  props: {
    isOpen: { type: Boolean },
    logEntry: {},
    window: {},
    latestInfo: {},
    panels: {},
    collapsingInputTableColumnName: {},
    collapsingOutputTableColumnName: {},
    isHeaderClickable: { type: Boolean }
  },
  emits: ["clickHeader", "toggleInputOpen", "toggleOutputOpen", "collapsingInputTableColumnChanged", "collapsingOutputTableColumnChanged"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const locale = useI18n$1();
    const nodeTypeStore = useNodeTypesStore();
    const ndvStore = useNDVStore();
    const experimentalNdvStore = useExperimentalNdvStore();
    const type = computed(() => nodeTypeStore.getNodeType(__props.logEntry.node.type));
    const consumedTokens = computed(() => getSubtreeTotalConsumedTokens(__props.logEntry, false));
    const isTriggerNode = computed(() => type.value?.group.includes("trigger"));
    const container2 = useTemplateRef("container");
    const resizer = useResizablePanel("N8N_LOGS_INPUT_PANEL_WIDTH", {
      container: container2,
      defaultSize: (size) => size / 2,
      minSize: MIN_IO_PANEL_WIDTH,
      maxSize: (size) => size - MIN_IO_PANEL_WIDTH,
      allowCollapse: true,
      allowFullSize: true
    });
    const shouldResize = computed(() => __props.panels === LOG_DETAILS_PANEL_STATE.BOTH);
    const searchShortcutPriorityPanel = computed(
      () => ndvStore.isNDVOpen || experimentalNdvStore.isMapperOpen ? void 0 : __props.panels === LOG_DETAILS_PANEL_STATE.INPUT ? "input" : "output"
    );
    function handleResizeEnd() {
      if (resizer.isCollapsed.value) {
        emit("toggleInputOpen", false);
      }
      if (resizer.isFullSize.value) {
        emit("toggleOutputOpen", false);
      }
      resizer.onResizeEnd();
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "container",
        ref: container2,
        class: normalizeClass(_ctx.$style.container),
        "data-test-id": "log-details"
      }, [
        createVNode(LogsPanelHeader, {
          "data-test-id": "log-details-header",
          class: normalizeClass(_ctx.$style.header),
          "is-clickable": _ctx.isHeaderClickable,
          onClick: _cache[2] || (_cache[2] = ($event) => emit("clickHeader"))
        }, {
          title: withCtx(() => [
            createBaseVNode("div", {
              class: normalizeClass(_ctx.$style.title)
            }, [
              createVNode(NodeIcon, {
                "node-type": type.value,
                size: 16,
                class: normalizeClass(_ctx.$style.icon)
              }, null, 8, ["node-type", "class"]),
              createVNode(LogsViewNodeName, {
                name: _ctx.latestInfo?.name ?? _ctx.logEntry.node.name,
                "is-deleted": _ctx.latestInfo?.deleted ?? false
              }, null, 8, ["name", "is-deleted"]),
              _ctx.isOpen && _ctx.logEntry.runData !== void 0 ? (openBlock(), createBlock(LogsViewExecutionSummary, {
                key: 0,
                class: normalizeClass(_ctx.$style.executionSummary),
                status: _ctx.logEntry.runData.executionStatus ?? "unknown",
                "consumed-tokens": consumedTokens.value,
                "start-time": _ctx.logEntry.runData.startTime,
                "time-took": _ctx.logEntry.runData.executionTime
              }, null, 8, ["class", "status", "consumed-tokens", "start-time", "time-took"])) : createCommentVNode("", true)
            ], 2)
          ]),
          actions: withCtx(() => [
            _ctx.isOpen && !isTriggerNode.value && !unref(isPlaceholderLog)(_ctx.logEntry) ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass(_ctx.$style.actions)
            }, [
              createVNode(KeyboardShortcutTooltip, {
                label: unref(locale).baseText("generic.shortcutHint"),
                shortcut: { keys: ["i"] }
              }, {
                default: withCtx(() => [
                  createVNode(unref(N8nButton), {
                    size: "mini",
                    type: "secondary",
                    class: normalizeClass(_ctx.panels === unref(LOG_DETAILS_PANEL_STATE).OUTPUT ? "" : _ctx.$style.pressed),
                    onClick: _cache[0] || (_cache[0] = withModifiers(($event) => emit("toggleInputOpen"), ["stop"]))
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(locale).baseText("logs.details.header.actions.input")), 1)
                    ]),
                    _: 1
                  }, 8, ["class"])
                ]),
                _: 1
              }, 8, ["label"]),
              createVNode(KeyboardShortcutTooltip, {
                label: unref(locale).baseText("generic.shortcutHint"),
                shortcut: { keys: ["o"] }
              }, {
                default: withCtx(() => [
                  createVNode(unref(N8nButton), {
                    size: "mini",
                    type: "secondary",
                    class: normalizeClass(_ctx.panels === unref(LOG_DETAILS_PANEL_STATE).INPUT ? "" : _ctx.$style.pressed),
                    onClick: _cache[1] || (_cache[1] = withModifiers(($event) => emit("toggleOutputOpen"), ["stop"]))
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(locale).baseText("logs.details.header.actions.output")), 1)
                    ]),
                    _: 1
                  }, 8, ["class"])
                ]),
                _: 1
              }, 8, ["label"])
            ], 2)) : createCommentVNode("", true),
            renderSlot(_ctx.$slots, "actions")
          ]),
          _: 3
        }, 8, ["class", "is-clickable"]),
        _ctx.isOpen ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(_ctx.$style.content),
          "data-test-id": "logs-details-body"
        }, [
          unref(isPlaceholderLog)(_ctx.logEntry) ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(_ctx.$style.placeholder)
          }, [
            createVNode(unref(N8nText), { color: "text-base" }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(locale).baseText("ndv.output.runNodeHint")), 1)
              ]),
              _: 1
            })
          ], 2)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            !isTriggerNode.value && _ctx.panels !== unref(LOG_DETAILS_PANEL_STATE).OUTPUT ? (openBlock(), createBlock(unref(N8nResizeWrapper), {
              key: 0,
              class: normalizeClass({
                [_ctx.$style.inputResizer]: true,
                [_ctx.$style.collapsed]: unref(resizer).isCollapsed.value,
                [_ctx.$style.full]: unref(resizer).isFullSize.value
              }),
              width: unref(resizer).size.value,
              style: normalizeStyle(shouldResize.value ? { width: `${unref(resizer).size.value ?? 0}px` } : void 0),
              "supported-directions": ["right"],
              "is-resizing-enabled": shouldResize.value,
              window: _ctx.window,
              onResize: unref(resizer).onResize,
              onResizeend: handleResizeEnd
            }, {
              default: withCtx(() => [
                createVNode(LogsViewRunData, {
                  "data-test-id": "log-details-input",
                  "pane-type": "input",
                  title: unref(locale).baseText("logs.details.header.actions.input"),
                  "log-entry": _ctx.logEntry,
                  "collapsing-table-column-name": _ctx.collapsingInputTableColumnName,
                  "search-shortcut": searchShortcutPriorityPanel.value === "input" ? "ctrl+f" : void 0,
                  onCollapsingTableColumnChanged: _cache[3] || (_cache[3] = ($event) => emit("collapsingInputTableColumnChanged", $event))
                }, null, 8, ["title", "log-entry", "collapsing-table-column-name", "search-shortcut"])
              ]),
              _: 1
            }, 8, ["class", "width", "style", "is-resizing-enabled", "window", "onResize"])) : createCommentVNode("", true),
            isTriggerNode.value || _ctx.panels !== unref(LOG_DETAILS_PANEL_STATE).INPUT ? (openBlock(), createBlock(LogsViewRunData, {
              key: 1,
              "data-test-id": "log-details-output",
              "pane-type": "output",
              class: normalizeClass(_ctx.$style.outputPanel),
              title: unref(locale).baseText("logs.details.header.actions.output"),
              "log-entry": _ctx.logEntry,
              "collapsing-table-column-name": _ctx.collapsingOutputTableColumnName,
              "search-shortcut": searchShortcutPriorityPanel.value === "output" ? "ctrl+f" : void 0,
              onCollapsingTableColumnChanged: _cache[4] || (_cache[4] = ($event) => emit("collapsingOutputTableColumnChanged", $event))
            }, null, 8, ["class", "title", "log-entry", "collapsing-table-column-name", "search-shortcut"])) : createCommentVNode("", true)
          ], 64))
        ], 2)) : createCommentVNode("", true)
      ], 2);
    };
  }
});
const container$2 = "_container_13967_123";
const header = "_header_13967_132";
const actions = "_actions_13967_136";
const pressed = "_pressed_13967_142";
const title = "_title_13967_146";
const icon = "_icon_13967_152";
const executionSummary = "_executionSummary_13967_156";
const content = "_content_13967_160";
const outputPanel = "_outputPanel_13967_168";
const inputResizer = "_inputResizer_13967_173";
const collapsed = "_collapsed_13967_177";
const full = "_full_13967_177";
const placeholder = "_placeholder_13967_181";
const style0$2 = {
  container: container$2,
  header,
  actions,
  pressed,
  title,
  icon,
  executionSummary,
  content,
  outputPanel,
  inputResizer,
  collapsed,
  full,
  placeholder
};
const cssModules$2 = {
  "$style": style0$2
};
const LogsDetailsPanel = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__cssModules", cssModules$2]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "LogsPanelActions",
  props: {
    isOpen: { type: Boolean },
    isSyncSelectionEnabled: { type: Boolean },
    showToggleButton: { type: Boolean },
    showPopOutButton: { type: Boolean }
  },
  emits: ["popOut", "toggleOpen", "toggleSyncSelection"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const appStyles = useStyles();
    const locales = useI18n$1();
    const tooltipZIndex = computed(() => appStyles.APP_Z_INDEXES.ASK_ASSISTANT_FLOATING_BUTTON + 100);
    const popOutButtonText = computed(() => locales.baseText("runData.panel.actions.popOut"));
    const toggleButtonText = computed(
      () => locales.baseText(__props.isOpen ? "runData.panel.actions.collapse" : "runData.panel.actions.open")
    );
    const menuItems = computed(() => [
      {
        id: "toggleSyncSelection",
        label: locales.baseText("runData.panel.actions.sync"),
        checked: __props.isSyncSelectionEnabled
      },
      ...__props.showPopOutButton ? [{ id: "popOut", label: popOutButtonText.value }] : []
    ]);
    function handleSelectMenuItem(selected) {
      switch (selected) {
        case "popOut":
          emit(selected);
          return;
        case "toggleSyncSelection":
          emit(selected);
          return;
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.container)
      }, [
        !_ctx.isOpen && _ctx.showPopOutButton ? (openBlock(), createBlock(unref(N8nTooltip), {
          key: 0,
          "z-index": tooltipZIndex.value,
          content: popOutButtonText.value
        }, {
          default: withCtx(() => [
            createVNode(unref(_sfc_main$h), {
              icon: "pop-out",
              type: "tertiary",
              text: "",
              size: "small",
              "icon-size": "medium",
              "aria-label": popOutButtonText.value,
              onClick: _cache[0] || (_cache[0] = withModifiers(($event) => emit("popOut"), ["stop"]))
            }, null, 8, ["aria-label"])
          ]),
          _: 1
        }, 8, ["z-index", "content"])) : createCommentVNode("", true),
        _ctx.isOpen ? (openBlock(), createBlock(unref(N8nActionDropdown), {
          key: 1,
          "icon-size": "small",
          "activator-icon": "ellipsis",
          "activator-size": "small",
          items: menuItems.value,
          teleported: false,
          onSelect: handleSelectMenuItem,
          onClick: _cache[1] || (_cache[1] = withModifiers(() => {
          }, ["stop"]))
        }, null, 8, ["items"])) : createCommentVNode("", true),
        _ctx.showToggleButton ? (openBlock(), createBlock(KeyboardShortcutTooltip, {
          key: 2,
          label: unref(locales).baseText("generic.shortcutHint"),
          shortcut: { keys: ["l"] },
          "z-index": tooltipZIndex.value
        }, {
          default: withCtx(() => [
            createVNode(unref(_sfc_main$h), {
              type: "tertiary",
              text: "",
              size: "small",
              "icon-size": "medium",
              icon: _ctx.isOpen ? "chevron-down" : "chevron-up",
              "aria-label": toggleButtonText.value,
              onClick: _cache[2] || (_cache[2] = withModifiers(($event) => emit("toggleOpen"), ["stop"]))
            }, null, 8, ["icon", "aria-label"])
          ]),
          _: 1
        }, 8, ["label", "z-index"])) : createCommentVNode("", true)
      ], 2);
    };
  }
});
const container$1 = "_container_yw9ej_123";
const style0$1 = {
  container: container$1
};
const cssModules$1 = {
  "$style": style0$1
};
const LogsPanelActions = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__cssModules", cssModules$1]]);
function useLogsSelection(execution, tree, flatLogEntries, toggleExpand) {
  const telemetry = useTelemetry();
  const manualLogEntrySelection = shallowRef({ type: "initial" });
  const nodeIdToSelect = shallowRef();
  const isExecutionStopped = computed(() => execution.value?.stoppedAt !== void 0);
  const selected = computed(
    () => findSelectedLogEntry(manualLogEntrySelection.value, tree.value, !isExecutionStopped.value)
  );
  const logsStore = useLogsStore();
  const uiStore = useUIStore();
  const canvasStore = useCanvasStore();
  const workflowsStore = useWorkflowsStore();
  function syncSelectionToCanvasIfEnabled(value) {
    if (!logsStore.isLogSelectionSyncedWithCanvas) {
      return;
    }
    canvasEventBus.emit("nodes:select", { ids: [value.node.id], panIntoView: true });
  }
  function select(value) {
    manualLogEntrySelection.value = value === void 0 ? { type: "none" } : { type: "selected", entry: value };
    if (value) {
      syncSelectionToCanvasIfEnabled(value);
      telemetry.track("User selected node in log view", {
        node_type: value.node.type,
        node_id: value.node.id,
        execution_id: execution.value?.id,
        workflow_id: execution.value?.workflowData.id,
        subworkflow_depth: getDepth(value)
      });
    }
  }
  function selectPrev() {
    const entries = flatLogEntries.value;
    if (entries.length === 0) {
      return;
    }
    const prevEntry = selected.value ? getEntryAtRelativeIndex(entries, selected.value.id, -1) ?? entries[0] : entries[entries.length - 1];
    manualLogEntrySelection.value = { type: "selected", entry: prevEntry };
    syncSelectionToCanvasIfEnabled(prevEntry);
  }
  function selectNext() {
    const entries = flatLogEntries.value;
    if (entries.length === 0) {
      return;
    }
    const nextEntry = selected.value ? getEntryAtRelativeIndex(entries, selected.value.id, 1) ?? entries[entries.length - 1] : entries[0];
    manualLogEntrySelection.value = { type: "selected", entry: nextEntry };
    syncSelectionToCanvasIfEnabled(nextEntry);
  }
  watch(
    selected,
    (sel) => {
      if (sel) {
        logsStore.setSubNodeSelected(isSubNodeLog(sel));
      }
    },
    { immediate: true }
  );
  watch(
    [() => uiStore.lastSelectedNode, () => logsStore.isLogSelectionSyncedWithCanvas],
    ([selectedOnCanvas, shouldSync]) => {
      const selectedNodeId = selectedOnCanvas ? workflowsStore.nodesByName[selectedOnCanvas]?.id : void 0;
      nodeIdToSelect.value = shouldSync && !canvasStore.hasRangeSelection && selected.value?.node.id !== selectedNodeId ? selectedNodeId : void 0;
    },
    { immediate: true }
  );
  watch(
    [tree, nodeIdToSelect],
    ([latestTree, id]) => {
      if (id === void 0) {
        return;
      }
      const entry = findLogEntryRec((e) => e.node.id === id, latestTree);
      if (!entry) {
        return;
      }
      nodeIdToSelect.value = void 0;
      manualLogEntrySelection.value = { type: "selected", entry };
      let parent = entry.parent;
      while (parent !== void 0) {
        toggleExpand(parent, true);
        parent = parent.parent;
      }
    },
    { immediate: true }
  );
  return { selected, select, selectPrev, selectNext };
}
function isStyle(node) {
  return node instanceof HTMLStyleElement || node instanceof HTMLLinkElement && node.rel === "stylesheet";
}
function syncStyleMutations(destination, mutations) {
  const currentStyles = destination.document.head.querySelectorAll('style, link[rel="stylesheet"]');
  for (const mutation of mutations) {
    for (const node of mutation.addedNodes) {
      if (isStyle(node)) {
        destination.document.head.appendChild(node.cloneNode(true));
      }
    }
    for (const node of mutation.removedNodes) {
      if (isStyle(node)) {
        for (const found of currentStyles) {
          if (found.isEqualNode(node)) {
            found.remove();
          }
        }
      }
    }
  }
}
function copyFavicon(source, target) {
  const iconUrl = source.document.querySelector("link[rel=icon]")?.getAttribute("href");
  if (iconUrl) {
    const link = target.document.createElement("link");
    link.setAttribute("rel", "icon");
    link.setAttribute("href", iconUrl);
    target.document.head.appendChild(link);
  }
}
function usePopOutWindow({
  title: title2,
  container: container2,
  content: content2,
  initialHeight,
  initialWidth,
  shouldPopOut,
  onRequestClose
}) {
  const popOutWindow = ref();
  const isUnmounting = ref(false);
  const canPopOut = computed(
    () => window.parent === window
    /* Not in iframe */
  );
  const isPoppedOut = computed(() => !!popOutWindow.value);
  const tooltipContainer = computed(
    () => isPoppedOut.value ? content2.value ?? void 0 : void 0
  );
  const observer = new MutationObserver((mutations) => {
    if (popOutWindow.value) {
      syncStyleMutations(popOutWindow.value, mutations);
    }
  });
  const documentTitle = useDocumentTitle(popOutWindow);
  observer.observe(document.head, { childList: true, subtree: true });
  provide(PopOutWindowKey, popOutWindow);
  useProvideTooltipAppendTo(tooltipContainer);
  async function showPopOut() {
    if (!content2.value) {
      return;
    }
    if (!popOutWindow.value) {
      const options = `popup=yes,width=${initialWidth},height=${initialHeight},left=100,top=100,toolbar=no,menubar=no,scrollbars=yes,resizable=yes`;
      popOutWindow.value = window.open("", "_blank", options) ?? void 0;
    }
    if (!popOutWindow.value) {
      return;
    }
    copyFavicon(window, popOutWindow.value);
    for (const styleSheet of [...document.styleSheets]) {
      try {
        const cssRules = [...styleSheet.cssRules].map((rule) => rule.cssText).join("");
        const style = document.createElement("style");
        style.textContent = cssRules;
        popOutWindow.value.document.head.appendChild(style);
      } catch (e) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.type = styleSheet.type;
        link.media = styleSheet.media;
        link.href = styleSheet.href;
        popOutWindow.value.document.head.appendChild(link);
      }
    }
    popOutWindow.value.document.body.append(content2.value);
    popOutWindow.value.addEventListener("pagehide", () => !isUnmounting.value && onRequestClose());
  }
  function hidePopOut() {
    popOutWindow.value?.close();
    popOutWindow.value = void 0;
    if (content2.value) {
      container2.value?.appendChild(content2.value);
    }
  }
  watch(shouldPopOut, (value) => value ? requestAnimationFrame(showPopOut) : hidePopOut(), {
    immediate: true
  });
  watch(
    [title2, popOutWindow],
    ([newTitle, win]) => {
      if (win) {
        documentTitle.set(newTitle);
      }
    },
    { immediate: true }
  );
  onScopeDispose(() => {
    observer.disconnect();
  });
  onBeforeUnmount(() => {
    isUnmounting.value = true;
    if (popOutWindow.value) {
      popOutWindow.value.close();
      onRequestClose();
    }
  });
  return { canPopOut, isPoppedOut, popOutWindow };
}
const INITIAL_POPUP_HEIGHT = 400;
const COLLAPSED_PANEL_HEIGHT = 32;
function useLogsPanelLayout(workflowName, popOutContainer, popOutContent2, container2, logsContainer2) {
  const logsStore = useLogsStore();
  const telemetry = useTelemetry();
  const resizer = useResizablePanel(LOCAL_STORAGE_PANEL_HEIGHT, {
    container: document.body,
    position: "bottom",
    snap: false,
    defaultSize: (size) => size * 0.3,
    minSize: 160,
    maxSize: (size) => size * 0.75,
    allowCollapse: true
  });
  const chatPanelResizer = useResizablePanel(LOCAL_STORAGE_PANEL_WIDTH, {
    container: container2,
    defaultSize: (size) => Math.min(800, size * 0.3),
    minSize: 240,
    maxSize: (size) => size * 0.8
  });
  const overviewPanelResizer = useResizablePanel(LOCAL_STORAGE_OVERVIEW_PANEL_WIDTH, {
    container: logsContainer2,
    defaultSize: (size) => Math.min(240, size * 0.2),
    minSize: 80,
    maxSize: 500,
    allowFullSize: true
  });
  const isOpen = computed(
    () => logsStore.isOpen ? !resizer.isCollapsed.value : resizer.isResizing.value && resizer.size.value > 0
  );
  const isCollapsingDetailsPanel = computed(() => overviewPanelResizer.isFullSize.value);
  const popOutWindowTitle = computed(() => `Logs - ${workflowName.value}`);
  const shouldPopOut = computed(() => logsStore.state === LOGS_PANEL_STATE.FLOATING);
  const { canPopOut, isPoppedOut, popOutWindow } = usePopOutWindow({
    title: popOutWindowTitle,
    initialHeight: INITIAL_POPUP_HEIGHT,
    initialWidth: window.document.body.offsetWidth * 0.8,
    container: popOutContainer,
    content: popOutContent2,
    shouldPopOut,
    onRequestClose: () => {
      if (!isOpen.value) {
        return;
      }
      telemetry.track("User toggled log view", { new_state: "attached" });
      logsStore.setPreferPoppedOut(false);
    }
  });
  function handleToggleOpen(open) {
    const wasOpen = logsStore.isOpen;
    if (open === wasOpen) {
      return;
    }
    logsStore.toggleOpen(open);
    telemetry.track("User toggled log view", {
      new_state: wasOpen ? "collapsed" : "attached"
    });
  }
  function handlePopOut() {
    telemetry.track("User toggled log view", { new_state: "floating" });
    logsStore.toggleOpen(true);
    logsStore.setPreferPoppedOut(true);
  }
  function handleResizeEnd() {
    if (!logsStore.isOpen && !resizer.isCollapsed.value) {
      handleToggleOpen(true);
    }
    if (resizer.isCollapsed.value) {
      handleToggleOpen(false);
    }
    resizer.onResizeEnd();
  }
  watch(
    [() => logsStore.state, resizer.size, isPoppedOut],
    ([state, height]) => {
      const updatedHeight = state === LOGS_PANEL_STATE.FLOATING ? 0 : state === LOGS_PANEL_STATE.ATTACHED ? height : COLLAPSED_PANEL_HEIGHT;
      if (state === LOGS_PANEL_STATE.FLOATING) {
        popOutWindow?.value?.document.documentElement.style.setProperty(
          "--logs-panel-height",
          "100vh"
        );
      } else {
        document.documentElement.style.setProperty("--logs-panel-height", `${updatedHeight}px`);
      }
      logsStore.setHeight(updatedHeight);
    },
    { immediate: true }
  );
  onBeforeUnmount(() => logsStore.setHeight(0));
  return {
    height: resizer.size,
    chatPanelWidth: chatPanelResizer.size,
    overviewPanelWidth: overviewPanelResizer.size,
    canPopOut,
    isOpen,
    isCollapsingDetailsPanel,
    isPoppedOut,
    isOverviewPanelFullWidth: overviewPanelResizer.isFullSize,
    popOutWindow,
    onToggleOpen: handleToggleOpen,
    onPopOut: handlePopOut,
    onResize: resizer.onResize,
    onResizeEnd: handleResizeEnd,
    onChatPanelResize: chatPanelResizer.onResize,
    onChatPanelResizeEnd: chatPanelResizer.onResizeEnd,
    onOverviewPanelResize: overviewPanelResizer.onResize,
    onOverviewPanelResizeEnd: overviewPanelResizer.onResizeEnd
  };
}
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "LogsViewKeyboardEventListener",
  props: {
    keyMap: {},
    container: {}
  },
  setup(__props) {
    const popOutWindow = inject(PopOutWindowKey, ref());
    const activeElement = useActiveElement({ window: popOutWindow?.value });
    const isBlurred = computed(() => {
      if (popOutWindow?.value) {
        return popOutWindow.value.document.activeElement === null;
      }
      return !activeElement.value || !__props.container || !__props.container.contains(activeElement.value) && __props.container !== activeElement.value;
    });
    useKeybindings(
      toRef(() => __props.keyMap),
      { disabled: isBlurred }
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div");
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "LogsPanel",
  props: {
    isReadOnly: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const container2 = useTemplateRef("container");
    const logsContainer2 = useTemplateRef("logsContainer");
    const popOutContainer = useTemplateRef("popOutContainer");
    const popOutContent2 = useTemplateRef("popOutContent");
    const logsStore = useLogsStore();
    const ndvStore = useNDVStore();
    const workflowsStore = useWorkflowsStore();
    const workflowName = computed(() => workflowsStore.workflow.name);
    const {
      height,
      chatPanelWidth,
      overviewPanelWidth,
      canPopOut,
      isOpen,
      isPoppedOut,
      isCollapsingDetailsPanel,
      isOverviewPanelFullWidth,
      popOutWindow,
      onResize,
      onResizeEnd,
      onToggleOpen,
      onPopOut,
      onChatPanelResize,
      onChatPanelResizeEnd,
      onOverviewPanelResize,
      onOverviewPanelResizeEnd
    } = useLogsPanelLayout(workflowName, popOutContainer, popOutContent2, container2, logsContainer2);
    const {
      currentSessionId,
      messages: messages2,
      previousChatMessages,
      sendMessage,
      refreshSession,
      displayExecution
    } = useChatState(props.isReadOnly);
    const { entries, execution, hasChat, latestNodeNameById, resetExecutionData, loadSubExecution } = useLogsExecutionData({ isEnabled: isOpen });
    const { flatLogEntries, toggleExpanded } = useLogsTreeExpand(entries, loadSubExecution);
    const { selected, select, selectNext, selectPrev } = useLogsSelection(
      execution,
      entries,
      flatLogEntries,
      toggleExpanded
    );
    const inputTableColumnCollapsing = ref();
    const outputTableColumnCollapsing = ref();
    const isLogDetailsOpen = computed(() => isOpen.value && selected.value !== void 0);
    const isLogDetailsVisuallyOpen = computed(
      () => isLogDetailsOpen.value && !isCollapsingDetailsPanel.value
    );
    const logsPanelActionsProps = computed(() => ({
      isOpen: isOpen.value,
      isSyncSelectionEnabled: logsStore.isLogSelectionSyncedWithCanvas,
      showToggleButton: !isPoppedOut.value,
      showPopOutButton: canPopOut.value && !isPoppedOut.value,
      onPopOut,
      onToggleOpen,
      onToggleSyncSelection: logsStore.toggleLogSelectionSync
    }));
    const inputCollapsingColumnName = computed(
      () => inputTableColumnCollapsing.value?.nodeName === selected.value?.node.name ? inputTableColumnCollapsing.value?.columnName ?? null : null
    );
    const outputCollapsingColumnName = computed(
      () => outputTableColumnCollapsing.value?.nodeName === selected.value?.node.name ? outputTableColumnCollapsing.value?.columnName ?? null : null
    );
    const keyMap = computed(() => ({
      j: selectNext,
      k: selectPrev,
      Escape: () => select(void 0),
      ArrowDown: selectNext,
      ArrowUp: selectPrev,
      Space: () => selected.value && toggleExpanded(selected.value),
      Enter: () => selected.value && handleOpenNdv(selected.value),
      ...isPoppedOut.value ? {
        // We need shortcuts for toggling input/output panel in the pop-out window only
        // because these are also implemented in the canvas
        i: () => logsStore.toggleInputOpen(),
        o: () => logsStore.toggleOutputOpen()
      } : {}
    }));
    function handleResizeOverviewPanelEnd() {
      if (isOverviewPanelFullWidth.value) {
        select(void 0);
      }
      onOverviewPanelResizeEnd();
    }
    function handleOpenNdv(treeNode) {
      ndvStore.setActiveNodeName(treeNode.node.name, "logs_view");
      void nextTick(() => {
        const source = treeNode.runData?.source[0];
        const inputBranch = source?.previousNodeOutput ?? 0;
        ndvEventBus.emit("updateInputNodeName", source?.previousNode);
        ndvEventBus.emit("setInputBranchIndex", inputBranch);
        ndvStore.setOutputRunIndex(treeNode.runIndex);
      });
    }
    function handleChangeInputTableColumnCollapsing(columnName) {
      inputTableColumnCollapsing.value = columnName && selected.value ? { nodeName: selected.value.node.name, columnName } : void 0;
    }
    function handleChangeOutputTableColumnCollapsing(columnName) {
      outputTableColumnCollapsing.value = columnName && selected.value ? { nodeName: selected.value.node.name, columnName } : void 0;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "popOutContainer",
        ref: popOutContainer,
        "data-test-id": "logs-panel"
      }, [
        (openBlock(), createBlock(_sfc_main$1, {
          key: String(!!unref(popOutWindow)),
          "key-map": keyMap.value,
          container: unref(container2)
        }, null, 8, ["key-map", "container"])),
        createBaseVNode("div", {
          ref_key: "popOutContent",
          ref: popOutContent2,
          class: normalizeClass([_ctx.$style.popOutContent, unref(isPoppedOut) ? _ctx.$style.poppedOut : ""])
        }, [
          createVNode(unref(N8nResizeWrapper), {
            height: unref(isPoppedOut) ? void 0 : unref(height),
            "supported-directions": ["top"],
            "is-resizing-enabled": !unref(isPoppedOut),
            class: normalizeClass(_ctx.$style.resizeWrapper),
            style: normalizeStyle({ height: unref(isOpen) && !unref(isPoppedOut) ? `${unref(height)}px` : "auto" }),
            onResize: unref(onResize),
            onResizeend: unref(onResizeEnd)
          }, {
            default: withCtx(() => [
              createBaseVNode("div", {
                ref_key: "container",
                ref: container2,
                class: normalizeClass(_ctx.$style.container),
                tabindex: "-1"
              }, [
                unref(hasChat) && (!props.isReadOnly || unref(messages2).length > 0) ? (openBlock(), createBlock(unref(N8nResizeWrapper), {
                  key: 0,
                  "supported-directions": ["right"],
                  "is-resizing-enabled": unref(isOpen),
                  width: unref(chatPanelWidth),
                  style: normalizeStyle({ width: `${unref(chatPanelWidth)}px` }),
                  class: normalizeClass(_ctx.$style.chat),
                  window: unref(popOutWindow),
                  onResize: unref(onChatPanelResize),
                  onResizeend: unref(onChatPanelResizeEnd)
                }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(ChatMessagesPanel, {
                      key: `canvas-chat-${unref(currentSessionId)}${unref(isPoppedOut) ? "-pop-out" : ""}`,
                      "data-test-id": "canvas-chat",
                      "is-open": unref(isOpen),
                      "is-read-only": _ctx.isReadOnly,
                      messages: unref(messages2),
                      "session-id": unref(currentSessionId),
                      "past-chat-messages": unref(previousChatMessages),
                      "show-close-button": false,
                      "is-new-logs-enabled": true,
                      "is-header-clickable": !unref(isPoppedOut),
                      onClose: unref(onToggleOpen),
                      onRefreshSession: unref(refreshSession),
                      onDisplayExecution: unref(displayExecution),
                      onSendMessage: unref(sendMessage),
                      onClickHeader: unref(onToggleOpen)
                    }, null, 8, ["is-open", "is-read-only", "messages", "session-id", "past-chat-messages", "is-header-clickable", "onClose", "onRefreshSession", "onDisplayExecution", "onSendMessage", "onClickHeader"]))
                  ]),
                  _: 1
                }, 8, ["is-resizing-enabled", "width", "style", "class", "window", "onResize", "onResizeend"])) : createCommentVNode("", true),
                createBaseVNode("div", {
                  ref_key: "logsContainer",
                  ref: logsContainer2,
                  class: normalizeClass(_ctx.$style.logsContainer)
                }, [
                  createVNode(unref(N8nResizeWrapper), {
                    class: normalizeClass(_ctx.$style.overviewResizer),
                    width: unref(overviewPanelWidth),
                    style: normalizeStyle({ width: isLogDetailsVisuallyOpen.value ? `${unref(overviewPanelWidth)}px` : "" }),
                    "supported-directions": ["right"],
                    "is-resizing-enabled": isLogDetailsOpen.value,
                    window: unref(popOutWindow),
                    onResize: unref(onOverviewPanelResize),
                    onResizeend: handleResizeOverviewPanelEnd
                  }, {
                    default: withCtx(() => [
                      createVNode(LogsOverviewPanel, {
                        class: normalizeClass(_ctx.$style.logsOverview),
                        "is-open": unref(isOpen),
                        "is-read-only": _ctx.isReadOnly,
                        "is-compact": isLogDetailsVisuallyOpen.value,
                        selected: unref(selected),
                        execution: unref(execution),
                        entries: unref(entries),
                        "latest-node-info": unref(latestNodeNameById),
                        "flat-log-entries": unref(flatLogEntries),
                        "is-header-clickable": !unref(isPoppedOut),
                        onClickHeader: unref(onToggleOpen),
                        onSelect: unref(select),
                        onClearExecutionData: unref(resetExecutionData),
                        onToggleExpanded: unref(toggleExpanded),
                        onOpenNdv: handleOpenNdv
                      }, {
                        actions: withCtx(() => [
                          !isLogDetailsVisuallyOpen.value ? (openBlock(), createBlock(LogsPanelActions, normalizeProps(mergeProps({ key: 0 }, logsPanelActionsProps.value)), null, 16)) : createCommentVNode("", true)
                        ]),
                        _: 1
                      }, 8, ["class", "is-open", "is-read-only", "is-compact", "selected", "execution", "entries", "latest-node-info", "flat-log-entries", "is-header-clickable", "onClickHeader", "onSelect", "onClearExecutionData", "onToggleExpanded"])
                    ]),
                    _: 1
                  }, 8, ["class", "width", "style", "is-resizing-enabled", "window", "onResize"]),
                  isLogDetailsVisuallyOpen.value && unref(selected) ? (openBlock(), createBlock(LogsDetailsPanel, {
                    key: 0,
                    class: normalizeClass(_ctx.$style.logDetails),
                    "is-open": unref(isOpen),
                    "log-entry": unref(selected),
                    window: unref(popOutWindow),
                    "latest-info": unref(latestNodeNameById)[unref(selected).node.id],
                    panels: unref(logsStore).detailsState,
                    "collapsing-input-table-column-name": inputCollapsingColumnName.value,
                    "collapsing-output-table-column-name": outputCollapsingColumnName.value,
                    "is-header-clickable": !unref(isPoppedOut),
                    onClickHeader: unref(onToggleOpen),
                    onToggleInputOpen: unref(logsStore).toggleInputOpen,
                    onToggleOutputOpen: unref(logsStore).toggleOutputOpen,
                    onCollapsingInputTableColumnChanged: handleChangeInputTableColumnCollapsing,
                    onCollapsingOutputTableColumnChanged: handleChangeOutputTableColumnCollapsing
                  }, {
                    actions: withCtx(() => [
                      isLogDetailsVisuallyOpen.value ? (openBlock(), createBlock(LogsPanelActions, normalizeProps(mergeProps({ key: 0 }, logsPanelActionsProps.value)), null, 16)) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }, 8, ["class", "is-open", "log-entry", "window", "latest-info", "panels", "collapsing-input-table-column-name", "collapsing-output-table-column-name", "is-header-clickable", "onClickHeader", "onToggleInputOpen", "onToggleOutputOpen"])) : createCommentVNode("", true)
                ], 2)
              ], 2)
            ]),
            _: 1
          }, 8, ["height", "is-resizing-enabled", "class", "style", "onResize", "onResizeend"])
        ], 2)
      ], 512);
    };
  }
});
const popOutContent = "_popOutContent_17exv_123";
const resizeWrapper = "_resizeWrapper_17exv_129";
const poppedOut = "_poppedOut_17exv_136";
const container = "_container_17exv_140";
const chat = "_chat_17exv_149";
const logsContainer = "_logsContainer_17exv_153";
const overviewResizer = "_overviewResizer_17exv_163";
const logsOverview = "_logsOverview_17exv_171";
const logsDetails = "_logsDetails_17exv_175";
const style0 = {
  popOutContent,
  resizeWrapper,
  poppedOut,
  container,
  chat,
  logsContainer,
  overviewResizer,
  logsOverview,
  logsDetails
};
const cssModules = {
  "$style": style0
};
const LogsPanel = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);
export {
  LogsPanel as default
};
