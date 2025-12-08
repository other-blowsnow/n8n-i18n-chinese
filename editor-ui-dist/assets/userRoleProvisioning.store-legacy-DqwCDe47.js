;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy--Sn1h8On.js", "./useTelemetry-legacy-CBjbIfKX.js", "./_baseOrderBy-legacy-CowL7g45.js"], function (_export, _context) {
    "use strict";

    var readonly, ref, saveProvisioningConfig, getProvisioningConfig, defineStore, useRootStore, useUserRoleProvisioningStore;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        readonly = _vueRuntimeEsmBundlerLegacy003Js.Ft;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
      }, function (_useTelemetryLegacy00HJs) {
        saveProvisioningConfig = _useTelemetryLegacy00HJs.gs;
        getProvisioningConfig = _useTelemetryLegacy00HJs.hs;
      }, function (_baseOrderByLegacy00ZJs) {
        defineStore = _baseOrderByLegacy00ZJs.k;
        useRootStore = _baseOrderByLegacy00ZJs.r;
      }],
      execute: function () {
        //#region src/features/settings/sso/provisioning/composables/userRoleProvisioning.store.ts
        /**
        * Composable to load and save provisioning config
        */
        _export("t", useUserRoleProvisioningStore = defineStore("userRoleProvisioning", () => {
          const rootStore = useRootStore();
          const provisioningConfig = ref();
          const getProvisioningConfig$1 = async () => {
            try {
              const config = await getProvisioningConfig(rootStore.restApiContext);
              provisioningConfig.value = config;
              return config;
            } catch (error) {
              console.error("Failed to fetch provisioning config:", error);
              throw error;
            }
          };
          const saveProvisioningConfig$1 = async config => {
            try {
              const updatedConfig = await saveProvisioningConfig(rootStore.restApiContext, config);
              provisioningConfig.value = updatedConfig;
              return updatedConfig;
            } catch (error) {
              console.error("Failed to save provisioning config:", error);
              throw error;
            }
          };
          return {
            provisioningConfig: readonly(provisioningConfig),
            getProvisioningConfig: getProvisioningConfig$1,
            saveProvisioningConfig: saveProvisioningConfig$1
          };
        })); //#endregion
      }
    };
  });
})();