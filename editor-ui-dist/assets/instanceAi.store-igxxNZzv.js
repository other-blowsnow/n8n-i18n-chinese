import { It as ref, Lt as shallowReactive, Pt as reactive, R as inject, S as computed, Wt as triggerRef, gt as watch, tt as provide } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { t as useToast } from "./useToast-CNwmpHsw.js";
import { Ja as reduceEvent, Ka as createInitialState, Xa as toAgentTree, Xl as v4, Ya as stateFromAgentTree, bu as instanceAiEventSchema, qa as findAgent, xu as isSafeObjectKey, yu as buildRunWorkflowSessionGrantKey } from "./constants-U-laJZAl.js";
import { T as defineStore, a as ResponseError, c as makeRestApiRequest, t as useRootStore } from "./useRootStore-Bad1y11b.js";
import "./settings.store-CgTGI66t.js";
import { p as useTelemetry } from "./users.store-Bf6s0cNu.js";
import { t as useWorkflowsListStore } from "./workflowsList.store-DLn31s0i.js";
import { t as usePushConnectionStore } from "./pushConnection.store-ao3S1cyO.js";
import "./constants-CdPER9c3.js";
import { a as postCancelTask, c as postMessage, i as postCancel, n as ensureThread, o as postConfirmation, r as getInstanceAiCredits, s as postFeedback, t as useInstanceAiSettingsStore } from "./instanceAiSettings.store-BXy6kYoX.js";
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
async function fetchRunDebug(context, runId) {
	return await makeRestApiRequest(context, "GET", `/instance-ai/debug/runs/${runId}`);
}
async function fetchThreadDebugRuns(context, threadId) {
	return await makeRestApiRequest(context, "GET", `/instance-ai/debug/threads/${threadId}/runs`);
}
//#endregion
//#region src/features/ai/instanceAi/instanceAi.reducer.ts
/** Resolve a runId to its group key. */
function resolveGroupId(state, runId) {
	if (!isSafeObjectKey(runId)) return runId;
	const groupId = state.groupIdByRunId.get(runId);
	return groupId && isSafeObjectKey(groupId) ? groupId : runId;
}
/** Find the message that owns a group. */
function findMessageByGroupId(state, groupId) {
	if (!isSafeObjectKey(groupId)) return void 0;
	return state.messages.find((m) => m.messageGroupId === groupId || m.runId === groupId);
}
/**
* Create a reactive run state. Reactivity must live on the run state itself:
* the shared reducer mutates it in place, and components render the very same
* node objects via `msg.agentTree` — wrapping here makes those mutations
* observable everywhere without any synchronization layer.
*/
function createRunState(rootAgentId) {
	return reactive(createInitialState(rootAgentId));
}
/**
* Index a snapshot tree (session restore / run-sync) into a reactive run state.
* The tree's nodes are adopted, not copied — live events keep mutating the
* exact objects the message already renders.
*/
function createRunStateFromTree(tree) {
	const runState = stateFromAgentTree(tree);
	return runState ? reactive(runState) : void 0;
}
/**
* Get or create the AgentRunState for a group.
*/
function getOrCreateGroupState(state, groupId, rootAgentId) {
	if (!isSafeObjectKey(groupId)) return createRunState(rootAgentId);
	let runState = state.runStateByGroupId.get(groupId);
	if (!runState) {
		runState = createRunState(rootAgentId);
		state.runStateByGroupId.set(groupId, runState);
	}
	return runState;
}
/** Register a runId → groupId mapping. */
function registerRunId(state, runId, groupId) {
	if (!isSafeObjectKey(runId) || !isSafeObjectKey(groupId)) return;
	state.groupIdByRunId.set(runId, groupId);
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
function resolveTarget(state, runId) {
	const groupId = resolveGroupId(state, runId);
	return {
		msg: findMessageByGroupId(state, groupId),
		runState: state.runStateByGroupId.get(groupId),
		groupId
	};
}
/** Mutates state.messages in-place. Returns the new activeRunId (may differ from input). */
function handleEvent(state, event) {
	if (!state.groupIdByRunId) state.groupIdByRunId = /* @__PURE__ */ new Map();
	if (!state.runStateByGroupId) state.runStateByGroupId = /* @__PURE__ */ new Map();
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
				const runState = state.runStateByGroupId.get(messageGroupId);
				if (runState) {
					reduceEvent(runState, event);
					existingMsg.agentTree = toAgentTree(runState);
				}
				existingMsg.runId = event.runId;
				existingMsg.isStreaming = true;
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
				if (msg && event.agentId === runState.rootAgentId) msg.content = findAgent(runState, event.agentId)?.textContent ?? msg.content;
			}
			return state.activeRunId;
		}
		case "reasoning-delta": {
			const { msg, runState } = resolveTarget(state, event.runId);
			if (runState) {
				reduceEvent(runState, event);
				if (msg && event.agentId === runState.rootAgentId) msg.reasoning = findAgent(runState, event.agentId)?.reasoning ?? msg.reasoning;
			}
			return state.activeRunId;
		}
		case "tool-call":
		case "tool-result":
		case "tool-error":
		case "agent-spawned":
		case "agent-completed":
		case "confirmation-request":
		case "tasks-update":
		case "status": {
			const { runState } = resolveTarget(state, event.runId);
			if (runState) reduceEvent(runState, event);
			return state.activeRunId;
		}
		case "error": {
			const { msg, runState } = resolveTarget(state, event.runId);
			if (runState) {
				reduceEvent(runState, event);
				const target = findAgent(runState, event.agentId) ?? findAgent(runState, runState.rootAgentId);
				if (target) {
					target.status = "error";
					target.error = event.payload.content;
					target.errorDetails = {
						...event.payload.statusCode !== void 0 ? { statusCode: event.payload.statusCode } : {},
						...event.payload.provider ? { provider: event.payload.provider } : {},
						...event.payload.technicalDetails ? { technicalDetails: event.payload.technicalDetails } : {}
					};
					if (msg && target.agentId === runState.rootAgentId) msg.content = target.textContent;
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
				const { status, reason } = event.payload;
				const root = findAgent(runState, runState.rootAgentId);
				if (root && status === "error" && reason && !root.error) root.error = reason;
				if (msg) msg.isStreaming = false;
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
//#region src/features/ai/instanceAi/canvasPreview.utils.ts
/**
* Walks an agent tree depth-first (most recent last) and returns the workflowId
* and toolCallId from the latest successful build-workflow / submit-workflow tool result.
*/
function getLatestBuildResult(node) {
	for (let i = node.children.length - 1; i >= 0; i--) {
		const childResult = getLatestBuildResult(node.children[i]);
		if (childResult) return childResult;
	}
	for (let i = node.toolCalls.length - 1; i >= 0; i--) {
		const tc = node.toolCalls[i];
		if ((tc.toolName === "build-workflow" || tc.toolName === "submit-workflow") && !tc.isLoading && tc.result && typeof tc.result === "object") {
			const result = tc.result;
			if (result.success === true && typeof result.workflowId === "string") return {
				workflowId: result.workflowId,
				toolCallId: tc.toolCallId
			};
		}
	}
}
/** A workflow-builder sub-agent node, identified by kind or role. */
function isBuilderNode(node) {
	return node.kind === "builder" || node.role === "workflow-builder";
}
/**
* Walks an agent tree depth-first (most recent last) and returns the agentId
* and workflowId of the latest workflow-builder sub-agent that was spawned
* with a concrete `targetResource.id` — i.e. an edit-mode builder that
* already knows which existing workflow it is modifying. Used to open the
* canvas preview at spawn time, before the first build-workflow tool call
* returns a result.
*/
function getLatestBuilderTarget(node) {
	for (let i = node.children.length - 1; i >= 0; i--) {
		const child = node.children[i];
		const nested = getLatestBuilderTarget(child);
		if (nested) return nested;
		if (isBuilderNode(child) && child.targetResource?.type === "workflow" && typeof child.targetResource.id === "string") return {
			agentId: child.agentId,
			workflowId: child.targetResource.id
		};
	}
}
var WORKFLOW_SETUP_TOOLS = new Set(["setup-workflow", "apply-workflow-credentials"]);
/**
* Walks an agent tree depth-first (most recent last) and returns the workflowId
* (from args) and toolCallId from the latest successful setup-workflow /
* apply-workflow-credentials tool result. These tools modify the workflow
* (credentials, parameters) but don't return workflowId in the result.
*/
function getLatestWorkflowSetupResult(node) {
	for (let i = node.children.length - 1; i >= 0; i--) {
		const childResult = getLatestWorkflowSetupResult(node.children[i]);
		if (childResult) return childResult;
	}
	for (let i = node.toolCalls.length - 1; i >= 0; i--) {
		const tc = node.toolCalls[i];
		if (WORKFLOW_SETUP_TOOLS.has(tc.toolName) && !tc.isLoading && tc.result && typeof tc.result === "object") {
			const result = tc.result;
			const args = tc.args;
			if (result.success === true && typeof args?.workflowId === "string") return {
				workflowId: args.workflowId,
				toolCallId: tc.toolCallId
			};
		}
	}
}
var WORKFLOW_MUTATING_ACTIONS$1 = new Set([
	"update",
	"restore-version",
	"setup"
]);
/**
* Walks an agent tree depth-first (most recent last) and returns the workflowId
* (from args) and toolCallId from the latest successful `workflows` tool call
* that mutated the workflow definition (action=update / restore-version / setup).
* These modify an existing workflow but surface under tool name 'workflows' —
* invisible to getLatestBuildResult — and don't reliably return the workflowId in
* the result, so it is read from the call args. `setup` is the current path for
* credential/parameter configuration (the inline setup card); the legacy
* setup-workflow / apply-workflow-credentials tools are handled by
* getLatestWorkflowSetupResult.
*/
function getLatestWorkflowUpdateResult(node) {
	for (let i = node.children.length - 1; i >= 0; i--) {
		const childResult = getLatestWorkflowUpdateResult(node.children[i]);
		if (childResult) return childResult;
	}
	for (let i = node.toolCalls.length - 1; i >= 0; i--) {
		const tc = node.toolCalls[i];
		const args = tc.args;
		if (tc.toolName === "workflows" && typeof args?.action === "string" && WORKFLOW_MUTATING_ACTIONS$1.has(args.action) && !tc.isLoading && tc.result && typeof tc.result === "object") {
			if (tc.result.success === true && typeof args?.workflowId === "string") return {
				workflowId: args.workflowId,
				toolCallId: tc.toolCallId
			};
		}
	}
}
var WORKFLOW_LOCKING_TOOLS = new Set([
	"build-workflow",
	"build-workflow-with-agent",
	"apply-workflow-credentials",
	"setup-workflow",
	"verify-built-workflow"
]);
/**
* Whether the agent is actively working on `workflowId` somewhere in this agent
* tree — used to lock the artifact canvas while a build/edit/verification is in
* flight so the user can't execute or edit into a mid-stream conflict. Any
* of these signals is enough:
*   1. The active agent tree has already built/updated/setup this workflow.
*      This covers short gaps between tool calls while the agent run is still
*      ongoing.
*   2. An active workflow-builder sub-agent targeting the workflow (covers the
*      whole build window: read file → edit → submit-workflow → verify).
*   3. An in-flight workflow-affecting tool call targeting the workflow — the
*      build/setup/verify tools, `executions.run`, or a `workflows` update /
*      restore-version / setup action. Read-only `workflows` actions (get-json,
*      get, list, …) don't lock.
*/
function isAgentEditingWorkflow(node, workflowId) {
	if (node.status === "active" && (getLatestBuildResult(node)?.workflowId === workflowId || getLatestWorkflowSetupResult(node)?.workflowId === workflowId || getLatestWorkflowUpdateResult(node)?.workflowId === workflowId)) return true;
	if (isBuilderNode(node) && node.status === "active" && node.targetResource?.type === "workflow" && node.targetResource.id === workflowId) return true;
	for (const tc of node.toolCalls) {
		if (!tc.isLoading) continue;
		const args = tc.args;
		if (args?.workflowId !== workflowId) continue;
		if (WORKFLOW_LOCKING_TOOLS.has(tc.toolName)) return true;
		if (tc.toolName === "executions" && args.action === "run") return true;
		if (tc.toolName === "workflows" && typeof args?.action === "string" && WORKFLOW_MUTATING_ACTIONS$1.has(args.action)) return true;
	}
	for (const child of node.children) if (isAgentEditingWorkflow(child, workflowId)) return true;
	return false;
}
var DATA_TABLE_PREVIEW_ACTIONS = new Set([
	"schema",
	"query",
	"create",
	"insert-rows",
	"update-rows",
	"delete-rows",
	"add-column",
	"delete-column",
	"rename-column"
]);
/** Per-action check that the result contains a table reference worth previewing. */
var RESULT_VALIDATORS = {
	schema: (r) => Array.isArray(r.columns),
	query: (r) => Array.isArray(r.data),
	"insert-rows": (r) => typeof r.insertedCount === "number",
	"update-rows": (r) => typeof r.updatedCount === "number",
	"add-column": (r) => r.column !== null && r.column !== void 0 && typeof r.column === "object",
	"delete-rows": (r) => r.success === true,
	"delete-column": (r) => r.success === true,
	"rename-column": (r) => r.success === true
};
function extractDataTableId(action, result, args) {
	if (action === "create") {
		if (result.table && typeof result.table === "object") {
			const table = result.table;
			if (typeof table.id === "string") return table.id;
		}
		return;
	}
	const isValid = RESULT_VALIDATORS[action];
	if (isValid?.(result)) {
		if (typeof result.dataTableId === "string") return result.dataTableId;
		if (typeof args?.dataTableId === "string") return args.dataTableId;
	}
}
/**
* Walks an agent tree depth-first (most recent last) and returns the dataTableId
* from the latest successful delete-data-table tool result.
*/
function getLatestDeletedDataTableId(node) {
	for (let i = node.children.length - 1; i >= 0; i--) {
		const childResult = getLatestDeletedDataTableId(node.children[i]);
		if (childResult) return childResult;
	}
	for (let i = node.toolCalls.length - 1; i >= 0; i--) {
		const tc = node.toolCalls[i];
		const args = tc.args;
		if (tc.toolName === "data-tables" && args?.action === "delete" && !tc.isLoading && tc.result && typeof tc.result === "object") {
			if (tc.result.success === true && typeof args?.dataTableId === "string") return args.dataTableId;
		}
	}
}
function getLatestDataTableResult(node) {
	for (let i = node.children.length - 1; i >= 0; i--) {
		const childResult = getLatestDataTableResult(node.children[i]);
		if (childResult) return childResult;
	}
	for (let i = node.toolCalls.length - 1; i >= 0; i--) {
		const tc = node.toolCalls[i];
		const args = tc.args;
		const action = typeof args?.action === "string" ? args.action : "";
		if (tc.toolName === "data-tables" && DATA_TABLE_PREVIEW_ACTIONS.has(action) && !tc.isLoading && tc.result && typeof tc.result === "object") {
			const result = tc.result;
			const dataTableId = extractDataTableId(action, result, args);
			if (dataTableId) return {
				dataTableId,
				toolCallId: tc.toolCallId
			};
		}
	}
}
/**
* Walks an agent tree and collects the latest completed run-workflow result
* per workflowId. Used to restore execution status from historical messages
* after page refresh.
*/
function getExecutionResultsByWorkflow(node) {
	const results = /* @__PURE__ */ new Map();
	collectExecutionResults(node, results);
	return results;
}
function collectExecutionResults(node, results) {
	for (const tc of node.toolCalls) {
		const tcArgs = tc.args;
		const isExecutionRun = tc.toolName === "executions" && tcArgs?.action === "run";
		const isVerificationRun = tc.toolName === "verify-built-workflow";
		if (!isExecutionRun && !isVerificationRun || tc.isLoading) continue;
		const result = tc.result;
		const args = tc.args;
		if (typeof result === "object" && result !== null && typeof args === "object" && args !== null && "workflowId" in args && typeof args.workflowId === "string" && "executionId" in result && typeof result.executionId === "string" && "status" in result && (result.status === "success" || result.status === "error")) results.set(args.workflowId, {
			executionId: result.executionId,
			status: result.status,
			..."finishedAt" in result && typeof result.finishedAt === "string" ? { finishedAt: result.finishedAt } : {}
		});
	}
	for (const child of node.children) collectExecutionResults(child, results);
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
	"insert-data-table-rows",
	"update-data-table-rows",
	"delete-data-table-rows"
]);
var WORKFLOW_MUTATING_ACTIONS = new Set([
	"update",
	"restore-version",
	"setup"
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
	if (tc.toolName === "workflows" && result.success === true && typeof tc.args?.workflowId === "string" && typeof tc.args.action === "string" && WORKFLOW_MUTATING_ACTIONS.has(tc.args.action)) {
		const workflowId = tc.args.workflowId;
		const existing = col.produced.get(workflowId);
		recordProduced(col, {
			type: "workflow",
			id: workflowId,
			name: optionalString(result.workflowName) ?? optionalString(tc.args.name) ?? existing?.name ?? "Untitled"
		});
	}
	if (tc.toolName === "workflows" && Array.isArray(result.nodes)) {
		const entry = entryFromListItem("workflow", result);
		if (entry) recordProduced(col, entry);
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
		const name = optionalString(result.tableName) ?? optionalString(result.dataTableName) ?? existing?.name ?? result.dataTableId;
		recordProduced(col, {
			type: "data-table",
			id: result.dataTableId,
			name,
			projectId: result.projectId
		});
	}
}
/**
* Register the agent's `targetResource` as a produced artifact when it carries
* a concrete resource id (e.g. a workflow-builder spawned to edit an existing
* workflow). Surfacing this at spawn time — before the first build-workflow
* tool result arrives — lets the artifacts panel show the workflow as soon as
* the sub-agent starts, instead of waiting for the first edit.
*/
function extractFromTargetResource(node, col) {
	const target = node.targetResource;
	if (!target?.id) return;
	if (target.type !== "workflow" && target.type !== "data-table") return;
	const existing = col.produced.get(target.id);
	const name = optionalString(target.name) ?? existing?.name ?? "Untitled";
	recordProduced(col, {
		type: target.type,
		id: target.id,
		name
	});
}
function collectFromAgentNode(node, col) {
	extractFromTargetResource(node, col);
	for (const tc of node.toolCalls) extractFromToolCall(tc, col);
	for (const child of node.children) collectFromAgentNode(child, col);
}
/**
* Register workflow attachments on a (user) message as produced artifacts —
* e.g. the editor hand-off attaches the current workflow, which then shows as
* an artifact tab even before the agent acts on it.
*/
function collectFromMessageAttachments(message, col) {
	for (const attachment of message.attachments ?? []) {
		if (attachment.type !== "workflow") continue;
		recordProduced(col, {
			type: "workflow",
			id: attachment.id,
			name: attachment.name ?? "Untitled"
		});
	}
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
	const producedArtifacts = reactive(/* @__PURE__ */ new Map());
	const resourceNameIndex = reactive(/* @__PURE__ */ new Map());
	watch(() => {
		const col = {
			produced: /* @__PURE__ */ new Map(),
			byName: /* @__PURE__ */ new Map()
		};
		for (const msg of messages()) {
			collectFromMessageAttachments(msg, col);
			if (msg.agentTree) collectFromAgentNode(msg.agentTree, col);
		}
		if (workflowNameLookup) enrichWorkflowNames(col, workflowNameLookup);
		const archived = archivedWorkflowIds?.();
		if (archived && archived.size > 0) {
			for (const entry of col.produced.values()) if (entry.type === "workflow" && archived.has(entry.id)) entry.archived = true;
		}
		return col;
	}, (col) => {
		reconcileMap(producedArtifacts, col.produced);
		reconcileMap(resourceNameIndex, col.byName);
	}, { immediate: true });
	return {
		producedArtifacts,
		resourceNameIndex
	};
}
/** Sync `target` to `next` with minimal writes — unchanged entries trigger no subscribers. */
function reconcileMap(target, next) {
	for (const key of [...target.keys()]) if (!next.has(key)) target.delete(key);
	for (const [key, entry] of next) {
		const existing = target.get(key);
		if (existing) reconcileEntryFields(existing, entry);
		else target.set(key, entry);
	}
}
/**
* Per-field sync: `Object.assign` writes through the proxy (equal values
* trigger nothing), the sweep deletes fields the new entry no longer carries.
*/
function reconcileEntryFields(existing, next) {
	for (const key of Object.keys(existing)) if (!(key in next)) Reflect.deleteProperty(existing, key);
	Object.assign(existing, next);
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
function useResponseFeedback({ messages, threadId, telemetry, postFeedback }) {
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
				thread_id: threadId,
				response_id: responseId,
				helpful: payload.rating === "up"
			});
			if (payload.rating === "up") feedbackByResponseId.value[responseId] = payload;
		}
		if (payload.feedback !== void 0) {
			telemetry.track("User submitted workflow generation feedback", {
				thread_id: threadId,
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
			if (rating) postFeedback(threadId, responseId, {
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
//#region src/features/ai/instanceAi/instanceAi.threadRuntime.ts
var MAX_DEBUG_EVENTS = 1e3;
/** Walk an agent tree, collecting tool calls that have an active (pending) confirmation. */
function collectPendingConfirmations(node, messageId, resolved, out) {
	for (const tc of node.toolCalls) if (tc.confirmation && tc.isLoading && tc.confirmationStatus !== "approved" && tc.confirmationStatus !== "denied" && !resolved.has(tc.confirmation.requestId) && !tc.confirmation.expired && tc.confirmation.inputType !== "plan-review") out.push({
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
/**
* Collapse runs of consecutive `text-delta` / `reasoning-delta` events from the
* same agent into a single entry per run. Other events pass through unchanged.
* Pure: same input array → same output array, no shared state.
*/
function collapseDeltaEvents(events) {
	const collapsed = [];
	let pendingText = null;
	let pendingReasoning = null;
	const flushText = () => {
		if (!pendingText) return;
		pendingText.event.payload.text = pendingText.buffer;
		collapsed.push({
			timestamp: pendingText.timestamp,
			event: pendingText.event
		});
		pendingText = null;
	};
	const flushReasoning = () => {
		if (!pendingReasoning) return;
		pendingReasoning.event.payload.text = pendingReasoning.buffer;
		collapsed.push({
			timestamp: pendingReasoning.timestamp,
			event: pendingReasoning.event
		});
		pendingReasoning = null;
	};
	for (const entry of events) {
		const { event } = entry;
		if (event.type === "text-delta") {
			if (pendingText && pendingText.event.agentId === event.agentId) pendingText.buffer += event.payload.text;
			else {
				flushText();
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
				flushReasoning();
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
		flushText();
		flushReasoning();
		collapsed.push(entry);
	}
	flushText();
	flushReasoning();
	return collapsed;
}
/**
* Walk historical messages and build the reducer routing maps that SSE replay
* events need to reduce into existing run state. Each message's agent tree is
* adopted (not copied) into its run state, so replayed/live events mutate the
* exact nodes the message renders.
*
* - `runStateByGroupId`: run state per message group id, adopting `msg.agentTree`
* - `groupIdByRunId`: every runId in the group → its group id, so late events
*   from older runs in a merged A→B→C chain still route to the right message
*/
function buildRoutingFromMessages(messages) {
	const runStateByGroupId = /* @__PURE__ */ new Map();
	const groupIdByRunId = /* @__PURE__ */ new Map();
	for (const msg of messages) {
		if (msg.role !== "assistant" || !msg.agentTree) continue;
		const groupId = msg.messageGroupId ?? msg.runId;
		if (!groupId || !isSafeObjectKey(groupId)) continue;
		const rebuiltRunState = createRunStateFromTree(msg.agentTree);
		if (!rebuiltRunState) continue;
		runStateByGroupId.set(groupId, rebuiltRunState);
		if (msg.runIds) for (const rid of msg.runIds) {
			if (!isSafeObjectKey(rid)) continue;
			groupIdByRunId.set(rid, groupId);
		}
		if (msg.runId && isSafeObjectKey(msg.runId)) groupIdByRunId.set(msg.runId, groupId);
	}
	return {
		runStateByGroupId,
		groupIdByRunId
	};
}
/**
* Owns state for exactly one thread: messages, SSE, reducer state, hydration,
* feedback and resource registries.
*/
function createThreadRuntime(threadId, hooks, initialProjectId) {
	const rootStore = useRootStore();
	const workflowsListStore = useWorkflowsListStore();
	const toast = useToast();
	const telemetry = useTelemetry();
	const messages = ref([]);
	const projectId = ref(initialProjectId);
	const activeRunId = ref(null);
	const archivedWorkflowIds = ref(/* @__PURE__ */ new Set());
	const latestTasks = ref(null);
	const debugEvents = ref([]);
	const resolvedConfirmationIds = reactive(/* @__PURE__ */ new Map());
	const pendingMessageCount = ref(0);
	const hydrationStatus = ref("idle");
	const sseState = ref("disconnected");
	const lastEventId = ref(void 0);
	const amendContext = ref(null);
	const activePlanEdit = ref(null);
	const updatingPlanRequestIds = reactive(/* @__PURE__ */ new Set());
	const pendingHandoff = ref(null);
	function setPendingHandoff(value) {
		pendingHandoff.value = value;
	}
	function consumePendingHandoff(workflowId) {
		const pending = pendingHandoff.value;
		if (pending?.workflowId !== workflowId) return void 0;
		pendingHandoff.value = null;
		return {
			workflow: pending.workflow,
			execution: pending.execution
		};
	}
	const runStateByGroupId = /* @__PURE__ */ new Map();
	const groupIdByRunId = /* @__PURE__ */ new Map();
	let eventSource = null;
	let sseGeneration = 0;
	let hydrationGeneration = 0;
	let hydrationPromise = null;
	const isStreaming = computed(() => activeRunId.value !== null);
	const isSendingMessage = computed(() => pendingMessageCount.value > 0);
	const hasMessages = computed(() => messages.value.length > 0);
	const isHydratingThread = computed(() => hydrationStatus.value === "hydrating");
	const { producedArtifacts, resourceNameIndex } = useResourceRegistry(() => messages.value, (id) => workflowsListStore.getWorkflowById(id)?.name, () => archivedWorkflowIds.value);
	const { feedbackByResponseId, rateableResponseId, submitFeedback, resetFeedback } = useResponseFeedback({
		messages,
		threadId,
		telemetry,
		postFeedback: async (tid, responseId, payload) => await postFeedback(rootStore.restApiContext, tid, responseId, payload)
	});
	/** The latest task list, preferring explicit tasks-update events over tree snapshots. */
	const currentTasks = computed(() => latestTasks.value ?? findLatestTasksFromMessages(messages.value));
	const latestBuildResult = computed(() => {
		for (let i = messages.value.length - 1; i >= 0; i--) {
			const tree = messages.value[i].agentTree;
			if (tree) {
				const result = getLatestBuildResult(tree);
				if (result) return result;
			}
		}
		return null;
	});
	const reportedBuiltWorkflowIds = /* @__PURE__ */ new Set();
	watch(() => latestBuildResult.value?.toolCallId, (toolCallId) => {
		if (!toolCallId || isHydratingThread.value) return;
		const workflowId = latestBuildResult.value?.workflowId;
		if (!workflowId || reportedBuiltWorkflowIds.has(workflowId)) return;
		reportedBuiltWorkflowIds.add(workflowId);
		telemetry.track("User viewed new builder workflow", {
			thread_id: threadId,
			instance_id: rootStore.instanceId,
			workflow_id: workflowId
		});
	}, { flush: "sync" });
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
		return null;
	});
	/** All pending confirmations across all messages, for the top-level panel. */
	const pendingConfirmations = computed(() => {
		const items = [];
		for (const msg of messages.value) {
			if (msg.role !== "assistant" || !msg.agentTree) continue;
			collectPendingConfirmations(msg.agentTree, msg.id, resolvedConfirmationIds, items);
		}
		return items;
	});
	/** True while the run is paused awaiting the user to resolve a confirmation. */
	const isAwaitingConfirmation = computed(() => pendingConfirmations.value.length > 0);
	function resolveConfirmation(requestId, action) {
		resolvedConfirmationIds.set(requestId, action);
	}
	/** Find a tool call by its confirmation requestId across all messages. */
	function findToolCallByRequestId(requestId) {
		for (const msg of messages.value) {
			if (!msg.agentTree) continue;
			const found = findToolCallInTree(msg.agentTree, requestId);
			if (found) return found;
		}
	}
	const sessionAlwaysAllowKeys = ref(/* @__PURE__ */ new Set());
	function buildAlwaysAllowKey(toolName, args) {
		if (toolName === "submit-workflow") return `submit-workflow:${typeof args.workflowId === "string" && args.workflowId.length > 0 ? "update" : "create"}`;
		const action = typeof args.action === "string" ? args.action : "";
		if (toolName === "executions" && action === "run") return buildRunWorkflowSessionGrantKey(typeof args.workflowId === "string" ? args.workflowId : "");
		return `${toolName}:${action}`;
	}
	function addAlwaysAllowKey(toolName, args) {
		const next = new Set(sessionAlwaysAllowKeys.value);
		next.add(buildAlwaysAllowKey(toolName, args));
		sessionAlwaysAllowKeys.value = next;
	}
	function isGenericApprovalEligible(item) {
		const conf = item.toolCall.confirmation;
		if (conf.severity === "destructive") return false;
		if (conf.domainAccess) return false;
		if (conf.inputType) return false;
		if (conf.setupRequests?.length) return false;
		if (conf.credentialRequests?.length) return false;
		if (conf.questions?.length) return false;
		return true;
	}
	const autoApproveInFlight = /* @__PURE__ */ new Set();
	watch(pendingConfirmations, async (items) => {
		if (sessionAlwaysAllowKeys.value.size === 0) return;
		for (const item of items) {
			const conf = item.toolCall.confirmation;
			if (resolvedConfirmationIds.has(conf.requestId)) continue;
			if (autoApproveInFlight.has(conf.requestId)) continue;
			if (!isGenericApprovalEligible(item)) continue;
			const key = buildAlwaysAllowKey(item.toolCall.toolName, item.toolCall.args ?? {});
			if (!sessionAlwaysAllowKeys.value.has(key)) continue;
			autoApproveInFlight.add(conf.requestId);
			try {
				if (!await confirmAction(conf.requestId, {
					kind: "approval",
					approved: true
				})) continue;
				resolveConfirmation(conf.requestId, "approved");
				telemetry.track("User finished providing input", {
					thread_id: threadId,
					input_thread_id: conf.inputThreadId ?? "",
					instance_id: rootStore.instanceId,
					type: "approval",
					provided_inputs: [{
						label: conf.message,
						options: [
							"approve",
							"deny",
							"approve_always"
						],
						option_chosen: "approve_auto"
					}],
					skipped_inputs: [],
					auto_resolved: true
				});
			} finally {
				autoApproveInFlight.delete(conf.requestId);
			}
		}
	}, { deep: true });
	function onSSEMessage(sseEvent) {
		if (sseEvent.lastEventId) lastEventId.value = Number(sseEvent.lastEventId);
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
			if (parsed.data.type === "thread-title-updated") hooks.onTitleUpdated(threadId, parsed.data.payload.title);
			if (parsed.data.type === "run-finish") {
				const ids = parsed.data.payload.archivedWorkflowIds;
				if (ids && ids.length > 0) {
					const next = new Set(archivedWorkflowIds.value);
					for (const id of ids) next.add(id);
					archivedWorkflowIds.value = next;
				}
			}
			if (parsed.data.type === "run-start" || parsed.data.type === "run-finish") triggerRef(messages);
			if (previousRunId && activeRunId.value === null) hooks.onRunFinish();
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
			const rebuiltRunState = createRunStateFromTree(data.agentTree);
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
			runStateByGroupId.set(groupId, rebuiltRunState);
			if (data.runIds) for (const rid of data.runIds) {
				if (!isSafeObjectKey(rid)) continue;
				groupIdByRunId.set(rid, groupId);
			}
			groupIdByRunId.set(data.runId, groupId);
		} catch {}
	}
	function connectSSE() {
		if (eventSource) closeSSE();
		sseState.value = "connecting";
		const gen = ++sseGeneration;
		const cursor = lastEventId.value;
		const baseUrl = rootStore.restApiContext.baseUrl;
		const url = cursor !== null && cursor !== void 0 ? `${baseUrl}/instance-ai/events/${threadId}?lastEventId=${String(cursor)}` : `${baseUrl}/instance-ai/events/${threadId}`;
		eventSource = new EventSource(url, { withCredentials: true });
		eventSource.onopen = () => {
			if (gen !== sseGeneration) return;
			sseState.value = "connected";
		};
		eventSource.onmessage = (ev) => {
			if (gen !== sseGeneration) return;
			onSSEMessage(ev);
		};
		eventSource.addEventListener("run-sync", (ev) => {
			if (gen !== sseGeneration) return;
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
	/** Reset all state owned by this runtime. */
	function resetState() {
		hydrationGeneration += 1;
		hydrationPromise = null;
		hydrationStatus.value = "idle";
		messages.value = [];
		archivedWorkflowIds.value = /* @__PURE__ */ new Set();
		latestTasks.value = null;
		activeRunId.value = null;
		debugEvents.value = [];
		resetFeedback();
		resolvedConfirmationIds.clear();
		sessionAlwaysAllowKeys.value = /* @__PURE__ */ new Set();
		runStateByGroupId.clear();
		groupIdByRunId.clear();
		lastEventId.value = void 0;
	}
	function dispose() {
		closeSSE();
		resetState();
	}
	async function loadHistoricalMessages() {
		if (hydrationPromise) return await hydrationPromise;
		if (messages.value.length > 0 || hydrationStatus.value === "ready") {
			hydrationStatus.value = "ready";
			return "skipped";
		}
		const capturedHydrationGeneration = ++hydrationGeneration;
		hydrationStatus.value = "hydrating";
		const promise = (async () => {
			try {
				const result = await fetchThreadMessages(rootStore.restApiContext, threadId, 100);
				if (capturedHydrationGeneration !== hydrationGeneration) return "stale";
				if (messages.value.length > 0) return "skipped";
				if (result.messages.length > 0) {
					messages.value = result.messages;
					latestTasks.value = findLatestTasksFromMessages(result.messages);
					const routing = buildRoutingFromMessages(messages.value);
					routing.runStateByGroupId.forEach((value, key) => runStateByGroupId.set(key, value));
					routing.groupIdByRunId.forEach((value, key) => groupIdByRunId.set(key, value));
				}
				if (result.nextEventId !== null && result.nextEventId !== void 0) lastEventId.value = result.nextEventId - 1;
				if (result.projectId) projectId.value = result.projectId;
				return "applied";
			} catch {
				return capturedHydrationGeneration === hydrationGeneration ? "applied" : "stale";
			} finally {
				if (capturedHydrationGeneration === hydrationGeneration) {
					hydrationStatus.value = "ready";
					hydrationPromise = null;
				}
			}
		})();
		hydrationPromise = promise;
		return await promise;
	}
	async function loadThreadStatus() {
		try {
			const status = await fetchThreadStatus(rootStore.restApiContext, threadId);
			if (!(status.hasActiveRun || status.isSuspended || status.backgroundTasks.length > 0)) return;
			const lastAssistant = [...messages.value].reverse().find((m) => m.role === "assistant");
			if (!lastAssistant) return;
			if (status.hasActiveRun || status.isSuspended) {
				activeRunId.value = lastAssistant.runId ?? null;
				lastAssistant.isStreaming = status.hasActiveRun;
			}
		} catch {}
	}
	function ensureSSEConnected() {
		if (sseState.value === "disconnected") connectSSE();
	}
	function pushOptimisticUserMessage(message, attachments) {
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
		return userMessage;
	}
	function removeOptimisticMessage(message) {
		const idx = messages.value.indexOf(message);
		if (idx !== -1) messages.value.splice(idx, 1);
	}
	function trackUserMessageSent(isFirstMessage) {
		telemetry.track("User sent builder message", {
			thread_id: threadId,
			instance_id: rootStore.instanceId,
			is_first_message: isFirstMessage
		});
	}
	async function dispatchUserMessage(message, attachments, handoffContext, pushRef) {
		try {
			const { runId } = await postMessage(rootStore.restApiContext, threadId, message, attachments, handoffContext, Intl.DateTimeFormat().resolvedOptions().timeZone, pushRef);
			if (runId) activeRunId.value = runId;
			return true;
		} catch (error) {
			const status = error instanceof ResponseError ? error.httpStatusCode : void 0;
			if (status === 409) toast.showError(/* @__PURE__ */ new Error("Agent is still working on your previous message"), "Cannot send message");
			else if (status === 400) {
				const serverMessage = error instanceof ResponseError && error.message ? error.message : "";
				toast.showError(new Error(serverMessage || "The request was rejected. Please try again."), "Could not send message");
			} else toast.showError(/* @__PURE__ */ new Error("Failed to send message. Try again."), "Send failed");
			return false;
		}
	}
	async function sendMessage(message, attachments, pushRef, handoffContext) {
		amendContext.value = null;
		pendingMessageCount.value += 1;
		try {
			ensureSSEConnected();
			const isFirstMessage = !messages.value.some((m) => m.role === "user");
			const optimistic = pushOptimisticUserMessage(message, attachments);
			trackUserMessageSent(isFirstMessage);
			if (!await dispatchUserMessage(message, attachments, handoffContext, pushRef)) removeOptimisticMessage(optimistic);
		} finally {
			pendingMessageCount.value = Math.max(0, pendingMessageCount.value - 1);
		}
	}
	async function cancelRun() {
		if (!activeRunId.value) return;
		try {
			await postCancel(rootStore.restApiContext, threadId);
		} catch {
			toast.showError(/* @__PURE__ */ new Error("Failed to cancel. Try again."), "Cancel failed");
		}
	}
	/** Cancel a specific background task. */
	async function cancelBackgroundTask(taskId) {
		try {
			await postCancelTask(rootStore.restApiContext, threadId, taskId);
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
	function startPlanEdit(context) {
		activePlanEdit.value = context;
	}
	function cancelPlanEdit() {
		activePlanEdit.value = null;
	}
	function markPlanUpdatePending(requestId) {
		updatingPlanRequestIds.add(requestId);
	}
	function clearPlanUpdatePending(requestId) {
		updatingPlanRequestIds.delete(requestId);
	}
	watch(isStreaming, (streaming) => {
		if (!streaming && updatingPlanRequestIds.size > 0) updatingPlanRequestIds.clear();
	});
	async function confirmAction(requestId, payload) {
		try {
			await postConfirmation(rootStore.restApiContext, requestId, payload);
			return true;
		} catch (error) {
			if ((error instanceof ResponseError ? error.httpStatusCode : void 0) === 400) {
				const serverMessage = error instanceof ResponseError && error.message ? error.message : "";
				toast.showError(new Error(serverMessage || "The confirmation could not be processed."), "Confirmation failed");
			} else toast.showError(/* @__PURE__ */ new Error("Failed to send confirmation. Try again."), "Confirmation failed");
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
	function copyFullTrace() {
		return JSON.stringify({
			threadId,
			exportedAt: (/* @__PURE__ */ new Date()).toISOString(),
			messages: messages.value,
			events: collapseDeltaEvents(debugEvents.value)
		}, null, 2);
	}
	return reactive({
		id: threadId,
		messages,
		projectId,
		activeRunId,
		archivedWorkflowIds,
		latestTasks,
		debugEvents,
		resolvedConfirmationIds,
		sessionAlwaysAllowKeys,
		pendingMessageCount,
		hydrationStatus,
		sseState,
		lastEventId,
		amendContext,
		activePlanEdit,
		updatingPlanRequestIds,
		isStreaming,
		isSendingMessage,
		hasMessages,
		isHydratingThread,
		producedArtifacts,
		resourceNameIndex,
		feedbackByResponseId,
		rateableResponseId,
		currentTasks,
		contextualSuggestion,
		pendingConfirmations,
		isAwaitingConfirmation,
		setPendingHandoff,
		consumePendingHandoff,
		resetState,
		dispose,
		connectSSE,
		closeSSE,
		loadHistoricalMessages,
		loadThreadStatus,
		sendMessage,
		cancelRun,
		cancelBackgroundTask,
		amendAgent,
		startPlanEdit,
		cancelPlanEdit,
		markPlanUpdatePending,
		clearPlanUpdatePending,
		confirmAction,
		confirmResourceDecision,
		resolveConfirmation,
		addAlwaysAllowKey,
		findToolCallByRequestId,
		copyFullTrace,
		submitFeedback
	});
}
//#endregion
//#region src/features/ai/instanceAi/instanceAi.store.ts
var useInstanceAiStore = defineStore("instanceAi", () => {
	const rootStore = useRootStore();
	const instanceAiSettingsStore = useInstanceAiSettingsStore();
	const toast = useToast();
	const persistedThreadIds = /* @__PURE__ */ new Set();
	const threads = ref([]);
	const debugMode = ref(false);
	const creditsQuota = ref(void 0);
	const creditsClaimed = ref(void 0);
	const runtimes = shallowReactive(/* @__PURE__ */ new Map());
	const runtimeHooks = {
		onTitleUpdated: (threadId, title) => {
			const thread = threads.value.find((t) => t.id === threadId);
			if (thread) thread.title = title;
		},
		onRunFinish: () => {
			loadThreads();
		}
	};
	function getOrCreateRuntime(threadId, projectId) {
		const existingRuntime = runtimes.get(threadId);
		if (existingRuntime) return existingRuntime;
		const runtime = createThreadRuntime(threadId, runtimeHooks, projectId);
		runtimes.set(threadId, runtime);
		return runtime;
	}
	function getRuntime(threadId) {
		return runtimes.get(threadId);
	}
	function disposeRuntime(threadId) {
		const runtime = runtimes.get(threadId);
		if (!runtime) return;
		runtime.dispose();
		runtimes.delete(threadId);
	}
	const isGatewayConnected = computed(() => instanceAiSettingsStore.isGatewayConnected);
	const gatewayDirectory = computed(() => instanceAiSettingsStore.gatewayDirectory);
	const activeDirectory = computed(() => gatewayDirectory.value);
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
			const { creditsPerThread } = message.data;
			if (creditsPerThread !== void 0) {
				const thread = threads.value.find((t) => t.id === creditsPerThread.threadId);
				if (thread) thread.metadata = {
					...thread.metadata,
					creditsUsed: creditsPerThread.totalCreditsUsed
				};
			}
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
	async function syncThread(threadId, projectId) {
		if (persistedThreadIds.has(threadId)) return;
		const result = await ensureThread(rootStore.restApiContext, threadId, projectId);
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
	async function deleteThread$1(threadId) {
		if (persistedThreadIds.has(threadId)) try {
			await deleteThread(rootStore.restApiContext, threadId);
			persistedThreadIds.delete(threadId);
		} catch {
			toast.showError(/* @__PURE__ */ new Error("Failed to delete thread. Try again."), "Delete failed");
			return false;
		}
		threads.value = threads.value.filter((t) => t.id !== threadId);
		disposeRuntime(threadId);
		return true;
	}
	async function renameThread$1(threadId, title) {
		const thread = threads.value.find((t) => t.id === threadId);
		if (thread) thread.title = title;
		if (persistedThreadIds.has(threadId)) await renameThread(rootStore.restApiContext, threadId, title);
	}
	function getThreadMetadata(threadId) {
		return threads.value.find((t) => t.id === threadId)?.metadata;
	}
	/** Reactive per-thread credit total (decimal), or undefined if none recorded yet. */
	function threadCreditsUsed(threadId) {
		const used = threads.value.find((t) => t.id === threadId)?.metadata?.creditsUsed;
		return typeof used === "number" ? used : void 0;
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
		threads,
		debugMode,
		creditsQuota,
		creditsClaimed,
		isGatewayConnected,
		gatewayDirectory,
		activeDirectory,
		creditsRemaining,
		creditsPercentageRemaining,
		isLowCredits,
		deleteThread: deleteThread$1,
		renameThread: renameThread$1,
		getThreadMetadata,
		threadCreditsUsed,
		updateThreadMetadata: updateThreadMetadata$1,
		loadThreads,
		fetchCredits,
		startCreditsPushListener,
		stopCreditsPushListener,
		getOrCreateRuntime,
		getRuntime,
		disposeRuntime,
		syncThread
	};
});
var ThreadKey = Symbol("instanceAiThread");
function provideThread(thread) {
	if (typeof thread === "string") {
		const runtime = useInstanceAiStore().getOrCreateRuntime(thread);
		provide(ThreadKey, runtime);
		return runtime;
	}
	provide(ThreadKey, thread);
	return thread;
}
function useThread(threadId) {
	if (threadId) return useInstanceAiStore().getOrCreateRuntime(threadId);
	const thread = inject(ThreadKey, null);
	if (!thread) throw new Error("useThread() requires a provideThread() ancestor.");
	return thread;
}
//#endregion
export { getLatestBuildResult as a, getLatestDeletedDataTableId as c, isAgentEditingWorkflow as d, fetchRunDebug as f, fetchThreads as h, getExecutionResultsByWorkflow as i, getLatestWorkflowSetupResult as l, fetchThreadMessages as m, useInstanceAiStore as n, getLatestBuilderTarget as o, fetchThreadDebugRuns as p, useThread as r, getLatestDataTableResult as s, provideThread as t, getLatestWorkflowUpdateResult as u };
