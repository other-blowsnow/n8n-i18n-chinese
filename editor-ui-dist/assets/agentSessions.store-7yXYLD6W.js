import { It as ref } from "./vue.runtime.esm-bundler-CDDUUZhE.js";
import { T as defineStore, c as makeRestApiRequest, t as useRootStore } from "./useRootStore-C7jLo3fI.js";
import "./settings.store-DmallR-B.js";
//#region src/features/agents/composables/useAgentThreadsApi.ts
var listThreads = async (context, projectId, limit, cursor, agentId) => {
	const params = new URLSearchParams({ limit: String(limit) });
	if (cursor) params.set("cursor", cursor);
	if (agentId) params.set("agentId", agentId);
	return await makeRestApiRequest(context, "GET", `/projects/${projectId}/agents/v2/threads?${params.toString()}`);
};
var getThreadDetail = async (context, projectId, threadId, agentId) => {
	return await makeRestApiRequest(context, "GET", `/projects/${projectId}/agents/v2/threads/${threadId}${agentId ? `?agentId=${agentId}` : ""}`);
};
var deleteThread = async (context, projectId, threadId) => {
	return await makeRestApiRequest(context, "DELETE", `/projects/${projectId}/agents/v2/threads/${threadId}`);
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
		return `${projectId}:${agentId ?? ""}`;
	}
	let latestKey = null;
	async function fetchThreads(projectId, agentId) {
		currentProjectId = projectId;
		currentAgentId = agentId ?? null;
		const key = keyFor(projectId, currentAgentId);
		latestKey = key;
		loading.value = true;
		try {
			const page = await listThreads(useRootStore().restApiContext, projectId, ITEMS_PER_PAGE, void 0, agentId);
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
		const key = keyFor(projectId, agentId ?? null);
		if (latestKey !== null && latestKey !== key) return;
		try {
			const page = await listThreads(useRootStore().restApiContext, projectId, ITEMS_PER_PAGE, void 0, agentId);
			if (latestKey !== key) return;
			const seen = new Set(page.threads.map((t) => t.id));
			const tail = threads.value.filter((t) => !seen.has(t.id));
			threads.value = [...page.threads, ...tail];
			if (tail.length === 0) nextCursor.value = page.nextCursor;
		} catch {}
	}
	async function loadMore(projectId, agentId) {
		if (!nextCursor.value || loading.value) return;
		const key = keyFor(projectId, agentId ?? null);
		if (latestKey !== null && latestKey !== key) return;
		loading.value = true;
		try {
			const page = await listThreads(useRootStore().restApiContext, projectId, ITEMS_PER_PAGE, nextCursor.value, agentId);
			if (latestKey !== key) return;
			const seen = new Set(threads.value.map((t) => t.id));
			const fresh = page.threads.filter((t) => !seen.has(t.id));
			threads.value.push(...fresh);
			nextCursor.value = page.nextCursor;
		} finally {
			if (latestKey === key) loading.value = false;
		}
	}
	async function getThreadDetail$1(projectId, threadId, agentId) {
		return await getThreadDetail(useRootStore().restApiContext, projectId, threadId, agentId);
	}
	async function deleteThread$1(projectId, threadId) {
		await deleteThread(useRootStore().restApiContext, projectId, threadId);
		threads.value = threads.value.filter((t) => t.id !== threadId);
	}
	function scheduleAutoRefresh() {
		if (!autoRefreshActive || !autoRefresh.value || !currentProjectId) return;
		refreshTimer = setTimeout(async () => {
			refreshTimer = null;
			if (currentProjectId && !document.hidden) await refreshThreads(currentProjectId, currentAgentId ?? void 0);
			if (autoRefreshActive) scheduleAutoRefresh();
		}, AUTO_REFRESH_INTERVAL_MS);
	}
	function startAutoRefresh() {
		stopAutoRefresh();
		if (!autoRefresh.value || !currentProjectId) return;
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
export { useAgentSessionsStore as t };
