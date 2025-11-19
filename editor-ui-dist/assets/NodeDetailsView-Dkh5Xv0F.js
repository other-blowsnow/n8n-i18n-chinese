import { C as computed, D as createElementBlock, E as createCommentVNode, G as nextTick, Gt as unref, It as ref, J as onBeforeUnmount, M as createVNode, P as defineComponent, Sn as toDisplayString, T as createBlock, Z as onMounted, _n as normalizeClass, _t as watch, at as renderSlot, bt as withCtx, et as openBlock, j as createTextVNode, k as createSlots, pt as useSlots, w as createBaseVNode, yn as normalizeStyle } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { gt as useI18n, it as useThrottleFn } from "./_MapCache-pT3vKw8Z.js";
import { In as N8nText_default, rt as useDeviceSupport, vt as N8nTooltip_default, y as N8nResizeWrapper_default, zn as N8nIcon_default } from "./src-BmrdBtCN.js";
import "./en-BYTsM8fR.js";
import "./preload-helper-CR0ecmWK.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { x as createEventBus } from "./truncate-1c7Iwk7N.js";
import "./icon-mgEZlgYz.js";
import "./date-picker-C3uJHiXB.js";
import "./overlay-DxjKgl5T.js";
import { c as InputPanel_default } from "./ParameterInputList-wGmUNHBl.js";
import "./empty-RTEMfF4N.js";
import { t as useMessage } from "./useMessage-HzD9OyTZ.js";
import "./col-8Hwwbr76.js";
import { t as ElDialog } from "./dialog-CzxM5dHR.js";
import { Ai as dataPinningEventBus, Ni as useUIStore, Sc as storeToRefs, a as useNDVStore, o as useWorkflowsStore, rt as useNodeTypesStore, t as useTelemetry, xn as useNodeHelpers, zo as useStorage } from "./useTelemetry-C2EhNQhN.js";
import { n as useStyles } from "./useToast-C8xM63lB.js";
import "./sanitize-html-Cfxibw1n.js";
import "./path-browserify-CTmc1OxV.js";
import { D as APP_MODALS_ELEMENT_ID, Gi as jsonParse, No as MODAL_CONFIRM, Sr as MAIN_NODE_PANEL_WIDTH, bn as START_NODE_TYPE, c as BASE_NODE_SURVEY_URL, cs as LOCAL_STORAGE_MAIN_PANEL_RELATIVE_WIDTH, ea as NodeConnectionTypes, ht as EXECUTABLE_TRIGGER_NODE_TYPES, vi as getNodeOutputs, xn as STICKY_NODE_TYPE } from "./constants-C_oOJnqT.js";
import "./merge-DCUiz6nU.js";
import { n as ndvEventBus } from "./assistant.store-CKoUz8Lx.js";
import "./dateformat-D7TIhVd4.js";
import "./useDebounce-DyoINrYS.js";
import { t as useExternalHooks } from "./useExternalHooks-CE2Rdzfk.js";
import "./chatPanel.store-BuOYGMm5.js";
import "./npsSurvey.store-Csg2H1Od.js";
import "./cloudPlan.store-Dw9c9iy4.js";
import "./templates.store-CFt_GGxU.js";
import "./focusPanel.store-Ce3wvzmP.js";
import "./useWorkflowSaving-eHdXvbOs.js";
import "./retry-sDkwzrPY.js";
import "./executions.store-a34D3haB.js";
import "./useRunWorkflow-CekP-uxB.js";
import { t as usePinnedData } from "./usePinnedData-CxyLm90h.js";
import "./nodeCreator.store-BXjpGwrk.js";
import "./nodeIcon-BWTKM7V3.js";
import "./useClipboard-CDW2KXIc.js";
import "./useCanvasOperations-CA0dp-vn.js";
import "./folders.store-Cwp_DTVT.js";
import "./NodeIcon-B-yC7jws.js";
import "./dataTable.store-BCpzMJoX.js";
import "./CopyInput-EV0b_4Vy.js";
import "./isEmpty-DEJCEdjU.js";
import "./NDVEmptyState-Dh9X5Hnf.js";
import "./exports-D2D_Xd3F.js";
import "./externalSecrets.ee.store-fPuvdi_V.js";
import "./uniqBy-D5omy1pF.js";
import "./semver-CRfiE2Wb.js";
import "./CommunityNodeUpdateInfo-CLRaJk1W.js";
import { t as Draggable_default } from "./Draggable-D46Agirf.js";
import "./VirtualSchema-DLhLWlaa.js";
import "./TextWithHighlights-CxxIad3D.js";
import { t as useTelemetryContext } from "./useTelemetryContext-CqvI0krW.js";
import "./schemaPreview.store-C5btNE_R.js";
import "./nodeTransforms-CSXaQK2h.js";
import "./FileSaver.min-DaytN8ae.js";
import "./vue-json-pretty-BAtqAAV1.js";
import "./RunDataHtml-BNcvZDMJ.js";
import "./dateFormatter-CXO-zUXu.js";
import "./useExecutionHelpers-Dhozi48o.js";
import { t as NodeSettings_default } from "./NodeSettings-EMakQtdb.js";
import "./useActions-yIxD_z2G.js";
import "./vue-RAk0R0Jn.js";
import { t as useWorkflowActivate } from "./useWorkflowActivate-C1HaO_mN.js";
import "./core-CzunNfUb.js";
import "./useExecutionData-CdzbMYbb.js";
import "./VueMarkdown-CURYkyJE.js";
import "./AnimatedSpinner-4ie3BOLv.js";
import "./useLogsTreeExpand-Cngh87Y5.js";
import "./core-CH2Kku_3.js";
import "./RunDataParsedAiContent-Lbk4TJqw.js";
import { n as OutputPanel_default, r as NDVFloatingNodes_default, t as TriggerPanel_default } from "./TriggerPanel-B39d6b44.js";
var PanelDragButton_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "PanelDragButton",
	props: {
		canMoveRight: { type: Boolean },
		canMoveLeft: { type: Boolean }
	},
	emits: [
		"drag",
		"dragstart",
		"dragend"
	],
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
			return openBlock(), createBlock(Draggable_default, {
				type: "panel-resize",
				class: normalizeClass(_ctx.$style.dragContainer),
				onDrag,
				onDragstart: onDragStart,
				onDragend: onDragEnd
			}, {
				default: withCtx(({ isDragging }) => [createBaseVNode("div", {
					class: normalizeClass({ [_ctx.$style.dragButton]: true }),
					"data-test-id": "panel-drag-button"
				}, [
					_ctx.canMoveLeft ? (openBlock(), createElementBlock("span", {
						key: 0,
						class: normalizeClass({
							[_ctx.$style.leftArrow]: true,
							[_ctx.$style.visible]: isDragging
						})
					}, [createVNode(unref(N8nIcon_default), { icon: "arrow-left" })], 2)) : createCommentVNode("", true),
					_ctx.canMoveRight ? (openBlock(), createElementBlock("span", {
						key: 1,
						class: normalizeClass({
							[_ctx.$style.rightArrow]: true,
							[_ctx.$style.visible]: isDragging
						})
					}, [createVNode(unref(N8nIcon_default), { icon: "arrow-right" })], 2)) : createCommentVNode("", true),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.grid) }, _cache[0] || (_cache[0] = [createBaseVNode("div", null, [
						createBaseVNode("div"),
						createBaseVNode("div"),
						createBaseVNode("div"),
						createBaseVNode("div"),
						createBaseVNode("div")
					], -1), createBaseVNode("div", null, [
						createBaseVNode("div"),
						createBaseVNode("div"),
						createBaseVNode("div"),
						createBaseVNode("div"),
						createBaseVNode("div")
					], -1)]), 2)
				], 2)]),
				_: 1
			}, 8, ["class"]);
		};
	}
});
var PanelDragButton_vue_vue_type_style_index_0_lang_module_default = {
	dragContainer: "_dragContainer_1jj9p_123",
	dragButton: "_dragButton_1jj9p_127",
	leftArrow: "_leftArrow_1jj9p_141 _arrow_1jj9p_150",
	rightArrow: "_rightArrow_1jj9p_142 _arrow_1jj9p_150",
	visible: "_visible_1jj9p_146",
	arrow: "_arrow_1jj9p_150",
	grid: "_grid_1jj9p_168"
};
var PanelDragButton_default = /* @__PURE__ */ __plugin_vue_export_helper_default(PanelDragButton_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": PanelDragButton_vue_vue_type_style_index_0_lang_module_default }]]);
var SIDE_MARGIN = 24;
var SIDE_PANELS_MARGIN = 80;
var MIN_PANEL_WIDTH = 310;
var PANEL_WIDTH = 350;
var PANEL_WIDTH_LARGE = 420;
var NDVDraggablePanels_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "NDVDraggablePanels",
	props: {
		isDraggable: { type: Boolean },
		hideInputAndOutput: { type: Boolean },
		nodeType: {}
	},
	emits: [
		"init",
		"dragstart",
		"dragend",
		"switchSelectedNode",
		"close"
	],
	setup(__props, { emit: __emit }) {
		const MIN_WINDOW_WIDTH = 2 * (SIDE_MARGIN + SIDE_PANELS_MARGIN) + MIN_PANEL_WIDTH;
		const initialMainPanelWidth = {
			regular: 390,
			dragless: 390,
			unknown: 390,
			inputless: 390,
			wide: 390 * 2
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
		watch(() => uiStore.appGridDimensions, async (dimensions) => {
			const ndv = document.getElementById("ndv");
			if (ndv) {
				await nextTick();
				const { width: ndvWidth } = ndv.getBoundingClientRect();
				containerWidth.value = ndvWidth;
			} else containerWidth.value = dimensions.width;
			const minRelativeWidth = pxToRelativeWidth(MIN_PANEL_WIDTH);
			if (mainPanelDimensions.value.relativeWidth < minRelativeWidth) setMainPanelWidth(minRelativeWidth);
			const isBelowMinLeft = minimumLeftPosition.value > mainPanelDimensions.value.relativeLeft;
			const isMaxRight = maximumRightPosition.value > mainPanelDimensions.value.relativeRight;
			if (dimensions.width > MIN_WINDOW_WIDTH && isBelowMinLeft && isMaxRight) {
				setMainPanelWidth(minRelativeWidth);
				setPositions(getInitialLeftPosition(mainPanelDimensions.value.relativeWidth));
			}
			setPositions(mainPanelDimensions.value.relativeLeft);
		});
		const currentNodePaneType = computed(() => {
			if (!hasInputSlot.value) return "inputless";
			if (!props.isDraggable) return "dragless";
			if (props.nodeType === null) return "unknown";
			return props.nodeType.parameterPane ?? "regular";
		});
		const mainPanelDimensions = computed(() => {
			return ndvStore.mainPanelDimensions[currentNodePaneType.value];
		});
		const calculatedPositions = computed(() => {
			const hasInput = slots.input !== void 0;
			const outputPanelRelativeLeft = mainPanelDimensions.value.relativeLeft + mainPanelDimensions.value.relativeWidth;
			return {
				inputPanelRelativeRight: hasInput ? 1 - outputPanelRelativeLeft + mainPanelDimensions.value.relativeWidth : 1 - pxToRelativeWidth(SIDE_MARGIN),
				outputPanelRelativeLeft
			};
		});
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
			return { right: `${relativeWidthToPx(calculatedPositions.value.inputPanelRelativeRight)}px` };
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
			if (containerWidth.value > 1700) return PANEL_WIDTH_LARGE * multiplier;
			return PANEL_WIDTH * multiplier;
		});
		const onSwitchSelectedNode = (node) => emit("switchSelectedNode", node);
		function getInitialLeftPosition(width) {
			if (currentNodePaneType.value === "dragless") return pxToRelativeWidth(SIDE_MARGIN + 1 + fixedPanelWidth.value);
			return hasInputSlot.value ? .5 - width / 2 : minimumLeftPosition.value;
		}
		function setMainPanelWidth(relativeWidth) {
			const mainPanelRelativeWidth = relativeWidth || pxToRelativeWidth(initialMainPanelWidth[currentNodePaneType.value]);
			ndvStore.setMainPanelDimensions({
				panelType: currentNodePaneType.value,
				dimensions: { relativeWidth: mainPanelRelativeWidth }
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
			setPositions({
				minLeft: minimumLeftPosition.value,
				maxRight: maximumRightPosition.value,
				initial: getInitialLeftPosition(mainPanelDimensions.value.relativeWidth)
			}[position]);
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
			if (initialized.value) throttledOnResize(data);
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
			const storedPanelWidthData = useStorage(`${LOCAL_STORAGE_MAIN_PANEL_RELATIVE_WIDTH}_${currentNodePaneType.value}`).value;
			if (storedPanelWidthData) {
				const parsedWidth = parseFloat(storedPanelWidthData);
				setMainPanelWidth(parsedWidth);
				setPositions(getInitialLeftPosition(parsedWidth));
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
			setPositions(pxToRelativeWidth(position[0]) - mainPanelDimensions.value.relativeWidth / 2);
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
			return openBlock(), createElementBlock("div", null, [
				unref(ndvStore).activeNode ? (openBlock(), createBlock(NDVFloatingNodes_default, {
					key: 0,
					"root-node": unref(ndvStore).activeNode,
					onSwitchSelectedNode
				}, null, 8, ["root-node"])) : createCommentVNode("", true),
				!_ctx.hideInputAndOutput ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.inputPanel),
					style: normalizeStyle(inputPanelStyles.value)
				}, [renderSlot(_ctx.$slots, "input")], 6)) : createCommentVNode("", true),
				!_ctx.hideInputAndOutput ? (openBlock(), createElementBlock("div", {
					key: 2,
					class: normalizeClass(_ctx.$style.outputPanel),
					style: normalizeStyle(outputPanelStyles.value)
				}, [renderSlot(_ctx.$slots, "output")], 6)) : createCommentVNode("", true),
				createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.mainPanel),
					style: normalizeStyle(mainPanelStyles.value)
				}, [createVNode(unref(N8nResizeWrapper_default), {
					"is-resizing-enabled": currentNodePaneType.value !== "unknown",
					width: relativeWidthToPx(mainPanelDimensions.value.relativeWidth),
					"min-width": MIN_PANEL_WIDTH,
					"grid-size": 20,
					"supported-directions": supportedResizeDirections.value,
					outset: "",
					onResize: onResizeThrottle,
					onResizeend: onResizeEnd
				}, {
					default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.dragButtonContainer) }, [!_ctx.hideInputAndOutput && _ctx.isDraggable ? (openBlock(), createBlock(PanelDragButton_default, {
						key: 0,
						class: normalizeClass({
							[_ctx.$style.draggable]: true,
							[_ctx.$style.visible]: isDragging.value
						}),
						"can-move-left": canMoveLeft.value,
						"can-move-right": canMoveRight.value,
						onDragstart: onDragStart,
						onDrag,
						onDragend: onDragEnd
					}, null, 8, [
						"class",
						"can-move-left",
						"can-move-right"
					])) : createCommentVNode("", true)], 2), createBaseVNode("div", { class: normalizeClass({
						[_ctx.$style.mainPanelInner]: true,
						[_ctx.$style.dragging]: isDragging.value
					}) }, [renderSlot(_ctx.$slots, "main")], 2)]),
					_: 3
				}, 8, [
					"is-resizing-enabled",
					"width",
					"supported-directions"
				])], 6)
			]);
		};
	}
});
const dataPanel = "_dataPanel_1xgxx_123";
const inputPanel = "_inputPanel_1xgxx_132 _dataPanel_1xgxx_123";
const outputPanel = "_outputPanel_1xgxx_140 _dataPanel_1xgxx_123";
const mainPanel = "_mainPanel_1xgxx_148";
const draggable = "_draggable_1xgxx_152";
const mainPanelInner = "_mainPanelInner_1xgxx_156";
const dragging = "_dragging_1xgxx_163";
const dragButtonContainer = "_dragButtonContainer_1xgxx_176";
const visible = "_visible_1xgxx_192";
var NDVDraggablePanels_vue_vue_type_style_index_0_lang_module_default = {
	dataPanel,
	inputPanel,
	outputPanel,
	mainPanel,
	draggable,
	mainPanelInner,
	dragging,
	"double-width": "_double-width_1xgxx_172",
	dragButtonContainer,
	visible
};
var NDVDraggablePanels_default = /* @__PURE__ */ __plugin_vue_export_helper_default(NDVDraggablePanels_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": NDVDraggablePanels_vue_vue_type_style_index_0_lang_module_default }]]);
var _hoisted_1 = {
	key: 0,
	ref: "container",
	class: "data-display",
	"data-test-id": "ndv-modal",
	tabindex: "0"
};
var NodeDetailsView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "NodeDetailsView",
	props: {
		workflowObject: {},
		readOnly: {
			type: Boolean,
			default: false
		},
		renaming: { type: Boolean },
		isProductionExecutionPreview: {
			type: Boolean,
			default: false
		}
	},
	emits: [
		"saveKeyboardShortcut",
		"valueChanged",
		"switchSelectedNode",
		"openConnectionNodeCreator",
		"stopExecution"
	],
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
		const deviceSupport = useDeviceSupport();
		const telemetry = useTelemetry();
		const telemetryContext = useTelemetryContext({ view_shown: "ndv" });
		const i18n = useI18n();
		const message = useMessage();
		const { APP_Z_INDEXES } = useStyles();
		const settingsEventBus = createEventBus();
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
			if (activeNode.value) return nodeTypesStore.getNodeType(activeNode.value.type, activeNode.value.typeVersion);
			return null;
		});
		const showTriggerWaitingWarning = computed(() => triggerWaitingWarningEnabled.value && !!activeNodeType.value && !activeNodeType.value.group.includes("trigger") && workflowsStore.isWorkflowRunning && workflowsStore.executionWaitingForWebhook);
		const workflowRunData = computed(() => {
			if (workflowExecution.value === null) return null;
			const executionData = workflowExecution.value.data;
			if (executionData?.resultData) return executionData.resultData.runData;
			return null;
		});
		const parentNodes = computed(() => {
			if (activeNode.value) return props.workflowObject.getParentNodesByDepth(activeNode.value.name, 1);
			return [];
		});
		const parentNode = computed(() => {
			for (const parent of parentNodes.value) {
				if (workflowsStore?.pinnedWorkflowData?.[parent.name]) return parent;
				if (workflowRunData.value?.[parent.name]) return parent;
			}
			return parentNodes.value[0];
		});
		const inputNodeName = computed(() => {
			if ((activeNode.value && activeNodeType.value ? getNodeOutputs(props.workflowObject, activeNode.value, activeNodeType.value) : []).filter((output) => {
				if (typeof output === "string") return output !== NodeConnectionTypes.Main;
				return output.type !== NodeConnectionTypes.Main;
			}).length > 0 && activeNode.value) return props.workflowObject.getChildNodes(activeNode.value.name, "ALL_NON_MAIN")?.[0];
			return selectedInput.value ?? parentNode.value?.name;
		});
		const inputNode = computed(() => {
			if (inputNodeName.value) return workflowsStore.getNodeByName(inputNodeName.value);
			return null;
		});
		const inputSize = computed(() => ndvStore.ndvInputDataWithPinnedData.length);
		const isTriggerNode = computed(() => !!activeNodeType.value && (activeNodeType.value.group.includes("trigger") || activeNodeType.value.name === "n8n-nodes-base.start"));
		const showTriggerPanel = computed(() => {
			const override = !!activeNodeType.value?.triggerPanel;
			if (typeof activeNodeType.value?.triggerPanel === "boolean") return override;
			const isWebhookBasedNode = !!activeNodeType.value?.webhooks?.length;
			const isPollingNode = activeNodeType.value?.polling;
			return !props.readOnly && isTriggerNode.value && (isWebhookBasedNode || isPollingNode || override);
		});
		const isExecutableTriggerNode = computed(() => {
			if (!activeNodeType.value) return false;
			return EXECUTABLE_TRIGGER_NODE_TYPES.includes(activeNodeType.value.name);
		});
		const isActiveStickyNode = computed(() => !!ndvStore.activeNode && ndvStore.activeNode.type === "n8n-nodes-base.stickyNote");
		const workflowExecution = computed(() => workflowsStore.getWorkflowExecution);
		const maxOutputRun = computed(() => {
			if (activeNode.value === null) return 0;
			const runData = workflowRunData.value;
			if (!runData?.[activeNode.value.name]) return 0;
			if (runData[activeNode.value.name].length) return runData[activeNode.value.name].length - 1;
			return 0;
		});
		const outputRun = computed(() => runOutputIndex.value === -1 ? maxOutputRun.value : Math.min(runOutputIndex.value, maxOutputRun.value));
		const maxInputRun = computed(() => {
			if (inputNode.value === null || activeNode.value === null) return 0;
			const workflowNode = props.workflowObject.getNode(activeNode.value.name);
			if (!workflowNode || !activeNodeType.value) return 0;
			const outputs = getNodeOutputs(props.workflowObject, workflowNode, activeNodeType.value);
			let node = inputNode.value;
			const runData = workflowRunData.value;
			if (outputs.some((output) => output !== NodeConnectionTypes.Main)) node = activeNode.value;
			if (!node || !runData?.hasOwnProperty(node.name)) return 0;
			if (runData[node.name].length) return runData[node.name].length - 1;
			return 0;
		});
		const connectedCurrentNodeOutputs = computed(() => {
			return parentNodes.value.find(({ name }) => name === inputNodeName.value)?.indicies;
		});
		const inputRun = computed(() => {
			if (isLinkingEnabled.value && maxOutputRun.value === maxInputRun.value) return outputRun.value;
			const currentInputNodeName = inputNodeName.value;
			if (runInputIndex.value === -1 && currentInputNodeName) return connectedCurrentNodeOutputs.value?.map((outputIndex) => nodeHelpers.getLastRunIndexWithData(currentInputNodeName, outputIndex)).find((runIndex) => runIndex !== -1) ?? maxInputRun.value;
			return Math.min(runInputIndex.value, maxInputRun.value);
		});
		const canLinkRuns = computed(() => maxOutputRun.value > 0 && maxOutputRun.value === maxInputRun.value);
		const linked = computed(() => isLinkingEnabled.value && canLinkRuns.value);
		const featureRequestUrl = computed(() => {
			if (!activeNodeType.value) return "";
			return `${BASE_NODE_SURVEY_URL}${activeNodeType.value.name}`;
		});
		const outputPanelEditMode = computed(() => ndvStore.outputPanelEditMode);
		const isExecutionWaitingForWebhook = computed(() => workflowsStore.executionWaitingForWebhook);
		const blockUi = computed(() => workflowsStore.isWorkflowRunning || isExecutionWaitingForWebhook.value);
		const foreignCredentials = computed(() => nodeHelpers.getForeignCredentialsIfSharingEnabled(activeNode.value?.credentials));
		const hasForeignCredential = computed(() => foreignCredentials.value.length > 0);
		const inputPanelDisplayMode = computed(() => ndvStore.inputPanelDisplayMode);
		const outputPanelDisplayMode = computed(() => ndvStore.outputPanelDisplayMode);
		const setIsTooltipVisible = ({ isTooltipVisible }) => {
			pinDataDiscoveryTooltipVisible.value = isTooltipVisible;
		};
		const onKeyDown = (e) => {
			if (e.key === "s" && deviceSupport.isCtrlKeyPressed(e)) onSaveWorkflow(e);
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
			ndvStore.unsetActiveNodeName();
			setTimeout(() => {
				workflowActivate.activateCurrentWorkflow("ndv");
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
			if (activeNode.value) telemetry.track("User clicked ndv link", {
				node_type: activeNode.value.type,
				workflow_id: workflowsStore.workflowId,
				push_ref: pushRef.value,
				pane: NodeConnectionTypes.Main,
				type: "i-wish-this-node-would"
			});
		};
		const onDragEnd = (e) => {
			isDragging.value = false;
			telemetry.track("User moved parameters pane", {
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
				if (!activeNode.value || !workflowsStore.isWorkflowRunning) return;
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
		const onOpenConnectionNodeCreator = (nodeTypeName, connectionType, connectionIndex = 0) => {
			emit("openConnectionNodeCreator", nodeTypeName, connectionType, connectionIndex);
		};
		const close = async () => {
			if (isDragging.value) return;
			if (outputPanelEditMode.value.enabled && activeNode.value) {
				if (await message.confirm("", i18n.baseText("ndv.pinData.beforeClosing.title"), {
					confirmButtonText: i18n.baseText("ndv.pinData.beforeClosing.confirm"),
					cancelButtonText: i18n.baseText("ndv.pinData.beforeClosing.cancel")
				}) === "confirm") {
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
			ndvStore.unsetActiveNodeName();
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
			if (linked.value) ndvStore.setOutputRunIndex(run);
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
			ndvStore.setPanelDisplayMode({
				pane,
				mode
			});
		};
		watch(activeNode, (node, oldNode) => {
			if (node && !oldNode) registerKeyboardListener();
			else if (!node) unregisterKeyboardListener();
			if (node && node.name !== oldNode?.name && !isActiveStickyNode.value) {
				runInputIndex.value = -1;
				ndvStore.setOutputRunIndex(-1);
				isLinkingEnabled.value = true;
				selectedInput.value = void 0;
				triggerWaitingWarningEnabled.value = false;
				avgOutputRowHeight.value = 0;
				avgInputRowHeight.value = 0;
				setTimeout(() => ndvStore.setNDVPushRef(), 0);
				if (!activeNodeType.value) return;
				externalHooks.run("dataDisplay.nodeTypeChanged", { nodeSubtitle: nodeHelpers.getNodeSubtitle(node, activeNodeType.value, props.workflowObject) });
				setTimeout(() => {
					if (activeNode.value) {
						const outgoingConnections = workflowsStore.outgoingConnectionsByNodeName(activeNode.value?.name);
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
							output_displayed_row_height_avg: avgOutputRowHeight.value,
							source: telemetryContext.ndv_source?.value ?? "other"
						});
					}
				}, 2e3);
			}
			if (window.top && !isActiveStickyNode.value) window.top.postMessage(JSON.stringify({ command: node ? "openNDV" : "closeNDV" }), "*");
		}, { immediate: true });
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
		watch(inputRun, (inputRun$1) => {
			setTimeout(() => {
				ndvStore.setInputRunIndex(inputRun$1);
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
			return openBlock(), createBlock(unref(ElDialog), {
				id: "ndv",
				"model-value": (!!unref(activeNode) || _ctx.renaming) && !isActiveStickyNode.value,
				"before-close": close,
				"show-close": false,
				class: "data-display-wrapper ndv-wrapper",
				"overlay-class": "data-display-overlay",
				width: "auto",
				"append-to": `#${unref(APP_MODALS_ELEMENT_ID)}`,
				"data-test-id": "ndv",
				"z-index": unref(APP_Z_INDEXES).NDV
			}, {
				default: withCtx(() => [createVNode(unref(N8nTooltip_default), {
					placement: "bottom-start",
					visible: showTriggerWaitingWarning.value,
					disabled: !showTriggerWaitingWarning.value
				}, {
					content: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.triggerWarning) }, toDisplayString(unref(i18n).baseText("ndv.backToCanvas.waitingForTriggerWarning")), 3)]),
					default: withCtx(() => [createBaseVNode("div", {
						class: normalizeClass(_ctx.$style.backToCanvas),
						"data-test-id": "back-to-canvas",
						onClick: close
					}, [createVNode(unref(N8nIcon_default), {
						icon: "arrow-left",
						color: "text-xlight",
						size: "medium"
					}), createVNode(unref(N8nText_default), {
						color: "text-xlight",
						size: "medium",
						bold: true
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("ndv.backToCanvas")), 1)]),
						_: 1
					})], 2)]),
					_: 1
				}, 8, ["visible", "disabled"]), unref(activeNode) ? (openBlock(), createElementBlock("div", _hoisted_1, [createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.modalBackground),
					onClick: close
				}, null, 2), (openBlock(), createBlock(NDVDraggablePanels_default, {
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
					output: withCtx(() => [createVNode(OutputPanel_default, {
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
						onActivatePane: activateOutputPane,
						onLinkRun: onLinkRunToOutput,
						onUnlinkRun: _cache[2] || (_cache[2] = () => onUnlinkRun("output")),
						onRunChange: onRunOutputIndexChange,
						onOpenSettings: openSettings,
						onTableMounted: onOutputTableMounted,
						onItemHover: onOutputItemHover,
						onSearch,
						onDisplayModeChange: _cache[3] || (_cache[3] = ($event) => handleChangeDisplayMode("output", $event))
					}, null, 8, [
						"workflow-object",
						"can-link-runs",
						"run-index",
						"linked-runs",
						"push-ref",
						"is-read-only",
						"block-u-i",
						"is-production-execution-preview",
						"is-pane-active",
						"display-mode"
					])]),
					main: withCtx(() => [createVNode(NodeSettings_default, {
						"event-bus": unref(settingsEventBus),
						dragging: isDragging.value,
						"push-ref": pushRef.value,
						"foreign-credentials": foreignCredentials.value,
						"read-only": _ctx.readOnly,
						"block-u-i": blockUi.value && showTriggerPanel.value,
						executable: !_ctx.readOnly,
						"input-size": inputSize.value,
						onValueChanged: valueChanged,
						onExecute: onNodeExecute,
						onStopExecution,
						onActivate: onWorkflowActivate,
						onSwitchSelectedNode,
						onOpenConnectionNodeCreator
					}, null, 8, [
						"event-bus",
						"dragging",
						"push-ref",
						"foreign-credentials",
						"read-only",
						"block-u-i",
						"executable",
						"input-size"
					]), featureRequestUrl.value ? (openBlock(), createElementBlock("a", {
						key: 0,
						class: normalizeClass(_ctx.$style.featureRequest),
						target: "_blank",
						onClick: onFeatureRequestClick
					}, [createVNode(unref(N8nIcon_default), { icon: "lightbulb" }), createTextVNode(" " + toDisplayString(unref(i18n).baseText("ndv.featureRequest")), 1)], 2)) : createCommentVNode("", true)]),
					_: 2
				}, [showTriggerPanel.value || !isTriggerNode.value ? {
					name: "input",
					fn: withCtx(() => [showTriggerPanel.value ? (openBlock(), createBlock(TriggerPanel_default, {
						key: 0,
						"node-name": unref(activeNode).name,
						"push-ref": pushRef.value,
						onExecute: onNodeExecute,
						onActivate: onWorkflowActivate
					}, null, 8, ["node-name", "push-ref"])) : !isTriggerNode.value ? (openBlock(), createBlock(InputPanel_default, {
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
						"search-shortcut": isInputPaneActive.value ? "/" : void 0,
						"display-mode": inputPanelDisplayMode.value,
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
					}, null, 8, [
						"workflow-object",
						"can-link-runs",
						"run-index",
						"linked-runs",
						"active-node-name",
						"current-node-name",
						"push-ref",
						"read-only",
						"is-production-execution-preview",
						"search-shortcut",
						"display-mode",
						"is-mapping-onboarded",
						"focused-mappable-input"
					])) : createCommentVNode("", true)]),
					key: "0"
				} : void 0]), 1032, [
					"is-trigger-node",
					"hide-input-and-output",
					"position",
					"is-draggable",
					"has-double-width",
					"node-type"
				]))], 512)) : createCommentVNode("", true)]),
				_: 1
			}, 8, [
				"model-value",
				"append-to",
				"z-index"
			]);
		};
	}
});
var NodeDetailsView_vue_vue_type_style_index_1_lang_module_default = {
	modalBackground: "_modalBackground_1qkc8_123",
	triggerWarning: "_triggerWarning_1qkc8_128",
	backToCanvas: "_backToCanvas_1qkc8_132",
	featureRequest: "_featureRequest_1qkc8_153"
};
var NodeDetailsView_default = /* @__PURE__ */ __plugin_vue_export_helper_default(NodeDetailsView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": NodeDetailsView_vue_vue_type_style_index_1_lang_module_default }]]);
export { NodeDetailsView_default as default };
