import { d as defineComponent, fX as useCssVar, x as computed, hz as GRANULARITY_DATE_FORMAT_MASK, hB as transformInsightsFailureRate, c as useI18n, e as createBlock, g as openBlock, l as unref, hC as INSIGHTS_UNIT_MAPPING } from "./index-BsWH3eYA.js";
import { g as generateBarChartOptions } from "./chartjs.utils-Cpi8kgvL.js";
import { s as smartDecimal } from "./InsightsSummary-gyLfjHkG.js";
import { B as Bar } from "./index-D1iGXxLc.js";
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
