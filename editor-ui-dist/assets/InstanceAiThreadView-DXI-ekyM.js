import { o as __toESM } from "./chunk-CC9Q-vWm.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, Ht as toRefs, It as ref, Lt as shallowReactive, N as defineComponent, Nt as onScopeDispose, O as createSlots, Pt as reactive, Q as onUpdated, R as inject, S as computed, T as createCommentVNode, U as mergeProps, Vt as toRef, W as nextTick, X as onMounted, Z as onUnmounted, _ as Fragment, bn as normalizeStyle, bt as withCtx, c as useCssModule, gt as watch, h as withModifiers, it as renderSlot, j as createVNode, m as withKeys, n as Transition, p as vShow, pt as useTemplateRef, q as onBeforeUnmount, r as TransitionGroup, rt as renderList, tt as provide, vn as normalizeClass, w as createBlock, xt as withDirectives, zt as shallowRef } from "./vue.runtime.esm-bundler-CDDUUZhE.js";
import { i as i18n, s as useI18n } from "./src-DaQgCvnv.js";
import { Ca as CollapsibleRoot_default, F as N8nResizeWrapper_default, Ga as N8nHeading_default, Hi as MessageRating_default, Ia as useDirection, Ja as N8nButton_default, Ka as N8nCallout_default, Na as useForwardExpose, Ra as useResizeObserver, Rt as N8nActionDropdown_default, Sa as CollapsibleContent_default, Ta as Primitive, Ti as N8nBadge_default, Ua as createContext, Ui as Input_default, Vt as DropdownMenu_default, Wi as N8nIconButton_default, Ya as N8nIcon_default, _t as useRouter, f as Dialog_default, ga as RovingFocusGroup_default, ha as RovingFocusItem_default, jt as N8nCard_default, ka as useId, m as DialogHeader_default, p as DialogTitle_default, qa as N8nText_default, v as N8nScrollArea_default, xa as CollapsibleTrigger_default, yt as Checkbox_default, za as useVModel, zi as N8nTooltip_default } from "./src-BVC_ZvSs.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { _ as ContextMenuContent_default, g as ContextMenuItem_default, h as ContextMenuPortal_default, m as ContextMenuTrigger_default, v as ContextMenuRoot_default } from "./useWorkflowDocumentRenderData-BRPaLvIh.js";
import { f as useElementHover, k as useWindowSize, n as onClickOutside, p as useElementSize, x as useScroll } from "./core-DOUvgShw.js";
import { t as ParameterInputList_default, x as setParameterValue } from "./ParameterInputList-Cj4PHKOp.js";
import { t as useToast } from "./useToast-CKu-1MdO.js";
import { Ac as isExpression, Ai as INSTANCE_AI_BROWSER_USE_SETUP_MODAL_KEY, Ba as parseOutputDisplayBlocks, Ga as summarizeJsonValue, Ha as parseStepSummary, La as formatDebugJson, Nc as deepCopy, Ni as INSTANCE_AI_TOOLS_CONNECTION_MODAL_KEY, Ra as parseInputExtras, Ua as parseSystemPromptForDisplay, Va as parseOutputExtras, Wa as parseUsageSummary, Ws as displayParameter, Xs as getNodeParametersIssues, Ys as getNodeParameters, du as EditorEnabledFeaturesKey, fc as nodeIssuesToString, fu as ExpressionLocalResolveContextSymbol, gu as WorkflowIdKey, hu as WorkflowDocumentStoreKey, ji as INSTANCE_AI_COMPUTER_USE_SETUP_MODAL_KEY, za as parseMessageBlocks } from "./constants-DzzWpyjZ.js";
import { Bt as disposeNDVStore, Kn as getAppNameFromCredType, Kt as useWorkflowExecutionStateStore, Ut as useNDVStore, _ as useNodeTypesStore, bn as useProjectsStore, cn as createExecutionDataId, dn as useExecutionDataStore, i as disposeWorkflowDocumentStore, it as useCredentialsStore, kr as injectStrict, r as createWorkflowDocumentId, s as useWorkflowDocumentStore, sn as useWorkflowsStore } from "./workflowDocument.store-DjpEjMiV.js";
import { D as storeToRefs, T as defineStore, t as useRootStore } from "./useRootStore-C7jLo3fI.js";
import { t as useSettingsStore } from "./settings.store-DmallR-B.js";
import { f as useUIStore, p as useTelemetry } from "./users.store-CUxYM5yQ.js";
import { a as useWorkflowSaveStore } from "./builder.store-BA7yLzgo.js";
import { r as findPlaceholderDetails, t as isRecord$1 } from "./dist-BXENiK5V.js";
import { t as require_FileSaver_min } from "./FileSaver.min-Cwbwb3yH.js";
import { _ as useCanvasStore } from "./useNodeHelpers-Ui3MEJTN.js";
import { t as usePageRedirectionHelper } from "./usePageRedirectionHelper-BTEp5K4O.js";
import { t as useDataTableStore } from "./dataTable.store-BqsZtBuQ.js";
import { t as useClipboard } from "./useClipboard-BNvrkRGd.js";
import { n as useNodeCreatorStore, t as canvasEventBus } from "./canvas.eventBus-D2fgw04H.js";
import { n as isIconOrEmoji, t as ProjectIcon_default } from "./ProjectIcon-AzM_0dbf.js";
import { t as CredentialIcon_default } from "./CredentialIcon-CXGiwDnt.js";
import { t as InstanceAiEditorCapabilityKey } from "./useInstanceAiEditorCapability-DE0r470s.js";
import { t as NodeCredentials_default } from "./NodeCredentials-C9ZZLZO-.js";
import { t as NodeIcon_default } from "./NodeIcon-BOunG-4c.js";
import { t as usePushConnectionStore } from "./pushConnection.store-57SV0dOu.js";
import { r as FreeAiCreditsCallout_default } from "./NodeSettings-Ccb4Q0Sh.js";
import { r as INSTANCE_AI_VIEW } from "./constants-CdPER9c3.js";
import { t as useInstanceAiSettingsStore } from "./instanceAiSettings.store-C6ovhVH0.js";
import { a as getLatestBuildResult, c as getLatestDeletedDataTableId, d as isAgentEditingWorkflow, f as fetchRunDebug, h as fetchThreads, i as getExecutionResultsByWorkflow, l as getLatestWorkflowSetupResult, m as fetchThreadMessages, n as useInstanceAiStore, o as getLatestBuilderTarget, p as fetchThreadDebugRuns, r as useThread, s as getLatestDataTableResult, t as provideThread, u as getLatestWorkflowUpdateResult } from "./instanceAi.store-DR-kYWQr.js";
import { r as consumePendingFirstMessage, t as buildInstanceAiArtifactCredentialQuestion } from "./useInstanceAiHandoff-D-qPnOFC.js";
import { r as useCredentialTestInBackground, u as isHttpRequestNodeType } from "./CanvasRunWorkflowButton-BPA7amz0.js";
import { n as useInstanceAiMcpStore, t as iconForTool } from "./toolIcons-DhPU7av3.js";
import { t as CreditWarningBanner_default } from "./CreditWarningBanner-D21ILZBi.js";
import { t as useSidebarLayout } from "./useSidebarLayout-CVL9V-am.js";
import { n as LogsPanel_default } from "./useExecutionDebugging-DlBDKCJe.js";
import { t as useWorkflowInitialization } from "./useWorkflowInitialization-Br8onp7e.js";
import { t as ChatMarkdownChunk_default } from "./ChatMarkdownChunk-CoLbRru9.js";
import { t as MainHeader_default } from "./MainHeader-rCT_DmtY.js";
import { t as NodeView_default } from "./NodeView-CZ1Xc3JI.js";
import { a as useCreditWarningBanner, i as AttachmentPreview_default, n as InstanceAiViewHeader_default, r as InstanceAiInput_default, t as WorkflowBuilderUnavailableNotice_default } from "./WorkflowBuilderUnavailableNotice-Ddl4qY50.js";
import { n as useSidebarState } from "./instanceAiLayout-WvoTGG1u.js";
import { t as useInstanceAiMcpConnectionsExperiment } from "./instanceAiMcpConnections-B2zuU7HS.js";
import { t as DataTableTable_default } from "./DataTableTable-DIobdjmU.js";
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
//#region src/features/ai/instanceAi/confirmationKinds.ts
/**
* Decides whether a pending confirmation belongs in the floating slot (takes
* over the chat input) or the inline list (renders in the chat flow).
*
* Floating: single-click approvals + domain/web-search access.
* Inline: questions, plan-review, text, setup, credential, gateway
*   resource-decision, continue.
*
* Items are inline-by-presence: if `setupRequests` / `credentialRequests` /
* `credentialFlow` is set, the panel renders a setup or credential card
* regardless of `inputType`. Otherwise `inputType` drives the choice; an
* absent or `'approval'` `inputType` falls through to floating.
*/
function isPendingItemFloating(item) {
	const conf = item.toolCall.confirmation;
	if (conf.setupRequests?.length) return false;
	if (conf.credentialRequests?.length) return false;
	if (conf.credentialFlow) return false;
	switch (conf.inputType) {
		case "questions":
		case "plan-review":
		case "text":
		case "resource-decision":
		case "continue": return false;
		case "approval":
		case void 0: return true;
	}
}
//#endregion
//#region ../../@n8n/utils/src/scrub-secrets.ts
/**
* Replace common credential patterns in free-form text with `[REDACTED]`.
*
* Used before persisting or transmitting user-supplied text (telemetry
* excerpts, eval report HTML, free-form feedback) where keys/tokens
* accidentally pasted into prompts or command lines could otherwise leak
* downstream.
*
* Conservative by design: matches well-known prefixed tokens, explicit
* `key=value` pairs, and quoted JSON/JS-object fields with sensitive
* names. We don't attempt to redact arbitrary long opaque strings — false
* positives on file paths, IDs, or base64 payloads would make the output
* unreadable.
*/
var SECRET_KEYS = "password|passwd|secret|credentials?|api[_-]?key|authorization|access[_-]?token|refresh[_-]?token|id[_-]?token|session[_-]?token|auth[_-]?token";
var SECRET_VALUE_PATTERNS = [
	/-----BEGIN (?:RSA |EC |DSA |OPENSSH |PGP )?PRIVATE KEY-----[\s\S]*?-----END (?:RSA |EC |DSA |OPENSSH |PGP )?PRIVATE KEY-----/g,
	/\beyJ[A-Za-z0-9_-]+\.eyJ[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+/g,
	/\b(?:Bearer|Basic|Token)\s+[A-Za-z0-9._~+/=-]{12,}/gi,
	/\bsk-(?:ant-|proj-)?[A-Za-z0-9_-]{16,}/g,
	/\b(?:sk|rk|pk)_(?:live|test)_[A-Za-z0-9]{16,}/g,
	/\bAIza[0-9A-Za-z_-]{35}\b/g,
	/\bxox[abprso]-[A-Za-z0-9-]{10,}/g,
	/\bgh[psoru]_[A-Za-z0-9]{20,}/g,
	/\bgithub_pat_[A-Za-z0-9_]{22,}/g,
	/\bAKIA[0-9A-Z]{16}\b/g,
	/(?<=:\/\/)[^\s:/@]+:[^\s:/@]+(?=@)/g,
	new RegExp(`"(?:${SECRET_KEYS})"\\s*:\\s*"(?!\\[(?:redacted|REDACTED)\\]")(?:\\\\.|[^"\\r\\n])*"`, "gi"),
	new RegExp(`'(?:${SECRET_KEYS})'\\s*:\\s*'(?!\\[(?:redacted|REDACTED)\\]')(?:\\\\.|[^'\\r\\n])*'`, "gi"),
	new RegExp(`\\b(?:${SECRET_KEYS})\\s*[:=]\\s*\\S+`, "gi")
];
function scrubSecretsInText(input) {
	let out = input;
	for (const pattern of SECRET_VALUE_PATTERNS) out = out.replace(pattern, "[REDACTED]");
	return out;
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
	const executionResultsByWorkflow = computed(() => {
		const results = /* @__PURE__ */ new Map();
		for (const message of thread.messages) {
			if (!message.agentTree) continue;
			for (const [workflowId, result] of getExecutionResultsByWorkflow(message.agentTree)) results.set(workflowId, result);
		}
		return results;
	});
	const activeWorkflowExecutionResult = computed(() => {
		const workflowId = activeWorkflowId.value;
		return workflowId ? executionResultsByWorkflow.value.get(workflowId) : void 0;
	});
	const dataTableRefreshKey = ref(0);
	const isPreviewVisible = computed(() => activeTabId.value !== void 0);
	watch(computed(() => {
		for (const message of thread.messages) for (const attachment of message.attachments ?? []) if (attachment.type === "workflow") return attachment.id;
	}), (id) => {
		if (!id || activeTabId.value !== void 0) return;
		activeTabId.value = id;
	}, { immediate: true });
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
	const latestBuilderTarget = computed(() => {
		for (let i = thread.messages.length - 1; i >= 0; i--) {
			const msg = thread.messages[i];
			if (msg.agentTree) {
				const target = getLatestBuilderTarget(msg.agentTree);
				if (target) return target;
			}
		}
		return null;
	});
	watch(() => latestBuilderTarget.value?.agentId, (agentId) => {
		if (!agentId || !latestBuilderTarget.value) return;
		if (thread.isHydratingThread) return;
		activeTabId.value = latestBuilderTarget.value.workflowId;
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
	const latestUpdateResult = computed(() => {
		for (let i = thread.messages.length - 1; i >= 0; i--) {
			const msg = thread.messages[i];
			if (msg.agentTree) {
				const result = getLatestWorkflowUpdateResult(msg.agentTree);
				if (result) return result;
			}
		}
		return null;
	});
	watch(() => latestUpdateResult.value?.toolCallId, (toolCallId) => {
		if (!toolCallId || !latestUpdateResult.value) return;
		const targetId = latestUpdateResult.value.workflowId;
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
		activeWorkflowExecutionResult,
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
//#region src/features/ai/instanceAi/useTransitionGate.ts
function useTransitionGate(options = {}) {
	const isEnabled = ref(false);
	let renderToken = 0;
	function enableAfterStableRender() {
		const currentRenderToken = ++renderToken;
		nextTick(() => {
			nextTick(() => {
				if (currentRenderToken === renderToken && !(options.isBlocked?.() ?? false)) isEnabled.value = true;
			});
		});
	}
	function suppress() {
		renderToken += 1;
		isEnabled.value = false;
	}
	function suppressUntilStableRender() {
		isEnabled.value = false;
		enableAfterStableRender();
	}
	return {
		isEnabled,
		enableAfterStableRender,
		suppress,
		suppressUntilStableRender
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
var content$5 = "_content_ou4mh_341";
var collapsibleSlideDown$4 = "_collapsibleSlideDown_ou4mh_1";
var collapsibleSlideUp$4 = "_collapsibleSlideUp_ou4mh_1";
var shimmer$4 = "_shimmer_ou4mh_1";
var spin$4 = "_spin_ou4mh_1";
var opacityPulse$4 = "_opacityPulse_ou4mh_1";
var popoverIn$4 = "_popoverIn_ou4mh_1";
var fadeIn$4 = "_fadeIn_ou4mh_1";
var pulseGlow$4 = "_pulseGlow_ou4mh_1";
var pulseGlowDelayed$4 = "_pulseGlowDelayed_ou4mh_1";
var fade$4 = "_fade_ou4mh_1";
var fadeInUp$4 = "_fadeInUp_ou4mh_1";
var fadeInDown$4 = "_fadeInDown_ou4mh_1";
var fadeInLeft$4 = "_fadeInLeft_ou4mh_1";
var fadeInRight$4 = "_fadeInRight_ou4mh_1";
var fadeOut$4 = "_fadeOut_ou4mh_1";
var fadeOutDown$4 = "_fadeOutDown_ou4mh_1";
var fadeOutUp$4 = "_fadeOutUp_ou4mh_1";
var fadeOutLeft$4 = "_fadeOutLeft_ou4mh_1";
var fadeOutRight$4 = "_fadeOutRight_ou4mh_1";
var ping$4 = "_ping_ou4mh_1";
var blinkBackground$4 = "_blinkBackground_ou4mh_1";
var typingBlink$4 = "_typingBlink_ou4mh_1";
var AnimatedCollapsibleContent_vue_vue_type_style_index_0_lang_module_default = {
	content: content$5,
	collapsibleSlideDown: collapsibleSlideDown$4,
	collapsibleSlideUp: collapsibleSlideUp$4,
	shimmer: shimmer$4,
	spin: spin$4,
	"skeleton-pulse": "_skeleton-pulse_ou4mh_1",
	opacityPulse: opacityPulse$4,
	popoverIn: popoverIn$4,
	fadeIn: fadeIn$4,
	pulseGlow: pulseGlow$4,
	pulseGlowDelayed: pulseGlowDelayed$4,
	fade: fade$4,
	fadeInUp: fadeInUp$4,
	fadeInDown: fadeInDown$4,
	fadeInLeft: fadeInLeft$4,
	fadeInRight: fadeInRight$4,
	fadeOut: fadeOut$4,
	fadeOutDown: fadeOutDown$4,
	fadeOutUp: fadeOutUp$4,
	fadeOutLeft: fadeOutLeft$4,
	fadeOutRight: fadeOutRight$4,
	ping: ping$4,
	blinkBackground: blinkBackground$4,
	typingBlink: typingBlink$4
};
var AnimatedCollapsibleContent_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AnimatedCollapsibleContent_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AnimatedCollapsibleContent_vue_vue_type_style_index_0_lang_module_default }]]);
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
//#region src/features/ai/instanceAi/agentTimeline.utils.ts
/** Tool calls that are internal bookkeeping and should not be shown to the user. */
var HIDDEN_TOOLS = new Set(["updateWorkingMemory"]);
/** Render hints whose tool calls produce no output in the timeline — they are
*  represented elsewhere (child agent sections, artifact cards). */
var INVISIBLE_RENDER_HINTS = new Set([
	"builder",
	"data-table",
	"eval-setup"
]);
/**
* True when a timeline entry produces visible output in `AgentTimeline`.
*
* Mirrors the template's branch chain (same order): hidden tools and
* builder/data-table/eval-setup hints render nothing; plan-review
* confirmations render a panel; bare planner calls render nothing; pending
* question forms are suppressed until answered; hoisted active builder
* children are rendered elsewhere. Used to skip the timeline wrapper
* entirely when a segment has no visible entries (avoids empty divs and
* their phantom flex-gap spacing).
*/
function isVisibleTimelineEntry(entry, toolCallsById, childrenById) {
	if (entry.type === "text") return true;
	if (entry.type === "tool-call") {
		const tc = toolCallsById[entry.toolCallId];
		if (!tc || HIDDEN_TOOLS.has(tc.toolName)) return false;
		if (tc.renderHint && INVISIBLE_RENDER_HINTS.has(tc.renderHint)) return false;
		if (tc.confirmation?.inputType === "plan-review") return true;
		if (tc.renderHint === "planner") return false;
		if (tc.confirmation?.inputType === "questions") return !tc.isLoading;
		return true;
	}
	const child = childrenById[entry.agentId];
	return child !== void 0 && !isActiveBuilderAgent(child);
}
/**
* True while `entry` is the timeline entry still receiving stream deltas.
* The reducer only ever appends to an agent's LAST timeline entry, so any
* entry before the tail is settled — even while the agent itself is still
* active (e.g. text written before a tool call or an HITL pause). Used to
* scope the markdown decoration deferral to the one actively-growing block.
*/
function isStreamingTimelineEntry(agentNode, entry) {
	return agentNode.status === "active" && entry === agentNode.timeline.at(-1);
}
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
	"eval-setup"
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
		function appendArtifacts(group, artifacts) {
			for (const artifact of artifacts) if (!group.artifacts.some((existing) => existing.resourceId === artifact.resourceId)) group.artifacts.push(artifact);
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
			if (tc) appendArtifacts(currentGroup, extractArtifacts({
				...agentNode.value,
				targetResource: void 0,
				toolCalls: [tc],
				children: [],
				timeline: []
			}));
		} else if (entry.type === "child") {
			if (!currentGroup || currentGroup.responseId !== entry.responseId) {
				currentGroup = newGroup(entry.responseId);
				segments.push(currentGroup);
			}
			currentGroup.entries.push(entry);
			currentGroup.childCount++;
			const child = agentNode.value.children.find((c) => c.agentId === entry.agentId);
			if (child) appendArtifacts(currentGroup, extractArtifacts(child));
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
			return seg.toolCallCount > 0 || seg.childCount > 0 || seg.artifacts.length > 0;
		});
		if (!flattened.some((s) => s.kind === "response-group")) return null;
		return flattened;
	});
}
//#endregion
//#region src/features/ai/instanceAi/toolLabels.ts
var NO_TOGGLE_TOOLS = new Set(["updateWorkingMemory", "task-control"]);
var N8N_SKILL_DIR_TEMPLATE = "${N8N_SKILL_DIR}";
var SKILL_FILE_GROUP_LABELS = {
	references: {
		verbKey: "instanceAi.tools.load_skill.reference",
		kindKey: "instanceAi.tools.load_skill.referenceFallback",
		appendKind: false
	},
	scripts: {
		verbKey: "instanceAi.tools.load_skill.script",
		kindKey: "instanceAi.tools.load_skill.scriptFallback",
		appendKind: true
	},
	templates: {
		verbKey: "instanceAi.tools.load_skill.template",
		kindKey: "instanceAi.tools.load_skill.templateFallback",
		appendKind: true
	},
	examples: {
		verbKey: "instanceAi.tools.load_skill.example",
		kindKey: "instanceAi.tools.load_skill.exampleFallback",
		appendKind: true
	},
	assets: {
		verbKey: "instanceAi.tools.load_skill.asset",
		kindKey: "instanceAi.tools.load_skill.assetFallback",
		appendKind: true
	}
};
function getBasename(path) {
	const cleanPath = path.split(/[?#]/, 1)[0] ?? path;
	return cleanPath.split("/").filter(Boolean).at(-1) ?? cleanPath;
}
function humanizeFileLabel(path) {
	return getBasename(path).replace(/\.[^.]+$/, "").replace(/([a-z0-9])([A-Z])/g, "$1 $2").replace(/[-_]+/g, " ").replace(/\s+/g, " ").trim().toLowerCase();
}
function appendKind(label, kind) {
	if (!label) return kind;
	return label.split(" ").at(-1) === kind ? label : `${label} ${kind}`;
}
function isSkillFileGroup(value) {
	return value !== void 0 && Object.prototype.hasOwnProperty.call(SKILL_FILE_GROUP_LABELS, value);
}
function getSkillFileLabel(i18n, filePath) {
	const [group] = filePath.split("/");
	const fileLabel = humanizeFileLabel(filePath);
	if (isSkillFileGroup(group)) {
		const labels = SKILL_FILE_GROUP_LABELS[group];
		const kind = i18n.baseText(labels.kindKey);
		const target = labels.appendKind ? appendKind(fileLabel, kind) : fileLabel || kind;
		return `${i18n.baseText(labels.verbKey)} ${target}`;
	}
	if (fileLabel) return `${i18n.baseText("instanceAi.tools.load_skill.file")} ${fileLabel}`;
}
function extractSkillScriptPath(command) {
	const envSkillDirMatch = command.match(/\$(?:\{N8N_SKILL_DIR\}|N8N_SKILL_DIR)\/scripts\/([^\s"'`;|&]+)/);
	if (envSkillDirMatch?.[1]) return envSkillDirMatch[1];
	return command.match(/\/skills\/[^/\s"'`;|&]+\/scripts\/([^\s"'`;|&]+)/)?.[1];
}
function getToolIcon(toolName) {
	if (toolName === "complete-checkpoint") return "circle-check";
	if (toolName === "delegate" || toolName.endsWith("-with-agent")) return "share";
	if (toolName === "list_skills" || toolName === "load_skill") return "book-open";
	if (toolName === "data-tables") return "table";
	if (toolName === "workflows" || toolName === "executions" || toolName === "nodes" || toolName === "templates") return "workflow";
	if (toolName === "research") return "search";
	if (toolName === "credentials") return "key-round";
	if (toolName === "task-control" || toolName === "updateWorkingMemory") return "brain";
	if (toolName === "filesystem") return "file-text";
	if (toolName === "workspace" || toolName.startsWith("workspace_")) return "folder";
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
		if (toolName === "load_skill") {
			const name = typeof args?.name === "string" ? args.name : void 0;
			const filePath = typeof args?.filePath === "string" ? args.filePath : void 0;
			if (filePath) {
				const skillFileLabel = getSkillFileLabel(i18n, filePath);
				if (skillFileLabel) return skillFileLabel;
			}
			const label = i18n.baseText("instanceAi.tools.load_skill");
			if (name) return `${label}: ${name}`;
			return label;
		}
		if (toolName === "workspace_execute_command" && typeof args?.command === "string" && (args.command.includes(N8N_SKILL_DIR_TEMPLATE) || args.command.includes("$N8N_SKILL_DIR") || args.command.includes("/skills/"))) {
			const scriptPath = extractSkillScriptPath(args.command);
			if (scriptPath) {
				const scriptLabel = appendKind(humanizeFileLabel(scriptPath), i18n.baseText("instanceAi.tools.load_skill.scriptFallback"));
				return `${i18n.baseText("instanceAi.tools.workspace_execute_command.skillScript")} ${scriptLabel}`;
			}
			return i18n.baseText("instanceAi.tools.workspace_execute_command.skill");
		}
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
var DataSection_vue_vue_type_style_index_0_lang_module_default = { dataSection: "_dataSection_1qygs_125" };
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
	props: {
		content: {},
		streaming: { type: Boolean }
	},
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
		const rawContent = computed(() => props.content.replace(INTERNAL_BLOCK_PATTERN, "").trim());
		function escapeMarkdownLinkText(value) {
			return value.replace(/\\/g, "\\\\").replace(/\[/g, "\\[").replace(/\]/g, "\\]");
		}
		function isEscaped(content, index) {
			let backslashCount = 0;
			for (let i = index - 1; i >= 0 && content[i] === "\\"; i--) backslashCount++;
			return backslashCount % 2 === 1;
		}
		function findCodeSpanEnd(content, start) {
			let tickCount = 0;
			while (content[start + tickCount] === "`") tickCount++;
			const fence = "`".repeat(tickCount);
			const end = content.indexOf(fence, start + tickCount);
			return end === -1 ? void 0 : end + tickCount;
		}
		function findMarkdownLinkEnd(content, start) {
			let bracketDepth = 1;
			let closeBracketIndex;
			for (let i = start + 1; i < content.length; i++) {
				if (isEscaped(content, i)) continue;
				if (content[i] === "[") bracketDepth++;
				else if (content[i] === "]") {
					bracketDepth--;
					if (bracketDepth === 0) {
						closeBracketIndex = i;
						break;
					}
				}
			}
			if (closeBracketIndex === void 0 || content[closeBracketIndex + 1] !== "(") return void 0;
			let parenDepth = 1;
			for (let i = closeBracketIndex + 2; i < content.length; i++) {
				if (isEscaped(content, i)) continue;
				if (content[i] === "(") parenDepth++;
				else if (content[i] === ")") {
					parenDepth--;
					if (parenDepth === 0) return i + 1;
				}
			}
		}
		function replaceUnprotectedMarkdownText(content, replaceSegment) {
			let result = "";
			let segmentStart = 0;
			let index = 0;
			while (index < content.length) {
				const char = content[index];
				const protectedEnd = char === "`" ? findCodeSpanEnd(content, index) : char === "[" && !isEscaped(content, index) ? findMarkdownLinkEnd(content, index) : void 0;
				if (protectedEnd !== void 0) {
					result += replaceSegment(content.slice(segmentStart, index));
					result += content.slice(index, protectedEnd);
					segmentStart = protectedEnd;
					index = protectedEnd;
					continue;
				}
				index++;
			}
			return result + replaceSegment(content.slice(segmentStart));
		}
		function decorateResourceNames(content) {
			const registry = thread.resourceNameIndex;
			if (registry.size === 0) return content;
			const entries = [...registry.values()].filter((entry) => entry.name.length >= 3).sort((a, b) => b.name.length - a.name.length);
			let result = content;
			for (const entry of entries) result = replaceUnprotectedMarkdownText(result, (segment) => {
				const escaped = entry.name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
				const startBoundary = /\w/.test(entry.name[0]) ? "\\b" : "(?<=^|[\\s,;:!?])";
				const endBoundary = /\w/.test(entry.name[entry.name.length - 1]) ? "\\b" : "(?=$|[\\s,;:!?.])";
				const pattern = new RegExp(`(?<!\\/)${startBoundary}(${escaped})${endBoundary}(?!://)`, "g");
				return segment.replace(pattern, (_match, name) => {
					const url = `n8n-resource://${entry.type}/${encodeURIComponent(entry.id)}`;
					return `[${escapeMarkdownLinkText(name)}](${url})`;
				});
			});
			return result;
		}
		const source = computed(() => ({
			type: "text",
			content: props.streaming ? rawContent.value : decorateResourceNames(rawContent.value)
		}));
		/** Route patterns that map internal n8n URLs to resource types. */
		const INTERNAL_ROUTE_PATTERNS = [
			{
				pattern: /^\/workflow\/([a-zA-Z0-9]+)/,
				type: "workflow"
			},
			{
				pattern: /^\/(?:home\/)?credentials(?:\/|$)/,
				type: "credential"
			},
			{
				pattern: /^\/(?:home\/)?data-?tables(?:\/|$)/,
				type: "data-table"
			},
			{
				pattern: /^\/projects\/[^/]+\/credentials(?:\/|$)/,
				type: "credential"
			},
			{
				pattern: /^\/projects\/[^/]+\/datatables(?:\/|$)/,
				type: "data-table"
			}
		];
		const ABSOLUTE_URL_PATTERN = /^[a-z][a-z\d+.-]*:/i;
		function getSameOriginPathname(href) {
			const isRootRelative = href.startsWith("/") && !href.startsWith("//");
			const isAbsolute = ABSOLUTE_URL_PATTERN.test(href);
			if (!isRootRelative && !isAbsolute) return void 0;
			try {
				const url = new URL(href, window.location.origin);
				return url.origin === window.location.origin ? url.pathname : void 0;
			} catch {
				return;
			}
		}
		function decodeResourceId(value) {
			try {
				return decodeURIComponent(value);
			} catch {
				return value;
			}
		}
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
		/**
		* Post-process the rendered DOM to transform resource links into
		* styled resource chips with icons. Handles both:
		* - `n8n-resource://` custom scheme links (from pre-processing)
		* - Standard links pointing to internal n8n routes (generated by the AI)
		*
		* Pure DOM decoration — clicks are handled by the delegated listener on the
		* wrapper (see `handleResourceLinkClick`), so there is nothing to clean up
		* when the markdown re-renders and replaces these elements.
		*/
		function enhanceResourceLinks() {
			if (!wrapperRef.value) return;
			const allLinks = wrapperRef.value.querySelectorAll("a");
			for (const link of allLinks) {
				if (link.dataset.resourceChip) continue;
				const href = link.getAttribute("href") ?? "";
				const resourceMatch = /^n8n-resource:\/\/(workflow|credential|data-table)\/(.+)$/.exec(href);
				if (resourceMatch) {
					const [, type, encodedId] = resourceMatch;
					const id = decodeResourceId(encodedId);
					link.href = buildResourceUrl(type, id, [...thread.resourceNameIndex.values()].find((r) => r.type === type && r.id === id)?.projectId);
					link.target = "_blank";
					link.rel = "noopener noreferrer";
					link.dataset.resourceId = id;
					applyResourceChip(link, type);
					continue;
				}
				const internalPathname = getSameOriginPathname(href);
				if (!internalPathname) continue;
				for (const { pattern, type } of INTERNAL_ROUTE_PATTERNS) if (pattern.test(internalPathname)) {
					link.target = "_blank";
					link.rel = "noopener noreferrer";
					applyResourceChip(link, type);
					break;
				}
			}
		}
		/**
		* Delegated click handler for resource chips (anchors carrying
		* `data-resource-id`, i.e. decorated `n8n-resource://` links).
		*
		* Delegation instead of per-link listeners: the markdown is innerHTML-based
		* and re-renders both replace elements and leave them untouched depending on
		* whether the content changed — per-link listeners were silently lost on
		* same-content re-renders (cleanup removed them, the "already enhanced" skip
		* never re-attached), downgrading chips to plain new-tab links.
		*
		* Click behavior:
		* - Cmd/Ctrl+click → browser handles new-tab via target="_blank"
		* - Left-click on workflow/data-table → opens (or switches to) the inline
		*   preview tab. If the preview is already showing this resource, falls
		*   through to default `target="_blank"` and opens a new tab instead.
		* - Left-click on credential (or any chip without an available preview)
		*   → opens in a new tab.
		*/
		function handleResourceLinkClick(event) {
			if (event.metaKey || event.ctrlKey) return;
			if (!(event.target instanceof Element)) return;
			const link = event.target.closest("a[data-resource-id]");
			if (!(link instanceof HTMLAnchorElement)) return;
			const type = link.dataset.resourceChip;
			const id = link.dataset.resourceId;
			if (!type || !id) return;
			let switched;
			if (type === "workflow") switched = openWorkflowPreview?.(id);
			else if (type === "data-table") {
				const registryEntry = [...thread.resourceNameIndex.values()].find((r) => r.type === type && r.id === id);
				if (registryEntry?.projectId) switched = openDataTablePreview?.(id, registryEntry.projectId);
			}
			if (switched === true) event.preventDefault();
		}
		onMounted(enhanceResourceLinks);
		onUpdated(() => {
			enhanceResourceLinks();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				ref_key: "wrapperRef",
				ref: wrapperRef,
				onClick: handleResourceLinkClick
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
//#region src/features/ai/instanceAi/components/TimelineStepChevron.vue?vue&type=script&setup=true&lang.ts
var TimelineStepChevron_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "TimelineStepChevron",
	props: { open: { type: Boolean } },
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nIcon_default), {
				icon: "chevron-right",
				size: "large",
				class: normalizeClass([_ctx.$style.chevron, __props.open && _ctx.$style.open])
			}, null, 8, ["class"]);
		};
	}
});
var TimelineStepChevron_vue_vue_type_style_index_0_lang_module_default = {
	chevron: "_chevron_ltx7a_125",
	open: "_open_ltx7a_130"
};
var TimelineStepChevron_default = /* @__PURE__ */ _plugin_vue_export_helper_default(TimelineStepChevron_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": TimelineStepChevron_vue_vue_type_style_index_0_lang_module_default }]]);
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
var block = "_block_156ix_341";
var ellipsis = "_ellipsis_156ix_364";
var shimmer$3 = "_shimmer_156ix_371";
var spin$3 = "_spin_156ix_1";
var opacityPulse$3 = "_opacityPulse_156ix_1";
var popoverIn$3 = "_popoverIn_156ix_1";
var fadeIn$3 = "_fadeIn_156ix_1";
var collapsibleSlideDown$3 = "_collapsibleSlideDown_156ix_1";
var collapsibleSlideUp$3 = "_collapsibleSlideUp_156ix_1";
var pulseGlow$3 = "_pulseGlow_156ix_1";
var pulseGlowDelayed$3 = "_pulseGlowDelayed_156ix_1";
var fade$3 = "_fade_156ix_1";
var fadeInUp$3 = "_fadeInUp_156ix_1";
var fadeInDown$3 = "_fadeInDown_156ix_1";
var fadeInLeft$3 = "_fadeInLeft_156ix_1";
var fadeInRight$3 = "_fadeInRight_156ix_1";
var fadeOut$3 = "_fadeOut_156ix_1";
var fadeOutDown$3 = "_fadeOutDown_156ix_1";
var fadeOutUp$3 = "_fadeOutUp_156ix_1";
var fadeOutLeft$3 = "_fadeOutLeft_156ix_1";
var fadeOutRight$3 = "_fadeOutRight_156ix_1";
var ping$3 = "_ping_156ix_1";
var blinkBackground$3 = "_blinkBackground_156ix_1";
var typingBlink$3 = "_typingBlink_156ix_1";
var TimelineStepButton_vue_vue_type_style_index_0_lang_module_default = {
	block,
	ellipsis,
	shimmer: shimmer$3,
	spin: spin$3,
	"skeleton-pulse": "_skeleton-pulse_156ix_1",
	opacityPulse: opacityPulse$3,
	popoverIn: popoverIn$3,
	fadeIn: fadeIn$3,
	collapsibleSlideDown: collapsibleSlideDown$3,
	collapsibleSlideUp: collapsibleSlideUp$3,
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
	ping: ping$3,
	blinkBackground: blinkBackground$3,
	typingBlink: typingBlink$3
};
var TimelineStepButton_default = /* @__PURE__ */ _plugin_vue_export_helper_default(TimelineStepButton_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": TimelineStepButton_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/ToolResultJson.vue?vue&type=script&setup=true&lang.ts
var import_FileSaver_min = /* @__PURE__ */ __toESM(require_FileSaver_min(), 1);
var _hoisted_1$18 = ["innerHTML"];
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
			}, null, 10, _hoisted_1$18), isTruncated.value ? (openBlock(), createElementBlock("div", {
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
	json: "_json_tzfkf_125",
	truncatedNotice: "_truncatedNotice_tzfkf_135",
	truncatedText: "_truncatedText_tzfkf_142"
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
//#region src/features/ai/instanceAi/components/ToolResultImage.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$17 = ["src"];
var ToolResultImage_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ToolResultImage",
	props: {
		data: {},
		mimeType: {}
	},
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("img", {
				src: `data:${__props.mimeType};base64,${__props.data}`,
				class: normalizeClass(_ctx.$style.image)
			}, null, 10, _hoisted_1$17);
		};
	}
});
var ToolResultImage_vue_vue_type_style_index_0_lang_module_default = { image: "_image_1l1xi_2" };
var ToolResultImage_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ToolResultImage_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ToolResultImage_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/ToolResultFile.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$16 = ["src", "type"];
var ToolResultFile_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ToolResultFile",
	props: {
		data: {},
		mimeType: {}
	},
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("embed", {
				src: `data:${__props.mimeType};base64,${__props.data}`,
				type: __props.mimeType,
				class: normalizeClass(_ctx.$style.file)
			}, null, 10, _hoisted_1$16);
		};
	}
});
var ToolResultFile_vue_vue_type_style_index_0_lang_module_default = { file: "_file_vywdb_2" };
var ToolResultFile_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ToolResultFile_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ToolResultFile_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/ToolResultText.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$15 = ["textContent"];
var ToolResultText_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ToolResultText",
	props: { text: {} },
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("pre", {
				class: normalizeClass(_ctx.$style.text),
				textContent: toDisplayString(__props.text)
			}, null, 10, _hoisted_1$15);
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
		function normalizeImageContentItem(item) {
			if (typeof item.data !== "string") return null;
			switch (item.type) {
				case "image": return typeof item.mimeType === "string" ? {
					type: "image",
					data: item.data,
					mimeType: item.mimeType
				} : null;
				case "image-data": return typeof item.mediaType === "string" ? {
					type: "image",
					data: item.data,
					mimeType: item.mediaType
				} : null;
				case "media":
				case "file-data": return typeof item.mediaType === "string" && item.mediaType.startsWith("image/") ? {
					type: "image",
					data: item.data,
					mimeType: item.mediaType
				} : null;
				default: return null;
			}
		}
		function normalizeContentItem(item) {
			if (!isRecord$1(item) || typeof item.type !== "string") return null;
			if (item.type === "text" && typeof item.text === "string") return {
				type: "text",
				text: item.text
			};
			if (item.type === "file-data" && typeof item.mediaType === "string" && typeof item.data === "string" && !item.mediaType.startsWith("image/")) return {
				type: "resource",
				resource: {
					uri: "",
					blob: item.data,
					mimeType: item.mediaType
				}
			};
			return normalizeImageContentItem(item);
		}
		function normalizeContentItems(items) {
			const content = items.map(normalizeContentItem).filter((item) => item !== null);
			return content.length > 0 ? content : null;
		}
		function isCodeTool() {
			return isAction("workflows", "get-as-code") || isAction("nodes", "type-definition");
		}
		function isTableTool() {
			return isAction("data-tables", "query") || isAction("workflows", "list") || isAction("executions", "list") || isAction("credentials", "list") || isAction("nodes", "search") || isAction("nodes", "list") || isAction("data-tables", "list");
		}
		function extractMcpContent(result) {
			if (Array.isArray(result)) return normalizeContentItems(result);
			if (isRecord$1(result) && "content" in result && Array.isArray(result.content)) return normalizeContentItems(result.content);
			if (isRecord$1(result) && result.type === "content" && Array.isArray(result.value)) return normalizeContentItems(result.value);
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
				return openBlock(), createElementBlock(Fragment, { key: idx }, [item.type === "image" ? (openBlock(), createBlock(ToolResultImage_default, {
					key: 0,
					data: item.data,
					"mime-type": item.mimeType
				}, null, 8, ["data", "mime-type"])) : item.type === "resource" && item.resource.mimeType ? (openBlock(), createBlock(ToolResultFile_default, {
					key: 1,
					data: item.resource.blob,
					"mime-type": item.resource.mimeType
				}, null, 8, ["data", "mime-type"])) : item.type === "text" ? (openBlock(), createBlock(ToolResultText_default, {
					key: 2,
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
						icon: withCtx(() => [createVNode(TimelineStepChevron_default, { open: isOpen }, null, 8, ["open"])]),
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
							size: "small",
							class: normalizeClass(_ctx.$style.toggleTrigger)
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
						}, 1032, ["class"])]),
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
	timeline: "_timeline_zbfxb_125",
	toggleContent: "_toggleContent_zbfxb_131",
	toggleTrigger: "_toggleTrigger_zbfxb_136",
	streamingMarkdown: "_streamingMarkdown_zbfxb_143"
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
							icon: withCtx(() => [createVNode(TimelineStepChevron_default, { open: isOpen }, null, 8, ["open"])]),
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
	wrapper: "_wrapper_1cya3_125",
	userBubble: "_userBubble_1cya3_131",
	answerItem: "_answerItem_1cya3_140",
	question: "_question_1cya3_149",
	skipped: "_skipped_1cya3_153"
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
					color: "text-light",
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
	card: "_card_12jbl_125",
	cardArchived: "_cardArchived_12jbl_134",
	archivedBadge: "_archivedBadge_12jbl_138",
	icon: "_icon_12jbl_147",
	name: "_name_12jbl_152",
	metadata: "_metadata_12jbl_161"
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
						icon: withCtx(() => [createVNode(TimelineStepChevron_default, { open: isOpen }, null, 8, ["open"])]),
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
var footer$2 = "_footer_nszhc_125";
var column = "_column_nszhc_140";
var bordered = "_bordered_nszhc_145";
var ConfirmationFooter_vue_vue_type_style_index_0_lang_module_default = {
	footer: footer$2,
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
		loading: { type: Boolean },
		status: {},
		updating: { type: Boolean },
		expired: { type: Boolean }
	},
	emits: [
		"approve",
		"ask-for-edits",
		"deny"
	],
	setup(__props, { emit: __emit }) {
		/**
		* PlanReviewPanel.vue
		*
		* Single-card plan approval UI. Shows planned tasks as an accordion with
		* expandable specs, dependency info, and approve/ask-for-edits/deny controls.
		* "Ask for edits" hands off feedback collection to the main chat input.
		*/
		const props = __props;
		const i18n = useI18n();
		const emit = __emit;
		const isResolved = ref(false);
		const resolvedAction = ref(null);
		const reviewStatus = computed(() => props.status ?? resolvedAction.value ?? "pending");
		const isExpanded = ref(!props.readOnly && !props.expired);
		const titleKey = computed(() => {
			if (props.expired) return "instanceAi.planReview.titleExpired";
			if (isResolved.value || props.readOnly) return "instanceAi.planReview.titleResolved";
			return "instanceAi.planReview.title";
		});
		const showActions = computed(() => reviewStatus.value === "pending" && !isResolved.value && !props.readOnly && !props.loading && !props.expired && props.plannedTasks.length > 0);
		const showChangesRequested = computed(() => reviewStatus.value === "changes-requested" && !props.expired);
		const isShimmering = computed(() => Boolean(props.loading || props.updating));
		function isVerificationTask(task) {
			return task.kind === "checkpoint" || task.title.toLowerCase().startsWith("verify ");
		}
		function isTaskExpandedByDefault(task) {
			return !isVerificationTask(task);
		}
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
		function handleAskForEdits() {
			if (isResolved.value) return;
			emit("ask-for-edits");
		}
		function handleDeny() {
			if (isResolved.value) return;
			isResolved.value = true;
			resolvedAction.value = "denied";
			emit("deny");
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(CollapsibleRoot_default), {
				open: isExpanded.value,
				"onUpdate:open": _cache[0] || (_cache[0] = ($event) => isExpanded.value = $event),
				class: normalizeClass(_ctx.$style.root),
				"aria-busy": isShimmering.value ? "true" : void 0,
				"data-loading": isShimmering.value ? "true" : void 0,
				"data-test-id": "instance-ai-plan-review"
			}, {
				default: withCtx(() => [createVNode(unref(CollapsibleTrigger_default), { "as-child": "" }, {
					default: withCtx(() => [createBaseVNode("div", {
						class: normalizeClass([_ctx.$style.header, !isExpanded.value && _ctx.$style.headerCollapsed]),
						"data-test-id": "instance-ai-plan-review-header"
					}, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.headerTitleGroup) }, [createVNode(unref(N8nText_default), { size: "large" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(titleKey.value)), 1)]),
						_: 1
					}), createVNode(unref(N8nIcon_default), {
						icon: "chevron-right",
						size: "medium",
						class: normalizeClass([_ctx.$style.headerChevron, isExpanded.value && _ctx.$style.headerChevronOpen]),
						"data-test-id": "instance-ai-plan-review-chevron"
					}, null, 8, ["class"])], 2), reviewStatus.value === "denied" ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 0,
						size: "small",
						bold: "",
						color: "text-light",
						"data-test-id": "instance-ai-plan-denied"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.planReview.denied")), 1)]),
						_: 1
					})) : showChangesRequested.value && __props.updating ? (openBlock(), createElementBlock("div", {
						key: 1,
						class: normalizeClass(_ctx.$style.headerStatus)
					}, [createVNode(unref(N8nIcon_default), {
						icon: "loader",
						size: "small",
						class: normalizeClass(_ctx.$style.loadingIcon)
					}, null, 8, ["class"]), createVNode(unref(N8nText_default), {
						size: "small",
						color: "text-light"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.planReview.updating")), 1)]),
						_: 1
					})], 2)) : props.loading && __props.plannedTasks.length > 0 ? (openBlock(), createElementBlock("div", {
						key: 2,
						class: normalizeClass(_ctx.$style.headerStatus),
						"data-test-id": "instance-ai-plan-building"
					}, [createVNode(unref(N8nIcon_default), {
						icon: "loader",
						size: "small",
						class: normalizeClass(_ctx.$style.loadingIcon)
					}, null, 8, ["class"]), createVNode(unref(N8nText_default), {
						size: "small",
						color: "text-light"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.planReview.building")), 1)]),
						_: 1
					})], 2)) : createCommentVNode("", true)], 2)]),
					_: 1
				}), createVNode(AnimatedCollapsibleContent_default, null, {
					default: withCtx(() => [props.loading && __props.plannedTasks.length === 0 ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.loadingState)
					}, [createVNode(unref(N8nIcon_default), {
						icon: "loader",
						size: "medium",
						class: normalizeClass(_ctx.$style.loadingIcon)
					}, null, 8, ["class"]), createVNode(unref(N8nText_default), { color: "text-light" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.planReview.building")), 1)]),
						_: 1
					})], 2)) : (openBlock(), createElementBlock("div", {
						key: 1,
						class: normalizeClass(_ctx.$style.tasks)
					}, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.plannedTasks, (task, idx) => {
						return openBlock(), createBlock(unref(CollapsibleRoot_default), {
							key: task.id,
							class: normalizeClass(_ctx.$style.taskItem),
							"default-open": isTaskExpandedByDefault(task)
						}, {
							default: withCtx(({ open: isTaskOpen }) => [createVNode(unref(CollapsibleTrigger_default), { "as-child": "" }, {
								default: withCtx(() => [createBaseVNode("button", {
									type: "button",
									class: normalizeClass(_ctx.$style.taskRow)
								}, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.taskNumber) }, toDisplayString(idx + 1), 3), createBaseVNode("span", { class: normalizeClass(_ctx.$style.taskTitleGroup) }, [createVNode(unref(N8nText_default), {
									bold: "",
									size: "large",
									class: normalizeClass(_ctx.$style.taskTitle)
								}, {
									default: withCtx(() => [createTextVNode(toDisplayString(task.title), 1)]),
									_: 2
								}, 1032, ["class"]), createVNode(unref(N8nIcon_default), {
									icon: "chevron-right",
									size: "medium",
									class: normalizeClass([_ctx.$style.taskChevron, isTaskOpen && _ctx.$style.taskChevronOpen])
								}, null, 8, ["class"])], 2)], 2)]),
								_: 2
							}, 1024), createVNode(AnimatedCollapsibleContent_default, null, {
								default: withCtx(() => [task.spec ? (openBlock(), createElementBlock("div", {
									key: 0,
									class: normalizeClass(_ctx.$style.taskDetail)
								}, [createVNode(unref(N8nText_default), {
									tag: "p",
									class: normalizeClass(_ctx.$style.taskSpec)
								}, {
									default: withCtx(() => [createTextVNode(toDisplayString(getDescription(task)), 1)]),
									_: 2
								}, 1032, ["class"])], 2)) : createCommentVNode("", true)]),
								_: 2
							}, 1024)]),
							_: 2
						}, 1032, ["class", "default-open"]);
					}), 128))], 2)), showActions.value ? (openBlock(), createBlock(ConfirmationFooter_default, {
						key: 2,
						layout: "row-between",
						bordered: ""
					}, {
						default: withCtx(() => [createVNode(unref(N8nButton_default), {
							variant: "outline",
							size: "medium",
							disabled: __props.disabled,
							"data-test-id": "instance-ai-plan-deny",
							onClick: handleDeny
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.planReview.deny")), 1)]),
							_: 1
						}, 8, ["disabled"]), createBaseVNode("div", { class: normalizeClass(_ctx.$style.footerActions) }, [createVNode(unref(N8nButton_default), {
							variant: "outline",
							size: "medium",
							disabled: __props.disabled,
							"data-test-id": "instance-ai-plan-ask-for-edits",
							onClick: handleAskForEdits
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.planReview.askForEdits")), 1)]),
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
					})) : showChangesRequested.value ? (openBlock(), createBlock(ConfirmationFooter_default, {
						key: 3,
						layout: "row-end",
						bordered: ""
					}, {
						default: withCtx(() => [createVNode(unref(N8nButton_default), {
							variant: "outline",
							size: "medium",
							disabled: "",
							"data-test-id": "instance-ai-plan-changes-requested"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.planReview.changesRequested")), 1)]),
							_: 1
						})]),
						_: 1
					})) : props.expired ? (openBlock(), createElementBlock("div", {
						key: 4,
						class: normalizeClass(_ctx.$style.expiredHint)
					}, [createVNode(unref(N8nText_default), {
						size: "small",
						color: "text-light"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.planReview.expiredHint")), 1)]),
						_: 1
					})], 2)) : createCommentVNode("", true)]),
					_: 1
				})]),
				_: 1
			}, 8, [
				"open",
				"class",
				"aria-busy",
				"data-loading"
			]);
		};
	}
});
//#endregion
//#region src/features/ai/instanceAi/components/PlanReviewPanel.vue?vue&type=style&index=0&lang.module.scss
var root$7 = "_root_erbul_341";
var expiredHint = "_expiredHint_erbul_350";
var header$9 = "_header_erbul_355";
var headerCollapsed = "_headerCollapsed_erbul_365";
var headerTitleGroup = "_headerTitleGroup_erbul_369";
var headerChevron = "_headerChevron_erbul_376";
var headerChevronOpen = "_headerChevronOpen_erbul_383";
var headerStatus = "_headerStatus_erbul_387";
var loadingState$2 = "_loadingState_erbul_394";
var loadingIcon = "_loadingIcon_erbul_402";
var spin$2 = "_spin_erbul_1";
var tasks = "_tasks_erbul_411";
var footerActions$1 = "_footerActions_erbul_417";
var taskItem = "_taskItem_erbul_422";
var taskRow = "_taskRow_erbul_426";
var taskNumber = "_taskNumber_erbul_439";
var taskTitle = "_taskTitle_erbul_453";
var taskTitleGroup = "_taskTitleGroup_erbul_460";
var taskChevron = "_taskChevron_erbul_468";
var taskChevronOpen = "_taskChevronOpen_erbul_475";
var taskDetail = "_taskDetail_erbul_479";
var taskSpec = "_taskSpec_erbul_484";
var shimmer$2 = "_shimmer_erbul_1";
var opacityPulse$2 = "_opacityPulse_erbul_1";
var popoverIn$2 = "_popoverIn_erbul_1";
var fadeIn$2 = "_fadeIn_erbul_1";
var collapsibleSlideDown$2 = "_collapsibleSlideDown_erbul_1";
var collapsibleSlideUp$2 = "_collapsibleSlideUp_erbul_1";
var pulseGlow$2 = "_pulseGlow_erbul_1";
var pulseGlowDelayed$2 = "_pulseGlowDelayed_erbul_1";
var fade$2 = "_fade_erbul_1";
var fadeInUp$2 = "_fadeInUp_erbul_1";
var fadeInDown$2 = "_fadeInDown_erbul_1";
var fadeInLeft$2 = "_fadeInLeft_erbul_1";
var fadeInRight$2 = "_fadeInRight_erbul_1";
var fadeOut$2 = "_fadeOut_erbul_1";
var fadeOutDown$2 = "_fadeOutDown_erbul_1";
var fadeOutUp$2 = "_fadeOutUp_erbul_1";
var fadeOutLeft$2 = "_fadeOutLeft_erbul_1";
var fadeOutRight$2 = "_fadeOutRight_erbul_1";
var ping$2 = "_ping_erbul_1";
var blinkBackground$2 = "_blinkBackground_erbul_1";
var typingBlink$2 = "_typingBlink_erbul_1";
var PlanReviewPanel_vue_vue_type_style_index_0_lang_module_default = {
	root: root$7,
	expiredHint,
	header: header$9,
	headerCollapsed,
	headerTitleGroup,
	headerChevron,
	headerChevronOpen,
	headerStatus,
	loadingState: loadingState$2,
	loadingIcon,
	spin: spin$2,
	tasks,
	footerActions: footerActions$1,
	taskItem,
	taskRow,
	taskNumber,
	taskTitle,
	taskTitleGroup,
	taskChevron,
	taskChevronOpen,
	taskDetail,
	taskSpec,
	shimmer: shimmer$2,
	"skeleton-pulse": "_skeleton-pulse_erbul_1",
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
	ping: ping$2,
	blinkBackground: blinkBackground$2,
	typingBlink: typingBlink$2
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
						]), createBaseVNode("span", { class: normalizeClass(_ctx.$style.content) }, [createVNode(unref(N8nText_default), {
							color: task.textColor,
							class: normalizeClass({ [_ctx.$style.lineThrough]: task.lineThrough })
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(task.description), 1)]),
							_: 2
						}, 1032, ["color", "class"]), task.detail ? (openBlock(), createBlock(unref(N8nText_default), {
							key: 0,
							size: "small",
							color: "text-light",
							class: normalizeClass(_ctx.$style.detail)
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(task.detail), 1)]),
							_: 2
						}, 1032, ["class"])) : createCommentVNode("", true)], 2)]),
						_: 2
					}, 1024);
				}), 128))]),
				_: 1
			})) : createCommentVNode("", true);
		};
	}
});
var TaskChecklist_vue_vue_type_style_index_0_lang_module_default = {
	content: "_content_1apzl_125",
	detail: "_detail_1apzl_132",
	lineThrough: "_lineThrough_1apzl_136"
};
var TaskChecklist_default = /* @__PURE__ */ _plugin_vue_export_helper_default(TaskChecklist_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": TaskChecklist_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/TimelineTextSegment.vue
var TimelineTextSegment_default = /* @__PURE__ */ defineComponent({
	__name: "TimelineTextSegment",
	props: {
		entry: {},
		compact: {
			type: Boolean,
			default: false
		},
		streaming: {
			type: Boolean,
			default: false
		}
	},
	setup(__props) {
		const props = __props;
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nText_default), {
				size: "large",
				compact: props.compact
			}, {
				default: withCtx(() => [createVNode(InstanceAiMarkdown_default, {
					content: props.entry.content,
					streaming: props.streaming
				}, null, 8, ["content", "streaming"])]),
				_: 1
			}, 8, ["compact"]);
		};
	}
});
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
		function getPlanTasks(tc) {
			return tc.confirmation?.planItems ?? tc.args?.tasks ?? mapTaskItemsToPlannedTasks(tc.confirmation?.tasks) ?? [];
		}
		function getPlanReviewStatus(tc) {
			const requestId = tc.confirmation?.requestId;
			const localStatus = requestId ? thread.resolvedConfirmationIds.get(requestId) : void 0;
			if (localStatus === "approved" || tc.confirmationStatus === "approved") return "approved";
			if (localStatus === "denied") return "denied";
			if (localStatus === "changes-requested" || tc.confirmationStatus === "denied") return "changes-requested";
			return "pending";
		}
		function isPlanReviewUpdating(tc) {
			const requestId = tc.confirmation?.requestId;
			if (!requestId || getPlanReviewStatus(tc) !== "changes-requested") return false;
			return thread.updatingPlanRequestIds.has(requestId);
		}
		/** PlanReviewPanel is read-only when its tool call has settled OR when the
		*  underlying confirmation has already been resolved client-side. Without the
		*  resolvedConfirmationIds check, a freshly-loading create-tasks call could
		*  briefly re-enable the old card's footer (toolCall.isLoading flips back to
		*  true on tool-call-start before the previous card's read-only catches up). */
		function isPlanCardReadOnly(tc) {
			if (!tc.isLoading) return true;
			const requestId = tc.confirmation?.requestId;
			if (requestId && thread.resolvedConfirmationIds.has(requestId)) return true;
			return false;
		}
		/** Index children by agentId for O(1) lookup and proper reactivity tracking. */
		const childrenById = computed(() => {
			const map = {};
			for (const child of props.agentNode.children) map[child.agentId] = child;
			return map;
		});
		/**
		* Whether any entry renders visible output. Segments made up entirely of
		* hidden tool calls (e.g. builder calls represented by artifact cards) skip
		* the wrapper div — an empty flex item would still add gap spacing.
		*/
		const hasVisibleEntries = computed(() => timelineEntries.value.some((entry) => isVisibleTimelineEntry(entry, toolCallsById.value, childrenById.value)));
		function handlePlanApprove(tc) {
			const requestId = tc.confirmation?.requestId;
			if (!requestId) return;
			telemetry.track("User finished providing input", {
				thread_id: thread.id,
				input_thread_id: tc.confirmation?.inputThreadId ?? "",
				instance_id: rootStore.instanceId,
				type: "plan-review",
				provided_inputs: [{
					label: "plan",
					options: [
						"approve",
						"ask-for-edits",
						"deny"
					],
					option_chosen: "approve"
				}],
				skipped_inputs: [],
				num_tasks: getPlanTasks(tc).length,
				plan_feedback_type: "accept"
			});
			thread.resolveConfirmation(requestId, "approved");
			if (thread.activePlanEdit?.requestId === requestId) thread.cancelPlanEdit();
			thread.confirmAction(requestId, {
				kind: "approval",
				approved: true
			});
		}
		function handlePlanAskForEdits(tc) {
			const requestId = tc.confirmation?.requestId;
			if (!requestId || isPlanCardReadOnly(tc)) return;
			thread.startPlanEdit({
				requestId,
				inputThreadId: tc.confirmation?.inputThreadId,
				taskCount: getPlanTasks(tc).length
			});
		}
		function handlePlanDeny(tc) {
			const requestId = tc.confirmation?.requestId;
			if (!requestId) return;
			const numTasks = getPlanTasks(tc).length;
			telemetry.track("User finished providing input", {
				thread_id: thread.id,
				input_thread_id: tc.confirmation?.inputThreadId ?? "",
				instance_id: rootStore.instanceId,
				type: "plan-review",
				provided_inputs: [{
					label: "plan",
					options: [
						"approve",
						"ask-for-edits",
						"deny"
					],
					option_chosen: "deny"
				}],
				skipped_inputs: [],
				num_tasks: numTasks,
				plan_feedback_type: "deny"
			});
			if (thread.activePlanEdit?.requestId === requestId) thread.cancelPlanEdit();
			thread.resolveConfirmation(requestId, "denied");
			thread.confirmAction(requestId, { kind: "planDeny" });
		}
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
			return hasVisibleEntries.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.timeline)
			}, [(openBlock(true), createElementBlock(Fragment, null, renderList(timelineEntries.value, (entry, idx) => {
				return openBlock(), createElementBlock(Fragment, { key: idx }, [entry.type === "text" ? (openBlock(), createBlock(TimelineTextSegment_default, {
					key: 0,
					entry,
					compact: props.compact,
					streaming: unref(isStreamingTimelineEntry)(props.agentNode, entry),
					class: normalizeClass(_ctx.$style.timelineItem)
				}, null, 8, [
					"entry",
					"compact",
					"streaming",
					"class"
				])) : entry.type === "tool-call" && toolCallsById.value[entry.toolCallId] && !unref(HIDDEN_TOOLS).has(toolCallsById.value[entry.toolCallId].toolName) ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [toolCallsById.value[entry.toolCallId].renderHint === "tasks" ? (openBlock(), createBlock(TaskChecklist_default, {
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
				])) : toolCallsById.value[entry.toolCallId].renderHint === "builder" ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [], 64)) : toolCallsById.value[entry.toolCallId].renderHint === "data-table" ? (openBlock(), createElementBlock(Fragment, { key: 3 }, [], 64)) : toolCallsById.value[entry.toolCallId].renderHint === "eval-setup" ? (openBlock(), createElementBlock(Fragment, { key: 4 }, [], 64)) : toolCallsById.value[entry.toolCallId].confirmation?.inputType === "plan-review" ? (openBlock(), createBlock(PlanReviewPanel_default, {
					key: toolCallsById.value[entry.toolCallId].confirmation?.requestId,
					"planned-tasks": getPlanTasks(toolCallsById.value[entry.toolCallId]),
					status: getPlanReviewStatus(toolCallsById.value[entry.toolCallId]),
					updating: isPlanReviewUpdating(toolCallsById.value[entry.toolCallId]),
					"read-only": isPlanCardReadOnly(toolCallsById.value[entry.toolCallId]),
					expired: toolCallsById.value[entry.toolCallId].confirmation?.expired,
					onApprove: ($event) => handlePlanApprove(toolCallsById.value[entry.toolCallId]),
					onAskForEdits: ($event) => handlePlanAskForEdits(toolCallsById.value[entry.toolCallId]),
					onDeny: ($event) => handlePlanDeny(toolCallsById.value[entry.toolCallId])
				}, null, 8, [
					"planned-tasks",
					"status",
					"updating",
					"read-only",
					"expired",
					"onApprove",
					"onAskForEdits",
					"onDeny"
				])) : toolCallsById.value[entry.toolCallId].renderHint === "planner" ? (openBlock(), createElementBlock(Fragment, { key: 6 }, [], 64)) : toolCallsById.value[entry.toolCallId].confirmation?.inputType === "questions" && !toolCallsById.value[entry.toolCallId].isLoading ? (openBlock(), createBlock(AnsweredQuestions_default, {
					key: 7,
					"tool-call": toolCallsById.value[entry.toolCallId]
				}, null, 8, ["tool-call"])) : toolCallsById.value[entry.toolCallId].confirmation?.inputType === "questions" && toolCallsById.value[entry.toolCallId].isLoading ? (openBlock(), createElementBlock(Fragment, { key: 8 }, [], 64)) : (openBlock(), createBlock(ToolCallStep_default, {
					key: 9,
					"tool-call": toolCallsById.value[entry.toolCallId],
					"show-connector": true
				}, null, 8, ["tool-call"]))], 64)) : entry.type === "child" && childrenById.value[entry.agentId] && !unref(isActiveBuilderAgent)(childrenById.value[entry.agentId]) ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [createVNode(AgentSection_default, { "agent-node": childrenById.value[entry.agentId] }, null, 8, ["agent-node"]), !props.visibleEntries ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(unref(extractArtifacts)(childrenById.value[entry.agentId]), (artifact) => {
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
				}), 128)) : createCommentVNode("", true)], 64)) : createCommentVNode("", true)], 64);
			}), 128))], 2)) : createCommentVNode("", true);
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
						icon: withCtx(() => [createVNode(TimelineStepChevron_default, { open: isOpen }, null, 8, ["open"])]),
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
	reasoningTrigger: "_reasoningTrigger_1y6dq_125",
	artifactCard: "_artifactCard_1y6dq_133",
	reasoningContent: "_reasoningContent_1y6dq_141"
};
var AgentActivityTree_default = /* @__PURE__ */ _plugin_vue_export_helper_default(AgentActivityTree_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": AgentActivityTree_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiMessage.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$14 = { key: 1 };
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
						formattedTechnicalDetails.value ? (openBlock(), createElementBlock("details", _hoisted_1$14, [createBaseVNode("summary", { class: normalizeClass(_ctx.$style.errorDetailsSummary) }, toDisplayString(unref(i18n).baseText("instanceAi.error.technicalDetails")), 3), createBaseVNode("pre", { class: normalizeClass(_ctx.$style.runLevelErrorDetails) }, toDisplayString(formattedTechnicalDetails.value), 3)])) : createCommentVNode("", true)
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
var userMessage = "_userMessage_o88o6_341";
var userAttachments = "_userAttachments_o88o6_349";
var userBubble = "_userBubble_o88o6_356";
var assistantWrapper = "_assistantWrapper_o88o6_365";
var actionBtn = "_actionBtn_o88o6_371";
var statusIndicator = "_statusIndicator_o88o6_388";
var statusDot$1 = "_statusDot_o88o6_398";
var opacityPulse$1 = "_opacityPulse_o88o6_1";
var blinkingCursor = "_blinkingCursor_o88o6_421";
var runLevelError = "_runLevelError_o88o6_438";
var runLevelErrorDetails = "_runLevelErrorDetails_o88o6_444";
var errorDetailsSummary = "_errorDetailsSummary_o88o6_456";
var feedbackSuccess = "_feedbackSuccess_o88o6_465";
var debugJson = "_debugJson_o88o6_471";
var shimmer$1 = "_shimmer_o88o6_1";
var spin$1 = "_spin_o88o6_1";
var popoverIn$1 = "_popoverIn_o88o6_1";
var fadeIn$1 = "_fadeIn_o88o6_1";
var collapsibleSlideDown$1 = "_collapsibleSlideDown_o88o6_1";
var collapsibleSlideUp$1 = "_collapsibleSlideUp_o88o6_1";
var pulseGlow$1 = "_pulseGlow_o88o6_1";
var pulseGlowDelayed$1 = "_pulseGlowDelayed_o88o6_1";
var fade$1 = "_fade_o88o6_1";
var fadeInUp$1 = "_fadeInUp_o88o6_1";
var fadeInDown$1 = "_fadeInDown_o88o6_1";
var fadeInLeft$1 = "_fadeInLeft_o88o6_1";
var fadeInRight$1 = "_fadeInRight_o88o6_1";
var fadeOut$1 = "_fadeOut_o88o6_1";
var fadeOutDown$1 = "_fadeOutDown_o88o6_1";
var fadeOutUp$1 = "_fadeOutUp_o88o6_1";
var fadeOutLeft$1 = "_fadeOutLeft_o88o6_1";
var fadeOutRight$1 = "_fadeOutRight_o88o6_1";
var ping$1 = "_ping_o88o6_1";
var blinkBackground$1 = "_blinkBackground_o88o6_1";
var typingBlink$1 = "_typingBlink_o88o6_1";
var InstanceAiMessage_vue_vue_type_style_index_0_lang_module_default = {
	userMessage,
	userAttachments,
	userBubble,
	assistantWrapper,
	actionBtn,
	statusIndicator,
	"status-fade-in": "_status-fade-in_o88o6_1",
	statusDot: statusDot$1,
	opacityPulse: opacityPulse$1,
	blinkingCursor,
	"cursor-blink": "_cursor-blink_o88o6_1",
	runLevelError,
	runLevelErrorDetails,
	errorDetailsSummary,
	feedbackSuccess,
	debugJson,
	shimmer: shimmer$1,
	spin: spin$1,
	"skeleton-pulse": "_skeleton-pulse_o88o6_1",
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
	ping: ping$1,
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
	const selectedRunId = ref(null);
	const runDebug = ref(null);
	const threadDebugRuns = ref([]);
	const isLoadingRunDebug = ref(false);
	const isLoadingThreadDebugRuns = ref(false);
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
	async function loadThreadDebugRuns(threadId) {
		isLoadingThreadDebugRuns.value = true;
		try {
			threadDebugRuns.value = (await fetchThreadDebugRuns(rootStore.restApiContext, threadId)).runs;
		} catch {
			toast.showError(new Error(i18n.baseText("instanceAi.debug.runDebug.fetchError")), "Run Debug");
		} finally {
			isLoadingThreadDebugRuns.value = false;
		}
	}
	async function loadRunDebug(runId) {
		selectedRunId.value = runId;
		isLoadingRunDebug.value = true;
		try {
			runDebug.value = await fetchRunDebug(rootStore.restApiContext, runId);
		} catch {
			runDebug.value = null;
			toast.showError(new Error(i18n.baseText("instanceAi.debug.runDebug.fetchError")), "Run Debug");
		} finally {
			isLoadingRunDebug.value = false;
		}
	}
	async function refreshRunDebug(threadId, preferredRunId) {
		await loadThreadDebugRuns(threadId);
		const selectedRunIdForThread = threadDebugRuns.value.some((run) => run.runId === selectedRunId.value) ? selectedRunId.value : null;
		const runId = preferredRunId ?? selectedRunIdForThread ?? threadDebugRuns.value.at(-1)?.runId ?? null;
		if (runId) await loadRunDebug(runId);
		else {
			selectedRunId.value = null;
			runDebug.value = null;
		}
	}
	function reset() {
		threads.value = [];
		selectedThreadId.value = null;
		threadMessages.value = [];
		isLoadingThreads.value = false;
		isLoadingMessages.value = false;
		selectedRunId.value = null;
		runDebug.value = null;
		threadDebugRuns.value = [];
		isLoadingRunDebug.value = false;
		isLoadingThreadDebugRuns.value = false;
	}
	return {
		threads,
		selectedThreadId,
		threadMessages,
		isLoadingThreads,
		isLoadingMessages,
		selectedRunId,
		runDebug,
		threadDebugRuns,
		isLoadingRunDebug,
		isLoadingThreadDebugRuns,
		loadThreads,
		selectThread,
		loadMessages,
		loadRunDebug,
		refreshRunDebug,
		reset
	};
});
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiDebugJsonPanel.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$13 = ["open"];
var InstanceAiDebugJsonPanel_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiDebugJsonPanel",
	props: {
		value: {},
		label: {},
		defaultOpen: {
			type: Boolean,
			default: false
		}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const preview = computed(() => summarizeJsonValue(props.value));
		const formatted = computed(() => formatDebugJson(props.value));
		const summaryLabel = computed(() => props.label ?? i18n.baseText("instanceAi.debug.runDebug.json"));
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("details", {
				class: normalizeClass(_ctx.$style.root),
				open: __props.defaultOpen
			}, [createBaseVNode("summary", { class: normalizeClass(_ctx.$style.summary) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.summaryLabel) }, toDisplayString(summaryLabel.value), 3), createBaseVNode("code", { class: normalizeClass(_ctx.$style.preview) }, toDisplayString(preview.value), 3)], 2), createBaseVNode("pre", { class: normalizeClass(_ctx.$style.json) }, toDisplayString(formatted.value), 3)], 10, _hoisted_1$13);
		};
	}
});
var InstanceAiDebugJsonPanel_vue_vue_type_style_index_0_lang_module_default = {
	root: "_root_1qsbg_126",
	summary: "_summary_1qsbg_133",
	summaryLabel: "_summaryLabel_1qsbg_156",
	preview: "_preview_1qsbg_163",
	json: "_json_1qsbg_175"
};
var InstanceAiDebugJsonPanel_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiDebugJsonPanel_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiDebugJsonPanel_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiDebugWorkflowCodeSnapshot.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$12 = ["open"];
var InstanceAiDebugWorkflowCodeSnapshot_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiDebugWorkflowCodeSnapshot",
	props: {
		snapshot: {},
		variant: { default: "card" },
		defaultOpen: {
			type: Boolean,
			default: false
		}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const summaryPreview = computed(() => {
			const parts = [
				formatStatus(props.snapshot.success),
				props.snapshot.source,
				formatCharCount(props.snapshot.code.length)
			];
			if (props.snapshot.workflowId) parts.push(props.snapshot.workflowId);
			return parts.join(" · ");
		});
		function formatTimestamp(ms) {
			try {
				return new Date(ms).toLocaleTimeString("en-US", {
					hour12: false,
					fractionalSecondDigits: 3
				});
			} catch {
				return String(ms);
			}
		}
		function formatCharCount(count) {
			return i18n.baseText("instanceAi.debug.runDebug.charCount", { interpolate: { count: count.toLocaleString() } });
		}
		function formatStatus(success) {
			return success ? i18n.baseText("instanceAi.debug.runDebug.success") : i18n.baseText("instanceAi.debug.runDebug.failed");
		}
		return (_ctx, _cache) => {
			return __props.variant === "inline" ? (openBlock(), createElementBlock("details", {
				key: 0,
				class: normalizeClass(_ctx.$style.root),
				open: __props.defaultOpen
			}, [createBaseVNode("summary", { class: normalizeClass(_ctx.$style.summary) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.summaryLabel) }, toDisplayString(unref(i18n).baseText("instanceAi.debug.tab.workflowCode")), 3), createBaseVNode("code", { class: normalizeClass(_ctx.$style.preview) }, toDisplayString(summaryPreview.value), 3)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.body) }, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.metaBlock) }, [
					createBaseVNode("span", { class: normalizeClass([_ctx.$style.statusChip, __props.snapshot.success ? _ctx.$style.statusSuccess : _ctx.$style.statusFailed]) }, toDisplayString(formatStatus(__props.snapshot.success)), 3),
					__props.snapshot.source ? (openBlock(), createElementBlock("span", {
						key: 0,
						class: normalizeClass(_ctx.$style.metaLabel)
					}, toDisplayString(__props.snapshot.source), 3)) : createCommentVNode("", true),
					__props.snapshot.workflowId ? (openBlock(), createElementBlock("span", {
						key: 1,
						class: normalizeClass(_ctx.$style.metaLabel)
					}, toDisplayString(__props.snapshot.workflowId), 3)) : createCommentVNode("", true),
					createBaseVNode("span", { class: normalizeClass(_ctx.$style.metaLabel) }, toDisplayString(formatCharCount(__props.snapshot.code.length)), 3),
					createBaseVNode("span", { class: normalizeClass(_ctx.$style.metaLabel) }, toDisplayString(formatTimestamp(__props.snapshot.capturedAt)), 3)
				], 2),
				__props.snapshot.errors?.length ? (openBlock(), createBlock(InstanceAiDebugJsonPanel_default, {
					key: 0,
					value: __props.snapshot.errors,
					label: unref(i18n).baseText("instanceAi.debug.runDebug.failed")
				}, null, 8, ["value", "label"])) : createCommentVNode("", true),
				__props.snapshot.patches ? (openBlock(), createBlock(InstanceAiDebugJsonPanel_default, {
					key: 1,
					value: __props.snapshot.patches,
					label: unref(i18n).baseText("instanceAi.debug.runDebug.metadata")
				}, null, 8, ["value", "label"])) : createCommentVNode("", true),
				createBaseVNode("pre", { class: normalizeClass(_ctx.$style.code) }, toDisplayString(__props.snapshot.code), 3)
			], 2)], 10, _hoisted_1$12)) : (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.cardRoot)
			}, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.metaBlock) }, [
					createBaseVNode("span", { class: normalizeClass([_ctx.$style.statusChip, __props.snapshot.success ? _ctx.$style.statusSuccess : _ctx.$style.statusFailed]) }, toDisplayString(formatStatus(__props.snapshot.success)), 3),
					__props.snapshot.source ? (openBlock(), createElementBlock("span", {
						key: 0,
						class: normalizeClass(_ctx.$style.metaLabel)
					}, toDisplayString(__props.snapshot.source), 3)) : createCommentVNode("", true),
					__props.snapshot.workflowId ? (openBlock(), createElementBlock("span", {
						key: 1,
						class: normalizeClass(_ctx.$style.metaLabel)
					}, toDisplayString(__props.snapshot.workflowId), 3)) : createCommentVNode("", true),
					createBaseVNode("span", { class: normalizeClass(_ctx.$style.metaLabel) }, toDisplayString(formatCharCount(__props.snapshot.code.length)), 3),
					createBaseVNode("span", { class: normalizeClass(_ctx.$style.metaLabel) }, toDisplayString(formatTimestamp(__props.snapshot.capturedAt)), 3)
				], 2),
				__props.snapshot.errors?.length ? (openBlock(), createBlock(InstanceAiDebugJsonPanel_default, {
					key: 0,
					value: __props.snapshot.errors,
					label: unref(i18n).baseText("instanceAi.debug.runDebug.failed")
				}, null, 8, ["value", "label"])) : createCommentVNode("", true),
				__props.snapshot.patches ? (openBlock(), createBlock(InstanceAiDebugJsonPanel_default, {
					key: 1,
					value: __props.snapshot.patches,
					label: unref(i18n).baseText("instanceAi.debug.runDebug.metadata")
				}, null, 8, ["value", "label"])) : createCommentVNode("", true),
				createBaseVNode("pre", { class: normalizeClass(_ctx.$style.code) }, toDisplayString(__props.snapshot.code), 3)
			], 2));
		};
	}
});
var InstanceAiDebugWorkflowCodeSnapshot_vue_vue_type_style_index_0_lang_module_default = {
	root: "_root_gn985_126",
	summary: "_summary_gn985_133",
	summaryLabel: "_summaryLabel_gn985_156",
	preview: "_preview_gn985_163",
	body: "_body_gn985_175",
	cardRoot: "_cardRoot_gn985_184",
	metaBlock: "_metaBlock_gn985_190",
	metaLabel: "_metaLabel_gn985_197",
	statusChip: "_statusChip_gn985_203",
	statusSuccess: "_statusSuccess_gn985_210",
	statusFailed: "_statusFailed_gn985_215",
	code: "_code_gn985_220"
};
var InstanceAiDebugWorkflowCodeSnapshot_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiDebugWorkflowCodeSnapshot_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiDebugWorkflowCodeSnapshot_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/utils/workflow-code-match.ts
var WORKFLOW_CODE_TOOL_NAMES = new Set(["build-workflow"]);
function isRecord(value) {
	return typeof value === "object" && value !== null && !Array.isArray(value);
}
function isWorkflowCodeToolName(name) {
	return name !== void 0 && WORKFLOW_CODE_TOOL_NAMES.has(name);
}
function extractBuildWorkflowToolCallIds(output) {
	if (!output || !Array.isArray(output.toolResults)) return [];
	const ids = [];
	for (const toolResult of output.toolResults) {
		if (!isRecord(toolResult)) continue;
		if (!isWorkflowCodeToolName(typeof toolResult.toolName === "string" && toolResult.toolName || typeof toolResult.name === "string" && toolResult.name || void 0)) continue;
		if (typeof toolResult.toolCallId === "string") ids.push(toolResult.toolCallId);
	}
	return ids;
}
function mapWorkflowSnapshotsByToolCallId(steps, workflowCode) {
	const map = /* @__PURE__ */ new Map();
	for (const snapshot of workflowCode) if (snapshot.toolCallId) map.set(snapshot.toolCallId, snapshot);
	const orderedToolCallIds = steps.slice().sort((left, right) => left.stepNumber - right.stepNumber).flatMap((step) => extractBuildWorkflowToolCallIds(step.output));
	let snapshotIndex = 0;
	for (const toolCallId of orderedToolCallIds) {
		if (map.has(toolCallId)) continue;
		while (snapshotIndex < workflowCode.length && workflowCode[snapshotIndex]?.toolCallId && map.has(workflowCode[snapshotIndex]?.toolCallId ?? "")) snapshotIndex++;
		const snapshot = workflowCode[snapshotIndex];
		if (!snapshot) break;
		map.set(toolCallId, snapshot);
		snapshotIndex++;
	}
	return map;
}
function getToolCallIdFromMetadata(metadata) {
	if (!isRecord(metadata) || typeof metadata.toolCallId !== "string") return;
	return metadata.toolCallId;
}
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiDebugMessageBody.vue?vue&type=script&setup=true&lang.ts
var InstanceAiDebugMessageBody_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiDebugMessageBody",
	props: {
		segments: {},
		workflowSnapshotsByToolCallId: {}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		function getWorkflowSnapshot(segment) {
			if (!isWorkflowCodeToolName(segment.name) || !props.workflowSnapshotsByToolCallId) return;
			const toolCallId = getToolCallIdFromMetadata(segment.metadata);
			if (!toolCallId) return;
			return props.workflowSnapshotsByToolCallId.get(toolCallId);
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.root) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.segments, (segment, index) => {
				return openBlock(), createElementBlock(Fragment, { key: `${segment.type}-${index}` }, [segment.type === "text" ? (openBlock(), createElementBlock("p", {
					key: 0,
					class: normalizeClass(_ctx.$style.text)
				}, toDisplayString(segment.text), 3)) : segment.type === "reasoning" ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.inlineBlock)
				}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.inlineHeader) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.kindLabel) }, toDisplayString(unref(i18n).baseText("instanceAi.debug.runDebug.reasoning")), 3)], 2), createBaseVNode("p", { class: normalizeClass(_ctx.$style.text) }, toDisplayString(segment.text), 3)], 2)) : segment.type === "tool-call" ? (openBlock(), createElementBlock("div", {
					key: 2,
					class: normalizeClass(_ctx.$style.inlineBlock)
				}, [
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.inlineHeader) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.kindLabel) }, toDisplayString(unref(i18n).baseText("instanceAi.debug.runDebug.toolCall")), 3), createBaseVNode("span", { class: normalizeClass(_ctx.$style.nameLabel) }, toDisplayString(segment.name), 3)], 2),
					segment.payload !== void 0 ? (openBlock(), createBlock(InstanceAiDebugJsonPanel_default, {
						key: 0,
						value: segment.payload,
						label: unref(i18n).baseText("instanceAi.debug.runDebug.toolInput")
					}, null, 8, ["value", "label"])) : createCommentVNode("", true),
					segment.metadata ? (openBlock(), createBlock(InstanceAiDebugJsonPanel_default, {
						key: 1,
						value: segment.metadata,
						label: unref(i18n).baseText("instanceAi.debug.runDebug.metadata")
					}, null, 8, ["value", "label"])) : createCommentVNode("", true)
				], 2)) : segment.type === "tool-result" ? (openBlock(), createElementBlock("div", {
					key: 3,
					class: normalizeClass(_ctx.$style.inlineBlock)
				}, [
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.inlineHeader) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.kindLabel) }, toDisplayString(unref(i18n).baseText("instanceAi.debug.runDebug.toolResult")), 3), segment.name ? (openBlock(), createElementBlock("span", {
						key: 0,
						class: normalizeClass(_ctx.$style.nameLabel)
					}, toDisplayString(segment.name), 3)) : createCommentVNode("", true)], 2),
					segment.payload !== void 0 ? (openBlock(), createBlock(InstanceAiDebugJsonPanel_default, {
						key: 0,
						value: segment.payload,
						label: unref(i18n).baseText("instanceAi.debug.runDebug.toolOutput")
					}, null, 8, ["value", "label"])) : createCommentVNode("", true),
					getWorkflowSnapshot(segment) ? (openBlock(), createBlock(InstanceAiDebugWorkflowCodeSnapshot_default, {
						key: 1,
						variant: "inline",
						snapshot: getWorkflowSnapshot(segment)
					}, null, 8, ["snapshot"])) : createCommentVNode("", true),
					segment.metadata ? (openBlock(), createBlock(InstanceAiDebugJsonPanel_default, {
						key: 2,
						value: segment.metadata,
						label: unref(i18n).baseText("instanceAi.debug.runDebug.metadata")
					}, null, 8, ["value", "label"])) : createCommentVNode("", true)
				], 2)) : (openBlock(), createBlock(InstanceAiDebugJsonPanel_default, {
					key: 4,
					value: segment.payload,
					label: segment.label ?? unref(i18n).baseText("instanceAi.debug.runDebug.json")
				}, null, 8, ["value", "label"]))], 64);
			}), 128))], 2);
		};
	}
});
var InstanceAiDebugMessageBody_vue_vue_type_style_index_0_lang_module_default = {
	root: "_root_1suu7_125",
	text: "_text_1suu7_131",
	inlineBlock: "_inlineBlock_1suu7_140",
	inlineHeader: "_inlineHeader_1suu7_146",
	kindLabel: "_kindLabel_1suu7_152",
	nameLabel: "_nameLabel_1suu7_157"
};
var InstanceAiDebugMessageBody_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiDebugMessageBody_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiDebugMessageBody_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiLlmStepDetail.vue?vue&type=script&setup=true&lang.ts
var InstanceAiLlmStepDetail_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiLlmStepDetail",
	props: {
		input: {},
		output: {},
		runSteps: {},
		workflowCode: {}
	},
	setup(__props, { expose: __expose }) {
		const props = __props;
		const i18n = useI18n();
		const outputSectionRef = ref(null);
		const parsedSystemPrompt = computed(() => parseSystemPromptForDisplay(props.input?.system));
		const systemBlocks = computed(() => parsedSystemPrompt.value.systemBlocks);
		const systemObservations = computed(() => parsedSystemPrompt.value.observations);
		const messageBlocks = computed(() => parseMessageBlocks(props.input?.messages));
		const inputExtras = computed(() => parseInputExtras(props.input));
		const outputDisplayBlocks = computed(() => parseOutputDisplayBlocks(props.output));
		const usageSummary = computed(() => parseUsageSummary(props.output?.usage));
		const outputExtras = computed(() => parseOutputExtras(props.output));
		const workflowSnapshotsByToolCallId = computed(() => mapWorkflowSnapshotsByToolCallId(props.runSteps ?? [], props.workflowCode ?? []));
		const finishReason = computed(() => typeof props.output?.finishReason === "string" ? props.output.finishReason : void 0);
		const systemCharCount = computed(() => systemBlocks.value.reduce((total, block) => total + block.content.length, 0));
		const hasInputContent = computed(() => systemBlocks.value.length > 0 || Boolean(systemObservations.value) || messageBlocks.value.length > 0 || Boolean(inputExtras.value));
		const hasOutputContent = computed(() => outputDisplayBlocks.value.length > 0 || Boolean(outputExtras.value) || Boolean(usageSummary.value));
		const showSystemDetails = computed(() => systemBlocks.value.length > 0);
		function getCardClass(role) {
			const normalized = role.toLowerCase();
			if (normalized.includes("system")) return "cardSystem";
			if (normalized === "reasoning") return "cardMuted";
			if (normalized === "user") return "cardUser";
			if (normalized === "assistant") return "cardAssistant";
			if (normalized === "tool") return "cardTool";
			return "cardMuted";
		}
		function formatCharCount(count) {
			return i18n.baseText("instanceAi.debug.runDebug.charCount", { interpolate: { count: count.toLocaleString() } });
		}
		function scrollToOutput(container) {
			if (!outputSectionRef.value) {
				container.scrollTo({
					top: 0,
					behavior: "smooth"
				});
				return;
			}
			const containerTop = container.getBoundingClientRect().top;
			const sectionTop = outputSectionRef.value.getBoundingClientRect().top;
			container.scrollTo({
				top: container.scrollTop + (sectionTop - containerTop),
				behavior: "smooth"
			});
		}
		__expose({ scrollToOutput });
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.root) }, [
				__props.input ? (openBlock(), createElementBlock("section", {
					key: 0,
					class: normalizeClass(_ctx.$style.section)
				}, [createVNode(unref(N8nText_default), {
					tag: "h3",
					size: "small",
					bold: "",
					color: "text-dark",
					class: normalizeClass(_ctx.$style.sectionTitle)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.debug.runDebug.input")), 1)]),
					_: 1
				}, 8, ["class"]), hasInputContent.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.stack)
				}, [
					showSystemDetails.value ? (openBlock(), createElementBlock("details", {
						key: 0,
						class: normalizeClass([
							_ctx.$style.card,
							_ctx.$style.cardSystem,
							_ctx.$style.expandableCard
						])
					}, [createBaseVNode("summary", { class: normalizeClass(_ctx.$style.cardHeader) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.roleLabel) }, "system", 2), createBaseVNode("span", { class: normalizeClass(_ctx.$style.headerMeta) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.metaLabel) }, toDisplayString(formatCharCount(systemCharCount.value)), 3)], 2)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardBody) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(systemBlocks.value, (block, index) => {
						return openBlock(), createElementBlock(Fragment, { key: `system-${index}` }, [block.segments?.length ? (openBlock(), createBlock(InstanceAiDebugMessageBody_default, {
							key: 0,
							segments: block.segments,
							"workflow-snapshots-by-tool-call-id": workflowSnapshotsByToolCallId.value
						}, null, 8, ["segments", "workflow-snapshots-by-tool-call-id"])) : (openBlock(), createElementBlock("p", {
							key: 1,
							class: normalizeClass(_ctx.$style.text)
						}, toDisplayString(block.content), 3)), block.metadata ? (openBlock(), createBlock(InstanceAiDebugJsonPanel_default, {
							key: 2,
							value: block.metadata,
							label: unref(i18n).baseText("instanceAi.debug.runDebug.metadata")
						}, null, 8, ["value", "label"])) : createCommentVNode("", true)], 64);
					}), 128))], 2)], 2)) : createCommentVNode("", true),
					systemObservations.value ? (openBlock(), createElementBlock("article", {
						key: 1,
						class: normalizeClass([_ctx.$style.card, _ctx.$style.cardObservations])
					}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardHeader) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.roleLabel) }, "observations", 2)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardBody) }, [createBaseVNode("p", { class: normalizeClass(_ctx.$style.text) }, toDisplayString(systemObservations.value), 3)], 2)], 2)) : createCommentVNode("", true),
					messageBlocks.value.length > 0 ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [createVNode(unref(N8nText_default), {
						size: "small",
						color: "text-light",
						class: normalizeClass(_ctx.$style.stackLabel)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.debug.runDebug.messages")), 1)]),
						_: 1
					}, 8, ["class"]), (openBlock(true), createElementBlock(Fragment, null, renderList(messageBlocks.value, (block, index) => {
						return openBlock(), createElementBlock("article", {
							key: `message-${index}`,
							class: normalizeClass([_ctx.$style.card, _ctx.$style[getCardClass(block.role)]])
						}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardHeader) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.roleLabel) }, toDisplayString(block.role), 3)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardBody) }, [block.segments?.length ? (openBlock(), createBlock(InstanceAiDebugMessageBody_default, {
							key: 0,
							segments: block.segments,
							"workflow-snapshots-by-tool-call-id": workflowSnapshotsByToolCallId.value
						}, null, 8, ["segments", "workflow-snapshots-by-tool-call-id"])) : (openBlock(), createElementBlock("p", {
							key: 1,
							class: normalizeClass(_ctx.$style.text)
						}, toDisplayString(block.content), 3)), block.metadata ? (openBlock(), createBlock(InstanceAiDebugJsonPanel_default, {
							key: 2,
							value: block.metadata,
							label: unref(i18n).baseText("instanceAi.debug.runDebug.metadata")
						}, null, 8, ["value", "label"])) : createCommentVNode("", true)], 2)], 2);
					}), 128))], 64)) : createCommentVNode("", true),
					inputExtras.value ? (openBlock(), createBlock(InstanceAiDebugJsonPanel_default, {
						key: 3,
						value: inputExtras.value,
						label: unref(i18n).baseText("instanceAi.debug.runDebug.inputExtras")
					}, null, 8, ["value", "label"])) : createCommentVNode("", true)
				], 2)) : createCommentVNode("", true)], 2)) : createCommentVNode("", true),
				__props.output ? (openBlock(), createElementBlock("section", {
					key: 1,
					ref_key: "outputSectionRef",
					ref: outputSectionRef,
					"data-test-id": "instance-ai-llm-step-output",
					class: normalizeClass(_ctx.$style.section)
				}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.sectionHeader) }, [createVNode(unref(N8nText_default), {
					tag: "h3",
					size: "small",
					bold: "",
					color: "text-dark",
					class: normalizeClass(_ctx.$style.sectionTitle)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.debug.runDebug.output")), 1)]),
					_: 1
				}, 8, ["class"]), finishReason.value || usageSummary.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.statsBar)
				}, [finishReason.value ? (openBlock(), createElementBlock("span", {
					key: 0,
					class: normalizeClass(_ctx.$style.statChip)
				}, toDisplayString(finishReason.value), 3)) : createCommentVNode("", true), usageSummary.value ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 1,
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(usageSummary.value.label), 1)]),
					_: 1
				})) : createCommentVNode("", true)], 2)) : createCommentVNode("", true)], 2), hasOutputContent.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.stack)
				}, [
					(openBlock(true), createElementBlock(Fragment, null, renderList(outputDisplayBlocks.value, (block, index) => {
						return openBlock(), createElementBlock("article", {
							key: `output-${index}`,
							class: normalizeClass([_ctx.$style.card, _ctx.$style[getCardClass(block.role)]])
						}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardHeader) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.roleLabel) }, toDisplayString(block.role), 3)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardBody) }, [block.segments?.length ? (openBlock(), createBlock(InstanceAiDebugMessageBody_default, {
							key: 0,
							segments: block.segments,
							"workflow-snapshots-by-tool-call-id": workflowSnapshotsByToolCallId.value
						}, null, 8, ["segments", "workflow-snapshots-by-tool-call-id"])) : (openBlock(), createElementBlock("p", {
							key: 1,
							class: normalizeClass(_ctx.$style.text)
						}, toDisplayString(block.content), 3)), block.metadata ? (openBlock(), createBlock(InstanceAiDebugJsonPanel_default, {
							key: 2,
							value: block.metadata,
							label: unref(i18n).baseText("instanceAi.debug.runDebug.metadata")
						}, null, 8, ["value", "label"])) : createCommentVNode("", true)], 2)], 2);
					}), 128)),
					usageSummary.value ? (openBlock(), createBlock(InstanceAiDebugJsonPanel_default, {
						key: 0,
						value: usageSummary.value.metadata,
						label: unref(i18n).baseText("instanceAi.debug.runDebug.usage")
					}, null, 8, ["value", "label"])) : createCommentVNode("", true),
					outputExtras.value ? (openBlock(), createBlock(InstanceAiDebugJsonPanel_default, {
						key: 1,
						value: outputExtras.value,
						label: unref(i18n).baseText("instanceAi.debug.runDebug.outputMetadata")
					}, null, 8, ["value", "label"])) : createCommentVNode("", true)
				], 2)) : createCommentVNode("", true)], 2)) : createCommentVNode("", true),
				!__props.input && !__props.output ? (openBlock(), createElementBlock("div", {
					key: 2,
					class: normalizeClass(_ctx.$style.emptyState)
				}, toDisplayString(unref(i18n).baseText("instanceAi.debug.runDebug.noStepDetail")), 3)) : createCommentVNode("", true)
			], 2);
		};
	}
});
var InstanceAiLlmStepDetail_vue_vue_type_style_index_0_lang_module_default = {
	root: "_root_1jtkc_126",
	section: "_section_1jtkc_132",
	sectionHeader: "_sectionHeader_1jtkc_143",
	sectionTitle: "_sectionTitle_1jtkc_151",
	statsBar: "_statsBar_1jtkc_155",
	statChip: "_statChip_1jtkc_162",
	stack: "_stack_1jtkc_170",
	stackLabel: "_stackLabel_1jtkc_176",
	card: "_card_1jtkc_180",
	expandableCard: "_expandableCard_1jtkc_187",
	cardHeader: "_cardHeader_1jtkc_187",
	headerMeta: "_headerMeta_1jtkc_194",
	cardSystem: "_cardSystem_1jtkc_204",
	cardObservations: "_cardObservations_1jtkc_208",
	cardUser: "_cardUser_1jtkc_212",
	cardAssistant: "_cardAssistant_1jtkc_216",
	cardTool: "_cardTool_1jtkc_220",
	cardMuted: "_cardMuted_1jtkc_224",
	cardBody: "_cardBody_1jtkc_242",
	roleLabel: "_roleLabel_1jtkc_249",
	metaLabel: "_metaLabel_1jtkc_256",
	text: "_text_1jtkc_261",
	emptyState: "_emptyState_1jtkc_270"
};
var InstanceAiLlmStepDetail_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiLlmStepDetail_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiLlmStepDetail_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiRunWorkflowCodeSection.vue?vue&type=script&setup=true&lang.ts
var InstanceAiRunWorkflowCodeSection_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiRunWorkflowCodeSection",
	props: {
		snapshots: {},
		showDivider: { type: Boolean }
	},
	setup(__props) {
		const i18n = useI18n();
		function formatCharCount(count) {
			return i18n.baseText("instanceAi.debug.runDebug.charCount", { interpolate: { count: count.toLocaleString() } });
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("section", { class: normalizeClass([_ctx.$style.section, __props.showDivider && _ctx.$style.sectionDivider]) }, [createVNode(unref(N8nText_default), {
				tag: "h3",
				size: "small",
				bold: "",
				color: "text-dark",
				class: normalizeClass(_ctx.$style.sectionTitle)
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.debug.tab.workflowCode")), 1)]),
				_: 1
			}, 8, ["class"]), createBaseVNode("div", { class: normalizeClass(_ctx.$style.stack) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.snapshots, (snapshot, index) => {
				return openBlock(), createElementBlock("details", {
					key: `${snapshot.capturedAt}-${index}`,
					class: normalizeClass([
						_ctx.$style.card,
						_ctx.$style.cardWorkflow,
						_ctx.$style.expandableCard
					]),
					"data-test-id": "instance-ai-run-workflow-code-snapshot"
				}, [createBaseVNode("summary", { class: normalizeClass(_ctx.$style.cardHeader) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.roleLabel) }, toDisplayString(snapshot.source), 3), createBaseVNode("span", { class: normalizeClass(_ctx.$style.headerMeta) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.metaLabel) }, toDisplayString(formatCharCount(snapshot.code.length)), 3)], 2)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardBody) }, [createVNode(InstanceAiDebugWorkflowCodeSnapshot_default, { snapshot }, null, 8, ["snapshot"])], 2)], 2);
			}), 128))], 2)], 2);
		};
	}
});
var InstanceAiRunWorkflowCodeSection_vue_vue_type_style_index_0_lang_module_default = {
	section: "_section_11ai3_126",
	sectionDivider: "_sectionDivider_11ai3_132",
	sectionTitle: "_sectionTitle_11ai3_137",
	stack: "_stack_11ai3_141",
	card: "_card_11ai3_147",
	expandableCard: "_expandableCard_11ai3_154",
	cardHeader: "_cardHeader_11ai3_154",
	headerMeta: "_headerMeta_11ai3_161",
	cardWorkflow: "_cardWorkflow_11ai3_171",
	cardBody: "_cardBody_11ai3_192",
	roleLabel: "_roleLabel_11ai3_196",
	metaLabel: "_metaLabel_11ai3_203"
};
var InstanceAiRunWorkflowCodeSection_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiRunWorkflowCodeSection_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiRunWorkflowCodeSection_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiLlmStepsModal.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$11 = ["onClick"];
var _hoisted_2$7 = ["onClick"];
var InstanceAiLlmStepsModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiLlmStepsModal",
	props: { open: { type: Boolean } },
	emits: ["update:open"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const debugStore = useInstanceAiDebugStore();
		const currentThread = useThread();
		const selectedStepNumber = ref(null);
		const detailPaneRef = ref(null);
		const stepDetailRef = ref(null);
		const steps = computed(() => debugStore.runDebug?.steps ?? []);
		const runWorkflowCode = computed(() => debugStore.runDebug?.workflowCode ?? []);
		const selectedRunId = computed(() => debugStore.selectedRunId);
		const selectedStep = computed(() => {
			if (selectedStepNumber.value === null) return void 0;
			return steps.value.find((step) => step.stepNumber === selectedStepNumber.value);
		});
		const stepSummaries = computed(() => steps.value.map((step) => ({
			stepNumber: step.stepNumber,
			summary: parseStepSummary(step.input, step.output)
		})));
		watch(() => props.open, (isOpen) => {
			if (!isOpen) {
				selectedStepNumber.value = null;
				return;
			}
			selectedStepNumber.value = steps.value[0]?.stepNumber ?? null;
		});
		watch(() => steps.value, (nextSteps) => {
			if (!props.open || nextSteps.length === 0) {
				selectedStepNumber.value = null;
				return;
			}
			if (selectedStepNumber.value === null || !nextSteps.some((step) => step.stepNumber === selectedStepNumber.value)) selectedStepNumber.value = nextSteps[0]?.stepNumber ?? null;
		});
		function handleOpenChange(open) {
			emit("update:open", open);
		}
		function selectStep(stepNumber) {
			selectedStepNumber.value = stepNumber;
		}
		async function scrollDetailToOutput() {
			await nextTick();
			if (!detailPaneRef.value || !stepDetailRef.value) return;
			stepDetailRef.value.scrollToOutput(detailPaneRef.value);
		}
		watch([selectedStep, () => debugStore.isLoadingRunDebug], ([step, isLoading]) => {
			if (!props.open || !step || isLoading) return;
			scrollDetailToOutput();
		});
		async function selectRun(runId) {
			if (runId === selectedRunId.value) return;
			await debugStore.loadRunDebug(runId);
			selectedStepNumber.value = debugStore.runDebug?.steps[0]?.stepNumber ?? null;
		}
		function formatTimestamp(ms) {
			try {
				return new Date(ms).toLocaleTimeString("en-US", {
					hour12: false,
					fractionalSecondDigits: 3
				});
			} catch {
				return String(ms);
			}
		}
		function formatStepCount(count) {
			return i18n.baseText("instanceAi.debug.runDebug.stepCount", { interpolate: { count: String(count) } });
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Dialog_default), {
				open: __props.open,
				size: "cover",
				"data-test-id": "instance-ai-llm-steps-modal",
				"onUpdate:open": handleOpenChange
			}, {
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.shell) }, [
					createVNode(unref(DialogHeader_default), { class: normalizeClass(_ctx.$style.header) }, {
						default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.headerMain) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.headerTitleRow) }, [createVNode(unref(DialogTitle_default), null, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.debug.runDebug.stepsModalTitle")), 1)]),
							_: 1
						}), steps.value.length > 0 ? (openBlock(), createElementBlock("span", {
							key: 0,
							class: normalizeClass(_ctx.$style.stepCount)
						}, toDisplayString(formatStepCount(steps.value.length)), 3)) : createCommentVNode("", true)], 2), selectedRunId.value ? (openBlock(), createBlock(unref(N8nText_default), {
							key: 0,
							size: "small",
							color: "text-light",
							class: normalizeClass(_ctx.$style.runId)
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(selectedRunId.value), 1)]),
							_: 1
						}, 8, ["class"])) : createCommentVNode("", true)], 2)]),
						_: 1
					}, 8, ["class"]),
					unref(debugStore).threadDebugRuns.length === 0 ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.emptyState)
					}, toDisplayString(unref(i18n).baseText("instanceAi.debug.runDebug.noRuns")), 3)) : (openBlock(), createElementBlock("div", {
						key: 1,
						class: normalizeClass(_ctx.$style.layout)
					}, [
						createBaseVNode("aside", { class: normalizeClass([_ctx.$style.sidebar, _ctx.$style.runsSidebar]) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.sidebarHeader) }, [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.debug.runDebug.runs")) + " ", 1), createBaseVNode("span", { class: normalizeClass(_ctx.$style.sidebarCount) }, toDisplayString(unref(debugStore).threadDebugRuns.length), 3)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.runList) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(debugStore).threadDebugRuns, (run, index) => {
							return openBlock(), createElementBlock("button", {
								key: run.runId,
								type: "button",
								class: normalizeClass([_ctx.$style.runButton, selectedRunId.value === run.runId && _ctx.$style.runButtonSelected]),
								"data-test-id": "instance-ai-llm-steps-modal-run",
								onClick: ($event) => selectRun(run.runId)
							}, [
								createBaseVNode("div", { class: normalizeClass(_ctx.$style.runTopRow) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.runNumber) }, toDisplayString(index + 1), 3), createBaseVNode("div", { class: normalizeClass(_ctx.$style.runTopRowRight) }, [run.runId === unref(currentThread).activeRunId ? (openBlock(), createElementBlock("span", {
									key: 0,
									class: normalizeClass(_ctx.$style.currentBadge)
								}, toDisplayString(unref(i18n).baseText("instanceAi.debug.threads.current")), 3)) : createCommentVNode("", true), createBaseVNode("span", { class: normalizeClass(_ctx.$style.runIdShort) }, toDisplayString(run.runId.slice(0, 12)), 3)], 2)], 2),
								run.label ? (openBlock(), createElementBlock("span", {
									key: 0,
									class: normalizeClass(_ctx.$style.runLabel)
								}, toDisplayString(run.label), 3)) : createCommentVNode("", true),
								createBaseVNode("span", { class: normalizeClass(_ctx.$style.runMeta) }, toDisplayString(formatStepCount(run.stepCount)) + " · " + toDisplayString(formatTimestamp(run.startedAt)), 3)
							], 10, _hoisted_1$11);
						}), 128))], 2)], 2),
						createBaseVNode("aside", { class: normalizeClass([_ctx.$style.sidebar, _ctx.$style.stepsSidebar]) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.sidebarHeader) }, [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.debug.tab.llmSteps")) + " ", 1), createBaseVNode("span", { class: normalizeClass(_ctx.$style.sidebarCount) }, toDisplayString(steps.value.length), 3)], 2), steps.value.length === 0 ? (openBlock(), createElementBlock("div", {
							key: 0,
							class: normalizeClass(_ctx.$style.sidebarEmpty)
						}, toDisplayString(unref(i18n).baseText("instanceAi.debug.runDebug.noSteps")), 3)) : (openBlock(), createElementBlock("div", {
							key: 1,
							class: normalizeClass(_ctx.$style.stepList)
						}, [(openBlock(true), createElementBlock(Fragment, null, renderList(stepSummaries.value, ({ stepNumber, summary }) => {
							return openBlock(), createElementBlock("button", {
								key: stepNumber,
								type: "button",
								class: normalizeClass([_ctx.$style.stepButton, selectedStepNumber.value === stepNumber && _ctx.$style.stepButtonSelected]),
								onClick: ($event) => selectStep(stepNumber)
							}, [
								createBaseVNode("div", { class: normalizeClass(_ctx.$style.stepTopRow) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.stepNumber) }, toDisplayString(stepNumber + 1), 3), summary.finishReason ? (openBlock(), createElementBlock("span", {
									key: 0,
									class: normalizeClass(_ctx.$style.finishReason)
								}, toDisplayString(summary.finishReason), 3)) : createCommentVNode("", true)], 2),
								summary.toolNames.length > 0 ? (openBlock(), createElementBlock("span", {
									key: 0,
									class: normalizeClass(_ctx.$style.stepTools)
								}, toDisplayString(summary.toolNames.join(", ")), 3)) : summary.messagePreview ? (openBlock(), createElementBlock("span", {
									key: 1,
									class: normalizeClass(_ctx.$style.stepPreview)
								}, toDisplayString(summary.messagePreview), 3)) : createCommentVNode("", true),
								summary.usageLabel ? (openBlock(), createElementBlock("span", {
									key: 2,
									class: normalizeClass(_ctx.$style.stepUsage)
								}, toDisplayString(summary.usageLabel), 3)) : createCommentVNode("", true)
							], 10, _hoisted_2$7);
						}), 128))], 2))], 2),
						createBaseVNode("div", {
							ref_key: "detailPaneRef",
							ref: detailPaneRef,
							class: normalizeClass(_ctx.$style.detail)
						}, [unref(debugStore).isLoadingRunDebug ? (openBlock(), createElementBlock("div", {
							key: 0,
							class: normalizeClass(_ctx.$style.loadingState)
						}, [createVNode(unref(N8nIcon_default), {
							icon: "spinner",
							color: "primary",
							spin: "",
							size: "small"
						})], 2)) : selectedStep.value || runWorkflowCode.value.length > 0 ? (openBlock(), createElementBlock("div", {
							key: 1,
							class: normalizeClass(_ctx.$style.detailContent)
						}, [selectedStep.value ? (openBlock(), createBlock(InstanceAiLlmStepDetail_default, {
							key: 0,
							ref_key: "stepDetailRef",
							ref: stepDetailRef,
							input: selectedStep.value.input,
							output: selectedStep.value.output,
							"run-steps": steps.value,
							"workflow-code": runWorkflowCode.value
						}, null, 8, [
							"input",
							"output",
							"run-steps",
							"workflow-code"
						])) : createCommentVNode("", true), runWorkflowCode.value.length > 0 ? (openBlock(), createBlock(InstanceAiRunWorkflowCodeSection_default, {
							key: 1,
							snapshots: runWorkflowCode.value,
							"show-divider": Boolean(selectedStep.value)
						}, null, 8, ["snapshots", "show-divider"])) : createCommentVNode("", true)], 2)) : (openBlock(), createElementBlock("div", {
							key: 2,
							class: normalizeClass(_ctx.$style.emptyState)
						}, toDisplayString(unref(i18n).baseText("instanceAi.debug.runDebug.noStepDetail")), 3))], 2)
					], 2)),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.footer) }, [createVNode(unref(N8nButton_default), {
						variant: "outline",
						size: "medium",
						onClick: _cache[0] || (_cache[0] = ($event) => handleOpenChange(false))
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.close")), 1)]),
						_: 1
					})], 2)
				], 2)]),
				_: 1
			}, 8, ["open"]);
		};
	}
});
var InstanceAiLlmStepsModal_vue_vue_type_style_index_0_lang_module_default = {
	shell: "_shell_1y9dc_125",
	header: "_header_1y9dc_135",
	headerMain: "_headerMain_1y9dc_141",
	headerTitleRow: "_headerTitleRow_1y9dc_145",
	runId: "_runId_1y9dc_152",
	stepCount: "_stepCount_1y9dc_158",
	layout: "_layout_1y9dc_164",
	sidebar: "_sidebar_1y9dc_174",
	sidebarHeader: "_sidebarHeader_1y9dc_184",
	sidebarCount: "_sidebarCount_1y9dc_196",
	runList: "_runList_1y9dc_201",
	stepList: "_stepList_1y9dc_202",
	sidebarEmpty: "_sidebarEmpty_1y9dc_211",
	runButton: "_runButton_1y9dc_217",
	stepButton: "_stepButton_1y9dc_218",
	runButtonSelected: "_runButtonSelected_1y9dc_238",
	stepButtonSelected: "_stepButtonSelected_1y9dc_239",
	runTopRow: "_runTopRow_1y9dc_249",
	stepTopRow: "_stepTopRow_1y9dc_250",
	runTopRowRight: "_runTopRowRight_1y9dc_258",
	runNumber: "_runNumber_1y9dc_266",
	stepNumber: "_stepNumber_1y9dc_267",
	currentBadge: "_currentBadge_1y9dc_285",
	runIdShort: "_runIdShort_1y9dc_293",
	runLabel: "_runLabel_1y9dc_302",
	runMeta: "_runMeta_1y9dc_312",
	finishReason: "_finishReason_1y9dc_313",
	stepTools: "_stepTools_1y9dc_314",
	stepPreview: "_stepPreview_1y9dc_315",
	stepUsage: "_stepUsage_1y9dc_316",
	detail: "_detail_1y9dc_328",
	detailContent: "_detailContent_1y9dc_339",
	loadingState: "_loadingState_1y9dc_345",
	emptyState: "_emptyState_1y9dc_353",
	footer: "_footer_1y9dc_360"
};
var InstanceAiLlmStepsModal_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiLlmStepsModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiLlmStepsModal_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiDebugPanel.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$10 = ["data-state"];
var _hoisted_2$6 = ["onClick"];
var _hoisted_3$1 = ["onClick"];
var _hoisted_4$1 = ["onClick"];
var _hoisted_5 = ["onClick"];
var InstanceAiDebugPanel_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiDebugPanel",
	emits: ["close"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const i18n = useI18n();
		const settingsStore = useSettingsStore();
		const currentThread = useThread();
		const debugStore = useInstanceAiDebugStore();
		const isRunDebugEnabled = computed(() => settingsStore.moduleSettings["instance-ai"]?.runDebugEnabled === true);
		const activeTab = ref("events");
		const expandedIndex = ref(null);
		const showLlmStepsModal = ref(false);
		const eventListRef = useTemplateRef("eventList");
		const events = computed(() => currentThread.debugEvents);
		const expandedMessageIndex = ref(null);
		function toggleEvent(index) {
			expandedIndex.value = expandedIndex.value === index ? null : index;
		}
		function toggleMessage(index) {
			expandedMessageIndex.value = expandedMessageIndex.value === index ? null : index;
		}
		async function handleSelectDebugRun(runId) {
			if (activeTab.value === "llmSteps") {
				await debugStore.loadRunDebug(runId);
				if (debugStore.runDebug?.runId === runId) showLlmStepsModal.value = true;
				return;
			}
			debugStore.loadRunDebug(runId);
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
		function formatTimestamp(ms) {
			try {
				return new Date(ms).toLocaleTimeString("en-US", {
					hour12: false,
					fractionalSecondDigits: 3
				});
			} catch {
				return String(ms);
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
		async function refreshRunDebugData() {
			await debugStore.refreshRunDebug(currentThread.id, currentThread.activeRunId);
		}
		function contentPreview(content) {
			if (typeof content === "string") return content.length > 100 ? content.slice(0, 100) + "..." : content;
			const str = JSON.stringify(content);
			return str.length > 100 ? str.slice(0, 100) + "..." : str;
		}
		async function handleCopyTrace() {
			const trace = currentThread.copyFullTrace();
			await navigator.clipboard.writeText(trace);
		}
		watch(() => events.value.length, () => {
			nextTick(() => {
				if (eventListRef.value) eventListRef.value.scrollTop = eventListRef.value.scrollHeight;
			});
		});
		watch(activeTab, (tab) => {
			if (tab === "threads" && debugStore.threads.length === 0) debugStore.loadThreads();
			if (isRunDebugEnabled.value && (tab === "llmSteps" || tab === "workflowCode")) refreshRunDebugData();
		});
		watch(isRunDebugEnabled, (enabled) => {
			if (!enabled && (activeTab.value === "llmSteps" || activeTab.value === "workflowCode")) {
				activeTab.value = "events";
				showLlmStepsModal.value = false;
			}
		});
		watch(() => currentThread.isStreaming, (isStreaming, wasStreaming) => {
			if (isRunDebugEnabled.value && wasStreaming && !isStreaming && (activeTab.value === "llmSteps" || activeTab.value === "workflowCode")) refreshRunDebugData();
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
			for (const msg of currentThread.messages) {
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
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.tabBar) }, [
					createBaseVNode("button", {
						class: normalizeClass([_ctx.$style.tab, activeTab.value === "events" && _ctx.$style.tabActive]),
						onClick: _cache[1] || (_cache[1] = ($event) => activeTab.value = "events")
					}, toDisplayString(unref(i18n).baseText("instanceAi.debug.tab.events")), 3),
					createBaseVNode("button", {
						class: normalizeClass([_ctx.$style.tab, activeTab.value === "threads" && _ctx.$style.tabActive]),
						onClick: _cache[2] || (_cache[2] = ($event) => activeTab.value = "threads")
					}, toDisplayString(unref(i18n).baseText("instanceAi.debug.tab.threads")), 3),
					isRunDebugEnabled.value ? (openBlock(), createElementBlock("button", {
						key: 0,
						class: normalizeClass([_ctx.$style.tab, activeTab.value === "llmSteps" && _ctx.$style.tabActive]),
						onClick: _cache[3] || (_cache[3] = ($event) => activeTab.value = "llmSteps")
					}, toDisplayString(unref(i18n).baseText("instanceAi.debug.tab.llmSteps")), 3)) : createCommentVNode("", true),
					isRunDebugEnabled.value ? (openBlock(), createElementBlock("button", {
						key: 1,
						class: normalizeClass([_ctx.$style.tab, activeTab.value === "workflowCode" && _ctx.$style.tabActive]),
						onClick: _cache[4] || (_cache[4] = ($event) => activeTab.value = "workflowCode")
					}, toDisplayString(unref(i18n).baseText("instanceAi.debug.tab.workflowCode")), 3)) : createCommentVNode("", true)
				], 2),
				activeTab.value === "events" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.statusBar) }, [
						createBaseVNode("span", {
							class: normalizeClass(_ctx.$style.statusDot),
							"data-state": unref(currentThread).sseState
						}, null, 10, _hoisted_1$10),
						createBaseVNode("span", null, "SSE: " + toDisplayString(unref(currentThread).sseState), 1),
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
						}, toDisplayString(unref(formatDebugJson)(entry.event)), 3)) : createCommentVNode("", true)], 10, _hoisted_2$6);
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
						}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.threadRowMain) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.threadTitle) }, toDisplayString(thread.title || thread.id.slice(0, 8)), 3), thread.id === unref(currentThread).id ? (openBlock(), createElementBlock("span", {
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
							}, toDisplayString(unref(formatDebugJson)(msg.content)), 3)) : createCommentVNode("", true)
						], 10, _hoisted_4$1);
					}), 128))], 2)], 64)) : createCommentVNode("", true)
				], 64)) : createCommentVNode("", true),
				isRunDebugEnabled.value && (activeTab.value === "llmSteps" || activeTab.value === "workflowCode") ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.threadListHeader) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.sectionLabel) }, toDisplayString(unref(i18n).baseText("instanceAi.debug.runDebug.selectRun")), 3), createBaseVNode("button", {
						class: normalizeClass(_ctx.$style.copyButton),
						onClick: refreshRunDebugData
					}, toDisplayString(unref(i18n).baseText("instanceAi.debug.runDebug.refresh")), 3)], 2),
					unref(debugStore).isLoadingThreadDebugRuns ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.loadingState)
					}, [createVNode(unref(N8nIcon_default), {
						icon: "spinner",
						color: "primary",
						spin: "",
						size: "small"
					})], 2)) : unref(debugStore).threadDebugRuns.length === 0 ? (openBlock(), createElementBlock("div", {
						key: 1,
						class: normalizeClass(_ctx.$style.emptyState)
					}, toDisplayString(unref(i18n).baseText("instanceAi.debug.runDebug.noRuns")), 3)) : (openBlock(), createElementBlock("div", {
						key: 2,
						class: normalizeClass(_ctx.$style.threadList)
					}, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(debugStore).threadDebugRuns, (run) => {
						return openBlock(), createElementBlock("div", {
							key: run.runId,
							class: normalizeClass([_ctx.$style.threadRow, unref(debugStore).selectedRunId === run.runId && _ctx.$style.threadRowSelected]),
							"data-test-id": "instance-ai-debug-run-row",
							onClick: ($event) => handleSelectDebugRun(run.runId)
						}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.threadRowMain) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.runMeta) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.threadTitle) }, toDisplayString(run.runId.slice(0, 12)), 3), run.label ? (openBlock(), createElementBlock("span", {
							key: 0,
							class: normalizeClass(_ctx.$style.runLabel)
						}, toDisplayString(run.label), 3)) : createCommentVNode("", true)], 2), run.runId === unref(currentThread).activeRunId ? (openBlock(), createElementBlock("span", {
							key: 0,
							class: normalizeClass(_ctx.$style.currentBadge)
						}, toDisplayString(unref(i18n).baseText("instanceAi.debug.threads.current")), 3)) : createCommentVNode("", true)], 2), createBaseVNode("span", { class: normalizeClass(_ctx.$style.threadTime) }, toDisplayString(formatTimestamp(run.startedAt)), 3)], 10, _hoisted_5);
					}), 128))], 2)),
					unref(debugStore).isLoadingRunDebug && activeTab.value === "llmSteps" ? (openBlock(), createElementBlock("div", {
						key: 3,
						class: normalizeClass(_ctx.$style.loadingState)
					}, [createVNode(unref(N8nIcon_default), {
						icon: "spinner",
						color: "primary",
						spin: "",
						size: "small"
					})], 2)) : createCommentVNode("", true),
					unref(debugStore).isLoadingRunDebug && activeTab.value === "workflowCode" ? (openBlock(), createElementBlock("div", {
						key: 4,
						class: normalizeClass(_ctx.$style.loadingState)
					}, [createVNode(unref(N8nIcon_default), {
						icon: "spinner",
						color: "primary",
						spin: "",
						size: "small"
					})], 2)) : unref(debugStore).runDebug && activeTab.value === "workflowCode" ? (openBlock(), createElementBlock(Fragment, { key: 5 }, [unref(debugStore).runDebug.workflowCode.length === 0 ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.emptyState)
					}, toDisplayString(unref(i18n).baseText("instanceAi.debug.runDebug.noWorkflowCode")), 3)) : (openBlock(), createElementBlock("div", {
						key: 1,
						class: normalizeClass([_ctx.$style.threadDetailContent, _ctx.$style.workflowSnapshotList])
					}, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(debugStore).runDebug.workflowCode, (snapshot, wIdx) => {
						return openBlock(), createBlock(InstanceAiDebugWorkflowCodeSnapshot_default, {
							key: `${snapshot.capturedAt}-${wIdx}`,
							snapshot,
							variant: "inline"
						}, null, 8, ["snapshot"]);
					}), 128))], 2))], 64)) : createCommentVNode("", true)
				], 64)) : createCommentVNode("", true),
				isRunDebugEnabled.value ? (openBlock(), createBlock(InstanceAiLlmStepsModal_default, {
					key: 3,
					open: showLlmStepsModal.value,
					"onUpdate:open": _cache[5] || (_cache[5] = ($event) => showLlmStepsModal.value = $event)
				}, null, 8, ["open"])) : createCommentVNode("", true)
			], 2);
		};
	}
});
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiDebugPanel.vue?vue&type=style&index=0&lang.module.scss
var panel$1 = "_panel_1epc9_125";
var header$7 = "_header_1epc9_138";
var headerTitle$1 = "_headerTitle_1epc9_146";
var headerActions$1 = "_headerActions_1epc9_154";
var copyButton = "_copyButton_1epc9_160";
var tabBar = "_tabBar_1epc9_174";
var tab$1 = "_tab_1epc9_174";
var tabActive = "_tabActive_1epc9_196";
var statusBar = "_statusBar_1epc9_202";
var statusDot = "_statusDot_1epc9_212";
var eventCount = "_eventCount_1epc9_225";
var timingSection = "_timingSection_1epc9_229";
var timingTitle = "_timingTitle_1epc9_234";
var timingRow = "_timingRow_1epc9_243";
var timingName = "_timingName_1epc9_250";
var timingDuration = "_timingDuration_1epc9_255";
var eventList = "_eventList_1epc9_260";
var eventRow = "_eventRow_1epc9_266";
var eventHeader = "_eventHeader_1epc9_275";
var eventTime = "_eventTime_1epc9_281";
var eventType = "_eventType_1epc9_286";
var error = "_error_1epc9_293";
var finish = "_finish_1epc9_298";
var start = "_start_1epc9_303";
var tool = "_tool_1epc9_308";
var text = "_text_1epc9_313";
var confirm = "_confirm_1epc9_318";
var eventPayload = "_eventPayload_1epc9_328";
var threadListHeader = "_threadListHeader_1epc9_344";
var sectionLabel = "_sectionLabel_1epc9_352";
var loadingState = "_loadingState_1epc9_360";
var emptyState$1 = "_emptyState_1epc9_368";
var threadList = "_threadList_1epc9_344";
var threadRow = "_threadRow_1epc9_381";
var threadRowSelected = "_threadRowSelected_1epc9_390";
var threadRowMain = "_threadRowMain_1epc9_397";
var runMeta = "_runMeta_1epc9_404";
var runLabel = "_runLabel_1epc9_412";
var threadTitle = "_threadTitle_1epc9_420";
var currentBadge = "_currentBadge_1epc9_429";
var threadTime = "_threadTime_1epc9_437";
var threadDetailHeader = "_threadDetailHeader_1epc9_442";
var threadDetailContent = "_threadDetailContent_1epc9_447";
var workflowSnapshotList = "_workflowSnapshotList_1epc9_453";
var messageRow = "_messageRow_1epc9_460";
var messageHeader = "_messageHeader_1epc9_469";
var messagePreview = "_messagePreview_1epc9_476";
var InstanceAiDebugPanel_vue_vue_type_style_index_0_lang_module_default = {
	panel: panel$1,
	header: header$7,
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
	error,
	finish,
	start,
	tool,
	text,
	confirm,
	"default": "_default_1epc9_323",
	eventPayload,
	threadListHeader,
	sectionLabel,
	loadingState,
	emptyState: emptyState$1,
	threadList,
	threadRow,
	threadRowSelected,
	threadRowMain,
	runMeta,
	runLabel,
	threadTitle,
	currentBadge,
	threadTime,
	threadDetailHeader,
	threadDetailContent,
	workflowSnapshotList,
	messageRow,
	messageHeader,
	messagePreview
};
var InstanceAiDebugPanel_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiDebugPanel_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiDebugPanel_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/instanceAiMcp.telemetry.ts
function useInstanceAiMcpTelemetry() {
	const telemetry = useTelemetry();
	return {
		trackAddMenuMcpSelected() {
			telemetry.track("Instance AI mcp add menu selected");
		},
		trackModalOpened() {
			telemetry.track("Instance AI mcp modal opened");
		},
		trackSettingsOpened(serverSlug) {
			telemetry.track("Instance AI mcp settings opened", { server_slug: serverSlug });
		}
	};
}
//#endregion
//#region src/features/ai/instanceAi/components/ConnectionRow.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$9 = ["src"];
var _hoisted_2$5 = ["title"];
var ConnectionRow_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ConnectionRow",
	props: {
		name: {},
		subtitle: {},
		icon: {},
		status: {},
		actions: {},
		dropdownPortalTarget: {}
	},
	emits: [
		"connect",
		"disconnect",
		"openSettings",
		"remove"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const iconSource = computed(() => {
			if (typeof props.icon === "string") return {
				type: "icon",
				name: props.icon
			};
			return props.icon;
		});
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
				createBaseVNode("span", { class: normalizeClass(_ctx.$style.iconWrap) }, [iconSource.value.type === "file" ? (openBlock(), createElementBlock("img", {
					key: 0,
					src: iconSource.value.src,
					alt: "",
					"aria-hidden": "true",
					loading: "lazy",
					referrerpolicy: "no-referrer",
					class: normalizeClass(_ctx.$style.iconImage)
				}, null, 10, _hoisted_1$9)) : (openBlock(), createBlock(unref(N8nIcon_default), {
					key: 1,
					icon: iconSource.value.name,
					size: "large",
					class: normalizeClass(_ctx.$style.icon)
				}, null, 8, ["icon", "class"]))], 2),
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
				}, null, 10, _hoisted_2$5),
				menuItems.value.length > 0 ? (openBlock(), createBlock(unref(DropdownMenu_default), {
					key: 0,
					items: menuItems.value,
					placement: "bottom-end",
					"portal-target": __props.dropdownPortalTarget,
					onSelect: handleSelect
				}, null, 8, ["items", "portal-target"])) : createCommentVNode("", true)
			], 2);
		};
	}
});
var ConnectionRow_vue_vue_type_style_index_0_lang_module_default = {
	row: "_row_1lmkz_125",
	iconWrap: "_iconWrap_1lmkz_133",
	icon: "_icon_1lmkz_133",
	iconImage: "_iconImage_1lmkz_147",
	labels: "_labels_1lmkz_154",
	name: "_name_1lmkz_162",
	dot: "_dot_1lmkz_168",
	dotConnected: "_dotConnected_1lmkz_175",
	dotWaiting: "_dotWaiting_1lmkz_179",
	dotDisconnected: "_dotDisconnected_1lmkz_183"
};
var ConnectionRow_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ConnectionRow_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ConnectionRow_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/ConnectionsCard.vue?vue&type=script&setup=true&lang.ts
var ConnectionsCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ConnectionsCard",
	props: { dropdownPortalTarget: {} },
	setup(__props) {
		const i18n = useI18n();
		const uiStore = useUIStore();
		const store = useInstanceAiSettingsStore();
		const mcpStore = useInstanceAiMcpStore();
		const mcpTelemetry = useInstanceAiMcpTelemetry();
		const { isFeatureEnabled: isMcpFeatureEnabled } = useInstanceAiMcpConnectionsExperiment();
		const props = __props;
		const isMcpEnabled = computed(() => isMcpFeatureEnabled.value && store.settings?.mcpAccessEnabled);
		const singletonConnections = computed(() => store.connections);
		const mcpConnections = computed(() => isMcpEnabled.value ? mcpStore.connections : []);
		const isVisible = computed(() => !store.isLocalGatewayDisabledByAdmin && (store.gatewayStatusLoaded || store.isLocalGatewayDisabled));
		store.fetch();
		if (isMcpFeatureEnabled.value) mcpStore.fetchConnections();
		const ICON_MAP = {
			"computer-use": "mouse-pointer",
			"browser-use": "globe",
			mcp: "mcp"
		};
		const baseAddItems = computed(() => {
			const items = [{
				id: "computer-use",
				label: i18n.baseText("instanceAi.connections.add.computerUse"),
				icon: {
					type: "icon",
					value: ICON_MAP["computer-use"]
				}
			}];
			if (isMcpEnabled.value) items.push({
				id: "mcp",
				label: i18n.baseText("instanceAi.connections.add.mcp"),
				icon: {
					type: "icon",
					value: ICON_MAP.mcp
				}
			});
			return items;
		});
		const addItems = computed(() => {
			const addedSingletonConnections = new Set(singletonConnections.value.map((connection) => connection.type));
			return baseAddItems.value.filter((item) => {
				if (store.isLocalGatewayDisabledByAdmin) return false;
				if (item.id === "computer-use" && addedSingletonConnections.has(item.id)) return false;
				return true;
			});
		});
		const hasAddableConnection = computed(() => addItems.value.length > 0);
		const addConnectionLabel = computed(() => i18n.baseText("instanceAi.connections.add.label"));
		function getSingletonRowActions(type, status) {
			if (type === "browser-use") return ["settings"];
			if (status === "connected") return [
				"settings",
				"disconnect",
				"remove"
			];
			return ["connect", "remove"];
		}
		const MCP_ROW_ACTIONS = ["settings", "remove"];
		function getIconForConnection(icons) {
			const icon = iconForTool(icons, uiStore.appliedTheme);
			if (icon.type === "icon") return icon.name;
			return icon;
		}
		async function openSingletonModal(type) {
			if (type === "computer-use" && !store.isLocalGatewayDisabledByAdmin && store.isLocalGatewayDisabled) await store.persistLocalGatewayPreference(false);
			if (type === "computer-use") uiStore.openModal(INSTANCE_AI_COMPUTER_USE_SETUP_MODAL_KEY);
			else uiStore.openModal(INSTANCE_AI_BROWSER_USE_SETUP_MODAL_KEY);
		}
		function openToolsConnectionModal() {
			mcpTelemetry.trackAddMenuMcpSelected();
			mcpTelemetry.trackModalOpened();
			uiStore.openModal(INSTANCE_AI_TOOLS_CONNECTION_MODAL_KEY);
		}
		function handleAddSelect(type) {
			if (type === "mcp") {
				openToolsConnectionModal();
				return;
			}
			openSingletonModal(type);
		}
		async function handleSingletonDisconnect(type) {
			if (type === "computer-use") await store.disconnectComputerUse();
		}
		async function handleSingletonRemove(type) {
			if (type === "computer-use") await store.removeComputerUse();
		}
		async function handleMcpDisconnect(connectionId) {
			await mcpStore.disconnect(connectionId);
		}
		function openMcpSettings(connectionId) {
			const connection = mcpStore.connections.find((c) => c.id === connectionId);
			if (connection) mcpTelemetry.trackSettingsOpened(connection.serverSlug);
			mcpTelemetry.trackModalOpened();
			uiStore.openModalWithData({
				name: INSTANCE_AI_TOOLS_CONNECTION_MODAL_KEY,
				data: { connectionId }
			});
		}
		return (_ctx, _cache) => {
			return isVisible.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.section)
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [createVNode(unref(N8nHeading_default), {
				tag: "h3",
				size: "small",
				class: normalizeClass(_ctx.$style.sectionTitle)
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.connections.title")), 1)]),
				_: 1
			}, 8, ["class"]), hasAddableConnection.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.headerActions)
			}, [createVNode(unref(DropdownMenu_default), {
				items: addItems.value,
				placement: "bottom-end",
				"portal-target": props.dropdownPortalTarget,
				"data-test-id": "instance-ai-connections-add",
				onSelect: handleAddSelect
			}, {
				trigger: withCtx(() => [createVNode(unref(N8nIconButton_default), {
					icon: "plus",
					variant: "ghost",
					size: "small",
					"icon-size": "medium",
					"aria-label": addConnectionLabel.value
				}, null, 8, ["aria-label"])]),
				_: 1
			}, 8, ["items", "portal-target"])], 2)) : createCommentVNode("", true)], 2), singletonConnections.value.length > 0 || mcpConnections.value.length > 0 ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.list)
			}, [(openBlock(true), createElementBlock(Fragment, null, renderList(singletonConnections.value, (conn) => {
				return openBlock(), createBlock(ConnectionRow_default, {
					key: conn.type,
					name: conn.name,
					subtitle: conn.subtitle,
					icon: ICON_MAP[conn.type],
					status: conn.status,
					actions: getSingletonRowActions(conn.type, conn.status),
					"dropdown-portal-target": props.dropdownPortalTarget,
					onConnect: ($event) => openSingletonModal(conn.type),
					onDisconnect: ($event) => handleSingletonDisconnect(conn.type),
					onOpenSettings: ($event) => openSingletonModal(conn.type),
					onRemove: ($event) => handleSingletonRemove(conn.type)
				}, null, 8, [
					"name",
					"subtitle",
					"icon",
					"status",
					"actions",
					"dropdown-portal-target",
					"onConnect",
					"onDisconnect",
					"onOpenSettings",
					"onRemove"
				]);
			}), 128)), (openBlock(true), createElementBlock(Fragment, null, renderList(mcpConnections.value, (conn) => {
				return openBlock(), createBlock(ConnectionRow_default, {
					key: conn.id,
					name: conn.serverTitle,
					subtitle: conn.credentialName,
					icon: getIconForConnection(conn.serverIcons),
					status: "connected",
					actions: MCP_ROW_ACTIONS,
					"dropdown-portal-target": props.dropdownPortalTarget,
					onOpenSettings: ($event) => openMcpSettings(conn.id),
					onRemove: ($event) => handleMcpDisconnect(conn.id)
				}, null, 8, [
					"name",
					"subtitle",
					"icon",
					"dropdown-portal-target",
					"onOpenSettings",
					"onRemove"
				]);
			}), 128))], 2)) : (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.empty)
			}, [createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("instanceAi.connections.empty.title")), 1), createVNode(unref(N8nButton_default), {
				label: unref(i18n).baseText("instanceAi.connections.empty.cta"),
				variant: "outline",
				size: "small",
				disabled: unref(store).isLocalGatewayDisabledByAdmin,
				"data-test-id": "instance-ai-connections-empty-cta",
				onClick: _cache[0] || (_cache[0] = ($event) => openSingletonModal("computer-use"))
			}, null, 8, ["label", "disabled"])], 2))], 2)) : createCommentVNode("", true);
		};
	}
});
var ConnectionsCard_vue_vue_type_style_index_0_lang_module_default = {
	section: "_section_1dysf_125",
	header: "_header_1dysf_141",
	sectionTitle: "_sectionTitle_1dysf_150",
	headerActions: "_headerActions_1dysf_154",
	list: "_list_1dysf_160",
	empty: "_empty_1dysf_165"
};
var ConnectionsCard_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ConnectionsCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ConnectionsCard_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiArtifactsPanel.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$8 = [
	"href",
	"title",
	"aria-label",
	"onClick"
];
var _hoisted_2$4 = ["title"];
var InstanceAiArtifactsPanel_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiArtifactsPanel",
	setup(__props) {
		const projectsStore = useProjectsStore();
		const i18n = useI18n();
		const thread = useThread();
		const project = computed(() => {
			const match = projectsStore.myProjects.find((p) => p.id === thread.projectId);
			if (!match) return {
				name: i18n.baseText("instanceAi.artifactsPanel.unknownProject"),
				icon: {
					type: "icon",
					value: "circle-help"
				}
			};
			const isPersonal = match.type === "personal";
			const icon = isIconOrEmoji(match.icon) ? match.icon : {
				type: "icon",
				value: "layers"
			};
			return {
				name: isPersonal ? i18n.baseText("instanceAi.artifactsPanel.personalSpace") : match.name,
				icon: isPersonal ? {
					type: "icon",
					value: "user-round"
				} : icon
			};
		});
		const panelRef = ref();
		const openPreview = inject("openWorkflowPreview", void 0);
		const openDataTablePreview = inject("openDataTablePreview", void 0);
		function handleArtifactClick(artifact, e) {
			if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
			if (artifact.type === "workflow" && artifact.id) {
				if (!openPreview) return;
				e.preventDefault();
				openPreview(artifact.id);
			} else if (artifact.type === "data-table" && artifact.id) {
				if (!artifact.projectId || !openDataTablePreview) return;
				e.preventDefault();
				openDataTablePreview(artifact.id, artifact.projectId);
			}
		}
		const tasks = computed(() => thread.currentTasks);
		const visibleTasks = computed(() => tasks.value?.tasks ?? []);
		const hasTasks = computed(() => visibleTasks.value.length > 0);
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
				icon: "circle-x",
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
		function artifactHref(artifact) {
			if (artifact.type === "workflow") return `/workflow/${artifact.id}`;
			if (artifact.type === "data-table") return artifact.projectId ? `/projects/${artifact.projectId}/datatables/${artifact.id}` : "/data-tables";
			return "#";
		}
		function openArtifactLabel(name) {
			return i18n.baseText("instanceAi.artifactsPanel.openArtifact", { interpolate: { name } });
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("aside", {
				ref_key: "panelRef",
				ref: panelRef,
				class: normalizeClass(_ctx.$style.panel),
				"data-test-id": "instance-ai-artifacts-sidebar"
			}, [createBaseVNode("div", {
				class: normalizeClass(_ctx.$style.group),
				"data-test-id": "instance-ai-artifacts-sidebar-group"
			}, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.section) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.sectionHeader) }, [createVNode(unref(N8nHeading_default), {
					tag: "h3",
					size: "small",
					class: normalizeClass(_ctx.$style.sectionTitle)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.artifactsPanel.project")), 1)]),
					_: 1
				}, 8, ["class"])], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.artifactList) }, [createBaseVNode("div", { class: normalizeClass([_ctx.$style.artifactRow]) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.artifactIconWrap) }, [createVNode(ProjectIcon_default, {
					icon: project.value.icon,
					size: "small",
					"border-less": ""
				}, null, 8, ["icon"])], 2), createBaseVNode("span", { class: normalizeClass(_ctx.$style.artifactName) }, toDisplayString(project.value.name), 3)], 2)], 2)], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.section) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.sectionHeader) }, [createVNode(unref(N8nHeading_default), {
					tag: "h3",
					size: "small",
					class: normalizeClass(_ctx.$style.sectionTitle)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.artifactsPanel.title")), 1)]),
					_: 1
				}, 8, ["class"])], 2), artifacts.value.length > 0 ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.artifactList)
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(artifacts.value, (artifact) => {
					return openBlock(), createElementBlock("a", {
						key: artifact.id,
						href: artifactHref(artifact),
						class: normalizeClass([_ctx.$style.artifactRow, artifact.archived && _ctx.$style.artifactRowArchived]),
						title: artifact.name,
						"aria-label": openArtifactLabel(artifact.name),
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
					], 10, _hoisted_1$8);
				}), 128))], 2)) : (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.emptyState)
				}, [createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("instanceAi.artifactsPanel.noArtifacts")), 1)], 2))], 2),
				hasTasks.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.section)
				}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.sectionHeader) }, [createVNode(unref(N8nHeading_default), {
					tag: "h3",
					size: "small",
					class: normalizeClass(_ctx.$style.sectionTitle)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.artifactsPanel.tasks")), 1)]),
					_: 1
				}, 8, ["class"])], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.taskList) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(visibleTasks.value, (task) => {
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
					}, toDisplayString(task.description), 11, _hoisted_2$4)], 2);
				}), 128))], 2)], 2)) : createCommentVNode("", true),
				createVNode(ConnectionsCard_default, { "dropdown-portal-target": panelRef.value }, null, 8, ["dropdown-portal-target"])
			], 2)], 2);
		};
	}
});
var InstanceAiArtifactsPanel_vue_vue_type_style_index_0_lang_module_default = {
	panel: "_panel_1pinj_125",
	group: "_group_1pinj_135",
	section: "_section_1pinj_143",
	sectionHeader: "_sectionHeader_1pinj_164",
	sectionTitle: "_sectionTitle_1pinj_173",
	artifactList: "_artifactList_1pinj_178",
	artifactRow: "_artifactRow_1pinj_183",
	artifactIconWrap: "_artifactIconWrap_1pinj_205",
	artifactIcon: "_artifactIcon_1pinj_205",
	artifactName: "_artifactName_1pinj_216",
	artifactRowArchived: "_artifactRowArchived_1pinj_227",
	archivedBadge: "_archivedBadge_1pinj_234",
	emptyState: "_emptyState_1pinj_244",
	taskList: "_taskList_1pinj_255",
	task: "_task_1pinj_255",
	doneTask: "_doneTask_1pinj_270",
	failedTask: "_failedTask_1pinj_275",
	cancelledTask: "_cancelledTask_1pinj_279",
	taskDescription: "_taskDescription_1pinj_283",
	todoIcon: "_todoIcon_1pinj_292",
	inProgressIcon: "_inProgressIcon_1pinj_296",
	doneIcon: "_doneIcon_1pinj_300",
	failedIcon: "_failedIcon_1pinj_307",
	cancelledIcon: "_cancelledIcon_1pinj_311"
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
		const ROLE_LABELS = { "workflow-builder": "Building workflow" };
		function deriveActivity(messages) {
			const lastMsg = [...messages].reverse().find((m) => m.role === "assistant" && (m.isStreaming || (m.agentTree?.children.some(isActiveBuilderAgent) ?? false)));
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
		const isVisible = computed(() => thread.isStreaming || collectActiveBuilderAgents(thread.messages).length > 0);
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
			return openBlock(), createBlock(Transition, { name: "status-bar" }, {
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
			});
		};
	}
});
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiStatusBar.vue?vue&type=style&index=0&lang.module.scss
var bar = "_bar_dcg0c_341";
var muted = "_muted_dcg0c_351";
var label$2 = "_label_dcg0c_354";
var glyph = "_glyph_dcg0c_359";
var dot = "_dot_dcg0c_364";
var opacityPulse = "_opacityPulse_dcg0c_1";
var separator = "_separator_dcg0c_386";
var detail = "_detail_dcg0c_390";
var elapsed = "_elapsed_dcg0c_394";
var shimmer = "_shimmer_dcg0c_1";
var spin = "_spin_dcg0c_1";
var popoverIn = "_popoverIn_dcg0c_1";
var fadeIn = "_fadeIn_dcg0c_1";
var collapsibleSlideDown = "_collapsibleSlideDown_dcg0c_1";
var collapsibleSlideUp = "_collapsibleSlideUp_dcg0c_1";
var pulseGlow = "_pulseGlow_dcg0c_1";
var pulseGlowDelayed = "_pulseGlowDelayed_dcg0c_1";
var fade = "_fade_dcg0c_1";
var fadeInUp = "_fadeInUp_dcg0c_1";
var fadeInDown = "_fadeInDown_dcg0c_1";
var fadeInLeft = "_fadeInLeft_dcg0c_1";
var fadeInRight = "_fadeInRight_dcg0c_1";
var fadeOut = "_fadeOut_dcg0c_1";
var fadeOutDown = "_fadeOutDown_dcg0c_1";
var fadeOutUp = "_fadeOutUp_dcg0c_1";
var fadeOutLeft = "_fadeOutLeft_dcg0c_1";
var fadeOutRight = "_fadeOutRight_dcg0c_1";
var ping = "_ping_dcg0c_1";
var blinkBackground = "_blinkBackground_dcg0c_1";
var typingBlink = "_typingBlink_dcg0c_1";
var InstanceAiStatusBar_vue_vue_type_style_index_0_lang_module_default = {
	bar,
	muted,
	label: label$2,
	glyph,
	dot,
	opacityPulse,
	separator,
	detail,
	elapsed,
	shimmer,
	spin,
	"skeleton-pulse": "_skeleton-pulse_dcg0c_1",
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
	ping,
	blinkBackground,
	typingBlink
};
var InstanceAiStatusBar_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiStatusBar_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiStatusBar_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/ApprovalOptionList.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$7 = ["aria-activedescendant"];
var _hoisted_2$3 = [
	"id",
	"aria-selected",
	"data-test-id",
	"onClick",
	"onMouseenter"
];
var ApprovalOptionList_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ApprovalOptionList",
	props: { options: {} },
	emits: ["select"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const containerRef = useTemplateRef("container");
		const highlightedIndex = ref(0);
		watch(() => props.options.length, (length) => {
			if (highlightedIndex.value >= length) highlightedIndex.value = Math.max(0, length - 1);
		});
		onMounted(() => {
			containerRef.value?.focus();
		});
		function onKeydown(event) {
			if (props.options.length === 0) return;
			if (event.key === "ArrowDown") {
				event.preventDefault();
				highlightedIndex.value = Math.min(props.options.length - 1, highlightedIndex.value + 1);
				return;
			}
			if (event.key === "ArrowUp") {
				event.preventDefault();
				highlightedIndex.value = Math.max(0, highlightedIndex.value - 1);
				return;
			}
			if (event.key === "Enter") {
				event.preventDefault();
				const option = props.options[highlightedIndex.value];
				if (option) emit("select", option.key);
			}
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(ConfirmationFooter_default, {
				layout: "column",
				class: normalizeClass(_ctx.$style.footer)
			}, {
				default: withCtx(() => [createBaseVNode("div", {
					ref: "container",
					class: normalizeClass(_ctx.$style.list),
					role: "listbox",
					tabindex: "0",
					"aria-activedescendant": __props.options[highlightedIndex.value] ? `approval-option-${__props.options[highlightedIndex.value].key}` : void 0,
					onKeydown
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.options, (option, idx) => {
					return openBlock(), createElementBlock("button", {
						id: `approval-option-${option.key}`,
						key: option.key,
						type: "button",
						role: "option",
						"aria-selected": highlightedIndex.value === idx,
						class: normalizeClass([
							_ctx.$style.row,
							highlightedIndex.value === idx && _ctx.$style.highlighted,
							option.destructive && _ctx.$style.rowDestructive
						]),
						"data-test-id": option.testId,
						tabindex: "-1",
						onClick: ($event) => emit("select", option.key),
						onMouseenter: ($event) => highlightedIndex.value = idx
					}, [
						createVNode(unref(N8nIcon_default), {
							class: normalizeClass(_ctx.$style.leadingIcon),
							icon: option.icon,
							size: "large"
						}, null, 8, ["class", "icon"]),
						createBaseVNode("span", { class: normalizeClass(_ctx.$style.label) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.labelStrong) }, toDisplayString(option.label), 3), option.suffix ? (openBlock(), createElementBlock("span", {
							key: 0,
							class: normalizeClass(_ctx.$style.labelMuted)
						}, toDisplayString(option.suffix), 3)) : createCommentVNode("", true)], 2),
						option.withArrow !== false ? (openBlock(), createElementBlock("span", {
							key: 0,
							class: normalizeClass(_ctx.$style.trailingIndicator)
						}, [createVNode(unref(N8nIcon_default), {
							class: normalizeClass(_ctx.$style.trailingIcon),
							icon: "arrow-right",
							size: "large",
							"stroke-width": 2.5
						}, null, 8, ["class"])], 2)) : createCommentVNode("", true)
					], 42, _hoisted_2$3);
				}), 128))], 42, _hoisted_1$7)]),
				_: 1
			}, 8, ["class"]);
		};
	}
});
var ApprovalOptionList_vue_vue_type_style_index_0_lang_module_default = {
	list: "_list_z6avb_125",
	footer: "_footer_z6avb_131",
	row: "_row_z6avb_135",
	highlighted: "_highlighted_z6avb_151",
	trailingIndicator: "_trailingIndicator_z6avb_154",
	rowDestructive: "_rowDestructive_z6avb_158",
	leadingIcon: "_leadingIcon_z6avb_162",
	label: "_label_z6avb_175",
	labelStrong: "_labelStrong_z6avb_184",
	labelMuted: "_labelMuted_z6avb_188",
	trailingIcon: "_trailingIcon_z6avb_207"
};
var ApprovalOptionList_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ApprovalOptionList_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ApprovalOptionList_vue_vue_type_style_index_0_lang_module_default }]]);
var ConfirmationPreview_vue_vue_type_style_index_0_lang_module_default = { preview: "_preview_1ecj8_125" };
//#endregion
//#region src/features/ai/instanceAi/components/ConfirmationPreview.vue
var _sfc_main = {};
function _sfc_render(_ctx, _cache) {
	return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.preview) }, [renderSlot(_ctx.$slots, "default")], 2);
}
var ConfirmationPreview_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render], ["__cssModules", { "$style": ConfirmationPreview_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/DomainAccessApproval.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$6 = { key: 0 };
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
		const options = computed(() => {
			const list = [];
			if (!isDestructive.value) list.push({
				key: "allow_domain",
				icon: "check",
				label: persistentLabel.value,
				suffix: i18n.baseText("instanceAi.confirmation.alwaysAllowSuffix"),
				testId: "domain-access-allow-domain"
			});
			list.push({
				key: "allow_once",
				icon: "check",
				label: i18n.baseText("instanceAi.domainAccess.allowOnce"),
				destructive: isDestructive.value,
				testId: "domain-access-allow-once"
			});
			list.push({
				key: "deny",
				icon: "ban",
				label: i18n.baseText("instanceAi.domainAccess.deny"),
				withArrow: false,
				testId: "domain-access-deny"
			});
			return list;
		});
		function handleAction(approved, domainAccessAction) {
			resolved.value = true;
			thread.resolveConfirmation(props.requestId, approved ? "approved" : "denied");
			thread.confirmAction(props.requestId, approved && domainAccessAction ? {
				kind: "domainAccessApprove",
				domainAccessAction
			} : { kind: "domainAccessDeny" });
		}
		function onSelect(key) {
			if (key === "deny") {
				handleAction(false);
				return;
			}
			if (key === "allow_once" || key === "allow_domain" || key === "allow_all") handleAction(true, key);
		}
		return (_ctx, _cache) => {
			return !resolved.value ? (openBlock(), createElementBlock("div", _hoisted_1$6, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.body) }, [createVNode(unref(N8nText_default), {
				tag: "div",
				size: "medium",
				bold: ""
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(promptText.value), 1)]),
				_: 1
			}), createVNode(ConfirmationPreview_default, null, {
				default: withCtx(() => [createTextVNode(toDisplayString(previewText.value), 1)]),
				_: 1
			})], 2), createVNode(ApprovalOptionList_default, {
				options: options.value,
				onSelect
			}, null, 8, ["options"])])) : createCommentVNode("", true);
		};
	}
});
var DomainAccessApproval_vue_vue_type_style_index_0_lang_module_default = { body: "_body_ynbwf_125" };
var DomainAccessApproval_default = /* @__PURE__ */ _plugin_vue_export_helper_default(DomainAccessApproval_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": DomainAccessApproval_vue_vue_type_style_index_0_lang_module_default }]]);
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
				thread_id: thread.id,
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
			uiStore.openNewCredential(req.credentialType, false, false, props.projectId, req.suggestedName, void 0, void 0, { closeOnSave: true });
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
				thread_id: thread.id,
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
var _hoisted_1$5 = [
	"data-option-index",
	"disabled",
	"onClick",
	"onMouseenter"
];
var _hoisted_2$2 = ["data-option-index"];
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
					], 42, _hoisted_1$5);
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
				])], 42, _hoisted_2$2)], 2)) : currentQuestion.value.type === "multi" ? (openBlock(), createElementBlock("div", {
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
			thread_id: deps.thread.id,
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
	const workflowId = computed(() => opts.workflowId.value);
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
		workflowId,
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
		const documentId = computed(() => createWorkflowDocumentId(ctx.workflowId.value ?? "instance-ai-workflow-setup", props.section.id));
		const workflowDocumentStore = computed(() => useWorkflowDocumentStore(documentId.value));
		watch(displayNode, (node) => {
			workflowDocumentStore.value.setNodes([node]);
		}, {
			immediate: true,
			deep: true
		});
		function disposeStores(id) {
			disposeNDVStore(useNDVStore(id));
			disposeWorkflowDocumentStore(useWorkflowDocumentStore(id));
		}
		watch(documentId, (_newId, oldId) => {
			if (oldId) disposeStores(oldId);
		});
		onScopeDispose(() => {
			disposeStores(documentId.value);
		});
		provide(ExpressionLocalResolveContextSymbol, computed(() => ({
			localResolve: true,
			nodeName: displayNode.value.name,
			additionalKeys: {}
		})));
		provide(WorkflowDocumentStoreKey, workflowDocumentStore);
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
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.body) }, [
				credentialType.value ? (openBlock(), createBlock(FreeAiCreditsCallout_default, {
					key: 0,
					"credential-type-name": credentialType.value,
					"telemetry-source": "instanceAiWorkflowSetup"
				}, null, 8, ["credential-type-name"])) : createCommentVNode("", true),
				credentialType.value ? (openBlock(), createBlock(NodeCredentials_default, {
					key: 1,
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
				])) : createCommentVNode("", true),
				parameterDefinitions.value.length > 0 ? (openBlock(), createElementBlock("div", {
					key: 2,
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
				])], 2)) : createCommentVNode("", true)
			], 2);
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
var _hoisted_1$4 = [
	"aria-expanded",
	"aria-controls",
	"onClick"
];
var _hoisted_2$1 = ["id"];
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
					], 10, _hoisted_1$4), unref(expandedSections)[section.id] ? (openBlock(), createElementBlock("div", {
						key: 0,
						id: `workflow-setup-section-body-${section.id}`,
						class: normalizeClass(_ctx.$style.sectionContent),
						"data-test-id": "instance-ai-workflow-setup-section-body"
					}, [createVNode(WorkflowSetupSectionBody_default, { section }, null, 8, ["section"])], 10, _hoisted_2$1)) : createCommentVNode("", true)], 2);
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
var _hoisted_1$3 = ["data-test-id"];
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
			})], 10, _hoisted_1$3);
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
var _hoisted_1$2 = { "data-test-id": "instance-ai-workflow-setup" };
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
			return openBlock(), createElementBlock("div", _hoisted_1$2, [unref(ctx).isReady.value && unref(ctx).terminalState.value ? (openBlock(), createBlock(WorkflowSetupStatus_default, {
				key: 0,
				state: unref(ctx).terminalState.value
			}, null, 8, ["state"])) : unref(ctx).isReady.value && unref(ctx).steps.value.length ? (openBlock(), createBlock(WorkflowSetupWizard_default, { key: 1 })) : createCommentVNode("", true)]);
		};
	}
});
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiConfirmationPanel.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = { key: 2 };
/**
* Filter pending confirmations to those that belong in this panel mount.
*
* - `inline`: every non-floating item (questions/plan/text/setup/etc.) in
*   chronological order — these forms coexist comfortably in the chat
*   flow.
* - `floating`: only the **oldest** floating item. We intentionally do not
*   stack: the floating panel replaces the chat input, and stacking would
*   shove the input far up the screen. The user must resolve the visible
*   card before the next one appears.
*/
var InstanceAiConfirmationPanel_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiConfirmationPanel",
	props: { kind: {} },
	setup(__props) {
		const props = __props;
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
				thread_id: thread.id,
				input_thread_id: conf.inputThreadId ?? "",
				instance_id: rootStore.instanceId,
				type: getConfirmationType(conf),
				provided_inputs: providedInputs,
				skipped_inputs: skippedInputs,
				...extra
			};
			telemetry.track("User finished providing input", eventProps);
		}
		const chunks = computed(() => {
			if (props.kind === "inline") {
				const result = [];
				for (const item of thread.pendingConfirmations) {
					if (isPendingItemFloating(item)) continue;
					result.push({
						type: "standalone",
						item
					});
				}
				return result;
			}
			for (const item of thread.pendingConfirmations) {
				if (!isPendingItemFloating(item)) continue;
				return [{
					type: "floating",
					item
				}];
			}
			return [];
		});
		function isDestructive(item) {
			return item.toolCall.confirmation.severity === "destructive";
		}
		/**
		* Title for the floating approval. We resolve a short imperative phrase
		* (e.g. "archive workflow") via i18n keyed by the tool name and optional
		* action — `instanceAi.tools.{tool}.{action}.imperative`. When that key
		* exists we render the unified "Allow AI Assistant to {action}?" prompt;
		* otherwise we fall back to the tool's display label. Doing the lookup on
		* the frontend keeps the action phrase translatable without sending
		* English strings over the wire.
		*/
		function buildApprovalTitle(item) {
			const { toolName, args } = item.toolCall;
			const action = typeof args?.action === "string" ? args.action : void 0;
			const imperativeKey = action ? `instanceAi.tools.${toolName}.${action}.imperative` : `instanceAi.tools.${toolName}.imperative`;
			const phrase = i18n.baseText(imperativeKey);
			if (phrase !== imperativeKey) return i18n.baseText("instanceAi.confirmation.allowPrompt", { interpolate: { action: phrase } });
			return getToolLabel(toolName, args);
		}
		/**
		* Subtitle for the floating approval. Tools send a short resource line;
		* we still defensively trim at the first `?` so any legacy tool whose
		* message includes a trailing explanation doesn't bloat the card.
		*/
		function buildApprovalSubtitle(item) {
			const message = item.toolCall.confirmation.message ?? "";
			const idx = message.indexOf("?");
			return idx === -1 ? message : message.slice(0, idx + 1);
		}
		/**
		* Build the floating-approval option list. Destructive confirmations hide
		* "Always allow" — by design, irreversible actions must be opted into one
		* at a time.
		*/
		function buildApprovalOptions(item) {
			const destructive = isDestructive(item);
			const options = [];
			if (!destructive) options.push({
				key: "always-allow",
				icon: "check-check",
				label: i18n.baseText("instanceAi.confirmation.alwaysAllow"),
				suffix: i18n.baseText("instanceAi.confirmation.alwaysAllowSuffix"),
				testId: "instance-ai-panel-confirm-always-allow"
			});
			options.push({
				key: "allow-once",
				icon: "check",
				label: i18n.baseText("instanceAi.confirmation.approve"),
				destructive,
				testId: "instance-ai-panel-confirm-approve"
			});
			options.push({
				key: "deny",
				icon: "ban",
				label: i18n.baseText("instanceAi.confirmation.deny"),
				testId: "instance-ai-panel-confirm-deny"
			});
			return options;
		}
		function handleApprovalSelect(item, key) {
			switch (key) {
				case "always-allow":
					handleAlwaysAllow(item);
					return;
				case "allow-once":
					handleConfirm(item, true);
					return;
				case "deny": handleConfirm(item, false);
			}
		}
		const textInputValues = ref({});
		const inFlightConfirmations = /* @__PURE__ */ new Set();
		async function handleConfirm(item, approved) {
			const conf = item.toolCall.confirmation;
			if (thread.resolvedConfirmationIds.has(conf.requestId)) return;
			if (inFlightConfirmations.has(conf.requestId)) return;
			inFlightConfirmations.add(conf.requestId);
			try {
				if (!await thread.confirmAction(conf.requestId, {
					kind: "approval",
					approved
				})) return;
				const alwaysAllowAvailable = !isDestructive(item);
				trackInputCompleted(conf, [{
					label: conf.message,
					options: alwaysAllowAvailable ? [
						"approve",
						"deny",
						"approve_always"
					] : ["approve", "deny"],
					option_chosen: approved ? "approve" : "deny"
				}], []);
				thread.resolveConfirmation(conf.requestId, approved ? "approved" : "denied");
			} finally {
				inFlightConfirmations.delete(conf.requestId);
			}
		}
		async function handleAlwaysAllow(item) {
			const conf = item.toolCall.confirmation;
			if (thread.resolvedConfirmationIds.has(conf.requestId)) return;
			if (inFlightConfirmations.has(conf.requestId)) return;
			inFlightConfirmations.add(conf.requestId);
			try {
				if (!await thread.confirmAction(conf.requestId, {
					kind: "approval",
					approved: true,
					scope: "session"
				})) return;
				thread.addAlwaysAllowKey(item.toolCall.toolName, item.toolCall.args ?? {});
				trackInputCompleted(conf, [{
					label: conf.message,
					options: [
						"approve",
						"deny",
						"approve_always"
					],
					option_chosen: "approve_always"
				}], []);
				thread.resolveConfirmation(conf.requestId, "approved");
			} finally {
				inFlightConfirmations.delete(conf.requestId);
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
		const PLAN_REVIEW_OPTIONS = [
			"approve",
			"ask-for-edits",
			"deny"
		];
		function handlePlanApprove(conf, numTasks) {
			trackInputCompleted(conf, [{
				label: "plan",
				options: [...PLAN_REVIEW_OPTIONS],
				option_chosen: "approve"
			}], [], {
				num_tasks: numTasks,
				plan_feedback_type: "accept"
			});
			thread.resolveConfirmation(conf.requestId, "approved");
			thread.confirmAction(conf.requestId, {
				kind: "approval",
				approved: true
			});
		}
		function handlePlanAskForEdits(conf, numTasks) {
			thread.startPlanEdit({
				requestId: conf.requestId,
				inputThreadId: conf.inputThreadId,
				taskCount: numTasks
			});
		}
		function handlePlanDeny(conf, numTasks) {
			trackInputCompleted(conf, [{
				label: "plan",
				options: [...PLAN_REVIEW_OPTIONS],
				option_chosen: "deny"
			}], [], {
				num_tasks: numTasks,
				plan_feedback_type: "deny"
			});
			thread.resolveConfirmation(conf.requestId, "denied");
			thread.confirmAction(conf.requestId, { kind: "planDeny" });
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(TransitionGroup, { name: "confirmation-slide" }, {
				default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(chunks.value, (chunk) => {
					return openBlock(), createElementBlock(Fragment, { key: chunk.item.toolCall.confirmation.requestId }, [chunk.type === "standalone" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [chunk.item.toolCall.confirmation.setupRequests?.length ? (openBlock(), createBlock(InstanceAiWorkflowSetup_default, {
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
						onAskForEdits: ($event) => handlePlanAskForEdits(chunk.item.toolCall.confirmation, (chunk.item.toolCall.args?.tasks ?? []).length),
						onDeny: ($event) => handlePlanDeny(chunk.item.toolCall.confirmation, (chunk.item.toolCall.args?.tasks ?? []).length)
					}, null, 8, [
						"class",
						"planned-tasks",
						"message",
						"onApprove",
						"onAskForEdits",
						"onDeny"
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
						key: "floating-" + chunk.item.toolCall.confirmation.requestId,
						class: normalizeClass([_ctx.$style.root, _ctx.$style.floatingRoot]),
						"data-test-id": "instance-ai-confirmation-panel"
					}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.items) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.item) }, [chunk.item.toolCall.confirmation.domainAccess ? (openBlock(), createBlock(DomainAccessApproval_default, {
						key: 0,
						"request-id": chunk.item.toolCall.confirmation.requestId,
						url: chunk.item.toolCall.confirmation.domainAccess.url,
						host: chunk.item.toolCall.confirmation.domainAccess.host,
						severity: chunk.item.toolCall.confirmation.severity
					}, null, 8, [
						"request-id",
						"url",
						"host",
						"severity"
					])) : chunk.item.toolCall.confirmation.webSearch ? (openBlock(), createBlock(DomainAccessApproval_default, {
						key: 1,
						"request-id": chunk.item.toolCall.confirmation.requestId,
						query: chunk.item.toolCall.confirmation.webSearch.query,
						severity: chunk.item.toolCall.confirmation.severity
					}, null, 8, [
						"request-id",
						"query",
						"severity"
					])) : (openBlock(), createElementBlock("div", _hoisted_1$1, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.approvalRow) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.approvalRowBody) }, [createVNode(unref(N8nText_default), {
						size: "large",
						bold: ""
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(buildApprovalTitle(chunk.item)), 1)]),
						_: 2
					}, 1024), createVNode(ConfirmationPreview_default, null, {
						default: withCtx(() => [createTextVNode(toDisplayString(buildApprovalSubtitle(chunk.item)), 1)]),
						_: 2
					}, 1024)], 2), createVNode(ApprovalOptionList_default, {
						options: buildApprovalOptions(chunk.item),
						onSelect: (key) => handleApprovalSelect(chunk.item, key)
					}, null, 8, ["options", "onSelect"])], 2)]))], 2)], 2)], 2))], 64);
				}), 128))]),
				_: 1
			});
		};
	}
});
var InstanceAiConfirmationPanel_vue_vue_type_style_index_0_lang_module_default = {
	confirmation: "_confirmation_521or_125",
	root: "_root_521or_130",
	floatingRoot: "_floatingRoot_521or_137",
	items: "_items_521or_142",
	item: "_item_521or_142",
	approvalRow: "_approvalRow_521or_151",
	approvalRowBody: "_approvalRowBody_521or_159",
	textInputRow: "_textInputRow_521or_165",
	continueRow: "_continueRow_521or_172",
	textCard: "_textCard_521or_178"
};
var InstanceAiConfirmationPanel_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiConfirmationPanel_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiConfirmationPanel_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiFixWithAiPanel.vue?vue&type=script&setup=true&lang.ts
var InstanceAiFixWithAiPanel_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiFixWithAiPanel",
	props: {
		nodeName: {},
		errorMessage: {},
		failedCount: { default: 1 }
	},
	emits: ["fix-with-ai", "dismiss"],
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const isErrorDetailsOpen = ref(false);
		const title = computed(() => props.failedCount > 1 ? i18n.baseText("instanceAi.fixWithAi.notice.title.multiple", { interpolate: { count: props.failedCount } }) : i18n.baseText("instanceAi.fixWithAi.notice.title.single", { interpolate: { nodeName: props.nodeName } }));
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.root),
				role: "alert",
				"data-test-id": "instance-ai-fix-with-ai-panel"
			}, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [createVNode(unref(N8nIcon_default), {
					icon: "circle-x",
					size: "medium",
					class: normalizeClass(_ctx.$style.headerIcon)
				}, null, 8, ["class"]), createVNode(unref(N8nText_default), {
					bold: "",
					tag: "span",
					class: normalizeClass(_ctx.$style.title)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(title.value), 1)]),
					_: 1
				}, 8, ["class"])], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.body) }, [createVNode(unref(CollapsibleRoot_default), {
					open: isErrorDetailsOpen.value,
					"onUpdate:open": _cache[0] || (_cache[0] = ($event) => isErrorDetailsOpen.value = $event)
				}, {
					default: withCtx(() => [createVNode(unref(CollapsibleTrigger_default), { "as-child": "" }, {
						default: withCtx(() => [createBaseVNode("button", {
							type: "button",
							class: normalizeClass(_ctx.$style.toggle),
							"data-test-id": "instance-ai-fix-with-ai-error-toggle"
						}, [createVNode(unref(N8nIcon_default), {
							icon: isErrorDetailsOpen.value ? "chevron-down" : "chevron-right",
							size: "small"
						}, null, 8, ["icon"]), createVNode(unref(N8nText_default), { size: "small" }, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.fixWithAi.errorDetails")), 1)]),
							_: 1
						})], 2)]),
						_: 1
					}), createVNode(AnimatedCollapsibleContent_default, null, {
						default: withCtx(() => [createBaseVNode("pre", { class: normalizeClass(_ctx.$style.codeBlock) }, [createBaseVNode("code", null, toDisplayString(__props.errorMessage), 1)], 2)]),
						_: 1
					})]),
					_: 1
				}, 8, ["open"])], 2),
				createVNode(ConfirmationFooter_default, {
					layout: "row-end",
					bordered: ""
				}, {
					default: withCtx(() => [createVNode(unref(N8nButton_default), {
						variant: "outline",
						size: "medium",
						"data-test-id": "instance-ai-fix-with-ai-dismiss",
						onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("dismiss"))
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.fixWithAi.notice.dismiss")), 1)]),
						_: 1
					}), createVNode(unref(N8nButton_default), {
						variant: "solid",
						size: "medium",
						icon: "sparkles",
						"data-test-id": "instance-ai-fix-with-ai-button",
						onClick: _cache[2] || (_cache[2] = ($event) => _ctx.$emit("fix-with-ai"))
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceAi.fixWithAi.button")), 1)]),
						_: 1
					})]),
					_: 1
				})
			], 2);
		};
	}
});
var InstanceAiFixWithAiPanel_vue_vue_type_style_index_0_lang_module_default = {
	root: "_root_pb3ct_125",
	header: "_header_pb3ct_134",
	headerIcon: "_headerIcon_pb3ct_142",
	title: "_title_pb3ct_147",
	body: "_body_pb3ct_152",
	toggle: "_toggle_pb3ct_156",
	codeBlock: "_codeBlock_pb3ct_172"
};
var InstanceAiFixWithAiPanel_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiFixWithAiPanel_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiFixWithAiPanel_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiPreviewTabBar.vue?vue&type=script&setup=true&lang.ts
var InstanceAiPreviewTabBar_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiPreviewTabBar",
	props: {
		tabs: {},
		activeTabId: {},
		isExpanded: {
			type: Boolean,
			default: false
		},
		previewToggleLabel: { default: void 0 }
	},
	emits: ["togglePreview", "toggleExpanded"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const clipboard = useClipboard();
		const toast = useToast();
		const tabListRef = ref(null);
		const sizeToggleLabel = computed(() => i18n.baseText(props.isExpanded ? "instanceAi.previewTabBar.collapse" : "instanceAi.previewTabBar.expand"));
		function getTabListElement() {
			const tabList = tabListRef.value;
			if (tabList instanceof HTMLElement) return tabList;
			return tabList?.$el ?? null;
		}
		function scrollTabIntoView(tabId) {
			const tabList = getTabListElement();
			if (!tabList) return;
			const activeTab = Array.from(tabList.querySelectorAll("[data-tab-id]")).find((tab) => tab.dataset.tabId === tabId);
			if (!activeTab) return;
			const tabLeft = activeTab.offsetLeft;
			const tabRight = tabLeft + activeTab.offsetWidth;
			const visibleLeft = tabList.scrollLeft;
			const visibleRight = visibleLeft + tabList.clientWidth;
			const nextScrollLeft = tabLeft < visibleLeft ? tabLeft : tabRight > visibleRight ? tabRight - tabList.clientWidth : void 0;
			if (nextScrollLeft === void 0) return;
			if (typeof tabList.scrollTo === "function") tabList.scrollTo({
				left: nextScrollLeft,
				behavior: "smooth"
			});
			else tabList.scrollLeft = nextScrollLeft;
		}
		watch(() => props.activeTabId, (tabId) => {
			if (!tabId) return;
			nextTick(() => {
				scrollTabIntoView(tabId);
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
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.header) }, [
				__props.previewToggleLabel ? (openBlock(), createBlock(unref(N8nIconButton_default), {
					key: 0,
					icon: "panel-right",
					variant: "ghost",
					size: "medium",
					"aria-label": __props.previewToggleLabel,
					title: __props.previewToggleLabel,
					"aria-pressed": true,
					"data-test-id": "instance-ai-artifacts-preview-toggle",
					onClick: _cache[0] || (_cache[0] = ($event) => emit("togglePreview"))
				}, null, 8, ["aria-label", "title"])) : createCommentVNode("", true),
				createVNode(unref(TabsList_default), {
					ref_key: "tabListRef",
					ref: tabListRef,
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
				}, 8, ["aria-label", "class"]),
				createVNode(unref(N8nIconButton_default), {
					icon: __props.isExpanded ? "minimize-2" : "maximize-2",
					variant: "ghost",
					size: "medium",
					"aria-label": sizeToggleLabel.value,
					title: sizeToggleLabel.value,
					"data-test-id": "instance-ai-preview-expand-toggle",
					onClick: _cache[1] || (_cache[1] = ($event) => emit("toggleExpanded"))
				}, null, 8, [
					"icon",
					"aria-label",
					"title"
				])
			], 2);
		};
	}
});
var InstanceAiPreviewTabBar_vue_vue_type_style_index_0_lang_module_default = {
	header: "_header_pmbqt_149",
	tabList: "_tabList_pmbqt_159",
	scrollfade: "_scrollfade_pmbqt_1",
	tab: "_tab_pmbqt_159",
	label: "_label_pmbqt_198",
	tabsIndicator: "_tabsIndicator_pmbqt_206",
	tabsIndicatorBar: "_tabsIndicatorBar_pmbqt_217",
	contextMenu: "_contextMenu_pmbqt_224",
	contextMenuItem: "_contextMenuItem_pmbqt_234"
};
var InstanceAiPreviewTabBar_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiPreviewTabBar_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiPreviewTabBar_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/app/components/WorkflowCanvasHostBody.vue?vue&type=script&setup=true&lang.ts
var WorkflowCanvasHostBody_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowCanvasHostBody",
	props: {
		workflowId: {},
		refreshKey: {},
		initialWorkflow: {},
		initialExecution: {}
	},
	emits: ["ready", "workflow-loaded"],
	setup(__props, { expose: __expose, emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const currentWorkflowDocumentStore = injectStrict(WorkflowDocumentStoreKey);
		const canvasStore = useCanvasStore();
		const nodeCreatorStore = useNodeCreatorStore();
		const workflowSaveStore = useWorkflowSaveStore();
		const { isLoading, initializeData, initializeWorkflow, openWorkflow, cleanup } = useWorkflowInitialization();
		/**
		* Display-only counterpart of the editor's debug-mode execution loading: shows
		* the hand-off execution snapshot on the canvas. Seeds its per-execution store
		* and marks it the displayed execution — no fetch, since the editor already had
		* the run data and handed it over. A live or pending run always wins — it owns
		* `activeExecutionId`, which we never touch here. Unlike the editor's
		* `applyExecutionData` it has no debug side effects (node matching, pin-data).
		*/
		function showInitialExecution() {
			if (!props.initialExecution) return;
			const executionState = useWorkflowExecutionStateStore(createWorkflowDocumentId(props.workflowId));
			if (executionState.activeExecutionId !== void 0) return;
			const { id } = props.initialExecution;
			useExecutionDataStore(createExecutionDataId(id)).setExecution(props.initialExecution);
			executionState.setDisplayedExecutionId(id);
		}
		async function loadWorkflow(force) {
			if (!force && props.initialWorkflow) {
				await openWorkflow(props.initialWorkflow);
				isLoading.value = false;
			} else await initializeWorkflow(force);
			if (currentWorkflowDocumentStore.value) emit("workflow-loaded", props.workflowId);
		}
		onMounted(async () => {
			await initializeData();
			await loadWorkflow(false);
			showInitialExecution();
			emit("ready");
		});
		watch(() => [props.workflowId, props.refreshKey], async () => {
			await loadWorkflow(true);
		});
		onBeforeUnmount(() => {
			cleanup();
			nodeCreatorStore.isCreateNodeActive = false;
			canvasStore.setHasRangeSelection(false);
			canvasStore.newNodeInsertPosition = null;
			workflowSaveStore.reset();
		});
		function requestFitView() {
			canvasEventBus.emit("fitView");
		}
		__expose({ requestFitView });
		const isReady = computed(() => !isLoading.value && !!currentWorkflowDocumentStore.value);
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.host),
				"data-test-id": "workflow-canvas-host"
			}, [isReady.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
				createVNode(MainHeader_default, { class: normalizeClass(_ctx.$style.header) }, null, 8, ["class"]),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.canvas) }, [createVNode(NodeView_default)], 2),
				createVNode(LogsPanel_default, { class: normalizeClass(_ctx.$style.logs) }, null, 8, ["class"])
			], 64)) : (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.centerState)
			}, [createVNode(unref(N8nIcon_default), {
				icon: "loader-circle",
				size: 80,
				spin: ""
			})], 2))], 2);
		};
	}
});
var WorkflowCanvasHostBody_vue_vue_type_style_index_0_lang_module_default = {
	host: "_host_1etsr_125",
	header: "_header_1etsr_134",
	canvas: "_canvas_1etsr_138",
	logs: "_logs_1etsr_144",
	centerState: "_centerState_1etsr_148"
};
var WorkflowCanvasHostBody_default = /* @__PURE__ */ _plugin_vue_export_helper_default(WorkflowCanvasHostBody_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": WorkflowCanvasHostBody_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/app/components/WorkflowCanvasHost.vue
var WorkflowCanvasHost_default = /* @__PURE__ */ defineComponent({
	__name: "WorkflowCanvasHost",
	props: {
		workflowId: {},
		refreshKey: { default: 0 },
		initialWorkflow: { default: void 0 },
		initialExecution: { default: void 0 }
	},
	emits: ["ready", "workflow-loaded"],
	setup(__props, { expose: __expose, emit: __emit }) {
		const props = __props;
		const emit = __emit;
		provide(WorkflowIdKey, computed(() => props.workflowId));
		provide(WorkflowDocumentStoreKey, shallowRef(null));
		const bodyRef = shallowRef(null);
		function requestFitView() {
			bodyRef.value?.requestFitView();
		}
		__expose({ requestFitView });
		return (_ctx, _cache) => {
			return openBlock(), createBlock(WorkflowCanvasHostBody_default, {
				ref_key: "bodyRef",
				ref: bodyRef,
				"workflow-id": __props.workflowId,
				"refresh-key": __props.refreshKey,
				"initial-workflow": __props.initialWorkflow,
				"initial-execution": __props.initialExecution,
				onReady: _cache[0] || (_cache[0] = ($event) => emit("ready")),
				onWorkflowLoaded: _cache[1] || (_cache[1] = (id) => emit("workflow-loaded", id))
			}, null, 8, [
				"workflow-id",
				"refresh-key",
				"initial-workflow",
				"initial-execution"
			]);
		};
	}
});
//#endregion
//#region src/features/ai/instanceAi/components/InstanceAiWorkflowPreview.vue?vue&type=script&setup=true&lang.ts
var InstanceAiWorkflowPreview_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiWorkflowPreview",
	props: {
		workflowId: {},
		refreshKey: { default: 0 },
		executionResult: { default: void 0 }
	},
	emits: ["workflow-failures"],
	setup(__props, { expose: __expose, emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const hostRef = useTemplateRef("host");
		const workflowsStore = useWorkflowsStore();
		function requestFitView() {
			hostRef.value?.requestFitView();
		}
		__expose({ requestFitView });
		const pushStore = usePushConnectionStore();
		const removeExecutionStartedListener = pushStore.addEventListener((event) => {
			if (event.type !== "executionStarted") return;
			if (event.data.workflowId !== props.workflowId) return;
			useWorkflowExecutionStateStore(createWorkflowDocumentId(props.workflowId)).setActiveExecutionId(null);
		});
		function collectNodeErrors(runData) {
			const errors = [];
			for (const [nodeName, tasks] of Object.entries(runData ?? {})) {
				const error = tasks?.at(-1)?.error;
				if (!error) continue;
				const description = error.description ? ` (${error.description})` : "";
				errors.push({
					nodeName,
					errorMessage: `${error.message ?? "Unknown error"}${description}`
				});
			}
			return errors;
		}
		function collectValidationIssues(workflowId) {
			const docStore = useWorkflowDocumentStore(createWorkflowDocumentId(workflowId));
			const errors = [];
			for (const node of docStore.allNodes) {
				if (!node.issues) continue;
				const messages = nodeIssuesToString(node.issues, node);
				if (messages.length === 0) continue;
				errors.push({
					nodeName: node.name,
					errorMessage: messages.join(" ")
				});
			}
			return errors;
		}
		function reportWorkflowFailures(executionId, workflowId) {
			let errors = collectNodeErrors(useExecutionDataStore(createExecutionDataId(executionId)).executionRunData);
			if (errors.length === 0) errors = collectValidationIssues(workflowId);
			if (errors.length === 0) return;
			emit("workflow-failures", {
				workflowId,
				executionId,
				errors
			});
		}
		let latestExecutionLoadRequest = 0;
		async function showExecutionResult(executionResult) {
			if (!executionResult) return;
			const request = ++latestExecutionLoadRequest;
			let execution;
			try {
				execution = await workflowsStore.fetchExecutionDataById(executionResult.executionId);
			} catch {
				return;
			}
			if (request !== latestExecutionLoadRequest) return;
			if (!execution || execution.workflowId !== props.workflowId) return;
			useExecutionDataStore(createExecutionDataId(execution.id)).setExecution(execution);
			const executionState = useWorkflowExecutionStateStore(createWorkflowDocumentId(props.workflowId));
			const activeExecutionId = executionState.activeExecutionId;
			executionState.setDisplayedExecutionId(execution.id);
			if (activeExecutionId === void 0 || typeof activeExecutionId === "string" && activeExecutionId !== execution.id) executionState.setActiveExecutionId(void 0);
		}
		const removeExecutionFinishedListener = pushStore.addEventListener((event) => {
			if (event.type !== "executionFinished") return;
			if (event.data.workflowId !== props.workflowId) return;
			if (event.data.status !== "error" && event.data.status !== "crashed") return;
			if (event.data.source === "instance_ai") return;
			reportWorkflowFailures(event.data.executionId, event.data.workflowId);
		});
		watch(() => [props.workflowId, props.executionResult?.executionId], () => {
			showExecutionResult(props.executionResult);
		}, { immediate: true });
		onBeforeUnmount(() => {
			removeExecutionStartedListener();
			removeExecutionFinishedListener();
		});
		const thread = useThread();
		const handoff = thread.consumePendingHandoff(props.workflowId);
		const initialWorkflow = handoff?.workflow;
		const initialExecution = handoff?.execution;
		const isAgentEditingThisWorkflow = computed(() => {
			for (const message of thread.messages) {
				if (!message.agentTree) continue;
				if (isAgentEditingWorkflow(message.agentTree, props.workflowId)) return true;
			}
			return false;
		});
		provide(EditorEnabledFeaturesKey, computed(() => ({
			aiAssistant: false,
			aiBuilder: false,
			askAi: false,
			readOnly: isAgentEditingThisWorkflow.value,
			executionSuccessToasts: false,
			executionErrorToasts: false
		})));
		const rootStore = useRootStore();
		provide(InstanceAiEditorCapabilityKey, { openCredential: async (credential) => {
			thread.sendMessage(buildInstanceAiArtifactCredentialQuestion(credential), void 0, rootStore.pushRef);
			return true;
		} });
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.content) }, [createVNode(WorkflowCanvasHost_default, {
				ref: "host",
				"workflow-id": __props.workflowId,
				"refresh-key": __props.refreshKey,
				"initial-workflow": unref(initialWorkflow),
				"initial-execution": unref(initialExecution)
			}, null, 8, [
				"workflow-id",
				"refresh-key",
				"initial-workflow",
				"initial-execution"
			])], 2);
		};
	}
});
var InstanceAiWorkflowPreview_vue_vue_type_style_index_0_lang_module_default = { content: "_content_1nzcq_125" };
var InstanceAiWorkflowPreview_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiWorkflowPreview_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiWorkflowPreview_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/ai/instanceAi/fixWithAi.ts
function buildFixWithAiPrompt(context) {
	const i18n = useI18n();
	if (context.errors.length === 1) {
		const { nodeName, errorMessage } = context.errors[0];
		if (context.workflowName) return i18n.baseText("instanceAi.fixWithAi.prompt.singleInWorkflow", { interpolate: {
			nodeName,
			errorMessage,
			workflowName: context.workflowName
		} });
		return i18n.baseText("instanceAi.fixWithAi.prompt.single", { interpolate: {
			nodeName,
			errorMessage
		} });
	}
	const errorList = context.errors.map(({ nodeName, errorMessage }) => i18n.baseText("instanceAi.fixWithAi.prompt.errorLine", { interpolate: {
		nodeName,
		errorMessage
	} })).join("\n");
	if (context.workflowName) return i18n.baseText("instanceAi.fixWithAi.prompt.multipleInWorkflow", { interpolate: {
		errorList,
		workflowName: context.workflowName
	} });
	return i18n.baseText("instanceAi.fixWithAi.prompt.multiple", { interpolate: { errorList } });
}
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
var _hoisted_1 = ["data-layout-transitions-enabled"];
var _hoisted_2 = ["data-expanded"];
var DEFAULT_INSTANCE_AI_SIDEBAR_WIDTH = 260;
var MIN_AVAILABLE_WIDTH_FOR_PINNED_ARTIFACTS_PANEL = 900;
var InstanceAiThreadView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceAiThreadView",
	props: { threadId: {} },
	setup(__props) {
		const props = __props;
		const store = useInstanceAiStore();
		const settingsStore = useInstanceAiSettingsStore();
		const thread = provideThread(props.threadId);
		const { isLowCredits } = storeToRefs(store);
		const rootStore = useRootStore();
		const i18n = useI18n();
		const router = useRouter();
		const { goToUpgrade } = usePageRedirectionHelper();
		const creditBanner = useCreditWarningBanner(isLowCredits);
		const sidebar = useSidebarState();
		const { width: windowWidth } = useWindowSize();
		const { isCollapsed: isMainSidebarCollapsed, sidebarWidth: mainSidebarWidth } = useSidebarLayout();
		const telemetry = useTelemetry();
		const builderAgents = computed(() => collectActiveBuilderAgents(thread.messages));
		const displayedMessages = shallowReactive([]);
		watch(() => thread.messages.filter(messageHasVisibleContent), (next) => {
			if (!(next.length === displayedMessages.length && next.every((msg, i) => msg === displayedMessages[i]))) displayedMessages.splice(0, displayedMessages.length, ...next);
		}, { immediate: true });
		const hasFloatingConfirmation = computed(() => thread.pendingConfirmations.some(isPendingItemFloating));
		const failedRun = ref(null);
		const dismissedExecutionId = ref(null);
		const isChatInProgress = computed(() => thread.isStreaming || thread.isSendingMessage || thread.isAwaitingConfirmation);
		const activeFixWithAiOffer = computed(() => {
			const run = failedRun.value;
			if (!run) return null;
			if (run.executionId === dismissedExecutionId.value) return null;
			if (isChatInProgress.value) return null;
			return {
				...run,
				workflowName: thread.producedArtifacts.get(run.workflowId)?.name
			};
		});
		const currentThreadTitle = computed(() => {
			const threadSummary = store.threads.find((t) => t.id === props.threadId);
			if (threadSummary?.title && threadSummary.title !== "New conversation") return threadSummary.title;
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
		watch(() => thread.activePlanEdit, (next, prev) => {
			if (next && !prev) nextTick(() => chatInputRef.value?.focus());
		});
		const showDebugPanel = ref(false);
		const isDebugEnabled = computed(() => localStorage.getItem("instanceAi.debugMode") === "true");
		const hasPreviewTabs = computed(() => preview.allArtifactTabs.value.length > 0);
		const isArtifactsPanelRevealed = ref(false);
		const isArtifactsPanelDismissedInLayout = ref(false);
		const artifactsPanelTransitionGate = useTransitionGate({ isBlocked: () => thread.isHydratingThread });
		const previewPanelTransitionGate = useTransitionGate({ isBlocked: () => thread.isHydratingThread });
		const isArtifactsPanelTransitionEnabled = artifactsPanelTransitionGate.isEnabled;
		const isPreviewPanelTransitionEnabled = previewPanelTransitionGate.isEnabled;
		const isPreviewPanelTransitioning = ref(false);
		const artifactsPreviewToggleLabel = computed(() => i18n.baseText(preview.isPreviewVisible.value ? "instanceAi.artifactsPanel.hidePreview" : "instanceAi.artifactsPanel.showPreview"));
		const artifactsPanelToggleLabel = computed(() => i18n.baseText(showArtifactsPanel.value ? "instanceAi.artifactsPanel.hidePanel" : "instanceAi.artifactsPanel.showPanel"));
		const artifactsPanelTransitionName = computed(() => isPreviewPanelTransitioning.value ? "artifacts-panel-preview" : "artifacts-panel-fade");
		function toggleArtifactsPreview() {
			if (preview.isPreviewVisible.value) {
				preview.closePreview();
				return;
			}
			const firstTab = preview.allArtifactTabs.value[0];
			if (firstTab) preview.selectTab(firstTab.id);
		}
		function toggleArtifactsPanel() {
			if (!canShowArtifactsPanel.value || preview.isPreviewVisible.value) return;
			if (showArtifactsPanel.value) {
				if (isArtifactsPanelInLayout.value) {
					isArtifactsPanelDismissedInLayout.value = true;
					return;
				}
				isArtifactsPanelRevealed.value = false;
				return;
			}
			if (isArtifactsPanelInLayout.value) {
				isArtifactsPanelDismissedInLayout.value = false;
				return;
			}
			isArtifactsPanelRevealed.value = true;
		}
		function enablePanelTransitionsAfterStableRender() {
			artifactsPanelTransitionGate.enableAfterStableRender();
			previewPanelTransitionGate.enableAfterStableRender();
		}
		function suppressPanelTransitionsUntilStableRender() {
			artifactsPanelTransitionGate.suppressUntilStableRender();
			previewPanelTransitionGate.suppressUntilStableRender();
		}
		const { width: threadAreaWidth } = useElementSize(useTemplateRef("threadArea"));
		const mainSidebarOccupiedWidth = computed(() => isMainSidebarCollapsed.value ? 42 : mainSidebarWidth.value ?? 0);
		const instanceAiSidebarOccupiedWidth = computed(() => sidebar.collapsed.value ? 0 : sidebar.width?.value ?? DEFAULT_INSTANCE_AI_SIDEBAR_WIDTH);
		const availableWidthForPinnedArtifactsPanel = computed(() => windowWidth.value - mainSidebarOccupiedWidth.value - instanceAiSidebarOccupiedWidth.value);
		const isArtifactsPanelInLayout = computed(() => availableWidthForPinnedArtifactsPanel.value >= MIN_AVAILABLE_WIDTH_FOR_PINNED_ARTIFACTS_PANEL);
		const canShowArtifactsPanel = computed(() => thread.hasMessages || Boolean(props.threadId) && thread.isHydratingThread);
		const showArtifactsPanel = computed(() => canShowArtifactsPanel.value && !preview.isPreviewVisible.value && (isArtifactsPanelInLayout.value ? !isArtifactsPanelDismissedInLayout.value : isArtifactsPanelRevealed.value));
		const showArtifactsPanelToggle = computed(() => canShowArtifactsPanel.value && !preview.isPreviewVisible.value);
		const reserveArtifactsPanelLayout = computed(() => showArtifactsPanel.value && isArtifactsPanelInLayout.value);
		const shouldAnimateArtifactsPanel = computed(() => isArtifactsPanelTransitionEnabled.value && isArtifactsPanelInLayout.value);
		const shouldSuppressContentLayoutTransitions = computed(() => !isPreviewPanelTransitionEnabled.value);
		const artifactsPanelSlotRef = useTemplateRef("artifactsPanelSlot");
		const previewPanelWidth = ref(0);
		const isResizingPreview = ref(false);
		const isPreviewExpanded = ref(false);
		const previewMaxWidth = computed(() => Math.round(threadAreaWidth.value / 2));
		const previewPanelStyle = computed(() => isPreviewExpanded.value ? void 0 : { width: `${previewPanelWidth.value}px` });
		function togglePreviewExpanded() {
			isPreviewExpanded.value = !isPreviewExpanded.value;
		}
		watch(previewMaxWidth, (max) => {
			if (previewPanelWidth.value > max) previewPanelWidth.value = max;
		});
		function handlePreviewResize({ width }) {
			previewPanelWidth.value = width;
		}
		function handlePreviewPanelAfterEnter() {
			isPreviewPanelTransitioning.value = false;
			workflowPreviewRef.value?.requestFitView();
		}
		function handlePreviewPanelAfterLeave() {
			isPreviewPanelTransitioning.value = false;
			isPreviewExpanded.value = false;
		}
		watch(preview.isPreviewVisible, (visible, wasVisible) => {
			if (visible !== wasVisible) isPreviewPanelTransitioning.value = isPreviewPanelTransitionEnabled.value;
			if (visible) {
				isArtifactsPanelRevealed.value = false;
				previewPanelWidth.value = Math.round(threadAreaWidth.value / 2);
			}
		}, { flush: "sync" });
		watch(threadAreaWidth, (width) => {
			if (width > 0 && previewPanelWidth.value === 0 && preview.isPreviewVisible.value) previewPanelWidth.value = Math.round(width / 2);
		});
		watch(isArtifactsPanelInLayout, (isInLayout) => {
			isArtifactsPanelRevealed.value = false;
			if (isInLayout) isArtifactsPanelDismissedInLayout.value = false;
		});
		watch(canShowArtifactsPanel, (canShow) => {
			if (!canShow) {
				isArtifactsPanelRevealed.value = false;
				isArtifactsPanelDismissedInLayout.value = false;
			}
		});
		onClickOutside(artifactsPanelSlotRef, () => {
			if (isArtifactsPanelInLayout.value) return;
			isArtifactsPanelRevealed.value = false;
		}, { ignore: ["[data-test-id=\"instance-ai-artifacts-panel-toggle\"]", ".n8n-tooltip"] });
		watch(() => props.threadId, (threadId, previousThreadId) => {
			if (threadId !== previousThreadId) suppressPanelTransitionsUntilStableRender();
		});
		watch(() => thread.isHydratingThread, (isHydrating) => {
			if (isHydrating) {
				artifactsPanelTransitionGate.suppress();
				previewPanelTransitionGate.suppress();
				return;
			}
			suppressPanelTransitionsUntilStableRender();
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
		function focusChatInputIfFocusIsIdle() {
			const activeElement = document.activeElement;
			if (activeElement instanceof HTMLElement && activeElement !== document.body && activeElement !== document.documentElement) return;
			chatInputRef.value?.focus();
		}
		watch(chatInputRef, (el) => {
			if (el) nextTick(focusChatInputIfFocusIsIdle);
		});
		watch(() => props.threadId, (threadId, previousThreadId) => {
			if (threadId !== previousThreadId) {
				userScrolledUp.value = false;
				nextTick(focusChatInputIfFocusIsIdle);
			}
		});
		function reconnectThreadAfterHydration() {
			thread.loadHistoricalMessages().then((hydrationStatus) => {
				if (hydrationStatus === "stale") return;
				thread.loadThreadStatus();
				thread.connectSSE();
				const pending = consumePendingFirstMessage(props.threadId);
				if (pending) thread.sendMessage(pending.message, pending.attachments, rootStore.pushRef);
			});
		}
		async function syncRouteToStore() {
			const requestedThreadId = props.threadId;
			if (!store.threads.length) await store.loadThreads();
			if (requestedThreadId !== props.threadId) return;
			if (!store.threads.some((t) => t.id === requestedThreadId)) {
				router.replace({ name: INSTANCE_AI_VIEW });
				return;
			}
			if (thread.sseState === "disconnected") reconnectThreadAfterHydration();
		}
		onMounted(() => {
			enablePanelTransitionsAfterStableRender();
			syncRouteToStore();
			nextTick(focusChatInputIfFocusIsIdle);
		});
		onUnmounted(() => {
			store.disposeRuntime(props.threadId);
			contentResizeObserver?.disconnect();
		});
		const workflowPreviewRef = useTemplateRef("workflowPreview");
		function handleSubmit(message, attachments) {
			if (!settingsStore.isWorkflowBuilderAvailable) return;
			userScrolledUp.value = false;
			const planEdit = thread.activePlanEdit;
			if (planEdit) {
				thread.cancelPlanEdit();
				telemetry.track("User finished providing input", {
					thread_id: thread.id,
					input_thread_id: planEdit.inputThreadId ?? "",
					instance_id: rootStore.instanceId,
					type: "plan-review",
					provided_inputs: [{
						label: "plan",
						options: [
							"approve",
							"ask-for-edits",
							"deny"
						],
						option_chosen: "ask-for-edits"
					}],
					skipped_inputs: [],
					num_tasks: planEdit.taskCount,
					feedback: scrubSecretsInText(message),
					plan_feedback_type: "changes_requested"
				});
				thread.markPlanUpdatePending(planEdit.requestId);
				thread.confirmAction(planEdit.requestId, {
					kind: "approval",
					approved: false,
					userInput: message
				}).then((success) => {
					if (success) thread.resolveConfirmation(planEdit.requestId, "changes-requested");
					else thread.clearPlanUpdatePending(planEdit.requestId);
				});
				return;
			}
			thread.sendMessage(message, attachments, rootStore.pushRef);
		}
		function handleStop() {
			thread.cancelRun();
		}
		function handleFixWithAiFromOffer() {
			const offer = activeFixWithAiOffer.value;
			if (!offer) return;
			dismissedExecutionId.value = offer.executionId;
			userScrolledUp.value = false;
			thread.sendMessage(buildFixWithAiPrompt({
				workflowName: offer.workflowName,
				errors: offer.errors
			}), void 0, rootStore.pushRef);
		}
		function dismissFixWithAiOffer() {
			const offer = activeFixWithAiOffer.value;
			if (!offer) return;
			dismissedExecutionId.value = offer.executionId;
		}
		function handleWorkflowFailures(report) {
			failedRun.value = report;
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
					class: normalizeClass([_ctx.$style.headerTitle, { [_ctx.$style.headerTitleWithSidebar]: !unref(sidebar).collapsed.value }])
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
				actions: withCtx(() => [
					isDebugEnabled.value ? (openBlock(), createBlock(unref(N8nIconButton_default), {
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
					}, null, 8, ["class"])) : createCommentVNode("", true),
					createVNode(unref(N8nTooltip_default), {
						content: artifactsPanelToggleLabel.value,
						placement: "bottom",
						"show-after": unref(500)
					}, {
						default: withCtx(() => [createVNode(Transition, {
							name: "preview-toggle-opacity",
							css: unref(isArtifactsPanelTransitionEnabled)
						}, {
							default: withCtx(() => [showArtifactsPanelToggle.value ? (openBlock(), createBlock(unref(N8nIconButton_default), {
								key: 0,
								icon: "list",
								variant: "ghost",
								size: "small",
								"icon-size": "large",
								"data-test-id": "instance-ai-artifacts-panel-toggle",
								"aria-label": artifactsPanelToggleLabel.value,
								"aria-pressed": showArtifactsPanel.value,
								disabled: !canShowArtifactsPanel.value,
								onClick: toggleArtifactsPanel
							}, null, 8, [
								"aria-label",
								"aria-pressed",
								"disabled"
							])) : createCommentVNode("", true)]),
							_: 1
						}, 8, ["css"])]),
						_: 1
					}, 8, ["content", "show-after"]),
					createVNode(unref(N8nTooltip_default), {
						content: artifactsPreviewToggleLabel.value,
						placement: "bottom",
						"show-after": unref(500)
					}, {
						default: withCtx(() => [createVNode(Transition, {
							name: "preview-toggle-opacity",
							css: unref(isPreviewPanelTransitionEnabled)
						}, {
							default: withCtx(() => [!unref(preview).isPreviewVisible.value ? (openBlock(), createBlock(unref(N8nIconButton_default), {
								key: 0,
								icon: "panel-right",
								variant: "ghost",
								size: "small",
								"icon-size": "large",
								"data-test-id": "instance-ai-artifacts-preview-toggle",
								"aria-label": artifactsPreviewToggleLabel.value,
								"aria-pressed": unref(preview).isPreviewVisible.value,
								disabled: !hasPreviewTabs.value,
								onClick: toggleArtifactsPreview
							}, null, 8, [
								"aria-label",
								"aria-pressed",
								"disabled"
							])) : createCommentVNode("", true)]),
							_: 1
						}, 8, ["css"])]),
						_: 1
					}, 8, ["content", "show-after"])
				]),
				_: 1
			}), createBaseVNode("div", {
				class: normalizeClass([
					_ctx.$style.contentArea,
					{ [_ctx.$style.contentAreaWithPinnedArtifacts]: reserveArtifactsPanelLayout.value },
					{ [_ctx.$style.contentAreaWithoutLayoutTransitions]: shouldSuppressContentLayoutTransitions.value }
				]),
				"data-layout-transitions-enabled": unref(isPreviewPanelTransitionEnabled),
				"data-test-id": "instance-ai-content-area"
			}, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.chatContent) }, [createVNode(unref(N8nScrollArea_default), {
					"as-child": "",
					type: "auto",
					class: normalizeClass(_ctx.$style.scrollArea)
				}, {
					default: withCtx(() => [createBaseVNode("div", {
						ref: "scrollable",
						class: normalizeClass(_ctx.$style.scrollContent)
					}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.messageList) }, [
						createVNode(TransitionGroup, { name: "message-slide" }, {
							default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(displayedMessages), (message) => {
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
						createVNode(InstanceAiConfirmationPanel_default, { kind: "inline" }),
						createVNode(Transition, { name: "confirmation-slide" }, {
							default: withCtx(() => [activeFixWithAiOffer.value ? (openBlock(), createBlock(InstanceAiFixWithAiPanel_default, {
								key: 0,
								"node-name": activeFixWithAiOffer.value.errors[0].nodeName,
								"error-message": activeFixWithAiOffer.value.errors[0].errorMessage,
								"failed-count": activeFixWithAiOffer.value.errors.length,
								onFixWithAi: handleFixWithAiFromOffer,
								onDismiss: dismissFixWithAiOffer
							}, null, 8, [
								"node-name",
								"error-message",
								"failed-count"
							])) : createCommentVNode("", true)]),
							_: 1
						}),
						createVNode(InstanceAiStatusBar_default)
					], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.inputDock) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.scrollButtonContainer) }, [createVNode(Transition, { name: "scroll-button-fade" }, {
						default: withCtx(() => [userScrolledUp.value && unref(thread).hasMessages ? (openBlock(), createBlock(unref(N8nIconButton_default), {
							key: 0,
							variant: "outline",
							icon: "arrow-down",
							size: "large",
							"icon-size": "large",
							class: normalizeClass(_ctx.$style.scrollToBottomButton),
							onClick: _cache[1] || (_cache[1] = ($event) => {
								scrollToBottom(true);
								userScrolledUp.value = false;
							})
						}, null, 8, ["class"])) : createCommentVNode("", true)]),
						_: 1
					})], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.inputContainer) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.inputConstraint) }, [
						!unref(settingsStore).isWorkflowBuilderAvailable ? (openBlock(), createBlock(WorkflowBuilderUnavailableNotice_default, { key: 0 })) : createCommentVNode("", true),
						unref(creditBanner).visible.value ? (openBlock(), createBlock(CreditWarningBanner_default, {
							key: 1,
							"credits-remaining": unref(store).creditsRemaining,
							"credits-quota": unref(store).creditsQuota,
							onUpgradeClick: _cache[2] || (_cache[2] = ($event) => unref(goToUpgrade)("instance-ai", "upgrade-instance-ai")),
							onDismiss: _cache[3] || (_cache[3] = ($event) => unref(creditBanner).dismiss())
						}, null, 8, ["credits-remaining", "credits-quota"])) : createCommentVNode("", true),
						createBaseVNode("div", { class: normalizeClass(_ctx.$style.inputSwap) }, [createVNode(Transition, { name: "input-swap" }, {
							default: withCtx(() => [hasFloatingConfirmation.value ? (openBlock(), createBlock(InstanceAiConfirmationPanel_default, {
								key: "floating-confirmation",
								kind: "floating"
							})) : (openBlock(), createBlock(InstanceAiInput_default, {
								ref_key: "chatInputRef",
								ref: chatInputRef,
								key: "chat-input",
								"is-streaming": unref(thread).isStreaming,
								"is-submitting": unref(thread).isSendingMessage,
								"is-awaiting-confirmation": unref(thread).isAwaitingConfirmation,
								"is-plan-edit-mode": unref(thread).activePlanEdit !== null,
								"is-workflow-builder-available": unref(settingsStore).isWorkflowBuilderAvailable,
								"current-thread-id": unref(thread).id,
								"amend-context": unref(thread).amendContext,
								"contextual-suggestion": unref(thread).contextualSuggestion,
								onSubmit: handleSubmit,
								onStop: handleStop,
								onCancelPlanEdit: unref(thread).cancelPlanEdit
							}, null, 8, [
								"is-streaming",
								"is-submitting",
								"is-awaiting-confirmation",
								"is-plan-edit-mode",
								"is-workflow-builder-available",
								"current-thread-id",
								"amend-context",
								"contextual-suggestion",
								"onCancelPlanEdit"
							]))]),
							_: 1
						})], 2)
					], 2)], 2)], 2)], 2)]),
					_: 1
				}, 8, ["class"])], 2),
				createVNode(Transition, {
					name: artifactsPanelTransitionName.value,
					css: shouldAnimateArtifactsPanel.value
				}, {
					default: withCtx(() => [showArtifactsPanel.value ? (openBlock(), createElementBlock("div", {
						key: 0,
						ref: "artifactsPanelSlot",
						class: normalizeClass([_ctx.$style.artifactsPanelSlot, { [_ctx.$style.artifactsPanelSlotOverlay]: !reserveArtifactsPanelLayout.value }]),
						"data-test-id": "instance-ai-artifacts-sidebar-slot"
					}, [createVNode(InstanceAiArtifactsPanel_default)], 2)) : createCommentVNode("", true)]),
					_: 1
				}, 8, ["name", "css"]),
				showDebugPanel.value ? (openBlock(), createBlock(InstanceAiDebugPanel_default, {
					key: 0,
					onClose: _cache[4] || (_cache[4] = ($event) => {
						showDebugPanel.value = false;
						unref(store).debugMode = false;
					})
				})) : createCommentVNode("", true)
			], 10, _hoisted_1)], 2), createVNode(Transition, {
				name: "preview-panel-slide",
				css: unref(isPreviewPanelTransitionEnabled),
				onAfterEnter: handlePreviewPanelAfterEnter,
				onAfterLeave: handlePreviewPanelAfterLeave
			}, {
				default: withCtx(() => [withDirectives(createBaseVNode("div", {
					class: normalizeClass([_ctx.$style.canvasArea, { [_ctx.$style.canvasAreaExpanded]: isPreviewExpanded.value }]),
					style: normalizeStyle(previewPanelStyle.value),
					"data-expanded": isPreviewExpanded.value,
					"data-test-id": "instance-ai-preview-panel"
				}, [createVNode(unref(N8nResizeWrapper_default), {
					width: previewPanelWidth.value,
					"min-width": 400,
					"max-width": previewMaxWidth.value,
					"supported-directions": ["left"],
					"is-resizing-enabled": !isPreviewExpanded.value,
					"grid-size": 8,
					outset: true,
					onResize: handlePreviewResize,
					onResizestart: _cache[6] || (_cache[6] = ($event) => isResizingPreview.value = true),
					onResizeend: _cache[7] || (_cache[7] = ($event) => isResizingPreview.value = false)
				}, {
					default: withCtx(() => [createVNode(unref(TabsRoot_default), {
						modelValue: unref(preview).activeTabId.value,
						"onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => unref(preview).activeTabId.value = $event),
						orientation: "horizontal",
						class: normalizeClass(_ctx.$style.previewPanel)
					}, {
						default: withCtx(() => [createVNode(InstanceAiPreviewTabBar_default, {
							tabs: unref(preview).allArtifactTabs.value,
							"active-tab-id": unref(preview).activeTabId.value,
							"is-expanded": isPreviewExpanded.value,
							"preview-toggle-label": artifactsPreviewToggleLabel.value,
							onTogglePreview: toggleArtifactsPreview,
							onToggleExpanded: togglePreviewExpanded
						}, null, 8, [
							"tabs",
							"active-tab-id",
							"is-expanded",
							"preview-toggle-label"
						]), createBaseVNode("div", { class: normalizeClass(_ctx.$style.previewContent) }, [unref(preview).activeWorkflowId.value ? (openBlock(), createBlock(InstanceAiWorkflowPreview_default, {
							key: unref(preview).activeWorkflowId.value,
							ref: "workflowPreview",
							class: normalizeClass([_ctx.$style.previewSlot, { [_ctx.$style.previewSlotHidden]: !!unref(preview).activeDataTableId.value }]),
							"workflow-id": unref(preview).activeWorkflowId.value,
							"refresh-key": unref(preview).workflowRefreshKey.value,
							"execution-result": unref(preview).activeWorkflowExecutionResult.value,
							onWorkflowFailures: handleWorkflowFailures
						}, null, 8, [
							"class",
							"workflow-id",
							"refresh-key",
							"execution-result"
						])) : createCommentVNode("", true), unref(preview).activeDataTableId.value ? (openBlock(), createBlock(InstanceAiDataTablePreview_default, {
							key: 1,
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
					"width",
					"max-width",
					"is-resizing-enabled"
				])], 14, _hoisted_2), [[vShow, unref(preview).isPreviewVisible.value]])]),
				_: 1
			}, 8, ["css"])], 2);
		};
	}
});
var InstanceAiThreadView_vue_vue_type_style_index_0_lang_module_default = {
	threadArea: "_threadArea_cy48y_130",
	chatArea: "_chatArea_cy48y_140",
	canvasArea: "_canvasArea_cy48y_150",
	canvasAreaExpanded: "_canvasAreaExpanded_cy48y_176",
	headerTitle: "_headerTitle_cy48y_184",
	headerTitleWithSidebar: "_headerTitleWithSidebar_cy48y_192",
	activeButton: "_activeButton_cy48y_196",
	reconnecting: "_reconnecting_cy48y_200",
	contentArea: "_contentArea_cy48y_204",
	artifactsPanelSlot: "_artifactsPanelSlot_cy48y_213",
	artifactsPanelSlotOverlay: "_artifactsPanelSlotOverlay_cy48y_226",
	chatContent: "_chatContent_cy48y_231",
	scrollArea: "_scrollArea_cy48y_239",
	scrollContent: "_scrollContent_cy48y_254",
	messageList: "_messageList_cy48y_261",
	contentAreaWithPinnedArtifacts: "_contentAreaWithPinnedArtifacts_cy48y_272",
	contentAreaWithoutLayoutTransitions: "_contentAreaWithoutLayoutTransitions_cy48y_276",
	scrollButtonContainer: "_scrollButtonContainer_cy48y_280",
	inputConstraint: "_inputConstraint_cy48y_281",
	builderAgents: "_builderAgents_cy48y_285",
	inputDock: "_inputDock_cy48y_292",
	scrollToBottomButton: "_scrollToBottomButton_cy48y_308",
	inputContainer: "_inputContainer_cy48y_337",
	inputSwap: "_inputSwap_cy48y_364",
	previewPanel: "_previewPanel_cy48y_368",
	previewContent: "_previewContent_cy48y_374",
	previewSlot: "_previewSlot_cy48y_380",
	previewSlotHidden: "_previewSlotHidden_cy48y_385"
};
var InstanceAiThreadView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceAiThreadView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceAiThreadView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { InstanceAiThreadView_default as default };
