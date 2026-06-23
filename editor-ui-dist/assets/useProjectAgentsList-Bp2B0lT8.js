import { It as ref, S as computed } from "./vue.runtime.esm-bundler-CiTcVoZc.js";
import { t as useRootStore } from "./useRootStore-DbgDMM5M.js";
import { w as listAgents } from "./useAgentApi-Bdg12nCA.js";
//#region src/features/agents/composables/useProjectAgentsList.ts
/**
* Per-project cache of the agents list. Used by the builder header's agent
* switcher. Matches the shape of `useAgentIntegrationsCatalog` — fetched once
* per project, in-flight requests deduped, errors propagated so the next
* `ensureLoaded()` can retry cleanly.
*/
var caches = /* @__PURE__ */ new Map();
function getEntry(projectId) {
	let entry = caches.get(projectId);
	if (!entry) {
		entry = {
			list: ref(null),
			inFlight: null
		};
		caches.set(projectId, entry);
	}
	return entry;
}
function useProjectAgentsList(projectId) {
	const rootStore = useRootStore();
	const list = computed(() => {
		const id = projectId.value;
		return id ? getEntry(id).list.value : null;
	});
	async function ensureLoaded() {
		const id = projectId.value;
		if (!id) return [];
		const entry = getEntry(id);
		if (entry.list.value) return entry.list.value;
		if (!entry.inFlight) entry.inFlight = listAgents(rootStore.restApiContext, id).then((result) => {
			entry.list.value = result;
			entry.inFlight = null;
			return result;
		}).catch((err) => {
			entry.inFlight = null;
			throw err;
		});
		return await entry.inFlight;
	}
	async function refresh() {
		const id = projectId.value;
		if (!id) return [];
		const entry = getEntry(id);
		entry.list.value = null;
		return await ensureLoaded();
	}
	return {
		list,
		ensureLoaded,
		refresh
	};
}
function upsertProjectAgentsListCache(projectId, agent) {
	if (!projectId) return;
	const entry = getEntry(projectId);
	const current = entry.list.value;
	if (!current) return;
	if (current.findIndex((candidate) => candidate.id === agent.id) === -1) {
		entry.list.value = [agent, ...current];
		return;
	}
	entry.list.value = current.map((candidate) => candidate.id === agent.id ? agent : candidate);
}
function removeProjectAgentFromListCache(projectId, agentId) {
	if (!projectId) return;
	const entry = getEntry(projectId);
	const current = entry.list.value;
	if (!current) return;
	entry.list.value = current.filter((agent) => agent.id !== agentId);
}
//#endregion
export { upsertProjectAgentsListCache as n, useProjectAgentsList as r, removeProjectAgentFromListCache as t };
