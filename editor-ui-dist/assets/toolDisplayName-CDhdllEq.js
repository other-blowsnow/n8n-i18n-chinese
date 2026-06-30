import { S as computed, gt as watch } from "./vue.runtime.esm-bundler-CDDUUZhE.js";
import { Lo as SUB_AGENT_TASK_DIFFICULTIES, Ql as enumType, _o as richMessageSchema, iu as stringType, nu as objectType } from "./constants-DzzWpyjZ.js";
import { r as useProjectAgentsList } from "./useProjectAgentsList-DlQlX_nB.js";
//#region src/features/ai/shared/agentsChat/n8nChatInteraction.ts
/**
* Single-operation integration action tool input — any `<platform>_action`
* tool's `{ action, input: { message: { text?, card? } } }` shape, with the
* message validated against the SAME `richMessageSchema` the backend tool
* boundary uses (`@n8n/api-types/agents/rich-card.schema.ts`). Batch inputs
* (`actions: [...]`) never suspend and don't match this schema; they fall
* back to raw JSON rendering.
*/
var actionToolInputSchema = objectType({
	action: stringType(),
	input: objectType({ message: richMessageSchema }).passthrough()
}).passthrough();
/** Resume payload shape shared with the platform card path (component-mapper / bridge). */
var n8nChatResumeValueSchema = objectType({
	type: enumType(["button", "select"]),
	value: stringType(),
	id: stringType().optional()
}).passthrough();
var INTERACTIVE_COMPONENT_TYPES = new Set([
	"button",
	"select",
	"radio_select"
]);
/**
* Mirrors the backend's shouldAwaitResponse: explicit flag or interactive components.
*
* @see shouldAwaitResponse in packages/cli/src/modules/agents/integrations/integration-tools.ts
*/
function isAwaitingCard(card) {
	if (card.awaitResponse === true) return true;
	return card.components.some((component) => INTERACTIVE_COMPONENT_TYPES.has(component.type) || component.type === "section" && component.button !== void 0);
}
/**
* Parse any integration action tool input (slack_action, chat_action, …)
* into its renderable card, or undefined when it carries none. Used for the
* live n8n chat cards and for session-log card previews of every integration.
*/
function parseIntegrationActionCard(input) {
	const parsed = actionToolInputSchema.safeParse(input);
	if (!parsed.success) return void 0;
	const { message } = parsed.data.input;
	if (!message.card) return void 0;
	return {
		text: message.text,
		card: message.card
	};
}
/** Parse a persisted/live chat_action tool input into a renderable card, or undefined. */
function parseN8nChatActionInput(input) {
	return parseIntegrationActionCard(input);
}
/**
* Human-readable label for a card's resume value: the clicked button's label
* or the chosen option's label, falling back to the raw value. Used for the
* tool-step summary once an answered card clears from the chat.
*/
function cardChoiceLabel(card, resume) {
	if (resume.type === "button") {
		for (const component of card.components) {
			const candidates = component.type === "button" ? [component] : component.type === "section" && component.button ? [component.button] : [];
			for (const button of candidates) if (button.value === resume.value) return button.label ?? button.text ?? resume.value;
		}
		return resume.value;
	}
	for (const component of card.components) {
		if (component.type !== "select" && component.type !== "radio_select") continue;
		if (resume.id !== void 0 && component.id !== void 0 && component.id !== resume.id) continue;
		const option = component.options.find((candidate) => candidate.value === resume.value);
		if (option) return option.label;
	}
	return resume.value;
}
//#endregion
//#region src/features/ai/shared/agentsChat/delegateTool.ts
/**
* Name of the SDK tool a parent agent calls to hand a task to a sub-agent.
* Mirrors `DELEGATE_SUB_AGENT_TOOL_NAME` in `@n8n/agents` (not FE-importable),
* so the chat can special-case the tool call and render it as an expandable
* tool step.
*/
var DELEGATE_SUB_AGENT_TOOL_NAME = "delegate_subagent";
/** Mirrors `DELEGATED_CHILD_SUSPEND_UNSUPPORTED_MESSAGE` in `@n8n/agents`. */
var DELEGATED_CHILD_SUSPEND_UNSUPPORTED_MESSAGE = "agents.chat.delegate.childSuspendUnsupported";
var delegateInputSchema = objectType({
	subAgentId: stringType().min(1),
	taskName: stringType().optional(),
	difficulty: enumType(SUB_AGENT_TASK_DIFFICULTIES).optional()
});
var delegateOutputSchema = objectType({
	status: enumType([
		"completed",
		"failed",
		"suspended"
	]).optional(),
	answer: stringType().optional(),
	error: stringType().optional(),
	model: stringType().optional()
});
var SUB_AGENT_DIFFICULTY_I18N_KEY = {
	low: "agents.chat.difficulty.low",
	medium: "agents.chat.difficulty.medium",
	high: "agents.chat.difficulty.high"
};
function isDelegateSubAgentTool(toolName) {
	return toolName === DELEGATE_SUB_AGENT_TOOL_NAME;
}
/** Parse a delegate tool-call input; returns `undefined` when it isn't an object. */
function parseDelegateInput(input) {
	const result = delegateInputSchema.safeParse(input);
	return result.success ? result.data : void 0;
}
/**
* Parse a delegate tool-call output; returns `undefined` when it isn't an object
* (e.g. a rejected tool call whose output is the raw error string).
*/
function parseDelegateOutput(output) {
	const result = delegateOutputSchema.safeParse(output);
	return result.success ? result.data : void 0;
}
function getDelegateDifficulty(input) {
	return parseDelegateInput(input)?.difficulty;
}
/** One-line localized difficulty label for a delegate tool call. */
function getDelegateDifficultySummary(input, i18n) {
	const difficulty = getDelegateDifficulty(input);
	return difficulty ? i18n.baseText(SUB_AGENT_DIFFICULTY_I18N_KEY[difficulty]) : void 0;
}
/** Localize a delegate tool error when it is a known i18n key. */
function formatDelegateError(error, i18n) {
	if (i18n && error === "agents.chat.delegate.childSuspendUnsupported") return i18n.baseText(DELEGATED_CHILD_SUSPEND_UNSUPPORTED_MESSAGE);
	return error;
}
/**
* True when a `delegate_subagent` call resolved with a failed result. Such a
* call settles successfully at the tool layer, so its step must be flipped to an
* error state explicitly (both live and on reload).
*/
function isFailedDelegateOutput(toolName, output) {
	if (!isDelegateSubAgentTool(toolName)) return false;
	return parseDelegateOutput(output)?.status === "failed";
}
/** Humanize a snake/kebab task name, e.g. `research_api` → `Research api`. */
function humanizeTaskName(taskName) {
	const normalized = taskName?.trim().replace(/[_-]+/g, " ").replace(/\s+/g, " ");
	if (!normalized) return "";
	return normalized.charAt(0).toLocaleUpperCase() + normalized.slice(1);
}
/** Friendly label for a raw sub-agent id (delegate hints, todo delegateHint, etc.). */
function resolveSubAgentIdForDisplay(subAgentId, nameById) {
	if (subAgentId === "inline") return humanizeTaskName("inline");
	const resolved = nameById.get(subAgentId)?.trim();
	if (resolved) return resolved;
	return humanizeTaskName(subAgentId) || subAgentId;
}
function resolveSubAgentName(input, nameById) {
	const parsed = parseDelegateInput(input);
	const resolved = parsed?.subAgentId && parsed.subAgentId !== "inline" ? nameById.get(parsed.subAgentId)?.trim() : void 0;
	if (resolved) return resolved;
	return humanizeTaskName(parsed?.taskName);
}
/**
* Format a delegate label: `Sub-agent · <name>` when a name resolved, otherwise
* the bare `Sub-agent` fallback. Takes the i18n instance (rather than resolving
* keys at the call site) so the chat, timeline row, and detail panel stay in
* sync.
*/
function delegateLabel(i18n, name) {
	return name ? i18n.baseText("agents.chat.delegate.label", { interpolate: { name } }) : i18n.baseText("agents.chat.delegate.labelFallback");
}
//#endregion
//#region src/features/agents/composables/useSubAgentNames.ts
/**
* Resolves sub-agent ids → friendly names for delegate labels. Wraps the
* cached/deduped project agents list and loads it lazily — only once the caller
* signals (via `isNeeded`) that the current content actually contains
* delegations. Shared by the chat tool step and the session timeline.
*/
function useSubAgentNames(projectId, isNeeded) {
	const { list, ensureLoaded } = useProjectAgentsList(projectId);
	const subAgentNameById = computed(() => {
		const map = /* @__PURE__ */ new Map();
		for (const agent of list.value ?? []) map.set(agent.id, agent.name);
		return map;
	});
	watch([isNeeded, projectId], ([needed, id]) => {
		if (needed && id) ensureLoaded().catch(() => {});
	}, { immediate: true });
	return { subAgentNameById };
}
//#endregion
//#region src/features/agents/utils/toolDisplayName.ts
var WEB_SEARCH_TOOL_NAME_KEY = "agents.chat.toolNames.webSearch";
var FIND_FILE_TOOL_NAME_KEY = "agents.chat.toolNames.findFile";
var SEARCH_TEXT_TOOL_NAME_KEY = "agents.chat.toolNames.searchText";
var READ_FILE_TOOL_NAME_KEY = "agents.chat.toolNames.readFile";
var WEB_SEARCH_TOOL_NAME_PATTERN = /^(?:web_search|(?:anthropic|openai)\.web_search(?:_\d{8})?)$/;
var FIND_FILE_TOOL_NAME = "find_file";
var SEARCH_TEXT_TOOL_NAME = "search_text";
var READ_FILE_TOOL_NAME = "read_file";
function getToolNameTranslationKey(toolName) {
	const trimmed = toolName?.trim();
	if (!trimmed) return void 0;
	if (trimmed === FIND_FILE_TOOL_NAME) return FIND_FILE_TOOL_NAME_KEY;
	if (trimmed === SEARCH_TEXT_TOOL_NAME) return SEARCH_TEXT_TOOL_NAME_KEY;
	if (trimmed === READ_FILE_TOOL_NAME) return READ_FILE_TOOL_NAME_KEY;
	return WEB_SEARCH_TOOL_NAME_PATTERN.test(trimmed) ? WEB_SEARCH_TOOL_NAME_KEY : void 0;
}
function formatToolNameForDisplay(toolName) {
	const normalized = (toolName?.trim())?.replace(/[_-]+/g, " ").replace(/\s+/g, " ");
	if (!normalized) return "";
	const lowerCased = normalized.toLocaleLowerCase();
	return (lowerCased.charAt(0).toLocaleUpperCase() + lowerCased.slice(1)).replace(/\bllm\b/g, "LLM");
}
//#endregion
export { parseN8nChatActionInput as _, delegateLabel as a, isDelegateSubAgentTool as c, resolveSubAgentIdForDisplay as d, resolveSubAgentName as f, parseIntegrationActionCard as g, n8nChatResumeValueSchema as h, SUB_AGENT_DIFFICULTY_I18N_KEY as i, isFailedDelegateOutput as l, isAwaitingCard as m, getToolNameTranslationKey as n, formatDelegateError as o, cardChoiceLabel as p, useSubAgentNames as r, getDelegateDifficultySummary as s, formatToolNameForDisplay as t, parseDelegateOutput as u };
