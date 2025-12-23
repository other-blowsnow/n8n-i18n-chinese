import { C as computed, _t as watch } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import { v as useRoute } from "./truncate-BlCeUq7F.js";
import { $o as useSettingsStore, Cc as STORES, Tc as BUILDER_ENABLED_VIEWS, Wi as useUIStore, t as useBuilderStore, wc as ASSISTANT_ENABLED_VIEWS } from "./builder.store-BjWbk2Wl.js";
import { Kc as ASK_AI_SLIDE_OUT_DURATION_MS, zo as EDITABLE_CANVAS_VIEWS } from "./constants-ksa9xIxI.js";
import { k as defineStore } from "./_baseOrderBy-B2FQHwl_.js";
import { r as useChatPanelStateStore, t as useAssistantStore } from "./assistant.store-C6RPQyDt.js";
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
		if (mode) chatPanelStateStore.activeMode = mode;
		const enabledViews = chatPanelStateStore.activeMode === "assistant" ? ASSISTANT_ENABLED_VIEWS : BUILDER_ENABLED_VIEWS;
		const currentRoute = route?.name;
		if (!isEnabledView(currentRoute, enabledViews)) {
			close();
			return;
		}
		chatPanelStateStore.isOpen = true;
		if (chatPanelStateStore.activeMode === "builder") {
			const builderStore = useBuilderStore();
			builderStore.chatMessages = [];
			builderStore.fetchBuilderCredits();
			builderStore.loadSessions();
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
		setTimeout(() => {
			uiStore.appGridDimensions = {
				...uiStore.appGridDimensions,
				width: window.innerWidth
			};
			const assistantStore = useAssistantStore();
			const builderStore = useBuilderStore();
			if (assistantStore.isSessionEnded) assistantStore.resetAssistantChat();
			builderStore.resetBuilderChat();
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
		if (!chatPanelStateStore.isOpen || !newRoute) return;
		const builderStore = useBuilderStore();
		if (!isEnabledView(newRoute, chatPanelStateStore.activeMode === "assistant" ? ASSISTANT_ENABLED_VIEWS : BUILDER_ENABLED_VIEWS)) close();
		else if (isEnabledView(newRoute, BUILDER_ENABLED_VIEWS)) builderStore.resetBuilderChat();
	});
	return {
		isOpen: computed(() => chatPanelStateStore.isOpen),
		width: computed(() => chatPanelStateStore.width),
		activeMode: computed(() => chatPanelStateStore.activeMode),
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
