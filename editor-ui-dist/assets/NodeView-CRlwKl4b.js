const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/NodeCreation-PVBlesh5.js","assets/index-lkSN61-i.js","assets/index-BvbpnRSm.css","assets/NodeCreation-B1fOtARK.css","assets/NodeDetailsView-DqewYcmF.js","assets/TriggerPanel-Btw7kS3f.js","assets/useLogsTreeExpand-BcUbZr_c.js","assets/AnimatedSpinner-D5rgVQbZ.js","assets/AnimatedSpinner-ChSRgyeI.css","assets/useLogsTreeExpand-BZb1m-U7.css","assets/RunDataParsedAiContent-Crt68Udr.js","assets/core-aAY3Jgyx.js","assets/RunDataParsedAiContent-CvjNCtpG.css","assets/InfoAccordion-D7rXFx08.js","assets/InfoAccordion-BuKidEQb.css","assets/TriggerPanel-BbB_P9ZT.css","assets/global-link-actions-BxA35nvq.js","assets/useExecutionDebugging-C5_MsHDw.js","assets/useBeforeUnload-BzfutFeZ.js","assets/readyToRunWorkflows.store-DxA4DV8N.js","assets/NodeDetailsView-D3QAo3SF.css","assets/NodeDetailsViewV2-DztV63wo.js","assets/NodeDetailsViewV2-bvXejqU_.css","assets/SetupWorkflowCredentialsButton-XcF79toy.js"])))=>i.map(i=>d[i]);
import { d as defineComponent, at as useCssModule, h as createElementBlock, g as openBlock, n as normalizeClass, k as unref, j as createBaseVNode, i as createVNode, cn as _sfc_main$a, l as createTextVNode, e as createBlock, f as createCommentVNode, t as toDisplayString, D as useI18n, q as N8nButton, _ as _export_sfc, aq as createEventBus, aH as useTemplateRef, co as useVueFlow, cl as toRef, x as computed, cp as useCanvasMapping, r as ref, cq as refThrottled, Y as renderSlot, cr as Canvas, K as mergeProps, a2 as useWorkflowsStore, cs as useExpressionResolveCtx, ct as useContextMenuItems, a_ as useNDVStore, a8 as watch, p as N8nText, w as withCtx, F as Fragment, A as renderList, cu as N8nKeyboardShortcut, cv as _sfc_main$b, bK as provide, cw as ExpressionLocalResolveContextSymbol, ae as useNodeTypesStore, c8 as NodeIcon, aI as InlineRename, c as useI18n$1, ab as _sfc_main$c, cx as _sfc_main$d, bG as useNodeHelpers, cy as useFocusPanelStore, bE as injectWorkflowState, cz as useNodeSettingsParameters, cA as useEnvironmentsStore, c5 as useExperimentalNdvStore, cB as useDeviceSupport, ck as useActiveElement, bM as useCanvasOperations, cC as useTelemetryContext, cD as CanvasNodeRenderType, cE as HTML_NODE_TYPE, cF as isValueExpression, cG as isResourceLocatorValue, cH as AI_TRANSFORM_NODE_TYPE, cI as useResolvedExpression, cJ as useThrottleFn, B as withModifiers, N as N8nIcon, cK as InfoTip, cL as ParameterOptions, cM as ExpressionEditorModalInput, cN as CodeNodeEditor, cO as HtmlEditor, cP as CssEditor, cQ as SqlEditor, cR as JsEditor, cS as JsonEditor, cT as N8nInput, O as N8nRadioButtons, ap as normalizeStyle, c9 as N8nResizeWrapper, cU as getParameterTypeOption, cV as htmlEditorEventBus, cW as parseFromExpression, cX as isValidParameterOption, cY as formatAsExpression, al as useTelemetry, Z as nextTick, cZ as hasFocusOnInput, c_ as isFocusableEl, c$ as reactive, o as onMounted, bh as onUnmounted, b as useRouter, a3 as useRoute, a as useToast, ay as useDocumentTitle, az as useWorkflowSaving, Q as useUIStore, af as useSourceControlStore, d0 as useNodeCreatorStore, v as useSettingsStore, d1 as useCredentialsStore, d2 as useExternalSecretsStore, au as useRootStore, a$ as useExecutionsStore, cc as useCanvasStore, ax as useNpsSurveyStore, d3 as useHistoryStore, av as useProjectsStore, u as useUsersStore, as as useTagsStore, a1 as usePushConnectionStore, d4 as useBuilderStore, bn as usePostHog, d5 as useAgentRequestStore, bF as useLogsStore, d6 as useWorkflowState, bH as useRunWorkflow, d7 as useWorkflowExtraction, d8 as useParentFolder, bZ as useClipboard, bo as useKeybindings, bx as ABOUT_MODAL_KEY, a4 as PLACEHOLDER_EMPTY_WORKFLOW_ID, d9 as NEW_WORKFLOW_ID, V as VIEWS, da as NDV_UI_OVERHAUL_EXPERIMENT, bN as START_NODE_TYPE, db as getNodeViewTab, L as MAIN_HEADER_TABS, dc as VALID_WORKFLOW_IMPORT_URL_REGEX, am as useMessage, an as MODAL_CONFIRM, dd as jsonParse, aC as getResourcePermissions, de as CHAT_TRIGGER_NODE_TYPE, df as MANUAL_CHAT_TRIGGER_NODE_TYPE, dg as EVALUATION_TRIGGER_NODE_TYPE, dh as getBounds, cd as canvasEventBus, di as onBeforeRouteLeave, b3 as onBeforeMount, ak as WORKFLOW_SETTINGS_MODAL_KEY, bs as useExternalHooks, dj as onActivated, dk as onDeactivated, X as onBeforeUnmount, dl as Suspense, dm as defineAsyncComponent, dn as CanvasRunWorkflowButton, c7 as KeyboardShortcutTooltip, z as N8nCallout, aW as __vitePreload, aF as EnterpriseEditionFeature, dp as NODE_CREATOR_OPEN_SOURCES, dq as EVALUATION_NODE_TYPE, dr as getSampleWorkflowByTemplateId, aQ as nodeViewEventBus, ds as sourceControlEventBus, dt as getNodesWithNormalizedPosition, b2 as STICKY_NODE_TYPE, aY as h, du as historyBus, dv as shouldIgnoreCanvasShortcut, dw as isTriggerNode, dx as getNodeInputs, dy as getNodeOutputs, dz as needsAgentInput, dA as FROM_AI_PARAMETERS_MODAL_KEY, dB as DRAG_EVENT_DATA_KEY, dC as WorkflowStateKey } from "./index-lkSN61-i.js";
import { g as globalLinkActionsEventBus } from "./global-link-actions-BxA35nvq.js";
import { u as useExecutionDebugging } from "./useExecutionDebugging-C5_MsHDw.js";
import { u as useBeforeUnload } from "./useBeforeUnload-BzfutFeZ.js";
import { u as useAITemplatesStarterCollectionStore, a as useReadyToRunWorkflowsStore } from "./readyToRunWorkflows.store-DxA4DV8N.js";
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  ...{
    name: "N8nCanvasThinkingPill"
  },
  __name: "CanvasThinkingPill",
  props: {
    showStop: { type: Boolean }
  },
  emits: ["stop"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const { t } = useI18n();
    const $style = useCssModule();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref($style).thinkingPill)
      }, [
        createBaseVNode("div", {
          class: normalizeClass(unref($style).iconWrapper)
        }, [
          createVNode(_sfc_main$a, { theme: "blank" })
        ], 2),
        createBaseVNode("span", {
          class: normalizeClass(unref($style).text)
        }, [
          createTextVNode(toDisplayString(unref(t)("aiAssistant.builder.canvas.thinking")) + " ", 1),
          _ctx.showStop ? (openBlock(), createBlock(unref(N8nButton), {
            key: 0,
            class: normalizeClass(unref($style).stopButton),
            label: "Stop",
            type: "secondary",
            size: "mini",
            onClick: _cache[0] || (_cache[0] = ($event) => emit("stop"))
          }, null, 8, ["class"])) : createCommentVNode("", true)
        ], 2)
      ], 2);
    };
  }
});
const thinkingPill$1 = "_thinkingPill_1nafl_123";
const iconWrapper$1 = "_iconWrapper_1nafl_139";
const stopButton = "_stopButton_1nafl_149";
const text = "_text_1nafl_153";
const style0$5 = {
  thinkingPill: thinkingPill$1,
  iconWrapper: iconWrapper$1,
  stopButton,
  text
};
const cssModules$5 = {
  "$style": style0$5
};
const N8nCanvasThinkingPill = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__cssModules", cssModules$5]]);
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "WorkflowCanvas",
  props: {
    id: { default: "canvas" },
    workflow: {},
    workflowObject: {},
    fallbackNodes: { default: () => [] },
    showFallbackNodes: { type: Boolean, default: true },
    eventBus: { default: () => createEventBus() },
    readOnly: { type: Boolean },
    executing: { type: Boolean },
    suppressInteraction: { type: Boolean, default: false }
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const canvasRef = useTemplateRef("canvas");
    const $style = useCssModule();
    const { onNodesInitialized } = useVueFlow(props.id);
    const workflow = toRef(props, "workflow");
    const workflowObject = toRef(props, "workflowObject");
    const nodes = computed(() => {
      return props.showFallbackNodes ? [...props.workflow.nodes, ...props.fallbackNodes] : props.workflow.nodes;
    });
    const connections = computed(() => props.workflow.connections);
    const { nodes: mappedNodes, connections: mappedConnections } = useCanvasMapping({
      nodes,
      connections,
      workflowObject
    });
    const initialFitViewDone = ref(false);
    onNodesInitialized(() => {
      if (!initialFitViewDone.value || props.showFallbackNodes) {
        props.eventBus.emit("fitView");
        initialFitViewDone.value = true;
      }
    });
    const mappedNodesThrottled = refThrottled(mappedNodes, 200);
    const mappedConnectionsThrottled = refThrottled(mappedConnections, 200);
    __expose({
      executeContextMenuAction: (action, nodeIds) => canvasRef.value?.executeContextMenuAction(action, nodeIds)
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref($style).wrapper),
        "data-test-id": "canvas-wrapper"
      }, [
        createBaseVNode("div", {
          id: "canvas",
          class: normalizeClass(unref($style).canvas)
        }, [
          workflow.value ? (openBlock(), createBlock(Canvas, mergeProps({
            key: 0,
            id: _ctx.id,
            ref: "canvas",
            nodes: _ctx.executing ? unref(mappedNodesThrottled) : unref(mappedNodes),
            connections: _ctx.executing ? unref(mappedConnectionsThrottled) : unref(mappedConnections),
            "event-bus": _ctx.eventBus,
            "read-only": _ctx.readOnly,
            executing: _ctx.executing,
            "suppress-interaction": _ctx.suppressInteraction
          }, _ctx.$attrs), null, 16, ["id", "nodes", "connections", "event-bus", "read-only", "executing", "suppress-interaction"])) : createCommentVNode("", true)
        ], 2),
        renderSlot(_ctx.$slots, "default")
      ], 2);
    };
  }
});
const wrapper$2 = "_wrapper_jyurh_123";
const canvas = "_canvas_jyurh_131";
const style0$4 = {
  wrapper: wrapper$2,
  canvas
};
const cssModules$4 = {
  "$style": style0$4
};
const WorkflowCanvas = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__cssModules", cssModules$4]]);
function useExecutionData({ node }) {
  const workflowsStore = useWorkflowsStore();
  const workflowExecution = computed(() => {
    return workflowsStore.getWorkflowExecution;
  });
  const workflowRunData = computed(() => {
    if (workflowExecution.value === null) {
      return null;
    }
    const executionData = workflowExecution.value.data;
    if (!executionData?.resultData?.runData) {
      return null;
    }
    return executionData.resultData.runData;
  });
  const hasNodeRun = computed(() => {
    if (workflowsStore.subWorkflowExecutionError) return true;
    return Boolean(
      node.value && workflowRunData.value && Object.prototype.hasOwnProperty.bind(workflowRunData.value)(node.value.name)
    );
  });
  return {
    workflowExecution,
    workflowRunData,
    hasNodeRun
  };
}
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "ExperimentalNodeDetailsDrawer",
  props: {
    node: {},
    nodeIds: {},
    isReadOnly: { type: Boolean }
  },
  emits: ["openNdv", "contextMenuAction"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const expressionResolveCtx = useExpressionResolveCtx(computed(() => __props.node));
    const contextMenuItems = useContextMenuItems(computed(() => __props.nodeIds));
    const ndvStore = useNDVStore();
    const ndvCloseTimes = ref(0);
    const nodeSettingsViewKey = computed(() => [__props.node.id, ndvCloseTimes.value].join("|"));
    watch(
      () => ndvStore.activeNodeName,
      (name, oldName) => {
        if (name === null && oldName !== null) {
          ndvCloseTimes.value += 1;
        }
      }
    );
    provide(ExpressionLocalResolveContextSymbol, expressionResolveCtx);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.component)
      }, [
        _ctx.nodeIds.length > 1 ? (openBlock(), createBlock(unref(N8nText), {
          key: 0,
          tag: "div",
          color: "text-base",
          class: normalizeClass(_ctx.$style.multipleNodes)
        }, {
          default: withCtx(() => [
            createBaseVNode("div", null, toDisplayString(_ctx.nodeIds.length) + " nodes selected", 1),
            createBaseVNode("ul", {
              class: normalizeClass(_ctx.$style.multipleNodesActions)
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(contextMenuItems), (action) => {
                return openBlock(), createElementBlock("li", {
                  key: action.id,
                  class: normalizeClass(_ctx.$style.multipleNodesAction)
                }, [
                  createVNode(unref(N8nButton), {
                    type: "secondary",
                    disabled: action.disabled,
                    onClick: ($event) => emit("contextMenuAction", action.id, _ctx.nodeIds)
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(action.label) + " ", 1),
                      action.shortcut ? (openBlock(), createBlock(unref(N8nKeyboardShortcut), mergeProps({
                        key: 0,
                        ref_for: true
                      }, action.shortcut), null, 16)) : createCommentVNode("", true)
                    ]),
                    _: 2
                  }, 1032, ["disabled", "onClick"])
                ], 2);
              }), 128))
            ], 2)
          ]),
          _: 1
        }, 8, ["class"])) : _ctx.node ? (openBlock(), createBlock(_sfc_main$b, {
          key: nodeSettingsViewKey.value,
          "node-id": _ctx.node.id,
          "is-read-only": _ctx.isReadOnly
        }, null, 8, ["node-id", "is-read-only"])) : createCommentVNode("", true)
      ], 2);
    };
  }
});
const component$1 = "_component_17fl4_123";
const multipleNodes = "_multipleNodes_17fl4_128";
const multipleNodesActions = "_multipleNodesActions_17fl4_138";
const multipleNodesAction = "_multipleNodesAction_17fl4_138";
const style0$3 = {
  component: component$1,
  multipleNodes,
  multipleNodesActions,
  multipleNodesAction
};
const cssModules$3 = {
  "$style": style0$3
};
const ExperimentalNodeDetailsDrawer = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__cssModules", cssModules$3]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "ExperimentalFocusPanelHeader",
  props: {
    node: {},
    parameter: {},
    isExecutable: { type: Boolean },
    readOnly: { type: Boolean }
  },
  emits: ["execute", "openNdv", "clearParameter", "renameNode"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const nodeTypesStore = useNodeTypesStore();
    const i18n = useI18n$1();
    const nodeType = computed(() => nodeTypesStore.getNodeType(__props.node.type, __props.node.typeVersion));
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(N8nText), {
        tag: "header",
        size: "small",
        bold: "",
        class: normalizeClass(_ctx.$style.component)
      }, {
        default: withCtx(() => [
          createVNode(NodeIcon, {
            "node-type": nodeType.value,
            size: 16
          }, null, 8, ["node-type"]),
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.breadcrumbs)
          }, [
            _ctx.parameter ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              createVNode(unref(N8nText), {
                size: "small",
                color: "text-base",
                bold: ""
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.node.name), 1)
                ]),
                _: 1
              }),
              createVNode(unref(N8nText), {
                size: "small",
                color: "text-light"
              }, {
                default: withCtx(() => _cache[4] || (_cache[4] = [
                  createTextVNode("/")
                ])),
                _: 1
              }),
              createTextVNode(" " + toDisplayString(_ctx.parameter.displayName), 1)
            ], 64)) : (openBlock(), createBlock(unref(InlineRename), {
              key: 1,
              "model-value": _ctx.node.name,
              "min-width": 0,
              "max-width": 500,
              placeholder: unref(i18n).baseText("ndv.title.rename.placeholder"),
              "read-only": _ctx.readOnly,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => emit("renameNode", $event))
            }, null, 8, ["model-value", "placeholder", "read-only"]))
          ], 2),
          _ctx.parameter ? (openBlock(), createBlock(unref(_sfc_main$c), {
            key: 0,
            icon: "x",
            size: "small",
            type: "tertiary",
            text: "",
            onClick: _cache[1] || (_cache[1] = ($event) => emit("clearParameter"))
          })) : (openBlock(), createBlock(unref(_sfc_main$c), {
            key: 1,
            icon: "expand",
            size: "small",
            type: "tertiary",
            text: "",
            onClick: _cache[2] || (_cache[2] = ($event) => emit("openNdv"))
          })),
          _ctx.isExecutable ? (openBlock(), createBlock(_sfc_main$d, {
            key: 2,
            "data-test-id": "node-execute-button",
            "node-name": _ctx.node.name,
            tooltip: `Execute ${_ctx.node.name}`,
            type: "secondary",
            size: "small",
            icon: "play",
            square: true,
            "hide-label": true,
            "telemetry-source": "focus",
            onExecute: _cache[3] || (_cache[3] = ($event) => emit("execute"))
          }, null, 8, ["node-name", "tooltip"])) : createCommentVNode("", true)
        ]),
        _: 1
      }, 8, ["class"]);
    };
  }
});
const component = "_component_hvb6m_123";
const breadcrumbs = "_breadcrumbs_hvb6m_131";
const style0$2 = {
  component,
  breadcrumbs
};
const cssModules$2 = {
  "$style": style0$2
};
const ExperimentalFocusPanelHeader = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__cssModules", cssModules$2]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  ...{ name: "FocusPanel" },
  __name: "FocusPanel",
  props: {
    isCanvasReadOnly: { type: Boolean }
  },
  emits: ["focus", "saveKeyboardShortcut", "contextMenuAction"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const inputField = ref();
    const wrapperRef = useTemplateRef("wrapper");
    const locale = useI18n$1();
    const nodeHelpers = useNodeHelpers();
    const focusPanelStore = useFocusPanelStore();
    const workflowsStore = useWorkflowsStore();
    const workflowState = injectWorkflowState();
    const nodeTypesStore = useNodeTypesStore();
    const telemetry = useTelemetry();
    const nodeSettingsParameters = useNodeSettingsParameters();
    const environmentsStore = useEnvironmentsStore();
    const experimentalNdvStore = useExperimentalNdvStore();
    const ndvStore = useNDVStore();
    const deviceSupport = useDeviceSupport();
    const vueFlow = useVueFlow(workflowsStore.workflowId);
    const activeElement = useActiveElement();
    const { renameNode } = useCanvasOperations();
    useTelemetryContext({ view_shown: "focus_panel" });
    const resolvedParameter = computed(() => focusPanelStore.resolvedParameter);
    const inputValue = ref("");
    const focusPanelActive = computed(() => focusPanelStore.focusPanelActive);
    const focusPanelWidth = computed(() => focusPanelStore.focusPanelWidth);
    const isDisabled = computed(() => {
      if (!resolvedParameter.value) return false;
      return !!resolvedParameter.value.parameter.disabledOptions && nodeSettingsParameters.shouldDisplayNodeParameter(
        resolvedParameter.value.node.parameters,
        resolvedParameter.value.node,
        resolvedParameter.value.parameter,
        resolvedParameter.value.parameterPath.split(".").slice(1, -1).join("."),
        "disabledOptions"
      );
    });
    const isDisplayed = computed(() => {
      if (!resolvedParameter.value) return true;
      return nodeSettingsParameters.shouldDisplayNodeParameter(
        resolvedParameter.value.node.parameters,
        resolvedParameter.value.node,
        resolvedParameter.value.parameter,
        resolvedParameter.value.parameterPath.split(".").slice(1, -1).join("."),
        "displayOptions"
      );
    });
    const node = computed(() => {
      if (!experimentalNdvStore.isNdvInFocusPanelEnabled || resolvedParameter.value) {
        return resolvedParameter.value?.node;
      }
      const selected = vueFlow.getSelectedNodes.value[0];
      return selected?.data?.render.type === CanvasNodeRenderType.Default ? workflowsStore.allNodes.find((n) => n.id === selected.id) : void 0;
    });
    const multipleNodesSelected = computed(() => vueFlow.getSelectedNodes.value.length > 1);
    const isExecutable = computed(() => {
      if (!node.value) return false;
      if (!isDisplayed.value) return false;
      const foreignCredentials = nodeHelpers.getForeignCredentialsIfSharingEnabled(
        node.value.credentials
      );
      return nodeHelpers.isNodeExecutable(node.value, !props.isCanvasReadOnly, foreignCredentials);
    });
    const { workflowRunData } = useExecutionData({ node });
    const hasNodeRun = computed(() => {
      if (!node.value) return true;
      const parentNode = workflowsStore.workflowObject.getParentNodes(node.value.name, "main", 1)[0];
      return Boolean(
        parentNode && workflowRunData.value && Object.prototype.hasOwnProperty.bind(workflowRunData.value)(parentNode)
      );
    });
    function getTypeOption(optionName) {
      return resolvedParameter.value ? getParameterTypeOption(resolvedParameter.value.parameter, optionName) : void 0;
    }
    const codeEditorMode = computed(() => {
      return resolvedParameter.value?.node.parameters.mode;
    });
    const editorType = computed(() => {
      return getTypeOption("editor") ?? void 0;
    });
    const editorLanguage = computed(() => {
      if (editorType.value === "json" || resolvedParameter.value?.parameter.type === "json")
        return "json";
      return getTypeOption("editorLanguage") ?? "javaScript";
    });
    const editorRows = computed(() => getTypeOption("rows"));
    const isToolNode = computed(
      () => resolvedParameter.value ? nodeTypesStore.isToolNode(resolvedParameter.value?.node.type) : false
    );
    const isHtmlNode = computed(
      () => !!resolvedParameter.value && resolvedParameter.value.node.type === HTML_NODE_TYPE
    );
    const expressionModeEnabled = computed(
      () => resolvedParameter.value && isValueExpression(resolvedParameter.value.parameter, resolvedParameter.value.value)
    );
    const expression = computed(() => {
      if (!expressionModeEnabled.value) return "";
      return isResourceLocatorValue(resolvedParameter.value) ? resolvedParameter.value.value : resolvedParameter.value;
    });
    const shouldCaptureForPosthog = computed(
      () => resolvedParameter.value?.node.type === AI_TRANSFORM_NODE_TYPE
    );
    const isReadOnly = computed(() => props.isCanvasReadOnly || isDisabled.value);
    const resolvedAdditionalExpressionData = computed(() => {
      return {
        $vars: environmentsStore.variablesAsObject
      };
    });
    const targetNodeParameterContext = computed(() => {
      if (!resolvedParameter.value) return void 0;
      return {
        nodeName: resolvedParameter.value.node.name,
        parameterPath: resolvedParameter.value.parameterPath
      };
    });
    const isNodeExecuting = computed(
      () => workflowState.executingNode.isNodeExecuting(node.value?.name ?? "")
    );
    const selectedNodeIds = computed(() => vueFlow.getSelectedNodes.value.map((n) => n.id));
    const emptyTitle = computed(
      () => experimentalNdvStore.isNdvInFocusPanelEnabled ? locale.baseText("nodeView.focusPanel.v2.noParameters.title") : locale.baseText("nodeView.focusPanel.noParameters.title")
    );
    const emptySubtitle = computed(
      () => experimentalNdvStore.isNdvInFocusPanelEnabled ? locale.baseText("nodeView.focusPanel.v2.noParameters.subtitle") : locale.baseText("nodeView.focusPanel.noParameters.subtitle")
    );
    const { resolvedExpression } = useResolvedExpression({
      expression,
      additionalData: resolvedAdditionalExpressionData,
      stringifyObject: resolvedParameter.value && resolvedParameter.value.parameter.type !== "multiOptions"
    });
    function valueChanged(value) {
      if (resolvedParameter.value === void 0) {
        return;
      }
      nodeSettingsParameters.updateNodeParameter(
        toRef(resolvedParameter.value.node.parameters),
        { value, name: resolvedParameter.value.parameterPath },
        value,
        resolvedParameter.value.node,
        isToolNode.value
      );
    }
    async function setFocus() {
      await nextTick();
      if (inputField.value) {
        if (hasFocusOnInput(inputField.value)) {
          inputField.value.focusOnInput();
        } else if (isFocusableEl(inputField.value)) {
          inputField.value.focus();
        }
      }
      emit("focus");
    }
    function optionSelected(command) {
      if (!resolvedParameter.value) return;
      switch (command) {
        case "resetValue": {
          if (typeof resolvedParameter.value.parameter.default === "string") {
            valueChanged(resolvedParameter.value.parameter.default);
          }
          void setFocus();
          break;
        }
        case "addExpression": {
          const newValue = formatAsExpression(
            resolvedParameter.value.value,
            resolvedParameter.value.parameter.type
          );
          valueChanged(typeof newValue === "string" ? newValue : newValue.value);
          void setFocus();
          break;
        }
        case "removeExpression": {
          const newValue = parseFromExpression(
            resolvedParameter.value.value,
            resolvedExpression.value,
            resolvedParameter.value.parameter.type,
            resolvedParameter.value.parameter.default,
            (resolvedParameter.value.parameter.options ?? []).filter(isValidParameterOption)
          );
          if (typeof newValue === "string") {
            valueChanged(newValue);
          } else if (newValue && typeof newValue.value === "string") {
            valueChanged(newValue.value);
          }
          void setFocus();
          break;
        }
        case "formatHtml":
          htmlEditorEventBus.emit("format-html");
          break;
      }
    }
    function closeFocusPanel() {
      if (experimentalNdvStore.isNdvInFocusPanelEnabled && resolvedParameter.value) {
        focusPanelStore.unsetParameters();
        telemetry.track("User removed focused param", {
          source: "closeIcon",
          parameters: focusPanelStore.focusedNodeParametersInTelemetryFormat
        });
        return;
      }
      telemetry.track("User closed focus panel", {
        source: "closeIcon",
        parameters: focusPanelStore.focusedNodeParametersInTelemetryFormat
      });
      focusPanelStore.closeFocusPanel();
    }
    function onExecute() {
      telemetry.track(
        "User executed node from focus panel",
        focusPanelStore.focusedNodeParametersInTelemetryFormat[0]
      );
    }
    function onInputChange(val) {
      inputValue.value = val;
      valueChanged(val);
    }
    function focusWithDelay() {
      setTimeout(() => {
        void setFocus();
      }, 50);
    }
    function handleKeydown(event) {
      if (event.key === "s" && deviceSupport.isCtrlKeyPressed(event)) {
        event.stopPropagation();
        event.preventDefault();
        if (isReadOnly.value) return;
        emit("saveKeyboardShortcut", event);
      }
    }
    const registerKeyboardListener = () => {
      document.addEventListener("keydown", handleKeydown, true);
    };
    const unregisterKeyboardListener = () => {
      document.removeEventListener("keydown", handleKeydown, true);
    };
    watch(
      [() => focusPanelStore.lastFocusTimestamp, () => expressionModeEnabled.value],
      () => focusWithDelay()
    );
    watch(
      () => focusPanelStore.focusPanelActive,
      (newValue) => {
        if (newValue) {
          registerKeyboardListener();
        } else {
          unregisterKeyboardListener();
        }
      },
      { immediate: true }
    );
    watch(
      () => resolvedParameter.value,
      (newValue) => {
        if (newValue) {
          const value = newValue.value;
          if (typeof value === "string" && value !== inputValue.value) {
            inputValue.value = value;
          }
        }
      },
      { immediate: true }
    );
    watch(activeElement, (active) => {
      if (!node.value || !active || !wrapperRef.value?.contains(active)) {
        return;
      }
      const path = active.closest(".parameter-input")?.getAttribute("data-parameter-path");
      if (!path) {
        return;
      }
      telemetry.track("User focused focus panel", {
        node_id: node.value.id,
        node_type: node.value.type,
        parameter_path: path
      });
    });
    function onResize(event) {
      focusPanelStore.updateWidth(event.width);
    }
    const onResizeThrottle = useThrottleFn(onResize, 10);
    function onOpenNdv() {
      if (node.value) {
        ndvStore.setActiveNodeName(node.value.name, "focus_panel");
      }
    }
    function onRenameNode(value) {
      if (node.value) {
        void renameNode(node.value.name, value);
      }
    }
    return (_ctx, _cache) => {
      return focusPanelActive.value ? (openBlock(), createElementBlock("div", {
        key: 0,
        ref: "wrapper",
        "data-test-id": "focus-panel",
        class: normalizeClass([
          _ctx.$style.wrapper,
          "ignore-key-press-canvas",
          { [_ctx.$style.isNdvInFocusPanelEnabled]: unref(experimentalNdvStore).isNdvInFocusPanelEnabled }
        ]),
        onKeydown: _cache[10] || (_cache[10] = withModifiers(() => {
        }, ["stop"]))
      }, [
        createVNode(unref(N8nResizeWrapper), {
          width: focusPanelWidth.value,
          "supported-directions": ["left"],
          "min-width": 300,
          "max-width": unref(experimentalNdvStore).isNdvInFocusPanelEnabled ? void 0 : 1e3,
          "grid-size": 8,
          style: normalizeStyle({ width: `${focusPanelWidth.value}px` }),
          onResize: unref(onResizeThrottle)
        }, {
          default: withCtx(() => [
            createBaseVNode("div", {
              class: normalizeClass(_ctx.$style.container)
            }, [
              unref(experimentalNdvStore).isNdvInFocusPanelEnabled && node.value && !multipleNodesSelected.value ? (openBlock(), createBlock(ExperimentalFocusPanelHeader, {
                key: 0,
                node: node.value,
                parameter: resolvedParameter.value?.parameter,
                "is-executable": isExecutable.value,
                "read-only": _ctx.isCanvasReadOnly,
                onExecute,
                onOpenNdv,
                onClearParameter: closeFocusPanel,
                onRenameNode
              }, null, 8, ["node", "parameter", "is-executable", "read-only"])) : createCommentVNode("", true),
              resolvedParameter.value ? (openBlock(), createElementBlock("div", {
                key: 1,
                class: normalizeClass(_ctx.$style.content),
                "data-test-id": "focus-parameter"
              }, [
                !unref(experimentalNdvStore).isNdvInFocusPanelEnabled ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: normalizeClass(_ctx.$style.tabHeader)
                }, [
                  createBaseVNode("div", {
                    class: normalizeClass(_ctx.$style.tabHeaderText)
                  }, [
                    createVNode(unref(N8nText), {
                      color: "text-dark",
                      size: "small"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(resolvedParameter.value.parameter.displayName), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(unref(N8nText), {
                      color: "text-base",
                      size: "xsmall"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(resolvedParameter.value.node.name), 1)
                      ]),
                      _: 1
                    })
                  ], 2),
                  createBaseVNode("div", {
                    class: normalizeClass(_ctx.$style.buttonWrapper)
                  }, [
                    createVNode(_sfc_main$d, {
                      "data-test-id": "node-execute-button",
                      "node-name": resolvedParameter.value.node.name,
                      tooltip: `Execute ${resolvedParameter.value.node.name}`,
                      disabled: !isExecutable.value,
                      size: "small",
                      icon: "play",
                      square: true,
                      "hide-label": true,
                      "telemetry-source": "focus",
                      onExecute
                    }, null, 8, ["node-name", "tooltip", "disabled"]),
                    createVNode(unref(N8nIcon), {
                      class: normalizeClass(_ctx.$style.closeButton),
                      icon: "x",
                      color: "text-base",
                      size: "xlarge",
                      onClick: closeFocusPanel
                    }, null, 8, ["class"])
                  ], 2)
                ], 2)) : createCommentVNode("", true),
                createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.parameterDetailsWrapper)
                }, [
                  createBaseVNode("div", {
                    class: normalizeClass(_ctx.$style.parameterOptionsWrapper)
                  }, [
                    createBaseVNode("div", {
                      class: normalizeClass(_ctx.$style.noExecutionDataTip)
                    }, [
                      !hasNodeRun.value && !isNodeExecuting.value ? (openBlock(), createBlock(unref(InfoTip), {
                        key: 0,
                        class: normalizeClass(_ctx.$style.delayedShow),
                        bold: true
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(locale).baseText("nodeView.focusPanel.noExecutionData")), 1)
                        ]),
                        _: 1
                      }, 8, ["class"])) : createCommentVNode("", true)
                    ], 2),
                    isDisplayed.value ? (openBlock(), createBlock(ParameterOptions, {
                      key: 0,
                      parameter: resolvedParameter.value.parameter,
                      value: resolvedParameter.value.value,
                      "is-read-only": isReadOnly.value,
                      "onUpdate:modelValue": optionSelected
                    }, null, 8, ["parameter", "value", "is-read-only"])) : createCommentVNode("", true)
                  ], 2),
                  typeof resolvedParameter.value.value === "string" ? (openBlock(), createElementBlock("div", {
                    key: 0,
                    class: normalizeClass(_ctx.$style.editorContainer)
                  }, [
                    !isDisplayed.value ? (openBlock(), createElementBlock("div", {
                      key: 0,
                      class: normalizeClass([_ctx.$style.content, _ctx.$style.emptyContent])
                    }, [
                      createBaseVNode("div", {
                        class: normalizeClass(_ctx.$style.emptyText)
                      }, [
                        createVNode(unref(N8nText), { color: "text-base" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(locale).baseText("nodeView.focusPanel.missingParameter")), 1)
                          ]),
                          _: 1
                        })
                      ], 2)
                    ], 2)) : expressionModeEnabled.value ? (openBlock(), createBlock(ExpressionEditorModalInput, {
                      key: 1,
                      ref_key: "inputField",
                      ref: inputField,
                      modelValue: inputValue.value,
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => inputValue.value = $event),
                      class: normalizeClass(_ctx.$style.editor),
                      "is-read-only": isReadOnly.value,
                      path: resolvedParameter.value.parameterPath,
                      "data-test-id": "expression-modal-input",
                      "target-node-parameter-context": targetNodeParameterContext.value,
                      onChange: _cache[1] || (_cache[1] = ($event) => onInputChange($event.value))
                    }, null, 8, ["modelValue", "class", "is-read-only", "path", "target-node-parameter-context"])) : ["json", "string"].includes(resolvedParameter.value.parameter.type) ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
                      editorType.value === "codeNodeEditor" ? (openBlock(), createBlock(CodeNodeEditor, {
                        key: 0,
                        id: resolvedParameter.value.parameterPath,
                        ref_key: "inputField",
                        ref: inputField,
                        modelValue: inputValue.value,
                        "onUpdate:modelValue": [
                          _cache[2] || (_cache[2] = ($event) => inputValue.value = $event),
                          onInputChange
                        ],
                        class: normalizeClass(_ctx.$style.heightFull),
                        mode: codeEditorMode.value,
                        "default-value": resolvedParameter.value.parameter.default,
                        language: editorLanguage.value,
                        "is-read-only": isReadOnly.value,
                        "target-node-parameter-context": targetNodeParameterContext.value,
                        "fill-parent": "",
                        "disable-ask-ai": true
                      }, null, 8, ["id", "modelValue", "class", "mode", "default-value", "language", "is-read-only", "target-node-parameter-context"])) : editorType.value === "htmlEditor" ? (openBlock(), createBlock(HtmlEditor, {
                        key: 1,
                        ref_key: "inputField",
                        ref: inputField,
                        modelValue: inputValue.value,
                        "onUpdate:modelValue": [
                          _cache[3] || (_cache[3] = ($event) => inputValue.value = $event),
                          onInputChange
                        ],
                        "is-read-only": isReadOnly.value,
                        rows: editorRows.value,
                        "disable-expression-coloring": !isHtmlNode.value,
                        "disable-expression-completions": !isHtmlNode.value,
                        fullscreen: "",
                        "target-node-parameter-context": targetNodeParameterContext.value
                      }, null, 8, ["modelValue", "is-read-only", "rows", "disable-expression-coloring", "disable-expression-completions", "target-node-parameter-context"])) : editorType.value === "cssEditor" ? (openBlock(), createBlock(CssEditor, {
                        key: 2,
                        ref_key: "inputField",
                        ref: inputField,
                        modelValue: inputValue.value,
                        "onUpdate:modelValue": [
                          _cache[4] || (_cache[4] = ($event) => inputValue.value = $event),
                          onInputChange
                        ],
                        "is-read-only": isReadOnly.value,
                        rows: editorRows.value,
                        fullscreen: "",
                        "target-node-parameter-context": targetNodeParameterContext.value
                      }, null, 8, ["modelValue", "is-read-only", "rows", "target-node-parameter-context"])) : editorType.value === "sqlEditor" ? (openBlock(), createBlock(SqlEditor, {
                        key: 3,
                        ref_key: "inputField",
                        ref: inputField,
                        modelValue: inputValue.value,
                        "onUpdate:modelValue": [
                          _cache[5] || (_cache[5] = ($event) => inputValue.value = $event),
                          onInputChange
                        ],
                        dialect: getTypeOption("sqlDialect"),
                        "is-read-only": isReadOnly.value,
                        rows: editorRows.value,
                        fullscreen: "",
                        "target-node-parameter-context": targetNodeParameterContext.value
                      }, null, 8, ["modelValue", "dialect", "is-read-only", "rows", "target-node-parameter-context"])) : editorType.value === "jsEditor" ? (openBlock(), createBlock(JsEditor, {
                        key: 4,
                        ref_key: "inputField",
                        ref: inputField,
                        modelValue: inputValue.value,
                        "onUpdate:modelValue": [
                          _cache[6] || (_cache[6] = ($event) => inputValue.value = $event),
                          onInputChange
                        ],
                        "is-read-only": isReadOnly.value,
                        rows: editorRows.value,
                        "posthog-capture": shouldCaptureForPosthog.value,
                        "fill-parent": ""
                      }, null, 8, ["modelValue", "is-read-only", "rows", "posthog-capture"])) : resolvedParameter.value.parameter.type === "json" ? (openBlock(), createBlock(JsonEditor, {
                        key: 5,
                        ref_key: "inputField",
                        ref: inputField,
                        modelValue: inputValue.value,
                        "onUpdate:modelValue": [
                          _cache[7] || (_cache[7] = ($event) => inputValue.value = $event),
                          onInputChange
                        ],
                        "is-read-only": isReadOnly.value,
                        rows: editorRows.value,
                        fullscreen: "",
                        "fill-parent": ""
                      }, null, 8, ["modelValue", "is-read-only", "rows"])) : (openBlock(), createBlock(unref(N8nInput), {
                        key: 6,
                        ref_key: "inputField",
                        ref: inputField,
                        modelValue: inputValue.value,
                        "onUpdate:modelValue": [
                          _cache[8] || (_cache[8] = ($event) => inputValue.value = $event),
                          onInputChange
                        ],
                        class: normalizeClass(_ctx.$style.editor),
                        readonly: isReadOnly.value,
                        type: "textarea",
                        resize: "none"
                      }, null, 8, ["modelValue", "class", "readonly"]))
                    ], 64)) : createCommentVNode("", true)
                  ], 2)) : createCommentVNode("", true)
                ], 2)
              ], 2)) : node.value && unref(experimentalNdvStore).isNdvInFocusPanelEnabled ? (openBlock(), createBlock(ExperimentalNodeDetailsDrawer, {
                key: 2,
                node: node.value,
                "node-ids": selectedNodeIds.value,
                "is-read-only": isReadOnly.value,
                onOpenNdv,
                onContextMenuAction: _cache[9] || (_cache[9] = (action, nodeIds) => emit("contextMenuAction", action, nodeIds))
              }, null, 8, ["node", "node-ids", "is-read-only"])) : (openBlock(), createElementBlock("div", {
                key: 3,
                class: normalizeClass([_ctx.$style.content, _ctx.$style.emptyContent])
              }, [
                createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.focusParameterWrapper)
                }, [
                  createBaseVNode("div", {
                    class: normalizeClass(_ctx.$style.iconWrapper)
                  }, [
                    createVNode(unref(N8nIcon), {
                      class: normalizeClass(_ctx.$style.forceHover),
                      icon: "panel-right",
                      size: "medium"
                    }, null, 8, ["class"]),
                    createVNode(unref(N8nIcon), {
                      class: normalizeClass(_ctx.$style.pointerIcon),
                      icon: "mouse-pointer",
                      color: "text-dark",
                      size: "large"
                    }, null, 8, ["class"])
                  ], 2),
                  createVNode(unref(N8nIcon), {
                    icon: "ellipsis-vertical",
                    size: "small",
                    color: "text-base"
                  }),
                  createVNode(unref(N8nRadioButtons), {
                    size: "small",
                    "model-value": "expression",
                    disabled: true,
                    options: [
                      { label: unref(locale).baseText("parameterInput.fixed"), value: "fixed" },
                      { label: unref(locale).baseText("parameterInput.expression"), value: "expression" }
                    ]
                  }, null, 8, ["options"])
                ], 2),
                createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.emptyText)
                }, [
                  createVNode(unref(N8nText), {
                    color: "text-base",
                    size: "medium",
                    bold: true
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(emptyTitle.value), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(unref(N8nText), {
                    color: "text-base",
                    size: "small"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(emptySubtitle.value), 1)
                    ]),
                    _: 1
                  })
                ], 2)
              ], 2))
            ], 2)
          ]),
          _: 1
        }, 8, ["width", "max-width", "style", "onResize"])
      ], 34)) : createCommentVNode("", true);
    };
  }
});
const wrapper$1 = "_wrapper_15fqx_123";
const container = "_container_15fqx_135";
const content = "_content_15fqx_141";
const emptyContent = "_emptyContent_15fqx_147";
const isNdvInFocusPanelEnabled = "_isNdvInFocusPanelEnabled_15fqx_152";
const emptyText = "_emptyText_15fqx_155";
const focusParameterWrapper = "_focusParameterWrapper_15fqx_161";
const iconWrapper = "_iconWrapper_15fqx_168";
const pointerIcon = "_pointerIcon_15fqx_172";
const tabHeader = "_tabHeader_15fqx_182";
const tabHeaderText = "_tabHeaderText_15fqx_189";
const buttonWrapper = "_buttonWrapper_15fqx_194";
const parameterDetailsWrapper = "_parameterDetailsWrapper_15fqx_199";
const parameterOptionsWrapper = "_parameterOptionsWrapper_15fqx_206";
const noExecutionDataTip = "_noExecutionDataTip_15fqx_210";
const editorContainer = "_editorContainer_15fqx_213";
const editor = "_editor_15fqx_213";
const delayedShow = "_delayedShow_15fqx_228";
const triggerShow = "_triggerShow_15fqx_1";
const closeButton = "_closeButton_15fqx_239";
const heightFull = "_heightFull_15fqx_243";
const forceHover = "_forceHover_15fqx_247";
const style0$1 = {
  wrapper: wrapper$1,
  container,
  content,
  emptyContent,
  isNdvInFocusPanelEnabled,
  emptyText,
  focusParameterWrapper,
  iconWrapper,
  pointerIcon,
  tabHeader,
  tabHeaderText,
  buttonWrapper,
  parameterDetailsWrapper,
  parameterOptionsWrapper,
  noExecutionDataTip,
  editorContainer,
  editor,
  delayedShow,
  triggerShow,
  closeButton,
  heightFull,
  forceHover
};
const cssModules$1 = {
  "$style": style0$1
};
const FocusPanel = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__cssModules", cssModules$1]]);
const state = reactive({
  customActions: {},
  delegatedClickHandler: null
});
function useGlobalLinkActions() {
  function registerCustomAction({ key, action }) {
    state.customActions[key] = action;
  }
  function unregisterCustomAction(key) {
    const { [key]: _, ...rest } = state.customActions;
    state.customActions = rest;
  }
  function getElementAttributes(element) {
    const attributesObject = {};
    for (let i = 0; i < element.attributes.length; i++) {
      const attr = element.attributes[i];
      if (attr.name.startsWith("data-action-parameter-")) {
        attributesObject[attr.name.replace("data-action-parameter-", "")] = attr.value;
      }
    }
    return attributesObject;
  }
  function delegateClick(e) {
    const clickedElement = e.target;
    if (!(clickedElement instanceof Element) || clickedElement.tagName !== "A") return;
    const actionAttribute = clickedElement.getAttribute("data-action");
    if (actionAttribute && typeof availableActions.value[actionAttribute] === "function") {
      e.preventDefault();
      const elementAttributes = getElementAttributes(clickedElement);
      availableActions.value[actionAttribute](elementAttributes);
    }
  }
  function reload() {
    if (window.top) {
      window.top.location.reload();
    } else {
      window.location.reload();
    }
  }
  const availableActions = computed(() => ({
    reload,
    ...state.customActions
  }));
  onMounted(() => {
    if (state.delegatedClickHandler) return;
    state.delegatedClickHandler = delegateClick;
    window.addEventListener("click", delegateClick);
    globalLinkActionsEventBus.on("registerGlobalLinkAction", registerCustomAction);
  });
  onUnmounted(() => {
    window.removeEventListener("click", delegateClick);
    state.delegatedClickHandler = null;
    globalLinkActionsEventBus.off("registerGlobalLinkAction", registerCustomAction);
  });
  return {
    registerCustomAction,
    unregisterCustomAction
  };
}
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "CanvasStopCurrentExecutionButton",
  props: {
    stopping: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const i18n = useI18n$1();
    const title = computed(
      () => props.stopping ? i18n.baseText("nodeView.stoppingCurrentExecution") : i18n.baseText("nodeView.stopCurrentExecution")
    );
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(_sfc_main$c), {
        icon: "square",
        size: "large",
        class: "stop-execution",
        type: "secondary",
        title: title.value,
        loading: _ctx.stopping,
        "data-test-id": "stop-execution-button"
      }, null, 8, ["title", "loading"]);
    };
  }
});
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "CanvasStopWaitingForWebhookButton",
  setup(__props) {
    const i18n = useI18n$1();
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(_sfc_main$c), {
        class: "stop-execution",
        icon: "square",
        size: "large",
        title: unref(i18n).baseText("nodeView.stopWaitingForWebhookCall"),
        type: "secondary",
        "data-test-id": "stop-execution-waiting-for-webhook-button"
      }, null, 8, ["title"]);
    };
  }
});
const _hoisted_1 = { "data-action": "reload" };
const _hoisted_2 = {
  href: "https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.wait/",
  target: "_blank"
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "NodeViewUnfinishedWorkflowMessage",
  setup(__props) {
    const i18 = useI18n$1();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("a", _hoisted_1, toDisplayString(unref(i18).baseText("nodeView.refresh")), 1),
        createTextVNode(" " + toDisplayString(unref(i18).baseText("nodeView.toSeeTheLatestStatus")) + ". ", 1),
        _cache[0] || (_cache[0] = createBaseVNode("br", null, null, -1)),
        createBaseVNode("a", _hoisted_2, toDisplayString(unref(i18).baseText("nodeView.moreInfo")), 1)
      ]);
    };
  }
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CanvasChatButton",
  props: {
    label: {},
    type: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(N8nButton), {
        label: _ctx.label,
        size: "large",
        icon: "message-circle",
        type: _ctx.type,
        "data-test-id": "workflow-chat-button"
      }, null, 8, ["label", "type"]);
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "NodeView"
  },
  __name: "NodeView",
  setup(__props) {
    const LazyNodeCreation = defineAsyncComponent(
      async () => await __vitePreload(() => import("./NodeCreation-PVBlesh5.js"), true ? __vite__mapDeps([0,1,2,3]) : void 0)
    );
    const LazyNodeDetailsView = defineAsyncComponent(
      async () => await __vitePreload(() => import("./NodeDetailsView-DqewYcmF.js"), true ? __vite__mapDeps([4,1,2,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]) : void 0)
    );
    const LazyNodeDetailsViewV2 = defineAsyncComponent(
      async () => await __vitePreload(() => import("./NodeDetailsViewV2-DztV63wo.js"), true ? __vite__mapDeps([21,1,2,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,22]) : void 0)
    );
    const LazySetupWorkflowCredentialsButton = defineAsyncComponent(
      async () => await __vitePreload(() => import("./SetupWorkflowCredentialsButton-XcF79toy.js"), true ? __vite__mapDeps([23,1,2]) : void 0)
    );
    const $style = useCssModule();
    const router = useRouter();
    const route = useRoute();
    const i18n = useI18n$1();
    const telemetry = useTelemetry();
    const externalHooks = useExternalHooks();
    const toast = useToast();
    const message = useMessage();
    const documentTitle = useDocumentTitle();
    const workflowSaving = useWorkflowSaving({ router });
    const nodeHelpers = useNodeHelpers();
    const nodeTypesStore = useNodeTypesStore();
    const uiStore = useUIStore();
    const workflowsStore = useWorkflowsStore();
    const sourceControlStore = useSourceControlStore();
    const nodeCreatorStore = useNodeCreatorStore();
    const settingsStore = useSettingsStore();
    const credentialsStore = useCredentialsStore();
    const environmentsStore = useEnvironmentsStore();
    const externalSecretsStore = useExternalSecretsStore();
    const rootStore = useRootStore();
    const executionsStore = useExecutionsStore();
    const canvasStore = useCanvasStore();
    const npsSurveyStore = useNpsSurveyStore();
    const historyStore = useHistoryStore();
    const projectsStore = useProjectsStore();
    const usersStore = useUsersStore();
    const tagsStore = useTagsStore();
    const pushConnectionStore = usePushConnectionStore();
    const ndvStore = useNDVStore();
    const focusPanelStore = useFocusPanelStore();
    const builderStore = useBuilderStore();
    const posthogStore = usePostHog();
    const agentRequestStore = useAgentRequestStore();
    const logsStore = useLogsStore();
    const aiTemplatesStarterCollectionStore = useAITemplatesStarterCollectionStore();
    const readyToRunWorkflowsStore = useReadyToRunWorkflowsStore();
    const experimentalNdvStore = useExperimentalNdvStore();
    const workflowState = useWorkflowState();
    provide(WorkflowStateKey, workflowState);
    const { addBeforeUnloadEventBindings, removeBeforeUnloadEventBindings } = useBeforeUnload({
      route
    });
    const { registerCustomAction, unregisterCustomAction } = useGlobalLinkActions();
    const { runWorkflow, runEntireWorkflow, stopCurrentExecution, stopWaitingForWebhook } = useRunWorkflow({ router });
    const {
      updateNodePosition,
      updateNodesPosition,
      tidyUp,
      revertUpdateNodePosition,
      renameNode,
      revertRenameNode,
      revertReplaceNodeParameters,
      setNodeActive,
      setNodeSelected,
      toggleNodesDisabled,
      revertToggleNodeDisabled,
      toggleNodesPinned,
      setNodeParameters,
      deleteNode,
      deleteNodes,
      copyNodes,
      cutNodes,
      duplicateNodes,
      revertDeleteNode,
      revertAddNode,
      createConnection,
      revertCreateConnection,
      deleteConnection,
      revertDeleteConnection,
      revalidateNodeInputConnections,
      revalidateNodeOutputConnections,
      setNodeActiveByName,
      clearNodeActive,
      tryToOpenSubworkflowInNewTab,
      importWorkflowData,
      fetchWorkflowDataFromUrl,
      resetWorkspace,
      initializeWorkspace,
      openExecution,
      editableWorkflow,
      editableWorkflowObject,
      lastClickPosition,
      startChat,
      addNodesAndConnections,
      fitView,
      openWorkflowTemplate,
      openWorkflowTemplateFromJSON
    } = useCanvasOperations();
    const { extractWorkflow } = useWorkflowExtraction();
    const { applyExecutionData } = useExecutionDebugging();
    const { fetchAndSetParentFolder } = useParentFolder();
    useClipboard({ onPaste: onClipboardPaste });
    useKeybindings({
      ctrl_alt_o: () => uiStore.openModal(ABOUT_MODAL_KEY)
    });
    const canvasRef = useTemplateRef("canvas");
    const isLoading = ref(true);
    const readOnlyNotification = ref(null);
    const isProductionExecutionPreview = ref(false);
    const isExecutionPreview = ref(false);
    const canOpenNDV = ref(true);
    const hideNodeIssues = ref(false);
    const fallbackNodes = ref([]);
    const initializedWorkflowId = ref();
    const workflowId = computed(() => {
      const workflowIdParam = route.params.name;
      return [PLACEHOLDER_EMPTY_WORKFLOW_ID, NEW_WORKFLOW_ID].includes(workflowIdParam) ? void 0 : workflowIdParam;
    });
    const routeNodeId = computed(() => route.params.nodeId);
    const isNewWorkflowRoute = computed(() => route.name === VIEWS.NEW_WORKFLOW || !workflowId.value);
    const isWorkflowRoute = computed(() => !!route?.meta?.nodeView || isDemoRoute.value);
    const isDemoRoute = computed(() => route.name === VIEWS.DEMO);
    const isReadOnlyRoute = computed(() => !!route?.meta?.readOnlyCanvas);
    const isReadOnlyEnvironment = computed(() => {
      return sourceControlStore.preferences.branchReadOnly;
    });
    const isNDVV2 = computed(
      () => posthogStore.isVariantEnabled(
        NDV_UI_OVERHAUL_EXPERIMENT.name,
        NDV_UI_OVERHAUL_EXPERIMENT.variant
      )
    );
    const isCanvasReadOnly = computed(() => {
      return isDemoRoute.value || isReadOnlyEnvironment.value || !(workflowPermissions.value.update ?? projectPermissions.value.workflow.update) || editableWorkflow.value.isArchived || builderStore.streaming;
    });
    const showFallbackNodes = computed(() => triggerNodes.value.length === 0);
    const keyBindingsEnabled = computed(() => {
      return !ndvStore.activeNode && uiStore.activeModals.length === 0;
    });
    const isLogsPanelOpen = computed(() => logsStore.isOpen);
    async function initializeData() {
      const loadPromises = (() => {
        if (settingsStore.isPreviewMode && isDemoRoute.value) return [];
        const promises = [
          workflowsStore.fetchActiveWorkflows(),
          credentialsStore.fetchAllCredentials(),
          credentialsStore.fetchCredentialTypes(true)
        ];
        if (settingsStore.isEnterpriseFeatureEnabled[EnterpriseEditionFeature.Variables]) {
          promises.push(environmentsStore.fetchAllVariables());
        }
        if (settingsStore.isEnterpriseFeatureEnabled[EnterpriseEditionFeature.ExternalSecrets]) {
          promises.push(externalSecretsStore.fetchAllSecrets());
        }
        return promises;
      })();
      if (nodeTypesStore.allNodeTypes.length === 0) {
        loadPromises.push(nodeTypesStore.getNodeTypes());
      }
      try {
        await Promise.all(loadPromises);
        void nodeTypesStore.fetchCommunityNodePreviews();
      } catch (error) {
        toast.showError(
          error,
          i18n.baseText("nodeView.showError.mounted1.title"),
          i18n.baseText("nodeView.showError.mounted1.message") + ":"
        );
        return;
      }
    }
    async function initializeRoute(force = false) {
      if (route.query.action === "workflowSave") {
        uiStore.stateIsDirty = false;
        await router.replace({
          query: { ...route.query, action: void 0 }
        });
        return;
      }
      if (route.query.action === "addEvaluationTrigger") {
        nodeCreatorStore.openNodeCreatorForTriggerNodes(
          NODE_CREATOR_OPEN_SOURCES.ADD_EVALUATION_TRIGGER_BUTTON
        );
      } else if (route.query.action === "addEvaluationNode") {
        nodeCreatorStore.openNodeCreatorForActions(
          EVALUATION_NODE_TYPE,
          NODE_CREATOR_OPEN_SOURCES.ADD_EVALUATION_NODE_BUTTON
        );
      } else if (route.query.action === "executeEvaluation") {
        if (evaluationTriggerNode.value) {
          void runEntireWorkflow("node", evaluationTriggerNode.value.name);
        }
      }
      const isAlreadyInitialized = !force && initializedWorkflowId.value && [NEW_WORKFLOW_ID, workflowId.value].includes(initializedWorkflowId.value);
      if (uiStore.isBlankRedirect) {
        uiStore.isBlankRedirect = false;
      } else if (route.name === VIEWS.TEMPLATE_IMPORT) {
        const loadWorkflowFromJSON = route.query.fromJson === "true";
        const templateId = route.params.id;
        if (!templateId) {
          return;
        }
        if (loadWorkflowFromJSON) {
          const workflow = getSampleWorkflowByTemplateId(templateId.toString());
          if (!workflow) {
            toast.showError(
              new Error(i18n.baseText("nodeView.couldntLoadWorkflow.invalidWorkflowObject")),
              i18n.baseText("nodeView.couldntImportWorkflow")
            );
            await router.replace({ name: VIEWS.NEW_WORKFLOW });
            return;
          }
          await openWorkflowTemplateFromJSON(workflow);
        } else {
          await openWorkflowTemplate(templateId.toString());
        }
      } else if (isWorkflowRoute.value) {
        if (!isAlreadyInitialized) {
          historyStore.reset();
          if (!isDemoRoute.value) {
            await loadCredentials();
          }
          if (isNewWorkflowRoute.value || !workflowId.value) {
            if (route.meta?.nodeView === true) {
              await initializeWorkspaceForNewWorkflow();
            }
            return;
          }
          await initializeWorkspaceForExistingWorkflow(workflowId.value);
          void nextTick(() => {
            updateNodesIssues();
          });
        }
        if (route.name === VIEWS.EXECUTION_DEBUG) {
          await initializeDebugMode();
        }
      }
    }
    async function initializeWorkspaceForNewWorkflow() {
      resetWorkspace();
      const parentFolderId = route.query.parentFolderId;
      await workflowState.getNewWorkflowDataAndMakeShareable(
        void 0,
        projectsStore.currentProjectId,
        parentFolderId
      );
      await projectsStore.refreshCurrentProject();
      await fetchAndSetParentFolder(parentFolderId);
      uiStore.nodeViewInitialized = true;
      initializedWorkflowId.value = NEW_WORKFLOW_ID;
    }
    async function initializeWorkspaceForExistingWorkflow(id) {
      try {
        const workflowData = await workflowsStore.fetchWorkflow(id);
        openWorkflow(workflowData);
        if (workflowData.parentFolder) {
          workflowsStore.setParentFolder(workflowData.parentFolder);
        }
        if (workflowData.meta?.onboardingId) {
          trackOpenWorkflowFromOnboardingTemplate();
        }
        if (workflowData.meta?.templateId?.startsWith("035_template_onboarding")) {
          aiTemplatesStarterCollectionStore.trackUserOpenedWorkflow(
            workflowData.meta.templateId.split("-").pop() ?? ""
          );
        }
        if (workflowData.meta?.templateId?.startsWith("37_onboarding_experiments_batch_aug11")) {
          readyToRunWorkflowsStore.trackOpenWorkflow(
            workflowData.meta.templateId.split("-").pop() ?? ""
          );
        }
        await projectsStore.setProjectNavActiveIdByWorkflowHomeProject(
          workflowData.homeProject,
          workflowData.sharedWithProjects
        );
      } catch (error) {
        if (error.httpStatusCode === 404) {
          return await router.replace({
            name: VIEWS.ENTITY_NOT_FOUND,
            params: { entityType: "workflow" }
          });
        }
        if (error.httpStatusCode === 403) {
          return await router.replace({
            name: VIEWS.ENTITY_UNAUTHORIZED,
            params: { entityType: "workflow" }
          });
        }
        toast.showError(error, i18n.baseText("openWorkflow.workflowNotFoundError"));
        void router.push({
          name: VIEWS.NEW_WORKFLOW
        });
      } finally {
        uiStore.nodeViewInitialized = true;
        initializedWorkflowId.value = workflowId.value;
      }
    }
    function updateNodesIssues() {
      nodeHelpers.updateNodesInputIssues();
      nodeHelpers.updateNodesCredentialsIssues();
      nodeHelpers.updateNodesParameterIssues();
    }
    function openWorkflow(data) {
      resetWorkspace();
      documentTitle.setDocumentTitle(data.name, "IDLE");
      initializeWorkspace(data);
      void externalHooks.run("workflow.open", {
        workflowId: data.id,
        workflowName: data.name
      });
      fitView();
    }
    function trackOpenWorkflowFromOnboardingTemplate() {
      telemetry.track(
        `User opened workflow from onboarding template with ID ${editableWorkflow.value.meta?.onboardingId}`,
        {
          workflow_id: workflowId.value
        }
      );
    }
    const triggerNodes = computed(() => {
      return editableWorkflow.value.nodes.filter(
        (node) => node.type === START_NODE_TYPE || nodeTypesStore.isTriggerNode(node.type)
      );
    });
    const containsTriggerNodes = computed(() => triggerNodes.value.length > 0);
    const allTriggerNodesDisabled = computed(() => {
      const disabledTriggerNodes = triggerNodes.value.filter((node) => node.disabled);
      return disabledTriggerNodes.length === triggerNodes.value.length;
    });
    function onTidyUp(event, options) {
      tidyUp(event, options);
    }
    function onExtractWorkflow(nodeIds) {
      extractWorkflow(nodeIds);
    }
    function onUpdateNodesPosition(events) {
      updateNodesPosition(events, { trackHistory: true });
    }
    function onUpdateNodePosition(id, position) {
      updateNodePosition(id, position, { trackHistory: true });
    }
    function onRevertNodePosition({ nodeName, position }) {
      revertUpdateNodePosition(nodeName, { x: position[0], y: position[1] });
    }
    function onDeleteNode(id) {
      const matchedFallbackNode = fallbackNodes.value.findIndex((node) => node.id === id);
      if (matchedFallbackNode >= 0) {
        fallbackNodes.value.splice(matchedFallbackNode, 1);
      } else {
        deleteNode(id, { trackHistory: true });
      }
    }
    function onDeleteNodes(ids) {
      deleteNodes(ids);
    }
    function onRevertDeleteNode({ node }) {
      revertDeleteNode(node);
    }
    function onToggleNodeDisabled(id) {
      if (!checkIfEditingIsAllowed()) {
        return;
      }
      toggleNodesDisabled([id]);
    }
    function onRevertToggleNodeDisabled({ nodeName }) {
      revertToggleNodeDisabled(nodeName);
    }
    function onToggleNodesDisabled(ids) {
      if (!checkIfEditingIsAllowed()) {
        return;
      }
      toggleNodesDisabled(ids);
    }
    function onClickNode(_id, event) {
      lastClickPosition.value = [event.x, event.y];
      closeNodeCreator();
    }
    function onSetNodeActivated(id, event) {
      if (event?.metaKey || event?.ctrlKey) {
        const didOpen = tryToOpenSubworkflowInNewTab(id);
        if (didOpen) {
          return;
        }
      }
      setNodeActive(id, "canvas_default_view");
    }
    function onOpenSubWorkflow(id) {
      tryToOpenSubworkflowInNewTab(id);
    }
    function onSetNodeDeactivated() {
      clearNodeActive();
    }
    function onSetNodeSelected(id) {
      closeNodeCreator();
      setNodeSelected(id);
    }
    async function onCopyNodes(ids) {
      await copyNodes(ids);
      toast.showMessage({ title: i18n.baseText("generic.copiedToClipboard"), type: "success" });
    }
    async function onClipboardPaste(plainTextData) {
      if (getNodeViewTab(route) !== MAIN_HEADER_TABS.WORKFLOW || !keyBindingsEnabled.value || !checkIfEditingIsAllowed()) {
        return;
      }
      let workflowData = null;
      if (plainTextData.match(VALID_WORKFLOW_IMPORT_URL_REGEX)) {
        const importConfirm = await message.confirm(
          i18n.baseText("nodeView.confirmMessage.onClipboardPasteEvent.message", {
            interpolate: { plainTextData }
          }),
          i18n.baseText("nodeView.confirmMessage.onClipboardPasteEvent.headline"),
          {
            type: "warning",
            confirmButtonText: i18n.baseText(
              "nodeView.confirmMessage.onClipboardPasteEvent.confirmButtonText"
            ),
            cancelButtonText: i18n.baseText(
              "nodeView.confirmMessage.onClipboardPasteEvent.cancelButtonText"
            )
          }
        );
        if (importConfirm !== MODAL_CONFIRM) {
          return;
        }
        workflowData = await fetchWorkflowDataFromUrl(plainTextData);
      } else {
        workflowData = jsonParse(plainTextData, { fallbackValue: null });
      }
      if (!workflowData) {
        return;
      }
      const result = await importWorkflowData(workflowData, "paste", {
        importTags: false,
        viewport: viewportBoundaries.value
      });
      selectNodes(result.nodes?.map((node) => node.id) ?? []);
    }
    async function onCutNodes(ids) {
      if (isCanvasReadOnly.value) {
        await copyNodes(ids);
      } else {
        await cutNodes(ids);
      }
    }
    async function onDuplicateNodes(ids) {
      if (!checkIfEditingIsAllowed()) {
        return;
      }
      const newIds = await duplicateNodes(ids, {
        viewport: viewportBoundaries.value
      });
      selectNodes(newIds);
    }
    function onPinNodes(ids, source) {
      if (!checkIfEditingIsAllowed()) {
        return;
      }
      toggleNodesPinned(ids, source);
    }
    async function onSaveWorkflow() {
      const workflowIsSaved = !uiStore.stateIsDirty && !workflowsStore.isNewWorkflow;
      const workflowIsArchived = workflowsStore.workflow.isArchived;
      if (workflowIsSaved || workflowIsArchived) {
        return;
      }
      const saved = await workflowSaving.saveCurrentWorkflow();
      if (saved) {
        canvasEventBus.emit("saved:workflow");
      }
    }
    function onContextMenuAction(action, nodeIds) {
      canvasRef.value?.executeContextMenuAction(action, nodeIds);
    }
    function addWorkflowSavedEventBindings() {
      canvasEventBus.on("saved:workflow", npsSurveyStore.fetchPromptsData);
      canvasEventBus.on("saved:workflow", onSaveFromWithinNDV);
    }
    function removeWorkflowSavedEventBindings() {
      canvasEventBus.off("saved:workflow", npsSurveyStore.fetchPromptsData);
      canvasEventBus.off("saved:workflow", onSaveFromWithinNDV);
      canvasEventBus.off("saved:workflow", onSaveFromWithinExecutionDebug);
    }
    async function onSaveFromWithinNDV() {
      if (ndvStore.activeNodeName) {
        toast.showMessage({
          title: i18n.baseText("generic.workflowSaved"),
          type: "success"
        });
      }
    }
    async function onCreateWorkflow() {
      await router.push({ name: VIEWS.NEW_WORKFLOW });
    }
    function onRenameNode(name) {
      if (ndvStore.activeNode?.name) {
        void renameNode(ndvStore.activeNode.name, name);
      }
    }
    async function onOpenRenameNodeModal(id) {
      const currentName = workflowsStore.getNodeById(id)?.name ?? "";
      const activeElement = document.activeElement;
      if (activeElement && shouldIgnoreCanvasShortcut(activeElement)) {
        return;
      }
      if (!keyBindingsEnabled.value || document.querySelector(".rename-prompt")) return;
      try {
        const promptResponsePromise = message.prompt(
          i18n.baseText("nodeView.prompt.newName") + ":",
          i18n.baseText("nodeView.prompt.renameNode") + `: ${currentName}`,
          {
            customClass: "rename-prompt",
            confirmButtonText: i18n.baseText("nodeView.prompt.rename"),
            cancelButtonText: i18n.baseText("nodeView.prompt.cancel"),
            inputErrorMessage: i18n.baseText("nodeView.prompt.invalidName"),
            inputValue: currentName,
            inputValidator: (value) => {
              if (!value.trim()) {
                return i18n.baseText("nodeView.prompt.invalidName");
              }
              return true;
            }
          }
        );
        await nextTick();
        const nameInput = document.querySelector(".rename-prompt .el-input__inner");
        nameInput?.focus();
        nameInput?.select();
        let shouldSaveAfterRename = false;
        const handleKeyDown = (e) => {
          if ((e.ctrlKey || e.metaKey) && e.key === "s") {
            e.preventDefault();
            shouldSaveAfterRename = true;
            nameInput?.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter" }));
          }
        };
        nameInput?.addEventListener("keydown", handleKeyDown);
        const promptResponse = await promptResponsePromise;
        nameInput?.removeEventListener("keydown", handleKeyDown);
        if (promptResponse.action === MODAL_CONFIRM) {
          await renameNode(currentName, promptResponse.value, { trackHistory: true });
          if (shouldSaveAfterRename) await onSaveWorkflow();
        }
      } catch (e) {
      }
    }
    async function onRevertRenameNode({
      currentName,
      newName
    }) {
      await revertRenameNode(currentName, newName);
    }
    async function onRevertReplaceNodeParameters({
      nodeId,
      currentProperties,
      newProperties
    }) {
      await revertReplaceNodeParameters(nodeId, currentProperties, newProperties);
    }
    function onUpdateNodeParameters(id, parameters) {
      setNodeParameters(id, parameters);
    }
    function onUpdateNodeInputs(id) {
      revalidateNodeInputConnections(id);
    }
    function onUpdateNodeOutputs(id) {
      revalidateNodeOutputConnections(id);
    }
    function onClickNodeAdd(source, sourceHandle) {
      nodeCreatorStore.openNodeCreatorForConnectingNode({
        connection: {
          source,
          sourceHandle
        },
        eventSource: NODE_CREATOR_OPEN_SOURCES.PLUS_ENDPOINT
      });
    }
    async function loadCredentials() {
      let options;
      if (workflowId.value) {
        options = { workflowId: workflowId.value };
      } else {
        const queryParam = typeof route.query?.projectId === "string" ? route.query?.projectId : void 0;
        const projectId = queryParam ?? projectsStore.personalProject?.id;
        if (projectId === void 0) {
          throw new Error(
            "Could not find projectId in the query nor could I find the personal project in the project store"
          );
        }
        options = { projectId };
      }
      await credentialsStore.fetchAllCredentialsForWorkflow(options);
    }
    function onCreateConnection(connection) {
      createConnection(connection, { trackHistory: true });
    }
    function onRevertCreateConnection({ connection }) {
      revertCreateConnection(connection);
    }
    function onCreateConnectionCancelled(event, position, mouseEvent) {
      const preventDefault = (mouseEvent?.target).classList?.contains("clickable");
      if (preventDefault) {
        return;
      }
      uiStore.lastInteractedWithNodeId = event.nodeId;
      uiStore.lastInteractedWithNodeHandle = event.handleId;
      uiStore.lastCancelledConnectionPosition = [position.x, position.y];
      setTimeout(() => {
        if (!event.nodeId) return;
        nodeCreatorStore.openNodeCreatorForConnectingNode({
          connection: {
            source: event.nodeId,
            sourceHandle: event.handleId
          },
          eventSource: NODE_CREATOR_OPEN_SOURCES.NODE_CONNECTION_DROP
        });
      });
    }
    function onDeleteConnection(connection) {
      deleteConnection(connection, { trackHistory: true });
    }
    function onRevertDeleteConnection({ connection }) {
      revertDeleteConnection(connection);
    }
    async function importWorkflowExact({ workflow: workflowData }) {
      if (!workflowData.nodes || !workflowData.connections) {
        throw new Error("Invalid workflow object");
      }
      resetWorkspace();
      await initializeData();
      initializeWorkspace({
        ...workflowData,
        nodes: getNodesWithNormalizedPosition(workflowData.nodes)
      });
      fitView();
    }
    async function onImportWorkflowDataEvent(data) {
      const workflowData = data.data;
      const trackEvents = typeof data.trackEvents === "boolean" ? data.trackEvents : void 0;
      await importWorkflowData(workflowData, "file", {
        viewport: viewportBoundaries.value,
        regenerateIds: data.regenerateIds === true || data.regenerateIds === void 0,
        trackEvents
      });
      await nextTick();
      fitView();
      selectNodes(workflowData.nodes?.map((node) => node.id) ?? []);
      if (data.tidyUp) {
        const nodesIdsToTidyUp = data.nodesIdsToTidyUp;
        setTimeout(async () => {
          canvasEventBus.emit("tidyUp", {
            source: "import-workflow-data",
            nodeIdsFilter: nodesIdsToTidyUp,
            trackEvents
          });
          await nextTick();
          fitView();
        }, 0);
      }
    }
    async function onImportWorkflowUrlEvent(data) {
      const workflowData = await fetchWorkflowDataFromUrl(data.url);
      if (!workflowData) {
        return;
      }
      await importWorkflowData(workflowData, "url", {
        viewport: viewportBoundaries.value
      });
      fitView();
      selectNodes(workflowData.nodes?.map((node) => node.id) ?? []);
    }
    function addImportEventBindings() {
      nodeViewEventBus.on("importWorkflowData", onImportWorkflowDataEvent);
      nodeViewEventBus.on("importWorkflowUrl", onImportWorkflowUrlEvent);
      nodeViewEventBus.on("openChat", onOpenChat);
    }
    function removeImportEventBindings() {
      nodeViewEventBus.off("importWorkflowData", onImportWorkflowDataEvent);
      nodeViewEventBus.off("importWorkflowUrl", onImportWorkflowUrlEvent);
      nodeViewEventBus.off("openChat", onOpenChat);
    }
    const nodeCreatorReplaceTargetId = ref(void 0);
    function onNodeCreatorClose() {
      nodeCreatorReplaceTargetId.value = void 0;
    }
    async function onAddNodesAndConnections({ nodes, connections }, dragAndDrop = false, position) {
      if (!checkIfEditingIsAllowed()) {
        return;
      }
      if (nodeCreatorReplaceTargetId.value !== void 0) {
        uiStore.resetLastInteractedWith();
        nodes = nodes.map((x) => ({
          ...x,
          openDetail: false
        }));
      }
      const { addedNodes } = await addNodesAndConnections(nodes, connections, {
        dragAndDrop,
        position,
        viewport: viewportBoundaries.value,
        telemetry: true,
        replaceNodeId: nodeCreatorReplaceTargetId.value
      });
      if (addedNodes.length > 0) {
        const lastAddedNodeId = addedNodes[addedNodes.length - 1].id;
        selectNodes([lastAddedNodeId]);
      }
    }
    async function onRevertAddNode({ node }) {
      await revertAddNode(node.name);
    }
    function onSwitchActiveNode(nodeName) {
      const node = workflowsStore.getNodeByName(nodeName);
      if (!node) return;
      setNodeActiveByName(nodeName, "other");
      selectNodes([node.id]);
    }
    function onOpenSelectiveNodeCreator(node, connectionType, connectionIndex = 0) {
      nodeCreatorStore.openSelectiveNodeCreator({ node, connectionType, connectionIndex });
    }
    function onToggleNodeCreator(options) {
      nodeCreatorStore.setNodeCreatorState(options);
      if (!options.createNodeActive) {
        nodeCreatorReplaceTargetId.value = void 0;
        if (!options.hasAddedNodes) uiStore.resetLastInteractedWith();
      }
    }
    function onOpenNodeCreatorFromCanvas(source) {
      onToggleNodeCreator({ createNodeActive: true, source });
    }
    function onOpenNodeCreatorForTriggerNodes(source) {
      nodeCreatorStore.openNodeCreatorForTriggerNodes(source);
    }
    function onToggleFocusPanel() {
      focusPanelStore.toggleFocusPanel();
      telemetry.track(`User ${focusPanelStore.focusPanelActive ? "opened" : "closed"} focus panel`, {
        source: "canvasKeyboardShortcut",
        parameters: focusPanelStore.focusedNodeParametersInTelemetryFormat,
        parameterCount: focusPanelStore.focusedNodeParametersInTelemetryFormat.length
      });
    }
    function closeNodeCreator() {
      if (nodeCreatorStore.isCreateNodeActive) {
        nodeCreatorStore.isCreateNodeActive = false;
      }
    }
    function onCreateSticky() {
      void onAddNodesAndConnections({ nodes: [{ type: STICKY_NODE_TYPE }], connections: [] });
    }
    function onClickConnectionAdd(connection) {
      nodeCreatorStore.openNodeCreatorForConnectingNode({
        connection,
        eventSource: NODE_CREATOR_OPEN_SOURCES.NODE_CONNECTION_ACTION
      });
    }
    function onClickReplaceNode(nodeId) {
      const node = workflowsStore.getNodeById(nodeId);
      if (!node) return;
      const nodeType = nodeTypesStore.getNodeType(node.type);
      if (!nodeType) return;
      nodeCreatorReplaceTargetId.value = nodeId;
      if (isTriggerNode(nodeType)) {
        nodeCreatorStore.openNodeCreatorForTriggerNodes(NODE_CREATOR_OPEN_SOURCES.REPLACE_NODE_ACTION);
      } else {
        const inputs = getNodeInputs(editableWorkflowObject.value, node, nodeType).map(
          (output) => typeof output === "string" ? output : output.type
        );
        const outputs = getNodeOutputs(editableWorkflowObject.value, node, nodeType).map(
          (output) => typeof output === "string" ? output : output.type
        );
        if (inputs[0] && outputs[0] && inputs[0] !== outputs[0]) {
          nodeCreatorStore.openNodeCreatorForRegularNodes(
            NODE_CREATOR_OPEN_SOURCES.REPLACE_NODE_ACTION
          );
        } else {
          nodeCreatorStore.openSelectiveNodeCreator({
            connectionType: inputs[0] ?? outputs[0],
            node: node.name
          });
        }
      }
    }
    const workflowPermissions = computed(() => {
      return workflowId.value ? getResourcePermissions(workflowsStore.getWorkflowById(workflowId.value)?.scopes).workflow : {};
    });
    const projectPermissions = computed(() => {
      const project = route.query?.projectId ? projectsStore.myProjects.find((p) => p.id === route.query.projectId) : projectsStore.currentProject ?? projectsStore.personalProject;
      return getResourcePermissions(project?.scopes);
    });
    const isStoppingExecution = ref(false);
    const isWorkflowRunning = computed(() => workflowsStore.isWorkflowRunning);
    const isExecutionWaitingForWebhook = computed(() => workflowsStore.executionWaitingForWebhook);
    const isExecutionDisabled = computed(() => {
      if (containsChatTriggerNodes.value && isOnlyChatTriggerNodeActive.value && !chatTriggerNodePinnedData.value) {
        return true;
      }
      return !containsTriggerNodes.value || allTriggerNodesDisabled.value;
    });
    const isRunWorkflowButtonVisible = computed(
      () => !isOnlyChatTriggerNodeActive.value || chatTriggerNodePinnedData.value
    );
    const isStopExecutionButtonVisible = computed(
      () => isWorkflowRunning.value && !isExecutionWaitingForWebhook.value
    );
    const isStopWaitingForWebhookButtonVisible = computed(
      () => isWorkflowRunning.value && isExecutionWaitingForWebhook.value
    );
    async function onRunWorkflowToNode(id) {
      const node = workflowsStore.getNodeById(id);
      if (!node) return;
      if (needsAgentInput(node) && nodeTypesStore.isToolNode(node.type)) {
        uiStore.openModalWithData({
          name: FROM_AI_PARAMETERS_MODAL_KEY,
          data: {
            nodeName: node.name
          }
        });
      } else {
        trackRunWorkflowToNode(node);
        agentRequestStore.clearAgentRequests(workflowsStore.workflowId, node.id);
        void runWorkflow({ destinationNode: node.name, source: "Node.executeNode" });
      }
    }
    function trackRunWorkflowToNode(node) {
      const telemetryPayload = {
        node_type: node.type,
        workflow_id: workflowsStore.workflowId,
        source: "canvas",
        push_ref: ndvStore.pushRef
      };
      telemetry.track("User clicked execute node button", telemetryPayload);
      void externalHooks.run("nodeView.onRunNode", telemetryPayload);
    }
    async function onOpenExecution(executionId, nodeId) {
      canvasStore.startLoading();
      resetWorkspace();
      await initializeData();
      const data = await openExecution(executionId, nodeId);
      if (!data) {
        return;
      }
      void nextTick(() => {
        updateNodesIssues();
      });
      canvasStore.stopLoading();
      fitView();
      canvasEventBus.emit("open:execution", data);
      void externalHooks.run("execution.open", {
        workflowId: data.workflowData.id,
        workflowName: data.workflowData.name,
        executionId
      });
      telemetry.track("User opened read-only execution", {
        workflow_id: data.workflowData.id,
        execution_mode: data.mode,
        execution_finished: data.finished
      });
    }
    function onExecutionOpenedWithError(data) {
      if (!data.finished && data.data?.resultData?.error) {
        let nodeErrorFound = false;
        if (data.data.resultData.runData) {
          const runData = data.data.resultData.runData;
          errorCheck: for (const nodeName of Object.keys(runData)) {
            for (const taskData of runData[nodeName]) {
              if (taskData.error) {
                nodeErrorFound = true;
                break errorCheck;
              }
            }
          }
        }
        if (!nodeErrorFound && (data.data.resultData.error.stack ?? data.data.resultData.error.message)) {
          console.error(`Execution ${data.id} error:`);
          console.error(data.data.resultData.error.stack);
          toast.showMessage({
            title: i18n.baseText("nodeView.showError.workflowError"),
            message: data.data.resultData.error.message,
            type: "error",
            duration: 0
          });
        }
      }
    }
    function onExecutionOpenedWithWaitTill(data) {
      if (data.waitTill) {
        toast.showMessage({
          title: i18n.baseText("nodeView.thisExecutionHasntFinishedYet"),
          message: h(_sfc_main$2),
          type: "warning",
          duration: 0
        });
      }
    }
    function addExecutionOpenedEventBindings() {
      canvasEventBus.on("open:execution", onExecutionOpenedWithError);
      canvasEventBus.on("open:execution", onExecutionOpenedWithWaitTill);
    }
    function removeExecutionOpenedEventBindings() {
      canvasEventBus.off("open:execution", onExecutionOpenedWithError);
      canvasEventBus.off("open:execution", onExecutionOpenedWithWaitTill);
    }
    async function onStopExecution() {
      isStoppingExecution.value = true;
      await stopCurrentExecution();
      isStoppingExecution.value = false;
    }
    async function onStopWaitingForWebhook() {
      await stopWaitingForWebhook();
    }
    function onRunWorkflowButtonMouseEnter() {
      nodeViewEventBus.emit("runWorkflowButton:mouseenter");
    }
    function onRunWorkflowButtonMouseLeave() {
      nodeViewEventBus.emit("runWorkflowButton:mouseleave");
    }
    const chatTriggerNode = computed(() => {
      return editableWorkflow.value.nodes.find((node) => node.type === CHAT_TRIGGER_NODE_TYPE);
    });
    const containsChatTriggerNodes = computed(() => {
      return !isExecutionWaitingForWebhook.value && !!editableWorkflow.value.nodes.find(
        (node) => [MANUAL_CHAT_TRIGGER_NODE_TYPE, CHAT_TRIGGER_NODE_TYPE].includes(node.type) && node.disabled !== true
      );
    });
    const isOnlyChatTriggerNodeActive = computed(() => {
      return triggerNodes.value.every((node) => node.disabled || node.type === CHAT_TRIGGER_NODE_TYPE);
    });
    const chatTriggerNodePinnedData = computed(() => {
      if (!chatTriggerNode.value) return null;
      return workflowsStore.pinDataByNodeName(chatTriggerNode.value.name);
    });
    function onOpenChat() {
      startChat("main");
    }
    const evaluationTriggerNode = computed(() => {
      return editableWorkflow.value.nodes.find((node) => node.type === EVALUATION_TRIGGER_NODE_TYPE);
    });
    function addUndoRedoEventBindings() {
      historyBus.on("nodeMove", onRevertNodePosition);
      historyBus.on("revertAddNode", onRevertAddNode);
      historyBus.on("revertRemoveNode", onRevertDeleteNode);
      historyBus.on("revertAddConnection", onRevertCreateConnection);
      historyBus.on("revertRemoveConnection", onRevertDeleteConnection);
      historyBus.on("revertRenameNode", onRevertRenameNode);
      historyBus.on("revertReplaceNodeParameters", onRevertReplaceNodeParameters);
      historyBus.on("enableNodeToggle", onRevertToggleNodeDisabled);
    }
    function removeUndoRedoEventBindings() {
      historyBus.off("nodeMove", onRevertNodePosition);
      historyBus.off("revertAddNode", onRevertAddNode);
      historyBus.off("revertRemoveNode", onRevertDeleteNode);
      historyBus.off("revertAddConnection", onRevertCreateConnection);
      historyBus.off("revertRemoveConnection", onRevertDeleteConnection);
      historyBus.off("revertRenameNode", onRevertRenameNode);
      historyBus.off("revertReplaceNodeParameters", onRevertReplaceNodeParameters);
      historyBus.off("enableNodeToggle", onRevertToggleNodeDisabled);
    }
    async function onSourceControlPull() {
      try {
        await Promise.all([
          environmentsStore.fetchAllVariables(),
          tagsStore.fetchAll(),
          loadCredentials()
        ]);
        if (workflowId.value && !uiStore.stateIsDirty) {
          const workflowData = await workflowsStore.fetchWorkflow(workflowId.value);
          if (workflowData) {
            documentTitle.setDocumentTitle(workflowData.name, "IDLE");
            openWorkflow(workflowData);
          }
        }
      } catch (error) {
        console.error(error);
      }
    }
    function addSourceControlEventBindings() {
      sourceControlEventBus.on("pull", onSourceControlPull);
    }
    function removeSourceControlEventBindings() {
      sourceControlEventBus.off("pull", onSourceControlPull);
    }
    function addCommandBarEventBindings() {
      canvasEventBus.on("create:sticky", onCreateSticky);
    }
    function removeCommandBarEventBindings() {
      canvasEventBus.off("create:sticky", onCreateSticky);
    }
    function addPostMessageEventBindings() {
      window.addEventListener("message", onPostMessageReceived);
    }
    function removePostMessageEventBindings() {
      window.removeEventListener("message", onPostMessageReceived);
    }
    function emitPostMessageReady() {
      if (window.parent) {
        window.parent.postMessage(
          JSON.stringify({ command: "n8nReady", version: rootStore.versionCli }),
          "*"
        );
      }
    }
    async function onPostMessageReceived(messageEvent) {
      if (!messageEvent || typeof messageEvent.data !== "string" || !messageEvent.data?.includes?.('"command"')) {
        return;
      }
      try {
        const json = JSON.parse(messageEvent.data);
        if (json && json.command === "openWorkflow") {
          try {
            if (json.projectId) {
              await projectsStore.fetchAndSetProject(json.projectId);
            }
            await importWorkflowExact(json);
            canOpenNDV.value = json.canOpenNDV ?? true;
            hideNodeIssues.value = json.hideNodeIssues ?? false;
            isExecutionPreview.value = false;
          } catch (e) {
            if (window.top) {
              window.top.postMessage(
                JSON.stringify({
                  command: "error",
                  message: i18n.baseText("openWorkflow.workflowImportError")
                }),
                "*"
              );
            }
            toast.showError(e, i18n.baseText("openWorkflow.workflowImportError"));
          }
        } else if (json && json.command === "openExecution") {
          try {
            if (json.projectId) {
              await projectsStore.fetchAndSetProject(json.projectId);
            }
            isProductionExecutionPreview.value = json.executionMode !== "manual" && json.executionMode !== "evaluation";
            await onOpenExecution(json.executionId, json.nodeId);
            canOpenNDV.value = json.canOpenNDV ?? true;
            hideNodeIssues.value = json.hideNodeIssues ?? false;
            isExecutionPreview.value = true;
          } catch (e) {
            if (window.top) {
              window.top.postMessage(
                JSON.stringify({
                  command: "error",
                  message: i18n.baseText("nodeView.showError.openExecution.title")
                }),
                "*"
              );
            }
            toast.showMessage({
              title: i18n.baseText("nodeView.showError.openExecution.title"),
              message: e.message,
              type: "error"
            });
          }
        } else if (json?.command === "setActiveExecution") {
          executionsStore.activeExecution = await executionsStore.fetchExecution(
            json.executionId
          );
        }
      } catch (e) {
      }
    }
    function checkIfEditingIsAllowed() {
      if (!initializedWorkflowId.value) {
        return true;
      }
      if (readOnlyNotification.value?.visible) {
        return false;
      }
      if (isReadOnlyRoute.value || isReadOnlyEnvironment.value) {
        const messageContext = isReadOnlyRoute.value ? "executions" : "workflows";
        readOnlyNotification.value = toast.showMessage({
          title: i18n.baseText(
            isReadOnlyEnvironment.value ? `readOnlyEnv.showMessage.${messageContext}.title` : "readOnly.showMessage.executions.title"
          ),
          message: i18n.baseText(
            isReadOnlyEnvironment.value ? `readOnlyEnv.showMessage.${messageContext}.message` : "readOnly.showMessage.executions.message"
          ),
          type: "info"
        });
        return false;
      }
      return true;
    }
    function checkIfRouteIsAllowed() {
      if (isReadOnlyEnvironment.value && [VIEWS.NEW_WORKFLOW, VIEWS.TEMPLATE_IMPORT].find((view) => view === route.name)) {
        void nextTick(async () => {
          resetWorkspace();
          uiStore.stateIsDirty = false;
          await router.replace({ name: VIEWS.HOMEPAGE });
        });
      }
    }
    async function initializeDebugMode() {
      documentTitle.setDocumentTitle(workflowsStore.workflowName, "DEBUG");
      if (!workflowsStore.isInDebugMode) {
        await applyExecutionData(route.params.executionId);
        workflowsStore.isInDebugMode = true;
      }
      canvasEventBus.on("saved:workflow", onSaveFromWithinExecutionDebug);
    }
    async function onSaveFromWithinExecutionDebug() {
      if (route.name !== VIEWS.EXECUTION_DEBUG) return;
      await router.replace({
        name: VIEWS.WORKFLOW,
        params: { name: workflowId.value }
      });
    }
    const viewportTransform = ref({ x: 0, y: 0, zoom: 1 });
    const viewportDimensions = ref({ width: 0, height: 0 });
    const viewportBoundaries = computed(
      () => getBounds(viewportTransform.value, viewportDimensions.value)
    );
    function onViewportChange(viewport, dimensions) {
      viewportTransform.value = viewport;
      viewportDimensions.value = dimensions;
      uiStore.nodeViewOffsetPosition = [viewport.x, viewport.y];
    }
    function selectNodes(ids) {
      setTimeout(() => canvasEventBus.emit("nodes:select", { ids }));
    }
    function onClickPane(position) {
      lastClickPosition.value = [position.x, position.y];
      onSetNodeSelected();
    }
    function onSelectionEnd(position) {
      lastClickPosition.value = [position.x, position.y];
    }
    async function onDragAndDrop(position, event) {
      if (!event.dataTransfer) {
        return;
      }
      const dropData = jsonParse(
        event.dataTransfer.getData(DRAG_EVENT_DATA_KEY)
      );
      if (dropData) {
        const insertNodePosition = [position.x, position.y];
        await onAddNodesAndConnections(dropData, true, insertNodePosition);
        onToggleNodeCreator({ createNodeActive: false, hasAddedNodes: true });
      }
    }
    function registerCustomActions() {
      registerCustomAction({
        key: "openNodeDetail",
        action: ({ node }) => {
          setNodeActiveByName(node, "other");
        }
      });
      registerCustomAction({
        key: "openSelectiveNodeCreator",
        action: ({
          creatorview: creatorView,
          connectiontype: connectionType,
          node
        }) => {
          nodeCreatorStore.openSelectiveNodeCreator({ node, connectionType, creatorView });
        }
      });
      registerCustomAction({
        key: "showNodeCreator",
        action: () => {
          ndvStore.unsetActiveNodeName();
          void nextTick(() => {
            void onOpenNodeCreatorForTriggerNodes(NODE_CREATOR_OPEN_SOURCES.TAB);
          });
        }
      });
    }
    function unregisterCustomActions() {
      unregisterCustomAction("openNodeDetail");
      unregisterCustomAction("openSelectiveNodeCreator");
      unregisterCustomAction("showNodeCreator");
    }
    function showAddFirstStepIfEnabled() {
      if (uiStore.addFirstStepOnLoad) {
        void onOpenNodeCreatorForTriggerNodes(NODE_CREATOR_OPEN_SOURCES.TRIGGER_PLACEHOLDER_BUTTON);
        uiStore.addFirstStepOnLoad = false;
      }
    }
    function updateNodeRoute(nodeId) {
      const nodeUi = workflowsStore.findNodeByPartialId(nodeId);
      if (nodeUi) {
        setNodeActive(nodeUi.id, "other");
      } else {
        toast.showToast({
          title: i18n.baseText("nodeView.showMessage.ndvUrl.missingNodes.title"),
          message: i18n.baseText("nodeView.showMessage.ndvUrl.missingNodes.content"),
          type: "warning"
        });
        void router.replace({
          name: route.name,
          params: { name: workflowId.value }
        });
      }
    }
    watch(
      () => route.name,
      async (newRouteName, oldRouteName) => {
        const force = newRouteName === VIEWS.NEW_WORKFLOW && oldRouteName === VIEWS.WORKFLOW || newRouteName === VIEWS.WORKFLOW && oldRouteName === VIEWS.NEW_WORKFLOW;
        await initializeRoute(force);
      }
    );
    watch(
      () => {
        return isLoading.value || isCanvasReadOnly.value || editableWorkflow.value.nodes.length !== 0;
      },
      (isReadOnlyOrLoading) => {
        if (isReadOnlyOrLoading) {
          fallbackNodes.value = [];
          return;
        }
        const addNodesItem = {
          id: CanvasNodeRenderType.AddNodes,
          name: CanvasNodeRenderType.AddNodes,
          type: CanvasNodeRenderType.AddNodes,
          typeVersion: 1,
          position: [0, 0],
          parameters: {}
        };
        const choicePromptItem = {
          id: CanvasNodeRenderType.ChoicePrompt,
          name: CanvasNodeRenderType.ChoicePrompt,
          type: CanvasNodeRenderType.ChoicePrompt,
          typeVersion: 1,
          position: [0, 0],
          parameters: {},
          draggable: false
        };
        fallbackNodes.value = builderStore.isAIBuilderEnabled && builderStore.isAssistantEnabled && builderStore.assistantMessages.length === 0 ? [choicePromptItem] : [addNodesItem];
      }
    );
    watch(
      () => route.params.nodeId,
      async (newId) => {
        if (typeof newId !== "string" || newId === "") ndvStore.unsetActiveNodeName();
        else {
          updateNodeRoute(newId);
        }
      }
    );
    watch(
      () => ndvStore.activeNode,
      async (val) => {
        if (![VIEWS.WORKFLOW].includes(String(route.name))) return;
        const nodeId = val?.id ? workflowsStore.getPartialIdForNode(val?.id) : "";
        if (nodeId !== route.params.nodeId) {
          await router.replace({
            name: route.name,
            params: { name: workflowId.value, nodeId }
          });
        }
      }
    );
    onBeforeRouteLeave(async (to, from, next) => {
      const toNodeViewTab = getNodeViewTab(to);
      if (toNodeViewTab === MAIN_HEADER_TABS.EXECUTIONS || from.name === VIEWS.TEMPLATE_IMPORT || toNodeViewTab === MAIN_HEADER_TABS.WORKFLOW && from.name === VIEWS.EXECUTION_DEBUG || isReadOnlyEnvironment.value) {
        next();
        return;
      }
      await useWorkflowSaving({ router }).promptSaveUnsavedWorkflowChanges(next, {
        async confirm() {
          if (from.name === VIEWS.NEW_WORKFLOW) {
            const savedWorkflowId = workflowsStore.workflowId;
            await router.replace({
              name: VIEWS.WORKFLOW,
              params: { name: savedWorkflowId }
            });
            await router.push(to);
            return false;
          }
          workflowState.setWorkflowId(PLACEHOLDER_EMPTY_WORKFLOW_ID);
          return true;
        }
      });
    });
    onBeforeMount(() => {
      if (!isDemoRoute.value) {
        pushConnectionStore.pushConnect();
      }
      addPostMessageEventBindings();
    });
    onMounted(() => {
      canvasStore.startLoading();
      documentTitle.reset();
      resetWorkspace();
      void initializeData().then(() => {
        void initializeRoute().then(() => {
          toast.showNotificationForViews([VIEWS.WORKFLOW, VIEWS.NEW_WORKFLOW]);
          if (route.query.settings) {
            uiStore.openModal(WORKFLOW_SETTINGS_MODAL_KEY);
            void router.replace({ query: { settings: void 0 } });
          }
        }).finally(() => {
          isLoading.value = false;
          canvasStore.stopLoading();
          void externalHooks.run("nodeView.mount").catch(() => {
          });
          setTimeout(() => {
            if (routeNodeId.value) {
              updateNodeRoute(routeNodeId.value);
            }
          }, 500);
          emitPostMessageReady();
        });
        void usersStore.showPersonalizationSurvey();
        checkIfRouteIsAllowed();
      });
      addSourceControlEventBindings();
      addWorkflowSavedEventBindings();
      addBeforeUnloadEventBindings();
      addImportEventBindings();
      addExecutionOpenedEventBindings();
      addCommandBarEventBindings();
      registerCustomActions();
    });
    onActivated(() => {
      addUndoRedoEventBindings();
      showAddFirstStepIfEnabled();
    });
    onDeactivated(() => {
      uiStore.closeModal(WORKFLOW_SETTINGS_MODAL_KEY);
      removeUndoRedoEventBindings();
    });
    onBeforeUnmount(() => {
      removeSourceControlEventBindings();
      removePostMessageEventBindings();
      removeWorkflowSavedEventBindings();
      removeBeforeUnloadEventBindings();
      removeImportEventBindings();
      removeExecutionOpenedEventBindings();
      removeCommandBarEventBindings();
      unregisterCustomActions();
      if (!isDemoRoute.value) {
        pushConnectionStore.pushDisconnect();
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref($style).wrapper)
      }, [
        unref(editableWorkflow) && unref(editableWorkflowObject) && !isLoading.value ? (openBlock(), createBlock(WorkflowCanvas, {
          key: 0,
          id: unref(editableWorkflow).id,
          ref: "canvas",
          workflow: unref(editableWorkflow),
          "workflow-object": unref(editableWorkflowObject),
          "fallback-nodes": fallbackNodes.value,
          "show-fallback-nodes": showFallbackNodes.value,
          "event-bus": unref(canvasEventBus),
          "read-only": isCanvasReadOnly.value,
          executing: isWorkflowRunning.value,
          "key-bindings": keyBindingsEnabled.value,
          "suppress-interaction": unref(experimentalNdvStore).isMapperOpen,
          "onUpdate:nodes:position": onUpdateNodesPosition,
          "onUpdate:node:position": onUpdateNodePosition,
          "onUpdate:node:activated": onSetNodeActivated,
          "onUpdate:node:deactivated": onSetNodeDeactivated,
          "onUpdate:node:selected": onSetNodeSelected,
          "onUpdate:node:enabled": onToggleNodeDisabled,
          "onUpdate:node:name": onOpenRenameNodeModal,
          "onUpdate:node:parameters": onUpdateNodeParameters,
          "onUpdate:node:inputs": onUpdateNodeInputs,
          "onUpdate:node:outputs": onUpdateNodeOutputs,
          "onUpdate:logsOpen": _cache[3] || (_cache[3] = ($event) => unref(logsStore).toggleOpen($event)),
          "onUpdate:logs:inputOpen": unref(logsStore).toggleInputOpen,
          "onUpdate:logs:outputOpen": unref(logsStore).toggleOutputOpen,
          "onUpdate:hasRangeSelection": unref(canvasStore).setHasRangeSelection,
          "onOpen:subWorkflow": onOpenSubWorkflow,
          "onClick:node": onClickNode,
          "onClick:node:add": onClickNodeAdd,
          "onRun:node": onRunWorkflowToNode,
          "onDelete:node": onDeleteNode,
          "onCreate:connection": onCreateConnection,
          "onCreate:connection:cancelled": onCreateConnectionCancelled,
          "onDelete:connection": onDeleteConnection,
          "onClick:connection:add": onClickConnectionAdd,
          "onClick:pane": onClickPane,
          "onCreate:node": onOpenNodeCreatorFromCanvas,
          "onCreate:sticky": onCreateSticky,
          "onDelete:nodes": onDeleteNodes,
          "onUpdate:nodes:enabled": onToggleNodesDisabled,
          "onUpdate:nodes:pin": onPinNodes,
          "onDuplicate:nodes": onDuplicateNodes,
          "onCopy:nodes": onCopyNodes,
          "onCut:nodes": onCutNodes,
          "onReplace:node": onClickReplaceNode,
          "onRun:workflow": _cache[4] || (_cache[4] = ($event) => unref(runEntireWorkflow)("main")),
          "onSave:workflow": onSaveWorkflow,
          "onCreate:workflow": onCreateWorkflow,
          "onViewport:change": onViewportChange,
          "onSelection:end": onSelectionEnd,
          onDragAndDrop,
          onTidyUp,
          "onToggle:focusPanel": onToggleFocusPanel,
          onExtractWorkflow,
          onStartChat: _cache[5] || (_cache[5] = ($event) => unref(startChat)())
        }, {
          default: withCtx(() => [
            (openBlock(), createBlock(Suspense, null, {
              default: withCtx(() => [
                createVNode(unref(LazySetupWorkflowCredentialsButton), {
                  class: normalizeClass(unref($style).setupCredentialsButtonWrapper)
                }, null, 8, ["class"])
              ]),
              _: 1
            })),
            !isCanvasReadOnly.value ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass(unref($style).executionButtons)
            }, [
              isRunWorkflowButtonVisible.value ? (openBlock(), createBlock(CanvasRunWorkflowButton, {
                key: 0,
                "waiting-for-webhook": isExecutionWaitingForWebhook.value,
                disabled: isExecutionDisabled.value,
                executing: isWorkflowRunning.value,
                "trigger-nodes": triggerNodes.value,
                "get-node-type": unref(nodeTypesStore).getNodeType,
                "selected-trigger-node-name": unref(workflowsStore).selectedTriggerNodeName,
                onMouseenter: onRunWorkflowButtonMouseEnter,
                onMouseleave: onRunWorkflowButtonMouseLeave,
                onExecute: _cache[0] || (_cache[0] = ($event) => unref(runEntireWorkflow)("main")),
                onSelectTriggerNode: unref(workflowsStore).setSelectedTriggerNodeName
              }, null, 8, ["waiting-for-webhook", "disabled", "executing", "trigger-nodes", "get-node-type", "selected-trigger-node-name", "onSelectTriggerNode"])) : createCommentVNode("", true),
              containsChatTriggerNodes.value ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                isLogsPanelOpen.value ? (openBlock(), createBlock(_sfc_main$1, {
                  key: 0,
                  type: "tertiary",
                  label: unref(i18n).baseText("chat.hide"),
                  class: normalizeClass(unref($style).chatButton),
                  onClick: _cache[1] || (_cache[1] = ($event) => unref(logsStore).toggleOpen(false))
                }, null, 8, ["label", "class"])) : (openBlock(), createBlock(KeyboardShortcutTooltip, {
                  key: 1,
                  label: unref(i18n).baseText("chat.open"),
                  shortcut: { keys: ["c"] }
                }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$1, {
                      type: isRunWorkflowButtonVisible.value ? "secondary" : "primary",
                      label: unref(i18n).baseText("chat.open"),
                      class: normalizeClass(unref($style).chatButton),
                      onClick: onOpenChat
                    }, null, 8, ["type", "label", "class"])
                  ]),
                  _: 1
                }, 8, ["label"]))
              ], 64)) : createCommentVNode("", true),
              isStopExecutionButtonVisible.value ? (openBlock(), createBlock(_sfc_main$4, {
                key: 2,
                stopping: isStoppingExecution.value,
                onClick: onStopExecution
              }, null, 8, ["stopping"])) : createCommentVNode("", true),
              isStopWaitingForWebhookButtonVisible.value ? (openBlock(), createBlock(_sfc_main$3, {
                key: 3,
                onClick: onStopWaitingForWebhook
              })) : createCommentVNode("", true)
            ], 2)) : createCommentVNode("", true),
            isReadOnlyEnvironment.value ? (openBlock(), createBlock(unref(N8nCallout), {
              key: 1,
              theme: "warning",
              icon: "lock",
              class: normalizeClass(unref($style).readOnlyEnvironmentNotification)
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n).baseText("readOnlyEnv.cantEditOrRun")), 1)
              ]),
              _: 1
            }, 8, ["class"])) : createCommentVNode("", true),
            unref(builderStore).streaming ? (openBlock(), createBlock(unref(N8nCanvasThinkingPill), {
              key: 2,
              class: normalizeClass(unref($style).thinkingPill),
              "show-stop": "",
              onStop: unref(builderStore).stopStreaming
            }, null, 8, ["class", "onStop"])) : createCommentVNode("", true),
            (openBlock(), createBlock(Suspense, null, {
              default: withCtx(() => [
                !isCanvasReadOnly.value ? (openBlock(), createBlock(unref(LazyNodeCreation), {
                  key: 0,
                  "create-node-active": unref(nodeCreatorStore).isCreateNodeActive,
                  "node-view-scale": viewportTransform.value.zoom,
                  "focus-panel-active": unref(focusPanelStore).focusPanelActive,
                  onToggleNodeCreator,
                  onAddNodes: onAddNodesAndConnections,
                  onClose: onNodeCreatorClose
                }, null, 8, ["create-node-active", "node-view-scale", "focus-panel-active"])) : createCommentVNode("", true)
              ]),
              _: 1
            })),
            (openBlock(), createBlock(Suspense, null, {
              default: withCtx(() => [
                !isNDVV2.value ? (openBlock(), createBlock(unref(LazyNodeDetailsView), {
                  key: 0,
                  "workflow-object": unref(editableWorkflowObject),
                  "read-only": isCanvasReadOnly.value,
                  "is-production-execution-preview": isProductionExecutionPreview.value,
                  renaming: false,
                  onValueChanged: _cache[2] || (_cache[2] = ($event) => onRenameNode($event.value)),
                  onStopExecution,
                  onSwitchSelectedNode: onSwitchActiveNode,
                  onOpenConnectionNodeCreator: onOpenSelectiveNodeCreator,
                  onSaveKeyboardShortcut: onSaveWorkflow
                }, null, 8, ["workflow-object", "read-only", "is-production-execution-preview"])) : createCommentVNode("", true)
              ]),
              _: 1
            })),
            (openBlock(), createBlock(Suspense, null, {
              default: withCtx(() => [
                isNDVV2.value ? (openBlock(), createBlock(unref(LazyNodeDetailsViewV2), {
                  key: 0,
                  "workflow-object": unref(editableWorkflowObject),
                  "read-only": isCanvasReadOnly.value,
                  "is-production-execution-preview": isProductionExecutionPreview.value,
                  onRenameNode,
                  onStopExecution,
                  onSwitchSelectedNode: onSwitchActiveNode,
                  onOpenConnectionNodeCreator: onOpenSelectiveNodeCreator,
                  onSaveKeyboardShortcut: onSaveWorkflow
                }, null, 8, ["workflow-object", "read-only", "is-production-execution-preview"])) : createCommentVNode("", true)
              ]),
              _: 1
            }))
          ]),
          _: 1
        }, 8, ["id", "workflow", "workflow-object", "fallback-nodes", "show-fallback-nodes", "event-bus", "read-only", "executing", "key-bindings", "suppress-interaction", "onUpdate:logs:inputOpen", "onUpdate:logs:outputOpen", "onUpdate:hasRangeSelection"])) : createCommentVNode("", true),
        !isLoading.value && (unref(experimentalNdvStore).isNdvInFocusPanelEnabled ? !isCanvasReadOnly.value : true) ? (openBlock(), createBlock(FocusPanel, {
          key: 1,
          "is-canvas-read-only": isCanvasReadOnly.value,
          onSaveKeyboardShortcut: onSaveWorkflow,
          onContextMenuAction
        }, null, 8, ["is-canvas-read-only"])) : createCommentVNode("", true)
      ], 2);
    };
  }
});
const wrapper = "_wrapper_1ahwb_123";
const executionButtons = "_executionButtons_1ahwb_128";
const chatButton = "_chatButton_1ahwb_165";
const setupCredentialsButtonWrapper = "_setupCredentialsButtonWrapper_1ahwb_169";
const readOnlyEnvironmentNotification = "_readOnlyEnvironmentNotification_1ahwb_175";
const thinkingPill = "_thinkingPill_1ahwb_182";
const style0 = {
  wrapper,
  executionButtons,
  chatButton,
  setupCredentialsButtonWrapper,
  readOnlyEnvironmentNotification,
  thinkingPill
};
const cssModules = {
  "$style": style0
};
const NodeView = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);
const NodeView$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: NodeView
}, Symbol.toStringTag, { value: "Module" }));
export {
  NodeView$1 as N,
  useExecutionData as u
};
