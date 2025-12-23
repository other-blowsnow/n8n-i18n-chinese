import { Bt as toRaw, It as ref, J as onBeforeUnmount, L as h, P as defineComponent, Z as onMounted, _t as watch, ht as version, kt as isProxy, zt as shallowRef } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import { a as LineController, i as Chart, t as BarController } from "./chart-BxWK2ZOo.js";
var CommonProps = {
	data: {
		type: Object,
		required: true
	},
	options: {
		type: Object,
		default: () => ({})
	},
	plugins: {
		type: Array,
		default: () => []
	},
	datasetIdKey: {
		type: String,
		default: "label"
	},
	updateMode: {
		type: String,
		default: void 0
	}
};
var Props = {
	type: {
		type: String,
		required: true
	},
	...CommonProps
};
var compatProps = "3.5.13"[0] === "2" ? (internals, props) => Object.assign(internals, { attrs: props }) : (internals, props) => Object.assign(internals, props);
function toRawIfProxy(obj) {
	return isProxy(obj) ? toRaw(obj) : obj;
}
function cloneProxy(obj) {
	return isProxy(arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : obj) ? new Proxy(obj, {}) : obj;
}
function setOptions(chart, nextOptions) {
	const options = chart.options;
	if (options && nextOptions) Object.assign(options, nextOptions);
}
function setLabels(currentData, nextLabels) {
	currentData.labels = nextLabels;
}
function setDatasets(currentData, nextDatasets, datasetIdKey) {
	const addedDatasets = [];
	currentData.datasets = nextDatasets.map((nextDataset) => {
		const currentDataset = currentData.datasets.find((dataset) => dataset[datasetIdKey] === nextDataset[datasetIdKey]);
		if (!currentDataset || !nextDataset.data || addedDatasets.includes(currentDataset)) return { ...nextDataset };
		addedDatasets.push(currentDataset);
		Object.assign(currentDataset, nextDataset);
		return currentDataset;
	});
}
function cloneData(data, datasetIdKey) {
	const nextData = {
		labels: [],
		datasets: []
	};
	setLabels(nextData, data.labels);
	setDatasets(nextData, data.datasets, datasetIdKey);
	return nextData;
}
var Chart$1 = defineComponent({
	props: Props,
	setup(props, param) {
		let { expose } = param;
		const canvasRef = ref(null);
		const chartRef = shallowRef(null);
		expose({ chart: chartRef });
		const renderChart = () => {
			if (!canvasRef.value) return;
			const { type, data, options, plugins, datasetIdKey } = props;
			const proxiedData = cloneProxy(cloneData(data, datasetIdKey), data);
			chartRef.value = new Chart(canvasRef.value, {
				type,
				data: proxiedData,
				options: { ...options },
				plugins
			});
		};
		const destroyChart = () => {
			const chart = toRaw(chartRef.value);
			if (chart) {
				chart.destroy();
				chartRef.value = null;
			}
		};
		const update = (chart) => {
			chart.update(props.updateMode);
		};
		onMounted(renderChart);
		onBeforeUnmount(destroyChart);
		watch([() => props.options, () => props.data], (param$1, param1) => {
			let [nextOptionsProxy, nextDataProxy] = param$1, [prevOptionsProxy, prevDataProxy] = param1;
			const chart = toRaw(chartRef.value);
			if (!chart) return;
			let shouldUpdate = false;
			if (nextOptionsProxy) {
				const nextOptions = toRawIfProxy(nextOptionsProxy);
				const prevOptions = toRawIfProxy(prevOptionsProxy);
				if (nextOptions && nextOptions !== prevOptions) {
					setOptions(chart, nextOptions);
					shouldUpdate = true;
				}
			}
			if (nextDataProxy) {
				const nextLabels = toRawIfProxy(nextDataProxy.labels);
				const prevLabels = toRawIfProxy(prevDataProxy.labels);
				const nextDatasets = toRawIfProxy(nextDataProxy.datasets);
				const prevDatasets = toRawIfProxy(prevDataProxy.datasets);
				if (nextLabels !== prevLabels) {
					setLabels(chart.config.data, nextLabels);
					shouldUpdate = true;
				}
				if (nextDatasets && nextDatasets !== prevDatasets) {
					setDatasets(chart.config.data, nextDatasets, props.datasetIdKey);
					shouldUpdate = true;
				}
			}
			if (shouldUpdate) update(chart);
		}, { deep: true });
		return () => {
			return h("canvas", { ref: canvasRef });
		};
	}
});
function createTypedChart(type, registerables) {
	Chart.register(registerables);
	return defineComponent({
		props: CommonProps,
		setup(props, param) {
			let { expose } = param;
			const ref$1 = shallowRef(null);
			const reforwardRef = (chartRef) => {
				ref$1.value = chartRef?.chart;
			};
			expose({ chart: ref$1 });
			return () => {
				return h(Chart$1, compatProps({ ref: reforwardRef }, {
					type,
					...props
				}));
			};
		}
	});
}
var Bar = /* @__PURE__ */ createTypedChart("bar", BarController);
var Line = /* @__PURE__ */ createTypedChart("line", LineController);
export { Chart$1 as n, Line as r, Bar as t };
