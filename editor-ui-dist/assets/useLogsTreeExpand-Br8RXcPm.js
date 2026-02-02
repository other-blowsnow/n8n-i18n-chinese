import { o as __toESM, t as __commonJSMin } from "./chunk-r2Y0G7H8.js";
import { C as computed, Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, G as nextTick, Gt as unref, It as ref, M as createVNode, P as defineComponent, T as createBlock, Vt as toRef, W as mergeProps, _ as Fragment, _t as watch, bn as normalizeStyle, bt as withCtx, et as openBlock, h as withModifiers, it as renderList, j as createTextVNode, mt as useTemplateRef, vn as normalizeClass, w as createBaseVNode, zt as shallowRef } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { B as useTimestamp, V as useVirtualList, bt as I18nT, m as require_isArray, st as useThrottleFn, yt as useI18n } from "./_MapCache-8-eqnC2S.js";
import { Ai as N8nIconButton_default, Bi as N8nButton_default, Hi as N8nIcon_default, Ht as N8nTooltip_default, Rt as useRouter, f as require_get, zi as N8nText_default } from "./src-Cq27d_Gp.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import { $ as require_upperFirst, C as useNodeTypesStore, Lt as injectWorkflowState, Mt as useNodeHelpers, Vi as parse, c as addTokenUsageData, d as isChatNode, hr as useToast, kr as v4_default, l as emptyTokenUsageData, s as useWorkflowsStore, u as formatTokenUsageCount } from "./users.store-qBZsmf9-.js";
import { $a as NodeConnectionTypes, Ao as require__baseKeys, Ji as createRunExecutionData, On as MANUAL_CHAT_TRIGGER_NODE_TYPE, Oo as require__getTag, Rc as LOGS_EXECUTION_DATA_THROTTLE_DURATION, Si as parseErrorMetadata, Ut as CHAT_TRIGGER_NODE_TYPE, no as AGENT_LANGCHAIN_NODE_TYPE, qi as createEmptyRunExecutionData, xi as Workflow } from "./constants-Cyrg9Nbl.js";
import { C as require_isTypedArray, O as require_isBuffer, k as require_isArguments, x as require__isPrototype, y as require_isArrayLike } from "./merge-O0QrB7po.js";
import { S as TOOL_EXECUTOR_NODE_NAME } from "./_baseOrderBy-3Uh8XZv3.js";
import { t as NodeIcon_default } from "./NodeIcon-HdSkOCP-.js";
import { t as useRunWorkflow } from "./useRunWorkflow-BfL7BCzH.js";
import { a as toTime, i as toDayMonth } from "./dateFormatter-C2jhIUgb.js";
import { t as AnimatedSpinner_default } from "./AnimatedSpinner-BHDG51rn.js";
var require_isEmpty = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseKeys = require__baseKeys(), getTag = require__getTag(), isArguments = require_isArguments(), isArray = require_isArray(), isArrayLike = require_isArrayLike(), isBuffer = require_isBuffer(), isPrototype = require__isPrototype(), isTypedArray = require_isTypedArray();
	var mapTag = "[object Map]", setTag = "[object Set]";
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	function isEmpty$1(value) {
		if (value == null) return true;
		if (isArrayLike(value) && (isArray(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer(value) || isTypedArray(value) || isArguments(value))) return !value.length;
		var tag = getTag(value);
		if (tag == mapTag || tag == setTag) return !value.size;
		if (isPrototype(value)) return !baseKeys(value).length;
		for (var key in value) if (hasOwnProperty.call(value, key)) return false;
		return true;
	}
	module.exports = isEmpty$1;
}));
var import_get = /* @__PURE__ */ __toESM(require_get(), 1);
var import_isEmpty = /* @__PURE__ */ __toESM(require_isEmpty(), 1);
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
		return (source?.previousNode === node.name || isPlaceholderLog(treeNode) && source?.previousNode === "PartialExecutionToolExecutor") && (runIndex === void 0 || (source.previousNodeRun ?? 0) === runIndex);
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
	const intermediateResult = Object.entries(runData).flatMap(([nodeName, taskData]) => {
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
	});
	const seenPlaceholders = /* @__PURE__ */ new Set();
	return intermediateResult.filter((entry) => {
		if (entry.task !== void 0) return true;
		if (seenPlaceholders.has(entry.node.id)) return false;
		seenPlaceholders.add(entry.node.id);
		return true;
	}).flatMap(({ node, runIndex, task, nodeHasMultipleRuns }) => getTreeNodeData(node, task, nodeHasMultipleRuns ? runIndex : void 0, context)).sort(sortLogEntries);
}
function createLogTree(workflow, response, workflows = {}, subWorkflowData = {}, filter) {
	return createLogTreeRec(filter, {
		parent: void 0,
		ancestorRunIndexes: [],
		executionId: response.id,
		workflow,
		workflows,
		data: response.data ?? createEmptyRunExecutionData(),
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
		return [nodeName, tasks.concat((startData[nodeName] ?? []).filter((task) => {
			if (tasks.some((t) => t.executionIndex === task.executionIndex && t.startTime === task.startTime)) return false;
			return tasks.every((t) => t.startTime < task.startTime);
		}).map((task) => ({
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
		data: createRunExecutionData({
			...executionData.data,
			resultData: {
				...executionData.data?.resultData,
				runData: Object.fromEntries(Object.entries(executionData.data?.resultData.runData ?? {}).map(([k, v]) => [k, [...v]]))
			}
		})
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
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("runData.aiContentBlock.tokens.prompt")) + " " + toDisplayString(unref(i18n).baseText("runData.aiContentBlock.tokens", { interpolate: { count: unref(formatTokenUsageCount)(__props.consumedTokens, "prompt") } })), 1)]),
					_: 1
				}),
				_cache[0] || (_cache[0] = createBaseVNode("br", null, null, -1)),
				createVNode(unref(N8nText_default), {
					bold: true,
					size: "small"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("runData.aiContentBlock.tokens.completion")) + " " + toDisplayString(unref(i18n).baseText("runData.aiContentBlock.tokens", { interpolate: { count: unref(formatTokenUsageCount)(__props.consumedTokens, "completion") } })), 1)]),
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
			return __props.consumedTokens !== void 0 ? (openBlock(), createBlock(unref(N8nTooltip_default), {
				key: 0,
				enterable: false
			}, {
				content: withCtx(() => [createVNode(ConsumedTokensDetails_default, { "consumed-tokens": __props.consumedTokens }, null, 8, ["consumed-tokens"])]),
				default: withCtx(() => [createBaseVNode("span", null, toDisplayString(unref(locale).baseText("runData.aiContentBlock.tokens", { interpolate: { count: unref(formatTokenUsageCount)(__props.consumedTokens, "total") } })), 1)]),
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
				color: __props.isError ? "danger" : void 0
			}, {
				default: withCtx(() => [__props.isDeleted ? (openBlock(), createElementBlock("del", _hoisted_1$1, toDisplayString(__props.name), 1)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createTextVNode(toDisplayString(__props.name), 1)], 64))]),
				_: 1
			}, 8, ["class", "color"]);
		};
	}
});
var LogsViewNodeName_vue_vue_type_style_index_0_lang_module_default = { name: "_name_iqwm2_125" };
var LogsViewNodeName_default = /* @__PURE__ */ __plugin_vue_export_helper_default(LogsViewNodeName_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": LogsViewNodeName_vue_vue_type_style_index_0_lang_module_default }]]);
var import_upperFirst = /* @__PURE__ */ __toESM(require_upperFirst(), 1);
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
				if (isSelected) {
					const activeElement = document.activeElement;
					if (!(activeElement?.getAttribute("data-test-id") === "chat-input" || activeElement?.closest("[data-test-id=\"canvas-chat\"]") !== null)) container$2.value?.focus();
				}
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
					name: __props.latestInfo?.name ?? props.data.node.name,
					"is-error": isError.value,
					"is-deleted": __props.latestInfo?.deleted ?? false
				}, null, 8, [
					"class",
					"name",
					"is-error",
					"is-deleted"
				]),
				!__props.isCompact ? (openBlock(), createBlock(unref(N8nText_default), {
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
				!__props.isCompact ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 1,
					tag: "div",
					color: "text-light",
					size: "small",
					class: normalizeClass(_ctx.$style.startedAt)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(startedAtText.value), 1)]),
					_: 1
				}, 8, ["class"])) : createCommentVNode("", true),
				!__props.isCompact && subtreeConsumedTokens.value !== void 0 ? (openBlock(), createBlock(unref(N8nText_default), {
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
				isError.value && __props.isCompact ? (openBlock(), createBlock(unref(N8nIcon_default), {
					key: 3,
					size: "medium",
					color: "danger",
					icon: "triangle-alert",
					class: normalizeClass(_ctx.$style.compactErrorIcon)
				}, null, 8, ["class"])) : createCommentVNode("", true),
				__props.canOpenNdv && (!__props.isCompact || !props.latestInfo?.deleted) ? (openBlock(), createBlock(unref(N8nIconButton_default), {
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
				!__props.isCompact || !props.isReadOnly && !props.latestInfo?.deleted && !props.latestInfo?.disabled ? (openBlock(), createBlock(unref(N8nIconButton_default), {
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
				__props.isCompact && !hasChildren.value ? (openBlock(), createElementBlock(Fragment, { key: 6 }, [isRunning.value ? (openBlock(), createBlock(AnimatedSpinner_default, {
					key: 0,
					class: normalizeClass(_ctx.$style.statusIcon)
				}, null, 8, ["class"])) : isWaiting.value ? (openBlock(), createBlock(unref(N8nIcon_default), {
					key: 1,
					icon: "status-waiting",
					class: normalizeClass(_ctx.$style.statusIcon)
				}, null, 8, ["class"])) : createCommentVNode("", true)], 64)) : createCommentVNode("", true),
				!__props.isCompact || hasChildren.value ? (openBlock(), createBlock(unref(N8nButton_default), {
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
	container: "_container_zvanm_125",
	background: "_background_zvanm_142",
	selected: "_selected_zvanm_153",
	error: "_error_zvanm_159",
	indent: "_indent_zvanm_163",
	connectorCurved: "_connectorCurved_zvanm_172",
	connectorStraight: "_connectorStraight_zvanm_182",
	icon: "_icon_zvanm_191",
	name: "_name_zvanm_198",
	timeTook: "_timeTook_zvanm_204",
	statusTextIcon: "_statusTextIcon_zvanm_209",
	startedAt: "_startedAt_zvanm_214",
	consumedTokens: "_consumedTokens_zvanm_220",
	compactErrorIcon: "_compactErrorIcon_zvanm_227",
	partialExecutionButton: "_partialExecutionButton_zvanm_239",
	openNdvButton: "_openNdvButton_zvanm_240",
	compact: "_compact_zvanm_227",
	unavailable: "_unavailable_zvanm_250",
	toggleButton: "_toggleButton_zvanm_258",
	statusIcon: "_statusIcon_zvanm_282",
	placeholder: "_placeholder_zvanm_290"
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
		workflowsStore.fetchLastSuccessfulExecution();
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
	watch(() => workflowsStore.workflowId, () => {
		resetExecutionData();
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
