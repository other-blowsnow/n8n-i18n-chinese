import { o as __toESM, t as __commonJSMin } from "./chunk-CC9Q-vWm.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, E as createElementBlock, N as defineComponent, S as computed, Sn as toDisplayString, T as createCommentVNode, W as nextTick, Wt as unref, _ as Fragment, _n as normalizeClass, gt as watch, h as withModifiers, j as createVNode, pt as useTemplateRef, rt as renderList, w as createBlock, yn as normalizeStyle, yt as withCtx } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { D as useTimestamp, at as I18nT, it as useI18n } from "./core-CwaTdA6t.js";
import { Ai as N8nTooltip_default, Ca as N8nText_default, Fi as N8nIconButton_default, Ta as N8nIcon_default, wa as N8nButton_default } from "./src-4M_3Mukr.js";
import { t as require_get } from "./get-Den8eczo.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { m as require_isArray } from "./_MapCache-Cl68hVFF.js";
import { b as useNodeTypesStore, ut as require_upperFirst } from "./users.store-DI4bmc3m.js";
import { Ao as parseErrorMetadata, Rc as v4, Uc as require__baseKeys, Vc as require__getTag, ns as createRunExecutionData, ts as createEmptyRunExecutionData, uc as NodeConnectionTypes } from "./constants-CVUc8I0d.js";
import { A as require_isArguments, S as require__isPrototype, b as require_isArrayLike, k as require_isBuffer, w as require_isTypedArray } from "./merge-ClIuBZpC.js";
import "./useRootStore-Dw8BvkQq.js";
import { a as formatTokenUsageCount, i as emptyTokenUsageData, o as isChatNode, r as addTokenUsageData } from "./useCanvasOperations-KyKH8yE-.js";
import { t as NodeIcon_default } from "./NodeIcon-21KRuWXd.js";
import { a as toTime, i as toDayMonth } from "./dateFormatter-DL19iitC.js";
import { t as AnimatedSpinner_default } from "./AnimatedSpinner-DFtqGCps.js";
//#region ../../../node_modules/.pnpm/lodash@4.18.1/node_modules/lodash/isEmpty.js
var require_isEmpty = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var baseKeys = require__baseKeys(), getTag = require__getTag(), isArguments = require_isArguments(), isArray = require_isArray(), isArrayLike = require_isArrayLike(), isBuffer = require_isBuffer(), isPrototype = require__isPrototype(), isTypedArray = require_isTypedArray();
	/** `Object#toString` result references. */
	var mapTag = "[object Map]", setTag = "[object Set]";
	/** Used to check objects for own properties. */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	/**
	* Checks if `value` is an empty object, collection, map, or set.
	*
	* Objects are considered empty if they have no own enumerable string keyed
	* properties.
	*
	* Array-like values such as `arguments` objects, arrays, buffers, strings, or
	* jQuery-like collections are considered empty if they have a `length` of `0`.
	* Similarly, maps and sets are considered empty if they have a `size` of `0`.
	*
	* @static
	* @memberOf _
	* @since 0.1.0
	* @category Lang
	* @param {*} value The value to check.
	* @returns {boolean} Returns `true` if `value` is empty, else `false`.
	* @example
	*
	* _.isEmpty(null);
	* // => true
	*
	* _.isEmpty(true);
	* // => true
	*
	* _.isEmpty(1);
	* // => true
	*
	* _.isEmpty([1, 2, 3]);
	* // => false
	*
	* _.isEmpty({ 'a': 1 });
	* // => false
	*/
	function isEmpty(value) {
		if (value == null) return true;
		if (isArrayLike(value) && (isArray(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer(value) || isTypedArray(value) || isArguments(value))) return !value.length;
		var tag = getTag(value);
		if (tag == mapTag || tag == setTag) return !value.size;
		if (isPrototype(value)) return !baseKeys(value).length;
		for (var key in value) if (hasOwnProperty.call(value, key)) return false;
		return true;
	}
	module.exports = isEmpty;
}));
//#endregion
//#region src/features/execution/logs/logs.utils.ts
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
		id: v4()
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
		id: executionId ?? v4()
	};
}
/** Extracts response message from workflow output */
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
function restoreChatHistory(workflowExecutionData, emptyText, redactedText) {
	if (!workflowExecutionData?.data) return [];
	const isRedacted = workflowExecutionData.data.redactionInfo?.isRedacted === true;
	const userMessage = extractChatInput(workflowExecutionData.workflowData, workflowExecutionData.data.resultData);
	if (isRedacted) {
		const messages = userMessage ? [userMessage] : [];
		if (redactedText) messages.push({
			text: redactedText,
			sender: "bot",
			id: workflowExecutionData.id ?? v4()
		});
		return messages;
	}
	const botMessage = extractBotResponse(workflowExecutionData.data.resultData, workflowExecutionData.id, emptyText);
	return [...userMessage ? [userMessage] : [], ...botMessage ? [botMessage] : []];
}
function isSubNodeLog(logEntry) {
	return logEntry.parent !== void 0 && logEntry.parent.executionId === logEntry.executionId;
}
function isPlaceholderLog(treeNode) {
	return treeNode.runData === void 0;
}
/**
* Creates a copy of execution data just deep enough to keeps logs immutable and not reactive.
* We deliberately avoid full deep copy here for performance reason.
*
* TODO: use shallowRef() for execution data in workflows store to make this unnecessary.
*/
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
//#endregion
//#region src/app/components/ConsumedTokensDetails.vue
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
//#endregion
//#region src/features/execution/logs/components/LogsViewConsumedTokenCountText.vue
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
//#endregion
//#region src/features/execution/logs/components/LogsViewNodeName.vue?vue&type=script&setup=true&lang.ts
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
var LogsViewNodeName_default = /* @__PURE__ */ _plugin_vue_export_helper_default(LogsViewNodeName_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": LogsViewNodeName_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/execution/logs/components/LogsOverviewRow.vue?vue&type=script&setup=true&lang.ts
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
		const container = useTemplateRef("containerRef");
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
					if (!(activeElement?.getAttribute("data-test-id") === "chat-input" || activeElement?.closest("[data-test-id=\"canvas-chat\"]") !== null)) container.value?.focus();
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
				(openBlock(true), createElementBlock(Fragment, null, renderList(indents.value, (indent, level) => {
					return openBlock(), createElementBlock("div", {
						key: level,
						class: normalizeClass({
							[_ctx.$style.indent]: true,
							[_ctx.$style.connectorCurved]: indent.curved,
							[_ctx.$style.connectorStraight]: indent.straight
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
					variant: "ghost",
					size: "small",
					icon: "square-pen",
					"icon-size": "medium",
					style: normalizeStyle({ visibility: props.data.isSubExecution ? "hidden" : void 0 }),
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
					variant: "ghost",
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
					variant: "ghost",
					iconOnly: "",
					size: "small",
					icon: props.expanded ? "chevron-down" : "chevron-up",
					"icon-size": "medium",
					style: normalizeStyle({ visibility: hasChildren.value ? void 0 : "hidden" }),
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
var LogsOverviewRow_default = /* @__PURE__ */ _plugin_vue_export_helper_default(LogsOverviewRow_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": LogsOverviewRow_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { hasSubExecution as _, copyExecutionData as a, mergeStartData as b, findLogEntryRec as c, flattenLogEntries as d, getConsumedTokens as f, getTotalConsumedTokens as g, getSubtreeTotalConsumedTokens as h, ConsumedTokensDetails_default as i, findSelectedLogEntry as l, getEntryAtRelativeIndex as m, LogsViewNodeName_default as n, createLogTree as o, getDepth as p, LogsViewConsumedTokenCountText_default as r, findLogEntryById as s, LogsOverviewRow_default as t, findSubExecutionLocator as u, isPlaceholderLog as v, restoreChatHistory as x, isSubNodeLog as y };
