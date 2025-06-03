import { u as useResize, a as usePiPWindow, b as useChatState, C as ChatMessagesPanel, L as LogsPanel } from "./LogsPanel-DSKPgBzi.js";
import { R as RunDataAi } from "./RunDataAi-enLZF6LC.js";
import { d as defineComponent, i as createElementBlock, g as openBlock, n as normalizeClass, k as createBaseVNode, l as createTextVNode, f as createCommentVNode, t as toDisplayString, m as unref, c as useI18n, x as renderSlot, e as createBlock, _ as _export_sfc, Q as useWorkflowsStore, aY as useLogsStore, r as ref, aZ as useTemplateRef, q as computed, a_ as LOGS_PANEL_STATE, a$ as watchEffect, X as watch, h as resolveComponent, b0 as N8nResizeWrapper, B as normalizeStyle, w as withCtx, j as createVNode, ag as useTelemetry, p as useSettingsStore } from "./index-BxcQLnKq.js";
import "./canvas-iZWX9Ev5.js";
import "./RunData-CsqRYKqQ.js";
import "./FileSaver.min-D6nf5nQG.js";
import "./useExecutionHelpers-jxXCvVWj.js";
import "./RunDataParsedAiContent-lUuQpLVs.js";
const _hoisted_1 = { class: "meta" };
const _hoisted_2 = { key: 0 };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ChatLogsPanel",
  props: {
    node: {},
    slim: { type: Boolean },
    workflow: {}
  },
  setup(__props) {
    const locale = useI18n();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.logsWrapper),
        "data-test-id": "lm-chat-logs"
      }, [
        createBaseVNode("header", {
          class: normalizeClass(_ctx.$style.logsHeader)
        }, [
          createBaseVNode("div", _hoisted_1, [
            createTextVNode(toDisplayString(unref(locale).baseText("chat.window.logs")) + " ", 1),
            _ctx.node ? (openBlock(), createElementBlock("span", _hoisted_2, toDisplayString(unref(locale).baseText("chat.window.logsFromNode", { interpolate: { nodeName: _ctx.node.name } })), 1)) : createCommentVNode("", true)
          ]),
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.actions)
          }, [
            renderSlot(_ctx.$slots, "actions")
          ], 2)
        ], 2),
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.logs)
        }, [
          _ctx.node ? (openBlock(), createBlock(RunDataAi, {
            key: 0,
            class: normalizeClass(_ctx.$style.runData),
            node: _ctx.node,
            workflow: _ctx.workflow,
            slim: _ctx.slim
          }, null, 8, ["class", "node", "workflow", "slim"])) : createCommentVNode("", true)
        ], 2)
      ], 2);
    };
  }
});
const logsHeader = "_logsHeader_1n9n2_123";
const logsWrapper = "_logsWrapper_1n9n2_140";
const logsTitle = "_logsTitle_1n9n2_149";
const logs$1 = "_logs_1n9n2_123";
const actions = "_actions_1n9n2_159";
const style0$1 = {
  logsHeader,
  logsWrapper,
  logsTitle,
  logs: logs$1,
  actions
};
const cssModules$1 = {
  "$style": style0$1
};
const ChatLogsPanel = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__cssModules", cssModules$1]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CanvasChat",
  setup(__props, { expose: __expose }) {
    const workflowsStore = useWorkflowsStore();
    const logsStore = useLogsStore();
    const container2 = ref();
    const pipContainer = useTemplateRef("pipContainer");
    const pipContent2 = useTemplateRef("pipContent");
    const workflow = computed(() => workflowsStore.getCurrentWorkflow());
    const chatPanelState = computed(() => logsStore.state);
    const resultData = computed(() => workflowsStore.getWorkflowRunData);
    const telemetry = useTelemetry();
    const {
      height,
      chatWidth,
      rootStyles,
      logsWidth,
      onResizeDebounced,
      onResizeChatDebounced,
      onWindowResize
    } = useResize(container2);
    const { canPopOut, isPoppedOut, pipWindow } = usePiPWindow({
      initialHeight: 400,
      initialWidth: window.document.body.offsetWidth * 0.8,
      container: pipContainer,
      content: pipContent2,
      shouldPopOut: computed(() => chatPanelState.value === LOGS_PANEL_STATE.FLOATING),
      onRequestClose: () => {
        if (chatPanelState.value === LOGS_PANEL_STATE.CLOSED) {
          return;
        }
        telemetry.track("User toggled log view", { new_state: "attached" });
        logsStore.setPreferPoppedOut(false);
      }
    });
    const {
      currentSessionId,
      messages,
      chatTriggerNode,
      connectedNode,
      previousChatMessages,
      sendMessage,
      refreshSession,
      displayExecution
    } = useChatState(false);
    __expose({
      messages,
      currentSessionId,
      workflow
    });
    const closePanel = () => {
      logsStore.toggleOpen(false);
    };
    function onPopOut() {
      telemetry.track("User toggled log view", { new_state: "floating" });
      logsStore.toggleOpen(true);
      logsStore.setPreferPoppedOut(true);
    }
    watchEffect(() => {
      logsStore.setHeight(chatPanelState.value === LOGS_PANEL_STATE.ATTACHED ? height.value : 0);
    });
    watch(
      chatPanelState,
      (state) => {
        if (state !== LOGS_PANEL_STATE.CLOSED) {
          setTimeout(() => {
            onWindowResize?.();
          }, 0);
        }
      },
      { immediate: true }
    );
    return (_ctx, _cache) => {
      const _component_n8n_icon_button = resolveComponent("n8n-icon-button");
      return openBlock(), createElementBlock("div", {
        ref_key: "pipContainer",
        ref: pipContainer
      }, [
        createBaseVNode("div", {
          ref_key: "pipContent",
          ref: pipContent2,
          class: normalizeClass(_ctx.$style.pipContent)
        }, [
          unref(chatTriggerNode) ? (openBlock(), createBlock(unref(N8nResizeWrapper), {
            key: 0,
            "is-resizing-enabled": !unref(isPoppedOut) && chatPanelState.value === unref(LOGS_PANEL_STATE).ATTACHED,
            "supported-directions": ["top"],
            class: normalizeClass([_ctx.$style.resizeWrapper, chatPanelState.value === unref(LOGS_PANEL_STATE).CLOSED && _ctx.$style.empty]),
            height: unref(height),
            style: normalizeStyle(unref(rootStyles)),
            onResize: unref(onResizeDebounced)
          }, {
            default: withCtx(() => [
              createBaseVNode("div", {
                ref_key: "container",
                ref: container2,
                class: normalizeClass([_ctx.$style.container, "ignore-key-press-canvas"]),
                tabindex: "0"
              }, [
                chatPanelState.value !== unref(LOGS_PANEL_STATE).CLOSED ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: normalizeClass(_ctx.$style.chatResizer)
                }, [
                  createVNode(unref(N8nResizeWrapper), {
                    "supported-directions": ["right"],
                    width: unref(chatWidth),
                    class: normalizeClass(_ctx.$style.chat),
                    window: unref(pipWindow),
                    onResize: unref(onResizeChatDebounced)
                  }, {
                    default: withCtx(() => [
                      createBaseVNode("div", {
                        class: normalizeClass(_ctx.$style.inner)
                      }, [
                        createVNode(ChatMessagesPanel, {
                          "data-test-id": "canvas-chat",
                          messages: unref(messages),
                          "session-id": unref(currentSessionId),
                          "past-chat-messages": unref(previousChatMessages),
                          "show-close-button": !unref(isPoppedOut) && !unref(connectedNode),
                          onClose: closePanel,
                          onRefreshSession: unref(refreshSession),
                          onDisplayExecution: unref(displayExecution),
                          onSendMessage: unref(sendMessage)
                        }, null, 8, ["messages", "session-id", "past-chat-messages", "show-close-button", "onRefreshSession", "onDisplayExecution", "onSendMessage"])
                      ], 2)
                    ]),
                    _: 1
                  }, 8, ["width", "class", "window", "onResize"]),
                  unref(connectedNode) ? (openBlock(), createElementBlock("div", {
                    key: 0,
                    class: normalizeClass(_ctx.$style.logs)
                  }, [
                    (openBlock(), createBlock(ChatLogsPanel, {
                      key: `${resultData.value?.length ?? unref(messages)?.length}`,
                      workflow: workflow.value,
                      "data-test-id": "canvas-chat-logs",
                      node: unref(connectedNode),
                      slim: unref(logsWidth) < 700
                    }, {
                      actions: withCtx(() => [
                        unref(canPopOut) && !unref(isPoppedOut) ? (openBlock(), createBlock(_component_n8n_icon_button, {
                          key: 0,
                          icon: "pop-out",
                          type: "secondary",
                          size: "medium",
                          onClick: onPopOut
                        })) : createCommentVNode("", true),
                        !unref(isPoppedOut) ? (openBlock(), createBlock(_component_n8n_icon_button, {
                          key: 1,
                          outline: "",
                          icon: "times",
                          type: "secondary",
                          size: "medium",
                          onClick: closePanel
                        })) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }, 8, ["workflow", "node", "slim"]))
                  ], 2)) : createCommentVNode("", true)
                ], 2)) : createCommentVNode("", true)
              ], 2)
            ]),
            _: 1
          }, 8, ["is-resizing-enabled", "class", "height", "style", "onResize"])) : createCommentVNode("", true)
        ], 2)
      ], 512);
    };
  }
});
const resizeWrapper = "_resizeWrapper_1aajp_124";
const pipContent = "_pipContent_1aajp_129";
const empty = "_empty_1aajp_140";
const container = "_container_1aajp_146";
const chatResizer = "_chatResizer_1aajp_154";
const footer = "_footer_1aajp_161";
const chat = "_chat_1aajp_154";
const inner = "_inner_1aajp_180";
const logs = "_logs_1aajp_188";
const style0 = {
  resizeWrapper,
  pipContent,
  empty,
  container,
  chatResizer,
  footer,
  chat,
  inner,
  logs
};
const cssModules = {
  "$style": style0
};
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__cssModules", cssModules]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CanvasChatSwitch",
  setup(__props) {
    const { isNewLogsEnabled } = useSettingsStore();
    return (_ctx, _cache) => {
      const _component_CanvasChat = __unplugin_components_0;
      return unref(isNewLogsEnabled) ? (openBlock(), createBlock(LogsPanel, { key: 0 })) : (openBlock(), createBlock(_component_CanvasChat, { key: 1 }));
    };
  }
});
export {
  _sfc_main as default
};
