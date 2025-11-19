import { C as computed, It as ref } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { gt as useI18n } from "./_MapCache-pT3vKw8Z.js";
import { Ni as useUIStore, Un as useCanvasStore } from "./useTelemetry-C2EhNQhN.js";
import { mo as VIEWS } from "./constants-C_oOJnqT.js";
function useBeforeUnload({ route }) {
	const uiStore = useUIStore();
	const canvasStore = useCanvasStore();
	const i18n = useI18n();
	const unloadTimeout = ref(null);
	const isDemoRoute = computed(() => route.name === VIEWS.DEMO);
	const handlers = [];
	function onBeforeUnload(e) {
		if (isDemoRoute.value || window.preventNodeViewBeforeUnload) return;
		handlers.forEach((handler) => handler());
		if (uiStore.stateIsDirty) {
			e.returnValue = true;
			return true;
		} else {
			canvasStore.startLoading(i18n.baseText("nodeView.redirecting"));
			return;
		}
	}
	function addBeforeUnloadHandler(handler) {
		handlers.push(handler);
	}
	function addBeforeUnloadEventBindings() {
		window.addEventListener("beforeunload", onBeforeUnload);
	}
	function removeBeforeUnloadEventBindings() {
		if (unloadTimeout.value) clearTimeout(unloadTimeout.value);
		window.removeEventListener("beforeunload", onBeforeUnload);
	}
	return {
		onBeforeUnload,
		addBeforeUnloadEventBindings,
		removeBeforeUnloadEventBindings,
		addBeforeUnloadHandler
	};
}
export { useBeforeUnload as t };
