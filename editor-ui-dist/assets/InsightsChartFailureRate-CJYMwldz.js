import { d as defineComponent, g1 as useCssVar, x as computed, hW as GRANULARITY_DATE_FORMAT_MASK, hY as transformInsightsFailureRate, c as useI18n, e as createBlock, g as openBlock, l as unref, hZ as INSIGHTS_UNIT_MAPPING } from "./index-CeS8eiHF.js";
import { g as generateBarChartOptions } from "./chartjs.utils-A6yLR612.js";
import { s as smartDecimal } from "./InsightsSummary-Cd0OcI_I.js";
import { B as Bar } from "./index-CLGI7gch.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "InsightsChartFailureRate",
  props: {
    data: {},
    type: {},
    granularity: {}
  },
  setup(__props) {
    const props = __props;
    const i18n = useI18n();
    const colorPrimary = useCssVar("--color-primary", document.body);
    const chartOptions = computed(
      () => generateBarChartOptions({
        plugins: {
          tooltip: {
            callbacks: {
              label: (context) => {
                const label = context.dataset.label ?? "";
                return `${label} ${smartDecimal(context.parsed.y)}${INSIGHTS_UNIT_MAPPING[props.type](context.parsed.y)}`;
              }
            }
          }
        }
      })
    );
    const chartData = computed(() => {
      const labels = [];
      const data = [];
      for (const entry of props.data) {
        labels.push(GRANULARITY_DATE_FORMAT_MASK[props.granularity](entry.date));
        data.push(transformInsightsFailureRate(entry.values.failureRate));
      }
      return {
        labels,
        datasets: [
          {
            label: i18n.baseText("insights.banner.title.failureRate"),
            data,
            backgroundColor: colorPrimary.value
          }
        ]
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
});
export {
  _sfc_main as default
};
