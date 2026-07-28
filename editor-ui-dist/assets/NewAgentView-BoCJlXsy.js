import { $ as openBlock, E as createElementBlock, N as defineComponent, X as onMounted } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { Z as useI18n } from "./dist-EhQ9PC87.js";
import { Mt as useRouter, jt as useRoute } from "./src-BoCzurIh.js";
import { t as useToast } from "./useToast-HK97wLZ5.js";
import { t as useRootStore } from "./useRootStore-H_HdEClX.js";
import { Hr as AGENTS_LIST_VIEW, ci as PROJECT_AGENTS, uf as v4 } from "./constants-BzyjfRY2.js";
import { p as useTelemetry } from "./users.store-BjOQ_paL.js";
import { r as createAgent } from "./useAgentApi-BIFgj2MA.js";
import { r as INSTANCE_AI_AGENT_BUILDER_TARGET_METADATA_KEY, s as INSTANCE_AI_THREAD_VIEW } from "./constants-CR9OO2d6.js";
import { n as useInstanceAiStore } from "./instanceAi.store-DTZMIb4X.js";
import { d as stashPendingAgentAttachment } from "./useInstanceAiHandoff-B05djL8p.js";
import { n as upsertProjectAgentsListCache } from "./useProjectAgentsList-aNTSZINo.js";
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
				telemetry.track("User created agent", {
					agent_id: agent.id,
					source: "create_blank"
				});
				const threadId = v4();
				await instanceAiStore.syncThread(threadId, projectId);
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
