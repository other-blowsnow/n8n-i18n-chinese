import { Ft as ref, S as computed } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { T as defineStore, t as useRootStore } from "./useRootStore-D8wbz-kO.js";
import { Dn as getApiKeys, En as getApiKeyScopes, In as STORES, On as updateApiKey, Tn as deleteApiKey, wn as createApiKey } from "./settings.store-BOIB94F8.js";
//#region src/features/settings/apiKeys/apiKeys.store.ts
var useApiKeysStore = defineStore(STORES.API_KEYS, () => {
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
//#endregion
export { useApiKeysStore as t };
