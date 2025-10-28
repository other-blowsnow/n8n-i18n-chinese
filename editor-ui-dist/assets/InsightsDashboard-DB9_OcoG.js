const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/InsightsPaywall-BOrFtZS6.js","assets/_plugin-vue_export-helper-BwBpWJRZ.js","assets/src-DuV1yrAd.js","assets/preload-helper-CR0ecmWK.js","assets/icon-bSjxVZuQ.js","assets/vue.runtime.esm-bundler-DDuXT-9r.js","assets/chunk-6z4oVpB-.js","assets/truncate-OqsyiABz.js","assets/_MapCache-DZMn6F95.js","assets/sanitize-html-BuXr7o4T.js","assets/empty-BuGRxzl4.js","assets/path-browserify-DsmB_HMK.js","assets/en-BYTsM8fR.js","assets/src-B3UiHJ-Q.css","assets/constants-CiCQTzlI.js","assets/merge-BF1fect_.js","assets/useTelemetry-C3cN19b2.js","assets/dateformat-D7TIhVd4.js","assets/useDebounce-Dm5wldKp.js","assets/useToast-B-CMvNEW.js","assets/useExternalHooks-CFOQ8Nn2.js","assets/versions.store-CiEGYguH.js","assets/usePageRedirectionHelper-DXylCC4_.js","assets/cloudPlan.store-CD7mCT0O.js","assets/InsightsPaywall-CE5W3W4m.css","assets/InsightsChartTotal-YT8xsqgB.js","assets/chart-C2tFerhP.js","assets/dist-DQo7s2CD.js","assets/smartDecimal-Bi50OE4b.js","assets/chartjs.utils-CNtV40LR.js","assets/insights.constants-BkI0n967.js","assets/InsightsChartFailed-Dojfou-1.js","assets/InsightsChartFailureRate-BnmKjOxx.js","assets/insights.utils-BTap7Bzt.js","assets/InsightsChartTimeSaved-CNa4C_92.js","assets/InsightsChartAverageRuntime-CDjw1QY1.js","assets/InsightsTableWorkflows-_QBTHS7z.js","assets/InsightsTableWorkflows-D20Yb7ZW.css"])))=>i.map(i=>d[i]);
import { C as computed, D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, N as defineAsyncComponent, P as defineComponent, Sn as toDisplayString, T as createBlock, Z as onMounted, _ as Fragment, _n as normalizeClass, _t as watch, bt as withCtx, ct as resolveDynamicComponent, et as openBlock, ft as useModel, it as renderList, j as createTextVNode, q as onBeforeMount, w as createBaseVNode } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { gt as useI18n } from "./_MapCache-DZMn6F95.js";
import { An as N8nHeading_default, G as N8nOption_default, Mn as N8nText_default, Nn as N8nButton_default, Pn as N8nSpinner_default, W as N8nSelect_default } from "./src-DuV1yrAd.js";
import "./en-BYTsM8fR.js";
import { t as __vitePreload } from "./preload-helper-CR0ecmWK.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { y as useRoute } from "./truncate-OqsyiABz.js";
import "./icon-bSjxVZuQ.js";
import "./overlay-DSEmbFQU.js";
import "./empty-BuGRxzl4.js";
import { t as ElDialog } from "./dialog-CEqNN20X.js";
import { An as useProjectsStore, kn as useDocumentTitle, t as useTelemetry } from "./useTelemetry-C3cN19b2.js";
import "./useToast-B-CMvNEW.js";
import "./sanitize-html-BuXr7o4T.js";
import "./path-browserify-DsmB_HMK.js";
import "./constants-CiCQTzlI.js";
import "./merge-BF1fect_.js";
import "./dateformat-D7TIhVd4.js";
import "./useDebounce-Dm5wldKp.js";
import "./useExternalHooks-CFOQ8Nn2.js";
import "./cloudPlan.store-CD7mCT0O.js";
import "./versions.store-CiEGYguH.js";
import { t as usePageRedirectionHelper } from "./usePageRedirectionHelper-DXylCC4_.js";
import "./ProjectIcon-DGod3YNF.js";
import { t as ProjectSharing_default } from "./ProjectSharing-Dd2yWo-d.js";
import "./sortByProperty-qz-1s69w.js";
import { t as useInsightsStore } from "./insights.store-DztKWt1N.js";
import { c as TELEMETRY_TIME_RANGE, l as UNLICENSED_TIME_RANGE, s as INSIGHT_TYPES } from "./insights.constants-BkI0n967.js";
import { t as getTimeRangeLabels } from "./insights.utils-BTap7Bzt.js";
import "./smartDecimal-Bi50OE4b.js";
import { t as InsightsSummary_default } from "./InsightsSummary-BD1XDAFt.js";
var _hoisted_1$2 = {
	key: 0,
	width: "16",
	height: "17",
	viewBox: "0 0 16 17",
	fill: "none",
	xmlns: "http://www.w3.org/2000/svg",
	style: { "margin-left": "auto" }
};
var InsightsDateRangeSelect_default = /* @__PURE__ */ defineComponent({
	__name: "InsightsDateRangeSelect",
	props: {
		"modelValue": { required: true },
		"modelModifiers": {}
	},
	emits: ["update:modelValue"],
	setup(__props) {
		const model = useModel(__props, "modelValue");
		const insightsStore = useInsightsStore();
		const timeRangeLabels = getTimeRangeLabels();
		const timeOptions = ref(insightsStore.dateRanges.map((option) => {
			return {
				key: option.key,
				label: timeRangeLabels[option.key],
				value: option.licensed ? option.key : UNLICENSED_TIME_RANGE,
				licensed: option.licensed
			};
		}));
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nSelect_default), {
				modelValue: model.value,
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => model.value = $event),
				size: "small"
			}, {
				default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(timeOptions.value, (item) => {
					return openBlock(), createBlock(unref(N8nOption_default), {
						key: item.key,
						value: item.value,
						label: item.label
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(item.label) + " ", 1), !item.licensed ? (openBlock(), createElementBlock("svg", _hoisted_1$2, _cache[1] || (_cache[1] = [createBaseVNode("path", {
							d: "M12.6667 7.83337H3.33333C2.59695 7.83337 2 8.43033 2 9.16671V13.8334C2 14.5698 2.59695 15.1667 3.33333 15.1667H12.6667C13.403 15.1667 14 14.5698 14 13.8334V9.16671C14 8.43033 13.403 7.83337 12.6667 7.83337Z",
							stroke: "#9A9A9A",
							"stroke-width": "1.33333",
							"stroke-linecap": "round",
							"stroke-linejoin": "round"
						}, null, -1), createBaseVNode("path", {
							d: "M4.66681 7.83337V5.16671C4.66681 4.28265 5.018 3.43481 5.64312 2.80968C6.26824 2.18456 7.11609 1.83337 8.00014 1.83337C8.8842 1.83337 9.73204 2.18456 10.3572 2.80968C10.9823 3.43481 11.3335 4.28265 11.3335 5.16671V7.83337",
							stroke: "#9A9A9A",
							"stroke-width": "1.33333",
							"stroke-linecap": "round",
							"stroke-linejoin": "round"
						}, null, -1)]))) : createCommentVNode("", true)]),
						_: 2
					}, 1032, ["value", "label"]);
				}), 128))]),
				_: 1
			}, 8, ["modelValue"]);
		};
	}
});
var _hoisted_1$1 = { class: "perks-list" };
var InsightsUpgradeModal_default = /* @__PURE__ */ __plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "InsightsUpgradeModal",
	props: {
		"modelValue": { type: Boolean },
		"modelModifiers": {}
	},
	emits: ["update:modelValue"],
	setup(__props) {
		const model = useModel(__props, "modelValue");
		const i18n = useI18n();
		function goToUpgrade() {
			model.value = false;
			usePageRedirectionHelper().goToUpgrade("insights", "upgrade-insights");
		}
		const perks = computed(() => [...Array(3).keys()].map((index) => i18n.baseText(`insights.upgradeModal.perks.${index}`)));
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(ElDialog), {
				modelValue: model.value,
				"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => model.value = $event),
				title: unref(i18n).baseText("insights.upgradeModal.title"),
				width: "500"
			}, {
				footer: withCtx(() => [createBaseVNode("div", null, [createVNode(unref(N8nButton_default), {
					type: "secondary",
					onClick: _cache[0] || (_cache[0] = ($event) => model.value = false)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("insights.upgradeModal.button.dismiss")), 1)]),
					_: 1
				}), createVNode(unref(N8nButton_default), {
					type: "primary",
					onClick: goToUpgrade
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.upgrade")), 1)]),
					_: 1
				})])]),
				default: withCtx(() => [createBaseVNode("div", null, [createVNode(unref(N8nText_default), {
					tag: "p",
					class: "mb-s"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("insights.upgradeModal.content")), 1)]),
					_: 1
				}), createBaseVNode("ul", _hoisted_1$1, [(openBlock(true), createElementBlock(Fragment, null, renderList(perks.value, (perk) => {
					return openBlock(), createBlock(unref(N8nText_default), {
						key: perk,
						color: "text-dark",
						tag: "li"
					}, {
						default: withCtx(() => [_cache[2] || (_cache[2] = createBaseVNode("svg", {
							xmlns: "http://www.w3.org/2000/svg",
							viewBox: "0 0 16 16",
							width: "16px",
							height: "16px"
						}, [createBaseVNode("path", {
							d: "M 16 8 C 16 12.418 12.418 16 8 16 C 3.582 16 0 12.418 0 8 C 0 3.582 3.582 0 8 0 C 12.418 0 16 3.582 16 8 Z M 3.97 9.03 L 5.97 11.03 L 6.5 11.561 L 7.03 11.03 L 12.53 5.53 L 11.47 4.47 L 6.5 9.439 L 5.03 7.97 L 3.97 9.03 Z",
							fill: "currentColor"
						})], -1)), createTextVNode(" " + toDisplayString(perk), 1)]),
						_: 2
					}, 1024);
				}), 128))])])]),
				_: 1
			}, 8, ["modelValue", "title"]);
		};
	}
}), [["__scopeId", "data-v-324431e6"]]);
var _hoisted_1 = {
	class: "mt-s",
	style: {
		"display": "flex",
		"gap": "12px",
		"align-items": "center"
	}
};
var InsightsDashboard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InsightsDashboard",
	props: { insightType: {} },
	setup(__props) {
		const InsightsPaywall = defineAsyncComponent(async () => await __vitePreload(() => import("./InsightsPaywall-BOrFtZS6.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24])));
		const InsightsChartTotal = defineAsyncComponent(async () => await __vitePreload(() => import("./InsightsChartTotal-YT8xsqgB.js"), __vite__mapDeps([25,8,5,6,26,17,15,27,28,29,30])));
		const InsightsChartFailed = defineAsyncComponent(async () => await __vitePreload(() => import("./InsightsChartFailed-Dojfou-1.js"), __vite__mapDeps([31,8,5,6,26,17,15,27,28,29,30])));
		const InsightsChartFailureRate = defineAsyncComponent(async () => await __vitePreload(() => import("./InsightsChartFailureRate-BnmKjOxx.js"), __vite__mapDeps([32,8,5,6,26,17,15,27,28,29,30,33])));
		const InsightsChartTimeSaved = defineAsyncComponent(async () => await __vitePreload(() => import("./InsightsChartTimeSaved-CNa4C_92.js"), __vite__mapDeps([34,8,5,6,26,17,15,27,28,29,30,33])));
		const InsightsChartAverageRuntime = defineAsyncComponent(async () => await __vitePreload(() => import("./InsightsChartAverageRuntime-CDjw1QY1.js"), __vite__mapDeps([35,8,5,6,26,17,15,27,28,29,30,33])));
		const InsightsTableWorkflows = defineAsyncComponent(async () => await __vitePreload(() => import("./InsightsTableWorkflows-_QBTHS7z.js"), __vite__mapDeps([36,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,28,30,33,37])));
		const props = __props;
		const route = useRoute();
		const i18n = useI18n();
		const telemetry = useTelemetry();
		const insightsStore = useInsightsStore();
		const projectsStore = useProjectsStore();
		const isTimeSavedRoute = computed(() => route.params.insightType === INSIGHT_TYPES.TIME_SAVED);
		const chartComponents = computed(() => ({
			total: InsightsChartTotal,
			failed: InsightsChartFailed,
			failureRate: InsightsChartFailureRate,
			timeSaved: InsightsChartTimeSaved,
			averageRunTime: InsightsChartAverageRuntime
		}));
		const transformFilter = ({ id, desc }) => {
			return `${id}:${desc ? "desc" : "asc"}`;
		};
		const sortTableBy = ref([{
			id: props.insightType,
			desc: true
		}]);
		const upgradeModalVisible = ref(false);
		const selectedDateRange = ref("week");
		const granularity = computed(() => insightsStore.dateRanges.find((item) => item.key === selectedDateRange.value)?.granularity ?? "day");
		const selectedProject = ref(null);
		const fetchPaginatedTableData = ({ page = 0, itemsPerPage = 25, sortBy, dateRange = selectedDateRange.value, projectId = selectedProject.value?.id }) => {
			const skip = page * itemsPerPage;
			const take = itemsPerPage;
			const sortKey = sortBy.length ? transformFilter(sortBy[0]) : void 0;
			insightsStore.table.execute(0, {
				skip,
				take,
				sortBy: sortKey,
				dateRange,
				projectId
			});
		};
		function handleTimeChange(value) {
			if (value === "UNLICENSED_TIME_RANGE") {
				upgradeModalVisible.value = true;
				return;
			}
			selectedDateRange.value = value;
			telemetry.track("User updated insights time range", { range: TELEMETRY_TIME_RANGE[value] });
		}
		watch(() => [
			props.insightType,
			selectedDateRange.value,
			selectedProject.value
		], () => {
			sortTableBy.value = [{
				id: props.insightType,
				desc: true
			}];
			if (insightsStore.isSummaryEnabled) insightsStore.summary.execute(0, {
				dateRange: selectedDateRange.value,
				projectId: selectedProject.value?.id
			});
			insightsStore.charts.execute(0, {
				dateRange: selectedDateRange.value,
				projectId: selectedProject.value?.id
			});
			if (insightsStore.isDashboardEnabled) fetchPaginatedTableData({
				sortBy: sortTableBy.value,
				dateRange: selectedDateRange.value,
				projectId: selectedProject.value?.id
			});
		}, { immediate: true });
		onMounted(() => {
			useDocumentTitle().set(i18n.baseText("insights.heading"));
		});
		onBeforeMount(async () => {
			await projectsStore.getAvailableProjects();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.insightsView) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.insightsContainer) }, [
				createVNode(unref(N8nHeading_default), {
					bold: "",
					tag: "h2",
					size: "xlarge"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("insights.dashboard.title")), 1)]),
					_: 1
				}),
				createBaseVNode("div", _hoisted_1, [
					createVNode(ProjectSharing_default, {
						modelValue: selectedProject.value,
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selectedProject.value = $event),
						projects: unref(projectsStore).availableProjects,
						placeholder: unref(i18n).baseText("insights.dashboard.search.placeholder"),
						"empty-options-text": unref(i18n).baseText("projects.sharing.noMatchingProjects"),
						size: "mini",
						class: normalizeClass(_ctx.$style.projectSelect),
						clearable: "",
						onClear: _cache[1] || (_cache[1] = ($event) => selectedProject.value = null)
					}, null, 8, [
						"modelValue",
						"projects",
						"placeholder",
						"empty-options-text",
						"class"
					]),
					createVNode(InsightsDateRangeSelect_default, {
						"model-value": selectedDateRange.value,
						style: { "width": "173px" },
						"data-test-id": "range-select",
						"onUpdate:modelValue": handleTimeChange
					}, null, 8, ["model-value"]),
					createVNode(InsightsUpgradeModal_default, {
						modelValue: upgradeModalVisible.value,
						"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => upgradeModalVisible.value = $event)
					}, null, 8, ["modelValue"])
				]),
				unref(insightsStore).isSummaryEnabled ? (openBlock(), createBlock(InsightsSummary_default, {
					key: 0,
					summary: unref(insightsStore).summary.state,
					loading: unref(insightsStore).summary.isLoading,
					"time-range": selectedDateRange.value,
					class: normalizeClass(_ctx.$style.insightsBanner)
				}, null, 8, [
					"summary",
					"loading",
					"time-range",
					"class"
				])) : createCommentVNode("", true),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.insightsContent) }, [unref(insightsStore).isDashboardEnabled || isTimeSavedRoute.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.insightsContentWrapper)
				}, [
					createBaseVNode("div", { class: normalizeClass([_ctx.$style.dataLoader, { [_ctx.$style.isDataLoading]: unref(insightsStore).charts.isLoading || unref(insightsStore).table.isLoading }]) }, [createVNode(unref(N8nSpinner_default)), createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("insights.chart.loading")), 1)], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.insightsChartWrapper) }, [(openBlock(), createBlock(resolveDynamicComponent(chartComponents.value[props.insightType]), {
						type: props.insightType,
						data: unref(insightsStore).charts.state,
						granularity: granularity.value
					}, null, 8, [
						"type",
						"data",
						"granularity"
					]))], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.insightsTableWrapper) }, [createVNode(unref(InsightsTableWorkflows), {
						"sort-by": sortTableBy.value,
						"onUpdate:sortBy": _cache[3] || (_cache[3] = ($event) => sortTableBy.value = $event),
						data: unref(insightsStore).table.state,
						loading: unref(insightsStore).table.isLoading,
						"is-dashboard-enabled": unref(insightsStore).isDashboardEnabled,
						"onUpdate:options": fetchPaginatedTableData
					}, null, 8, [
						"sort-by",
						"data",
						"loading",
						"is-dashboard-enabled"
					])], 2)
				], 2)) : (openBlock(), createBlock(unref(InsightsPaywall), { key: 1 }))], 2)
			], 2)], 2);
		};
	}
});
var InsightsDashboard_vue_vue_type_style_index_0_lang_module_default = {
	insightsView: "_insightsView_1ob2s_123",
	insightsContainer: "_insightsContainer_1ob2s_131",
	insightsBanner: "_insightsBanner_1ob2s_138",
	insightsContent: "_insightsContent_1ob2s_146",
	insightsContentWrapper: "_insightsContentWrapper_1ob2s_155",
	insightsChartWrapper: "_insightsChartWrapper_1ob2s_160",
	insightsTableWrapper: "_insightsTableWrapper_1ob2s_167",
	dataLoader: "_dataLoader_1ob2s_173",
	isDataLoading: "_isDataLoading_1ob2s_186",
	projectSelect: "_projectSelect_1ob2s_208"
};
var InsightsDashboard_default = /* @__PURE__ */ __plugin_vue_export_helper_default(InsightsDashboard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InsightsDashboard_vue_vue_type_style_index_0_lang_module_default }]]);
export { InsightsDashboard_default as default };
