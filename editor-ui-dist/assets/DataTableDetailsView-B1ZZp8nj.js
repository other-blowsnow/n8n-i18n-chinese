import { $ as openBlock, A as createTextVNode, C as createBaseVNode, E as createElementBlock, Ft as ref, N as defineComponent, S as computed, Sn as toDisplayString, T as createCommentVNode, W as nextTick, Wt as unref, X as onMounted, _n as normalizeClass, gt as watch, j as createVNode, pt as useTemplateRef, q as onBeforeUnmount, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { at as useI18n } from "./core-rB_3sA85.js";
import { $i as N8nIcon_default, Mi as Input_default, Mt as N8nLoading_default, Oi as N8nTooltip_default, Qi as N8nButton_default, Zi as N8nText_default, h as N8nInlineTextEdit_default, k as N8nSpinner_default, ut as useRouter, v as N8nBreadcrumbs_default } from "./src-C8P6E--m.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { Fn as useToast, hr as telemetry, si as useSourceControlStore, zt as useDocumentTitle } from "./users.store-FKGPJ2KC.js";
import { Ir as PROJECT_DATA_TABLES, Or as DATA_TABLE_VIEW, al as LOADING_ANIMATION_MIN_DURATION } from "./constants-CtrH8tKg.js";
import { t as useDebounce } from "./useDebounce-BGKGzej6.js";
import { t as useDataTableStore } from "./dataTable.store-SRdXpziG.js";
import { t as sourceControlEventBus } from "./sourceControl.eventBus-D94J3zhd.js";
import { t as ProjectBreadcrumb_default } from "./ProjectBreadcrumb-D2-wszf9.js";
import { n as useDependencies, t as DependencyPill_default } from "./DependencyPill-B2lnIIIt.js";
import { n as AddColumnButton_default, t as DataTableTable_default } from "./DataTableTable-hkcwKW7I.js";
import { t as DataTableActions_default } from "./DataTableActions-x6cA8bzK.js";
//#region src/features/core/dataTable/components/DataTableBreadcrumbs.vue?vue&type=script&setup=true&lang.ts
var BREADCRUMBS_SEPARATOR = "/";
var DataTableBreadcrumbs_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "DataTableBreadcrumbs",
	props: {
		dataTable: {},
		readOnly: { type: Boolean }
	},
	emits: ["imported"],
	setup(__props) {
		const props = __props;
		const renameInput = useTemplateRef("renameInput");
		const dataTableStore = useDataTableStore();
		const i18n = useI18n();
		const router = useRouter();
		const toast = useToast();
		const editableName = ref(props.dataTable.name);
		const isRenameDisabled = computed(() => !dataTableStore.projectPermissions.dataTable.update || props.readOnly);
		const project = computed(() => {
			return props.dataTable.project ?? null;
		});
		const breadcrumbs = computed(() => {
			if (!project.value) return [];
			return [{
				id: "datatables",
				label: i18n.baseText("dataTable.dataTables"),
				href: `/projects/${project.value.id}/datatables`
			}];
		});
		const onItemClicked = async (item) => {
			if (item.href) await router.push(item.href);
		};
		const onDelete = async () => {
			await router.push({
				name: PROJECT_DATA_TABLES,
				params: { projectId: props.dataTable.projectId }
			});
		};
		const onRename = async () => {
			await nextTick();
			if (renameInput.value && typeof renameInput.value.forceFocus === "function") renameInput.value.forceFocus();
		};
		const onNameSubmit = async (name) => {
			try {
				if (!await dataTableStore.updateDataTable(props.dataTable.id, name, props.dataTable.projectId)) throw new Error(i18n.baseText("generic.unknownError"));
				editableName.value = name;
				telemetry.track("User renamed data table", {
					data_table_id: props.dataTable.id,
					data_table_project_id: props.dataTable.projectId
				});
			} catch (error) {
				editableName.value = props.dataTable.name;
				toast.showError(error, i18n.baseText("dataTable.rename.error"));
			}
		};
		watch(() => props.dataTable.name, (newName) => {
			editableName.value = newName;
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style["data-table-breadcrumbs"]),
				"data-test-id": "data-table-breadcrumbs"
			}, [createVNode(unref(N8nBreadcrumbs_default), {
				items: breadcrumbs.value,
				separator: BREADCRUMBS_SEPARATOR,
				"highlight-last-item": false,
				onItemSelected: onItemClicked
			}, {
				prepend: withCtx(() => [project.value ? (openBlock(), createBlock(ProjectBreadcrumb_default, {
					key: 0,
					"current-project": project.value
				}, null, 8, ["current-project"])) : createCommentVNode("", true)]),
				append: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.separator) }, toDisplayString(BREADCRUMBS_SEPARATOR), 2), createVNode(unref(N8nInlineTextEdit_default), {
					ref_key: "renameInput",
					ref: renameInput,
					modelValue: editableName.value,
					"onUpdate:modelValue": [_cache[0] || (_cache[0] = ($event) => editableName.value = $event), onNameSubmit],
					"data-test-id": "data-table-header-name-input",
					placeholder: unref(i18n).baseText("dataTable.add.input.name.label"),
					class: normalizeClass(_ctx.$style["breadcrumb-current"]),
					"read-only": __props.readOnly,
					disabled: isRenameDisabled.value
				}, null, 8, [
					"modelValue",
					"placeholder",
					"class",
					"read-only",
					"disabled"
				])]),
				_: 1
			}, 8, ["items"]), createBaseVNode("div", { class: normalizeClass(_ctx.$style["data-table-actions"]) }, [createVNode(DataTableActions_default, {
				"data-table": props.dataTable,
				"is-read-only": __props.readOnly,
				location: "breadcrumbs",
				onRename,
				onOnDeleted: onDelete,
				onImported: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("imported"))
			}, null, 8, ["data-table", "is-read-only"])], 2)], 2);
		};
	}
});
//#endregion
//#region src/features/core/dataTable/components/DataTableBreadcrumbs.vue?vue&type=style&index=0&lang.module.scss
var separator = "_separator_23od7_135";
var DataTableBreadcrumbs_vue_vue_type_style_index_0_lang_module_default = {
	"data-table-breadcrumbs": "_data-table-breadcrumbs_23od7_125",
	"data-table-actions": "_data-table-actions_23od7_130",
	separator,
	"breadcrumb-current": "_breadcrumb-current_23od7_141"
};
var DataTableBreadcrumbs_default = /* @__PURE__ */ _plugin_vue_export_helper_default(DataTableBreadcrumbs_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": DataTableBreadcrumbs_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/core/dataTable/DataTableDetailsView.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = {
	key: 0,
	"data-test-id": "data-table-details-loading"
};
var _hoisted_2 = { key: 1 };
var DataTableDetailsView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "DataTableDetailsView",
	props: {
		id: {},
		projectId: {}
	},
	setup(__props) {
		const props = __props;
		const toast = useToast();
		const i18n = useI18n();
		const router = useRouter();
		const documentTitle = useDocumentTitle();
		const dataTableStore = useDataTableStore();
		const sourceControlStore = useSourceControlStore();
		const { fetchDependencyCounts, hasDependencies } = useDependencies();
		const readOnlyEnv = computed(() => sourceControlStore.preferences.branchReadOnly);
		const dataTableHasDependents = computed(() => hasDependencies(props.id));
		const loading = ref(false);
		const saving = ref(false);
		const dataTable = ref(null);
		const dataTableTableRef = ref();
		const searchQuery = ref("");
		const { debounce } = useDebounce();
		const showErrorAndGoBackToList = async (error) => {
			if (!(error instanceof Error)) error = new Error(String(i18n.baseText("dataTable.getDetails.error")));
			toast.showError(error, i18n.baseText("dataTable.getDetails.error"));
			await router.push({
				name: DATA_TABLE_VIEW,
				params: { projectId: props.projectId }
			});
		};
		const initialize = async () => {
			loading.value = true;
			try {
				const response = await dataTableStore.fetchOrFindDataTable(props.id, props.projectId);
				if (response) {
					dataTable.value = response;
					documentTitle.set(`${i18n.baseText("dataTable.dataTables")} > ${response.name}`);
				} else await showErrorAndGoBackToList(new Error(i18n.baseText("dataTable.notFound")));
			} catch (error) {
				await showErrorAndGoBackToList(error);
			} finally {
				loading.value = false;
				fetchDependencyCounts([props.id], "dataTable");
			}
		};
		const debouncedSetSaving = debounce((value) => {
			saving.value = value;
		}, {
			debounceTime: 50,
			trailing: true
		});
		const debouncedHideSaving = debounce(() => {
			saving.value = false;
		}, {
			debounceTime: LOADING_ANIMATION_MIN_DURATION,
			trailing: true
		});
		const onToggleSave = (value) => {
			if (value) debouncedSetSaving(true);
			else debouncedHideSaving();
		};
		const onAddColumn = async (column) => {
			if (!dataTableTableRef.value) return {
				success: false,
				errorMessage: i18n.baseText("dataTable.error.tableNotInitialized")
			};
			return await dataTableTableRef.value.addColumn(column);
		};
		const onCsvImported = async () => {
			await dataTableTableRef.value?.fetchDataTableRows();
		};
		const handleSourceControlPull = async () => {
			loading.value = true;
			try {
				const response = await dataTableStore.fetchDataTableDetails(props.id, props.projectId);
				if (response) {
					dataTable.value = response;
					documentTitle.set(`${i18n.baseText("dataTable.dataTables")} > ${response.name}`);
				} else await showErrorAndGoBackToList(new Error(i18n.baseText("dataTable.notFound")));
			} catch (error) {
				toast.showError(error, i18n.baseText("dataTable.getDetails.error"));
			} finally {
				loading.value = false;
			}
		};
		onMounted(async () => {
			documentTitle.set(i18n.baseText("dataTable.dataTables"));
			await initialize();
			sourceControlEventBus.on("pull", handleSourceControlPull);
		});
		onBeforeUnmount(() => {
			sourceControlEventBus.off("pull", handleSourceControlPull);
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style["data-table-details-view"]),
				"data-test-id": "data-table-details-view"
			}, [loading.value ? (openBlock(), createElementBlock("div", _hoisted_1, [createVNode(unref(N8nLoading_default), {
				variant: "h1",
				loading: true,
				rows: 1,
				"shrink-last": false,
				class: normalizeClass(_ctx.$style["header-loading"])
			}, null, 8, ["class"]), createVNode(unref(N8nLoading_default), {
				loading: true,
				variant: "h1",
				rows: 10,
				"shrink-last": false
			})])) : dataTable.value ? (openBlock(), createElementBlock("div", _hoisted_2, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [
				createVNode(DataTableBreadcrumbs_default, {
					"data-table": dataTable.value,
					"read-only": readOnlyEnv.value,
					onImported: onCsvImported
				}, null, 8, ["data-table", "read-only"]),
				saving.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.saving)
				}, [createVNode(unref(N8nSpinner_default)), createVNode(unref(N8nText_default), null, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.saving")) + "...", 1)]),
					_: 1
				})], 2)) : createCommentVNode("", true),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.actions) }, [
					dataTableHasDependents.value ? (openBlock(), createBlock(DependencyPill_default, {
						key: 0,
						"resource-type": "dataTable",
						"resource-id": __props.id,
						source: "data_table_card",
						"data-test-id": "data-table-details-dependents"
					}, null, 8, ["resource-id"])) : createCommentVNode("", true),
					createVNode(unref(Input_default), {
						modelValue: searchQuery.value,
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchQuery.value = $event),
						"data-test-id": "data-table-search-input",
						size: "small",
						class: normalizeClass(_ctx.$style.search),
						placeholder: unref(i18n).baseText("generic.search")
					}, {
						prefix: withCtx(() => [createVNode(unref(N8nIcon_default), { icon: "search" })]),
						suffix: withCtx(() => [createVNode(unref(N8nTooltip_default), { placement: "bottom" }, {
							content: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("dataTable.search.dateSearchInfo")), 1)]),
							default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.infoIcon) }, [createVNode(unref(N8nIcon_default), {
								icon: "info",
								size: "small"
							})], 2)]),
							_: 1
						})]),
						_: 1
					}, 8, [
						"modelValue",
						"class",
						"placeholder"
					]),
					createVNode(unref(N8nButton_default), {
						"data-test-id": "data-table-header-add-row-button",
						disabled: readOnlyEnv.value,
						onClick: dataTableTableRef.value?.addRow
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("dataTable.addRow.label")), 1)]),
						_: 1
					}, 8, ["disabled", "onClick"]),
					createVNode(AddColumnButton_default, {
						"use-text-trigger": true,
						"popover-id": "ds-details-add-column-popover",
						params: { onAddColumn },
						disabled: readOnlyEnv.value
					}, null, 8, ["params", "disabled"])
				], 2)
			], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createVNode(DataTableTable_default, {
				ref_key: "dataTableTableRef",
				ref: dataTableTableRef,
				"data-table": dataTable.value,
				search: searchQuery.value,
				"read-only": readOnlyEnv.value,
				onToggleSave
			}, null, 8, [
				"data-table",
				"search",
				"read-only"
			])], 2)])) : createCommentVNode("", true)], 2);
		};
	}
});
//#endregion
//#region src/features/core/dataTable/DataTableDetailsView.vue?vue&type=style&index=0&lang.module.scss
var header = "_header_7nizi_134";
var saving = "_saving_7nizi_149";
var actions = "_actions_7nizi_156";
var search = "_search_7nizi_163";
var infoIcon = "_infoIcon_7nizi_167";
var DataTableDetailsView_vue_vue_type_style_index_0_lang_module_default = {
	"data-table-details-view": "_data-table-details-view_7nizi_125",
	"header-loading": "_header-loading_7nizi_134",
	header,
	saving,
	actions,
	search,
	infoIcon
};
var DataTableDetailsView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(DataTableDetailsView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": DataTableDetailsView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { DataTableDetailsView_default as default };
