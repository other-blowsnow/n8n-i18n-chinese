import { It as ref, Nt as onScopeDispose, R as inject, S as computed, Ut as toValue } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { m as useEventListener, o as useActiveElement } from "./core-CPznNyVT.js";
import { Yt as useDeviceSupport } from "./src-bSQwfFcX.js";
import { cd as PopOutWindowKey } from "./constants-CSBjw1Ht.js";
import { Pr as shouldIgnoreCanvasShortcut } from "./workflowDocument.store-DWj92T8C.js";
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
var useKeybindings = (keymap, options) => {
	const popOutWindow = inject(PopOutWindowKey, ref());
	const activeElement = useActiveElement({ window: popOutWindow?.value });
	const { isCtrlKeyPressed } = useDeviceSupport();
	const layoutMap = ref(null);
	async function updateLayoutMap() {
		try {
			layoutMap.value = await navigator.keyboard?.getLayoutMap() ?? null;
		} catch {
			layoutMap.value = null;
		}
	}
	if (navigator.keyboard) {
		updateLayoutMap();
		if ("addEventListener" in navigator.keyboard) {
			const onLayoutChange = () => {
				updateLayoutMap();
			};
			navigator.keyboard.addEventListener("layoutchange", onLayoutChange);
			onScopeDispose(() => {
				navigator.keyboard?.removeEventListener("layoutchange", onLayoutChange);
			});
		}
	}
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
		return shortcutPartsToString(shortcut.split(new RegExp(`[${splitCharsRegEx}]`)));
	}
	/**
	* Converts a keyboard event code to a key string.
	*
	* @example
	* keyboardEventCodeToKey('Digit0') -> '0'
	* keyboardEventCodeToKey('KeyA') -> 'a'
	*/
	function keyboardEventCodeToKey(code) {
		if (code.startsWith("Digit")) return code.replace("Digit", "").toLowerCase();
		else if (code.startsWith("Key")) return code.replace("Key", "").toLowerCase();
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
		const { shiftKey, altKey } = event;
		const ctrlKey = isCtrlKeyPressed(event);
		const keys = "key" in event ? [event.key] : [];
		const codes = "code" in event ? [keyboardEventCodeToKey(event.code)] : [];
		const modifiers = [];
		if (shiftKey) modifiers.push("shift");
		if (ctrlKey) modifiers.push("ctrl");
		if (altKey) modifiers.push("alt");
		let byLayout;
		if (layoutMap.value && "code" in event) {
			const layoutKey = layoutMap.value.get(event.code);
			if (layoutKey) byLayout = shortcutPartsToString([...modifiers, layoutKey]);
		}
		return {
			byKey: shortcutPartsToString([...modifiers, ...keys]),
			byCode: shortcutPartsToString([...modifiers, ...codes]),
			byLayout
		};
	}
	function onKeyDown(event) {
		if (ignoreKeyPresses.value || isDisabled.value) return;
		const { byKey, byCode, byLayout } = toShortcutString(event);
		const isLetterKey = event.code.startsWith("Key");
		const isLatinLetter = /^[a-z]$/i.test(event.key);
		const isNonLatinLetter = /^\p{L}$/u.test(event.key) && !isLatinLetter;
		const ctrlOrCmd = isCtrlKeyPressed(event);
		const useCodeFallback = !isLetterKey || ctrlOrCmd && isNonLatinLetter;
		const handlerFromKey = normalizedKeymap.value[byKey];
		const handlerFromLayout = byLayout ? normalizedKeymap.value[byLayout] : void 0;
		const handlerFromCode = useCodeFallback ? normalizedKeymap.value[byCode] : void 0;
		const handler = handlerFromKey ?? handlerFromLayout ?? handlerFromCode;
		const run = typeof handler === "function" ? handler : handler?.disabled() ? void 0 : handler?.run;
		if (run) {
			event.preventDefault();
			event.stopPropagation();
			run(event);
		}
	}
	useEventListener(popOutWindow?.value?.document ?? document, "keydown", onKeyDown);
};
//#endregion
export { useKeybindings as t };
