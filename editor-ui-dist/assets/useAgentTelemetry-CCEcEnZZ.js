import { t as useRootStore } from "./useRootStore-B4GkZ-3x.js";
import { cn as TELEMETRY_EVENT, n as useTelemetry } from "./posthog.store-BIq4iaqJ.js";
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
		safeTrack(TELEMETRY_EVENT.AGENTS.USER_CLICKED_NEW_AGENT, {
			source,
			...common()
		});
	}
	function trackSubmittedMessage(params) {
		safeTrack(TELEMETRY_EVENT.AGENTS.USER_SUBMITTED_MESSAGE_TO_AGENT, {
			agent_id: params.agentId,
			mode: "test",
			status: params.status,
			agent_config: params.agentConfig,
			...common()
		});
	}
	function trackEditedConfig(params) {
		safeTrack(TELEMETRY_EVENT.AGENTS.USER_EDITED_AGENT_CONFIG, {
			agent_id: params.agentId,
			part: params.part,
			config_version: params.configVersion,
			status: params.status,
			...common()
		});
	}
	function trackAddedTrigger(params) {
		safeTrack(TELEMETRY_EVENT.AGENTS.USER_ADDED_TRIGGER_TO_AGENT, {
			agent_id: params.agentId,
			trigger_type: params.triggerType,
			triggers: params.triggers,
			config_version: params.configVersion,
			status: params.status,
			...common()
		});
	}
	function trackAddedTools(params) {
		safeTrack(TELEMETRY_EVENT.AGENTS.USER_ADDED_TOOLS_TO_AGENT, {
			agent_id: params.agentId,
			tool_added: params.toolAdded,
			tools: params.tools,
			config_version: params.configVersion,
			status: params.status,
			...common()
		});
	}
	function trackAddedSkills(params) {
		safeTrack(TELEMETRY_EVENT.AGENTS.USER_ADDED_SKILLS_TO_AGENT, {
			agent_id: params.agentId,
			skill_added: params.skillAdded,
			skills: params.skills,
			config_version: params.configVersion,
			status: params.status,
			...common()
		});
	}
	function trackAddedTasks(params) {
		safeTrack(TELEMETRY_EVENT.AGENTS.USER_ADDED_TASKS_TO_AGENT, {
			agent_id: params.agentId,
			task_added: params.taskAdded,
			tasks: params.tasks,
			config_version: params.configVersion,
			status: params.status,
			...common()
		});
	}
	function trackRemovedTasks(params) {
		safeTrack(TELEMETRY_EVENT.AGENTS.USER_REMOVED_TASKS_FROM_AGENT, {
			agent_id: params.agentId,
			task_removed: params.taskRemoved,
			tasks: params.tasks,
			config_version: params.configVersion,
			status: params.status,
			...common()
		});
	}
	function trackPublishedAgent(params) {
		safeTrack(TELEMETRY_EVENT.AGENTS.USER_PUBLISHED_AGENT, {
			agent_id: params.agentId,
			config_version: params.configVersion,
			status: "production",
			...common()
		});
	}
	function trackUnpublishedAgent(params) {
		safeTrack(TELEMETRY_EVENT.AGENTS.USER_UNPUBLISHED_AGENT, {
			agent_id: params.agentId,
			status: "draft",
			...common()
		});
	}
	function trackOpenedToolFromList(params) {
		safeTrack(TELEMETRY_EVENT.AGENTS.USER_OPENED_AGENT_TOOL, {
			agent_id: params.agentId,
			tool_type: params.toolType,
			...common()
		});
	}
	function trackOpenedSkillFromList(params) {
		safeTrack(TELEMETRY_EVENT.AGENTS.USER_OPENED_AGENT_SKILL, {
			agent_id: params.agentId,
			skill_id: params.skillId,
			...common()
		});
	}
	function trackOpenedAddSkillModal(params) {
		safeTrack(TELEMETRY_EVENT.AGENTS.USER_OPENED_ADD_SKILL_MODAL, {
			agent_id: params.agentId,
			...common()
		});
	}
	function trackImportedSkill(params) {
		safeTrack(TELEMETRY_EVENT.AGENTS.USER_IMPORTED_AGENT_SKILL, {
			agent_id: params.agentId,
			source: params.source,
			status: params.status,
			reference_count: params.referenceCount ?? 0,
			...params.error ? { error: params.error } : {},
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
		trackAddedTasks,
		trackRemovedTasks,
		trackPublishedAgent,
		trackUnpublishedAgent,
		trackOpenedToolFromList,
		trackOpenedSkillFromList,
		trackOpenedAddSkillModal,
		trackImportedSkill
	};
}
//#endregion
export { useAgentTelemetry as t };
