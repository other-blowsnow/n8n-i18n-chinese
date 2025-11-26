;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-2Qb71DGn.js", "./merge-legacy-BVgKBTAX.js", "./dateformat-legacy-BaeIHy_2.js", "./insights.constants-legacy-Cw1kp4kH.js", "./insights.utils-legacy-B7Os_GTZ.js", "./chart-legacy-C56SXVvf.js", "./smartDecimal-legacy-D0tIAr6q.js", "./dist-legacy-Cpq_3X2H.js", "./chartjs.utils-legacy-eVH2Ms1I.js"], function (_export, _context) {
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
      }, function (_mergeLegacy00PJs) {}, function (_dateformatLegacy00VJs) {}, function (_insightsConstantsLegacy039Js) {
        INSIGHTS_UNIT_MAPPING = _insightsConstantsLegacy039Js.a;
        GRANULARITY_DATE_FORMAT_MASK = _insightsConstantsLegacy039Js.t;
      }, function (_insightsUtilsLegacy03bJs) {
        transformInsightsFailureRate = _insightsUtilsLegacy03bJs.i;
      }, function (_chartLegacy03HJs) {}, function (_smartDecimalLegacy04JJs) {
        smartDecimal = _smartDecimalLegacy04JJs.t;
      }, function (_distLegacy05dJs) {
        Bar = _distLegacy05dJs.t;
      }, function (_chartjsUtilsLegacy06hJs) {
        generateBarChartOptions = _chartjsUtilsLegacy06hJs.t;
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