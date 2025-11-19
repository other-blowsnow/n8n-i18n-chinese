;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./useChatHubSidebarState-legacy-DoVQwr5b.js"], function (_export, _context) {
    "use strict";

    var computed, toValue, useChatStore;
    //#region src/features/ai/chatHub/composables/useAgent.ts
    function useAgent(model) {
      const chatStore = useChatStore();
      return computed(() => {
        const modelValue = toValue(model);
        return modelValue ? chatStore.getAgent(modelValue) : void 0;
      });
    }

    //#endregion
    _export("t", useAgent);
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        toValue = _vueRuntimeEsmBundlerLegacy003Js.Ut;
      }, function (_useChatHubSidebarStateLegacy04FJs) {
        useChatStore = _useChatHubSidebarStateLegacy04FJs.r;
      }],
      execute: function () {}
    };
  });
})();