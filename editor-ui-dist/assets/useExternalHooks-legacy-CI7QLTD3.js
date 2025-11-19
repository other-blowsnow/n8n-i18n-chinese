;
(function () {
  System.register(["./useTelemetry-legacy-BdQlQKwu.js"], function (_export, _context) {
    "use strict";

    var useSettingsStore, STORES, useUIStore, useRootStore, useNDVStore, useUsersStore, useWorkflowsStore, defineStore, useWebhooksStore;
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
      setters: [function (_useTelemetryLegacy00FJs) {
        useSettingsStore = _useTelemetryLegacy00FJs.Bo;
        STORES = _useTelemetryLegacy00FJs.Cc;
        useUIStore = _useTelemetryLegacy00FJs.Ni;
        useRootStore = _useTelemetryLegacy00FJs.Qs;
        useNDVStore = _useTelemetryLegacy00FJs.a;
        useUsersStore = _useTelemetryLegacy00FJs.er;
        useWorkflowsStore = _useTelemetryLegacy00FJs.o;
        defineStore = _useTelemetryLegacy00FJs.xc;
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