import { C as computed, _t as watch } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { v as useRoute } from "./truncate-D24O8Gpt.js";
import { Er as BUILDER_ENABLED_VIEWS, Tr as ASSISTANT_ENABLED_VIEWS, in as useBuilderStore, ls as useSettingsStore, r as useUIStore, vc as STORES } from "./users.store-DmlY2Qk6.js";
import { Lo as EDITABLE_CANVAS_VIEWS, Uc as ASK_AI_SLIDE_OUT_DURATION_MS } from "./constants-D1rOdsyc.js";
import { k as defineStore } from "./_baseOrderBy-BQpO5lC4.js";
import { r as useChatPanelStateStore, t as useAssistantStore } from "./assistant.store-B3ZFF4Ef.js";
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
			if (!builderStore.streaming && builderStore.chatMessages.length === 0) {
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
		setTimeout(() => {
			uiStore.appGridDimensions = {
				...uiStore.appGridDimensions,
				width: window.innerWidth
			};
			const assistantStore = useAssistantStore();
			const builderStore = useBuilderStore();
			if (assistantStore.isSessionEnded) assistantStore.resetAssistantChat();
			if (!builderStore.streaming) builderStore.resetBuilderChat();
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
