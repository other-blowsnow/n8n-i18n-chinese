import { S as computed, Ut as toValue } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { dn as useProjectsStore, fn as useSourceControlStore } from "./workflows.store-WmGfSEo0.js";
import { da as getResourcePermissions } from "./src-CYAJL8H-.js";
import { t as useUsersStore } from "./users.store-BqJZ4Qgp.js";
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
