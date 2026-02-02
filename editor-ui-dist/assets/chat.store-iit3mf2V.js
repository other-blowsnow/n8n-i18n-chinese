import { C as computed, It as ref } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-8-eqnC2S.js";
import { Nt as useTelemetry, hr as useToast, kr as v4_default } from "./users.store-qBZsmf9-.js";
import { Pa as deepCopy, ai as chatHubProviderSchema, oi as emptyChatModelsResponse } from "./constants-Cyrg9Nbl.js";
import { A as defineStore, a as STORES, c as ResponseError, d as makeRestApiRequest, m as streamRequest, r as useRootStore } from "./_baseOrderBy-3Uh8XZv3.js";
import { t as retry } from "./retry-B3ViF53D.js";
import { l as CHAT_VIEW, s as CHAT_SESSIONS_PAGE_SIZE } from "./constants-mCmg0XQZ.js";
import { t as convertFileToBinaryData } from "./fileUtils-DFGyp4hj.js";
var STREAM_SEPARATOR = "\n";
const fetchChatModelsApi = async (context, payload) => {
	return await makeRestApiRequest(context, "POST", "/chat/models", payload);
};
function sendMessageApi(ctx, payload, onMessageUpdated, onDone, onError) {
	streamRequest(ctx, "/chat/conversations/send", payload, onMessageUpdated, onDone, onError, STREAM_SEPARATOR);
}
function editMessageApi(ctx, request, onMessageUpdated, onDone, onError) {
	streamRequest(ctx, `/chat/conversations/${request.sessionId}/messages/${request.editId}/edit`, request.payload, onMessageUpdated, onDone, onError, STREAM_SEPARATOR);
}
function regenerateMessageApi(ctx, request, onMessageUpdated, onDone, onError) {
	streamRequest(ctx, `/chat/conversations/${request.sessionId}/messages/${request.retryId}/regenerate`, request.payload, onMessageUpdated, onDone, onError, STREAM_SEPARATOR);
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
function createHumanMessageFromStreamingState(streaming) {
	return {
		id: streaming.promptId,
		sessionId: streaming.sessionId,
		type: "human",
		name: "User",
		content: streaming.promptText,
		executionId: null,
		status: "success",
		createdAt: (/* @__PURE__ */ new Date()).toISOString(),
		updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
		previousMessageId: streaming.promptPreviousMessageId,
		retryOfMessageId: null,
		revisionOfMessageId: streaming.revisionOfMessageId,
		responses: [],
		alternatives: [],
		attachments: streaming.attachments,
		...flattenModel(streaming.agent.model)
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
				status: "running",
				...flattenModel(streaming.agent.model)
			});
			foundRunning = true;
			continue;
		}
		if (streaming.messageId && index === conversation.activeMessageChain.length - 1) {
			messagesToShow.push({
				...message,
				status: "running"
			});
			foundRunning = true;
			continue;
		}
		messagesToShow.push(message);
	}
	return messagesToShow;
}
function isLlmProvider(provider) {
	return provider !== "n8n" && provider !== "custom-agent";
}
function isLlmProviderModel(model) {
	return isLlmProvider(model?.provider);
}
function isAllowedModel({ enabled = true, allowedModels }, model) {
	return enabled && (allowedModels.length === 0 || allowedModels.some((agent) => "model" in model && agent.model === model.model));
}
function findOneFromModelsResponse(response, providerSettings) {
	for (const provider of chatHubProviderSchema.options) {
		let bestModel;
		let bestPriority = -Infinity;
		const settings = isLlmProvider(provider) ? providerSettings[provider] : void 0;
		const availableModels = response[provider].models.filter((agent) => !settings || isAllowedModel(settings, agent.model));
		for (const model of availableModels) {
			const priority = model.metadata.priority ?? 0;
			if (priority > bestPriority) {
				bestPriority = priority;
				bestModel = model;
			}
		}
		if (bestModel) return bestModel;
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
function promisifyStreamingApi(streamingApi) {
	return async (ctx, payload, onChunk, onDone, onError) => {
		let settled = false;
		let resolvePromise;
		let rejectPromise;
		const promise = new Promise((resolve, reject) => {
			resolvePromise = resolve;
			rejectPromise = reject;
		});
		streamingApi(ctx, payload, (chunk) => {
			if (!settled) {
				settled = true;
				resolvePromise();
			}
			onChunk(chunk);
		}, () => {
			if (!settled) {
				settled = true;
				resolvePromise();
			}
			onDone();
		}, (error) => {
			if (!settled) {
				settled = true;
				rejectPromise(error);
			}
			onError(error);
		});
		return await promise;
	};
}
function createFakeAgent(model, fallback) {
	return {
		model,
		name: fallback?.name || "",
		description: null,
		icon: fallback?.icon ?? null,
		createdAt: null,
		updatedAt: null,
		metadata: {
			inputModalities: ["text", "file"],
			capabilities: { functionCalling: true },
			available: true
		},
		groupName: null,
		groupIcon: null
	};
}
const isEditable = (message) => {
	return message.status === "success" && !(message.provider === "n8n" && message.type === "ai");
};
const isRegenerable = (message) => {
	return message.type === "ai";
};
function splitMarkdownIntoChunks(content) {
	if (!content) return [];
	const chunks = [];
	let currentChunk = "";
	let state = { type: "normal" };
	const lines = content.split("\n");
	const endChunk = () => {
		if (currentChunk.trim()) {
			chunks.push(currentChunk.trimEnd());
			currentChunk = "";
		}
	};
	for (let i = 0; i < lines.length; i++) {
		const line = lines[i];
		const nextLine = i < lines.length - 1 ? lines[i + 1] : "";
		const trimmedLine = line.trim();
		const isIndented = /^( {4}|\t)/.test(line);
		const hasValidFenceIndent = /^( {0,3})(`{3,}|~{3,})/.test(line);
		if (state.type === "backtick-fence") {
			if (hasValidFenceIndent && trimmedLine.startsWith("```")) {
				const fenceMatch = trimmedLine.match(/^(`+)/);
				if ((fenceMatch ? fenceMatch[1].length : 0) >= state.count) {
					currentChunk += line + "\n";
					state = { type: "normal" };
					endChunk();
					continue;
				}
			}
		} else if (state.type === "tilde-fence") {
			if (hasValidFenceIndent && trimmedLine.startsWith("~~~")) {
				const fenceMatch = trimmedLine.match(/^(~+)/);
				if ((fenceMatch ? fenceMatch[1].length : 0) >= state.count) {
					currentChunk += line + "\n";
					state = { type: "normal" };
					endChunk();
					continue;
				}
			}
		} else if (state.type === "indented") {
			if (!isIndented && trimmedLine !== "") {
				state = { type: "normal" };
				endChunk();
			}
		} else if (hasValidFenceIndent && trimmedLine.startsWith("```")) {
			const fenceMatch = trimmedLine.match(/^(`+)/);
			state = {
				type: "backtick-fence",
				count: fenceMatch ? fenceMatch[1].length : 0
			};
		} else if (hasValidFenceIndent && trimmedLine.startsWith("~~~")) {
			const fenceMatch = trimmedLine.match(/^(~+)/);
			state = {
				type: "tilde-fence",
				count: fenceMatch ? fenceMatch[1].length : 0
			};
		} else if (isIndented && trimmedLine !== "") {
			endChunk();
			state = { type: "indented" };
		}
		currentChunk += line + "\n";
		if (state.type === "normal") {
			const isEmptyLine = trimmedLine === "";
			const nextLineIsEmpty = nextLine.trim() === "";
			const nextLineIsHeader = nextLine.trim().startsWith("#");
			if (isEmptyLine && nextLineIsEmpty || isEmptyLine && nextLineIsHeader) endChunk();
		}
	}
	endChunk();
	return chunks;
}
const useChatStore = defineStore(STORES.CHAT_HUB, () => {
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
		return streaming.value?.sessionId === sessionId;
	}
	function computeActiveChain(messages, messageId) {
		const chain = [];
		if (!messageId) return chain;
		let latest = messageId;
		while (true) {
			const responses = messages[latest].responses;
			if (responses.length === 0) break;
			latest = responses[responses.length - 1];
		}
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
			const [response] = await Promise.all([fetchConversationsApi(rootStore.restApiContext, 18, cursor), new Promise((resolve) => setTimeout(resolve, options.minLoadingTime ?? 0))]);
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
		if (!streaming.value.retryOfMessageId) addMessage(streaming.value.sessionId, createHumanMessageFromStreamingState(streaming.value));
		if (!sessions.value.byId[streaming.value.sessionId]) {
			sessions.value.byId[streaming.value.sessionId] = createSessionFromStreamingState(streaming.value);
			sessions.value.ids ??= [];
			sessions.value.ids.unshift(streaming.value.sessionId);
		}
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
		const cause = error instanceof ResponseError ? new Error(getErrorMessageByStatusCode(error.httpStatusCode, error.message)) : error instanceof Error && error.message.includes("Failed to fetch") ? new Error(i18n.baseText("chatHub.error.noConnection")) : error;
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
		streaming.value = {
			promptPreviousMessageId: previousMessageId,
			promptId: messageId,
			promptText: message,
			sessionId,
			retryOfMessageId: null,
			revisionOfMessageId: null,
			tools,
			attachments,
			agent
		};
		telemetry.track("User sent chat hub message", {
			...flattenModel(agent.model),
			is_custom: agent.model.provider === "custom-agent",
			chat_session_id: sessionId
		});
		await promisifyStreamingApi(sendMessageApi)(rootStore.restApiContext, {
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
	}
	async function editMessage(sessionId, editId, content, agent, credentials, keepAttachmentIndices = [], newFiles = []) {
		const promptId = v4_default();
		const message = ensureConversation(sessionId).messages[editId];
		const previousMessageId = message?.previousMessageId ?? null;
		const binaryData = await Promise.all(newFiles.map(convertFileToBinaryData));
		const payload = {
			model: agent.model,
			messageId: promptId,
			message: content,
			credentials,
			newAttachments: binaryData.map((attachment) => ({
				fileName: attachment.fileName ?? "unnamed file",
				mimeType: attachment.mimeType,
				data: attachment.data
			})),
			keepAttachmentIndices,
			timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
		};
		if (message?.type === "ai") replaceMessageContent(sessionId, editId, content);
		streaming.value = {
			promptPreviousMessageId: previousMessageId,
			promptId,
			promptText: content,
			sessionId,
			agent,
			retryOfMessageId: null,
			revisionOfMessageId: editId,
			tools: [],
			attachments: [...keepAttachmentIndices.flatMap((index) => {
				const attachment = message?.attachments[index];
				if (!attachment) return [];
				return [{
					fileName: attachment.fileName ?? "unnamed file",
					mimeType: attachment.mimeType ?? "application/octet-stream",
					data: ""
				}];
			}), ...binaryData]
		};
		telemetry.track("User edited chat hub message", {
			...flattenModel(agent.model),
			is_custom: agent.model.provider === "custom-agent",
			chat_session_id: sessionId,
			chat_message_id: editId
		});
		await promisifyStreamingApi(editMessageApi)(rootStore.restApiContext, {
			sessionId,
			editId,
			payload
		}, onStreamMessage, onStreamDone, onStreamError);
	}
	async function regenerateMessage(sessionId, retryId, agent, credentials) {
		const previousMessageId = ensureConversation(sessionId).messages[retryId]?.previousMessageId ?? null;
		const payload = {
			model: agent.model,
			credentials,
			timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
		};
		if (!previousMessageId) throw new Error("No previous message to base regeneration on");
		streaming.value = {
			promptPreviousMessageId: previousMessageId,
			promptId: retryId,
			promptText: "",
			sessionId,
			agent,
			retryOfMessageId: retryId,
			revisionOfMessageId: null,
			tools: [],
			attachments: []
		};
		telemetry.track("User regenerated chat hub message", {
			...flattenModel(agent.model),
			is_custom: agent.model.provider === "custom-agent",
			chat_session_id: sessionId,
			chat_message_id: retryId
		});
		await promisifyStreamingApi(regenerateMessageApi)(rootStore.restApiContext, {
			sessionId,
			retryId,
			payload
		}, onStreamMessage, onStreamDone, onStreamError);
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
			},
			groupName: null,
			groupIcon: null
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
		return createFakeAgent(model, fallback);
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
export { stringifyModel as _, findOneFromModelsResponse as a, buildChatAttachmentUrl as b, getAgentRoute as c, isEditable as d, isLlmProvider as f, splitMarkdownIntoChunks as g, personalAgentDefaultIcon as h, filterAndSortAgents as i, groupConversationsByDate as l, isRegenerable as m, createFakeAgent as n, flattenModel as o, isLlmProviderModel as p, createMimeTypes as r, fromStringToModel as s, useChatStore as t, isAllowedModel as u, unflattenModel as v, fetchChatModelsApi as x, workflowAgentDefaultIcon as y };
