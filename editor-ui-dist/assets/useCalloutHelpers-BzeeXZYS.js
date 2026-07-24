import { S as computed } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { Ct as useRoute, wt as useRouter } from "./src-bSQwfFcX.js";
import { hi as VIEWS } from "./constants-CSBjw1Ht.js";
import { J as getSampleWorkflowByTemplateId, K as SampleTemplates, X as isTutorialTemplateId, Y as getTutorialTemplates, _ as useNodeTypesStore, dn as useWorkflowsStore, q as getRagStarterWorkflowJson, wn as useProjectsStore } from "./workflowDocument.store-DWj92T8C.js";
import { t as useRootStore } from "./useRootStore-hyBq4XlJ.js";
import { C as updateCurrentUserSettings } from "./settings.store-C5bX9q6f.js";
import { p as useTelemetry, t as useUsersStore } from "./users.store-CsyV7tYv.js";
import { t as useWorkflowsListStore } from "./workflowsList.store-BBdSrTS3.js";
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
		const workflow = workflowsListStore.getWorkflowById(workflowsStore.workflowId);
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
