import { d as defineComponent, hr as useDataTableStore, a as useToast, x as computed, hv as DATA_TABLE_CARD_ACTIONS, c as useI18n, e as createBlock, g as openBlock, k as unref, ee as N8nActionToggle, am as useMessage, an as MODAL_CONFIRM, al as useTelemetry } from "./index-lkSN61-i.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DataTableActions",
  props: {
    dataTable: {},
    isReadOnly: { type: Boolean, default: false },
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
      const availableActions = [
        {
          label: i18n.baseText("generic.delete"),
          value: DATA_TABLE_CARD_ACTIONS.DELETE,
          disabled: props.isReadOnly
        }
      ];
      if (props.location === "breadcrumbs") {
        availableActions.unshift({
          label: i18n.baseText("generic.rename"),
          value: DATA_TABLE_CARD_ACTIONS.RENAME,
          disabled: props.isReadOnly
        });
      }
      return availableActions;
    });
    const onAction = async (action) => {
      switch (action) {
        case DATA_TABLE_CARD_ACTIONS.RENAME: {
          emit("rename", {
            dataTable: props.dataTable,
            action: "rename"
          });
          break;
        }
        case DATA_TABLE_CARD_ACTIONS.DELETE: {
          const promptResponse = await message.confirm(
            i18n.baseText("dataTable.delete.confirm.message", {
              interpolate: { name: props.dataTable.name }
            }),
            i18n.baseText("dataTable.delete.confirm.title"),
            {
              confirmButtonText: i18n.baseText("generic.delete"),
              cancelButtonText: i18n.baseText("generic.cancel")
            }
          );
          if (promptResponse === MODAL_CONFIRM) {
            await deleteDataTable();
          }
          break;
        }
      }
    };
    const deleteDataTable = async () => {
      try {
        const deleted = await dataTableStore.deleteDataTable(
          props.dataTable.id,
          props.dataTable.projectId
        );
        if (!deleted) {
          throw new Error(i18n.baseText("generic.unknownError"));
        }
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
      return openBlock(), createBlock(unref(N8nActionToggle), {
        actions: actions.value,
        theme: "dark",
        "data-test-id": "data-table-card-actions",
        onAction
      }, null, 8, ["actions"]);
    };
  }
});
export {
  _sfc_main as _
};
