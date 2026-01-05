import { C as computed, Gt as unref, P as defineComponent, T as createBlock, et as openBlock } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import { _t as useI18n } from "./_MapCache-JtHpcr1I.js";
import "./CalendarDate-zWqgZMlk.js";
import "./merge-D-aSQi_3.js";
import "./dateformat-CM9k0--B.js";
import { a as INSIGHTS_UNIT_MAPPING, t as GRANULARITY_DATE_FORMAT_MASK } from "./insights.constants-C8GITe6H.js";
import { a as transformInsightsAverageRunTime } from "./insights.utils-D9Ze03_V.js";
import { l as index } from "./chart-CE3HWIkr.js";
import { t as smartDecimal } from "./smartDecimal-DK6-_VSq.js";
import { r as Line } from "./dist-DP_8je0B.js";
import { n as generateLineChartOptions, r as generateLinearGradient } from "./chartjs.utils-Bj2tiY3K.js";
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
