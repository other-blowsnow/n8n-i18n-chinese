import { C as computed, It as ref } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import { gt as useI18n } from "./_MapCache-DZpzsuCB.js";
import { Yo as v4_default, n as useToast, p as useTelemetry } from "./builder.store-BjWbk2Wl.js";
import { Da as deepCopy, ni as chatHubProviderSchema, ri as emptyChatModelsResponse } from "./constants-ksa9xIxI.js";
import { k as defineStore, p as streamRequest, r as useRootStore, s as ResponseError, u as makeRestApiRequest } from "./_baseOrderBy-B2FQHwl_.js";
import { t as retry } from "./retry-CMAFrhVi.js";
import { c as CHAT_STORE, l as CHAT_VIEW } from "./constants-qk3hx0l8.js";
import { t as convertFileToBinaryData } from "./fileUtils-D3GQ2UWQ.js";
var STREAM_SEPARATOR = "\n";
const fetchChatModelsApi = async (context, payload) => {
	return await makeRestApiRequest(context, "POST", "/chat/models", payload);
};
function sendMessageApi(ctx, payload, onMessageUpdated, onDone, onError) {
	streamRequest(ctx, "/chat/conversations/send", payload, onMessageUpdated, onDone, onError, STREAM_SEPARATOR);
}
function editMessageApi(ctx, sessionId, editId, payload, onMessageUpdated, onDone, onError) {
	streamRequest(ctx, `/chat/conversations/${sessionId}/messages/${editId}/edit`, payload, onMessageUpdated, onDone, onError, STREAM_SEPARATOR);
}
function regenerateMessageApi(ctx, sessionId, retryId, payload, onMessageUpdated, onDone, onError) {
	streamRequest(ctx, `/chat/conversations/${sessionId}/messages/${retryId}/regenerate`, payload, onMessageUpdated, onDone, onError, STREAM_SEPARATOR);
}
const stopGenerationApi = async (context, sessionId, messageId) => {
	await makeRestApiRequest(context, "POST", `/chat/conversations/${sessionId}/messages/${messageId}/stop`);
};
const fetchConversationsApi = async (context, limit, cursor) => {
	const queryParams = new URLSearchParams();
	queryParams.append("limit", limit.toString());
	if (cursor) queryParams.append("cursor", cursor);
	return await makeRestApiRequest(context, "GET", `/chat/conversations?${queryParams.toString()}`);
};
const updateConversationApi = async (context, sessionId, updates) => {
	return await makeRestApiRequest(context, "PATCH", `/chat/conversations/${sessionId}`, updates);
};
const updateConversationTitleApi = async (context, sessionId, title) => {
	return await updateConversationApi(context, sessionId, { title });
};
const deleteConversationApi = async (context, sessionId) => {
	await makeRestApiRequest(context, "DELETE", `/chat/conversations/${sessionId}`);
};
const fetchSingleConversationApi = async (context, sessionId) => {
	return await makeRestApiRequest(context, "GET", `/chat/conversations/${sessionId}`);
};
const fetchAgentApi = async (context, agentId) => {
	return await makeRestApiRequest(context, "GET", `/chat/agents/${agentId}`);
};
const createAgentApi = async (context, payload) => {
	return await makeRestApiRequest(context, "POST", "/chat/agents", payload);
};
const updateAgentApi = async (context, agentId, payload) => {
	return await makeRestApiRequest(context, "POST", `/chat/agents/${agentId}`, payload);
};
const deleteAgentApi = async (context, agentId) => {
	await makeRestApiRequest(context, "DELETE", `/chat/agents/${agentId}`);
};
const fetchChatSettingsApi = async (context) => {
	return (await makeRestApiRequest(context, "GET", "/chat/settings")).providers;
};
const fetchChatProviderSettingsApi = async (context, provider) => {
	return (await makeRestApiRequest(context, "GET", "/chat/settings/" + provider)).settings;
};
const updateChatSettingsApi = async (context, settings) => {
	return await makeRestApiRequest(context, "POST", "/chat/settings", { payload: settings });
};
function buildChatAttachmentUrl(context, sessionId, messageId, attachmentIndex) {
	return `${context.baseUrl}/chat/conversations/${sessionId}/messages/${messageId}/attachments/${attachmentIndex}`;
}
function getRelativeDate(now, dateString) {
	const date = new Date(dateString);
	const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
	const yesterday = new Date(today);
	yesterday.setDate(yesterday.getDate() - 1);
	const lastWeek = new Date(today);
	lastWeek.setDate(lastWeek.getDate() - 7);
	const conversationDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
	if (conversationDate.getTime() === today.getTime()) return "Today";
	else if (conversationDate.getTime() === yesterday.getTime()) return "Yesterday";
	else if (conversationDate >= lastWeek) return "This week";
	else return "Older";
}
function groupConversationsByDate(sessions) {
	const now = /* @__PURE__ */ new Date();
	const groups = /* @__PURE__ */ new Map();
	for (const session of sessions) {
		const group = getRelativeDate(now, session.lastMessageAt ?? session.updatedAt);
		if (!groups.has(group)) groups.set(group, []);
		groups.get(group).push(session);
	}
	return [
		"Today",
		"Yesterday",
		"This week",
		"Older"
	].flatMap((groupName) => {
		const sessions$1 = groups.get(groupName) ?? [];
		return sessions$1.length > 0 ? [{
			group: groupName,
			sessions: sessions$1.sort((a, b) => Date.parse(b.lastMessageAt ?? b.updatedAt) - Date.parse(a.lastMessageAt ?? a.updatedAt))
		}] : [];
	});
}
function getAgentRoute(model) {
	if (model.provider === "n8n") return {
		name: CHAT_VIEW,
		query: { workflowId: model.workflowId }
	};
	if (model.provider === "custom-agent") return {
		name: CHAT_VIEW,
		query: { agentId: model.agentId }
	};
	return {
		name: CHAT_VIEW,
		query: {
			provider: model.provider,
			model: model.model
		}
	};
}
function flattenModel(model) {
	return {
		provider: model.provider,
		model: model?.provider === "n8n" || model?.provider === "custom-agent" ? null : model?.model ?? null,
		workflowId: model?.provider === "n8n" ? model.workflowId : null,
		agentId: model?.provider === "custom-agent" ? model.agentId : null
	};
}
function unflattenModel(messageOrSession) {
	if (messageOrSession.provider === null) return null;
	switch (messageOrSession.provider) {
		case "custom-agent":
			if (!messageOrSession.agentId) return null;
			return {
				provider: "custom-agent",
				agentId: messageOrSession.agentId
			};
		case "n8n":
			if (!messageOrSession.workflowId) return null;
			return {
				provider: "n8n",
				workflowId: messageOrSession.workflowId
			};
		default:
			if (messageOrSession.model === null) return null;
			return {
				provider: messageOrSession.provider,
				model: messageOrSession.model
			};
	}
}
function filterAndSortAgents(models, filter) {
	let filtered = models;
	if (filter.search.trim()) {
		const query = filter.search.toLowerCase();
		filtered = filtered.filter((model) => model.name.toLowerCase().includes(query));
	}
	filtered = [...filtered].sort((a, b) => {
		const dateAStr = a[filter.sortBy];
		const dateBStr = b[filter.sortBy];
		const dateA = dateAStr ? Date.parse(dateAStr) : void 0;
		const dateB = dateBStr ? Date.parse(dateBStr) : void 0;
		if (dateA && dateB) return dateB - dateA;
		if (dateA && !dateB) return -1;
		if (!dateA && dateB) return 1;
		return 0;
	});
	return filtered;
}
function stringifyModel(model) {
	return `${model.provider}::${model.provider === "custom-agent" ? model.agentId : model.provider === "n8n" ? model.workflowId : model.model}`;
}
function fromStringToModel(value) {
	const [provider, identifier] = value.split("::");
	const parsedProvider = chatHubProviderSchema.safeParse(provider).data;
	if (!parsedProvider) return;
	return parsedProvider === "n8n" ? {
		provider: "n8n",
		workflowId: identifier
	} : parsedProvider === "custom-agent" ? {
		provider: "custom-agent",
		agentId: identifier
	} : {
		provider: parsedProvider,
		model: identifier
	};
}
function isMatchedAgent(agent, model) {
	if (model.provider === "n8n") return agent.model.provider === "n8n" && agent.model.workflowId === model.workflowId;
	if (model.provider === "custom-agent") return agent.model.provider === "custom-agent" && agent.model.agentId === model.agentId;
	return agent.model.provider === model.provider && agent.model.model === model.model;
}
function createAiMessageFromStreamingState(sessionId, messageId, streaming) {
	return {
		id: messageId,
		sessionId,
		type: "ai",
		name: "AI",
		content: "",
		executionId: streaming?.executionId ?? null,
		status: "running",
		createdAt: (/* @__PURE__ */ new Date()).toISOString(),
		updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
		previousMessageId: streaming?.previousMessageId ?? null,
		retryOfMessageId: streaming?.retryOfMessageId ?? null,
		revisionOfMessageId: null,
		responses: [],
		alternatives: [],
		attachments: [],
		...streaming?.agent ? flattenModel(streaming.agent.model) : {
			provider: null,
			model: null,
			workflowId: null,
			agentId: null
		}
	};
}
function buildUiMessages(sessionId, conversation, streaming) {
	const messagesToShow = [];
	let foundRunning = false;
	for (let index = 0; index < conversation.activeMessageChain.length; index++) {
		const id = conversation.activeMessageChain[index];
		const message = conversation.messages[id];
		if (!message) continue;
		foundRunning = foundRunning || message.status === "running";
		if (foundRunning || streaming?.sessionId !== sessionId || message.type !== "ai") {
			messagesToShow.push(message);
			continue;
		}
		if (streaming.retryOfMessageId === id && !streaming.messageId) {
			messagesToShow.push({
				...message,
				content: "",
				status: "running"
			});
			foundRunning = true;
			continue;
		}
		if (index === conversation.activeMessageChain.length - 1) {
			messagesToShow.push({
				...message,
				status: "running"
			});
			foundRunning = true;
			continue;
		}
		messagesToShow.push(message);
	}
	if (!foundRunning && streaming?.sessionId === sessionId && !streaming.messageId && streaming.retryOfMessageId === null && streaming.promptId === messagesToShow[messagesToShow.length - 1]?.id) messagesToShow.push(createAiMessageFromStreamingState(sessionId, v4_default(), streaming));
	return messagesToShow;
}
function isLlmProvider(provider) {
	return provider !== "n8n" && provider !== "custom-agent";
}
function isLlmProviderModel(model) {
	return isLlmProvider(model?.provider);
}
function findOneFromModelsResponse(response, providerSettings) {
	for (const provider of chatHubProviderSchema.options) {
		const settings = isLlmProvider(provider) ? providerSettings[provider] : void 0;
		if (!settings?.enabled) continue;
		const availableModels = response[provider].models.filter((providerModel) => {
			const { model } = providerModel;
			if (isLlmProviderModel(model) && settings.allowedModels.length > 0) return settings.allowedModels.some((allowed) => allowed.model === model.model);
			return true;
		});
		if (availableModels.length > 0) return availableModels[0];
	}
}
function createSessionFromStreamingState(streaming) {
	return {
		id: streaming.sessionId,
		title: "New Chat",
		ownerId: "",
		lastMessageAt: (/* @__PURE__ */ new Date()).toISOString(),
		credentialId: null,
		agentName: streaming.agent.name,
		agentIcon: streaming.agent.icon,
		createdAt: (/* @__PURE__ */ new Date()).toISOString(),
		updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
		tools: streaming.tools,
		...flattenModel(streaming.agent.model)
	};
}
function createMimeTypes(modalities) {
	if (modalities.includes("file")) return "*/*";
	const mimeTypes = ["text/*"];
	for (const modality of modalities) {
		if (modality === "image") mimeTypes.push("image/*");
		if (modality === "audio") mimeTypes.push("audio/*");
		if (modality === "video") mimeTypes.push("video/*");
	}
	return mimeTypes.join(",");
}
const personalAgentDefaultIcon = {
	type: "icon",
	value: "message-square"
};
const workflowAgentDefaultIcon = {
	type: "icon",
	value: "bot"
};
const useChatStore = defineStore(CHAT_STORE, () => {
	const rootStore = useRootStore();
	const toast = useToast();
	const telemetry = useTelemetry();
	const i18n = useI18n();
	const agents = ref(null);
	const customAgents = ref({});
	const sessions = ref({
		byId: {},
		ids: null,
		hasMore: false,
		nextCursor: null
	});
	const sessionsLoadingMore = ref(false);
	const streaming = ref();
	const settingsLoading = ref(false);
	const settings = ref(null);
	const conversationsBySession = ref(/* @__PURE__ */ new Map());
	const getConversation = (sessionId) => conversationsBySession.value.get(sessionId);
	const getActiveMessages = (sessionId) => {
		const conversation = getConversation(sessionId);
		if (!conversation) return [];
		return buildUiMessages(sessionId, conversation, streaming.value);
	};
	function ensureConversation(sessionId) {
		if (!conversationsBySession.value.has(sessionId)) conversationsBySession.value.set(sessionId, {
			messages: {},
			activeMessageChain: []
		});
		const conversation = conversationsBySession.value.get(sessionId);
		if (!conversation) throw new Error(`Conversation for session ID ${sessionId} not found`);
		return conversation;
	}
	function lastMessage(sessionId) {
		const conversation = getConversation(sessionId);
		if (!conversation || conversation.activeMessageChain.length === 0) return null;
		const messageId = conversation.activeMessageChain[conversation.activeMessageChain.length - 1];
		return conversation.messages[messageId] ?? null;
	}
	function isResponding(sessionId) {
		return lastMessage(sessionId)?.status === "running";
	}
	function computeActiveChain(messages, messageId) {
		const chain = [];
		if (!messageId) return chain;
		let id;
		const stack = [messageId];
		let latest = null;
		while (id = stack.pop()) {
			const message = messages[id];
			if (!latest || message.createdAt > messages[latest].createdAt) latest = id;
			for (const responseId of message.responses) stack.push(responseId);
		}
		if (!latest) return chain;
		let current = latest;
		const visited = /* @__PURE__ */ new Set();
		while (current && !visited.has(current)) {
			chain.unshift(current);
			visited.add(current);
			current = messages[current]?.previousMessageId ?? null;
		}
		return chain;
	}
	function linkMessages(messages) {
		const messagesGraph = {};
		for (const message of messages) messagesGraph[message.id] = {
			...message,
			responses: [],
			alternatives: []
		};
		for (const node of Object.values(messagesGraph)) {
			if (node.previousMessageId && messagesGraph[node.previousMessageId]) messagesGraph[node.previousMessageId].responses.push(node.id);
			if (node.retryOfMessageId && messagesGraph[node.retryOfMessageId]) messagesGraph[node.retryOfMessageId].alternatives.push(node.id);
			if (node.revisionOfMessageId && messagesGraph[node.revisionOfMessageId]) messagesGraph[node.revisionOfMessageId].alternatives.push(node.id);
		}
		const sortByRunThenTime = (first, second) => {
			const a = messagesGraph[first];
			const b = messagesGraph[second];
			if (a.createdAt !== b.createdAt) return a.createdAt < b.createdAt ? -1 : 1;
			return a.id < b.id ? -1 : 1;
		};
		for (const node of Object.values(messagesGraph)) {
			if (!node.alternatives.includes(node.id)) node.alternatives.push(node.id);
			if (node.retryOfMessageId && messagesGraph[node.retryOfMessageId]) {
				node.alternatives.push(node.retryOfMessageId);
				for (const other of messagesGraph[node.retryOfMessageId].alternatives) if (other !== node.id && !node.alternatives.includes(other)) node.alternatives.push(other);
			}
			if (node.revisionOfMessageId && messagesGraph[node.revisionOfMessageId]) {
				node.alternatives.push(node.revisionOfMessageId);
				for (const other of messagesGraph[node.revisionOfMessageId].alternatives) if (other !== node.id && !node.alternatives.includes(other)) node.alternatives.push(other);
			}
			node.responses.sort(sortByRunThenTime);
			node.alternatives.sort(sortByRunThenTime);
		}
		return messagesGraph;
	}
	function addMessage(sessionId, message) {
		const conversation = ensureConversation(sessionId);
		conversation.messages[message.id] = message;
		conversation.messages = linkMessages(Object.values(conversation.messages));
		conversation.activeMessageChain = computeActiveChain(conversation.messages, message.id);
		return message;
	}
	function replaceMessageContent(sessionId, messageId, content) {
		const message = ensureConversation(sessionId).messages[messageId];
		if (!message) throw new Error(`Message with ID ${messageId} not found in session ${sessionId}`);
		message.content = content;
	}
	function appendMessage(sessionId, messageId, chunk) {
		const message = ensureConversation(sessionId).messages[messageId];
		if (!message) throw new Error(`Message with ID ${messageId} not found in session ${sessionId}`);
		message.content += chunk;
	}
	function updateMessage(sessionId, messageId, status, content) {
		const message = ensureConversation(sessionId).messages[messageId];
		if (!message) throw new Error(`Message with ID ${messageId} not found in session ${sessionId}`);
		message.status = status;
		if (content) message.content = content;
		message.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
	}
	async function fetchAgents(credentialMap, options = {}) {
		[agents.value] = await Promise.all([fetchChatModelsApi(rootStore.restApiContext, { credentials: credentialMap }), new Promise((r) => setTimeout(r, options.minLoadingTime ?? 0))]);
		return agents.value;
	}
	async function fetchSessions(reset, options = {}) {
		if (sessionsLoadingMore.value) return;
		if (!reset && sessions.value && !sessions.value.hasMore && (sessions.value.ids ?? []).length > 0) return;
		if (!reset) sessionsLoadingMore.value = true;
		try {
			const cursor = reset ? void 0 : sessions.value?.nextCursor ?? void 0;
			const [response] = await Promise.all([fetchConversationsApi(rootStore.restApiContext, 40, cursor), new Promise((resolve) => setTimeout(resolve, options.minLoadingTime ?? 0))]);
			if (reset || sessions.value.ids === null) sessions.value.ids = [];
			sessions.value.hasMore = response.hasMore;
			sessions.value.nextCursor = response.nextCursor;
			for (const session of response.data) {
				sessions.value.ids.push(session.id);
				sessions.value.byId[session.id] = session;
			}
		} finally {
			sessionsLoadingMore.value = false;
		}
	}
	async function fetchMoreSessions(options = {}) {
		if (sessions.value?.hasMore && !sessionsLoadingMore.value) await fetchSessions(false, options);
	}
	async function fetchMessages(sessionId) {
		const { conversation, session } = await fetchSingleConversationApi(rootStore.restApiContext, sessionId);
		const messages = linkMessages(Object.values(conversation.messages));
		const latestMessage = Object.values(messages).sort((a, b) => a.createdAt < b.createdAt ? -1 : 1).pop();
		conversationsBySession.value.set(sessionId, {
			messages,
			activeMessageChain: computeActiveChain(messages, latestMessage?.id ?? null)
		});
		sessions.value.byId[sessionId] = session;
	}
	async function fetchConversationTitle(sessionId) {
		const current = sessions.value.byId[sessionId];
		if (!current || current.title === "New Chat") await retry(async () => {
			try {
				return (await fetchSingleConversationApi(rootStore.restApiContext, sessionId)).session.title !== "New Chat";
			} catch (e) {
				return false;
			}
		}, 2e3, 10);
		await fetchSessions(true);
	}
	function onBeginMessage() {
		if (!streaming.value?.messageId) return;
		const message = createAiMessageFromStreamingState(streaming.value.sessionId, streaming.value.messageId, streaming.value);
		addMessage(streaming.value.sessionId, message);
	}
	function ensureMessage(sessionId, messageId) {
		const message = ensureConversation(sessionId).messages[messageId];
		if (message) return message;
		return addMessage(sessionId, createAiMessageFromStreamingState(sessionId, messageId, streaming.value));
	}
	function onChunk(chunk) {
		if (streaming.value?.messageId) appendMessage(streaming.value.sessionId, streaming.value.messageId, chunk);
	}
	function onEndMessage() {
		if (streaming.value?.messageId) updateMessage(streaming.value.sessionId, streaming.value.messageId, "success");
	}
	function onStreamMessage(chunk) {
		if (!streaming.value) return;
		const { sessionId } = streaming.value;
		streaming.value = {
			...streaming.value,
			...chunk.metadata
		};
		switch (chunk.type) {
			case "begin":
				onBeginMessage();
				break;
			case "item":
				onChunk(chunk.content ?? "");
				break;
			case "end":
				onEndMessage();
				break;
			case "error":
				if (ensureMessage(sessionId, chunk.metadata.messageId).status === "cancelled") return;
				updateMessage(sessionId, chunk.metadata.messageId, "error", chunk.content);
				break;
		}
	}
	async function onStreamDone() {
		if (!streaming.value) return;
		const { sessionId } = streaming.value;
		streaming.value = void 0;
		await fetchConversationTitle(sessionId);
	}
	function getErrorMessageByStatusCode(statusCode, message) {
		const errorMessages = {
			[413]: i18n.baseText("chatHub.error.payloadTooLarge"),
			[400]: message ?? i18n.baseText("chatHub.error.badRequest"),
			[403]: i18n.baseText("chatHub.error.forbidden"),
			[500]: message ? i18n.baseText("chatHub.error.serverErrorWithReason", { interpolate: { error: message } }) : i18n.baseText("chatHub.error.serverError")
		};
		return statusCode && errorMessages[statusCode] || message || i18n.baseText("chatHub.error.unknown");
	}
	async function onStreamError(error) {
		if (!streaming.value) return;
		const cause = error instanceof ResponseError ? new Error(getErrorMessageByStatusCode(error.httpStatusCode, error.message)) : error.message.includes("Failed to fetch") ? new Error(i18n.baseText("chatHub.error.noConnection")) : error;
		toast.showError(cause, i18n.baseText("chatHub.error.sendMessageFailed"));
		const { sessionId } = streaming.value;
		streaming.value = void 0;
		await fetchConversationTitle(sessionId);
	}
	async function sendMessage(sessionId, message, agent, credentials, tools, files = []) {
		const messageId = v4_default();
		const conversation = ensureConversation(sessionId);
		const previousMessageId = conversation.activeMessageChain.length ? conversation.activeMessageChain[conversation.activeMessageChain.length - 1] : null;
		const attachments = (await Promise.all(files.map(convertFileToBinaryData))).map((attachment) => ({
			fileName: attachment.fileName ?? "unnamed file",
			mimeType: attachment.mimeType,
			data: attachment.data
		}));
		addMessage(sessionId, {
			id: messageId,
			sessionId,
			type: "human",
			name: "User",
			content: message,
			provider: null,
			model: isLlmProviderModel(agent.model) ? agent.model.model : null,
			workflowId: null,
			executionId: null,
			agentId: null,
			status: "success",
			createdAt: (/* @__PURE__ */ new Date()).toISOString(),
			updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
			previousMessageId,
			retryOfMessageId: null,
			revisionOfMessageId: null,
			responses: [],
			alternatives: [],
			attachments
		});
		streaming.value = {
			promptId: messageId,
			sessionId,
			retryOfMessageId: null,
			tools,
			agent
		};
		if (!sessions.value.byId[sessionId]) {
			sessions.value.byId[sessionId] = createSessionFromStreamingState(streaming.value);
			sessions.value.ids ??= [];
			sessions.value.ids.unshift(sessionId);
		}
		sendMessageApi(rootStore.restApiContext, {
			model: agent.model,
			messageId,
			sessionId,
			message,
			credentials,
			previousMessageId,
			tools,
			attachments,
			agentName: agent.name,
			timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
		}, onStreamMessage, onStreamDone, onStreamError);
		telemetry.track("User sent chat hub message", {
			...flattenModel(agent.model),
			is_custom: agent.model.provider === "custom-agent",
			chat_session_id: sessionId
		});
	}
	function editMessage(sessionId, editId, content, agent, credentials) {
		const promptId = v4_default();
		const message = ensureConversation(sessionId).messages[editId];
		const previousMessageId = message?.previousMessageId ?? null;
		if (message?.type === "human") addMessage(sessionId, {
			id: promptId,
			sessionId,
			type: "human",
			name: message.name ?? "User",
			content,
			provider: null,
			model: null,
			workflowId: null,
			executionId: null,
			agentId: null,
			status: "success",
			createdAt: (/* @__PURE__ */ new Date()).toISOString(),
			updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
			previousMessageId,
			retryOfMessageId: null,
			revisionOfMessageId: editId,
			responses: [],
			alternatives: [],
			attachments: message.attachments ?? null
		});
		else if (message?.type === "ai") replaceMessageContent(sessionId, editId, content);
		streaming.value = {
			promptId,
			sessionId,
			agent,
			retryOfMessageId: null,
			tools: []
		};
		editMessageApi(rootStore.restApiContext, sessionId, editId, {
			model: agent.model,
			messageId: promptId,
			message: content,
			credentials,
			timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
		}, onStreamMessage, onStreamDone, onStreamError);
		telemetry.track("User edited chat hub message", {
			...flattenModel(agent.model),
			is_custom: agent.model.provider === "custom-agent",
			chat_session_id: sessionId,
			chat_message_id: editId
		});
	}
	function regenerateMessage(sessionId, retryId, agent, credentials) {
		if (!(ensureConversation(sessionId).messages[retryId]?.previousMessageId ?? null)) throw new Error("No previous message to base regeneration on");
		streaming.value = {
			promptId: retryId,
			sessionId,
			agent,
			retryOfMessageId: retryId,
			tools: []
		};
		regenerateMessageApi(rootStore.restApiContext, sessionId, retryId, {
			model: agent.model,
			credentials,
			timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
		}, onStreamMessage, onStreamDone, onStreamError);
		telemetry.track("User regenerated chat hub message", {
			...flattenModel(agent.model),
			is_custom: agent.model.provider === "custom-agent",
			chat_session_id: sessionId,
			chat_message_id: retryId
		});
	}
	async function stopStreamingMessage(sessionId) {
		const currentMessage = lastMessage(sessionId);
		if (currentMessage && currentMessage.status === "running") {
			updateMessage(sessionId, currentMessage.id, "cancelled");
			await stopGenerationApi(rootStore.restApiContext, sessionId, currentMessage.id);
			await onStreamDone();
		}
	}
	function updateSession(sessionId, toUpdate) {
		const session = sessions.value.byId[sessionId];
		if (session) sessions.value.byId[sessionId] = {
			...session,
			...toUpdate
		};
	}
	async function updateToolsInSession(sessionId, tools) {
		if (!sessions.value?.byId[sessionId]) throw new Error(`Session with ID ${sessionId} not found`);
		updateSession(sessionId, (await updateConversationApi(rootStore.restApiContext, sessionId, { tools })).session);
	}
	async function renameSession(sessionId, title) {
		updateSession(sessionId, (await updateConversationTitleApi(rootStore.restApiContext, sessionId, title)).session);
	}
	async function updateSessionModel(sessionId, model, agentName) {
		updateSession(sessionId, (await updateConversationApi(rootStore.restApiContext, sessionId, { agent: {
			model,
			name: agentName
		} })).session);
	}
	async function deleteSession(sessionId) {
		await deleteConversationApi(rootStore.restApiContext, sessionId);
		delete sessions.value.byId[sessionId];
		sessions.value.ids = sessions.value.ids?.filter((id) => id !== sessionId) ?? null;
	}
	function switchAlternative(sessionId, messageId) {
		const conversation = getConversation(sessionId);
		if (!conversation?.messages[messageId]) throw new Error(`Message with ID ${messageId} not found in session ${sessionId}`);
		conversation.activeMessageChain = computeActiveChain(conversation.messages, messageId);
	}
	async function fetchCustomAgent(agentId) {
		const customAgent = await fetchAgentApi(rootStore.restApiContext, agentId);
		customAgents.value[agentId] = customAgent;
	}
	function getCustomAgent(agentId) {
		return agents.value?.["custom-agent"].models.find((model) => "agentId" in model && model.agentId === agentId);
	}
	async function createCustomAgent(payload, credentials) {
		const customAgent = await createAgentApi(rootStore.restApiContext, payload);
		const baseModel = agents.value?.[customAgent.provider]?.models.find((model) => model.name === customAgent.model);
		const agent = {
			model: {
				provider: "custom-agent",
				agentId: customAgent.id
			},
			name: customAgent.name,
			description: customAgent.description ?? null,
			icon: customAgent.icon,
			createdAt: customAgent.createdAt,
			updatedAt: customAgent.updatedAt,
			metadata: baseModel?.metadata ?? {
				capabilities: { functionCalling: false },
				inputModalities: [],
				available: true
			}
		};
		agents.value?.["custom-agent"].models.push(agent);
		customAgents.value[customAgent.id] = customAgent;
		await fetchAgents(credentials);
		telemetry.track("User created agent", { ...flattenModel(payload) });
		return agent;
	}
	async function updateCustomAgent(agentId, payload, credentials) {
		const customAgent = await updateAgentApi(rootStore.restApiContext, agentId, payload);
		if (agents.value?.["custom-agent"]) agents.value["custom-agent"].models = agents.value["custom-agent"].models.map((model) => "agentId" in model && model.agentId === agentId ? {
			...model,
			name: customAgent.name
		} : model);
		customAgents.value[agentId] = customAgent;
		await fetchAgents(credentials);
		return customAgent;
	}
	async function deleteCustomAgent(agentId, credentials) {
		await deleteAgentApi(rootStore.restApiContext, agentId);
		if (agents.value?.["custom-agent"]) agents.value["custom-agent"].models = agents.value["custom-agent"].models.filter((model) => !("agentId" in model) || model.agentId !== agentId);
		delete customAgents.value[agentId];
		await fetchAgents(credentials);
	}
	function getAgent(model, fallback) {
		const agent = agents.value?.[model.provider]?.models.find((candidate) => isMatchedAgent(candidate, model));
		if (agent) return agent;
		return {
			model,
			name: fallback?.name ?? "",
			description: null,
			icon: fallback?.icon ?? null,
			createdAt: null,
			updatedAt: null,
			metadata: {
				inputModalities: ["text", "file"],
				capabilities: { functionCalling: true },
				available: true
			}
		};
	}
	async function fetchAllChatSettings() {
		try {
			settingsLoading.value = true;
			settings.value = await fetchChatSettingsApi(rootStore.restApiContext);
		} finally {
			settingsLoading.value = false;
		}
		return settings.value;
	}
	async function fetchProviderSettings(provider) {
		const providerSettings = await fetchChatProviderSettingsApi(rootStore.restApiContext, provider);
		if (settings.value) settings.value[provider] = deepCopy(providerSettings);
		return providerSettings;
	}
	async function updateProviderSettings(updated) {
		if (!updated.enabled) updated.allowedModels = [];
		const saved = await updateChatSettingsApi(rootStore.restApiContext, updated);
		if (settings.value) settings.value[updated.provider] = deepCopy(saved);
		return saved;
	}
	return {
		agents: computed(() => agents.value ?? emptyChatModelsResponse),
		agentsReady: computed(() => agents.value !== null),
		customAgents,
		getAgent,
		fetchAgents,
		getCustomAgent,
		fetchCustomAgent,
		createCustomAgent,
		updateCustomAgent,
		deleteCustomAgent,
		sessions,
		sessionsReady: computed(() => sessions.value.ids !== null),
		sessionsLoading: computed(() => sessionsLoadingMore.value),
		fetchSessions,
		fetchMoreSessions,
		renameSession,
		updateSessionModel,
		deleteSession,
		updateToolsInSession,
		getConversation,
		fetchMessages,
		getActiveMessages,
		switchAlternative,
		lastMessage,
		streaming,
		isResponding,
		sendMessage,
		editMessage,
		regenerateMessage,
		stopStreamingMessage,
		settings,
		settingsLoading,
		fetchAllChatSettings,
		fetchProviderSettings,
		updateProviderSettings
	};
});
export { flattenModel as a, groupConversationsByDate as c, personalAgentDefaultIcon as d, stringifyModel as f, fetchChatModelsApi as g, buildChatAttachmentUrl as h, findOneFromModelsResponse as i, isLlmProvider as l, workflowAgentDefaultIcon as m, createMimeTypes as n, fromStringToModel as o, unflattenModel as p, filterAndSortAgents as r, getAgentRoute as s, useChatStore as t, isLlmProviderModel as u };
