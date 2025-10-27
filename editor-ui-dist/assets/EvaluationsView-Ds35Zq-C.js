import { o as __toESM } from "./chunk-6z4oVpB-.js";
import { C as computed, D as createElementBlock, Gt as unref, It as ref, M as createVNode, P as defineComponent, Sn as toDisplayString, T as createBlock, U as mergeModels, _ as Fragment, _n as normalizeClass, _t as watch, bt as withCtx, et as openBlock, ft as useModel, it as renderList, j as createTextVNode, k as createSlots, vt as watchEffect, w as createBaseVNode } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { C as useCssVar, _t as I18nT, gt as useI18n } from "./_MapCache-CMopfp37.js";
import { An as N8nHeading_default, Fn as N8nIcon_default, G as N8nOption_default, Mn as N8nText_default, Nn as N8nButton_default, W as N8nSelect_default, ft as N8nTooltip_default } from "./src-B9lyFNPE.js";
import "./en-BYTsM8fR.js";
import "./preload-helper-CR0ecmWK.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { b as useRouter } from "./truncate-D09te2fm.js";
import "./table-DMifFLG5.js";
import "./icon-B8U-CfQv.js";
import "./empty-BuGRxzl4.js";
import { at as useEvaluationStore } from "./useTelemetry-BnWkdL5v.js";
import { t as useToast } from "./useToast-CYEyObML.js";
import "./sanitize-html-BuXr7o4T.js";
import "./path-browserify-DsmB_HMK.js";
import { oa as VIEWS } from "./constants-7lEZpYki.js";
import "./merge-9-BpYlRV.js";
import { t as require_dateformat } from "./dateformat-D7TIhVd4.js";
import "./useDebounce-BSVJx8HC.js";
import "./useExternalHooks-BhwArgDu.js";
import { t as convertToDisplayDate } from "./dateFormatter-BcAWObOP.js";
import { t as require_orderBy } from "./orderBy-DfcEBYIJ.js";
import "./chart-C2tFerhP.js";
import { r as Line } from "./dist-DQo7s2CD.js";
import { n as statusDictionary, r as TestTableBase_default, t as getErrorBaseKey } from "./evaluation.constants-CSHk2Eqn.js";
import { t as AnimatedSpinner_default } from "./AnimatedSpinner-vlvkUC5d.js";
var import_dateformat = /* @__PURE__ */ __toESM(require_dateformat());
function useMetricsChart() {
	const colors = {
		primary: useCssVar("--color--primary", document.body).value,
		textBase: useCssVar("--color--text", document.body).value,
		backgroundXLight: useCssVar("--color--background--light-3", document.body).value,
		foregroundLight: useCssVar("--color--foreground--tint-1", document.body).value,
		foregroundBase: useCssVar("--color--foreground", document.body).value,
		foregroundDark: useCssVar("--color--foreground--shade-1", document.body).value
	};
	function generateChartData(runs$2, metric) {
		return { datasets: [{
			data: runs$2,
			parsing: {
				xAxisKey: "id",
				yAxisKey: `metrics.${metric}`
			},
			borderColor: colors.primary,
			backgroundColor: colors.backgroundXLight,
			borderWidth: 1,
			pointRadius: 2,
			pointHoverRadius: 4,
			pointBackgroundColor: colors.backgroundXLight,
			pointHoverBackgroundColor: colors.backgroundXLight
		}] };
	}
	function generateChartOptions({ metric, data }) {
		return {
			responsive: true,
			maintainAspectRatio: false,
			animation: false,
			devicePixelRatio: 2,
			interaction: {
				mode: "index",
				intersect: false
			},
			scales: {
				y: {
					border: { display: false },
					grid: { color: colors.foregroundBase },
					ticks: {
						padding: 8,
						color: colors.textBase
					}
				},
				x: {
					border: { display: false },
					grid: { display: false },
					ticks: {
						color: colors.textBase,
						callback(_tickValue, index) {
							return `#${data[index].index}`;
						}
					}
				}
			},
			plugins: {
				tooltip: {
					backgroundColor: colors.backgroundXLight,
					titleColor: colors.textBase,
					titleFont: { weight: "600" },
					bodyColor: colors.textBase,
					bodySpacing: 4,
					padding: 12,
					borderColor: colors.foregroundBase,
					borderWidth: 1,
					displayColors: true,
					callbacks: {
						title: (tooltipItems) => {
							return (0, import_dateformat.default)(tooltipItems[0].raw.runAt, "yyyy-mm-dd HH:MM");
						},
						label: (context) => `${metric}: ${context.parsed.y.toFixed(2)}`,
						labelColor() {
							return {
								borderColor: "rgba(29, 21, 21, 0)",
								backgroundColor: colors.primary,
								borderWidth: 0,
								borderRadius: 5
							};
						}
					}
				},
				legend: { display: false }
			}
		};
	}
	return {
		generateChartData,
		generateChartOptions
	};
}
var MetricsChart_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "MetricsChart",
	props: {
		selectedMetric: {},
		runs: {}
	},
	emits: ["update:selectedMetric"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const props = __props;
		const metricsChart = useMetricsChart();
		const availableMetrics = computed(() => {
			return props.runs.reduce((acc, run) => {
				const metricKeys = Object.keys(run.metrics ?? {});
				return [...new Set([...acc, ...metricKeys])];
			}, []);
		});
		const filteredRuns = computed(() => props.runs.filter((run) => run.metrics?.[props.selectedMetric] !== void 0));
		const chartData = computed(() => metricsChart.generateChartData(filteredRuns.value, props.selectedMetric));
		const chartOptions = computed(() => metricsChart.generateChartOptions({
			metric: props.selectedMetric,
			data: filteredRuns.value
		}));
		watchEffect(() => {
			if (props.runs.length > 0 && !props.selectedMetric) emit("update:selectedMetric", availableMetrics.value[0]);
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.metricsChartContainer) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.chartHeader) }, [createVNode(unref(N8nSelect_default), {
				"model-value": _ctx.selectedMetric,
				class: normalizeClass(_ctx.$style.metricSelect),
				placeholder: "Select metric",
				size: "small",
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => emit("update:selectedMetric", $event))
			}, {
				default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(availableMetrics.value, (metric) => {
					return openBlock(), createBlock(unref(N8nOption_default), {
						key: metric,
						label: metric,
						value: metric
					}, null, 8, ["label", "value"]);
				}), 128))]),
				_: 1
			}, 8, ["model-value", "class"])], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.chartWrapper) }, [(openBlock(), createBlock(unref(Line), {
				key: _ctx.selectedMetric,
				data: chartData.value,
				options: chartOptions.value,
				class: normalizeClass(_ctx.$style.metricsChart)
			}, null, 8, [
				"data",
				"options",
				"class"
			]))], 2)], 2);
		};
	}
});
var MetricsChart_vue_vue_type_style_index_0_lang_module_default = {
	metricsChartContainer: "_metricsChartContainer_dek81_123",
	chartHeader: "_chartHeader_dek81_128",
	chartTitle: "_chartTitle_dek81_131",
	metricSelect: "_metricSelect_dek81_136",
	chartWrapper: "_chartWrapper_dek81_139"
};
var MetricsChart_default = /* @__PURE__ */ __plugin_vue_export_helper_default(MetricsChart_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": MetricsChart_vue_vue_type_style_index_0_lang_module_default }]]);
var _hoisted_1 = { style: {
	"display": "inline-flex",
	"gap": "12px",
	"text-transform": "capitalize",
	"align-items": "center"
} };
var TestRunsTable_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "TestRunsTable",
	props: {
		runs: {},
		columns: {}
	},
	emits: ["rowClick"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const props = __props;
		const locale = useI18n();
		const styledColumns = computed(() => {
			return props.columns.map((column) => {
				if (column.prop === "id") return {
					...column,
					width: 100
				};
				if (column.prop === "runAt") return {
					...column,
					width: 150
				};
				return column;
			});
		});
		const runSummaries = computed(() => {
			return props.runs.map(({ status, finalResult, errorDetails,...run }) => {
				if (status === "completed" && finalResult && ["error", "warning"].includes(finalResult)) status = "warning";
				return {
					...run,
					status,
					finalResult,
					errorDetails
				};
			});
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [createVNode(unref(N8nHeading_default), {
				size: "large",
				bold: true,
				class: normalizeClass(_ctx.$style.runsTableHeading),
				color: "text-base"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("evaluation.listRuns.pastRuns.total", { adjustToNumber: _ctx.runs.length })) + " (" + toDisplayString(_ctx.runs.length) + ") ", 1)]),
				_: 1
			}, 8, ["class"]), createVNode(TestTableBase_default, {
				data: runSummaries.value,
				columns: styledColumns.value,
				"default-sort": {
					prop: "runAt",
					order: "descending"
				},
				onRowClick: _cache[0] || (_cache[0] = (row) => row.status !== "error" ? emit("rowClick", row) : void 0)
			}, {
				id: withCtx(({ row }) => [createTextVNode("#" + toDisplayString(row.index), 1)]),
				status: withCtx(({ row }) => [createBaseVNode("div", _hoisted_1, [row.status === "running" ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					color: "secondary"
				}, {
					default: withCtx(() => [createVNode(AnimatedSpinner_default)]),
					_: 1
				})) : (openBlock(), createBlock(unref(N8nIcon_default), {
					key: 1,
					icon: unref(statusDictionary)[row.status].icon,
					color: unref(statusDictionary)[row.status].color
				}, null, 8, ["icon", "color"])), row.status === "warning" ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 2,
					color: "warning",
					class: normalizeClass([_ctx.$style.alertText, _ctx.$style.warningText])
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText(`evaluation.runDetail.error.partialCasesFailed`)), 1)]),
					_: 1
				}, 8, ["class"])) : row.status === "error" ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 3,
					placement: "top",
					"show-after": 300
				}, {
					content: withCtx(() => [createVNode(unref(I18nT), {
						keypath: `${unref(getErrorBaseKey)(row.errorCode)}`,
						scope: "global"
					}, createSlots({ _: 2 }, [unref(locale).exists(`${unref(getErrorBaseKey)(row.errorCode)}.description`) ? {
						name: "description",
						fn: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText(`${unref(getErrorBaseKey)(row.errorCode)}.description`) && ". ") + " " + toDisplayString(unref(locale).baseText(`${unref(getErrorBaseKey)(row.errorCode)}.description`)), 1)]),
						key: "0"
					} : void 0]), 1032, ["keypath"])]),
					default: withCtx(() => [createVNode(unref(N8nText_default), { class: normalizeClass([_ctx.$style.alertText, _ctx.$style.errorText]) }, {
						default: withCtx(() => [createVNode(unref(I18nT), {
							keypath: `${unref(getErrorBaseKey)(row.errorCode)}`,
							scope: "global"
						}, createSlots({ _: 2 }, [unref(locale).exists(`${unref(getErrorBaseKey)(row.errorCode)}.description`) ? {
							name: "description",
							fn: withCtx(() => [createBaseVNode("p", { class: normalizeClass(_ctx.$style.grayText) }, toDisplayString(unref(locale).baseText(`${unref(getErrorBaseKey)(row.errorCode)}.description`)), 3)]),
							key: "0"
						} : void 0]), 1032, ["keypath"])]),
						_: 2
					}, 1032, ["class"])]),
					_: 2
				}, 1024)) : (openBlock(), createElementBlock(Fragment, { key: 4 }, [createTextVNode(toDisplayString(row.status), 1)], 64))])]),
				_: 1
			}, 8, ["data", "columns"])], 2);
		};
	}
});
var TestRunsTable_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_o1fe0_123",
	grayText: "_grayText_o1fe0_129",
	alertText: "_alertText_o1fe0_133",
	warningText: "_warningText_o1fe0_151",
	errorText: "_errorText_o1fe0_155"
};
var TestRunsTable_default = /* @__PURE__ */ __plugin_vue_export_helper_default(TestRunsTable_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": TestRunsTable_vue_vue_type_style_index_0_lang_module_default }]]);
var RunsSection_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "RunsSection",
	props: /* @__PURE__ */ mergeModels({
		runs: {},
		workflowId: {}
	}, {
		"selectedMetric": { required: true },
		"selectedMetricModifiers": {}
	}),
	emits: ["update:selectedMetric"],
	setup(__props) {
		const props = __props;
		const locale = useI18n();
		const router = useRouter();
		const selectedMetric = useModel(__props, "selectedMetric");
		const metrics = computed(() => {
			return [...props.runs.reduce((acc, run) => {
				Object.keys(run.metrics ?? {}).forEach((metric) => acc.add(metric));
				return acc;
			}, /* @__PURE__ */ new Set())];
		});
		const metricColumns = computed(() => metrics.value.map((metric) => ({
			prop: `metrics.${metric}`,
			label: metric,
			sortable: true,
			showHeaderTooltip: true,
			sortMethod: (a, b) => (a.metrics?.[metric] ?? 0) - (b.metrics?.[metric] ?? 0),
			formatter: (row) => row.metrics?.[metric] !== void 0 ? (row.metrics?.[metric]).toFixed(2) : ""
		})));
		const columns = computed(() => [
			{
				prop: "id",
				label: locale.baseText("evaluation.listRuns.runNumber"),
				showOverflowTooltip: true
			},
			{
				prop: "runAt",
				label: "Run at",
				sortable: true,
				showOverflowTooltip: true,
				formatter: (row) => {
					const { date, time } = convertToDisplayDate(row.runAt);
					return [date, time].join(", ");
				},
				sortMethod: (a, b) => new Date(a.runAt ?? a.createdAt).getTime() - new Date(b.runAt ?? b.createdAt).getTime()
			},
			{
				prop: "status",
				label: locale.baseText("evaluation.listRuns.status"),
				sortable: true
			},
			...metricColumns.value
		]);
		const handleRowClick = (row) => {
			router.push({
				name: VIEWS.EVALUATION_RUNS_DETAIL,
				params: { runId: row.id }
			});
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.runs) }, [createVNode(MetricsChart_default, {
				"selected-metric": selectedMetric.value,
				"onUpdate:selectedMetric": _cache[0] || (_cache[0] = ($event) => selectedMetric.value = $event),
				runs: _ctx.runs
			}, null, 8, ["selected-metric", "runs"]), createVNode(TestRunsTable_default, {
				class: normalizeClass(_ctx.$style.runsTable),
				runs: _ctx.runs,
				columns: columns.value,
				selectable: true,
				"data-test-id": "past-runs-table",
				onRowClick: handleRowClick
			}, null, 8, [
				"class",
				"runs",
				"columns"
			])], 2);
		};
	}
});
var RunsSection_vue_vue_type_style_index_0_lang_module_default = { runs: "_runs_16gb6_123" };
var RunsSection_default = /* @__PURE__ */ __plugin_vue_export_helper_default(RunsSection_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": RunsSection_vue_vue_type_style_index_0_lang_module_default }]]);
var import_orderBy = /* @__PURE__ */ __toESM(require_orderBy());
var EvaluationsView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "EvaluationsView",
	props: { name: {} },
	setup(__props) {
		const props = __props;
		const locale = useI18n();
		const toast = useToast();
		const evaluationStore = useEvaluationStore();
		const selectedMetric = ref("");
		const cancellingTestRun = ref(false);
		const runningTestRun = computed(() => runs$2.value.find((run) => run.status === "running"));
		async function runTest() {
			try {
				await evaluationStore.startTestRun(props.name);
			} catch (error) {
				toast.showError(error, locale.baseText("evaluation.listRuns.error.cantStartTestRun"));
			}
			try {
				await evaluationStore.fetchTestRuns(props.name);
			} catch (error) {
				toast.showError(error, locale.baseText("evaluation.listRuns.error.cantFetchTestRuns"));
			}
		}
		async function stopTest() {
			if (!runningTestRun.value) return;
			try {
				cancellingTestRun.value = true;
				await evaluationStore.cancelTestRun(runningTestRun.value.workflowId, runningTestRun.value.id);
			} catch (error) {
				toast.showError(error, locale.baseText("evaluation.listRuns.error.cantStopTestRun"));
				cancellingTestRun.value = false;
			}
		}
		const runs$2 = computed(() => {
			return (0, import_orderBy.default)(Object.values(evaluationStore.testRunsById ?? {}).filter(({ workflowId }) => workflowId === props.name), (record) => new Date(record.runAt), ["asc"]).map((record, index) => ({
				...record,
				index: index + 1
			}));
		});
		watch(runningTestRun, (run) => {
			if (!run) cancellingTestRun.value = false;
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.evaluationsView) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [runningTestRun.value ? (openBlock(), createBlock(unref(N8nButton_default), {
				key: 0,
				disabled: cancellingTestRun.value,
				class: normalizeClass(_ctx.$style.runOrStopTestButton),
				size: "small",
				"data-test-id": "stop-test-button",
				label: unref(locale).baseText("evaluation.stopTest"),
				type: "secondary",
				onClick: stopTest
			}, null, 8, [
				"disabled",
				"class",
				"label"
			])) : (openBlock(), createBlock(unref(N8nButton_default), {
				key: 1,
				class: normalizeClass(_ctx.$style.runOrStopTestButton),
				size: "small",
				"data-test-id": "run-test-button",
				label: unref(locale).baseText("evaluation.runTest"),
				type: "primary",
				onClick: runTest
			}, null, 8, ["class", "label"]))], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.wrapper) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createVNode(RunsSection_default, {
				"selected-metric": selectedMetric.value,
				"onUpdate:selectedMetric": _cache[0] || (_cache[0] = ($event) => selectedMetric.value = $event),
				class: normalizeClass(_ctx.$style.runs),
				runs: runs$2.value,
				"workflow-id": props.name
			}, null, 8, [
				"selected-metric",
				"class",
				"runs",
				"workflow-id"
			])], 2)], 2)], 2);
		};
	}
});
var EvaluationsView_vue_vue_type_style_index_0_lang_module_default = {
	evaluationsView: "_evaluationsView_ilj3k_123",
	content: "_content_ilj3k_127",
	header: "_header_ilj3k_134",
	wrapper: "_wrapper_ilj3k_148",
	runOrStopTestButton: "_runOrStopTestButton_ilj3k_153",
	runs: "_runs_ilj3k_157"
};
var EvaluationsView_default = /* @__PURE__ */ __plugin_vue_export_helper_default(EvaluationsView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": EvaluationsView_vue_vue_type_style_index_0_lang_module_default }]]);
export { EvaluationsView_default as default };
