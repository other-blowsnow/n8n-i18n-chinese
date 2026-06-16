import { s as useI18n } from "./src-DPpikaZ_.js";
//#region src/features/agents/utils/thread-title.ts
/** Cap the inline preview so a paragraph-long first message doesn't blow up dropdown rows. */
var PREVIEW_MAX_CHARS = 60;
function previewFromFirstMessage(text) {
	const trimmed = text.replace(/\s+/g, " ").trim();
	if (!trimmed) return "";
	if (trimmed.length <= PREVIEW_MAX_CHARS) return trimmed;
	return `${trimmed.slice(0, PREVIEW_MAX_CHARS - 1).trimEnd()}…`;
}
/**
* Display title for a chat thread, in fallback order:
*
* 1. `title` — LLM-generated summary, set after the first turn completes.
* 2. `firstMessage` preview — what the user actually typed, available as soon
*    as the thread is persisted. Distinguishes untitled sessions in lists.
* 3. `fallbackLabel` — the i18n "New chat" string for empty / brand-new sessions.
*/
function formatThreadTitle(thread, fallbackLabel) {
	if (thread.title) return thread.title;
	if (thread.firstMessage) {
		const preview = previewFromFirstMessage(thread.firstMessage);
		if (preview) return preview;
	}
	return fallbackLabel;
}
function useThreadTitle() {
	const i18n = useI18n();
	return (thread) => formatThreadTitle(thread, i18n.baseText("agents.builder.chat.newChat.label"));
}
//#endregion
export { useThreadTitle as t };
