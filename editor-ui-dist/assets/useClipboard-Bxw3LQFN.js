import { Ft as ref, R as inject, X as onMounted, q as onBeforeUnmount } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import { S as useClipboard, ct as useThrottleFn } from "./_MapCache-DL4VDRVM.js";
import { Ic as PopOutWindowKey } from "./constants-CasV1Nn-.js";
function useClipboard$1({ onPaste: onPasteFn = () => {} } = {}) {
	const popOutWindow = inject(PopOutWindowKey, ref());
	const { copy: coreCopy, copied, isSupported, text } = useClipboard({ legacy: true });
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
