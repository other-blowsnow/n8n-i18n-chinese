;
(function () {
  System.register(["./chunk-legacy-Re9CbdfL.js", "./vue.runtime.esm-bundler-legacy--Sn1h8On.js", "./_MapCache-legacy-D8JKoBWh.js", "./src-legacy-Cj9TtJhY.js", "./en-legacy-DJK4SpPN.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-B7Y_hCM_.js", "./icon-legacy-BY20yo2X.js", "./empty-legacy-ZG0-xpne.js", "./useTelemetry-legacy-CBjbIfKX.js", "./sanitize-html-legacy-B93rGWi4.js", "./CalendarDate-legacy-BUvNgcoo.js", "./path-browserify-legacy-PZw06cM9.js", "./constants-legacy-DVoQkFTS.js", "./merge-legacy-DGYepJ5X.js", "./_baseOrderBy-legacy-CowL7g45.js", "./dateformat-legacy-C4HUJTCr.js", "./useDebounce-legacy-aeZbWFlx.js", "./ProjectIcon-legacy-D09JqkUx.js", "./EnterpriseEdition.ee-legacy-BezBlb8Q.js", "./TimeAgo-legacy-CWTiYOZU.js", "./orderBy-legacy-DJAeMB1W.js", "./ProjectSharing-legacy-BF7CQSJT.js", "./ResourceFiltersDropdown-legacy-CVmazF39.js", "./SeverityTag-legacy-BjWlXgED.js"], function (_export, _context) {
    "use strict";

    var __toESM, computed, toDisplayString, createElementBlock, createCommentVNode, unref, ref, createVNode, defineComponent, createBlock, Fragment, withCtx, openBlock, withModifiers, renderList, createTextVNode, normalizeClass, createBaseVNode, useI18n, useDebounceFn, useAsyncState, N8nSelect_default, N8nButton_default, N8nOption_default, N8nText_default, N8nIcon_default, N8nInputLabel_default, N8nDataTableServer_default, N8nLoading_default, N8nLink_default, N8nTag_default, N8nInput_default, __plugin_vue_export_helper_default, useRouter, VIEWS, useRootStore, TimeAgo_default, require_orderBy, ResourceFiltersDropdown_default, getReportForRule, SeverityTag_default, __vite_style__, import_orderBy, _hoisted_1, _hoisted_2, _hoisted_3, _hoisted_4, MigrationRuleDetail_vue_vue_type_script_setup_true_lang_default, backButton, clickableRow, filterControls, NoLineBreak, UnderlinedText, MigrationRuleDetail_vue_vue_type_style_index_0_lang_module_default, cssModules, MigrationRuleDetail_default;
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
        useDebounceFn = _MapCacheLegacy005Js.rt;
        useAsyncState = _MapCacheLegacy005Js.x;
      }, function (_srcLegacy007Js) {
        N8nSelect_default = _srcLegacy007Js.G;
        N8nButton_default = _srcLegacy007Js.Hn;
        N8nOption_default = _srcLegacy007Js.K;
        N8nText_default = _srcLegacy007Js.Vn;
        N8nIcon_default = _srcLegacy007Js.Wn;
        N8nInputLabel_default = _srcLegacy007Js.X;
        N8nDataTableServer_default = _srcLegacy007Js.s;
        N8nLoading_default = _srcLegacy007Js.tt;
        N8nLink_default = _srcLegacy007Js.ut;
        N8nTag_default = _srcLegacy007Js.v;
        N8nInput_default = _srcLegacy007Js.yt;
      }, function (_enLegacy00bJs) {}, function (_preloadHelperLegacy00dJs) {}, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {
        useRouter = _truncateLegacy00hJs.b;
      }, function (_iconLegacy00nJs) {}, function (_emptyLegacy00vJs) {}, function (_useTelemetryLegacy00HJs) {}, function (_sanitizeHtmlLegacy00LJs) {}, function (_CalendarDateLegacy00NJs) {}, function (_pathBrowserifyLegacy00RJs) {}, function (_constantsLegacy00TJs) {
        VIEWS = _constantsLegacy00TJs.Po;
      }, function (_mergeLegacy00VJs) {}, function (_baseOrderByLegacy00ZJs) {
        useRootStore = _baseOrderByLegacy00ZJs.r;
      }, function (_dateformatLegacy00$Js) {}, function (_useDebounceLegacy011Js) {}, function (_ProjectIconLegacy02fJs) {}, function (_EnterpriseEditionEeLegacy02PJs) {}, function (_TimeAgoLegacy02TJs) {
        TimeAgo_default = _TimeAgoLegacy02TJs.t;
      }, function (_orderByLegacy02VJs) {
        require_orderBy = _orderByLegacy02VJs.t;
      }, function (_ProjectSharingLegacy02XJs) {}, function (_ResourceFiltersDropdownLegacy04RJs) {
        ResourceFiltersDropdown_default = _ResourceFiltersDropdownLegacy04RJs.t;
      }, function (_SeverityTagLegacy07vJs) {
        getReportForRule = _SeverityTagLegacy07vJs.r;
        SeverityTag_default = _SeverityTagLegacy07vJs.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "\n._backButton_1kw04_2 {\n\tpadding-left: 0;\n}\n._clickableRow_1kw04_6 {\n\tcursor: pointer;\n}\n._filterControls_1kw04_10 {\n\tdisplay: flex;\n\tgap: var(--spacing--xs);\n\tmargin-bottom: var(--spacing--md);\n\talign-items: center;\n\tjustify-content: end;\n}\n._filterControls_1kw04_10 > :first-child {\n\tflex: 1;\n\tmax-width: 400px;\n}\n._NoLineBreak_1kw04_23 {\n\twhite-space: nowrap;\n}\n._UnderlinedText_1kw04_27 {\n\ttext-decoration: underline;\n}\n/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/features/settings/migrationReport/MigrationRuleDetail.vue?vue&type=script&setup=true&lang.ts
        import_orderBy = /* @__PURE__ */__toESM(require_orderBy());
        _hoisted_1 = {
          class: "mb-2xs"
        };
        _hoisted_2 = {
          class: "mb-2xl"
        };
        _hoisted_3 = {
          style: {
            "white-space": "nowrap",
            "overflow": "hidden",
            "text-overflow": "ellipsis"
          }
        };
        _hoisted_4 = {
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
              title: i18n.baseText("settings.migrationReport.detail.table.status"),
              key: "active",
              value: row => row.active ? i18n.baseText("settings.migrationReport.detail.table.active") : i18n.baseText("settings.migrationReport.detail.table.deactivated"),
              width: 40
            }, {
              title: i18n.baseText("settings.migrationReport.detail.table.nodesAffected"),
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
              return openBlock(), createElementBlock("div", null, [createVNode(unref(N8nButton_default), {
                class: normalizeClass([_ctx.$style.backButton, "mb-xs"]),
                type: "secondary",
                text: "",
                icon: "arrow-left",
                label: unref(i18n).baseText("generic.back"),
                onClick: _cache[0] || (_cache[0] = $event => unref(router).push({
                  name: unref(VIEWS).MIGRATION_REPORT
                }))
              }, null, 8, ["class", "label"]), unref(isLoading) ? (openBlock(), createElementBlock(Fragment, {
                key: 0
              }, [createBaseVNode("div", _hoisted_1, [createVNode(unref(N8nLoading_default), {
                variant: "h1"
              })]), createBaseVNode("div", _hoisted_2, [createVNode(unref(N8nLoading_default), {
                variant: "p",
                rows: 2
              })])], 64)) : (openBlock(), createElementBlock(Fragment, {
                key: 1
              }, [createVNode(unref(N8nText_default), {
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
                default: withCtx(() => [createTextVNode(toDisplayString(unref(state).ruleDescription) + toDisplayString(unref(state).ruleDescription.endsWith(".") ? "" : ".") + " ", 1), unref(state).ruleDocumentationUrl ? (openBlock(), createBlock(unref(N8nLink_default), {
                  key: 0,
                  theme: "text",
                  href: unref(state).ruleDocumentationUrl,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  class: normalizeClass(_ctx.$style.NoLineBreak)
                }, {
                  default: withCtx(() => [createBaseVNode("span", {
                    class: normalizeClass(_ctx.$style.UnderlinedText)
                  }, toDisplayString(unref(i18n).baseText("settings.migrationReport.documentation")), 3), _cache[4] || (_cache[4] = createTextVNode(" ↗ "))]),
                  _: 1
                }, 8, ["href", "class"])) : createCommentVNode("", true)]),
                _: 1
              })], 64)), createBaseVNode("div", {
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
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => statusFilter.value = $event),
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
                "onUpdate:sortBy": _cache[3] || (_cache[3] = $event => sortBy.value = $event),
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
                }) => [createBaseVNode("div", _hoisted_3, [(openBlock(true), createElementBlock(Fragment, null, renderList(item.issues, (issue, index) => {
                  return openBlock(), createElementBlock(Fragment, {
                    key: issue.nodeId
                  }, [createVNode(unref(N8nLink_default), {
                    theme: "text",
                    to: `/workflow/${item.id}/${issue.nodeId}`,
                    "new-window": "",
                    onClickCapture: _cache[2] || (_cache[2] = withModifiers(() => {}, ["stop"]))
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
                }, null, 8, ["date"])) : (openBlock(), createElementBlock("span", _hoisted_4, toDisplayString(unref(i18n).baseText("settings.migrationReport.detail.table.never")), 1))]),
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
        backButton = "_backButton_1kw04_2";
        clickableRow = "_clickableRow_1kw04_6";
        filterControls = "_filterControls_1kw04_10";
        NoLineBreak = "_NoLineBreak_1kw04_23";
        UnderlinedText = "_UnderlinedText_1kw04_27";
        MigrationRuleDetail_vue_vue_type_style_index_0_lang_module_default = {
          backButton,
          clickableRow,
          filterControls,
          NoLineBreak,
          UnderlinedText
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