import { $ as openBlock, E as createElementBlock, N as defineComponent, X as onMounted } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { x as useI18n } from "./_MapCache-Cdnara8G.js";
import { _ as useRouter, g as useRoute } from "./htmlUtils-6WNyAs6s.js";
import { t as useLoadingService } from "./useLoadingService-Be0KrGRb.js";
import { t as useWorkflowsStore } from "./workflows.store-CqcYpj8n.js";
import "./constants-BcmmCDkE.js";
import { t as VIEWS } from "./views-4JHVC4Nc.js";
import { t as useTemplatesStore } from "./templates.store-Ksz1zTJt.js";
//#endregion
//#region src/app/views/WorkflowOnboardingView.vue
var WorkflowOnboardingView_default = /* @__PURE__ */ defineComponent({
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
				if (!template) throw new Error();
				const name = i18n.baseText("onboarding.title", { interpolate: { name: template.name } });
				const workflow = await workflowsStore.createNewWorkflow({
					name,
					connections: template.workflow.connections,
					nodes: template.workflow.nodes.map(workflowsStore.convertTemplateNodeToNodeUi),
					pinData: template.workflow.pinData,
					settings: template.workflow.settings,
					meta: { onboardingId: templateId }
				});
				await router.replace({
					name: VIEWS.WORKFLOW,
					params: { workflowId: workflow.id },
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
//#endregion
export { WorkflowOnboardingView_default as default };
