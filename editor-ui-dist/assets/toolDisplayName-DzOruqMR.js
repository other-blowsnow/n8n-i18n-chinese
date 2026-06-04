//#region src/features/agents/utils/toolDisplayName.ts
function formatToolNameForDisplay(toolName) {
	const normalized = (toolName?.trim())?.replace(/[_-]+/g, " ").replace(/\s+/g, " ");
	if (!normalized) return "";
	const lowerCased = normalized.toLocaleLowerCase();
	return (lowerCased.charAt(0).toLocaleUpperCase() + lowerCased.slice(1)).replace(/\bllm\b/g, "LLM");
}
//#endregion
export { formatToolNameForDisplay as t };
