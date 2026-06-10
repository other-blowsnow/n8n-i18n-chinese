import { Ht as toValue, S as computed } from "./vue.runtime.esm-bundler-C6vn67cX.js";
import { bn as useSourceControlStore, yn as useProjectsStore } from "./workflows.store-DyUv-2Dd.js";
import { cl as getResourcePermissions } from "./constants-BMUE7W6Y.js";
import { t as useUsersStore } from "./users.store-OUM63rct.js";
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
