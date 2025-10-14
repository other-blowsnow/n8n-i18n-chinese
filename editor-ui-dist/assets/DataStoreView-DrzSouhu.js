import { P as ProjectHeader } from "./ProjectHeader-DmXKSZIV.js";
import { I as InsightsSummary } from "./InsightsSummary--bQqqFqL.js";
import { u as useProjectPages } from "./useProjectPages-_xF1KFDM.js";
import { d as defineComponent, hj as useDataStoreStore, x as computed, hk as DATA_STORE_DETAILS, h as createElementBlock, g as openBlock, i as createVNode, w as withCtx, k as unref, s as N8nCard, n as normalizeClass, j as createBaseVNode, B as withModifiers, p as N8nText, l as createTextVNode, t as toDisplayString, c as useI18n, fs as _sfc_main$3, e as createBlock, f as createCommentVNode, aL as N8nBadge, N as N8nIcon, C as N8nLink, _ as _export_sfc, a3 as useRoute, b as useRouter, P as useDebounce, ay as useDocumentTitle, a as useToast, gX as useInsightsStore, av as useProjectsStore, af as useSourceControlStore, Q as useUIStore, r as ref, o as onMounted, a8 as watch, eB as N8nActionBox, h4 as PROJECT_DATA_STORES, hl as DEFAULT_DATA_STORE_PAGE_SIZE, hm as ADD_DATA_STORE_MODAL_KEY } from "./index-CXXH2E8E.js";
import { _ as _sfc_main$2 } from "./DataStoreActions.vue_vue_type_script_setup_true_lang-zZjzGMgH.js";
import { R as ResourcesListLayout } from "./ResourcesListLayout-BxS36gH0.js";
import "./readyToRunWorkflowsV2.store-ilNlGx5A.js";
import "./PageViewLayout-BO77lm72.js";
import "./TableBase-CA3KhyGY.js";
const _hoisted_1 = { "data-test-id": "data-store-card" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DataStoreCard",
  props: {
    dataStore: {},
    readOnly: { type: Boolean, default: false },
    showOwnershipBadge: { type: Boolean, default: false }
  },
  setup(__props) {
    const i18n = useI18n();
    const dataStoreStore = useDataStoreStore();
    const props = __props;
    const dataStoreRoute = computed(() => {
      return {
        name: DATA_STORE_DETAILS,
        params: {
          projectId: props.dataStore.projectId,
          id: props.dataStore.id
        }
      };
    });
    const getDataStoreSize = computed(() => {
      const size = dataStoreStore.dataStoreSizes[props.dataStore.id] ?? 0;
      return size;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(unref(N8nLink), {
          to: dataStoreRoute.value,
          class: "data-store-card",
          "data-test-id": "data-store-card-link"
        }, {
          default: withCtx(() => [
            createVNode(unref(N8nCard), {
              class: normalizeClass(_ctx.$style.card)
            }, {
              prepend: withCtx(() => [
                createVNode(unref(N8nIcon), {
                  "data-test-id": "data-store-card-icon",
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
                    "data-test-id": "data-store-card-name"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(props.dataStore.name), 1)
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
                    "data-test-id": "data-store-card-size"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(i18n).baseText("dataStore.card.size", {
                        interpolate: { size: getDataStoreSize.value }
                      })), 1)
                    ]),
                    _: 1
                  }, 8, ["class"]),
                  createVNode(unref(N8nText), {
                    size: "small",
                    color: "text-light",
                    class: normalizeClass([_ctx.$style["info-cell"], _ctx.$style["info-cell--column-count"]]),
                    "data-test-id": "data-store-card-column-count"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(i18n).baseText("dataStore.card.column.count", {
                        interpolate: { count: props.dataStore.columns.length + 1 }
                      })), 1)
                    ]),
                    _: 1
                  }, 8, ["class"]),
                  createVNode(unref(N8nText), {
                    size: "small",
                    color: "text-light",
                    class: normalizeClass([_ctx.$style["info-cell"], _ctx.$style["info-cell--updated"]]),
                    "data-test-id": "data-store-card-last-updated"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(i18n).baseText("workerList.item.lastUpdated")) + " ", 1),
                      createVNode(_sfc_main$3, {
                        date: String(props.dataStore.updatedAt)
                      }, null, 8, ["date"])
                    ]),
                    _: 1
                  }, 8, ["class"]),
                  createVNode(unref(N8nText), {
                    size: "small",
                    color: "text-light",
                    class: normalizeClass([_ctx.$style["info-cell"], _ctx.$style["info-cell--created"]]),
                    "data-test-id": "data-store-card-created"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(i18n).baseText("workflows.item.created")) + " ", 1),
                      createVNode(_sfc_main$3, {
                        date: String(props.dataStore.createdAt)
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
                    "data-store": props.dataStore,
                    "is-read-only": props.readOnly,
                    location: "card"
                  }, null, 8, ["data-store", "is-read-only"])
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
const card = "_card_1jhtd_123";
const style0 = {
  card,
  "card-icon": "_card-icon_1jhtd_131",
  "card-header": "_card-header_1jhtd_138",
  "card-footer": "_card-footer_1jhtd_146",
  "info-cell": "_info-cell_1jhtd_150",
  "info-cell--created": "_info-cell--created_1jhtd_159",
  "info-cell--column-count": "_info-cell--column-count_1jhtd_160",
  "info-cell--size": "_info-cell--size_1jhtd_161"
};
const cssModules = {
  "$style": style0
};
const DataStoreCard = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__cssModules", cssModules]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DataStoreView",
  setup(__props) {
    const i18n = useI18n();
    const route = useRoute();
    const router = useRouter();
    const projectPages = useProjectPages();
    const { callDebounced } = useDebounce();
    const documentTitle = useDocumentTitle();
    const toast = useToast();
    const dataStoreStore = useDataStoreStore();
    const insightsStore = useInsightsStore();
    const projectsStore = useProjectsStore();
    const sourceControlStore = useSourceControlStore();
    const uiStore = useUIStore();
    const loading = ref(true);
    const currentPage = ref(1);
    const pageSize = ref(DEFAULT_DATA_STORE_PAGE_SIZE);
    const dataStoreResources = computed(
      () => dataStoreStore.dataStores.map((ds) => {
        return {
          ...ds,
          resourceType: "datastore"
        };
      })
    );
    const totalCount = computed(() => dataStoreStore.totalCount);
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
        await dataStoreStore.fetchDataStores(projectIdFilter ?? "", currentPage.value, pageSize.value);
      } catch (error) {
        toast.showError(error, "Error loading data stores");
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
        name: PROJECT_DATA_STORES,
        params: { projectId: currentProject.value?.id, new: "new" }
      });
    };
    onMounted(() => {
      documentTitle.set(i18n.baseText("dataStore.dataStores"));
    });
    watch(
      () => route.params.new,
      () => {
        if (route.params.new === "new") {
          uiStore.openModal(ADD_DATA_STORE_MODAL_KEY);
        } else {
          uiStore.closeModal(ADD_DATA_STORE_MODAL_KEY);
        }
      },
      { immediate: true }
    );
    return (_ctx, _cache) => {
      return openBlock(), createBlock(ResourcesListLayout, {
        ref: "layout",
        "resource-key": "dataStore",
        type: "list-paginated",
        resources: dataStoreResources.value,
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
            "data-test-id": "empty-shared-action-box",
            heading: unref(i18n).baseText("dataStore.empty.label"),
            description: unref(i18n).baseText("dataStore.empty.description"),
            "button-text": unref(i18n).baseText("dataStore.add.button.label"),
            "button-type": "secondary",
            "onClick:button": onAddModalClick
          }, null, 8, ["heading", "description", "button-text"])
        ]),
        item: withCtx(({ item: data }) => [
          createVNode(DataStoreCard, {
            class: "mb-2xs",
            "data-store": data,
            "show-ownership-badge": unref(projectPages).isOverviewSubPage,
            "read-only": readOnlyEnv.value
          }, null, 8, ["data-store", "show-ownership-badge", "read-only"])
        ]),
        _: 1
      }, 8, ["resources", "loading", "total-items"]);
    };
  }
});
export {
  _sfc_main as default
};
