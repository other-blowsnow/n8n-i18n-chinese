import { Ft as ref, S as computed } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import { Hr as usePostHog, sl as STORES } from "./users.store-CzbeKDa-.js";
import { cl as SETUP_PANEL } from "./constants-CvheVn3c.js";
import { j as defineStore } from "./_baseOrderBy-B6NURhS_.js";
import { t as useDebounce } from "./useDebounce-BPQ7Jg24.js";
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
