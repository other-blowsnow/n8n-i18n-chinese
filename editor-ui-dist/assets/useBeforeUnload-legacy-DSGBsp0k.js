;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-2Qb71DGn.js", "./useTelemetry-legacy-Ck7lGOrk.js", "./constants-legacy-D0ziSY9e.js"], function (_export, _context) {
    "use strict";

    var computed, ref, useI18n, useUIStore, useCanvasStore, VIEWS;
    //#region src/app/composables/useBeforeUnload.ts
    /**
    * Composable to handle the beforeunload event in canvas views.
    *
    * This hook will prevent closing the tab and prompt the user if the ui state is dirty
    * (workflow has changes) and the user tries to leave the page.
    */
    function useBeforeUnload({
      route
    }) {
      const uiStore = useUIStore();
      const canvasStore = useCanvasStore();
      const i18n = useI18n();
      const unloadTimeout = ref(null);
      const isDemoRoute = computed(() => route.name === VIEWS.DEMO);
      const handlers = [];
      function onBeforeUnload(e) {
        if (isDemoRoute.value || window.preventNodeViewBeforeUnload) return;
        handlers.forEach(handler => handler());
        if (uiStore.stateIsDirty) {
          e.returnValue = true;
          return true;
        } else {
          canvasStore.startLoading(i18n.baseText("nodeView.redirecting"));
          return;
        }
      }
      function addBeforeUnloadHandler(handler) {
        handlers.push(handler);
      }
      function addBeforeUnloadEventBindings() {
        window.addEventListener("beforeunload", onBeforeUnload);
      }
      function removeBeforeUnloadEventBindings() {
        if (unloadTimeout.value) clearTimeout(unloadTimeout.value);
        window.removeEventListener("beforeunload", onBeforeUnload);
      }
      return {
        onBeforeUnload,
        addBeforeUnloadEventBindings,
        removeBeforeUnloadEventBindings,
        addBeforeUnloadHandler
      };
    }

    //#endregion
    _export("t", useBeforeUnload);
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_useTelemetryLegacy00FJs) {
        useUIStore = _useTelemetryLegacy00FJs.Ni;
        useCanvasStore = _useTelemetryLegacy00FJs.Un;
      }, function (_constantsLegacy00NJs) {
        VIEWS = _constantsLegacy00NJs.Oo;
      }],
      execute: function () {}
    };
  });
})();