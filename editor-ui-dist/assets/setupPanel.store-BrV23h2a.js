import { Ft as ref, S as computed } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { on as usePostHog } from "./users.store-DI4bmc3m.js";
import { Gl as SETUP_PANEL } from "./constants-CVUc8I0d.js";
import { T as defineStore } from "./useRootStore-Dw8BvkQq.js";
import { In as STORES } from "./settings.store-CZYLRHOL.js";
import { t as useDebounce } from "./useDebounce-DoqVglby.js";
//#region src/features/setupPanel/setupPanel.store.ts
var HIGHLIGHT_CLEAR_DEBOUNCE_MS = 300;
var useSetupPanelStore = defineStore(STORES.SETUP_PANEL, () => {
	const posthogStore = usePostHog();
	const { debounce } = useDebounce();
	const isFeatureEnabled = computed(() => {
		return posthogStore.getVariant(SETUP_PANEL.name) === SETUP_PANEL.variant;
	});
	const highlightedNodeIds = ref(/* @__PURE__ */ new Set());
	const isHighlightActive = computed(() => highlightedNodeIds.value.size > 0);
	const debouncedClear = debounce(() => {
		highlightedNodeIds.value = /* @__PURE__ */ new Set();
	}, {
		debounceTime: HIGHLIGHT_CLEAR_DEBOUNCE_MS,
		trailing: true
	});
	function setHighlightedNodes(nodeIds) {
		debouncedClear.cancel();
		highlightedNodeIds.value = new Set(nodeIds);
	}
	function clearHighlightedNodes() {
		debouncedClear();
	}
	return {
		isFeatureEnabled,
		highlightedNodeIds,
		isHighlightActive,
		setHighlightedNodes,
		clearHighlightedNodes
	};
});
//#endregion
export { useSetupPanelStore as t };
