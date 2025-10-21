import { g5 as addTokenUsageData, g6 as emptyTokenUsageData, g7 as parseErrorMetadata, bI as isChatNode, g8 as NodeConnectionTypes, bD as v4, g9 as get, ga as AGENT_LANGCHAIN_NODE_TYPE, df as MANUAL_CHAT_TRIGGER_NODE_TYPE, de as CHAT_TRIGGER_NODE_TYPE, gb as isEmpty, d as defineComponent, h as createElementBlock, g as openBlock, i as createVNode, j as createBaseVNode, k as unref, p as N8nText, w as withCtx, l as createTextVNode, t as toDisplayString, c as useI18n, gc as formatTokenUsageCount, e as createBlock, f as createCommentVNode, aa as N8nTooltip, dS as getDefaultExportFromCjs, gd as requireUpperFirst, n as normalizeClass, F as Fragment, _ as _export_sfc, aH as useTemplateRef, bL as useTimestamp, ae as useNodeTypesStore, x as computed, dG as toTime, dE as toDayMonth, a8 as watch, B as withModifiers, A as renderList, ap as normalizeStyle, c8 as NodeIcon, ac as I18nT, N as N8nIcon, ab as _sfc_main$5, q as N8nButton, Z as nextTick, b as useRouter, bH as useRunWorkflow, ge as useVirtualList, cl as toRef, K as mergeProps, cb as shallowRef, cJ as useThrottleFn, bG as useNodeHelpers, a2 as useWorkflowsStore, bE as injectWorkflowState, a as useToast, r as ref, gf as LOGS_EXECUTION_DATA_THROTTLE_DURATION, ff as parse, gg as Workflow, a4 as PLACEHOLDER_EMPTY_WORKFLOW_ID } from "./index-lkSN61-i.js";
import { A as AnimatedSpinner } from "./AnimatedSpinner-D5rgVQbZ.js";
const TOOL_EXECUTOR_NODE_NAME = "PartialExecutionToolExecutor";
function getConsumedTokens(task) {
  const tokenUsage = task.reduce((acc, curr) => {
    const tokenUsageData = curr?.json?.tokenUsage ?? curr?.json?.tokenUsageEstimate;
    if (!tokenUsageData) return acc;
    return addTokenUsageData(acc, {
      ...tokenUsageData,
      isEstimate: !!curr?.json.tokenUsageEstimate
    });
  }, emptyTokenUsageData);
  return tokenUsage;
}
function getConsumedTokensFromTaskData(runData) {
  return getConsumedTokens(
    Object.values(runData.data ?? {}).flat().flat()
  );
}
function createNode(node, context, runIndex, runData, children = []) {
  return {
    parent: context.parent,
    node,
    // The ID consists of workflow ID, node ID and run index (including ancestor's), which
    // makes it possible to identify the same log across different executions
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
    if (!workflow || !subWorkflowRunData) {
      return [];
    }
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
    return (source?.previousNode === node.name || isPlaceholderLog(treeNode) && source?.previousNode === TOOL_EXECUTOR_NODE_NAME) && (runIndex === void 0 || source.previousNodeRun === runIndex);
  }
  return connectedSubNodes.flatMap(
    (subNodeName) => (context.data.resultData.runData[subNodeName] ?? []).flatMap((t, index) => {
      const isMatched = t.source.some((source) => source !== null) ? t.source.some(isMatchedSource) : runIndex === void 0 || index === runIndex;
      if (!isMatched) {
        return [];
      }
      const subNode = context.workflow.getNode(subNodeName);
      return subNode ? getTreeNodeData(subNode, t, index, {
        ...context,
        ancestorRunIndexes: [...context.ancestorRunIndexes, runIndex ?? 0],
        parent: treeNode
      }) : [];
    })
  );
}
function getTreeNodeData(node, runData, runIndex, context) {
  const treeNode = createNode(node, context, runIndex ?? 0, runData);
  const children = getChildNodes(treeNode, node, runIndex, context).sort(sortLogEntries);
  if ((runData === void 0 || node.disabled) && children.length === 0) {
    return [];
  }
  treeNode.children = children;
  return [treeNode];
}
function getTotalConsumedTokens(...usage) {
  return usage.reduce(addTokenUsageData, emptyTokenUsageData);
}
function getSubtreeTotalConsumedTokens(treeNode, includeSubWorkflow) {
  const executionId = treeNode.executionId;
  function calculate(currentNode) {
    if (!includeSubWorkflow && currentNode.executionId !== executionId) {
      return emptyTokenUsageData;
    }
    return getTotalConsumedTokens(
      currentNode.consumedTokens,
      ...currentNode.children.map(calculate)
    );
  }
  return calculate(treeNode);
}
function findLogEntryToAutoSelect(subTree) {
  const entryWithError = findLogEntryRec((e) => !!e.runData?.error, subTree);
  if (entryWithError) {
    return entryWithError;
  }
  const entryForAiAgent = findLogEntryRec(
    (entry) => entry.node.type === AGENT_LANGCHAIN_NODE_TYPE || entry.parent?.node.type === AGENT_LANGCHAIN_NODE_TYPE && isPlaceholderLog(entry.parent),
    subTree
  );
  if (entryForAiAgent) {
    return entryForAiAgent;
  }
  return subTree[subTree.length - 1];
}
function createLogTreeRec(filter, context) {
  const runData = context.data.resultData.runData;
  return Object.entries(runData).flatMap(([nodeName, taskData]) => {
    const node = context.workflow.getNode(nodeName);
    if (node === null || filter && filter.rootNodeId !== node.id) {
      return [];
    }
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
    if (childNodes.some((child) => (runData[child] ?? []).length > 0)) {
      return [];
    }
    const firstChild = context.workflow.getNode(childNodes[0]);
    if (firstChild === null) {
      return [];
    }
    return [{ node: firstChild, nodeHasMultipleRuns: false }];
  }).flatMap(
    ({ node, runIndex, task, nodeHasMultipleRuns }) => getTreeNodeData(node, task, nodeHasMultipleRuns ? runIndex : void 0, context)
  ).sort(sortLogEntries);
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
    if (isMatched(entry)) {
      return entry;
    }
    const child = findLogEntryRec(isMatched, entry.children);
    if (child) {
      return child;
    }
  }
  return void 0;
}
function findSelectedLogEntry(selection, entries, isExecuting) {
  switch (selection.type) {
    case "initial":
      return isExecuting ? void 0 : findLogEntryToAutoSelect(entries);
    case "none":
      return void 0;
    case "selected": {
      const found = findLogEntryRec((e) => e.id === selection.entry.id, entries);
      if (found === void 0 && !isExecuting) {
        for (let runIndex = selection.entry.runIndex - 1; runIndex >= 0; runIndex--) {
          const fallback = findLogEntryRec(
            (e) => e.workflow.id === selection.entry.workflow.id && e.node.id === selection.entry.node.id && e.runIndex === runIndex,
            entries
          );
          if (fallback !== void 0) {
            return fallback;
          }
        }
      }
      return found;
    }
  }
}
function flattenLogEntries(entries, collapsedEntryIds, ret = []) {
  for (const entry of entries) {
    ret.push(entry);
    if (!collapsedEntryIds[entry.id]) {
      flattenLogEntries(entry.children, collapsedEntryIds, ret);
    }
  }
  return ret;
}
function getEntryAtRelativeIndex(entries, id, relativeIndex) {
  const offset = entries.findIndex((e) => e.id === id);
  return offset === -1 ? void 0 : entries[offset + relativeIndex];
}
function sortLogEntries(a, b) {
  if (a.runData === void 0) {
    return a.children.length > 0 ? sortLogEntries(a.children[0], b) : 0;
  }
  if (b.runData === void 0) {
    return b.children.length > 0 ? sortLogEntries(a, b.children[0]) : 0;
  }
  if (a.runData.startTime === b.runData.startTime) {
    return a.runData.executionIndex - b.runData.executionIndex;
  }
  return a.runData.startTime - b.runData.startTime;
}
function mergeStartData(startData, response) {
  if (!response.data) {
    return response;
  }
  const nodeNames = [
    ...new Set(
      Object.keys(startData).concat(Object.keys(response.data.resultData.runData))
    ).values()
  ];
  const runData = Object.fromEntries(
    nodeNames.map((nodeName) => {
      const tasks = response.data?.resultData.runData[nodeName] ?? [];
      const mergedTasks = tasks.concat(
        (startData[nodeName] ?? []).filter(
          (task) => (
            // To remove duplicate runs, we check start time in addition to execution index
            // because nodes such as Wait and Form emits multiple websocket events with
            // different execution index for a single run
            tasks.every(
              (t) => t.startTime < task.startTime && t.executionIndex !== task.executionIndex
            )
          )
        ).map((task) => ({
          ...task,
          executionTime: 0,
          executionStatus: "running"
        }))
      );
      return [nodeName, mergedTasks];
    })
  );
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
  if (metadata) {
    return { workflowId: metadata.workflowId, executionId: metadata.executionId };
  }
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
  if (node.type === MANUAL_CHAT_TRIGGER_NODE_TYPE && node.typeVersion < 1.1) {
    return "input";
  }
  if (node.type === CHAT_TRIGGER_NODE_TYPE) {
    return "chatInput";
  }
  return "chatInput";
}
function extractChatInput(workflow, resultData) {
  const chatTrigger = workflow.nodes.find(isChatNode);
  if (chatTrigger === void 0) {
    return void 0;
  }
  const inputKey = getInputKey(chatTrigger);
  const runData = (resultData.runData[chatTrigger.name] ?? [])[0];
  const message = runData?.data?.[NodeConnectionTypes.Main]?.[0]?.[0]?.json?.[inputKey];
  if (runData === void 0 || typeof message !== "string") {
    return void 0;
  }
  return {
    text: message,
    sender: "user",
    id: v4()
  };
}
function extractBotResponse(resultData, executionId, emptyText) {
  const lastNodeExecuted = resultData.lastNodeExecuted;
  if (!lastNodeExecuted) return void 0;
  const nodeResponseDataArray = get(resultData.runData, lastNodeExecuted) ?? [];
  const nodeResponseData = nodeResponseDataArray[nodeResponseDataArray.length - 1];
  let responseMessage;
  if (get(nodeResponseData, "error")) {
    responseMessage = "[ERROR: " + get(nodeResponseData, "error.message") + "]";
  } else {
    const mainOutputs = get(nodeResponseData, "data.main");
    let text;
    if (mainOutputs && Array.isArray(mainOutputs)) {
      for (const branch of mainOutputs) {
        if (branch?.[0]?.json) {
          const responseData = branch[0].json;
          text = extractResponseText(responseData);
          if (text) {
            break;
          }
        }
      }
    }
    text = text ?? emptyText;
    if (!text) {
      return void 0;
    }
    responseMessage = text;
  }
  return {
    text: responseMessage,
    sender: "bot",
    id: executionId ?? v4()
  };
}
function extractResponseText(responseData) {
  if (!responseData || isEmpty(responseData)) {
    return void 0;
  }
  const paths = ["output", "text", "response.text", "message"];
  const matchedPath = paths.find((path) => get(responseData, path));
  if (!matchedPath) return JSON.stringify(responseData, null, 2);
  const matchedOutput = get(responseData, matchedPath);
  if (typeof matchedOutput === "object") {
    return "```json\n" + JSON.stringify(matchedOutput, null, 2) + "\n```";
  }
  return matchedOutput?.toString() ?? "";
}
function restoreChatHistory(workflowExecutionData, emptyText) {
  if (!workflowExecutionData?.data) {
    return [];
  }
  const userMessage = extractChatInput(
    workflowExecutionData.workflowData,
    workflowExecutionData.data.resultData
  );
  const botMessage = extractBotResponse(
    workflowExecutionData.data.resultData,
    workflowExecutionData.id,
    emptyText
  );
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
      reader.onerror = () => reject(new Error(`Error reading file: ${reader.error?.message ?? "Unknown error"}`));
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
        runData: Object.fromEntries(
          Object.entries(executionData.data?.resultData.runData ?? {}).map(([k, v]) => [k, [...v]])
        )
      }
    }
  };
}
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ConsumedTokensDetails",
  props: {
    consumedTokens: {}
  },
  setup(__props) {
    const i18n = useI18n();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createVNode(unref(N8nText), {
          bold: true,
          size: "small"
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(unref(i18n).baseText("runData.aiContentBlock.tokens.prompt")) + " " + toDisplayString(unref(i18n).baseText("runData.aiContentBlock.tokens", {
              interpolate: {
                count: unref(formatTokenUsageCount)(_ctx.consumedTokens, "prompt")
              }
            })), 1)
          ]),
          _: 1
        }),
        _cache[0] || (_cache[0] = createBaseVNode("br", null, null, -1)),
        createVNode(unref(N8nText), {
          bold: true,
          size: "small"
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(unref(i18n).baseText("runData.aiContentBlock.tokens.completion")) + " " + toDisplayString(unref(i18n).baseText("runData.aiContentBlock.tokens", {
              interpolate: {
                count: unref(formatTokenUsageCount)(_ctx.consumedTokens, "completion")
              }
            })), 1)
          ]),
          _: 1
        })
      ]);
    };
  }
});
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "LogsViewConsumedTokenCountText",
  props: {
    consumedTokens: {}
  },
  setup(__props) {
    const locale = useI18n();
    return (_ctx, _cache) => {
      return _ctx.consumedTokens !== void 0 ? (openBlock(), createBlock(unref(N8nTooltip), {
        key: 0,
        enterable: false
      }, {
        content: withCtx(() => [
          createVNode(_sfc_main$4, { "consumed-tokens": _ctx.consumedTokens }, null, 8, ["consumed-tokens"])
        ]),
        default: withCtx(() => [
          createBaseVNode("span", null, toDisplayString(unref(locale).baseText("runData.aiContentBlock.tokens", {
            interpolate: {
              count: unref(formatTokenUsageCount)(_ctx.consumedTokens, "total")
            }
          })), 1)
        ]),
        _: 1
      })) : createCommentVNode("", true);
    };
  }
});
var upperFirstExports = requireUpperFirst();
const upperFirst = /* @__PURE__ */ getDefaultExportFromCjs(upperFirstExports);
const _hoisted_1$1 = { key: 0 };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "LogsViewNodeName",
  props: {
    name: {},
    isError: { type: Boolean },
    isDeleted: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(N8nText), {
        tag: "div",
        bold: true,
        size: "small",
        class: normalizeClass(_ctx.$style.name),
        color: _ctx.isError ? "danger" : void 0
      }, {
        default: withCtx(() => [
          _ctx.isDeleted ? (openBlock(), createElementBlock("del", _hoisted_1$1, toDisplayString(_ctx.name), 1)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            createTextVNode(toDisplayString(_ctx.name), 1)
          ], 64))
        ]),
        _: 1
      }, 8, ["class", "color"]);
    };
  }
});
const name$1 = "_name_1qhq5_123";
const style0$2 = {
  name: name$1
};
const cssModules$2 = {
  "$style": style0$2
};
const LogsViewNodeName = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__cssModules", cssModules$2]]);
const _hoisted_1 = ["aria-expanded", "aria-selected"];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
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
  emits: ["toggleExpanded", "toggleSelected", "triggerPartialExecution", "openNdv"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const container2 = useTemplateRef("containerRef");
    const locale = useI18n();
    const now = useTimestamp({ interval: 1e3 });
    const nodeTypeStore = useNodeTypesStore();
    const type = computed(() => nodeTypeStore.getNodeType(props.data.node.type));
    const isRunning = computed(() => props.data.runData?.executionStatus === "running");
    const isWaiting = computed(() => props.data.runData?.executionStatus === "waiting");
    const isSettled = computed(() => !isRunning.value && !isWaiting.value);
    const isError = computed(() => !!props.data.runData?.error);
    const statusTextKeyPath = computed(
      () => isSettled.value ? "logs.overview.body.summaryText.in" : "logs.overview.body.summaryText.for"
    );
    const startedAtText = computed(() => {
      if (props.data.runData === void 0) {
        return "—";
      }
      const time = new Date(props.data.runData.startTime);
      return locale.baseText("logs.overview.body.started", {
        interpolate: {
          time: `${toTime(time, true)}, ${toDayMonth(time)}`
        }
      });
    });
    const statusText = computed(() => upperFirst(props.data.runData?.executionStatus ?? ""));
    const timeText = computed(
      () => props.data.runData ? locale.displayTimer(
        isSettled.value ? props.data.runData.executionTime : Math.floor((now.value - props.data.runData.startTime) / 1e3) * 1e3,
        true
      ) : void 0
    );
    const subtreeConsumedTokens = computed(
      () => props.shouldShowTokenCountColumn ? getSubtreeTotalConsumedTokens(props.data, false) : void 0
    );
    const hasChildren = computed(() => props.data.children.length > 0 || hasSubExecution(props.data));
    const indents = computed(() => {
      const ret = [];
      let data = props.data;
      while (data.parent !== void 0) {
        const siblings = data.parent?.children ?? [];
        const lastSibling = siblings[siblings.length - 1];
        ret.unshift({ straight: lastSibling?.id !== data.id, curved: data === props.data });
        data = data.parent;
      }
      return ret;
    });
    watch(
      () => props.isSelected,
      (isSelected) => {
        void nextTick(() => {
          if (isSelected) {
            container2.value?.focus();
          }
        });
      },
      { immediate: true }
    );
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
        (openBlock(true), createElementBlock(Fragment, null, renderList(indents.value, (indent2, level) => {
          return openBlock(), createElementBlock("div", {
            key: level,
            class: normalizeClass({
              [_ctx.$style.indent]: true,
              [_ctx.$style.connectorCurved]: indent2.curved,
              [_ctx.$style.connectorStraight]: indent2.straight
            })
          }, null, 2);
        }), 128)),
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.background),
          style: normalizeStyle({ "--indent-depth": indents.value.length })
        }, null, 6),
        createVNode(NodeIcon, {
          "node-type": type.value,
          size: 16,
          class: normalizeClass(_ctx.$style.icon)
        }, null, 8, ["node-type", "class"]),
        createVNode(LogsViewNodeName, {
          class: normalizeClass(_ctx.$style.name),
          name: _ctx.latestInfo?.name ?? props.data.node.name,
          "is-error": isError.value,
          "is-deleted": _ctx.latestInfo?.deleted ?? false
        }, null, 8, ["class", "name", "is-error", "is-deleted"]),
        !_ctx.isCompact ? (openBlock(), createBlock(unref(N8nText), {
          key: 0,
          tag: "div",
          color: "text-light",
          size: "small",
          class: normalizeClass(_ctx.$style.timeTook)
        }, {
          default: withCtx(() => [
            timeText.value !== void 0 ? (openBlock(), createBlock(unref(I18nT), {
              key: 0,
              keypath: statusTextKeyPath.value,
              scope: "global"
            }, {
              status: withCtx(() => [
                createVNode(unref(N8nText), {
                  color: isError.value ? "danger" : void 0,
                  bold: isError.value,
                  size: "small"
                }, {
                  default: withCtx(() => [
                    isRunning.value ? (openBlock(), createBlock(AnimatedSpinner, {
                      key: 0,
                      class: normalizeClass(_ctx.$style.statusTextIcon)
                    }, null, 8, ["class"])) : isWaiting.value ? (openBlock(), createBlock(unref(N8nIcon), {
                      key: 1,
                      icon: "status-waiting",
                      class: normalizeClass(_ctx.$style.statusTextIcon)
                    }, null, 8, ["class"])) : isError.value ? (openBlock(), createBlock(unref(N8nIcon), {
                      key: 2,
                      icon: "triangle-alert",
                      class: normalizeClass(_ctx.$style.statusTextIcon)
                    }, null, 8, ["class"])) : createCommentVNode("", true),
                    createTextVNode(" " + toDisplayString(statusText.value), 1)
                  ]),
                  _: 1
                }, 8, ["color", "bold"])
              ]),
              time: withCtx(() => [
                createTextVNode(toDisplayString(timeText.value), 1)
              ]),
              _: 1
            }, 8, ["keypath"])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              createTextVNode("—")
            ], 64))
          ]),
          _: 1
        }, 8, ["class"])) : createCommentVNode("", true),
        !_ctx.isCompact ? (openBlock(), createBlock(unref(N8nText), {
          key: 1,
          tag: "div",
          color: "text-light",
          size: "small",
          class: normalizeClass(_ctx.$style.startedAt)
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(startedAtText.value), 1)
          ]),
          _: 1
        }, 8, ["class"])) : createCommentVNode("", true),
        !_ctx.isCompact && subtreeConsumedTokens.value !== void 0 ? (openBlock(), createBlock(unref(N8nText), {
          key: 2,
          tag: "div",
          color: "text-light",
          size: "small",
          class: normalizeClass(_ctx.$style.consumedTokens)
        }, {
          default: withCtx(() => [
            subtreeConsumedTokens.value.totalTokens > 0 && (props.data.children.length === 0 || !props.expanded) ? (openBlock(), createBlock(_sfc_main$3, {
              key: 0,
              "consumed-tokens": subtreeConsumedTokens.value
            }, null, 8, ["consumed-tokens"])) : createCommentVNode("", true)
          ]),
          _: 1
        }, 8, ["class"])) : createCommentVNode("", true),
        isError.value && _ctx.isCompact ? (openBlock(), createBlock(unref(N8nIcon), {
          key: 3,
          size: "medium",
          color: "danger",
          icon: "triangle-alert",
          class: normalizeClass(_ctx.$style.compactErrorIcon)
        }, null, 8, ["class"])) : createCommentVNode("", true),
        _ctx.canOpenNdv && (!_ctx.isCompact || !props.latestInfo?.deleted) ? (openBlock(), createBlock(unref(_sfc_main$5), {
          key: 4,
          type: "secondary",
          size: "small",
          icon: "square-pen",
          "icon-size": "medium",
          style: normalizeStyle({
            visibility: props.data.isSubExecution ? "hidden" : ""
          }),
          disabled: props.latestInfo?.deleted,
          class: normalizeClass(_ctx.$style.openNdvButton),
          "aria-label": unref(locale).baseText("logs.overview.body.open"),
          onClick: _cache[0] || (_cache[0] = withModifiers(($event) => emit("openNdv"), ["stop"]))
        }, null, 8, ["style", "disabled", "class", "aria-label"])) : createCommentVNode("", true),
        !_ctx.isCompact || !props.isReadOnly && !props.latestInfo?.deleted && !props.latestInfo?.disabled ? (openBlock(), createBlock(unref(_sfc_main$5), {
          key: 5,
          type: "secondary",
          size: "small",
          icon: "play",
          "aria-label": unref(locale).baseText("logs.overview.body.run"),
          class: normalizeClass([_ctx.$style.partialExecutionButton, indents.value.length > 0 ? _ctx.$style.unavailable : ""]),
          disabled: props.latestInfo?.deleted || props.latestInfo?.disabled,
          onClick: _cache[1] || (_cache[1] = withModifiers(($event) => emit("triggerPartialExecution"), ["stop"]))
        }, null, 8, ["aria-label", "class", "disabled"])) : createCommentVNode("", true),
        _ctx.isCompact && !hasChildren.value ? (openBlock(), createElementBlock(Fragment, { key: 6 }, [
          isRunning.value ? (openBlock(), createBlock(AnimatedSpinner, {
            key: 0,
            class: normalizeClass(_ctx.$style.statusIcon)
          }, null, 8, ["class"])) : isWaiting.value ? (openBlock(), createBlock(unref(N8nIcon), {
            key: 1,
            icon: "status-waiting",
            class: normalizeClass(_ctx.$style.statusIcon)
          }, null, 8, ["class"])) : createCommentVNode("", true)
        ], 64)) : createCommentVNode("", true),
        !_ctx.isCompact || hasChildren.value ? (openBlock(), createBlock(unref(N8nButton), {
          key: 7,
          type: "secondary",
          size: "small",
          icon: props.expanded ? "chevron-down" : "chevron-up",
          "icon-size": "medium",
          square: true,
          style: normalizeStyle({
            visibility: hasChildren.value ? "" : "hidden"
          }),
          class: normalizeClass(_ctx.$style.toggleButton),
          "aria-label": unref(locale).baseText("logs.overview.body.toggleRow"),
          onClick: _cache[2] || (_cache[2] = withModifiers(($event) => emit("toggleExpanded"), ["stop"]))
        }, null, 8, ["icon", "style", "class", "aria-label"])) : createCommentVNode("", true)
      ], 10, _hoisted_1);
    };
  }
});
const container$1 = "_container_bq32l_123";
const background = "_background_bq32l_140";
const selected = "_selected_bq32l_149";
const error = "_error_bq32l_155";
const indent = "_indent_bq32l_159";
const connectorCurved = "_connectorCurved_bq32l_168";
const connectorStraight = "_connectorStraight_bq32l_178";
const icon = "_icon_bq32l_187";
const name = "_name_bq32l_193";
const timeTook = "_timeTook_bq32l_199";
const statusTextIcon = "_statusTextIcon_bq32l_204";
const startedAt = "_startedAt_bq32l_209";
const consumedTokens = "_consumedTokens_bq32l_215";
const compactErrorIcon = "_compactErrorIcon_bq32l_222";
const partialExecutionButton = "_partialExecutionButton_bq32l_234";
const openNdvButton = "_openNdvButton_bq32l_235";
const compact = "_compact_bq32l_222";
const unavailable = "_unavailable_bq32l_245";
const toggleButton = "_toggleButton_bq32l_253";
const statusIcon = "_statusIcon_bq32l_277";
const placeholder = "_placeholder_bq32l_285";
const style0$1 = {
  container: container$1,
  background,
  selected,
  error,
  indent,
  connectorCurved,
  connectorStraight,
  icon,
  name,
  timeTook,
  statusTextIcon,
  startedAt,
  consumedTokens,
  compactErrorIcon,
  partialExecutionButton,
  openNdvButton,
  compact,
  unavailable,
  toggleButton,
  statusIcon,
  placeholder
};
const cssModules$1 = {
  "$style": style0$1
};
const LogsOverviewRow = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__cssModules", cssModules$1]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
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
  emits: ["select", "openNdv", "toggleExpanded"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const router = useRouter();
    const runWorkflow = useRunWorkflow({ router });
    const isExpanded = computed(
      () => __props.flatLogEntries.reduce((acc, entry, index, arr) => {
        acc[entry.id] = arr[index + 1]?.parent?.id === entry.id;
        return acc;
      }, {})
    );
    const virtualList = useVirtualList(
      toRef(() => __props.flatLogEntries),
      { itemHeight: 32 }
    );
    async function handleTriggerPartialExecution(treeNode) {
      const latestName = __props.latestNodeInfo[treeNode.node.id]?.name ?? treeNode.node.name;
      if (latestName) {
        await runWorkflow.runWorkflow({ destinationNode: latestName });
      }
    }
    watch(
      [() => __props.execution?.status === "running", () => __props.flatLogEntries.length],
      async ([isRunning, flatEntryCount], [wasRunning]) => {
        await nextTick(() => {
          if (__props.selected === void 0 && (isRunning || wasRunning)) {
            virtualList.scrollTo(flatEntryCount - 1);
          }
        });
      },
      { immediate: true }
    );
    watch(
      () => __props.selected?.id,
      async (selectedId) => {
        await nextTick(() => {
          if (selectedId === void 0) {
            return;
          }
          const index = virtualList.list.value.some((e) => e.data.id === selectedId) ? -1 : __props.flatLogEntries.findIndex((e) => e.id === selectedId);
          if (index >= 0) {
            virtualList.scrollTo(index);
          }
        });
      },
      { immediate: true }
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", mergeProps({
        class: _ctx.$style.tree
      }, unref(virtualList).containerProps), [
        createBaseVNode("div", mergeProps({ role: "tree" }, unref(virtualList).wrapperProps.value), [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(virtualList).list.value, ({ data, index }) => {
            return openBlock(), createBlock(LogsOverviewRow, {
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
            }, null, 8, ["data", "is-read-only", "is-selected", "is-compact", "should-show-token-count-column", "latest-info", "expanded", "can-open-ndv", "onToggleExpanded", "onOpenNdv", "onTriggerPartialExecution", "onToggleSelected"]);
          }), 128))
        ], 16)
      ], 16);
    };
  }
});
const tree = "_tree_92rld_123";
const container = "_container_92rld_128";
const staticScrollBar = "_staticScrollBar_92rld_128";
const style0 = {
  tree,
  container,
  staticScrollBar
};
const cssModules = {
  "$style": style0
};
const LogsOverviewRows = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);
function useThrottleWithReactiveDelay(state, delay) {
  const throttled = shallowRef(state.value);
  watch(
    state,
    useThrottleFn(
      (latest) => {
        throttled.value = latest;
      },
      delay,
      true,
      true
    ),
    { immediate: true }
  );
  return throttled;
}
function useLogsExecutionData({ isEnabled, filter } = {}) {
  const nodeHelpers = useNodeHelpers();
  const workflowsStore = useWorkflowsStore();
  const workflowState = injectWorkflowState();
  const toast = useToast();
  const state = ref();
  const updateInterval = computed(
    () => workflowsStore.workflowExecutionData?.status === "running" && Object.keys(workflowsStore.workflowExecutionData.data?.resultData.runData ?? {}).length > 1 ? LOGS_EXECUTION_DATA_THROTTLE_DURATION : 0
  );
  const throttledState = useThrottleWithReactiveDelay(state, updateInterval);
  const throttledWorkflowData = computed(() => throttledState.value?.response.workflowData);
  const subWorkflowExecData = ref({});
  const subWorkflows = ref({});
  const workflow = ref();
  const latestNodeNameById = computed(
    () => Object.values(workflow.value?.nodes ?? {}).reduce(
      (acc, node) => {
        const nodeInStore = workflowsStore.getNodeById(node.id);
        acc[node.id] = {
          deleted: !nodeInStore,
          disabled: nodeInStore?.disabled ?? false,
          name: nodeInStore?.name ?? node.name
        };
        return acc;
      },
      {}
    )
  );
  const hasChat = computed(
    () => [Object.values(workflow.value?.nodes ?? {}), workflowsStore.workflow.nodes].some(
      (nodes) => nodes.some(isChatNode)
    )
  );
  const entries = computed(() => {
    if (isEnabled !== void 0 && !isEnabled.value || !throttledState.value || !workflow.value) {
      return [];
    }
    const mergedExecutionData = mergeStartData(
      throttledState.value.startData,
      throttledState.value.response
    );
    return createLogTree(
      workflow.value,
      mergedExecutionData,
      subWorkflows.value,
      subWorkflowExecData.value,
      filter?.value
    );
  });
  function resetExecutionData() {
    state.value = void 0;
    workflowState.setWorkflowExecutionData(null);
    nodeHelpers.updateNodesExecutionIssues();
  }
  async function loadSubExecution(logEntry) {
    const locator = findSubExecutionLocator(logEntry);
    if (!state.value || locator === void 0) {
      return;
    }
    try {
      const subExecution = await workflowsStore.fetchExecutionDataById(locator.executionId);
      const data = subExecution?.data ? parse(subExecution.data) : void 0;
      if (!data || !subExecution) {
        throw Error("Data is missing");
      }
      subWorkflowExecData.value[locator.executionId] = data;
      subWorkflows.value[locator.workflowId] = new Workflow({
        ...subExecution.workflowData,
        nodeTypes: workflowsStore.getNodeTypes()
      });
    } catch (e) {
      toast.showError(e, "Unable to load sub execution");
    }
  }
  watch(
    // Fields that should trigger update
    [
      () => workflowsStore.workflowExecutionData?.id,
      () => workflowsStore.workflowExecutionData?.workflowData.id,
      () => workflowsStore.workflowExecutionData?.status,
      () => workflowsStore.workflowExecutionResultDataLastUpdate,
      () => workflowsStore.workflowExecutionStartedData
    ],
    useThrottleFn(
      ([executionId], [previousExecutionId]) => {
        state.value = workflowsStore.workflowExecutionData === null ? void 0 : {
          response: copyExecutionData(workflowsStore.workflowExecutionData),
          startData: workflowsStore.workflowExecutionStartedData?.[1] ?? {}
        };
        if (executionId !== previousExecutionId) {
          subWorkflowExecData.value = {};
          subWorkflows.value = {};
        }
      },
      updateInterval,
      true,
      true
    ),
    { immediate: true }
  );
  watch(
    () => workflowsStore.workflowId,
    (newId) => {
      if (newId === PLACEHOLDER_EMPTY_WORKFLOW_ID) {
        resetExecutionData();
      }
    }
  );
  watch(
    throttledWorkflowData,
    (data) => {
      workflow.value = data ? new Workflow({ ...data, nodeTypes: workflowsStore.getNodeTypes() }) : void 0;
    },
    { immediate: true }
  );
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
  const flatLogEntries = computed(
    () => flattenLogEntries(entries.value, collapsedEntries.value)
  );
  function toggleExpanded(treeNode, expand) {
    if (hasSubExecution(treeNode) && treeNode.children.length === 0) {
      void loadSubExecution(treeNode);
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
export {
  LogsOverviewRows as L,
  _sfc_main$3 as _,
  getTotalConsumedTokens as a,
  getSubtreeTotalConsumedTokens as b,
  isPlaceholderLog as c,
  LogsViewNodeName as d,
  extractBotResponse as e,
  findSelectedLogEntry as f,
  getInputKey as g,
  getEntryAtRelativeIndex as h,
  isSubNodeLog as i,
  getDepth as j,
  findLogEntryRec as k,
  useLogsExecutionData as l,
  useLogsTreeExpand as m,
  getConsumedTokens as n,
  _sfc_main$4 as o,
  processFiles as p,
  findLogEntryById as q,
  restoreChatHistory as r,
  upperFirst as u
};
