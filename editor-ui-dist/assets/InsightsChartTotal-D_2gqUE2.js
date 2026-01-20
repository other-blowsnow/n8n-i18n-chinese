import { C as computed, Gt as unref, P as defineComponent, T as createBlock, et as openBlock } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { C as useCssVar, _t as useI18n } from "./_MapCache-nsH9LP_7.js";
import "./merge-CM3retKU.js";
import "./dateformat-BeHi9sF4.js";
import { t as GRANULARITY_DATE_FORMAT_MASK } from "./insights.constants-98xWnZQu.js";
import { t as Bar } from "./dist-C4hPgTYg.js";
import { t as generateBarChartOptions } from "./chartjs.utils-V4UkW_Z3.js";
var InsightsChartTotal_default = /* @__PURE__ */ defineComponent({
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
