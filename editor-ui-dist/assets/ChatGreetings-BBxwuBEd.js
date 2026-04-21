import { $ as openBlock, A as createTextVNode, C as createBaseVNode, E as createElementBlock, Ft as ref, K as onBeforeMount, N as defineComponent, O as createSlots, S as computed, Sn as toDisplayString, T as createCommentVNode, W as nextTick, Wt as unref, _ as Fragment, _n as normalizeClass, gt as watch, h as withModifiers, it as renderSlot, j as createVNode, pt as useTemplateRef, q as onBeforeUnmount, rt as renderList, w as createBlock, y as Teleport, yn as normalizeStyle, yt as withCtx } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { C as useSpeechRecognition, at as useI18n, ot as I18nT, p as useElementSize, w as useSpeechSynthesis, x as useScroll } from "./core-3_PGaJOI.js";
import { $i as N8nIcon_default, Ft as useDeviceSupport, Ii as truncate, Mi as Input_default, Mt as N8nLoading_default, Ni as N8nIconButton_default, Oi as N8nTooltip_default, Qi as N8nButton_default, Xi as N8nCallout_default, Yi as N8nHeading_default, Zi as N8nText_default, nt as N8nLink_default, ut as useRouter } from "./src-Bi5AIoSC.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { Fn as useToast, s as useWorkflowsStore } from "./users.store-EUaYYYY-.js";
import { zr as VIEWS } from "./constants-Co4JQRdg.js";
import { t as useRootStore } from "./useRootStore-3wVnX35v.js";
import { t as useClipboard } from "./useClipboard-BXWwu7kW.js";
import { t as usePushConnectionStore } from "./pushConnection.store-DtV1odaL.js";
import { h as providerDisplayNames } from "./constants-DAn60oew.js";
import { o as buildChatAttachmentUrl, t as useChatStore } from "./chat.store-D23bFhSI.js";
import { C as splitMarkdownIntoChunks, T as unflattenModel, b as isRegenerable, g as isEditable, s as enrichMimeTypesWithExtensions, v as isLlmProviderModel, x as isWaitingForApproval } from "./fileUtils-B3_VlOCt.js";
import { t as ChatAgentAvatar_default } from "./ChatAgentAvatar-DqU7HAuE.js";
import { t as ChatFile_default } from "./ChatFile-ChTjtFG3.js";
import { t as ToolsSelector_default } from "./ToolsSelector-CJy5Myw8.js";
import { t as ChatMarkdownChunk_default } from "./ChatMarkdownChunk-Bvv2lFo1.js";
//#region src/features/ai/chatHub/composables/useChatPushHandler.ts
/**
* Composable for handling chat stream messages received via WebSocket Push
*/
function useChatPushHandler() {
	const pushStore = usePushConnectionStore();
	const chatStore = useChatStore();
	const activeStreams = ref(/* @__PURE__ */ new Map());
	const removeEventListener = ref(null);
	const stopReconnectWatcher = ref(null);
	/**
	* Handle a chat execution begin event (whole streaming session starts)
	*/
	function handleExecutionBegin(event) {
		const { sessionId } = event.data;
		chatStore.handleWebSocketExecutionBegin({ sessionId });
	}
	/**
	* Handle a chat execution end event (whole streaming session ends)
	*/
	function handleExecutionEnd(event) {
		const { sessionId, status } = event.data;
		activeStreams.value.delete(sessionId);
		chatStore.handleWebSocketExecutionEnd({
			sessionId,
			status
		});
	}
	/**
	* Handle a chat stream begin event
	*/
	function handleStreamBegin(event) {
		const { sessionId, messageId, sequenceNumber, previousMessageId, retryOfMessageId } = event.data;
		activeStreams.value.set(sessionId, {
			sessionId,
			messageId,
			lastSequenceNumber: sequenceNumber,
			content: ""
		});
		if (chatStore.streaming?.sessionId === sessionId) {
			if (chatStore.streaming.messageId !== messageId) chatStore.streaming.messageId = messageId;
		}
		chatStore.handleWebSocketStreamBegin({
			sessionId,
			messageId,
			previousMessageId,
			retryOfMessageId
		});
	}
	/**
	* Handle a chat stream chunk event
	*/
	function handleStreamChunk(event) {
		const { sessionId, messageId, sequenceNumber, content } = event.data;
		const streamState = activeStreams.value.get(sessionId);
		if (!streamState || streamState.messageId !== messageId) return;
		if (sequenceNumber <= streamState.lastSequenceNumber) return;
		streamState.lastSequenceNumber = sequenceNumber;
		streamState.content += content;
		chatStore.handleWebSocketStreamChunk({
			sessionId,
			messageId,
			content
		});
	}
	/**
	* Handle a chat stream end event
	*/
	function handleStreamEnd(event) {
		const { sessionId, messageId, status } = event.data;
		activeStreams.value.delete(sessionId);
		chatStore.handleWebSocketStreamEnd({
			sessionId,
			messageId,
			status
		});
	}
	/**
	* Handle a chat stream error event
	*/
	function handleStreamError(event) {
		const { sessionId, messageId, error } = event.data;
		activeStreams.value.delete(sessionId);
		chatStore.handleWebSocketStreamError({
			sessionId,
			messageId,
			error
		});
	}
	/**
	* Handle a human message created event
	*/
	function handleHumanMessageCreated(event) {
		chatStore.handleHumanMessageCreated(event.data);
	}
	/**
	* Handle a message edited event
	*/
	function handleMessageEdited(event) {
		chatStore.handleMessageEdited(event.data);
	}
	/**
	* Handle WebSocket reconnection by catching up all active streams
	*/
	async function handleReconnect() {
		for (const [sessionId, streamState] of activeStreams.value.entries()) {
			const result = await chatStore.reconnectToStream(sessionId, streamState.lastSequenceNumber);
			if (result?.pendingChunks?.length) {
				for (const chunk of result.pendingChunks) if (chunk.sequenceNumber > streamState.lastSequenceNumber) streamState.lastSequenceNumber = chunk.sequenceNumber;
			}
		}
	}
	/**
	* Process a push message if it's a chat stream event
	*/
	function processMessage(event) {
		switch (event.type) {
			case "chatHubHumanMessageCreated":
				handleHumanMessageCreated(event);
				break;
			case "chatHubMessageEdited":
				handleMessageEdited(event);
				break;
			case "chatHubExecutionBegin":
				handleExecutionBegin(event);
				break;
			case "chatHubExecutionEnd":
				handleExecutionEnd(event);
				break;
			case "chatHubStreamBegin":
				handleStreamBegin(event);
				break;
			case "chatHubStreamChunk":
				handleStreamChunk(event);
				break;
			case "chatHubStreamEnd":
				handleStreamEnd(event);
				break;
			case "chatHubStreamError":
				handleStreamError(event);
				break;
		}
	}
	/**
	* Initialize the push handler and connect to WebSocket
	*/
	function initialize() {
		if (removeEventListener.value) return;
		pushStore.pushConnect();
		removeEventListener.value = pushStore.addEventListener(processMessage);
		stopReconnectWatcher.value = watch(() => pushStore.isConnected, async (isConnected, wasConnected) => {
			if (isConnected && !wasConnected) await handleReconnect();
		});
	}
	/**
	* Terminate the push handler and disconnect from WebSocket
	*/
	function terminate() {
		if (stopReconnectWatcher.value) {
			stopReconnectWatcher.value();
			stopReconnectWatcher.value = null;
		}
		if (removeEventListener.value) {
			removeEventListener.value();
			removeEventListener.value = null;
		}
		activeStreams.value.clear();
		pushStore.pushDisconnect();
	}
	/**
	* Get the current stream state for a session
	*/
	function getStreamState(sessionId) {
		return activeStreams.value.get(sessionId);
	}
	/**
	* Check if a session has an active stream
	*/
	function hasActiveStream(sessionId) {
		return !!activeStreams.value.get(sessionId);
	}
	/**
	* Initialize stream state for reconnection after page refresh.
	* This allows the push handler to receive future chunks for an existing stream.
	*/
	function initializeStreamState(sessionId, messageId, lastSequenceNumber) {
		activeStreams.value.set(sessionId, {
			sessionId,
			messageId,
			lastSequenceNumber,
			content: ""
		});
	}
	/**
	* Get the last received sequence number for a session
	*/
	function getLastSequenceNumber(sessionId) {
		return activeStreams.value.get(sessionId)?.lastSequenceNumber ?? 0;
	}
	return {
		activeStreams,
		initialize,
		terminate,
		getStreamState,
		hasActiveStream,
		getLastSequenceNumber,
		initializeStreamState
	};
}
//#endregion
//#region src/features/ai/chatHub/composables/useChatSession.ts
function useChatSession(options) {
	const { sessionId, scrollableRef, extendMessagingState, shouldSkipScroll } = options;
	const chatStore = useChatStore();
	const chatPushHandler = useChatPushHandler();
	onBeforeMount(() => {
		chatPushHandler.initialize();
	});
	onBeforeUnmount(() => {
		chatPushHandler.terminate();
	});
	const chatMessages = computed(() => chatStore.getActiveMessages(sessionId.value));
	const isResponding = computed(() => chatStore.isResponding(sessionId.value));
	const isNewSession = options.isNewSession ?? computed(() => chatMessages.value.length === 0);
	const messagingState = computed(() => {
		if (chatStore.streaming?.sessionId === sessionId.value) return chatStore.streaming.messageId ? "receiving" : "waitingFirstChunk";
		if (isWaitingForApproval(chatStore.lastMessage(sessionId.value))) return "waitingForApproval";
		if (extendMessagingState) {
			const extended = extendMessagingState();
			if (extended !== null) return extended;
		}
		return "idle";
	});
	const scrollContainerRef = computed(() => scrollableRef.value?.parentElement ?? null);
	const { arrivedState, measure } = useScroll(scrollContainerRef, {
		throttle: 100,
		offset: { bottom: 100 }
	});
	function scrollToBottom(smooth) {
		scrollContainerRef.value?.scrollTo({
			top: scrollableRef.value?.scrollHeight,
			behavior: smooth ? "smooth" : "instant"
		});
	}
	function scrollToMessage(messageId) {
		scrollableRef.value?.querySelector(`[data-message-id="${messageId}"]`)?.scrollIntoView({ behavior: "smooth" });
	}
	/**
	* Fetch messages for a session and reconnect to any active stream.
	* Throws on failure so callers can handle errors differently.
	*/
	async function loadSession(targetSessionId) {
		if (!chatStore.getConversation(targetSessionId)) await chatStore.fetchMessages(targetSessionId);
		const result = await chatStore.reconnectToStream(targetSessionId, 0);
		if (result?.hasActiveStream && result.currentMessageId) chatPushHandler.initializeStreamState(targetSessionId, result.currentMessageId, result.lastSequenceNumber);
	}
	watch(() => chatMessages.value[chatMessages.value.length - 1]?.id, (lastMessageId) => {
		if (!lastMessageId) return;
		if (shouldSkipScroll?.()) return;
		nextTick(measure);
		if (chatStore.streaming?.sessionId === sessionId.value) {
			scrollToMessage(chatStore.streaming.promptId);
			return;
		}
		scrollToBottom(false);
	}, {
		immediate: true,
		flush: "post"
	});
	return {
		chatMessages,
		isResponding,
		isNewSession,
		messagingState,
		scrollContainerRef,
		arrivedState,
		scrollToBottom,
		scrollToMessage,
		loadSession
	};
}
var ChatTypingIndicator_vue_vue_type_style_index_0_lang_module_default = {
	typing: "_typing_v8rma_125",
	blink: "_blink_v8rma_1"
};
//#endregion
//#region src/features/ai/chatHub/components/ChatTypingIndicator.vue
var _sfc_main = {};
function _sfc_render(_ctx, _cache) {
	return openBlock(), createElementBlock("span", {
		class: normalizeClass(_ctx.$style.typing),
		"data-test-id": "chat-typing-indicator"
	}, [..._cache[0] || (_cache[0] = [
		createBaseVNode("i", null, null, -1),
		createBaseVNode("i", null, null, -1),
		createBaseVNode("i", null, null, -1)
	])], 2);
}
var ChatTypingIndicator_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render], ["__cssModules", { "$style": ChatTypingIndicator_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/chatHub/components/CopyButton.vue?vue&type=script&setup=true&lang.ts
var CopyButton_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "CopyButton",
	props: { content: {} },
	setup(__props) {
		const i18n = useI18n();
		const clipboard = useClipboard();
		const justCopied = ref(false);
		const copyTooltip = computed(() => {
			return justCopied.value ? i18n.baseText("generic.copied") : i18n.baseText("generic.copy");
		});
		async function handleCopy() {
			await clipboard.copy(__props.content);
			justCopied.value = true;
			setTimeout(() => {
				justCopied.value = false;
			}, 1e3);
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nTooltip_default), {
				placement: "bottom",
				"show-after": 300
			}, {
				content: withCtx(() => [createTextVNode(toDisplayString(copyTooltip.value), 1)]),
				default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
					variant: "ghost",
					icon: justCopied.value ? "check" : "copy",
					size: "medium",
					class: normalizeClass(_ctx.$style.button),
					tabindex: "0",
					"aria-label": copyTooltip.value,
					onClick: handleCopy
				}, null, 8, [
					"icon",
					"class",
					"aria-label"
				])]),
				_: 1
			});
		};
	}
});
var CopyButton_vue_vue_type_style_index_0_lang_module_default = { button: "_button_1pgkm_125" };
var CopyButton_default = /* @__PURE__ */ _plugin_vue_export_helper_default(CopyButton_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CopyButton_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/chatHub/components/ChatMessageActions.vue?vue&type=script&setup=true&lang.ts
var ChatMessageActions_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ChatMessageActions",
	props: {
		message: {},
		isSpeechSynthesisAvailable: { type: Boolean },
		isSpeaking: { type: Boolean },
		hasSessionStreaming: { type: Boolean }
	},
	emits: [
		"edit",
		"regenerate",
		"switchAlternative",
		"readAloud"
	],
	setup(__props, { emit: __emit }) {
		const i18n = useI18n();
		const router = useRouter();
		const workflowsStore = useWorkflowsStore();
		const emit = __emit;
		const currentAlternativeIndex = computed(() => {
			return __props.message.alternatives.findIndex((id) => id === __props.message.id);
		});
		const text = computed(() => __props.message.content.map((c) => c.content).join("\n\n"));
		const executionUrl = computed(() => {
			if (workflowsStore.canViewWorkflows && __props.message.type === "ai" && __props.message.provider === "n8n" && __props.message.executionId) return router.resolve({
				name: VIEWS.EXECUTION_PREVIEW,
				params: {
					name: __props.message.workflowId,
					executionId: __props.message.executionId
				}
			}).href;
		});
		const canEdit = computed(() => isEditable(__props.message));
		const canRegenerate = computed(() => isRegenerable(__props.message));
		function handleEdit() {
			emit("edit");
		}
		function handleRegenerate() {
			emit("regenerate");
		}
		function handleReadAloud() {
			emit("readAloud");
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.actions),
				"data-test-id": "chat-message-actions"
			}, [
				createVNode(CopyButton_default, {
					content: text.value,
					"data-test-id": "chat-message-copy"
				}, null, 8, ["content"]),
				__props.isSpeechSynthesisAvailable && __props.message.type === "ai" ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 0,
					placement: "bottom",
					"show-after": 300
				}, {
					content: withCtx(() => [createTextVNode(toDisplayString(__props.isSpeaking ? unref(i18n).baseText("chatHub.message.actions.stopReading") : unref(i18n).baseText("chatHub.message.actions.readAloud")), 1)]),
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						variant: "ghost",
						icon: __props.isSpeaking ? "volume-x" : "volume-2",
						size: "medium",
						onClick: handleReadAloud
					}, null, 8, ["icon"])]),
					_: 1
				})) : createCommentVNode("", true),
				canEdit.value ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 1,
					placement: "bottom",
					"show-after": 300
				}, {
					content: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.message.actions.edit")), 1)]),
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						variant: "ghost",
						icon: "pen",
						size: "medium",
						"data-test-id": "chat-message-edit",
						disabled: __props.hasSessionStreaming,
						onClick: handleEdit
					}, null, 8, ["disabled"])]),
					_: 1
				})) : createCommentVNode("", true),
				canRegenerate.value ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 2,
					placement: "bottom",
					"show-after": 300
				}, {
					content: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.message.actions.regenerate")), 1)]),
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						variant: "ghost",
						icon: "refresh-cw",
						size: "medium",
						"data-test-id": "chat-message-regenerate",
						disabled: __props.hasSessionStreaming,
						onClick: handleRegenerate
					}, null, 8, ["disabled"])]),
					_: 1
				})) : createCommentVNode("", true),
				executionUrl.value ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 3,
					placement: "bottom",
					"show-after": 300
				}, {
					content: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.message.actions.executionId")) + ": ", 1), createVNode(unref(N8nLink_default), {
						to: executionUrl.value,
						"new-window": true
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(__props.message.executionId), 1)]),
						_: 1
					}, 8, ["to"])]),
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						variant: "ghost",
						icon: "info",
						size: "medium",
						"data-test-id": "chat-message-info"
					})]),
					_: 1
				})) : createCommentVNode("", true),
				__props.message.alternatives.length > 1 ? (openBlock(), createElementBlock(Fragment, { key: 4 }, [
					createVNode(unref(N8nIconButton_default), {
						variant: "ghost",
						icon: "chevron-left",
						size: "medium",
						disabled: __props.hasSessionStreaming || currentAlternativeIndex.value === 0,
						"data-test-id": "chat-message-prev-alternative",
						onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("switchAlternative", __props.message.alternatives[currentAlternativeIndex.value - 1]))
					}, null, 8, ["disabled"]),
					createVNode(unref(N8nText_default), {
						size: "medium",
						color: "text-base"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(`${currentAlternativeIndex.value + 1}/${__props.message.alternatives.length}`), 1)]),
						_: 1
					}),
					createVNode(unref(N8nIconButton_default), {
						variant: "ghost",
						icon: "chevron-right",
						size: "medium",
						disabled: __props.hasSessionStreaming || currentAlternativeIndex.value === __props.message.alternatives.length - 1,
						"data-test-id": "chat-message-next-alternative",
						onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("switchAlternative", __props.message.alternatives[currentAlternativeIndex.value + 1]))
					}, null, 8, ["disabled"])
				], 64)) : createCommentVNode("", true)
			], 2);
		};
	}
});
var ChatMessageActions_vue_vue_type_style_index_0_lang_module_default = { actions: "_actions_1dz1l_125" };
var ChatMessageActions_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ChatMessageActions_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatMessageActions_vue_vue_type_style_index_0_lang_module_default }], ["__scopeId", "data-v-ec3f5f08"]]);
//#endregion
//#region src/features/ai/chatHub/components/ChatMessage.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$2 = ["data-message-id", "data-test-id"];
var _hoisted_2 = ["accept"];
var _hoisted_3 = { key: 1 };
var ChatMessage_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ChatMessage",
	props: {
		message: {},
		compact: { type: Boolean },
		isEditing: { type: Boolean },
		isEditSubmitting: { type: Boolean },
		hasSessionStreaming: { type: Boolean },
		cachedAgentDisplayName: {},
		cachedAgentIcon: {},
		acceptedMimeTypes: {},
		minHeight: {}
	},
	emits: [
		"startEdit",
		"cancelEdit",
		"update",
		"regenerate",
		"switchAlternative",
		"openArtifact"
	],
	setup(__props, { expose: __expose, emit: __emit }) {
		const emit = __emit;
		const chatStore = useChatStore();
		const rootStore = useRootStore();
		const { isCtrlKeyPressed } = useDeviceSupport();
		const i18n = useI18n();
		const editedText = ref("");
		const newFiles = ref([]);
		const removedExistingIndices = ref(/* @__PURE__ */ new Set());
		const fileInputRef = useTemplateRef("fileInputRef");
		const textareaRef = useTemplateRef("textarea");
		const attachmentsRef = useTemplateRef("attachmentsRef");
		const attachmentsElSize = useElementSize(attachmentsRef, void 0, { box: "border-box" });
		const markdownChunkRefs = useTemplateRef("markdownChunk");
		const activeCodeBlockTeleport = computed(() => {
			const refs = markdownChunkRefs.value;
			if (!refs || !Array.isArray(refs)) return null;
			for (const chunkRef of refs) if (chunkRef?.hoveredCodeBlockActions) {
				const content = chunkRef.getHoveredCodeBlockContent();
				if (content) return {
					target: chunkRef.hoveredCodeBlockActions,
					content
				};
			}
			return null;
		});
		const messageChunks = computed(() => __props.message.content.flatMap((chunk, index, arr) => {
			if (chunk.type === "hidden") return [];
			if (chunk.type === "with-buttons") return [chunk];
			if (chunk.type === "artifact-create" || chunk.type === "artifact-edit") {
				const prev = arr[index - 1];
				return prev?.type === chunk.type && prev.command.title === chunk.command.title ? [] : [chunk];
			}
			if (__props.message.status === "error" && !chunk.content) return [{
				type: "text",
				content: i18n.baseText("chatHub.message.error.unknown")
			}];
			if (/\[\^[^\]]+\]/.test(chunk.content)) return [{
				type: "text",
				content: chunk.content
			}];
			return splitMarkdownIntoChunks(chunk.content).flatMap((content) => content.trim() === "" ? [] : [{
				type: "text",
				content
			}]);
		}));
		const text = computed(() => messageChunks.value.flatMap((chunk) => chunk.type === "text" ? [chunk.content] : []).join(""));
		const speech = useSpeechSynthesis(text, {
			pitch: 1,
			rate: 1,
			volume: 1
		});
		const agent = computed(() => {
			const model = unflattenModel(__props.message);
			if (!model) return null;
			return chatStore.getAgent(model, {
				name: __props.cachedAgentDisplayName,
				icon: __props.cachedAgentIcon
			});
		});
		const attachments = computed(() => __props.message.attachments.map(({ fileName, mimeType }, index) => ({
			file: new File([], fileName ?? "file", { type: mimeType }),
			downloadUrl: buildChatAttachmentUrl(rootStore.restApiContext, __props.message.sessionId, __props.message.id, index)
		})));
		const mergedAttachments = computed(() => [...attachments.value.flatMap(({ downloadUrl, file }, idx) => removedExistingIndices.value.has(idx) ? [] : [{
			isNew: false,
			file,
			index: idx,
			downloadUrl
		}]), ...newFiles.value.map((file, index) => ({
			isNew: true,
			file,
			index
		}))]);
		const enrichedAcceptedMimeTypes = computed(() => enrichMimeTypesWithExtensions(__props.acceptedMimeTypes));
		const hideMessage = computed(() => {
			return __props.message.status === "success" && text.value === "" && !__props.message.content.some((c) => c.type === "with-buttons");
		});
		const shouldShowTypingIndicator = computed(() => __props.message.status === "running");
		function handleEdit() {
			emit("startEdit");
		}
		function handleCancelEdit() {
			emit("cancelEdit");
		}
		function handleConfirmEdit() {
			if (!editedText.value.trim()) return;
			const keptAttachmentIndices = __props.message.attachments.map((_, idx) => idx).filter((idx) => !removedExistingIndices.value.has(idx));
			emit("update", editedText.value, keptAttachmentIndices, newFiles.value);
		}
		function handleAttachClick() {
			fileInputRef.value?.click();
		}
		function handleFileSelect(e) {
			const target = e.target;
			const files = target.files;
			if (!files || files.length === 0) return;
			for (const file of Array.from(files)) newFiles.value.push(file);
			if (target) target.value = "";
		}
		function handleRemoveFile(file) {
			if (file.isNew) {
				newFiles.value = newFiles.value.filter((_, idx) => idx !== file.index);
				return;
			}
			removedExistingIndices.value.add(file.index);
		}
		function addFiles(files) {
			for (const file of files) newFiles.value.push(file);
		}
		__expose({ addFiles });
		function handleKeydownTextarea(e) {
			if (e.key === "Escape") {
				emit("cancelEdit");
				return;
			}
			const trimmed = editedText.value.trim();
			if (e.key === "Enter" && isCtrlKeyPressed(e) && !e.isComposing && trimmed) {
				e.preventDefault();
				handleConfirmEdit();
			}
		}
		function handleRegenerate() {
			emit("regenerate", __props.message);
		}
		function handleReadAloud() {
			if (speech.isSupported.value) if (speech.isPlaying.value) speech.stop();
			else speech.speak();
		}
		function handleSwitchAlternative(messageId) {
			emit("switchAlternative", messageId);
		}
		watch(() => __props.isEditing, (editing) => {
			editedText.value = editing ? text.value : "";
			newFiles.value = [];
			removedExistingIndices.value = /* @__PURE__ */ new Set();
		}, { immediate: true });
		watch(textareaRef, async (textarea) => {
			if (textarea) {
				await new Promise((r) => setTimeout(r, 0));
				textarea.focus();
				textarea.$el.scrollIntoView({ block: "nearest" });
			}
		}, {
			immediate: true,
			flush: "post"
		});
		onBeforeMount(() => {
			speech.stop();
		});
		return (_ctx, _cache) => {
			return !hideMessage.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass([
					_ctx.$style.message,
					__props.message.type === "human" ? _ctx.$style.user : _ctx.$style.assistant,
					{ [_ctx.$style.compact]: __props.compact }
				]),
				style: normalizeStyle({ minHeight: __props.minHeight ? `${__props.minHeight}px` : void 0 }),
				"data-message-id": __props.message.id,
				"data-test-id": `chat-message-${__props.message.id}`
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.avatar) }, [__props.message.type === "human" ? (openBlock(), createBlock(unref(N8nIcon_default), {
				key: 0,
				icon: "user",
				width: "20",
				height: "20"
			})) : (openBlock(), createBlock(ChatAgentAvatar_default, {
				key: 1,
				agent: agent.value,
				size: "md",
				tooltip: ""
			}, null, 8, ["agent"]))], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [__props.message.type === "human" ? (openBlock(), createElementBlock("input", {
				key: 0,
				ref_key: "fileInputRef",
				ref: fileInputRef,
				type: "file",
				"data-test-id": "message-edit-file-input",
				class: normalizeClass(_ctx.$style.fileInput),
				accept: enrichedAcceptedMimeTypes.value,
				multiple: "",
				onChange: handleFileSelect
			}, null, 42, _hoisted_2)) : createCommentVNode("", true), __props.isEditing ? (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.editContainer),
				style: normalizeStyle({ "--attachments--height": `${unref(attachmentsElSize).height.value}px` })
			}, [
				__props.message.type === "human" && mergedAttachments.value.length > 0 ? (openBlock(), createElementBlock("div", {
					key: 0,
					ref_key: "attachmentsRef",
					ref: attachmentsRef,
					class: normalizeClass(_ctx.$style.attachments)
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(mergedAttachments.value, (attachment, index) => {
					return openBlock(), createBlock(ChatFile_default, {
						key: index,
						file: attachment.file,
						"is-removable": "",
						href: attachment.isNew ? void 0 : attachment.downloadUrl,
						onRemove: ($event) => handleRemoveFile(attachment)
					}, null, 8, [
						"file",
						"href",
						"onRemove"
					]);
				}), 128))], 2)) : createCommentVNode("", true),
				createVNode(unref(Input_default), {
					ref: "textarea",
					modelValue: editedText.value,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => editedText.value = $event),
					type: "textarea",
					autosize: {
						minRows: 1,
						maxRows: 20
					},
					class: normalizeClass(_ctx.$style.textarea),
					onKeydown: handleKeydownTextarea
				}, null, 8, ["modelValue", "class"]),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.editFooter) }, [__props.message.type === "human" ? (openBlock(), createBlock(unref(N8nIconButton_default), {
					key: 0,
					variant: "ghost",
					icon: "paperclip",
					onClick: withModifiers(handleAttachClick, ["stop"])
				})) : createCommentVNode("", true), createBaseVNode("div", { class: normalizeClass(_ctx.$style.editActions) }, [createVNode(unref(N8nButton_default), {
					variant: "subtle",
					size: "small",
					onClick: handleCancelEdit
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.message.edit.cancel")), 1)]),
					_: 1
				}), createVNode(unref(N8nButton_default), {
					variant: "solid",
					size: "small",
					disabled: !editedText.value.trim() || __props.isEditSubmitting,
					loading: __props.isEditSubmitting,
					onClick: handleConfirmEdit
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.message.edit.send")), 1)]),
					_: 1
				}, 8, ["disabled", "loading"])], 2)], 2)
			], 6)) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [createBaseVNode("div", { class: normalizeClass([_ctx.$style.chatMessage, { [_ctx.$style.errorMessage]: __props.message.status === "error" }]) }, [attachments.value.length > 0 ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.attachments)
			}, [(openBlock(true), createElementBlock(Fragment, null, renderList(attachments.value, (attachment, index) => {
				return openBlock(), createBlock(ChatFile_default, {
					key: index,
					file: attachment.file,
					"is-removable": false,
					href: attachment.downloadUrl
				}, null, 8, ["file", "href"]);
			}), 128))], 2)) : createCommentVNode("", true), __props.message.type === "human" ? (openBlock(), createElementBlock("div", _hoisted_3, toDisplayString(text.value), 1)) : (openBlock(), createElementBlock("div", {
				key: 2,
				class: normalizeClass(_ctx.$style.markdownContent)
			}, [(openBlock(true), createElementBlock(Fragment, null, renderList(messageChunks.value, (chunk, index) => {
				return openBlock(), createBlock(ChatMarkdownChunk_default, {
					ref_for: true,
					ref: "markdownChunk",
					key: index,
					source: chunk,
					"is-buttons-disabled": __props.message.status !== "waiting",
					onOpenArtifact: _cache[1] || (_cache[1] = ($event) => emit("openArtifact", $event))
				}, null, 8, ["source", "is-buttons-disabled"]);
			}), 128)), activeCodeBlockTeleport.value ? (openBlock(), createBlock(Teleport, {
				key: 0,
				to: activeCodeBlockTeleport.value.target
			}, [createVNode(CopyButton_default, { content: activeCodeBlockTeleport.value.content }, null, 8, ["content"])], 8, ["to"])) : createCommentVNode("", true)], 2))], 2), shouldShowTypingIndicator.value ? (openBlock(), createBlock(ChatTypingIndicator_default, {
				key: 0,
				class: normalizeClass(_ctx.$style.typingIndicator)
			}, null, 8, ["class"])) : (openBlock(), createBlock(ChatMessageActions_default, {
				key: 1,
				"is-speech-synthesis-available": unref(speech).isSupported.value,
				"is-speaking": unref(speech).isPlaying.value,
				class: normalizeClass(_ctx.$style.actions),
				message: __props.message,
				"has-session-streaming": __props.hasSessionStreaming,
				onEdit: handleEdit,
				onRegenerate: handleRegenerate,
				onReadAloud: handleReadAloud,
				onSwitchAlternative: handleSwitchAlternative
			}, null, 8, [
				"is-speech-synthesis-available",
				"is-speaking",
				"class",
				"message",
				"has-session-streaming"
			]))], 64))], 2)], 14, _hoisted_1$2)) : createCommentVNode("", true);
		};
	}
});
var ChatMessage_vue_vue_type_style_index_0_lang_module_default = {
	message: "_message_1ptod_125",
	markdownContent: "_markdownContent_1ptod_130",
	codeBlockActions: "_codeBlockActions_1ptod_142",
	avatar: "_avatar_1ptod_146",
	compact: "_compact_1ptod_159",
	content: "_content_1ptod_165",
	actions: "_actions_1ptod_171",
	attachments: "_attachments_1ptod_177",
	chatMessage: "_chatMessage_1ptod_182",
	editContainer: "_editContainer_1ptod_185",
	user: "_user_1ptod_201",
	errorMessage: "_errorMessage_1ptod_212",
	textarea: "_textarea_1ptod_244",
	fileInput: "_fileInput_1ptod_257",
	editFooter: "_editFooter_1ptod_261",
	editActions: "_editActions_1ptod_275",
	typingIndicator: "_typingIndicator_1ptod_281"
};
var ChatMessage_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ChatMessage_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatMessage_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/chatHub/components/ChatPromptCallouts.vue?vue&type=script&setup=true&lang.ts
var ChatPromptCallouts_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ChatPromptCallouts",
	props: {
		showMissingAgentCallout: { type: Boolean },
		showMissingCredentialsCallout: { type: Boolean },
		showDynamicCredentialsMissingCallout: { type: Boolean },
		showCreditsClaimedCallout: { type: Boolean },
		isNewSession: { type: Boolean },
		llmProvider: {},
		aiCreditsQuota: {},
		compact: { type: Boolean }
	},
	emits: [
		"selectModel",
		"setCredentials",
		"dismissCreditsCallout",
		"openDynamicCredentials"
	],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const i18n = useI18n();
		return (_ctx, _cache) => {
			return __props.showMissingAgentCallout ? (openBlock(), createBlock(unref(N8nCallout_default), {
				key: 0,
				icon: "info",
				theme: "secondary",
				class: normalizeClass([_ctx.$style.callout, { [_ctx.$style.calloutCompact]: __props.compact }])
			}, {
				default: withCtx(() => [createVNode(unref(I18nT), {
					keypath: __props.isNewSession ? "chatHub.chat.prompt.callout.selectModel.new" : "chatHub.chat.prompt.callout.selectModel.existing",
					tag: "span",
					scope: "global"
				}, {
					link: withCtx(() => [createBaseVNode("a", {
						href: "",
						onClick: _cache[0] || (_cache[0] = withModifiers(($event) => emit("selectModel"), ["prevent"]))
					}, toDisplayString(unref(i18n).baseText(__props.isNewSession ? "chatHub.chat.prompt.callout.selectModel.new.link" : "chatHub.chat.prompt.callout.selectModel.existing.link")), 1)]),
					_: 1
				}, 8, ["keypath"])]),
				_: 1
			}, 8, ["class"])) : __props.showMissingCredentialsCallout ? (openBlock(), createBlock(unref(N8nCallout_default), {
				key: 1,
				icon: "info",
				theme: "secondary",
				class: normalizeClass([_ctx.$style.callout, { [_ctx.$style.calloutCompact]: __props.compact }])
			}, {
				default: withCtx(() => [createVNode(unref(I18nT), {
					keypath: __props.isNewSession ? "chatHub.chat.prompt.callout.setCredentials.new" : "chatHub.chat.prompt.callout.setCredentials.existing",
					tag: "span",
					scope: "global"
				}, {
					link: withCtx(() => [createBaseVNode("a", {
						href: "",
						onClick: _cache[1] || (_cache[1] = withModifiers(($event) => emit("setCredentials", __props.llmProvider), ["prevent"]))
					}, toDisplayString(unref(i18n).baseText(__props.isNewSession ? "chatHub.chat.prompt.callout.setCredentials.new.link" : "chatHub.chat.prompt.callout.setCredentials.existing.link")), 1)]),
					provider: withCtx(() => [createTextVNode(toDisplayString(unref(providerDisplayNames)[__props.llmProvider]), 1)]),
					_: 1
				}, 8, ["keypath"])]),
				_: 1
			}, 8, ["class"])) : __props.showDynamicCredentialsMissingCallout ? (openBlock(), createBlock(unref(N8nCallout_default), {
				key: 2,
				theme: "warning",
				class: normalizeClass([_ctx.$style.callout, { [_ctx.$style.calloutCompact]: __props.compact }]),
				"data-testid": "dynamic-credentials-missing-callout"
			}, {
				trailingContent: withCtx(() => [createVNode(unref(N8nButton_default), {
					type: "warning",
					"native-type": "button",
					size: "small",
					"data-testid": "dynamic-credentials-connect-button",
					onClick: _cache[2] || (_cache[2] = ($event) => emit("openDynamicCredentials"))
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.chat.prompt.callout.dynamicCredentials.missing.button")), 1)]),
					_: 1
				})]),
				default: withCtx(() => [createVNode(unref(N8nText_default), null, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(__props.isNewSession ? "chatHub.chat.prompt.callout.dynamicCredentials.missing" : "chatHub.chat.prompt.callout.dynamicCredentials.expired")), 1)]),
					_: 1
				})]),
				_: 1
			}, 8, ["class"])) : __props.showCreditsClaimedCallout ? (openBlock(), createBlock(unref(N8nCallout_default), {
				key: 3,
				icon: "info",
				theme: "secondary",
				class: normalizeClass([_ctx.$style.callout, { [_ctx.$style.calloutCompact]: __props.compact }])
			}, {
				trailingContent: withCtx(() => [createVNode(unref(N8nIcon_default), {
					icon: "x",
					title: "Dismiss",
					size: "medium",
					type: "secondary",
					onClick: _cache[3] || (_cache[3] = ($event) => emit("dismissCreditsCallout"))
				})]),
				default: withCtx(() => [
					createVNode(unref(N8nText_default), null, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("freeAi.credits.callout.success.chatHub.beginning")), 1)]),
						_: 1
					}),
					createVNode(unref(N8nText_default), { bold: "" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("freeAi.credits.callout.success.chatHub.credits", { interpolate: { amount: __props.aiCreditsQuota } })), 1)]),
						_: 1
					}),
					createVNode(unref(N8nText_default), null, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("freeAi.credits.callout.success.chatHub.end")), 1)]),
						_: 1
					})
				]),
				_: 1
			}, 8, ["class"])) : createCommentVNode("", true);
		};
	}
});
var ChatPromptCallouts_vue_vue_type_style_index_0_lang_module_default = {
	callout: "_callout_50o58_125",
	calloutCompact: "_calloutCompact_50o58_131"
};
var ChatPromptCallouts_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ChatPromptCallouts_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatPromptCallouts_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/chatHub/components/ChatPromptCompact.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = ["accept"];
var ChatPromptCompact_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ChatPromptCompact",
	props: {
		message: {},
		attachments: {},
		placeholder: {},
		messagingState: {},
		acceptedMimeTypes: {},
		canUploadFiles: { type: Boolean },
		calloutVisible: { type: Boolean },
		isSpeechSupported: { type: Boolean },
		isListening: { type: Boolean }
	},
	emits: [
		"submit",
		"update:message",
		"keydown",
		"fileSelect",
		"attach",
		"mic",
		"stop",
		"removeAttachment"
	],
	setup(__props, { expose: __expose, emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const inputRef = useTemplateRef("inputRef");
		const fileInputRef = useTemplateRef("fileInputRef");
		function handleClickInputWrapper() {
			inputRef.value?.focus();
		}
		__expose({
			inputRef,
			fileInputRef
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("form", {
				class: normalizeClass(_ctx.$style.prompt),
				onSubmit: _cache[8] || (_cache[8] = withModifiers(($event) => emit("submit"), ["prevent"]))
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.inputWrap) }, [
				renderSlot(_ctx.$slots, "callouts"),
				createBaseVNode("input", {
					ref_key: "fileInputRef",
					ref: fileInputRef,
					type: "file",
					class: normalizeClass(_ctx.$style.fileInput),
					accept: __props.acceptedMimeTypes,
					multiple: "",
					onChange: _cache[0] || (_cache[0] = ($event) => emit("fileSelect", $event))
				}, null, 42, _hoisted_1$1),
				createBaseVNode("div", {
					class: normalizeClass([_ctx.$style.inputWrapper, { [_ctx.$style.calloutVisible]: __props.calloutVisible }]),
					onClick: handleClickInputWrapper
				}, [__props.attachments.length > 0 ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.compactAttachments)
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.attachments, (file, index) => {
					return openBlock(), createBlock(ChatFile_default, {
						key: index,
						file,
						"is-previewable": true,
						"is-removable": __props.messagingState === "idle",
						onRemove: _cache[1] || (_cache[1] = ($event) => emit("removeAttachment", $event))
					}, null, 8, ["file", "is-removable"]);
				}), 128))], 2)) : createCommentVNode("", true), createBaseVNode("div", { class: normalizeClass(_ctx.$style.compactRow) }, [createVNode(unref(Input_default), {
					ref_key: "inputRef",
					ref: inputRef,
					"model-value": props.message,
					type: "textarea",
					placeholder: __props.placeholder,
					autocomplete: "off",
					autosize: {
						minRows: 1,
						maxRows: 3
					},
					autofocus: "",
					disabled: __props.messagingState !== "idle",
					"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => emit("update:message", $event)),
					onKeydown: _cache[3] || (_cache[3] = ($event) => emit("keydown", $event))
				}, null, 8, [
					"model-value",
					"placeholder",
					"disabled"
				]), createBaseVNode("div", { class: normalizeClass(_ctx.$style.actions) }, [
					createVNode(unref(N8nTooltip_default), {
						content: !__props.canUploadFiles ? unref(i18n).baseText("chatHub.chat.prompt.button.attach.disabled") : unref(i18n).baseText("chatHub.chat.prompt.button.attach"),
						disabled: __props.canUploadFiles && __props.messagingState === "idle",
						placement: "top"
					}, {
						default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
							variant: "ghost",
							disabled: __props.messagingState !== "idle" || !__props.canUploadFiles,
							icon: "paperclip",
							"icon-size": "large",
							onClick: _cache[4] || (_cache[4] = withModifiers(($event) => emit("attach"), ["stop"]))
						}, null, 8, ["disabled"])]),
						_: 1
					}, 8, ["content", "disabled"]),
					__props.isSpeechSupported ? (openBlock(), createBlock(unref(N8nIconButton_default), {
						key: 0,
						variant: "ghost",
						title: __props.isListening ? unref(i18n).baseText("chatHub.chat.prompt.button.stopRecording") : unref(i18n).baseText("chatHub.chat.prompt.button.voiceInput"),
						disabled: __props.messagingState !== "idle",
						icon: __props.isListening ? "square" : "mic",
						class: normalizeClass({ [_ctx.$style.recording]: __props.isListening }),
						"icon-size": "large",
						onClick: _cache[5] || (_cache[5] = withModifiers(($event) => emit("mic"), ["stop"]))
					}, null, 8, [
						"title",
						"disabled",
						"icon",
						"class"
					])) : createCommentVNode("", true),
					__props.messagingState !== "receiving" ? (openBlock(), createBlock(unref(N8nIconButton_default), {
						key: 1,
						type: "submit",
						disabled: __props.messagingState !== "idle" || !__props.message.trim(),
						title: unref(i18n).baseText("chatHub.chat.prompt.button.send"),
						loading: __props.messagingState === "waitingFirstChunk",
						icon: "arrow-up",
						"icon-size": "large",
						onClick: _cache[6] || (_cache[6] = withModifiers(() => {}, ["stop"]))
					}, null, 8, [
						"disabled",
						"title",
						"loading"
					])) : (openBlock(), createBlock(unref(N8nIconButton_default), {
						key: 2,
						"native-type": "button",
						title: unref(i18n).baseText("chatHub.chat.prompt.button.stopGenerating"),
						icon: "square",
						"icon-size": "large",
						onClick: _cache[7] || (_cache[7] = withModifiers(($event) => emit("stop"), ["stop"]))
					}, null, 8, ["title"]))
				], 2)], 2)], 2)
			], 2)], 34);
		};
	}
});
var ChatPromptCompact_vue_vue_type_style_index_0_lang_module_default = {
	prompt: "_prompt_omdff_125",
	fileInput: "_fileInput_omdff_143",
	inputWrap: "_inputWrap_omdff_147",
	inputWrapper: "_inputWrapper_omdff_155",
	calloutVisible: "_calloutVisible_omdff_209",
	compactAttachments: "_compactAttachments_omdff_213",
	compactRow: "_compactRow_omdff_219",
	actions: "_actions_omdff_230",
	recording: "_recording_omdff_240",
	chatHubPromptRecordingPulse: "_chatHubPromptRecordingPulse_omdff_1"
};
var ChatPromptCompact_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ChatPromptCompact_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatPromptCompact_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/chatHub/components/ChatPromptFull.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["accept"];
var ChatPromptFull_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ChatPromptFull",
	props: {
		message: {},
		attachments: {},
		placeholder: {},
		messagingState: {},
		acceptedMimeTypes: {},
		canUploadFiles: { type: Boolean },
		calloutVisible: { type: Boolean },
		isSpeechSupported: { type: Boolean },
		isListening: { type: Boolean },
		checkedToolIds: {},
		customAgentId: {},
		isToolsSelectable: { type: Boolean },
		selectedModel: {}
	},
	emits: [
		"submit",
		"update:message",
		"keydown",
		"fileSelect",
		"attach",
		"mic",
		"stop",
		"removeAttachment",
		"toolToggle"
	],
	setup(__props, { expose: __expose, emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const inputRef = useTemplateRef("inputRef");
		const fileInputRef = useTemplateRef("fileInputRef");
		const attachmentsEl = useTemplateRef("attachmentsEl");
		const attachmentsElSize = useElementSize(attachmentsEl, void 0, { box: "border-box" });
		__expose({
			inputRef,
			fileInputRef
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("form", {
				class: normalizeClass([_ctx.$style.prompt, { [_ctx.$style.hasCallout]: __props.calloutVisible }]),
				style: normalizeStyle({ "--attachments-el--height": `${unref(attachmentsElSize).height.value}px` }),
				onSubmit: _cache[9] || (_cache[9] = withModifiers(($event) => emit("submit"), ["prevent"]))
			}, [
				createBaseVNode("input", {
					ref_key: "fileInputRef",
					ref: fileInputRef,
					type: "file",
					class: normalizeClass(_ctx.$style.fileInput),
					accept: __props.acceptedMimeTypes,
					multiple: "",
					onChange: _cache[0] || (_cache[0] = ($event) => emit("fileSelect", $event))
				}, null, 42, _hoisted_1),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [renderSlot(_ctx.$slots, "callouts"), __props.attachments.length > 0 ? (openBlock(), createElementBlock("div", {
					key: 0,
					ref_key: "attachmentsEl",
					ref: attachmentsEl,
					class: normalizeClass(_ctx.$style.attachments)
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.attachments, (file, index) => {
					return openBlock(), createBlock(ChatFile_default, {
						key: index,
						file,
						"is-previewable": true,
						"is-removable": __props.messagingState === "idle",
						onRemove: _cache[1] || (_cache[1] = ($event) => emit("removeAttachment", $event))
					}, null, 8, ["file", "is-removable"]);
				}), 128))], 2)) : createCommentVNode("", true)], 2),
				createVNode(unref(Input_default), {
					ref_key: "inputRef",
					ref: inputRef,
					"model-value": props.message,
					type: "textarea",
					placeholder: __props.placeholder,
					autocomplete: "off",
					autosize: {
						minRows: 1,
						maxRows: 6
					},
					autofocus: "",
					disabled: __props.messagingState !== "idle",
					"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => emit("update:message", $event)),
					onKeydown: _cache[3] || (_cache[3] = ($event) => emit("keydown", $event))
				}, null, 8, [
					"model-value",
					"placeholder",
					"disabled"
				]),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.footer) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.tools) }, [createVNode(ToolsSelector_default, {
					class: normalizeClass(_ctx.$style.toolsButton),
					"checked-tool-ids": __props.checkedToolIds,
					"custom-agent-id": __props.customAgentId,
					disabled: __props.messagingState !== "idle" || !__props.isToolsSelectable,
					"disabled-tooltip": __props.isToolsSelectable ? void 0 : __props.selectedModel ? unref(i18n).baseText("chatHub.tools.selector.disabled.tooltip") : unref(i18n).baseText("chatHub.tools.selector.disabled.noModel.tooltip"),
					onToggle: _cache[4] || (_cache[4] = ($event) => emit("toolToggle", $event))
				}, null, 8, [
					"class",
					"checked-tool-ids",
					"custom-agent-id",
					"disabled",
					"disabled-tooltip"
				])], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.actions) }, [
					createVNode(unref(N8nTooltip_default), {
						content: !__props.canUploadFiles ? unref(i18n).baseText("chatHub.chat.prompt.button.attach.disabled") : unref(i18n).baseText("chatHub.chat.prompt.button.attach"),
						disabled: __props.canUploadFiles && __props.messagingState === "idle",
						placement: "top"
					}, {
						default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
							variant: "ghost",
							disabled: __props.messagingState !== "idle" || !__props.canUploadFiles,
							icon: "paperclip",
							"icon-size": "large",
							onClick: _cache[5] || (_cache[5] = withModifiers(($event) => emit("attach"), ["stop"]))
						}, null, 8, ["disabled"])]),
						_: 1
					}, 8, ["content", "disabled"]),
					__props.isSpeechSupported ? (openBlock(), createBlock(unref(N8nIconButton_default), {
						key: 0,
						variant: "outline",
						title: __props.isListening ? unref(i18n).baseText("chatHub.chat.prompt.button.stopRecording") : unref(i18n).baseText("chatHub.chat.prompt.button.voiceInput"),
						disabled: __props.messagingState !== "idle",
						icon: __props.isListening ? "square" : "mic",
						class: normalizeClass({ [_ctx.$style.recording]: __props.isListening }),
						"icon-size": "large",
						onClick: _cache[6] || (_cache[6] = withModifiers(($event) => emit("mic"), ["stop"]))
					}, null, 8, [
						"title",
						"disabled",
						"icon",
						"class"
					])) : createCommentVNode("", true),
					__props.messagingState !== "receiving" ? (openBlock(), createBlock(unref(N8nIconButton_default), {
						key: 1,
						type: "submit",
						disabled: __props.messagingState !== "idle" || !__props.message.trim(),
						title: unref(i18n).baseText("chatHub.chat.prompt.button.send"),
						loading: __props.messagingState === "waitingFirstChunk",
						icon: "arrow-up",
						"icon-size": "large",
						onClick: _cache[7] || (_cache[7] = withModifiers(() => {}, ["stop"]))
					}, null, 8, [
						"disabled",
						"title",
						"loading"
					])) : (openBlock(), createBlock(unref(N8nIconButton_default), {
						key: 2,
						"native-type": "button",
						title: unref(i18n).baseText("chatHub.chat.prompt.button.stopGenerating"),
						icon: "square",
						"icon-size": "large",
						onClick: _cache[8] || (_cache[8] = withModifiers(($event) => emit("stop"), ["stop"]))
					}, null, 8, ["title"]))
				], 2)], 2)
			], 38);
		};
	}
});
var ChatPromptFull_vue_vue_type_style_index_0_lang_module_default = {
	prompt: "_prompt_2i08r_125",
	hasCallout: "_hasCallout_2i08r_148",
	fileInput: "_fileInput_2i08r_152",
	header: "_header_2i08r_156",
	footer: "_footer_2i08r_157",
	tools: "_tools_2i08r_184",
	toolsButton: "_toolsButton_2i08r_188",
	actions: "_actions_2i08r_193",
	attachments: "_attachments_2i08r_202",
	recording: "_recording_2i08r_210",
	chatHubPromptRecordingPulse: "_chatHubPromptRecordingPulse_2i08r_1"
};
var ChatPromptFull_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ChatPromptFull_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatPromptFull_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/chatHub/components/ChatPrompt.vue
var ChatPrompt_default = /* @__PURE__ */ defineComponent({
	__name: "ChatPrompt",
	props: {
		messagingState: {},
		isNewSession: { type: Boolean },
		isToolsSelectable: { type: Boolean },
		selectedModel: {},
		checkedToolIds: {},
		sessionId: {},
		customAgentId: {},
		showCreditsClaimedCallout: { type: Boolean },
		showDynamicCredentialsMissingCallout: { type: Boolean },
		aiCreditsQuota: {},
		compact: { type: Boolean },
		placeholder: {}
	},
	emits: [
		"submit",
		"stop",
		"selectModel",
		"setCredentials",
		"editAgent",
		"dismissCreditsCallout",
		"openDynamicCredentials"
	],
	setup(__props, { expose: __expose, emit: __emit }) {
		const props = __props;
		const chatStore = useChatStore();
		const emit = __emit;
		const activePromptRef = ref();
		const message = ref("");
		const committedSpokenMessage = ref("");
		const attachments = ref([]);
		const toast = useToast();
		const i18n = useI18n();
		const speechInput = useSpeechRecognition({
			continuous: true,
			interimResults: true,
			lang: navigator.language
		});
		const placeholder = computed(() => {
			if (props.placeholder) return props.placeholder;
			if (props.selectedModel) return i18n.baseText("chatHub.chat.prompt.placeholder.withModel", { interpolate: { model: props.selectedModel.name ?? "a model" } });
			return i18n.baseText("chatHub.chat.prompt.placeholder.selectModel");
		});
		const llmProvider = computed(() => isLlmProviderModel(props.selectedModel?.model) ? props.selectedModel?.model.provider : void 0);
		const acceptedMimeTypes = computed(() => enrichMimeTypesWithExtensions(props.selectedModel?.metadata.allowedFilesMimeTypes ?? ""));
		const canUploadFiles = computed(() => props.selectedModel?.metadata.allowFileUploads ?? false);
		const showMissingAgentCallout = computed(() => props.messagingState === "missingAgent");
		const showMissingCredentialsCallout = computed(() => props.messagingState === "missingCredentials" && !!llmProvider.value);
		const calloutVisible = computed(() => {
			return showMissingAgentCallout.value || showMissingCredentialsCallout.value || props.showDynamicCredentialsMissingCallout || props.showCreditsClaimedCallout;
		});
		function onMic() {
			committedSpokenMessage.value = message.value;
			if (speechInput.isListening.value) speechInput.stop();
			else speechInput.start();
		}
		function onStop() {
			emit("stop");
		}
		function onAttach() {
			activePromptRef.value?.fileInputRef?.click();
		}
		function handleFileSelect(e) {
			const target = e.target;
			const files = target.files;
			if (!files || files.length === 0) return;
			for (const file of Array.from(files)) attachments.value.push(file);
			if (target) target.value = "";
			activePromptRef.value?.inputRef?.focus();
		}
		function removeAttachment(removed) {
			attachments.value = attachments.value.filter((attachment) => attachment !== removed);
		}
		function handleSubmitForm() {
			const trimmed = message.value.trim();
			if (trimmed) {
				speechInput.stop();
				emit("submit", trimmed, attachments.value);
			}
		}
		function handleKeydownTextarea(e) {
			const trimmed = message.value.trim();
			speechInput.stop();
			if (e.key === "Enter" && !e.shiftKey && !e.isComposing && trimmed) {
				e.preventDefault();
				e.stopPropagation();
				speechInput.stop();
				emit("submit", trimmed, attachments.value);
			}
		}
		watch(speechInput.result, (spoken) => {
			message.value = committedSpokenMessage.value + " " + spoken.trimStart();
		});
		watch(speechInput.isFinal, (final) => {
			if (final) committedSpokenMessage.value = message.value;
		}, { flush: "post" });
		watch(speechInput.error, (event) => {
			if (event?.error === "not-allowed") {
				toast.showError(new Error(i18n.baseText("chatHub.chat.prompt.microphone.accessDenied")), i18n.baseText("chatHub.chat.prompt.microphone.allowAccess"));
				return;
			}
			if (event?.error === "no-speech") toast.showMessage({
				title: i18n.baseText("chatHub.chat.prompt.microphone.noSpeech"),
				type: "warning"
			});
		});
		async function handleToolToggle(toolId) {
			if (props.customAgentId) {
				await chatStore.toggleCustomAgentTool(props.customAgentId, toolId);
				return;
			}
			if (props.sessionId) {
				await chatStore.toggleSessionTool(props.sessionId, toolId);
				return;
			}
			const tool = chatStore.configuredTools.find((t) => t.definition.id === toolId);
			if (tool) await chatStore.toggleToolEnabled(toolId, !tool.enabled);
		}
		__expose({
			focus: () => activePromptRef.value?.inputRef?.focus(),
			reset: () => {
				message.value = "";
				committedSpokenMessage.value = "";
				attachments.value = [];
			},
			setText: (text) => {
				message.value = text;
			},
			appendText: (text) => {
				message.value += text;
			},
			addAttachments: (files) => {
				attachments.value.push(...files);
				activePromptRef.value?.inputRef?.focus();
			}
		});
		return (_ctx, _cache) => {
			return __props.compact ? (openBlock(), createBlock(ChatPromptCompact_default, {
				key: 0,
				ref_key: "activePromptRef",
				ref: activePromptRef,
				message: message.value,
				"onUpdate:message": _cache[4] || (_cache[4] = ($event) => message.value = $event),
				attachments: attachments.value,
				placeholder: placeholder.value,
				"messaging-state": __props.messagingState,
				"accepted-mime-types": acceptedMimeTypes.value,
				"can-upload-files": canUploadFiles.value,
				"callout-visible": calloutVisible.value,
				"is-speech-supported": unref(speechInput).isSupported.value,
				"is-listening": unref(speechInput).isListening.value,
				onSubmit: handleSubmitForm,
				onKeydown: handleKeydownTextarea,
				onFileSelect: handleFileSelect,
				onAttach,
				onMic,
				onStop,
				onRemoveAttachment: removeAttachment
			}, {
				callouts: withCtx(() => [createVNode(ChatPromptCallouts_default, {
					"show-missing-agent-callout": showMissingAgentCallout.value,
					"show-missing-credentials-callout": showMissingCredentialsCallout.value,
					"show-dynamic-credentials-missing-callout": __props.showDynamicCredentialsMissingCallout,
					"show-credits-claimed-callout": __props.showCreditsClaimedCallout,
					"is-new-session": __props.isNewSession,
					"llm-provider": llmProvider.value,
					"ai-credits-quota": __props.aiCreditsQuota,
					compact: "",
					onSelectModel: _cache[0] || (_cache[0] = ($event) => emit("selectModel")),
					onSetCredentials: _cache[1] || (_cache[1] = ($event) => emit("setCredentials", $event)),
					onDismissCreditsCallout: _cache[2] || (_cache[2] = ($event) => emit("dismissCreditsCallout")),
					onOpenDynamicCredentials: _cache[3] || (_cache[3] = ($event) => emit("openDynamicCredentials"))
				}, null, 8, [
					"show-missing-agent-callout",
					"show-missing-credentials-callout",
					"show-dynamic-credentials-missing-callout",
					"show-credits-claimed-callout",
					"is-new-session",
					"llm-provider",
					"ai-credits-quota"
				])]),
				_: 1
			}, 8, [
				"message",
				"attachments",
				"placeholder",
				"messaging-state",
				"accepted-mime-types",
				"can-upload-files",
				"callout-visible",
				"is-speech-supported",
				"is-listening"
			])) : (openBlock(), createBlock(ChatPromptFull_default, {
				key: 1,
				ref_key: "activePromptRef",
				ref: activePromptRef,
				message: message.value,
				"onUpdate:message": _cache[9] || (_cache[9] = ($event) => message.value = $event),
				attachments: attachments.value,
				placeholder: placeholder.value,
				"messaging-state": __props.messagingState,
				"accepted-mime-types": acceptedMimeTypes.value,
				"can-upload-files": canUploadFiles.value,
				"callout-visible": calloutVisible.value,
				"is-speech-supported": unref(speechInput).isSupported.value,
				"is-listening": unref(speechInput).isListening.value,
				"checked-tool-ids": __props.checkedToolIds,
				"custom-agent-id": __props.customAgentId,
				"is-tools-selectable": __props.isToolsSelectable,
				"selected-model": __props.selectedModel,
				onSubmit: handleSubmitForm,
				onKeydown: handleKeydownTextarea,
				onFileSelect: handleFileSelect,
				onAttach,
				onMic,
				onStop,
				onRemoveAttachment: removeAttachment,
				onToolToggle: handleToolToggle
			}, {
				callouts: withCtx(() => [createVNode(ChatPromptCallouts_default, {
					"show-missing-agent-callout": showMissingAgentCallout.value,
					"show-missing-credentials-callout": showMissingCredentialsCallout.value,
					"show-dynamic-credentials-missing-callout": __props.showDynamicCredentialsMissingCallout,
					"show-credits-claimed-callout": __props.showCreditsClaimedCallout,
					"is-new-session": __props.isNewSession,
					"llm-provider": llmProvider.value,
					"ai-credits-quota": __props.aiCreditsQuota,
					onSelectModel: _cache[5] || (_cache[5] = ($event) => emit("selectModel")),
					onSetCredentials: _cache[6] || (_cache[6] = ($event) => emit("setCredentials", $event)),
					onDismissCreditsCallout: _cache[7] || (_cache[7] = ($event) => emit("dismissCreditsCallout")),
					onOpenDynamicCredentials: _cache[8] || (_cache[8] = ($event) => emit("openDynamicCredentials"))
				}, null, 8, [
					"show-missing-agent-callout",
					"show-missing-credentials-callout",
					"show-dynamic-credentials-missing-callout",
					"show-credits-claimed-callout",
					"is-new-session",
					"llm-provider",
					"ai-credits-quota"
				])]),
				_: 1
			}, 8, [
				"message",
				"attachments",
				"placeholder",
				"messaging-state",
				"accepted-mime-types",
				"can-upload-files",
				"callout-visible",
				"is-speech-supported",
				"is-listening",
				"checked-tool-ids",
				"custom-agent-id",
				"is-tools-selectable",
				"selected-model"
			]));
		};
	}
});
//#endregion
//#region src/features/ai/chatHub/components/ChatSuggestedPrompts.vue?vue&type=script&setup=true&lang.ts
var DEFAULT_PROMPT_ICON = "message-circle";
var ChatSuggestedPrompts_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ChatSuggestedPrompts",
	props: { prompts: {} },
	emits: ["select"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		function getIconName(icon) {
			if (icon?.type === "emoji") return void 0;
			return icon?.value ?? DEFAULT_PROMPT_ICON;
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.prompts, (prompt) => {
				return openBlock(), createBlock(unref(N8nButton_default), {
					key: prompt.text,
					variant: "outline",
					size: "small",
					icon: getIconName(prompt.icon),
					"icon-size": "large",
					class: normalizeClass(_ctx.$style.chip),
					onClick: ($event) => emit("select", prompt.text)
				}, createSlots({
					default: withCtx(() => [createTextVNode(" " + toDisplayString(prompt.text), 1)]),
					_: 2
				}, [prompt.icon?.type === "emoji" ? {
					name: "icon",
					fn: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.emoji) }, toDisplayString(prompt.icon.value), 3)]),
					key: "0"
				} : void 0]), 1032, [
					"icon",
					"class",
					"onClick"
				]);
			}), 128))], 2);
		};
	}
});
var ChatSuggestedPrompts_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_140do_125",
	chip: "_chip_140do_132",
	emoji: "_emoji_140do_139"
};
var ChatSuggestedPrompts_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ChatSuggestedPrompts_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatSuggestedPrompts_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/chatHub/components/ChatGreetings.vue?vue&type=script&setup=true&lang.ts
var ChatGreetings_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ChatGreetings",
	props: {
		selectedAgent: {},
		loading: { type: Boolean }
	},
	emits: ["select-prompt"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const isAgentModel = computed(() => props.selectedAgent && !isLlmProviderModel(props.selectedAgent.model));
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				key: "greetings",
				class: normalizeClass(_ctx.$style.greetings)
			}, [isAgentModel.value && __props.selectedAgent ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.agentCard)
			}, [__props.loading ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createVNode(unref(N8nLoading_default), { variant: "circle" }), createVNode(unref(N8nLoading_default), {
				rows: 1,
				variant: "p",
				class: normalizeClass(_ctx.$style.skeletonName)
			}, null, 8, ["class"])], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createVNode(ChatAgentAvatar_default, {
				agent: __props.selectedAgent,
				size: "xl"
			}, null, 8, ["agent"]), createVNode(unref(N8nHeading_default), {
				tag: "h2",
				size: "xlarge",
				class: normalizeClass(_ctx.$style.agentName)
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(truncate)(__props.selectedAgent.name, 40)), 1)]),
				_: 1
			}, 8, ["class"])], 64)), __props.loading ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [createVNode(unref(N8nLoading_default), {
				rows: 3,
				variant: "p",
				"shrink-last": false,
				class: normalizeClass(_ctx.$style.skeletonDescription)
			}, null, 8, ["class"]), createBaseVNode("div", { class: normalizeClass([_ctx.$style.suggestions, _ctx.$style.skeletonPrompts]) }, [createVNode(unref(N8nLoading_default), {
				rows: 1,
				variant: "p",
				class: normalizeClass(_ctx.$style.skeletonChip)
			}, null, 8, ["class"]), createVNode(unref(N8nLoading_default), {
				rows: 1,
				variant: "p",
				class: normalizeClass(_ctx.$style.skeletonChip)
			}, null, 8, ["class"])], 2)], 64)) : (openBlock(), createElementBlock(Fragment, { key: 3 }, [__props.selectedAgent.description ? (openBlock(), createElementBlock("p", {
				key: 0,
				class: normalizeClass(_ctx.$style.agentDescription)
			}, toDisplayString(__props.selectedAgent.description), 3)) : createCommentVNode("", true), __props.selectedAgent.suggestedPrompts?.length ? (openBlock(), createBlock(ChatSuggestedPrompts_default, {
				key: 1,
				class: normalizeClass(_ctx.$style.suggestions),
				prompts: __props.selectedAgent.suggestedPrompts,
				onSelect: _cache[0] || (_cache[0] = ($event) => emit("select-prompt", $event))
			}, null, 8, ["class", "prompts"])) : createCommentVNode("", true)], 64))], 2)) : (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.header)
			}, [__props.selectedAgent ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
				createVNode(unref(N8nHeading_default), { tag: "h2" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.chat.greeting")), 1)]),
					_: 1
				}),
				createVNode(ChatAgentAvatar_default, {
					agent: __props.selectedAgent,
					size: "md",
					class: normalizeClass(_ctx.$style.inlineIcon)
				}, null, 8, ["agent", "class"]),
				createVNode(unref(N8nHeading_default), { bold: "" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(truncate)(__props.selectedAgent.name, 40)), 1)]),
					_: 1
				})
			], 64)) : (openBlock(), createBlock(unref(N8nHeading_default), {
				key: 1,
				tag: "h2"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.chat.greeting.fallback")), 1)]),
				_: 1
			}))], 2))], 2);
		};
	}
});
var ChatGreetings_vue_vue_type_style_index_0_lang_module_default = {
	greetings: "_greetings_17frw_125",
	agentCard: "_agentCard_17frw_132",
	agentName: "_agentName_17frw_140",
	agentDescription: "_agentDescription_17frw_148",
	suggestions: "_suggestions_17frw_158",
	skeletonName: "_skeletonName_17frw_162",
	skeletonDescription: "_skeletonDescription_17frw_167",
	skeletonPrompts: "_skeletonPrompts_17frw_172",
	skeletonChip: "_skeletonChip_17frw_178",
	header: "_header_17frw_182",
	inlineIcon: "_inlineIcon_17frw_188"
};
var ChatGreetings_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ChatGreetings_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatGreetings_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { useChatSession as i, ChatPrompt_default as n, ChatMessage_default as r, ChatGreetings_default as t };
