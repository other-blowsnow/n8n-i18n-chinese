;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-CVC6fg6H.js", "./constants-legacy-B0GcWb62.js"], function (_export, _context) {
    "use strict";

    var ref, onBeforeUnmount, onMounted, inject, useClipboard, useThrottleFn, PopOutWindowKey;
    //#region src/app/composables/useClipboard.ts
    function useClipboard$1({
      onPaste: onPasteFn = () => {}
    } = {}) {
      const {
        copy,
        copied,
        isSupported,
        text
      } = useClipboard({
        navigator: inject(PopOutWindowKey, ref())?.value?.navigator ?? window.navigator,
        legacy: true
      });
      const ignoreClasses = ["el-messsage-box", "ignore-key-press-canvas"];
      const initialized = ref(false);
      const onPasteCallback = ref(onPasteFn || null);
      /**
      * Handles copy/paste events
      * @param event
      */
      function onPaste(event) {
        if (!onPasteCallback.value) return;
        const path = event.composedPath?.();
        for (const pathElement of path) if (pathElement.className && ignoreClasses.some(className => pathElement.className.includes?.(className))) return;
        const clipboardData = event.clipboardData;
        if (clipboardData !== null) {
          const clipboardValue = clipboardData.getData("text/plain");
          onPasteCallback.value(clipboardValue, event);
        }
      }
      const throttledOnPaste = useThrottleFn(onPaste, 1e3);
      /**
      * Initialize copy/paste elements and events
      */
      onMounted(() => {
        if (initialized.value) return;
        document.addEventListener("paste", throttledOnPaste);
        initialized.value = true;
      });
      /**
      * Remove copy/paste elements and events
      */
      onBeforeUnmount(() => {
        if (initialized.value) document.removeEventListener("paste", throttledOnPaste);
      });
      return {
        copy,
        copied,
        isSupported,
        text,
        onPaste: onPasteCallback
      };
    }

    //#endregion
    _export("t", useClipboard$1);
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
        onBeforeUnmount = _vueRuntimeEsmBundlerLegacy003Js.J;
        onMounted = _vueRuntimeEsmBundlerLegacy003Js.Z;
        inject = _vueRuntimeEsmBundlerLegacy003Js.z;
      }, function (_MapCacheLegacy005Js) {
        useClipboard = _MapCacheLegacy005Js.S;
        useThrottleFn = _MapCacheLegacy005Js.it;
      }, function (_constantsLegacy00NJs) {
        PopOutWindowKey = _constantsLegacy00NJs.Ts;
      }],
      execute: function () {}
    };
  });
})();