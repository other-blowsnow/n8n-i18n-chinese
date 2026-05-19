import { Ft as ref, S as computed } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { lt as useRouter } from "./src-yoaEB2ny.js";
import { on as usePostHog, rn as useTelemetry, s as useWorkflowsStore } from "./users.store-C7j4ikpF.js";
import { Nc as OPEN_AI_API_CREDENTIAL_TYPE, Wl as RESOURCE_CENTER_EXPERIMENT, Ws as deepCopy, ii as VIEWS } from "./constants-B2-iseoM.js";
import { T as defineStore } from "./useRootStore-CX_m119O.js";
import { t as useTemplatesStore } from "./templates.store-rpl9N29E.js";
import { i as READY_TO_RUN_AI_WORKFLOW, n as READY_TO_RUN_WORKFLOW_V5, t as useReadyToRunStore } from "./readyToRun.store-B6G7sjy9.js";
//#region src/experiments/resourceCenter/data/quickStartWorkflows.ts
var quickStartWorkflows = [{
	id: "chat-with-the-news",
	name: "AI Agent: Chat with the news",
	description: "Chat with an AI agent about the latest news",
	workflow: READY_TO_RUN_WORKFLOW_V5,
	nodeTypes: ["@n8n/n8n-nodes-langchain.chatTrigger", "@n8n/n8n-nodes-langchain.agent"]
}, {
	id: "summarize-the-news",
	name: "AI Workflow: Summarize the news",
	description: "Get AI-powered news summaries from top sources",
	workflow: READY_TO_RUN_AI_WORKFLOW,
	nodeTypes: ["n8n-nodes-base.rssFeedReadTool", "@n8n/n8n-nodes-langchain.agent"]
}];
//#endregion
//#region src/experiments/resourceCenter/stores/resourceCenter.store.ts
var LOCAL_STORAGE_CREDENTIAL_KEY = "N8N_READY_TO_RUN_OPENAI_CREDENTIAL_ID";
var SIDEBAR_AUTO_EXPANDED_KEY = "n8n-resourceCenter-sidebarAutoExpanded";
var useResourceCenterStore = defineStore("resourceCenter", () => {
	const posthogStore = usePostHog();
	const templatesStore = useTemplatesStore();
	const workflowsStore = useWorkflowsStore();
	const readyToRunStore = useReadyToRunStore();
	const telemetry = useTelemetry();
	const router = useRouter();
	const isLoadingTemplates = ref(false);
	const hasSidebarBeenAutoExpanded = ref(localStorage.getItem(SIDEBAR_AUTO_EXPANDED_KEY) === "true");
	const isFeatureEnabled = () => posthogStore.isVariantEnabled(RESOURCE_CENTER_EXPERIMENT.name, RESOURCE_CENTER_EXPERIMENT.variant);
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
	function trackTileClick(section, type, id) {
		telemetry.track("User clicked on resource center tile", {
			section,
			type,
			id
		});
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
			params: { workflowId: createdWorkflow.id }
		});
	}
	const shouldAutoExpandSidebar = computed(() => {
		return isFeatureEnabled() && !hasSidebarBeenAutoExpanded.value;
	});
	function markSidebarAutoExpanded() {
		hasSidebarBeenAutoExpanded.value = true;
		localStorage.setItem(SIDEBAR_AUTO_EXPANDED_KEY, "true");
	}
	return {
		isFeatureEnabled,
		isLoadingTemplates,
		shouldAutoExpandSidebar,
		fetchTemplateById,
		loadTemplates,
		getTemplateRoute,
		createAndOpenQuickStartWorkflow,
		markSidebarAutoExpanded,
		trackResourceCenterView,
		trackTileClick
	};
});
//#endregion
export { quickStartWorkflows as n, useResourceCenterStore as t };
