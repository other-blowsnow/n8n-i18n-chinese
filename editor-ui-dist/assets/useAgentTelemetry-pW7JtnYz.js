import { t as useRootStore } from "./useRootStore-BOF8LYEF.js";
import { p as useTelemetry } from "./users.store-OUM63rct.js";
//#region src/features/agents/composables/useAgentTelemetry.ts
function useAgentTelemetry() {
	const telemetry = useTelemetry();
	const rootStore = useRootStore();
	const common = () => ({ session_id: rootStore.pushRef });
	function safeTrack(event, props) {
		try {
			telemetry.track(event, props);
		} catch {}
	}
	function trackClickedNewAgent(source) {
		safeTrack("User clicked new agent", {
			source,
			...common()
		});
	}
	function trackSubmittedMessage(params) {
		safeTrack("User submitted message to agent", {
			agent_id: params.agentId,
			mode: params.mode,
			status: params.status,
			agent_config: params.agentConfig,
			...common()
		});
	}
	function trackEditedConfig(params) {
		safeTrack("User edited agent config", {
			agent_id: params.agentId,
			part: params.part,
			config_version: params.configVersion,
			status: params.status,
			...common()
		});
	}
	function trackAddedTrigger(params) {
		safeTrack("User added trigger to agent", {
			agent_id: params.agentId,
			trigger_type: params.triggerType,
			triggers: params.triggers,
			config_version: params.configVersion,
			status: params.status,
			...common()
		});
	}
	function trackAddedTools(params) {
		safeTrack("User added tools to agent", {
			agent_id: params.agentId,
			tool_added: params.toolAdded,
			tools: params.tools,
			config_version: params.configVersion,
			status: params.status,
			...common()
		});
	}
	function trackAddedSkills(params) {
		safeTrack("User added skills to agent", {
			agent_id: params.agentId,
			skill_added: params.skillAdded,
			skills: params.skills,
			config_version: params.configVersion,
			status: params.status,
			...common()
		});
	}
	function trackPublishedAgent(params) {
		safeTrack("User published agent", {
			agent_id: params.agentId,
			config_version: params.configVersion,
			status: "production",
			...common()
		});
	}
	function trackUnpublishedAgent(params) {
		safeTrack("User unpublished agent", {
			agent_id: params.agentId,
			status: "draft",
			...common()
		});
	}
	function trackOpenedToolFromList(params) {
		safeTrack("User opened agent tool", {
			agent_id: params.agentId,
			tool_type: params.toolType,
			...common()
		});
	}
	function trackOpenedSkillFromList(params) {
		safeTrack("User opened agent skill", {
			agent_id: params.agentId,
			skill_id: params.skillId,
			...common()
		});
	}
	function trackOpenedAddSkillModal(params) {
		safeTrack("User opened add skill modal", {
			agent_id: params.agentId,
			...common()
		});
	}
	return {
		trackClickedNewAgent,
		trackSubmittedMessage,
		trackEditedConfig,
		trackAddedTrigger,
		trackAddedTools,
		trackAddedSkills,
		trackPublishedAgent,
		trackUnpublishedAgent,
		trackOpenedToolFromList,
		trackOpenedSkillFromList,
		trackOpenedAddSkillModal
	};
}
//#endregion
export { useAgentTelemetry as t };
