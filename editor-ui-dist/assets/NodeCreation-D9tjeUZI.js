const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/NodeCreator-DHvVJCra.js","assets/index-CklTsoJI.js","assets/index-BnmK7yJz.css","assets/NodeCreator-Cb92WDsx.css"])))=>i.map(i=>d[i]);
import { c_ as useNodeCreatorStore, bK as useNodeTypesStore, x as computed, c as useI18n, a5 as useWorkflowsStore, gK as MANUAL_TRIGGER_NODE_TYPE, gL as CHAIN_LLM_LANGCHAIN_NODE_TYPE, bs as NodeConnectionTypes, bB as CHAT_TRIGGER_NODE_TYPE, gM as OPEN_AI_NODE_MESSAGE_ASSISTANT_TYPE, gN as OPEN_AI_NODE_TYPE, gO as SPLIT_IN_BATCHES_NODE_TYPE, gP as NO_OP_NODE_TYPE, gQ as WEBHOOK_NODE_TYPE, gR as SCHEDULE_TRIGGER_NODE_TYPE, gS as transformNodeType, bg as useExternalHooks, ae as useCanvasStore, gT as AI_CATEGORY_LANGUAGE_MODELS, gU as QA_CHAIN_NODE_TYPE, gV as AGENT_NODE_TYPE, gW as BASIC_CHAIN_NODE_TYPE, gX as OPEN_AI_ASSISTANT_NODE_TYPE, aT as STICKY_NODE_TYPE, gY as sortNodeCreateElements, gZ as TRIGGER_NODE_CREATOR_VIEW, dj as NODE_CREATOR_OPEN_SOURCES, d as defineComponent, T as useUIStore, cx as useFocusPanelStore, f1 as useAssistantStore, h as createElementBlock, g as openBlock, f as createCommentVNode, e as createBlock, n as normalizeClass, i as createVNode, w as withCtx, a0 as _sfc_main$1, l as unref, cb as KeyboardShortcutTooltip, q as N8nButton, j as createBaseVNode, g_ as _sfc_main$2, k as createTextVNode, t as toDisplayString, $ as N8nTooltip, dh as defineAsyncComponent, dg as Suspense, F as Fragment, aL as __vitePreload, g$ as getMidCanvasPosition, aA as useTelemetry, h0 as DEFAULT_STICKY_WIDTH, h1 as DEFAULT_STICKY_HEIGHT, _ as _export_sfc } from "./index-CklTsoJI.js";
const useActions = () => {
  const nodeCreatorStore = useNodeCreatorStore();
  const nodeTypesStore = useNodeTypesStore();
  const i18n = useI18n();
  const singleNodeOpenSources = [
    NODE_CREATOR_OPEN_SOURCES.PLUS_ENDPOINT,
    NODE_CREATOR_OPEN_SOURCES.NODE_CONNECTION_ACTION,
    NODE_CREATOR_OPEN_SOURCES.NODE_CONNECTION_DROP
  ];
  const actionsCategoryLocales = computed(() => {
    return {
      actions: i18n.baseText("nodeCreator.actionsCategory.actions") ?? "",
      triggers: i18n.baseText("nodeCreator.actionsCategory.triggers") ?? ""
    };
  });
  function getPlaceholderTriggerActions(subcategory) {
    const nodes = [WEBHOOK_NODE_TYPE, SCHEDULE_TRIGGER_NODE_TYPE];
    const matchedNodeTypes = nodeCreatorStore.mergedNodes.filter((node) => nodes.some((n) => n === node.name)).map((node) => {
      const transformed = transformNodeType(node, subcategory, "action");
      if (transformed.type === "action") {
        const nameBase = node.name.replace("n8n-nodes-base.", "");
        const localeKey = `nodeCreator.actionsPlaceholderNode.${nameBase}`;
        const overwriteLocale = i18n.baseText(localeKey);
        if (overwriteLocale !== localeKey) {
          transformed.properties.displayName = overwriteLocale;
        }
      }
      return transformed;
    });
    return matchedNodeTypes;
  }
  function filterActionsCategory(items, category) {
    return items.filter(
      (item) => item.type === "action" && item.properties.codex.categories.includes(category)
    );
  }
  function injectActionsLabels(items) {
    const extendedActions = sortNodeCreateElements([...items]);
    const labelsSet = /* @__PURE__ */ new Set();
    for (const action of extendedActions) {
      if (action.type !== "action") continue;
      const label = action.properties?.codex?.label;
      labelsSet.add(label);
    }
    if (labelsSet.size <= 1) return extendedActions;
    const firstIndexMap = /* @__PURE__ */ new Map();
    for (let i = 0; i < extendedActions.length; i++) {
      const action = extendedActions[i];
      if (action.type !== "action") continue;
      const label = action.properties?.codex?.label;
      if (!firstIndexMap.has(label)) {
        firstIndexMap.set(label, i);
      }
    }
    let insertedLabels = 0;
    for (const label of labelsSet) {
      const newLabel = {
        uuid: label,
        type: "label",
        key: label,
        subcategory: extendedActions[0].key,
        properties: {
          key: label
        }
      };
      const insertIndex = firstIndexMap.get(label);
      if (insertIndex !== void 0) {
        extendedActions.splice(insertIndex + insertedLabels, 0, newLabel);
        insertedLabels++;
      }
    }
    return extendedActions;
  }
  function parseCategoryActions(actions, category, withLabels = true) {
    const filteredActions = filterActionsCategory(actions, category);
    if (withLabels) return injectActionsLabels(filteredActions);
    return filteredActions;
  }
  function getActionData(actionItem) {
    const displayOptions = actionItem.displayOptions;
    const displayConditions = Object.keys(displayOptions?.show ?? {}).reduce(
      (acc, showCondition) => {
        acc[showCondition] = displayOptions?.show?.[showCondition]?.[0];
        return acc;
      },
      {}
    );
    return {
      name: actionItem.displayName,
      key: actionItem.name,
      value: { ...actionItem.values, ...displayConditions }
    };
  }
  function actionDataToNodeTypeSelectedPayload(actionData) {
    const result = {
      type: actionData.key
    };
    if (typeof actionData.value.resource === "string" || typeof actionData.value.operation === "string") {
      result.parameters = {};
      if (typeof actionData.value.resource === "string") {
        result.parameters.resource = actionData.value.resource;
      }
      if (typeof actionData.value.operation === "string") {
        result.parameters.operation = actionData.value.operation;
      }
    }
    return result;
  }
  function nodeCreateElementToNodeTypeSelectedPayload(actionData) {
    const result = {
      type: actionData.key
    };
    if (typeof actionData.resource === "string" || typeof actionData.operation === "string") {
      result.parameters = {};
      if (typeof actionData.resource === "string") {
        result.parameters.resource = actionData.resource;
      }
      if (typeof actionData.operation === "string") {
        result.parameters.operation = actionData.operation;
      }
    }
    return result;
  }
  function shouldConnectWithExistingTrigger(addedNodes) {
    if (addedNodes.length === 2) {
      const isTriggerNode = useNodeTypesStore().isTriggerNode(addedNodes[0].type);
      return isTriggerNode;
    }
    return false;
  }
  function shouldPrependManualTrigger(addedNodes) {
    const { selectedView, openSource } = useNodeCreatorStore();
    const { workflowTriggerNodes } = useWorkflowsStore();
    const hasTrigger = addedNodes.some((node) => useNodeTypesStore().isTriggerNode(node.type));
    const workflowContainsTrigger = workflowTriggerNodes.length > 0;
    const isTriggerPanel = selectedView === TRIGGER_NODE_CREATOR_VIEW;
    const onlyStickyNodes = addedNodes.every((node) => node.type === STICKY_NODE_TYPE);
    const isSingleNodeOpenSource = singleNodeOpenSources.includes(openSource);
    return !isSingleNodeOpenSource && !hasTrigger && !workflowContainsTrigger && isTriggerPanel && !onlyStickyNodes;
  }
  function shouldPrependChatTrigger(addedNodes) {
    const COMPATIBLE_CHAT_NODES = [
      QA_CHAIN_NODE_TYPE,
      AGENT_NODE_TYPE,
      BASIC_CHAIN_NODE_TYPE,
      OPEN_AI_ASSISTANT_NODE_TYPE,
      OPEN_AI_NODE_MESSAGE_ASSISTANT_TYPE
    ];
    const isCompatibleNode = addedNodes.some((node) => COMPATIBLE_CHAT_NODES.includes(node.type));
    if (!isCompatibleNode) return false;
    const { allNodes } = useWorkflowsStore();
    return allNodes.filter((x) => x.type !== MANUAL_TRIGGER_NODE_TYPE).length === 0;
  }
  function shouldPrependLLMChain(addedNodes) {
    const canvasHasAINodes = useCanvasStore().aiNodes.length > 0;
    if (canvasHasAINodes) return false;
    return addedNodes.some((node) => {
      const nodeType = nodeTypesStore.getNodeType(node.type);
      return Object.keys(nodeType?.codex?.subcategories ?? {}).includes(
        AI_CATEGORY_LANGUAGE_MODELS
      );
    });
  }
  function getAddedNodesAndConnections(addedNodes) {
    if (addedNodes.length === 0) {
      return { nodes: [], connections: [] };
    }
    const nodes = [];
    const connections = [];
    const nodeToAutoOpen = addedNodes.find((node) => node.type !== MANUAL_TRIGGER_NODE_TYPE);
    if (nodeToAutoOpen) {
      nodeToAutoOpen.openDetail = true;
    }
    if (shouldPrependLLMChain(addedNodes) || shouldPrependChatTrigger(addedNodes)) {
      if (shouldPrependLLMChain(addedNodes)) {
        addedNodes.unshift({ type: CHAIN_LLM_LANGCHAIN_NODE_TYPE, isAutoAdd: true });
        connections.push({
          from: { nodeIndex: 2, type: NodeConnectionTypes.AiLanguageModel },
          to: { nodeIndex: 1 }
        });
      }
      addedNodes.unshift({ type: CHAT_TRIGGER_NODE_TYPE, isAutoAdd: true });
      connections.push({
        from: { nodeIndex: 0 },
        to: { nodeIndex: 1 }
      });
    } else if (shouldPrependManualTrigger(addedNodes)) {
      addedNodes.unshift({ type: MANUAL_TRIGGER_NODE_TYPE, isAutoAdd: true });
      connections.push({
        from: { nodeIndex: 0 },
        to: { nodeIndex: 1 }
      });
    } else if (shouldConnectWithExistingTrigger(addedNodes)) {
      connections.push({
        from: { nodeIndex: 0 },
        to: { nodeIndex: 1 }
      });
    }
    addedNodes.forEach((node, index) => {
      if (node.type === OPEN_AI_NODE_MESSAGE_ASSISTANT_TYPE) {
        node.type = OPEN_AI_NODE_TYPE;
      }
      nodes.push(node);
      switch (node.type) {
        case SPLIT_IN_BATCHES_NODE_TYPE: {
          const splitInBatchesIndex = index;
          const noOpIndex = splitInBatchesIndex + 1;
          nodes.push({
            type: NO_OP_NODE_TYPE,
            isAutoAdd: true,
            name: i18n.baseText("nodeView.replaceMe")
          });
          connections.push(
            {
              from: { nodeIndex: splitInBatchesIndex, outputIndex: 1 },
              to: { nodeIndex: noOpIndex }
            },
            {
              from: { nodeIndex: noOpIndex },
              to: { nodeIndex: splitInBatchesIndex }
            }
          );
          break;
        }
      }
    });
    return { nodes, connections };
  }
  function setAddedNodeActionParameters(action, telemetry, rootView = "") {
    const { $onAction: onWorkflowStoreAction } = useWorkflowsStore();
    const storeWatcher = onWorkflowStoreAction(
      ({ name, after, store: { setLastNodeParameters }, args }) => {
        if (name !== "addNode" || args[0].type !== action.key) return;
        after(() => {
          setLastNodeParameters(action);
          if (telemetry) trackActionSelected(action, telemetry, rootView);
          storeWatcher();
        });
      }
    );
    return storeWatcher;
  }
  function trackActionSelected(action, _telemetry, rootView) {
    const payload = {
      node_type: action.key,
      action: action.name,
      source_mode: rootView.toLowerCase(),
      resource: action.value.resource || ""
    };
    void useExternalHooks().run("nodeCreateList.addAction", payload);
    useNodeCreatorStore().onAddActions(payload);
  }
  return {
    actionsCategoryLocales,
    actionDataToNodeTypeSelectedPayload,
    nodeCreateElementToNodeTypeSelectedPayload,
    getPlaceholderTriggerActions,
    parseCategoryActions,
    getAddedNodesAndConnections,
    getActionData,
    setAddedNodeActionParameters
  };
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "NodeCreation",
  props: {
    nodeViewScale: {},
    createNodeActive: { type: Boolean, default: false }
  },
  emits: ["addNodes", "toggleNodeCreator"],
  setup(__props, { emit: __emit }) {
    const LazyNodeCreator = defineAsyncComponent(
      async () => await __vitePreload(() => import("./NodeCreator-DHvVJCra.js"), true ? __vite__mapDeps([0,1,2,3]) : void 0)
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
const NodeCreation$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: NodeCreation
}, Symbol.toStringTag, { value: "Module" }));
export {
  NodeCreation$1 as N,
  useActions as u
};
