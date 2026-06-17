import { It as ref, S as computed } from "./vue.runtime.esm-bundler-CiTcVoZc.js";
import { T as defineStore, t as useRootStore } from "./useRootStore-BXKn7r8-.js";
import { An as updateApiKey, Dn as deleteApiKey, En as createApiKey, On as getApiKeyScopes, Rn as STORES, kn as getApiKeys } from "./settings.store-HAN34Lkc.js";
//#region src/features/settings/apiKeys/apiKeys.store.ts
var DEFAULT_PAGE_SIZE = 10;
var initialTableOptions = () => ({
	page: 0,
	itemsPerPage: DEFAULT_PAGE_SIZE,
	sortBy: []
});
var useApiKeysStore = defineStore(STORES.API_KEYS, () => {
	const apiKeys = ref([]);
	const ownership = ref("mine");
	const labelFilter = ref("");
	const mineCount = ref(0);
	const allCount = ref(0);
	const totalMineCount = ref(0);
	const totalAllCount = ref(0);
	const tableOptions = ref(initialTableOptions());
	const availableScopes = ref([]);
	const apiKeysCount = computed(() => ownership.value === "mine" ? mineCount.value : allCount.value);
	const totalCountForOwnership = computed(() => ownership.value === "mine" ? totalMineCount.value : totalAllCount.value);
	const hasAnyKeys = computed(() => totalAllCount.value > 0);
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
		const opts = tableOptions.value;
		const [sort] = opts.sortBy;
		const sortBy = sort ? `${sort.id}:${sort.desc ? "desc" : "asc"}` : void 0;
		const trimmed = labelFilter.value.trim();
		const response = await getApiKeys(rootStore.restApiContext, {
			take: opts.itemsPerPage,
			skip: Math.max(0, opts.page) * opts.itemsPerPage,
			ownership: ownership.value,
			...trimmed ? { label: trimmed } : {},
			...sortBy ? { sortBy } : {}
		});
		apiKeys.value = response.items;
		mineCount.value = response.counts.mine;
		allCount.value = response.counts.all;
		totalMineCount.value = response.totals.mine;
		totalAllCount.value = response.totals.all;
		return response;
	};
	const setOwnership = async (newOwnership) => {
		if (ownership.value === newOwnership) return;
		ownership.value = newOwnership;
		tableOptions.value.page = 0;
		await fetchApiKeys();
	};
	const setLabelFilter = async (newFilter) => {
		if (labelFilter.value === newFilter) return;
		labelFilter.value = newFilter;
		tableOptions.value.page = 0;
		await fetchApiKeys();
	};
	const applyTableOptions = async () => {
		await fetchApiKeys();
	};
	const createApiKey$1 = async (payload) => {
		const newApiKey = await createApiKey(rootStore.restApiContext, payload);
		labelFilter.value = "";
		tableOptions.value.page = 0;
		await fetchApiKeys();
		return newApiKey;
	};
	const deleteApiKey$1 = async (id) => {
		await deleteApiKey(rootStore.restApiContext, id);
		const remaining = apiKeysCount.value - 1;
		const lastPage = Math.max(0, Math.ceil(remaining / tableOptions.value.itemsPerPage) - 1);
		if (tableOptions.value.page > lastPage) tableOptions.value.page = lastPage;
		await fetchApiKeys();
	};
	const updateApiKey$1 = async (id, payload) => {
		await updateApiKey(rootStore.restApiContext, id, payload);
		await fetchApiKeys();
	};
	const $reset = () => {
		apiKeys.value = [];
		ownership.value = "mine";
		labelFilter.value = "";
		mineCount.value = 0;
		allCount.value = 0;
		totalMineCount.value = 0;
		totalAllCount.value = 0;
		tableOptions.value = initialTableOptions();
	};
	return {
		fetchApiKeys,
		setOwnership,
		setLabelFilter,
		applyTableOptions,
		createApiKey: createApiKey$1,
		deleteApiKey: deleteApiKey$1,
		updateApiKey: updateApiKey$1,
		getApiKeyAvailableScopes,
		apiKeysById,
		apiKeys,
		apiKeysCount,
		totalCountForOwnership,
		ownership,
		labelFilter,
		mineCount,
		allCount,
		totalMineCount,
		totalAllCount,
		hasAnyKeys,
		tableOptions,
		availableScopes,
		$reset
	};
});
//#endregion
export { useApiKeysStore as t };
