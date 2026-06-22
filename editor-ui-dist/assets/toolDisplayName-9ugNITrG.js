//#region src/features/agents/utils/toolDisplayName.ts
var WEB_SEARCH_TOOL_NAME_KEY = "agents.chat.toolNames.webSearch";
var SEARCH_KNOWLEDGE_TOOL_NAME_KEY = "agents.chat.toolNames.searchKnowledge";
var WEB_SEARCH_TOOL_NAME_PATTERN = /^(?:web_search|(?:anthropic|openai)\.web_search(?:_\d{8})?)$/;
var SEARCH_KNOWLEDGE_TOOL_NAME = "search_knowledge";
function getToolNameTranslationKey(toolName) {
	const trimmed = toolName?.trim();
	if (!trimmed) return void 0;
	if (trimmed === SEARCH_KNOWLEDGE_TOOL_NAME) return SEARCH_KNOWLEDGE_TOOL_NAME_KEY;
	return WEB_SEARCH_TOOL_NAME_PATTERN.test(trimmed) ? WEB_SEARCH_TOOL_NAME_KEY : void 0;
}
function formatToolNameForDisplay(toolName) {
	const normalized = (toolName?.trim())?.replace(/[_-]+/g, " ").replace(/\s+/g, " ");
	if (!normalized) return "";
	const lowerCased = normalized.toLocaleLowerCase();
	return (lowerCased.charAt(0).toLocaleUpperCase() + lowerCased.slice(1)).replace(/\bllm\b/g, "LLM");
}
//#endregion
export { getToolNameTranslationKey as n, formatToolNameForDisplay as t };
