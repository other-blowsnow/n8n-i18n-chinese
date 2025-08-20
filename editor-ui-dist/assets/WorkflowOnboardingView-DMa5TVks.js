import { d as defineComponent, bd as useLoadingService, bp as useTemplatesStore, a9 as useWorkflowsStore, b as useRouter, aa as useRoute, o as onMounted, V as VIEWS, h as createElementBlock, g as openBlock, c as useI18n } from "./index-BsWH3eYA.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "WorkflowOnboardingView",
  setup(__props) {
    const loadingService = useLoadingService();
    const templateStore = useTemplatesStore();
    const workflowsStore = useWorkflowsStore();
    const router = useRouter();
    const route = useRoute();
    const i18n = useI18n();
    const openWorkflowTemplate = async (templateId) => {
      try {
        loadingService.startLoading();
        const template = await templateStore.getFixedWorkflowTemplate(templateId);
        if (!template) {
          throw new Error();
        }
        const name = i18n.baseText("onboarding.title", {
          interpolate: { name: template.name }
        });
        const workflow = await workflowsStore.createNewWorkflow({
          name,
          connections: template.workflow.connections,
          nodes: template.workflow.nodes.map(workflowsStore.convertTemplateNodeToNodeUi),
          pinData: template.workflow.pinData,
          settings: template.workflow.settings,
          meta: {
            onboardingId: templateId
          }
        });
        await router.replace({
          name: VIEWS.WORKFLOW,
          params: { name: workflow.id },
          query: { onboardingId: templateId }
        });
        loadingService.stopLoading();
      } catch (e) {
        await router.replace({ name: VIEWS.NEW_WORKFLOW });
        loadingService.stopLoading();
        throw new Error(`Could not load onboarding template ${templateId}`);
      }
    };
    onMounted(async () => {
      const templateId = route.params.id;
      if (!templateId || typeof templateId !== "string") {
        await router.replace({ name: VIEWS.NEW_WORKFLOW });
        return;
      }
      await openWorkflowTemplate(templateId);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div");
    };
  }
});
export {
  _sfc_main as default
};
