import { d as defineComponent, q as computed, hL as GRANULARITY_DATE_FORMAT_MASK, hR as transformInsightsAverageRunTime, c as useI18n, e as createBlock, g as openBlock, m as unref, hP as index, hO as INSIGHTS_UNIT_MAPPING } from "./index-CkuwrFdE.js";
import { a as generateLineChartOptions, b as generateLinearGradient } from "./chartjs.utils-DcH-dTcc.js";
import { s as smartDecimal } from "./InsightsSummary-BJfpje2k.js";
import { L as Line } from "./index-DqdQDFjq.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "InsightsChartAverageRuntime",
  props: {
    data: {},
    type: {},
    granularity: {}
  },
  setup(__props) {
    const props = __props;
    const i18n = useI18n();
    const chartOptions = computed(
      () => generateLineChartOptions({
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
        const value = transformInsightsAverageRunTime(entry.values.averageRunTime);
        data.push(value);
      }
      return {
        labels,
        datasets: [
          {
            label: i18n.baseText("insights.banner.title.averageRunTime"),
            data,
            cubicInterpolationMode: "monotone",
            fill: "origin",
            backgroundColor: (ctx) => generateLinearGradient(ctx.chart.ctx, 292),
            borderColor: "rgba(255, 64, 39, 1)"
          }
        ]
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Line), {
        data: chartData.value,
        options: chartOptions.value,
        plugins: [unref(index)]
      }, null, 8, ["data", "options", "plugins"]);
    };
  }
});
export {
  _sfc_main as default
};
