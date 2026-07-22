import { S as computed, gt as watch } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { ot as useI18n } from "./core-CngOnFvY.js";
import { Ct as useRoute } from "./src-CtyOKmD-.js";
import { pi as EDITABLE_CANVAS_VIEWS, zd as MERGE_ASK_BUILD_EXPERIMENT } from "./constants-CSBjw1Ht.js";
import { dn as useWorkflowsStore } from "./workflowDocument.store-W274j3PU.js";
import { T as defineStore } from "./useRootStore-hyBq4XlJ.js";
import { Vn as STORES, t as useSettingsStore } from "./settings.store-C5bX9q6f.js";
import { f as useUIStore, g as usePostHog } from "./users.store-C2APvywU.js";
import { a as BUILDER_ENABLED_VIEWS, i as ASSISTANT_ENABLED_VIEWS, r as useChatPanelStateStore } from "./useCodeDiff-Bs_BD3D7.js";
import { t as useBuilderStore } from "./builder.store-C0v27f0s.js";
import { t as useAssistantStore } from "./assistant.store-C1BOI-az.js";
/**
* Type guard to check if a route name is a valid VIEWS value within the enabled views
* Performs runtime validation to safely narrow the type without unsafe assertions
*/
function isEnabledView(route, views) {
	return typeof route === "string" && views.includes(route);
}
var useChatPanelStore = defineStore(STORES.CHAT_PANEL, () => {
	const uiStore = useUIStore();
	const route = useRoute();
	const chatPanelStateStore = useChatPanelStateStore();
	const settingsStore = useSettingsStore();
	const workflowsStore = useWorkflowsStore();
	const posthogStore = usePostHog();
	const locale = useI18n();
	let openTimerId = null;
	const isMergeAskBuildEnabled = computed(() => posthogStore.isFeatureEnabled(MERGE_ASK_BUILD_EXPERIMENT.name) && settingsStore.isAiAssistantEnabled && useBuilderStore().isAIBuilderEnabled);
	/** When merge is enabled, redirect assistant mode requests to builder */
	function resolveMode(mode) {
		return mode === "assistant" && isMergeAskBuildEnabled.value ? "builder" : mode;
	}
	const isAssistantModeActive = computed(() => chatPanelStateStore.activeMode === "assistant");
	const isBuilderModeActive = computed(() => chatPanelStateStore.activeMode === "builder");
	const isEditableCanvasView = computed(() => EDITABLE_CANVAS_VIEWS.includes(route.name));
	async function open(options) {
		if (!settingsStore.isAiAssistantOrBuilderEnabled) return;
		const mode = options?.mode ? resolveMode(options.mode) : void 0;
		const showCoachmark = options?.showCoachmark ?? true;
		if (mode) chatPanelStateStore.activeMode = mode;
		chatPanelStateStore.showCoachmark = showCoachmark;
		const enabledViews = chatPanelStateStore.activeMode === "assistant" ? ASSISTANT_ENABLED_VIEWS : BUILDER_ENABLED_VIEWS;
		const currentRoute = route?.name;
		if (!isEnabledView(currentRoute, enabledViews)) {
			close();
			return;
		}
		chatPanelStateStore.isOpen = true;
		if (chatPanelStateStore.activeMode === "builder") {
			const builderStore = useBuilderStore();
			if (!builderStore.streaming) {
				builderStore.fetchBuilderCredits();
				builderStore.loadSessions();
			}
		} else if (chatPanelStateStore.activeMode === "assistant") {
			const assistantStore = useAssistantStore();
			assistantStore.chatMessages = assistantStore.chatMessages.map((msg) => ({
				...msg,
				read: true
			}));
		}
		if (openTimerId) clearTimeout(openTimerId);
		openTimerId = setTimeout(() => {
			openTimerId = null;
			uiStore.appGridDimensions = {
				...uiStore.appGridDimensions,
				width: window.innerWidth - chatPanelStateStore.width
			};
		}, 175);
	}
	function close() {
		if (openTimerId) {
			clearTimeout(openTimerId);
			openTimerId = null;
		}
		chatPanelStateStore.isOpen = false;
		chatPanelStateStore.showCoachmark = false;
		setTimeout(() => {
			uiStore.appGridDimensions = {
				...uiStore.appGridDimensions,
				width: window.innerWidth
			};
			const assistantStore = useAssistantStore();
			if (assistantStore.isSessionEnded) assistantStore.resetAssistantChat(workflowsStore.workflowId);
		}, 200);
	}
	async function toggle(options) {
		if (chatPanelStateStore.isOpen) close();
		else await open(options);
	}
	function switchMode(mode) {
		const resolved = resolveMode(mode);
		const enabledViews = resolved === "assistant" ? ASSISTANT_ENABLED_VIEWS : BUILDER_ENABLED_VIEWS;
		const currentRoute = route?.name;
		if (!isEnabledView(currentRoute, enabledViews)) {
			close();
			return;
		}
		chatPanelStateStore.activeMode = resolved;
		chatPanelStateStore.showCoachmark = false;
	}
	function updateWidth(newWidth) {
		const clampedWidth = Math.min(Math.max(newWidth, 380), 425);
		chatPanelStateStore.width = clampedWidth;
		if (chatPanelStateStore.isOpen) uiStore.appGridDimensions = {
			...uiStore.appGridDimensions,
			width: window.innerWidth - clampedWidth
		};
	}
	/**
	* Opens assistant with credential help context
	*/
	async function openWithCredHelp(credentialType) {
		if (isMergeAskBuildEnabled.value) {
			const question = locale.baseText("aiAssistant.builder.credentialHelpMessage", { interpolate: { credentialName: credentialType.displayName } });
			await open({ mode: "builder" });
			await useBuilderStore().sendChatMessage({
				text: question,
				helpMessage: true
			});
			return;
		}
		await useAssistantStore().initCredHelp(workflowsStore.workflowId, credentialType);
		await open({ mode: "assistant" });
	}
	/**
	* Opens assistant with error helper context
	*/
	async function openWithErrorHelper(context) {
		if (isMergeAskBuildEnabled.value) {
			const errorText = locale.baseText("aiAssistant.builder.errorHelpMessage", { interpolate: {
				nodeName: context.node.name,
				errorMessage: context.error.message
			} });
			await open({ mode: "builder" });
			await useBuilderStore().sendChatMessage({
				text: errorText,
				helpMessage: true
			});
			return;
		}
		await useAssistantStore().initErrorHelper(workflowsStore.workflowId, context);
		await open({ mode: "assistant" });
	}
	watch(() => route?.name, (newRoute) => {
		if (!newRoute) return;
		const builderStore = useBuilderStore();
		if (!chatPanelStateStore.isOpen && builderStore.streaming && isEnabledView(newRoute, BUILDER_ENABLED_VIEWS)) {
			open({ mode: "builder" });
			return;
		}
		if (!chatPanelStateStore.isOpen) return;
		if (!isEnabledView(newRoute, chatPanelStateStore.activeMode === "assistant" ? ASSISTANT_ENABLED_VIEWS : BUILDER_ENABLED_VIEWS)) close();
		else if (isEnabledView(newRoute, BUILDER_ENABLED_VIEWS) && !builderStore.streaming) builderStore.resetBuilderChat();
	});
	return {
		isOpen: computed(() => chatPanelStateStore.isOpen),
		width: computed(() => chatPanelStateStore.width),
		activeMode: computed(() => chatPanelStateStore.activeMode),
		showCoachmark: computed(() => chatPanelStateStore.showCoachmark),
		isAssistantModeActive,
		isBuilderModeActive,
		isEditableCanvasView,
		open,
		close,
		toggle,
		switchMode,
		updateWidth,
		openWithCredHelp,
		openWithErrorHelper,
		DEFAULT_CHAT_WIDTH: 400,
		MIN_CHAT_WIDTH: 380,
		MAX_CHAT_WIDTH: 425
	};
});
//#endregion
export { useChatPanelStore as t };
