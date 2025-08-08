import { T as useUIStore, ae as useCanvasStore, r as ref, x as computed, V as VIEWS, c as useI18n } from "./index-CklTsoJI.js";
function useBeforeUnload({ route }) {
  const uiStore = useUIStore();
  const canvasStore = useCanvasStore();
  const i18n = useI18n();
  const unloadTimeout = ref(null);
  const isDemoRoute = computed(() => route.name === VIEWS.DEMO);
  const handlers = [];
  function onBeforeUnload(e) {
    if (isDemoRoute.value || window.preventNodeViewBeforeUnload) {
      return;
    }
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
    if (unloadTimeout.value) {
      clearTimeout(unloadTimeout.value);
    }
    window.removeEventListener("beforeunload", onBeforeUnload);
  }
  return {
    onBeforeUnload,
    addBeforeUnloadEventBindings,
    removeBeforeUnloadEventBindings,
    addBeforeUnloadHandler
  };
}
export {
  useBeforeUnload as u
};
