;
(function () {
  System.register(["./chunk-legacy-Re9CbdfL.js", "./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-2Qb71DGn.js", "./src-legacy-BL8uywAx.js", "./en-legacy-s6H-lEA2.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-ZZ87M1Mo.js", "./icon-legacy-CRT-hvlv.js", "./empty-legacy-CsIOGMHW.js", "./useTelemetry-legacy-Ck7lGOrk.js", "./sanitize-html-legacy-Cack6L-S.js", "./path-browserify-legacy-BQKq4wLb.js", "./constants-legacy-D0ziSY9e.js", "./merge-legacy-BVgKBTAX.js", "./useRootStore-legacy-D1vvqLPX.js", "./dateformat-legacy-BaeIHy_2.js", "./useDebounce-legacy-B8z7M2-W.js", "./ProjectIcon-legacy-BkbwR6gt.js", "./EnterpriseEdition.ee-legacy-CaETc6WB.js", "./TimeAgo-legacy-0Pebf6wR.js", "./orderBy-legacy-DFuXsW_8.js", "./ProjectSharing-legacy-CVZpNstN.js", "./ResourceFiltersDropdown-legacy-CoAocq-j.js", "./SeverityTag-legacy-BHeAn8qg.js"], function (_export, _context) {
    "use strict";

    var __toESM, computed, createElementBlock, createCommentVNode, unref, ref, createVNode, defineComponent, toDisplayString, createBlock, Fragment, normalizeClass, withCtx, openBlock, withModifiers, renderList, createTextVNode, createBaseVNode, useI18n, useDebounceFn, useAsyncState, N8nIcon_default, N8nSelect_default, N8nOption_default, N8nText_default, N8nInputLabel_default, N8nLink_default, N8nDataTableServer_default, N8nTag_default, N8nInput_default, __plugin_vue_export_helper_default, useRouter, VIEWS, useRootStore, TimeAgo_default, require_orderBy, ResourceFiltersDropdown_default, getReportForRule, SeverityTag_default, __vite_style__, import_orderBy, _hoisted_1, _hoisted_2, MigrationRuleDetail_vue_vue_type_script_setup_true_lang_default, clickableRow, filterControls, NoLineBreak, MigrationRuleDetail_vue_vue_type_style_index_0_lang_module_default, cssModules, MigrationRuleDetail_default;
    return {
      setters: [function (_chunkLegacy001Js) {
        __toESM = _chunkLegacy001Js.o;
      }, function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Sn;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        Fragment = _vueRuntimeEsmBundlerLegacy003Js._;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js._n;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        withModifiers = _vueRuntimeEsmBundlerLegacy003Js.h;
        renderList = _vueRuntimeEsmBundlerLegacy003Js.it;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
        useDebounceFn = _MapCacheLegacy005Js.rt;
        useAsyncState = _MapCacheLegacy005Js.x;
      }, function (_srcLegacy007Js) {
        N8nIcon_default = _srcLegacy007Js.Bn;
        N8nSelect_default = _srcLegacy007Js.G;
        N8nOption_default = _srcLegacy007Js.K;
        N8nText_default = _srcLegacy007Js.Ln;
        N8nInputLabel_default = _srcLegacy007Js.X;
        N8nLink_default = _srcLegacy007Js.ht;
        N8nDataTableServer_default = _srcLegacy007Js.s;
        N8nTag_default = _srcLegacy007Js.v;
        N8nInput_default = _srcLegacy007Js.wt;
      }, function (_enLegacy00bJs) {}, function (_preloadHelperLegacy00dJs) {}, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {
        useRouter = _truncateLegacy00hJs.b;
      }, function (_iconLegacy00lJs) {}, function (_emptyLegacy00tJs) {}, function (_useTelemetryLegacy00FJs) {}, function (_sanitizeHtmlLegacy00JJs) {}, function (_pathBrowserifyLegacy00LJs) {}, function (_constantsLegacy00NJs) {
        VIEWS = _constantsLegacy00NJs.Oo;
      }, function (_mergeLegacy00PJs) {}, function (_useRootStoreLegacy00TJs) {
        useRootStore = _useRootStoreLegacy00TJs.t;
      }, function (_dateformatLegacy00VJs) {}, function (_useDebounceLegacy00XJs) {}, function (_ProjectIconLegacy029Js) {}, function (_EnterpriseEditionEeLegacy02JJs) {}, function (_TimeAgoLegacy02NJs) {
        TimeAgo_default = _TimeAgoLegacy02NJs.t;
      }, function (_orderByLegacy02PJs) {
        require_orderBy = _orderByLegacy02PJs.t;
      }, function (_ProjectSharingLegacy02RJs) {}, function (_ResourceFiltersDropdownLegacy04DJs) {
        ResourceFiltersDropdown_default = _ResourceFiltersDropdownLegacy04DJs.t;
      }, function (_SeverityTagLegacy079Js) {
        getReportForRule = _SeverityTagLegacy079Js.r;
        SeverityTag_default = _SeverityTagLegacy079Js.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "\n._clickableRow_smt9p_2 {\n\tcursor: pointer;\n}\n._filterControls_smt9p_6 {\n\tdisplay: flex;\n\tgap: var(--spacing--xs);\n\tmargin-bottom: var(--spacing--md);\n\talign-items: center;\n\tjustify-content: end;\n}\n._filterControls_smt9p_6 > :first-child {\n\tflex: 1;\n\tmax-width: 400px;\n}\n._NoLineBreak_smt9p_19 {\n\twhite-space: nowrap;\n}\n/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/features/settings/migrationReport/MigrationRuleDetail.vue?vue&type=script&setup=true&lang.ts
        import_orderBy = /* @__PURE__ */__toESM(require_orderBy());
        _hoisted_1 = {
          style: {
            "white-space": "nowrap",
            "overflow": "hidden",
            "text-overflow": "ellipsis"
          }
        };
        _hoisted_2 = {
          key: 1
        };
        MigrationRuleDetail_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "MigrationRuleDetail",
          props: {
            migrationRuleId: {}
          },
          setup(__props) {
            const i18n = useI18n();
            const props = __props;
            const router = useRouter();
            const {
              state,
              isLoading
            } = useAsyncState(async () => {
              return await getReportForRule(useRootStore().restApiContext, props.migrationRuleId);
            }, {
              ruleId: "",
              ruleTitle: "",
              ruleDescription: "",
              ruleSeverity: "low",
              affectedWorkflows: [],
              recommendations: []
            });
            const tableHeaders = ref([{
              title: i18n.baseText("settings.migrationReport.detail.table.name"),
              key: "name",
              width: 200
            }, {
              title: i18n.baseText("settings.migrationReport.detail.table.issue"),
              key: "active",
              value: row => row.active ? i18n.baseText("settings.migrationReport.detail.table.active") : i18n.baseText("settings.migrationReport.detail.table.deactivated"),
              width: 40
            }, {
              title: i18n.baseText("settings.migrationReport.detail.table.nodeAffected"),
              key: "issues"
            }, {
              title: i18n.baseText("settings.migrationReport.detail.table.numberOfExecutions"),
              key: "numberOfExecutions",
              width: 40
            }, {
              title: i18n.baseText("settings.migrationReport.detail.table.lastExecuted"),
              key: "lastExecutedAt",
              width: 40
            }, {
              title: i18n.baseText("settings.migrationReport.detail.table.lastUpdated"),
              key: "lastUpdatedAt",
              width: 40
            }]);
            function handleRowClick(_event, {
              item
            }) {
              window.open(router.resolve({
                name: VIEWS.WORKFLOW,
                params: {
                  name: item.id
                }
              }).href, "_blank");
            }
            const sortBy = ref([{
              id: "numberOfExecutions",
              desc: true
            }]);
            const searchInput = ref("");
            const searchQuery = ref("");
            const statusFilter = ref("");
            const debouncedSearch = useDebounceFn(value => {
              searchQuery.value = value;
            }, 300);
            const onSearchInput = value => {
              searchInput.value = value;
              debouncedSearch(value);
            };
            const statusOptions = computed(() => [{
              value: "",
              label: i18n.baseText("settings.migrationReport.detail.filter.status.all")
            }, {
              value: "active",
              label: i18n.baseText("settings.migrationReport.detail.filter.status.active")
            }, {
              value: "deactivated",
              label: i18n.baseText("settings.migrationReport.detail.filter.status.deactivated")
            }]);
            const filters = computed(() => ({
              search: searchInput.value,
              status: statusFilter.value
            }));
            const filterKeys = computed(() => ["status"]);
            const wasJustReset = ref(false);
            const resetFilters = () => {
              statusFilter.value = "";
              wasJustReset.value = true;
            };
            const onUpdateFilters = newFilters => {
              if (wasJustReset.value) {
                wasJustReset.value = false;
                return;
              }
              statusFilter.value = newFilters.status || "";
            };
            const filteredWorkflows = computed(() => {
              let workflows = state.value.affectedWorkflows;
              if (searchQuery.value) {
                const query = searchQuery.value.toLowerCase();
                workflows = workflows.filter(workflow => workflow.name.toLowerCase().includes(query));
              }
              if (statusFilter.value !== "") workflows = workflows.filter(workflow => {
                if (statusFilter.value === "active") return workflow.active;else if (statusFilter.value === "deactivated") return !workflow.active;
                return true;
              });
              return workflows;
            });
            const sortedWorkflows = computed(() => {
              if (!sortBy.value.length) return filteredWorkflows.value;
              return (0, import_orderBy.default)(filteredWorkflows.value, [sortBy.value[0].id], [sortBy.value[0].desc ? "desc" : "asc"]);
            });
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", null, [createVNode(unref(N8nText_default), {
                tag: "h2",
                size: "xlarge",
                color: "text-dark",
                class: "mb-2xs",
                style: {
                  "display": "flex",
                  "align-items": "center",
                  "gap": "4px"
                }
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(state).ruleTitle) + " ", 1), createVNode(SeverityTag_default, {
                  severity: unref(state).ruleSeverity
                }, null, 8, ["severity"]), createVNode(unref(N8nTag_default), {
                  text: unref(i18n).baseText("settings.migrationReport.detail.affectedTag", {
                    interpolate: {
                      count: String(unref(state).affectedWorkflows.length)
                    }
                  }),
                  clickable: false
                }, null, 8, ["text"])]),
                _: 1
              }), createVNode(unref(N8nText_default), {
                tag: "p",
                color: "text-base",
                class: "mb-2xl"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(state).ruleDescription) + " ", 1), unref(state).ruleDocumentationUrl ? (openBlock(), createBlock(unref(N8nLink_default), {
                  key: 0,
                  theme: "text",
                  underline: "",
                  href: unref(state).ruleDocumentationUrl,
                  target: "_blank",
                  rel: "noopener noreferrer"
                }, {
                  default: withCtx(() => [createBaseVNode("u", {
                    class: normalizeClass(_ctx.$style.NoLineBreak)
                  }, [createTextVNode(toDisplayString(unref(i18n).baseText("settings.migrationReport.documentation")) + " ", 1), createVNode(unref(N8nIcon_default), {
                    icon: "external-link"
                  })], 2)]),
                  _: 1
                }, 8, ["href"])) : createCommentVNode("", true)]),
                _: 1
              }), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.filterControls)
              }, [createVNode(unref(N8nInput_default), {
                "model-value": filters.value.search,
                placeholder: unref(i18n).baseText("settings.migrationReport.detail.search.placeholder"),
                size: "small",
                clearable: "",
                "data-test-id": "migration-rule-search",
                "onUpdate:modelValue": onSearchInput
              }, {
                prefix: withCtx(() => [createVNode(unref(N8nIcon_default), {
                  icon: "search"
                })]),
                _: 1
              }, 8, ["model-value", "placeholder"]), createVNode(ResourceFiltersDropdown_default, {
                keys: filterKeys.value,
                reset: resetFilters,
                "model-value": filters.value,
                shareable: false,
                "data-test-id": "migration-rule-filters",
                "onUpdate:modelValue": onUpdateFilters
              }, {
                default: withCtx(() => [createVNode(unref(N8nInputLabel_default), {
                  label: unref(i18n).baseText("settings.migrationReport.detail.filter.status.label"),
                  bold: false,
                  size: "small",
                  color: "text-base",
                  class: "mb-3xs"
                }, null, 8, ["label"]), createVNode(unref(N8nSelect_default), {
                  modelValue: statusFilter.value,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => statusFilter.value = $event),
                  size: "small",
                  "data-test-id": "migration-rule-status-filter"
                }, {
                  default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(statusOptions.value, option => {
                    return openBlock(), createBlock(unref(N8nOption_default), {
                      key: option.value,
                      value: option.value,
                      label: option.label
                    }, null, 8, ["value", "label"]);
                  }), 128))]),
                  _: 1
                }, 8, ["modelValue"])]),
                _: 1
              }, 8, ["keys", "model-value"])], 2), createVNode(unref(N8nDataTableServer_default), {
                "sort-by": sortBy.value,
                "onUpdate:sortBy": _cache[2] || (_cache[2] = $event => sortBy.value = $event),
                "items-per-page": sortedWorkflows.value.length + 1,
                items: sortedWorkflows.value,
                "items-length": sortedWorkflows.value.length,
                headers: tableHeaders.value,
                "row-props": {
                  class: _ctx.$style.clickableRow
                },
                loading: unref(isLoading),
                "onClick:row": handleRowClick
              }, {
                [`item.issues`]: withCtx(({
                  item
                }) => [createBaseVNode("div", _hoisted_1, [(openBlock(true), createElementBlock(Fragment, null, renderList(item.issues, (issue, index) => {
                  return openBlock(), createElementBlock(Fragment, {
                    key: issue.nodeId
                  }, [createVNode(unref(N8nLink_default), {
                    theme: "text",
                    to: `/workflow/${item.id}/${issue.nodeId}`,
                    "new-window": "",
                    onClickCapture: _cache[1] || (_cache[1] = withModifiers(() => {}, ["stop"]))
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(issue.nodeName), 1)]),
                    _: 2
                  }, 1032, ["to"]), index < item.issues.length - 1 ? (openBlock(), createElementBlock(Fragment, {
                    key: 0
                  }, [createTextVNode(", ")], 64)) : createCommentVNode("", true)], 64);
                }), 128))])]),
                [`item.lastExecutedAt`]: withCtx(({
                  item
                }) => [item.lastExecutedAt ? (openBlock(), createBlock(TimeAgo_default, {
                  key: 0,
                  date: item.lastExecutedAt.toString()
                }, null, 8, ["date"])) : (openBlock(), createElementBlock("span", _hoisted_2, toDisplayString(unref(i18n).baseText("settings.migrationReport.detail.table.never")), 1))]),
                [`item.lastUpdatedAt`]: withCtx(({
                  item
                }) => [createVNode(TimeAgo_default, {
                  date: item.lastUpdatedAt.toString()
                }, null, 8, ["date"])]),
                _: 2
              }, 1032, ["sort-by", "items-per-page", "items", "items-length", "headers", "row-props", "loading"])]);
            };
          }
        }); //#endregion
        //#region src/features/settings/migrationReport/MigrationRuleDetail.vue?vue&type=style&index=0&lang.module.css
        clickableRow = "_clickableRow_smt9p_2";
        filterControls = "_filterControls_smt9p_6";
        NoLineBreak = "_NoLineBreak_smt9p_19";
        MigrationRuleDetail_vue_vue_type_style_index_0_lang_module_default = {
          clickableRow,
          filterControls,
          NoLineBreak
        }; //#endregion
        //#region src/features/settings/migrationReport/MigrationRuleDetail.vue
        cssModules = {
          "$style": MigrationRuleDetail_vue_vue_type_style_index_0_lang_module_default
        };
        _export("default", MigrationRuleDetail_default = /* @__PURE__ */__plugin_vue_export_helper_default(MigrationRuleDetail_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]])); //#endregion
      }
    };
  });
})();