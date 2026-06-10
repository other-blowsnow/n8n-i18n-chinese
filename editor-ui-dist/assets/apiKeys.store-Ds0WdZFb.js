import { Ft as ref, S as computed } from "./vue.runtime.esm-bundler-C6vn67cX.js";
import { T as defineStore, t as useRootStore } from "./useRootStore-BOF8LYEF.js";
import { An as updateApiKey, Dn as deleteApiKey, En as createApiKey, On as getApiKeyScopes, Rn as STORES, kn as getApiKeys } from "./settings.store-D_uIyAbF.js";
//#region src/features/settings/apiKeys/apiKeys.store.ts
var DEFAULT_PAGE_SIZE = 10;
var useApiKeysStore = defineStore(STORES.API_KEYS, () => {
	const apiKeys = ref([]);
	/** Total number of API keys on the server across every page, not the size of the current page. */
	const apiKeysCount = ref(0);
	const page = ref(1);
	const pageSize = ref(DEFAULT_PAGE_SIZE);
	const availableScopes = ref([]);
	const rootStore = useRootStore();
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
	const fetchApiKeys = async () => {
		const response = await getApiKeys(rootStore.restApiContext, {
			take: pageSize.value,
			skip: (page.value - 1) * pageSize.value
		});
		apiKeys.value = response.items;
		apiKeysCount.value = response.count;
		return response;
	};
	const setPage = async (newPage) => {
		page.value = newPage;
		await fetchApiKeys();
	};
	const setPageSize = async (newPageSize) => {
		pageSize.value = newPageSize;
		page.value = 1;
		await fetchApiKeys();
	};
	const createApiKey$1 = async (payload) => {
		const newApiKey = await createApiKey(rootStore.restApiContext, payload);
		page.value = 1;
		await fetchApiKeys();
		return newApiKey;
	};
	const deleteApiKey$1 = async (id) => {
		await deleteApiKey(rootStore.restApiContext, id);
		const remaining = apiKeysCount.value - 1;
		const lastPage = Math.max(1, Math.ceil(remaining / pageSize.value));
		if (page.value > lastPage) page.value = lastPage;
		await fetchApiKeys();
	};
	const updateApiKey$1 = async (id, payload) => {
		await updateApiKey(rootStore.restApiContext, id, payload);
		apiKeysById.value[id].label = payload.label;
		apiKeysById.value[id].scopes = payload.scopes;
	};
	return {
		fetchApiKeys,
		setPage,
		setPageSize,
		createApiKey: createApiKey$1,
		deleteApiKey: deleteApiKey$1,
		updateApiKey: updateApiKey$1,
		getApiKeyAvailableScopes,
		apiKeysById,
		apiKeys,
		apiKeysCount,
		page,
		pageSize,
		availableScopes
	};
});
//#endregion
export { useApiKeysStore as t };
