import { o as __toESM } from "./chunk-6z4oVpB-.js";
import { C as computed, D as createElementBlock, E as createCommentVNode, G as nextTick, Gt as unref, It as ref, M as createVNode, P as defineComponent, Sn as toDisplayString, T as createBlock, Vt as toRef, W as mergeProps, _ as Fragment, _n as normalizeClass, _t as watch, bt as withCtx, et as openBlock, h as withModifiers, it as renderList, j as createTextVNode, mt as useTemplateRef, w as createBaseVNode, yn as normalizeStyle, zt as shallowRef } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { B as useVirtualList, _t as I18nT, gt as useI18n, it as useThrottleFn, z as useTimestamp } from "./_MapCache-DZMn6F95.js";
import { Fn as N8nIcon_default, Mn as N8nText_default, Nn as N8nButton_default, bt as N8nIconButton_default, ft as N8nTooltip_default } from "./src-DuV1yrAd.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { b as useRouter, r as require_get } from "./truncate-OqsyiABz.js";
import { G as isChatNode, H as addTokenUsageData, Rt as require_upperFirst, Sn as injectWorkflowState, U as emptyTokenUsageData, W as formatTokenUsageCount, fi as parse, o as useWorkflowsStore, pc as TOOL_EXECUTOR_NODE_NAME, rt as useNodeTypesStore, xn as useNodeHelpers, yc as v4_default } from "./useTelemetry-C3cN19b2.js";
import { t as useToast } from "./useToast-B-CMvNEW.js";
import { Ls as AGENT_LANGCHAIN_NODE_TYPE, Ns as NodeConnectionTypes, ar as MANUAL_CHAT_TRIGGER_NODE_TYPE, er as LOGS_EXECUTION_DATA_THROTTLE_DURATION, mo as parseErrorMetadata, nt as CHAT_TRIGGER_NODE_TYPE, po as Workflow, ri as PLACEHOLDER_EMPTY_WORKFLOW_ID } from "./constants-CiCQTzlI.js";
import { t as useRunWorkflow } from "./useRunWorkflow-ayk4R-2L.js";
import { t as NodeIcon_default } from "./NodeIcon-gge00gA3.js";
import { t as require_isEmpty } from "./isEmpty-C1vFWqQz.js";
import { a as toTime, i as toDayMonth } from "./dateFormatter-CPXBq2a0.js";
import { t as AnimatedSpinner_default } from "./AnimatedSpinner-vlvkUC5d.js";
var import_get = /* @__PURE__ */ __toESM(require_get());
var import_isEmpty = /* @__PURE__ */ __toESM(require_isEmpty());
function getConsumedTokens(task) {
	return task.reduce((acc, curr) => {
		const tokenUsageData = curr?.json?.tokenUsage ?? curr?.json?.tokenUsageEstimate;
		if (!tokenUsageData) return acc;
		return addTokenUsageData(acc, {
			...tokenUsageData,
			isEstimate: !!curr?.json.tokenUsageEstimate
		});
	}, emptyTokenUsageData);
}
function getConsumedTokensFromTaskData(runData) {
	return getConsumedTokens(Object.values(runData.data ?? {}).flat().flat());
}
function createNode(node, context, runIndex, runData, children = []) {
	return {
		parent: context.parent,
		node,
		id: `${context.workflow.id}:${node.id}:${[...context.ancestorRunIndexes, runIndex].join(":")}`,
		runIndex,
		runData,
		children,
		consumedTokens: runData ? getConsumedTokensFromTaskData(runData) : emptyTokenUsageData,
		workflow: context.workflow,
		executionId: context.executionId,
		execution: context.data,
		isSubExecution: context.isSubExecution
	};
}
function getChildNodes(treeNode, node, runIndex, context) {
	const subExecutionLocator = findSubExecutionLocator(treeNode);
	if (subExecutionLocator !== void 0) {
		const workflow = context.workflows[subExecutionLocator.workflowId];
		const subWorkflowRunData = context.subWorkflowData[subExecutionLocator.executionId];
		if (!workflow || !subWorkflowRunData) return [];
		return createLogTreeRec(void 0, {
			...context,
			parent: treeNode,
			ancestorRunIndexes: [...context.ancestorRunIndexes, runIndex ?? 0],
			workflow,
			executionId: subExecutionLocator.executionId,
			data: subWorkflowRunData,
			isSubExecution: true
		});
	}
	const connectedSubNodes = context.workflow.getParentNodes(node.name, "ALL_NON_MAIN", 1);
	function isMatchedSource(source) {
		return (source?.previousNode === node.name || isPlaceholderLog(treeNode) && source?.previousNode === "PartialExecutionToolExecutor") && (runIndex === void 0 || source.previousNodeRun === runIndex);
	}
	return connectedSubNodes.flatMap((subNodeName) => (context.data.resultData.runData[subNodeName] ?? []).flatMap((t, index) => {
		if (!(t.source.some((source) => source !== null) ? t.source.some(isMatchedSource) : runIndex === void 0 || index === runIndex)) return [];
		const subNode = context.workflow.getNode(subNodeName);
		return subNode ? getTreeNodeData(subNode, t, index, {
			...context,
			ancestorRunIndexes: [...context.ancestorRunIndexes, runIndex ?? 0],
			parent: treeNode
		}) : [];
	}));
}
function getTreeNodeData(node, runData, runIndex, context) {
	const treeNode = createNode(node, context, runIndex ?? 0, runData);
	const children = getChildNodes(treeNode, node, runIndex, context).sort(sortLogEntries);
	if ((runData === void 0 || node.disabled) && children.length === 0) return [];
	treeNode.children = children;
	return [treeNode];
}
function getTotalConsumedTokens(...usage) {
	return usage.reduce(addTokenUsageData, emptyTokenUsageData);
}
function getSubtreeTotalConsumedTokens(treeNode, includeSubWorkflow) {
	const executionId = treeNode.executionId;
	function calculate(currentNode) {
		if (!includeSubWorkflow && currentNode.executionId !== executionId) return emptyTokenUsageData;
		return getTotalConsumedTokens(currentNode.consumedTokens, ...currentNode.children.map(calculate));
	}
	return calculate(treeNode);
}
function findLogEntryToAutoSelect(subTree) {
	const entryWithError = findLogEntryRec((e) => !!e.runData?.error, subTree);
	if (entryWithError) return entryWithError;
	const entryForAiAgent = findLogEntryRec((entry) => entry.node.type === "@n8n/n8n-nodes-langchain.agent" || entry.parent?.node.type === "@n8n/n8n-nodes-langchain.agent" && isPlaceholderLog(entry.parent), subTree);
	if (entryForAiAgent) return entryForAiAgent;
	return subTree[subTree.length - 1];
}
function createLogTreeRec(filter, context) {
	const runData = context.data.resultData.runData;
	return Object.entries(runData).flatMap(([nodeName, taskData]) => {
		const node = context.workflow.getNode(nodeName);
		if (node === null || filter && filter.rootNodeId !== node.id) return [];
		const childNodes = context.workflow.getChildNodes(nodeName, "ALL_NON_MAIN");
		if (childNodes.length === 0) {
			const taskDataList = taskData.map((task, runIndex) => ({
				node,
				task,
				runIndex,
				nodeHasMultipleRuns: taskData.length > 1
			}));
			return filter ? taskDataList.filter((item) => item.runIndex === filter.rootNodeRunIndex) : taskDataList;
		}
		if (childNodes.some((child) => (runData[child] ?? []).length > 0)) return [];
		const firstChild = context.workflow.getNode(childNodes[0]);
		if (firstChild === null) return [];
		return [{
			node: firstChild,
			nodeHasMultipleRuns: false
		}];
	}).flatMap(({ node, runIndex, task, nodeHasMultipleRuns }) => getTreeNodeData(node, task, nodeHasMultipleRuns ? runIndex : void 0, context)).sort(sortLogEntries);
}
function createLogTree(workflow, response, workflows = {}, subWorkflowData = {}, filter) {
	return createLogTreeRec(filter, {
		parent: void 0,
		ancestorRunIndexes: [],
		executionId: response.id,
		workflow,
		workflows,
		data: response.data ?? { resultData: { runData: {} } },
		subWorkflowData,
		isSubExecution: false
	});
}
function findLogEntryById(id, entries) {
	return findLogEntryRec((entry) => entry.id === id, entries);
}
function findLogEntryRec(isMatched, entries) {
	for (const entry of entries) {
		if (isMatched(entry)) return entry;
		const child = findLogEntryRec(isMatched, entry.children);
		if (child) return child;
	}
}
function findSelectedLogEntry(selection, entries, isExecuting) {
	switch (selection.type) {
		case "initial": return isExecuting ? void 0 : findLogEntryToAutoSelect(entries);
		case "none": return;
		case "selected": {
			const found = findLogEntryRec((e) => e.id === selection.entry.id, entries);
			if (found === void 0 && !isExecuting) for (let runIndex = selection.entry.runIndex - 1; runIndex >= 0; runIndex--) {
				const fallback = findLogEntryRec((e) => e.workflow.id === selection.entry.workflow.id && e.node.id === selection.entry.node.id && e.runIndex === runIndex, entries);
				if (fallback !== void 0) return fallback;
			}
			return found;
		}
	}
}
function flattenLogEntries(entries, collapsedEntryIds, ret = []) {
	for (const entry of entries) {
		ret.push(entry);
		if (!collapsedEntryIds[entry.id]) flattenLogEntries(entry.children, collapsedEntryIds, ret);
	}
	return ret;
}
function getEntryAtRelativeIndex(entries, id, relativeIndex) {
	const offset = entries.findIndex((e) => e.id === id);
	return offset === -1 ? void 0 : entries[offset + relativeIndex];
}
function sortLogEntries(a, b) {
	if (a.runData === void 0) return a.children.length > 0 ? sortLogEntries(a.children[0], b) : 0;
	if (b.runData === void 0) return b.children.length > 0 ? sortLogEntries(a, b.children[0]) : 0;
	if (a.runData.startTime === b.runData.startTime) return a.runData.executionIndex - b.runData.executionIndex;
	return a.runData.startTime - b.runData.startTime;
}
function mergeStartData(startData, response) {
	if (!response.data) return response;
	const nodeNames = [...new Set(Object.keys(startData).concat(Object.keys(response.data.resultData.runData))).values()];
	const runData = Object.fromEntries(nodeNames.map((nodeName) => {
		const tasks = response.data?.resultData.runData[nodeName] ?? [];
		return [nodeName, tasks.concat((startData[nodeName] ?? []).filter((task) => tasks.every((t) => t.startTime < task.startTime && t.executionIndex !== task.executionIndex)).map((task) => ({
			...task,
			executionTime: 0,
			executionStatus: "running"
		})))];
	}));
	return {
		...response,
		data: {
			...response.data,
			resultData: {
				...response.data.resultData,
				runData
			}
		}
	};
}
function hasSubExecution(entry) {
	return findSubExecutionLocator(entry) !== void 0;
}
function findSubExecutionLocator(entry) {
	const metadata = entry.runData?.metadata?.subExecution;
	if (metadata) return {
		workflowId: metadata.workflowId,
		executionId: metadata.executionId
	};
	return parseErrorMetadata(entry.runData?.error)?.subExecution;
}
function getDepth(entry) {
	let depth = 0;
	let currentEntry = entry;
	while (currentEntry.parent !== void 0) {
		currentEntry = currentEntry.parent;
		depth++;
	}
	return depth;
}
function getInputKey(node) {
	if (node.type === "@n8n/n8n-nodes-langchain.manualChatTrigger" && node.typeVersion < 1.1) return "input";
	if (node.type === "@n8n/n8n-nodes-langchain.chatTrigger") return "chatInput";
	return "chatInput";
}
function extractChatInput(workflow, resultData) {
	const chatTrigger = workflow.nodes.find(isChatNode);
	if (chatTrigger === void 0) return;
	const inputKey = getInputKey(chatTrigger);
	const runData = (resultData.runData[chatTrigger.name] ?? [])[0];
	const message = runData?.data?.[NodeConnectionTypes.Main]?.[0]?.[0]?.json?.[inputKey];
	if (runData === void 0 || typeof message !== "string") return;
	return {
		text: message,
		sender: "user",
		id: v4_default()
	};
}
function extractBotResponse(resultData, executionId, emptyText) {
	const lastNodeExecuted = resultData.lastNodeExecuted;
	if (!lastNodeExecuted) return void 0;
	const nodeResponseDataArray = (0, import_get.default)(resultData.runData, lastNodeExecuted) ?? [];
	const nodeResponseData = nodeResponseDataArray[nodeResponseDataArray.length - 1];
	let responseMessage;
	if ((0, import_get.default)(nodeResponseData, "error")) responseMessage = "[ERROR: " + (0, import_get.default)(nodeResponseData, "error.message") + "]";
	else {
		const mainOutputs = (0, import_get.default)(nodeResponseData, "data.main");
		let text;
		if (mainOutputs && Array.isArray(mainOutputs)) {
			for (const branch of mainOutputs) if (branch?.[0]?.json) {
				const responseData = branch[0].json;
				text = extractResponseText(responseData);
				if (text) break;
			}
		}
		text = text ?? emptyText;
		if (!text) return;
		responseMessage = text;
	}
	return {
		text: responseMessage,
		sender: "bot",
		id: executionId ?? v4_default()
	};
}
function extractResponseText(responseData) {
	if (!responseData || (0, import_isEmpty.default)(responseData)) return;
	const matchedPath = [
		"output",
		"text",
		"response.text",
		"message"
	].find((path) => (0, import_get.default)(responseData, path));
	if (!matchedPath) return JSON.stringify(responseData, null, 2);
	const matchedOutput = (0, import_get.default)(responseData, matchedPath);
	if (typeof matchedOutput === "object") return "```json\n" + JSON.stringify(matchedOutput, null, 2) + "\n```";
	return matchedOutput?.toString() ?? "";
}
function restoreChatHistory(workflowExecutionData, emptyText) {
	if (!workflowExecutionData?.data) return [];
	const userMessage = extractChatInput(workflowExecutionData.workflowData, workflowExecutionData.data.resultData);
	const botMessage = extractBotResponse(workflowExecutionData.data.resultData, workflowExecutionData.id, emptyText);
	return [...userMessage ? [userMessage] : [], ...botMessage ? [botMessage] : []];
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
function isSubNodeLog(logEntry) {
	return logEntry.parent !== void 0 && logEntry.parent.executionId === logEntry.executionId;
}
function isPlaceholderLog(treeNode) {
	return treeNode.runData === void 0;
}
function copyExecutionData(executionData) {
	return {
		...executionData,
		data: {
			...executionData.data,
			resultData: {
				...executionData.data?.resultData,
				runData: Object.fromEntries(Object.entries(executionData.data?.resultData.runData ?? {}).map(([k, v]) => [k, [...v]]))
			}
		}
	};
}
var ConsumedTokensDetails_default = /* @__PURE__ */ defineComponent({
	__name: "ConsumedTokensDetails",
	props: { consumedTokens: {} },
	setup(__props) {
		const i18n = useI18n();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [
				createVNode(unref(N8nText_default), {
					bold: true,
					size: "small"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("runData.aiContentBlock.tokens.prompt")) + " " + toDisplayString(unref(i18n).baseText("runData.aiContentBlock.tokens", { interpolate: { count: unref(formatTokenUsageCount)(_ctx.consumedTokens, "prompt") } })), 1)]),
					_: 1
				}),
				_cache[0] || (_cache[0] = createBaseVNode("br", null, null, -1)),
				createVNode(unref(N8nText_default), {
					bold: true,
					size: "small"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("runData.aiContentBlock.tokens.completion")) + " " + toDisplayString(unref(i18n).baseText("runData.aiContentBlock.tokens", { interpolate: { count: unref(formatTokenUsageCount)(_ctx.consumedTokens, "completion") } })), 1)]),
					_: 1
				})
			]);
		};
	}
});
var LogsViewConsumedTokenCountText_default = /* @__PURE__ */ defineComponent({
	__name: "LogsViewConsumedTokenCountText",
	props: { consumedTokens: {} },
	setup(__props) {
		const locale = useI18n();
		return (_ctx, _cache) => {
			return _ctx.consumedTokens !== void 0 ? (openBlock(), createBlock(unref(N8nTooltip_default), {
				key: 0,
				enterable: false
			}, {
				content: withCtx(() => [createVNode(ConsumedTokensDetails_default, { "consumed-tokens": _ctx.consumedTokens }, null, 8, ["consumed-tokens"])]),
				default: withCtx(() => [createBaseVNode("span", null, toDisplayString(unref(locale).baseText("runData.aiContentBlock.tokens", { interpolate: { count: unref(formatTokenUsageCount)(_ctx.consumedTokens, "total") } })), 1)]),
				_: 1
			})) : createCommentVNode("", true);
		};
	}
});
var _hoisted_1$1 = { key: 0 };
var LogsViewNodeName_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "LogsViewNodeName",
	props: {
		name: {},
		isError: { type: Boolean },
		isDeleted: { type: Boolean }
	},
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nText_default), {
				tag: "div",
				bold: true,
				size: "small",
				class: normalizeClass(_ctx.$style.name),
				color: _ctx.isError ? "danger" : void 0
			}, {
				default: withCtx(() => [_ctx.isDeleted ? (openBlock(), createElementBlock("del", _hoisted_1$1, toDisplayString(_ctx.name), 1)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createTextVNode(toDisplayString(_ctx.name), 1)], 64))]),
				_: 1
			}, 8, ["class", "color"]);
		};
	}
});
var LogsViewNodeName_vue_vue_type_style_index_0_lang_module_default = { name: "_name_1qhq5_123" };
var LogsViewNodeName_default = /* @__PURE__ */ __plugin_vue_export_helper_default(LogsViewNodeName_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": LogsViewNodeName_vue_vue_type_style_index_0_lang_module_default }]]);
var import_upperFirst = /* @__PURE__ */ __toESM(require_upperFirst());
var _hoisted_1 = ["aria-expanded", "aria-selected"];
var LogsOverviewRow_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "LogsOverviewRow",
	props: {
		data: {},
		isSelected: { type: Boolean },
		isReadOnly: { type: Boolean },
		shouldShowTokenCountColumn: { type: Boolean },
		isCompact: { type: Boolean },
		latestInfo: {},
		expanded: { type: Boolean },
		canOpenNdv: { type: Boolean }
	},
	emits: [
		"toggleExpanded",
		"toggleSelected",
		"triggerPartialExecution",
		"openNdv"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const container$2 = useTemplateRef("containerRef");
		const locale = useI18n();
		const now = useTimestamp({ interval: 1e3 });
		const nodeTypeStore = useNodeTypesStore();
		const type = computed(() => nodeTypeStore.getNodeType(props.data.node.type));
		const isRunning = computed(() => props.data.runData?.executionStatus === "running");
		const isWaiting = computed(() => props.data.runData?.executionStatus === "waiting");
		const isSettled = computed(() => !isRunning.value && !isWaiting.value);
		const isError = computed(() => !!props.data.runData?.error);
		const statusTextKeyPath = computed(() => isSettled.value ? "logs.overview.body.summaryText.in" : "logs.overview.body.summaryText.for");
		const startedAtText = computed(() => {
			if (props.data.runData === void 0) return "—";
			const time = new Date(props.data.runData.startTime);
			return locale.baseText("logs.overview.body.started", { interpolate: { time: `${toTime(time, true)}, ${toDayMonth(time)}` } });
		});
		const statusText = computed(() => (0, import_upperFirst.default)(props.data.runData?.executionStatus ?? ""));
		const timeText = computed(() => props.data.runData ? locale.displayTimer(isSettled.value ? props.data.runData.executionTime : Math.floor((now.value - props.data.runData.startTime) / 1e3) * 1e3, true) : void 0);
		const subtreeConsumedTokens = computed(() => props.shouldShowTokenCountColumn ? getSubtreeTotalConsumedTokens(props.data, false) : void 0);
		const hasChildren = computed(() => props.data.children.length > 0 || hasSubExecution(props.data));
		const indents = computed(() => {
			const ret = [];
			let data = props.data;
			while (data.parent !== void 0) {
				const siblings = data.parent?.children ?? [];
				const lastSibling = siblings[siblings.length - 1];
				ret.unshift({
					straight: lastSibling?.id !== data.id,
					curved: data === props.data
				});
				data = data.parent;
			}
			return ret;
		});
		watch(() => props.isSelected, (isSelected) => {
			nextTick(() => {
				if (isSelected) container$2.value?.focus();
			});
		}, { immediate: true });
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				ref: "containerRef",
				role: "treeitem",
				tabindex: "-1",
				"aria-expanded": props.data.children.length > 0 && props.expanded,
				"aria-selected": props.isSelected,
				class: normalizeClass({
					[_ctx.$style.container]: true,
					[_ctx.$style.compact]: props.isCompact,
					[_ctx.$style.error]: isError.value,
					[_ctx.$style.selected]: props.isSelected
				}),
				onClick: _cache[3] || (_cache[3] = withModifiers(($event) => emit("toggleSelected"), ["stop"]))
			}, [
				(openBlock(true), createElementBlock(Fragment, null, renderList(indents.value, (indent$1, level) => {
					return openBlock(), createElementBlock("div", {
						key: level,
						class: normalizeClass({
							[_ctx.$style.indent]: true,
							[_ctx.$style.connectorCurved]: indent$1.curved,
							[_ctx.$style.connectorStraight]: indent$1.straight
						})
					}, null, 2);
				}), 128)),
				createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.background),
					style: normalizeStyle({ "--indent-depth": indents.value.length })
				}, null, 6),
				createVNode(NodeIcon_default, {
					"node-type": type.value,
					size: 16,
					class: normalizeClass(_ctx.$style.icon)
				}, null, 8, ["node-type", "class"]),
				createVNode(LogsViewNodeName_default, {
					class: normalizeClass(_ctx.$style.name),
					name: _ctx.latestInfo?.name ?? props.data.node.name,
					"is-error": isError.value,
					"is-deleted": _ctx.latestInfo?.deleted ?? false
				}, null, 8, [
					"class",
					"name",
					"is-error",
					"is-deleted"
				]),
				!_ctx.isCompact ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					tag: "div",
					color: "text-light",
					size: "small",
					class: normalizeClass(_ctx.$style.timeTook)
				}, {
					default: withCtx(() => [timeText.value !== void 0 ? (openBlock(), createBlock(unref(I18nT), {
						key: 0,
						keypath: statusTextKeyPath.value,
						scope: "global"
					}, {
						status: withCtx(() => [createVNode(unref(N8nText_default), {
							color: isError.value ? "danger" : void 0,
							bold: isError.value,
							size: "small"
						}, {
							default: withCtx(() => [isRunning.value ? (openBlock(), createBlock(AnimatedSpinner_default, {
								key: 0,
								class: normalizeClass(_ctx.$style.statusTextIcon)
							}, null, 8, ["class"])) : isWaiting.value ? (openBlock(), createBlock(unref(N8nIcon_default), {
								key: 1,
								icon: "status-waiting",
								class: normalizeClass(_ctx.$style.statusTextIcon)
							}, null, 8, ["class"])) : isError.value ? (openBlock(), createBlock(unref(N8nIcon_default), {
								key: 2,
								icon: "triangle-alert",
								class: normalizeClass(_ctx.$style.statusTextIcon)
							}, null, 8, ["class"])) : createCommentVNode("", true), createTextVNode(" " + toDisplayString(statusText.value), 1)]),
							_: 1
						}, 8, ["color", "bold"])]),
						time: withCtx(() => [createTextVNode(toDisplayString(timeText.value), 1)]),
						_: 1
					}, 8, ["keypath"])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createTextVNode("—")], 64))]),
					_: 1
				}, 8, ["class"])) : createCommentVNode("", true),
				!_ctx.isCompact ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 1,
					tag: "div",
					color: "text-light",
					size: "small",
					class: normalizeClass(_ctx.$style.startedAt)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(startedAtText.value), 1)]),
					_: 1
				}, 8, ["class"])) : createCommentVNode("", true),
				!_ctx.isCompact && subtreeConsumedTokens.value !== void 0 ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 2,
					tag: "div",
					color: "text-light",
					size: "small",
					class: normalizeClass(_ctx.$style.consumedTokens)
				}, {
					default: withCtx(() => [subtreeConsumedTokens.value.totalTokens > 0 && (props.data.children.length === 0 || !props.expanded) ? (openBlock(), createBlock(LogsViewConsumedTokenCountText_default, {
						key: 0,
						"consumed-tokens": subtreeConsumedTokens.value
					}, null, 8, ["consumed-tokens"])) : createCommentVNode("", true)]),
					_: 1
				}, 8, ["class"])) : createCommentVNode("", true),
				isError.value && _ctx.isCompact ? (openBlock(), createBlock(unref(N8nIcon_default), {
					key: 3,
					size: "medium",
					color: "danger",
					icon: "triangle-alert",
					class: normalizeClass(_ctx.$style.compactErrorIcon)
				}, null, 8, ["class"])) : createCommentVNode("", true),
				_ctx.canOpenNdv && (!_ctx.isCompact || !props.latestInfo?.deleted) ? (openBlock(), createBlock(unref(N8nIconButton_default), {
					key: 4,
					type: "secondary",
					size: "small",
					icon: "square-pen",
					"icon-size": "medium",
					style: normalizeStyle({ visibility: props.data.isSubExecution ? "hidden" : "" }),
					disabled: props.latestInfo?.deleted,
					class: normalizeClass(_ctx.$style.openNdvButton),
					"aria-label": unref(locale).baseText("logs.overview.body.open"),
					onClick: _cache[0] || (_cache[0] = withModifiers(($event) => emit("openNdv"), ["stop"]))
				}, null, 8, [
					"style",
					"disabled",
					"class",
					"aria-label"
				])) : createCommentVNode("", true),
				!_ctx.isCompact || !props.isReadOnly && !props.latestInfo?.deleted && !props.latestInfo?.disabled ? (openBlock(), createBlock(unref(N8nIconButton_default), {
					key: 5,
					type: "secondary",
					size: "small",
					icon: "play",
					"aria-label": unref(locale).baseText("logs.overview.body.run"),
					class: normalizeClass([_ctx.$style.partialExecutionButton, indents.value.length > 0 ? _ctx.$style.unavailable : ""]),
					disabled: props.latestInfo?.deleted || props.latestInfo?.disabled,
					onClick: _cache[1] || (_cache[1] = withModifiers(($event) => emit("triggerPartialExecution"), ["stop"]))
				}, null, 8, [
					"aria-label",
					"class",
					"disabled"
				])) : createCommentVNode("", true),
				_ctx.isCompact && !hasChildren.value ? (openBlock(), createElementBlock(Fragment, { key: 6 }, [isRunning.value ? (openBlock(), createBlock(AnimatedSpinner_default, {
					key: 0,
					class: normalizeClass(_ctx.$style.statusIcon)
				}, null, 8, ["class"])) : isWaiting.value ? (openBlock(), createBlock(unref(N8nIcon_default), {
					key: 1,
					icon: "status-waiting",
					class: normalizeClass(_ctx.$style.statusIcon)
				}, null, 8, ["class"])) : createCommentVNode("", true)], 64)) : createCommentVNode("", true),
				!_ctx.isCompact || hasChildren.value ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 7,
					type: "secondary",
					size: "small",
					icon: props.expanded ? "chevron-down" : "chevron-up",
					"icon-size": "medium",
					square: true,
					style: normalizeStyle({ visibility: hasChildren.value ? "" : "hidden" }),
					class: normalizeClass(_ctx.$style.toggleButton),
					"aria-label": unref(locale).baseText("logs.overview.body.toggleRow"),
					onClick: _cache[2] || (_cache[2] = withModifiers(($event) => emit("toggleExpanded"), ["stop"]))
				}, null, 8, [
					"icon",
					"style",
					"class",
					"aria-label"
				])) : createCommentVNode("", true)
			], 10, _hoisted_1);
		};
	}
});
var LogsOverviewRow_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_42v09_123",
	background: "_background_42v09_140",
	selected: "_selected_42v09_149",
	error: "_error_42v09_155",
	indent: "_indent_42v09_159",
	connectorCurved: "_connectorCurved_42v09_168",
	connectorStraight: "_connectorStraight_42v09_178",
	icon: "_icon_42v09_187",
	name: "_name_42v09_193",
	timeTook: "_timeTook_42v09_199",
	statusTextIcon: "_statusTextIcon_42v09_204",
	startedAt: "_startedAt_42v09_209",
	consumedTokens: "_consumedTokens_42v09_215",
	compactErrorIcon: "_compactErrorIcon_42v09_222",
	partialExecutionButton: "_partialExecutionButton_42v09_234",
	openNdvButton: "_openNdvButton_42v09_235",
	compact: "_compact_42v09_222",
	unavailable: "_unavailable_42v09_245",
	toggleButton: "_toggleButton_42v09_253",
	statusIcon: "_statusIcon_42v09_277",
	placeholder: "_placeholder_42v09_285"
};
var LogsOverviewRow_default = /* @__PURE__ */ __plugin_vue_export_helper_default(LogsOverviewRow_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": LogsOverviewRow_vue_vue_type_style_index_0_lang_module_default }]]);
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
			if (latestName) await runWorkflow.runWorkflow({ destinationNode: latestName });
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
					"is-read-only": _ctx.isReadOnly,
					"is-selected": data.id === _ctx.selected?.id,
					"is-compact": _ctx.isCompact,
					"should-show-token-count-column": _ctx.shouldShowTokenCountColumn,
					"latest-info": _ctx.latestNodeInfo[data.node.id],
					expanded: isExpanded.value[data.id],
					"can-open-ndv": _ctx.canOpenNdv,
					onToggleExpanded: ($event) => emit("toggleExpanded", data),
					onOpenNdv: ($event) => emit("openNdv", data),
					onTriggerPartialExecution: ($event) => handleTriggerPartialExecution(data),
					onToggleSelected: ($event) => emit("select", _ctx.selected?.id === data.id ? void 0 : data)
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
	tree: "_tree_92rld_123",
	container: "_container_92rld_128",
	staticScrollBar: "_staticScrollBar_92rld_128"
};
var LogsOverviewRows_default = /* @__PURE__ */ __plugin_vue_export_helper_default(LogsOverviewRows_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": LogsOverviewRows_vue_vue_type_style_index_0_lang_module_default }]]);
function useThrottleWithReactiveDelay(state, delay) {
	const throttled = shallowRef(state.value);
	watch(state, useThrottleFn((latest) => {
		throttled.value = latest;
	}, delay, true, true), { immediate: true });
	return throttled;
}
function useLogsExecutionData({ isEnabled, filter } = {}) {
	const nodeHelpers = useNodeHelpers();
	const workflowsStore = useWorkflowsStore();
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
		const nodeInStore = workflowsStore.getNodeById(node.id);
		acc[node.id] = {
			deleted: !nodeInStore,
			disabled: nodeInStore?.disabled ?? false,
			name: nodeInStore?.name ?? node.name
		};
		return acc;
	}, {}));
	const hasChat = computed(() => [Object.values(workflow.value?.nodes ?? {}), workflowsStore.workflow.nodes].some((nodes) => nodes.some(isChatNode)));
	const entries = computed(() => {
		if (isEnabled !== void 0 && !isEnabled.value || !throttledState.value || !workflow.value) return [];
		const mergedExecutionData = mergeStartData(throttledState.value.startData, throttledState.value.response);
		return createLogTree(workflow.value, mergedExecutionData, subWorkflows.value, subWorkflowExecData.value, filter?.value);
	});
	function resetExecutionData() {
		state.value = void 0;
		workflowState.setWorkflowExecutionData(null);
		nodeHelpers.updateNodesExecutionIssues();
	}
	async function loadSubExecution(logEntry) {
		const locator = findSubExecutionLocator(logEntry);
		if (!state.value || locator === void 0) return;
		try {
			const subExecution = await workflowsStore.fetchExecutionDataById(locator.executionId);
			const data = subExecution?.data ? parse(subExecution.data) : void 0;
			if (!data || !subExecution) throw Error("Data is missing");
			subWorkflowExecData.value[locator.executionId] = data;
			subWorkflows.value[locator.workflowId] = new Workflow({
				...subExecution.workflowData,
				nodeTypes: workflowsStore.getNodeTypes()
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
	watch(() => workflowsStore.workflowId, (newId) => {
		if (newId === "__EMPTY__") resetExecutionData();
	});
	watch(throttledWorkflowData, (data) => {
		workflow.value = data ? new Workflow({
			...data,
			nodeTypes: workflowsStore.getNodeTypes()
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
export { isPlaceholderLog as _, LogsViewConsumedTokenCountText_default as a, restoreChatHistory as b, findLogEntryById as c, getConsumedTokens as d, getDepth as f, getTotalConsumedTokens as g, getSubtreeTotalConsumedTokens as h, LogsViewNodeName_default as i, findLogEntryRec as l, getInputKey as m, useLogsExecutionData as n, ConsumedTokensDetails_default as o, getEntryAtRelativeIndex as p, LogsOverviewRows_default as r, extractBotResponse as s, useLogsTreeExpand as t, findSelectedLogEntry as u, isSubNodeLog as v, processFiles as y };
