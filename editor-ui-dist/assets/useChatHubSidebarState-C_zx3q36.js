import { C as computed } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { M as useMediaQuery, j as useLocalStorage } from "./_MapCache-DxwXn8uM.js";
import { Ni as useUIStore, er as useUsersStore } from "./useTelemetry-Ct6_U3iA.js";
import { Mo as CHAT_HUB_SIDE_MENU_DRAWER_MODAL_KEY, ps as LOCAL_STORAGE_CHAT_HUB_STATIC_SIDEBAR } from "./constants-C-5XMlPK.js";
import { o as MOBILE_MEDIA_QUERY } from "./constants-yvMG61zm.js";
function useChatHubSidebarState() {
	const isMobileDevice = useMediaQuery(MOBILE_MEDIA_QUERY);
	const uiStore = useUIStore();
	const isStatic = useLocalStorage(LOCAL_STORAGE_CHAT_HUB_STATIC_SIDEBAR(useUsersStore().currentUserId ?? "anonymous"), !isMobileDevice.value, { writeDefaults: false });
	const canBeStatic = computed(() => !isMobileDevice.value);
	function toggleOpen(value) {
		const isOpen = !!uiStore.isModalActiveById[CHAT_HUB_SIDE_MENU_DRAWER_MODAL_KEY];
		if (value ?? !isOpen) uiStore.openModal(CHAT_HUB_SIDE_MENU_DRAWER_MODAL_KEY);
		else uiStore.closeModal(CHAT_HUB_SIDE_MENU_DRAWER_MODAL_KEY);
	}
	function toggleStatic(value) {
		const newValue = value ?? !isStatic.value;
		isStatic.value = newValue;
		toggleOpen(newValue);
	}
	return {
		canBeStatic,
		isStatic: computed(() => canBeStatic.value && isStatic.value),
		isCollapsed: computed(() => !isStatic.value && uiStore.isModalActiveById["chatHubSideMenuDrawer"] !== true),
		toggleOpen,
		toggleStatic
	};
}
export { useChatHubSidebarState as t };
