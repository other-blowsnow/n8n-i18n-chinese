import { P as ProjectHeader } from "./ProjectHeader-CYIT9cV4.js";
import { I as InsightsSummary } from "./InsightsSummary-CXuohQVO.js";
import { u as useProjectPages } from "./useProjectPages-D6UYj_vc.js";
import { d as defineComponent, hr as useDataTableStore, x as computed, hs as DATA_TABLE_DETAILS, h as createElementBlock, g as openBlock, i as createVNode, w as withCtx, k as unref, s as N8nCard, n as normalizeClass, j as createBaseVNode, B as withModifiers, p as N8nText, l as createTextVNode, t as toDisplayString, c as useI18n, eO as _sfc_main$3, e as createBlock, f as createCommentVNode, aL as N8nBadge, N as N8nIcon, C as N8nLink, _ as _export_sfc, a3 as useRoute, b as useRouter, P as useDebounce, ay as useDocumentTitle, a as useToast, g$ as useInsightsStore, av as useProjectsStore, af as useSourceControlStore, Q as useUIStore, r as ref, o as onMounted, a8 as watch, dW as N8nActionBox, h8 as PROJECT_DATA_TABLES, ht as DEFAULT_DATA_TABLE_PAGE_SIZE, hu as ADD_DATA_TABLE_MODAL_KEY } from "./index-lkSN61-i.js";
import { _ as _sfc_main$2 } from "./DataTableActions.vue_vue_type_script_setup_true_lang-DK8bDAvS.js";
import { R as ResourcesListLayout } from "./ResourcesListLayout-CpgbZPrX.js";
import "./readyToRunWorkflowsV2.store-DqUevUzq.js";
import "./PageViewLayout-CwSpNark.js";
import "./TableBase-C6jdITiD.js";
const _hoisted_1 = { "data-test-id": "data-table-card" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DataTableCard",
  props: {
    dataTable: {},
    readOnly: { type: Boolean, default: false },
    showOwnershipBadge: { type: Boolean, default: false }
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
      const size = dataTableStore.dataTableSizes[props.dataTable.id] ?? 0;
      return size;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(unref(N8nLink), {
          to: dataTableRoute.value,
          class: "data-table-card",
          "data-test-id": "data-table-card-link"
        }, {
          default: withCtx(() => [
            createVNode(unref(N8nCard), {
              class: normalizeClass(_ctx.$style.card)
            }, {
              prepend: withCtx(() => [
                createVNode(unref(N8nIcon), {
                  "data-test-id": "data-table-card-icon",
                  class: normalizeClass(_ctx.$style["card-icon"]),
                  icon: "database",
                  size: "xlarge",
                  "stroke-width": 1
                }, null, 8, ["class"])
              ]),
              header: withCtx(() => [
                createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style["card-header"])
                }, [
                  createVNode(unref(N8nText), {
                    tag: "h2",
                    bold: "",
                    "data-test-id": "data-table-card-name"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(props.dataTable.name), 1)
                    ]),
                    _: 1
                  }),
                  props.readOnly ? (openBlock(), createBlock(unref(N8nBadge), {
                    key: 0,
                    class: "ml-3xs",
                    theme: "tertiary",
                    bold: ""
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(i18n).baseText("workflows.item.readonly")), 1)
                    ]),
                    _: 1
                  })) : createCommentVNode("", true)
                ], 2)
              ]),
              footer: withCtx(() => [
                createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style["card-footer"])
                }, [
                  createVNode(unref(N8nText), {
                    size: "small",
                    color: "text-light",
                    class: normalizeClass([_ctx.$style["info-cell"], _ctx.$style["info-cell--size"]]),
                    "data-test-id": "data-table-card-size"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(i18n).baseText("dataTable.card.size", {
                        interpolate: { size: getDataTableSize.value }
                      })), 1)
                    ]),
                    _: 1
                  }, 8, ["class"]),
                  createVNode(unref(N8nText), {
                    size: "small",
                    color: "text-light",
                    class: normalizeClass([_ctx.$style["info-cell"], _ctx.$style["info-cell--column-count"]]),
                    "data-test-id": "data-table-card-column-count"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(i18n).baseText("dataTable.card.column.count", {
                        interpolate: { count: props.dataTable.columns.length + 1 }
                      })), 1)
                    ]),
                    _: 1
                  }, 8, ["class"]),
                  createVNode(unref(N8nText), {
                    size: "small",
                    color: "text-light",
                    class: normalizeClass([_ctx.$style["info-cell"], _ctx.$style["info-cell--updated"]]),
                    "data-test-id": "data-table-card-last-updated"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(i18n).baseText("workerList.item.lastUpdated")) + " ", 1),
                      createVNode(_sfc_main$3, {
                        date: String(props.dataTable.updatedAt)
                      }, null, 8, ["date"])
                    ]),
                    _: 1
                  }, 8, ["class"]),
                  createVNode(unref(N8nText), {
                    size: "small",
                    color: "text-light",
                    class: normalizeClass([_ctx.$style["info-cell"], _ctx.$style["info-cell--created"]]),
                    "data-test-id": "data-table-card-created"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(i18n).baseText("workflows.item.created")) + " ", 1),
                      createVNode(_sfc_main$3, {
                        date: String(props.dataTable.createdAt)
                      }, null, 8, ["date"])
                    ]),
                    _: 1
                  }, 8, ["class"])
                ], 2)
              ]),
              append: withCtx(() => [
                createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style["card-actions"]),
                  onClick: _cache[0] || (_cache[0] = withModifiers(() => {
                  }, ["prevent"]))
                }, [
                  createVNode(_sfc_main$2, {
                    "data-table": props.dataTable,
                    "is-read-only": props.readOnly,
                    location: "card"
                  }, null, 8, ["data-table", "is-read-only"])
                ], 2)
              ]),
              _: 1
            }, 8, ["class"])
          ]),
          _: 1
        }, 8, ["to"])
      ]);
    };
  }
});
const card = "_card_147lk_123";
const style0 = {
  card,
  "card-icon": "_card-icon_147lk_131",
  "card-header": "_card-header_147lk_138",
  "card-footer": "_card-footer_147lk_146",
  "info-cell": "_info-cell_147lk_150",
  "info-cell--created": "_info-cell--created_147lk_159",
  "info-cell--column-count": "_info-cell--column-count_147lk_160",
  "info-cell--size": "_info-cell--size_147lk_161"
};
const cssModules = {
  "$style": style0
};
const DataTableCard = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__cssModules", cssModules]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DataTableView",
  setup(__props) {
    const i18n = useI18n();
    const route = useRoute();
    const router = useRouter();
    const projectPages = useProjectPages();
    const { callDebounced } = useDebounce();
    const documentTitle = useDocumentTitle();
    const toast = useToast();
    const dataTableStore = useDataTableStore();
    const insightsStore = useInsightsStore();
    const projectsStore = useProjectsStore();
    const sourceControlStore = useSourceControlStore();
    const uiStore = useUIStore();
    const loading = ref(true);
    const currentPage = ref(1);
    const pageSize = ref(DEFAULT_DATA_TABLE_PAGE_SIZE);
    const dataTableResources = computed(
      () => dataTableStore.dataTables.map((ds) => {
        return {
          ...ds,
          resourceType: "dataTable"
        };
      })
    );
    const totalCount = computed(() => dataTableStore.totalCount);
    const currentProject = computed(() => {
      if (projectPages.isOverviewSubPage) {
        return projectsStore.personalProject;
      }
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
    const onPaginationUpdate = async (payload) => {
      if (payload.page) {
        currentPage.value = payload.page;
      }
      if (payload.pageSize) {
        pageSize.value = payload.pageSize;
      }
      if (!loading.value) {
        await callDebounced(initialize, { debounceTime: 200, trailing: true });
      }
    };
    const onAddModalClick = () => {
      void router.push({
        name: PROJECT_DATA_TABLES,
        params: { projectId: currentProject.value?.id, new: "new" }
      });
    };
    onMounted(() => {
      documentTitle.set(i18n.baseText("dataTable.dataTables"));
    });
    watch(
      () => route.params.new,
      () => {
        if (route.params.new === "new") {
          uiStore.openModal(ADD_DATA_TABLE_MODAL_KEY);
        } else {
          uiStore.closeModal(ADD_DATA_TABLE_MODAL_KEY);
        }
      },
      { immediate: true }
    );
    return (_ctx, _cache) => {
      return openBlock(), createBlock(ResourcesListLayout, {
        ref: "layout",
        "resource-key": "dataTable",
        type: "list-paginated",
        resources: dataTableResources.value,
        initialize,
        "type-props": { itemSize: 80 },
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
        header: withCtx(() => [
          createVNode(ProjectHeader, null, {
            default: withCtx(() => [
              unref(projectPages).isOverviewSubPage && unref(insightsStore).isSummaryEnabled ? (openBlock(), createBlock(InsightsSummary, {
                key: 0,
                loading: unref(insightsStore).weeklySummary.isLoading,
                summary: unref(insightsStore).weeklySummary.state,
                "time-range": "week"
              }, null, 8, ["loading", "summary"])) : createCommentVNode("", true)
            ]),
            _: 1
          })
        ]),
        empty: withCtx(() => [
          createVNode(unref(N8nActionBox), {
            "data-test-id": "empty-data-table-action-box",
            heading: unref(i18n).baseText("dataTable.empty.label"),
            description: unref(i18n).baseText("dataTable.empty.description"),
            "button-text": unref(i18n).baseText("dataTable.add.button.label"),
            "button-type": "secondary",
            "onClick:button": onAddModalClick
          }, null, 8, ["heading", "description", "button-text"])
        ]),
        item: withCtx(({ item: data }) => [
          createVNode(DataTableCard, {
            class: "mb-2xs",
            "data-table": data,
            "show-ownership-badge": unref(projectPages).isOverviewSubPage,
            "read-only": readOnlyEnv.value
          }, null, 8, ["data-table", "show-ownership-badge", "read-only"])
        ]),
        _: 1
      }, 8, ["resources", "loading", "total-items"]);
    };
  }
});
export {
  _sfc_main as default
};
