import { fX as useCssVar, fU as dateFormat, d as defineComponent, x as computed, fV as watchEffect, h as createElementBlock, g as openBlock, n as normalizeClass, j as createBaseVNode, i as createVNode, e8 as N8nSelect, w as withCtx, F as Fragment, A as renderList, e as createBlock, e9 as _sfc_main$4, l as unref, _ as _export_sfc, m as N8nHeading, k as createTextVNode, t as toDisplayString, c as useI18n, fY as TestTableBase, p as N8nText, N as N8nIcon, fZ as statusDictionary, a4 as N8nTooltip, a6 as I18nT, f_ as getErrorBaseKey, bu as createSlots, ef as mergeModels, b as useRouter, eg as useModel, f$ as convertToDisplayDate, V as VIEWS, a as useToast, ag as useEvaluationStore, r as ref, eS as orderBy, af as watch, q as N8nButton } from "./index-BsWH3eYA.js";
import { L as Line } from "./index-D1iGXxLc.js";
import { _ as __unplugin_components_1 } from "./AnimatedSpinner-Be6NErX-.js";
function useMetricsChart() {
  const colors = {
    primary: useCssVar("--color-primary", document.body).value,
    textBase: useCssVar("--color-text-base", document.body).value,
    backgroundXLight: useCssVar("--color-background-xlight", document.body).value,
    foregroundLight: useCssVar("--color-foreground-light", document.body).value,
    foregroundBase: useCssVar("--color-foreground-base", document.body).value,
    foregroundDark: useCssVar("--color-foreground-dark", document.body).value
  };
  function generateChartData(runs2, metric) {
    const data = {
      datasets: [
        {
          data: runs2,
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
        }
      ]
    };
    return data;
  }
  function generateChartOptions({
    metric,
    data
  }) {
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
          border: {
            display: false
          },
          grid: {
            color: colors.foregroundBase
          },
          ticks: {
            padding: 8,
            color: colors.textBase
          }
        },
        x: {
          border: {
            display: false
          },
          grid: {
            display: false
          },
          ticks: {
            color: colors.textBase,
            // eslint-disable-next-line id-denylist
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
          titleFont: {
            weight: "600"
          },
          bodyColor: colors.textBase,
          bodySpacing: 4,
          padding: 12,
          borderColor: colors.foregroundBase,
          borderWidth: 1,
          displayColors: true,
          callbacks: {
            title: (tooltipItems) => {
              return dateFormat(tooltipItems[0].raw.runAt, "yyyy-mm-dd HH:MM");
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
        legend: {
          display: false
        }
      }
    };
  }
  return {
    generateChartData,
    generateChartOptions
  };
}
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
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
        return [.../* @__PURE__ */ new Set([...acc, ...metricKeys])];
      }, []);
    });
    const filteredRuns = computed(
      () => props.runs.filter((run) => run.metrics?.[props.selectedMetric] !== void 0)
    );
    const chartData = computed(
      () => metricsChart.generateChartData(filteredRuns.value, props.selectedMetric)
    );
    const chartOptions = computed(
      () => metricsChart.generateChartOptions({
        metric: props.selectedMetric,
        data: filteredRuns.value
      })
    );
    watchEffect(() => {
      if (props.runs.length > 0 && !props.selectedMetric) {
        emit("update:selectedMetric", availableMetrics.value[0]);
      }
    });
    return (_ctx, _cache) => {
      const _component_N8nOption = _sfc_main$4;
      const _component_N8nSelect = N8nSelect;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.metricsChartContainer)
      }, [
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.chartHeader)
        }, [
          createVNode(_component_N8nSelect, {
            "model-value": _ctx.selectedMetric,
            class: normalizeClass(_ctx.$style.metricSelect),
            placeholder: "Select metric",
            size: "small",
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => emit("update:selectedMetric", $event))
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(availableMetrics.value, (metric) => {
                return openBlock(), createBlock(_component_N8nOption, {
                  key: metric,
                  label: metric,
                  value: metric
                }, null, 8, ["label", "value"]);
              }), 128))
            ]),
            _: 1
          }, 8, ["model-value", "class"])
        ], 2),
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.chartWrapper)
        }, [
          (openBlock(), createBlock(unref(Line), {
            key: _ctx.selectedMetric,
            data: chartData.value,
            options: chartOptions.value,
            class: normalizeClass(_ctx.$style.metricsChart)
          }, null, 8, ["data", "options", "class"]))
        ], 2)
      ], 2);
    };
  }
});
const metricsChartContainer = "_metricsChartContainer_1xhz2_123";
const chartHeader = "_chartHeader_1xhz2_128";
const chartTitle = "_chartTitle_1xhz2_131";
const metricSelect = "_metricSelect_1xhz2_136";
const chartWrapper = "_chartWrapper_1xhz2_139";
const style0$3 = {
  metricsChartContainer,
  chartHeader,
  chartTitle,
  metricSelect,
  chartWrapper
};
const cssModules$3 = {
  "$style": style0$3
};
const MetricsChart = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__cssModules", cssModules$3]]);
const _hoisted_1 = { style: { "display": "inline-flex", "gap": "12px", "text-transform": "capitalize", "align-items": "center" } };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
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
        if (column.prop === "id") {
          return {
            ...column,
            width: 100
          };
        }
        if (column.prop === "runAt") {
          return {
            ...column,
            width: 150
          };
        }
        return column;
      });
    });
    const runSummaries = computed(() => {
      return props.runs.map(({ status, finalResult, errorDetails, ...run }) => {
        if (status === "completed" && finalResult && ["error", "warning"].includes(finalResult)) {
          status = "warning";
        }
        return {
          ...run,
          status,
          finalResult,
          errorDetails
        };
      });
    });
    return (_ctx, _cache) => {
      const _component_N8nHeading = N8nHeading;
      const _component_AnimatedSpinner = __unplugin_components_1;
      const _component_N8nTooltip = N8nTooltip;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.container)
      }, [
        createVNode(_component_N8nHeading, {
          size: "large",
          bold: true,
          class: normalizeClass(_ctx.$style.runsTableHeading),
          color: "text-base"
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(unref(locale).baseText("evaluation.listRuns.pastRuns.total", { adjustToNumber: _ctx.runs.length })) + " (" + toDisplayString(_ctx.runs.length) + ") ", 1)
          ]),
          _: 1
        }, 8, ["class"]),
        createVNode(TestTableBase, {
          data: runSummaries.value,
          columns: styledColumns.value,
          "default-sort": { prop: "runAt", order: "descending" },
          onRowClick: _cache[0] || (_cache[0] = (row) => row.status !== "error" ? emit("rowClick", row) : void 0)
        }, {
          id: withCtx(({ row }) => [
            createTextVNode("#" + toDisplayString(row.index), 1)
          ]),
          status: withCtx(({ row }) => [
            createBaseVNode("div", _hoisted_1, [
              row.status === "running" ? (openBlock(), createBlock(unref(N8nText), {
                key: 0,
                color: "secondary"
              }, {
                default: withCtx(() => [
                  createVNode(_component_AnimatedSpinner)
                ]),
                _: 1
              })) : (openBlock(), createBlock(unref(N8nIcon), {
                key: 1,
                icon: unref(statusDictionary)[row.status].icon,
                color: unref(statusDictionary)[row.status].color
              }, null, 8, ["icon", "color"])),
              row.status === "warning" ? (openBlock(), createBlock(unref(N8nText), {
                key: 2,
                color: "warning",
                class: normalizeClass([_ctx.$style.alertText, _ctx.$style.warningText])
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(locale).baseText(`evaluation.runDetail.error.partialCasesFailed`)), 1)
                ]),
                _: 1
              }, 8, ["class"])) : row.status === "error" ? (openBlock(), createBlock(_component_N8nTooltip, {
                key: 3,
                placement: "top",
                "show-after": 300
              }, {
                content: withCtx(() => [
                  createVNode(unref(I18nT), {
                    keypath: `${unref(getErrorBaseKey)(row.errorCode)}`,
                    scope: "global"
                  }, createSlots({ _: 2 }, [
                    unref(locale).exists(`${unref(getErrorBaseKey)(row.errorCode)}.description`) ? {
                      name: "description",
                      fn: withCtx(() => [
                        createTextVNode(toDisplayString(unref(locale).baseText(
                          `${unref(getErrorBaseKey)(row.errorCode)}.description`
                        ) && ". ") + " " + toDisplayString(unref(locale).baseText(
                          `${unref(getErrorBaseKey)(row.errorCode)}.description`
                        )), 1)
                      ]),
                      key: "0"
                    } : void 0
                  ]), 1032, ["keypath"])
                ]),
                default: withCtx(() => [
                  createVNode(unref(N8nText), {
                    class: normalizeClass([_ctx.$style.alertText, _ctx.$style.errorText])
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(I18nT), {
                        keypath: `${unref(getErrorBaseKey)(row.errorCode)}`,
                        scope: "global"
                      }, createSlots({ _: 2 }, [
                        unref(locale).exists(`${unref(getErrorBaseKey)(row.errorCode)}.description`) ? {
                          name: "description",
                          fn: withCtx(() => [
                            createBaseVNode("p", {
                              class: normalizeClass(_ctx.$style.grayText)
                            }, toDisplayString(unref(locale).baseText(
                              `${unref(getErrorBaseKey)(row.errorCode)}.description`
                            )), 3)
                          ]),
                          key: "0"
                        } : void 0
                      ]), 1032, ["keypath"])
                    ]),
                    _: 2
                  }, 1032, ["class"])
                ]),
                _: 2
              }, 1024)) : (openBlock(), createElementBlock(Fragment, { key: 4 }, [
                createTextVNode(toDisplayString(row.status), 1)
              ], 64))
            ])
          ]),
          _: 1
        }, 8, ["data", "columns"])
      ], 2);
    };
  }
});
const container = "_container_okb74_123";
const grayText = "_grayText_okb74_129";
const alertText = "_alertText_okb74_133";
const warningText = "_warningText_okb74_151";
const errorText = "_errorText_okb74_155";
const style0$2 = {
  container,
  grayText,
  alertText,
  warningText,
  errorText
};
const cssModules$2 = {
  "$style": style0$2
};
const TestRunsTable = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__cssModules", cssModules$2]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
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
      const metricKeys = props.runs.reduce((acc, run) => {
        Object.keys(run.metrics ?? {}).forEach((metric) => acc.add(metric));
        return acc;
      }, /* @__PURE__ */ new Set());
      return [...metricKeys];
    });
    const metricColumns = computed(
      () => metrics.value.map((metric) => ({
        prop: `metrics.${metric}`,
        label: metric,
        sortable: true,
        showHeaderTooltip: true,
        sortMethod: (a, b) => (a.metrics?.[metric] ?? 0) - (b.metrics?.[metric] ?? 0),
        formatter: (row) => row.metrics?.[metric] !== void 0 ? (row.metrics?.[metric]).toFixed(2) : ""
      }))
    );
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
      void router.push({
        name: VIEWS.EVALUATION_RUNS_DETAIL,
        params: { runId: row.id }
      });
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.runs)
      }, [
        createVNode(MetricsChart, {
          "selected-metric": selectedMetric.value,
          "onUpdate:selectedMetric": _cache[0] || (_cache[0] = ($event) => selectedMetric.value = $event),
          runs: _ctx.runs
        }, null, 8, ["selected-metric", "runs"]),
        createVNode(TestRunsTable, {
          class: normalizeClass(_ctx.$style.runsTable),
          runs: _ctx.runs,
          columns: columns.value,
          selectable: true,
          "data-test-id": "past-runs-table",
          onRowClick: handleRowClick
        }, null, 8, ["class", "runs", "columns"])
      ], 2);
    };
  }
});
const runs$1 = "_runs_37xaf_123";
const style0$1 = {
  runs: runs$1
};
const cssModules$1 = {
  "$style": style0$1
};
const RunsSection = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__cssModules", cssModules$1]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "EvaluationsView",
  props: {
    name: {}
  },
  setup(__props) {
    const props = __props;
    const locale = useI18n();
    const toast = useToast();
    const evaluationStore = useEvaluationStore();
    const selectedMetric = ref("");
    const cancellingTestRun = ref(false);
    const runningTestRun = computed(() => runs2.value.find((run) => run.status === "running"));
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
      if (!runningTestRun.value) {
        return;
      }
      try {
        cancellingTestRun.value = true;
        await evaluationStore.cancelTestRun(runningTestRun.value.workflowId, runningTestRun.value.id);
      } catch (error) {
        toast.showError(error, locale.baseText("evaluation.listRuns.error.cantStopTestRun"));
        cancellingTestRun.value = false;
      }
    }
    const runs2 = computed(() => {
      const testRuns = Object.values(evaluationStore.testRunsById ?? {}).filter(
        ({ workflowId }) => workflowId === props.name
      );
      return orderBy(testRuns, (record) => new Date(record.runAt), ["asc"]).map((record, index) => ({
        ...record,
        index: index + 1
      }));
    });
    watch(runningTestRun, (run) => {
      if (!run) {
        cancellingTestRun.value = false;
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.evaluationsView)
      }, [
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.header)
        }, [
          runningTestRun.value ? (openBlock(), createBlock(unref(N8nButton), {
            key: 0,
            disabled: cancellingTestRun.value,
            class: normalizeClass(_ctx.$style.runOrStopTestButton),
            size: "small",
            "data-test-id": "stop-test-button",
            label: unref(locale).baseText("evaluation.stopTest"),
            type: "secondary",
            onClick: stopTest
          }, null, 8, ["disabled", "class", "label"])) : (openBlock(), createBlock(unref(N8nButton), {
            key: 1,
            class: normalizeClass(_ctx.$style.runOrStopTestButton),
            size: "small",
            "data-test-id": "run-test-button",
            label: unref(locale).baseText("evaluation.runTest"),
            type: "primary",
            onClick: runTest
          }, null, 8, ["class", "label"]))
        ], 2),
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.wrapper)
        }, [
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.content)
          }, [
            createVNode(RunsSection, {
              "selected-metric": selectedMetric.value,
              "onUpdate:selectedMetric": _cache[0] || (_cache[0] = ($event) => selectedMetric.value = $event),
              class: normalizeClass(_ctx.$style.runs),
              runs: runs2.value,
              "workflow-id": props.name
            }, null, 8, ["selected-metric", "class", "runs", "workflow-id"])
          ], 2)
        ], 2)
      ], 2);
    };
  }
});
const evaluationsView = "_evaluationsView_1191q_123";
const content = "_content_1191q_127";
const header = "_header_1191q_134";
const wrapper = "_wrapper_1191q_148";
const runOrStopTestButton = "_runOrStopTestButton_1191q_153";
const runs = "_runs_1191q_157";
const style0 = {
  evaluationsView,
  content,
  header,
  wrapper,
  runOrStopTestButton,
  runs
};
const cssModules = {
  "$style": style0
};
const EvaluationsView = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);
export {
  EvaluationsView as default
};
