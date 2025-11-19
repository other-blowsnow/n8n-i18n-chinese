;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./chart-legacy-DbW-cf8m.js"], function (_export, _context) {
    "use strict";

    var toRaw, ref, onBeforeUnmount, h, defineComponent, onMounted, watch, version, isProxy, shallowRef, LineController, Chart, BarController, CommonProps, Props, compatProps, Chart$1, Bar, Line;
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
      currentData.datasets = nextDatasets.map(nextDataset => {
        const currentDataset = currentData.datasets.find(dataset => dataset[datasetIdKey] === nextDataset[datasetIdKey]);
        if (!currentDataset || !nextDataset.data || addedDatasets.includes(currentDataset)) return {
          ...nextDataset
        };
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
    function createTypedChart(type, registerables) {
      Chart.register(registerables);
      return defineComponent({
        props: CommonProps,
        setup(props, param) {
          let {
            expose
          } = param;
          const ref$1 = shallowRef(null);
          const reforwardRef = chartRef => {
            ref$1.value = chartRef?.chart;
          };
          expose({
            chart: ref$1
          });
          return () => {
            return h(Chart$1, compatProps({
              ref: reforwardRef
            }, {
              type,
              ...props
            }));
          };
        }
      });
    }
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        toRaw = _vueRuntimeEsmBundlerLegacy003Js.Bt;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
        onBeforeUnmount = _vueRuntimeEsmBundlerLegacy003Js.J;
        h = _vueRuntimeEsmBundlerLegacy003Js.L;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        onMounted = _vueRuntimeEsmBundlerLegacy003Js.Z;
        watch = _vueRuntimeEsmBundlerLegacy003Js._t;
        version = _vueRuntimeEsmBundlerLegacy003Js.ht;
        isProxy = _vueRuntimeEsmBundlerLegacy003Js.kt;
        shallowRef = _vueRuntimeEsmBundlerLegacy003Js.zt;
      }, function (_chartLegacy03BJs) {
        LineController = _chartLegacy03BJs.a;
        Chart = _chartLegacy03BJs.i;
        BarController = _chartLegacy03BJs.t;
      }],
      execute: function () {
        //#region ../../../node_modules/.pnpm/vue-chartjs@5.2.0_chart.js@4.4.0_vue@3.5.13_typescript@5.9.2_/node_modules/vue-chartjs/dist/index.js
        CommonProps = {
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
        Props = {
          type: {
            type: String,
            required: true
          },
          ...CommonProps
        };
        compatProps = "3.5.13"[0] === "2" ? (internals, props) => Object.assign(internals, {
          attrs: props
        }) : (internals, props) => Object.assign(internals, props);
        _export("n", Chart$1 = defineComponent({
          props: Props,
          setup(props, param) {
            let {
              expose
            } = param;
            const canvasRef = ref(null);
            const chartRef = shallowRef(null);
            expose({
              chart: chartRef
            });
            const renderChart = () => {
              if (!canvasRef.value) return;
              const {
                type,
                data,
                options,
                plugins,
                datasetIdKey
              } = props;
              const proxiedData = cloneProxy(cloneData(data, datasetIdKey), data);
              chartRef.value = new Chart(canvasRef.value, {
                type,
                data: proxiedData,
                options: {
                  ...options
                },
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
            const update = chart => {
              chart.update(props.updateMode);
            };
            onMounted(renderChart);
            onBeforeUnmount(destroyChart);
            watch([() => props.options, () => props.data], (param$1, param1) => {
              let [nextOptionsProxy, nextDataProxy] = param$1,
                [prevOptionsProxy, prevDataProxy] = param1;
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
            }, {
              deep: true
            });
            return () => {
              return h("canvas", {
                ref: canvasRef
              });
            };
          }
        }));
        _export("t", Bar = /* @__PURE__ */createTypedChart("bar", BarController));
        _export("r", Line = /* @__PURE__ */createTypedChart("line", LineController)); //#endregion
      }
    };
  });
})();