import { S as computed } from "./vue.runtime.esm-bundler-C6vn67cX.js";
import { dn as useNDVStore, t as useWorkflowsStore, v as createWorkflowDocumentId, x as useWorkflowDocumentStore } from "./workflows.store-BKfEj1aG.js";
import { T as defineStore, t as useRootStore } from "./useRootStore-BUCt9XJo.js";
import { Rn as STORES, t as useSettingsStore } from "./settings.store-B-RgkKfn.js";
import { f as useUIStore, t as useUsersStore } from "./users.store-0wV1ayWS.js";
//#region src/app/stores/webhooks.store.ts
var useWebhooksStore = defineStore(STORES.WEBHOOKS, () => {
	const workflowsStore = useWorkflowsStore();
	const workflowDocumentStore = computed(() => useWorkflowDocumentStore(createWorkflowDocumentId(workflowsStore.workflowId)));
	const ndvStore = computed(() => useNDVStore(workflowDocumentStore.value.documentId));
	return {
		...useRootStore(),
		...useWorkflowsStore(),
		...useUIStore(),
		...useUsersStore(),
		workflowDocumentStore,
		ndvStore,
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
