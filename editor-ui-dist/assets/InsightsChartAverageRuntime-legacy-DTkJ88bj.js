;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-2Qb71DGn.js", "./merge-legacy-BVgKBTAX.js", "./dateformat-legacy-BaeIHy_2.js", "./insights.constants-legacy-Cw1kp4kH.js", "./insights.utils-legacy-B7Os_GTZ.js", "./chart-legacy-C56SXVvf.js", "./smartDecimal-legacy-D0tIAr6q.js", "./dist-legacy-Cpq_3X2H.js", "./chartjs.utils-legacy-eVH2Ms1I.js"], function (_export, _context) {
    "use strict";

    var computed, unref, defineComponent, createBlock, openBlock, useI18n, INSIGHTS_UNIT_MAPPING, GRANULARITY_DATE_FORMAT_MASK, transformInsightsAverageRunTime, index, smartDecimal, Line, generateLineChartOptions, generateLinearGradient, InsightsChartAverageRuntime_vue_vue_type_script_setup_true_lang_default, InsightsChartAverageRuntime_default;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_mergeLegacy00PJs) {}, function (_dateformatLegacy00VJs) {}, function (_insightsConstantsLegacy039Js) {
        INSIGHTS_UNIT_MAPPING = _insightsConstantsLegacy039Js.a;
        GRANULARITY_DATE_FORMAT_MASK = _insightsConstantsLegacy039Js.t;
      }, function (_insightsUtilsLegacy03bJs) {
        transformInsightsAverageRunTime = _insightsUtilsLegacy03bJs.r;
      }, function (_chartLegacy03HJs) {
        index = _chartLegacy03HJs.l;
      }, function (_smartDecimalLegacy04JJs) {
        smartDecimal = _smartDecimalLegacy04JJs.t;
      }, function (_distLegacy05dJs) {
        Line = _distLegacy05dJs.r;
      }, function (_chartjsUtilsLegacy06hJs) {
        generateLineChartOptions = _chartjsUtilsLegacy06hJs.n;
        generateLinearGradient = _chartjsUtilsLegacy06hJs.r;
      }],
      execute: function () {
        //#region src/features/execution/insights/components/charts/InsightsChartAverageRuntime.vue?vue&type=script&setup=true&lang.ts
        InsightsChartAverageRuntime_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "InsightsChartAverageRuntime",
          props: {
            data: {},
            type: {},
            granularity: {},
            startDate: {},
            endDate: {}
          },
          setup(__props) {
            const props = __props;
            const i18n = useI18n();
            const chartOptions = computed(() => generateLineChartOptions({
              plugins: {
                tooltip: {
                  callbacks: {
                    label: context => {
                      return `${context.dataset.label ?? ""} ${smartDecimal(context.parsed.y)}${INSIGHTS_UNIT_MAPPING[props.type](context.parsed.y)}`;
                    }
                  }
                }
              }
            }));
            const chartData = computed(() => {
              const labels = [];
              const data = [];
              for (const entry of props.data) {
                labels.push(GRANULARITY_DATE_FORMAT_MASK[props.granularity](entry.date));
                const value = transformInsightsAverageRunTime(entry.values.averageRunTime);
                data.push(value);
              }
              return {
                labels,
                datasets: [{
                  label: i18n.baseText("insights.banner.title.averageRunTime"),
                  data,
                  cubicInterpolationMode: "monotone",
                  fill: "origin",
                  backgroundColor: ctx => generateLinearGradient(ctx.chart.ctx, 292),
                  borderColor: "rgba(255, 64, 39, 1)"
                }]
              };
            });
            return (_ctx, _cache) => {
              return openBlock(), createBlock(unref(Line), {
                "data-test-id": "insights-chart-average-runtime",
                data: chartData.value,
                options: chartOptions.value,
                plugins: [unref(index)]
              }, null, 8, ["data", "options", "plugins"]);
            };
          }
        }); //#endregion
        //#region src/features/execution/insights/components/charts/InsightsChartAverageRuntime.vue
        _export("default", InsightsChartAverageRuntime_default = InsightsChartAverageRuntime_vue_vue_type_script_setup_true_lang_default); //#endregion
      }
    };
  });
})();