import { Ht as toValue, S as computed } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { fi as useSourceControlStore, sn as useProjectsStore, t as useUsersStore } from "./users.store-g_JotOI6.js";
import { el as getResourcePermissions } from "./constants-D4XflMq_.js";
//#region src/features/agents/composables/useAgentPermissions.ts
function useAgentPermissions(projectId) {
	const projectsStore = useProjectsStore();
	const usersStore = useUsersStore();
	const sourceControlStore = useSourceControlStore();
	const projectScopes = computed(() => getResourcePermissions(projectsStore.myProjects?.find((p) => p.id === toValue(projectId))?.scopes).agent);
	const globalScopes = computed(() => getResourcePermissions(usersStore.currentUser?.globalScopes).agent);
	const isReadOnly = computed(() => sourceControlStore.preferences.branchReadOnly);
	const pick = (key) => computed(() => !isReadOnly.value && Boolean(globalScopes.value[key] ?? projectScopes.value[key]));
	return {
		canCreate: pick("create"),
		canUpdate: pick("update"),
		canDelete: pick("delete"),
		canPublish: pick("publish"),
		canUnpublish: pick("unpublish")
	};
}
//#endregion
export { useAgentPermissions as t };
