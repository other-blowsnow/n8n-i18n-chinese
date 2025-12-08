;
(function () {
  System.register(["./chunk-legacy-Re9CbdfL.js", "./vue.runtime.esm-bundler-legacy--Sn1h8On.js", "./_MapCache-legacy-D8JKoBWh.js", "./src-legacy-Cj9TtJhY.js", "./en-legacy-DJK4SpPN.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-B7Y_hCM_.js", "./_initCloneObject-legacy-k4iTaP5j.js", "./table-legacy-DKokRcV5.js", "./icon-legacy-BY20yo2X.js", "./empty-legacy-ZG0-xpne.js", "./useTelemetry-legacy-CBjbIfKX.js", "./useToast-legacy-Bs0yTjbT.js", "./sanitize-html-legacy-B93rGWi4.js", "./CalendarDate-legacy-BUvNgcoo.js", "./path-browserify-legacy-PZw06cM9.js", "./constants-legacy-DVoQkFTS.js", "./merge-legacy-DGYepJ5X.js", "./_baseOrderBy-legacy-CowL7g45.js", "./dateformat-legacy-C4HUJTCr.js", "./useDebounce-legacy-aeZbWFlx.js", "./useExternalHooks-legacy-m8Ri2ypi.js", "./useStyles-legacy-E8NPEyeD.js", "./dateFormatter-legacy-D5cMfBrw.js", "./orderBy-legacy-DJAeMB1W.js", "./useWorkflowsCache-legacy-D0DsF3sd.js", "./evaluation.constants-legacy-45KLyM5l.js"], function (_export, _context) {
    "use strict";

    var __toESM, computed, toDisplayString, createElementBlock, createCommentVNode, unref, ref, createVNode, defineComponent, createBlock, onMounted, Fragment, withCtx, openBlock, withModifiers, renderList, createTextVNode, normalizeClass, createBaseVNode, useI18n, N8nCallout_default, ElScrollbar, N8nExternalLink_default, N8nText_default, N8nIcon_default, N8nTooltip_default, TableHeaderControlsButton_default, N8nLoading_default, N8nIconButton_default, N8nHeading_default, __plugin_vue_export_helper_default, useRouter, useWorkflowsStore, useEvaluationStore, useToast, VIEWS, convertToDisplayDate, require_orderBy, useWorkflowSettingsCache, applyCachedVisibility, getTestTableHeaders, applyCachedSortOrder, statusDictionary, getDefaultOrderedColumns, TestTableBase_default, getTestCasesColumns, getErrorBaseKey, __vite_style__, import_orderBy, _hoisted_1, _hoisted_2, _hoisted_3, TestRunDetailView_vue_vue_type_script_setup_true_lang_default, container, header, timestamp, backButton, headerSeparator, summary, summaryStats, stat, controls, downloadButton, runsHeader, runsHeaderButtons, loading, scrollableSummary, summaryCard, capitalized, summaryCardTitle, summaryCardContentLargeNumber, alertText, deletedExecutionRowIndex, TestRunDetailView_vue_vue_type_style_index_1_lang_module_default, cssModules, TestRunDetailView_default;
    return {
      setters: [function (_chunkLegacy001Js) {
        __toESM = _chunkLegacy001Js.o;
      }, function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Cn;
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        onMounted = _vueRuntimeEsmBundlerLegacy003Js.Z;
        Fragment = _vueRuntimeEsmBundlerLegacy003Js._;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        withModifiers = _vueRuntimeEsmBundlerLegacy003Js.h;
        renderList = _vueRuntimeEsmBundlerLegacy003Js.it;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js.vn;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {
        N8nCallout_default = _srcLegacy007Js.Bn;
        ElScrollbar = _srcLegacy007Js.Gt;
        N8nExternalLink_default = _srcLegacy007Js.H;
        N8nText_default = _srcLegacy007Js.Vn;
        N8nIcon_default = _srcLegacy007Js.Wn;
        N8nTooltip_default = _srcLegacy007Js.mt;
        TableHeaderControlsButton_default = _srcLegacy007Js.o;
        N8nLoading_default = _srcLegacy007Js.tt;
        N8nIconButton_default = _srcLegacy007Js.xt;
        N8nHeading_default = _srcLegacy007Js.zn;
      }, function (_enLegacy00bJs) {}, function (_preloadHelperLegacy00dJs) {}, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {
        useRouter = _truncateLegacy00hJs.b;
      }, function (_initCloneObjectLegacy00jJs) {}, function (_tableLegacy00lJs) {}, function (_iconLegacy00nJs) {}, function (_emptyLegacy00vJs) {}, function (_useTelemetryLegacy00HJs) {
        useWorkflowsStore = _useTelemetryLegacy00HJs.o;
        useEvaluationStore = _useTelemetryLegacy00HJs.st;
      }, function (_useToastLegacy00JJs) {
        useToast = _useToastLegacy00JJs.t;
      }, function (_sanitizeHtmlLegacy00LJs) {}, function (_CalendarDateLegacy00NJs) {}, function (_pathBrowserifyLegacy00RJs) {}, function (_constantsLegacy00TJs) {
        VIEWS = _constantsLegacy00TJs.Po;
      }, function (_mergeLegacy00VJs) {}, function (_baseOrderByLegacy00ZJs) {}, function (_dateformatLegacy00$Js) {}, function (_useDebounceLegacy011Js) {}, function (_useExternalHooksLegacy013Js) {}, function (_useStylesLegacy015Js) {}, function (_dateFormatterLegacy02LJs) {
        convertToDisplayDate = _dateFormatterLegacy02LJs.t;
      }, function (_orderByLegacy02VJs) {
        require_orderBy = _orderByLegacy02VJs.t;
      }, function (_useWorkflowsCacheLegacy049Js) {
        useWorkflowSettingsCache = _useWorkflowsCacheLegacy049Js.t;
      }, function (_evaluationConstantsLegacy05zJs) {
        applyCachedVisibility = _evaluationConstantsLegacy05zJs.a;
        getTestTableHeaders = _evaluationConstantsLegacy05zJs.c;
        applyCachedSortOrder = _evaluationConstantsLegacy05zJs.i;
        statusDictionary = _evaluationConstantsLegacy05zJs.n;
        getDefaultOrderedColumns = _evaluationConstantsLegacy05zJs.o;
        TestTableBase_default = _evaluationConstantsLegacy05zJs.r;
        getTestCasesColumns = _evaluationConstantsLegacy05zJs.s;
        getErrorBaseKey = _evaluationConstantsLegacy05zJs.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n/**\n\tWhen hovering over link in row, ensure hover background is removed from row\n */\ntr:hover:has(.open-execution-link:hover) {\n  --table--row--color--background--hover: transparent;\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._container_8z68v_123 {\n  height: 100%;\n  width: 100%;\n  max-width: var(--content-container--width);\n  padding: var(--spacing--lg) 0;\n}\n._header_8z68v_130 {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing--2xs);\n  margin-bottom: var(--spacing--lg);\n}\n._header_8z68v_130 ._timestamp_8z68v_136 {\n  color: var(--color--text);\n  font-size: var(--font-size--sm);\n}\n._backButton_8z68v_141 {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing--3xs);\n  padding: 0;\n  border: none;\n  background: none;\n  cursor: pointer;\n  color: var(--color--text);\n  transition: color 0.1s ease-in-out;\n}\n._backButton_8z68v_141:hover {\n  color: var(--color--primary);\n}\n._headerSeparator_8z68v_156 {\n  font-size: var(--font-size--xl);\n  color: var(--color--text--tint-1);\n}\n._summary_8z68v_161 {\n  margin-bottom: var(--spacing--md);\n}\n._summary_8z68v_161 ._summaryStats_8z68v_164 {\n  display: flex;\n  gap: var(--spacing--lg);\n}\n._stat_8z68v_169 {\n  display: flex;\n  flex-direction: column;\n}\n._controls_8z68v_174 {\n  display: flex;\n  gap: var(--spacing--sm);\n  margin-bottom: var(--spacing--sm);\n}\n._downloadButton_8z68v_180 {\n  margin-bottom: var(--spacing--sm);\n}\n._runsHeader_8z68v_184 {\n  display: flex;\n}\n._runsHeader_8z68v_184 > div:first-child {\n  flex: 1;\n}\n._runsHeaderButtons_8z68v_191 {\n  display: flex;\n  gap: var(--spacing--xs);\n}\n._loading_8z68v_196 {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 200px;\n}\n._scrollableSummary_8z68v_203 {\n  border: var(--border-width) var(--border-style) var(--color--foreground);\n  border-radius: 5px;\n  background-color: var(--color--background--light-3);\n}\n._scrollableSummary_8z68v_203 .el-scrollbar__bar {\n  opacity: 1;\n}\n._scrollableSummary_8z68v_203 .el-scrollbar__thumb {\n  background-color: var(--color--foreground);\n}\n._scrollableSummary_8z68v_203 .el-scrollbar__thumb:hover {\n  background-color: var(--color--foreground--shade-1);\n}\n._summaryCard_8z68v_218 {\n  height: 100px;\n  box-sizing: border-box;\n  padding: var(--spacing--sm);\n  border-right: var(--border-width) var(--border-style) var(--color--foreground);\n  flex-basis: 169px;\n  flex-shrink: 0;\n  max-width: 170px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n._summaryCard_8z68v_218:first-child {\n  border-top-left-radius: inherit;\n  border-bottom-left-radius: inherit;\n}\n._capitalized_8z68v_235 {\n  text-transform: none;\n}\n._capitalized_8z68v_235::first-letter {\n  text-transform: uppercase;\n}\n._summaryCardTitle_8z68v_243 {\n  display: inline;\n  width: -moz-fit-content;\n  width: fit-content;\n  max-width: 100%;\n  flex-shrink: 0;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  color: var(--color--text);\n}\n._summaryCardContentLargeNumber_8z68v_254 {\n  font-size: 32px;\n  line-height: 1;\n}\n._alertText_8z68v_259 {\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  line-clamp: 2;\n  -webkit-box-orient: vertical;\n  max-width: 100%;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: normal;\n  word-break: break-word;\n  color: var(--color--text--danger);\n  font-size: var(--font-size--2xs);\n  line-height: 1.25;\n}\n._deletedExecutionRowIndex_8z68v_274 {\n  color: var(--color--text);\n  font-weight: var(--font-weight--regular);\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/features/ai/evaluation.ee/views/TestRunDetailView.vue?vue&type=script&setup=true&lang.ts
        import_orderBy = /* @__PURE__ */__toESM(require_orderBy());
        _hoisted_1 = {
          style: {
            "display": "flex"
          }
        };
        _hoisted_2 = {
          style: {
            "display": "flex",
            "justify-content": "space-between",
            "gap": "10px"
          }
        };
        _hoisted_3 = {
          style: {
            "display": "inline-flex",
            "gap": "12px",
            "align-items": "center",
            "max-width": "100%"
          }
        };
        TestRunDetailView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "TestRunDetailView",
          setup(__props) {
            const router = useRouter();
            const toast = useToast();
            const evaluationStore = useEvaluationStore();
            const workflowsStore = useWorkflowsStore();
            const locale = useI18n();
            const workflowsCache = useWorkflowSettingsCache();
            const isLoading = ref(true);
            const testCases = ref([]);
            const hasFailedTestCases = ref(false);
            const runId = computed(() => router.currentRoute.value.params.runId);
            const workflowId = computed(() => router.currentRoute.value.params.name);
            const workflowName = computed(() => workflowsStore.getWorkflowById(workflowId.value)?.name ?? "");
            const cachedUserPreferences = ref();
            const expandedRows = ref(/* @__PURE__ */new Set());
            const run = computed(() => evaluationStore.testRunsById[runId.value]);
            const runErrorDetails = computed(() => {
              return run.value?.errorDetails;
            });
            const filteredTestCases = computed(() => (0, import_orderBy.default)(testCases.value, record => record.runAt, ["asc"]).map((record, index) => Object.assign(record, {
              index: index + 1
            })));
            const isAllExpanded = computed(() => expandedRows.value.size === filteredTestCases.value.length);
            const testRunIndex = computed(() => Object.values((0, import_orderBy.default)(evaluationStore.testRunsById, record => new Date(record.runAt), ["asc"]).filter(({
              workflowId: wId
            }) => wId === workflowId.value) ?? {}).findIndex(({
              id
            }) => id === runId.value));
            const formattedTime = computed(() => convertToDisplayDate(new Date(run.value?.runAt).getTime()));
            const openRelatedExecution = row => {
              const executionId = row.executionId;
              if (executionId) {
                const {
                  href
                } = router.resolve({
                  name: VIEWS.EXECUTION_PREVIEW,
                  params: {
                    name: workflowId.value,
                    executionId
                  }
                });
                window.open(href, "_blank");
              }
            };
            const inputColumns = computed(() => getTestCasesColumns(filteredTestCases.value, "inputs"));
            const orderedColumns = computed(() => {
              return applyCachedVisibility(applyCachedSortOrder(getDefaultOrderedColumns(run.value, filteredTestCases.value), cachedUserPreferences.value?.order), cachedUserPreferences.value?.visibility);
            });
            const columns = computed(() => [{
              prop: "index",
              width: 100,
              label: locale.baseText("evaluation.runDetail.testCase"),
              sortable: true
            }, {
              prop: "status",
              label: locale.baseText("evaluation.listRuns.status"),
              minWidth: 125
            }, ...getTestTableHeaders(orderedColumns.value, filteredTestCases.value)]);
            const metrics = computed(() => run.value?.metrics ?? {});
            const fetchExecutionTestCases = async () => {
              if (!runId.value || !workflowId.value) return;
              isLoading.value = true;
              try {
                const testRun = await evaluationStore.getTestRun({
                  workflowId: workflowId.value,
                  runId: runId.value
                });
                const testCaseEvaluationExecutions = await evaluationStore.fetchTestCaseExecutions({
                  workflowId: workflowId.value,
                  runId: testRun.id
                });
                testCases.value = testCaseEvaluationExecutions ?? [];
                hasFailedTestCases.value = testCaseEvaluationExecutions?.some(testCase => testCase.status === "error");
                await evaluationStore.fetchTestRuns(run.value.workflowId);
              } catch (error) {
                toast.showError(error, locale.baseText("evaluation.listRuns.toast.error.fetchTestCases"));
              } finally {
                isLoading.value = false;
              }
            };
            async function loadCachedUserPreferences() {
              cachedUserPreferences.value = await workflowsCache.getEvaluationPreferences(workflowId.value);
            }
            async function saveCachedUserPreferences() {
              if (cachedUserPreferences.value) await workflowsCache.saveEvaluationPreferences(workflowId.value, cachedUserPreferences.value);
            }
            async function handleColumnVisibilityUpdate(columnKey, visibility) {
              cachedUserPreferences.value ??= {
                order: [],
                visibility: {}
              };
              cachedUserPreferences.value.visibility[columnKey] = visibility;
              await saveCachedUserPreferences();
            }
            async function handleColumnOrderUpdate(newOrder) {
              cachedUserPreferences.value ??= {
                order: [],
                visibility: {}
              };
              cachedUserPreferences.value.order = newOrder;
              await saveCachedUserPreferences();
            }
            function toggleRowExpansion(row) {
              if (expandedRows.value.has(row.id)) expandedRows.value.delete(row.id);else expandedRows.value.add(row.id);
            }
            function toggleAllExpansion() {
              if (isAllExpanded.value) expandedRows.value.clear();else expandedRows.value = new Set(filteredTestCases.value.map(row => row.id));
            }
            onMounted(async () => {
              await fetchExecutionTestCases();
              await loadCachedUserPreferences();
            });
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(_ctx.$style.container),
                "data-test-id": "test-definition-run-detail"
              }, [createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.header)
              }, [createBaseVNode("button", {
                class: normalizeClass(_ctx.$style.backButton),
                onClick: _cache[0] || (_cache[0] = $event => unref(router).back())
              }, [createVNode(unref(N8nIcon_default), {
                icon: "arrow-left"
              }), createVNode(unref(N8nHeading_default), {
                size: "large",
                bold: true
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("evaluation.listRuns.runListHeader", {
                  interpolate: {
                    name: workflowName.value
                  }
                })), 1)]),
                _: 1
              })], 2), createBaseVNode("span", {
                class: normalizeClass(_ctx.$style.headerSeparator)
              }, "/", 2), createVNode(unref(N8nHeading_default), {
                size: "large",
                bold: true
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("evaluation.listRuns.testCasesListHeader", {
                  interpolate: {
                    index: testRunIndex.value + 1
                  }
                })), 1)]),
                _: 1
              })], 2), run.value?.status === "error" ? (openBlock(), createBlock(unref(N8nCallout_default), {
                key: 0,
                theme: "danger",
                icon: "triangle-alert",
                class: "mb-s"
              }, {
                default: withCtx(() => [createVNode(unref(N8nText_default), {
                  size: "small",
                  class: normalizeClass(_ctx.$style.capitalized)
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText(`${unref(getErrorBaseKey)(run.value?.errorCode)}`, runErrorDetails.value ? {
                    interpolate: runErrorDetails.value
                  } : {}) ?? unref(locale).baseText(`${unref(getErrorBaseKey)("UNKNOWN_ERROR")}`)), 1)]),
                  _: 1
                }, 8, ["class"])]),
                _: 1
              })) : createCommentVNode("", true), createVNode(unref(ElScrollbar), {
                always: "",
                class: normalizeClass([_ctx.$style.scrollableSummary, "mb-m"])
              }, {
                default: withCtx(() => [createBaseVNode("div", _hoisted_1, [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.summaryCard)
                }, [createVNode(unref(N8nText_default), {
                  size: "small",
                  class: normalizeClass(_ctx.$style.summaryCardTitle)
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("evaluation.runDetail.totalCases")), 1)]),
                  _: 1
                }, 8, ["class"]), createVNode(unref(N8nText_default), {
                  size: "xlarge",
                  class: normalizeClass(_ctx.$style.summaryCardContentLargeNumber),
                  bold: ""
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(testCases.value.length), 1)]),
                  _: 1
                }, 8, ["class"])], 2), createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.summaryCard)
                }, [createVNode(unref(N8nText_default), {
                  size: "small",
                  class: normalizeClass(_ctx.$style.summaryCardTitle)
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("evaluation.runDetail.ranAt")), 1)]),
                  _: 1
                }, 8, ["class"]), createBaseVNode("div", null, [createVNode(unref(N8nText_default), {
                  size: "medium"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(formattedTime.value.date) + " " + toDisplayString(formattedTime.value.time), 1)]),
                  _: 1
                })])], 2), createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.summaryCard)
                }, [createVNode(unref(N8nText_default), {
                  size: "small",
                  class: normalizeClass(_ctx.$style.summaryCardTitle)
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("evaluation.listRuns.status")), 1)]),
                  _: 1
                }, 8, ["class"]), run.value?.status === "completed" && hasFailedTestCases.value ? (openBlock(), createBlock(unref(N8nText_default), {
                  key: 0,
                  size: "medium",
                  color: "warning"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText(`evaluation.runDetail.error.partialCasesFailed`)), 1)]),
                  _: 1
                })) : (openBlock(), createBlock(unref(N8nText_default), {
                  key: 1,
                  color: unref(statusDictionary)[run.value?.status]?.color,
                  size: "medium",
                  class: normalizeClass(run.value?.status.toLowerCase()),
                  style: {
                    "text-transform": "capitalize"
                  }
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(run.value?.status), 1)]),
                  _: 1
                }, 8, ["color", "class"]))], 2), (openBlock(true), createElementBlock(Fragment, null, renderList(metrics.value, (value, key) => {
                  return openBlock(), createElementBlock("div", {
                    key,
                    class: normalizeClass(_ctx.$style.summaryCard)
                  }, [createVNode(unref(N8nTooltip_default), {
                    content: key,
                    placement: "top"
                  }, {
                    default: withCtx(() => [createVNode(unref(N8nText_default), {
                      size: "small",
                      class: normalizeClass(_ctx.$style.summaryCardTitle),
                      style: {
                        "text-overflow": "ellipsis",
                        "overflow": "hidden"
                      }
                    }, {
                      default: withCtx(() => [createTextVNode(toDisplayString(key), 1)]),
                      _: 2
                    }, 1032, ["class"])]),
                    _: 2
                  }, 1032, ["content"]), createVNode(unref(N8nText_default), {
                    size: "xlarge",
                    class: normalizeClass(_ctx.$style.summaryCardContentLargeNumber),
                    bold: ""
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(value.toFixed(2)), 1)]),
                    _: 2
                  }, 1032, ["class"])], 2);
                }), 128))])]),
                _: 1
              }, 8, ["class"]), createBaseVNode("div", {
                class: normalizeClass(["mb-s", _ctx.$style.runsHeader])
              }, [createBaseVNode("div", null, [createVNode(unref(N8nHeading_default), {
                size: "large",
                bold: true
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("evaluation.listRuns.allTestCases", {
                  interpolate: {
                    count: filteredTestCases.value.length
                  }
                })), 1)]),
                _: 1
              })]), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.runsHeaderButtons)
              }, [createVNode(unref(N8nIconButton_default), {
                icon: isAllExpanded.value ? "chevrons-down-up" : "chevrons-up-down",
                type: "secondary",
                size: "medium",
                onClick: toggleAllExpansion
              }, null, 8, ["icon"]), createVNode(unref(TableHeaderControlsButton_default), {
                size: "medium",
                "icon-size": "small",
                columns: orderedColumns.value,
                "onUpdate:columnVisibility": handleColumnVisibilityUpdate,
                "onUpdate:columnOrder": handleColumnOrderUpdate
              }, null, 8, ["columns"])], 2)], 2), !isLoading.value && !inputColumns.value.length && run.value?.status === "completed" && run.value?.finalResult === "success" ? (openBlock(), createBlock(unref(N8nCallout_default), {
                key: 1,
                theme: "secondary",
                icon: "info",
                class: "mb-s"
              }, {
                default: withCtx(() => [createVNode(unref(N8nText_default), {
                  size: "small",
                  class: normalizeClass(_ctx.$style.capitalized)
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("evaluation.runDetail.notice.useSetInputs")), 1)]),
                  _: 1
                }, 8, ["class"])]),
                _: 1
              })) : createCommentVNode("", true), isLoading.value ? (openBlock(), createElementBlock("div", {
                key: 2,
                class: normalizeClass(_ctx.$style.loading)
              }, [createVNode(unref(N8nLoading_default), {
                loading: true,
                rows: 5
              })], 2)) : (openBlock(), createBlock(TestTableBase_default, {
                key: 3,
                data: filteredTestCases.value,
                columns: columns.value,
                "default-sort": {
                  prop: "id",
                  order: "descending"
                },
                "expanded-rows": expandedRows.value,
                onRowClick: toggleRowExpansion
              }, {
                id: withCtx(({
                  row
                }) => [createBaseVNode("div", _hoisted_2, toDisplayString(row.id), 1)]),
                index: withCtx(({
                  row
                }) => [createBaseVNode("div", null, [row.executionId ? (openBlock(), createBlock(unref(N8nExternalLink_default), {
                  key: 0,
                  class: "open-execution-link",
                  onClick: withModifiers($event => openRelatedExecution(row), ["stop", "prevent"])
                }, {
                  default: withCtx(() => [createTextVNode(" #" + toDisplayString(row.index), 1)]),
                  _: 2
                }, 1032, ["onClick"])) : (openBlock(), createElementBlock("span", {
                  key: 1,
                  class: normalizeClass(_ctx.$style.deletedExecutionRowIndex)
                }, "#" + toDisplayString(row.index), 3))])]),
                status: withCtx(({
                  row
                }) => [createBaseVNode("div", _hoisted_3, [createVNode(unref(N8nIcon_default), {
                  icon: unref(statusDictionary)[row.status].icon,
                  color: unref(statusDictionary)[row.status].color
                }, null, 8, ["icon", "color"]), row.status === "error" ? (openBlock(), createBlock(unref(N8nTooltip_default), {
                  key: 0,
                  placement: "top",
                  "show-after": 300
                }, {
                  content: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText(`${unref(getErrorBaseKey)(row.errorCode)}`) || row.status), 1)]),
                  default: withCtx(() => [createVNode(unref(N8nText_default), {
                    color: "danger",
                    class: normalizeClass(_ctx.$style.capitalized)
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText(`${unref(getErrorBaseKey)(row.errorCode)}`) || row.status), 1)]),
                    _: 2
                  }, 1032, ["class"])]),
                  _: 2
                }, 1024)) : (openBlock(), createBlock(unref(N8nText_default), {
                  key: 1,
                  class: normalizeClass(_ctx.$style.capitalized)
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(row.status), 1)]),
                  _: 2
                }, 1032, ["class"]))])]),
                _: 1
              }, 8, ["data", "columns", "expanded-rows"]))], 2);
            };
          }
        }); //#endregion
        //#region src/features/ai/evaluation.ee/views/TestRunDetailView.vue?vue&type=style&index=1&lang.module.scss
        container = "_container_8z68v_123";
        header = "_header_8z68v_130";
        timestamp = "_timestamp_8z68v_136";
        backButton = "_backButton_8z68v_141";
        headerSeparator = "_headerSeparator_8z68v_156";
        summary = "_summary_8z68v_161";
        summaryStats = "_summaryStats_8z68v_164";
        stat = "_stat_8z68v_169";
        controls = "_controls_8z68v_174";
        downloadButton = "_downloadButton_8z68v_180";
        runsHeader = "_runsHeader_8z68v_184";
        runsHeaderButtons = "_runsHeaderButtons_8z68v_191";
        loading = "_loading_8z68v_196";
        scrollableSummary = "_scrollableSummary_8z68v_203";
        summaryCard = "_summaryCard_8z68v_218";
        capitalized = "_capitalized_8z68v_235";
        summaryCardTitle = "_summaryCardTitle_8z68v_243";
        summaryCardContentLargeNumber = "_summaryCardContentLargeNumber_8z68v_254";
        alertText = "_alertText_8z68v_259";
        deletedExecutionRowIndex = "_deletedExecutionRowIndex_8z68v_274";
        TestRunDetailView_vue_vue_type_style_index_1_lang_module_default = {
          container,
          header,
          timestamp,
          backButton,
          headerSeparator,
          summary,
          summaryStats,
          stat,
          controls,
          downloadButton,
          runsHeader,
          runsHeaderButtons,
          loading,
          scrollableSummary,
          summaryCard,
          capitalized,
          summaryCardTitle,
          summaryCardContentLargeNumber,
          alertText,
          deletedExecutionRowIndex
        }; //#endregion
        //#region src/features/ai/evaluation.ee/views/TestRunDetailView.vue
        cssModules = {
          "$style": TestRunDetailView_vue_vue_type_style_index_1_lang_module_default
        };
        _export("default", TestRunDetailView_default = /* @__PURE__ */__plugin_vue_export_helper_default(TestRunDetailView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules], ["__scopeId", "data-v-fd115f6f"]])); //#endregion
      }
    };
  });
})();