import { C as computed, Gt as unref, P as defineComponent, T as createBlock, et as openBlock } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { C as useCssVar, yt as useI18n } from "./_MapCache-8-eqnC2S.js";
import "./merge-O0QrB7po.js";
import "./dateformat-Bc6vycUF.js";
import { t as GRANULARITY_DATE_FORMAT_MASK } from "./insights.constants-Q1hG0DUw.js";
import { t as smartDecimal } from "./smartDecimal-DbDs_fqN.js";
import { t as Bar } from "./dist-icm1uagS.js";
import { t as generateBarChartOptions } from "./chartjs.utils-B8AE65xX.js";
var InsightsChartFailed_default = /* @__PURE__ */ defineComponent({
	__name: "InsightsChartFailed",
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
		const chartOptions = computed(() => generateBarChartOptions({ plugins: { tooltip: { callbacks: { label: (context) => {
			return `${context.dataset.label ?? ""} ${smartDecimal(context.parsed.y)}`;
		} } } } }));
		const chartData = computed(() => {
			const labels = [];
			const data = [];
			for (const entry of props.data) {
				labels.push(GRANULARITY_DATE_FORMAT_MASK[props.granularity](entry.date));
				data.push(entry.values.failed);
			}
			return {
				labels,
				datasets: [{
					label: i18n.baseText("insights.chart.failed"),
					data,
					backgroundColor: colorPrimary.value
				}]
			};
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Bar), {
				"data-test-id": "insights-chart-failed",
				data: chartData.value,
				options: chartOptions.value
			}, null, 8, ["data", "options"]);
		};
	}
});
export { InsightsChartFailed_default as default };
