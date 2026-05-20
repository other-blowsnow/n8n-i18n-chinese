import { Ft as ref, S as computed, W as nextTick, gt as watch } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { ct as useRoute } from "./src-CSSRFm72.js";
import { on as usePostHog, rn as useTelemetry } from "./users.store-V46mYCxM.js";
import { Ll as FLOATING_CHAT_HUB_PANEL_EXPERIMENT, ni as EDITABLE_CANVAS_VIEWS } from "./constants-B2-iseoM.js";
import { T as defineStore } from "./useRootStore-CX_m119O.js";
import { In as STORES, t as useSettingsStore } from "./settings.store-D1h6gV_f.js";
//#region src/features/ai/chatHub/chatHubPanel.store.ts
function isEnabledView(route, views) {
	return typeof route === "string" && views.includes(route);
}
var useChatHubPanelStore = defineStore(STORES.CHAT_HUB_PANEL, () => {
	const route = useRoute();
	const posthogStore = usePostHog();
	const settingsStore = useSettingsStore();
	const telemetry = useTelemetry();
	const isOpen = ref(false);
	const isPoppedOut = ref(false);
	const isFloatingChatEnabled = computed(() => settingsStore.isChatFeatureEnabled && posthogStore.isVariantEnabled(FLOATING_CHAT_HUB_PANEL_EXPERIMENT.name, FLOATING_CHAT_HUB_PANEL_EXPERIMENT.variant));
	function open() {
		if (!isEnabledView(route?.name, EDITABLE_CANVAS_VIEWS)) return;
		isOpen.value = true;
		telemetry.track("User opened floating chat panel", { source: "canvas" });
	}
	function close() {
		if (isPoppedOut.value) {
			isPoppedOut.value = false;
			nextTick(() => {
				isOpen.value = false;
			});
		} else isOpen.value = false;
	}
	function popOut() {
		isPoppedOut.value = true;
		telemetry.track("User popped out floating chat panel", { source: "canvas" });
	}
	watch(() => route?.name, (newRoute) => {
		if (!newRoute || !isOpen.value) return;
		if (!isEnabledView(newRoute, EDITABLE_CANVAS_VIEWS)) close();
	});
	return {
		isOpen,
		isPoppedOut,
		isFloatingChatEnabled,
		open,
		close,
		popOut
	};
});
//#endregion
export { useChatHubPanelStore as t };
