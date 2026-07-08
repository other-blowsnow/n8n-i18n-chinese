import { It as ref, S as computed } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { vd as SETUP_PANEL } from "./constants-ZSgQBvyG.js";
import { T as defineStore } from "./useRootStore-BH7aCkdu.js";
import { Bn as STORES } from "./settings.store-fzkHYqQC.js";
import { g as usePostHog } from "./users.store-DlXqF6lz.js";
import { t as useDebounce } from "./useDebounce-DGsXgzXs.js";
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
