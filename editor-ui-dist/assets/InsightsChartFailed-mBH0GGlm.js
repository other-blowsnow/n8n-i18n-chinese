import { $ as openBlock, Gt as unref, N as defineComponent, S as computed, w as createBlock } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { s as useI18n } from "./src-BuOkMaP4.js";
import { l as useCssVar } from "./core-CxAuVuwP.js";
import { t as GRANULARITY_DATE_FORMAT_MASK } from "./insights.constants-SKZDyOEk.js";
import { t as smartDecimal } from "./smart-decimal-euSaWHaA.js";
import { t as Bar } from "./dist-B-iX0_9R.js";
import { t as generateBarChartOptions } from "./chartjs.utils-DQ9_22-k.js";
//#endregion
//#region src/features/execution/insights/components/charts/InsightsChartFailed.vue
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
//#endregion
export { InsightsChartFailed_default as default };
