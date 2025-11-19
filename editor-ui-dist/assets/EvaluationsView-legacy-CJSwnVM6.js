;
(function () {
  System.register(["./chunk-legacy-Re9CbdfL.js", "./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-CVC6fg6H.js", "./src-legacy-D3-Bo0sy.js", "./en-legacy-Bgme8Vbm.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-Bk9bFklR.js", "./table-legacy-CJnsmGne.js", "./icon-legacy-1U_nlJHf.js", "./empty-legacy-DnVUoqbC.js", "./useTelemetry-legacy-BdQlQKwu.js", "./useToast-legacy-D8KBGcJW.js", "./sanitize-html-legacy-DfOUEbdf.js", "./path-browserify-legacy-DJbEMZcd.js", "./constants-legacy-B0GcWb62.js", "./merge-legacy-C_ujDigB.js", "./dateformat-legacy-Xt1X-tys.js", "./useDebounce-legacy-IwiEyerO.js", "./useExternalHooks-legacy-CI7QLTD3.js", "./dateFormatter-legacy-wx3IBOwQ.js", "./orderBy-legacy-CdPMW7_h.js", "./chart-legacy-DbW-cf8m.js", "./dist-legacy-8f5owWm6.js", "./evaluation.constants-legacy-CyFmy99U.js", "./AnimatedSpinner-legacy-a37yY0a9.js"], function (_export, _context) {
    "use strict";

    var __toESM, computed, createElementBlock, unref, ref, createVNode, defineComponent, toDisplayString, createBlock, mergeModels, Fragment, normalizeClass, watch, withCtx, openBlock, useModel, renderList, createTextVNode, createSlots, watchEffect, createBaseVNode, useCssVar, I18nT, useI18n, N8nOption_default, N8nText_default, N8nButton_default, N8nHeading_default, N8nSelect_default, N8nTooltip_default, N8nIcon_default, __plugin_vue_export_helper_default, useRouter, useEvaluationStore, useToast, VIEWS, require_dateformat, convertToDisplayDate, require_orderBy, Line, statusDictionary, TestTableBase_default, getErrorBaseKey, AnimatedSpinner_default, __vite_style__, import_dateformat, MetricsChart_vue_vue_type_script_setup_true_lang_default, metricsChartContainer, chartHeader, chartTitle, metricSelect, chartWrapper, MetricsChart_vue_vue_type_style_index_0_lang_module_default, cssModules$3, MetricsChart_default, _hoisted_1, TestRunsTable_vue_vue_type_script_setup_true_lang_default, container, grayText, alertText, warningText, errorText, TestRunsTable_vue_vue_type_style_index_0_lang_module_default, cssModules$2, TestRunsTable_default, RunsSection_vue_vue_type_script_setup_true_lang_default, runs$1, RunsSection_vue_vue_type_style_index_0_lang_module_default, cssModules$1, RunsSection_default, import_orderBy, EvaluationsView_vue_vue_type_script_setup_true_lang_default, evaluationsView, content, header, wrapper, runOrStopTestButton, runs, EvaluationsView_vue_vue_type_style_index_0_lang_module_default, cssModules, EvaluationsView_default;
    function useMetricsChart() {
      const colors = {
        primary: useCssVar("--color--primary", document.body).value,
        textBase: useCssVar("--color--text", document.body).value,
        backgroundXLight: useCssVar("--color--background--light-3", document.body).value,
        foregroundLight: useCssVar("--color--foreground--tint-1", document.body).value,
        foregroundBase: useCssVar("--color--foreground", document.body).value,
        foregroundDark: useCssVar("--color--foreground--shade-1", document.body).value
      };
      function generateChartData(runs$2, metric) {
        return {
          datasets: [{
            data: runs$2,
            parsing: {
              xAxisKey: "id",
              yAxisKey: `metrics.${metric}`
            },
            borderColor: colors.primary,
            backgroundColor: colors.backgroundXLight,
            borderWidth: 1,
            pointRadius: 2,
            pointHoverRadius: 4,
            pointBackgroundColor: colors.backgroundXLight,
            pointHoverBackgroundColor: colors.backgroundXLight
          }]
        };
      }
      function generateChartOptions({
        metric,
        data
      }) {
        return {
          responsive: true,
          maintainAspectRatio: false,
          animation: false,
          devicePixelRatio: 2,
          interaction: {
            mode: "index",
            intersect: false
          },
          scales: {
            y: {
              border: {
                display: false
              },
              grid: {
                color: colors.foregroundBase
              },
              ticks: {
                padding: 8,
                color: colors.textBase
              }
            },
            x: {
              border: {
                display: false
              },
              grid: {
                display: false
              },
              ticks: {
                color: colors.textBase,
                callback(_tickValue, index) {
                  return `#${data[index].index}`;
                }
              }
            }
          },
          plugins: {
            tooltip: {
              backgroundColor: colors.backgroundXLight,
              titleColor: colors.textBase,
              titleFont: {
                weight: "600"
              },
              bodyColor: colors.textBase,
              bodySpacing: 4,
              padding: 12,
              borderColor: colors.foregroundBase,
              borderWidth: 1,
              displayColors: true,
              callbacks: {
                title: tooltipItems => {
                  return (0, import_dateformat.default)(tooltipItems[0].raw.runAt, "yyyy-mm-dd HH:MM");
                },
                label: context => `${metric}: ${context.parsed.y.toFixed(2)}`,
                labelColor() {
                  return {
                    borderColor: "rgba(29, 21, 21, 0)",
                    backgroundColor: colors.primary,
                    borderWidth: 0,
                    borderRadius: 5
                  };
                }
              }
            },
            legend: {
              display: false
            }
          }
        };
      }
      return {
        generateChartData,
        generateChartOptions
      };
    }

    //#endregion
    //#region src/features/ai/evaluation.ee/components/ListRuns/MetricsChart.vue?vue&type=script&setup=true&lang.ts
    return {
      setters: [function (_chunkLegacy001Js) {
        __toESM = _chunkLegacy001Js.o;
      }, function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Sn;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        mergeModels = _vueRuntimeEsmBundlerLegacy003Js.U;
        Fragment = _vueRuntimeEsmBundlerLegacy003Js._;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js._n;
        watch = _vueRuntimeEsmBundlerLegacy003Js._t;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        useModel = _vueRuntimeEsmBundlerLegacy003Js.ft;
        renderList = _vueRuntimeEsmBundlerLegacy003Js.it;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        createSlots = _vueRuntimeEsmBundlerLegacy003Js.k;
        watchEffect = _vueRuntimeEsmBundlerLegacy003Js.vt;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
      }, function (_MapCacheLegacy005Js) {
        useCssVar = _MapCacheLegacy005Js.C;
        I18nT = _MapCacheLegacy005Js._t;
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {
        N8nOption_default = _srcLegacy007Js.G;
        N8nText_default = _srcLegacy007Js.In;
        N8nButton_default = _srcLegacy007Js.Ln;
        N8nHeading_default = _srcLegacy007Js.Pn;
        N8nSelect_default = _srcLegacy007Js.W;
        N8nTooltip_default = _srcLegacy007Js.vt;
        N8nIcon_default = _srcLegacy007Js.zn;
      }, function (_enLegacy00bJs) {}, function (_preloadHelperLegacy00dJs) {}, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {
        useRouter = _truncateLegacy00hJs.b;
      }, function (_tableLegacy00jJs) {}, function (_iconLegacy00lJs) {}, function (_emptyLegacy00tJs) {}, function (_useTelemetryLegacy00FJs) {
        useEvaluationStore = _useTelemetryLegacy00FJs.at;
      }, function (_useToastLegacy00HJs) {
        useToast = _useToastLegacy00HJs.t;
      }, function (_sanitizeHtmlLegacy00JJs) {}, function (_pathBrowserifyLegacy00LJs) {}, function (_constantsLegacy00NJs) {
        VIEWS = _constantsLegacy00NJs.mo;
      }, function (_mergeLegacy00PJs) {}, function (_dateformatLegacy00TJs) {
        require_dateformat = _dateformatLegacy00TJs.t;
      }, function (_useDebounceLegacy00VJs) {}, function (_useExternalHooksLegacy00XJs) {}, function (_dateFormatterLegacy02zJs) {
        convertToDisplayDate = _dateFormatterLegacy02zJs.t;
      }, function (_orderByLegacy02JJs) {
        require_orderBy = _orderByLegacy02JJs.t;
      }, function (_chartLegacy03BJs) {}, function (_distLegacy04ZJs) {
        Line = _distLegacy04ZJs.r;
      }, function (_evaluationConstantsLegacy04$Js) {
        statusDictionary = _evaluationConstantsLegacy04$Js.n;
        TestTableBase_default = _evaluationConstantsLegacy04$Js.r;
        getErrorBaseKey = _evaluationConstantsLegacy04$Js.t;
      }, function (_AnimatedSpinnerLegacy051Js) {
        AnimatedSpinner_default = _AnimatedSpinnerLegacy051Js.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._metricsChartContainer_vfsn9_123 {\n  background: var(--color--background--light-3);\n  border-radius: var(--radius--lg);\n  border: 1px solid var(--color--foreground);\n}\n._metricsChartContainer_vfsn9_123 ._chartHeader_vfsn9_128 {\n  padding: var(--spacing--xs) var(--spacing--sm) 0;\n}\n._metricsChartContainer_vfsn9_123 ._chartTitle_vfsn9_131 {\n  font-size: var(--font-size--lg);\n  font-weight: var(--font-weight--bold);\n  color: var(--color--text);\n}\n._metricsChartContainer_vfsn9_123 ._metricSelect_vfsn9_136 {\n  max-width: 15rem;\n}\n._metricsChartContainer_vfsn9_123 ._chartWrapper_vfsn9_139 {\n  position: relative;\n  height: var(--metrics-chart--height, 147px);\n  width: 100%;\n  padding: var(--spacing--sm);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._container_o1fe0_123 {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n._grayText_o1fe0_129 {\n  color: var(--color--text--tint-1);\n}\n._alertText_o1fe0_133 {\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  line-clamp: 2;\n  -webkit-box-orient: vertical;\n  max-width: 100%;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: normal;\n  word-break: break-word;\n  line-height: 1.25;\n  text-transform: none;\n}\n._alertText_o1fe0_133::first-letter {\n  text-transform: uppercase;\n}\n._warningText_o1fe0_151 {\n  color: var(--color--warning);\n}\n._errorText_o1fe0_155 {\n  color: var(--color--text--danger);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._runs_16gb6_123 {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing--sm);\n  flex: 1;\n  overflow: auto;\n  margin-bottom: 20px;\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._evaluationsView_ilj3k_123 {\n  width: 100%;\n}\n._content_ilj3k_127 {\n  display: flex;\n  justify-content: center;\n  gap: var(--spacing--md);\n  padding-bottom: var(--spacing--md);\n}\n._header_ilj3k_134 {\n  display: flex;\n  justify-content: end;\n  align-items: center;\n  padding: var(--spacing--md) var(--spacing--lg);\n  padding-left: 27px;\n  padding-bottom: 8px;\n  position: sticky;\n  top: 0;\n  left: 0;\n  background-color: var(--color--background--light-2);\n  z-index: 2;\n}\n._wrapper_ilj3k_148 {\n  padding: 0 var(--spacing--lg);\n  padding-left: 58px;\n}\n._runOrStopTestButton_ilj3k_153 {\n  white-space: nowrap;\n}\n._runs_ilj3k_157 {\n  width: 100%;\n  max-width: 1024px;\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/features/ai/evaluation.ee/composables/useMetricsChart.ts
        import_dateformat = /* @__PURE__ */__toESM(require_dateformat());
        MetricsChart_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "MetricsChart",
          props: {
            selectedMetric: {},
            runs: {}
          },
          emits: ["update:selectedMetric"],
          setup(__props, {
            emit: __emit
          }) {
            const emit = __emit;
            const props = __props;
            const metricsChart = useMetricsChart();
            const availableMetrics = computed(() => {
              return props.runs.reduce((acc, run) => {
                const metricKeys = Object.keys(run.metrics ?? {});
                return [...new Set([...acc, ...metricKeys])];
              }, []);
            });
            const filteredRuns = computed(() => props.runs.filter(run => run.metrics?.[props.selectedMetric] !== void 0));
            const chartData = computed(() => metricsChart.generateChartData(filteredRuns.value, props.selectedMetric));
            const chartOptions = computed(() => metricsChart.generateChartOptions({
              metric: props.selectedMetric,
              data: filteredRuns.value
            }));
            watchEffect(() => {
              if (props.runs.length > 0 && !props.selectedMetric) emit("update:selectedMetric", availableMetrics.value[0]);
            });
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(_ctx.$style.metricsChartContainer)
              }, [createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.chartHeader)
              }, [createVNode(unref(N8nSelect_default), {
                "model-value": _ctx.selectedMetric,
                class: normalizeClass(_ctx.$style.metricSelect),
                placeholder: "Select metric",
                size: "small",
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => emit("update:selectedMetric", $event))
              }, {
                default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(availableMetrics.value, metric => {
                  return openBlock(), createBlock(unref(N8nOption_default), {
                    key: metric,
                    label: metric,
                    value: metric
                  }, null, 8, ["label", "value"]);
                }), 128))]),
                _: 1
              }, 8, ["model-value", "class"])], 2), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.chartWrapper)
              }, [(openBlock(), createBlock(unref(Line), {
                key: _ctx.selectedMetric,
                data: chartData.value,
                options: chartOptions.value,
                class: normalizeClass(_ctx.$style.metricsChart)
              }, null, 8, ["data", "options", "class"]))], 2)], 2);
            };
          }
        }); //#endregion
        //#region src/features/ai/evaluation.ee/components/ListRuns/MetricsChart.vue?vue&type=style&index=0&lang.module.scss
        metricsChartContainer = "_metricsChartContainer_vfsn9_123";
        chartHeader = "_chartHeader_vfsn9_128";
        chartTitle = "_chartTitle_vfsn9_131";
        metricSelect = "_metricSelect_vfsn9_136";
        chartWrapper = "_chartWrapper_vfsn9_139";
        MetricsChart_vue_vue_type_style_index_0_lang_module_default = {
          metricsChartContainer,
          chartHeader,
          chartTitle,
          metricSelect,
          chartWrapper
        }; //#endregion
        //#region src/features/ai/evaluation.ee/components/ListRuns/MetricsChart.vue
        cssModules$3 = {
          "$style": MetricsChart_vue_vue_type_style_index_0_lang_module_default
        };
        MetricsChart_default = /* @__PURE__ */__plugin_vue_export_helper_default(MetricsChart_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$3]]); //#endregion
        //#region src/features/ai/evaluation.ee/components/ListRuns/TestRunsTable.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1 = {
          style: {
            "display": "inline-flex",
            "gap": "12px",
            "text-transform": "capitalize",
            "align-items": "center"
          }
        };
        TestRunsTable_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "TestRunsTable",
          props: {
            runs: {},
            columns: {}
          },
          emits: ["rowClick"],
          setup(__props, {
            emit: __emit
          }) {
            const emit = __emit;
            const props = __props;
            const locale = useI18n();
            const styledColumns = computed(() => {
              return props.columns.map(column => {
                if (column.prop === "id") return {
                  ...column,
                  width: 100
                };
                if (column.prop === "runAt") return {
                  ...column,
                  width: 150
                };
                return column;
              });
            });
            const runSummaries = computed(() => {
              return props.runs.map(({
                status,
                finalResult,
                errorDetails,
                ...run
              }) => {
                if (status === "completed" && finalResult && ["error", "warning"].includes(finalResult)) status = "warning";
                return {
                  ...run,
                  status,
                  finalResult,
                  errorDetails
                };
              });
            });
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(_ctx.$style.container)
              }, [createVNode(unref(N8nHeading_default), {
                size: "large",
                bold: true,
                class: normalizeClass(_ctx.$style.runsTableHeading),
                color: "text-base"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("evaluation.listRuns.pastRuns.total", {
                  adjustToNumber: _ctx.runs.length
                })) + " (" + toDisplayString(_ctx.runs.length) + ") ", 1)]),
                _: 1
              }, 8, ["class"]), createVNode(TestTableBase_default, {
                data: runSummaries.value,
                columns: styledColumns.value,
                "default-sort": {
                  prop: "runAt",
                  order: "descending"
                },
                onRowClick: _cache[0] || (_cache[0] = row => row.status !== "error" ? emit("rowClick", row) : void 0)
              }, {
                id: withCtx(({
                  row
                }) => [createTextVNode("#" + toDisplayString(row.index), 1)]),
                status: withCtx(({
                  row
                }) => [createBaseVNode("div", _hoisted_1, [row.status === "running" ? (openBlock(), createBlock(unref(N8nText_default), {
                  key: 0,
                  color: "secondary"
                }, {
                  default: withCtx(() => [createVNode(AnimatedSpinner_default)]),
                  _: 1
                })) : (openBlock(), createBlock(unref(N8nIcon_default), {
                  key: 1,
                  icon: unref(statusDictionary)[row.status].icon,
                  color: unref(statusDictionary)[row.status].color
                }, null, 8, ["icon", "color"])), row.status === "warning" ? (openBlock(), createBlock(unref(N8nText_default), {
                  key: 2,
                  color: "warning",
                  class: normalizeClass([_ctx.$style.alertText, _ctx.$style.warningText])
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText(`evaluation.runDetail.error.partialCasesFailed`)), 1)]),
                  _: 1
                }, 8, ["class"])) : row.status === "error" ? (openBlock(), createBlock(unref(N8nTooltip_default), {
                  key: 3,
                  placement: "top",
                  "show-after": 300
                }, {
                  content: withCtx(() => [createVNode(unref(I18nT), {
                    keypath: `${unref(getErrorBaseKey)(row.errorCode)}`,
                    scope: "global"
                  }, createSlots({
                    _: 2
                  }, [unref(locale).exists(`${unref(getErrorBaseKey)(row.errorCode)}.description`) ? {
                    name: "description",
                    fn: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText(`${unref(getErrorBaseKey)(row.errorCode)}.description`) && ". ") + " " + toDisplayString(unref(locale).baseText(`${unref(getErrorBaseKey)(row.errorCode)}.description`)), 1)]),
                    key: "0"
                  } : void 0]), 1032, ["keypath"])]),
                  default: withCtx(() => [createVNode(unref(N8nText_default), {
                    class: normalizeClass([_ctx.$style.alertText, _ctx.$style.errorText])
                  }, {
                    default: withCtx(() => [createVNode(unref(I18nT), {
                      keypath: `${unref(getErrorBaseKey)(row.errorCode)}`,
                      scope: "global"
                    }, createSlots({
                      _: 2
                    }, [unref(locale).exists(`${unref(getErrorBaseKey)(row.errorCode)}.description`) ? {
                      name: "description",
                      fn: withCtx(() => [createBaseVNode("p", {
                        class: normalizeClass(_ctx.$style.grayText)
                      }, toDisplayString(unref(locale).baseText(`${unref(getErrorBaseKey)(row.errorCode)}.description`)), 3)]),
                      key: "0"
                    } : void 0]), 1032, ["keypath"])]),
                    _: 2
                  }, 1032, ["class"])]),
                  _: 2
                }, 1024)) : (openBlock(), createElementBlock(Fragment, {
                  key: 4
                }, [createTextVNode(toDisplayString(row.status), 1)], 64))])]),
                _: 1
              }, 8, ["data", "columns"])], 2);
            };
          }
        }); //#endregion
        //#region src/features/ai/evaluation.ee/components/ListRuns/TestRunsTable.vue?vue&type=style&index=0&lang.module.scss
        container = "_container_o1fe0_123";
        grayText = "_grayText_o1fe0_129";
        alertText = "_alertText_o1fe0_133";
        warningText = "_warningText_o1fe0_151";
        errorText = "_errorText_o1fe0_155";
        TestRunsTable_vue_vue_type_style_index_0_lang_module_default = {
          container,
          grayText,
          alertText,
          warningText,
          errorText
        }; //#endregion
        //#region src/features/ai/evaluation.ee/components/ListRuns/TestRunsTable.vue
        cssModules$2 = {
          "$style": TestRunsTable_vue_vue_type_style_index_0_lang_module_default
        };
        TestRunsTable_default = /* @__PURE__ */__plugin_vue_export_helper_default(TestRunsTable_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$2]]); //#endregion
        //#region src/features/ai/evaluation.ee/components/ListRuns/RunsSection.vue?vue&type=script&setup=true&lang.ts
        RunsSection_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "RunsSection",
          props: /* @__PURE__ */mergeModels({
            runs: {},
            workflowId: {}
          }, {
            "selectedMetric": {
              required: true
            },
            "selectedMetricModifiers": {}
          }),
          emits: ["update:selectedMetric"],
          setup(__props) {
            const props = __props;
            const locale = useI18n();
            const router = useRouter();
            const selectedMetric = useModel(__props, "selectedMetric");
            const metrics = computed(() => {
              return [...props.runs.reduce((acc, run) => {
                Object.keys(run.metrics ?? {}).forEach(metric => acc.add(metric));
                return acc;
              }, /* @__PURE__ */new Set())];
            });
            const metricColumns = computed(() => metrics.value.map(metric => ({
              prop: `metrics.${metric}`,
              label: metric,
              sortable: true,
              showHeaderTooltip: true,
              sortMethod: (a, b) => (a.metrics?.[metric] ?? 0) - (b.metrics?.[metric] ?? 0),
              formatter: row => row.metrics?.[metric] !== void 0 ? (row.metrics?.[metric]).toFixed(2) : ""
            })));
            const columns = computed(() => [{
              prop: "id",
              label: locale.baseText("evaluation.listRuns.runNumber"),
              showOverflowTooltip: true
            }, {
              prop: "runAt",
              label: "Run at",
              sortable: true,
              showOverflowTooltip: true,
              formatter: row => {
                const {
                  date,
                  time
                } = convertToDisplayDate(row.runAt);
                return [date, time].join(", ");
              },
              sortMethod: (a, b) => new Date(a.runAt ?? a.createdAt).getTime() - new Date(b.runAt ?? b.createdAt).getTime()
            }, {
              prop: "status",
              label: locale.baseText("evaluation.listRuns.status"),
              sortable: true
            }, ...metricColumns.value]);
            const handleRowClick = row => {
              router.push({
                name: VIEWS.EVALUATION_RUNS_DETAIL,
                params: {
                  runId: row.id
                }
              });
            };
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(_ctx.$style.runs)
              }, [createVNode(MetricsChart_default, {
                "selected-metric": selectedMetric.value,
                "onUpdate:selectedMetric": _cache[0] || (_cache[0] = $event => selectedMetric.value = $event),
                runs: _ctx.runs
              }, null, 8, ["selected-metric", "runs"]), createVNode(TestRunsTable_default, {
                class: normalizeClass(_ctx.$style.runsTable),
                runs: _ctx.runs,
                columns: columns.value,
                selectable: true,
                "data-test-id": "past-runs-table",
                onRowClick: handleRowClick
              }, null, 8, ["class", "runs", "columns"])], 2);
            };
          }
        }); //#endregion
        //#region src/features/ai/evaluation.ee/components/ListRuns/RunsSection.vue?vue&type=style&index=0&lang.module.scss
        runs$1 = "_runs_16gb6_123";
        RunsSection_vue_vue_type_style_index_0_lang_module_default = {
          runs: runs$1
        }; //#endregion
        //#region src/features/ai/evaluation.ee/components/ListRuns/RunsSection.vue
        cssModules$1 = {
          "$style": RunsSection_vue_vue_type_style_index_0_lang_module_default
        };
        RunsSection_default = /* @__PURE__ */__plugin_vue_export_helper_default(RunsSection_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$1]]); //#endregion
        //#region src/features/ai/evaluation.ee/views/EvaluationsView.vue?vue&type=script&setup=true&lang.ts
        import_orderBy = /* @__PURE__ */__toESM(require_orderBy());
        EvaluationsView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "EvaluationsView",
          props: {
            name: {}
          },
          setup(__props) {
            const props = __props;
            const locale = useI18n();
            const toast = useToast();
            const evaluationStore = useEvaluationStore();
            const selectedMetric = ref("");
            const cancellingTestRun = ref(false);
            const runningTestRun = computed(() => runs$2.value.find(run => run.status === "running"));
            async function runTest() {
              try {
                await evaluationStore.startTestRun(props.name);
              } catch (error) {
                toast.showError(error, locale.baseText("evaluation.listRuns.error.cantStartTestRun"));
              }
              try {
                await evaluationStore.fetchTestRuns(props.name);
              } catch (error) {
                toast.showError(error, locale.baseText("evaluation.listRuns.error.cantFetchTestRuns"));
              }
            }
            async function stopTest() {
              if (!runningTestRun.value) return;
              try {
                cancellingTestRun.value = true;
                await evaluationStore.cancelTestRun(runningTestRun.value.workflowId, runningTestRun.value.id);
              } catch (error) {
                toast.showError(error, locale.baseText("evaluation.listRuns.error.cantStopTestRun"));
                cancellingTestRun.value = false;
              }
            }
            const runs$2 = computed(() => {
              return (0, import_orderBy.default)(Object.values(evaluationStore.testRunsById ?? {}).filter(({
                workflowId
              }) => workflowId === props.name), record => new Date(record.runAt), ["asc"]).map((record, index) => ({
                ...record,
                index: index + 1
              }));
            });
            watch(runningTestRun, run => {
              if (!run) cancellingTestRun.value = false;
            });
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(_ctx.$style.evaluationsView)
              }, [createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.header)
              }, [runningTestRun.value ? (openBlock(), createBlock(unref(N8nButton_default), {
                key: 0,
                disabled: cancellingTestRun.value,
                class: normalizeClass(_ctx.$style.runOrStopTestButton),
                size: "small",
                "data-test-id": "stop-test-button",
                label: unref(locale).baseText("evaluation.stopTest"),
                type: "secondary",
                onClick: stopTest
              }, null, 8, ["disabled", "class", "label"])) : (openBlock(), createBlock(unref(N8nButton_default), {
                key: 1,
                class: normalizeClass(_ctx.$style.runOrStopTestButton),
                size: "small",
                "data-test-id": "run-test-button",
                label: unref(locale).baseText("evaluation.runTest"),
                type: "primary",
                onClick: runTest
              }, null, 8, ["class", "label"]))], 2), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.wrapper)
              }, [createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.content)
              }, [createVNode(RunsSection_default, {
                "selected-metric": selectedMetric.value,
                "onUpdate:selectedMetric": _cache[0] || (_cache[0] = $event => selectedMetric.value = $event),
                class: normalizeClass(_ctx.$style.runs),
                runs: runs$2.value,
                "workflow-id": props.name
              }, null, 8, ["selected-metric", "class", "runs", "workflow-id"])], 2)], 2)], 2);
            };
          }
        }); //#endregion
        //#region src/features/ai/evaluation.ee/views/EvaluationsView.vue?vue&type=style&index=0&lang.module.scss
        evaluationsView = "_evaluationsView_ilj3k_123";
        content = "_content_ilj3k_127";
        header = "_header_ilj3k_134";
        wrapper = "_wrapper_ilj3k_148";
        runOrStopTestButton = "_runOrStopTestButton_ilj3k_153";
        runs = "_runs_ilj3k_157";
        EvaluationsView_vue_vue_type_style_index_0_lang_module_default = {
          evaluationsView,
          content,
          header,
          wrapper,
          runOrStopTestButton,
          runs
        }; //#endregion
        //#region src/features/ai/evaluation.ee/views/EvaluationsView.vue
        cssModules = {
          "$style": EvaluationsView_vue_vue_type_style_index_0_lang_module_default
        };
        _export("default", EvaluationsView_default = /* @__PURE__ */__plugin_vue_export_helper_default(EvaluationsView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]])); //#endregion
      }
    };
  });
})();