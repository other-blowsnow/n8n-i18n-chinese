;
(function () {
  System.register(["./useTelemetry-legacy-z15msZ3G.js", "./_baseOrderBy-legacy-DT_yzgQM.js"], function (_export, _context) {
    "use strict";

    var useSettingsStore, useUIStore, useNDVStore, useUsersStore, STORES, useWorkflowsStore, defineStore, useRootStore, useWebhooksStore;
    //#endregion
    //#region src/app/composables/useExternalHooks.ts
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
      return {
        run: runExternalHook
      };
    }

    //#endregion
    _export("t", useExternalHooks);
    return {
      setters: [function (_useTelemetryLegacy00HJs) {
        useSettingsStore = _useTelemetryLegacy00HJs.Bo;
        useUIStore = _useTelemetryLegacy00HJs.Ni;
        useNDVStore = _useTelemetryLegacy00HJs.a;
        useUsersStore = _useTelemetryLegacy00HJs.er;
        STORES = _useTelemetryLegacy00HJs.ic;
        useWorkflowsStore = _useTelemetryLegacy00HJs.o;
      }, function (_baseOrderByLegacy00XJs) {
        defineStore = _baseOrderByLegacy00XJs.k;
        useRootStore = _baseOrderByLegacy00XJs.r;
      }],
      execute: function () {
        //#region src/app/stores/webhooks.store.ts
        useWebhooksStore = defineStore(STORES.WEBHOOKS, () => {
          return {
            ...useRootStore(),
            ...useWorkflowsStore(),
            ...useUIStore(),
            ...useUsersStore(),
            ...useNDVStore(),
            ...useSettingsStore()
          };
        });
      }
    };
  });
})();