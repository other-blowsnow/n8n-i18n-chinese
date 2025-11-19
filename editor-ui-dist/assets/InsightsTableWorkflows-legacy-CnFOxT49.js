;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-CVC6fg6H.js", "./src-legacy-D3-Bo0sy.js", "./en-legacy-Bgme8Vbm.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-Bk9bFklR.js", "./icon-legacy-1U_nlJHf.js", "./empty-legacy-DnVUoqbC.js", "./useTelemetry-legacy-BdQlQKwu.js", "./sanitize-html-legacy-DfOUEbdf.js", "./path-browserify-legacy-DJbEMZcd.js", "./constants-legacy-B0GcWb62.js", "./merge-legacy-C_ujDigB.js", "./dateformat-legacy-Xt1X-tys.js", "./useDebounce-legacy-IwiEyerO.js", "./insights.constants-legacy-D5Y8YhR_.js", "./insights.utils-legacy-BGFKnbE7.js", "./smartDecimal-legacy-BeOdMR2z.js"], function (_export, _context) {
    "use strict";

    var computed, createElementBlock, unref, guardReactiveProps, ref, createVNode, defineAsyncComponent, defineComponent, toDisplayString, createBlock, mergeModels, Fragment, normalizeClass, watch, withCtx, resolveDynamicComponent, openBlock, useModel, createTextVNode, createSlots, normalizeProps, createBaseVNode, useI18n, N8nHeading_default, N8nDataTableServer_default, N8nTooltip_default, __vitePreload, __plugin_vue_export_helper_default, RouterLink, useTelemetry, VIEWS, INSIGHTS_UNIT_MAPPING, transformInsightsFailureRate, transformInsightsTimeSaved, transformInsightsAverageRunTime, smartDecimal, __vite_style__, InsightsTableWorkflows_vue_vue_type_script_setup_true_lang_default, ellipsis, link, blurryCover, InsightsTableWorkflows_vue_vue_type_style_index_0_lang_module_default, cssModules, InsightsTableWorkflows_default;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        guardReactiveProps = _vueRuntimeEsmBundlerLegacy003Js.I;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineAsyncComponent = _vueRuntimeEsmBundlerLegacy003Js.N;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Sn;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        mergeModels = _vueRuntimeEsmBundlerLegacy003Js.U;
        Fragment = _vueRuntimeEsmBundlerLegacy003Js._;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js._n;
        watch = _vueRuntimeEsmBundlerLegacy003Js._t;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        resolveDynamicComponent = _vueRuntimeEsmBundlerLegacy003Js.ct;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        useModel = _vueRuntimeEsmBundlerLegacy003Js.ft;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        createSlots = _vueRuntimeEsmBundlerLegacy003Js.k;
        normalizeProps = _vueRuntimeEsmBundlerLegacy003Js.vn;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {
        N8nHeading_default = _srcLegacy007Js.Pn;
        N8nDataTableServer_default = _srcLegacy007Js.s;
        N8nTooltip_default = _srcLegacy007Js.vt;
      }, function (_enLegacy00bJs) {}, function (_preloadHelperLegacy00dJs) {
        __vitePreload = _preloadHelperLegacy00dJs.t;
      }, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {
        RouterLink = _truncateLegacy00hJs.p;
      }, function (_iconLegacy00lJs) {}, function (_emptyLegacy00tJs) {}, function (_useTelemetryLegacy00FJs) {
        useTelemetry = _useTelemetryLegacy00FJs.t;
      }, function (_sanitizeHtmlLegacy00JJs) {}, function (_pathBrowserifyLegacy00LJs) {}, function (_constantsLegacy00NJs) {
        VIEWS = _constantsLegacy00NJs.mo;
      }, function (_mergeLegacy00PJs) {}, function (_dateformatLegacy00TJs) {}, function (_useDebounceLegacy00VJs) {}, function (_insightsConstantsLegacy033Js) {
        INSIGHTS_UNIT_MAPPING = _insightsConstantsLegacy033Js.a;
      }, function (_insightsUtilsLegacy035Js) {
        transformInsightsFailureRate = _insightsUtilsLegacy035Js.i;
        transformInsightsTimeSaved = _insightsUtilsLegacy035Js.o;
        transformInsightsAverageRunTime = _insightsUtilsLegacy035Js.r;
      }, function (_smartDecimalLegacy04zJs) {
        smartDecimal = _smartDecimalLegacy04zJs.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._ellipsis_z0cff_123 {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  line-height: 1.2;\n  width: -moz-fit-content;\n  width: fit-content;\n  max-width: 100%;\n}\n._link_z0cff_132 {\n  display: inline-flex;\n  height: 100%;\n  align-items: center;\n  color: var(--color--text);\n  text-decoration: underline;\n  max-width: 100%;\n}\n._link_z0cff_132:hover {\n  color: var(--color--text--shade-1);\n}\n._blurryCover_z0cff_144 {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1;\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n}\n._blurryCover_z0cff_144::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: var(--color--foreground--tint-2);\n  opacity: 0.5;\n  z-index: -1;\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/features/execution/insights/components/tables/InsightsTableWorkflows.vue?vue&type=script&setup=true&lang.ts
        InsightsTableWorkflows_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "InsightsTableWorkflows",
          props: /* @__PURE__ */mergeModels({
            data: {},
            loading: {
              type: Boolean
            },
            isDashboardEnabled: {
              type: Boolean
            }
          }, {
            "sortBy": {},
            "sortByModifiers": {}
          }),
          emits: /* @__PURE__ */mergeModels(["update:options"], ["update:sortBy"]),
          setup(__props, {
            emit: __emit
          }) {
            const InsightsPaywall = defineAsyncComponent(async () => await __vitePreload(() => _context.import("./InsightsPaywall-legacy-C9bd4tnZ.js"), true               ? void 0 : void 0));
            const props = __props;
            const i18n = useI18n();
            const telemetry = useTelemetry();
            const sampleWorkflows = Array.from({
              length: 10
            }, (_, i) => ({
              workflowId: `sample-workflow-${i + 1}`,
              workflowName: `Sample Workflow ${i + 1}`,
              total: Math.floor(Math.random() * 2e3) + 500,
              failed: Math.floor(Math.random() * 100) + 20,
              failureRate: Math.random() * 100,
              timeSaved: Math.floor(Math.random() * 3e5) + 6e4,
              averageRunTime: Math.floor(Math.random() * 6e4) + 15e3,
              projectName: `Sample Project ${i + 1}`,
              projectId: `sample-project-${i + 1}`,
              succeeded: Math.floor(Math.random() * 2e3) + 500,
              runTime: Math.floor(Math.random() * 6e4) + 15e3
            }));
            const sampleData = {
              data: sampleWorkflows,
              count: sampleWorkflows.length
            };
            const tableData = computed(() => props.isDashboardEnabled ? props.data : sampleData);
            const rows = computed(() => tableData.value.data);
            const headers = ref([{
              title: "Name",
              key: "workflowName",
              width: 400,
              disableSort: !props.isDashboardEnabled
            }, {
              title: i18n.baseText("insights.banner.title.total"),
              key: "total",
              value(row) {
                return row.total.toLocaleString("en-US");
              },
              disableSort: !props.isDashboardEnabled
            }, {
              title: i18n.baseText("insights.banner.title.failed"),
              key: "failed",
              value(row) {
                return row.failed.toLocaleString("en-US");
              },
              disableSort: !props.isDashboardEnabled
            }, {
              title: i18n.baseText("insights.banner.title.failureRate"),
              key: "failureRate",
              value(row) {
                return smartDecimal(transformInsightsFailureRate(row.failureRate)) + INSIGHTS_UNIT_MAPPING.failureRate(row.failureRate);
              },
              disableSort: !props.isDashboardEnabled
            }, {
              title: i18n.baseText("insights.banner.title.timeSaved"),
              key: "timeSaved",
              value(row) {
                return smartDecimal(transformInsightsTimeSaved(row.timeSaved)) + INSIGHTS_UNIT_MAPPING.timeSaved(row.timeSaved);
              },
              disableSort: !props.isDashboardEnabled
            }, {
              title: i18n.baseText("insights.banner.title.averageRunTime"),
              key: "averageRunTime",
              value(row) {
                return smartDecimal(transformInsightsAverageRunTime(row.averageRunTime)) + INSIGHTS_UNIT_MAPPING.averageRunTime(row.averageRunTime);
              },
              disableSort: !props.isDashboardEnabled
            }, {
              title: i18n.baseText("insights.dashboard.table.projectName"),
              key: "projectName",
              disableSort: true
            }]);
            const sortBy = useModel(__props, "sortBy");
            const currentPage = ref(0);
            const itemsPerPage = ref(25);
            const emit = __emit;
            const getWorkflowLink = (item, query) => ({
              name: VIEWS.WORKFLOW,
              params: {
                name: item.workflowId
              },
              query
            });
            const trackWorkflowClick = item => {
              telemetry.track("User clicked on workflow from insights table", {
                workflow_id: item.workflowId
              });
            };
            watch(sortBy, newValue => {
              telemetry.track("User sorted insights table", {
                sorted_by: (newValue ?? []).map(item => ({
                  ...item,
                  label: headers.value.find(header => header.key === item.id)?.title
                }))
              });
            });
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", null, [createVNode(unref(N8nHeading_default), {
                bold: "",
                tag: "h3",
                size: "medium",
                class: "mb-s"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("insights.dashboard.table.title")), 1)]),
                _: 1
              }), createVNode(unref(N8nDataTableServer_default), {
                "sort-by": sortBy.value,
                "onUpdate:sortBy": _cache[0] || (_cache[0] = $event => sortBy.value = $event),
                page: currentPage.value,
                "onUpdate:page": _cache[1] || (_cache[1] = $event => currentPage.value = $event),
                "items-per-page": itemsPerPage.value,
                "onUpdate:itemsPerPage": _cache[2] || (_cache[2] = $event => itemsPerPage.value = $event),
                items: rows.value,
                headers: headers.value,
                "items-length": tableData.value.count,
                "onUpdate:options": _cache[3] || (_cache[3] = $event => emit("update:options", $event))
              }, createSlots({
                [`item.workflowName`]: withCtx(({
                  item
                }) => [(openBlock(), createBlock(resolveDynamicComponent(item.workflowId ? unref(RouterLink) : "div"), normalizeProps(guardReactiveProps(item.workflowId ? {
                  to: getWorkflowLink(item),
                  class: _ctx.$style.link,
                  onClick: () => trackWorkflowClick(item)
                } : {})), {
                  default: withCtx(() => [createVNode(unref(N8nTooltip_default), {
                    content: item.workflowName,
                    placement: "top"
                  }, {
                    default: withCtx(() => [createBaseVNode("div", {
                      class: normalizeClass(_ctx.$style.ellipsis)
                    }, toDisplayString(item.workflowName), 3)]),
                    _: 2
                  }, 1032, ["content"])]),
                  _: 2
                }, 1040))]),
                [`item.timeSaved`]: withCtx(({
                  item,
                  value
                }) => [!item.timeSaved && item.workflowId ? (openBlock(), createBlock(unref(RouterLink), {
                  key: 0,
                  to: getWorkflowLink(item, {
                    settings: "true"
                  }),
                  class: normalizeClass(_ctx.$style.link)
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("insights.dashboard.table.estimate")), 1)]),
                  _: 2
                }, 1032, ["to", "class"])) : (openBlock(), createElementBlock(Fragment, {
                  key: 1
                }, [createTextVNode(toDisplayString(value), 1)], 64))]),
                [`item.projectName`]: withCtx(({
                  item
                }) => [item.projectName ? (openBlock(), createBlock(unref(N8nTooltip_default), {
                  key: 0,
                  content: item.projectName,
                  placement: "top"
                }, {
                  default: withCtx(() => [createBaseVNode("div", {
                    class: normalizeClass(_ctx.$style.ellipsis)
                  }, toDisplayString(item.projectName), 3)]),
                  _: 2
                }, 1032, ["content"])) : (openBlock(), createElementBlock(Fragment, {
                  key: 1
                }, [createTextVNode(" - ")], 64))]),
                _: 2
              }, [!_ctx.isDashboardEnabled ? {
                name: "cover",
                fn: withCtx(() => [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.blurryCover)
                }, [createVNode(unref(InsightsPaywall))], 2)]),
                key: "0"
              } : void 0]), 1032, ["sort-by", "page", "items-per-page", "items", "headers", "items-length"])]);
            };
          }
        }); //#endregion
        //#region src/features/execution/insights/components/tables/InsightsTableWorkflows.vue?vue&type=style&index=0&lang.module.scss
        ellipsis = "_ellipsis_z0cff_123";
        link = "_link_z0cff_132";
        blurryCover = "_blurryCover_z0cff_144";
        InsightsTableWorkflows_vue_vue_type_style_index_0_lang_module_default = {
          ellipsis,
          link,
          blurryCover
        }; //#endregion
        //#region src/features/execution/insights/components/tables/InsightsTableWorkflows.vue
        cssModules = {
          "$style": InsightsTableWorkflows_vue_vue_type_style_index_0_lang_module_default
        };
        _export("default", InsightsTableWorkflows_default = /* @__PURE__ */__plugin_vue_export_helper_default(InsightsTableWorkflows_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]])); //#endregion
      }
    };
  });
})();