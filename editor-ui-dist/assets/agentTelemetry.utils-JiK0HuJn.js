import { c as makeRestApiRequest } from "./useRootStore-NTSmdx9S.js";
import "./settings.store-CrL-o4BC.js";
//#region src/features/agents/composables/useAgentApi.ts
var listAgents = async (context, projectId) => {
	return await makeRestApiRequest(context, "GET", `/projects/${projectId}/agents/v2`);
};
var getAgent = async (context, projectId, agentId) => {
	return await makeRestApiRequest(context, "GET", `/projects/${projectId}/agents/v2/${agentId}`);
};
var createAgent = async (context, projectId, name) => {
	return await makeRestApiRequest(context, "POST", `/projects/${projectId}/agents/v2`, { name });
};
var deleteAgent = async (context, projectId, agentId) => {
	await makeRestApiRequest(context, "DELETE", `/projects/${projectId}/agents/v2/${agentId}`);
};
var connectIntegration = async (context, projectId, agentId, type, credentialId, settings) => {
	return await makeRestApiRequest(context, "POST", `/projects/${projectId}/agents/v2/${agentId}/integrations/connect`, {
		type,
		credentialId,
		...settings ? { settings } : {}
	});
};
var disconnectIntegration = async (context, projectId, agentId, type, credentialId) => {
	return await makeRestApiRequest(context, "POST", `/projects/${projectId}/agents/v2/${agentId}/integrations/disconnect`, {
		type,
		credentialId
	});
};
var getIntegrationStatus = async (context, projectId, agentId) => {
	return await makeRestApiRequest(context, "GET", `/projects/${projectId}/agents/v2/${agentId}/integrations/status`);
};
var getScheduleIntegration = async (context, projectId, agentId) => {
	return await makeRestApiRequest(context, "GET", `/projects/${projectId}/agents/v2/${agentId}/integrations/schedule`);
};
var updateScheduleIntegration = async (context, projectId, agentId, data) => {
	return await makeRestApiRequest(context, "PUT", `/projects/${projectId}/agents/v2/${agentId}/integrations/schedule`, data);
};
var activateScheduleIntegration = async (context, projectId, agentId) => {
	return await makeRestApiRequest(context, "POST", `/projects/${projectId}/agents/v2/${agentId}/integrations/schedule/activate`);
};
var deactivateScheduleIntegration = async (context, projectId, agentId) => {
	return await makeRestApiRequest(context, "POST", `/projects/${projectId}/agents/v2/${agentId}/integrations/schedule/deactivate`);
};
var createSlackAgentApp = async (context, projectId, agentId, appConfigurationToken) => {
	return await makeRestApiRequest(context, "POST", `/projects/${projectId}/agents/v2/${agentId}/integrations/slack/app`, { appConfigurationToken });
};
var getSlackAgentAppManifest = async (context, projectId, agentId) => {
	return await makeRestApiRequest(context, "GET", `/projects/${projectId}/agents/v2/${agentId}/integrations/slack/manifest`);
};
var publishAgent = async (context, projectId, agentId) => {
	return await makeRestApiRequest(context, "POST", `/projects/${projectId}/agents/v2/${agentId}/publish`);
};
var unpublishAgent = async (context, projectId, agentId) => {
	return await makeRestApiRequest(context, "POST", `/projects/${projectId}/agents/v2/${agentId}/unpublish`);
};
var revertAgentToPublished = async (context, projectId, agentId) => {
	return await makeRestApiRequest(context, "POST", `/projects/${projectId}/agents/v2/${agentId}/revert-to-published`);
};
var getAgentConfig = async (context, projectId, agentId) => {
	return await makeRestApiRequest(context, "GET", `/projects/${projectId}/agents/v2/${agentId}/config`);
};
var updateAgentConfig = async (context, projectId, agentId, config) => {
	return await makeRestApiRequest(context, "PUT", `/projects/${projectId}/agents/v2/${agentId}/config`, { config });
};
var createAgentSkill = async (context, projectId, agentId, skill) => {
	return await makeRestApiRequest(context, "POST", `/projects/${projectId}/agents/v2/${agentId}/skills`, skill);
};
var updateAgentSkill = async (context, projectId, agentId, skillId, updates) => {
	return await makeRestApiRequest(context, "PATCH", `/projects/${projectId}/agents/v2/${agentId}/skills/${skillId}`, updates);
};
var getBuilderMessages = async (context, projectId, agentId) => {
	return await makeRestApiRequest(context, "GET", `/projects/${projectId}/agents/v2/${agentId}/build/messages`);
};
var clearBuilderMessages = async (context, projectId, agentId) => {
	await makeRestApiRequest(context, "DELETE", `/projects/${projectId}/agents/v2/${agentId}/build/messages`);
};
var getChatMessages = async (context, projectId, agentId, threadId) => {
	return await makeRestApiRequest(context, "GET", `/projects/${projectId}/agents/v2/${agentId}/chat/${threadId}/messages`);
};
var getTestChatMessages = async (context, projectId, agentId) => {
	return await makeRestApiRequest(context, "GET", `/projects/${projectId}/agents/v2/${agentId}/chat/messages`);
};
var clearTestChatMessages = async (context, projectId, agentId) => {
	await makeRestApiRequest(context, "DELETE", `/projects/${projectId}/agents/v2/${agentId}/chat/messages`);
};
var listAgentIntegrations = async (context, projectId) => {
	return await makeRestApiRequest(context, "GET", `/projects/${projectId}/agents/v2/catalog/integrations`);
};
//#endregion
//#region src/features/agents/composables/agentTelemetry.utils.ts
/**
* Internal helper used to compute a stable 16-char hex `config_version` join
* key. Not a privacy mechanism — agent payloads carry the raw config fields.
*/
async function sha256Hex16(input) {
	const bytes = new TextEncoder().encode(input);
	const digest = await crypto.subtle.digest("SHA-256", bytes);
	return Array.from(new Uint8Array(digest)).map((b) => b.toString(16).padStart(2, "0")).join("").slice(0, 16);
}
function toolIdentifier(ref) {
	if (ref.type === "custom") return ref.id ?? "";
	if (ref.type === "workflow") return ref.name ?? ref.workflow ?? "";
	return ref.name ?? ref.node?.nodeType ?? "";
}
function toolIdentifiersFromConfig(config) {
	return (config?.tools ?? []).map(toolIdentifier).filter(Boolean).sort();
}
function skillIdentifiersFromConfig(config) {
	return (config?.skills ?? []).map((ref) => ref.id).filter(Boolean).sort();
}
async function buildAgentConfigFingerprint(config, connectedTriggers) {
	const instructions = config?.instructions ?? "";
	const tools = toolIdentifiersFromConfig(config);
	const skills = skillIdentifiersFromConfig(config);
	const triggers = [...connectedTriggers].sort();
	const memory = config?.memory ? {
		enabled: config.memory.enabled,
		storage: config.memory.storage
	} : null;
	const model = config?.model ?? null;
	return {
		instructions,
		tools,
		skills,
		triggers,
		memory,
		model,
		config_version: await sha256Hex16(JSON.stringify({
			instructions,
			tools,
			skills,
			triggers,
			memory,
			model
		}))
	};
}
function deriveAgentStatus(agent) {
	if (!agent?.activeVersionId) return "draft";
	return agent.versionId === agent.activeVersionId ? "production" : "draft";
}
//#endregion
export { updateScheduleIntegration as A, listAgentIntegrations as C, unpublishAgent as D, revertAgentToPublished as E, updateAgentConfig as O, getTestChatMessages as S, publishAgent as T, getBuilderMessages as _, activateScheduleIntegration as a, getScheduleIntegration as b, connectIntegration as c, createSlackAgentApp as d, deactivateScheduleIntegration as f, getAgentConfig as g, getAgent as h, toolIdentifiersFromConfig as i, updateAgentSkill as k, createAgent as l, disconnectIntegration as m, deriveAgentStatus as n, clearBuilderMessages as o, deleteAgent as p, skillIdentifiersFromConfig as r, clearTestChatMessages as s, buildAgentConfigFingerprint as t, createAgentSkill as u, getChatMessages as v, listAgents as w, getSlackAgentAppManifest as x, getIntegrationStatus as y };
