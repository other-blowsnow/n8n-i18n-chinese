import { gm as getFullApiResponse, d as defineComponent, x as computed, gn as DATA_STORE_DETAILS, h as createElementBlock, g as openBlock, i as createVNode, w as withCtx, s as N8nCard, n as normalizeClass, j as createBaseVNode, e as createBlock, f as createCommentVNode, e5 as N8nActionToggle, bS as withModifiers, p as N8nText, k as createTextVNode, t as toDisplayString, l as unref, c as useI18n, eA as _sfc_main$2, m as N8nHeading, aw as N8nBadge, N as N8nIcon, a2 as N8nLink, _ as _export_sfc, a6 as useRoute, S as useDebounce, aj as useDocumentTitle, a as useToast, fY as useInsightsStore, ag as useProjectsStore, ad as useRootStore, af as useSourceControlStore, r as ref, ar as ProjectTypes, go as DATA_STORE_CARD_ACTIONS, o as onMounted, dQ as N8nActionBox, gp as DEFAULT_DATA_STORE_PAGE_SIZE } from "./index-Dvr44uBp.js";
import { P as ProjectHeader } from "./ProjectHeader-CwfFDE00.js";
import { R as ResourcesListLayout } from "./ResourcesListLayout-euXzOK6m.js";
import { I as InsightsSummary } from "./InsightsSummary-CtSF6dzx.js";
import { u as useProjectPages } from "./useProjectPages-C03_J--E.js";
import "./TableBase-CpPtLFYl.js";
const fetchDataStores = async (context, projectId, options) => {
  return await getFullApiResponse(context, "GET", "/data-stores", {
    projectId,
    options
  });
};
const _hoisted_1 = { "data-test-id": "data-store-card" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DataStoreCard",
  props: {
    dataStore: {},
    actions: { default: () => [] },
    readOnly: { type: Boolean, default: false },
    showOwnershipBadge: { type: Boolean, default: false }
  },
  setup(__props) {
    const i18n = useI18n();
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
    return (_ctx, _cache) => {
      const _component_N8nIcon = N8nIcon;
      const _component_N8nHeading = N8nHeading;
      const _component_N8nBadge = N8nBadge;
      const _component_N8nText = N8nText;
      const _component_TimeAgo = _sfc_main$2;
      const _component_N8nActionToggle = N8nActionToggle;
      const _component_N8nCard = N8nCard;
      const _component_N8nLink = N8nLink;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_N8nLink, {
          to: dataStoreRoute.value,
          class: "data-store-card",
          "data-test-id": "data-store-card-link"
        }, {
          default: withCtx(() => [
            createVNode(_component_N8nCard, {
              class: normalizeClass(_ctx.$style.card)
            }, {
              prepend: withCtx(() => [
                createVNode(_component_N8nIcon, {
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
                  createVNode(_component_N8nHeading, {
                    tag: "h2",
                    bold: "",
                    size: "small",
                    "data-test-id": "folder-card-name"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(props.dataStore.name), 1)
                    ]),
                    _: 1
                  }),
                  props.readOnly ? (openBlock(), createBlock(_component_N8nBadge, {
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
                  createVNode(_component_N8nText, {
                    size: "small",
                    color: "text-light",
                    class: normalizeClass([_ctx.$style["info-cell"], _ctx.$style["info-cell--size"]]),
                    "data-test-id": "folder-card-folder-count"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(i18n).baseText("dataStore.card.size", { interpolate: { size: _ctx.dataStore.size } })), 1)
                    ]),
                    _: 1
                  }, 8, ["class"]),
                  createVNode(_component_N8nText, {
                    size: "small",
                    color: "text-light",
                    class: normalizeClass([_ctx.$style["info-cell"], _ctx.$style["info-cell--record-count"]]),
                    "data-test-id": "data-store-card-record-count"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(i18n).baseText("dataStore.card.row.count", {
                        interpolate: { count: props.dataStore.recordCount }
                      })), 1)
                    ]),
                    _: 1
                  }, 8, ["class"]),
                  createVNode(_component_N8nText, {
                    size: "small",
                    color: "text-light",
                    class: normalizeClass([_ctx.$style["info-cell"], _ctx.$style["info-cell--column-count"]]),
                    "data-test-id": "data-store-card-column-count"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(i18n).baseText("dataStore.card.column.count", {
                        interpolate: { count: props.dataStore.columnCount }
                      })), 1)
                    ]),
                    _: 1
                  }, 8, ["class"]),
                  createVNode(_component_N8nText, {
                    size: "small",
                    color: "text-light",
                    class: normalizeClass([_ctx.$style["info-cell"], _ctx.$style["info-cell--updated"]]),
                    "data-test-id": "data-store-card-last-updated"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(i18n).baseText("workerList.item.lastUpdated")) + " ", 1),
                      createVNode(_component_TimeAgo, {
                        date: String(props.dataStore.updatedAt)
                      }, null, 8, ["date"])
                    ]),
                    _: 1
                  }, 8, ["class"]),
                  createVNode(_component_N8nText, {
                    size: "small",
                    color: "text-light",
                    class: normalizeClass([_ctx.$style["info-cell"], _ctx.$style["info-cell--created"]]),
                    "data-test-id": "data-store-card-created"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(i18n).baseText("workflows.item.created")) + " ", 1),
                      createVNode(_component_TimeAgo, {
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
                  props.actions.length ? (openBlock(), createBlock(_component_N8nActionToggle, {
                    key: 0,
                    actions: props.actions,
                    theme: "dark",
                    "data-test-id": "folder-card-actions"
                  }, null, 8, ["actions"])) : createCommentVNode("", true)
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
const card = "_card_1cq4j_123";
const style0 = {
  card,
  "card-icon": "_card-icon_1cq4j_131",
  "card-header": "_card-header_1cq4j_138",
  "card-footer": "_card-footer_1cq4j_146",
  "info-cell": "_info-cell_1cq4j_150",
  "info-cell--created": "_info-cell--created_1cq4j_159",
  "info-cell--record-count": "_info-cell--record-count_1cq4j_160",
  "info-cell--column-count": "_info-cell--column-count_1cq4j_161"
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
    const projectPages = useProjectPages();
    const { callDebounced } = useDebounce();
    const documentTitle = useDocumentTitle();
    const toast = useToast();
    const insightsStore = useInsightsStore();
    const projectsStore = useProjectsStore();
    const rootStore = useRootStore();
    const sourceControlStore = useSourceControlStore();
    const loading = ref(true);
    const dataStores = ref([]);
    const totalCount = ref(0);
    const currentPage = ref(1);
    const pageSize = ref(DEFAULT_DATA_STORE_PAGE_SIZE);
    const currentProject = computed(() => projectsStore.currentProject);
    const projectName = computed(() => {
      if (currentProject.value?.type === ProjectTypes.Personal) {
        return i18n.baseText("projects.menu.personal");
      }
      return currentProject.value?.name;
    });
    const emptyCalloutDescription = computed(() => {
      return projectPages.isOverviewSubPage ? i18n.baseText("dataStore.empty.description") : "";
    });
    const emptyCalloutButtonText = computed(() => {
      if (projectPages.isOverviewSubPage || !projectName.value) {
        return "";
      }
      return i18n.baseText("dataStore.empty.button.label", {
        interpolate: { projectName: projectName.value }
      });
    });
    const readOnlyEnv = computed(() => sourceControlStore.preferences.branchReadOnly);
    const cardActions = computed(() => [
      {
        label: i18n.baseText("generic.rename"),
        value: DATA_STORE_CARD_ACTIONS.RENAME,
        disabled: readOnlyEnv.value
      },
      {
        label: i18n.baseText("generic.delete"),
        value: DATA_STORE_CARD_ACTIONS.DELETE,
        disabled: readOnlyEnv.value
      },
      {
        label: i18n.baseText("generic.clear"),
        value: DATA_STORE_CARD_ACTIONS.CLEAR,
        disabled: readOnlyEnv.value
      }
    ]);
    const initialize = async () => {
      loading.value = true;
      const projectId = Array.isArray(route.params.projectId) ? route.params.projectId[0] : route.params.projectId;
      try {
        const response = await fetchDataStores(rootStore.restApiContext, projectId, {
          page: currentPage.value,
          pageSize: pageSize.value
        });
        dataStores.value = response.data.map((item) => ({
          ...item,
          resourceType: "datastore"
        }));
        totalCount.value = response.count;
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
    onMounted(() => {
      documentTitle.set(i18n.baseText("dataStore.tab.label"));
    });
    return (_ctx, _cache) => {
      const _component_n8n_action_box = N8nActionBox;
      return openBlock(), createBlock(ResourcesListLayout, {
        ref: "layout",
        "resource-key": "dataStore",
        type: "list-paginated",
        resources: dataStores.value,
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
          createVNode(_component_n8n_action_box, {
            "data-test-id": "empty-shared-action-box",
            heading: unref(i18n).baseText("dataStore.empty.label"),
            description: emptyCalloutDescription.value,
            "button-text": emptyCalloutButtonText.value,
            "button-type": "secondary"
          }, null, 8, ["heading", "description", "button-text"])
        ]),
        item: withCtx(({ item: data }) => [
          createVNode(DataStoreCard, {
            class: "mb-2xs",
            "data-store": data,
            "show-ownership-badge": unref(projectPages).isOverviewSubPage,
            actions: cardActions.value,
            "read-only": readOnlyEnv.value
          }, null, 8, ["data-store", "show-ownership-badge", "actions", "read-only"])
        ]),
        _: 1
      }, 8, ["resources", "loading", "total-items"]);
    };
  }
});
export {
  _sfc_main as default
};
