;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-CVC6fg6H.js", "./merge-legacy-C_ujDigB.js", "./dateformat-legacy-Xt1X-tys.js", "./insights.constants-legacy-D5Y8YhR_.js", "./insights.utils-legacy-BGFKnbE7.js", "./chart-legacy-DbW-cf8m.js", "./smartDecimal-legacy-BeOdMR2z.js", "./dist-legacy-8f5owWm6.js", "./chartjs.utils-legacy-DJMar437.js"], function (_export, _context) {
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
      }, function (_mergeLegacy00PJs) {}, function (_dateformatLegacy00TJs) {}, function (_insightsConstantsLegacy033Js) {
        INSIGHTS_UNIT_MAPPING = _insightsConstantsLegacy033Js.a;
        GRANULARITY_DATE_FORMAT_MASK = _insightsConstantsLegacy033Js.t;
      }, function (_insightsUtilsLegacy035Js) {
        transformInsightsAverageRunTime = _insightsUtilsLegacy035Js.r;
      }, function (_chartLegacy03BJs) {
        index = _chartLegacy03BJs.l;
      }, function (_smartDecimalLegacy04zJs) {
        smartDecimal = _smartDecimalLegacy04zJs.t;
      }, function (_distLegacy04ZJs) {
        Line = _distLegacy04ZJs.r;
      }, function (_chartjsUtilsLegacy061Js) {
        generateLineChartOptions = _chartjsUtilsLegacy061Js.n;
        generateLinearGradient = _chartjsUtilsLegacy061Js.r;
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