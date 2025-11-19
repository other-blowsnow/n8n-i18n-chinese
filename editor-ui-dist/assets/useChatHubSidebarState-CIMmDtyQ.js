import { C as computed, Gt as unref, It as ref, P as defineComponent, Sn as toDisplayString, T as createBlock, bt as withCtx, et as openBlock, j as createTextVNode, k as createSlots } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { M as useMediaQuery, j as useLocalStorage } from "./_MapCache-pT3vKw8Z.js";
import { St as N8nAvatar_default, vt as N8nTooltip_default, zn as N8nIcon_default } from "./src-BmrdBtCN.js";
import { Io as v4_default, Ni as useUIStore, Qs as useRootStore, er as useUsersStore, fc as makeRestApiRequest, mc as streamRequest, t as useTelemetry, xc as defineStore } from "./useTelemetry-C2EhNQhN.js";
import { Qo as LOCAL_STORAGE_CHAT_HUB_STATIC_SIDEBAR, cr as PROVIDER_CREDENTIAL_TYPE_MAP, dr as chatHubProviderSchema, fr as emptyChatModelsResponse, vo as CHAT_HUB_SIDE_MENU_DRAWER_MODAL_KEY } from "./constants-C_oOJnqT.js";
import { t as retry } from "./retry-sDkwzrPY.js";
import { t as CredentialIcon_default } from "./CredentialIcon-BTWsGB9X.js";
import { a as MOBILE_MEDIA_QUERY, i as CHAT_VIEW, r as CHAT_STORE } from "./constants-9ReQTHaF.js";
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
const fetchConversationsApi = async (context) => {
	return await makeRestApiRequest(context, "GET", "/chat/conversations");
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
function findOneFromModelsResponse(response) {
	for (const provider of chatHubProviderSchema.options) if (response[provider].models.length > 0) return response[provider].models[0];
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
	return { name: CHAT_VIEW };
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
	if (filter.provider !== "") filtered = filtered.filter((model) => model.model.provider === filter.provider);
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
		...streaming?.model ? flattenModel(streaming.model) : {
			provider: null,
			model: null,
			workflowId: null,
			agentId: null
		}
	};
}
const useChatStore = defineStore(CHAT_STORE, () => {
	const rootStore = useRootStore();
	const telemetry = useTelemetry();
	const agents = ref();
	const sessions = ref();
	const currentEditingAgent = ref(null);
	const streaming = ref();
	const conversationsBySession = ref(/* @__PURE__ */ new Map());
	const getConversation = (sessionId) => conversationsBySession.value.get(sessionId);
	const getActiveMessages = (sessionId) => {
		const conversation = getConversation(sessionId);
		if (!conversation) return [];
		return conversation.activeMessageChain.map((id) => conversation.messages[id]).filter(Boolean);
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
	function updateMessage(sessionId, messageId, status) {
		const message = ensureConversation(sessionId).messages[messageId];
		if (!message) throw new Error(`Message with ID ${messageId} not found in session ${sessionId}`);
		message.status = status;
		message.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
	}
	async function fetchAgents(credentialMap) {
		agents.value = await fetchChatModelsApi(rootStore.restApiContext, { credentials: credentialMap });
		return agents.value;
	}
	async function fetchSessions() {
		sessions.value = await fetchConversationsApi(rootStore.restApiContext);
	}
	async function fetchMessages(sessionId) {
		const { conversation } = await fetchSingleConversationApi(rootStore.restApiContext, sessionId);
		const messages = linkMessages(Object.values(conversation.messages));
		const latestMessage = Object.values(messages).sort((a, b) => a.createdAt < b.createdAt ? -1 : 1).pop();
		conversationsBySession.value.set(sessionId, {
			messages,
			activeMessageChain: computeActiveChain(messages, latestMessage?.id ?? null)
		});
	}
	function onBeginMessage() {
		if (!streaming.value?.messageId) return;
		const message = createAiMessageFromStreamingState(streaming.value.sessionId, streaming.value.messageId, streaming.value);
		addMessage(streaming.value.sessionId, message);
		if (sessions.value?.some((session) => session.id === streaming.value?.sessionId)) return;
		sessions.value = [...sessions.value ?? [], {
			id: streaming.value.sessionId,
			title: "New Chat",
			ownerId: "",
			lastMessageAt: (/* @__PURE__ */ new Date()).toISOString(),
			credentialId: null,
			agentName: null,
			createdAt: (/* @__PURE__ */ new Date()).toISOString(),
			updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
			...flattenModel(streaming.value.model)
		}];
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
			case "error": {
				const message = ensureMessage(sessionId, chunk.metadata.messageId);
				if (message.status === "cancelled") return;
				updateMessage(sessionId, chunk.metadata.messageId, "error");
				onChunk(message.content ?? "");
				break;
			}
		}
	}
	async function onStreamDone() {
		if (!streaming.value) return;
		const { sessionId } = streaming.value;
		streaming.value = void 0;
		await retry(async () => {
			return (await fetchSingleConversationApi(rootStore.restApiContext, sessionId)).session.title !== "New Chat";
		}, 1e3, 3);
		await fetchSessions();
	}
	function onStreamError() {
		if (!streaming.value) return;
		const { sessionId } = streaming.value;
		streaming.value = void 0;
		const conversation = getConversation(sessionId);
		if (!conversation) return;
		for (const messageId of conversation.activeMessageChain) if (conversation.messages[messageId].status === "running") updateMessage(sessionId, messageId, "error");
	}
	function sendMessage(sessionId, message, model, credentials) {
		const messageId = v4_default();
		const conversation = ensureConversation(sessionId);
		const previousMessageId = conversation.activeMessageChain.length ? conversation.activeMessageChain[conversation.activeMessageChain.length - 1] : null;
		addMessage(sessionId, {
			id: messageId,
			sessionId,
			type: "human",
			name: "User",
			content: message,
			provider: null,
			model: model.provider === "n8n" || model.provider === "custom-agent" ? null : model.model,
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
			alternatives: []
		});
		streaming.value = {
			promptId: messageId,
			sessionId,
			model
		};
		sendMessageApi(rootStore.restApiContext, {
			model,
			messageId,
			sessionId,
			message,
			credentials,
			previousMessageId
		}, onStreamMessage, onStreamDone, onStreamError);
		telemetry.track("User sent chat hub message", {
			...flattenModel(model),
			is_custom: model.provider === "custom-agent",
			chat_session_id: sessionId
		});
	}
	function editMessage(sessionId, editId, content, model, credentials) {
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
			alternatives: []
		});
		else if (message?.type === "ai") replaceMessageContent(sessionId, editId, content);
		streaming.value = {
			promptId,
			sessionId,
			model
		};
		editMessageApi(rootStore.restApiContext, sessionId, editId, {
			model,
			messageId: promptId,
			message: content,
			credentials
		}, onStreamMessage, onStreamDone, onStreamError);
	}
	function regenerateMessage(sessionId, retryId, model, credentials) {
		if (!(ensureConversation(sessionId).messages[retryId]?.previousMessageId ?? null)) throw new Error("No previous message to base regeneration on");
		streaming.value = {
			promptId: retryId,
			sessionId,
			model
		};
		regenerateMessageApi(rootStore.restApiContext, sessionId, retryId, {
			model,
			credentials
		}, onStreamMessage, onStreamDone, onStreamError);
	}
	async function stopStreamingMessage(sessionId) {
		const currentMessage = lastMessage(sessionId);
		if (currentMessage && currentMessage.status === "running") {
			updateMessage(sessionId, currentMessage.id, "cancelled");
			await stopGenerationApi(rootStore.restApiContext, sessionId, currentMessage.id);
			streaming.value = void 0;
		}
	}
	function updateSession(sessionId, toUpdate) {
		sessions.value = sessions.value?.map((session) => session.id === sessionId ? {
			...session,
			...toUpdate
		} : session);
	}
	async function renameSession(sessionId, title) {
		updateSession(sessionId, (await updateConversationTitleApi(rootStore.restApiContext, sessionId, title)).session);
	}
	async function updateSessionModel(sessionId, model) {
		await updateConversationApi(rootStore.restApiContext, sessionId, model);
		updateSession(sessionId, model);
	}
	async function deleteSession(sessionId) {
		await deleteConversationApi(rootStore.restApiContext, sessionId);
		sessions.value = sessions.value?.filter((session) => session.id !== sessionId);
	}
	function switchAlternative(sessionId, messageId) {
		const conversation = getConversation(sessionId);
		if (!conversation?.messages[messageId]) throw new Error(`Message with ID ${messageId} not found in session ${sessionId}`);
		conversation.activeMessageChain = computeActiveChain(conversation.messages, messageId);
	}
	async function fetchCustomAgent(agentId) {
		const agent = await fetchAgentApi(rootStore.restApiContext, agentId);
		currentEditingAgent.value = agent;
		return agent;
	}
	function getCustomAgent(agentId) {
		return agents.value?.["custom-agent"].models.find((model) => "agentId" in model && model.agentId === agentId);
	}
	async function createCustomAgent(payload, credentials) {
		const agent = await createAgentApi(rootStore.restApiContext, payload);
		const agentModel = {
			model: {
				provider: "custom-agent",
				agentId: agent.id
			},
			name: agent.name,
			description: agent.description ?? null,
			createdAt: agent.createdAt,
			updatedAt: agent.updatedAt
		};
		agents.value?.["custom-agent"].models.push(agentModel);
		await fetchAgents(credentials);
		telemetry.track("User created agent", { ...flattenModel(payload) });
		return agentModel;
	}
	async function updateCustomAgent(agentId, payload, credentials) {
		const agent = await updateAgentApi(rootStore.restApiContext, agentId, payload);
		if (agents.value?.["custom-agent"]) agents.value["custom-agent"].models = agents.value["custom-agent"].models.map((model) => "agentId" in model && model.agentId === agentId ? {
			...model,
			name: agent.name
		} : model);
		await fetchAgents(credentials);
		return agent;
	}
	async function deleteCustomAgent(agentId, credentials) {
		await deleteAgentApi(rootStore.restApiContext, agentId);
		if (agents.value?.["custom-agent"]) agents.value["custom-agent"].models = agents.value["custom-agent"].models.filter((model) => !("agentId" in model) || model.agentId !== agentId);
		await fetchAgents(credentials);
	}
	function getAgent(model) {
		if (!agents.value) return;
		return agents.value[model.provider].models.find((agent) => isMatchedAgent(agent, model));
	}
	return {
		agents: computed(() => agents.value ?? emptyChatModelsResponse),
		agentsReady: computed(() => agents.value !== void 0),
		currentEditingAgent,
		getAgent,
		fetchAgents,
		getCustomAgent,
		fetchCustomAgent,
		createCustomAgent,
		updateCustomAgent,
		deleteCustomAgent,
		sessions: computed(() => sessions.value ?? []),
		sessionsReady: computed(() => sessions.value !== void 0),
		fetchSessions,
		renameSession,
		updateSessionModel,
		deleteSession,
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
		stopStreamingMessage
	};
});
var ChatAgentAvatar_default = /* @__PURE__ */ defineComponent({
	__name: "ChatAgentAvatar",
	props: {
		agent: {},
		size: {},
		tooltip: { type: Boolean }
	},
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nTooltip_default), {
				"show-after": 100,
				placement: "left",
				disabled: !_ctx.tooltip
			}, createSlots({
				default: withCtx(() => [!_ctx.agent ? (openBlock(), createBlock(unref(N8nIcon_default), {
					key: 0,
					icon: "messages-square",
					size: _ctx.size === "lg" ? "xxlarge" : _ctx.size === "sm" ? "large" : "xlarge"
				}, null, 8, ["size"])) : _ctx.agent.model.provider === "custom-agent" || _ctx.agent.model.provider === "n8n" ? (openBlock(), createBlock(unref(N8nAvatar_default), {
					key: 1,
					"first-name": _ctx.agent.name,
					size: _ctx.size === "lg" ? "medium" : _ctx.size === "sm" ? "xxsmall" : "xsmall"
				}, null, 8, ["first-name", "size"])) : (openBlock(), createBlock(CredentialIcon_default, {
					key: 2,
					"credential-type-name": unref(PROVIDER_CREDENTIAL_TYPE_MAP)[_ctx.agent.model.provider],
					size: _ctx.size === "sm" ? 16 : _ctx.size === "lg" ? 40 : 20
				}, null, 8, ["credential-type-name", "size"]))]),
				_: 2
			}, [_ctx.agent ? {
				name: "content",
				fn: withCtx(() => [createTextVNode(toDisplayString(_ctx.agent.name), 1)]),
				key: "0"
			} : void 0]), 1032, ["disabled"]);
		};
	}
});
function useChatHubSidebarState() {
	const isMobileDevice = useMediaQuery(MOBILE_MEDIA_QUERY);
	const uiStore = useUIStore();
	const isStatic = useLocalStorage(LOCAL_STORAGE_CHAT_HUB_STATIC_SIDEBAR(useUsersStore().currentUserId ?? "anonymous"), !isMobileDevice.value, { writeDefaults: false });
	const canBeStatic = computed(() => !isMobileDevice.value);
	function toggleOpen(value) {
		const isOpen = !!uiStore.isModalActiveById[CHAT_HUB_SIDE_MENU_DRAWER_MODAL_KEY];
		if (value ?? !isOpen) uiStore.openModal(CHAT_HUB_SIDE_MENU_DRAWER_MODAL_KEY);
		else uiStore.closeModal(CHAT_HUB_SIDE_MENU_DRAWER_MODAL_KEY);
	}
	function toggleStatic(value) {
		const newValue = value ?? !isStatic.value;
		isStatic.value = newValue;
		toggleOpen(newValue);
	}
	return {
		canBeStatic,
		isStatic: computed(() => canBeStatic.value && isStatic.value),
		isCollapsed: computed(() => !isStatic.value && uiStore.isModalActiveById["chatHubSideMenuDrawer"] !== true),
		toggleOpen,
		toggleStatic
	};
}
export { findOneFromModelsResponse as a, getAgentRoute as c, stringifyModel as d, unflattenModel as f, filterAndSortAgents as i, groupConversationsByDate as l, ChatAgentAvatar_default as n, flattenModel as o, fetchChatModelsApi as p, useChatStore as r, fromStringToModel as s, useChatHubSidebarState as t, isMatchedAgent as u };
