;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-CVC6fg6H.js", "./src-legacy-D3-Bo0sy.js", "./constants-legacy-B0GcWb62.js", "./nodeCreator.store-legacy-DazC1kYi.js"], function (_export, _context) {
    "use strict";

    var computed, ref, toValue, inject, useEventListener, useActiveElement, useDeviceSupport, PopOutWindowKey, shouldIgnoreCanvasShortcut, useKeybindings;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
        toValue = _vueRuntimeEsmBundlerLegacy003Js.Ut;
        inject = _vueRuntimeEsmBundlerLegacy003Js.z;
      }, function (_MapCacheLegacy005Js) {
        useEventListener = _MapCacheLegacy005Js.D;
        useActiveElement = _MapCacheLegacy005Js.b;
      }, function (_srcLegacy007Js) {
        useDeviceSupport = _srcLegacy007Js.rt;
      }, function (_constantsLegacy00NJs) {
        PopOutWindowKey = _constantsLegacy00NJs.Ts;
      }, function (_nodeCreatorStoreLegacy01jJs) {
        shouldIgnoreCanvasShortcut = _nodeCreatorStoreLegacy01jJs.u;
      }],
      execute: function () {
        //#region src/app/composables/useKeybindings.ts
        /**
        * Binds a `keydown` event to `document` and calls the approriate
        * handlers based on the given `keymap`. The keymap is a map from
        * shortcut strings to handlers. The shortcut strings can contain
        * multiple shortcuts separated by `|`.
        *
        * @example
        * ```ts
        * {
        * 	'ctrl+a': () => console.log('ctrl+a'),
        * 	'ctrl+b|ctrl+c': () => console.log('ctrl+b or ctrl+c'),
        * }
        * ```
        */
        _export("t", useKeybindings = (keymap, options) => {
          const popOutWindow = inject(PopOutWindowKey, ref());
          const activeElement = useActiveElement({
            window: popOutWindow?.value
          });
          const {
            isCtrlKeyPressed
          } = useDeviceSupport();
          const isDisabled = computed(() => toValue(options?.disabled));
          const ignoreKeyPresses = computed(() => activeElement.value && shouldIgnoreCanvasShortcut(activeElement.value));
          const normalizedKeymap = computed(() => Object.fromEntries(Object.entries(toValue(keymap)).flatMap(([shortcut, handler]) => {
            return shortcut.split("|").map(s => [normalizeShortcutString(s), handler]);
          })));
          function shortcutPartsToString(parts) {
            return parts.map(key => key.toLowerCase()).sort((a, b) => a.localeCompare(b)).join("+");
          }
          function normalizeShortcutString(shortcut) {
            if (shortcut.length === 1) return shortcut.toLowerCase();
            const splitCharsRegEx = ["+", "_", "-"].reduce((acc, char) => {
              if (shortcut.startsWith(char) || shortcut.endsWith(char)) return acc;
              return char + acc;
            }, "");
            return shortcutPartsToString(shortcut.split(/* @__PURE__ */new RegExp(`[${splitCharsRegEx}]`)));
          }
          /**
          * Converts a keyboard event code to a key string.
          *
          * @example
          * keyboardEventCodeToKey('Digit0') -> '0'
          * keyboardEventCodeToKey('KeyA') -> 'a'
          */
          function keyboardEventCodeToKey(code) {
            if (code.startsWith("Digit")) return code.replace("Digit", "").toLowerCase();else if (code.startsWith("Key")) return code.replace("Key", "").toLowerCase();
            return code.toLowerCase();
          }
          /**
          * Converts a keyboard event to a shortcut string for both
          * `key` and `code`.
          *
          * @example
          * keyboardEventToShortcutString({ key: 'a', code: 'KeyA', ctrlKey: true })
          * // --> { byKey: 'ctrl+a', byCode: 'ctrl+a' }
          */
          function toShortcutString(event) {
            const {
              shiftKey,
              altKey
            } = event;
            const ctrlKey = isCtrlKeyPressed(event);
            const keys = "key" in event ? [event.key] : [];
            const codes = "code" in event ? [keyboardEventCodeToKey(event.code)] : [];
            const modifiers = [];
            if (shiftKey) modifiers.push("shift");
            if (ctrlKey) modifiers.push("ctrl");
            if (altKey) modifiers.push("alt");
            return {
              byKey: shortcutPartsToString([...modifiers, ...keys]),
              byCode: shortcutPartsToString([...modifiers, ...codes])
            };
          }
          function onKeyDown(event) {
            if (ignoreKeyPresses.value || isDisabled.value) return;
            const {
              byKey,
              byCode
            } = toShortcutString(event);
            const handler = normalizedKeymap.value[byKey] ?? normalizedKeymap.value[byCode];
            const run = typeof handler === "function" ? handler : handler?.disabled() ? void 0 : handler?.run;
            if (run) {
              event.preventDefault();
              event.stopPropagation();
              run(event);
            }
          }
          useEventListener(popOutWindow?.value?.document ?? document, "keydown", onKeyDown);
        }); //#endregion
      }
    };
  });
})();