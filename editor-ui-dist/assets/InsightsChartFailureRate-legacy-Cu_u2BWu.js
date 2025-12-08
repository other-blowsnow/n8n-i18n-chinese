;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy--Sn1h8On.js", "./_MapCache-legacy-D8JKoBWh.js", "./CalendarDate-legacy-BUvNgcoo.js", "./merge-legacy-DGYepJ5X.js", "./dateformat-legacy-C4HUJTCr.js", "./insights.constants-legacy-CQF1GF20.js", "./insights.utils-legacy-Cbns7OJY.js", "./chart-legacy-B9hE9qID.js", "./smartDecimal-legacy-DBGZXJnQ.js", "./dist-legacy-Cj1qCP8b.js", "./chartjs.utils-legacy-D0hZrltT.js"], function (_export, _context) {
    "use strict";

    var computed, unref, defineComponent, createBlock, openBlock, useCssVar, useI18n, INSIGHTS_UNIT_MAPPING, GRANULARITY_DATE_FORMAT_MASK, transformInsightsFailureRate, smartDecimal, Bar, generateBarChartOptions, InsightsChartFailureRate_vue_vue_type_script_setup_true_lang_default, InsightsChartFailureRate_default;
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
      }, function (_CalendarDateLegacy00NJs) {}, function (_mergeLegacy00VJs) {}, function (_dateformatLegacy00$Js) {}, function (_insightsConstantsLegacy03fJs) {
        INSIGHTS_UNIT_MAPPING = _insightsConstantsLegacy03fJs.a;
        GRANULARITY_DATE_FORMAT_MASK = _insightsConstantsLegacy03fJs.t;
      }, function (_insightsUtilsLegacy03hJs) {
        transformInsightsFailureRate = _insightsUtilsLegacy03hJs.o;
      }, function (_chartLegacy03VJs) {}, function (_smartDecimalLegacy04XJs) {
        smartDecimal = _smartDecimalLegacy04XJs.t;
      }, function (_distLegacy05xJs) {
        Bar = _distLegacy05xJs.t;
      }, function (_chartjsUtilsLegacy06DJs) {
        generateBarChartOptions = _chartjsUtilsLegacy06DJs.t;
      }],
      execute: function () {
        //#region src/features/execution/insights/components/charts/InsightsChartFailureRate.vue?vue&type=script&setup=true&lang.ts
        InsightsChartFailureRate_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "InsightsChartFailureRate",
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
                data.push(transformInsightsFailureRate(entry.values.failureRate));
              }
              return {
                labels,
                datasets: [{
                  label: i18n.baseText("insights.banner.title.failureRate"),
                  data,
                  backgroundColor: colorPrimary.value
                }]
              };
            });
            return (_ctx, _cache) => {
              return openBlock(), createBlock(unref(Bar), {
                "data-test-id": "insights-chart-failure-rate",
                data: chartData.value,
                options: chartOptions.value
              }, null, 8, ["data", "options"]);
            };
          }
        }); //#endregion
        //#region src/features/execution/insights/components/charts/InsightsChartFailureRate.vue
        _export("default", InsightsChartFailureRate_default = InsightsChartFailureRate_vue_vue_type_script_setup_true_lang_default); //#endregion
      }
    };
  });
})();