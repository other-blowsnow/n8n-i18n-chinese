import { d as defineComponent, aH as useTemplateRef, x as computed, gx as DATA_STORE_DETAILS, h as createElementBlock, g as openBlock, i as createVNode, w as withCtx, s as N8nCard, n as normalizeClass, j as createBaseVNode, e as createBlock, f as createCommentVNode, ed as N8nActionToggle, B as withModifiers, p as N8nText, k as createTextVNode, t as toDisplayString, l as unref, c as useI18n, eK as _sfc_main$2, aI as InlineRename, aL as N8nBadge, N as N8nIcon, C as N8nLink, _ as _export_sfc, aa as useRoute, Y as useDebounce, ay as useDocumentTitle, a as useToast, g6 as useInsightsStore, av as useProjectsStore, aj as useSourceControlStore, r as ref, aG as ProjectTypes, gy as DATA_STORE_CARD_ACTIONS, o as onMounted, dY as N8nActionBox, Z as useUIStore, gz as ADD_DATA_STORE_MODAL_KEY, aq as useMessage, ar as MODAL_CONFIRM, gA as DEFAULT_DATA_STORE_PAGE_SIZE } from "./index-BsWH3eYA.js";
import { P as ProjectHeader } from "./ProjectHeader-DJ7INeh1.js";
import { R as ResourcesListLayout } from "./ResourcesListLayout-gylwL6iY.js";
import { I as InsightsSummary } from "./InsightsSummary-gyLfjHkG.js";
import { u as useProjectPages } from "./useProjectPages-C3Mn4pYX.js";
import { u as useDataStoreStore } from "./dataStore.store-BCvcHn6X.js";
import "./TableBase-CDVPsIRe.js";
const _hoisted_1 = { "data-test-id": "data-store-card" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DataStoreCard",
  props: {
    dataStore: {},
    actions: { default: () => [] },
    readOnly: { type: Boolean, default: false },
    showOwnershipBadge: { type: Boolean, default: false }
  },
  emits: ["action"],
  setup(__props, { emit: __emit }) {
    const i18n = useI18n();
    const props = __props;
    const emit = __emit;
    const renameInput = useTemplateRef("renameInput");
    const dataStoreRoute = computed(() => {
      return {
        name: DATA_STORE_DETAILS,
        params: {
          projectId: props.dataStore.projectId,
          id: props.dataStore.id
        }
      };
    });
    const onCardAction = (action) => {
      if (action === "rename") {
        if (renameInput.value?.forceFocus) {
          setTimeout(() => {
            renameInput.value?.forceFocus?.();
          }, 100);
        }
        return;
      }
      emit("action", {
        dataStore: props.dataStore,
        action
      });
    };
    const onNameSubmit = (name) => {
      if (props.dataStore.name === name) return;
      emit("action", {
        dataStore: { ...props.dataStore, name },
        action: "rename"
      });
    };
    return (_ctx, _cache) => {
      const _component_N8nIcon = N8nIcon;
      const _component_N8nInlineTextEdit = InlineRename;
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
                  class: normalizeClass(_ctx.$style["card-header"]),
                  onClick: _cache[0] || (_cache[0] = withModifiers(() => {
                  }, ["prevent"]))
                }, [
                  createVNode(_component_N8nInlineTextEdit, {
                    ref_key: "renameInput",
                    ref: renameInput,
                    "data-test-id": "datastore-name-input",
                    placeholder: unref(i18n).baseText("dataStore.add.input.name.label"),
                    class: normalizeClass(_ctx.$style["card-name"]),
                    "model-value": props.dataStore.name,
                    "max-length": 50,
                    "read-only": props.readOnly,
                    disabled: props.readOnly,
                    "onUpdate:modelValue": onNameSubmit
                  }, null, 8, ["placeholder", "class", "model-value", "read-only", "disabled"]),
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
                    class: normalizeClass([_ctx.$style["info-cell"], _ctx.$style["info-cell--record-count"]]),
                    "data-test-id": "data-store-card-record-count"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(i18n).baseText("dataStore.card.row.count", {
                        interpolate: { count: props.dataStore.recordCount ?? 0 }
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
                        interpolate: { count: props.dataStore.columns.length }
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
                  onClick: _cache[1] || (_cache[1] = withModifiers(() => {
                  }, ["prevent"]))
                }, [
                  props.actions.length ? (openBlock(), createBlock(_component_N8nActionToggle, {
                    key: 0,
                    actions: props.actions,
                    theme: "dark",
                    "data-test-id": "data-store-card-actions",
                    onAction: onCardAction
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
const card = "_card_1y92f_123";
const style0 = {
  card,
  "card-name": "_card-name_1y92f_131",
  "card-icon": "_card-icon_1y92f_137",
  "card-header": "_card-header_1y92f_144",
  "card-footer": "_card-footer_1y92f_152",
  "info-cell": "_info-cell_1y92f_156",
  "info-cell--created": "_info-cell--created_1y92f_165",
  "info-cell--record-count": "_info-cell--record-count_1y92f_166",
  "info-cell--column-count": "_info-cell--column-count_1y92f_167"
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
    const message = useMessage();
    const dataStoreStore = useDataStoreStore();
    const insightsStore = useInsightsStore();
    const projectsStore = useProjectsStore();
    const sourceControlStore = useSourceControlStore();
    const loading = ref(true);
    const currentPage = ref(1);
    const pageSize = ref(DEFAULT_DATA_STORE_PAGE_SIZE);
    const customProjectActions = computed(() => [
      {
        id: "add-data-store",
        label: i18n.baseText("dataStore.add.button.label"),
        disabled: loading.value || projectPages.isOverviewSubPage
      }
    ]);
    const dataStoreResources = computed(
      () => dataStoreStore.dataStores.map((ds) => {
        return {
          ...ds,
          resourceType: "datastore"
        };
      })
    );
    const totalCount = computed(() => dataStoreStore.totalCount);
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
      }
    ]);
    const initialize = async () => {
      loading.value = true;
      const projectId = Array.isArray(route.params.projectId) ? route.params.projectId[0] : route.params.projectId;
      try {
        await dataStoreStore.fetchDataStores(projectId, currentPage.value, pageSize.value);
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
      useUIStore().openModal(ADD_DATA_STORE_MODAL_KEY);
    };
    const onCardAction = async (payload) => {
      switch (payload.action) {
        case DATA_STORE_CARD_ACTIONS.DELETE: {
          const promptResponse = await message.confirm(
            i18n.baseText("dataStore.delete.confirm.message", {
              interpolate: { name: payload.dataStore.name }
            }),
            i18n.baseText("dataStore.delete.confirm.title"),
            {
              confirmButtonText: i18n.baseText("generic.delete"),
              cancelButtonText: i18n.baseText("generic.cancel")
            }
          );
          if (promptResponse === MODAL_CONFIRM) {
            try {
              const deleted = await dataStoreStore.deleteDataStore(
                payload.dataStore.id,
                payload.dataStore.projectId
              );
              if (!deleted) {
                toast.showError(
                  new Error(i18n.baseText("generic.unknownError")),
                  i18n.baseText("dataStore.delete.error")
                );
              }
            } catch (error) {
              toast.showError(error, i18n.baseText("dataStore.delete.error"));
            }
          }
          break;
        }
        case DATA_STORE_CARD_ACTIONS.RENAME: {
          try {
            const updated = await dataStoreStore.updateDataStore(
              payload.dataStore.id,
              payload.dataStore.name,
              payload.dataStore.projectId
            );
            if (!updated) {
              toast.showError(
                new Error(i18n.baseText("generic.unknownError")),
                i18n.baseText("dataStore.rename.error")
              );
            }
          } catch (error) {
            toast.showError(error, i18n.baseText("dataStore.rename.error"));
          }
          break;
        }
      }
    };
    const onProjectHeaderAction = (action) => {
      if (action === "add-data-store") {
        useUIStore().openModal(ADD_DATA_STORE_MODAL_KEY);
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
          createVNode(ProjectHeader, {
            "custom-actions": customProjectActions.value,
            onCustomActionSelected: onProjectHeaderAction
          }, {
            default: withCtx(() => [
              unref(projectPages).isOverviewSubPage && unref(insightsStore).isSummaryEnabled ? (openBlock(), createBlock(InsightsSummary, {
                key: 0,
                loading: unref(insightsStore).weeklySummary.isLoading,
                summary: unref(insightsStore).weeklySummary.state,
                "time-range": "week"
              }, null, 8, ["loading", "summary"])) : createCommentVNode("", true)
            ]),
            _: 1
          }, 8, ["custom-actions"])
        ]),
        empty: withCtx(() => [
          createVNode(_component_n8n_action_box, {
            "data-test-id": "empty-shared-action-box",
            heading: unref(i18n).baseText("dataStore.empty.label"),
            description: emptyCalloutDescription.value,
            "button-text": emptyCalloutButtonText.value,
            "button-type": "secondary",
            "onClick:button": onAddModalClick
          }, null, 8, ["heading", "description", "button-text"])
        ]),
        item: withCtx(({ item: data }) => [
          createVNode(DataStoreCard, {
            class: "mb-2xs",
            "data-store": data,
            "show-ownership-badge": unref(projectPages).isOverviewSubPage,
            actions: cardActions.value,
            "read-only": readOnlyEnv.value,
            onAction: onCardAction
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
