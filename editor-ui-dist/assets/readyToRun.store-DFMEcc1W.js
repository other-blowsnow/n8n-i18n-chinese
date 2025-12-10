import { C as computed, It as ref, Pt as reactive } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import { gt as useI18n, j as useLocalStorage } from "./_MapCache-rO6uEnTT.js";
import { b as useRouter, y as useRoute } from "./truncate-CPi3sVRm.js";
import { Ho as useSettingsStore, Ht as useCredentialsStore, i as usePostHog, nr as useUsersStore, o as useWorkflowsStore, oc as STORES, t as useTelemetry } from "./useTelemetry-R6FQLszn.js";
import { t as useToast } from "./useToast-Cef3MX8Y.js";
import { Po as VIEWS, Ta as deepCopy, ac as READY_TO_RUN_V2_PART2_EXPERIMENT, lo as OPEN_AI_API_CREDENTIAL_TYPE } from "./constants-BP6a478f.js";
import { k as defineStore } from "./_baseOrderBy-LpH21c0I.js";
import { t as useCloudPlanStore } from "./cloudPlan.store-C1bMcQvt.js";
import { t as useFoldersStore } from "./folders.store-6krQVLs7.js";
const READY_TO_RUN_AI_WORKFLOW = {
	name: "AI Agent workflow",
	meta: { templateId: "ready-to-run-ai-workflow" },
	nodes: [
		{
			parameters: {
				url: "https://www.theverge.com/rss/index.xml",
				options: {}
			},
			type: "n8n-nodes-base.rssFeedReadTool",
			typeVersion: 1.2,
			position: [-16, 768],
			id: "303e9b4e-cc4e-4d8a-8ede-7550f070d212",
			name: "Get Tech News"
		},
		{
			parameters: {
				toolDescription: "Reads the news",
				url: "=https://feeds.bbci.co.uk/news/world/rss.xml",
				options: {}
			},
			type: "n8n-nodes-base.rssFeedReadTool",
			typeVersion: 1.2,
			position: [112, 768],
			id: "4090a753-f131-40b1-87c3-cf74d5a7e325",
			name: "Get World News"
		},
		{
			parameters: { rule: { interval: [{ triggerAtHour: 7 }] } },
			type: "n8n-nodes-base.scheduleTrigger",
			typeVersion: 1.2,
			position: [-560, 752],
			id: "651543b5-0213-433f-8760-57d62b8d6d64",
			name: "Run every day at 7AM",
			notesInFlow: true,
			notes: "Double-click to open"
		},
		{
			parameters: {
				assignments: { assignments: [{
					id: "85b5c530-2c13-4424-ab83-05979bc879a5",
					name: "output",
					value: "={{ $json.output }}",
					type: "string"
				}] },
				options: {}
			},
			type: "n8n-nodes-base.set",
			typeVersion: 3.4,
			position: [160, 544],
			id: "99f7bb9e-f8c0-43ca-a9a8-a76634ac9611",
			name: "Output",
			notesInFlow: true,
			notes: "Double-click to open"
		},
		{
			parameters: {},
			type: "n8n-nodes-base.manualTrigger",
			typeVersion: 1,
			position: [-560, 544],
			id: "a0390291-6794-4673-9a6a-5c3d3a5d9e4b",
			name: "Click ‘Execute workflow’ to run"
		},
		{
			parameters: {
				content: "## ⚡ Start here:",
				height: 224,
				width: 224,
				color: 7
			},
			type: "n8n-nodes-base.stickyNote",
			typeVersion: 1,
			position: [-624, 480],
			id: "fac5929f-e065-4474-96b1-7bcc06834238",
			name: "Sticky Note"
		},
		{
			parameters: {
				model: {
					__rl: true,
					mode: "list",
					value: "gpt-4.1-mini"
				},
				options: {}
			},
			type: "@n8n/n8n-nodes-langchain.lmChatOpenAi",
			typeVersion: 1.2,
			position: [-272, 768],
			id: "b16482e8-0d48-4426-aa93-c3fee11dd3cd",
			name: "OpenAI Model",
			notesInFlow: true,
			credentials: {},
			notes: "Double-click to open"
		},
		{
			parameters: {
				content: "@[youtube](cMyOkQ4N-5M)",
				height: 512,
				width: 902,
				color: 7
			},
			type: "n8n-nodes-base.stickyNote",
			typeVersion: 1,
			position: [-352, -96],
			id: "ec65e69e-77fa-4912-a4af-49e0a248e2c8",
			name: "Sticky Note3"
		},
		{
			parameters: {
				promptType: "define",
				text: "=Summarize world news and tech news from the last 24 hours. \nSkip your comments. \nThe titles should be \"World news:\" and \"Tech news:\" \nToday is {{ $today }}",
				options: {}
			},
			type: "@n8n/n8n-nodes-langchain.agent",
			typeVersion: 2.2,
			position: [-272, 544],
			id: "084d56aa-d157-4964-9073-b36d9d9589c5",
			name: "AI Summary Agent",
			notesInFlow: true,
			notes: "Double-click to open"
		},
		{
			parameters: {
				content: "### Double click here to see the results:",
				height: 240,
				width: 192,
				color: 7
			},
			type: "n8n-nodes-base.stickyNote",
			typeVersion: 1,
			position: [112, 464],
			id: "a4b7a69a-0db8-4b9b-a81d-fd83378043a3",
			name: "Sticky Note1"
		},
		{
			parameters: {
				content: "### 📰 Daily AI Summary\n\n\nThis workflow gets the latest news and asks AI to summarize it for you.\n\n⭐ Bonus: Send the summary via email by connecting your Gmail account\n\n▶ Watch the video to get started ",
				height: 272,
				width: 224,
				color: 5
			},
			type: "n8n-nodes-base.stickyNote",
			typeVersion: 1,
			position: [-624, 32],
			id: "74d80857-5e63-47a8-8e86-8ecd10fd5f9e",
			name: "Sticky Note2"
		},
		{
			parameters: {
				subject: "Your news daily summary",
				emailType: "text",
				message: "={{ $json.output }}",
				options: {}
			},
			type: "n8n-nodes-base.gmail",
			typeVersion: 2.1,
			position: [432, 544],
			id: "45625d0d-bf26-4379-9eed-7bbc8e5d87a5",
			name: "Send summary by email",
			webhookId: "093b04f1-5e78-4926-9863-1b100d6f2ead",
			notesInFlow: true,
			credentials: {},
			notes: "Double-click to open"
		}
	],
	connections: {
		"Get Tech News": { ai_tool: [[{
			node: "AI Summary Agent",
			type: "ai_tool",
			index: 0
		}]] },
		"Get World News": { ai_tool: [[{
			node: "AI Summary Agent",
			type: "ai_tool",
			index: 0
		}]] },
		"Run every day at 7AM": { main: [[{
			node: "AI Summary Agent",
			type: "main",
			index: 0
		}]] },
		"Click ‘Execute workflow’ to run": { main: [[{
			node: "AI Summary Agent",
			type: "main",
			index: 0
		}]] },
		"OpenAI Model": { ai_languageModel: [[{
			node: "AI Summary Agent",
			type: "ai_languageModel",
			index: 0
		}]] },
		"AI Summary Agent": { main: [[{
			node: "Output",
			type: "main",
			index: 0
		}]] },
		Output: { main: [[]] }
	},
	pinData: {}
};
const useProjectPages = () => {
	const route = useRoute();
	const isProjectsSubPage = computed(() => route.params?.projectId !== void 0);
	return reactive({
		isOverviewSubPage: computed(() => route.params?.projectId === void 0),
		isSharedSubPage: computed(() => route.name === VIEWS.SHARED_WITH_ME || route.name === VIEWS.SHARED_WORKFLOWS || route.name === VIEWS.SHARED_CREDENTIALS),
		isProjectsSubPage
	});
};
function useEmptyStateDetection() {
	const foldersStore = useFoldersStore();
	const projectPages = useProjectPages();
	const route = useRoute();
	const isTrulyEmpty = (currentRoute = route) => {
		const hasNoWorkflows = foldersStore.workflowsCountLoaded && foldersStore.totalWorkflowCount === 0;
		const isNotInSpecificFolder = !currentRoute.params?.folderId;
		const isMainWorkflowsPage = projectPages.isOverviewSubPage;
		const hasSearchQuery = !!currentRoute.query?.search;
		const hasFilters = !!(currentRoute.query?.status || currentRoute.query?.tags || currentRoute.query?.showArchived || currentRoute.query?.homeProject);
		return hasNoWorkflows && isNotInSpecificFolder && isMainWorkflowsPage && !hasSearchQuery && !hasFilters;
	};
	return { isTrulyEmpty };
}
const READY_TO_RUN_WORKFLOW_V3 = {
	name: "AI Agent workflow",
	meta: { templateId: "ready-to-run-ai-workflow-v3" },
	nodes: [
		{
			parameters: {
				url: "https://www.theverge.com/rss/index.xml",
				options: {}
			},
			type: "n8n-nodes-base.rssFeedReadTool",
			typeVersion: 1.2,
			position: [128, 448],
			id: "7febc10d-90ce-4329-90fb-a9a2ca0185c4",
			name: "Get Tech News"
		},
		{
			parameters: {
				toolDescription: "Reads the news",
				url: "=https://feeds.bbci.co.uk/news/world/rss.xml",
				options: {}
			},
			type: "n8n-nodes-base.rssFeedReadTool",
			typeVersion: 1.2,
			position: [272, 448],
			id: "9424428d-45e2-4085-99f6-ee223802ba5a",
			name: "Get World News"
		},
		{
			parameters: {
				model: {
					__rl: true,
					mode: "list",
					value: "gpt-4.1-mini"
				},
				options: {}
			},
			type: "@n8n/n8n-nodes-langchain.lmChatOpenAi",
			typeVersion: 1.2,
			position: [-144, 448],
			id: "a4fcf631-d3d9-4c4d-9e7b-02c93e70b23f",
			name: "OpenAI Model",
			notesInFlow: true,
			credentials: {},
			notes: "Free n8n credits "
		},
		{
			parameters: {
				promptType: "define",
				text: "=Summarize world news and tech news from the last 24 hours. \nSkip your comments. \nThe titles should be \"World news:\" and \"Tech news:\" \nLimit to 10 bullet points. \nToday is {{ $today }}",
				options: {}
			},
			type: "@n8n/n8n-nodes-langchain.agent",
			typeVersion: 2.2,
			position: [-144, 192],
			id: "99bed296-3855-4d89-b983-f30539cfa775",
			name: "AI Summary Agent",
			notesInFlow: true,
			notes: "Double-click to open"
		},
		{
			parameters: {
				content: "### ✅ This test workflow is ready to use:\nHover over here and click the orange \"Execute workflow\" button below.\n",
				height: 240,
				width: 400,
				color: 5
			},
			type: "n8n-nodes-base.stickyNote",
			typeVersion: 1,
			position: [-672, 112],
			id: "e664273f-63c6-4f12-804a-0fcd99c294cb",
			name: "Sticky Note2"
		},
		{
			parameters: {
				subject: "Your news daily summary",
				emailType: "text",
				message: "={{ $json.output }}",
				options: {}
			},
			type: "n8n-nodes-base.gmail",
			typeVersion: 2.1,
			position: [688, 192],
			id: "d0e843dc-c398-4d32-8c56-0bf83176add3",
			name: "Send summary with Gmail",
			webhookId: "99bdd654-5c17-4ba1-b091-3d726e56f88d",
			notesInFlow: true,
			notes: "Double-click to open"
		},
		{
			parameters: {},
			type: "n8n-nodes-base.manualTrigger",
			typeVersion: 1,
			position: [-432, 192],
			id: "e6618880-9281-4d92-91ff-c9a000429b7d",
			name: "Manual execution"
		},
		{
			parameters: {
				content: "###  Bonus (optional)\nConnect the `Output (News Summary)` to the node below, add your Google account info, and send the News summary by email.",
				height: 112,
				width: 384,
				color: 7
			},
			type: "n8n-nodes-base.stickyNote",
			typeVersion: 1,
			position: [544, 16],
			id: "5e33fbe1-1971-48f8-81c7-08bd32e24aca",
			name: "Sticky Note"
		},
		{
			parameters: {
				assignments: { assignments: [{
					id: "85b5c530-2c13-4424-ab83-05979bc879a5",
					name: "output",
					value: "={{ $json.output }}",
					type: "string"
				}] },
				options: {}
			},
			type: "n8n-nodes-base.set",
			typeVersion: 3.4,
			position: [256, 192],
			id: "f0a79856-ddcf-404b-95a7-a9bf882697ff",
			name: "Output (News summary)",
			notesInFlow: true,
			notes: "Double-click to open"
		}
	],
	connections: {
		"Get Tech News": { ai_tool: [[{
			node: "AI Summary Agent",
			type: "ai_tool",
			index: 0
		}]] },
		"Get World News": { ai_tool: [[{
			node: "AI Summary Agent",
			type: "ai_tool",
			index: 0
		}]] },
		"OpenAI Model": { ai_languageModel: [[{
			node: "AI Summary Agent",
			type: "ai_languageModel",
			index: 0
		}]] },
		"AI Summary Agent": { main: [[{
			node: "Output (News summary)",
			type: "main",
			index: 0
		}]] },
		"Manual execution": { main: [[{
			node: "AI Summary Agent",
			type: "main",
			index: 0
		}]] },
		"Output (News summary)": { main: [[]] }
	},
	pinData: {}
};
const READY_TO_RUN_WORKFLOW_V4 = {
	name: "AI Agent workflow",
	meta: { templateId: "ready-to-run-ai-workflow-v4" },
	nodes: [
		{
			parameters: {
				url: "https://www.theverge.com/rss/index.xml",
				options: {}
			},
			type: "n8n-nodes-base.rssFeedReadTool",
			typeVersion: 1.2,
			position: [288, 160],
			id: "6160830b-4f20-437c-b1a2-586bffe62d66",
			name: "Get Tech News"
		},
		{
			parameters: {
				toolDescription: "Reads the news",
				url: "=https://feeds.bbci.co.uk/news/world/rss.xml",
				options: {}
			},
			type: "n8n-nodes-base.rssFeedReadTool",
			typeVersion: 1.2,
			position: [416, 160],
			id: "4f8ae14c-8c6a-4cf8-b51b-99af6bd23ed1",
			name: "Get World News"
		},
		{
			parameters: {
				model: {
					__rl: true,
					mode: "list",
					value: "gpt-4.1-mini"
				},
				options: {}
			},
			type: "@n8n/n8n-nodes-langchain.lmChatOpenAi",
			typeVersion: 1.2,
			position: [32, 160],
			id: "95986360-8ca1-4b8a-af7e-f101e89e3654",
			name: "OpenAI Model",
			notesInFlow: true,
			credentials: {},
			notes: "Free n8n credits "
		},
		{
			parameters: {
				promptType: "define",
				text: "=Summarize world news and tech news from the last 24 hours. \nSkip your comments. \nThe titles should be \"World news:\" and \"Tech news:\" \nLimit to 10 bullet points. \nToday is {{ $today }}",
				options: {}
			},
			type: "@n8n/n8n-nodes-langchain.agent",
			typeVersion: 2.2,
			position: [32, -64],
			id: "d36975bc-d51f-472f-a51f-f6c745b29a8d",
			name: "AI Summary Agent",
			notesInFlow: true,
			notes: "Double-click to open"
		},
		{
			parameters: {
				content: "### ✅ This test workflow is ready to use \n\n1. Click the orange \"Execute workflow\" button\n\n2. Watch the workflow get the latest news and summarize it with AI \n\n3. (Bonus) Connect the `Gmail node` to the workflow to send the summary via email\n\n",
				height: 256,
				width: 352,
				color: 7
			},
			type: "n8n-nodes-base.stickyNote",
			typeVersion: 1,
			position: [-832, -128],
			id: "13abc1af-da4a-427d-8cc4-e260dff43307",
			name: "Sticky Note2"
		},
		{
			parameters: {
				content: "[![Learn to use an AI Agent in your workflow](https://n8niostorageaccount.blob.core.windows.net/n8nio-strapi-blobs-prod/assets/thumb_2e91cdcea1.png)](https://www.youtube.com/watch?v=cMyOkQ4N-5M \"Watch on YouTube\")\n",
				height: 208,
				width: 352,
				color: 7
			},
			type: "n8n-nodes-base.stickyNote",
			typeVersion: 1,
			position: [-832, 160],
			id: "e0e15104-1954-43b9-b748-0ff8441f6aeb",
			name: "Sticky Note"
		},
		{
			parameters: {
				assignments: { assignments: [{
					id: "85b5c530-2c13-4424-ab83-05979bc879a5",
					name: "output",
					value: "={{ $json.output }}",
					type: "string"
				}] },
				options: {}
			},
			type: "n8n-nodes-base.set",
			typeVersion: 3.4,
			position: [464, -64],
			id: "bef94b0a-b2aa-42f6-85bb-2e23f530d799",
			name: "Output (News Summary)",
			notesInFlow: true,
			notes: "Double-click to open"
		},
		{
			parameters: {},
			type: "n8n-nodes-base.manualTrigger",
			typeVersion: 1,
			position: [-256, -64],
			id: "55cb3e43-b73c-48cb-b420-dd618de68a58",
			name: "Execute workflow"
		},
		{
			parameters: {
				subject: "Your news daily summary",
				emailType: "text",
				message: "={{ $json.output }}",
				options: {}
			},
			type: "n8n-nodes-base.gmail",
			typeVersion: 2.1,
			position: [768, -64],
			id: "e74f8dac-d766-4f4d-91f3-36604a2d4e7a",
			name: "Send summary with Gmail",
			webhookId: "093b04f1-5e78-4926-9863-1b100d6f2ead",
			notesInFlow: true,
			notes: "Double-click to open"
		}
	],
	connections: {
		"Get Tech News": { ai_tool: [[{
			node: "AI Summary Agent",
			type: "ai_tool",
			index: 0
		}]] },
		"Get World News": { ai_tool: [[{
			node: "AI Summary Agent",
			type: "ai_tool",
			index: 0
		}]] },
		"OpenAI Model": { ai_languageModel: [[{
			node: "AI Summary Agent",
			type: "ai_languageModel",
			index: 0
		}]] },
		"AI Summary Agent": { main: [[{
			node: "Output (News Summary)",
			type: "main",
			index: 0
		}]] },
		"Output (News Summary)": { main: [[]] },
		"Execute workflow": { main: [[{
			node: "AI Summary Agent",
			type: "main",
			index: 0
		}]] }
	},
	pinData: {}
};
const useReadyToRunWorkflowsV2Store = defineStore(STORES.EXPERIMENT_READY_TO_RUN_WORKFLOWS_V2, () => {
	const posthogStore = usePostHog();
	const cloudPlanStore = useCloudPlanStore();
	const currentVariant = computed(() => posthogStore.getVariant(READY_TO_RUN_V2_PART2_EXPERIMENT.name));
	const isVariant3 = computed(() => currentVariant.value === READY_TO_RUN_V2_PART2_EXPERIMENT.variant3);
	const isVariant4 = computed(() => currentVariant.value === READY_TO_RUN_V2_PART2_EXPERIMENT.variant4);
	const isFeatureEnabled = computed(() => cloudPlanStore.userIsTrialing && (isVariant3.value || isVariant4.value));
	const getWorkflowForVariant = () => {
		if (!isFeatureEnabled.value) return;
		if (isVariant3.value) return READY_TO_RUN_WORKFLOW_V3;
		if (isVariant4.value) return READY_TO_RUN_WORKFLOW_V4;
	};
	return {
		currentVariant,
		getWorkflowForVariant,
		isFeatureEnabled
	};
});
var LOCAL_STORAGE_CREDENTIAL_KEY = "N8N_READY_TO_RUN_OPENAI_CREDENTIAL_ID";
const useReadyToRunStore = defineStore(STORES.READY_TO_RUN, () => {
	const telemetry = useTelemetry();
	const i18n = useI18n();
	const toast = useToast();
	const router = useRouter();
	const credentialsStore = useCredentialsStore();
	const usersStore = useUsersStore();
	const settingsStore = useSettingsStore();
	const workflowsStore = useWorkflowsStore();
	const readyToRunWorkflowsV2Store = useReadyToRunWorkflowsV2Store();
	const claimedCredentialIdRef = useLocalStorage(LOCAL_STORAGE_CREDENTIAL_KEY, "");
	const claimingCredits = ref(false);
	const userHasOpenAiCredentialAlready = computed(() => !!credentialsStore.allCredentials.filter((credential) => credential.type === OPEN_AI_API_CREDENTIAL_TYPE).length);
	const userHasClaimedAiCreditsAlready = computed(() => !!usersStore.currentUser?.settings?.userClaimedAiCredits);
	const userCanClaimOpenAiCredits = computed(() => {
		return settingsStore.isAiCreditsEnabled && !userHasOpenAiCredentialAlready.value && !userHasClaimedAiCreditsAlready.value;
	});
	const trackExecuteAiWorkflow = (status) => {
		telemetry.track("User executed ready to run AI workflow", { status });
	};
	const trackExecuteAiWorkflowSuccess = () => {
		telemetry.track("User executed ready to run AI workflow successfully");
	};
	const claimFreeAiCredits = async (projectId) => {
		claimingCredits.value = true;
		try {
			const credential = await credentialsStore.claimFreeAiCredits(projectId);
			claimedCredentialIdRef.value = credential.id;
			telemetry.track("User claimed OpenAI credits");
			return credential;
		} catch (e) {
			toast.showError(e, i18n.baseText("freeAi.credits.showError.claim.title"), i18n.baseText("freeAi.credits.showError.claim.message"));
			throw e;
		} finally {
			claimingCredits.value = false;
		}
	};
	const getReadyToRunWorkflowTemplate = () => {
		return readyToRunWorkflowsV2Store.getWorkflowForVariant() ?? READY_TO_RUN_AI_WORKFLOW;
	};
	const createAndOpenAiWorkflow = async (source, parentFolderId) => {
		telemetry.track("User opened ready to run AI workflow", { source });
		try {
			let workflowToCreate = {
				...getReadyToRunWorkflowTemplate(),
				parentFolderId
			};
			const credentialId = claimedCredentialIdRef.value;
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
			return createdWorkflow;
		} catch (error) {
			toast.showError(error, i18n.baseText("generic.error"));
			throw error;
		}
	};
	const claimCreditsAndOpenWorkflow = async (source, parentFolderId, projectId) => {
		await claimFreeAiCredits(projectId);
		await createAndOpenAiWorkflow(source, parentFolderId);
		if (usersStore?.currentUser?.settings) usersStore.currentUser.settings.userClaimedAiCredits = true;
	};
	const getCardVisibility = (canCreate, readOnlyEnv) => {
		return userCanClaimOpenAiCredits.value && !readOnlyEnv && canCreate;
	};
	const getButtonVisibility = (hasWorkflows, canCreate, readOnlyEnv) => {
		return userCanClaimOpenAiCredits.value && !readOnlyEnv && canCreate && hasWorkflows;
	};
	const { isTrulyEmpty } = useEmptyStateDetection();
	const getSimplifiedLayoutVisibility = (route) => {
		return isTrulyEmpty(route);
	};
	return {
		claimingCredits,
		userCanClaimOpenAiCredits,
		claimFreeAiCredits,
		createAndOpenAiWorkflow,
		claimCreditsAndOpenWorkflow,
		getCardVisibility,
		getButtonVisibility,
		getSimplifiedLayoutVisibility,
		trackExecuteAiWorkflow,
		trackExecuteAiWorkflowSuccess
	};
});
export { useProjectPages as n, useReadyToRunStore as t };
