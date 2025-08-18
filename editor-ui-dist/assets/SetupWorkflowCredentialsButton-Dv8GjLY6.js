import { d as defineComponent, a9 as useWorkflowsStore, ah as useNodeTypesStore, Z as useUIStore, x as computed, hx as doesNodeHaveAllCredentialsFilled, af as watch, P as onBeforeUnmount, hy as SETUP_CREDENTIALS_MODAL_KEY, e as createBlock, f as createCommentVNode, g as openBlock, l as unref, c as useI18n, q as N8nButton } from "./index-BsWH3eYA.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SetupWorkflowCredentialsButton",
  setup(__props) {
    const workflowsStore = useWorkflowsStore();
    const nodeTypesStore = useNodeTypesStore();
    const uiStore = useUIStore();
    const i18n = useI18n();
    const isTemplateSetupCompleted = computed(() => {
      return !!workflowsStore.workflow?.meta?.templateCredsSetupCompleted;
    });
    const allCredentialsFilled = computed(() => {
      if (isTemplateSetupCompleted.value) {
        return true;
      }
      const nodes = workflowsStore.getNodes();
      if (!nodes.length) {
        return true;
      }
      return nodes.every((node) => doesNodeHaveAllCredentialsFilled(nodeTypesStore, node));
    });
    const showButton = computed(() => {
      const isCreatedFromTemplate = !!workflowsStore.workflow?.meta?.templateId;
      if (!isCreatedFromTemplate || isTemplateSetupCompleted.value) {
        return false;
      }
      return !allCredentialsFilled.value;
    });
    const unsubscribe = watch(allCredentialsFilled, (newValue) => {
      if (newValue) {
        workflowsStore.addToWorkflowMetadata({
          templateCredsSetupCompleted: true
        });
        unsubscribe();
      }
    });
    const handleClick = () => {
      uiStore.openModal(SETUP_CREDENTIALS_MODAL_KEY);
    };
    onBeforeUnmount(() => {
      uiStore.closeModal(SETUP_CREDENTIALS_MODAL_KEY);
    });
    return (_ctx, _cache) => {
      const _component_n8n_button = N8nButton;
      return showButton.value ? (openBlock(), createBlock(_component_n8n_button, {
        key: 0,
        label: unref(i18n).baseText("nodeView.setupTemplate"),
        "data-test-id": "setup-credentials-button",
        size: "large",
        icon: "package-open",
        type: "secondary",
        onClick: _cache[0] || (_cache[0] = ($event) => handleClick())
      }, null, 8, ["label"])) : createCommentVNode("", true);
    };
  }
});
export {
  _sfc_main as default
};
