import { C as computed, Gt as unref, P as defineComponent, T as createBlock, et as openBlock } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import { gt as useI18n } from "./_MapCache-DZpzsuCB.js";
import "./CalendarDate-B-JEhNYg.js";
import "./merge-D6lLi7TL.js";
import "./dateformat-hG8NERse.js";
import { a as INSIGHTS_UNIT_MAPPING, t as GRANULARITY_DATE_FORMAT_MASK } from "./insights.constants-B7y0cvTb.js";
import { a as transformInsightsAverageRunTime } from "./insights.utils-Cp5pMXsI.js";
import { l as index } from "./chart-BxWK2ZOo.js";
import { t as smartDecimal } from "./smartDecimal-Bi50OE4b.js";
import { r as Line } from "./dist-JIm44DPf.js";
import { n as generateLineChartOptions, r as generateLinearGradient } from "./chartjs.utils-DK-UavFb.js";
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
