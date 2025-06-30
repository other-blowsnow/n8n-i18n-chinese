import { E as createEventBus, bM as inject, cd as useActiveElement, dG as useDeviceSupport, x as computed, m as unref, eq as useEventListener, bX as PiPWindowSymbol } from "./index-DTf4skV7.js";
const canvasEventBus = createEventBus();
const useKeybindings = (keymap, options) => {
  const pipWindow = inject(PiPWindowSymbol);
  const activeElement = useActiveElement({ window: pipWindow?.value });
  const { isCtrlKeyPressed } = useDeviceSupport();
  const isDisabled = computed(() => unref(options?.disabled));
  const ignoreKeyPresses = computed(() => {
    if (!activeElement.value) return false;
    const active = activeElement.value;
    const isInput = ["INPUT", "TEXTAREA"].includes(active.tagName);
    const isContentEditable = active.closest("[contenteditable]") !== null;
    const isIgnoreClass = active.closest(".ignore-key-press-canvas") !== null;
    return isInput || isContentEditable || isIgnoreClass;
  });
  const normalizedKeymap = computed(
    () => Object.fromEntries(
      Object.entries(keymap.value).flatMap(([shortcut, handler]) => {
        const shortcuts = shortcut.split("|");
        return shortcuts.map((s) => [normalizeShortcutString(s), handler]);
      })
    )
  );
  function shortcutPartsToString(parts) {
    return parts.map((key) => key.toLowerCase()).sort((a, b) => a.localeCompare(b)).join("+");
  }
  function normalizeShortcutString(shortcut) {
    if (shortcut.length === 1) {
      return shortcut.toLowerCase();
    }
    const splitChars = ["+", "_", "-"];
    const splitCharsRegEx = splitChars.reduce((acc, char) => {
      if (shortcut.startsWith(char) || shortcut.endsWith(char)) {
        return acc;
      }
      return char + acc;
    }, "");
    return shortcutPartsToString(shortcut.split(new RegExp(`[${splitCharsRegEx}]`)));
  }
  function keyboardEventCodeToKey(code) {
    if (code.startsWith("Digit")) {
      return code.replace("Digit", "").toLowerCase();
    } else if (code.startsWith("Key")) {
      return code.replace("Key", "").toLowerCase();
    }
    return code.toLowerCase();
  }
  function toShortcutString(event) {
    const { shiftKey, altKey } = event;
    const ctrlKey = isCtrlKeyPressed(event);
    const keys = "key" in event ? [event.key] : [];
    const codes = "code" in event ? [keyboardEventCodeToKey(event.code)] : [];
    const modifiers = [];
    if (shiftKey) {
      modifiers.push("shift");
    }
    if (ctrlKey) {
      modifiers.push("ctrl");
    }
    if (altKey) {
      modifiers.push("alt");
    }
    return {
      byKey: shortcutPartsToString([...modifiers, ...keys]),
      byCode: shortcutPartsToString([...modifiers, ...codes])
    };
  }
  function onKeyDown(event) {
    if (ignoreKeyPresses.value || isDisabled.value) return;
    const { byKey, byCode } = toShortcutString(event);
    const handler = normalizedKeymap.value[byKey] ?? normalizedKeymap.value[byCode];
    const run = typeof handler === "function" ? handler : handler?.disabled() ? void 0 : handler?.run;
    if (run) {
      event.preventDefault();
      event.stopPropagation();
      run(event);
    }
  }
  useEventListener(pipWindow?.value?.document ?? document, "keydown", onKeyDown);
};
export {
  canvasEventBus as c,
  useKeybindings as u
};
