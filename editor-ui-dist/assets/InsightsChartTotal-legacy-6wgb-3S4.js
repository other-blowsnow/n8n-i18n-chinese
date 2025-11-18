;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-CVC6fg6H.js", "./merge-legacy-C_ujDigB.js", "./dateformat-legacy-Xt1X-tys.js", "./insights.constants-legacy-D5Y8YhR_.js", "./chart-legacy-DbW-cf8m.js", "./smartDecimal-legacy-BeOdMR2z.js", "./dist-legacy-8f5owWm6.js", "./chartjs.utils-legacy-DJMar437.js"], function (_export, _context) {
    "use strict";

    var computed, unref, defineComponent, createBlock, openBlock, useCssVar, useI18n, GRANULARITY_DATE_FORMAT_MASK, Bar, generateBarChartOptions, InsightsChartTotal_vue_vue_type_script_setup_true_lang_default, InsightsChartTotal_default;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
      }, function (_MapCacheLegacy005Js) {
        useCssVar = _MapCacheLegacy005Js.C;
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_mergeLegacy00PJs) {}, function (_dateformatLegacy00TJs) {}, function (_insightsConstantsLegacy033Js) {
        GRANULARITY_DATE_FORMAT_MASK = _insightsConstantsLegacy033Js.t;
      }, function (_chartLegacy03BJs) {}, function (_smartDecimalLegacy04zJs) {}, function (_distLegacy04ZJs) {
        Bar = _distLegacy04ZJs.t;
      }, function (_chartjsUtilsLegacy061Js) {
        generateBarChartOptions = _chartjsUtilsLegacy061Js.t;
      }],
      execute: function () {
        //#region src/features/execution/insights/components/charts/InsightsChartTotal.vue?vue&type=script&setup=true&lang.ts
        InsightsChartTotal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "InsightsChartTotal",
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
            const colorPrimary = useCssVar("--color--primary", document.body);
            const chartOptions = computed(() => generateBarChartOptions({
              plugins: {
                tooltip: {
                  itemSort: a => a.dataset.label === i18n.baseText("insights.chart.succeeded") ? -1 : 1
                }
              }
            }));
            const chartData = computed(() => {
              const labels = [];
              const succeededData = [];
              const failedData = [];
              for (const entry of props.data) {
                labels.push(GRANULARITY_DATE_FORMAT_MASK[props.granularity](entry.date));
                succeededData.push(entry.values.succeeded);
                failedData.push(entry.values.failed);
              }
              return {
                labels,
                datasets: [{
                  label: i18n.baseText("insights.chart.failed"),
                  data: failedData,
                  backgroundColor: colorPrimary.value
                }, {
                  label: i18n.baseText("insights.chart.succeeded"),
                  data: succeededData,
                  backgroundColor: "#3E999F"
                }]
              };
            });
            return (_ctx, _cache) => {
              return openBlock(), createBlock(unref(Bar), {
                "data-test-id": "insights-chart-total",
                data: chartData.value,
                options: chartOptions.value
              }, null, 8, ["data", "options"]);
            };
          }
        }); //#endregion
        //#region src/features/execution/insights/components/charts/InsightsChartTotal.vue
        _export("default", InsightsChartTotal_default = InsightsChartTotal_vue_vue_type_script_setup_true_lang_default); //#endregion
      }
    };
  });
})();