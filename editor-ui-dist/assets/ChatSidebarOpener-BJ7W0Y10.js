import { C as computed, D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, P as defineComponent, T as createBlock, Z as onMounted, _n as normalizeClass, at as renderSlot, et as openBlock } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { M as useMediaQuery, j as useLocalStorage } from "./_MapCache-DxwXn8uM.js";
import { Et as N8nIconButton_default } from "./src-BcrqaOXg.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { Ht as useCredentialsStore } from "./useTelemetry-Ct6_U3iA.js";
import { Gr as nullType, Kr as recordType, cr as PROVIDER_CREDENTIAL_TYPE_MAP, dr as chatHubProviderSchema, qr as stringType, us as LOCAL_STORAGE_CHAT_HUB_CREDENTIALS } from "./constants-C-5XMlPK.js";
import { o as MOBILE_MEDIA_QUERY } from "./constants-yvMG61zm.js";
import { t as useChatHubSidebarState } from "./useChatHubSidebarState-C_zx3q36.js";
const credentialsMapSchema = recordType(chatHubProviderSchema, stringType().or(nullType()));
function useChatCredentials(userId) {
	const isInitialized = ref(false);
	const credentialsStore = useCredentialsStore();
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
	const autoSelectCredentials = computed(() => Object.fromEntries(chatHubProviderSchema.options.map((provider) => {
		if (provider === "n8n" || provider === "custom-agent") return [provider, null];
		const credentialType = PROVIDER_CREDENTIAL_TYPE_MAP[provider];
		if (!credentialType) return [provider, null];
		return [provider, credentialsStore.getCredentialsByType(credentialType).toSorted((a, b) => +new Date(b.createdAt) - +new Date(a.createdAt))[0]?.id ?? null];
	})));
	const credentialsByProvider = computed(() => isInitialized.value ? {
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
