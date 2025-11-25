;
(function () {
  System.register(["./useTelemetry-legacy-Ck7lGOrk.js", "./useRootStore-legacy-D1vvqLPX.js"], function (_export, _context) {
    "use strict";

    var useSettingsStore, useUIStore, useNDVStore, STORES, useUsersStore, useWorkflowsStore, defineStore, useRootStore, useWebhooksStore;
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
        useUIStore = _useTelemetryLegacy00FJs.Ni;
        useNDVStore = _useTelemetryLegacy00FJs.a;
        STORES = _useTelemetryLegacy00FJs.ac;
        useUsersStore = _useTelemetryLegacy00FJs.er;
        useWorkflowsStore = _useTelemetryLegacy00FJs.o;
      }, function (_useRootStoreLegacy00TJs) {
        defineStore = _useRootStoreLegacy00TJs.D;
        useRootStore = _useRootStoreLegacy00TJs.t;
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