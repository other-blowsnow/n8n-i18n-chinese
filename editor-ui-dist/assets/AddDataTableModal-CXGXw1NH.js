import { d as defineComponent, hr as useDataTableStore, Q as useUIStore, a3 as useRoute, b as useRouter, a as useToast, r as ref, o as onMounted, e as createBlock, g as openBlock, w as withCtx, j as createBaseVNode, n as normalizeClass, i as createVNode, k as unref, q as N8nButton, c as useI18n, e3 as N8nInputLabel, cT as N8nInput, bX as withKeys, t as toDisplayString, hT as Modal, al as useTelemetry, hs as DATA_TABLE_DETAILS, h8 as PROJECT_DATA_TABLES, _ as _export_sfc } from "./index-lkSN61-i.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AddDataTableModal",
  props: {
    modalName: {}
  },
  setup(__props) {
    const props = __props;
    const dataTableStore = useDataTableStore();
    const uiStore = useUIStore();
    const route = useRoute();
    const router = useRouter();
    const i18n = useI18n();
    const toast = useToast();
    const telemetry = useTelemetry();
    const dataTableName = ref("");
    const inputRef = ref(null);
    onMounted(() => {
      setTimeout(() => {
        inputRef.value?.focus();
        inputRef.value?.select();
      }, 0);
    });
    const onSubmit = async () => {
      try {
        const newDataTable = await dataTableStore.createDataTable(
          dataTableName.value,
          route.params.projectId
        );
        telemetry.track("User created data table", {
          data_table_id: newDataTable.id,
          data_table_project_id: newDataTable.project?.id
        });
        dataTableName.value = "";
        uiStore.closeModal(props.modalName);
        void router.push({
          name: DATA_TABLE_DETAILS,
          params: {
            id: newDataTable.id
          }
        });
      } catch (error) {
        toast.showError(error, i18n.baseText("dataTable.add.error"));
      }
    };
    const onCancel = () => {
      uiStore.closeModal(props.modalName);
      redirectToDataTables();
    };
    const redirectToDataTables = () => {
      void router.replace({ name: PROJECT_DATA_TABLES });
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Modal, {
        name: props.modalName,
        center: true,
        width: "540px",
        "before-close": redirectToDataTables
      }, {
        header: withCtx(() => [
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.header)
          }, [
            createBaseVNode("h2", null, toDisplayString(unref(i18n).baseText("dataTable.add.title")), 1)
          ], 2)
        ]),
        content: withCtx(() => [
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.content)
          }, [
            createVNode(unref(N8nInputLabel), {
              label: unref(i18n).baseText("dataTable.add.input.name.label"),
              required: true,
              "input-name": "dataTableName"
            }, {
              default: withCtx(() => [
                createVNode(unref(N8nInput), {
                  ref_key: "inputRef",
                  ref: inputRef,
                  modelValue: dataTableName.value,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => dataTableName.value = $event),
                  type: "text",
                  placeholder: unref(i18n).baseText("dataTable.add.input.name.placeholder"),
                  "data-test-id": "data-table-name-input",
                  name: "dataTableName",
                  onKeyup: withKeys(onSubmit, ["enter"])
                }, null, 8, ["modelValue", "placeholder"])
              ]),
              _: 1
            }, 8, ["label"])
          ], 2)
        ]),
        footer: withCtx(() => [
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.footer)
          }, [
            createVNode(unref(N8nButton), {
              disabled: !dataTableName.value,
              label: unref(i18n).baseText("generic.create"),
              "data-test-id": "confirm-add-data-table-button",
              onClick: onSubmit
            }, null, 8, ["disabled", "label"]),
            createVNode(unref(N8nButton), {
              type: "secondary",
              label: unref(i18n).baseText("generic.cancel"),
              "data-test-id": "cancel-add-data-table-button",
              onClick: onCancel
            }, null, 8, ["label"])
          ], 2)
        ]),
        _: 1
      }, 8, ["name"]);
    };
  }
});
const header = "_header_f03xn_123";
const content = "_content_f03xn_127";
const footer = "_footer_f03xn_132";
const style0 = {
  header,
  content,
  footer
};
const cssModules = {
  "$style": style0
};
const AddDataTableModal = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);
export {
  AddDataTableModal as default
};
