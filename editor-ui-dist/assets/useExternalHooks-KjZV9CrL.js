import { S as computed } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { E as useWorkflowDocumentStore, Kt as useRouteWorkflowId, S as createWorkflowDocumentId, rn as useNDVStore, t as useWorkflowsStore } from "./workflows.store-Z3P-CUZH.js";
import { i as defineStore } from "./constants-_KyxTaQQ.js";
import { t as STORES } from "./constants2-D6qsHKVK.js";
import { t as useRootStore } from "./useRootStore-xTXN1Ozx.js";
import { t as useSettingsStore } from "./settings.store-CWNcTN8c.js";
import "./settings.store-Dgx0IX_2.js";
import { t as useUsersStore } from "./users.store-dgzxOXHg.js";
import { o as useUIStore } from "./posthog.store-Dhul6ZJs.js";
import { t as setExternalHooks } from "./useExternalHooks-B4Dw9Thn.js";
//#region src/app/stores/webhooks.store.ts
var useWebhooksStore = defineStore(STORES.WEBHOOKS, () => {
	const routeWorkflowId = useRouteWorkflowId();
	const workflowDocumentStore = computed(() => useWorkflowDocumentStore(createWorkflowDocumentId(routeWorkflowId.value)));
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
/**
* Concrete runner. Loosely typed to match the `@n8n/composables` contract so it
* can be registered for package-side consumers; the exported {@link runExternalHook}
* wrapper below re-adds per-event type-checking for direct call sites.
*/
async function runExternalHookInternal(eventName, metadata) {
	if (!window.n8nExternalHooks) return;
	const store = useWebhooksStore();
	const [resource, operator] = eventName.split(".");
	const context = window.n8nExternalHooks[resource];
	if (context?.[operator]) {
		const hookMethods = context[operator];
		for (const hookMethod of hookMethods) await hookMethod(store, metadata);
	}
}
async function runExternalHook(eventName, metadata) {
	await runExternalHookInternal(eventName, metadata);
}
setExternalHooks({ run: runExternalHookInternal });
function useExternalHooks() {
	return { run: runExternalHook };
}
//#endregion
export { useExternalHooks as t };
