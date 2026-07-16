import { S as computed, Ut as toValue } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { bu as getResourcePermissions } from "./constants-BaNoJas_.js";
import { Sn as useSourceControlStore, xn as useProjectsStore } from "./workflowDocument.store-LDfI_CPs.js";
import { t as useUsersStore } from "./users.store-CHh4wCL_.js";
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
