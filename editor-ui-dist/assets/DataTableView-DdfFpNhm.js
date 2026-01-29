import { C as computed, Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, T as createBlock, Z as onMounted, _t as watch, bt as withCtx, et as openBlock, h as withModifiers, j as createTextVNode, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { _t as useI18n } from "./_MapCache-CnjjVDdK.js";
import { At as N8nActionBox_default, On as N8nText_default, at as N8nCard_default, ht as N8nBadge_default, jn as N8nIcon_default, xt as N8nLink_default } from "./src-BCXs9XoZ.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-fRq25RGE.js";
import { v as useRoute, y as useRouter } from "./truncate-CcdvD1u8.js";
import { an as useDocumentTitle, br as useToast, hr as useSourceControlStore, r as useUIStore, zt as useProjectsStore } from "./users.store-y45WFh5C.js";
import "./sanitize-html-DeDnsMgc.js";
import "./empty-nq5-pHAR.js";
import { Fr as DEFAULT_DATA_TABLE_PAGE_SIZE, Or as DATA_TABLE_DETAILS, Wr as PROJECT_DATA_TABLES, wr as ADD_DATA_TABLE_MODAL_KEY } from "./constants-C-KlVUsX.js";
import "./merge-C0NmQbVH.js";
import "./_baseOrderBy-BaV_HQRG.js";
import "./dateformat-BeHi9sF4.js";
import { t as useDebounce } from "./useDebounce-CIIdLx7d.js";
import { t as useDataTableStore } from "./dataTable.store-shLp17ty.js";
import "./folders.store-Ck_QTlrs.js";
import "./ProjectIcon-C24mOxBj.js";
import "./EnterpriseEdition.ee-U4XvbOZt.js";
import { t as TimeAgo_default } from "./TimeAgo-UGGE0PF_.js";
import "./orderBy-Dqo_hYx5.js";
import "./ProjectSharing-BDqTfVvQ.js";
import { t as useInsightsStore } from "./insights.store-MLLGbwN2.js";
import "./insights.constants-98xWnZQu.js";
import "./insights.utils-R9wuXLqO.js";
import { n as useProjectPages } from "./readyToRun.store-DgGl3h07.js";
import { t as ResourcesListLayout_default } from "./ResourcesListLayout-C5wKgHFP.js";
import "./ResourceFiltersDropdown-Dq4CHPAk.js";
import { t as ProjectHeader_default } from "./ProjectHeader-CxBo0wd2.js";
import { t as InsightsSummary_default } from "./InsightsSummary-BqGXYqZh.js";
import { t as DataTableActions_default } from "./DataTableActions-DFvCCh6r.js";
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
});
var DataTableCard_vue_vue_type_style_index_0_lang_module_default = {
	card: "_card_147lk_123",
	"card-icon": "_card-icon_147lk_131",
	"card-header": "_card-header_147lk_138",
	"card-footer": "_card-footer_147lk_146",
	"info-cell": "_info-cell_147lk_150",
	"info-cell--created": "_info-cell--created_147lk_159",
	"info-cell--column-count": "_info-cell--column-count_147lk_160",
	"info-cell--size": "_info-cell--size_147lk_161"
};
var DataTableCard_default = /* @__PURE__ */ __plugin_vue_export_helper_default(DataTableCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": DataTableCard_vue_vue_type_style_index_0_lang_module_default }]]);
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
		const loading = ref(true);
		const currentPage = ref(1);
		const pageSize = ref(10);
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
			if (route.params.new === "new") uiStore.openModal(ADD_DATA_TABLE_MODAL_KEY);
			else uiStore.closeModal(ADD_DATA_TABLE_MODAL_KEY);
		}, { immediate: true });
		return (_ctx, _cache) => {
			return openBlock(), createBlock(ResourcesListLayout_default, {
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
				"loading",
				"total-items"
			]);
		};
	}
});
export { DataTableView_default as default };
