import { d as defineComponent, x as computed, c as useI18n, h as createElementBlock, g as openBlock, j as createBaseVNode, i as createVNode, n as normalizeClass, e as createBlock, f as createCommentVNode, c2 as NodeIcon, aI as InlineRename, l as unref, C as N8nLink, w as withCtx, p as N8nText, k as createTextVNode, t as toDisplayString, N as N8nIcon, a4 as N8nTooltip, a5 as _sfc_main$3, _ as _export_sfc, r as ref, hr as LOCAL_STORAGE_NDV_PANEL_WIDTH, hs as toValue, gd as useElementSize, af as watch, c5 as toRef, dm as jsonParse, g9 as Draggable, ht as FontAwesomeIcon, a_ as useNDVStore, bS as useNodeHelpers, et as storeToRefs, bQ as usePinnedData, ah as useNodeTypesStore, Z as useUIStore, a9 as useWorkflowsStore, cL as useDeviceSupport, co as useStyles, aH as useTemplateRef, hu as useNodeDocsUrl, h6 as getNodeOutputs, bF as NodeConnectionTypes, bX as START_NODE_TYPE, h7 as EXECUTABLE_TRIGGER_NODE_TYPES, b2 as STICKY_NODE_TYPE, cB as useKeybindings, o as onMounted, h9 as dataPinningEventBus, P as onBeforeUnmount, U as normalizeStyle, hv as getNodeIconSource, hb as InputPanel, ha as NodeSettings, W as createEventBus, cn as N8nResizeWrapper, hc as APP_MODALS_ELEMENT_ID, hw as Teleport, ap as useTelemetry, aq as useMessage, ar as MODAL_CONFIRM, bs as useExternalHooks } from "./index-BsWH3eYA.js";
import { _ as __unplugin_components_0, T as TriggerPanel, O as OutputPanel } from "./TriggerPanel-DeMR4x95.js";
import { u as useWorkflowActivate } from "./useWorkflowActivate-yjqC6aUm.js";
import "./RunDataParsedAiContent-CtPHlln6.js";
import "./core-DPtr6nyP.js";
import "./ConsumedTokensDetails.vue_vue_type_script_setup_true_lang-C_ibue-c.js";
import "./NodeView-D_jgon9p.js";
import "./global-link-actions-BfMXCg-D.js";
import "./useExecutionDebugging-CX6sISQz.js";
import "./useBeforeUnload-DmL8PNqU.js";
import "./canvas-CNrbb5_U.js";
import "./readyToRunWorkflows.store-SI6MsPeC.js";
import "./InfoAccordion-CLjAr6Sq.js";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "NDVHeader",
  props: {
    nodeName: {},
    nodeTypeName: {},
    docsUrl: {},
    icon: {},
    readOnly: { type: Boolean }
  },
  emits: ["close", "rename"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const i18n = useI18n();
    const emit = __emit;
    const hasCustomName = computed(() => props.nodeName !== props.nodeTypeName);
    const docsLabel2 = computed(() => {
      if (!hasCustomName.value) {
        return i18n.baseText("nodeSettings.docs");
      }
      return `${props.nodeTypeName} ${i18n.baseText("nodeSettings.docs")}`;
    });
    function onRename(newNodeName) {
      emit("rename", newNodeName || props.nodeTypeName);
    }
    return (_ctx, _cache) => {
      const _component_NodeIcon = NodeIcon;
      const _component_N8nInlineTextEdit = InlineRename;
      const _component_N8nText = N8nText;
      const _component_N8nIcon = N8nIcon;
      const _component_N8nLink = N8nLink;
      const _component_N8nTooltip = N8nTooltip;
      return openBlock(), createElementBlock("header", {
        class: normalizeClass(_ctx.$style.ndvHeader)
      }, [
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.content)
        }, [
          _ctx.icon ? (openBlock(), createBlock(_component_NodeIcon, {
            key: 0,
            class: normalizeClass(_ctx.$style.icon),
            size: 20,
            "icon-source": _ctx.icon
          }, null, 8, ["class", "icon-source"])) : createCommentVNode("", true),
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.title)
          }, [
            createVNode(_component_N8nInlineTextEdit, {
              "model-value": _ctx.nodeName,
              "min-width": 0,
              "max-width": 500,
              placeholder: unref(i18n).baseText("ndv.title.rename.placeholder"),
              "read-only": _ctx.readOnly,
              "onUpdate:modelValue": onRename
            }, null, 8, ["model-value", "placeholder", "read-only"])
          ], 2),
          _ctx.docsUrl ? (openBlock(), createBlock(_component_N8nLink, {
            key: 1,
            theme: "text",
            target: "_blank",
            href: _ctx.docsUrl
          }, {
            default: withCtx(() => [
              createBaseVNode("span", {
                class: normalizeClass(_ctx.$style.docsLabel)
              }, [
                createVNode(_component_N8nText, {
                  size: "small",
                  bold: ""
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(docsLabel2.value), 1)
                  ]),
                  _: 1
                }),
                createVNode(_component_N8nIcon, { icon: "external-link" })
              ], 2)
            ]),
            _: 1
          }, 8, ["href"])) : hasCustomName.value ? (openBlock(), createBlock(_component_N8nText, {
            key: 2,
            size: "small",
            bold: ""
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.nodeTypeName), 1)
            ]),
            _: 1
          })) : createCommentVNode("", true)
        ], 2),
        createVNode(_component_N8nTooltip, null, {
          content: withCtx(() => [
            createTextVNode(toDisplayString(unref(i18n).baseText("ndv.close.tooltip")), 1)
          ]),
          default: withCtx(() => [
            createVNode(unref(_sfc_main$3), {
              icon: "x",
              type: "tertiary",
              onClick: _cache[0] || (_cache[0] = ($event) => emit("close"))
            })
          ]),
          _: 1
        })
      ], 2);
    };
  }
});
const ndvHeader = "_ndvHeader_q9139_2";
const content = "_content_q9139_12";
const title = "_title_q9139_19";
const subtitle = "_subtitle_q9139_24";
const docsLabel = "_docsLabel_q9139_31";
const icon = "_icon_q9139_36";
const style0$2 = {
  ndvHeader,
  content,
  title,
  subtitle,
  docsLabel,
  icon
};
const cssModules$2 = {
  "$style": style0$2
};
const __unplugin_components_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__cssModules", cssModules$2]]);
function useNdvLayout(options) {
  const MIN_MAIN_PANEL_WIDTH_PX = 368;
  const MIN_PANEL_WIDTH_PX = 120;
  const DEFAULT_INPUTLESS_MAIN_WIDTH_PX = 480;
  const DEFAULT_WIDE_MAIN_WIDTH_PX = 640;
  const DEFAULT_REGULAR_MAIN_WIDTH_PX = 420;
  const panelWidthPercentage = ref({ left: 40, main: 20, right: 40 });
  const localStorageKey = computed(
    () => `${LOCAL_STORAGE_NDV_PANEL_WIDTH}_${toValue(options.paneType).toUpperCase()}`
  );
  const containerSize = useElementSize(options.container);
  const containerWidth = computed(() => containerSize.width.value);
  const percentageToPixels = (percentage) => {
    return percentage / 100 * containerWidth.value;
  };
  const pixelsToPercentage = (pixels) => {
    return pixels / containerWidth.value * 100;
  };
  const minMainPanelWidthPercentage = computed(() => pixelsToPercentage(MIN_MAIN_PANEL_WIDTH_PX));
  const panelWidthPixels = computed(() => ({
    left: percentageToPixels(panelWidthPercentage.value.left),
    main: percentageToPixels(panelWidthPercentage.value.main),
    right: percentageToPixels(panelWidthPercentage.value.right)
  }));
  const minPanelWidthPercentage = computed(() => pixelsToPercentage(MIN_PANEL_WIDTH_PX));
  const defaultPanelSize = computed(() => {
    switch (toValue(options.paneType)) {
      case "inputless": {
        const main2 = pixelsToPercentage(DEFAULT_INPUTLESS_MAIN_WIDTH_PX);
        return { left: 0, main: main2, right: 100 - main2 };
      }
      case "wide": {
        const main2 = pixelsToPercentage(DEFAULT_WIDE_MAIN_WIDTH_PX);
        const panels = (100 - main2) / 2;
        return { left: panels, main: main2, right: panels };
      }
      case "dragless":
      case "unknown":
      case "regular":
      default: {
        const main2 = pixelsToPercentage(DEFAULT_REGULAR_MAIN_WIDTH_PX);
        const panels = (100 - main2) / 2;
        return { left: panels, main: main2, right: panels };
      }
    }
  });
  const safePanelWidth = ({ left, main: main2, right }) => {
    const hasInput = toValue(options.hasInputPanel);
    const minLeft = hasInput ? minPanelWidthPercentage.value : 0;
    const minRight = minPanelWidthPercentage.value;
    const minMain = minMainPanelWidthPercentage.value;
    const newPanelWidth = {
      left: Math.max(minLeft, left),
      main: Math.max(minMain, main2),
      right: Math.max(minRight, right)
    };
    const total = newPanelWidth.left + newPanelWidth.main + newPanelWidth.right;
    if (total > 100) {
      const overflow = total - 100;
      const trimLeft = newPanelWidth.left / (newPanelWidth.left + newPanelWidth.right) * overflow;
      const trimRight = overflow - trimLeft;
      newPanelWidth.left = Math.max(minLeft, newPanelWidth.left - trimLeft);
      newPanelWidth.right = Math.max(minRight, newPanelWidth.right - trimRight);
    }
    return newPanelWidth;
  };
  const persistPanelSize = () => {
    localStorage.setItem(localStorageKey.value, JSON.stringify(panelWidthPercentage.value));
  };
  const loadPanelSize = () => {
    const storedPanelSizeString = localStorage.getItem(localStorageKey.value);
    const defaultSize = defaultPanelSize.value;
    if (storedPanelSizeString) {
      const storedPanelSize = jsonParse(storedPanelSizeString, {
        fallbackValue: defaultSize
      });
      panelWidthPercentage.value = safePanelWidth(storedPanelSize ?? defaultSize);
    } else {
      panelWidthPercentage.value = safePanelWidth(defaultSize);
    }
  };
  const onResizeEnd = () => {
    persistPanelSize();
  };
  const onResize = (event) => {
    const newMain = Math.max(minMainPanelWidthPercentage.value, pixelsToPercentage(event.width));
    const initialLeft = panelWidthPercentage.value.left;
    const initialMain = panelWidthPercentage.value.main;
    const initialRight = panelWidthPercentage.value.right;
    const diffMain = newMain - initialMain;
    if (event.direction === "left") {
      const potentialLeft = initialLeft - diffMain;
      if (potentialLeft < minPanelWidthPercentage.value) return;
      const newLeft = Math.max(minPanelWidthPercentage.value, potentialLeft);
      const newRight = initialRight;
      panelWidthPercentage.value = safePanelWidth({
        left: newLeft,
        main: newMain,
        right: newRight
      });
    } else if (event.direction === "right") {
      const potentialRight = initialRight - diffMain;
      if (potentialRight < minPanelWidthPercentage.value) return;
      const newRight = Math.max(minPanelWidthPercentage.value, potentialRight);
      const newLeft = initialLeft;
      panelWidthPercentage.value = safePanelWidth({
        left: newLeft,
        main: newMain,
        right: newRight
      });
    }
  };
  const onDrag = (position) => {
    const newLeft = Math.max(
      minPanelWidthPercentage.value,
      pixelsToPercentage(position[0]) - panelWidthPercentage.value.main / 2
    );
    const newRight = Math.max(
      minPanelWidthPercentage.value,
      100 - newLeft - panelWidthPercentage.value.main
    );
    if (newLeft + panelWidthPercentage.value.main + newRight > 100) {
      return;
    }
    panelWidthPercentage.value.left = newLeft;
    panelWidthPercentage.value.right = newRight;
  };
  watch(containerWidth, (newWidth, oldWidth) => {
    if (!newWidth) return;
    if (!oldWidth) {
      loadPanelSize();
    } else {
      panelWidthPercentage.value = safePanelWidth(panelWidthPercentage.value);
    }
  });
  watch(
    toRef(options.paneType),
    () => {
      loadPanelSize();
    },
    { immediate: true }
  );
  return {
    containerWidth,
    panelWidthPercentage,
    panelWidthPixels,
    onResize,
    onDrag,
    onResizeEnd
  };
}
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PanelDragButtonV2",
  props: {
    canMoveRight: { type: Boolean },
    canMoveLeft: { type: Boolean }
  },
  emits: ["drag", "dragstart", "dragend"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const onDrag = (e) => {
      emit("drag", e);
    };
    const onDragEnd = () => {
      emit("dragend");
    };
    const onDragStart = () => {
      emit("dragstart");
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Draggable, {
        class: normalizeClass(_ctx.$style.dragContainer),
        type: "panel-resize",
        cursor: "ew-resize",
        "data-test-id": "panel-drag-button",
        onDrag,
        onDragstart: onDragStart,
        onDragend: onDragEnd
      }, {
        default: withCtx(({ isDragging }) => [
          createBaseVNode("button", {
            class: normalizeClass([_ctx.$style.dragButton, { [_ctx.$style.dragging]: isDragging }])
          }, [
            _ctx.canMoveLeft ? (openBlock(), createBlock(unref(FontAwesomeIcon), {
              key: 0,
              class: normalizeClass(_ctx.$style.arrow),
              icon: "arrow-left"
            }, null, 8, ["class"])) : createCommentVNode("", true),
            createVNode(unref(FontAwesomeIcon), {
              class: normalizeClass(_ctx.$style.handle),
              icon: "bars"
            }, null, 8, ["class"]),
            _ctx.canMoveRight ? (openBlock(), createBlock(unref(FontAwesomeIcon), {
              key: 1,
              class: normalizeClass(_ctx.$style.arrow),
              icon: "arrow-right"
            }, null, 8, ["class"])) : createCommentVNode("", true)
          ], 2)
        ]),
        _: 1
      }, 8, ["class"]);
    };
  }
});
const dragButton = "_dragButton_7p0lm_123";
const arrow = "_arrow_7p0lm_138";
const handle = "_handle_7p0lm_142";
const dragging = "_dragging_7p0lm_146";
const style0$1 = {
  dragButton,
  arrow,
  handle,
  dragging
};
const cssModules$1 = {
  "$style": style0$1
};
const PanelDragButtonV2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__cssModules", cssModules$1]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "NodeDetailsViewV2",
  props: {
    workflowObject: {},
    readOnly: { type: Boolean, default: false },
    isProductionExecutionPreview: { type: Boolean, default: false }
  },
  emits: ["saveKeyboardShortcut", "valueChanged", "switchSelectedNode", "openConnectionNodeCreator", "renameNode", "stopExecution"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props = __props;
    const ndvStore = useNDVStore();
    const externalHooks = useExternalHooks();
    const nodeHelpers = useNodeHelpers();
    const { activeNode } = storeToRefs(ndvStore);
    const pinnedData = usePinnedData(activeNode);
    const workflowActivate = useWorkflowActivate();
    const nodeTypesStore = useNodeTypesStore();
    const uiStore = useUIStore();
    const workflowsStore = useWorkflowsStore();
    const deviceSupport = useDeviceSupport();
    const telemetry = useTelemetry();
    const i18n = useI18n();
    const message = useMessage();
    const { APP_Z_INDEXES } = useStyles();
    const settingsEventBus = createEventBus();
    const runInputIndex = ref(-1);
    const runOutputIndex = ref(-1);
    const isLinkingEnabled = ref(true);
    const selectedInput = ref();
    const triggerWaitingWarningEnabled = ref(false);
    const isDragging = ref(false);
    const mainPanelPosition = ref(0);
    const pinDataDiscoveryTooltipVisible = ref(false);
    const avgInputRowHeight = ref(0);
    const avgOutputRowHeight = ref(0);
    const isInputPaneActive = ref(false);
    const isOutputPaneActive = ref(false);
    const isPairedItemHoveringEnabled = ref(true);
    const dialogRef = ref();
    const containerRef = useTemplateRef("containerRef");
    const mainPanelRef = useTemplateRef("mainPanelRef");
    const pushRef = computed(() => ndvStore.pushRef);
    const activeNodeType = computed(() => {
      if (activeNode.value) {
        return nodeTypesStore.getNodeType(activeNode.value.type, activeNode.value.typeVersion);
      }
      return null;
    });
    const { docsUrl } = useNodeDocsUrl({ nodeType: activeNodeType });
    const workflowRunning = computed(() => uiStore.isActionActive.workflowRunning);
    const workflowRunData = computed(() => {
      if (workflowExecution.value === null) {
        return null;
      }
      const executionData = workflowExecution.value.data;
      if (executionData?.resultData) {
        return executionData.resultData.runData;
      }
      return null;
    });
    const parentNodes = computed(() => {
      if (activeNode.value) {
        return props.workflowObject.getParentNodesByDepth(activeNode.value.name, 1).map(({ name }) => name) || [];
      } else {
        return [];
      }
    });
    const parentNode = computed(() => {
      for (const parentNodeName of parentNodes.value) {
        if (workflowsStore?.pinnedWorkflowData?.[parentNodeName]) {
          return parentNodeName;
        }
        if (workflowRunData.value?.[parentNodeName]) {
          return parentNodeName;
        }
      }
      return parentNodes.value[0];
    });
    const inputNodeName = computed(() => {
      const nodeOutputs = activeNode.value && activeNodeType.value ? getNodeOutputs(props.workflowObject, activeNode.value, activeNodeType.value) : [];
      const nonMainOutputs = nodeOutputs.filter((output2) => {
        if (typeof output2 === "string") return output2 !== NodeConnectionTypes.Main;
        return output2.type !== NodeConnectionTypes.Main;
      });
      const isSubNode = nonMainOutputs.length > 0;
      if (isSubNode && activeNode.value) {
        const connectedOutputNode = props.workflowObject.getChildNodes(
          activeNode.value.name,
          "ALL_NON_MAIN"
        )?.[0];
        return connectedOutputNode;
      }
      return selectedInput.value || parentNode.value;
    });
    const inputNode = computed(() => {
      if (inputNodeName.value) {
        return workflowsStore.getNodeByName(inputNodeName.value);
      }
      return null;
    });
    const inputSize = computed(() => ndvStore.ndvInputDataWithPinnedData.length);
    const isTriggerNode = computed(
      () => !!activeNodeType.value && (activeNodeType.value.group.includes("trigger") || activeNodeType.value.name === START_NODE_TYPE)
    );
    const showTriggerPanel = computed(() => {
      const override = !!activeNodeType.value?.triggerPanel;
      if (typeof activeNodeType.value?.triggerPanel === "boolean") {
        return override;
      }
      const isWebhookBasedNode = !!activeNodeType.value?.webhooks?.length;
      const isPollingNode = activeNodeType.value?.polling;
      return !props.readOnly && isTriggerNode.value && (isWebhookBasedNode || isPollingNode || override);
    });
    const isExecutableTriggerNode = computed(() => {
      if (!activeNodeType.value) return false;
      return EXECUTABLE_TRIGGER_NODE_TYPES.includes(activeNodeType.value.name);
    });
    const isActiveStickyNode = computed(
      () => !!ndvStore.activeNode && ndvStore.activeNode.type === STICKY_NODE_TYPE
    );
    const workflowExecution = computed(() => workflowsStore.getWorkflowExecution);
    const maxOutputRun = computed(() => {
      if (activeNode.value === null) {
        return 0;
      }
      const runData = workflowRunData.value;
      if (!runData?.[activeNode.value.name]) {
        return 0;
      }
      if (runData[activeNode.value.name].length) {
        return runData[activeNode.value.name].length - 1;
      }
      return 0;
    });
    const outputRun = computed(
      () => runOutputIndex.value === -1 ? maxOutputRun.value : Math.min(runOutputIndex.value, maxOutputRun.value)
    );
    const maxInputRun = computed(() => {
      if (inputNode.value === null || activeNode.value === null) {
        return 0;
      }
      const workflowNode = props.workflowObject.getNode(activeNode.value.name);
      if (!workflowNode || !activeNodeType.value) {
        return 0;
      }
      const outputs = getNodeOutputs(
        props.workflowObject,
        workflowNode,
        activeNodeType.value
      );
      let node = inputNode.value;
      const runData = workflowRunData.value;
      if (outputs.some((output2) => output2 !== NodeConnectionTypes.Main)) {
        node = activeNode.value;
      }
      if (!node || !runData || !runData.hasOwnProperty(node.name)) {
        return 0;
      }
      if (runData[node.name].length) {
        return runData[node.name].length - 1;
      }
      return 0;
    });
    const inputRun = computed(() => {
      if (isLinkingEnabled.value && maxOutputRun.value === maxInputRun.value) {
        return outputRun.value;
      }
      if (runInputIndex.value === -1) {
        return maxInputRun.value;
      }
      return Math.min(runInputIndex.value, maxInputRun.value);
    });
    const canLinkRuns = computed(
      () => maxOutputRun.value > 0 && maxOutputRun.value === maxInputRun.value
    );
    const linked = computed(() => isLinkingEnabled.value && canLinkRuns.value);
    const outputPanelEditMode = computed(() => ndvStore.outputPanelEditMode);
    const isWorkflowRunning = computed(() => uiStore.isActionActive.workflowRunning);
    const isExecutionWaitingForWebhook = computed(() => workflowsStore.executionWaitingForWebhook);
    const blockUi = computed(() => isWorkflowRunning.value || isExecutionWaitingForWebhook.value);
    const foreignCredentials = computed(
      () => nodeHelpers.getForeignCredentialsIfSharingEnabled(activeNode.value?.credentials)
    );
    const hasForeignCredential = computed(() => foreignCredentials.value.length > 0);
    const inputPanelDisplayMode = computed(() => ndvStore.inputPanelDisplayMode);
    const outputPanelDisplayMode = computed(() => ndvStore.outputPanelDisplayMode);
    const hasInputPanel = computed(() => !isTriggerNode.value || showTriggerPanel.value);
    const supportedResizeDirections = computed(
      () => hasInputPanel.value ? ["left", "right"] : ["right"]
    );
    const currentNodePaneType = computed(() => {
      if (!hasInputPanel.value) return "inputless";
      return activeNodeType.value?.parameterPane ?? "regular";
    });
    const { containerWidth, onDrag, onResize, onResizeEnd, panelWidthPercentage, panelWidthPixels } = useNdvLayout({ container: containerRef, hasInputPanel, paneType: currentNodePaneType });
    const setIsTooltipVisible = ({ isTooltipVisible }) => {
      pinDataDiscoveryTooltipVisible.value = isTooltipVisible;
    };
    const onKeyDown = (e) => {
      if (e.key === "s" && deviceSupport.isCtrlKeyPressed(e)) {
        onSaveWorkflow(e);
      }
    };
    const onSaveWorkflow = (e) => {
      e.stopPropagation();
      e.preventDefault();
      if (props.readOnly) return;
      emit("saveKeyboardShortcut", e);
    };
    const onInputItemHover = (e) => {
      if (e === null || !inputNodeName.value || !isPairedItemHoveringEnabled.value) {
        ndvStore.setHoveringItem(null);
        return;
      }
      const item = {
        nodeName: inputNodeName.value,
        runIndex: inputRun.value,
        outputIndex: e.outputIndex,
        itemIndex: e.itemIndex
      };
      ndvStore.setHoveringItem(item);
    };
    const onInputTableMounted = (e) => {
      avgInputRowHeight.value = e.avgRowHeight;
    };
    const onWorkflowActivate = () => {
      ndvStore.activeNodeName = null;
      setTimeout(() => {
        void workflowActivate.activateCurrentWorkflow("ndv");
      }, 1e3);
    };
    const onOutputItemHover = (e) => {
      if (e === null || !activeNode.value || !isPairedItemHoveringEnabled.value) {
        ndvStore.setHoveringItem(null);
        return;
      }
      const item = {
        nodeName: activeNode.value?.name,
        runIndex: outputRun.value,
        outputIndex: e.outputIndex,
        itemIndex: e.itemIndex
      };
      ndvStore.setHoveringItem(item);
    };
    const onDragEnd = () => {
      onResizeEnd();
      isDragging.value = false;
      telemetry.track("User moved parameters pane", {
        // example method for tracking
        window_width: containerWidth.value,
        start_position: mainPanelPosition.value,
        // TODO:
        // end_position: mainPanelDimensions.value.relativeLeft,
        node_type: activeNodeType.value ? activeNodeType.value.name : "",
        push_ref: pushRef.value,
        workflow_id: workflowsStore.workflowId
      });
    };
    const onDragStart = () => {
      isDragging.value = true;
    };
    const onLinkRunToOutput = () => {
      isLinkingEnabled.value = true;
      trackLinking("output");
    };
    const onUnlinkRun = (pane) => {
      runInputIndex.value = runOutputIndex.value;
      isLinkingEnabled.value = false;
      trackLinking(pane);
    };
    const onNodeExecute = () => {
      setTimeout(() => {
        if (!activeNode.value || !workflowRunning.value) {
          return;
        }
        triggerWaitingWarningEnabled.value = true;
      }, 1e3);
    };
    const openSettings = () => {
      settingsEventBus.emit("openSettings");
    };
    const trackLinking = (pane) => {
      telemetry.track("User changed ndv run linking", {
        node_type: activeNodeType.value ? activeNodeType.value.name : "",
        push_ref: pushRef.value,
        linked: linked.value,
        pane
      });
    };
    const onLinkRunToInput = () => {
      runOutputIndex.value = runInputIndex.value;
      isLinkingEnabled.value = true;
      trackLinking("input");
    };
    const onSwitchSelectedNode = (nodeTypeName) => {
      emit("switchSelectedNode", nodeTypeName);
    };
    const onOpenConnectionNodeCreator = (nodeTypeName, connectionType) => {
      emit("openConnectionNodeCreator", nodeTypeName, connectionType);
    };
    const close = async () => {
      if (isDragging.value) {
        return;
      }
      if (outputPanelEditMode.value.enabled && activeNode.value) {
        const shouldPinDataBeforeClosing = await message.confirm(
          "",
          i18n.baseText("ndv.pinData.beforeClosing.title"),
          {
            confirmButtonText: i18n.baseText("ndv.pinData.beforeClosing.confirm"),
            cancelButtonText: i18n.baseText("ndv.pinData.beforeClosing.cancel")
          }
        );
        if (shouldPinDataBeforeClosing === MODAL_CONFIRM) {
          const { value } = outputPanelEditMode.value;
          try {
            pinnedData.setData(jsonParse(value), "on-ndv-close-modal");
          } catch (error) {
            console.error(error);
          }
        }
        ndvStore.setOutputPanelEditModeEnabled(false);
      }
      await externalHooks.run("dataDisplay.nodeEditingFinished");
      telemetry.track("User closed node modal", {
        node_type: activeNodeType.value ? activeNodeType.value?.name : "",
        push_ref: pushRef.value,
        workflow_id: workflowsStore.workflowId
      });
      triggerWaitingWarningEnabled.value = false;
      ndvStore.activeNodeName = null;
      ndvStore.resetNDVPushRef();
    };
    useKeybindings({ Escape: close });
    const trackRunChange = (run, pane) => {
      telemetry.track("User changed ndv run dropdown", {
        push_ref: pushRef.value,
        run_index: run,
        node_type: activeNodeType.value ? activeNodeType.value?.name : "",
        pane
      });
    };
    const onRunOutputIndexChange = (run) => {
      runOutputIndex.value = run;
      trackRunChange(run, "output");
    };
    const onRunInputIndexChange = (run) => {
      runInputIndex.value = run;
      if (linked.value) {
        runOutputIndex.value = run;
      }
      trackRunChange(run, "input");
    };
    const onOutputTableMounted = (e) => {
      avgOutputRowHeight.value = e.avgRowHeight;
    };
    const onInputNodeChange = (value, index) => {
      runInputIndex.value = -1;
      isLinkingEnabled.value = true;
      selectedInput.value = value;
      telemetry.track("User changed ndv input dropdown", {
        node_type: activeNode.value ? activeNode.value.type : "",
        push_ref: pushRef.value,
        workflow_id: workflowsStore.workflowId,
        selection_value: index,
        input_node_type: inputNode.value ? inputNode.value.type : ""
      });
    };
    const onStopExecution = () => {
      emit("stopExecution");
    };
    const activateInputPane = () => {
      isInputPaneActive.value = true;
      isOutputPaneActive.value = false;
    };
    const activateOutputPane = () => {
      isInputPaneActive.value = false;
      isOutputPaneActive.value = true;
    };
    const onSearch = (search) => {
      isPairedItemHoveringEnabled.value = !search;
    };
    const registerKeyboardListener = () => {
      document.addEventListener("keydown", onKeyDown, true);
    };
    const unregisterKeyboardListener = () => {
      document.removeEventListener("keydown", onKeyDown, true);
    };
    const onRename = (name) => {
      emit("renameNode", name);
    };
    const handleChangeDisplayMode = (pane, mode) => {
      ndvStore.setPanelDisplayMode({ pane, mode });
    };
    watch(
      activeNode,
      (node, oldNode) => {
        if (node && !oldNode) {
          registerKeyboardListener();
          dialogRef.value?.show();
        } else if (!node) {
          unregisterKeyboardListener();
        }
        if (node && node.name !== oldNode?.name && !isActiveStickyNode.value) {
          runInputIndex.value = -1;
          runOutputIndex.value = -1;
          isLinkingEnabled.value = true;
          selectedInput.value = void 0;
          triggerWaitingWarningEnabled.value = false;
          avgOutputRowHeight.value = 0;
          avgInputRowHeight.value = 0;
          setTimeout(() => ndvStore.setNDVPushRef(), 0);
          if (!activeNodeType.value) {
            return;
          }
          void externalHooks.run("dataDisplay.nodeTypeChanged", {
            nodeSubtitle: nodeHelpers.getNodeSubtitle(node, activeNodeType.value, props.workflowObject)
          });
          setTimeout(() => {
            if (activeNode.value) {
              const outgoingConnections = workflowsStore.outgoingConnectionsByNodeName(
                activeNode.value?.name
              );
              telemetry.track("User opened node modal", {
                node_id: activeNode.value?.id,
                node_type: activeNodeType.value ? activeNodeType.value?.name : "",
                workflow_id: workflowsStore.workflowId,
                push_ref: pushRef.value,
                is_editable: !hasForeignCredential.value,
                parameters_pane_position: mainPanelPosition.value,
                input_first_connector_runs: maxInputRun.value,
                output_first_connector_runs: maxOutputRun.value,
                selected_view_inputs: isTriggerNode.value ? "trigger" : ndvStore.inputPanelDisplayMode,
                selected_view_outputs: ndvStore.outputPanelDisplayMode,
                input_connectors: parentNodes.value.length,
                output_connectors: outgoingConnections?.main?.length,
                input_displayed_run_index: inputRun.value,
                output_displayed_run_index: outputRun.value,
                data_pinning_tooltip_presented: pinDataDiscoveryTooltipVisible.value,
                input_displayed_row_height_avg: avgInputRowHeight.value,
                output_displayed_row_height_avg: avgOutputRowHeight.value
              });
            }
          }, 2e3);
        }
        if (window.top && !isActiveStickyNode.value) {
          window.top.postMessage(JSON.stringify({ command: node ? "openNDV" : "closeNDV" }), "*");
        }
      },
      { immediate: true }
    );
    watch(maxOutputRun, () => {
      runOutputIndex.value = -1;
    });
    watch(maxInputRun, () => {
      runInputIndex.value = -1;
    });
    watch(inputNodeName, (nodeName) => {
      setTimeout(() => {
        ndvStore.setInputNodeName(nodeName);
      }, 0);
    });
    watch(inputRun, (run) => {
      setTimeout(() => {
        ndvStore.setInputRunIndex(run);
      }, 0);
    });
    watch(mainPanelRef, (mainPanel) => {
      if (!mainPanel) return;
      function getTabbableCandidates(element) {
        const nodes = [];
        const walker = document.createTreeWalker(element, NodeFilter.SHOW_ELEMENT, {
          acceptNode: (node) => {
            const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
            if (node.disabled || node.hidden || isHiddenInput) return NodeFilter.FILTER_SKIP;
            return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
          }
        });
        while (walker.nextNode()) nodes.push(walker.currentNode);
        return nodes;
      }
      const firstFocusableElement = getTabbableCandidates(mainPanel)[0];
      if (firstFocusableElement) {
        firstFocusableElement.focus();
      }
    });
    onMounted(() => {
      dialogRef.value?.show();
      dataPinningEventBus.on("data-pinning-discovery", setIsTooltipVisible);
    });
    onBeforeUnmount(() => {
      dataPinningEventBus.off("data-pinning-discovery", setIsTooltipVisible);
      unregisterKeyboardListener();
    });
    return (_ctx, _cache) => {
      const _component_NDVFloatingNodes = __unplugin_components_0;
      const _component_NDVHeader = __unplugin_components_1;
      const _component_N8nResizeWrapper = N8nResizeWrapper;
      return unref(activeNode) && activeNodeType.value && !isActiveStickyNode.value ? (openBlock(), createBlock(Teleport, {
        key: 0,
        to: `#${unref(APP_MODALS_ELEMENT_ID)}`
      }, [
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.backdrop),
          style: normalizeStyle({ zIndex: unref(APP_Z_INDEXES).NDV }),
          onClick: close
        }, null, 6),
        createBaseVNode("dialog", {
          ref_key: "dialogRef",
          ref: dialogRef,
          open: "",
          "aria-modal": "true",
          "data-test-id": "ndv",
          class: normalizeClass(_ctx.$style.dialog),
          style: normalizeStyle({ zIndex: unref(APP_Z_INDEXES).NDV })
        }, [
          createVNode(_component_NDVFloatingNodes, {
            "root-node": unref(activeNode),
            onSwitchSelectedNode
          }, null, 8, ["root-node"]),
          createBaseVNode("div", {
            ref_key: "containerRef",
            ref: containerRef,
            class: normalizeClass(_ctx.$style.container)
          }, [
            createVNode(_component_NDVHeader, {
              class: normalizeClass(_ctx.$style.header),
              "node-name": unref(activeNode).name,
              "node-type-name": activeNodeType.value.defaults.name ?? activeNodeType.value.displayName,
              icon: unref(getNodeIconSource)(activeNodeType.value),
              "docs-url": unref(docsUrl),
              onClose: close,
              onRename
            }, null, 8, ["class", "node-name", "node-type-name", "icon", "docs-url"]),
            createBaseVNode("main", {
              class: normalizeClass(_ctx.$style.main)
            }, [
              hasInputPanel.value ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass([_ctx.$style.column, _ctx.$style.dataColumn]),
                style: normalizeStyle({ width: `${unref(panelWidthPercentage).left}%` })
              }, [
                showTriggerPanel.value ? (openBlock(), createBlock(TriggerPanel, {
                  key: 0,
                  "node-name": unref(activeNode).name,
                  "push-ref": pushRef.value,
                  class: normalizeClass(_ctx.$style.input),
                  onExecute: onNodeExecute,
                  onActivate: onWorkflowActivate
                }, null, 8, ["node-name", "push-ref", "class"])) : !isTriggerNode.value ? (openBlock(), createBlock(InputPanel, {
                  key: 1,
                  "workflow-object": _ctx.workflowObject,
                  "can-link-runs": canLinkRuns.value,
                  "run-index": inputRun.value,
                  "linked-runs": linked.value,
                  "active-node-name": unref(activeNode).name,
                  "current-node-name": inputNodeName.value,
                  "push-ref": pushRef.value,
                  "read-only": _ctx.readOnly || hasForeignCredential.value,
                  "is-production-execution-preview": _ctx.isProductionExecutionPreview,
                  "is-pane-active": isInputPaneActive.value,
                  "display-mode": inputPanelDisplayMode.value,
                  class: normalizeClass(_ctx.$style.input),
                  "is-mapping-onboarded": unref(ndvStore).isMappingOnboarded,
                  "focused-mappable-input": unref(ndvStore).focusedMappableInput,
                  onActivatePane: activateInputPane,
                  onLinkRun: onLinkRunToInput,
                  onUnlinkRun: _cache[0] || (_cache[0] = () => onUnlinkRun("input")),
                  onRunChange: onRunInputIndexChange,
                  onOpenSettings: openSettings,
                  onChangeInputNode: onInputNodeChange,
                  onExecute: onNodeExecute,
                  onTableMounted: onInputTableMounted,
                  onItemHover: onInputItemHover,
                  onSearch,
                  onDisplayModeChange: _cache[1] || (_cache[1] = ($event) => handleChangeDisplayMode("input", $event))
                }, null, 8, ["workflow-object", "can-link-runs", "run-index", "linked-runs", "active-node-name", "current-node-name", "push-ref", "read-only", "is-production-execution-preview", "is-pane-active", "display-mode", "class", "is-mapping-onboarded", "focused-mappable-input"])) : createCommentVNode("", true)
              ], 6)) : createCommentVNode("", true),
              createVNode(_component_N8nResizeWrapper, {
                width: unref(panelWidthPixels).main,
                "min-width": 260,
                "supported-directions": supportedResizeDirections.value,
                "grid-size": 8,
                class: normalizeClass(_ctx.$style.column),
                style: normalizeStyle({ width: `${unref(panelWidthPercentage).main}%` }),
                outset: "",
                onResize: unref(onResize),
                onResizestart: onDragStart,
                onResizeend: onDragEnd
              }, {
                default: withCtx(() => [
                  createBaseVNode("div", {
                    ref_key: "mainPanelRef",
                    ref: mainPanelRef,
                    class: normalizeClass(_ctx.$style.main)
                  }, [
                    hasInputPanel.value ? (openBlock(), createBlock(PanelDragButtonV2, {
                      key: 0,
                      class: normalizeClass(_ctx.$style.draggable),
                      "can-move-left": true,
                      "can-move-right": true,
                      onDrag: unref(onDrag),
                      onDragstart: onDragStart,
                      onDragend: onDragEnd
                    }, null, 8, ["class", "onDrag"])) : createCommentVNode("", true),
                    createVNode(NodeSettings, {
                      "event-bus": unref(settingsEventBus),
                      dragging: isDragging.value,
                      "push-ref": pushRef.value,
                      "node-type": activeNodeType.value,
                      "foreign-credentials": foreignCredentials.value,
                      "read-only": _ctx.readOnly,
                      "block-u-i": blockUi.value && showTriggerPanel.value,
                      executable: !_ctx.readOnly,
                      "input-size": inputSize.value,
                      class: normalizeClass(_ctx.$style.settings),
                      onExecute: onNodeExecute,
                      onStopExecution,
                      onActivate: onWorkflowActivate,
                      onSwitchSelectedNode,
                      onOpenConnectionNodeCreator
                    }, null, 8, ["event-bus", "dragging", "push-ref", "node-type", "foreign-credentials", "read-only", "block-u-i", "executable", "input-size", "class"])
                  ], 2)
                ]),
                _: 1
              }, 8, ["width", "supported-directions", "class", "style", "onResize"]),
              createBaseVNode("div", {
                class: normalizeClass([_ctx.$style.column, _ctx.$style.dataColumn]),
                style: normalizeStyle({ width: `${unref(panelWidthPercentage).right}%` })
              }, [
                createVNode(OutputPanel, {
                  "data-test-id": "output-panel",
                  "workflow-object": _ctx.workflowObject,
                  "can-link-runs": canLinkRuns.value,
                  "run-index": outputRun.value,
                  "linked-runs": linked.value,
                  "push-ref": pushRef.value,
                  "is-read-only": _ctx.readOnly || hasForeignCredential.value,
                  "block-u-i": blockUi.value && isTriggerNode.value && !isExecutableTriggerNode.value,
                  "is-production-execution-preview": _ctx.isProductionExecutionPreview,
                  "is-pane-active": isOutputPaneActive.value,
                  "display-mode": outputPanelDisplayMode.value,
                  class: normalizeClass(_ctx.$style.output),
                  onActivatePane: activateOutputPane,
                  onLinkRun: onLinkRunToOutput,
                  onUnlinkRun: _cache[2] || (_cache[2] = () => onUnlinkRun("output")),
                  onRunChange: onRunOutputIndexChange,
                  onOpenSettings: openSettings,
                  onTableMounted: onOutputTableMounted,
                  onItemHover: onOutputItemHover,
                  onSearch,
                  onExecute: onNodeExecute,
                  onDisplayModeChange: _cache[3] || (_cache[3] = ($event) => handleChangeDisplayMode("output", $event))
                }, null, 8, ["workflow-object", "can-link-runs", "run-index", "linked-runs", "push-ref", "is-read-only", "block-u-i", "is-production-execution-preview", "is-pane-active", "display-mode", "class"])
              ], 6)
            ], 2)
          ], 2)
        ], 6)
      ], 8, ["to"])) : createCommentVNode("", true);
    };
  }
});
const backdrop = "_backdrop_2bzlu_123";
const dialog = "_dialog_2bzlu_133";
const container = "_container_2bzlu_147";
const main = "_main_2bzlu_158";
const column = "_column_2bzlu_168";
const input = "_input_2bzlu_181";
const output = "_output_2bzlu_182";
const dataColumn = "_dataColumn_2bzlu_186";
const header = "_header_2bzlu_190";
const settings = "_settings_2bzlu_196";
const draggable = "_draggable_2bzlu_201";
const style0 = {
  backdrop,
  dialog,
  container,
  main,
  column,
  input,
  output,
  dataColumn,
  header,
  settings,
  draggable
};
const cssModules = {
  "$style": style0
};
const NodeDetailsViewV2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);
export {
  NodeDetailsViewV2 as default
};
