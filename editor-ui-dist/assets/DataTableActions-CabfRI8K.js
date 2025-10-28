import { C as computed, Gt as unref, P as defineComponent, T as createBlock, et as openBlock } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { gt as useI18n } from "./_MapCache-DZMn6F95.js";
import { $ as N8nActionToggle_default } from "./src-DuV1yrAd.js";
import { t as useMessage } from "./useMessage-BUlTkhLg.js";
import { t as useTelemetry } from "./useTelemetry-C3cN19b2.js";
import { t as useToast } from "./useToast-B-CMvNEW.js";
import { ja as DATA_TABLE_CARD_ACTIONS, kr as MODAL_CONFIRM } from "./constants-CiCQTzlI.js";
import { t as useDataTableStore } from "./dataTable.store-JbrTjKUL.js";
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
		const i18n = useI18n();
		const message = useMessage();
		const toast = useToast();
		const telemetry = useTelemetry();
		const actions = computed(() => {
			const availableActions = [{
				label: i18n.baseText("generic.delete"),
				value: DATA_TABLE_CARD_ACTIONS.DELETE,
				disabled: props.isReadOnly
			}];
			if (props.location === "breadcrumbs") availableActions.unshift({
				label: i18n.baseText("generic.rename"),
				value: DATA_TABLE_CARD_ACTIONS.RENAME,
				disabled: props.isReadOnly
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
				case DATA_TABLE_CARD_ACTIONS.DELETE:
					if (await message.confirm(i18n.baseText("dataTable.delete.confirm.message", { interpolate: { name: props.dataTable.name } }), i18n.baseText("dataTable.delete.confirm.title"), {
						confirmButtonText: i18n.baseText("generic.delete"),
						cancelButtonText: i18n.baseText("generic.cancel")
					}) === "confirm") await deleteDataTable();
					break;
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
			return openBlock(), createBlock(unref(N8nActionToggle_default), {
				actions: actions.value,
				theme: "dark",
				"data-test-id": "data-table-card-actions",
				onAction
			}, null, 8, ["actions"]);
		};
	}
});
export { DataTableActions_default as t };
