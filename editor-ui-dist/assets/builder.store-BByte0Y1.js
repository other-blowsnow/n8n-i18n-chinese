import { o as __toESM } from "./chunk-CC9Q-vWm.js";
import { Ft as ref, Pt as readonly, S as computed, gt as watch } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { J as useDebounceFn, at as useI18n, v as useLocalStorage } from "./core-C2YcDNFD.js";
import { Oi as isToolMessage$1, ki as isWorkflowUpdatedMessage$1, lt as useRoute, ut as useRouter } from "./src-_SF6v8wU.js";
import { t as useMessage } from "./useMessage-C0Rn-TS1.js";
import { $t as createWorkflowDocumentId, Mt as useWorkflowHelpers, Qi as stringSizeInBytes, Qt as useNDVStore, Rt as useWorkflowsListStore, Xt as usePostHog, ct as clearBuilderSession, dn as useCanvasStore, dt as getBuilderCredits, ea as tryToParseNumber, mt as useAIAssistantHelpers, nn as useWorkflowDocumentStore, pt as truncateBuilderMessages, qt as useTelemetry, r as useUIStore, ra as getNewWorkflow, s as useWorkflowsStore, st as chatWithBuilder, un as useNodeHelpers, ut as getAiSessions, yn as isDebouncedFunction, zr as useSourceControlStore } from "./users.store-ONgXjJ_v.js";
import { t as useToast } from "./useToast-2kyDEDpr.js";
import { Es as isExpression, Fc as AI_BUILDER_PLAN_MODE_EXPERIMENT, Hc as CODE_WORKFLOW_BUILDER_EXPERIMENT, Ni as LOCAL_STORAGE_BROWSER_NOTIFICATION_METADATA, Rc as AI_BUILDER_TEMPLATE_EXAMPLES_EXPERIMENT, Xc as FOCUSED_NODES_EXPERIMENT, Zc as MERGE_ASK_BUILD_EXPERIMENT, ci as MODAL_CANCEL, fi as NPS_SURVEY_MODAL_KEY, gl as THREE_DAYS_IN_MILLIS, hl as SIX_MONTHS_IN_MILLIS, li as MODAL_CLOSE, ml as SEVEN_DAYS_IN_MILLIS, pc as getResourcePermissions, rs as dedupe, t as AutoSaveState, ui as MODAL_CONFIRM, ul as DEBOUNCE_TIME, vl as getDebounceTime, zr as VIEWS } from "./constants-BU4NlsTf.js";
import { T as defineStore, h as assert, t as useRootStore } from "./useRootStore-DRDFnrY8.js";
import { In as STORES, a as updateWorkflowHistoryVersion, at as updateNpsSurveyState, i as getWorkflowVersionsByIds, n as getWorkflowHistory, r as getWorkflowVersion, t as useSettingsStore } from "./settings.store-C7W7G3FT.js";
import { t as useExternalHooks } from "./useExternalHooks-l6acHqoU.js";
import { a as BUILDER_ENABLED_VIEWS, r as useChatPanelStateStore, t as useCodeDiff } from "./useCodeDiff-FeihD_Bl.js";
import { n as findPlaceholderDetails, r as formatPlaceholderPath } from "./dist-C3y8Fra6.js";
import { t as require_FileSaver_min } from "./FileSaver.min-DcKH1naF.js";
import { t as useTemplatesStore } from "./templates.store-D4K8jYk9.js";
import { t as useFocusPanelStore } from "./focusPanel.store-Cx0Rmm7C.js";
import { t as useDocumentTitle } from "./useDocumentTitle-DY9ZbXVT.js";
//#region src/features/ai/assistant/assistant.types.ts
function isVersionCardMessage(msg) {
	return msg.type === "custom" && "customType" in msg && msg.customType === "version_card";
}
function isCollapsedGroupMessage(msg) {
	return msg.type === "custom" && "customType" in msg && msg.customType === "collapsed_group";
}
function createCollapsedGroupMessage(messages) {
	return {
		id: `collapsed-group-${messages[0]?.id ?? "unknown"}`,
		role: "assistant",
		type: "custom",
		customType: "collapsed_group",
		data: { collapsedMessages: messages }
	};
}
function isPlanModeQuestionsMessage(msg) {
	return msg.type === "custom" && "customType" in msg && msg.customType === "questions";
}
function isPlanModePlanMessage(msg) {
	return msg.type === "custom" && "customType" in msg && msg.customType === "plan";
}
function isPlanModeUserAnswersMessage(msg) {
	return msg.type === "custom" && msg.role === "user" && "customType" in msg && msg.customType === "user_answers";
}
function isTextMessage(msg) {
	return "type" in msg && msg.type === "message" && "text" in msg;
}
function hasRevertVersionId(msg) {
	return isTextMessage(msg) && typeof msg.revertVersionId === "string";
}
function isSummaryMessage(msg) {
	return "type" in msg && msg.type === "summary" && "title" in msg && "content" in msg;
}
function isAgentSuggestionMessage(msg) {
	return "type" in msg && msg.type === "agent-suggestion" && "title" in msg && "text" in msg;
}
function isCodeDiffMessage(msg) {
	return "type" in msg && msg.type === "code-diff" && "codeDiff" in msg;
}
function isWorkflowUpdatedMessage(msg) {
	return "type" in msg && msg.type === "workflow-updated" && "codeSnippet" in msg;
}
function isToolMessage(msg) {
	return "type" in msg && msg.type === "tool" && "toolName" in msg && "status" in msg;
}
function isQuestionsMessage(msg) {
	return "type" in msg && msg.type === "questions" && "questions" in msg;
}
function isPlanMessage(msg) {
	return "type" in msg && msg.type === "plan" && "plan" in msg;
}
function isUserAnswersMessage(msg) {
	return "type" in msg && msg.type === "user_answers" && "answers" in msg;
}
function isWebFetchApprovalMessage(msg) {
	return "type" in msg && msg.type === "web_fetch_approval" && "requestId" in msg && "url" in msg && "domain" in msg;
}
function isWebFetchApprovalCustomMessage(msg) {
	return msg.type === "custom" && "customType" in msg && msg.customType === "web_fetch_approval";
}
function isMessagesCompactedEvent(msg) {
	return "type" in msg && msg.type === "messages-compacted";
}
//#endregion
//#region src/features/ai/assistant/focusedNodes.utils.ts
/**
* Builds the context payload for focused nodes to send to the AI backend.
* Looks up full node data from the workflow, traverses connections, and
* extracts node issues into an API-ready payload.
*/
function buildFocusedNodesPayload(confirmedNodes, allNodes, connectionsByDestination, connectionsBySource) {
	if (confirmedNodes.length === 0) return [];
	const nodeById = new Map(allNodes.map((n) => [n.id, n]));
	return confirmedNodes.map((focusedNode) => {
		const node = nodeById.get(focusedNode.nodeId);
		if (!node) return {
			name: focusedNode.nodeName,
			incomingConnections: [],
			outgoingConnections: []
		};
		const incomingConnections = [];
		const nodeConnections = connectionsByDestination[node.name];
		if (nodeConnections?.main) {
			for (const inputConnections of nodeConnections.main) if (inputConnections) {
				for (const conn of inputConnections) if (conn.node && !incomingConnections.includes(conn.node)) incomingConnections.push(conn.node);
			}
		}
		const outgoingConnections = [];
		const sourceConnections = connectionsBySource[node.name];
		if (sourceConnections?.main) {
			for (const outputConnections of sourceConnections.main) if (outputConnections) {
				for (const conn of outputConnections) if (conn.node && !outgoingConnections.includes(conn.node)) outgoingConnections.push(conn.node);
			}
		}
		let issues;
		if (node.issues) {
			issues = {};
			const nodeIssues = node.issues;
			if (nodeIssues.parameters) {
				for (const [param, paramIssues] of Object.entries(nodeIssues.parameters)) if (Array.isArray(paramIssues)) issues[param] = paramIssues;
			}
			if (nodeIssues.credentials) {
				for (const [cred, credIssues] of Object.entries(nodeIssues.credentials)) if (Array.isArray(credIssues)) issues[`credential:${cred}`] = credIssues;
			}
			if (Object.keys(issues).length === 0) issues = void 0;
		}
		return {
			name: node.name,
			issues,
			incomingConnections,
			outgoingConnections
		};
	});
}
//#endregion
//#region src/features/ai/assistant/focusedNodes.store.ts
var COLLAPSE_THRESHOLD = 7;
var MAX_UNCONFIRMED_DISPLAY = 50;
var useFocusedNodesStore = defineStore(STORES.FOCUSED_NODES, () => {
	const workflowsStore = useWorkflowsStore();
	const workflowDocumentStore = computed(() => useWorkflowDocumentStore(createWorkflowDocumentId(workflowsStore.workflowId)));
	const posthogStore = usePostHog();
	const telemetry = useTelemetry();
	const chatPanelStateStore = useChatPanelStateStore();
	const ndvStore = useNDVStore();
	const isFeatureEnabled = computed(() => {
		return posthogStore.isVariantEnabled(FOCUSED_NODES_EXPERIMENT.name, FOCUSED_NODES_EXPERIMENT.variant);
	});
	const focusedNodesMap = ref({});
	const canvasSelectedNodeIds = ref(/* @__PURE__ */ new Set());
	const confirmedNodes = computed(() => Object.values(focusedNodesMap.value).filter((node) => node.state === "confirmed"));
	const unconfirmedNodes = computed(() => Object.values(focusedNodesMap.value).filter((node) => node.state === "unconfirmed"));
	const filteredUnconfirmedNodes = computed(() => {
		const availableNodes = workflowDocumentStore.value.allNodes.length - confirmedNodes.value.length;
		if (confirmedNodes.value.length > 0 && availableNodes > 0 && unconfirmedNodes.value.length >= availableNodes) return [];
		return unconfirmedNodes.value;
	});
	const allVisibleNodes = computed(() => [...confirmedNodes.value, ...filteredUnconfirmedNodes.value]);
	const shouldCollapseChips = computed(() => confirmedNodes.value.length >= COLLAPSE_THRESHOLD);
	const confirmedNodeIds = computed(() => confirmedNodes.value.map((node) => node.nodeId));
	const hasVisibleNodes = computed(() => allVisibleNodes.value.length > 0);
	const tooManyUnconfirmed = computed(() => filteredUnconfirmedNodes.value.length > MAX_UNCONFIRMED_DISPLAY);
	function isNodeSelectedOnCanvas(nodeId) {
		return canvasSelectedNodeIds.value.has(nodeId);
	}
	function getNodeInfo(nodeId) {
		const node = workflowDocumentStore.value.allNodes.find((n) => n.id === nodeId);
		if (!node) return null;
		return {
			name: node.name,
			type: node.type
		};
	}
	function confirmNodes(nodeIds, source, options) {
		const nodeTypes = [];
		for (const nodeId of nodeIds) {
			const existingNode = focusedNodesMap.value[nodeId];
			if (existingNode) {
				focusedNodesMap.value[nodeId] = {
					...existingNode,
					state: "confirmed"
				};
				nodeTypes.push(existingNode.nodeType);
			} else {
				const nodeInfo = getNodeInfo(nodeId);
				if (nodeInfo) {
					focusedNodesMap.value[nodeId] = {
						nodeId,
						nodeName: nodeInfo.name,
						nodeType: nodeInfo.type,
						state: "confirmed"
					};
					nodeTypes.push(nodeInfo.type);
				}
			}
		}
		if (nodeTypes.length > 0) telemetry.track("ai.focusedNodes.added", {
			source,
			node_count: nodeTypes.length,
			node_types: nodeTypes,
			...source === "mention" && options?.mentionQueryLength !== void 0 ? { mention_query_length: options.mentionQueryLength } : {}
		});
	}
	const debouncedSetUnconfirmed = useDebounceFn((nodeIds) => {
		const currentConfirmedIds = new Set(confirmedNodeIds.value);
		const newMap = {};
		for (const node of confirmedNodes.value) newMap[node.nodeId] = node;
		for (const nodeId of nodeIds) if (!currentConfirmedIds.has(nodeId)) {
			const existingUnconfirmed = focusedNodesMap.value[nodeId];
			if (existingUnconfirmed && existingUnconfirmed.state === "unconfirmed") newMap[nodeId] = existingUnconfirmed;
			else {
				const nodeInfo = getNodeInfo(nodeId);
				if (nodeInfo) newMap[nodeId] = {
					nodeId,
					nodeName: nodeInfo.name,
					nodeType: nodeInfo.type,
					state: "unconfirmed"
				};
			}
		}
		focusedNodesMap.value = newMap;
	}, getDebounceTime(DEBOUNCE_TIME.INPUT.VALIDATION));
	function setUnconfirmedFromCanvasSelection(nodeIds) {
		canvasSelectedNodeIds.value = new Set(nodeIds);
		debouncedSetUnconfirmed(nodeIds);
	}
	function toggleNode(nodeId, isSelectedOnCanvas) {
		const node = focusedNodesMap.value[nodeId];
		if (!node) return;
		if (node.state === "unconfirmed") confirmNodes([nodeId], "canvas_selection");
		else if (node.state === "confirmed") if (isSelectedOnCanvas) focusedNodesMap.value[nodeId] = {
			...node,
			state: "unconfirmed"
		};
		else removeNode(nodeId);
	}
	function removeNode(nodeId, method = "badge_click") {
		const node = focusedNodesMap.value[nodeId];
		if (!node) return;
		const wasConfirmed = node.state === "confirmed";
		delete focusedNodesMap.value[nodeId];
		focusedNodesMap.value = { ...focusedNodesMap.value };
		if (wasConfirmed) telemetry.track("ai.focusedNodes.removed", {
			method,
			removed_count: 1,
			remaining_count: confirmedNodes.value.length
		});
	}
	function clearAll() {
		const previousCount = confirmedNodes.value.length;
		focusedNodesMap.value = {};
		if (previousCount > 0) telemetry.track("ai.focusedNodes.removed", {
			method: "clear_all",
			removed_count: previousCount,
			remaining_count: 0
		});
	}
	function handleNodeDeleted(nodeId) {
		if (focusedNodesMap.value[nodeId]) {
			delete focusedNodesMap.value[nodeId];
			focusedNodesMap.value = { ...focusedNodesMap.value };
		}
	}
	function handleNodeRenamed(nodeId, newName) {
		const node = focusedNodesMap.value[nodeId];
		if (node) focusedNodesMap.value[nodeId] = {
			...node,
			nodeName: newName
		};
	}
	function setState(nodeId, state) {
		const node = focusedNodesMap.value[nodeId];
		if (node) focusedNodesMap.value[nodeId] = {
			...node,
			state
		};
	}
	function confirmAllUnconfirmed() {
		const unconfirmedNodeIds = unconfirmedNodes.value.map((n) => n.nodeId);
		if (unconfirmedNodeIds.length > 0) confirmNodes(unconfirmedNodeIds, "canvas_selection");
	}
	function removeAllConfirmed() {
		const previousCount = confirmedNodes.value.length;
		const confirmedIds = confirmedNodes.value.map((n) => n.nodeId);
		for (const nodeId of confirmedIds) if (canvasSelectedNodeIds.value.has(nodeId)) {
			const node = focusedNodesMap.value[nodeId];
			if (node) focusedNodesMap.value[nodeId] = {
				...node,
				state: "unconfirmed"
			};
		} else delete focusedNodesMap.value[nodeId];
		focusedNodesMap.value = { ...focusedNodesMap.value };
		if (previousCount > 0) telemetry.track("ai.focusedNodes.removed", {
			method: "clear_all",
			removed_count: previousCount,
			remaining_count: confirmedNodes.value.length
		});
	}
	watch(() => workflowsStore.workflowId, (_newId, oldId) => {
		const previousCount = confirmedNodes.value.length;
		focusedNodesMap.value = {};
		if (previousCount > 0 && oldId !== void 0) telemetry.track("ai.focusedNodes.removed", {
			method: "workflow_changed",
			removed_count: previousCount,
			remaining_count: 0
		});
	});
	watch(() => workflowDocumentStore.value.allNodes, (newNodes) => {
		const currentNodeIds = new Set(newNodes.map((n) => n.id));
		const focusedIds = Object.keys(focusedNodesMap.value);
		let deletedConfirmedCount = 0;
		for (const focusedId of focusedIds) if (!currentNodeIds.has(focusedId)) {
			if (focusedNodesMap.value[focusedId]?.state === "confirmed") deletedConfirmedCount++;
			delete focusedNodesMap.value[focusedId];
		}
		if (deletedConfirmedCount > 0) {
			focusedNodesMap.value = { ...focusedNodesMap.value };
			telemetry.track("ai.focusedNodes.removed", {
				method: "node_deleted",
				removed_count: deletedConfirmedCount,
				remaining_count: confirmedNodes.value.length
			});
		}
	}, { deep: true });
	watch(() => workflowDocumentStore.value.allNodes.map((n) => ({
		id: n.id,
		name: n.name
	})), (newNodeNames) => {
		for (const { id, name } of newNodeNames) {
			const focusedNode = focusedNodesMap.value[id];
			if (focusedNode && focusedNode.nodeName !== name) focusedNodesMap.value[id] = {
				...focusedNode,
				nodeName: name
			};
		}
	}, { deep: true });
	watch(() => ndvStore.activeNode, (node) => {
		if (!isFeatureEnabled.value || !chatPanelStateStore.isOpen) return;
		if (node && !focusedNodesMap.value[node.id]) setUnconfirmedFromCanvasSelection([node.id]);
	});
	function buildContextPayload() {
		if (!isFeatureEnabled.value) return [];
		return buildFocusedNodesPayload(confirmedNodes.value, workflowDocumentStore.value.allNodes, workflowDocumentStore.value.connectionsByDestinationNode, workflowDocumentStore.value.connectionsBySourceNode);
	}
	return {
		focusedNodesMap,
		canvasSelectedNodeIds,
		isFeatureEnabled,
		confirmedNodes,
		unconfirmedNodes,
		filteredUnconfirmedNodes,
		allVisibleNodes,
		shouldCollapseChips,
		confirmedNodeIds,
		hasVisibleNodes,
		tooManyUnconfirmed,
		confirmNodes,
		setUnconfirmedFromCanvasSelection,
		toggleNode,
		removeNode,
		clearAll,
		handleNodeDeleted,
		handleNodeRenamed,
		setState,
		isNodeSelectedOnCanvas,
		buildContextPayload,
		confirmAllUnconfirmed,
		removeAllConfirmed
	};
});
//#endregion
//#region src/features/ai/assistant/builder.utils.ts
function generateShortId() {
	return Math.random().toString(36).substring(2, 11);
}
function generateMessageId() {
	return `${Date.now()}-${generateShortId()}`;
}
async function createBuilderPayload(text, id, options) {
	const assistantHelpers = useAIAssistantHelpers();
	const posthogStore = usePostHog();
	const focusedNodesStore = useFocusedNodesStore();
	const workflowContext = {};
	const shouldExcludeParameterValues = options.allowSendingParameterValues === false;
	if (options.workflow) workflowContext.currentWorkflow = {
		...await assistantHelpers.simplifyWorkflowForAssistant(options.workflow, { excludeParameterValues: shouldExcludeParameterValues }),
		id: options.workflow.id
	};
	if (options.executionData) {
		workflowContext.executionData = assistantHelpers.simplifyResultData(options.executionData, {
			compact: true,
			removeParameterValues: shouldExcludeParameterValues
		});
		if (options.workflow && !shouldExcludeParameterValues) workflowContext.expressionValues = await assistantHelpers.extractExpressionsFromWorkflow(options.workflow, options.executionData);
	}
	const selectedNodes = focusedNodesStore.buildContextPayload();
	if (selectedNodes.length > 0) workflowContext.selectedNodes = selectedNodes;
	const isPinDataEnabled = posthogStore.getVariant(CODE_WORKFLOW_BUILDER_EXPERIMENT.name) === CODE_WORKFLOW_BUILDER_EXPERIMENT.codePinData;
	const featureFlags = {
		templateExamples: posthogStore.getVariant(AI_BUILDER_TEMPLATE_EXAMPLES_EXPERIMENT.name) === AI_BUILDER_TEMPLATE_EXAMPLES_EXPERIMENT.variant,
		pinData: isPinDataEnabled,
		planMode: options.isPlanModeEnabled ?? false,
		mergeAskBuild: posthogStore.isFeatureEnabled(MERGE_ASK_BUILD_EXPERIMENT.name)
	};
	if (options.nodesForSchema?.length) {
		const { schemas, pinnedNodeNames } = assistantHelpers.getNodesSchemas(options.workflowId, options.nodesForSchema, shouldExcludeParameterValues);
		workflowContext.executionSchema = schemas;
		workflowContext.valuesExcluded = shouldExcludeParameterValues;
		if (pinnedNodeNames.length > 0) workflowContext.pinnedNodes = pinnedNodeNames;
	}
	return {
		role: "user",
		type: "message",
		id,
		text,
		quickReplyType: options.quickReplyType,
		workflowContext,
		featureFlags,
		mode: options.mode
	};
}
/**
* Extracts all revertVersionId values from an array of messages.
* Only extracts from messages that have a string revertVersionId property.
*/
function extractRevertVersionIds(messages) {
	return messages.filter(hasRevertVersionId).map((msg) => msg.revertVersionId);
}
/**
* Fetches which version IDs still exist in workflow history.
* Returns a Map of versionId -> createdAt for existing versions.
* Returns an empty map if the fetch fails (all versions will be treated as non-existent).
*/
async function fetchExistingVersionIds(restApiContext, workflowId, versionIds) {
	if (versionIds.length === 0) return /* @__PURE__ */ new Map();
	try {
		const versionsResponse = await getWorkflowVersionsByIds(restApiContext, workflowId, versionIds);
		return new Map(versionsResponse.versions.map((v) => [v.versionId, v.createdAt]));
	} catch {
		return /* @__PURE__ */ new Map();
	}
}
/**
* Removes revertVersionId from a TextMessage, returning a valid TextMessage.
* Since revertVersionId is optional on TextMessage, the result is still a valid TextMessage.
*/
function removeRevertVersionId(msg) {
	const { revertVersionId: _, ...rest } = msg;
	return rest;
}
/**
* Enriches messages with revertVersion object containing both id and createdAt.
* If version doesn't exist in the map, removes revertVersionId from the message.
*/
function enrichMessagesWithRevertVersion(messages, versionMap) {
	return messages.map((msg) => {
		if (!hasRevertVersionId(msg)) return msg;
		const createdAt = versionMap.get(msg.revertVersionId);
		if (createdAt) return {
			...msg,
			revertVersion: {
				id: msg.revertVersionId,
				createdAt
			}
		};
		return removeRevertVersionId(msg);
	});
}
//#endregion
//#region src/features/ai/assistant/composables/useBuilderMessages.ts
/**
* Factory functions for creating custom UI messages.
* Shared between streaming (processSingleMessage) and session replay (mapAssistantMessageToUI).
*/
function createQuestionsUIMessage(id, questions, introMessage) {
	return {
		id,
		role: "assistant",
		type: "custom",
		customType: "questions",
		data: {
			questions,
			introMessage
		},
		read: false
	};
}
function createPlanUIMessage(id, plan) {
	return {
		id,
		role: "assistant",
		type: "custom",
		customType: "plan",
		data: { plan },
		read: false
	};
}
function createWebFetchApprovalUIMessage(id, data) {
	return {
		id,
		role: "assistant",
		type: "custom",
		customType: "web_fetch_approval",
		data,
		read: false
	};
}
function createUserAnswersUIMessage(id, answers) {
	return {
		id,
		role: "user",
		type: "custom",
		customType: "user_answers",
		data: { answers }
	};
}
function useBuilderMessages() {
	const locale = useI18n();
	/**
	* Clear rating from all messages
	*/
	function clearRatingLogic(messages) {
		return messages.map((message) => {
			if (message.type === "text" && "showRating" in message) {
				const { showRating, ratingStyle, ...cleanMessage } = message;
				return cleanMessage;
			}
			return message;
		});
	}
	/**
	* Apply rating logic to messages - only show rating on the last AI text message after workflow-updated
	* when no tools are running
	*/
	function applyRatingLogic(messages) {
		const { hasAnyRunningTools, isStillThinking } = getThinkingState(messages);
		if (hasAnyRunningTools || isStillThinking) return clearRatingLogic(messages);
		let lastWorkflowUpdateIndex = -1;
		for (let i = messages.length - 1; i >= 0; i--) if (messages[i].type === "workflow-updated") {
			lastWorkflowUpdateIndex = i;
			break;
		}
		if (lastWorkflowUpdateIndex === -1) return messages;
		let lastAssistantTextIndex = -1;
		for (let i = messages.length - 1; i >= 0; i--) if (messages[i].type === "text" && messages[i].role === "assistant" && i > lastWorkflowUpdateIndex) {
			lastAssistantTextIndex = i;
			break;
		}
		return messages.map((message, index) => {
			if (message.type === "text" && message.role === "assistant" && index === lastAssistantTextIndex) return {
				...message,
				showRating: true,
				ratingStyle: "minimal"
			};
			if (message.type === "text" && "showRating" in message) {
				const { showRating, ratingStyle, ...cleanMessage } = message;
				return cleanMessage;
			}
			return message;
		});
	}
	/**
	* Process a tool message - either update existing or add new
	*/
	function processToolMessage(messages, msg, messageId) {
		const existingIndex = msg.toolCallId ? messages.findIndex((m) => m.type === "tool" && m.toolCallId === msg.toolCallId) : -1;
		if (existingIndex !== -1) {
			const existing = messages[existingIndex];
			messages[existingIndex] = {
				...existing,
				id: `${messageId}-${msg.toolCallId}`,
				status: msg.status,
				customDisplayTitle: msg.customDisplayTitle ?? existing.customDisplayTitle,
				updates: [...existing.updates || [], ...msg.updates || []]
			};
		} else {
			const toolMessage = {
				id: `${messageId}-${msg.toolCallId}`,
				role: "assistant",
				type: "tool",
				toolName: msg.toolName,
				toolCallId: msg.toolCallId,
				displayTitle: msg.displayTitle,
				customDisplayTitle: msg.customDisplayTitle,
				status: msg.status,
				updates: msg.updates || [],
				read: false
			};
			messages.push(toolMessage);
		}
	}
	/**
	* Process a single message and add it to the messages array
	*/
	function processSingleMessage(messages, msg, messageId, retry) {
		let shouldClearThinking = false;
		if (isSummaryMessage(msg)) {
			messages.push({
				id: messageId,
				role: "assistant",
				type: "block",
				title: msg.title,
				content: msg.content,
				read: false
			});
			shouldClearThinking = true;
		} else if (isAgentSuggestionMessage(msg)) {
			messages.push({
				id: messageId,
				role: "assistant",
				type: "block",
				title: msg.title,
				content: msg.text,
				read: false
			});
			shouldClearThinking = true;
		} else if (isTextMessage(msg)) {
			messages.push({
				id: messageId,
				role: "assistant",
				type: "text",
				content: msg.text,
				codeSnippet: msg.codeSnippet,
				read: false
			});
			shouldClearThinking = true;
		} else if (isCodeDiffMessage(msg)) {
			messages.push({
				id: messageId,
				role: "assistant",
				type: "code-diff",
				description: msg.description,
				codeDiff: msg.codeDiff,
				suggestionId: msg.suggestionId,
				sdkSessionId: msg.sdkSessionId,
				nodeName: msg.nodeName,
				quickReplies: msg.quickReplies,
				read: false
			});
			shouldClearThinking = true;
		} else if (isQuestionsMessage(msg)) {
			const existingQuestionsIndex = messages.findIndex((m) => m.type === "custom" && "customType" in m && m.customType === "questions");
			const hasUserAnswerAfterQuestions = existingQuestionsIndex !== -1 && messages.slice(existingQuestionsIndex + 1).some((m) => m.role === "user");
			if (existingQuestionsIndex === -1 || hasUserAnswerAfterQuestions) messages.push(createQuestionsUIMessage(messageId, msg.questions, msg.introMessage));
			shouldClearThinking = true;
		} else if (isPlanMessage(msg)) {
			const existingPlanIndex = messages.findLastIndex((m) => m.type === "custom" && "customType" in m && m.customType === "plan");
			const hasUserResponseAfterPlan = existingPlanIndex !== -1 && messages.slice(existingPlanIndex + 1).some((m) => m.role === "user");
			if (existingPlanIndex === -1 || hasUserResponseAfterPlan) messages.push(createPlanUIMessage(messageId, msg.plan));
			shouldClearThinking = true;
		} else if (isUserAnswersMessage(msg)) {
			messages.push(createUserAnswersUIMessage(messageId, msg.answers));
			shouldClearThinking = true;
		} else if (isWebFetchApprovalMessage(msg)) {
			messages.push(createWebFetchApprovalUIMessage(messageId, {
				requestId: msg.requestId,
				url: msg.url,
				domain: msg.domain
			}));
			shouldClearThinking = true;
		} else if (isWorkflowUpdatedMessage(msg)) messages.push({
			...msg,
			id: messageId,
			read: false
		});
		else if (isToolMessage(msg)) processToolMessage(messages, msg, messageId);
		else if ("type" in msg && msg.type === "error" && "content" in msg) {
			messages.push({
				id: messageId,
				role: "assistant",
				type: "error",
				content: msg.content,
				read: false,
				retry
			});
			shouldClearThinking = true;
		}
		return shouldClearThinking;
	}
	function getToolMessages(messages) {
		return messages.filter((msg) => msg.type === "tool");
	}
	function getRunningTools(messages) {
		return getToolMessages(messages).filter((msg) => msg.status === "running");
	}
	/**
	* If any tools are running, then it's still running tools and not done thinking
	* If all tools are done and no text response yet, then it's still thinking
	* Otherwise, it's done
	*
	* @param messages
	* @returns
	*/
	function getThinkingState(messages) {
		if (getRunningTools(messages).length > 0) return {
			hasAnyRunningTools: true,
			isStillThinking: false
		};
		const isToolDone = (status) => status === "completed" || status === "error";
		const hasCompletedTools = getToolMessages(messages).some((msg) => isToolDone(msg.status));
		let lastCompletedToolIndex = -1;
		for (let i = messages.length - 1; i >= 0; i--) {
			const msg = messages[i];
			if (msg.type === "tool" && isToolDone(msg.status)) {
				lastCompletedToolIndex = i;
				break;
			}
		}
		let hasResponseAfterTools = false;
		if (lastCompletedToolIndex !== -1) for (let i = lastCompletedToolIndex + 1; i < messages.length; i++) {
			const msg = messages[i];
			if (msg.type === "text" || msg.type === "custom" || msg.type === "code-diff" || msg.type === "block") {
				hasResponseAfterTools = true;
				break;
			}
		}
		return {
			hasAnyRunningTools: false,
			isStillThinking: hasCompletedTools && !hasResponseAfterTools
		};
	}
	/**
	* Determine the thinking message based on tool states
	*/
	function determineThinkingMessage(messages) {
		const { hasAnyRunningTools, isStillThinking } = getThinkingState(messages);
		if (hasAnyRunningTools) {
			const runningTools = getRunningTools(messages);
			const lastRunningTool = runningTools[runningTools.length - 1];
			if (lastRunningTool) {
				const toolName = lastRunningTool.customDisplayTitle || lastRunningTool.displayTitle;
				if (toolName) return toolName;
			}
			return locale.baseText("aiAssistant.thinkingSteps.thinking");
		}
		if (!hasAnyRunningTools && isStillThinking) return locale.baseText("aiAssistant.thinkingSteps.thinking");
	}
	function processAssistantMessages(currentMessages, newMessages, userMessageId, retry) {
		const mutableMessages = [...currentMessages];
		let shouldClearThinking = false;
		const hasCompaction = newMessages.some(isMessagesCompactedEvent);
		if (hasCompaction) mutableMessages.length = 0;
		const messageGroupId = generateShortId();
		newMessages.forEach((msg, index) => {
			const clearThinking = processSingleMessage(mutableMessages, msg, `${userMessageId}--${messageGroupId}--${index}`, retry);
			shouldClearThinking = shouldClearThinking || clearThinking;
		});
		const thinkingMessage = hasCompaction ? locale.baseText("aiAssistant.thinkingSteps.compacting") : determineThinkingMessage(mutableMessages);
		return {
			messages: removeRetryFromOldErrorMessages(mutableMessages),
			thinkingMessage,
			shouldClearThinking: shouldClearThinking && mutableMessages.length > currentMessages.length
		};
	}
	function removeRetryFromOldErrorMessages(messages) {
		return messages.map((message, index) => {
			if (message.type === "error" && message.retry && index !== messages.length - 1) {
				const { retry, ...messageWithoutRetry } = message;
				return messageWithoutRetry;
			}
			return message;
		});
	}
	function createUserMessage(content, id, revertVersion, focusedNodeNames) {
		return {
			id,
			role: "user",
			type: "text",
			content,
			revertVersion,
			...focusedNodeNames && focusedNodeNames.length > 0 ? { focusedNodeNames } : {},
			read: true
		};
	}
	/**
	* Create a custom user message for displaying answers to plan mode questions.
	* This shows the user's answers in a nicely formatted way rather than raw JSON.
	*/
	function createUserAnswersMessage(answers, id) {
		return {
			id,
			role: "user",
			type: "custom",
			customType: "user_answers",
			data: { answers }
		};
	}
	function createAssistantMessage(content, id, options) {
		if (options?.aborted) return {
			id,
			role: "assistant",
			type: "text",
			content,
			read: true,
			aborted: true
		};
		return {
			id,
			role: "assistant",
			type: "text",
			content,
			read: true
		};
	}
	function createErrorMessage(content, id, retry) {
		return {
			id,
			role: "assistant",
			type: "error",
			content,
			retry,
			read: false
		};
	}
	function clearMessages() {
		return [];
	}
	function addMessages(currentMessages, newMessages) {
		return [...currentMessages, ...newMessages];
	}
	function mapAssistantMessageToUI(message, id) {
		if (isSummaryMessage(message)) return {
			id,
			role: "assistant",
			type: "block",
			title: message.title,
			content: message.content,
			read: false
		};
		if (isAgentSuggestionMessage(message)) return {
			id,
			role: "assistant",
			type: "block",
			title: message.title,
			content: message.text,
			read: false
		};
		if (isTextMessage(message)) return {
			id,
			role: message.role ?? "assistant",
			type: "text",
			content: message.text,
			codeSnippet: message.codeSnippet,
			revertVersion: message.revertVersion,
			read: false
		};
		if (isCodeDiffMessage(message)) return {
			id,
			role: "assistant",
			type: "code-diff",
			description: message.description,
			codeDiff: message.codeDiff,
			suggestionId: message.suggestionId,
			sdkSessionId: message.sdkSessionId,
			nodeName: message.nodeName,
			quickReplies: message.quickReplies,
			read: false
		};
		if (isQuestionsMessage(message)) return createQuestionsUIMessage(id, message.questions, message.introMessage);
		if (isPlanMessage(message)) return createPlanUIMessage(id, message.plan);
		if (isUserAnswersMessage(message)) return createUserAnswersUIMessage(id, message.answers);
		if (isWebFetchApprovalMessage(message)) return createWebFetchApprovalUIMessage(id, {
			requestId: message.requestId,
			url: message.url,
			domain: message.domain
		});
		if (isWorkflowUpdatedMessage(message)) return {
			...message,
			id,
			read: false
		};
		if (isToolMessage(message)) return {
			id,
			role: "assistant",
			type: "tool",
			toolName: message.toolName,
			toolCallId: message.toolCallId,
			displayTitle: message.displayTitle,
			customDisplayTitle: message.customDisplayTitle,
			status: message.status,
			updates: message.updates || [],
			read: false
		};
		if ("type" in message && message.type === "event") return {
			...message,
			id,
			read: false
		};
		return {
			id,
			role: "assistant",
			type: "text",
			content: locale.baseText("aiAssistant.thinkingSteps.thinking"),
			read: false
		};
	}
	return {
		processAssistantMessages,
		createUserMessage,
		createUserAnswersMessage,
		createAssistantMessage,
		createErrorMessage,
		clearMessages,
		addMessages,
		mapAssistantMessageToUI,
		applyRatingLogic,
		clearRatingLogic,
		getRunningTools
	};
}
//#endregion
//#region src/features/ai/assistant/composables/useBuilderTodos.ts
/**
* Composable for managing workflow todos (validation issues and placeholders)
* used by the AI builder.
*/
function useBuilderTodos() {
	const workflowsStore = useWorkflowsStore();
	const locale = useI18n();
	const workflowDocumentStore = computed(() => useWorkflowDocumentStore(createWorkflowDocumentId(workflowsStore.workflowId)));
	/**
	* Checks if a node is disabled, either directly or through any ancestor node.
	* Sub-nodes (like AI models) won't execute if their parent node is disabled.
	* Handles nested sub-nodes by recursively checking up the chain.
	*/
	function nodeIsDisabled(nodeName, visited = /* @__PURE__ */ new Set()) {
		if (visited.has(nodeName)) return false;
		visited.add(nodeName);
		if (workflowDocumentStore.value.getNodeByName(nodeName)?.disabled === true) return true;
		const outgoingConnections = workflowDocumentStore.value.outgoingConnectionsByNodeName(nodeName);
		for (const connectionType of Object.keys(outgoingConnections)) {
			if (connectionType === "main") continue;
			const connections = outgoingConnections[connectionType];
			if (connections) for (const connectionGroup of connections) {
				if (!connectionGroup) continue;
				for (const connection of connectionGroup) if (nodeIsDisabled(connection.node, visited)) return true;
			}
		}
		return false;
	}
	/**
	* Checks if a node has pinned data, either directly or through any ancestor node.
	* Sub-nodes (like AI models) don't have pinned data themselves, but if any
	* ancestor node has pinned data, the sub-node's output is already defined.
	* Handles nested sub-nodes by recursively checking up the chain.
	*/
	function nodeHasPinnedData(nodeName, visited = /* @__PURE__ */ new Set()) {
		if (visited.has(nodeName)) return false;
		visited.add(nodeName);
		if (workflowDocumentStore.value.pinData?.[nodeName]?.length) return true;
		const outgoingConnections = workflowDocumentStore.value.outgoingConnectionsByNodeName(nodeName);
		for (const connectionType of Object.keys(outgoingConnections)) {
			if (connectionType === "main") continue;
			const connections = outgoingConnections[connectionType];
			if (connections) for (const connectionGroup of connections) {
				if (!connectionGroup) continue;
				for (const connection of connectionGroup) if (nodeHasPinnedData(connection.node, visited)) return true;
			}
		}
		return false;
	}
	/**
	* Base workflow validation issues filtered to only credentials and parameters types.
	* Excludes issues from nodes that have pinned data or are disabled (including parent disabled).
	*/
	const baseWorkflowIssues = computed(() => {
		workflowDocumentStore.value.pinData;
		workflowDocumentStore.value.allNodes;
		return workflowDocumentStore.value.nodeValidationIssues.filter((issue) => ["credentials", "parameters"].includes(issue.type) && !nodeHasPinnedData(issue.node) && !nodeIsDisabled(issue.node));
	});
	/**
	* Placeholder issues detected in workflow node parameters.
	* These are values with the format <__PLACEHOLDER_VALUE__label__>.
	* Excludes issues from nodes that have pinned data or are disabled (including parent disabled).
	*/
	const placeholderIssues = computed(() => {
		workflowDocumentStore.value.pinData;
		const issues = [];
		const seen = /* @__PURE__ */ new Set();
		for (const node of workflowDocumentStore.value.allNodes) {
			if (!node?.parameters) continue;
			if (nodeHasPinnedData(node.name)) continue;
			if (nodeIsDisabled(node.name)) continue;
			const placeholders = findPlaceholderDetails(node.parameters);
			if (placeholders.length === 0) continue;
			const existingParameterIssues = node.issues?.parameters ?? {};
			for (const placeholder of placeholders) {
				const path = formatPlaceholderPath(placeholder.path);
				const message = locale.baseText("aiAssistant.builder.executeMessage.fillParameter", { interpolate: { label: placeholder.label } });
				const rawMessages = existingParameterIssues[path];
				if ((rawMessages ? Array.isArray(rawMessages) ? rawMessages : [rawMessages] : []).includes(message)) continue;
				const key = `${node.name}|${path}|${placeholder.label}`;
				if (seen.has(key)) continue;
				seen.add(key);
				issues.push({
					node: node.name,
					type: "parameters",
					value: message
				});
			}
		}
		return issues;
	});
	/**
	* Combined list of all workflow todos (base issues + placeholder issues).
	*/
	const workflowTodos = computed(() => [...baseWorkflowIssues.value, ...placeholderIssues.value]);
	/**
	* Checks if there are potential todos that are hidden because nodes have pinned data.
	* Returns true when workflowTodos is empty but there would be todos without the pin filter.
	*/
	const hasTodosHiddenByPinnedData = computed(() => {
		if (workflowTodos.value.length > 0) return false;
		const pinData = workflowDocumentStore.value.pinData;
		if (!pinData || Object.keys(pinData).length === 0) return false;
		if (workflowDocumentStore.value.nodeValidationIssues.some((issue) => ["credentials", "parameters"].includes(issue.type) && nodeHasPinnedData(issue.node) && !nodeIsDisabled(issue.node))) return true;
		for (const node of workflowDocumentStore.value.allNodes) {
			if (!node?.parameters) continue;
			if (!nodeHasPinnedData(node.name)) continue;
			if (nodeIsDisabled(node.name)) continue;
			if (findPlaceholderDetails(node.parameters).length > 0) return true;
		}
		return false;
	});
	/**
	* Returns todos data formatted for telemetry tracking.
	*/
	function getTodosToTrack() {
		return {
			credentials_todo_count: workflowDocumentStore.value.nodeValidationIssues.filter((issue) => issue.type === "credentials").length,
			placeholders_todo_count: placeholderIssues.value.length,
			todos: workflowTodos.value.map((todo) => ({
				type: todo.type,
				node_type: workflowDocumentStore.value.getNodeByName(todo.node)?.type,
				label: todo.value
			}))
		};
	}
	return {
		workflowTodos,
		placeholderIssues,
		getTodosToTrack,
		hasTodosHiddenByPinnedData
	};
}
//#endregion
//#region src/features/workflows/workflowHistory/workflowHistory.store.ts
var import_FileSaver_min = /* @__PURE__ */ __toESM(require_FileSaver_min(), 1);
var useWorkflowHistoryStore = defineStore("workflowHistory", () => {
	const rootStore = useRootStore();
	const settingsStore = useSettingsStore();
	const workflowsStore = useWorkflowsStore();
	const workflowsListStore = useWorkflowsListStore();
	const licensePruneTime = computed(() => settingsStore.settings.workflowHistory?.licensePruneTime);
	const evaluatedPruneTime = computed(() => settingsStore.settings.workflowHistory?.pruneTime);
	const shouldUpgrade = computed(() => licensePruneTime.value !== -1 && licensePruneTime.value === evaluatedPruneTime.value);
	const getWorkflowHistory$1 = async (workflowId, queryParams) => await getWorkflowHistory(rootStore.restApiContext, workflowId, queryParams);
	const getWorkflowVersion$1 = async (workflowId, versionId) => await getWorkflowVersion(rootStore.restApiContext, workflowId, versionId);
	const downloadVersion = async (workflowId, workflowVersionId, data) => {
		const [workflow, workflowVersion] = await Promise.all([workflowsListStore.fetchWorkflow(workflowId), getWorkflowVersion$1(workflowId, workflowVersionId)]);
		const { connections, nodes } = workflowVersion;
		(0, import_FileSaver_min.saveAs)(new Blob([JSON.stringify({
			...workflow,
			nodes,
			connections
		}, null, 2)], { type: "application/json;charset=utf-8" }), `${workflow.name}(${data.formattedCreatedAt}).json`);
	};
	const cloneIntoNewWorkflow = async (workflowId, workflowVersionId, data) => {
		const [workflow, workflowVersion] = await Promise.all([workflowsListStore.fetchWorkflow(workflowId), getWorkflowVersion$1(workflowId, workflowVersionId)]);
		const { connections, nodes } = workflowVersion;
		const { name } = workflow;
		const newWorkflowData = {
			nodes,
			connections,
			name: (await getNewWorkflow(rootStore.restApiContext, { name: `${name} (${data.formattedCreatedAt})` })).name
		};
		return await workflowsStore.createNewWorkflow(newWorkflowData);
	};
	const restoreWorkflow = async (workflowId, workflowVersionId) => {
		const { connections, nodes } = await getWorkflowVersion$1(workflowId, workflowVersionId);
		const updateData = {
			connections,
			nodes
		};
		return await workflowsStore.updateWorkflow(workflowId, updateData, true).catch(async (error) => {
			if (error.httpStatusCode === 400 && typeof error.message === "string" && error.message.includes("can not be activated")) return await workflowsListStore.fetchWorkflow(workflowId);
			else throw new Error(error);
		});
	};
	const updateWorkflowHistoryVersion$1 = async (workflowId, versionId, data) => {
		await updateWorkflowHistoryVersion(rootStore.restApiContext, workflowId, versionId, data);
	};
	return {
		getWorkflowHistory: getWorkflowHistory$1,
		getWorkflowVersion: getWorkflowVersion$1,
		downloadVersion,
		cloneIntoNewWorkflow,
		restoreWorkflow,
		updateWorkflowHistoryVersion: updateWorkflowHistoryVersion$1,
		evaluatedPruneTime,
		shouldUpgrade
	};
});
var useNpsSurveyStore = defineStore("npsSurvey", () => {
	const rootStore = useRootStore();
	const uiStore = useUIStore();
	const settingsStore = useSettingsStore();
	const shouldShowNpsSurveyNext = ref(false);
	const currentSurveyState = ref();
	const currentUserId = ref();
	function setupNpsSurveyOnLogin(userId, settings) {
		currentUserId.value = userId;
		if (settings) setShouldShowNpsSurvey(settings);
	}
	function setShouldShowNpsSurvey(settings) {
		if (!settingsStore.isTelemetryEnabled) {
			shouldShowNpsSurveyNext.value = false;
			return;
		}
		currentSurveyState.value = settings.npsSurvey;
		const userActivated = Boolean(settings.userActivated);
		const userActivatedAt = settings.userActivatedAt;
		const lastShownAt = currentSurveyState.value?.lastShownAt;
		if (!userActivated || !userActivatedAt) return;
		if (Date.now() - userActivatedAt < THREE_DAYS_IN_MILLIS) return;
		if (!currentSurveyState.value || !lastShownAt) {
			shouldShowNpsSurveyNext.value = true;
			return;
		}
		const timeSinceLastShown = Date.now() - lastShownAt;
		if ("responded" in currentSurveyState.value && timeSinceLastShown < SIX_MONTHS_IN_MILLIS) return;
		if ("waitingForResponse" in currentSurveyState.value && timeSinceLastShown < SEVEN_DAYS_IN_MILLIS) return;
		shouldShowNpsSurveyNext.value = true;
	}
	function resetNpsSurveyOnLogOut() {
		shouldShowNpsSurveyNext.value = false;
	}
	async function showNpsSurveyIfPossible() {
		if (!shouldShowNpsSurveyNext.value) return;
		uiStore.openModal(NPS_SURVEY_MODAL_KEY);
		shouldShowNpsSurveyNext.value = false;
		const updatedState = {
			waitingForResponse: true,
			lastShownAt: Date.now(),
			ignoredCount: currentSurveyState.value && "ignoredCount" in currentSurveyState.value ? currentSurveyState.value.ignoredCount : 0
		};
		await updateNpsSurveyState(rootStore.restApiContext, updatedState);
		currentSurveyState.value = updatedState;
	}
	async function respondNpsSurvey() {
		assert(currentSurveyState.value);
		const updatedState = {
			responded: true,
			lastShownAt: currentSurveyState.value.lastShownAt
		};
		await updateNpsSurveyState(rootStore.restApiContext, updatedState);
		currentSurveyState.value = updatedState;
	}
	async function ignoreNpsSurvey() {
		assert(currentSurveyState.value);
		const state = currentSurveyState.value;
		const ignoredCount = "ignoredCount" in state ? state.ignoredCount : 0;
		if (ignoredCount + 1 >= 3) {
			await respondNpsSurvey();
			return;
		}
		const updatedState = {
			waitingForResponse: true,
			lastShownAt: currentSurveyState.value.lastShownAt,
			ignoredCount: ignoredCount + 1
		};
		await updateNpsSurveyState(rootStore.restApiContext, updatedState);
		currentSurveyState.value = updatedState;
	}
	return {
		resetNpsSurveyOnLogOut,
		showNpsSurveyIfPossible,
		ignoreNpsSurvey,
		respondNpsSurvey,
		setupNpsSurveyOnLogin
	};
});
//#endregion
//#region src/app/utils/retryUtils.ts
/**
* Initial delay for exponential backoff in milliseconds
*/
var RETRY_START_DELAY = 2e3;
/**
* Maximum delay for exponential backoff in milliseconds
*/
var RETRY_MAX_DELAY = 32e3;
/**
* Calculates exponential backoff delay
* @param retryCount - The current retry attempt (1-based)
* @param startDelay - The initial delay in milliseconds
* @param maxDelay - The maximum delay in milliseconds
* @returns The calculated delay in milliseconds
*/
function calculateExponentialBackoff(retryCount, startDelay = RETRY_START_DELAY, maxDelay = RETRY_MAX_DELAY) {
	return Math.min(startDelay * Math.pow(2, retryCount - 1), maxDelay);
}
//#endregion
//#region src/app/stores/workflowSave.store.ts
/**
* Store for managing workflow save state.
* This ensures all components share the same save state across the app.
*
* Tracks both:
* - `pendingSave`: Any save operation in progress
* - `autoSaveState`: State of the debounced autosave scheduler
*
*/
var useWorkflowSaveStore = defineStore("workflowSave", () => {
	const autoSaveState = ref(AutoSaveState.Idle);
	const pendingSave = ref(null);
	const retryCount = ref(0);
	const retryDelay = ref(RETRY_START_DELAY);
	const isRetrying = ref(false);
	const lastError = ref(null);
	const conflictModalShown = ref(false);
	function setAutoSaveState(state) {
		autoSaveState.value = state;
	}
	function setPendingSave(promise) {
		pendingSave.value = promise;
	}
	function incrementRetry() {
		retryCount.value++;
		retryDelay.value = calculateExponentialBackoff(retryCount.value);
	}
	function getRetryDelay() {
		return retryDelay.value;
	}
	function setRetrying(value) {
		isRetrying.value = value;
	}
	function setLastError(error) {
		lastError.value = error;
	}
	function setConflictModalShown(value) {
		conflictModalShown.value = value;
	}
	function resetRetry() {
		retryCount.value = 0;
		retryDelay.value = RETRY_START_DELAY;
		isRetrying.value = false;
		lastError.value = null;
		conflictModalShown.value = false;
	}
	function reset() {
		autoSaveState.value = AutoSaveState.Idle;
		pendingSave.value = null;
		resetRetry();
	}
	return {
		autoSaveState,
		pendingSave,
		retryCount,
		retryDelay,
		isRetrying,
		lastError,
		conflictModalShown,
		setAutoSaveState,
		setPendingSave,
		incrementRetry,
		getRetryDelay,
		setRetrying,
		setLastError,
		setConflictModalShown,
		resetRetry,
		reset
	};
});
//#endregion
//#region src/app/stores/backendConnection.store.ts
/**
* Store for tracking app-wide backend connectivity status.
*/
var useBackendConnectionStore = defineStore("backendConnection", () => {
	const isOnline = ref(true);
	function setOnline(value) {
		isOnline.value = value;
	}
	return {
		isOnline: readonly(isOnline),
		setOnline
	};
});
//#endregion
//#region src/app/composables/useWorkflowSaving.ts
function useWorkflowSaving({ router, onSaved }) {
	const uiStore = useUIStore();
	const npsSurveyStore = useNpsSurveyStore();
	const message = useMessage();
	const i18n = useI18n();
	const workflowsStore = useWorkflowsStore();
	const workflowsListStore = useWorkflowsListStore();
	const focusPanelStore = useFocusPanelStore();
	const toast = useToast();
	const telemetry = useTelemetry();
	const nodeHelpers = useNodeHelpers();
	const templatesStore = useTemplatesStore();
	const builderStore = useBuilderStore();
	const { checkConflictingWebhooks, getWorkflowProjectRole } = useWorkflowHelpers();
	const saveStore = useWorkflowSaveStore();
	const backendConnectionStore = useBackendConnectionStore();
	const settingsStore = useSettingsStore();
	async function promptSaveUnsavedWorkflowChanges(next, { confirm = async () => true, cancel = async () => {} } = {}) {
		const workflowDocumentStore = useWorkflowDocumentStore(createWorkflowDocumentId(workflowsStore.workflowId));
		if (!uiStore.stateIsDirty || workflowDocumentStore.isArchived || !getResourcePermissions(workflowDocumentStore.scopes).workflow.update) {
			next();
			return;
		}
		switch (await message.confirm(i18n.baseText("generic.unsavedWork.confirmMessage.message"), {
			title: i18n.baseText("generic.unsavedWork.confirmMessage.headline"),
			type: "warning",
			confirmButtonText: i18n.baseText("generic.unsavedWork.confirmMessage.confirmButtonText"),
			cancelButtonText: i18n.baseText("generic.unsavedWork.confirmMessage.cancelButtonText"),
			showClose: true
		})) {
			case MODAL_CONFIRM:
				if (await saveCurrentWorkflow({}, false)) {
					await npsSurveyStore.showNpsSurveyIfPossible();
					uiStore.markStateClean();
					next(await confirm());
				} else stayOnCurrentWorkflow(next);
				return;
			case MODAL_CANCEL:
				await cancel();
				uiStore.markStateClean();
				next();
				return;
			case MODAL_CLOSE:
				if (workflowsStore.isWorkflowSaved[workflowsStore.workflowId]) stayOnCurrentWorkflow(next);
				return;
		}
	}
	function stayOnCurrentWorkflow(next) {
		next(router.resolve({
			name: VIEWS.WORKFLOW,
			params: { workflowId: workflowsStore.workflowId }
		}));
	}
	function getQueryParam(query, key) {
		const value = query[key];
		if (Array.isArray(value)) return value[0] ?? void 0;
		if (value === null) return void 0;
		return value;
	}
	async function saveCurrentWorkflow({ id } = {}, redirect = true, forceSave = false, autosaved = false) {
		if (useSourceControlStore().preferences.branchReadOnly) return false;
		const isLoading = useCanvasStore().isLoading;
		const currentWorkflow = id ?? getQueryParam(router.currentRoute.value.params, "workflowId");
		const parentFolderId = getQueryParam(router.currentRoute.value.query, "parentFolderId");
		const uiContext = getQueryParam(router.currentRoute.value.query, "uiContext");
		if (saveStore.pendingSave) {
			if (autosaved) return true;
			if (!forceSave) await saveStore.pendingSave;
		}
		const savePromise = (async () => {
			const existingWorkflow = currentWorkflow ? workflowsListStore.getWorkflowById(currentWorkflow) : null;
			if (!currentWorkflow || !existingWorkflow?.id) return !!await saveAsNewWorkflow({
				parentFolderId,
				uiContext,
				autosaved
			}, redirect);
			try {
				if (!forceSave && isLoading) return true;
				uiStore.addActiveAction("workflowSaving");
				const dirtyCountBeforeSave = uiStore.dirtyStateSetCount;
				const workflowDocumentStore = useWorkflowDocumentStore(createWorkflowDocumentId(currentWorkflow));
				const workflowDataRequest = workflowDocumentStore.serialize();
				if (workflowDataRequest.id !== currentWorkflow) throw new Error("Attempted to save a workflow different from the current workflow");
				workflowDataRequest.aiBuilderAssisted = builderStore.getAiBuilderMadeEdits();
				workflowDataRequest.versionId = workflowDocumentStore.versionId;
				workflowDataRequest.expectedChecksum = workflowDocumentStore.checksum;
				workflowDataRequest.autosaved = autosaved;
				const workflowData = await workflowsStore.updateWorkflow(currentWorkflow, workflowDataRequest, forceSave);
				if (!workflowData.checksum) throw new Error("Failed to update workflow");
				workflowDocumentStore.setVersionData({
					versionId: workflowData.versionId,
					name: null,
					description: null
				});
				workflowDocumentStore.setUpdatedAt(workflowData.updatedAt);
				if (uiStore.dirtyStateSetCount === dirtyCountBeforeSave) uiStore.markStateClean();
				uiStore.removeActiveAction("workflowSaving");
				useExternalHooks().run("workflow.afterUpdate", { workflowData });
				builderStore.resetAiBuilderMadeEdits();
				saveStore.resetRetry();
				onSaved?.(false);
				return true;
			} catch (error) {
				console.error(error);
				uiStore.removeActiveAction("workflowSaving");
				if (error.errorCode === 409) {
					telemetry.track("User attempted to save locked workflow", {
						workflowId: currentWorkflow,
						sharing_role: getWorkflowProjectRole(currentWorkflow)
					});
					if (!saveStore.conflictModalShown) {
						if (autosaved) saveStore.setConflictModalShown(true);
						const url = router.resolve({
							name: VIEWS.WORKFLOW,
							params: { workflowId: currentWorkflow }
						}).href;
						if (await message.confirm(i18n.baseText("workflows.concurrentChanges.confirmMessage.message", { interpolate: { url } }), i18n.baseText("workflows.concurrentChanges.confirmMessage.title"), {
							confirmButtonText: i18n.baseText("workflows.concurrentChanges.confirmMessage.confirmButtonText"),
							cancelButtonText: i18n.baseText("workflows.concurrentChanges.confirmMessage.cancelButtonText")
						}) === "confirm") return await saveCurrentWorkflow({ id }, redirect, true);
					}
					if (!autosaved) return false;
				}
				if (autosaved) {
					saveStore.incrementRetry();
					saveStore.setLastError(error.message);
					const retryDelay = saveStore.getRetryDelay();
					saveStore.setRetrying(true);
					setTimeout(() => {
						saveStore.setRetrying(false);
						if (uiStore.stateIsDirty) scheduleAutoSave();
					}, retryDelay);
					toast.showMessage({
						title: i18n.baseText("workflowHelpers.showMessage.title"),
						message: i18n.baseText("generic.autosave.retrying", { interpolate: {
							error: error.message,
							retryIn: `${Math.ceil(retryDelay / 1e3)}s`
						} }),
						type: "error",
						duration: retryDelay
					});
					return false;
				}
				toast.showMessage({
					title: i18n.baseText("workflowHelpers.showMessage.title"),
					message: error.message,
					type: "error"
				});
				return false;
			}
		})();
		saveStore.setPendingSave(savePromise);
		try {
			return await savePromise;
		} finally {
			if (saveStore.pendingSave === savePromise) saveStore.setPendingSave(null);
		}
	}
	async function saveAsNewWorkflow({ name, tags, resetWebhookUrls, resetNodeIds, openInNewWindow, parentFolderId, uiContext, requestNewId, data, autosaved } = {}, redirect = true) {
		try {
			uiStore.addActiveAction("workflowSaving");
			const dirtyCountBeforeSave = uiStore.dirtyStateSetCount;
			const currentDocumentStore = useWorkflowDocumentStore(createWorkflowDocumentId(workflowsStore.workflowId));
			const workflowDataRequest = data || currentDocumentStore.serialize();
			const changedNodes = {};
			if (requestNewId) delete workflowDataRequest.id;
			if (resetNodeIds) workflowDataRequest.nodes = workflowDataRequest.nodes.map((node) => {
				nodeHelpers.assignNodeId(node);
				return node;
			});
			if (resetWebhookUrls) workflowDataRequest.nodes = workflowDataRequest.nodes.map((node) => {
				if (node.webhookId) {
					const newId = nodeHelpers.assignWebhookId(node);
					if (!isExpression(node.parameters.path)) node.parameters.path = newId;
					changedNodes[node.name] = node.webhookId;
				}
				return node;
			});
			if (name) workflowDataRequest.name = name.trim();
			if (tags) workflowDataRequest.tags = tags;
			if (parentFolderId) workflowDataRequest.parentFolderId = parentFolderId;
			if (uiContext) workflowDataRequest.uiContext = uiContext;
			if (autosaved) workflowDataRequest.autosaved = autosaved;
			const workflowData = await workflowsStore.createNewWorkflow(workflowDataRequest);
			workflowsListStore.addWorkflow(workflowData);
			focusPanelStore.onNewWorkflowSave(workflowData.id);
			if (openInNewWindow) {
				const routeData = router.resolve({
					name: VIEWS.WORKFLOW,
					params: { workflowId: workflowData.id }
				});
				window.open(routeData.href, "_blank");
				uiStore.removeActiveAction("workflowSaving");
				onSaved?.(true);
				return workflowData.id;
			}
			if (workflowData.activeVersionId !== null) {
				const conflict = await checkConflictingWebhooks(workflowData.id);
				if (conflict) {
					workflowData.active = false;
					workflowData.activeVersionId = null;
					toast.showMessage({
						title: "Conflicting Webhook Path",
						message: `Workflow set to inactive: Live webhook in another workflow uses same path as node '${conflict.trigger.name}'.`,
						type: "error"
					});
				}
			}
			const workflowDocumentStore = useWorkflowDocumentStore(createWorkflowDocumentId(workflowData.id));
			workflowDocumentStore.setActiveState({
				activeVersionId: workflowData.activeVersionId,
				activeVersion: workflowData.activeVersion ?? null
			});
			if (workflowData.checksum) workflowDocumentStore.setChecksum(workflowData.checksum);
			workflowsStore.setWorkflowId(workflowData.id);
			workflowDocumentStore.setVersionData({
				versionId: workflowData.versionId,
				name: null,
				description: null
			});
			workflowDocumentStore.setUpdatedAt(workflowData.updatedAt);
			if (resetWebhookUrls) Object.keys(changedNodes).forEach((nodeName) => {
				const changes = {
					key: "webhookId",
					value: changedNodes[nodeName],
					name: nodeName
				};
				workflowDocumentStore.setNodeValue(changes);
			});
			const route = router.currentRoute.value;
			const templateId = route.query.templateId;
			if (templateId) telemetry.track("User saved new workflow from template", {
				template_id: tryToParseNumber(String(templateId)),
				workflow_id: workflowData.id,
				wf_template_repo_session_id: templatesStore.previousSessionId
			});
			if (redirect) await router.replace({
				name: route.name,
				params: { ...route.params },
				query: {
					...route.query,
					new: void 0
				}
			});
			uiStore.removeActiveAction("workflowSaving");
			if (uiStore.dirtyStateSetCount === dirtyCountBeforeSave) uiStore.markStateClean();
			useExternalHooks().run("workflow.afterUpdate", { workflowData });
			onSaved?.(true);
			return workflowData.id;
		} catch (e) {
			uiStore.removeActiveAction("workflowSaving");
			toast.showMessage({
				title: i18n.baseText("workflowHelpers.showMessage.title"),
				message: e.message,
				type: "error"
			});
			return null;
		}
	}
	const autoSaveWorkflowDebounced = useDebounceFn(() => {
		if (saveStore.autoSaveState === AutoSaveState.Idle) return;
		if (saveStore.pendingSave) return;
		saveStore.setAutoSaveState(AutoSaveState.InProgress);
		(async () => {
			try {
				await saveCurrentWorkflow({}, true, false, true);
			} finally {
				if (saveStore.autoSaveState === AutoSaveState.InProgress) saveStore.setAutoSaveState(AutoSaveState.Idle);
				if (uiStore.stateIsDirty && !saveStore.isRetrying) {
					saveStore.setAutoSaveState(AutoSaveState.Scheduled);
					autoSaveWorkflowDebounced();
				}
			}
		})();
	}, getDebounceTime(DEBOUNCE_TIME.API.AUTOSAVE), { maxWait: getDebounceTime(DEBOUNCE_TIME.API.AUTOSAVE_MAX_WAIT) });
	const scheduleAutoSave = () => {
		if (!settingsStore.isAutosaveEnabled) return;
		if (saveStore.pendingSave) return;
		if (saveStore.isRetrying) return;
		if (!backendConnectionStore.isOnline) return;
		saveStore.setAutoSaveState(AutoSaveState.Scheduled);
		autoSaveWorkflowDebounced();
	};
	const cancelAutoSave = () => {
		if (isDebouncedFunction(autoSaveWorkflowDebounced)) autoSaveWorkflowDebounced.cancel();
		saveStore.setAutoSaveState(AutoSaveState.Idle);
	};
	watch(() => backendConnectionStore.isOnline, (isOnline, wasOnline) => {
		if (isOnline && !wasOnline) {
			if (uiStore.stateIsDirty) scheduleAutoSave();
		}
	});
	return {
		promptSaveUnsavedWorkflowChanges,
		saveCurrentWorkflow,
		saveAsNewWorkflow,
		autoSaveWorkflow: scheduleAutoSave,
		cancelAutoSave
	};
}
//#endregion
//#region src/app/composables/useBrowserNotifications.ts
var DEFAULT_MAX_DISMISSALS = 3;
var permissionState = ref(typeof Notification !== "undefined" ? Notification.permission : "denied");
/**
* Composable for managing browser notification permissions.
*
* Provides a clean API for:
* - Checking if notifications are supported/enabled
* - Requesting notification permission
* - Handling cooldown logic after dismissals
* - Showing native browser notifications
*
* @example
* ```typescript
* const { isEnabled, canPrompt, requestPermission, showNotification } = useBrowserNotifications();
*
* if (canPrompt.value) {
*   await requestPermission();
* }
*
* if (isEnabled.value) {
*   showNotification('Workflow Complete', { body: 'Your workflow finished successfully' });
* }
* ```
*/
function useBrowserNotifications(options = {}) {
	const { cooldownMs = SEVEN_DAYS_IN_MILLIS, maxDismissals = DEFAULT_MAX_DISMISSALS } = options;
	const metadata = useLocalStorage(LOCAL_STORAGE_BROWSER_NOTIFICATION_METADATA, {
		lastDismissedAt: null,
		dismissCount: 0
	}, { writeDefaults: false });
	const isSupported = computed(() => typeof Notification !== "undefined");
	const isEnabled = computed(() => permissionState.value === "granted");
	const isDenied = computed(() => permissionState.value === "denied");
	const isInCooldown = computed(() => {
		if (!metadata.value.lastDismissedAt) return false;
		return Date.now() - metadata.value.lastDismissedAt < cooldownMs;
	});
	const hasExceededMaxDismissals = computed(() => {
		return metadata.value.dismissCount >= maxDismissals;
	});
	const canPrompt = computed(() => {
		return isSupported.value && permissionState.value === "default" && !isInCooldown.value && !hasExceededMaxDismissals.value;
	});
	function refreshPermissionState() {
		if (typeof Notification !== "undefined") permissionState.value = Notification.permission;
	}
	/**
	* Request notification permission from the browser.
	* Respects cooldown and denial states.
	*
	* @returns Result with permission state and whether request was actually made
	*/
	async function requestPermission() {
		refreshPermissionState();
		if (permissionState.value === "granted") return {
			permission: "granted",
			wasRequested: false
		};
		if (permissionState.value === "denied") return {
			permission: "denied",
			wasRequested: false
		};
		if (isInCooldown.value || hasExceededMaxDismissals.value) return {
			permission: permissionState.value,
			wasRequested: false
		};
		try {
			const result = await Notification.requestPermission();
			permissionState.value = result;
			return {
				permission: result,
				wasRequested: true
			};
		} catch {
			refreshPermissionState();
			return {
				permission: permissionState.value,
				wasRequested: true
			};
		}
	}
	function recordDismissal() {
		metadata.value = {
			lastDismissedAt: Date.now(),
			dismissCount: metadata.value.dismissCount + 1
		};
	}
	function resetMetadata() {
		metadata.value = {
			lastDismissedAt: null,
			dismissCount: 0
		};
	}
	function showNotification(title, notificationOptions) {
		if (!isEnabled.value || !isSupported.value) return null;
		return new Notification(title, notificationOptions);
	}
	return {
		permissionState,
		isSupported,
		isEnabled,
		isDenied,
		isInCooldown,
		canPrompt,
		requestPermission,
		recordDismissal,
		resetMetadata,
		refreshPermissionState,
		showNotification,
		metadata: computed(() => metadata.value)
	};
}
//#endregion
//#region src/features/ai/assistant/builder.store.ts
/** Tool names that indicate the AI modified the workflow (used during session reload) */
var WORKFLOW_MODIFYING_TOOLS = new Set([
	"add_nodes",
	"remove_nodes",
	"connect_nodes",
	"disconnect_nodes",
	"update_node_parameters",
	"generate_workflow"
]);
var useBuilderStore = defineStore(STORES.BUILDER, () => {
	const chatMessages = ref([]);
	const streaming = ref(false);
	const isHelpStreaming = ref(false);
	const builderThinkingMessage = ref();
	const streamingAbortController = ref(null);
	const initialGeneration = ref(false);
	const builderMode = ref("build");
	const creditsQuota = ref();
	const creditsClaimed = ref();
	const manualExecStatsInBetweenMessages = ref({
		success: 0,
		error: 0
	});
	const activeVersionCardId = ref(void 0);
	const resumeAfterRestoreMessageId = ref(void 0);
	/** IDs of messages that should be collapsed (between restore point and resume point) */
	const collapsedMessageIds = computed(() => {
		if (!activeVersionCardId.value) return /* @__PURE__ */ new Set();
		const activeIdx = chatMessages.value.findIndex((m) => m.id === activeVersionCardId.value);
		if (activeIdx === -1) return /* @__PURE__ */ new Set();
		const cards = versionCardMessages.value;
		if (cards.length > 0 && cards[cards.length - 1].id === activeVersionCardId.value) return /* @__PURE__ */ new Set();
		let endIdx = chatMessages.value.length;
		if (resumeAfterRestoreMessageId.value) {
			const resumeIdx = chatMessages.value.findIndex((m) => m.id === resumeAfterRestoreMessageId.value);
			if (resumeIdx !== -1) endIdx = resumeIdx;
		}
		return new Set(chatMessages.value.slice(activeIdx + 1, endIdx).map((m) => m.id).filter(Boolean));
	});
	const hasHadSuccessfulExecution = ref(false);
	const generatedPinData = ref(null);
	const pinDataApplied = ref(false);
	const wizardCurrentStep = ref(0);
	const wizardClearedPlaceholders = ref(/* @__PURE__ */ new Set());
	const wizardHasExecutedWorkflow = ref(false);
	function resetWizardState() {
		wizardCurrentStep.value = 0;
		wizardClearedPlaceholders.value.clear();
		wizardHasExecutedWorkflow.value = false;
	}
	const aiBuilderMadeEdits = ref(false);
	const currentStreamingMessage = ref();
	const lastUserMessageId = ref();
	const isLoadingSessions = ref(false);
	const loadedSessionsForWorkflowId = ref();
	const documentTitle = useDocumentTitle();
	const settings = useSettingsStore();
	const rootStore = useRootStore();
	const workflowsStore = useWorkflowsStore();
	const workflowDocumentStore = computed(() => useWorkflowDocumentStore(createWorkflowDocumentId(workflowsStore.workflowId)));
	const ndvStore = useNDVStore();
	const route = useRoute();
	const locale = useI18n();
	const telemetry = useTelemetry();
	const uiStore = useUIStore();
	const workflowSaver = useWorkflowSaving({ router: useRouter() });
	const posthogStore = usePostHog();
	const focusedNodesStore = useFocusedNodesStore();
	const { processAssistantMessages, createUserMessage, createUserAnswersMessage, createAssistantMessage, createErrorMessage, clearMessages, mapAssistantMessageToUI, clearRatingLogic, getRunningTools } = useBuilderMessages();
	const { workflowTodos, getTodosToTrack, hasTodosHiddenByPinnedData } = useBuilderTodos();
	const { applyCodeDiff, undoCodeDiff } = useCodeDiff({
		chatMessages,
		getTargetNodeName: (msg) => msg.nodeName ?? ndvStore.activeNodeName ?? focusedNodesStore.confirmedNodes[0]?.nodeName ?? "",
		getSessionId: (msg) => {
			const id = msg.sdkSessionId;
			assert(id, "No SDK session ID for code diff");
			return id;
		}
	});
	const trackingSessionId = computed(() => rootStore.pushRef);
	/** Whether the code-builder experiment is enabled for this user */
	const isCodeBuilder = computed(() => {
		const variant = posthogStore.getVariant(CODE_WORKFLOW_BUILDER_EXPERIMENT.name);
		return variant === CODE_WORKFLOW_BUILDER_EXPERIMENT.codeNoPinData || variant === CODE_WORKFLOW_BUILDER_EXPERIMENT.codePinData;
	});
	const workflowPrompt = computed(() => {
		return chatMessages.value.find((msg) => msg.role === "user" && msg.type === "text")?.content;
	});
	const isAIBuilderEnabled = computed(() => {
		return settings.isAiBuilderEnabled;
	});
	const toolMessages = computed(() => chatMessages.value.filter(isToolMessage$1));
	const workflowMessages = computed(() => chatMessages.value.filter(isWorkflowUpdatedMessage$1));
	const assistantMessages = computed(() => chatMessages.value.filter((msg) => msg.role === "assistant"));
	const creditsRemaining = computed(() => {
		if (creditsClaimed.value === void 0 || creditsQuota.value === void 0 || creditsQuota.value === -1) return;
		const remaining = creditsQuota.value - creditsClaimed.value;
		return remaining > 0 ? remaining : 0;
	});
	const hasNoCreditsRemaining = computed(() => {
		return creditsRemaining.value !== void 0 ? creditsRemaining.value === 0 : false;
	});
	const creditsPercentageRemaining = computed(() => {
		if (creditsQuota.value === void 0 || creditsQuota.value === -1 || creditsRemaining.value === void 0) return;
		if (creditsQuota.value === 0) return 0;
		return creditsRemaining.value / creditsQuota.value * 100;
	});
	const isLowCredits = computed(() => {
		return creditsPercentageRemaining.value !== void 0 && creditsPercentageRemaining.value <= 10;
	});
	const hasMessages = computed(() => chatMessages.value.length > 0);
	/** All version card messages in chat order */
	const versionCardMessages = computed(() => chatMessages.value.filter(isVersionCardMessage));
	const latestRevertVersion = computed(() => {
		const cards = versionCardMessages.value;
		if (cards.length === 0) return null;
		const last = cards[cards.length - 1];
		return {
			id: last.data.versionId,
			createdAt: last.data.createdAt
		};
	});
	const isPlanModeAvailable = computed(() => {
		const variant = posthogStore.getVariant(AI_BUILDER_PLAN_MODE_EXPERIMENT.name);
		return variant === true || variant === AI_BUILDER_PLAN_MODE_EXPERIMENT.variant;
	});
	/**
	* Finds the last interrupt message (questions or plan) by searching backwards.
	* This is more robust than checking only the last message, because error messages
	* or other messages can be appended after an interrupt.
	*/
	const pendingInterruptMessage = computed(() => {
		for (let i = chatMessages.value.length - 1; i >= 0; i--) {
			const msg = chatMessages.value[i];
			if (isPlanModeQuestionsMessage(msg) || isPlanModePlanMessage(msg) || isWebFetchApprovalCustomMessage(msg)) return msg;
			if (msg.role === "user") break;
		}
		return null;
	});
	const isInterrupted = computed(() => pendingInterruptMessage.value !== null);
	/**
	* True when there's a pending plan awaiting user decision.
	* Unlike questions, users can still type in chat when a plan is pending.
	*/
	const hasPendingPlan = computed(() => {
		const msg = pendingInterruptMessage.value;
		return msg ? isPlanModePlanMessage(msg) : false;
	});
	/**
	* True when chat input should be disabled.
	* Only questions require disabling input (user must answer via UI).
	* Plans allow chat input (typing a message means modifying the plan).
	*/
	const shouldDisableChatInput = computed(() => {
		const msg = pendingInterruptMessage.value;
		if (!msg) return false;
		return isPlanModeQuestionsMessage(msg) || isWebFetchApprovalCustomMessage(msg);
	});
	/**
	* Resets the entire chat session to initial state.
	* Called when user navigates away from workflow or explicitly requests a new workflow.
	* Note: Does not persist the cleared state - sessions can still be reloaded via loadSessions().
	*/
	function resetBuilderChat() {
		chatMessages.value = clearMessages();
		builderThinkingMessage.value = void 0;
		initialGeneration.value = false;
		lastUserMessageId.value = void 0;
		loadedSessionsForWorkflowId.value = void 0;
		hasHadSuccessfulExecution.value = false;
		generatedPinData.value = null;
		pinDataApplied.value = false;
		builderMode.value = "build";
		resetWizardState();
	}
	/**
	* Explicitly clear the backend session for the current workflow.
	* Only called when the user explicitly requests a clear (e.g. /clear command).
	* This deletes persisted messages so they won't be reloaded on next visit.
	*/
	function clearBackendSession() {
		const workflowId = workflowsStore.workflowId;
		if (workflowId) clearBuilderSession(rootStore.restApiContext, workflowId);
	}
	function setBuilderMode(mode) {
		if (mode === "plan" && !isPlanModeAvailable.value) return;
		builderMode.value = mode;
		trackWorkflowBuilderJourney("user_switched_builder_mode", { mode });
	}
	function incrementManualExecutionStats(type) {
		manualExecStatsInBetweenMessages.value[type]++;
		if (type === "success") hasHadSuccessfulExecution.value = true;
	}
	function resetManualExecutionStats() {
		manualExecStatsInBetweenMessages.value = {
			success: 0,
			error: 0
		};
	}
	function addLoadingAssistantMessage(message) {
		builderThinkingMessage.value = message;
	}
	function getWorkflowModifications({ userMessageId, startWorkflowJson }) {
		const newToolMessages = toolMessages.value.filter((toolMsg) => toolMsg.id?.startsWith(userMessageId));
		const endWorkflowJson = getWorkflowSnapshot();
		return {
			tools_called: dedupe(newToolMessages.map((toolMsg) => toolMsg.toolName)),
			start_workflow_json: startWorkflowJson,
			end_workflow_json: endWorkflowJson,
			workflow_modified: endWorkflowJson !== startWorkflowJson
		};
	}
	function trackEndBuilderResponse(payload) {
		if (!currentStreamingMessage.value) return;
		const { userMessageId, planApproved } = currentStreamingMessage.value;
		telemetry.track("End of response from builder", {
			user_message_id: userMessageId,
			workflow_id: workflowsStore.workflowId,
			session_id: trackingSessionId.value,
			tab_visible: document.visibilityState === "visible",
			code_builder: isCodeBuilder.value,
			mode: builderMode.value,
			...planApproved ? { plan_approved: true } : {},
			...getWorkflowModifications(currentStreamingMessage.value),
			...payload,
			...getTodosToTrack()
		});
	}
	/**
	* Checks if the current streaming response included a workflow update.
	* Used to determine whether to show "workflow ready" or "input needed" notification.
	*/
	function hasWorkflowUpdateInCurrentBatch(userMessageId) {
		return chatMessages.value.some((msg) => msg.type === "workflow-updated" && msg.id?.startsWith(userMessageId));
	}
	/**
	* Shows a browser notification when the AI builder completes.
	* Only shows if browser notifications are enabled.
	* Clicking the notification focuses the window and closes it.
	*/
	function notifyOnCompletion(completionType) {
		const { showNotification, isEnabled } = useBrowserNotifications();
		if (!isEnabled.value) return;
		const workflowName = workflowDocumentStore.value.name;
		const titleKey = completionType === "workflow-ready" ? "aiAssistant.builder.notification.title" : "aiAssistant.builder.notification.inputNeeded.title";
		const bodyKey = completionType === "workflow-ready" ? "aiAssistant.builder.notification.body" : "aiAssistant.builder.notification.inputNeeded.body";
		const notification = showNotification(locale.baseText(titleKey), {
			body: locale.baseText(bodyKey, { interpolate: { workflowName } }),
			icon: "/favicon.ico",
			tag: `workflow-build-${workflowsStore.workflowId}`,
			requireInteraction: false
		});
		if (notification) {
			trackWorkflowBuilderJourney("browser_generation_done_notified", { completion_type: completionType });
			notification.onclick = () => {
				window.focus();
				notification.close();
			};
		}
	}
	async function stopStreaming(payload) {
		isHelpStreaming.value = false;
		if (streamingAbortController.value) {
			streamingAbortController.value.abort();
			streamingAbortController.value = null;
		}
		trackEndBuilderResponse(payload);
		const userMessageId = currentStreamingMessage.value?.userMessageId;
		const { revertVersion } = currentStreamingMessage.value ?? {};
		currentStreamingMessage.value = void 0;
		if (userMessageId && hasWorkflowUpdateInCurrentBatch(userMessageId)) resetWizardState();
		if (!payload && userMessageId && revertVersion && hasWorkflowUpdateInCurrentBatch(userMessageId)) {
			const versionForCard = await savePostModificationVersion() ?? revertVersion;
			chatMessages.value = [...chatMessages.value, {
				id: `version-card-${userMessageId}`,
				role: "assistant",
				type: "custom",
				customType: "version_card",
				data: {
					versionId: versionForCard.id,
					createdAt: versionForCard.createdAt
				}
			}];
		}
		streaming.value = false;
		const wasAborted = payload && "aborted" in payload && payload.aborted;
		if (document.hidden) {
			documentTitle.setDocumentTitle(workflowDocumentStore.value.name, "AI_DONE");
			if (!wasAborted && userMessageId) notifyOnCompletion(hasWorkflowUpdateInCurrentBatch(userMessageId) ? "workflow-ready" : "input-needed");
		} else documentTitle.setDocumentTitle(workflowDocumentStore.value.name, "IDLE");
	}
	function abortStreaming() {
		stopStreaming({ aborted: true });
	}
	/**
	* Handles streaming errors by creating an error message with optional retry capability.
	* Cleans up streaming state and removes the thinking indicator.
	* The retry function, if provided, will remove the error message before retrying.
	* Tracks error telemetry
	*/
	function handleServiceError(e, userMessageId, retry) {
		assert(e instanceof Error);
		stopStreaming({ error: e.message });
		builderThinkingMessage.value = void 0;
		const messagesWithoutRunningTools = chatMessages.value.filter((msg) => !(msg.type === "tool" && msg.status === "running"));
		if (e.name === "AbortError") {
			const userMsg = createAssistantMessage(locale.baseText("aiAssistant.builder.streamAbortedMessage"), "aborted-streaming", { aborted: true });
			chatMessages.value = [...messagesWithoutRunningTools, userMsg];
			return;
		}
		const errorMessage = createErrorMessage(locale.baseText("aiAssistant.serviceError.message", { interpolate: { message: e.message } }), userMessageId, retry);
		chatMessages.value = [...messagesWithoutRunningTools, errorMessage];
	}
	/**
	* Prepares UI for incoming streaming response.
	* Adds user message immediately for visual feedback, shows thinking indicator,
	* and ensures chat is open. Called before initiating API request to minimize
	* perceived latency.
	*/
	function prepareForStreaming(userMessage, messageId, focusedNodeNames, planAnswers, skipUserMessage) {
		if (!skipUserMessage) {
			const userMsg = planAnswers ? createUserAnswersMessage(planAnswers, messageId) : createUserMessage(userMessage, messageId, void 0, focusedNodeNames ?? []);
			chatMessages.value = clearRatingLogic([...chatMessages.value, userMsg]);
		}
		const thinkingKey = userMessage.trim() === "/compact" ? "aiAssistant.thinkingSteps.compacting" : "aiAssistant.thinkingSteps.thinking";
		addLoadingAssistantMessage(locale.baseText(thinkingKey));
		streaming.value = true;
		if (!isHelpStreaming.value) documentTitle.setDocumentTitle(workflowDocumentStore.value.name, "AI_BUILDING");
	}
	/**
	* Creates a retry function that removes the associated error message before retrying.
	* This ensures the chat doesn't accumulate multiple error messages for the same failure.
	* The messageId parameter refers to the error message to remove, not the original user message.
	*/
	function createRetryHandler(messageId, retryFn) {
		return async () => {
			chatMessages.value = chatMessages.value.filter((msg) => msg.id !== messageId);
			await retryFn();
		};
	}
	/**
	* Tracks when a user submits a message to the builder.
	* Captures workflow state, execution data, and todo counts for analytics.
	*/
	function trackUserSubmittedBuilderMessage(options) {
		const { text, source, type, userMessageId, currentWorkflowJson, errorMessage, errorNodeType, executionStatus, mode } = options;
		const trackingPayload = {
			source,
			message: text,
			session_id: trackingSessionId.value,
			start_workflow_json: currentWorkflowJson,
			workflow_id: workflowsStore.workflowId,
			type,
			manual_exec_success_count_since_prev_msg: manualExecStatsInBetweenMessages.value.success,
			manual_exec_error_count_since_prev_msg: manualExecStatsInBetweenMessages.value.error,
			user_message_id: userMessageId,
			code_builder: isCodeBuilder.value,
			mode,
			...getTodosToTrack()
		};
		if (type === "execution") {
			let resultData = "{}";
			let resultDataSizeKb = 0;
			try {
				resultData = JSON.stringify(workflowsStore.workflowExecutionData ?? {});
				resultDataSizeKb = stringSizeInBytes(resultData) / 1024;
			} catch (error) {
				console.warn("Failed to stringify execution data for telemetry:", error);
			}
			trackingPayload.execution_data = resultDataSizeKb > 512 ? "{}" : resultData;
			trackingPayload.execution_status = executionStatus ?? "";
			if (executionStatus === "error") {
				trackingPayload.error_message = errorMessage ?? "";
				trackingPayload.error_node_type = errorNodeType ?? "";
			}
		}
		telemetry.track("User submitted builder message", trackingPayload);
		const focusedCount = focusedNodesStore.confirmedNodes.length;
		if (focusedCount > 0) {
			const hasDeicticRef = /\b(this node|this|it|these nodes|these|that node|that)\b/i.test(text);
			telemetry.track("ai.focusedNodes.chatSent", {
				focused_count: focusedCount,
				has_deictic_ref: hasDeicticRef
			});
		}
	}
	/**
	* Checks that a versionId has a corresponding workflow history entry.
	* The backend only creates history entries when nodes/connections change,
	* so the current versionId may not have one (e.g. initial creation).
	*/
	async function verifyVersionExists(versionId) {
		const workflowId = workflowsStore.workflowId;
		const createdAt = (await fetchExistingVersionIds(rootStore.restApiContext, workflowId, [versionId])).get(versionId);
		return createdAt ? {
			id: versionId,
			createdAt
		} : void 0;
	}
	/**
	* Saves the workflow and returns the version info for message history.
	* For new workflows, creates the workflow first.
	* For existing workflows, only saves if there are unsaved changes.
	*/
	async function saveWorkflowAndGetRevertVersion() {
		const isNewWorkflow = workflowsStore.isNewWorkflow;
		const hasUnsavedChanges = uiStore.stateIsDirty;
		if (isNewWorkflow || hasUnsavedChanges) {
			if (!await workflowSaver.saveCurrentWorkflow()) throw new Error("Could not save changes");
		}
		const versionId = workflowDocumentStore.value.versionId;
		if (!versionId) return void 0;
		if (!workflowDocumentStore.value.updatedAt) return void 0;
		return await verifyVersionExists(versionId);
	}
	/**
	* Saves the workflow after AI modifications and returns the new version info.
	* Called after streaming completes to create a post-modification history entry.
	*/
	async function savePostModificationVersion() {
		try {
			if (!await workflowSaver.saveCurrentWorkflow()) return void 0;
			const versionId = workflowDocumentStore.value.versionId;
			if (!versionId) return void 0;
			return await verifyVersionExists(versionId);
		} catch {
			return;
		}
	}
	/**
	* Sends a message to the AI builder service and handles the streaming response.
	* Prevents concurrent requests by checking streaming state.
	* Saves workflow first to get versionId for restore functionality.
	* Captures workflow state before sending for comparison in telemetry.
	* Creates a retry handler that preserves the original message context.
	*/
	async function sendChatMessage(options) {
		isHelpStreaming.value = Boolean(options.helpMessage);
		if (streaming.value) return;
		const focusedNodeNames = focusedNodesStore.confirmedNodes.map((n) => n.nodeName);
		if (hasPendingPlan.value && options.resumeData === void 0) options = {
			...options,
			resumeData: {
				action: "modify",
				feedback: options.text
			}
		};
		let revertVersion;
		try {
			revertVersion = await saveWorkflowAndGetRevertVersion();
		} catch {
			return;
		}
		ndvStore.unsetActiveNodeName();
		const { text, source = "chat", quickReplyType, errorMessage, type = "message", errorNodeType, executionStatus, resumeData, mode } = options;
		if (options.initialGeneration !== void 0) initialGeneration.value = options.initialGeneration;
		const userMessageId = generateMessageId();
		lastUserMessageId.value = userMessageId;
		if (activeVersionCardId.value && !resumeAfterRestoreMessageId.value) resumeAfterRestoreMessageId.value = userMessageId;
		const currentWorkflowJson = getWorkflowSnapshot();
		const planApproved = typeof resumeData === "object" && resumeData !== null && "action" in resumeData && resumeData.action === "approve";
		currentStreamingMessage.value = {
			userMessageId,
			startWorkflowJson: currentWorkflowJson,
			revertVersion,
			...planApproved ? { planApproved: true } : {}
		};
		trackUserSubmittedBuilderMessage({
			text,
			source,
			type,
			userMessageId,
			currentWorkflowJson,
			errorMessage,
			errorNodeType,
			executionStatus,
			mode: builderMode.value
		});
		resetManualExecutionStats();
		prepareForStreaming(text, userMessageId, focusedNodeNames, options.planAnswers, options.skipUserMessage);
		const executionResult = workflowsStore.workflowExecutionData?.data?.resultData;
		const modeForPayload = resumeData !== void 0 ? mode : mode ?? (builderMode.value === "plan" ? "plan" : void 0);
		const payload = await createBuilderPayload(text, userMessageId, {
			workflowId: workflowsStore.workflowId,
			quickReplyType,
			workflow: workflowDocumentStore.value.getSnapshot(),
			executionData: executionResult,
			nodesForSchema: Object.keys(workflowDocumentStore.value.nodesByName),
			mode: modeForPayload,
			isPlanModeEnabled: isPlanModeAvailable.value,
			allowSendingParameterValues: settings.settings.ai.allowSendingParameterValues
		});
		if (resumeData !== void 0) payload.resumeData = resumeData;
		focusedNodesStore.removeAllConfirmed();
		const retry = createRetryHandler(userMessageId, async () => await sendChatMessage(options));
		if (streamingAbortController.value) streamingAbortController.value.abort();
		streamingAbortController.value = new AbortController();
		try {
			chatWithBuilder(rootStore.restApiContext, { payload }, (response) => {
				if (!isHelpStreaming.value) {
					if (response.messages.some((msg) => "toolName" in msg && msg.toolName === "assistant")) isHelpStreaming.value = true;
				}
				const result = processAssistantMessages(chatMessages.value, response.messages, userMessageId, retry);
				chatMessages.value = result.messages;
				trackWebFetchEvents(response.messages);
				if (result.shouldClearThinking) builderThinkingMessage.value = void 0;
				else if (result.thinkingMessage !== void 0) builderThinkingMessage.value = result.thinkingMessage;
			}, () => {
				stopStreaming();
			}, (e) => handleServiceError(e, userMessageId, retry), revertVersion?.id, streamingAbortController.value?.signal);
		} catch (e) {
			handleServiceError(e, userMessageId, retry);
		}
	}
	async function resumeWithQuestionsAnswers(answers) {
		if (!isInterrupted.value) return;
		await sendChatMessage({
			text: locale.baseText("aiAssistant.builder.planMode.actions.submitAnswers"),
			resumeData: answers,
			planAnswers: answers
		});
	}
	async function resumeWithPlanDecision(decision) {
		if (!isInterrupted.value) return;
		const feedback = decision.feedback?.trim();
		if (decision.action === "approve") {
			trackWorkflowBuilderJourney("user_clicked_implement_plan");
			await sendChatMessage({
				text: locale.baseText("aiAssistant.builder.planMode.actions.implement"),
				resumeData: decision,
				mode: "build"
			});
			builderMode.value = "build";
			return;
		}
		if (decision.action === "modify") {
			await sendChatMessage({
				text: feedback ? locale.baseText("aiAssistant.builder.planMode.actions.modifyWithFeedback", { interpolate: { feedback } }) : locale.baseText("aiAssistant.builder.planMode.actions.modify"),
				resumeData: decision
			});
			return;
		}
		await sendChatMessage({
			text: feedback ? locale.baseText("aiAssistant.builder.planMode.actions.rejectWithFeedback", { interpolate: { feedback } }) : locale.baseText("aiAssistant.builder.planMode.actions.reject"),
			resumeData: decision
		});
	}
	/**
	* Loads the most recent chat session for the current workflow.
	* Only loads if a workflow ID exists (not for new unsaved workflows).
	* Replaces current chat messages entirely - does NOT merge with existing messages.
	* Sessions are ordered by recency, so sessions[0] is always the latest.
	* Filters out messages with revertVersionId pointing to non-existent versions.
	* Silently fails and returns empty array on error to prevent UI disruption.
	*/
	async function loadSessions() {
		const workflowId = workflowsStore.workflowId;
		if (!workflowId) return [];
		if (!workflowsStore.isWorkflowSaved[workflowId]) return [];
		if (loadedSessionsForWorkflowId.value === workflowId) return [];
		if (isLoadingSessions.value) return [];
		isLoadingSessions.value = true;
		try {
			const response = await getAiSessions(rootStore.restApiContext, workflowId, isCodeBuilder.value);
			loadedSessionsForWorkflowId.value = workflowId;
			const sessions = response.sessions || [];
			if (sessions.length > 0) {
				const latestSession = sessions[0];
				const versionIds = extractRevertVersionIds(latestSession.messages);
				const versionMap = await fetchExistingVersionIds(rootStore.restApiContext, workflowId, versionIds);
				const enrichedMessages = enrichMessagesWithRevertVersion(latestSession.messages, versionMap);
				const userMsgRevertIds = [];
				for (let i = 0; i < latestSession.messages.length; i++) {
					const msg = latestSession.messages[i];
					if ("revertVersionId" in msg && typeof msg.revertVersionId === "string") userMsgRevertIds.push(msg.revertVersionId);
				}
				const postModVersionIds = [];
				for (let i = 0; i < userMsgRevertIds.length; i++) if (i < userMsgRevertIds.length - 1) postModVersionIds.push(userMsgRevertIds[i + 1]);
				else {
					const currentVersionId = workflowDocumentStore.value.versionId;
					if (currentVersionId) postModVersionIds.push(currentVersionId);
				}
				const uniquePostModIds = [...new Set(postModVersionIds)].filter((id) => !versionMap.has(id));
				const postModVersionMap = uniquePostModIds.length > 0 ? await fetchExistingVersionIds(rootStore.restApiContext, workflowId, uniquePostModIds) : /* @__PURE__ */ new Map();
				const allVersionMap = new Map([...versionMap, ...postModVersionMap]);
				let revertIdIndex = 0;
				const items = enrichedMessages.map((raw, idx) => {
					const id = "id" in raw && typeof raw.id === "string" ? raw.id : generateMessageId();
					const uiMsg = mapAssistantMessageToUI(raw, id);
					const originalMsg = latestSession.messages[idx];
					const revertVersionId = "revertVersionId" in originalMsg && typeof originalMsg.revertVersionId === "string" ? originalMsg.revertVersionId : void 0;
					if (uiMsg.type === "text" && uiMsg.role === "user" && revertVersionId) {
						const currentRevertIndex = revertIdIndex;
						revertIdIndex++;
						let hasWorkflowUpdate = false;
						for (let j = idx + 1; j < enrichedMessages.length; j++) {
							const m = enrichedMessages[j];
							if ("role" in m && m.role === "user") break;
							if ("type" in m && m.type === "workflow-updated") {
								hasWorkflowUpdate = true;
								break;
							}
							if (isToolMessage(m) && WORKFLOW_MODIFYING_TOOLS.has(m.toolName)) {
								hasWorkflowUpdate = true;
								break;
							}
						}
						const { revertVersion: _, ...msgWithoutRevert } = uiMsg;
						const postModVersionId = postModVersionIds[currentRevertIndex];
						const postModCreatedAt = postModVersionId ? allVersionMap.get(postModVersionId) : void 0;
						const cardVersionId = postModVersionId ?? revertVersionId;
						const cardCreatedAt = postModCreatedAt ?? allVersionMap.get(revertVersionId);
						return {
							msg: msgWithoutRevert,
							...hasWorkflowUpdate && { versionCard: {
								id: `version-card-${id}`,
								role: "assistant",
								type: "custom",
								customType: "version_card",
								data: {
									versionId: cardVersionId,
									...cardCreatedAt && { createdAt: cardCreatedAt }
								}
							} }
						};
					}
					return { msg: uiMsg };
				});
				const convertedMessages = [];
				let pendingVersionCard = null;
				for (const item of items) {
					if (item.msg.role === "user" && item.msg.type === "text" && pendingVersionCard) {
						convertedMessages.push(pendingVersionCard);
						pendingVersionCard = null;
					}
					if (item.msg.type !== "workflow-updated") convertedMessages.push(item.msg);
					if (item.versionCard) pendingVersionCard = item.versionCard;
				}
				if (pendingVersionCard) convertedMessages.push(pendingVersionCard);
				if (posthogStore.getVariant(CODE_WORKFLOW_BUILDER_EXPERIMENT.name) === CODE_WORKFLOW_BUILDER_EXPERIMENT.codePinData) {
					const pinData = useWorkflowDocumentStore(createWorkflowDocumentId(workflowsStore.workflowId)).getPinDataSnapshot();
					if (pinData && Object.keys(pinData).length > 0) {
						generatedPinData.value = pinData;
						pinDataApplied.value = true;
					}
				}
				chatMessages.value = convertedMessages;
				if (latestSession.activeVersionCardId && convertedMessages.some((m) => m.id === latestSession.activeVersionCardId)) activeVersionCardId.value = latestSession.activeVersionCardId;
				else if (latestSession.activeVersionCardId) console.warn("[builder] activeVersionCardId not found in loaded messages — collapse state lost", latestSession.activeVersionCardId);
				if (latestSession.resumeAfterRestoreMessageId && convertedMessages.some((m) => m.id === latestSession.resumeAfterRestoreMessageId)) resumeAfterRestoreMessageId.value = latestSession.resumeAfterRestoreMessageId;
				const lastUserMsg = [...convertedMessages].reverse().find((msg) => msg.role === "user" && msg.type === "text");
				if (lastUserMsg) lastUserMessageId.value = lastUserMsg.id;
			}
			return sessions;
		} catch (error) {
			console.error("Failed to load AI sessions:", error);
			return [];
		} finally {
			isLoadingSessions.value = false;
		}
	}
	function unpinAllNodes() {
		const pinData = workflowDocumentStore.value.pinData;
		if (!pinData) return;
		for (const nodeName of Object.keys(pinData)) {
			workflowDocumentStore.value.unpinNodeData(nodeName);
			workflowDocumentStore.value.touchPinnedDataLastRemovedAt(nodeName);
		}
		uiStore.markStateDirty();
	}
	const hasGeneratedPinData = computed(() => generatedPinData.value !== null && Object.keys(generatedPinData.value).length > 0);
	/** True when generated pin data exists but hasn't been applied yet */
	const hasDeferredPinData = computed(() => hasGeneratedPinData.value && !pinDataApplied.value);
	function storeGeneratedPinData(pinData) {
		generatedPinData.value = {
			...generatedPinData.value ?? {},
			...pinData
		};
	}
	function applyGeneratedPinData() {
		if (!generatedPinData.value || !workflowsStore.workflowId) return;
		const workflowDocumentStore = useWorkflowDocumentStore(createWorkflowDocumentId(workflowsStore.workflowId));
		workflowDocumentStore.setPinData({
			...workflowDocumentStore.getPinDataSnapshot(),
			...generatedPinData.value
		});
		uiStore.markStateDirty();
		pinDataApplied.value = true;
	}
	function clearExistingWorkflow() {
		workflowDocumentStore.value.removeAllConnections();
		workflowDocumentStore.value.removeAllNodes();
	}
	function getWorkflowSnapshot() {
		return JSON.stringify({
			nodes: workflowDocumentStore.value.allNodes,
			connections: workflowDocumentStore.value.connectionsBySourceNode
		});
	}
	/**
	* Returns true if AI Builder made edits since the last save.
	* Use resetAiBuilderMadeEdits() after successful save to clear the flag.
	*/
	function getAiBuilderMadeEdits() {
		return aiBuilderMadeEdits.value;
	}
	/**
	* Resets the AI Builder edits flag.
	* Should only be called after a successful workflow save.
	*/
	function resetAiBuilderMadeEdits() {
		aiBuilderMadeEdits.value = false;
	}
	/**
	* Sets the AI Builder edits flag.
	* Called by the useWorkflowUpdate composable when AI Builder makes changes.
	*/
	function setBuilderMadeEdits(value) {
		aiBuilderMadeEdits.value = value;
	}
	function updateBuilderCredits(quota, claimed) {
		creditsQuota.value = quota;
		creditsClaimed.value = claimed;
	}
	async function fetchBuilderCredits() {
		if (!isAIBuilderEnabled.value) return;
		try {
			const response = await getBuilderCredits(rootStore.restApiContext);
			updateBuilderCredits(response.creditsQuota, response.creditsClaimed);
		} catch {}
	}
	watch(() => workflowsStore.workflowId, (newWorkflowId, oldWorkflowId) => {
		if (newWorkflowId === oldWorkflowId) return;
		if (streaming.value) abortStreaming();
		resetBuilderChat();
		if (newWorkflowId && route?.name && BUILDER_ENABLED_VIEWS.includes(route.name) && isAIBuilderEnabled.value) {
			fetchBuilderCredits();
			loadSessions();
		}
	});
	watch([() => workflowsStore.workflowId, () => workflowDocumentStore.value.allNodes.length], ([, nodesCount]) => {
		if (chatMessages.value.length > 0) return;
		if (!isPlanModeAvailable.value) return;
		builderMode.value = nodesCount === 0 ? "plan" : "build";
	});
	/**
	* Tracks workflow builder journey events for telemetry
	* @param eventType - The type of event being tracked
	* @param eventProperties - Optional event-specific attributes
	*/
	function trackWorkflowBuilderJourney(eventType, eventProperties) {
		const payload = {
			workflow_id: workflowsStore.workflowId,
			session_id: trackingSessionId.value,
			event_type: eventType
		};
		if (eventProperties && Object.keys(eventProperties).length > 0) payload.event_properties = eventProperties;
		if (lastUserMessageId.value) payload.last_user_message_id = lastUserMessageId.value;
		telemetry.track("Workflow builder journey", payload);
	}
	function trackWebFetchEvents(messages) {
		for (const msg of messages) {
			if (isWebFetchApprovalMessage(msg)) trackWorkflowBuilderJourney("web_fetch_approval_prompted", {
				domain: msg.domain,
				url: msg.url
			});
			if (isToolMessage(msg) && msg.toolName === "web_fetch" && (msg.status === "completed" || msg.status === "error")) trackWorkflowBuilderJourney("web_fetch_completed", { status: msg.status });
		}
	}
	const workflowHistoryStore = useWorkflowHistoryStore();
	/**
	* Restores the workflow to a previous version and truncates chat messages.
	* Restores the workflow to the given version and collapses messages after
	* the version card (non-destructive — messages stay in DB and UI).
	*
	* @param versionId - The workflow version ID to restore to
	* @param versionCardId - The version card message ID to truncate after
	*/
	async function restoreToVersion(versionId, versionCardId) {
		const workflowId = workflowsStore.workflowId;
		if (uiStore.stateIsDirty) {
			if (!await workflowSaver.saveCurrentWorkflow()) return;
		}
		const updatedWorkflow = await workflowHistoryStore.restoreWorkflow(workflowId, versionId);
		workflowDocumentStore.value.setVersionData({
			versionId: updatedWorkflow.versionId,
			name: workflowDocumentStore.value.versionData?.name ?? null,
			description: workflowDocumentStore.value.versionData?.description ?? null
		});
		workflowDocumentStore.value.setUpdatedAt(updatedWorkflow.updatedAt);
		const versionCardIndex = chatMessages.value.findIndex((msg) => msg.id === versionCardId);
		const nextUserMsg = versionCardIndex !== -1 ? chatMessages.value.slice(versionCardIndex + 1).find((msg) => msg.role === "user" && msg.type === "text") : void 0;
		if (nextUserMsg?.id) await truncateBuilderMessages(rootStore.restApiContext, workflowId, nextUserMsg.id, versionCardId, isCodeBuilder.value || void 0);
		activeVersionCardId.value = versionCardId;
		resumeAfterRestoreMessageId.value = void 0;
		builderMode.value = "build";
		trackWorkflowBuilderJourney("revert_version_from_builder", {
			revert_user_message_id: versionCardId,
			revert_version_id: versionId,
			no_versions_reverted: versionCardIndex !== -1 ? chatMessages.value.slice(versionCardIndex + 1).filter((msg) => isVersionCardMessage(msg)).length : 0
		});
		return updatedWorkflow;
	}
	/**
	* Clears the [Done] indicator from the page title and resets to IDLE.
	* Should be called from a component that watches document visibility.
	*/
	function clearDoneIndicatorTitle() {
		if (documentTitle.getDocumentState() === "AI_DONE") documentTitle.setDocumentTitle(workflowDocumentStore.value.name, "IDLE");
	}
	return {
		chatMessages,
		streaming,
		isHelpStreaming,
		activeVersionCardId,
		resumeAfterRestoreMessageId,
		collapsedMessageIds,
		builderThinkingMessage,
		isAIBuilderEnabled,
		isCodeBuilder,
		builderMode,
		isPlanModeAvailable,
		isInterrupted,
		hasPendingPlan,
		shouldDisableChatInput,
		workflowPrompt,
		toolMessages,
		workflowMessages,
		assistantMessages,
		trackingSessionId,
		streamingAbortController,
		initialGeneration,
		creditsQuota: computed(() => creditsQuota.value),
		creditsRemaining,
		hasNoCreditsRemaining,
		creditsPercentageRemaining,
		isLowCredits,
		hasMessages,
		latestRevertVersion,
		versionCardMessages,
		workflowTodos,
		hasTodosHiddenByPinnedData,
		hasHadSuccessfulExecution,
		hasDeferredPinData,
		hasGeneratedPinData,
		pinDataApplied,
		lastUserMessageId,
		wizardCurrentStep,
		wizardClearedPlaceholders,
		wizardHasExecutedWorkflow,
		unpinAllNodes,
		storeGeneratedPinData,
		applyGeneratedPinData,
		abortStreaming,
		resetBuilderChat,
		setBuilderMode,
		sendChatMessage,
		resumeWithQuestionsAnswers,
		resumeWithPlanDecision,
		loadSessions,
		getWorkflowSnapshot,
		fetchBuilderCredits,
		updateBuilderCredits,
		getRunningTools,
		trackWorkflowBuilderJourney,
		getAiBuilderMadeEdits,
		resetAiBuilderMadeEdits,
		setBuilderMadeEdits,
		incrementManualExecutionStats,
		resetManualExecutionStats,
		applyCodeDiff,
		undoCodeDiff,
		restoreToVersion,
		clearExistingWorkflow,
		clearBackendSession,
		clearDoneIndicatorTitle
	};
});
//#endregion
export { useWorkflowSaveStore as a, useFocusedNodesStore as c, isPlanModePlanMessage as d, isPlanModeQuestionsMessage as f, isWebFetchApprovalCustomMessage as h, useBackendConnectionStore as i, createCollapsedGroupMessage as l, isVersionCardMessage as m, useBrowserNotifications as n, useNpsSurveyStore as o, isPlanModeUserAnswersMessage as p, useWorkflowSaving as r, useWorkflowHistoryStore as s, useBuilderStore as t, isCollapsedGroupMessage as u };
