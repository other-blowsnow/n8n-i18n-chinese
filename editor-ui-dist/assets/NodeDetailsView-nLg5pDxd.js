import { d as defineComponent, h as resolveComponent, e as createBlock, g as openBlock, gU as Draggable, n as normalizeClass, w as withCtx, k as createBaseVNode, i as createElementBlock, f as createCommentVNode, j as createVNode, _ as _export_sfc, T as useWorkflowsStore, bw as useNodeTypesStore, x as computed, bf as NodeConnectionTypes, o as onMounted, z as onBeforeUnmount, F as Fragment, G as renderList, bF as _sfc_main$d, l as createTextVNode, t as toDisplayString, c3 as useThrottleFn, aA as useNDVStore, J as useUIStore, r as ref, cB as useSlots, cb as ndvEventBus, $ as watch, hK as MAIN_NODE_PANEL_WIDTH, aR as useStorage, hL as LOCAL_STORAGE_MAIN_PANEL_RELATIVE_WIDTH, m as unref, D as normalizeStyle, A as renderSlot, B as nextTick, hM as convertToDisplayDateComponents, bX as resolveDirective, fo as InfoTip, aI as withDirectives, c as useI18n, bd as emptyTokenUsageData, bc as addTokenUsageData, bz as getDefaultExportFromCjs, hN as requireCapitalize, f_ as parseAiContent, hO as FontAwesomeIcon, bL as N8nRadioButtons, by as formatTokenUsageCount, hP as ElTree, eR as storeToRefs, v as useSettingsStore, dJ as useNodeDirtiness, fU as useNodeType, bp as usePinnedData, cN as CanvasNodeDirtiness, b1 as createSlots, p as N8nText, bY as waitingNodeTooltip, aJ as vShow, am as useTelemetry, cn as isPresent, hQ as truncate, gM as createStaticVNode, bx as START_NODE_TYPE, hr as MANUAL_TRIGGER_NODE_TYPE, hR as CRON_NODE_TYPE, hS as INTERVAL_NODE_TYPE, d3 as getNodeInputs, dM as getNodeOutputs, hT as uniqBy, bQ as resolveDynamicComponent, bE as withModifiers, aZ as N8nTooltip, dc as _sfc_main$g, bH as N8nIcon, b as useRouter, a9 as useWorkflowHelpers, hU as isTriggerPanelObject, dN as getTriggerNodeServiceName, bo as CHAT_TRIGGER_NODE_TYPE, hx as WEBHOOK_NODE_TYPE, cX as FORM_TRIGGER_NODE_TYPE, fr as CopyInput, E as createEventBus, dB as Transition, V as VIEWS, aq as WORKFLOW_SETTINGS_MODAL_KEY, br as useNodeHelpers, cx as useDeviceSupport, hV as EXECUTABLE_TRIGGER_NODE_TYPES, aG as STICKY_NODE_TYPE, hW as BASE_NODE_SURVEY_URL, ae as EnterpriseEditionFeature, g0 as dataPinningEventBus, c0 as useStyles, hX as APP_MODALS_ELEMENT_ID, ao as useMessage, ap as MODAL_CONFIRM, e6 as jsonParse, aX as useExternalHooks } from "./index-Y0sphpVt.js";
import { N as NodeSettings } from "./NodeView-BVY0pPCs.js";
import { b as _sfc_main$e, c as ViewSubExecution, _ as _sfc_main$f, R as RunData } from "./RunData-DxuRERNF.js";
import RunDataAi$1 from "./RunDataParsedAiContent-Bnr9K-66.js";
import { u as useWorkflowActivate } from "./useWorkflowActivate-zIH0rteE.js";
import "./import-curl-8gGmidZq.js";
import "./global-link-actions-BYlJiHpX.js";
import "./useExecutionDebugging-BeGW0hM-.js";
import "./useBeforeUnload-AiJThaqv.js";
import "./canvas-Bbk-m1HT.js";
import "./FileSaver.min-DH2NFi71.js";
import "./useExecutionHelpers-B_Y5s7gr.js";
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "PanelDragButton",
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
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      return openBlock(), createBlock(Draggable, {
        type: "panel-resize",
        class: normalizeClass(_ctx.$style.dragContainer),
        onDrag,
        onDragstart: onDragStart,
        onDragend: onDragEnd
      }, {
        default: withCtx(({ isDragging }) => [
          createBaseVNode("div", {
            class: normalizeClass({ [_ctx.$style.dragButton]: true }),
            "data-test-id": "panel-drag-button"
          }, [
            _ctx.canMoveLeft ? (openBlock(), createElementBlock("span", {
              key: 0,
              class: normalizeClass({ [_ctx.$style.leftArrow]: true, [_ctx.$style.visible]: isDragging })
            }, [
              createVNode(_component_font_awesome_icon, { icon: "arrow-left" })
            ], 2)) : createCommentVNode("", true),
            _ctx.canMoveRight ? (openBlock(), createElementBlock("span", {
              key: 1,
              class: normalizeClass({ [_ctx.$style.rightArrow]: true, [_ctx.$style.visible]: isDragging })
            }, [
              createVNode(_component_font_awesome_icon, { icon: "arrow-right" })
            ], 2)) : createCommentVNode("", true),
            createBaseVNode("div", {
              class: normalizeClass(_ctx.$style.grid)
            }, _cache[0] || (_cache[0] = [
              createBaseVNode("div", null, [
                createBaseVNode("div"),
                createBaseVNode("div"),
                createBaseVNode("div"),
                createBaseVNode("div"),
                createBaseVNode("div")
              ], -1),
              createBaseVNode("div", null, [
                createBaseVNode("div"),
                createBaseVNode("div"),
                createBaseVNode("div"),
                createBaseVNode("div"),
                createBaseVNode("div")
              ], -1)
            ]), 2)
          ], 2)
        ]),
        _: 1
      }, 8, ["class"]);
    };
  }
});
const dragContainer = "_dragContainer_16elv_123";
const dragButton = "_dragButton_16elv_127";
const leftArrow = "_leftArrow_16elv_141 _arrow_16elv_150";
const rightArrow = "_rightArrow_16elv_142 _arrow_16elv_150";
const visible$1 = "_visible_16elv_146";
const arrow = "_arrow_16elv_150";
const grid = "_grid_16elv_168";
const style0$a = {
  dragContainer,
  dragButton,
  leftArrow,
  rightArrow,
  visible: visible$1,
  arrow,
  grid
};
const cssModules$b = {
  "$style": style0$a
};
const PanelDragButton = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__cssModules", cssModules$b]]);
const _hoisted_1$6 = ["data-node-name", "data-node-placement", "onClick"];
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "NDVFloatingNodes",
  props: {
    rootNode: {}
  },
  emits: ["switchSelectedNode"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const workflowsStore = useWorkflowsStore();
    const nodeTypesStore = useNodeTypesStore();
    const workflow = workflowsStore.getCurrentWorkflow();
    const emit = __emit;
    function moveNodeDirection(direction) {
      const matchedDirectionNode = connectedNodes.value[direction][0];
      if (matchedDirectionNode) {
        emit("switchSelectedNode", matchedDirectionNode.node.name);
      }
    }
    function onKeyDown(e) {
      if (e.shiftKey && e.altKey && (e.ctrlKey || e.metaKey)) {
        const mapper = {
          ArrowUp: "outputSub",
          ArrowRight: "outputMain",
          ArrowLeft: "inputMain"
          /* left */
        };
        const matchingDirection = mapper[e.key] || null;
        if (matchingDirection) {
          moveNodeDirection(matchingDirection);
        }
      }
    }
    function getINodesFromNames(names) {
      return names.map((name) => {
        const node2 = workflowsStore.getNodeByName(name);
        if (node2) {
          const nodeType = nodeTypesStore.getNodeType(node2.type);
          if (nodeType) {
            return { node: node2, nodeType };
          }
        }
        return null;
      }).filter((n) => n !== null);
    }
    const connectedNodes = computed(() => {
      const rootName = props.rootNode.name;
      return {
        [
          "outputSub"
          /* top */
        ]: getINodesFromNames(
          workflow.getChildNodes(rootName, "ALL_NON_MAIN")
        ),
        [
          "outputMain"
          /* right */
        ]: getINodesFromNames(
          workflow.getChildNodes(rootName, NodeConnectionTypes.Main, 1)
        ).reverse(),
        [
          "inputMain"
          /* left */
        ]: getINodesFromNames(
          workflow.getParentNodes(rootName, NodeConnectionTypes.Main, 1)
        ).reverse()
      };
    });
    const connectionGroups = [
      "outputSub",
      "outputMain",
      "inputMain"
      /* left */
    ];
    const tooltipPositionMapper = {
      [
        "outputSub"
        /* top */
      ]: "bottom",
      [
        "outputMain"
        /* right */
      ]: "left",
      [
        "inputMain"
        /* left */
      ]: "right"
    };
    onMounted(() => {
      document.addEventListener("keydown", onKeyDown, true);
    });
    onBeforeUnmount(() => {
      document.removeEventListener("keydown", onKeyDown, true);
    });
    __expose({
      moveNodeDirection
    });
    return (_ctx, _cache) => {
      const _component_n8n_tooltip = resolveComponent("n8n-tooltip");
      return openBlock(), createElementBlock("aside", {
        class: normalizeClass(_ctx.$style.floatingNodes)
      }, [
        (openBlock(), createElementBlock(Fragment, null, renderList(connectionGroups, (connectionGroup) => {
          return createBaseVNode("ul", {
            key: connectionGroup,
            class: normalizeClass([_ctx.$style.nodesList, _ctx.$style[connectionGroup]])
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(connectedNodes.value[connectionGroup], ({ node: node2, nodeType }) => {
              return openBlock(), createElementBlock(Fragment, null, [
                node2 && nodeType ? (openBlock(), createBlock(_component_n8n_tooltip, {
                  key: node2.name,
                  placement: tooltipPositionMapper[connectionGroup],
                  teleported: false,
                  offset: 60
                }, {
                  content: withCtx(() => [
                    createTextVNode(toDisplayString(node2.name), 1)
                  ]),
                  default: withCtx(() => [
                    createBaseVNode("li", {
                      class: normalizeClass(_ctx.$style.connectedNode),
                      "data-test-id": "floating-node",
                      "data-node-name": node2.name,
                      "data-node-placement": connectionGroup,
                      onClick: ($event) => emit("switchSelectedNode", node2.name)
                    }, [
                      createVNode(_sfc_main$d, {
                        "node-type": nodeType,
                        "node-name": node2.name,
                        "tooltip-position": tooltipPositionMapper[connectionGroup],
                        size: 35,
                        circle: ""
                      }, null, 8, ["node-type", "node-name", "tooltip-position"])
                    ], 10, _hoisted_1$6)
                  ]),
                  _: 2
                }, 1032, ["placement"])) : createCommentVNode("", true)
              ], 64);
            }), 256))
          ], 2);
        }), 64))
      ], 2);
    };
  }
});
const floatingNodes = "_floatingNodes_1tkq5_123";
const nodesList = "_nodesList_1tkq5_137";
const inputSub = "_inputSub_1tkq5_151";
const outputSub = "_outputSub_1tkq5_151";
const outputMain = "_outputMain_1tkq5_162";
const inputMain = "_inputMain_1tkq5_162";
const connectedNode = "_connectedNode_1tkq5_185";
const style0$9 = {
  floatingNodes,
  nodesList,
  inputSub,
  outputSub,
  outputMain,
  inputMain,
  connectedNode
};
const cssModules$a = {
  "$style": style0$9
};
const NDVFloatingNodes = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__cssModules", cssModules$a]]);
const SIDE_MARGIN = 24;
const SIDE_PANELS_MARGIN = 80;
const MIN_PANEL_WIDTH = 310;
const PANEL_WIDTH = 350;
const PANEL_WIDTH_LARGE = 420;
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "NDVDraggablePanels",
  props: {
    isDraggable: { type: Boolean },
    hideInputAndOutput: { type: Boolean },
    nodeType: {}
  },
  emits: ["init", "dragstart", "dragend", "switchSelectedNode", "close"],
  setup(__props, { emit: __emit }) {
    const MIN_WINDOW_WIDTH = 2 * (SIDE_MARGIN + SIDE_PANELS_MARGIN) + MIN_PANEL_WIDTH;
    const initialMainPanelWidth = {
      regular: MAIN_NODE_PANEL_WIDTH,
      dragless: MAIN_NODE_PANEL_WIDTH,
      unknown: MAIN_NODE_PANEL_WIDTH,
      inputless: MAIN_NODE_PANEL_WIDTH,
      wide: MAIN_NODE_PANEL_WIDTH * 2
    };
    const throttledOnResize = useThrottleFn(onResize, 100);
    const ndvStore = useNDVStore();
    const uiStore = useUIStore();
    const props = __props;
    const isDragging = ref(false);
    const initialized = ref(false);
    const containerWidth = ref(uiStore.appGridDimensions.width);
    const emit = __emit;
    const slots = useSlots();
    onMounted(() => {
      if (mainPanelDimensions.value.relativeLeft === 1 && mainPanelDimensions.value.relativeRight === 1) {
        setMainPanelWidth();
        setPositions(getInitialLeftPosition(mainPanelDimensions.value.relativeWidth));
        restorePositionData();
      }
      emit("init", { position: mainPanelDimensions.value.relativeLeft });
      setTimeout(() => {
        initialized.value = true;
      }, 0);
      ndvEventBus.on("setPositionByName", setPositionByName);
    });
    onBeforeUnmount(() => {
      ndvEventBus.off("setPositionByName", setPositionByName);
    });
    watch(
      () => uiStore.appGridDimensions,
      async (dimensions) => {
        const ndv = document.getElementById("ndv");
        if (ndv) {
          await nextTick();
          const { width: ndvWidth } = ndv.getBoundingClientRect();
          containerWidth.value = ndvWidth;
        } else {
          containerWidth.value = dimensions.width;
        }
        const minRelativeWidth = pxToRelativeWidth(MIN_PANEL_WIDTH);
        const isBelowMinWidthMainPanel = mainPanelDimensions.value.relativeWidth < minRelativeWidth;
        if (isBelowMinWidthMainPanel) {
          setMainPanelWidth(minRelativeWidth);
        }
        const isBelowMinLeft = minimumLeftPosition.value > mainPanelDimensions.value.relativeLeft;
        const isMaxRight = maximumRightPosition.value > mainPanelDimensions.value.relativeRight;
        if (dimensions.width > MIN_WINDOW_WIDTH && isBelowMinLeft && isMaxRight) {
          setMainPanelWidth(minRelativeWidth);
          setPositions(getInitialLeftPosition(mainPanelDimensions.value.relativeWidth));
        }
        setPositions(mainPanelDimensions.value.relativeLeft);
      }
    );
    const currentNodePaneType = computed(() => {
      if (!hasInputSlot.value) return "inputless";
      if (!props.isDraggable) return "dragless";
      if (props.nodeType === null) return "unknown";
      return props.nodeType.parameterPane ?? "regular";
    });
    const mainPanelDimensions = computed(() => {
      return ndvStore.mainPanelDimensions[currentNodePaneType.value];
    });
    const calculatedPositions = computed(
      () => {
        const hasInput = slots.input !== void 0;
        const outputPanelRelativeLeft = mainPanelDimensions.value.relativeLeft + mainPanelDimensions.value.relativeWidth;
        const inputPanelRelativeRight = hasInput ? 1 - outputPanelRelativeLeft + mainPanelDimensions.value.relativeWidth : 1 - pxToRelativeWidth(SIDE_MARGIN);
        return {
          inputPanelRelativeRight,
          outputPanelRelativeLeft
        };
      }
    );
    const outputPanelRelativeTranslate = computed(() => {
      const panelMinLeft = 1 - pxToRelativeWidth(MIN_PANEL_WIDTH + SIDE_MARGIN);
      const currentRelativeLeftDelta = calculatedPositions.value.outputPanelRelativeLeft - panelMinLeft;
      return currentRelativeLeftDelta > 0 ? currentRelativeLeftDelta : 0;
    });
    const supportedResizeDirections = computed(() => {
      const supportedDirections = ["right"];
      if (props.isDraggable) supportedDirections.push("left");
      return supportedDirections;
    });
    const hasInputSlot = computed(() => {
      return slots.input !== void 0;
    });
    const inputPanelMargin = computed(() => pxToRelativeWidth(SIDE_PANELS_MARGIN));
    const minimumLeftPosition = computed(() => {
      if (containerWidth.value < MIN_WINDOW_WIDTH) return pxToRelativeWidth(1);
      if (!hasInputSlot.value) return pxToRelativeWidth(SIDE_MARGIN);
      return pxToRelativeWidth(SIDE_MARGIN + 20) + inputPanelMargin.value;
    });
    const maximumRightPosition = computed(() => {
      if (containerWidth.value < MIN_WINDOW_WIDTH) return pxToRelativeWidth(1);
      return pxToRelativeWidth(SIDE_MARGIN + 20) + inputPanelMargin.value;
    });
    const canMoveLeft = computed(() => {
      return mainPanelDimensions.value.relativeLeft > minimumLeftPosition.value;
    });
    const canMoveRight = computed(() => {
      return mainPanelDimensions.value.relativeRight > maximumRightPosition.value;
    });
    const mainPanelStyles = computed(() => {
      return {
        left: `${relativeWidthToPx(mainPanelDimensions.value.relativeLeft)}px`,
        right: `${relativeWidthToPx(mainPanelDimensions.value.relativeRight)}px`
      };
    });
    const inputPanelStyles = computed(() => {
      return {
        right: `${relativeWidthToPx(calculatedPositions.value.inputPanelRelativeRight)}px`
      };
    });
    const outputPanelStyles = computed(() => {
      return {
        left: `${relativeWidthToPx(calculatedPositions.value.outputPanelRelativeLeft)}px`,
        transform: `translateX(-${relativeWidthToPx(outputPanelRelativeTranslate.value)}px)`
      };
    });
    const hasDoubleWidth = computed(() => {
      return props.nodeType?.parameterPane === "wide";
    });
    const fixedPanelWidth = computed(() => {
      const multiplier = hasDoubleWidth.value ? 2 : 1;
      if (containerWidth.value > 1700) {
        return PANEL_WIDTH_LARGE * multiplier;
      }
      return PANEL_WIDTH * multiplier;
    });
    const onSwitchSelectedNode = (node2) => emit("switchSelectedNode", node2);
    function getInitialLeftPosition(width) {
      if (currentNodePaneType.value === "dragless")
        return pxToRelativeWidth(SIDE_MARGIN + 1 + fixedPanelWidth.value);
      return hasInputSlot.value ? 0.5 - width / 2 : minimumLeftPosition.value;
    }
    function setMainPanelWidth(relativeWidth) {
      const mainPanelRelativeWidth = relativeWidth || pxToRelativeWidth(initialMainPanelWidth[currentNodePaneType.value]);
      ndvStore.setMainPanelDimensions({
        panelType: currentNodePaneType.value,
        dimensions: {
          relativeWidth: mainPanelRelativeWidth
        }
      });
    }
    function setPositions(relativeLeft) {
      const mainPanelRelativeLeft = relativeLeft || 1 - calculatedPositions.value.inputPanelRelativeRight;
      const mainPanelRelativeRight = 1 - mainPanelRelativeLeft - mainPanelDimensions.value.relativeWidth;
      const isMaxRight = maximumRightPosition.value > mainPanelRelativeRight;
      const isMinLeft = minimumLeftPosition.value > mainPanelRelativeLeft;
      const isInputless = currentNodePaneType.value === "inputless";
      if (isMinLeft) {
        ndvStore.setMainPanelDimensions({
          panelType: currentNodePaneType.value,
          dimensions: {
            relativeLeft: minimumLeftPosition.value,
            relativeRight: 1 - mainPanelDimensions.value.relativeWidth - minimumLeftPosition.value
          }
        });
        return;
      }
      if (isMaxRight) {
        ndvStore.setMainPanelDimensions({
          panelType: currentNodePaneType.value,
          dimensions: {
            relativeLeft: 1 - mainPanelDimensions.value.relativeWidth - maximumRightPosition.value,
            relativeRight: maximumRightPosition.value
          }
        });
        return;
      }
      ndvStore.setMainPanelDimensions({
        panelType: currentNodePaneType.value,
        dimensions: {
          relativeLeft: isInputless ? minimumLeftPosition.value : mainPanelRelativeLeft,
          relativeRight: mainPanelRelativeRight
        }
      });
    }
    function setPositionByName(position) {
      const positionByName = {
        minLeft: minimumLeftPosition.value,
        maxRight: maximumRightPosition.value,
        initial: getInitialLeftPosition(mainPanelDimensions.value.relativeWidth)
      };
      setPositions(positionByName[position]);
    }
    function pxToRelativeWidth(px) {
      return px / containerWidth.value;
    }
    function relativeWidthToPx(relativeWidth) {
      return relativeWidth * containerWidth.value;
    }
    function onResizeEnd() {
      storePositionData();
    }
    function onResizeThrottle(data) {
      if (initialized.value) {
        void throttledOnResize(data);
      }
    }
    function onResize({ direction, x, width }) {
      const relativeDistance = pxToRelativeWidth(x);
      const relativeWidth = pxToRelativeWidth(width);
      if (direction === "left" && relativeDistance <= minimumLeftPosition.value) return;
      if (direction === "right" && 1 - relativeDistance <= maximumRightPosition.value) return;
      if (width <= MIN_PANEL_WIDTH) return;
      setMainPanelWidth(relativeWidth);
      setPositions(direction === "left" ? relativeDistance : mainPanelDimensions.value.relativeLeft);
    }
    function restorePositionData() {
      const storedPanelWidthData = useStorage(
        `${LOCAL_STORAGE_MAIN_PANEL_RELATIVE_WIDTH}_${currentNodePaneType.value}`
      ).value;
      if (storedPanelWidthData) {
        const parsedWidth = parseFloat(storedPanelWidthData);
        setMainPanelWidth(parsedWidth);
        const initialPosition = getInitialLeftPosition(parsedWidth);
        setPositions(initialPosition);
        return true;
      }
      return false;
    }
    function storePositionData() {
      useStorage(`${LOCAL_STORAGE_MAIN_PANEL_RELATIVE_WIDTH}_${currentNodePaneType.value}`).value = mainPanelDimensions.value.relativeWidth.toString();
    }
    function onDragStart() {
      isDragging.value = true;
      emit("dragstart", { position: mainPanelDimensions.value.relativeLeft });
    }
    function onDrag(position) {
      const relativeLeft = pxToRelativeWidth(position[0]) - mainPanelDimensions.value.relativeWidth / 2;
      setPositions(relativeLeft);
    }
    function onDragEnd() {
      setTimeout(() => {
        isDragging.value = false;
        emit("dragend", {
          windowWidth: containerWidth.value,
          position: mainPanelDimensions.value.relativeLeft
        });
      }, 0);
      storePositionData();
    }
    return (_ctx, _cache) => {
      const _component_N8nResizeWrapper = resolveComponent("N8nResizeWrapper");
      return openBlock(), createElementBlock("div", null, [
        unref(ndvStore).activeNode ? (openBlock(), createBlock(NDVFloatingNodes, {
          key: 0,
          "root-node": unref(ndvStore).activeNode,
          onSwitchSelectedNode
        }, null, 8, ["root-node"])) : createCommentVNode("", true),
        !_ctx.hideInputAndOutput ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass(_ctx.$style.inputPanel),
          style: normalizeStyle(inputPanelStyles.value)
        }, [
          renderSlot(_ctx.$slots, "input")
        ], 6)) : createCommentVNode("", true),
        !_ctx.hideInputAndOutput ? (openBlock(), createElementBlock("div", {
          key: 2,
          class: normalizeClass(_ctx.$style.outputPanel),
          style: normalizeStyle(outputPanelStyles.value)
        }, [
          renderSlot(_ctx.$slots, "output")
        ], 6)) : createCommentVNode("", true),
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.mainPanel),
          style: normalizeStyle(mainPanelStyles.value)
        }, [
          createVNode(_component_N8nResizeWrapper, {
            "is-resizing-enabled": currentNodePaneType.value !== "unknown",
            width: relativeWidthToPx(mainPanelDimensions.value.relativeWidth),
            "min-width": MIN_PANEL_WIDTH,
            "grid-size": 20,
            "supported-directions": supportedResizeDirections.value,
            outset: "",
            onResize: onResizeThrottle,
            onResizeend: onResizeEnd
          }, {
            default: withCtx(() => [
              createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.dragButtonContainer)
              }, [
                !_ctx.hideInputAndOutput && _ctx.isDraggable ? (openBlock(), createBlock(PanelDragButton, {
                  key: 0,
                  class: normalizeClass({ [_ctx.$style.draggable]: true, [_ctx.$style.visible]: isDragging.value }),
                  "can-move-left": canMoveLeft.value,
                  "can-move-right": canMoveRight.value,
                  onDragstart: onDragStart,
                  onDrag,
                  onDragend: onDragEnd
                }, null, 8, ["class", "can-move-left", "can-move-right"])) : createCommentVNode("", true)
              ], 2),
              createBaseVNode("div", {
                class: normalizeClass({ [_ctx.$style.mainPanelInner]: true, [_ctx.$style.dragging]: isDragging.value })
              }, [
                renderSlot(_ctx.$slots, "main")
              ], 2)
            ]),
            _: 3
          }, 8, ["is-resizing-enabled", "width", "supported-directions"])
        ], 6)
      ]);
    };
  }
});
const dataPanel = "_dataPanel_181lg_123";
const inputPanel = "_inputPanel_181lg_132 _dataPanel_181lg_123";
const outputPanel = "_outputPanel_181lg_140 _dataPanel_181lg_123";
const mainPanel = "_mainPanel_181lg_148";
const draggable = "_draggable_181lg_152";
const mainPanelInner = "_mainPanelInner_181lg_156";
const dragging = "_dragging_181lg_163";
const dragButtonContainer = "_dragButtonContainer_181lg_176";
const visible = "_visible_181lg_192";
const style0$8 = {
  dataPanel,
  inputPanel,
  outputPanel,
  mainPanel,
  draggable,
  mainPanelInner,
  dragging,
  "double-width": "_double-width_181lg_172",
  dragButtonContainer,
  visible
};
const cssModules$9 = {
  "$style": style0$8
};
const NDVDraggablePanels = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__cssModules", cssModules$9]]);
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "RunInfo",
  props: {
    taskData: {},
    hasStaleData: { type: Boolean },
    hasPinData: { type: Boolean }
  },
  setup(__props) {
    const i18n = useI18n();
    const props = __props;
    const runTaskData = computed(() => {
      return props.taskData;
    });
    const theme = computed(() => {
      return props.taskData?.error ? "danger" : "success";
    });
    const runMetadata = computed(() => {
      if (!runTaskData.value) {
        return null;
      }
      const { date, time } = convertToDisplayDateComponents(runTaskData.value.startTime);
      return {
        executionTime: runTaskData.value.executionTime,
        startTime: `${date} at ${time}`
      };
    });
    return (_ctx, _cache) => {
      const _component_n8n_text = resolveComponent("n8n-text");
      const _directive_n8n_html = resolveDirective("n8n-html");
      return _ctx.hasStaleData ? (openBlock(), createBlock(unref(InfoTip), {
        key: 0,
        theme: "warning-light",
        type: "tooltip",
        "tooltip-placement": "right",
        "data-test-id": "node-run-info-stale"
      }, {
        default: withCtx(() => [
          withDirectives(createBaseVNode("span", null, null, 512), [
            [
              _directive_n8n_html,
              unref(i18n).baseText(
                _ctx.hasPinData ? "ndv.output.staleDataWarning.pinData" : "ndv.output.staleDataWarning.regular"
              )
            ]
          ])
        ]),
        _: 1
      })) : runMetadata.value ? (openBlock(), createElementBlock("div", {
        key: 1,
        class: normalizeClass(_ctx.$style.tooltipRow)
      }, [
        createVNode(unref(InfoTip), {
          type: "note",
          theme: theme.value,
          "data-test-id": `node-run-status-${theme.value}`
        }, null, 8, ["theme", "data-test-id"]),
        createVNode(unref(InfoTip), {
          type: "tooltip",
          theme: "info",
          "data-test-id": `node-run-info`,
          "tooltip-placement": "right"
        }, {
          default: withCtx(() => [
            createBaseVNode("div", null, [
              createVNode(_component_n8n_text, {
                bold: true,
                size: "small"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(runTaskData.value?.error ? unref(i18n).baseText("runData.executionStatus.failed") : unref(i18n).baseText("runData.executionStatus.success")), 1)
                ]),
                _: 1
              }),
              _cache[0] || (_cache[0] = createBaseVNode("br", null, null, -1)),
              createVNode(_component_n8n_text, {
                bold: true,
                size: "small"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(i18n).baseText("runData.startTime") + ":"), 1)
                ]),
                _: 1
              }),
              createTextVNode(" " + toDisplayString(runMetadata.value.startTime), 1),
              _cache[1] || (_cache[1] = createBaseVNode("br", null, null, -1)),
              createVNode(_component_n8n_text, {
                bold: true,
                size: "small"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(i18n).baseText("runData.executionTime") + ":"), 1)
                ]),
                _: 1
              }),
              createTextVNode(" " + toDisplayString(runMetadata.value.executionTime) + " " + toDisplayString(unref(i18n).baseText("runData.ms")), 1)
            ])
          ]),
          _: 1
        })
      ], 2)) : createCommentVNode("", true);
    };
  }
});
const tooltipRow = "_tooltipRow_14r7d_123";
const style0$7 = {
  tooltipRow
};
const cssModules$8 = {
  "$style": style0$7
};
const RunInfo = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__cssModules", cssModules$8]]);
function createNode(parent, nodeName, currentDepth, runIndex, r, children = []) {
  return {
    parent,
    node: nodeName,
    id: `${nodeName}:${runIndex}`,
    depth: currentDepth,
    startTime: r?.data?.metadata?.startTime ?? 0,
    runIndex,
    children,
    consumedTokens: getConsumedTokens(r?.data)
  };
}
function getTreeNodeData(nodeName, workflow, aiData, runIndex) {
  return getTreeNodeDataRec(void 0, nodeName, 0, workflow, aiData, runIndex);
}
function getTreeNodeDataRec(parent, nodeName, currentDepth, workflow, aiData, runIndex) {
  const connections = workflow.connectionsByDestinationNode[nodeName];
  const resultData = aiData?.filter(
    (data) => data.node === nodeName && (runIndex === void 0 || runIndex === data.runIndex)
  ) ?? [];
  if (!connections) {
    return resultData.map((d) => createNode(parent, nodeName, currentDepth, d.runIndex, d));
  }
  const filteredAiData = currentDepth === 0 ? aiData?.filter(({ data }) => {
    if (!data?.source || data.source.every((source) => source === null)) {
      return true;
    }
    return data.source.some(
      (source) => source?.previousNode === nodeName && (runIndex === void 0 || source.previousNodeRun === runIndex)
    );
  }) : aiData;
  const connectedSubNodes = workflow.getParentNodes(nodeName, "ALL_NON_MAIN", 1);
  const treeNode2 = createNode(parent, nodeName, currentDepth, runIndex ?? 0);
  const children = (filteredAiData ?? []).flatMap(
    (data) => connectedSubNodes.includes(data.node) && (runIndex === void 0 || data.runIndex === runIndex) ? getTreeNodeDataRec(treeNode2, data.node, currentDepth + 1, workflow, aiData, data.runIndex) : []
  );
  treeNode2.children = children;
  if (resultData.length) {
    return resultData.map(
      (r) => createNode(parent, nodeName, currentDepth, r.runIndex, r, children)
    );
  }
  return [treeNode2];
}
function createAiData(nodeName, workflow, getWorkflowResultDataByNodeName) {
  return workflow.getParentNodes(nodeName, "ALL_NON_MAIN").flatMap(
    (node2) => (getWorkflowResultDataByNodeName(node2) ?? []).map((task, index) => ({ node: node2, task, index }))
  ).sort((a, b) => {
    if (a.task.executionIndex !== void 0 && b.task.executionIndex !== void 0) {
      return a.task.executionIndex - b.task.executionIndex;
    }
    const aTime = a.task.startTime ?? 0;
    const bTime = b.task.startTime ?? 0;
    return aTime - bTime;
  }).map(({ node: node2, task, index }) => ({
    data: getReferencedData(task, false)[0],
    node: node2,
    runIndex: index
  }));
}
function getReferencedData(taskData, withInput, withOutput) {
  if (!taskData) {
    return [];
  }
  const returnData = [];
  function addFunction(data, inOut) {
    if (!data) {
      return;
    }
    Object.keys(data).map((type) => {
      returnData.push({
        data: data[type][0],
        inOut,
        type,
        // Include source information in AI content to track which node triggered the execution
        // This enables filtering in the UI to show only relevant executions
        source: taskData.source,
        metadata: {
          executionTime: taskData.executionTime,
          startTime: taskData.startTime,
          subExecution: taskData.metadata?.subExecution
        }
      });
    });
  }
  if (withInput) {
    addFunction(taskData.inputOverride, "input");
  }
  {
    addFunction(taskData.data, "output");
  }
  return returnData;
}
function getConsumedTokens(outputRun) {
  if (!outputRun?.data) {
    return emptyTokenUsageData;
  }
  const tokenUsage = outputRun.data.reduce(
    (acc, curr) => {
      const tokenUsageData = curr.json?.tokenUsage ?? curr.json?.tokenUsageEstimate;
      if (!tokenUsageData) return acc;
      return addTokenUsageData(acc, {
        ...tokenUsageData,
        isEstimate: !!curr.json.tokenUsageEstimate
      });
    },
    emptyTokenUsageData
  );
  return tokenUsage;
}
var capitalizeExports = requireCapitalize();
const capitalize = /* @__PURE__ */ getDefaultExportFromCjs(capitalizeExports);
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "AiRunContentBlock",
  props: {
    runData: {},
    error: {}
  },
  setup(__props) {
    const props = __props;
    const isExpanded = ref(getInitialExpandedState());
    const renderType = ref("rendered");
    const parsedRun = computed(() => parseAiContent(props.runData.data ?? [], props.runData.type));
    const contentParsed = computed(
      () => parsedRun.value.some((item) => item.parsedContent?.parsed === true)
    );
    function getInitialExpandedState() {
      const collapsedTypes = {
        input: [
          NodeConnectionTypes.AiDocument,
          NodeConnectionTypes.AiTextSplitter
        ],
        output: [
          NodeConnectionTypes.AiDocument,
          NodeConnectionTypes.AiEmbedding,
          NodeConnectionTypes.AiTextSplitter,
          NodeConnectionTypes.AiVectorStore
        ]
      };
      return !collapsedTypes[props.runData.inOut].includes(props.runData.type);
    }
    function onBlockHeaderClick() {
      isExpanded.value = !isExpanded.value;
    }
    function onRenderTypeChange(value) {
      renderType.value = value;
    }
    return (_ctx, _cache) => {
      const _component_NodeErrorView = _sfc_main$e;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.block)
      }, [
        createBaseVNode("header", {
          class: normalizeClass(_ctx.$style.blockHeader),
          onClick: onBlockHeaderClick
        }, [
          createBaseVNode("button", {
            class: normalizeClass(_ctx.$style.blockToggle)
          }, [
            createVNode(unref(FontAwesomeIcon), {
              icon: isExpanded.value ? "angle-down" : "angle-right",
              size: "lg"
            }, null, 8, ["icon"])
          ], 2),
          createBaseVNode("p", {
            class: normalizeClass(_ctx.$style.blockTitle)
          }, toDisplayString(unref(capitalize)(_ctx.runData.inOut)), 3),
          contentParsed.value && !_ctx.error && isExpanded.value ? (openBlock(), createBlock(unref(N8nRadioButtons), {
            key: 0,
            size: "small",
            "model-value": renderType.value,
            class: normalizeClass(_ctx.$style.rawSwitch),
            options: [
              { label: "Rendered", value: "rendered" },
              { label: "JSON", value: "json" }
            ],
            "onUpdate:modelValue": onRenderTypeChange
          }, null, 8, ["model-value", "class"])) : createCommentVNode("", true)
        ], 2),
        createBaseVNode("main", {
          class: normalizeClass({
            [_ctx.$style.blockContent]: true,
            [_ctx.$style.blockContentExpanded]: isExpanded.value
          })
        }, [
          _ctx.error ? (openBlock(), createBlock(_component_NodeErrorView, {
            key: 0,
            error: _ctx.error,
            class: normalizeClass(_ctx.$style.error),
            "show-details": ""
          }, null, 8, ["error", "class"])) : (openBlock(), createBlock(RunDataAi$1, {
            key: 1,
            data: _ctx.runData.data,
            type: _ctx.runData.type,
            content: parsedRun.value,
            "render-type": renderType.value
          }, null, 8, ["data", "type", "content", "render-type"]))
        ], 2)
      ], 2);
    };
  }
});
const block = "_block_wafm4_123";
const blockContent = "_blockContent_wafm4_130";
const blockContentExpanded = "_blockContentExpanded_wafm4_134";
const rawSwitch = "_rawSwitch_wafm4_138";
const blockHeader = "_blockHeader_wafm4_148";
const blockTitle = "_blockTitle_wafm4_161";
const blockToggle = "_blockToggle_wafm4_168";
const error = "_error_wafm4_176";
const style0$6 = {
  block,
  blockContent,
  blockContentExpanded,
  rawSwitch,
  blockHeader,
  blockTitle,
  blockToggle,
  error
};
const cssModules$7 = {
  "$style": style0$6
};
const AiRunContentBlock = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__cssModules", cssModules$7]]);
const _hoisted_1$5 = { key: 0 };
const _hoisted_2$2 = { key: 1 };
const _hoisted_3$2 = { key: 2 };
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "RunDataAiContent",
  props: {
    inputData: {},
    contentIndex: {}
  },
  setup(__props) {
    const props = __props;
    const nodeTypesStore = useNodeTypesStore();
    const workflowsStore = useWorkflowsStore();
    const i18n = useI18n();
    const consumedTokensSum = computed(() => {
      return getConsumedTokens(outputRun.value);
    });
    function extractRunMeta(run) {
      const uiNode = workflowsStore.getNodeByName(props.inputData.node);
      const nodeType = nodeTypesStore.getNodeType(uiNode?.type ?? "");
      const runMeta2 = {
        startTimeMs: run.metadata.startTime,
        executionTimeMs: run.metadata.executionTime,
        node: nodeType,
        type: run.inOut,
        connectionType: run.type,
        subExecution: run.metadata?.subExecution
      };
      return runMeta2;
    }
    const outputRun = computed(() => {
      return props.inputData.data.find((r) => r.inOut === "output");
    });
    const runMeta = computed(() => {
      if (outputRun.value === void 0) {
        return;
      }
      return extractRunMeta(outputRun.value);
    });
    const executionRunData = computed(() => {
      return workflowsStore.getWorkflowExecution?.data?.resultData?.runData;
    });
    const outputError = computed(() => {
      return executionRunData.value?.[props.inputData.node]?.[props.inputData.runIndex]?.error;
    });
    return (_ctx, _cache) => {
      const _component_n8n_tooltip = resolveComponent("n8n-tooltip");
      const _component_n8n_info_tip = resolveComponent("n8n-info-tip");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.container)
      }, [
        createBaseVNode("header", {
          class: normalizeClass(_ctx.$style.header)
        }, [
          runMeta.value?.node ? (openBlock(), createBlock(_sfc_main$d, {
            key: 0,
            class: normalizeClass(_ctx.$style.nodeIcon),
            "node-type": runMeta.value.node,
            size: 20
          }, null, 8, ["class", "node-type"])) : createCommentVNode("", true),
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.headerWrap)
          }, [
            createBaseVNode("p", {
              class: normalizeClass(_ctx.$style.title)
            }, toDisplayString(_ctx.inputData.node), 3),
            createBaseVNode("ul", {
              class: normalizeClass(_ctx.$style.meta)
            }, [
              runMeta.value?.startTimeMs ? (openBlock(), createElementBlock("li", _hoisted_1$5, toDisplayString(runMeta.value?.executionTimeMs) + "ms", 1)) : createCommentVNode("", true),
              runMeta.value?.startTimeMs ? (openBlock(), createElementBlock("li", _hoisted_2$2, [
                createVNode(_component_n8n_tooltip, null, {
                  content: withCtx(() => [
                    createTextVNode(toDisplayString(new Date(runMeta.value?.startTimeMs).toLocaleString()), 1)
                  ]),
                  default: withCtx(() => [
                    createTextVNode(" " + toDisplayString(unref(i18n).baseText("runData.aiContentBlock.startedAt", {
                      interpolate: {
                        startTime: new Date(runMeta.value?.startTimeMs).toLocaleTimeString()
                      }
                    })), 1)
                  ]),
                  _: 1
                })
              ])) : createCommentVNode("", true),
              runMeta.value ? (openBlock(), createElementBlock("li", _hoisted_3$2, [
                createVNode(ViewSubExecution, {
                  "task-metadata": runMeta.value,
                  "display-mode": "ai",
                  inline: true
                }, null, 8, ["task-metadata"])
              ])) : createCommentVNode("", true),
              (consumedTokensSum.value?.totalTokens ?? 0) > 0 ? (openBlock(), createElementBlock("li", {
                key: 3,
                class: normalizeClass(_ctx.$style.tokensUsage)
              }, [
                createTextVNode(toDisplayString(unref(i18n).baseText("runData.aiContentBlock.tokens", {
                  interpolate: {
                    count: unref(formatTokenUsageCount)(consumedTokensSum.value, "total")
                  }
                })) + " ", 1),
                createVNode(_component_n8n_info_tip, {
                  type: "tooltip",
                  theme: "info-light",
                  "tooltip-placement": "right"
                }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$f, { "consumed-tokens": consumedTokensSum.value }, null, 8, ["consumed-tokens"])
                  ]),
                  _: 1
                })
              ], 2)) : createCommentVNode("", true)
            ], 2)
          ], 2)
        ], 2),
        (openBlock(true), createElementBlock(Fragment, null, renderList(props.inputData.data, (run, index) => {
          return openBlock(), createElementBlock("main", {
            key: index,
            class: normalizeClass(_ctx.$style.content)
          }, [
            createVNode(AiRunContentBlock, {
              "run-data": run,
              error: run.inOut === "output" ? outputError.value : void 0
            }, null, 8, ["run-data", "error"])
          ], 2);
        }), 128))
      ], 2);
    };
  }
});
const container$2 = "_container_dypaw_2";
const nodeIcon$1 = "_nodeIcon_dypaw_5";
const header$1 = "_header_dypaw_8";
const headerWrap = "_headerWrap_dypaw_14";
const title$4 = "_title_dypaw_18";
const meta = "_meta_dypaw_25";
const tokensUsage = "_tokensUsage_dypaw_41";
const style0$5 = {
  container: container$2,
  nodeIcon: nodeIcon$1,
  header: header$1,
  headerWrap,
  title: title$4,
  meta,
  tokensUsage
};
const cssModules$6 = {
  "$style": style0$5
};
const RunDataAiContent = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__cssModules", cssModules$6]]);
const _hoisted_1$4 = ["data-tree-depth"];
const _hoisted_2$1 = ["onClick"];
const _hoisted_3$1 = ["textContent"];
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "RunDataAi",
  props: {
    node: {},
    runIndex: { default: 0 },
    slim: { type: Boolean },
    workflow: {}
  },
  setup(__props) {
    const props = __props;
    const workflowsStore = useWorkflowsStore();
    const nodeTypesStore = useNodeTypesStore();
    const selectedRun = ref([]);
    const i18n = useI18n();
    function isTreeNodeSelected(node2) {
      return selectedRun.value.some((run) => run.node === node2.node && run.runIndex === node2.runIndex);
    }
    function toggleTreeItem(node2) {
      node2.expanded = !node2.expanded;
    }
    function onItemClick(data) {
      const matchingRun = aiData.value?.find(
        (run) => run.node === data.node && run.runIndex === data.runIndex
      );
      if (!matchingRun) {
        selectedRun.value = [];
        return;
      }
      const selectedNodeRun = workflowsStore.getWorkflowResultDataByNodeName(data.node)?.[data.runIndex];
      if (!selectedNodeRun) {
        return;
      }
      selectedRun.value = [
        {
          node: data.node,
          runIndex: data.runIndex,
          data: getReferencedData(selectedNodeRun, true)
        }
      ];
    }
    function getNodeType(nodeName) {
      const node2 = workflowsStore.getNodeByName(nodeName);
      if (!node2) {
        return null;
      }
      const nodeType = nodeTypesStore.getNodeType(node2?.type);
      return nodeType;
    }
    function selectFirst() {
      if (executionTree.value.length && executionTree.value[0].children.length) {
        onItemClick(executionTree.value[0].children[0]);
      }
    }
    const aiData = computed(
      () => createAiData(props.node.name, props.workflow, workflowsStore.getWorkflowResultDataByNodeName)
    );
    const executionTree = computed(
      () => getTreeNodeData(props.node.name, props.workflow, aiData.value)
    );
    watch(() => props.runIndex, selectFirst, { immediate: true });
    return (_ctx, _cache) => {
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      const _component_n8n_tooltip = resolveComponent("n8n-tooltip");
      const _component_n8n_text = resolveComponent("n8n-text");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.container)
      }, [
        aiData.value.length > 0 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createBaseVNode("div", {
            class: normalizeClass({ [_ctx.$style.tree]: true, [_ctx.$style.slim]: _ctx.slim })
          }, [
            createVNode(unref(ElTree), {
              data: executionTree.value,
              props: { label: "node" },
              "default-expand-all": "",
              indent: 12,
              "expand-on-click-node": false,
              "data-test-id": "lm-chat-logs-tree",
              onNodeClick: onItemClick
            }, {
              default: withCtx(({ node: node2, data }) => [
                createBaseVNode("div", {
                  class: normalizeClass({
                    [_ctx.$style.treeNode]: true,
                    [_ctx.$style.isSelected]: isTreeNodeSelected(data)
                  }),
                  "data-tree-depth": data.depth,
                  style: normalizeStyle({ "--item-depth": data.depth })
                }, [
                  data.children.length ? (openBlock(), createElementBlock("button", {
                    key: 0,
                    class: normalizeClass(_ctx.$style.treeToggle),
                    onClick: ($event) => toggleTreeItem(node2)
                  }, [
                    createVNode(_component_font_awesome_icon, {
                      icon: node2.expanded ? "angle-down" : "angle-right"
                    }, null, 8, ["icon"])
                  ], 10, _hoisted_2$1)) : createCommentVNode("", true),
                  createVNode(_component_n8n_tooltip, {
                    disabled: !_ctx.slim,
                    placement: "right"
                  }, {
                    content: withCtx(() => [
                      createTextVNode(toDisplayString(node2.label), 1)
                    ]),
                    default: withCtx(() => [
                      createBaseVNode("span", {
                        class: normalizeClass(_ctx.$style.leafLabel)
                      }, [
                        createVNode(_sfc_main$d, {
                          "node-type": getNodeType(data.node),
                          size: 17,
                          class: normalizeClass(_ctx.$style.nodeIcon)
                        }, null, 8, ["node-type", "class"]),
                        !_ctx.slim ? (openBlock(), createElementBlock("span", {
                          key: 0,
                          textContent: toDisplayString(node2.label)
                        }, null, 8, _hoisted_3$1)) : createCommentVNode("", true)
                      ], 2)
                    ]),
                    _: 2
                  }, 1032, ["disabled"])
                ], 14, _hoisted_1$4)
              ]),
              _: 1
            }, 8, ["data"])
          ], 2),
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.runData)
          }, [
            selectedRun.value.length === 0 ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass(_ctx.$style.empty)
            }, [
              createVNode(_component_n8n_text, { size: "large" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(i18n).baseText("ndv.output.ai.empty", {
                    interpolate: {
                      node: props.node.name
                    }
                  })), 1)
                ]),
                _: 1
              })
            ], 2)) : createCommentVNode("", true),
            (openBlock(true), createElementBlock(Fragment, null, renderList(selectedRun.value, (data, index) => {
              return openBlock(), createElementBlock("div", {
                key: `${data.node}__${data.runIndex}__index`,
                "data-test-id": "lm-chat-logs-entry"
              }, [
                createVNode(RunDataAiContent, {
                  "input-data": data,
                  "content-index": index
                }, null, 8, ["input-data", "content-index"])
              ]);
            }), 128))
          ], 2)
        ], 64)) : (openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass(_ctx.$style.noData)
        }, toDisplayString(unref(i18n).baseText("ndv.output.ai.waiting")), 3))
      ], 2);
    };
  }
});
const treeToggle = "_treeToggle_1qaq4_123";
const leafLabel = "_leafLabel_1qaq4_131";
const noData = "_noData_1qaq4_137";
const empty = "_empty_1qaq4_145";
const title$3 = "_title_1qaq4_149";
const tree = "_tree_1qaq4_123";
const slim = "_slim_1qaq4_161";
const runData$2 = "_runData_1qaq4_165";
const container$1 = "_container_1qaq4_171";
const nodeIcon = "_nodeIcon_1qaq4_198";
const isSelected = "_isSelected_1qaq4_204";
const treeNode = "_treeNode_1qaq4_208";
const style0$4 = {
  treeToggle,
  leafLabel,
  noData,
  empty,
  title: title$3,
  tree,
  slim,
  runData: runData$2,
  container: container$1,
  nodeIcon,
  isSelected,
  treeNode
};
const cssModules$5 = {
  "$style": style0$4
};
const RunDataAi = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__cssModules", cssModules$5]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "OutputPanel",
  props: {
    workflow: {},
    runIndex: {},
    isReadOnly: { type: Boolean },
    linkedRuns: { type: Boolean },
    canLinkRuns: { type: Boolean },
    pushRef: {},
    blockUI: { type: Boolean, default: false },
    isProductionExecutionPreview: { type: Boolean, default: false },
    isPaneActive: { type: Boolean, default: false },
    displayMode: {}
  },
  emits: ["linkRun", "unlinkRun", "runChange", "activatePane", "tableMounted", "itemHover", "search", "openSettings", "displayModeChange"],
  setup(__props, { emit: __emit }) {
    const OUTPUT_TYPE = {
      REGULAR: "regular",
      LOGS: "logs"
    };
    const props = __props;
    const emit = __emit;
    const ndvStore = useNDVStore();
    const nodeTypesStore = useNodeTypesStore();
    const workflowsStore = useWorkflowsStore();
    const telemetry = useTelemetry();
    const i18n = useI18n();
    const { activeNode } = storeToRefs(ndvStore);
    const settings = useSettingsStore();
    const { dirtinessByName } = useNodeDirtiness();
    const { isSubNodeType } = useNodeType({
      node: activeNode
    });
    const pinnedData = usePinnedData(activeNode, {
      runIndex: props.runIndex,
      displayMode: props.displayMode
    });
    const outputMode = ref(OUTPUT_TYPE.REGULAR);
    const outputTypes = ref([
      { label: i18n.baseText("ndv.output.outType.regular"), value: OUTPUT_TYPE.REGULAR },
      { label: i18n.baseText("ndv.output.outType.logs"), value: OUTPUT_TYPE.LOGS }
    ]);
    const runDataRef = ref();
    const node2 = computed(() => {
      return ndvStore.activeNode ?? void 0;
    });
    const isTriggerNode = computed(() => {
      return !!node2.value && nodeTypesStore.isTriggerNode(node2.value.type);
    });
    const hasAiMetadata = computed(() => {
      if (isNodeRunning.value || !workflowRunData.value) {
        return false;
      }
      if (node2.value) {
        const connectedSubNodes = props.workflow.getParentNodes(node2.value.name, "ALL_NON_MAIN");
        const resultData = connectedSubNodes.map(workflowsStore.getWorkflowResultDataByNodeName);
        return resultData && Array.isArray(resultData) && resultData.length > 0;
      }
      return false;
    });
    const hasError = computed(
      () => Boolean(
        workflowRunData.value && node2.value && workflowRunData.value[node2.value.name]?.[props.runIndex]?.error
      )
    );
    const defaultOutputMode = computed(() => {
      return hasError.value && hasAiMetadata.value ? OUTPUT_TYPE.LOGS : OUTPUT_TYPE.REGULAR;
    });
    const isNodeRunning = computed(() => {
      return workflowRunning.value && !!node2.value && workflowsStore.isNodeExecuting(node2.value.name);
    });
    const workflowRunning = computed(() => workflowsStore.isWorkflowRunning);
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
        node2.value && workflowRunData.value && workflowRunData.value.hasOwnProperty(node2.value.name)
      );
    });
    const runTaskData = computed(() => {
      if (!node2.value || workflowExecution.value === null) {
        return null;
      }
      const runData2 = workflowRunData.value;
      if (runData2 === null || !runData2.hasOwnProperty(node2.value.name)) {
        return null;
      }
      if (runData2[node2.value.name].length <= props.runIndex) {
        return null;
      }
      return runData2[node2.value.name][props.runIndex];
    });
    const runsCount = computed(() => {
      if (node2.value === null) {
        return 0;
      }
      const runData2 = workflowRunData.value;
      if (runData2 === null || node2.value && !runData2.hasOwnProperty(node2.value.name)) {
        return 0;
      }
      if (node2.value && runData2[node2.value.name].length) {
        return runData2[node2.value.name].length;
      }
      return 0;
    });
    const staleData = computed(() => {
      if (!node2.value) {
        return false;
      }
      if (settings.partialExecutionVersion === 2) {
        return dirtinessByName.value[node2.value.name] === CanvasNodeDirtiness.PARAMETERS_UPDATED;
      }
      const updatedAt = workflowsStore.getParametersLastUpdate(node2.value.name);
      if (!updatedAt || !runTaskData.value) {
        return false;
      }
      const runAt = runTaskData.value.startTime;
      return updatedAt > runAt;
    });
    const outputPanelEditMode = computed(() => {
      return ndvStore.outputPanelEditMode;
    });
    const canPinData = computed(() => {
      return pinnedData.isValidNodeType.value && !props.isReadOnly;
    });
    const allToolsWereUnusedNotice = computed(() => {
      if (!node2.value || runsCount.value === 0 || hasError.value) return void 0;
      if (pinnedData.hasData.value) return void 0;
      const toolsAvailable = props.workflow.getParentNodes(
        node2.value.name,
        NodeConnectionTypes.AiTool,
        1
      );
      const toolsUsedInLatestRun = toolsAvailable.filter(
        (tool) => !!workflowRunData.value?.[tool]?.[props.runIndex]
      );
      if (toolsAvailable.length > 0 && toolsUsedInLatestRun.length === 0) {
        return i18n.baseText("ndv.output.noToolUsedInfo");
      } else {
        return void 0;
      }
    });
    const insertTestData = () => {
      if (!runDataRef.value) return;
      runDataRef.value.enterEditMode({
        origin: "insertTestDataLink"
      });
      telemetry.track("User clicked ndv link", {
        workflow_id: workflowsStore.workflowId,
        push_ref: props.pushRef,
        node_type: node2.value?.type,
        pane: "output",
        type: "insert-test-data"
      });
    };
    const onLinkRun = () => {
      emit("linkRun");
    };
    const onUnlinkRun = () => {
      emit("unlinkRun");
    };
    const openSettings = () => {
      emit("openSettings");
      telemetry.track("User clicked ndv link", {
        node_type: node2.value?.type,
        workflow_id: workflowsStore.workflowId,
        push_ref: props.pushRef,
        pane: "output",
        type: "settings"
      });
    };
    const onRunIndexChange = (run) => {
      emit("runChange", run);
    };
    const onUpdateOutputMode = (newOutputMode) => {
      if (newOutputMode === OUTPUT_TYPE.LOGS) {
        ndvEventBus.emit("setPositionByName", "minLeft");
      } else {
        ndvEventBus.emit("setPositionByName", "initial");
      }
    };
    onMounted(() => {
      outputMode.value = defaultOutputMode.value;
    });
    watch(defaultOutputMode, (newValue, oldValue) => {
      if (newValue === OUTPUT_TYPE.LOGS && oldValue === OUTPUT_TYPE.REGULAR && hasNodeRun.value) {
        outputMode.value = defaultOutputMode.value;
      }
    });
    const activatePane = () => {
      emit("activatePane");
    };
    return (_ctx, _cache) => {
      const _directive_n8n_html = resolveDirective("n8n-html");
      return openBlock(), createBlock(RunData, {
        ref_key: "runDataRef",
        ref: runDataRef,
        class: normalizeClass(_ctx.$style.runData),
        node: node2.value,
        workflow: _ctx.workflow,
        "run-index": _ctx.runIndex,
        "linked-runs": _ctx.linkedRuns,
        "can-link-runs": _ctx.canLinkRuns,
        "too-much-data-title": unref(i18n).baseText("ndv.output.tooMuchData.title"),
        "no-data-in-branch-message": unref(i18n).baseText("ndv.output.noOutputDataInBranch"),
        "is-executing": isNodeRunning.value,
        "executing-message": unref(i18n).baseText("ndv.output.executing"),
        "push-ref": _ctx.pushRef,
        "block-u-i": _ctx.blockUI,
        "is-production-execution-preview": _ctx.isProductionExecutionPreview,
        "is-pane-active": _ctx.isPaneActive,
        "hide-pagination": outputMode.value === "logs",
        "pane-type": "output",
        "data-output-type": outputMode.value,
        "callout-message": allToolsWereUnusedNotice.value,
        "display-mode": _ctx.displayMode,
        "disable-ai-content": true,
        onActivatePane: activatePane,
        onRunChange: onRunIndexChange,
        onLinkRun,
        onUnlinkRun,
        onTableMounted: _cache[1] || (_cache[1] = ($event) => emit("tableMounted", $event)),
        onItemHover: _cache[2] || (_cache[2] = ($event) => emit("itemHover", $event)),
        onSearch: _cache[3] || (_cache[3] = ($event) => emit("search", $event)),
        onDisplayModeChange: _cache[4] || (_cache[4] = ($event) => emit("displayModeChange", $event))
      }, createSlots({
        header: withCtx(() => [
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.titleSection)
          }, [
            hasAiMetadata.value ? (openBlock(), createBlock(unref(N8nRadioButtons), {
              key: 0,
              modelValue: outputMode.value,
              "onUpdate:modelValue": [
                _cache[0] || (_cache[0] = ($event) => outputMode.value = $event),
                onUpdateOutputMode
              ],
              "data-test-id": "ai-output-mode-select",
              options: outputTypes.value
            }, null, 8, ["modelValue", "options"])) : (openBlock(), createElementBlock("span", {
              key: 1,
              class: normalizeClass(_ctx.$style.title)
            }, toDisplayString(unref(i18n).baseText(outputPanelEditMode.value.enabled ? "ndv.output.edit" : "ndv.output")), 3)),
            hasNodeRun.value && !unref(pinnedData).hasData.value && (runsCount.value === 1 || runsCount.value > 0 && staleData.value) ? withDirectives((openBlock(), createBlock(RunInfo, {
              key: 2,
              "task-data": runTaskData.value,
              "has-stale-data": staleData.value,
              "has-pin-data": unref(pinnedData).hasData.value
            }, null, 8, ["task-data", "has-stale-data", "has-pin-data"])), [
              [vShow, !outputPanelEditMode.value.enabled]
            ]) : createCommentVNode("", true)
          ], 2)
        ]),
        "node-not-run": withCtx(() => [
          workflowRunning.value && !isTriggerNode.value ? (openBlock(), createBlock(unref(N8nText), {
            key: 0,
            "data-test-id": "ndv-output-waiting"
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(i18n).baseText("ndv.output.waitingToRun")), 1)
            ]),
            _: 1
          })) : createCommentVNode("", true),
          !workflowRunning.value ? (openBlock(), createBlock(unref(N8nText), {
            key: 1,
            "data-test-id": "ndv-output-run-node-hint"
          }, {
            default: withCtx(() => [
              unref(isSubNodeType) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                createTextVNode(toDisplayString(unref(i18n).baseText("ndv.output.runNodeHintSubNode")), 1)
              ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                createTextVNode(toDisplayString(unref(i18n).baseText("ndv.output.runNodeHint")) + " ", 1),
                canPinData.value ? (openBlock(), createElementBlock("span", {
                  key: 0,
                  onClick: insertTestData
                }, [
                  _cache[5] || (_cache[5] = createBaseVNode("br", null, null, -1)),
                  createTextVNode(" " + toDisplayString(unref(i18n).baseText("generic.or")) + " ", 1),
                  createVNode(unref(N8nText), {
                    tag: "a",
                    size: "medium",
                    color: "primary"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(i18n).baseText("ndv.output.insertTestData")), 1)
                    ]),
                    _: 1
                  })
                ])) : createCommentVNode("", true)
              ], 64))
            ]),
            _: 1
          })) : createCommentVNode("", true)
        ]),
        "node-waiting": withCtx(() => [
          createVNode(unref(N8nText), {
            bold: true,
            color: "text-dark",
            size: "large"
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(i18n).baseText("ndv.output.waitNodeWaiting.title")), 1)
            ]),
            _: 1
          }),
          withDirectives(createVNode(unref(N8nText), null, null, 512), [
            [_directive_n8n_html, unref(waitingNodeTooltip)(node2.value)]
          ])
        ]),
        "no-output-data": withCtx(() => [
          createVNode(unref(N8nText), {
            bold: true,
            color: "text-dark",
            size: "large"
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(i18n).baseText("ndv.output.noOutputData.title")), 1)
            ]),
            _: 1
          }),
          createVNode(unref(N8nText), null, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(i18n).baseText("ndv.output.noOutputData.message")) + " ", 1),
              createBaseVNode("a", { onClick: openSettings }, toDisplayString(unref(i18n).baseText("ndv.output.noOutputData.message.settings")), 1),
              createTextVNode(" " + toDisplayString(unref(i18n).baseText("ndv.output.noOutputData.message.settingsOption")), 1)
            ]),
            _: 1
          })
        ]),
        "recovered-artificial-output-data": withCtx(() => [
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.recoveredOutputData)
          }, [
            createVNode(unref(N8nText), {
              tag: "div",
              bold: true,
              color: "text-dark",
              size: "large"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n).baseText("executionDetails.executionFailed.recoveredNodeTitle")), 1)
              ]),
              _: 1
            }),
            createVNode(unref(N8nText), null, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n).baseText("executionDetails.executionFailed.recoveredNodeMessage")), 1)
              ]),
              _: 1
            })
          ], 2)
        ]),
        _: 2
      }, [
        outputMode.value === "logs" && node2.value ? {
          name: "content",
          fn: withCtx(() => [
            createVNode(RunDataAi, {
              node: node2.value,
              "run-index": _ctx.runIndex,
              workflow: _ctx.workflow
            }, null, 8, ["node", "run-index", "workflow"])
          ]),
          key: "0"
        } : void 0,
        !unref(pinnedData).hasData.value && runsCount.value > 1 ? {
          name: "run-info",
          fn: withCtx(() => [
            createVNode(RunInfo, { "task-data": runTaskData.value }, null, 8, ["task-data"])
          ]),
          key: "1"
        } : void 0
      ]), 1032, ["class", "node", "workflow", "run-index", "linked-runs", "can-link-runs", "too-much-data-title", "no-data-in-branch-message", "is-executing", "executing-message", "push-ref", "block-u-i", "is-production-execution-preview", "is-pane-active", "hide-pagination", "data-output-type", "callout-message", "display-mode"]);
    };
  }
});
const runData$1 = "_runData_6c8lp_128";
const outputTypeSelect = "_outputTypeSelect_6c8lp_132";
const titleSection$1 = "_titleSection_6c8lp_137";
const title$2 = "_title_6c8lp_137";
const noOutputData$1 = "_noOutputData_6c8lp_153";
const recoveredOutputData$1 = "_recoveredOutputData_6c8lp_163";
const style0$3 = {
  runData: runData$1,
  outputTypeSelect,
  titleSection: titleSection$1,
  title: title$2,
  noOutputData: noOutputData$1,
  recoveredOutputData: recoveredOutputData$1
};
const cssModules$4 = {
  "$style": style0$3
};
const OutputPanel = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__cssModules", cssModules$4]]);
const _hoisted_1$3 = { key: 0 };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "InputNodeSelect",
  props: {
    nodes: {},
    workflow: {},
    modelValue: {}
  },
  emits: ["update:model-value"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const i18n = useI18n();
    const workflowsStore = useWorkflowsStore();
    const nodeTypesStore = useNodeTypesStore();
    const ndvStore = useNDVStore();
    const selectedInputNode = computed(() => workflowsStore.getNodeByName(props.modelValue ?? ""));
    const selectedInputNodeType = computed(() => {
      const node2 = selectedInputNode.value;
      if (!node2) return null;
      return nodeTypesStore.getNodeType(node2.type, node2.typeVersion);
    });
    const inputNodes = computed(
      () => props.nodes?.map((node2) => {
        const fullNode = workflowsStore.getNodeByName(node2.name);
        if (!fullNode) return null;
        return {
          node: fullNode,
          type: nodeTypesStore.getNodeType(fullNode.type, fullNode.typeVersion),
          depth: node2.depth
        };
      }).filter(isPresent) ?? []
    );
    const activeNode = computed(() => ndvStore.activeNode);
    const activeNodeType = computed(() => {
      const node2 = activeNode.value;
      if (!node2) return null;
      return nodeTypesStore.getNodeType(node2.type, node2.typeVersion);
    });
    const isMultiInputNode = computed(() => {
      const nodeType = activeNodeType.value;
      return nodeType !== null && nodeType.inputs.length > 1;
    });
    const connectedTo = (nodeName) => {
      const connections = ndvStore.ndvNodeInputNumber[nodeName];
      if (!connections) return "";
      if (connections.length === 1) {
        return `Input ${ndvStore.ndvNodeInputNumber[nodeName]}`;
      }
      return `Inputs ${ndvStore.ndvNodeInputNumber[nodeName].join(", ")}`;
    };
    function getMultipleNodesText(nodeName) {
      if (!nodeName || !isMultiInputNode.value || !activeNode.value || !activeNodeType.value?.inputNames)
        return "";
      const activeNodeConnections = props.workflow.connectionsByDestinationNode[activeNode.value.name].main || [];
      const connectedInputIndexes = activeNodeConnections.reduce((acc, node2, index) => {
        if (node2?.[0] && node2[0].node === nodeName) return [...acc, index];
        return acc;
      }, []);
      const connectedInputs = connectedInputIndexes.map(
        (inputIndex) => activeNodeType.value?.inputNames?.[inputIndex]
      );
      if (connectedInputs.length === 0) return "";
      return `(${connectedInputs.join(" & ")})`;
    }
    function title2(nodeName, length = 30) {
      return truncate(nodeName, length);
    }
    function subtitle2(nodeName, depth) {
      const multipleNodesText = getMultipleNodesText(nodeName);
      if (multipleNodesText) return multipleNodesText;
      return i18n.baseText("ndv.input.nodeDistance", { adjustToNumber: depth });
    }
    function onInputNodeChange(value) {
      emit("update:model-value", value);
    }
    return (_ctx, _cache) => {
      const _component_n8n_option = resolveComponent("n8n-option");
      const _component_n8n_select = resolveComponent("n8n-select");
      return openBlock(), createBlock(_component_n8n_select, {
        "model-value": _ctx.modelValue,
        "no-data-text": unref(i18n).baseText("ndv.input.noNodesFound"),
        placeholder: unref(i18n).baseText("ndv.input.parentNodes"),
        class: normalizeClass(_ctx.$style.select),
        teleported: "",
        size: "small",
        filterable: "",
        "data-test-id": "ndv-input-select",
        "onUpdate:modelValue": onInputNodeChange
      }, {
        prefix: withCtx(() => [
          createVNode(_sfc_main$d, {
            disabled: selectedInputNode.value?.disabled,
            "node-type": selectedInputNodeType.value,
            size: 14,
            shrink: false
          }, null, 8, ["disabled", "node-type"])
        ]),
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(inputNodes.value, ({ node: node2, type, depth }) => {
            return openBlock(), createBlock(_component_n8n_option, {
              key: node2.name,
              value: node2.name,
              class: normalizeClass([_ctx.$style.node, { [_ctx.$style.disabled]: node2.disabled }]),
              label: `${title2(node2.name)} ${getMultipleNodesText(node2.name)}`,
              "data-test-id": "ndv-input-option"
            }, {
              default: withCtx(() => [
                createVNode(_sfc_main$d, {
                  disabled: node2.disabled,
                  "node-type": type,
                  size: 14,
                  shrink: false,
                  class: normalizeClass(_ctx.$style.icon)
                }, null, 8, ["disabled", "node-type", "class"]),
                createBaseVNode("span", {
                  class: normalizeClass(_ctx.$style.title)
                }, [
                  createTextVNode(toDisplayString(title2(node2.name)) + " ", 1),
                  node2.disabled ? (openBlock(), createElementBlock("span", _hoisted_1$3, "(" + toDisplayString(unref(i18n).baseText("node.disabled")) + ")", 1)) : createCommentVNode("", true)
                ], 2),
                createBaseVNode("span", {
                  class: normalizeClass(_ctx.$style.subtitle)
                }, toDisplayString(connectedTo(node2.name) ? connectedTo(node2.name) : subtitle2(node2.name, depth)), 3)
              ]),
              _: 2
            }, 1032, ["value", "class", "label"]);
          }), 128))
        ]),
        _: 1
      }, 8, ["model-value", "no-data-text", "placeholder", "class"]);
    };
  }
});
const select = "_select_wv0ev_123";
const node = "_node_wv0ev_132";
const icon = "_icon_wv0ev_140";
const title$1 = "_title_wv0ev_144";
const disabled = "_disabled_wv0ev_153";
const subtitle = "_subtitle_wv0ev_157";
const style0$2 = {
  select,
  node,
  icon,
  title: title$1,
  disabled,
  subtitle
};
const cssModules$3 = {
  "$style": style0$2
};
const InputNodeSelect = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__cssModules", cssModules$3]]);
const _sfc_main$3 = {};
const _hoisted_1$2 = {
  width: "112",
  height: "80",
  viewBox: "0 0 112 80",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink"
};
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, _cache[0] || (_cache[0] = [
    createStaticVNode('<mask id="mask0_489_46042" style="mask-type:alpha;" maskUnits="userSpaceOnUse" x="0" y="0" width="112" height="80"><rect width="112" height="80" fill="url(#paint0_linear_489_46042)"></rect></mask><g mask="url(#mask0_489_46042)"><rect x="-0.5" width="112" height="80" fill="url(#pattern0)" fill-opacity="0.6"></rect></g><defs><pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlink:href="#image0_489_46042" transform="scale(0.00357143 0.005)"></use></pattern><linearGradient id="paint0_linear_489_46042" x1="90.5" y1="40.4494" x2="112.5" y2="40.4494" gradientUnits="userSpaceOnUse"><stop></stop><stop offset="1" stop-color="white" stop-opacity="0"></stop></linearGradient><image id="image0_489_46042" width="280" height="200" xlink:href="data:image/png;base64,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"></image></defs>', 3)
  ]));
}
const WireMeUp = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "InputPanel",
  props: {
    runIndex: {},
    workflow: {},
    pushRef: {},
    currentNodeName: { default: "" },
    canLinkRuns: { type: Boolean, default: false },
    linkedRuns: { type: Boolean },
    readOnly: { type: Boolean, default: false },
    isProductionExecutionPreview: { type: Boolean, default: false },
    isPaneActive: { type: Boolean, default: false },
    displayMode: {}
  },
  emits: ["itemHover", "tableMounted", "linkRun", "unlinkRun", "runChange", "search", "changeInputNode", "execute", "activatePane", "displayModeChange"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const i18n = useI18n();
    const telemetry = useTelemetry();
    const showDraggableHintWithDelay = ref(false);
    const draggableHintShown = ref(false);
    const mappedNode2 = ref(null);
    const inputModes = [
      { value: "mapping", label: i18n.baseText("ndv.input.mapping") },
      { value: "debugging", label: i18n.baseText("ndv.input.fromAI") }
    ];
    const nodeTypesStore = useNodeTypesStore();
    const ndvStore = useNDVStore();
    const workflowsStore = useWorkflowsStore();
    const {
      activeNode,
      focusedMappableInput,
      isMappingOnboarded: isUserOnboarded
    } = storeToRefs(ndvStore);
    const rootNode = computed(() => {
      if (!activeNode.value) return null;
      return props.workflow.getChildNodes(activeNode.value.name, "ALL").at(0) ?? null;
    });
    const hasRootNodeRun = computed(() => {
      return !!(rootNode.value && workflowsStore.getWorkflowExecution?.data?.resultData.runData[rootNode.value]);
    });
    const inputMode = ref(
      // Show debugging mode by default only when the node has already run
      activeNode.value && workflowsStore.getWorkflowExecution?.data?.resultData.runData[activeNode.value.name] ? "debugging" : "mapping"
    );
    const isMappingMode = computed(() => isActiveNodeConfig.value && inputMode.value === "mapping");
    const showDraggableHint = computed(() => {
      const toIgnore = [START_NODE_TYPE, MANUAL_TRIGGER_NODE_TYPE, CRON_NODE_TYPE, INTERVAL_NODE_TYPE];
      if (!currentNode.value || toIgnore.includes(currentNode.value.type)) {
        return false;
      }
      return !!focusedMappableInput.value && !isUserOnboarded.value;
    });
    const isActiveNodeConfig = computed(() => {
      let inputs = activeNodeType.value?.inputs ?? [];
      let outputs = activeNodeType.value?.outputs ?? [];
      if (props.workflow && activeNode.value) {
        const node2 = props.workflow.getNode(activeNode.value.name);
        if (node2 && activeNodeType.value) {
          inputs = getNodeInputs(props.workflow, node2, activeNodeType.value);
          outputs = getNodeOutputs(props.workflow, node2, activeNodeType.value);
        }
      }
      if (!Array.isArray(inputs)) {
        inputs = [];
      }
      if (!Array.isArray(outputs)) {
        outputs = [];
      }
      return inputs.length === 0 || inputs.every((input) => filterOutConnectionType(input, NodeConnectionTypes.Main)) && outputs.find((output) => filterOutConnectionType(output, NodeConnectionTypes.Main));
    });
    const isMappingEnabled = computed(() => {
      if (props.readOnly) return false;
      if (isActiveNodeConfig.value) return isMappingMode.value && mappedNode2.value !== null;
      return true;
    });
    const isExecutingPrevious = computed(() => {
      if (!workflowsStore.isWorkflowRunning) {
        return false;
      }
      const triggeredNode = workflowsStore.executedNode;
      const executingNode = workflowsStore.executingNode;
      if (activeNode.value && triggeredNode === activeNode.value.name && workflowsStore.isNodeExecuting(props.currentNodeName)) {
        return true;
      }
      if (executingNode.length || triggeredNode) {
        return !!parentNodes.value.find(
          (node2) => workflowsStore.isNodeExecuting(node2.name) || node2.name === triggeredNode
        );
      }
      return false;
    });
    const rootNodesParents = computed(() => {
      if (!rootNode.value) return [];
      return props.workflow.getParentNodesByDepth(rootNode.value);
    });
    const currentNode = computed(() => {
      if (isActiveNodeConfig.value) {
        if (mappedNode2.value) {
          return workflowsStore.getNodeByName(mappedNode2.value);
        }
        return activeNode.value;
      }
      return workflowsStore.getNodeByName(props.currentNodeName ?? "");
    });
    const connectedCurrentNodeOutputs = computed(() => {
      const search = parentNodes.value.find(({ name }) => name === props.currentNodeName);
      return search?.indicies;
    });
    const parentNodes = computed(() => {
      if (!activeNode.value) {
        return [];
      }
      const parents = props.workflow.getParentNodesByDepth(activeNode.value.name).filter((parent) => parent.name !== activeNode.value?.name);
      return uniqBy(parents, (parent) => parent.name);
    });
    const currentNodeDepth = computed(() => {
      const node2 = parentNodes.value.find(
        (parent) => currentNode.value && parent.name === currentNode.value.name
      );
      return node2?.depth ?? -1;
    });
    const activeNodeType = computed(() => {
      if (!activeNode.value) return null;
      return nodeTypesStore.getNodeType(activeNode.value.type, activeNode.value.typeVersion);
    });
    const waitingMessage = computed(() => {
      const parentNode = parentNodes.value[0];
      return parentNode && waitingNodeTooltip(workflowsStore.getNodeByName(parentNode.name));
    });
    watch(
      inputMode,
      (mode) => {
        onRunIndexChange(-1);
        if (mode === "mapping") {
          onUnlinkRun();
          mappedNode2.value = rootNodesParents.value[0]?.name ?? null;
        } else {
          mappedNode2.value = null;
        }
      },
      { immediate: true }
    );
    watch(showDraggableHint, (curr, prev) => {
      if (curr && !prev) {
        setTimeout(() => {
          if (draggableHintShown.value) {
            return;
          }
          showDraggableHintWithDelay.value = showDraggableHint.value;
          if (showDraggableHintWithDelay.value) {
            draggableHintShown.value = true;
            telemetry.track("User viewed data mapping tooltip", {
              type: "unexecuted input pane"
            });
          }
        }, 1e3);
      } else if (!curr) {
        showDraggableHintWithDelay.value = false;
      }
    });
    function filterOutConnectionType(item, type) {
      if (!item) return false;
      return typeof item === "string" ? item !== type : item.type !== type;
    }
    function onInputModeChange(val) {
      inputMode.value = val;
    }
    function onMappedNodeSelected(val) {
      mappedNode2.value = val;
      onRunIndexChange(0);
      onUnlinkRun();
    }
    function onNodeExecute() {
      emit("execute");
      if (activeNode.value) {
        telemetry.track("User clicked ndv button", {
          node_type: activeNode.value.type,
          workflow_id: workflowsStore.workflowId,
          push_ref: props.pushRef,
          pane: "input",
          type: "executePrevious"
        });
      }
    }
    function onRunIndexChange(run) {
      emit("runChange", run);
    }
    function onLinkRun() {
      emit("linkRun");
    }
    function onUnlinkRun() {
      emit("unlinkRun");
    }
    function onSearch(search) {
      emit("search", search);
    }
    function onItemHover(item) {
      emit("itemHover", item);
    }
    function onTableMounted(event) {
      emit("tableMounted", event);
    }
    function onInputNodeChange(value) {
      const index = parentNodes.value.findIndex((node2) => node2.name === value) + 1;
      emit("changeInputNode", value, index);
    }
    function onConnectionHelpClick() {
      if (activeNode.value) {
        telemetry.track("User clicked ndv link", {
          node_type: activeNode.value.type,
          workflow_id: workflowsStore.workflowId,
          push_ref: props.pushRef,
          pane: "input",
          type: "not-connected-help"
        });
      }
    }
    function activatePane() {
      emit("activatePane");
    }
    return (_ctx, _cache) => {
      const _component_i18n_t = resolveComponent("i18n-t");
      const _directive_n8n_html = resolveDirective("n8n-html");
      return openBlock(), createBlock(RunData, {
        class: normalizeClass(_ctx.$style.runData),
        node: currentNode.value,
        nodes: isMappingMode.value ? rootNodesParents.value : parentNodes.value,
        workflow: _ctx.workflow,
        "run-index": isMappingMode.value ? 0 : _ctx.runIndex,
        "linked-runs": _ctx.linkedRuns,
        "can-link-runs": !mappedNode2.value && _ctx.canLinkRuns,
        "too-much-data-title": unref(i18n).baseText("ndv.input.tooMuchData.title"),
        "no-data-in-branch-message": unref(i18n).baseText("ndv.input.noOutputDataInBranch"),
        "is-executing": isExecutingPrevious.value,
        "executing-message": unref(i18n).baseText("ndv.input.executingPrevious"),
        "push-ref": _ctx.pushRef,
        "override-outputs": connectedCurrentNodeOutputs.value,
        "mapping-enabled": isMappingEnabled.value,
        "distance-from-active": currentNodeDepth.value,
        "is-production-execution-preview": _ctx.isProductionExecutionPreview,
        "is-pane-active": _ctx.isPaneActive,
        "display-mode": _ctx.displayMode,
        "pane-type": "input",
        "data-test-id": "ndv-input-panel",
        "disable-ai-content": true,
        onActivatePane: activatePane,
        onItemHover,
        onLinkRun,
        onUnlinkRun,
        onRunChange: onRunIndexChange,
        onTableMounted,
        onSearch,
        onDisplayModeChange: _cache[1] || (_cache[1] = ($event) => emit("displayModeChange", $event))
      }, createSlots({
        header: withCtx(() => [
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.titleSection)
          }, [
            createBaseVNode("span", {
              class: normalizeClass(_ctx.$style.title)
            }, toDisplayString(unref(i18n).baseText("ndv.input")), 3),
            isActiveNodeConfig.value && !_ctx.readOnly ? (openBlock(), createBlock(unref(N8nRadioButtons), {
              key: 0,
              "data-test-id": "input-panel-mode",
              options: inputModes,
              "model-value": inputMode.value,
              "onUpdate:modelValue": onInputModeChange
            }, null, 8, ["model-value"])) : createCommentVNode("", true)
          ], 2)
        ]),
        "input-select": withCtx(() => [
          parentNodes.value.length && _ctx.currentNodeName ? (openBlock(), createBlock(InputNodeSelect, {
            key: 0,
            "model-value": _ctx.currentNodeName,
            workflow: _ctx.workflow,
            nodes: parentNodes.value,
            "onUpdate:modelValue": onInputNodeChange
          }, null, 8, ["model-value", "workflow", "nodes"])) : createCommentVNode("", true)
        ]),
        "node-not-run": withCtx(() => [
          isActiveNodeConfig.value && rootNode.value || parentNodes.value.length ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(_ctx.$style.noOutputData)
          }, [
            isMappingEnabled.value || hasRootNodeRun.value ? (openBlock(), createBlock(unref(N8nText), {
              key: 0,
              tag: "div",
              bold: true,
              color: "text-dark",
              size: "large"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n).baseText("ndv.input.noOutputData.title")), 1)
              ]),
              _: 1
            })) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              createVNode(unref(N8nText), {
                tag: "div",
                bold: true,
                color: "text-dark",
                size: "large"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(i18n).baseText("ndv.input.rootNodeHasNotRun.title")), 1)
                ]),
                _: 1
              }),
              createVNode(unref(N8nText), {
                tag: "div",
                color: "text-dark",
                size: "medium"
              }, {
                default: withCtx(() => [
                  createVNode(_component_i18n_t, {
                    tag: "span",
                    keypath: "ndv.input.rootNodeHasNotRun.description"
                  }, {
                    link: withCtx(() => [
                      createBaseVNode("a", {
                        href: "#",
                        "data-test-id": "switch-to-mapping-mode-link",
                        onClick: _cache[0] || (_cache[0] = withModifiers(($event) => onInputModeChange("mapping"), ["prevent"]))
                      }, toDisplayString(unref(i18n).baseText("ndv.input.rootNodeHasNotRun.description.link")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ], 64)),
            !_ctx.readOnly ? (openBlock(), createBlock(unref(N8nTooltip), {
              key: 2,
              visible: showDraggableHint.value && showDraggableHintWithDelay.value
            }, {
              content: withCtx(() => [
                withDirectives(createBaseVNode("div", null, null, 512), [
                  [
                    _directive_n8n_html,
                    unref(i18n).baseText("dataMapping.dragFromPreviousHint", {
                      interpolate: { name: unref(focusedMappableInput) }
                    })
                  ]
                ])
              ]),
              default: withCtx(() => [
                createVNode(_sfc_main$g, {
                  type: "secondary",
                  "hide-icon": "",
                  transparent: true,
                  "node-name": (isActiveNodeConfig.value ? rootNode.value : _ctx.currentNodeName) ?? "",
                  label: unref(i18n).baseText("ndv.input.noOutputData.executePrevious"),
                  class: "mt-m",
                  "telemetry-source": "inputs",
                  "data-test-id": "execute-previous-node",
                  onExecute: onNodeExecute
                }, null, 8, ["node-name", "label"])
              ]),
              _: 1
            }, 8, ["visible"])) : createCommentVNode("", true),
            !_ctx.readOnly ? (openBlock(), createBlock(unref(N8nText), {
              key: 3,
              tag: "div",
              size: "small"
            }, {
              default: withCtx(() => [
                createVNode(_component_i18n_t, { keypath: "ndv.input.noOutputData.hint" }, {
                  info: withCtx(() => [
                    createVNode(unref(N8nTooltip), { placement: "bottom" }, {
                      content: withCtx(() => [
                        createTextVNode(toDisplayString(unref(i18n).baseText("ndv.input.noOutputData.hint.tooltip")), 1)
                      ]),
                      default: withCtx(() => [
                        createVNode(unref(N8nIcon), { icon: "question-circle" })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })) : createCommentVNode("", true)
          ], 2)) : (openBlock(), createElementBlock("div", {
            key: 1,
            class: normalizeClass(_ctx.$style.notConnected)
          }, [
            createBaseVNode("div", null, [
              createVNode(WireMeUp)
            ]),
            createVNode(unref(N8nText), {
              tag: "div",
              bold: true,
              color: "text-dark",
              size: "large"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n).baseText("ndv.input.notConnected.title")), 1)
              ]),
              _: 1
            }),
            createVNode(unref(N8nText), { tag: "div" }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n).baseText("ndv.input.notConnected.message")) + " ", 1),
                createBaseVNode("a", {
                  href: "https://docs.n8n.io/workflows/connections/",
                  target: "_blank",
                  onClick: onConnectionHelpClick
                }, toDisplayString(unref(i18n).baseText("ndv.input.notConnected.learnMore")), 1)
              ]),
              _: 1
            })
          ], 2))
        ]),
        "node-waiting": withCtx(() => [
          createVNode(unref(N8nText), {
            bold: true,
            color: "text-dark",
            size: "large"
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(i18n).baseText("ndv.output.waitNodeWaiting.title")), 1)
            ]),
            _: 1
          }),
          withDirectives(createVNode(unref(N8nText), null, null, 512), [
            [_directive_n8n_html, waitingMessage.value]
          ])
        ]),
        "no-output-data": withCtx(() => [
          createVNode(unref(N8nText), {
            tag: "div",
            bold: true,
            color: "text-dark",
            size: "large"
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(i18n).baseText("ndv.input.noOutputData")), 1)
            ]),
            _: 1
          })
        ]),
        "recovered-artificial-output-data": withCtx(() => [
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.recoveredOutputData)
          }, [
            createVNode(unref(N8nText), {
              tag: "div",
              bold: true,
              color: "text-dark",
              size: "large"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n).baseText("executionDetails.executionFailed.recoveredNodeTitle")), 1)
              ]),
              _: 1
            }),
            createVNode(unref(N8nText), null, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n).baseText("executionDetails.executionFailed.recoveredNodeMessage")), 1)
              ]),
              _: 1
            })
          ], 2)
        ]),
        _: 2
      }, [
        isMappingMode.value ? {
          name: "before-data",
          fn: withCtx(() => [
            (openBlock(), createBlock(resolveDynamicComponent("style"), null, {
              default: withCtx(() => _cache[2] || (_cache[2] = [
                createTextVNode("button.linkRun { display: none }")
              ])),
              _: 1
            })),
            createBaseVNode("div", {
              class: normalizeClass(_ctx.$style.mappedNode)
            }, [
              createVNode(InputNodeSelect, {
                "model-value": mappedNode2.value,
                workflow: _ctx.workflow,
                nodes: rootNodesParents.value,
                "onUpdate:modelValue": onMappedNodeSelected
              }, null, 8, ["model-value", "workflow", "nodes"])
            ], 2)
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["class", "node", "nodes", "workflow", "run-index", "linked-runs", "can-link-runs", "too-much-data-title", "no-data-in-branch-message", "is-executing", "executing-message", "push-ref", "override-outputs", "mapping-enabled", "distance-from-active", "is-production-execution-preview", "is-pane-active", "display-mode"]);
    };
  }
});
const runData = "_runData_115kf_123";
const mappedNode = "_mappedNode_115kf_127";
const titleSection = "_titleSection_115kf_131";
const inputModeTab = "_inputModeTab_115kf_140";
const noOutputData = "_noOutputData_115kf_144";
const recoveredOutputData = "_recoveredOutputData_115kf_151";
const notConnected = "_notConnected_115kf_160";
const title = "_title_115kf_131";
const style0$1 = {
  runData,
  mappedNode,
  titleSection,
  inputModeTab,
  noOutputData,
  recoveredOutputData,
  notConnected,
  title
};
const cssModules$2 = {
  "$style": style0$1
};
const InputPanel = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__cssModules", cssModules$2]]);
const _hoisted_1$1 = { key: "empty" };
const _hoisted_2 = { key: "listening" };
const _hoisted_3 = { key: 0 };
const _hoisted_4 = { key: 1 };
const _hoisted_5 = { key: 0 };
const _hoisted_6 = { key: "default" };
const _hoisted_7 = {
  key: 0,
  class: "mb-xl"
};
const _hoisted_8 = ["textContent"];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TriggerPanel",
  props: {
    nodeName: {},
    pushRef: { default: "" }
  },
  emits: ["activate", "execute"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const nodesTypeStore = useNodeTypesStore();
    const uiStore = useUIStore();
    const workflowsStore = useWorkflowsStore();
    const ndvStore = useNDVStore();
    const router = useRouter();
    const workflowHelpers = useWorkflowHelpers();
    const i18n = useI18n();
    const telemetry = useTelemetry();
    const executionsHelpEventBus = createEventBus();
    const help = ref(null);
    const node2 = computed(() => workflowsStore.getNodeByName(props.nodeName));
    const nodeType = computed(() => {
      if (node2.value) {
        return nodesTypeStore.getNodeType(node2.value.type, node2.value.typeVersion);
      }
      return null;
    });
    const triggerPanel = computed(() => {
      const panel = nodeType.value?.triggerPanel;
      if (isTriggerPanelObject(panel)) {
        return panel;
      }
      return void 0;
    });
    const hideContent = computed(() => {
      const hideContent2 = triggerPanel.value?.hideContent;
      if (typeof hideContent2 === "boolean") {
        return hideContent2;
      }
      if (node2.value) {
        const hideContentValue = workflowHelpers.getCurrentWorkflow().expression.getSimpleParameterValue(node2.value, hideContent2, "internal", {});
        if (typeof hideContentValue === "boolean") {
          return hideContentValue;
        }
      }
      return false;
    });
    const hasIssues = computed(() => {
      return Boolean(
        node2.value?.issues && (node2.value.issues.parameters ?? node2.value.issues.credentials)
      );
    });
    const serviceName = computed(() => {
      if (nodeType.value) {
        return getTriggerNodeServiceName(nodeType.value);
      }
      return "";
    });
    const displayChatButton = computed(() => {
      return Boolean(
        node2.value && node2.value.type === CHAT_TRIGGER_NODE_TYPE && node2.value.parameters.mode !== "webhook"
      );
    });
    const isWebhookNode = computed(() => {
      return Boolean(node2.value && node2.value.type === WEBHOOK_NODE_TYPE);
    });
    const webhookHttpMethod = computed(() => {
      if (!node2.value || !nodeType.value?.webhooks?.length) {
        return void 0;
      }
      const httpMethod = workflowHelpers.getWebhookExpressionValue(
        nodeType.value.webhooks[0],
        "httpMethod",
        false
      );
      if (Array.isArray(httpMethod)) {
        return httpMethod.join(", ");
      }
      return httpMethod;
    });
    const webhookTestUrl = computed(() => {
      if (!node2.value || !nodeType.value?.webhooks?.length) {
        return void 0;
      }
      return workflowHelpers.getWebhookUrl(nodeType.value.webhooks[0], node2.value, "test");
    });
    const isWebhookBasedNode = computed(() => {
      return Boolean(nodeType.value?.webhooks?.length);
    });
    const isPollingNode = computed(() => {
      return Boolean(nodeType.value?.polling);
    });
    const isListeningForEvents = computed(() => {
      const waitingOnWebhook = workflowsStore.executionWaitingForWebhook;
      const executedNode = workflowsStore.executedNode;
      return !!node2.value && !node2.value.disabled && isWebhookBasedNode.value && waitingOnWebhook && (!executedNode || executedNode === props.nodeName);
    });
    const workflowRunning = computed(() => workflowsStore.isWorkflowRunning);
    const isActivelyPolling = computed(() => {
      const triggeredNode = workflowsStore.executedNode;
      return workflowRunning.value && isPollingNode.value && props.nodeName === triggeredNode;
    });
    const isWorkflowActive = computed(() => {
      return workflowsStore.isWorkflowActive;
    });
    const listeningTitle = computed(() => {
      return nodeType.value?.name === FORM_TRIGGER_NODE_TYPE ? i18n.baseText("ndv.trigger.webhookNode.formTrigger.listening") : i18n.baseText("ndv.trigger.webhookNode.listening");
    });
    const listeningHint = computed(() => {
      switch (nodeType.value?.name) {
        case CHAT_TRIGGER_NODE_TYPE:
          return i18n.baseText("ndv.trigger.webhookBasedNode.chatTrigger.serviceHint");
        case FORM_TRIGGER_NODE_TYPE:
          return i18n.baseText("ndv.trigger.webhookBasedNode.formTrigger.serviceHint");
        default:
          return i18n.baseText("ndv.trigger.webhookBasedNode.serviceHint", {
            interpolate: { service: serviceName.value }
          });
      }
    });
    const header2 = computed(() => {
      if (isActivelyPolling.value) {
        return i18n.baseText("ndv.trigger.pollingNode.fetchingEvent");
      }
      if (triggerPanel.value?.header) {
        return triggerPanel.value.header;
      }
      if (isWebhookBasedNode.value) {
        return i18n.baseText("ndv.trigger.webhookBasedNode.action", {
          interpolate: { name: serviceName.value }
        });
      }
      return "";
    });
    const subheader = computed(() => {
      if (isActivelyPolling.value) {
        return i18n.baseText("ndv.trigger.pollingNode.fetchingHint", {
          interpolate: { name: serviceName.value }
        });
      }
      return "";
    });
    const executionsHelp = computed(() => {
      if (triggerPanel.value?.executionsHelp) {
        if (typeof triggerPanel.value.executionsHelp === "string") {
          return triggerPanel.value.executionsHelp;
        }
        if (!isWorkflowActive.value && triggerPanel.value.executionsHelp.inactive) {
          return triggerPanel.value.executionsHelp.inactive;
        }
        if (isWorkflowActive.value && triggerPanel.value.executionsHelp.active) {
          return triggerPanel.value.executionsHelp.active;
        }
      }
      if (isWebhookBasedNode.value) {
        if (isWorkflowActive.value) {
          return i18n.baseText("ndv.trigger.webhookBasedNode.executionsHelp.active", {
            interpolate: { service: serviceName.value }
          });
        } else {
          return i18n.baseText("ndv.trigger.webhookBasedNode.executionsHelp.inactive", {
            interpolate: { service: serviceName.value }
          });
        }
      }
      if (isPollingNode.value) {
        if (isWorkflowActive.value) {
          return i18n.baseText("ndv.trigger.pollingNode.executionsHelp.active", {
            interpolate: { service: serviceName.value }
          });
        } else {
          return i18n.baseText("ndv.trigger.pollingNode.executionsHelp.inactive", {
            interpolate: { service: serviceName.value }
          });
        }
      }
      return "";
    });
    const activationHint = computed(() => {
      if (isActivelyPolling.value || !triggerPanel.value) {
        return "";
      }
      if (triggerPanel.value.activationHint) {
        if (typeof triggerPanel.value.activationHint === "string") {
          return triggerPanel.value.activationHint;
        }
        if (!isWorkflowActive.value && typeof triggerPanel.value.activationHint.inactive === "string") {
          return triggerPanel.value.activationHint.inactive;
        }
        if (isWorkflowActive.value && typeof triggerPanel.value.activationHint.active === "string") {
          return triggerPanel.value.activationHint.active;
        }
      }
      if (isWebhookBasedNode.value) {
        if (isWorkflowActive.value) {
          return i18n.baseText("ndv.trigger.webhookBasedNode.activationHint.active", {
            interpolate: { service: serviceName.value }
          });
        } else {
          return i18n.baseText("ndv.trigger.webhookBasedNode.activationHint.inactive", {
            interpolate: { service: serviceName.value }
          });
        }
      }
      if (isPollingNode.value) {
        if (isWorkflowActive.value) {
          return i18n.baseText("ndv.trigger.pollingNode.activationHint.active", {
            interpolate: { service: serviceName.value }
          });
        } else {
          return i18n.baseText("ndv.trigger.pollingNode.activationHint.inactive", {
            interpolate: { service: serviceName.value }
          });
        }
      }
      return "";
    });
    const expandExecutionHelp = () => {
      if (help.value) {
        executionsHelpEventBus.emit("expand");
      }
    };
    const openWebhookUrl = () => {
      telemetry.track("User clicked ndv link", {
        workflow_id: workflowsStore.workflowId,
        push_ref: props.pushRef,
        pane: "input",
        type: "open-chat"
      });
      window.open(webhookTestUrl.value, "_blank", "noreferrer");
    };
    const onLinkClick = (e) => {
      if (!e.target) {
        return;
      }
      const target = e.target;
      if (target.localName !== "a") return;
      if (target.dataset?.key) {
        e.stopPropagation();
        e.preventDefault();
        if (target.dataset.key === "activate") {
          emit("activate");
        } else if (target.dataset.key === "executions") {
          telemetry.track("User clicked ndv link", {
            workflow_id: workflowsStore.workflowId,
            push_ref: props.pushRef,
            pane: "input",
            type: "open-executions-log"
          });
          ndvStore.activeNodeName = null;
          void router.push({
            name: VIEWS.EXECUTIONS
          });
        } else if (target.dataset.key === "settings") {
          uiStore.openModal(WORKFLOW_SETTINGS_MODAL_KEY);
        }
      }
    };
    const onTestLinkCopied = () => {
      telemetry.track("User copied webhook URL", {
        pane: "inputs",
        type: "test url"
      });
    };
    const onNodeExecute = () => {
      emit("execute");
    };
    return (_ctx, _cache) => {
      const _component_n8n_pulse = resolveComponent("n8n-pulse");
      const _component_n8n_text = resolveComponent("n8n-text");
      const _component_n8n_button = resolveComponent("n8n-button");
      const _component_n8n_spinner = resolveComponent("n8n-spinner");
      const _component_n8n_heading = resolveComponent("n8n-heading");
      const _component_n8n_link = resolveComponent("n8n-link");
      const _component_n8n_info_accordion = resolveComponent("n8n-info-accordion");
      const _directive_n8n_html = resolveDirective("n8n-html");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.container)
      }, [
        createVNode(Transition, {
          name: "fade",
          mode: "out-in"
        }, {
          default: withCtx(() => [
            hasIssues.value || hideContent.value ? (openBlock(), createElementBlock("div", _hoisted_1$1)) : isListeningForEvents.value ? (openBlock(), createElementBlock("div", _hoisted_2, [
              createVNode(_component_n8n_pulse, null, {
                default: withCtx(() => [
                  createVNode(_sfc_main$d, {
                    "node-type": nodeType.value,
                    size: 40
                  }, null, 8, ["node-type"])
                ]),
                _: 1
              }),
              isWebhookNode.value ? (openBlock(), createElementBlock("div", _hoisted_3, [
                createVNode(_component_n8n_text, {
                  tag: "div",
                  size: "large",
                  color: "text-dark",
                  class: "mb-2xs",
                  bold: ""
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(i18n).baseText("ndv.trigger.webhookNode.listening")), 1)
                  ]),
                  _: 1
                }),
                createBaseVNode("div", {
                  class: normalizeClass([_ctx.$style.shake, "mb-xs"])
                }, [
                  createVNode(_component_n8n_text, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(i18n).baseText("ndv.trigger.webhookNode.requestHint", {
                        interpolate: { type: webhookHttpMethod.value ?? "" }
                      })), 1)
                    ]),
                    _: 1
                  })
                ], 2),
                createVNode(CopyInput, {
                  value: webhookTestUrl.value,
                  "toast-title": unref(i18n).baseText("ndv.trigger.copiedTestUrl"),
                  class: "mb-2xl",
                  size: "medium",
                  collapse: true,
                  "copy-button-text": unref(i18n).baseText("generic.clickToCopy"),
                  onCopy: onTestLinkCopied
                }, null, 8, ["value", "toast-title", "copy-button-text"]),
                createVNode(_sfc_main$g, {
                  "data-test-id": "trigger-execute-button",
                  "node-name": _ctx.nodeName,
                  size: "medium",
                  "telemetry-source": "inputs",
                  onExecute: onNodeExecute
                }, null, 8, ["node-name"])
              ])) : (openBlock(), createElementBlock("div", _hoisted_4, [
                createVNode(_component_n8n_text, {
                  tag: "div",
                  size: "large",
                  color: "text-dark",
                  class: "mb-2xs",
                  bold: ""
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(listeningTitle.value), 1)
                  ]),
                  _: 1
                }),
                createBaseVNode("div", {
                  class: normalizeClass([_ctx.$style.shake, "mb-xs"])
                }, [
                  createVNode(_component_n8n_text, { tag: "div" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(listeningHint.value), 1)
                    ]),
                    _: 1
                  })
                ], 2),
                displayChatButton.value ? (openBlock(), createElementBlock("div", _hoisted_5, [
                  createVNode(_component_n8n_button, {
                    class: "mb-xl",
                    onClick: _cache[0] || (_cache[0] = ($event) => openWebhookUrl())
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(i18n).baseText("ndv.trigger.chatTrigger.openChat")), 1)
                    ]),
                    _: 1
                  })
                ])) : createCommentVNode("", true),
                createVNode(_sfc_main$g, {
                  "data-test-id": "trigger-execute-button",
                  "node-name": _ctx.nodeName,
                  size: "medium",
                  "telemetry-source": "inputs",
                  onExecute: onNodeExecute
                }, null, 8, ["node-name"])
              ]))
            ])) : (openBlock(), createElementBlock("div", _hoisted_6, [
              isActivelyPolling.value ? (openBlock(), createElementBlock("div", _hoisted_7, [
                createVNode(_component_n8n_spinner, { type: "ring" })
              ])) : createCommentVNode("", true),
              createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.action)
              }, [
                createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.header)
                }, [
                  header2.value ? (openBlock(), createBlock(_component_n8n_heading, {
                    key: 0,
                    tag: "h1",
                    bold: ""
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(header2.value), 1)
                    ]),
                    _: 1
                  })) : createCommentVNode("", true),
                  subheader.value ? (openBlock(), createBlock(_component_n8n_text, { key: 1 }, {
                    default: withCtx(() => [
                      createBaseVNode("span", {
                        textContent: toDisplayString(subheader.value)
                      }, null, 8, _hoisted_8)
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ], 2),
                createVNode(_sfc_main$g, {
                  "data-test-id": "trigger-execute-button",
                  "node-name": _ctx.nodeName,
                  size: "medium",
                  "telemetry-source": "inputs",
                  onExecute: onNodeExecute
                }, null, 8, ["node-name"])
              ], 2),
              activationHint.value ? (openBlock(), createBlock(_component_n8n_text, {
                key: 1,
                size: "small",
                onClick: onLinkClick
              }, {
                default: withCtx(() => [
                  withDirectives(createBaseVNode("span", null, null, 512), [
                    [_directive_n8n_html, activationHint.value]
                  ]),
                  _cache[1] || (_cache[1] = createTextVNode("  "))
                ]),
                _: 1
              })) : createCommentVNode("", true),
              activationHint.value && executionsHelp.value ? (openBlock(), createBlock(_component_n8n_link, {
                key: 2,
                size: "small",
                onClick: expandExecutionHelp
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(i18n).baseText("ndv.trigger.moreInfo")), 1)
                ]),
                _: 1
              })) : createCommentVNode("", true),
              executionsHelp.value ? (openBlock(), createBlock(_component_n8n_info_accordion, {
                key: 3,
                ref_key: "help",
                ref: help,
                class: normalizeClass(_ctx.$style.accordion),
                title: unref(i18n).baseText("ndv.trigger.executionsHint.question"),
                description: executionsHelp.value,
                "event-bus": unref(executionsHelpEventBus),
                "onClick:body": onLinkClick
              }, null, 8, ["class", "title", "description", "event-bus"])) : createCommentVNode("", true)
            ]))
          ]),
          _: 1
        })
      ], 2);
    };
  }
});
const container = "_container_13dut_123";
const header = "_header_13dut_140";
const action = "_action_13dut_147";
const shake = "_shake_13dut_151";
const accordion = "_accordion_13dut_172";
const style0 = {
  container,
  header,
  action,
  shake,
  accordion
};
const cssModules$1 = {
  "$style": style0
};
const TriggerPanel = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__cssModules", cssModules$1], ["__scopeId", "data-v-0f040cf5"]]);
const _hoisted_1 = {
  key: 0,
  ref: "container",
  class: "data-display",
  "data-test-id": "ndv-modal",
  tabindex: "0"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "NodeDetailsView",
  props: {
    workflowObject: {},
    readOnly: { type: Boolean, default: false },
    renaming: { type: Boolean },
    isProductionExecutionPreview: { type: Boolean, default: false }
  },
  emits: ["saveKeyboardShortcut", "valueChanged", "switchSelectedNode", "openConnectionNodeCreator", "redrawNode", "stopExecution"],
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
    const workflowsStore = useWorkflowsStore();
    const settingsStore = useSettingsStore();
    const deviceSupport = useDeviceSupport();
    const telemetry = useTelemetry();
    const i18n = useI18n();
    const message = useMessage();
    const { APP_Z_INDEXES } = useStyles();
    const settingsEventBus = createEventBus();
    const redrawRequired = ref(false);
    const runInputIndex = ref(-1);
    const runOutputIndex = computed(() => ndvStore.output.run ?? -1);
    const selectedInput = ref();
    const isLinkingEnabled = ref(true);
    const triggerWaitingWarningEnabled = ref(false);
    const isDragging = ref(false);
    const mainPanelPosition = ref(0);
    const pinDataDiscoveryTooltipVisible = ref(false);
    const avgInputRowHeight = ref(0);
    const avgOutputRowHeight = ref(0);
    const isInputPaneActive = ref(false);
    const isOutputPaneActive = ref(false);
    const isPairedItemHoveringEnabled = ref(true);
    const pushRef = computed(() => ndvStore.pushRef);
    const activeNodeType = computed(() => {
      if (activeNode.value) {
        return nodeTypesStore.getNodeType(activeNode.value.type, activeNode.value.typeVersion);
      }
      return null;
    });
    const showTriggerWaitingWarning = computed(
      () => triggerWaitingWarningEnabled.value && !!activeNodeType.value && !activeNodeType.value.group.includes("trigger") && workflowsStore.isWorkflowRunning && workflowsStore.executionWaitingForWebhook
    );
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
        return props.workflowObject.getParentNodesByDepth(activeNode.value.name, 1);
      }
      return [];
    });
    const parentNode = computed(() => {
      for (const parent of parentNodes.value) {
        if (workflowsStore?.pinnedWorkflowData?.[parent.name]) {
          return parent;
        }
        if (workflowRunData.value?.[parent.name]) {
          return parent;
        }
      }
      return parentNodes.value[0];
    });
    const inputNodeName = computed(() => {
      const nodeOutputs = activeNode.value && activeNodeType.value ? getNodeOutputs(props.workflowObject, activeNode.value, activeNodeType.value) : [];
      const nonMainOutputs = nodeOutputs.filter((output) => {
        if (typeof output === "string") return output !== NodeConnectionTypes.Main;
        return output.type !== NodeConnectionTypes.Main;
      });
      const isSubNode = nonMainOutputs.length > 0;
      if (isSubNode && activeNode.value) {
        const connectedOutputNode = props.workflowObject.getChildNodes(
          activeNode.value.name,
          "ALL_NON_MAIN"
        )?.[0];
        return connectedOutputNode;
      }
      return selectedInput.value ?? parentNode.value?.name;
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
    const hasOutputConnection = computed(() => {
      if (!activeNode.value) return false;
      const outgoingConnections = workflowsStore.outgoingConnectionsByNodeName(activeNode.value.name);
      return (Object.values(outgoingConnections)?.[0]?.[0] ?? []).length > 0;
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
      const runData2 = workflowRunData.value;
      if (!runData2?.[activeNode.value.name]) {
        return 0;
      }
      if (runData2[activeNode.value.name].length) {
        return runData2[activeNode.value.name].length - 1;
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
      let node2 = inputNode.value;
      const runData2 = workflowRunData.value;
      if (outputs.some((output) => output !== NodeConnectionTypes.Main)) {
        node2 = activeNode.value;
      }
      if (!node2 || !runData2 || !runData2.hasOwnProperty(node2.name)) {
        return 0;
      }
      if (runData2[node2.name].length) {
        return runData2[node2.name].length - 1;
      }
      return 0;
    });
    const connectedCurrentNodeOutputs = computed(() => {
      return parentNodes.value.find(({ name }) => name === inputNodeName.value)?.indicies;
    });
    const inputRun = computed(() => {
      if (isLinkingEnabled.value && maxOutputRun.value === maxInputRun.value) {
        return outputRun.value;
      }
      const currentInputNodeName = inputNodeName.value;
      if (runInputIndex.value === -1 && currentInputNodeName) {
        return connectedCurrentNodeOutputs.value?.map(
          (outputIndex) => nodeHelpers.getLastRunIndexWithData(currentInputNodeName, outputIndex)
        ).find((runIndex) => runIndex !== -1) ?? maxInputRun.value;
      }
      return Math.min(runInputIndex.value, maxInputRun.value);
    });
    const canLinkRuns = computed(
      () => maxOutputRun.value > 0 && maxOutputRun.value === maxInputRun.value
    );
    const linked = computed(() => isLinkingEnabled.value && canLinkRuns.value);
    const featureRequestUrl = computed(() => {
      if (!activeNodeType.value) {
        return "";
      }
      return `${BASE_NODE_SURVEY_URL}${activeNodeType.value.name}`;
    });
    const outputPanelEditMode = computed(() => ndvStore.outputPanelEditMode);
    const isExecutionWaitingForWebhook = computed(() => workflowsStore.executionWaitingForWebhook);
    const blockUi = computed(
      () => workflowsStore.isWorkflowRunning || isExecutionWaitingForWebhook.value
    );
    const foreignCredentials = computed(() => {
      const credentials = activeNode.value?.credentials;
      const usedCredentials = workflowsStore.usedCredentials;
      const foreignCredentialsArray = [];
      if (credentials && settingsStore.isEnterpriseFeatureEnabled[EnterpriseEditionFeature.Sharing]) {
        Object.values(credentials).forEach((credential) => {
          if (credential.id && usedCredentials[credential.id] && !usedCredentials[credential.id].currentUserHasAccess) {
            foreignCredentialsArray.push(credential.id);
          }
        });
      }
      return foreignCredentialsArray;
    });
    const hasForeignCredential = computed(() => foreignCredentials.value.length > 0);
    const inputPanelDisplayMode = computed(() => ndvStore.inputPanelDisplayMode);
    const outputPanelDisplayMode = computed(() => ndvStore.outputPanelDisplayMode);
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
    const onFeatureRequestClick = () => {
      window.open(featureRequestUrl.value, "_blank");
      if (activeNode.value) {
        telemetry.track("User clicked ndv link", {
          node_type: activeNode.value.type,
          workflow_id: workflowsStore.workflowId,
          push_ref: pushRef.value,
          pane: NodeConnectionTypes.Main,
          type: "i-wish-this-node-would"
        });
      }
    };
    const onDragEnd = (e) => {
      isDragging.value = false;
      telemetry.track("User moved parameters pane", {
        // example method for tracking
        window_width: e.windowWidth,
        start_position: mainPanelPosition.value,
        end_position: e.position,
        node_type: activeNodeType.value ? activeNodeType.value.name : "",
        push_ref: pushRef.value,
        workflow_id: workflowsStore.workflowId
      });
      mainPanelPosition.value = e.position;
    };
    const onDragStart = (e) => {
      isDragging.value = true;
      mainPanelPosition.value = e.position;
    };
    const onPanelsInit = (e) => {
      mainPanelPosition.value = e.position;
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
        if (!activeNode.value || !workflowsStore.isWorkflowRunning) {
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
      ndvStore.setOutputRunIndex(runInputIndex.value);
      isLinkingEnabled.value = true;
      trackLinking("input");
    };
    const valueChanged = (parameterData) => {
      emit("valueChanged", parameterData);
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
      if (activeNode.value && (typeof activeNodeType.value?.outputs === "string" || typeof activeNodeType.value?.inputs === "string" || redrawRequired.value)) {
        const nodeName = activeNode.value.name;
        setTimeout(() => {
          emit("redrawNode", nodeName);
        }, 1);
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
          } catch (error2) {
            console.error(error2);
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
    const trackRunChange = (run, pane) => {
      telemetry.track("User changed ndv run dropdown", {
        push_ref: pushRef.value,
        run_index: run,
        node_type: activeNodeType.value ? activeNodeType.value?.name : "",
        pane
      });
    };
    const onRunOutputIndexChange = (run) => {
      ndvStore.setOutputRunIndex(run);
      trackRunChange(run, "output");
    };
    const onRunInputIndexChange = (run) => {
      runInputIndex.value = run;
      if (linked.value) {
        ndvStore.setOutputRunIndex(run);
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
    const setSelectedInput = (value) => {
      selectedInput.value = value;
    };
    const handleChangeDisplayMode = (pane, mode) => {
      ndvStore.setPanelDisplayMode({ pane, mode });
    };
    watch(
      activeNode,
      (node2, oldNode) => {
        if (node2 && !oldNode) {
          registerKeyboardListener();
        } else if (!node2) {
          unregisterKeyboardListener();
        }
        if (node2 && node2.name !== oldNode?.name && !isActiveStickyNode.value) {
          runInputIndex.value = -1;
          ndvStore.setOutputRunIndex(-1);
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
            nodeSubtitle: nodeHelpers.getNodeSubtitle(node2, activeNodeType.value, props.workflowObject)
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
                selected_view_inputs: isTriggerNode.value ? "trigger" : inputPanelDisplayMode.value,
                selected_view_outputs: outputPanelDisplayMode.value,
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
          window.top.postMessage(JSON.stringify({ command: node2 ? "openNDV" : "closeNDV" }), "*");
        }
      },
      { immediate: true }
    );
    watch(maxOutputRun, () => {
      ndvStore.setOutputRunIndex(-1);
    });
    watch(maxInputRun, () => {
      runInputIndex.value = -1;
    });
    watch(inputNodeName, (nodeName) => {
      setTimeout(() => {
        ndvStore.setInputNodeName(nodeName);
      }, 0);
    });
    watch(inputRun, (inputRun2) => {
      setTimeout(() => {
        ndvStore.setInputRunIndex(inputRun2);
      }, 0);
    });
    onMounted(() => {
      dataPinningEventBus.on("data-pinning-discovery", setIsTooltipVisible);
      ndvEventBus.on("updateInputNodeName", setSelectedInput);
    });
    onBeforeUnmount(() => {
      dataPinningEventBus.off("data-pinning-discovery", setIsTooltipVisible);
      ndvEventBus.off("updateInputNodeName", setSelectedInput);
      unregisterKeyboardListener();
    });
    return (_ctx, _cache) => {
      const _component_n8n_icon = resolveComponent("n8n-icon");
      const _component_n8n_text = resolveComponent("n8n-text");
      const _component_n8n_tooltip = resolveComponent("n8n-tooltip");
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      const _component_el_dialog = resolveComponent("el-dialog");
      return openBlock(), createBlock(_component_el_dialog, {
        id: "ndv",
        "model-value": (!!unref(activeNode) || _ctx.renaming) && !isActiveStickyNode.value,
        "before-close": close,
        "show-close": false,
        class: "data-display-wrapper ndv-wrapper",
        "overlay-class": "data-display-overlay",
        width: "auto",
        "append-to": `#${unref(APP_MODALS_ELEMENT_ID)}`,
        "data-test-id": "ndv",
        "z-index": unref(APP_Z_INDEXES).NDV,
        "data-has-output-connection": hasOutputConnection.value
      }, {
        default: withCtx(() => [
          createVNode(_component_n8n_tooltip, {
            placement: "bottom-start",
            visible: showTriggerWaitingWarning.value,
            disabled: !showTriggerWaitingWarning.value
          }, {
            content: withCtx(() => [
              createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.triggerWarning)
              }, toDisplayString(unref(i18n).baseText("ndv.backToCanvas.waitingForTriggerWarning")), 3)
            ]),
            default: withCtx(() => [
              createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.backToCanvas),
                "data-test-id": "back-to-canvas",
                onClick: close
              }, [
                createVNode(_component_n8n_icon, {
                  icon: "arrow-left",
                  color: "text-xlight",
                  size: "medium"
                }),
                createVNode(_component_n8n_text, {
                  color: "text-xlight",
                  size: "medium",
                  bold: true
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(i18n).baseText("ndv.backToCanvas")), 1)
                  ]),
                  _: 1
                })
              ], 2)
            ]),
            _: 1
          }, 8, ["visible", "disabled"]),
          unref(activeNode) ? (openBlock(), createElementBlock("div", _hoisted_1, [
            createBaseVNode("div", {
              class: normalizeClass(_ctx.$style.modalBackground),
              onClick: close
            }, null, 2),
            (openBlock(), createBlock(NDVDraggablePanels, {
              key: unref(activeNode).name,
              "is-trigger-node": isTriggerNode.value,
              "hide-input-and-output": activeNodeType.value === null,
              position: isTriggerNode.value && !showTriggerPanel.value ? 0 : void 0,
              "is-draggable": !isTriggerNode.value,
              "has-double-width": activeNodeType.value?.parameterPane === "wide",
              "node-type": activeNodeType.value,
              onSwitchSelectedNode,
              onOpenConnectionNodeCreator,
              onClose: close,
              onInit: onPanelsInit,
              onDragstart: onDragStart,
              onDragend: onDragEnd
            }, createSlots({
              output: withCtx(() => [
                createVNode(OutputPanel, {
                  "data-test-id": "output-panel",
                  workflow: _ctx.workflowObject,
                  "can-link-runs": canLinkRuns.value,
                  "run-index": outputRun.value,
                  "linked-runs": linked.value,
                  "push-ref": pushRef.value,
                  "is-read-only": _ctx.readOnly || hasForeignCredential.value,
                  "block-u-i": blockUi.value && isTriggerNode.value && !isExecutableTriggerNode.value,
                  "is-production-execution-preview": _ctx.isProductionExecutionPreview,
                  "is-pane-active": isOutputPaneActive.value,
                  "display-mode": outputPanelDisplayMode.value,
                  onActivatePane: activateOutputPane,
                  onLinkRun: onLinkRunToOutput,
                  onUnlinkRun: _cache[2] || (_cache[2] = () => onUnlinkRun("output")),
                  onRunChange: onRunOutputIndexChange,
                  onOpenSettings: openSettings,
                  onTableMounted: onOutputTableMounted,
                  onItemHover: onOutputItemHover,
                  onSearch,
                  onDisplayModeChange: _cache[3] || (_cache[3] = ($event) => handleChangeDisplayMode("output", $event))
                }, null, 8, ["workflow", "can-link-runs", "run-index", "linked-runs", "push-ref", "is-read-only", "block-u-i", "is-production-execution-preview", "is-pane-active", "display-mode"])
              ]),
              main: withCtx(() => [
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
                  onValueChanged: valueChanged,
                  onExecute: onNodeExecute,
                  onStopExecution,
                  onRedrawRequired: _cache[4] || (_cache[4] = ($event) => redrawRequired.value = true),
                  onActivate: onWorkflowActivate,
                  onSwitchSelectedNode,
                  onOpenConnectionNodeCreator
                }, null, 8, ["event-bus", "dragging", "push-ref", "node-type", "foreign-credentials", "read-only", "block-u-i", "executable", "input-size"]),
                featureRequestUrl.value ? (openBlock(), createElementBlock("a", {
                  key: 0,
                  class: normalizeClass(_ctx.$style.featureRequest),
                  target: "_blank",
                  onClick: onFeatureRequestClick
                }, [
                  createVNode(_component_font_awesome_icon, { icon: "lightbulb" }),
                  createTextVNode(" " + toDisplayString(unref(i18n).baseText("ndv.featureRequest")), 1)
                ], 2)) : createCommentVNode("", true)
              ]),
              _: 2
            }, [
              showTriggerPanel.value || !isTriggerNode.value ? {
                name: "input",
                fn: withCtx(() => [
                  showTriggerPanel.value ? (openBlock(), createBlock(TriggerPanel, {
                    key: 0,
                    "node-name": unref(activeNode).name,
                    "push-ref": pushRef.value,
                    onExecute: onNodeExecute,
                    onActivate: onWorkflowActivate
                  }, null, 8, ["node-name", "push-ref"])) : !isTriggerNode.value ? (openBlock(), createBlock(InputPanel, {
                    key: 1,
                    workflow: _ctx.workflowObject,
                    "can-link-runs": canLinkRuns.value,
                    "run-index": inputRun.value,
                    "linked-runs": linked.value,
                    "current-node-name": inputNodeName.value,
                    "push-ref": pushRef.value,
                    "read-only": _ctx.readOnly || hasForeignCredential.value,
                    "is-production-execution-preview": _ctx.isProductionExecutionPreview,
                    "is-pane-active": isInputPaneActive.value,
                    "display-mode": inputPanelDisplayMode.value,
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
                  }, null, 8, ["workflow", "can-link-runs", "run-index", "linked-runs", "current-node-name", "push-ref", "read-only", "is-production-execution-preview", "is-pane-active", "display-mode"])) : createCommentVNode("", true)
                ]),
                key: "0"
              } : void 0
            ]), 1032, ["is-trigger-node", "hide-input-and-output", "position", "is-draggable", "has-double-width", "node-type"]))
          ], 512)) : createCommentVNode("", true)
        ]),
        _: 1
      }, 8, ["model-value", "append-to", "z-index", "data-has-output-connection"]);
    };
  }
});
const modalBackground = "_modalBackground_176ah_123";
const triggerWarning = "_triggerWarning_176ah_128";
const backToCanvas = "_backToCanvas_176ah_132";
const featureRequest = "_featureRequest_176ah_153";
const style1 = {
  modalBackground,
  triggerWarning,
  backToCanvas,
  featureRequest
};
const cssModules = {
  "$style": style1
};
const NodeDetailsView = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);
export {
  NodeDetailsView as default
};
