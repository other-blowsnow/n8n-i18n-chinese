import { o as __toESM } from "./chunk-r2Y0G7H8.js";
import { C as computed, Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, G as nextTick, Gt as unref, I as guardReactiveProps, It as ref, J as onBeforeUnmount, M as createVNode, P as defineComponent, T as createBlock, Z as onMounted, _ as Fragment, _t as watch, at as renderSlot, bt as withCtx, et as openBlock, it as renderList, j as createTextVNode, p as vShow, pt as useSlots, vn as normalizeClass, w as createBaseVNode, xt as withDirectives, yn as normalizeProps } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { M as useLocalStorage, yt as useI18n } from "./_MapCache-8-eqnC2S.js";
import { At as N8nLink_default, F as N8nRecycleScroller_default, Hi as N8nIcon_default, Kt as N8nInput_default, Lt as useRoute, Mi as N8nActionBox_default, Qt as ElPagination, Rt as useRouter, Y as N8nInfoTip_default, ct as N8nDatatable_default, dt as N8nOption_default, ut as N8nSelect_default, xt as N8nLoading_default, zi as N8nText_default } from "./src-Cq27d_Gp.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import { Hr as isResourceSortableByDate, Nr as isBaseTextKey, Nt as useTelemetry, Wr as isSharedResource, t as useUsersStore } from "./users.store-qBZsmf9-.js";
import { rc as LOCAL_STORAGE_WORKFLOW_LIST_PREFERENCES_KEY } from "./constants-Cyrg9Nbl.js";
import { t as useDebounce } from "./useDebounce-DmlUcXhA.js";
import { r as useProjectPages } from "./readyToRun.store-jCsh7z8e.js";
import { t as ResourceFiltersDropdown_default } from "./ResourceFiltersDropdown-DtqPKZUd.js";
var PageViewLayout_vue_vue_type_style_index_0_lang_module_default = {
	wrapper: "_wrapper_1bol0_125",
	content: "_content_1bol0_141"
};
var _sfc_main = {};
function _sfc_render(_ctx, _cache) {
	return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.wrapper) }, [renderSlot(_ctx.$slots, "header"), createBaseVNode("main", { class: normalizeClass(_ctx.$style.content) }, [renderSlot(_ctx.$slots, "default")], 2)], 2);
}
var PageViewLayout_default = /* @__PURE__ */ __plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render], ["__cssModules", { "$style": PageViewLayout_vue_vue_type_style_index_0_lang_module_default }]]);
var PageViewLayoutList_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "PageViewLayoutList",
	props: { overflow: { type: Boolean } },
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass({
				[_ctx.$style.wrapper]: true,
				[_ctx.$style.overflow]: __props.overflow
			}) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.list) }, [_ctx.$slots.header ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.header)
			}, [renderSlot(_ctx.$slots, "header")], 2)) : createCommentVNode("", true), createBaseVNode("div", { class: normalizeClass(_ctx.$style.body) }, [renderSlot(_ctx.$slots, "default")], 2)], 2)], 2);
		};
	}
});
var PageViewLayoutList_vue_vue_type_style_index_0_lang_module_default = {
	wrapper: "_wrapper_mbox7_125",
	overflow: "_overflow_mbox7_130",
	list: "_list_mbox7_130",
	body: "_body_mbox7_130"
};
var PageViewLayoutList_default = /* @__PURE__ */ __plugin_vue_export_helper_default(PageViewLayoutList_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": PageViewLayoutList_vue_vue_type_style_index_0_lang_module_default }]]);
function useN8nLocalStorage() {
	const projectPages = useProjectPages();
	const getProjectKey = (projectId) => {
		return projectPages.isOverviewSubPage ? "home" : projectId;
	};
	const saveProjectPreferencesToLocalStorage = (projectId, tabKey, preferences) => {
		const projectKey = getProjectKey(projectId);
		if (!projectKey) return;
		const localStorage = useLocalStorage(LOCAL_STORAGE_WORKFLOW_LIST_PREFERENCES_KEY, {});
		if (!localStorage.value[projectKey]) localStorage.value[projectKey] = {};
		localStorage.value[projectKey][tabKey] = {
			...localStorage.value[projectKey][tabKey],
			...preferences
		};
	};
	const loadProjectPreferencesFromLocalStorage = (projectId, tabKey) => {
		const projectKey = getProjectKey(projectId);
		if (!projectKey) return {};
		return useLocalStorage("N8N_WORKFLOWS_LIST_PREFERENCES", {}).value[projectKey]?.[tabKey] || {};
	};
	return {
		saveProjectPreferencesToLocalStorage,
		loadProjectPreferencesFromLocalStorage,
		getProjectKey
	};
}
function useResourcesListI18n(resourceKey) {
	const i18n = useI18n();
	const getResourceText = (keySuffix, fallbackKeySuffix, interpolate) => {
		const specificKey = `${resourceKey}.${keySuffix}`;
		const genericKey = `resources.${keySuffix}`;
		const fallbackKey = fallbackKeySuffix ? `resources.${fallbackKeySuffix}` : void 0;
		if (isBaseTextKey(specificKey)) return i18n.baseText(specificKey, { interpolate });
		if (isBaseTextKey(genericKey)) return i18n.baseText(genericKey, { interpolate });
		if (fallbackKey && isBaseTextKey(fallbackKey)) return i18n.baseText(fallbackKey, { interpolate });
		return keySuffix.split(".").pop()?.replace(/([A-Z])/g, " $1").trim() || keySuffix;
	};
	return { getResourceText };
}
var _hoisted_1 = {
	key: 0,
	class: "resource-list-loading"
};
var _hoisted_2 = { key: 0 };
var _hoisted_3 = {
	key: 0,
	class: "mt-xs",
	"data-test-id": "resources-list-filters-applied-info"
};
var _hoisted_4 = {
	key: 0,
	class: "resource-list-loading resource-list-loading-instant"
};
var ResourcesListLayout_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ResourcesListLayout",
	props: {
		resourceKey: {},
		displayName: {
			type: Function,
			default: (resource) => resource.name || ""
		},
		resources: {},
		disabled: { type: Boolean },
		initialize: {
			type: Function,
			default: async () => {}
		},
		filters: { default: () => ({
			search: "",
			homeProject: ""
		}) },
		additionalFiltersHandler: {
			type: Function,
			default: void 0
		},
		shareable: {
			type: Boolean,
			default: true
		},
		sortFns: { default: () => ({}) },
		sortOptions: { default: () => [
			"lastUpdated",
			"lastCreated",
			"nameAsc",
			"nameDesc"
		] },
		type: { default: "list-full" },
		typeProps: { default: () => ({ itemSize: 80 }) },
		loading: {
			type: Boolean,
			default: true
		},
		customPageSize: { default: 25 },
		availablePageSizeOptions: { default: () => [
			10,
			25,
			50,
			100
		] },
		totalItems: { default: 0 },
		resourcesRefreshing: {
			type: Boolean,
			default: false
		},
		dontPerformSortingAndFiltering: {
			type: Boolean,
			default: false
		},
		hasEmptyState: {
			type: Boolean,
			default: true
		},
		uiConfig: { default: () => ({
			searchEnabled: true,
			showFiltersDropdown: true,
			sortEnabled: true
		}) }
	},
	emits: [
		"update:filters",
		"click:add",
		"update:pagination-and-sort",
		"update:search"
	],
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
		const search$1 = ref(null);
		const listWrapperRef = ref(null);
		const listItemsRef = ref(null);
		const preferredPageSize = ref(props.customPageSize);
		const preferredSort = ref(props.sortOptions[0]);
		const emit = __emit;
		useSlots();
		const filtersModel = computed({
			get: () => props.filters,
			set: (newValue) => emit("update:filters", newValue)
		});
		const showEmptyState = computed(() => {
			return props.hasEmptyState && props.resources.length === 0 && !hasFilters.value && !filtersModel.value.search && !props.resourcesRefreshing;
		});
		const filterKeys = computed(() => {
			return Object.keys(filtersModel.value);
		});
		const filteredAndSortedResources = computed(() => {
			if (props.dontPerformSortingAndFiltering) return props.resources;
			return props.resources.filter((resource) => {
				let matches = true;
				if (filtersModel.value.homeProject && isSharedResource(resource)) matches = matches && !!("homeProject" in resource && resource.homeProject && resource.homeProject.id === filtersModel.value.homeProject);
				if (filtersModel.value.search) {
					const searchString = filtersModel.value.search.toLowerCase();
					matches = matches && props.displayName(resource).toLowerCase().includes(searchString);
				}
				if (props.additionalFiltersHandler) matches = props.additionalFiltersHandler(resource, filtersModel.value, matches);
				return matches;
			}).sort((a, b) => {
				const sortableByDate = isResourceSortableByDate(a) && isResourceSortableByDate(b);
				switch (sortBy.value) {
					case "lastUpdated":
						if (!sortableByDate) return 0;
						if ("updatedAt" in a && "updatedAt" in b) return props.sortFns.lastUpdated ? props.sortFns.lastUpdated(a, b) : new Date(b.updatedAt ?? "").valueOf() - new Date(a.updatedAt ?? "").valueOf();
						return 0;
					case "lastCreated":
						if (!sortableByDate) return 0;
						if ("createdAt" in a && "createdAt" in b) return props.sortFns.lastCreated ? props.sortFns.lastCreated(a, b) : new Date(b.createdAt ?? "").valueOf() - new Date(a.createdAt ?? "").valueOf();
						return 0;
					case "nameAsc": return props.sortFns.nameAsc ? props.sortFns.nameAsc(a, b) : props.displayName(a).trim().localeCompare(props.displayName(b).trim());
					case "nameDesc": return props.sortFns.nameDesc ? props.sortFns.nameDesc(a, b) : props.displayName(b).trim().localeCompare(props.displayName(a).trim());
					default: return props.sortFns[sortBy.value] ? props.sortFns[sortBy.value](a, b) : 0;
				}
			});
		});
		watch(() => props.filters, (value) => {
			filtersModel.value = value;
			if (hasAppliedFilters()) hasFilters.value = true;
		});
		watch(() => filtersModel.value.homeProject, () => {
			sendFiltersTelemetry("homeProject");
		});
		watch(() => filtersModel.value.tags, () => {
			sendFiltersTelemetry("tags");
		});
		watch(() => filtersModel.value.type, () => {
			sendFiltersTelemetry("type");
		});
		watch(() => filtersModel.value.search, () => callDebounced(sendFiltersTelemetry, {
			debounceTime: 1e3,
			trailing: true
		}, "search"));
		watch(() => filtersModel.value.setupNeeded, () => {
			sendFiltersTelemetry("setupNeeded");
		});
		watch(() => filtersModel.value.incomplete, () => {
			sendFiltersTelemetry("incomplete");
		});
		watch([() => route.params?.projectId, () => route.name], async () => {
			await resetFilters();
			await loadPaginationPreferences();
			await props.initialize();
		});
		onMounted(async () => {
			await loadPaginationPreferences();
			await props.initialize();
			await nextTick();
			if (hasAppliedFilters()) hasFilters.value = true;
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
			if (search$1.value) search$1.value.focus();
		};
		const isFilterApplied = (key) => {
			if (key === "search") return false;
			if (typeof props.filters[key] === "boolean") return props.filters[key];
			if (Array.isArray(props.filters[key])) return props.filters[key].length > 0;
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
			emit("update:pagination-and-sort", { pageSize: numberOfRowsPerPage });
		};
		const setSorting = async (sort, persistUpdate = true) => {
			sortBy.value = sort;
			if (persistUpdate) {
				await savePaginationPreferences();
				sendSortingTelemetry();
			}
			emit("update:pagination-and-sort", { sort });
		};
		const setCurrentPage = async (page, persistUpdate = true) => {
			currentPage.value = page;
			if (persistUpdate) await savePaginationPreferences();
			emit("update:pagination-and-sort", { page });
		};
		const sendFiltersTelemetry = (source) => {
			if (resettingFilters.value) {
				if (source !== "reset") return;
				setTimeout(() => resettingFilters.value = false, 1500);
			}
			const filters$1 = filtersModel.value;
			const filtersSet = [];
			const filterValues = [];
			Object.keys(filters$1).forEach((key) => {
				if (filters$1[key]) {
					filtersSet.push(key);
					filterValues.push(key === "search" ? null : filters$1[key]);
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
			if ("itemSize" in props.typeProps) return props.typeProps.itemSize;
			return 0;
		};
		const getColumns = () => {
			if ("columns" in props.typeProps) return props.typeProps.columns;
			return [];
		};
		const sendSortingTelemetry = () => {
			telemetry.track(`User changed sorting in ${props.resourceKey} list`, { sorting: sortBy.value });
		};
		const onUpdateFiltersLength = (length) => {
			hasFilters.value = length > 0;
		};
		const onSearch = (s) => {
			filtersModel.value.search = s;
			emit("update:search", s);
		};
		const findNearestPageSize = (size) => {
			return props.availablePageSizeOptions.reduce((prev, curr) => Math.abs(curr - size) < Math.abs(prev - size) ? curr : prev);
		};
		const savePaginationPreferences = async () => {
			if (props.type !== "list-paginated") return;
			const currentQuery = { ...route.query };
			if (currentPage.value !== 1) currentQuery.page = currentPage.value.toString();
			else delete currentQuery.page;
			if (rowsPerPage.value !== preferredPageSize.value) {
				currentQuery.pageSize = rowsPerPage.value.toString();
				preferredPageSize.value = rowsPerPage.value;
			} else delete currentQuery.pageSize;
			if (sortBy.value !== preferredSort.value) {
				currentQuery.sort = sortBy.value;
				preferredSort.value = sortBy.value;
			} else delete currentQuery.sort;
			n8nLocalStorage.saveProjectPreferencesToLocalStorage(route.params.projectId ?? "", "workflows", {
				sort: sortBy.value,
				pageSize: rowsPerPage.value
			});
			await router.replace({ query: Object.keys(currentQuery).length ? currentQuery : void 0 });
		};
		const loadPaginationPreferences = async () => {
			if (props.type !== "list-paginated") return;
			const query = route.query;
			const localStorageValues = n8nLocalStorage.loadProjectPreferencesFromLocalStorage(route.params.projectId ?? "", "workflows");
			const emitPayload = {};
			if (query.page) {
				const newPage = parseInt(query.page, 10);
				if (newPage > 1) {
					currentPage.value = newPage;
					emitPayload.page = newPage;
				}
			}
			if (query.pageSize ?? localStorageValues.pageSize) {
				const newPageSize = findNearestPageSize(parseInt(query.pageSize || String(localStorageValues.pageSize), 10));
				rowsPerPage.value = newPageSize;
				emitPayload.pageSize = newPageSize;
				preferredPageSize.value = newPageSize;
			} else {
				rowsPerPage.value = props.customPageSize;
				emitPayload.pageSize = props.customPageSize;
			}
			if (query.sort) sortBy.value = emitPayload.sort = preferredSort.value = query.sort;
			else if (localStorageValues.sort) {
				await setSorting(localStorageValues.sort, false);
				emitPayload.sort = localStorageValues.sort;
				preferredSort.value = localStorageValues.sort;
			} else sortBy.value = props.sortOptions[0];
			emit("update:pagination-and-sort", emitPayload);
		};
		const getScrollContainer = () => {
			if (props.type === "list-paginated") return listItemsRef.value ?? null;
			return listWrapperRef.value ?? null;
		};
		__expose({
			currentPage,
			setCurrentPage,
			getScrollContainer
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(PageViewLayout_default, null, {
				header: withCtx(() => [renderSlot(_ctx.$slots, "header", {}, void 0, true)]),
				default: withCtx(() => [__props.loading ? (openBlock(), createElementBlock("div", _hoisted_1, [createVNode(unref(N8nLoading_default), {
					rows: 25,
					"shrink-last": false
				})])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [showEmptyState.value ? (openBlock(), createElementBlock("div", _hoisted_2, [renderSlot(_ctx.$slots, "empty", {}, () => [createVNode(unref(N8nActionBox_default), {
					"data-test-id": "empty-resources-list",
					icon: {
						type: "emoji",
						value: "👋"
					},
					heading: unref(getResourceText)(unref(usersStore).currentUser?.firstName ? "empty.heading" : "empty.heading.userNotSetup", unref(usersStore).currentUser?.firstName ? "empty.heading" : "empty.heading.userNotSetup", { name: unref(usersStore).currentUser?.firstName ?? "" }),
					description: unref(getResourceText)("empty.description"),
					"button-text": unref(getResourceText)("empty.button"),
					"button-type": "secondary",
					"button-disabled": __props.disabled,
					"onClick:button": onAddButtonClick
				}, {
					disabledButtonTooltip: withCtx(() => [createTextVNode(toDisplayString(unref(getResourceText)("empty.button.disabled.tooltip")), 1)]),
					_: 1
				}, 8, [
					"heading",
					"description",
					"button-text",
					"button-disabled"
				])], true)])) : (openBlock(), createBlock(PageViewLayoutList_default, { key: 1 }, {
					header: withCtx(() => [
						createBaseVNode("div", { class: normalizeClass(_ctx.$style["filters-row"]) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.filters) }, [
							renderSlot(_ctx.$slots, "breadcrumbs", {}, void 0, true),
							props.uiConfig.searchEnabled ? (openBlock(), createBlock(unref(N8nInput_default), {
								key: 0,
								ref_key: "search",
								ref: search$1,
								"model-value": filtersModel.value.search,
								class: normalizeClass(_ctx.$style.search),
								placeholder: unref(getResourceText)("search.placeholder", "search.placeholder"),
								size: "small",
								clearable: "",
								"data-test-id": "resources-list-search",
								"onUpdate:modelValue": onSearch
							}, {
								prefix: withCtx(() => [createVNode(unref(N8nIcon_default), { icon: "search" })]),
								_: 1
							}, 8, [
								"model-value",
								"class",
								"placeholder"
							])) : createCommentVNode("", true),
							props.uiConfig.sortEnabled ? (openBlock(), createElementBlock("div", {
								key: 1,
								class: normalizeClass(_ctx.$style["sort-and-filter"])
							}, [createVNode(unref(N8nSelect_default), {
								modelValue: sortBy.value,
								"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => sortBy.value = $event),
								size: "small",
								"data-test-id": "resources-list-sort",
								onChange: _cache[1] || (_cache[1] = ($event) => setSorting(sortBy.value))
							}, {
								default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.sortOptions, (sortOption) => {
									return openBlock(), createBlock(unref(N8nOption_default), {
										key: sortOption,
										"data-test-id": "resources-list-sort-item",
										value: sortOption,
										label: unref(getResourceText)(`sort.${sortOption}`, `sort.${sortOption}`)
									}, null, 8, ["value", "label"]);
								}), 128))]),
								_: 1
							}, 8, ["modelValue"])], 2)) : createCommentVNode("", true),
							props.uiConfig.showFiltersDropdown ? (openBlock(), createElementBlock("div", {
								key: 2,
								class: normalizeClass(_ctx.$style["sort-and-filter"])
							}, [createVNode(ResourceFiltersDropdown_default, {
								keys: filterKeys.value,
								reset: resetFilters,
								"model-value": filtersModel.value,
								shareable: __props.shareable,
								"just-icon": true,
								"onUpdate:modelValue": onUpdateFilters,
								"onUpdate:filtersLength": onUpdateFiltersLength
							}, {
								default: withCtx((resourceFiltersSlotProps) => [renderSlot(_ctx.$slots, "filters", normalizeProps(guardReactiveProps(resourceFiltersSlotProps)), void 0, true)]),
								_: 3
							}, 8, [
								"keys",
								"model-value",
								"shareable"
							]), renderSlot(_ctx.$slots, "add-button", {}, void 0, true)], 2)) : createCommentVNode("", true)
						], 2)], 2),
						renderSlot(_ctx.$slots, "callout", {}, void 0, true),
						props.uiConfig.showFiltersDropdown ? withDirectives((openBlock(), createElementBlock("div", _hoisted_3, [createVNode(unref(N8nInfoTip_default), { bold: false }, {
							default: withCtx(() => [createTextVNode(toDisplayString(hasOnlyFiltersThatShowMoreResults.value ? unref(getResourceText)("filters.active.shortText", "filters.active.shortText") : unref(getResourceText)("filters.active", "filters.active")) + " ", 1), createVNode(unref(N8nLink_default), {
								"data-test-id": "workflows-filter-reset",
								size: "small",
								onClick: resetFilters
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(getResourceText)("filters.active.reset", "filters.active.reset")), 1)]),
								_: 1
							})]),
							_: 1
						})], 512)), [[vShow, hasFilters.value]]) : createCommentVNode("", true),
						_cache[4] || (_cache[4] = createBaseVNode("div", { class: "pb-xs" }, null, -1))
					]),
					default: withCtx(() => [
						renderSlot(_ctx.$slots, "preamble", {}, void 0, true),
						__props.resourcesRefreshing ? (openBlock(), createElementBlock("div", _hoisted_4, [createVNode(unref(N8nLoading_default), {
							rows: rowsPerPage.value,
							"shrink-last": false
						}, null, 8, ["rows"])])) : filteredAndSortedResources.value.length > 0 ? (openBlock(), createElementBlock("div", {
							key: 1,
							ref_key: "listWrapperRef",
							ref: listWrapperRef,
							"data-test-id": "resources-list-wrapper",
							class: normalizeClass(_ctx.$style.listWrapper)
						}, [__props.type === "list-full" ? (openBlock(), createBlock(unref(N8nRecycleScroller_default), {
							key: 0,
							"data-test-id": "resources-list",
							items: filteredAndSortedResources.value,
							"item-size": itemSize(),
							"item-key": "id"
						}, {
							default: withCtx(({ item, updateItemSize }) => [renderSlot(_ctx.$slots, "default", {
								data: item,
								updateItemSize
							}, void 0, true)]),
							_: 3
						}, 8, ["items", "item-size"])) : __props.type === "list-paginated" ? (openBlock(), createElementBlock("div", {
							key: 1,
							class: normalizeClass(_ctx.$style.paginatedListWrapper),
							"data-test-id": "paginated-list"
						}, [createBaseVNode("div", {
							ref_key: "listItemsRef",
							ref: listItemsRef,
							class: normalizeClass(_ctx.$style.listItems)
						}, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.resources, (item, index) => {
							return openBlock(), createElementBlock("div", {
								key: index,
								class: normalizeClass(_ctx.$style.listItem)
							}, [renderSlot(_ctx.$slots, "item", {
								item,
								index
							}, () => [createTextVNode(toDisplayString(item), 1)], true)], 2);
						}), 128))], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.listPagination) }, [createVNode(unref(ElPagination), {
							"current-page": currentPage.value,
							"onUpdate:currentPage": [_cache[2] || (_cache[2] = ($event) => currentPage.value = $event), setCurrentPage],
							"page-size": rowsPerPage.value,
							"onUpdate:pageSize": _cache[3] || (_cache[3] = ($event) => rowsPerPage.value = $event),
							background: "",
							total: __props.totalItems,
							"page-sizes": __props.availablePageSizeOptions,
							layout: "total, prev, pager, next, sizes",
							"data-test-id": "resources-list-pagination",
							onSizeChange: setRowsPerPage
						}, null, 8, [
							"current-page",
							"page-size",
							"total",
							"page-sizes"
						])], 2)], 2)) : createCommentVNode("", true), __props.type === "datatable" ? (openBlock(), createBlock(unref(N8nDatatable_default), {
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
							row: withCtx(({ columns, row }) => [renderSlot(_ctx.$slots, "default", {
								data: row,
								columns
							}, void 0, true)]),
							postdata: withCtx(() => [renderSlot(_ctx.$slots, "postdata", {}, void 0, true)]),
							_: 3
						}, 8, [
							"class",
							"columns",
							"rows",
							"current-page",
							"rows-per-page"
						])) : createCommentVNode("", true)], 2)) : hasAppliedFilters() || filtersModel.value.search !== "" ? (openBlock(), createBlock(unref(N8nText_default), {
							key: 2,
							color: "text-base",
							size: "medium",
							"data-test-id": "resources-list-empty"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(getResourceText)("noResults", "noResults")), 1)]),
							_: 1
						})) : createCommentVNode("", true),
						renderSlot(_ctx.$slots, "postamble", {}, void 0, true)
					]),
					_: 3
				}))], 64))]),
				_: 3
			});
		};
	}
});
const filters = "_filters_5203n_125";
const search = "_search_5203n_156";
const listWrapper = "_listWrapper_5203n_169";
const paginatedListWrapper = "_paginatedListWrapper_5203n_175";
const listItems = "_listItems_5203n_183";
const listPagination = "_listPagination_5203n_187";
const datatable = "_datatable_5203n_214";
var ResourcesListLayout_vue_vue_type_style_index_0_lang_module_default = {
	"filters-row": "_filters-row_5203n_125",
	filters,
	"sort-and-filter": "_sort-and-filter_5203n_143",
	search,
	listWrapper,
	paginatedListWrapper,
	listItems,
	listPagination,
	datatable
};
var ResourcesListLayout_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ResourcesListLayout_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ResourcesListLayout_vue_vue_type_style_index_0_lang_module_default }], ["__scopeId", "data-v-e45b274e"]]);
export { ResourcesListLayout_default as t };
