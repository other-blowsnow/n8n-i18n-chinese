import { o as __toESM } from "./chunk-r2Y0G7H8.js";
import { C as computed, Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, J as onBeforeUnmount, M as createVNode, P as defineComponent, T as createBlock, Z as onMounted, _ as Fragment, _t as watch, bt as withCtx, et as openBlock, h as withModifiers, it as renderList, j as createTextVNode, k as createSlots, n as Transition, p as vShow, st as resolveDirective, vn as normalizeClass, w as createBaseVNode, xt as withDirectives, zt as shallowRef } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { bt as I18nT, h as computedAsync, yt as useI18n } from "./_MapCache-8-eqnC2S.js";
import { At as N8nLink_default, Bi as N8nButton_default, Hi as N8nIcon_default, Ht as N8nTooltip_default, I as N8nRadioButtons_default, L as N8nPulse_default, Li as N8nHeading_default, Rt as useRouter, Vi as N8nSpinner_default, X as N8nInfoAccordion_default, Y as N8nInfoTip_default, Yt as createEventBus, zi as N8nText_default } from "./src-Cq27d_Gp.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import { C as useNodeTypesStore, It as useNDVStore, Kr as isTriggerPanelObject, Lt as injectWorkflowState, Nt as useTelemetry, S as waitingNodeTooltip, Tt as useWorkflowHelpers, ei as CanvasNodeDirtiness, f as parseAiContent, ji as getTriggerNodeServiceName, r as useUIStore, s as useWorkflowsStore, u as formatTokenUsageCount, wr as require_FileSaver_min } from "./users.store-qBZsmf9-.js";
import { $a as NodeConnectionTypes, Ns as WORKFLOW_SETTINGS_MODAL_KEY, Ut as CHAT_TRIGGER_NODE_TYPE, Xo as VIEWS, ac as MAX_DISPLAY_DATA_SIZE_LOGS_VIEW, mn as FORM_TRIGGER_NODE_TYPE, xr as WEBHOOK_NODE_TYPE } from "./constants-Cyrg9Nbl.js";
import { j as storeToRefs } from "./_baseOrderBy-3Uh8XZv3.js";
import { t as CopyInput_default } from "./CopyInput-BKp9uJIK.js";
import { i as NodeErrorView_default, r as ViewSubExecution_default, t as RunData_default } from "./RunData-DSfa3F2H.js";
import { t as NDVEmptyState_default } from "./NDVEmptyState-C41gb8CX.js";
import { n as useNodeType, t as usePinnedData } from "./usePinnedData-B4FHq9FM.js";
import { u as require_capitalize } from "./nodeCreator.store-D-pWr7VG.js";
import { t as NodeIcon_default } from "./NodeIcon-HdSkOCP-.js";
import { n as NodeExecuteButton_default } from "./VirtualSchema-CV3uHShM.js";
import { r as useNodeDirtiness } from "./useRunWorkflow-BfL7BCzH.js";
import { n as convertToDisplayDateComponents } from "./dateFormatter-C2jhIUgb.js";
import { c as findLogEntryById, d as getConsumedTokens, n as useLogsExecutionData, o as ConsumedTokensDetails_default, r as LogsOverviewRows_default, t as useLogsTreeExpand } from "./useLogsTreeExpand-Br8RXcPm.js";
import { t as useExecutionData } from "./useExecutionData-BADKLPu0.js";
import { n as getReferencedData, t as RunDataParsedAiContent_default } from "./RunDataParsedAiContent-DF-YtYyw.js";
var _hoisted_1$3 = [
	"data-node-name",
	"data-node-placement",
	"onClick"
];
var FloatingNodePosition = /* @__PURE__ */ function(FloatingNodePosition$1) {
	FloatingNodePosition$1["top"] = "outputSub";
	FloatingNodePosition$1["right"] = "outputMain";
	FloatingNodePosition$1["left"] = "inputMain";
	return FloatingNodePosition$1;
}(FloatingNodePosition || {});
var NDVFloatingNodes_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "NDVFloatingNodes",
	props: { rootNode: {} },
	emits: ["switchSelectedNode"],
	setup(__props, { expose: __expose, emit: __emit }) {
		const props = __props;
		const workflowsStore = useWorkflowsStore();
		const nodeTypesStore = useNodeTypesStore();
		const emit = __emit;
		const isNDVV2 = computed(() => true);
		function moveNodeDirection(direction) {
			const matchedDirectionNode = connectedNodes.value[direction][0];
			if (matchedDirectionNode) emit("switchSelectedNode", matchedDirectionNode.node.name);
		}
		function onKeyDown(e) {
			if (e.shiftKey && e.altKey && (e.ctrlKey || e.metaKey)) {
				const matchingDirection = {
					ArrowUp: FloatingNodePosition.top,
					ArrowRight: FloatingNodePosition.right,
					ArrowLeft: FloatingNodePosition.left
				}[e.key] || null;
				if (matchingDirection) moveNodeDirection(matchingDirection);
			}
		}
		function getINodesFromNames(names) {
			return names.map((name) => {
				const node = workflowsStore.getNodeByName(name);
				if (node) {
					const nodeType = nodeTypesStore.getNodeType(node.type);
					if (nodeType) return {
						node,
						nodeType
					};
				}
				return null;
			}).filter((n) => n !== null);
		}
		const connectedNodes = computed(() => {
			const workflowObject = workflowsStore.workflowObject;
			const rootName = props.rootNode.name;
			return {
				[FloatingNodePosition.top]: getINodesFromNames(workflowObject.getChildNodes(rootName, "ALL_NON_MAIN")),
				[FloatingNodePosition.right]: getINodesFromNames(workflowObject.getChildNodes(rootName, NodeConnectionTypes.Main, 1)).reverse(),
				[FloatingNodePosition.left]: getINodesFromNames(workflowObject.getParentNodes(rootName, NodeConnectionTypes.Main, 1)).reverse()
			};
		});
		const connectionGroups = [
			FloatingNodePosition.top,
			FloatingNodePosition.right,
			FloatingNodePosition.left
		];
		const tooltipPositionMapper = {
			[FloatingNodePosition.top]: "bottom",
			[FloatingNodePosition.right]: "left",
			[FloatingNodePosition.left]: "right"
		};
		onMounted(() => {
			document.addEventListener("keydown", onKeyDown, true);
		});
		onBeforeUnmount(() => {
			document.removeEventListener("keydown", onKeyDown, true);
		});
		__expose({ moveNodeDirection });
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("aside", {
				class: normalizeClass([_ctx.$style.floatingNodes, { [_ctx.$style.v2]: isNDVV2.value }]),
				"data-test-id": "floating-nodes"
			}, [(openBlock(), createElementBlock(Fragment, null, renderList(connectionGroups, (connectionGroup) => {
				return createBaseVNode("ul", {
					key: connectionGroup,
					class: normalizeClass([_ctx.$style.nodesList, _ctx.$style[connectionGroup]])
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(connectedNodes.value[connectionGroup], ({ node, nodeType }) => {
					return openBlock(), createElementBlock(Fragment, null, [node && nodeType ? (openBlock(), createBlock(unref(N8nTooltip_default), {
						key: node.name,
						placement: tooltipPositionMapper[connectionGroup],
						teleported: false,
						offset: isNDVV2.value ? 16 : 60
					}, {
						content: withCtx(() => [createTextVNode(toDisplayString(node.name), 1)]),
						default: withCtx(() => [createBaseVNode("li", {
							class: normalizeClass(_ctx.$style.connectedNode),
							"data-test-id": "floating-node",
							"data-node-name": node.name,
							"data-node-placement": connectionGroup,
							onClick: ($event) => emit("switchSelectedNode", node.name)
						}, [createVNode(NodeIcon_default, {
							"node-type": nodeType,
							"node-name": node.name,
							"tooltip-position": tooltipPositionMapper[connectionGroup],
							size: isNDVV2.value ? 24 : 35,
							circle: ""
						}, null, 8, [
							"node-type",
							"node-name",
							"tooltip-position",
							"size"
						])], 10, _hoisted_1$3)]),
						_: 2
					}, 1032, ["placement", "offset"])) : createCommentVNode("", true)], 64);
				}), 256))], 2);
			}), 64))], 2);
		};
	}
});
var NDVFloatingNodes_vue_vue_type_style_index_0_lang_module_default = {
	floatingNodes: "_floatingNodes_10z2d_125",
	nodesList: "_nodesList_10z2d_135",
	inputSub: "_inputSub_10z2d_149",
	outputSub: "_outputSub_10z2d_149",
	outputMain: "_outputMain_10z2d_162",
	inputMain: "_inputMain_10z2d_162",
	connectedNode: "_connectedNode_10z2d_175",
	v2: "_v2_10z2d_216"
};
var NDVFloatingNodes_default = /* @__PURE__ */ __plugin_vue_export_helper_default(NDVFloatingNodes_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": NDVFloatingNodes_vue_vue_type_style_index_0_lang_module_default }]]);
var RunInfo_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
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
			if (!runTaskData.value) return null;
			const { date, time } = convertToDisplayDateComponents(runTaskData.value.startTime);
			return {
				executionTime: runTaskData.value.executionTime,
				startTime: `${date} at ${time}`
			};
		});
		return (_ctx, _cache) => {
			const _directive_n8n_html = resolveDirective("n8n-html");
			return __props.hasStaleData ? (openBlock(), createBlock(unref(N8nInfoTip_default), {
				key: 0,
				theme: "warning-light",
				type: "tooltip",
				"tooltip-placement": "right",
				"data-test-id": "node-run-info-stale"
			}, {
				default: withCtx(() => [withDirectives(createBaseVNode("span", null, null, 512), [[_directive_n8n_html, unref(i18n).baseText(__props.hasPinData ? "ndv.output.staleDataWarning.pinData" : "ndv.output.staleDataWarning.regular")]])]),
				_: 1
			})) : runMetadata.value ? (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.tooltipRow)
			}, [__props.taskData?.executionStatus !== "canceled" ? (openBlock(), createBlock(unref(N8nInfoTip_default), {
				key: 0,
				type: "note",
				theme: theme.value,
				"data-test-id": `node-run-status-${theme.value}`,
				size: "large"
			}, null, 8, ["theme", "data-test-id"])) : createCommentVNode("", true), createVNode(unref(N8nInfoTip_default), {
				type: "tooltip",
				theme: "info",
				"data-test-id": `node-run-info`,
				"tooltip-placement": "right"
			}, {
				default: withCtx(() => [createBaseVNode("div", null, [
					createVNode(unref(N8nText_default), {
						bold: true,
						size: "small"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(runTaskData.value?.error ? unref(i18n).baseText("runData.executionStatus.failed") : runTaskData.value?.executionStatus === "canceled" ? unref(i18n).baseText("runData.executionStatus.canceled") : unref(i18n).baseText("runData.executionStatus.success")), 1)]),
						_: 1
					}),
					_cache[0] || (_cache[0] = createBaseVNode("br", null, null, -1)),
					createVNode(unref(N8nText_default), {
						bold: true,
						size: "small"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("runData.startTime") + ":"), 1)]),
						_: 1
					}),
					createTextVNode(" " + toDisplayString(runMetadata.value.startTime), 1),
					_cache[1] || (_cache[1] = createBaseVNode("br", null, null, -1)),
					createVNode(unref(N8nText_default), {
						bold: true,
						size: "small"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("runData.executionTime") + ":"), 1)]),
						_: 1
					}),
					createTextVNode(" " + toDisplayString(runMetadata.value.executionTime) + " " + toDisplayString(unref(i18n).baseText("runData.ms")), 1)
				])]),
				_: 1
			})], 2)) : createCommentVNode("", true);
		};
	}
});
var RunInfo_vue_vue_type_style_index_0_lang_module_default = { tooltipRow: "_tooltipRow_pdesz_125" };
var RunInfo_default = /* @__PURE__ */ __plugin_vue_export_helper_default(RunInfo_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": RunInfo_vue_vue_type_style_index_0_lang_module_default }]]);
var import_capitalize = /* @__PURE__ */ __toESM(require_capitalize(), 1);
var import_FileSaver_min = require_FileSaver_min();
var AiRunContentBlock_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AiRunContentBlock",
	props: {
		runData: {},
		error: {}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const isExpanded = ref(getInitialExpandedState());
		const renderType = ref("rendered");
		const dataSize = ref(0);
		const showData = ref(false);
		const dataSizeInMB = computed(() => (dataSize.value / (1024 * 1024)).toFixed(1));
		const parsedRun = computed(() => parseAiContent(props.runData.data ?? [], props.runData.type));
		const contentParsed = computed(() => parsedRun.value.some((item) => item.parsedContent?.parsed === true));
		function getInitialExpandedState() {
			return !{
				input: [NodeConnectionTypes.AiDocument, NodeConnectionTypes.AiTextSplitter],
				output: [
					NodeConnectionTypes.AiDocument,
					NodeConnectionTypes.AiEmbedding,
					NodeConnectionTypes.AiTextSplitter,
					NodeConnectionTypes.AiVectorStore
				]
			}[props.runData.inOut].includes(props.runData.type);
		}
		function onBlockHeaderClick() {
			isExpanded.value = !isExpanded.value;
		}
		function onRenderTypeChange(value) {
			renderType.value = value;
		}
		function updateShowData() {
			showData.value = dataSize.value < MAX_DISPLAY_DATA_SIZE_LOGS_VIEW;
		}
		function refreshDataSize() {
			showData.value = false;
			dataSize.value = new Blob([JSON.stringify(props.runData.data)]).size;
			updateShowData();
		}
		function onShowDataAnyway() {
			showData.value = true;
		}
		function downloadJsonData() {
			const fileName = props.runData.inOut === "input" ? "input_data" : "output_data";
			(0, import_FileSaver_min.saveAs)(new Blob([JSON.stringify(props.runData.data, null, 2)], { type: "application/json" }), `${fileName}.json`);
		}
		onMounted(() => {
			refreshDataSize();
		});
		watch(() => props.runData.data, () => {
			refreshDataSize();
		});
		return (_ctx, _cache) => {
			const _directive_n8n_html = resolveDirective("n8n-html");
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.block) }, [createBaseVNode("header", {
				class: normalizeClass(_ctx.$style.blockHeader),
				onClick: onBlockHeaderClick
			}, [
				createBaseVNode("button", { class: normalizeClass(_ctx.$style.blockToggle) }, [createVNode(unref(N8nIcon_default), {
					icon: isExpanded.value ? "chevron-down" : "chevron-right",
					size: "large"
				}, null, 8, ["icon"])], 2),
				createBaseVNode("p", { class: normalizeClass(_ctx.$style.blockTitle) }, toDisplayString(unref(import_capitalize.default)(__props.runData.inOut)), 3),
				contentParsed.value && !__props.error && isExpanded.value ? (openBlock(), createBlock(unref(N8nRadioButtons_default), {
					key: 0,
					size: "small",
					"model-value": renderType.value,
					class: normalizeClass(_ctx.$style.rawSwitch),
					options: [{
						label: "Rendered",
						value: "rendered"
					}, {
						label: "JSON",
						value: "json"
					}],
					"onUpdate:modelValue": onRenderTypeChange
				}, null, 8, ["model-value", "class"])) : createCommentVNode("", true)
			], 2), createBaseVNode("main", { class: normalizeClass({
				[_ctx.$style.blockContent]: true,
				[_ctx.$style.blockContentExpanded]: isExpanded.value
			}) }, [__props.error ? (openBlock(), createBlock(NodeErrorView_default, {
				key: 0,
				error: __props.error,
				class: normalizeClass(_ctx.$style.error),
				"show-details": ""
			}, null, 8, ["error", "class"])) : showData.value ? (openBlock(), createBlock(RunDataParsedAiContent_default, {
				key: 1,
				data: __props.runData.data,
				type: __props.runData.type,
				content: parsedRun.value,
				"render-type": renderType.value
			}, null, 8, [
				"data",
				"type",
				"content",
				"render-type"
			])) : (openBlock(), createElementBlock("section", {
				key: 2,
				class: normalizeClass(_ctx.$style.warning)
			}, [createVNode(NDVEmptyState_default, {
				title: unref(i18n).baseText("ndv.tooMuchData.title", { interpolate: { size: dataSizeInMB.value } }),
				class: normalizeClass(_ctx.$style.warningState)
			}, {
				default: withCtx(() => [withDirectives(createBaseVNode("span", null, null, 512), [[_directive_n8n_html, unref(i18n).baseText("ndv.tooMuchData.message")]])]),
				_: 1
			}, 8, ["title", "class"]), createBaseVNode("div", { class: normalizeClass(_ctx.$style.warningActions) }, [createVNode(unref(N8nButton_default), {
				outline: "",
				size: "small",
				label: unref(i18n).baseText("runData.downloadBinaryData"),
				onClick: withModifiers(downloadJsonData, ["stop"])
			}, null, 8, ["label"]), createVNode(unref(N8nButton_default), {
				size: "small",
				label: unref(i18n).baseText("ndv.tooMuchData.showDataAnyway"),
				onClick: withModifiers(onShowDataAnyway, ["stop"])
			}, null, 8, ["label"])], 2)], 2))], 2)], 2);
		};
	}
});
var AiRunContentBlock_vue_vue_type_style_index_0_lang_module_default = {
	block: "_block_eo7zm_125",
	blockContent: "_blockContent_eo7zm_132",
	blockContentExpanded: "_blockContentExpanded_eo7zm_136",
	rawSwitch: "_rawSwitch_eo7zm_140",
	blockHeader: "_blockHeader_eo7zm_150",
	blockTitle: "_blockTitle_eo7zm_163",
	blockToggle: "_blockToggle_eo7zm_170",
	error: "_error_eo7zm_178",
	warning: "_warning_eo7zm_182",
	warningState: "_warningState_eo7zm_191",
	warningActions: "_warningActions_eo7zm_195"
};
var AiRunContentBlock_default = /* @__PURE__ */ __plugin_vue_export_helper_default(AiRunContentBlock_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AiRunContentBlock_vue_vue_type_style_index_0_lang_module_default }]]);
var _hoisted_1$2 = { key: 0 };
var _hoisted_2$1 = { key: 1 };
var _hoisted_3$1 = { key: 2 };
var RunDataAiContent_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "RunDataAiContent",
	props: { inputData: {} },
	setup(__props) {
		const props = __props;
		const data = computed(() => props.inputData.runData ? getReferencedData(props.inputData.runData) : void 0);
		const nodeTypesStore = useNodeTypesStore();
		const i18n = useI18n();
		const consumedTokensSum = computed(() => getConsumedTokens(outputRun.value?.data ?? []));
		function extractRunMeta(run) {
			const uiNode = props.inputData.node;
			const nodeType = nodeTypesStore.getNodeType(uiNode?.type ?? "");
			return {
				startTimeMs: run.metadata.startTime,
				executionTimeMs: run.metadata.executionTime,
				node: nodeType,
				type: run.inOut,
				connectionType: run.type,
				subExecution: run.metadata?.subExecution
			};
		}
		const outputRun = computed(() => {
			return data.value?.find((r) => r.inOut === "output");
		});
		const runMeta = computed(() => {
			if (outputRun.value === void 0) return;
			return extractRunMeta(outputRun.value);
		});
		const outputError = computed(() => props.inputData.runData?.error);
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [createBaseVNode("header", { class: normalizeClass(_ctx.$style.header) }, [runMeta.value?.node ? (openBlock(), createBlock(NodeIcon_default, {
				key: 0,
				class: normalizeClass(_ctx.$style.nodeIcon),
				"node-type": runMeta.value.node,
				size: 20
			}, null, 8, ["class", "node-type"])) : createCommentVNode("", true), createBaseVNode("div", { class: normalizeClass(_ctx.$style.headerWrap) }, [createBaseVNode("p", { class: normalizeClass(_ctx.$style.title) }, toDisplayString(__props.inputData.node.name), 3), createBaseVNode("ul", { class: normalizeClass(_ctx.$style.meta) }, [
				runMeta.value?.startTimeMs ? (openBlock(), createElementBlock("li", _hoisted_1$2, toDisplayString(runMeta.value?.executionTimeMs) + "ms", 1)) : createCommentVNode("", true),
				runMeta.value?.startTimeMs ? (openBlock(), createElementBlock("li", _hoisted_2$1, [createVNode(unref(N8nTooltip_default), null, {
					content: withCtx(() => [createTextVNode(toDisplayString(new Date(runMeta.value?.startTimeMs).toLocaleString()), 1)]),
					default: withCtx(() => [createTextVNode(" " + toDisplayString(unref(i18n).baseText("runData.aiContentBlock.startedAt", { interpolate: { startTime: new Date(runMeta.value?.startTimeMs).toLocaleTimeString() } })), 1)]),
					_: 1
				})])) : createCommentVNode("", true),
				runMeta.value ? (openBlock(), createElementBlock("li", _hoisted_3$1, [createVNode(ViewSubExecution_default, {
					"task-metadata": runMeta.value,
					"display-mode": "ai",
					inline: true
				}, null, 8, ["task-metadata"])])) : createCommentVNode("", true),
				(consumedTokensSum.value?.totalTokens ?? 0) > 0 ? (openBlock(), createElementBlock("li", {
					key: 3,
					class: normalizeClass(_ctx.$style.tokensUsage)
				}, [createTextVNode(toDisplayString(unref(i18n).baseText("runData.aiContentBlock.tokens", { interpolate: { count: unref(formatTokenUsageCount)(consumedTokensSum.value, "total") } })) + " ", 1), createVNode(unref(N8nInfoTip_default), {
					type: "tooltip",
					theme: "info-light",
					"tooltip-placement": "right"
				}, {
					default: withCtx(() => [createVNode(ConsumedTokensDetails_default, { "consumed-tokens": consumedTokensSum.value }, null, 8, ["consumed-tokens"])]),
					_: 1
				})], 2)) : createCommentVNode("", true)
			], 2)], 2)], 2), (openBlock(true), createElementBlock(Fragment, null, renderList(data.value ?? [], (run, index) => {
				return openBlock(), createElementBlock("main", {
					key: index,
					class: normalizeClass(_ctx.$style.content)
				}, [createVNode(AiRunContentBlock_default, {
					"run-data": run,
					error: run.inOut === "output" ? outputError.value : void 0
				}, null, 8, ["run-data", "error"])], 2);
			}), 128))], 2);
		};
	}
});
var RunDataAiContent_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_1ddvo_2",
	nodeIcon: "_nodeIcon_1ddvo_5",
	header: "_header_1ddvo_8",
	headerWrap: "_headerWrap_1ddvo_14",
	title: "_title_1ddvo_18",
	meta: "_meta_1ddvo_25",
	tokensUsage: "_tokensUsage_1ddvo_41"
};
var RunDataAiContent_default = /* @__PURE__ */ __plugin_vue_export_helper_default(RunDataAiContent_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": RunDataAiContent_vue_vue_type_style_index_0_lang_module_default }]]);
var RunDataAi_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "RunDataAi",
	props: {
		node: {},
		runIndex: { default: 0 }
	},
	setup(__props) {
		const i18n = useI18n();
		const { entries, execution, latestNodeNameById, loadSubExecution } = useLogsExecutionData({ filter: computed(() => ({
			rootNodeId: __props.node.id,
			rootNodeRunIndex: __props.runIndex
		})) });
		const { flatLogEntries, toggleExpanded } = useLogsTreeExpand(entries, loadSubExecution);
		const selected = shallowRef();
		function select(entry) {
			selected.value = entry?.node.id === __props.node.id ? void 0 : entry;
		}
		watch(entries, (latestEntries) => {
			if (!selected.value || findLogEntryById(selected.value.id, latestEntries) === void 0) selected.value = latestEntries[0]?.children[0];
		}, { immediate: true });
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [unref(flatLogEntries).length > 0 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createVNode(LogsOverviewRows_default, {
				class: normalizeClass(_ctx.$style.tree),
				"is-compact": "",
				"is-read-only": "",
				"flat-log-entries": unref(flatLogEntries),
				"should-show-token-count-column": false,
				"latest-node-info": unref(latestNodeNameById),
				selected: selected.value,
				"can-open-ndv": false,
				execution: unref(execution),
				onToggleExpanded: unref(toggleExpanded),
				onSelect: select
			}, null, 8, [
				"class",
				"flat-log-entries",
				"latest-node-info",
				"selected",
				"execution",
				"onToggleExpanded"
			]), createBaseVNode("div", { class: normalizeClass(_ctx.$style.runData) }, [selected.value ? (openBlock(), createBlock(RunDataAiContent_default, {
				key: 0,
				"input-data": selected.value
			}, null, 8, ["input-data"])) : (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.empty)
			}, [createVNode(unref(N8nText_default), { size: "large" }, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("ndv.output.ai.empty", { interpolate: { node: __props.node.name } })), 1)]),
				_: 1
			})], 2))], 2)], 64)) : (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.noData)
			}, toDisplayString(unref(i18n).baseText("ndv.output.ai.waiting")), 3))], 2);
		};
	}
});
var RunDataAi_vue_vue_type_style_index_0_lang_module_default = {
	noData: "_noData_ueqto_125",
	empty: "_empty_ueqto_133",
	tree: "_tree_ueqto_137",
	runData: "_runData_ueqto_144",
	container: "_container_ueqto_150"
};
var RunDataAi_default = /* @__PURE__ */ __plugin_vue_export_helper_default(RunDataAi_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": RunDataAi_vue_vue_type_style_index_0_lang_module_default }]]);
var _hoisted_1$1 = {
	key: 0,
	"data-test-id": "ndv-output-waiting"
};
var OutputPanel_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "OutputPanel",
	props: {
		workflowObject: {},
		runIndex: {},
		isReadOnly: { type: Boolean },
		linkedRuns: { type: Boolean },
		canLinkRuns: { type: Boolean },
		pushRef: {},
		blockUI: {
			type: Boolean,
			default: false
		},
		isProductionExecutionPreview: {
			type: Boolean,
			default: false
		},
		isPaneActive: {
			type: Boolean,
			default: false
		},
		displayMode: {}
	},
	emits: [
		"linkRun",
		"unlinkRun",
		"runChange",
		"activatePane",
		"tableMounted",
		"itemHover",
		"search",
		"openSettings",
		"execute",
		"displayModeChange"
	],
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
		const workflowState = injectWorkflowState();
		const telemetry = useTelemetry();
		const i18n = useI18n();
		const { activeNode } = storeToRefs(ndvStore);
		const { dirtinessByName } = useNodeDirtiness();
		const { isSubNodeType } = useNodeType({ node: activeNode });
		const pinnedData = usePinnedData(activeNode, {
			runIndex: props.runIndex,
			displayMode: props.displayMode
		});
		const outputMode = ref(OUTPUT_TYPE.REGULAR);
		const outputTypes = ref([{
			label: i18n.baseText("ndv.output.outType.regular"),
			value: OUTPUT_TYPE.REGULAR
		}, {
			label: i18n.baseText("ndv.output.outType.logs"),
			value: OUTPUT_TYPE.LOGS
		}]);
		const runDataRef = ref();
		const collapsingColumnName = ref(null);
		const node = computed(() => {
			return ndvStore.activeNode ?? void 0;
		});
		const { hasNodeRun, workflowExecution, workflowRunData } = useExecutionData({ node });
		const isTriggerNode = computed(() => {
			return !!node.value && nodeTypesStore.isTriggerNode(node.value.type);
		});
		const hasAiMetadata = computed(() => {
			if (isNodeRunning.value || !workflowRunData.value) return false;
			if (node.value) {
				const resultData = props.workflowObject.getParentNodes(node.value.name, "ALL_NON_MAIN").map(workflowsStore.getWorkflowResultDataByNodeName);
				return resultData && Array.isArray(resultData) && resultData.length > 0;
			}
			return false;
		});
		const hasError = computed(() => Boolean(workflowRunData.value && node.value && workflowRunData.value[node.value.name]?.[props.runIndex]?.error));
		const defaultOutputMode = computed(() => {
			return hasError.value && hasAiMetadata.value ? OUTPUT_TYPE.LOGS : OUTPUT_TYPE.REGULAR;
		});
		const isNodeRunning = computed(() => {
			return workflowRunning.value && !!node.value && workflowState.executingNode.isNodeExecuting(node.value.name);
		});
		const workflowRunning = computed(() => workflowsStore.isWorkflowRunning);
		const runTaskData = computed(() => {
			if (!node.value || workflowExecution.value === null) return null;
			const runData$2 = workflowRunData.value;
			if (!runData$2?.hasOwnProperty(node.value.name)) return null;
			if (runData$2[node.value.name].length <= props.runIndex) return null;
			return runData$2[node.value.name][props.runIndex];
		});
		const runsCount = computed(() => {
			if (node.value === null) return 0;
			const runData$2 = workflowRunData.value;
			if (runData$2 === null || node.value && !runData$2.hasOwnProperty(node.value.name)) return 0;
			if (node.value && runData$2[node.value.name].length) return runData$2[node.value.name].length;
			return 0;
		});
		const staleData = computed(() => {
			if (!node.value) return false;
			return dirtinessByName.value[node.value.name] === CanvasNodeDirtiness.PARAMETERS_UPDATED;
		});
		const outputPanelEditMode = computed(() => {
			return ndvStore.outputPanelEditMode;
		});
		const canPinData = computed(() => {
			return pinnedData.isValidNodeType.value && !props.isReadOnly;
		});
		const allToolsWereUnusedNotice = computed(() => {
			if (!node.value || runsCount.value === 0 || hasError.value) return void 0;
			if (pinnedData.hasData.value) return void 0;
			const toolsAvailable = props.workflowObject.getParentNodes(node.value.name, NodeConnectionTypes.AiTool, 1);
			const toolsUsedInLatestRun = toolsAvailable.filter((tool) => !!workflowRunData.value?.[tool]?.[props.runIndex]);
			if (toolsAvailable.length > 0 && toolsUsedInLatestRun.length === 0 && !workflowRunning.value) return i18n.baseText("ndv.output.noToolUsedInfo");
			else return;
		});
		const isNDVV2 = computed(() => true);
		const insertTestData = () => {
			if (!runDataRef.value) return;
			runDataRef.value.enterEditMode({ origin: "insertTestDataLink" });
			telemetry.track("User clicked ndv link", {
				workflow_id: workflowsStore.workflowId,
				push_ref: props.pushRef,
				node_type: node.value?.type,
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
				node_type: node.value?.type,
				workflow_id: workflowsStore.workflowId,
				push_ref: props.pushRef,
				pane: "output",
				type: "settings"
			});
		};
		const onRunIndexChange = (run) => {
			emit("runChange", run);
		};
		onMounted(() => {
			outputMode.value = defaultOutputMode.value;
		});
		watch(defaultOutputMode, (newValue, oldValue) => {
			if (newValue === OUTPUT_TYPE.LOGS && oldValue === OUTPUT_TYPE.REGULAR && hasNodeRun.value) outputMode.value = defaultOutputMode.value;
		});
		const activatePane = () => {
			emit("activatePane");
		};
		function handleChangeCollapsingColumn(columnName) {
			collapsingColumnName.value = columnName;
		}
		return (_ctx, _cache) => {
			const _directive_n8n_html = resolveDirective("n8n-html");
			return openBlock(), createBlock(RunData_default, {
				ref_key: "runDataRef",
				ref: runDataRef,
				class: normalizeClass([_ctx.$style.runData, { [_ctx.$style.runDataV2]: isNDVV2.value }]),
				node: node.value,
				"workflow-object": __props.workflowObject,
				"run-index": __props.runIndex,
				"linked-runs": __props.linkedRuns,
				"can-link-runs": __props.canLinkRuns,
				"no-data-in-branch-message": unref(i18n).baseText("ndv.output.noOutputDataInBranch"),
				"is-executing": isNodeRunning.value,
				"executing-message": unref(i18n).baseText("ndv.output.executing"),
				"push-ref": __props.pushRef,
				"block-u-i": __props.blockUI,
				"is-production-execution-preview": __props.isProductionExecutionPreview,
				"search-shortcut": __props.isPaneActive ? "/" : void 0,
				"hide-pagination": outputMode.value === "logs",
				"pane-type": "output",
				"data-output-type": outputMode.value,
				"callout-message": allToolsWereUnusedNotice.value,
				"display-mode": __props.displayMode,
				"disable-ai-content": true,
				"collapsing-table-column-name": collapsingColumnName.value,
				"data-test-id": "ndv-output-panel",
				onActivatePane: activatePane,
				onRunChange: onRunIndexChange,
				onLinkRun,
				onUnlinkRun,
				onTableMounted: _cache[3] || (_cache[3] = ($event) => emit("tableMounted", $event)),
				onItemHover: _cache[4] || (_cache[4] = ($event) => emit("itemHover", $event)),
				onSearch: _cache[5] || (_cache[5] = ($event) => emit("search", $event)),
				onDisplayModeChange: _cache[6] || (_cache[6] = ($event) => emit("displayModeChange", $event)),
				onCollapsingTableColumnChanged: handleChangeCollapsingColumn
			}, createSlots({
				header: withCtx(() => [createBaseVNode("div", { class: normalizeClass([_ctx.$style.titleSection, { [_ctx.$style.titleSectionV2]: isNDVV2.value }]) }, [hasAiMetadata.value ? (openBlock(), createBlock(unref(N8nRadioButtons_default), {
					key: 0,
					modelValue: outputMode.value,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => outputMode.value = $event),
					"data-test-id": "ai-output-mode-select",
					options: outputTypes.value
				}, null, 8, ["modelValue", "options"])) : (openBlock(), createElementBlock("span", {
					key: 1,
					class: normalizeClass([_ctx.$style.title, { [_ctx.$style.titleV2]: isNDVV2.value }])
				}, toDisplayString(unref(i18n).baseText(outputPanelEditMode.value.enabled ? "ndv.output.edit" : "ndv.output")), 3)), unref(hasNodeRun) && !unref(pinnedData).hasData.value && (runsCount.value === 1 || runsCount.value > 0 && staleData.value) ? withDirectives((openBlock(), createBlock(RunInfo_default, {
					key: 2,
					"task-data": runTaskData.value,
					"has-stale-data": staleData.value,
					"has-pin-data": unref(pinnedData).hasData.value
				}, null, 8, [
					"task-data",
					"has-stale-data",
					"has-pin-data"
				])), [[vShow, !outputPanelEditMode.value.enabled]]) : createCommentVNode("", true)], 2)]),
				"node-not-run": withCtx(() => [isNDVV2.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [__props.isReadOnly ? (openBlock(), createBlock(NDVEmptyState_default, {
					key: 0,
					title: unref(i18n).baseText(isTriggerNode.value ? "ndv.output.noOutputData.trigger.title" : "ndv.output.noOutputData.v2.title")
				}, null, 8, ["title"])) : (openBlock(), createBlock(NDVEmptyState_default, {
					key: 1,
					title: unref(i18n).baseText(isTriggerNode.value ? "ndv.output.noOutputData.trigger.title" : "ndv.output.noOutputData.v2.title")
				}, createSlots({
					default: withCtx(() => [!canPinData.value || unref(isSubNodeType) ? (openBlock(), createBlock(unref(I18nT), {
						key: 0,
						tag: "span",
						keypath: unref(isSubNodeType) ? "ndv.output.runNodeHintSubNode" : "ndv.output.noOutputData.v2.description",
						scope: "global"
					}, {
						link: withCtx(() => [createVNode(NodeExecuteButton_default, {
							"hide-icon": "",
							transparent: "",
							type: "secondary",
							"node-name": unref(activeNode)?.name ?? "",
							label: unref(i18n).baseText(isTriggerNode.value ? "ndv.output.noOutputData.trigger.action" : "ndv.output.noOutputData.v2.action"),
							"telemetry-source": "inputs",
							onExecute: _cache[1] || (_cache[1] = ($event) => emit("execute"))
						}, null, 8, ["node-name", "label"]), _cache[8] || (_cache[8] = createBaseVNode("br", null, null, -1))]),
						_: 1
					}, 8, ["keypath"])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
						createVNode(NodeExecuteButton_default, {
							"hide-icon": "",
							transparent: "",
							type: "secondary",
							"node-name": unref(activeNode)?.name ?? "",
							label: unref(i18n).baseText(isTriggerNode.value ? "ndv.output.noOutputData.trigger.action" : "ndv.output.noOutputData.v2.action"),
							"telemetry-source": "inputs",
							onExecute: _cache[2] || (_cache[2] = ($event) => emit("execute"))
						}, null, 8, ["node-name", "label"]),
						_cache[9] || (_cache[9] = createBaseVNode("br", null, null, -1)),
						createTextVNode(" " + toDisplayString(unref(i18n).baseText("generic.or")) + " ", 1),
						createVNode(unref(N8nText_default), {
							tag: "a",
							size: "medium",
							color: "primary",
							onClick: insertTestData
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("ndv.output.insertTestData")), 1)]),
							_: 1
						})
					], 64))]),
					_: 2
				}, [isTriggerNode.value ? {
					name: "icon",
					fn: withCtx(() => [_cache[7] || (_cache[7] = createBaseVNode("svg", {
						width: "16",
						viewBox: "0 0 14 18",
						fill: "none",
						xmlns: "http://www.w3.org/2000/svg"
					}, [createBaseVNode("path", {
						d: "M10.9062 2.40625L8.5 8.03125H12C12.4062 8.03125 12.7812 8.28125 12.9375 8.65625C13.0625 9.0625 12.9688 9.5 12.6562 9.78125L4.65625 16.7812C4.28125 17.0625 3.78125 17.0938 3.40625 16.8125C3.03125 16.5625 2.875 16.0625 3.0625 15.625L5.46875 10H2C1.5625 10 1.1875 9.75 1.0625 9.375C0.90625 8.96875 1 8.53125 1.3125 8.25L9.3125 1.25C9.6875 0.96875 10.1875 0.9375 10.5625 1.21875C10.9375 1.46875 11.0938 1.96875 10.9062 2.40625Z",
						fill: "currentColor"
					})], -1))]),
					key: "0"
				} : {
					name: "icon",
					fn: withCtx(() => [createVNode(unref(N8nIcon_default), {
						icon: "arrow-right-from-line",
						size: "xlarge"
					})]),
					key: "1"
				}]), 1032, ["title"]))], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [workflowRunning.value && !isTriggerNode.value ? (openBlock(), createElementBlock("div", _hoisted_1$1, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.spinner) }, [createVNode(unref(N8nSpinner_default), { type: "ring" })], 2), createVNode(unref(N8nText_default), null, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("ndv.output.waitingToRun")), 1)]),
					_: 1
				})])) : createCommentVNode("", true), !workflowRunning.value ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 1,
					"data-test-id": "ndv-output-run-node-hint"
				}, {
					default: withCtx(() => [unref(isSubNodeType) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createTextVNode(toDisplayString(unref(i18n).baseText("ndv.output.runNodeHintSubNode")), 1)], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createTextVNode(toDisplayString(unref(i18n).baseText("ndv.output.runNodeHint")) + " ", 1), canPinData.value ? (openBlock(), createElementBlock("span", {
						key: 0,
						onClick: insertTestData
					}, [
						_cache[10] || (_cache[10] = createBaseVNode("br", null, null, -1)),
						createTextVNode(" " + toDisplayString(unref(i18n).baseText("generic.or")) + " ", 1),
						createVNode(unref(N8nText_default), {
							tag: "a",
							size: "medium",
							color: "primary"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("ndv.output.insertTestData")), 1)]),
							_: 1
						})
					])) : createCommentVNode("", true)], 64))]),
					_: 1
				})) : createCommentVNode("", true)], 64))]),
				"node-waiting": withCtx(() => [createVNode(NDVEmptyState_default, {
					title: unref(i18n).baseText("ndv.output.waitNodeWaiting.title"),
					wide: ""
				}, {
					default: withCtx(() => [withDirectives(createBaseVNode("span", null, null, 512), [[_directive_n8n_html, unref(waitingNodeTooltip)(node.value, __props.workflowObject)]])]),
					_: 1
				}, 8, ["title"])]),
				"no-output-data": withCtx(() => [createVNode(NDVEmptyState_default, { title: unref(i18n).baseText("ndv.output.noOutputData.title") }, {
					default: withCtx(() => [
						createTextVNode(toDisplayString(unref(i18n).baseText("ndv.output.noOutputData.message")) + " ", 1),
						createBaseVNode("a", { onClick: openSettings }, toDisplayString(unref(i18n).baseText("ndv.output.noOutputData.message.settings")), 1),
						createTextVNode(" " + toDisplayString(unref(i18n).baseText("ndv.output.noOutputData.message.settingsOption")), 1)
					]),
					_: 1
				}, 8, ["title"])]),
				"recovered-artificial-output-data": withCtx(() => [createVNode(NDVEmptyState_default, { title: unref(i18n).baseText("executionDetails.executionFailed.recoveredNodeTitle") }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("executionDetails.executionFailed.recoveredNodeMessage")), 1)]),
					_: 1
				}, 8, ["title"])]),
				_: 2
			}, [outputMode.value === "logs" && node.value ? {
				name: "content",
				fn: withCtx(() => [createVNode(RunDataAi_default, {
					node: node.value,
					"run-index": __props.runIndex,
					"workflow-object": __props.workflowObject
				}, null, 8, [
					"node",
					"run-index",
					"workflow-object"
				])]),
				key: "0"
			} : void 0, !unref(pinnedData).hasData.value && runsCount.value > 1 ? {
				name: "run-info",
				fn: withCtx(() => [createVNode(RunInfo_default, { "task-data": runTaskData.value }, null, 8, ["task-data"])]),
				key: "1"
			} : void 0]), 1032, [
				"class",
				"node",
				"workflow-object",
				"run-index",
				"linked-runs",
				"can-link-runs",
				"no-data-in-branch-message",
				"is-executing",
				"executing-message",
				"push-ref",
				"block-u-i",
				"is-production-execution-preview",
				"search-shortcut",
				"hide-pagination",
				"data-output-type",
				"callout-message",
				"display-mode",
				"collapsing-table-column-name"
			]);
		};
	}
});
var OutputPanel_vue_vue_type_style_index_0_lang_module_default = {
	runData: "_runData_1ms3r_130",
	runDataV2: "_runDataV2_1ms3r_134",
	outputTypeSelect: "_outputTypeSelect_1ms3r_138",
	titleSection: "_titleSection_1ms3r_143",
	titleSectionV2: "_titleSectionV2_1ms3r_151",
	title: "_title_1ms3r_143",
	titleV2: "_titleV2_1ms3r_163",
	noOutputData: "_noOutputData_1ms3r_168",
	link: "_link_1ms3r_178",
	spinner: "_spinner_1ms3r_185"
};
var OutputPanel_default = /* @__PURE__ */ __plugin_vue_export_helper_default(OutputPanel_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": OutputPanel_vue_vue_type_style_index_0_lang_module_default }]]);
var _hoisted_1 = { key: "empty" };
var _hoisted_2 = {
	key: "listening",
	"data-test-id": "trigger-listening"
};
var _hoisted_3 = { key: 0 };
var _hoisted_4 = { key: 1 };
var _hoisted_5 = { key: 0 };
var _hoisted_6 = { key: "default" };
var _hoisted_7 = {
	key: 0,
	class: "mb-xl"
};
var _hoisted_8 = ["textContent"];
var TriggerPanel_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
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
		const node = computed(() => workflowsStore.getNodeByName(props.nodeName));
		const nodeType = computed(() => {
			if (node.value) return nodesTypeStore.getNodeType(node.value.type, node.value.typeVersion);
			return null;
		});
		const triggerPanel = computed(() => {
			const panel = nodeType.value?.triggerPanel;
			if (isTriggerPanelObject(panel)) return panel;
		});
		const hideContent = computed(() => {
			const hideContent$1 = triggerPanel.value?.hideContent;
			if (typeof hideContent$1 === "boolean") return hideContent$1;
			if (node.value) {
				const hideContentValue = workflowsStore.workflowObject.expression.getSimpleParameterValue(node.value, hideContent$1, "internal", {});
				if (typeof hideContentValue === "boolean") return hideContentValue;
			}
			return false;
		});
		const hasIssues = computed(() => {
			return Boolean(node.value?.issues && (node.value.issues.parameters ?? node.value.issues.credentials));
		});
		const serviceName = computed(() => {
			if (nodeType.value) return getTriggerNodeServiceName(nodeType.value);
			return "";
		});
		const displayChatButton = computed(() => {
			return Boolean(node.value && node.value.type === "@n8n/n8n-nodes-langchain.chatTrigger" && node.value.parameters.mode !== "webhook");
		});
		const isWebhookNode = computed(() => {
			return Boolean(node.value && node.value.type === "n8n-nodes-base.webhook");
		});
		const webhookHttpMethod = computedAsync(async () => {
			if (!node.value || !nodeType.value?.webhooks?.length) return;
			const httpMethod = await workflowHelpers.getWebhookExpressionValue(nodeType.value.webhooks[0], "httpMethod", false);
			if (Array.isArray(httpMethod)) return httpMethod.join(", ");
			return httpMethod;
		}, void 0);
		const webhookTestUrl = computedAsync(async () => {
			if (!node.value || !nodeType.value?.webhooks?.length) return;
			return await workflowHelpers.getWebhookUrl(nodeType.value.webhooks[0], node.value, "test");
		}, void 0);
		const isWebhookBasedNode = computed(() => {
			return Boolean(nodeType.value?.webhooks?.length);
		});
		const isPollingNode = computed(() => {
			return Boolean(nodeType.value?.polling);
		});
		const isListeningForEvents = computed(() => {
			if (!node.value || node.value.disabled || !isWebhookBasedNode.value) return false;
			if (!workflowsStore.executionWaitingForWebhook) return false;
			const executedNode = workflowsStore.executedNode;
			const isCurrentNodeExecuted = executedNode === props.nodeName;
			const isChildNodeExecuted = executedNode ? workflowsStore.workflowObject.getParentNodes(executedNode).includes(props.nodeName) : false;
			return !executedNode || isCurrentNodeExecuted || isChildNodeExecuted;
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
			return nodeType.value?.name === "n8n-nodes-base.formTrigger" ? i18n.baseText("ndv.trigger.webhookNode.formTrigger.listening") : i18n.baseText("ndv.trigger.webhookNode.listening");
		});
		const listeningHint = computed(() => {
			switch (nodeType.value?.name) {
				case CHAT_TRIGGER_NODE_TYPE: return i18n.baseText("ndv.trigger.webhookBasedNode.chatTrigger.serviceHint");
				case FORM_TRIGGER_NODE_TYPE: return i18n.baseText("ndv.trigger.webhookBasedNode.formTrigger.serviceHint");
				default: return i18n.baseText("ndv.trigger.webhookBasedNode.serviceHint", { interpolate: { service: serviceName.value } });
			}
		});
		const header$2 = computed(() => {
			if (isActivelyPolling.value) return i18n.baseText("ndv.trigger.pollingNode.fetchingEvent");
			if (triggerPanel.value?.header) return triggerPanel.value.header;
			if (isWebhookBasedNode.value) return i18n.baseText("ndv.trigger.webhookBasedNode.action", { interpolate: { name: serviceName.value } });
			return "";
		});
		const subheader = computed(() => {
			if (isActivelyPolling.value) return i18n.baseText("ndv.trigger.pollingNode.fetchingHint", { interpolate: { name: serviceName.value } });
			return "";
		});
		const executionsHelp = computed(() => {
			if (triggerPanel.value?.executionsHelp) {
				if (typeof triggerPanel.value.executionsHelp === "string") return triggerPanel.value.executionsHelp;
				if (!isWorkflowActive.value && triggerPanel.value.executionsHelp.inactive) return triggerPanel.value.executionsHelp.inactive;
				if (isWorkflowActive.value && triggerPanel.value.executionsHelp.active) return triggerPanel.value.executionsHelp.active;
			}
			if (isWebhookBasedNode.value) if (isWorkflowActive.value) return i18n.baseText("ndv.trigger.webhookBasedNode.executionsHelp.active", { interpolate: { service: serviceName.value } });
			else return i18n.baseText("ndv.trigger.webhookBasedNode.executionsHelp.inactive", { interpolate: { service: serviceName.value } });
			if (isPollingNode.value) if (isWorkflowActive.value) return i18n.baseText("ndv.trigger.pollingNode.executionsHelp.active", { interpolate: { service: serviceName.value } });
			else return i18n.baseText("ndv.trigger.pollingNode.executionsHelp.inactive", { interpolate: { service: serviceName.value } });
			return "";
		});
		const activationHint = computed(() => {
			if (isActivelyPolling.value || !triggerPanel.value) return "";
			if (triggerPanel.value.activationHint) {
				if (typeof triggerPanel.value.activationHint === "string") return triggerPanel.value.activationHint;
				if (!isWorkflowActive.value && typeof triggerPanel.value.activationHint.inactive === "string") return triggerPanel.value.activationHint.inactive;
				if (isWorkflowActive.value && typeof triggerPanel.value.activationHint.active === "string") return triggerPanel.value.activationHint.active;
			}
			if (isWebhookBasedNode.value) if (isWorkflowActive.value) return i18n.baseText("ndv.trigger.webhookBasedNode.activationHint.active", { interpolate: { service: serviceName.value } });
			else return i18n.baseText("ndv.trigger.webhookBasedNode.activationHint.inactive", { interpolate: { service: serviceName.value } });
			if (isPollingNode.value) if (isWorkflowActive.value) return i18n.baseText("ndv.trigger.pollingNode.activationHint.active", { interpolate: { service: serviceName.value } });
			else return i18n.baseText("ndv.trigger.pollingNode.activationHint.inactive", { interpolate: { service: serviceName.value } });
			return "";
		});
		const expandExecutionHelp = () => {
			if (help.value) executionsHelpEventBus.emit("expand");
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
			if (!e.target) return;
			const target = e.target;
			if (target.localName !== "a") return;
			if (target.dataset?.key) {
				e.stopPropagation();
				e.preventDefault();
				if (target.dataset.key === "activate") emit("activate");
				else if (target.dataset.key === "executions") {
					telemetry.track("User clicked ndv link", {
						workflow_id: workflowsStore.workflowId,
						push_ref: props.pushRef,
						pane: "input",
						type: "open-executions-log"
					});
					ndvStore.unsetActiveNodeName();
					router.push({ name: VIEWS.EXECUTIONS });
				} else if (target.dataset.key === "settings") uiStore.openModal(WORKFLOW_SETTINGS_MODAL_KEY);
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
			const _directive_n8n_html = resolveDirective("n8n-html");
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [createVNode(Transition, {
				name: "fade",
				mode: "out-in"
			}, {
				default: withCtx(() => [hasIssues.value || hideContent.value ? (openBlock(), createElementBlock("div", _hoisted_1)) : isListeningForEvents.value ? (openBlock(), createElementBlock("div", _hoisted_2, [createVNode(unref(N8nPulse_default), null, {
					default: withCtx(() => [createVNode(NodeIcon_default, {
						"node-type": nodeType.value,
						size: 40
					}, null, 8, ["node-type"])]),
					_: 1
				}), isWebhookNode.value ? (openBlock(), createElementBlock("div", _hoisted_3, [
					createVNode(unref(N8nText_default), {
						tag: "div",
						size: "large",
						color: "text-dark",
						class: "mb-2xs",
						bold: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("ndv.trigger.webhookNode.listening")), 1)]),
						_: 1
					}),
					createBaseVNode("div", { class: normalizeClass([_ctx.$style.shake, "mb-xs"]) }, [createVNode(unref(N8nText_default), null, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("ndv.trigger.webhookNode.requestHint", { interpolate: { type: unref(webhookHttpMethod) ?? "" } })), 1)]),
						_: 1
					})], 2),
					createVNode(CopyInput_default, {
						value: unref(webhookTestUrl),
						"toast-title": unref(i18n).baseText("ndv.trigger.copiedTestUrl"),
						class: "mb-2xl",
						size: "medium",
						collapse: true,
						"copy-button-text": unref(i18n).baseText("generic.clickToCopy"),
						onCopy: onTestLinkCopied
					}, null, 8, [
						"value",
						"toast-title",
						"copy-button-text"
					]),
					createVNode(NodeExecuteButton_default, {
						"data-test-id": "trigger-execute-button",
						"node-name": __props.nodeName,
						size: "medium",
						"telemetry-source": "inputs",
						onExecute: onNodeExecute
					}, null, 8, ["node-name"])
				])) : (openBlock(), createElementBlock("div", _hoisted_4, [
					createVNode(unref(N8nText_default), {
						tag: "div",
						size: "large",
						color: "text-dark",
						class: "mb-2xs",
						bold: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(listeningTitle.value), 1)]),
						_: 1
					}),
					createBaseVNode("div", { class: normalizeClass([_ctx.$style.shake, "mb-xs"]) }, [createVNode(unref(N8nText_default), { tag: "div" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(listeningHint.value), 1)]),
						_: 1
					})], 2),
					displayChatButton.value ? (openBlock(), createElementBlock("div", _hoisted_5, [createVNode(unref(N8nButton_default), {
						class: "mb-xl",
						onClick: _cache[0] || (_cache[0] = ($event) => openWebhookUrl())
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("ndv.trigger.chatTrigger.openChat")), 1)]),
						_: 1
					})])) : createCommentVNode("", true),
					createVNode(NodeExecuteButton_default, {
						"data-test-id": "trigger-execute-button",
						"node-name": __props.nodeName,
						size: "medium",
						"telemetry-source": "inputs",
						onExecute: onNodeExecute
					}, null, 8, ["node-name"])
				]))])) : (openBlock(), createElementBlock("div", _hoisted_6, [
					isActivelyPolling.value ? (openBlock(), createElementBlock("div", _hoisted_7, [createVNode(unref(N8nSpinner_default), { type: "ring" })])) : createCommentVNode("", true),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.action) }, [createBaseVNode("div", {
						"data-test-id": "trigger-header",
						class: normalizeClass(_ctx.$style.header)
					}, [header$2.value ? (openBlock(), createBlock(unref(N8nHeading_default), {
						key: 0,
						tag: "h1",
						bold: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(header$2.value), 1)]),
						_: 1
					})) : createCommentVNode("", true), subheader.value ? (openBlock(), createBlock(unref(N8nText_default), { key: 1 }, {
						default: withCtx(() => [createBaseVNode("span", { textContent: toDisplayString(subheader.value) }, null, 8, _hoisted_8)]),
						_: 1
					})) : createCommentVNode("", true)], 2), createVNode(NodeExecuteButton_default, {
						"data-test-id": "trigger-execute-button",
						"node-name": __props.nodeName,
						size: "medium",
						"telemetry-source": "inputs",
						onExecute: onNodeExecute
					}, null, 8, ["node-name"])], 2),
					activationHint.value ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 1,
						size: "small",
						onClick: onLinkClick
					}, {
						default: withCtx(() => [withDirectives(createBaseVNode("span", null, null, 512), [[_directive_n8n_html, activationHint.value]]), _cache[1] || (_cache[1] = createTextVNode("\xA0 ", -1))]),
						_: 1
					})) : createCommentVNode("", true),
					activationHint.value && executionsHelp.value ? (openBlock(), createBlock(unref(N8nLink_default), {
						key: 2,
						size: "small",
						onClick: expandExecutionHelp
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("ndv.trigger.moreInfo")), 1)]),
						_: 1
					})) : createCommentVNode("", true),
					executionsHelp.value ? (openBlock(), createBlock(unref(N8nInfoAccordion_default), {
						key: 3,
						ref_key: "help",
						ref: help,
						class: normalizeClass(_ctx.$style.accordion),
						title: unref(i18n).baseText("ndv.trigger.executionsHint.question"),
						description: executionsHelp.value,
						"event-bus": unref(executionsHelpEventBus),
						"onClick:body": onLinkClick
					}, null, 8, [
						"class",
						"title",
						"description",
						"event-bus"
					])) : createCommentVNode("", true)
				]))]),
				_: 1
			})], 2);
		};
	}
});
var TriggerPanel_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_ey7sz_125",
	header: "_header_ey7sz_142",
	action: "_action_ey7sz_149",
	shake: "_shake_ey7sz_153",
	accordion: "_accordion_ey7sz_174"
};
var TriggerPanel_default = /* @__PURE__ */ __plugin_vue_export_helper_default(TriggerPanel_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": TriggerPanel_vue_vue_type_style_index_0_lang_module_default }], ["__scopeId", "data-v-00944e38"]]);
export { OutputPanel_default as n, NDVFloatingNodes_default as r, TriggerPanel_default as t };
