import { o as __toESM, t as __commonJSMin } from "./chunk-CC9Q-vWm.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, N as defineComponent, S as computed, T as createCommentVNode, W as nextTick, _ as Fragment, bn as normalizeStyle, bt as withCtx, gt as watch, h as withModifiers, j as createVNode, pt as useTemplateRef, rt as renderList, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { c as I18nT, s as useI18n } from "./src-BmtKBNgq.js";
import { Ja as N8nButton_default, Wi as N8nIconButton_default, Ya as N8nIcon_default, qa as N8nText_default, zi as N8nTooltip_default } from "./src-XWsjz-dU.js";
import { t as require_get } from "./get-CDrcd2Fp.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { m as require_isArray } from "./_MapCache-Cwo_kzI3.js";
import { D as useTimestamp } from "./core-CxAuVuwP.js";
import { _c as createEmptyRunExecutionData, fl as NodeConnectionTypes, iu as v4, lu as require__baseKeys, su as require__getTag, vc as createRunExecutionData, xs as parseErrorMetadata } from "./constants-BaNoJas_.js";
import { A as require_isArguments, S as require__isPrototype, b as require_isArrayLike, k as require_isBuffer, w as require_isTypedArray } from "./merge-pQs2xbBu.js";
import { _ as useNodeTypesStore, nt as require_upperFirst } from "./workflowDocument.store-MSH-Zbjq.js";
import "./useRootStore-DORNi26-.js";
import { a as addTokenUsageData, c as isChatNode, o as emptyTokenUsageData, s as formatTokenUsageCount } from "./useCanvasOperations-CrmuXKlD.js";
import { t as NodeIcon_default } from "./NodeIcon-XGWcZAcT.js";
import { a as toTime, i as toDayMonth } from "./dateFormatter-CaXXrrW8.js";
import { t as aggregateGroupExecution } from "./useCanvasMapping.groups-DSnfiiTU.js";
import { t as AnimatedSpinner_default } from "./AnimatedSpinner-Cy-0DFun.js";
//#region src/features/execution/logs/logs.types.ts
function isNodeLog(entry) {
	return entry.type === "node";
}
function isGroupLog(entry) {
	return entry.type === "group";
}
//#endregion
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
		type: "node",
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
			isSubExecution: true,
			nodeGroups: context.subWorkflowNodeGroups[subExecutionLocator.workflowId] ?? []
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
/**
* Aggregate timing for a group segment: summed execution time of its member
* node runs, and the start time of the first one. Pass `now` to count elapsed
* time for still-running members so the total ticks up during live executions.
*/
function getGroupTiming(group, now) {
	let startTime;
	let executionTime = 0;
	for (const child of group.children) {
		if (!isNodeLog(child) || child.runData === void 0) continue;
		const memberRunData = child.runData;
		const isActive = memberRunData.executionStatus === "running" || memberRunData.executionStatus === "waiting";
		executionTime += isActive && now !== void 0 ? Math.max(0, now - memberRunData.startTime) : memberRunData.executionTime;
		startTime = startTime === void 0 ? memberRunData.startTime : Math.min(startTime, memberRunData.startTime);
	}
	return startTime === void 0 ? void 0 : {
		startTime,
		executionTime
	};
}
/** Build the per-member snapshot the group rollup consumes, from a member's run data. */
function snapshotFromRunData(runData) {
	const status = runData?.executionStatus;
	return {
		running: status === "running",
		waitingForNext: false,
		waiting: void 0,
		hasExecutionError: status === "error" || status === "crashed" || Boolean(runData?.error),
		hasValidationError: false,
		status,
		dirty: false,
		iterations: 0
	};
}
/**
* Aggregate execution status for a group segment. Groups have no run data of
* their own, so reuse the canvas group rollup (`aggregateGroupExecution`) over
* the members' run data, keeping the logs badge consistent with the canvas one.
*/
function getGroupExecutionStatus(group) {
	const snapshots = /* @__PURE__ */ new Map();
	function collect(entries) {
		for (const entry of entries) {
			if (isNodeLog(entry)) snapshots.set(entry.id, snapshotFromRunData(entry.runData));
			collect(entry.children);
		}
	}
	collect(group.children);
	return aggregateGroupExecution([...snapshots.keys()], (id) => snapshots.get(id) ?? snapshotFromRunData(void 0));
}
function findLogEntryToAutoSelect(subTree) {
	const entryWithError = findLogEntryRec((e) => isNodeLog(e) && !!e.runData?.error, subTree);
	if (entryWithError) return entryWithError;
	const entryForAiAgent = findLogEntryRec((entry) => isNodeLog(entry) && entry.node.type === "@n8n/n8n-nodes-langchain.agent" || entry.parent !== void 0 && isNodeLog(entry.parent) && entry.parent.node.type === "@n8n/n8n-nodes-langchain.agent" && isPlaceholderLog(entry.parent), subTree);
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
	const result = intermediateResult.filter((entry) => {
		if (entry.task !== void 0) return true;
		if (seenPlaceholders.has(entry.node.id)) return false;
		seenPlaceholders.add(entry.node.id);
		return true;
	}).flatMap(({ node, runIndex, task, nodeHasMultipleRuns }) => getTreeNodeData(node, task, nodeHasMultipleRuns ? runIndex : void 0, context)).sort(sortLogEntries);
	return filter === void 0 ? groupContiguousEntries(result, context) : result;
}
function isMemberNodeName(name, memberIds, workflow) {
	const node = workflow.getNode(name);
	return node !== null && memberIds.has(node.id);
}
function computeGroupBoundaries(group, context) {
	const memberIds = new Set(group.group.nodeIds);
	const executedChildren = group.children.filter((c) => isNodeLog(c) && c.runData !== void 0);
	const inputs = [];
	const outputs = [];
	const seenInputEdges = /* @__PURE__ */ new Set();
	const outputEdgeIndex = /* @__PURE__ */ new Map();
	const inputLabelCount = /* @__PURE__ */ new Map();
	const outputLabelCount = /* @__PURE__ */ new Map();
	function makeLabel(counts, nodeId, name) {
		const seen = counts.get(nodeId) ?? 0;
		counts.set(nodeId, seen + 1);
		return seen === 0 ? name : `${name} (${seen + 1})`;
	}
	function upsertOutput(edge, entry, id, overrideOutputs) {
		const existing = outputEdgeIndex.get(edge);
		if (existing !== void 0) {
			outputs[existing] = {
				...outputs[existing],
				id,
				entry
			};
			return;
		}
		outputEdgeIndex.set(edge, outputs.length);
		outputs.push({
			id,
			label: makeLabel(outputLabelCount, entry.node.id, entry.node.name),
			entry,
			overrideOutputs
		});
	}
	for (const child of executedChildren) {
		const sources = child.runData?.source ?? [];
		if (sources.length === 0) {
			const edge = `${child.node.id}|origin`;
			if (!seenInputEdges.has(edge)) {
				seenInputEdges.add(edge);
				inputs.push({
					id: `${child.id}:in`,
					label: makeLabel(inputLabelCount, child.node.id, child.node.name),
					entry: child
				});
			}
		}
		sources.forEach((source, index) => {
			if (!source || isMemberNodeName(source.previousNode, memberIds, context.workflow)) return;
			const edge = `${child.node.id}|${source.previousNode}|${source.previousNodeOutput ?? 0}`;
			if (seenInputEdges.has(edge)) return;
			seenInputEdges.add(edge);
			inputs.push({
				id: `${child.id}:in:${index}`,
				label: makeLabel(inputLabelCount, child.node.id, child.node.name),
				entry: child,
				sourceIndex: index
			});
		});
		const mainConnections = context.workflow.connectionsBySourceNode[child.node.name]?.main ?? [];
		if (mainConnections.every((targets) => (targets ?? []).length === 0)) upsertOutput(`${child.node.id}|out`, child, `${child.id}:out`);
		mainConnections.forEach((targets, outputIndex) => {
			if (!(targets ?? []).some((t) => t && !isMemberNodeName(t.node, memberIds, context.workflow))) return;
			upsertOutput(`${child.node.id}|out|${outputIndex}`, child, `${child.id}:out:${outputIndex}`, mainConnections.length > 1 ? [outputIndex] : void 0);
		});
	}
	if (inputs.length === 0 && executedChildren.length > 0) {
		const first = executedChildren[0];
		inputs.push({
			id: first.id,
			label: first.node.name,
			entry: first
		});
	}
	if (outputs.length === 0 && executedChildren.length > 0) {
		const last = executedChildren[executedChildren.length - 1];
		outputs.push({
			id: last.id,
			label: last.node.name,
			entry: last
		});
	}
	return {
		inputs,
		outputs
	};
}
function finalizeGroupEntry(group, context) {
	group.hasError = getGroupExecutionStatus(group) === "error";
	group.boundaries = computeGroupBoundaries(group, context);
}
/**
* Groups consecutive top-level entries from the same canvas group into execution
* segments. The same group may produce multiple segments if its entries are
* separated by other groups or ungrouped entries.
*/
function groupContiguousEntries(entries, context) {
	if (context.nodeGroups.length === 0) return entries;
	const nodeIdToGroup = /* @__PURE__ */ new Map();
	for (const group of context.nodeGroups) for (const nodeId of group.nodeIds) nodeIdToGroup.set(nodeId, group);
	const result = [];
	const segmentCountByGroup = /* @__PURE__ */ new Map();
	let current;
	for (const entry of entries) {
		const group = isNodeLog(entry) ? nodeIdToGroup.get(entry.node.id) : void 0;
		if (group === void 0) {
			current = void 0;
			result.push(entry);
			continue;
		}
		if (current === void 0 || current.group.id !== group.id) {
			const segmentIndex = segmentCountByGroup.get(group.id) ?? 0;
			segmentCountByGroup.set(group.id, segmentIndex + 1);
			const runPath = [...context.ancestorRunIndexes, segmentIndex].join(":");
			current = {
				type: "group",
				group,
				segmentIndex,
				hasError: false,
				boundaries: {
					inputs: [],
					outputs: []
				},
				parent: context.parent,
				id: `${context.workflow.id}:group:${group.id}:${runPath}`,
				children: [],
				runIndex: 0,
				consumedTokens: emptyTokenUsageData,
				workflow: context.workflow,
				executionId: context.executionId,
				execution: context.data,
				isSubExecution: context.isSubExecution
			};
			result.push(current);
		}
		entry.parent = current;
		current.children.push(entry);
	}
	for (const entry of result) if (isGroupLog(entry)) finalizeGroupEntry(entry, context);
	return result;
}
function createLogTree(workflow, response, workflows = {}, subWorkflowData = {}, filter, nodeGroups = [], subWorkflowNodeGroups = {}) {
	return createLogTreeRec(filter, {
		parent: void 0,
		ancestorRunIndexes: [],
		executionId: response.id,
		workflow,
		workflows,
		data: response.data ?? createEmptyRunExecutionData(),
		subWorkflowData,
		isSubExecution: false,
		nodeGroups,
		subWorkflowNodeGroups
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
			const target = selection.entry;
			if (found === void 0 && !isExecuting && isNodeLog(target)) for (let runIndex = target.runIndex - 1; runIndex >= 0; runIndex--) {
				const fallback = findLogEntryRec((e) => isNodeLog(e) && e.workflow.id === target.workflow.id && e.node.id === target.node.id && e.runIndex === runIndex, entries);
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
	const aRunData = isNodeLog(a) ? a.runData : void 0;
	const bRunData = isNodeLog(b) ? b.runData : void 0;
	if (aRunData === void 0) return a.children.length > 0 ? sortLogEntries(a.children[0], b) : 0;
	if (bRunData === void 0) return b.children.length > 0 ? sortLogEntries(a, b.children[0]) : 0;
	if (aRunData.startTime === bRunData.startTime) return aRunData.executionIndex - bRunData.executionIndex;
	return aRunData.startTime - bRunData.startTime;
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
	const runData = isNodeLog(entry) ? entry.runData : void 0;
	const metadata = runData?.metadata?.subExecution;
	if (metadata) return {
		workflowId: metadata.workflowId,
		executionId: metadata.executionId
	};
	return parseErrorMetadata(runData?.error)?.subExecution;
}
function getDefaultCollapsedEntries(entries) {
	const ret = {};
	function collect(children) {
		for (const entry of children) {
			if (hasSubExecution(entry) && entry.children.length === 0) ret[entry.id] = true;
			if (isGroupLog(entry) && !entry.hasError) ret[entry.id] = true;
			collect(entry.children);
		}
	}
	collect(entries);
	return ret;
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
	return logEntry.parent !== void 0 && isNodeLog(logEntry.parent) && logEntry.parent.executionId === logEntry.executionId;
}
function isPlaceholderLog(treeNode) {
	return isNodeLog(treeNode) && treeNode.runData === void 0;
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
		const nodeData = computed(() => isNodeLog(props.data) ? props.data : void 0);
		const groupData = computed(() => isGroupLog(props.data) ? props.data : void 0);
		const runData = computed(() => nodeData.value?.runData);
		const type = computed(() => nodeData.value ? nodeTypeStore.getNodeType(nodeData.value.node.type) : null);
		const displayName = computed(() => groupData.value ? groupData.value.group.name : props.latestInfo?.name ?? nodeData.value?.node.name ?? "");
		const groupStatus = computed(() => groupData.value ? getGroupExecutionStatus(groupData.value) : void 0);
		const isRunning = computed(() => groupData.value ? groupStatus.value === "running" : runData.value?.executionStatus === "running");
		const isWaiting = computed(() => groupData.value ? groupStatus.value === "waiting" : runData.value?.executionStatus === "waiting");
		const isSettled = computed(() => !isRunning.value && !isWaiting.value);
		const isError = computed(() => groupData.value ? groupData.value.hasError : !!runData.value?.error);
		const statusTextKeyPath = computed(() => isSettled.value ? "logs.overview.body.summaryText.in" : "logs.overview.body.summaryText.for");
		const groupTiming = computed(() => groupData.value ? getGroupTiming(groupData.value, isSettled.value ? void 0 : now.value) : void 0);
		const startTime = computed(() => groupData.value ? groupTiming.value?.startTime : runData.value?.startTime);
		const startedAtText = computed(() => {
			if (startTime.value === void 0) return "—";
			const time = new Date(startTime.value);
			return locale.baseText("logs.overview.body.started", { interpolate: { time: `${toTime(time, true)}, ${toDayMonth(time)}` } });
		});
		const statusText = computed(() => (0, import_upperFirst.default)(groupData.value ? groupStatus.value ?? "" : runData.value?.executionStatus ?? ""));
		const timeText = computed(() => {
			if (groupData.value) {
				if (!groupTiming.value) return;
				return locale.displayTimer(isSettled.value ? groupTiming.value.executionTime : Math.floor(groupTiming.value.executionTime / 1e3) * 1e3, true);
			}
			return runData.value ? locale.displayTimer(isSettled.value ? runData.value.executionTime : Math.floor((now.value - runData.value.startTime) / 1e3) * 1e3, true) : void 0;
		});
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
				!groupData.value ? (openBlock(), createBlock(NodeIcon_default, {
					key: 0,
					"node-type": type.value,
					size: 16,
					class: normalizeClass(_ctx.$style.icon)
				}, null, 8, ["node-type", "class"])) : createCommentVNode("", true),
				createVNode(LogsViewNodeName_default, {
					class: normalizeClass([_ctx.$style.name, groupData.value ? _ctx.$style.groupName : ""]),
					name: displayName.value,
					"is-error": isError.value,
					"is-deleted": __props.latestInfo?.deleted ?? false
				}, null, 8, [
					"class",
					"name",
					"is-error",
					"is-deleted"
				]),
				!__props.isCompact ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 1,
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
					key: 2,
					tag: "div",
					color: "text-light",
					size: "small",
					class: normalizeClass(_ctx.$style.startedAt)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(startedAtText.value), 1)]),
					_: 1
				}, 8, ["class"])) : createCommentVNode("", true),
				!__props.isCompact && subtreeConsumedTokens.value !== void 0 ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 3,
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
					key: 4,
					size: "medium",
					color: "danger",
					icon: "triangle-alert",
					class: normalizeClass(_ctx.$style.compactErrorIcon)
				}, null, 8, ["class"])) : createCommentVNode("", true),
				!groupData.value && __props.canOpenNdv && (!__props.isCompact || !props.latestInfo?.deleted) ? (openBlock(), createBlock(unref(N8nIconButton_default), {
					key: 5,
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
				!groupData.value && (!__props.isCompact || !props.isReadOnly && !props.latestInfo?.deleted && !props.latestInfo?.disabled) ? (openBlock(), createBlock(unref(N8nIconButton_default), {
					key: 6,
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
				groupData.value && !__props.isCompact ? (openBlock(), createElementBlock(Fragment, { key: 7 }, [__props.canOpenNdv ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.buttonSpacer)
				}, null, 2)) : createCommentVNode("", true), createBaseVNode("div", { class: normalizeClass(_ctx.$style.buttonSpacer) }, null, 2)], 64)) : createCommentVNode("", true),
				__props.isCompact && !hasChildren.value ? (openBlock(), createElementBlock(Fragment, { key: 8 }, [isRunning.value ? (openBlock(), createBlock(AnimatedSpinner_default, {
					key: 0,
					class: normalizeClass(_ctx.$style.statusIcon)
				}, null, 8, ["class"])) : isWaiting.value ? (openBlock(), createBlock(unref(N8nIcon_default), {
					key: 1,
					icon: "status-waiting",
					class: normalizeClass(_ctx.$style.statusIcon)
				}, null, 8, ["class"])) : createCommentVNode("", true)], 64)) : createCommentVNode("", true),
				!__props.isCompact || hasChildren.value ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 9,
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
	container: "_container_1lu1f_125",
	background: "_background_1lu1f_142",
	selected: "_selected_1lu1f_153",
	error: "_error_1lu1f_159",
	indent: "_indent_1lu1f_163",
	connectorCurved: "_connectorCurved_1lu1f_172",
	connectorStraight: "_connectorStraight_1lu1f_182",
	icon: "_icon_1lu1f_191",
	name: "_name_1lu1f_196",
	groupName: "_groupName_1lu1f_203",
	timeTook: "_timeTook_1lu1f_207",
	statusTextIcon: "_statusTextIcon_1lu1f_212",
	startedAt: "_startedAt_1lu1f_217",
	consumedTokens: "_consumedTokens_1lu1f_223",
	compactErrorIcon: "_compactErrorIcon_1lu1f_230",
	partialExecutionButton: "_partialExecutionButton_1lu1f_242",
	openNdvButton: "_openNdvButton_1lu1f_243",
	compact: "_compact_1lu1f_230",
	unavailable: "_unavailable_1lu1f_253",
	toggleButton: "_toggleButton_1lu1f_261",
	buttonSpacer: "_buttonSpacer_1lu1f_286",
	statusIcon: "_statusIcon_1lu1f_292",
	placeholder: "_placeholder_1lu1f_300"
};
var LogsOverviewRow_default = /* @__PURE__ */ _plugin_vue_export_helper_default(LogsOverviewRow_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": LogsOverviewRow_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { isGroupLog as C, restoreChatHistory as S, getTotalConsumedTokens as _, copyExecutionData as a, isSubNodeLog as b, findLogEntryRec as c, flattenLogEntries as d, getConsumedTokens as f, getSubtreeTotalConsumedTokens as g, getEntryAtRelativeIndex as h, ConsumedTokensDetails_default as i, findSelectedLogEntry as l, getDepth as m, LogsViewNodeName_default as n, createLogTree as o, getDefaultCollapsedEntries as p, LogsViewConsumedTokenCountText_default as r, findLogEntryById as s, LogsOverviewRow_default as t, findSubExecutionLocator as u, hasSubExecution as v, isNodeLog as w, mergeStartData as x, isPlaceholderLog as y };
