import { C as computed, It as ref, Pt as reactive } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { M as useLocalStorage, yt as useI18n } from "./_MapCache-8-eqnC2S.js";
import { Lt as useRoute, Rt as useRouter } from "./src-Cq27d_Gp.js";
import { Er as usePostHog, Nt as useTelemetry, fs as useSettingsStore, hr as useToast, ir as useCloudPlanStore, rt as useCredentialsStore, s as useWorkflowsStore, t as useUsersStore, xc as STORES } from "./users.store-qBZsmf9-.js";
import { Ec as READY_TO_RUN_V2_P3_EXPERIMENT, Pa as deepCopy, Xo as VIEWS, bo as OPEN_AI_API_CREDENTIAL_TYPE } from "./constants-Cyrg9Nbl.js";
import { A as defineStore } from "./_baseOrderBy-3Uh8XZv3.js";
import { t as useFoldersStore } from "./folders.store-B29vIVJe.js";
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
const READY_TO_RUN_WORKFLOW_V5 = {
	name: "Chat with the news",
	meta: { templateId: "ready-to-run-ai-workflow-v5" },
	settings: { executionOrder: "v1" },
	nodes: [
		{
			parameters: { options: {} },
			type: "@n8n/n8n-nodes-langchain.chatTrigger",
			typeVersion: 1.4,
			position: [288, 0],
			id: "261ee04a-4695-4d1a-bec3-9f86b5efd5eb",
			name: "When chat message received",
			webhookId: "b567d98b-aabb-4963-b0f8-6b1e8b5f8959"
		},
		{
			parameters: {
				model: {
					__rl: true,
					mode: "list",
					value: "gpt-4.1-mini"
				},
				responsesApiEnabled: false,
				options: {}
			},
			type: "@n8n/n8n-nodes-langchain.lmChatOpenAi",
			typeVersion: 1.3,
			position: [400, 288],
			id: "201ee441-da46-49fc-befa-312ad4b60479",
			name: "OpenAI Model",
			credentials: {}
		},
		{
			parameters: {},
			type: "@n8n/n8n-nodes-langchain.memoryBufferWindow",
			typeVersion: 1.3,
			position: [576, 288],
			id: "aa874554-17b1-41a1-9e1f-8c6c197e7e2f",
			name: "Simple Memory"
		},
		{
			parameters: {
				url: "https://hnrss.org/frontpage",
				options: {}
			},
			type: "n8n-nodes-base.rssFeedReadTool",
			typeVersion: 1.2,
			position: [1120, 288],
			id: "5788980c-2a63-40ed-a375-c68ca7a3b9c0",
			name: "Hackernews"
		},
		{
			parameters: {
				url: "https://www.theverge.com/rss/index.xml",
				options: {}
			},
			type: "n8n-nodes-base.rssFeedReadTool",
			typeVersion: 1.2,
			position: [960, 288],
			id: "f250ef18-d913-4a76-a607-b1eeebcbab23",
			name: "TheVerge"
		},
		{
			parameters: {
				url: "https://feeds.bbci.co.uk/news/rss.xml",
				options: {}
			},
			type: "n8n-nodes-base.rssFeedReadTool",
			typeVersion: 1.2,
			position: [800, 288],
			id: "0c375d2e-4b2d-4fa6-8b3e-31ac931117cb",
			name: "BBC News"
		},
		{
			parameters: {
				content: "✅ This AI News agent is ready to use. Chat with it! \n✨ We gave you free OpenAI credits\n💡 Learn [how to build](https://n8n.io/workflows/6270-build-your-first-ai-agent/) your own agent  ",
				height: 80,
				width: 448,
				color: 4
			},
			type: "n8n-nodes-base.stickyNote",
			typeVersion: 1,
			position: [0, -176],
			id: "052068ba-ea50-4521-9946-63ded13b23b0",
			name: "Sticky Note2"
		},
		{
			parameters: { options: { systemMessage: "=News Agent\n\n# Role\n\nYou are a concise, factual news assistant with access to these RSS tools:\n\n* BBC (Global news)\n* TheVerge (Consumer tech)\n* Hacker News (Tech discussions)\n\nYou always keep replies **short and focused (maximum 100 words total)**.\n\n# Behavior\n\n* On the first message only, greet the user and say you can search recent news.\n* When the user asks for news, always check all RSS tools and combine results from multiple feeds if relevant, but surface only the **top 1 to 5 most relevant items**.\n* Never invent information. Only use content found in the tools.\n\n# Answer Format\n\n* **Maximum 100 words per reply** (including any follow-up sentence).\n* Start with **one short intro sentence**.\n* Then provide **3–5 bullet points**, each a **single short sentence**.\n* Use short, clear sentences.\n* Add a link to the original article or source in at least one bullet.\n* Include a section **“Sources checked:”** listing the feeds used (e.g., “Sources checked: BBC, TheVerge”).\n\n# Edge Cases\n\n* If you find too little information, say so and suggest adding more news sources to the agent.\n* If the user asks you to build workflows or do non-news tasks, say you are only a news agent and point them to n8n’s AI Workflow Builder (✨ icon) and the docs: [https://docs.n8n.io/advanced-ai/ai-workflow-builder/](https://docs.n8n.io/advanced-ai/ai-workflow-builder/)\n* If the user asks for opinions or predictions, stay neutral and summarize facts only.\n* After sharing news results with the user for the first time, mention that they can also get AI-summarized news by email using this template: https://n8n.io/workflows/6270-build-your-first-ai-agent/. Only make this suggestion once in the entire chat history, not after every question (check your previous responses to make sure you don't repeat the suggestion).\n\n# Date\n\nToday is {{ $today }}\n" } },
			type: "@n8n/n8n-nodes-langchain.agent",
			typeVersion: 3,
			position: [608, 0],
			id: "e481d1a1-3a3d-4583-98ae-87a9b39471a8",
			name: "AI Agent"
		}
	],
	pinData: {},
	connections: {
		"When chat message received": { main: [[{
			node: "AI Agent",
			type: "main",
			index: 0
		}]] },
		"OpenAI Model": { ai_languageModel: [[{
			node: "AI Agent",
			type: "ai_languageModel",
			index: 0
		}]] },
		"Simple Memory": { ai_memory: [[{
			node: "AI Agent",
			type: "ai_memory",
			index: 0
		}]] },
		Hackernews: { ai_tool: [[{
			node: "AI Agent",
			type: "ai_tool",
			index: 0
		}]] },
		TheVerge: { ai_tool: [[{
			node: "AI Agent",
			type: "ai_tool",
			index: 0
		}]] },
		"BBC News": { ai_tool: [[{
			node: "AI Agent",
			type: "ai_tool",
			index: 0
		}]] }
	}
};
const READY_TO_RUN_WORKFLOW_V6 = {
	name: "Chat with the news",
	meta: { templateId: "ready-to-run-ai-workflow-v6" },
	settings: { executionOrder: "v1" },
	nodes: [
		{
			parameters: { options: {} },
			type: "@n8n/n8n-nodes-langchain.chatTrigger",
			typeVersion: 1.4,
			position: [-160, 64],
			id: "6f4d9435-be4c-48a6-89a2-9a24cdf68d40",
			name: "When chat message received",
			webhookId: "b567d98b-aabb-4963-b0f8-6b1e8b5f8959"
		},
		{
			parameters: {
				model: {
					__rl: true,
					mode: "list",
					value: "gpt-4.1-mini"
				},
				responsesApiEnabled: false,
				options: {}
			},
			type: "@n8n/n8n-nodes-langchain.lmChatOpenAi",
			typeVersion: 1.3,
			position: [-16, 384],
			id: "f9b6e5c5-36d1-415f-9c5c-79fb79787207",
			name: "OpenAI Model",
			credentials: {}
		},
		{
			parameters: {},
			type: "@n8n/n8n-nodes-langchain.memoryBufferWindow",
			typeVersion: 1.3,
			position: [160, 384],
			id: "81e7b833-c47b-44f7-950d-8d035fcb2205",
			name: "Simple Memory"
		},
		{
			parameters: {
				url: "https://hnrss.org/frontpage",
				options: {}
			},
			type: "n8n-nodes-base.rssFeedReadTool",
			typeVersion: 1.2,
			position: [432, 384],
			id: "3677c36a-813b-407b-9fdc-38565c6f73e9",
			name: "Hackernews"
		},
		{
			parameters: {
				url: "https://www.theverge.com/rss/index.xml",
				options: {}
			},
			type: "n8n-nodes-base.rssFeedReadTool",
			typeVersion: 1.2,
			position: [592, 384],
			id: "e1eaf4ea-0a02-44fd-b0c8-13505ad5bd22",
			name: "TheVerge"
		},
		{
			parameters: {
				url: "https://feeds.bbci.co.uk/news/rss.xml",
				options: {}
			},
			type: "n8n-nodes-base.rssFeedReadTool",
			typeVersion: 1.2,
			position: [752, 384],
			id: "ee0b9c96-e66d-47e3-9122-0ca998caf687",
			name: "BBC News"
		},
		{
			parameters: {
				content: "✅ This AI News agent is ready to use. Chat with it! \n✨ We gave you free OpenAI credits\n💡 Next: [Connect a Google Sheet](https://n8n.io/workflows/7639-talk-to-your-google-sheets-using-chatgpt-5/) to chat with your data",
				height: 80,
				width: 448,
				color: 4
			},
			type: "n8n-nodes-base.stickyNote",
			typeVersion: 1,
			position: [-416, -112],
			id: "99944422-2269-4952-bd31-715ec0eb5bb4",
			name: "Sticky Note2"
		},
		{
			parameters: {
				documentId: {
					__rl: true,
					mode: "list",
					value: ""
				},
				sheetName: {
					__rl: true,
					mode: "list",
					value: ""
				}
			},
			type: "n8n-nodes-base.googleSheetsTool",
			typeVersion: 4.7,
			position: [896, 384],
			id: "fc10c8a7-6621-4e7d-937f-6cb1e03bc057",
			name: "Google Sheets",
			credentials: {}
		},
		{
			parameters: { options: { systemMessage: "=News Agent\n\n# Role\n\nYou are a concise, factual news assistant with access to these RSS tools:\n\n* BBC (Global news)\n* TheVerge (Consumer tech)\n* Hacker News (Tech discussions)\n\nYou always keep replies **short and focused (maximum 100 words total)**.\n\n# Behavior\n\n* On the first message only, greet the user and say you can search recent news.\n* When the user asks for news, always check all RSS tools and combine results from multiple feeds if relevant, but surface only the **top 1 - 5 most relevant items**.\n* Never invent information. Only use content found in the tools.\n\n# Answer Format\n\n* **Maximum 100 words per reply** (including any follow-up sentence).\n* Start with **one short intro sentence**.\n* Then provide **3–5 bullet points**, each a **single short sentence**.\n* Use short, clear sentences.\n* Add a link to the original article or source in at least one bullet.\n\n# Edge Cases\n\n* If you find too little information, say so and suggest adding more news sources to the agent.\n* If the user asks you to build workflows or do non-news tasks, say you are only a news agent and point them to n8n’s AI Workflow Builder (✨ icon) and the docs: [https://docs.n8n.io/advanced-ai/ai-workflow-builder/](https://docs.n8n.io/advanced-ai/ai-workflow-builder/)\n* If the user asks for opinions or predictions, stay neutral and summarize facts only.\n* After sharing news results with the user for the first time, ask the user if they want to connect one of their Google Sheets so that they can chat with their own data. Only make this suggestion once in the entire chat history. If they say yes, provide these instructions:\n\n1. Connect the Google Sheets node to the AI Agent in the same way as the RSS nodes.\n2. Open the Google Sheets node and connect your Google account.\n3. Pick your Spreadsheet and Sheet from the dropdowns.\n\n\n# Date\n\nToday is {{ $today }}\n" } },
			type: "@n8n/n8n-nodes-langchain.agent",
			typeVersion: 3,
			position: [192, 64],
			id: "ce5dd204-b9d3-4455-ab0c-0c2ce314ad52",
			name: "AI Agent"
		}
	],
	pinData: {},
	connections: {
		"When chat message received": { main: [[{
			node: "AI Agent",
			type: "main",
			index: 0
		}]] },
		"OpenAI Model": { ai_languageModel: [[{
			node: "AI Agent",
			type: "ai_languageModel",
			index: 0
		}]] },
		"Simple Memory": { ai_memory: [[{
			node: "AI Agent",
			type: "ai_memory",
			index: 0
		}]] },
		Hackernews: { ai_tool: [[{
			node: "AI Agent",
			type: "ai_tool",
			index: 0
		}]] },
		TheVerge: { ai_tool: [[{
			node: "AI Agent",
			type: "ai_tool",
			index: 0
		}]] },
		"BBC News": { ai_tool: [[{
			node: "AI Agent",
			type: "ai_tool",
			index: 0
		}]] },
		"Google Sheets": { ai_tool: [[]] }
	}
};
const useReadyToRunWorkflowsV2Store = defineStore(STORES.EXPERIMENT_READY_TO_RUN_WORKFLOWS_V2, () => {
	const posthogStore = usePostHog();
	const cloudPlanStore = useCloudPlanStore();
	const currentVariant = computed(() => posthogStore.getVariant(READY_TO_RUN_V2_P3_EXPERIMENT.name));
	const isVariant5 = computed(() => currentVariant.value === READY_TO_RUN_V2_P3_EXPERIMENT.variant5);
	const isVariant6 = computed(() => currentVariant.value === READY_TO_RUN_V2_P3_EXPERIMENT.variant6);
	const isFeatureEnabled = computed(() => cloudPlanStore.userIsTrialing && (isVariant5.value || isVariant6.value));
	const getWorkflowForVariant = () => {
		if (!isFeatureEnabled.value) return;
		if (isVariant5.value) return READY_TO_RUN_WORKFLOW_V5;
		if (isVariant6.value) return READY_TO_RUN_WORKFLOW_V6;
	};
	return {
		currentVariant,
		getWorkflowForVariant,
		isFeatureEnabled
	};
});
var LOCAL_STORAGE_CREDENTIAL_KEY = "N8N_READY_TO_RUN_OPENAI_CREDENTIAL_ID";
const useReadyToRunStore = defineStore(STORES.READY_TO_RUN, () => {
	const READY_TO_RUN_TEMPLATE_IDS = [
		"ready-to-run-ai-workflow",
		"ready-to-run-ai-workflow-v5",
		"ready-to-run-ai-workflow-v6"
	];
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
	const isReadyToRunTemplateId = (templateId) => {
		return !!templateId && READY_TO_RUN_TEMPLATE_IDS.includes(templateId);
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
		trackExecuteAiWorkflowSuccess,
		isReadyToRunTemplateId
	};
});
export { READY_TO_RUN_AI_WORKFLOW as i, READY_TO_RUN_WORKFLOW_V5 as n, useProjectPages as r, useReadyToRunStore as t };
