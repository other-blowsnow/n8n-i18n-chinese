import { C as computed, Gt as unref, P as defineComponent, T as createBlock, et as openBlock } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-8-eqnC2S.js";
import "./merge-O0QrB7po.js";
import "./dateformat-Bc6vycUF.js";
import { a as INSIGHTS_UNIT_MAPPING, t as GRANULARITY_DATE_FORMAT_MASK } from "./insights.constants-Q1hG0DUw.js";
import { a as transformInsightsAverageRunTime } from "./insights.utils-CjNWaY5O.js";
import { l as index } from "./chart-D3YKT_RK.js";
import { t as smartDecimal } from "./smartDecimal-DbDs_fqN.js";
import { r as Line } from "./dist-icm1uagS.js";
import { n as generateLineChartOptions, r as generateLinearGradient } from "./chartjs.utils-B8AE65xX.js";
var InsightsChartAverageRuntime_default = /* @__PURE__ */ defineComponent({
	__name: "InsightsChartAverageRuntime",
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
		const chartOptions = computed(() => generateLineChartOptions({ plugins: { tooltip: { callbacks: { label: (context) => {
			return `${context.dataset.label ?? ""} ${smartDecimal(context.parsed.y)}${INSIGHTS_UNIT_MAPPING[props.type](context.parsed.y)}`;
		} } } } }));
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
				datasets: [{
					label: i18n.baseText("insights.banner.title.averageRunTime"),
					data,
					cubicInterpolationMode: "monotone",
					fill: "origin",
					backgroundColor: (ctx) => generateLinearGradient(ctx.chart.ctx, 292),
					borderColor: "rgba(255, 64, 39, 1)"
				}]
			};
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Line), {
				"data-test-id": "insights-chart-average-runtime",
				data: chartData.value,
				options: chartOptions.value,
				plugins: [unref(index)]
			}, null, 8, [
				"data",
				"options",
				"plugins"
			]);
		};
	}
});
export { InsightsChartAverageRuntime_default as default };
