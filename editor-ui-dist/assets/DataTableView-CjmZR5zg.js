import { C as computed, D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, Sn as toDisplayString, T as createBlock, Z as onMounted, _n as normalizeClass, _t as watch, bt as withCtx, et as openBlock, h as withModifiers, j as createTextVNode, w as createBaseVNode } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { gt as useI18n } from "./_MapCache-pT3vKw8Z.js";
import { Dt as N8nActionBox_default, In as N8nText_default, X as N8nCard_default, it as N8nBadge_default, mt as N8nLink_default, zn as N8nIcon_default } from "./src-BmrdBtCN.js";
import "./en-BYTsM8fR.js";
import "./preload-helper-CR0ecmWK.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { b as useRouter, y as useRoute } from "./truncate-1c7Iwk7N.js";
import "./icon-mgEZlgYz.js";
import "./overlay-DxjKgl5T.js";
import "./empty-RTEMfF4N.js";
import "./useMessage-HzD9OyTZ.js";
import { Dn as useSourceControlStore, En as useProjectsStore, Ni as useUIStore, Tn as useDocumentTitle } from "./useTelemetry-C2EhNQhN.js";
import { t as useToast } from "./useToast-C8xM63lB.js";
import "./sanitize-html-Cfxibw1n.js";
import "./path-browserify-CTmc1OxV.js";
import { Jn as DEFAULT_DATA_TABLE_PAGE_SIZE, Ln as ADD_DATA_TABLE_MODAL_KEY, Vn as DATA_TABLE_DETAILS, ir as PROJECT_DATA_TABLES } from "./constants-C_oOJnqT.js";
import "./merge-DCUiz6nU.js";
import "./dateformat-D7TIhVd4.js";
import { t as useDebounce } from "./useDebounce-DyoINrYS.js";
import "./useExternalHooks-CE2Rdzfk.js";
import "./cloudPlan.store-Dw9c9iy4.js";
import "./folders.store-Cwp_DTVT.js";
import { t as useDataTableStore } from "./dataTable.store-BCpzMJoX.js";
import "./ProjectIcon-BYB-pK6e.js";
import "./EnterpriseEdition.ee-D8leMYEH.js";
import { t as TimeAgo_default } from "./TimeAgo-DCz5bgJ1.js";
import "./orderBy-BTQ4q55E.js";
import "./ProjectSharing-C7uZgDYB.js";
import { t as useInsightsStore } from "./insights.store-DHwsBBEe.js";
import "./insights.constants-DK2g3nnD.js";
import "./insights.utils-yRgER63l.js";
import { n as useProjectPages } from "./readyToRunWorkflowsV2.store-DpzmixIa.js";
import "./PageViewLayout-kj_BBPfv.js";
import { t as ResourcesListLayout_default } from "./ResourcesListLayout-CYMu4eeN.js";
import { t as ProjectHeader_default } from "./ProjectHeader-DEFzma1m.js";
import "./smartDecimal-e9uPsnJa.js";
import { t as InsightsSummary_default } from "./InsightsSummary-DrNhXF20.js";
import { t as DataTableActions_default } from "./DataTableActions-DaxPv0hC.js";
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
						icon: "database",
						size: "xlarge",
						"stroke-width": 1
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
