import { d as defineComponent, h9 as useCssVar, x as computed, iq as GRANULARITY_DATE_FORMAT_MASK, c as useI18n, e as createBlock, g as openBlock, m as unref } from "./index-C2H_FNri.js";
import { g as generateBarChartOptions } from "./chartjs.utils-IPPosM7Q.js";
import { s as smartDecimal } from "./InsightsSummary-DT5SD74_.js";
import { B as Bar } from "./index-ikSjzADd.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "InsightsChartFailed",
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
                return `${label} ${smartDecimal(context.parsed.y)}`;
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
        data.push(entry.values.failed);
      }
      return {
        labels,
        datasets: [
          {
            label: i18n.baseText("insights.chart.failed"),
            data,
            backgroundColor: colorPrimary.value
          }
        ]
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Bar), {
        data: chartData.value,
        options: chartOptions.value
      }, null, 8, ["data", "options"]);
    };
  }
});
export {
  _sfc_main as default
};
