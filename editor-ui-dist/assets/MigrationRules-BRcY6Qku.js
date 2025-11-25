import { C as computed, D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, Sn as toDisplayString, T as createBlock, _ as Fragment, _n as normalizeClass, at as renderSlot, bt as withCtx, c as useCssModule, et as openBlock, it as renderList, j as createTextVNode, w as createBaseVNode } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { gt as useI18n, x as useAsyncState } from "./_MapCache-DxwXn8uM.js";
import { Bn as N8nIcon_default, Ln as N8nText_default, Rn as N8nButton_default, g as N8nTabs_default, ht as N8nLink_default, tt as N8nLoading_default, yt as N8nTooltip_default } from "./src-BcrqaOXg.js";
import "./en-DicIYhdb.js";
import "./preload-helper-CR0ecmWK.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import "./truncate-D8k4BuhS.js";
import "./icon-4QNDuHkC.js";
import "./empty-BuGRxzl4.js";
import "./sanitize-html-D_cgmpAf.js";
import "./path-browserify-DsmB_HMK.js";
import { Oo as VIEWS } from "./constants-C-5XMlPK.js";
import "./merge-JOo1y2yJ.js";
import { t as useRootStore } from "./useRootStore-B7yZgeot.js";
import { i as refreshReport, n as getReport, t as SeverityTag_default } from "./SeverityTag-PI80Lhgn.js";
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
var EmptyTab_default = /* @__PURE__ */ __plugin_vue_export_helper_default(EmptyTab_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": EmptyTab_vue_vue_type_style_index_0_lang_module_default }]]);
var _hoisted_1 = { style: {
	"max-width": "700px",
	"margin": "0 auto",
	"padding-bottom": "40px"
} };
var MigrationRules_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "MigrationRules",
	setup(__props) {
		const $style = useCssModule();
		const rootStore = useRootStore();
		const i18n = useI18n();
		const currentTab = ref("workflow-issues");
		const { state, isLoading, execute } = useAsyncState(async (refresh = false) => {
			if (refresh) {
				const response = await refreshReport(rootStore.restApiContext);
				if (response.report.workflowResults.length === 0 && response.report.instanceResults.length > 0) currentTab.value = "instance-issues";
				return response;
			}
			return await getReport(rootStore.restApiContext);
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
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [
				createVNode(unref(N8nText_default), {
					tag: "h2",
					size: "xlarge",
					color: "text-dark",
					class: "mb-2xs"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.migrationReport.title")), 1)]),
					_: 1
				}),
				createVNode(unref(N8nText_default), {
					tag: "p",
					color: "text-base",
					class: "mb-2xl"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.migrationReport.description", { interpolate: {
						compatibleCount: String(compatibleWorkflowsCount.value),
						totalCount: String(unref(state)?.totalWorkflows ?? 0)
					} })), 1)]),
					_: 1
				}),
				createBaseVNode("div", { class: normalizeClass(unref($style).ActionBar) }, [createVNode(unref(N8nTabs_default), {
					modelValue: currentTab.value,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => currentTab.value = $event),
					options: tabs.value,
					variant: "modern"
				}, null, 8, ["modelValue", "options"]), unref(state)?.shouldCache ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 0,
					label: unref(i18n).baseText("settings.migrationReport.refreshButton"),
					icon: "refresh-cw",
					type: "secondary",
					onClick: refreshReport$1
				}, null, 8, ["label"])) : createCommentVNode("", true)], 2),
				unref(isLoading) ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(unref($style).CardContainer)
				}, [(openBlock(), createElementBlock(Fragment, null, renderList(4, (i) => {
					return createBaseVNode("div", {
						key: i,
						class: normalizeClass(unref($style).Card)
					}, [createBaseVNode("div", null, [createVNode(unref(N8nLoading_default), {
						variant: "p",
						rows: 3,
						class: normalizeClass(unref($style).PLoading)
					}, null, 8, ["class"])]), createVNode(unref(N8nLoading_default), { variant: "button" })], 2);
				}), 64))], 2)) : currentTab.value === "workflow-issues" ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [unref(state)?.report.workflowResults.length === 0 ? (openBlock(), createBlock(EmptyTab_default, { key: 0 }, {
					title: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.migrationReport.emptyWorkflowIssues.title")), 1)]),
					description: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.migrationReport.emptyWorkflowIssues.description")), 1)]),
					_: 1
				})) : (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(unref($style).CardContainer)
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(state)?.report.workflowResults, (issue) => {
					return openBlock(), createElementBlock("div", {
						key: issue.ruleId,
						class: normalizeClass(unref($style).Card)
					}, [createBaseVNode("div", null, [createBaseVNode("div", { class: normalizeClass(unref($style).CardTitleContainer) }, [createVNode(unref(N8nText_default), {
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
						default: withCtx(() => [createTextVNode(toDisplayString(issue.ruleDescription) + " ", 1), issue.ruleDocumentationUrl ? (openBlock(), createBlock(unref(N8nLink_default), {
							key: 0,
							theme: "text",
							underline: "",
							href: issue.ruleDocumentationUrl,
							target: "_blank",
							rel: "noopener noreferrer"
						}, {
							default: withCtx(() => [createBaseVNode("u", { class: normalizeClass(unref($style).NoLineBreak) }, [createTextVNode(toDisplayString(unref(i18n).baseText("settings.migrationReport.documentation")) + " ", 1), createVNode(unref(N8nIcon_default), { icon: "external-link" })], 2)]),
							_: 2
						}, 1032, ["href"])) : createCommentVNode("", true)]),
						_: 2
					}, 1024)]), createVNode(unref(N8nLink_default), {
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
					}, 1032, ["class", "to"])], 2);
				}), 128))], 2))], 64)) : currentTab.value === "instance-issues" ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [unref(state)?.report.instanceResults.length === 0 ? (openBlock(), createBlock(EmptyTab_default, { key: 0 }, {
					title: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.migrationReport.emptyInstanceIssues.title")), 1)]),
					description: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.migrationReport.emptyInstanceIssues.description")), 1)]),
					_: 1
				})) : (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(unref($style).CardContainer)
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(state)?.report.instanceResults, (issue) => {
					return openBlock(), createElementBlock("div", {
						key: issue.ruleId,
						class: normalizeClass(unref($style).Card)
					}, [createBaseVNode("div", null, [createBaseVNode("div", { class: normalizeClass(unref($style).CardTitleContainer) }, [createVNode(unref(N8nText_default), { tag: "h3" }, {
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
						default: withCtx(() => [createTextVNode(toDisplayString(issue.ruleDescription) + " ", 1), issue.ruleDocumentationUrl ? (openBlock(), createBlock(unref(N8nLink_default), {
							key: 0,
							theme: "text",
							underline: "",
							href: issue.ruleDocumentationUrl,
							target: "_blank",
							rel: "noopener noreferrer"
						}, {
							default: withCtx(() => [createBaseVNode("u", { class: normalizeClass(unref($style).NoLineBreak) }, [createTextVNode(toDisplayString(unref(i18n).baseText("settings.migrationReport.documentation")) + " ", 1), createVNode(unref(N8nIcon_default), { icon: "external-link" })], 2)]),
							_: 2
						}, 1032, ["href"])) : createCommentVNode("", true)]),
						_: 2
					}, 1024)])], 2);
				}), 128))], 2))], 64)) : createCommentVNode("", true)
			]);
		};
	}
});
var MigrationRules_vue_vue_type_style_index_0_lang_module_default = {
	CardContainer: "_CardContainer_150ni_2",
	Card: "_Card_150ni_2",
	CardTitleContainer: "_CardTitleContainer_150ni_32",
	NoLineBreak: "_NoLineBreak_150ni_39",
	ActionBar: "_ActionBar_150ni_46",
	NoIssuesContainer: "_NoIssuesContainer_150ni_53",
	PLoading: "_PLoading_150ni_62"
};
var MigrationRules_default = /* @__PURE__ */ __plugin_vue_export_helper_default(MigrationRules_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": MigrationRules_vue_vue_type_style_index_0_lang_module_default }]]);
export { MigrationRules_default as default };
