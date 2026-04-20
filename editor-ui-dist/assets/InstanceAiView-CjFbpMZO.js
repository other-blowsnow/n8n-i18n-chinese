import { o as __toESM } from "./chunk-CC9Q-vWm.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, E as createElementBlock, Ft as ref, N as defineComponent, O as createSlots, Q as onUpdated, R as inject, S as computed, Sn as toDisplayString, T as createCommentVNode, W as nextTick, Wt as unref, X as onMounted, Z as onUnmounted, _ as Fragment, _n as normalizeClass, at as resolveComponent, bt as withDirectives, c as useCssModule, f as vModelText, gt as watch, h as withModifiers, it as renderSlot, j as createVNode, m as withKeys, n as Transition, p as vShow, pt as useTemplateRef, q as onBeforeUnmount, r as TransitionGroup, rt as renderList, tt as provide, w as createBlock, yn as normalizeStyle, yt as withCtx } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { C as useSpeechRecognition, at as useI18n, k as useWindowSize, x as useScroll } from "./core-C5WMGiem.js";
import { A as N8nResizeWrapper_default, Ai as MessageRating_default, Di as N8nTooltip_default, Gi as CollapsibleRoot_default, Ji as N8nHeading_default, Mi as N8nIconButton_default, Mt as N8nActionDropdown_default, Qi as N8nIcon_default, Ui as CollapsibleTrigger_default, Wi as CollapsibleContent_default, Xi as N8nText_default, Zi as N8nButton_default, ct as useRoute, dt as Checkbox_default, ji as Input_default, k as N8nSpinner_default, lt as useRouter, m as N8nScrollArea_default, tt as N8nLink_default } from "./src-CJGJHCUt.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { Aa as getWorkflow, Bn as require_FileSaver_min, Pn as useToast, Rt as useDocumentTitle, gr as useNDVStore, it as useCredentialsStore, lr as useNodeHelpers, r as useUIStore, s as useWorkflowsStore, sr as useWorkflowsListStore, w as useNodeTypesStore, zi as getAppNameFromCredType } from "./users.store-BBlwYPqI.js";
import { O as NodeCredentials_default, t as ParameterInputList_default } from "./ParameterInputList-Ctlk1pdw.js";
import { $i as displayParameter, Qo as VIEWS, bc as ExpressionLocalResolveContextSymbol, ja as isResourceLocatorValue } from "./constants-fJx0oi9Z.js";
import { T as defineStore, t as useRootStore } from "./useRootStore-BEIaSKen.js";
import { t as usePageRedirectionHelper } from "./usePageRedirectionHelper-DNO8XBUP.js";
import { t as useDataTableStore } from "./dataTable.store-B97pByYv.js";
import { t as useClipboard } from "./useClipboard-CaaG-EX-.js";
import { t as CredentialIcon_default } from "./CredentialIcon-Bt652KqJ.js";
import { t as usePushConnectionStore } from "./pushConnection.store-DgeqWFEt.js";
import { i as NEW_CONVERSATION_TITLE, n as INSTANCE_AI_THREAD_VIEW, t as INSTANCE_AI_SETTINGS_VIEW } from "./constants-C6zHJmRD.js";
import { t as useExpressionResolveCtx } from "./useExpressionResolveCtx-DdKCUSWM.js";
import { p as getRelativeDate, t as convertFileToBinaryData } from "./fileUtils-RuusO0Y2.js";
import { t as useInstanceAiSettingsStore } from "./instanceAiSettings.store-B7yLbWrm.js";
import { a as fetchThreadContext, c as updateMemory, i as fetchMemory, n as CreditsSettingsDropdown_default, o as fetchThreadMessages, r as useInstanceAiStore, s as fetchThreads, t as CreditWarningBanner_default } from "./CreditWarningBanner-DW_BIESU.js";
import { t as ChatFile_default } from "./ChatFile-Bj0taQLP.js";
import { t as ChatMarkdownChunk_default } from "./ChatMarkdownChunk-xpFqJ1Q4.js";
import { t as WorkflowPreview_default } from "./WorkflowPreview-Dp2_wIDE.js";
import { t as DataTableTable_default } from "./DataTableTable-BU8c0yOS.js";
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
//#region src/features/ai/instanceAi/components/AttachmentPreview.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$12 = ["src", "alt"];
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
					spin: "",
					size: "small"
				})], 2)) : createCommentVNode("", true),
				createBaseVNode("img", {
					src: thumbnailSrc.value,
					alt: fileName.value,
					class: normalizeClass(_ctx.$style.thumbnail),
					onLoad: handleLoad
				}, null, 42, _hoisted_1$12),
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
		const processedContent = computed(() => {
			const registry = store.resourceRegistry;
			if (registry.size === 0) return props.content;
			let result = props.content;
			const entries = [...registry.values()].filter((entry) => entry.name.length >= 3).sort((a, b) => b.name.length - a.name.length);
			for (const entry of entries) {
				const escaped = entry.name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
				const pattern = new RegExp(`(?<![\\[\`\\/])\\b(${escaped})\\b(?![\\]\`]|\\(|://)`, "g");
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
		/**
		* Post-process the rendered DOM to transform resource links into
		* styled resource chips with icons. Handles both:
		* - `n8n-resource://` custom scheme links (from pre-processing)
		* - Standard links pointing to internal n8n routes (generated by the AI)
		*/
		function enhanceResourceLinks() {
			if (!wrapperRef.value) return;
			const allLinks = wrapperRef.value.querySelectorAll("a");
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
					link.addEventListener("click", (e) => {
						if (e.metaKey || e.ctrlKey) return;
						if (!(type === "workflow" && openWorkflowPreview || type === "data-table" && registryEntry?.projectId && openDataTablePreview)) return;
						e.preventDefault();
						if (type === "workflow") openWorkflowPreview?.(id);
						else if (type === "data-table" && registryEntry?.projectId) openDataTablePreview?.(id, registryEntry.projectId);
					});
					continue;
				}
				for (const { pattern, type } of INTERNAL_ROUTE_PATTERNS) if (pattern.test(href)) {
					link.target = "_blank";
					applyResourceChip(link, type);
					break;
				}
			}
		}
		onMounted(enhanceResourceLinks);
		onUpdated(enhanceResourceLinks);
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				ref_key: "wrapperRef",
				ref: wrapperRef
			}, [createVNode(ChatMarkdownChunk_default, { source: source.value }, null, 8, ["source"])], 512);
		};
	}
});
var InstanceAiMarkdown_vue_vue_type_style_index_0_lang_module_default = {
	resourceChip: "_resourceChip_1129p_125",
	resourceChipIcon: "_resourceChipIcon_1129p_145"
};
var InstanceAiMarkdown_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiMarkdown_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiMarkdown_vue_vue_type_style_index_0_lang_module_default }]]);
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
//#endregion
//#region src/features/ai/instanceAi/components/ToolResultJson.vue?vue&type=script&setup=true&lang.ts
var import_FileSaver_min = /* @__PURE__ */ __toESM(require_FileSaver_min(), 1);
var _hoisted_1$11 = ["innerHTML"];
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
		function highlightJsonString(text) {
			return escapeHtml(text).replace(/(&quot;(?:\\.|[^&]|&(?!quot;))*?&quot;)\s*:|(&quot;(?:\\.|[^&]|&(?!quot;))*?&quot;)|(true|false|null)|(\d+\.?\d*)/g, (match, key, str, bool, num) => {
				if (key) return `<span class="json-key">${key}</span>:`;
				if (str) return `<span class="json-string">${str}</span>`;
				if (bool) return `<span class="json-bool">${bool}</span>`;
				if (num) return `<span class="json-number">${num}</span>`;
				return match;
			});
		}
		const jsonString = computed(() => {
			return JSON.stringify(props.value, null, 2) ?? String(props.value);
		});
		const isTruncated = computed(() => jsonString.value.length > MAX_JSON_DISPLAY_LENGTH);
		const highlighted = computed(() => {
			return highlightJsonString(isTruncated.value ? jsonString.value.slice(0, MAX_JSON_DISPLAY_LENGTH) : jsonString.value);
		});
		function downloadFullJson() {
			(0, import_FileSaver_min.saveAs)(new Blob([jsonString.value], { type: "application/json" }), "tool-result.json");
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [createBaseVNode("pre", {
				class: normalizeClass(_ctx.$style.json),
				innerHTML: highlighted.value
			}, null, 10, _hoisted_1$11), isTruncated.value ? (openBlock(), createElementBlock("div", {
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
	json: "_json_1lfbf_125",
	truncatedNotice: "_truncatedNotice_1lfbf_137",
	truncatedText: "_truncatedText_1lfbf_144"
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
var _hoisted_1$10 = ["src"];
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
			}, null, 10, _hoisted_1$10);
		};
	}
});
var ToolResultMedia_vue_vue_type_style_index_0_lang_module_default = { image: "_image_1l1xi_2" };
var ToolResultMedia_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ToolResultMedia_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ToolResultMedia_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/ToolResultText.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$9 = ["textContent"];
var ToolResultText_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ToolResultText",
	props: { text: {} },
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("pre", {
				class: normalizeClass(_ctx.$style.text),
				textContent: toDisplayString(__props.text)
			}, null, 10, _hoisted_1$9);
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
//#region src/features/ai/instanceAi/components/ToolCallStep.vue?vue&type=script&setup=true&lang.ts
var ToolCallStep_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ToolCallStep",
	props: {
		toolCall: {},
		label: {},
		showConnector: { type: Boolean }
	},
	setup(__props) {
		const props = __props;
		const { getToolLabel, getToggleLabel, getHideLabel } = useToolLabel();
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
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.step) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.iconColumn) }, [createVNode(unref(N8nIcon_default), {
				icon: props.toolCall.isLoading ? "spinner" : unref(getToolIcon)(props.toolCall.toolName),
				size: "small",
				spin: props.toolCall.isLoading,
				class: normalizeClass([_ctx.$style.stepIcon, props.toolCall.isLoading && _ctx.$style.loadingIcon])
			}, null, 8, [
				"icon",
				"spin",
				"class"
			]), props.showConnector ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.connector)
			}, null, 2)) : createCommentVNode("", true)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.stepContent) }, [
				createBaseVNode("span", { class: normalizeClass(_ctx.$style.stepLabel) }, toDisplayString(props.label ?? getDisplayLabel(props.toolCall)), 3),
				unref(getToggleLabel)(props.toolCall) ? (openBlock(), createBlock(unref(CollapsibleRoot_default), {
					key: 0,
					class: normalizeClass(_ctx.$style.toggleBlock)
				}, {
					default: withCtx(({ open: toolOpen }) => [createVNode(unref(CollapsibleTrigger_default), { class: normalizeClass(_ctx.$style.toggleButton) }, {
						default: withCtx(() => [createTextVNode(toDisplayString(toolOpen ? unref(getHideLabel)(props.toolCall) : unref(getToggleLabel)(props.toolCall)), 1)]),
						_: 2
					}, 1032, ["class"]), createVNode(unref(CollapsibleContent_default), { class: normalizeClass(_ctx.$style.toggleContent) }, {
						default: withCtx(() => [
							props.toolCall.args ? (openBlock(), createElementBlock("div", {
								key: 0,
								class: normalizeClass(_ctx.$style.dataSection)
							}, [createVNode(ToolResultJson_default, { value: props.toolCall.args }, null, 8, ["value"])], 2)) : createCommentVNode("", true),
							props.toolCall.result !== void 0 ? (openBlock(), createElementBlock("div", {
								key: 1,
								class: normalizeClass(_ctx.$style.dataSection)
							}, [createVNode(ToolResultRenderer_default, {
								result: props.toolCall.result,
								"tool-name": props.toolCall.toolName
							}, null, 8, ["result", "tool-name"])], 2)) : createCommentVNode("", true),
							props.toolCall.error !== void 0 ? (openBlock(), createElementBlock("div", {
								key: 2,
								class: normalizeClass([_ctx.$style.dataSection, _ctx.$style.errorText])
							}, toDisplayString(props.toolCall.error), 3)) : createCommentVNode("", true)
						]),
						_: 1
					}, 8, ["class"])]),
					_: 1
				}, 8, ["class"])) : createCommentVNode("", true),
				renderSlot(_ctx.$slots, "default")
			], 2)], 2);
		};
	}
});
var ToolCallStep_vue_vue_type_style_index_0_lang_module_default = {
	step: "_step_1cfr8_125",
	iconColumn: "_iconColumn_1cfr8_130",
	connector: "_connector_1cfr8_139",
	stepIcon: "_stepIcon_1cfr8_146",
	loadingIcon: "_loadingIcon_1cfr8_151",
	stepContent: "_stepContent_1cfr8_155",
	stepLabel: "_stepLabel_1cfr8_163",
	toggleBlock: "_toggleBlock_1cfr8_169",
	toggleButton: "_toggleButton_1cfr8_173",
	toggleContent: "_toggleContent_1cfr8_190",
	dataSection: "_dataSection_1cfr8_196",
	errorText: "_errorText_1cfr8_212"
};
var ToolCallStep_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ToolCallStep_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ToolCallStep_vue_vue_type_style_index_0_lang_module_default }]]);
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
				if (!tc) continue;
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
				])) : (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.step)
				}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.iconColumn) }, [createVNode(unref(N8nIcon_default), {
					icon: step.icon,
					size: "small",
					spin: step.isLoading,
					class: normalizeClass([
						_ctx.$style.stepIcon,
						step.type === "done" && _ctx.$style.doneIcon,
						step.isLoading && _ctx.$style.loadingIcon
					])
				}, null, 8, [
					"icon",
					"spin",
					"class"
				]), idx < steps.value.length - 1 ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.connector)
				}, null, 2)) : createCommentVNode("", true)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [step.type === "text" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [step.isLongText ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.textLabel) }, toDisplayString(step.shortLabel), 3), createVNode(unref(CollapsibleRoot_default), { class: normalizeClass(_ctx.$style.toggleBlock) }, {
					default: withCtx(({ open: textOpen }) => [createVNode(unref(CollapsibleTrigger_default), { class: normalizeClass(_ctx.$style.toggleButton) }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(textOpen ? "instanceAi.stepTimeline.hideData" : "instanceAi.stepTimeline.showData")), 1)]),
						_: 2
					}, 1032, ["class"]), createVNode(unref(CollapsibleContent_default), { class: normalizeClass(_ctx.$style.toggleContent) }, {
						default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.dataSection) }, [createVNode(InstanceAiMarkdown_default, { content: step.textContent }, null, 8, ["content"])], 2)]),
						_: 2
					}, 1032, ["class"])]),
					_: 2
				}, 1032, ["class"])], 64)) : (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.textLabel)
				}, [createVNode(InstanceAiMarkdown_default, { content: step.textContent }, null, 8, ["content"])], 2))], 64)) : step.type === "done" ? (openBlock(), createElementBlock("span", {
					key: 1,
					class: normalizeClass(_ctx.$style.doneLabel)
				}, toDisplayString(step.label), 3)) : createCommentVNode("", true)], 2)], 2))], 64);
			}), 128))], 2);
		};
	}
});
var SubagentStepTimeline_vue_vue_type_style_index_0_lang_module_default = {
	timeline: "_timeline_2n97n_125",
	step: "_step_2n97n_130",
	iconColumn: "_iconColumn_2n97n_135",
	connector: "_connector_2n97n_144",
	stepIcon: "_stepIcon_2n97n_151",
	doneIcon: "_doneIcon_2n97n_156",
	loadingIcon: "_loadingIcon_2n97n_160",
	content: "_content_2n97n_164",
	textLabel: "_textLabel_2n97n_172",
	doneLabel: "_doneLabel_2n97n_178",
	toggleBlock: "_toggleBlock_2n97n_184",
	toggleButton: "_toggleButton_2n97n_188",
	toggleContent: "_toggleContent_2n97n_205",
	dataSection: "_dataSection_2n97n_211"
};
var SubagentStepTimeline_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SubagentStepTimeline_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SubagentStepTimeline_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/AgentSection.vue?vue&type=script&setup=true&lang.ts
var AgentSection_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentSection",
	props: { agentNode: {} },
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const instanceAiStore = useInstanceAiStore();
		const isExpanded = ref(false);
		const peekRef = useTemplateRef("peekContainer");
		const isActive = computed(() => props.agentNode.status === "active");
		const isError = computed(() => props.agentNode.status === "error");
		const sectionTitle = computed(() => props.agentNode.subtitle ?? props.agentNode.role ?? "Working...");
		function handleStop() {
			instanceAiStore.amendAgent(props.agentNode.agentId, props.agentNode.role, props.agentNode.taskId);
		}
		function toggleExpanded() {
			isExpanded.value = !isExpanded.value;
		}
		watch(() => props.agentNode.status, (status) => {
			if (status === "completed") isExpanded.value = false;
		});
		function scrollPeekToBottom() {
			if (peekRef.value && !isExpanded.value) peekRef.value.scrollTop = peekRef.value.scrollHeight;
		}
		watch(() => props.agentNode.timeline.length, async () => {
			await nextTick();
			scrollPeekToBottom();
		});
		watch(isExpanded, async (expanded) => {
			if (!expanded) {
				await nextTick();
				scrollPeekToBottom();
			}
		}, { flush: "post" });
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.root) }, [
				createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.header),
					role: "button",
					tabindex: "0",
					onClick: toggleExpanded,
					onKeydown: withKeys(toggleExpanded, ["enter"])
				}, [
					createVNode(unref(N8nIcon_default), {
						icon: isExpanded.value ? "chevron-down" : "chevron-right",
						size: "small",
						class: normalizeClass(_ctx.$style.chevron)
					}, null, 8, ["icon", "class"]),
					createBaseVNode("span", { class: normalizeClass([_ctx.$style.title, isActive.value && _ctx.$style.shimmer]) }, toDisplayString(sectionTitle.value), 3),
					isActive.value ? (openBlock(), createElementBlock("button", {
						key: 0,
						class: normalizeClass(_ctx.$style.stopButton),
						onClick: withModifiers(handleStop, ["stop"])
					}, [createVNode(unref(N8nIcon_default), {
						icon: "square",
						size: "small"
					}), createTextVNode(" " + toDisplayString(unref(i18n).baseText("instanceAi.agent.stop")), 1)], 2)) : createCommentVNode("", true)
				], 34),
				isExpanded.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.content)
				}, [createVNode(SubagentStepTimeline_default, { "agent-node": props.agentNode }, null, 8, ["agent-node"])], 2)) : isActive.value ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.peekWrapper),
					onClick: toggleExpanded
				}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.peekGradient) }, null, 2), createBaseVNode("div", {
					ref: "peekContainer",
					class: normalizeClass(_ctx.$style.peekContainer)
				}, [createVNode(SubagentStepTimeline_default, { "agent-node": props.agentNode }, null, 8, ["agent-node"])], 2)], 2)) : createCommentVNode("", true),
				isError.value && props.agentNode.error ? (openBlock(), createElementBlock("div", {
					key: 2,
					class: normalizeClass(_ctx.$style.errorResult)
				}, [createVNode(unref(N8nIcon_default), {
					icon: "triangle-alert",
					size: "small",
					class: normalizeClass(_ctx.$style.errorIcon)
				}, null, 8, ["class"]), createBaseVNode("span", null, toDisplayString(props.agentNode.error), 1)], 2)) : createCommentVNode("", true)
			], 2);
		};
	}
});
var AgentSection_vue_vue_type_style_index_0_lang_module_default = {
	root: "_root_zyypu_125",
	header: "_header_zyypu_129",
	title: "_title_zyypu_142",
	chevron: "_chevron_zyypu_151",
	content: "_content_zyypu_156",
	peekWrapper: "_peekWrapper_zyypu_160",
	peekGradient: "_peekGradient_zyypu_165",
	peekContainer: "_peekContainer_zyypu_176",
	errorResult: "_errorResult_zyypu_181",
	errorIcon: "_errorIcon_zyypu_190",
	stopButton: "_stopButton_zyypu_195",
	shimmer: "_shimmer_zyypu_213"
};
var AgentSection_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentSection_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentSection_vue_vue_type_style_index_0_lang_module_default }]]);
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
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.card),
				onClick: handleClick
			}, [createVNode(unref(N8nIcon_default), {
				icon: icon.value,
				size: "medium",
				class: normalizeClass(_ctx.$style.icon)
			}, null, 8, ["icon", "class"]), createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.name) }, toDisplayString(props.name), 3), props.metadata ? (openBlock(), createElementBlock("span", {
				key: 0,
				class: normalizeClass(_ctx.$style.metadata)
			}, toDisplayString(props.metadata), 3)) : createCommentVNode("", true)], 2)], 2);
		};
	}
});
var ArtifactCard_vue_vue_type_style_index_0_lang_module_default = {
	card: "_card_nvrxo_125",
	icon: "_icon_nvrxo_142",
	content: "_content_nvrxo_147",
	name: "_name_nvrxo_154",
	metadata: "_metadata_nvrxo_163"
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
		const isBriefingOpen = ref(false);
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
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.root) }, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.headerLeft) }, [
					props.isLoading ? (openBlock(), createBlock(unref(N8nIcon_default), {
						key: 0,
						icon: "spinner",
						class: normalizeClass(_ctx.$style.spinner),
						spin: "",
						size: "small"
					}, null, 8, ["class"])) : (openBlock(), createBlock(unref(N8nIcon_default), {
						key: 1,
						icon: "check",
						class: normalizeClass(_ctx.$style.successIcon),
						size: "small"
					}, null, 8, ["class"])),
					createBaseVNode("span", { class: normalizeClass(_ctx.$style.delegatingLabel) }, toDisplayString(unref(i18n).baseText("instanceAi.delegateCard.delegatingTo")) + ": ", 3),
					createBaseVNode("span", { class: normalizeClass(_ctx.$style.role) }, toDisplayString(role.value), 3)
				], 2)], 2),
				tools.value.length > 0 ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.toolsRow)
				}, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.toolsLabel) }, toDisplayString(unref(i18n).baseText("instanceAi.delegateCard.tools")), 3), (openBlock(true), createElementBlock(Fragment, null, renderList(tools.value, (tool) => {
					return openBlock(), createElementBlock("span", {
						key: tool,
						class: normalizeClass(_ctx.$style.toolBadge)
					}, toDisplayString(unref(getToolLabel)(tool)), 3);
				}), 128))], 2)) : createCommentVNode("", true),
				briefing.value ? (openBlock(), createBlock(unref(CollapsibleRoot_default), {
					key: 1,
					open: isBriefingOpen.value,
					"onUpdate:open": _cache[0] || (_cache[0] = ($event) => isBriefingOpen.value = $event),
					class: normalizeClass(_ctx.$style.briefingBlock)
				}, {
					default: withCtx(() => [createVNode(unref(CollapsibleTrigger_default), { class: normalizeClass(_ctx.$style.briefingTrigger) }, {
						default: withCtx(() => [createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("instanceAi.delegateCard.briefing")), 1), createVNode(unref(N8nIcon_default), {
							icon: isBriefingOpen.value ? "chevron-up" : "chevron-down",
							size: "small"
						}, null, 8, ["icon"])]),
						_: 1
					}, 8, ["class"]), createVNode(unref(CollapsibleContent_default), { class: normalizeClass(_ctx.$style.briefingContent) }, {
						default: withCtx(() => [createBaseVNode("p", null, toDisplayString(briefing.value), 1)]),
						_: 1
					}, 8, ["class"])]),
					_: 1
				}, 8, ["open", "class"])) : createCommentVNode("", true)
			], 2);
		};
	}
});
var DelegateCard_vue_vue_type_style_index_0_lang_module_default = {
	root: "_root_1kgxr_125",
	header: "_header_1kgxr_133",
	headerLeft: "_headerLeft_1kgxr_140",
	delegatingLabel: "_delegatingLabel_1kgxr_147",
	role: "_role_1kgxr_151",
	spinner: "_spinner_1kgxr_156",
	successIcon: "_successIcon_1kgxr_160",
	toolsRow: "_toolsRow_1kgxr_164",
	toolsLabel: "_toolsLabel_1kgxr_172",
	toolBadge: "_toolBadge_1kgxr_181",
	briefingBlock: "_briefingBlock_1kgxr_192",
	briefingTrigger: "_briefingTrigger_1kgxr_196",
	briefingContent: "_briefingContent_1kgxr_216"
};
var DelegateCard_default = /* @__PURE__ */ _plugin_vue_export_helper_default(DelegateCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": DelegateCard_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/TaskChecklist.vue?vue&type=script&setup=true&lang.ts
var TaskChecklist_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "TaskChecklist",
	props: { tasks: {} },
	setup(__props) {
		const statusConfig = {
			todo: {
				icon: "circle",
				spin: false,
				className: "todoIcon"
			},
			in_progress: {
				icon: "spinner",
				spin: true,
				className: "activeIcon"
			},
			done: {
				icon: "check",
				spin: false,
				className: "doneIcon"
			},
			failed: {
				icon: "triangle-alert",
				spin: false,
				className: "failedIcon"
			},
			cancelled: {
				icon: "x",
				spin: false,
				className: "cancelledIcon"
			}
		};
		function getConfig(status) {
			return statusConfig[status] ?? statusConfig.todo;
		}
		return (_ctx, _cache) => {
			return __props.tasks?.tasks?.length ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.root)
			}, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.tasks.tasks, (task) => {
				return openBlock(), createElementBlock("div", {
					key: task.id,
					class: normalizeClass(_ctx.$style.row)
				}, [createVNode(unref(N8nIcon_default), {
					icon: getConfig(task.status).icon,
					spin: getConfig(task.status).spin,
					size: "small",
					class: normalizeClass(_ctx.$style[getConfig(task.status).className])
				}, null, 8, [
					"icon",
					"spin",
					"class"
				]), createBaseVNode("span", { class: normalizeClass([
					_ctx.$style.label,
					task.status === "done" && _ctx.$style.labelDone,
					task.status === "cancelled" && _ctx.$style.labelCancelled
				]) }, toDisplayString(task.description), 3)], 2);
			}), 128))], 2)) : createCommentVNode("", true);
		};
	}
});
var TaskChecklist_vue_vue_type_style_index_0_lang_module_default = {
	root: "_root_1b06l_125",
	row: "_row_1b06l_136",
	label: "_label_1b06l_144",
	labelDone: "_labelDone_1b06l_148",
	labelCancelled: "_labelCancelled_1b06l_152",
	todoIcon: "_todoIcon_1b06l_157",
	activeIcon: "_activeIcon_1b06l_161",
	doneIcon: "_doneIcon_1b06l_165",
	failedIcon: "_failedIcon_1b06l_169",
	cancelledIcon: "_cancelledIcon_1b06l_173"
};
var TaskChecklist_default = /* @__PURE__ */ _plugin_vue_export_helper_default(TaskChecklist_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": TaskChecklist_vue_vue_type_style_index_0_lang_module_default }]]);
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
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.container),
				"data-test-id": "instance-ai-answered-questions"
			}, [(openBlock(true), createElementBlock(Fragment, null, renderList(getAnswers(), (item, idx) => {
				return openBlock(), createElementBlock("div", {
					key: idx,
					class: normalizeClass(_ctx.$style.answerItem)
				}, [createVNode(unref(N8nText_default), {
					bold: true,
					class: normalizeClass(_ctx.$style.question)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(item.question), 1)]),
					_: 2
				}, 1032, ["class"]), item.skipped ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					class: normalizeClass(_ctx.$style.skipped)
				}, {
					default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("Skipped", -1)])]),
					_: 1
				}, 8, ["class"])) : (openBlock(), createBlock(unref(N8nText_default), { key: 1 }, {
					default: withCtx(() => [createTextVNode(toDisplayString(item.answer), 1)]),
					_: 2
				}, 1024))], 2);
			}), 128))], 2);
		};
	}
});
var AnsweredQuestions_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_1qtcc_125",
	answerItem: "_answerItem_1qtcc_132",
	question: "_question_1qtcc_141",
	skipped: "_skipped_1qtcc_145"
};
var AnsweredQuestions_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AnsweredQuestions_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AnsweredQuestions_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/PlanReviewPanel.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$8 = ["onClick"];
var _hoisted_2$5 = ["placeholder", "disabled"];
var PlanReviewPanel_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "PlanReviewPanel",
	props: {
		plannedTasks: {},
		message: {},
		disabled: { type: Boolean },
		readOnly: { type: Boolean }
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
		const expandedIds = ref(/* @__PURE__ */ new Set());
		const feedback = ref("");
		const isResolved = ref(false);
		const resolvedAction = ref(null);
		const hasFeedback = computed(() => feedback.value.trim().length > 0);
		const kindConfig = {
			"build-workflow": {
				icon: "workflow",
				label: "Workflow"
			},
			"manage-data-tables": {
				icon: "table",
				label: "Data table"
			},
			research: {
				icon: "search",
				label: "Research"
			},
			delegate: {
				icon: "share",
				label: "Task"
			}
		};
		function getKind(kind) {
			return kindConfig[kind] ?? {
				icon: "circle",
				label: kind
			};
		}
		function toggle(id) {
			if (expandedIds.value.has(id)) expandedIds.value.delete(id);
			else expandedIds.value.add(id);
		}
		function getDeps(task) {
			if (!task.deps.length) return [];
			return task.deps.map((depId) => {
				return props.plannedTasks.find((t) => t.id === depId)?.title ?? depId;
			});
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
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.root),
				"data-test-id": "instance-ai-plan-review"
			}, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [
					createVNode(unref(N8nIcon_default), {
						icon: "scroll-text",
						size: "small",
						class: normalizeClass(_ctx.$style.headerIcon)
					}, null, 8, ["class"]),
					createBaseVNode("span", { class: normalizeClass(_ctx.$style.headerTitle) }, toDisplayString(unref(i18n).baseText("instanceAi.planReview.title")), 3),
					createBaseVNode("span", { class: normalizeClass(_ctx.$style.taskCount) }, toDisplayString(__props.plannedTasks.length) + " tasks", 3),
					props.readOnly ? (openBlock(), createElementBlock("span", {
						key: 0,
						class: normalizeClass(_ctx.$style.badgeApproved)
					}, toDisplayString(unref(i18n).baseText("instanceAi.planReview.approved")), 3)) : !isResolved.value ? (openBlock(), createElementBlock("span", {
						key: 1,
						class: normalizeClass(_ctx.$style.badge)
					}, toDisplayString(unref(i18n).baseText("instanceAi.planReview.awaitingApproval")), 3)) : resolvedAction.value === "approved" ? (openBlock(), createElementBlock("span", {
						key: 2,
						class: normalizeClass(_ctx.$style.badgeApproved)
					}, toDisplayString(unref(i18n).baseText("instanceAi.planReview.approved")), 3)) : createCommentVNode("", true)
				], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.tasks) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.plannedTasks, (task, idx) => {
					return openBlock(), createElementBlock("div", {
						key: task.id,
						class: normalizeClass(_ctx.$style.taskItem)
					}, [createBaseVNode("button", {
						class: normalizeClass([_ctx.$style.taskRow, expandedIds.value.has(task.id) && _ctx.$style.taskRowExpanded]),
						type: "button",
						onClick: ($event) => toggle(task.id)
					}, [
						createBaseVNode("span", { class: normalizeClass(_ctx.$style.taskNumber) }, toDisplayString(idx + 1), 3),
						createVNode(unref(N8nIcon_default), {
							icon: getKind(task.kind).icon,
							size: "small",
							class: normalizeClass(_ctx.$style.taskKindIcon)
						}, null, 8, ["icon", "class"]),
						createBaseVNode("span", { class: normalizeClass(_ctx.$style.taskTitle) }, toDisplayString(task.title), 3),
						createBaseVNode("span", { class: normalizeClass(_ctx.$style.taskKindBadge) }, toDisplayString(getKind(task.kind).label), 3),
						createVNode(unref(N8nIcon_default), {
							icon: expandedIds.value.has(task.id) ? "chevron-up" : "chevron-down",
							size: "small",
							class: normalizeClass(_ctx.$style.chevron)
						}, null, 8, ["icon", "class"])
					], 10, _hoisted_1$8), expandedIds.value.has(task.id) ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.taskDetail)
					}, [createBaseVNode("p", { class: normalizeClass(_ctx.$style.taskSpec) }, toDisplayString(task.spec), 3), getDeps(task).length > 0 ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.taskDeps)
					}, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.depsLabel) }, "Depends on:", 2), (openBlock(true), createElementBlock(Fragment, null, renderList(getDeps(task), (dep) => {
						return openBlock(), createElementBlock("span", {
							key: dep,
							class: normalizeClass(_ctx.$style.depChip)
						}, toDisplayString(dep), 3);
					}), 128))], 2)) : createCommentVNode("", true)], 2)) : createCommentVNode("", true)], 2);
				}), 128))], 2),
				!isResolved.value && !props.readOnly ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.footer)
				}, [withDirectives(createBaseVNode("textarea", {
					"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => feedback.value = $event),
					class: normalizeClass(_ctx.$style.feedbackTextarea),
					placeholder: unref(i18n).baseText("instanceAi.planReview.feedbackPlaceholder"),
					disabled: __props.disabled,
					rows: "2"
				}, null, 10, _hoisted_2$5), [[vModelText, feedback.value]]), createBaseVNode("div", { class: normalizeClass(_ctx.$style.actions) }, [createVNode(unref(N8nButton_default), {
					variant: "outline",
					size: "small",
					disabled: __props.disabled || !hasFeedback.value,
					"data-test-id": "instance-ai-plan-request-changes",
					onClick: handleRequestChanges
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.planReview.requestChanges")), 1)]),
					_: 1
				}, 8, ["disabled"]), createVNode(unref(N8nButton_default), {
					type: "primary",
					size: "small",
					disabled: __props.disabled,
					"data-test-id": "instance-ai-plan-approve",
					onClick: handleApprove
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.planReview.approve")), 1)]),
					_: 1
				}, 8, ["disabled"])], 2)], 2)) : createCommentVNode("", true)
			], 2);
		};
	}
});
//#endregion
//#region src/features/ai/instanceAi/components/PlanReviewPanel.vue?vue&type=style&index=0&lang.module.scss
var root$2 = "_root_c6qwn_125";
var header$7 = "_header_c6qwn_132";
var headerIcon$1 = "_headerIcon_c6qwn_140";
var headerTitle$3 = "_headerTitle_c6qwn_145";
var taskCount = "_taskCount_c6qwn_151";
var badge = "_badge_c6qwn_156";
var badgeApproved = "_badgeApproved_c6qwn_167";
var tasks = "_tasks_c6qwn_178";
var taskItem = "_taskItem_c6qwn_183";
var taskRow = "_taskRow_c6qwn_187";
var taskNumber = "_taskNumber_c6qwn_204";
var taskKindIcon = "_taskKindIcon_c6qwn_218";
var taskTitle = "_taskTitle_c6qwn_223";
var taskKindBadge = "_taskKindBadge_c6qwn_234";
var chevron = "_chevron_c6qwn_244";
var taskDetail = "_taskDetail_c6qwn_249";
var taskSpec = "_taskSpec_c6qwn_265";
var taskDeps = "_taskDeps_c6qwn_274";
var depsLabel = "_depsLabel_c6qwn_282";
var depChip = "_depChip_c6qwn_288";
var footer$5 = "_footer_c6qwn_297";
var feedbackTextarea = "_feedbackTextarea_c6qwn_305";
var actions$4 = "_actions_c6qwn_324";
var PlanReviewPanel_vue_vue_type_style_index_0_lang_module_default = {
	root: root$2,
	header: header$7,
	headerIcon: headerIcon$1,
	headerTitle: headerTitle$3,
	taskCount,
	badge,
	badgeApproved,
	tasks,
	taskItem,
	taskRow,
	taskNumber,
	taskKindIcon,
	taskTitle,
	taskKindBadge,
	chevron,
	taskDetail,
	"detail-slide-in": "_detail-slide-in_c6qwn_1",
	taskSpec,
	taskDeps,
	depsLabel,
	depChip,
	footer: footer$5,
	feedbackTextarea,
	actions: actions$4
};
var PlanReviewPanel_default = /* @__PURE__ */ _plugin_vue_export_helper_default(PlanReviewPanel_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": PlanReviewPanel_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/agentTimeline.utils.ts
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
//#region src/features/ai/instanceAi/components/AgentTimeline.vue?vue&type=script&setup=true&lang.ts
var AgentTimeline_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentTimeline",
	props: {
		agentNode: {},
		compact: {
			type: Boolean,
			default: false
		}
	},
	setup(__props) {
		const i18n = useI18n();
		const store = useInstanceAiStore();
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
		/** Tool calls that are internal bookkeeping and should not be shown to the user. */
		const HIDDEN_TOOLS = new Set(["updateWorkingMemory"]);
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
			store.resolveConfirmation(requestId, approved ? "approved" : "denied");
			store.confirmAction(requestId, approved, void 0, void 0, void 0, feedback);
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.timeline) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(props.agentNode.timeline, (entry, idx) => {
				return openBlock(), createElementBlock(Fragment, { key: idx }, [entry.type === "text" ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass([_ctx.$style.textContent, props.compact && _ctx.$style.compactText])
				}, [createVNode(InstanceAiMarkdown_default, { content: entry.content }, null, 8, ["content"])], 2)) : entry.type === "tool-call" && toolCallsById.value[entry.toolCallId] && !unref(HIDDEN_TOOLS).has(toolCallsById.value[entry.toolCallId].toolName) ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [toolCallsById.value[entry.toolCallId].renderHint === "tasks" ? (openBlock(), createBlock(TaskChecklist_default, {
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
				])) : toolCallsById.value[entry.toolCallId].renderHint === "builder" ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [], 64)) : toolCallsById.value[entry.toolCallId].renderHint === "data-table" ? (openBlock(), createElementBlock(Fragment, { key: 3 }, [], 64)) : toolCallsById.value[entry.toolCallId].renderHint === "researcher" ? (openBlock(), createElementBlock(Fragment, { key: 4 }, [], 64)) : toolCallsById.value[entry.toolCallId].confirmation?.inputType === "questions" && !toolCallsById.value[entry.toolCallId].isLoading ? (openBlock(), createBlock(AnsweredQuestions_default, {
					key: 5,
					"tool-call": toolCallsById.value[entry.toolCallId]
				}, null, 8, ["tool-call"])) : toolCallsById.value[entry.toolCallId].confirmation?.inputType === "plan-review" ? (openBlock(), createBlock(PlanReviewPanel_default, {
					key: 6,
					"planned-tasks": toolCallsById.value[entry.toolCallId].args?.tasks ?? [],
					"read-only": !toolCallsById.value[entry.toolCallId].isLoading,
					onApprove: ($event) => handlePlanConfirm(toolCallsById.value[entry.toolCallId], true),
					onRequestChanges: (fb) => handlePlanConfirm(toolCallsById.value[entry.toolCallId], false, fb)
				}, null, 8, [
					"planned-tasks",
					"read-only",
					"onApprove",
					"onRequestChanges"
				])) : toolCallsById.value[entry.toolCallId].confirmation?.inputType === "questions" && toolCallsById.value[entry.toolCallId].isLoading ? (openBlock(), createElementBlock(Fragment, { key: 7 }, [], 64)) : (openBlock(), createBlock(ToolCallStep_default, {
					key: 8,
					"tool-call": toolCallsById.value[entry.toolCallId],
					"show-connector": true
				}, {
					default: withCtx(() => [renderSlot(_ctx.$slots, "after-tool-call", { toolCall: toolCallsById.value[entry.toolCallId] })]),
					_: 2
				}, 1032, ["tool-call"]))], 64)) : entry.type === "child" && childrenById.value[entry.agentId] ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [createVNode(AgentSection_default, { "agent-node": childrenById.value[entry.agentId] }, null, 8, ["agent-node"]), (openBlock(true), createElementBlock(Fragment, null, renderList(unref(extractArtifacts)(childrenById.value[entry.agentId]), (artifact) => {
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
				}), 128))], 64)) : createCommentVNode("", true)], 64);
			}), 128))], 2);
		};
	}
});
var AgentTimeline_vue_vue_type_style_index_0_lang_module_default = {
	timeline: "_timeline_15b7h_125",
	textContent: "_textContent_15b7h_129",
	compactText: "_compactText_15b7h_136"
};
var AgentTimeline_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentTimeline_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentTimeline_vue_vue_type_style_index_0_lang_module_default }]]);
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
		const hasReasoning = computed(() => props.agentNode.reasoning.length > 0);
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.tree) }, [__props.isRoot && hasReasoning.value ? (openBlock(), createBlock(unref(CollapsibleRoot_default), {
				key: 0,
				class: normalizeClass(_ctx.$style.reasoningBlock)
			}, {
				default: withCtx(() => [createVNode(unref(CollapsibleTrigger_default), { class: normalizeClass(_ctx.$style.reasoningTrigger) }, {
					default: withCtx(() => [createVNode(unref(N8nIcon_default), {
						icon: "brain",
						size: "small"
					}), createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("instanceAi.message.reasoning")), 1)]),
					_: 1
				}, 8, ["class"]), createVNode(unref(CollapsibleContent_default), { class: normalizeClass(_ctx.$style.reasoningContent) }, {
					default: withCtx(() => [createBaseVNode("p", null, toDisplayString(props.agentNode.reasoning), 1)]),
					_: 1
				}, 8, ["class"])]),
				_: 1
			}, 8, ["class"])) : createCommentVNode("", true), createVNode(AgentTimeline_default, { "agent-node": props.agentNode }, null, 8, ["agent-node"])], 2);
		};
	}
});
var AgentActivityTree_vue_vue_type_style_index_0_lang_module_default = {
	tree: "_tree_yl6ea_125",
	reasoningBlock: "_reasoningBlock_yl6ea_129",
	reasoningTrigger: "_reasoningTrigger_yl6ea_133",
	reasoningContent: "_reasoningContent_yl6ea_149"
};
var AgentActivityTree_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentActivityTree_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentActivityTree_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiMessage.vue?vue&type=script&setup=true&lang.ts
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
			return openBlock(), createElementBlock("div", { class: normalizeClass([_ctx.$style.message, isUser.value ? _ctx.$style.userMessage : _ctx.$style.assistantMessage]) }, [isUser.value ? (openBlock(), createElementBlock("div", {
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
			}), 128))], 2)) : createCommentVNode("", true), createBaseVNode("span", null, toDisplayString(props.message.content), 1)], 2)) : (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.assistantWrapper),
				"data-test-id": "instance-ai-assistant-message"
			}, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.assistantContent) }, [
					props.message.agentTree ? (openBlock(), createBlock(AgentActivityTree_default, {
						key: 0,
						"agent-node": props.message.agentTree,
						"is-root": true
					}, null, 8, ["agent-node"])) : createCommentVNode("", true),
					runError.value ? (openBlock(), createElementBlock("div", {
						key: 1,
						class: normalizeClass(_ctx.$style.errorBubble),
						role: "alert"
					}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.errorIcon) }, [createVNode(unref(N8nIcon_default), {
						icon: "triangle-alert",
						size: "medium"
					})], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.errorBody) }, [
						createBaseVNode("div", { class: normalizeClass(_ctx.$style.errorHeader) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.errorTitle) }, toDisplayString(errorTitle.value), 3), errorDetails.value?.statusCode ? (openBlock(), createElementBlock("span", {
							key: 0,
							class: normalizeClass(_ctx.$style.errorStatusCode)
						}, toDisplayString(errorDetails.value.statusCode), 3)) : createCommentVNode("", true)], 2),
						hasProviderError.value ? (openBlock(), createElementBlock("p", {
							key: 0,
							class: normalizeClass(_ctx.$style.errorDescription)
						}, toDisplayString(runError.value), 3)) : createCommentVNode("", true),
						formattedTechnicalDetails.value ? (openBlock(), createElementBlock("details", {
							key: 1,
							class: normalizeClass(_ctx.$style.errorDetailsCollapsible)
						}, [createBaseVNode("summary", { class: normalizeClass(_ctx.$style.errorDetailsSummary) }, toDisplayString(unref(i18n).baseText("instanceAi.error.technicalDetails")), 3), createBaseVNode("pre", { class: normalizeClass(_ctx.$style.errorDetailsContent) }, toDisplayString(formattedTechnicalDetails.value), 3)], 2)) : createCommentVNode("", true)
					], 2)], 2)) : createCommentVNode("", true),
					showContent.value && !props.message.agentTree ? (openBlock(), createElementBlock("div", {
						key: 2,
						class: normalizeClass(_ctx.$style.textContent)
					}, [props.message.content ? (openBlock(), createBlock(InstanceAiMarkdown_default, {
						key: 0,
						content: props.message.content
					}, null, 8, ["content"])) : createCommentVNode("", true)], 2)) : createCommentVNode("", true),
					statusMessage.value && !props.message.content ? (openBlock(), createElementBlock("div", {
						key: 3,
						class: normalizeClass(_ctx.$style.statusIndicator)
					}, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.statusDot) }, null, 2), createBaseVNode("span", null, toDisplayString(statusMessage.value), 1)], 2)) : isStreaming.value && !props.message.content && !props.message.agentTree ? (openBlock(), createElementBlock("span", {
						key: 4,
						class: normalizeClass(_ctx.$style.blinkingCursor)
					}, null, 2)) : createCommentVNode("", true),
					hasActiveBackgroundTasks.value ? (openBlock(), createElementBlock("div", {
						key: 5,
						class: normalizeClass(_ctx.$style.backgroundStatus)
					}, [createVNode(unref(N8nIcon_default), {
						icon: "spinner",
						spin: "",
						size: "small"
					}), createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("instanceAi.backgroundTask.running")), 1)], 2)) : createCommentVNode("", true)
				], 2),
				isRateable.value ? (openBlock(), createBlock(unref(MessageRating_default), {
					key: 0,
					minimal: "",
					"data-test-id": "instance-ai-message-rating",
					onFeedback
				})) : hasSubmittedFeedback.value ? (openBlock(), createElementBlock("p", {
					key: 1,
					class: normalizeClass(_ctx.$style.feedbackSuccess),
					"data-test-id": "instance-ai-feedback-success"
				}, toDisplayString(unref(i18n).baseText("instanceAi.feedback.success")), 3)) : createCommentVNode("", true),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.actionButtons) }, [unref(store).debugMode && !isUser.value ? (openBlock(), createBlock(unref(N8nIconButton_default), {
					key: 0,
					icon: "code",
					variant: "ghost",
					size: "xsmall",
					class: normalizeClass(_ctx.$style.actionBtn),
					onClick: _cache[0] || (_cache[0] = ($event) => showDebugInfo.value = !showDebugInfo.value)
				}, null, 8, ["class"])) : createCommentVNode("", true)], 2),
				showDebugInfo.value ? (openBlock(), createElementBlock("pre", {
					key: 2,
					class: normalizeClass(_ctx.$style.debugJson)
				}, toDisplayString(formatJson(props.message)), 3)) : createCommentVNode("", true)
			], 2))], 2);
		};
	}
});
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiMessage.vue?vue&type=style&index=0&lang.module.scss
var message$2 = "_message_9om9q_125";
var userMessage = "_userMessage_9om9q_129";
var assistantMessage = "_assistantMessage_9om9q_134";
var userAttachments = "_userAttachments_9om9q_139";
var userBubble = "_userBubble_9om9q_146";
var assistantWrapper = "_assistantWrapper_9om9q_158";
var actionBtn = "_actionBtn_9om9q_163";
var assistantContent = "_assistantContent_9om9q_167";
var textContent = "_textContent_9om9q_171";
var actionButtons = "_actionButtons_9om9q_177";
var feedbackSuccess = "_feedbackSuccess_9om9q_195";
var backgroundStatus = "_backgroundStatus_9om9q_201";
var statusIndicator = "_statusIndicator_9om9q_211";
var statusDot$1 = "_statusDot_9om9q_221";
var pulse$1 = "_pulse_9om9q_1";
var blinkingCursor = "_blinkingCursor_9om9q_245";
var errorBubble = "_errorBubble_9om9q_262";
var errorIcon = "_errorIcon_9om9q_275";
var errorBody = "_errorBody_9om9q_282";
var errorHeader = "_errorHeader_9om9q_287";
var errorTitle = "_errorTitle_9om9q_293";
var errorStatusCode = "_errorStatusCode_9om9q_297";
var errorDescription = "_errorDescription_9om9q_303";
var errorDetailsCollapsible = "_errorDetailsCollapsible_9om9q_309";
var errorDetailsSummary = "_errorDetailsSummary_9om9q_313";
var errorDetailsContent = "_errorDetailsContent_9om9q_322";
var debugJson = "_debugJson_9om9q_336";
var InstanceAiMessage_vue_vue_type_style_index_0_lang_module_default = {
	message: message$2,
	userMessage,
	assistantMessage,
	userAttachments,
	userBubble,
	assistantWrapper,
	actionBtn,
	assistantContent,
	textContent,
	actionButtons,
	feedbackSuccess,
	backgroundStatus,
	statusIndicator,
	"status-fade-in": "_status-fade-in_9om9q_1",
	statusDot: statusDot$1,
	pulse: pulse$1,
	blinkingCursor,
	"cursor-blink": "_cursor-blink_9om9q_1",
	errorBubble,
	errorIcon,
	errorBody,
	errorHeader,
	errorTitle,
	errorStatusCode,
	errorDescription,
	errorDetailsCollapsible,
	errorDetailsSummary,
	errorDetailsContent,
	debugJson
};
var InstanceAiMessage_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiMessage_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiMessage_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/shared/components/ChatInputBase.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$7 = ["accept"];
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
		const isFocused = ref(false);
		const committedSpokenMessage = ref("");
		const speechInput = useSpeechRecognition({
			continuous: true,
			interimResults: true,
			lang: navigator.language
		});
		watch(speechInput.result, (spoken) => {
			if (props.showVoice) emit("update:modelValue", committedSpokenMessage.value + " " + spoken.trimStart());
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
				class: normalizeClass([_ctx.$style.inputWrapper, { [_ctx.$style.focused]: isFocused.value }]),
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
				}, null, 42, _hoisted_1$7)) : createCommentVNode("", true),
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
					onKeydown: handleKeydown,
					onFocus: _cache[1] || (_cache[1] = ($event) => isFocused.value = true),
					onBlur: _cache[2] || (_cache[2] = ($event) => isFocused.value = false)
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
						variant: "outline",
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
						onClick: _cache[3] || (_cache[3] = withModifiers(($event) => emit("stop"), ["stop"]))
					}, null, 8, ["title"])) : (openBlock(), createBlock(unref(N8nIconButton_default), {
						key: 3,
						"native-type": "button",
						disabled: !__props.canSubmit,
						title: unref(i18n).baseText("instanceAi.input.send"),
						icon: "arrow-up",
						"icon-size": "large",
						"data-test-id": "instance-ai-send-button",
						onClick: _cache[4] || (_cache[4] = withModifiers(($event) => emit("submit"), ["stop"]))
					}, null, 8, ["disabled", "title"]))
				], 2)], 2)
			], 34);
		};
	}
});
var ChatInputBase_vue_vue_type_style_index_0_lang_module_default = {
	inputWrapper: "_inputWrapper_xl961_125",
	focused: "_focused_xl961_144",
	footer: "_footer_xl961_162",
	footerStart: "_footerStart_xl961_169",
	actions: "_actions_xl961_173",
	fileInput: "_fileInput_xl961_182",
	recording: "_recording_xl961_186",
	chatInputRecordingPulse: "_chatInputRecordingPulse_xl961_1"
};
var ChatInputBase_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ChatInputBase_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatInputBase_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiInput.vue?vue&type=script&setup=true&lang.ts
var InstanceAiInput_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiInput",
	props: { isStreaming: { type: Boolean } },
	emits: ["submit", "stop"],
	setup(__props, { expose: __expose, emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const store = useInstanceAiStore();
		const inputText = ref("");
		const attachedFiles = ref([]);
		const chatInputRef = ref(null);
		__expose({ focus: () => chatInputRef.value?.focus() });
		const canSubmit = computed(() => (inputText.value.trim().length > 0 || attachedFiles.value.length > 0) && !props.isStreaming);
		const placeholder = computed(() => {
			if (store.amendContext) return i18n.baseText("instanceAi.input.amendPlaceholder", { interpolate: { role: store.amendContext.role } });
			if (store.contextualSuggestion) return store.contextualSuggestion;
			return i18n.baseText("instanceAi.input.placeholder");
		});
		async function handleSubmit() {
			const text = inputText.value.trim();
			if (!text && attachedFiles.value.length === 0 || props.isStreaming) return;
			let attachments;
			if (attachedFiles.value.length > 0) attachments = (await Promise.all(attachedFiles.value.map(convertFileToBinaryData))).map((b) => ({
				data: b.data,
				mimeType: b.mimeType,
				fileName: b.fileName ?? "unnamed"
			}));
			emit("submit", text, attachments);
			inputText.value = "";
			attachedFiles.value = [];
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
		return (_ctx, _cache) => {
			return openBlock(), createBlock(ChatInputBase_default, {
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
					}, [..._cache[2] || (_cache[2] = [createBaseVNode("path", { d: "M6.5 1a5.5 5.5 0 0 1 4.383 8.823l3.897 3.897a.75.75 0 0 1-1.06 1.06l-3.897-3.897A5.5 5.5 0 1 1 6.5 1Zm0 1.5a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" }, null, -1)])], 2)), createTextVNode(" " + toDisplayString(unref(i18n).baseText("instanceAi.input.researchToggle")), 1)], 2)]),
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
			]);
		};
	}
});
var InstanceAiInput_vue_vue_type_style_index_0_lang_module_default = {
	attachments: "_attachments_2d5ei_125",
	researchToggle: "_researchToggle_2d5ei_131",
	active: "_active_2d5ei_150",
	researchIcon: "_researchIcon_2d5ei_160"
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
		function handleBack() {
			router.push({ name: VIEWS.HOMEPAGE });
		}
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
			}, [
				createBaseVNode("button", {
					class: normalizeClass(_ctx.$style.backButton),
					onClick: handleBack
				}, [createVNode(unref(N8nIcon_default), {
					icon: "chevron-left",
					size: "small"
				}), createTextVNode(" " + toDisplayString(unref(i18n).baseText("instanceAi.sidebar.back")), 1)], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.separator) }, null, 2),
				createBaseVNode("button", {
					class: normalizeClass(_ctx.$style.newChatButton),
					"data-test-id": "instance-ai-new-thread-button",
					onClick: handleNewThread
				}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.newChatIcon) }, [createVNode(unref(N8nIcon_default), {
					icon: "plus",
					size: "medium"
				})], 2), createTextVNode(" " + toDisplayString(unref(i18n).baseText("instanceAi.thread.new")), 1)], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.threadList) }, [groupedThreads.value.length > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(groupedThreads.value, (group) => {
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
							onDblclick: withModifiers(($event) => startRename(thread.id, thread.title), ["prevent"])
						}, {
							default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.threadTitle) }, toDisplayString(thread.title), 3)]),
							_: 2
						}, 1032, [
							"to",
							"class",
							"title",
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
				})], 2))], 2)
			], 2);
		};
	}
});
var InstanceAiThreadList_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_1q626_125",
	backButton: "_backButton_1q626_133",
	separator: "_separator_1q626_150",
	newChatButton: "_newChatButton_1q626_155",
	newChatIcon: "_newChatIcon_1q626_173",
	threadList: "_threadList_1q626_184",
	group: "_group_1q626_190",
	groupLabel: "_groupLabel_1q626_194",
	threadItem: "_threadItem_1q626_202",
	active: "_active_1q626_211",
	threadLink: "_threadLink_1q626_218",
	threadIcon: "_threadIcon_1q626_235",
	threadTitle: "_threadTitle_1q626_240",
	actionDropdown: "_actionDropdown_1q626_248",
	actionTrigger: "_actionTrigger_1q626_259",
	renameContainer: "_renameContainer_1q626_264",
	renameInput: "_renameInput_1q626_269",
	empty: "_empty_1q626_286"
};
var InstanceAiThreadList_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiThreadList_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiThreadList_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/instanceAiMemory.store.ts
var useInstanceAiMemoryStore = defineStore("instanceAiMemory", () => {
	const rootStore = useRootStore();
	const toast = useToast();
	const content = ref("");
	const template = ref("");
	const originalContent = ref("");
	const isLoading = ref(false);
	const isDirty = computed(() => content.value !== originalContent.value);
	async function fetch(threadId) {
		isLoading.value = true;
		try {
			const result = await fetchMemory(rootStore.restApiContext, threadId);
			content.value = result.content;
			template.value = result.template;
			originalContent.value = result.content;
		} catch {
			toast.showError(/* @__PURE__ */ new Error("Failed to load memory"), "Memory error");
		} finally {
			isLoading.value = false;
		}
	}
	async function save(threadId) {
		isLoading.value = true;
		try {
			await updateMemory(rootStore.restApiContext, threadId, content.value);
			originalContent.value = content.value;
		} catch {
			toast.showError(/* @__PURE__ */ new Error("Failed to save memory"), "Memory error");
		} finally {
			isLoading.value = false;
		}
	}
	function resetToTemplate() {
		content.value = template.value;
	}
	function reset() {
		content.value = "";
		template.value = "";
		originalContent.value = "";
		isLoading.value = false;
	}
	return {
		content,
		template,
		isLoading,
		isDirty,
		fetch,
		save,
		resetToTemplate,
		reset
	};
});
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiMemoryPanel.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$5 = ["placeholder"];
var _hoisted_2$4 = ["disabled"];
var _hoisted_3$3 = ["disabled"];
var InstanceAiMemoryPanel_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiMemoryPanel",
	emits: ["close"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const i18n = useI18n();
		const store = useInstanceAiStore();
		const memoryStore = useInstanceAiMemoryStore();
		const fetchedThreadId = ref(store.currentThreadId);
		watch(() => store.currentThreadId, (threadId) => {
			fetchedThreadId.value = threadId;
			memoryStore.fetch(threadId);
		}, { immediate: true });
		function handleSave() {
			memoryStore.save(fetchedThreadId.value);
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.panel) }, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.headerTitle) }, [createVNode(unref(N8nIcon_default), {
					icon: "brain",
					size: "small"
				}), createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("instanceAi.memory.title")), 1)], 2), createVNode(unref(N8nIconButton_default), {
					icon: "x",
					variant: "ghost",
					size: "small",
					onClick: _cache[0] || (_cache[0] = ($event) => emit("close"))
				})], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.body) }, [unref(memoryStore).isLoading ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.loading)
				}, [createVNode(unref(N8nIcon_default), {
					icon: "spinner",
					spin: ""
				})], 2)) : withDirectives((openBlock(), createElementBlock("textarea", {
					key: 1,
					"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(memoryStore).content = $event),
					class: normalizeClass(_ctx.$style.textarea),
					placeholder: unref(i18n).baseText("instanceAi.memory.placeholder")
				}, null, 10, _hoisted_1$5)), [[vModelText, unref(memoryStore).content]])], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.footer) }, [createBaseVNode("button", {
					class: normalizeClass(_ctx.$style.resetButton),
					disabled: unref(memoryStore).isLoading,
					onClick: _cache[2] || (_cache[2] = ($event) => unref(memoryStore).resetToTemplate())
				}, toDisplayString(unref(i18n).baseText("instanceAi.memory.resetToTemplate")), 11, _hoisted_2$4), createBaseVNode("button", {
					class: normalizeClass(_ctx.$style.saveButton),
					disabled: !unref(memoryStore).isDirty || unref(memoryStore).isLoading,
					onClick: handleSave
				}, toDisplayString(unref(i18n).baseText("instanceAi.memory.save")), 11, _hoisted_3$3)], 2)
			], 2);
		};
	}
});
var InstanceAiMemoryPanel_vue_vue_type_style_index_0_lang_module_default = {
	panel: "_panel_1x6fw_125",
	header: "_header_1x6fw_138",
	headerTitle: "_headerTitle_1x6fw_146",
	body: "_body_1x6fw_154",
	loading: "_loading_1x6fw_160",
	textarea: "_textarea_1x6fw_168",
	footer: "_footer_1x6fw_186",
	resetButton: "_resetButton_1x6fw_193",
	saveButton: "_saveButton_1x6fw_211"
};
var InstanceAiMemoryPanel_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiMemoryPanel_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiMemoryPanel_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/instanceAiDebug.store.ts
var useInstanceAiDebugStore = defineStore("instanceAiDebug", () => {
	const rootStore = useRootStore();
	const toast = useToast();
	const i18n = useI18n();
	const threads = ref([]);
	const selectedThreadId = ref(null);
	const threadMessages = ref([]);
	const threadContext = ref(null);
	const isLoadingThreads = ref(false);
	const isLoadingMessages = ref(false);
	const isLoadingContext = ref(false);
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
		await Promise.all([loadMessages(), loadContext()]);
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
	async function loadContext() {
		if (!selectedThreadId.value) return;
		isLoadingContext.value = true;
		try {
			threadContext.value = await fetchThreadContext(rootStore.restApiContext, selectedThreadId.value);
		} catch {
			toast.showError(new Error(i18n.baseText("instanceAi.debug.threads.fetchError")), "Thread Inspector");
		} finally {
			isLoadingContext.value = false;
		}
	}
	function reset() {
		threads.value = [];
		selectedThreadId.value = null;
		threadMessages.value = [];
		threadContext.value = null;
		isLoadingThreads.value = false;
		isLoadingMessages.value = false;
		isLoadingContext.value = false;
	}
	return {
		threads,
		selectedThreadId,
		threadMessages,
		threadContext,
		isLoadingThreads,
		isLoadingMessages,
		isLoadingContext,
		selectedThread,
		loadThreads,
		selectThread,
		loadMessages,
		loadContext,
		reset
	};
});
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiDebugPanel.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$4 = ["data-state"];
var _hoisted_2$3 = ["onClick"];
var _hoisted_3$2 = ["onClick"];
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
		const activeThreadSubTab = ref("messages");
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
			activeThreadSubTab.value = "messages";
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
						}, null, 10, _hoisted_1$4),
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
						}, toDisplayString(formatJson(entry.event)), 3)) : createCommentVNode("", true)], 10, _hoisted_2$3);
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
						}, toDisplayString(unref(i18n).baseText("instanceAi.debug.threads.current")), 3)) : createCommentVNode("", true)], 2), createBaseVNode("span", { class: normalizeClass(_ctx.$style.threadTime) }, toDisplayString(formatDateTime(thread.updatedAt)), 3)], 10, _hoisted_3$2);
					}), 128))], 2)),
					unref(debugStore).selectedThreadId ? (openBlock(), createElementBlock(Fragment, { key: 3 }, [
						createBaseVNode("div", { class: normalizeClass(_ctx.$style.threadDetailHeader) }, [createBaseVNode("button", {
							class: normalizeClass([_ctx.$style.subTab, activeThreadSubTab.value === "messages" && _ctx.$style.subTabActive]),
							onClick: _cache[3] || (_cache[3] = ($event) => activeThreadSubTab.value = "messages")
						}, toDisplayString(unref(i18n).baseText("instanceAi.debug.threads.messages")), 3), createBaseVNode("button", {
							class: normalizeClass([_ctx.$style.subTab, activeThreadSubTab.value === "context" && _ctx.$style.subTabActive]),
							onClick: _cache[4] || (_cache[4] = ($event) => activeThreadSubTab.value = "context")
						}, toDisplayString(unref(i18n).baseText("instanceAi.debug.threads.context")), 3)], 2),
						activeThreadSubTab.value === "messages" ? (openBlock(), createElementBlock("div", {
							key: 0,
							class: normalizeClass(_ctx.$style.threadDetailContent)
						}, [unref(debugStore).isLoadingMessages ? (openBlock(), createElementBlock("div", {
							key: 0,
							class: normalizeClass(_ctx.$style.loadingState)
						}, [createVNode(unref(N8nIcon_default), {
							icon: "spinner",
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
						}), 128))], 2)) : createCommentVNode("", true),
						activeThreadSubTab.value === "context" ? (openBlock(), createElementBlock("div", {
							key: 1,
							class: normalizeClass(_ctx.$style.threadDetailContent)
						}, [unref(debugStore).isLoadingContext ? (openBlock(), createElementBlock("div", {
							key: 0,
							class: normalizeClass(_ctx.$style.loadingState)
						}, [createVNode(unref(N8nIcon_default), {
							icon: "spinner",
							spin: "",
							size: "small"
						})], 2)) : unref(debugStore).threadContext ? (openBlock(), createElementBlock("div", {
							key: 1,
							class: normalizeClass(_ctx.$style.contextSection)
						}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.contextLabel) }, toDisplayString(unref(i18n).baseText("instanceAi.debug.threads.workingMemory")), 3), createBaseVNode("pre", { class: normalizeClass(_ctx.$style.contextContent) }, toDisplayString(unref(debugStore).threadContext.workingMemory || "(empty)"), 3)], 2)) : createCommentVNode("", true)], 2)) : createCommentVNode("", true)
					], 64)) : createCommentVNode("", true)
				], 64)) : createCommentVNode("", true)
			], 2);
		};
	}
});
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiDebugPanel.vue?vue&type=style&index=0&lang.module.scss
var panel$1 = "_panel_vi499_125";
var header$5 = "_header_vi499_138";
var headerTitle$1 = "_headerTitle_vi499_146";
var headerActions$1 = "_headerActions_vi499_154";
var copyButton = "_copyButton_vi499_160";
var tabBar = "_tabBar_vi499_174";
var tab$1 = "_tab_vi499_174";
var tabActive = "_tabActive_vi499_196";
var statusBar = "_statusBar_vi499_202";
var statusDot = "_statusDot_vi499_212";
var eventCount = "_eventCount_vi499_225";
var timingSection = "_timingSection_vi499_229";
var timingTitle = "_timingTitle_vi499_234";
var timingRow = "_timingRow_vi499_243";
var timingName = "_timingName_vi499_250";
var timingDuration = "_timingDuration_vi499_255";
var eventList = "_eventList_vi499_260";
var eventRow = "_eventRow_vi499_266";
var eventHeader = "_eventHeader_vi499_275";
var eventTime = "_eventTime_vi499_281";
var eventType = "_eventType_vi499_286";
var error$1 = "_error_vi499_293";
var finish = "_finish_vi499_298";
var start = "_start_vi499_303";
var tool = "_tool_vi499_308";
var text = "_text_vi499_313";
var confirm = "_confirm_vi499_318";
var eventPayload = "_eventPayload_vi499_328";
var threadListHeader = "_threadListHeader_vi499_344";
var sectionLabel = "_sectionLabel_vi499_352";
var loadingState = "_loadingState_vi499_360";
var emptyState$1 = "_emptyState_vi499_368";
var threadList = "_threadList_vi499_344";
var threadRow = "_threadRow_vi499_381";
var threadRowSelected = "_threadRowSelected_vi499_390";
var threadRowMain = "_threadRowMain_vi499_397";
var threadTitle = "_threadTitle_vi499_403";
var currentBadge = "_currentBadge_vi499_412";
var threadTime = "_threadTime_vi499_420";
var threadDetailHeader = "_threadDetailHeader_vi499_425";
var subTab = "_subTab_vi499_430";
var subTabActive = "_subTabActive_vi499_445";
var threadDetailContent = "_threadDetailContent_vi499_451";
var messageRow = "_messageRow_vi499_457";
var messageHeader = "_messageHeader_vi499_466";
var messagePreview = "_messagePreview_vi499_473";
var contextSection = "_contextSection_vi499_481";
var contextLabel = "_contextLabel_vi499_485";
var contextContent = "_contextContent_vi499_494";
var InstanceAiDebugPanel_vue_vue_type_style_index_0_lang_module_default = {
	panel: panel$1,
	header: header$5,
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
	"default": "_default_vi499_323",
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
	subTab,
	subTabActive,
	threadDetailContent,
	messageRow,
	messageHeader,
	messagePreview,
	contextSection,
	contextLabel,
	contextContent
};
var InstanceAiDebugPanel_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiDebugPanel_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiDebugPanel_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiArtifactsPanel.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$3 = ["onClick"];
var _hoisted_2$2 = ["title"];
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
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.panel) }, [createBaseVNode("div", { class: normalizeClass([_ctx.$style.section, _ctx.$style.card]) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.sectionTitle) }, toDisplayString(unref(i18n).baseText("instanceAi.artifactsPanel.title")), 3), artifacts.value.length > 0 ? (openBlock(), createElementBlock("div", {
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
				}, null, 8, ["icon", "class"])], 2), createBaseVNode("span", { class: normalizeClass(_ctx.$style.artifactName) }, toDisplayString(artifact.name), 3)], 10, _hoisted_1$3);
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
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.sectionTitle) }, [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.artifactsPanel.tasks")) + " ", 1), createBaseVNode("span", { class: normalizeClass(_ctx.$style.progress) }, toDisplayString(doneCount.value) + "/" + toDisplayString(tasks.value.tasks.length), 3)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.taskList) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(tasks.value.tasks, (task) => {
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
				}, toDisplayString(task.description), 11, _hoisted_2$2)], 2);
			}), 128))], 2)], 2)) : createCommentVNode("", true)], 2);
		};
	}
});
var InstanceAiArtifactsPanel_vue_vue_type_style_index_0_lang_module_default = {
	panel: "_panel_rgwj4_125",
	section: "_section_rgwj4_135",
	card: "_card_rgwj4_140",
	sectionTitle: "_sectionTitle_rgwj4_147",
	progress: "_progress_rgwj4_156",
	artifactList: "_artifactList_rgwj4_163",
	artifactRow: "_artifactRow_rgwj4_168",
	artifactName: "_artifactName_rgwj4_180",
	artifactIcon: "_artifactIcon_rgwj4_183",
	artifactIconWrap: "_artifactIconWrap_rgwj4_187",
	emptyState: "_emptyState_rgwj4_210",
	emptyIcons: "_emptyIcons_rgwj4_220",
	emptyIcon: "_emptyIcon_rgwj4_220",
	taskList: "_taskList_rgwj4_233",
	task: "_task_rgwj4_233",
	doneTask: "_doneTask_rgwj4_247",
	failedTask: "_failedTask_rgwj4_252",
	cancelledTask: "_cancelledTask_rgwj4_256",
	taskDescription: "_taskDescription_rgwj4_260",
	todoIcon: "_todoIcon_rgwj4_269",
	inProgressIcon: "_inProgressIcon_rgwj4_273",
	doneIcon: "_doneIcon_rgwj4_277",
	failedIcon: "_failedIcon_rgwj4_284",
	cancelledIcon: "_cancelledIcon_rgwj4_288"
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
//#endregion
//#region src/features/ai/instanceAi/components/DomainAccessApproval.vue?vue&type=script&setup=true&lang.ts
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
			return !resolved.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.root)
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.body) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.message) }, [createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("instanceAi.domainAccess.prompt", { interpolate: { domain: props.host } })), 1)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.urlPreview) }, toDisplayString(props.url), 3)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.actions) }, [createVNode(unref(N8nButton_default), {
				variant: "outline",
				size: "small",
				label: unref(i18n).baseText("instanceAi.domainAccess.deny"),
				"data-test-id": "domain-access-deny",
				onClick: _cache[0] || (_cache[0] = ($event) => handleAction(false))
			}, null, 8, ["label"]), createBaseVNode("div", { class: normalizeClass(_ctx.$style.splitButton) }, [createVNode(unref(N8nButton_default), {
				variant: isDestructive.value ? "destructive" : "solid",
				class: normalizeClass(_ctx.$style.splitButtonMain),
				label: primaryLabel.value,
				"data-test-id": "domain-access-primary",
				size: "small",
				onClick: onPrimaryClick
			}, null, 8, [
				"variant",
				"class",
				"label"
			]), createVNode(unref(N8nActionDropdown_default), {
				items: dropdownItems.value,
				class: normalizeClass(_ctx.$style.splitButtonDropdown),
				"data-test-id": "domain-access-dropdown",
				placement: "bottom-start",
				onSelect: onDropdownSelect
			}, {
				activator: withCtx(() => [createVNode(unref(N8nIconButton_default), {
					variant: isDestructive.value ? "destructive" : "solid",
					icon: "chevron-down",
					class: normalizeClass(_ctx.$style.splitButtonCaret),
					"aria-label": "More approval options",
					size: "small"
				}, null, 8, ["variant", "class"])]),
				_: 1
			}, 8, ["items", "class"])], 2)], 2)], 2)) : createCommentVNode("", true);
		};
	}
});
var DomainAccessApproval_vue_vue_type_style_index_0_lang_module_default = {
	message: "_message_xw3a5_125",
	urlPreview: "_urlPreview_xw3a5_135",
	body: "_body_xw3a5_147",
	actions: "_actions_xw3a5_154",
	splitButton: "_splitButton_xw3a5_162",
	splitButtonMain: "_splitButtonMain_xw3a5_167",
	splitButtonDropdown: "_splitButtonDropdown_xw3a5_172",
	splitButtonCaret: "_splitButtonCaret_xw3a5_176"
};
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
			await store.confirmResourceDecision(props.requestId, decision);
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.root) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.body) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.message) }, toDisplayString(unref(i18n).baseText("instanceAi.gatewayConfirmation.prompt", { interpolate: { resources: props.resource } })), 3), createBaseVNode("div", { class: normalizeClass(_ctx.$style.preview) }, toDisplayString(props.description), 3)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.actions) }, [
				(openBlock(true), createElementBlock(Fragment, null, renderList(otherOptions.value, (opt) => {
					return openBlock(), createBlock(unref(N8nButton_default), {
						key: opt.decision,
						variant: "outline",
						size: "small",
						label: opt.label,
						onClick: ($event) => confirm(opt.decision)
					}, null, 8, ["label", "onClick"]);
				}), 128)),
				denyPrimary.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [denyDropdownItems.value.length ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.splitButton)
				}, [createVNode(unref(N8nButton_default), {
					variant: "outline",
					size: "small",
					label: denyPrimary.value.label,
					class: normalizeClass(_ctx.$style.splitButtonMain),
					"data-test-id": "gateway-decision-deny",
					onClick: _cache[0] || (_cache[0] = ($event) => confirm(denyPrimary.value.decision))
				}, null, 8, ["label", "class"]), createVNode(unref(N8nActionDropdown_default), {
					items: denyDropdownItems.value,
					class: normalizeClass(_ctx.$style.splitButtonDropdown),
					placement: "bottom-start",
					onSelect: confirm
				}, {
					activator: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						variant: "outline",
						icon: "chevron-down",
						class: normalizeClass(_ctx.$style.splitButtonCaret),
						"aria-label": "More deny options",
						size: "small"
					}, null, 8, ["class"])]),
					_: 1
				}, 8, ["items", "class"])], 2)) : (openBlock(), createBlock(unref(N8nButton_default), {
					key: 1,
					variant: "outline",
					size: "small",
					label: denyPrimary.value.label,
					"data-test-id": "gateway-decision-deny",
					onClick: _cache[1] || (_cache[1] = ($event) => confirm(denyPrimary.value.decision))
				}, null, 8, ["label"]))], 64)) : createCommentVNode("", true),
				approvePrimary.value ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [approveDropdownItems.value.length ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.splitButton)
				}, [createVNode(unref(N8nButton_default), {
					variant: "solid",
					size: "small",
					label: approvePrimary.value.label,
					class: normalizeClass(_ctx.$style.splitButtonMain),
					"data-test-id": "gateway-decision-approve",
					onClick: _cache[2] || (_cache[2] = ($event) => confirm(approvePrimary.value.decision))
				}, null, 8, ["label", "class"]), createVNode(unref(N8nActionDropdown_default), {
					items: approveDropdownItems.value,
					class: normalizeClass(_ctx.$style.splitButtonDropdown),
					placement: "bottom-start",
					onSelect: confirm
				}, {
					activator: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						variant: "solid",
						icon: "chevron-down",
						class: normalizeClass(_ctx.$style.splitButtonCaret),
						"aria-label": "More approve options",
						size: "small"
					}, null, 8, ["class"])]),
					_: 1
				}, 8, ["items", "class"])], 2)) : (openBlock(), createBlock(unref(N8nButton_default), {
					key: 1,
					variant: "solid",
					size: "small",
					label: approvePrimary.value.label,
					"data-test-id": "gateway-decision-approve",
					onClick: _cache[3] || (_cache[3] = ($event) => confirm(approvePrimary.value.decision))
				}, null, 8, ["label"]))], 64)) : createCommentVNode("", true)
			], 2)], 2);
		};
	}
});
var GatewayResourceDecision_vue_vue_type_style_index_0_lang_module_default = {
	root: "_root_mpusw_125",
	body: "_body_mpusw_130",
	message: "_message_mpusw_137",
	preview: "_preview_mpusw_143",
	actions: "_actions_mpusw_154",
	splitButton: "_splitButton_mpusw_162",
	splitButtonMain: "_splitButtonMain_mpusw_167",
	splitButtonDropdown: "_splitButtonDropdown_mpusw_172",
	splitButtonCaret: "_splitButtonCaret_mpusw_176"
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
		async function handleContinue() {
			const credentials = {};
			for (const [type, id] of Object.entries(selections.value)) if (id) credentials[type] = id;
			isSubmitted.value = true;
			if (await store.confirmAction(props.requestId, true, void 0, credentials)) store.resolveConfirmation(props.requestId, "approved");
			else isSubmitted.value = false;
		}
		async function handleLater() {
			isSubmitted.value = true;
			isDeferred.value = true;
			if (await store.confirmAction(props.requestId, false)) store.resolveConfirmation(props.requestId, "deferred");
			else {
				isSubmitted.value = false;
				isDeferred.value = false;
			}
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.root) }, [!isSubmitted.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [currentRequest.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				"data-test-id": "instance-ai-credential-card",
				class: normalizeClass([_ctx.$style.card, { [_ctx.$style.completed]: allSelected.value }])
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
				createBaseVNode("footer", { class: normalizeClass(_ctx.$style.footer) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.footerNav) }, [
					showArrows.value ? (openBlock(), createBlock(unref(N8nButton_default), {
						key: 0,
						variant: "outline",
						size: "xsmall",
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
						variant: "outline",
						size: "xsmall",
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
					size: "small",
					class: normalizeClass(_ctx.$style.actionButton),
					label: unref(i18n).baseText(isFinalize.value ? "instanceAi.credential.finalize.later" : "instanceAi.credential.deny"),
					onClick: handleLater
				}, null, 8, ["class", "label"]), createVNode(unref(N8nButton_default), {
					size: "small",
					class: normalizeClass(_ctx.$style.actionButton),
					label: unref(i18n).baseText("instanceAi.credential.continueButton"),
					disabled: !anySelected.value,
					"data-test-id": "instance-ai-credential-continue-button",
					onClick: handleContinue
				}, null, 8, [
					"class",
					"label",
					"disabled"
				])], 2)], 2)
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
			}, null, 8, ["class"]), createBaseVNode("span", null, toDisplayString(unref(i18n).baseText(isFinalize.value ? "instanceAi.credential.finalize.applied" : "instanceAi.credential.allSelected")), 1)], 64))], 2))], 2);
		};
	}
});
var InstanceAiCredentialSetup_vue_vue_type_style_index_0_lang_module_default = {
	card: "_card_5ru3u_125",
	completed: "_completed_5ru3u_134",
	header: "_header_5ru3u_138",
	title: "_title_5ru3u_145",
	completeLabel: "_completeLabel_5ru3u_149",
	content: "_content_5ru3u_156",
	credentialContainer: "_credentialContainer_5ru3u_163",
	footer: "_footer_5ru3u_171",
	footerNav: "_footerNav_5ru3u_179",
	footerActions: "_footerActions_5ru3u_186",
	actionButton: "_actionButton_5ru3u_192",
	submitted: "_submitted_5ru3u_196",
	successIcon: "_successIcon_5ru3u_204",
	skippedIcon: "_skippedIcon_5ru3u_208"
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
var _hoisted_2$1 = ["data-option-index"];
var _hoisted_3$1 = ["data-option-index", "onMouseenter"];
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
			}, [
				__props.introMessage ? (openBlock(), createElementBlock("p", {
					key: 0,
					class: normalizeClass(_ctx.$style.intro)
				}, toDisplayString(__props.introMessage), 3)) : createCommentVNode("", true),
				createVNode(Transition, {
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
					])], 42, _hoisted_2$1)], 2)) : currentQuestion.value.type === "multi" ? (openBlock(), createElementBlock("div", {
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
						]), createBaseVNode("span", { class: normalizeClass(_ctx.$style.optionLabel) }, toDisplayString(option), 3)], 42, _hoisted_3$1);
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
				}, 8, ["name"]),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.footer) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.pagination) }, [
					createVNode(unref(N8nButton_default), {
						variant: "ghost",
						size: "xsmall",
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
						size: "xsmall",
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
					size: "small",
					disabled: __props.disabled,
					"data-test-id": "instance-ai-questions-skip",
					onClick: skipQuestion
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("aiAssistant.builder.planMode.questions.skip")), 1)]),
					_: 1
				}, 8, ["disabled"])) : createCommentVNode("", true), showNextButton.value ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 1,
					type: isNextEnabled.value ? "primary" : "secondary",
					size: "small",
					disabled: __props.disabled || isSubmitted.value || !isNextEnabled.value,
					"data-test-id": "instance-ai-questions-next",
					onClick: goToNext
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(nextButtonLabel.value), 1)]),
					_: 1
				}, 8, ["type", "disabled"])) : createCommentVNode("", true)], 2)], 2)
			], 34)) : createCommentVNode("", true)], 2);
		};
	}
});
var InstanceAiQuestions_vue_vue_type_style_index_0_lang_module_default = {
	wrapper: "_wrapper_1wddn_125",
	intro: "_intro_1wddn_131",
	container: "_container_1wddn_139",
	question: "_question_1wddn_145",
	questionText: "_questionText_1wddn_149",
	options: "_options_1wddn_153",
	optionRow: "_optionRow_1wddn_159",
	highlighted: "_highlighted_1wddn_172",
	arrowIndicator: "_arrowIndicator_1wddn_175",
	activeSelected: "_activeSelected_1wddn_178",
	numberBadge: "_numberBadge_1wddn_181",
	optionLabel: "_optionLabel_1wddn_185",
	checkboxRow: "_checkboxRow_1wddn_226",
	somethingElseRow: "_somethingElseRow_1wddn_239",
	somethingElseInput: "_somethingElseInput_1wddn_252",
	somethingElseRowMulti: "_somethingElseRowMulti_1wddn_264",
	pencilIconContainer: "_pencilIconContainer_1wddn_278",
	pencilIcon: "_pencilIcon_1wddn_278",
	footer: "_footer_1wddn_294",
	pagination: "_pagination_1wddn_302",
	paginationText: "_paginationText_1wddn_308",
	navigation: "_navigation_1wddn_313",
	textareaInput: "_textareaInput_1wddn_319",
	"questionFade-enter-active": "_questionFade-enter-active_1wddn_326",
	"questionFade-leave-active": "_questionFade-leave-active_1wddn_327",
	"questionFade-enter-from": "_questionFade-enter-from_1wddn_331",
	"questionFade-leave-to": "_questionFade-leave-to_1wddn_332"
};
var InstanceAiQuestions_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiQuestions_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiQuestions_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiWorkflowSetup.vue?vue&type=script&setup=true&lang.ts
var HTTP_REQUEST_NODE_TYPE = "n8n-nodes-base.httpRequest";
var HTTP_REQUEST_TOOL_NODE_TYPE = "n8n-nodes-base.httpRequestTool";
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
		const uiStore = useUIStore();
		const workflowsStore = useWorkflowsStore();
		const nodeTypesStore = useNodeTypesStore();
		const nodeHelpers = useNodeHelpers();
		const rootStore = useRootStore();
		const ndvStore = useNDVStore();
		const NESTED_PARAM_TYPES = new Set([
			"collection",
			"fixedCollection",
			"resourceMapper",
			"filter",
			"assignmentCollection"
		]);
		function credGroupKey(req) {
			const credType = req.credentialType;
			if (req.node.type === HTTP_REQUEST_NODE_TYPE || req.node.type === HTTP_REQUEST_TOOL_NODE_TYPE) {
				const url = String(req.node.parameters.url ?? "");
				if (url.startsWith("=")) return `${credType}:http:expr:${req.node.name}`;
				return `${credType}:http:${url}`;
			}
			return credType;
		}
		const cards = computed(() => {
			const escalatedCredTypes = /* @__PURE__ */ new Set();
			for (const req of props.setupRequests) if (req.credentialType && req.parameterIssues && Object.keys(req.parameterIssues).length > 0) escalatedCredTypes.add(credGroupKey(req));
			const ordered = [];
			const credCardByKey = /* @__PURE__ */ new Map();
			for (const req of props.setupRequests) {
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
		const totalSteps = computed(() => cards.value.length);
		const { currentStepIndex, isPrevDisabled, isNextDisabled, goToNext, goToPrev, goToStep } = useWizardNavigation({ totalSteps });
		const currentCard = computed(() => cards.value[currentStepIndex.value]);
		const showArrows = computed(() => totalSteps.value > 1);
		const currentCardNode = computed(() => {
			if (!currentCard.value) return null;
			return workflowsStore.getNodeByName(currentCard.value.nodes[0].node.name) ?? null;
		});
		provide(ExpressionLocalResolveContextSymbol, useExpressionResolveCtx(currentCardNode));
		let previousWorkflow = null;
		const isNestedParam = (p) => NESTED_PARAM_TYPES.has(p.type) || p.typeOptions?.multipleValues === true;
		function getCardParameters(card) {
			if (!card.hasParamIssues) return [];
			const req = card.nodes[0];
			const nodeType = nodeTypesStore.getNodeType(req.node.type, req.node.typeVersion);
			if (!nodeType?.properties) return [];
			const issueParamNames = Object.keys(req.parameterIssues ?? {});
			const node = workflowsStore.getNodeByName(req.node.name);
			if (!node) return [];
			return nodeType.properties.filter((prop) => issueParamNames.includes(prop.name) && displayParameter(node.parameters, prop, node, nodeType));
		}
		function getCardSimpleParameters(card) {
			return getCardParameters(card).filter((p) => !isNestedParam(p));
		}
		function getCardNestedParameterCount(card) {
			return getCardParameters(card).filter(isNestedParam).length;
		}
		function openNdv(card) {
			ndvStore.setActiveNodeName(card.nodes[0].node.name, "other");
		}
		const isSubmitted = ref(false);
		const isDeferred = ref(false);
		const isPartial = ref(false);
		const isApplying = ref(false);
		const isStoreReady = ref(false);
		const applyError = ref(null);
		const showFullWizard = ref(false);
		const selections = ref({});
		const paramValues = ref({});
		const credTestOverrides = ref({});
		const triggerTestResults = computed(() => {
			const results = {};
			for (const req of props.setupRequests) if (req.triggerTestResult) results[req.node.name] = req.triggerTestResult;
			return results;
		});
		function initSelections() {
			for (const card of cards.value) {
				if (!card.credentialType) continue;
				if (selections.value[card.id] !== void 0) continue;
				const credType = card.credentialType;
				const nodeWithCred = card.nodes.find((req) => req.node.credentials?.[credType]?.id);
				if (nodeWithCred) {
					selections.value[card.id] = nodeWithCred.node.credentials[credType].id;
					continue;
				}
				const firstReq = card.nodes[0];
				if (firstReq.existingCredentials?.length === 1) selections.value[card.id] = firstReq.existingCredentials[0].id;
				else if (card.isAutoApplied && firstReq.existingCredentials?.length) selections.value[card.id] = firstReq.existingCredentials[0].id;
				else selections.value[card.id] = null;
			}
		}
		initSelections();
		/** Check if a parameter value is meaningfully set (not empty, null, or an empty resource locator). */
		function isParamValueSet(val) {
			if (val === void 0 || val === null || val === "") return false;
			if (isResourceLocatorValue(val)) return val.value !== "" && val.value !== null && val.value !== void 0;
			return true;
		}
		/** Seed parameter values from existing node parameters for cards with param issues. */
		function initParamValues() {
			for (const card of cards.value) {
				if (!card.hasParamIssues) continue;
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
		function getEffectiveCredTestResult(card) {
			if (card.id in credTestOverrides.value) return credTestOverrides.value[card.id];
			return card.credentialTestResult;
		}
		function getTriggerResult(card) {
			const triggerNode = card.nodes.find((n) => n.isTrigger);
			return triggerNode ? triggerTestResults.value[triggerNode.node.name] : void 0;
		}
		function isTriggerTestDisabled(card) {
			if (card.credentialType && selections.value[card.id] === null) return true;
			const testResult = getEffectiveCredTestResult(card);
			if (testResult !== void 0 && testResult !== null && !testResult.success) return true;
			if (card.hasParamIssues) {
				const params = getCardParameters(card);
				const nodeName = card.nodes[0].node.name;
				for (const param of params) {
					const val = paramValues.value[nodeName]?.[param.name];
					if (!isParamValueSet(val)) return true;
				}
			}
			return false;
		}
		function isCardComplete(card) {
			if (card.credentialType) {
				if (!selections.value[card.id]) return false;
				const testResult = getEffectiveCredTestResult(card);
				if (testResult !== void 0 && testResult !== null && !testResult.success) return false;
			}
			if (card.hasParamIssues) {
				const params = getCardParameters(card);
				const nodeName = card.nodes[0].node.name;
				for (const param of params) {
					const val = paramValues.value[nodeName]?.[param.name];
					if (!isParamValueSet(val)) return false;
				}
			}
			if (card.isTestable && card.isTrigger && card.isFirstTrigger) {
				const triggerNode = card.nodes.find((n) => n.isTrigger);
				const result = triggerNode ? triggerTestResults.value[triggerNode.node.name] : void 0;
				if (!result || result.status !== "success") return false;
			}
			return true;
		}
		const anyCardComplete = computed(() => cards.value.some((c) => isCardComplete(c)));
		const allPreResolved = computed(() => props.setupRequests.every((r) => !r.needsAction));
		const userNavigated = ref(false);
		function wrappedGoToNext() {
			userNavigated.value = true;
			goToNext();
		}
		function wrappedGoToPrev() {
			userNavigated.value = true;
			goToPrev();
		}
		watch(() => currentCard.value && isCardComplete(currentCard.value), (complete, prevComplete) => {
			if (!complete || prevComplete || userNavigated.value) {
				userNavigated.value = false;
				return;
			}
			const nextIncomplete = cards.value.findIndex((c, idx) => idx > currentStepIndex.value && !isCardComplete(c));
			if (nextIncomplete >= 0) goToStep(nextIncomplete);
		});
		const stopDeleteListener = credentialsStore.$onAction(({ name, after, args }) => {
			if (name !== "deleteCredential") return;
			after(() => {
				const deletedId = args[0].id;
				for (const [cardId, selectedId] of Object.entries(selections.value)) if (selectedId === deletedId) selections.value[cardId] = null;
			});
		});
		const stopCreateListener = credentialsStore.$onAction(({ name, after }) => {
			if (name !== "createNewCredential") return;
			after((newCred) => {
				if (!newCred || typeof newCred !== "object" || !("id" in newCred)) return;
				const card = currentCard.value;
				if (!card?.credentialType) return;
				const cred = newCred;
				if (cred.type === card.credentialType) selections.value[card.id] = cred.id;
			});
		});
		function cardHasExistingCredentials(card) {
			if (!card.credentialType) return false;
			return (card.nodes[0]?.existingCredentials?.length ?? 0) > 0 || (credentialsStore.getUsableCredentialByType(card.credentialType)?.length ?? 0) > 0;
		}
		function openNewCredentialForCard(card) {
			if (!card.credentialType) return;
			uiStore.openNewCredential(card.credentialType, false, false, props.projectId);
		}
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
			const firstIncomplete = cards.value.findIndex((c) => !isCardComplete(c));
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
		function toNodeUi(setupNode) {
			return {
				id: setupNode.node.id,
				name: setupNode.node.name,
				type: setupNode.node.type,
				typeVersion: setupNode.node.typeVersion,
				position: setupNode.node.position,
				parameters: setupNode.node.parameters,
				credentials: setupNode.node.credentials
			};
		}
		function cardNodeUi(card) {
			const node = toNodeUi(card.nodes[0]);
			const selectedId = card.credentialType ? selections.value[card.id] : void 0;
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
		/** True when this card only has a trigger (no credentials and no param issues) */
		function isTriggerOnly(card) {
			return card.isTrigger && !card.credentialType && !card.hasParamIssues;
		}
		/** Use credential icon when it's a credential card */
		function useCredentialIcon(card) {
			return !!card.credentialType && !isTriggerOnly(card);
		}
		const nodeNames = computed(() => {
			const card = currentCard.value;
			if (!card) return [];
			return card.nodes.map((n) => n.node.name);
		});
		const nodeNamesTooltip = computed(() => nodeNames.value.join(", "));
		function getCredTestIcon(card) {
			if (!card.credentialType) return null;
			if (!selections.value[card.id]) return null;
			const testResult = getEffectiveCredTestResult(card);
			if (testResult === null) return null;
			if (card.isAutoApplied && testResult === void 0) return "spinner";
			if (testResult?.success) return "check";
			if (testResult !== void 0 && !testResult.success) return "triangle-alert";
			return null;
		}
		function buildNodeCredentials() {
			const result = {};
			for (const card of cards.value) {
				if (!card.credentialType) continue;
				const selectedId = selections.value[card.id];
				if (!selectedId) continue;
				const testResult = getEffectiveCredTestResult(card);
				if (testResult !== void 0 && testResult !== null && !testResult.success) continue;
				for (const req of card.nodes) {
					if (!result[req.node.name]) result[req.node.name] = {};
					result[req.node.name][card.credentialType] = selectedId;
				}
			}
			return result;
		}
		/** Build nodeParameters from paramValues + store node (for NDV-edited params). */
		function buildNodeParameters() {
			const result = {};
			let hasValues = false;
			for (const card of cards.value) {
				if (!card.hasParamIssues) continue;
				const nodeName = card.nodes[0].node.name;
				const issueParamNames = Object.keys(card.nodes[0].parameterIssues ?? {});
				const merged = {};
				for (const paramName of issueParamNames) {
					const val = paramValues.value[nodeName]?.[paramName];
					if (isParamValueSet(val)) {
						merged[paramName] = val;
						hasValues = true;
					}
				}
				if (Object.keys(merged).length > 0) result[nodeName] = merged;
			}
			return hasValues ? result : void 0;
		}
		function onCredentialSelected(card, updateInfo) {
			if (!card.credentialType) return;
			const credentialData = updateInfo.properties.credentials?.[card.credentialType];
			const credentialId = typeof credentialData === "string" ? void 0 : credentialData?.id;
			if (credentialId) selections.value[card.id] = credentialId;
			else selections.value[card.id] = null;
			credTestOverrides.value[card.id] = null;
			if (credentialId && card.credentialType) for (const req of card.nodes) {
				const storeNode = workflowsStore.getNodeByName(req.node.name);
				if (storeNode) {
					const cred = req.existingCredentials?.find((c) => c.id === credentialId) ?? credentialsStore.getCredentialById(credentialId);
					if (cred) storeNode.credentials = {
						...storeNode.credentials,
						[card.credentialType]: {
							id: cred.id,
							name: cred.name
						}
					};
				}
			}
		}
		async function handleTestTrigger(nodeName) {
			const nodeCredentials = buildNodeCredentials();
			const nodeParameters = buildNodeParameters();
			applyError.value = null;
			if (!await store.confirmAction(props.requestId, true, void 0, void 0, void 0, void 0, void 0, {
				action: "test-trigger",
				testTriggerNode: nodeName,
				nodeCredentials,
				nodeParameters
			})) {
				applyError.value = "Failed to send trigger test request. Try again.";
				return;
			}
			const { promise, cancel } = waitForToolResult(props.requestId);
			cancelApplyWait = cancel;
			const toolResult = await promise;
			cancelApplyWait = null;
			if (toolResult) applyError.value = toolResult.error ?? "Trigger test failed";
		}
		/**
		* Apply the server's authoritative updatedNodes to the canvas.
		* Uses the backend result rather than local data to ensure the canvas
		* reflects the actual persisted state.
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
		/** Watch for the tool-result SSE event and resolve when it arrives. */
		function waitForToolResult(requestId, timeoutMs = 6e4) {
			let stopWatch = null;
			let timeoutId = null;
			const promise = new Promise((resolve) => {
				const existing = store.findToolCallByRequestId(requestId);
				if (existing?.result !== void 0) {
					resolve(existing.result);
					return;
				}
				stopWatch = watch(() => {
					return store.findToolCallByRequestId(requestId)?.result;
				}, (result) => {
					if (result !== void 0) {
						cleanup();
						resolve(result);
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
		let cancelApplyWait = null;
		onUnmounted(() => {
			cancelApplyWait?.();
		});
		async function handleApply() {
			const nodeCredentials = buildNodeCredentials();
			const nodeParameters = buildNodeParameters();
			isApplying.value = true;
			applyError.value = null;
			if (!await store.confirmAction(props.requestId, true, void 0, void 0, void 0, void 0, void 0, {
				action: "apply",
				nodeCredentials,
				nodeParameters
			})) {
				isApplying.value = false;
				applyError.value = "Failed to send confirmation. Try again.";
				return;
			}
			const { promise, cancel } = waitForToolResult(props.requestId);
			cancelApplyWait = cancel;
			const toolResult = await promise;
			cancelApplyWait = null;
			isApplying.value = false;
			if (toolResult && toolResult.success) {
				applyServerResultToCanvas(toolResult);
				isSubmitted.value = true;
				isPartial.value = toolResult.partial ?? false;
				store.resolveConfirmation(props.requestId, "approved");
			} else if (toolResult) applyError.value = toolResult.error ?? "Apply failed";
			else applyError.value = "Apply timed out — please try again.";
		}
		async function handleLater() {
			isSubmitted.value = true;
			isDeferred.value = true;
			if (await store.confirmAction(props.requestId, false)) store.resolveConfirmation(props.requestId, "deferred");
			else {
				isSubmitted.value = false;
				isDeferred.value = false;
			}
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.root) }, [!isSubmitted.value && !isApplying.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [allPreResolved.value && !showFullWizard.value ? (openBlock(), createElementBlock("div", {
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
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.workflowSetup.confirmDescription", { interpolate: { count: String(cards.value.length) } })), 1)]),
					_: 1
				}), createBaseVNode("ul", { class: normalizeClass(_ctx.$style.confirmList) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(cards.value, (card) => {
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
				createBaseVNode("footer", { class: normalizeClass(_ctx.$style.footer) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.footerNav) }, [createVNode(unref(N8nLink_default), {
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
					size: "small",
					class: normalizeClass(_ctx.$style.actionButton),
					label: unref(i18n).baseText("instanceAi.workflowSetup.later"),
					"data-test-id": "instance-ai-workflow-setup-later",
					onClick: handleLater
				}, null, 8, ["class", "label"]), createVNode(unref(N8nButton_default), {
					size: "small",
					class: normalizeClass(_ctx.$style.actionButton),
					label: unref(i18n).baseText("instanceAi.credential.continueButton"),
					"data-test-id": "instance-ai-workflow-setup-apply-button",
					onClick: handleApply
				}, null, 8, ["class", "label"])], 2)], 2)
			], 2)) : currentCard.value ? (openBlock(), createElementBlock("div", {
				key: 1,
				"data-test-id": "instance-ai-workflow-setup-card",
				class: normalizeClass([_ctx.$style.card, { [_ctx.$style.completed]: isCardComplete(currentCard.value) }])
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
					getCredTestIcon(currentCard.value) === "spinner" ? (openBlock(), createBlock(unref(N8nIcon_default), {
						key: 2,
						icon: "spinner",
						size: "small",
						class: normalizeClass(_ctx.$style.loading)
					}, null, 8, ["class"])) : getCredTestIcon(currentCard.value) === "check" ? (openBlock(), createBlock(unref(N8nIcon_default), {
						key: 3,
						icon: "check",
						size: "small",
						class: normalizeClass(_ctx.$style.success)
					}, null, 8, ["class"])) : getCredTestIcon(currentCard.value) === "triangle-alert" ? (openBlock(), createBlock(unref(N8nIcon_default), {
						key: 4,
						icon: "triangle-alert",
						size: "small",
						class: normalizeClass(_ctx.$style.error)
					}, null, 8, ["class"])) : createCommentVNode("", true),
					isCardComplete(currentCard.value) ? (openBlock(), createBlock(unref(N8nText_default), {
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
				!isTriggerOnly(currentCard.value) ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.content)
				}, [
					currentCard.value.credentialType && isStoreReady.value ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.credentialContainer)
					}, [cardHasExistingCredentials(currentCard.value) ? (openBlock(), createBlock(NodeCredentials_default, {
						key: 0,
						node: cardNodeUi(currentCard.value),
						"override-cred-type": currentCard.value.credentialType,
						"project-id": __props.projectId,
						standalone: "",
						"hide-issues": "",
						onCredentialSelected: _cache[1] || (_cache[1] = ($event) => onCredentialSelected(currentCard.value, $event))
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
						onClick: _cache[2] || (_cache[2] = ($event) => openNewCredentialForCard(currentCard.value))
					}, null, 8, ["label"]))], 2)) : createCommentVNode("", true),
					currentCard.value.hasParamIssues && getCardSimpleParameters(currentCard.value).length > 0 ? (openBlock(), createBlock(ParameterInputList_default, {
						key: 1,
						parameters: getCardSimpleParameters(currentCard.value),
						"node-values": { parameters: currentCardNode.value?.parameters ?? {} },
						node: currentCardNode.value ?? void 0,
						"hide-delete": true,
						"remove-first-parameter-margin": true,
						path: "parameters",
						"options-overrides": {
							hideExpressionSelector: true,
							hideFocusPanelButton: true
						},
						onValueChanged: _cache[3] || (_cache[3] = ($event) => onParameterValueChanged(currentCard.value, $event))
					}, null, 8, [
						"parameters",
						"node-values",
						"node"
					])) : createCommentVNode("", true),
					currentCard.value.hasParamIssues && getCardNestedParameterCount(currentCard.value) > 0 ? (openBlock(), createBlock(unref(N8nLink_default), {
						key: 2,
						"data-test-id": "instance-ai-workflow-setup-configure-link",
						underline: true,
						theme: "text",
						size: "medium",
						onClick: _cache[4] || (_cache[4] = ($event) => openNdv(currentCard.value))
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.workflowSetup.configureParameters", {
							adjustToNumber: getCardNestedParameterCount(currentCard.value),
							interpolate: { count: String(getCardNestedParameterCount(currentCard.value)) }
						})), 1)]),
						_: 1
					})) : createCommentVNode("", true)
				], 2)) : createCommentVNode("", true),
				currentCard.value.isTrigger && currentCard.value.isFirstTrigger && getTriggerResult(currentCard.value)?.status === "listening" ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.listeningCallout)
				}, [createVNode(unref(N8nIcon_default), {
					icon: "spinner",
					size: "small",
					class: normalizeClass(_ctx.$style.loading)
				}, null, 8, ["class"]), createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.workflowSetup.triggerListening")), 1)]),
					_: 1
				})], 2)) : createCommentVNode("", true),
				applyError.value ? (openBlock(), createElementBlock("div", {
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
					default: withCtx(() => [createTextVNode(toDisplayString(applyError.value), 1)]),
					_: 1
				})], 2)) : createCommentVNode("", true),
				createBaseVNode("footer", { class: normalizeClass(_ctx.$style.footer) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.footerNav) }, [
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
						onClick: handleLater
					}, null, 8, ["class", "label"]),
					currentCard.value.isTestable && currentCard.value.isTrigger && currentCard.value.isFirstTrigger ? (openBlock(), createBlock(unref(N8nButton_default), {
						key: 0,
						size: "small",
						class: normalizeClass(_ctx.$style.actionButton),
						label: unref(i18n).baseText("instanceAi.workflowSetup.testTrigger"),
						disabled: isTriggerTestDisabled(currentCard.value),
						"data-test-id": "instance-ai-workflow-setup-test-trigger",
						onClick: _cache[5] || (_cache[5] = ($event) => handleTestTrigger(currentCard.value.nodes.find((n) => n.isTrigger).node.name))
					}, null, 8, [
						"class",
						"label",
						"disabled"
					])) : createCommentVNode("", true),
					createVNode(unref(N8nButton_default), {
						size: "small",
						class: normalizeClass(_ctx.$style.actionButton),
						disabled: !anyCardComplete.value,
						label: unref(i18n).baseText("instanceAi.credential.continueButton"),
						"data-test-id": "instance-ai-workflow-setup-apply-button",
						onClick: handleApply
					}, null, 8, [
						"class",
						"disabled",
						"label"
					])
				], 2)], 2)
			], 2)) : createCommentVNode("", true)], 64)) : isApplying.value ? (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.submitted)
			}, [createVNode(unref(N8nIcon_default), {
				icon: "spinner",
				size: "small",
				class: normalizeClass(_ctx.$style.loading)
			}, null, 8, ["class"]), createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("instanceAi.workflowSetup.applying")), 1)], 2)) : (openBlock(), createElementBlock("div", {
				key: 2,
				class: normalizeClass(_ctx.$style.submitted)
			}, [isDeferred.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createVNode(unref(N8nIcon_default), {
				icon: "arrow-right",
				size: "small",
				class: normalizeClass(_ctx.$style.skippedIcon)
			}, null, 8, ["class"]), createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("instanceAi.workflowSetup.deferred")), 1)], 64)) : isPartial.value ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [createVNode(unref(N8nIcon_default), {
				icon: "check",
				size: "small",
				class: normalizeClass(_ctx.$style.partialIcon)
			}, null, 8, ["class"]), createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("instanceAi.workflowSetup.partiallyApplied")), 1)], 64)) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [createVNode(unref(N8nIcon_default), {
				icon: "check",
				size: "small",
				class: normalizeClass(_ctx.$style.successIcon)
			}, null, 8, ["class"]), createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("instanceAi.workflowSetup.applied")), 1)], 64))], 2))], 2);
		};
	}
});
var InstanceAiWorkflowSetup_vue_vue_type_style_index_0_lang_module_default = {
	card: "_card_ajs0q_125",
	completed: "_completed_ajs0q_134",
	confirmCard: "_confirmCard_ajs0q_138",
	confirmSummary: "_confirmSummary_ajs0q_150",
	confirmList: "_confirmList_ajs0q_157",
	confirmItem: "_confirmItem_ajs0q_166",
	header: "_header_ajs0q_172",
	title: "_title_ajs0q_179",
	completeLabel: "_completeLabel_ajs0q_183",
	content: "_content_ajs0q_190",
	credentialContainer: "_credentialContainer_ajs0q_197",
	listeningCallout: "_listeningCallout_ajs0q_205",
	errorBanner: "_errorBanner_ajs0q_212",
	footer: "_footer_ajs0q_222",
	footerNav: "_footerNav_ajs0q_230",
	footerActions: "_footerActions_ajs0q_237",
	actionButton: "_actionButton_ajs0q_243",
	success: "_success_ajs0q_247",
	error: "_error_ajs0q_212",
	loading: "_loading_ajs0q_255",
	spin: "_spin_ajs0q_1",
	submitted: "_submitted_ajs0q_268",
	successIcon: "_successIcon_ajs0q_276",
	partialIcon: "_partialIcon_ajs0q_280",
	skippedIcon: "_skippedIcon_ajs0q_284"
};
var InstanceAiWorkflowSetup_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiWorkflowSetup_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiWorkflowSetup_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiConfirmationPanel.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = [
	"onUpdate:modelValue",
	"placeholder",
	"onKeydown"
];
var _hoisted_2 = {
	key: 0,
	style: { "margin-bottom": "10px" }
};
var _hoisted_3 = ["onClick"];
/** Items that need the "Agent needs approval" wrapper (generic approvals, domain access). */
var InstanceAiConfirmationPanel_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiConfirmationPanel",
	setup(__props) {
		const store = useInstanceAiStore();
		const i18n = useI18n();
		const { getToolLabel } = useToolLabel();
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
		function handleConfirm(requestId, approved) {
			if (store.resolvedConfirmationIds.has(requestId)) return;
			store.resolveConfirmation(requestId, approved ? "approved" : "denied");
			store.confirmAction(requestId, approved);
		}
		function handleApproveAll(items) {
			for (const item of items) {
				const rid = item.toolCall.confirmation.requestId;
				if (store.resolvedConfirmationIds.has(rid)) continue;
				store.resolveConfirmation(rid, "approved");
				store.confirmAction(rid, true);
			}
		}
		function handleTextSubmit(requestId) {
			const value = (textInputValues.value[requestId] ?? "").trim();
			if (!value) return;
			store.resolveConfirmation(requestId, "approved");
			store.confirmAction(requestId, true, void 0, void 0, void 0, value);
		}
		function handleTextSkip(requestId) {
			store.resolveConfirmation(requestId, "deferred");
			store.confirmAction(requestId, false);
		}
		function handleQuestionsSubmit(requestId, answers) {
			store.resolveConfirmation(requestId, "approved");
			store.confirmAction(requestId, true, void 0, void 0, void 0, void 0, void 0, void 0, answers);
		}
		function handlePlanApprove(requestId) {
			store.resolveConfirmation(requestId, "approved");
			store.confirmAction(requestId, true);
		}
		function handlePlanRequestChanges(requestId, feedback) {
			store.resolveConfirmation(requestId, "denied");
			store.confirmAction(requestId, false, void 0, void 0, void 0, feedback);
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
						onSubmit: (answers) => handleQuestionsSubmit(chunk.item.toolCall.confirmation.requestId, answers)
					}, null, 8, [
						"class",
						"questions",
						"intro-message",
						"onSubmit"
					])) : chunk.item.toolCall.confirmation.inputType === "plan-review" ? (openBlock(), createBlock(PlanReviewPanel_default, {
						key: "plan-" + chunk.item.toolCall.confirmation.requestId,
						class: normalizeClass(_ctx.$style.confirmation),
						"planned-tasks": chunk.item.toolCall.args?.tasks ?? [],
						message: chunk.item.toolCall.confirmation.message,
						onApprove: ($event) => handlePlanApprove(chunk.item.toolCall.confirmation.requestId),
						onRequestChanges: (feedback) => handlePlanRequestChanges(chunk.item.toolCall.confirmation.requestId, feedback)
					}, null, 8, [
						"class",
						"planned-tasks",
						"message",
						"onApprove",
						"onRequestChanges"
					])) : chunk.item.toolCall.confirmation.inputType === "text" ? (openBlock(), createElementBlock("div", {
						key: "text-" + chunk.item.toolCall.confirmation.requestId,
						class: normalizeClass(_ctx.$style.confirmation)
					}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.textInputContainer) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.confirmMessage) }, toDisplayString(chunk.item.toolCall.confirmation.message), 3), createBaseVNode("div", { class: normalizeClass(_ctx.$style.textInputRow) }, [
						withDirectives(createBaseVNode("input", {
							"onUpdate:modelValue": ($event) => textInputValues.value[chunk.item.toolCall.confirmation.requestId] = $event,
							class: normalizeClass(_ctx.$style.textInput),
							type: "text",
							placeholder: unref(i18n).baseText("instanceAi.askUser.placeholder"),
							onKeydown: withKeys(($event) => handleTextSubmit(chunk.item.toolCall.confirmation.requestId), ["enter"])
						}, null, 42, _hoisted_1$1), [[vModelText, textInputValues.value[chunk.item.toolCall.confirmation.requestId]]]),
						!(textInputValues.value[chunk.item.toolCall.confirmation.requestId] ?? "").trim() ? (openBlock(), createBlock(unref(N8nButton_default), {
							key: 0,
							size: "small",
							variant: "outline",
							onClick: ($event) => handleTextSkip(chunk.item.toolCall.confirmation.requestId)
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.askUser.skip")), 1)]),
							_: 1
						}, 8, ["onClick"])) : createCommentVNode("", true),
						createVNode(unref(N8nButton_default), {
							size: "small",
							variant: "solid",
							disabled: !(textInputValues.value[chunk.item.toolCall.confirmation.requestId] ?? "").trim(),
							onClick: ($event) => handleTextSubmit(chunk.item.toolCall.confirmation.requestId)
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.askUser.submit")), 1)]),
							_: 1
						}, 8, ["disabled", "onClick"])
					], 2)], 2)], 2)) : chunk.item.toolCall.confirmation.inputType === "resource-decision" && chunk.item.toolCall.confirmation.resourceDecision ? (openBlock(), createBlock(GatewayResourceDecision_default, {
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
					}, [isAllGenericApproval(chunk.items) && chunk.items.length > 1 ? (openBlock(), createElementBlock("div", _hoisted_2, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.headerLabel) }, toDisplayString(unref(i18n).baseText("instanceAi.confirmation.agentContext", { interpolate: { agent: getRoleLabel(chunk.role) } })), 3), createBaseVNode("button", {
						class: normalizeClass([
							_ctx.$style.btn,
							_ctx.$style.approveBtn,
							_ctx.$style.batchBtn
						]),
						onClick: ($event) => handleApproveAll(chunk.items)
					}, toDisplayString(unref(i18n).baseText("instanceAi.confirmation.approveAll")), 11, _hoisted_3)])) : createCommentVNode("", true), createBaseVNode("div", { class: normalizeClass(_ctx.$style.items) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(chunk.items, (item) => {
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
						])) : (openBlock(), createElementBlock("div", {
							key: 1,
							class: normalizeClass(_ctx.$style.confirmBody)
						}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.approvalRow) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.approvalRowBody) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.toolLabel) }, toDisplayString(unref(getToolLabel)(item.toolCall.toolName)), 3), createBaseVNode("span", { class: normalizeClass(_ctx.$style.preview) }, toDisplayString(item.toolCall.confirmation.message), 3)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.approvalActions) }, [createVNode(unref(N8nButton_default), {
							"data-test-id": "instance-ai-panel-confirm-deny",
							size: "small",
							variant: "outline",
							onClick: ($event) => handleConfirm(item.toolCall.confirmation.requestId, false)
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.confirmation.deny")), 1)]),
							_: 1
						}, 8, ["onClick"]), createVNode(unref(N8nButton_default), {
							variant: item.toolCall.confirmation.severity === "destructive" ? "destructive" : "solid",
							"data-test-id": "instance-ai-panel-confirm-approve",
							size: "small",
							onClick: ($event) => handleConfirm(item.toolCall.confirmation.requestId, true)
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.confirmation.approve")), 1)]),
							_: 1
						}, 8, ["variant", "onClick"])], 2)], 2)], 2))], 2);
					}), 128))], 2)], 2))], 64);
				}), 128))]),
				_: 1
			});
		};
	}
});
var InstanceAiConfirmationPanel_vue_vue_type_style_index_0_lang_module_default = {
	confirmation: "_confirmation_134pw_125",
	root: "_root_134pw_132",
	header: "_header_134pw_137",
	headerIcon: "_headerIcon_134pw_147",
	headerLabel: "_headerLabel_134pw_152",
	items: "_items_134pw_157",
	item: "_item_134pw_157",
	confirmMessage: "_confirmMessage_134pw_166",
	approvalRow: "_approvalRow_134pw_172",
	toolLabel: "_toolLabel_134pw_180",
	approvalMessage: "_approvalMessage_134pw_191",
	approvalRowBody: "_approvalRowBody_134pw_196",
	approvalActions: "_approvalActions_134pw_203",
	preview: "_preview_134pw_211",
	destructiveIcon: "_destructiveIcon_134pw_223",
	warningIcon: "_warningIcon_134pw_228",
	infoIcon: "_infoIcon_134pw_233",
	textInputRow: "_textInputRow_134pw_238",
	textInputContainer: "_textInputContainer_134pw_244",
	textInput: "_textInput_134pw_238",
	btn: "_btn_134pw_269",
	approveBtn: "_approveBtn_134pw_288",
	batchBtn: "_batchBtn_134pw_297"
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
				}, [
					createVNode(unref(N8nIcon_default), {
						icon: tab.icon,
						size: "medium",
						class: normalizeClass(_ctx.$style.tabIcon)
					}, null, 8, ["icon", "class"]),
					createBaseVNode("span", { class: normalizeClass(_ctx.$style.tabLabel) }, toDisplayString(tab.name), 3),
					tab.executionStatus === "running" ? (openBlock(), createBlock(unref(N8nIcon_default), {
						key: 0,
						"data-test-id": "execution-status-running",
						icon: "spinner",
						spin: true,
						size: "small",
						class: normalizeClass(_ctx.$style.statusRunning)
					}, null, 8, ["class"])) : tab.executionStatus === "success" ? (openBlock(), createBlock(unref(N8nIcon_default), {
						key: 1,
						"data-test-id": "execution-status-success",
						icon: "check",
						size: "small",
						class: normalizeClass(_ctx.$style.statusSuccess)
					}, null, 8, ["class"])) : tab.executionStatus === "error" ? (openBlock(), createBlock(unref(N8nIcon_default), {
						key: 2,
						"data-test-id": "execution-status-error",
						icon: "x",
						size: "small",
						class: normalizeClass(_ctx.$style.statusError)
					}, null, 8, ["class"])) : createCommentVNode("", true)
				], 10, _hoisted_1);
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
	header: "_header_1aw8v_125",
	tabStrip: "_tabStrip_1aw8v_134",
	tab: "_tab_1aw8v_134",
	activeTab: "_activeTab_1aw8v_164",
	tabIcon: "_tabIcon_1aw8v_170",
	tabLabel: "_tabLabel_1aw8v_174",
	statusRunning: "_statusRunning_1aw8v_179",
	statusSuccess: "_statusSuccess_1aw8v_184",
	statusError: "_statusError_1aw8v_189",
	actions: "_actions_1aw8v_194"
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
				}, [createVNode(unref(N8nSpinner_default), { type: "dots" })], 2)) : createCommentVNode("", true)
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
		onMounted(() => {
			pushConnectionStore.pushConnect();
			store.loadThreads();
			store.fetchCredits();
			store.startCreditsPushListener();
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
		const showMemoryPanel = ref(false);
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
		watch(computed(() => typeof route.params.threadId === "string" ? route.params.threadId : null), (threadId) => {
			if (!threadId) {
				if ((store.threads?.length ?? 0) === 0) store.threads.push({
					id: store.currentThreadId,
					title: NEW_CONVERSATION_TITLE,
					createdAt: (/* @__PURE__ */ new Date()).toISOString()
				});
				if (store.sseState === "disconnected") store.loadHistoricalMessages(store.currentThreadId).then(() => {
					store.loadThreadStatus(store.currentThreadId);
					store.connectSSE();
				});
				return;
			}
			if (threadId === store.currentThreadId) {
				if (store.sseState === "disconnected") store.loadHistoricalMessages(threadId).then(() => {
					store.loadThreadStatus(threadId);
					store.connectSSE();
				});
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
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.chatArea) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [
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
						createVNode(unref(N8nIconButton_default), {
							icon: "brain",
							variant: "ghost",
							size: "medium",
							class: normalizeClass({ [_ctx.$style.activeButton]: showMemoryPanel.value }),
							onClick: _cache[1] || (_cache[1] = ($event) => showMemoryPanel.value = !showMemoryPanel.value)
						}, null, 8, ["class"]),
						isDebugEnabled.value ? (openBlock(), createBlock(unref(N8nIconButton_default), {
							key: 1,
							icon: "bug",
							variant: "ghost",
							size: "medium",
							class: normalizeClass({ [_ctx.$style.activeButton]: showDebugPanel.value }),
							onClick: _cache[2] || (_cache[2] = ($event) => {
								showDebugPanel.value = !showDebugPanel.value;
								unref(store).debugMode = showDebugPanel.value;
							})
						}, null, 8, ["class"])) : createCommentVNode("", true),
						!unref(preview).isPreviewVisible.value ? (openBlock(), createBlock(unref(N8nIconButton_default), {
							key: 2,
							icon: "panel-right",
							variant: "ghost",
							size: "medium",
							onClick: _cache[3] || (_cache[3] = ($event) => showArtifactsPanel.value = !showArtifactsPanel.value)
						})) : createCommentVNode("", true)
					], 2)
				], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.contentArea) }, [
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.chatContent) }, [!unref(store).hasMessages ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.emptyLayout)
					}, [createVNode(InstanceAiEmptyState_default), createBaseVNode("div", { class: normalizeClass(_ctx.$style.centeredInput) }, [
						createVNode(InstanceAiStatusBar_default),
						showCreditBanner.value ? (openBlock(), createBlock(CreditWarningBanner_default, {
							key: 0,
							"credits-remaining": unref(store).creditsRemaining,
							"credits-quota": unref(store).creditsQuota,
							onUpgradeClick: _cache[4] || (_cache[4] = ($event) => unref(goToUpgrade)("instance-ai", "upgrade-instance-ai")),
							onDismiss: _cache[5] || (_cache[5] = ($event) => creditBannerDismissed.value = true)
						}, null, 8, ["credits-remaining", "credits-quota"])) : createCommentVNode("", true),
						createVNode(InstanceAiInput_default, {
							ref_key: "chatInputRef",
							ref: chatInputRef,
							"is-streaming": unref(store).isStreaming,
							onSubmit: handleSubmit,
							onStop: handleStop
						}, null, 8, ["is-streaming"])
					], 2)], 2)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
						createVNode(unref(N8nScrollArea_default), { class: normalizeClass(_ctx.$style.scrollArea) }, {
							default: withCtx(() => [createBaseVNode("div", {
								ref: "scrollable",
								class: normalizeClass(_ctx.$style.messageList),
								style: normalizeStyle({ paddingBottom: `${inputAreaHeight.value}px` })
							}, [createVNode(TransitionGroup, { name: "message-slide" }, {
								default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(store).messages, (message) => {
									return openBlock(), createBlock(InstanceAiMessage_default, {
										key: message.id,
										message
									}, null, 8, ["message"]);
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
								onClick: _cache[6] || (_cache[6] = ($event) => {
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
								onUpgradeClick: _cache[7] || (_cache[7] = ($event) => unref(goToUpgrade)("instance-ai", "upgrade-instance-ai")),
								onDismiss: _cache[8] || (_cache[8] = ($event) => creditBannerDismissed.value = true)
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
					showMemoryPanel.value ? (openBlock(), createBlock(InstanceAiMemoryPanel_default, {
						key: 1,
						onClose: _cache[9] || (_cache[9] = ($event) => showMemoryPanel.value = false)
					})) : createCommentVNode("", true),
					showDebugPanel.value ? (openBlock(), createBlock(InstanceAiDebugPanel_default, {
						key: 2,
						onClose: _cache[10] || (_cache[10] = ($event) => {
							showDebugPanel.value = false;
							unref(store).debugMode = false;
						})
					})) : createCommentVNode("", true)
				], 2)], 2),
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
					onResizestart: _cache[13] || (_cache[13] = ($event) => isResizingPreview.value = true),
					onResizeend: _cache[14] || (_cache[14] = ($event) => isResizingPreview.value = false)
				}, {
					default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.previewPanel) }, [createVNode(InstanceAiPreviewTabBar_default, {
						tabs: unref(preview).allArtifactTabs.value,
						"active-tab-id": unref(preview).activeTabId.value,
						"onUpdate:activeTabId": _cache[11] || (_cache[11] = ($event) => unref(preview).selectTab($event)),
						onClose: _cache[12] || (_cache[12] = ($event) => unref(preview).closePreview())
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
	container: "_container_1xnat_125",
	sidebar: "_sidebar_1xnat_133",
	chatArea: "_chatArea_1xnat_139",
	canvasArea: "_canvasArea_1xnat_149",
	header: "_header_1xnat_175",
	headerTitle: "_headerTitle_1xnat_183",
	headerActions: "_headerActions_1xnat_191",
	settingsButton: "_settingsButton_1xnat_198",
	activeButton: "_activeButton_1xnat_202",
	reconnecting: "_reconnecting_1xnat_206",
	contentArea: "_contentArea_1xnat_210",
	chatContent: "_chatContent_1xnat_217",
	emptyLayout: "_emptyLayout_1xnat_225",
	centeredInput: "_centeredInput_1xnat_235",
	scrollArea: "_scrollArea_1xnat_240",
	messageList: "_messageList_1xnat_245",
	scrollButtonContainer: "_scrollButtonContainer_1xnat_251",
	scrollToBottomButton: "_scrollToBottomButton_1xnat_261",
	inputContainer: "_inputContainer_1xnat_272",
	inputConstraint: "_inputConstraint_1xnat_286",
	previewPanel: "_previewPanel_1xnat_291",
	previewContent: "_previewContent_1xnat_297"
};
var InstanceAiView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { InstanceAiView_default as default };
