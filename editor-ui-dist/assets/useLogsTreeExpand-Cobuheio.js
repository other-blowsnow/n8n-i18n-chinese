import { $ as openBlock, C as createBaseVNode, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, U as mergeProps, Vt as toRef, W as nextTick, _ as Fragment, gt as watch, rt as renderList, w as createBlock, zt as shallowRef } from "./vue.runtime.esm-bundler-CDDUUZhE.js";
import { _t as useRouter } from "./src-BVC_ZvSs.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { O as useVirtualList, Y as useThrottleFn } from "./core-DOUvgShw.js";
import { t as useToast } from "./useToast-BBvwVtp9.js";
import { is as Workflow, rd as LOGS_EXECUTION_DATA_THROTTLE_DURATION } from "./constants-Xm8Zfd-h.js";
import { Kt as injectWorkflowExecutionStateStore, _ as useNodeTypesStore, a as injectWorkflowDocumentStore, cn as useWorkflowsStore } from "./workflowDocument.store-mqNoI-h2.js";
import { t as useNodeHelpers } from "./useNodeHelpers-C-YZyVRW.js";
import { c as isChatNode } from "./useCanvasOperations-LvpQMpTR.js";
import { t as useRunWorkflow } from "./useRunWorkflow-VEfTTXq4.js";
import { t as useChatHubPanelStore } from "./chatHubPanel.store-DNWgcylq.js";
import { _ as hasSubExecution, a as copyExecutionData, b as mergeStartData, d as flattenLogEntries, o as createLogTree, t as LogsOverviewRow_default, u as findSubExecutionLocator } from "./LogsOverviewRow-B4q--MNX.js";
//#region src/features/execution/logs/components/LogsOverviewRows.vue?vue&type=script&setup=true&lang.ts
var LogsOverviewRows_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "LogsOverviewRows",
	props: {
		selected: {},
		isReadOnly: { type: Boolean },
		isCompact: { type: Boolean },
		shouldShowTokenCountColumn: { type: Boolean },
		canOpenNdv: { type: Boolean },
		flatLogEntries: {},
		latestNodeInfo: {},
		execution: {}
	},
	emits: [
		"select",
		"openNdv",
		"toggleExpanded"
	],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const runWorkflow = useRunWorkflow({ router: useRouter() });
		const isExpanded = computed(() => __props.flatLogEntries.reduce((acc, entry, index, arr) => {
			acc[entry.id] = arr[index + 1]?.parent?.id === entry.id;
			return acc;
		}, {}));
		const virtualList = useVirtualList(toRef(() => __props.flatLogEntries), { itemHeight: 32 });
		async function handleTriggerPartialExecution(treeNode) {
			const latestName = __props.latestNodeInfo[treeNode.node.id]?.name ?? treeNode.node.name;
			if (latestName) await runWorkflow.runWorkflow({ destinationNode: {
				nodeName: latestName,
				mode: "inclusive"
			} });
		}
		watch([() => __props.execution?.status === "running", () => __props.flatLogEntries.length], async ([isRunning, flatEntryCount], [wasRunning]) => {
			await nextTick(() => {
				if (__props.selected === void 0 && (isRunning || wasRunning)) virtualList.scrollTo(flatEntryCount - 1);
			});
		}, { immediate: true });
		watch(() => __props.selected?.id, async (selectedId) => {
			await nextTick(() => {
				if (selectedId === void 0) return;
				const index = virtualList.list.value.some((e) => e.data.id === selectedId) ? -1 : __props.flatLogEntries.findIndex((e) => e.id === selectedId);
				if (index >= 0) virtualList.scrollTo(index);
			});
		}, { immediate: true });
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", mergeProps({ class: _ctx.$style.tree }, unref(virtualList).containerProps), [createBaseVNode("div", mergeProps({ role: "tree" }, unref(virtualList).wrapperProps.value), [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(virtualList).list.value, ({ data, index }) => {
				return openBlock(), createBlock(LogsOverviewRow_default, {
					key: index,
					data,
					"is-read-only": __props.isReadOnly,
					"is-selected": data.id === __props.selected?.id,
					"is-compact": __props.isCompact,
					"should-show-token-count-column": __props.shouldShowTokenCountColumn,
					"latest-info": __props.latestNodeInfo[data.node.id],
					expanded: isExpanded.value[data.id],
					"can-open-ndv": __props.canOpenNdv,
					onToggleExpanded: ($event) => emit("toggleExpanded", data),
					onOpenNdv: ($event) => emit("openNdv", data),
					onTriggerPartialExecution: ($event) => handleTriggerPartialExecution(data),
					onToggleSelected: ($event) => emit("select", __props.selected?.id === data.id ? void 0 : data)
				}, null, 8, [
					"data",
					"is-read-only",
					"is-selected",
					"is-compact",
					"should-show-token-count-column",
					"latest-info",
					"expanded",
					"can-open-ndv",
					"onToggleExpanded",
					"onOpenNdv",
					"onTriggerPartialExecution",
					"onToggleSelected"
				]);
			}), 128))], 16)], 16);
		};
	}
});
var LogsOverviewRows_vue_vue_type_style_index_0_lang_module_default = {
	tree: "_tree_1j0rt_125",
	container: "_container_1j0rt_130",
	staticScrollBar: "_staticScrollBar_1j0rt_130"
};
var LogsOverviewRows_default = /* @__PURE__ */ _plugin_vue_export_helper_default(LogsOverviewRows_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": LogsOverviewRows_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region ../@n8n/composables/src/useThrottleWithReactiveDelay.ts
/**
* Similar to `useThrottle` from @vueuse/core, but with changeable delay
*/
function useThrottleWithReactiveDelay(state, delay) {
	const throttled = shallowRef(state.value);
	watch(state, useThrottleFn((latest) => {
		throttled.value = latest;
	}, delay, true, true), { immediate: true });
	return throttled;
}
//#endregion
//#region src/features/execution/logs/composables/useLogsExecutionData.ts
function useLogsExecutionData({ isEnabled, filter } = {}) {
	const nodeHelpers = useNodeHelpers();
	const workflowsStore = useWorkflowsStore();
	const nodeTypesStore = useNodeTypesStore();
	const workflowDocumentStore = injectWorkflowDocumentStore();
	const workflowExecutionStateStore = injectWorkflowExecutionStateStore();
	const currentExecution = computed(() => workflowExecutionStateStore.value.activeExecution);
	const toast = useToast();
	const state = ref();
	const updateInterval = computed(() => currentExecution.value?.status === "running" && Object.keys(currentExecution.value.data?.resultData.runData ?? {}).length > 1 ? LOGS_EXECUTION_DATA_THROTTLE_DURATION : 0);
	const throttledState = useThrottleWithReactiveDelay(state, updateInterval);
	const throttledWorkflowData = computed(() => throttledState.value?.response.workflowData);
	const subWorkflowExecData = ref({});
	const subWorkflows = ref({});
	const workflow = ref();
	const latestNodeNameById = computed(() => Object.values(workflow.value?.nodes ?? {}).reduce((acc, node) => {
		const nodeInStore = workflowDocumentStore.value.getNodeById(node.id) ?? null;
		acc[node.id] = {
			deleted: !nodeInStore,
			disabled: nodeInStore?.disabled ?? false,
			name: nodeInStore?.name ?? node.name
		};
		return acc;
	}, {}));
	const chatHubPanelStore = useChatHubPanelStore();
	const hasChat = computed(() => {
		if (chatHubPanelStore.isFloatingChatEnabled) {
			if (workflowDocumentStore.value.allNodes.some((node) => node.type === "@n8n/n8n-nodes-langchain.chatTrigger" && node.parameters?.availableInChat === true)) return false;
		}
		return [Object.values(workflow.value?.nodes ?? {}), workflowDocumentStore.value.allNodes].some((nodes) => nodes.some(isChatNode));
	});
	const entries = computed(() => {
		if (isEnabled !== void 0 && !isEnabled.value || !throttledState.value || !workflow.value) return [];
		const mergedExecutionData = mergeStartData(throttledState.value.startData, throttledState.value.response);
		return createLogTree(workflow.value, mergedExecutionData, subWorkflows.value, subWorkflowExecData.value, filter?.value);
	});
	function resetExecutionData() {
		state.value = void 0;
		workflowExecutionStateStore.value.setWorkflowExecutionData(null);
		nodeHelpers.updateNodesExecutionIssues();
		workflowExecutionStateStore.value.setChatPartialExecutionDestinationNode(null);
		workflowsStore.fetchLastSuccessfulExecution();
	}
	async function loadSubExecution(logEntry) {
		const locator = findSubExecutionLocator(logEntry);
		if (!state.value || locator === void 0) return;
		try {
			const subExecution = await workflowsStore.fetchExecutionDataById(locator.executionId);
			const data = subExecution?.data ?? void 0;
			if (!data || !subExecution) throw Error("Data is missing");
			subWorkflowExecData.value[locator.executionId] = data;
			subWorkflows.value[locator.workflowId] = new Workflow({
				...subExecution.workflowData,
				nodeTypes: nodeTypesStore.getAllNodeTypes()
			});
		} catch (e) {
			toast.showError(e, "Unable to load sub execution");
		}
	}
	watch([
		() => currentExecution.value?.id,
		() => currentExecution.value?.workflowData.id,
		() => currentExecution.value?.status,
		() => workflowExecutionStateStore.value.activeExecutionResultDataLastUpdate,
		() => workflowExecutionStateStore.value.activeExecutionStartedData
	], useThrottleFn(([executionId], [previousExecutionId]) => {
		state.value = currentExecution.value === null ? void 0 : {
			response: copyExecutionData(currentExecution.value),
			startData: workflowExecutionStateStore.value.activeExecutionStartedData?.[1] ?? {}
		};
		if (executionId !== previousExecutionId) {
			subWorkflowExecData.value = {};
			subWorkflows.value = {};
		}
	}, updateInterval, true, true), { immediate: true });
	watch(() => workflowDocumentStore.value.workflowId, () => {
		resetExecutionData();
	});
	watch(throttledWorkflowData, (data) => {
		workflow.value = data ? new Workflow({
			...data,
			nodeTypes: nodeTypesStore.getAllNodeTypes()
		}) : void 0;
	}, { immediate: true });
	return {
		execution: computed(() => throttledState.value?.response),
		entries,
		hasChat,
		latestNodeNameById,
		resetExecutionData,
		loadSubExecution
	};
}
//#endregion
//#region src/features/execution/logs/composables/useLogsTreeExpand.ts
function useLogsTreeExpand(entries, loadSubExecution) {
	const collapsedEntries = shallowRef({});
	const flatLogEntries = computed(() => flattenLogEntries(entries.value, collapsedEntries.value));
	function toggleExpanded(treeNode, expand) {
		if (hasSubExecution(treeNode) && treeNode.children.length === 0) {
			loadSubExecution(treeNode);
			return;
		}
		collapsedEntries.value = {
			...collapsedEntries.value,
			[treeNode.id]: expand === void 0 ? !collapsedEntries.value[treeNode.id] : !expand
		};
	}
	return {
		flatLogEntries,
		toggleExpanded
	};
}
//#endregion
export { useLogsExecutionData as n, LogsOverviewRows_default as r, useLogsTreeExpand as t };
