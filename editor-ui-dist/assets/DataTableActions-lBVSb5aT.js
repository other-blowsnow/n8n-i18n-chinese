import { $ as openBlock, C as createBaseVNode, E as createElementBlock, Ft as ref, N as defineComponent, S as computed, Wt as unref, _n as normalizeClass, j as createVNode, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import { bt as useI18n } from "./_MapCache-DL4VDRVM.js";
import { Qi as N8nButton_default, Rt as N8nActionToggle_default, yt as Checkbox_default } from "./src-CO68IM2H.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import { Tr as useToast, en as useTelemetry, jr as useMessage, r as useUIStore } from "./users.store-Bj_XyNBb.js";
import { Ir as DATA_TABLE_CARD_ACTIONS, Kr as DOWNLOAD_DATA_TABLE_MODAL_KEY, Ps as MODAL_CONFIRM } from "./constants-CasV1Nn-.js";
import { t as useDataTableStore } from "./dataTable.store-Bww8UgM5.js";
import { t as Modal_default } from "./Modal-D6vbVEqd.js";
var DownloadDataTableModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "DownloadDataTableModal",
	props: {
		modalName: {},
		dataTableName: {}
	},
	emits: ["confirm", "close"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const includeSystemColumns = ref(false);
		const onConfirm = () => {
			emit("confirm", includeSystemColumns.value);
		};
		return (_ctx, _cache) => {
			return openBlock(), createBlock(Modal_default, {
				name: props.modalName,
				title: unref(i18n).baseText("dataTable.download.modal.title"),
				center: true,
				width: "460px",
				"event-bus": void 0,
				onEnter: onConfirm
			}, {
				content: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createVNode(unref(Checkbox_default), {
					modelValue: includeSystemColumns.value,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => includeSystemColumns.value = $event),
					label: unref(i18n).baseText("dataTable.download.modal.includeSystemColumns"),
					"data-test-id": "download-include-system-columns"
				}, null, 8, ["modelValue", "label"])], 2)]),
				footer: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.footer) }, [createVNode(unref(N8nButton_default), {
					type: "secondary",
					size: "large",
					label: unref(i18n).baseText("dataTable.download.modal.cancel"),
					"data-test-id": "download-modal-cancel",
					onClick: _cache[1] || (_cache[1] = () => _ctx.$emit("close"))
				}, null, 8, ["label"]), createVNode(unref(N8nButton_default), {
					size: "large",
					label: unref(i18n).baseText("dataTable.download.modal.confirm"),
					"data-test-id": "download-modal-confirm",
					onClick: onConfirm
				}, null, 8, ["label"])], 2)]),
				_: 1
			}, 8, ["name", "title"]);
		};
	}
});
var DownloadDataTableModal_vue_vue_type_style_index_0_lang_module_default = {
	content: "_content_10b6w_125",
	footer: "_footer_10b6w_129"
};
var DownloadDataTableModal_default = /* @__PURE__ */ __plugin_vue_export_helper_default(DownloadDataTableModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": DownloadDataTableModal_vue_vue_type_style_index_0_lang_module_default }]]);
var DataTableActions_default = /* @__PURE__ */ defineComponent({
	__name: "DataTableActions",
	props: {
		dataTable: {},
		isReadOnly: {
			type: Boolean,
			default: false
		},
		location: {}
	},
	emits: ["rename", "onDeleted"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const dataTableStore = useDataTableStore();
		const uiStore = useUIStore();
		const i18n = useI18n();
		const message = useMessage();
		const toast = useToast();
		const telemetry = useTelemetry();
		const downloadModalKey = computed(() => `${DOWNLOAD_DATA_TABLE_MODAL_KEY}-${props.dataTable.id}`);
		const actions = computed(() => {
			const availableActions = [{
				label: i18n.baseText("dataTable.download.csv"),
				value: DATA_TABLE_CARD_ACTIONS.DOWNLOAD_CSV,
				disabled: false
			}, {
				label: i18n.baseText("generic.delete"),
				value: DATA_TABLE_CARD_ACTIONS.DELETE,
				disabled: !dataTableStore.projectPermissions.dataTable.delete || props.isReadOnly
			}];
			if (props.location === "breadcrumbs") availableActions.unshift({
				label: i18n.baseText("generic.rename"),
				value: DATA_TABLE_CARD_ACTIONS.RENAME,
				disabled: !dataTableStore.projectPermissions.dataTable.update || props.isReadOnly
			});
			return availableActions;
		});
		const onAction = async (action) => {
			switch (action) {
				case DATA_TABLE_CARD_ACTIONS.RENAME:
					emit("rename", {
						dataTable: props.dataTable,
						action: "rename"
					});
					break;
				case DATA_TABLE_CARD_ACTIONS.DOWNLOAD_CSV:
					uiStore.openModal(downloadModalKey.value);
					break;
				case DATA_TABLE_CARD_ACTIONS.DELETE:
					if (await message.confirm(i18n.baseText("dataTable.delete.confirm.message", { interpolate: { name: props.dataTable.name } }), i18n.baseText("dataTable.delete.confirm.title"), {
						confirmButtonText: i18n.baseText("generic.delete"),
						cancelButtonText: i18n.baseText("generic.cancel")
					}) === "confirm") await deleteDataTable();
					break;
			}
		};
		const downloadDataTableCsv = async (includeSystemColumns) => {
			try {
				uiStore.closeModal(downloadModalKey.value);
				await dataTableStore.downloadDataTableCsv(props.dataTable.id, props.dataTable.projectId, includeSystemColumns);
				telemetry.track("User downloaded data table CSV", {
					data_table_id: props.dataTable.id,
					data_table_project_id: props.dataTable.projectId,
					include_system_columns: includeSystemColumns
				});
			} catch (error) {
				toast.showError(error, i18n.baseText("dataTable.download.error"));
			}
		};
		const deleteDataTable = async () => {
			try {
				if (!await dataTableStore.deleteDataTable(props.dataTable.id, props.dataTable.projectId)) throw new Error(i18n.baseText("generic.unknownError"));
				emit("onDeleted");
				telemetry.track("User deleted data table", {
					data_table_id: props.dataTable.id,
					data_table_project_id: props.dataTable.projectId
				});
			} catch (error) {
				toast.showError(error, i18n.baseText("dataTable.delete.error"));
			}
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [createVNode(unref(N8nActionToggle_default), {
				actions: actions.value,
				theme: "dark",
				"data-test-id": "data-table-card-actions",
				onAction
			}, null, 8, ["actions"]), createVNode(DownloadDataTableModal_default, {
				"modal-name": downloadModalKey.value,
				"data-table-name": __props.dataTable.name,
				onConfirm: downloadDataTableCsv,
				onClose: _cache[0] || (_cache[0] = () => unref(uiStore).closeModal(downloadModalKey.value))
			}, null, 8, ["modal-name", "data-table-name"])]);
		};
	}
});
export { DataTableActions_default as t };
