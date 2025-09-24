const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/NodeCreation-DuK4cOoT.js","assets/index-Bt-tFoja.js","assets/index-B7wrqKiF.css","assets/NodeCreation-C4gQlPqI.css","assets/NodeDetailsView-CESbMjTz.js","assets/TriggerPanel-MQ8BEQbL.js","assets/RunDataParsedAiContent-BEg7dVNT.js","assets/core-1MHytHyO.js","assets/RunDataParsedAiContent-wfIiKsq7.css","assets/ConsumedTokensDetails.vue_vue_type_script_setup_true_lang-CsXqaOcK.js","assets/InfoAccordion-CGMY3DkJ.js","assets/InfoAccordion-dxudNqVC.css","assets/TriggerPanel-DiD8pi0I.css","assets/useWorkflowActivate-Cn_JVMqU.js","assets/global-link-actions-vzip2nu2.js","assets/useExecutionDebugging-gH-A074H.js","assets/useBeforeUnload--D5gdKRr.js","assets/canvas-DvJ0gdup.js","assets/readyToRunWorkflows.store-CTpoSedg.js","assets/NodeDetailsView-CBYV4Rrz.css","assets/NodeDetailsViewV2-DM0EchzU.js","assets/NodeDetailsViewV2-J_3cfdea.css","assets/SetupWorkflowCredentialsButton-BCLRZyKF.js"])))=>i.map(i=>d[i]);
import { d as defineComponent, ar as createEventBus, aH as useTemplateRef, at as useCssModule, cz as useVueFlow, b$ as toRef, x as computed, cA as useCanvasMapping, r as ref, cB as refThrottled, h as createElementBlock, g as openBlock, n as normalizeClass, l as unref, j as createBaseVNode, Y as renderSlot, e as createBlock, f as createCommentVNode, cC as Canvas, K as mergeProps, _ as _export_sfc, a2 as useWorkflowsStore, cD as useExpressionResolveCtx, cE as useContextMenuItems, aZ as useNDVStore, a8 as watch, p as N8nText, w as withCtx, t as toDisplayString, F as Fragment, A as renderList, i as createVNode, q as N8nButton, k as createTextVNode, cF as N8nKeyboardShortcut, cG as _sfc_main$b, bP as provide, cH as ExpressionLocalResolveContextSymbol, ae as useNodeTypesStore, bY as NodeIcon, ab as _sfc_main$c, cI as _sfc_main$d, bM as useNodeHelpers, cJ as useFocusPanelStore, cK as useNodeSettingsParameters, cL as useEnvironmentsStore, cM as useExperimentalNdvStore, cN as useDeviceSupport, cx as useActiveElement, cO as useTelemetryContext, cP as CanvasNodeRenderType, cQ as HTML_NODE_TYPE, cR as isValueExpression, cS as isResourceLocatorValue, cT as AI_TRANSFORM_NODE_TYPE, c as useI18n, cU as useResolvedExpression, cn as useThrottleFn, B as withModifiers, N as N8nIcon, cV as InfoTip, cW as __unplugin_components_2, cX as __unplugin_components_3, cY as __unplugin_components_4, cZ as __unplugin_components_5, c_ as __unplugin_components_6, c$ as __unplugin_components_7, d0 as __unplugin_components_8, d1 as __unplugin_components_9, d2 as N8nInput, O as N8nRadioButtons, aq as normalizeStyle, cj as N8nResizeWrapper, d3 as getParameterTypeOption, d4 as htmlEditorEventBus, d5 as parseFromExpression, d6 as isValidParameterOption, d7 as formatAsExpression, am as useTelemetry, Z as nextTick, d8 as hasFocusOnInput, d9 as isFocusableEl, bC as isChatNode, da as truncateBeforeLast, ac as I18nT, ci as KeyboardShortcutTooltip, aN as N8nActionDropdown, db as reactive, o as onMounted, c8 as onUnmounted, dc as _sfc_main$e, D as useI18n$1, b as useRouter, a3 as useRoute, a as useToast, ay as useDocumentTitle, aA as useWorkflowHelpers, az as useWorkflowSaving, Q as useUIStore, ag as useSourceControlStore, dd as useNodeCreatorStore, v as useSettingsStore, de as useCredentialsStore, df as useExternalSecretsStore, au as useRootStore, a_ as useExecutionsStore, cq as useCanvasStore, ax as useNpsSurveyStore, dg as useHistoryStore, av as useProjectsStore, u as useUsersStore, as as useTagsStore, a1 as usePushConnectionStore, bl as useTemplatesStore, dh as useBuilderStore, aw as useFoldersStore, di as usePostHog, dj as useAgentRequestStore, bL as useLogsStore, bN as useRunWorkflow, bQ as useCanvasOperations, dk as useWorkflowExtraction, cb as useClipboard, bo as useKeybindings, bv as ABOUT_MODAL_KEY, a4 as PLACEHOLDER_EMPTY_WORKFLOW_ID, dl as NEW_WORKFLOW_ID, V as VIEWS, dm as NDV_UI_OVERHAUL_EXPERIMENT, bR as START_NODE_TYPE, dn as getNodeViewTab, L as MAIN_HEADER_TABS, dp as VALID_WORKFLOW_IMPORT_URL_REGEX, an as useMessage, ao as MODAL_CONFIRM, dq as jsonParse, aC as getResourcePermissions, bI as CHAT_TRIGGER_NODE_TYPE, bH as MANUAL_CHAT_TRIGGER_NODE_TYPE, dr as EVALUATION_TRIGGER_NODE_TYPE, ds as getBounds, dt as onBeforeRouteLeave, b2 as onBeforeMount, al as WORKFLOW_SETTINGS_MODAL_KEY, bq as useExternalHooks, du as onActivated, dv as onDeactivated, X as onBeforeUnmount, dw as Suspense, dx as defineAsyncComponent, z as N8nCallout, aV as __vitePreload, aF as EnterpriseEditionFeature, dy as NODE_CREATOR_OPEN_SOURCES, dz as EVALUATION_NODE_TYPE, dA as getSampleWorkflowByTemplateId, dB as tryToParseNumber, aP as nodeViewEventBus, bD as NodeConnectionTypes, dC as createCanvasConnectionHandleString, dD as CanvasConnectionMode, dE as isValidNodeConnectionType, dF as sourceControlEventBus, dG as getNodesWithNormalizedPosition, aX as h, dH as historyBus, dI as shouldIgnoreCanvasShortcut, b1 as STICKY_NODE_TYPE, dJ as needsAgentInput, dK as FROM_AI_PARAMETERS_MODAL_KEY, dL as DRAG_EVENT_DATA_KEY } from "./index-Bt-tFoja.js";
import { g as globalLinkActionsEventBus } from "./global-link-actions-vzip2nu2.js";
import { u as useExecutionDebugging } from "./useExecutionDebugging-gH-A074H.js";
import { u as useBeforeUnload } from "./useBeforeUnload--D5gdKRr.js";
import { c as canvasEventBus } from "./canvas-DvJ0gdup.js";
import { u as useAITemplatesStarterCollectionStore, a as useReadyToRunWorkflowsStore } from "./readyToRunWorkflows.store-CTpoSedg.js";
const _sfc_main$a = /* @__PURE__ */ defineComponent({
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
            ref: "canvas",
            id: _ctx.id,
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
const style0$6 = {
  wrapper: wrapper$2,
  canvas
};
const cssModules$6 = {
  "$style": style0$6
};
const WorkflowCanvas = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__cssModules", cssModules$6]]);
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
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
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
const component$2 = "_component_6x5cw_123";
const multipleNodes = "_multipleNodes_6x5cw_128";
const multipleNodesActions = "_multipleNodesActions_6x5cw_138";
const multipleNodesAction = "_multipleNodesAction_6x5cw_138";
const style0$5 = {
  component: component$2,
  multipleNodes,
  multipleNodesActions,
  multipleNodesAction
};
const cssModules$5 = {
  "$style": style0$5
};
const ExperimentalNodeDetailsDrawer = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__cssModules", cssModules$5]]);
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "ExperimentalFocusPanelHeader",
  props: {
    node: {},
    parameter: {},
    isExecutable: { type: Boolean }
  },
  emits: ["execute", "openNdv", "clearParameter"],
  setup(__props, { emit: __emit }) {
    const nodeTypesStore = useNodeTypesStore();
    const nodeType = computed(() => nodeTypesStore.getNodeType(__props.node.type, __props.node.typeVersion));
    const emit = __emit;
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
                default: withCtx(() => _cache[3] || (_cache[3] = [
                  createTextVNode("/")
                ])),
                _: 1
              }),
              createTextVNode(" " + toDisplayString(_ctx.parameter.displayName), 1)
            ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              createTextVNode(toDisplayString(_ctx.node.name), 1)
            ], 64))
          ], 2),
          _ctx.parameter ? (openBlock(), createBlock(unref(_sfc_main$c), {
            key: 0,
            icon: "x",
            size: "small",
            type: "tertiary",
            text: "",
            onClick: _cache[0] || (_cache[0] = ($event) => emit("clearParameter"))
          })) : (openBlock(), createBlock(unref(_sfc_main$c), {
            key: 1,
            icon: "expand",
            size: "small",
            type: "tertiary",
            text: "",
            onClick: _cache[1] || (_cache[1] = ($event) => emit("openNdv"))
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
            onExecute: _cache[2] || (_cache[2] = ($event) => emit("execute"))
          }, null, 8, ["node-name", "tooltip"])) : createCommentVNode("", true)
        ]),
        _: 1
      }, 8, ["class"]);
    };
  }
});
const component$1 = "_component_dktdl_123";
const breadcrumbs = "_breadcrumbs_dktdl_131";
const style0$4 = {
  component: component$1,
  breadcrumbs
};
const cssModules$4 = {
  "$style": style0$4
};
const ExperimentalFocusPanelHeader = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__cssModules", cssModules$4]]);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
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
    const locale = useI18n();
    const nodeHelpers = useNodeHelpers();
    const focusPanelStore = useFocusPanelStore();
    const workflowsStore = useWorkflowsStore();
    const nodeTypesStore = useNodeTypesStore();
    const telemetry = useTelemetry();
    const nodeSettingsParameters = useNodeSettingsParameters();
    const environmentsStore = useEnvironmentsStore();
    const experimentalNdvStore = useExperimentalNdvStore();
    const ndvStore = useNDVStore();
    const deviceSupport = useDeviceSupport();
    const vueFlow = useVueFlow(workflowsStore.workflowId);
    const activeElement = useActiveElement();
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
    const isNodeExecuting = computed(() => workflowsStore.isNodeExecuting(node.value?.name ?? ""));
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
    return (_ctx, _cache) => {
      const _component_NodeExecuteButton = _sfc_main$d;
      const _component_N8nIcon = N8nIcon;
      const _component_ParameterOptions = __unplugin_components_2;
      const _component_ExpressionEditorModalInput = __unplugin_components_3;
      const _component_CodeNodeEditor = __unplugin_components_4;
      const _component_HtmlEditor = __unplugin_components_5;
      const _component_CssEditor = __unplugin_components_6;
      const _component_SqlEditor = __unplugin_components_7;
      const _component_JsEditor = __unplugin_components_8;
      const _component_JsonEditor = __unplugin_components_9;
      const _component_N8nRadioButtons = N8nRadioButtons;
      return focusPanelActive.value ? (openBlock(), createElementBlock("div", {
        key: 0,
        ref: "wrapper",
        "data-test-id": "focus-panel",
        class: normalizeClass([
          _ctx.$style.wrapper,
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
                onExecute,
                onOpenNdv,
                onClearParameter: closeFocusPanel
              }, null, 8, ["node", "parameter", "is-executable"])) : createCommentVNode("", true),
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
                    createVNode(_component_NodeExecuteButton, {
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
                    createVNode(_component_N8nIcon, {
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
                    isDisplayed.value ? (openBlock(), createBlock(_component_ParameterOptions, {
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
                    ], 2)) : expressionModeEnabled.value ? (openBlock(), createBlock(_component_ExpressionEditorModalInput, {
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
                      editorType.value === "codeNodeEditor" ? (openBlock(), createBlock(_component_CodeNodeEditor, {
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
                      }, null, 8, ["id", "modelValue", "class", "mode", "default-value", "language", "is-read-only", "target-node-parameter-context"])) : editorType.value === "htmlEditor" ? (openBlock(), createBlock(_component_HtmlEditor, {
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
                      }, null, 8, ["modelValue", "is-read-only", "rows", "disable-expression-coloring", "disable-expression-completions", "target-node-parameter-context"])) : editorType.value === "cssEditor" ? (openBlock(), createBlock(_component_CssEditor, {
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
                      }, null, 8, ["modelValue", "is-read-only", "rows", "target-node-parameter-context"])) : editorType.value === "sqlEditor" ? (openBlock(), createBlock(_component_SqlEditor, {
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
                      }, null, 8, ["modelValue", "dialect", "is-read-only", "rows", "target-node-parameter-context"])) : editorType.value === "jsEditor" ? (openBlock(), createBlock(_component_JsEditor, {
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
                      }, null, 8, ["modelValue", "is-read-only", "rows", "posthog-capture"])) : resolvedParameter.value.parameter.type === "json" ? (openBlock(), createBlock(_component_JsonEditor, {
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
                    createVNode(_component_N8nIcon, {
                      class: normalizeClass(_ctx.$style.forceHover),
                      icon: "panel-right",
                      size: "medium"
                    }, null, 8, ["class"]),
                    createVNode(_component_N8nIcon, {
                      class: normalizeClass(_ctx.$style.pointerIcon),
                      icon: "mouse-pointer",
                      color: "text-dark",
                      size: "large"
                    }, null, 8, ["class"])
                  ], 2),
                  createVNode(_component_N8nIcon, {
                    icon: "ellipsis-vertical",
                    size: "small",
                    color: "text-base"
                  }),
                  createVNode(_component_N8nRadioButtons, {
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
const wrapper$1 = "_wrapper_1v9yh_123";
const container = "_container_1v9yh_135";
const content = "_content_1v9yh_141";
const emptyContent = "_emptyContent_1v9yh_147";
const isNdvInFocusPanelEnabled = "_isNdvInFocusPanelEnabled_1v9yh_152";
const emptyText = "_emptyText_1v9yh_155";
const focusParameterWrapper = "_focusParameterWrapper_1v9yh_161";
const iconWrapper$1 = "_iconWrapper_1v9yh_168";
const pointerIcon = "_pointerIcon_1v9yh_172";
const tabHeader = "_tabHeader_1v9yh_182";
const tabHeaderText = "_tabHeaderText_1v9yh_189";
const buttonWrapper = "_buttonWrapper_1v9yh_194";
const parameterDetailsWrapper = "_parameterDetailsWrapper_1v9yh_199";
const parameterOptionsWrapper = "_parameterOptionsWrapper_1v9yh_206";
const noExecutionDataTip = "_noExecutionDataTip_1v9yh_210";
const editorContainer = "_editorContainer_1v9yh_213";
const editor = "_editor_1v9yh_213";
const delayedShow = "_delayedShow_1v9yh_228";
const triggerShow = "_triggerShow_1v9yh_1";
const closeButton = "_closeButton_1v9yh_239";
const heightFull = "_heightFull_1v9yh_243";
const forceHover = "_forceHover_1v9yh_247";
const style0$3 = {
  wrapper: wrapper$1,
  container,
  content,
  emptyContent,
  isNdvInFocusPanelEnabled,
  emptyText,
  focusParameterWrapper,
  iconWrapper: iconWrapper$1,
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
const cssModules$3 = {
  "$style": style0$3
};
const FocusPanel = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__cssModules", cssModules$3]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "CanvasRunWorkflowButton",
  props: {
    selectedTriggerNodeName: {},
    triggerNodes: {},
    waitingForWebhook: { type: Boolean },
    executing: { type: Boolean },
    disabled: { type: Boolean },
    getNodeType: { type: Function }
  },
  emits: ["mouseenter", "mouseleave", "execute", "selectTriggerNode"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props = __props;
    const i18n = useI18n();
    const selectableTriggerNodes = computed(
      () => props.triggerNodes.filter((node) => !node.disabled && !isChatNode(node))
    );
    const label = computed(() => {
      if (!props.executing) {
        return i18n.baseText("nodeView.runButtonText.executeWorkflow");
      }
      if (props.waitingForWebhook) {
        return i18n.baseText("nodeView.runButtonText.waitingForTriggerEvent");
      }
      return i18n.baseText("nodeView.runButtonText.executingWorkflow");
    });
    const actions = computed(
      () => props.triggerNodes.filter((node) => !isChatNode(node)).toSorted((a, b) => {
        const [aX, aY] = a.position;
        const [bX, bY] = b.position;
        return aY === bY ? aX - bX : aY - bY;
      }).map((node) => ({
        label: truncateBeforeLast(node.name, 50),
        disabled: !!node.disabled || props.executing,
        id: node.name,
        checked: props.selectedTriggerNodeName === node.name
      }))
    );
    const isSplitButton = computed(
      () => selectableTriggerNodes.value.length > 1 && props.selectedTriggerNodeName !== void 0
    );
    function getNodeTypeByName(name) {
      const node = props.triggerNodes.find((trigger) => trigger.name === name);
      if (!node) {
        return null;
      }
      return props.getNodeType(node.type, node.typeVersion);
    }
    return (_ctx, _cache) => {
      const _component_NodeIcon = NodeIcon;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([_ctx.$style.component, isSplitButton.value ? _ctx.$style.split : ""])
      }, [
        createVNode(KeyboardShortcutTooltip, {
          label: label.value,
          shortcut: { metaKey: true, keys: ["↵"] },
          disabled: _ctx.executing
        }, {
          default: withCtx(() => [
            createVNode(unref(N8nButton), {
              class: normalizeClass(_ctx.$style.button),
              loading: _ctx.executing,
              disabled: _ctx.disabled,
              size: "large",
              icon: "flask-conical",
              type: "primary",
              "data-test-id": "execute-workflow-button",
              onMouseenter: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("mouseenter", $event)),
              onMouseleave: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("mouseleave", $event)),
              onClick: _cache[2] || (_cache[2] = ($event) => emit("execute"))
            }, {
              default: withCtx(() => [
                createBaseVNode("span", {
                  class: normalizeClass(_ctx.$style.buttonContent)
                }, [
                  createTextVNode(toDisplayString(label.value) + " ", 1),
                  isSplitButton.value ? (openBlock(), createBlock(unref(N8nText), {
                    key: 0,
                    class: normalizeClass(_ctx.$style.subText),
                    bold: false
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(I18nT), {
                        keypath: "nodeView.runButtonText.from",
                        scope: "global"
                      }, {
                        nodeName: withCtx(() => [
                          createVNode(unref(N8nText), {
                            bold: "",
                            size: "mini"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(truncateBeforeLast)(props.selectedTriggerNodeName ?? "", 25)), 1)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }, 8, ["class"])) : createCommentVNode("", true)
                ], 2)
              ]),
              _: 1
            }, 8, ["class", "loading", "disabled"])
          ]),
          _: 1
        }, 8, ["label", "disabled"]),
        isSplitButton.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createBaseVNode("div", {
            role: "presentation",
            class: normalizeClass(_ctx.$style.divider)
          }, null, 2),
          createVNode(unref(N8nActionDropdown), {
            class: normalizeClass(_ctx.$style.menu),
            items: actions.value,
            disabled: _ctx.disabled,
            placement: "top",
            "extra-popper-class": _ctx.$style.menuPopper,
            onSelect: _cache[3] || (_cache[3] = ($event) => emit("selectTriggerNode", $event))
          }, {
            activator: withCtx(() => [
              createVNode(unref(N8nButton), {
                type: "primary",
                "icon-size": "large",
                disabled: _ctx.disabled,
                class: normalizeClass(_ctx.$style.chevron),
                "aria-label": "Select trigger node",
                icon: "chevron-down"
              }, null, 8, ["disabled", "class"])
            ]),
            menuItem: withCtx((item) => [
              createBaseVNode("div", {
                class: normalizeClass([_ctx.$style.menuItem, item.disabled ? _ctx.$style.disabled : ""])
              }, [
                createVNode(_component_NodeIcon, {
                  class: normalizeClass(_ctx.$style.menuIcon),
                  size: 16,
                  "node-type": getNodeTypeByName(item.id)
                }, null, 8, ["class", "node-type"]),
                createBaseVNode("span", null, [
                  createVNode(unref(I18nT), {
                    keypath: "nodeView.runButtonText.from",
                    scope: "global"
                  }, {
                    nodeName: withCtx(() => [
                      createVNode(unref(N8nText), {
                        bold: "",
                        size: "small"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(item.label), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024)
                ])
              ], 2)
            ]),
            _: 1
          }, 8, ["class", "items", "disabled", "extra-popper-class"])
        ], 64)) : createCommentVNode("", true)
      ], 2);
    };
  }
});
const component = "_component_3izac_123";
const split = "_split_3izac_129";
const button = "_button_3izac_129";
const divider = "_divider_3izac_137";
const chevron = "_chevron_3izac_142";
const menu = "_menu_3izac_148";
const menuPopper = "_menuPopper_3izac_152";
const menuItem = "_menuItem_3izac_156";
const disabled = "_disabled_3izac_162";
const menuIcon = "_menuIcon_3izac_162";
const buttonContent = "_buttonContent_3izac_166";
const subText = "_subText_3izac_173";
const style0$2 = {
  component,
  split,
  button,
  divider,
  chevron,
  menu,
  menuPopper,
  menuItem,
  disabled,
  menuIcon,
  buttonContent,
  subText
};
const cssModules$2 = {
  "$style": style0$2
};
const CanvasRunWorkflowButton = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__cssModules", cssModules$2]]);
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
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "CanvasStopCurrentExecutionButton",
  props: {
    stopping: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const i18n = useI18n();
    const title = computed(
      () => props.stopping ? i18n.baseText("nodeView.stoppingCurrentExecution") : i18n.baseText("nodeView.stopCurrentExecution")
    );
    return (_ctx, _cache) => {
      const _component_N8nIconButton = _sfc_main$c;
      return openBlock(), createBlock(_component_N8nIconButton, {
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
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "CanvasStopWaitingForWebhookButton",
  setup(__props) {
    const i18n = useI18n();
    return (_ctx, _cache) => {
      const _component_N8nIconButton = _sfc_main$c;
      return openBlock(), createBlock(_component_N8nIconButton, {
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
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  ...{
    name: "CanvasThinkingPill"
  },
  __name: "CanvasThinkingPill",
  props: {
    showStop: { type: Boolean }
  },
  emits: ["stop"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const { t } = useI18n$1();
    const $style = useCssModule();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(unref($style).thinkingPill)
      }, [
        createBaseVNode("div", {
          class: normalizeClass(unref($style).iconWrapper)
        }, [
          createVNode(_sfc_main$e, { theme: "blank" })
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
const thinkingPill$1 = "_thinkingPill_nk220_123";
const iconWrapper = "_iconWrapper_nk220_139";
const stopButton = "_stopButton_nk220_149";
const text = "_text_nk220_153";
const style0$1 = {
  thinkingPill: thinkingPill$1,
  iconWrapper,
  stopButton,
  text
};
const cssModules$1 = {
  "$style": style0$1
};
const CanvasThinkingPill = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__cssModules", cssModules$1]]);
const _hoisted_1 = { "data-action": "reload" };
const _hoisted_2 = {
  href: "https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.wait/",
  target: "_blank"
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "NodeViewUnfinishedWorkflowMessage",
  setup(__props) {
    const i18 = useI18n();
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
      const _component_N8nButton = N8nButton;
      return openBlock(), createBlock(_component_N8nButton, {
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
      async () => await __vitePreload(() => import("./NodeCreation-DuK4cOoT.js"), true ? __vite__mapDeps([0,1,2,3]) : void 0)
    );
    const LazyNodeDetailsView = defineAsyncComponent(
      async () => await __vitePreload(() => import("./NodeDetailsView-CESbMjTz.js"), true ? __vite__mapDeps([4,1,2,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]) : void 0)
    );
    const LazyNodeDetailsViewV2 = defineAsyncComponent(
      async () => await __vitePreload(() => import("./NodeDetailsViewV2-DM0EchzU.js"), true ? __vite__mapDeps([20,1,2,5,6,7,8,9,10,11,12,13,14,15,16,17,18,21]) : void 0)
    );
    const LazySetupWorkflowCredentialsButton = defineAsyncComponent(
      async () => await __vitePreload(() => import("./SetupWorkflowCredentialsButton-BCLRZyKF.js"), true ? __vite__mapDeps([22,1,2]) : void 0)
    );
    const $style = useCssModule();
    const router = useRouter();
    const route = useRoute();
    const i18n = useI18n();
    const telemetry = useTelemetry();
    const externalHooks = useExternalHooks();
    const toast = useToast();
    const message = useMessage();
    const documentTitle = useDocumentTitle();
    const workflowHelpers = useWorkflowHelpers();
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
    const templatesStore = useTemplatesStore();
    const builderStore = useBuilderStore();
    const foldersStore = useFoldersStore();
    const posthogStore = usePostHog();
    const agentRequestStore = useAgentRequestStore();
    const logsStore = useLogsStore();
    const aiTemplatesStarterCollectionStore = useAITemplatesStarterCollectionStore();
    const readyToRunWorkflowsStore = useReadyToRunWorkflowsStore();
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
      addNodes,
      importTemplate,
      revertAddNode,
      createConnection,
      revertCreateConnection,
      deleteConnection,
      revertDeleteConnection,
      revalidateNodeInputConnections,
      revalidateNodeOutputConnections,
      setNodeActiveByName,
      clearNodeActive,
      addConnections,
      tryToOpenSubworkflowInNewTab,
      importWorkflowData,
      fetchWorkflowDataFromUrl,
      resetWorkspace,
      initializeWorkspace,
      openExecution,
      editableWorkflow,
      editableWorkflowObject,
      lastClickPosition,
      startChat
    } = useCanvasOperations();
    const { extractWorkflow } = useWorkflowExtraction();
    const { applyExecutionData } = useExecutionDebugging();
    useClipboard({ onPaste: onClipboardPaste });
    useKeybindings({
      ctrl_alt_o: () => uiStore.openModal(ABOUT_MODAL_KEY)
    });
    const canvasRef = useTemplateRef("canvas");
    const isLoading = ref(true);
    const isBlankRedirect = ref(false);
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
      if (isBlankRedirect.value) {
        isBlankRedirect.value = false;
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
          await openTemplateFromWorkflowJSON(workflow);
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
      await workflowsStore.getNewWorkflowDataAndMakeShareable(
        void 0,
        projectsStore.currentProjectId,
        parentFolderId
      );
      if (projectsStore.currentProjectId) {
        await fetchAndSetProject(projectsStore.currentProjectId);
      }
      await fetchAndSetParentFolder(parentFolderId);
      uiStore.nodeViewInitialized = true;
      initializedWorkflowId.value = NEW_WORKFLOW_ID;
    }
    async function fetchAndSetParentFolder(folderId) {
      if (folderId) {
        let parentFolder = foldersStore.getCachedFolder(folderId);
        if (!parentFolder && projectsStore.currentProjectId) {
          await foldersStore.getFolderPath(projectsStore.currentProjectId, folderId);
          parentFolder = foldersStore.getCachedFolder(folderId);
        }
        if (parentFolder) {
          workflowsStore.setParentFolder({
            ...parentFolder,
            parentFolderId: parentFolder.parentFolder ?? null
          });
        }
      }
    }
    async function fetchAndSetProject(projectId) {
      if (projectsStore.currentProject?.id !== projectId) {
        const project = await projectsStore.fetchProject(projectId);
        projectsStore.setCurrentProject(project);
      }
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
        await projectsStore.setProjectNavActiveIdByWorkflowHomeProject(workflowData.homeProject);
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
      workflowHelpers.setDocumentTitle(data.name, "IDLE");
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
    async function openTemplateFromWorkflowJSON(workflow) {
      if (!workflow.nodes || !workflow.connections) {
        toast.showError(
          new Error(i18n.baseText("nodeView.couldntLoadWorkflow.invalidWorkflowObject")),
          i18n.baseText("nodeView.couldntImportWorkflow")
        );
        await router.replace({ name: VIEWS.NEW_WORKFLOW });
        return;
      }
      resetWorkspace();
      canvasStore.startLoading();
      canvasStore.setLoadingText(i18n.baseText("nodeView.loadingTemplate"));
      workflowsStore.currentWorkflowExecutions = [];
      executionsStore.activeExecution = null;
      isBlankRedirect.value = true;
      const templateId = workflow.meta.templateId;
      const parentFolderId = route.query.parentFolderId;
      if (projectsStore.currentProjectId) {
        await fetchAndSetProject(projectsStore.currentProjectId);
      }
      await fetchAndSetParentFolder(parentFolderId);
      await router.replace({
        name: VIEWS.NEW_WORKFLOW,
        query: { templateId, parentFolderId, projectId: projectsStore.currentProjectId }
      });
      await importTemplate({
        id: templateId,
        name: workflow.name,
        workflow
      });
      uiStore.stateIsDirty = true;
      canvasStore.stopLoading();
      fitView();
    }
    async function openWorkflowTemplate(templateId) {
      resetWorkspace();
      canvasStore.startLoading();
      canvasStore.setLoadingText(i18n.baseText("nodeView.loadingTemplate"));
      workflowsStore.currentWorkflowExecutions = [];
      executionsStore.activeExecution = null;
      let data;
      try {
        void externalHooks.run("template.requested", { templateId });
        data = await templatesStore.getFixedWorkflowTemplate(templateId);
        if (!data) {
          throw new Error(
            i18n.baseText("nodeView.workflowTemplateWithIdCouldNotBeFound", {
              interpolate: { templateId }
            })
          );
        }
      } catch (error) {
        toast.showError(error, i18n.baseText("nodeView.couldntImportWorkflow"));
        await router.replace({ name: VIEWS.NEW_WORKFLOW });
        return;
      }
      trackOpenWorkflowTemplate(templateId);
      isBlankRedirect.value = true;
      await router.replace({ name: VIEWS.NEW_WORKFLOW, query: { templateId } });
      await importTemplate({ id: templateId, name: data.name, workflow: data.workflow });
      uiStore.stateIsDirty = true;
      canvasStore.stopLoading();
      void externalHooks.run("template.open", {
        templateId,
        templateName: data.name,
        workflow: data.workflow
      });
      fitView();
    }
    function trackOpenWorkflowTemplate(templateId) {
      telemetry.track("User inserted workflow template", {
        source: "workflow",
        template_id: tryToParseNumber(templateId),
        wf_template_repo_session_id: templatesStore.previousSessionId
      });
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
      void extractWorkflow(nodeIds);
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
        const promptResponse = await promptResponsePromise;
        if (promptResponse.action === MODAL_CONFIRM) {
          await renameNode(currentName, promptResponse.value, { trackHistory: true });
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
      fitView();
      selectNodes(workflowData.nodes?.map((node) => node.id) ?? []);
      if (data.tidyUp) {
        const nodesIdsToTidyUp = data.nodesIdsToTidyUp;
        setTimeout(() => {
          canvasEventBus.emit("tidyUp", {
            source: "import-workflow-data",
            nodeIdsFilter: nodesIdsToTidyUp,
            trackEvents
          });
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
    async function onAddNodesAndConnections({ nodes, connections }, dragAndDrop = false, position) {
      if (!checkIfEditingIsAllowed()) {
        return;
      }
      const addedNodes = await addNodes(nodes, {
        dragAndDrop,
        position,
        viewport: viewportBoundaries.value,
        trackHistory: true,
        telemetry: true
      });
      const offsetIndex = editableWorkflow.value.nodes.length - nodes.length;
      const mappedConnections = connections.map(({ from, to }) => {
        const fromNode = editableWorkflow.value.nodes[offsetIndex + from.nodeIndex];
        const toNode = editableWorkflow.value.nodes[offsetIndex + to.nodeIndex];
        const type = from.type ?? to.type ?? NodeConnectionTypes.Main;
        return {
          source: fromNode.id,
          sourceHandle: createCanvasConnectionHandleString({
            mode: CanvasConnectionMode.Output,
            type: isValidNodeConnectionType(type) ? type : NodeConnectionTypes.Main,
            index: from.outputIndex ?? 0
          }),
          target: toNode.id,
          targetHandle: createCanvasConnectionHandleString({
            mode: CanvasConnectionMode.Input,
            type: isValidNodeConnectionType(type) ? type : NodeConnectionTypes.Main,
            index: to.inputIndex ?? 0
          }),
          data: {
            source: {
              index: from.outputIndex ?? 0,
              type
            },
            target: {
              index: to.inputIndex ?? 0,
              type
            }
          }
        };
      });
      await addConnections(mappedConnections);
      uiStore.resetLastInteractedWith();
      if (addedNodes.length > 0) {
        selectNodes([addedNodes[addedNodes.length - 1].id]);
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
      if (!options.createNodeActive && !options.hasAddedNodes) {
        uiStore.resetLastInteractedWith();
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
            workflowHelpers.setDocumentTitle(workflowData.name, "IDLE");
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
      workflowHelpers.setDocumentTitle(workflowsStore.workflowName, "DEBUG");
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
    function fitView() {
      setTimeout(() => canvasEventBus.emit("fitView"));
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
        const aiPromptItem = {
          id: CanvasNodeRenderType.AIPrompt,
          name: CanvasNodeRenderType.AIPrompt,
          type: CanvasNodeRenderType.AIPrompt,
          typeVersion: 1,
          position: [-300, -100],
          parameters: {},
          draggable: false
        };
        fallbackNodes.value = builderStore.isAIBuilderEnabled && builderStore.isAssistantEnabled && builderStore.assistantMessages.length === 0 ? [aiPromptItem] : [addNodesItem];
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
          workflowsStore.setWorkflowId(PLACEHOLDER_EMPTY_WORKFLOW_ID);
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
      registerCustomActions();
    });
    onActivated(async () => {
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
          ref: "canvas",
          id: unref(editableWorkflow).id,
          workflow: unref(editableWorkflow),
          "workflow-object": unref(editableWorkflowObject),
          "fallback-nodes": fallbackNodes.value,
          "show-fallback-nodes": showFallbackNodes.value,
          "event-bus": unref(canvasEventBus),
          "read-only": isCanvasReadOnly.value,
          executing: isWorkflowRunning.value,
          "key-bindings": keyBindingsEnabled.value,
          "suppress-interaction": unref(canvasStore).suppressInteraction,
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
              isStopExecutionButtonVisible.value ? (openBlock(), createBlock(_sfc_main$5, {
                key: 2,
                stopping: isStoppingExecution.value,
                onClick: onStopExecution
              }, null, 8, ["stopping"])) : createCommentVNode("", true),
              isStopWaitingForWebhookButtonVisible.value ? (openBlock(), createBlock(_sfc_main$4, {
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
            unref(builderStore).streaming ? (openBlock(), createBlock(CanvasThinkingPill, {
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
                  onAddNodes: onAddNodesAndConnections
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
        !isLoading.value ? (openBlock(), createBlock(FocusPanel, {
          key: 1,
          "is-canvas-read-only": isCanvasReadOnly.value,
          onSaveKeyboardShortcut: onSaveWorkflow,
          onContextMenuAction
        }, null, 8, ["is-canvas-read-only"])) : createCommentVNode("", true)
      ], 2);
    };
  }
});
const wrapper = "_wrapper_16h3t_123";
const executionButtons = "_executionButtons_16h3t_128";
const chatButton = "_chatButton_16h3t_165";
const setupCredentialsButtonWrapper = "_setupCredentialsButtonWrapper_16h3t_169";
const readOnlyEnvironmentNotification = "_readOnlyEnvironmentNotification_16h3t_175";
const thinkingPill = "_thinkingPill_16h3t_182";
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
