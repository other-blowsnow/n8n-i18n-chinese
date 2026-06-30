import { n as hasPermission } from "./users.store-CUxYM5yQ.js";
//#region src/features/ai/instanceAi/instanceAiPermissions.ts
/** Sending messages to Instance AI (and reaching the chat view) requires this scope. */
function canMessageInstanceAi() {
	return hasPermission(["rbac"], { rbac: { scope: "instanceAi:message" } });
}
//#endregion
export { canMessageInstanceAi as t };
