import { C as computed, Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, J as onBeforeUnmount, M as createVNode, P as defineComponent, T as createBlock, Ut as toValue, Vt as toRef, W as mergeProps, Z as onMounted, _t as watch, b as Teleport, bn as normalizeStyle, bt as withCtx, et as openBlock, j as createTextVNode, mt as useTemplateRef, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { D as useElementSize, yt as useI18n } from "./_MapCache-8-eqnC2S.js";
import { Ai as N8nIconButton_default, At as N8nLink_default, Hi as N8nIcon_default, Ht as N8nTooltip_default, N as N8nResizeWrapper_default, Yt as createEventBus, l as N8nInlineTextEdit_default, wt as useDeviceSupport, zi as N8nText_default } from "./src-Cq27d_Gp.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-DjneYy0u.js";
import "./date-picker-BBfVobfB.js";
import { C as useNodeTypesStore, It as useNDVStore, Mt as useNodeHelpers, Nt as useTelemetry, _r as useExternalHooks, aa as nodeViewEventBus, gr as useStyles, jr as LOCAL_STORAGE_NDV_PANEL_WIDTH, la as dataPinningEventBus, r as useUIStore, s as useWorkflowsStore, xr as useMessage } from "./users.store-qBZsmf9-.js";
import { l as InputPanel_default } from "./ParameterInputList-B-XZpHfG.js";
import { $a as NodeConnectionTypes, E as APP_MODALS_ELEMENT_ID, La as jsonParse, aa as getNodeOutputs, hs as MODAL_CONFIRM, pr as STICKY_NODE_TYPE, sn as EXECUTABLE_TRIGGER_NODE_TYPES } from "./constants-Cyrg9Nbl.js";
import "./merge-O0QrB7po.js";
import { j as storeToRefs } from "./_baseOrderBy-3Uh8XZv3.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-DmlUcXhA.js";
import "./dataTable.store-Dsml2m7-.js";
import "./useClipboard-D9AU0bV9.js";
import "./executions.store-nTCUYDJR.js";
import "./CopyInput-BKp9uJIK.js";
import { n as ndvEventBus } from "./assistant.store-CT263qz_.js";
import "./chatPanel.store-Br-ga6F1.js";
import "./RunData-DSfa3F2H.js";
import "./NDVEmptyState-C41gb8CX.js";
import "./externalSecrets.ee.store-DgMeWcz6.js";
import "./uniqBy-HUxZm4qP.js";
import "./semver-CHkqcyj_.js";
import { t as usePinnedData } from "./usePinnedData-B4FHq9FM.js";
import { t as getNodeIconSource } from "./nodeIcon-p8UmtDus.js";
import "./canvas.utils-BvLPDYAs.js";
import "./nodeCreator.store-D-pWr7VG.js";
import "./useCanvasOperations-01naG_2v.js";
import "./folders.store-B29vIVJe.js";
import "./CommunityNodeUpdateInfo-B_u1R9eQ.js";
import "./useEnvFeatureFlag-B0TWUC5P.js";
import "./RunDataHtml-CSYDFYWy.js";
import { t as Draggable_default } from "./Draggable-CJeFuBtr.js";
import { t as NodeIcon_default } from "./NodeIcon-HdSkOCP-.js";
import "./VirtualSchema-CV3uHShM.js";
import "./useCalloutHelpers-DzB8Zq8O.js";
import { t as useTelemetryContext } from "./useTelemetryContext-CVJ50dfV.js";
import "./useRunWorkflow-BfL7BCzH.js";
import "./pushConnection.store-Di8YtKvV.js";
import "./nodeTransforms-lXLCgQTS.js";
import "./vue-json-pretty-C8ozTv7n.js";
import "./collaboration.store-bO4QCkn5.js";
import "./dateFormatter-C2jhIUgb.js";
import "./useExecutionHelpers-BqmfvwsO.js";
import "./useFreeAiCredits-Dxull4ml.js";
import { n as useNodeDocsUrl, t as NodeSettings_default } from "./NodeSettings-Oq7xdfkf.js";
import "./vue-ADw0uNKl.js";
import { t as useKeybindings } from "./useKeybindings-CsWMJtRb.js";
import "./useActions-C-Mauhtu.js";
import "./useLogsTreeExpand-Br8RXcPm.js";
import "./AnimatedSpinner-BHDG51rn.js";
import "./useExecutionData-BADKLPu0.js";
import "./RunDataParsedAiContent-DF-YtYyw.js";
import { n as OutputPanel_default, r as NDVFloatingNodes_default, t as TriggerPanel_default } from "./TriggerPanel-DhXmw9p3.js";
var NDVHeader_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
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
		function onRename(newNodeName) {
			emit("rename", newNodeName || props.nodeTypeName);
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("header", { class: normalizeClass(_ctx.$style.ndvHeader) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [__props.icon ? (openBlock(), createBlock(NodeIcon_default, {
				key: 0,
				class: normalizeClass(_ctx.$style.icon),
				size: 20,
				"icon-source": __props.icon,
				"node-name": props.nodeTypeName,
				"show-tooltip": true
			}, null, 8, [
				"class",
				"icon-source",
				"node-name"
			])) : createCommentVNode("", true), createBaseVNode("div", {
				class: normalizeClass(_ctx.$style.title),
				"data-test-id": "node-title-container"
			}, [createVNode(unref(N8nInlineTextEdit_default), {
				"model-value": __props.nodeName,
				"min-width": 0,
				"max-width": 500,
				placeholder: unref(i18n).baseText("ndv.title.rename.placeholder"),
				"read-only": __props.readOnly,
				"onUpdate:modelValue": onRename
			}, null, 8, [
				"model-value",
				"placeholder",
				"read-only"
			])], 2)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.actions) }, [__props.docsUrl ? (openBlock(), createBlock(unref(N8nLink_default), {
				key: 0,
				theme: "text",
				target: "_blank",
				href: __props.docsUrl
			}, {
				default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.docsLabel) }, [createVNode(unref(N8nText_default), {
					size: "small",
					bold: ""
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("nodeSettings.docs")), 1)]),
					_: 1
				}), createVNode(unref(N8nIcon_default), { icon: "external-link" })], 2)]),
				_: 1
			}, 8, ["href"])) : createCommentVNode("", true), createVNode(unref(N8nTooltip_default), null, {
				content: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("ndv.close.tooltip")), 1)]),
				default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
					icon: "x",
					type: "tertiary",
					text: "",
					"data-test-id": "ndv-close-button",
					onClick: _cache[0] || (_cache[0] = ($event) => emit("close"))
				})]),
				_: 1
			})], 2)], 2);
		};
	}
});
var NDVHeader_vue_vue_type_style_index_0_lang_module_default = {
	ndvHeader: "_ndvHeader_1e58b_2",
	content: "_content_1e58b_12",
	actions: "_actions_1e58b_19",
	title: "_title_1e58b_34",
	docsLabel: "_docsLabel_1e58b_39",
	icon: "_icon_1e58b_44"
};
var NDVHeader_default = /* @__PURE__ */ __plugin_vue_export_helper_default(NDVHeader_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": NDVHeader_vue_vue_type_style_index_0_lang_module_default }]]);
function useNdvLayout(options) {
	const MIN_MAIN_PANEL_WIDTH_PX = 368;
	const MIN_PANEL_WIDTH_PX = 120;
	const DEFAULT_INPUTLESS_MAIN_WIDTH_PX = 480;
	const DEFAULT_WIDE_MAIN_WIDTH_PX = 640;
	const DEFAULT_REGULAR_MAIN_WIDTH_PX = 420;
	const panelWidthPercentage = ref({
		left: 40,
		main: 20,
		right: 40
	});
	const localStorageKey = computed(() => `${LOCAL_STORAGE_NDV_PANEL_WIDTH}_${toValue(options.paneType).toUpperCase()}`);
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
				const main$1 = pixelsToPercentage(DEFAULT_INPUTLESS_MAIN_WIDTH_PX);
				return {
					left: 0,
					main: main$1,
					right: 100 - main$1
				};
			}
			case "wide": {
				const main$1 = pixelsToPercentage(DEFAULT_WIDE_MAIN_WIDTH_PX);
				const panels = (100 - main$1) / 2;
				return {
					left: panels,
					main: main$1,
					right: panels
				};
			}
			case "dragless":
			case "unknown":
			case "regular":
			default: {
				const main$1 = pixelsToPercentage(DEFAULT_REGULAR_MAIN_WIDTH_PX);
				const panels = (100 - main$1) / 2;
				return {
					left: panels,
					main: main$1,
					right: panels
				};
			}
		}
	});
	const safePanelWidth = ({ left, main: main$1, right }) => {
		const minLeft = toValue(options.hasInputPanel) ? minPanelWidthPercentage.value : 0;
		const minRight = minPanelWidthPercentage.value;
		const minMain = minMainPanelWidthPercentage.value;
		const newPanelWidth = {
			left: Math.max(minLeft, left),
			main: Math.max(minMain, main$1),
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
		if (storedPanelSizeString) panelWidthPercentage.value = safePanelWidth(jsonParse(storedPanelSizeString, { fallbackValue: defaultSize }) ?? defaultSize);
		else panelWidthPercentage.value = safePanelWidth(defaultSize);
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
			panelWidthPercentage.value = safePanelWidth({
				left: Math.max(minPanelWidthPercentage.value, potentialLeft),
				main: newMain,
				right: initialRight
			});
		} else if (event.direction === "right") {
			const potentialRight = initialRight - diffMain;
			if (potentialRight < minPanelWidthPercentage.value) return;
			panelWidthPercentage.value = safePanelWidth({
				left: initialLeft,
				main: newMain,
				right: Math.max(minPanelWidthPercentage.value, potentialRight)
			});
		}
	};
	const onDrag = (position) => {
		const newLeft = Math.max(minPanelWidthPercentage.value, pixelsToPercentage(position[0]) - panelWidthPercentage.value.main / 2);
		const newRight = Math.max(minPanelWidthPercentage.value, 100 - newLeft - panelWidthPercentage.value.main);
		if (newLeft + panelWidthPercentage.value.main + newRight > 100) return;
		panelWidthPercentage.value.left = newLeft;
		panelWidthPercentage.value.right = newRight;
	};
	watch(containerWidth, (newWidth, oldWidth) => {
		if (!newWidth) return;
		if (!oldWidth) loadPanelSize();
		else panelWidthPercentage.value = safePanelWidth(panelWidthPercentage.value);
	});
	watch(toRef(options.paneType), () => {
		loadPanelSize();
	}, { immediate: true });
	return {
		containerWidth,
		panelWidthPercentage,
		panelWidthPixels,
		onResize,
		onDrag,
		onResizeEnd
	};
}
var PanelDragButtonV2_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "PanelDragButtonV2",
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
				class: normalizeClass(_ctx.$style.dragContainer),
				type: "panel-resize",
				cursor: "ew-resize",
				"data-test-id": "panel-drag-button",
				onDrag,
				onDragstart: onDragStart,
				onDragend: onDragEnd
			}, {
				default: withCtx(({ isDragging }) => [createBaseVNode("button", { class: normalizeClass([_ctx.$style.dragButton, { [_ctx.$style.dragging]: isDragging }]) }, [
					__props.canMoveLeft ? (openBlock(), createBlock(unref(N8nIcon_default), {
						key: 0,
						class: normalizeClass(_ctx.$style.arrow),
						icon: "arrow-left"
					}, null, 8, ["class"])) : createCommentVNode("", true),
					createVNode(unref(N8nIcon_default), {
						class: normalizeClass(_ctx.$style.handle),
						icon: "menu"
					}, null, 8, ["class"]),
					__props.canMoveRight ? (openBlock(), createBlock(unref(N8nIcon_default), {
						key: 1,
						class: normalizeClass(_ctx.$style.arrow),
						icon: "arrow-right"
					}, null, 8, ["class"])) : createCommentVNode("", true)
				], 2)]),
				_: 1
			}, 8, ["class"]);
		};
	}
});
var PanelDragButtonV2_vue_vue_type_style_index_0_lang_module_default = {
	dragButton: "_dragButton_w2o41_125",
	arrow: "_arrow_w2o41_140",
	handle: "_handle_w2o41_144",
	dragging: "_dragging_w2o41_148"
};
var PanelDragButtonV2_default = /* @__PURE__ */ __plugin_vue_export_helper_default(PanelDragButtonV2_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": PanelDragButtonV2_vue_vue_type_style_index_0_lang_module_default }]]);
var NodeDetailsViewV2_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "NodeDetailsViewV2",
	props: {
		workflowObject: {},
		readOnly: {
			type: Boolean,
			default: false
		},
		isProductionExecutionPreview: {
			type: Boolean,
			default: false
		}
	},
	emits: [
		"valueChanged",
		"switchSelectedNode",
		"openConnectionNodeCreator",
		"renameNode",
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
		const nodeTypesStore = useNodeTypesStore();
		const uiStore = useUIStore();
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
			if (activeNode.value) return nodeTypesStore.getNodeType(activeNode.value.type, activeNode.value.typeVersion);
			return null;
		});
		const { docsUrl } = useNodeDocsUrl({ nodeType: activeNodeType });
		const workflowRunning = computed(() => uiStore.isActionActive.workflowRunning);
		const workflowRunData = computed(() => {
			if (workflowExecution.value === null) return null;
			const executionData = workflowExecution.value.data;
			if (executionData?.resultData) return executionData.resultData.runData;
			return null;
		});
		const parentNodes = computed(() => {
			if (activeNode.value) return props.workflowObject.getParentNodesByDepth(activeNode.value.name, 1).map(({ name }) => name) || [];
			else return [];
		});
		const parentNode = computed(() => {
			for (const parentNodeName of parentNodes.value) {
				if (workflowsStore?.pinnedWorkflowData?.[parentNodeName]) return parentNodeName;
				if (workflowRunData.value?.[parentNodeName]) return parentNodeName;
			}
			return parentNodes.value[0];
		});
		const inputNodeName = computed(() => {
			if ((activeNode.value && activeNodeType.value ? getNodeOutputs(props.workflowObject, activeNode.value, activeNodeType.value) : []).filter((output$1) => {
				if (typeof output$1 === "string") return output$1 !== NodeConnectionTypes.Main;
				return output$1.type !== NodeConnectionTypes.Main;
			}).length > 0 && activeNode.value) return props.workflowObject.getChildNodes(activeNode.value.name, "ALL_NON_MAIN")?.[0];
			return selectedInput.value || parentNode.value;
		});
		const inputNode = computed(() => {
			if (inputNodeName.value) return workflowsStore.getNodeByName(inputNodeName.value);
			return null;
		});
		const inputSize = computed(() => ndvStore.ndvInputDataWithPinnedData.length);
		const isTriggerNode = computed(() => !!activeNodeType.value && activeNodeType.value.group.includes("trigger"));
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
			if (outputs.some((output$1) => output$1 !== NodeConnectionTypes.Main)) node = activeNode.value;
			if (!node || !runData?.hasOwnProperty(node.name)) return 0;
			if (runData[node.name].length) return runData[node.name].length - 1;
			return 0;
		});
		const inputRun = computed(() => {
			if (isLinkingEnabled.value && maxOutputRun.value === maxInputRun.value) return outputRun.value;
			if (runInputIndex.value === -1) return maxInputRun.value;
			return Math.min(runInputIndex.value, maxInputRun.value);
		});
		const canLinkRuns = computed(() => maxOutputRun.value > 0 && maxOutputRun.value === maxInputRun.value);
		const linked = computed(() => isLinkingEnabled.value && canLinkRuns.value);
		const outputPanelEditMode = computed(() => ndvStore.outputPanelEditMode);
		const isWorkflowRunning = computed(() => uiStore.isActionActive.workflowRunning);
		const isExecutionWaitingForWebhook = computed(() => workflowsStore.executionWaitingForWebhook);
		const blockUi = computed(() => isWorkflowRunning.value || isExecutionWaitingForWebhook.value);
		const foreignCredentials = computed(() => nodeHelpers.getForeignCredentialsIfSharingEnabled(activeNode.value?.credentials));
		const hasForeignCredential = computed(() => foreignCredentials.value.length > 0);
		const inputPanelDisplayMode = computed(() => ndvStore.inputPanelDisplayMode);
		const outputPanelDisplayMode = computed(() => ndvStore.outputPanelDisplayMode);
		const hasInputPanel = computed(() => !isTriggerNode.value || showTriggerPanel.value);
		const supportedResizeDirections = computed(() => hasInputPanel.value ? ["left", "right"] : ["right"]);
		const nodeSettingsProps = computed(() => ({
			eventBus: settingsEventBus,
			dragging: isDragging.value,
			pushRef: pushRef.value,
			foreignCredentials: foreignCredentials.value,
			readOnly: props.readOnly,
			blockUI: blockUi.value && showTriggerPanel.value,
			executable: !props.readOnly,
			inputSize: inputSize.value,
			isNdvV2: true
		}));
		const { containerWidth, onDrag, onResize, onResizeEnd, panelWidthPercentage, panelWidthPixels } = useNdvLayout({
			container: containerRef,
			hasInputPanel,
			paneType: computed(() => {
				if (!hasInputPanel.value) return "inputless";
				return activeNodeType.value?.parameterPane ?? "regular";
			})
		});
		const setIsTooltipVisible = ({ isTooltipVisible }) => {
			pinDataDiscoveryTooltipVisible.value = isTooltipVisible;
		};
		const setSelectedInput = (value) => {
			selectedInput.value = value;
		};
		const onKeyDown = (e) => {
			if (e.key === "s" && deviceSupport.isCtrlKeyPressed(e)) e.preventDefault();
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
			nodeViewEventBus.emit("publishWorkflow");
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
				window_width: containerWidth.value,
				start_position: mainPanelPosition.value,
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
				if (!activeNode.value || !workflowRunning.value) return;
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
		const onSwitchSelectedNode = (nodeTypeName) => {
			emit("switchSelectedNode", nodeTypeName);
		};
		const onOpenConnectionNodeCreator = (nodeTypeName, connectionType) => {
			emit("openConnectionNodeCreator", nodeTypeName, connectionType);
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
		const onRename = (name) => {
			emit("renameNode", name);
		};
		const handleChangeDisplayMode = (pane, mode) => {
			ndvStore.setPanelDisplayMode({
				pane,
				mode
			});
		};
		watch(activeNode, (node, oldNode) => {
			if (node && !oldNode) {
				registerKeyboardListener();
				dialogRef.value?.show();
			} else if (!node) unregisterKeyboardListener();
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
							selected_view_inputs: isTriggerNode.value ? "trigger" : ndvStore.inputPanelDisplayMode,
							selected_view_outputs: ndvStore.outputPanelDisplayMode,
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
		watch(inputRun, (run) => {
			setTimeout(() => {
				ndvStore.setInputRunIndex(run);
			}, 0);
		});
		watch(mainPanelRef, (mainPanel) => {
			if (!mainPanel) return;
			function getTabbableCandidates(element) {
				const nodes = [];
				const walker = document.createTreeWalker(element, NodeFilter.SHOW_ELEMENT, { acceptNode: (node) => {
					const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
					if (node.disabled || node.hidden || isHiddenInput) return NodeFilter.FILTER_SKIP;
					return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
				} });
				while (walker.nextNode()) nodes.push(walker.currentNode);
				return nodes;
			}
			const firstFocusableElement = getTabbableCandidates(mainPanel)[0];
			if (firstFocusableElement) firstFocusableElement.focus();
		});
		onMounted(() => {
			dialogRef.value?.show();
			dataPinningEventBus.on("data-pinning-discovery", setIsTooltipVisible);
			ndvEventBus.on("updateInputNodeName", setSelectedInput);
		});
		onBeforeUnmount(() => {
			dataPinningEventBus.off("data-pinning-discovery", setIsTooltipVisible);
			ndvEventBus.off("updateInputNodeName", setSelectedInput);
			unregisterKeyboardListener();
		});
		return (_ctx, _cache) => {
			return unref(activeNode) && !isActiveStickyNode.value ? (openBlock(), createBlock(Teleport, {
				key: 0,
				to: `#${unref(APP_MODALS_ELEMENT_ID)}`
			}, [createBaseVNode("div", {
				"data-test-id": "ndv-backdrop",
				class: normalizeClass(_ctx.$style.backdrop),
				style: normalizeStyle({ zIndex: unref(APP_Z_INDEXES).NDV }),
				onClick: close
			}, null, 6), createBaseVNode("dialog", {
				ref_key: "dialogRef",
				ref: dialogRef,
				open: "",
				"aria-modal": "true",
				"data-test-id": "ndv",
				class: normalizeClass(_ctx.$style.dialog),
				style: normalizeStyle({ zIndex: unref(APP_Z_INDEXES).NDV })
			}, [createVNode(NDVFloatingNodes_default, {
				"root-node": unref(activeNode),
				onSwitchSelectedNode
			}, null, 8, ["root-node"]), createBaseVNode("div", {
				ref_key: "containerRef",
				ref: containerRef,
				class: normalizeClass({
					[_ctx.$style.container]: true,
					[_ctx.$style.webhookWaiting]: isExecutionWaitingForWebhook.value
				})
			}, [createVNode(NDVHeader_default, {
				class: normalizeClass(_ctx.$style.header),
				"node-name": unref(activeNode).name,
				"node-type-name": activeNodeType.value?.defaults.name ?? activeNodeType.value?.displayName ?? unref(activeNode).name,
				icon: unref(getNodeIconSource)(activeNodeType.value ?? unref(activeNode).type, unref(activeNode)),
				"docs-url": unref(docsUrl),
				onClose: close,
				onRename
			}, null, 8, [
				"class",
				"node-name",
				"node-type-name",
				"icon",
				"docs-url"
			]), createBaseVNode("main", { class: normalizeClass(_ctx.$style.main) }, [
				hasInputPanel.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass([_ctx.$style.column, _ctx.$style.dataColumn]),
					style: normalizeStyle({ width: `${unref(panelWidthPercentage).left}%` })
				}, [showTriggerPanel.value ? (openBlock(), createBlock(TriggerPanel_default, {
					key: 0,
					"node-name": unref(activeNode).name,
					"push-ref": pushRef.value,
					class: normalizeClass(_ctx.$style.input),
					onExecute: onNodeExecute,
					onActivate: onWorkflowActivate
				}, null, 8, [
					"node-name",
					"push-ref",
					"class"
				])) : !isTriggerNode.value ? (openBlock(), createBlock(InputPanel_default, {
					key: 1,
					"workflow-object": __props.workflowObject,
					"can-link-runs": canLinkRuns.value,
					"run-index": inputRun.value,
					"linked-runs": linked.value,
					"active-node-name": unref(activeNode).name,
					"current-node-name": inputNodeName.value,
					"push-ref": pushRef.value,
					"read-only": __props.readOnly || hasForeignCredential.value,
					"is-production-execution-preview": __props.isProductionExecutionPreview,
					"search-shortcut": isInputPaneActive.value ? "/" : void 0,
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
					"class",
					"is-mapping-onboarded",
					"focused-mappable-input"
				])) : createCommentVNode("", true)], 6)) : createCommentVNode("", true),
				createVNode(unref(N8nResizeWrapper_default), {
					width: unref(panelWidthPixels).main,
					"min-width": 260,
					"supported-directions": supportedResizeDirections.value,
					"grid-size": 8,
					class: normalizeClass({
						[_ctx.$style.column]: !isExecutionWaitingForWebhook.value,
						[_ctx.$style.webhookWaiting]: isExecutionWaitingForWebhook.value
					}),
					style: normalizeStyle({ width: `${unref(panelWidthPercentage).main}%` }),
					outset: "",
					onResize: unref(onResize),
					onResizestart: onDragStart,
					onResizeend: onDragEnd
				}, {
					default: withCtx(() => [createBaseVNode("div", {
						ref_key: "mainPanelRef",
						ref: mainPanelRef,
						class: normalizeClass(_ctx.$style.main)
					}, [hasInputPanel.value ? (openBlock(), createBlock(PanelDragButtonV2_default, {
						key: 0,
						class: normalizeClass(_ctx.$style.draggable),
						"can-move-left": true,
						"can-move-right": true,
						onDrag: unref(onDrag),
						onDragstart: onDragStart,
						onDragend: onDragEnd
					}, null, 8, ["class", "onDrag"])) : createCommentVNode("", true), createVNode(NodeSettings_default, mergeProps(nodeSettingsProps.value, {
						class: _ctx.$style.settings,
						onExecute: onNodeExecute,
						onStopExecution,
						onActivate: onWorkflowActivate,
						onSwitchSelectedNode,
						onOpenConnectionNodeCreator
					}), null, 16, ["class"])], 2)]),
					_: 1
				}, 8, [
					"width",
					"supported-directions",
					"class",
					"style",
					"onResize"
				]),
				createBaseVNode("div", {
					class: normalizeClass([_ctx.$style.column, _ctx.$style.dataColumn]),
					style: normalizeStyle({ width: `${unref(panelWidthPercentage).right}%` })
				}, [createVNode(OutputPanel_default, {
					"data-test-id": "output-panel",
					"workflow-object": __props.workflowObject,
					"can-link-runs": canLinkRuns.value,
					"run-index": outputRun.value,
					"linked-runs": linked.value,
					"push-ref": pushRef.value,
					"is-read-only": __props.readOnly || hasForeignCredential.value,
					"block-u-i": blockUi.value && isTriggerNode.value && !isExecutableTriggerNode.value,
					"is-production-execution-preview": __props.isProductionExecutionPreview,
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
					"display-mode",
					"class"
				])], 6)
			], 2)], 2)], 6)], 8, ["to"])) : createCommentVNode("", true);
		};
	}
});
var NodeDetailsViewV2_vue_vue_type_style_index_0_lang_module_default = {
	backdrop: "_backdrop_lhwvj_125",
	dialog: "_dialog_lhwvj_135",
	container: "_container_lhwvj_150",
	main: "_main_lhwvj_161",
	column: "_column_lhwvj_171",
	input: "_input_lhwvj_184",
	output: "_output_lhwvj_185",
	dataColumn: "_dataColumn_lhwvj_189",
	header: "_header_lhwvj_193",
	settings: "_settings_lhwvj_200",
	draggable: "_draggable_lhwvj_205",
	webhookWaiting: "_webhookWaiting_lhwvj_214"
};
var NodeDetailsViewV2_default = /* @__PURE__ */ __plugin_vue_export_helper_default(NodeDetailsViewV2_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": NodeDetailsViewV2_vue_vue_type_style_index_0_lang_module_default }]]);
export { NodeDetailsViewV2_default as default };
