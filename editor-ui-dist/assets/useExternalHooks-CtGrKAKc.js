import { Bt as useNDVStore, t as useWorkflowsStore } from "./workflows.store-fKRofyHu.js";
import { T as defineStore, t as useRootStore } from "./useRootStore-NTSmdx9S.js";
import { Rn as STORES, t as useSettingsStore } from "./settings.store-CrL-o4BC.js";
import { f as useUIStore, t as useUsersStore } from "./users.store-ByD75lsx.js";
//#region src/app/stores/webhooks.store.ts
var useWebhooksStore = defineStore(STORES.WEBHOOKS, () => {
	return {
		...useRootStore(),
		...useWorkflowsStore(),
		...useUIStore(),
		...useUsersStore(),
		...useNDVStore(),
		...useSettingsStore()
	};
});
//#endregion
//#region src/app/composables/useExternalHooks.ts
async function runExternalHook(eventName, metadata) {
	if (!window.n8nExternalHooks) return;
	const store = useWebhooksStore();
	const [resource, operator] = eventName.split(".");
	const context = window.n8nExternalHooks[resource];
	if (context?.[operator]) {
		const hookMethods = context[operator];
		for (const hookMethod of hookMethods) await hookMethod(store, metadata);
	}
}
function useExternalHooks() {
	return { run: runExternalHook };
}
//#endregion
export { useExternalHooks as t };
