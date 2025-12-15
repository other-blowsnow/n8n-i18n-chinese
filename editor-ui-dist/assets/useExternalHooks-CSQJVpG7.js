import { Fi as useUIStore, Ho as useSettingsStore, a as useNDVStore, nr as useUsersStore, o as useWorkflowsStore, oc as STORES } from "./useTelemetry-DfTC69TL.js";
import { k as defineStore, r as useRootStore } from "./_baseOrderBy-BFxQ1EZq.js";
const useWebhooksStore = defineStore(STORES.WEBHOOKS, () => {
	return {
		...useRootStore(),
		...useWorkflowsStore(),
		...useUIStore(),
		...useUsersStore(),
		...useNDVStore(),
		...useSettingsStore()
	};
});
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
export { useExternalHooks as t };
