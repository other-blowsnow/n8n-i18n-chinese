import { C as computed, Cn as toDisplayString, D as createElementBlock, Gt as unref, It as ref, L as h, P as defineComponent, _t as watch, et as openBlock, j as createTextVNode, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-8-eqnC2S.js";
import { Lt as useRoute, Yt as createEventBus } from "./src-Cq27d_Gp.js";
import { It as useNDVStore, Nt as useTelemetry, fs as useSettingsStore, hr as useToast, it as chatWithAssistant, ja as CREDENTIAL_EDIT_MODAL_KEY, kr as v4_default, ot as replaceCode, r as useUIStore, rt as useCredentialsStore, s as useWorkflowsStore, st as useAIAssistantHelpers, t as useUsersStore, ua as codeNodeEditorEventBus, xc as STORES } from "./users.store-qBZsmf9-.js";
import { Jo as EDITABLE_CANVAS_VIEWS, Pa as deepCopy } from "./constants-Cyrg9Nbl.js";
import { A as defineStore, _ as assert, r as useRootStore } from "./_baseOrderBy-3Uh8XZv3.js";
const useChatPanelStateStore = defineStore(STORES.CHAT_PANEL_STATE, () => {
	return {
		isOpen: ref(false),
		width: ref(400),
		activeMode: ref("builder"),
		showCoachmark: ref(false)
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
					"data-action-parameter-node": __props.nodeName
				}, toDisplayString(__props.nodeName), 9, _hoisted_1),
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
	async function getVisualContext(nodeInfo) {
		if (chatSessionTask.value === "error") return;
		const currentView = route.name;
		const activeNode = workflowsStore.activeNode();
		const activeNodeForLLM = activeNode ? await assistantHelpers.processNodeForAssistant(activeNode, ["position", "parameters.notice"]) : null;
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
		const visualContext = chatSessionTask.value === "support" ? await getVisualContext(nodeInfo) : void 0;
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
			node: await assistantHelpers.processNodeForAssistant(context.node, ["position", "parameters.notice"]),
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
			const userContext = await getVisualContext(assistantHelpers.getNodeInfoForAssistant(activeNode));
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
export { ndvEventBus as n, useChatPanelStateStore as r, useAssistantStore as t };
