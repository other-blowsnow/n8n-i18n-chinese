import { Ft as ref, S as computed } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { at as useI18n } from "./core-BLjdI0_M.js";
import { Pn as useToast, fr as useTelemetry, it as useCredentialsStore, s as useWorkflowsStore } from "./users.store--Hq-ujRu.js";
import { $r as chatHubVectorStoreProviderSchema, A as IN_PROGRESS_EXECUTION_ID, Eo as v4, Fa as deepCopy, Ki as createRunExecutionData, Kr as PROVIDER_CREDENTIAL_TYPE_MAP, Pt as CHAT_TRIGGER_NODE_TYPE, Qc as EnterpriseEditionFeature, Xr as chatHubLLMProviderSchema, Zr as chatHubMessageWithButtonsSchema, ei as emptyChatModelsResponse, qr as VECTOR_STORE_PROVIDER_CREDENTIAL_TYPE_MAP } from "./constants-fJx0oi9Z.js";
import { T as defineStore, a as ResponseError, c as makeRestApiRequest, r as STORES, t as useRootStore } from "./useRootStore-udEbvQrW.js";
import { t as useSettingsStore } from "./settings.store-CnuErby1.js";
import { t as retry } from "./retry-B68J7-91.js";
import { T as unflattenModel, a as createFakeAgent, i as createAiMessageFromStreamingState, n as buildUiMessages, o as createSessionFromStreamingState, r as chunkFilesBySize, t as convertFileToBinaryData, u as flattenModel, y as isMatchedAgent } from "./fileUtils-RuusO0Y2.js";
//#region src/features/ai/chatHub/chat.api.ts
var fetchChatModelsApi = async (context, payload) => {
	return await makeRestApiRequest(context, "POST", "/chat/models", payload);
};
/**
* Send a message and stream the AI response.
* Returns immediately; actual content comes via Push events.
*/
async function sendMessageApi(ctx, payload) {
	return await makeRestApiRequest(ctx, "POST", "/chat/conversations/send", payload);
}
/**
* Send a message using the draft workflow version (manual execution from canvas).
* The push-ref header is sent automatically via context.pushRef, enabling canvas
* execution events (nodeExecuteBefore/After).
* Returns immediately; actual content comes via Push events.
*/
async function sendMessageManualApi(ctx, workflowId, payload) {
	return await makeRestApiRequest(ctx, "POST", `/chat/conversations/manual/${workflowId}/send`, payload);
}
/**
* Edit a message and stream the AI response.
* Returns immediately; actual content comes via Push events.
*/
async function editMessageApi(ctx, request) {
	return await makeRestApiRequest(ctx, "POST", `/chat/conversations/${request.sessionId}/messages/${request.editId}/edit`, request.payload);
}
/**
* Edit a message using the draft workflow version (manual execution from canvas).
* Returns immediately; actual content comes via Push events.
*/
async function editMessageManualApi(ctx, request) {
	return await makeRestApiRequest(ctx, "POST", `/chat/conversations/manual/${request.workflowId}/${request.sessionId}/messages/${request.editId}/edit`, request.payload);
}
/**
* Regenerate a message and stream the AI response.
* Returns immediately; actual content comes via Push events.
*/
async function regenerateMessageApi(ctx, request) {
	return await makeRestApiRequest(ctx, "POST", `/chat/conversations/${request.sessionId}/messages/${request.retryId}/regenerate`, request.payload);
}
/**
* Regenerate a message using the draft workflow version (manual execution from canvas).
* Returns immediately; actual content comes via Push events.
*/
async function regenerateMessageManualApi(ctx, request) {
	return await makeRestApiRequest(ctx, "POST", `/chat/conversations/manual/${request.workflowId}/${request.sessionId}/messages/${request.retryId}/regenerate`, request.payload);
}
/**
* Reconnect to an active chat stream after reconnection
*/
async function reconnectToSessionApi(ctx, sessionId, lastSequence) {
	return await makeRestApiRequest(ctx, "POST", `/chat/conversations/${sessionId}/reconnect${lastSequence !== void 0 ? `?lastSequence=${lastSequence}` : ""}`, {});
}
var stopGenerationApi = async (context, sessionId, messageId) => {
	await makeRestApiRequest(context, "POST", `/chat/conversations/${sessionId}/messages/${messageId}/stop`);
};
var fetchConversationsApi = async (context, limit, cursor, type) => {
	const queryParams = new URLSearchParams();
	queryParams.append("limit", limit.toString());
	if (cursor) queryParams.append("cursor", cursor);
	if (type) queryParams.append("type", type);
	return await makeRestApiRequest(context, "GET", `/chat/conversations?${queryParams.toString()}`);
};
var updateConversationApi = async (context, sessionId, updates) => {
	return await makeRestApiRequest(context, "PATCH", `/chat/conversations/${sessionId}`, updates);
};
var updateConversationTitleApi = async (context, sessionId, title) => {
	return await updateConversationApi(context, sessionId, { title });
};
var deleteConversationApi = async (context, sessionId) => {
	await makeRestApiRequest(context, "DELETE", `/chat/conversations/${sessionId}`);
};
var fetchSingleConversationApi = async (context, sessionId) => {
	return await makeRestApiRequest(context, "GET", `/chat/conversations/${sessionId}`);
};
var fetchAgentApi = async (context, agentId) => {
	return await makeRestApiRequest(context, "GET", `/chat/agents/${agentId}`);
};
var createAgentApi = async (context, payload) => {
	return await makeRestApiRequest(context, "POST", "/chat/agents", payload);
};
var updateAgentApi = async (context, agentId, payload) => {
	return await makeRestApiRequest(context, "POST", `/chat/agents/${agentId}`, payload);
};
var deleteAgentApi = async (context, agentId) => {
	await makeRestApiRequest(context, "DELETE", `/chat/agents/${agentId}`);
};
var uploadAgentFilesApi = async (context, agentId, files) => {
	const formData = new FormData();
	for (const file of files) formData.append("files", file);
	return await makeRestApiRequest(context, "POST", `/chat/agents/${agentId}/files`, formData);
};
var deleteAgentFileApi = async (context, agentId, fileKnowledgeId) => {
	await makeRestApiRequest(context, "DELETE", `/chat/agents/${agentId}/files/${encodeURIComponent(fileKnowledgeId)}`);
};
var fetchChatSettingsApi = async (context) => {
	return (await makeRestApiRequest(context, "GET", "/chat/settings")).providers;
};
var fetchChatProviderSettingsApi = async (context, provider) => {
	return (await makeRestApiRequest(context, "GET", "/chat/settings/" + provider)).settings;
};
var updateChatSettingsApi = async (context, settings) => {
	return await makeRestApiRequest(context, "POST", "/chat/settings", { payload: settings });
};
var updateSemanticSearchSettingsApi = async (context, data) => {
	await makeRestApiRequest(context, "PUT", "/chat/semantic-search", data);
};
function buildChatAttachmentUrl(context, sessionId, messageId, attachmentIndex) {
	return `${context.baseUrl}/chat/conversations/${sessionId}/messages/${messageId}/attachments/${attachmentIndex}`;
}
/**
* Fetch the execution status for a workflow using dynamic credentials.
* Returns credential statuses and whether the workflow is ready to execute.
*/
async function fetchWorkflowExecutionStatus(ctx, workflowId) {
	return await makeRestApiRequest(ctx, "GET", `/workflows/${workflowId}/execution-status?authSource=cookie`);
}
/**
* Start the OAuth authorization flow for a dynamic credential.
* Returns the OAuth provider URL to open in a popup.
*/
async function authorizeDynamicCredential(ctx, credentialId, resolverId) {
	return await makeRestApiRequest(ctx, "POST", `/credentials/${credentialId}/authorize?resolverId=${encodeURIComponent(resolverId)}&authSource=cookie`);
}
/**
* Revoke (disconnect) a dynamic credential.
*/
async function revokeDynamicCredential(ctx, credentialId, resolverId) {
	await makeRestApiRequest(ctx, "DELETE", `/credentials/${credentialId}/revoke?resolverId=${encodeURIComponent(resolverId)}&authSource=cookie`);
}
var fetchToolsApi = async (context) => {
	return await makeRestApiRequest(context, "GET", "/chat/tools");
};
var createToolApi = async (context, definition) => {
	return await makeRestApiRequest(context, "POST", "/chat/tools", { definition });
};
var updateToolApi = async (context, toolId, updates) => {
	return await makeRestApiRequest(context, "PATCH", `/chat/tools/${toolId}`, updates);
};
var deleteToolApi = async (context, toolId) => {
	await makeRestApiRequest(context, "DELETE", `/chat/tools/${toolId}`);
};
//#endregion
//#region ../../@n8n/chat-hub/src/parser.ts
function appendChunkToParsedMessageItems(items, chunk) {
	const result = [...items];
	let remaining = chunk;
	if (result.length > 0) {
		const lastItem = result[result.length - 1];
		if (lastItem.type === "hidden") {
			remaining = lastItem.content + chunk;
			result.pop();
		} else if ((lastItem.type === "artifact-create" || lastItem.type === "artifact-edit") && lastItem.isIncomplete) {
			remaining = lastItem.content + chunk;
			result.pop();
		}
	}
	const buttonChunk = tryParseButtonsJson(remaining);
	if (buttonChunk) {
		result.push(buttonChunk);
		return result;
	}
	let currentPos = 0;
	const createCommandRegex = /<command:artifact-create>/g;
	const editCommandRegex = /<command:artifact-edit>/g;
	while (currentPos < remaining.length) {
		createCommandRegex.lastIndex = currentPos;
		editCommandRegex.lastIndex = currentPos;
		const createMatch = createCommandRegex.exec(remaining);
		const editMatch = editCommandRegex.exec(remaining);
		let nextMatch = null;
		let commandType = null;
		if (createMatch && editMatch) if (createMatch.index < editMatch.index) {
			nextMatch = createMatch;
			commandType = "create";
		} else {
			nextMatch = editMatch;
			commandType = "edit";
		}
		else if (createMatch) {
			nextMatch = createMatch;
			commandType = "create";
		} else if (editMatch) {
			nextMatch = editMatch;
			commandType = "edit";
		}
		if (!nextMatch || !commandType) {
			const textContent = remaining.slice(currentPos);
			if (textContent) {
				const { text, hiddenPrefix } = splitPotentialCommandPrefix(textContent);
				if (text) addTextToResult(result, text);
				if (hiddenPrefix) result.push({
					type: "hidden",
					content: hiddenPrefix
				});
			}
			break;
		}
		if (nextMatch.index > currentPos) addTextToResult(result, remaining.slice(currentPos, nextMatch.index));
		const commandStart = nextMatch.index;
		const commandContent = remaining.slice(commandStart);
		if (commandType === "create") {
			const parsed = parseArtifactCreateCommand(commandContent);
			result.push(parsed.item);
			currentPos = commandStart + parsed.consumed;
		} else {
			const parsed = parseArtifactEditCommand(commandContent);
			result.push(parsed.item);
			currentPos = commandStart + parsed.consumed;
		}
	}
	return result;
}
function addTextToResult(result, textContent) {
	if (textContent === "") return;
	if (result.length > 0) {
		const lastItem = result[result.length - 1];
		if (lastItem.type === "text") {
			result[result.length - 1] = {
				type: "text",
				content: lastItem.content + textContent
			};
			return;
		}
	}
	result.push({
		type: "text",
		content: textContent
	});
}
function splitPotentialCommandPrefix(text) {
	const commandTags = ["<command:artifact-create>", "<command:artifact-edit>"];
	for (let len = 1; len <= Math.min(text.length, 30); len++) {
		const suffix = text.slice(-len);
		for (const tag of commandTags) if (tag.startsWith(suffix)) return {
			text: text.slice(0, -len),
			hiddenPrefix: suffix
		};
	}
	return {
		text,
		hiddenPrefix: ""
	};
}
function parseArtifactCreateCommand(content) {
	const closingIndex = content.indexOf("</command:artifact-create>");
	const isIncomplete = closingIndex === -1;
	const commandContent = isIncomplete ? content : content.slice(0, closingIndex + 26);
	return {
		item: {
			type: "artifact-create",
			content: commandContent,
			command: {
				title: extractTagContent(commandContent, "title") ?? "",
				type: extractTagContent(commandContent, "type") ?? "",
				content: extractTagContent(commandContent, "content") ?? ""
			},
			isIncomplete
		},
		consumed: commandContent.length
	};
}
function parseArtifactEditCommand(content) {
	const closingIndex = content.indexOf("</command:artifact-edit>");
	const isIncomplete = closingIndex === -1;
	const commandContent = isIncomplete ? content : content.slice(0, closingIndex + 24);
	return {
		item: {
			type: "artifact-edit",
			content: commandContent,
			command: {
				title: extractTagContent(commandContent, "title") ?? "",
				oldString: extractTagContent(commandContent, "oldString") ?? "",
				newString: extractTagContent(commandContent, "newString") ?? "",
				replaceAll: (extractTagContent(commandContent, "replaceAll") ?? "false").toLowerCase() === "true"
			},
			isIncomplete
		},
		consumed: commandContent.length
	};
}
function extractTagContent(xml, tagName) {
	const openTag = `<${tagName}>`;
	const closeTag = `</${tagName}>`;
	const startIndex = xml.indexOf(openTag);
	if (startIndex === -1) return null;
	const contentStart = startIndex + openTag.length;
	const endIndex = xml.indexOf(closeTag, contentStart);
	if (endIndex === -1) {
		let content = xml.slice(contentStart);
		for (let len = 1; len < closeTag.length; len++) {
			const partialCloseTag = closeTag.slice(0, len);
			if (content.endsWith(partialCloseTag)) {
				content = content.slice(0, -len);
				break;
			}
		}
		return content.length > 0 ? content : null;
	}
	return xml.slice(contentStart, endIndex);
}
function tryParseButtonsJson(content) {
	if (!content.startsWith("{")) return null;
	try {
		const parsed = JSON.parse(content);
		const result = chatHubMessageWithButtonsSchema.safeParse(parsed);
		if (result.success) return {
			type: "with-buttons",
			content: result.data.text,
			buttons: result.data.buttons,
			blockUserInput: result.data.blockUserInput
		};
	} catch {}
	return null;
}
//#endregion
//#region ../../@n8n/chat-hub/src/artifact.ts
function collectChatArtifacts(items) {
	const artifacts = [];
	for (const item of items) if (item.type === "artifact-create") {
		if (!item.command.title) continue;
		artifacts.push({
			title: item.command.title,
			type: item.command.type,
			content: item.command.content
		});
	} else if (item.type === "artifact-edit") {
		const targetDoc = artifacts.find((doc) => doc.title === item.command.title);
		if (targetDoc) if (item.command.replaceAll) targetDoc.content = targetDoc.content.split(item.command.oldString).join(item.command.newString);
		else targetDoc.content = targetDoc.content.replace(item.command.oldString, item.command.newString);
	}
	return artifacts;
}
//#endregion
//#region ../../@n8n/chat-hub/src/constants.ts
var EMBEDDINGS_NODE_TYPE_MAP = {
	openai: {
		name: "@n8n/n8n-nodes-langchain.embeddingsOpenAi",
		version: 1.2
	},
	google: {
		name: "@n8n/n8n-nodes-langchain.embeddingsGoogleGemini",
		version: 1
	},
	azureOpenAi: {
		name: "@n8n/n8n-nodes-langchain.embeddingsAzureOpenAi",
		version: 1
	},
	azureEntraId: {
		name: "@n8n/n8n-nodes-langchain.embeddingsAzureOpenAi",
		version: 1
	},
	ollama: {
		name: "@n8n/n8n-nodes-langchain.embeddingsOllama",
		version: 1
	},
	awsBedrock: {
		name: "@n8n/n8n-nodes-langchain.embeddingsAwsBedrock",
		version: 1
	},
	cohere: {
		name: "@n8n/n8n-nodes-langchain.embeddingsCohere",
		version: 1
	},
	mistralCloud: {
		name: "@n8n/n8n-nodes-langchain.embeddingsMistralCloud",
		version: 1
	}
};
var DEFAULT_SEMANTIC_SEARCH_SETTINGS = {
	embeddingModel: {
		credentialId: null,
		provider: chatHubLLMProviderSchema.options.filter((provider) => provider in EMBEDDINGS_NODE_TYPE_MAP)[0]
	},
	vectorStore: {
		credentialId: null,
		provider: chatHubVectorStoreProviderSchema.options[0]
	}
};
//#endregion
//#region src/features/ai/chatHub/chat.store.ts
var useChatStore = defineStore(STORES.CHAT_HUB, () => {
	const rootStore = useRootStore();
	const settingsStore = useSettingsStore();
	const credentialsStore = useCredentialsStore();
	const toast = useToast();
	const telemetry = useTelemetry();
	const i18n = useI18n();
	const agents = ref(null);
	let pendingAgentsFetch = null;
	const customAgents = ref({});
	const sessions = ref({
		byId: {},
		ids: null,
		hasMore: false,
		nextCursor: null,
		lastFetchedType: void 0
	});
	const sessionsLoadingMore = ref(false);
	const streaming = ref();
	const settingsLoading = ref(false);
	const settings = ref(null);
	const configuredTools = ref([]);
	const configuredToolsLoaded = ref(false);
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
		message.content = [{
			type: "text",
			content
		}];
	}
	function appendMessage(sessionId, messageId, chunk) {
		const message = ensureConversation(sessionId).messages[messageId];
		if (!message) throw new Error(`Message with ID ${messageId} not found in session ${sessionId}`);
		message.content = appendChunkToParsedMessageItems(message.content, chunk);
	}
	function updateMessage(sessionId, messageId, status, content) {
		const message = ensureConversation(sessionId).messages[messageId];
		if (!message) throw new Error(`Message with ID ${messageId} not found in session ${sessionId}`);
		message.status = status;
		if (content) message.content = content;
		message.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
	}
	async function fetchConfiguredTools() {
		const tools = await fetchToolsApi(rootStore.restApiContext);
		configuredTools.value = tools;
		configuredToolsLoaded.value = true;
		return tools;
	}
	async function addConfiguredTool(tool) {
		const created = await createToolApi(rootStore.restApiContext, tool);
		configuredTools.value = [...configuredTools.value, created];
		return created;
	}
	async function updateConfiguredTool(toolId, definition) {
		const updated = await updateToolApi(rootStore.restApiContext, toolId, { definition });
		configuredTools.value = configuredTools.value.map((t) => t.definition.id === toolId ? updated : t);
		return updated;
	}
	async function toggleToolEnabled(toolId, enabled) {
		const updated = await updateToolApi(rootStore.restApiContext, toolId, { enabled });
		configuredTools.value = configuredTools.value.map((t) => t.definition.id === toolId ? updated : t);
		return updated;
	}
	async function removeConfiguredTool(toolId) {
		await deleteToolApi(rootStore.restApiContext, toolId);
		configuredTools.value = configuredTools.value.filter((t) => t.definition.id !== toolId);
	}
	async function fetchAgents(credentialMap, options = {}) {
		pendingAgentsFetch ??= fetchChatModelsApi(rootStore.restApiContext, { credentials: credentialMap }).finally(() => {
			pendingAgentsFetch = null;
		});
		[agents.value] = await Promise.all([pendingAgentsFetch, new Promise((r) => setTimeout(r, options.minLoadingTime ?? 0))]);
		return agents.value;
	}
	async function fetchSessions(reset, options = {}) {
		if (sessionsLoadingMore.value) return;
		if (options.type !== void 0 && options.type !== sessions.value.lastFetchedType) reset = true;
		if (!reset && sessions.value && !sessions.value.hasMore && (sessions.value.ids ?? []).length > 0) return;
		if (!reset) sessionsLoadingMore.value = true;
		try {
			const cursor = reset ? void 0 : sessions.value?.nextCursor ?? void 0;
			const [response] = await Promise.all([fetchConversationsApi(rootStore.restApiContext, 18, cursor, options.type), new Promise((resolve) => setTimeout(resolve, options.minLoadingTime ?? 0))]);
			if (reset || sessions.value.ids === null) sessions.value.ids = [];
			sessions.value.hasMore = response.hasMore;
			sessions.value.nextCursor = response.nextCursor;
			sessions.value.lastFetchedType = options.type;
			for (const session of response.data) {
				sessions.value.ids.push(session.id);
				const existing = sessions.value.byId[session.id];
				sessions.value.byId[session.id] = {
					...session,
					toolIds: existing?.toolIds ?? session.toolIds
				};
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
		const activeMessageChain = computeActiveChain(messages, Object.values(messages).sort((a, b) => a.createdAt < b.createdAt ? -1 : 1).pop()?.id ?? null);
		conversationsBySession.value.set(sessionId, {
			messages,
			activeMessageChain
		});
		sessions.value.byId[sessionId] = session;
	}
	async function fetchConversationTitle(sessionId) {
		const current = sessions.value.byId[sessionId];
		if (current?.type === "manual") return;
		if (!current || current.title === "New Chat") await retry(async () => {
			try {
				return (await fetchSingleConversationApi(rootStore.restApiContext, sessionId)).session.title !== "New Chat";
			} catch (e) {
				return false;
			}
		}, 2e3, 10);
		await fetchSessions(true);
	}
	function ensureMessage(sessionId, messageId) {
		const message = ensureConversation(sessionId).messages[messageId];
		if (message) return message;
		return addMessage(sessionId, createAiMessageFromStreamingState(sessionId, messageId, streaming.value));
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
	async function handleApiError(error) {
		if (!streaming.value) return;
		const cause = error instanceof ResponseError ? new Error(getErrorMessageByStatusCode(error.httpStatusCode, error.message)) : error instanceof Error && error.message.includes("Failed to fetch") ? new Error(i18n.baseText("chatHub.error.noConnection")) : error;
		toast.showError(cause, i18n.baseText("chatHub.error.sendMessageFailed"));
		const { sessionId } = streaming.value;
		streaming.value = void 0;
		await fetchConversationTitle(sessionId);
	}
	/**
	* Check if the current canvas context allows manual execution.
	* Returns true when:
	* 1. The agent is an n8n workflow
	* 2. The workflow is currently open on the canvas
	* 3. The workflow has a chat trigger with availableInChat enabled
	*/
	function isCanvasManualExecution(model) {
		if (model.provider !== "n8n") return false;
		const workflowsStore = useWorkflowsStore();
		if (workflowsStore.workflowId !== model.workflowId) return false;
		const chatTrigger = workflowsStore.allNodes.find((node) => node.type === CHAT_TRIGGER_NODE_TYPE);
		if (!chatTrigger) return false;
		return chatTrigger.parameters?.availableInChat === true;
	}
	/**
	* Initialize workflowExecutionData scaffold so canvas push handlers can write
	* node results (makes nodes turn green during manual execution).
	*/
	function initManualExecutionScaffold() {
		const workflowsStore = useWorkflowsStore();
		workflowsStore.workflowExecutionData = {
			id: IN_PROGRESS_EXECUTION_ID,
			finished: false,
			mode: "manual",
			status: "running",
			createdAt: /* @__PURE__ */ new Date(),
			startedAt: /* @__PURE__ */ new Date(),
			stoppedAt: void 0,
			workflowId: workflowsStore.workflowId,
			data: createRunExecutionData({ resultData: { runData: {} } }),
			workflowData: workflowsStore.workflow
		};
		workflowsStore.private.setActiveExecutionId(null);
	}
	async function sendMessage(sessionId, message, agent, credentials, files = []) {
		const messageId = v4();
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
			attachments,
			agent
		};
		const useManualMode = isCanvasManualExecution(agent.model);
		const mode = useManualMode ? "manual" : "production";
		const source = useManualMode ? "canvas" : "chat_hub";
		telemetry.track("User sent chat hub message", {
			...flattenModel(agent.model),
			is_custom: agent.model.provider === "custom-agent",
			chat_session_id: sessionId,
			mode,
			source
		});
		const payload = {
			model: agent.model,
			messageId,
			sessionId,
			message,
			credentials,
			previousMessageId,
			attachments,
			agentName: agent.name,
			timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
		};
		try {
			if (!sessions.value.byId[sessionId]) {
				sessions.value.byId[sessionId] = createSessionFromStreamingState(streaming.value, configuredTools.value.filter((t) => t.enabled).map((t) => t.definition.id), useManualMode);
				sessions.value.ids ??= [];
				sessions.value.ids.unshift(sessionId);
			}
			if (useManualMode) {
				initManualExecutionScaffold();
				const { workflowId } = agent.model;
				await sendMessageManualApi(rootStore.restApiContext, workflowId, {
					messageId,
					sessionId,
					message,
					previousMessageId,
					attachments,
					agentName: agent.name,
					timeZone: payload.timeZone
				});
			} else await sendMessageApi(rootStore.restApiContext, payload);
		} catch (error) {
			await handleApiError(error);
		}
	}
	async function editMessage(sessionId, editId, content, agent, credentials, keepAttachmentIndices = [], newFiles = []) {
		const promptId = v4();
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
		const useManualMode = isCanvasManualExecution(agent.model);
		const mode = useManualMode ? "manual" : "production";
		const source = useManualMode ? "canvas" : "chat_hub";
		telemetry.track("User edited chat hub message", {
			...flattenModel(agent.model),
			is_custom: agent.model.provider === "custom-agent",
			chat_session_id: sessionId,
			chat_message_id: editId,
			mode,
			source
		});
		try {
			if (useManualMode) {
				initManualExecutionScaffold();
				await editMessageManualApi(rootStore.restApiContext, {
					workflowId: agent.model.workflowId,
					sessionId,
					editId,
					payload: {
						messageId: payload.messageId,
						message: payload.message,
						newAttachments: payload.newAttachments,
						keepAttachmentIndices: payload.keepAttachmentIndices,
						timeZone: payload.timeZone
					}
				});
			} else await editMessageApi(rootStore.restApiContext, {
				sessionId,
				editId,
				payload
			});
		} catch (error) {
			await handleApiError(error);
		}
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
			attachments: []
		};
		const useManualMode = isCanvasManualExecution(agent.model);
		const mode = useManualMode ? "manual" : "production";
		const source = useManualMode ? "canvas" : "chat_hub";
		telemetry.track("User regenerated chat hub message", {
			...flattenModel(agent.model),
			is_custom: agent.model.provider === "custom-agent",
			chat_session_id: sessionId,
			chat_message_id: retryId,
			mode,
			source
		});
		try {
			if (useManualMode) {
				initManualExecutionScaffold();
				await regenerateMessageManualApi(rootStore.restApiContext, {
					workflowId: agent.model.workflowId,
					sessionId,
					retryId,
					payload: { timeZone: payload.timeZone }
				});
			} else await regenerateMessageApi(rootStore.restApiContext, {
				sessionId,
				retryId,
				payload
			});
		} catch (error) {
			await handleApiError(error);
		}
	}
	async function stopStreamingMessage(sessionId) {
		const currentMessage = lastMessage(sessionId);
		if (currentMessage && currentMessage.status === "running") {
			updateMessage(sessionId, currentMessage.id, "cancelled");
			await stopGenerationApi(rootStore.restApiContext, sessionId, currentMessage.id);
			if (streaming.value?.sessionId === sessionId) {
				streaming.value = void 0;
				await fetchConversationTitle(sessionId);
			}
		}
	}
	function updateSession(sessionId, toUpdate) {
		const session = sessions.value.byId[sessionId];
		if (session) sessions.value.byId[sessionId] = {
			...session,
			...toUpdate
		};
	}
	async function toggleCustomAgentTool(agentId, toolId) {
		const agent = customAgents.value[agentId];
		if (!agent) throw new Error(`Custom agent with ID ${agentId} not found`);
		const currentIds = agent.toolIds ?? [];
		const newIds = currentIds.includes(toolId) ? currentIds.filter((id) => id !== toolId) : [...currentIds, toolId];
		customAgents.value[agentId] = {
			...agent,
			toolIds: newIds
		};
		await updateAgentApi(rootStore.restApiContext, agentId, { toolIds: newIds });
	}
	async function toggleSessionTool(sessionId, toolId) {
		const session = sessions.value?.byId[sessionId];
		if (!session) throw new Error(`Session with ID ${sessionId} not found`);
		const currentIds = session.toolIds ?? [];
		const newIds = currentIds.includes(toolId) ? currentIds.filter((id) => id !== toolId) : [...currentIds, toolId];
		updateSession(sessionId, (await updateConversationApi(rootStore.restApiContext, sessionId, { toolIds: newIds })).session);
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
	async function uploadFilesInChunks(agentId, files) {
		const chunks = chunkFilesBySize(files, (settingsStore.moduleSettings["chat-hub"]?.agentUploadMaxSizeMb ?? 20) * 1024 * 1024);
		let result;
		for (const chunk of chunks) result = await uploadAgentFilesApi(rootStore.restApiContext, agentId, chunk);
		return result;
	}
	async function createCustomAgent(payload, files, credentials) {
		let customAgent = await createAgentApi(rootStore.restApiContext, payload);
		if (files.length > 0) customAgent = await uploadFilesInChunks(customAgent.id, files);
		const baseModel = agents.value?.[customAgent.provider]?.models.find((model) => model.name === customAgent.model);
		const suggestedPrompts = customAgent.suggestedPrompts.filter((p) => p.text.trim().length > 0);
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
				allowFileUploads: false,
				allowedFilesMimeTypes: "",
				available: true
			},
			groupName: null,
			groupIcon: null,
			...suggestedPrompts.length > 0 ? { suggestedPrompts } : {}
		};
		agents.value?.["custom-agent"].models.push(agent);
		customAgents.value[customAgent.id] = customAgent;
		await fetchAgents(credentials);
		telemetry.track("User created agent", { ...flattenModel(payload) });
		return agent;
	}
	async function updateCustomAgent(agentId, payload, newFiles, fileKnowledgeIdsToDelete, credentials) {
		await updateAgentApi(rootStore.restApiContext, agentId, payload);
		for (const fileKnowledgeId of fileKnowledgeIdsToDelete) await deleteAgentFileApi(rootStore.restApiContext, agentId, fileKnowledgeId);
		if (newFiles.length > 0) await uploadFilesInChunks(agentId, newFiles);
		const customAgent = await fetchAgentApi(rootStore.restApiContext, agentId);
		if (agents.value?.["custom-agent"]) {
			const updatedSuggestedPrompts = customAgent.suggestedPrompts.filter((p) => p.text.trim().length > 0);
			agents.value["custom-agent"].models = agents.value["custom-agent"].models.map((model) => "agentId" in model && model.agentId === agentId ? {
				...model,
				name: customAgent.name,
				...updatedSuggestedPrompts.length > 0 ? { suggestedPrompts: updatedSuggestedPrompts } : { suggestedPrompts: void 0 }
			} : model);
		}
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
	/**
	* Handle the beginning of a WebSocket stream
	*/
	function handleWebSocketStreamBegin(data) {
		const { sessionId, messageId, previousMessageId, retryOfMessageId } = data;
		if (streaming.value?.sessionId === sessionId) {
			streaming.value.messageId = messageId;
			streaming.value.promptPreviousMessageId = previousMessageId;
			streaming.value.retryOfMessageId = retryOfMessageId;
		}
		const conversation = getConversation(sessionId);
		if (conversation?.messages[messageId]) return;
		if (previousMessageId && conversation?.messages[previousMessageId]?.status === "waiting") updateMessage(sessionId, previousMessageId, "success");
		const message = createAiMessageFromStreamingState(sessionId, messageId, streaming.value?.sessionId === sessionId ? streaming.value : void 0);
		message.previousMessageId = previousMessageId;
		message.retryOfMessageId = retryOfMessageId;
		addMessage(sessionId, message);
	}
	/**
	* Handle a WebSocket stream chunk
	*/
	function handleWebSocketStreamChunk(data) {
		const { sessionId, messageId, content } = data;
		if (!getConversation(sessionId)?.messages[messageId]) ensureMessage(sessionId, messageId);
		appendMessage(sessionId, messageId, content);
	}
	/**
	* Handle the end of a WebSocket stream (individual message stream ends, but execution may continue)
	*/
	function handleWebSocketStreamEnd(data) {
		const { sessionId, messageId, status } = data;
		updateMessage(sessionId, messageId, status);
	}
	/**
	* Handle a WebSocket stream error (individual message has an error)
	*/
	function handleWebSocketStreamError(data) {
		const { sessionId, messageId, error } = data;
		const message = ensureMessage(sessionId, messageId);
		if (message.content) message.content = appendChunkToParsedMessageItems(message.content, "\n\n" + error);
		else message.content = [{
			type: "text",
			content: error
		}];
		message.status = "error";
		updateMessage(sessionId, messageId, "error", message.content);
	}
	/**
	* Handle execution begin (whole streaming session starts)
	*/
	function handleWebSocketExecutionBegin(data) {
		const { sessionId } = data;
		if (streaming.value?.sessionId === sessionId) return;
		const session = sessions.value.byId[sessionId];
		if (!session) return;
		const model = unflattenModel(session);
		if (!model) return;
		streaming.value = {
			promptPreviousMessageId: null,
			promptId: "",
			promptText: "",
			sessionId,
			retryOfMessageId: null,
			revisionOfMessageId: null,
			attachments: [],
			agent: getAgent(model, {
				name: session.agentName,
				icon: session.agentIcon
			})
		};
	}
	/**
	* Handle execution end (whole streaming session ends)
	*/
	function handleWebSocketExecutionEnd(data) {
		const { sessionId, status } = data;
		if (streaming.value?.sessionId === sessionId) {
			const currentSessionId = streaming.value.sessionId;
			if (streaming.value.messageId) {
				const message = getConversation(sessionId)?.messages[streaming.value.messageId];
				if (message && message.status === "running") updateMessage(sessionId, streaming.value.messageId, status);
			}
			streaming.value = void 0;
			if (status === "error") toast.showError(/* @__PURE__ */ new Error("Execution failed"), i18n.baseText("chatHub.error.unknown"));
			fetchConversationTitle(currentSessionId);
		}
	}
	/**
	* Reconnect to an active stream after WebSocket reconnection
	*/
	async function reconnectToStream(sessionId, lastSequenceNumber) {
		try {
			const response = await reconnectToSessionApi(rootStore.restApiContext, sessionId, lastSequenceNumber);
			if (response.pendingChunks && response.pendingChunks.length > 0) {
				for (const chunk of response.pendingChunks) if (response.currentMessageId) appendMessage(sessionId, response.currentMessageId, chunk.content);
			}
			return response;
		} catch (error) {
			return null;
		}
	}
	/**
	* Handle a human message created event
	*/
	function handleHumanMessageCreated(data) {
		const conversation = conversationsBySession.value.get(data.sessionId);
		if (!conversation) return;
		if (conversation.messages[data.messageId]) return;
		const message = {
			id: data.messageId,
			sessionId: data.sessionId,
			type: "human",
			name: "User",
			content: [{
				type: "text",
				content: data.content
			}],
			previousMessageId: data.previousMessageId,
			retryOfMessageId: null,
			revisionOfMessageId: null,
			status: "success",
			attachments: data.attachments.map((a) => ({
				fileName: a.fileName,
				mimeType: a.mimeType
			})),
			provider: null,
			model: null,
			workflowId: null,
			agentId: null,
			executionId: null,
			createdAt: new Date(data.timestamp).toISOString(),
			updatedAt: new Date(data.timestamp).toISOString(),
			responses: [],
			alternatives: []
		};
		addMessage(data.sessionId, message);
	}
	/**
	* Handle a message edited event
	*/
	function handleMessageEdited(data) {
		const conversation = conversationsBySession.value.get(data.sessionId);
		if (!conversation) return;
		if (conversation.messages[data.messageId]) return;
		const originalMessage = conversation.messages[data.revisionOfMessageId];
		const message = {
			id: data.messageId,
			sessionId: data.sessionId,
			type: "human",
			name: originalMessage?.name ?? "User",
			content: [{
				type: "text",
				content: data.content
			}],
			previousMessageId: originalMessage?.previousMessageId ?? null,
			retryOfMessageId: null,
			revisionOfMessageId: data.revisionOfMessageId,
			status: "success",
			attachments: data.attachments.map((a) => ({
				fileName: a.fileName,
				mimeType: a.mimeType
			})),
			provider: originalMessage?.provider ?? null,
			model: originalMessage?.model ?? null,
			workflowId: originalMessage?.workflowId ?? null,
			agentId: originalMessage?.agentId ?? null,
			executionId: null,
			createdAt: new Date(data.timestamp).toISOString(),
			updatedAt: new Date(data.timestamp).toISOString(),
			responses: [],
			alternatives: []
		};
		addMessage(data.sessionId, message);
	}
	const vectorStoreIssue = computed(() => {
		const isSharingEnabled = settingsStore.isEnterpriseFeatureEnabled[EnterpriseEditionFeature.Sharing];
		const semanticSearch = settingsStore.moduleSettings["chat-hub"]?.semanticSearch ?? DEFAULT_SEMANTIC_SEARCH_SETTINGS;
		const vectorStoreCredentialId = semanticSearch?.vectorStore.credentialId ?? "";
		const vectorStoreCredential = credentialsStore.getCredentialById(vectorStoreCredentialId);
		if (!vectorStoreCredentialId) return "unspecified";
		if (!vectorStoreCredential || vectorStoreCredential?.type !== VECTOR_STORE_PROVIDER_CREDENTIAL_TYPE_MAP[semanticSearch.vectorStore.provider]) return "notFound";
		if (isSharingEnabled && !vectorStoreCredential.isGlobal) return "notShared";
	});
	const embeddingIssue = computed(() => {
		const isSharingEnabled = settingsStore.isEnterpriseFeatureEnabled[EnterpriseEditionFeature.Sharing];
		const semanticSearch = settingsStore.moduleSettings["chat-hub"]?.semanticSearch ?? DEFAULT_SEMANTIC_SEARCH_SETTINGS;
		const embeddingCredentialId = semanticSearch?.embeddingModel.credentialId ?? "";
		const embeddingCredential = credentialsStore.getCredentialById(embeddingCredentialId);
		if (!embeddingCredentialId) return "unspecified";
		if (!embeddingCredential || embeddingCredential?.type !== PROVIDER_CREDENTIAL_TYPE_MAP[semanticSearch.embeddingModel.provider]) return "notFound";
		if (isSharingEnabled && !embeddingCredential.isGlobal) return "notShared";
	});
	const semanticSearchReadiness = computed(() => ({
		isReadyForCurrentUser: (!vectorStoreIssue.value || vectorStoreIssue.value === "notShared") && (!embeddingIssue.value || embeddingIssue.value === "notShared"),
		vectorStoreIssue: vectorStoreIssue.value,
		embeddingIssue: embeddingIssue.value
	}));
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
		configuredTools,
		configuredToolsLoaded,
		fetchConfiguredTools,
		addConfiguredTool,
		updateConfiguredTool,
		toggleToolEnabled,
		removeConfiguredTool,
		sessions,
		sessionsReady: computed(() => sessions.value.ids !== null),
		sessionsLoading: computed(() => sessionsLoadingMore.value),
		fetchSessions,
		fetchMoreSessions,
		renameSession,
		updateSessionModel,
		deleteSession,
		toggleSessionTool,
		toggleCustomAgentTool,
		conversationsBySession,
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
		updateProviderSettings,
		semanticSearchReadiness,
		handleWebSocketExecutionBegin,
		handleWebSocketExecutionEnd,
		handleWebSocketStreamBegin,
		handleWebSocketStreamChunk,
		handleWebSocketStreamEnd,
		handleWebSocketStreamError,
		handleHumanMessageCreated,
		handleMessageEdited,
		reconnectToStream
	};
});
//#endregion
export { authorizeDynamicCredential as a, fetchChatModelsApi as c, updateSemanticSearchSettingsApi as d, collectChatArtifacts as i, fetchWorkflowExecutionStatus as l, DEFAULT_SEMANTIC_SEARCH_SETTINGS as n, buildChatAttachmentUrl as o, EMBEDDINGS_NODE_TYPE_MAP as r, fetchAgentApi as s, useChatStore as t, revokeDynamicCredential as u };
