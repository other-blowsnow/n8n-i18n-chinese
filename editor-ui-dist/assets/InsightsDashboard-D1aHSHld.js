const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/InsightsPaywall-CSCupp2V.js","assets/_plugin-vue_export-helper-BwBpWJRZ.js","assets/src-j4VKDieO.js","assets/preload-helper-CR0ecmWK.js","assets/truncate-BlCeUq7F.js","assets/_MapCache-DZpzsuCB.js","assets/vue.runtime.esm-bundler-tP5dCd7J.js","assets/chunk-6z4oVpB-.js","assets/CalendarDate-B-JEhNYg.js","assets/sanitize-html-Cft-jOcY.js","assets/empty-BuGRxzl4.js","assets/path-browserify-BgjP7RyT.js","assets/en-b3uD8cvU.js","assets/src-DS0bffpn.css","assets/constants-ksa9xIxI.js","assets/merge-D6lLi7TL.js","assets/builder.store-BjWbk2Wl.js","assets/_baseOrderBy-B2FQHwl_.js","assets/dateformat-hG8NERse.js","assets/useDebounce-Cb7xvwM5.js","assets/versions.store-D8eaWwWC.js","assets/usePageRedirectionHelper-DuL7b4l7.js","assets/cloudPlan.store-2sNk8KGc.js","assets/InsightsPaywall-CE5W3W4m.css","assets/InsightsChartTotal-CFSSqEP8.js","assets/chart-BxWK2ZOo.js","assets/dist-JIm44DPf.js","assets/smartDecimal-Bi50OE4b.js","assets/chartjs.utils-DK-UavFb.js","assets/insights.constants-B7y0cvTb.js","assets/InsightsChartFailed-BBIPktEJ.js","assets/InsightsChartFailureRate-D0QuRJUD.js","assets/insights.utils-Cp5pMXsI.js","assets/InsightsChartTimeSaved-Df-fq2xv.js","assets/InsightsChartAverageRuntime-Dp8m0nup.js","assets/InsightsTableWorkflows-CrnmRDKi.js","assets/InsightsTableWorkflows-D20Yb7ZW.css"])))=>i.map(i=>d[i]);
import { C as computed, Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, N as defineAsyncComponent, P as defineComponent, T as createBlock, Z as onMounted, _ as Fragment, _t as watch, bt as withCtx, ct as resolveDynamicComponent, et as openBlock, ft as useModel, it as renderList, j as createTextVNode, q as onBeforeMount, vn as normalizeClass, w as createBaseVNode, zt as shallowRef } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import { gt as useI18n } from "./_MapCache-DZpzsuCB.js";
import { Bn as N8nHeading_default, Gn as N8nIcon_default, Hn as N8nText_default, Un as N8nButton_default, Wn as N8nSpinner_default, o as DateRangePicker_default } from "./src-j4VKDieO.js";
import "./en-b3uD8cvU.js";
import { t as __vitePreload } from "./preload-helper-CR0ecmWK.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { v as useRoute } from "./truncate-BlCeUq7F.js";
import "./overlay-Crh-SkkJ.js";
import "./empty-BuGRxzl4.js";
import { t as ElDialog } from "./dialog-B6i5gbQO.js";
import { Nn as useDocumentTitle, Pn as useProjectsStore, p as useTelemetry } from "./builder.store-BjWbk2Wl.js";
import "./sanitize-html-Cft-jOcY.js";
import { h as $14e0f24ef4ac5c92$export$d0bdf45af03a6ea3, i as $11d87f3f76e88657$export$b21e0b124e224484, l as $14e0f24ef4ac5c92$export$629b0a497aa65267, m as $14e0f24ef4ac5c92$export$aa8b41735afcabd2, s as $14e0f24ef4ac5c92$export$461939dd4422153 } from "./CalendarDate-B-JEhNYg.js";
import "./path-browserify-BgjP7RyT.js";
import "./constants-ksa9xIxI.js";
import "./merge-D6lLi7TL.js";
import "./_baseOrderBy-B2FQHwl_.js";
import "./dateformat-hG8NERse.js";
import "./useDebounce-Cb7xvwM5.js";
import "./cloudPlan.store-2sNk8KGc.js";
import "./versions.store-D8eaWwWC.js";
import { t as usePageRedirectionHelper } from "./usePageRedirectionHelper-DuL7b4l7.js";
import "./ProjectIcon-DTrnRNdg.js";
import "./orderBy-CTdFEkRg.js";
import { t as ProjectSharing_default } from "./ProjectSharing-C0wkfel0.js";
import { t as useInsightsStore } from "./insights.store-4ZcvrzGW.js";
import { s as INSIGHT_TYPES } from "./insights.constants-B7y0cvTb.js";
import { i as timeRangeMappings, r as getTimeRangeLabels, t as formatDateRange } from "./insights.utils-Cp5pMXsI.js";
import "./smartDecimal-Bi50OE4b.js";
import { t as InsightsSummary_default } from "./InsightsSummary-CnJdxMPo.js";
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
}), [["__scopeId", "data-v-528a05c4"]]);
var InsightsDataRangePicker_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InsightsDataRangePicker",
	props: {
		maxValue: {},
		minValue: {},
		modelValue: {},
		presets: {}
	},
	emits: [
		"update:modelValue",
		"update:placeholder",
		"update:startValue",
		"update:open"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const telemetry = useTelemetry();
		const upgradeModal = ref(false);
		function showUpgradeModal() {
			upgradeModal.value = true;
		}
		const actionType = ref("custom");
		function getDaysDiff({ start, end }) {
			if (!start) return 0;
			if (!end) return 0;
			return end.compare(start);
		}
		function isBeforeOrSame(dateToCompare, referenceDate) {
			return dateToCompare.compare(referenceDate) <= 0;
		}
		function isAfterOrSame(dateToCompare, referenceDate) {
			return dateToCompare.compare(referenceDate) >= 0;
		}
		function isEqual(dateToCompare, referenceDate) {
			if (!dateToCompare || !referenceDate) return false;
			return dateToCompare.compare(referenceDate) === 0;
		}
		function isValidDateRange({ start, end }) {
			if (!start) return false;
			if (!end) return false;
			return isBeforeOrSame(end, props.maxValue) && isAfterOrSame(start, props.minValue);
		}
		const range = shallowRef({
			start: props.modelValue.start?.copy(),
			end: props.modelValue.end?.copy()
		});
		function syncWithParentValue() {
			if (!isEqual(range.value?.start, props.modelValue.start) || !isEqual(range.value?.end, props.modelValue.end)) range.value = {
				start: props.modelValue.start?.copy(),
				end: props.modelValue.end?.copy()
			};
		}
		function syncData(isOpen) {
			if (isOpen) {
				syncWithParentValue();
				return;
			}
			const normalizedRange = {
				start: range.value?.start?.copy(),
				end: range.value?.end?.copy() ?? range.value?.start?.copy()
			};
			if (!isValidDateRange(normalizedRange)) {
				console.error("Invalid date range selected", normalizedRange);
				syncWithParentValue();
				return;
			}
			if (isEqual(normalizedRange.start, props.modelValue.start) && isEqual(normalizedRange.end, props.modelValue.end)) return;
			emit("update:modelValue", normalizedRange);
			const trackData = {
				start_date: normalizedRange.start?.toDate($14e0f24ef4ac5c92$export$aa8b41735afcabd2()).toISOString(),
				end_date: normalizedRange.end?.toDate($14e0f24ef4ac5c92$export$aa8b41735afcabd2()).toISOString(),
				range_length_days: getDaysDiff(normalizedRange),
				type: actionType.value
			};
			telemetry.track("User updated insights time range", trackData);
		}
		const open = ref(false);
		watch(open, (opened) => {
			syncData(opened);
			actionType.value = "custom";
		});
		function setPresetRange(days) {
			range.value = {
				start: props.maxValue.copy().subtract({ days }),
				end: props.maxValue.copy()
			};
			actionType.value = "preset";
			open.value = false;
		}
		const formattedRange = computed(() => {
			const { start, end } = props.modelValue;
			if (!start) return "Select range";
			return formatDateRange({
				start,
				end
			});
		});
		function isActiveRange(presetValue) {
			if (!$14e0f24ef4ac5c92$export$629b0a497aa65267(props.modelValue.end, $14e0f24ef4ac5c92$export$aa8b41735afcabd2())) return false;
			return props.modelValue.end.compare(props.modelValue.start) === presetValue;
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock(Fragment, null, [createVNode(unref(DateRangePicker_default), {
				modelValue: range.value,
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => range.value = $event),
				open: open.value,
				"onUpdate:open": _cache[1] || (_cache[1] = ($event) => open.value = $event),
				"max-value": _ctx.maxValue,
				"min-value": _ctx.minValue
			}, {
				trigger: withCtx(() => [createVNode(unref(N8nButton_default), {
					icon: "calendar",
					type: "secondary"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(formattedRange.value), 1)]),
					_: 1
				})]),
				presets: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.presets, (preset) => {
					return openBlock(), createBlock(unref(N8nButton_default), {
						key: preset.value,
						class: normalizeClass(_ctx.$style.PresetButton),
						type: isActiveRange(preset.value) ? "primary" : "secondary",
						size: "small",
						onClick: ($event) => preset.disabled ? showUpgradeModal() : setPresetRange(preset.value)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(preset.label) + " ", 1), preset.disabled ? (openBlock(), createBlock(unref(N8nIcon_default), {
							key: 0,
							icon: "lock",
							class: normalizeClass(_ctx.$style.LockIcon)
						}, null, 8, ["class"])) : createCommentVNode("", true)]),
						_: 2
					}, 1032, [
						"class",
						"type",
						"onClick"
					]);
				}), 128))]),
				_: 1
			}, 8, [
				"modelValue",
				"open",
				"max-value",
				"min-value"
			]), createVNode(InsightsUpgradeModal_default, {
				modelValue: upgradeModal.value,
				"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => upgradeModal.value = $event)
			}, null, 8, ["modelValue"])], 64);
		};
	}
});
var InsightsDataRangePicker_vue_vue_type_style_index_0_lang_module_default = {
	PresetButton: "_PresetButton_1waws_2",
	LockIcon: "_LockIcon_1waws_7"
};
var InsightsDataRangePicker_default = /* @__PURE__ */ __plugin_vue_export_helper_default(InsightsDataRangePicker_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InsightsDataRangePicker_vue_vue_type_style_index_0_lang_module_default }]]);
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
		const InsightsPaywall = defineAsyncComponent(async () => await __vitePreload(() => import("./InsightsPaywall-CSCupp2V.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23])));
		const InsightsChartTotal = defineAsyncComponent(async () => await __vitePreload(() => import("./InsightsChartTotal-CFSSqEP8.js"), __vite__mapDeps([24,5,6,7,25,18,15,26,27,28,29])));
		const InsightsChartFailed = defineAsyncComponent(async () => await __vitePreload(() => import("./InsightsChartFailed-BBIPktEJ.js"), __vite__mapDeps([30,5,6,7,25,18,15,26,27,28,29])));
		const InsightsChartFailureRate = defineAsyncComponent(async () => await __vitePreload(() => import("./InsightsChartFailureRate-D0QuRJUD.js"), __vite__mapDeps([31,8,5,6,7,25,18,15,26,27,28,29,32])));
		const InsightsChartTimeSaved = defineAsyncComponent(async () => await __vitePreload(() => import("./InsightsChartTimeSaved-Df-fq2xv.js"), __vite__mapDeps([33,8,5,6,7,25,18,15,26,27,28,29,32])));
		const InsightsChartAverageRuntime = defineAsyncComponent(async () => await __vitePreload(() => import("./InsightsChartAverageRuntime-Dp8m0nup.js"), __vite__mapDeps([34,8,5,6,7,25,18,15,26,27,28,29,32])));
		const InsightsTableWorkflows = defineAsyncComponent(async () => await __vitePreload(() => import("./InsightsTableWorkflows-CrnmRDKi.js"), __vite__mapDeps([35,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,27,29,32,36])));
		const props = __props;
		const route = useRoute();
		const i18n = useI18n();
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
		const granularity = computed(() => {
			const { start, end } = range.value;
			if (!start || !end) return "day";
			const comparison = end.compare(start);
			if (comparison <= 0) return "hour";
			if (comparison <= 30) return "day";
			return "week";
		});
		const selectedProject = ref(null);
		const maxDate = $14e0f24ef4ac5c92$export$d0bdf45af03a6ea3($14e0f24ef4ac5c92$export$aa8b41735afcabd2());
		const maxLicensedDate = insightsStore.dateRanges.toReversed().find((dateRange) => dateRange.licensed)?.key ?? "week";
		const timeRangeLabels = getTimeRangeLabels();
		const presets = computed(() => insightsStore.dateRanges.map((item) => {
			return {
				value: timeRangeMappings[item.key],
				label: timeRangeLabels[item.key],
				disabled: !item.licensed
			};
		}));
		const maximumValue = shallowRef(maxDate.copy());
		const minimumValue = shallowRef(maxDate.copy().subtract({ days: timeRangeMappings[maxLicensedDate] }));
		const range = shallowRef({
			start: maxDate.copy().subtract({ days: 7 }),
			end: maxDate.copy()
		});
		const getFilteredRange = () => {
			const timezone = $14e0f24ef4ac5c92$export$aa8b41735afcabd2();
			return {
				startDate: $11d87f3f76e88657$export$b21e0b124e224484(range.value.start, $14e0f24ef4ac5c92$export$461939dd4422153(timezone)).toDate(timezone),
				endDate: $11d87f3f76e88657$export$b21e0b124e224484(range.value.end, $14e0f24ef4ac5c92$export$461939dd4422153(timezone)).toDate(timezone)
			};
		};
		const fetchPaginatedTableData = ({ page = 0, itemsPerPage = 25, sortBy, projectId = selectedProject.value?.id }) => {
			const skip = page * itemsPerPage;
			const take = itemsPerPage;
			const sortKey = sortBy.length ? transformFilter(sortBy[0]) : void 0;
			const { startDate, endDate } = getFilteredRange();
			insightsStore.table.execute(0, {
				skip,
				take,
				sortBy: sortKey,
				startDate,
				endDate,
				projectId
			});
		};
		watch(() => [
			props.insightType,
			selectedProject.value,
			range.value
		], () => {
			sortTableBy.value = [{
				id: props.insightType,
				desc: true
			}];
			const { startDate, endDate } = getFilteredRange();
			if (insightsStore.isSummaryEnabled) insightsStore.summary.execute(0, {
				startDate,
				endDate,
				projectId: selectedProject.value?.id
			});
			insightsStore.charts.execute(0, {
				startDate,
				endDate,
				projectId: selectedProject.value?.id
			});
			if (insightsStore.isDashboardEnabled) fetchPaginatedTableData({
				sortBy: sortTableBy.value,
				projectId: selectedProject.value?.id
			});
		}, { immediate: true });
		onMounted(() => {
			useDocumentTitle().set(i18n.baseText("insights.heading"));
		});
		onBeforeMount(async () => {
			await projectsStore.getAvailableProjects();
		});
		const emailPattern = /^<([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})>$/;
		const projects = computed(() => projectsStore.availableProjects.filter((project) => project.name && !emailPattern.test(project.name.trim())));
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
				createBaseVNode("div", _hoisted_1, [createVNode(ProjectSharing_default, {
					modelValue: selectedProject.value,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selectedProject.value = $event),
					projects: projects.value,
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
				]), createVNode(InsightsDataRangePicker_default, {
					modelValue: range.value,
					"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => range.value = $event),
					"max-value": maximumValue.value,
					"min-value": minimumValue.value,
					presets: presets.value
				}, null, 8, [
					"modelValue",
					"max-value",
					"min-value",
					"presets"
				])]),
				unref(insightsStore).isSummaryEnabled ? (openBlock(), createBlock(InsightsSummary_default, {
					key: 0,
					summary: unref(insightsStore).summary.state,
					loading: unref(insightsStore).summary.isLoading,
					"start-date": range.value.start,
					"end-date": range.value.end,
					class: normalizeClass(_ctx.$style.insightsBanner)
				}, null, 8, [
					"summary",
					"loading",
					"start-date",
					"end-date",
					"class"
				])) : createCommentVNode("", true),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.insightsContent) }, [unref(insightsStore).isDashboardEnabled || isTimeSavedRoute.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.insightsContentWrapper)
				}, [
					createBaseVNode("div", { class: normalizeClass([_ctx.$style.dataLoader, { [_ctx.$style.isDataLoading]: unref(insightsStore).charts.isLoading || unref(insightsStore).table.isLoading }]) }, [createVNode(unref(N8nSpinner_default)), createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("insights.chart.loading")), 1)], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.insightsChartWrapper) }, [createTextVNode(toDisplayString(granularity.value) + " ", 1), (openBlock(), createBlock(resolveDynamicComponent(chartComponents.value[props.insightType]), {
						type: props.insightType,
						data: unref(insightsStore).charts.state,
						granularity: granularity.value,
						"start-date": range.value.start.toString(),
						"end-date": range.value.end.toString()
					}, null, 8, [
						"type",
						"data",
						"granularity",
						"start-date",
						"end-date"
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
	insightsView: "_insightsView_ttte2_123",
	insightsContainer: "_insightsContainer_ttte2_131",
	insightsBanner: "_insightsBanner_ttte2_138",
	insightsContent: "_insightsContent_ttte2_146",
	insightsContentWrapper: "_insightsContentWrapper_ttte2_155",
	insightsChartWrapper: "_insightsChartWrapper_ttte2_160",
	insightsTableWrapper: "_insightsTableWrapper_ttte2_167",
	dataLoader: "_dataLoader_ttte2_173",
	isDataLoading: "_isDataLoading_ttte2_186",
	projectSelect: "_projectSelect_ttte2_208",
	PresetButton: "_PresetButton_ttte2_215"
};
var InsightsDashboard_default = /* @__PURE__ */ __plugin_vue_export_helper_default(InsightsDashboard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InsightsDashboard_vue_vue_type_style_index_0_lang_module_default }]]);
export { InsightsDashboard_default as default };
