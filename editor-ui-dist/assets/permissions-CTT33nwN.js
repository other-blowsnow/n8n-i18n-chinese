import { b as ROLE } from "./src-D4ZcEdLA.js";
import { t as useSettingsStore } from "./settings.store-MdDUJyUn.js";
import "./settings.store-xTAm7xED.js";
import { t as useUsersStore } from "./users.store-BnmshxQB.js";
import { t as useRBACStore } from "./rbac.store-odS8ox2M.js";
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
export { isAuthenticated as a, hasRole as c, isDefaultUser as i, isGuest as n, shouldEnableMfa as o, isEnterpriseFeatureEnabled as r, hasScope as s, hasPermission as t };
