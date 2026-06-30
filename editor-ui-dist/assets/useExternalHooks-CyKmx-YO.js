import { S as computed } from "./vue.runtime.esm-bundler-CDDUUZhE.js";
import { Ut as useNDVStore, r as createWorkflowDocumentId, s as useWorkflowDocumentStore, sn as useWorkflowsStore } from "./workflowDocument.store-DjpEjMiV.js";
import { T as defineStore, t as useRootStore } from "./useRootStore-C7jLo3fI.js";
import { t as useSettingsStore, zn as STORES } from "./settings.store-DmallR-B.js";
import { f as useUIStore, t as useUsersStore } from "./users.store-CUxYM5yQ.js";
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
