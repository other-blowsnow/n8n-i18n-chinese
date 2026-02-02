import { C as computed, Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, Gt as unref, M as createVNode, P as defineComponent, _ as Fragment, bt as withCtx, c as useCssModule, et as openBlock, it as renderList, j as createTextVNode, ot as resolveComponent, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { bt as I18nT, yt as useI18n } from "./_MapCache-8-eqnC2S.js";
import { Hi as N8nIcon_default, Ht as N8nTooltip_default, Lt as useRoute } from "./src-Cq27d_Gp.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import { Nt as useTelemetry } from "./users.store-qBZsmf9-.js";
import { Xo as VIEWS } from "./constants-Cyrg9Nbl.js";
import { i as INSIGHTS_UNIT_IMPACT_MAPPING, o as INSIGHT_IMPACT_TYPES } from "./insights.constants-Q1hG0DUw.js";
import { n as getMatchingPreset, r as getTimeRangeLabels, t as formatDateRange } from "./insights.utils-CjNWaY5O.js";
import { t as smartDecimal } from "./smartDecimal-DbDs_fqN.js";
var _hoisted_1 = { "data-test-id": "insights-summary-tabs" };
var _hoisted_2 = ["data-test-id"];
var _hoisted_3 = ["href"];
var _hoisted_4 = { key: 1 };
var InsightsSummary_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InsightsSummary",
	props: {
		summary: {},
		startDate: {},
		endDate: {},
		loading: { type: Boolean }
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const route = useRoute();
		const $style = useCssModule();
		const telemetry = useTelemetry();
		const timeRangeLabels = getTimeRangeLabels();
		const displayDateRangeLabel = computed(() => {
			const timeRangeKey = getMatchingPreset({
				start: props.startDate,
				end: props.endDate
			});
			if (timeRangeKey) return timeRangeLabels[timeRangeKey];
			return formatDateRange({
				start: props.startDate,
				end: props.endDate
			});
		});
		const summaryTitles = computed(() => ({
			total: i18n.baseText("insights.banner.title.total"),
			failed: i18n.baseText("insights.banner.title.failed"),
			failureRate: i18n.baseText("insights.banner.title.failureRate"),
			timeSaved: i18n.baseText("insights.banner.title.timeSaved"),
			averageRunTime: i18n.baseText("insights.banner.title.averageRunTime")
		}));
		const summaryHasNoData = computed(() => {
			const summaryValues = Object.values(props.summary);
			return summaryValues.length > 0 && summaryValues.every((summary) => !summary.value);
		});
		const summaryWithRouteLocations = computed(() => props.summary.map((s) => ({
			...s,
			to: {
				name: VIEWS.INSIGHTS,
				params: { insightType: s.id },
				query: route.query
			}
		})));
		const getImpactStyle = (id, value) => {
			const impact = INSIGHTS_UNIT_IMPACT_MAPPING[id];
			if (value === 0 || impact === INSIGHT_IMPACT_TYPES.NEUTRAL) return $style.neutral;
			if (impact === INSIGHT_IMPACT_TYPES.POSITIVE) return value > 0 ? $style.positive : $style.negative;
			if (impact === INSIGHT_IMPACT_TYPES.NEGATIVE) return value < 0 ? $style.positive : $style.negative;
			return $style.neutral;
		};
		const trackTabClick = (insightType) => {
			telemetry.track(`User clicked ${summaryTitles.value[insightType]}`, { referrer: route.name === VIEWS.INSIGHTS ? "Dashboard" : "Overview" });
		};
		return (_ctx, _cache) => {
			const _component_RouterLink = resolveComponent("RouterLink");
			return openBlock(), createElementBlock("div", { class: normalizeClass(unref($style).insightsWrapper) }, [createBaseVNode("div", { class: normalizeClass(unref($style).insights) }, [createBaseVNode("ul", _hoisted_1, [(openBlock(true), createElementBlock(Fragment, null, renderList(summaryWithRouteLocations.value, ({ id, value, deviation, deviationUnit, unit, to }) => {
				return openBlock(), createElementBlock("li", {
					key: id,
					"data-test-id": `insights-summary-tab-${id}`
				}, [createVNode(unref(N8nTooltip_default), {
					placement: unref(route).name === unref(VIEWS).INSIGHTS ? "bottom" : "top",
					disabled: !(summaryHasNoData.value && id === "total"),
					"show-after": 500
				}, {
					content: withCtx(() => [createVNode(unref(I18nT), {
						keypath: "insights.banner.noData.tooltip",
						scope: "global"
					}, {
						link: withCtx(() => [createBaseVNode("a", {
							href: unref(i18n).baseText("insights.banner.noData.tooltip.link.url"),
							target: "_blank"
						}, toDisplayString(unref(i18n).baseText("insights.banner.noData.tooltip.link")), 9, _hoisted_3)]),
						_: 1
					})]),
					default: withCtx(() => [createVNode(_component_RouterLink, {
						to,
						"exact-active-class": unref($style).activeTab,
						onClick: ($event) => trackTabClick(id)
					}, {
						default: withCtx(() => [
							createBaseVNode("strong", null, [createVNode(unref(N8nTooltip_default), {
								placement: "bottom",
								disabled: id !== "timeSaved"
							}, {
								content: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("insights.banner.title.timeSaved.tooltip")), 1)]),
								default: withCtx(() => [createTextVNode(" " + toDisplayString(summaryTitles.value[id]), 1)]),
								_: 2
							}, 1032, ["disabled"])]),
							createBaseVNode("small", { class: normalizeClass(unref($style).days) }, toDisplayString(displayDateRangeLabel.value), 3),
							value === 0 && id === "timeSaved" ? (openBlock(), createElementBlock("span", {
								key: 0,
								class: normalizeClass(unref($style).empty)
							}, [_cache[0] || (_cache[0] = createBaseVNode("em", null, "--", -1)), createBaseVNode("small", null, [createVNode(unref(N8nTooltip_default), { placement: "bottom" }, {
								content: withCtx(() => [createVNode(unref(I18nT), {
									keypath: "insights.banner.timeSaved.tooltip",
									scope: "global"
								}, {
									link: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("insights.banner.timeSaved.tooltip.link.text")), 1)]),
									_: 1
								})]),
								default: withCtx(() => [createVNode(unref(N8nIcon_default), {
									class: normalizeClass(unref($style).icon),
									icon: "info",
									size: "medium"
								}, null, 8, ["class"])]),
								_: 1
							})])], 2)) : (openBlock(), createElementBlock("span", _hoisted_4, [createBaseVNode("em", null, [createTextVNode(toDisplayString(unref(smartDecimal)(value).toLocaleString("en-US")) + " ", 1), createBaseVNode("i", null, toDisplayString(unit), 1)]), deviation !== null ? (openBlock(), createElementBlock("small", {
								key: 0,
								class: normalizeClass(getImpactStyle(id, deviation))
							}, [createVNode(unref(N8nIcon_default), {
								class: normalizeClass([unref($style).icon, getImpactStyle(id, deviation)]),
								icon: deviation === 0 ? "chevron-right" : deviation > 0 ? "chevron-up" : "chevron-down"
							}, null, 8, ["class", "icon"]), createVNode(unref(N8nTooltip_default), {
								placement: "bottom",
								disabled: id !== "failureRate"
							}, {
								content: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("insights.banner.failureRate.deviation.tooltip")), 1)]),
								default: withCtx(() => [createTextVNode(" " + toDisplayString(unref(smartDecimal)(Math.abs(deviation)).toLocaleString("en-US")) + toDisplayString(deviationUnit), 1)]),
								_: 2
							}, 1032, ["disabled"])], 2)) : createCommentVNode("", true)]))
						]),
						_: 2
					}, 1032, [
						"to",
						"exact-active-class",
						"onClick"
					])]),
					_: 2
				}, 1032, ["placement", "disabled"])], 8, _hoisted_2);
			}), 128))])], 2)], 2);
		};
	}
});
var InsightsSummary_vue_vue_type_style_index_0_lang_module_default = {
	insightsWrapper: "_insightsWrapper_itebj_125",
	insights: "_insights_itebj_125",
	activeTab: "_activeTab_itebj_168",
	days: "_days_itebj_181",
	empty: "_empty_itebj_192",
	icon: "_icon_itebj_203",
	noData: "_noData_itebj_233",
	positive: "_positive_itebj_238",
	negative: "_negative_itebj_242",
	neutral: "_neutral_itebj_246",
	loading: "_loading_itebj_261",
	queueModeWarning: "_queueModeWarning_itebj_272",
	underlined: "_underlined_itebj_278"
};
var InsightsSummary_default = /* @__PURE__ */ __plugin_vue_export_helper_default(InsightsSummary_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InsightsSummary_vue_vue_type_style_index_0_lang_module_default }]]);
export { InsightsSummary_default as t };
