const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/NodeCreator-Dzlrofrr.js","assets/index-BsWH3eYA.js","assets/index-BFyMw9-0.css","assets/NodeCreator-COgNP4W1.css"])))=>i.map(i=>d[i]);
import { d as defineComponent, Z as useUIStore, cI as useFocusPanelStore, fg as useAssistantStore, h0 as useActions, h as createElementBlock, g as openBlock, f as createCommentVNode, e as createBlock, n as normalizeClass, i as createVNode, w as withCtx, a5 as _sfc_main$1, l as unref, c as useI18n, cm as KeyboardShortcutTooltip, q as N8nButton, j as createBaseVNode, d9 as _sfc_main$2, k as createTextVNode, t as toDisplayString, a4 as N8nTooltip, du as defineAsyncComponent, dt as Suspense, F as Fragment, aW as __vitePreload, dv as NODE_CREATOR_OPEN_SOURCES, h1 as getMidCanvasPosition, b2 as STICKY_NODE_TYPE, ap as useTelemetry, h2 as DEFAULT_STICKY_WIDTH, h3 as DEFAULT_STICKY_HEIGHT, _ as _export_sfc } from "./index-BsWH3eYA.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "NodeCreation",
  props: {
    nodeViewScale: {},
    createNodeActive: { type: Boolean, default: false }
  },
  emits: ["addNodes", "toggleNodeCreator"],
  setup(__props, { emit: __emit }) {
    const LazyNodeCreator = defineAsyncComponent(
      async () => await __vitePreload(() => import("./NodeCreator-Dzlrofrr.js"), true ? __vite__mapDeps([0,1,2,3]) : void 0)
    );
    const props = __props;
    const emit = __emit;
    const uiStore = useUIStore();
    const focusPanelStore = useFocusPanelStore();
    const i18n = useI18n();
    const telemetry = useTelemetry();
    const assistantStore = useAssistantStore();
    const { getAddedNodesAndConnections } = useActions();
    function openNodeCreator() {
      emit("toggleNodeCreator", {
        source: NODE_CREATOR_OPEN_SOURCES.ADD_NODE_BUTTON,
        createNodeActive: true
      });
    }
    function addStickyNote() {
      if (document.activeElement) {
        document.activeElement.blur();
      }
      const offset = [...uiStore.nodeViewOffsetPosition];
      const position = getMidCanvasPosition(props.nodeViewScale, offset);
      position[0] -= DEFAULT_STICKY_WIDTH / 2;
      position[1] -= DEFAULT_STICKY_HEIGHT / 2;
      emit("addNodes", getAddedNodesAndConnections([{ type: STICKY_NODE_TYPE, position }]));
    }
    function closeNodeCreator(hasAddedNodes = false) {
      if (props.createNodeActive) {
        emit("toggleNodeCreator", { createNodeActive: false, hasAddedNodes });
      }
    }
    function nodeTypeSelected(value) {
      emit("addNodes", getAddedNodesAndConnections(value));
      closeNodeCreator(true);
    }
    function toggleFocusPanel() {
      focusPanelStore.toggleFocusPanel();
      telemetry.track(`User ${focusPanelStore.focusPanelActive ? "opened" : "closed"} focus panel`, {
        source: "canvasButton",
        parameters: focusPanelStore.focusedNodeParametersInTelemetryFormat
      });
    }
    function onAskAssistantButtonClick() {
      if (!assistantStore.chatWindowOpen)
        assistantStore.trackUserOpenedAssistant({
          source: "canvas",
          task: "placeholder",
          has_existing_session: !assistantStore.isSessionEnded
        });
      assistantStore.toggleChatOpen();
    }
    return (_ctx, _cache) => {
      const _component_n8n_icon_button = _sfc_main$1;
      const _component_n8n_button = N8nButton;
      const _component_n8n_tooltip = N8nTooltip;
      return openBlock(), createElementBlock(Fragment, null, [
        !_ctx.createNodeActive ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(_ctx.$style.nodeButtonsWrapper)
        }, [
          createVNode(KeyboardShortcutTooltip, {
            label: unref(i18n).baseText("nodeView.openNodesPanel"),
            shortcut: { keys: ["Tab"] },
            placement: "left"
          }, {
            default: withCtx(() => [
              createVNode(_component_n8n_icon_button, {
                size: "large",
                icon: "plus",
                type: "tertiary",
                "data-test-id": "node-creator-plus-button",
                onClick: openNodeCreator
              })
            ]),
            _: 1
          }, 8, ["label"]),
          createVNode(KeyboardShortcutTooltip, {
            label: unref(i18n).baseText("nodeView.addStickyHint"),
            shortcut: { keys: ["s"], shiftKey: true },
            placement: "left"
          }, {
            default: withCtx(() => [
              createVNode(_component_n8n_icon_button, {
                size: "large",
                type: "tertiary",
                icon: "sticky-note",
                "data-test-id": "add-sticky-button",
                onClick: addStickyNote
              })
            ]),
            _: 1
          }, 8, ["label"]),
          createVNode(KeyboardShortcutTooltip, {
            label: unref(i18n).baseText("nodeView.openFocusPanel"),
            shortcut: { keys: ["f"], shiftKey: true },
            placement: "left"
          }, {
            default: withCtx(() => [
              createVNode(_component_n8n_icon_button, {
                type: "tertiary",
                size: "large",
                icon: "panel-right",
                onClick: toggleFocusPanel
              })
            ]),
            _: 1
          }, 8, ["label"]),
          unref(assistantStore).canShowAssistantButtonsOnCanvas ? (openBlock(), createBlock(_component_n8n_tooltip, {
            key: 0,
            placement: "left"
          }, {
            content: withCtx(() => [
              createTextVNode(toDisplayString(unref(i18n).baseText("aiAssistant.tooltip")), 1)
            ]),
            default: withCtx(() => [
              createVNode(_component_n8n_button, {
                type: "tertiary",
                size: "large",
                square: "",
                class: normalizeClass(_ctx.$style.icon),
                "data-test-id": "ask-assistant-canvas-action-button",
                onClick: onAskAssistantButtonClick
              }, {
                default: withCtx(() => [
                  createBaseVNode("div", null, [
                    createVNode(_sfc_main$2, { size: "large" })
                  ])
                ]),
                _: 1
              }, 8, ["class"])
            ]),
            _: 1
          })) : createCommentVNode("", true)
        ], 2)) : createCommentVNode("", true),
        (openBlock(), createBlock(Suspense, null, {
          default: withCtx(() => [
            createVNode(unref(LazyNodeCreator), {
              active: _ctx.createNodeActive,
              onNodeTypeSelected: nodeTypeSelected,
              onCloseNodeCreator: closeNodeCreator
            }, null, 8, ["active"])
          ]),
          _: 1
        }))
      ], 64);
    };
  }
});
const nodeButtonsWrapper = "_nodeButtonsWrapper_1lpva_123";
const icon = "_icon_1lpva_134";
const style0 = {
  nodeButtonsWrapper,
  icon
};
const cssModules = {
  "$style": style0
};
const NodeCreation = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);
export {
  NodeCreation as default
};
