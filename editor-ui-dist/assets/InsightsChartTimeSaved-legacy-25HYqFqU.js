;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-CVC6fg6H.js", "./merge-legacy-C_ujDigB.js", "./dateformat-legacy-Xt1X-tys.js", "./insights.constants-legacy-D5Y8YhR_.js", "./insights.utils-legacy-BGFKnbE7.js", "./chart-legacy-DbW-cf8m.js", "./smartDecimal-legacy-BeOdMR2z.js", "./dist-legacy-8f5owWm6.js", "./chartjs.utils-legacy-DJMar437.js"], function (_export, _context) {
    "use strict";

    var computed, unref, defineComponent, createBlock, openBlock, useI18n, INSIGHTS_UNIT_MAPPING, GRANULARITY_DATE_FORMAT_MASK, transformInsightsTimeSaved, index, Line, generateLineChartOptions, generateLinearGradient, InsightsChartTimeSaved_vue_vue_type_script_setup_true_lang_default, InsightsChartTimeSaved_default;
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
        transformInsightsTimeSaved = _insightsUtilsLegacy035Js.o;
      }, function (_chartLegacy03BJs) {
        index = _chartLegacy03BJs.l;
      }, function (_smartDecimalLegacy04zJs) {}, function (_distLegacy04ZJs) {
        Line = _distLegacy04ZJs.r;
      }, function (_chartjsUtilsLegacy061Js) {
        generateLineChartOptions = _chartjsUtilsLegacy061Js.n;
        generateLinearGradient = _chartjsUtilsLegacy061Js.r;
      }],
      execute: function () {
        //#region src/features/execution/insights/components/charts/InsightsChartTimeSaved.vue?vue&type=script&setup=true&lang.ts
        InsightsChartTimeSaved_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "InsightsChartTimeSaved",
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
                      const label = context.dataset.label ?? "";
                      const value = Number(context.parsed.y);
                      return `${label} ${transformInsightsTimeSaved(value).toLocaleString("en-US")}${INSIGHTS_UNIT_MAPPING[props.type](value)}`;
                    }
                  }
                }
              },
              scales: {
                y: {
                  ticks: {
                    callback(tickValue) {
                      return transformInsightsTimeSaved(Number(tickValue));
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
                data.push(entry.values.timeSaved);
              }
              return {
                labels,
                datasets: [{
                  label: i18n.baseText("insights.banner.title.timeSaved"),
                  data,
                  fill: "origin",
                  cubicInterpolationMode: "monotone",
                  backgroundColor: ctx => generateLinearGradient(ctx.chart.ctx, 292),
                  borderColor: "rgba(255, 64, 39, 1)"
                }]
              };
            });
            return (_ctx, _cache) => {
              return openBlock(), createBlock(unref(Line), {
                "data-test-id": "insights-chart-time-saved",
                data: chartData.value,
                options: chartOptions.value,
                plugins: [unref(index)]
              }, null, 8, ["data", "options", "plugins"]);
            };
          }
        }); //#endregion
        //#region src/features/execution/insights/components/charts/InsightsChartTimeSaved.vue
        _export("default", InsightsChartTimeSaved_default = InsightsChartTimeSaved_vue_vue_type_script_setup_true_lang_default); //#endregion
      }
    };
  });
})();