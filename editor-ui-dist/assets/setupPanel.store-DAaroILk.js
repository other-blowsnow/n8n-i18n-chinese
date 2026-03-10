import { C as computed, It as ref } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { Hr as usePostHog, al as STORES } from "./users.store-DjIPN_Jo.js";
import { $c as SETUP_PANEL } from "./constants-Du1sDgQK.js";
import { j as defineStore } from "./_baseOrderBy-DTSNQHzv.js";
import { t as useDebounce } from "./useDebounce-DnInf_Mb.js";
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
