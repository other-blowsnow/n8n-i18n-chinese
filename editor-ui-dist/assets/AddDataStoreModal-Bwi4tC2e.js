import { d as defineComponent, gK as useDataStoreStore, Q as useUIStore, a3 as useRoute, b as useRouter, a as useToast, r as ref, o as onMounted, e as createBlock, g as openBlock, w as withCtx, j as createBaseVNode, n as normalizeClass, i as createVNode, q as N8nButton, l as unref, c as useI18n, e9 as N8nInputLabel, d2 as N8nInput, b9 as withKeys, t as toDisplayString, h8 as __unplugin_components_3, am as useTelemetry, gJ as DATA_STORE_DETAILS, gq as PROJECT_DATA_STORES, _ as _export_sfc } from "./index-PdEQe4H7.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AddDataStoreModal",
  props: {
    modalName: {}
  },
  setup(__props) {
    const props = __props;
    const dataStoreStore = useDataStoreStore();
    const uiStore = useUIStore();
    const route = useRoute();
    const router = useRouter();
    const i18n = useI18n();
    const toast = useToast();
    const telemetry = useTelemetry();
    const dataStoreName = ref("");
    const inputRef = ref(null);
    onMounted(() => {
      setTimeout(() => {
        inputRef.value?.focus();
        inputRef.value?.select();
      }, 0);
    });
    const onSubmit = async () => {
      try {
        const newDataStore = await dataStoreStore.createDataStore(
          dataStoreName.value,
          route.params.projectId
        );
        telemetry.track("User created data table", {
          data_table_id: newDataStore.id,
          data_table_project_id: newDataStore.project?.id
        });
        dataStoreName.value = "";
        uiStore.closeModal(props.modalName);
        void router.push({
          name: DATA_STORE_DETAILS,
          params: {
            id: newDataStore.id
          }
        });
      } catch (error) {
        toast.showError(error, i18n.baseText("dataStore.add.error"));
      }
    };
    const onCancel = () => {
      uiStore.closeModal(props.modalName);
      redirectToDataStores();
    };
    const redirectToDataStores = () => {
      void router.replace({ name: PROJECT_DATA_STORES });
    };
    return (_ctx, _cache) => {
      const _component_n8n_input = N8nInput;
      const _component_n8n_input_label = N8nInputLabel;
      const _component_n8n_button = N8nButton;
      const _component_Modal = __unplugin_components_3;
      return openBlock(), createBlock(_component_Modal, {
        name: props.modalName,
        center: true,
        width: "540px",
        "before-close": redirectToDataStores
      }, {
        header: withCtx(() => [
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.header)
          }, [
            createBaseVNode("h2", null, toDisplayString(unref(i18n).baseText("dataStore.add.title")), 1)
          ], 2)
        ]),
        content: withCtx(() => [
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.content)
          }, [
            createVNode(_component_n8n_input_label, {
              label: unref(i18n).baseText("dataStore.add.input.name.label"),
              required: true,
              "input-name": "dataStoreName"
            }, {
              default: withCtx(() => [
                createVNode(_component_n8n_input, {
                  ref_key: "inputRef",
                  ref: inputRef,
                  modelValue: dataStoreName.value,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => dataStoreName.value = $event),
                  type: "text",
                  placeholder: unref(i18n).baseText("dataStore.add.input.name.placeholder"),
                  "data-test-id": "data-store-name-input",
                  name: "dataStoreName",
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
            createVNode(_component_n8n_button, {
              disabled: !dataStoreName.value,
              label: unref(i18n).baseText("generic.create"),
              "data-test-id": "confirm-add-data-store-button",
              onClick: onSubmit
            }, null, 8, ["disabled", "label"]),
            createVNode(_component_n8n_button, {
              type: "secondary",
              label: unref(i18n).baseText("generic.cancel"),
              "data-test-id": "cancel-add-data-store-button",
              onClick: onCancel
            }, null, 8, ["label"])
          ], 2)
        ]),
        _: 1
      }, 8, ["name"]);
    };
  }
});
const header = "_header_1qzu3_123";
const content = "_content_1qzu3_127";
const footer = "_footer_1qzu3_132";
const style0 = {
  header,
  content,
  footer
};
const cssModules = {
  "$style": style0
};
const AddDataStoreModal = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);
export {
  AddDataStoreModal as default
};
