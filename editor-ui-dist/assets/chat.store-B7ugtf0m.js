import { C as computed, It as ref } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-Bq6g7eJk.js";
import { Lt as useTelemetry, yr as useToast, zr as v4_default } from "./users.store-BwYRQvCY.js";
import { Ua as deepCopy, di as chatHubProviderSchema, fi as emptyChatModelsResponse, ui as chatHubMessageWithButtonsSchema } from "./constants-RiJkz47J.js";
import { a as STORES, c as ResponseError, d as makeRestApiRequest, j as defineStore, r as useRootStore } from "./_baseOrderBy-BE23B-S3.js";
import { t as retry } from "./retry-C1TxraVv.js";
import { l as CHAT_VIEW, s as CHAT_SESSIONS_PAGE_SIZE } from "./constants-DLAfnKfU.js";
import { t as convertFileToBinaryData } from "./fileUtils-DkworP0q.js";
const fetchChatModelsApi = async (context, payload) => {
	return await makeRestApiRequest(context, "POST", "/chat/models", payload);
};
async function sendMessageApi(ctx, payload) {
	return await makeRestApiRequest(ctx, "POST", "/chat/conversations/send", payload);
}
async function editMessageApi(ctx, request) {
	return await makeRestApiRequest(ctx, "POST", `/chat/conversations/${request.sessionId}/messages/${request.editId}/edit`, request.payload);
}
async function regenerateMessageApi(ctx, request) {
	return await makeRestApiRequest(ctx, "POST", `/chat/conversations/${request.sessionId}/messages/${request.retryId}/regenerate`, request.payload);
}
async function reconnectToSessionApi(ctx, sessionId, lastSequence) {
	return await makeRestApiRequest(ctx, "POST", `/chat/conversations/${sessionId}/reconnect${lastSequence !== void 0 ? `?lastSequence=${lastSequence}` : ""}`, {});
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
const fetchToolsApi = async (context) => {
	return await makeRestApiRequest(context, "GET", "/chat/tools");
};
const createToolApi = async (context, definition) => {
	return await makeRestApiRequest(context, "POST", "/chat/tools", { definition });
};
const updateToolApi = async (context, toolId, updates) => {
	return await makeRestApiRequest(context, "PATCH", `/chat/tools/${toolId}`, updates);
};
const deleteToolApi = async (context, toolId) => {
	await makeRestApiRequest(context, "DELETE", `/chat/tools/${toolId}`);
};
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
		content: [],
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
				content: [],
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
function createSessionFromStreamingState(streaming, toolIds) {
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
		toolIds,
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
			capabilities: { functionCalling: model.provider !== "n8n" },
			available: true
		},
		groupName: null,
		groupIcon: null
	};
}
const isEditable = (message) => {
	return message.status === "success" && message.type !== "ai";
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
function isWaitingForApproval(message) {
	if (!message || message.status !== "waiting") return false;
	return message.content.some((c) => c.type === "with-buttons" && c.blockUserInput);
}
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
const useChatStore = defineStore(STORES.CHAT_HUB, () => {
	const rootStore = useRootStore();
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
		nextCursor: null
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
	async function sendMessage(sessionId, message, agent, credentials, files = []) {
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
			attachments,
			agent
		};
		telemetry.track("User sent chat hub message", {
			...flattenModel(agent.model),
			is_custom: agent.model.provider === "custom-agent",
			chat_session_id: sessionId
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
				sessions.value.byId[sessionId] = createSessionFromStreamingState(streaming.value, configuredTools.value.filter((t) => t.enabled).map((t) => t.definition.id));
				sessions.value.ids ??= [];
				sessions.value.ids.unshift(sessionId);
			}
			await sendMessageApi(rootStore.restApiContext, payload);
		} catch (error) {
			await handleApiError(error);
		}
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
		try {
			await editMessageApi(rootStore.restApiContext, {
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
		telemetry.track("User regenerated chat hub message", {
			...flattenModel(agent.model),
			is_custom: agent.model.provider === "custom-agent",
			chat_session_id: sessionId,
			chat_message_id: retryId
		});
		try {
			await regenerateMessageApi(rootStore.restApiContext, {
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
	function handleWebSocketStreamChunk(data) {
		const { sessionId, messageId, content } = data;
		if (!getConversation(sessionId)?.messages[messageId]) ensureMessage(sessionId, messageId);
		appendMessage(sessionId, messageId, content);
	}
	function handleWebSocketStreamEnd(data) {
		const { sessionId, messageId, status } = data;
		updateMessage(sessionId, messageId, status);
	}
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
export { fetchChatModelsApi as C, buildChatAttachmentUrl as S, personalAgentDefaultIcon as _, filterAndSortAgents as a, unflattenModel as b, fromStringToModel as c, isAllowedModel as d, isEditable as f, isWaitingForApproval as g, isRegenerable as h, createMimeTypes as i, getAgentRoute as l, isLlmProviderModel as m, collectChatArtifacts as n, findOneFromModelsResponse as o, isLlmProvider as p, createFakeAgent as r, flattenModel as s, useChatStore as t, groupConversationsByDate as u, splitMarkdownIntoChunks as v, workflowAgentDefaultIcon as x, stringifyModel as y };
