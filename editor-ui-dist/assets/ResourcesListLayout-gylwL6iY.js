import { d as defineComponent, r as ref, x as computed, h as createElementBlock, g as openBlock, i as createVNode, j as createBaseVNode, w as withCtx, F as Fragment, A as renderList, U as normalizeStyle, n as normalizeClass, t as toDisplayString, Q as renderSlot, e as createBlock, ca as resolveDynamicComponent, l as unref, f as createCommentVNode, fz as _sfc_main$6, e9 as _sfc_main$7, k as createTextVNode, D as useI18n, e8 as N8nSelect, K as mergeProps, _ as _export_sfc, af as watch, b3 as onBeforeMount, o as onMounted, R as nextTick, av as useProjectsStore, T as resolveComponent, fv as _sfc_main$8, aF as EnterpriseEditionFeature, c as useI18n$1, e5 as N8nInputLabel, fA as ProjectSharing, C as N8nLink, aL as N8nBadge, q as N8nButton, b0 as useLocalStorage, fB as LOCAL_STORAGE_WORKFLOW_LIST_PREFERENCES_KEY, fC as isBaseTextKey, aa as useRoute, b as useRouter, Y as useDebounce, u as useUsersStore, fD as useSlots, fE as isSharedResource, fF as isResourceSortableByDate, P as onBeforeUnmount, dK as N8nLoading, dY as N8nActionBox, p as N8nText, b4 as withDirectives, c$ as N8nInput, N as N8nIcon, c8 as normalizeProps, c9 as guardReactiveProps, cS as InfoTip, b5 as vShow, ap as useTelemetry } from "./index-BsWH3eYA.js";
import { N as N8nTableBase } from "./TableBase-CDVPsIRe.js";
import { u as useProjectPages } from "./useProjectPages-C3Mn4pYX.js";
function getValueByPath(object, path) {
  return path.split(".").reduce((acc, part) => {
    return acc?.[part];
  }, object);
}
const _hoisted_1$1 = { key: 1 };
const _hoisted_2$1 = { class: "pagination" };
const _hoisted_3$1 = { class: "pageSizeSelector" };
const ALL_ROWS = -1;
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  ...{ name: "N8nDatatable" },
  __name: "Datatable",
  props: {
    columns: {},
    rows: {},
    currentPage: { default: 1 },
    pagination: { type: Boolean, default: true },
    rowsPerPage: { default: 10 }
  },
  emits: ["update:currentPage", "update:rowsPerPage"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { t } = useI18n();
    const rowsPerPageOptions = ref([1, 10, 25, 50, 100]);
    const totalPages = computed(() => {
      return Math.ceil(props.rows.length / props.rowsPerPage);
    });
    const totalRows = computed(() => {
      return props.rows.length;
    });
    const visibleRows = computed(() => {
      if (props.rowsPerPage === ALL_ROWS) return props.rows;
      const start = (props.currentPage - 1) * props.rowsPerPage;
      const end = start + props.rowsPerPage;
      return props.rows.slice(start, end);
    });
    function onUpdateCurrentPage(value) {
      emit("update:currentPage", value);
    }
    function onRowsPerPageChange(value) {
      emit("update:rowsPerPage", value);
      if (value === ALL_ROWS) {
        onUpdateCurrentPage(1);
        return;
      }
      const maxPage = Math.ceil(totalRows.value / value);
      if (maxPage < props.currentPage) {
        onUpdateCurrentPage(maxPage);
      }
    }
    function getTdValue(row, column) {
      return getValueByPath(row, column.path);
    }
    function getThStyle(column) {
      return {
        ...column.width ? { width: column.width } : {}
      };
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", mergeProps({ class: "datatable datatableWrapper" }, _ctx.$attrs), [
        createVNode(unref(N8nTableBase), null, {
          default: withCtx(() => [
            createBaseVNode("thead", null, [
              createBaseVNode("tr", null, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.columns, (column) => {
                  return openBlock(), createElementBlock("th", {
                    key: column.id,
                    class: normalizeClass(column.classes),
                    style: normalizeStyle(getThStyle(column))
                  }, toDisplayString(column.label), 7);
                }), 128))
              ])
            ]),
            createBaseVNode("tbody", null, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(visibleRows.value, (row) => {
                return renderSlot(_ctx.$slots, "row", {
                  columns: _ctx.columns,
                  row,
                  getTdValue
                }, () => [
                  (openBlock(), createElementBlock("tr", {
                    key: row.id
                  }, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.columns, (column) => {
                      return openBlock(), createElementBlock("td", {
                        key: column.id,
                        class: normalizeClass(column.classes)
                      }, [
                        column.render ? (openBlock(), createBlock(resolveDynamicComponent(column.render), {
                          key: 0,
                          row,
                          column
                        }, null, 8, ["row", "column"])) : (openBlock(), createElementBlock("span", _hoisted_1$1, toDisplayString(getTdValue(row, column)), 1))
                      ], 2);
                    }), 128))
                  ]))
                ], true);
              }), 256))
            ])
          ]),
          _: 3
        }),
        createBaseVNode("div", _hoisted_2$1, [
          totalPages.value > 1 ? (openBlock(), createBlock(unref(_sfc_main$6), {
            key: 0,
            background: "",
            "pager-count": 5,
            "page-size": _ctx.rowsPerPage,
            layout: "prev, pager, next",
            total: totalRows.value,
            "current-page": _ctx.currentPage,
            "onUpdate:currentPage": onUpdateCurrentPage
          }, null, 8, ["page-size", "total", "current-page"])) : createCommentVNode("", true),
          createBaseVNode("div", _hoisted_3$1, [
            createVNode(unref(N8nSelect), {
              size: "mini",
              "model-value": _ctx.rowsPerPage,
              teleported: "",
              "onUpdate:modelValue": onRowsPerPageChange
            }, {
              prepend: withCtx(() => [
                createTextVNode(toDisplayString(unref(t)("datatable.pageSize")), 1)
              ]),
              default: withCtx(() => [
                (openBlock(true), createElementBlock(Fragment, null, renderList(rowsPerPageOptions.value, (size) => {
                  return openBlock(), createBlock(unref(_sfc_main$7), {
                    key: size,
                    label: `${size}`,
                    value: size
                  }, null, 8, ["label", "value"]);
                }), 128)),
                createVNode(unref(_sfc_main$7), {
                  label: `All`,
                  value: ALL_ROWS
                })
              ]),
              _: 1
            }, 8, ["model-value"])
          ])
        ])
      ], 16);
    };
  }
});
const N8nDatatable = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-eeb5972f"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "RecycleScroller",
  props: {
    itemSize: {},
    items: {},
    itemKey: {},
    offset: { default: 2 }
  },
  setup(__props) {
    const props = __props;
    const wrapperRef = ref(null);
    const scrollerRef = ref(null);
    const itemsRef = ref(null);
    const itemRefs = ref({});
    const scrollTop = ref(0);
    const wrapperHeight = ref(0);
    const windowHeight = ref(0);
    const itemSizeCache = ref({});
    const itemPositionCache = computed(() => {
      return props.items.reduce(
        (acc, item, index) => {
          const key = item[props.itemKey];
          const prevItem = props.items[index - 1];
          const prevItemPosition = prevItem ? acc[prevItem[props.itemKey]] : 0;
          const prevItemSize = prevItem ? itemSizeCache.value[prevItem[props.itemKey]] : 0;
          acc[key] = prevItemPosition + prevItemSize;
          return acc;
        },
        {}
      );
    });
    const startIndex = computed(() => {
      const foundIndex = props.items.findIndex((item) => {
        const itemPosition = itemPositionCache.value[item[props.itemKey]];
        return itemPosition >= scrollTop.value;
      }) - 1;
      const index = foundIndex - props.offset;
      return index < 0 ? 0 : index;
    });
    const endIndex = computed(() => {
      const foundIndex = props.items.findIndex((item) => {
        const itemPosition = itemPositionCache.value[item[props.itemKey]];
        const itemSize = itemSizeCache.value[item[props.itemKey]];
        return itemPosition + itemSize >= scrollTop.value + wrapperHeight.value;
      });
      const index = foundIndex + props.offset;
      return foundIndex === -1 ? props.items.length - 1 : index;
    });
    const visibleItems = computed(() => {
      return props.items.slice(startIndex.value, endIndex.value + 1);
    });
    watch(
      () => visibleItems.value,
      (currentValue, previousValue) => {
        const difference = currentValue.filter(
          (currentItem) => !previousValue.find(
            (previousItem) => previousItem[props.itemKey] === currentItem[props.itemKey]
          )
        );
        if (difference.length > 0) {
          updateItemSizeCache(difference);
        }
      }
    );
    const scrollerHeight = computed(() => {
      const lastItem = props.items[props.items.length - 1];
      const lastItemPosition = lastItem ? itemPositionCache.value[lastItem[props.itemKey]] : 0;
      const lastItemSize = lastItem ? itemSizeCache.value[lastItem[props.itemKey]] : props.itemSize;
      return lastItemPosition + lastItemSize;
    });
    const scrollerStyles = computed(() => ({
      height: `${scrollerHeight.value}px`
    }));
    const itemsStyles = computed(() => {
      const offset = itemPositionCache.value[props.items[startIndex.value][props.itemKey]];
      return {
        transform: `translateY(${offset}px)`
      };
    });
    onBeforeMount(() => {
      initializeItemSizeCache();
    });
    onMounted(() => {
      if (wrapperRef.value) {
        wrapperRef.value.addEventListener("scroll", onScroll);
        updateItemSizeCache(visibleItems.value);
      }
      window.addEventListener("resize", onWindowResize);
      onWindowResize();
    });
    function initializeItemSizeCache() {
      props.items.forEach((item) => {
        itemSizeCache.value = {
          ...itemSizeCache.value,
          [item[props.itemKey]]: props.itemSize
        };
      });
    }
    function updateItemSizeCache(items) {
      for (const item of items) {
        onUpdateItemSize(item);
      }
    }
    function onUpdateItemSize(item) {
      void nextTick(() => {
        const itemId = item[props.itemKey];
        const itemRef = itemRefs.value[itemId];
        const previousSize = itemSizeCache.value[itemId];
        const size = itemRef ? itemRef.offsetHeight : props.itemSize;
        const difference = size - previousSize;
        itemSizeCache.value = {
          ...itemSizeCache.value,
          [item[props.itemKey]]: size
        };
        if (wrapperRef.value && scrollTop.value) {
          wrapperRef.value.scrollTop = wrapperRef.value.scrollTop + difference;
          scrollTop.value = wrapperRef.value.scrollTop;
        }
      });
    }
    function onWindowResize() {
      if (wrapperRef.value) {
        wrapperHeight.value = wrapperRef.value.offsetHeight;
        void nextTick(() => {
          updateItemSizeCache(visibleItems.value);
        });
      }
      windowHeight.value = window.innerHeight;
    }
    function onScroll() {
      if (!wrapperRef.value) {
        return;
      }
      scrollTop.value = wrapperRef.value.scrollTop;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "wrapperRef",
        ref: wrapperRef,
        class: "recycle-scroller-wrapper"
      }, [
        createBaseVNode("div", {
          ref_key: "scrollerRef",
          ref: scrollerRef,
          class: "recycle-scroller",
          style: normalizeStyle(scrollerStyles.value)
        }, [
          createBaseVNode("div", {
            ref_key: "itemsRef",
            ref: itemsRef,
            class: "recycle-scroller-items-wrapper",
            style: normalizeStyle(itemsStyles.value)
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(visibleItems.value, (item) => {
              return openBlock(), createElementBlock("div", {
                key: item[_ctx.itemKey],
                ref_for: true,
                ref: (element) => itemRefs.value[`${item[_ctx.itemKey]}`] = element,
                class: "recycle-scroller-item"
              }, [
                renderSlot(_ctx.$slots, "default", {
                  item,
                  updateItemSize: onUpdateItemSize
                })
              ]);
            }), 128))
          ], 4)
        ], 4)
      ], 512);
    };
  }
});
const wrapper$1 = "_wrapper_1x8n3_123";
const content = "_content_1x8n3_139";
const style0$3 = {
  wrapper: wrapper$1,
  content
};
const _sfc_main$3 = {};
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.$style.wrapper)
  }, [
    renderSlot(_ctx.$slots, "header"),
    createBaseVNode("main", {
      class: normalizeClass(_ctx.$style.content)
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 2)
  ], 2);
}
const cssModules$3 = {
  "$style": style0$3
};
const PageViewLayout = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render], ["__cssModules", cssModules$3]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "PageViewLayoutList",
  props: {
    overflow: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass({ [_ctx.$style.wrapper]: true, [_ctx.$style.overflow]: _ctx.overflow })
      }, [
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.list)
        }, [
          _ctx.$slots.header ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(_ctx.$style.header)
          }, [
            renderSlot(_ctx.$slots, "header")
          ], 2)) : createCommentVNode("", true),
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.body)
          }, [
            renderSlot(_ctx.$slots, "default")
          ], 2)
        ], 2)
      ], 2);
    };
  }
});
const wrapper = "_wrapper_hn9dc_123";
const overflow = "_overflow_hn9dc_128";
const list = "_list_hn9dc_128";
const body = "_body_hn9dc_128";
const style0$2 = {
  wrapper,
  overflow,
  list,
  body
};
const cssModules$2 = {
  "$style": style0$2
};
const PageViewLayoutList = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__cssModules", cssModules$2]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ResourceFiltersDropdown",
  props: {
    modelValue: { default: () => ({}) },
    keys: { default: () => [] },
    shareable: { type: Boolean, default: true },
    reset: { type: Function, default: () => {
    } },
    justIcon: { type: Boolean, default: false }
  },
  emits: ["update:modelValue", "update:filtersLength"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const projectsStore = useProjectsStore();
    const i18n = useI18n$1();
    const selectedProject = computed({
      get: () => {
        return projectsStore.availableProjects.find(
          (project) => project.id === props.modelValue.homeProject
        ) ?? null;
      },
      set: (value) => setKeyValue("homeProject", value?.id ?? "")
    });
    const filtersLength = computed(() => {
      let length = 0;
      props.keys.forEach((key) => {
        if (key === "search") {
          return;
        }
        const value = props.modelValue[key];
        if (value === true) {
          length += 1;
        }
        if (Array.isArray(value) && value.length) {
          length += 1;
        }
        if (typeof value === "string" && value !== "") {
          length += 1;
        }
      });
      return length;
    });
    const hasFilters = computed(() => filtersLength.value > 0);
    const setKeyValue = (key, value) => {
      const filters2 = {
        ...props.modelValue,
        [key]: value
      };
      emit("update:modelValue", filters2);
    };
    const resetFilters = () => {
      if (props.reset) {
        props.reset();
      } else {
        const filters2 = { ...props.modelValue };
        props.keys.forEach((key) => {
          filters2[key] = Array.isArray(props.modelValue[key]) ? [] : "";
        });
        emit("update:modelValue", filters2);
      }
      selectedProject.value = null;
    };
    watch(filtersLength, (value) => {
      emit("update:filtersLength", value);
    });
    onBeforeMount(async () => {
      await projectsStore.getAvailableProjects();
    });
    return (_ctx, _cache) => {
      const _component_n8n_badge = N8nBadge;
      const _component_n8n_button = N8nButton;
      const _component_n8n_input_label = N8nInputLabel;
      const _component_enterprise_edition = resolveComponent("enterprise-edition");
      const _component_n8n_link = N8nLink;
      const _component_n8n_popover = _sfc_main$8;
      return openBlock(), createBlock(_component_n8n_popover, {
        trigger: "click",
        width: "304",
        size: "large"
      }, {
        reference: withCtx(() => [
          createVNode(_component_n8n_button, {
            icon: "funnel",
            type: "tertiary",
            size: "small",
            active: hasFilters.value,
            class: normalizeClass({
              [_ctx.$style["filter-button"]]: true,
              [_ctx.$style["no-label"]]: _ctx.justIcon && filtersLength.value === 0
            }),
            "data-test-id": "resources-list-filters-trigger"
          }, {
            default: withCtx(() => [
              filtersLength.value > 0 ? (openBlock(), createBlock(_component_n8n_badge, {
                key: 0,
                class: normalizeClass(_ctx.$style["filter-button-count"]),
                "data-test-id": "resources-list-filters-count",
                theme: "primary"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(filtersLength.value), 1)
                ]),
                _: 1
              }, 8, ["class"])) : createCommentVNode("", true),
              !_ctx.justIcon ? (openBlock(), createElementBlock("span", {
                key: 1,
                class: normalizeClass(_ctx.$style["filter-button-text"])
              }, toDisplayString(unref(i18n).baseText("forms.resourceFiltersDropdown.filters")), 3)) : createCommentVNode("", true)
            ]),
            _: 1
          }, 8, ["active", "class"])
        ]),
        default: withCtx(() => [
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style["filters-dropdown"]),
            "data-test-id": "resources-list-filters-dropdown"
          }, [
            renderSlot(_ctx.$slots, "default", {
              filters: _ctx.modelValue,
              setKeyValue
            }),
            _ctx.shareable && unref(projectsStore).isProjectHome ? (openBlock(), createBlock(_component_enterprise_edition, {
              key: 0,
              features: [unref(EnterpriseEditionFeature).Sharing]
            }, {
              default: withCtx(() => [
                createVNode(_component_n8n_input_label, {
                  label: unref(i18n).baseText("forms.resourceFiltersDropdown.owner"),
                  bold: false,
                  size: "small",
                  color: "text-base",
                  class: "mb-3xs"
                }, null, 8, ["label"]),
                createVNode(ProjectSharing, {
                  modelValue: selectedProject.value,
                  "onUpdate:modelValue": [
                    _cache[0] || (_cache[0] = ($event) => selectedProject.value = $event),
                    _cache[1] || (_cache[1] = ($event) => setKeyValue("homeProject", $event.id))
                  ],
                  projects: unref(projectsStore).availableProjects,
                  placeholder: unref(i18n).baseText("forms.resourceFiltersDropdown.owner.placeholder"),
                  "empty-options-text": unref(i18n).baseText("projects.sharing.noMatchingProjects")
                }, null, 8, ["modelValue", "projects", "placeholder", "empty-options-text"])
              ]),
              _: 1
            }, 8, ["features"])) : createCommentVNode("", true),
            hasFilters.value ? (openBlock(), createElementBlock("div", {
              key: 1,
              class: normalizeClass([_ctx.$style["filters-dropdown-footer"], "mt-s"])
            }, [
              createVNode(_component_n8n_link, { onClick: resetFilters }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(i18n).baseText("forms.resourceFiltersDropdown.reset")), 1)
                ]),
                _: 1
              })
            ], 2)) : createCommentVNode("", true)
          ], 2)
        ]),
        _: 3
      });
    };
  }
});
const style0$1 = {
  "filter-button": "_filter-button_1llux_123",
  "no-label": "_no-label_1llux_127",
  "filter-button-count": "_filter-button-count_1llux_133",
  "filter-button-text": "_filter-button-text_1llux_142",
  "filters-dropdown": "_filters-dropdown_1llux_150",
  "filters-dropdown-footer": "_filters-dropdown-footer_1llux_154"
};
const cssModules$1 = {
  "$style": style0$1
};
const ResourceFiltersDropdown = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__cssModules", cssModules$1]]);
function useN8nLocalStorage() {
  const projectPages = useProjectPages();
  const getProjectKey = (projectId) => {
    return projectPages.isOverviewSubPage ? "home" : projectId;
  };
  const saveProjectPreferencesToLocalStorage = (projectId, tabKey, preferences) => {
    const projectKey = getProjectKey(projectId);
    if (!projectKey) {
      return;
    }
    const localStorage = useLocalStorage(
      LOCAL_STORAGE_WORKFLOW_LIST_PREFERENCES_KEY,
      {}
    );
    if (!localStorage.value[projectKey]) {
      localStorage.value[projectKey] = {};
    }
    localStorage.value[projectKey][tabKey] = {
      ...localStorage.value[projectKey][tabKey],
      ...preferences
    };
  };
  const loadProjectPreferencesFromLocalStorage = (projectId, tabKey) => {
    const projectKey = getProjectKey(projectId);
    if (!projectKey) {
      return {};
    }
    const localStorage = useLocalStorage(
      LOCAL_STORAGE_WORKFLOW_LIST_PREFERENCES_KEY,
      {}
    );
    const projectPreferences = localStorage.value[projectKey]?.[tabKey] || {};
    return projectPreferences;
  };
  return {
    saveProjectPreferencesToLocalStorage,
    loadProjectPreferencesFromLocalStorage,
    getProjectKey
  };
}
function useResourcesListI18n(resourceKey) {
  const i18n = useI18n$1();
  const getResourceText = (keySuffix, fallbackKeySuffix, interpolate) => {
    const specificKey = `${resourceKey}.${keySuffix}`;
    const genericKey = `resources.${keySuffix}`;
    const fallbackKey = fallbackKeySuffix ? `resources.${fallbackKeySuffix}` : void 0;
    if (isBaseTextKey(specificKey)) {
      return i18n.baseText(specificKey, { interpolate });
    }
    if (isBaseTextKey(genericKey)) {
      return i18n.baseText(genericKey, { interpolate });
    }
    if (fallbackKey && isBaseTextKey(fallbackKey)) {
      return i18n.baseText(fallbackKey, { interpolate });
    }
    return keySuffix.split(".").pop()?.replace(/([A-Z])/g, " $1").trim() || keySuffix;
  };
  return {
    getResourceText
  };
}
const _hoisted_1 = {
  key: 0,
  class: "resource-list-loading"
};
const _hoisted_2 = { key: 0 };
const _hoisted_3 = {
  key: 0,
  class: "mt-xs",
  "data-test-id": "resources-list-filters-applied-info"
};
const _hoisted_4 = {
  key: 0,
  class: "resource-list-loading resource-list-loading-instant"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ResourcesListLayout",
  props: {
    resourceKey: {},
    displayName: { type: Function, default: (resource) => resource.name || "" },
    resources: {},
    disabled: { type: Boolean },
    initialize: { type: Function, default: async () => {
    } },
    filters: { default: () => ({ search: "", homeProject: "" }) },
    additionalFiltersHandler: { type: Function, default: void 0 },
    shareable: { type: Boolean, default: true },
    sortFns: { default: () => ({}) },
    sortOptions: { default: () => ["lastUpdated", "lastCreated", "nameAsc", "nameDesc"] },
    type: { default: "list-full" },
    typeProps: { default: () => ({ itemSize: 80 }) },
    loading: { type: Boolean, default: true },
    customPageSize: { default: 25 },
    availablePageSizeOptions: { default: () => [10, 25, 50, 100] },
    totalItems: { default: 0 },
    resourcesRefreshing: { type: Boolean, default: false },
    dontPerformSortingAndFiltering: { type: Boolean, default: false },
    hasEmptyState: { type: Boolean, default: true },
    uiConfig: { default: () => ({
      searchEnabled: true,
      showFiltersDropdown: true,
      sortEnabled: true
    }) }
  },
  emits: ["update:filters", "click:add", "update:pagination-and-sort", "update:search"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const route = useRoute();
    const router = useRouter();
    const { callDebounced } = useDebounce();
    const usersStore = useUsersStore();
    const telemetry = useTelemetry();
    const n8nLocalStorage = useN8nLocalStorage();
    const props = __props;
    const { getResourceText } = useResourcesListI18n(props.resourceKey);
    const sortBy = ref(props.sortOptions[0]);
    const hasFilters = ref(false);
    const currentPage = ref(1);
    const rowsPerPage = ref(props.customPageSize);
    const resettingFilters = ref(false);
    const search2 = ref(null);
    const preferredPageSize = ref(props.customPageSize);
    const preferredSort = ref(props.sortOptions[0]);
    const emit = __emit;
    useSlots();
    const filtersModel = computed({
      get: () => props.filters,
      set: (newValue) => emit("update:filters", newValue)
    });
    const showEmptyState = computed(() => {
      return props.hasEmptyState && props.resources.length === 0 && // Don't show empty state if resources are refreshing or if filters are being set
      !hasFilters.value && !filtersModel.value.search && !props.resourcesRefreshing;
    });
    const filterKeys = computed(() => {
      return Object.keys(filtersModel.value);
    });
    const filteredAndSortedResources = computed(() => {
      if (props.dontPerformSortingAndFiltering) {
        return props.resources;
      }
      const filtered = props.resources.filter((resource) => {
        let matches = true;
        if (filtersModel.value.homeProject && isSharedResource(resource)) {
          matches = matches && !!("homeProject" in resource && resource.homeProject && resource.homeProject.id === filtersModel.value.homeProject);
        }
        if (filtersModel.value.search) {
          const searchString = filtersModel.value.search.toLowerCase();
          matches = matches && props.displayName(resource).toLowerCase().includes(searchString);
        }
        if (props.additionalFiltersHandler) {
          matches = props.additionalFiltersHandler(resource, filtersModel.value, matches);
        }
        return matches;
      });
      return filtered.sort((a, b) => {
        const sortableByDate = isResourceSortableByDate(a) && isResourceSortableByDate(b);
        switch (sortBy.value) {
          case "lastUpdated":
            if (!sortableByDate) {
              return 0;
            }
            if ("updatedAt" in a && "updatedAt" in b) {
              return props.sortFns.lastUpdated ? props.sortFns.lastUpdated(a, b) : new Date(b.updatedAt ?? "").valueOf() - new Date(a.updatedAt ?? "").valueOf();
            }
            return 0;
          case "lastCreated":
            if (!sortableByDate) {
              return 0;
            }
            if ("createdAt" in a && "createdAt" in b) {
              return props.sortFns.lastCreated ? props.sortFns.lastCreated(a, b) : new Date(b.createdAt ?? "").valueOf() - new Date(a.createdAt ?? "").valueOf();
            }
            return 0;
          case "nameAsc":
            return props.sortFns.nameAsc ? props.sortFns.nameAsc(a, b) : props.displayName(a).trim().localeCompare(props.displayName(b).trim());
          case "nameDesc":
            return props.sortFns.nameDesc ? props.sortFns.nameDesc(a, b) : props.displayName(b).trim().localeCompare(props.displayName(a).trim());
          default:
            return props.sortFns[sortBy.value] ? props.sortFns[sortBy.value](a, b) : 0;
        }
      });
    });
    watch(
      () => props.filters,
      (value) => {
        filtersModel.value = value;
        if (hasAppliedFilters()) {
          hasFilters.value = true;
        }
      }
    );
    watch(
      () => filtersModel.value.homeProject,
      () => {
        sendFiltersTelemetry("homeProject");
      }
    );
    watch(
      () => filtersModel.value.tags,
      () => {
        sendFiltersTelemetry("tags");
      }
    );
    watch(
      () => filtersModel.value.type,
      () => {
        sendFiltersTelemetry("type");
      }
    );
    watch(
      () => filtersModel.value.search,
      () => callDebounced(sendFiltersTelemetry, { debounceTime: 1e3, trailing: true }, "search")
    );
    watch(
      () => filtersModel.value.setupNeeded,
      () => {
        sendFiltersTelemetry("setupNeeded");
      }
    );
    watch(
      () => filtersModel.value.incomplete,
      () => {
        sendFiltersTelemetry("incomplete");
      }
    );
    watch([() => route.params?.projectId, () => route.name], async () => {
      await resetFilters();
      await loadPaginationPreferences();
      await props.initialize();
    });
    onMounted(async () => {
      await loadPaginationPreferences();
      await props.initialize();
      await nextTick();
      if (hasAppliedFilters()) {
        hasFilters.value = true;
      }
      window.addEventListener("keydown", captureSearchHotKey);
    });
    onBeforeUnmount(() => {
      window.removeEventListener("keydown", captureSearchHotKey);
    });
    const captureSearchHotKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "f") {
        e.preventDefault();
        focusSearchInput();
      }
    };
    const focusSearchInput = () => {
      if (search2.value) {
        search2.value.focus();
      }
    };
    const isFilterApplied = (key) => {
      if (key === "search") return false;
      if (typeof props.filters[key] === "boolean") {
        return props.filters[key];
      }
      if (Array.isArray(props.filters[key])) {
        return props.filters[key].length > 0;
      }
      return props.filters[key] !== "";
    };
    const hasOnlyFiltersThatShowMoreResults = computed(() => {
      const activeFilters = filterKeys.value.filter(isFilterApplied);
      const filtersThatShowMoreResults = ["showArchived"];
      return activeFilters.every((filter) => {
        return filtersThatShowMoreResults.includes(filter);
      });
    });
    const hasAppliedFilters = () => {
      return !!filterKeys.value.find(isFilterApplied);
    };
    const setRowsPerPage = async (numberOfRowsPerPage) => {
      rowsPerPage.value = numberOfRowsPerPage;
      await savePaginationPreferences();
      emit("update:pagination-and-sort", {
        pageSize: numberOfRowsPerPage
      });
    };
    const setSorting = async (sort, persistUpdate = true) => {
      sortBy.value = sort;
      if (persistUpdate) {
        await savePaginationPreferences();
      }
      emit("update:pagination-and-sort", {
        sort
      });
      sendSortingTelemetry();
    };
    const setCurrentPage = async (page, persistUpdate = true) => {
      currentPage.value = page;
      if (persistUpdate) {
        await savePaginationPreferences();
      }
      emit("update:pagination-and-sort", {
        page
      });
    };
    const sendFiltersTelemetry = (source) => {
      if (resettingFilters.value) {
        if (source !== "reset") {
          return;
        }
        setTimeout(() => resettingFilters.value = false, 1500);
      }
      const filters2 = filtersModel.value;
      const filtersSet = [];
      const filterValues = [];
      Object.keys(filters2).forEach((key) => {
        if (filters2[key]) {
          filtersSet.push(key);
          filterValues.push(key === "search" ? null : filters2[key]);
        }
      });
      telemetry.track(`User set filters in ${props.resourceKey} list`, {
        filters_set: filtersSet,
        filter_values: filterValues,
        [`${props.resourceKey}_total_in_view`]: props.resources.length,
        [`${props.resourceKey}_after_filtering`]: filteredAndSortedResources.value.length
      });
    };
    const onAddButtonClick = (e) => {
      emit("click:add", e);
    };
    const onUpdateFilters = (e) => {
      emit("update:filters", e);
    };
    const resetFilters = async () => {
      Object.keys(filtersModel.value).forEach((key) => {
        filtersModel.value[key] = Array.isArray(filtersModel.value[key]) ? [] : "";
      });
      await setCurrentPage(1, false);
      resettingFilters.value = true;
      hasFilters.value = false;
      sendFiltersTelemetry("reset");
      emit("update:filters", filtersModel.value);
    };
    const itemSize = () => {
      if ("itemSize" in props.typeProps) {
        return props.typeProps.itemSize;
      }
      return 0;
    };
    const getColumns = () => {
      if ("columns" in props.typeProps) {
        return props.typeProps.columns;
      }
      return [];
    };
    const sendSortingTelemetry = () => {
      telemetry.track(`User changed sorting in ${props.resourceKey} list`, {
        sorting: sortBy.value
      });
    };
    const onUpdateFiltersLength = (length) => {
      hasFilters.value = length > 0;
    };
    const onSearch = (s) => {
      filtersModel.value.search = s;
      emit("update:search", s);
    };
    const findNearestPageSize = (size) => {
      return props.availablePageSizeOptions.reduce(
        (prev, curr) => Math.abs(curr - size) < Math.abs(prev - size) ? curr : prev
      );
    };
    const savePaginationPreferences = async () => {
      if (props.type !== "list-paginated") {
        return;
      }
      const currentQuery = { ...route.query };
      if (currentPage.value !== 1) {
        currentQuery.page = currentPage.value.toString();
      } else {
        delete currentQuery.page;
      }
      if (rowsPerPage.value !== preferredPageSize.value) {
        currentQuery.pageSize = rowsPerPage.value.toString();
        preferredPageSize.value = rowsPerPage.value;
      } else {
        delete currentQuery.pageSize;
      }
      if (sortBy.value !== preferredSort.value) {
        currentQuery.sort = sortBy.value;
        preferredSort.value = sortBy.value;
      } else {
        delete currentQuery.sort;
      }
      n8nLocalStorage.saveProjectPreferencesToLocalStorage(
        route.params.projectId ?? "",
        "workflows",
        {
          sort: sortBy.value,
          pageSize: rowsPerPage.value
        }
      );
      await router.replace({
        query: Object.keys(currentQuery).length ? currentQuery : void 0
      });
    };
    const loadPaginationPreferences = async () => {
      if (props.type !== "list-paginated") {
        return;
      }
      const query = route.query;
      const localStorageValues = n8nLocalStorage.loadProjectPreferencesFromLocalStorage(
        route.params.projectId ?? "",
        "workflows"
      );
      const emitPayload = {};
      if (query.page) {
        const newPage = parseInt(query.page, 10);
        if (newPage > 1) {
          currentPage.value = newPage;
          emitPayload.page = newPage;
        }
      }
      if (query.pageSize ?? localStorageValues.pageSize) {
        const parsedSize = parseInt(
          query.pageSize || String(localStorageValues.pageSize),
          10
        );
        const newPageSize = findNearestPageSize(parsedSize);
        rowsPerPage.value = newPageSize;
        emitPayload.pageSize = newPageSize;
        preferredPageSize.value = newPageSize;
      } else {
        rowsPerPage.value = props.customPageSize;
        emitPayload.pageSize = props.customPageSize;
      }
      if (query.sort) {
        sortBy.value = emitPayload.sort = preferredSort.value = query.sort;
      } else if (localStorageValues.sort) {
        await setSorting(localStorageValues.sort, false);
        emitPayload.sort = localStorageValues.sort;
        preferredSort.value = localStorageValues.sort;
      } else {
        sortBy.value = props.sortOptions[0];
      }
      emit("update:pagination-and-sort", emitPayload);
    };
    __expose({
      currentPage,
      setCurrentPage
    });
    return (_ctx, _cache) => {
      const _component_n8n_loading = N8nLoading;
      const _component_n8n_action_box = N8nActionBox;
      const _component_n8n_icon = N8nIcon;
      const _component_n8n_input = N8nInput;
      const _component_n8n_option = _sfc_main$7;
      const _component_n8n_select = N8nSelect;
      const _component_n8n_link = N8nLink;
      const _component_n8n_info_tip = InfoTip;
      const _component_n8n_recycle_scroller = _sfc_main$4;
      const _component_el_pagination = resolveComponent("el-pagination");
      const _component_n8n_datatable = N8nDatatable;
      const _component_n8n_text = N8nText;
      return openBlock(), createBlock(PageViewLayout, null, {
        header: withCtx(() => [
          renderSlot(_ctx.$slots, "header", {}, void 0, true)
        ]),
        default: withCtx(() => [
          _ctx.loading ? (openBlock(), createElementBlock("div", _hoisted_1, [
            createVNode(_component_n8n_loading, {
              rows: 25,
              "shrink-last": false
            })
          ])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            showEmptyState.value ? (openBlock(), createElementBlock("div", _hoisted_2, [
              renderSlot(_ctx.$slots, "empty", {}, () => [
                createVNode(_component_n8n_action_box, {
                  "data-test-id": "empty-resources-list",
                  emoji: "👋",
                  heading: unref(getResourceText)(
                    unref(usersStore).currentUser?.firstName ? "empty.heading" : "empty.heading.userNotSetup",
                    unref(usersStore).currentUser?.firstName ? "empty.heading" : "empty.heading.userNotSetup",
                    { name: unref(usersStore).currentUser?.firstName ?? "" }
                  ),
                  description: unref(getResourceText)("empty.description"),
                  "button-text": unref(getResourceText)("empty.button"),
                  "button-type": "secondary",
                  "button-disabled": _ctx.disabled,
                  "onClick:button": onAddButtonClick
                }, {
                  disabledButtonTooltip: withCtx(() => [
                    createTextVNode(toDisplayString(unref(getResourceText)("empty.button.disabled.tooltip")), 1)
                  ]),
                  _: 1
                }, 8, ["heading", "description", "button-text", "button-disabled"])
              ], true)
            ])) : (openBlock(), createBlock(PageViewLayoutList, { key: 1 }, {
              header: withCtx(() => [
                createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style["filters-row"])
                }, [
                  createBaseVNode("div", {
                    class: normalizeClass(_ctx.$style.filters)
                  }, [
                    renderSlot(_ctx.$slots, "breadcrumbs", {}, void 0, true),
                    props.uiConfig.searchEnabled ? (openBlock(), createBlock(_component_n8n_input, {
                      key: 0,
                      ref_key: "search",
                      ref: search2,
                      "model-value": filtersModel.value.search,
                      class: normalizeClass(_ctx.$style.search),
                      placeholder: unref(getResourceText)("search.placeholder", "search.placeholder"),
                      size: "small",
                      clearable: "",
                      "data-test-id": "resources-list-search",
                      "onUpdate:modelValue": onSearch
                    }, {
                      prefix: withCtx(() => [
                        createVNode(_component_n8n_icon, { icon: "search" })
                      ]),
                      _: 1
                    }, 8, ["model-value", "class", "placeholder"])) : createCommentVNode("", true),
                    props.uiConfig.sortEnabled ? (openBlock(), createElementBlock("div", {
                      key: 1,
                      class: normalizeClass(_ctx.$style["sort-and-filter"])
                    }, [
                      createVNode(_component_n8n_select, {
                        modelValue: sortBy.value,
                        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => sortBy.value = $event),
                        size: "small",
                        "data-test-id": "resources-list-sort",
                        onChange: _cache[1] || (_cache[1] = ($event) => setSorting(sortBy.value))
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.sortOptions, (sortOption) => {
                            return openBlock(), createBlock(_component_n8n_option, {
                              key: sortOption,
                              "data-test-id": "resources-list-sort-item",
                              value: sortOption,
                              label: unref(getResourceText)(`sort.${sortOption}`, `sort.${sortOption}`)
                            }, null, 8, ["value", "label"]);
                          }), 128))
                        ]),
                        _: 1
                      }, 8, ["modelValue"])
                    ], 2)) : createCommentVNode("", true),
                    props.uiConfig.showFiltersDropdown ? (openBlock(), createElementBlock("div", {
                      key: 2,
                      class: normalizeClass(_ctx.$style["sort-and-filter"])
                    }, [
                      createVNode(ResourceFiltersDropdown, {
                        keys: filterKeys.value,
                        reset: resetFilters,
                        "model-value": filtersModel.value,
                        shareable: _ctx.shareable,
                        "just-icon": true,
                        "onUpdate:modelValue": onUpdateFilters,
                        "onUpdate:filtersLength": onUpdateFiltersLength
                      }, {
                        default: withCtx((resourceFiltersSlotProps) => [
                          renderSlot(_ctx.$slots, "filters", normalizeProps(guardReactiveProps(resourceFiltersSlotProps)), void 0, true)
                        ]),
                        _: 3
                      }, 8, ["keys", "model-value", "shareable"]),
                      renderSlot(_ctx.$slots, "add-button", {}, void 0, true)
                    ], 2)) : createCommentVNode("", true)
                  ], 2)
                ], 2),
                renderSlot(_ctx.$slots, "callout", {}, void 0, true),
                props.uiConfig.showFiltersDropdown ? withDirectives((openBlock(), createElementBlock("div", _hoisted_3, [
                  createVNode(_component_n8n_info_tip, { bold: false }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(hasOnlyFiltersThatShowMoreResults.value ? unref(getResourceText)("filters.active.shortText", "filters.active.shortText") : unref(getResourceText)("filters.active", "filters.active")) + " ", 1),
                      createVNode(_component_n8n_link, {
                        "data-test-id": "workflows-filter-reset",
                        size: "small",
                        onClick: resetFilters
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(getResourceText)("filters.active.reset", "filters.active.reset")), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ], 512)), [
                  [vShow, hasFilters.value]
                ]) : createCommentVNode("", true),
                _cache[4] || (_cache[4] = createBaseVNode("div", { class: "pb-xs" }, null, -1))
              ]),
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "preamble", {}, void 0, true),
                _ctx.resourcesRefreshing ? (openBlock(), createElementBlock("div", _hoisted_4, [
                  createVNode(_component_n8n_loading, {
                    rows: rowsPerPage.value,
                    "shrink-last": false
                  }, null, 8, ["rows"])
                ])) : filteredAndSortedResources.value.length > 0 ? (openBlock(), createElementBlock("div", {
                  key: 1,
                  ref: "listWrapperRef",
                  "data-test-id": "resources-list-wrapper",
                  class: normalizeClass(_ctx.$style.listWrapper)
                }, [
                  _ctx.type === "list-full" ? (openBlock(), createBlock(_component_n8n_recycle_scroller, {
                    key: 0,
                    "data-test-id": "resources-list",
                    items: filteredAndSortedResources.value,
                    "item-size": itemSize(),
                    "item-key": "id"
                  }, {
                    default: withCtx(({ item, updateItemSize }) => [
                      renderSlot(_ctx.$slots, "default", {
                        data: item,
                        updateItemSize
                      }, void 0, true)
                    ]),
                    _: 3
                  }, 8, ["items", "item-size"])) : _ctx.type === "list-paginated" ? (openBlock(), createElementBlock("div", {
                    key: 1,
                    class: normalizeClass(_ctx.$style.paginatedListWrapper),
                    "data-test-id": "paginated-list"
                  }, [
                    createBaseVNode("div", {
                      class: normalizeClass(_ctx.$style.listItems)
                    }, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.resources, (item, index) => {
                        return openBlock(), createElementBlock("div", {
                          key: index,
                          class: normalizeClass(_ctx.$style.listItem)
                        }, [
                          renderSlot(_ctx.$slots, "item", {
                            item,
                            index
                          }, () => [
                            createTextVNode(toDisplayString(item), 1)
                          ], true)
                        ], 2);
                      }), 128))
                    ], 2),
                    createBaseVNode("div", {
                      class: normalizeClass(_ctx.$style.listPagination)
                    }, [
                      createVNode(_component_el_pagination, {
                        "current-page": currentPage.value,
                        "onUpdate:currentPage": [
                          _cache[2] || (_cache[2] = ($event) => currentPage.value = $event),
                          setCurrentPage
                        ],
                        "page-size": rowsPerPage.value,
                        "onUpdate:pageSize": _cache[3] || (_cache[3] = ($event) => rowsPerPage.value = $event),
                        background: "",
                        total: _ctx.totalItems,
                        "page-sizes": _ctx.availablePageSizeOptions,
                        layout: "total, prev, pager, next, sizes",
                        "data-test-id": "resources-list-pagination",
                        onSizeChange: setRowsPerPage
                      }, null, 8, ["current-page", "page-size", "total", "page-sizes"])
                    ], 2)
                  ], 2)) : createCommentVNode("", true),
                  _ctx.type === "datatable" ? (openBlock(), createBlock(_component_n8n_datatable, {
                    key: 2,
                    "data-test-id": "resources-table",
                    class: normalizeClass(_ctx.$style.datatable),
                    columns: getColumns(),
                    rows: filteredAndSortedResources.value,
                    "current-page": currentPage.value,
                    "rows-per-page": rowsPerPage.value,
                    "onUpdate:currentPage": setCurrentPage,
                    "onUpdate:rowsPerPage": setRowsPerPage
                  }, {
                    row: withCtx(({ columns, row }) => [
                      renderSlot(_ctx.$slots, "default", {
                        data: row,
                        columns
                      }, void 0, true)
                    ]),
                    _: 3
                  }, 8, ["class", "columns", "rows", "current-page", "rows-per-page"])) : createCommentVNode("", true)
                ], 2)) : hasAppliedFilters() || filtersModel.value.search !== "" ? (openBlock(), createBlock(_component_n8n_text, {
                  key: 2,
                  color: "text-base",
                  size: "medium",
                  "data-test-id": "resources-list-empty"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(getResourceText)("noResults", "noResults")), 1)
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                renderSlot(_ctx.$slots, "postamble", {}, void 0, true)
              ]),
              _: 3
            }))
          ], 64))
        ]),
        _: 3
      });
    };
  }
});
const filters = "_filters_10oee_123";
const search = "_search_10oee_154";
const listWrapper = "_listWrapper_10oee_167";
const paginatedListWrapper = "_paginatedListWrapper_10oee_173";
const listPagination = "_listPagination_10oee_181";
const datatable = "_datatable_10oee_208";
const style0 = {
  "filters-row": "_filters-row_10oee_123",
  filters,
  "sort-and-filter": "_sort-and-filter_10oee_141",
  search,
  listWrapper,
  paginatedListWrapper,
  listPagination,
  datatable
};
const cssModules = {
  "$style": style0
};
const ResourcesListLayout = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules], ["__scopeId", "data-v-fe845784"]]);
export {
  ResourcesListLayout as R
};
