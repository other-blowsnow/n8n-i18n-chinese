import { C as computed, Gt as unref, P as defineComponent, T as createBlock, et as openBlock } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-8-eqnC2S.js";
import "./merge-O0QrB7po.js";
import "./dateformat-Bc6vycUF.js";
import { a as INSIGHTS_UNIT_MAPPING, t as GRANULARITY_DATE_FORMAT_MASK } from "./insights.constants-Q1hG0DUw.js";
import { c as transformInsightsTimeSaved } from "./insights.utils-CjNWaY5O.js";
import { l as index } from "./chart-D3YKT_RK.js";
import { r as Line } from "./dist-icm1uagS.js";
import { n as generateLineChartOptions, r as generateLinearGradient } from "./chartjs.utils-B8AE65xX.js";
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
