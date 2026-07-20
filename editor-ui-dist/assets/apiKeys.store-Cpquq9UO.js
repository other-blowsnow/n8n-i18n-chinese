import { $ as openBlock, Gt as unref, It as ref, N as defineComponent, S as computed, w as createBlock } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { s as useI18n } from "./src-B1khmGvj.js";
import { u as AlertDialog_default } from "./src-XWsjz-dU.js";
import { T as defineStore, t as useRootStore } from "./useRootStore-DORNi26-.js";
import { An as getApiKeys, Dn as createApiKey, Mn as updateApiKey, On as deleteApiKey, Vn as STORES, jn as rotateApiKey, kn as getApiKeyScopes } from "./settings.store-BSo6Wkgz.js";
//#endregion
//#region src/features/settings/apiKeys/components/RevokeApiKeyConfirmModal.vue
var RevokeApiKeyConfirmModal_default = /* @__PURE__ */ defineComponent({
	__name: "RevokeApiKeyConfirmModal",
	props: {
		apiKey: {},
		open: { type: Boolean },
		loading: { type: Boolean },
		revokingForOther: { type: Boolean }
	},
	emits: [
		"update:open",
		"confirm",
		"cancel"
	],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const title = computed(() => props.apiKey ? i18n.baseText("settings.api.revoke.title", { interpolate: { label: props.apiKey.label } }) : "");
		const description = computed(() => {
			if (!props.apiKey) return "";
			if (props.revokingForOther) {
				const owner = props.apiKey.owner;
				const ownerName = [owner?.firstName, owner?.lastName].filter(Boolean).join(" ") || owner?.email || "";
				return i18n.baseText("settings.api.revoke.description.other", { interpolate: { ownerName } });
			}
			return i18n.baseText("settings.api.revoke.description.own");
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(AlertDialog_default), {
				open: __props.open,
				title: title.value,
				description: description.value,
				"action-label": unref(i18n).baseText("settings.api.revoke.button"),
				"cancel-label": unref(i18n).baseText("generic.cancel"),
				"action-variant": "destructive",
				loading: __props.loading,
				size: "medium",
				"data-test-id": "api-key-revoke-confirm",
				onAction: _cache[0] || (_cache[0] = ($event) => emit("confirm")),
				onCancel: _cache[1] || (_cache[1] = ($event) => emit("cancel")),
				"onUpdate:open": _cache[2] || (_cache[2] = ($event) => emit("update:open", $event))
			}, null, 8, [
				"open",
				"title",
				"description",
				"action-label",
				"cancel-label",
				"loading"
			]);
		};
	}
});
//#endregion
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
	const ownerIds = ref(null);
	const owners = ref([]);
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
			...ownerIds.value?.length ? { ownerIds: ownerIds.value } : {},
			...sortBy ? { sortBy } : {}
		});
		apiKeys.value = response.items;
		owners.value = response.owners;
		mineCount.value = response.counts.mine;
		allCount.value = response.counts.all;
		totalMineCount.value = response.totals.mine;
		totalAllCount.value = response.totals.all;
		return response;
	};
	const setOwnership = async (newOwnership) => {
		if (ownership.value === newOwnership) return;
		ownership.value = newOwnership;
		ownerIds.value = null;
		tableOptions.value.page = 0;
		await fetchApiKeys();
	};
	const setOwnerFilter = async (selected) => {
		const next = selected.length === owners.value.length ? null : selected;
		const current = ownerIds.value;
		if (current === null && next === null || Array.isArray(current) && Array.isArray(next) && current.length === next.length && next.every((id) => current.includes(id))) return;
		ownerIds.value = next;
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
	const rotateApiKey$1 = async (id) => {
		const rotatedApiKey = await rotateApiKey(rootStore.restApiContext, id);
		await fetchApiKeys();
		return rotatedApiKey;
	};
	const $reset = () => {
		apiKeys.value = [];
		ownership.value = "mine";
		labelFilter.value = "";
		ownerIds.value = null;
		owners.value = [];
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
		setOwnerFilter,
		applyTableOptions,
		createApiKey: createApiKey$1,
		deleteApiKey: deleteApiKey$1,
		updateApiKey: updateApiKey$1,
		rotateApiKey: rotateApiKey$1,
		getApiKeyAvailableScopes,
		apiKeysById,
		apiKeys,
		apiKeysCount,
		totalCountForOwnership,
		ownership,
		labelFilter,
		ownerIds,
		owners,
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
export { RevokeApiKeyConfirmModal_default as n, useApiKeysStore as t };
