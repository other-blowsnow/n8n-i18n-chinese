import { Ft as ref, S as computed, gt as watch } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import { yt as useI18n } from "./_MapCache-Dm0zgpAe.js";
import { Ei as useRoute } from "./src-DpXAQiaT.js";
import { Lr as useChatPanelStateStore, Qr as v4_default, Xa as CREDENTIAL_EDIT_MODAL_KEY, at as useCredentialsStore, ct as useAIAssistantHelpers, en as useTelemetry, gr as hasPermission, js as useSettingsStore, ln as useCodeDiff, ol as STORES, ot as chatWithAssistant, r as useUIStore, s as useWorkflowsStore, t as useUsersStore } from "./users.store-KDduniYy.js";
import { cs as EDITABLE_CANVAS_VIEWS } from "./constants-BFYSGQP4.js";
import { j as defineStore, r as useRootStore, v as assert } from "./_baseOrderBy-CjnCEHwl.js";
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
	const streamingAbortController = ref(null);
	const locale = useI18n();
	const telemetry = useTelemetry();
	const assistantHelpers = useAIAssistantHelpers();
	const { suggestions, applyCodeDiff, undoCodeDiff } = useCodeDiff({
		chatMessages,
		getTargetNodeName: () => chatSessionError.value.node.name,
		getSessionId: () => currentSessionId.value
	});
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
	const canManageAISettings = computed(() => {
		return hasPermission(["rbac"], { rbac: { scope: "aiAssistant:manage" } });
	});
	const allowSendingParameterValues = computed(() => settings.settings.ai.allowSendingParameterValues);
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
		if (streamingAbortController.value) {
			streamingAbortController.value.abort();
			streamingAbortController.value = null;
		}
	}
	function abortStreaming() {
		stopStreaming();
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
		if (e.name === "AbortError") return;
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
		await initSupportChat(locale.baseText("aiAssistant.builder.credentialHelpMessage", { interpolate: { credentialName: credType.displayName } }), credType);
		trackUserOpenedAssistant({
			source: "credential",
			task: "credentials",
			has_existing_session: hasExistingSession
		});
	}
	async function getVisualContext(nodeInfo) {
		if (chatSessionTask.value === "error") return { aiUsageSettings: { allowSendingParameterValues: allowSendingParameterValues.value } };
		const currentView = route.name;
		const activeNode = workflowsStore.activeNode();
		const activeNodeForLLM = activeNode ? await assistantHelpers.processNodeForAssistant(activeNode, ["position", "parameters.notice"], { excludeParameterValues: !allowSendingParameterValues.value }) : null;
		const activeCredential = uiStore.activeModals.includes("editCredential") ? useCredentialsStore().getCredentialTypeByName(uiStore.activeCredentialType ?? "") : void 0;
		const executionResult = workflowsStore.workflowExecutionData?.data?.resultData;
		const isCurrentNodeExecuted = Boolean(executionResult?.runData?.hasOwnProperty(activeNode?.name ?? ""));
		const nodeError = executionResult?.error && "node" in executionResult.error && executionResult.error.node?.name === activeNode?.name ? executionResult.error : void 0;
		const executionStatus = isCurrentNodeExecuted ? {
			status: nodeError ? "error" : "success",
			error: nodeError ? assistantHelpers.simplifyErrorForAssistant(nodeError) : void 0
		} : void 0;
		return {
			aiUsageSettings: { allowSendingParameterValues: allowSendingParameterValues.value },
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
			currentWorkflow: workflowDataStale.value ? await assistantHelpers.simplifyWorkflowForAssistant(workflowsStore.workflow, { excludeParameterValues: !allowSendingParameterValues.value }) : void 0,
			executionData: workflowExecutionDataStale.value && executionResult ? assistantHelpers.simplifyResultData(executionResult, { removeParameterValues: !allowSendingParameterValues.value }) : void 0
		};
	}
	async function initSupportChat(userMessage, credentialType) {
		resetAssistantChat();
		chatSessionTask.value = credentialType ? "credentials" : "support";
		const activeNode = workflowsStore.activeNode();
		const nodeInfo = assistantHelpers.getNodeInfoForAssistant(activeNode, { excludeParameterValues: !allowSendingParameterValues.value });
		const visualContext = chatSessionTask.value === "support" ? await getVisualContext(nodeInfo) : { aiUsageSettings: { allowSendingParameterValues: allowSendingParameterValues.value } };
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
		if (streamingAbortController.value) streamingAbortController.value.abort();
		streamingAbortController.value = new AbortController();
		chatWithAssistant(rootStore.restApiContext, { payload }, (msg) => onEachStreamingMessage(msg, id), () => onDoneStreaming(id), (e) => handleServiceError(e, id, async () => await initSupportChat(userMessage, credentialType)), streamingAbortController.value.signal);
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
		const { authType, nodeInputData, schemas } = assistantHelpers.getNodeInfoForAssistant(context.node, { excludeParameterValues: !allowSendingParameterValues.value });
		addLoadingAssistantMessage(locale.baseText("aiAssistant.thinkingSteps.analyzingError"));
		streaming.value = true;
		const payload = {
			role: "user",
			type: "init-error-helper",
			user: { firstName: usersStore.currentUser?.firstName ?? "" },
			error: context.error,
			node: await assistantHelpers.processNodeForAssistant(context.node, ["position", "parameters.notice"], { excludeParameterValues: !allowSendingParameterValues.value }),
			nodeInputData,
			executionSchema: schemas,
			authType,
			context: { aiUsageSettings: { allowSendingParameterValues: allowSendingParameterValues.value } }
		};
		if (streamingAbortController.value) streamingAbortController.value.abort();
		streamingAbortController.value = new AbortController();
		chatWithAssistant(rootStore.restApiContext, { payload }, (msg) => onEachStreamingMessage(msg, id), () => onDoneStreaming(id), (e) => handleServiceError(e, id, async () => await initErrorHelper(context)), streamingAbortController.value.signal);
	}
	async function sendEvent(eventName, error) {
		if (isSessionEnded.value || streaming.value) return;
		assert(currentSessionId.value);
		const id = getRandomId();
		addLoadingAssistantMessage(locale.baseText("aiAssistant.thinkingSteps.thinking"));
		streaming.value = true;
		if (streamingAbortController.value) streamingAbortController.value.abort();
		streamingAbortController.value = new AbortController();
		chatWithAssistant(rootStore.restApiContext, {
			payload: {
				role: "user",
				type: "event",
				eventName,
				error
			},
			sessionId: currentSessionId.value
		}, (msg) => onEachStreamingMessage(msg, id), () => onDoneStreaming(id), (e) => handleServiceError(e, id, async () => await sendEvent(eventName, error)), streamingAbortController.value.signal);
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
			const userContext = await getVisualContext(assistantHelpers.getNodeInfoForAssistant(activeNode, { excludeParameterValues: !allowSendingParameterValues.value }));
			if (streamingAbortController.value) streamingAbortController.value.abort();
			streamingAbortController.value = new AbortController();
			chatWithAssistant(rootStore.restApiContext, {
				payload: {
					id: v4_default(),
					role: "user",
					type: "message",
					text: chatMessage.text,
					quickReplyType: chatMessage.quickReplyType,
					context: userContext
				},
				sessionId: currentSessionId.value
			}, (msg) => onEachStreamingMessage(msg, id), () => onDoneStreaming(id), (e) => handleServiceError(e, id, retry), streamingAbortController.value.signal);
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
			task: chatSessionTask.value,
			allow_sending_parameter_values: allowSendingParameterValues.value
		});
	}
	function trackUserOpenedAssistant({ source, task, has_existing_session }) {
		const canvasStatus = workflowsStore.allNodes.length === 0 ? "empty" : "existing_workflow";
		telemetry.track("User opened assistant", {
			source,
			task,
			has_existing_session,
			instance_id: rootStore.instanceId,
			workflow_id: workflowsStore.workflowId,
			canvas_status: canvasStatus,
			node_type: chatSessionError.value?.node?.type,
			error: chatSessionError.value?.error,
			chat_session_id: currentSessionId.value
		});
	}
	watch(route, () => {
		const activeWorkflowId = workflowsStore.workflowId;
		if (!currentSessionId.value || !currentSessionWorkflowId.value || currentSessionWorkflowId.value === activeWorkflowId) return;
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
		canManageAISettings,
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
		handleServiceError,
		abortStreaming
	};
});
export { useAssistantStore as t };
