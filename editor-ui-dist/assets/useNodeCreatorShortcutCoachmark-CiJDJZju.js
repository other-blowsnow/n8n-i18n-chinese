import { C as computed, It as ref, Nt as onScopeDispose } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { t as canvasEventBus } from "./canvas.eventBus-DmG4M5Yk.js";
import { t as useCalloutHelpers } from "./useCalloutHelpers-k3SDXmzU.js";
const NODE_CREATOR_SHORTCUT_COACHMARK_KEY = "node-creator-shortcut-coachmark";
function useNodeCreatorShortcutCoachmark() {
	const { isCalloutDismissed, dismissCallout } = useCalloutHelpers();
	const isTabPressed = ref(false);
	const shouldShowCoachmark = computed(() => {
		return isTabPressed.value && !isCalloutDismissed("node-creator-shortcut-coachmark");
	});
	function onDeprecatedTabShortcut() {
		isTabPressed.value = true;
	}
	canvasEventBus.on("deprecated:tab-shortcut", onDeprecatedTabShortcut);
	onScopeDispose(() => {
		canvasEventBus.off("deprecated:tab-shortcut", onDeprecatedTabShortcut);
	});
	async function onDismissCoachmark() {
		isTabPressed.value = false;
		await dismissCallout(NODE_CREATOR_SHORTCUT_COACHMARK_KEY);
	}
	return {
		shouldShowCoachmark,
		onDismissCoachmark
	};
}
export { useNodeCreatorShortcutCoachmark as n, NODE_CREATOR_SHORTCUT_COACHMARK_KEY as t };
