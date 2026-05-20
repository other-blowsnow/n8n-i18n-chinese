import { $ as openBlock, Bt as toRef, C as createBaseVNode, E as createElementBlock, Ft as ref, N as defineComponent, Rt as shallowRef, S as computed, U as mergeProps, W as nextTick, Wt as unref, _ as Fragment, gt as watch, rt as renderList, w as createBlock } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { J as useThrottleFn, O as useVirtualList } from "./core-x10Anb9r.js";
import { lt as useRouter } from "./src-CSSRFm72.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { b as useNodeTypesStore, fn as injectWorkflowDocumentStore, s as useWorkflowsStore, xn as useNodeHelpers } from "./users.store-V46mYCxM.js";
import { t as useToast } from "./useToast-vrHmeB6l.js";
import { To as Workflow, tu as LOGS_EXECUTION_DATA_THROTTLE_DURATION } from "./constants-B2-iseoM.js";
import { o as isChatNode } from "./useCanvasOperations-BMSPI5gh.js";
import { t as injectWorkflowState } from "./useWorkflowState-CVpb4YmH.js";
import { t as useRunWorkflow } from "./useRunWorkflow-Cw6vWnzD.js";
import { t as useChatHubPanelStore } from "./chatHubPanel.store-p4o8osCp.js";
import { _ as hasSubExecution, a as copyExecutionData, b as mergeStartData, d as flattenLogEntries, o as createLogTree, t as LogsOverviewRow_default, u as findSubExecutionLocator } from "./LogsOverviewRow-DHQuZg9k.js";
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
	const workflowState = injectWorkflowState();
	const toast = useToast();
	const state = ref();
	const updateInterval = computed(() => workflowsStore.workflowExecutionData?.status === "running" && Object.keys(workflowsStore.workflowExecutionData.data?.resultData.runData ?? {}).length > 1 ? LOGS_EXECUTION_DATA_THROTTLE_DURATION : 0);
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
		workflowState.setWorkflowExecutionData(null);
		nodeHelpers.updateNodesExecutionIssues();
		workflowsStore.setChatPartialExecutionDestinationNode(null);
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
		() => workflowsStore.workflowExecutionData?.id,
		() => workflowsStore.workflowExecutionData?.workflowData.id,
		() => workflowsStore.workflowExecutionData?.status,
		() => workflowsStore.workflowExecutionResultDataLastUpdate,
		() => workflowsStore.workflowExecutionStartedData
	], useThrottleFn(([executionId], [previousExecutionId]) => {
		state.value = workflowsStore.workflowExecutionData === null ? void 0 : {
			response: copyExecutionData(workflowsStore.workflowExecutionData),
			startData: workflowsStore.workflowExecutionStartedData?.[1] ?? {}
		};
		if (executionId !== previousExecutionId) {
			subWorkflowExecData.value = {};
			subWorkflows.value = {};
		}
	}, updateInterval, true, true), { immediate: true });
	watch(() => workflowsStore.workflowId, () => {
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
