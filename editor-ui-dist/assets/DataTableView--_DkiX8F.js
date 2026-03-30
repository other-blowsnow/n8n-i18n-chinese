import { o as __toESM } from "./chunk-r2Y0G7H8.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, E as createElementBlock, Ft as ref, N as defineComponent, S as computed, Sn as toDisplayString, T as createCommentVNode, Wt as unref, X as onMounted, _n as normalizeClass, gt as watch, h as withModifiers, j as createVNode, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import { bt as useI18n } from "./_MapCache-14clFqm4.js";
import { $i as N8nIcon_default, Nt as N8nCard_default, Ri as N8nActionBox_default, Ut as N8nBadge_default, Zi as N8nText_default, _t as useRouter, gt as useRoute, lt as N8nLink_default } from "./src-jV4M2fcN.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import { Ln as useToast, ci as useSourceControlStore, ni as ResourceType, r as useUIStore, si as useProjectsStore, zt as useDocumentTitle } from "./users.store-DNsxOyr9.js";
import { Lr as DATA_TABLE_DETAILS, Nr as ADD_DATA_TABLE_MODAL_KEY, Tl as getDebounceTime, Wr as DEFAULT_DATA_TABLE_PAGE_SIZE, _l as DEBOUNCE_TIME, ri as PROJECT_DATA_TABLES } from "./constants-DkMVfvP4.js";
import "./merge-C-A6wl8-.js";
import "./_baseOrderBy-CeJ-xzyO.js";
import "./dateformat-BPRsPKQE.js";
import { n as require_debounce, t as useDebounce } from "./useDebounce-f84ZK-I5.js";
import { t as useDataTableStore } from "./dataTable.store-AFhslfDW.js";
import "./Modal-CnoaU5im.js";
import "./ProjectIcon-DmMdJYtY.js";
import { t as ProjectCardBadge_default } from "./ProjectCardBadge-nI4zqcPe.js";
import "./DropdownMenu-BQHHdEM4.js";
import "./EnterpriseEdition.ee-CJwhL3Nt.js";
import { t as TimeAgo_default } from "./TimeAgo-TqKGjX-p.js";
import "./ProjectSharing-_puLkKHq.js";
import "./folders.store-qDED_OaN.js";
import { t as useInsightsStore } from "./insights.store-BeoSqbhJ.js";
import "./insights.constants-BP-1RQcW.js";
import "./insights.utils-BWIHxHSx.js";
import { r as useProjectPages } from "./readyToRun.store-9nF_UtFq.js";
import { t as ResourcesListLayout_default } from "./ResourcesListLayout-DaYPkWRM.js";
import "./ResourceFiltersDropdown-DGeHqeVJ.js";
import { t as ProjectHeader_default } from "./ProjectHeader-BPzTnDw6.js";
import { n as useDependencies, t as DependencyPill_default } from "./DependencyPill-CHFPqfJm.js";
import { t as InsightsSummary_default } from "./InsightsSummary-CnPBUY03.js";
import { t as DataTableActions_default } from "./DataTableActions-BumReZH-.js";
var _hoisted_1 = { "data-test-id": "data-table-card" };
var DataTableCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
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
		const projectsStore = useProjectsStore();
		const { hasDependencies } = useDependencies();
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
		const dataTableHasDependents = computed(() => hasDependencies(props.dataTable.id));
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1, [createVNode(unref(N8nLink_default), {
				to: dataTableRoute.value,
				class: "data-table-card",
				"data-test-id": "data-table-card-link"
			}, {
				default: withCtx(() => [createVNode(unref(N8nCard_default), { class: normalizeClass(_ctx.$style.card) }, {
					prepend: withCtx(() => [createVNode(unref(N8nIcon_default), {
						"data-test-id": "data-table-card-icon",
						class: normalizeClass(_ctx.$style["card-icon"]),
						icon: "table",
						size: "xlarge",
						"stroke-width": 1.5
					}, null, 8, ["class"])]),
					header: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style["card-header"]) }, [createVNode(unref(N8nText_default), {
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
					footer: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style["card-footer"]) }, [
						createVNode(unref(N8nText_default), {
							size: "small",
							color: "text-light",
							class: normalizeClass([_ctx.$style["info-cell"], _ctx.$style["info-cell--size"]]),
							"data-test-id": "data-table-card-size"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("dataTable.card.size", { interpolate: { size: getDataTableSize.value } })), 1)]),
							_: 1
						}, 8, ["class"]),
						createVNode(unref(N8nText_default), {
							size: "small",
							color: "text-light",
							class: normalizeClass([_ctx.$style["info-cell"], _ctx.$style["info-cell--column-count"]]),
							"data-test-id": "data-table-card-column-count"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("dataTable.card.column.count", { interpolate: { count: props.dataTable.columns.length + 1 } })), 1)]),
							_: 1
						}, 8, ["class"]),
						createVNode(unref(N8nText_default), {
							size: "small",
							color: "text-light",
							class: normalizeClass([_ctx.$style["info-cell"], _ctx.$style["info-cell--updated"]]),
							"data-test-id": "data-table-card-last-updated"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workerList.item.lastUpdated")) + " ", 1), createVNode(TimeAgo_default, { date: String(props.dataTable.updatedAt) }, null, 8, ["date"])]),
							_: 1
						}, 8, ["class"]),
						createVNode(unref(N8nText_default), {
							size: "small",
							color: "text-light",
							class: normalizeClass([_ctx.$style["info-cell"], _ctx.$style["info-cell--created"]]),
							"data-test-id": "data-table-card-created"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflows.item.created")) + " ", 1), createVNode(TimeAgo_default, { date: String(props.dataTable.createdAt) }, null, 8, ["date"])]),
							_: 1
						}, 8, ["class"])
					], 2)]),
					append: withCtx(() => [createBaseVNode("div", {
						class: normalizeClass(_ctx.$style["card-actions"]),
						onClick: _cache[0] || (_cache[0] = withModifiers(() => {}, ["stop"]))
					}, [
						dataTableHasDependents.value ? (openBlock(), createBlock(DependencyPill_default, {
							key: 0,
							"resource-type": "dataTable",
							"resource-id": props.dataTable.id,
							source: "data_table_card",
							"data-test-id": "data-table-card-dependents"
						}, null, 8, ["resource-id"])) : createCommentVNode("", true),
						props.showOwnershipBadge ? (openBlock(), createBlock(ProjectCardBadge_default, {
							key: 1,
							class: normalizeClass(_ctx.$style["card-badge"]),
							resource: __props.dataTable,
							"resource-type": unref(ResourceType).DataTable,
							"resource-type-label": "Data Table",
							"personal-project": unref(projectsStore).personalProject,
							"show-badge-border": false
						}, null, 8, [
							"class",
							"resource",
							"resource-type",
							"personal-project"
						])) : createCommentVNode("", true),
						createVNode(DataTableActions_default, {
							"data-table": props.dataTable,
							"is-read-only": props.readOnly,
							location: "card"
						}, null, 8, ["data-table", "is-read-only"])
					], 2)]),
					_: 1
				}, 8, ["class"])]),
				_: 1
			}, 8, ["to"])]);
		};
	}
});
var DataTableCard_vue_vue_type_style_index_0_lang_module_default = {
	card: "_card_1r8gi_125",
	"card-icon": "_card-icon_1r8gi_133",
	"card-header": "_card-header_1r8gi_140",
	"card-footer": "_card-footer_1r8gi_148",
	"info-cell": "_info-cell_1r8gi_152",
	"card-actions": "_card-actions_1r8gi_157",
	"card-badge": "_card-badge_1r8gi_168",
	"info-cell--created": "_info-cell--created_1r8gi_176",
	"info-cell--column-count": "_info-cell--column-count_1r8gi_177",
	"info-cell--size": "_info-cell--size_1r8gi_178"
};
var DataTableCard_default = /* @__PURE__ */ __plugin_vue_export_helper_default(DataTableCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": DataTableCard_vue_vue_type_style_index_0_lang_module_default }]]);
var import_debounce = /* @__PURE__ */ __toESM(require_debounce(), 1);
var DataTableView_default = /* @__PURE__ */ defineComponent({
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
		const { fetchDependencyCounts } = useDependencies();
		const loading = ref(true);
		const currentPage = ref(1);
		const pageSize = ref(10);
		const SEARCH_DEBOUNCE_TIME = getDebounceTime(DEBOUNCE_TIME.INPUT.SEARCH);
		const PERSIST_KEY_EXCLUSIONS = ["sizeAsc", "sizeDesc"];
		const filters = ref({
			search: "",
			homeProject: ""
		});
		const dataTableResources = computed(() => dataTableStore.dataTables.map((ds) => {
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
		const DATA_TABLE_SORT_MAP = {
			lastUpdated: "updatedAt:desc",
			lastCreated: "createdAt:desc",
			nameAsc: "name:asc",
			nameDesc: "name:desc",
			sizeAsc: "size:asc",
			sizeDesc: "size:desc"
		};
		const currentSort = ref("updatedAt:desc");
		const delayedLoading = (0, import_debounce.default)(() => {
			loading.value = true;
		}, 300);
		const fetchDataTables = async () => {
			const projectIdFilter = projectPages.isOverviewSubPage ? "" : projectsStore.currentProjectId;
			try {
				delayedLoading();
				await dataTableStore.fetchDataTables(projectIdFilter ?? "", currentPage.value, pageSize.value, {
					name: filters.value.search === "" ? void 0 : filters.value.search,
					projectId: filters.value.homeProject === "" ? void 0 : filters.value.homeProject
				}, currentSort.value);
			} catch (error) {
				toast.showError(error, "Error loading data tables");
			} finally {
				delayedLoading.cancel();
				loading.value = false;
				fetchDependencyCounts(dataTableStore.dataTables.map((dt) => dt.id), "dataTable");
			}
		};
		const onPaginationUpdate = async (payload) => {
			if (payload.page) currentPage.value = payload.page;
			if (payload.pageSize) pageSize.value = payload.pageSize;
			if (payload.sort) currentSort.value = DATA_TABLE_SORT_MAP[payload.sort] ?? "updatedAt:desc";
			if (!loading.value) await callDebounced(fetchDataTables, {
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
		const onSearchUpdated = async (search) => {
			currentPage.value = 1;
			filters.value.search = search;
			if (search) await callDebounced(fetchDataTables, {
				debounceTime: SEARCH_DEBOUNCE_TIME,
				trailing: true
			});
			else await fetchDataTables();
		};
		onMounted(() => {
			documentTitle.set(i18n.baseText("dataTable.dataTables"));
		});
		watch(() => route.params.new, () => {
			if (route.params.new === "new") uiStore.openModal(ADD_DATA_TABLE_MODAL_KEY);
			else uiStore.closeModal(ADD_DATA_TABLE_MODAL_KEY);
		}, { immediate: true });
		return (_ctx, _cache) => {
			return openBlock(), createBlock(ResourcesListLayout_default, {
				ref: "layout",
				"resource-key": "dataTable",
				type: "list-paginated",
				resources: dataTableResources.value,
				initialize: fetchDataTables,
				"type-props": { itemSize: 80 },
				loading: false,
				disabled: false,
				"total-items": totalCount.value,
				"resources-refreshing": loading.value,
				"sort-options": Object.keys(DATA_TABLE_SORT_MAP),
				"dont-perform-sorting-and-filtering": true,
				"ui-config": {
					searchEnabled: true,
					showFiltersDropdown: false,
					sortEnabled: true
				},
				"tab-key": "dataTable",
				"persist-key-exclusions": PERSIST_KEY_EXCLUSIONS,
				"onUpdate:search": onSearchUpdated,
				"onUpdate:paginationAndSort": onPaginationUpdate
			}, {
				header: withCtx(() => [createVNode(ProjectHeader_default, { "main-button": "dataTable" }, {
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
				}, 8, [
					"heading",
					"description",
					"button-text",
					"button-disabled",
					"button-icon"
				])]),
				item: withCtx(({ item: data }) => [createVNode(DataTableCard_default, {
					class: "mb-2xs",
					"data-table": data,
					"show-ownership-badge": unref(projectPages).isOverviewSubPage,
					"read-only": readOnlyEnv.value
				}, null, 8, [
					"data-table",
					"show-ownership-badge",
					"read-only"
				])]),
				_: 1
			}, 8, [
				"resources",
				"total-items",
				"resources-refreshing",
				"sort-options"
			]);
		};
	}
});
export { DataTableView_default as default };
