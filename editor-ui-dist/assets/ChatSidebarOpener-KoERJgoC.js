import { C as computed, D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, P as defineComponent, T as createBlock, _t as watch, at as renderSlot, et as openBlock, vn as normalizeClass } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import { D as useEventListener, M as useMediaQuery, gt as useI18n, j as useLocalStorage } from "./_MapCache-DZpzsuCB.js";
import { ct as useDeviceSupport, xt as N8nIconButton_default } from "./src-j4VKDieO.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { y as useRouter } from "./truncate-BlCeUq7F.js";
import { $o as useSettingsStore, Pn as useProjectsStore, Wi as useUIStore, en as useCredentialsStore } from "./builder.store-BjWbk2Wl.js";
import { $r as agentIconOrEmojiSchema, Fo as nullType, Io as objectType, Lo as recordType, Os as LOCAL_STORAGE_CHAT_HUB_CREDENTIALS, Qr as PROVIDER_CREDENTIAL_TYPE_MAP, Ro as stringType, ei as chatHubConversationModelSchema, ni as chatHubProviderSchema } from "./constants-ksa9xIxI.js";
import { d as MOBILE_MEDIA_QUERY, l as CHAT_VIEW } from "./constants-qk3hx0l8.js";
import { l as isLlmProvider, u as isLlmProviderModel } from "./chat.store-DnJwLoWK.js";
import { t as useChatHubSidebarState } from "./useChatHubSidebarState-BVw6kDBQ.js";
const credentialsMapSchema = recordType(chatHubProviderSchema, stringType().or(nullType()));
const chatHubConversationModelWithCachedDisplayNameSchema = chatHubConversationModelSchema.and(objectType({
	cachedDisplayName: stringType().optional(),
	cachedIcon: agentIconOrEmojiSchema.optional()
})).transform((value) => ({
	...value,
	cachedDisplayName: value.cachedDisplayName || (isLlmProviderModel(value) ? value.model : "")
}));
function useChatCredentials(userId) {
	const isInitialized = ref(false);
	const credentialsStore = useCredentialsStore();
	const settingsStore = useSettingsStore();
	const projectStore = useProjectsStore();
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
		if (settings?.credentialId && availableCredentials.some((c) => c.id === settings.credentialId)) return [provider, settings.credentialId];
		return [provider, availableCredentials.toSorted((a, b) => +new Date(b.createdAt) - +new Date(a.createdAt))[0]?.id ?? null];
	})));
	const credentialsByProvider = computed(() => isCredentialsReady.value ? chatHubProviderSchema.options.reduce((acc, provider) => {
		const cred = selectedCredentials.value[provider] ?? null;
		acc[provider] = cred && credentialsStore.allCredentials.some((c) => c.id === cred) ? cred : autoSelectCredentials.value[provider];
		return acc;
	}, {}) : null);
	function selectCredential(provider, id) {
		selectedCredentials.value = {
			...selectedCredentials.value,
			[provider]: id
		};
	}
	watch(() => projectStore.personalProject, async (personalProject) => {
		if (personalProject) {
			await Promise.all([credentialsStore.fetchCredentialTypes(false), credentialsStore.fetchAllCredentialsForWorkflow({ projectId: personalProject.id })]);
			isInitialized.value = true;
		}
	}, { immediate: true });
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
		const i18n = useI18n();
		return (_ctx, _cache) => {
			return !unref(sidebar).isStatic.value ? (openBlock(), createBlock(unref(N8nIconButton_default), {
				key: 0,
				type: "secondary",
				icon: unref(sidebar).canBeStatic.value ? "panel-left" : "menu",
				text: "",
				"icon-size": "large",
				"aria-label": unref(i18n).baseText("chatHub.sidebar.button.toggle"),
				onClick: _cache[0] || (_cache[0] = ($event) => unref(sidebar).toggleStatic(true))
			}, null, 8, ["icon", "aria-label"])) : createCommentVNode("", true);
		};
	}
});
export { chatHubConversationModelWithCachedDisplayNameSchema as i, ChatLayout_default as n, useChatCredentials as r, ChatSidebarOpener_default as t };
