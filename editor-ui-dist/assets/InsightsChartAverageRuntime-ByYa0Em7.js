import { $ as openBlock, N as defineComponent, S as computed, Wt as unref, w as createBlock } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { at as useI18n } from "./core-CiwaTfw5.js";
import { a as INSIGHTS_UNIT_MAPPING, t as GRANULARITY_DATE_FORMAT_MASK } from "./insights.constants-DETQBFyk.js";
import { o as transformInsightsAverageRunTime } from "./insights.utils-Br0V14TA.js";
import { l as index } from "./chart-UArRpwDi.js";
import { t as smartDecimal } from "./smartDecimal-JTza7CAT.js";
import { r as Line } from "./dist-OMx-1j7O.js";
import { n as generateLineChartOptions, r as generateLinearGradient } from "./chartjs.utils-B22kAsyE.js";
//#endregion
//#region src/features/execution/insights/components/charts/InsightsChartAverageRuntime.vue
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
//#endregion
export { InsightsChartAverageRuntime_default as default };
