const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/NodeCreator-CyzLGYLx.js","assets/index-lkSN61-i.js","assets/index-BvbpnRSm.css","assets/NodeCreator-CamUhvMk.css"])))=>i.map(i=>d[i]);
import { d as defineComponent, Q as useUIStore, cy as useFocusPanelStore, fn as useAssistantStore, d4 as useBuilderStore, iA as useChatPanelStore, iB as useActions, h as createElementBlock, g as openBlock, f as createCommentVNode, e as createBlock, n as normalizeClass, i as createVNode, w as withCtx, k as unref, ab as _sfc_main$1, c as useI18n, c7 as KeyboardShortcutTooltip, q as N8nButton, j as createBaseVNode, cn as _sfc_main$2, l as createTextVNode, t as toDisplayString, aa as N8nTooltip, dm as defineAsyncComponent, dl as Suspense, F as Fragment, aW as __vitePreload, dp as NODE_CREATOR_OPEN_SOURCES, iC as getMidCanvasPosition, b2 as STICKY_NODE_TYPE, al as useTelemetry, iD as DEFAULT_STICKY_WIDTH, iE as DEFAULT_STICKY_HEIGHT, _ as _export_sfc } from "./index-lkSN61-i.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "NodeCreation",
  props: {
    nodeViewScale: {},
    createNodeActive: { type: Boolean, default: false },
    focusPanelActive: { type: Boolean }
  },
  emits: ["addNodes", "toggleNodeCreator", "close"],
  setup(__props, { emit: __emit }) {
    const LazyNodeCreator = defineAsyncComponent(
      async () => await __vitePreload(() => import("./NodeCreator-CyzLGYLx.js"), true ? __vite__mapDeps([0,1,2,3]) : void 0)
    );
    const props = __props;
    const emit = __emit;
    const uiStore = useUIStore();
    const focusPanelStore = useFocusPanelStore();
    const i18n = useI18n();
    const telemetry = useTelemetry();
    const assistantStore = useAssistantStore();
    const builderStore = useBuilderStore();
    const chatPanelStore = useChatPanelStore();
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
      emit("close");
    }
    function nodeTypeSelected(value) {
      emit("addNodes", getAddedNodesAndConnections(value));
      closeNodeCreator(true);
    }
    function toggleFocusPanel() {
      focusPanelStore.toggleFocusPanel();
      telemetry.track(
        focusPanelStore.focusPanelActive ? "User opened focus panel" : "User closed focus panel",
        {
          source: "canvasButton",
          parameters: focusPanelStore.focusedNodeParametersInTelemetryFormat
        }
      );
    }
    async function onAskAssistantButtonClick() {
      if (builderStore.isAIBuilderEnabled) {
        await chatPanelStore.toggle({ mode: "builder" });
      } else {
        await chatPanelStore.toggle({ mode: "assistant" });
      }
      if (chatPanelStore.isOpen) {
        assistantStore.trackUserOpenedAssistant({
          source: "canvas",
          task: "placeholder",
          has_existing_session: !assistantStore.isSessionEnded
        });
      }
    }
    return (_ctx, _cache) => {
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
              createVNode(unref(_sfc_main$1), {
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
              createVNode(unref(_sfc_main$1), {
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
              createVNode(unref(_sfc_main$1), {
                type: "tertiary",
                size: "large",
                icon: "panel-right",
                class: normalizeClass(_ctx.focusPanelActive ? _ctx.$style.activeButton : ""),
                active: _ctx.focusPanelActive,
                "data-test-id": "toggle-focus-panel-button",
                onClick: toggleFocusPanel
              }, null, 8, ["class", "active"])
            ]),
            _: 1
          }, 8, ["label"]),
          unref(assistantStore).canShowAssistantButtonsOnCanvas ? (openBlock(), createBlock(unref(N8nTooltip), {
            key: 0,
            placement: "left"
          }, {
            content: withCtx(() => [
              createTextVNode(toDisplayString(unref(i18n).baseText("aiAssistant.tooltip")), 1)
            ]),
            default: withCtx(() => [
              createVNode(unref(N8nButton), {
                type: "tertiary",
                size: "large",
                square: "",
                class: normalizeClass(_ctx.$style.icon),
                "data-test-id": "ask-assistant-canvas-action-button",
                onClick: onAskAssistantButtonClick
              }, {
                default: withCtx(() => [
                  createBaseVNode("div", null, [
                    createVNode(unref(_sfc_main$2), { size: "large" })
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
const nodeButtonsWrapper = "_nodeButtonsWrapper_17gs3_123";
const icon = "_icon_17gs3_134";
const activeButton = "_activeButton_17gs3_143";
const style0 = {
  nodeButtonsWrapper,
  icon,
  activeButton
};
const cssModules = {
  "$style": style0
};
const NodeCreation = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);
export {
  NodeCreation as default
};
