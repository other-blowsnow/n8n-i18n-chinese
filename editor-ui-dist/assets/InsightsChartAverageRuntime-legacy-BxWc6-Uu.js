;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy--Sn1h8On.js", "./_MapCache-legacy-D8JKoBWh.js", "./CalendarDate-legacy-BUvNgcoo.js", "./merge-legacy-DGYepJ5X.js", "./dateformat-legacy-C4HUJTCr.js", "./insights.constants-legacy-CQF1GF20.js", "./insights.utils-legacy-Cbns7OJY.js", "./chart-legacy-B9hE9qID.js", "./smartDecimal-legacy-DBGZXJnQ.js", "./dist-legacy-Cj1qCP8b.js", "./chartjs.utils-legacy-D0hZrltT.js"], function (_export, _context) {
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
      }, function (_CalendarDateLegacy00NJs) {}, function (_mergeLegacy00VJs) {}, function (_dateformatLegacy00$Js) {}, function (_insightsConstantsLegacy03fJs) {
        INSIGHTS_UNIT_MAPPING = _insightsConstantsLegacy03fJs.a;
        GRANULARITY_DATE_FORMAT_MASK = _insightsConstantsLegacy03fJs.t;
      }, function (_insightsUtilsLegacy03hJs) {
        transformInsightsAverageRunTime = _insightsUtilsLegacy03hJs.a;
      }, function (_chartLegacy03VJs) {
        index = _chartLegacy03VJs.l;
      }, function (_smartDecimalLegacy04XJs) {
        smartDecimal = _smartDecimalLegacy04XJs.t;
      }, function (_distLegacy05xJs) {
        Line = _distLegacy05xJs.r;
      }, function (_chartjsUtilsLegacy06DJs) {
        generateLineChartOptions = _chartjsUtilsLegacy06DJs.n;
        generateLinearGradient = _chartjsUtilsLegacy06DJs.r;
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