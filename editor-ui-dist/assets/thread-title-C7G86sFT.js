import { It as ref } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { ot as useI18n } from "./core-CPznNyVT.js";
import { T as defineStore, c as makeRestApiRequest, t as useRootStore } from "./useRootStore-hyBq4XlJ.js";
import "./settings.store-C5bX9q6f.js";
//#region src/features/agents/composables/useAgentThreadsApi.ts
var listThreads = async (context, projectId, agentId, limit, cursor) => {
	const params = new URLSearchParams({ limit: String(limit) });
	if (cursor) params.set("cursor", cursor);
	return await makeRestApiRequest(context, "GET", `/projects/${projectId}/agents/v2/${agentId}/threads?${params.toString()}`);
};
var getThreadDetail = async (context, projectId, agentId, threadId) => {
	return await makeRestApiRequest(context, "GET", `/projects/${projectId}/agents/v2/${agentId}/threads/${threadId}`);
};
var deleteThread = async (context, projectId, agentId, threadId) => {
	return await makeRestApiRequest(context, "DELETE", `/projects/${projectId}/agents/v2/${agentId}/threads/${threadId}`);
};
//#endregion
//#region src/features/agents/agentSessions.store.ts
var ITEMS_PER_PAGE = 20;
var AUTO_REFRESH_INTERVAL_MS = 5e3;
var useAgentSessionsStore = defineStore("agentSessions", () => {
	const threads = ref([]);
	const nextCursor = ref(null);
	const loading = ref(false);
	const autoRefresh = ref(true);
	let refreshTimer = null;
	let currentProjectId = null;
	let currentAgentId = null;
	let autoRefreshActive = false;
	function keyFor(projectId, agentId) {
		return `${projectId}:${agentId}`;
	}
	let latestKey = null;
	async function fetchThreads(projectId, agentId) {
		currentProjectId = projectId;
		currentAgentId = agentId;
		const key = keyFor(projectId, agentId);
		latestKey = key;
		loading.value = true;
		try {
			const page = await listThreads(useRootStore().restApiContext, projectId, agentId, ITEMS_PER_PAGE, void 0);
			if (latestKey !== key) return;
			threads.value = page.threads;
			nextCursor.value = page.nextCursor;
		} finally {
			if (latestKey === key) loading.value = false;
		}
	}
	/**
	* Background refresh used by the polling timer and visibility-change
	* handler. Unlike `fetchThreads` it:
	*   - Does not flip `loading` (avoids flashing the "Load more" button's
	*     spinner on every tick).
	*   - Merges the latest first page into the existing list by id rather
	*     than replacing it, so threads loaded via "Load more" are preserved
	*     across ticks.
	*   - Leaves `nextCursor` untouched once the user has paginated — the
	*     existing cursor still points past everything we've loaded, while
	*     the cursor returned by a fresh first-page fetch would rewind us.
	*/
	async function refreshThreads(projectId, agentId) {
		const key = keyFor(projectId, agentId);
		if (latestKey !== null && latestKey !== key) return;
		try {
			const page = await listThreads(useRootStore().restApiContext, projectId, agentId, ITEMS_PER_PAGE, void 0);
			if (latestKey !== key) return;
			const seen = new Set(page.threads.map((t) => t.id));
			const tail = threads.value.filter((t) => !seen.has(t.id));
			threads.value = [...page.threads, ...tail];
			if (tail.length === 0) nextCursor.value = page.nextCursor;
		} catch {}
	}
	async function loadMore(projectId, agentId) {
		if (!nextCursor.value || loading.value) return;
		const key = keyFor(projectId, agentId);
		if (latestKey !== null && latestKey !== key) return;
		loading.value = true;
		try {
			const page = await listThreads(useRootStore().restApiContext, projectId, agentId, ITEMS_PER_PAGE, nextCursor.value);
			if (latestKey !== key) return;
			const seen = new Set(threads.value.map((t) => t.id));
			const fresh = page.threads.filter((t) => !seen.has(t.id));
			threads.value.push(...fresh);
			nextCursor.value = page.nextCursor;
		} finally {
			if (latestKey === key) loading.value = false;
		}
	}
	async function getThreadDetail$1(projectId, agentId, threadId) {
		return await getThreadDetail(useRootStore().restApiContext, projectId, agentId, threadId);
	}
	async function deleteThread$1(projectId, agentId, threadId) {
		await deleteThread(useRootStore().restApiContext, projectId, agentId, threadId);
		threads.value = threads.value.filter((t) => t.id !== threadId);
	}
	function scheduleAutoRefresh() {
		if (!autoRefreshActive || !autoRefresh.value || !currentProjectId || !currentAgentId) return;
		refreshTimer = setTimeout(async () => {
			refreshTimer = null;
			if (currentProjectId && currentAgentId && !document.hidden) await refreshThreads(currentProjectId, currentAgentId);
			if (autoRefreshActive) scheduleAutoRefresh();
		}, AUTO_REFRESH_INTERVAL_MS);
	}
	function startAutoRefresh() {
		stopAutoRefresh();
		if (!autoRefresh.value || !currentProjectId || !currentAgentId) return;
		autoRefreshActive = true;
		scheduleAutoRefresh();
	}
	function stopAutoRefresh() {
		autoRefreshActive = false;
		if (refreshTimer) {
			clearTimeout(refreshTimer);
			refreshTimer = null;
		}
	}
	function reset() {
		stopAutoRefresh();
		threads.value = [];
		nextCursor.value = null;
		loading.value = false;
		currentProjectId = null;
		currentAgentId = null;
		latestKey = null;
	}
	return {
		threads,
		nextCursor,
		loading,
		autoRefresh,
		fetchThreads,
		refreshThreads,
		loadMore,
		getThreadDetail: getThreadDetail$1,
		deleteThread: deleteThread$1,
		startAutoRefresh,
		stopAutoRefresh,
		reset
	};
});
//#endregion
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
export { useAgentSessionsStore as n, useThreadTitle as t };
