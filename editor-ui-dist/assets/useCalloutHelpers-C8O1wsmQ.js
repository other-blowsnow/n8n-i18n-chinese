import { S as computed } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { lt as useRoute, ut as useRouter } from "./src-a22F3VX4.js";
import { G as SampleTemplates, J as getTutorialTemplates, K as getRagStarterWorkflowJson, Y as isTutorialTemplateId, _r as useTelemetry, fr as useWorkflowsListStore, q as getSampleWorkflowByTemplateId, s as useWorkflowsStore, t as useUsersStore, ui as useProjectsStore, w as useNodeTypesStore } from "./users.store-nlgC_rIW.js";
import { zr as VIEWS } from "./constants-BxmNKFHG.js";
import { t as useRootStore } from "./useRootStore-DAiGYPcV.js";
import { S as updateCurrentUserSettings } from "./settings.store-DZ4oO7jW.js";
//#region src/app/composables/useCalloutHelpers.ts
function useCalloutHelpers() {
	const route = useRoute();
	const router = useRouter();
	const telemetry = useTelemetry();
	const rootStore = useRootStore();
	const workflowsStore = useWorkflowsStore();
	const workflowsListStore = useWorkflowsListStore();
	const usersStore = useUsersStore();
	const nodeTypesStore = useNodeTypesStore();
	const projectsStore = useProjectsStore();
	const isRagStarterCalloutVisible = computed(() => {
		const template = getRagStarterWorkflowJson();
		const routeTemplateId = route.query.templateId;
		const workflowObject = workflowsStore.workflowObject;
		const workflow = workflowsListStore.getWorkflowById(workflowObject.id);
		if ((routeTemplateId ?? workflow?.meta?.templateId) === template.meta.templateId) return false;
		return true;
	});
	const getTutorialTemplatesNodeCreatorItems = () => {
		return getTutorialTemplates().map((template) => {
			return {
				key: template.template.meta.templateId,
				type: "openTemplate",
				properties: {
					templateId: template.template.meta.templateId,
					title: template.name,
					description: template.description,
					nodes: template.nodes.flatMap((node) => {
						const nodeType = nodeTypesStore.getNodeType(node.name, node.version);
						if (!nodeType) return [];
						return nodeType;
					})
				}
			};
		});
	};
	const openSampleWorkflowTemplate = (templateId, options) => {
		if (templateId === SampleTemplates.RagStarterTemplate) telemetry.track("User clicked on RAG callout", { node_type: options.telemetry.nodeType ?? null });
		else if (isTutorialTemplateId(templateId)) telemetry.track("User inserted tutorial template", {
			template: templateId,
			source: options.telemetry.source,
			node_type: options.telemetry.nodeType ?? null,
			section: options.telemetry.section ?? null
		});
		const template = getSampleWorkflowByTemplateId(templateId);
		if (!template) return;
		const { href } = router.resolve({
			name: VIEWS.TEMPLATE_IMPORT,
			params: { id: template.meta.templateId },
			query: {
				fromJson: "true",
				parentFolderId: route.params.folderId,
				projectId: projectsStore.currentProjectId
			}
		});
		window.open(href, "_blank");
	};
	const isCalloutDismissed = (callout) => {
		return usersStore.isCalloutDismissed(callout);
	};
	const dismissCallout = async (callout) => {
		usersStore.setCalloutDismissed(callout);
		await updateCurrentUserSettings(rootStore.restApiContext, { dismissedCallouts: {
			...usersStore.currentUser?.settings?.dismissedCallouts,
			[callout]: true
		} });
	};
	return {
		openSampleWorkflowTemplate,
		getTutorialTemplatesNodeCreatorItems,
		isRagStarterCalloutVisible,
		isCalloutDismissed,
		dismissCallout
	};
}
//#endregion
export { useCalloutHelpers as t };
