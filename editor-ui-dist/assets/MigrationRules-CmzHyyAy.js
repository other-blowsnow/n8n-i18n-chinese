import { o as __toESM } from "./chunk-r2Y0G7H8.js";
import { C as computed, Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, T as createBlock, _ as Fragment, at as renderSlot, bt as withCtx, c as useCssModule, et as openBlock, it as renderList, j as createTextVNode, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { x as useAsyncState, yt as useI18n } from "./_MapCache-8-eqnC2S.js";
import { At as N8nLink_default, Bi as N8nButton_default, Hi as N8nIcon_default, Ht as N8nTooltip_default, k as N8nTabs_default, xt as N8nLoading_default, zi as N8nText_default } from "./src-Cq27d_Gp.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-DjneYy0u.js";
import { Xo as VIEWS } from "./constants-Cyrg9Nbl.js";
import "./merge-O0QrB7po.js";
import { r as useRootStore } from "./_baseOrderBy-3Uh8XZv3.js";
import { t as require_orderBy } from "./orderBy-CwY3H7Zi.js";
import { i as refreshReport, n as getReport, t as SeverityTag_default } from "./SeverityTag-DVceXEib.js";
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
		const shouldShowRefreshButton = ref(false);
		const { state, isLoading, execute } = useAsyncState(async (refresh = false) => {
			if (refresh) {
				const response$1 = await refreshReport(rootStore.restApiContext);
				if (response$1.report.workflowResults.length === 0 && response$1.report.instanceResults.length > 0) currentTab.value = "instance-issues";
				shouldShowRefreshButton.value = response$1.shouldCache;
				return response$1;
			}
			const response = await getReport(rootStore.restApiContext);
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
					} })) + " ", 1), createVNode(unref(N8nLink_default), {
						theme: "text",
						href: "https://docs.n8n.io/2-0-breaking-changes/",
						target: "_blank",
						rel: "noopener noreferrer"
					}, {
						default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(unref($style).UnderlinedText) }, toDisplayString(unref(i18n).baseText("settings.migrationReport.documentationLink")), 3), _cache[1] || (_cache[1] = createTextVNode(" ↗ ", -1))]),
						_: 1
					})]),
					_: 1
				}),
				createBaseVNode("div", { class: normalizeClass(unref($style).ActionBar) }, [createVNode(unref(N8nTabs_default), {
					modelValue: currentTab.value,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => currentTab.value = $event),
					options: tabs.value,
					variant: "modern"
				}, null, 8, ["modelValue", "options"]), shouldShowRefreshButton.value ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 0,
					label: unref(i18n).baseText("settings.migrationReport.refreshButton"),
					icon: "refresh-cw",
					type: "secondary",
					loading: unref(isLoading),
					disabled: unref(isLoading),
					onClick: refreshReport$1
				}, null, 8, [
					"label",
					"loading",
					"disabled"
				])) : createCommentVNode("", true)], 2),
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
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(sortedWorkflowResults.value, (issue) => {
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
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(sortedInstanceResults.value, (issue) => {
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
						default: withCtx(() => [createTextVNode(toDisplayString(issue.ruleDescription) + toDisplayString(issue.ruleDescription.endsWith(".") ? "" : ".") + " ", 1), issue.ruleDocumentationUrl ? (openBlock(), createBlock(unref(N8nLink_default), {
							key: 0,
							theme: "text",
							href: issue.ruleDocumentationUrl,
							target: "_blank",
							rel: "noopener noreferrer",
							class: normalizeClass(unref($style).NoLineBreak)
						}, {
							default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(unref($style).UnderlinedText) }, toDisplayString(unref(i18n).baseText("settings.migrationReport.documentation")), 3), _cache[3] || (_cache[3] = createTextVNode(" ↗ ", -1))]),
							_: 1
						}, 8, ["href", "class"])) : createCommentVNode("", true)]),
						_: 2
					}, 1024)])], 2);
				}), 128))], 2))], 64)) : createCommentVNode("", true)
			]);
		};
	}
});
var MigrationRules_vue_vue_type_style_index_0_lang_module_default = {
	CardContainer: "_CardContainer_i8nk0_2",
	Card: "_Card_i8nk0_2",
	CardTitleContainer: "_CardTitleContainer_i8nk0_32",
	NoLineBreak: "_NoLineBreak_i8nk0_39",
	ActionBar: "_ActionBar_i8nk0_46",
	NoIssuesContainer: "_NoIssuesContainer_i8nk0_53",
	PLoading: "_PLoading_i8nk0_62",
	UnderlinedText: "_UnderlinedText_i8nk0_68"
};
var MigrationRules_default = /* @__PURE__ */ __plugin_vue_export_helper_default(MigrationRules_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": MigrationRules_vue_vue_type_style_index_0_lang_module_default }]]);
export { MigrationRules_default as default };
