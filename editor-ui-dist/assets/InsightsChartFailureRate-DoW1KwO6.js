import { $ as openBlock, N as defineComponent, S as computed, Wt as unref, w as createBlock } from "./vue.runtime.esm-bundler-C6vn67cX.js";
import { s as useI18n } from "./src-DQKWamAF.js";
import { l as useCssVar } from "./core-nZc0i8VB.js";
import { a as INSIGHTS_UNIT_MAPPING, t as GRANULARITY_DATE_FORMAT_MASK } from "./insights.constants-CT01MKHN.js";
import { s as transformInsightsFailureRate } from "./insights.utils-CJFIu2VN.js";
import { t as smartDecimal } from "./smartDecimal-DULs7Ekk.js";
import { t as Bar } from "./dist-jkXA3UZa.js";
import { t as generateBarChartOptions } from "./chartjs.utils-BWt9_ZjW.js";
//#endregion
//#region src/features/execution/insights/components/charts/InsightsChartFailureRate.vue
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
//#endregion
export { InsightsChartFailureRate_default as default };
