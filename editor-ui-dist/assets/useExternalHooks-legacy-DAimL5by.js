;
(function () {
  System.register(["./useTelemetry-legacy-CqPMRSSw.js", "./_baseOrderBy-legacy-BktlFW96.js"], function (_export, _context) {
    "use strict";

    var useUIStore, useSettingsStore, useNDVStore, STORES, useUsersStore, useWorkflowsStore, defineStore, useRootStore, useWebhooksStore;
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
        useSettingsStore = _useTelemetryLegacy00HJs.Wo;
        useNDVStore = _useTelemetryLegacy00HJs.a;
        STORES = _useTelemetryLegacy00HJs.cc;
        useUsersStore = _useTelemetryLegacy00HJs.nr;
        useWorkflowsStore = _useTelemetryLegacy00HJs.o;
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