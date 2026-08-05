import { o as __toESM } from "./chunk-CC9Q-vWm.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, _ as Fragment, bt as withCtx, c as useCssModule, it as renderSlot, j as createVNode, rt as renderList, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { x as useI18n } from "./_MapCache-BtQ700Y1.js";
import { $ as SettingsRowGroup_default, Ai as N8nText_default, Ii as N8nButton_default, Li as N8nIcon_default, Tt as N8nLink_default, jr as N8nTooltip_default, nn as N8nLoading_default, nt as SettingsPageHeader_default, rt as SettingsLayout_default, tt as SettingsRow_default, z as N8nTabs_default } from "./src-DXQiQnOc.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { c as useAsyncState } from "./dist-CmlFwYoT.js";
import "./src-32cSG5_t.js";
import { t as useRootStore } from "./useRootStore-xTXN1Ozx.js";
import "./constants-BmxNDTNh.js";
import { t as VIEWS } from "./views-4JHVC4Nc.js";
import { t as useDocumentTitle } from "./useDocumentTitle-Cbw3TclM.js";
import { t as require_orderBy } from "./orderBy-D8SwMxoC.js";
import { i as refreshReport, n as getReport, t as SeverityTag_default } from "./SeverityTag-DMczMISR.js";
//#region src/features/settings/migrationReport/components/EmptyTab.vue?vue&type=script&setup=true&lang.ts
var import_orderBy = /* @__PURE__ */ __toESM(require_orderBy(), 1);
var EmptyTab_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "EmptyTab",
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.NoIssuesContainer) }, [createVNode(unref(N8nText_default), {
				tag: "h3",
				size: "large",
				color: "text-base",
				class: "mb-2xs"
			}, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "title")]),
				_: 3
			}), createVNode(unref(N8nText_default), {
				tag: "p",
				size: "medium",
				color: "text-light",
				class: "mb-2xl"
			}, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "description")]),
				_: 3
			})], 2);
		};
	}
});
var EmptyTab_vue_vue_type_style_index_0_lang_module_default = { NoIssuesContainer: "_NoIssuesContainer_1o8ra_2" };
var EmptyTab_default = /* @__PURE__ */ _plugin_vue_export_helper_default(EmptyTab_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": EmptyTab_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/settings/migrationReport/MigrationRules.vue?vue&type=script&setup=true&lang.ts
var MigrationRules_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "MigrationRules",
	setup(__props) {
		const $style = useCssModule();
		const rootStore = useRootStore();
		const i18n = useI18n();
		useDocumentTitle().set(i18n.baseText("settings.migrationReport"));
		const currentTab = ref("workflow-issues");
		const shouldShowRefreshButton = ref(false);
		const versionQuery = void 0;
		const targetVersionMajor = null?.slice(1) ?? "2";
		const targetVersionDisplay = `${targetVersionMajor}.0.0`;
		const documentationUrl = `https://docs.n8n.io/${targetVersionMajor}-0-breaking-changes/`;
		const { state, isLoading, execute } = useAsyncState(async (refresh = false) => {
			if (refresh) {
				const response = await refreshReport(rootStore.restApiContext, versionQuery);
				if (response.report.workflowResults.length === 0 && response.report.instanceResults.length > 0) currentTab.value = "instance-issues";
				shouldShowRefreshButton.value = response.shouldCache;
				return response;
			}
			const response = await getReport(rootStore.restApiContext, versionQuery);
			shouldShowRefreshButton.value = response.shouldCache;
			return response;
		}, void 0);
		async function refreshReport$1() {
			await execute(0, true);
		}
		const tabs = computed(() => {
			return [{
				label: i18n.baseText("settings.migrationReport.tabs.workflowIssues"),
				value: "workflow-issues",
				tag: state.value?.report.workflowResults.length ? String(state.value.report.workflowResults.length) : void 0
			}, {
				label: i18n.baseText("settings.migrationReport.tabs.instanceIssues"),
				value: "instance-issues",
				tag: state.value?.report.instanceResults.length ? String(state.value.report.instanceResults.length) : void 0
			}];
		});
		const workflowTooltips = computed(() => {
			return {
				critical: i18n.baseText("settings.migrationReport.workflowTooltip.critical"),
				medium: i18n.baseText("settings.migrationReport.workflowTooltip.medium"),
				low: i18n.baseText("settings.migrationReport.workflowTooltip.low")
			};
		});
		const instanceTooltips = computed(() => {
			return {
				critical: i18n.baseText("settings.migrationReport.instanceTooltip.critical"),
				medium: i18n.baseText("settings.migrationReport.instanceTooltip.medium"),
				low: i18n.baseText("settings.migrationReport.instanceTooltip.low")
			};
		});
		const compatibleWorkflowsCount = computed(() => {
			if (!state.value) return 0;
			return state.value.totalWorkflows - state.value.report.workflowResults.reduce((acc, issue) => acc + issue.nbAffectedWorkflows, 0);
		});
		const severityOrder = {
			critical: 0,
			medium: 1,
			low: 2
		};
		const sortedWorkflowResults = computed(() => {
			if (!state.value?.report.workflowResults) return [];
			return (0, import_orderBy.default)(state.value.report.workflowResults, [(issue) => severityOrder[issue.ruleSeverity]], ["asc"]);
		});
		const sortedInstanceResults = computed(() => {
			if (!state.value?.report.instanceResults) return [];
			return (0, import_orderBy.default)(state.value.report.instanceResults, [(issue) => severityOrder[issue.ruleSeverity]], ["asc"]);
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(SettingsLayout_default), null, {
				default: withCtx(() => [createVNode(unref(SettingsPageHeader_default), {
					title: unref(i18n).baseText("settings.migrationReport"),
					description: unref(i18n).baseText("settings.migrationReport.description", { interpolate: {
						compatibleCount: String(compatibleWorkflowsCount.value),
						totalCount: String(unref(state)?.totalWorkflows ?? 0),
						version: targetVersionDisplay
					} }),
					"docs-url": documentationUrl,
					"docs-label": unref(i18n).baseText("settings.migrationReport.documentationLink"),
					"docs-leading-text": ""
				}, null, 8, [
					"title",
					"description",
					"docs-label"
				]), createBaseVNode("div", null, [createBaseVNode("div", { class: normalizeClass(unref($style).ActionBar) }, [createVNode(unref(N8nTabs_default), {
					modelValue: currentTab.value,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => currentTab.value = $event),
					options: tabs.value,
					variant: "modern"
				}, null, 8, ["modelValue", "options"]), shouldShowRefreshButton.value ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 0,
					variant: "subtle",
					label: unref(i18n).baseText("settings.migrationReport.refreshButton"),
					icon: "refresh-cw",
					loading: unref(isLoading),
					disabled: unref(isLoading),
					onClick: refreshReport$1
				}, null, 8, [
					"label",
					"loading",
					"disabled"
				])) : createCommentVNode("", true)], 2), unref(isLoading) ? (openBlock(), createBlock(unref(SettingsRowGroup_default), { key: 0 }, {
					default: withCtx(() => [(openBlock(), createElementBlock(Fragment, null, renderList(4, (i) => {
						return createVNode(unref(SettingsRow_default), { key: i }, {
							info: withCtx(() => [createVNode(unref(N8nLoading_default), {
								variant: "p",
								rows: 3,
								class: normalizeClass(unref($style).PLoading)
							}, null, 8, ["class"])]),
							action: withCtx(() => [createVNode(unref(N8nLoading_default), { variant: "button" })]),
							_: 1
						});
					}), 64))]),
					_: 1
				})) : currentTab.value === "workflow-issues" ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [unref(state)?.report.workflowResults.length === 0 ? (openBlock(), createBlock(EmptyTab_default, { key: 0 }, {
					title: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.migrationReport.emptyWorkflowIssues.title")), 1)]),
					description: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.migrationReport.emptyWorkflowIssues.description", { interpolate: { version: targetVersionDisplay } })), 1)]),
					_: 1
				})) : (openBlock(), createBlock(unref(SettingsRowGroup_default), { key: 1 }, {
					default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(sortedWorkflowResults.value, (issue) => {
						return openBlock(), createBlock(unref(SettingsRow_default), { key: issue.ruleId }, {
							info: withCtx(() => [createBaseVNode("div", { class: normalizeClass(unref($style).CardTitleContainer) }, [createVNode(unref(N8nText_default), {
								tag: "h3",
								size: "medium",
								color: "text-dark"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(issue.ruleTitle), 1)]),
								_: 2
							}, 1024), createVNode(unref(N8nTooltip_default), {
								content: workflowTooltips.value[issue.ruleSeverity],
								placement: "top",
								enterable: false
							}, {
								default: withCtx(() => [createVNode(SeverityTag_default, { severity: issue.ruleSeverity }, null, 8, ["severity"])]),
								_: 2
							}, 1032, ["content"])], 2), createVNode(unref(N8nText_default), {
								tag: "p",
								color: "text-base"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(issue.ruleDescription) + toDisplayString(issue.ruleDescription.endsWith(".") ? "" : ".") + " ", 1), issue.ruleDocumentationUrl ? (openBlock(), createBlock(unref(N8nLink_default), {
									key: 0,
									theme: "text",
									href: issue.ruleDocumentationUrl,
									target: "_blank",
									rel: "noopener noreferrer",
									class: normalizeClass(unref($style).NoLineBreak)
								}, {
									default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(unref($style).UnderlinedText) }, toDisplayString(unref(i18n).baseText("settings.migrationReport.documentation")), 3), _cache[1] || (_cache[1] = createTextVNode(" ↗ ", -1))]),
									_: 1
								}, 8, ["href", "class"])) : createCommentVNode("", true)]),
								_: 2
							}, 1024)]),
							action: withCtx(() => [createVNode(unref(N8nLink_default), {
								class: normalizeClass(unref($style).NoLineBreak),
								theme: "text",
								to: {
									name: unref(VIEWS).MIGRATION_RULE_REPORT,
									params: { migrationRuleId: issue.ruleId }
								}
							}, {
								default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(unref($style).NoLineBreak) }, [createTextVNode(toDisplayString(unref(i18n).baseText("settings.migrationReport.workflowsCount", { interpolate: { count: issue.nbAffectedWorkflows } })) + " ", 1), createVNode(unref(N8nIcon_default), {
									icon: "chevron-right",
									size: 24
								})], 2)]),
								_: 2
							}, 1032, ["class", "to"])]),
							_: 2
						}, 1024);
					}), 128))]),
					_: 1
				}))], 64)) : currentTab.value === "instance-issues" ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [unref(state)?.report.instanceResults.length === 0 ? (openBlock(), createBlock(EmptyTab_default, { key: 0 }, {
					title: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.migrationReport.emptyInstanceIssues.title")), 1)]),
					description: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.migrationReport.emptyInstanceIssues.description", { interpolate: { version: targetVersionDisplay } })), 1)]),
					_: 1
				})) : (openBlock(), createBlock(unref(SettingsRowGroup_default), { key: 1 }, {
					default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(sortedInstanceResults.value, (issue) => {
						return openBlock(), createBlock(unref(SettingsRow_default), { key: issue.ruleId }, {
							info: withCtx(() => [createBaseVNode("div", { class: normalizeClass(unref($style).CardTitleContainer) }, [createVNode(unref(N8nText_default), { tag: "h3" }, {
								default: withCtx(() => [createTextVNode(toDisplayString(issue.ruleTitle), 1)]),
								_: 2
							}, 1024), createVNode(unref(N8nTooltip_default), {
								content: instanceTooltips.value[issue.ruleSeverity],
								placement: "top",
								enterable: false
							}, {
								default: withCtx(() => [createVNode(SeverityTag_default, { severity: issue.ruleSeverity }, null, 8, ["severity"])]),
								_: 2
							}, 1032, ["content"])], 2), createVNode(unref(N8nText_default), {
								tag: "p",
								color: "text-base"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(issue.ruleDescription) + toDisplayString(issue.ruleDescription.endsWith(".") ? "" : ".") + " ", 1), issue.ruleDocumentationUrl ? (openBlock(), createBlock(unref(N8nLink_default), {
									key: 0,
									theme: "text",
									href: issue.ruleDocumentationUrl,
									target: "_blank",
									rel: "noopener noreferrer",
									class: normalizeClass(unref($style).NoLineBreak)
								}, {
									default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(unref($style).UnderlinedText) }, toDisplayString(unref(i18n).baseText("settings.migrationReport.documentation")), 3), _cache[2] || (_cache[2] = createTextVNode(" ↗ ", -1))]),
									_: 1
								}, 8, ["href", "class"])) : createCommentVNode("", true)]),
								_: 2
							}, 1024)]),
							_: 2
						}, 1024);
					}), 128))]),
					_: 1
				}))], 64)) : createCommentVNode("", true)])]),
				_: 1
			});
		};
	}
});
var MigrationRules_vue_vue_type_style_index_0_lang_module_default = {
	CardTitleContainer: "_CardTitleContainer_18p7b_2",
	NoLineBreak: "_NoLineBreak_18p7b_9",
	ActionBar: "_ActionBar_18p7b_16",
	PLoading: "_PLoading_18p7b_23",
	UnderlinedText: "_UnderlinedText_18p7b_29"
};
var MigrationRules_default = /* @__PURE__ */ _plugin_vue_export_helper_default(MigrationRules_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": MigrationRules_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { MigrationRules_default as default };
