import { C as computed, It as ref, Ut as toValue, z as inject } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { D as useEventListener, b as useActiveElement } from "./_MapCache-pT3vKw8Z.js";
import { rt as useDeviceSupport } from "./src-BmrdBtCN.js";
import { Ts as PopOutWindowKey } from "./constants-C_oOJnqT.js";
import { u as shouldIgnoreCanvasShortcut } from "./nodeCreator.store-BXjpGwrk.js";
const useKeybindings = (keymap, options) => {
	const popOutWindow = inject(PopOutWindowKey, ref());
	const activeElement = useActiveElement({ window: popOutWindow?.value });
	const { isCtrlKeyPressed } = useDeviceSupport();
	const isDisabled = computed(() => toValue(options?.disabled));
	const ignoreKeyPresses = computed(() => activeElement.value && shouldIgnoreCanvasShortcut(activeElement.value));
	const normalizedKeymap = computed(() => Object.fromEntries(Object.entries(toValue(keymap)).flatMap(([shortcut, handler]) => {
		return shortcut.split("|").map((s) => [normalizeShortcutString(s), handler]);
	})));
	function shortcutPartsToString(parts) {
		return parts.map((key) => key.toLowerCase()).sort((a, b) => a.localeCompare(b)).join("+");
	}
	function normalizeShortcutString(shortcut) {
		if (shortcut.length === 1) return shortcut.toLowerCase();
		const splitCharsRegEx = [
			"+",
			"_",
			"-"
		].reduce((acc, char) => {
			if (shortcut.startsWith(char) || shortcut.endsWith(char)) return acc;
			return char + acc;
		}, "");
		return shortcutPartsToString(shortcut.split(/* @__PURE__ */ new RegExp(`[${splitCharsRegEx}]`)));
	}
	function keyboardEventCodeToKey(code) {
		if (code.startsWith("Digit")) return code.replace("Digit", "").toLowerCase();
		else if (code.startsWith("Key")) return code.replace("Key", "").toLowerCase();
		return code.toLowerCase();
	}
	function toShortcutString(event) {
		const { shiftKey, altKey } = event;
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
		const { byKey, byCode } = toShortcutString(event);
		const handler = normalizedKeymap.value[byKey] ?? normalizedKeymap.value[byCode];
		const run = typeof handler === "function" ? handler : handler?.disabled() ? void 0 : handler?.run;
		if (run) {
			event.preventDefault();
			event.stopPropagation();
			run(event);
		}
	}
	useEventListener(popOutWindow?.value?.document ?? document, "keydown", onKeyDown);
};
export { useKeybindings as t };
