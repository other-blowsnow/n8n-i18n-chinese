import { Ft as ref, S as computed } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import { al as updateApiKey, il as getApiKeys, nl as deleteApiKey, rl as getApiKeyScopes, sl as STORES, tl as createApiKey } from "./users.store-Bj_XyNBb.js";
import { j as defineStore, r as useRootStore } from "./_baseOrderBy-CfcpbHUH.js";
const useApiKeysStore = defineStore(STORES.API_KEYS, () => {
	const apiKeys = ref([]);
	const availableScopes = ref([]);
	const rootStore = useRootStore();
	const apiKeysSortByCreationDate = computed(() => apiKeys.value.sort((a, b) => b.createdAt.localeCompare(a.createdAt)));
	const apiKeysById = computed(() => {
		return apiKeys.value.reduce((acc, apiKey) => {
			acc[apiKey.id] = apiKey;
			return acc;
		}, {});
	});
	const getApiKeyAvailableScopes = async () => {
		availableScopes.value = await getApiKeyScopes(rootStore.restApiContext);
		return availableScopes.value;
	};
	const getAndCacheApiKeys = async () => {
		if (apiKeys.value.length) return apiKeys.value;
		apiKeys.value = await getApiKeys(rootStore.restApiContext);
		return apiKeys.value;
	};
	const createApiKey$1 = async (payload) => {
		const newApiKey = await createApiKey(rootStore.restApiContext, payload);
		const { rawApiKey, ...rest } = newApiKey;
		apiKeys.value.push(rest);
		return newApiKey;
	};
	const deleteApiKey$1 = async (id) => {
		await deleteApiKey(rootStore.restApiContext, id);
		apiKeys.value = apiKeys.value.filter((apiKey) => apiKey.id !== id);
	};
	const updateApiKey$1 = async (id, payload) => {
		await updateApiKey(rootStore.restApiContext, id, payload);
		apiKeysById.value[id].label = payload.label;
		apiKeysById.value[id].scopes = payload.scopes;
	};
	return {
		getAndCacheApiKeys,
		createApiKey: createApiKey$1,
		deleteApiKey: deleteApiKey$1,
		updateApiKey: updateApiKey$1,
		getApiKeyAvailableScopes,
		apiKeysSortByCreationDate,
		apiKeysById,
		apiKeys,
		availableScopes
	};
});
export { useApiKeysStore as t };
