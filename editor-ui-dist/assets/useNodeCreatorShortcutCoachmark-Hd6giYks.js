import { Ft as ref, Mt as onScopeDispose, S as computed } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { t as canvasEventBus } from "./canvas.eventBus-B3kWroty.js";
import { t as useCalloutHelpers } from "./useCalloutHelpers-fXfYQVtJ.js";
//#region src/features/shared/nodeCreator/composables/useNodeCreatorShortcutCoachmark.ts
var NODE_CREATOR_SHORTCUT_COACHMARK_KEY = "node-creator-shortcut-coachmark";
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
//#endregion
export { useNodeCreatorShortcutCoachmark as n, NODE_CREATOR_SHORTCUT_COACHMARK_KEY as t };
