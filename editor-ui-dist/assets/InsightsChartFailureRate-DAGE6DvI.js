import { $ as openBlock, N as defineComponent, S as computed, Wt as unref, w as createBlock } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import { C as useCssVar, bt as useI18n } from "./_MapCache-65UNw25j.js";
import "./merge-BTwzEvFa.js";
import "./dateformat-CIyrhJiH.js";
import { a as INSIGHTS_UNIT_MAPPING, t as GRANULARITY_DATE_FORMAT_MASK } from "./insights.constants-C04mDAF4.js";
import { s as transformInsightsFailureRate } from "./insights.utils-VPfr2jAI.js";
import { t as smartDecimal } from "./smartDecimal-Dgs1DTzw.js";
import { t as Bar } from "./dist-jil636Bm.js";
import { t as generateBarChartOptions } from "./chartjs.utils-BMhiGGbU.js";
var InsightsChartFailureRate_default = /* @__PURE__ */ defineComponent({
	__name: "InsightsChartFailureRate",
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
			return `${context.dataset.label ?? ""} ${smartDecimal(context.parsed.y)}${INSIGHTS_UNIT_MAPPING[props.type](context.parsed.y)}`;
		} } } } }));
		const chartData = computed(() => {
			const labels = [];
			const data = [];
			for (const entry of props.data) {
				labels.push(GRANULARITY_DATE_FORMAT_MASK[props.granularity](entry.date));
				data.push(transformInsightsFailureRate(entry.values.failureRate));
			}
			return {
				labels,
				datasets: [{
					label: i18n.baseText("insights.banner.title.failureRate"),
					data,
					backgroundColor: colorPrimary.value
				}]
			};
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Bar), {
				"data-test-id": "insights-chart-failure-rate",
				data: chartData.value,
				options: chartOptions.value
			}, null, 8, ["data", "options"]);
		};
	}
});
export { InsightsChartFailureRate_default as default };
