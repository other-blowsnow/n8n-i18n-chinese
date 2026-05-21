//#region src/features/agents/utils/toolDisplayName.ts
/**
* Tool names that all represent "the agent updated some kind of memory". Add new
* memory variants here as they ship — the chat UI shows a single generic
* "Update memory" label so users don't need to learn each backend mechanism.
*/
var MEMORY_TOOL_NAMES = new Set(["update_working_memory"]);
var MEMORY_DISPLAY_LABEL = "Update memory";
function formatToolNameForDisplay(toolName) {
	const trimmed = toolName?.trim();
	if (trimmed && MEMORY_TOOL_NAMES.has(trimmed)) return MEMORY_DISPLAY_LABEL;
	const normalized = trimmed?.replace(/[_-]+/g, " ").replace(/\s+/g, " ");
	if (!normalized) return "";
	const lowerCased = normalized.toLocaleLowerCase();
	return (lowerCased.charAt(0).toLocaleUpperCase() + lowerCased.slice(1)).replace(/\bllm\b/g, "LLM");
}
//#endregion
export { formatToolNameForDisplay as t };
