import { Ft as ref, S as computed, W as nextTick, gt as watch } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import { _t as useRoute } from "./src-Bqvpi8Q1.js";
import { Is as useSettingsStore, gr as useTelemetry, ml as STORES, yr as usePostHog } from "./users.store-BBfDn-OZ.js";
import { nl as FLOATING_CHAT_HUB_PANEL_EXPERIMENT, ps as EDITABLE_CANVAS_VIEWS } from "./constants-B5_ykVXd.js";
import { j as defineStore } from "./_baseOrderBy-Bz8EJorA.js";
function isEnabledView(route, views) {
	return typeof route === "string" && views.includes(route);
}
const useChatHubPanelStore = defineStore(STORES.CHAT_HUB_PANEL, () => {
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
export { useChatHubPanelStore as t };
