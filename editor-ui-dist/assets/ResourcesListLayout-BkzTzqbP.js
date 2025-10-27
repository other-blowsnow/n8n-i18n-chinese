import { C as computed, D as createElementBlock, E as createCommentVNode, G as nextTick, Gt as unref, I as guardReactiveProps, It as ref, J as onBeforeUnmount, M as createVNode, P as defineComponent, Sn as toDisplayString, T as createBlock, Z as onMounted, _ as Fragment, _n as normalizeClass, _t as watch, at as renderSlot, bt as withCtx, et as openBlock, it as renderList, j as createTextVNode, p as vShow, pt as useSlots, q as onBeforeMount, vn as normalizeProps, w as createBaseVNode, xt as withDirectives } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { gt as useI18n, j as useLocalStorage } from "./_MapCache-CMopfp37.js";
import { C as N8nPopover_default, Et as ElPagination, Fn as N8nIcon_default, G as N8nOption_default, H as N8nDatatable_default, Mn as N8nText_default, Nn as N8nButton_default, P as N8nInfoTip_default, St as N8nActionBox_default, W as N8nSelect_default, Y as N8nInputLabel_default, _t as N8nInput_default, et as N8nLoading_default, it as N8nBadge_default, lt as N8nLink_default, y as N8nRecycleScroller_default } from "./src-B9lyFNPE.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { b as useRouter, y as useRoute } from "./truncate-D09te2fm.js";
import { An as useProjectsStore, ar as isBaseTextKey, hr as isSharedResource, ir as useUsersStore, pr as isResourceSortableByDate, t as useTelemetry } from "./useTelemetry-BnWkdL5v.js";
import { $n as LOCAL_STORAGE_WORKFLOW_LIST_PREFERENCES_KEY, on as EnterpriseEditionFeature } from "./constants-7lEZpYki.js";
import { t as useDebounce } from "./useDebounce-BSVJx8HC.js";
import { t as EnterpriseEdition_ee_default } from "./EnterpriseEdition.ee-Ckt_U0N3.js";
import { t as ProjectSharing_default } from "./ProjectSharing-BTP2G4lm.js";
import { t as useProjectPages } from "./useProjectPages-CRg5DyvT.js";
import { t as PageViewLayout_default } from "./PageViewLayout-CKhCcgRz.js";
var PageViewLayoutList_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "PageViewLayoutList",
	props: { overflow: { type: Boolean } },
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass({
				[_ctx.$style.wrapper]: true,
				[_ctx.$style.overflow]: _ctx.overflow
			}) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.list) }, [_ctx.$slots.header ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.header)
			}, [renderSlot(_ctx.$slots, "header")], 2)) : createCommentVNode("", true), createBaseVNode("div", { class: normalizeClass(_ctx.$style.body) }, [renderSlot(_ctx.$slots, "default")], 2)], 2)], 2);
		};
	}
});
var PageViewLayoutList_vue_vue_type_style_index_0_lang_module_default = {
	wrapper: "_wrapper_hn9dc_123",
	overflow: "_overflow_hn9dc_128",
	list: "_list_hn9dc_128",
	body: "_body_hn9dc_128"
};
var PageViewLayoutList_default = /* @__PURE__ */ __plugin_vue_export_helper_default(PageViewLayoutList_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": PageViewLayoutList_vue_vue_type_style_index_0_lang_module_default }]]);
var ResourceFiltersDropdown_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ResourceFiltersDropdown",
	props: {
		modelValue: { default: () => ({}) },
		keys: { default: () => [] },
		shareable: {
			type: Boolean,
			default: true
		},
		reset: {
			type: Function,
			default: () => {}
		},
		justIcon: {
			type: Boolean,
			default: false
		}
	},
	emits: ["update:modelValue", "update:filtersLength"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const projectsStore = useProjectsStore();
		const i18n = useI18n();
		const selectedProject = computed({
			get: () => {
				return projectsStore.availableProjects.find((project) => project.id === props.modelValue.homeProject) ?? null;
			},
			set: (value) => setKeyValue("homeProject", value?.id ?? "")
		});
		const filtersLength = computed(() => {
			let length = 0;
			props.keys.forEach((key) => {
				if (key === "search") return;
				const value = props.modelValue[key];
				if (value === true) length += 1;
				if (Array.isArray(value) && value.length) length += 1;
				if (typeof value === "string" && value !== "") length += 1;
			});
			return length;
		});
		const hasFilters = computed(() => filtersLength.value > 0);
		const setKeyValue = (key, value) => {
			emit("update:modelValue", {
				...props.modelValue,
				[key]: value
			});
		};
		const resetFilters = () => {
			if (props.reset) props.reset();
			else {
				const filters$1 = { ...props.modelValue };
				props.keys.forEach((key) => {
					filters$1[key] = Array.isArray(props.modelValue[key]) ? [] : "";
				});
				emit("update:modelValue", filters$1);
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
			return openBlock(), createBlock(unref(N8nPopover_default), {
				trigger: "click",
				width: "304",
				size: "large"
			}, {
				reference: withCtx(() => [createVNode(unref(N8nButton_default), {
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
					default: withCtx(() => [filtersLength.value > 0 ? (openBlock(), createBlock(unref(N8nBadge_default), {
						key: 0,
						class: normalizeClass(_ctx.$style["filter-button-count"]),
						"data-test-id": "resources-list-filters-count",
						theme: "primary"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(filtersLength.value), 1)]),
						_: 1
					}, 8, ["class"])) : createCommentVNode("", true), !_ctx.justIcon ? (openBlock(), createElementBlock("span", {
						key: 1,
						class: normalizeClass(_ctx.$style["filter-button-text"])
					}, toDisplayString(unref(i18n).baseText("forms.resourceFiltersDropdown.filters")), 3)) : createCommentVNode("", true)]),
					_: 1
				}, 8, ["active", "class"])]),
				default: withCtx(() => [createBaseVNode("div", {
					class: normalizeClass(_ctx.$style["filters-dropdown"]),
					"data-test-id": "resources-list-filters-dropdown"
				}, [
					renderSlot(_ctx.$slots, "default", {
						filters: _ctx.modelValue,
						setKeyValue
					}),
					_ctx.shareable && unref(projectsStore).isProjectHome ? (openBlock(), createBlock(EnterpriseEdition_ee_default, {
						key: 0,
						features: [unref(EnterpriseEditionFeature).Sharing]
					}, {
						default: withCtx(() => [createVNode(unref(N8nInputLabel_default), {
							label: unref(i18n).baseText("forms.resourceFiltersDropdown.owner"),
							bold: false,
							size: "small",
							color: "text-base",
							class: "mb-3xs"
						}, null, 8, ["label"]), createVNode(ProjectSharing_default, {
							modelValue: selectedProject.value,
							"onUpdate:modelValue": [_cache[0] || (_cache[0] = ($event) => selectedProject.value = $event), _cache[1] || (_cache[1] = ($event) => setKeyValue("homeProject", $event.id))],
							projects: unref(projectsStore).availableProjects,
							placeholder: unref(i18n).baseText("forms.resourceFiltersDropdown.owner.placeholder"),
							"empty-options-text": unref(i18n).baseText("projects.sharing.noMatchingProjects")
						}, null, 8, [
							"modelValue",
							"projects",
							"placeholder",
							"empty-options-text"
						])]),
						_: 1
					}, 8, ["features"])) : createCommentVNode("", true),
					hasFilters.value ? (openBlock(), createElementBlock("div", {
						key: 1,
						class: normalizeClass([_ctx.$style["filters-dropdown-footer"], "mt-s"])
					}, [createVNode(unref(N8nLink_default), { onClick: resetFilters }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("forms.resourceFiltersDropdown.reset")), 1)]),
						_: 1
					})], 2)) : createCommentVNode("", true)
				], 2)]),
				_: 3
			});
		};
	}
});
var ResourceFiltersDropdown_vue_vue_type_style_index_0_lang_module_default = {
	"filter-button": "_filter-button_1mymx_123",
	"no-label": "_no-label_1mymx_127",
	"filter-button-count": "_filter-button-count_1mymx_133",
	"filter-button-text": "_filter-button-text_1mymx_142",
	"filters-dropdown": "_filters-dropdown_1mymx_150",
	"filters-dropdown-footer": "_filters-dropdown-footer_1mymx_154"
};
var ResourceFiltersDropdown_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ResourceFiltersDropdown_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ResourceFiltersDropdown_vue_vue_type_style_index_0_lang_module_default }]]);
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
				default: withCtx(() => [_ctx.loading ? (openBlock(), createElementBlock("div", _hoisted_1, [createVNode(unref(N8nLoading_default), {
					rows: 25,
					"shrink-last": false
				})])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [showEmptyState.value ? (openBlock(), createElementBlock("div", _hoisted_2, [renderSlot(_ctx.$slots, "empty", {}, () => [createVNode(unref(N8nActionBox_default), {
					"data-test-id": "empty-resources-list",
					emoji: "👋",
					heading: unref(getResourceText)(unref(usersStore).currentUser?.firstName ? "empty.heading" : "empty.heading.userNotSetup", unref(usersStore).currentUser?.firstName ? "empty.heading" : "empty.heading.userNotSetup", { name: unref(usersStore).currentUser?.firstName ?? "" }),
					description: unref(getResourceText)("empty.description"),
					"button-text": unref(getResourceText)("empty.button"),
					"button-type": "secondary",
					"button-disabled": _ctx.disabled,
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
								default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.sortOptions, (sortOption) => {
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
								shareable: _ctx.shareable,
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
						_ctx.resourcesRefreshing ? (openBlock(), createElementBlock("div", _hoisted_4, [createVNode(unref(N8nLoading_default), {
							rows: rowsPerPage.value,
							"shrink-last": false
						}, null, 8, ["rows"])])) : filteredAndSortedResources.value.length > 0 ? (openBlock(), createElementBlock("div", {
							key: 1,
							ref_key: "listWrapperRef",
							ref: listWrapperRef,
							"data-test-id": "resources-list-wrapper",
							class: normalizeClass(_ctx.$style.listWrapper)
						}, [_ctx.type === "list-full" ? (openBlock(), createBlock(unref(N8nRecycleScroller_default), {
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
						}, 8, ["items", "item-size"])) : _ctx.type === "list-paginated" ? (openBlock(), createElementBlock("div", {
							key: 1,
							class: normalizeClass(_ctx.$style.paginatedListWrapper),
							"data-test-id": "paginated-list"
						}, [createBaseVNode("div", {
							ref_key: "listItemsRef",
							ref: listItemsRef,
							class: normalizeClass(_ctx.$style.listItems)
						}, [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.resources, (item, index) => {
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
							total: _ctx.totalItems,
							"page-sizes": _ctx.availablePageSizeOptions,
							layout: "total, prev, pager, next, sizes",
							"data-test-id": "resources-list-pagination",
							onSizeChange: setRowsPerPage
						}, null, 8, [
							"current-page",
							"page-size",
							"total",
							"page-sizes"
						])], 2)], 2)) : createCommentVNode("", true), _ctx.type === "datatable" ? (openBlock(), createBlock(unref(N8nDatatable_default), {
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
const filters = "_filters_lkzqj_123";
const search = "_search_lkzqj_154";
const listWrapper = "_listWrapper_lkzqj_167";
const paginatedListWrapper = "_paginatedListWrapper_lkzqj_173";
const listItems = "_listItems_lkzqj_181";
const listPagination = "_listPagination_lkzqj_185";
const datatable = "_datatable_lkzqj_212";
var ResourcesListLayout_vue_vue_type_style_index_0_lang_module_default = {
	"filters-row": "_filters-row_lkzqj_123",
	filters,
	"sort-and-filter": "_sort-and-filter_lkzqj_141",
	search,
	listWrapper,
	paginatedListWrapper,
	listItems,
	listPagination,
	datatable
};
var ResourcesListLayout_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ResourcesListLayout_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ResourcesListLayout_vue_vue_type_style_index_0_lang_module_default }], ["__scopeId", "data-v-802a5a56"]]);
export { ResourcesListLayout_default as t };
