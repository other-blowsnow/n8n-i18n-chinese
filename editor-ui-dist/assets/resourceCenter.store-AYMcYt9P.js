import { C as computed, It as ref, _t as watch } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { Rt as useRouter } from "./src-Cq27d_Gp.js";
import { Er as usePostHog, Nt as useTelemetry, gn as useTemplatesStore, s as useWorkflowsStore } from "./users.store-qBZsmf9-.js";
import { Dc as RESOURCE_CENTER_EXPERIMENT, Pa as deepCopy, Xo as VIEWS, bo as OPEN_AI_API_CREDENTIAL_TYPE } from "./constants-Cyrg9Nbl.js";
import { A as defineStore } from "./_baseOrderBy-3Uh8XZv3.js";
import { i as READY_TO_RUN_AI_WORKFLOW, n as READY_TO_RUN_WORKFLOW_V5, t as useReadyToRunStore } from "./readyToRun.store-jCsh7z8e.js";
const quickStartWorkflows = [{
	id: "summarize-the-news",
	name: "Summarize the news",
	description: "Get AI-powered news summaries from top sources",
	workflow: READY_TO_RUN_AI_WORKFLOW,
	nodeTypes: ["n8n-nodes-base.rssFeedReadTool", "@n8n/n8n-nodes-langchain.agent"]
}, {
	id: "chat-with-the-news",
	name: "Chat with the news",
	description: "Chat with an AI agent about the latest news",
	workflow: READY_TO_RUN_WORKFLOW_V5,
	nodeTypes: ["@n8n/n8n-nodes-langchain.chatTrigger", "@n8n/n8n-nodes-langchain.agent"]
}];
var LOCAL_STORAGE_CREDENTIAL_KEY = "N8N_READY_TO_RUN_OPENAI_CREDENTIAL_ID";
var TOOLTIP_STORAGE_KEY = "n8n-resourceCenter-tooltipDismissed";
const useResourceCenterStore = defineStore("resourceCenter", () => {
	const posthogStore = usePostHog();
	const templatesStore = useTemplatesStore();
	const workflowsStore = useWorkflowsStore();
	const readyToRunStore = useReadyToRunStore();
	const telemetry = useTelemetry();
	const router = useRouter();
	const isLoadingTemplates = ref(false);
	const hasTooltipBeenDismissed = ref(localStorage.getItem(TOOLTIP_STORAGE_KEY) === "true");
	const isFeatureEnabled = () => {
		const variant = posthogStore.getVariant(RESOURCE_CENTER_EXPERIMENT.name);
		return variant === RESOURCE_CENTER_EXPERIMENT.variantResources || variant === RESOURCE_CENTER_EXPERIMENT.variantInspiration;
	};
	const getCurrentVariant = () => {
		return posthogStore.getVariant(RESOURCE_CENTER_EXPERIMENT.name);
	};
	const shouldShowResourceCenterTooltip = computed(() => {
		return isFeatureEnabled() && !hasTooltipBeenDismissed.value;
	});
	function markResourceCenterTooltipDismissed() {
		hasTooltipBeenDismissed.value = true;
		localStorage.setItem(TOOLTIP_STORAGE_KEY, "true");
	}
	function trackResourceCenterTooltipView() {
		telemetry.track("User viewed resource center tooltip");
	}
	function trackResourceCenterTooltipDismiss() {
		telemetry.track("User dismissed resource center tooltip");
	}
	async function fetchTemplateById(templateId) {
		try {
			return await templatesStore.fetchTemplateById(templateId.toString());
		} catch (error) {
			console.error(`Failed to fetch template ${templateId}:`, error);
			return null;
		}
	}
	async function loadTemplates(templateIds) {
		isLoadingTemplates.value = true;
		try {
			const promises = templateIds.map(async (id) => await fetchTemplateById(id));
			return (await Promise.allSettled(promises)).filter((result) => result.status === "fulfilled" && result.value !== null).map((result) => result.value);
		} finally {
			isLoadingTemplates.value = false;
		}
	}
	function getTemplateRoute(id) {
		return {
			name: VIEWS.TEMPLATE,
			params: { id }
		};
	}
	function trackResourceCenterView() {
		telemetry.track("User visited resource center");
	}
	function trackSectionView(section) {
		telemetry.track("User visited resource center section", { section });
	}
	function trackTileClick(section, type, id) {
		telemetry.track("User clicked on resource center tile", {
			section,
			type,
			id
		});
	}
	function trackTemplateRepoVisit() {
		telemetry.track("User visited template repo", { source: "resource_center" });
	}
	async function createAndOpenQuickStartWorkflow(quickStartId) {
		const quickStart = quickStartWorkflows.find((w) => w.id === quickStartId);
		if (!quickStart) return;
		if (readyToRunStore.userCanClaimOpenAiCredits) await readyToRunStore.claimFreeAiCredits();
		let workflowToCreate = {
			...quickStart.workflow,
			name: quickStart.name
		};
		const credentialId = localStorage.getItem(LOCAL_STORAGE_CREDENTIAL_KEY);
		if (credentialId && workflowToCreate.nodes) {
			const clonedWorkflow = deepCopy(workflowToCreate);
			const openAiNode = clonedWorkflow.nodes?.find((node) => node.name === "OpenAI Model");
			if (openAiNode) {
				openAiNode.credentials ??= {};
				openAiNode.credentials[OPEN_AI_API_CREDENTIAL_TYPE] = {
					id: credentialId,
					name: ""
				};
			}
			workflowToCreate = clonedWorkflow;
		}
		const createdWorkflow = await workflowsStore.createNewWorkflow(workflowToCreate);
		await router.push({
			name: VIEWS.WORKFLOW,
			params: { name: createdWorkflow.id }
		});
	}
	const trackExperimentParticipation = () => {
		const variant = posthogStore.getVariant(RESOURCE_CENTER_EXPERIMENT.name);
		if (variant) telemetry.track("User is part of experiment", {
			name: RESOURCE_CENTER_EXPERIMENT.name,
			variant
		});
	};
	let hasTrackedExperiment = false;
	watch(() => isFeatureEnabled(), (enabled) => {
		if (enabled && !hasTrackedExperiment) {
			hasTrackedExperiment = true;
			trackExperimentParticipation();
		}
	}, { immediate: true });
	return {
		isFeatureEnabled,
		getCurrentVariant,
		isLoadingTemplates,
		shouldShowResourceCenterTooltip,
		fetchTemplateById,
		loadTemplates,
		getTemplateRoute,
		createAndOpenQuickStartWorkflow,
		markResourceCenterTooltipDismissed,
		trackResourceCenterView,
		trackResourceCenterTooltipView,
		trackResourceCenterTooltipDismiss,
		trackSectionView,
		trackTileClick,
		trackTemplateRepoVisit
	};
});
export { quickStartWorkflows as n, useResourceCenterStore as t };
