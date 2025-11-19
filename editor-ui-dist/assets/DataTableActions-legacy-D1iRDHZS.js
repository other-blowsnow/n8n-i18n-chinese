;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-CVC6fg6H.js", "./src-legacy-D3-Bo0sy.js", "./useMessage-legacy-CgoaFFwd.js", "./useTelemetry-legacy-BdQlQKwu.js", "./useToast-legacy-D8KBGcJW.js", "./constants-legacy-B0GcWb62.js", "./dataTable.store-legacy-BFWf9Jk0.js"], function (_export, _context) {
    "use strict";

    var computed, unref, defineComponent, createBlock, openBlock, useI18n, N8nActionToggle_default, useMessage, useTelemetry, useToast, DATA_TABLE_CARD_ACTIONS, MODAL_CONFIRM, useDataTableStore, DataTableActions_vue_vue_type_script_setup_true_lang_default, DataTableActions_default;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {
        N8nActionToggle_default = _srcLegacy007Js.$;
      }, function (_useMessageLegacy00vJs) {
        useMessage = _useMessageLegacy00vJs.t;
      }, function (_useTelemetryLegacy00FJs) {
        useTelemetry = _useTelemetryLegacy00FJs.t;
      }, function (_useToastLegacy00HJs) {
        useToast = _useToastLegacy00HJs.t;
      }, function (_constantsLegacy00NJs) {
        DATA_TABLE_CARD_ACTIONS = _constantsLegacy00NJs.Bn;
        MODAL_CONFIRM = _constantsLegacy00NJs.No;
      }, function (_dataTableStoreLegacy01HJs) {
        useDataTableStore = _dataTableStoreLegacy01HJs.t;
      }],
      execute: function () {
        //#region src/features/core/dataTable/components/DataTableActions.vue?vue&type=script&setup=true&lang.ts
        DataTableActions_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
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
          setup(__props, {
            emit: __emit
          }) {
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
                disabled: !dataTableStore.projectPermissions.dataTable.delete || props.isReadOnly
              }];
              if (props.location === "breadcrumbs") availableActions.unshift({
                label: i18n.baseText("generic.rename"),
                value: DATA_TABLE_CARD_ACTIONS.RENAME,
                disabled: !dataTableStore.projectPermissions.dataTable.update || props.isReadOnly
              });
              return availableActions;
            });
            const onAction = async action => {
              switch (action) {
                case DATA_TABLE_CARD_ACTIONS.RENAME:
                  emit("rename", {
                    dataTable: props.dataTable,
                    action: "rename"
                  });
                  break;
                case DATA_TABLE_CARD_ACTIONS.DELETE:
                  if ((await message.confirm(i18n.baseText("dataTable.delete.confirm.message", {
                    interpolate: {
                      name: props.dataTable.name
                    }
                  }), i18n.baseText("dataTable.delete.confirm.title"), {
                    confirmButtonText: i18n.baseText("generic.delete"),
                    cancelButtonText: i18n.baseText("generic.cancel")
                  })) === "confirm") await deleteDataTable();
                  break;
              }
            };
            const deleteDataTable = async () => {
              try {
                if (!(await dataTableStore.deleteDataTable(props.dataTable.id, props.dataTable.projectId))) throw new Error(i18n.baseText("generic.unknownError"));
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
        }); //#endregion
        //#region src/features/core/dataTable/components/DataTableActions.vue
        _export("t", DataTableActions_default = DataTableActions_vue_vue_type_script_setup_true_lang_default); //#endregion
      }
    };
  });
})();