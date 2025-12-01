;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy--Sn1h8On.js", "./useTelemetry-legacy-z15msZ3G.js", "./_baseOrderBy-legacy-DT_yzgQM.js"], function (_export, _context) {
    "use strict";

    var computed, ref, getApiKeyScopes, createApiKey, updateApiKey, getApiKeys, STORES, deleteApiKey, defineStore, useRootStore, useApiKeysStore;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
      }, function (_useTelemetryLegacy00HJs) {
        getApiKeyScopes = _useTelemetryLegacy00HJs.Js;
        createApiKey = _useTelemetryLegacy00HJs.Ks;
        updateApiKey = _useTelemetryLegacy00HJs.Xs;
        getApiKeys = _useTelemetryLegacy00HJs.Ys;
        STORES = _useTelemetryLegacy00HJs.ic;
        deleteApiKey = _useTelemetryLegacy00HJs.qs;
      }, function (_baseOrderByLegacy00XJs) {
        defineStore = _baseOrderByLegacy00XJs.k;
        useRootStore = _baseOrderByLegacy00XJs.r;
      }],
      execute: function () {
        //#region src/features/settings/apiKeys/apiKeys.store.ts
        _export("t", useApiKeysStore = defineStore(STORES.API_KEYS, () => {
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
          const createApiKey$1 = async payload => {
            const newApiKey = await createApiKey(rootStore.restApiContext, payload);
            const {
              rawApiKey,
              ...rest
            } = newApiKey;
            apiKeys.value.push(rest);
            return newApiKey;
          };
          const deleteApiKey$1 = async id => {
            await deleteApiKey(rootStore.restApiContext, id);
            apiKeys.value = apiKeys.value.filter(apiKey => apiKey.id !== id);
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
        })); //#endregion
      }
    };
  });
})();