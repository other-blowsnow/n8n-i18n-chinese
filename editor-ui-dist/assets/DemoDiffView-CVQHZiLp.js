import { o as __toESM } from "./chunk-r2Y0G7H8.js";
import { C as computed, Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, Q as onUnmounted, T as createBlock, Z as onMounted, _ as Fragment, bt as withCtx, c as useCssModule, et as openBlock, h as withModifiers, it as renderList, j as createTextVNode, jt as isRef, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-DKnT_8zF.js";
import { F as N8nRadioButtons_default, Ft as ElDropdownMenu, Ii as N8nHeading_default, Nt as ElDropdown, Pt as ElDropdownItem, Ri as N8nText_default, ki as N8nIconButton_default, rt as Checkbox_default, zi as N8nButton_default } from "./src-D-UaKLq6.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-DjneYy0u.js";
import "./date-picker-DnwwLP1K.js";
import { C as useNodeTypesStore, gr as useToast, hr as removeWorkflowExecutionData } from "./users.store-DLa4KoOQ.js";
import "./ParameterInputList-Zlzk8lB_.js";
import { di as NodeDiffStatus } from "./constants-DnWvXsAO.js";
import "./merge-BwFl-s2u.js";
import { r as useRootStore } from "./_baseOrderBy-Ct8os4Zc.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-nPI-lV8D.js";
import "./dataTable.store-DoeDeV_Z.js";
import "./useClipboard-AG9-eCG9.js";
import "./executions.store-C1vWfEpm.js";
import "./assistant.store-D-clIjwZ.js";
import "./chatPanel.store-S6bwgdkq.js";
import "./RunData-BCkKEPou.js";
import "./NDVEmptyState-PSOriYcX.js";
import "./useEnvFeatureFlag-DS2ksn3f.js";
import "./externalSecrets.ee.store-TPsc4Qby.js";
import "./uniqBy-C12mgLLs.js";
import "./semver-YbzJCfMT.js";
import "./usePinnedData-DdqAJLEe.js";
import "./nodeIcon-CcHQxG6q.js";
import "./canvas.utils-CehoSnOc.js";
import "./nodeCreator.store--7aPJJwB.js";
import "./useCanvasOperations-CrPWj_YE.js";
import "./folders.store-Bumnlqzv.js";
import "./CommunityNodeUpdateInfo-BKYNcRuv.js";
import "./RunDataHtml-CSYDFYWy.js";
import "./Draggable-ClG5_E2-.js";
import { t as NodeIcon_default } from "./NodeIcon-eodi0mi8.js";
import "./VirtualSchema-CxP0IVLm.js";
import "./useCalloutHelpers-rdDg34Gm.js";
import "./useTelemetryContext-DVCVICL6.js";
import "./useRunWorkflow-6_dQcMtT.js";
import "./pushConnection.store-DSCA-39n.js";
import "./nodeTransforms-DXSymTCK.js";
import "./vue-json-pretty-C8ozTv7n.js";
import "./collaboration.store-XS0Cta85.js";
import "./dateFormatter-Cz7gGON7.js";
import "./useExecutionHelpers-ofC7dumT.js";
import "./useFreeAiCredits-DmanTM2d.js";
import "./NodeSettings-dFUApXi5.js";
import "./KeyboardShortcutTooltip-Co_G4rI3.js";
import "./vue-B2d2no0A.js";
import { a as NodeDiff_default, i as useProvideViewportSync, n as useWorkflowDiff, o as DiffBadge_default, r as WorkflowDiffContent_default, t as useWorkflowDiffUI } from "./useWorkflowDiffUI-BQ71bFk8.js";
import "./useCanvasMapping-BL5ecvgc.js";
import "./useKeybindings-Li4mNZE6.js";
import "./useActions-LZSIoZZx.js";
var _hoisted_1 = {
	key: 0,
	class: "ml-4xs"
};
var _hoisted_2 = { key: 0 };
var _hoisted_3 = { style: { "flex": "1" } };
var _hoisted_4 = { key: 2 };
var WorkflowDiffView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowDiffView",
	props: {
		sourceWorkflow: {},
		targetWorkflow: {},
		sourceLabel: { default: "Before" },
		targetLabel: { default: "After" },
		tidyUp: { type: Boolean }
	},
	setup(__props) {
		const props = __props;
		const { selectedDetailId, onNodeClick, syncIsEnabled } = useProvideViewportSync();
		const $style = useCssModule();
		const nodeTypesStore = useNodeTypesStore();
		const i18n = useI18n();
		const toast = useToast();
		const { source, target, nodesDiff, connectionsDiff } = useWorkflowDiff(computed(() => removeWorkflowExecutionData(props.sourceWorkflow)), computed(() => removeWorkflowExecutionData(props.targetWorkflow)));
		const { settingsDiff, nodeChanges, nextNodeChange, previousNodeChange, activeTab, tabs: tabs$1, setActiveTab, selectedNode, nodeDiffs, changesCount, isSourceWorkflowNew, modifiers, setSelectedDetailId } = useWorkflowDiffUI({
			sourceWorkflow: computed(() => props.sourceWorkflow),
			targetWorkflow: computed(() => props.targetWorkflow),
			nodesDiff,
			connectionsDiff,
			selectedDetailId
		});
		onNodeClick((nodeId) => {
			const node = nodesDiff.value.get(nodeId);
			if (!node) return;
			if (node.status !== NodeDiffStatus.Eq) selectedDetailId.value = nodeId;
		});
		onMounted(async () => {
			try {
				await nodeTypesStore.loadNodeTypesIfNotLoaded();
			} catch (error) {
				toast.showError(error, i18n.baseText("workflowDiff.error.loadNodeTypes"));
			}
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(unref($style).workflowDiffViewContainer) }, [createBaseVNode("div", { class: normalizeClass(unref($style).header) }, [createBaseVNode("div", { class: normalizeClass(unref($style).headerLeft) }, [createVNode(unref(N8nHeading_default), {
				tag: "h4",
				size: "medium"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(__props.sourceWorkflow?.name || __props.targetWorkflow?.name), 1)]),
				_: 1
			})], 2), createBaseVNode("div", { class: normalizeClass(unref($style).headerRight) }, [
				createVNode(unref(Checkbox_default), {
					modelValue: unref(syncIsEnabled),
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(syncIsEnabled) ? syncIsEnabled.value = $event : null),
					"label-size": "small",
					label: "Sync views",
					class: "mb-0 mr-s"
				}, null, 8, ["modelValue"]),
				createVNode(unref(ElDropdown), {
					trigger: "click",
					"popper-options": {
						placement: "bottom-end",
						modifiers: unref(modifiers)
					},
					"popper-class": unref($style).popper,
					onVisibleChange: unref(setActiveTab)
				}, {
					dropdown: withCtx(() => [createVNode(unref(ElDropdownMenu), { "hide-on-click": false }, {
						default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(unref($style).dropdownContent) }, [createVNode(unref(N8nRadioButtons_default), {
							modelValue: unref(activeTab),
							"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => isRef(activeTab) ? activeTab.value = $event : null),
							options: unref(tabs$1),
							class: normalizeClass([unref($style).tabs, "mb-xs"])
						}, {
							option: withCtx(({ label, data: optionData }) => [createTextVNode(toDisplayString(label) + " ", 1), optionData?.count ? (openBlock(), createElementBlock("span", _hoisted_1, " (" + toDisplayString(optionData.count) + ") ", 1)) : createCommentVNode("", true)]),
							_: 1
						}, 8, [
							"modelValue",
							"options",
							"class"
						]), createBaseVNode("div", null, [
							unref(activeTab) === "nodes" ? (openBlock(), createElementBlock("ul", _hoisted_2, [unref(nodeChanges).length > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(unref(nodeChanges), (change) => {
								return openBlock(), createBlock(unref(ElDropdownItem), {
									key: change.node.id,
									class: normalizeClass({
										[unref($style).clickableChange]: true,
										[unref($style).clickableChangeActive]: unref(selectedDetailId) === change.node.id
									}),
									onClick: withModifiers(($event) => unref(setSelectedDetailId)(change.node.id), ["prevent"])
								}, {
									default: withCtx(() => [
										createVNode(DiffBadge_default, { type: change.status }, null, 8, ["type"]),
										createVNode(NodeIcon_default, {
											"node-type": change.type,
											size: 16,
											class: "ml-2xs mr-4xs"
										}, null, 8, ["node-type"]),
										createBaseVNode("span", { class: normalizeClass(unref($style).nodeName) }, toDisplayString(change.node.name), 3)
									]),
									_: 2
								}, 1032, ["class", "onClick"]);
							}), 128)) : (openBlock(), createElementBlock("li", {
								key: 1,
								class: normalizeClass(unref($style).emptyState)
							}, [createVNode(unref(N8nText_default), {
								color: "text-base",
								size: "small"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowDiff.noChanges")), 1)]),
								_: 1
							})], 2))])) : createCommentVNode("", true),
							unref(activeTab) === "connectors" ? (openBlock(), createElementBlock("ul", {
								key: 1,
								class: normalizeClass(unref($style).changes)
							}, [unref(connectionsDiff).size > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(unref(connectionsDiff), (change) => {
								return openBlock(), createElementBlock("li", { key: change[0] }, [createBaseVNode("div", null, [createVNode(DiffBadge_default, { type: change[1].status }, null, 8, ["type"])]), createBaseVNode("div", _hoisted_3, [createBaseVNode("ul", { class: normalizeClass(unref($style).changesNested) }, [
									createVNode(unref(ElDropdownItem), {
										class: normalizeClass({
											[unref($style).clickableChange]: true,
											[unref($style).clickableChangeActive]: unref(selectedDetailId) === change[1].connection.source?.id
										}),
										onClick: withModifiers(($event) => unref(setSelectedDetailId)(change[1].connection.source?.id), ["prevent"])
									}, {
										default: withCtx(() => [createVNode(NodeIcon_default, {
											"node-type": change[1].connection.sourceType,
											size: 16,
											class: "ml-2xs mr-4xs"
										}, null, 8, ["node-type"]), createBaseVNode("span", { class: normalizeClass(unref($style).nodeName) }, toDisplayString(change[1].connection.source?.name), 3)]),
										_: 2
									}, 1032, ["class", "onClick"]),
									createBaseVNode("div", { class: normalizeClass(unref($style).separator) }, null, 2),
									createVNode(unref(ElDropdownItem), {
										class: normalizeClass({
											[unref($style).clickableChange]: true,
											[unref($style).clickableChangeActive]: unref(selectedDetailId) === change[1].connection.target?.id
										}),
										onClick: withModifiers(($event) => unref(setSelectedDetailId)(change[1].connection.target?.id), ["prevent"])
									}, {
										default: withCtx(() => [createVNode(NodeIcon_default, {
											"node-type": change[1].connection.targetType,
											size: 16,
											class: "ml-2xs mr-4xs"
										}, null, 8, ["node-type"]), createBaseVNode("span", { class: normalizeClass(unref($style).nodeName) }, toDisplayString(change[1].connection.target?.name), 3)]),
										_: 2
									}, 1032, ["class", "onClick"])
								], 2)])]);
							}), 128)) : (openBlock(), createElementBlock("li", {
								key: 1,
								class: normalizeClass(unref($style).emptyState)
							}, [createVNode(unref(N8nText_default), {
								color: "text-base",
								size: "small"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowDiff.noChanges")), 1)]),
								_: 1
							})], 2))], 2)) : createCommentVNode("", true),
							unref(activeTab) === "settings" ? (openBlock(), createElementBlock("ul", _hoisted_4, [unref(settingsDiff).length > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(unref(settingsDiff), (setting) => {
								return openBlock(), createElementBlock("li", { key: setting.name }, [createVNode(unref(N8nText_default), {
									color: "text-dark",
									size: "medium",
									tag: "div",
									bold: ""
								}, {
									default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(`workflowSettings.${setting.name}`)), 1)]),
									_: 2
								}, 1024), createVNode(NodeDiff_default, {
									"old-string": setting.before,
									"new-string": setting.after,
									class: normalizeClass(unref($style).noNumberDiff)
								}, null, 8, [
									"old-string",
									"new-string",
									"class"
								])]);
							}), 128)) : (openBlock(), createElementBlock("li", {
								key: 1,
								class: normalizeClass(unref($style).emptyState)
							}, [createVNode(unref(N8nText_default), {
								color: "text-base",
								size: "small"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowDiff.noChanges")), 1)]),
								_: 1
							})], 2))])) : createCommentVNode("", true)
						])], 2)]),
						_: 1
					})]),
					default: withCtx(() => [createVNode(unref(N8nButton_default), {
						type: "secondary",
						style: { "--button--radius": "4px 0 0 4px" }
					}, {
						default: withCtx(() => [unref(changesCount) ? (openBlock(), createElementBlock("div", {
							key: 0,
							class: normalizeClass(unref($style).circleBadge)
						}, toDisplayString(unref(changesCount)), 3)) : createCommentVNode("", true), createTextVNode(" " + toDisplayString(unref(i18n).baseText("workflowDiff.changes")), 1)]),
						_: 1
					})]),
					_: 1
				}, 8, [
					"popper-options",
					"popper-class",
					"onVisibleChange"
				]),
				createVNode(unref(N8nIconButton_default), {
					icon: "chevron-left",
					type: "secondary",
					class: normalizeClass(unref($style).navigationButton),
					style: {
						"--button--radius": "0",
						"margin": "0 -1px"
					},
					onClick: unref(previousNodeChange)
				}, null, 8, ["class", "onClick"]),
				createVNode(unref(N8nIconButton_default), {
					icon: "chevron-right",
					type: "secondary",
					class: normalizeClass(unref($style).navigationButton),
					style: { "--button--radius": "0 4px 4px 0" },
					onClick: unref(nextNodeChange)
				}, null, 8, ["class", "onClick"])
			], 2)], 2), createVNode(WorkflowDiffContent_default, {
				"source-nodes": unref(source).nodes,
				"source-connections": unref(source).connections,
				"target-nodes": unref(target).nodes,
				"target-connections": unref(target).connections,
				"source-label": __props.sourceLabel,
				"target-label": __props.targetLabel,
				"source-exists": !!__props.sourceWorkflow,
				"target-exists": !!__props.targetWorkflow,
				"selected-node": unref(selectedNode),
				"node-diffs": unref(nodeDiffs),
				"is-source-workflow-new": unref(isSourceWorkflowNew),
				"apply-layout": __props.tidyUp,
				"nodes-diff": unref(nodesDiff),
				"connections-diff": unref(connectionsDiff),
				onCloseAside: _cache[2] || (_cache[2] = ($event) => selectedDetailId.value = void 0)
			}, null, 8, [
				"source-nodes",
				"source-connections",
				"target-nodes",
				"target-connections",
				"source-label",
				"target-label",
				"source-exists",
				"target-exists",
				"selected-node",
				"node-diffs",
				"is-source-workflow-new",
				"apply-layout",
				"nodes-diff",
				"connections-diff"
			])], 2);
		};
	}
});
var WorkflowDiffView_vue_vue_type_style_index_0_lang_module_default = {
	workflowDiffViewContainer: "_workflowDiffViewContainer_hfu81_125",
	tabs: "_tabs_hfu81_131",
	popper: "_popper_hfu81_142",
	changes: "_changes_hfu81_149",
	clickableChange: "_clickableChange_hfu81_158",
	changesNested: "_changesNested_hfu81_162",
	clickableChangeActive: "_clickableChangeActive_hfu81_183",
	nodeName: "_nodeName_hfu81_187",
	separator: "_separator_hfu81_195",
	circleBadge: "_circleBadge_hfu81_204",
	dropdownContent: "_dropdownContent_hfu81_218",
	noNumberDiff: "_noNumberDiff_hfu81_230",
	header: "_header_hfu81_239",
	navigationButton: "_navigationButton_hfu81_246",
	headerLeft: "_headerLeft_hfu81_251",
	headerRight: "_headerRight_hfu81_252",
	emptyState: "_emptyState_hfu81_257"
};
var WorkflowDiffView_default = /* @__PURE__ */ __plugin_vue_export_helper_default(WorkflowDiffView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowDiffView_vue_vue_type_style_index_0_lang_module_default }]]);
var DemoDiffView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "DemoDiffView",
	setup(__props) {
		const rootStore = useRootStore();
		const i18n = useI18n();
		const sourceWorkflow = ref(void 0);
		const targetWorkflow = ref(void 0);
		const tidyUpEnabled = ref(false);
		function isValidWorkflow(obj) {
			if (obj === void 0 || obj === null) return true;
			return typeof obj === "object" && "nodes" in obj && "connections" in obj;
		}
		function emitPostMessageReady() {
			if (window.parent) window.parent.postMessage(JSON.stringify({
				command: "n8nReady",
				version: rootStore.versionCli
			}), "*");
		}
		async function onPostMessageReceived(messageEvent) {
			if (!messageEvent || typeof messageEvent.data !== "string" || !messageEvent.data?.includes?.("\"command\"")) return;
			try {
				const json = JSON.parse(messageEvent.data);
				if (json && json.command === "openDiff") {
					if (!isValidWorkflow(json.oldWorkflow) || !isValidWorkflow(json.newWorkflow)) return;
					sourceWorkflow.value = json.oldWorkflow ?? void 0;
					targetWorkflow.value = json.newWorkflow ?? void 0;
					tidyUpEnabled.value = json.tidyUp === true;
				}
			} catch (e) {}
		}
		onMounted(() => {
			window.addEventListener("message", onPostMessageReceived);
			emitPostMessageReady();
		});
		onUnmounted(() => {
			window.removeEventListener("message", onPostMessageReceived);
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.demoDiffView) }, [sourceWorkflow.value || targetWorkflow.value ? (openBlock(), createBlock(WorkflowDiffView_default, {
				key: 0,
				"source-workflow": sourceWorkflow.value,
				"target-workflow": targetWorkflow.value,
				"source-label": unref(i18n).baseText("workflowDiff.label.before"),
				"target-label": unref(i18n).baseText("workflowDiff.label.after"),
				"tidy-up": tidyUpEnabled.value
			}, null, 8, [
				"source-workflow",
				"target-workflow",
				"source-label",
				"target-label",
				"tidy-up"
			])) : (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.waitingState)
			}, [createBaseVNode("p", null, toDisplayString(unref(i18n).baseText("workflowDiff.waitingForData")), 1)], 2))], 2);
		};
	}
});
var DemoDiffView_vue_vue_type_style_index_0_lang_module_default = {
	demoDiffView: "_demoDiffView_t8kr6_125",
	waitingState: "_waitingState_t8kr6_132"
};
var DemoDiffView_default = /* @__PURE__ */ __plugin_vue_export_helper_default(DemoDiffView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": DemoDiffView_vue_vue_type_style_index_0_lang_module_default }]]);
export { DemoDiffView_default as default };
