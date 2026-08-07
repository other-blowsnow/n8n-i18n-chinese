import { It as ref, S as computed, W as nextTick, gt as watch } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { g as useRoute } from "./htmlUtils-y-zflQYZ.js";
import { i as defineStore } from "./constants-DiAcAyiD.js";
import { t as STORES } from "./constants2-D6qsHKVK.js";
import { t as useSettingsStore } from "./settings.store-MdDUJyUn.js";
import "./settings.store-xTAm7xED.js";
import { Rr as EDITABLE_CANVAS_VIEWS, Ua as FLOATING_CHAT_HUB_PANEL_EXPERIMENT } from "./constants-CJQKNI-b.js";
import { n as useTelemetry, t as usePostHog } from "./posthog.store-Di9fXa7o.js";
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
