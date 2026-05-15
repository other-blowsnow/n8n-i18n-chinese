import { $ as openBlock, A as createTextVNode, C as createBaseVNode, E as createElementBlock, Ft as ref, N as defineComponent, S as computed, Sn as toDisplayString, T as createCommentVNode, Ut as triggerRef, Wt as unref, _n as normalizeClass, j as createVNode, n as Transition, yn as normalizeStyle, yt as withCtx } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { at as useI18n, n as onClickOutside } from "./core-C2YcDNFD.js";
import { Mi as N8nTooltip_default, _a as N8nButton_default, va as N8nIcon_default } from "./src-_SF6v8wU.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { Rt as useWorkflowsListStore, qt as useTelemetry } from "./users.store-BgtmQtHf.js";
import { t as useToast } from "./useToast-B0-napOn.js";
import { Xs as v4, _c as instanceAiEventSchema, ca as reduceEvent, la as toAgentTree, oa as createInitialState, sa as findAgent, vc as isSafeObjectKey } from "./constants-ixIyBnRU.js";
import { T as defineStore, a as ResponseError, c as makeRestApiRequest, t as useRootStore } from "./useRootStore-Cj92_BSw.js";
import "./settings.store-VsmHBYo6.js";
import { t as usePushConnectionStore } from "./pushConnection.store-DJyD54Gz.js";
import "./constants-DWuO1kqg.js";
import { a as postCancelTask, c as postMessage, i as postCancel, n as ensureThread, o as postConfirmation, r as getInstanceAiCredits, s as postFeedback, t as useInstanceAiSettingsStore } from "./instanceAiSettings.store-BxaqRlSE.js";
//#region src/features/ai/instanceAi/instanceAi.memory.api.ts
async function fetchThreads(context) {
	return await makeRestApiRequest(context, "GET", "/instance-ai/threads");
}
async function deleteThread(context, threadId) {
	await makeRestApiRequest(context, "DELETE", `/instance-ai/threads/${threadId}`);
}
async function renameThread(context, threadId, title) {
	return await makeRestApiRequest(context, "PATCH", `/instance-ai/threads/${threadId}`, { title });
}
async function updateThreadMetadata(context, threadId, metadata) {
	return await makeRestApiRequest(context, "PATCH", `/instance-ai/threads/${threadId}`, { metadata });
}
async function fetchThreadMessages(context, threadId, limit, page) {
	const params = new URLSearchParams();
	if (limit !== void 0) params.set("limit", String(limit));
	if (page !== void 0) params.set("page", String(page));
	const qs = params.toString();
	return await makeRestApiRequest(context, "GET", `/instance-ai/threads/${threadId}/messages${qs ? `?${qs}` : ""}`);
}
async function fetchThreadStatus(context, threadId) {
	return await makeRestApiRequest(context, "GET", `/instance-ai/threads/${threadId}/status`);
}
//#endregion
//#region src/features/ai/instanceAi/instanceAi.reducer.ts
/** Resolve a runId to its group key. */
function resolveGroupId(state, runId) {
	if (!isSafeObjectKey(runId)) return runId;
	const groupId = state.groupIdByRunId[runId];
	return groupId && isSafeObjectKey(groupId) ? groupId : runId;
}
/** Find the message that owns a group. */
function findMessageByGroupId(state, groupId) {
	if (!isSafeObjectKey(groupId)) return void 0;
	return state.messages.find((m) => m.messageGroupId === groupId || m.runId === groupId);
}
/**
* Find an agent node in the tree by agentId.
* Searches recursively (no depth limit).
*/
function findAgentNode(msg, agentId) {
	if (!msg?.agentTree) return void 0;
	return findNodeRecursive(msg.agentTree, agentId);
}
function findNodeRecursive(node, agentId) {
	if (node.agentId === agentId) return node;
	for (const child of node.children) {
		const found = findNodeRecursive(child, agentId);
		if (found) return found;
	}
}
/**
* Get or create the AgentRunState for a group.
*/
function getOrCreateGroupState(state, groupId, rootAgentId) {
	if (!isSafeObjectKey(groupId)) return createInitialState(rootAgentId);
	let runState = state.runStateByGroupId[groupId];
	if (!runState) {
		runState = createInitialState(rootAgentId);
		state.runStateByGroupId[groupId] = runState;
	}
	return runState;
}
/** Register a runId → groupId mapping. */
function registerRunId(state, runId, groupId) {
	if (!isSafeObjectKey(runId) || !isSafeObjectKey(groupId)) return;
	state.groupIdByRunId[runId] = groupId;
}
function hasSafeEventKeys(event) {
	if (!isSafeObjectKey(event.runId) || !isSafeObjectKey(event.agentId)) return false;
	switch (event.type) {
		case "run-start": return event.payload.messageGroupId ? isSafeObjectKey(event.payload.messageGroupId) : true;
		case "agent-spawned": return isSafeObjectKey(event.payload.parentId);
		case "tool-call":
		case "tool-result":
		case "tool-error":
		case "confirmation-request": return isSafeObjectKey(event.payload.toolCallId);
		default: return true;
	}
}
/**
* Sync the agentTree on a message from the normalized run state.
* Uses in-place patching when the tree structure hasn't changed.
*/
function syncAgentTree(msg, runState) {
	if (!msg.agentTree) {
		msg.agentTree = toAgentTree(runState);
		return;
	}
	if (!patchNodeInPlace(msg.agentTree, runState)) msg.agentTree = toAgentTree(runState);
}
function patchNodeInPlace(node, state) {
	const agent = state.agentsById[node.agentId];
	if (!agent) return false;
	const childIds = state.childrenByAgentId[node.agentId] ?? [];
	const toolCallIds = state.toolCallIdsByAgentId[node.agentId] ?? [];
	const timeline = state.timelineByAgentId[node.agentId] ?? [];
	if (node.children.length !== childIds.length || node.toolCalls.length !== toolCallIds.length) return false;
	for (let i = 0; i < childIds.length; i++) if (node.children[i].agentId !== childIds[i]) return false;
	node.status = agent.status;
	node.textContent = agent.textContent;
	node.reasoning = agent.reasoning;
	node.result = agent.result;
	node.error = agent.error;
	node.tasks = agent.tasks;
	node.planItems = agent.planItems;
	node.kind = agent.kind;
	node.title = agent.title;
	node.subtitle = agent.subtitle;
	node.goal = agent.goal;
	node.targetResource = agent.targetResource;
	for (let i = 0; i < toolCallIds.length; i++) {
		if (!isSafeObjectKey(toolCallIds[i])) return false;
		const tc = state.toolCallsById[toolCallIds[i]];
		const existing = node.toolCalls[i];
		if (!tc || !existing || existing.toolCallId !== tc.toolCallId) return false;
		node.toolCalls[i] = { ...tc };
	}
	if (node.timeline.length !== timeline.length) return false;
	for (let i = 0; i < timeline.length; i++) {
		const existing = node.timeline[i];
		const updated = timeline[i];
		if (existing.type !== updated.type) return false;
		if (existing.type === "text" && updated.type === "text") existing.content = updated.content;
	}
	for (let i = 0; i < childIds.length; i++) if (!patchNodeInPlace(node.children[i], state)) return false;
	return true;
}
function patchStreamingTextTimeline(node, timeline) {
	if (node.timeline.length === timeline.length) {
		if (timeline.length === 0) return true;
		for (let i = 0; i < timeline.length; i++) if (node.timeline[i].type !== timeline[i].type) return false;
		const existingLast = node.timeline.at(-1);
		const updatedLast = timeline.at(-1);
		if (existingLast?.type !== "text" || updatedLast?.type !== "text") return false;
		existingLast.content = updatedLast.content;
		return true;
	}
	if (node.timeline.length + 1 !== timeline.length) return false;
	for (let i = 0; i < node.timeline.length; i++) if (node.timeline[i].type !== timeline[i].type) return false;
	const updatedLast = timeline.at(-1);
	if (updatedLast?.type !== "text") return false;
	node.timeline.push({
		type: "text",
		content: updatedLast.content,
		...updatedLast.responseId ? { responseId: updatedLast.responseId } : {}
	});
	return true;
}
function syncStreamingTextNode(msg, runState, agentId) {
	if (!msg.agentTree) {
		msg.agentTree = toAgentTree(runState);
		return;
	}
	const renderedNode = findAgentNode(msg, agentId);
	const stateNode = findAgent(runState, agentId);
	if (!renderedNode || !stateNode) {
		syncAgentTree(msg, runState);
		return;
	}
	renderedNode.status = stateNode.status;
	renderedNode.textContent = stateNode.textContent;
	renderedNode.result = stateNode.result;
	renderedNode.error = stateNode.error;
	if (!patchStreamingTextTimeline(renderedNode, runState.timelineByAgentId[agentId] ?? [])) {
		syncAgentTree(msg, runState);
		return;
	}
	if (agentId === runState.rootAgentId) msg.content = stateNode.textContent;
}
function syncStreamingReasoningNode(msg, runState, agentId) {
	if (!msg.agentTree) {
		msg.agentTree = toAgentTree(runState);
		return;
	}
	const renderedNode = findAgentNode(msg, agentId);
	const stateNode = findAgent(runState, agentId);
	if (!renderedNode || !stateNode) {
		syncAgentTree(msg, runState);
		return;
	}
	renderedNode.status = stateNode.status;
	renderedNode.reasoning = stateNode.reasoning;
	renderedNode.result = stateNode.result;
	renderedNode.error = stateNode.error;
	if (agentId === runState.rootAgentId) msg.reasoning = stateNode.reasoning;
}
/**
* Rebuild an AgentRunState from a snapshot tree (for run-sync).
*/
function rebuildRunStateFromTree(tree) {
	if (!isSafeObjectKey(tree.agentId)) return void 0;
	const runState = createInitialState(tree.agentId);
	populateRunStateFromNode(runState, tree, void 0);
	runState.status = tree.status === "active" ? "active" : tree.status;
	return runState;
}
function populateRunStateFromNode(state, node, parentId) {
	if (!isSafeObjectKey(node.agentId)) return;
	state.agentsById[node.agentId] = {
		agentId: node.agentId,
		role: node.role,
		tools: node.tools,
		taskId: node.taskId,
		kind: node.kind,
		title: node.title,
		subtitle: node.subtitle,
		goal: node.goal,
		targetResource: node.targetResource,
		status: node.status,
		textContent: node.textContent,
		reasoning: node.reasoning,
		tasks: node.tasks,
		planItems: node.planItems,
		result: node.result,
		error: node.error
	};
	if (parentId && isSafeObjectKey(parentId)) state.parentByAgentId[node.agentId] = parentId;
	const safeChildren = node.children.filter((child) => isSafeObjectKey(child.agentId));
	state.childrenByAgentId[node.agentId] = safeChildren.map((child) => child.agentId);
	state.timelineByAgentId[node.agentId] = node.timeline.filter((entry) => {
		if (entry.type === "child") return isSafeObjectKey(entry.agentId);
		if (entry.type === "tool-call") return isSafeObjectKey(entry.toolCallId);
		return true;
	});
	const safeToolCalls = node.toolCalls.filter((toolCall) => isSafeObjectKey(toolCall.toolCallId));
	state.toolCallIdsByAgentId[node.agentId] = safeToolCalls.map((toolCall) => toolCall.toolCallId);
	for (const tc of safeToolCalls) state.toolCallsById[tc.toolCallId] = { ...tc };
	for (const child of safeChildren) populateRunStateFromNode(state, child, node.agentId);
}
function resolveTarget(state, runId) {
	const groupId = resolveGroupId(state, runId);
	return {
		msg: findMessageByGroupId(state, groupId),
		runState: state.runStateByGroupId[groupId],
		groupId
	};
}
/** Mutates state.messages in-place. Returns the new activeRunId (may differ from input). */
function handleEvent(state, event) {
	if (!state.groupIdByRunId) state.groupIdByRunId = {};
	if (!state.runStateByGroupId) state.runStateByGroupId = {};
	if (!hasSafeEventKeys(event)) return state.activeRunId;
	if (event.type !== "run-start") {
		const { msg, groupId } = resolveTarget(state, event.runId);
		if (!msg) {
			const rootAgentId = event.type === "agent-spawned" ? event.payload.parentId : event.agentId;
			registerRunId(state, event.runId, groupId);
			const runState = getOrCreateGroupState(state, groupId, rootAgentId);
			state.messages.push({
				id: groupId,
				runId: event.runId,
				messageGroupId: groupId,
				role: "assistant",
				createdAt: (/* @__PURE__ */ new Date()).toISOString(),
				content: "",
				reasoning: "",
				isStreaming: true,
				agentTree: toAgentTree(runState)
			});
		}
	}
	switch (event.type) {
		case "run-start": {
			const messageGroupId = event.payload.messageGroupId ?? event.runId;
			registerRunId(state, event.runId, messageGroupId);
			const existingMsg = findMessageByGroupId(state, messageGroupId);
			if (existingMsg) {
				const runState = state.runStateByGroupId[messageGroupId];
				if (runState) {
					runState.status = "active";
					const root = findAgent(runState, runState.rootAgentId);
					if (root) root.status = "active";
				}
				existingMsg.runId = event.runId;
				existingMsg.isStreaming = true;
				if (runState) syncAgentTree(existingMsg, runState);
				return event.runId;
			}
			const runState = getOrCreateGroupState(state, messageGroupId, event.agentId);
			reduceEvent(runState, event);
			state.messages.push({
				id: event.runId,
				runId: event.runId,
				messageGroupId,
				role: "assistant",
				createdAt: (/* @__PURE__ */ new Date()).toISOString(),
				content: "",
				reasoning: "",
				isStreaming: true,
				agentTree: toAgentTree(runState)
			});
			return event.runId;
		}
		case "text-delta": {
			const { msg, runState } = resolveTarget(state, event.runId);
			if (runState) {
				reduceEvent(runState, event);
				if (msg) syncStreamingTextNode(msg, runState, event.agentId);
			}
			return state.activeRunId;
		}
		case "reasoning-delta": {
			const { msg, runState } = resolveTarget(state, event.runId);
			if (runState) {
				reduceEvent(runState, event);
				if (msg) syncStreamingReasoningNode(msg, runState, event.agentId);
			}
			return state.activeRunId;
		}
		case "tool-call":
		case "tool-result":
		case "tool-error":
		case "agent-spawned":
		case "agent-completed":
		case "confirmation-request":
		case "tasks-update": {
			const { msg, runState } = resolveTarget(state, event.runId);
			if (runState) {
				reduceEvent(runState, event);
				if (msg) syncAgentTree(msg, runState);
			}
			return state.activeRunId;
		}
		case "error": {
			const { msg, runState } = resolveTarget(state, event.runId);
			if (runState) {
				reduceEvent(runState, event);
				if (msg) {
					const targetAgentId = findAgent(runState, event.agentId) ? event.agentId : runState.rootAgentId;
					syncStreamingTextNode(msg, runState, targetAgentId);
					const target = findAgentNode(msg, targetAgentId) ?? msg.agentTree;
					if (target) {
						target.status = "error";
						target.error = event.payload.content;
						target.errorDetails = {
							...event.payload.statusCode !== void 0 ? { statusCode: event.payload.statusCode } : {},
							...event.payload.provider ? { provider: event.payload.provider } : {},
							...event.payload.technicalDetails ? { technicalDetails: event.payload.technicalDetails } : {}
						};
					}
				}
			} else if (msg) msg.content += "\n\n*Error: " + event.payload.content + "*";
			return state.activeRunId;
		}
		case "filesystem-request":
		case "thread-title-updated": return state.activeRunId;
		case "run-finish": {
			const { msg, runState } = resolveTarget(state, event.runId);
			if (runState) {
				reduceEvent(runState, event);
				if (msg) {
					msg.isStreaming = false;
					syncAgentTree(msg, runState);
					const { status, reason } = event.payload;
					if (msg.agentTree && msg.agentTree.status !== "error" && status === "error") msg.agentTree.status = "error";
					if (msg.agentTree && status === "error" && reason && !msg.agentTree.error) msg.agentTree.error = reason;
				}
			} else if (msg) {
				msg.isStreaming = false;
				const { status, reason } = event.payload;
				if (status === "error" && reason) msg.content += "\n\n*Error: " + reason + "*";
			}
			return null;
		}
		default: return state.activeRunId;
	}
}
//#endregion
//#region src/features/ai/instanceAi/useResourceRegistry.ts
function optionalString(val) {
	return typeof val === "string" ? val : void 0;
}
/**
* Upsert a produced artifact. When an entry for the same `id` already exists,
* optional fields provided by the new call win; fields it omits are preserved
* from the existing entry. Callers are responsible for resolving `name` using
* the existing entry as a fallback so partial updates (e.g. a patch
* `build-workflow` call that carries only a `workflowId`) don't regress a
* known name to 'Untitled'.
*/
function recordProduced(col, entry) {
	const existing = col.produced.get(entry.id);
	const merged = existing ? {
		type: entry.type,
		id: entry.id,
		name: entry.name,
		createdAt: entry.createdAt ?? existing.createdAt,
		updatedAt: entry.updatedAt ?? existing.updatedAt,
		projectId: entry.projectId ?? existing.projectId
	} : entry;
	col.produced.set(entry.id, merged);
	if (existing && existing.name.toLowerCase() !== merged.name.toLowerCase()) col.byName.delete(existing.name.toLowerCase());
	col.byName.set(merged.name.toLowerCase(), merged);
}
function indexByName(col, entry) {
	col.byName.set(entry.name.toLowerCase(), entry);
}
function entryFromListItem(type, obj) {
	if (typeof obj.name !== "string" || typeof obj.id !== "string") return void 0;
	const entry = {
		type,
		id: obj.id,
		name: obj.name
	};
	const createdAt = optionalString(obj.createdAt);
	const updatedAt = optionalString(obj.updatedAt);
	const projectId = optionalString(obj.projectId);
	if (createdAt !== void 0) entry.createdAt = createdAt;
	if (updatedAt !== void 0) entry.updatedAt = updatedAt;
	if (projectId !== void 0) entry.projectId = projectId;
	return entry;
}
/** Tools whose results may contain resource info (workflows, credentials, data tables). */
var ARTIFACT_TOOLS = new Set([
	"build-workflow",
	"build-workflow-with-agent",
	"submit-workflow",
	"apply-workflow-credentials",
	"workflows",
	"credentials",
	"data-tables",
	"data-table-agent",
	"insert-data-table-rows",
	"update-data-table-rows",
	"delete-data-table-rows"
]);
function extractFromToolCall(tc, col) {
	if (!ARTIFACT_TOOLS.has(tc.toolName)) return;
	if (!tc.result || typeof tc.result !== "object") return;
	const result = tc.result;
	if (Array.isArray(result.workflows)) for (const wf of result.workflows) {
		const entry = entryFromListItem("workflow", wf);
		if (entry) indexByName(col, entry);
	}
	if (typeof result.workflowId === "string") {
		const existing = col.produced.get(result.workflowId);
		const name = optionalString(result.workflowName) ?? optionalString(tc.args?.name) ?? existing?.name ?? "Untitled";
		recordProduced(col, {
			type: "workflow",
			id: result.workflowId,
			name
		});
	}
	if (result.workflow && typeof result.workflow === "object") {
		const obj = result.workflow;
		if (typeof obj.id === "string") {
			const existing = col.produced.get(obj.id);
			const name = optionalString(obj.name) ?? existing?.name ?? "Untitled";
			const entry = {
				type: "workflow",
				id: obj.id,
				name
			};
			const createdAt = optionalString(obj.createdAt);
			const updatedAt = optionalString(obj.updatedAt);
			const projectId = optionalString(obj.projectId);
			if (createdAt !== void 0) entry.createdAt = createdAt;
			if (updatedAt !== void 0) entry.updatedAt = updatedAt;
			if (projectId !== void 0) entry.projectId = projectId;
			recordProduced(col, entry);
		}
	}
	if (Array.isArray(result.credentials)) for (const cred of result.credentials) {
		const entry = entryFromListItem("credential", cred);
		if (entry) indexByName(col, entry);
	}
	if (Array.isArray(result.tables)) for (const table of result.tables) {
		const entry = entryFromListItem("data-table", table);
		if (entry) indexByName(col, entry);
	}
	if (Array.isArray(result.dataTables)) for (const table of result.dataTables) {
		const entry = entryFromListItem("data-table", table);
		if (entry) indexByName(col, entry);
	}
	if (result.table && typeof result.table === "object") {
		const obj = result.table;
		if (typeof obj.id === "string") {
			const existing = col.produced.get(obj.id);
			const name = optionalString(obj.name) ?? existing?.name ?? obj.id;
			const entry = {
				type: "data-table",
				id: obj.id,
				name
			};
			const createdAt = optionalString(obj.createdAt);
			const updatedAt = optionalString(obj.updatedAt);
			const projectId = optionalString(obj.projectId);
			if (createdAt !== void 0) entry.createdAt = createdAt;
			if (updatedAt !== void 0) entry.updatedAt = updatedAt;
			if (projectId !== void 0) entry.projectId = projectId;
			recordProduced(col, entry);
		}
	}
	if (typeof result.dataTableId === "string" && typeof result.projectId === "string") {
		const existing = col.produced.get(result.dataTableId);
		const name = optionalString(result.tableName) ?? existing?.name ?? result.dataTableId;
		recordProduced(col, {
			type: "data-table",
			id: result.dataTableId,
			name,
			projectId: result.projectId
		});
	}
}
function collectFromAgentNode(node, col) {
	for (const tc of node.toolCalls) extractFromToolCall(tc, col);
	for (const child of node.children) collectFromAgentNode(child, col);
}
function enrichWorkflowNames(col, workflowNameLookup) {
	for (const entry of col.produced.values()) {
		if (entry.type !== "workflow") continue;
		const storeName = workflowNameLookup(entry.id);
		if (storeName && storeName !== entry.name) {
			col.byName.delete(entry.name.toLowerCase());
			entry.name = storeName;
			col.byName.set(storeName.toLowerCase(), entry);
		}
	}
}
/**
* Scans tool-call results in the conversation and returns two collections:
*
* - `producedArtifacts` (keyed by resource id) — things the agent built,
*   submitted, created, or mutated. Powers the Artifacts panel and the
*   canvas preview tabs. Repeated writes to the same resource update the
*   existing entry instead of creating a duplicate.
*
* - `resourceNameIndex` (keyed by lowercased name) — every named resource
*   seen in any tool call, including list results. Used only for markdown
*   name→link replacement so references to listed workflows/tables still
*   resolve.
*/
function useResourceRegistry(messages, workflowNameLookup, archivedWorkflowIds) {
	const collections = computed(() => {
		const col = {
			produced: /* @__PURE__ */ new Map(),
			byName: /* @__PURE__ */ new Map()
		};
		for (const msg of messages()) {
			if (!msg.agentTree) continue;
			collectFromAgentNode(msg.agentTree, col);
		}
		if (workflowNameLookup) enrichWorkflowNames(col, workflowNameLookup);
		const archived = archivedWorkflowIds?.();
		if (archived && archived.size > 0) {
			for (const entry of col.produced.values()) if (entry.type === "workflow" && archived.has(entry.id)) entry.archived = true;
		}
		return col;
	});
	return {
		producedArtifacts: computed(() => collections.value.produced),
		resourceNameIndex: computed(() => collections.value.byName)
	};
}
//#endregion
//#region src/features/ai/instanceAi/useResponseFeedback.ts
function hasActiveAgent(node) {
	if (node.status === "active") return true;
	return node.children.some((child) => hasActiveAgent(child));
}
function hasLoadingToolCall(node) {
	if (node.toolCalls.some((tc) => tc.isLoading)) return true;
	return node.children.some((child) => hasLoadingToolCall(child));
}
function hasPendingConfirmation(node) {
	if (node.toolCalls.some((tc) => tc.confirmation && tc.confirmationStatus === "pending")) return true;
	return node.children.some((child) => hasPendingConfirmation(child));
}
function useResponseFeedback({ messages, currentThreadId, telemetry, postFeedback }) {
	const feedbackByResponseId = ref({});
	const ratingByResponseId = /* @__PURE__ */ new Map();
	/**
	* Computes the one currently rateable response identity for the thread.
	* Uses `messageGroupId ?? id` as the response identity.
	*
	* A response is rateable only when:
	* - It is the latest assistant response group
	* - No user message exists after it
	* - The response is no longer streaming
	* - No agent in the tree is still active
	* - No tool call in the tree is still loading
	* - No confirmation/input request is pending
	* - The final state is `completed` or a settled `error` (not cancelled)
	*/
	const rateableResponseId = computed(() => {
		let lastAssistantIdx = -1;
		for (let i = messages.value.length - 1; i >= 0; i--) if (messages.value[i].role === "assistant") {
			lastAssistantIdx = i;
			break;
		}
		if (lastAssistantIdx === -1) return null;
		const lastAssistant = messages.value[lastAssistantIdx];
		for (let i = lastAssistantIdx + 1; i < messages.value.length; i++) if (messages.value[i].role === "user") return null;
		if (lastAssistant.isStreaming) return null;
		const tree = lastAssistant.agentTree;
		if (tree) {
			if (hasActiveAgent(tree)) return null;
			if (hasLoadingToolCall(tree)) return null;
			if (hasPendingConfirmation(tree)) return null;
			if (tree.status === "cancelled") return null;
			if (tree.status !== "completed" && tree.status !== "error") return null;
		}
		return lastAssistant.messageGroupId ?? lastAssistant.id;
	});
	/**
	* Submit response feedback (rating or text). Saves locally and emits telemetry.
	*
	* For thumbs-up: records immediately as submitted (final action).
	* For thumbs-down: emits telemetry but does NOT mark as submitted yet
	* (the user may still type text feedback or cancel).
	* For text feedback: records as submitted (final action after thumbs-down).
	*/
	function submitFeedback(responseId, payload) {
		if (!isSafeObjectKey(responseId)) return;
		if (payload.rating) {
			telemetry.track("User rated workflow generation", {
				thread_id: currentThreadId.value,
				response_id: responseId,
				helpful: payload.rating === "up"
			});
			if (payload.rating === "up") feedbackByResponseId.value[responseId] = payload;
		}
		if (payload.feedback !== void 0) {
			telemetry.track("User submitted workflow generation feedback", {
				thread_id: currentThreadId.value,
				response_id: responseId,
				feedback: payload.feedback
			});
			feedbackByResponseId.value[responseId] = {
				...feedbackByResponseId.value[responseId],
				...payload
			};
		}
		if (payload.rating) ratingByResponseId.set(responseId, payload.rating);
		if (postFeedback) {
			const rating = payload.rating ?? ratingByResponseId.get(responseId);
			if (rating) postFeedback(currentThreadId.value, responseId, {
				rating,
				...payload.feedback !== void 0 ? { comment: payload.feedback } : {}
			}).catch(() => {});
		}
	}
	/** Clear all feedback state (e.g. on thread switch). */
	function resetFeedback() {
		feedbackByResponseId.value = {};
		ratingByResponseId.clear();
	}
	return {
		feedbackByResponseId,
		rateableResponseId,
		submitFeedback,
		resetFeedback
	};
}
//#endregion
//#region src/features/ai/instanceAi/instanceAi.store.ts
/** Walk an agent tree, collecting tool calls that have an active (pending) confirmation. */
function collectPendingConfirmations(node, messageId, resolved, out) {
	for (const tc of node.toolCalls) if (tc.confirmation && tc.isLoading && tc.confirmationStatus !== "approved" && tc.confirmationStatus !== "denied" && !resolved.has(tc.confirmation.requestId) && tc.confirmation.inputType !== "plan-review") out.push({
		toolCall: tc,
		agentNode: node,
		messageId
	});
	for (const child of node.children) collectPendingConfirmations(child, messageId, resolved, out);
}
/** Find a tool call in an agent tree by its confirmation requestId. */
function findToolCallInTree(node, requestId) {
	for (const tc of node.toolCalls) if (tc.confirmation?.requestId === requestId) return tc;
	for (const child of node.children) {
		const found = findToolCallInTree(child, requestId);
		if (found) return found;
	}
}
function findLatestTasksFromMessages(messages) {
	for (let i = messages.length - 1; i >= 0; i--) {
		const tasks = messages[i].agentTree?.tasks;
		if (tasks) return tasks;
	}
	return null;
}
var eventSource = null;
var runStateByGroupId = {};
var groupIdByRunId = {};
var sseGeneration = 0;
var useInstanceAiStore = defineStore("instanceAi", () => {
	const rootStore = useRootStore();
	const instanceAiSettingsStore = useInstanceAiSettingsStore();
	const toast = useToast();
	const telemetry = useTelemetry();
	const persistedThreadIds = /* @__PURE__ */ new Set();
	const currentThreadId = ref(v4());
	const threads = ref([]);
	const sseState = ref("disconnected");
	const lastEventIdByThread = ref({});
	const activeRunId = ref(null);
	const messages = ref([]);
	const archivedWorkflowIds = ref(/* @__PURE__ */ new Set());
	const latestTasks = ref(null);
	const hydratingThreadId = ref(null);
	const pendingMessageCount = ref(0);
	const debugEvents = ref([]);
	const debugMode = ref(false);
	const researchMode = ref(localStorage.getItem("instanceAi.researchMode") === "true");
	const amendContext = ref(null);
	const creditsQuota = ref(void 0);
	const creditsClaimed = ref(void 0);
	const resolvedConfirmationIds = ref(/* @__PURE__ */ new Map());
	const MAX_DEBUG_EVENTS = 1e3;
	let hydrationRequestSequence = 0;
	let activeHydrationRequestToken = null;
	const isStreaming = computed(() => activeRunId.value !== null);
	const isSendingMessage = computed(() => pendingMessageCount.value > 0);
	const hasMessages = computed(() => messages.value.length > 0);
	const isHydratingThread = computed(() => hydratingThreadId.value === currentThreadId.value);
	const isGatewayConnected = computed(() => instanceAiSettingsStore.isGatewayConnected);
	const gatewayDirectory = computed(() => instanceAiSettingsStore.gatewayDirectory);
	const activeDirectory = computed(() => gatewayDirectory.value);
	const workflowsListStore = useWorkflowsListStore();
	const { producedArtifacts, resourceNameIndex } = useResourceRegistry(() => messages.value, (id) => workflowsListStore.getWorkflowById(id)?.name, () => archivedWorkflowIds.value);
	const { feedbackByResponseId, rateableResponseId, submitFeedback, resetFeedback } = useResponseFeedback({
		messages,
		currentThreadId,
		telemetry,
		postFeedback: async (threadId, responseId, payload) => await postFeedback(rootStore.restApiContext, threadId, responseId, payload)
	});
	/** The latest task list, preferring explicit tasks-update events over tree snapshots. */
	const currentTasks = computed(() => latestTasks.value ?? findLatestTasksFromMessages(messages.value));
	/**
	* Derive a single contextual follow-up suggestion from the last completed
	* assistant message. Shown as the input placeholder + Tab to autocomplete.
	*/
	const contextualSuggestion = computed(() => {
		if (isStreaming.value) return null;
		const lastAssistant = [...messages.value].reverse().find((m) => m.role === "assistant");
		if (!lastAssistant || lastAssistant.isStreaming) return null;
		const tree = lastAssistant.agentTree;
		if (!tree) return null;
		const builderChild = tree.children.find((c) => c.role === "workflow-builder");
		if (builderChild) return builderChild.status === "error" || builderChild.status === "cancelled" ? "Try building the workflow again with different settings" : "Add error handling to the workflow";
		if (tree.children.find((c) => c.role === "data-table-manager")) return "Query the data table to show recent entries";
		return null;
	});
	const creditsRemaining = computed(() => {
		if (creditsQuota.value === void 0 || creditsClaimed.value === void 0 || creditsQuota.value === -1) return;
		return Math.max(0, creditsQuota.value - creditsClaimed.value);
	});
	const creditsPercentageRemaining = computed(() => {
		if (creditsQuota.value === void 0 || creditsQuota.value === -1 || creditsRemaining.value === void 0) return;
		if (creditsQuota.value === 0) return 0;
		return creditsRemaining.value / creditsQuota.value * 100;
	});
	const isLowCredits = computed(() => {
		return creditsPercentageRemaining.value !== void 0 && creditsPercentageRemaining.value <= 10;
	});
	let removeCreditsPushListener = null;
	function startCreditsPushListener() {
		if (removeCreditsPushListener) return;
		removeCreditsPushListener = usePushConnectionStore().addEventListener((message) => {
			if (message.type !== "updateInstanceAiCredits") return;
			creditsQuota.value = message.data.creditsQuota;
			creditsClaimed.value = message.data.creditsClaimed;
		});
	}
	function stopCreditsPushListener() {
		if (removeCreditsPushListener) {
			removeCreditsPushListener();
			removeCreditsPushListener = null;
		}
	}
	async function fetchCredits() {
		try {
			const result = await getInstanceAiCredits(rootStore.restApiContext);
			creditsQuota.value = result.creditsQuota;
			creditsClaimed.value = result.creditsClaimed;
		} catch {}
	}
	/** All pending confirmations across all messages, for the top-level panel. */
	const pendingConfirmations = computed(() => {
		const items = [];
		for (const msg of messages.value) {
			if (msg.role !== "assistant" || !msg.agentTree) continue;
			collectPendingConfirmations(msg.agentTree, msg.id, resolvedConfirmationIds.value, items);
		}
		return items;
	});
	/** True while the run is paused awaiting the user to resolve a confirmation (e.g. workflow setup wizard). */
	const isAwaitingConfirmation = computed(() => pendingConfirmations.value.length > 0);
	function resolveConfirmation(requestId, action) {
		const next = new Map(resolvedConfirmationIds.value);
		next.set(requestId, action);
		resolvedConfirmationIds.value = next;
	}
	/** Find a tool call by its confirmation requestId across all messages. */
	function findToolCallByRequestId(requestId) {
		for (const msg of messages.value) {
			if (!msg.agentTree) continue;
			const found = findToolCallInTree(msg.agentTree, requestId);
			if (found) return found;
		}
	}
	function onSSEMessage(sseEvent) {
		if (sseEvent.lastEventId) lastEventIdByThread.value[currentThreadId.value] = Number(sseEvent.lastEventId);
		try {
			const parsed = instanceAiEventSchema.safeParse(JSON.parse(String(sseEvent.data)));
			if (!parsed.success) {
				console.warn("[InstanceAI] Invalid SSE event, skipping:", parsed.error.message);
				return;
			}
			debugEvents.value.push({
				timestamp: (/* @__PURE__ */ new Date()).toISOString(),
				event: parsed.data
			});
			if (debugEvents.value.length > MAX_DEBUG_EVENTS) debugEvents.value.splice(0, debugEvents.value.length - MAX_DEBUG_EVENTS);
			const previousRunId = activeRunId.value;
			activeRunId.value = handleEvent({
				messages: messages.value,
				activeRunId: activeRunId.value,
				runStateByGroupId,
				groupIdByRunId
			}, parsed.data);
			if (parsed.data.type === "tasks-update") latestTasks.value = parsed.data.payload.tasks;
			if (parsed.data.type === "thread-title-updated") {
				const thread = threads.value.find((t) => t.id === currentThreadId.value);
				if (thread) thread.title = parsed.data.payload.title;
			}
			if (parsed.data.type === "run-finish") {
				const ids = parsed.data.payload.archivedWorkflowIds;
				if (ids && ids.length > 0) {
					const next = new Set(archivedWorkflowIds.value);
					for (const id of ids) next.add(id);
					archivedWorkflowIds.value = next;
				}
			}
			if (parsed.data.type === "run-start" || parsed.data.type === "run-finish") triggerRef(messages);
			if (previousRunId && activeRunId.value === null) loadThreads();
		} catch {}
	}
	/**
	* Handle run-sync control frames — full state snapshot from the backend.
	* Replaces the agent tree AND rebuilds the group-level run state so
	* subsequent live events have state to reduce into. Also restores the
	* runId → groupId mapping so late events from any run in the group route
	* to the correct message.
	*/
	function onRunSync(sseEvent) {
		try {
			const data = JSON.parse(String(sseEvent.data));
			const groupId = data.messageGroupId ?? data.runId;
			if (!isSafeObjectKey(data.runId) || !isSafeObjectKey(groupId)) return;
			const rebuiltRunState = rebuildRunStateFromTree(data.agentTree);
			if (!rebuiltRunState) return;
			let msg;
			if (data.messageGroupId) msg = messages.value.find((m) => m.messageGroupId === data.messageGroupId && m.role === "assistant");
			if (!msg) msg = messages.value.find((m) => m.runId === data.runId);
			if (!msg) {
				messages.value.push({
					id: groupId,
					runId: data.runId,
					messageGroupId: groupId,
					runIds: data.runIds,
					role: "assistant",
					createdAt: (/* @__PURE__ */ new Date()).toISOString(),
					content: data.agentTree.textContent,
					reasoning: data.agentTree.reasoning,
					isStreaming: false,
					agentTree: data.agentTree
				});
				msg = messages.value[messages.value.length - 1];
			}
			msg.agentTree = data.agentTree;
			msg.runId = data.runId;
			msg.messageGroupId = groupId;
			msg.runIds = data.runIds;
			msg.content = data.agentTree.textContent;
			msg.reasoning = data.agentTree.reasoning;
			latestTasks.value = findLatestTasksFromMessages(messages.value);
			const isOrchestratorLive = data.status === "active" || data.status === "suspended";
			msg.isStreaming = isOrchestratorLive;
			if (isOrchestratorLive) activeRunId.value = data.runId;
			runStateByGroupId[groupId] = rebuiltRunState;
			if (data.runIds) for (const rid of data.runIds) {
				if (!isSafeObjectKey(rid)) continue;
				groupIdByRunId[rid] = groupId;
			}
			groupIdByRunId[data.runId] = groupId;
		} catch {}
	}
	function connectSSE(threadId) {
		const tid = threadId ?? currentThreadId.value;
		if (eventSource) closeSSE();
		sseState.value = "connecting";
		const gen = ++sseGeneration;
		const capturedThreadId = tid;
		const lastEventId = lastEventIdByThread.value[tid];
		const baseUrl = rootStore.restApiContext.baseUrl;
		const url = lastEventId !== null && lastEventId !== void 0 ? `${baseUrl}/instance-ai/events/${tid}?lastEventId=${String(lastEventId)}` : `${baseUrl}/instance-ai/events/${tid}`;
		eventSource = new EventSource(url, { withCredentials: true });
		eventSource.onopen = () => {
			if (gen !== sseGeneration) return;
			sseState.value = "connected";
		};
		eventSource.onmessage = (ev) => {
			if (gen !== sseGeneration || capturedThreadId !== currentThreadId.value) return;
			onSSEMessage(ev);
		};
		eventSource.addEventListener("run-sync", (ev) => {
			if (gen !== sseGeneration || capturedThreadId !== currentThreadId.value) return;
			onRunSync(ev);
		});
		eventSource.onerror = () => {
			if (gen !== sseGeneration) return;
			if (eventSource?.readyState === EventSource.CONNECTING) sseState.value = "reconnecting";
			else if (eventSource?.readyState === EventSource.CLOSED) {
				sseState.value = "disconnected";
				eventSource = null;
			}
		};
	}
	function closeSSE() {
		if (eventSource) {
			eventSource.close();
			eventSource = null;
		}
		sseState.value = "disconnected";
	}
	function resetThreadRuntimeState(nextHydratingThreadId) {
		hydratingThreadId.value = nextHydratingThreadId;
		messages.value = [];
		archivedWorkflowIds.value = /* @__PURE__ */ new Set();
		latestTasks.value = null;
		activeRunId.value = null;
		debugEvents.value = [];
		resetFeedback();
		resolvedConfirmationIds.value = /* @__PURE__ */ new Map();
		runStateByGroupId = {};
		groupIdByRunId = {};
		activeHydrationRequestToken = null;
	}
	function switchThread(threadId) {
		closeSSE();
		resetThreadRuntimeState(threadId);
		currentThreadId.value = threadId;
		const hydrationRequestToken = ++hydrationRequestSequence;
		activeHydrationRequestToken = hydrationRequestToken;
		delete lastEventIdByThread.value[threadId];
		loadHistoricalMessages(threadId, hydrationRequestToken).then((hydrationStatus) => {
			if (hydrationStatus !== "stale" && activeHydrationRequestToken === hydrationRequestToken) activeHydrationRequestToken = null;
			if (hydrationStatus !== "applied") return;
			loadThreadStatus(threadId);
			connectSSE(threadId);
		});
	}
	/**
	* Reset the store to a blank "no active thread" state — used when the user
	* lands on the base `/instance-ai` route (fresh page, back button, or the
	* AI Assistant nav link). Without this, `currentThreadId` keeps pointing
	* at the last thread and the sidebar highlights it alongside the empty
	* main view, which is the AI-2408 visual mismatch.
	*/
	function clearCurrentThread() {
		closeSSE();
		resetThreadRuntimeState(null);
		currentThreadId.value = v4();
	}
	function newThread() {
		const newThreadId = v4();
		closeSSE();
		resetThreadRuntimeState(null);
		currentThreadId.value = newThreadId;
		connectSSE(newThreadId);
		return newThreadId;
	}
	async function deleteThread$1(threadId) {
		const wasActive = threadId === currentThreadId.value;
		if (persistedThreadIds.has(threadId)) try {
			await deleteThread(rootStore.restApiContext, threadId);
			persistedThreadIds.delete(threadId);
		} catch {
			toast.showError(/* @__PURE__ */ new Error("Failed to delete thread. Try again."), "Delete failed");
			return {
				currentThreadId: currentThreadId.value,
				wasActive
			};
		}
		threads.value = threads.value.filter((t) => t.id !== threadId);
		delete lastEventIdByThread.value[threadId];
		if (wasActive) if (threads.value.length > 0) switchThread(threads.value[0].id);
		else {
			const freshId = v4();
			closeSSE();
			resetThreadRuntimeState(null);
			currentThreadId.value = freshId;
			connectSSE(freshId);
		}
		return {
			currentThreadId: currentThreadId.value,
			wasActive
		};
	}
	async function loadThreads() {
		try {
			const result = await fetchThreads(rootStore.restApiContext);
			for (const thread of result.threads) persistedThreadIds.add(thread.id);
			const serverIds = new Set(result.threads.map((t) => t.id));
			const localOnly = threads.value.filter((t) => !serverIds.has(t.id));
			const serverThreads = result.threads.map((t) => ({
				id: t.id,
				title: t.title || "New conversation",
				createdAt: t.createdAt,
				updatedAt: t.updatedAt,
				metadata: t.metadata ?? void 0
			}));
			threads.value = [...localOnly, ...serverThreads];
			return true;
		} catch {
			return false;
		}
	}
	async function syncThread(threadId) {
		if (persistedThreadIds.has(threadId)) return;
		const result = await ensureThread(rootStore.restApiContext, threadId);
		persistedThreadIds.add(result.thread.id);
		const existingThread = threads.value.find((thread) => thread.id === threadId);
		if (existingThread) {
			existingThread.createdAt = result.thread.createdAt;
			existingThread.updatedAt = result.thread.updatedAt;
			existingThread.title = result.thread.title || existingThread.title;
			return;
		}
		threads.value.unshift({
			id: result.thread.id,
			title: result.thread.title || "New conversation",
			createdAt: result.thread.createdAt,
			updatedAt: result.thread.updatedAt
		});
	}
	async function loadHistoricalMessages(threadId, hydrationRequestToken) {
		hydratingThreadId.value = threadId;
		const effectiveHydrationRequestToken = hydrationRequestToken ?? ++hydrationRequestSequence;
		if (hydrationRequestToken === void 0) activeHydrationRequestToken = effectiveHydrationRequestToken;
		const isCurrentHydrationRequest = () => activeHydrationRequestToken === effectiveHydrationRequestToken;
		try {
			const result = await fetchThreadMessages(rootStore.restApiContext, threadId, 100);
			if (!isCurrentHydrationRequest()) return "stale";
			if (currentThreadId.value !== threadId || messages.value.length > 0) return "skipped";
			if (result.messages.length > 0) {
				messages.value = result.messages;
				latestTasks.value = findLatestTasksFromMessages(result.messages);
				for (const msg of result.messages) {
					if (msg.role !== "assistant" || !msg.agentTree) continue;
					const groupId = msg.messageGroupId ?? msg.runId;
					if (!groupId || !isSafeObjectKey(groupId)) continue;
					const rebuiltRunState = rebuildRunStateFromTree(msg.agentTree);
					if (!rebuiltRunState) continue;
					runStateByGroupId[groupId] = rebuiltRunState;
					if (msg.runIds) for (const rid of msg.runIds) {
						if (!isSafeObjectKey(rid)) continue;
						groupIdByRunId[rid] = groupId;
					}
					if (msg.runId && isSafeObjectKey(msg.runId)) groupIdByRunId[msg.runId] = groupId;
				}
			}
			if (result.nextEventId !== null && result.nextEventId !== void 0) lastEventIdByThread.value[threadId] = result.nextEventId - 1;
			return "applied";
		} catch {
			return isCurrentHydrationRequest() ? "applied" : "stale";
		} finally {
			if (isCurrentHydrationRequest() && hydratingThreadId.value === threadId) hydratingThreadId.value = null;
		}
	}
	async function loadThreadStatus(threadId) {
		try {
			const status = await fetchThreadStatus(rootStore.restApiContext, threadId);
			if (currentThreadId.value !== threadId) return;
			if (!(status.hasActiveRun || status.isSuspended || status.backgroundTasks.length > 0)) return;
			const lastAssistant = [...messages.value].reverse().find((m) => m.role === "assistant");
			if (!lastAssistant) return;
			if (status.hasActiveRun || status.isSuspended) {
				activeRunId.value = lastAssistant.runId ?? null;
				lastAssistant.isStreaming = status.hasActiveRun;
			}
		} catch {}
	}
	async function sendMessage(message, attachments, pushRef) {
		amendContext.value = null;
		pendingMessageCount.value += 1;
		if (sseState.value === "disconnected") connectSSE();
		const userMessage = {
			id: v4(),
			role: "user",
			createdAt: (/* @__PURE__ */ new Date()).toISOString(),
			content: message,
			reasoning: "",
			isStreaming: false,
			attachments: attachments && attachments.length > 0 ? attachments : void 0
		};
		messages.value.push(userMessage);
		try {
			await syncThread(currentThreadId.value);
		} catch {
			const idx = messages.value.indexOf(userMessage);
			if (idx !== -1) messages.value.splice(idx, 1);
			toast.showError(/* @__PURE__ */ new Error("Failed to start a new thread. Try again."), "Send failed");
			pendingMessageCount.value = Math.max(0, pendingMessageCount.value - 1);
			return;
		}
		const isFirstMessage = messages.value.filter((m) => m.role === "user").length === 1;
		const sentProps = {
			thread_id: currentThreadId.value,
			instance_id: rootStore.instanceId,
			is_first_message: isFirstMessage
		};
		telemetry.track("User sent builder message", sentProps);
		try {
			await postMessage(rootStore.restApiContext, currentThreadId.value, message, researchMode.value || void 0, attachments, Intl.DateTimeFormat().resolvedOptions().timeZone, pushRef);
		} catch (error) {
			const status = error instanceof ResponseError ? error.httpStatusCode : void 0;
			if (status === 409) toast.showError(/* @__PURE__ */ new Error("Agent is still working on your previous message"), "Cannot send message");
			else if (status === 400) toast.showError(/* @__PURE__ */ new Error("Message cannot be empty"), "Invalid message");
			else toast.showError(/* @__PURE__ */ new Error("Failed to send message. Try again."), "Send failed");
			const idx = messages.value.indexOf(userMessage);
			if (idx !== -1) messages.value.splice(idx, 1);
		} finally {
			pendingMessageCount.value = Math.max(0, pendingMessageCount.value - 1);
		}
	}
	async function cancelRun() {
		if (!activeRunId.value) return;
		try {
			await postCancel(rootStore.restApiContext, currentThreadId.value);
		} catch {
			toast.showError(/* @__PURE__ */ new Error("Failed to cancel. Try again."), "Cancel failed");
		}
	}
	/** Cancel a specific background task. */
	async function cancelBackgroundTask(taskId) {
		try {
			await postCancelTask(rootStore.restApiContext, currentThreadId.value, taskId);
		} catch {
			toast.showError(/* @__PURE__ */ new Error("Failed to cancel task. Try again."), "Cancel failed");
		}
	}
	/** Stop an agent and prime the input for amend instructions. */
	function amendAgent(agentId, role, taskId) {
		if (taskId) cancelBackgroundTask(taskId);
		else cancelRun();
		amendContext.value = {
			agentId,
			role
		};
	}
	async function confirmAction(requestId, payload) {
		try {
			await postConfirmation(rootStore.restApiContext, requestId, payload);
			return true;
		} catch {
			toast.showError(/* @__PURE__ */ new Error("Failed to send confirmation. Try again."), "Confirmation failed");
			return false;
		}
	}
	async function confirmResourceDecision(requestId, decision) {
		resolveConfirmation(requestId, "approved");
		await confirmAction(requestId, {
			kind: "resourceDecision",
			resourceDecision: decision
		});
	}
	function toggleResearchMode() {
		researchMode.value = !researchMode.value;
		localStorage.setItem("instanceAi.researchMode", String(researchMode.value));
	}
	function copyFullTrace() {
		const collapsed = [];
		let pendingText = null;
		let pendingReasoning = null;
		for (const entry of debugEvents.value) {
			const { event } = entry;
			if (event.type === "text-delta") {
				if (pendingText && pendingText.event.agentId === event.agentId) pendingText.buffer += event.payload.text;
				else {
					if (pendingText) {
						pendingText.event.payload.text = pendingText.buffer;
						collapsed.push(pendingText);
					}
					pendingText = {
						timestamp: entry.timestamp,
						event: {
							...event,
							payload: { ...event.payload }
						},
						buffer: event.payload.text
					};
				}
				continue;
			}
			if (event.type === "reasoning-delta") {
				if (pendingReasoning && pendingReasoning.event.agentId === event.agentId) pendingReasoning.buffer += event.payload.text;
				else {
					if (pendingReasoning) {
						pendingReasoning.event.payload.text = pendingReasoning.buffer;
						collapsed.push(pendingReasoning);
					}
					pendingReasoning = {
						timestamp: entry.timestamp,
						event: {
							...event,
							payload: { ...event.payload }
						},
						buffer: event.payload.text
					};
				}
				continue;
			}
			if (pendingText) {
				pendingText.event.payload.text = pendingText.buffer;
				collapsed.push(pendingText);
				pendingText = null;
			}
			if (pendingReasoning) {
				pendingReasoning.event.payload.text = pendingReasoning.buffer;
				collapsed.push(pendingReasoning);
				pendingReasoning = null;
			}
			collapsed.push(entry);
		}
		if (pendingText) {
			pendingText.event.payload.text = pendingText.buffer;
			collapsed.push(pendingText);
		}
		if (pendingReasoning) {
			pendingReasoning.event.payload.text = pendingReasoning.buffer;
			collapsed.push(pendingReasoning);
		}
		return JSON.stringify({
			threadId: currentThreadId.value,
			exportedAt: (/* @__PURE__ */ new Date()).toISOString(),
			messages: messages.value,
			events: collapsed
		}, null, 2);
	}
	async function renameThread$1(threadId, title) {
		const thread = threads.value.find((t) => t.id === threadId);
		if (thread) thread.title = title;
		if (persistedThreadIds.has(threadId)) await renameThread(rootStore.restApiContext, threadId, title);
	}
	function getThreadMetadata(threadId) {
		return threads.value.find((t) => t.id === threadId)?.metadata;
	}
	async function updateThreadMetadata$1(threadId, metadata) {
		const thread = threads.value.find((t) => t.id === threadId);
		if (thread) thread.metadata = {
			...thread.metadata,
			...metadata
		};
		if (persistedThreadIds.has(threadId)) await updateThreadMetadata(rootStore.restApiContext, threadId, metadata);
	}
	return {
		currentThreadId,
		threads,
		sseState,
		lastEventIdByThread,
		activeRunId,
		messages,
		debugEvents,
		debugMode,
		researchMode,
		amendContext,
		feedbackByResponseId,
		creditsQuota,
		creditsClaimed,
		resolvedConfirmationIds,
		isStreaming,
		isSendingMessage,
		hasMessages,
		isHydratingThread,
		isGatewayConnected,
		gatewayDirectory,
		activeDirectory,
		contextualSuggestion,
		currentTasks,
		producedArtifacts,
		resourceNameIndex,
		rateableResponseId,
		creditsRemaining,
		creditsPercentageRemaining,
		isLowCredits,
		pendingConfirmations,
		isAwaitingConfirmation,
		newThread,
		clearCurrentThread,
		deleteThread: deleteThread$1,
		renameThread: renameThread$1,
		getThreadMetadata,
		updateThreadMetadata: updateThreadMetadata$1,
		switchThread,
		loadThreads,
		loadHistoricalMessages,
		loadThreadStatus,
		sendMessage,
		cancelRun,
		cancelBackgroundTask,
		amendAgent,
		toggleResearchMode,
		confirmAction,
		confirmResourceDecision,
		resolveConfirmation,
		findToolCallByRequestId,
		copyFullTrace,
		submitFeedback,
		fetchCredits,
		startCreditsPushListener,
		stopCreditsPushListener,
		connectSSE,
		closeSSE
	};
});
//#endregion
//#region src/features/ai/assistant/components/Agent/CreditsSettingsDropdown.vue?vue&type=script&setup=true&lang.ts
var CreditsSettingsDropdown_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "CreditsSettingsDropdown",
	props: {
		creditsRemaining: {},
		creditsQuota: {},
		isLowCredits: { type: Boolean }
	},
	emits: ["upgrade-click"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const isOpen = ref(false);
		const dropdownRef = ref();
		onClickOutside(dropdownRef, () => {
			isOpen.value = false;
		}, { ignore: [".n8n-tooltip"] });
		const hasCredits = computed(() => {
			return props.creditsQuota !== void 0 && props.creditsRemaining !== void 0;
		});
		const creditsLeftText = computed(() => {
			if (props.creditsRemaining === void 0) return "";
			return i18n.baseText("aiAssistant.builder.settings.creditsLeft", { interpolate: { count: String(props.creditsRemaining) } });
		});
		const progressPercentage = computed(() => {
			if (props.creditsQuota === void 0 || props.creditsRemaining === void 0 || props.creditsQuota === 0) return 0;
			return props.creditsRemaining / props.creditsQuota * 100;
		});
		const getNextMonth = () => {
			const now = /* @__PURE__ */ new Date();
			return new Date(now.getFullYear(), now.getMonth() + 1, 1).toLocaleDateString("en-US", {
				month: "long",
				day: "numeric",
				year: "numeric"
			});
		};
		const tooltipContent = computed(() => {
			const date = getNextMonth();
			return i18n.baseText("aiAssistant.builder.settings.creditsTooltip", { interpolate: {
				renewalDate: date,
				expiryDate: date
			} });
		});
		function toggleDropdown() {
			isOpen.value = !isOpen.value;
		}
		function onGetMoreCredits() {
			emit("upgrade-click");
			isOpen.value = false;
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				ref_key: "dropdownRef",
				ref: dropdownRef,
				class: normalizeClass(_ctx.$style.wrapper)
			}, [createVNode(unref(N8nButton_default), {
				icon: "circle-dollar-sign",
				variant: "ghost",
				size: "large",
				"icon-only": "",
				class: normalizeClass({ [_ctx.$style.active]: isOpen.value }),
				"data-test-id": "credits-dropdown-button",
				onClick: toggleDropdown
			}, null, 8, ["class"]), createVNode(Transition, { name: "dropdown" }, {
				default: withCtx(() => [isOpen.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.dropdown),
					"data-test-id": "credits-dropdown"
				}, [hasCredits.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.creditsSection)
				}, [
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.creditsHeader) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.creditsLabel) }, [createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("aiAssistant.builder.settings.credits")), 1), createVNode(unref(N8nTooltip_default), {
						content: tooltipContent.value,
						placement: "bottom",
						"show-after": 300
					}, {
						default: withCtx(() => [createVNode(unref(N8nIcon_default), {
							icon: "info",
							size: "small",
							class: normalizeClass(_ctx.$style.infoIcon)
						}, null, 8, ["class"])]),
						_: 1
					}, 8, ["content"])], 2), createBaseVNode("span", { class: normalizeClass(_ctx.$style.creditsCount) }, toDisplayString(creditsLeftText.value), 3)], 2),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.progressBar) }, [createBaseVNode("div", {
						class: normalizeClass([_ctx.$style.progressFill, { [_ctx.$style.low]: __props.isLowCredits }]),
						style: normalizeStyle({ width: `${progressPercentage.value}%` })
					}, null, 6)], 2),
					createVNode(unref(N8nButton_default), {
						variant: "outline",
						size: "small",
						class: normalizeClass(_ctx.$style.getMoreButton),
						"data-test-id": "credits-get-more",
						onClick: onGetMoreCredits
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("aiAssistant.builder.settings.getMoreCredits")), 1)]),
						_: 1
					}, 8, ["class"])
				], 2)) : createCommentVNode("", true)], 2)) : createCommentVNode("", true)]),
				_: 1
			})], 2);
		};
	}
});
var CreditsSettingsDropdown_vue_vue_type_style_index_0_lang_module_default = {
	wrapper: "_wrapper_s46z5_125",
	dropdown: "_dropdown_s46z5_131",
	creditsSection: "_creditsSection_s46z5_143",
	creditsHeader: "_creditsHeader_s46z5_152",
	creditsLabel: "_creditsLabel_s46z5_159",
	infoIcon: "_infoIcon_s46z5_168",
	creditsCount: "_creditsCount_s46z5_174",
	progressBar: "_progressBar_s46z5_181",
	progressFill: "_progressFill_s46z5_189",
	low: "_low_s46z5_195",
	active: "_active_s46z5_199",
	getMoreButton: "_getMoreButton_s46z5_203"
};
var CreditsSettingsDropdown_default = /* @__PURE__ */ _plugin_vue_export_helper_default(CreditsSettingsDropdown_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CreditsSettingsDropdown_vue_vue_type_style_index_0_lang_module_default }], ["__scopeId", "data-v-0b2730cc"]]);
//#endregion
//#region src/features/ai/assistant/components/Agent/CreditWarningBanner.vue?vue&type=script&setup=true&lang.ts
var CreditWarningBanner_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "CreditWarningBanner",
	props: {
		creditsRemaining: {},
		creditsQuota: {}
	},
	emits: ["upgrade-click", "dismiss"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const bannerText = computed(() => {
			return i18n.baseText("aiAssistant.builder.creditBanner.text", { interpolate: {
				remaining: String(props.creditsRemaining ?? 0),
				total: String(props.creditsQuota ?? 0)
			} });
		});
		const getNextMonth = () => {
			const now = /* @__PURE__ */ new Date();
			return new Date(now.getFullYear(), now.getMonth() + 1, 1).toLocaleDateString("en-US", {
				month: "long",
				day: "numeric",
				year: "numeric"
			});
		};
		const tooltipContent = computed(() => {
			const date = getNextMonth();
			return i18n.baseText("aiAssistant.builder.settings.creditsTooltip", { interpolate: {
				renewalDate: date,
				expiryDate: date
			} });
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.banner),
				"data-test-id": "credit-warning-banner"
			}, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.text) }, toDisplayString(bannerText.value), 3), createVNode(unref(N8nTooltip_default), {
					content: tooltipContent.value,
					placement: "top",
					"show-after": 300
				}, {
					default: withCtx(() => [createVNode(unref(N8nIcon_default), {
						icon: "info",
						size: "small",
						class: normalizeClass(_ctx.$style.infoIcon)
					}, null, 8, ["class"])]),
					_: 1
				}, 8, ["content"])], 2),
				createVNode(unref(N8nButton_default), {
					variant: "outline",
					size: "xsmall",
					"data-test-id": "credit-banner-get-more",
					onClick: _cache[0] || (_cache[0] = ($event) => emit("upgrade-click"))
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("aiAssistant.builder.creditBanner.getMore")), 1)]),
					_: 1
				}),
				createVNode(unref(N8nIcon_default), {
					icon: "x",
					size: "small",
					class: normalizeClass(_ctx.$style.closeIcon),
					"data-test-id": "credit-banner-dismiss",
					onClick: _cache[1] || (_cache[1] = ($event) => emit("dismiss"))
				}, null, 8, ["class"])
			], 2);
		};
	}
});
var CreditWarningBanner_vue_vue_type_style_index_0_lang_module_default = {
	banner: "_banner_1krbe_125",
	content: "_content_1krbe_138",
	text: "_text_1krbe_146",
	infoIcon: "_infoIcon_1krbe_154",
	closeIcon: "_closeIcon_1krbe_160"
};
var CreditWarningBanner_default = /* @__PURE__ */ _plugin_vue_export_helper_default(CreditWarningBanner_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CreditWarningBanner_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { fetchThreads as a, fetchThreadMessages as i, CreditsSettingsDropdown_default as n, useInstanceAiStore as r, CreditWarningBanner_default as t };
