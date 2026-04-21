import { _a as chatHubProviderSchema } from "./constants-Co4JQRdg.js";
import { c as CHAT_VIEW } from "./constants-DAn60oew.js";
//#region src/features/ai/chatHub/chat.utils.ts
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
		const sessions = groups.get(groupName) ?? [];
		return sessions.length > 0 ? [{
			group: groupName,
			sessions: sessions.sort((a, b) => Date.parse(b.lastMessageAt ?? b.updatedAt) - Date.parse(a.lastMessageAt ?? a.updatedAt))
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
function createSessionFromStreamingState(streaming, toolIds, isManual = false) {
	return {
		id: streaming.sessionId,
		title: "New Chat",
		ownerId: "",
		lastMessageAt: (/* @__PURE__ */ new Date()).toISOString(),
		credentialId: null,
		agentName: streaming.agent.name,
		agentIcon: streaming.agent.icon,
		type: isManual ? "manual" : "production",
		createdAt: (/* @__PURE__ */ new Date()).toISOString(),
		updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
		toolIds,
		...flattenModel(streaming.agent.model)
	};
}
var personalAgentDefaultIcon = {
	type: "icon",
	value: "message-square"
};
var workflowAgentDefaultIcon = {
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
			allowFileUploads: false,
			allowedFilesMimeTypes: "",
			capabilities: { functionCalling: model.provider !== "n8n" },
			available: true
		},
		groupName: null,
		groupIcon: null
	};
}
/**
* Enriches a MIME type accept string with the `.md` file extension.
* macOS file picker does not recognise `text/*` or `text/markdown` for
* Markdown files, so we add the explicit extension.
*/
function enrichMimeTypesWithExtensions(mimeTypes) {
	if (mimeTypes && (mimeTypes.includes("text/*") || mimeTypes.includes("text/markdown"))) return `${mimeTypes},.md`;
	return mimeTypes;
}
var isEditable = (message) => {
	return message.status === "success" && message.type !== "ai";
};
var isRegenerable = (message) => {
	return message.type === "ai";
};
/**
* Splits markdown content into chunks to allow text selection while streaming.
* Splits on: paragraphs (double newlines), code blocks, and headers.
*/
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
/**
* Checks if a message represents a waiting-for-approval state.
* This occurs when the message has 'waiting' status and contains
* a with-buttons chunk that blocks user input.
*/
function isWaitingForApproval(message) {
	if (!message || message.status !== "waiting") return false;
	return message.content.some((c) => c.type === "with-buttons" && c.blockUserInput);
}
function chunkFilesBySize(files, maxSizeBytes) {
	const chunks = [];
	let currentChunk = [];
	let currentSize = 0;
	for (const file of files) {
		if (currentSize + file.size > maxSizeBytes && currentChunk.length > 0) {
			chunks.push(currentChunk);
			currentChunk = [];
			currentSize = 0;
		}
		currentChunk.push(file);
		currentSize += file.size;
	}
	if (currentChunk.length > 0) chunks.push(currentChunk);
	return chunks;
}
//#endregion
//#region src/app/utils/fileUtils.ts
async function convertFileToBinaryData(file) {
	const reader = new FileReader();
	return await new Promise((resolve, reject) => {
		reader.onload = () => {
			resolve({
				data: reader.result.split("base64,")?.[1] ?? "",
				mimeType: file.type,
				fileName: file.name,
				fileSize: `${file.size} bytes`,
				fileExtension: file.name.split(".").pop() ?? "",
				fileType: file.type.split("/")[0]
			});
		};
		reader.onerror = () => {
			reject(/* @__PURE__ */ new Error("Failed to convert file to binary data"));
		};
		reader.readAsDataURL(file);
	});
}
//#endregion
export { splitMarkdownIntoChunks as C, workflowAgentDefaultIcon as E, personalAgentDefaultIcon as S, unflattenModel as T, isLlmProvider as _, createFakeAgent as a, isRegenerable as b, filterAndSortAgents as c, fromStringToModel as d, getAgentRoute as f, isEditable as g, isAllowedModel as h, createAiMessageFromStreamingState as i, findOneFromModelsResponse as l, groupConversationsByDate as m, buildUiMessages as n, createSessionFromStreamingState as o, getRelativeDate as p, chunkFilesBySize as r, enrichMimeTypesWithExtensions as s, convertFileToBinaryData as t, flattenModel as u, isLlmProviderModel as v, stringifyModel as w, isWaitingForApproval as x, isMatchedAgent as y };
