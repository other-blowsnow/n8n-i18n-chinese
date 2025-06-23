import { _ as _export_sfc, i as createElementBlock, g as openBlock, A as renderSlot, k as createBaseVNode, n as normalizeClass, d as defineComponent, f as createCommentVNode, a4 as useProjectsStore, x as computed, $ as watch, aH as onBeforeMount, h as resolveComponent, e as createBlock, w as withCtx, m as unref, ae as EnterpriseEditionFeature, j as createVNode, c as useI18n, gn as ProjectSharing, l as createTextVNode, t as toDisplayString, aD as useLocalStorage, go as LOCAL_STORAGE_WORKFLOW_LIST_PREFERENCES_KEY, U as useRoute, b as useRouter, I as useDebounce, u as useUsersStore, r as ref, cB as useSlots, gp as isSharedResource, gq as isResourceSortableByDate, o as onMounted, B as nextTick, z as onBeforeUnmount, F as Fragment, G as renderList, aI as withDirectives, bO as normalizeProps, bP as guardReactiveProps, aJ as vShow, am as useTelemetry } from "./index-Y0sphpVt.js";
import { u as useProjectPages } from "./useProjectPages-F73Ftzbl.js";
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
    const i18n = useI18n();
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
      const _component_n8n_badge = resolveComponent("n8n-badge");
      const _component_n8n_button = resolveComponent("n8n-button");
      const _component_n8n_input_label = resolveComponent("n8n-input-label");
      const _component_enterprise_edition = resolveComponent("enterprise-edition");
      const _component_n8n_link = resolveComponent("n8n-link");
      const _component_n8n_popover = resolveComponent("n8n-popover");
      return openBlock(), createBlock(_component_n8n_popover, {
        trigger: "click",
        width: "304",
        size: "large"
      }, {
        reference: withCtx(() => [
          createVNode(_component_n8n_button, {
            icon: "filter",
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
    showFiltersDropdown: { type: Boolean, default: true },
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
    hasEmptyState: { type: Boolean, default: true }
  },
  emits: ["update:filters", "click:add", "update:pagination-and-sort", "update:search"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const route = useRoute();
    const router = useRouter();
    const i18n = useI18n();
    const { callDebounced } = useDebounce();
    const usersStore = useUsersStore();
    const telemetry = useTelemetry();
    const n8nLocalStorage = useN8nLocalStorage();
    const props = __props;
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
          matches = matches && !!(resource.homeProject && resource.homeProject.id === filtersModel.value.homeProject);
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
            return props.sortFns.lastUpdated ? props.sortFns.lastUpdated(a, b) : new Date(b.updatedAt ?? "").valueOf() - new Date(a.updatedAt ?? "").valueOf();
          case "lastCreated":
            if (!sortableByDate) {
              return 0;
            }
            return props.sortFns.lastCreated ? props.sortFns.lastCreated(a, b) : new Date(b.createdAt ?? "").valueOf() - new Date(a.createdAt ?? "").valueOf();
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
      const _component_n8n_loading = resolveComponent("n8n-loading");
      const _component_n8n_action_box = resolveComponent("n8n-action-box");
      const _component_n8n_icon = resolveComponent("n8n-icon");
      const _component_n8n_input = resolveComponent("n8n-input");
      const _component_n8n_option = resolveComponent("n8n-option");
      const _component_n8n_select = resolveComponent("n8n-select");
      const _component_n8n_link = resolveComponent("n8n-link");
      const _component_n8n_info_tip = resolveComponent("n8n-info-tip");
      const _component_n8n_recycle_scroller = resolveComponent("n8n-recycle-scroller");
      const _component_el_pagination = resolveComponent("el-pagination");
      const _component_n8n_datatable = resolveComponent("n8n-datatable");
      const _component_n8n_text = resolveComponent("n8n-text");
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
                  heading: unref(i18n).baseText(
                    unref(usersStore).currentUser?.firstName ? `${_ctx.resourceKey}.empty.heading` : `${_ctx.resourceKey}.empty.heading.userNotSetup`,
                    {
                      interpolate: { name: unref(usersStore).currentUser?.firstName ?? "" }
                    }
                  ),
                  description: unref(i18n).baseText(`${_ctx.resourceKey}.empty.description`),
                  "button-text": unref(i18n).baseText(`${_ctx.resourceKey}.empty.button`),
                  "button-type": "secondary",
                  "button-disabled": _ctx.disabled,
                  "onClick:button": onAddButtonClick
                }, {
                  disabledButtonTooltip: withCtx(() => [
                    createTextVNode(toDisplayString(unref(i18n).baseText(`${_ctx.resourceKey}.empty.button.disabled.tooltip`)), 1)
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
                    createVNode(_component_n8n_input, {
                      ref_key: "search",
                      ref: search2,
                      "model-value": filtersModel.value.search,
                      class: normalizeClass(_ctx.$style.search),
                      placeholder: unref(i18n).baseText(`${_ctx.resourceKey}.search.placeholder`),
                      size: "small",
                      clearable: "",
                      "data-test-id": "resources-list-search",
                      "onUpdate:modelValue": onSearch
                    }, {
                      prefix: withCtx(() => [
                        createVNode(_component_n8n_icon, { icon: "search" })
                      ]),
                      _: 1
                    }, 8, ["model-value", "class", "placeholder"]),
                    createBaseVNode("div", {
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
                              label: unref(i18n).baseText(`${_ctx.resourceKey}.sort.${sortOption}`)
                            }, null, 8, ["value", "label"]);
                          }), 128))
                        ]),
                        _: 1
                      }, 8, ["modelValue"])
                    ], 2),
                    createBaseVNode("div", {
                      class: normalizeClass(_ctx.$style["sort-and-filter"])
                    }, [
                      _ctx.showFiltersDropdown ? (openBlock(), createBlock(ResourceFiltersDropdown, {
                        key: 0,
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
                      }, 8, ["keys", "model-value", "shareable"])) : createCommentVNode("", true),
                      renderSlot(_ctx.$slots, "add-button", {}, void 0, true)
                    ], 2)
                  ], 2)
                ], 2),
                renderSlot(_ctx.$slots, "callout", {}, void 0, true),
                _ctx.showFiltersDropdown ? withDirectives((openBlock(), createElementBlock("div", _hoisted_3, [
                  createVNode(_component_n8n_info_tip, { bold: false }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(hasOnlyFiltersThatShowMoreResults.value ? unref(i18n).baseText(`${_ctx.resourceKey}.filters.active.shortText`) : unref(i18n).baseText(`${_ctx.resourceKey}.filters.active`)) + " ", 1),
                      createVNode(_component_n8n_link, {
                        "data-test-id": "workflows-filter-reset",
                        size: "small",
                        onClick: resetFilters
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(i18n).baseText(`${_ctx.resourceKey}.filters.active.reset`)), 1)
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
                    createTextVNode(toDisplayString(unref(i18n).baseText(`${_ctx.resourceKey}.noResults`)), 1)
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
const filters = "_filters_a3x6d_123";
const search = "_search_a3x6d_154";
const listWrapper = "_listWrapper_a3x6d_168";
const paginatedListWrapper = "_paginatedListWrapper_a3x6d_174";
const listPagination = "_listPagination_a3x6d_182";
const datatable = "_datatable_a3x6d_209";
const style0 = {
  "filters-row": "_filters-row_a3x6d_123",
  filters,
  "sort-and-filter": "_sort-and-filter_a3x6d_141",
  search,
  listWrapper,
  paginatedListWrapper,
  listPagination,
  datatable
};
const cssModules = {
  "$style": style0
};
const ResourcesListLayout = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules], ["__scopeId", "data-v-918aa4ac"]]);
export {
  ResourcesListLayout as R
};
