import { o as __toESM } from "./chunk-CC9Q-vWm.js";
import { $ as openBlock, A as createTextVNode, Bt as toRef, C as createBaseVNode, E as createElementBlock, Ft as ref, N as defineComponent, O as createSlots, Q as onUpdated, R as inject, S as computed, Sn as toDisplayString, T as createCommentVNode, W as nextTick, Wt as unref, X as onMounted, Z as onUnmounted, _ as Fragment, _n as normalizeClass, at as resolveComponent, bt as withDirectives, c as useCssModule, f as vModelText, gt as watch, h as withModifiers, it as renderSlot, j as createVNode, m as withKeys, n as Transition, p as vShow, pt as useTemplateRef, q as onBeforeUnmount, r as TransitionGroup, rt as renderList, tt as provide, w as createBlock, yn as normalizeStyle, yt as withCtx } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { C as useSpeechRecognition, J as useDebounceFn, at as useI18n, f as useElementHover, k as useWindowSize, n as onClickOutside, x as useScroll } from "./core-kTPk-AyG.js";
import { $i as N8nIcon_default, A as N8nResizeWrapper_default, Gi as CollapsibleContent_default, It as N8nBadge_default, Ki as CollapsibleRoot_default, Mi as Input_default, Ni as N8nIconButton_default, Nt as N8nActionDropdown_default, Oi as N8nTooltip_default, Qi as N8nButton_default, Tt as N8nCard_default, Wi as CollapsibleTrigger_default, Xi as N8nCallout_default, Yi as N8nHeading_default, Zi as N8nText_default, ft as Checkbox_default, ji as MessageRating_default, k as N8nSpinner_default, lt as useRoute, m as N8nScrollArea_default, nt as N8nLink_default, ut as useRouter } from "./src-CZ-hzc1s.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { Bi as getAppNameFromCredType, Fn as useToast, Vn as require_FileSaver_min, _r as useNDVStore, at as useCredentialsStore, cr as useWorkflowsListStore, ja as getWorkflow, pr as useTelemetry, r as useUIStore, s as useWorkflowsStore, si as useSourceControlStore, ur as useNodeHelpers, w as useNodeTypesStore, zt as useDocumentTitle } from "./users.store-DgRSn0AL.js";
import { D as NodeCredentials_default, t as ParameterInputList_default } from "./ParameterInputList-DKsoVI2G.js";
import { Cc as ExpressionLocalResolveContextSymbol, Xo as isResourceLocatorValue, vo as displayParameter, ys as NodeConnectionTypes } from "./constants-CtrH8tKg.js";
import { T as defineStore, t as useRootStore } from "./useRootStore-BIUbMx8C.js";
import { t as usePageRedirectionHelper } from "./usePageRedirectionHelper-0HM1PUMJ.js";
import { t as useDataTableStore } from "./dataTable.store-CIpeAQXS.js";
import { t as useClipboard } from "./useClipboard-BBTaVfBK.js";
import { t as CredentialIcon_default } from "./CredentialIcon-C0RIa37V.js";
import { t as usePushConnectionStore } from "./pushConnection.store-DjBf3Rd0.js";
import { i as NEW_CONVERSATION_TITLE, n as INSTANCE_AI_THREAD_VIEW, t as INSTANCE_AI_SETTINGS_VIEW } from "./constants-8298CnSC.js";
import { t as useExpressionResolveCtx } from "./useExpressionResolveCtx-s7Hbigr1.js";
import { p as getRelativeDate, t as convertFileToBinaryData } from "./fileUtils-1PvjcKTQ.js";
import { t as useInstanceAiSettingsStore } from "./instanceAiSettings.store-CP4E_5Wb.js";
import { a as fetchThreads, i as fetchThreadMessages, n as CreditsSettingsDropdown_default, r as useInstanceAiStore, t as CreditWarningBanner_default } from "./CreditWarningBanner-B_Prf2Mi.js";
import { r as getNodeParametersIssues } from "./setupPanel.utils-BYifudl-.js";
import { t as ChatFile_default } from "./ChatFile-ChTjtFG3.js";
import { t as ChatMarkdownChunk_default } from "./ChatMarkdownChunk-CDD8CRa0.js";
import { t as WorkflowPreview_default } from "./WorkflowPreview-C3RfjXNI.js";
import { t as DataTableTable_default } from "./DataTableTable-dE7n_3ho.js";
//#region src/features/ai/instanceAi/canvasPreview.utils.ts
/**
* Walks an agent tree depth-first (most recent last) and returns the workflowId
* and toolCallId from the latest successful build-workflow / submit-workflow tool result.
*/
function getLatestBuildResult(node) {
	for (let i = node.children.length - 1; i >= 0; i--) {
		const childResult = getLatestBuildResult(node.children[i]);
		if (childResult) return childResult;
	}
	for (let i = node.toolCalls.length - 1; i >= 0; i--) {
		const tc = node.toolCalls[i];
		if ((tc.toolName === "build-workflow" || tc.toolName === "submit-workflow") && !tc.isLoading && tc.result && typeof tc.result === "object") {
			const result = tc.result;
			if (result.success === true && typeof result.workflowId === "string") return {
				workflowId: result.workflowId,
				toolCallId: tc.toolCallId
			};
		}
	}
}
/**
* Walks an agent tree depth-first (most recent last) and returns the executionId
* and workflowId from the latest completed run-workflow tool result.
*/
function getLatestExecutionId(node) {
	for (let i = node.children.length - 1; i >= 0; i--) {
		const childResult = getLatestExecutionId(node.children[i]);
		if (childResult) return childResult;
	}
	for (let i = node.toolCalls.length - 1; i >= 0; i--) {
		const tc = node.toolCalls[i];
		if (tc.toolName === "run-workflow" && !tc.isLoading && tc.result && typeof tc.result === "object") {
			const result = tc.result;
			const args = tc.args;
			if (typeof result.executionId === "string" && typeof args?.workflowId === "string") return {
				executionId: result.executionId,
				workflowId: args.workflowId
			};
		}
	}
}
var DATA_TABLE_TOOL_NAMES = new Set([
	"create-data-table",
	"insert-data-table-rows",
	"update-data-table-rows",
	"delete-data-table-rows",
	"add-data-table-column",
	"delete-data-table-column",
	"rename-data-table-column",
	"move-data-table-column"
]);
/** Per-tool check that the result indicates a successful mutation. */
var RESULT_VALIDATORS = {
	"insert-data-table-rows": (r) => typeof r.insertedCount === "number",
	"update-data-table-rows": (r) => typeof r.updatedCount === "number",
	"add-data-table-column": (r) => r.column !== null && r.column !== void 0 && typeof r.column === "object",
	"delete-data-table-rows": (r) => r.success === true,
	"delete-data-table-column": (r) => r.success === true,
	"rename-data-table-column": (r) => r.success === true,
	"move-data-table-column": (r) => r.success === true
};
function extractDataTableId(toolName, result, args) {
	if (toolName === "create-data-table") {
		if (result.table && typeof result.table === "object") {
			const table = result.table;
			if (typeof table.id === "string") return table.id;
		}
		return;
	}
	const isValid = RESULT_VALIDATORS[toolName];
	if (isValid?.(result) && typeof args?.dataTableId === "string") return args.dataTableId;
}
/**
* Walks an agent tree depth-first (most recent last) and returns the dataTableId
* from the latest successful delete-data-table tool result.
*/
function getLatestDeletedDataTableId(node) {
	for (let i = node.children.length - 1; i >= 0; i--) {
		const childResult = getLatestDeletedDataTableId(node.children[i]);
		if (childResult) return childResult;
	}
	for (let i = node.toolCalls.length - 1; i >= 0; i--) {
		const tc = node.toolCalls[i];
		if (tc.toolName === "delete-data-table" && !tc.isLoading && tc.result && typeof tc.result === "object") {
			const result = tc.result;
			const args = tc.args;
			if (result.success === true && typeof args?.dataTableId === "string") return args.dataTableId;
		}
	}
}
function getLatestDataTableResult(node) {
	for (let i = node.children.length - 1; i >= 0; i--) {
		const childResult = getLatestDataTableResult(node.children[i]);
		if (childResult) return childResult;
	}
	for (let i = node.toolCalls.length - 1; i >= 0; i--) {
		const tc = node.toolCalls[i];
		if (DATA_TABLE_TOOL_NAMES.has(tc.toolName) && !tc.isLoading && tc.result && typeof tc.result === "object") {
			const result = tc.result;
			const args = tc.args;
			const dataTableId = extractDataTableId(tc.toolName, result, args);
			if (dataTableId) return {
				dataTableId,
				toolCallId: tc.toolCallId
			};
		}
	}
}
/**
* Walks an agent tree and collects the latest completed run-workflow result
* per workflowId. Used to restore execution status from historical messages
* after page refresh.
*/
function getExecutionResultsByWorkflow(node) {
	const results = /* @__PURE__ */ new Map();
	collectExecutionResults(node, results);
	return results;
}
function collectExecutionResults(node, results) {
	for (const tc of node.toolCalls) {
		if (tc.toolName !== "run-workflow" || tc.isLoading) continue;
		const result = tc.result;
		const args = tc.args;
		if (typeof result === "object" && result !== null && typeof args === "object" && args !== null && "workflowId" in args && typeof args.workflowId === "string" && "executionId" in result && typeof result.executionId === "string" && "status" in result && (result.status === "success" || result.status === "error")) results.set(args.workflowId, {
			executionId: result.executionId,
			status: result.status,
			..."finishedAt" in result && typeof result.finishedAt === "string" ? { finishedAt: result.finishedAt } : {}
		});
	}
	for (const child of node.children) collectExecutionResults(child, results);
}
//#endregion
//#region src/features/ai/instanceAi/useCanvasPreview.ts
var ARTIFACT_ICON_MAP = {
	workflow: "workflow",
	"data-table": "table"
};
function useCanvasPreview({ store, route, workflowExecutions }) {
	const workflowsListStore = useWorkflowsListStore();
	const activeTabId = ref(null);
	const activeExecutionId = ref(null);
	const pendingRestore = ref(true);
	function currentThreadId() {
		const id = route.params.threadId;
		return typeof id === "string" ? id : store.currentThreadId;
	}
	const debouncedSavePreviewState = useDebounceFn((tabId) => {
		const threadId = currentThreadId();
		if (!threadId) return;
		store.updateThreadMetadata(threadId, { activePreviewTab: tabId });
	}, 500);
	watch(activeTabId, (tabId) => {
		if (pendingRestore.value) return;
		debouncedSavePreviewState(tabId);
	});
	const historicalExecutions = computed(() => {
		const results = /* @__PURE__ */ new Map();
		for (const msg of store.messages) {
			if (!msg.agentTree) continue;
			for (const [wfId, result] of getExecutionResultsByWorkflow(msg.agentTree)) results.set(wfId, result);
		}
		for (const [wfId, result] of results) {
			if (!result.finishedAt) continue;
			const wf = workflowsListStore.getWorkflowById(wfId);
			if (wf?.updatedAt && new Date(wf.updatedAt) > new Date(result.finishedAt)) results.delete(wfId);
		}
		return results;
	});
	const allArtifactTabs = computed(() => {
		const result = [];
		const liveExecMap = workflowExecutions?.value;
		const historicalExecMap = historicalExecutions.value;
		for (const entry of store.resourceRegistry.values()) if (entry.type === "workflow" || entry.type === "data-table") {
			const status = entry.type === "workflow" ? liveExecMap?.get(entry.id)?.status ?? historicalExecMap.get(entry.id)?.status : void 0;
			result.push({
				id: entry.id,
				type: entry.type,
				name: entry.name,
				icon: ARTIFACT_ICON_MAP[entry.type] ?? "file",
				projectId: entry.projectId,
				executionStatus: status
			});
		}
		return result;
	});
	watch(allArtifactTabs, (tabs) => {
		if (!pendingRestore.value || tabs.length === 0) return;
		pendingRestore.value = false;
		const threadId = currentThreadId();
		if (!threadId) return;
		const savedTabId = store.getThreadMetadata(threadId)?.activePreviewTab;
		if (typeof savedTabId === "string" && tabs.some((t) => t.id === savedTabId)) activeTabId.value = savedTabId;
	});
	const activeWorkflowId = computed(() => {
		const tab = allArtifactTabs.value.find((t) => t.id === activeTabId.value);
		return tab?.type === "workflow" ? tab.id : null;
	});
	const activeDataTableId = computed(() => {
		const tab = allArtifactTabs.value.find((t) => t.id === activeTabId.value);
		return tab?.type === "data-table" ? tab.id : null;
	});
	const activeDataTableProjectId = computed(() => {
		const tab = allArtifactTabs.value.find((t) => t.id === activeTabId.value);
		return tab?.type === "data-table" ? tab.projectId ?? null : null;
	});
	const dataTableRefreshKey = ref(0);
	const isPreviewVisible = computed(() => activeTabId.value !== null);
	const userSentMessage = ref(false);
	const wasCanvasOpenBeforeSwitch = ref(false);
	function selectTab(tabId) {
		activeTabId.value = tabId;
	}
	function closePreview() {
		activeTabId.value = null;
		activeExecutionId.value = null;
	}
	function openWorkflowPreview(workflowId) {
		activeTabId.value = workflowId;
	}
	function openDataTablePreview(dataTableId, _projectId) {
		activeExecutionId.value = null;
		activeTabId.value = dataTableId;
	}
	function markUserSentMessage() {
		userSentMessage.value = true;
	}
	watch(() => {
		if (!workflowExecutions || !activeTabId.value) return void 0;
		return workflowExecutions.value.get(activeTabId.value)?.status;
	}, (status) => {
		if (status === "running") activeExecutionId.value = null;
	});
	watch(activeTabId, (tabId, oldTabId) => {
		if (!tabId) return;
		if (workflowExecutions?.value.get(tabId)?.status === "running") return;
		const historical = historicalExecutions.value.get(tabId);
		if (historical) activeExecutionId.value = historical.executionId;
		else if (oldTabId) activeExecutionId.value = null;
	});
	watch(allArtifactTabs, (tabs) => {
		if (activeTabId.value === null || tabs.length === 0) return;
		if (!tabs.some((t) => t.id === activeTabId.value)) activeTabId.value = tabs[0].id;
	});
	watch(() => route.params.threadId, () => {
		wasCanvasOpenBeforeSwitch.value = isPreviewVisible.value;
		pendingRestore.value = true;
		activeTabId.value = null;
		activeExecutionId.value = null;
		userSentMessage.value = false;
	});
	const workflowRefreshKey = ref(0);
	const latestBuildResult = computed(() => {
		for (let i = store.messages.length - 1; i >= 0; i--) {
			const msg = store.messages[i];
			if (msg.agentTree) {
				const result = getLatestBuildResult(msg.agentTree);
				if (result) return result;
			}
		}
		return null;
	});
	watch(() => latestBuildResult.value?.toolCallId, (toolCallId) => {
		if (!toolCallId || !latestBuildResult.value) return;
		const targetId = latestBuildResult.value.workflowId;
		if (!isPreviewVisible.value && !store.isStreaming && !userSentMessage.value && !wasCanvasOpenBeforeSwitch.value) return;
		if (workflowExecutions?.value.has(targetId)) {
			const next = new Map(workflowExecutions.value);
			next.delete(targetId);
			workflowExecutions.value = next;
		}
		if (isPreviewVisible.value && activeTabId.value !== null && activeTabId.value !== targetId) {
			workflowRefreshKey.value++;
			return;
		}
		wasCanvasOpenBeforeSwitch.value = false;
		activeExecutionId.value = null;
		activeTabId.value = targetId;
		workflowRefreshKey.value++;
	});
	const latestExecution = computed(() => {
		for (let i = store.messages.length - 1; i >= 0; i--) {
			const msg = store.messages[i];
			if (msg.agentTree) {
				const result = getLatestExecutionId(msg.agentTree);
				if (result) return result;
			}
		}
		return null;
	});
	watch(() => latestExecution.value?.executionId, () => {
		const exec = latestExecution.value;
		if (!exec) return;
		if (!isPreviewVisible.value && !store.isStreaming && !userSentMessage.value) return;
		if (isPreviewVisible.value && activeTabId.value !== null && activeTabId.value !== exec.workflowId) return;
		activeExecutionId.value = exec.executionId;
		activeTabId.value = exec.workflowId;
		if (!isPreviewVisible.value) workflowRefreshKey.value++;
	});
	const latestDataTableResult = computed(() => {
		for (let i = store.messages.length - 1; i >= 0; i--) {
			const msg = store.messages[i];
			if (msg.agentTree) {
				const result = getLatestDataTableResult(msg.agentTree);
				if (result) return result;
			}
		}
		return null;
	});
	watch(() => latestDataTableResult.value?.toolCallId, (toolCallId) => {
		if (!toolCallId || !latestDataTableResult.value) return;
		const targetId = latestDataTableResult.value.dataTableId;
		if (!isPreviewVisible.value && !store.isStreaming && !userSentMessage.value && !wasCanvasOpenBeforeSwitch.value) return;
		if (isPreviewVisible.value && activeTabId.value !== null && activeTabId.value !== targetId) {
			dataTableRefreshKey.value++;
			return;
		}
		wasCanvasOpenBeforeSwitch.value = false;
		activeExecutionId.value = null;
		activeTabId.value = targetId;
		dataTableRefreshKey.value++;
	});
	watch(computed(() => {
		for (let i = store.messages.length - 1; i >= 0; i--) {
			const msg = store.messages[i];
			if (msg.agentTree) {
				const id = getLatestDeletedDataTableId(msg.agentTree);
				if (id) return id;
			}
		}
		return null;
	}), (deletedId) => {
		if (deletedId && deletedId === activeTabId.value) {
			const remaining = allArtifactTabs.value.filter((t) => t.id !== deletedId);
			activeTabId.value = remaining.length > 0 ? remaining[0].id : null;
		}
	});
	return {
		activeTabId,
		allArtifactTabs,
		activeWorkflowId,
		activeExecutionId,
		activeDataTableId,
		activeDataTableProjectId,
		dataTableRefreshKey,
		isPreviewVisible,
		userSentMessage,
		workflowRefreshKey,
		selectTab,
		closePreview,
		openWorkflowPreview,
		openDataTablePreview,
		markUserSentMessage
	};
}
//#endregion
//#region src/features/ai/instanceAi/useEventRelay.ts
function useEventRelay({ workflowExecutions, activeWorkflowId, getBufferedEvents, relay }) {
	function handleIframeReady() {
		nextTick(() => {
			const wfId = activeWorkflowId.value;
			if (!wfId) return;
			const buffered = getBufferedEvents(wfId);
			for (const event of buffered) relay(event);
		});
	}
	const prevStatus = /* @__PURE__ */ new Map();
	watch(() => workflowExecutions.value, (executions) => {
		const wfId = activeWorkflowId.value;
		if (!wfId) return;
		const entry = executions.get(wfId);
		if (!entry) return;
		const prev = prevStatus.get(wfId);
		prevStatus.set(wfId, entry.status);
		if (entry.status === "running") {
			const log = entry.eventLog;
			if (log.length > 0) relay(log[log.length - 1]);
		} else if (prev === "running") relay({
			type: "executionFinished",
			data: {
				executionId: entry.executionId,
				workflowId: entry.workflowId,
				status: entry.status
			}
		});
	});
	return { handleIframeReady };
}
//#endregion
//#region src/features/ai/instanceAi/useExecutionPushEvents.ts
var EXECUTION_EVENT_TYPES = new Set([
	"executionStarted",
	"executionFinished",
	"nodeExecuteBefore",
	"nodeExecuteAfter",
	"nodeExecuteAfterData"
]);
function useExecutionPushEvents() {
	const workflowExecutions = ref(/* @__PURE__ */ new Map());
	const executionToWorkflow = /* @__PURE__ */ new Map();
	const pushStore = usePushConnectionStore();
	function handlePushEvent(event) {
		if (!EXECUTION_EVENT_TYPES.has(event.type)) return;
		if (event.type === "executionStarted") {
			const { executionId, workflowId } = event.data;
			executionToWorkflow.set(executionId, workflowId);
			const next = new Map(workflowExecutions.value);
			next.set(workflowId, {
				executionId,
				workflowId,
				status: "running",
				eventLog: [event]
			});
			workflowExecutions.value = next;
			return;
		}
		if (event.type === "executionFinished") {
			const { executionId, workflowId, status } = event.data;
			const entry = workflowExecutions.value.get(workflowId);
			if (!entry || entry.executionId !== executionId) return;
			const next = new Map(workflowExecutions.value);
			next.set(workflowId, {
				...entry,
				status: status === "success" ? "success" : "error",
				eventLog: []
			});
			workflowExecutions.value = next;
			executionToWorkflow.delete(executionId);
			return;
		}
		const executionId = event.data.executionId;
		const workflowId = executionToWorkflow.get(executionId);
		if (!workflowId) return;
		const entry = workflowExecutions.value.get(workflowId);
		if (!entry || entry.executionId !== executionId) return;
		const next = new Map(workflowExecutions.value);
		next.set(workflowId, {
			...entry,
			eventLog: [...entry.eventLog, event]
		});
		workflowExecutions.value = next;
	}
	const removeListener = pushStore.addEventListener(handlePushEvent);
	function getStatus(workflowId) {
		return workflowExecutions.value.get(workflowId)?.status;
	}
	function getBufferedEvents(workflowId) {
		return workflowExecutions.value.get(workflowId)?.eventLog ?? [];
	}
	function clearAll() {
		workflowExecutions.value = /* @__PURE__ */ new Map();
		executionToWorkflow.clear();
	}
	function cleanup() {
		removeListener();
	}
	return {
		workflowExecutions,
		getStatus,
		getBufferedEvents,
		clearAll,
		cleanup
	};
}
//#endregion
//#region src/features/ai/instanceAi/emptyStateSuggestions.ts
var isPromptSuggestion = (suggestion) => suggestion.type === "prompt";
var isMenuSuggestion = (suggestion) => suggestion.type === "menu";
var INSTANCE_AI_EMPTY_STATE_SUGGESTIONS = [
	{
		type: "prompt",
		id: "build-workflow",
		icon: "workflow",
		labelKey: "instanceAi.emptyState.suggestions.buildWorkflow.label",
		promptKey: "instanceAi.emptyState.suggestions.buildWorkflow.prompt"
	},
	{
		type: "prompt",
		id: "build-agent",
		icon: "bot",
		labelKey: "instanceAi.emptyState.suggestions.buildAgent.label",
		promptKey: "instanceAi.emptyState.suggestions.buildAgent.prompt"
	},
	{
		type: "prompt",
		id: "find-automation-ideas",
		icon: "lightbulb",
		labelKey: "instanceAi.emptyState.suggestions.findAutomationIdeas.label",
		promptKey: "instanceAi.emptyState.suggestions.findAutomationIdeas.prompt"
	},
	{
		type: "menu",
		id: "quick-examples",
		icon: "zap",
		labelKey: "instanceAi.emptyState.suggestions.quickExamples.label",
		examples: [
			{
				id: "monitor-competitors",
				labelKey: "instanceAi.emptyState.quickExamples.monitorCompetitors.label",
				promptKey: "instanceAi.emptyState.quickExamples.monitorCompetitors.prompt"
			},
			{
				id: "automate-inbox",
				labelKey: "instanceAi.emptyState.quickExamples.automateInbox.label",
				promptKey: "instanceAi.emptyState.quickExamples.automateInbox.prompt"
			},
			{
				id: "answer-support-requests",
				labelKey: "instanceAi.emptyState.quickExamples.answerSupportRequests.label",
				promptKey: "instanceAi.emptyState.quickExamples.answerSupportRequests.prompt"
			},
			{
				id: "analyse-ad-spend",
				labelKey: "instanceAi.emptyState.quickExamples.analyseAdSpend.label",
				promptKey: "instanceAi.emptyState.quickExamples.analyseAdSpend.prompt"
			},
			{
				id: "get-news-summary",
				labelKey: "instanceAi.emptyState.quickExamples.getNewsSummary.label",
				promptKey: "instanceAi.emptyState.quickExamples.getNewsSummary.prompt"
			}
		]
	}
];
//#endregion
//#region src/features/ai/instanceAi/components/AnimatedCollapsibleContent.vue?vue&type=script&setup=true&lang.ts
var AnimatedCollapsibleContent_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AnimatedCollapsibleContent",
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(CollapsibleContent_default), { class: normalizeClass(_ctx.$style.content) }, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 8, ["class"]);
		};
	}
});
var AnimatedCollapsibleContent_vue_vue_type_style_index_0_lang_module_default = {
	content: "_content_s2bfe_125",
	slideDown: "_slideDown_s2bfe_1",
	slideUp: "_slideUp_s2bfe_1"
};
var AnimatedCollapsibleContent_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AnimatedCollapsibleContent_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AnimatedCollapsibleContent_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/agentTimeline.utils.ts
/** Tool calls that are internal bookkeeping and should not be shown to the user. */
var HIDDEN_TOOLS = new Set(["updateWorkingMemory"]);
/** Extract all artifacts (workflows and data tables) from a node's tool calls. */
function extractArtifacts(node) {
	if (node.status !== "completed") return [];
	const artifacts = [];
	const seenIds = /* @__PURE__ */ new Set();
	if (node.targetResource?.id && node.targetResource.type) {
		const type = node.targetResource.type;
		if (type === "workflow" || type === "data-table") {
			seenIds.add(node.targetResource.id);
			artifacts.push({
				type,
				resourceId: node.targetResource.id,
				name: node.targetResource.name ?? node.subtitle ?? "Untitled",
				completedAt: void 0
			});
		}
	}
	for (const tc of node.toolCalls) {
		if (!tc.result || typeof tc.result !== "object") continue;
		const result = tc.result;
		if ((tc.toolName === "build-workflow" || tc.toolName === "submit-workflow") && typeof result.workflowId === "string" && !seenIds.has(result.workflowId)) {
			seenIds.add(result.workflowId);
			const name = (typeof result.workflowName === "string" ? result.workflowName : void 0) ?? (typeof tc.args?.name === "string" ? tc.args.name : void 0) ?? "Untitled";
			artifacts.push({
				type: "workflow",
				resourceId: result.workflowId,
				name,
				completedAt: tc.completedAt
			});
			continue;
		}
		let tableId;
		let tableName;
		let tableProjectId;
		if (typeof result.tableId === "string") tableId = result.tableId;
		if (typeof result.dataTableId === "string") tableId = result.dataTableId;
		if (typeof result.name === "string") tableName = result.name;
		if (typeof result.tableName === "string") tableName = result.tableName;
		if (typeof result.projectId === "string") tableProjectId = result.projectId;
		const table = result.table;
		if (table && typeof table === "object") {
			const t = table;
			if (typeof t.id === "string") tableId = t.id;
			if (typeof t.name === "string") tableName = t.name;
			if (typeof t.projectId === "string") tableProjectId = t.projectId;
		}
		if (tableId && !seenIds.has(tableId)) {
			seenIds.add(tableId);
			artifacts.push({
				type: "data-table",
				resourceId: tableId,
				name: tableName ?? "Untitled",
				projectId: tableProjectId,
				completedAt: tc.completedAt
			});
		}
	}
	for (const child of node.children) for (const artifact of extractArtifacts(child)) if (!seenIds.has(artifact.resourceId)) {
		seenIds.add(artifact.resourceId);
		artifacts.push(artifact);
	}
	return artifacts;
}
//#endregion
//#region src/features/ai/instanceAi/useTimelineGrouping.ts
/** Render hints for tool calls that show as special UI — not as generic "tool call" steps. */
var SPECIAL_RENDER_HINTS = new Set([
	"tasks",
	"delegate",
	"builder",
	"data-table",
	"researcher"
]);
/** Returns true if a tool call renders as a generic ToolCallStep (not special UI). */
function isGenericToolCall(tc) {
	if (HIDDEN_TOOLS.has(tc.toolName)) return false;
	if (tc.renderHint && SPECIAL_RENDER_HINTS.has(tc.renderHint)) return false;
	if (tc.confirmation?.inputType === "questions" || tc.confirmation?.inputType === "plan-review") return false;
	return true;
}
/**
* Groups an agent's timeline for collapsed rendering when the run is complete.
*
* Text entries are always rendered inline (visible). Tool calls and child agents
* are grouped into collapsible `response-group` segments. Text splits groups —
* even entries from the same API response are separated if text appears between them.
*
* Returns null when grouping is unavailable (no `responseId` data, or nothing to collapse).
*/
function useTimelineGrouping(agentNode) {
	return computed(() => {
		if (agentNode.value.status === "active") return null;
		const timeline = agentNode.value.timeline;
		if (timeline.length === 0) return null;
		if (!timeline.some((e) => e.responseId !== void 0)) return null;
		const segments = [];
		let currentGroup = null;
		function newGroup(responseId) {
			return {
				kind: "response-group",
				responseId,
				entries: [],
				toolCallCount: 0,
				textCount: 0,
				questionCount: 0,
				childCount: 0,
				artifacts: []
			};
		}
		for (const entry of timeline) if (entry.type === "text") if (currentGroup && entry.responseId === currentGroup.responseId) {
			currentGroup.entries.push(entry);
			currentGroup.textCount++;
		} else {
			currentGroup = null;
			segments.push({
				kind: "trailing-text",
				content: entry.content
			});
		}
		else if (entry.type === "tool-call") {
			if (!currentGroup || currentGroup.responseId !== entry.responseId) {
				currentGroup = newGroup(entry.responseId);
				segments.push(currentGroup);
			}
			currentGroup.entries.push(entry);
			const tc = agentNode.value.toolCalls.find((t) => t.toolCallId === entry.toolCallId);
			if (tc && isGenericToolCall(tc)) currentGroup.toolCallCount++;
			else if (tc?.confirmation?.inputType === "questions" && !tc.isLoading) currentGroup.questionCount++;
		} else if (entry.type === "child") {
			if (!currentGroup || currentGroup.responseId !== entry.responseId) {
				currentGroup = newGroup(entry.responseId);
				segments.push(currentGroup);
			}
			currentGroup.entries.push(entry);
			currentGroup.childCount++;
			const child = agentNode.value.children.find((c) => c.agentId === entry.agentId);
			if (child) currentGroup.artifacts.push(...extractArtifacts(child));
		}
		for (let i = segments.length - 1; i >= 0; i--) {
			const seg = segments[i];
			if (seg.kind !== "response-group") continue;
			const last = seg.entries.at(-1);
			if (last?.type === "text") {
				seg.entries.pop();
				seg.textCount--;
				segments.splice(i + 1, 0, {
					kind: "trailing-text",
					content: last.content
				});
			}
		}
		const flattened = segments.filter((seg) => {
			if (seg.kind !== "response-group") return true;
			return seg.toolCallCount > 0 || seg.childCount > 0;
		});
		if (!flattened.some((s) => s.kind === "response-group")) return null;
		return flattened;
	});
}
/** Collect distinct tool icons from tool calls within a group's entries. */
function getGroupToolIcons(group, toolCalls, getIcon) {
	const icons = /* @__PURE__ */ new Set();
	for (const entry of group.entries) if (entry.type === "tool-call") {
		const tc = toolCalls.find((t) => t.toolCallId === entry.toolCallId);
		if (tc && !HIDDEN_TOOLS.has(tc.toolName)) icons.add(getIcon(tc.toolName));
	}
	return [...icons];
}
//#endregion
//#region src/features/ai/instanceAi/toolLabels.ts
var NO_TOGGLE_TOOLS = new Set([
	"updateWorkingMemory",
	"plan",
	"cancel-background-task"
]);
function getToolIcon(toolName) {
	if (toolName === "delegate" || toolName.endsWith("-with-agent")) return "share";
	if (toolName.includes("data-table")) return "table";
	if (toolName.includes("workflow") || toolName === "search-nodes" || toolName.startsWith("get-node") || toolName === "submit-workflow" || toolName === "run-workflow" || toolName === "activate-workflow" || toolName === "list-nodes" || toolName === "explore-node-resources" || toolName === "get-suggested-nodes" || toolName === "list-executions" || toolName === "get-execution" || toolName === "debug-execution" || toolName === "stop-execution" || toolName === "materialize-node-type") return "workflow";
	if (toolName === "web-search" || toolName === "fetch-url") return "search";
	if (toolName === "updateWorkingMemory" || toolName === "plan") return "brain";
	if (toolName.includes("credential") || toolName === "browser-credential-setup") return "key-round";
	return "settings";
}
/**
* Returns a human-readable display label for an instance AI tool name.
* Falls back to the raw tool name if no mapping exists in i18n.
*/
function useToolLabel() {
	const i18n = useI18n();
	function getToolLabel(toolName) {
		const key = `instanceAi.tools.${toolName}`;
		const translated = i18n.baseText(key);
		return translated === key ? toolName : translated;
	}
	function getToggleLabel(toolCall) {
		if (NO_TOGGLE_TOOLS.has(toolCall.toolName)) return void 0;
		if (toolCall.toolName === "delegate") return i18n.baseText("instanceAi.stepTimeline.showBrief");
		return i18n.baseText("instanceAi.stepTimeline.showData");
	}
	function getHideLabel(toolCall) {
		if (NO_TOGGLE_TOOLS.has(toolCall.toolName)) return void 0;
		if (toolCall.toolName === "delegate") return i18n.baseText("instanceAi.stepTimeline.hideBrief");
		return i18n.baseText("instanceAi.stepTimeline.hideData");
	}
	return {
		getToolLabel,
		getToggleLabel,
		getHideLabel
	};
}
var ButtonLike_vue_vue_type_style_index_0_lang_module_default = { buttonLike: "_buttonLike_1rc9v_2" };
//#endregion
//#region src/features/ai/instanceAi/components/ButtonLike.vue
var _sfc_main$2 = {};
function _sfc_render$2(_ctx, _cache) {
	return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.buttonLike) }, [renderSlot(_ctx.$slots, "default")], 2);
}
var ButtonLike_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main$2, [["render", _sfc_render$2], ["__cssModules", { "$style": ButtonLike_vue_vue_type_style_index_0_lang_module_default }]]);
var DataSection_vue_vue_type_style_index_0_lang_module_default = { dataSection: "_dataSection_11et9_125" };
//#endregion
//#region src/features/ai/instanceAi/components/DataSection.vue
var _sfc_main$1 = {};
function _sfc_render$1(_ctx, _cache) {
	return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.dataSection) }, [renderSlot(_ctx.$slots, "default")], 2);
}
var DataSection_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main$1, [["render", _sfc_render$1], ["__cssModules", { "$style": DataSection_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiMarkdown.vue?vue&type=script&setup=true&lang.ts
var InstanceAiMarkdown_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiMarkdown",
	props: { content: {} },
	setup(__props) {
		const props = __props;
		const store = useInstanceAiStore();
		const styles = useCssModule();
		const wrapperRef = ref(null);
		const openWorkflowPreview = inject("openWorkflowPreview", void 0);
		const openDataTablePreview = inject("openDataTablePreview", void 0);
		/** Icon SVG paths for each resource type — matches the n8n design system icons. */
		const ICON_SVGS = {
			workflow: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M21.17 8H7.83a1.83 1.83 0 1 0 0 3.66h8.34a1.83 1.83 0 0 1 0 3.66H2.83\"/><path d=\"m18 2 4 4-4 4\"/><path d=\"m6 20-4-4 4-4\"/></svg>",
			credential: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4\"/><path d=\"m21 2-9.6 9.6\"/><circle cx=\"7.5\" cy=\"15.5\" r=\"5.5\"/></svg>",
			"data-table": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 3v18\"/><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M3 9h18\"/><path d=\"M3 15h18\"/></svg>"
		};
		/** URL builders for each resource type. */
		const URL_BUILDERS = {
			workflow: (id) => `/workflow/${id}`,
			credential: () => "/credentials",
			"data-table": () => "/data-tables"
		};
		/**
		* Pre-process the raw markdown content: replace known resource names with
		* markdown links using a custom `n8n-resource://` URL scheme. These links
		* are then enhanced in the DOM after rendering.
		*
		* Only replaces names that appear as standalone words (not inside code spans
		* or existing links) and are at least 3 characters long to avoid false positives.
		*/
		/** Internal XML blocks that should never render in the chat (LLM may echo them). */
		const INTERNAL_BLOCK_PATTERN = /<(?:planning-blueprint|planned-task-follow-up|background-task-completed|running-tasks)[\s\S]*?<\/(?:planning-blueprint|planned-task-follow-up|background-task-completed|running-tasks)>/g;
		const processedContent = computed(() => {
			const registry = store.resourceRegistry;
			let result = props.content.replace(INTERNAL_BLOCK_PATTERN, "").trim();
			if (registry.size === 0) return result;
			const entries = [...registry.values()].filter((entry) => entry.name.length >= 3).sort((a, b) => b.name.length - a.name.length);
			for (const entry of entries) {
				const escaped = entry.name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
				const startBoundary = /\w/.test(entry.name[0]) ? "\\b" : "(?<=^|[\\s,;:!?])";
				const endBoundary = /\w/.test(entry.name[entry.name.length - 1]) ? "\\b" : "(?=$|[\\s,;:!?.])";
				const pattern = new RegExp(`(?<![\\[\`\\/])${startBoundary}(${escaped})${endBoundary}(?![\\]\`]|\\(|://)`, "g");
				result = result.replace(pattern, (_match, name) => {
					return `[${name}](${`n8n-resource://${entry.type}/${entry.id}`})`;
				});
			}
			return result;
		});
		const source = computed(() => ({
			type: "text",
			content: processedContent.value
		}));
		/** Route patterns that map internal n8n URLs to resource types. */
		const INTERNAL_ROUTE_PATTERNS = [
			{
				pattern: /^(?:https?:\/\/[^/]+)?\/workflow\/([a-zA-Z0-9]+)/,
				type: "workflow"
			},
			{
				pattern: /^(?:https?:\/\/[^/]+)?\/credentials(?:\/|$)/,
				type: "credential"
			},
			{
				pattern: /^(?:https?:\/\/[^/]+)?\/data-tables(?:\/|$)/,
				type: "data-table"
			}
		];
		/**
		* Apply resource chip styling (icon + class) to an anchor element.
		*/
		function applyResourceChip(link, type) {
			link.dataset.resourceChip = type;
			link.classList.add(styles.resourceChip);
			const iconHtml = ICON_SVGS[type];
			if (iconHtml) {
				const iconSpan = document.createElement("span");
				iconSpan.classList.add(styles.resourceChipIcon);
				iconSpan.innerHTML = iconHtml;
				link.prepend(iconSpan);
			}
		}
		/** Track click handlers attached to links so they can be cleaned up. */
		const linkHandlers = /* @__PURE__ */ new WeakMap();
		/**
		* Post-process the rendered DOM to transform resource links into
		* styled resource chips with icons. Handles both:
		* - `n8n-resource://` custom scheme links (from pre-processing)
		* - Standard links pointing to internal n8n routes (generated by the AI)
		*/
		function enhanceResourceLinks() {
			if (!wrapperRef.value) return;
			const allLinks = wrapperRef.value.$el.querySelectorAll("a");
			for (const link of allLinks) {
				if (link.dataset.resourceChip) continue;
				const href = link.getAttribute("href") ?? "";
				const resourceMatch = /^n8n-resource:\/\/(workflow|credential|data-table)\/(.+)$/.exec(href);
				if (resourceMatch) {
					const [, type, id] = resourceMatch;
					const registryEntry = type === "data-table" ? [...store.resourceRegistry.values()].find((r) => r.type === "data-table" && r.id === id) : void 0;
					link.href = type === "data-table" && registryEntry?.projectId ? `/projects/${registryEntry.projectId}/datatables/${id}` : URL_BUILDERS[type]?.(id) ?? "#";
					link.target = "_blank";
					link.dataset.resourceId = id;
					applyResourceChip(link, type);
					const handler = (e) => {
						if (e.metaKey || e.ctrlKey) return;
						if (!(type === "workflow" && openWorkflowPreview || type === "data-table" && registryEntry?.projectId && openDataTablePreview)) return;
						e.preventDefault();
						if (type === "workflow") openWorkflowPreview?.(id);
						else if (type === "data-table" && registryEntry?.projectId) openDataTablePreview?.(id, registryEntry.projectId);
					};
					link.addEventListener("click", handler);
					linkHandlers.set(link, handler);
					continue;
				}
				for (const { pattern, type } of INTERNAL_ROUTE_PATTERNS) if (pattern.test(href)) {
					link.target = "_blank";
					applyResourceChip(link, type);
					break;
				}
			}
		}
		/** Remove click handlers from all enhanced links. */
		function cleanupLinkHandlers() {
			if (!wrapperRef.value) return;
			const allLinks = wrapperRef.value.$el.querySelectorAll("a");
			for (const link of allLinks) {
				const handler = linkHandlers.get(link);
				if (handler) {
					link.removeEventListener("click", handler);
					linkHandlers.delete(link);
				}
			}
		}
		onMounted(enhanceResourceLinks);
		onUpdated(() => {
			cleanupLinkHandlers();
			enhanceResourceLinks();
		});
		onBeforeUnmount(cleanupLinkHandlers);
		return (_ctx, _cache) => {
			return openBlock(), createBlock(ChatMarkdownChunk_default, {
				ref_key: "wrapperRef",
				ref: wrapperRef,
				source: source.value
			}, null, 8, ["source"]);
		};
	}
});
var InstanceAiMarkdown_vue_vue_type_style_index_0_lang_module_default = {
	resourceChip: "_resourceChip_1129p_125",
	resourceChipIcon: "_resourceChipIcon_1129p_145"
};
var InstanceAiMarkdown_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiMarkdown_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiMarkdown_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/TimelineStepButton.vue?vue&type=script&setup=true&lang.ts
var TimelineStepButton_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "TimelineStepButton",
	props: { size: { default: "small" } },
	setup(__props, { expose: __expose }) {
		/**
		* TimelineStepButton — full-width ghost button used as a collapsible trigger
		* in timeline components (ToolCallStep, AgentSection). Renders an icon slot
		* and truncated text label.
		*/
		const triggerRef = useTemplateRef("triggerRef");
		const isHovered = useElementHover(triggerRef);
		__expose({ isHovered });
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nButton_default), {
				ref_key: "triggerRef",
				ref: triggerRef,
				variant: "ghost",
				size: __props.size,
				class: normalizeClass(_ctx.$style.block)
			}, {
				icon: withCtx(() => [renderSlot(_ctx.$slots, "icon", { isHovered: unref(isHovered) })]),
				default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.ellipsis) }, [renderSlot(_ctx.$slots, "default")], 2)]),
				_: 3
			}, 8, ["size", "class"]);
		};
	}
});
var TimelineStepButton_vue_vue_type_style_index_0_lang_module_default = {
	block: "_block_1vseb_125",
	ellipsis: "_ellipsis_1vseb_139"
};
var TimelineStepButton_default = /* @__PURE__ */ _plugin_vue_export_helper_default(TimelineStepButton_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": TimelineStepButton_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/ToolResultJson.vue?vue&type=script&setup=true&lang.ts
var import_FileSaver_min = /* @__PURE__ */ __toESM(require_FileSaver_min(), 1);
var _hoisted_1$13 = ["innerHTML"];
/**
* Maximum number of characters to render in the DOM.
* Beyond this threshold the JSON is truncated to prevent browser freezes.
*/
var MAX_JSON_DISPLAY_LENGTH = 1e5;
var ToolResultJson_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ToolResultJson",
	props: { value: {} },
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		function escapeHtml(text) {
			return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
		}
		/**
		* Recursively build syntax-highlighted HTML from a JSON value.
		* Uses a structural walk instead of regex to avoid catastrophic
		* backtracking on large payloads.
		*/
		function highlightJson(value, indent = 0) {
			const pad = "  ".repeat(indent);
			const padInner = "  ".repeat(indent + 1);
			if (value === null) return "<span class=\"json-bool\">null</span>";
			if (typeof value === "boolean") return `<span class="json-bool">${value}</span>`;
			if (typeof value === "number") return `<span class="json-number">${value}</span>`;
			if (typeof value === "string") return `<span class="json-string">&quot;${escapeHtml(value)}&quot;</span>`;
			if (Array.isArray(value)) {
				if (value.length === 0) return "[]";
				return `[\n${value.map((v) => `${padInner}${highlightJson(v, indent + 1)}`).join(",\n")}\n${pad}]`;
			}
			if (typeof value === "object") {
				const entries = Object.entries(value);
				if (entries.length === 0) return "{}";
				return `{\n${entries.map(([k, v]) => `${padInner}<span class="json-key">&quot;${escapeHtml(k)}&quot;</span>: ${highlightJson(v, indent + 1)}`).join(",\n")}\n${pad}}`;
			}
			return escapeHtml(String(value));
		}
		const jsonString = computed(() => {
			return JSON.stringify(props.value, null, 2) ?? String(props.value);
		});
		const isTruncated = computed(() => jsonString.value.length > MAX_JSON_DISPLAY_LENGTH);
		const highlighted = computed(() => {
			return highlightJson(isTruncated.value ? jsonString.value.slice(0, MAX_JSON_DISPLAY_LENGTH) : jsonString.value);
		});
		function downloadFullJson() {
			(0, import_FileSaver_min.saveAs)(new Blob([jsonString.value], { type: "application/json" }), "tool-result.json");
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [createBaseVNode("pre", {
				class: normalizeClass(_ctx.$style.json),
				innerHTML: highlighted.value
			}, null, 10, _hoisted_1$13), isTruncated.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.truncatedNotice)
			}, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.truncatedText) }, toDisplayString(unref(i18n).baseText("instanceAi.toolResult.dataTruncated")), 3), createVNode(unref(N8nButton_default), {
				variant: "outline",
				size: "mini",
				label: unref(i18n).baseText("runData.downloadBinaryData"),
				onClick: downloadFullJson
			}, null, 8, ["label"])], 2)) : createCommentVNode("", true)]);
		};
	}
});
var ToolResultJson_vue_vue_type_style_index_0_lang_module_default = {
	json: "_json_xoijp_125",
	truncatedNotice: "_truncatedNotice_xoijp_137",
	truncatedText: "_truncatedText_xoijp_144"
};
var ToolResultJson_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ToolResultJson_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ToolResultJson_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/ToolResultTable.vue?vue&type=script&setup=true&lang.ts
var MAX_ROWS = 20;
var ToolResultTable_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ToolResultTable",
	props: { rows: {} },
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const headers = computed(() => {
			if (props.rows.length === 0) return [];
			return Object.keys(props.rows[0]);
		});
		const displayRows = computed(() => props.rows.slice(0, MAX_ROWS));
		const hasMore = computed(() => props.rows.length > MAX_ROWS);
		function formatCell(value) {
			if (value === null || value === void 0) return "—";
			if (typeof value === "boolean") return value ? "Yes" : "No";
			if (typeof value === "object") return JSON.stringify(value);
			return String(value);
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.wrapper) }, [createBaseVNode("table", { class: normalizeClass(_ctx.$style.table) }, [createBaseVNode("thead", null, [createBaseVNode("tr", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(headers.value, (header) => {
				return openBlock(), createElementBlock("th", {
					key: header,
					class: normalizeClass(_ctx.$style.th)
				}, toDisplayString(header), 3);
			}), 128))])]), createBaseVNode("tbody", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(displayRows.value, (row, idx) => {
				return openBlock(), createElementBlock("tr", {
					key: idx,
					class: normalizeClass(_ctx.$style.tr)
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(headers.value, (header) => {
					return openBlock(), createElementBlock("td", {
						key: header,
						class: normalizeClass(_ctx.$style.td)
					}, toDisplayString(formatCell(row[header])), 3);
				}), 128))], 2);
			}), 128))])], 2), hasMore.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.more)
			}, toDisplayString(unref(i18n).baseText("instanceAi.toolResult.moreRows", { interpolate: { count: String(props.rows.length - MAX_ROWS) } })), 3)) : createCommentVNode("", true)], 2);
		};
	}
});
var ToolResultTable_vue_vue_type_style_index_0_lang_module_default = {
	wrapper: "_wrapper_fhbtz_125",
	table: "_table_fhbtz_131",
	th: "_th_fhbtz_138",
	tr: "_tr_fhbtz_152",
	td: "_td_fhbtz_156",
	more: "_more_fhbtz_165"
};
var ToolResultTable_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ToolResultTable_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ToolResultTable_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/ToolResultCode.vue?vue&type=script&setup=true&lang.ts
var ToolResultCode_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ToolResultCode",
	props: { code: {} },
	setup(__props) {
		const props = __props;
		const clipboard = useClipboard();
		const copied = ref(false);
		async function handleCopy() {
			await clipboard.copy(props.code);
			copied.value = true;
			setTimeout(() => {
				copied.value = false;
			}, 2e3);
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.wrapper) }, [createVNode(unref(N8nIconButton_default), {
				icon: copied.value ? "check" : "copy",
				variant: "ghost",
				size: "xsmall",
				class: normalizeClass(_ctx.$style.copyBtn),
				onClick: handleCopy
			}, null, 8, ["icon", "class"]), createBaseVNode("pre", { class: normalizeClass(_ctx.$style.code) }, toDisplayString(props.code), 3)], 2);
		};
	}
});
var ToolResultCode_vue_vue_type_style_index_0_lang_module_default = {
	wrapper: "_wrapper_144ps_125",
	copyBtn: "_copyBtn_144ps_133",
	code: "_code_144ps_144"
};
var ToolResultCode_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ToolResultCode_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ToolResultCode_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/ToolResultMedia.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$12 = ["src"];
var ToolResultMedia_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ToolResultMedia",
	props: {
		data: {},
		mimeType: {}
	},
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("img", {
				src: `data:${__props.mimeType};base64,${__props.data}`,
				class: normalizeClass(_ctx.$style.image)
			}, null, 10, _hoisted_1$12);
		};
	}
});
var ToolResultMedia_vue_vue_type_style_index_0_lang_module_default = { image: "_image_1l1xi_2" };
var ToolResultMedia_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ToolResultMedia_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ToolResultMedia_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/ToolResultText.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$11 = ["textContent"];
var ToolResultText_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ToolResultText",
	props: { text: {} },
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("pre", {
				class: normalizeClass(_ctx.$style.text),
				textContent: toDisplayString(__props.text)
			}, null, 10, _hoisted_1$11);
		};
	}
});
var ToolResultText_vue_vue_type_style_index_0_lang_module_default = { text: "_text_1xlo6_2" };
var ToolResultText_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ToolResultText_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ToolResultText_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/ToolResultRenderer.vue?vue&type=script&setup=true&lang.ts
var ToolResultRenderer_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ToolResultRenderer",
	props: {
		result: {},
		toolName: {}
	},
	setup(__props) {
		const props = __props;
		const CODE_TOOLS = new Set(["get-workflow-as-code", "get-node-type-definition"]);
		const TABLE_TOOLS = new Set([
			"query-data-table-rows",
			"list-workflows",
			"list-executions",
			"list-credentials",
			"search-nodes",
			"list-nodes",
			"list-data-tables"
		]);
		function extractMcpContent(result) {
			if (Array.isArray(result)) return result;
			if (result !== null && typeof result === "object" && "content" in result && Array.isArray(result.content)) return result.content;
			return null;
		}
		function detectType(result, toolName) {
			if (extractMcpContent(result) !== null) return "content";
			if (CODE_TOOLS.has(toolName)) return "code";
			if (TABLE_TOOLS.has(toolName) && result && typeof result === "object") return "table";
			return "json";
		}
		function extractCode(result, toolName) {
			if (!result || typeof result !== "object") return null;
			const obj = result;
			if (toolName === "get-workflow-as-code" && typeof obj.code === "string") return obj.code;
			if (toolName === "get-node-type-definition" && Array.isArray(obj.definitions)) return obj.definitions.filter((d) => typeof d.content === "string").map((d) => d.content).join("\n\n");
			return null;
		}
		function extractTableRows(result) {
			if (!result || typeof result !== "object") return null;
			const obj = result;
			for (const key of [
				"data",
				"workflows",
				"executions",
				"credentials",
				"results",
				"nodes",
				"tables"
			]) if (Array.isArray(obj[key]) && obj[key].length > 0 && typeof obj[key][0] === "object") return obj[key];
			return null;
		}
		const resultType = computed(() => detectType(props.result, props.toolName));
		const contentItems = computed(() => extractMcpContent(props.result));
		const codeContent = computed(() => extractCode(props.result, props.toolName));
		const tableRows = computed(() => extractTableRows(props.result));
		return (_ctx, _cache) => {
			return resultType.value === "content" && contentItems.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.contentList)
			}, [(openBlock(true), createElementBlock(Fragment, null, renderList(contentItems.value, (item, idx) => {
				return openBlock(), createElementBlock(Fragment, { key: idx }, [item.type === "image" ? (openBlock(), createBlock(ToolResultMedia_default, {
					key: 0,
					data: item.data,
					"mime-type": item.mimeType
				}, null, 8, ["data", "mime-type"])) : item.type === "text" ? (openBlock(), createBlock(ToolResultText_default, {
					key: 1,
					text: item.text
				}, null, 8, ["text"])) : createCommentVNode("", true)], 64);
			}), 128))], 2)) : resultType.value === "code" && codeContent.value ? (openBlock(), createBlock(ToolResultCode_default, {
				key: 1,
				code: codeContent.value
			}, null, 8, ["code"])) : resultType.value === "table" && tableRows.value ? (openBlock(), createBlock(ToolResultTable_default, {
				key: 2,
				rows: tableRows.value
			}, null, 8, ["rows"])) : (openBlock(), createBlock(ToolResultJson_default, {
				key: 3,
				value: props.result
			}, null, 8, ["value"]));
		};
	}
});
var ToolResultRenderer_vue_vue_type_style_index_0_lang_module_default = { contentList: "_contentList_1ooyo_2" };
var ToolResultRenderer_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ToolResultRenderer_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ToolResultRenderer_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/ToolCallStep.vue
var ToolCallStep_default = /* @__PURE__ */ defineComponent({
	__name: "ToolCallStep",
	props: {
		toolCall: {},
		label: {}
	},
	setup(__props) {
		const props = __props;
		const { getToolLabel } = useToolLabel();
		function getDisplayLabel(tc) {
			const label = getToolLabel(tc.toolName) || tc.toolName;
			if (tc.toolName === "delegate") {
				const role = typeof tc.args?.role === "string" ? tc.args.role : "";
				return role ? `${label} (${role})` : label;
			}
			if (tc.toolName === "web-search" && typeof tc.args?.query === "string") return `${label}: "${tc.args.query}"`;
			if (tc.toolName === "fetch-url" && typeof tc.args?.url === "string") return `${label}: ${tc.args.url}`;
			return label;
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(CollapsibleRoot_default), null, {
				default: withCtx(({ open: isOpen }) => [createVNode(unref(CollapsibleTrigger_default), { "as-child": "" }, {
					default: withCtx(() => [createVNode(TimelineStepButton_default, null, {
						icon: withCtx(({ isHovered }) => [isHovered ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [!isOpen ? (openBlock(), createBlock(unref(N8nIcon_default), {
							key: 0,
							icon: "plus",
							size: "small"
						})) : (openBlock(), createBlock(unref(N8nIcon_default), {
							key: 1,
							icon: "minus",
							size: "small"
						}))], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [props.toolCall.isLoading ? (openBlock(), createBlock(unref(N8nIcon_default), {
							key: 0,
							icon: "spinner",
							color: "primary",
							size: "small",
							spin: ""
						})) : (openBlock(), createBlock(unref(N8nIcon_default), {
							key: 1,
							icon: unref(getToolIcon)(props.toolCall.toolName),
							size: "small"
						}, null, 8, ["icon"]))], 64))]),
						default: withCtx(() => [createTextVNode(" " + toDisplayString(props.label ?? getDisplayLabel(props.toolCall)), 1)]),
						_: 2
					}, 1024)]),
					_: 2
				}, 1024), createVNode(AnimatedCollapsibleContent_default, null, {
					default: withCtx(() => [
						props.toolCall.args ? (openBlock(), createBlock(DataSection_default, { key: 0 }, {
							default: withCtx(() => [createVNode(ToolResultJson_default, { value: props.toolCall.args }, null, 8, ["value"])]),
							_: 1
						})) : createCommentVNode("", true),
						props.toolCall.result !== void 0 ? (openBlock(), createBlock(DataSection_default, { key: 1 }, {
							default: withCtx(() => [createVNode(ToolResultRenderer_default, {
								result: props.toolCall.result,
								"tool-name": props.toolCall.toolName
							}, null, 8, ["result", "tool-name"])]),
							_: 1
						})) : createCommentVNode("", true),
						props.toolCall.error !== void 0 ? (openBlock(), createBlock(unref(N8nCallout_default), {
							key: 2,
							theme: "danger"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(props.toolCall.error), 1)]),
							_: 1
						})) : createCommentVNode("", true)
					]),
					_: 1
				})]),
				_: 1
			});
		};
	}
});
//#endregion
//#region src/features/ai/instanceAi/components/SubagentStepTimeline.vue?vue&type=script&setup=true&lang.ts
var SubagentStepTimeline_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SubagentStepTimeline",
	props: { agentNode: {} },
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const { getToolLabel, getToggleLabel, getHideLabel } = useToolLabel();
		const CODE_BLOCK_PATTERN = /```/;
		/** Tool calls that are internal and should not be shown in the step timeline. */
		const HIDDEN_TOOLS = new Set(["updateWorkingMemory"]);
		function extractShortLabel(content) {
			const firstLine = content.replace(/```[\s\S]*?```/g, "").trim().split("\n").find((line) => line.trim().length > 0) ?? "";
			if (firstLine) return firstLine.length > 80 ? firstLine.slice(0, 80) + "…" : firstLine;
			return i18n.baseText("instanceAi.stepTimeline.craftingWorkflow");
		}
		function isLongTextContent(content) {
			return CODE_BLOCK_PATTERN.test(content);
		}
		/** Index tool calls by ID for O(1) lookup. */
		const toolCallsById = computed(() => {
			const map = {};
			for (const tc of props.agentNode.toolCalls) map[tc.toolCallId] = tc;
			return map;
		});
		const steps = computed(() => {
			const result = [];
			for (const entry of props.agentNode.timeline) if (entry.type === "text") {
				const longText = isLongTextContent(entry.content);
				result.push({
					type: "text",
					icon: "brain",
					label: longText ? extractShortLabel(entry.content) : entry.content,
					isLoading: false,
					textContent: entry.content,
					isLongText: longText,
					shortLabel: longText ? extractShortLabel(entry.content) : void 0
				});
			} else if (entry.type === "tool-call") {
				const tc = toolCallsById.value[entry.toolCallId];
				if (!tc || HIDDEN_TOOLS.has(tc.toolName)) continue;
				result.push({
					type: "tool-call",
					icon: tc.isLoading ? "spinner" : getToolIcon(tc.toolName),
					label: getToolLabel(tc.toolName),
					isLoading: tc.isLoading,
					toggleLabel: getToggleLabel(tc),
					hideLabel: getHideLabel(tc),
					toolCall: tc
				});
			}
			if (props.agentNode.status === "completed") result.push({
				type: "done",
				icon: "circle-check",
				label: i18n.baseText("instanceAi.stepTimeline.done"),
				isLoading: false
			});
			return result;
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.timeline) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(steps.value, (step, idx) => {
				return openBlock(), createElementBlock(Fragment, { key: idx }, [step.type === "tool-call" && step.toolCall ? (openBlock(), createBlock(ToolCallStep_default, {
					key: 0,
					"tool-call": step.toolCall,
					label: step.label,
					"show-connector": idx < steps.value.length - 1
				}, null, 8, [
					"tool-call",
					"label",
					"show-connector"
				])) : step.type === "text" ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [step.isLongText ? (openBlock(), createBlock(unref(CollapsibleRoot_default), { key: 0 }, {
					default: withCtx(({ open }) => [createVNode(unref(CollapsibleTrigger_default), { "as-child": "" }, {
						default: withCtx(() => [createVNode(unref(N8nButton_default), {
							ref_for: true,
							ref: "triggerRef",
							variant: "ghost",
							size: "small"
						}, {
							icon: withCtx(() => [step.isLoading ? (openBlock(), createBlock(unref(N8nIcon_default), {
								key: 0,
								icon: "spinner",
								size: "small",
								color: "primary",
								spin: ""
							})) : (openBlock(), createBlock(unref(N8nIcon_default), {
								key: 1,
								icon: step.icon,
								size: "small"
							}, null, 8, ["icon"]))]),
							default: withCtx(() => [open ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.statusBar.thinking")), 1)], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createTextVNode(toDisplayString(step.label), 1)], 64))]),
							_: 2
						}, 1536)]),
						_: 2
					}, 1024), createVNode(AnimatedCollapsibleContent_default, { class: normalizeClass(_ctx.$style.toggleContent) }, {
						default: withCtx(() => [createVNode(DataSection_default, null, {
							default: withCtx(() => [createVNode(InstanceAiMarkdown_default, { content: step.textContent }, null, 8, ["content"])]),
							_: 2
						}, 1024)]),
						_: 2
					}, 1032, ["class"])]),
					_: 2
				}, 1024)) : (openBlock(), createBlock(ButtonLike_default, { key: 1 }, {
					default: withCtx(() => [createVNode(unref(N8nIcon_default), {
						icon: step.icon,
						size: "small"
					}, null, 8, ["icon"]), createTextVNode(" " + toDisplayString(step.label), 1)]),
					_: 2
				}, 1024))], 64)) : step.type === "done" ? (openBlock(), createBlock(ButtonLike_default, { key: 2 }, {
					default: withCtx(() => [createVNode(unref(N8nIcon_default), {
						icon: step.icon,
						size: "small"
					}, null, 8, ["icon"]), createTextVNode(" " + toDisplayString(step.label), 1)]),
					_: 2
				}, 1024)) : createCommentVNode("", true)], 64);
			}), 128))], 2);
		};
	}
});
var SubagentStepTimeline_vue_vue_type_style_index_0_lang_module_default = {
	timeline: "_timeline_1st9q_125",
	toggleContent: "_toggleContent_1st9q_131"
};
var SubagentStepTimeline_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SubagentStepTimeline_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SubagentStepTimeline_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/AgentSection.vue?vue&type=script&setup=true&lang.ts
var AgentSection_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentSection",
	props: { agentNode: {} },
	setup(__props) {
		const props = __props;
		const isActive = computed(() => props.agentNode.status === "active");
		const isExpanded = ref(isActive.value);
		const isError = computed(() => props.agentNode.status === "error");
		const sectionTitle = computed(() => props.agentNode.subtitle ?? props.agentNode.role ?? "Working...");
		watch(() => props.agentNode.status, (status) => {
			if (status === "completed") isExpanded.value = false;
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock(Fragment, null, [createVNode(unref(CollapsibleRoot_default), {
				open: isExpanded.value,
				"onUpdate:open": _cache[0] || (_cache[0] = ($event) => isExpanded.value = $event)
			}, {
				default: withCtx(({ open: isOpen }) => [createVNode(unref(CollapsibleTrigger_default), { "as-child": "" }, {
					default: withCtx(() => [createVNode(TimelineStepButton_default, { size: "medium" }, {
						icon: withCtx(({ isHovered }) => [!isHovered && isActive.value ? (openBlock(), createBlock(unref(N8nIcon_default), {
							key: 0,
							icon: "spinner",
							color: "primary",
							size: "small",
							"transform-origin": "center",
							spin: ""
						})) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [!isOpen ? (openBlock(), createBlock(unref(N8nIcon_default), {
							key: 0,
							icon: "chevron-right",
							size: "small"
						})) : (openBlock(), createBlock(unref(N8nIcon_default), {
							key: 1,
							icon: "chevron-down",
							size: "small"
						}))], 64))]),
						default: withCtx(() => [createBaseVNode("span", { class: normalizeClass({ [_ctx.$style.shimmer]: isActive.value }) }, toDisplayString(sectionTitle.value), 3)]),
						_: 2
					}, 1024)]),
					_: 2
				}, 1024), createVNode(AnimatedCollapsibleContent_default, { class: normalizeClass(_ctx.$style.content) }, {
					default: withCtx(() => [createVNode(SubagentStepTimeline_default, { "agent-node": props.agentNode }, null, 8, ["agent-node"])]),
					_: 1
				}, 8, ["class"])]),
				_: 1
			}, 8, ["open"]), isError.value && props.agentNode.error ? (openBlock(), createBlock(unref(N8nCallout_default), {
				key: 0,
				theme: "danger"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(props.agentNode.error), 1)]),
				_: 1
			})) : createCommentVNode("", true)], 64);
		};
	}
});
var AgentSection_vue_vue_type_style_index_0_lang_module_default = {
	content: "_content_129jv_125",
	shimmer: "_shimmer_129jv_131"
};
var AgentSection_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentSection_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentSection_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/AnsweredQuestions.vue?vue&type=script&setup=true&lang.ts
var AnsweredQuestions_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AnsweredQuestions",
	props: { toolCall: {} },
	setup(__props) {
		/**
		* AnsweredQuestions.vue
		*
		* Read-only display of answered questions. Shown inline in the timeline
		* after the user submits answers via the questions wizard.
		* Styled to match the AI builder's UserAnswersMessage.
		*/
		const props = __props;
		function getAnswers() {
			const questions = props.toolCall.confirmation?.questions ?? [];
			const rawAnswers = props.toolCall.result?.answers ?? [];
			return questions.map((q) => {
				const a = rawAnswers.find((ans) => ans.questionId === q.id);
				if (!a || a.skipped) return {
					question: q.question,
					answer: "",
					skipped: true
				};
				const parts = [];
				if (Array.isArray(a.selectedOptions) && a.selectedOptions.length > 0) parts.push(a.selectedOptions.join(", "));
				if (typeof a.customText === "string" && a.customText.trim()) parts.push(a.customText.trim());
				return {
					question: q.question,
					answer: parts.join(" — ") || "",
					skipped: parts.length === 0
				};
			});
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.wrapper) }, [createBaseVNode("div", {
				class: normalizeClass(_ctx.$style.userBubble),
				"data-test-id": "instance-ai-answered-questions"
			}, [(openBlock(true), createElementBlock(Fragment, null, renderList(getAnswers(), (item, idx) => {
				return openBlock(), createElementBlock("div", {
					key: idx,
					class: normalizeClass(_ctx.$style.answerItem)
				}, [createVNode(unref(N8nText_default), {
					bold: true,
					size: "large",
					class: normalizeClass(_ctx.$style.question)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(item.question), 1)]),
					_: 2
				}, 1032, ["class"]), item.skipped ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					class: normalizeClass(_ctx.$style.skipped),
					size: "large"
				}, {
					default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Skipped", -1)])]),
					_: 1
				}, 8, ["class"])) : (openBlock(), createBlock(unref(N8nText_default), {
					key: 1,
					size: "large"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(item.answer), 1)]),
					_: 2
				}, 1024))], 2);
			}), 128))], 2)], 2);
		};
	}
});
var AnsweredQuestions_vue_vue_type_style_index_0_lang_module_default = {
	wrapper: "_wrapper_19142_125",
	userBubble: "_userBubble_19142_133",
	answerItem: "_answerItem_19142_141",
	question: "_question_19142_150",
	skipped: "_skipped_19142_154"
};
var AnsweredQuestions_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AnsweredQuestions_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AnsweredQuestions_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/ArtifactCard.vue?vue&type=script&setup=true&lang.ts
var ArtifactCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ArtifactCard",
	props: {
		type: {},
		name: {},
		resourceId: {},
		projectId: {},
		metadata: {}
	},
	setup(__props) {
		const props = __props;
		const openPreview = inject("openWorkflowPreview", void 0);
		const openDataTablePreview = inject("openDataTablePreview", void 0);
		const iconMap = {
			workflow: "workflow",
			"data-table": "table"
		};
		const icon = computed(() => iconMap[props.type] ?? "file");
		function handleClick(e) {
			if (props.type === "workflow") {
				if (e.metaKey || e.ctrlKey) {
					window.open(`/workflow/${props.resourceId}`, "_blank");
					return;
				}
				openPreview?.(props.resourceId);
			} else if (props.type === "data-table") {
				if (e.metaKey || e.ctrlKey) {
					const url = props.projectId ? `/projects/${props.projectId}/datatables/${props.resourceId}` : "/data-tables";
					window.open(url, "_blank");
					return;
				}
				if (props.projectId) openDataTablePreview?.(props.resourceId, props.projectId);
			}
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nCard_default), {
				class: normalizeClass(_ctx.$style.card),
				onClick: handleClick
			}, {
				prepend: withCtx(() => [createVNode(unref(N8nIcon_default), {
					icon: icon.value,
					size: "large",
					class: normalizeClass(_ctx.$style.icon)
				}, null, 8, ["icon", "class"])]),
				header: withCtx(() => [createVNode(unref(N8nText_default), null, {
					default: withCtx(() => [createTextVNode(toDisplayString(props.name), 1)]),
					_: 1
				})]),
				default: withCtx(() => [props.metadata ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					class: normalizeClass(_ctx.$style.metadata)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(props.metadata), 1)]),
					_: 1
				}, 8, ["class"])) : createCommentVNode("", true)]),
				_: 1
			}, 8, ["class"]);
		};
	}
});
var ArtifactCard_vue_vue_type_style_index_0_lang_module_default = {
	card: "_card_iqymk_125",
	icon: "_icon_iqymk_134",
	name: "_name_iqymk_139",
	metadata: "_metadata_iqymk_148"
};
var ArtifactCard_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ArtifactCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ArtifactCard_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/DelegateCard.vue?vue&type=script&setup=true&lang.ts
var DelegateCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "DelegateCard",
	props: {
		args: {},
		result: {},
		isLoading: { type: Boolean },
		toolCallId: {}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const { getToolLabel } = useToolLabel();
		const role = computed(() => {
			return typeof props.args.role === "string" ? props.args.role : "";
		});
		const tools = computed(() => {
			if (!Array.isArray(props.args.tools)) return [];
			return props.args.tools.every((item) => typeof item === "string") ? props.args.tools : [];
		});
		const briefing = computed(() => {
			return typeof props.args.briefing === "string" ? props.args.briefing : "";
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(CollapsibleRoot_default), null, {
				default: withCtx(({ open: isOpen }) => [createVNode(unref(CollapsibleTrigger_default), { "as-child": "" }, {
					default: withCtx(() => [createVNode(TimelineStepButton_default, { size: "medium" }, {
						icon: withCtx(({ isHovered }) => [isHovered ? (openBlock(), createBlock(unref(N8nIcon_default), {
							key: 0,
							icon: isOpen ? "minus" : "plus",
							size: "small"
						}, null, 8, ["icon"])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [props.isLoading ? (openBlock(), createBlock(unref(N8nIcon_default), {
							key: 0,
							icon: "spinner",
							color: "primary",
							spin: "",
							size: "small"
						})) : (openBlock(), createBlock(unref(N8nIcon_default), {
							key: 1,
							icon: "check",
							color: "success",
							size: "small"
						}))], 64))]),
						default: withCtx(() => [createTextVNode(" " + toDisplayString(unref(i18n).baseText("instanceAi.delegateCard.delegatingTo")) + ": ", 1), createVNode(unref(N8nText_default), { bold: "" }, {
							default: withCtx(() => [createTextVNode(toDisplayString(role.value), 1)]),
							_: 1
						})]),
						_: 2
					}, 1024)]),
					_: 2
				}, 1024), createVNode(AnimatedCollapsibleContent_default, null, {
					default: withCtx(() => [createVNode(unref(N8nCard_default), null, {
						default: withCtx(() => [
							createVNode(unref(N8nText_default), { bold: "" }, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.delegateCard.tools")), 1)]),
								_: 1
							}),
							tools.value.length ? (openBlock(), createElementBlock("div", {
								key: 0,
								class: normalizeClass(_ctx.$style.toolsRow)
							}, [(openBlock(true), createElementBlock(Fragment, null, renderList(tools.value, (tool) => {
								return openBlock(), createBlock(unref(N8nBadge_default), { key: tool }, {
									default: withCtx(() => [createTextVNode(toDisplayString(unref(getToolLabel)(tool)), 1)]),
									_: 2
								}, 1024);
							}), 128))], 2)) : createCommentVNode("", true),
							createVNode(unref(N8nText_default), { tag: "div" }, {
								default: withCtx(() => [createTextVNode(toDisplayString(briefing.value), 1)]),
								_: 1
							})
						]),
						_: 1
					})]),
					_: 1
				})]),
				_: 1
			});
		};
	}
});
var DelegateCard_vue_vue_type_style_index_0_lang_module_default = { toolsRow: "_toolsRow_19dwz_125" };
var DelegateCard_default = /* @__PURE__ */ _plugin_vue_export_helper_default(DelegateCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": DelegateCard_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/ConfirmationFooter.vue?vue&type=script&setup=true&lang.ts
var ConfirmationFooter_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ConfirmationFooter",
	props: {
		layout: { default: "row-end" },
		bordered: {
			type: Boolean,
			default: false
		}
	},
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass([
				_ctx.$style.footer,
				_ctx.$style[__props.layout],
				__props.bordered && _ctx.$style.bordered
			]) }, [renderSlot(_ctx.$slots, "default")], 2);
		};
	}
});
//#endregion
//#region src/features/ai/instanceAi/components/ConfirmationFooter.vue?vue&type=style&index=0&lang.module.scss
var footer$1 = "_footer_nszhc_125";
var column = "_column_nszhc_140";
var bordered = "_bordered_nszhc_145";
var ConfirmationFooter_vue_vue_type_style_index_0_lang_module_default = {
	footer: footer$1,
	"row-end": "_row-end_nszhc_130",
	"row-between": "_row-between_nszhc_135",
	column,
	bordered
};
var ConfirmationFooter_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ConfirmationFooter_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ConfirmationFooter_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/PlanReviewPanel.vue?vue&type=script&setup=true&lang.ts
var PlanReviewPanel_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "PlanReviewPanel",
	props: {
		plannedTasks: {},
		message: {},
		disabled: { type: Boolean },
		readOnly: { type: Boolean },
		loading: { type: Boolean }
	},
	emits: ["approve", "request-changes"],
	setup(__props, { emit: __emit }) {
		/**
		* PlanReviewPanel.vue
		*
		* Single-card plan approval UI. Shows planned tasks as an accordion with
		* expandable specs, dependency info, and approve/request-changes controls.
		*/
		const props = __props;
		const i18n = useI18n();
		const emit = __emit;
		const feedback = ref("");
		const isResolved = ref(false);
		const resolvedAction = ref(null);
		const hasFeedback = computed(() => feedback.value.trim().length > 0);
		const isExpanded = ref(!props.readOnly);
		function getDescription(task) {
			let text = task.spec;
			if (task.deps.length) {
				const depNames = task.deps.map((depId) => {
					return props.plannedTasks.find((t) => t.id === depId)?.title ?? depId;
				});
				text += `\nDepends on: ${depNames.join(", ")}`;
			}
			return text;
		}
		function handleApprove() {
			if (isResolved.value) return;
			isResolved.value = true;
			resolvedAction.value = "approved";
			emit("approve");
		}
		function handleRequestChanges() {
			if (isResolved.value || !hasFeedback.value) return;
			isResolved.value = true;
			resolvedAction.value = "changes-requested";
			emit("request-changes", feedback.value.trim());
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(CollapsibleRoot_default), {
				open: isExpanded.value,
				"onUpdate:open": _cache[1] || (_cache[1] = ($event) => isExpanded.value = $event),
				class: normalizeClass(_ctx.$style.root),
				"data-test-id": "instance-ai-plan-review"
			}, {
				default: withCtx(() => [createVNode(unref(CollapsibleTrigger_default), { "as-child": "" }, {
					default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [createVNode(unref(N8nText_default), { bold: "" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.planReview.title")), 1)]),
						_: 1
					})], 2)]),
					_: 1
				}), createVNode(AnimatedCollapsibleContent_default, null, {
					default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.tasks) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.plannedTasks, (task, idx) => {
						return openBlock(), createElementBlock("div", {
							key: task.id,
							class: normalizeClass(_ctx.$style.taskItem)
						}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.taskRow) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.taskNumber) }, toDisplayString(idx + 1), 3), createVNode(unref(N8nText_default), { class: normalizeClass(_ctx.$style.taskTitle) }, {
							default: withCtx(() => [createTextVNode(toDisplayString(task.title), 1)]),
							_: 2
						}, 1032, ["class"])], 2), task.spec ? (openBlock(), createElementBlock("div", {
							key: 0,
							class: normalizeClass(_ctx.$style.taskDetail)
						}, [createVNode(unref(N8nText_default), {
							tag: "p",
							color: "text-light",
							class: normalizeClass(_ctx.$style.taskSpec)
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(getDescription(task)), 1)]),
							_: 2
						}, 1032, ["class"])], 2)) : createCommentVNode("", true)], 2);
					}), 128))], 2), !isResolved.value && !props.readOnly && !props.loading ? (openBlock(), createBlock(ConfirmationFooter_default, {
						key: 0,
						layout: "column"
					}, {
						default: withCtx(() => [createVNode(unref(Input_default), {
							modelValue: feedback.value,
							"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => feedback.value = $event),
							type: "textarea",
							placeholder: unref(i18n).baseText("instanceAi.planReview.feedbackPlaceholder"),
							disabled: __props.disabled,
							rows: 2
						}, null, 8, [
							"modelValue",
							"placeholder",
							"disabled"
						]), createBaseVNode("div", { class: normalizeClass(_ctx.$style.actions) }, [createVNode(unref(N8nButton_default), {
							variant: "outline",
							size: "medium",
							disabled: __props.disabled || !hasFeedback.value,
							"data-test-id": "instance-ai-plan-request-changes",
							onClick: handleRequestChanges
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.planReview.requestChanges")), 1)]),
							_: 1
						}, 8, ["disabled"]), createVNode(unref(N8nButton_default), {
							variant: "solid",
							size: "medium",
							disabled: __props.disabled,
							"data-test-id": "instance-ai-plan-approve",
							onClick: handleApprove
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.planReview.approve")), 1)]),
							_: 1
						}, 8, ["disabled"])], 2)]),
						_: 1
					})) : createCommentVNode("", true)]),
					_: 1
				})]),
				_: 1
			}, 8, ["open", "class"]);
		};
	}
});
var PlanReviewPanel_vue_vue_type_style_index_0_lang_module_default = {
	root: "_root_t9x2m_125",
	header: "_header_t9x2m_133",
	tasks: "_tasks_t9x2m_141",
	taskItem: "_taskItem_t9x2m_146",
	taskRow: "_taskRow_t9x2m_150",
	taskNumber: "_taskNumber_t9x2m_157",
	taskTitle: "_taskTitle_t9x2m_171",
	taskDetail: "_taskDetail_t9x2m_179",
	taskSpec: "_taskSpec_t9x2m_184",
	actions: "_actions_t9x2m_190"
};
var PlanReviewPanel_default = /* @__PURE__ */ _plugin_vue_export_helper_default(PlanReviewPanel_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": PlanReviewPanel_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/TaskChecklist.vue?vue&type=script&setup=true&lang.ts
var TaskChecklist_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "TaskChecklist",
	props: { tasks: {} },
	setup(__props) {
		const props = __props;
		const statusConfig = {
			todo: {
				icon: "circle",
				color: "text-xlight"
			},
			in_progress: {
				icon: "spinner",
				spin: true,
				color: "primary"
			},
			done: {
				icon: "check",
				color: "success",
				textColor: "text-light"
			},
			failed: {
				icon: "triangle-alert",
				color: "danger"
			},
			cancelled: {
				icon: "x",
				color: "text-xlight",
				lineThrough: true
			}
		};
		function getConfig(status) {
			return statusConfig[status] ?? statusConfig.todo;
		}
		const taskList = computed(() => (props.tasks?.tasks ?? []).map((task) => {
			const config = getConfig(task.status);
			return {
				...task,
				...config
			};
		}));
		return (_ctx, _cache) => {
			return taskList.value.length ? (openBlock(), createBlock(unref(N8nCard_default), { key: 0 }, {
				default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(taskList.value, (task) => {
					return openBlock(), createBlock(ButtonLike_default, { key: task.id }, {
						default: withCtx(() => [createVNode(unref(N8nIcon_default), {
							icon: task.icon,
							spin: task.spin,
							size: "small",
							color: task.color
						}, null, 8, [
							"icon",
							"spin",
							"color"
						]), createVNode(unref(N8nText_default), {
							color: task.textColor,
							class: normalizeClass({ [_ctx.$style.lineThrough]: task.lineThrough })
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(task.description), 1)]),
							_: 2
						}, 1032, ["color", "class"])]),
						_: 2
					}, 1024);
				}), 128))]),
				_: 1
			})) : createCommentVNode("", true);
		};
	}
});
var TaskChecklist_vue_vue_type_style_index_0_lang_module_default = { lineThrough: "_lineThrough_8arq4_125" };
var TaskChecklist_default = /* @__PURE__ */ _plugin_vue_export_helper_default(TaskChecklist_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": TaskChecklist_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/AgentTimeline.vue?vue&type=script&setup=true&lang.ts
var AgentTimeline_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentTimeline",
	props: {
		agentNode: {},
		compact: {
			type: Boolean,
			default: false
		},
		visibleEntries: { default: void 0 }
	},
	setup(__props) {
		const i18n = useI18n();
		const store = useInstanceAiStore();
		const telemetry = useTelemetry();
		const rootStore = useRootStore();
		/** Resolve artifact name from the enriched registry (falls back to extracted name). */
		function resolveArtifactName(artifact) {
			for (const entry of store.resourceRegistry.values()) if (entry.id === artifact.resourceId) return entry.name;
			return artifact.name;
		}
		function formatRelativeTime(isoTime) {
			const diffMs = Date.now() - new Date(isoTime).getTime();
			const diffMin = Math.floor(diffMs / 6e4);
			if (diffMin < 1) return i18n.baseText("instanceAi.artifactCard.updatedJustNow");
			const diffHours = Math.floor(diffMin / 60);
			if (diffHours < 1) {
				const key = diffMin === 1 ? "instanceAi.artifactCard.minute" : "instanceAi.artifactCard.minutes";
				const time = i18n.baseText(key, { interpolate: { count: `${diffMin}` } });
				return i18n.baseText("instanceAi.artifactCard.updatedAgo", { interpolate: { time } });
			}
			const key = diffHours === 1 ? "instanceAi.artifactCard.hour" : "instanceAi.artifactCard.hours";
			const time = i18n.baseText(key, { interpolate: { count: `${diffHours}` } });
			return i18n.baseText("instanceAi.artifactCard.updatedAgo", { interpolate: { time } });
		}
		function formatCreatedDate(isoTime) {
			const date = new Date(isoTime);
			const day = date.getDate();
			const month = date.toLocaleString("en", { month: "long" });
			return i18n.baseText("instanceAi.artifactCard.createdAt", { interpolate: { date: `${day} ${month}` } });
		}
		function formatArtifactMetadata(artifact) {
			const parts = [];
			if (artifact.completedAt) {
				parts.push(formatRelativeTime(artifact.completedAt));
				parts.push(formatCreatedDate(artifact.completedAt));
			} else parts.push(i18n.baseText("instanceAi.artifactCard.updatedJustNow"));
			return parts.join(" │ ");
		}
		const props = __props;
		const timelineEntries = computed(() => props.visibleEntries ?? props.agentNode.timeline);
		/** Index tool calls by ID for O(1) lookup and proper reactivity tracking. */
		const toolCallsById = computed(() => {
			const map = {};
			for (const tc of props.agentNode.toolCalls) map[tc.toolCallId] = tc;
			return map;
		});
		/** Index children by agentId for O(1) lookup and proper reactivity tracking. */
		const childrenById = computed(() => {
			const map = {};
			for (const child of props.agentNode.children) map[child.agentId] = child;
			return map;
		});
		function handlePlanConfirm(tc, approved, feedback) {
			const requestId = tc.confirmation?.requestId;
			if (!requestId) return;
			const numTasks = (tc.args?.tasks ?? []).length;
			const eventProps = {
				thread_id: store.currentThreadId,
				input_thread_id: tc.confirmation?.inputThreadId ?? "",
				instance_id: rootStore.instanceId,
				type: "plan-review",
				provided_inputs: [{
					label: "plan",
					options: ["approve", "request-changes"],
					option_chosen: approved ? "approve" : "request-changes"
				}],
				skipped_inputs: [],
				num_tasks: numTasks,
				...feedback ? { feedback } : {}
			};
			telemetry.track("User finished providing input", eventProps);
			store.resolveConfirmation(requestId, approved ? "approved" : "denied");
			store.confirmAction(requestId, approved, void 0, void 0, void 0, feedback);
		}
		/** Find the latest plan-review confirmation from a planner child's submit-plan tool call.
		*  Prefers pending (isLoading) over resolved — handles revision loops where
		*  multiple submit-plan calls exist. */
		const plannerConfirmation = computed(() => {
			let latest;
			for (const child of props.agentNode.children) {
				if (child.role !== "planner") continue;
				for (const tc of child.toolCalls) if (tc.toolName === "submit-plan" && tc.confirmation?.inputType === "plan-review") {
					if (tc.isLoading) return tc;
					latest = tc;
				}
			}
			return latest;
		});
		/** Map simplified TaskList items to PlannedTaskArg shape for loading preview */
		function mapTaskItemsToPlannedTasks(tasks) {
			if (!tasks?.tasks?.length) return void 0;
			return tasks.tasks.map((t) => ({
				id: t.id,
				title: t.description,
				kind: "",
				spec: "",
				deps: []
			}));
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.timeline) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(timelineEntries.value, (entry, idx) => {
				return openBlock(), createElementBlock(Fragment, { key: idx }, [entry.type === "text" ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					size: "large",
					compact: props.compact
				}, {
					default: withCtx(() => [createVNode(InstanceAiMarkdown_default, { content: entry.content }, null, 8, ["content"])]),
					_: 2
				}, 1032, ["compact"])) : entry.type === "tool-call" && toolCallsById.value[entry.toolCallId] && !unref(HIDDEN_TOOLS).has(toolCallsById.value[entry.toolCallId].toolName) ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [toolCallsById.value[entry.toolCallId].renderHint === "tasks" ? (openBlock(), createBlock(TaskChecklist_default, {
					key: 0,
					tasks: props.agentNode.tasks
				}, null, 8, ["tasks"])) : toolCallsById.value[entry.toolCallId].renderHint === "delegate" ? (openBlock(), createBlock(DelegateCard_default, {
					key: 1,
					args: toolCallsById.value[entry.toolCallId].args,
					result: toolCallsById.value[entry.toolCallId].result,
					"is-loading": toolCallsById.value[entry.toolCallId].isLoading,
					"tool-call-id": toolCallsById.value[entry.toolCallId].toolCallId
				}, null, 8, [
					"args",
					"result",
					"is-loading",
					"tool-call-id"
				])) : toolCallsById.value[entry.toolCallId].renderHint === "builder" ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [], 64)) : toolCallsById.value[entry.toolCallId].renderHint === "data-table" ? (openBlock(), createElementBlock(Fragment, { key: 3 }, [], 64)) : toolCallsById.value[entry.toolCallId].renderHint === "researcher" ? (openBlock(), createElementBlock(Fragment, { key: 4 }, [], 64)) : toolCallsById.value[entry.toolCallId].renderHint === "planner" ? (openBlock(), createElementBlock(Fragment, { key: 5 }, [], 64)) : toolCallsById.value[entry.toolCallId].confirmation?.inputType === "questions" && !toolCallsById.value[entry.toolCallId].isLoading ? (openBlock(), createBlock(AnsweredQuestions_default, {
					key: 6,
					"tool-call": toolCallsById.value[entry.toolCallId]
				}, null, 8, ["tool-call"])) : toolCallsById.value[entry.toolCallId].confirmation?.inputType === "plan-review" ? (openBlock(), createBlock(PlanReviewPanel_default, {
					key: 7,
					"planned-tasks": toolCallsById.value[entry.toolCallId].confirmation?.planItems ?? toolCallsById.value[entry.toolCallId].args?.tasks ?? mapTaskItemsToPlannedTasks(toolCallsById.value[entry.toolCallId].confirmation?.tasks) ?? [],
					"read-only": !toolCallsById.value[entry.toolCallId].isLoading,
					onApprove: ($event) => handlePlanConfirm(toolCallsById.value[entry.toolCallId], true),
					onRequestChanges: (fb) => handlePlanConfirm(toolCallsById.value[entry.toolCallId], false, fb)
				}, null, 8, [
					"planned-tasks",
					"read-only",
					"onApprove",
					"onRequestChanges"
				])) : toolCallsById.value[entry.toolCallId].confirmation?.inputType === "questions" && toolCallsById.value[entry.toolCallId].isLoading ? (openBlock(), createElementBlock(Fragment, { key: 8 }, [], 64)) : (openBlock(), createBlock(ToolCallStep_default, {
					key: 9,
					"tool-call": toolCallsById.value[entry.toolCallId],
					"show-connector": true
				}, {
					default: withCtx(() => [renderSlot(_ctx.$slots, "after-tool-call", { toolCall: toolCallsById.value[entry.toolCallId] })]),
					_: 2
				}, 1032, ["tool-call"]))], 64)) : entry.type === "child" && childrenById.value[entry.agentId] ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
					createVNode(AgentSection_default, { "agent-node": childrenById.value[entry.agentId] }, null, 8, ["agent-node"]),
					childrenById.value[entry.agentId].role === "planner" && (plannerConfirmation.value || props.agentNode.planItems?.length || props.agentNode.tasks?.tasks?.length) ? (openBlock(), createBlock(PlanReviewPanel_default, {
						key: plannerConfirmation.value?.confirmation?.requestId ?? "plan-loading",
						"planned-tasks": plannerConfirmation.value?.confirmation?.planItems ?? props.agentNode.planItems ?? mapTaskItemsToPlannedTasks(props.agentNode.tasks) ?? [],
						loading: !plannerConfirmation.value,
						"read-only": !!plannerConfirmation.value && !plannerConfirmation.value.isLoading,
						onApprove: _cache[0] || (_cache[0] = ($event) => plannerConfirmation.value && handlePlanConfirm(plannerConfirmation.value, true)),
						onRequestChanges: _cache[1] || (_cache[1] = (fb) => plannerConfirmation.value && handlePlanConfirm(plannerConfirmation.value, false, fb))
					}, null, 8, [
						"planned-tasks",
						"loading",
						"read-only"
					])) : createCommentVNode("", true),
					!props.visibleEntries ? (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(unref(extractArtifacts)(childrenById.value[entry.agentId]), (artifact) => {
						return openBlock(), createBlock(ArtifactCard_default, {
							key: artifact.resourceId,
							type: artifact.type,
							name: resolveArtifactName(artifact),
							"resource-id": artifact.resourceId,
							"project-id": artifact.projectId,
							metadata: formatArtifactMetadata(artifact)
						}, null, 8, [
							"type",
							"name",
							"resource-id",
							"project-id",
							"metadata"
						]);
					}), 128)) : createCommentVNode("", true)
				], 64)) : createCommentVNode("", true)], 64);
			}), 128))], 2);
		};
	}
});
var AgentTimeline_vue_vue_type_style_index_0_lang_module_default = { timeline: "_timeline_u5vl6_125" };
var AgentTimeline_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentTimeline_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentTimeline_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/ResponseGroup.vue?vue&type=script&setup=true&lang.ts
var ResponseGroup_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ResponseGroup",
	props: {
		group: {},
		agentNode: {},
		isLast: { type: Boolean }
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const summaryText = computed(() => {
			const { toolCallCount, textCount, questionCount, childCount } = props.group;
			const parts = [];
			if (toolCallCount > 0) parts.push(i18n.baseText("instanceAi.activitySummary.toolCalls", { interpolate: { count: `${toolCallCount}` } }));
			if (textCount > 0) parts.push(i18n.baseText("instanceAi.activitySummary.messages", { interpolate: { count: `${textCount}` } }));
			if (questionCount > 0) parts.push(i18n.baseText("instanceAi.activitySummary.questions", { interpolate: { count: `${questionCount}` } }));
			if (childCount > 0) parts.push(i18n.baseText("instanceAi.activitySummary.subagents", { interpolate: { count: `${childCount}` } }));
			return parts.join(", ");
		});
		const toolIcons = computed(() => getGroupToolIcons(props.group, props.agentNode.toolCalls, getToolIcon));
		/** Whether any tool call in this group is still loading. */
		const hasLoadingToolCalls = computed(() => props.group.entries.some((e) => {
			if (e.type !== "tool-call") return false;
			return props.agentNode.toolCalls.find((t) => t.toolCallId === e.toolCallId)?.isLoading;
		}));
		/** Whether any child agent in this group is still active. */
		const hasActiveChildren = computed(() => props.group.entries.some((e) => {
			if (e.type !== "child") return false;
			return props.agentNode.children.find((c) => c.agentId === e.agentId)?.status === "active";
		}));
		/** Don't collapse the last group while the agent is still streaming. */
		const isLastAndStreaming = computed(() => props.isLast && props.agentNode.status === "active");
		/** Whether this group has enough content to justify a collapsible wrapper. */
		const isCollapsible = computed(() => !isLastAndStreaming.value && !hasLoadingToolCalls.value && !hasActiveChildren.value && (props.group.toolCallCount > 1 || props.group.childCount > 0));
		return (_ctx, _cache) => {
			return isCollapsible.value ? (openBlock(), createBlock(unref(CollapsibleRoot_default), { key: 0 }, {
				default: withCtx(({ open: isOpen }) => [createVNode(unref(CollapsibleTrigger_default), { "as-child": "" }, {
					default: withCtx(() => [createVNode(TimelineStepButton_default, { size: "medium" }, {
						icon: withCtx(() => [!isOpen ? (openBlock(), createBlock(unref(N8nIcon_default), {
							key: 0,
							icon: "chevron-right",
							size: "small"
						})) : (openBlock(), createBlock(unref(N8nIcon_default), {
							key: 1,
							icon: "chevron-down",
							size: "small"
						}))]),
						default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.summaryLabel) }, [createTextVNode(toDisplayString(summaryText.value) + " ", 1), toolIcons.value.length > 0 ? (openBlock(), createElementBlock("span", {
							key: 0,
							class: normalizeClass(_ctx.$style.summaryIcons)
						}, [(openBlock(true), createElementBlock(Fragment, null, renderList(toolIcons.value, (icon) => {
							return openBlock(), createBlock(unref(N8nIcon_default), {
								key: icon,
								icon,
								size: "small"
							}, null, 8, ["icon"]);
						}), 128))], 2)) : createCommentVNode("", true)], 2)]),
						_: 2
					}, 1024)]),
					_: 2
				}, 1024), createVNode(AnimatedCollapsibleContent_default, null, {
					default: withCtx(() => [createVNode(AgentTimeline_default, {
						"agent-node": props.agentNode,
						"visible-entries": props.group.entries
					}, null, 8, ["agent-node", "visible-entries"])]),
					_: 1
				})]),
				_: 1
			})) : (openBlock(), createBlock(AgentTimeline_default, {
				key: 1,
				"agent-node": props.agentNode,
				"visible-entries": props.group.entries
			}, null, 8, ["agent-node", "visible-entries"]));
		};
	}
});
var ResponseGroup_vue_vue_type_style_index_0_lang_module_default = {
	summaryLabel: "_summaryLabel_9z7di_125",
	summaryIcons: "_summaryIcons_9z7di_131"
};
var ResponseGroup_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ResponseGroup_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ResponseGroup_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/AgentActivityTree.vue?vue&type=script&setup=true&lang.ts
var AgentActivityTree_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentActivityTree",
	props: {
		agentNode: {},
		isRoot: {
			type: Boolean,
			default: false
		}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const store = useInstanceAiStore();
		const hasReasoning = computed(() => props.agentNode.reasoning.length > 0);
		const triggerRef = useTemplateRef("triggerRef");
		const isHovered = useElementHover(triggerRef);
		const segments = useTimelineGrouping(toRef(props, "agentNode"));
		/** Whether to show grouped/collapsed view (root + grouping available). */
		const showGrouped = computed(() => props.isRoot && segments.value !== null);
		/** Index of the last response-group segment (for isLast prop). */
		const lastGroupIdx = computed(() => {
			if (!segments.value) return -1;
			for (let i = segments.value.length - 1; i >= 0; i--) if (segments.value[i].kind === "response-group") return i;
			return -1;
		});
		function resolveArtifactName(artifact) {
			for (const entry of store.resourceRegistry.values()) if (entry.id === artifact.resourceId) return entry.name;
			return artifact.name;
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock(Fragment, null, [__props.isRoot && hasReasoning.value ? (openBlock(), createBlock(unref(CollapsibleRoot_default), { key: 0 }, {
				default: withCtx(({ open: isOpen }) => [createVNode(unref(CollapsibleTrigger_default), { "as-child": "" }, {
					default: withCtx(() => [createVNode(unref(N8nButton_default), {
						ref_key: "triggerRef",
						ref: triggerRef,
						variant: "ghost",
						size: "small",
						class: normalizeClass(_ctx.$style.reasoningTrigger)
					}, {
						icon: withCtx(() => [unref(isHovered) ? (openBlock(), createBlock(unref(N8nIcon_default), {
							key: 0,
							icon: isOpen ? "minus" : "plus",
							size: "small"
						}, null, 8, ["icon"])) : (openBlock(), createBlock(unref(N8nIcon_default), {
							key: 1,
							icon: "brain",
							size: "small"
						}))]),
						default: withCtx(() => [createTextVNode(" " + toDisplayString(unref(i18n).baseText("instanceAi.message.reasoning")), 1)]),
						_: 2
					}, 1032, ["class"])]),
					_: 2
				}, 1024), createVNode(AnimatedCollapsibleContent_default, null, {
					default: withCtx(() => [createVNode(unref(N8nText_default), {
						tag: "div",
						class: normalizeClass(_ctx.$style.reasoningContent)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(props.agentNode.reasoning), 1)]),
						_: 1
					}, 8, ["class"])]),
					_: 1
				})]),
				_: 1
			})) : createCommentVNode("", true), showGrouped.value ? (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(unref(segments), (segment, idx) => {
				return openBlock(), createElementBlock(Fragment, { key: idx }, [
					segment.kind === "response-group" ? (openBlock(), createBlock(ResponseGroup_default, {
						key: 0,
						group: segment,
						"agent-node": props.agentNode,
						"is-last": idx === lastGroupIdx.value
					}, null, 8, [
						"group",
						"agent-node",
						"is-last"
					])) : createCommentVNode("", true),
					segment.kind === "response-group" && segment.artifacts.length > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(segment.artifacts, (artifact) => {
						return openBlock(), createBlock(ArtifactCard_default, {
							key: artifact.resourceId,
							type: artifact.type,
							name: resolveArtifactName(artifact),
							"resource-id": artifact.resourceId,
							"project-id": artifact.projectId
						}, null, 8, [
							"type",
							"name",
							"resource-id",
							"project-id"
						]);
					}), 128)) : createCommentVNode("", true),
					segment.kind === "trailing-text" ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 2,
						size: "large"
					}, {
						default: withCtx(() => [createVNode(InstanceAiMarkdown_default, { content: segment.content }, null, 8, ["content"])]),
						_: 2
					}, 1024)) : createCommentVNode("", true)
				], 64);
			}), 128)) : (openBlock(), createBlock(AgentTimeline_default, {
				key: 2,
				"agent-node": props.agentNode
			}, null, 8, ["agent-node"]))], 64);
		};
	}
});
var AgentActivityTree_vue_vue_type_style_index_0_lang_module_default = {
	reasoningTrigger: "_reasoningTrigger_y8kqd_125",
	reasoningContent: "_reasoningContent_y8kqd_129"
};
var AgentActivityTree_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentActivityTree_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentActivityTree_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/AttachmentPreview.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$10 = ["src", "alt"];
var AttachmentPreview_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AttachmentPreview",
	props: {
		file: {},
		attachment: {},
		isRemovable: { type: Boolean }
	},
	emits: ["remove"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const loading = ref(true);
		const mimeType = computed(() => props.file?.type ?? props.attachment?.mimeType ?? "");
		const fileName = computed(() => props.file?.name ?? props.attachment?.fileName ?? "");
		const isImage = computed(() => mimeType.value.startsWith("image/"));
		const objectUrl = computed(() => {
			if (props.file && isImage.value) return URL.createObjectURL(props.file);
			return null;
		});
		const thumbnailSrc = computed(() => {
			if (objectUrl.value) return objectUrl.value;
			if (props.attachment && isImage.value) return `data:${props.attachment.mimeType};base64,${props.attachment.data}`;
			return null;
		});
		const fallbackFile = computed(() => {
			if (props.file) return props.file;
			if (props.attachment) return new File([], props.attachment.fileName, { type: props.attachment.mimeType });
			return new File([], "unknown");
		});
		function handleLoad() {
			loading.value = false;
		}
		function handleRemove() {
			if (props.file) emit("remove", props.file);
		}
		onBeforeUnmount(() => {
			if (objectUrl.value) URL.revokeObjectURL(objectUrl.value);
		});
		return (_ctx, _cache) => {
			return isImage.value && thumbnailSrc.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.thumbnailWrapper)
			}, [
				loading.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.loadingSkeleton)
				}, [createVNode(unref(N8nIcon_default), {
					icon: "spinner",
					color: "primary",
					spin: "",
					size: "small"
				})], 2)) : createCommentVNode("", true),
				createBaseVNode("img", {
					src: thumbnailSrc.value,
					alt: fileName.value,
					class: normalizeClass(_ctx.$style.thumbnail),
					onLoad: handleLoad
				}, null, 42, _hoisted_1$10),
				__props.isRemovable ? (openBlock(), createElementBlock("button", {
					key: 1,
					class: normalizeClass(_ctx.$style.removeBtn),
					"data-test-id": "attachment-preview-remove",
					onClick: withModifiers(handleRemove, ["stop"])
				}, [createVNode(unref(N8nIcon_default), {
					icon: "x",
					size: "small"
				})], 2)) : createCommentVNode("", true)
			], 2)) : (openBlock(), createBlock(ChatFile_default, {
				key: 1,
				file: fallbackFile.value,
				"is-removable": __props.isRemovable ?? false,
				onRemove: _cache[0] || (_cache[0] = ($event) => emit("remove", $event))
			}, null, 8, ["file", "is-removable"]));
		};
	}
});
var AttachmentPreview_vue_vue_type_style_index_0_lang_module_default = {
	thumbnailWrapper: "_thumbnailWrapper_22ink_125",
	thumbnail: "_thumbnail_22ink_125",
	loadingSkeleton: "_loadingSkeleton_22ink_142",
	removeBtn: "_removeBtn_22ink_152"
};
var AttachmentPreview_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AttachmentPreview_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AttachmentPreview_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiMessage.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$9 = { key: 1 };
var InstanceAiMessage_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiMessage",
	props: { message: {} },
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const store = useInstanceAiStore();
		const showDebugInfo = ref(false);
		const isUser = computed(() => props.message.role === "user");
		const isStreaming = computed(() => props.message.isStreaming);
		const showContent = computed(() => props.message.content.length > 0 || isStreaming.value);
		const runError = computed(() => {
			const tree = props.message.agentTree;
			if (!tree || tree.status !== "error" || !tree.error) return null;
			return tree.error;
		});
		const errorDetails = computed(() => {
			const tree = props.message.agentTree;
			if (!tree || tree.status !== "error") return null;
			return tree.errorDetails ?? null;
		});
		const hasProviderError = computed(() => !!errorDetails.value?.provider);
		const errorTitle = computed(() => {
			if (hasProviderError.value) return `${errorDetails.value.provider} ${i18n.baseText("instanceAi.agentTree.error")}`;
			return runError.value ?? i18n.baseText("instanceAi.error.title");
		});
		const formattedTechnicalDetails = computed(() => {
			const details = errorDetails.value;
			if (!details?.technicalDetails) return null;
			try {
				return JSON.stringify(JSON.parse(details.technicalDetails), null, 2);
			} catch {
				return details.technicalDetails;
			}
		});
		const attachments = computed(() => props.message.attachments ?? []);
		/** Transient status message from the backend (e.g. "Recalling conversation..."). */
		const statusMessage = computed(() => {
			if (!isStreaming.value || !props.message.agentTree) return "";
			return props.message.agentTree.statusMessage ?? "";
		});
		/**
		* Background task indicator: shows when the orchestrator run has finished
		* but child agents (e.g., workflow builder) are still working in the background.
		*/
		const hasActiveBackgroundTasks = computed(() => {
			if (!props.message.agentTree || props.message.isStreaming) return false;
			return props.message.agentTree.children.some((c) => c.status === "active");
		});
		const responseId = computed(() => props.message.messageGroupId ?? props.message.id);
		const isRateable = computed(() => !isUser.value && store.rateableResponseId === responseId.value && !(responseId.value in store.feedbackByResponseId));
		const hasSubmittedFeedback = computed(() => !isUser.value && responseId.value in store.feedbackByResponseId);
		function onFeedback(payload) {
			store.submitFeedback(responseId.value, payload);
		}
		function formatJson(value) {
			try {
				return JSON.stringify(value, null, 2);
			} catch {
				return String(value);
			}
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass([isUser.value ? _ctx.$style.userMessage : ""]) }, [isUser.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.userBubble),
				"data-test-id": "instance-ai-user-message"
			}, [attachments.value.length > 0 ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.userAttachments)
			}, [(openBlock(true), createElementBlock(Fragment, null, renderList(attachments.value, (attachment, index) => {
				return openBlock(), createBlock(AttachmentPreview_default, {
					key: index,
					attachment,
					"is-removable": false
				}, null, 8, ["attachment"]);
			}), 128))], 2)) : createCommentVNode("", true), createVNode(unref(N8nText_default), { size: "large" }, {
				default: withCtx(() => [createTextVNode(toDisplayString(props.message.content), 1)]),
				_: 1
			})], 2)) : (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.assistantWrapper),
				"data-test-id": "instance-ai-assistant-message"
			}, [
				props.message.agentTree ? (openBlock(), createBlock(AgentActivityTree_default, {
					key: 0,
					"agent-node": props.message.agentTree,
					"is-root": true
				}, null, 8, ["agent-node"])) : createCommentVNode("", true),
				runError.value ? (openBlock(), createBlock(unref(N8nCallout_default), {
					key: 1,
					theme: "danger"
				}, createSlots({
					default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.runLevelError) }, [
						createVNode(unref(N8nText_default), {
							bold: "",
							tag: "div"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(errorTitle.value), 1)]),
							_: 1
						}),
						hasProviderError.value ? (openBlock(), createBlock(unref(N8nText_default), {
							key: 0,
							tag: "div"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(runError.value), 1)]),
							_: 1
						})) : createCommentVNode("", true),
						formattedTechnicalDetails.value ? (openBlock(), createElementBlock("details", _hoisted_1$9, [createBaseVNode("summary", { class: normalizeClass(_ctx.$style.errorDetailsSummary) }, toDisplayString(unref(i18n).baseText("instanceAi.error.technicalDetails")), 3), createBaseVNode("pre", { class: normalizeClass(_ctx.$style.runLevelErrorDetails) }, toDisplayString(formattedTechnicalDetails.value), 3)])) : createCommentVNode("", true)
					], 2)]),
					_: 2
				}, [errorDetails.value?.statusCode ? {
					name: "trailingContent",
					fn: withCtx(() => [createTextVNode(toDisplayString(errorDetails.value.statusCode), 1)]),
					key: "0"
				} : void 0]), 1024)) : createCommentVNode("", true),
				showContent.value && !props.message.agentTree && props.message.content ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 2,
					size: "large"
				}, {
					default: withCtx(() => [createVNode(InstanceAiMarkdown_default, { content: props.message.content }, null, 8, ["content"])]),
					_: 1
				})) : createCommentVNode("", true),
				statusMessage.value && !props.message.content ? (openBlock(), createElementBlock("div", {
					key: 3,
					class: normalizeClass(_ctx.$style.statusIndicator)
				}, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.statusDot) }, null, 2), createBaseVNode("span", null, toDisplayString(statusMessage.value), 1)], 2)) : isStreaming.value && !props.message.content && !props.message.agentTree ? (openBlock(), createElementBlock("span", {
					key: 4,
					class: normalizeClass(_ctx.$style.blinkingCursor)
				}, null, 2)) : createCommentVNode("", true),
				hasActiveBackgroundTasks.value ? (openBlock(), createBlock(ButtonLike_default, { key: 5 }, {
					default: withCtx(() => [createVNode(unref(N8nIcon_default), {
						icon: "spinner",
						color: "primary",
						spin: "",
						size: "small"
					}), createTextVNode(" " + toDisplayString(unref(i18n).baseText("instanceAi.backgroundTask.running")), 1)]),
					_: 1
				})) : createCommentVNode("", true),
				isRateable.value ? (openBlock(), createBlock(unref(MessageRating_default), {
					key: 6,
					minimal: "",
					"data-test-id": "instance-ai-message-rating",
					onFeedback
				})) : hasSubmittedFeedback.value ? (openBlock(), createElementBlock("p", {
					key: 7,
					class: normalizeClass(_ctx.$style.feedbackSuccess),
					"data-test-id": "instance-ai-feedback-success"
				}, toDisplayString(unref(i18n).baseText("instanceAi.feedback.success")), 3)) : createCommentVNode("", true),
				unref(store).debugMode && !isUser.value ? (openBlock(), createBlock(unref(N8nIconButton_default), {
					key: 8,
					icon: "code",
					variant: "ghost",
					size: "xsmall",
					class: normalizeClass(_ctx.$style.actionBtn),
					onClick: _cache[0] || (_cache[0] = ($event) => showDebugInfo.value = !showDebugInfo.value)
				}, null, 8, ["class"])) : createCommentVNode("", true),
				showDebugInfo.value ? (openBlock(), createElementBlock("pre", {
					key: 9,
					class: normalizeClass(_ctx.$style.debugJson)
				}, toDisplayString(formatJson(props.message)), 3)) : createCommentVNode("", true)
			], 2))], 2);
		};
	}
});
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiMessage.vue?vue&type=style&index=0&lang.module.scss
var userMessage = "_userMessage_c9xut_125";
var userAttachments = "_userAttachments_c9xut_131";
var userBubble = "_userBubble_c9xut_138";
var assistantWrapper = "_assistantWrapper_c9xut_146";
var actionBtn = "_actionBtn_c9xut_152";
var statusIndicator = "_statusIndicator_c9xut_169";
var statusDot$1 = "_statusDot_c9xut_179";
var pulse$1 = "_pulse_c9xut_1";
var blinkingCursor = "_blinkingCursor_c9xut_203";
var runLevelError = "_runLevelError_c9xut_220";
var runLevelErrorDetails = "_runLevelErrorDetails_c9xut_226";
var errorDetailsSummary = "_errorDetailsSummary_c9xut_238";
var feedbackSuccess = "_feedbackSuccess_c9xut_247";
var debugJson = "_debugJson_c9xut_253";
var InstanceAiMessage_vue_vue_type_style_index_0_lang_module_default = {
	userMessage,
	userAttachments,
	userBubble,
	assistantWrapper,
	actionBtn,
	statusIndicator,
	"status-fade-in": "_status-fade-in_c9xut_1",
	statusDot: statusDot$1,
	pulse: pulse$1,
	blinkingCursor,
	"cursor-blink": "_cursor-blink_c9xut_1",
	runLevelError,
	runLevelErrorDetails,
	errorDetailsSummary,
	feedbackSuccess,
	debugJson
};
var InstanceAiMessage_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiMessage_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiMessage_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/shared/components/ChatInputBase.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$8 = ["accept"];
var ChatInputBase_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ChatInputBase",
	props: {
		modelValue: {},
		placeholder: {},
		isStreaming: { type: Boolean },
		canSubmit: { type: Boolean },
		disabled: { type: Boolean },
		showVoice: { type: Boolean },
		showAttach: { type: Boolean },
		acceptedMimeTypes: {}
	},
	emits: [
		"update:modelValue",
		"submit",
		"stop",
		"tab",
		"files-selected"
	],
	setup(__props, { expose: __expose, emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const inputRef = useTemplateRef("inputRef");
		const fileInputRef = useTemplateRef("fileInputRef");
		const committedSpokenMessage = ref("");
		const speechInput = useSpeechRecognition({
			continuous: true,
			interimResults: true,
			lang: navigator.language
		});
		watch(speechInput.result, (spoken) => {
			if (props.showVoice) {
				const prefix = committedSpokenMessage.value;
				emit("update:modelValue", prefix + (prefix.length > 0 ? " " : "") + spoken.trimStart());
			}
		});
		watch(speechInput.isFinal, (final) => {
			if (final && props.showVoice) committedSpokenMessage.value = props.modelValue;
		}, { flush: "post" });
		function handleMic() {
			committedSpokenMessage.value = props.modelValue;
			if (speechInput.isListening.value) speechInput.stop();
			else speechInput.start();
		}
		function handleAttach() {
			fileInputRef.value?.click();
		}
		function handleFileSelect(e) {
			const target = e.target;
			const files = target.files;
			if (!files || files.length === 0) return;
			emit("files-selected", Array.from(files));
			target.value = "";
			inputRef.value?.focus();
		}
		function handlePaste(e) {
			if (!props.showAttach || !e.clipboardData?.files.length) return;
			const files = Array.from(e.clipboardData.files);
			if (files.length > 0) {
				e.preventDefault();
				emit("files-selected", files);
			}
		}
		function handleKeydown(e) {
			if (e.key === "Enter" && !e.shiftKey && !e.isComposing) {
				e.preventDefault();
				speechInput.stop();
				emit("submit");
			} else if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				speechInput.stop();
				emit("submit");
			} else if (e.key === "Tab" && !e.shiftKey) {
				e.preventDefault();
				emit("tab");
			}
		}
		function handleClickWrapper() {
			inputRef.value?.focus();
		}
		__expose({ focus: () => inputRef.value?.focus() });
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.inputWrapper),
				onClick: handleClickWrapper,
				onPaste: handlePaste
			}, [
				__props.showAttach ? (openBlock(), createElementBlock("input", {
					key: 0,
					ref_key: "fileInputRef",
					ref: fileInputRef,
					type: "file",
					class: normalizeClass(_ctx.$style.fileInput),
					accept: __props.acceptedMimeTypes,
					multiple: "",
					onChange: handleFileSelect
				}, null, 42, _hoisted_1$8)) : createCommentVNode("", true),
				renderSlot(_ctx.$slots, "attachments"),
				createVNode(unref(Input_default), {
					ref_key: "inputRef",
					ref: inputRef,
					"model-value": __props.modelValue,
					type: "textarea",
					placeholder: __props.placeholder,
					autocomplete: "off",
					autosize: {
						minRows: 1,
						maxRows: 6
					},
					disabled: __props.disabled,
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => emit("update:modelValue", $event)),
					onKeydown: handleKeydown
				}, null, 8, [
					"model-value",
					"placeholder",
					"disabled"
				]),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.footer) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.footerStart) }, [renderSlot(_ctx.$slots, "footer-start")], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.actions) }, [
					__props.showAttach ? (openBlock(), createBlock(unref(N8nTooltip_default), {
						key: 0,
						content: unref(i18n).baseText("chatInputBase.button.attach"),
						placement: "top"
					}, {
						default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
							variant: "ghost",
							disabled: __props.disabled || __props.isStreaming,
							icon: "paperclip",
							"icon-size": "large",
							"data-test-id": "chat-input-attach-button",
							onClick: withModifiers(handleAttach, ["stop"])
						}, null, 8, ["disabled"])]),
						_: 1
					}, 8, ["content"])) : createCommentVNode("", true),
					__props.showVoice && unref(speechInput).isSupported ? (openBlock(), createBlock(unref(N8nIconButton_default), {
						key: 1,
						variant: "ghost",
						disabled: __props.disabled || __props.isStreaming,
						icon: unref(speechInput).isListening.value ? "square" : "mic",
						class: normalizeClass({ [_ctx.$style.recording]: unref(speechInput).isListening.value }),
						"icon-size": "large",
						"data-test-id": "chat-input-voice-button",
						onClick: withModifiers(handleMic, ["stop"])
					}, null, 8, [
						"disabled",
						"icon",
						"class"
					])) : createCommentVNode("", true),
					__props.isStreaming ? (openBlock(), createBlock(unref(N8nIconButton_default), {
						key: 2,
						"native-type": "button",
						title: unref(i18n).baseText("instanceAi.input.stop"),
						icon: "square",
						"icon-size": "large",
						"data-test-id": "instance-ai-stop-button",
						onClick: _cache[1] || (_cache[1] = withModifiers(($event) => emit("stop"), ["stop"]))
					}, null, 8, ["title"])) : (openBlock(), createBlock(unref(N8nIconButton_default), {
						key: 3,
						"native-type": "button",
						disabled: !__props.canSubmit,
						title: unref(i18n).baseText("instanceAi.input.send"),
						icon: "arrow-up",
						"icon-size": "large",
						"data-test-id": "instance-ai-send-button",
						onClick: _cache[2] || (_cache[2] = withModifiers(($event) => emit("submit"), ["stop"]))
					}, null, 8, ["disabled", "title"]))
				], 2)], 2)
			], 34);
		};
	}
});
var ChatInputBase_vue_vue_type_style_index_0_lang_module_default = {
	inputWrapper: "_inputWrapper_16bt1_125",
	footer: "_footer_16bt1_157",
	footerStart: "_footerStart_16bt1_164",
	actions: "_actions_16bt1_168",
	fileInput: "_fileInput_16bt1_177",
	recording: "_recording_16bt1_181",
	chatInputRecordingPulse: "_chatInputRecordingPulse_16bt1_1"
};
var ChatInputBase_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ChatInputBase_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatInputBase_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiPromptSuggestions.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$7 = [
	"data-test-id",
	"aria-expanded",
	"aria-haspopup",
	"disabled",
	"onClick",
	"onMouseenter",
	"onMouseleave",
	"onFocus",
	"onBlur"
];
var _hoisted_2$3 = ["aria-label", "disabled"];
var _hoisted_3$2 = [
	"data-test-id",
	"disabled",
	"onClick",
	"onMouseenter",
	"onFocus"
];
var InstanceAiPromptSuggestions_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiPromptSuggestions",
	props: {
		suggestions: {},
		disabled: { type: Boolean }
	},
	emits: [
		"preview-change",
		"quick-examples-opened",
		"submit-suggestion"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const quickExamplesSuggestion = computed(() => props.suggestions.find(isMenuSuggestion) ?? null);
		const activePreviewPromptKey = ref(null);
		const isQuickExamplesOpen = ref(false);
		const rootRef = ref(null);
		function setPreview(promptKey) {
			activePreviewPromptKey.value = promptKey;
			emit("preview-change", promptKey);
		}
		function closeQuickExamples() {
			isQuickExamplesOpen.value = false;
			setPreview(null);
		}
		function getTopLevelPosition(suggestionId) {
			const index = props.suggestions.findIndex((suggestion) => suggestion.id === suggestionId);
			return index >= 0 ? index + 1 : 0;
		}
		function getQuickExamplePosition(exampleId) {
			const quickExamples = quickExamplesSuggestion.value;
			if (!quickExamples) return 0;
			const index = quickExamples.examples.findIndex((example) => example.id === exampleId);
			return index >= 0 ? index + 1 : 0;
		}
		function submitSuggestion(payload) {
			if (props.disabled) return;
			closeQuickExamples();
			emit("submit-suggestion", payload);
		}
		function handleDocumentKeydown(event) {
			if (event.key === "Escape") closeQuickExamples();
		}
		onMounted(() => {
			document.addEventListener("keydown", handleDocumentKeydown);
		});
		onUnmounted(() => {
			document.removeEventListener("keydown", handleDocumentKeydown);
		});
		onClickOutside(rootRef, closeQuickExamples);
		function handleSuggestionEnter(suggestion) {
			if (props.disabled || !isPromptSuggestion(suggestion)) return;
			setPreview(suggestion.promptKey);
		}
		function handleSuggestionLeave(suggestion) {
			if (props.disabled || !isPromptSuggestion(suggestion)) return;
			setPreview(null);
		}
		function handleSuggestionFocus(suggestion) {
			if (props.disabled || !isPromptSuggestion(suggestion)) return;
			setPreview(suggestion.promptKey);
		}
		function handleSuggestionBlur(suggestion) {
			if (props.disabled || !isPromptSuggestion(suggestion)) return;
			setPreview(null);
		}
		function handleSuggestionClick(suggestion) {
			if (isPromptSuggestion(suggestion)) {
				submitSuggestion({
					promptKey: suggestion.promptKey,
					suggestionId: suggestion.id,
					suggestionKind: "prompt",
					position: getTopLevelPosition(suggestion.id)
				});
				return;
			}
			if (props.disabled) return;
			if (isQuickExamplesOpen.value) {
				closeQuickExamples();
				return;
			}
			setPreview(null);
			isQuickExamplesOpen.value = true;
			emit("quick-examples-opened", {
				suggestionId: suggestion.id,
				position: getTopLevelPosition(suggestion.id)
			});
		}
		function handleQuickExampleEnter(promptKey) {
			if (props.disabled) return;
			setPreview(promptKey);
		}
		function handleQuickExampleLeave() {
			if (props.disabled) return;
			setPreview(null);
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				ref_key: "rootRef",
				ref: rootRef,
				class: normalizeClass(_ctx.$style.suggestions)
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.suggestionRow) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(props.suggestions, (suggestion, index) => {
				return openBlock(), createElementBlock("button", {
					key: suggestion.id,
					type: "button",
					class: normalizeClass([
						_ctx.$style.suggestionButton,
						unref(isMenuSuggestion)(suggestion) && _ctx.$style.menuSuggestionButton,
						unref(isMenuSuggestion)(suggestion) && isQuickExamplesOpen.value && _ctx.$style.menuSuggestionButtonActive
					]),
					style: normalizeStyle({ animationDelay: `${index * 50}ms` }),
					"data-test-id": `instance-ai-suggestion-${suggestion.id}`,
					"aria-expanded": unref(isMenuSuggestion)(suggestion) ? isQuickExamplesOpen.value : void 0,
					"aria-haspopup": unref(isMenuSuggestion)(suggestion) ? "dialog" : void 0,
					disabled: props.disabled,
					onClick: ($event) => handleSuggestionClick(suggestion),
					onMouseenter: ($event) => handleSuggestionEnter(suggestion),
					onMouseleave: ($event) => handleSuggestionLeave(suggestion),
					onFocus: ($event) => handleSuggestionFocus(suggestion),
					onBlur: ($event) => handleSuggestionBlur(suggestion)
				}, [
					createVNode(unref(N8nIcon_default), {
						icon: suggestion.icon,
						size: 12,
						class: normalizeClass(_ctx.$style.suggestionIcon)
					}, null, 8, ["icon", "class"]),
					createBaseVNode("span", null, toDisplayString(unref(i18n).baseText(suggestion.labelKey)), 1),
					unref(isMenuSuggestion)(suggestion) ? (openBlock(), createBlock(unref(N8nIcon_default), {
						key: 0,
						icon: isQuickExamplesOpen.value ? "chevron-up" : "chevron-down",
						size: 12,
						class: normalizeClass(_ctx.$style.suggestionChevron)
					}, null, 8, ["icon", "class"])) : createCommentVNode("", true)
				], 46, _hoisted_1$7);
			}), 128))], 2), createVNode(Transition, { name: "quick-examples-fade" }, {
				default: withCtx(() => [isQuickExamplesOpen.value && quickExamplesSuggestion.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.quickExamplesPanel),
					"data-test-id": "instance-ai-quick-examples-panel"
				}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.quickExamplesHeader) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.quickExamplesTitle) }, [createVNode(unref(N8nIcon_default), {
					icon: quickExamplesSuggestion.value.icon,
					size: 14
				}, null, 8, ["icon"]), createTextVNode(" " + toDisplayString(unref(i18n).baseText(quickExamplesSuggestion.value.labelKey)), 1)], 2), createBaseVNode("button", {
					type: "button",
					class: normalizeClass(_ctx.$style.quickExamplesClose),
					"aria-label": unref(i18n).baseText("instanceAi.emptyState.quickExamples.close"),
					disabled: props.disabled,
					onClick: closeQuickExamples
				}, [createVNode(unref(N8nIcon_default), {
					icon: "x",
					size: 14
				})], 10, _hoisted_2$3)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.quickExamplesList) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(quickExamplesSuggestion.value.examples, (example) => {
					return openBlock(), createElementBlock("button", {
						key: example.id,
						type: "button",
						class: normalizeClass([_ctx.$style.quickExampleButton, activePreviewPromptKey.value === example.promptKey && _ctx.$style.quickExampleButtonActive]),
						"data-test-id": `instance-ai-quick-example-${example.id}`,
						disabled: props.disabled,
						onClick: ($event) => submitSuggestion({
							promptKey: example.promptKey,
							suggestionId: example.id,
							suggestionKind: "quick_example",
							position: getQuickExamplePosition(example.id)
						}),
						onMouseenter: ($event) => handleQuickExampleEnter(example.promptKey),
						onMouseleave: handleQuickExampleLeave,
						onFocus: ($event) => handleQuickExampleEnter(example.promptKey),
						onBlur: handleQuickExampleLeave
					}, toDisplayString(unref(i18n).baseText(example.labelKey)), 43, _hoisted_3$2);
				}), 128))], 2)], 2)) : createCommentVNode("", true)]),
				_: 1
			})], 2);
		};
	}
});
var InstanceAiPromptSuggestions_vue_vue_type_style_index_0_lang_module_default = {
	suggestions: "_suggestions_rz0w8_125",
	suggestionRow: "_suggestionRow_rz0w8_130",
	suggestionButton: "_suggestionButton_rz0w8_138",
	suggestionSlideIn: "_suggestionSlideIn_rz0w8_1",
	menuSuggestionButton: "_menuSuggestionButton_rz0w8_166",
	menuSuggestionButtonActive: "_menuSuggestionButtonActive_rz0w8_170",
	suggestionIcon: "_suggestionIcon_rz0w8_177",
	suggestionChevron: "_suggestionChevron_rz0w8_186",
	quickExamplesPanel: "_quickExamplesPanel_rz0w8_191",
	quickExamplesHeader: "_quickExamplesHeader_rz0w8_202",
	quickExamplesTitle: "_quickExamplesTitle_rz0w8_211",
	quickExamplesClose: "_quickExamplesClose_rz0w8_220",
	quickExamplesList: "_quickExamplesList_rz0w8_239",
	quickExampleButton: "_quickExampleButton_rz0w8_245",
	quickExampleButtonActive: "_quickExampleButtonActive_rz0w8_262"
};
var InstanceAiPromptSuggestions_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiPromptSuggestions_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiPromptSuggestions_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/instanceAiPromptSuggestions.telemetry.ts
var shownImpressionKeys = /* @__PURE__ */ new Set();
var createBasePayload = (context) => ({
	thread_id: context.threadId,
	suggestion_catalog_version: "v1",
	research_mode: context.researchMode
});
function createInstanceAiPromptSuggestionsTelemetry(telemetry, shownKeys = shownImpressionKeys) {
	return {
		trackSuggestionsShown(context) {
			const impressionKey = context.threadId + ":v1";
			if (shownKeys.has(impressionKey)) return;
			shownKeys.add(impressionKey);
			telemetry.track("Instance AI prompt suggestions shown", createBasePayload(context));
		},
		trackQuickExamplesOpened(context) {
			telemetry.track("Instance AI quick examples opened", {
				...createBasePayload(context),
				suggestion_id: context.suggestionId,
				position: context.position
			});
		},
		trackSuggestionSelected(context) {
			telemetry.track("Instance AI prompt suggestion selected", {
				...createBasePayload(context),
				suggestion_id: context.suggestionId,
				suggestion_kind: context.suggestionKind,
				position: context.position
			});
		}
	};
}
function useInstanceAiPromptSuggestionsTelemetry() {
	return createInstanceAiPromptSuggestionsTelemetry(useTelemetry());
}
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiInput.vue?vue&type=script&setup=true&lang.ts
var InstanceAiInput_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiInput",
	props: {
		isStreaming: { type: Boolean },
		suggestions: {}
	},
	emits: ["submit", "stop"],
	setup(__props, { expose: __expose, emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const store = useInstanceAiStore();
		const promptSuggestionsTelemetry = useInstanceAiPromptSuggestionsTelemetry();
		const inputText = ref("");
		const attachedFiles = ref([]);
		const chatInputRef = ref(null);
		const previewPromptKey = ref(null);
		__expose({ focus: () => chatInputRef.value?.focus() });
		const isBusy = computed(() => props.isStreaming || store.isSendingMessage);
		const hasNonWhitespaceDraftText = computed(() => inputText.value.trim().length > 0);
		const isInputVisuallyEmpty = computed(() => inputText.value.length === 0);
		const hasAttachments = computed(() => attachedFiles.value.length > 0);
		const isComposerDirty = computed(() => hasNonWhitespaceDraftText.value || hasAttachments.value);
		const canSubmit = computed(() => isComposerDirty.value && !isBusy.value);
		const canShowSuggestions = computed(() => Boolean(props.suggestions?.length) && !isComposerDirty.value && !isBusy.value);
		const visibleSuggestionThreadId = computed(() => canShowSuggestions.value ? store.currentThreadId : null);
		const placeholder = computed(() => {
			if (previewPromptKey.value && isInputVisuallyEmpty.value) return i18n.baseText(previewPromptKey.value);
			if (store.amendContext) return i18n.baseText("instanceAi.input.amendPlaceholder", { interpolate: { role: store.amendContext.role } });
			if (store.contextualSuggestion) return store.contextualSuggestion;
			return i18n.baseText("instanceAi.input.placeholder");
		});
		watch(visibleSuggestionThreadId, (threadId) => {
			if (threadId) {
				promptSuggestionsTelemetry.trackSuggestionsShown({
					threadId,
					researchMode: store.researchMode
				});
				return;
			}
			previewPromptKey.value = null;
		}, { immediate: true });
		function emitSubmittedMessage(message, attachments) {
			previewPromptKey.value = null;
			emit("submit", message, attachments);
		}
		function resetDraftComposer() {
			inputText.value = "";
			attachedFiles.value = [];
		}
		function canSubmitMessage(message, attachmentCount = 0) {
			return (message.length > 0 || attachmentCount > 0) && !isBusy.value;
		}
		function submitComposerMessage(message, attachments) {
			if (!canSubmitMessage(message, attachments?.length ?? 0)) return;
			emitSubmittedMessage(message, attachments);
			resetDraftComposer();
		}
		async function handleSubmit() {
			const text = inputText.value.trim();
			if (!canSubmitMessage(text, attachedFiles.value.length)) return;
			let attachments;
			if (attachedFiles.value.length > 0) attachments = (await Promise.all(attachedFiles.value.map(convertFileToBinaryData))).map((b) => ({
				data: b.data,
				mimeType: b.mimeType,
				fileName: b.fileName ?? "unnamed"
			}));
			submitComposerMessage(text, attachments);
		}
		function handleStop() {
			emit("stop");
		}
		function handleTabAutocomplete() {
			if (!inputText.value && store.contextualSuggestion) inputText.value = store.contextualSuggestion;
		}
		function handleFilesSelected(files) {
			attachedFiles.value.push(...files);
		}
		function handleFileRemove(file) {
			const idx = attachedFiles.value.indexOf(file);
			if (idx !== -1) attachedFiles.value.splice(idx, 1);
		}
		function getTelemetryContext() {
			return {
				threadId: store.currentThreadId,
				researchMode: store.researchMode
			};
		}
		function handleQuickExamplesOpened(payload) {
			if (payload.suggestionId !== "quick-examples") return;
			promptSuggestionsTelemetry.trackQuickExamplesOpened({
				...getTelemetryContext(),
				suggestionId: payload.suggestionId,
				position: payload.position
			});
		}
		function handleSuggestionSubmit(payload) {
			promptSuggestionsTelemetry.trackSuggestionSelected({
				...getTelemetryContext(),
				suggestionId: payload.suggestionId,
				suggestionKind: payload.suggestionKind,
				position: payload.position
			});
			submitComposerMessage(i18n.baseText(payload.promptKey));
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.composer) }, [createVNode(ChatInputBase_default, {
				ref_key: "chatInputRef",
				ref: chatInputRef,
				modelValue: inputText.value,
				"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => inputText.value = $event),
				placeholder: placeholder.value,
				"is-streaming": props.isStreaming,
				"can-submit": canSubmit.value,
				"show-voice": "",
				"show-attach": "",
				onSubmit: handleSubmit,
				onStop: handleStop,
				onTab: handleTabAutocomplete,
				onFilesSelected: handleFilesSelected
			}, createSlots({
				"footer-start": withCtx(() => [createVNode(unref(N8nTooltip_default), {
					content: unref(i18n).baseText("instanceAi.input.researchToggle.tooltip"),
					placement: "top",
					"show-after": 300
				}, {
					default: withCtx(() => [createBaseVNode("button", {
						class: normalizeClass([_ctx.$style.researchToggle, { [_ctx.$style.active]: unref(store).researchMode }]),
						"data-test-id": "instance-ai-research-toggle",
						onClick: _cache[0] || (_cache[0] = ($event) => unref(store).toggleResearchMode())
					}, [(openBlock(), createElementBlock("svg", {
						class: normalizeClass(_ctx.$style.researchIcon),
						xmlns: "http://www.w3.org/2000/svg",
						viewBox: "0 0 16 16",
						fill: "currentColor"
					}, [..._cache[3] || (_cache[3] = [createBaseVNode("path", { d: "M6.5 1a5.5 5.5 0 0 1 4.383 8.823l3.897 3.897a.75.75 0 0 1-1.06 1.06l-3.897-3.897A5.5 5.5 0 1 1 6.5 1Zm0 1.5a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" }, null, -1)])], 2)), createTextVNode(" " + toDisplayString(unref(i18n).baseText("instanceAi.input.researchToggle")), 1)], 2)]),
					_: 1
				}, 8, ["content"])]),
				_: 2
			}, [attachedFiles.value.length > 0 ? {
				name: "attachments",
				fn: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.attachments) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(attachedFiles.value, (file, index) => {
					return openBlock(), createBlock(AttachmentPreview_default, {
						key: index,
						file,
						"is-removable": true,
						onRemove: handleFileRemove
					}, null, 8, ["file"]);
				}), 128))], 2)]),
				key: "0"
			} : void 0]), 1032, [
				"modelValue",
				"placeholder",
				"is-streaming",
				"can-submit"
			]), createVNode(Transition, { name: "suggestions-fade" }, {
				default: withCtx(() => [canShowSuggestions.value && props.suggestions ? (openBlock(), createBlock(InstanceAiPromptSuggestions_default, {
					key: 0,
					suggestions: props.suggestions,
					disabled: isBusy.value,
					onPreviewChange: _cache[2] || (_cache[2] = ($event) => previewPromptKey.value = $event),
					onQuickExamplesOpened: handleQuickExamplesOpened,
					onSubmitSuggestion: handleSuggestionSubmit
				}, null, 8, ["suggestions", "disabled"])) : createCommentVNode("", true)]),
				_: 1
			})], 2);
		};
	}
});
var InstanceAiInput_vue_vue_type_style_index_0_lang_module_default = {
	composer: "_composer_2jgu3_125",
	attachments: "_attachments_2jgu3_131",
	researchToggle: "_researchToggle_2jgu3_137",
	active: "_active_2jgu3_156",
	researchIcon: "_researchIcon_2jgu3_166"
};
var InstanceAiInput_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiInput_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiInput_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiEmptyState.vue?vue&type=script&setup=true&lang.ts
var InstanceAiEmptyState_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiEmptyState",
	setup(__props) {
		const i18n = useI18n();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.container),
				"data-test-id": "instance-ai-empty-state"
			}, [createVNode(unref(N8nText_default), {
				tag: "h1",
				size: "xlarge",
				bold: "",
				class: normalizeClass(_ctx.$style.title)
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.emptyState.title")), 1)]),
				_: 1
			}, 8, ["class"])], 2);
		};
	}
});
var InstanceAiEmptyState_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_urytu_125",
	fadeIn: "_fadeIn_urytu_1",
	title: "_title_urytu_143"
};
var InstanceAiEmptyState_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiEmptyState_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiEmptyState_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiThreadList.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$6 = ["onKeydown", "onBlur"];
var InstanceAiThreadList_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiThreadList",
	setup(__props) {
		const store = useInstanceAiStore();
		const i18n = useI18n();
		const router = useRouter();
		const editingThreadId = ref(null);
		const editingTitle = ref("");
		const threadActions = [{
			id: "rename",
			label: i18n.baseText("instanceAi.sidebar.renameThread"),
			icon: "pencil"
		}, {
			id: "delete",
			label: i18n.baseText("instanceAi.sidebar.deleteThread"),
			icon: "trash-2"
		}];
		const dateGroupI18nMap = {
			Today: i18n.baseText("userActivity.today"),
			Yesterday: i18n.baseText("userActivity.yesterday"),
			"This week": i18n.baseText("instanceAi.sidebar.group.thisWeek"),
			Older: i18n.baseText("instanceAi.sidebar.group.older")
		};
		const groupOrder = [
			"Today",
			"Yesterday",
			"This week",
			"Older"
		];
		const groupedThreads = computed(() => {
			const now = /* @__PURE__ */ new Date();
			const groups = /* @__PURE__ */ new Map();
			for (const thread of store.threads) {
				const group = getRelativeDate(now, thread.createdAt);
				if (!groups.has(group)) groups.set(group, []);
				groups.get(group).push(thread);
			}
			return groupOrder.flatMap((groupName) => {
				const threads = groups.get(groupName) ?? [];
				return threads.length > 0 ? [{
					label: dateGroupI18nMap[groupName] ?? groupName,
					threads
				}] : [];
			});
		});
		function handleNewThread() {
			const threadId = store.newThread();
			router.push({
				name: INSTANCE_AI_THREAD_VIEW,
				params: { threadId }
			});
		}
		async function handleDeleteThread(threadId) {
			const { wasActive } = await store.deleteThread(threadId);
			if (wasActive) router.push({
				name: INSTANCE_AI_THREAD_VIEW,
				params: { threadId: store.currentThreadId }
			});
		}
		function startRename(threadId, currentTitle) {
			editingThreadId.value = threadId;
			editingTitle.value = currentTitle;
		}
		async function confirmRename(threadId) {
			const title = editingTitle.value.trim();
			try {
				if (title && title !== store.threads.find((t) => t.id === threadId)?.title) await store.renameThread(threadId, title);
			} finally {
				editingThreadId.value = null;
			}
		}
		function cancelRename() {
			editingThreadId.value = null;
		}
		function handleThreadAction(action, threadId) {
			if (action === "delete") handleDeleteThread(threadId);
			else if (action === "rename") {
				const thread = store.threads.find((t) => t.id === threadId);
				if (thread) startRename(threadId, thread.title);
			}
		}
		return (_ctx, _cache) => {
			const _component_RouterLink = resolveComponent("RouterLink");
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.container),
				"data-test-id": "instance-ai-thread-list"
			}, [createBaseVNode("button", {
				class: normalizeClass(_ctx.$style.newChatButton),
				"data-test-id": "instance-ai-new-thread-button",
				onClick: handleNewThread
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.newChatIcon) }, [createVNode(unref(N8nIcon_default), {
				icon: "plus",
				size: "medium"
			})], 2), createTextVNode(" " + toDisplayString(unref(i18n).baseText("instanceAi.thread.new")), 1)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.threadList) }, [groupedThreads.value.length > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(groupedThreads.value, (group) => {
				return openBlock(), createElementBlock("div", {
					key: group.label,
					class: normalizeClass(_ctx.$style.group)
				}, [createVNode(unref(N8nText_default), {
					class: normalizeClass(_ctx.$style.groupLabel),
					tag: "div",
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(group.label), 1)]),
					_: 2
				}, 1032, ["class"]), (openBlock(true), createElementBlock(Fragment, null, renderList(group.threads, (thread) => {
					return openBlock(), createElementBlock("div", {
						key: thread.id,
						class: normalizeClass([_ctx.$style.threadItem, { [_ctx.$style.active]: thread.id === unref(store).currentThreadId }]),
						"data-test-id": "instance-ai-thread-item"
					}, [editingThreadId.value === thread.id ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.renameContainer)
					}, [withDirectives(createBaseVNode("input", {
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => editingTitle.value = $event),
						class: normalizeClass(_ctx.$style.renameInput),
						type: "text",
						autofocus: "",
						onKeydown: [withKeys(($event) => confirmRename(thread.id), ["enter"]), withKeys(cancelRename, ["escape"])],
						onBlur: ($event) => confirmRename(thread.id)
					}, null, 42, _hoisted_1$6), [[vModelText, editingTitle.value]])], 2)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createVNode(_component_RouterLink, {
						to: {
							name: unref(INSTANCE_AI_THREAD_VIEW),
							params: { threadId: thread.id }
						},
						class: normalizeClass(_ctx.$style.threadLink),
						title: thread.title,
						"active-class": _ctx.$style.threadLinkActive,
						onDblclick: withModifiers(($event) => startRename(thread.id, thread.title), ["prevent"])
					}, {
						default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.threadTitle) }, toDisplayString(thread.title), 3)]),
						_: 2
					}, 1032, [
						"to",
						"class",
						"title",
						"active-class",
						"onDblclick"
					]), createVNode(unref(N8nActionDropdown_default), {
						items: threadActions,
						class: normalizeClass(_ctx.$style.actionDropdown),
						placement: "bottom-start",
						onSelect: ($event) => handleThreadAction($event, thread.id),
						onClick: _cache[1] || (_cache[1] = withModifiers(() => {}, ["stop"]))
					}, {
						activator: withCtx(() => [createVNode(unref(N8nIconButton_default), {
							variant: "ghost",
							icon: "ellipsis-vertical",
							class: normalizeClass(_ctx.$style.actionTrigger)
						}, null, 8, ["class"])]),
						_: 1
					}, 8, ["class", "onSelect"])], 64))], 2);
				}), 128))], 2);
			}), 128)) : (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.empty)
			}, [createVNode(unref(N8nText_default), {
				size: "small",
				color: "text-light"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.sidebar.noThreads")), 1)]),
				_: 1
			})], 2))], 2)], 2);
		};
	}
});
var InstanceAiThreadList_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_103xy_125",
	newChatButton: "_newChatButton_103xy_133",
	newChatIcon: "_newChatIcon_103xy_151",
	threadList: "_threadList_103xy_162",
	group: "_group_103xy_168",
	groupLabel: "_groupLabel_103xy_172",
	threadItem: "_threadItem_103xy_180",
	active: "_active_103xy_190",
	threadLink: "_threadLink_103xy_194",
	threadIcon: "_threadIcon_103xy_216",
	threadTitle: "_threadTitle_103xy_221",
	actionDropdown: "_actionDropdown_103xy_230",
	actionTrigger: "_actionTrigger_103xy_241",
	renameContainer: "_renameContainer_103xy_246",
	renameInput: "_renameInput_103xy_251",
	empty: "_empty_103xy_268"
};
var InstanceAiThreadList_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiThreadList_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiThreadList_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/instanceAiDebug.store.ts
var useInstanceAiDebugStore = defineStore("instanceAiDebug", () => {
	const rootStore = useRootStore();
	const toast = useToast();
	const i18n = useI18n();
	const threads = ref([]);
	const selectedThreadId = ref(null);
	const threadMessages = ref([]);
	const isLoadingThreads = ref(false);
	const isLoadingMessages = ref(false);
	const selectedThread = computed(() => threads.value.find((t) => t.id === selectedThreadId.value));
	async function loadThreads() {
		isLoadingThreads.value = true;
		try {
			threads.value = (await fetchThreads(rootStore.restApiContext)).threads;
		} catch {
			toast.showError(new Error(i18n.baseText("instanceAi.debug.threads.fetchError")), "Thread Inspector");
		} finally {
			isLoadingThreads.value = false;
		}
	}
	async function selectThread(threadId) {
		selectedThreadId.value = threadId;
		await loadMessages();
	}
	async function loadMessages(page) {
		if (!selectedThreadId.value) return;
		isLoadingMessages.value = true;
		try {
			threadMessages.value = (await fetchThreadMessages(rootStore.restApiContext, selectedThreadId.value, 50, page)).messages;
		} catch {
			toast.showError(new Error(i18n.baseText("instanceAi.debug.threads.fetchError")), "Thread Inspector");
		} finally {
			isLoadingMessages.value = false;
		}
	}
	function reset() {
		threads.value = [];
		selectedThreadId.value = null;
		threadMessages.value = [];
		isLoadingThreads.value = false;
		isLoadingMessages.value = false;
	}
	return {
		threads,
		selectedThreadId,
		threadMessages,
		isLoadingThreads,
		isLoadingMessages,
		selectedThread,
		loadThreads,
		selectThread,
		loadMessages,
		reset
	};
});
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiDebugPanel.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$5 = ["data-state"];
var _hoisted_2$2 = ["onClick"];
var _hoisted_3$1 = ["onClick"];
var _hoisted_4$1 = ["onClick"];
var InstanceAiDebugPanel_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiDebugPanel",
	emits: ["close"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const i18n = useI18n();
		const store = useInstanceAiStore();
		const debugStore = useInstanceAiDebugStore();
		const activeTab = ref("events");
		const expandedIndex = ref(null);
		const eventListRef = useTemplateRef("eventList");
		const events = computed(() => store.debugEvents);
		const expandedMessageIndex = ref(null);
		function toggleEvent(index) {
			expandedIndex.value = expandedIndex.value === index ? null : index;
		}
		function toggleMessage(index) {
			expandedMessageIndex.value = expandedMessageIndex.value === index ? null : index;
		}
		function formatJson(value) {
			try {
				return JSON.stringify(value, null, 2);
			} catch {
				return String(value);
			}
		}
		function getTypeBadgeClass(type) {
			if (type.includes("error")) return "error";
			if (type.includes("finish")) return "finish";
			if (type.includes("start") || type.includes("spawn")) return "start";
			if (type.includes("tool")) return "tool";
			if (type.includes("text") || type.includes("reasoning")) return "text";
			if (type.includes("confirmation")) return "confirm";
			return "default";
		}
		function getRoleBadgeClass(role) {
			if (role === "user") return "start";
			if (role === "assistant") return "tool";
			if (role === "system") return "confirm";
			return "default";
		}
		function formatTime(iso) {
			try {
				return new Date(iso).toLocaleTimeString("en-US", {
					hour12: false,
					fractionalSecondDigits: 3
				});
			} catch {
				return iso;
			}
		}
		function formatDateTime(iso) {
			try {
				const d = new Date(iso);
				return `${d.toLocaleDateString("en-US", {
					month: "short",
					day: "numeric"
				})} ${d.toLocaleTimeString("en-US", {
					hour12: false,
					hour: "2-digit",
					minute: "2-digit"
				})}`;
			} catch {
				return iso;
			}
		}
		function contentPreview(content) {
			if (typeof content === "string") return content.length > 100 ? content.slice(0, 100) + "..." : content;
			const str = JSON.stringify(content);
			return str.length > 100 ? str.slice(0, 100) + "..." : str;
		}
		async function handleCopyTrace() {
			const trace = store.copyFullTrace();
			await navigator.clipboard.writeText(trace);
		}
		watch(() => events.value.length, () => {
			nextTick(() => {
				if (eventListRef.value) eventListRef.value.scrollTop = eventListRef.value.scrollHeight;
			});
		});
		watch(activeTab, (tab) => {
			if (tab === "threads" && debugStore.threads.length === 0) debugStore.loadThreads();
		});
		function handleSelectThread(threadId) {
			expandedMessageIndex.value = null;
			debugStore.selectThread(threadId);
		}
		function handleRefreshThreads() {
			debugStore.loadThreads();
		}
		const toolCallTimings = computed(() => {
			const timings = [];
			for (const msg of store.messages) {
				if (!msg.agentTree) continue;
				const nodes = [msg.agentTree, ...msg.agentTree.children];
				for (const node of nodes) for (const tc of node.toolCalls) if (tc.startedAt && tc.completedAt) {
					const ms = new Date(tc.completedAt).getTime() - new Date(tc.startedAt).getTime();
					timings.push({
						name: tc.toolName,
						duration: ms < 1e3 ? `${ms}ms` : `${(ms / 1e3).toFixed(1)}s`,
						toolCallId: tc.toolCallId
					});
				}
			}
			return timings;
		});
		onMounted(() => {
			if (activeTab.value === "threads") debugStore.loadThreads();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.panel) }, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.headerTitle) }, [createVNode(unref(N8nIcon_default), {
					icon: "bug",
					size: "small"
				}), createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("instanceAi.debug.title")), 1)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.headerActions) }, [activeTab.value === "events" ? (openBlock(), createElementBlock("button", {
					key: 0,
					class: normalizeClass(_ctx.$style.copyButton),
					onClick: handleCopyTrace
				}, toDisplayString(unref(i18n).baseText("instanceAi.debug.copyTrace")), 3)) : createCommentVNode("", true), createVNode(unref(N8nIconButton_default), {
					icon: "x",
					variant: "ghost",
					size: "small",
					onClick: _cache[0] || (_cache[0] = ($event) => emit("close"))
				})], 2)], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.tabBar) }, [createBaseVNode("button", {
					class: normalizeClass([_ctx.$style.tab, activeTab.value === "events" && _ctx.$style.tabActive]),
					onClick: _cache[1] || (_cache[1] = ($event) => activeTab.value = "events")
				}, toDisplayString(unref(i18n).baseText("instanceAi.debug.tab.events")), 3), createBaseVNode("button", {
					class: normalizeClass([_ctx.$style.tab, activeTab.value === "threads" && _ctx.$style.tabActive]),
					onClick: _cache[2] || (_cache[2] = ($event) => activeTab.value = "threads")
				}, toDisplayString(unref(i18n).baseText("instanceAi.debug.tab.threads")), 3)], 2),
				activeTab.value === "events" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.statusBar) }, [
						createBaseVNode("span", {
							class: normalizeClass(_ctx.$style.statusDot),
							"data-state": unref(store).sseState
						}, null, 10, _hoisted_1$5),
						createBaseVNode("span", null, "SSE: " + toDisplayString(unref(store).sseState), 1),
						createBaseVNode("span", { class: normalizeClass(_ctx.$style.eventCount) }, toDisplayString(events.value.length) + " events", 3)
					], 2),
					toolCallTimings.value.length > 0 ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.timingSection)
					}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.timingTitle) }, toDisplayString(unref(i18n).baseText("instanceAi.debug.timing")), 3), (openBlock(true), createElementBlock(Fragment, null, renderList(toolCallTimings.value, (timing) => {
						return openBlock(), createElementBlock("div", {
							key: timing.toolCallId,
							class: normalizeClass(_ctx.$style.timingRow)
						}, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.timingName) }, toDisplayString(timing.name), 3), createBaseVNode("span", { class: normalizeClass(_ctx.$style.timingDuration) }, toDisplayString(timing.duration), 3)], 2);
					}), 128))], 2)) : createCommentVNode("", true),
					createBaseVNode("div", {
						ref: "eventList",
						class: normalizeClass(_ctx.$style.eventList)
					}, [(openBlock(true), createElementBlock(Fragment, null, renderList(events.value, (entry, index) => {
						return openBlock(), createElementBlock("div", {
							key: index,
							class: normalizeClass(_ctx.$style.eventRow),
							onClick: ($event) => toggleEvent(index)
						}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.eventHeader) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.eventTime) }, toDisplayString(formatTime(entry.timestamp)), 3), createBaseVNode("span", { class: normalizeClass([_ctx.$style.eventType, _ctx.$style[getTypeBadgeClass(entry.event.type)]]) }, toDisplayString(entry.event.type), 3)], 2), expandedIndex.value === index ? (openBlock(), createElementBlock("pre", {
							key: 0,
							class: normalizeClass(_ctx.$style.eventPayload)
						}, toDisplayString(formatJson(entry.event)), 3)) : createCommentVNode("", true)], 10, _hoisted_2$2);
					}), 128))], 2)
				], 64)) : createCommentVNode("", true),
				activeTab.value === "threads" ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.threadListHeader) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.sectionLabel) }, toDisplayString(unref(i18n).baseText("instanceAi.debug.threads.title")), 3), createBaseVNode("button", {
						class: normalizeClass(_ctx.$style.copyButton),
						onClick: handleRefreshThreads
					}, toDisplayString(unref(i18n).baseText("instanceAi.debug.threads.refresh")), 3)], 2),
					unref(debugStore).isLoadingThreads ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.loadingState)
					}, [createVNode(unref(N8nIcon_default), {
						icon: "spinner",
						color: "primary",
						spin: "",
						size: "small"
					})], 2)) : unref(debugStore).threads.length === 0 ? (openBlock(), createElementBlock("div", {
						key: 1,
						class: normalizeClass(_ctx.$style.emptyState)
					}, toDisplayString(unref(i18n).baseText("instanceAi.debug.threads.noThreads")), 3)) : (openBlock(), createElementBlock("div", {
						key: 2,
						class: normalizeClass(_ctx.$style.threadList)
					}, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(debugStore).threads, (thread) => {
						return openBlock(), createElementBlock("div", {
							key: thread.id,
							class: normalizeClass([_ctx.$style.threadRow, unref(debugStore).selectedThreadId === thread.id && _ctx.$style.threadRowSelected]),
							onClick: ($event) => handleSelectThread(thread.id)
						}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.threadRowMain) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.threadTitle) }, toDisplayString(thread.title || thread.id.slice(0, 8)), 3), thread.id === unref(store).currentThreadId ? (openBlock(), createElementBlock("span", {
							key: 0,
							class: normalizeClass(_ctx.$style.currentBadge)
						}, toDisplayString(unref(i18n).baseText("instanceAi.debug.threads.current")), 3)) : createCommentVNode("", true)], 2), createBaseVNode("span", { class: normalizeClass(_ctx.$style.threadTime) }, toDisplayString(formatDateTime(thread.updatedAt)), 3)], 10, _hoisted_3$1);
					}), 128))], 2)),
					unref(debugStore).selectedThreadId ? (openBlock(), createElementBlock(Fragment, { key: 3 }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.threadDetailHeader) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.sectionLabel) }, toDisplayString(unref(i18n).baseText("instanceAi.debug.threads.messages")), 3)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.threadDetailContent) }, [unref(debugStore).isLoadingMessages ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.loadingState)
					}, [createVNode(unref(N8nIcon_default), {
						icon: "spinner",
						color: "primary",
						spin: "",
						size: "small"
					})], 2)) : unref(debugStore).threadMessages.length === 0 ? (openBlock(), createElementBlock("div", {
						key: 1,
						class: normalizeClass(_ctx.$style.emptyState)
					}, toDisplayString(unref(i18n).baseText("instanceAi.debug.threads.noMessages")), 3)) : (openBlock(true), createElementBlock(Fragment, { key: 2 }, renderList(unref(debugStore).threadMessages, (msg, mIdx) => {
						return openBlock(), createElementBlock("div", {
							key: msg.id,
							class: normalizeClass(_ctx.$style.messageRow),
							onClick: ($event) => toggleMessage(mIdx)
						}, [
							createBaseVNode("div", { class: normalizeClass(_ctx.$style.messageHeader) }, [createBaseVNode("span", { class: normalizeClass([_ctx.$style.eventType, _ctx.$style[getRoleBadgeClass(msg.role)]]) }, toDisplayString(msg.role), 3), createBaseVNode("span", { class: normalizeClass(_ctx.$style.eventTime) }, toDisplayString(formatTime(msg.createdAt)), 3)], 2),
							createBaseVNode("div", { class: normalizeClass(_ctx.$style.messagePreview) }, toDisplayString(contentPreview(msg.content)), 3),
							expandedMessageIndex.value === mIdx ? (openBlock(), createElementBlock("pre", {
								key: 0,
								class: normalizeClass(_ctx.$style.eventPayload)
							}, toDisplayString(formatJson(msg.content)), 3)) : createCommentVNode("", true)
						], 10, _hoisted_4$1);
					}), 128))], 2)], 64)) : createCommentVNode("", true)
				], 64)) : createCommentVNode("", true)
			], 2);
		};
	}
});
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiDebugPanel.vue?vue&type=style&index=0&lang.module.scss
var panel$1 = "_panel_mguwb_125";
var header$4 = "_header_mguwb_138";
var headerTitle$1 = "_headerTitle_mguwb_146";
var headerActions$1 = "_headerActions_mguwb_154";
var copyButton = "_copyButton_mguwb_160";
var tabBar = "_tabBar_mguwb_174";
var tab$1 = "_tab_mguwb_174";
var tabActive = "_tabActive_mguwb_196";
var statusBar = "_statusBar_mguwb_202";
var statusDot = "_statusDot_mguwb_212";
var eventCount = "_eventCount_mguwb_225";
var timingSection = "_timingSection_mguwb_229";
var timingTitle = "_timingTitle_mguwb_234";
var timingRow = "_timingRow_mguwb_243";
var timingName = "_timingName_mguwb_250";
var timingDuration = "_timingDuration_mguwb_255";
var eventList = "_eventList_mguwb_260";
var eventRow = "_eventRow_mguwb_266";
var eventHeader = "_eventHeader_mguwb_275";
var eventTime = "_eventTime_mguwb_281";
var eventType = "_eventType_mguwb_286";
var error$1 = "_error_mguwb_293";
var finish = "_finish_mguwb_298";
var start = "_start_mguwb_303";
var tool = "_tool_mguwb_308";
var text = "_text_mguwb_313";
var confirm = "_confirm_mguwb_318";
var eventPayload = "_eventPayload_mguwb_328";
var threadListHeader = "_threadListHeader_mguwb_344";
var sectionLabel = "_sectionLabel_mguwb_352";
var loadingState = "_loadingState_mguwb_360";
var emptyState$1 = "_emptyState_mguwb_368";
var threadList = "_threadList_mguwb_344";
var threadRow = "_threadRow_mguwb_381";
var threadRowSelected = "_threadRowSelected_mguwb_390";
var threadRowMain = "_threadRowMain_mguwb_397";
var threadTitle = "_threadTitle_mguwb_403";
var currentBadge = "_currentBadge_mguwb_412";
var threadTime = "_threadTime_mguwb_420";
var threadDetailHeader = "_threadDetailHeader_mguwb_425";
var threadDetailContent = "_threadDetailContent_mguwb_430";
var messageRow = "_messageRow_mguwb_436";
var messageHeader = "_messageHeader_mguwb_445";
var messagePreview = "_messagePreview_mguwb_452";
var InstanceAiDebugPanel_vue_vue_type_style_index_0_lang_module_default = {
	panel: panel$1,
	header: header$4,
	headerTitle: headerTitle$1,
	headerActions: headerActions$1,
	copyButton,
	tabBar,
	tab: tab$1,
	tabActive,
	statusBar,
	statusDot,
	eventCount,
	timingSection,
	timingTitle,
	timingRow,
	timingName,
	timingDuration,
	eventList,
	eventRow,
	eventHeader,
	eventTime,
	eventType,
	error: error$1,
	finish,
	start,
	tool,
	text,
	confirm,
	"default": "_default_mguwb_323",
	eventPayload,
	threadListHeader,
	sectionLabel,
	loadingState,
	emptyState: emptyState$1,
	threadList,
	threadRow,
	threadRowSelected,
	threadRowMain,
	threadTitle,
	currentBadge,
	threadTime,
	threadDetailHeader,
	threadDetailContent,
	messageRow,
	messageHeader,
	messagePreview
};
var InstanceAiDebugPanel_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiDebugPanel_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiDebugPanel_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiArtifactsPanel.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$4 = ["onClick"];
var _hoisted_2$1 = ["title"];
var InstanceAiArtifactsPanel_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiArtifactsPanel",
	setup(__props) {
		const i18n = useI18n();
		const store = useInstanceAiStore();
		const openPreview = inject("openWorkflowPreview", void 0);
		const openDataTablePreview = inject("openDataTablePreview", void 0);
		function handleArtifactClick(artifact, e) {
			if (artifact.type === "workflow" && artifact.id) {
				if (e.metaKey || e.ctrlKey) {
					window.open(`/workflow/${artifact.id}`, "_blank");
					return;
				}
				openPreview?.(artifact.id);
			} else if (artifact.type === "data-table" && artifact.id) {
				if (e.metaKey || e.ctrlKey) {
					window.open("/data-tables", "_blank");
					return;
				}
				if (artifact.projectId) openDataTablePreview?.(artifact.id, artifact.projectId);
			}
		}
		const tasks = computed(() => store.currentTasks);
		const doneCount = computed(() => {
			if (!tasks.value) return 0;
			return tasks.value.tasks.filter((t) => t.status === "done").length;
		});
		const statusIconMap = {
			todo: {
				icon: "circle",
				spin: false,
				className: "todoIcon"
			},
			in_progress: {
				icon: "spinner",
				spin: true,
				className: "inProgressIcon"
			},
			done: {
				icon: "check",
				spin: false,
				className: "doneIcon"
			},
			failed: {
				icon: "x-circle",
				spin: false,
				className: "failedIcon"
			},
			cancelled: {
				icon: "ban",
				spin: false,
				className: "cancelledIcon"
			}
		};
		const artifacts = computed(() => {
			const result = [];
			for (const entry of store.resourceRegistry.values()) if (entry.type === "workflow" || entry.type === "data-table") result.push(entry);
			return result;
		});
		const artifactIconMap = {
			workflow: "workflow",
			"data-table": "table"
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.panel) }, [createBaseVNode("div", { class: normalizeClass([_ctx.$style.section, _ctx.$style.card]) }, [createVNode(unref(N8nHeading_default), {
				class: normalizeClass(_ctx.$style.sectionTitle),
				tag: "h3",
				size: "small",
				bold: ""
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.artifactsPanel.title")), 1)]),
				_: 1
			}, 8, ["class"]), artifacts.value.length > 0 ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.artifactList)
			}, [(openBlock(true), createElementBlock(Fragment, null, renderList(artifacts.value, (artifact) => {
				return openBlock(), createElementBlock("div", {
					key: artifact.id,
					class: normalizeClass(_ctx.$style.artifactRow),
					onClick: ($event) => handleArtifactClick(artifact, $event)
				}, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.artifactIconWrap) }, [createVNode(unref(N8nIcon_default), {
					icon: artifactIconMap[artifact.type] ?? "file",
					size: "large",
					class: normalizeClass(_ctx.$style.artifactIcon)
				}, null, 8, ["icon", "class"])], 2), createBaseVNode("span", { class: normalizeClass(_ctx.$style.artifactName) }, toDisplayString(artifact.name), 3)], 10, _hoisted_1$4);
			}), 128))], 2)) : (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.emptyState)
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.emptyIcons) }, [createVNode(unref(N8nIcon_default), {
				icon: "workflow",
				size: 30,
				class: normalizeClass(_ctx.$style.emptyIcon)
			}, null, 8, ["class"]), createVNode(unref(N8nIcon_default), {
				icon: "table",
				size: 30,
				class: normalizeClass(_ctx.$style.emptyIcon)
			}, null, 8, ["class"])], 2), createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("instanceAi.artifactsPanel.noArtifacts")), 1)], 2))], 2), tasks.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass([_ctx.$style.section, _ctx.$style.card])
			}, [createVNode(unref(N8nHeading_default), {
				class: normalizeClass(_ctx.$style.sectionTitle),
				tag: "h3",
				size: "small",
				bold: ""
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.artifactsPanel.tasks")) + " ", 1), createBaseVNode("span", { class: normalizeClass(_ctx.$style.progress) }, toDisplayString(doneCount.value) + "/" + toDisplayString(tasks.value.tasks.length), 3)]),
				_: 1
			}, 8, ["class"]), createBaseVNode("div", { class: normalizeClass(_ctx.$style.taskList) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(tasks.value.tasks, (task) => {
				return openBlock(), createElementBlock("div", {
					key: task.id,
					class: normalizeClass([
						_ctx.$style.task,
						task.status === "done" ? _ctx.$style.doneTask : "",
						task.status === "failed" ? _ctx.$style.failedTask : "",
						task.status === "cancelled" ? _ctx.$style.cancelledTask : ""
					])
				}, [createVNode(unref(N8nIcon_default), {
					icon: statusIconMap[task.status].icon,
					class: normalizeClass(_ctx.$style[statusIconMap[task.status].className]),
					spin: statusIconMap[task.status].spin,
					size: "medium"
				}, null, 8, [
					"icon",
					"class",
					"spin"
				]), createBaseVNode("span", {
					class: normalizeClass(_ctx.$style.taskDescription),
					title: task.description
				}, toDisplayString(task.description), 11, _hoisted_2$1)], 2);
			}), 128))], 2)], 2)) : createCommentVNode("", true)], 2);
		};
	}
});
var InstanceAiArtifactsPanel_vue_vue_type_style_index_0_lang_module_default = {
	panel: "_panel_1pwcv_125",
	section: "_section_1pwcv_135",
	card: "_card_1pwcv_140",
	sectionTitle: "_sectionTitle_1pwcv_147",
	progress: "_progress_1pwcv_154",
	artifactList: "_artifactList_1pwcv_161",
	artifactRow: "_artifactRow_1pwcv_166",
	artifactName: "_artifactName_1pwcv_178",
	artifactIcon: "_artifactIcon_1pwcv_181",
	artifactIconWrap: "_artifactIconWrap_1pwcv_185",
	emptyState: "_emptyState_1pwcv_208",
	emptyIcons: "_emptyIcons_1pwcv_218",
	emptyIcon: "_emptyIcon_1pwcv_218",
	taskList: "_taskList_1pwcv_231",
	task: "_task_1pwcv_231",
	doneTask: "_doneTask_1pwcv_245",
	failedTask: "_failedTask_1pwcv_250",
	cancelledTask: "_cancelledTask_1pwcv_254",
	taskDescription: "_taskDescription_1pwcv_258",
	todoIcon: "_todoIcon_1pwcv_267",
	inProgressIcon: "_inProgressIcon_1pwcv_271",
	doneIcon: "_doneIcon_1pwcv_275",
	failedIcon: "_failedIcon_1pwcv_282",
	cancelledIcon: "_cancelledIcon_1pwcv_286"
};
var InstanceAiArtifactsPanel_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiArtifactsPanel_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiArtifactsPanel_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiStatusBar.vue?vue&type=script&setup=true&lang.ts
var InstanceAiStatusBar_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiStatusBar",
	setup(__props) {
		const store = useInstanceAiStore();
		const i18n = useI18n();
		const { getToolLabel } = useToolLabel();
		const elapsed = ref(0);
		let timer = null;
		const ROLE_LABELS = {
			"workflow-builder": "Building workflow",
			"data-table-manager": "Managing data tables"
		};
		function deriveActivity(messages) {
			const lastMsg = [...messages].reverse().find((m) => m.role === "assistant" && m.isStreaming);
			if (!lastMsg?.agentTree) return { label: i18n.baseText("instanceAi.statusBar.thinking") };
			const tree = lastMsg.agentTree;
			const activeChild = tree.children.find((c) => c.status === "active");
			if (activeChild) {
				const roleLabel = ROLE_LABELS[activeChild.role] ?? activeChild.role;
				const activeTool = activeChild.toolCalls.find((tc) => tc.isLoading);
				if (activeTool) return {
					label: roleLabel,
					detail: getToolLabel(activeTool.toolName)
				};
				return { label: roleLabel };
			}
			const activeTool = tree.toolCalls.find((tc) => tc.isLoading);
			if (activeTool) return { label: getToolLabel(activeTool.toolName) };
			return { label: i18n.baseText("instanceAi.statusBar.thinking") };
		}
		const activity = computed(() => deriveActivity(store.messages));
		const isVisible = computed(() => store.isStreaming);
		const formattedElapsed = computed(() => {
			const s = elapsed.value;
			if (s < 60) return `${String(s)}s`;
			const m = Math.floor(s / 60);
			const remaining = s % 60;
			return `${String(m)}m ${String(remaining).padStart(2, "0")}s`;
		});
		watch(isVisible, (visible) => {
			if (visible) {
				elapsed.value = 0;
				timer = setInterval(() => {
					elapsed.value++;
				}, 1e3);
			} else if (timer) {
				clearInterval(timer);
				timer = null;
			}
		});
		onUnmounted(() => {
			if (timer) clearInterval(timer);
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [createVNode(Transition, { name: "status-bar" }, {
				default: withCtx(() => [isVisible.value && activity.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.bar),
					"data-test-id": "instance-ai-status-bar"
				}, [
					createBaseVNode("span", { class: normalizeClass(_ctx.$style.dot) }, null, 2),
					createBaseVNode("span", { class: normalizeClass(_ctx.$style.label) }, toDisplayString(activity.value.label), 3),
					activity.value.detail ? (openBlock(), createElementBlock("span", {
						key: 0,
						class: normalizeClass(_ctx.$style.separator)
					}, "·", 2)) : createCommentVNode("", true),
					activity.value.detail ? (openBlock(), createElementBlock("span", {
						key: 1,
						class: normalizeClass(_ctx.$style.detail)
					}, toDisplayString(activity.value.detail), 3)) : createCommentVNode("", true),
					createBaseVNode("span", { class: normalizeClass(_ctx.$style.separator) }, "·", 2),
					createBaseVNode("span", { class: normalizeClass(_ctx.$style.elapsed) }, toDisplayString(formattedElapsed.value), 3)
				], 2)) : createCommentVNode("", true)]),
				_: 1
			})]);
		};
	}
});
var InstanceAiStatusBar_vue_vue_type_style_index_0_lang_module_default = {
	bar: "_bar_wh4an_125",
	dot: "_dot_wh4an_135",
	pulse: "_pulse_wh4an_1",
	label: "_label_wh4an_152",
	separator: "_separator_wh4an_157",
	detail: "_detail_wh4an_161",
	elapsed: "_elapsed_wh4an_165"
};
var InstanceAiStatusBar_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiStatusBar_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiStatusBar_vue_vue_type_style_index_0_lang_module_default }]]);
var ConfirmationPreview_vue_vue_type_style_index_0_lang_module_default = { preview: "_preview_7bjbe_125" };
//#endregion
//#region src/features/ai/instanceAi/components/ConfirmationPreview.vue
var _sfc_main = {};
function _sfc_render(_ctx, _cache) {
	return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.preview) }, [renderSlot(_ctx.$slots, "default")], 2);
}
var ConfirmationPreview_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render], ["__cssModules", { "$style": ConfirmationPreview_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/SplitButton.vue?vue&type=script&setup=true&lang.ts
var SplitButton_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SplitButton",
	props: {
		variant: { default: "solid" },
		size: { default: "medium" },
		label: {},
		items: {},
		disabled: { type: Boolean },
		dataTestId: {},
		dropdownTestId: {},
		caretAriaLabel: { default: "More options" }
	},
	emits: ["click", "select"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const hasSplit = computed(() => props.items.length > 0);
		return (_ctx, _cache) => {
			return hasSplit.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass([_ctx.$style.splitButton, __props.variant === "outline" && _ctx.$style.outline])
			}, [createVNode(unref(N8nButton_default), {
				variant: __props.variant,
				class: normalizeClass(_ctx.$style.splitButtonMain),
				label: __props.label,
				"data-test-id": __props.dataTestId,
				size: __props.size,
				disabled: __props.disabled,
				onClick: _cache[0] || (_cache[0] = ($event) => emit("click"))
			}, null, 8, [
				"variant",
				"class",
				"label",
				"data-test-id",
				"size",
				"disabled"
			]), createVNode(unref(N8nActionDropdown_default), {
				items: __props.items,
				class: normalizeClass(_ctx.$style.splitButtonDropdown),
				"data-test-id": __props.dropdownTestId,
				placement: "bottom-start",
				onSelect: _cache[1] || (_cache[1] = (id) => emit("select", id))
			}, {
				activator: withCtx(() => [createVNode(unref(N8nIconButton_default), {
					variant: __props.variant,
					icon: "chevron-down",
					class: normalizeClass(_ctx.$style.splitButtonCaret),
					"aria-label": __props.caretAriaLabel,
					size: __props.size,
					disabled: __props.disabled
				}, null, 8, [
					"variant",
					"class",
					"aria-label",
					"size",
					"disabled"
				])]),
				_: 1
			}, 8, [
				"items",
				"class",
				"data-test-id"
			])], 2)) : (openBlock(), createBlock(unref(N8nButton_default), {
				key: 1,
				variant: __props.variant,
				label: __props.label,
				"data-test-id": __props.dataTestId,
				size: __props.size,
				disabled: __props.disabled,
				onClick: _cache[2] || (_cache[2] = ($event) => emit("click"))
			}, null, 8, [
				"variant",
				"label",
				"data-test-id",
				"size",
				"disabled"
			]));
		};
	}
});
var SplitButton_vue_vue_type_style_index_0_lang_module_default = {
	splitButton: "_splitButton_ikc5z_125",
	splitButtonMain: "_splitButtonMain_ikc5z_130",
	splitButtonDropdown: "_splitButtonDropdown_ikc5z_135",
	splitButtonCaret: "_splitButtonCaret_ikc5z_139",
	outline: "_outline_ikc5z_145"
};
var SplitButton_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SplitButton_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SplitButton_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/DomainAccessApproval.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$3 = { key: 0 };
var DomainAccessApproval_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "DomainAccessApproval",
	props: {
		requestId: {},
		url: {},
		host: {},
		severity: {}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const store = useInstanceAiStore();
		const resolved = ref(false);
		const isDestructive = computed(() => props.severity === "destructive");
		const primaryAction = computed(() => isDestructive.value ? "allow_once" : "allow_domain");
		const primaryLabel = computed(() => isDestructive.value ? i18n.baseText("instanceAi.domainAccess.allowOnce") : i18n.baseText("instanceAi.domainAccess.allowDomain"));
		const dropdownItems = computed(() => isDestructive.value ? [{
			id: "allow_domain",
			label: i18n.baseText("instanceAi.domainAccess.allowDomain")
		}] : [{
			id: "allow_once",
			label: i18n.baseText("instanceAi.domainAccess.allowOnce")
		}]);
		function handleAction(approved, domainAccessAction) {
			resolved.value = true;
			store.resolveConfirmation(props.requestId, approved ? "approved" : "denied");
			store.confirmAction(props.requestId, approved, void 0, void 0, void 0, void 0, domainAccessAction);
		}
		function onPrimaryClick() {
			handleAction(true, primaryAction.value);
		}
		function onDropdownSelect(action) {
			handleAction(true, action);
		}
		return (_ctx, _cache) => {
			return !resolved.value ? (openBlock(), createElementBlock("div", _hoisted_1$3, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.body) }, [createVNode(unref(N8nText_default), {
				tag: "div",
				size: "medium",
				bold: ""
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.domainAccess.prompt", { interpolate: { domain: props.host } })), 1)]),
				_: 1
			}), createVNode(ConfirmationPreview_default, null, {
				default: withCtx(() => [createTextVNode(toDisplayString(props.url), 1)]),
				_: 1
			})], 2), createVNode(ConfirmationFooter_default, null, {
				default: withCtx(() => [createVNode(unref(N8nButton_default), {
					variant: "outline",
					size: "medium",
					label: unref(i18n).baseText("instanceAi.domainAccess.deny"),
					"data-test-id": "domain-access-deny",
					onClick: _cache[0] || (_cache[0] = ($event) => handleAction(false))
				}, null, 8, ["label"]), createVNode(SplitButton_default, {
					variant: isDestructive.value ? "destructive" : "solid",
					label: primaryLabel.value,
					items: dropdownItems.value,
					"data-test-id": "domain-access-primary",
					"dropdown-test-id": "domain-access-dropdown",
					"caret-aria-label": "More approval options",
					onClick: onPrimaryClick,
					onSelect: onDropdownSelect
				}, null, 8, [
					"variant",
					"label",
					"items"
				])]),
				_: 1
			})])) : createCommentVNode("", true);
		};
	}
});
var DomainAccessApproval_vue_vue_type_style_index_0_lang_module_default = { body: "_body_ynbwf_125" };
var DomainAccessApproval_default = /* @__PURE__ */ _plugin_vue_export_helper_default(DomainAccessApproval_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": DomainAccessApproval_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/GatewayResourceDecision.vue?vue&type=script&setup=true&lang.ts
var GatewayResourceDecision_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "GatewayResourceDecision",
	props: {
		requestId: {},
		resource: {},
		description: {},
		options: {}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const telemetry = useTelemetry();
		const rootStore = useRootStore();
		const store = useInstanceAiStore();
		const DECISION_LABELS = {
			allowOnce: i18n.baseText("instanceAi.gatewayConfirmation.allowOnce"),
			allowForSession: i18n.baseText("instanceAi.gatewayConfirmation.allowForSession"),
			alwaysAllow: i18n.baseText("instanceAi.gatewayConfirmation.alwaysAllow"),
			denyOnce: i18n.baseText("instanceAi.gatewayConfirmation.denyOnce"),
			alwaysDeny: i18n.baseText("instanceAi.gatewayConfirmation.alwaysDeny")
		};
		const KNOWN_DECISIONS = new Set(Object.keys(DECISION_LABELS));
		function getDecisionLabel(decision) {
			return DECISION_LABELS[decision] ?? decision;
		}
		function optionEntry(decision) {
			return {
				decision,
				label: getDecisionLabel(decision)
			};
		}
		const denyPrimary = computed(() => props.options.includes("denyOnce") ? optionEntry("denyOnce") : void 0);
		const denyDropdownItems = computed(() => {
			const items = [];
			if (props.options.includes("alwaysDeny")) items.push({
				id: "alwaysDeny",
				label: getDecisionLabel("alwaysDeny")
			});
			return items;
		});
		const approvePrimary = computed(() => props.options.includes("allowForSession") ? optionEntry("allowForSession") : void 0);
		const approveDropdownItems = computed(() => {
			const items = [];
			if (props.options.includes("allowOnce")) items.push({
				id: "allowOnce",
				label: getDecisionLabel("allowOnce")
			});
			if (props.options.includes("alwaysAllow")) items.push({
				id: "alwaysAllow",
				label: getDecisionLabel("alwaysAllow")
			});
			return items;
		});
		const otherOptions = computed(() => props.options.filter((d) => !KNOWN_DECISIONS.has(d)).map(optionEntry));
		async function confirm(decision) {
			const inputThreadId = store.findToolCallByRequestId(props.requestId)?.confirmation?.inputThreadId ?? "";
			const eventProps = {
				thread_id: store.currentThreadId,
				input_thread_id: inputThreadId,
				instance_id: rootStore.instanceId,
				type: "resource-decision",
				provided_inputs: [{
					label: props.resource,
					options: props.options,
					option_chosen: decision
				}],
				skipped_inputs: []
			};
			telemetry.track("User finished providing input", eventProps);
			await store.confirmResourceDecision(props.requestId, decision);
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.root) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.body) }, [createVNode(unref(N8nText_default), {
				tag: "div",
				size: "medium",
				bold: ""
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.gatewayConfirmation.prompt", { interpolate: { resources: props.resource } })), 1)]),
				_: 1
			}), createVNode(ConfirmationPreview_default, null, {
				default: withCtx(() => [createTextVNode(toDisplayString(props.description), 1)]),
				_: 1
			})], 2), createVNode(ConfirmationFooter_default, null, {
				default: withCtx(() => [
					(openBlock(true), createElementBlock(Fragment, null, renderList(otherOptions.value, (opt) => {
						return openBlock(), createBlock(unref(N8nButton_default), {
							key: opt.decision,
							variant: "outline",
							size: "medium",
							label: opt.label,
							onClick: ($event) => confirm(opt.decision)
						}, null, 8, ["label", "onClick"]);
					}), 128)),
					denyPrimary.value ? (openBlock(), createBlock(SplitButton_default, {
						key: 0,
						variant: "outline",
						label: denyPrimary.value.label,
						items: denyDropdownItems.value,
						"data-test-id": "gateway-decision-deny",
						"caret-aria-label": "More deny options",
						onClick: _cache[0] || (_cache[0] = ($event) => confirm(denyPrimary.value.decision)),
						onSelect: confirm
					}, null, 8, ["label", "items"])) : createCommentVNode("", true),
					approvePrimary.value ? (openBlock(), createBlock(SplitButton_default, {
						key: 1,
						variant: "solid",
						label: approvePrimary.value.label,
						items: approveDropdownItems.value,
						"data-test-id": "gateway-decision-approve",
						"caret-aria-label": "More approve options",
						onClick: _cache[1] || (_cache[1] = ($event) => confirm(approvePrimary.value.decision)),
						onSelect: confirm
					}, null, 8, ["label", "items"])) : createCommentVNode("", true)
				]),
				_: 1
			})], 2);
		};
	}
});
var GatewayResourceDecision_vue_vue_type_style_index_0_lang_module_default = {
	root: "_root_884r2_125",
	body: "_body_884r2_131"
};
var GatewayResourceDecision_default = /* @__PURE__ */ _plugin_vue_export_helper_default(GatewayResourceDecision_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": GatewayResourceDecision_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/shared/composables/useWizardNavigation.ts
function useWizardNavigation(options) {
	const totalSteps = computed(() => typeof options.totalSteps === "number" ? options.totalSteps : options.totalSteps.value);
	const currentStepIndex = ref(options.initialStep ?? 0);
	const isPrevDisabled = computed(() => currentStepIndex.value === 0);
	const isNextDisabled = computed(() => currentStepIndex.value >= totalSteps.value - 1);
	const isFirstStep = computed(() => currentStepIndex.value === 0);
	const isLastStep = computed(() => currentStepIndex.value >= totalSteps.value - 1);
	function goToNext() {
		if (!isNextDisabled.value) currentStepIndex.value++;
	}
	function goToPrev() {
		if (!isPrevDisabled.value) currentStepIndex.value--;
	}
	function goToStep(index) {
		if (index >= 0 && index < totalSteps.value) currentStepIndex.value = index;
	}
	return {
		currentStepIndex,
		totalSteps,
		isPrevDisabled,
		isNextDisabled,
		isFirstStep,
		isLastStep,
		goToNext,
		goToPrev,
		goToStep
	};
}
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiCredentialSetup.vue?vue&type=script&setup=true&lang.ts
var InstanceAiCredentialSetup_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiCredentialSetup",
	props: {
		requestId: {},
		credentialRequests: {},
		message: {},
		projectId: {},
		credentialFlow: {}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const telemetry = useTelemetry();
		const rootStore = useRootStore();
		const store = useInstanceAiStore();
		const credentialsStore = useCredentialsStore();
		const uiStore = useUIStore();
		const totalSteps = computed(() => props.credentialRequests.length);
		const { currentStepIndex, isPrevDisabled, isNextDisabled, goToNext, goToPrev, goToStep } = useWizardNavigation({ totalSteps });
		const currentRequest = computed(() => props.credentialRequests[currentStepIndex.value]);
		const showArrows = computed(() => totalSteps.value > 1);
		const isFinalize = computed(() => props.credentialFlow?.stage === "finalize");
		const isSubmitted = ref(false);
		const isDeferred = ref(false);
		const selections = ref({});
		function initSelections() {
			for (const req of props.credentialRequests) {
				if (selections.value[req.credentialType] !== void 0) continue;
				if (req.existingCredentials?.length === 1) selections.value[req.credentialType] = req.existingCredentials[0].id;
				else selections.value[req.credentialType] = null;
			}
		}
		initSelections();
		const stopDeleteListener = credentialsStore.$onAction(({ name, after, args }) => {
			if (name !== "deleteCredential") return;
			after(() => {
				const deletedId = args[0].id;
				for (const [credType, selectedId] of Object.entries(selections.value)) if (selectedId === deletedId) selections.value[credType] = null;
			});
		});
		const stopCreateListener = credentialsStore.$onAction(({ name, after }) => {
			if (name !== "createNewCredential") return;
			after((newCred) => {
				if (!newCred || typeof newCred !== "object" || !("id" in newCred)) return;
				const req = currentRequest.value;
				if (!req) return;
				const cred = newCred;
				if (cred.type === req.credentialType) selections.value[req.credentialType] = cred.id;
			});
		});
		onBeforeUnmount(() => {
			stopDeleteListener();
			stopCreateListener();
		});
		function isStepComplete(credentialType) {
			return selections.value[credentialType] !== null;
		}
		const allSelected = computed(() => props.credentialRequests.every((r) => isStepComplete(r.credentialType)));
		const anySelected = computed(() => props.credentialRequests.some((r) => isStepComplete(r.credentialType)));
		const userNavigated = ref(false);
		function wrappedGoToNext() {
			userNavigated.value = true;
			goToNext();
		}
		function wrappedGoToPrev() {
			userNavigated.value = true;
			goToPrev();
		}
		watch(() => currentRequest.value && isStepComplete(currentRequest.value.credentialType), (complete, prevComplete) => {
			if (!complete || prevComplete || userNavigated.value) {
				userNavigated.value = false;
				return;
			}
			const nextIncomplete = props.credentialRequests.findIndex((r, idx) => idx > currentStepIndex.value && !isStepComplete(r.credentialType));
			if (nextIncomplete >= 0) goToStep(nextIncomplete);
		});
		watch(allSelected, async (nowComplete, wasComplete) => {
			if (nowComplete && !wasComplete) {
				await nextTick();
				await handleContinue();
			}
		});
		onMounted(async () => {
			try {
				await Promise.all([credentialsStore.fetchAllCredentials(), credentialsStore.fetchCredentialTypes(false)]);
			} catch (error) {
				console.warn("Failed to preload credentials for Instance AI setup", error);
			}
			const firstIncomplete = props.credentialRequests.findIndex((r) => !isStepComplete(r.credentialType));
			if (firstIncomplete > 0) goToStep(firstIncomplete);
		});
		function getDisplayName(credentialType) {
			const appName = getAppNameFromCredType(credentialsStore.getCredentialTypeByName(credentialType)?.displayName ?? credentialType);
			return i18n.baseText("instanceAi.credential.setupTitle", { interpolate: { name: appName } });
		}
		const hasExistingCredentials = computed(() => {
			if (!currentRequest.value) return false;
			const credType = currentRequest.value.credentialType;
			return (currentRequest.value.existingCredentials?.length ?? 0) > 0 || (credentialsStore.getUsableCredentialByType(credType)?.length ?? 0) > 0;
		});
		function openNewCredentialModal() {
			const req = currentRequest.value;
			if (!req) return;
			uiStore.openNewCredential(req.credentialType, false, false, props.projectId, req.suggestedName);
		}
		/** Build a minimal synthetic INodeUi so NodeCredentials can render in standalone mode. */
		function syntheticNodeUi(req) {
			const selectedId = selections.value[req.credentialType];
			const selectedCred = selectedId ? req.existingCredentials?.find((c) => c.id === selectedId) ?? credentialsStore.getCredentialById(selectedId) : void 0;
			return {
				id: req.credentialType,
				name: req.credentialType,
				type: "n8n-nodes-base.noOp",
				typeVersion: 1,
				position: [0, 0],
				parameters: {},
				credentials: selectedCred ? { [req.credentialType]: {
					id: selectedCred.id,
					name: selectedCred.name
				} } : {}
			};
		}
		function onCredentialSelected(credentialType, updateInfo) {
			const credentialData = updateInfo.properties.credentials?.[credentialType];
			const credentialId = typeof credentialData === "string" ? void 0 : credentialData?.id;
			if (credentialId) selections.value[credentialType] = credentialId;
			else selections.value[credentialType] = null;
		}
		function trackCredentialInput() {
			const inputThreadId = store.findToolCallByRequestId(props.requestId)?.confirmation?.inputThreadId ?? "";
			const provided = [];
			const skipped = [];
			for (const req of props.credentialRequests) {
				const selected = selections.value[req.credentialType];
				if (selected) provided.push({
					label: req.credentialType,
					options: [],
					option_chosen: selected
				});
				else skipped.push({
					label: req.credentialType,
					options: []
				});
			}
			telemetry.track("User finished providing input", {
				thread_id: store.currentThreadId,
				input_thread_id: inputThreadId,
				instance_id: rootStore.instanceId,
				type: "credential-setup",
				provided_inputs: provided,
				skipped_inputs: skipped,
				num_tasks: props.credentialRequests.length
			});
		}
		async function handleContinue() {
			const credentials = {};
			for (const [type, id] of Object.entries(selections.value)) if (id) credentials[type] = id;
			trackCredentialInput();
			isSubmitted.value = true;
			if (await store.confirmAction(props.requestId, true, void 0, credentials)) store.resolveConfirmation(props.requestId, "approved");
			else isSubmitted.value = false;
		}
		async function handleLater() {
			trackCredentialInput();
			isSubmitted.value = true;
			isDeferred.value = true;
			if (await store.confirmAction(props.requestId, false)) store.resolveConfirmation(props.requestId, "deferred");
			else {
				isSubmitted.value = false;
				isDeferred.value = false;
			}
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [!isSubmitted.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [currentRequest.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				"data-test-id": "instance-ai-credential-card",
				class: normalizeClass(_ctx.$style.card)
			}, [
				createBaseVNode("header", { class: normalizeClass(_ctx.$style.header) }, [
					createVNode(CredentialIcon_default, {
						"credential-type-name": currentRequest.value.credentialType,
						size: 16
					}, null, 8, ["credential-type-name"]),
					createVNode(unref(N8nText_default), {
						class: normalizeClass(_ctx.$style.title),
						size: "medium",
						color: "text-dark",
						bold: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(getDisplayName(currentRequest.value.credentialType)), 1)]),
						_: 1
					}, 8, ["class"]),
					isStepComplete(currentRequest.value.credentialType) ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 0,
						"data-test-id": "instance-ai-credential-step-check",
						class: normalizeClass(_ctx.$style.completeLabel),
						size: "medium",
						color: "success"
					}, {
						default: withCtx(() => [createVNode(unref(N8nIcon_default), {
							icon: "check",
							size: "large"
						}), createTextVNode(" " + toDisplayString(unref(i18n).baseText("generic.complete")), 1)]),
						_: 1
					}, 8, ["class"])) : createCommentVNode("", true)
				], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [currentRequest.value.reason ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(currentRequest.value.reason), 1)]),
					_: 1
				})) : createCommentVNode("", true), createBaseVNode("div", { class: normalizeClass(_ctx.$style.credentialContainer) }, [hasExistingCredentials.value ? (openBlock(), createBlock(NodeCredentials_default, {
					key: 0,
					node: syntheticNodeUi(currentRequest.value),
					"override-cred-type": currentRequest.value.credentialType,
					"project-id": __props.projectId,
					"suggested-credential-name": currentRequest.value.suggestedName,
					standalone: "",
					"hide-issues": "",
					onCredentialSelected: _cache[0] || (_cache[0] = ($event) => onCredentialSelected(currentRequest.value.credentialType, $event))
				}, null, 8, [
					"node",
					"override-cred-type",
					"project-id",
					"suggested-credential-name"
				])) : (openBlock(), createBlock(unref(N8nButton_default), {
					key: 1,
					label: unref(i18n).baseText("instanceAi.credential.setupButton"),
					"data-test-id": "instance-ai-credential-setup-button",
					onClick: openNewCredentialModal
				}, null, 8, ["label"]))], 2)], 2),
				createVNode(ConfirmationFooter_default, { layout: "row-between" }, {
					default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.footerNav) }, [
						showArrows.value ? (openBlock(), createBlock(unref(N8nButton_default), {
							key: 0,
							variant: "ghost",
							size: "medium",
							"icon-only": "",
							disabled: unref(isPrevDisabled),
							"data-test-id": "instance-ai-credential-prev",
							"aria-label": "Previous step",
							onClick: wrappedGoToPrev
						}, {
							default: withCtx(() => [createVNode(unref(N8nIcon_default), {
								icon: "chevron-left",
								size: "xsmall"
							})]),
							_: 1
						}, 8, ["disabled"])) : createCommentVNode("", true),
						createVNode(unref(N8nText_default), {
							size: "small",
							color: "text-light"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(currentStepIndex) + 1) + " of " + toDisplayString(totalSteps.value), 1)]),
							_: 1
						}),
						showArrows.value ? (openBlock(), createBlock(unref(N8nButton_default), {
							key: 1,
							variant: "ghost",
							size: "medium",
							"icon-only": "",
							disabled: unref(isNextDisabled),
							"data-test-id": "instance-ai-credential-next",
							"aria-label": "Next step",
							onClick: wrappedGoToNext
						}, {
							default: withCtx(() => [createVNode(unref(N8nIcon_default), {
								icon: "chevron-right",
								size: "xsmall"
							})]),
							_: 1
						}, 8, ["disabled"])) : createCommentVNode("", true)
					], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.footerActions) }, [createVNode(unref(N8nButton_default), {
						variant: "outline",
						size: "medium",
						class: normalizeClass(_ctx.$style.actionButton),
						label: unref(i18n).baseText(isFinalize.value ? "instanceAi.credential.finalize.later" : "instanceAi.credential.deny"),
						onClick: handleLater
					}, null, 8, ["class", "label"]), createVNode(unref(N8nButton_default), {
						size: "medium",
						class: normalizeClass(_ctx.$style.actionButton),
						label: unref(i18n).baseText("instanceAi.credential.continueButton"),
						disabled: !anySelected.value,
						"data-test-id": "instance-ai-credential-continue-button",
						onClick: handleContinue
					}, null, 8, [
						"class",
						"label",
						"disabled"
					])], 2)]),
					_: 1
				})
			], 2)) : createCommentVNode("", true)], 64)) : (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.submitted)
			}, [isDeferred.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createVNode(unref(N8nIcon_default), {
				icon: "arrow-right",
				size: "small",
				class: normalizeClass(_ctx.$style.skippedIcon)
			}, null, 8, ["class"]), createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("instanceAi.credential.finalize.deferred")), 1)], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createVNode(unref(N8nIcon_default), {
				icon: "check",
				size: "small",
				class: normalizeClass(_ctx.$style.successIcon)
			}, null, 8, ["class"]), createBaseVNode("span", null, toDisplayString(unref(i18n).baseText(isFinalize.value ? "instanceAi.credential.finalize.applied" : "instanceAi.credential.allSelected")), 1)], 64))], 2))]);
		};
	}
});
var InstanceAiCredentialSetup_vue_vue_type_style_index_0_lang_module_default = {
	card: "_card_1z11p_125",
	header: "_header_1z11p_136",
	title: "_title_1z11p_143",
	completeLabel: "_completeLabel_1z11p_147",
	content: "_content_1z11p_154",
	credentialContainer: "_credentialContainer_1z11p_161",
	footerNav: "_footerNav_1z11p_169",
	footerActions: "_footerActions_1z11p_176",
	actionButton: "_actionButton_1z11p_182",
	submitted: "_submitted_1z11p_186",
	successIcon: "_successIcon_1z11p_194",
	skippedIcon: "_skippedIcon_1z11p_198"
};
var InstanceAiCredentialSetup_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiCredentialSetup_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiCredentialSetup_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiQuestions.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$2 = [
	"data-option-index",
	"disabled",
	"onClick",
	"onMouseenter"
];
var _hoisted_2 = ["data-option-index"];
var _hoisted_3 = ["data-option-index", "onMouseenter"];
var _hoisted_4 = ["data-option-index"];
var OTHER_SENTINEL = "__other__";
var InstanceAiQuestions_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiQuestions",
	props: {
		questions: {},
		introMessage: {},
		disabled: { type: Boolean }
	},
	emits: ["submit"],
	setup(__props, { emit: __emit }) {
		/**
		* InstanceAiQuestions.vue
		*
		* Multi-step Q&A wizard for Instance AI. Renders questions with number badge rows
		* (single-select), checkboxes (multi-select), or text inputs based on question type.
		* Supports full keyboard navigation.
		*
		* Adapted from PlanQuestionsMessage.vue for the instance AI confirmation flow.
		*/
		const props = __props;
		const i18n = useI18n();
		const emit = __emit;
		const currentIndex = ref(0);
		const isSubmitted = ref(false);
		const answers = ref(/* @__PURE__ */ new Map());
		const highlightedIndex = ref(-1);
		const selectedIndex = ref(null);
		const containerRef = ref(null);
		const currentQuestion = computed(() => props.questions[currentIndex.value]);
		const isFirstQuestion = computed(() => currentIndex.value === 0);
		const isLastQuestion = computed(() => currentIndex.value === props.questions.length - 1);
		const filteredOptions = computed(() => {
			return (currentQuestion.value.options ?? []).filter((opt) => !opt.toLowerCase().trim().startsWith("other"));
		});
		const currentAnswer = computed(() => {
			const q = currentQuestion.value;
			return q ? answers.value.get(q.id) : void 0;
		});
		const hasCustomText = computed(() => !!currentAnswer.value?.customText?.trim());
		const hasValidAnswer = computed(() => {
			const answer = currentAnswer.value;
			if (!answer) return false;
			if (answer.skipped) return true;
			const customText = !!answer.customText?.trim();
			const hasSelectedOptions = answer.selectedOptions.length > 0;
			if (currentQuestion.value?.type === "text") return customText;
			if (answer.selectedOptions.includes(OTHER_SENTINEL)) return customText;
			return hasSelectedOptions || customText;
		});
		const showSkipButton = computed(() => {
			if (isLastQuestion.value) return false;
			if (currentQuestion.value?.type === "single" && hasCustomText.value) return false;
			return true;
		});
		const showNextButton = computed(() => {
			if (currentQuestion.value?.type === "single") return hasCustomText.value;
			return true;
		});
		const isNextEnabled = computed(() => {
			const q = currentQuestion.value;
			if (!q) return false;
			if (q.type === "single") return hasCustomText.value;
			if (q.type === "multi") return (currentAnswer.value?.selectedOptions.length ?? 0) > 0 || hasCustomText.value;
			if (q.type === "text") return hasCustomText.value;
			return false;
		});
		const nextButtonLabel = computed(() => {
			return isLastQuestion.value ? i18n.baseText("aiAssistant.builder.planMode.questions.submitButton") : i18n.baseText("aiAssistant.builder.planMode.questions.next");
		});
		watch(currentIndex, () => {
			const q = currentQuestion.value;
			if (q && !answers.value.has(q.id)) answers.value.set(q.id, {
				questionId: q.id,
				question: q.question,
				selectedOptions: [],
				customText: "",
				skipped: false
			});
			selectedIndex.value = null;
			highlightedIndex.value = currentQuestion.value?.type === "text" ? -1 : 0;
			nextTick(() => {
				if (currentQuestion.value?.type === "text") {
					const textarea = containerRef.value?.querySelector("textarea");
					if (textarea) textarea.focus();
					else requestAnimationFrame(() => {
						containerRef.value?.querySelector("textarea")?.focus();
					});
				} else containerRef.value?.focus();
			});
		}, { immediate: true });
		function onSingleSelect(option) {
			const answer = currentAnswer.value;
			if (!answer) return;
			answer.selectedOptions = [option];
			if (option !== OTHER_SENTINEL) answer.customText = "";
			answer.skipped = false;
		}
		function onSingleSelectAndAdvance(option, _inputMethod = "click") {
			onSingleSelect(option);
			const idx = filteredOptions.value.indexOf(option);
			selectedIndex.value = idx >= 0 ? idx : null;
			setTimeout(() => {
				selectedIndex.value = null;
				goToNextInternal();
			}, 250);
		}
		function onMultiToggle(option, checked) {
			const answer = currentAnswer.value;
			if (!answer) return;
			const opts = answer.selectedOptions;
			if (checked && !opts.includes(option)) opts.push(option);
			else if (!checked) {
				const idx = opts.indexOf(option);
				if (idx > -1) opts.splice(idx, 1);
			}
			answer.skipped = false;
		}
		function onCustomTextChange(text) {
			const answer = currentAnswer.value;
			if (!answer) return;
			answer.customText = text;
			answer.skipped = false;
			if (currentQuestion.value?.type === "multi") if (text.trim()) {
				if (!answer.selectedOptions.includes(OTHER_SENTINEL)) answer.selectedOptions.push(OTHER_SENTINEL);
			} else {
				const idx = answer.selectedOptions.indexOf(OTHER_SENTINEL);
				if (idx > -1) answer.selectedOptions.splice(idx, 1);
			}
			if (currentQuestion.value?.type === "single") if (text.trim()) answer.selectedOptions = [OTHER_SENTINEL];
			else answer.selectedOptions = [];
		}
		function goToPrevious() {
			if (!isFirstQuestion.value) currentIndex.value--;
		}
		function goToNextInternal() {
			if (!hasValidAnswer.value) {
				const answer = currentAnswer.value;
				if (answer) answer.skipped = true;
			}
			if (isLastQuestion.value) submitAnswers();
			else currentIndex.value++;
		}
		function goToNext() {
			goToNextInternal();
		}
		function skipQuestion() {
			const answer = currentAnswer.value;
			if (answer) answer.skipped = true;
			goToNextInternal();
		}
		function goToNextWithoutAnswer() {
			const answer = currentAnswer.value;
			if (answer && !hasValidAnswer.value) answer.skipped = true;
			if (!isLastQuestion.value) currentIndex.value++;
		}
		function submitAnswers() {
			if (isSubmitted.value) return;
			isSubmitted.value = true;
			emit("submit", props.questions.map((q) => {
				const answer = answers.value.get(q.id);
				if (!answer) return {
					questionId: q.id,
					question: q.question,
					selectedOptions: [],
					customText: "",
					skipped: true
				};
				return {
					...answer,
					selectedOptions: answer.selectedOptions.filter((o) => o !== OTHER_SENTINEL)
				};
			}));
		}
		function handleInputEnter(event, _type) {
			if (event.key !== "Enter" || event.shiftKey) return false;
			event.preventDefault();
			if (hasCustomText.value || isNextEnabled.value) goToNextInternal();
			return true;
		}
		function handleInputArrow(event) {
			if (event.key !== "ArrowUp" && event.key !== "ArrowDown") return false;
			event.preventDefault();
			containerRef.value?.focus();
			if (event.key === "ArrowUp") highlightedIndex.value = Math.max(0, highlightedIndex.value - 1);
			return true;
		}
		function handleArrowNavigation(event, type, optionCount) {
			if (event.key === "ArrowUp") {
				event.preventDefault();
				highlightedIndex.value = Math.max(0, highlightedIndex.value - 1);
				scrollHighlightedIntoView();
				return true;
			}
			if (event.key === "ArrowDown") {
				event.preventDefault();
				highlightedIndex.value = Math.min(type === "text" ? 0 : optionCount, highlightedIndex.value + 1);
				scrollHighlightedIntoView();
				return true;
			}
			return false;
		}
		function handleEnterKey(event, type, optionCount) {
			if (event.key !== "Enter") return false;
			event.preventDefault();
			if (type === "single") {
				if (highlightedIndex.value >= 0 && highlightedIndex.value < optionCount) onSingleSelectAndAdvance(filteredOptions.value[highlightedIndex.value], "keyboard_enter");
			} else if (type === "multi") {
				if (highlightedIndex.value >= 0 && highlightedIndex.value < optionCount) {
					const option = filteredOptions.value[highlightedIndex.value];
					const answer = currentAnswer.value;
					if (answer) onMultiToggle(option, !answer.selectedOptions.includes(option));
				} else if (isNextEnabled.value) goToNextInternal();
			} else if (type === "text" && hasCustomText.value) goToNextInternal();
			return true;
		}
		function handleNumberShortcut(event, type, optionCount) {
			if (type !== "single") return false;
			const num = parseInt(event.key, 10);
			if (num >= 1 && num <= optionCount) {
				event.preventDefault();
				onSingleSelectAndAdvance(filteredOptions.value[num - 1], "keyboard_number");
				return true;
			}
			return false;
		}
		function onKeydown(event) {
			const q = currentQuestion.value;
			if (!q || props.disabled) return;
			const target = event.target;
			if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") {
				handleInputEnter(event, q.type) || handleInputArrow(event);
				return;
			}
			const optionCount = filteredOptions.value.length;
			handleArrowNavigation(event, q.type, optionCount) || handleEnterKey(event, q.type, optionCount) || handleNumberShortcut(event, q.type, optionCount);
		}
		function scrollHighlightedIntoView() {
			nextTick(() => {
				const el = containerRef.value?.querySelector(`[data-option-index="${highlightedIndex.value}"]`);
				el?.scrollIntoView({ block: "nearest" });
				if (highlightedIndex.value === filteredOptions.value.length) (el?.querySelector("input"))?.focus();
			});
		}
		function onOptionMouseEnter(idx) {
			highlightedIndex.value = idx;
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.wrapper),
				"data-test-id": "instance-ai-questions"
			}, [currentQuestion.value && currentAnswer.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				ref_key: "containerRef",
				ref: containerRef,
				class: normalizeClass(_ctx.$style.container),
				tabindex: "0",
				onKeydown
			}, [createVNode(Transition, {
				name: _ctx.$style.questionFade,
				mode: "out-in"
			}, {
				default: withCtx(() => [(openBlock(), createElementBlock("div", {
					key: currentQuestion.value.id,
					class: normalizeClass(_ctx.$style.question)
				}, [createVNode(unref(N8nText_default), {
					tag: "p",
					bold: true,
					class: normalizeClass(_ctx.$style.questionText)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(currentQuestion.value.question), 1)]),
					_: 1
				}, 8, ["class"]), currentQuestion.value.type === "single" ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.options)
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(filteredOptions.value, (option, idx) => {
					return openBlock(), createElementBlock("button", {
						key: option,
						class: normalizeClass([
							_ctx.$style.optionRow,
							{ [_ctx.$style.highlighted]: highlightedIndex.value === idx },
							{ [_ctx.$style.activeSelected]: selectedIndex.value === idx }
						]),
						"data-option-index": idx,
						disabled: __props.disabled,
						type: "button",
						tabindex: "-1",
						onClick: ($event) => onSingleSelectAndAdvance(option),
						onMouseenter: ($event) => onOptionMouseEnter(idx)
					}, [
						createBaseVNode("span", { class: normalizeClass(_ctx.$style.numberBadge) }, toDisplayString(idx + 1), 3),
						createBaseVNode("span", { class: normalizeClass(_ctx.$style.optionLabel) }, toDisplayString(option), 3),
						createVNode(unref(N8nIcon_default), {
							class: normalizeClass(_ctx.$style.arrowIndicator),
							icon: "arrow-right",
							size: 16
						}, null, 8, ["class"])
					], 42, _hoisted_1$2);
				}), 128)), createBaseVNode("div", {
					class: normalizeClass([_ctx.$style.somethingElseRow, { [_ctx.$style.highlighted]: highlightedIndex.value === filteredOptions.value.length }]),
					"data-option-index": filteredOptions.value.length,
					onMouseenter: _cache[0] || (_cache[0] = ($event) => onOptionMouseEnter(filteredOptions.value.length))
				}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.pencilIconContainer) }, [createVNode(unref(N8nIcon_default), {
					class: normalizeClass(_ctx.$style.pencilIcon),
					icon: "pen",
					size: "medium"
				}, null, 8, ["class"])], 2), createVNode(unref(Input_default), {
					"model-value": currentAnswer.value.customText,
					disabled: __props.disabled,
					placeholder: unref(i18n).baseText("aiAssistant.builder.planMode.questions.somethingElse"),
					size: "small",
					class: normalizeClass(_ctx.$style.somethingElseInput),
					"data-test-id": "instance-ai-something-else-input",
					"onUpdate:modelValue": onCustomTextChange
				}, null, 8, [
					"model-value",
					"disabled",
					"placeholder",
					"class"
				])], 42, _hoisted_2)], 2)) : currentQuestion.value.type === "multi" ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.options)
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(filteredOptions.value, (option, idx) => {
					return openBlock(), createElementBlock("label", {
						key: option,
						class: normalizeClass([
							_ctx.$style.checkboxRow,
							{ [_ctx.$style.highlighted]: highlightedIndex.value === idx },
							{ [_ctx.$style.selected]: currentAnswer.value.selectedOptions.includes(option) }
						]),
						"data-option-index": idx,
						onMouseenter: ($event) => onOptionMouseEnter(idx)
					}, [createVNode(unref(Checkbox_default), {
						"model-value": currentAnswer.value.selectedOptions.includes(option),
						disabled: __props.disabled,
						"onUpdate:modelValue": (checked) => onMultiToggle(option, checked)
					}, null, 8, [
						"model-value",
						"disabled",
						"onUpdate:modelValue"
					]), createBaseVNode("span", { class: normalizeClass(_ctx.$style.optionLabel) }, toDisplayString(option), 3)], 42, _hoisted_3);
				}), 128)), createBaseVNode("div", {
					class: normalizeClass([_ctx.$style.somethingElseRowMulti, { [_ctx.$style.highlighted]: highlightedIndex.value === filteredOptions.value.length }]),
					"data-option-index": filteredOptions.value.length,
					onMouseenter: _cache[2] || (_cache[2] = ($event) => onOptionMouseEnter(filteredOptions.value.length))
				}, [createVNode(unref(Checkbox_default), {
					"model-value": !!currentAnswer.value.customText?.trim(),
					disabled: __props.disabled,
					"onUpdate:modelValue": _cache[1] || (_cache[1] = (checked) => {
						if (!checked) onCustomTextChange("");
					})
				}, null, 8, ["model-value", "disabled"]), createVNode(unref(Input_default), {
					"model-value": currentAnswer.value.customText,
					disabled: __props.disabled,
					placeholder: unref(i18n).baseText("aiAssistant.builder.planMode.questions.somethingElse"),
					size: "small",
					class: normalizeClass(_ctx.$style.somethingElseInput),
					"data-test-id": "instance-ai-something-else-input",
					"onUpdate:modelValue": onCustomTextChange
				}, null, 8, [
					"model-value",
					"disabled",
					"placeholder",
					"class"
				])], 42, _hoisted_4)], 2)) : currentQuestion.value.type === "text" ? (openBlock(), createBlock(unref(Input_default), {
					key: 2,
					class: normalizeClass(_ctx.$style.textareaInput),
					"model-value": currentAnswer.value.customText,
					type: "textarea",
					rows: 3,
					disabled: __props.disabled,
					placeholder: unref(i18n).baseText("aiAssistant.builder.planMode.questions.clarifyPlaceholder"),
					"onUpdate:modelValue": onCustomTextChange
				}, null, 8, [
					"class",
					"model-value",
					"disabled",
					"placeholder"
				])) : createCommentVNode("", true)], 2))]),
				_: 1
			}, 8, ["name"]), createVNode(ConfirmationFooter_default, {
				layout: "row-between",
				bordered: ""
			}, {
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.pagination) }, [
					createVNode(unref(N8nButton_default), {
						variant: "ghost",
						size: "medium",
						"icon-only": "",
						disabled: isFirstQuestion.value,
						"data-test-id": "instance-ai-questions-back",
						"aria-label": "Previous question",
						onClick: goToPrevious
					}, {
						default: withCtx(() => [createVNode(unref(N8nIcon_default), {
							icon: "chevron-left",
							size: "xsmall"
						})]),
						_: 1
					}, 8, ["disabled"]),
					createVNode(unref(N8nText_default), {
						class: normalizeClass(_ctx.$style.paginationText),
						size: "small"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(currentIndex.value + 1) + " " + toDisplayString(unref(i18n).baseText("aiAssistant.builder.planMode.questions.paginationOf")) + " " + toDisplayString(__props.questions.length), 1)]),
						_: 1
					}, 8, ["class"]),
					createVNode(unref(N8nButton_default), {
						variant: "ghost",
						size: "medium",
						"icon-only": "",
						disabled: isLastQuestion.value,
						"data-test-id": "instance-ai-questions-forward",
						"aria-label": "Next question",
						onClick: goToNextWithoutAnswer
					}, {
						default: withCtx(() => [createVNode(unref(N8nIcon_default), {
							icon: "chevron-right",
							size: "xsmall"
						})]),
						_: 1
					}, 8, ["disabled"])
				], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.navigation) }, [showSkipButton.value ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 0,
					variant: "outline",
					size: "medium",
					disabled: __props.disabled,
					"data-test-id": "instance-ai-questions-skip",
					onClick: skipQuestion
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("aiAssistant.builder.planMode.questions.skip")), 1)]),
					_: 1
				}, 8, ["disabled"])) : createCommentVNode("", true), showNextButton.value ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 1,
					variant: isNextEnabled.value ? "solid" : "outline",
					size: "medium",
					disabled: __props.disabled || isSubmitted.value || !isNextEnabled.value,
					"data-test-id": "instance-ai-questions-next",
					onClick: goToNext
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(nextButtonLabel.value), 1)]),
					_: 1
				}, 8, ["variant", "disabled"])) : createCommentVNode("", true)], 2)]),
				_: 1
			})], 34)) : createCommentVNode("", true)], 2);
		};
	}
});
var InstanceAiQuestions_vue_vue_type_style_index_0_lang_module_default = {
	wrapper: "_wrapper_1d3nv_125",
	intro: "_intro_1d3nv_131",
	container: "_container_1d3nv_139",
	question: "_question_1d3nv_146",
	questionText: "_questionText_1d3nv_150",
	options: "_options_1d3nv_154",
	optionRow: "_optionRow_1d3nv_160",
	highlighted: "_highlighted_1d3nv_173",
	arrowIndicator: "_arrowIndicator_1d3nv_176",
	activeSelected: "_activeSelected_1d3nv_179",
	numberBadge: "_numberBadge_1d3nv_182",
	optionLabel: "_optionLabel_1d3nv_186",
	checkboxRow: "_checkboxRow_1d3nv_227",
	somethingElseRow: "_somethingElseRow_1d3nv_240",
	somethingElseInput: "_somethingElseInput_1d3nv_253",
	somethingElseRowMulti: "_somethingElseRowMulti_1d3nv_265",
	pencilIconContainer: "_pencilIconContainer_1d3nv_279",
	pencilIcon: "_pencilIcon_1d3nv_279",
	pagination: "_pagination_1d3nv_295",
	paginationText: "_paginationText_1d3nv_301",
	navigation: "_navigation_1d3nv_306",
	textareaInput: "_textareaInput_1d3nv_312",
	"questionFade-enter-active": "_questionFade-enter-active_1d3nv_319",
	"questionFade-leave-active": "_questionFade-leave-active_1d3nv_320",
	"questionFade-enter-from": "_questionFade-enter-from_1d3nv_324",
	"questionFade-leave-to": "_questionFade-leave-to_1d3nv_325"
};
var InstanceAiQuestions_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiQuestions_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiQuestions_vue_vue_type_style_index_0_lang_module_default }]]);
var NESTED_PARAM_TYPES = new Set([
	"collection",
	"fixedCollection",
	"resourceMapper",
	"filter",
	"assignmentCollection"
]);
function credGroupKey(req) {
	if (!req.credentialType) return req.node.name;
	const credType = req.credentialType;
	if (req.node.type === "n8n-nodes-base.httpRequest" || req.node.type === "n8n-nodes-base.httpRequestTool") {
		const url = String(req.node.parameters.url ?? "");
		if (url.startsWith("=")) return `${credType}:http:expr:${req.node.name}`;
		return `${credType}:http:${url}`;
	}
	return credType;
}
/** Check if a parameter value is meaningfully set (not empty, null, or an empty resource locator). */
function isParamValueSet(val) {
	if (val === void 0 || val === null || val === "") return false;
	if (isResourceLocatorValue(val)) return val.value !== "" && val.value !== null && val.value !== void 0;
	return true;
}
function isNestedParam(p) {
	return NESTED_PARAM_TYPES.has(p.type) || p.typeOptions?.multipleValues === true;
}
function toNodeUi(setupNode) {
	return {
		id: setupNode.node.id,
		name: setupNode.node.name,
		type: setupNode.node.type,
		typeVersion: setupNode.node.typeVersion,
		position: setupNode.node.position,
		parameters: setupNode.node.parameters,
		...setupNode.node.credentials !== void 0 ? { credentials: setupNode.node.credentials } : {}
	};
}
/** True when this card only has a trigger (no credentials and no param work) */
function isTriggerOnly(card, cardHasParamWork) {
	return card.isTrigger && !card.credentialType && !cardHasParamWork(card);
}
/** Use credential icon when it's a credential card */
function shouldUseCredentialIcon(card, cardHasParamWork) {
	return !!card.credentialType && !isTriggerOnly(card, cardHasParamWork);
}
//#endregion
//#region src/features/ai/instanceAi/composables/useCredentialTesting.ts
function useCredentialTesting(getCardCredentialId) {
	const credentialsStore = useCredentialsStore();
	function isCredentialTypeTestable(credentialTypeName) {
		if (credentialsStore.getCredentialTypeByName(credentialTypeName)?.test) return true;
		return credentialsStore.getNodesWithAccess(credentialTypeName).some((node) => node.credentials?.some((cred) => cred.name === credentialTypeName && cred.testedBy));
	}
	async function testCredentialInBackground(credentialId, credentialName, credentialType) {
		if (!isCredentialTypeTestable(credentialType)) return;
		if (credentialsStore.isCredentialTestedOk(credentialId) || credentialsStore.isCredentialTestPending(credentialId)) return;
		try {
			const credentialResponse = await credentialsStore.getCredentialData({ id: credentialId });
			if (!credentialResponse?.data || typeof credentialResponse.data === "string") return;
			if (credentialsStore.isCredentialTestedOk(credentialId) || credentialsStore.isCredentialTestPending(credentialId)) return;
			const { ownedBy: _ownedBy, sharedWithProjects: _sharedWithProjects, oauthTokenData, ...data } = credentialResponse.data;
			if (oauthTokenData) {
				credentialsStore.credentialTestResults.set(credentialId, "success");
				return;
			}
			await credentialsStore.testCredential({
				id: credentialId,
				name: credentialName,
				type: credentialType,
				data
			});
		} catch {
			credentialsStore.credentialTestResults.set(credentialId, "error");
		}
	}
	/**
	* Returns the credential test result for a card.
	* - Store result (keyed by credential ID): authoritative for any credential the client has tested
	* - Backend result (card.credentialTestResult): only valid when the selected credential
	*   matches the original backend-assigned credential (unchanged selection)
	* - Returns undefined when no result is available yet (triggers spinner for testable types)
	*/
	function getEffectiveCredTestResult(card) {
		const selectedId = getCardCredentialId(card);
		if (!selectedId) return void 0;
		if (credentialsStore.isCredentialTestedOk(selectedId)) return { success: true };
		if (credentialsStore.isCredentialTestPending(selectedId)) return;
		if (credentialsStore.credentialTestResults.get(selectedId) === "error") return { success: false };
		const originalCredId = card.nodes[0]?.node.credentials?.[card.credentialType]?.id;
		if (card.credentialTestResult && selectedId === originalCredId) return card.credentialTestResult;
	}
	function getCredTestIcon(card) {
		if (!card.credentialType) return null;
		if (!getCardCredentialId(card)) return null;
		const testResult = getEffectiveCredTestResult(card);
		if (testResult === void 0) return isCredentialTypeTestable(card.credentialType) ? "spinner" : null;
		if (testResult.success) return "check";
		return "triangle-alert";
	}
	return {
		isCredentialTypeTestable,
		testCredentialInBackground,
		getEffectiveCredTestResult,
		getCredTestIcon
	};
}
//#endregion
//#region src/features/ai/instanceAi/composables/useCredentialGroupSelection.ts
function useCredentialGroupSelection(cards, testCredentialInBackground, projectId) {
	const uiStore = useUIStore();
	const workflowsStore = useWorkflowsStore();
	const credentialsStore = useCredentialsStore();
	const credGroupSelections = ref({});
	const activeCredentialTarget = ref(null);
	function initCredGroupSelections() {
		const groupMap = /* @__PURE__ */ new Map();
		for (const card of cards.value) {
			if (!card.credentialType) continue;
			const key = card.nodes[0] ? credGroupKey(card.nodes[0]) : card.credentialType;
			const existing = groupMap.get(key);
			if (existing) existing.push(card);
			else groupMap.set(key, [card]);
		}
		for (const [key, groupCards] of groupMap) {
			let selectedId = null;
			for (const card of groupCards) {
				for (const req of card.nodes) {
					const credId = req.node.credentials?.[card.credentialType]?.id;
					if (credId) {
						selectedId = credId;
						break;
					}
				}
				if (selectedId) break;
			}
			if (!selectedId) {
				const firstCard = groupCards[0];
				const firstReq = firstCard.nodes[0];
				if (firstReq.existingCredentials?.length === 1) selectedId = firstReq.existingCredentials[0].id;
				else if (firstCard.isAutoApplied && firstReq.existingCredentials?.length) selectedId = firstReq.existingCredentials[0].id;
			}
			credGroupSelections.value[key] = selectedId;
		}
	}
	function getCardCredentialId(card) {
		if (!card.credentialType) return null;
		const key = card.nodes[0] ? credGroupKey(card.nodes[0]) : card.credentialType;
		return credGroupSelections.value[key] ?? null;
	}
	function isFirstCardInCredGroup(card) {
		if (!card.credentialType || !card.nodes[0]) return true;
		const key = credGroupKey(card.nodes[0]);
		return cards.value.find((c) => c.credentialType && c.nodes[0] && credGroupKey(c.nodes[0]) === key)?.id === card.id;
	}
	function setCredentialForGroup(groupKey, credentialType, credentialId) {
		credGroupSelections.value[groupKey] = credentialId;
		for (const c of cards.value) {
			if (!c.credentialType || !c.nodes[0]) continue;
			if (credGroupKey(c.nodes[0]) !== groupKey) continue;
			for (const req of c.nodes) {
				const storeNode = workflowsStore.getNodeByName(req.node.name);
				if (storeNode) {
					const cred = req.existingCredentials?.find((cr) => cr.id === credentialId) ?? credentialsStore.getCredentialById(credentialId);
					if (cred) storeNode.credentials = {
						...storeNode.credentials,
						[credentialType]: {
							id: cred.id,
							name: cred.name
						}
					};
				}
			}
		}
		const cred = credentialsStore.getCredentialById(credentialId);
		if (cred) testCredentialInBackground(credentialId, cred.name, credentialType);
	}
	function clearCredentialForGroup(groupKey, credentialType) {
		credGroupSelections.value[groupKey] = null;
		for (const c of cards.value) {
			if (!c.credentialType || !c.nodes[0]) continue;
			if (credGroupKey(c.nodes[0]) !== groupKey) continue;
			for (const req of c.nodes) {
				const storeNode = workflowsStore.getNodeByName(req.node.name);
				if (storeNode?.credentials?.[credentialType]) {
					const { [credentialType]: _removed, ...remaining } = storeNode.credentials;
					storeNode.credentials = remaining;
				}
			}
		}
	}
	function cardHasExistingCredentials(card) {
		if (!card.credentialType) return false;
		return (card.nodes[0]?.existingCredentials?.length ?? 0) > 0 || (credentialsStore.getUsableCredentialByType(card.credentialType)?.length ?? 0) > 0;
	}
	function openNewCredentialForSection(credentialType, groupKey) {
		activeCredentialTarget.value = {
			groupKey,
			credentialType
		};
		uiStore.openNewCredential(credentialType, false, false, projectId);
	}
	return {
		credGroupSelections,
		activeCredentialTarget,
		initCredGroupSelections,
		getCardCredentialId,
		isFirstCardInCredGroup,
		setCredentialForGroup,
		clearCredentialForGroup,
		cardHasExistingCredentials,
		openNewCredentialForSection
	};
}
//#endregion
//#region src/features/ai/instanceAi/composables/useSetupCards.ts
function useSetupCards(setupRequests, getCardCredentialId, isCredentialTypeTestable) {
	const workflowsStore = useWorkflowsStore();
	const nodeTypesStore = useNodeTypesStore();
	const credentialsStore = useCredentialsStore();
	const trackedParamNames = ref(/* @__PURE__ */ new Map());
	function initTrackedParamNames() {
		for (const req of setupRequests.value) if (req.parameterIssues && Object.keys(req.parameterIssues).length > 0) trackedParamNames.value.set(req.node.name, new Set(Object.keys(req.parameterIssues)));
	}
	initTrackedParamNames();
	const liveEscalatedCredTypes = computed(() => {
		const escalated = /* @__PURE__ */ new Set();
		const groupMembers = /* @__PURE__ */ new Map();
		for (const req of setupRequests.value) {
			if (!req.credentialType) continue;
			const key = credGroupKey(req);
			const existing = groupMembers.get(key);
			if (existing) existing.push(req);
			else groupMembers.set(key, [req]);
		}
		for (const [key, members] of groupMembers) {
			if (members.length <= 1) continue;
			for (const req of members) if (trackedParamNames.value.has(req.node.name)) {
				escalated.add(key);
				break;
			}
		}
		return escalated;
	});
	const cards = computed(() => {
		const escalatedCredTypes = /* @__PURE__ */ new Set();
		for (const req of setupRequests.value) if (req.credentialType && req.parameterIssues && Object.keys(req.parameterIssues).length > 0) escalatedCredTypes.add(credGroupKey(req));
		for (const key of liveEscalatedCredTypes.value) escalatedCredTypes.add(key);
		const ordered = [];
		const credCardByKey = /* @__PURE__ */ new Map();
		for (const req of setupRequests.value) {
			const hasParamIssues = req.parameterIssues !== void 0 && Object.keys(req.parameterIssues).length > 0;
			if (req.credentialType) {
				const key = credGroupKey(req);
				if (escalatedCredTypes.has(key)) ordered.push({
					id: `node-${req.node.id}`,
					credentialType: req.credentialType,
					nodes: [req],
					isTrigger: req.isTrigger,
					isFirstTrigger: req.isFirstTrigger ?? false,
					isTestable: req.isTestable ?? false,
					credentialTestResult: req.credentialTestResult,
					isAutoApplied: req.isAutoApplied ?? false,
					hasParamIssues
				});
				else {
					const existing = credCardByKey.get(key);
					if (existing) {
						existing.nodes.push(req);
						if (req.isTrigger) existing.isTrigger = true;
						if (req.isFirstTrigger) existing.isFirstTrigger = true;
						if (req.isTestable) existing.isTestable = true;
						if (req.isAutoApplied) existing.isAutoApplied = true;
						if (req.credentialTestResult && !existing.credentialTestResult) existing.credentialTestResult = req.credentialTestResult;
					} else {
						const card = {
							id: `cred-${key}`,
							credentialType: req.credentialType,
							nodes: [req],
							isTrigger: req.isTrigger,
							isFirstTrigger: req.isFirstTrigger ?? false,
							isTestable: req.isTestable ?? false,
							credentialTestResult: req.credentialTestResult,
							isAutoApplied: req.isAutoApplied ?? false,
							hasParamIssues: false
						};
						credCardByKey.set(key, card);
						ordered.push(card);
					}
				}
			} else if (req.isTrigger || hasParamIssues) ordered.push({
				id: hasParamIssues ? `param-${req.node.id}` : `trigger-${req.node.id}`,
				nodes: [req],
				isTrigger: req.isTrigger,
				isFirstTrigger: req.isFirstTrigger ?? false,
				isTestable: req.isTestable ?? false,
				isAutoApplied: false,
				hasParamIssues
			});
		}
		return ordered;
	});
	const displayCards = computed(() => {
		const directSubnodes = /* @__PURE__ */ new Map();
		const connectionsByDest = workflowsStore.connectionsByDestinationNode;
		for (const [destName, conns] of Object.entries(connectionsByDest)) for (const connType of Object.keys(conns)) {
			if (connType === NodeConnectionTypes.Main) continue;
			for (const group of conns[connType]) {
				if (!group) continue;
				for (const conn of group) {
					if (!directSubnodes.has(destName)) directSubnodes.set(destName, /* @__PURE__ */ new Set());
					directSubnodes.get(destName).add(conn.node);
				}
			}
		}
		const allSubnodeNames = /* @__PURE__ */ new Set();
		for (const subs of directSubnodes.values()) for (const s of subs) allSubnodeNames.add(s);
		const rootParents = /* @__PURE__ */ new Set();
		for (const parentName of directSubnodes.keys()) if (!allSubnodeNames.has(parentName)) rootParents.add(parentName);
		const transitiveSubnodes = /* @__PURE__ */ new Map();
		for (const root of rootParents) {
			const collected = /* @__PURE__ */ new Set();
			const queue = [...directSubnodes.get(root) ?? []];
			while (queue.length > 0) {
				const name = queue.pop();
				if (collected.has(name)) continue;
				collected.add(name);
				const children = directSubnodes.get(name);
				if (children) queue.push(...children);
			}
			if (collected.size > 0) transitiveSubnodes.set(root, collected);
		}
		const cardsByNodeName = /* @__PURE__ */ new Map();
		for (const card of cards.value) for (const req of card.nodes) cardsByNodeName.set(req.node.name, card);
		const usedCardIds = /* @__PURE__ */ new Set();
		const deferredSubnodeCardIds = /* @__PURE__ */ new Set();
		const result = [];
		for (const card of cards.value) {
			if (usedCardIds.has(card.id)) continue;
			const primaryNodeName = card.nodes[0]?.node.name;
			const subnodeNames = primaryNodeName ? transitiveSubnodes.get(primaryNodeName) : void 0;
			if (subnodeNames && subnodeNames.size > 0) {
				const subnodeCards = [];
				for (const subName of subnodeNames) {
					const subCard = cardsByNodeName.get(subName);
					if (subCard && !usedCardIds.has(subCard.id)) {
						subnodeCards.push(subCard);
						usedCardIds.add(subCard.id);
						deferredSubnodeCardIds.delete(subCard.id);
					}
				}
				if (subnodeCards.length > 0) {
					usedCardIds.add(card.id);
					result.push({
						type: "group",
						group: {
							parentNode: card.nodes[0].node,
							parentCard: card,
							subnodeCards
						}
					});
					continue;
				}
			}
			let isSubnodeOfRoot = false;
			for (const [rootName, subs] of transitiveSubnodes) if (primaryNodeName && subs.has(primaryNodeName)) {
				const rootCard = cardsByNodeName.get(rootName);
				if (rootCard && !usedCardIds.has(rootCard.id)) isSubnodeOfRoot = true;
				break;
			}
			if (!isSubnodeOfRoot) {
				usedCardIds.add(card.id);
				result.push({
					type: "single",
					card
				});
			} else deferredSubnodeCardIds.add(card.id);
		}
		for (const card of cards.value) if (deferredSubnodeCardIds.has(card.id) && !usedCardIds.has(card.id)) {
			usedCardIds.add(card.id);
			result.push({
				type: "single",
				card
			});
		}
		return result;
	});
	function cardHasParamWork(card) {
		for (const req of card.nodes) {
			const nodeName = req.node.name;
			if (trackedParamNames.value.has(nodeName)) return true;
			const storeNode = workflowsStore.getNodeByName(nodeName);
			if (storeNode) {
				const liveIssues = getNodeParametersIssues(nodeTypesStore, storeNode);
				if (Object.keys(liveIssues).length > 0) return true;
			}
		}
		return false;
	}
	function isCardComplete(card) {
		if (card.credentialType) {
			const selectedId = getCardCredentialId(card);
			if (!selectedId) return false;
			if (isCredentialTypeTestable(card.credentialType)) {
				if (!credentialsStore.isCredentialTestedOk(selectedId)) {
					const originalCredId = card.nodes[0]?.node.credentials?.[card.credentialType]?.id;
					if (!(card.credentialTestResult?.success && selectedId === originalCredId)) return false;
				}
			}
		}
		if (cardHasParamWork(card)) for (const req of card.nodes) {
			const storeNode = workflowsStore.getNodeByName(req.node.name);
			if (storeNode) {
				const liveIssues = getNodeParametersIssues(nodeTypesStore, storeNode);
				if (Object.keys(liveIssues).length > 0) return false;
			}
		}
		if (card.isTestable && card.isTrigger && card.isFirstTrigger) {
			const triggerTestResults = {};
			for (const req of setupRequests.value) if (req.triggerTestResult) triggerTestResults[req.node.name] = req.triggerTestResult;
			const triggerNode = card.nodes.find((n) => n.isTrigger);
			const result = triggerNode ? triggerTestResults[triggerNode.node.name] : void 0;
			if (!result || result.status !== "success") return false;
		}
		return true;
	}
	const anyCardComplete = computed(() => cards.value.some((c) => isCardComplete(c)));
	const allPreResolved = computed(() => setupRequests.value.every((r) => !r.needsAction));
	function isDisplayCardComplete(dc) {
		if (dc.type === "single") return isCardComplete(dc.card);
		const { group } = dc;
		if (group.parentCard && !isCardComplete(group.parentCard)) return false;
		return group.subnodeCards.every((card) => isCardComplete(card));
	}
	function getGroupPrimaryTriggerCard(group) {
		return (group.parentCard ? [group.parentCard, ...group.subnodeCards] : group.subnodeCards).find((c) => c.isTestable && c.isTrigger && c.isFirstTrigger) ?? null;
	}
	watch(() => {
		const result = /* @__PURE__ */ new Map();
		for (const card of cards.value) for (const req of card.nodes) {
			const nodeName = req.node.name;
			const storeNode = workflowsStore.getNodeByName(nodeName);
			if (!storeNode) continue;
			const liveIssues = getNodeParametersIssues(nodeTypesStore, storeNode);
			if (Object.keys(liveIssues).length > 0) result.set(nodeName, Object.keys(liveIssues));
		}
		return result;
	}, (liveIssuesByNode) => {
		for (const [nodeName, issueNames] of liveIssuesByNode) {
			const existing = trackedParamNames.value.get(nodeName);
			if (existing) for (const name of issueNames) existing.add(name);
			else trackedParamNames.value.set(nodeName, new Set(issueNames));
		}
	}, { immediate: true });
	return {
		trackedParamNames,
		cards,
		displayCards,
		cardHasParamWork,
		isCardComplete,
		isDisplayCardComplete,
		anyCardComplete,
		allPreResolved,
		getGroupPrimaryTriggerCard
	};
}
//#endregion
//#region src/features/ai/instanceAi/composables/useSetupCardParameters.ts
function useSetupCardParameters(cards, trackedParamNames, cardHasParamWork) {
	const workflowsStore = useWorkflowsStore();
	const nodeTypesStore = useNodeTypesStore();
	const paramValues = ref({});
	/** Seed parameter values from existing node parameters for cards with param issues. */
	function initParamValues() {
		for (const card of cards.value) {
			if (!cardHasParamWork(card)) continue;
			const req = card.nodes[0];
			const nodeName = req.node.name;
			if (paramValues.value[nodeName]) continue;
			const issueParamNames = Object.keys(req.parameterIssues ?? {});
			const nodeParams = req.node.parameters;
			const seeded = {};
			for (const paramName of issueParamNames) {
				const existing = nodeParams[paramName];
				if (isParamValueSet(existing)) seeded[paramName] = existing;
			}
			if (Object.keys(seeded).length > 0) paramValues.value[nodeName] = seeded;
		}
	}
	initParamValues();
	function getCardParameters(card) {
		if (!cardHasParamWork(card)) return [];
		const req = card.nodes[0];
		const nodeType = nodeTypesStore.getNodeType(req.node.type, req.node.typeVersion);
		if (!nodeType?.properties) return [];
		const nodeName = req.node.name;
		const tracked = trackedParamNames.value.get(nodeName) ?? new Set(Object.keys(req.parameterIssues ?? {}));
		const node = workflowsStore.getNodeByName(nodeName);
		if (!node) return [];
		return nodeType.properties.filter((prop) => tracked.has(prop.name) && displayParameter(node.parameters, prop, node, nodeType));
	}
	function getCardSimpleParameters(card) {
		return getCardParameters(card).filter((p) => !isNestedParam(p));
	}
	function getCardNestedParameterCount(card) {
		return getCardParameters(card).filter(isNestedParam).length;
	}
	/** Set a parameter value. */
	function setParamValue(nodeName, paramName, value) {
		if (!paramValues.value[nodeName]) paramValues.value[nodeName] = {};
		paramValues.value[nodeName][paramName] = value;
	}
	/** Bridge ParameterInputList events to both local paramValues AND the workflow store node. */
	function onParameterValueChanged(card, parameterData) {
		const nodeName = card.nodes[0].node.name;
		const paramName = parameterData.name.replace(/^parameters\./, "");
		setParamValue(nodeName, paramName, parameterData.value);
		const canvasNode = workflowsStore.getNodeByName(nodeName);
		if (canvasNode) canvasNode.parameters = {
			...canvasNode.parameters,
			[paramName]: parameterData.value
		};
	}
	/** Build nodeParameters from paramValues + store node (for NDV-edited params). */
	function buildNodeParameters() {
		const result = {};
		let hasValues = false;
		for (const card of cards.value) {
			if (!cardHasParamWork(card)) continue;
			for (const req of card.nodes) {
				const nodeName = req.node.name;
				const paramNames = trackedParamNames.value.get(nodeName) ?? new Set(Object.keys(req.parameterIssues ?? {}));
				if (paramNames.size === 0) continue;
				const merged = {};
				for (const paramName of paramNames) {
					let val = paramValues.value[nodeName]?.[paramName];
					if (!isParamValueSet(val)) val = workflowsStore.getNodeByName(nodeName)?.parameters[paramName];
					if (isParamValueSet(val)) {
						merged[paramName] = val;
						hasValues = true;
					}
				}
				if (Object.keys(merged).length > 0) result[nodeName] = merged;
			}
		}
		return hasValues ? result : void 0;
	}
	return {
		paramValues,
		getCardParameters,
		getCardSimpleParameters,
		getCardNestedParameterCount,
		setParamValue,
		onParameterValueChanged,
		buildNodeParameters
	};
}
//#endregion
//#region src/features/ai/instanceAi/composables/useSetupActions.ts
function useSetupActions(deps) {
	const telemetry = useTelemetry();
	const workflowsStore = useWorkflowsStore();
	const nodeHelpers = useNodeHelpers();
	const isSubmitted = ref(false);
	const isDeferred = ref(false);
	const isPartial = ref(false);
	const isApplying = ref(false);
	const applyError = ref(null);
	function isToolResult(val) {
		return typeof val === "object" && val !== null && !Array.isArray(val);
	}
	let cancelApplyWait = null;
	onUnmounted(() => {
		cancelApplyWait?.();
	});
	function trackSetupInput() {
		const inputThreadId = deps.store.findToolCallByRequestId(deps.requestId.value)?.confirmation?.inputThreadId ?? "";
		const provided = [];
		const skipped = [];
		for (const card of deps.cards.value) {
			const name = card.nodes[0]?.node.name ?? card.id;
			if (deps.isCardComplete(card)) provided.push({
				label: name,
				options: [],
				option_chosen: "configured"
			});
			else skipped.push({
				label: name,
				options: []
			});
		}
		telemetry.track("User finished providing input", {
			thread_id: deps.store.currentThreadId,
			input_thread_id: inputThreadId,
			instance_id: useRootStore().instanceId,
			type: "setup",
			provided_inputs: provided,
			skipped_inputs: skipped,
			num_tasks: deps.cards.value.length
		});
	}
	/** Watch for the tool-result SSE event and resolve when it arrives. */
	function waitForToolResult(requestId, timeoutMs = 6e4) {
		let stopWatch = null;
		let timeoutId = null;
		const promise = new Promise((resolve) => {
			const existing = deps.store.findToolCallByRequestId(requestId);
			if (existing?.result !== void 0) {
				resolve(isToolResult(existing.result) ? existing.result : null);
				return;
			}
			stopWatch = watch(() => {
				return deps.store.findToolCallByRequestId(requestId)?.result;
			}, (result) => {
				if (result !== void 0) {
					cleanup();
					resolve(isToolResult(result) ? result : null);
				}
			});
			timeoutId = setTimeout(() => {
				cleanup();
				resolve(null);
			}, timeoutMs);
		});
		function cleanup() {
			if (stopWatch) {
				stopWatch();
				stopWatch = null;
			}
			if (timeoutId) {
				clearTimeout(timeoutId);
				timeoutId = null;
			}
		}
		return {
			promise,
			cancel: cleanup
		};
	}
	/**
	* Apply the server's authoritative updatedNodes to the canvas.
	*/
	function applyServerResultToCanvas(toolResult) {
		const updatedNodes = toolResult.updatedNodes;
		if (!updatedNodes) return;
		for (const serverNode of updatedNodes) {
			const canvasNode = workflowsStore.getNodeByName(serverNode.name ?? "");
			if (!canvasNode) continue;
			if (serverNode.credentials) canvasNode.credentials = serverNode.credentials;
			if (serverNode.parameters) canvasNode.parameters = serverNode.parameters;
			if (serverNode.name) {
				nodeHelpers.updateNodeParameterIssuesByName(serverNode.name);
				nodeHelpers.updateNodeCredentialIssuesByName(serverNode.name);
			}
		}
	}
	async function handleApply() {
		const nodeCredentials = deps.buildNodeCredentials();
		const nodeParameters = deps.buildNodeParameters();
		trackSetupInput();
		isApplying.value = true;
		applyError.value = null;
		if (!await deps.store.confirmAction(deps.requestId.value, true, void 0, void 0, void 0, void 0, void 0, {
			action: "apply",
			nodeCredentials,
			nodeParameters
		})) {
			isApplying.value = false;
			applyError.value = "Failed to send confirmation. Try again.";
			return;
		}
		const { promise, cancel } = waitForToolResult(deps.requestId.value);
		cancelApplyWait = cancel;
		const toolResult = await promise;
		cancelApplyWait = null;
		isApplying.value = false;
		if (toolResult && toolResult.success === true) {
			applyServerResultToCanvas(toolResult);
			isSubmitted.value = true;
			isPartial.value = toolResult.partial === true;
			deps.onApplySuccess?.();
			deps.store.resolveConfirmation(deps.requestId.value, "approved");
		} else if (toolResult) applyError.value = typeof toolResult.error === "string" ? toolResult.error : "Apply failed";
		else applyError.value = "Apply timed out — please try again.";
	}
	async function handleTestTrigger(nodeName) {
		const nodeCredentials = deps.buildNodeCredentials();
		const nodeParameters = deps.buildNodeParameters();
		applyError.value = null;
		if (!await deps.store.confirmAction(deps.requestId.value, true, void 0, void 0, void 0, void 0, void 0, {
			action: "test-trigger",
			testTriggerNode: nodeName,
			nodeCredentials,
			nodeParameters
		})) {
			applyError.value = "Failed to send trigger test request. Try again.";
			return;
		}
		const { promise, cancel } = waitForToolResult(deps.requestId.value);
		cancelApplyWait = cancel;
		const toolResult = await promise;
		cancelApplyWait = null;
		if (toolResult === null) {} else if (typeof toolResult.error === "string") applyError.value = toolResult.error;
		else if (toolResult.success !== true) applyError.value = "Trigger test failed";
	}
	async function handleLater() {
		if (!deps.allPreResolved.value || deps.showFullWizard.value) {
			const dc = deps.currentDisplayCard.value;
			if (dc?.type === "single" && dc.card.credentialType && dc.card.nodes[0]) {
				const key = deps.credGroupKey(dc.card.nodes[0]);
				deps.clearCredentialForGroup(key, dc.card.credentialType);
			}
			if (dc?.type === "group") {
				const allGroupCards = [...dc.group.parentCard ? [dc.group.parentCard] : [], ...dc.group.subnodeCards];
				for (const groupCard of allGroupCards) if (groupCard.credentialType && groupCard.nodes[0]) {
					const key = deps.credGroupKey(groupCard.nodes[0]);
					deps.clearCredentialForGroup(key, groupCard.credentialType);
				}
				if (!deps.isNextDisabled.value) {
					deps.goToNext();
					return;
				}
				if (deps.anyCardComplete.value) {
					handleApply();
					return;
				}
			}
			if (!deps.isNextDisabled.value) {
				deps.goToNext();
				return;
			}
			if (deps.anyCardComplete.value) {
				handleApply();
				return;
			}
		}
		trackSetupInput();
		isSubmitted.value = true;
		isDeferred.value = true;
		if (await deps.store.confirmAction(deps.requestId.value, false)) deps.store.resolveConfirmation(deps.requestId.value, "deferred");
		else {
			isSubmitted.value = false;
			isDeferred.value = false;
		}
	}
	function onCredentialSelected(card, updateInfo) {
		if (!card.credentialType) return;
		const credentialData = updateInfo.properties.credentials?.[card.credentialType];
		const credentialId = typeof credentialData === "object" && credentialData !== null && "id" in credentialData && typeof credentialData.id === "string" ? credentialData.id : void 0;
		const key = card.nodes[0] ? deps.credGroupKey(card.nodes[0]) : card.credentialType;
		if (credentialId) deps.setCredentialForGroup(key, card.credentialType, credentialId);
		else deps.clearCredentialForGroup(key, card.credentialType);
	}
	return {
		isSubmitted,
		isDeferred,
		isPartial,
		isApplying,
		applyError,
		handleApply,
		handleLater,
		handleTestTrigger,
		onCredentialSelected
	};
}
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiWorkflowSetup.vue?vue&type=script&setup=true&lang.ts
var InstanceAiWorkflowSetup_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiWorkflowSetup",
	props: {
		requestId: {},
		setupRequests: {},
		workflowId: {},
		message: {},
		projectId: {},
		credentialFlow: {}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const store = useInstanceAiStore();
		const credentialsStore = useCredentialsStore();
		const workflowsStore = useWorkflowsStore();
		const nodeTypesStore = useNodeTypesStore();
		const rootStore = useRootStore();
		const ndvStore = useNDVStore();
		const { isCredentialTypeTestable, testCredentialInBackground, getEffectiveCredTestResult, getCredTestIcon } = useCredentialTesting((card) => getCardCredentialId(card));
		const { credGroupSelections, activeCredentialTarget, initCredGroupSelections: _initCredGroupSelections, getCardCredentialId, isFirstCardInCredGroup, setCredentialForGroup, clearCredentialForGroup, cardHasExistingCredentials, openNewCredentialForSection } = useCredentialGroupSelection(computed(() => cards.value), testCredentialInBackground, props.projectId);
		const { trackedParamNames, cards, displayCards, cardHasParamWork, isCardComplete, isDisplayCardComplete, anyCardComplete, allPreResolved, getGroupPrimaryTriggerCard } = useSetupCards(toRef(props, "setupRequests"), getCardCredentialId, isCredentialTypeTestable);
		_initCredGroupSelections();
		const { paramValues: _paramValues, getCardSimpleParameters, getCardNestedParameterCount, onParameterValueChanged, buildNodeParameters } = useSetupCardParameters(cards, trackedParamNames, cardHasParamWork);
		const isStoreReady = ref(false);
		const showFullWizard = ref(false);
		const totalSteps = computed(() => displayCards.value.length);
		const { currentStepIndex, isPrevDisabled, isNextDisabled, goToNext, goToPrev, goToStep } = useWizardNavigation({ totalSteps });
		const currentDisplayCard = computed(() => displayCards.value[currentStepIndex.value]);
		const currentCard = computed(() => {
			const dc = currentDisplayCard.value;
			if (!dc) return void 0;
			if (dc.type === "single") return dc.card;
			return dc.group.parentCard ?? dc.group.subnodeCards[0];
		});
		const showArrows = computed(() => totalSteps.value > 1);
		function buildNodeCredentials() {
			const result = {};
			for (const card of cards.value) {
				if (!card.credentialType) continue;
				const selectedId = getCardCredentialId(card);
				if (!selectedId) continue;
				const testResult = getEffectiveCredTestResult(card);
				if (testResult !== void 0 && !testResult.success) continue;
				for (const req of card.nodes) {
					if (!result[req.node.name]) result[req.node.name] = {};
					result[req.node.name][card.credentialType] = selectedId;
				}
			}
			return result;
		}
		const { isSubmitted, isDeferred, isPartial, isApplying, applyError, handleApply, handleLater, handleTestTrigger, onCredentialSelected } = useSetupActions({
			requestId: toRef(props, "requestId"),
			store,
			cards,
			currentDisplayCard,
			displayCards,
			buildNodeCredentials,
			buildNodeParameters,
			isCardComplete,
			anyCardComplete,
			allPreResolved,
			showFullWizard,
			setCredentialForGroup,
			clearCredentialForGroup,
			goToNext,
			isNextDisabled,
			credGroupKey,
			setupRequests: toRef(props, "setupRequests"),
			onApplySuccess: () => {
				previousWorkflow = null;
			}
		});
		const currentCardNode = computed(() => {
			if (!currentCard.value) return null;
			return workflowsStore.getNodeByName(currentCard.value.nodes[0].node.name) ?? null;
		});
		provide(ExpressionLocalResolveContextSymbol, useExpressionResolveCtx(currentCardNode));
		const ExpressionContextProvider = defineComponent({
			props: { nodeName: {
				type: String,
				required: true
			} },
			setup(providerProps, { slots }) {
				provide(ExpressionLocalResolveContextSymbol, useExpressionResolveCtx(computed(() => workflowsStore.getNodeByName(providerProps.nodeName) ?? null)));
				return () => slots.default?.();
			}
		});
		let previousWorkflow = null;
		const triggerTestResults = computed(() => {
			const results = {};
			for (const req of props.setupRequests) if (req.triggerTestResult) results[req.node.name] = req.triggerTestResult;
			return results;
		});
		function getTriggerResult(card) {
			const triggerNode = card.nodes.find((n) => n.isTrigger);
			return triggerNode ? triggerTestResults.value[triggerNode.node.name] : void 0;
		}
		function isTriggerTestDisabled(card) {
			if (card.credentialType && !getCardCredentialId(card)) return true;
			const testResult = getEffectiveCredTestResult(card);
			if (testResult !== void 0 && !testResult.success) return true;
			if (cardHasParamWork(card)) for (const req of card.nodes) {
				const storeNode = workflowsStore.getNodeByName(req.node.name);
				if (storeNode) {
					const liveIssues = getNodeParametersIssues(nodeTypesStore, storeNode);
					if (Object.keys(liveIssues).length > 0) return true;
				}
			}
			return false;
		}
		const userNavigated = ref(false);
		function wrappedGoToNext() {
			userNavigated.value = true;
			goToNext();
		}
		function wrappedGoToPrev() {
			userNavigated.value = true;
			goToPrev();
		}
		watch(() => currentDisplayCard.value && isDisplayCardComplete(currentDisplayCard.value), (complete, prevComplete) => {
			if (!complete || prevComplete || userNavigated.value) {
				userNavigated.value = false;
				return;
			}
			const nextIncomplete = displayCards.value.findIndex((dc, idx) => idx > currentStepIndex.value && !isDisplayCardComplete(dc));
			if (nextIncomplete >= 0) goToStep(nextIncomplete);
		});
		const stopDeleteListener = credentialsStore.$onAction(({ name, after, args }) => {
			if (name !== "deleteCredential") return;
			after(() => {
				const deletedId = args[0].id;
				for (const [key, selectedId] of Object.entries(credGroupSelections.value)) {
					if (selectedId !== deletedId) continue;
					const groupCard = cards.value.find((c) => c.credentialType && c.nodes[0] && credGroupKey(c.nodes[0]) === key);
					if (groupCard?.credentialType) clearCredentialForGroup(key, groupCard.credentialType);
					else credGroupSelections.value[key] = null;
				}
			});
		});
		const stopCreateListener = credentialsStore.$onAction(({ name, after }) => {
			if (name !== "createNewCredential") return;
			after((newCred) => {
				if (!newCred || typeof newCred !== "object" || !("id" in newCred)) return;
				const cred = newCred;
				if (activeCredentialTarget.value && cred.type === activeCredentialTarget.value.credentialType) {
					setCredentialForGroup(activeCredentialTarget.value.groupKey, activeCredentialTarget.value.credentialType, cred.id);
					activeCredentialTarget.value = null;
					return;
				}
				const dc = currentDisplayCard.value;
				if (dc?.type === "single" && dc.card.credentialType === cred.type) setCredentialForGroup(dc.card.nodes[0] ? credGroupKey(dc.card.nodes[0]) : dc.card.credentialType, cred.type, cred.id);
				activeCredentialTarget.value = null;
			});
		});
		onUnmounted(() => {
			stopDeleteListener();
			stopCreateListener();
			if (previousWorkflow) workflowsStore.setWorkflow(previousWorkflow);
		});
		onMounted(async () => {
			const nodeInfos = props.setupRequests.map((req) => ({
				name: req.node.type,
				version: req.node.typeVersion
			})).filter((info, i, arr) => arr.findIndex((x) => x.name === info.name && x.version === info.version) === i);
			try {
				await Promise.all([
					credentialsStore.fetchAllCredentials(),
					credentialsStore.fetchCredentialTypes(false),
					nodeTypesStore.getNodesInformation(nodeInfos)
				]);
			} catch (error) {
				console.warn("Failed to preload credentials/node types for Instance AI workflow setup", error);
			}
			try {
				const workflowData = await getWorkflow(rootStore.restApiContext, props.workflowId);
				previousWorkflow = { ...workflowsStore.workflow };
				workflowsStore.setWorkflow(workflowData);
			} catch (error) {
				console.warn("Failed to fetch workflow for Instance AI setup", error);
			}
			isStoreReady.value = true;
			const testedIds = /* @__PURE__ */ new Set();
			for (const card of cards.value) {
				if (!card.credentialType) continue;
				const selectedId = getCardCredentialId(card);
				if (!selectedId || testedIds.has(selectedId)) continue;
				testedIds.add(selectedId);
				const cred = card.nodes[0].existingCredentials?.find((c) => c.id === selectedId) ?? credentialsStore.getCredentialById(selectedId);
				if (cred) testCredentialInBackground(selectedId, cred.name, card.credentialType);
			}
			const firstIncomplete = displayCards.value.findIndex((dc) => !isDisplayCardComplete(dc));
			if (firstIncomplete > 0) goToStep(firstIncomplete);
		});
		function getDisplayName(credentialType) {
			const appName = getAppNameFromCredType(credentialsStore.getCredentialTypeByName(credentialType)?.displayName ?? credentialType);
			return i18n.baseText("instanceAi.credential.setupTitle", { interpolate: { name: appName } });
		}
		function getCardTitle(card) {
			if (card.nodes.length === 1) return card.nodes[0].node.name;
			if (card.credentialType) return getDisplayName(card.credentialType);
			return "Setup";
		}
		function cardNodeUi(card) {
			const node = toNodeUi(card.nodes[0]);
			const selectedId = card.credentialType ? getCardCredentialId(card) : void 0;
			if (selectedId && card.credentialType) {
				const cred = card.nodes[0].existingCredentials?.find((c) => c.id === selectedId) ?? credentialsStore.getCredentialById(selectedId);
				if (cred) node.credentials = {
					...node.credentials,
					[card.credentialType]: {
						id: cred.id,
						name: cred.name
					}
				};
			}
			return node;
		}
		function isTriggerOnly$1(card) {
			return isTriggerOnly(card, cardHasParamWork);
		}
		function useCredentialIcon(card) {
			return shouldUseCredentialIcon(card, cardHasParamWork);
		}
		function openNdv(card) {
			ndvStore.setActiveNodeName(card.nodes[0].node.name, "other");
		}
		const nodeNames = computed(() => {
			const card = currentCard.value;
			if (!card) return [];
			return card.nodes.map((n) => n.node.name);
		});
		const nodeNamesTooltip = computed(() => nodeNames.value.join(", "));
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [!unref(isSubmitted) && !unref(isApplying) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [unref(allPreResolved) && !showFullWizard.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				"data-test-id": "instance-ai-workflow-setup-confirm",
				class: normalizeClass(_ctx.$style.confirmCard)
			}, [
				createBaseVNode("header", { class: normalizeClass(_ctx.$style.header) }, [createVNode(unref(N8nIcon_default), {
					icon: "check",
					size: "small",
					class: normalizeClass(_ctx.$style.success)
				}, null, 8, ["class"]), createVNode(unref(N8nText_default), {
					class: normalizeClass(_ctx.$style.title),
					size: "medium",
					color: "text-dark",
					bold: ""
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.workflowSetup.confirmTitle")), 1)]),
					_: 1
				}, 8, ["class"])], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.confirmSummary) }, [createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.workflowSetup.confirmDescription", { interpolate: { count: String(unref(cards).length) } })), 1)]),
					_: 1
				}), createBaseVNode("ul", { class: normalizeClass(_ctx.$style.confirmList) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(cards), (card) => {
					return openBlock(), createElementBlock("li", {
						key: card.id,
						class: normalizeClass(_ctx.$style.confirmItem)
					}, [useCredentialIcon(card) ? (openBlock(), createBlock(CredentialIcon_default, {
						key: 0,
						"credential-type-name": card.credentialType,
						size: 14
					}, null, 8, ["credential-type-name"])) : (openBlock(), createBlock(unref(N8nIcon_default), {
						key: 1,
						icon: "check",
						size: "xsmall",
						class: normalizeClass(_ctx.$style.success)
					}, null, 8, ["class"])), createVNode(unref(N8nText_default), { size: "small" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(getCardTitle(card)), 1)]),
						_: 2
					}, 1024)], 2);
				}), 128))], 2)], 2),
				createVNode(ConfirmationFooter_default, { layout: "row-between" }, {
					default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.footerNav) }, [createVNode(unref(N8nLink_default), {
						"data-test-id": "instance-ai-workflow-setup-review-details",
						underline: true,
						theme: "text",
						size: "small",
						onClick: _cache[0] || (_cache[0] = ($event) => showFullWizard.value = true)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.workflowSetup.reviewDetails")), 1)]),
						_: 1
					})], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.footerActions) }, [createVNode(unref(N8nButton_default), {
						variant: "outline",
						size: "medium",
						class: normalizeClass(_ctx.$style.actionButton),
						label: unref(i18n).baseText("instanceAi.workflowSetup.later"),
						"data-test-id": "instance-ai-workflow-setup-later",
						onClick: unref(handleLater)
					}, null, 8, [
						"class",
						"label",
						"onClick"
					]), createVNode(unref(N8nButton_default), {
						size: "medium",
						class: normalizeClass(_ctx.$style.actionButton),
						label: unref(i18n).baseText("instanceAi.credential.continueButton"),
						"data-test-id": "instance-ai-workflow-setup-apply-button",
						onClick: unref(handleApply)
					}, null, 8, [
						"class",
						"label",
						"onClick"
					])], 2)]),
					_: 1
				})
			], 2)) : currentDisplayCard.value?.type === "single" && currentCard.value ? (openBlock(), createElementBlock("div", {
				key: 1,
				"data-test-id": "instance-ai-workflow-setup-card",
				class: normalizeClass(_ctx.$style.card)
			}, [
				createBaseVNode("header", { class: normalizeClass(_ctx.$style.header) }, [
					useCredentialIcon(currentCard.value) ? (openBlock(), createBlock(CredentialIcon_default, {
						key: 0,
						"credential-type-name": currentCard.value.credentialType,
						size: 16
					}, null, 8, ["credential-type-name"])) : (openBlock(), createBlock(unref(N8nIcon_default), {
						key: 1,
						icon: "play",
						size: "small"
					})),
					createVNode(unref(N8nText_default), {
						class: normalizeClass(_ctx.$style.title),
						size: "medium",
						color: "text-dark",
						bold: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(getCardTitle(currentCard.value)), 1)]),
						_: 1
					}, 8, ["class"]),
					unref(getCredTestIcon)(currentCard.value) === "spinner" ? (openBlock(), createBlock(unref(N8nIcon_default), {
						key: 2,
						icon: "spinner",
						color: "primary",
						size: "small",
						class: normalizeClass(_ctx.$style.loading)
					}, null, 8, ["class"])) : unref(getCredTestIcon)(currentCard.value) === "check" ? (openBlock(), createBlock(unref(N8nIcon_default), {
						key: 3,
						icon: "check",
						size: "small",
						class: normalizeClass(_ctx.$style.success)
					}, null, 8, ["class"])) : unref(getCredTestIcon)(currentCard.value) === "triangle-alert" ? (openBlock(), createBlock(unref(N8nIcon_default), {
						key: 4,
						icon: "triangle-alert",
						size: "small",
						class: normalizeClass(_ctx.$style.error)
					}, null, 8, ["class"])) : createCommentVNode("", true),
					unref(isCardComplete)(currentCard.value) ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 5,
						"data-test-id": "instance-ai-workflow-setup-step-check",
						class: normalizeClass(_ctx.$style.completeLabel),
						size: "medium",
						color: "success"
					}, {
						default: withCtx(() => [createVNode(unref(N8nIcon_default), {
							icon: "check",
							size: "large"
						}), createTextVNode(" " + toDisplayString(unref(i18n).baseText("generic.complete")), 1)]),
						_: 1
					}, 8, ["class"])) : createCommentVNode("", true)
				], 2),
				!isTriggerOnly$1(currentCard.value) ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.content)
				}, [
					currentCard.value.credentialType && isStoreReady.value && unref(isFirstCardInCredGroup)(currentCard.value) ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.credentialContainer)
					}, [unref(cardHasExistingCredentials)(currentCard.value) ? (openBlock(), createBlock(NodeCredentials_default, {
						key: 0,
						node: cardNodeUi(currentCard.value),
						"override-cred-type": currentCard.value.credentialType,
						"project-id": __props.projectId,
						standalone: "",
						"hide-issues": "",
						onCredentialSelected: _cache[1] || (_cache[1] = ($event) => unref(onCredentialSelected)(currentCard.value, $event))
					}, createSlots({ _: 2 }, [nodeNames.value.length > 1 ? {
						name: "label-postfix",
						fn: withCtx(() => [createVNode(unref(N8nTooltip_default), { placement: "top" }, {
							content: withCtx(() => [createTextVNode(toDisplayString(nodeNamesTooltip.value), 1)]),
							default: withCtx(() => [createVNode(unref(N8nText_default), {
								"data-test-id": "instance-ai-workflow-setup-nodes-hint",
								size: "small",
								color: "text-light"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.workflowSetup.usedByNodes", {
									adjustToNumber: nodeNames.value.length,
									interpolate: { count: String(nodeNames.value.length) }
								})), 1)]),
								_: 1
							})]),
							_: 1
						})]),
						key: "0"
					} : void 0]), 1032, [
						"node",
						"override-cred-type",
						"project-id"
					])) : (openBlock(), createBlock(unref(N8nButton_default), {
						key: 1,
						label: unref(i18n).baseText("instanceAi.credential.setupButton"),
						"data-test-id": "instance-ai-workflow-setup-credential-button",
						onClick: _cache[2] || (_cache[2] = ($event) => unref(openNewCredentialForSection)(currentCard.value.credentialType, currentCard.value.nodes[0] ? unref(credGroupKey)(currentCard.value.nodes[0]) : currentCard.value.credentialType))
					}, null, 8, ["label"]))], 2)) : createCommentVNode("", true),
					unref(cardHasParamWork)(currentCard.value) && unref(getCardSimpleParameters)(currentCard.value).length > 0 ? (openBlock(), createBlock(ParameterInputList_default, {
						key: 1,
						parameters: unref(getCardSimpleParameters)(currentCard.value),
						"node-values": { parameters: currentCardNode.value?.parameters ?? {} },
						node: currentCardNode.value ?? void 0,
						"hide-delete": true,
						"remove-first-parameter-margin": true,
						path: "parameters",
						"options-overrides": {
							hideExpressionSelector: true,
							hideFocusPanelButton: true
						},
						onValueChanged: _cache[3] || (_cache[3] = ($event) => unref(onParameterValueChanged)(currentCard.value, $event))
					}, null, 8, [
						"parameters",
						"node-values",
						"node"
					])) : createCommentVNode("", true),
					unref(cardHasParamWork)(currentCard.value) && unref(getCardNestedParameterCount)(currentCard.value) > 0 ? (openBlock(), createBlock(unref(N8nLink_default), {
						key: 2,
						"data-test-id": "instance-ai-workflow-setup-configure-link",
						underline: true,
						theme: "text",
						size: "medium",
						onClick: _cache[4] || (_cache[4] = ($event) => openNdv(currentCard.value))
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.workflowSetup.configureParameters", {
							adjustToNumber: unref(getCardNestedParameterCount)(currentCard.value),
							interpolate: { count: String(unref(getCardNestedParameterCount)(currentCard.value)) }
						})), 1)]),
						_: 1
					})) : createCommentVNode("", true)
				], 2)) : createCommentVNode("", true),
				currentCard.value.isTrigger && currentCard.value.isFirstTrigger && getTriggerResult(currentCard.value)?.status === "listening" ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.listeningCallout)
				}, [createVNode(unref(N8nIcon_default), {
					icon: "spinner",
					color: "primary",
					spin: "",
					size: "small",
					class: normalizeClass(_ctx.$style.loading)
				}, null, 8, ["class"]), createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.workflowSetup.triggerListening")), 1)]),
					_: 1
				})], 2)) : createCommentVNode("", true),
				unref(applyError) ? (openBlock(), createElementBlock("div", {
					key: 2,
					class: normalizeClass(_ctx.$style.errorBanner)
				}, [createVNode(unref(N8nIcon_default), {
					icon: "triangle-alert",
					size: "small",
					class: normalizeClass(_ctx.$style.error)
				}, null, 8, ["class"]), createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-dark"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(applyError)), 1)]),
					_: 1
				})], 2)) : createCommentVNode("", true),
				createVNode(ConfirmationFooter_default, { layout: "row-between" }, {
					default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.footerNav) }, [
						showArrows.value ? (openBlock(), createBlock(unref(N8nButton_default), {
							key: 0,
							variant: "ghost",
							size: "xsmall",
							"icon-only": "",
							disabled: unref(isPrevDisabled),
							"data-test-id": "instance-ai-workflow-setup-prev",
							"aria-label": "Previous step",
							onClick: wrappedGoToPrev
						}, {
							default: withCtx(() => [createVNode(unref(N8nIcon_default), {
								icon: "chevron-left",
								size: "xsmall"
							})]),
							_: 1
						}, 8, ["disabled"])) : createCommentVNode("", true),
						createVNode(unref(N8nText_default), {
							size: "small",
							color: "text-light"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(currentStepIndex) + 1) + " of " + toDisplayString(totalSteps.value), 1)]),
							_: 1
						}),
						showArrows.value ? (openBlock(), createBlock(unref(N8nButton_default), {
							key: 1,
							variant: "ghost",
							size: "xsmall",
							"icon-only": "",
							disabled: unref(isNextDisabled),
							"data-test-id": "instance-ai-workflow-setup-next",
							"aria-label": "Next step",
							onClick: wrappedGoToNext
						}, {
							default: withCtx(() => [createVNode(unref(N8nIcon_default), {
								icon: "chevron-right",
								size: "xsmall"
							})]),
							_: 1
						}, 8, ["disabled"])) : createCommentVNode("", true)
					], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.footerActions) }, [
						createVNode(unref(N8nButton_default), {
							variant: "outline",
							size: "medium",
							class: normalizeClass(_ctx.$style.actionButton),
							label: unref(i18n).baseText("instanceAi.workflowSetup.later"),
							"data-test-id": "instance-ai-workflow-setup-later",
							onClick: unref(handleLater)
						}, null, 8, [
							"class",
							"label",
							"onClick"
						]),
						currentCard.value.isTestable && currentCard.value.isTrigger && currentCard.value.isFirstTrigger ? (openBlock(), createBlock(unref(N8nButton_default), {
							key: 0,
							size: "medium",
							class: normalizeClass(_ctx.$style.actionButton),
							label: unref(i18n).baseText("instanceAi.workflowSetup.testTrigger"),
							disabled: isTriggerTestDisabled(currentCard.value),
							"data-test-id": "instance-ai-workflow-setup-test-trigger",
							onClick: _cache[5] || (_cache[5] = ($event) => unref(handleTestTrigger)(currentCard.value.nodes.find((n) => n.isTrigger).node.name))
						}, null, 8, [
							"class",
							"label",
							"disabled"
						])) : createCommentVNode("", true),
						createVNode(unref(N8nButton_default), {
							size: "medium",
							class: normalizeClass(_ctx.$style.actionButton),
							disabled: !unref(anyCardComplete),
							label: unref(i18n).baseText("instanceAi.credential.continueButton"),
							"data-test-id": "instance-ai-workflow-setup-apply-button",
							onClick: unref(handleApply)
						}, null, 8, [
							"class",
							"disabled",
							"label",
							"onClick"
						])
					], 2)]),
					_: 1
				})
			], 2)) : currentDisplayCard.value?.type === "group" ? (openBlock(), createElementBlock("div", {
				key: 2,
				"data-test-id": "instance-ai-workflow-setup-card",
				class: normalizeClass([_ctx.$style.card, { [_ctx.$style.completed]: unref(isDisplayCardComplete)(currentDisplayCard.value) }])
			}, [
				createBaseVNode("header", { class: normalizeClass(_ctx.$style.header) }, [
					createVNode(unref(N8nIcon_default), {
						icon: "robot",
						size: "small"
					}),
					createVNode(unref(N8nText_default), {
						class: normalizeClass(_ctx.$style.title),
						size: "medium",
						color: "text-dark",
						bold: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(currentDisplayCard.value.group.parentNode.name), 1)]),
						_: 1
					}, 8, ["class"]),
					unref(isDisplayCardComplete)(currentDisplayCard.value) ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 0,
						"data-test-id": "instance-ai-workflow-setup-step-check",
						class: normalizeClass(_ctx.$style.completeLabel),
						size: "medium",
						color: "success"
					}, {
						default: withCtx(() => [createVNode(unref(N8nIcon_default), {
							icon: "check",
							size: "large"
						}), createTextVNode(" " + toDisplayString(unref(i18n).baseText("generic.complete")), 1)]),
						_: 1
					}, 8, ["class"])) : createCommentVNode("", true)
				], 2),
				currentDisplayCard.value.group.parentCard ? (openBlock(), createBlock(unref(ExpressionContextProvider), {
					key: 0,
					"node-name": currentDisplayCard.value.group.parentNode.name
				}, {
					default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [currentDisplayCard.value.group.parentCard.credentialType && isStoreReady.value && unref(isFirstCardInCredGroup)(currentDisplayCard.value.group.parentCard) ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.credentialContainer)
					}, [unref(cardHasExistingCredentials)(currentDisplayCard.value.group.parentCard) ? (openBlock(), createBlock(NodeCredentials_default, {
						key: 0,
						node: cardNodeUi(currentDisplayCard.value.group.parentCard),
						"override-cred-type": currentDisplayCard.value.group.parentCard.credentialType,
						"project-id": __props.projectId,
						standalone: "",
						"hide-issues": "",
						onCredentialSelected: _cache[6] || (_cache[6] = ($event) => unref(onCredentialSelected)(currentDisplayCard.value.group.parentCard, $event))
					}, null, 8, [
						"node",
						"override-cred-type",
						"project-id"
					])) : (openBlock(), createBlock(unref(N8nButton_default), {
						key: 1,
						label: unref(i18n).baseText("instanceAi.credential.setupButton"),
						onClick: _cache[7] || (_cache[7] = ($event) => unref(openNewCredentialForSection)(currentDisplayCard.value.group.parentCard.credentialType, currentDisplayCard.value.group.parentCard.nodes[0] ? unref(credGroupKey)(currentDisplayCard.value.group.parentCard.nodes[0]) : currentDisplayCard.value.group.parentCard.credentialType))
					}, null, 8, ["label"]))], 2)) : createCommentVNode("", true), unref(cardHasParamWork)(currentDisplayCard.value.group.parentCard) && unref(getCardSimpleParameters)(currentDisplayCard.value.group.parentCard).length > 0 ? (openBlock(), createBlock(ParameterInputList_default, {
						key: 1,
						parameters: unref(getCardSimpleParameters)(currentDisplayCard.value.group.parentCard),
						"node-values": { parameters: unref(workflowsStore).getNodeByName(currentDisplayCard.value.group.parentNode.name)?.parameters ?? {} },
						node: unref(workflowsStore).getNodeByName(currentDisplayCard.value.group.parentNode.name) ?? void 0,
						"hide-delete": true,
						"remove-first-parameter-margin": true,
						path: "parameters",
						"options-overrides": {
							hideExpressionSelector: true,
							hideFocusPanelButton: true
						},
						onValueChanged: _cache[8] || (_cache[8] = ($event) => unref(onParameterValueChanged)(currentDisplayCard.value.group.parentCard, $event))
					}, null, 8, [
						"parameters",
						"node-values",
						"node"
					])) : createCommentVNode("", true)], 2)]),
					_: 1
				}, 8, ["node-name"])) : createCommentVNode("", true),
				(openBlock(true), createElementBlock(Fragment, null, renderList(currentDisplayCard.value.group.subnodeCards, (subnodeCard) => {
					return openBlock(), createElementBlock("div", { key: subnodeCard.id }, [createVNode(unref(ExpressionContextProvider), { "node-name": subnodeCard.nodes[0].node.name }, {
						default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [
							createVNode(unref(N8nText_default), {
								size: "small",
								color: "text-light",
								bold: ""
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(subnodeCard.nodes[0].node.name), 1)]),
								_: 2
							}, 1024),
							subnodeCard.credentialType && isStoreReady.value && unref(isFirstCardInCredGroup)(subnodeCard) ? (openBlock(), createElementBlock("div", {
								key: 0,
								class: normalizeClass(_ctx.$style.credentialContainer)
							}, [unref(cardHasExistingCredentials)(subnodeCard) ? (openBlock(), createBlock(NodeCredentials_default, {
								key: 0,
								node: cardNodeUi(subnodeCard),
								"override-cred-type": subnodeCard.credentialType,
								"project-id": __props.projectId,
								standalone: "",
								"hide-issues": "",
								onCredentialSelected: ($event) => unref(onCredentialSelected)(subnodeCard, $event)
							}, null, 8, [
								"node",
								"override-cred-type",
								"project-id",
								"onCredentialSelected"
							])) : (openBlock(), createBlock(unref(N8nButton_default), {
								key: 1,
								label: unref(i18n).baseText("instanceAi.credential.setupButton"),
								onClick: ($event) => unref(openNewCredentialForSection)(subnodeCard.credentialType, subnodeCard.nodes[0] ? unref(credGroupKey)(subnodeCard.nodes[0]) : subnodeCard.credentialType)
							}, null, 8, ["label", "onClick"]))], 2)) : createCommentVNode("", true),
							unref(cardHasParamWork)(subnodeCard) && unref(getCardSimpleParameters)(subnodeCard).length > 0 ? (openBlock(), createBlock(ParameterInputList_default, {
								key: 1,
								parameters: unref(getCardSimpleParameters)(subnodeCard),
								"node-values": { parameters: unref(workflowsStore).getNodeByName(subnodeCard.nodes[0].node.name)?.parameters ?? {} },
								node: unref(workflowsStore).getNodeByName(subnodeCard.nodes[0].node.name) ?? void 0,
								"hide-delete": true,
								"remove-first-parameter-margin": true,
								path: "parameters",
								"options-overrides": {
									hideExpressionSelector: true,
									hideFocusPanelButton: true
								},
								onValueChanged: ($event) => unref(onParameterValueChanged)(subnodeCard, $event)
							}, null, 8, [
								"parameters",
								"node-values",
								"node",
								"onValueChanged"
							])) : createCommentVNode("", true)
						], 2)]),
						_: 2
					}, 1032, ["node-name"])]);
				}), 128)),
				unref(getGroupPrimaryTriggerCard)(currentDisplayCard.value.group)?.isTrigger && unref(getGroupPrimaryTriggerCard)(currentDisplayCard.value.group)?.isFirstTrigger && getTriggerResult(unref(getGroupPrimaryTriggerCard)(currentDisplayCard.value.group))?.status === "listening" ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.listeningCallout)
				}, [createVNode(unref(N8nIcon_default), {
					icon: "spinner",
					color: "primary",
					spin: "",
					size: "small",
					class: normalizeClass(_ctx.$style.loading)
				}, null, 8, ["class"]), createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.workflowSetup.triggerListening")), 1)]),
					_: 1
				})], 2)) : createCommentVNode("", true),
				unref(applyError) ? (openBlock(), createElementBlock("div", {
					key: 2,
					class: normalizeClass(_ctx.$style.errorBanner)
				}, [createVNode(unref(N8nIcon_default), {
					icon: "triangle-alert",
					size: "small",
					class: normalizeClass(_ctx.$style.error)
				}, null, 8, ["class"]), createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-dark"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(applyError)), 1)]),
					_: 1
				})], 2)) : createCommentVNode("", true),
				createVNode(ConfirmationFooter_default, { layout: "row-between" }, {
					default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.footerNav) }, [
						showArrows.value ? (openBlock(), createBlock(unref(N8nButton_default), {
							key: 0,
							variant: "ghost",
							size: "xsmall",
							"icon-only": "",
							disabled: unref(isPrevDisabled),
							"data-test-id": "instance-ai-workflow-setup-prev",
							"aria-label": "Previous step",
							onClick: wrappedGoToPrev
						}, {
							default: withCtx(() => [createVNode(unref(N8nIcon_default), {
								icon: "chevron-left",
								size: "xsmall"
							})]),
							_: 1
						}, 8, ["disabled"])) : createCommentVNode("", true),
						createVNode(unref(N8nText_default), {
							size: "small",
							color: "text-light"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(currentStepIndex) + 1) + " of " + toDisplayString(totalSteps.value), 1)]),
							_: 1
						}),
						showArrows.value ? (openBlock(), createBlock(unref(N8nButton_default), {
							key: 1,
							variant: "ghost",
							size: "xsmall",
							"icon-only": "",
							disabled: unref(isNextDisabled),
							"data-test-id": "instance-ai-workflow-setup-next",
							"aria-label": "Next step",
							onClick: wrappedGoToNext
						}, {
							default: withCtx(() => [createVNode(unref(N8nIcon_default), {
								icon: "chevron-right",
								size: "xsmall"
							})]),
							_: 1
						}, 8, ["disabled"])) : createCommentVNode("", true)
					], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.footerActions) }, [
						createVNode(unref(N8nButton_default), {
							variant: "outline",
							size: "small",
							class: normalizeClass(_ctx.$style.actionButton),
							label: unref(i18n).baseText("instanceAi.workflowSetup.later"),
							"data-test-id": "instance-ai-workflow-setup-later",
							onClick: unref(handleLater)
						}, null, 8, [
							"class",
							"label",
							"onClick"
						]),
						unref(getGroupPrimaryTriggerCard)(currentDisplayCard.value.group)?.isTestable && unref(getGroupPrimaryTriggerCard)(currentDisplayCard.value.group)?.isTrigger ? (openBlock(), createBlock(unref(N8nButton_default), {
							key: 0,
							size: "small",
							class: normalizeClass(_ctx.$style.actionButton),
							label: unref(i18n).baseText("instanceAi.workflowSetup.testTrigger"),
							disabled: isTriggerTestDisabled(unref(getGroupPrimaryTriggerCard)(currentDisplayCard.value.group)),
							"data-test-id": "instance-ai-workflow-setup-test-trigger",
							onClick: _cache[9] || (_cache[9] = ($event) => unref(handleTestTrigger)(unref(getGroupPrimaryTriggerCard)(currentDisplayCard.value.group).nodes.find((n) => n.isTrigger).node.name))
						}, null, 8, [
							"class",
							"label",
							"disabled"
						])) : createCommentVNode("", true),
						createVNode(unref(N8nButton_default), {
							size: "small",
							class: normalizeClass(_ctx.$style.actionButton),
							disabled: !unref(anyCardComplete),
							label: unref(i18n).baseText("instanceAi.credential.continueButton"),
							"data-test-id": "instance-ai-workflow-setup-apply-button",
							onClick: unref(handleApply)
						}, null, 8, [
							"class",
							"disabled",
							"label",
							"onClick"
						])
					], 2)]),
					_: 1
				})
			], 2)) : createCommentVNode("", true)], 64)) : unref(isApplying) ? (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.submitted)
			}, [createVNode(unref(N8nIcon_default), {
				icon: "spinner",
				color: "primary",
				spin: "",
				size: "small",
				class: normalizeClass(_ctx.$style.loading)
			}, null, 8, ["class"]), createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("instanceAi.workflowSetup.applying")), 1)], 2)) : (openBlock(), createElementBlock("div", {
				key: 2,
				class: normalizeClass(_ctx.$style.submitted)
			}, [unref(isDeferred) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createVNode(unref(N8nIcon_default), {
				icon: "arrow-right",
				size: "small",
				class: normalizeClass(_ctx.$style.skippedIcon)
			}, null, 8, ["class"]), createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("instanceAi.workflowSetup.deferred")), 1)], 64)) : unref(isPartial) ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [createVNode(unref(N8nIcon_default), {
				icon: "check",
				size: "small",
				class: normalizeClass(_ctx.$style.partialIcon)
			}, null, 8, ["class"]), createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("instanceAi.workflowSetup.partiallyApplied")), 1)], 64)) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [createVNode(unref(N8nIcon_default), {
				icon: "check",
				size: "small",
				class: normalizeClass(_ctx.$style.successIcon)
			}, null, 8, ["class"]), createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("instanceAi.workflowSetup.applied")), 1)], 64))], 2))]);
		};
	}
});
var InstanceAiWorkflowSetup_vue_vue_type_style_index_0_lang_module_default = {
	card: "_card_18yjv_125",
	confirmCard: "_confirmCard_18yjv_136",
	confirmSummary: "_confirmSummary_18yjv_147",
	confirmList: "_confirmList_18yjv_154",
	confirmItem: "_confirmItem_18yjv_163",
	header: "_header_18yjv_169",
	title: "_title_18yjv_176",
	completeLabel: "_completeLabel_18yjv_180",
	content: "_content_18yjv_187",
	credentialContainer: "_credentialContainer_18yjv_194",
	listeningCallout: "_listeningCallout_18yjv_202",
	errorBanner: "_errorBanner_18yjv_209",
	footerNav: "_footerNav_18yjv_219",
	footerActions: "_footerActions_18yjv_226",
	actionButton: "_actionButton_18yjv_232",
	success: "_success_18yjv_236",
	error: "_error_18yjv_209",
	loading: "_loading_18yjv_244",
	spin: "_spin_18yjv_1",
	submitted: "_submitted_18yjv_257",
	successIcon: "_successIcon_18yjv_265",
	partialIcon: "_partialIcon_18yjv_269",
	skippedIcon: "_skippedIcon_18yjv_273"
};
var InstanceAiWorkflowSetup_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiWorkflowSetup_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiWorkflowSetup_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiConfirmationPanel.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = { key: 1 };
/** Items that need the "Agent needs approval" wrapper (generic approvals, domain access). */
var InstanceAiConfirmationPanel_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiConfirmationPanel",
	setup(__props) {
		const store = useInstanceAiStore();
		const i18n = useI18n();
		const rootStore = useRootStore();
		const telemetry = useTelemetry();
		const { getToolLabel } = useToolLabel();
		function getConfirmationType(conf) {
			if (conf.inputType) return conf.inputType;
			if (conf.setupRequests?.length) return "setup";
			if (conf.credentialRequests?.length) return "credential-setup";
			return "approval";
		}
		function trackInputCompleted(conf, providedInputs, skippedInputs, extra) {
			const eventProps = {
				thread_id: store.currentThreadId,
				input_thread_id: conf.inputThreadId ?? "",
				instance_id: rootStore.instanceId,
				type: getConfirmationType(conf),
				provided_inputs: providedInputs,
				skipped_inputs: skippedInputs,
				...extra
			};
			telemetry.track("User finished providing input", eventProps);
		}
		const ROLE_LABELS = {
			orchestrator: "Agent",
			"workflow-builder": "Workflow Builder",
			"data-table-manager": "Data Table Manager",
			researcher: "Researcher"
		};
		function getRoleLabel(role) {
			return ROLE_LABELS[role] ?? role;
		}
		function isApprovalWrapped(item) {
			const conf = item.toolCall.confirmation;
			if (conf.domainAccess) return true;
			if (!conf.credentialRequests?.length && !conf.setupRequests?.length && !conf.inputType && !conf.questions) return true;
			return false;
		}
		/** Split confirmations into standalone items and approval-wrapped groups. */
		const chunks = computed(() => {
			const result = [];
			const wrappedByAgent = /* @__PURE__ */ new Map();
			for (const item of store.pendingConfirmations) if (isApprovalWrapped(item)) {
				const key = item.agentNode.agentId;
				let group = wrappedByAgent.get(key);
				if (!group) {
					group = {
						type: "approvalWrapped",
						agentId: key,
						role: item.agentNode.role,
						items: []
					};
					wrappedByAgent.set(key, group);
				}
				group.items.push(item);
			} else result.push({
				type: "standalone",
				item
			});
			for (const group of wrappedByAgent.values()) result.push(group);
			return result;
		});
		const textInputValues = ref({});
		function handleConfirm(item, approved) {
			const conf = item.toolCall.confirmation;
			if (store.resolvedConfirmationIds.has(conf.requestId)) return;
			trackInputCompleted(conf, [{
				label: conf.message,
				options: ["approve", "deny"],
				option_chosen: approved ? "approve" : "deny"
			}], []);
			store.resolveConfirmation(conf.requestId, approved ? "approved" : "denied");
			store.confirmAction(conf.requestId, approved);
		}
		function handleApproveAll(items) {
			for (const item of items) {
				const conf = item.toolCall.confirmation;
				if (store.resolvedConfirmationIds.has(conf.requestId)) continue;
				trackInputCompleted(conf, [{
					label: conf.message,
					options: ["approve", "deny"],
					option_chosen: "approve"
				}], []);
				store.resolveConfirmation(conf.requestId, "approved");
				store.confirmAction(conf.requestId, true);
			}
		}
		function handleTextSubmit(conf) {
			const value = (textInputValues.value[conf.requestId] ?? "").trim();
			if (!value) return;
			trackInputCompleted(conf, [{
				label: conf.message,
				question: conf.message,
				input_type: "text",
				options: [],
				option_chosen: value
			}], []);
			store.resolveConfirmation(conf.requestId, "approved");
			store.confirmAction(conf.requestId, true, void 0, void 0, void 0, value);
		}
		function handleTextSkip(conf) {
			trackInputCompleted(conf, [], [{
				label: conf.message,
				question: conf.message,
				input_type: "text",
				options: []
			}]);
			store.resolveConfirmation(conf.requestId, "deferred");
			store.confirmAction(conf.requestId, false);
		}
		function handleQuestionsSubmit(conf, answers) {
			const questionsById = new Map((conf.questions ?? []).map((q) => [q.id, q]));
			const provided = [];
			const skipped = [];
			for (const answer of answers) {
				const questionDef = questionsById.get(answer.questionId);
				const allOptions = questionDef?.options ?? [];
				const inputType = questionDef?.type ?? "text";
				if (answer.skipped) skipped.push({
					label: answer.questionId,
					question: answer.question,
					input_type: inputType,
					options: allOptions
				});
				else {
					const chosen = inputType === "multi" ? [...answer.selectedOptions, ...answer.customText ? [answer.customText] : []] : answer.customText || answer.selectedOptions[0] || "";
					provided.push({
						label: answer.questionId,
						question: answer.question,
						input_type: inputType,
						options: allOptions,
						option_chosen: chosen
					});
				}
			}
			trackInputCompleted(conf, provided, skipped, { num_tasks: answers.length });
			store.resolveConfirmation(conf.requestId, "approved");
			store.confirmAction(conf.requestId, true, void 0, void 0, void 0, void 0, void 0, void 0, answers);
		}
		function handlePlanApprove(conf, numTasks) {
			trackInputCompleted(conf, [{
				label: "plan",
				options: ["approve", "request-changes"],
				option_chosen: "approve"
			}], [], { num_tasks: numTasks });
			store.resolveConfirmation(conf.requestId, "approved");
			store.confirmAction(conf.requestId, true);
		}
		function handlePlanRequestChanges(conf, feedback, numTasks) {
			trackInputCompleted(conf, [{
				label: "plan",
				options: ["approve", "request-changes"],
				option_chosen: "request-changes"
			}], [], {
				num_tasks: numTasks,
				feedback
			});
			store.resolveConfirmation(conf.requestId, "denied");
			store.confirmAction(conf.requestId, false, void 0, void 0, void 0, feedback);
		}
		/** True when every item in the group is a generic approval (not domain/cred/text). */
		function isAllGenericApproval(items) {
			return items.every((item) => !item.toolCall.confirmation.domainAccess);
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(TransitionGroup, { name: "confirmation-slide" }, {
				default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(chunks.value, (chunk) => {
					return openBlock(), createElementBlock(Fragment, { key: chunk.type === "approvalWrapped" ? "group-" + chunk.agentId : chunk.item.toolCall.confirmation.requestId }, [chunk.type === "standalone" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [chunk.item.toolCall.confirmation.setupRequests?.length ? (openBlock(), createBlock(InstanceAiWorkflowSetup_default, {
						key: "setup-" + chunk.item.toolCall.confirmation.requestId,
						class: normalizeClass(_ctx.$style.confirmation),
						"request-id": chunk.item.toolCall.confirmation.requestId,
						"setup-requests": chunk.item.toolCall.confirmation.setupRequests,
						"workflow-id": chunk.item.toolCall.confirmation.workflowId ?? "",
						message: chunk.item.toolCall.confirmation.message,
						"project-id": chunk.item.toolCall.confirmation.projectId,
						"credential-flow": chunk.item.toolCall.confirmation.credentialFlow
					}, null, 8, [
						"class",
						"request-id",
						"setup-requests",
						"workflow-id",
						"message",
						"project-id",
						"credential-flow"
					])) : chunk.item.toolCall.confirmation.credentialRequests?.length ? (openBlock(), createBlock(InstanceAiCredentialSetup_default, {
						key: "cred-" + chunk.item.toolCall.confirmation.requestId,
						class: normalizeClass(_ctx.$style.confirmation),
						"request-id": chunk.item.toolCall.confirmation.requestId,
						"credential-requests": chunk.item.toolCall.confirmation.credentialRequests,
						message: chunk.item.toolCall.confirmation.message,
						"project-id": chunk.item.toolCall.confirmation.projectId,
						"credential-flow": chunk.item.toolCall.confirmation.credentialFlow
					}, null, 8, [
						"class",
						"request-id",
						"credential-requests",
						"message",
						"project-id",
						"credential-flow"
					])) : chunk.item.toolCall.confirmation.inputType === "questions" && chunk.item.toolCall.confirmation.questions ? (openBlock(), createBlock(InstanceAiQuestions_default, {
						key: "q-" + chunk.item.toolCall.confirmation.requestId,
						class: normalizeClass(_ctx.$style.confirmation),
						questions: chunk.item.toolCall.confirmation.questions,
						"intro-message": chunk.item.toolCall.confirmation.introMessage,
						onSubmit: (answers) => handleQuestionsSubmit(chunk.item.toolCall.confirmation, answers)
					}, null, 8, [
						"class",
						"questions",
						"intro-message",
						"onSubmit"
					])) : chunk.item.toolCall.confirmation.inputType === "plan-review" ? (openBlock(), createBlock(PlanReviewPanel_default, {
						key: "plan-" + chunk.item.toolCall.confirmation.requestId,
						class: normalizeClass(_ctx.$style.confirmation),
						"planned-tasks": chunk.item.toolCall.confirmation?.planItems ?? chunk.item.toolCall.args?.tasks ?? [],
						message: chunk.item.toolCall.confirmation.message,
						onApprove: ($event) => handlePlanApprove(chunk.item.toolCall.confirmation, (chunk.item.toolCall.args?.tasks ?? []).length),
						onRequestChanges: (feedback) => handlePlanRequestChanges(chunk.item.toolCall.confirmation, feedback, (chunk.item.toolCall.args?.tasks ?? []).length)
					}, null, 8, [
						"class",
						"planned-tasks",
						"message",
						"onApprove",
						"onRequestChanges"
					])) : chunk.item.toolCall.confirmation.inputType === "text" ? (openBlock(), createElementBlock("div", {
						key: "text-" + chunk.item.toolCall.confirmation.requestId,
						class: normalizeClass(_ctx.$style.confirmation)
					}, [createVNode(unref(N8nCard_default), { class: normalizeClass(_ctx.$style.textCard) }, {
						default: withCtx(() => [createVNode(unref(N8nText_default), { tag: "div" }, {
							default: withCtx(() => [createTextVNode(toDisplayString(chunk.item.toolCall.confirmation.message), 1)]),
							_: 2
						}, 1024), createBaseVNode("div", { class: normalizeClass(_ctx.$style.textInputRow) }, [
							createVNode(unref(Input_default), {
								modelValue: textInputValues.value[chunk.item.toolCall.confirmation.requestId],
								"onUpdate:modelValue": ($event) => textInputValues.value[chunk.item.toolCall.confirmation.requestId] = $event,
								type: "text",
								size: "small",
								placeholder: unref(i18n).baseText("instanceAi.askUser.placeholder"),
								onKeydown: withKeys(($event) => handleTextSubmit(chunk.item.toolCall.confirmation), ["enter"])
							}, null, 8, [
								"modelValue",
								"onUpdate:modelValue",
								"placeholder",
								"onKeydown"
							]),
							!(textInputValues.value[chunk.item.toolCall.confirmation.requestId] ?? "").trim() ? (openBlock(), createBlock(unref(N8nButton_default), {
								key: 0,
								size: "medium",
								variant: "outline",
								onClick: ($event) => handleTextSkip(chunk.item.toolCall.confirmation)
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.askUser.skip")), 1)]),
								_: 1
							}, 8, ["onClick"])) : createCommentVNode("", true),
							createVNode(unref(N8nButton_default), {
								size: "medium",
								variant: "solid",
								disabled: !(textInputValues.value[chunk.item.toolCall.confirmation.requestId] ?? "").trim(),
								onClick: ($event) => handleTextSubmit(chunk.item.toolCall.confirmation)
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.askUser.submit")), 1)]),
								_: 1
							}, 8, ["disabled", "onClick"])
						], 2)]),
						_: 2
					}, 1032, ["class"])], 2)) : chunk.item.toolCall.confirmation.inputType === "resource-decision" && chunk.item.toolCall.confirmation.resourceDecision ? (openBlock(), createBlock(GatewayResourceDecision_default, {
						key: "rd-" + chunk.item.toolCall.confirmation.requestId,
						class: normalizeClass(_ctx.$style.confirmation),
						"data-test-id": "instance-ai-gateway-confirmation-panel",
						"request-id": chunk.item.toolCall.confirmation.requestId,
						resource: chunk.item.toolCall.confirmation.resourceDecision.resource,
						description: chunk.item.toolCall.confirmation.resourceDecision.description,
						options: chunk.item.toolCall.confirmation.resourceDecision.options
					}, null, 8, [
						"class",
						"request-id",
						"resource",
						"description",
						"options"
					])) : createCommentVNode("", true)], 64)) : (openBlock(), createElementBlock("div", {
						key: "group-" + chunk.agentId,
						class: normalizeClass([_ctx.$style.root, _ctx.$style.confirmation]),
						"data-test-id": "instance-ai-confirmation-panel"
					}, [isAllGenericApproval(chunk.items) && chunk.items.length > 1 ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.generic)
					}, [createVNode(unref(N8nText_default), null, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.confirmation.agentContext", { interpolate: { agent: getRoleLabel(chunk.role) } })), 1)]),
						_: 2
					}, 1024), createVNode(unref(N8nButton_default), {
						"data-test-id": "instance-ai-panel-confirm-approve-all",
						size: "medium",
						variant: "subtle",
						onClick: ($event) => handleApproveAll(chunk.items)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.confirmation.approveAll")), 1)]),
						_: 1
					}, 8, ["onClick"])], 2)) : createCommentVNode("", true), createBaseVNode("div", { class: normalizeClass(_ctx.$style.items) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(chunk.items, (item) => {
						return openBlock(), createElementBlock("div", {
							key: item.toolCall.confirmation.requestId,
							class: normalizeClass([_ctx.$style.item, chunk.items.length > 1 ? _ctx.$style.itemBordered : ""])
						}, [item.toolCall.confirmation.domainAccess ? (openBlock(), createBlock(DomainAccessApproval_default, {
							key: 0,
							"request-id": item.toolCall.confirmation.requestId,
							url: item.toolCall.confirmation.domainAccess.url,
							host: item.toolCall.confirmation.domainAccess.host,
							severity: item.toolCall.confirmation.severity
						}, null, 8, [
							"request-id",
							"url",
							"host",
							"severity"
						])) : (openBlock(), createElementBlock("div", _hoisted_1$1, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.approvalRow) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.approvalRowBody) }, [createVNode(unref(N8nText_default), {
							size: "medium",
							bold: ""
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(getToolLabel)(item.toolCall.toolName)), 1)]),
							_: 2
						}, 1024), createVNode(ConfirmationPreview_default, null, {
							default: withCtx(() => [createTextVNode(toDisplayString(item.toolCall.confirmation.message), 1)]),
							_: 2
						}, 1024)], 2), createVNode(ConfirmationFooter_default, null, {
							default: withCtx(() => [createVNode(unref(N8nButton_default), {
								"data-test-id": "instance-ai-panel-confirm-deny",
								size: "medium",
								variant: "outline",
								onClick: ($event) => handleConfirm(item, false)
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.confirmation.deny")), 1)]),
								_: 1
							}, 8, ["onClick"]), createVNode(unref(N8nButton_default), {
								variant: item.toolCall.confirmation.severity === "destructive" ? "destructive" : "solid",
								"data-test-id": "instance-ai-panel-confirm-approve",
								size: "medium",
								onClick: ($event) => handleConfirm(item, true)
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.confirmation.approve")), 1)]),
								_: 1
							}, 8, ["variant", "onClick"])]),
							_: 2
						}, 1024)], 2)]))], 2);
					}), 128))], 2)], 2))], 64);
				}), 128))]),
				_: 1
			});
		};
	}
});
var InstanceAiConfirmationPanel_vue_vue_type_style_index_0_lang_module_default = {
	confirmation: "_confirmation_peheu_125",
	root: "_root_peheu_130",
	items: "_items_peheu_136",
	item: "_item_peheu_136",
	approvalRow: "_approvalRow_peheu_145",
	approvalRowBody: "_approvalRowBody_peheu_152",
	textInputRow: "_textInputRow_peheu_159",
	generic: "_generic_peheu_166",
	textCard: "_textCard_peheu_174"
};
var InstanceAiConfirmationPanel_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiConfirmationPanel_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiConfirmationPanel_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiPreviewTabBar.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["data-tab-id", "onClick"];
var InstanceAiPreviewTabBar_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiPreviewTabBar",
	props: {
		tabs: {},
		activeTabId: {}
	},
	emits: ["update:activeTabId", "close"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const activeTab = computed(() => props.tabs.find((t) => t.id === props.activeTabId));
		watch(() => props.activeTabId, (tabId) => {
			if (!tabId) return;
			nextTick(() => {
				document.querySelector(`[data-tab-id="${tabId}"]`)?.scrollIntoView({
					behavior: "smooth",
					block: "nearest",
					inline: "nearest"
				});
			});
		});
		const externalLinkHref = computed(() => {
			const tab = activeTab.value;
			if (!tab) return void 0;
			if (tab.type === "workflow") return `/workflow/${tab.id}`;
			if (tab.type === "data-table") return tab.projectId ? `/projects/${tab.projectId}/datatables/${tab.id}` : "/home/datatables";
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.header) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.tabStrip) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.tabs, (tab) => {
				return openBlock(), createElementBlock("div", {
					key: tab.id,
					"data-tab-id": tab.id,
					class: normalizeClass([_ctx.$style.tab, tab.id === __props.activeTabId ? _ctx.$style.activeTab : ""]),
					onClick: ($event) => emit("update:activeTabId", tab.id)
				}, [createVNode(unref(N8nIcon_default), {
					icon: tab.icon,
					size: "medium",
					class: normalizeClass(_ctx.$style.tabIcon)
				}, null, 8, ["icon", "class"]), createBaseVNode("span", { class: normalizeClass(_ctx.$style.tabLabel) }, toDisplayString(tab.name), 3)], 10, _hoisted_1);
			}), 128))], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.actions) }, [activeTab.value && externalLinkHref.value ? (openBlock(), createBlock(unref(N8nIconButton_default), {
				key: 0,
				icon: "external-link",
				variant: "ghost",
				size: "medium",
				tag: "a",
				href: externalLinkHref.value,
				target: "_blank"
			}, null, 8, ["href"])) : createCommentVNode("", true), createVNode(unref(N8nIconButton_default), {
				icon: "x",
				variant: "ghost",
				size: "medium",
				onClick: _cache[0] || (_cache[0] = ($event) => emit("close"))
			})], 2)], 2);
		};
	}
});
var InstanceAiPreviewTabBar_vue_vue_type_style_index_0_lang_module_default = {
	header: "_header_1p7e2_125",
	tabStrip: "_tabStrip_1p7e2_135",
	tab: "_tab_1p7e2_135",
	activeTab: "_activeTab_1p7e2_166",
	tabIcon: "_tabIcon_1p7e2_172",
	tabLabel: "_tabLabel_1p7e2_176",
	actions: "_actions_1p7e2_181"
};
var InstanceAiPreviewTabBar_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiPreviewTabBar_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiPreviewTabBar_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiWorkflowPreview.vue?vue&type=script&setup=true&lang.ts
var InstanceAiWorkflowPreview_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiWorkflowPreview",
	props: {
		workflowId: {},
		executionId: {},
		refreshKey: { default: 0 }
	},
	emits: ["iframe-ready"],
	setup(__props, { expose: __expose, emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const workflowsListStore = useWorkflowsListStore();
		const previewRef = useTemplateRef("previewComponent");
		const workflow = ref(null);
		const isLoading = ref(false);
		const fetchError = ref(null);
		let fetchGeneration = 0;
		const previewMode = computed(() => props.executionId ? "execution" : "workflow");
		function handleIframeMessage(event) {
			if (typeof event.data !== "string" || !event.data.includes("\"command\"")) return;
			try {
				if (JSON.parse(event.data).command === "n8nReady") emit("iframe-ready");
			} catch {}
		}
		function relayPushEvent(event) {
			const iframe = previewRef.value?.iframeRef;
			if (!iframe?.contentWindow) return;
			iframe.contentWindow.postMessage(JSON.stringify({
				command: "executionEvent",
				event
			}), window.location.origin);
		}
		async function fetchWorkflow(id) {
			const isRefresh = workflow.value?.id === id;
			const generation = ++fetchGeneration;
			fetchError.value = null;
			if (!isRefresh) {
				isLoading.value = true;
				workflow.value = null;
			}
			try {
				const result = await workflowsListStore.fetchWorkflow(id);
				if (generation !== fetchGeneration) return;
				workflow.value = result;
			} catch {
				if (generation !== fetchGeneration) return;
				workflow.value = null;
				fetchError.value = i18n.baseText("instanceAi.workflowPreview.fetchError");
			} finally {
				if (generation === fetchGeneration) isLoading.value = false;
			}
		}
		watch(() => [props.workflowId, props.refreshKey], async ([id]) => {
			if (id) await fetchWorkflow(id);
			else {
				workflow.value = null;
				fetchError.value = null;
			}
		}, { immediate: true });
		window.addEventListener("message", handleIframeMessage);
		onBeforeUnmount(() => {
			window.removeEventListener("message", handleIframeMessage);
		});
		__expose({ relayPushEvent });
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.content) }, [
				fetchError.value && !workflow.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.centerState)
				}, [createVNode(unref(N8nText_default), { color: "text-light" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(fetchError.value), 1)]),
					_: 1
				})], 2)) : createCommentVNode("", true),
				workflow.value ? (openBlock(), createBlock(WorkflowPreview_default, {
					key: 1,
					ref: "previewComponent",
					mode: previewMode.value,
					workflow: workflow.value,
					"execution-id": props.executionId ?? void 0,
					"can-open-ndv": true,
					"hide-controls": false,
					"suppress-notifications": true,
					"loader-type": "spinner"
				}, null, 8, [
					"mode",
					"workflow",
					"execution-id"
				])) : createCommentVNode("", true),
				isLoading.value && !workflow.value ? (openBlock(), createElementBlock("div", {
					key: 2,
					class: normalizeClass(_ctx.$style.centerState)
				}, [createVNode(unref(N8nIcon_default), {
					icon: "spinner",
					color: "primary",
					size: "xxlarge",
					spin: ""
				})], 2)) : createCommentVNode("", true)
			], 2);
		};
	}
});
var InstanceAiWorkflowPreview_vue_vue_type_style_index_0_lang_module_default = {
	content: "_content_1ceme_125",
	centerState: "_centerState_1ceme_132"
};
var InstanceAiWorkflowPreview_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiWorkflowPreview_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiWorkflowPreview_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiDataTablePreview.vue?vue&type=script&setup=true&lang.ts
var InstanceAiDataTablePreview_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiDataTablePreview",
	props: {
		dataTableId: {},
		projectId: {},
		refreshKey: { default: 0 }
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const dataTableStore = useDataTableStore();
		const dataTable = ref(null);
		const isLoading = ref(false);
		const fetchError = ref(null);
		async function fetchDataTable(id, projectId) {
			const isRefresh = dataTable.value?.id === id;
			fetchError.value = null;
			if (!isRefresh) {
				isLoading.value = true;
				dataTable.value = null;
			}
			try {
				const result = isRefresh ? await dataTableStore.fetchDataTableDetails(id, projectId) : await dataTableStore.fetchOrFindDataTable(id, projectId);
				dataTable.value = result ?? null;
				if (!result) fetchError.value = i18n.baseText("instanceAi.dataTablePreview.fetchError");
			} catch {
				dataTable.value = null;
				fetchError.value = i18n.baseText("instanceAi.dataTablePreview.fetchError");
			} finally {
				isLoading.value = false;
			}
		}
		watch(() => [props.dataTableId, props.refreshKey], async ([id]) => {
			if (id && props.projectId) await fetchDataTable(id, props.projectId);
			else {
				dataTable.value = null;
				fetchError.value = null;
			}
		}, { immediate: true });
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.content) }, [
				fetchError.value && !dataTable.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.centerState)
				}, [createVNode(unref(N8nText_default), { color: "text-light" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(fetchError.value), 1)]),
					_: 1
				})], 2)) : createCommentVNode("", true),
				dataTable.value ? (openBlock(), createBlock(DataTableTable_default, {
					key: props.refreshKey,
					"data-table": dataTable.value,
					"read-only": true
				}, null, 8, ["data-table"])) : createCommentVNode("", true),
				isLoading.value && !dataTable.value ? (openBlock(), createElementBlock("div", {
					key: 2,
					class: normalizeClass(_ctx.$style.centerState)
				}, [createVNode(unref(N8nSpinner_default), { type: "dots" })], 2)) : createCommentVNode("", true)
			], 2);
		};
	}
});
var InstanceAiDataTablePreview_vue_vue_type_style_index_0_lang_module_default = {
	content: "_content_1ceme_125",
	centerState: "_centerState_1ceme_132"
};
var InstanceAiDataTablePreview_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiDataTablePreview_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiDataTablePreview_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/InstanceAiView.vue?vue&type=script&setup=true&lang.ts
var InstanceAiView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiView",
	setup(__props) {
		const store = useInstanceAiStore();
		const settingsStore = useInstanceAiSettingsStore();
		const sourceControlStore = useSourceControlStore();
		const isReadOnlyEnvironment = computed(() => sourceControlStore.preferences.branchReadOnly);
		const pushConnectionStore = usePushConnectionStore();
		const rootStore = useRootStore();
		const i18n = useI18n();
		const route = useRoute();
		const router = useRouter();
		const documentTitle = useDocumentTitle();
		const { goToUpgrade } = usePageRedirectionHelper();
		function goToSettings() {
			router.push({ name: INSTANCE_AI_SETTINGS_VIEW });
		}
		documentTitle.set("n8n Agent");
		const executionTracking = useExecutionPushEvents();
		const currentThreadTitle = computed(() => {
			const thread = store.threads.find((t) => t.id === store.currentThreadId);
			if (!thread || thread.title === "New conversation") {
				const firstUserMsg = store.messages.find((m) => m.role === "user");
				if (firstUserMsg?.content) {
					const text = firstUserMsg.content.trim();
					return text.length > 60 ? text.slice(0, 60) + "…" : text;
				}
				return NEW_CONVERSATION_TITLE;
			}
			return thread.title;
		});
		const preview = useCanvasPreview({
			store,
			route,
			workflowExecutions: executionTracking.workflowExecutions
		});
		provide("openWorkflowPreview", preview.openWorkflowPreview);
		provide("openDataTablePreview", preview.openDataTablePreview);
		const creditBannerDismissed = ref(false);
		watch(() => store.isLowCredits, (isLow, wasLow) => {
			if (isLow && !wasLow) creditBannerDismissed.value = false;
		});
		const showCreditBanner = computed(() => store.isLowCredits && !creditBannerDismissed.value);
		const showEmptyStateLayout = computed(() => !store.hasMessages && !store.isHydratingThread);
		onMounted(() => {
			pushConnectionStore.pushConnect();
			store.loadThreads();
			store.fetchCredits();
			store.startCreditsPushListener();
			nextTick(() => chatInputRef.value?.focus());
			settingsStore.refreshModuleSettings().catch(() => {}).then(() => {
				if (!settingsStore.isLocalGatewayDisabled) {
					settingsStore.startDaemonProbing();
					settingsStore.startGatewayPushListener();
					settingsStore.pollGatewayStatus();
				}
			});
		});
		watch(() => settingsStore.isLocalGatewayDisabled, (disabled) => {
			if (disabled) {
				settingsStore.stopDaemonProbing();
				settingsStore.stopGatewayPolling();
				settingsStore.stopGatewayPushListener();
			} else {
				settingsStore.startDaemonProbing();
				settingsStore.startGatewayPushListener();
				settingsStore.pollGatewayStatus();
			}
		});
		const showArtifactsPanel = ref(true);
		const showDebugPanel = ref(false);
		const isDebugEnabled = computed(() => localStorage.getItem("instanceAi.debugMode") === "true");
		const sidebarWidth = ref(260);
		function handleSidebarResize({ width }) {
			sidebarWidth.value = width;
		}
		const { width: windowWidth } = useWindowSize();
		const previewPanelWidth = ref(Math.round((windowWidth.value - sidebarWidth.value) / 2));
		const isResizingPreview = ref(false);
		const previewMaxWidth = computed(() => Math.round((windowWidth.value - sidebarWidth.value) / 2));
		watch(previewMaxWidth, (max) => {
			if (previewPanelWidth.value > max) previewPanelWidth.value = max;
		});
		function handlePreviewResize({ width }) {
			previewPanelWidth.value = width;
		}
		watch(preview.isPreviewVisible, (visible) => {
			if (visible) previewPanelWidth.value = Math.round((windowWidth.value - sidebarWidth.value) / 2);
		});
		const scrollableRef = useTemplateRef("scrollable");
		const scrollContainerRef = computed(() => scrollableRef.value?.closest("[data-reka-scroll-area-viewport]") ?? null);
		const { arrivedState } = useScroll(scrollContainerRef, {
			throttle: 100,
			offset: { bottom: 100 }
		});
		const userScrolledUp = ref(false);
		watch(() => arrivedState.bottom, (atBottom) => {
			userScrolledUp.value = !atBottom;
		});
		watch(() => store.currentThreadId, () => {
			userScrolledUp.value = false;
			nextTick(() => {
				chatInputRef.value?.focus();
			});
		});
		function scrollToBottom(smooth = false) {
			const container = scrollContainerRef.value;
			if (container) container.scrollTo({
				top: container.scrollHeight,
				behavior: smooth ? "smooth" : "instant"
			});
		}
		let contentResizeObserver = null;
		watch(scrollableRef, (el) => {
			contentResizeObserver?.disconnect();
			if (el) {
				contentResizeObserver = new ResizeObserver(() => {
					if (!userScrolledUp.value) scrollToBottom();
				});
				contentResizeObserver.observe(el);
			}
		}, { immediate: true });
		const chatInputRef = ref(null);
		watch(chatInputRef, (el) => {
			if (el) nextTick(() => el.focus());
		});
		const inputContainerRef = useTemplateRef("inputContainer");
		const inputAreaHeight = ref(120);
		let resizeObserver = null;
		watch(inputContainerRef, (el) => {
			resizeObserver?.disconnect();
			if (el) {
				resizeObserver = new ResizeObserver((entries) => {
					for (const entry of entries) inputAreaHeight.value = entry.borderBoxSize[0]?.blockSize ?? entry.contentRect.height;
				});
				resizeObserver.observe(el);
			}
		}, { immediate: true });
		onUnmounted(() => {
			contentResizeObserver?.disconnect();
			resizeObserver?.disconnect();
			executionTracking.cleanup();
			pushConnectionStore.pushDisconnect();
			store.closeSSE();
			store.stopCreditsPushListener();
			settingsStore.stopDaemonProbing();
			settingsStore.stopGatewayPolling();
			settingsStore.stopGatewayPushListener();
		});
		const routeThreadId = computed(() => typeof route.params.threadId === "string" ? route.params.threadId : null);
		function reconnectThreadIfHydrationApplied(threadId) {
			store.loadHistoricalMessages(threadId).then((hydrationStatus) => {
				if (hydrationStatus === "stale") return;
				store.loadThreadStatus(threadId);
				store.connectSSE(threadId);
			});
		}
		watch(routeThreadId, (threadId) => {
			if (!threadId) {
				if ((store.threads?.length ?? 0) === 0) store.threads.push({
					id: store.currentThreadId,
					title: NEW_CONVERSATION_TITLE,
					createdAt: (/* @__PURE__ */ new Date()).toISOString()
				});
				if (store.sseState === "disconnected") reconnectThreadIfHydrationApplied(store.currentThreadId);
				return;
			}
			if (threadId === store.currentThreadId) {
				if (store.sseState === "disconnected") reconnectThreadIfHydrationApplied(threadId);
				return;
			}
			executionTracking.clearAll();
			if (!store.threads.some((t) => t.id === threadId)) store.threads.push({
				id: threadId,
				title: NEW_CONVERSATION_TITLE,
				createdAt: (/* @__PURE__ */ new Date()).toISOString()
			});
			store.switchThread(threadId);
		}, { immediate: true });
		const workflowPreviewRef = useTemplateRef("workflowPreview");
		const eventRelay = useEventRelay({
			workflowExecutions: executionTracking.workflowExecutions,
			activeWorkflowId: preview.activeWorkflowId,
			getBufferedEvents: executionTracking.getBufferedEvents,
			relay: (event) => workflowPreviewRef.value?.relayPushEvent(event)
		});
		async function handleSubmit(message, attachments) {
			userScrolledUp.value = false;
			preview.markUserSentMessage();
			await store.sendMessage(message, attachments, rootStore.pushRef);
		}
		function handleStop() {
			store.cancelRun();
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.container),
				"data-test-id": "instance-ai-container"
			}, [
				createVNode(unref(N8nResizeWrapper_default), {
					class: normalizeClass(_ctx.$style.sidebar),
					width: sidebarWidth.value,
					style: normalizeStyle({ width: `${sidebarWidth.value}px` }),
					"supported-directions": ["right"],
					"is-resizing-enabled": true,
					onResize: handleSidebarResize
				}, {
					default: withCtx(() => [createVNode(InstanceAiThreadList_default)]),
					_: 1
				}, 8, [
					"class",
					"width",
					"style"
				]),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.chatArea) }, [
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [
						createVNode(unref(N8nHeading_default), {
							tag: "h2",
							size: "small",
							class: normalizeClass(_ctx.$style.headerTitle)
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(currentThreadTitle.value), 1)]),
							_: 1
						}, 8, ["class"]),
						unref(store).sseState === "reconnecting" ? (openBlock(), createBlock(unref(N8nText_default), {
							key: 0,
							size: "small",
							color: "text-light",
							class: normalizeClass(_ctx.$style.reconnecting)
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.view.reconnecting")), 1)]),
							_: 1
						}, 8, ["class"])) : createCommentVNode("", true),
						createBaseVNode("div", { class: normalizeClass(_ctx.$style.headerActions) }, [
							unref(store).creditsRemaining !== void 0 ? (openBlock(), createBlock(CreditsSettingsDropdown_default, {
								key: 0,
								"credits-remaining": unref(store).creditsRemaining,
								"credits-quota": unref(store).creditsQuota,
								"is-low-credits": unref(store).isLowCredits,
								onUpgradeClick: _cache[0] || (_cache[0] = ($event) => unref(goToUpgrade)("instance-ai", "upgrade-instance-ai"))
							}, null, 8, [
								"credits-remaining",
								"credits-quota",
								"is-low-credits"
							])) : createCommentVNode("", true),
							createVNode(unref(N8nIconButton_default), {
								icon: "cog",
								variant: "ghost",
								size: "medium",
								class: normalizeClass(_ctx.$style.settingsButton),
								"data-test-id": "instance-ai-settings-button",
								onClick: goToSettings
							}, null, 8, ["class"]),
							isDebugEnabled.value ? (openBlock(), createBlock(unref(N8nIconButton_default), {
								key: 1,
								icon: "bug",
								variant: "ghost",
								size: "medium",
								class: normalizeClass({ [_ctx.$style.activeButton]: showDebugPanel.value }),
								onClick: _cache[1] || (_cache[1] = ($event) => {
									showDebugPanel.value = !showDebugPanel.value;
									unref(store).debugMode = showDebugPanel.value;
								})
							}, null, 8, ["class"])) : createCommentVNode("", true),
							!unref(preview).isPreviewVisible.value ? (openBlock(), createBlock(unref(N8nIconButton_default), {
								key: 2,
								icon: "panel-right",
								variant: "ghost",
								size: "medium",
								onClick: _cache[2] || (_cache[2] = ($event) => showArtifactsPanel.value = !showArtifactsPanel.value)
							})) : createCommentVNode("", true)
						], 2)
					], 2),
					isReadOnlyEnvironment.value ? (openBlock(), createBlock(unref(N8nCallout_default), {
						key: 0,
						theme: "warning",
						icon: "lock",
						class: normalizeClass(_ctx.$style.readOnlyBanner)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("readOnlyEnv.instanceAi.notice")), 1)]),
						_: 1
					}, 8, ["class"])) : createCommentVNode("", true),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.contentArea) }, [
						createBaseVNode("div", { class: normalizeClass(_ctx.$style.chatContent) }, [showEmptyStateLayout.value ? (openBlock(), createElementBlock("div", {
							key: 0,
							class: normalizeClass(_ctx.$style.emptyLayout)
						}, [createVNode(InstanceAiEmptyState_default), createBaseVNode("div", { class: normalizeClass(_ctx.$style.centeredInput) }, [
							createVNode(InstanceAiStatusBar_default),
							showCreditBanner.value ? (openBlock(), createBlock(CreditWarningBanner_default, {
								key: 0,
								"credits-remaining": unref(store).creditsRemaining,
								"credits-quota": unref(store).creditsQuota,
								onUpgradeClick: _cache[3] || (_cache[3] = ($event) => unref(goToUpgrade)("instance-ai", "upgrade-instance-ai")),
								onDismiss: _cache[4] || (_cache[4] = ($event) => creditBannerDismissed.value = true)
							}, null, 8, ["credits-remaining", "credits-quota"])) : createCommentVNode("", true),
							createVNode(InstanceAiInput_default, {
								ref_key: "chatInputRef",
								ref: chatInputRef,
								"is-streaming": unref(store).isStreaming,
								suggestions: unref(INSTANCE_AI_EMPTY_STATE_SUGGESTIONS),
								onSubmit: handleSubmit,
								onStop: handleStop
							}, null, 8, ["is-streaming", "suggestions"])
						], 2)], 2)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
							createVNode(unref(N8nScrollArea_default), { class: normalizeClass(_ctx.$style.scrollArea) }, {
								default: withCtx(() => [createBaseVNode("div", {
									ref: "scrollable",
									class: normalizeClass(_ctx.$style.messageList),
									style: normalizeStyle({ paddingBottom: `calc(${inputAreaHeight.value}px + var(--spacing--sm))` })
								}, [createVNode(TransitionGroup, { name: "message-slide" }, {
									default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(store).messages, (message) => {
										return openBlock(), createBlock(InstanceAiMessage_default, {
											key: message.id,
											message,
											class: normalizeClass(_ctx.$style.message)
										}, null, 8, ["message", "class"]);
									}), 128))]),
									_: 1
								}), createVNode(InstanceAiConfirmationPanel_default)], 6)]),
								_: 1
							}, 8, ["class"]),
							createBaseVNode("div", {
								class: normalizeClass(_ctx.$style.scrollButtonContainer),
								style: normalizeStyle({ bottom: `${inputAreaHeight.value + 8}px` })
							}, [createVNode(Transition, { name: "fade" }, {
								default: withCtx(() => [userScrolledUp.value && unref(store).hasMessages ? (openBlock(), createBlock(unref(N8nIconButton_default), {
									key: 0,
									variant: "outline",
									icon: "arrow-down",
									class: normalizeClass(_ctx.$style.scrollToBottomButton),
									onClick: _cache[5] || (_cache[5] = ($event) => {
										scrollToBottom(true);
										userScrolledUp.value = false;
									})
								}, null, 8, ["class"])) : createCommentVNode("", true)]),
								_: 1
							})], 6),
							createBaseVNode("div", {
								ref: "inputContainer",
								class: normalizeClass(_ctx.$style.inputContainer)
							}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.inputConstraint) }, [
								createVNode(InstanceAiStatusBar_default),
								showCreditBanner.value ? (openBlock(), createBlock(CreditWarningBanner_default, {
									key: 0,
									"credits-remaining": unref(store).creditsRemaining,
									"credits-quota": unref(store).creditsQuota,
									onUpgradeClick: _cache[6] || (_cache[6] = ($event) => unref(goToUpgrade)("instance-ai", "upgrade-instance-ai")),
									onDismiss: _cache[7] || (_cache[7] = ($event) => creditBannerDismissed.value = true)
								}, null, 8, ["credits-remaining", "credits-quota"])) : createCommentVNode("", true),
								createVNode(InstanceAiInput_default, {
									ref_key: "chatInputRef",
									ref: chatInputRef,
									"is-streaming": unref(store).isStreaming,
									onSubmit: handleSubmit,
									onStop: handleStop
								}, null, 8, ["is-streaming"])
							], 2)], 2)
						], 64))], 2),
						showArtifactsPanel.value && !unref(preview).isPreviewVisible.value ? (openBlock(), createBlock(InstanceAiArtifactsPanel_default, { key: 0 })) : createCommentVNode("", true),
						showDebugPanel.value ? (openBlock(), createBlock(InstanceAiDebugPanel_default, {
							key: 1,
							onClose: _cache[8] || (_cache[8] = ($event) => {
								showDebugPanel.value = false;
								unref(store).debugMode = false;
							})
						})) : createCommentVNode("", true)
					], 2)
				], 2),
				withDirectives(createVNode(unref(N8nResizeWrapper_default), {
					class: normalizeClass(_ctx.$style.canvasArea),
					width: previewPanelWidth.value,
					style: normalizeStyle({ width: `${previewPanelWidth.value}px` }),
					"min-width": 400,
					"max-width": previewMaxWidth.value,
					"supported-directions": ["left"],
					"is-resizing-enabled": true,
					"grid-size": 8,
					outset: true,
					onResize: handlePreviewResize,
					onResizestart: _cache[11] || (_cache[11] = ($event) => isResizingPreview.value = true),
					onResizeend: _cache[12] || (_cache[12] = ($event) => isResizingPreview.value = false)
				}, {
					default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.previewPanel) }, [createVNode(InstanceAiPreviewTabBar_default, {
						tabs: unref(preview).allArtifactTabs.value,
						"active-tab-id": unref(preview).activeTabId.value,
						"onUpdate:activeTabId": _cache[9] || (_cache[9] = ($event) => unref(preview).selectTab($event)),
						onClose: _cache[10] || (_cache[10] = ($event) => unref(preview).closePreview())
					}, null, 8, ["tabs", "active-tab-id"]), createBaseVNode("div", { class: normalizeClass(_ctx.$style.previewContent) }, [unref(preview).activeWorkflowId.value ? (openBlock(), createBlock(InstanceAiWorkflowPreview_default, {
						key: 0,
						ref: "workflowPreview",
						"workflow-id": unref(preview).activeWorkflowId.value,
						"execution-id": unref(preview).activeExecutionId.value,
						"refresh-key": unref(preview).workflowRefreshKey.value,
						onIframeReady: unref(eventRelay).handleIframeReady
					}, null, 8, [
						"workflow-id",
						"execution-id",
						"refresh-key",
						"onIframeReady"
					])) : unref(preview).activeDataTableId.value ? (openBlock(), createBlock(InstanceAiDataTablePreview_default, {
						key: 1,
						"data-table-id": unref(preview).activeDataTableId.value,
						"project-id": unref(preview).activeDataTableProjectId.value,
						"refresh-key": unref(preview).dataTableRefreshKey.value
					}, null, 8, [
						"data-table-id",
						"project-id",
						"refresh-key"
					])) : createCommentVNode("", true)], 2)], 2)]),
					_: 1
				}, 8, [
					"class",
					"width",
					"style",
					"max-width"
				]), [[vShow, unref(preview).isPreviewVisible.value]])
			], 2);
		};
	}
});
var InstanceAiView_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_1frgz_125",
	sidebar: "_sidebar_1frgz_133",
	readOnlyBanner: "_readOnlyBanner_1frgz_139",
	chatArea: "_chatArea_1frgz_143",
	canvasArea: "_canvasArea_1frgz_153",
	header: "_header_1frgz_179",
	headerTitle: "_headerTitle_1frgz_188",
	headerActions: "_headerActions_1frgz_196",
	settingsButton: "_settingsButton_1frgz_203",
	activeButton: "_activeButton_1frgz_207",
	reconnecting: "_reconnecting_1frgz_211",
	contentArea: "_contentArea_1frgz_215",
	chatContent: "_chatContent_1frgz_222",
	emptyLayout: "_emptyLayout_1frgz_230",
	centeredInput: "_centeredInput_1frgz_240",
	scrollArea: "_scrollArea_1frgz_245",
	messageList: "_messageList_1frgz_250",
	message: "_message_1frgz_250",
	scrollButtonContainer: "_scrollButtonContainer_1frgz_263",
	scrollToBottomButton: "_scrollToBottomButton_1frgz_273",
	inputContainer: "_inputContainer_1frgz_284",
	inputConstraint: "_inputConstraint_1frgz_298",
	previewPanel: "_previewPanel_1frgz_303",
	previewContent: "_previewContent_1frgz_309"
};
var InstanceAiView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { InstanceAiView_default as default };
