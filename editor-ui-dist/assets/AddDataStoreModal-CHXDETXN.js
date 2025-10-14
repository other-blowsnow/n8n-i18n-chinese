import { d as defineComponent, hj as useDataStoreStore, Q as useUIStore, a3 as useRoute, b as useRouter, a as useToast, r as ref, o as onMounted, e as createBlock, g as openBlock, w as withCtx, j as createBaseVNode, n as normalizeClass, i as createVNode, k as unref, q as N8nButton, c as useI18n, eK as N8nInputLabel, dE as N8nInput, bH as withKeys, t as toDisplayString, hL as Modal, al as useTelemetry, hk as DATA_STORE_DETAILS, h4 as PROJECT_DATA_STORES, _ as _export_sfc } from "./index-CXXH2E8E.js";
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
      return openBlock(), createBlock(Modal, {
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
            createVNode(unref(N8nInputLabel), {
              label: unref(i18n).baseText("dataStore.add.input.name.label"),
              required: true,
              "input-name": "dataStoreName"
            }, {
              default: withCtx(() => [
                createVNode(unref(N8nInput), {
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
            createVNode(unref(N8nButton), {
              disabled: !dataStoreName.value,
              label: unref(i18n).baseText("generic.create"),
              "data-test-id": "confirm-add-data-store-button",
              onClick: onSubmit
            }, null, 8, ["disabled", "label"]),
            createVNode(unref(N8nButton), {
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
