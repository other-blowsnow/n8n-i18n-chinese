import { d as defineComponent, Q as useUIStore, a2 as useRoute, b as useRouter, a as useToast, r as ref, o as onMounted, e as createBlock, g as openBlock, w as withCtx, j as createBaseVNode, n as normalizeClass, i as createVNode, q as N8nButton, l as unref, c as useI18n, t as toDisplayString, d_ as N8nInputLabel, cT as N8nInput, b8 as withKeys, gK as __unplugin_components_3, gu as DATA_STORE_DETAILS, gb as PROJECT_DATA_STORES, _ as _export_sfc } from "./index-C2Ni_W8W.js";
import { u as useDataStoreStore } from "./dataStore.store-AzNMjAZ3.js";
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
        void router.push({
          name: DATA_STORE_DETAILS,
          params: {
            id: newDataStore.id
          }
        });
        dataStoreName.value = "";
        uiStore.closeModal(props.modalName);
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
          createBaseVNode("h2", null, toDisplayString(unref(i18n).baseText("dataStore.add.title")), 1)
        ]),
        content: withCtx(() => [
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.content)
          }, [
            createBaseVNode("p", null, toDisplayString(unref(i18n).baseText("dataStore.add.description")), 1),
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
              label: unref(i18n).baseText("dataStore.add.button.label"),
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
const content = "_content_du2hu_123";
const footer = "_footer_du2hu_129";
const style0 = {
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
