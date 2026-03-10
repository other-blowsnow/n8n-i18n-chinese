import { C as computed, _t as watch } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-FALBSzR9.js";
import { Ei as useRoute } from "./src-DSdtxpS-.js";
import { Hr as usePostHog, Rr as useChatPanelStateStore, Ur as ASSISTANT_ENABLED_VIEWS, Wr as BUILDER_ENABLED_VIEWS, al as STORES, js as useSettingsStore, ln as useBuilderStore, r as useUIStore } from "./users.store-DjIPN_Jo.js";
import { Al as ASK_AI_SLIDE_OUT_DURATION_MS, os as EDITABLE_CANVAS_VIEWS, qc as MERGE_ASK_BUILD_EXPERIMENT } from "./constants-Du1sDgQK.js";
import { j as defineStore } from "./_baseOrderBy-DTSNQHzv.js";
import { t as useAssistantStore } from "./assistant.store-Boq9AJMi.js";
function isEnabledView(route, views) {
	return typeof route === "string" && views.includes(route);
}
const useChatPanelStore = defineStore(STORES.CHAT_PANEL, () => {
	const uiStore = useUIStore();
	const route = useRoute();
	const chatPanelStateStore = useChatPanelStateStore();
	const settingsStore = useSettingsStore();
	const posthogStore = usePostHog();
	const locale = useI18n();
	const isMergeAskBuildEnabled = computed(() => posthogStore.isFeatureEnabled(MERGE_ASK_BUILD_EXPERIMENT.name) && settingsStore.isAiAssistantEnabled && useBuilderStore().isAIBuilderEnabled);
	function resolveMode(mode) {
		return mode === "assistant" && isMergeAskBuildEnabled.value ? "builder" : mode;
	}
	const isAssistantModeActive = computed(() => chatPanelStateStore.activeMode === "assistant");
	const isBuilderModeActive = computed(() => chatPanelStateStore.activeMode === "builder");
	const canShowAiButtonOnCanvas = computed(() => settingsStore.isAiAssistantOrBuilderEnabled && EDITABLE_CANVAS_VIEWS.includes(route.name));
	async function open(options) {
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
		uiStore.appGridDimensions = {
			...uiStore.appGridDimensions,
			width: window.innerWidth - chatPanelStateStore.width
		};
	}
	function close() {
		chatPanelStateStore.isOpen = false;
		chatPanelStateStore.showCoachmark = false;
		setTimeout(() => {
			uiStore.appGridDimensions = {
				...uiStore.appGridDimensions,
				width: window.innerWidth
			};
			const assistantStore = useAssistantStore();
			if (assistantStore.isSessionEnded) assistantStore.resetAssistantChat();
		}, 250);
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
		await useAssistantStore().initCredHelp(credentialType);
		await open({ mode: "assistant" });
	}
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
		await useAssistantStore().initErrorHelper(context);
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
		canShowAiButtonOnCanvas,
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
export { useChatPanelStore as t };
