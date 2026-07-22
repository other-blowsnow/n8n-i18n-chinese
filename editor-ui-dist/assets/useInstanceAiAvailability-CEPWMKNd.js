import { S as computed } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { t as useSettingsStore } from "./settings.store-C5bX9q6f.js";
import { n as hasPermission } from "./users.store-C2APvywU.js";
//#region src/features/ai/instanceAi/instanceAiPermissions.ts
/** Sending messages to Instance AI (and reaching the chat view) requires this scope. */
function canMessageInstanceAi() {
	return hasPermission(["rbac"], { rbac: { scope: "instanceAi:message" } });
}
//#endregion
//#region src/features/ai/instanceAi/composables/useInstanceAiAvailability.ts
/**
* Whether Instance AI can be used right now: the module is active, an admin
* hasn't disabled it, and the current user has permission to message it. This
* is the canonical gate for Instance AI entry points (nav item, command bar,
* editor/credential hand-offs) — use it instead of re-deriving the three checks.
*/
function useInstanceAiAvailable() {
	const settingsStore = useSettingsStore();
	return computed(() => settingsStore.isModuleActive("instance-ai") && settingsStore.moduleSettings["instance-ai"]?.enabled !== false && canMessageInstanceAi());
}
//#endregion
export { canMessageInstanceAi as n, useInstanceAiAvailable as t };
