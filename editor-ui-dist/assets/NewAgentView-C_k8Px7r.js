import { $ as openBlock, E as createElementBlock, N as defineComponent, X as onMounted } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { x as useI18n } from "./_MapCache-Cdnara8G.js";
import { _ as useRouter, g as useRoute } from "./htmlUtils-6WNyAs6s.js";
import { t as useToast } from "./useToast-DazLbRYs.js";
import { $i as v4 } from "./src-CwQD7B26.js";
import { t as useRootStore } from "./useRootStore-BGtY9ILv.js";
import { Fr as PROJECT_AGENTS, hr as AGENTS_LIST_VIEW } from "./constants-BcmmCDkE.js";
import { cn as TELEMETRY_EVENT, n as useTelemetry } from "./posthog.store-CHWQ6Zed.js";
import { r as createAgent } from "./useAgentApi-CJbR9y3b.js";
import { c as INSTANCE_AI_THREAD_VIEW, r as INSTANCE_AI_AGENT_BUILDER_TARGET_METADATA_KEY } from "./constants-TgPJdRaA.js";
import { n as useInstanceAiStore } from "./instanceAi.store-BaYhvuXv.js";
import { d as stashPendingAgentAttachment } from "./useInstanceAiHandoff-BWukizTQ.js";
import { n as upsertProjectAgentsListCache } from "./useProjectAgentsList-C4qMa8rX.js";
//#endregion
//#region src/features/agents/views/NewAgentView.vue
var NewAgentView_default = /* @__PURE__ */ defineComponent({
	__name: "NewAgentView",
	setup(__props) {
		const route = useRoute();
		const router = useRouter();
		const i18n = useI18n();
		const rootStore = useRootStore();
		const telemetry = useTelemetry();
		const toast = useToast();
		const instanceAiStore = useInstanceAiStore();
		onMounted(async () => {
			const projectId = route.query.projectId;
			if (typeof projectId !== "string" || !projectId) {
				const errorMessage = i18n.baseText("agentSelector.createAgentFailed");
				toast.showError(new Error(errorMessage), errorMessage);
				await router.replace({ name: AGENTS_LIST_VIEW });
				return;
			}
			try {
				const agent = await createAgent(rootStore.restApiContext, projectId, i18n.baseText("agents.new.defaultName"));
				upsertProjectAgentsListCache(projectId, agent);
				telemetry.track(TELEMETRY_EVENT.AGENTS.USER_CREATED_AGENT, {
					agent_id: agent.id,
					source: "create_blank"
				});
				const threadId = v4();
				await instanceAiStore.syncThread(threadId, projectId, {
					source: "agent_builder_page",
					origin: "internal",
					sourceContext: { agentId: agent.id }
				});
				await instanceAiStore.updateThreadMetadata(threadId, { [INSTANCE_AI_AGENT_BUILDER_TARGET_METADATA_KEY]: {
					agentId: agent.id,
					projectId,
					name: agent.name
				} });
				stashPendingAgentAttachment(threadId, {
					type: "agent",
					id: agent.id,
					name: agent.name,
					projectId
				});
				await router.replace({
					name: INSTANCE_AI_THREAD_VIEW,
					params: { threadId }
				});
			} catch (error) {
				toast.showError(error, i18n.baseText("agentSelector.createAgentFailed"));
				await router.replace({
					name: PROJECT_AGENTS,
					params: { projectId }
				});
			}
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div");
		};
	}
});
//#endregion
export { NewAgentView_default as default };
