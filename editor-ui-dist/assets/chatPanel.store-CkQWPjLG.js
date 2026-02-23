import { C as computed, _t as watch } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { bi as useRoute } from "./src-AoeVD7He.js";
import { Fr as BUILDER_ENABLED_VIEWS, Pr as ASSISTANT_ENABLED_VIEWS, r as useUIStore, un as useBuilderStore, xs as useSettingsStore, zc as STORES } from "./users.store-CU7DkGnX.js";
import { es as EDITABLE_CANVAS_VIEWS, gl as ASK_AI_SLIDE_OUT_DURATION_MS } from "./constants-CumZmnWv.js";
import { j as defineStore } from "./_baseOrderBy-CxotlRq1.js";
import { r as useChatPanelStateStore, t as useAssistantStore } from "./assistant.store-CPy14S4p.js";
function isEnabledView(route, views) {
	return typeof route === "string" && views.includes(route);
}
const useChatPanelStore = defineStore(STORES.CHAT_PANEL, () => {
	const uiStore = useUIStore();
	const route = useRoute();
	const chatPanelStateStore = useChatPanelStateStore();
	const settingsStore = useSettingsStore();
	const isAssistantModeActive = computed(() => chatPanelStateStore.activeMode === "assistant");
	const isBuilderModeActive = computed(() => chatPanelStateStore.activeMode === "builder");
	const canShowAiButtonOnCanvas = computed(() => settingsStore.isAiAssistantOrBuilderEnabled && EDITABLE_CANVAS_VIEWS.includes(route.name));
	async function open(options) {
		const mode = options?.mode;
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
		const enabledViews = mode === "assistant" ? ASSISTANT_ENABLED_VIEWS : BUILDER_ENABLED_VIEWS;
		const currentRoute = route?.name;
		if (!isEnabledView(currentRoute, enabledViews)) {
			close();
			return;
		}
		chatPanelStateStore.activeMode = mode;
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
		await useAssistantStore().initCredHelp(credentialType);
		await open({ mode: "assistant" });
	}
	async function openWithErrorHelper(context) {
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
