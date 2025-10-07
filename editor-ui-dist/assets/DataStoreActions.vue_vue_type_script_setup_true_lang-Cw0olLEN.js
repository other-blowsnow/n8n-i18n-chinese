import { d as defineComponent, gO as useDataStoreStore, a as useToast, x as computed, gS as DATA_STORE_CARD_ACTIONS, c as useI18n, e as createBlock, g as openBlock, en as N8nActionToggle, an as useMessage, ao as MODAL_CONFIRM, am as useTelemetry } from "./index-BXVCKjk6.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DataStoreActions",
  props: {
    dataStore: {},
    isReadOnly: { type: Boolean, default: false },
    location: {}
  },
  emits: ["rename", "onDeleted"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const dataStoreStore = useDataStoreStore();
    const i18n = useI18n();
    const message = useMessage();
    const toast = useToast();
    const telemetry = useTelemetry();
    const actions = computed(() => {
      const availableActions = [
        {
          label: i18n.baseText("generic.delete"),
          value: DATA_STORE_CARD_ACTIONS.DELETE,
          disabled: props.isReadOnly
        }
      ];
      if (props.location === "breadcrumbs") {
        availableActions.unshift({
          label: i18n.baseText("generic.rename"),
          value: DATA_STORE_CARD_ACTIONS.RENAME,
          disabled: props.isReadOnly
        });
      }
      return availableActions;
    });
    const onAction = async (action) => {
      switch (action) {
        case DATA_STORE_CARD_ACTIONS.RENAME: {
          emit("rename", {
            dataStore: props.dataStore,
            action: "rename"
          });
          break;
        }
        case DATA_STORE_CARD_ACTIONS.DELETE: {
          const promptResponse = await message.confirm(
            i18n.baseText("dataStore.delete.confirm.message", {
              interpolate: { name: props.dataStore.name }
            }),
            i18n.baseText("dataStore.delete.confirm.title"),
            {
              confirmButtonText: i18n.baseText("generic.delete"),
              cancelButtonText: i18n.baseText("generic.cancel")
            }
          );
          if (promptResponse === MODAL_CONFIRM) {
            await deleteDataStore();
          }
          break;
        }
      }
    };
    const deleteDataStore = async () => {
      try {
        const deleted = await dataStoreStore.deleteDataStore(
          props.dataStore.id,
          props.dataStore.projectId
        );
        if (!deleted) {
          throw new Error(i18n.baseText("generic.unknownError"));
        }
        emit("onDeleted");
        telemetry.track("User deleted data table", {
          data_table_id: props.dataStore.id,
          data_table_project_id: props.dataStore.projectId
        });
      } catch (error) {
        toast.showError(error, i18n.baseText("dataStore.delete.error"));
      }
    };
    return (_ctx, _cache) => {
      const _component_N8nActionToggle = N8nActionToggle;
      return openBlock(), createBlock(_component_N8nActionToggle, {
        actions: actions.value,
        theme: "dark",
        "data-test-id": "data-store-card-actions",
        onAction
      }, null, 8, ["actions"]);
    };
  }
});
export {
  _sfc_main as _
};
