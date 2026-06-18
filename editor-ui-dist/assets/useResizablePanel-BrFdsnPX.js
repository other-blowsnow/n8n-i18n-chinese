import { Gt as unref, It as ref, S as computed, gt as watch } from "./vue.runtime.esm-bundler-CiTcVoZc.js";
import { _ as useLocalStorage } from "./core-CZJuH52F.js";
//#region src/app/composables/useResizablePanel.ts
function useResizablePanel(localStorageKey, { container, defaultSize, snap = true, minSize = 0, maxSize = (size) => size, position = "left", allowCollapse, allowFullSize }) {
	const containerSize = ref(0);
	const persistedSize = useLocalStorage(localStorageKey, -1, { writeDefaults: false });
	const isResizing = ref(false);
	const sizeOnResizeStart = ref();
	const minSizeValue = computed(() => resolveSize(minSize, containerSize.value));
	const maxSizeValue = computed(() => resolveSize(maxSize, containerSize.value));
	const constrainedSize = computed(() => {
		const sizeInPixels = persistedSize.value >= 0 && persistedSize.value <= 1 ? containerSize.value * persistedSize.value : -1;
		if (isResizing.value && allowCollapse && sizeInPixels < 30) return 0;
		if (isResizing.value && allowFullSize && sizeInPixels > containerSize.value - 30) return containerSize.value;
		const defaultSizeValue = resolveSize(defaultSize, containerSize.value);
		if (Number.isNaN(sizeInPixels) || !Number.isFinite(sizeInPixels) || sizeInPixels < 0) return defaultSizeValue;
		return Math.max(minSizeValue.value, Math.min(snap && Math.abs(defaultSizeValue - sizeInPixels) < 30 ? defaultSizeValue : sizeInPixels, maxSizeValue.value));
	});
	function getSize(el) {
		return position === "bottom" ? el.height : el.width;
	}
	function getOffsetSize(el) {
		return position === "bottom" ? el.offsetHeight : el.offsetWidth;
	}
	function getValue(data) {
		return position === "bottom" ? data.y : data.x;
	}
	function resolveSize(getter, containerSizeValue) {
		return typeof getter === "number" ? getter : getter(containerSizeValue);
	}
	function onResize(data) {
		const containerRect = unref(container)?.getBoundingClientRect();
		const newSizeInPixels = Math.max(0, position === "bottom" ? (containerRect ? getSize(containerRect) : 0) - getValue(data) : getValue(data) - (containerRect ? getValue(containerRect) : 0));
		isResizing.value = true;
		persistedSize.value = newSizeInPixels / containerSize.value;
		if (sizeOnResizeStart.value === void 0) sizeOnResizeStart.value = persistedSize.value;
	}
	function onResizeEnd() {
		if (minSizeValue.value > 0 && constrainedSize.value <= 0 || maxSizeValue.value < containerSize.value && constrainedSize.value >= containerSize.value) persistedSize.value = sizeOnResizeStart.value;
		sizeOnResizeStart.value = void 0;
		isResizing.value = false;
	}
	watch(() => unref(container), (el, _, onCleanUp) => {
		if (!el) return;
		const observer = new ResizeObserver(() => {
			containerSize.value = getOffsetSize(el);
		});
		observer.observe(el);
		containerSize.value = getOffsetSize(el);
		onCleanUp(() => observer.disconnect());
	}, { immediate: true });
	return {
		isResizing: computed(() => isResizing.value),
		isCollapsed: computed(() => isResizing.value && constrainedSize.value <= 0),
		isFullSize: computed(() => isResizing.value && constrainedSize.value >= containerSize.value),
		size: constrainedSize,
		onResize,
		onResizeEnd
	};
}
//#endregion
export { useResizablePanel as t };
