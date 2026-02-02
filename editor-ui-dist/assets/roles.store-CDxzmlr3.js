import { C as computed, It as ref } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { Fs as updateProjectRole, Ms as deleteProjectRole, Ns as getRoleBySlug, Ps as getRoles, fs as useSettingsStore, js as createProjectRole } from "./users.store-qBZsmf9-.js";
import { Ho as PROJECT_CHAT_USER_ROLE_SLUG, Uo as PROJECT_OWNER_ROLE_SLUG } from "./constants-Cyrg9Nbl.js";
import { A as defineStore, r as useRootStore } from "./_baseOrderBy-3Uh8XZv3.js";
const useRolesStore = defineStore("roles", () => {
	const rootStore = useRootStore();
	const settingsStore = useSettingsStore();
	const roles = ref({
		global: [],
		project: [],
		credential: [],
		workflow: []
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
	return {
		roles,
		processedProjectRoles,
		processedCredentialRoles,
		processedWorkflowRoles,
		fetchRoles,
		createProjectRole: createProjectRole$1,
		fetchRoleBySlug,
		updateProjectRole: updateProjectRole$1,
		deleteProjectRole: deleteProjectRole$1
	};
});
export { useRolesStore as t };
