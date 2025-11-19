import { o as __toESM } from "./chunk-6z4oVpB-.js";
import { C as computed, D as createElementBlock, E as createCommentVNode, G as nextTick, Gt as unref, Ht as toRefs, I as guardReactiveProps, It as ref, J as onBeforeUnmount, M as createVNode, Nt as onScopeDispose, P as defineComponent, Q as onUnmounted, Sn as toDisplayString, T as createBlock, Vt as toRef, W as mergeProps, Z as onMounted, _ as Fragment, _n as normalizeClass, _t as watch, at as renderSlot, bt as withCtx, ct as resolveDynamicComponent, et as openBlock, f as vModelText, h as withModifiers, it as renderList, j as createTextVNode, jt as isRef, k as createSlots, m as withKeys, mt as useTemplateRef, nt as provide, st as resolveDirective, ut as useAttrs, vn as normalizeProps, w as createBaseVNode, xt as withDirectives, yn as normalizeStyle, z as inject, zt as shallowRef } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { _t as I18nT, b as useActiveElement, gt as useI18n, j as useLocalStorage, k as useFileDialog, z as useTimestamp } from "./_MapCache-pT3vKw8Z.js";
import { In as N8nText_default, Ln as N8nButton_default, Ot as useProvideTooltipAppendTo, Tt as N8nIconButton_default, mt as N8nLink_default, tt as N8nActionDropdown_default, vt as N8nTooltip_default, x as N8nRadioButtons_default, y as N8nResizeWrapper_default, yt as require_markdown_it_link_attributes, zn as N8nIcon_default } from "./src-BmrdBtCN.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { b as useRouter, y as useRoute } from "./truncate-1c7Iwk7N.js";
import { t as useMessage } from "./useMessage-HzD9OyTZ.js";
import { Dn as useSourceControlStore, G as isChatNode, Io as v4_default, Ni as useUIStore, Qs as useRootStore, Rt as require_upperFirst, Sn as injectWorkflowState, Tn as useDocumentTitle, Un as useCanvasStore, a as useNDVStore, nt as waitingNodeTooltip, o as useWorkflowsStore, rt as useNodeTypesStore, t as useTelemetry, xn as useNodeHelpers } from "./useTelemetry-C2EhNQhN.js";
import { a as getScrollbarWidth, t as useToast } from "./useToast-C8xM63lB.js";
import { No as MODAL_CONFIRM, Ts as PopOutWindowKey, bn as START_NODE_TYPE, mo as VIEWS, s as PLACEHOLDER_EMPTY_WORKFLOW_ID } from "./constants-C_oOJnqT.js";
import { n as ndvEventBus } from "./assistant.store-CKoUz8Lx.js";
import { t as useRunWorkflow } from "./useRunWorkflow-CekP-uxB.js";
import { t as usePinnedData } from "./usePinnedData-CxyLm90h.js";
import { t as useClipboard } from "./useClipboard-CDW2KXIc.js";
import { a as useLogsStore, c as LOCAL_STORAGE_PANEL_WIDTH, d as chatEventBus, i as useExperimentalNdvStore, l as LOGS_PANEL_STATE, o as LOCAL_STORAGE_OVERVIEW_PANEL_WIDTH, r as canvasEventBus, s as LOCAL_STORAGE_PANEL_HEIGHT, t as useCanvasOperations, u as LOG_DETAILS_PANEL_STATE } from "./useCanvasOperations-CA0dp-vn.js";
import { t as NodeIcon_default } from "./NodeIcon-B-yC7jws.js";
import { t as KeyboardShortcutTooltip_default } from "./KeyboardShortcutTooltip-DOaNiBZG.js";
import { n as RunData_default, r as RunDataItemCount_default } from "./isEmpty-DEJCEdjU.js";
import { t as NDVEmptyState_default } from "./NDVEmptyState-Dh9X5Hnf.js";
import { t as useKeybindings } from "./useKeybindings-DdITEiRN.js";
import { t as VueMarkdown_default } from "./VueMarkdown-CURYkyJE.js";
import { a as bash, i as javascript, n as typescript, r as python, t as xml } from "./xml-B_gYdkaU.js";
import { _ as isPlaceholderLog, a as LogsViewConsumedTokenCountText_default, b as restoreChatHistory, f as getDepth, g as getTotalConsumedTokens, h as getSubtreeTotalConsumedTokens, i as LogsViewNodeName_default, l as findLogEntryRec, m as getInputKey, n as useLogsExecutionData, p as getEntryAtRelativeIndex, r as LogsOverviewRows_default, s as extractBotResponse, t as useLogsTreeExpand, u as findSelectedLogEntry, v as isSubNodeLog, y as processFiles } from "./useLogsTreeExpand-Cngh87Y5.js";
import { t as core_default } from "./core-CH2Kku_3.js";
function constructChatWebsocketUrl(url, executionId, sessionId$1, isPublic) {
	const baseUrl = new URL(url).origin;
	const wsProtocol = baseUrl.startsWith("https") ? "wss" : "ws";
	return `${baseUrl.replace(/^https?/, wsProtocol)}/chat?sessionId=${sessionId$1}&executionId=${executionId}${isPublic ? "&isPublic=true" : ""}`;
}
function useChatMessaging({ chatTrigger, sessionId: sessionId$1, executionResultData, onRunChatWorkflow, ws, onNewMessage }) {
	const locale = useI18n();
	const { showError } = useToast();
	const previousMessageIndex = ref(0);
	const isLoading = ref(false);
	const setLoadingState = (loading) => {
		isLoading.value = loading;
	};
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
	async function getKeyedFiles(files) {
		const binaryData = {};
		await Promise.all(files.map(async (file, index) => {
			const data = await convertFileToBinaryData(file);
			const key = `data${index}`;
			binaryData[key] = data;
		}));
		return binaryData;
	}
	function extractFileMeta(file) {
		return {
			fileName: file.name,
			fileSize: `${file.size} bytes`,
			fileExtension: file.name.split(".").pop() ?? "",
			fileType: file.type.split("/")[0],
			mimeType: file.type
		};
	}
	async function startWorkflowWithMessage(message, files) {
		const triggerNode = chatTrigger.value;
		if (!triggerNode) {
			showError(/* @__PURE__ */ new Error("Chat Trigger Node could not be found!"), "Trigger Node not found");
			return;
		}
		const inputPayload = { json: {
			sessionId: sessionId$1,
			action: "sendMessage",
			[getInputKey(triggerNode)]: message
		} };
		if (files && files.length > 0) {
			const filesMeta = files.map((file) => extractFileMeta(file));
			const binaryData = await getKeyedFiles(files);
			inputPayload.json.files = filesMeta;
			inputPayload.binary = binaryData;
		}
		const nodeData = {
			startTime: Date.now(),
			executionTime: 0,
			executionIndex: 0,
			executionStatus: "success",
			data: { main: [[inputPayload]] },
			source: [null]
		};
		isLoading.value = true;
		const response = await onRunChatWorkflow({
			triggerNode: triggerNode.name,
			nodeData,
			source: "RunData.ManualChatMessage",
			message
		});
		isLoading.value = false;
		ws.value = null;
		if (!response?.executionId) return;
		if (triggerNode.parameters.options?.responseMode === "responseNodes") return;
		const chatMessage = executionResultData.value ? extractBotResponse(executionResultData.value, response.executionId, locale.baseText("chat.window.chat.response.empty")) : void 0;
		if (chatMessage !== void 0) onNewMessage(chatMessage);
	}
	async function sendMessage(message, files) {
		previousMessageIndex.value = 0;
		if (message.trim() === "" && (!files || files.length === 0)) {
			showError(new Error(locale.baseText("chat.window.chat.provideMessage")), locale.baseText("chat.window.chat.emptyChatMessage"));
			return;
		}
		const pinnedChatData = usePinnedData(chatTrigger.value);
		if (pinnedChatData.hasData.value) {
			if (!(await useMessage().confirm(locale.baseText("chat.window.chat.unpinAndExecute.description"), locale.baseText("chat.window.chat.unpinAndExecute.title"), {
				confirmButtonText: locale.baseText("chat.window.chat.unpinAndExecute.confirm"),
				cancelButtonText: locale.baseText("chat.window.chat.unpinAndExecute.cancel")
			}) === "confirm")) return;
			pinnedChatData.unsetData("unpin-and-send-chat-message-modal");
		}
		const newMessage = {
			text: message,
			sender: "user",
			sessionId: sessionId$1,
			id: v4_default(),
			files
		};
		onNewMessage(newMessage);
		if (ws.value?.readyState === WebSocket.OPEN && !isLoading.value) {
			ws.value.send(JSON.stringify({
				sessionId: sessionId$1,
				action: "sendMessage",
				chatInput: message,
				files: await processFiles(files)
			}));
			isLoading.value = true;
		} else await startWorkflowWithMessage(newMessage.text, files);
	}
	return {
		previousMessageIndex,
		isLoading: computed(() => isLoading.value),
		setLoadingState,
		sendMessage
	};
}
const ChatSymbol = "Chat";
const ChatOptionsSymbol = "ChatOptions";
var ChatSymbol$1 = "Chat";
function useChatState(isReadOnly) {
	const locale = useI18n();
	const workflowsStore = useWorkflowsStore();
	const workflowState = injectWorkflowState();
	const rootStore = useRootStore();
	const logsStore = useLogsStore();
	const router = useRouter();
	const nodeHelpers = useNodeHelpers();
	const { runWorkflow } = useRunWorkflow({ router });
	const ws = ref(null);
	const messages$1 = computed(() => logsStore.chatSessionMessages);
	const currentSessionId = computed(() => logsStore.chatSessionId);
	const previousChatMessages = computed(() => workflowsStore.getPastChatMessages);
	const chatTriggerNode = computed(() => workflowsStore.allNodes.find(isChatNode) ?? null);
	const allowFileUploads = computed(() => (chatTriggerNode.value?.parameters?.options)?.allowFileUploads === true);
	const allowedFilesMimeTypes = computed(() => (chatTriggerNode.value?.parameters?.options)?.allowedFilesMimeTypes?.toString() ?? "");
	const respondNodesResponseMode = computed(() => (chatTriggerNode.value?.parameters?.options)?.responseMode === "responseNodes");
	const { sendMessage, isLoading, setLoadingState } = useChatMessaging({
		chatTrigger: chatTriggerNode,
		sessionId: currentSessionId.value,
		executionResultData: computed(() => workflowsStore.getWorkflowExecution?.data?.resultData),
		onRunChatWorkflow,
		onNewMessage: logsStore.addChatMessage,
		ws
	});
	function createChatConfig(params) {
		return {
			chatConfig: {
				messages: params.messages,
				sendMessage: params.sendMessage,
				initialMessages: ref([]),
				currentSessionId: params.currentSessionId,
				waitingForResponse: params.isLoading
			},
			chatOptions: {
				i18n: { en: {
					title: "",
					footer: "",
					subtitle: "",
					inputPlaceholder: params.locale.baseText("chat.window.chat.placeholder"),
					getStarted: "",
					closeButtonTooltip: ""
				} },
				webhookUrl: "",
				mode: "window",
				showWindowCloseButton: true,
				disabled: params.isDisabled,
				allowFileUploads: params.allowFileUploads,
				allowedFilesMimeTypes
			}
		};
	}
	const { chatConfig, chatOptions } = createChatConfig({
		messages: messages$1,
		sendMessage,
		currentSessionId,
		isLoading,
		isDisabled: computed(() => isReadOnly),
		allowFileUploads,
		locale
	});
	const restoredChatMessages = computed(() => restoreChatHistory(workflowsStore.workflowExecutionData, locale.baseText("chat.window.chat.response.empty")));
	provide(ChatSymbol$1, chatConfig);
	provide(ChatOptionsSymbol, chatOptions);
	async function createExecutionPromise() {
		return await new Promise((resolve) => {
			const resolveIfFinished = (isRunning) => {
				if (!isRunning) {
					unwatch();
					resolve();
				}
			};
			const unwatch = watch(() => workflowsStore.isWorkflowRunning, resolveIfFinished);
			resolveIfFinished(workflowsStore.isWorkflowRunning);
		});
	}
	async function onRunChatWorkflow(payload) {
		const runWorkflowOptions = {
			triggerNode: payload.triggerNode,
			nodeData: payload.nodeData,
			source: payload.source
		};
		if (workflowsStore.chatPartialExecutionDestinationNode) {
			runWorkflowOptions.destinationNode = workflowsStore.chatPartialExecutionDestinationNode;
			workflowsStore.chatPartialExecutionDestinationNode = null;
		}
		const response = await runWorkflow(runWorkflowOptions);
		if (response) {
			if (respondNodesResponseMode.value) {
				const wsUrl = constructChatWebsocketUrl(rootStore.urlBaseEditor, response.executionId, currentSessionId.value, false);
				ws.value = new WebSocket(wsUrl);
				ws.value.onmessage = (event) => {
					if (event.data === "n8n|heartbeat") {
						ws.value?.send("n8n|heartbeat-ack");
						return;
					}
					if (event.data === "n8n|continue") {
						setLoadingState(true);
						return;
					}
					setLoadingState(false);
					const newMessage = {
						text: event.data,
						sender: "bot",
						sessionId: currentSessionId.value,
						id: v4_default()
					};
					logsStore.addChatMessage(newMessage);
					if (logsStore.isOpen) chatEventBus.emit("focusInput");
				};
				ws.value.onclose = () => {
					setLoadingState(false);
					ws.value = null;
				};
			}
			await createExecutionPromise();
			workflowsStore.appendChatMessage(payload.message);
			return response;
		}
	}
	function refreshSession() {
		workflowState.setWorkflowExecutionData(null);
		nodeHelpers.updateNodesExecutionIssues();
		logsStore.resetChatSessionId();
		logsStore.resetMessages();
		if (logsStore.isOpen) chatEventBus.emit("focusInput");
	}
	function displayExecution(executionId) {
		const route = router.resolve({
			name: VIEWS.EXECUTION_PREVIEW,
			params: {
				name: workflowsStore.workflowId,
				executionId
			}
		});
		window.open(route.href, "_blank");
	}
	watch(() => workflowsStore.workflowId, (_newWorkflowId, prevWorkflowId) => {
		if (prevWorkflowId === "__EMPTY__") return;
		refreshSession();
	});
	return {
		currentSessionId: computed(() => logsStore.chatSessionId),
		messages: computed(() => isReadOnly ? restoredChatMessages.value : logsStore.chatSessionMessages),
		previousChatMessages,
		sendMessage,
		refreshSession,
		displayExecution
	};
}
var LogsPanelHeader_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "LogsPanelHeader",
	props: {
		title: {},
		isClickable: { type: Boolean }
	},
	emits: ["click"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		function handleClick() {
			if (__props.isClickable) emit("click");
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("header", {
				class: normalizeClass([_ctx.$style.container, { [_ctx.$style.clickable]: _ctx.isClickable }]),
				onClick: handleClick
			}, [createVNode(unref(N8nText_default), {
				class: normalizeClass(_ctx.$style.title),
				bold: true,
				size: "small"
			}, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "title", {}, () => [createTextVNode(toDisplayString(_ctx.title), 1)])]),
				_: 3
			}, 8, ["class"]), createBaseVNode("div", { class: normalizeClass(_ctx.$style.actions) }, [renderSlot(_ctx.$slots, "actions")], 2)], 2);
		};
	}
});
var LogsPanelHeader_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_1y331_123",
	clickable: "_clickable_1y331_135",
	title: "_title_1y331_143",
	actions: "_actions_1y331_151"
};
var LogsPanelHeader_default = /* @__PURE__ */ __plugin_vue_export_helper_default(LogsPanelHeader_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": LogsPanelHeader_vue_vue_type_style_index_0_lang_module_default }]]);
var import_upperFirst = /* @__PURE__ */ __toESM(require_upperFirst());
var LogsViewExecutionSummary_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "LogsViewExecutionSummary",
	props: {
		status: {},
		consumedTokens: {},
		startTime: {},
		timeTook: {}
	},
	setup(__props) {
		const locale = useI18n();
		const now = useTimestamp({ interval: 1e3 });
		const executionStatusText = computed(() => __props.status === "running" || __props.status === "waiting" ? locale.baseText("logs.overview.body.summaryText.for", { interpolate: {
			status: (0, import_upperFirst.default)(__props.status),
			time: locale.displayTimer(Math.floor((now.value - __props.startTime) / 1e3) * 1e3, true)
		} }) : __props.timeTook === void 0 ? (0, import_upperFirst.default)(__props.status) : locale.baseText("logs.overview.body.summaryText.in", { interpolate: {
			status: (0, import_upperFirst.default)(__props.status),
			time: locale.displayTimer(__props.timeTook, true)
		} }));
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nText_default), {
				tag: "div",
				color: "text-light",
				size: "small",
				class: normalizeClass(_ctx.$style.container)
			}, {
				default: withCtx(() => [createBaseVNode("span", null, toDisplayString(executionStatusText.value), 1), _ctx.consumedTokens.totalTokens > 0 ? (openBlock(), createBlock(LogsViewConsumedTokenCountText_default, {
					key: 0,
					"consumed-tokens": _ctx.consumedTokens
				}, null, 8, ["consumed-tokens"])) : createCommentVNode("", true)]),
				_: 1
			}, 8, ["class"]);
		};
	}
});
var LogsViewExecutionSummary_vue_vue_type_style_index_0_lang_module_default = { container: "_container_1sayb_123" };
var LogsViewExecutionSummary_default = /* @__PURE__ */ __plugin_vue_export_helper_default(LogsViewExecutionSummary_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": LogsViewExecutionSummary_vue_vue_type_style_index_0_lang_module_default }]]);
function useClearExecutionButtonVisible() {
	const route = useRoute();
	const sourceControlStore = useSourceControlStore();
	const workflowsStore = useWorkflowsStore();
	const workflowExecutionData = computed(() => workflowsStore.workflowExecutionData);
	const isWorkflowRunning = computed(() => workflowsStore.isWorkflowRunning);
	const isReadOnlyRoute = computed(() => !!route?.meta?.readOnlyCanvas);
	const { editableWorkflow } = useCanvasOperations();
	const nodeTypesStore = useNodeTypesStore();
	const isReadOnlyEnvironment = computed(() => sourceControlStore.preferences.branchReadOnly);
	const allTriggerNodesDisabled = computed(() => editableWorkflow.value.nodes.filter((node) => node.type === "n8n-nodes-base.start" || nodeTypesStore.isTriggerNode(node.type)).every((node) => node.disabled));
	return computed(() => !isReadOnlyRoute.value && !isReadOnlyEnvironment.value && !isWorkflowRunning.value && !allTriggerNodesDisabled.value && !!workflowExecutionData.value);
}
var LogsOverviewPanel_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "LogsOverviewPanel",
	props: {
		isOpen: { type: Boolean },
		selected: {},
		isReadOnly: { type: Boolean },
		isCompact: { type: Boolean },
		execution: {},
		entries: {},
		flatLogEntries: {},
		latestNodeInfo: {},
		isHeaderClickable: { type: Boolean }
	},
	emits: [
		"clickHeader",
		"select",
		"clearExecutionData",
		"openNdv",
		"toggleExpanded"
	],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const locale = useI18n();
		const isClearExecutionButtonVisible = useClearExecutionButtonVisible();
		const isEmpty = computed(() => __props.flatLogEntries.length === 0 || __props.execution === void 0);
		const switchViewOptions = computed(() => [{
			label: locale.baseText("logs.overview.header.switch.overview"),
			value: "overview"
		}, {
			label: locale.baseText("logs.overview.header.switch.details"),
			value: "details"
		}]);
		const hasStaticScrollbar = getScrollbarWidth() > 0;
		const consumedTokens = computed(() => getTotalConsumedTokens(...__props.entries.map((entry) => getSubtreeTotalConsumedTokens(entry, false))));
		const timeTook = computed(() => __props.execution?.startedAt && __props.execution.stoppedAt ? +new Date(__props.execution.stoppedAt) - +new Date(__props.execution.startedAt) : void 0);
		const shouldShowTokenCountColumn = computed(() => consumedTokens.value.totalTokens > 0 || __props.entries.some((entry) => getSubtreeTotalConsumedTokens(entry, true).totalTokens > 0));
		function handleSwitchView(value) {
			emit("select", value === "overview" ? void 0 : __props.flatLogEntries[0]);
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass([_ctx.$style.container, hasStaticScrollbar ? _ctx.$style.staticScrollBar : ""]),
				"data-test-id": "logs-overview"
			}, [createVNode(LogsPanelHeader_default, {
				title: unref(locale).baseText("logs.overview.header.title"),
				"data-test-id": "logs-overview-header",
				"is-clickable": _ctx.isHeaderClickable,
				onClick: _cache[1] || (_cache[1] = ($event) => emit("clickHeader"))
			}, {
				actions: withCtx(() => [unref(isClearExecutionButtonVisible) ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 0,
					content: unref(locale).baseText("logs.overview.header.actions.clearExecution.tooltip")
				}, {
					default: withCtx(() => [createVNode(unref(N8nButton_default), {
						size: "mini",
						type: "secondary",
						icon: "trash-2",
						"icon-size": "medium",
						"data-test-id": "clear-execution-data-button",
						class: normalizeClass(_ctx.$style.clearButton),
						onClick: _cache[0] || (_cache[0] = withModifiers(($event) => emit("clearExecutionData"), ["stop"]))
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("logs.overview.header.actions.clearExecution")), 1)]),
						_: 1
					}, 8, ["class"])]),
					_: 1
				}, 8, ["content"])) : createCommentVNode("", true), renderSlot(_ctx.$slots, "actions")]),
				_: 3
			}, 8, ["title", "is-clickable"]), _ctx.isOpen ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass([_ctx.$style.content, isEmpty.value ? _ctx.$style.empty : ""]),
				"data-test-id": "logs-overview-body"
			}, [isEmpty.value || _ctx.execution === void 0 ? (openBlock(), createBlock(unref(N8nText_default), {
				key: 0,
				tag: "p",
				size: "medium",
				color: "text-base",
				class: normalizeClass(_ctx.$style.emptyText),
				"data-test-id": "logs-overview-empty"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("logs.overview.body.empty.message")), 1)]),
				_: 1
			}, 8, ["class"])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
				createVNode(LogsViewExecutionSummary_default, {
					"data-test-id": "logs-overview-status",
					class: normalizeClass(_ctx.$style.summary),
					status: _ctx.execution.status,
					"consumed-tokens": consumedTokens.value,
					"start-time": +new Date(_ctx.execution.startedAt),
					"time-took": timeTook.value
				}, null, 8, [
					"class",
					"status",
					"consumed-tokens",
					"start-time",
					"time-took"
				]),
				createVNode(LogsOverviewRows_default, {
					"is-read-only": _ctx.isReadOnly,
					selected: _ctx.selected,
					"is-compact": _ctx.isCompact,
					"should-show-token-count-column": shouldShowTokenCountColumn.value,
					"latest-node-info": _ctx.latestNodeInfo,
					"flat-log-entries": _ctx.flatLogEntries,
					"can-open-ndv": true,
					execution: _ctx.execution,
					onToggleExpanded: _cache[2] || (_cache[2] = ($event) => emit("toggleExpanded", $event)),
					onOpenNdv: _cache[3] || (_cache[3] = ($event) => emit("openNdv", $event)),
					onSelect: _cache[4] || (_cache[4] = ($event) => emit("select", $event))
				}, null, 8, [
					"is-read-only",
					"selected",
					"is-compact",
					"should-show-token-count-column",
					"latest-node-info",
					"flat-log-entries",
					"execution"
				]),
				createVNode(unref(N8nRadioButtons_default), {
					size: "small-medium",
					class: normalizeClass(_ctx.$style.switchViewButtons),
					"model-value": _ctx.selected ? "details" : "overview",
					options: switchViewOptions.value,
					"onUpdate:modelValue": handleSwitchView
				}, null, 8, [
					"class",
					"model-value",
					"options"
				])
			], 64))], 2)) : createCommentVNode("", true)], 2);
		};
	}
});
var LogsOverviewPanel_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_svlfi_123",
	clearButton: "_clearButton_svlfi_133",
	content: "_content_svlfi_139",
	empty: "_empty_svlfi_149",
	emptyText: "_emptyText_svlfi_154",
	summary: "_summary_svlfi_159",
	switchViewButtons: "_switchViewButtons_svlfi_163"
};
var LogsOverviewPanel_default = /* @__PURE__ */ __plugin_vue_export_helper_default(LogsOverviewPanel_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": LogsOverviewPanel_vue_vue_type_style_index_0_lang_module_default }]]);
function useChat() {
	return inject(ChatSymbol);
}
function useOptions() {
	return { options: inject(ChatOptionsSymbol) };
}
function useI18n$1() {
	const { options } = useOptions();
	const language = options?.defaultLanguage ?? "en";
	function t(key) {
		const val = options?.i18n?.[language]?.[key];
		if (isRef(val)) return val.value;
		return val ?? key;
	}
	function te(key) {
		return !!options?.i18n?.[language]?.[key];
	}
	return {
		t,
		te
	};
}
var _hoisted_1$12 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$7(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$12, _cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "currentColor",
		d: "M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12z"
	}, null, -1)]));
}
var closeThick_default = {
	name: "mdi-closeThick",
	render: render$7
};
var _hoisted_1$11 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$6(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$11, _cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "currentColor",
		d: "M13 9h5.5L13 3.5zM6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2m0 18h12v-8l-4 4l-2-2zM8 9a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"
	}, null, -1)]));
}
var fileImage_default = {
	name: "mdi-fileImage",
	render: render$6
};
var _hoisted_1$10 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$5(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$10, _cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "currentColor",
		d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zm-1 11h-2v5a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2c.4 0 .7.1 1 .3V11h3zm0-4V3.5L18.5 9z"
	}, null, -1)]));
}
var fileMusic_default = {
	name: "mdi-fileMusic",
	render: render$5
};
var _hoisted_1$9 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$4(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$9, _cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "currentColor",
		d: "M13 9h5.5L13 3.5zM6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2m9 16v-2H6v2zm3-4v-2H6v2z"
	}, null, -1)]));
}
var fileText_default = {
	name: "mdi-fileText",
	render: render$4
};
var _hoisted_1$8 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$3(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$8, _cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "currentColor",
		d: "M13 9h5.5L13 3.5zM6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2m11 17v-6l-3 2.2V13H7v6h7v-2.2z"
	}, null, -1)]));
}
var fileVideo_default = {
	name: "mdi-fileVideo",
	render: render$3
};
var _hoisted_1$7 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$2(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$7, _cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "currentColor",
		d: "M14 3v2h3.59l-9.83 9.83l1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2z"
	}, null, -1)]));
}
var openInNew_default = {
	name: "mdi-openInNew",
	render: render$2
};
var _hoisted_1$6 = { class: "chat-file-name" };
var ChatFile_default = /* @__PURE__ */ __plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "ChatFile",
	props: {
		file: {},
		isRemovable: { type: Boolean },
		isPreviewable: { type: Boolean }
	},
	emits: ["remove"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const iconMapper = {
			document: fileText_default,
			audio: fileMusic_default,
			image: fileImage_default,
			video: fileVideo_default
		};
		const TypeIcon = computed(() => {
			return iconMapper[props.file?.type.split("/")[0]] || fileText_default;
		});
		function onClick() {
			if (props.isPreviewable) window.open(URL.createObjectURL(props.file));
		}
		function onDelete() {
			emit("remove", props.file);
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: "chat-file",
				onClick
			}, [
				createVNode(unref(TypeIcon)),
				createBaseVNode("p", _hoisted_1$6, toDisplayString(_ctx.file.name), 1),
				_ctx.isRemovable ? (openBlock(), createElementBlock("span", {
					key: 0,
					class: "chat-file-delete",
					onClick: withModifiers(onDelete, ["stop"])
				}, [createVNode(unref(closeThick_default))])) : _ctx.isPreviewable ? (openBlock(), createBlock(unref(openInNew_default), {
					key: 1,
					class: "chat-file-preview"
				})) : createCommentVNode("", true)
			]);
		};
	}
}), [["__scopeId", "data-v-70b9370d"]]);
var import_markdown_it_link_attributes = /* @__PURE__ */ __toESM(require_markdown_it_link_attributes());
var _hoisted_1$5 = {
	key: 0,
	class: "chat-message-actions"
};
var _hoisted_2$2 = {
	key: 2,
	class: "chat-message-files"
};
var Message_default = /* @__PURE__ */ defineComponent({
	__name: "Message",
	props: { message: {} },
	setup(__props, { expose: __expose }) {
		const props = __props;
		core_default.registerLanguage("javascript", javascript);
		core_default.registerLanguage("typescript", typescript);
		core_default.registerLanguage("python", python);
		core_default.registerLanguage("xml", xml);
		core_default.registerLanguage("bash", bash);
		const { message } = toRefs(props);
		const { options } = useOptions();
		const messageContainer = ref(null);
		const fileSources = ref({});
		const messageText = computed(() => {
			return message.value.text || "&lt;Empty response&gt;";
		});
		const classes = computed(() => {
			return {
				"chat-message-from-user": message.value.sender === "user",
				"chat-message-from-bot": message.value.sender === "bot",
				"chat-message-transparent": message.value.transparent === true
			};
		});
		const linksNewTabPlugin = (vueMarkdownItInstance) => {
			vueMarkdownItInstance.use(import_markdown_it_link_attributes.default, { attrs: {
				target: "_blank",
				rel: "noopener"
			} });
		};
		const scrollToView = () => {
			if (messageContainer.value?.scrollIntoView) messageContainer.value.scrollIntoView({ block: "start" });
		};
		const markdownOptions = { highlight(str, lang) {
			if (lang && core_default.getLanguage(lang)) try {
				return core_default.highlight(str, { language: lang }).value;
			} catch {}
			return "";
		} };
		const messageComponents = { ...options?.messageComponents ?? {} };
		__expose({ scrollToView });
		const readFileAsDataURL = async (file) => await new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.onload = () => resolve(reader.result);
			reader.onerror = reject;
			reader.readAsDataURL(file);
		});
		onMounted(async () => {
			if (message.value.files) for (const file of message.value.files) try {
				const dataURL = await readFileAsDataURL(file);
				fileSources.value[file.name] = dataURL;
			} catch (error) {
				console.error("Error reading file:", error);
			}
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				ref_key: "messageContainer",
				ref: messageContainer,
				class: normalizeClass(["chat-message", classes.value])
			}, [!!_ctx.$slots.beforeMessage ? (openBlock(), createElementBlock("div", _hoisted_1$5, [renderSlot(_ctx.$slots, "beforeMessage", normalizeProps(guardReactiveProps({ message: unref(message) })))])) : createCommentVNode("", true), renderSlot(_ctx.$slots, "default", {}, () => [unref(message).type === "component" && messageComponents[unref(message).key] ? (openBlock(), createBlock(resolveDynamicComponent(messageComponents[unref(message).key]), normalizeProps(mergeProps({ key: 0 }, unref(message).arguments)), null, 16)) : (openBlock(), createBlock(unref(VueMarkdown_default), {
				key: 1,
				class: "chat-message-markdown",
				source: messageText.value,
				options: markdownOptions,
				plugins: [linksNewTabPlugin]
			}, null, 8, ["source", "plugins"])), (unref(message).files ?? []).length > 0 ? (openBlock(), createElementBlock("div", _hoisted_2$2, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(message).files ?? [], (file) => {
				return openBlock(), createElementBlock("div", {
					key: file.name,
					class: "chat-message-file"
				}, [createVNode(ChatFile_default, {
					file,
					"is-removable": false,
					"is-previewable": true
				}, null, 8, ["file"])]);
			}), 128))])) : createCommentVNode("", true)])], 2);
		};
	}
});
var _hoisted_1$4 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$1(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$4, _cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "currentColor",
		d: "M16.5 6v11.5a4 4 0 0 1-4 4a4 4 0 0 1-4-4V5A2.5 2.5 0 0 1 11 2.5A2.5 2.5 0 0 1 13.5 5v10.5a1 1 0 0 1-1 1a1 1 0 0 1-1-1V6H10v9.5a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5V5a4 4 0 0 0-4-4a4 4 0 0 0-4 4v12.5a5.5 5.5 0 0 0 5.5 5.5a5.5 5.5 0 0 0 5.5-5.5V6z"
	}, null, -1)]));
}
var paperclip_default = {
	name: "mdi-paperclip",
	render: render$1
};
var _hoisted_1$3 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$3, _cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "currentColor",
		d: "m2 21l21-9L2 3v7l15 2l-15 2z"
	}, null, -1)]));
}
var send_default = {
	name: "mdi-send",
	render
};
var _hoisted_1$2 = { class: "chat-inputs" };
var _hoisted_2$1 = {
	key: 0,
	class: "chat-input-left-panel"
};
var _hoisted_3$1 = ["disabled", "placeholder"];
var _hoisted_4 = { class: "chat-inputs-controls" };
var _hoisted_5 = ["disabled"];
var _hoisted_6 = ["disabled"];
var _hoisted_7 = {
	key: 0,
	class: "chat-files"
};
var Input_default = /* @__PURE__ */ __plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "Input",
	props: { placeholder: { default: "inputPlaceholder" } },
	emits: ["arrowKeyDown", "escapeKeyDown"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const { t } = useI18n$1();
		const emit = __emit;
		const { options } = useOptions();
		const chatStore = useChat();
		const { waitingForResponse } = chatStore;
		const files = ref(null);
		const chatTextArea = ref(null);
		const input = ref("");
		const isSubmitting = ref(false);
		const resizeObserver = ref(null);
		const waitingForChatResponse = ref(false);
		const isSubmitDisabled = computed(() => {
			if (waitingForChatResponse.value) return false;
			return input.value === "" || unref(waitingForResponse) || options.disabled?.value === true;
		});
		const isInputDisabled = computed(() => options.disabled?.value === true);
		const isFileUploadDisabled = computed(() => isFileUploadAllowed.value && unref(waitingForResponse) && !options.disabled?.value);
		const isFileUploadAllowed = computed(() => unref(options.allowFileUploads) === true);
		const allowedFileTypes = computed(() => unref(options.allowedFilesMimeTypes));
		const styleVars = computed(() => {
			const controlsCount = isFileUploadAllowed.value ? 2 : 1;
			return { "--controls-count": controlsCount };
		});
		const { open: openFileDialog, reset: resetFileDialog, onChange } = useFileDialog({
			multiple: true,
			reset: false
		});
		onChange((newFiles) => {
			if (!newFiles) return;
			const newFilesDT = new DataTransfer();
			if (files.value) for (let i = 0; i < files.value.length; i++) newFilesDT.items.add(files.value[i]);
			for (let i = 0; i < newFiles.length; i++) newFilesDT.items.add(newFiles[i]);
			files.value = newFilesDT.files;
		});
		onMounted(() => {
			chatEventBus.on("focusInput", focusChatInput);
			chatEventBus.on("blurInput", blurChatInput);
			chatEventBus.on("setInputValue", setInputValue);
			if (chatTextArea.value) {
				resizeObserver.value = new ResizeObserver((entries) => {
					for (const entry of entries) if (entry.target === chatTextArea.value) adjustTextAreaHeight();
				});
				resizeObserver.value.observe(chatTextArea.value);
			}
		});
		onUnmounted(() => {
			chatEventBus.off("focusInput", focusChatInput);
			chatEventBus.off("blurInput", blurChatInput);
			chatEventBus.off("setInputValue", setInputValue);
			if (resizeObserver.value) {
				resizeObserver.value.disconnect();
				resizeObserver.value = null;
			}
		});
		function blurChatInput() {
			if (chatTextArea.value) chatTextArea.value.blur();
		}
		function focusChatInput() {
			if (chatTextArea.value) chatTextArea.value.focus();
		}
		function setInputValue(value) {
			input.value = value;
			focusChatInput();
		}
		function attachFiles() {
			if (files.value) {
				const filesToAttach = Array.from(files.value);
				resetFileDialog();
				files.value = null;
				return filesToAttach;
			}
			return [];
		}
		function setupWebsocketConnection(executionId) {
			if (options.webhookUrl && chatStore.currentSessionId.value) try {
				const wsUrl = constructChatWebsocketUrl(options.webhookUrl, executionId, chatStore.currentSessionId.value, true);
				chatStore.ws = new WebSocket(wsUrl);
				chatStore.ws.onmessage = (e) => {
					if (e.data === "n8n|heartbeat") {
						chatStore.ws?.send("n8n|heartbeat-ack");
						return;
					}
					if (e.data === "n8n|continue") {
						waitingForChatResponse.value = false;
						chatStore.waitingForResponse.value = true;
						return;
					}
					const newMessage = {
						id: v4_default(),
						text: e.data,
						sender: "bot"
					};
					chatStore.messages.value.push(newMessage);
					waitingForChatResponse.value = true;
					chatStore.waitingForResponse.value = false;
				};
				chatStore.ws.onclose = () => {
					chatStore.ws = null;
					waitingForChatResponse.value = false;
					chatStore.waitingForResponse.value = false;
				};
			} catch (error) {
				console.error("Error setting up websocket connection", error);
			}
		}
		async function processFiles$1(data) {
			if (!data || data.length === 0) return [];
			const filePromises = data.map(async (file) => {
				return new Promise((resolve, reject) => {
					const reader = new FileReader();
					reader.onload = () => resolve({
						name: file.name,
						type: file.type,
						data: reader.result
					});
					reader.onerror = () => reject(/* @__PURE__ */ new Error(`Error reading file: ${reader.error?.message ?? "Unknown error"}`));
					reader.readAsDataURL(file);
				});
			});
			return await Promise.all(filePromises);
		}
		async function respondToChatNode(ws, messageText) {
			const sentMessage = {
				id: v4_default(),
				text: messageText,
				sender: "user",
				files: files.value ? attachFiles() : void 0
			};
			chatStore.messages.value.push(sentMessage);
			ws.send(JSON.stringify({
				sessionId: chatStore.currentSessionId.value,
				action: "sendMessage",
				chatInput: messageText,
				files: await processFiles$1(sentMessage.files)
			}));
			chatStore.waitingForResponse.value = true;
			waitingForChatResponse.value = false;
		}
		async function onSubmit(event) {
			event.preventDefault();
			if (isSubmitDisabled.value) return;
			const messageText = input.value;
			input.value = "";
			isSubmitting.value = true;
			if (chatStore.ws && waitingForChatResponse.value) {
				await respondToChatNode(chatStore.ws, messageText);
				return;
			}
			const response = await chatStore.sendMessage(messageText, attachFiles());
			if (response?.executionId) setupWebsocketConnection(response.executionId);
			isSubmitting.value = false;
		}
		async function onSubmitKeydown(event) {
			if (event.shiftKey || event.isComposing) return;
			await onSubmit(event);
			adjustTextAreaHeight();
		}
		function onFileRemove(file) {
			if (!files.value) return;
			const dt = new DataTransfer();
			for (let i = 0; i < files.value.length; i++) {
				const currentFile = files.value[i];
				if (file.name !== currentFile.name) dt.items.add(currentFile);
			}
			resetFileDialog();
			files.value = dt.files;
		}
		function onKeyDown(event) {
			if (event.key === "ArrowUp" || event.key === "ArrowDown") {
				event.preventDefault();
				emit("arrowKeyDown", {
					key: event.key,
					currentInputValue: input.value
				});
			} else if (event.key === "Escape") {
				event.preventDefault();
				emit("escapeKeyDown", { currentInputValue: input.value });
			}
		}
		function onOpenFileDialog() {
			if (isFileUploadDisabled.value) return;
			openFileDialog({ accept: unref(allowedFileTypes) });
		}
		function adjustTextAreaHeight() {
			const textarea = chatTextArea.value;
			if (!textarea) return;
			textarea.style.height = "var(--chat--textarea--height)";
			const newHeight = Math.min(textarea.scrollHeight, 480);
			textarea.style.height = `${newHeight}px`;
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: "chat-input",
				style: normalizeStyle(styleVars.value),
				onKeydown: withModifiers(onKeyDown, ["stop"])
			}, [createBaseVNode("div", _hoisted_1$2, [
				_ctx.$slots.leftPanel ? (openBlock(), createElementBlock("div", _hoisted_2$1, [renderSlot(_ctx.$slots, "leftPanel", {}, void 0, true)])) : createCommentVNode("", true),
				withDirectives(createBaseVNode("textarea", {
					ref_key: "chatTextArea",
					ref: chatTextArea,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => input.value = $event),
					"data-test-id": "chat-input",
					disabled: isInputDisabled.value,
					placeholder: unref(t)(props.placeholder),
					onKeydown: withKeys(onSubmitKeydown, ["enter"]),
					onInput: adjustTextAreaHeight,
					onMousedown: adjustTextAreaHeight,
					onFocus: adjustTextAreaHeight
				}, null, 40, _hoisted_3$1), [[vModelText, input.value]]),
				createBaseVNode("div", _hoisted_4, [isFileUploadAllowed.value ? (openBlock(), createElementBlock("button", {
					key: 0,
					disabled: isFileUploadDisabled.value,
					class: "chat-input-file-button",
					"data-test-id": "chat-attach-file-button",
					onClick: onOpenFileDialog
				}, [createVNode(unref(paperclip_default), {
					height: "24",
					width: "24"
				})], 8, _hoisted_5)) : createCommentVNode("", true), createBaseVNode("button", {
					disabled: isSubmitDisabled.value,
					class: "chat-input-send-button",
					onClick: onSubmit
				}, [createVNode(unref(send_default), {
					height: "24",
					width: "24"
				})], 8, _hoisted_6)])
			]), files.value?.length && (!isSubmitting.value || waitingForChatResponse.value) ? (openBlock(), createElementBlock("div", _hoisted_7, [(openBlock(true), createElementBlock(Fragment, null, renderList(files.value, (file) => {
				return openBlock(), createBlock(ChatFile_default, {
					key: file.name,
					file,
					"is-removable": true,
					"is-previewable": true,
					onRemove: onFileRemove
				}, null, 8, ["file"]);
			}), 128))])) : createCommentVNode("", true)], 36);
		};
	}
}), [["__scopeId", "data-v-71b23fec"]]);
var MessageTyping_default = /* @__PURE__ */ defineComponent({
	__name: "MessageTyping",
	props: { animation: { default: "bouncing" } },
	setup(__props) {
		const props = __props;
		const message = {
			id: "typing",
			text: "",
			sender: "bot"
		};
		const messageContainer = ref();
		const classes = computed(() => {
			return {
				"chat-message-typing": true,
				[`chat-message-typing-animation-${props.animation}`]: true
			};
		});
		onMounted(() => {
			messageContainer.value?.scrollToView();
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Message_default), {
				ref_key: "messageContainer",
				ref: messageContainer,
				class: normalizeClass(classes.value),
				message,
				"data-test-id": "chat-message-typing"
			}, {
				default: withCtx(() => _cache[0] || (_cache[0] = [createBaseVNode("div", { class: "chat-message-typing-body" }, [
					createBaseVNode("span", { class: "chat-message-typing-circle" }),
					createBaseVNode("span", { class: "chat-message-typing-circle" }),
					createBaseVNode("span", { class: "chat-message-typing-circle" })
				], -1)])),
				_: 1
			}, 8, ["class"]);
		};
	}
});
var _hoisted_1$1 = {
	key: 0,
	class: "empty-container"
};
var _hoisted_2 = {
	class: "empty",
	"data-test-id": "chat-messages-empty"
};
var _hoisted_3 = {
	key: 1,
	class: "chat-messages-list"
};
var MessagesList_default = /* @__PURE__ */ defineComponent({
	__name: "MessagesList",
	props: {
		messages: {},
		emptyText: {}
	},
	setup(__props) {
		const chatStore = useChat();
		const messageComponents = ref([]);
		const { initialMessages, waitingForResponse } = chatStore;
		watch(() => messageComponents.value.length, () => {
			const lastMessageComponent = messageComponents.value[messageComponents.value.length - 1];
			if (lastMessageComponent) lastMessageComponent.scrollToView();
		});
		return (_ctx, _cache) => {
			return _ctx.emptyText && unref(initialMessages).length === 0 && _ctx.messages.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_1$1, [createBaseVNode("div", _hoisted_2, [createVNode(unref(N8nIcon_default), {
				icon: "message-circle",
				size: "large",
				class: "emptyIcon"
			}), createVNode(unref(N8nText_default), {
				tag: "p",
				size: "medium",
				color: "text-base"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(_ctx.emptyText), 1)]),
				_: 1
			})])])) : (openBlock(), createElementBlock("div", _hoisted_3, [
				(openBlock(true), createElementBlock(Fragment, null, renderList(unref(initialMessages), (initialMessage) => {
					return openBlock(), createBlock(Message_default, {
						key: initialMessage.id,
						message: initialMessage
					}, null, 8, ["message"]);
				}), 128)),
				(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.messages, (message) => {
					return openBlock(), createBlock(Message_default, {
						key: message.id,
						ref_for: true,
						ref_key: "messageComponents",
						ref: messageComponents,
						message
					}, {
						beforeMessage: withCtx(({ message: message$1 }) => [renderSlot(_ctx.$slots, "beforeMessage", mergeProps({ ref_for: true }, { message: message$1 }))]),
						_: 2
					}, 1032, ["message"]);
				}), 128)),
				unref(waitingForResponse) ? (openBlock(), createBlock(MessageTyping_default, { key: 0 })) : createCommentVNode("", true)
			]));
		};
	}
});
var MessageOptionTooltip_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "MessageOptionTooltip",
	props: { placement: {
		type: String,
		default: "top"
	} },
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [createVNode(unref(N8nTooltip_default), { placement: __props.placement }, {
				content: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.icon) }, [createVNode(unref(N8nIcon_default), {
					icon: "info",
					size: "xsmall"
				})], 2)]),
				_: 3
			}, 8, ["placement"])], 2);
		};
	}
});
var MessageOptionTooltip_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_1v2rk_123",
	icon: "_icon_1v2rk_129"
};
var MessageOptionTooltip_default = /* @__PURE__ */ __plugin_vue_export_helper_default(MessageOptionTooltip_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": MessageOptionTooltip_vue_vue_type_style_index_0_lang_module_default }]]);
var MessageOptionAction_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "MessageOptionAction",
	props: {
		label: {},
		icon: {},
		placement: {}
	},
	setup(__props) {
		const attrs = useAttrs();
		const onClick = () => {
			attrs.onClick?.();
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [createVNode(unref(N8nTooltip_default), { placement: _ctx.placement }, {
				content: withCtx(() => [createTextVNode(toDisplayString(_ctx.label), 1)]),
				default: withCtx(() => [createVNode(unref(N8nIcon_default), {
					class: normalizeClass(_ctx.$style.icon),
					icon: _ctx.icon,
					size: "xsmall",
					onClick
				}, null, 8, ["class", "icon"])]),
				_: 1
			}, 8, ["placement"])], 2);
		};
	}
});
var MessageOptionAction_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_14jp1_123",
	icon: "_icon_14jp1_129"
};
var MessageOptionAction_default = /* @__PURE__ */ __plugin_vue_export_helper_default(MessageOptionAction_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": MessageOptionAction_vue_vue_type_style_index_0_lang_module_default }]]);
var _hoisted_1 = ["onClick"];
var ChatMessagesPanel_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ChatMessagesPanel",
	props: {
		pastChatMessages: {},
		messages: {},
		sessionId: {},
		showCloseButton: { type: Boolean },
		isOpen: {
			type: Boolean,
			default: true
		},
		isReadOnly: {
			type: Boolean,
			default: false
		},
		isHeaderClickable: { type: Boolean }
	},
	emits: [
		"displayExecution",
		"sendMessage",
		"refreshSession",
		"close",
		"clickHeader"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const clipboard = useClipboard();
		const locale = useI18n();
		const toast = useToast();
		const previousMessageIndex = ref(-1);
		const currentInputBuffer = ref("");
		const sessionIdText = computed(() => locale.baseText("chat.window.session.id", { interpolate: { id: `${props.sessionId.slice(0, 5)}...` } }));
		const inputPlaceholder = computed(() => {
			if (props.messages.length > 0) return locale.baseText("chat.window.chat.placeholder");
			return locale.baseText("chat.window.chat.placeholderPristine");
		});
		function isTextMessage(message) {
			return message.type === "text" || !message.type;
		}
		function repostMessage(message) {
			sendMessage(message.text);
		}
		function reuseMessage(message) {
			chatEventBus.emit("setInputValue", message.text);
		}
		function sendMessage(message) {
			previousMessageIndex.value = -1;
			currentInputBuffer.value = "";
			emit("sendMessage", message);
		}
		function onRefreshSession() {
			emit("refreshSession");
		}
		function onArrowKeyDown({ currentInputValue, key }) {
			const pastMessages = props.pastChatMessages;
			if (pastMessages.length === 0) return;
			if (currentInputValue.length === 0 && previousMessageIndex.value !== -1) {
				previousMessageIndex.value = -1;
				currentInputBuffer.value = "";
			}
			if (previousMessageIndex.value === -1 && currentInputValue.length > 0) currentInputBuffer.value = currentInputValue;
			if (key === "ArrowUp") {
				chatEventBus.emit("blurInput");
				if (previousMessageIndex.value === -1) previousMessageIndex.value = pastMessages.length - 1;
				else if (previousMessageIndex.value > 0) previousMessageIndex.value--;
				const selectedMessage = pastMessages[previousMessageIndex.value];
				chatEventBus.emit("setInputValue", selectedMessage);
				chatEventBus.emit("focusInput");
			} else if (key === "ArrowDown") {
				if (previousMessageIndex.value === -1) return;
				chatEventBus.emit("blurInput");
				if (previousMessageIndex.value < pastMessages.length - 1) {
					previousMessageIndex.value++;
					const selectedMessage = pastMessages[previousMessageIndex.value];
					chatEventBus.emit("setInputValue", selectedMessage);
				} else {
					previousMessageIndex.value = -1;
					chatEventBus.emit("setInputValue", currentInputBuffer.value);
					currentInputBuffer.value = "";
				}
				chatEventBus.emit("focusInput");
			}
		}
		function onEscapeKey() {
			if (previousMessageIndex.value === -1) return;
			previousMessageIndex.value = -1;
			chatEventBus.emit("setInputValue", currentInputBuffer.value);
			currentInputBuffer.value = "";
		}
		async function copySessionId() {
			await clipboard.copy(props.sessionId);
			toast.showMessage({
				title: locale.baseText("generic.copiedToClipboard"),
				message: "",
				type: "success"
			});
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass([_ctx.$style.chat, "ignore-key-press-canvas"]),
				"data-test-id": "workflow-lm-chat-dialog",
				tabindex: "0"
			}, [
				createVNode(LogsPanelHeader_default, {
					"data-test-id": "chat-header",
					title: unref(locale).baseText("chat.window.title"),
					"is-clickable": _ctx.isHeaderClickable,
					onClick: _cache[0] || (_cache[0] = ($event) => emit("clickHeader"))
				}, {
					actions: withCtx(() => [unref(clipboard).isSupported && !_ctx.isReadOnly ? (openBlock(), createBlock(unref(N8nTooltip_default), { key: 0 }, {
						content: withCtx(() => [
							createTextVNode(toDisplayString(_ctx.sessionId) + " ", 1),
							_cache[3] || (_cache[3] = createBaseVNode("br", null, null, -1)),
							createTextVNode(" " + toDisplayString(unref(locale).baseText("chat.window.session.id.copy")), 1)
						]),
						default: withCtx(() => [createVNode(unref(N8nButton_default), {
							"data-test-id": "chat-session-id",
							type: "secondary",
							size: "mini",
							class: normalizeClass(_ctx.$style.newHeaderButton),
							onClick: withModifiers(copySessionId, ["stop"])
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(sessionIdText.value), 1)]),
							_: 1
						}, 8, ["class"])]),
						_: 1
					})) : createCommentVNode("", true), _ctx.messages.length > 0 && !_ctx.isReadOnly ? (openBlock(), createBlock(unref(N8nTooltip_default), {
						key: 1,
						content: unref(locale).baseText("chat.window.session.resetSession")
					}, {
						default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
							class: normalizeClass(_ctx.$style.newHeaderButton),
							"data-test-id": "refresh-session-button",
							outline: "",
							type: "secondary",
							size: "small",
							"icon-size": "medium",
							icon: "undo-2",
							title: unref(locale).baseText("chat.window.session.reset"),
							onClick: withModifiers(onRefreshSession, ["stop"])
						}, null, 8, ["class", "title"])]),
						_: 1
					}, 8, ["content"])) : createCommentVNode("", true)]),
					_: 1
				}, 8, ["title", "is-clickable"]),
				_ctx.isOpen ? (openBlock(), createElementBlock("main", {
					key: 0,
					class: normalizeClass(_ctx.$style.chatBody),
					"data-test-id": "canvas-chat-body"
				}, [createVNode(MessagesList_default, {
					messages: _ctx.messages,
					class: normalizeClass(_ctx.$style.messages),
					"empty-text": unref(locale).baseText("chat.window.chat.emptyChatMessage.v2")
				}, {
					beforeMessage: withCtx(({ message }) => [
						!_ctx.isReadOnly && message.sender === "bot" && !message.id.includes("preload") ? (openBlock(), createBlock(MessageOptionTooltip_default, {
							key: 0,
							placement: "right",
							"data-test-id": "execution-id-tooltip"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("chat.window.chat.chatMessageOptions.executionId")) + ": ", 1), createBaseVNode("a", {
								href: "#",
								onClick: ($event) => emit("displayExecution", message.id)
							}, toDisplayString(message.id), 9, _hoisted_1)]),
							_: 2
						}, 1024)) : createCommentVNode("", true),
						!_ctx.isReadOnly && isTextMessage(message) && message.sender === "user" ? (openBlock(), createBlock(MessageOptionAction_default, {
							key: 1,
							"data-test-id": "repost-message-button",
							icon: "redo-2",
							label: unref(locale).baseText("chat.window.chat.chatMessageOptions.repostMessage"),
							placement: "left",
							onClickOnce: ($event) => repostMessage(message)
						}, null, 8, ["label", "onClickOnce"])) : createCommentVNode("", true),
						!_ctx.isReadOnly && isTextMessage(message) && message.sender === "user" ? (openBlock(), createBlock(MessageOptionAction_default, {
							key: 2,
							"data-test-id": "reuse-message-button",
							icon: "files",
							label: unref(locale).baseText("chat.window.chat.chatMessageOptions.reuseMessage"),
							placement: "left",
							onClick: ($event) => reuseMessage(message)
						}, null, 8, ["label", "onClick"])) : createCommentVNode("", true)
					]),
					_: 1
				}, 8, [
					"messages",
					"class",
					"empty-text"
				])], 2)) : createCommentVNode("", true),
				_ctx.isOpen ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.messagesInput)
				}, [createVNode(Input_default, {
					"data-test-id": "lm-chat-inputs",
					placeholder: inputPlaceholder.value,
					onArrowKeyDown,
					onEscapeKeyDown: onEscapeKey
				}, createSlots({ _: 2 }, [_ctx.pastChatMessages.length > 0 ? {
					name: "leftPanel",
					fn: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.messagesHistory) }, [createVNode(unref(N8nButton_default), {
						title: "Navigate to previous message",
						icon: "chevron-up",
						type: "tertiary",
						text: "",
						size: "mini",
						disabled: previousMessageIndex.value === 0,
						onClick: _cache[1] || (_cache[1] = ($event) => onArrowKeyDown({
							currentInputValue: "",
							key: "ArrowUp"
						}))
					}, null, 8, ["disabled"]), createVNode(unref(N8nButton_default), {
						title: "Navigate to next message",
						icon: "chevron-down",
						type: "tertiary",
						text: "",
						size: "mini",
						disabled: previousMessageIndex.value === -1,
						onClick: _cache[2] || (_cache[2] = ($event) => onArrowKeyDown({
							currentInputValue: "",
							key: "ArrowDown"
						}))
					}, null, 8, ["disabled"])], 2)]),
					key: "0"
				} : void 0]), 1032, ["placeholder"])], 2)) : createCommentVNode("", true)
			], 2);
		};
	}
});
var ChatMessagesPanel_vue_vue_type_style_index_0_lang_module_default = {
	chat: "_chat_1lcb4_123",
	chatHeader: "_chatHeader_1lcb4_151",
	chatTitle: "_chatTitle_1lcb4_164",
	session: "_session_1lcb4_168",
	sessionId: "_sessionId_1lcb4_176",
	copyable: "_copyable_1lcb4_182",
	headerButton: "_headerButton_1lcb4_186",
	newHeaderButton: "_newHeaderButton_1lcb4_191",
	chatBody: "_chatBody_1lcb4_196",
	messages: "_messages_1lcb4_205",
	messagesInput: "_messagesInput_1lcb4_216",
	messagesHistory: "_messagesHistory_1lcb4_250"
};
var ChatMessagesPanel_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ChatMessagesPanel_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatMessagesPanel_vue_vue_type_style_index_0_lang_module_default }]]);
var LogsViewRunData_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "LogsViewRunData",
	props: {
		title: {},
		paneType: {},
		logEntry: {},
		collapsingTableColumnName: {},
		searchShortcut: {}
	},
	emits: ["collapsingTableColumnChanged"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const locale = useI18n();
		const ndvStore = useNDVStore();
		const popOutWindow = inject(PopOutWindowKey, ref());
		const displayMode = ref(__props.paneType === "input" ? "schema" : "table");
		const isMultipleInput = computed(() => __props.paneType === "input" && (__props.logEntry.runData?.source.length ?? 0) > 1);
		const runDataProps = computed(() => {
			if (isSubNodeLog(__props.logEntry) || __props.paneType === "output") return {
				node: __props.logEntry.node,
				runIndex: __props.logEntry.runIndex
			};
			const source = __props.logEntry.runData?.source[0];
			const node = source && __props.logEntry.workflow.getNode(source.previousNode);
			if (!source || !node) return;
			return {
				node: {
					...node,
					disabled: false
				},
				runIndex: source.previousNodeRun ?? 0,
				overrideOutputs: [source.previousNodeOutput ?? 0]
			};
		});
		const isExecuting = computed(() => __props.paneType === "output" && (__props.logEntry.runData?.executionStatus === "running" || __props.logEntry.runData?.executionStatus === "waiting"));
		function handleClickOpenNdv() {
			ndvStore.setActiveNodeName(__props.logEntry.node.name, "logs_view");
		}
		function handleChangeDisplayMode(value) {
			displayMode.value = value;
		}
		return (_ctx, _cache) => {
			const _directive_n8n_html = resolveDirective("n8n-html");
			return runDataProps.value ? (openBlock(), createBlock(RunData_default, mergeProps({ key: 0 }, runDataProps.value, {
				key: `run-data${unref(popOutWindow) ? "-pop-out" : ""}`,
				class: _ctx.$style.component,
				"workflow-object": _ctx.logEntry.workflow,
				"workflow-execution": _ctx.logEntry.execution,
				"too-much-data-title": unref(locale).baseText("ndv.output.tooMuchData.title"),
				"no-data-in-branch-message": unref(locale).baseText("ndv.output.noOutputDataInBranch"),
				"executing-message": unref(locale).baseText("ndv.output.executing"),
				"pane-type": _ctx.paneType,
				"disable-run-index-selection": true,
				compact: true,
				"show-actions-on-hover": true,
				"disable-pin": true,
				"disable-edit": true,
				"disable-hover-highlight": true,
				"disable-settings-hint": true,
				"display-mode": displayMode.value,
				"disable-ai-content": !unref(isSubNodeLog)(_ctx.logEntry),
				"is-executing": isExecuting.value,
				"table-header-bg-color": "light",
				"collapsing-table-column-name": _ctx.collapsingTableColumnName,
				"search-shortcut": _ctx.searchShortcut,
				onDisplayModeChange: handleChangeDisplayMode,
				onCollapsingTableColumnChanged: _cache[0] || (_cache[0] = ($event) => emit("collapsingTableColumnChanged", $event))
			}), createSlots({
				header: withCtx(() => [createVNode(unref(N8nText_default), {
					class: normalizeClass(_ctx.$style.title),
					bold: true,
					color: "text-light",
					size: "small"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(_ctx.title), 1)]),
					_: 1
				}, 8, ["class"])]),
				"header-end": withCtx((itemCountProps) => [createVNode(RunDataItemCount_default, mergeProps(itemCountProps, { search: displayMode.value === "schema" ? "" : itemCountProps.search }), null, 16, ["search"])]),
				"no-output-data": withCtx(() => [createVNode(NDVEmptyState_default, { title: unref(locale).baseText("ndv.output.noOutputData.title") }, null, 8, ["title"])]),
				"node-waiting": withCtx(() => [createVNode(NDVEmptyState_default, {
					title: unref(locale).baseText("ndv.output.waitNodeWaiting.title"),
					wide: ""
				}, {
					default: withCtx(() => [withDirectives(createBaseVNode("span", null, null, 512), [[_directive_n8n_html, unref(waitingNodeTooltip)(_ctx.logEntry.node, _ctx.logEntry.workflow)]])]),
					_: 1
				}, 8, ["title"])]),
				_: 2
			}, [isMultipleInput.value ? {
				name: "content",
				fn: withCtx(() => []),
				key: "0"
			} : void 0, isMultipleInput.value ? {
				name: "callout-message",
				fn: withCtx(() => [createVNode(unref(I18nT), {
					keypath: "logs.details.body.multipleInputs",
					scope: "global"
				}, {
					button: withCtx(() => [createVNode(unref(N8nLink_default), {
						size: "small",
						onClick: handleClickOpenNdv
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("logs.details.body.multipleInputs.openingTheNode")), 1)]),
						_: 1
					})]),
					_: 1
				})]),
				key: "1"
			} : void 0]), 1040, [
				"class",
				"workflow-object",
				"workflow-execution",
				"too-much-data-title",
				"no-data-in-branch-message",
				"executing-message",
				"pane-type",
				"display-mode",
				"disable-ai-content",
				"is-executing",
				"collapsing-table-column-name",
				"search-shortcut"
			])) : createCommentVNode("", true);
		};
	}
});
var LogsViewRunData_vue_vue_type_style_index_0_lang_module_default = {
	component: "_component_1mnpf_123",
	title: "_title_1mnpf_127"
};
var LogsViewRunData_default = /* @__PURE__ */ __plugin_vue_export_helper_default(LogsViewRunData_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": LogsViewRunData_vue_vue_type_style_index_0_lang_module_default }]]);
function useResizablePanel(localStorageKey, { container: container$8, defaultSize, snap = true, minSize = 0, maxSize = (size) => size, position = "left", allowCollapse, allowFullSize }) {
	const containerSize = ref(0);
	const persistedSize = useLocalStorage(localStorageKey, -1, { writeDefaults: false });
	const isResizing = ref(false);
	const sizeOnResizeStart = ref();
	const minSizeValue = computed(() => resolveSize(minSize, containerSize.value));
	const maxSizeValue = computed(() => resolveSize(maxSize, containerSize.value));
	const constrainedSize = computed(() => {
		const sizeInPixels = persistedSize.value >= 0 && persistedSize.value <= 1 ? containerSize.value * persistedSize.value : -1;
		if (isResizing.value && allowCollapse && sizeInPixels < 30) return 0;
		if (isResizing.value && allowFullSize && sizeInPixels > containerSize.value - 30) return containerSize.value;
		const defaultSizeValue = resolveSize(defaultSize, containerSize.value);
		if (Number.isNaN(sizeInPixels) || !Number.isFinite(sizeInPixels) || sizeInPixels < 0) return defaultSizeValue;
		return Math.max(minSizeValue.value, Math.min(snap && Math.abs(defaultSizeValue - sizeInPixels) < 30 ? defaultSizeValue : sizeInPixels, maxSizeValue.value));
	});
	function getSize(el) {
		return position === "bottom" ? el.height : el.width;
	}
	function getOffsetSize(el) {
		return position === "bottom" ? el.offsetHeight : el.offsetWidth;
	}
	function getValue(data) {
		return position === "bottom" ? data.y : data.x;
	}
	function resolveSize(getter, containerSizeValue) {
		return typeof getter === "number" ? getter : getter(containerSizeValue);
	}
	function onResize(data) {
		const containerRect = unref(container$8)?.getBoundingClientRect();
		const newSizeInPixels = Math.max(0, position === "bottom" ? (containerRect ? getSize(containerRect) : 0) - getValue(data) : getValue(data) - (containerRect ? getValue(containerRect) : 0));
		isResizing.value = true;
		persistedSize.value = newSizeInPixels / containerSize.value;
		if (sizeOnResizeStart.value === void 0) sizeOnResizeStart.value = persistedSize.value;
	}
	function onResizeEnd() {
		if (minSizeValue.value > 0 && constrainedSize.value <= 0 || maxSizeValue.value < containerSize.value && constrainedSize.value >= containerSize.value) persistedSize.value = sizeOnResizeStart.value;
		sizeOnResizeStart.value = void 0;
		isResizing.value = false;
	}
	watch(() => unref(container$8), (el, _, onCleanUp) => {
		if (!el) return;
		const observer = new ResizeObserver(() => {
			containerSize.value = getOffsetSize(el);
		});
		observer.observe(el);
		containerSize.value = getOffsetSize(el);
		onCleanUp(() => observer.disconnect());
	}, { immediate: true });
	return {
		isResizing: computed(() => isResizing.value),
		isCollapsed: computed(() => isResizing.value && constrainedSize.value <= 0),
		isFullSize: computed(() => isResizing.value && constrainedSize.value >= containerSize.value),
		size: constrainedSize,
		onResize,
		onResizeEnd
	};
}
var MIN_IO_PANEL_WIDTH = 200;
var LogDetailsPanel_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "LogDetailsPanel",
	props: {
		isOpen: { type: Boolean },
		logEntry: {},
		window: {},
		latestInfo: {},
		panels: {},
		collapsingInputTableColumnName: {},
		collapsingOutputTableColumnName: {},
		isHeaderClickable: { type: Boolean }
	},
	emits: [
		"clickHeader",
		"toggleInputOpen",
		"toggleOutputOpen",
		"collapsingInputTableColumnChanged",
		"collapsingOutputTableColumnChanged"
	],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const locale = useI18n();
		const nodeTypeStore = useNodeTypesStore();
		const ndvStore = useNDVStore();
		const experimentalNdvStore = useExperimentalNdvStore();
		const type = computed(() => nodeTypeStore.getNodeType(__props.logEntry.node.type));
		const consumedTokens = computed(() => getSubtreeTotalConsumedTokens(__props.logEntry, false));
		const isTriggerNode = computed(() => type.value?.group.includes("trigger"));
		const container$8 = useTemplateRef("container");
		const resizer = useResizablePanel("N8N_LOGS_INPUT_PANEL_WIDTH", {
			container: container$8,
			defaultSize: (size) => size / 2,
			minSize: MIN_IO_PANEL_WIDTH,
			maxSize: (size) => size - MIN_IO_PANEL_WIDTH,
			allowCollapse: true,
			allowFullSize: true
		});
		const shouldResize = computed(() => __props.panels === LOG_DETAILS_PANEL_STATE.BOTH);
		const searchShortcutPriorityPanel = computed(() => ndvStore.isNDVOpen || experimentalNdvStore.isMapperOpen ? void 0 : __props.panels === LOG_DETAILS_PANEL_STATE.INPUT ? "input" : "output");
		function handleResizeEnd() {
			if (resizer.isCollapsed.value) emit("toggleInputOpen", false);
			if (resizer.isFullSize.value) emit("toggleOutputOpen", false);
			resizer.onResizeEnd();
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				ref_key: "container",
				ref: container$8,
				class: normalizeClass(_ctx.$style.container),
				"data-test-id": "log-details"
			}, [createVNode(LogsPanelHeader_default, {
				"data-test-id": "log-details-header",
				class: normalizeClass(_ctx.$style.header),
				"is-clickable": _ctx.isHeaderClickable,
				onClick: _cache[2] || (_cache[2] = ($event) => emit("clickHeader"))
			}, {
				title: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.title) }, [
					createVNode(NodeIcon_default, {
						"node-type": type.value,
						size: 16,
						class: normalizeClass(_ctx.$style.icon)
					}, null, 8, ["node-type", "class"]),
					createVNode(LogsViewNodeName_default, {
						name: _ctx.latestInfo?.name ?? _ctx.logEntry.node.name,
						"is-deleted": _ctx.latestInfo?.deleted ?? false
					}, null, 8, ["name", "is-deleted"]),
					_ctx.isOpen && _ctx.logEntry.runData !== void 0 ? (openBlock(), createBlock(LogsViewExecutionSummary_default, {
						key: 0,
						class: normalizeClass(_ctx.$style.executionSummary),
						status: _ctx.logEntry.runData.executionStatus ?? "unknown",
						"consumed-tokens": consumedTokens.value,
						"start-time": _ctx.logEntry.runData.startTime,
						"time-took": _ctx.logEntry.runData.executionTime
					}, null, 8, [
						"class",
						"status",
						"consumed-tokens",
						"start-time",
						"time-took"
					])) : createCommentVNode("", true)
				], 2)]),
				actions: withCtx(() => [_ctx.isOpen && !isTriggerNode.value && !unref(isPlaceholderLog)(_ctx.logEntry) ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.actions)
				}, [createVNode(KeyboardShortcutTooltip_default, {
					label: unref(locale).baseText("generic.shortcutHint"),
					shortcut: { keys: ["i"] }
				}, {
					default: withCtx(() => [createVNode(unref(N8nButton_default), {
						size: "mini",
						type: "secondary",
						class: normalizeClass(_ctx.panels === unref(LOG_DETAILS_PANEL_STATE).OUTPUT ? "" : _ctx.$style.pressed),
						onClick: _cache[0] || (_cache[0] = withModifiers(($event) => emit("toggleInputOpen"), ["stop"]))
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("logs.details.header.actions.input")), 1)]),
						_: 1
					}, 8, ["class"])]),
					_: 1
				}, 8, ["label"]), createVNode(KeyboardShortcutTooltip_default, {
					label: unref(locale).baseText("generic.shortcutHint"),
					shortcut: { keys: ["o"] }
				}, {
					default: withCtx(() => [createVNode(unref(N8nButton_default), {
						size: "mini",
						type: "secondary",
						class: normalizeClass(_ctx.panels === unref(LOG_DETAILS_PANEL_STATE).INPUT ? "" : _ctx.$style.pressed),
						onClick: _cache[1] || (_cache[1] = withModifiers(($event) => emit("toggleOutputOpen"), ["stop"]))
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("logs.details.header.actions.output")), 1)]),
						_: 1
					}, 8, ["class"])]),
					_: 1
				}, 8, ["label"])], 2)) : createCommentVNode("", true), renderSlot(_ctx.$slots, "actions")]),
				_: 3
			}, 8, ["class", "is-clickable"]), _ctx.isOpen ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.content),
				"data-test-id": "logs-details-body"
			}, [unref(isPlaceholderLog)(_ctx.logEntry) ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.placeholder)
			}, [createVNode(unref(N8nText_default), { color: "text-base" }, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("ndv.output.runNodeHint")), 1)]),
				_: 1
			})], 2)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [!isTriggerNode.value && _ctx.panels !== unref(LOG_DETAILS_PANEL_STATE).OUTPUT ? (openBlock(), createBlock(unref(N8nResizeWrapper_default), {
				key: 0,
				class: normalizeClass({
					[_ctx.$style.inputResizer]: true,
					[_ctx.$style.collapsed]: unref(resizer).isCollapsed.value,
					[_ctx.$style.full]: unref(resizer).isFullSize.value
				}),
				width: unref(resizer).size.value,
				style: normalizeStyle(shouldResize.value ? { width: `${unref(resizer).size.value ?? 0}px` } : void 0),
				"supported-directions": ["right"],
				"is-resizing-enabled": shouldResize.value,
				window: _ctx.window,
				onResize: unref(resizer).onResize,
				onResizeend: handleResizeEnd
			}, {
				default: withCtx(() => [createVNode(LogsViewRunData_default, {
					"data-test-id": "log-details-input",
					"pane-type": "input",
					title: unref(locale).baseText("logs.details.header.actions.input"),
					"log-entry": _ctx.logEntry,
					"collapsing-table-column-name": _ctx.collapsingInputTableColumnName,
					"search-shortcut": searchShortcutPriorityPanel.value === "input" ? "ctrl+f" : void 0,
					onCollapsingTableColumnChanged: _cache[3] || (_cache[3] = ($event) => emit("collapsingInputTableColumnChanged", $event))
				}, null, 8, [
					"title",
					"log-entry",
					"collapsing-table-column-name",
					"search-shortcut"
				])]),
				_: 1
			}, 8, [
				"class",
				"width",
				"style",
				"is-resizing-enabled",
				"window",
				"onResize"
			])) : createCommentVNode("", true), isTriggerNode.value || _ctx.panels !== unref(LOG_DETAILS_PANEL_STATE).INPUT ? (openBlock(), createBlock(LogsViewRunData_default, {
				key: 1,
				"data-test-id": "log-details-output",
				"pane-type": "output",
				class: normalizeClass(_ctx.$style.outputPanel),
				title: unref(locale).baseText("logs.details.header.actions.output"),
				"log-entry": _ctx.logEntry,
				"collapsing-table-column-name": _ctx.collapsingOutputTableColumnName,
				"search-shortcut": searchShortcutPriorityPanel.value === "output" ? "ctrl+f" : void 0,
				onCollapsingTableColumnChanged: _cache[4] || (_cache[4] = ($event) => emit("collapsingOutputTableColumnChanged", $event))
			}, null, 8, [
				"class",
				"title",
				"log-entry",
				"collapsing-table-column-name",
				"search-shortcut"
			])) : createCommentVNode("", true)], 64))], 2)) : createCommentVNode("", true)], 2);
		};
	}
});
var LogDetailsPanel_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_w6lwl_123",
	header: "_header_w6lwl_132",
	actions: "_actions_w6lwl_136",
	pressed: "_pressed_w6lwl_142",
	title: "_title_w6lwl_146",
	icon: "_icon_w6lwl_152",
	executionSummary: "_executionSummary_w6lwl_156",
	content: "_content_w6lwl_160",
	outputPanel: "_outputPanel_w6lwl_168",
	inputResizer: "_inputResizer_w6lwl_173",
	collapsed: "_collapsed_w6lwl_177",
	full: "_full_w6lwl_177",
	placeholder: "_placeholder_w6lwl_181"
};
var LogDetailsPanel_default = /* @__PURE__ */ __plugin_vue_export_helper_default(LogDetailsPanel_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": LogDetailsPanel_vue_vue_type_style_index_0_lang_module_default }]]);
var LogsPanelActions_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "LogsPanelActions",
	props: {
		isOpen: { type: Boolean },
		isSyncSelectionEnabled: { type: Boolean },
		showToggleButton: { type: Boolean },
		showPopOutButton: { type: Boolean }
	},
	emits: [
		"popOut",
		"toggleOpen",
		"toggleSyncSelection"
	],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const locales = useI18n();
		const popOutButtonText = computed(() => locales.baseText("runData.panel.actions.popOut"));
		const toggleButtonText = computed(() => locales.baseText(__props.isOpen ? "runData.panel.actions.collapse" : "runData.panel.actions.open"));
		const menuItems = computed(() => [{
			id: "toggleSyncSelection",
			label: locales.baseText("runData.panel.actions.sync"),
			checked: __props.isSyncSelectionEnabled
		}, ...__props.showPopOutButton ? [{
			id: "popOut",
			label: popOutButtonText.value
		}] : []]);
		function handleSelectMenuItem(selected) {
			switch (selected) {
				case "popOut":
					emit(selected);
					return;
				case "toggleSyncSelection":
					emit(selected);
					return;
			}
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [
				!_ctx.isOpen && _ctx.showPopOutButton ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 0,
					content: popOutButtonText.value
				}, {
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						icon: "pop-out",
						type: "tertiary",
						text: "",
						size: "small",
						"icon-size": "medium",
						"aria-label": popOutButtonText.value,
						onClick: _cache[0] || (_cache[0] = withModifiers(($event) => emit("popOut"), ["stop"]))
					}, null, 8, ["aria-label"])]),
					_: 1
				}, 8, ["content"])) : createCommentVNode("", true),
				_ctx.isOpen ? (openBlock(), createBlock(unref(N8nActionDropdown_default), {
					key: 1,
					"icon-size": "small",
					"activator-icon": "ellipsis",
					"activator-size": "small",
					items: menuItems.value,
					teleported: false,
					onSelect: handleSelectMenuItem,
					onClick: _cache[1] || (_cache[1] = withModifiers(() => {}, ["stop"]))
				}, null, 8, ["items"])) : createCommentVNode("", true),
				_ctx.showToggleButton ? (openBlock(), createBlock(KeyboardShortcutTooltip_default, {
					key: `tooltip-${_ctx.isOpen}`,
					label: unref(locales).baseText("generic.shortcutHint"),
					shortcut: { keys: ["l"] }
				}, {
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						type: "tertiary",
						text: "",
						size: "small",
						"icon-size": "medium",
						icon: _ctx.isOpen ? "chevron-down" : "chevron-up",
						"aria-label": toggleButtonText.value,
						onClick: _cache[2] || (_cache[2] = withModifiers(($event) => emit("toggleOpen"), ["stop"]))
					}, null, 8, ["icon", "aria-label"])]),
					_: 1
				}, 8, ["label"])) : createCommentVNode("", true)
			], 2);
		};
	}
});
var LogsPanelActions_vue_vue_type_style_index_0_lang_module_default = { container: "_container_yw9ej_123" };
var LogsPanelActions_default = /* @__PURE__ */ __plugin_vue_export_helper_default(LogsPanelActions_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": LogsPanelActions_vue_vue_type_style_index_0_lang_module_default }]]);
function useLogsSelection(execution, tree, flatLogEntries, toggleExpand) {
	const telemetry = useTelemetry();
	const manualLogEntrySelection = shallowRef({ type: "initial" });
	const nodeIdToSelect = shallowRef();
	const isExecutionStopped = computed(() => execution.value?.stoppedAt !== void 0);
	const selected = computed(() => findSelectedLogEntry(manualLogEntrySelection.value, tree.value, !isExecutionStopped.value));
	const logsStore = useLogsStore();
	const uiStore = useUIStore();
	const canvasStore = useCanvasStore();
	const workflowsStore = useWorkflowsStore();
	function syncSelectionToCanvasIfEnabled(value) {
		if (!logsStore.isLogSelectionSyncedWithCanvas) return;
		canvasEventBus.emit("nodes:select", {
			ids: [value.node.id],
			panIntoView: true
		});
	}
	function select(value) {
		manualLogEntrySelection.value = value === void 0 ? { type: "none" } : {
			type: "selected",
			entry: value
		};
		if (value) {
			syncSelectionToCanvasIfEnabled(value);
			telemetry.track("User selected node in log view", {
				node_type: value.node.type,
				node_id: value.node.id,
				execution_id: execution.value?.id,
				workflow_id: execution.value?.workflowData.id,
				subworkflow_depth: getDepth(value)
			});
		}
	}
	function selectPrev() {
		const entries = flatLogEntries.value;
		if (entries.length === 0) return;
		const prevEntry = selected.value ? getEntryAtRelativeIndex(entries, selected.value.id, -1) ?? entries[0] : entries[entries.length - 1];
		manualLogEntrySelection.value = {
			type: "selected",
			entry: prevEntry
		};
		syncSelectionToCanvasIfEnabled(prevEntry);
	}
	function selectNext() {
		const entries = flatLogEntries.value;
		if (entries.length === 0) return;
		const nextEntry = selected.value ? getEntryAtRelativeIndex(entries, selected.value.id, 1) ?? entries[entries.length - 1] : entries[0];
		manualLogEntrySelection.value = {
			type: "selected",
			entry: nextEntry
		};
		syncSelectionToCanvasIfEnabled(nextEntry);
	}
	watch(selected, (sel) => {
		if (sel) logsStore.setSubNodeSelected(isSubNodeLog(sel));
	}, { immediate: true });
	watch([() => uiStore.lastSelectedNode, () => logsStore.isLogSelectionSyncedWithCanvas], ([selectedOnCanvas, shouldSync]) => {
		const selectedNodeId = selectedOnCanvas ? workflowsStore.nodesByName[selectedOnCanvas]?.id : void 0;
		nodeIdToSelect.value = shouldSync && !canvasStore.hasRangeSelection && selected.value?.node.id !== selectedNodeId ? selectedNodeId : void 0;
	}, { immediate: true });
	watch([tree, nodeIdToSelect], ([latestTree, id]) => {
		if (id === void 0) return;
		const entry = findLogEntryRec((e) => e.node.id === id, latestTree);
		if (!entry) return;
		nodeIdToSelect.value = void 0;
		manualLogEntrySelection.value = {
			type: "selected",
			entry
		};
		let parent = entry.parent;
		while (parent !== void 0) {
			toggleExpand(parent, true);
			parent = parent.parent;
		}
	}, { immediate: true });
	return {
		selected,
		select,
		selectPrev,
		selectNext
	};
}
function isStyle(node) {
	return node instanceof HTMLStyleElement || node instanceof HTMLLinkElement && node.rel === "stylesheet";
}
function syncStyleMutations(destination, mutations) {
	const currentStyles = destination.document.head.querySelectorAll("style, link[rel=\"stylesheet\"]");
	for (const mutation of mutations) {
		for (const node of mutation.addedNodes) if (isStyle(node)) destination.document.head.appendChild(node.cloneNode(true));
		for (const node of mutation.removedNodes) if (isStyle(node)) {
			for (const found of currentStyles) if (found.isEqualNode(node)) found.remove();
		}
	}
}
function copyFavicon(source, target) {
	const iconUrl = source.document.querySelector("link[rel=icon]")?.getAttribute("href");
	if (iconUrl) {
		const link = target.document.createElement("link");
		link.setAttribute("rel", "icon");
		link.setAttribute("href", iconUrl);
		target.document.head.appendChild(link);
	}
}
function usePopOutWindow({ title: title$3, container: container$8, content: content$2, initialHeight, initialWidth, shouldPopOut, onRequestClose }) {
	const popOutWindow = ref();
	const isUnmounting = ref(false);
	const canPopOut = computed(() => window.parent === window);
	const isPoppedOut = computed(() => !!popOutWindow.value);
	const tooltipContainer = computed(() => isPoppedOut.value ? content$2.value ?? void 0 : void 0);
	const observer = new MutationObserver((mutations) => {
		if (popOutWindow.value) syncStyleMutations(popOutWindow.value, mutations);
	});
	const documentTitle = useDocumentTitle(popOutWindow);
	observer.observe(document.head, {
		childList: true,
		subtree: true
	});
	provide(PopOutWindowKey, popOutWindow);
	useProvideTooltipAppendTo(tooltipContainer);
	async function showPopOut() {
		if (!content$2.value) return;
		if (!popOutWindow.value) {
			const options = `popup=yes,width=${initialWidth},height=${initialHeight},left=100,top=100,toolbar=no,menubar=no,scrollbars=yes,resizable=yes`;
			popOutWindow.value = window.open("", "_blank", options) ?? void 0;
		}
		if (!popOutWindow.value) return;
		copyFavicon(window, popOutWindow.value);
		for (const styleSheet of [...document.styleSheets]) try {
			const cssRules = [...styleSheet.cssRules].map((rule) => rule.cssText).join("");
			const style = document.createElement("style");
			style.textContent = cssRules;
			popOutWindow.value.document.head.appendChild(style);
		} catch (e) {
			const link = document.createElement("link");
			link.rel = "stylesheet";
			link.type = styleSheet.type;
			link.media = styleSheet.media;
			link.href = styleSheet.href;
			popOutWindow.value.document.head.appendChild(link);
		}
		popOutWindow.value.document.body.append(content$2.value);
		popOutWindow.value.addEventListener("pagehide", () => !isUnmounting.value && onRequestClose());
	}
	function hidePopOut() {
		popOutWindow.value?.close();
		popOutWindow.value = void 0;
		if (content$2.value) container$8.value?.appendChild(content$2.value);
	}
	watch(shouldPopOut, (value) => value ? requestAnimationFrame(showPopOut) : hidePopOut(), { immediate: true });
	watch([title$3, popOutWindow], ([newTitle, win]) => {
		if (win) documentTitle.set(newTitle);
	}, { immediate: true });
	onScopeDispose(() => {
		observer.disconnect();
	});
	onBeforeUnmount(() => {
		isUnmounting.value = true;
		if (popOutWindow.value) {
			popOutWindow.value.close();
			onRequestClose();
		}
	});
	return {
		canPopOut,
		isPoppedOut,
		popOutWindow
	};
}
var INITIAL_POPUP_HEIGHT = 400;
var COLLAPSED_PANEL_HEIGHT = 32;
function useLogsPanelLayout(workflowName, popOutContainer, popOutContent$1, container$8, logsContainer$1) {
	const logsStore = useLogsStore();
	const telemetry = useTelemetry();
	const resizer = useResizablePanel(LOCAL_STORAGE_PANEL_HEIGHT, {
		container: document.body,
		position: "bottom",
		snap: false,
		defaultSize: (size) => size * .3,
		minSize: 160,
		maxSize: (size) => size * .75,
		allowCollapse: true
	});
	const chatPanelResizer = useResizablePanel(LOCAL_STORAGE_PANEL_WIDTH, {
		container: container$8,
		defaultSize: (size) => Math.min(800, size * .3),
		minSize: 240,
		maxSize: (size) => size * .8
	});
	const overviewPanelResizer = useResizablePanel(LOCAL_STORAGE_OVERVIEW_PANEL_WIDTH, {
		container: logsContainer$1,
		defaultSize: (size) => Math.min(240, size * .2),
		minSize: 80,
		maxSize: 500,
		allowFullSize: true
	});
	const isOpen = computed(() => logsStore.isOpen ? !resizer.isCollapsed.value : resizer.isResizing.value && resizer.size.value > 0);
	const isCollapsingDetailsPanel = computed(() => overviewPanelResizer.isFullSize.value);
	const popOutWindowTitle = computed(() => `Logs - ${workflowName.value}`);
	const shouldPopOut = computed(() => logsStore.state === LOGS_PANEL_STATE.FLOATING);
	const { canPopOut, isPoppedOut, popOutWindow } = usePopOutWindow({
		title: popOutWindowTitle,
		initialHeight: INITIAL_POPUP_HEIGHT,
		initialWidth: window.document.body.offsetWidth * .8,
		container: popOutContainer,
		content: popOutContent$1,
		shouldPopOut,
		onRequestClose: () => {
			if (!isOpen.value) return;
			telemetry.track("User toggled log view", { new_state: "attached" });
			logsStore.setPreferPoppedOut(false);
		}
	});
	function handleToggleOpen(open) {
		const wasOpen = logsStore.isOpen;
		if (open === wasOpen) return;
		logsStore.toggleOpen(open);
		telemetry.track("User toggled log view", { new_state: wasOpen ? "collapsed" : "attached" });
	}
	function handlePopOut() {
		telemetry.track("User toggled log view", { new_state: "floating" });
		logsStore.toggleOpen(true);
		logsStore.setPreferPoppedOut(true);
	}
	function handleResizeEnd() {
		if (!logsStore.isOpen && !resizer.isCollapsed.value) handleToggleOpen(true);
		if (resizer.isCollapsed.value) handleToggleOpen(false);
		resizer.onResizeEnd();
	}
	watch([
		() => logsStore.state,
		resizer.size,
		isPoppedOut
	], ([state, height]) => {
		const updatedHeight = state === LOGS_PANEL_STATE.FLOATING ? 0 : state === LOGS_PANEL_STATE.ATTACHED ? height : COLLAPSED_PANEL_HEIGHT;
		if (state === LOGS_PANEL_STATE.FLOATING) popOutWindow?.value?.document.documentElement.style.setProperty("--logs-panel--height", "100vh");
		else document.documentElement.style.setProperty("--logs-panel--height", `${updatedHeight}px`);
		logsStore.setHeight(updatedHeight);
	}, { immediate: true });
	onBeforeUnmount(() => logsStore.setHeight(0));
	return {
		height: resizer.size,
		chatPanelWidth: chatPanelResizer.size,
		overviewPanelWidth: overviewPanelResizer.size,
		canPopOut,
		isOpen,
		isCollapsingDetailsPanel,
		isPoppedOut,
		isOverviewPanelFullWidth: overviewPanelResizer.isFullSize,
		popOutWindow,
		onToggleOpen: handleToggleOpen,
		onPopOut: handlePopOut,
		onResize: resizer.onResize,
		onResizeEnd: handleResizeEnd,
		onChatPanelResize: chatPanelResizer.onResize,
		onChatPanelResizeEnd: chatPanelResizer.onResizeEnd,
		onOverviewPanelResize: overviewPanelResizer.onResize,
		onOverviewPanelResizeEnd: overviewPanelResizer.onResizeEnd
	};
}
var LogsViewKeyboardEventListener_default = /* @__PURE__ */ defineComponent({
	__name: "LogsViewKeyboardEventListener",
	props: {
		keyMap: {},
		container: {}
	},
	setup(__props) {
		const popOutWindow = inject(PopOutWindowKey, ref());
		const activeElement = useActiveElement({ window: popOutWindow?.value });
		const isBlurred = computed(() => {
			if (popOutWindow?.value) return popOutWindow.value.document.activeElement === null;
			return !activeElement.value || !__props.container || !__props.container.contains(activeElement.value) && __props.container !== activeElement.value;
		});
		useKeybindings(toRef(() => __props.keyMap), { disabled: isBlurred });
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div");
		};
	}
});
var LogsPanel_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "LogsPanel",
	props: { isReadOnly: {
		type: Boolean,
		default: false
	} },
	setup(__props) {
		const props = __props;
		const container$8 = useTemplateRef("container");
		const logsContainer$1 = useTemplateRef("logsContainer");
		const popOutContainer = useTemplateRef("popOutContainer");
		const popOutContent$1 = useTemplateRef("popOutContent");
		const logsStore = useLogsStore();
		const ndvStore = useNDVStore();
		const workflowsStore = useWorkflowsStore();
		const { height, chatPanelWidth, overviewPanelWidth, canPopOut, isOpen, isPoppedOut, isCollapsingDetailsPanel, isOverviewPanelFullWidth, popOutWindow, onResize, onResizeEnd, onToggleOpen, onPopOut, onChatPanelResize, onChatPanelResizeEnd, onOverviewPanelResize, onOverviewPanelResizeEnd } = useLogsPanelLayout(computed(() => workflowsStore.workflow.name), popOutContainer, popOutContent$1, container$8, logsContainer$1);
		const { currentSessionId, messages: messages$1, previousChatMessages, sendMessage, refreshSession, displayExecution } = useChatState(props.isReadOnly);
		const { entries, execution, hasChat, latestNodeNameById, resetExecutionData, loadSubExecution } = useLogsExecutionData({ isEnabled: isOpen });
		const { flatLogEntries, toggleExpanded } = useLogsTreeExpand(entries, loadSubExecution);
		const { selected, select, selectNext, selectPrev } = useLogsSelection(execution, entries, flatLogEntries, toggleExpanded);
		const inputTableColumnCollapsing = ref();
		const outputTableColumnCollapsing = ref();
		const isLogDetailsOpen = computed(() => isOpen.value && selected.value !== void 0);
		const isLogDetailsVisuallyOpen = computed(() => isLogDetailsOpen.value && !isCollapsingDetailsPanel.value);
		const logsPanelActionsProps = computed(() => ({
			isOpen: isOpen.value,
			isSyncSelectionEnabled: logsStore.isLogSelectionSyncedWithCanvas,
			showToggleButton: !isPoppedOut.value,
			showPopOutButton: canPopOut.value && !isPoppedOut.value,
			onPopOut,
			onToggleOpen,
			onToggleSyncSelection: logsStore.toggleLogSelectionSync
		}));
		const inputCollapsingColumnName = computed(() => inputTableColumnCollapsing.value?.nodeName === selected.value?.node.name ? inputTableColumnCollapsing.value?.columnName ?? null : null);
		const outputCollapsingColumnName = computed(() => outputTableColumnCollapsing.value?.nodeName === selected.value?.node.name ? outputTableColumnCollapsing.value?.columnName ?? null : null);
		const keyMap = computed(() => ({
			j: selectNext,
			k: selectPrev,
			Escape: () => select(void 0),
			ArrowDown: selectNext,
			ArrowUp: selectPrev,
			Space: () => selected.value && toggleExpanded(selected.value),
			Enter: () => selected.value && handleOpenNdv(selected.value),
			...isPoppedOut.value ? {
				i: () => logsStore.toggleInputOpen(),
				o: () => logsStore.toggleOutputOpen()
			} : {}
		}));
		function handleResizeOverviewPanelEnd() {
			if (isOverviewPanelFullWidth.value) select(void 0);
			onOverviewPanelResizeEnd();
		}
		function handleOpenNdv(treeNode) {
			ndvStore.setActiveNodeName(treeNode.node.name, "logs_view");
			nextTick(() => {
				const source = treeNode.runData?.source[0];
				const inputBranch = source?.previousNodeOutput ?? 0;
				ndvEventBus.emit("updateInputNodeName", source?.previousNode);
				ndvEventBus.emit("setInputBranchIndex", inputBranch);
				ndvStore.setOutputRunIndex(treeNode.runIndex);
			});
		}
		function handleChangeInputTableColumnCollapsing(columnName) {
			inputTableColumnCollapsing.value = columnName && selected.value ? {
				nodeName: selected.value.node.name,
				columnName
			} : void 0;
		}
		function handleChangeOutputTableColumnCollapsing(columnName) {
			outputTableColumnCollapsing.value = columnName && selected.value ? {
				nodeName: selected.value.node.name,
				columnName
			} : void 0;
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				ref_key: "popOutContainer",
				ref: popOutContainer,
				"data-test-id": "logs-panel"
			}, [(openBlock(), createBlock(LogsViewKeyboardEventListener_default, {
				key: String(!!unref(popOutWindow)),
				"key-map": keyMap.value,
				container: unref(container$8)
			}, null, 8, ["key-map", "container"])), createBaseVNode("div", {
				ref_key: "popOutContent",
				ref: popOutContent$1,
				class: normalizeClass([_ctx.$style.popOutContent, unref(isPoppedOut) ? _ctx.$style.poppedOut : ""])
			}, [createVNode(unref(N8nResizeWrapper_default), {
				height: unref(isPoppedOut) ? void 0 : unref(height),
				"supported-directions": ["top"],
				"is-resizing-enabled": !unref(isPoppedOut),
				class: normalizeClass(_ctx.$style.resizeWrapper),
				style: normalizeStyle({ height: unref(isOpen) && !unref(isPoppedOut) ? `${unref(height)}px` : "auto" }),
				onResize: unref(onResize),
				onResizeend: unref(onResizeEnd)
			}, {
				default: withCtx(() => [createBaseVNode("div", {
					ref_key: "container",
					ref: container$8,
					class: normalizeClass(_ctx.$style.container),
					tabindex: "-1"
				}, [unref(hasChat) && (!props.isReadOnly || unref(messages$1).length > 0) ? (openBlock(), createBlock(unref(N8nResizeWrapper_default), {
					key: 0,
					"supported-directions": ["right"],
					"is-resizing-enabled": unref(isOpen),
					width: unref(chatPanelWidth),
					style: normalizeStyle({ width: `${unref(chatPanelWidth)}px` }),
					class: normalizeClass(_ctx.$style.chat),
					window: unref(popOutWindow),
					onResize: unref(onChatPanelResize),
					onResizeend: unref(onChatPanelResizeEnd)
				}, {
					default: withCtx(() => [(openBlock(), createBlock(ChatMessagesPanel_default, {
						key: `canvas-chat-${unref(currentSessionId)}${unref(isPoppedOut) ? "-pop-out" : ""}`,
						"data-test-id": "canvas-chat",
						"is-open": unref(isOpen),
						"is-read-only": _ctx.isReadOnly,
						messages: unref(messages$1),
						"session-id": unref(currentSessionId),
						"past-chat-messages": unref(previousChatMessages),
						"show-close-button": false,
						"is-new-logs-enabled": true,
						"is-header-clickable": !unref(isPoppedOut),
						onClose: unref(onToggleOpen),
						onRefreshSession: unref(refreshSession),
						onDisplayExecution: unref(displayExecution),
						onSendMessage: unref(sendMessage),
						onClickHeader: unref(onToggleOpen)
					}, null, 8, [
						"is-open",
						"is-read-only",
						"messages",
						"session-id",
						"past-chat-messages",
						"is-header-clickable",
						"onClose",
						"onRefreshSession",
						"onDisplayExecution",
						"onSendMessage",
						"onClickHeader"
					]))]),
					_: 1
				}, 8, [
					"is-resizing-enabled",
					"width",
					"style",
					"class",
					"window",
					"onResize",
					"onResizeend"
				])) : createCommentVNode("", true), createBaseVNode("div", {
					ref_key: "logsContainer",
					ref: logsContainer$1,
					class: normalizeClass(_ctx.$style.logsContainer)
				}, [createVNode(unref(N8nResizeWrapper_default), {
					class: normalizeClass(_ctx.$style.overviewResizer),
					width: unref(overviewPanelWidth),
					style: normalizeStyle({ width: isLogDetailsVisuallyOpen.value ? `${unref(overviewPanelWidth)}px` : "" }),
					"supported-directions": ["right"],
					"is-resizing-enabled": isLogDetailsOpen.value,
					window: unref(popOutWindow),
					onResize: unref(onOverviewPanelResize),
					onResizeend: handleResizeOverviewPanelEnd
				}, {
					default: withCtx(() => [createVNode(LogsOverviewPanel_default, {
						class: normalizeClass(_ctx.$style.logsOverview),
						"is-open": unref(isOpen),
						"is-read-only": _ctx.isReadOnly,
						"is-compact": isLogDetailsVisuallyOpen.value,
						selected: unref(selected),
						execution: unref(execution),
						entries: unref(entries),
						"latest-node-info": unref(latestNodeNameById),
						"flat-log-entries": unref(flatLogEntries),
						"is-header-clickable": !unref(isPoppedOut),
						onClickHeader: unref(onToggleOpen),
						onSelect: unref(select),
						onClearExecutionData: unref(resetExecutionData),
						onToggleExpanded: unref(toggleExpanded),
						onOpenNdv: handleOpenNdv
					}, {
						actions: withCtx(() => [!isLogDetailsVisuallyOpen.value ? (openBlock(), createBlock(LogsPanelActions_default, normalizeProps(mergeProps({ key: 0 }, logsPanelActionsProps.value)), null, 16)) : createCommentVNode("", true)]),
						_: 1
					}, 8, [
						"class",
						"is-open",
						"is-read-only",
						"is-compact",
						"selected",
						"execution",
						"entries",
						"latest-node-info",
						"flat-log-entries",
						"is-header-clickable",
						"onClickHeader",
						"onSelect",
						"onClearExecutionData",
						"onToggleExpanded"
					])]),
					_: 1
				}, 8, [
					"class",
					"width",
					"style",
					"is-resizing-enabled",
					"window",
					"onResize"
				]), isLogDetailsVisuallyOpen.value && unref(selected) ? (openBlock(), createBlock(LogDetailsPanel_default, {
					key: 0,
					class: normalizeClass(_ctx.$style.logDetails),
					"is-open": unref(isOpen),
					"log-entry": unref(selected),
					window: unref(popOutWindow),
					"latest-info": unref(latestNodeNameById)[unref(selected).node.id],
					panels: unref(logsStore).detailsState,
					"collapsing-input-table-column-name": inputCollapsingColumnName.value,
					"collapsing-output-table-column-name": outputCollapsingColumnName.value,
					"is-header-clickable": !unref(isPoppedOut),
					onClickHeader: unref(onToggleOpen),
					onToggleInputOpen: unref(logsStore).toggleInputOpen,
					onToggleOutputOpen: unref(logsStore).toggleOutputOpen,
					onCollapsingInputTableColumnChanged: handleChangeInputTableColumnCollapsing,
					onCollapsingOutputTableColumnChanged: handleChangeOutputTableColumnCollapsing
				}, {
					actions: withCtx(() => [isLogDetailsVisuallyOpen.value ? (openBlock(), createBlock(LogsPanelActions_default, normalizeProps(mergeProps({ key: 0 }, logsPanelActionsProps.value)), null, 16)) : createCommentVNode("", true)]),
					_: 1
				}, 8, [
					"class",
					"is-open",
					"log-entry",
					"window",
					"latest-info",
					"panels",
					"collapsing-input-table-column-name",
					"collapsing-output-table-column-name",
					"is-header-clickable",
					"onClickHeader",
					"onToggleInputOpen",
					"onToggleOutputOpen"
				])) : createCommentVNode("", true)], 2)], 2)]),
				_: 1
			}, 8, [
				"height",
				"is-resizing-enabled",
				"class",
				"style",
				"onResize",
				"onResizeend"
			])], 2)], 512);
		};
	}
});
var LogsPanel_vue_vue_type_style_index_0_lang_module_default = {
	popOutContent: "_popOutContent_17exv_123",
	resizeWrapper: "_resizeWrapper_17exv_129",
	poppedOut: "_poppedOut_17exv_136",
	container: "_container_17exv_140",
	chat: "_chat_17exv_149",
	logsContainer: "_logsContainer_17exv_153",
	overviewResizer: "_overviewResizer_17exv_163",
	logsOverview: "_logsOverview_17exv_171",
	logsDetails: "_logsDetails_17exv_175"
};
var LogsPanel_default = /* @__PURE__ */ __plugin_vue_export_helper_default(LogsPanel_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": LogsPanel_vue_vue_type_style_index_0_lang_module_default }]]);
export { LogsPanel_default as t };
