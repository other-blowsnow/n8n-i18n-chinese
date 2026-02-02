import { It as ref, J as onBeforeUnmount, Z as onMounted, z as inject } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { S as useClipboard, st as useThrottleFn } from "./_MapCache-8-eqnC2S.js";
import { mc as PopOutWindowKey } from "./constants-Cyrg9Nbl.js";
function useClipboard$1({ onPaste: onPasteFn = () => {} } = {}) {
	const { copy, copied, isSupported, text } = useClipboard({
		navigator: inject(PopOutWindowKey, ref())?.value?.navigator ?? window.navigator,
		legacy: true
	});
	const ignoreClasses = ["el-messsage-box", "ignore-key-press-canvas"];
	const initialized = ref(false);
	const onPasteCallback = ref(onPasteFn || null);
	function onPaste(event) {
		if (!onPasteCallback.value) return;
		const path = event.composedPath?.();
		for (const pathElement of path) if (pathElement.className && ignoreClasses.some((className) => pathElement.className.includes?.(className))) return;
		const clipboardData = event.clipboardData;
		if (clipboardData !== null) {
			const clipboardValue = clipboardData.getData("text/plain");
			onPasteCallback.value(clipboardValue, event);
		}
	}
	const throttledOnPaste = useThrottleFn(onPaste, 1e3);
	onMounted(() => {
		if (initialized.value) return;
		document.addEventListener("paste", throttledOnPaste);
		initialized.value = true;
	});
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
export { useClipboard$1 as t };
