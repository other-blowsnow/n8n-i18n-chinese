import { Ft as ref, S as computed } from "./vue.runtime.esm-bundler-C6vn67cX.js";
import { dl as PROJECT_OWNER_ROLE_SLUG } from "./constants-DIP3enMx.js";
import { T as defineStore, t as useRootStore } from "./useRootStore-BUCt9XJo.js";
import { G as createProjectRole, J as getRoleBySlug, K as deleteProjectRole, X as getRoles, Y as getRoleProjectMembers, Z as updateProjectRole, q as getRoleAssignments, t as useSettingsStore } from "./settings.store-B-RgkKfn.js";
//#region src/app/stores/roles.store.ts
var useRolesStore = defineStore("roles", () => {
	const rootStore = useRootStore();
	const settingsStore = useSettingsStore();
	const roles = ref({
		global: [],
		project: [],
		credential: [],
		workflow: [],
		secretsProviderConnection: []
	});
	const projectRoleOrder = ref([
		"project:viewer",
		"project:chatUser",
		"project:editor",
		"project:admin"
	]);
	const projectRoleOrderMap = computed(() => new Map(projectRoleOrder.value.map((role, idx) => [role, idx])));
	const processedProjectRoles = computed(() => roles.value.project.filter((role) => role.slug !== PROJECT_OWNER_ROLE_SLUG).filter((role) => settingsStore.isChatFeatureEnabled || role.slug !== "project:chatUser").sort((a, b) => (projectRoleOrderMap.value.get(a.slug) ?? Number.MAX_SAFE_INTEGER) - (projectRoleOrderMap.value.get(b.slug) ?? Number.MAX_SAFE_INTEGER)));
	const processedCredentialRoles = computed(() => roles.value.credential.filter((role) => role.slug !== "credential:owner"));
	const processedWorkflowRoles = computed(() => roles.value.workflow.filter((role) => role.slug !== "workflow:owner"));
	const fetchRoles = async () => {
		roles.value = await getRoles(rootStore.restApiContext);
	};
	const createProjectRole$1 = async (body) => {
		return await createProjectRole(rootStore.restApiContext, body);
	};
	const fetchRoleBySlug = async (payload) => {
		return await getRoleBySlug(rootStore.restApiContext, payload);
	};
	const deleteProjectRole$1 = async (slug) => {
		return await deleteProjectRole(rootStore.restApiContext, slug);
	};
	const updateProjectRole$1 = async (slug, body) => {
		return await updateProjectRole(rootStore.restApiContext, slug, body);
	};
	const fetchRoleAssignments = async (slug) => {
		return await getRoleAssignments(rootStore.restApiContext, slug);
	};
	const fetchRoleProjectMembers = async (slug, projectId) => {
		return await getRoleProjectMembers(rootStore.restApiContext, slug, projectId);
	};
	return {
		roles,
		processedProjectRoles,
		processedCredentialRoles,
		processedWorkflowRoles,
		fetchRoles,
		createProjectRole: createProjectRole$1,
		fetchRoleBySlug,
		updateProjectRole: updateProjectRole$1,
		deleteProjectRole: deleteProjectRole$1,
		fetchRoleAssignments,
		fetchRoleProjectMembers
	};
});
//#endregion
export { useRolesStore as t };
