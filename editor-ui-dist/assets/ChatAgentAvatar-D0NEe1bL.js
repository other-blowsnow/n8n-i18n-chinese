import { C as computed, Cn as toDisplayString, D as createElementBlock, Gt as unref, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, j as createTextVNode, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-8-eqnC2S.js";
import { Hi as N8nIcon_default, Ht as N8nTooltip_default } from "./src-Cq27d_Gp.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import { rt as useCredentialsStore } from "./users.store-qBZsmf9-.js";
import { ti as PROVIDER_CREDENTIAL_TYPE_MAP } from "./constants-Cyrg9Nbl.js";
import { t as CredentialIcon_default } from "./CredentialIcon-DmygWc0W.js";
import { h as personalAgentDefaultIcon, p as isLlmProviderModel, y as workflowAgentDefaultIcon } from "./chat.store-iit3mf2V.js";
var ChatAgentAvatar_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ChatAgentAvatar",
	props: {
		agent: {},
		size: {},
		tooltip: { type: Boolean }
	},
	setup(__props) {
		const credentialsStore = useCredentialsStore();
		const isCredentialsIconReady = computed(() => credentialsStore.allCredentialTypes.length > 0);
		const i18n = useI18n();
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nTooltip_default), {
				"show-after": 100,
				placement: "left",
				disabled: !__props.tooltip
			}, {
				content: withCtx(() => [createTextVNode(toDisplayString(__props.agent?.name || unref(i18n).baseText("chatHub.agent.unavailableAgent")), 1)]),
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass([_ctx.$style.container, _ctx.$attrs.class]) }, [__props.agent?.icon?.type === "emoji" ? (openBlock(), createElementBlock("span", {
					key: 0,
					class: normalizeClass([_ctx.$style.emoji, _ctx.$style[__props.size]])
				}, toDisplayString(__props.agent.icon.value), 3)) : !__props.agent || !unref(isLlmProviderModel)(__props.agent.model) ? (openBlock(), createBlock(unref(N8nIcon_default), {
					key: 1,
					color: __props.size === "sm" ? "text-base" : "text-light",
					class: normalizeClass([_ctx.$style.n8nIcon, _ctx.$style[__props.size]]),
					icon: __props.agent?.icon?.value ?? (__props.agent?.model.provider === "n8n" ? unref(workflowAgentDefaultIcon) : unref(personalAgentDefaultIcon)).value,
					size: __props.size === "lg" ? "xxlarge" : __props.size === "sm" ? "large" : "xlarge"
				}, null, 8, [
					"color",
					"class",
					"icon",
					"size"
				])) : (openBlock(), createBlock(CredentialIcon_default, {
					key: 2,
					class: normalizeClass([_ctx.$style.credentialsIcon, { [_ctx.$style.isReady]: isCredentialsIconReady.value }]),
					"credential-type-name": unref(PROVIDER_CREDENTIAL_TYPE_MAP)[__props.agent.model.provider],
					size: __props.size === "sm" ? 16 : __props.size === "lg" ? 40 : 20
				}, null, 8, [
					"class",
					"credential-type-name",
					"size"
				]))], 2)]),
				_: 1
			}, 8, ["disabled"]);
		};
	}
});
var ChatAgentAvatar_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_ou9ns_125",
	n8nIcon: "_n8nIcon_ou9ns_132",
	lg: "_lg_ou9ns_135",
	emoji: "_emoji_ou9ns_143",
	sm: "_sm_ou9ns_148",
	md: "_md_ou9ns_152",
	credentialsIcon: "_credentialsIcon_ou9ns_163",
	isReady: "_isReady_ou9ns_166"
};
var ChatAgentAvatar_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ChatAgentAvatar_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatAgentAvatar_vue_vue_type_style_index_0_lang_module_default }]]);
export { ChatAgentAvatar_default as t };
