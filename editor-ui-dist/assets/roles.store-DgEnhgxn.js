import { It as ref, S as computed } from "./vue.runtime.esm-bundler-CDDUUZhE.js";
import { Kl as PROJECT_OWNER_ROLE_SLUG, Wl as GLOBAL_OWNER_ROLE_SLUG } from "./constants-DzzWpyjZ.js";
import { T as defineStore, t as useRootStore } from "./useRootStore-C7jLo3fI.js";
import { G as createRole, J as getRoleBySlug, K as deleteRole, X as getRoles, Y as getRoleProjectMembers, Z as updateRole, q as getRoleAssignments, t as useSettingsStore } from "./settings.store-DmallR-B.js";
//#region src/app/stores/roles.store.ts
function sortByOrderThenName(orderMap) {
	return (a, b) => {
		const orderA = orderMap.get(a.slug);
		const orderB = orderMap.get(b.slug);
		if (orderA !== void 0 || orderB !== void 0) return (orderA ?? Number.MAX_SAFE_INTEGER) - (orderB ?? Number.MAX_SAFE_INTEGER);
		return a.displayName.localeCompare(b.displayName);
	};
}
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
	const globalRoleOrder = ref(["global:admin", "global:member"]);
	const globalRoleOrderMap = computed(() => new Map(globalRoleOrder.value.map((role, idx) => [role, idx])));
	const processedInstanceRoles = computed(() => roles.value.global.filter((role) => role.slug !== GLOBAL_OWNER_ROLE_SLUG).sort(sortByOrderThenName(globalRoleOrderMap.value)));
	const processedProjectRoles = computed(() => roles.value.project.filter((role) => role.slug !== PROJECT_OWNER_ROLE_SLUG).filter((role) => settingsStore.isChatFeatureEnabled || role.slug !== "project:chatUser").sort(sortByOrderThenName(projectRoleOrderMap.value)));
	const processedCredentialRoles = computed(() => roles.value.credential.filter((role) => role.slug !== "credential:owner"));
	const processedWorkflowRoles = computed(() => roles.value.workflow.filter((role) => role.slug !== "workflow:owner"));
	const fetchRoles = async () => {
		roles.value = await getRoles(rootStore.restApiContext);
	};
	const createRole$1 = async (body) => {
		return await createRole(rootStore.restApiContext, body);
	};
	const fetchRoleBySlug = async (payload) => {
		return await getRoleBySlug(rootStore.restApiContext, payload);
	};
	const deleteRole$1 = async (slug) => {
		return await deleteRole(rootStore.restApiContext, slug);
	};
	const updateRole$1 = async (slug, body) => {
		return await updateRole(rootStore.restApiContext, slug, body);
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
		processedInstanceRoles,
		processedCredentialRoles,
		processedWorkflowRoles,
		fetchRoles,
		createRole: createRole$1,
		fetchRoleBySlug,
		updateRole: updateRole$1,
		deleteRole: deleteRole$1,
		fetchRoleAssignments,
		fetchRoleProjectMembers
	};
});
//#endregion
export { useRolesStore as t };
