import { C as computed } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { Lt as useRoute, Rt as useRouter } from "./src-Cq27d_Gp.js";
import { C as useNodeTypesStore, G as getRagStarterWorkflowJson, J as isTutorialTemplateId, K as getSampleWorkflowByTemplateId, Nt as useTelemetry, Vt as useProjectsStore, W as SampleTemplates, gs as updateCurrentUserSettings, q as getTutorialTemplates, s as useWorkflowsStore, t as useUsersStore } from "./users.store-qBZsmf9-.js";
import { Xo as VIEWS } from "./constants-Cyrg9Nbl.js";
import { r as useRootStore } from "./_baseOrderBy-3Uh8XZv3.js";
function useCalloutHelpers() {
	const route = useRoute();
	const router = useRouter();
	const telemetry = useTelemetry();
	const rootStore = useRootStore();
	const workflowsStore = useWorkflowsStore();
	const usersStore = useUsersStore();
	const nodeTypesStore = useNodeTypesStore();
	const projectsStore = useProjectsStore();
	const isRagStarterCalloutVisible = computed(() => {
		const template = getRagStarterWorkflowJson();
		const routeTemplateId = route.query.templateId;
		const workflowObject = workflowsStore.workflowObject;
		const workflow = workflowsStore.getWorkflowById(workflowObject.id);
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
export { useCalloutHelpers as t };
