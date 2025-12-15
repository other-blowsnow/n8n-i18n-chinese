;
(function () {
  System.register(["./useTelemetry-legacy-BDcNi2-V.js", "./_baseOrderBy-legacy-B3XavLhF.js"], function (_export, _context) {
    "use strict";

    var useUIStore, useSettingsStore, useNDVStore, useUsersStore, useWorkflowsStore, STORES, defineStore, useRootStore, useWebhooksStore;
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
        useUIStore = _useTelemetryLegacy00HJs.Fi;
        useSettingsStore = _useTelemetryLegacy00HJs.Ho;
        useNDVStore = _useTelemetryLegacy00HJs.a;
        useUsersStore = _useTelemetryLegacy00HJs.nr;
        useWorkflowsStore = _useTelemetryLegacy00HJs.o;
        STORES = _useTelemetryLegacy00HJs.oc;
      }, function (_baseOrderByLegacy00ZJs) {
        defineStore = _baseOrderByLegacy00ZJs.k;
        useRootStore = _baseOrderByLegacy00ZJs.r;
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