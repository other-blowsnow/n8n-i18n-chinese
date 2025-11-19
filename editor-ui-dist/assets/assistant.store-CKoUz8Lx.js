import { o as __toESM } from "./chunk-6z4oVpB-.js";
import { C as computed, D as createElementBlock, Gt as unref, It as ref, L as h, P as defineComponent, Sn as toDisplayString, _t as watch, et as openBlock, j as createTextVNode, w as createBaseVNode } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { gt as useI18n } from "./_MapCache-pT3vKw8Z.js";
import { _t as isWorkflowUpdatedMessage, gt as isToolMessage } from "./src-BmrdBtCN.js";
import { x as createEventBus, y as useRoute } from "./truncate-1c7Iwk7N.js";
import { Bo as useSettingsStore, Cc as STORES, Ht as useCredentialsStore, Jt as getSessionsMetadata, Kr as getAuthTypeForNodeCredential, Kt as getAiSessions, Ni as useUIStore, Qs as useRootStore, Sn as injectWorkflowState, To as CREDENTIAL_EDIT_MODAL_KEY, Ut as chatWithAssistant, Wt as chatWithBuilder, Xt as useAIAssistantHelpers, Yt as replaceCode, _c as assert, a as useNDVStore, er as useUsersStore, ji as codeNodeEditorEventBus, o as useWorkflowsStore, qr as getMainAuthField, qt as getBuilderCredits, rt as useNodeTypesStore, t as useTelemetry, xc as defineStore, xi as stringSizeInBytes } from "./useTelemetry-C2EhNQhN.js";
import { t as useToast } from "./useToast-C8xM63lB.js";
import { Dr as require_pick, Gi as jsonParse, Hi as deepCopy, fo as EDITABLE_CANVAS_VIEWS, mo as VIEWS, s as PLACEHOLDER_EMPTY_WORKFLOW_ID, t as DEFAULT_NEW_WORKFLOW_NAME } from "./constants-C_oOJnqT.js";
const ASSISTANT_ENABLED_VIEWS = [
	...EDITABLE_CANVAS_VIEWS,
	VIEWS.EXECUTION_PREVIEW,
	VIEWS.WORKFLOWS,
	VIEWS.CREDENTIALS,
	VIEWS.PROJECTS_CREDENTIALS,
	VIEWS.PROJECTS_WORKFLOWS,
	VIEWS.PROJECT_SETTINGS,
	VIEWS.TEMPLATE_SETUP
];
const BUILDER_ENABLED_VIEWS = [...EDITABLE_CANVAS_VIEWS];
function isTextMessage(msg) {
	return "type" in msg && msg.type === "message" && "text" in msg;
}
function isWorkflowUpdatedMessage$1(msg) {
	return "type" in msg && msg.type === "workflow-updated" && "codeSnippet" in msg;
}
function isToolMessage$1(msg) {
	return "type" in msg && msg.type === "tool" && "toolName" in msg && "status" in msg;
}
function useBuilderMessages() {
	const locale = useI18n();
	function clearRatingLogic(messages) {
		return messages.map((message) => {
			if (message.type === "text" && "showRating" in message) {
				const { showRating, ratingStyle,...cleanMessage } = message;
				return cleanMessage;
			}
			return message;
		});
	}
	function applyRatingLogic(messages) {
		const { hasAnyRunningTools, isStillThinking } = getThinkingState(messages);
		if (hasAnyRunningTools || isStillThinking) return clearRatingLogic(messages);
		let lastWorkflowUpdateIndex = -1;
		for (let i = messages.length - 1; i >= 0; i--) if (messages[i].type === "workflow-updated") {
			lastWorkflowUpdateIndex = i;
			break;
		}
		if (lastWorkflowUpdateIndex === -1) return messages;
		let lastAssistantTextIndex = -1;
		for (let i = messages.length - 1; i >= 0; i--) if (messages[i].type === "text" && messages[i].role === "assistant" && i > lastWorkflowUpdateIndex) {
			lastAssistantTextIndex = i;
			break;
		}
		return messages.map((message, index) => {
			if (message.type === "text" && message.role === "assistant" && index === lastAssistantTextIndex) return {
				...message,
				showRating: true,
				ratingStyle: "minimal"
			};
			if (message.type === "text" && "showRating" in message) {
				const { showRating, ratingStyle,...cleanMessage } = message;
				return cleanMessage;
			}
			return message;
		});
	}
	function processToolMessage(messages, msg, messageId) {
		const toolMessageId = msg.toolCallId ?? messageId;
		const existingIndex = msg.toolCallId ? messages.findIndex((m) => m.type === "tool" && m.toolCallId === msg.toolCallId) : -1;
		if (existingIndex !== -1) {
			const existing = messages[existingIndex];
			messages[existingIndex] = {
				...existing,
				status: msg.status,
				updates: [...existing.updates || [], ...msg.updates || []]
			};
		} else {
			const toolMessage = {
				id: toolMessageId,
				role: "assistant",
				type: "tool",
				toolName: msg.toolName,
				toolCallId: msg.toolCallId,
				displayTitle: msg.displayTitle,
				customDisplayTitle: msg.customDisplayTitle,
				status: msg.status,
				updates: msg.updates || [],
				read: false
			};
			messages.push(toolMessage);
		}
	}
	function processSingleMessage(messages, msg, messageId, retry) {
		let shouldClearThinking = false;
		if (isTextMessage(msg)) {
			messages.push({
				id: messageId,
				role: "assistant",
				type: "text",
				content: msg.text,
				read: false
			});
			shouldClearThinking = true;
		} else if (isWorkflowUpdatedMessage$1(msg)) messages.push({
			...msg,
			id: messageId,
			read: false
		});
		else if (isToolMessage$1(msg)) processToolMessage(messages, msg, messageId);
		else if ("type" in msg && msg.type === "error" && "content" in msg) {
			messages.push({
				id: messageId,
				role: "assistant",
				type: "error",
				content: msg.content,
				read: false,
				retry
			});
			shouldClearThinking = true;
		}
		return shouldClearThinking;
	}
	function getToolMessages(messages) {
		return messages.filter((msg) => msg.type === "tool");
	}
	function getRunningTools(messages) {
		return getToolMessages(messages).filter((msg) => msg.status === "running");
	}
	function getThinkingState(messages) {
		if (getRunningTools(messages).length > 0) return {
			hasAnyRunningTools: true,
			isStillThinking: false
		};
		const hasCompletedTools = getToolMessages(messages).some((msg) => msg.status === "completed");
		let lastCompletedToolIndex = -1;
		for (let i = messages.length - 1; i >= 0; i--) {
			const msg = messages[i];
			if (msg.type === "tool" && msg.status === "completed") {
				lastCompletedToolIndex = i;
				break;
			}
		}
		let hasResponseAfterTools = false;
		if (lastCompletedToolIndex !== -1) for (let i = lastCompletedToolIndex + 1; i < messages.length; i++) {
			const msg = messages[i];
			if (msg.type === "text" || msg.type === "custom") {
				hasResponseAfterTools = true;
				break;
			}
		}
		return {
			hasAnyRunningTools: false,
			isStillThinking: hasCompletedTools && !hasResponseAfterTools
		};
	}
	function determineThinkingMessage(messages) {
		const { hasAnyRunningTools, isStillThinking } = getThinkingState(messages);
		if (hasAnyRunningTools) {
			const runningTools = getRunningTools(messages);
			const lastRunningTool = runningTools[runningTools.length - 1];
			if (lastRunningTool) {
				const toolName = lastRunningTool.customDisplayTitle || lastRunningTool.displayTitle;
				if (toolName) return toolName;
			}
			return locale.baseText("aiAssistant.thinkingSteps.thinking");
		}
		if (!hasAnyRunningTools && isStillThinking) return locale.baseText("aiAssistant.thinkingSteps.thinking");
	}
	function processAssistantMessages(currentMessages, newMessages, baseId, retry) {
		const mutableMessages = [...currentMessages];
		let shouldClearThinking = false;
		newMessages.forEach((msg, index) => {
			const clearThinking = processSingleMessage(mutableMessages, msg, `${baseId}-${index}`, retry);
			shouldClearThinking = shouldClearThinking || clearThinking;
		});
		const thinkingMessage = determineThinkingMessage(mutableMessages);
		return {
			messages: removeRetryFromOldErrorMessages(applyRatingLogic(mutableMessages)),
			thinkingMessage,
			shouldClearThinking: shouldClearThinking && mutableMessages.length > currentMessages.length
		};
	}
	function removeRetryFromOldErrorMessages(messages) {
		return messages.map((message, index) => {
			if (message.type === "error" && message.retry && index !== messages.length - 1) {
				const { retry,...messageWithoutRetry } = message;
				return messageWithoutRetry;
			}
			return message;
		});
	}
	function createUserMessage(content, id) {
		return {
			id,
			role: "user",
			type: "text",
			content,
			read: true
		};
	}
	function createAssistantMessage(content, id, options) {
		if (options?.aborted) return {
			id,
			role: "assistant",
			type: "text",
			content,
			read: true,
			aborted: true
		};
		return {
			id,
			role: "assistant",
			type: "text",
			content,
			read: true
		};
	}
	function createErrorMessage(content, id, retry) {
		return {
			id,
			role: "assistant",
			type: "error",
			content,
			retry,
			read: false
		};
	}
	function clearMessages() {
		return [];
	}
	function addMessages(currentMessages, newMessages) {
		return [...currentMessages, ...newMessages];
	}
	function mapAssistantMessageToUI(message, id) {
		if (isTextMessage(message)) return {
			id,
			role: message.role ?? "assistant",
			type: "text",
			content: message.text,
			read: false
		};
		if (isWorkflowUpdatedMessage$1(message)) return {
			...message,
			id,
			read: false
		};
		if (isToolMessage$1(message)) return {
			id,
			role: "assistant",
			type: "tool",
			toolName: message.toolName,
			toolCallId: message.toolCallId,
			displayTitle: message.displayTitle,
			customDisplayTitle: message.customDisplayTitle,
			status: message.status,
			updates: message.updates || [],
			read: false
		};
		if ("type" in message && message.type === "event") return {
			...message,
			id,
			read: false
		};
		return {
			id,
			role: "assistant",
			type: "text",
			content: locale.baseText("aiAssistant.thinkingSteps.thinking"),
			read: false
		};
	}
	return {
		processAssistantMessages,
		createUserMessage,
		createAssistantMessage,
		createErrorMessage,
		clearMessages,
		addMessages,
		mapAssistantMessageToUI,
		applyRatingLogic,
		clearRatingLogic,
		getRunningTools
	};
}
function generateMessageId() {
	return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function createBuilderPayload(text, options = {}) {
	const assistantHelpers = useAIAssistantHelpers();
	const workflowContext = {};
	if (options.workflow) workflowContext.currentWorkflow = {
		...assistantHelpers.simplifyWorkflowForAssistant(options.workflow),
		id: options.workflow.id
	};
	if (options.executionData) {
		workflowContext.executionData = assistantHelpers.simplifyResultData(options.executionData, { compact: true });
		if (options.workflow) workflowContext.expressionValues = assistantHelpers.extractExpressionsFromWorkflow(options.workflow, options.executionData);
	}
	if (options.nodesForSchema?.length) workflowContext.executionSchema = assistantHelpers.getNodesSchemas(options.nodesForSchema, true);
	return {
		role: "user",
		type: "message",
		text,
		quickReplyType: options.quickReplyType,
		workflowContext
	};
}
var import_pick = /* @__PURE__ */ __toESM(require_pick());
var INFINITE_CREDITS = -1;
const useBuilderStore = defineStore(STORES.BUILDER, () => {
	const chatMessages = ref([]);
	const streaming = ref(false);
	const builderThinkingMessage = ref();
	const streamingAbortController = ref(null);
	const initialGeneration = ref(false);
	const creditsQuota = ref();
	const creditsClaimed = ref();
	const hasMessages = ref(false);
	const settings = useSettingsStore();
	const rootStore = useRootStore();
	const workflowsStore = useWorkflowsStore();
	const workflowState = injectWorkflowState();
	const credentialsStore = useCredentialsStore();
	const nodeTypesStore = useNodeTypesStore();
	const ndvStore = useNDVStore();
	const route = useRoute();
	const locale = useI18n();
	const telemetry = useTelemetry();
	const { processAssistantMessages, createUserMessage, createAssistantMessage, createErrorMessage, clearMessages, mapAssistantMessageToUI, clearRatingLogic, getRunningTools } = useBuilderMessages();
	const trackingSessionId = computed(() => rootStore.pushRef);
	const workflowPrompt = computed(() => {
		return chatMessages.value.find((msg) => msg.role === "user" && msg.type === "text")?.content;
	});
	const isAIBuilderEnabled = computed(() => {
		return settings.isAiBuilderEnabled;
	});
	const toolMessages = computed(() => chatMessages.value.filter(isToolMessage));
	const workflowMessages = computed(() => chatMessages.value.filter(isWorkflowUpdatedMessage));
	const assistantMessages = computed(() => chatMessages.value.filter((msg) => msg.role === "assistant"));
	const creditsRemaining = computed(() => {
		if (creditsClaimed.value === void 0 || creditsQuota.value === void 0 || creditsQuota.value === INFINITE_CREDITS) return;
		const remaining = creditsQuota.value - creditsClaimed.value;
		return remaining > 0 ? remaining : 0;
	});
	const hasNoCreditsRemaining = computed(() => {
		return creditsRemaining.value !== void 0 ? creditsRemaining.value === 0 : false;
	});
	function resetBuilderChat() {
		chatMessages.value = clearMessages();
		builderThinkingMessage.value = void 0;
		initialGeneration.value = false;
	}
	function addLoadingAssistantMessage(message) {
		builderThinkingMessage.value = message;
	}
	function stopStreaming() {
		streaming.value = false;
		if (streamingAbortController.value) {
			streamingAbortController.value.abort();
			streamingAbortController.value = null;
		}
	}
	function handleServiceError(e, id, retry) {
		assert(e instanceof Error);
		stopStreaming();
		builderThinkingMessage.value = void 0;
		if (e.name === "AbortError") {
			const userMsg = createAssistantMessage(locale.baseText("aiAssistant.builder.streamAbortedMessage"), "aborted-streaming", { aborted: true });
			chatMessages.value = [...chatMessages.value, userMsg];
			return;
		}
		const errorMessage = createErrorMessage(locale.baseText("aiAssistant.serviceError.message", { interpolate: { message: e.message } }), id, retry);
		chatMessages.value = [...chatMessages.value, errorMessage];
		telemetry.track("Workflow generation errored", {
			error: e.message,
			session_id: trackingSessionId.value,
			workflow_id: workflowsStore.workflowId
		});
	}
	function prepareForStreaming(userMessage, messageId) {
		const userMsg = createUserMessage(userMessage, messageId);
		chatMessages.value = clearRatingLogic([...chatMessages.value, userMsg]);
		addLoadingAssistantMessage(locale.baseText("aiAssistant.thinkingSteps.thinking"));
		streaming.value = true;
	}
	function createRetryHandler(messageId, retryFn) {
		return async () => {
			chatMessages.value = chatMessages.value.filter((msg) => msg.id !== messageId);
			await retryFn();
		};
	}
	function sendChatMessage(options) {
		if (streaming.value) return;
		ndvStore.unsetActiveNodeName();
		const { text, source = "chat", quickReplyType, errorMessage, type = "message", errorNodeType, executionStatus } = options;
		if (options.initialGeneration !== void 0) initialGeneration.value = options.initialGeneration;
		const messageId = generateMessageId();
		const currentWorkflowJson = getWorkflowSnapshot();
		const trackingPayload = {
			source,
			message: text,
			session_id: trackingSessionId.value,
			start_workflow_json: currentWorkflowJson,
			workflow_id: workflowsStore.workflowId,
			type
		};
		if (type === "execution") {
			let resultData = "{}";
			let resultDataSizeKb = 0;
			try {
				resultData = JSON.stringify(workflowsStore.workflowExecutionData ?? {});
				resultDataSizeKb = stringSizeInBytes(resultData) / 1024;
			} catch (error) {
				console.warn("Failed to stringify execution data for telemetry:", error);
			}
			trackingPayload.execution_data = resultDataSizeKb > 512 ? "{}" : resultData;
			trackingPayload.execution_status = executionStatus ?? "";
			if (executionStatus === "error") {
				trackingPayload.error_message = errorMessage ?? "";
				trackingPayload.error_node_type = errorNodeType ?? "";
			}
		}
		telemetry.track("User submitted builder message", trackingPayload);
		prepareForStreaming(text, messageId);
		const executionResult = workflowsStore.workflowExecutionData?.data?.resultData;
		const payload = createBuilderPayload(text, {
			quickReplyType,
			workflow: workflowsStore.workflow,
			executionData: executionResult,
			nodesForSchema: Object.keys(workflowsStore.nodesByName)
		});
		const retry = createRetryHandler(messageId, async () => sendChatMessage(options));
		if (streamingAbortController.value) streamingAbortController.value.abort();
		streamingAbortController.value = new AbortController();
		try {
			chatWithBuilder(rootStore.restApiContext, { payload }, (response) => {
				const result = processAssistantMessages(chatMessages.value, response.messages, generateMessageId(), retry);
				chatMessages.value = result.messages;
				if (result.shouldClearThinking) builderThinkingMessage.value = void 0;
				else builderThinkingMessage.value = result.thinkingMessage;
			}, () => stopStreaming(), (e) => handleServiceError(e, messageId, retry), streamingAbortController.value?.signal);
		} catch (e) {
			handleServiceError(e, messageId, retry);
		}
	}
	async function loadSessions() {
		const workflowId = workflowsStore.workflowId;
		if (!workflowId) return [];
		try {
			const sessions = (await getAiSessions(rootStore.restApiContext, workflowId)).sessions || [];
			if (sessions.length > 0) {
				const latestSession = sessions[0];
				chatMessages.value = clearMessages();
				chatMessages.value = latestSession.messages.map((msg) => {
					return mapAssistantMessageToUI(msg, generateMessageId());
				}).filter((msg) => msg.type !== "workflow-updated");
			}
			return sessions;
		} catch (error) {
			console.error("Failed to load AI sessions:", error);
			return [];
		}
	}
	function captureCurrentWorkflowState() {
		const nodePositions = /* @__PURE__ */ new Map();
		const existingNodeIds = /* @__PURE__ */ new Set();
		workflowsStore.allNodes.forEach((node) => {
			nodePositions.set(node.id, [...node.position]);
			existingNodeIds.add(node.id);
		});
		return {
			nodePositions,
			existingNodeIds,
			currentWorkflowJson: JSON.stringify((0, import_pick.default)(workflowsStore.workflow, ["nodes", "connections"]))
		};
	}
	function setDefaultNodesCredentials(workflowData) {
		workflowData.nodes?.forEach((node) => {
			if (node.credentials && Object.keys(node.credentials).length > 0) return;
			const nodeType = nodeTypesStore.getNodeType(node.type);
			if (!nodeType?.credentials) return;
			for (const credentialConfig of nodeType.credentials) {
				const credentials = credentialsStore.getCredentialsByType(credentialConfig.name);
				if (!credentials || credentials.length === 0) continue;
				const credential = credentials[0];
				node.credentials = { [credential.type]: {
					id: credential.id,
					name: credential.name
				} };
				const authField = getMainAuthField(nodeType);
				const authType = getAuthTypeForNodeCredential(nodeType, credentialConfig);
				if (authField && authType) node.parameters[authField.name] = authType.value;
				break;
			}
		});
	}
	function applyWorkflowUpdate(workflowJson) {
		let workflowData;
		try {
			workflowData = jsonParse(workflowJson);
		} catch (error) {
			useToast().showMessage({
				type: "error",
				title: locale.baseText("aiAssistant.builder.workflowParsingError.title"),
				message: locale.baseText("aiAssistant.builder.workflowParsingError.content")
			});
			return {
				success: false,
				error
			};
		}
		const { nodePositions, existingNodeIds } = captureCurrentWorkflowState();
		workflowState.removeAllConnections({ setStateDirty: false });
		workflowState.removeAllNodes({
			setStateDirty: false,
			removePinData: true
		});
		if (workflowData.name && initialGeneration.value && workflowsStore.workflow.name.startsWith("My workflow")) workflowState.setWorkflowName({
			newName: workflowData.name,
			setStateDirty: false
		});
		const nodesIdsToTidyUp = [];
		if (workflowData.nodes) workflowData.nodes = workflowData.nodes.map((node) => {
			const savedPosition = nodePositions.get(node.id);
			if (savedPosition) return {
				...node,
				position: savedPosition
			};
			else nodesIdsToTidyUp.push(node.id);
			return node;
		});
		setDefaultNodesCredentials(workflowData);
		return {
			success: true,
			workflowData,
			newNodeIds: nodesIdsToTidyUp,
			oldNodeIds: Array.from(existingNodeIds)
		};
	}
	function getWorkflowSnapshot() {
		return JSON.stringify((0, import_pick.default)(workflowsStore.workflow, ["nodes", "connections"]));
	}
	function updateBuilderCredits(quota, claimed) {
		creditsQuota.value = quota;
		creditsClaimed.value = claimed;
	}
	async function fetchBuilderCredits() {
		if (!isAIBuilderEnabled.value) return;
		try {
			const response = await getBuilderCredits(rootStore.restApiContext);
			updateBuilderCredits(response.creditsQuota, response.creditsClaimed);
		} catch {}
	}
	async function fetchSessionsMetadata() {
		const workflowId = workflowsStore.workflowId;
		if (!workflowId) {
			hasMessages.value = false;
			return;
		}
		try {
			hasMessages.value = (await getSessionsMetadata(rootStore.restApiContext, workflowId)).hasMessages;
		} catch (error) {
			console.error("Failed to fetch sessions metadata:", error);
			hasMessages.value = false;
		}
	}
	watch(() => workflowsStore.workflowId, (newWorkflowId) => {
		if (newWorkflowId && newWorkflowId !== "__EMPTY__" && BUILDER_ENABLED_VIEWS.includes(route.name)) fetchSessionsMetadata();
		else hasMessages.value = false;
	});
	return {
		chatMessages,
		streaming,
		builderThinkingMessage,
		isAIBuilderEnabled,
		workflowPrompt,
		toolMessages,
		workflowMessages,
		assistantMessages,
		trackingSessionId,
		streamingAbortController,
		initialGeneration,
		creditsQuota: computed(() => creditsQuota.value),
		creditsRemaining,
		hasNoCreditsRemaining,
		hasMessages: computed(() => hasMessages.value),
		stopStreaming,
		resetBuilderChat,
		sendChatMessage,
		loadSessions,
		applyWorkflowUpdate,
		getWorkflowSnapshot,
		fetchBuilderCredits,
		updateBuilderCredits,
		getRunningTools,
		fetchSessionsMetadata
	};
});
const useChatPanelStateStore = defineStore(STORES.CHAT_PANEL_STATE, () => {
	return {
		isOpen: ref(false),
		width: ref(400),
		activeMode: ref("builder")
	};
});
const ndvEventBus = createEventBus();
var _hoisted_1 = ["data-action-parameter-node"];
var AiUpdatedCodeMessage_default = /* @__PURE__ */ defineComponent({
	__name: "AiUpdatedCodeMessage",
	props: { nodeName: {} },
	setup(__props) {
		const i18n = useI18n();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [
				createTextVNode(toDisplayString(unref(i18n).baseText("aiAssistant.codeUpdated.message.body1")) + " ", 1),
				createBaseVNode("a", {
					"data-action": "openNodeDetail",
					"data-action-parameter-node": _ctx.nodeName
				}, toDisplayString(_ctx.nodeName), 9, _hoisted_1),
				createTextVNode(" " + toDisplayString(unref(i18n).baseText("aiAssistant.codeUpdated.message.body2")), 1)
			]);
		};
	}
});
var READABLE_TYPES = [
	"code-diff",
	"text",
	"block"
];
const useAssistantStore = defineStore(STORES.ASSISTANT, () => {
	const settings = useSettingsStore();
	const rootStore = useRootStore();
	const chatPanelStateStore = useChatPanelStateStore();
	const chatMessages = ref([]);
	const usersStore = useUsersStore();
	const uiStore = useUIStore();
	const workflowsStore = useWorkflowsStore();
	const route = useRoute();
	const streaming = ref();
	const ndvStore = useNDVStore();
	const locale = useI18n();
	const telemetry = useTelemetry();
	const assistantHelpers = useAIAssistantHelpers();
	const suggestions = ref({});
	const chatSessionCredType = ref();
	const chatSessionError = ref();
	const currentSessionId = ref();
	const currentSessionActiveExecutionId = ref(void 0);
	const currentSessionWorkflowId = ref();
	const lastUnread = ref();
	const nodeExecutionStatus = ref("not_executed");
	const assistantThinkingMessage = ref();
	const chatSessionTask = ref();
	const workflowDataStale = ref(true);
	const workflowExecutionDataStale = ref(true);
	const assistantMessages = computed(() => chatMessages.value.filter((msg) => msg.role === "assistant"));
	const usersMessages = computed(() => chatMessages.value.filter((msg) => msg.role === "user"));
	const isSessionEnded = computed(() => {
		const lastAssistantMessage = assistantMessages.value[assistantMessages.value.length - 1];
		const sessionExplicitlyEnded = lastAssistantMessage?.type === "event" && lastAssistantMessage?.eventName === "end-session";
		return !(currentSessionId.value !== void 0) || sessionExplicitlyEnded;
	});
	const isAssistantEnabled = computed(() => settings.isAiAssistantEnabled);
	const hideAssistantFloatingButton = computed(() => EDITABLE_CANVAS_VIEWS.includes(route.name) && !workflowsStore.activeNode());
	const unreadCount = computed(() => chatMessages.value.filter((msg) => READABLE_TYPES.includes(msg.type) && msg.role === "assistant" && !msg.read).length);
	const isFloatingButtonShown = computed(() => !chatPanelStateStore.isOpen && !hideAssistantFloatingButton.value && isAssistantEnabled.value && EDITABLE_CANVAS_VIEWS.includes(route.name));
	function resetAssistantChat() {
		clearMessages();
		currentSessionId.value = void 0;
		chatSessionError.value = void 0;
		lastUnread.value = void 0;
		currentSessionActiveExecutionId.value = void 0;
		suggestions.value = {};
		nodeExecutionStatus.value = "not_executed";
		chatSessionCredType.value = void 0;
		chatSessionTask.value = void 0;
		currentSessionWorkflowId.value = workflowsStore.workflowId;
	}
	function addAssistantMessages(newMessages, id) {
		const read = chatPanelStateStore.isOpen && chatPanelStateStore.activeMode === "assistant";
		const messages = [...chatMessages.value].filter((msg) => !(msg.id === id && msg.role === "assistant"));
		assistantThinkingMessage.value = void 0;
		(newMessages ?? []).forEach((msg) => {
			if (msg.type === "message") messages.push({
				id,
				type: "text",
				role: "assistant",
				content: msg.text,
				quickReplies: msg.quickReplies,
				codeSnippet: msg.codeSnippet,
				read
			});
			else if (msg.type === "code-diff") messages.push({
				id,
				role: "assistant",
				type: "code-diff",
				description: msg.description,
				codeDiff: msg.codeDiff,
				suggestionId: msg.suggestionId,
				quickReplies: msg.quickReplies,
				read
			});
			else if (msg.type === "summary") messages.push({
				id,
				type: "block",
				role: "assistant",
				title: msg.title,
				content: msg.content,
				quickReplies: msg.quickReplies,
				read
			});
			else if (msg.type === "event") messages.push({
				id,
				type: "event",
				role: "assistant",
				eventName: msg.eventName,
				read: true
			});
			else if (msg.type === "agent-suggestion") messages.push({
				id,
				type: "block",
				role: "assistant",
				title: msg.title,
				content: msg.text,
				quickReplies: msg.quickReplies,
				read
			});
			else if (msg.type === "intermediate-step") assistantThinkingMessage.value = msg.text;
		});
		chatMessages.value = messages;
	}
	function isNodeErrorActive(context) {
		const targetNode = context.node.name;
		return chatSessionTask.value === "error" && workflowsStore.activeExecutionId === currentSessionActiveExecutionId.value && targetNode === chatSessionError.value?.node.name;
	}
	function isCredTypeActive(credType) {
		return chatSessionTask.value === "credentials" && credType.name === chatSessionCredType.value?.name;
	}
	function clearMessages() {
		chatMessages.value = [];
	}
	function stopStreaming() {
		streaming.value = false;
	}
	function addAssistantError(content, id, retry) {
		chatMessages.value.push({
			id,
			role: "assistant",
			type: "error",
			content,
			read: true,
			retry
		});
	}
	function addLoadingAssistantMessage(message) {
		assistantThinkingMessage.value = message;
	}
	function addUserMessage(content, id) {
		chatMessages.value.push({
			id,
			role: "user",
			type: "text",
			content,
			read: true
		});
	}
	function handleServiceError(e, id, retry) {
		assert(e instanceof Error);
		stopStreaming();
		assistantThinkingMessage.value = void 0;
		addAssistantError(locale.baseText("aiAssistant.serviceError.message", { interpolate: { message: e.message } }), id, retry);
	}
	function onEachStreamingMessage(response, id) {
		if (response.sessionId && !currentSessionId.value) {
			currentSessionId.value = response.sessionId;
			telemetry.track("Assistant session started", {
				chat_session_id: currentSessionId.value,
				task: chatSessionTask.value,
				node_type: chatSessionError.value?.node.type,
				credential_type: chatSessionCredType.value?.name
			});
			if (usersMessages.value.length === 1 && chatSessionTask.value === "support") {
				const firstUserMessage = usersMessages.value[0];
				trackUserMessage(firstUserMessage.content, false);
			}
		} else if (currentSessionId.value !== response.sessionId) return;
		addAssistantMessages(response.messages, id);
	}
	function getRandomId() {
		return `${Math.floor(Math.random() * 1e8)}`;
	}
	function onDoneStreaming(id) {
		stopStreaming();
		workflowDataStale.value = false;
		workflowExecutionDataStale.value = false;
		lastUnread.value = chatMessages.value.find((msg) => msg.id === id && !msg.read && msg.role === "assistant" && READABLE_TYPES.includes(msg.type));
		setTimeout(() => {
			if (lastUnread.value?.id === id) lastUnread.value = void 0;
		}, 4e3);
	}
	async function initCredHelp(credType) {
		const hasExistingSession = !!currentSessionId.value;
		await initSupportChat(`How do I set up the credentials for ${credType.displayName}?`, credType);
		trackUserOpenedAssistant({
			source: "credential",
			task: "credentials",
			has_existing_session: hasExistingSession
		});
	}
	function getVisualContext(nodeInfo) {
		if (chatSessionTask.value === "error") return;
		const currentView = route.name;
		const activeNode = workflowsStore.activeNode();
		const activeNodeForLLM = activeNode ? assistantHelpers.processNodeForAssistant(activeNode, ["position", "parameters.notice"]) : null;
		const activeCredential = uiStore.activeModals.includes("editCredential") ? useCredentialsStore().getCredentialTypeByName(uiStore.activeCredentialType ?? "") : void 0;
		const executionResult = workflowsStore.workflowExecutionData?.data?.resultData;
		const isCurrentNodeExecuted = Boolean(executionResult?.runData?.hasOwnProperty(activeNode?.name ?? ""));
		const nodeError = executionResult?.error && "node" in executionResult.error && executionResult.error.node?.name === activeNode?.name ? executionResult.error : void 0;
		const executionStatus = isCurrentNodeExecuted ? {
			status: nodeError ? "error" : "success",
			error: nodeError ? assistantHelpers.simplifyErrorForAssistant(nodeError) : void 0
		} : void 0;
		return {
			currentView: {
				name: currentView,
				description: assistantHelpers.getCurrentViewDescription(currentView)
			},
			activeNodeInfo: {
				node: activeNodeForLLM ?? void 0,
				nodeIssues: !isCurrentNodeExecuted ? activeNode?.issues : void 0,
				executionStatus,
				nodeInputData: nodeInfo?.nodeInputData,
				referencedNodes: nodeInfo?.schemas
			},
			activeCredentials: activeCredential ? {
				name: activeCredential?.name,
				displayName: activeCredential?.displayName,
				authType: nodeInfo?.authType?.name
			} : void 0,
			currentWorkflow: workflowDataStale.value ? assistantHelpers.simplifyWorkflowForAssistant(workflowsStore.workflow) : void 0,
			executionData: workflowExecutionDataStale.value && executionResult ? assistantHelpers.simplifyResultData(executionResult) : void 0
		};
	}
	async function initSupportChat(userMessage, credentialType) {
		resetAssistantChat();
		chatSessionTask.value = credentialType ? "credentials" : "support";
		const activeNode = workflowsStore.activeNode();
		const nodeInfo = assistantHelpers.getNodeInfoForAssistant(activeNode);
		const visualContext = chatSessionTask.value === "support" ? getVisualContext(nodeInfo) : void 0;
		if (nodeInfo.authType && chatSessionTask.value === "credentials") userMessage += ` I am using ${nodeInfo.authType.name}.`;
		const id = getRandomId();
		chatSessionCredType.value = credentialType;
		addUserMessage(userMessage, id);
		addLoadingAssistantMessage(locale.baseText("aiAssistant.thinkingSteps.thinking"));
		streaming.value = true;
		let payload = {
			role: "user",
			type: "init-support-chat",
			user: { firstName: usersStore.currentUser?.firstName ?? "" },
			context: visualContext,
			question: userMessage
		};
		if (credentialType) payload = {
			...payload,
			type: "init-cred-help",
			credentialType: {
				name: credentialType.name,
				displayName: credentialType.displayName
			}
		};
		chatWithAssistant(rootStore.restApiContext, { payload }, (msg) => onEachStreamingMessage(msg, id), () => onDoneStreaming(id), (e) => handleServiceError(e, id, async () => await initSupportChat(userMessage, credentialType)));
	}
	async function initErrorHelper(context) {
		const id = getRandomId();
		if (chatSessionError.value) {
			if (isNodeErrorActive(context)) return;
		}
		resetAssistantChat();
		chatSessionTask.value = "error";
		chatSessionError.value = context;
		currentSessionWorkflowId.value = workflowsStore.workflowId;
		if (workflowsStore.activeExecutionId) currentSessionActiveExecutionId.value = workflowsStore.activeExecutionId;
		const { authType, nodeInputData, schemas } = assistantHelpers.getNodeInfoForAssistant(context.node);
		addLoadingAssistantMessage(locale.baseText("aiAssistant.thinkingSteps.analyzingError"));
		streaming.value = true;
		const payload = {
			role: "user",
			type: "init-error-helper",
			user: { firstName: usersStore.currentUser?.firstName ?? "" },
			error: context.error,
			node: assistantHelpers.processNodeForAssistant(context.node, ["position", "parameters.notice"]),
			nodeInputData,
			executionSchema: schemas,
			authType
		};
		chatWithAssistant(rootStore.restApiContext, { payload }, (msg) => onEachStreamingMessage(msg, id), () => onDoneStreaming(id), (e) => handleServiceError(e, id, async () => await initErrorHelper(context)));
	}
	async function sendEvent(eventName, error) {
		if (isSessionEnded.value || streaming.value) return;
		assert(currentSessionId.value);
		const id = getRandomId();
		addLoadingAssistantMessage(locale.baseText("aiAssistant.thinkingSteps.thinking"));
		streaming.value = true;
		chatWithAssistant(rootStore.restApiContext, {
			payload: {
				role: "user",
				type: "event",
				eventName,
				error
			},
			sessionId: currentSessionId.value
		}, (msg) => onEachStreamingMessage(msg, id), () => onDoneStreaming(id), (e) => handleServiceError(e, id, async () => await sendEvent(eventName, error)));
	}
	async function onNodeExecution(pushEvent) {
		if (!chatSessionError.value || pushEvent.nodeName !== chatSessionError.value.node.name) return;
		if (nodeExecutionStatus.value === "success") return;
		if (pushEvent.data.error && nodeExecutionStatus.value !== "error") {
			await sendEvent("node-execution-errored", pushEvent.data.error);
			nodeExecutionStatus.value = "error";
			telemetry.track("User executed node after assistant suggestion", {
				task: chatSessionTask.value,
				chat_session_id: currentSessionId.value,
				success: false
			});
		} else if (pushEvent.data.executionStatus === "success" && ["error", "not_executed"].includes(nodeExecutionStatus.value)) {
			await sendEvent("node-execution-succeeded");
			nodeExecutionStatus.value = "success";
			telemetry.track("User executed node after assistant suggestion", {
				task: chatSessionTask.value,
				chat_session_id: currentSessionId.value,
				success: true
			});
		}
	}
	async function sendMessage(chatMessage) {
		if (isSessionEnded.value || streaming.value) return;
		const id = getRandomId();
		const retry = async () => {
			chatMessages.value = chatMessages.value.filter((msg) => msg.id !== id);
			await sendMessage(chatMessage);
		};
		try {
			addUserMessage(chatMessage.text, id);
			addLoadingAssistantMessage(locale.baseText("aiAssistant.thinkingSteps.thinking"));
			streaming.value = true;
			assert(currentSessionId.value);
			if (chatMessage.quickReplyType === "new-suggestion" && nodeExecutionStatus.value !== "not_executed") nodeExecutionStatus.value = "not_executed";
			const activeNode = workflowsStore.activeNode();
			const userContext = getVisualContext(assistantHelpers.getNodeInfoForAssistant(activeNode));
			chatWithAssistant(rootStore.restApiContext, {
				payload: {
					role: "user",
					type: "message",
					text: chatMessage.text,
					quickReplyType: chatMessage.quickReplyType,
					context: userContext
				},
				sessionId: currentSessionId.value
			}, (msg) => onEachStreamingMessage(msg, id), () => onDoneStreaming(id), (e) => handleServiceError(e, id, retry));
			trackUserMessage(chatMessage.text, !!chatMessage.quickReplyType);
		} catch (e) {
			handleServiceError(e, id, retry);
		}
	}
	function trackUserMessage(message, isQuickReply) {
		if (!currentSessionId.value) return;
		telemetry.track("User sent message in Assistant", {
			message,
			is_quick_reply: isQuickReply,
			chat_session_id: currentSessionId.value,
			message_number: usersMessages.value.length,
			task: chatSessionTask.value
		});
	}
	function trackUserOpenedAssistant({ source, task, has_existing_session }) {
		telemetry.track("User opened assistant", {
			source,
			task,
			has_existing_session,
			workflow_id: workflowsStore.workflowId,
			node_type: chatSessionError.value?.node?.type,
			error: chatSessionError.value?.error,
			chat_session_id: currentSessionId.value
		});
	}
	function updateParameters(workflowState, nodeName, parameters) {
		if (ndvStore.activeNodeName === nodeName) Object.keys(parameters).forEach((key) => {
			const update = {
				node: nodeName,
				name: `parameters.${key}`,
				value: parameters[key]
			};
			ndvEventBus.emit("updateParameterValue", update);
		});
		else workflowState.setNodeParameters({
			name: nodeName,
			value: parameters
		}, true);
	}
	function getRelevantParameters(parameters, keysToKeep) {
		return keysToKeep.reduce((accu, key) => {
			accu[key] = deepCopy(parameters[key]);
			return accu;
		}, {});
	}
	async function applyCodeDiff(workflowState, index) {
		const codeDiffMessage = chatMessages.value[index];
		if (!codeDiffMessage || codeDiffMessage.type !== "code-diff") throw new Error("No code diff to apply");
		try {
			assert(chatSessionError.value);
			assert(currentSessionId.value);
			codeDiffMessage.replacing = true;
			const suggestionId = codeDiffMessage.suggestionId;
			const activeNode = workflowsStore.workflowObject.getNode(chatSessionError.value.node.name);
			assert(activeNode);
			const cached = suggestions.value[suggestionId];
			if (cached) updateParameters(workflowState, activeNode.name, cached.suggested);
			else {
				const { parameters: suggested } = await replaceCode(rootStore.restApiContext, {
					suggestionId: codeDiffMessage.suggestionId,
					sessionId: currentSessionId.value
				});
				suggestions.value[suggestionId] = {
					previous: getRelevantParameters(activeNode.parameters, Object.keys(suggested)),
					suggested
				};
				updateParameters(workflowState, activeNode.name, suggested);
			}
			codeDiffMessage.replaced = true;
			codeNodeEditorEventBus.emit("codeDiffApplied");
			showCodeUpdateToastIfNeeded(activeNode.name);
		} catch (e) {
			console.error(e);
			codeDiffMessage.error = true;
		}
		codeDiffMessage.replacing = false;
	}
	async function undoCodeDiff(workflowState, index) {
		const codeDiffMessage = chatMessages.value[index];
		if (!codeDiffMessage || codeDiffMessage.type !== "code-diff") throw new Error("No code diff to apply");
		try {
			assert(chatSessionError.value);
			assert(currentSessionId.value);
			codeDiffMessage.replacing = true;
			const suggestionId = codeDiffMessage.suggestionId;
			const suggestion = suggestions.value[suggestionId];
			assert(suggestion);
			const activeNode = workflowsStore.workflowObject.getNode(chatSessionError.value.node.name);
			assert(activeNode);
			const suggested = suggestion.previous;
			updateParameters(workflowState, activeNode.name, suggested);
			codeDiffMessage.replaced = false;
			codeNodeEditorEventBus.emit("codeDiffApplied");
			showCodeUpdateToastIfNeeded(activeNode.name);
		} catch (e) {
			console.error(e);
			codeDiffMessage.error = true;
		}
		codeDiffMessage.replacing = false;
	}
	function showCodeUpdateToastIfNeeded(errorNodeName) {
		if (errorNodeName !== ndvStore.activeNodeName) useToast().showMessage({
			type: "success",
			title: locale.baseText("aiAssistant.codeUpdated.message.title"),
			message: h(AiUpdatedCodeMessage_default, { nodeName: errorNodeName }),
			duration: 4e3
		});
	}
	watch(route, () => {
		const activeWorkflowId = workflowsStore.workflowId;
		if (!currentSessionId.value || currentSessionWorkflowId.value === "__EMPTY__" || currentSessionWorkflowId.value === activeWorkflowId) return;
		resetAssistantChat();
	});
	watch(() => uiStore.stateIsDirty, () => {
		workflowDataStale.value = true;
	});
	watch(() => workflowsStore.workflowExecutionResultDataLastUpdate, () => {
		workflowExecutionDataStale.value = true;
	}, { immediate: true });
	return {
		isAssistantEnabled,
		hideAssistantFloatingButton,
		chatMessages,
		unreadCount,
		streaming,
		currentSessionId,
		lastUnread,
		isSessionEnded,
		isFloatingButtonShown,
		onNodeExecution,
		trackUserOpenedAssistant,
		isNodeErrorActive,
		initErrorHelper,
		initSupportChat,
		sendMessage,
		applyCodeDiff,
		undoCodeDiff,
		resetAssistantChat,
		addAssistantMessages,
		assistantThinkingMessage,
		chatSessionError,
		chatSessionTask,
		initCredHelp,
		isCredTypeActive,
		handleServiceError
	};
});
export { ASSISTANT_ENABLED_VIEWS as a, useBuilderStore as i, ndvEventBus as n, BUILDER_ENABLED_VIEWS as o, useChatPanelStateStore as r, useAssistantStore as t };
