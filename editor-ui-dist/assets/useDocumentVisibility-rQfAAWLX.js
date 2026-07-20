import { It as ref, X as onMounted, Z as onUnmounted } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
//#region src/app/composables/useDocumentVisibility.ts
function useDocumentVisibility() {
	const isVisible = ref(!document.hidden);
	const visibleHandlers = ref([]);
	const hiddenHandlers = ref([]);
	const onVisibilityChange = () => {
		const newVisibilityState = !document.hidden;
		isVisible.value = newVisibilityState;
		if (newVisibilityState) visibleHandlers.value.forEach((handler) => handler());
		else hiddenHandlers.value.forEach((handler) => handler());
	};
	const onDocumentVisible = (handler) => {
		visibleHandlers.value.push(handler);
	};
	const onDocumentHidden = (handler) => {
		hiddenHandlers.value.push(handler);
	};
	onMounted(() => {
		document.addEventListener("visibilitychange", onVisibilityChange);
	});
	onUnmounted(() => {
		document.removeEventListener("visibilitychange", onVisibilityChange);
		visibleHandlers.value = [];
		hiddenHandlers.value = [];
	});
	return {
		isVisible,
		onDocumentVisible,
		onDocumentHidden
	};
}
//#endregion
export { useDocumentVisibility as t };
