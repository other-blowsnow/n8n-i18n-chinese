import { C as computed, D as createElementBlock, It as ref, P as defineComponent, _t as watch, at as renderSlot, et as openBlock, vn as normalizeClass } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { M as useLocalStorage, O as useEventListener } from "./_MapCache-8-eqnC2S.js";
import { Rt as useRouter, wt as useDeviceSupport } from "./src-Cq27d_Gp.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import { Vt as useProjectsStore, fs as useSettingsStore, r as useUIStore, rt as useCredentialsStore } from "./users.store-qBZsmf9-.js";
import { Go as objectType, Ko as recordType, Ls as LOCAL_STORAGE_CHAT_HUB_CREDENTIALS, Wo as nullType, ai as chatHubProviderSchema, ni as agentIconOrEmojiSchema, qo as stringType, ri as chatHubConversationModelSchema, ti as PROVIDER_CREDENTIAL_TYPE_MAP } from "./constants-Cyrg9Nbl.js";
import { l as CHAT_VIEW } from "./constants-mCmg0XQZ.js";
import { f as isLlmProvider, p as isLlmProviderModel } from "./chat.store-iit3mf2V.js";
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
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.component) }, [renderSlot(_ctx.$slots, "default")], 2);
		};
	}
});
var ChatLayout_vue_vue_type_style_index_0_lang_module_default = { component: "_component_1txea_125" };
var ChatLayout_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ChatLayout_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatLayout_vue_vue_type_style_index_0_lang_module_default }]]);
export { useChatCredentials as n, chatHubConversationModelWithCachedDisplayNameSchema as r, ChatLayout_default as t };
