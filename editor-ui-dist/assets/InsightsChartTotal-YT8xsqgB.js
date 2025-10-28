import { C as computed, Gt as unref, P as defineComponent, T as createBlock, et as openBlock } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { C as useCssVar, gt as useI18n } from "./_MapCache-DZMn6F95.js";
import "./merge-BF1fect_.js";
import "./dateformat-D7TIhVd4.js";
import { t as GRANULARITY_DATE_FORMAT_MASK } from "./insights.constants-BkI0n967.js";
import "./chart-C2tFerhP.js";
import { t as Bar } from "./dist-DQo7s2CD.js";
import "./smartDecimal-Bi50OE4b.js";
import { t as generateBarChartOptions } from "./chartjs.utils-CNtV40LR.js";
var InsightsChartTotal_default = /* @__PURE__ */ defineComponent({
	__name: "InsightsChartTotal",
	props: {
		data: {},
		type: {},
		granularity: {}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const colorPrimary = useCssVar("--color--primary", document.body);
		const chartOptions = computed(() => generateBarChartOptions({ plugins: { tooltip: { itemSort: (a) => a.dataset.label === i18n.baseText("insights.chart.succeeded") ? -1 : 1 } } }));
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
});
export { InsightsChartTotal_default as default };
