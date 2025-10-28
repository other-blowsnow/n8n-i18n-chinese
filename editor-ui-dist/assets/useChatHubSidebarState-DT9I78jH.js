import { C as computed, It as ref } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { M as useMediaQuery, j as useLocalStorage } from "./_MapCache-DZMn6F95.js";
import { Js as useRootStore, Li as useUIStore, gc as defineStore, ir as useUsersStore, lc as streamRequest, sc as makeRestApiRequest, yc as v4_default } from "./useTelemetry-C3cN19b2.js";
import { Ln as LOCAL_STORAGE_CHAT_HUB_STATIC_SIDEBAR, to as chatHubProviderSchema, tt as CHAT_HUB_SIDE_MENU_DRAWER_MODAL_KEY } from "./constants-CiCQTzlI.js";
import { i as MOBILE_MEDIA_QUERY, n as CHAT_STORE } from "./constants-BlMVf5I9.js";
function findOneFromModelsResponse(response) {
	for (const provider of chatHubProviderSchema.options) if (response[provider].models.length > 0) return {
		model: response[provider].models[0].name,
		provider,
		workflowId: null
	};
}
function getRelativeDate(now, dateString) {
	const date = dateString ? new Date(dateString) : now;
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
		const group = getRelativeDate(now, session.lastMessageAt);
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
			sessions: sessions$1.sort((a, b) => (b.lastMessageAt ? Date.parse(b.lastMessageAt) : +now) - (a.lastMessageAt ? Date.parse(a.lastMessageAt) : +now))
		}] : [];
	});
}
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
const updateConversationTitleApi = async (context, sessionId, title) => {
	return await makeRestApiRequest(context, "POST", `/chat/conversations/${sessionId}/rename`, { title });
};
const deleteConversationApi = async (context, sessionId) => {
	await makeRestApiRequest(context, "DELETE", `/chat/conversations/${sessionId}`);
};
const fetchSingleConversationApi = async (context, sessionId) => {
	return await makeRestApiRequest(context, "GET", `/chat/conversations/${sessionId}`);
};
const useChatStore = defineStore(CHAT_STORE, () => {
	const rootStore = useRootStore();
	const models = ref();
	const loadingModels = ref(false);
	const streamingMessageId = ref();
	const sessions = ref([]);
	const isResponding = computed(() => streamingMessageId.value !== void 0);
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
	}
	function appendMessage(sessionId, messageId, chunk) {
		const message = ensureConversation(sessionId).messages[messageId];
		if (!message) throw new Error(`Message with ID ${messageId} not found in session ${sessionId}`);
		message.content += chunk;
	}
	async function fetchChatModels(credentialMap) {
		loadingModels.value = true;
		models.value = await fetchChatModelsApi(rootStore.restApiContext, { credentials: credentialMap });
		loadingModels.value = false;
		return models.value;
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
	function onBeginMessage(sessionId, messageId, replyToMessageId, retryOfMessageId, _nodeId, _runIndex) {
		streamingMessageId.value = messageId;
		addMessage(sessionId, {
			id: messageId,
			sessionId,
			type: "ai",
			name: "AI",
			content: "",
			provider: null,
			model: null,
			workflowId: null,
			executionId: null,
			status: "success",
			createdAt: (/* @__PURE__ */ new Date()).toISOString(),
			updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
			previousMessageId: replyToMessageId,
			retryOfMessageId,
			revisionOfMessageId: null,
			responses: [],
			alternatives: []
		});
	}
	function onChunk(sessionId, messageId, chunk, _nodeId, _runIndex) {
		appendMessage(sessionId, messageId, chunk);
	}
	function onEndMessage() {
		streamingMessageId.value = void 0;
	}
	function onStreamMessage(sessionId, message, messageId, replyToMessageId, retryOfMessageId) {
		const nodeId = message.metadata?.nodeId || "unknown";
		const runIndex = message.metadata?.runIndex;
		switch (message.type) {
			case "begin":
				onBeginMessage(sessionId, messageId, replyToMessageId, retryOfMessageId, nodeId, runIndex);
				break;
			case "item":
				onChunk(sessionId, messageId, message.content ?? "", nodeId, runIndex);
				break;
			case "end":
				onEndMessage();
				break;
			case "error":
				if (streamingMessageId.value === messageId) {
					onChunk(sessionId, messageId, `Error: ${message.content ?? "Unknown error"}`, nodeId, runIndex);
					onEndMessage();
				}
				break;
		}
	}
	async function onStreamDone() {
		streamingMessageId.value = void 0;
		await fetchSessions();
	}
	function onStreamError(_e) {
		streamingMessageId.value = void 0;
	}
	function sendMessage(sessionId, message, model, credentials) {
		const messageId = v4_default();
		const replyId = v4_default();
		const conversation = ensureConversation(sessionId);
		const previousMessageId = conversation.activeMessageChain.length ? conversation.activeMessageChain[conversation.activeMessageChain.length - 1] : null;
		addMessage(sessionId, {
			id: messageId,
			sessionId,
			type: "human",
			name: "User",
			content: message,
			provider: null,
			model: model?.model ?? null,
			workflowId: null,
			executionId: null,
			status: "success",
			createdAt: (/* @__PURE__ */ new Date()).toISOString(),
			updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
			previousMessageId,
			retryOfMessageId: null,
			revisionOfMessageId: null,
			responses: [],
			alternatives: []
		});
		if (!model || !credentials) {
			addMessage(sessionId, {
				id: replyId,
				sessionId,
				type: "ai",
				name: "AI",
				content: "**ERROR:** Select a model to start a conversation.",
				provider: null,
				model: null,
				workflowId: null,
				executionId: null,
				status: "error",
				createdAt: (/* @__PURE__ */ new Date()).toISOString(),
				updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
				previousMessageId: messageId,
				retryOfMessageId: null,
				revisionOfMessageId: null,
				responses: [],
				alternatives: []
			});
			return;
		}
		sendMessageApi(rootStore.restApiContext, {
			model,
			messageId,
			sessionId,
			replyId,
			message,
			credentials,
			previousMessageId
		}, (chunk) => onStreamMessage(sessionId, chunk, replyId, messageId, null), onStreamDone, onStreamError);
	}
	function editMessage(sessionId, editId, message, model, credentials) {
		const messageId = v4_default();
		const replyId = v4_default();
		const previousMessageId = ensureConversation(sessionId).messages[editId]?.previousMessageId ?? null;
		addMessage(sessionId, {
			id: messageId,
			sessionId,
			type: "human",
			name: "User",
			content: message,
			provider: null,
			model: null,
			workflowId: null,
			executionId: null,
			status: "success",
			createdAt: (/* @__PURE__ */ new Date()).toISOString(),
			updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
			previousMessageId,
			retryOfMessageId: null,
			revisionOfMessageId: editId,
			responses: [],
			alternatives: []
		});
		editMessageApi(rootStore.restApiContext, sessionId, editId, {
			model,
			messageId,
			replyId,
			message,
			credentials
		}, (chunk) => onStreamMessage(sessionId, chunk, replyId, messageId, null), onStreamDone, onStreamError);
	}
	function regenerateMessage(sessionId, retryId, model, credentials) {
		const replyId = v4_default();
		const previousMessageId = ensureConversation(sessionId).messages[retryId]?.previousMessageId ?? null;
		if (!previousMessageId) throw new Error("No previous message to base regeneration on");
		regenerateMessageApi(rootStore.restApiContext, sessionId, retryId, {
			model,
			replyId,
			credentials
		}, (chunk) => onStreamMessage(sessionId, chunk, replyId, previousMessageId, retryId), onStreamDone, onStreamError);
	}
	async function stopStreamingMessage(sessionId) {
		if (streamingMessageId.value) {
			const messageId = streamingMessageId.value;
			onEndMessage();
			await stopGenerationApi(rootStore.restApiContext, sessionId, messageId);
		}
	}
	async function renameSession(sessionId, title) {
		const updated = await updateConversationTitleApi(rootStore.restApiContext, sessionId, title);
		sessions.value = sessions.value.map((session) => session.id === sessionId ? updated.session : session);
	}
	async function deleteSession(sessionId) {
		await deleteConversationApi(rootStore.restApiContext, sessionId);
		sessions.value = sessions.value.filter((session) => session.id !== sessionId);
	}
	function switchAlternative(sessionId, messageId) {
		const conversation = getConversation(sessionId);
		if (!conversation?.messages[messageId]) throw new Error(`Message with ID ${messageId} not found in session ${sessionId}`);
		conversation.activeMessageChain = computeActiveChain(conversation.messages, messageId);
	}
	return {
		models,
		sessions,
		conversationsBySession,
		loadingModels,
		isResponding,
		streamingMessageId,
		fetchChatModels,
		sendMessage,
		editMessage,
		regenerateMessage,
		stopStreamingMessage,
		fetchSessions,
		fetchMessages,
		renameSession,
		deleteSession,
		getConversation,
		getActiveMessages,
		switchAlternative
	};
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
export { groupConversationsByDate as i, useChatStore as n, findOneFromModelsResponse as r, useChatHubSidebarState as t };
