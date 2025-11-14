import { C as computed, Gt as unref, P as defineComponent, T as createBlock, et as openBlock } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { gt as useI18n } from "./_MapCache-CGDCbL4z.js";
import "./merge-qpXyOahO.js";
import "./dateformat-D7TIhVd4.js";
import { a as INSIGHTS_UNIT_MAPPING, t as GRANULARITY_DATE_FORMAT_MASK } from "./insights.constants-NogjFJ3a.js";
import { o as transformInsightsTimeSaved } from "./insights.utils-5VTFh6JU.js";
import { l as index } from "./chart-BI8B7UPV.js";
import "./smartDecimal-5rgLDM96.js";
import { r as Line } from "./dist-CWw8iddm.js";
import { n as generateLineChartOptions, r as generateLinearGradient } from "./chartjs.utils-B9iuZjpo.js";
var InsightsChartTimeSaved_default = /* @__PURE__ */ defineComponent({
	__name: "InsightsChartTimeSaved",
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
		const chartOptions = computed(() => generateLineChartOptions({
			plugins: { tooltip: { callbacks: { label: (context) => {
				const label = context.dataset.label ?? "";
				const value = Number(context.parsed.y);
				return `${label} ${transformInsightsTimeSaved(value).toLocaleString("en-US")}${INSIGHTS_UNIT_MAPPING[props.type](value)}`;
			} } } },
			scales: { y: { ticks: { callback(tickValue) {
				return transformInsightsTimeSaved(Number(tickValue));
			} } } }
		}));
		const chartData = computed(() => {
			const labels = [];
			const data = [];
			for (const entry of props.data) {
				labels.push(GRANULARITY_DATE_FORMAT_MASK[props.granularity](entry.date));
				data.push(entry.values.timeSaved);
			}
			return {
				labels,
				datasets: [{
					label: i18n.baseText("insights.banner.title.timeSaved"),
					data,
					fill: "origin",
					cubicInterpolationMode: "monotone",
					backgroundColor: (ctx) => generateLinearGradient(ctx.chart.ctx, 292),
					borderColor: "rgba(255, 64, 39, 1)"
				}]
			};
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Line), {
				"data-test-id": "insights-chart-time-saved",
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
export { InsightsChartTimeSaved_default as default };
