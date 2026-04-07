import { Ft as ref, S as computed } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import { ml as STORES, yr as usePostHog } from "./users.store-BBfDn-OZ.js";
import { ll as SETUP_PANEL } from "./constants-B5_ykVXd.js";
import { j as defineStore } from "./_baseOrderBy-Bz8EJorA.js";
import { t as useDebounce } from "./useDebounce-BRg29NgG.js";
var HIGHLIGHT_CLEAR_DEBOUNCE_MS = 300;
const useSetupPanelStore = defineStore(STORES.SETUP_PANEL, () => {
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
export { useSetupPanelStore as t };
