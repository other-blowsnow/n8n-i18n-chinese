;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./useTelemetry-legacy-BdQlQKwu.js", "./constants-legacy-B0GcWb62.js"], function (_export, _context) {
    "use strict";

    var computed, reactive, useSettingsStore, connectProvider, reloadProvider, getExternalSecretsProviders, testExternalSecretsProviderConnection, useRBACStore, useRootStore, getExternalSecretsProvider, updateProvider, getExternalSecrets, defineStore, EnterpriseEditionFeature, useExternalSecretsStore;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        reactive = _vueRuntimeEsmBundlerLegacy003Js.Pt;
      }, function (_useTelemetryLegacy00FJs) {
        useSettingsStore = _useTelemetryLegacy00FJs.Bo;
        connectProvider = _useTelemetryLegacy00FJs.Cs;
        reloadProvider = _useTelemetryLegacy00FJs.Ds;
        getExternalSecretsProviders = _useTelemetryLegacy00FJs.Es;
        testExternalSecretsProviderConnection = _useTelemetryLegacy00FJs.Os;
        useRBACStore = _useTelemetryLegacy00FJs.Qn;
        useRootStore = _useTelemetryLegacy00FJs.Qs;
        getExternalSecretsProvider = _useTelemetryLegacy00FJs.Ts;
        updateProvider = _useTelemetryLegacy00FJs.ks;
        getExternalSecrets = _useTelemetryLegacy00FJs.ws;
        defineStore = _useTelemetryLegacy00FJs.xc;
      }, function (_constantsLegacy00NJs) {
        EnterpriseEditionFeature = _constantsLegacy00NJs.Hs;
      }],
      execute: function () {
        //#region src/features/integrations/externalSecrets.ee/externalSecrets.ee.store.ts
        _export("t", useExternalSecretsStore = defineStore("externalSecrets", () => {
          const rootStore = useRootStore();
          const settingsStore = useSettingsStore();
          const rbacStore = useRBACStore();
          const state = reactive({
            providers: [],
            secrets: {},
            connectionState: {}
          });
          const isEnterpriseExternalSecretsEnabled = computed(() => settingsStore.isEnterpriseFeatureEnabled[EnterpriseEditionFeature.ExternalSecrets]);
          const secrets = computed(() => state.secrets);
          const providers = computed(() => state.providers);
          const connectionState = computed(() => state.connectionState);
          const secretsAsObject = computed(() => {
            return Object.keys(secrets.value).reduce((providerAcc, provider) => {
              providerAcc[provider] = secrets.value[provider]?.reduce((secretAcc, secret) => {
                const splitSecret = secret.split(".");
                if (splitSecret.length === 1) {
                  secretAcc[secret] = "*********";
                  return secretAcc;
                }
                const obj = secretAcc[splitSecret[0]] ?? {};
                let acc = obj;
                for (let i = 1; i < splitSecret.length; i++) {
                  const key = splitSecret[i];
                  if (i === splitSecret.length - 1) {
                    const key$1 = splitSecret[i];
                    acc[key$1] = "*********";
                    continue;
                  }
                  if (Object.keys(acc) && !acc[key]) acc[key] = {};
                  acc = acc[key];
                }
                secretAcc[splitSecret[0]] = obj;
                return secretAcc;
              }, {});
              return providerAcc;
            }, {});
          });
          async function fetchAllSecrets() {
            if (rbacStore.hasScope("externalSecret:list")) try {
              state.secrets = await getExternalSecrets(rootStore.restApiContext);
            } catch (error) {
              state.secrets = {};
            }
          }
          async function reloadProvider$1(id) {
            const {
              updated
            } = await reloadProvider(rootStore.restApiContext, id);
            if (updated) await fetchAllSecrets();
            return updated;
          }
          async function getProviders() {
            state.providers = await getExternalSecretsProviders(rootStore.restApiContext);
          }
          async function testProviderConnection(id, data) {
            return await testExternalSecretsProviderConnection(rootStore.restApiContext, id, data);
          }
          async function getProvider(id) {
            const provider = await getExternalSecretsProvider(rootStore.restApiContext, id);
            const existingProviderIndex = state.providers.findIndex(p => p.name === id);
            if (existingProviderIndex !== -1) state.providers.splice(existingProviderIndex, 1, provider);else state.providers.push(provider);
            return provider;
          }
          function updateStoredProvider(id, data) {
            const providerIndex = state.providers.findIndex(p => p.name === id);
            state.providers = [...state.providers.slice(0, providerIndex), {
              ...state.providers[providerIndex],
              ...data,
              data: {
                ...state.providers[providerIndex].data,
                ...data.data
              }
            }, ...state.providers.slice(providerIndex + 1)];
          }
          async function updateProviderConnected(id, value) {
            await connectProvider(rootStore.restApiContext, id, value);
            await fetchAllSecrets();
            updateStoredProvider(id, {
              connected: value,
              state: value ? "connected" : "initializing"
            });
          }
          async function updateProvider$1(id, {
            data
          }) {
            await updateProvider(rootStore.restApiContext, id, data);
            await fetchAllSecrets();
            updateStoredProvider(id, {
              data
            });
          }
          function setConnectionState(id, connectionState$1) {
            state.connectionState[id] = connectionState$1;
          }
          return {
            state,
            providers,
            secrets,
            connectionState,
            secretsAsObject,
            isEnterpriseExternalSecretsEnabled,
            fetchAllSecrets,
            getProvider,
            getProviders,
            testProviderConnection,
            updateProvider: updateProvider$1,
            updateStoredProvider,
            updateProviderConnected,
            reloadProvider: reloadProvider$1,
            setConnectionState
          };
        })); //#endregion
      }
    };
  });
})();