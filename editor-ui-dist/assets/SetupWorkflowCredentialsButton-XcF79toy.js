import { d as defineComponent, a2 as useWorkflowsStore, ae as useNodeTypesStore, Q as useUIStore, x as computed, j0 as doesNodeHaveAllCredentialsFilled, a8 as watch, X as onBeforeUnmount, j1 as SETUP_CREDENTIALS_MODAL_KEY, e as createBlock, f as createCommentVNode, g as openBlock, k as unref, c as useI18n, q as N8nButton } from "./index-lkSN61-i.js";
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
      return showButton.value ? (openBlock(), createBlock(unref(N8nButton), {
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
