import { d as defineComponent, Z as useUIStore, aa as useRoute, a as useToast, r as ref, o as onMounted, e as createBlock, g as openBlock, w as withCtx, j as createBaseVNode, n as normalizeClass, i as createVNode, q as N8nButton, l as unref, c as useI18n, t as toDisplayString, e5 as N8nInputLabel, c$ as N8nInput, ba as withKeys, gC as __unplugin_components_3, _ as _export_sfc } from "./index-BsWH3eYA.js";
import { u as useDataStoreStore } from "./dataStore.store-BCvcHn6X.js";
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
        await dataStoreStore.createDataStore(dataStoreName.value, route.params.projectId);
      } catch (error) {
        toast.showError(error, i18n.baseText("dataStore.add.error"));
      } finally {
        dataStoreName.value = "";
        uiStore.closeModal(props.modalName);
      }
    };
    return (_ctx, _cache) => {
      const _component_n8n_input = N8nInput;
      const _component_n8n_input_label = N8nInputLabel;
      const _component_n8n_button = N8nButton;
      const _component_Modal = __unplugin_components_3;
      return openBlock(), createBlock(_component_Modal, {
        name: props.modalName,
        center: true,
        width: "540px"
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
        footer: withCtx(({ close }) => [
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
              onClick: close
            }, null, 8, ["label", "onClick"])
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
