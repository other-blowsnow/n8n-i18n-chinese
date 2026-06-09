import { Ft as ref, R as inject, X as onMounted, q as onBeforeUnmount } from "./vue.runtime.esm-bundler-C6vn67cX.js";
import { Dl as PopOutWindowKey } from "./constants-DIP3enMx.js";
import { K as useThrottleFn, c as useClipboard$1 } from "./core-nZc0i8VB.js";
//#region src/app/composables/useClipboard.ts
function useClipboard({ onPaste: onPasteFn = () => {} } = {}) {
	const popOutWindow = inject(PopOutWindowKey, ref());
	const { copy: coreCopy, copied, isSupported, text } = useClipboard$1({ legacy: true });
	async function copy(value) {
		const nav = popOutWindow?.value?.navigator;
		if (nav?.clipboard) try {
			await nav.clipboard.writeText(value);
			return;
		} catch {}
		await coreCopy(value);
	}
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
		for (const pathElement of path) if (pathElement.className && ignoreClasses.some((className) => pathElement.className.includes?.(className))) return;
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
export { useClipboard as t };
