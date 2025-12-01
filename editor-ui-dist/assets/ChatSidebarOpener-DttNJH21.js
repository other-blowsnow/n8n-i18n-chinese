import { C as computed, D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, P as defineComponent, T as createBlock, Z as onMounted, at as renderSlot, et as openBlock, vn as normalizeClass } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import { D as useEventListener, M as useMediaQuery, j as useLocalStorage } from "./_MapCache-mhYEJTeq.js";
import { Et as N8nIconButton_default, it as useDeviceSupport } from "./src-BDzAa1Y3.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { b as useRouter } from "./truncate-CgT6TTic.js";
import { Bo as useSettingsStore, Bt as useCredentialsStore, Ni as useUIStore } from "./useTelemetry-CX4Z1YmY.js";
import { Ao as stringType, Oo as nullType, Zr as PROVIDER_CREDENTIAL_TYPE_MAP, ei as chatHubProviderSchema, hs as LOCAL_STORAGE_CHAT_HUB_CREDENTIALS, ko as recordType } from "./constants-CuU0cMc8.js";
import { l as CHAT_VIEW, u as MOBILE_MEDIA_QUERY } from "./constants-z4xKkxbS.js";
import { c as isLlmProvider } from "./chat.store-DXPvQBL2.js";
import { t as useChatHubSidebarState } from "./useChatHubSidebarState-BQlxPJtT.js";
const credentialsMapSchema = recordType(chatHubProviderSchema, stringType().or(nullType()));
function useChatCredentials(userId) {
	const isInitialized = ref(false);
	const credentialsStore = useCredentialsStore();
	const settingsStore = useSettingsStore();
	const selectedCredentials = useLocalStorage(LOCAL_STORAGE_CHAT_HUB_CREDENTIALS(userId), {}, {
		writeDefaults: false,
		shallow: true,
		serializer: {
			read: (value) => {
				try {
					return credentialsMapSchema.parse(JSON.parse(value));
				} catch (error) {
					return {};
				}
			},
			write: (value) => JSON.stringify(value)
		}
	});
	const isCredentialsReady = computed(() => isInitialized.value || credentialsStore.allCredentials.length > 0);
	const autoSelectCredentials = computed(() => Object.fromEntries(chatHubProviderSchema.options.map((provider) => {
		if (!isLlmProvider(provider)) return [provider, null];
		const credentialType = PROVIDER_CREDENTIAL_TYPE_MAP[provider];
		if (!credentialType) return [provider, null];
		const availableCredentials = credentialsStore.getCredentialsByType(credentialType);
		const settings = settingsStore.moduleSettings?.["chat-hub"]?.providers[provider];
		if (settings && settings.credentialId && availableCredentials.some((c) => c.id === settings.credentialId)) return [provider, settings.credentialId];
		return [provider, availableCredentials.toSorted((a, b) => +new Date(b.createdAt) - +new Date(a.createdAt))[0]?.id ?? null];
	})));
	const credentialsByProvider = computed(() => isCredentialsReady.value ? {
		...autoSelectCredentials.value,
		...selectedCredentials.value
	} : null);
	function selectCredential(provider, id) {
		selectedCredentials.value = {
			...selectedCredentials.value,
			[provider]: id
		};
	}
	onMounted(async () => {
		await Promise.all([credentialsStore.fetchCredentialTypes(false), credentialsStore.fetchAllCredentials()]);
		isInitialized.value = true;
	});
	return {
		credentialsByProvider,
		selectCredential
	};
}
var ChatLayout_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ChatLayout",
	setup(__props) {
		const isMobileDevice$1 = useMediaQuery(MOBILE_MEDIA_QUERY);
		const router = useRouter();
		const uiStore = useUIStore();
		const { isCtrlKeyPressed } = useDeviceSupport();
		useEventListener(document, "keydown", (event) => {
			if (event.key.toLowerCase() === "o" && isCtrlKeyPressed(event) && event.shiftKey && !uiStore.isAnyModalOpen) {
				event.preventDefault();
				event.stopPropagation();
				router.push({
					name: CHAT_VIEW,
					force: true
				});
			}
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass([_ctx.$style.component, { [_ctx.$style.isMobileDevice]: unref(isMobileDevice$1) }]) }, [renderSlot(_ctx.$slots, "default")], 2);
		};
	}
});
var ChatLayout_vue_vue_type_style_index_0_lang_module_default = {
	component: "_component_gldft_123",
	isMobileDevice: "_isMobileDevice_gldft_134"
};
var ChatLayout_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ChatLayout_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatLayout_vue_vue_type_style_index_0_lang_module_default }]]);
var ChatSidebarOpener_default = /* @__PURE__ */ defineComponent({
	__name: "ChatSidebarOpener",
	setup(__props) {
		const sidebar = useChatHubSidebarState();
		return (_ctx, _cache) => {
			return !unref(sidebar).isStatic.value ? (openBlock(), createBlock(unref(N8nIconButton_default), {
				key: 0,
				type: "secondary",
				icon: unref(sidebar).canBeStatic.value ? "panel-left" : "menu",
				text: "",
				"icon-size": "large",
				onClick: _cache[0] || (_cache[0] = ($event) => unref(sidebar).toggleStatic(true))
			}, null, 8, ["icon"])) : createCommentVNode("", true);
		};
	}
});
export { ChatLayout_default as n, useChatCredentials as r, ChatSidebarOpener_default as t };
