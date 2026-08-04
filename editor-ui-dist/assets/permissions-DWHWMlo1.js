import { It as ref } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { i as defineStore, t as STORES } from "./constants-CdtkjduR.js";
import { b as ROLE, ga as hasScope$1 } from "./src-CYAJL8H-.js";
import { t as useSettingsStore } from "./settings.store-i6-hO8_O.js";
import "./settings.store-BA5qZE9o.js";
import { t as useUsersStore } from "./users.store-BqJZ4Qgp.js";
//#region src/app/utils/rbac/checks/hasRole.ts
var hasRole = (checkRoles) => {
	const currentUser = useUsersStore().currentUser;
	if (currentUser && checkRoles) {
		const userRole = currentUser.isDefaultUser ? ROLE.Default : currentUser.role;
		return checkRoles.includes(userRole);
	}
	return false;
};
//#endregion
//#region ../@n8n/stores/src/rbac.store.ts
var useRBACStore = defineStore(STORES.RBAC, () => {
	const globalRoles = ref([]);
	const rolesByProjectId = ref({});
	const globalScopes = ref([]);
	const scopesByProjectId = ref({});
	const scopesByResourceId = ref({
		agent: {},
		aiAssistant: {},
		workflow: {},
		tag: {},
		annotationTag: {},
		user: {},
		credential: {},
		variable: {},
		projectVariable: {},
		sourceControl: {},
		externalSecretsProvider: {},
		externalSecret: {},
		project: {},
		orchestration: {},
		workersView: {},
		eventBusDestination: {},
		auditLogs: {},
		banner: {},
		community: {},
		communityPackage: {},
		ldap: {},
		license: {},
		logStreaming: {},
		saml: {},
		oidc: {},
		provisioning: {},
		securityAudit: {},
		folder: {},
		insights: {},
		dataTable: {},
		execution: {},
		testRun: {},
		workflowTags: {},
		role: {},
		mcp: {},
		mcpApiKey: {},
		chatHub: {},
		chatHubAgent: {},
		breakingChanges: {},
		apiKey: {},
		encryptionKey: {},
		credentialResolver: {},
		instanceAi: {},
		securitySettings: {},
		roleMappingRule: {},
		otel: {}
	});
	function addGlobalRole(role) {
		if (!globalRoles.value.includes(role)) globalRoles.value.push(role);
	}
	function hasRole(role) {
		return globalRoles.value.includes(role);
	}
	function addGlobalScope(scope) {
		if (!globalScopes.value.includes(scope)) globalScopes.value.push(scope);
	}
	function setGlobalScopes(scopes) {
		globalScopes.value = scopes;
	}
	function addProjectScope(scope, context) {
		if (!scopesByProjectId.value[context.projectId]) scopesByProjectId.value[context.projectId] = [];
		if (!scopesByProjectId.value[context.projectId].includes(scope)) scopesByProjectId.value[context.projectId].push(scope);
	}
	function addResourceScope(scope, context) {
		const scopesByResourceType = scopesByResourceId.value[context.resourceType];
		if (!scopesByResourceType[context.resourceId]) scopesByResourceType[context.resourceId] = [];
		if (!scopesByResourceType[context.resourceId].includes(scope)) scopesByResourceType[context.resourceId].push(scope);
	}
	function hasScope(scope, context, options) {
		return hasScope$1(scope, {
			global: globalScopes.value,
			project: context?.projectId ? scopesByProjectId.value[context.projectId] : [],
			resource: context?.resourceType && context?.resourceId ? scopesByResourceId.value[context.resourceType][context.resourceId] : []
		}, void 0, options);
	}
	return {
		globalRoles,
		rolesByProjectId,
		globalScopes,
		scopesByProjectId,
		scopesByResourceId,
		addGlobalRole,
		hasRole,
		addGlobalScope,
		setGlobalScopes,
		addProjectScope,
		addResourceScope,
		hasScope
	};
});
//#endregion
//#region src/app/utils/rbac/checks/hasScope.ts
var hasScope = (opts) => {
	if (!opts?.scope) return true;
	const { projectId, resourceType, resourceId, scope, options } = opts;
	return useRBACStore().hasScope(scope, {
		projectId,
		resourceType,
		resourceId
	}, options);
};
//#endregion
//#region src/app/utils/rbac/checks/isAuthenticated.ts
var isAuthenticated = (options) => {
	if (options?.bypass?.()) return true;
	return !!useUsersStore().currentUser;
};
var shouldEnableMfa = () => {
	const hasUserEnabledMfa = useUsersStore().currentUser?.mfaAuthenticated ?? false;
	const isMfaEnforced = useSettingsStore().isMFAEnforced;
	return !hasUserEnabledMfa && isMfaEnforced;
};
//#endregion
//#region src/app/utils/rbac/checks/isDefaultUser.ts
var isDefaultUser = () => {
	const currentUser = useUsersStore().currentUser;
	if (currentUser) return currentUser.isDefaultUser;
	return false;
};
//#endregion
//#region src/app/utils/rbac/checks/isInstanceOwner.ts
var isInstanceOwner = () => useUsersStore().isInstanceOwner;
//#endregion
//#region src/app/utils/rbac/checks/isEnterpriseFeatureEnabled.ts
var isEnterpriseFeatureEnabled = (options) => {
	if (!options?.feature) return true;
	const features = Array.isArray(options.feature) ? options.feature : [options.feature];
	const settingsStore = useSettingsStore();
	if ((options.mode ?? "allOf") === "allOf") return features.every((feature) => settingsStore.isEnterpriseFeatureEnabled[feature]);
	else return features.some((feature) => settingsStore.isEnterpriseFeatureEnabled[feature]);
};
//#endregion
//#region src/app/utils/rbac/checks/isGuest.ts
var isGuest = () => {
	return !useUsersStore().currentUser;
};
//#endregion
//#region src/app/utils/rbac/checks/isValid.ts
var isValid = (fn) => {
	return fn ? fn() : false;
};
//#endregion
//#region src/app/utils/rbac/permissions.ts
var permissions = {
	authenticated: isAuthenticated,
	custom: isValid,
	defaultUser: isDefaultUser,
	instanceOwner: isInstanceOwner,
	enterprise: isEnterpriseFeatureEnabled,
	guest: isGuest,
	rbac: hasScope,
	role: hasRole
};
function hasPermission(permissionNames, options) {
	let valid = true;
	for (const permissionName of permissionNames) {
		const permissionOptions = options?.[permissionName] ?? {};
		const permissionFn = permissions[permissionName];
		valid = valid && permissionFn(permissionOptions);
	}
	return valid;
}
//#endregion
export { isAuthenticated as a, useRBACStore as c, isDefaultUser as i, hasRole as l, isGuest as n, shouldEnableMfa as o, isEnterpriseFeatureEnabled as r, hasScope as s, hasPermission as t };
