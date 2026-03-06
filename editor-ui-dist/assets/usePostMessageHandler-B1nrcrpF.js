import { o as __toESM } from "./chunk-r2Y0G7H8.js";
import { C as computed, Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, G as nextTick, Gt as unref, Ht as toRefs, I as guardReactiveProps, It as ref, J as onBeforeUnmount, M as createVNode, Nt as onScopeDispose, P as defineComponent, Q as onUnmounted, T as createBlock, Ut as toValue, Vt as toRef, W as mergeProps, Z as onMounted, _ as Fragment, _t as watch, at as renderSlot, bn as normalizeStyle, bt as withCtx, ct as resolveDynamicComponent, et as openBlock, f as vModelText, h as withModifiers, i as createApp, it as renderList, j as createTextVNode, jt as isRef, k as createSlots, m as withKeys, mt as useTemplateRef, nt as provide, p as vShow, st as resolveDirective, vn as normalizeClass, w as createBaseVNode, xt as withDirectives, yn as normalizeProps, z as inject, zt as shallowRef } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { A as useFileDialog, B as useTimestamp, S as useClipboard, b as useActiveElement, bt as I18nT, yt as useI18n } from "./_MapCache-B9vJNOCd.js";
import { Bi as N8nText_default, Ci as useRouter, Di as N8nTooltip_default, Et as N8nActionDropdown_default, Hi as N8nIcon_default, I as N8nResizeWrapper_default, Ii as useProvideTooltipAppendTo, Si as useRoute, Vi as N8nButton_default, hi as N8nLink_default, ji as N8nIconButton_default, z as N8nRadioButtons_default } from "./src-DiEfDBW_.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import { Bn as getNodesWithNormalizedPosition, Br as createWorkflowDocumentId, Bt as injectWorkflowState, C as waitingNodeTooltip, Cr as useCanvasStore, Ft as useNodeHelpers, It as useTelemetry, Pt as useEnvironmentsStore, Qr as v4_default, Sr as useExternalHooks, Ti as useHistoryStore, Tr as useSourceControlStore, Ur as useWorkflowDocumentStore, Vr as disposeWorkflowDocumentStore, Wt as useProjectsStore, at as useCredentialsStore, br as useToast, d as isChatNode, dn as ndvEventBus, js as useSettingsStore, ln as useBuilderStore, p as buildExecutionResponseFromSchema, pn as useDocumentTitle, q as getSampleWorkflowByTemplateId, r as useUIStore, s as useWorkflowsStore, tl as getScrollbarWidth, tt as require_upperFirst, w as useNodeTypesStore, zr as useWorkflowsListStore, zt as useNDVStore } from "./users.store-CeIiqJPu.js";
import { ca as displayParameter, el as EnterpriseEditionFeature, is as VIEWS, pa as getNodeParameters, wc as PopOutWindowKey } from "./constants-BDDzQuZL.js";
import { r as useRootStore } from "./_baseOrderBy-C5llb9iP.js";
import { t as useExecutionsStore } from "./executions.store-BMPiLOvN.js";
import { c as close_default, n as RunDataItemCount_default, t as RunData_default } from "./RunData-CmHtl5qv.js";
import { t as NDVEmptyState_default } from "./NDVEmptyState-jHkX89aA.js";
import { t as useExternalSecretsStore } from "./externalSecrets.ee.store-DtsdHH54.js";
import { _ as localStorageSessionIdKey, a as useLogsStore, b as MarkdownRenderer_default, c as LOCAL_STORAGE_PANEL_WIDTH, d as chatEventBus, f as constructChatWebsocketUrl, g as ChatSymbol, h as ChatOptionsSymbol, i as useExperimentalNdvStore, l as LOGS_PANEL_STATE, m as shouldBlockUserInput, n as useParentFolder, o as LOCAL_STORAGE_OVERVIEW_PANEL_WIDTH, p as parseBotChatMessageContent, r as canvasEventBus, s as LOCAL_STORAGE_PANEL_HEIGHT, t as useCanvasOperations, u as LOG_DETAILS_PANEL_STATE, v as MessageComponentKey, x as Button_default, y as MessageWithButtons_default } from "./useCanvasOperations-6BPR1ILX.js";
import { t as NodeIcon_default } from "./NodeIcon-DV9xFvYB.js";
import { t as useRunWorkflow } from "./useRunWorkflow-7le6oLrp.js";
import { t as KeyboardShortcutTooltip_default } from "./KeyboardShortcutTooltip-DNMCksvF.js";
import { t as useKeybindings } from "./useKeybindings-BzIbxzrU.js";
import { _ as restoreChatHistory, a as LogsViewConsumedTokenCountText_default, c as findLogEntryRec, d as getDepth, f as getEntryAtRelativeIndex, g as isSubNodeLog, h as isPlaceholderLog, i as LogsViewNodeName_default, l as findSelectedLogEntry, m as getTotalConsumedTokens, n as useLogsExecutionData, p as getSubtreeTotalConsumedTokens, r as LogsOverviewRows_default, t as useLogsTreeExpand } from "./useLogsTreeExpand-D8g9ZpWs.js";
import { n as ChatFile_default, t as useResizablePanel } from "./useResizablePanel-BhgWkNh2.js";
import { t as useAITemplatesStarterCollectionStore } from "./aiTemplatesStarterCollection.store-osfPHu6l.js";
import { t as useReadyToRunWorkflowsStore } from "./readyToRunWorkflows.store-B3zlL_sv.js";
import { t as useExecutionDebugging } from "./useExecutionDebugging-DCv9_Idn.js";
function useChatState(isReadOnly, sessionId) {
	const locale = useI18n();
	const workflowsStore = useWorkflowsStore();
	const workflowState = injectWorkflowState();
	const rootStore = useRootStore();
	const logsStore = useLogsStore();
	const router = useRouter();
	const nodeHelpers = useNodeHelpers();
	const nodeTypesStore = useNodeTypesStore();
	const { runWorkflow } = useRunWorkflow({ router });
	const webhookRegistered = ref(false);
	const isRegistering = ref(false);
	const messages = computed(() => logsStore.chatSessionMessages);
	const currentSessionId = computed(() => logsStore.chatSessionId);
	const effectiveSessionId = computed(() => toValue(sessionId) ?? currentSessionId.value);
	const previousChatMessages = computed(() => workflowsStore.getPastChatMessages);
	const chatTriggerNode = computed(() => workflowsStore.allNodes.find(isChatNode) ?? null);
	const getOptionsValue = (parameterName) => {
		const node = chatTriggerNode.value;
		const nodeType = node ? nodeTypesStore.getNodeType(node.type, node.typeVersion) : null;
		if (!node || !nodeType) return;
		const resolvedParams = getNodeParameters(nodeType.properties, node.parameters, true, false, node, nodeType) ?? {};
		const optionsValues = resolvedParams.options ?? {};
		if (parameterName in optionsValues) return optionsValues[parameterName];
		const optionsParam = nodeType.properties.find((prop) => prop.name === "options" && prop.type === "collection" && displayParameter(resolvedParams, prop, node, nodeType));
		for (const opt of optionsParam?.options ?? []) {
			if (opt.name !== parameterName || !("default" in opt)) continue;
			if (displayParameter(optionsValues, opt, node, nodeType, resolvedParams)) return opt.default;
		}
	};
	const isStreamingEnabled = computed(() => getOptionsValue("responseMode") === "streaming");
	const isFileUploadsAllowed = computed(() => getOptionsValue("allowFileUploads") === true);
	const allowedFilesMimeTypesComputed = computed(() => getOptionsValue("allowedFilesMimeTypes"));
	const isWorkflowReadyForChat = computed(() => {
		if (!chatTriggerNode.value) return false;
		if (!workflowsStore.workflowId && !workflowsStore.isNewWorkflow) return false;
		return true;
	});
	const webhookUrl = computed(() => {
		if (!chatTriggerNode.value) return "";
		const workflowId = workflowsStore.workflowId;
		if (!workflowId) return "";
		return `${rootStore.webhookTestUrl}/${workflowId}/${effectiveSessionId.value}`;
	});
	async function registerChatWebhook() {
		if (isRegistering.value || !chatTriggerNode.value) return;
		isRegistering.value = true;
		try {
			workflowState.setWorkflowExecutionData(null);
			workflowState.setActiveExecutionId(void 0);
			const runWorkflowOptions = {
				triggerNode: chatTriggerNode.value.name,
				source: "RunData.ManualChatTrigger",
				sessionId: effectiveSessionId.value
			};
			if (workflowsStore.chatPartialExecutionDestinationNode) {
				runWorkflowOptions.destinationNode = {
					nodeName: workflowsStore.chatPartialExecutionDestinationNode,
					mode: "inclusive"
				};
				workflowsStore.chatPartialExecutionDestinationNode = null;
			}
			await runWorkflow(runWorkflowOptions);
			webhookRegistered.value = true;
		} finally {
			isRegistering.value = false;
		}
	}
	const chatOptionsComputed = computed(() => {
		return {
			webhookUrl: webhookUrl.value,
			webhookConfig: {
				method: "POST",
				headers: { "Content-Type": "application/json" }
			},
			mode: "fullscreen",
			showWindowCloseButton: false,
			showWelcomeScreen: false,
			sessionId: effectiveSessionId.value,
			enableStreaming: isStreamingEnabled.value,
			enableMessageActions: true,
			allowFileUploads: isFileUploadsAllowed.value,
			allowedFilesMimeTypes: allowedFilesMimeTypesComputed.value,
			chatInputKey: "chatInput",
			chatSessionKey: "sessionId",
			defaultLanguage: "en",
			messageComponents: { [MessageComponentKey.WITH_BUTTONS]: MessageWithButtons_default },
			messageHistory: messages.value,
			disabled: ref(isReadOnly),
			i18n: { en: {
				title: locale.baseText("chat.window.title") || "Chat",
				repostButton: locale.baseText("chat.window.chat.chatMessageOptions.repostMessage") || "Repost message",
				reuseButton: locale.baseText("chat.window.chat.chatMessageOptions.reuseMessage") || "Reuse message",
				subtitle: "",
				footer: "",
				getStarted: "",
				inputPlaceholder: locale.baseText("chat.window.chat.placeholder") || "Type your message...",
				closeButtonTooltip: ""
			} },
			beforeMessageSent: async (message) => {
				if (!isReadOnly) {
					await registerChatWebhook();
					logsStore.addChatMessage({
						id: v4_default(),
						text: message,
						sender: "user"
					});
				}
			},
			afterMessageSent: (_message, response) => {
				if (isReadOnly || !response) return;
				if (response.hasReceivedChunks) {
					const message = response.message;
					if (message && typeof message === "object" && "text" in message) logsStore.addChatMessage({
						id: message.id,
						text: message.text,
						sender: "bot"
					});
					return;
				}
				const botMessage = response.output ?? response.text ?? response.message;
				logsStore.addChatMessage({
					id: v4_default(),
					text: typeof botMessage === "string" ? botMessage : JSON.stringify(response),
					sender: "bot"
				});
			}
		};
	});
	const restoredChatMessages = computed(() => restoreChatHistory(workflowsStore.workflowExecutionData, locale.baseText("chat.window.chat.response.empty")));
	function refreshSession() {
		workflowState.setWorkflowExecutionData(null);
		nodeHelpers.updateNodesExecutionIssues();
		logsStore.resetChatSessionId();
		logsStore.resetMessages();
		workflowsStore.chatPartialExecutionDestinationNode = null;
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
		if (!prevWorkflowId) return;
		refreshSession();
	});
	return {
		currentSessionId: computed(() => logsStore.chatSessionId),
		messages: computed(() => isReadOnly ? restoredChatMessages.value : logsStore.chatSessionMessages),
		previousChatMessages,
		refreshSession,
		displayExecution,
		chatTriggerNode,
		isStreamingEnabled,
		isFileUploadsAllowed,
		allowedFilesMimeTypes: allowedFilesMimeTypesComputed,
		isWorkflowReadyForChat,
		webhookUrl,
		chatOptions: chatOptionsComputed,
		registerChatWebhook,
		webhookRegistered,
		isRegistering
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
				class: normalizeClass([_ctx.$style.container, { [_ctx.$style.clickable]: __props.isClickable }]),
				onClick: handleClick
			}, [createVNode(unref(N8nText_default), {
				class: normalizeClass(_ctx.$style.title),
				bold: true,
				size: "small"
			}, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "title", {}, () => [createTextVNode(toDisplayString(__props.title), 1)])]),
				_: 3
			}, 8, ["class"]), createBaseVNode("div", { class: normalizeClass(_ctx.$style.actions) }, [renderSlot(_ctx.$slots, "actions")], 2)], 2);
		};
	}
});
var LogsPanelHeader_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_16vzt_125",
	clickable: "_clickable_16vzt_137",
	title: "_title_16vzt_145",
	actions: "_actions_16vzt_153"
};
var LogsPanelHeader_default = /* @__PURE__ */ __plugin_vue_export_helper_default(LogsPanelHeader_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": LogsPanelHeader_vue_vue_type_style_index_0_lang_module_default }]]);
var import_upperFirst = /* @__PURE__ */ __toESM(require_upperFirst(), 1);
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
				default: withCtx(() => [createBaseVNode("span", null, toDisplayString(executionStatusText.value), 1), __props.consumedTokens.totalTokens > 0 ? (openBlock(), createBlock(LogsViewConsumedTokenCountText_default, {
					key: 0,
					"consumed-tokens": __props.consumedTokens
				}, null, 8, ["consumed-tokens"])) : createCommentVNode("", true)]),
				_: 1
			}, 8, ["class"]);
		};
	}
});
var LogsViewExecutionSummary_vue_vue_type_style_index_0_lang_module_default = { container: "_container_1dsxk_125" };
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
	const allTriggerNodesDisabled = computed(() => editableWorkflow.value.nodes.filter((node) => nodeTypesStore.isTriggerNode(node.type)).every((node) => node.disabled));
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
				"is-clickable": __props.isHeaderClickable,
				onClick: _cache[1] || (_cache[1] = ($event) => emit("clickHeader"))
			}, {
				actions: withCtx(() => [unref(isClearExecutionButtonVisible) ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 0,
					content: unref(locale).baseText("logs.overview.header.actions.clearExecution.tooltip")
				}, {
					default: withCtx(() => [createVNode(unref(N8nButton_default), {
						variant: "subtle",
						size: "xsmall",
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
			}, 8, ["title", "is-clickable"]), __props.isOpen ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass([_ctx.$style.content, isEmpty.value ? _ctx.$style.empty : ""]),
				"data-test-id": "logs-overview-body"
			}, [isEmpty.value || __props.execution === void 0 ? (openBlock(), createBlock(unref(N8nText_default), {
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
					status: __props.execution.status,
					"consumed-tokens": consumedTokens.value,
					"start-time": +new Date(__props.execution.startedAt),
					"time-took": timeTook.value
				}, null, 8, [
					"class",
					"status",
					"consumed-tokens",
					"start-time",
					"time-took"
				]),
				createVNode(LogsOverviewRows_default, {
					"is-read-only": __props.isReadOnly,
					selected: __props.selected,
					"is-compact": __props.isCompact,
					"should-show-token-count-column": shouldShowTokenCountColumn.value,
					"latest-node-info": __props.latestNodeInfo,
					"flat-log-entries": __props.flatLogEntries,
					"can-open-ndv": true,
					execution: __props.execution,
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
					"model-value": __props.selected ? "details" : "overview",
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
	container: "_container_1qsnq_125",
	clearButton: "_clearButton_1qsnq_135",
	content: "_content_1qsnq_141",
	empty: "_empty_1qsnq_151",
	emptyText: "_emptyText_1qsnq_156",
	summary: "_summary_1qsnq_161",
	switchViewButtons: "_switchViewButtons_1qsnq_165"
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
var _hoisted_1$10 = { class: "chat-get-started" };
var GetStarted_default = /* @__PURE__ */ defineComponent({
	__name: "GetStarted",
	setup(__props) {
		const { t } = useI18n$1();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1$10, [createVNode(Button_default, { onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click:button")) }, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(t)("getStarted")), 1)]),
				_: 1
			})]);
		};
	}
});
var _sfc_main = {};
var _hoisted_1$9 = { class: "chat-powered-by" };
function _sfc_render(_ctx, _cache) {
	return openBlock(), createElementBlock("div", _hoisted_1$9, [..._cache[0] || (_cache[0] = [createTextVNode(" Powered by ", -1), createBaseVNode("a", { href: "https://n8n.io?utm_source=n8n-external&utm_medium=widget-powered-by" }, "n8n", -1)])]);
}
var PoweredBy_default = /* @__PURE__ */ __plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render]]);
var _hoisted_1$8 = { class: "chat-get-started-footer" };
var _hoisted_2$5 = { key: 0 };
var GetStartedFooter_default = /* @__PURE__ */ defineComponent({
	__name: "GetStartedFooter",
	setup(__props) {
		const { t, te } = useI18n$1();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1$8, [unref(te)("footer") ? (openBlock(), createElementBlock("div", _hoisted_2$5, toDisplayString(unref(t)("footer")), 1)) : createCommentVNode("", true), createVNode(PoweredBy_default)]);
		};
	}
});
var _hoisted_1$7 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render$1(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$7, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "currentColor",
		d: "M16.5 6v11.5a4 4 0 0 1-4 4a4 4 0 0 1-4-4V5A2.5 2.5 0 0 1 11 2.5A2.5 2.5 0 0 1 13.5 5v10.5a1 1 0 0 1-1 1a1 1 0 0 1-1-1V6H10v9.5a2.5 2.5 0 0 0 2.5 2.5a2.5 2.5 0 0 0 2.5-2.5V5a4 4 0 0 0-4-4a4 4 0 0 0-4 4v12.5a5.5 5.5 0 0 0 5.5 5.5a5.5 5.5 0 0 0 5.5-5.5V6z"
	}, null, -1)])]);
}
var paperclip_default = {
	name: "mdi-paperclip",
	render: render$1
};
var _hoisted_1$6 = {
	viewBox: "0 0 24 24",
	width: "1.2em",
	height: "1.2em"
};
function render(_ctx, _cache) {
	return openBlock(), createElementBlock("svg", _hoisted_1$6, [..._cache[0] || (_cache[0] = [createBaseVNode("path", {
		fill: "currentColor",
		d: "m2 21l21-9L2 3v7l15 2l-15 2z"
	}, null, -1)])]);
}
var send_default = {
	name: "mdi-send",
	render
};
var _hoisted_1$5 = { class: "chat-inputs" };
var _hoisted_2$4 = {
	key: 0,
	class: "chat-input-left-panel"
};
var _hoisted_3$3 = ["disabled", "placeholder"];
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
	emits: ["arrowKeyDown"],
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
			if (chatStore.blockUserInput.value) return true;
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
					const newMessage = parseBotChatMessageContent(e.data);
					chatStore.messages.value.push(newMessage);
					waitingForChatResponse.value = true;
					chatStore.waitingForResponse.value = false;
					chatStore.blockUserInput.value = shouldBlockUserInput(newMessage);
				};
				chatStore.ws.onclose = () => {
					chatStore.ws = null;
					waitingForChatResponse.value = false;
					chatStore.waitingForResponse.value = false;
					chatStore.blockUserInput.value = false;
				};
			} catch (error) {
				console.error("Error setting up websocket connection", error);
			}
		}
		async function processFiles(data) {
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
				files: await processFiles(sentMessage.files)
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
				chatEventBus.emit("messageSent");
				return;
			}
			const response = await chatStore.sendMessage(messageText, attachFiles());
			if (response?.executionId) setupWebsocketConnection(response.executionId);
			chatEventBus.emit("messageSent");
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
				style: normalizeStyle(styleVars.value)
			}, [createBaseVNode("div", _hoisted_1$5, [
				_ctx.$slots.leftPanel ? (openBlock(), createElementBlock("div", _hoisted_2$4, [renderSlot(_ctx.$slots, "leftPanel", {}, void 0, true)])) : createCommentVNode("", true),
				withDirectives(createBaseVNode("textarea", {
					ref_key: "chatTextArea",
					ref: chatTextArea,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => input.value = $event),
					"data-test-id": "chat-input",
					disabled: isInputDisabled.value,
					placeholder: unref(t)(props.placeholder),
					onKeydown: [withKeys(onSubmitKeydown, ["enter"]), onKeyDown],
					onInput: adjustTextAreaHeight,
					onMousedown: adjustTextAreaHeight,
					onFocus: adjustTextAreaHeight
				}, null, 40, _hoisted_3$3), [[vModelText, input.value]]),
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
			}), 128))])) : createCommentVNode("", true)], 4);
		};
	}
}), [["__scopeId", "data-v-25e01beb"]]);
var _hoisted_1$4 = { class: "chat-layout" };
var _hoisted_2$3 = {
	key: 0,
	class: "chat-header"
};
var _hoisted_3$2 = {
	key: 2,
	class: "chat-footer"
};
var Layout_default = /* @__PURE__ */ defineComponent({
	__name: "Layout",
	setup(__props) {
		const chatBodyRef = ref(null);
		function scrollToBottom() {
			const element = chatBodyRef.value;
			if (element) element.scrollTop = element.scrollHeight;
		}
		onMounted(() => {
			chatEventBus.on("scrollToBottom", scrollToBottom);
			window.addEventListener("resize", scrollToBottom);
		});
		onBeforeUnmount(() => {
			chatEventBus.off("scrollToBottom", scrollToBottom);
			window.removeEventListener("resize", scrollToBottom);
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("main", _hoisted_1$4, [
				_ctx.$slots.header ? (openBlock(), createElementBlock("div", _hoisted_2$3, [renderSlot(_ctx.$slots, "header")])) : createCommentVNode("", true),
				_ctx.$slots.default ? (openBlock(), createElementBlock("div", {
					key: 1,
					ref_key: "chatBodyRef",
					ref: chatBodyRef,
					class: "chat-body"
				}, [renderSlot(_ctx.$slots, "default")], 512)) : createCommentVNode("", true),
				_ctx.$slots.footer ? (openBlock(), createElementBlock("div", _hoisted_3$2, [renderSlot(_ctx.$slots, "footer")])) : createCommentVNode("", true)
			]);
		};
	}
});
var _hoisted_1$3 = {
	key: 0,
	class: "message-actions"
};
var MessageActions_default = /* @__PURE__ */ __plugin_vue_export_helper_default(/* @__PURE__ */ defineComponent({
	__name: "MessageActions",
	props: { message: {} },
	setup(__props) {
		const props = __props;
		const { options } = useOptions();
		const chatStore = useChat();
		const { t } = useI18n$1();
		async function repostMessage() {
			if (props.message.sender === "user") {
				const messageText = "text" in props.message && typeof props.message.text === "string" ? props.message.text : "";
				if (messageText.trim()) await chatStore.sendMessage(messageText, props.message.files ? Array.from(props.message.files) : []);
			}
		}
		function copyToInput() {
			const messageText = "text" in props.message && typeof props.message?.text === "string" ? props.message?.text : "";
			if (messageText.trim()) chatEventBus.emit("setInputValue", messageText);
		}
		return (_ctx, _cache) => {
			return unref(options).enableMessageActions ? (openBlock(), createElementBlock("div", _hoisted_1$3, [__props.message.sender === "user" ? (openBlock(), createBlock(unref(N8nTooltip_default), { key: 0 }, {
				content: withCtx(() => [createTextVNode(toDisplayString(unref(t)("repostButton")), 1)]),
				default: withCtx(() => [createVNode(unref(N8nIcon_default), {
					icon: "redo-2",
					size: "medium",
					class: "icon",
					onClick: repostMessage
				})]),
				_: 1
			})) : createCommentVNode("", true), __props.message.sender === "user" ? (openBlock(), createBlock(unref(N8nTooltip_default), { key: 1 }, {
				content: withCtx(() => [createTextVNode(toDisplayString(unref(t)("reuseButton")), 1)]),
				default: withCtx(() => [createVNode(unref(N8nIcon_default), {
					icon: "files",
					size: "medium",
					class: "icon",
					onClick: copyToInput
				})]),
				_: 1
			})) : createCommentVNode("", true)])) : createCommentVNode("", true);
		};
	}
}), [["__scopeId", "data-v-207aef80"]]);
var _hoisted_1$2 = {
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
		const { message } = toRefs(__props);
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
		const scrollToView = () => {
			if (messageContainer.value?.scrollIntoView) messageContainer.value.scrollIntoView({ block: "start" });
		};
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
			}, [!!_ctx.$slots.beforeMessage || unref(options)?.enableMessageActions ? (openBlock(), createElementBlock("div", _hoisted_1$2, [renderSlot(_ctx.$slots, "beforeMessage", normalizeProps(guardReactiveProps({ message: unref(message) }))), createVNode(MessageActions_default, { message: unref(message) }, null, 8, ["message"])])) : createCommentVNode("", true), renderSlot(_ctx.$slots, "default", {}, () => [unref(message).type === "component" && messageComponents[unref(message).key] ? (openBlock(), createBlock(resolveDynamicComponent(messageComponents[unref(message).key]), normalizeProps(mergeProps({ key: 0 }, unref(message).arguments)), null, 16)) : (openBlock(), createBlock(MarkdownRenderer_default, {
				key: 1,
				text: messageText.value
			}, null, 8, ["text"])), (unref(message).files ?? []).length > 0 ? (openBlock(), createElementBlock("div", _hoisted_2$2, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(message).files ?? [], (file) => {
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
				default: withCtx(() => [..._cache[0] || (_cache[0] = [createBaseVNode("div", { class: "chat-message-typing-body" }, [
					createBaseVNode("span", { class: "chat-message-typing-circle" }),
					createBaseVNode("span", { class: "chat-message-typing-circle" }),
					createBaseVNode("span", { class: "chat-message-typing-circle" })
				], -1)])]),
				_: 1
			}, 8, ["class"]);
		};
	}
});
var _hoisted_1$1 = {
	key: 0,
	class: "empty-container"
};
var _hoisted_2$1 = {
	class: "empty",
	"data-test-id": "chat-messages-empty"
};
var _hoisted_3$1 = {
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
			return __props.emptyText && unref(initialMessages).length === 0 && __props.messages.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_1$1, [createBaseVNode("div", _hoisted_2$1, [createVNode(unref(N8nIcon_default), {
				icon: "message-circle",
				size: "large",
				class: "emptyIcon"
			}), createVNode(unref(N8nText_default), {
				tag: "p",
				size: "medium",
				color: "text-base"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(__props.emptyText), 1)]),
				_: 1
			})])])) : (openBlock(), createElementBlock("div", _hoisted_3$1, [
				(openBlock(true), createElementBlock(Fragment, null, renderList(unref(initialMessages), (initialMessage) => {
					return openBlock(), createBlock(Message_default, {
						key: initialMessage.id,
						message: initialMessage
					}, null, 8, ["message"]);
				}), 128)),
				(openBlock(true), createElementBlock(Fragment, null, renderList(__props.messages, (message) => {
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
var _hoisted_1 = { class: "chat-heading" };
var _hoisted_2 = ["title"];
var _hoisted_3 = { key: 0 };
var Chat_default = /* @__PURE__ */ defineComponent({
	__name: "Chat",
	setup(__props) {
		const { t } = useI18n$1();
		const chatStore = useChat();
		const { messages, currentSessionId } = chatStore;
		const { options } = useOptions();
		const showCloseButton = computed(() => options.mode === "window" && options.showWindowCloseButton);
		const messageHistoryIndex = ref(-1);
		const currentInputBuffer = ref("");
		const userMessages = computed(() => messages.value.filter((m) => m.sender === "user").map((m) => "text" in m && typeof m.text === "string" ? m.text : ""));
		function getStarted() {
			if (!chatStore.startNewSession) return;
			chatStore.startNewSession();
			nextTick(() => {
				chatEventBus.emit("scrollToBottom");
			});
		}
		async function initialize() {
			if (!chatStore.loadPreviousSession) return;
			await chatStore.loadPreviousSession();
			nextTick(() => {
				chatEventBus.emit("scrollToBottom");
			});
		}
		function closeChat() {
			chatEventBus.emit("close");
		}
		function onArrowKeyDown(payload) {
			const userMessagesList = userMessages.value;
			if (userMessagesList.length === 0) return;
			if (messageHistoryIndex.value === -1 && payload.currentInputValue.length > 0) currentInputBuffer.value = payload.currentInputValue;
			if (payload.key === "ArrowUp") {
				chatEventBus.emit("blurInput");
				if (messageHistoryIndex.value < userMessagesList.length - 1) {
					messageHistoryIndex.value++;
					const messageText = userMessagesList[userMessagesList.length - 1 - messageHistoryIndex.value];
					chatEventBus.emit("setInputValue", messageText);
				}
				chatEventBus.emit("focusInput");
			} else if (payload.key === "ArrowDown") {
				if (messageHistoryIndex.value === -1) return;
				chatEventBus.emit("blurInput");
				if (messageHistoryIndex.value > 0) {
					messageHistoryIndex.value--;
					const messageText = userMessagesList[userMessagesList.length - 1 - messageHistoryIndex.value];
					chatEventBus.emit("setInputValue", messageText);
				} else if (messageHistoryIndex.value === 0) {
					messageHistoryIndex.value = -1;
					chatEventBus.emit("setInputValue", currentInputBuffer.value);
					currentInputBuffer.value = "";
				}
				chatEventBus.emit("focusInput");
			}
		}
		let clearOnMessageSent;
		onMounted(async () => {
			if (!messages.value.length && options.messageHistory) messages.value = options.messageHistory.map((m) => ({ ...m }));
			await initialize();
			if (!options.showWelcomeScreen && !currentSessionId.value) getStarted();
			clearOnMessageSent = chatEventBus.on("messageSent", () => {
				messageHistoryIndex.value = -1;
				currentInputBuffer.value = "";
			});
		});
		onUnmounted(() => {
			if (clearOnMessageSent) clearOnMessageSent();
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(Layout_default, { class: "chat-wrapper" }, {
				header: withCtx(() => [createBaseVNode("div", _hoisted_1, [createBaseVNode("h1", null, toDisplayString(unref(t)("title")), 1), showCloseButton.value ? (openBlock(), createElementBlock("button", {
					key: 0,
					class: "chat-close-button",
					title: unref(t)("closeButtonTooltip"),
					onClick: closeChat
				}, [createVNode(unref(close_default), {
					height: "18",
					width: "18"
				})], 8, _hoisted_2)) : createCommentVNode("", true)]), unref(t)("subtitle") ? (openBlock(), createElementBlock("p", _hoisted_3, toDisplayString(unref(t)("subtitle")), 1)) : createCommentVNode("", true)]),
				footer: withCtx(() => [unref(currentSessionId) ? (openBlock(), createBlock(Input_default, {
					key: 0,
					onArrowKeyDown
				})) : (openBlock(), createBlock(GetStartedFooter_default, { key: 1 }))]),
				default: withCtx(() => [!unref(currentSessionId) && unref(options).showWelcomeScreen ? (openBlock(), createBlock(GetStarted_default, {
					key: 0,
					"onClick:button": getStarted
				})) : (openBlock(), createBlock(MessagesList_default, {
					key: 1,
					messages: unref(messages)
				}, null, 8, ["messages"]))]),
				_: 1
			});
		};
	}
});
async function getAccessToken() {
	return "";
}
async function authenticatedFetch(...args) {
	const accessToken = await getAccessToken();
	const body = args[1]?.body;
	const headers = {
		...accessToken ? { authorization: `Bearer ${accessToken}` } : {},
		...args[1]?.headers
	};
	if (body instanceof FormData) delete headers["Content-Type"];
	else headers["Content-Type"] = "application/json";
	const response = await fetch(args[0], {
		...args[1],
		mode: "cors",
		cache: "no-cache",
		headers
	});
	let responseData;
	try {
		responseData = await response.clone().json();
	} catch (error) {
		responseData = await response.text();
	}
	return responseData;
}
async function get(url, query = {}, options = {}) {
	let resolvedUrl = url;
	if (Object.keys(query).length > 0) resolvedUrl = `${resolvedUrl}?${new URLSearchParams(query).toString()}`;
	return await authenticatedFetch(resolvedUrl, {
		...options,
		method: "GET"
	});
}
async function post(url, body = {}, options = {}) {
	return await authenticatedFetch(url, {
		...options,
		method: "POST",
		body: JSON.stringify(body)
	});
}
async function postWithFiles(url, body = {}, files = [], options = {}) {
	const formData = new FormData();
	for (const key in body) {
		const value = body[key];
		if (typeof value === "object" && value !== null) formData.append(key, JSON.stringify(value));
		else formData.append(key, value);
	}
	for (const file of files) formData.append("files", file);
	return await authenticatedFetch(url, {
		...options,
		method: "POST",
		body: formData
	});
}
async function loadPreviousSession(sessionId, options) {
	return await (options.webhookConfig?.method === "POST" ? post : get)(`${options.webhookUrl}`, {
		action: "loadPreviousSession",
		[options.chatSessionKey]: sessionId,
		...options.metadata ? { metadata: options.metadata } : {}
	}, { headers: options.webhookConfig?.headers });
}
async function sendMessage(message, files, sessionId, options) {
	let response;
	if (files.length > 0) response = await postWithFiles(`${options.webhookUrl}`, {
		action: "sendMessage",
		[options.chatSessionKey]: sessionId,
		[options.chatInputKey]: message,
		...options.metadata ? { metadata: options.metadata } : {}
	}, files, { headers: options.webhookConfig?.headers });
	else response = await (options.webhookConfig?.method === "POST" ? post : get)(`${options.webhookUrl}`, {
		action: "sendMessage",
		[options.chatSessionKey]: sessionId,
		[options.chatInputKey]: message,
		...options.metadata ? { metadata: options.metadata } : {}
	}, { headers: options.webhookConfig?.headers });
	if (options.afterMessageSent) await options.afterMessageSent(message, response);
	return response;
}
function createLineParser() {
	let buffer = "";
	const decoder = new TextDecoder();
	return new TransformStream({
		transform(chunk, controller) {
			buffer += decoder.decode(chunk, { stream: true });
			const lines = buffer.split("\n");
			buffer = lines.pop() ?? "";
			for (const line of lines) if (line.trim()) try {
				const parsed = JSON.parse(line);
				controller.enqueue(parsed);
			} catch (error) {
				controller.enqueue({
					type: "item",
					content: line
				});
			}
		},
		flush(controller) {
			if (buffer.trim()) try {
				const parsed = JSON.parse(buffer);
				controller.enqueue(parsed);
			} catch (error) {
				controller.enqueue({
					type: "item",
					content: buffer
				});
			}
		}
	});
}
async function sendMessageStreaming(message, files, sessionId, options, handlers) {
	const response = await (files.length > 0 ? sendWithFiles(message, files, sessionId, options) : sendTextOnly(message, sessionId, options));
	if (!response.ok) {
		const errorText = await response.text();
		console.error("HTTP error response:", response.status, errorText);
		throw new Error(`Error while sending message. Error: ${errorText}`);
	}
	if (!response.body) throw new Error("Response body is not readable");
	const reader = response.body.pipeThrough(createLineParser()).getReader();
	let hasReceivedChunks = false;
	try {
		while (true) {
			const { done, value } = await reader.read();
			if (done) break;
			const nodeId = value.metadata?.nodeId || "unknown";
			const runIndex = value.metadata?.runIndex;
			switch (value.type) {
				case "begin":
					handlers.onBeginMessage(nodeId, runIndex);
					break;
				case "item":
					hasReceivedChunks = true;
					handlers.onChunk(value.content ?? "", nodeId, runIndex);
					break;
				case "end":
					await handlers.onEndMessage(nodeId, runIndex);
					break;
				case "error":
					hasReceivedChunks = true;
					handlers.onChunk(`Error: ${value.content ?? "Unknown error"}`, nodeId, runIndex);
					await handlers.onEndMessage(nodeId, runIndex);
					break;
			}
		}
	} finally {
		reader.releaseLock();
	}
	return { hasReceivedChunks };
}
async function sendWithFiles(message, files, sessionId, options) {
	const formData = new FormData();
	formData.append("action", "sendMessage");
	formData.append(options.chatSessionKey, sessionId);
	formData.append(options.chatInputKey, message);
	if (options.metadata) formData.append("metadata", JSON.stringify(options.metadata));
	for (const file of files) formData.append("files", file);
	const headers = {
		Accept: "text/plain",
		...options.webhookConfig?.headers
	};
	delete headers["Content-Type"];
	return await fetch(options.webhookUrl, {
		method: "POST",
		headers,
		body: formData
	});
}
async function sendTextOnly(message, sessionId, options) {
	const body = {
		action: "sendMessage",
		[options.chatSessionKey]: sessionId,
		[options.chatInputKey]: message,
		...options.metadata ? { metadata: options.metadata } : {}
	};
	return await fetch(options.webhookUrl, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Accept: "text/plain",
			...options.webhookConfig?.headers
		},
		body: JSON.stringify(body)
	});
}
var StreamingMessageManager = class {
	nodeRuns = /* @__PURE__ */ new Map();
	runOrder = [];
	activeRuns = /* @__PURE__ */ new Set();
	constructor() {}
	getRunKey(nodeId, runIndex) {
		if (runIndex !== void 0) return `${nodeId}-${runIndex}`;
		return nodeId;
	}
	initializeRun(nodeId, runIndex) {
		const runKey = this.getRunKey(nodeId, runIndex);
		if (!this.nodeRuns.has(runKey)) {
			const message = createBotMessage();
			this.nodeRuns.set(runKey, {
				content: "",
				isComplete: false,
				message
			});
			this.runOrder.push(runKey);
			return message;
		}
		return this.nodeRuns.get(runKey).message;
	}
	registerRunStart(nodeId, runIndex) {
		const runKey = this.getRunKey(nodeId, runIndex);
		this.activeRuns.add(runKey);
	}
	addRunToActive(nodeId, runIndex) {
		const runKey = this.getRunKey(nodeId, runIndex);
		this.activeRuns.add(runKey);
		return this.initializeRun(nodeId, runIndex);
	}
	removeRunFromActive(nodeId, runIndex) {
		const runKey = this.getRunKey(nodeId, runIndex);
		this.activeRuns.delete(runKey);
		const runData = this.nodeRuns.get(runKey);
		if (runData) runData.isComplete = true;
	}
	addChunkToRun(nodeId, chunk, runIndex) {
		const runKey = this.getRunKey(nodeId, runIndex);
		const runData = this.nodeRuns.get(runKey);
		if (runData) {
			runData.content += chunk;
			const updatedMessage = {
				...runData.message,
				text: runData.content
			};
			runData.message = updatedMessage;
			return updatedMessage;
		}
		return null;
	}
	getRunMessage(nodeId, runIndex) {
		const runKey = this.getRunKey(nodeId, runIndex);
		return this.nodeRuns.get(runKey)?.message ?? null;
	}
	areAllRunsComplete() {
		return Array.from(this.nodeRuns.values()).every((data) => data.isComplete);
	}
	getRunCount() {
		return this.runOrder.length;
	}
	getActiveRunCount() {
		return this.activeRuns.size;
	}
	getAllMessages() {
		return this.runOrder.map((key) => this.nodeRuns.get(key)?.message).filter((message) => message !== void 0);
	}
	reset() {
		this.nodeRuns.clear();
		this.runOrder = [];
		this.activeRuns.clear();
	}
};
function createBotMessage(id) {
	return {
		id: id ?? v4_default(),
		type: "text",
		text: "",
		sender: "bot"
	};
}
function updateMessageInArray(messages, messageId, updatedMessage) {
	const messageIndex = messages.findIndex((msg) => msg.id === messageId);
	if (messageIndex === -1) throw new Error(`Can't update message. No message with id ${messageId} found`);
	messages[messageIndex] = updatedMessage;
}
function handleStreamingChunk(chunk, nodeId, streamingManager, receivedMessage, messages, runIndex) {
	try {
		if (chunk === "") return;
		if (!nodeId) {
			if (!receivedMessage.value) {
				receivedMessage.value = createBotMessage();
				messages.value.push(receivedMessage.value);
			}
			const updatedMessage = {
				...receivedMessage.value,
				text: receivedMessage.value.text + chunk
			};
			updateMessageInArray(messages.value, receivedMessage.value.id, updatedMessage);
			receivedMessage.value = updatedMessage;
		} else {
			let runMessage = streamingManager.getRunMessage(nodeId, runIndex);
			if (!runMessage) {
				runMessage = streamingManager.addRunToActive(nodeId, runIndex);
				messages.value.push(runMessage);
			}
			const updatedMessage = streamingManager.addChunkToRun(nodeId, chunk, runIndex);
			if (updatedMessage) updateMessageInArray(messages.value, updatedMessage.id, updatedMessage);
		}
		nextTick(() => {
			chatEventBus.emit("scrollToBottom");
		});
	} catch (error) {
		console.error("Error handling stream chunk:", error);
	}
}
function handleNodeStart(nodeId, streamingManager, runIndex) {
	try {
		streamingManager.registerRunStart(nodeId, runIndex);
	} catch (error) {
		console.error("Error handling node start:", error);
	}
}
async function handleNodeComplete(nodeId, streamingManager, runIndex, userMessage, options, messages) {
	try {
		const completedMessage = streamingManager.getRunMessage(nodeId, runIndex);
		streamingManager.removeRunFromActive(nodeId, runIndex);
		if (completedMessage && "text" in completedMessage) {
			const parsed = parseBotChatMessageContent(completedMessage.text);
			if (parsed.type === "component") {
				const index = messages.value.findIndex((m) => m.id === completedMessage.id);
				if (index !== -1) {
					parsed.id = completedMessage.id;
					messages.value[index] = parsed;
				}
				return shouldBlockUserInput(parsed);
			}
		}
		if (options.afterMessageSent && completedMessage) await options.afterMessageSent(userMessage, {
			message: completedMessage,
			hasReceivedChunks: true
		});
	} catch (error) {
		console.error("Error handling node complete:", error);
	}
	return false;
}
function createUserMessage(text, files = []) {
	return {
		id: v4_default(),
		text,
		sender: "user",
		files
	};
}
function processMessageResponse(response) {
	let textMessage = response.output ?? response.text ?? response.message ?? "";
	if (typeof textMessage === "object" && textMessage.type && textMessage.type === "text") return textMessage.text;
	if (textMessage === "" && Object.keys(response).length > 0) try {
		textMessage = JSON.stringify(response, null, 2);
	} catch (e) {}
	return textMessage;
}
function handleEmptyStreamResponse(config) {
	const { receivedMessage, messages } = config;
	if (!receivedMessage.value) {
		receivedMessage.value = createBotMessage();
		messages.value.push(receivedMessage.value);
	} else if (!messages.value.some((msg) => msg.sender === "bot" && "text" in msg && msg.text.trim().length > 0)) {
		receivedMessage.value = createBotMessage();
		messages.value.push(receivedMessage.value);
	}
	receivedMessage.value.text = "[No response received. This could happen if streaming is enabled in the trigger but disabled in agent node(s)]";
}
function handleMessageError(config) {
	const { error, receivedMessage, messages } = config;
	receivedMessage.value ??= createBotMessage();
	receivedMessage.value.text = "Error: Failed to receive response";
	if (!messages.value.includes(receivedMessage.value)) messages.value.push(receivedMessage.value);
	console.error("Chat API error:", error);
}
async function handleStreamingMessage(config) {
	const { text, files, sessionId, options, messages, receivedMessage, streamingManager, blockUserInput } = config;
	const { hasReceivedChunks } = await sendMessageStreaming(text, files, sessionId, options, {
		onChunk: (chunk, nodeId, runIndex) => {
			handleStreamingChunk(chunk, nodeId, streamingManager, receivedMessage, messages, runIndex);
		},
		onBeginMessage: (nodeId, runIndex) => {
			handleNodeStart(nodeId, streamingManager, runIndex);
		},
		onEndMessage: async (nodeId, runIndex) => {
			if (await handleNodeComplete(nodeId, streamingManager, runIndex, text, options, messages)) blockUserInput.value = true;
		}
	});
	if (!hasReceivedChunks) handleEmptyStreamResponse({
		receivedMessage,
		messages
	});
	return hasReceivedChunks;
}
async function handleNonStreamingMessage(config) {
	const { text, files, sessionId, options } = config;
	const sendMessageResponse = await sendMessage(text, files, sessionId, options);
	if (sendMessageResponse?.executionStarted) return { response: sendMessageResponse };
	const receivedMessage = createBotMessage();
	receivedMessage.text = processMessageResponse(sendMessageResponse);
	return {
		response: sendMessageResponse,
		botMessage: receivedMessage
	};
}
const ChatPlugin = { install(app, options) {
	app.provide(ChatOptionsSymbol, options);
	const messages = ref([]);
	const currentSessionId = ref(null);
	const waitingForResponse = ref(false);
	const blockUserInput = ref(false);
	const initialMessages = computed(() => (options.initialMessages ?? []).map((text) => ({
		id: v4_default(),
		text,
		sender: "bot"
	})));
	async function sendMessage$1(text, files = []) {
		const sentMessage = createUserMessage(text, files);
		messages.value.push(sentMessage);
		waitingForResponse.value = true;
		nextTick(() => {
			chatEventBus.emit("scrollToBottom");
		});
		const receivedMessage = ref(null);
		const streamingManager = new StreamingMessageManager();
		try {
			if (options.beforeMessageSent) await options.beforeMessageSent(text);
			if (options?.enableStreaming) {
				const hasReceivedChunks = await handleStreamingMessage({
					text,
					files,
					sessionId: currentSessionId.value,
					options,
					messages,
					receivedMessage,
					streamingManager,
					blockUserInput
				});
				if (options.afterMessageSent) await options.afterMessageSent(text, {
					hasReceivedChunks,
					message: receivedMessage.value ?? ""
				});
			} else {
				const result = await handleNonStreamingMessage({
					text,
					files,
					sessionId: currentSessionId.value,
					options
				});
				if (result.response?.executionStarted) {
					waitingForResponse.value = false;
					return result.response;
				}
				if (result.botMessage) {
					receivedMessage.value = result.botMessage;
					messages.value.push(result.botMessage);
				}
				if (options.afterMessageSent) await options.afterMessageSent(text, result.response);
			}
		} catch (error) {
			handleMessageError({
				error,
				receivedMessage,
				messages
			});
		} finally {
			waitingForResponse.value = false;
		}
		nextTick(() => {
			chatEventBus.emit("scrollToBottom");
		});
		return null;
	}
	async function loadPreviousSession$1() {
		if (!options.loadPreviousSession) return;
		let sessionId = options.sessionId ?? localStorage.getItem(localStorageSessionIdKey);
		if (!sessionId) {
			sessionId = v4_default();
			localStorage.setItem(localStorageSessionIdKey, sessionId);
		}
		messages.value = ((await loadPreviousSession(sessionId, options))?.data || []).map((message, index) => ({
			id: `${index}`,
			text: message.kwargs.content,
			sender: message.id.includes("HumanMessage") ? "user" : "bot"
		}));
		currentSessionId.value = sessionId;
		localStorage.setItem(localStorageSessionIdKey, sessionId);
		return sessionId;
	}
	async function startNewSession() {
		const existingSessionId = localStorage.getItem(localStorageSessionIdKey);
		if (existingSessionId && options.loadPreviousSession && !options.sessionId) currentSessionId.value = existingSessionId;
		else {
			currentSessionId.value = options.sessionId ?? v4_default();
			localStorage.setItem(localStorageSessionIdKey, currentSessionId.value);
		}
	}
	const chatStore = {
		initialMessages,
		messages,
		currentSessionId,
		waitingForResponse,
		blockUserInput,
		loadPreviousSession: loadPreviousSession$1,
		startNewSession,
		sendMessage: sendMessage$1
	};
	app.provide(ChatSymbol, chatStore);
	app.config.globalProperties.$chat = chatStore;
} };
var ChatMessagesPanel_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ChatMessagesPanel",
	props: {
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
		"refreshSession",
		"close",
		"clickHeader",
		"hideChatPanel"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const locale = useI18n();
		const clipboard = useClipboard();
		const toast = useToast();
		const workflowsStore = useWorkflowsStore();
		const chatContainer$1 = useTemplateRef("chatContainer");
		const { chatTriggerNode, isStreamingEnabled, isFileUploadsAllowed, allowedFilesMimeTypes, isWorkflowReadyForChat, chatOptions } = useChatState(props.isReadOnly, () => props.sessionId);
		let chatApp = null;
		const sessionIdText = computed(() => locale.baseText("chat.window.session.id", { interpolate: { id: `${props.sessionId.slice(0, 5)}...` } }));
		async function copySessionId() {
			await clipboard.copy(props.sessionId);
			toast.showMessage({
				title: locale.baseText("generic.copiedToClipboard"),
				message: "",
				type: "success"
			});
		}
		function initializeChat() {
			if (!isWorkflowReadyForChat.value) return;
			if (!chatContainer$1.value) return;
			if (chatApp) return;
			chatApp = createApp(Chat_default);
			chatApp.use(ChatPlugin, chatOptions.value);
			chatApp.mount(chatContainer$1.value);
		}
		function destroyChat() {
			if (chatApp && chatContainer$1.value) {
				chatApp.unmount();
				chatApp = null;
				chatContainer$1.value.innerHTML = "";
			}
		}
		watch(() => props.isOpen, async (newIsOpen) => {
			if (newIsOpen && !chatApp) {
				destroyChat();
				initializeChat();
			}
		});
		watch(() => chatTriggerNode.value, async (newChatTrigger, oldChatTrigger) => {
			if (props.isOpen) {
				if (newChatTrigger && !oldChatTrigger) {
					await nextTick();
					initializeChat();
				} else if (!newChatTrigger && oldChatTrigger) {
					destroyChat();
					emit("hideChatPanel");
				}
			}
		});
		watch(() => chatContainer$1.value, async (newContainer) => {
			if (newContainer && props.isOpen && isWorkflowReadyForChat.value) initializeChat();
		});
		watch(() => workflowsStore.workflowId, async (newWorkflowId, oldWorkflowId) => {
			if (props.isOpen && isWorkflowReadyForChat.value && newWorkflowId !== oldWorkflowId) {
				destroyChat();
				initializeChat();
			}
		});
		watch(() => isStreamingEnabled.value, async (newStreaming, oldStreaming) => {
			if (props.isOpen && isWorkflowReadyForChat.value && chatApp && newStreaming !== oldStreaming) {
				destroyChat();
				initializeChat();
			}
		});
		watch(() => [isFileUploadsAllowed.value, allowedFilesMimeTypes.value], async (newConfig, oldConfig) => {
			if (props.isOpen && isWorkflowReadyForChat.value && chatApp && JSON.stringify(newConfig) !== JSON.stringify(oldConfig)) {
				destroyChat();
				initializeChat();
			}
		});
		onMounted(async () => {
			if (props.isOpen) {
				await nextTick();
				initializeChat();
			}
		});
		onUnmounted(() => {
			destroyChat();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass([_ctx.$style.chat, "ignore-key-press-canvas"]),
				"data-test-id": "workflow-lm-chat-dialog",
				tabindex: "0"
			}, [createVNode(LogsPanelHeader_default, {
				"data-test-id": "chat-header",
				title: unref(locale).baseText("chat.window.title"),
				"is-clickable": __props.isHeaderClickable,
				onClick: _cache[1] || (_cache[1] = ($event) => emit("clickHeader"))
			}, {
				actions: withCtx(() => [!__props.isReadOnly ? (openBlock(), createBlock(unref(N8nTooltip_default), { key: 0 }, {
					content: withCtx(() => [
						createTextVNode(toDisplayString(__props.sessionId) + " ", 1),
						_cache[2] || (_cache[2] = createBaseVNode("br", null, null, -1)),
						createTextVNode(" " + toDisplayString(unref(locale).baseText("chat.window.session.id.copy")), 1)
					]),
					default: withCtx(() => [createVNode(unref(N8nButton_default), {
						variant: "ghost",
						"data-test-id": "chat-session-id",
						size: "xsmall",
						class: normalizeClass(_ctx.$style.newHeaderButton),
						onClick: withModifiers(copySessionId, ["stop"])
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(sessionIdText.value), 1)]),
						_: 1
					}, 8, ["class"])]),
					_: 1
				})) : createCommentVNode("", true), !__props.isReadOnly ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 1,
					content: unref(locale).baseText("chat.window.session.resetSession")
				}, {
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						variant: "ghost",
						class: normalizeClass(_ctx.$style.newHeaderButton),
						"data-test-id": "refresh-session-button",
						size: "xsmall",
						"icon-size": "medium",
						icon: "undo-2",
						title: unref(locale).baseText("chat.window.session.reset"),
						onClick: _cache[0] || (_cache[0] = withModifiers(($event) => emit("refreshSession"), ["stop"]))
					}, null, 8, ["class", "title"])]),
					_: 1
				}, 8, ["content"])) : createCommentVNode("", true)]),
				_: 1
			}, 8, ["title", "is-clickable"]), withDirectives(createBaseVNode("main", {
				class: normalizeClass(_ctx.$style.chatSdkContainer),
				"data-test-id": "canvas-chat-body"
			}, [createBaseVNode("div", {
				ref_key: "chatContainer",
				ref: chatContainer$1,
				class: normalizeClass(_ctx.$style.chatContainer)
			}, null, 2)], 2), [[vShow, __props.isOpen && unref(chatTriggerNode)]])], 2);
		};
	}
});
var ChatMessagesPanel_vue_vue_type_style_index_0_lang_module_default = {
	chat: "_chat_1gl9t_125",
	headerButton: "_headerButton_1gl9t_185",
	newHeaderButton: "_newHeaderButton_1gl9t_190",
	chatSdkContainer: "_chatSdkContainer_1gl9t_195",
	chatContainer: "_chatContainer_1gl9t_202"
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
				"workflow-object": __props.logEntry.workflow,
				"workflow-execution": __props.logEntry.execution,
				"no-data-in-branch-message": unref(locale).baseText("ndv.output.noOutputDataInBranch"),
				"executing-message": unref(locale).baseText("ndv.output.executing"),
				"pane-type": __props.paneType,
				"disable-run-index-selection": true,
				compact: true,
				"show-actions-on-hover": true,
				"disable-pin": true,
				"disable-edit": true,
				"disable-hover-highlight": true,
				"disable-settings-hint": true,
				"display-mode": displayMode.value,
				"disable-ai-content": !unref(isSubNodeLog)(__props.logEntry),
				"is-executing": isExecuting.value,
				"table-header-bg-color": "light",
				"collapsing-table-column-name": __props.collapsingTableColumnName,
				"search-shortcut": __props.searchShortcut,
				onDisplayModeChange: handleChangeDisplayMode,
				onCollapsingTableColumnChanged: _cache[0] || (_cache[0] = ($event) => emit("collapsingTableColumnChanged", $event))
			}), createSlots({
				header: withCtx(() => [createVNode(unref(N8nText_default), {
					class: normalizeClass(_ctx.$style.title),
					bold: true,
					color: "text-light",
					size: "small"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.title), 1)]),
					_: 1
				}, 8, ["class"])]),
				"header-end": withCtx((itemCountProps) => [createVNode(RunDataItemCount_default, mergeProps(itemCountProps, { search: displayMode.value === "schema" ? "" : itemCountProps.search }), null, 16, ["search"])]),
				"no-output-data": withCtx(() => [createVNode(NDVEmptyState_default, { title: unref(locale).baseText("ndv.output.noOutputData.title") }, null, 8, ["title"])]),
				"node-waiting": withCtx(() => [createVNode(NDVEmptyState_default, {
					title: unref(locale).baseText("ndv.output.waitNodeWaiting.title"),
					wide: ""
				}, {
					default: withCtx(() => [withDirectives(createBaseVNode("span", null, null, 512), [[_directive_n8n_html, unref(waitingNodeTooltip)(__props.logEntry.node, __props.logEntry.workflow)]])]),
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
	component: "_component_7mlt9_125",
	title: "_title_7mlt9_129"
};
var LogsViewRunData_default = /* @__PURE__ */ __plugin_vue_export_helper_default(LogsViewRunData_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": LogsViewRunData_vue_vue_type_style_index_0_lang_module_default }]]);
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
		const container$6 = useTemplateRef("container");
		const resizer = useResizablePanel("N8N_LOGS_INPUT_PANEL_WIDTH", {
			container: container$6,
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
				ref: container$6,
				class: normalizeClass(_ctx.$style.container),
				"data-test-id": "log-details"
			}, [createVNode(LogsPanelHeader_default, {
				"data-test-id": "log-details-header",
				class: normalizeClass(_ctx.$style.header),
				"is-clickable": __props.isHeaderClickable,
				onClick: _cache[2] || (_cache[2] = ($event) => emit("clickHeader"))
			}, {
				title: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.title) }, [
					createVNode(NodeIcon_default, {
						"node-type": type.value,
						size: 16,
						class: normalizeClass(_ctx.$style.icon)
					}, null, 8, ["node-type", "class"]),
					createVNode(LogsViewNodeName_default, {
						name: __props.latestInfo?.name ?? __props.logEntry.node.name,
						"is-deleted": __props.latestInfo?.deleted ?? false
					}, null, 8, ["name", "is-deleted"]),
					__props.isOpen && __props.logEntry.runData !== void 0 ? (openBlock(), createBlock(LogsViewExecutionSummary_default, {
						key: 0,
						class: normalizeClass(_ctx.$style.executionSummary),
						status: __props.logEntry.runData.executionStatus ?? "unknown",
						"consumed-tokens": consumedTokens.value,
						"start-time": __props.logEntry.runData.startTime,
						"time-took": __props.logEntry.runData.executionTime
					}, null, 8, [
						"class",
						"status",
						"consumed-tokens",
						"start-time",
						"time-took"
					])) : createCommentVNode("", true)
				], 2)]),
				actions: withCtx(() => [__props.isOpen && !isTriggerNode.value && !unref(isPlaceholderLog)(__props.logEntry) ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.actions)
				}, [createVNode(KeyboardShortcutTooltip_default, {
					label: unref(locale).baseText("generic.shortcutHint"),
					shortcut: { keys: ["i"] }
				}, {
					default: withCtx(() => [createVNode(unref(N8nButton_default), {
						variant: "subtle",
						size: "xsmall",
						class: normalizeClass(__props.panels === unref(LOG_DETAILS_PANEL_STATE).OUTPUT ? "" : _ctx.$style.pressed),
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
						variant: "subtle",
						size: "xsmall",
						class: normalizeClass(__props.panels === unref(LOG_DETAILS_PANEL_STATE).INPUT ? "" : _ctx.$style.pressed),
						onClick: _cache[1] || (_cache[1] = withModifiers(($event) => emit("toggleOutputOpen"), ["stop"]))
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("logs.details.header.actions.output")), 1)]),
						_: 1
					}, 8, ["class"])]),
					_: 1
				}, 8, ["label"])], 2)) : createCommentVNode("", true), renderSlot(_ctx.$slots, "actions")]),
				_: 3
			}, 8, ["class", "is-clickable"]), __props.isOpen ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.content),
				"data-test-id": "logs-details-body"
			}, [unref(isPlaceholderLog)(__props.logEntry) ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.placeholder)
			}, [createVNode(unref(N8nText_default), { color: "text-base" }, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("ndv.output.runNodeHint")), 1)]),
				_: 1
			})], 2)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [!isTriggerNode.value && __props.panels !== unref(LOG_DETAILS_PANEL_STATE).OUTPUT ? (openBlock(), createBlock(unref(N8nResizeWrapper_default), {
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
				window: __props.window,
				onResize: unref(resizer).onResize,
				onResizeend: handleResizeEnd
			}, {
				default: withCtx(() => [createVNode(LogsViewRunData_default, {
					"data-test-id": "log-details-input",
					"pane-type": "input",
					title: unref(locale).baseText("logs.details.header.actions.input"),
					"log-entry": __props.logEntry,
					"collapsing-table-column-name": __props.collapsingInputTableColumnName,
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
			])) : createCommentVNode("", true), isTriggerNode.value || __props.panels !== unref(LOG_DETAILS_PANEL_STATE).INPUT ? (openBlock(), createBlock(LogsViewRunData_default, {
				key: 1,
				"data-test-id": "log-details-output",
				"pane-type": "output",
				class: normalizeClass(_ctx.$style.outputPanel),
				title: unref(locale).baseText("logs.details.header.actions.output"),
				"log-entry": __props.logEntry,
				"collapsing-table-column-name": __props.collapsingOutputTableColumnName,
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
	container: "_container_1du2i_125",
	header: "_header_1du2i_134",
	actions: "_actions_1du2i_138",
	pressed: "_pressed_1du2i_144",
	title: "_title_1du2i_148",
	icon: "_icon_1du2i_154",
	executionSummary: "_executionSummary_1du2i_158",
	content: "_content_1du2i_162",
	outputPanel: "_outputPanel_1du2i_170",
	inputResizer: "_inputResizer_1du2i_175",
	collapsed: "_collapsed_1du2i_179",
	full: "_full_1du2i_179",
	placeholder: "_placeholder_1du2i_183"
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
				!__props.isOpen && __props.showPopOutButton ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 0,
					content: popOutButtonText.value
				}, {
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						variant: "ghost",
						icon: "pop-out",
						size: "small",
						"icon-size": "medium",
						"aria-label": popOutButtonText.value,
						onClick: _cache[0] || (_cache[0] = withModifiers(($event) => emit("popOut"), ["stop"]))
					}, null, 8, ["aria-label"])]),
					_: 1
				}, 8, ["content"])) : createCommentVNode("", true),
				__props.isOpen ? (openBlock(), createBlock(unref(N8nActionDropdown_default), {
					key: 1,
					"icon-size": "small",
					"activator-icon": "ellipsis",
					"activator-size": "small",
					items: menuItems.value,
					teleported: false,
					onSelect: handleSelectMenuItem,
					onClick: _cache[1] || (_cache[1] = withModifiers(() => {}, ["stop"]))
				}, null, 8, ["items"])) : createCommentVNode("", true),
				__props.showToggleButton ? (openBlock(), createBlock(KeyboardShortcutTooltip_default, {
					key: `tooltip-${__props.isOpen}`,
					label: unref(locales).baseText("generic.shortcutHint"),
					shortcut: { keys: ["l"] }
				}, {
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						variant: "ghost",
						size: "small",
						"icon-size": "medium",
						icon: __props.isOpen ? "chevron-down" : "chevron-up",
						"aria-label": toggleButtonText.value,
						onClick: _cache[2] || (_cache[2] = withModifiers(($event) => emit("toggleOpen"), ["stop"]))
					}, null, 8, ["icon", "aria-label"])]),
					_: 1
				}, 8, ["label"])) : createCommentVNode("", true)
			], 2);
		};
	}
});
var LogsPanelActions_vue_vue_type_style_index_0_lang_module_default = { container: "_container_1g4ug_125" };
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
function usePopOutWindow({ title: title$3, container: container$6, content: content$2, initialHeight, initialWidth, shouldPopOut, onRequestClose }) {
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
		if (content$2.value) container$6.value?.appendChild(content$2.value);
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
function useLogsPanelLayout(workflowName, popOutContainer, popOutContent$1, container$6, logsContainer$1) {
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
		container: container$6,
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
		const container$6 = useTemplateRef("container");
		const logsContainer$1 = useTemplateRef("logsContainer");
		const popOutContainer = useTemplateRef("popOutContainer");
		const popOutContent$1 = useTemplateRef("popOutContent");
		const logsStore = useLogsStore();
		const ndvStore = useNDVStore();
		const workflowsStore = useWorkflowsStore();
		const { height, chatPanelWidth, overviewPanelWidth, canPopOut, isOpen, isPoppedOut, isCollapsingDetailsPanel, isOverviewPanelFullWidth, popOutWindow, onResize, onResizeEnd, onToggleOpen, onPopOut, onChatPanelResize, onChatPanelResizeEnd, onOverviewPanelResize, onOverviewPanelResizeEnd } = useLogsPanelLayout(computed(() => workflowsStore.workflow.name), popOutContainer, popOutContent$1, container$6, logsContainer$1);
		const { currentSessionId, messages, refreshSession, displayExecution } = useChatState(props.isReadOnly);
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
				container: container$6.value
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
					ref: container$6,
					class: normalizeClass(_ctx.$style.container),
					tabindex: "-1"
				}, [unref(hasChat) && (!props.isReadOnly || unref(messages).length > 0) ? (openBlock(), createBlock(unref(N8nResizeWrapper_default), {
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
						"is-read-only": __props.isReadOnly,
						"session-id": unref(currentSessionId),
						"show-close-button": false,
						"is-new-logs-enabled": true,
						"is-header-clickable": !unref(isPoppedOut),
						onClose: unref(onToggleOpen),
						onRefreshSession: unref(refreshSession),
						onDisplayExecution: unref(displayExecution),
						onClickHeader: unref(onToggleOpen)
					}, null, 8, [
						"is-open",
						"is-read-only",
						"session-id",
						"is-header-clickable",
						"onClose",
						"onRefreshSession",
						"onDisplayExecution",
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
						"is-read-only": __props.isReadOnly,
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
	popOutContent: "_popOutContent_14az5_125",
	resizeWrapper: "_resizeWrapper_14az5_131",
	poppedOut: "_poppedOut_14az5_138",
	container: "_container_14az5_142",
	chat: "_chat_14az5_151",
	logsContainer: "_logsContainer_14az5_155",
	overviewResizer: "_overviewResizer_14az5_165",
	logsOverview: "_logsOverview_14az5_173",
	logsDetails: "_logsDetails_14az5_177"
};
var LogsPanel_default = /* @__PURE__ */ __plugin_vue_export_helper_default(LogsPanel_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": LogsPanel_vue_vue_type_style_index_0_lang_module_default }]]);
function useWorkflowInitialization(workflowState) {
	const route = useRoute();
	const router = useRouter();
	const i18n = useI18n();
	const toast = useToast();
	const documentTitle = useDocumentTitle();
	const externalHooks = useExternalHooks();
	const workflowsStore = useWorkflowsStore();
	const workflowsListStore = useWorkflowsListStore();
	const uiStore = useUIStore();
	const nodeTypesStore = useNodeTypesStore();
	const credentialsStore = useCredentialsStore();
	const environmentsStore = useEnvironmentsStore();
	const externalSecretsStore = useExternalSecretsStore();
	const settingsStore = useSettingsStore();
	const projectsStore = useProjectsStore();
	const historyStore = useHistoryStore();
	const builderStore = useBuilderStore();
	const aiTemplatesStarterCollectionStore = useAITemplatesStarterCollectionStore();
	const readyToRunWorkflowsStore = useReadyToRunWorkflowsStore();
	const telemetry = useTelemetry();
	const { resetWorkspace, initializeWorkspace, fitView, openWorkflowTemplate, openWorkflowTemplateFromJSON } = useCanvasOperations();
	const { fetchAndSetParentFolder } = useParentFolder();
	const { applyExecutionData } = useExecutionDebugging(workflowState);
	const isLoading = ref(true);
	const initializedWorkflowId = ref();
	const currentWorkflowDocumentStore = shallowRef(null);
	function disposeCurrentWorkflowDocumentStore() {
		if (currentWorkflowDocumentStore.value) {
			disposeWorkflowDocumentStore(createWorkflowDocumentId(currentWorkflowDocumentStore.value.workflowId, currentWorkflowDocumentStore.value.workflowVersion));
			currentWorkflowDocumentStore.value = null;
		}
	}
	const isNewWorkflowRoute = computed(() => route.query.new === "true");
	const isDemoRoute = computed(() => route.name === VIEWS.DEMO);
	const isTemplateRoute = computed(() => route.name === VIEWS.TEMPLATE_IMPORT);
	const isOnboardingRoute = computed(() => route.name === VIEWS.WORKFLOW_ONBOARDING);
	const isDebugRoute = computed(() => route.name === VIEWS.EXECUTION_DEBUG);
	const workflowId = computed(() => {
		if (isDemoRoute.value) return "demo";
		const name = route.params.name;
		return (Array.isArray(name) ? name[0] : name) ?? "";
	});
	async function loadCredentials() {
		let options;
		if (workflowId.value && !isNewWorkflowRoute.value) options = { workflowId: workflowId.value };
		else {
			const projectId = (typeof route.query?.projectId === "string" ? route.query?.projectId : void 0) ?? projectsStore.personalProject?.id;
			if (projectId === void 0) throw new Error("Could not find projectId in the query nor could I find the personal project in the project store");
			options = { projectId };
		}
		await credentialsStore.fetchAllCredentialsForWorkflow(options);
	}
	async function handleTemplateImportRoute() {
		if (!isTemplateRoute.value) return false;
		const templateId = route.params.id;
		if (!templateId) return false;
		disposeCurrentWorkflowDocumentStore();
		try {
			await Promise.all([loadCredentials(), credentialsStore.fetchCredentialTypes(true)]);
		} catch (error) {
			toast.showError(error, i18n.baseText("nodeView.showError.mounted1.title"), i18n.baseText("nodeView.showError.mounted1.message") + ":");
		}
		if (route.query.fromJson === "true") {
			const workflow = getSampleWorkflowByTemplateId(templateId.toString());
			if (!workflow) {
				toast.showError(new Error(i18n.baseText("nodeView.couldntLoadWorkflow.invalidWorkflowObject")), i18n.baseText("nodeView.couldntImportWorkflow"));
				await router.replace({ name: VIEWS.NEW_WORKFLOW });
				return true;
			}
			await openWorkflowTemplateFromJSON(workflow);
		} else await openWorkflowTemplate(templateId.toString());
		const currentWorkflowId = workflowsStore.workflowId;
		if (currentWorkflowId) currentWorkflowDocumentStore.value = useWorkflowDocumentStore(createWorkflowDocumentId(currentWorkflowId));
		return true;
	}
	async function handleDebugModeRoute() {
		if (!isDebugRoute.value) return;
		documentTitle.setDocumentTitle(workflowsStore.workflowName, "DEBUG");
		if (!workflowsStore.isInDebugMode) {
			const executionId = route.params.executionId;
			if (typeof executionId === "string") {
				await applyExecutionData(executionId);
				workflowsStore.isInDebugMode = true;
			}
		}
	}
	async function initializeData() {
		const isPreviewPage = settingsStore.isPreviewMode && isDemoRoute.value;
		const loadPromises = (() => {
			if (isPreviewPage) return [];
			const promises = [
				workflowsListStore.fetchActiveWorkflows(),
				credentialsStore.fetchCredentialTypes(true),
				loadCredentials()
			];
			if (settingsStore.isEnterpriseFeatureEnabled[EnterpriseEditionFeature.Variables]) promises.push(environmentsStore.fetchAllVariables());
			if (settingsStore.isEnterpriseFeatureEnabled[EnterpriseEditionFeature.ExternalSecrets]) {
				promises.push(externalSecretsStore.fetchGlobalSecrets());
				if (projectsStore.currentProjectId !== projectsStore.personalProject?.id && typeof projectsStore.currentProjectId === "string") promises.push(externalSecretsStore.fetchProjectSecrets(projectsStore.currentProjectId));
			}
			return promises;
		})();
		if (nodeTypesStore.allNodeTypes.length === 0) loadPromises.push(nodeTypesStore.getNodeTypes());
		try {
			if (isPreviewPage) loadPromises.push(nodeTypesStore.fetchCommunityNodePreviews());
			else nodeTypesStore.fetchCommunityNodePreviews();
			await Promise.all(loadPromises);
		} catch (error) {
			toast.showError(error, i18n.baseText("nodeView.showError.mounted1.title"), i18n.baseText("nodeView.showError.mounted1.message") + ":");
		}
	}
	async function openWorkflow(data) {
		disposeCurrentWorkflowDocumentStore();
		resetWorkspace();
		if (builderStore.streaming) documentTitle.setDocumentTitle(data.name, "AI_BUILDING");
		else documentTitle.setDocumentTitle(data.name, "IDLE");
		const { workflowDocumentStore } = await initializeWorkspace(data);
		currentWorkflowDocumentStore.value = workflowDocumentStore;
		externalHooks.run("workflow.open", {
			workflowId: data.id,
			workflowName: data.name
		});
		fitView();
	}
	async function initializeWorkspaceForNewWorkflow() {
		disposeCurrentWorkflowDocumentStore();
		resetWorkspace();
		const parentFolderId = route.query.parentFolderId;
		await workflowState.getNewWorkflowDataAndMakeShareable(void 0, projectsStore.currentProjectId, parentFolderId);
		workflowState.setWorkflowId(workflowId.value);
		currentWorkflowDocumentStore.value = useWorkflowDocumentStore(createWorkflowDocumentId(workflowId.value));
		await projectsStore.refreshCurrentProject();
		await fetchAndSetParentFolder(parentFolderId);
		uiStore.nodeViewInitialized = true;
		initializedWorkflowId.value = workflowId.value;
		fitView();
	}
	async function initializeWorkspaceForExistingWorkflow(id) {
		try {
			const workflowData = await workflowsListStore.fetchWorkflow(id);
			await openWorkflow(workflowData);
			if (workflowData.parentFolder) workflowsStore.setParentFolder(workflowData.parentFolder);
			if (workflowData.meta?.onboardingId) telemetry.track(`User opened workflow from onboarding template with ID ${workflowData.meta.onboardingId}`, { workflow_id: id });
			if (workflowData.meta?.templateId?.startsWith("035_template_onboarding")) aiTemplatesStarterCollectionStore.trackUserOpenedWorkflow(workflowData.meta.templateId.split("-").pop() ?? "");
			if (workflowData.meta?.templateId?.startsWith("37_onboarding_experiments_batch_aug11")) readyToRunWorkflowsStore.trackOpenWorkflow(workflowData.meta.templateId.split("-").pop() ?? "");
			await projectsStore.setProjectNavActiveIdByWorkflowHomeProject(workflowData.homeProject, workflowData.sharedWithProjects);
			workflowsStore.fetchLastSuccessfulExecution();
		} catch (error) {
			if (error.httpStatusCode === 404) return await router.replace({
				name: VIEWS.ENTITY_NOT_FOUND,
				params: { entityType: "workflow" }
			});
			if (error.httpStatusCode === 403) return await router.replace({
				name: VIEWS.ENTITY_UNAUTHORIZED,
				params: { entityType: "workflow" }
			});
			toast.showError(error, i18n.baseText("openWorkflow.workflowNotFoundError"));
			router.push({ name: VIEWS.NEW_WORKFLOW });
		} finally {
			uiStore.nodeViewInitialized = true;
			initializedWorkflowId.value = workflowId.value;
		}
	}
	async function initializeWorkflow(force = false) {
		if (uiStore.isBlankRedirect) {
			uiStore.isBlankRedirect = false;
			isLoading.value = false;
			return;
		}
		if (await handleTemplateImportRoute()) {
			isLoading.value = false;
			return;
		}
		if (!workflowId.value) {
			isLoading.value = false;
			return;
		}
		if (!force && initializedWorkflowId.value && initializedWorkflowId.value === workflowId.value) {
			await handleDebugModeRoute();
			isLoading.value = false;
			return;
		}
		isLoading.value = true;
		try {
			historyStore.reset();
			if (isDemoRoute.value) {
				await initializeWorkspaceForNewWorkflow();
				return;
			}
			if (isNewWorkflowRoute.value) if (!await workflowsListStore.checkWorkflowExists(workflowId.value) && route.meta?.nodeView === true) {
				await initializeWorkspaceForNewWorkflow();
				return;
			} else await router.replace({
				...route,
				query: {
					...route.query,
					new: void 0
				}
			});
			await initializeWorkspaceForExistingWorkflow(workflowId.value);
			await handleDebugModeRoute();
		} finally {
			isLoading.value = false;
		}
	}
	function cleanup() {
		disposeCurrentWorkflowDocumentStore();
		resetWorkspace();
		uiStore.nodeViewInitialized = false;
	}
	return {
		isLoading,
		initializedWorkflowId,
		workflowId,
		currentWorkflowDocumentStore,
		isNewWorkflowRoute,
		isDemoRoute,
		isTemplateRoute,
		isOnboardingRoute,
		isDebugRoute,
		loadCredentials,
		initializeData,
		openWorkflow,
		initializeWorkspaceForNewWorkflow,
		initializeWorkspaceForExistingWorkflow,
		handleTemplateImportRoute,
		handleDebugModeRoute,
		initializeWorkflow,
		cleanup
	};
}
function useWorkflowImport(currentWorkflowDocumentStore) {
	const route = useRoute();
	const { resetWorkspace, initializeWorkspace, fitView } = useCanvasOperations();
	const isDemoRoute = computed(() => route.name === VIEWS.DEMO);
	async function importWorkflowExact({ workflow: workflowData }) {
		if (!workflowData.nodes || !workflowData.connections) throw new Error("Invalid workflow object");
		resetWorkspace();
		const { workflowDocumentStore } = await initializeWorkspace({
			...workflowData,
			id: isDemoRoute.value ? "demo" : workflowData.id,
			nodes: getNodesWithNormalizedPosition(workflowData.nodes)
		});
		currentWorkflowDocumentStore.value = workflowDocumentStore;
		fitView();
	}
	return { importWorkflowExact };
}
function usePostMessageHandler({ workflowState, currentWorkflowDocumentStore }) {
	const i18n = useI18n();
	const toast = useToast();
	const canvasStore = useCanvasStore();
	const projectsStore = useProjectsStore();
	const executionsStore = useExecutionsStore();
	const rootStore = useRootStore();
	const externalHooks = useExternalHooks();
	const telemetry = useTelemetry();
	const nodeHelpers = useNodeHelpers();
	const { resetWorkspace, openExecution, fitView } = useCanvasOperations();
	const { importWorkflowExact } = useWorkflowImport(currentWorkflowDocumentStore);
	function emitPostMessageReady() {
		if (window.parent) window.parent.postMessage(JSON.stringify({
			command: "n8nReady",
			version: rootStore.versionCli
		}), "*");
	}
	function reportErrorToParent(message) {
		if (window.top) window.top.postMessage(JSON.stringify({
			command: "error",
			message
		}), "*");
	}
	async function handleOpenWorkflow(json) {
		if (json.projectId) await projectsStore.fetchAndSetProject(json.projectId);
		await importWorkflowExact(json);
		if (json.tidyUp === true) canvasEventBus.emit("tidyUp", { source: "import-workflow-data" });
	}
	async function handleOpenExecution(json) {
		if (json.projectId) await projectsStore.fetchAndSetProject(json.projectId);
		nodeHelpers.isProductionExecutionPreview.value = json.executionMode !== "manual" && json.executionMode !== "evaluation";
		canvasStore.startLoading();
		resetWorkspace();
		const data = await openExecution(json.executionId, json.nodeId);
		if (!data) return;
		nextTick(() => {
			nodeHelpers.updateNodesInputIssues();
			nodeHelpers.updateNodesCredentialsIssues();
		});
		canvasStore.stopLoading();
		fitView();
		canvasEventBus.emit("open:execution", data);
		externalHooks.run("execution.open", {
			workflowId: data.workflowData.id,
			workflowName: data.workflowData.name,
			executionId: json.executionId
		});
		telemetry.track("User opened read-only execution", {
			workflow_id: data.workflowData.id,
			execution_mode: data.mode,
			execution_finished: data.finished
		});
	}
	async function handleOpenExecutionPreview(json) {
		canvasStore.startLoading();
		const workflow = json.workflow;
		if (!workflow?.nodes || !workflow?.connections) {
			canvasStore.stopLoading();
			throw new Error("Invalid workflow object");
		}
		if (json.projectId) await projectsStore.fetchAndSetProject(json.projectId);
		const data = buildExecutionResponseFromSchema({
			workflow,
			nodeExecutionSchema: json.nodeExecutionSchema,
			executionStatus: json.executionStatus,
			executionError: json.executionError,
			lastNodeExecuted: json.lastNodeExecuted
		});
		await importWorkflowExact(json);
		workflowState.setWorkflowExecutionData(data);
		currentWorkflowDocumentStore.value?.setPinData({});
		canvasStore.stopLoading();
		canvasEventBus.emit("open:execution", data);
	}
	async function onPostMessageReceived(messageEvent) {
		if (!messageEvent || typeof messageEvent.data !== "string" || !messageEvent.data?.includes?.("\"command\"")) return;
		try {
			const json = JSON.parse(messageEvent.data);
			if (json && json.command === "openWorkflow") try {
				await handleOpenWorkflow(json);
			} catch (e) {
				reportErrorToParent(i18n.baseText("openWorkflow.workflowImportError"));
				toast.showError(e, i18n.baseText("openWorkflow.workflowImportError"));
			}
			else if (json && json.command === "openExecution") try {
				await handleOpenExecution(json);
			} catch (e) {
				reportErrorToParent(i18n.baseText("nodeView.showError.openExecution.title"));
				toast.showMessage({
					title: i18n.baseText("nodeView.showError.openExecution.title"),
					message: e.message,
					type: "error"
				});
			}
			else if (json && json.command === "openExecutionPreview") try {
				await handleOpenExecutionPreview(json);
			} catch (e) {
				reportErrorToParent(i18n.baseText("nodeView.showError.openExecution.title"));
				toast.showMessage({
					title: i18n.baseText("nodeView.showError.openExecution.title"),
					message: e.message,
					type: "error"
				});
			}
			else if (json?.command === "setActiveExecution") executionsStore.activeExecution = await executionsStore.fetchExecution(json.executionId);
		} catch {}
	}
	function setup() {
		window.addEventListener("message", onPostMessageReceived);
		emitPostMessageReady();
	}
	function cleanup() {
		window.removeEventListener("message", onPostMessageReceived);
	}
	return {
		setup,
		cleanup
	};
}
export { useWorkflowInitialization as n, LogsPanel_default as r, usePostMessageHandler as t };
