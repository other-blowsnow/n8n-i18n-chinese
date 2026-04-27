import { ci as hasPermission } from "./users.store-FKGPJ2KC.js";
//#region src/features/ai/instanceAi/instanceAiPermissions.ts
/** Instance AI settings and opt-in flows require this scope. */
function canManageInstanceAi() {
	return hasPermission(["rbac"], { rbac: { scope: "instanceAi:manage" } });
}
//#endregion
export { canManageInstanceAi as t };
