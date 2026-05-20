import { o as __toESM } from "./chunk-CC9Q-vWm.js";
import { $ as openBlock, A as createTextVNode, Bt as toRef, C as createBaseVNode, E as createElementBlock, Ft as ref, N as defineComponent, Nt as reactive, O as createSlots, Q as onUpdated, R as inject, S as computed, Sn as toDisplayString, T as createCommentVNode, U as mergeProps, Vt as toRefs, W as nextTick, Wt as unref, X as onMounted, Z as onUnmounted, _ as Fragment, _n as normalizeClass, bt as withDirectives, c as useCssModule, gt as watch, h as withModifiers, it as renderSlot, j as createVNode, m as withKeys, n as Transition, p as vShow, pt as useTemplateRef, q as onBeforeUnmount, r as TransitionGroup, rt as renderList, tt as provide, w as createBlock, yn as normalizeStyle, yt as withCtx } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { f as useElementHover, it as useI18n, p as useElementSize, tt as i18n, x as useScroll } from "./core-x10Anb9r.js";
import { Ai as N8nTooltip_default, At as N8nActionDropdown_default, Ca as N8nText_default, Ct as N8nCard_default, Fi as N8nIconButton_default, Ni as MessageRating_default, Nt as DropdownMenu_default, Pi as Input_default, Sa as N8nCallout_default, Ta as N8nIcon_default, _a as useResizeObserver, _i as N8nBadge_default, aa as CollapsibleTrigger_default, ba as createContext, ca as Primitive, dt as Checkbox_default, f as N8nScrollArea_default, ga as useDirection, k as N8nResizeWrapper_default, lt as useRouter, ma as useForwardExpose, na as RovingFocusGroup_default, oa as CollapsibleContent_default, sa as CollapsibleRoot_default, ta as RovingFocusItem_default, ua as useId, va as useVModel, wa as N8nButton_default, xa as N8nHeading_default } from "./src-CSSRFm72.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { a as ContextMenuRoot_default, i as ContextMenuContent_default, n as ContextMenuPortal_default, r as ContextMenuItem_default, t as ContextMenuTrigger_default } from "./ContextMenuTrigger-Dd6l5HUj.js";
import { t as ParameterInputList_default, x as setParameterValue } from "./ParameterInputList-DRDt8-Gw.js";
import { Ai as getAppNameFromCredType, Jt as useWorkflowsListStore, Yt as useEnvironmentsStore, b as useNodeTypesStore, pt as useCredentialsStore, r as useUIStore, rn as useTelemetry } from "./users.store-V46mYCxM.js";
import { t as useToast } from "./useToast-vrHmeB6l.js";
import { Ci as INSTANCE_AI_COMPUTER_USE_SETUP_MODAL_KEY, Si as INSTANCE_AI_BROWSER_USE_SETUP_MODAL_KEY, To as Workflow, Ws as deepCopy, cs as displayParameter, fc as isExpression, gl as ExpressionLocalResolveContextSymbol, ms as getNodeParametersIssues, ps as getNodeParameters } from "./constants-B2-iseoM.js";
import { D as storeToRefs, T as defineStore, t as useRootStore } from "./useRootStore-CX_m119O.js";
import { t as useSettingsStore } from "./settings.store-D1h6gV_f.js";
import { n as findPlaceholderDetails } from "./dist-CaxuMXjN.js";
import { t as require_FileSaver_min } from "./FileSaver.min-Cs1LTjzx.js";
import { t as usePageRedirectionHelper } from "./usePageRedirectionHelper-MHoQtuiD.js";
import { t as useDataTableStore } from "./dataTable.store-CcFUHL_1.js";
import { t as useClipboard } from "./useClipboard-Y0mv2D8j.js";
import { t as CredentialIcon_default } from "./CredentialIcon-C-iNYVbG.js";
import { t as NodeCredentials_default } from "./NodeCredentials-Bpt1M3t6.js";
import { t as NodeIcon_default } from "./NodeIcon-DncgKbIh.js";
import { t as usePushConnectionStore } from "./pushConnection.store-DK4gMjqx.js";
import { r as INSTANCE_AI_VIEW } from "./constants-DlgrjQNI.js";
import { t as useInstanceAiSettingsStore } from "./instanceAiSettings.store-D0qyz8UG.js";
import { a as fetchThreads, i as fetchThreadMessages, n as useInstanceAiStore, r as useThread, t as provideThread } from "./instanceAi.store-CcbI8H-U.js";
import { c as isHttpRequestNodeType, t as useCredentialTestInBackground } from "./useCredentialTestInBackground-BD4Aq0KH.js";
import { t as CreditWarningBanner_default } from "./CreditWarningBanner-B4PcUmas.js";
import { t as ChatMarkdownChunk_default } from "./ChatMarkdownChunk-CaGsoTfT.js";
import { i as useCreditWarningBanner, n as InstanceAiInput_default, r as AttachmentPreview_default, t as InstanceAiViewHeader_default } from "./InstanceAiViewHeader-BugtvC6l.js";
import { t as WorkflowPreview_default } from "./WorkflowPreview-KHlku7YU.js";
import { t as DataTableTable_default } from "./DataTableTable-BptV7rfq.js";
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_typescript@6.0.2_vue@3.5.26_typescript@6.0.2_/node_modules/reka-ui/dist/Tabs/TabsRoot.js
var [injectTabsRootContext, provideTabsRootContext] = createContext("TabsRoot");
var TabsRoot_default = /* @__PURE__ */ defineComponent({
	__name: "TabsRoot",
	props: {
		defaultValue: {
			type: null,
			required: false
		},
		orientation: {
			type: String,
			required: false,
			default: "horizontal"
		},
		dir: {
			type: String,
			required: false
		},
		activationMode: {
			type: String,
			required: false,
			default: "automatic"
		},
		modelValue: {
			type: null,
			required: false
		},
		unmountOnHide: {
			type: Boolean,
			required: false,
			default: true
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		}
	},
	emits: ["update:modelValue"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emits = __emit;
		const { orientation, unmountOnHide, dir: propDir } = toRefs(props);
		const dir = useDirection(propDir);
		useForwardExpose();
		const modelValue = useVModel(props, "modelValue", emits, {
			defaultValue: props.defaultValue,
			passive: props.modelValue === void 0
		});
		const tabsList = ref();
		provideTabsRootContext({
			modelValue,
			changeModelValue: (value) => {
				modelValue.value = value;
			},
			orientation,
			dir,
			unmountOnHide,
			activationMode: props.activationMode,
			baseId: useId(void 0, "reka-tabs"),
			tabsList
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Primitive), {
				dir: unref(dir),
				"data-orientation": unref(orientation),
				"as-child": _ctx.asChild,
				as: _ctx.as
			}, {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default", { modelValue: unref(modelValue) })]),
				_: 3
			}, 8, [
				"dir",
				"data-orientation",
				"as-child",
				"as"
			]);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_typescript@6.0.2_vue@3.5.26_typescript@6.0.2_/node_modules/reka-ui/dist/Tabs/utils.js
function makeTriggerId(baseId, value) {
	return `${baseId}-trigger-${value}`;
}
function makeContentId(baseId, value) {
	return `${baseId}-content-${value}`;
}
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_typescript@6.0.2_vue@3.5.26_typescript@6.0.2_/node_modules/reka-ui/dist/Tabs/TabsIndicator.js
var TabsIndicator_default = /* @__PURE__ */ defineComponent({
	__name: "TabsIndicator",
	props: {
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		}
	},
	setup(__props) {
		const props = __props;
		const context = injectTabsRootContext();
		useForwardExpose();
		const activeTab = ref();
		const indicatorStyle = ref({
			size: null,
			position: null
		});
		watch(() => [context.modelValue.value, context?.dir.value], async () => {
			await nextTick();
			updateIndicatorStyle();
		}, { immediate: true });
		useResizeObserver([context.tabsList, activeTab], updateIndicatorStyle);
		function updateIndicatorStyle() {
			activeTab.value = context.tabsList.value?.querySelector("[role=\"tab\"][data-state=\"active\"]");
			if (!activeTab.value) return;
			if (context.orientation.value === "horizontal") indicatorStyle.value = {
				size: activeTab.value.offsetWidth,
				position: activeTab.value.offsetLeft
			};
			else indicatorStyle.value = {
				size: activeTab.value.offsetHeight,
				position: activeTab.value.offsetTop
			};
		}
		return (_ctx, _cache) => {
			return typeof indicatorStyle.value.size === "number" ? (openBlock(), createBlock(unref(Primitive), mergeProps({ key: 0 }, props, { style: {
				"--reka-tabs-indicator-size": `${indicatorStyle.value.size}px`,
				"--reka-tabs-indicator-position": `${indicatorStyle.value.position}px`
			} }), {
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 16, ["style"])) : createCommentVNode("v-if", true);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_typescript@6.0.2_vue@3.5.26_typescript@6.0.2_/node_modules/reka-ui/dist/Tabs/TabsList.js
var TabsList_default = /* @__PURE__ */ defineComponent({
	__name: "TabsList",
	props: {
		loop: {
			type: Boolean,
			required: false,
			default: true
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false
		}
	},
	setup(__props) {
		const { loop } = toRefs(__props);
		const { forwardRef, currentElement } = useForwardExpose();
		const context = injectTabsRootContext();
		context.tabsList = currentElement;
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(RovingFocusGroup_default), {
				"as-child": "",
				orientation: unref(context).orientation.value,
				dir: unref(context).dir.value,
				loop: unref(loop)
			}, {
				default: withCtx(() => [createVNode(unref(Primitive), {
					ref: unref(forwardRef),
					role: "tablist",
					"as-child": _ctx.asChild,
					as: _ctx.as,
					"aria-orientation": unref(context).orientation.value
				}, {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
					_: 3
				}, 8, [
					"as-child",
					"as",
					"aria-orientation"
				])]),
				_: 3
			}, 8, [
				"orientation",
				"dir",
				"loop"
			]);
		};
	}
});
//#endregion
//#region ../../../node_modules/.pnpm/reka-ui@2.5.0_typescript@6.0.2_vue@3.5.26_typescript@6.0.2_/node_modules/reka-ui/dist/Tabs/TabsTrigger.js
var TabsTrigger_default = /* @__PURE__ */ defineComponent({
	__name: "TabsTrigger",
	props: {
		value: {
			type: [String, Number],
			required: true
		},
		disabled: {
			type: Boolean,
			required: false,
			default: false
		},
		asChild: {
			type: Boolean,
			required: false
		},
		as: {
			type: null,
			required: false,
			default: "button"
		}
	},
	setup(__props) {
		const props = __props;
		const { forwardRef } = useForwardExpose();
		const rootContext = injectTabsRootContext();
		const triggerId = computed(() => makeTriggerId(rootContext.baseId, props.value));
		const contentId = computed(() => makeContentId(rootContext.baseId, props.value));
		const isSelected = computed(() => props.value === rootContext.modelValue.value);
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(RovingFocusItem_default), {
				"as-child": "",
				focusable: !_ctx.disabled,
				active: isSelected.value
			}, {
				default: withCtx(() => [createVNode(unref(Primitive), {
					id: triggerId.value,
					ref: unref(forwardRef),
					role: "tab",
					type: _ctx.as === "button" ? "button" : void 0,
					as: _ctx.as,
					"as-child": _ctx.asChild,
					"aria-selected": isSelected.value ? "true" : "false",
					"aria-controls": contentId.value,
					"data-state": isSelected.value ? "active" : "inactive",
					disabled: _ctx.disabled,
					"data-disabled": _ctx.disabled ? "" : void 0,
					"data-orientation": unref(rootContext).orientation.value,
					onMousedown: _cache[0] || (_cache[0] = withModifiers((event) => {
						if (!_ctx.disabled && event.ctrlKey === false) unref(rootContext).changeModelValue(_ctx.value);
						else event.preventDefault();
					}, ["left"])),
					onKeydown: _cache[1] || (_cache[1] = withKeys(($event) => unref(rootContext).changeModelValue(_ctx.value), ["enter", "space"])),
					onFocus: _cache[2] || (_cache[2] = () => {
						const isAutomaticActivation = unref(rootContext).activationMode !== "manual";
						if (!isSelected.value && !_ctx.disabled && isAutomaticActivation) unref(rootContext).changeModelValue(_ctx.value);
					})
				}, {
					default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
					_: 3
				}, 8, [
					"id",
					"type",
					"as",
					"as-child",
					"aria-selected",
					"aria-controls",
					"data-state",
					"disabled",
					"data-disabled",
					"data-orientation"
				])]),
				_: 3
			}, 8, ["focusable", "active"]);
		};
	}
});
//#endregion
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
var WORKFLOW_SETUP_TOOLS = new Set(["setup-workflow", "apply-workflow-credentials"]);
/**
* Walks an agent tree depth-first (most recent last) and returns the workflowId
* (from args) and toolCallId from the latest successful setup-workflow /
* apply-workflow-credentials tool result. These tools modify the workflow
* (credentials, parameters) but don't return workflowId in the result.
*/
function getLatestWorkflowSetupResult(node) {
	for (let i = node.children.length - 1; i >= 0; i--) {
		const childResult = getLatestWorkflowSetupResult(node.children[i]);
		if (childResult) return childResult;
	}
	for (let i = node.toolCalls.length - 1; i >= 0; i--) {
		const tc = node.toolCalls[i];
		if (WORKFLOW_SETUP_TOOLS.has(tc.toolName) && !tc.isLoading && tc.result && typeof tc.result === "object") {
			const result = tc.result;
			const args = tc.args;
			if (result.success === true && typeof args?.workflowId === "string") return {
				workflowId: args.workflowId,
				toolCallId: tc.toolCallId
			};
		}
	}
}
var DATA_TABLE_MUTATION_ACTIONS = new Set([
	"create",
	"insert-rows",
	"update-rows",
	"delete-rows",
	"add-column",
	"delete-column",
	"rename-column"
]);
/** Per-action check that the result indicates a successful mutation. */
var RESULT_VALIDATORS = {
	"insert-rows": (r) => typeof r.insertedCount === "number",
	"update-rows": (r) => typeof r.updatedCount === "number",
	"add-column": (r) => r.column !== null && r.column !== void 0 && typeof r.column === "object",
	"delete-rows": (r) => r.success === true,
	"delete-column": (r) => r.success === true,
	"rename-column": (r) => r.success === true
};
function extractDataTableId(action, result, args) {
	if (action === "create") {
		if (result.table && typeof result.table === "object") {
			const table = result.table;
			if (typeof table.id === "string") return table.id;
		}
		return;
	}
	const isValid = RESULT_VALIDATORS[action];
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
		const args = tc.args;
		if (tc.toolName === "data-tables" && args?.action === "delete" && !tc.isLoading && tc.result && typeof tc.result === "object") {
			if (tc.result.success === true && typeof args?.dataTableId === "string") return args.dataTableId;
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
		const args = tc.args;
		const action = typeof args?.action === "string" ? args.action : "";
		if (tc.toolName === "data-tables" && DATA_TABLE_MUTATION_ACTIONS.has(action) && !tc.isLoading && tc.result && typeof tc.result === "object") {
			const result = tc.result;
			const dataTableId = extractDataTableId(action, result, args);
			if (dataTableId) return {
				dataTableId,
				toolCallId: tc.toolCallId
			};
		}
	}
}
//#endregion
//#region src/features/ai/instanceAi/useCanvasPreview.ts
var ARTIFACT_ICON_MAP = {
	workflow: "workflow",
	"data-table": "table"
};
function useCanvasPreview({ thread, threadId }) {
	const activeTabId = ref();
	const allArtifactTabs = computed(() => {
		const result = [];
		for (const entry of thread.producedArtifacts.values()) if (entry.type === "workflow" || entry.type === "data-table") result.push({
			id: entry.id,
			type: entry.type,
			name: entry.name,
			icon: ARTIFACT_ICON_MAP[entry.type] ?? "file",
			projectId: entry.projectId
		});
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
	const isPreviewVisible = computed(() => activeTabId.value !== void 0);
	function selectTab(tabId) {
		activeTabId.value = tabId;
	}
	function closePreview() {
		activeTabId.value = void 0;
	}
	/**
	* Open or switch the preview to a workflow.
	* Returns true if the preview tab changed; false if the tab was already
	* active (so the caller can fall back to opening in a new tab instead).
	*/
	function openWorkflowPreview(workflowId) {
		if (activeTabId.value === workflowId) return false;
		activeTabId.value = workflowId;
		return true;
	}
	/**
	* Open or switch the preview to a data table.
	* Returns true if the preview tab changed; false if the tab was already
	* active (so the caller can fall back to opening in a new tab instead).
	*/
	function openDataTablePreview(dataTableId, _projectId) {
		if (activeTabId.value === dataTableId) return false;
		activeTabId.value = dataTableId;
		return true;
	}
	watch(allArtifactTabs, (tabs) => {
		if (activeTabId.value === void 0 || tabs.length === 0) return;
		if (!tabs.some((t) => t.id === activeTabId.value)) activeTabId.value = tabs[0].id;
	});
	watch(threadId, (nextThreadId, oldThreadId) => {
		if (!oldThreadId) return;
		if (nextThreadId === oldThreadId) return;
		activeTabId.value = void 0;
	});
	const workflowRefreshKey = ref(0);
	const latestBuildResult = computed(() => {
		for (let i = thread.messages.length - 1; i >= 0; i--) {
			const msg = thread.messages[i];
			if (msg.agentTree) {
				const result = getLatestBuildResult(msg.agentTree);
				if (result) return result;
			}
		}
		return null;
	});
	watch(() => latestBuildResult.value?.toolCallId, (toolCallId) => {
		if (!toolCallId || !latestBuildResult.value) return;
		if (thread.isHydratingThread) return;
		activeTabId.value = latestBuildResult.value.workflowId;
		workflowRefreshKey.value++;
	}, { flush: "sync" });
	const latestSetupResult = computed(() => {
		for (let i = thread.messages.length - 1; i >= 0; i--) {
			const msg = thread.messages[i];
			if (msg.agentTree) {
				const result = getLatestWorkflowSetupResult(msg.agentTree);
				if (result) return result;
			}
		}
		return null;
	});
	watch(() => latestSetupResult.value?.toolCallId, (toolCallId) => {
		if (!toolCallId || !latestSetupResult.value) return;
		const targetId = latestSetupResult.value.workflowId;
		if (activeTabId.value === targetId) workflowRefreshKey.value++;
	});
	const latestDataTableResult = computed(() => {
		for (let i = thread.messages.length - 1; i >= 0; i--) {
			const msg = thread.messages[i];
			if (msg.agentTree) {
				const result = getLatestDataTableResult(msg.agentTree);
				if (result) return result;
			}
		}
		return null;
	});
	watch(() => latestDataTableResult.value?.toolCallId, (toolCallId) => {
		if (!toolCallId || !latestDataTableResult.value) return;
		if (thread.isHydratingThread) return;
		activeTabId.value = latestDataTableResult.value.dataTableId;
		dataTableRefreshKey.value++;
	}, { flush: "sync" });
	watch(computed(() => {
		for (let i = thread.messages.length - 1; i >= 0; i--) {
			const msg = thread.messages[i];
			if (msg.agentTree) {
				const id = getLatestDeletedDataTableId(msg.agentTree);
				if (id) return id;
			}
		}
		return null;
	}), (deletedId) => {
		if (deletedId && deletedId === activeTabId.value) {
			const remaining = allArtifactTabs.value.filter((t) => t.id !== deletedId);
			activeTabId.value = remaining.length > 0 ? remaining[0].id : void 0;
		}
	});
	return {
		activeTabId,
		allArtifactTabs,
		activeWorkflowId,
		activeDataTableId,
		activeDataTableProjectId,
		dataTableRefreshKey,
		isPreviewVisible,
		workflowRefreshKey,
		selectTab,
		closePreview,
		openWorkflowPreview,
		openDataTablePreview
	};
}
//#endregion
//#region src/features/ai/instanceAi/useEventRelay.ts
function useEventRelay({ workflowExecutions, activeWorkflowId, getBufferedEvents, clearEventLog, relay }) {
	function handleIframeReady() {
		nextTick(() => {
			const wfId = activeWorkflowId.value;
			if (!wfId) return;
			const buffered = getBufferedEvents(wfId);
			relayedCount.set(wfId, buffered.length);
			for (const event of buffered) relay(event);
		});
	}
	const prevStatus = /* @__PURE__ */ new Map();
	const relayedCount = /* @__PURE__ */ new Map();
	const lastExecutionId = /* @__PURE__ */ new Map();
	const finishedSynthSent = /* @__PURE__ */ new Set();
	watch(() => workflowExecutions.value, (executions) => {
		const activeId = activeWorkflowId.value;
		for (const [wfId, entry] of executions) {
			const prevExecId = lastExecutionId.get(wfId);
			if (prevExecId !== void 0 && prevExecId !== entry.executionId) {
				relayedCount.delete(wfId);
				if (prevExecId) finishedSynthSent.delete(prevExecId);
			}
			lastExecutionId.set(wfId, entry.executionId);
			const isActive = wfId === activeId;
			const prev = prevStatus.get(wfId);
			prevStatus.set(wfId, entry.status);
			if (isActive) {
				const log = entry.eventLog;
				const alreadyRelayed = relayedCount.get(wfId) ?? 0;
				for (let i = alreadyRelayed; i < log.length; i++) relay(log[i]);
				relayedCount.set(wfId, log.length);
			}
			if (entry.status !== "running" && (prev === "running" || prev === void 0) && isActive) {
				relayedCount.delete(wfId);
				clearEventLog(wfId);
				relay({
					type: "executionFinished",
					data: {
						executionId: entry.executionId,
						workflowId: entry.workflowId,
						status: entry.status
					}
				});
				finishedSynthSent.add(entry.executionId);
			}
		}
	});
	/**
	* Called by InstanceAiWorkflowPreview after a workflow fetch resolves and
	* the new workflow has been sent to the iframe via `openWorkflow`. Replays
	* any buffered execution events for this workflow (typically: a build-phase
	* verification run that finished before the user opened the tab) so the
	* canvas paints them. The `relayedCount` cursor prevents double-relay if
	* `workflow-loaded` fires multiple times for the same workflow ref.
	*/
	function handleWorkflowLoaded(wfId) {
		if (activeWorkflowId.value !== wfId) return;
		const current = workflowExecutions.value.get(wfId);
		if (!current || current.eventLog.length === 0) return;
		const log = current.eventLog;
		const alreadyRelayed = relayedCount.get(wfId) ?? 0;
		for (let i = alreadyRelayed; i < log.length; i++) relay(log[i]);
		relayedCount.set(wfId, log.length);
		if (current.status !== "running" && !finishedSynthSent.has(current.executionId)) {
			finishedSynthSent.add(current.executionId);
			relay({
				type: "executionFinished",
				data: {
					executionId: current.executionId,
					workflowId: current.workflowId,
					status: current.status
				}
			});
		}
	}
	return {
		handleIframeReady,
		handleWorkflowLoaded
	};
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
			const existing = workflowExecutions.value.get(workflowId);
			if (existing?.executionId === executionId) next.set(workflowId, {
				...existing,
				status: "running",
				eventLog: [...existing.eventLog, event]
			});
			else next.set(workflowId, {
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
				status: status === "success" ? "success" : "error"
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
	function clearEventLog(workflowId) {
		const entry = workflowExecutions.value.get(workflowId);
		if (!entry || entry.eventLog.length === 0) return;
		const next = new Map(workflowExecutions.value);
		next.set(workflowId, {
			...entry,
			eventLog: []
		});
		workflowExecutions.value = next;
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
		clearEventLog,
		clearAll,
		cleanup
	};
}
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
//#endregion
//#region src/features/ai/instanceAi/components/AnimatedCollapsibleContent.vue?vue&type=style&index=0&lang.module.scss
var content$4 = "_content_hpmkw_335";
var collapsibleSlideDown$3 = "_collapsibleSlideDown_hpmkw_1";
var collapsibleSlideUp$3 = "_collapsibleSlideUp_hpmkw_1";
var shimmer$3 = "_shimmer_hpmkw_1";
var spin$3 = "_spin_hpmkw_1";
var opacityPulse$3 = "_opacityPulse_hpmkw_1";
var popoverIn$3 = "_popoverIn_hpmkw_1";
var fadeIn$3 = "_fadeIn_hpmkw_1";
var pulseGlow$3 = "_pulseGlow_hpmkw_1";
var pulseGlowDelayed$3 = "_pulseGlowDelayed_hpmkw_1";
var fade$3 = "_fade_hpmkw_1";
var fadeInUp$3 = "_fadeInUp_hpmkw_1";
var fadeInDown$3 = "_fadeInDown_hpmkw_1";
var fadeInLeft$3 = "_fadeInLeft_hpmkw_1";
var fadeInRight$3 = "_fadeInRight_hpmkw_1";
var fadeOut$3 = "_fadeOut_hpmkw_1";
var fadeOutDown$3 = "_fadeOutDown_hpmkw_1";
var fadeOutUp$3 = "_fadeOutUp_hpmkw_1";
var fadeOutLeft$3 = "_fadeOutLeft_hpmkw_1";
var fadeOutRight$3 = "_fadeOutRight_hpmkw_1";
var blinkBackground$3 = "_blinkBackground_hpmkw_1";
var typingBlink$3 = "_typingBlink_hpmkw_1";
var AnimatedCollapsibleContent_vue_vue_type_style_index_0_lang_module_default = {
	content: content$4,
	collapsibleSlideDown: collapsibleSlideDown$3,
	collapsibleSlideUp: collapsibleSlideUp$3,
	shimmer: shimmer$3,
	spin: spin$3,
	"skeleton-pulse": "_skeleton-pulse_hpmkw_1",
	opacityPulse: opacityPulse$3,
	popoverIn: popoverIn$3,
	fadeIn: fadeIn$3,
	pulseGlow: pulseGlow$3,
	pulseGlowDelayed: pulseGlowDelayed$3,
	fade: fade$3,
	fadeInUp: fadeInUp$3,
	fadeInDown: fadeInDown$3,
	fadeInLeft: fadeInLeft$3,
	fadeInRight: fadeInRight$3,
	fadeOut: fadeOut$3,
	fadeOutDown: fadeOutDown$3,
	fadeOutUp: fadeOutUp$3,
	fadeOutLeft: fadeOutLeft$3,
	fadeOutRight: fadeOutRight$3,
	blinkBackground: blinkBackground$3,
	typingBlink: typingBlink$3
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
//#endregion
//#region src/features/ai/instanceAi/builderAgents.ts
/** True when the agent node is the workflow-builder sub-agent. */
function isBuilderAgent(node) {
	return node.kind === "builder" || node.role === "workflow-builder";
}
/** True when the node is a builder sub-agent that is currently running. */
function isActiveBuilderAgent(node) {
	return isBuilderAgent(node) && node.status === "active";
}
/**
* True when the message would produce visible output in the message list.
*
* Assistant messages whose only renderable content has been extracted to the
* bottom builder section (or which haven't produced anything yet) would
* otherwise leave an empty wrapper — this predicate filters them out.
*/
function messageHasVisibleContent(message) {
	if (message.role === "user") return true;
	if (message.content) return true;
	const tree = message.agentTree;
	if (!tree) return message.isStreaming;
	if (tree.reasoning) return true;
	if (tree.statusMessage) return true;
	if (tree.status === "error" && tree.error) return true;
	if (!message.isStreaming && tree.children.some((c) => c.status === "active" && !isBuilderAgent(c))) return true;
	const childrenById = {};
	for (const c of tree.children) childrenById[c.agentId] = c;
	return tree.timeline.some((e) => {
		if (e.type !== "child") return true;
		const child = childrenById[e.agentId];
		return !child || !isActiveBuilderAgent(child);
	});
}
/**
* Walks every message's agent tree and returns active builder sub-agents in
* the order they appear. Used to render running builders in a dedicated bottom
* section of the conversation; completed builders stay in their natural slot.
*/
function collectActiveBuilderAgents(messages) {
	const result = [];
	const visit = (node) => {
		if (isActiveBuilderAgent(node)) result.push(node);
		for (const child of node.children) visit(child);
	};
	for (const m of messages) if (m.agentTree) visit(m.agentTree);
	return result;
}
//#endregion
//#region src/features/ai/instanceAi/toolLabels.ts
var NO_TOGGLE_TOOLS = new Set([
	"updateWorkingMemory",
	"plan",
	"task-control"
]);
function getToolIcon(toolName) {
	if (toolName === "complete-checkpoint") return "circle-check";
	if (toolName === "delegate" || toolName.endsWith("-with-agent")) return "share";
	if (toolName === "data-tables") return "table";
	if (toolName === "workflows" || toolName === "executions" || toolName === "nodes" || toolName === "templates") return "workflow";
	if (toolName === "research") return "search";
	if (toolName === "credentials" || toolName === "browser-credential-setup") return "key-round";
	if (toolName === "task-control" || toolName === "updateWorkingMemory" || toolName === "plan") return "brain";
	if (toolName === "filesystem") return "file-text";
	if (toolName === "workspace") return "folder";
	if (toolName.includes("data-table")) return "table";
	if (toolName.includes("workflow") || toolName === "submit-workflow" || toolName === "materialize-node-type") return "workflow";
	if (toolName.includes("credential")) return "key-round";
	return "settings";
}
/**
* Returns a human-readable display label for an instance AI tool name.
* Falls back to the raw tool name if no mapping exists in i18n.
*/
function useToolLabel() {
	const i18n = useI18n();
	function getToolLabel(toolName, args) {
		const action = typeof args?.action === "string" ? args.action : void 0;
		if (action) {
			const actionKey = `instanceAi.tools.${toolName}.${action}`;
			const actionTranslated = i18n.baseText(actionKey);
			if (actionTranslated !== actionKey) return actionTranslated;
		}
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
var DataSection_vue_vue_type_style_index_0_lang_module_default = { dataSection: "_dataSection_10gn9_125" };
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
		const thread = useThread();
		const styles = useCssModule();
		const wrapperRef = ref(null);
		/**
		* Preview openers — return true when they switched the preview tab, false
		* when the tab was already active (so we fall back to opening a new tab).
		*/
		const openWorkflowPreview = inject("openWorkflowPreview", void 0);
		const openDataTablePreview = inject("openDataTablePreview", void 0);
		/** Icon SVG paths for each resource type — matches the n8n design system icons. */
		const ICON_SVGS = {
			workflow: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M21.17 8H7.83a1.83 1.83 0 1 0 0 3.66h8.34a1.83 1.83 0 0 1 0 3.66H2.83\"/><path d=\"m18 2 4 4-4 4\"/><path d=\"m6 20-4-4 4-4\"/></svg>",
			credential: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4\"/><path d=\"m21 2-9.6 9.6\"/><circle cx=\"7.5\" cy=\"15.5\" r=\"5.5\"/></svg>",
			"data-table": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 3v18\"/><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M3 9h18\"/><path d=\"M3 15h18\"/></svg>"
		};
		/** URL builders for each resource type — fallbacks when the registry has no projectId. */
		const URL_BUILDERS = {
			workflow: (id) => `/workflow/${id}`,
			credential: (id) => `/home/credentials/${id}`,
			"data-table": () => "/home/datatables"
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
			const registry = thread.resourceNameIndex;
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
		/**
		* Build the real app URL for a resource. Project-scoped routes are preferred
		* when the registry knows the resource's projectId; otherwise we fall back to
		* the home view, which works for any resource the user has access to.
		*/
		function buildResourceUrl(type, id, projectId) {
			if (projectId) {
				if (type === "data-table") return `/projects/${projectId}/datatables/${id}`;
				if (type === "credential") return `/projects/${projectId}/credentials/${id}`;
			}
			return URL_BUILDERS[type]?.(id) ?? "#";
		}
		/** Track click handlers attached to links so they can be cleaned up. */
		const linkHandlers = /* @__PURE__ */ new WeakMap();
		/**
		* Post-process the rendered DOM to transform resource links into
		* styled resource chips with icons. Handles both:
		* - `n8n-resource://` custom scheme links (from pre-processing)
		* - Standard links pointing to internal n8n routes (generated by the AI)
		*
		* Click behavior:
		* - Cmd/Ctrl+click → browser handles new-tab via target="_blank"
		* - Left-click on workflow/data-table → opens (or switches to) the inline
		*   preview tab. If the preview is already showing this resource, falls
		*   through to default `target="_blank"` and opens a new tab instead.
		* - Left-click on credential (or any chip without an available preview)
		*   → opens in a new tab.
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
					const registryEntry = [...thread.resourceNameIndex.values()].find((r) => r.type === type && r.id === id);
					link.href = buildResourceUrl(type, id, registryEntry?.projectId);
					link.target = "_blank";
					link.rel = "noopener noreferrer";
					link.dataset.resourceId = id;
					applyResourceChip(link, type);
					const handler = (e) => {
						if (e.metaKey || e.ctrlKey) return;
						let switched;
						if (type === "workflow") switched = openWorkflowPreview?.(id);
						else if (type === "data-table" && registryEntry?.projectId) switched = openDataTablePreview?.(id, registryEntry.projectId);
						if (switched === true) e.preventDefault();
					};
					link.addEventListener("click", handler);
					linkHandlers.set(link, handler);
					continue;
				}
				for (const { pattern, type } of INTERNAL_ROUTE_PATTERNS) if (pattern.test(href)) {
					link.target = "_blank";
					link.rel = "noopener noreferrer";
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
	props: {
		size: { default: "small" },
		loading: { type: Boolean }
	},
	setup(__props) {
		/**
		* TimelineStepButton — full-width ghost button used as a collapsible trigger
		* in timeline components (ToolCallStep, AgentSection). Renders an icon slot
		* and truncated text label.
		*/
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nButton_default), {
				variant: "ghost",
				size: __props.size,
				class: normalizeClass(_ctx.$style.block)
			}, {
				default: withCtx(() => [createBaseVNode("span", { class: normalizeClass({
					[_ctx.$style.ellipsis]: true,
					[_ctx.$style.shimmer]: __props.loading
				}) }, [renderSlot(_ctx.$slots, "default")], 2), renderSlot(_ctx.$slots, "icon")]),
				_: 3
			}, 8, ["size", "class"]);
		};
	}
});
//#endregion
//#region src/features/ai/instanceAi/components/TimelineStepButton.vue?vue&type=style&index=0&lang.module.scss
var block = "_block_162im_335";
var ellipsis = "_ellipsis_162im_349";
var shimmer$2 = "_shimmer_162im_356";
var spin$2 = "_spin_162im_1";
var opacityPulse$2 = "_opacityPulse_162im_1";
var popoverIn$2 = "_popoverIn_162im_1";
var fadeIn$2 = "_fadeIn_162im_1";
var collapsibleSlideDown$2 = "_collapsibleSlideDown_162im_1";
var collapsibleSlideUp$2 = "_collapsibleSlideUp_162im_1";
var pulseGlow$2 = "_pulseGlow_162im_1";
var pulseGlowDelayed$2 = "_pulseGlowDelayed_162im_1";
var fade$2 = "_fade_162im_1";
var fadeInUp$2 = "_fadeInUp_162im_1";
var fadeInDown$2 = "_fadeInDown_162im_1";
var fadeInLeft$2 = "_fadeInLeft_162im_1";
var fadeInRight$2 = "_fadeInRight_162im_1";
var fadeOut$2 = "_fadeOut_162im_1";
var fadeOutDown$2 = "_fadeOutDown_162im_1";
var fadeOutUp$2 = "_fadeOutUp_162im_1";
var fadeOutLeft$2 = "_fadeOutLeft_162im_1";
var fadeOutRight$2 = "_fadeOutRight_162im_1";
var blinkBackground$2 = "_blinkBackground_162im_1";
var typingBlink$2 = "_typingBlink_162im_1";
var TimelineStepButton_vue_vue_type_style_index_0_lang_module_default = {
	block,
	ellipsis,
	shimmer: shimmer$2,
	spin: spin$2,
	"skeleton-pulse": "_skeleton-pulse_162im_1",
	opacityPulse: opacityPulse$2,
	popoverIn: popoverIn$2,
	fadeIn: fadeIn$2,
	collapsibleSlideDown: collapsibleSlideDown$2,
	collapsibleSlideUp: collapsibleSlideUp$2,
	pulseGlow: pulseGlow$2,
	pulseGlowDelayed: pulseGlowDelayed$2,
	fade: fade$2,
	fadeInUp: fadeInUp$2,
	fadeInDown: fadeInDown$2,
	fadeInLeft: fadeInLeft$2,
	fadeInRight: fadeInRight$2,
	fadeOut: fadeOut$2,
	fadeOutDown: fadeOutDown$2,
	fadeOutUp: fadeOutUp$2,
	fadeOutLeft: fadeOutLeft$2,
	fadeOutRight: fadeOutRight$2,
	blinkBackground: blinkBackground$2,
	typingBlink: typingBlink$2
};
var TimelineStepButton_default = /* @__PURE__ */ _plugin_vue_export_helper_default(TimelineStepButton_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": TimelineStepButton_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/ToolResultJson.vue?vue&type=script&setup=true&lang.ts
var import_FileSaver_min = /* @__PURE__ */ __toESM(require_FileSaver_min(), 1);
var _hoisted_1$12 = ["innerHTML"];
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
			}, null, 10, _hoisted_1$12), isTruncated.value ? (openBlock(), createElementBlock("div", {
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
var _hoisted_1$11 = ["src"];
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
			}, null, 10, _hoisted_1$11);
		};
	}
});
var ToolResultMedia_vue_vue_type_style_index_0_lang_module_default = { image: "_image_1l1xi_2" };
var ToolResultMedia_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ToolResultMedia_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ToolResultMedia_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/ToolResultText.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$10 = ["textContent"];
var ToolResultText_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ToolResultText",
	props: { text: {} },
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("pre", {
				class: normalizeClass(_ctx.$style.text),
				textContent: toDisplayString(__props.text)
			}, null, 10, _hoisted_1$10);
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
		toolName: {},
		toolArgs: {}
	},
	setup(__props) {
		const props = __props;
		function isAction(family, action) {
			return props.toolName === family && props.toolArgs?.action === action;
		}
		function isCodeTool() {
			return isAction("workflows", "get-as-code") || isAction("nodes", "type-definition");
		}
		function isTableTool() {
			return isAction("data-tables", "query") || isAction("workflows", "list") || isAction("executions", "list") || isAction("credentials", "list") || isAction("nodes", "search") || isAction("nodes", "list") || isAction("data-tables", "list");
		}
		function extractMcpContent(result) {
			if (Array.isArray(result)) return result;
			if (result !== null && typeof result === "object" && "content" in result && Array.isArray(result.content)) return result.content;
			return null;
		}
		function detectType(result) {
			if (extractMcpContent(result) !== null) return "content";
			if (isCodeTool()) return "code";
			if (isTableTool() && result && typeof result === "object") return "table";
			return "json";
		}
		function extractCode(result) {
			if (!result || typeof result !== "object") return null;
			const obj = result;
			if (isAction("workflows", "get-as-code") && typeof obj.code === "string") return obj.code;
			if (isAction("nodes", "type-definition") && Array.isArray(obj.definitions)) return obj.definitions.filter((d) => typeof d.content === "string").map((d) => d.content).join("\n\n");
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
		const resultType = computed(() => detectType(props.result));
		const contentItems = computed(() => extractMcpContent(props.result));
		const codeContent = computed(() => extractCode(props.result));
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
			const label = getToolLabel(tc.toolName, tc.args) || tc.toolName;
			if (tc.toolName === "delegate") {
				const role = typeof tc.args?.role === "string" ? tc.args.role : "";
				return role ? `${label} (${role})` : label;
			}
			if (tc.toolName === "research" && tc.args?.action === "web-search" && typeof tc.args?.query === "string") return `${label}: "${tc.args.query}"`;
			if (tc.toolName === "research" && tc.args?.action === "fetch-url" && typeof tc.args?.url === "string") return `${label}: ${tc.args.url}`;
			return label;
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(CollapsibleRoot_default), null, {
				default: withCtx(({ open: isOpen }) => [createVNode(unref(CollapsibleTrigger_default), { "as-child": "" }, {
					default: withCtx(() => [createVNode(TimelineStepButton_default, { loading: props.toolCall.isLoading }, {
						icon: withCtx(() => [createVNode(unref(N8nIcon_default), {
							icon: isOpen ? "chevron-down" : "chevron-right",
							size: "small"
						}, null, 8, ["icon"])]),
						default: withCtx(() => [createTextVNode(" " + toDisplayString(props.label ?? getDisplayLabel(props.toolCall)), 1)]),
						_: 2
					}, 1032, ["loading"])]),
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
								"tool-name": props.toolCall.toolName,
								"tool-args": props.toolCall.args
							}, null, 8, [
								"result",
								"tool-name",
								"tool-args"
							])]),
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
	props: {
		agentNode: {},
		visibleEntries: { default: void 0 },
		peek: {
			type: Boolean,
			default: false
		}
	},
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
		const timelineEntries = computed(() => props.visibleEntries ?? props.agentNode.timeline);
		const steps = computed(() => {
			const result = [];
			for (const entry of timelineEntries.value) if (entry.type === "text") {
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
					label: getToolLabel(tc.toolName, tc.args),
					isLoading: tc.isLoading,
					toggleLabel: getToggleLabel(tc),
					hideLabel: getHideLabel(tc),
					toolCall: tc
				});
			}
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
					default: withCtx(() => [props.peek ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.streamingMarkdown)
					}, [createVNode(InstanceAiMarkdown_default, { content: step.label }, null, 8, ["content"])], 2)) : (openBlock(), createBlock(InstanceAiMarkdown_default, {
						key: 1,
						content: step.label
					}, null, 8, ["content"]))]),
					_: 2
				}, 1024))], 64)) : createCommentVNode("", true)], 64);
			}), 128))], 2);
		};
	}
});
var SubagentStepTimeline_vue_vue_type_style_index_0_lang_module_default = {
	timeline: "_timeline_13ew5_125",
	toggleContent: "_toggleContent_13ew5_131",
	streamingMarkdown: "_streamingMarkdown_13ew5_136"
};
var SubagentStepTimeline_default = /* @__PURE__ */ _plugin_vue_export_helper_default(SubagentStepTimeline_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SubagentStepTimeline_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/AgentSection.vue?vue&type=script&setup=true&lang.ts
var AgentSection_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "AgentSection",
	props: { agentNode: {} },
	setup(__props) {
		const props = __props;
		const settingsStore = useSettingsStore();
		const isActive = computed(() => props.agentNode.status === "active");
		const isExpanded = ref(settingsStore.isCloudDeployment);
		const isError = computed(() => props.agentNode.status === "error");
		const sectionTitle = computed(() => props.agentNode.subtitle ?? props.agentNode.role ?? "Working...");
		/** Most recent non-child timeline entry, shown as a peek while collapsed and active. */
		const peekEntries = computed(() => {
			const entries = props.agentNode.timeline;
			for (let i = entries.length - 1; i >= 0; i--) {
				const entry = entries[i];
				if (entry.type !== "child") return [entry];
			}
			return [];
		});
		watch(() => props.agentNode.status, (status) => {
			if (status === "completed") isExpanded.value = false;
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock(Fragment, null, [createVNode(unref(CollapsibleRoot_default), {
				open: isExpanded.value,
				"onUpdate:open": _cache[0] || (_cache[0] = ($event) => isExpanded.value = $event)
			}, {
				default: withCtx(({ open: isOpen }) => [
					createVNode(unref(CollapsibleTrigger_default), { "as-child": "" }, {
						default: withCtx(() => [createVNode(TimelineStepButton_default, {
							loading: isActive.value,
							size: "medium"
						}, {
							icon: withCtx(() => [createVNode(unref(N8nIcon_default), {
								icon: isOpen ? "chevron-down" : "chevron-right",
								size: "small"
							}, null, 8, ["icon"])]),
							default: withCtx(() => [createTextVNode(" " + toDisplayString(sectionTitle.value), 1)]),
							_: 2
						}, 1032, ["loading"])]),
						_: 2
					}, 1024),
					!isOpen && isActive.value && peekEntries.value.length ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.content)
					}, [createVNode(SubagentStepTimeline_default, {
						"agent-node": props.agentNode,
						"visible-entries": peekEntries.value,
						peek: ""
					}, null, 8, ["agent-node", "visible-entries"])], 2)) : createCommentVNode("", true),
					createVNode(AnimatedCollapsibleContent_default, { class: normalizeClass(_ctx.$style.content) }, {
						default: withCtx(() => [createVNode(SubagentStepTimeline_default, { "agent-node": props.agentNode }, null, 8, ["agent-node"])]),
						_: 1
					}, 8, ["class"])
				]),
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
var AgentSection_vue_vue_type_style_index_0_lang_module_default = { content: "_content_1xf99_125" };
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
	wrapper: "_wrapper_1sr3r_125",
	userBubble: "_userBubble_1sr3r_131",
	answerItem: "_answerItem_1sr3r_140",
	question: "_question_1sr3r_149",
	skipped: "_skipped_1sr3r_153"
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
		metadata: {},
		archived: { type: Boolean }
	},
	setup(__props) {
		const i18n = useI18n();
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
				"data-test-id": "instance-ai-artifact-card",
				class: normalizeClass([_ctx.$style.card, props.archived && _ctx.$style.cardArchived]),
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
				}), props.archived ? (openBlock(), createElementBlock("span", {
					key: 0,
					class: normalizeClass(_ctx.$style.archivedBadge)
				}, toDisplayString(unref(i18n).baseText("instanceAi.artifactsPanel.archived")), 3)) : createCommentVNode("", true)]),
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
	card: "_card_1g0gf_125",
	cardArchived: "_cardArchived_1g0gf_134",
	archivedBadge: "_archivedBadge_1g0gf_138",
	icon: "_icon_1g0gf_147",
	name: "_name_1g0gf_152",
	metadata: "_metadata_1g0gf_161"
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
					default: withCtx(() => [createVNode(TimelineStepButton_default, {
						loading: props.isLoading,
						size: "medium"
					}, {
						icon: withCtx(() => [createVNode(unref(N8nIcon_default), {
							icon: isOpen ? "chevron-down" : "chevron-right",
							size: "small"
						}, null, 8, ["icon"])]),
						default: withCtx(() => [createTextVNode(" " + toDisplayString(unref(i18n).baseText("instanceAi.delegateCard.delegatingTo")) + ": ", 1), createVNode(unref(N8nText_default), { bold: "" }, {
							default: withCtx(() => [createTextVNode(toDisplayString(role.value), 1)]),
							_: 1
						})]),
						_: 2
					}, 1032, ["loading"])]),
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
var footer = "_footer_nszhc_125";
var column = "_column_nszhc_140";
var bordered = "_bordered_nszhc_145";
var ConfirmationFooter_vue_vue_type_style_index_0_lang_module_default = {
	footer,
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
	root: "_root_i8luf_125",
	header: "_header_i8luf_134",
	tasks: "_tasks_i8luf_142",
	taskItem: "_taskItem_i8luf_147",
	taskRow: "_taskRow_i8luf_151",
	taskNumber: "_taskNumber_i8luf_158",
	taskTitle: "_taskTitle_i8luf_172",
	taskDetail: "_taskDetail_i8luf_180",
	taskSpec: "_taskSpec_i8luf_185",
	actions: "_actions_i8luf_191"
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
		const thread = useThread();
		const telemetry = useTelemetry();
		const rootStore = useRootStore();
		/** Resolve artifact name from the enriched registry (falls back to extracted name). */
		function resolveArtifactName(artifact) {
			return thread.producedArtifacts.get(artifact.resourceId)?.name ?? artifact.name;
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
				thread_id: thread.currentThreadId,
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
			thread.resolveConfirmation(requestId, approved ? "approved" : "denied");
			thread.confirmAction(requestId, {
				kind: "approval",
				approved,
				...feedback ? { userInput: feedback } : {}
			});
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
					compact: props.compact,
					class: normalizeClass(_ctx.$style.timelineItem)
				}, {
					default: withCtx(() => [createVNode(InstanceAiMarkdown_default, { content: entry.content }, null, 8, ["content"])]),
					_: 2
				}, 1032, ["compact", "class"])) : entry.type === "tool-call" && toolCallsById.value[entry.toolCallId] && !unref(HIDDEN_TOOLS).has(toolCallsById.value[entry.toolCallId].toolName) ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [toolCallsById.value[entry.toolCallId].renderHint === "tasks" ? (openBlock(), createBlock(TaskChecklist_default, {
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
				])) : toolCallsById.value[entry.toolCallId].renderHint === "builder" ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [], 64)) : toolCallsById.value[entry.toolCallId].renderHint === "data-table" ? (openBlock(), createElementBlock(Fragment, { key: 3 }, [], 64)) : toolCallsById.value[entry.toolCallId].renderHint === "researcher" ? (openBlock(), createElementBlock(Fragment, { key: 4 }, [], 64)) : toolCallsById.value[entry.toolCallId].confirmation?.inputType === "plan-review" ? (openBlock(), createBlock(PlanReviewPanel_default, {
					key: 5,
					"planned-tasks": toolCallsById.value[entry.toolCallId].confirmation?.planItems ?? toolCallsById.value[entry.toolCallId].args?.tasks ?? mapTaskItemsToPlannedTasks(toolCallsById.value[entry.toolCallId].confirmation?.tasks) ?? [],
					"read-only": !toolCallsById.value[entry.toolCallId].isLoading,
					onApprove: ($event) => handlePlanConfirm(toolCallsById.value[entry.toolCallId], true),
					onRequestChanges: (fb) => handlePlanConfirm(toolCallsById.value[entry.toolCallId], false, fb)
				}, null, 8, [
					"planned-tasks",
					"read-only",
					"onApprove",
					"onRequestChanges"
				])) : toolCallsById.value[entry.toolCallId].renderHint === "planner" ? (openBlock(), createElementBlock(Fragment, { key: 6 }, [], 64)) : toolCallsById.value[entry.toolCallId].confirmation?.inputType === "questions" && !toolCallsById.value[entry.toolCallId].isLoading ? (openBlock(), createBlock(AnsweredQuestions_default, {
					key: 7,
					"tool-call": toolCallsById.value[entry.toolCallId]
				}, null, 8, ["tool-call"])) : toolCallsById.value[entry.toolCallId].confirmation?.inputType === "questions" && toolCallsById.value[entry.toolCallId].isLoading ? (openBlock(), createElementBlock(Fragment, { key: 8 }, [], 64)) : (openBlock(), createBlock(ToolCallStep_default, {
					key: 9,
					"tool-call": toolCallsById.value[entry.toolCallId],
					"show-connector": true
				}, {
					default: withCtx(() => [renderSlot(_ctx.$slots, "after-tool-call", { toolCall: toolCallsById.value[entry.toolCallId] })]),
					_: 2
				}, 1032, ["tool-call"]))], 64)) : entry.type === "child" && childrenById.value[entry.agentId] && !unref(isActiveBuilderAgent)(childrenById.value[entry.agentId]) ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
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
							archived: unref(thread).producedArtifacts.get(artifact.resourceId)?.archived,
							metadata: formatArtifactMetadata(artifact)
						}, null, 8, [
							"type",
							"name",
							"resource-id",
							"project-id",
							"archived",
							"metadata"
						]);
					}), 128)) : createCommentVNode("", true)
				], 64)) : createCommentVNode("", true)], 64);
			}), 128))], 2);
		};
	}
});
var AgentTimeline_vue_vue_type_style_index_0_lang_module_default = {
	timeline: "_timeline_1vaau_125",
	timelineItem: "_timelineItem_1vaau_131"
};
var AgentTimeline_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentTimeline_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentTimeline_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/ResponseGroup.vue
var ResponseGroup_default = /* @__PURE__ */ defineComponent({
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
						icon: withCtx(() => [createVNode(unref(N8nIcon_default), {
							icon: isOpen ? "chevron-down" : "chevron-right",
							size: "small"
						}, null, 8, ["icon"])]),
						default: withCtx(() => [createTextVNode(" " + toDisplayString(summaryText.value), 1)]),
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
		const thread = useThread();
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
			return thread.producedArtifacts.get(artifact.resourceId)?.name ?? artifact.name;
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
							"project-id": artifact.projectId,
							archived: unref(thread).producedArtifacts.get(artifact.resourceId)?.archived,
							class: normalizeClass(_ctx.$style.artifactCard)
						}, null, 8, [
							"type",
							"name",
							"resource-id",
							"project-id",
							"archived",
							"class"
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
	reasoningTrigger: "_reasoningTrigger_j1b3z_125",
	artifactCard: "_artifactCard_j1b3z_129",
	reasoningContent: "_reasoningContent_j1b3z_137"
};
var AgentActivityTree_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentActivityTree_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentActivityTree_vue_vue_type_style_index_0_lang_module_default }]]);
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
		const thread = useThread();
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
		const responseId = computed(() => props.message.messageGroupId ?? props.message.id);
		const isRateable = computed(() => !isUser.value && thread.rateableResponseId === responseId.value && !(responseId.value in thread.feedbackByResponseId));
		const hasSubmittedFeedback = computed(() => !isUser.value && responseId.value in thread.feedbackByResponseId);
		function onFeedback(payload) {
			thread.submitFeedback(responseId.value, payload);
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
				isRateable.value ? (openBlock(), createBlock(unref(MessageRating_default), {
					key: 5,
					minimal: "",
					"data-test-id": "instance-ai-message-rating",
					onFeedback
				})) : hasSubmittedFeedback.value ? (openBlock(), createElementBlock("p", {
					key: 6,
					class: normalizeClass(_ctx.$style.feedbackSuccess),
					"data-test-id": "instance-ai-feedback-success"
				}, toDisplayString(unref(i18n).baseText("instanceAi.feedback.success")), 3)) : createCommentVNode("", true),
				unref(store).debugMode && !isUser.value ? (openBlock(), createBlock(unref(N8nIconButton_default), {
					key: 7,
					icon: "code",
					variant: "ghost",
					size: "xsmall",
					class: normalizeClass(_ctx.$style.actionBtn),
					onClick: _cache[0] || (_cache[0] = ($event) => showDebugInfo.value = !showDebugInfo.value)
				}, null, 8, ["class"])) : createCommentVNode("", true),
				showDebugInfo.value ? (openBlock(), createElementBlock("pre", {
					key: 8,
					class: normalizeClass(_ctx.$style.debugJson)
				}, toDisplayString(formatJson(props.message)), 3)) : createCommentVNode("", true)
			], 2))], 2);
		};
	}
});
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiMessage.vue?vue&type=style&index=0&lang.module.scss
var userMessage = "_userMessage_6q5zo_335";
var userAttachments = "_userAttachments_6q5zo_342";
var userBubble = "_userBubble_6q5zo_349";
var assistantWrapper = "_assistantWrapper_6q5zo_358";
var actionBtn = "_actionBtn_6q5zo_364";
var statusIndicator = "_statusIndicator_6q5zo_381";
var statusDot$1 = "_statusDot_6q5zo_391";
var opacityPulse$1 = "_opacityPulse_6q5zo_1";
var blinkingCursor = "_blinkingCursor_6q5zo_414";
var runLevelError = "_runLevelError_6q5zo_431";
var runLevelErrorDetails = "_runLevelErrorDetails_6q5zo_437";
var errorDetailsSummary = "_errorDetailsSummary_6q5zo_449";
var feedbackSuccess = "_feedbackSuccess_6q5zo_458";
var debugJson = "_debugJson_6q5zo_464";
var shimmer$1 = "_shimmer_6q5zo_1";
var spin$1 = "_spin_6q5zo_1";
var popoverIn$1 = "_popoverIn_6q5zo_1";
var fadeIn$1 = "_fadeIn_6q5zo_1";
var collapsibleSlideDown$1 = "_collapsibleSlideDown_6q5zo_1";
var collapsibleSlideUp$1 = "_collapsibleSlideUp_6q5zo_1";
var pulseGlow$1 = "_pulseGlow_6q5zo_1";
var pulseGlowDelayed$1 = "_pulseGlowDelayed_6q5zo_1";
var fade$1 = "_fade_6q5zo_1";
var fadeInUp$1 = "_fadeInUp_6q5zo_1";
var fadeInDown$1 = "_fadeInDown_6q5zo_1";
var fadeInLeft$1 = "_fadeInLeft_6q5zo_1";
var fadeInRight$1 = "_fadeInRight_6q5zo_1";
var fadeOut$1 = "_fadeOut_6q5zo_1";
var fadeOutDown$1 = "_fadeOutDown_6q5zo_1";
var fadeOutUp$1 = "_fadeOutUp_6q5zo_1";
var fadeOutLeft$1 = "_fadeOutLeft_6q5zo_1";
var fadeOutRight$1 = "_fadeOutRight_6q5zo_1";
var blinkBackground$1 = "_blinkBackground_6q5zo_1";
var typingBlink$1 = "_typingBlink_6q5zo_1";
var InstanceAiMessage_vue_vue_type_style_index_0_lang_module_default = {
	userMessage,
	userAttachments,
	userBubble,
	assistantWrapper,
	actionBtn,
	statusIndicator,
	"status-fade-in": "_status-fade-in_6q5zo_1",
	statusDot: statusDot$1,
	opacityPulse: opacityPulse$1,
	blinkingCursor,
	"cursor-blink": "_cursor-blink_6q5zo_1",
	runLevelError,
	runLevelErrorDetails,
	errorDetailsSummary,
	feedbackSuccess,
	debugJson,
	shimmer: shimmer$1,
	spin: spin$1,
	"skeleton-pulse": "_skeleton-pulse_6q5zo_1",
	popoverIn: popoverIn$1,
	fadeIn: fadeIn$1,
	collapsibleSlideDown: collapsibleSlideDown$1,
	collapsibleSlideUp: collapsibleSlideUp$1,
	pulseGlow: pulseGlow$1,
	pulseGlowDelayed: pulseGlowDelayed$1,
	fade: fade$1,
	fadeInUp: fadeInUp$1,
	fadeInDown: fadeInDown$1,
	fadeInLeft: fadeInLeft$1,
	fadeInRight: fadeInRight$1,
	fadeOut: fadeOut$1,
	fadeOutDown: fadeOutDown$1,
	fadeOutUp: fadeOutUp$1,
	fadeOutLeft: fadeOutLeft$1,
	fadeOutRight: fadeOutRight$1,
	blinkBackground: blinkBackground$1,
	typingBlink: typingBlink$1
};
var InstanceAiMessage_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiMessage_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiMessage_vue_vue_type_style_index_0_lang_module_default }]]);
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
var _hoisted_1$8 = ["data-state"];
var _hoisted_2$3 = ["onClick"];
var _hoisted_3$1 = ["onClick"];
var _hoisted_4$1 = ["onClick"];
var InstanceAiDebugPanel_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiDebugPanel",
	emits: ["close"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const i18n = useI18n();
		const store = useInstanceAiStore();
		const thread = useThread();
		const debugStore = useInstanceAiDebugStore();
		const activeTab = ref("events");
		const expandedIndex = ref(null);
		const eventListRef = useTemplateRef("eventList");
		const events = computed(() => thread.debugEvents);
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
			const trace = thread.copyFullTrace();
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
			for (const msg of thread.messages) {
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
							"data-state": unref(thread).sseState
						}, null, 10, _hoisted_1$8),
						createBaseVNode("span", null, "SSE: " + toDisplayString(unref(thread).sseState), 1),
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
var header$5 = "_header_mguwb_138";
var headerTitle$1 = "_headerTitle_mguwb_146";
var headerActions = "_headerActions_mguwb_154";
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
var error = "_error_mguwb_293";
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
	header: header$5,
	headerTitle: headerTitle$1,
	headerActions,
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
	error,
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
//#region src/features/ai/instanceAi/components/ConnectionRow.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$7 = ["title"];
var ConnectionRow_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ConnectionRow",
	props: {
		name: {},
		subtitle: {},
		icon: {},
		status: {},
		actions: {}
	},
	emits: [
		"connect",
		"disconnect",
		"openSettings",
		"remove"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const ACTION_LABEL_KEYS = {
			connect: "instanceAi.connections.row.connect",
			disconnect: "instanceAi.connections.row.disconnect",
			settings: "instanceAi.connections.row.settings",
			remove: "instanceAi.connections.row.remove"
		};
		const ACTION_ORDER = [
			"connect",
			"settings",
			"disconnect",
			"remove"
		];
		const menuItems = computed(() => ACTION_ORDER.filter((a) => props.actions.includes(a)).map((a) => ({
			id: a,
			label: i18n.baseText(ACTION_LABEL_KEYS[a])
		})));
		const statusTooltip = computed(() => {
			if (props.status === "connected") return i18n.baseText("instanceAi.connections.row.status.connected");
			if (props.status === "waiting") return i18n.baseText("instanceAi.connections.row.status.waiting");
			return i18n.baseText("instanceAi.connections.row.status.disconnected");
		});
		function handleSelect(action) {
			if (action === "connect") emit("connect");
			else if (action === "disconnect") emit("disconnect");
			else if (action === "settings") emit("openSettings");
			else if (action === "remove") emit("remove");
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.row) }, [
				createBaseVNode("span", { class: normalizeClass(_ctx.$style.iconWrap) }, [createVNode(unref(N8nIcon_default), {
					icon: __props.icon,
					size: "large",
					class: normalizeClass(_ctx.$style.icon)
				}, null, 8, ["icon", "class"])], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.labels) }, [createVNode(unref(N8nText_default), {
					bold: "",
					size: "small",
					class: normalizeClass(_ctx.$style.name)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.name), 1)]),
					_: 1
				}, 8, ["class"]), createVNode(unref(N8nText_default), {
					size: "xsmall",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.subtitle), 1)]),
					_: 1
				})], 2),
				createBaseVNode("span", {
					class: normalizeClass([
						_ctx.$style.dot,
						__props.status === "connected" && _ctx.$style.dotConnected,
						__props.status === "waiting" && _ctx.$style.dotWaiting,
						__props.status === "disconnected" && _ctx.$style.dotDisconnected
					]),
					title: statusTooltip.value
				}, null, 10, _hoisted_1$7),
				menuItems.value.length > 0 ? (openBlock(), createBlock(unref(DropdownMenu_default), {
					key: 0,
					items: menuItems.value,
					placement: "bottom-end",
					onSelect: handleSelect
				}, null, 8, ["items"])) : createCommentVNode("", true)
			], 2);
		};
	}
});
var ConnectionRow_vue_vue_type_style_index_0_lang_module_default = {
	row: "_row_57dlr_125",
	iconWrap: "_iconWrap_57dlr_132",
	icon: "_icon_57dlr_132",
	labels: "_labels_57dlr_146",
	name: "_name_57dlr_154",
	dot: "_dot_57dlr_160",
	dotConnected: "_dotConnected_57dlr_167",
	dotWaiting: "_dotWaiting_57dlr_171",
	dotDisconnected: "_dotDisconnected_57dlr_175"
};
var ConnectionRow_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ConnectionRow_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ConnectionRow_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/ConnectionsCard.vue?vue&type=script&setup=true&lang.ts
var ConnectionsCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ConnectionsCard",
	setup(__props) {
		const i18n = useI18n();
		const uiStore = useUIStore();
		const store = useInstanceAiSettingsStore();
		const connections = computed(() => store.connections);
		const isVisible = computed(() => !store.isLocalGatewayDisabledByAdmin && (store.gatewayStatusLoaded || store.isLocalGatewayDisabled));
		const ICON_MAP = {
			"computer-use": "mouse-pointer",
			"browser-use": "globe"
		};
		const baseAddItems = [{
			id: "computer-use",
			label: i18n.baseText("instanceAi.connections.add.computerUse"),
			icon: {
				type: "icon",
				value: "mouse-pointer"
			}
		}];
		const addItems = computed(() => {
			const added = new Set(connections.value.map((c) => c.type));
			return baseAddItems.filter((item) => {
				if (added.has(item.id)) return false;
				if (store.isLocalGatewayDisabledByAdmin) return false;
				return true;
			});
		});
		const hasAddableConnection = computed(() => addItems.value.length > 0);
		function getRowActions(type, status) {
			if (type === "browser-use") return ["settings"];
			if (status === "connected") return [
				"settings",
				"disconnect",
				"remove"
			];
			return ["connect", "remove"];
		}
		async function openModal(type) {
			if (type === "computer-use" && !store.isLocalGatewayDisabledByAdmin && store.isLocalGatewayDisabled) await store.persistLocalGatewayPreference(false);
			if (type === "computer-use") uiStore.openModal(INSTANCE_AI_COMPUTER_USE_SETUP_MODAL_KEY);
			else uiStore.openModal(INSTANCE_AI_BROWSER_USE_SETUP_MODAL_KEY);
		}
		async function handleDisconnect(type) {
			if (type === "computer-use") await store.disconnectComputerUse();
		}
		async function handleRemove(type) {
			if (type === "computer-use") await store.removeComputerUse();
		}
		return (_ctx, _cache) => {
			return isVisible.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass([_ctx.$style.section, _ctx.$style.card])
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [createVNode(unref(N8nHeading_default), {
				tag: "h3",
				size: "small",
				bold: ""
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.connections.title")), 1)]),
				_: 1
			}), hasAddableConnection.value ? (openBlock(), createBlock(unref(DropdownMenu_default), {
				key: 0,
				items: addItems.value,
				"activator-icon": {
					type: "icon",
					value: "plus"
				},
				placement: "bottom-end",
				"data-test-id": "instance-ai-connections-add",
				onSelect: openModal
			}, null, 8, ["items"])) : createCommentVNode("", true)], 2), connections.value.length > 0 ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.list)
			}, [(openBlock(true), createElementBlock(Fragment, null, renderList(connections.value, (conn) => {
				return openBlock(), createBlock(ConnectionRow_default, {
					key: conn.type,
					name: conn.name,
					subtitle: conn.subtitle,
					icon: ICON_MAP[conn.type],
					status: conn.status,
					actions: getRowActions(conn.type, conn.status),
					onConnect: ($event) => openModal(conn.type),
					onDisconnect: ($event) => handleDisconnect(conn.type),
					onOpenSettings: ($event) => openModal(conn.type),
					onRemove: ($event) => handleRemove(conn.type)
				}, null, 8, [
					"name",
					"subtitle",
					"icon",
					"status",
					"actions",
					"onConnect",
					"onDisconnect",
					"onOpenSettings",
					"onRemove"
				]);
			}), 128))], 2)) : (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.empty)
			}, [
				createVNode(unref(N8nIcon_default), {
					icon: "link",
					size: 30,
					class: normalizeClass(_ctx.$style.emptyIcon)
				}, null, 8, ["class"]),
				createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("instanceAi.connections.empty.title")), 1),
				createVNode(unref(N8nButton_default), {
					label: unref(i18n).baseText("instanceAi.connections.empty.cta"),
					variant: "outline",
					size: "small",
					disabled: unref(store).isLocalGatewayDisabledByAdmin,
					"data-test-id": "instance-ai-connections-empty-cta",
					onClick: _cache[0] || (_cache[0] = ($event) => openModal("computer-use"))
				}, null, 8, ["label", "disabled"])
			], 2))], 2)) : createCommentVNode("", true);
		};
	}
});
var ConnectionsCard_vue_vue_type_style_index_0_lang_module_default = {
	section: "_section_d9h2e_125",
	card: "_card_d9h2e_130",
	header: "_header_d9h2e_137",
	list: "_list_d9h2e_145",
	empty: "_empty_d9h2e_150",
	emptyIcon: "_emptyIcon_d9h2e_163"
};
var ConnectionsCard_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ConnectionsCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ConnectionsCard_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiArtifactsPanel.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$6 = ["onClick"];
var _hoisted_2$2 = ["title"];
var InstanceAiArtifactsPanel_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiArtifactsPanel",
	setup(__props) {
		const i18n = useI18n();
		const thread = useThread();
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
		const tasks = computed(() => thread.currentTasks);
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
			for (const entry of thread.producedArtifacts.values()) if (entry.type === "workflow" || entry.type === "data-table") result.push(entry);
			return result;
		});
		const artifactIconMap = {
			workflow: "workflow",
			"data-table": "table"
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.panel) }, [
				createBaseVNode("div", { class: normalizeClass([_ctx.$style.section, _ctx.$style.card]) }, [createVNode(unref(N8nHeading_default), {
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
						class: normalizeClass([_ctx.$style.artifactRow, artifact.archived && _ctx.$style.artifactRowArchived]),
						onClick: ($event) => handleArtifactClick(artifact, $event)
					}, [
						createBaseVNode("span", { class: normalizeClass(_ctx.$style.artifactIconWrap) }, [createVNode(unref(N8nIcon_default), {
							icon: artifactIconMap[artifact.type] ?? "file",
							size: "large",
							class: normalizeClass(_ctx.$style.artifactIcon)
						}, null, 8, ["icon", "class"])], 2),
						createBaseVNode("span", { class: normalizeClass(_ctx.$style.artifactName) }, toDisplayString(artifact.name), 3),
						artifact.archived ? (openBlock(), createElementBlock("span", {
							key: 0,
							class: normalizeClass(_ctx.$style.archivedBadge)
						}, toDisplayString(unref(i18n).baseText("instanceAi.artifactsPanel.archived")), 3)) : createCommentVNode("", true)
					], 10, _hoisted_1$6);
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
				}, null, 8, ["class"])], 2), createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("instanceAi.artifactsPanel.noArtifacts")), 1)], 2))], 2),
				tasks.value ? (openBlock(), createElementBlock("div", {
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
					}, toDisplayString(task.description), 11, _hoisted_2$2)], 2);
				}), 128))], 2)], 2)) : createCommentVNode("", true),
				createVNode(ConnectionsCard_default)
			], 2);
		};
	}
});
var InstanceAiArtifactsPanel_vue_vue_type_style_index_0_lang_module_default = {
	panel: "_panel_1dxos_125",
	section: "_section_1dxos_135",
	card: "_card_1dxos_140",
	sectionTitle: "_sectionTitle_1dxos_147",
	progress: "_progress_1dxos_154",
	artifactList: "_artifactList_1dxos_161",
	artifactRow: "_artifactRow_1dxos_166",
	artifactName: "_artifactName_1dxos_178",
	artifactIcon: "_artifactIcon_1dxos_181",
	artifactIconWrap: "_artifactIconWrap_1dxos_185",
	artifactRowArchived: "_artifactRowArchived_1dxos_209",
	archivedBadge: "_archivedBadge_1dxos_216",
	emptyState: "_emptyState_1dxos_226",
	emptyIcons: "_emptyIcons_1dxos_236",
	emptyIcon: "_emptyIcon_1dxos_236",
	taskList: "_taskList_1dxos_249",
	task: "_task_1dxos_249",
	doneTask: "_doneTask_1dxos_263",
	failedTask: "_failedTask_1dxos_268",
	cancelledTask: "_cancelledTask_1dxos_272",
	taskDescription: "_taskDescription_1dxos_276",
	todoIcon: "_todoIcon_1dxos_285",
	inProgressIcon: "_inProgressIcon_1dxos_289",
	doneIcon: "_doneIcon_1dxos_293",
	failedIcon: "_failedIcon_1dxos_300",
	cancelledIcon: "_cancelledIcon_1dxos_304"
};
var InstanceAiArtifactsPanel_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiArtifactsPanel_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiArtifactsPanel_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiStatusBar.vue?vue&type=script&setup=true&lang.ts
var InstanceAiStatusBar_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiStatusBar",
	setup(__props) {
		const thread = useThread();
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
					detail: getToolLabel(activeTool.toolName, activeTool.args)
				};
				return { label: roleLabel };
			}
			const activeTool = tree.toolCalls.find((tc) => tc.isLoading);
			if (activeTool) return { label: getToolLabel(activeTool.toolName, activeTool.args) };
			return { label: i18n.baseText("instanceAi.statusBar.thinking") };
		}
		const activity = computed(() => {
			if (thread.isAwaitingConfirmation) return { label: i18n.baseText("instanceAi.statusBar.waitingForInput") };
			return deriveActivity(thread.messages);
		});
		const isVisible = computed(() => thread.isStreaming);
		const formattedElapsed = computed(() => {
			const s = elapsed.value;
			if (s < 60) return `${String(s)}s`;
			const m = Math.floor(s / 60);
			const remaining = s % 60;
			return `${String(m)}m ${String(remaining).padStart(2, "0")}s`;
		});
		const isCountingElapsed = computed(() => isVisible.value && !thread.isAwaitingConfirmation);
		watch(isVisible, (visible) => {
			if (visible) elapsed.value = 0;
		});
		watch(isCountingElapsed, (counting) => {
			if (counting) timer = setInterval(() => {
				elapsed.value++;
			}, 1e3);
			else if (timer) {
				clearInterval(timer);
				timer = null;
			}
		}, { immediate: true });
		onUnmounted(() => {
			if (timer) clearInterval(timer);
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [createVNode(Transition, { name: "status-bar" }, {
				default: withCtx(() => [isVisible.value && activity.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass([_ctx.$style.bar, { [_ctx.$style.muted]: unref(thread).isAwaitingConfirmation }]),
					"data-test-id": "instance-ai-status-bar"
				}, [
					unref(thread).isAwaitingConfirmation ? (openBlock(), createBlock(unref(N8nIcon_default), {
						key: 0,
						class: normalizeClass(_ctx.$style.glyph),
						icon: "circle-pause",
						size: "xsmall"
					}, null, 8, ["class"])) : (openBlock(), createElementBlock("span", {
						key: 1,
						class: normalizeClass(_ctx.$style.dot)
					}, null, 2)),
					createBaseVNode("span", { class: normalizeClass(_ctx.$style.label) }, toDisplayString(activity.value.label), 3),
					activity.value.detail ? (openBlock(), createElementBlock("span", {
						key: 2,
						class: normalizeClass(_ctx.$style.separator)
					}, "·", 2)) : createCommentVNode("", true),
					activity.value.detail ? (openBlock(), createElementBlock("span", {
						key: 3,
						class: normalizeClass(_ctx.$style.detail)
					}, toDisplayString(activity.value.detail), 3)) : createCommentVNode("", true),
					!unref(thread).isAwaitingConfirmation ? (openBlock(), createElementBlock(Fragment, { key: 4 }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.separator) }, "·", 2), createBaseVNode("span", { class: normalizeClass(_ctx.$style.elapsed) }, toDisplayString(formattedElapsed.value), 3)], 64)) : createCommentVNode("", true)
				], 2)) : createCommentVNode("", true)]),
				_: 1
			})]);
		};
	}
});
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiStatusBar.vue?vue&type=style&index=0&lang.module.scss
var bar = "_bar_1qugs_335";
var muted = "_muted_1qugs_345";
var label$1 = "_label_1qugs_348";
var glyph = "_glyph_1qugs_353";
var dot = "_dot_1qugs_358";
var opacityPulse = "_opacityPulse_1qugs_1";
var separator = "_separator_1qugs_380";
var detail = "_detail_1qugs_384";
var elapsed = "_elapsed_1qugs_388";
var shimmer = "_shimmer_1qugs_1";
var spin = "_spin_1qugs_1";
var popoverIn = "_popoverIn_1qugs_1";
var fadeIn = "_fadeIn_1qugs_1";
var collapsibleSlideDown = "_collapsibleSlideDown_1qugs_1";
var collapsibleSlideUp = "_collapsibleSlideUp_1qugs_1";
var pulseGlow = "_pulseGlow_1qugs_1";
var pulseGlowDelayed = "_pulseGlowDelayed_1qugs_1";
var fade = "_fade_1qugs_1";
var fadeInUp = "_fadeInUp_1qugs_1";
var fadeInDown = "_fadeInDown_1qugs_1";
var fadeInLeft = "_fadeInLeft_1qugs_1";
var fadeInRight = "_fadeInRight_1qugs_1";
var fadeOut = "_fadeOut_1qugs_1";
var fadeOutDown = "_fadeOutDown_1qugs_1";
var fadeOutUp = "_fadeOutUp_1qugs_1";
var fadeOutLeft = "_fadeOutLeft_1qugs_1";
var fadeOutRight = "_fadeOutRight_1qugs_1";
var blinkBackground = "_blinkBackground_1qugs_1";
var typingBlink = "_typingBlink_1qugs_1";
var InstanceAiStatusBar_vue_vue_type_style_index_0_lang_module_default = {
	bar,
	muted,
	label: label$1,
	glyph,
	dot,
	opacityPulse,
	separator,
	detail,
	elapsed,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_1qugs_1",
	popoverIn,
	fadeIn,
	collapsibleSlideDown,
	collapsibleSlideUp,
	pulseGlow,
	pulseGlowDelayed,
	fade,
	fadeInUp,
	fadeInDown,
	fadeInLeft,
	fadeInRight,
	fadeOut,
	fadeOutDown,
	fadeOutUp,
	fadeOutLeft,
	fadeOutRight,
	blinkBackground,
	typingBlink
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
var _hoisted_1$5 = { key: 0 };
var primaryAction = "allow_once";
var DomainAccessApproval_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "DomainAccessApproval",
	props: {
		requestId: {},
		severity: {},
		url: {},
		host: {},
		query: {}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const thread = useThread();
		const resolved = ref(false);
		const isWebSearch = computed(() => props.query !== void 0);
		const isDestructive = computed(() => props.severity === "destructive");
		const promptText = computed(() => isWebSearch.value ? i18n.baseText("instanceAi.webSearch.prompt") : i18n.baseText("instanceAi.domainAccess.prompt", { interpolate: { domain: props.host ?? "" } }));
		const previewText = computed(() => (isWebSearch.value ? props.query : props.url) ?? "");
		const persistentLabel = computed(() => isWebSearch.value ? i18n.baseText("instanceAi.webSearch.allowThread") : i18n.baseText("instanceAi.domainAccess.allowDomain", { interpolate: { domain: props.host ?? "" } }));
		const primaryLabel = computed(() => i18n.baseText("instanceAi.domainAccess.allowOnce"));
		const dropdownItems = computed(() => [{
			id: "allow_domain",
			label: persistentLabel.value
		}]);
		function handleAction(approved, domainAccessAction) {
			resolved.value = true;
			thread.resolveConfirmation(props.requestId, approved ? "approved" : "denied");
			thread.confirmAction(props.requestId, approved && domainAccessAction ? {
				kind: "domainAccessApprove",
				domainAccessAction
			} : { kind: "domainAccessDeny" });
		}
		function onPrimaryClick() {
			handleAction(true, primaryAction);
		}
		const DOMAIN_ACTIONS = [
			"allow_once",
			"allow_domain",
			"allow_all"
		];
		function isDomainAction(value) {
			return DOMAIN_ACTIONS.includes(value);
		}
		function onDropdownSelect(action) {
			if (isDomainAction(action)) handleAction(true, action);
		}
		return (_ctx, _cache) => {
			return !resolved.value ? (openBlock(), createElementBlock("div", _hoisted_1$5, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.body) }, [createVNode(unref(N8nText_default), {
				tag: "div",
				size: "medium",
				bold: ""
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(promptText.value), 1)]),
				_: 1
			}), createVNode(ConfirmationPreview_default, null, {
				default: withCtx(() => [createTextVNode(toDisplayString(previewText.value), 1)]),
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
		const INSTANCE_GATEWAY_RESOURCE_DECISIONS = [
			"denyOnce",
			"allowOnce",
			"allowForSession"
		];
		function isInstanceGatewayResourceDecision(value) {
			return INSTANCE_GATEWAY_RESOURCE_DECISIONS.includes(value);
		}
		const props = __props;
		const i18n = useI18n();
		const telemetry = useTelemetry();
		const rootStore = useRootStore();
		const thread = useThread();
		const DECISION_LABELS = {
			allowOnce: i18n.baseText("instanceAi.gatewayConfirmation.allowOnce"),
			allowForSession: i18n.baseText("instanceAi.gatewayConfirmation.allowForSession"),
			denyOnce: i18n.baseText("instanceAi.gatewayConfirmation.denyOnce")
		};
		function getDecisionLabel(decision) {
			return DECISION_LABELS[decision];
		}
		function optionEntry(decision) {
			return {
				decision,
				label: getDecisionLabel(decision)
			};
		}
		const denyPrimary = computed(() => props.options.includes("denyOnce") ? optionEntry("denyOnce") : void 0);
		const approvePrimary = computed(() => props.options.includes("allowOnce") ? optionEntry("allowOnce") : void 0);
		const approveDropdownItems = computed(() => {
			const items = [];
			if (props.options.includes("allowForSession")) items.push({
				id: "allowForSession",
				label: getDecisionLabel("allowForSession")
			});
			return items;
		});
		async function confirm(decision) {
			const inputThreadId = thread.findToolCallByRequestId(props.requestId)?.confirmation?.inputThreadId ?? "";
			const eventProps = {
				thread_id: thread.currentThreadId,
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
			await thread.confirmResourceDecision(props.requestId, decision);
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
				default: withCtx(() => [denyPrimary.value ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 0,
					variant: "outline",
					size: "medium",
					label: denyPrimary.value.label,
					"data-test-id": "gateway-decision-deny",
					onClick: _cache[0] || (_cache[0] = ($event) => confirm(denyPrimary.value.decision))
				}, null, 8, ["label"])) : createCommentVNode("", true), approvePrimary.value ? (openBlock(), createBlock(SplitButton_default, {
					key: 1,
					variant: "solid",
					label: approvePrimary.value.label,
					items: approveDropdownItems.value,
					"data-test-id": "gateway-decision-approve",
					"caret-aria-label": "More approve options",
					onClick: _cache[1] || (_cache[1] = ($event) => confirm(approvePrimary.value.decision)),
					onSelect: _cache[2] || (_cache[2] = (id) => isInstanceGatewayResourceDecision(id) && confirm(id))
				}, null, 8, ["label", "items"])) : createCommentVNode("", true)]),
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
		const thread = useThread();
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
			const inputThreadId = thread.findToolCallByRequestId(props.requestId)?.confirmation?.inputThreadId ?? "";
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
				thread_id: thread.currentThreadId,
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
			if (await thread.confirmAction(props.requestId, {
				kind: "credentialSelection",
				credentials
			})) thread.resolveConfirmation(props.requestId, "approved");
			else isSubmitted.value = false;
		}
		async function handleLater() {
			trackCredentialInput();
			isSubmitted.value = true;
			isDeferred.value = true;
			if (await thread.confirmAction(props.requestId, {
				kind: "approval",
				approved: false
			})) thread.resolveConfirmation(props.requestId, "deferred");
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
					"hide-ask-assistant": "",
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
var _hoisted_1$4 = [
	"data-option-index",
	"disabled",
	"onClick",
	"onMouseenter"
];
var _hoisted_2$1 = ["data-option-index"];
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
			if (isLastQuestion.value) return true;
			if (currentQuestion.value?.type === "single") return hasCustomText.value;
			return true;
		});
		const isNextEnabled = computed(() => {
			const q = currentQuestion.value;
			if (!q) return false;
			if (isLastQuestion.value) return true;
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
			} else if (type === "text" && isNextEnabled.value) goToNextInternal();
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
					], 42, _hoisted_1$4);
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
	wrapper: "_wrapper_1t9ys_125",
	intro: "_intro_1t9ys_131",
	container: "_container_1t9ys_139",
	question: "_question_1t9ys_146",
	questionText: "_questionText_1t9ys_150",
	options: "_options_1t9ys_154",
	optionRow: "_optionRow_1t9ys_160",
	highlighted: "_highlighted_1t9ys_173",
	activeSelected: "_activeSelected_1t9ys_180",
	numberBadge: "_numberBadge_1t9ys_183",
	optionLabel: "_optionLabel_1t9ys_187",
	arrowIndicator: "_arrowIndicator_1t9ys_190",
	checkboxRow: "_checkboxRow_1t9ys_227",
	somethingElseRow: "_somethingElseRow_1t9ys_240",
	somethingElseInput: "_somethingElseInput_1t9ys_253",
	somethingElseRowMulti: "_somethingElseRowMulti_1t9ys_265",
	pencilIconContainer: "_pencilIconContainer_1t9ys_279",
	pencilIcon: "_pencilIcon_1t9ys_279",
	pagination: "_pagination_1t9ys_295",
	paginationText: "_paginationText_1t9ys_301",
	navigation: "_navigation_1t9ys_306",
	textareaInput: "_textareaInput_1t9ys_312",
	"questionFade-enter-active": "_questionFade-enter-active_1t9ys_319",
	"questionFade-leave-active": "_questionFade-leave-active_1t9ys_320",
	"questionFade-enter-from": "_questionFade-enter-from_1t9ys_324",
	"questionFade-leave-to": "_questionFade-leave-to_1t9ys_325"
};
var InstanceAiQuestions_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiQuestions_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiQuestions_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/workflowSetup/workflowSetup.helpers.ts
/** Stable section identity used as the key everywhere section state is tracked. */
function buildSectionId(targetNodeName, credentialType) {
	return `${targetNodeName}:${credentialType ?? "parameters"}`;
}
/**
* Returns the root + sub-node sections in display order. Centralizes the
* optional-root handling so callers don't repeat the same spread.
*/
function getGroupSections(group) {
	return group.rootSection ? [group.rootSection, ...group.subnodeSections] : group.subnodeSections;
}
/** Returns every section a step represents (one for section steps, root+subnodes for group steps). */
function getStepSections(step) {
	return step.kind === "group" ? getGroupSections(step.group) : [step.section];
}
//#endregion
//#region src/features/ai/instanceAi/workflowSetup/composables/useWorkflowSetupTelemetry.ts
function useWorkflowSetupTelemetry(deps) {
	const telemetry = useTelemetry();
	const rootStore = useRootStore();
	const shownStepKeys = /* @__PURE__ */ new Set();
	const handledStepKeys = /* @__PURE__ */ new Set();
	function getSetupTelemetryContext() {
		const tc = deps.thread.findToolCallByRequestId(deps.requestId.value);
		return {
			thread_id: deps.thread.currentThreadId,
			input_thread_id: tc?.confirmation?.inputThreadId ?? "",
			instance_id: rootStore.instanceId,
			type: "setup"
		};
	}
	function getStepKey(step) {
		const inputKeys = getStepTelemetryInputs(step).map((input) => `${input.input_type}:${input.node_type}:${input.credential_type ?? input.parameter_name}`);
		return `${step.kind}:${deps.steps.value.indexOf(step)}:${inputKeys.join("|")}`;
	}
	function getTrackingStepKey(step) {
		return `${deps.requestId.value}:${getStepKey(step)}`;
	}
	function getStepOutcome(step) {
		const sections = getStepSections(step);
		if (sections.length === 0) return void 0;
		let completedCount = 0;
		let skippedCount = 0;
		for (const section of sections) if (deps.inputs.isSectionComplete(section)) completedCount++;
		else if (deps.inputs.isSectionSkipped(section)) skippedCount++;
		if (completedCount + skippedCount !== sections.length) return void 0;
		if (completedCount === sections.length) return "completed";
		if (skippedCount === sections.length) return "skipped";
		return "mixed";
	}
	function getStepTelemetryInputs(step) {
		const inputs = [];
		for (const section of getStepSections(step)) {
			if (section.credentialType) inputs.push({
				input_type: "credential",
				node_type: section.node.type,
				credential_type: section.credentialType
			});
			for (const parameterName of section.parameterNames) inputs.push({
				input_type: "parameter",
				node_type: section.node.type,
				parameter_name: parameterName
			});
		}
		return inputs;
	}
	function getStepTelemetryPayload(step, outcome) {
		return {
			...getSetupTelemetryContext(),
			request_id: deps.requestId.value,
			step_index: deps.steps.value.indexOf(step) + 1,
			step_count: deps.steps.value.length,
			step_kind: step.kind,
			setup_inputs: getStepTelemetryInputs(step),
			...outcome ? { outcome } : {}
		};
	}
	function trackStepShown(step) {
		const stepKey = getTrackingStepKey(step);
		if (shownStepKeys.has(stepKey)) return;
		shownStepKeys.add(stepKey);
		telemetry.track("Instance AI workflow setup step shown", getStepTelemetryPayload(step));
	}
	function trackStepHandled(step) {
		const stepKey = getTrackingStepKey(step);
		if (!shownStepKeys.has(stepKey) || handledStepKeys.has(stepKey)) return;
		const outcome = getStepOutcome(step);
		if (!outcome) return;
		handledStepKeys.add(stepKey);
		telemetry.track("Instance AI workflow setup step handled", getStepTelemetryPayload(step, outcome));
	}
	watch(() => {
		const step = deps.isReady.value ? deps.activeStep.value : void 0;
		if (!step) return void 0;
		return {
			step,
			key: getTrackingStepKey(step),
			index: deps.currentStepIndex.value,
			count: deps.steps.value.length,
			states: getStepSections(step).map((section) => ({
				isComplete: deps.inputs.isSectionComplete(section),
				isSkipped: deps.inputs.isSectionSkipped(section)
			}))
		};
	}, (snapshot) => {
		if (!snapshot) return;
		trackStepShown(snapshot.step);
		trackStepHandled(snapshot.step);
	}, { immediate: true });
	function trackSetupInput() {
		const provided = [];
		const skipped = [];
		const explicitlySkipped = [];
		for (const section of deps.sections.value) {
			const sectionInputs = getSectionTelemetryInputs(section);
			if (deps.inputs.isSectionComplete(section)) provided.push(...sectionInputs);
			else {
				const skippedInputs = sectionInputs.map(toSkippedInput);
				skipped.push(...skippedInputs);
				if (deps.inputs.isSectionSkipped(section)) explicitlySkipped.push(...skippedInputs);
			}
		}
		telemetry.track("User finished providing input", {
			...getSetupTelemetryContext(),
			provided_inputs: provided,
			skipped_inputs: skipped,
			explicitly_skipped_inputs: explicitlySkipped,
			num_tasks: deps.sections.value.length
		});
	}
	function getSectionTelemetryInputs(section) {
		const inputs = [];
		if (section.credentialType) inputs.push({
			label: getSetupInputLabel(section.node.type, section.credentialType),
			options: [],
			option_chosen: "true"
		});
		for (const parameterName of section.parameterNames) inputs.push({
			label: getSetupInputLabel(section.node.type, parameterName),
			options: [],
			option_chosen: "true"
		});
		return inputs;
	}
	function getSetupInputLabel(nodeType, inputName) {
		return `${nodeType} - ${inputName}`;
	}
	function toSkippedInput(input) {
		return {
			label: input.label,
			options: input.options
		};
	}
	return {
		trackSetupInput,
		trackStepHandled
	};
}
//#endregion
//#region src/features/ai/instanceAi/workflowSetup/composables/useWorkflowSetupActions.ts
function useWorkflowSetupActions(deps) {
	const isActionPending = ref(false);
	const workflowSetupTelemetry = useWorkflowSetupTelemetry({
		requestId: deps.requestId,
		sections: deps.sections,
		steps: deps.steps,
		activeStep: deps.activeStep,
		currentStepIndex: deps.currentStepIndex,
		isReady: deps.isReady,
		inputs: {
			isSectionComplete: deps.inputs.isSectionComplete,
			isSectionSkipped: deps.inputs.isSectionSkipped
		},
		thread: deps.thread
	});
	function isStepHandled(step) {
		const sections = getStepSections(step);
		if (sections.length === 0) return true;
		return sections.every((section) => deps.inputs.isSectionComplete(section) || deps.inputs.isSectionSkipped(section));
	}
	/**
	* Globally find the first unhandled step. Prefer indices after the current
	* step; fall back to indices before. Returns -1 if every step is handled.
	*/
	const nextUnhandledIndex = computed(() => {
		const steps = deps.steps.value;
		const current = deps.currentStepIndex.value;
		for (let i = current + 1; i < steps.length; i++) if (!isStepHandled(steps[i])) return i;
		for (let i = 0; i < Math.min(current, steps.length); i++) if (!isStepHandled(steps[i])) return i;
		return -1;
	});
	const hasOtherUnhandledSteps = computed(() => nextUnhandledIndex.value >= 0);
	const canAdvanceToNextIncomplete = computed(() => {
		const step = deps.activeStep.value;
		return step !== void 0 && isStepHandled(step) && nextUnhandledIndex.value >= 0;
	});
	function goToNextIncomplete() {
		if (canAdvanceToNextIncomplete.value) {
			const step = deps.activeStep.value;
			if (step) workflowSetupTelemetry.trackStepHandled(step);
			deps.goToStep(nextUnhandledIndex.value);
		}
	}
	async function apply() {
		const step = deps.activeStep.value;
		if (step) workflowSetupTelemetry.trackStepHandled(step);
		workflowSetupTelemetry.trackSetupInput();
		await deps.applyMachine.apply(deps.inputs.buildCompletedSetupPayload());
	}
	async function skipCurrentStep() {
		if (isActionPending.value) return;
		const step = deps.activeStep.value;
		if (!step) return;
		isActionPending.value = true;
		try {
			const stepSections = getStepSections(step);
			for (const section of stepSections) if (!deps.inputs.isSectionComplete(section)) deps.inputs.markSectionSkipped(section);
			workflowSetupTelemetry.trackStepHandled(step);
			const next = nextUnhandledIndex.value;
			if (next >= 0) {
				deps.goToStep(next);
				return;
			}
			workflowSetupTelemetry.trackSetupInput();
			const completedPayload = deps.inputs.buildCompletedSetupPayload();
			if (Object.keys(completedPayload.nodeCredentials ?? {}).length > 0 || Object.keys(completedPayload.nodeParameters ?? {}).length > 0) await deps.applyMachine.apply(completedPayload);
			else await deps.applyMachine.defer();
		} finally {
			isActionPending.value = false;
		}
	}
	return {
		nextUnhandledIndex,
		hasOtherUnhandledSteps,
		canAdvanceToNextIncomplete,
		isStepHandled,
		isActionPending,
		apply,
		skipCurrentStep,
		goToNextIncomplete
	};
}
//#endregion
//#region src/features/ai/instanceAi/workflowSetup/composables/useWorkflowSetupApply.ts
var APPLY_TIMEOUT_MS = 6e4;
var WAIT_CANCELLED = Symbol("wait-cancelled");
function useWorkflowSetupApply(deps) {
	const toast = useToast();
	const terminalState = ref(null);
	let cancelWait = null;
	onUnmounted(() => {
		cancelWait?.();
	});
	function isToolResult(val) {
		return typeof val === "object" && val !== null && !Array.isArray(val);
	}
	function waitForToolResult(requestId) {
		let stopWatch = null;
		let timeoutId = null;
		let resolveWait = null;
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
		function finish(result) {
			cleanup();
			resolveWait?.(result);
			resolveWait = null;
		}
		return {
			promise: new Promise((resolve) => {
				resolveWait = resolve;
				const existing = deps.thread.findToolCallByRequestId(requestId);
				if (existing?.result !== void 0) {
					finish(isToolResult(existing.result) ? existing.result : null);
					return;
				}
				stopWatch = watch(() => {
					return deps.thread.findToolCallByRequestId(requestId)?.result;
				}, (result) => {
					if (result !== void 0) finish(isToolResult(result) ? result : null);
				});
				timeoutId = setTimeout(() => {
					finish(null);
				}, APPLY_TIMEOUT_MS);
			}),
			cancel: () => finish(WAIT_CANCELLED)
		};
	}
	async function apply(payload) {
		if (terminalState.value === "applying") return;
		terminalState.value = "applying";
		if (!await deps.thread.confirmAction(deps.requestId.value, {
			kind: "setupWorkflowApply",
			...payload
		})) {
			terminalState.value = null;
			return;
		}
		cancelWait?.();
		const { promise, cancel } = waitForToolResult(deps.requestId.value);
		cancelWait = cancel;
		const result = await promise;
		cancelWait = null;
		if (result === WAIT_CANCELLED) {
			terminalState.value = null;
			return;
		}
		if (result === null) {
			toast.showError(/* @__PURE__ */ new Error("Apply timed out — please try again."), "Setup failed");
			terminalState.value = null;
			return;
		}
		if (result.success === true) {
			terminalState.value = result.partial === true ? "partial" : "applied";
			deps.thread.resolveConfirmation(deps.requestId.value, "approved");
			return;
		}
		const message = typeof result.error === "string" ? result.error : "Apply failed.";
		toast.showError(new Error(message), "Setup failed");
		terminalState.value = null;
	}
	async function defer() {
		if (terminalState.value === "applying") return;
		terminalState.value = "applying";
		if (await deps.thread.confirmAction(deps.requestId.value, {
			kind: "approval",
			approved: false
		})) {
			terminalState.value = "deferred";
			deps.thread.resolveConfirmation(deps.requestId.value, "deferred");
			return;
		}
		terminalState.value = null;
	}
	return {
		terminalState,
		apply,
		defer
	};
}
//#endregion
//#region src/features/ai/instanceAi/workflowSetup/composables/useWorkflowSetupBootstrap.ts
function useWorkflowSetupBootstrap(workflowId) {
	const credentialsStore = useCredentialsStore();
	const nodeTypesStore = useNodeTypesStore();
	const isReady = ref(false);
	async function bootstrap() {
		isReady.value = false;
		const wid = workflowId.value;
		if (!wid) throw new Error("useWorkflowSetupBootstrap: workflowId is required");
		try {
			await Promise.all([
				credentialsStore.fetchAllCredentialsForWorkflow({ workflowId: wid }),
				credentialsStore.fetchCredentialTypes(false),
				nodeTypesStore.loadNodeTypesIfNotLoaded()
			]);
		} catch (error) {
			console.warn("[InstanceAI] Workflow setup bootstrap partial failure", error);
		} finally {
			isReady.value = true;
		}
	}
	return {
		isReady,
		bootstrap
	};
}
//#endregion
//#region src/features/ai/instanceAi/workflowSetup/composables/useWorkflowSetupSections.ts
function useWorkflowSetupSections(setupRequests) {
	const nodeTypesStore = useNodeTypesStore();
	const sections = computed(() => {
		const result = [];
		const primaryByGroupKey = /* @__PURE__ */ new Map();
		for (const req of setupRequests.value) {
			const parameterNames = (req.editableParameters ?? []).map((parameter) => parameter.name);
			if (!req.credentialType && parameterNames.length === 0) continue;
			const credentialType = req.credentialType;
			const hasParams = parameterNames.length > 0;
			const groupKey = buildGroupKey(req, credentialType);
			const existingPrimary = groupKey ? primaryByGroupKey.get(groupKey) : void 0;
			if (existingPrimary && !hasParams) {
				existingPrimary.credentialTargetNodes.push({
					id: req.node.id,
					name: req.node.name,
					type: req.node.type
				});
				continue;
			}
			const node = {
				...req.node,
				parameters: resolveParameterDefaults(req.node)
			};
			const currentCredentialId = credentialType === void 0 ? null : req.node.credentials?.[credentialType]?.id ?? null;
			const section = {
				id: buildSectionId(req.node.name, credentialType),
				...credentialType ? { credentialType } : {},
				targetNodeName: req.node.name,
				node,
				currentCredentialId,
				parameterNames,
				credentialTargetNodes: [{
					id: req.node.id,
					name: req.node.name,
					type: req.node.type
				}]
			};
			result.push(section);
			if (groupKey && !existingPrimary) primaryByGroupKey.set(groupKey, section);
		}
		return result;
	});
	function resolveParameterDefaults(node) {
		const nodeType = nodeTypesStore.getNodeType(node.type, node.typeVersion);
		if (!nodeType) return node.parameters;
		return getNodeParameters(nodeType.properties, node.parameters, true, true, node, nodeType) ?? node.parameters;
	}
	return { sections };
}
/**
* Build a merge key for credential-only sections.
*
* When the request is a sub-node (has `subnodeRootNode`), the root node's name is
* prepended so credential sections never merge across different root nodes —
* sub-nodes of two different agents stay separate even when they share a
* credential type. Standalone nodes (no subnode root) keep the original
* credentialType+URL merging behaviour to preserve the existing UX
* optimisation of configuring a shared credential once.
*/
function buildGroupKey(req, credentialType) {
	if (!credentialType) return null;
	const baseKey = `${req.subnodeRootNode?.name ? `${req.subnodeRootNode.name}|` : ""}${credentialType}`;
	if (!isHttpRequestNodeType(req.node.type)) return baseKey;
	const url = req.node.parameters?.url;
	if (typeof url !== "string") return `${baseKey}|http|none`;
	if (isExpression(url)) return `${baseKey}|http|expr|${req.node.name}`;
	return `${baseKey}|http|${url}`;
}
//#endregion
//#region src/features/ai/instanceAi/workflowSetup/composables/useWorkflowSetupSteps.ts
/**
* Combines flat sections with subnode-root metadata from setup requests to
* produce a list of wizard steps. Sections that share a root node (an agent)
* are folded into a single `{ group }` step emitted at the position of the
* group's earliest section. Ungrouped sections pass through.
*/
function useWorkflowSetupSteps(deps) {
	return { steps: computed(() => {
		const sections = deps.sections.value;
		const requests = deps.setupRequests.value;
		if (sections.length === 0) return [];
		const rootBySubnodeName = /* @__PURE__ */ new Map();
		const rootMetaByName = /* @__PURE__ */ new Map();
		for (const req of requests) {
			if (!req.subnodeRootNode) continue;
			rootBySubnodeName.set(req.node.name, req.subnodeRootNode);
			if (!rootMetaByName.has(req.subnodeRootNode.name)) rootMetaByName.set(req.subnodeRootNode.name, req.subnodeRootNode);
		}
		const result = [];
		const groupByRootName = /* @__PURE__ */ new Map();
		for (const section of sections) {
			const subnodeRoot = rootBySubnodeName.get(section.targetNodeName);
			const selfAsRoot = rootMetaByName.get(section.targetNodeName);
			const root = subnodeRoot ?? selfAsRoot;
			if (!root) {
				result.push({
					kind: "section",
					section
				});
				continue;
			}
			let group = groupByRootName.get(root.name);
			if (!group) {
				group = {
					subnodeRootNode: root,
					subnodeSections: []
				};
				groupByRootName.set(root.name, group);
				result.push({
					kind: "group",
					group
				});
			}
			if (subnodeRoot) group.subnodeSections.push(section);
			else if (!group.rootSection) group.rootSection = section;
		}
		return result;
	}) };
}
//#endregion
//#region src/features/ai/instanceAi/workflowSetup/workflowSetupParameterIssues.ts
function getWorkflowSetupParameterIssues(node, nodeType, parameterNames) {
	if (!nodeType || parameterNames.length === 0) return {};
	const wanted = new Set(parameterNames);
	const allIssues = getNodeParametersIssues(nodeType.properties, node, nodeType)?.parameters ?? {};
	const parameterDefinitionsByName = groupParameterDefinitionsByName(nodeType.properties);
	const filtered = {};
	for (const name of wanted) {
		const parameterDefinitions = parameterDefinitionsByName.get(name);
		if (!parameterDefinitions || !parameterDefinitions.some((definition) => isParameterDefinitionVisible(node.parameters, definition, node, nodeType))) continue;
		const issues = [...allIssues[name] ?? []];
		const placeholderDetails = findPlaceholderDetails(node.parameters[name]);
		if (placeholderDetails.length > 0) issues.push(`Placeholder "${placeholderDetails[0].label}" - please provide the real value`);
		if (issues.length > 0) filtered[name] = issues;
	}
	return filtered;
}
function groupParameterDefinitionsByName(properties) {
	const result = /* @__PURE__ */ new Map();
	for (const prop of properties) {
		const existing = result.get(prop.name);
		if (existing) existing.push(prop);
		else result.set(prop.name, [prop]);
	}
	return result;
}
function isParameterDefinitionVisible(parameters, property, node, nodeType) {
	if (property.type === "hidden") return false;
	if (!property.displayOptions) return true;
	return displayParameter(parameters, property, node, nodeType);
}
//#endregion
//#region src/features/ai/instanceAi/workflowSetup/composables/useWorkflowSetupInputs.ts
function useWorkflowSetupInputs(deps) {
	const credentialsStore = useCredentialsStore();
	const nodeTypesStore = useNodeTypesStore();
	const { isCredentialTypeTestable, testCredentialInBackground } = useCredentialTestInBackground();
	const credentialSelections = ref({});
	const parameterValues = ref({});
	const skippedSectionIds = ref(/* @__PURE__ */ new Set());
	function testCredential(credId, credType) {
		const credential = credentialsStore.getCredentialById(credId);
		if (!credential) return;
		testCredentialInBackground(credId, credential.name, credType);
	}
	function setCredential(section, credId) {
		if (!section.credentialType) return;
		const targetNames = section.credentialTargetNodes.map((target) => target.name);
		const nextCredentialSelections = setCredentialSelectionForTargetNames(credentialSelections.value, targetNames, section.credentialType, credId);
		if (credId) {
			testCredential(credId, section.credentialType);
			clearSectionSkipped(section);
		}
		credentialSelections.value = nextCredentialSelections;
	}
	function setParameterValue$1(section, parameterName, value) {
		const next = deepCopy(getParameterValues(section));
		setParameterValue(next, parameterName, value);
		parameterValues.value = {
			...parameterValues.value,
			[section.targetNodeName]: next
		};
		clearSectionSkipped(section);
	}
	function isSectionSkipped(section) {
		return skippedSectionIds.value.has(section.id);
	}
	function markSectionSkipped(section) {
		skippedSectionIds.value.add(section.id);
	}
	function clearSectionSkipped(section) {
		skippedSectionIds.value.delete(section.id);
	}
	function getDisplayNode(section) {
		return {
			...section.node,
			parameters: getParameterValues(section)
		};
	}
	function getParameterValues(section) {
		return parameterValues.value[section.targetNodeName] ?? section.node.parameters;
	}
	function getSelectedCredentialId(section) {
		if (!section.credentialType) return void 0;
		return credentialSelections.value[section.targetNodeName]?.[section.credentialType];
	}
	const parameterIssuesBySectionId = computed(() => {
		const result = /* @__PURE__ */ new Map();
		for (const section of deps.sections.value) {
			if (section.parameterNames.length === 0) {
				result.set(section.id, {});
				continue;
			}
			const node = getDisplayNode(section);
			const nodeType = nodeTypesStore.getNodeType(node.type, node.typeVersion);
			result.set(section.id, getWorkflowSetupParameterIssues(node, nodeType, section.parameterNames));
		}
		return result;
	});
	function getParameterIssues(section) {
		return parameterIssuesBySectionId.value.get(section.id) ?? {};
	}
	function isCredentialComplete(section) {
		if (!section.credentialType) return true;
		const selectedCredentialId = getSelectedCredentialId(section);
		if (!selectedCredentialId) return false;
		if (!isCredentialTypeTestable(section.credentialType)) return true;
		return credentialsStore.isCredentialTestedOk(selectedCredentialId);
	}
	function areParametersComplete(section) {
		return Object.keys(getParameterIssues(section)).length === 0;
	}
	function isSectionComplete(section) {
		return isCredentialComplete(section) && areParametersComplete(section);
	}
	function isCredentialTestFailed(section) {
		if (!section.credentialType) return false;
		const selectedCredentialId = getSelectedCredentialId(section);
		if (!selectedCredentialId || !isCredentialTypeTestable(section.credentialType)) return false;
		return credentialsStore.credentialTestResults.get(selectedCredentialId) === "error";
	}
	function buildCompletedSetupPayload() {
		const includeCredential = (section) => !isSectionSkipped(section) && isCredentialComplete(section);
		const includeParams = (section) => !isSectionSkipped(section) && areParametersComplete(section);
		const nodeCredentials = buildNodeCredentials(includeCredential);
		const nodeParameters = buildNodeParameters(includeParams);
		return {
			...Object.keys(nodeCredentials).length > 0 ? { nodeCredentials } : {},
			...Object.keys(nodeParameters).length > 0 ? { nodeParameters } : {}
		};
	}
	function buildNodeCredentials(shouldInclude) {
		const out = {};
		for (const section of deps.sections.value) {
			if (!section.credentialType || !shouldInclude(section)) continue;
			for (const target of section.credentialTargetNodes) {
				const credId = credentialSelections.value[target.name]?.[section.credentialType];
				if (!credId) continue;
				const perType = out[target.name] ?? {};
				perType[section.credentialType] = credId;
				out[target.name] = perType;
			}
		}
		return out;
	}
	function buildNodeParameters(shouldInclude) {
		const out = {};
		for (const section of deps.sections.value) {
			if (section.parameterNames.length === 0 || !shouldInclude(section)) continue;
			const values = getParameterValues(section);
			const params = {};
			for (const name of section.parameterNames) if (values[name] !== void 0) params[name] = values[name];
			if (Object.keys(params).length > 0) out[section.targetNodeName] = params;
		}
		return out;
	}
	function seedCredentialSelectionsForNewSections(newSections) {
		let nextCredentialSelections = null;
		const credentialsToTest = [];
		for (const section of newSections) {
			if (!section.credentialType) continue;
			if (!section.currentCredentialId) continue;
			nextCredentialSelections = setCredentialSelectionForTargetNames(nextCredentialSelections ?? credentialSelections.value, section.credentialTargetNodes.map((target) => target.name), section.credentialType, section.currentCredentialId);
			credentialsToTest.push({
				id: section.currentCredentialId,
				type: section.credentialType
			});
		}
		if (nextCredentialSelections) credentialSelections.value = nextCredentialSelections;
		return credentialsToTest;
	}
	function pruneSkippedSectionsMissingFrom(sections) {
		if (skippedSectionIds.value.size === 0) return;
		const knownIds = new Set(sections.map((s) => s.id));
		for (const id of skippedSectionIds.value) if (!knownIds.has(id)) skippedSectionIds.value.delete(id);
	}
	watch(deps.sections, (sections, oldSections) => {
		const previousSectionIds = new Set(oldSections?.map((section) => section.id) ?? []);
		const credentialsToTest = seedCredentialSelectionsForNewSections(sections.filter((section) => !previousSectionIds.has(section.id)));
		for (const credential of credentialsToTest) testCredential(credential.id, credential.type);
		pruneSkippedSectionsMissingFrom(sections);
	}, { immediate: true });
	watch(() => deps.sections.value.filter((section) => skippedSectionIds.value.has(section.id) && isSectionComplete(section)).map((s) => s.id), (completedSkippedIds) => {
		for (const id of completedSkippedIds) skippedSectionIds.value.delete(id);
	});
	return {
		credentialSelections,
		skippedSectionIds,
		setCredential,
		setParameterValue: setParameterValue$1,
		getDisplayNode,
		isSectionComplete,
		isCredentialTestFailed,
		isSectionSkipped,
		markSectionSkipped,
		buildCompletedSetupPayload
	};
}
function setCredentialSelectionForTargetNames(currentCredentialSelections, targetNames, credentialType, credentialId) {
	const nextCredentialSelections = { ...currentCredentialSelections };
	for (const targetName of targetNames) {
		const nodeCredentialSelections = { ...nextCredentialSelections[targetName] ?? {} };
		if (credentialId) nodeCredentialSelections[credentialType] = credentialId;
		else delete nodeCredentialSelections[credentialType];
		nextCredentialSelections[targetName] = nodeCredentialSelections;
	}
	return nextCredentialSelections;
}
//#endregion
//#region src/features/ai/instanceAi/workflowSetup/composables/useWorkflowSetupContext.ts
var WorkflowSetupContextKey = Symbol("WorkflowSetupContext");
function provideWorkflowSetupContext(opts) {
	const thread = useThread();
	const { hydrateCredentialTestResults } = useCredentialTestInBackground();
	hydrateCredentialTestResults(opts.setupRequests.value.flatMap((req) => {
		const credType = req.credentialType;
		const credId = credType ? req.node.credentials?.[credType]?.id : void 0;
		const result = req.credentialTestResult;
		return credId && result ? [{
			id: credId,
			success: result.success
		}] : [];
	}));
	const { sections } = useWorkflowSetupSections(opts.setupRequests);
	const { steps } = useWorkflowSetupSteps({
		sections,
		setupRequests: opts.setupRequests
	});
	const bootstrap = useWorkflowSetupBootstrap(opts.workflowId);
	const applyMachine = useWorkflowSetupApply({
		requestId: opts.requestId,
		thread
	});
	const currentStepIndex = ref(0);
	const activeStep = computed(() => steps.value[currentStepIndex.value]);
	const inputsState = useWorkflowSetupInputs({ sections });
	const projectId = computed(() => opts.projectId.value);
	const credentialFlow = computed(() => opts.credentialFlow.value);
	function goToStep(index) {
		if (index >= 0 && index < steps.value.length) currentStepIndex.value = index;
	}
	function goToNext() {
		if (currentStepIndex.value < steps.value.length - 1) currentStepIndex.value++;
	}
	function goToPrev() {
		if (currentStepIndex.value > 0) currentStepIndex.value--;
	}
	const actions = useWorkflowSetupActions({
		requestId: opts.requestId,
		sections,
		steps,
		activeStep,
		currentStepIndex,
		isReady: bootstrap.isReady,
		goToStep,
		inputs: {
			credentialSelections: inputsState.credentialSelections,
			isSectionComplete: inputsState.isSectionComplete,
			isSectionSkipped: inputsState.isSectionSkipped,
			markSectionSkipped: inputsState.markSectionSkipped,
			buildCompletedSetupPayload: inputsState.buildCompletedSetupPayload
		},
		applyMachine: {
			apply: applyMachine.apply,
			defer: applyMachine.defer
		},
		thread
	});
	function isStepComplete(step) {
		const stepSections = getStepSections(step);
		if (stepSections.length === 0) return false;
		return stepSections.every(inputsState.isSectionComplete);
	}
	function isStepSkipped(step) {
		const stepSections = getStepSections(step);
		if (stepSections.length === 0) return false;
		return stepSections.every(inputsState.isSectionSkipped);
	}
	watch(() => steps.value.length, (len) => {
		if (currentStepIndex.value >= len) currentStepIndex.value = Math.max(0, len - 1);
	});
	onMounted(async () => {
		await bootstrap.bootstrap();
	});
	const context = {
		sections,
		steps,
		currentStepIndex,
		activeStep,
		hasOtherUnhandledSteps: actions.hasOtherUnhandledSteps,
		canAdvanceToNextIncomplete: actions.canAdvanceToNextIncomplete,
		credentialSelections: inputsState.credentialSelections,
		terminalState: applyMachine.terminalState,
		isReady: bootstrap.isReady,
		projectId,
		credentialFlow,
		isActionPending: actions.isActionPending,
		setCredential: inputsState.setCredential,
		setParameterValue: inputsState.setParameterValue,
		getDisplayNode: inputsState.getDisplayNode,
		isSectionComplete: inputsState.isSectionComplete,
		isCredentialTestFailed: inputsState.isCredentialTestFailed,
		isSectionSkipped: inputsState.isSectionSkipped,
		isStepComplete,
		isStepSkipped,
		isStepHandled: actions.isStepHandled,
		goToStep,
		goToNext,
		goToPrev,
		goToNextIncomplete: actions.goToNextIncomplete,
		apply: actions.apply,
		skipCurrentStep: actions.skipCurrentStep
	};
	provide(WorkflowSetupContextKey, context);
	return context;
}
function useWorkflowSetupContext() {
	const ctx = inject(WorkflowSetupContextKey);
	if (!ctx) throw new Error("useWorkflowSetupContext: called outside of a provideWorkflowSetupContext scope");
	return ctx;
}
//#endregion
//#region src/features/ai/instanceAi/workflowSetup/components/WorkflowSetupSectionBody.vue?vue&type=script&setup=true&lang.ts
var WorkflowSetupSectionBody_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowSetupSectionBody",
	props: { section: {} },
	setup(__props) {
		const props = __props;
		const ctx = useWorkflowSetupContext();
		const i18n = useI18n();
		const credentialsStore = useCredentialsStore();
		const nodeTypesStore = useNodeTypesStore();
		const environmentsStore = useEnvironmentsStore();
		const credentialType = computed(() => props.section.credentialType);
		const selectedCredentialId = computed(() => credentialType.value ? ctx.credentialSelections.value[props.section.targetNodeName]?.[credentialType.value] ?? null : null);
		const selectedCredentials = computed(() => {
			const type = credentialType.value;
			if (!type) return void 0;
			const cred = selectedCredentialId.value ? credentialsStore.getCredentialById(selectedCredentialId.value) : void 0;
			return cred ? { [type]: {
				id: cred.id,
				name: cred.name
			} } : {};
		});
		const targetNodeNames = computed(() => props.section.credentialTargetNodes.map((node) => node.name));
		const targetNodeNamesTooltip = computed(() => targetNodeNames.value.join(", "));
		const usedByNodesLabel = computed(() => i18n.baseText("instanceAi.workflowSetup.usedByNodes", {
			adjustToNumber: targetNodeNames.value.length,
			interpolate: { count: targetNodeNames.value.length }
		}));
		const nodeType = computed(() => nodeTypesStore.getNodeType(props.section.node.type, props.section.node.typeVersion));
		const parameterDefinitions = computed(() => {
			if (!nodeType.value || props.section.parameterNames.length === 0) return [];
			const names = new Set(props.section.parameterNames);
			return nodeType.value.properties.filter((property) => names.has(property.name));
		});
		const revealedIssues = ref(/* @__PURE__ */ new Set());
		watch(() => props.section.id, () => {
			revealedIssues.value = /* @__PURE__ */ new Set();
		});
		const hiddenIssuesInputs = computed(() => parameterDefinitions.value.filter((param) => !revealedIssues.value.has(param.name)).map((param) => param.name));
		function revealParameterIssues(parameterName) {
			revealedIssues.value.add(parameterName);
		}
		function getRootParameterName(parameterName) {
			return parameterName.split(/[.[\]]/)[0] ?? parameterName;
		}
		const displayNode = computed(() => {
			const node = ctx.getDisplayNode(props.section);
			if (!credentialType.value) return node;
			return {
				...node,
				credentials: selectedCredentials.value
			};
		});
		provide(ExpressionLocalResolveContextSymbol, computed(() => {
			const node = displayNode.value;
			const connections = {};
			const workflow = new Workflow({
				id: "instance-ai-workflow-setup",
				name: "Instance AI workflow setup",
				nodes: [node],
				connections,
				active: false,
				nodeTypes: nodeTypesStore.getAllNodeTypes()
			});
			return {
				localResolve: true,
				envVars: environmentsStore.variablesAsObject,
				workflow,
				execution: null,
				nodeName: node.name,
				additionalKeys: {},
				connections
			};
		}));
		function onCredentialSelected(update) {
			if (!credentialType.value) return;
			const data = update.properties.credentials?.[credentialType.value];
			ctx.setCredential(props.section, data?.id ?? null);
		}
		function onParameterValueChanged(update) {
			const parameterName = update.name.replace(/^parameters\./, "");
			ctx.setParameterValue(props.section, parameterName, update.value);
			revealParameterIssues(getRootParameterName(parameterName));
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.body) }, [credentialType.value ? (openBlock(), createBlock(NodeCredentials_default, {
				key: 0,
				node: displayNode.value,
				"override-cred-type": credentialType.value,
				"project-id": unref(ctx).projectId.value,
				standalone: "",
				"hide-issues": "",
				"hide-ask-assistant": "",
				onCredentialSelected
			}, createSlots({ _: 2 }, [__props.section.credentialTargetNodes.length > 1 ? {
				name: "label-postfix",
				fn: withCtx(() => [createVNode(unref(N8nTooltip_default), { placement: "top" }, {
					content: withCtx(() => [createTextVNode(toDisplayString(targetNodeNamesTooltip.value), 1)]),
					default: withCtx(() => [createVNode(unref(N8nText_default), {
						size: "small",
						color: "text-light",
						"data-test-id": "instance-ai-workflow-setup-card-nodes-hint"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(usedByNodesLabel.value), 1)]),
						_: 1
					})]),
					_: 1
				})]),
				key: "0"
			} : void 0]), 1032, [
				"node",
				"override-cred-type",
				"project-id"
			])) : createCommentVNode("", true), parameterDefinitions.value.length > 0 ? (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.parameters),
				"data-test-id": "instance-ai-workflow-setup-parameters"
			}, [createVNode(ParameterInputList_default, {
				parameters: parameterDefinitions.value,
				"node-values": { parameters: displayNode.value.parameters },
				node: displayNode.value,
				path: "parameters",
				"hide-delete": true,
				"hidden-issues-inputs": hiddenIssuesInputs.value,
				"remove-first-parameter-margin": true,
				"remove-last-parameter-margin": true,
				"options-overrides": {
					hideExpressionSelector: true,
					hideFocusPanelButton: true
				},
				onValueChanged: onParameterValueChanged,
				onParameterBlur: revealParameterIssues
			}, null, 8, [
				"parameters",
				"node-values",
				"node",
				"hidden-issues-inputs"
			])], 2)) : createCommentVNode("", true)], 2);
		};
	}
});
var WorkflowSetupSectionBody_vue_vue_type_style_index_0_lang_module_default = {
	body: "_body_7huvv_125",
	parameters: "_parameters_7huvv_134"
};
var WorkflowSetupSectionBody_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowSetupSectionBody_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowSetupSectionBody_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/workflowSetup/components/WorkflowSetupCard.vue?vue&type=script&setup=true&lang.ts
var WorkflowSetupCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowSetupCard",
	props: { section: {} },
	setup(__props) {
		const props = __props;
		const ctx = useWorkflowSetupContext();
		const i18n = useI18n();
		const credentialsStore = useCredentialsStore();
		const nodeTypesStore = useNodeTypesStore();
		const credentialType = computed(() => props.section.credentialType);
		const isComplete = computed(() => ctx.isSectionComplete(props.section));
		const isSkipped = computed(() => ctx.isSectionSkipped(props.section));
		const nodeType = computed(() => nodeTypesStore.getNodeType(props.section.node.type, props.section.node.typeVersion));
		const isCredentialOnlySection = computed(() => !!credentialType.value && props.section.parameterNames.length === 0);
		const displayName = computed(() => {
			const credentialTypeName = credentialType.value;
			if (!isCredentialOnlySection.value || !credentialTypeName) return props.section.node.name;
			const appName = getAppNameFromCredType(credentialsStore.getCredentialTypeByName(credentialTypeName)?.displayName ?? credentialTypeName);
			return i18n.baseText("instanceAi.credential.setupTitle", { interpolate: { name: appName } });
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.card),
				"data-test-id": "instance-ai-workflow-setup-card"
			}, [
				createBaseVNode("header", { class: normalizeClass(_ctx.$style.header) }, [
					isCredentialOnlySection.value ? (openBlock(), createBlock(CredentialIcon_default, {
						key: 0,
						"credential-type-name": credentialType.value ?? null,
						size: 16
					}, null, 8, ["credential-type-name"])) : (openBlock(), createBlock(NodeIcon_default, {
						key: 1,
						"node-type": nodeType.value,
						size: 16
					}, null, 8, ["node-type"])),
					createVNode(unref(N8nText_default), {
						class: normalizeClass(_ctx.$style.title),
						size: "medium",
						color: "text-dark",
						bold: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(displayName.value), 1)]),
						_: 1
					}, 8, ["class"]),
					isComplete.value ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 2,
						"data-test-id": "instance-ai-workflow-setup-card-check",
						class: normalizeClass(_ctx.$style.statusLabel),
						size: "medium",
						color: "success"
					}, {
						default: withCtx(() => [createVNode(unref(N8nIcon_default), {
							icon: "check",
							size: "large"
						}), createTextVNode(" " + toDisplayString(unref(i18n).baseText("generic.complete")), 1)]),
						_: 1
					}, 8, ["class"])) : isSkipped.value ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 3,
						"data-test-id": "instance-ai-workflow-setup-card-skipped",
						class: normalizeClass(_ctx.$style.statusLabel),
						size: "medium",
						color: "text-light"
					}, {
						default: withCtx(() => [createVNode(unref(N8nIcon_default), {
							icon: "arrow-right",
							size: "large"
						}), createTextVNode(" " + toDisplayString(unref(i18n).baseText("instanceAi.workflowSetup.cardSkipped")), 1)]),
						_: 1
					}, 8, ["class"])) : createCommentVNode("", true)
				], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.bodyWrapper) }, [createVNode(WorkflowSetupSectionBody_default, { section: __props.section }, null, 8, ["section"])], 2),
				renderSlot(_ctx.$slots, "footer")
			], 2);
		};
	}
});
var WorkflowSetupCard_vue_vue_type_style_index_0_lang_module_default = {
	card: "_card_1r4c7_125",
	header: "_header_1r4c7_135",
	title: "_title_1r4c7_142",
	statusLabel: "_statusLabel_1r4c7_146",
	bodyWrapper: "_bodyWrapper_1r4c7_153"
};
var WorkflowSetupCard_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowSetupCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowSetupCard_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/workflowSetup/composables/useWorkflowSetupGroupSections.ts
/**
* Manages per-section expansion state inside a `WorkflowSetupGroup`.
*
* Only sub-node sections are collapsible: the root section renders inline
* as the group card's primary body and is always visible.
*
* Sections that contain parameters stay open so the user isn't interrupted
* mid-typing — only credential-only sections auto-collapse on completion.
*/
function useWorkflowSetupGroupSections(group) {
	const ctx = useWorkflowSetupContext();
	const allSections = computed(() => getGroupSections(group.value));
	const expandedSections = reactive({});
	function initExpandState() {
		for (const section of group.value.subnodeSections) if (!(section.id in expandedSections)) expandedSections[section.id] = false;
		const firstIncomplete = group.value.subnodeSections.find((section) => !ctx.isSectionComplete(section));
		if (firstIncomplete) expandedSections[firstIncomplete.id] = true;
	}
	initExpandState();
	function toggleSection(sectionId) {
		expandedSections[sectionId] = !expandedSections[sectionId];
	}
	watch(() => allSections.value.map((section) => [section.id, ctx.isSectionComplete(section)]), (states, prevStates) => {
		const prev = new Map(prevStates ?? []);
		for (const [sectionId, isComplete] of states) {
			if (!isComplete || prev.get(sectionId)) continue;
			const section = allSections.value.find((s) => s.id === sectionId);
			if (!section || section.parameterNames.length > 0) continue;
			if (sectionId in expandedSections) expandedSections[sectionId] = false;
			const nextIncomplete = group.value.subnodeSections.find((s) => !ctx.isSectionComplete(s) && s.id !== sectionId);
			if (nextIncomplete) expandedSections[nextIncomplete.id] = true;
		}
	}, { immediate: true });
	return {
		expandedSections,
		toggleSection
	};
}
//#endregion
//#region src/features/ai/instanceAi/workflowSetup/components/WorkflowSetupGroupCard.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$3 = [
	"aria-expanded",
	"aria-controls",
	"onClick"
];
var _hoisted_2 = ["id"];
var WorkflowSetupGroupCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowSetupGroupCard",
	props: { group: {} },
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const ctx = useWorkflowSetupContext();
		const nodeTypesStore = useNodeTypesStore();
		const { expandedSections, toggleSection } = useWorkflowSetupGroupSections(toRef(props, "group"));
		const subnodeRootNodeType = computed(() => nodeTypesStore.getNodeType(props.group.subnodeRootNode.type, props.group.subnodeRootNode.typeVersion));
		const isGroupComplete = computed(() => getGroupSections(props.group).every(ctx.isSectionComplete));
		function getSectionNodeType(section) {
			return nodeTypesStore.getNodeType(section.node.type, section.node.typeVersion);
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.card),
				"data-test-id": "instance-ai-workflow-setup-group-card"
			}, [
				createBaseVNode("header", { class: normalizeClass(_ctx.$style.header) }, [
					createVNode(NodeIcon_default, {
						"node-type": subnodeRootNodeType.value,
						size: 16
					}, null, 8, ["node-type"]),
					createVNode(unref(N8nText_default), {
						class: normalizeClass(_ctx.$style.title),
						size: "medium",
						color: "text-dark",
						bold: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(__props.group.subnodeRootNode.name), 1)]),
						_: 1
					}, 8, ["class"]),
					isGroupComplete.value ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 0,
						"data-test-id": "instance-ai-workflow-setup-group-card-check",
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
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.sections) }, [__props.group.rootSection ? (openBlock(), createElementBlock("div", {
					key: __props.group.rootSection.id,
					class: normalizeClass([_ctx.$style.section, _ctx.$style.rootSection]),
					"data-test-id": "instance-ai-workflow-setup-section"
				}, [createVNode(WorkflowSetupSectionBody_default, { section: __props.group.rootSection }, null, 8, ["section"])], 2)) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList(__props.group.subnodeSections, (section) => {
					return openBlock(), createElementBlock("div", {
						key: section.id,
						class: normalizeClass(_ctx.$style.section),
						"data-test-id": "instance-ai-workflow-setup-section"
					}, [createBaseVNode("button", {
						type: "button",
						class: normalizeClass(_ctx.$style.sectionHeader),
						"aria-expanded": !!unref(expandedSections)[section.id],
						"aria-controls": `workflow-setup-section-body-${section.id}`,
						"data-test-id": "instance-ai-workflow-setup-section-header",
						onClick: ($event) => unref(toggleSection)(section.id)
					}, [
						unref(ctx).isSectionComplete(section) ? (openBlock(), createBlock(unref(N8nIcon_default), {
							key: 0,
							icon: "check",
							size: "small",
							class: normalizeClass(_ctx.$style.sectionCheck)
						}, null, 8, ["class"])) : (openBlock(), createBlock(NodeIcon_default, {
							key: 1,
							"node-type": getSectionNodeType(section),
							size: 14
						}, null, 8, ["node-type"])),
						createVNode(unref(N8nText_default), {
							class: normalizeClass(_ctx.$style.sectionTitle),
							size: "medium",
							color: "text-dark"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(section.node.name), 1)]),
							_: 2
						}, 1032, ["class"]),
						createVNode(unref(N8nIcon_default), {
							class: normalizeClass(_ctx.$style.sectionChevron),
							icon: unref(expandedSections)[section.id] ? "chevrons-down-up" : "chevrons-up-down",
							size: "large",
							color: "text-light"
						}, null, 8, ["class", "icon"])
					], 10, _hoisted_1$3), unref(expandedSections)[section.id] ? (openBlock(), createElementBlock("div", {
						key: 0,
						id: `workflow-setup-section-body-${section.id}`,
						class: normalizeClass(_ctx.$style.sectionContent),
						"data-test-id": "instance-ai-workflow-setup-section-body"
					}, [createVNode(WorkflowSetupSectionBody_default, { section }, null, 8, ["section"])], 10, _hoisted_2)) : createCommentVNode("", true)], 2);
				}), 128))], 2),
				renderSlot(_ctx.$slots, "footer")
			], 2);
		};
	}
});
var WorkflowSetupGroupCard_vue_vue_type_style_index_0_lang_module_default = {
	card: "_card_1e4qe_125",
	header: "_header_1e4qe_133",
	title: "_title_1e4qe_140",
	completeLabel: "_completeLabel_1e4qe_144",
	sections: "_sections_1e4qe_151",
	section: "_section_1e4qe_151",
	rootSection: "_rootSection_1e4qe_161",
	sectionHeader: "_sectionHeader_1e4qe_169",
	sectionChevron: "_sectionChevron_1e4qe_183",
	sectionTitle: "_sectionTitle_1e4qe_190",
	sectionCheck: "_sectionCheck_1e4qe_195",
	sectionContent: "_sectionContent_1e4qe_199"
};
var WorkflowSetupGroupCard_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowSetupGroupCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowSetupGroupCard_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/workflowSetup/components/WorkflowSetupWizardFooter.vue?vue&type=script&setup=true&lang.ts
var WorkflowSetupWizardFooter_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowSetupWizardFooter",
	setup(__props) {
		const ctx = useWorkflowSetupContext();
		const i18n = useI18n();
		const totalSteps = computed(() => ctx.steps.value.length);
		const showArrows = computed(() => totalSteps.value > 1);
		const isPrevDisabled = computed(() => ctx.currentStepIndex.value === 0);
		const isNextDisabled = computed(() => ctx.currentStepIndex.value >= totalSteps.value - 1);
		const isActiveStepHandled = computed(() => ctx.activeStep.value ? ctx.isStepHandled(ctx.activeStep.value) : false);
		const isPrimaryActionBlockedByCredentialTest = computed(() => {
			const step = ctx.activeStep.value;
			if (!step) return false;
			return getStepSections(step).some((section) => !ctx.isSectionSkipped(section) && ctx.isCredentialTestFailed(section));
		});
		const isPrimaryActionDisabled = computed(() => ctx.activeStep.value !== void 0 && !isActiveStepHandled.value);
		const isFinalize = computed(() => ctx.credentialFlow.value?.stage === "finalize");
		const showSkipButton = computed(() => ctx.activeStep.value !== void 0 && !isActiveStepHandled.value);
		const showContinueButton = computed(() => ctx.hasOtherUnhandledSteps.value);
		const skipLabel = computed(() => i18n.baseText(isFinalize.value ? "instanceAi.credential.finalize.later" : "instanceAi.workflowSetup.later"));
		const primaryActionLabel = computed(() => {
			if (showContinueButton.value) return i18n.baseText("instanceAi.credential.continueButton");
			return i18n.baseText(isFinalize.value ? "instanceAi.credential.finalize.applyCredentials" : "instanceAi.workflowSetup.apply");
		});
		const primaryActionTestId = computed(() => showContinueButton.value ? "instance-ai-workflow-setup-continue" : "instance-ai-workflow-setup-apply");
		function onPrimaryAction() {
			if (showContinueButton.value) {
				ctx.goToNextIncomplete();
				return;
			}
			ctx.apply();
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(ConfirmationFooter_default, {
				layout: "row-between",
				bordered: ""
			}, {
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.nav) }, [
					showArrows.value ? (openBlock(), createBlock(unref(N8nIconButton_default), {
						key: 0,
						variant: "ghost",
						size: "medium",
						icon: "chevron-left",
						disabled: isPrevDisabled.value,
						"data-test-id": "instance-ai-workflow-setup-prev",
						"aria-label": unref(i18n).baseText("instanceAi.workflowSetup.prevStep"),
						onClick: unref(ctx).goToPrev
					}, null, 8, [
						"disabled",
						"aria-label",
						"onClick"
					])) : createCommentVNode("", true),
					createVNode(unref(N8nText_default), {
						size: "small",
						color: "text-light"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.workflowSetup.stepCounter", { interpolate: {
							current: unref(ctx).currentStepIndex.value + 1,
							total: totalSteps.value
						} })), 1)]),
						_: 1
					}),
					showArrows.value ? (openBlock(), createBlock(unref(N8nIconButton_default), {
						key: 1,
						variant: "ghost",
						size: "medium",
						icon: "chevron-right",
						disabled: isNextDisabled.value,
						"data-test-id": "instance-ai-workflow-setup-next",
						"aria-label": unref(i18n).baseText("instanceAi.workflowSetup.nextStep"),
						onClick: unref(ctx).goToNext
					}, null, 8, [
						"disabled",
						"aria-label",
						"onClick"
					])) : createCommentVNode("", true)
				], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.actions) }, [showSkipButton.value ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 0,
					variant: "outline",
					size: "medium",
					label: skipLabel.value,
					disabled: unref(ctx).isActionPending.value,
					"data-test-id": "instance-ai-workflow-setup-later",
					onClick: unref(ctx).skipCurrentStep
				}, null, 8, [
					"label",
					"disabled",
					"onClick"
				])) : createCommentVNode("", true), createVNode(unref(N8nTooltip_default), {
					disabled: !isPrimaryActionBlockedByCredentialTest.value,
					content: unref(i18n).baseText("instanceAi.workflowSetup.credentialTestFailedTooltip")
				}, {
					default: withCtx(() => [createVNode(unref(N8nButton_default), {
						size: "medium",
						label: primaryActionLabel.value,
						disabled: isPrimaryActionDisabled.value,
						"data-test-id": primaryActionTestId.value,
						onClick: onPrimaryAction
					}, null, 8, [
						"label",
						"disabled",
						"data-test-id"
					])]),
					_: 1
				}, 8, ["disabled", "content"])], 2)]),
				_: 1
			});
		};
	}
});
var WorkflowSetupWizardFooter_vue_vue_type_style_index_0_lang_module_default = {
	nav: "_nav_1ng6f_125",
	actions: "_actions_1ng6f_132"
};
var WorkflowSetupWizardFooter_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowSetupWizardFooter_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowSetupWizardFooter_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/workflowSetup/components/WorkflowSetupWizard.vue
var WorkflowSetupWizard_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowSetupWizard",
	setup(__props) {
		const ctx = useWorkflowSetupContext();
		const activeGroup = computed(() => ctx.activeStep.value?.kind === "group" ? ctx.activeStep.value.group : void 0);
		const activeSection = computed(() => ctx.activeStep.value?.kind === "section" ? ctx.activeStep.value.section : void 0);
		const groupKey = computed(() => {
			return activeGroup.value ? `group:${activeGroup.value.subnodeRootNode.name}` : void 0;
		});
		const sectionKey = computed(() => activeSection.value?.id);
		return (_ctx, _cache) => {
			return activeGroup.value ? (openBlock(), createBlock(WorkflowSetupGroupCard_default, {
				key: groupKey.value,
				group: activeGroup.value
			}, {
				footer: withCtx(() => [createVNode(WorkflowSetupWizardFooter_default)]),
				_: 1
			}, 8, ["group"])) : activeSection.value ? (openBlock(), createBlock(WorkflowSetupCard_default, {
				key: sectionKey.value,
				section: activeSection.value
			}, {
				footer: withCtx(() => [createVNode(WorkflowSetupWizardFooter_default)]),
				_: 1
			}, 8, ["section"])) : createCommentVNode("", true);
		};
	}
});
//#endregion
//#region src/features/ai/instanceAi/workflowSetup/components/WorkflowSetupStatus.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$2 = ["data-test-id"];
var WorkflowSetupStatus_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowSetupStatus",
	props: { state: {} },
	setup(__props) {
		const props = __props;
		const STATUS_BY_STATE = {
			applying: {
				icon: "spinner",
				iconClass: "iconLoading",
				labelKey: "instanceAi.workflowSetup.applying",
				spin: true
			},
			applied: {
				icon: "check",
				iconClass: "iconSuccess",
				labelKey: "instanceAi.workflowSetup.applied"
			},
			partial: {
				icon: "triangle-alert",
				iconClass: "iconWarning",
				labelKey: "instanceAi.workflowSetup.partiallyApplied"
			},
			deferred: {
				icon: "arrow-right",
				iconClass: "iconMuted",
				labelKey: "instanceAi.workflowSetup.deferred"
			}
		};
		const statusView = computed(() => STATUS_BY_STATE[props.state]);
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.status),
				"data-test-id": `instance-ai-workflow-setup-status-${__props.state}`
			}, [createVNode(unref(N8nIcon_default), {
				icon: statusView.value.icon,
				size: "small",
				spin: !!statusView.value.spin,
				class: normalizeClass(_ctx.$style[statusView.value.iconClass])
			}, null, 8, [
				"icon",
				"spin",
				"class"
			]), createVNode(unref(N8nText_default), {
				size: "small",
				color: "text-light"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(statusView.value.labelKey)), 1)]),
				_: 1
			})], 10, _hoisted_1$2);
		};
	}
});
var WorkflowSetupStatus_vue_vue_type_style_index_0_lang_module_default = {
	status: "_status_1dhts_125",
	iconLoading: "_iconLoading_1dhts_136",
	iconSuccess: "_iconSuccess_1dhts_140",
	iconWarning: "_iconWarning_1dhts_144",
	iconMuted: "_iconMuted_1dhts_148"
};
var WorkflowSetupStatus_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowSetupStatus_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowSetupStatus_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/workflowSetup/InstanceAiWorkflowSetup.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = { "data-test-id": "instance-ai-workflow-setup" };
//#endregion
//#region src/features/ai/instanceAi/workflowSetup/InstanceAiWorkflowSetup.vue
var InstanceAiWorkflowSetup_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiWorkflowSetup",
	props: {
		requestId: {},
		setupRequests: {},
		projectId: {},
		workflowId: {},
		credentialFlow: {}
	},
	setup(__props) {
		const props = __props;
		const ctx = provideWorkflowSetupContext({
			requestId: toRef(props, "requestId"),
			setupRequests: toRef(props, "setupRequests"),
			projectId: toRef(props, "projectId"),
			workflowId: toRef(props, "workflowId"),
			credentialFlow: toRef(props, "credentialFlow")
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", _hoisted_1$1, [unref(ctx).isReady.value && unref(ctx).terminalState.value ? (openBlock(), createBlock(WorkflowSetupStatus_default, {
				key: 0,
				state: unref(ctx).terminalState.value
			}, null, 8, ["state"])) : unref(ctx).isReady.value && unref(ctx).steps.value.length ? (openBlock(), createBlock(WorkflowSetupWizard_default, { key: 1 })) : createCommentVNode("", true)]);
		};
	}
});
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiConfirmationPanel.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = { key: 2 };
/** Items that need the "Agent needs approval" wrapper (generic approvals, domain access, web search). */
var InstanceAiConfirmationPanel_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiConfirmationPanel",
	setup(__props) {
		const thread = useThread();
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
				thread_id: thread.currentThreadId,
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
			if (conf.webSearch) return true;
			if (!conf.credentialRequests?.length && !conf.setupRequests?.length && (!conf.inputType || conf.inputType === "approval") && !conf.questions) return true;
			return false;
		}
		/** Split confirmations into standalone items and approval-wrapped groups. */
		const chunks = computed(() => {
			const result = [];
			const wrappedByAgent = /* @__PURE__ */ new Map();
			for (const item of thread.pendingConfirmations) if (isApprovalWrapped(item)) {
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
			if (thread.resolvedConfirmationIds.has(conf.requestId)) return;
			trackInputCompleted(conf, [{
				label: conf.message,
				options: ["approve", "deny"],
				option_chosen: approved ? "approve" : "deny"
			}], []);
			thread.resolveConfirmation(conf.requestId, approved ? "approved" : "denied");
			thread.confirmAction(conf.requestId, {
				kind: "approval",
				approved
			});
		}
		function handleApproveAll(items) {
			for (const item of items) {
				const conf = item.toolCall.confirmation;
				if (thread.resolvedConfirmationIds.has(conf.requestId)) continue;
				trackInputCompleted(conf, [{
					label: conf.message,
					options: ["approve", "deny"],
					option_chosen: "approve"
				}], []);
				thread.resolveConfirmation(conf.requestId, "approved");
				thread.confirmAction(conf.requestId, {
					kind: "approval",
					approved: true
				});
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
			thread.resolveConfirmation(conf.requestId, "approved");
			thread.confirmAction(conf.requestId, {
				kind: "approval",
				approved: true,
				userInput: value
			});
		}
		function handleTextSkip(conf) {
			trackInputCompleted(conf, [], [{
				label: conf.message,
				question: conf.message,
				input_type: "text",
				options: []
			}]);
			thread.resolveConfirmation(conf.requestId, "deferred");
			thread.confirmAction(conf.requestId, {
				kind: "approval",
				approved: false
			});
		}
		function handleContinue(conf) {
			if (thread.resolvedConfirmationIds.has(conf.requestId)) return;
			trackInputCompleted(conf, [{
				label: conf.message,
				options: ["continue"],
				option_chosen: "continue"
			}], []);
			thread.resolveConfirmation(conf.requestId, "approved");
			thread.confirmAction(conf.requestId, {
				kind: "approval",
				approved: true
			});
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
			thread.resolveConfirmation(conf.requestId, "approved");
			thread.confirmAction(conf.requestId, {
				kind: "questions",
				answers
			});
		}
		function handlePlanApprove(conf, numTasks) {
			trackInputCompleted(conf, [{
				label: "plan",
				options: ["approve", "request-changes"],
				option_chosen: "approve"
			}], [], { num_tasks: numTasks });
			thread.resolveConfirmation(conf.requestId, "approved");
			thread.confirmAction(conf.requestId, {
				kind: "approval",
				approved: true
			});
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
			thread.resolveConfirmation(conf.requestId, "denied");
			thread.confirmAction(conf.requestId, {
				kind: "approval",
				approved: false,
				userInput: feedback
			});
		}
		/** True when every item in the group is a generic approval (not domain/web-search/cred/text). */
		function isAllGenericApproval(items) {
			return items.every((item) => !item.toolCall.confirmation.domainAccess && !item.toolCall.confirmation.webSearch);
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(TransitionGroup, { name: "confirmation-slide" }, {
				default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(chunks.value, (chunk) => {
					return openBlock(), createElementBlock(Fragment, { key: chunk.type === "approvalWrapped" ? "group-" + chunk.agentId : chunk.item.toolCall.confirmation.requestId }, [chunk.type === "standalone" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [chunk.item.toolCall.confirmation.setupRequests?.length ? (openBlock(), createBlock(InstanceAiWorkflowSetup_default, {
						key: "setup-" + chunk.item.toolCall.confirmation.requestId,
						class: normalizeClass(_ctx.$style.confirmation),
						"request-id": chunk.item.toolCall.confirmation.requestId,
						"setup-requests": chunk.item.toolCall.confirmation.setupRequests,
						"project-id": chunk.item.toolCall.confirmation.projectId,
						"credential-flow": chunk.item.toolCall.confirmation.credentialFlow,
						"workflow-id": chunk.item.toolCall.confirmation.workflowId
					}, null, 8, [
						"class",
						"request-id",
						"setup-requests",
						"project-id",
						"credential-flow",
						"workflow-id"
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
					}, 1032, ["class"])], 2)) : chunk.item.toolCall.confirmation.inputType === "continue" ? (openBlock(), createElementBlock("div", {
						key: "continue-" + chunk.item.toolCall.confirmation.requestId,
						class: normalizeClass(_ctx.$style.confirmation)
					}, [createVNode(unref(N8nCard_default), { class: normalizeClass(_ctx.$style.textCard) }, {
						default: withCtx(() => [createVNode(unref(N8nText_default), { tag: "div" }, {
							default: withCtx(() => [createTextVNode(toDisplayString(chunk.item.toolCall.confirmation.message), 1)]),
							_: 2
						}, 1024), createBaseVNode("div", { class: normalizeClass(_ctx.$style.continueRow) }, [createVNode(unref(N8nButton_default), {
							"data-test-id": "instance-ai-panel-continue",
							size: "medium",
							variant: "solid",
							onClick: ($event) => handleContinue(chunk.item.toolCall.confirmation)
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.confirmation.continue")), 1)]),
							_: 1
						}, 8, ["onClick"])], 2)]),
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
						])) : item.toolCall.confirmation.webSearch ? (openBlock(), createBlock(DomainAccessApproval_default, {
							key: 1,
							"request-id": item.toolCall.confirmation.requestId,
							query: item.toolCall.confirmation.webSearch.query,
							severity: item.toolCall.confirmation.severity
						}, null, 8, [
							"request-id",
							"query",
							"severity"
						])) : (openBlock(), createElementBlock("div", _hoisted_1, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.approvalRow) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.approvalRowBody) }, [createVNode(unref(N8nText_default), {
							size: "medium",
							bold: ""
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(getToolLabel)(item.toolCall.toolName, item.toolCall.args)), 1)]),
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
	confirmation: "_confirmation_m5158_125",
	root: "_root_m5158_130",
	items: "_items_m5158_136",
	item: "_item_m5158_136",
	approvalRow: "_approvalRow_m5158_145",
	approvalRowBody: "_approvalRowBody_m5158_152",
	textInputRow: "_textInputRow_m5158_159",
	continueRow: "_continueRow_m5158_166",
	generic: "_generic_m5158_172",
	textCard: "_textCard_m5158_180"
};
var InstanceAiConfirmationPanel_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiConfirmationPanel_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiConfirmationPanel_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiPreviewTabBar.vue?vue&type=script&setup=true&lang.ts
var InstanceAiPreviewTabBar_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiPreviewTabBar",
	props: {
		tabs: {},
		activeTabId: {}
	},
	emits: ["close"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const clipboard = useClipboard();
		const toast = useToast();
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
		function tabHref(tab) {
			if (tab.type === "workflow") return `/workflow/${tab.id}`;
			if (tab.type === "data-table") return tab.projectId ? `/projects/${tab.projectId}/datatables/${tab.id}` : "/home/datatables";
		}
		function handleOpenInEditor(tab) {
			const href = tabHref(tab);
			if (!href) return;
			window.open(href, "_blank", "noopener");
		}
		async function handleCopyLink(tab) {
			const href = tabHref(tab);
			if (!href) return;
			const url = new URL(href, window.location.origin).toString();
			await clipboard.copy(url);
			toast.showMessage({
				title: i18n.baseText("generic.copiedToClipboard"),
				type: "success"
			});
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.header) }, [createVNode(unref(N8nIconButton_default), {
				icon: "chevrons-right",
				variant: "ghost",
				size: "medium",
				"aria-label": unref(i18n).baseText("instanceAi.previewTabBar.collapse"),
				title: unref(i18n).baseText("instanceAi.previewTabBar.collapse"),
				"data-test-id": "instance-ai-preview-close",
				onClick: _cache[0] || (_cache[0] = ($event) => emit("close"))
			}, null, 8, ["aria-label", "title"]), createVNode(unref(TabsList_default), {
				"aria-label": unref(i18n).baseText("instanceAi.artifactsPanel.title"),
				class: normalizeClass(_ctx.$style.tabList)
			}, {
				default: withCtx(() => [createVNode(unref(TabsIndicator_default), { class: normalizeClass(_ctx.$style.tabsIndicator) }, {
					default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.tabsIndicatorBar) }, null, 2)]),
					_: 1
				}, 8, ["class"]), (openBlock(true), createElementBlock(Fragment, null, renderList(__props.tabs, (tab) => {
					return openBlock(), createBlock(unref(ContextMenuRoot_default), { key: tab.id }, {
						default: withCtx(() => [createVNode(unref(ContextMenuTrigger_default), { "as-child": "" }, {
							default: withCtx(() => [createVNode(unref(TabsTrigger_default), {
								value: tab.id,
								"data-tab-id": tab.id,
								class: normalizeClass(_ctx.$style.tab)
							}, {
								default: withCtx(() => [createVNode(unref(N8nIcon_default), {
									icon: tab.icon,
									size: "large"
								}, null, 8, ["icon"]), createBaseVNode("span", { class: normalizeClass(_ctx.$style.label) }, toDisplayString(tab.name), 3)]),
								_: 2
							}, 1032, [
								"value",
								"data-tab-id",
								"class"
							])]),
							_: 2
						}, 1024), createVNode(unref(ContextMenuPortal_default), null, {
							default: withCtx(() => [createVNode(unref(ContextMenuContent_default), { class: normalizeClass(_ctx.$style.contextMenu) }, {
								default: withCtx(() => [createVNode(unref(ContextMenuItem_default), {
									class: normalizeClass(_ctx.$style.contextMenuItem),
									onSelect: ($event) => handleOpenInEditor(tab)
								}, {
									default: withCtx(() => [createVNode(unref(N8nIcon_default), {
										icon: "external-link",
										size: "small"
									}), createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("instanceAi.previewTabBar.openInEditor")), 1)]),
									_: 1
								}, 8, ["class", "onSelect"]), createVNode(unref(ContextMenuItem_default), {
									class: normalizeClass(_ctx.$style.contextMenuItem),
									onSelect: ($event) => handleCopyLink(tab)
								}, {
									default: withCtx(() => [createVNode(unref(N8nIcon_default), {
										icon: "link",
										size: "small"
									}), createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("instanceAi.previewTabBar.copyLink")), 1)]),
									_: 1
								}, 8, ["class", "onSelect"])]),
								_: 2
							}, 1032, ["class"])]),
							_: 2
						}, 1024)]),
						_: 2
					}, 1024);
				}), 128))]),
				_: 1
			}, 8, ["aria-label", "class"])], 2);
		};
	}
});
var InstanceAiPreviewTabBar_vue_vue_type_style_index_0_lang_module_default = {
	header: "_header_9vpy8_149",
	tabList: "_tabList_9vpy8_158",
	scrollfade: "_scrollfade_9vpy8_1",
	tab: "_tab_9vpy8_158",
	label: "_label_9vpy8_196",
	tabsIndicator: "_tabsIndicator_9vpy8_204",
	tabsIndicatorBar: "_tabsIndicatorBar_9vpy8_215",
	contextMenu: "_contextMenu_9vpy8_222",
	contextMenuItem: "_contextMenuItem_9vpy8_232"
};
var InstanceAiPreviewTabBar_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiPreviewTabBar_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiPreviewTabBar_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiWorkflowPreview.vue?vue&type=script&setup=true&lang.ts
var InstanceAiWorkflowPreview_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiWorkflowPreview",
	props: {
		workflowId: {},
		refreshKey: { default: 0 }
	},
	emits: ["iframe-ready", "workflow-loaded"],
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
		function openWorkflowInEditor() {
			const workflowId = workflow.value?.id ?? props.workflowId;
			if (!workflowId) return;
			window.open(`/workflow/${workflowId}`, "_blank", "noopener");
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
				await nextTick();
				if (generation !== fetchGeneration) return;
				emit("workflow-loaded", id);
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
				createVNode(WorkflowPreview_default, {
					ref: "previewComponent",
					mode: "workflow",
					workflow: workflow.value ?? void 0,
					"can-open-ndv": true,
					"can-execute": true,
					"hide-controls": false,
					"suppress-notifications": true,
					"allow-error-notifications": false,
					"loader-type": "spinner"
				}, null, 8, ["workflow"]),
				workflow.value ? (openBlock(), createBlock(unref(N8nIconButton_default), {
					key: 1,
					icon: "external-link",
					variant: "subtle",
					size: "large",
					class: normalizeClass(_ctx.$style.openWorkflowButton),
					"aria-label": unref(i18n).baseText("instanceAi.previewTabBar.openWorkflowInEditor"),
					"data-test-id": "instance-ai-workflow-preview-open-editor",
					onClick: openWorkflowInEditor
				}, null, 8, ["class", "aria-label"])) : createCommentVNode("", true),
				isLoading.value && !workflow.value ? (openBlock(), createElementBlock("div", {
					key: 2,
					class: normalizeClass(_ctx.$style.centerState)
				}, [createVNode(unref(N8nIcon_default), {
					icon: "loader-circle",
					size: 80,
					spin: ""
				})], 2)) : createCommentVNode("", true)
			], 2);
		};
	}
});
var InstanceAiWorkflowPreview_vue_vue_type_style_index_0_lang_module_default = {
	content: "_content_j7uzm_125",
	centerState: "_centerState_j7uzm_132",
	openWorkflowButton: "_openWorkflowButton_j7uzm_141"
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
				}, [createVNode(unref(N8nIcon_default), {
					icon: "loader-circle",
					size: 80,
					spin: ""
				})], 2)) : createCommentVNode("", true)
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
//#region src/features/ai/instanceAi/InstanceAiThreadView.vue?vue&type=script&setup=true&lang.ts
var InstanceAiThreadView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiThreadView",
	props: { threadId: {} },
	setup(__props) {
		const props = __props;
		const store = useInstanceAiStore();
		const thread = provideThread(store);
		const { isLowCredits } = storeToRefs(store);
		const rootStore = useRootStore();
		const i18n = useI18n();
		const router = useRouter();
		const { goToUpgrade } = usePageRedirectionHelper();
		const creditBanner = useCreditWarningBanner(isLowCredits);
		const builderAgents = computed(() => collectActiveBuilderAgents(thread.messages));
		const displayedMessages = computed(() => thread.messages.filter(messageHasVisibleContent));
		const executionTracking = useExecutionPushEvents();
		const currentThreadTitle = computed(() => {
			const threadSummary = store.threads.find((t) => t.id === store.currentThreadId);
			if (threadSummary && threadSummary.title && threadSummary.title !== "New conversation") return threadSummary.title;
			const firstUserMsg = thread.messages.find((m) => m.role === "user");
			if (firstUserMsg?.content) {
				const text = firstUserMsg.content.trim();
				return text.length > 60 ? text.slice(0, 60) + "…" : text;
			}
		});
		const preview = useCanvasPreview({
			thread,
			threadId: () => props.threadId
		});
		provide("openWorkflowPreview", preview.openWorkflowPreview);
		provide("openDataTablePreview", preview.openDataTablePreview);
		const showArtifactsPanel = ref(true);
		const showDebugPanel = ref(false);
		const isDebugEnabled = computed(() => localStorage.getItem("instanceAi.debugMode") === "true");
		const { width: threadAreaWidth } = useElementSize(useTemplateRef("threadArea"));
		const previewPanelWidth = ref(0);
		const isResizingPreview = ref(false);
		const previewMaxWidth = computed(() => Math.round(threadAreaWidth.value / 2));
		watch(previewMaxWidth, (max) => {
			if (previewPanelWidth.value > max) previewPanelWidth.value = max;
		});
		function handlePreviewResize({ width }) {
			previewPanelWidth.value = width;
		}
		watch(preview.isPreviewVisible, (visible) => {
			if (visible) previewPanelWidth.value = Math.round(threadAreaWidth.value / 2);
		});
		watch(threadAreaWidth, (width) => {
			if (width > 0 && previewPanelWidth.value === 0 && preview.isPreviewVisible.value) previewPanelWidth.value = Math.round(width / 2);
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
		function reconnectThreadIfHydrationApplied(threadId) {
			thread.loadHistoricalMessages(threadId).then((hydrationStatus) => {
				if (hydrationStatus === "stale") return;
				thread.loadThreadStatus(threadId);
				thread.connectSSE(threadId);
			});
		}
		async function syncRouteToStore() {
			const requestedThreadId = props.threadId;
			if (requestedThreadId === store.currentThreadId) {
				if (thread.sseState === "disconnected") reconnectThreadIfHydrationApplied(requestedThreadId);
				return;
			}
			executionTracking.clearAll();
			if (store.threads.some((t) => t.id === requestedThreadId)) {
				store.switchThread(requestedThreadId);
				return;
			}
			if (!store.threads.length) await store.loadThreads();
			if (requestedThreadId !== props.threadId) return;
			if (!store.threads.some((t) => t.id === requestedThreadId)) {
				router.replace({ name: INSTANCE_AI_VIEW });
				return;
			}
			store.switchThread(requestedThreadId);
		}
		watch(() => props.threadId, () => void syncRouteToStore(), { immediate: true });
		onMounted(() => {
			nextTick(() => chatInputRef.value?.focus());
		});
		onUnmounted(() => {
			contentResizeObserver?.disconnect();
			resizeObserver?.disconnect();
			executionTracking.cleanup();
		});
		const workflowPreviewRef = useTemplateRef("workflowPreview");
		const eventRelay = useEventRelay({
			workflowExecutions: executionTracking.workflowExecutions,
			activeWorkflowId: preview.activeWorkflowId,
			getBufferedEvents: executionTracking.getBufferedEvents,
			clearEventLog: executionTracking.clearEventLog,
			relay: (event) => workflowPreviewRef.value?.relayPushEvent(event)
		});
		function handleSubmit(message, attachments) {
			userScrolledUp.value = false;
			thread.sendMessage(message, attachments, rootStore.pushRef);
		}
		function handleStop() {
			thread.cancelRun();
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				ref: "threadArea",
				class: normalizeClass(_ctx.$style.threadArea)
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.chatArea) }, [createVNode(InstanceAiViewHeader_default, null, {
				title: withCtx(() => [currentThreadTitle.value ? (openBlock(), createBlock(unref(N8nHeading_default), {
					key: 0,
					tag: "h2",
					size: "small",
					class: normalizeClass(_ctx.$style.headerTitle)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(currentThreadTitle.value), 1)]),
					_: 1
				}, 8, ["class"])) : createCommentVNode("", true), unref(thread).sseState === "reconnecting" ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 1,
					size: "small",
					color: "text-light",
					class: normalizeClass(_ctx.$style.reconnecting)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.view.reconnecting")), 1)]),
					_: 1
				}, 8, ["class"])) : createCommentVNode("", true)]),
				actions: withCtx(() => [isDebugEnabled.value ? (openBlock(), createBlock(unref(N8nIconButton_default), {
					key: 0,
					icon: "bug",
					variant: "ghost",
					size: "small",
					"icon-size": "large",
					class: normalizeClass({ [_ctx.$style.activeButton]: showDebugPanel.value }),
					onClick: _cache[0] || (_cache[0] = ($event) => {
						showDebugPanel.value = !showDebugPanel.value;
						unref(store).debugMode = showDebugPanel.value;
					})
				}, null, 8, ["class"])) : createCommentVNode("", true), !unref(preview).isPreviewVisible.value ? (openBlock(), createBlock(unref(N8nIconButton_default), {
					key: 1,
					icon: "panel-right",
					variant: "ghost",
					size: "small",
					"icon-size": "large",
					onClick: _cache[1] || (_cache[1] = ($event) => showArtifactsPanel.value = !showArtifactsPanel.value)
				})) : createCommentVNode("", true)]),
				_: 1
			}), createBaseVNode("div", { class: normalizeClass(_ctx.$style.contentArea) }, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.chatContent) }, [
					createVNode(unref(N8nScrollArea_default), { class: normalizeClass(_ctx.$style.scrollArea) }, {
						default: withCtx(() => [createBaseVNode("div", {
							ref: "scrollable",
							class: normalizeClass(_ctx.$style.messageList),
							style: normalizeStyle({ paddingBottom: `calc(${inputAreaHeight.value}px + var(--spacing--sm))` })
						}, [
							createVNode(TransitionGroup, { name: "message-slide" }, {
								default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(displayedMessages.value, (message) => {
									return openBlock(), createBlock(InstanceAiMessage_default, {
										key: message.id,
										message
									}, null, 8, ["message"]);
								}), 128))]),
								_: 1
							}),
							builderAgents.value.length ? (openBlock(), createElementBlock("div", {
								key: 0,
								class: normalizeClass(_ctx.$style.builderAgents)
							}, [(openBlock(true), createElementBlock(Fragment, null, renderList(builderAgents.value, (builder) => {
								return openBlock(), createBlock(AgentSection_default, {
									key: builder.agentId,
									"agent-node": builder
								}, null, 8, ["agent-node"]);
							}), 128))], 2)) : createCommentVNode("", true),
							createVNode(InstanceAiConfirmationPanel_default)
						], 6)]),
						_: 1
					}, 8, ["class"]),
					createBaseVNode("div", {
						class: normalizeClass(_ctx.$style.scrollButtonContainer),
						style: normalizeStyle({ bottom: `${inputAreaHeight.value + 8}px` })
					}, [createVNode(Transition, { name: "fade" }, {
						default: withCtx(() => [userScrolledUp.value && unref(thread).hasMessages ? (openBlock(), createBlock(unref(N8nIconButton_default), {
							key: 0,
							variant: "outline",
							icon: "arrow-down",
							class: normalizeClass(_ctx.$style.scrollToBottomButton),
							onClick: _cache[2] || (_cache[2] = ($event) => {
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
						unref(creditBanner).visible.value ? (openBlock(), createBlock(CreditWarningBanner_default, {
							key: 0,
							"credits-remaining": unref(store).creditsRemaining,
							"credits-quota": unref(store).creditsQuota,
							onUpgradeClick: _cache[3] || (_cache[3] = ($event) => unref(goToUpgrade)("instance-ai", "upgrade-instance-ai")),
							onDismiss: _cache[4] || (_cache[4] = ($event) => unref(creditBanner).dismiss())
						}, null, 8, ["credits-remaining", "credits-quota"])) : createCommentVNode("", true),
						createVNode(InstanceAiInput_default, {
							ref_key: "chatInputRef",
							ref: chatInputRef,
							"is-streaming": unref(thread).isStreaming,
							"is-sending-message": unref(thread).isSendingMessage,
							"is-awaiting-confirmation": unref(thread).isAwaitingConfirmation,
							"current-thread-id": unref(thread).currentThreadId,
							"amend-context": unref(thread).amendContext,
							"contextual-suggestion": unref(thread).contextualSuggestion,
							"research-mode": unref(store).researchMode,
							onSubmit: handleSubmit,
							onStop: handleStop,
							onToggleResearchMode: _cache[5] || (_cache[5] = ($event) => unref(store).toggleResearchMode())
						}, null, 8, [
							"is-streaming",
							"is-sending-message",
							"is-awaiting-confirmation",
							"current-thread-id",
							"amend-context",
							"contextual-suggestion",
							"research-mode"
						])
					], 2)], 2)
				], 2),
				showArtifactsPanel.value && !unref(preview).isPreviewVisible.value ? (openBlock(), createBlock(InstanceAiArtifactsPanel_default, { key: 0 })) : createCommentVNode("", true),
				showDebugPanel.value ? (openBlock(), createBlock(InstanceAiDebugPanel_default, {
					key: 1,
					onClose: _cache[6] || (_cache[6] = ($event) => {
						showDebugPanel.value = false;
						unref(store).debugMode = false;
					})
				})) : createCommentVNode("", true)
			], 2)], 2), withDirectives(createVNode(unref(N8nResizeWrapper_default), {
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
				onResizestart: _cache[9] || (_cache[9] = ($event) => isResizingPreview.value = true),
				onResizeend: _cache[10] || (_cache[10] = ($event) => isResizingPreview.value = false)
			}, {
				default: withCtx(() => [createVNode(unref(TabsRoot_default), {
					modelValue: unref(preview).activeTabId.value,
					"onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => unref(preview).activeTabId.value = $event),
					orientation: "horizontal",
					class: normalizeClass(_ctx.$style.previewPanel)
				}, {
					default: withCtx(() => [createVNode(InstanceAiPreviewTabBar_default, {
						tabs: unref(preview).allArtifactTabs.value,
						"active-tab-id": unref(preview).activeTabId.value,
						onClose: _cache[7] || (_cache[7] = ($event) => unref(preview).closePreview())
					}, null, 8, ["tabs", "active-tab-id"]), createBaseVNode("div", { class: normalizeClass(_ctx.$style.previewContent) }, [createVNode(InstanceAiWorkflowPreview_default, {
						ref: "workflowPreview",
						class: normalizeClass([_ctx.$style.previewSlot, { [_ctx.$style.previewSlotHidden]: !!unref(preview).activeDataTableId.value }]),
						"workflow-id": unref(preview).activeWorkflowId.value,
						"refresh-key": unref(preview).workflowRefreshKey.value,
						onIframeReady: unref(eventRelay).handleIframeReady,
						onWorkflowLoaded: unref(eventRelay).handleWorkflowLoaded
					}, null, 8, [
						"class",
						"workflow-id",
						"refresh-key",
						"onIframeReady",
						"onWorkflowLoaded"
					]), unref(preview).activeDataTableId.value ? (openBlock(), createBlock(InstanceAiDataTablePreview_default, {
						key: 0,
						class: normalizeClass(_ctx.$style.previewSlot),
						"data-table-id": unref(preview).activeDataTableId.value,
						"project-id": unref(preview).activeDataTableProjectId.value,
						"refresh-key": unref(preview).dataTableRefreshKey.value
					}, null, 8, [
						"class",
						"data-table-id",
						"project-id",
						"refresh-key"
					])) : createCommentVNode("", true)], 2)]),
					_: 1
				}, 8, ["modelValue", "class"])]),
				_: 1
			}, 8, [
				"class",
				"width",
				"style",
				"max-width"
			]), [[vShow, unref(preview).isPreviewVisible.value]])], 2);
		};
	}
});
var InstanceAiThreadView_vue_vue_type_style_index_0_lang_module_default = {
	threadArea: "_threadArea_1jsgn_125",
	chatArea: "_chatArea_1jsgn_132",
	canvasArea: "_canvasArea_1jsgn_142",
	headerTitle: "_headerTitle_1jsgn_168",
	activeButton: "_activeButton_1jsgn_176",
	reconnecting: "_reconnecting_1jsgn_180",
	contentArea: "_contentArea_1jsgn_184",
	chatContent: "_chatContent_1jsgn_191",
	scrollArea: "_scrollArea_1jsgn_199",
	messageList: "_messageList_1jsgn_204",
	builderAgents: "_builderAgents_1jsgn_213",
	scrollButtonContainer: "_scrollButtonContainer_1jsgn_220",
	scrollToBottomButton: "_scrollToBottomButton_1jsgn_230",
	inputContainer: "_inputContainer_1jsgn_241",
	inputConstraint: "_inputConstraint_1jsgn_255",
	previewPanel: "_previewPanel_1jsgn_260",
	previewContent: "_previewContent_1jsgn_266",
	previewSlot: "_previewSlot_1jsgn_272",
	previewSlotHidden: "_previewSlotHidden_1jsgn_277"
};
var InstanceAiThreadView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiThreadView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiThreadView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { InstanceAiThreadView_default as default };
