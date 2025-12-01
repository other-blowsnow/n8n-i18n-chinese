;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy--Sn1h8On.js", "./_MapCache-legacy-BGDm4XBh.js", "./src-legacy-6DYpZVh_.js", "./en-legacy-DJK4SpPN.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-BWv-BWgW.js", "./icon-legacy-B_qPQAkZ.js", "./overlay-legacy-CKxjEHQ2.js", "./empty-legacy-ZG0-xpne.js", "./useMessage-legacy-DYJMik4p.js", "./useTelemetry-legacy-z15msZ3G.js", "./useToast-legacy-BYJycbCO.js", "./sanitize-html-legacy-D7fDKXy5.js", "./path-browserify-legacy-BRGcgaOH.js", "./constants-legacy-lM1Uv86G.js", "./merge-legacy-CyNDE0Ib.js", "./_baseOrderBy-legacy-DT_yzgQM.js", "./dateformat-legacy-C7RFTAF8.js", "./useDebounce-legacy-B0zW2D-C.js", "./useExternalHooks-legacy-D--WxRfr.js", "./useStyles-legacy-CJudPaTy.js", "./cloudPlan.store-legacy-CaAxcbYV.js", "./folders.store-legacy-B-8jqnKg.js", "./dataTable.store-legacy-ENA4UMK7.js", "./ProjectIcon-legacy-ByRpi0-Z.js", "./EnterpriseEdition.ee-legacy-D_sfuUXu.js", "./TimeAgo-legacy-tR0vQn0D.js", "./orderBy-legacy-C52GdvwP.js", "./ProjectSharing-legacy-B3p6DDWi.js", "./insights.store-legacy-BA4cTmK7.js", "./insights.constants-legacy-BcO47XGR.js", "./insights.utils-legacy-BIH8A6hh.js", "./readyToRun.store-legacy-D3EKAUpp.js", "./PageViewLayout-legacy-C0FEsEF6.js", "./ResourcesListLayout-legacy-m02gRo-l.js", "./ResourceFiltersDropdown-legacy-Y4WGJYui.js", "./ProjectHeader-legacy-BYuXwF61.js", "./smartDecimal-legacy-iG84Poh8.js", "./InsightsSummary-legacy-CDs-s8rk.js", "./DataTableActions-legacy-Dm2bbJNY.js"], function (_export, _context) {
    "use strict";

    var computed, toDisplayString, createElementBlock, createCommentVNode, unref, ref, createVNode, defineComponent, createBlock, onMounted, watch, withCtx, openBlock, withModifiers, createTextVNode, normalizeClass, createBaseVNode, useI18n, N8nText_default, N8nActionBox_default, N8nIcon_default, N8nCard_default, N8nBadge_default, N8nLink_default, __plugin_vue_export_helper_default, useRouter, useRoute, useDocumentTitle, useUIStore, useSourceControlStore, useProjectsStore, useToast, DATA_TABLE_DETAILS, ADD_DATA_TABLE_MODAL_KEY, DEFAULT_DATA_TABLE_PAGE_SIZE, PROJECT_DATA_TABLES, useDebounce, useDataTableStore, TimeAgo_default, useInsightsStore, useProjectPages, ResourcesListLayout_default, ProjectHeader_default, InsightsSummary_default, DataTableActions_default, __vite_style__, _hoisted_1, DataTableCard_vue_vue_type_script_setup_true_lang_default, card, DataTableCard_vue_vue_type_style_index_0_lang_module_default, cssModules, DataTableCard_default, DataTableView_vue_vue_type_script_setup_true_lang_default, DataTableView_default;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
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
        watch = _vueRuntimeEsmBundlerLegacy003Js._t;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        withModifiers = _vueRuntimeEsmBundlerLegacy003Js.h;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js.vn;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {
        N8nText_default = _srcLegacy007Js.Kn;
        N8nActionBox_default = _srcLegacy007Js.Ot;
        N8nIcon_default = _srcLegacy007Js.Yn;
        N8nCard_default = _srcLegacy007Js.Z;
        N8nBadge_default = _srcLegacy007Js.at;
        N8nLink_default = _srcLegacy007Js.ht;
      }, function (_enLegacy00bJs) {}, function (_preloadHelperLegacy00dJs) {}, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {
        useRouter = _truncateLegacy00hJs.b;
        useRoute = _truncateLegacy00hJs.y;
      }, function (_iconLegacy00nJs) {}, function (_overlayLegacy00rJs) {}, function (_emptyLegacy00vJs) {}, function (_useMessageLegacy00xJs) {}, function (_useTelemetryLegacy00HJs) {
        useDocumentTitle = _useTelemetryLegacy00HJs.Cn;
        useUIStore = _useTelemetryLegacy00HJs.Ni;
        useSourceControlStore = _useTelemetryLegacy00HJs.Tn;
        useProjectsStore = _useTelemetryLegacy00HJs.wn;
      }, function (_useToastLegacy00JJs) {
        useToast = _useToastLegacy00JJs.t;
      }, function (_sanitizeHtmlLegacy00LJs) {}, function (_pathBrowserifyLegacy00PJs) {}, function (_constantsLegacy00RJs) {
        DATA_TABLE_DETAILS = _constantsLegacy00RJs.Ar;
        ADD_DATA_TABLE_MODAL_KEY = _constantsLegacy00RJs.Er;
        DEFAULT_DATA_TABLE_PAGE_SIZE = _constantsLegacy00RJs.Lr;
        PROJECT_DATA_TABLES = _constantsLegacy00RJs.qr;
      }, function (_mergeLegacy00TJs) {}, function (_baseOrderByLegacy00XJs) {}, function (_dateformatLegacy00ZJs) {}, function (_useDebounceLegacy00$Js) {
        useDebounce = _useDebounceLegacy00$Js.t;
      }, function (_useExternalHooksLegacy011Js) {}, function (_useStylesLegacy013Js) {}, function (_cloudPlanStoreLegacy01bJs) {}, function (_foldersStoreLegacy01BJs) {}, function (_dataTableStoreLegacy01PJs) {
        useDataTableStore = _dataTableStoreLegacy01PJs.t;
      }, function (_ProjectIconLegacy02dJs) {}, function (_EnterpriseEditionEeLegacy02NJs) {}, function (_TimeAgoLegacy02RJs) {
        TimeAgo_default = _TimeAgoLegacy02RJs.t;
      }, function (_orderByLegacy02TJs) {}, function (_ProjectSharingLegacy02VJs) {}, function (_insightsStoreLegacy03bJs) {
        useInsightsStore = _insightsStoreLegacy03bJs.t;
      }, function (_insightsConstantsLegacy03dJs) {}, function (_insightsUtilsLegacy03fJs) {}, function (_readyToRunStoreLegacy04dJs) {
        useProjectPages = _readyToRunStoreLegacy04dJs.n;
      }, function (_PageViewLayoutLegacy04DJs) {}, function (_ResourcesListLayoutLegacy04NJs) {
        ResourcesListLayout_default = _ResourcesListLayoutLegacy04NJs.t;
      }, function (_ResourceFiltersDropdownLegacy04PJs) {}, function (_ProjectHeaderLegacy04RJs) {
        ProjectHeader_default = _ProjectHeaderLegacy04RJs.t;
      }, function (_smartDecimalLegacy04VJs) {}, function (_InsightsSummaryLegacy04XJs) {
        InsightsSummary_default = _InsightsSummaryLegacy04XJs.t;
      }, function (_DataTableActionsLegacy063Js) {
        DataTableActions_default = _DataTableActionsLegacy063Js.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._card_147lk_123 {\n  transition: box-shadow 0.3s ease;\n  cursor: pointer;\n}\n._card_147lk_123:hover {\n  box-shadow: 0 2px 8px rgba(68, 28, 23, 0.1);\n}\n._card-icon_147lk_131 {\n  flex-shrink: 0;\n  color: var(--color--text);\n  align-content: center;\n  text-align: center;\n}\n._card-header_147lk_138 {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-right: var(--spacing--xs);\n  margin-bottom: var(--spacing--5xs);\n}\n._card-footer_147lk_146 {\n  display: flex;\n}\n._info-cell_147lk_150 + ._info-cell_147lk_150::before {\n  content: \"|\";\n  margin: 0 var(--spacing--4xs);\n}\n@media screen and (max-width: 991px) {\n._card_147lk_123 {\n    flex-wrap: wrap;\n}\n._info-cell--created_147lk_159,\n  ._info-cell--column-count_147lk_160,\n  ._info-cell--size_147lk_161 {\n    display: none;\n}\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/features/core/dataTable/components/DataTableCard.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1 = {
          "data-test-id": "data-table-card"
        };
        DataTableCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "DataTableCard",
          props: {
            dataTable: {},
            readOnly: {
              type: Boolean,
              default: false
            },
            showOwnershipBadge: {
              type: Boolean,
              default: false
            }
          },
          setup(__props) {
            const i18n = useI18n();
            const dataTableStore = useDataTableStore();
            const props = __props;
            const dataTableRoute = computed(() => {
              return {
                name: DATA_TABLE_DETAILS,
                params: {
                  projectId: props.dataTable.projectId,
                  id: props.dataTable.id
                }
              };
            });
            const getDataTableSize = computed(() => {
              return dataTableStore.dataTableSizes[props.dataTable.id] ?? 0;
            });
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", _hoisted_1, [createVNode(unref(N8nLink_default), {
                to: dataTableRoute.value,
                class: "data-table-card",
                "data-test-id": "data-table-card-link"
              }, {
                default: withCtx(() => [createVNode(unref(N8nCard_default), {
                  class: normalizeClass(_ctx.$style.card)
                }, {
                  prepend: withCtx(() => [createVNode(unref(N8nIcon_default), {
                    "data-test-id": "data-table-card-icon",
                    class: normalizeClass(_ctx.$style["card-icon"]),
                    icon: "database",
                    size: "xlarge",
                    "stroke-width": 1
                  }, null, 8, ["class"])]),
                  header: withCtx(() => [createBaseVNode("div", {
                    class: normalizeClass(_ctx.$style["card-header"])
                  }, [createVNode(unref(N8nText_default), {
                    tag: "h2",
                    bold: "",
                    "data-test-id": "data-table-card-name"
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(props.dataTable.name), 1)]),
                    _: 1
                  }), props.readOnly ? (openBlock(), createBlock(unref(N8nBadge_default), {
                    key: 0,
                    class: "ml-3xs",
                    theme: "tertiary",
                    bold: ""
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflows.item.readonly")), 1)]),
                    _: 1
                  })) : createCommentVNode("", true)], 2)]),
                  footer: withCtx(() => [createBaseVNode("div", {
                    class: normalizeClass(_ctx.$style["card-footer"])
                  }, [createVNode(unref(N8nText_default), {
                    size: "small",
                    color: "text-light",
                    class: normalizeClass([_ctx.$style["info-cell"], _ctx.$style["info-cell--size"]]),
                    "data-test-id": "data-table-card-size"
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("dataTable.card.size", {
                      interpolate: {
                        size: getDataTableSize.value
                      }
                    })), 1)]),
                    _: 1
                  }, 8, ["class"]), createVNode(unref(N8nText_default), {
                    size: "small",
                    color: "text-light",
                    class: normalizeClass([_ctx.$style["info-cell"], _ctx.$style["info-cell--column-count"]]),
                    "data-test-id": "data-table-card-column-count"
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("dataTable.card.column.count", {
                      interpolate: {
                        count: props.dataTable.columns.length + 1
                      }
                    })), 1)]),
                    _: 1
                  }, 8, ["class"]), createVNode(unref(N8nText_default), {
                    size: "small",
                    color: "text-light",
                    class: normalizeClass([_ctx.$style["info-cell"], _ctx.$style["info-cell--updated"]]),
                    "data-test-id": "data-table-card-last-updated"
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workerList.item.lastUpdated")) + " ", 1), createVNode(TimeAgo_default, {
                      date: String(props.dataTable.updatedAt)
                    }, null, 8, ["date"])]),
                    _: 1
                  }, 8, ["class"]), createVNode(unref(N8nText_default), {
                    size: "small",
                    color: "text-light",
                    class: normalizeClass([_ctx.$style["info-cell"], _ctx.$style["info-cell--created"]]),
                    "data-test-id": "data-table-card-created"
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflows.item.created")) + " ", 1), createVNode(TimeAgo_default, {
                      date: String(props.dataTable.createdAt)
                    }, null, 8, ["date"])]),
                    _: 1
                  }, 8, ["class"])], 2)]),
                  append: withCtx(() => [createBaseVNode("div", {
                    class: normalizeClass(_ctx.$style["card-actions"]),
                    onClick: _cache[0] || (_cache[0] = withModifiers(() => {}, ["prevent"]))
                  }, [createVNode(DataTableActions_default, {
                    "data-table": props.dataTable,
                    "is-read-only": props.readOnly,
                    location: "card"
                  }, null, 8, ["data-table", "is-read-only"])], 2)]),
                  _: 1
                }, 8, ["class"])]),
                _: 1
              }, 8, ["to"])]);
            };
          }
        }); //#endregion
        //#region src/features/core/dataTable/components/DataTableCard.vue?vue&type=style&index=0&lang.module.scss
        card = "_card_147lk_123";
        DataTableCard_vue_vue_type_style_index_0_lang_module_default = {
          card,
          "card-icon": "_card-icon_147lk_131",
          "card-header": "_card-header_147lk_138",
          "card-footer": "_card-footer_147lk_146",
          "info-cell": "_info-cell_147lk_150",
          "info-cell--created": "_info-cell--created_147lk_159",
          "info-cell--column-count": "_info-cell--column-count_147lk_160",
          "info-cell--size": "_info-cell--size_147lk_161"
        }; //#endregion
        //#region src/features/core/dataTable/components/DataTableCard.vue
        cssModules = {
          "$style": DataTableCard_vue_vue_type_style_index_0_lang_module_default
        };
        DataTableCard_default = /* @__PURE__ */__plugin_vue_export_helper_default(DataTableCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]]); //#endregion
        //#region src/features/core/dataTable/DataTableView.vue?vue&type=script&setup=true&lang.ts
        DataTableView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "DataTableView",
          setup(__props) {
            const i18n = useI18n();
            const route = useRoute();
            const router = useRouter();
            const projectPages = useProjectPages();
            const {
              callDebounced
            } = useDebounce();
            const documentTitle = useDocumentTitle();
            const toast = useToast();
            const dataTableStore = useDataTableStore();
            const insightsStore = useInsightsStore();
            const projectsStore = useProjectsStore();
            const sourceControlStore = useSourceControlStore();
            const uiStore = useUIStore();
            const loading = ref(true);
            const currentPage = ref(1);
            const pageSize = ref(10);
            const dataTableResources = computed(() => dataTableStore.dataTables.map(ds => {
              return {
                ...ds,
                resourceType: "dataTable"
              };
            }));
            const totalCount = computed(() => dataTableStore.totalCount);
            const currentProject = computed(() => {
              if (projectPages.isOverviewSubPage) return projectsStore.personalProject;
              return projectsStore.currentProject;
            });
            const readOnlyEnv = computed(() => sourceControlStore.preferences.branchReadOnly);
            const initialize = async () => {
              loading.value = true;
              const projectIdFilter = projectPages.isOverviewSubPage ? "" : projectsStore.currentProjectId;
              try {
                await dataTableStore.fetchDataTables(projectIdFilter ?? "", currentPage.value, pageSize.value);
              } catch (error) {
                toast.showError(error, "Error loading data tables");
              } finally {
                loading.value = false;
              }
            };
            const onPaginationUpdate = async payload => {
              if (payload.page) currentPage.value = payload.page;
              if (payload.pageSize) pageSize.value = payload.pageSize;
              if (!loading.value) await callDebounced(initialize, {
                debounceTime: 200,
                trailing: true
              });
            };
            const onAddModalClick = () => {
              router.push({
                name: PROJECT_DATA_TABLES,
                params: {
                  projectId: currentProject.value?.id,
                  new: "new"
                }
              });
            };
            onMounted(() => {
              documentTitle.set(i18n.baseText("dataTable.dataTables"));
            });
            watch(() => route.params.new, () => {
              if (route.params.new === "new") uiStore.openModal(ADD_DATA_TABLE_MODAL_KEY);else uiStore.closeModal(ADD_DATA_TABLE_MODAL_KEY);
            }, {
              immediate: true
            });
            return (_ctx, _cache) => {
              return openBlock(), createBlock(ResourcesListLayout_default, {
                ref: "layout",
                "resource-key": "dataTable",
                type: "list-paginated",
                resources: dataTableResources.value,
                initialize,
                "type-props": {
                  itemSize: 80
                },
                loading: loading.value,
                disabled: false,
                "total-items": totalCount.value,
                "dont-perform-sorting-and-filtering": true,
                "ui-config": {
                  searchEnabled: false,
                  showFiltersDropdown: false,
                  sortEnabled: false
                },
                "onUpdate:paginationAndSort": onPaginationUpdate
              }, {
                header: withCtx(() => [createVNode(ProjectHeader_default, {
                  "main-button": "dataTable"
                }, {
                  default: withCtx(() => [unref(projectPages).isOverviewSubPage && unref(insightsStore).isSummaryEnabled ? (openBlock(), createBlock(InsightsSummary_default, {
                    key: 0,
                    loading: unref(insightsStore).weeklySummary.isLoading,
                    summary: unref(insightsStore).weeklySummary.state,
                    "time-range": "week"
                  }, null, 8, ["loading", "summary"])) : createCommentVNode("", true)]),
                  _: 1
                })]),
                empty: withCtx(() => [createVNode(unref(N8nActionBox_default), {
                  "data-test-id": "empty-data-table-action-box",
                  heading: unref(i18n).baseText("dataTable.empty.label"),
                  description: unref(i18n).baseText("dataTable.empty.description"),
                  "button-text": unref(i18n).baseText("dataTable.add.button.label"),
                  "button-type": "secondary",
                  "button-disabled": !unref(dataTableStore).projectPermissions.dataTable.create,
                  "button-icon": !unref(dataTableStore).projectPermissions.dataTable.create ? "lock" : void 0,
                  "onClick:button": onAddModalClick
                }, {
                  disabledButtonTooltip: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("dataTable.empty.button.disabled.tooltip")), 1)]),
                  _: 1
                }, 8, ["heading", "description", "button-text", "button-disabled", "button-icon"])]),
                item: withCtx(({
                  item: data
                }) => [createVNode(DataTableCard_default, {
                  class: "mb-2xs",
                  "data-table": data,
                  "show-ownership-badge": unref(projectPages).isOverviewSubPage,
                  "read-only": readOnlyEnv.value
                }, null, 8, ["data-table", "show-ownership-badge", "read-only"])]),
                _: 1
              }, 8, ["resources", "loading", "total-items"]);
            };
          }
        }); //#endregion
        //#region src/features/core/dataTable/DataTableView.vue
        _export("default", DataTableView_default = DataTableView_vue_vue_type_script_setup_true_lang_default); //#endregion
      }
    };
  });
})();