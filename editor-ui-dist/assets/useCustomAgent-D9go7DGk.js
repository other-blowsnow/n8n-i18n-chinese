import { Ft as ref, Ht as toValue, S as computed, gt as watch } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { t as useChatStore } from "./chat.store-EJDzEzZE.js";
//#region src/features/ai/chatHub/composables/useCustomAgent.ts
function useCustomAgent(agentId) {
	const store = useChatStore();
	const isLoading = ref(false);
	const id = computed(() => toValue(agentId));
	const customAgent = computed(() => {
		if (!id.value) return;
		return store.customAgents[id.value];
	});
	watch(id, async (theId) => {
		if (theId) try {
			isLoading.value = true;
			await store.fetchCustomAgent(theId);
		} finally {
			isLoading.value = false;
		}
	}, { immediate: true });
	return {
		isLoading,
		customAgent
	};
}
//#endregion
export { useCustomAgent as t };
