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
export { getToolNameTranslationKey as n, formatToolNameForDisplay as t };
