import { c as makeRestApiRequest, s as getFullApiResponse } from "./useRootStore-C7jLo3fI.js";
import "./settings.store-DmallR-B.js";
//#region src/features/agents/composables/useAgentApi.ts
var AGENTS_LIST_PAGE_SIZE = 250;
var listAgentsPage = async (context, projectId, options) => {
	return await getFullApiResponse(context, "GET", `/projects/${projectId}/agents/v2`, options);
};
var listAgentsPageGlobal = async (context, options) => {
	return await getFullApiResponse(context, "GET", "/agents/v2", options);
};
var listAgents = async (context, projectId) => {
	const agents = [];
	let total = 0;
	do {
		const { count, data } = await listAgentsPage(context, projectId, {
			skip: agents.length,
			take: AGENTS_LIST_PAGE_SIZE
		});
		agents.push(...data);
		total = count;
		if (data.length === 0) break;
	} while (agents.length < total);
	return agents;
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
var listAgentFiles = async (context, projectId, agentId) => {
	return await makeRestApiRequest(context, "GET", `/projects/${projectId}/agents/v2/${agentId}/files`);
};
var uploadAgentFiles = async (context, projectId, agentId, files) => {
	const formData = new FormData();
	for (const file of files) formData.append("files", file);
	return await makeRestApiRequest(context, "POST", `/projects/${projectId}/agents/v2/${agentId}/files`, formData);
};
var deleteAgentFile = async (context, projectId, agentId, fileId) => {
	await makeRestApiRequest(context, "DELETE", `/projects/${projectId}/agents/v2/${agentId}/files/${fileId}`);
};
var warmAgentKnowledgeSandbox = async (context, projectId, agentId) => {
	return await makeRestApiRequest(context, "POST", `/projects/${projectId}/agents/v2/${agentId}/sandbox/knowledge/warmup`);
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
var getAgentTasks = async (context, projectId, agentId) => {
	return await makeRestApiRequest(context, "GET", `/projects/${projectId}/agents/v2/${agentId}/tasks`);
};
var createAgentTask = async (context, projectId, agentId, payload) => {
	return await makeRestApiRequest(context, "POST", `/projects/${projectId}/agents/v2/${agentId}/tasks`, payload);
};
var updateAgentTask = async (context, projectId, agentId, taskId, payload) => {
	return await makeRestApiRequest(context, "PATCH", `/projects/${projectId}/agents/v2/${agentId}/tasks/${taskId}`, payload);
};
var deleteAgentTask = async (context, projectId, agentId, taskId) => {
	return await makeRestApiRequest(context, "DELETE", `/projects/${projectId}/agents/v2/${agentId}/tasks/${taskId}`);
};
var runAgentTask = async (context, projectId, agentId, taskId) => {
	return await makeRestApiRequest(context, "POST", `/projects/${projectId}/agents/v2/${agentId}/tasks/${taskId}/run`);
};
var createSlackAgentApp = async (context, projectId, agentId, appConfigurationToken) => {
	return await makeRestApiRequest(context, "POST", `/projects/${projectId}/agents/v2/${agentId}/integrations/slack/app`, { appConfigurationToken });
};
var getSlackAgentAppManifest = async (context, projectId, agentId) => {
	return await makeRestApiRequest(context, "GET", `/projects/${projectId}/agents/v2/${agentId}/integrations/slack/manifest`);
};
var getModelCatalog = async (context, projectId) => {
	return await makeRestApiRequest(context, "GET", `/projects/${projectId}/agents/v2/catalog/models`);
};
var publishAgent = async (context, projectId, agentId, versionId) => {
	return await makeRestApiRequest(context, "POST", `/projects/${projectId}/agents/v2/${agentId}/publish`, versionId ? { versionId } : void 0);
};
var unpublishAgent = async (context, projectId, agentId) => {
	return await makeRestApiRequest(context, "POST", `/projects/${projectId}/agents/v2/${agentId}/unpublish`);
};
var revertAgentToPublished = async (context, projectId, agentId) => {
	return await makeRestApiRequest(context, "POST", `/projects/${projectId}/agents/v2/${agentId}/revert-to-published`);
};
var revertAgentToVersion = async (context, projectId, agentId, versionId) => {
	return await makeRestApiRequest(context, "POST", `/projects/${projectId}/agents/v2/${agentId}/revert-to-version`, { versionId });
};
var listAgentVersions = async (context, projectId, agentId, params) => {
	return await makeRestApiRequest(context, "GET", `/projects/${projectId}/agents/v2/${agentId}/versions`, params);
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
export { runAgentTask as A, listAgentVersions as C, publishAgent as D, listAgentsPageGlobal as E, uploadAgentFiles as F, warmAgentKnowledgeSandbox as I, updateAgentConfig as M, updateAgentSkill as N, revertAgentToPublished as O, updateAgentTask as P, listAgentIntegrations as S, listAgentsPage as T, getIntegrationStatus as _, createAgentSkill as a, getTestChatMessages as b, deleteAgent as c, disconnectIntegration as d, getAgent as f, getChatMessages as g, getBuilderMessages as h, createAgent as i, unpublishAgent as j, revertAgentToVersion as k, deleteAgentFile as l, getAgentTasks as m, clearTestChatMessages as n, createAgentTask as o, getAgentConfig as p, connectIntegration as r, createSlackAgentApp as s, clearBuilderMessages as t, deleteAgentTask as u, getModelCatalog as v, listAgents as w, listAgentFiles as x, getSlackAgentAppManifest as y };
