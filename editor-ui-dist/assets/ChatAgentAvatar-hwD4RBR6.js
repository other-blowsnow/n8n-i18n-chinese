import { C as computed, Cn as toDisplayString, D as createElementBlock, Gt as unref, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, j as createTextVNode, vn as normalizeClass } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import { gt as useI18n } from "./_MapCache-DZpzsuCB.js";
import { Gn as N8nIcon_default, ht as N8nTooltip_default } from "./src-j4VKDieO.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { en as useCredentialsStore } from "./builder.store-BjWbk2Wl.js";
import { Qr as PROVIDER_CREDENTIAL_TYPE_MAP } from "./constants-ksa9xIxI.js";
import { t as CredentialIcon_default } from "./CredentialIcon-CHvZKgl9.js";
import { d as personalAgentDefaultIcon, m as workflowAgentDefaultIcon, u as isLlmProviderModel } from "./chat.store-DnJwLoWK.js";
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
				disabled: !_ctx.tooltip
			}, {
				content: withCtx(() => [createTextVNode(toDisplayString(_ctx.agent?.name || unref(i18n).baseText("chatHub.agent.unavailableAgent")), 1)]),
				default: withCtx(() => [_ctx.agent?.icon?.type === "emoji" ? (openBlock(), createElementBlock("span", {
					key: 0,
					class: normalizeClass([_ctx.$style.emoji, _ctx.$style[_ctx.size]])
				}, toDisplayString(_ctx.agent.icon.value), 3)) : !_ctx.agent || !unref(isLlmProviderModel)(_ctx.agent.model) ? (openBlock(), createBlock(unref(N8nIcon_default), {
					key: 1,
					color: _ctx.size === "sm" ? "text-base" : "text-light",
					class: normalizeClass([_ctx.$style.n8nIcon, _ctx.$style[_ctx.size]]),
					icon: _ctx.agent?.icon?.value ?? (_ctx.agent?.model.provider === "n8n" ? unref(workflowAgentDefaultIcon) : unref(personalAgentDefaultIcon)).value,
					size: _ctx.size === "lg" ? "xxlarge" : _ctx.size === "sm" ? "large" : "xlarge"
				}, null, 8, [
					"color",
					"class",
					"icon",
					"size"
				])) : (openBlock(), createBlock(CredentialIcon_default, {
					key: 2,
					class: normalizeClass([_ctx.$style.credentialsIcon, { [_ctx.$style.isReady]: isCredentialsIconReady.value }]),
					"credential-type-name": unref(PROVIDER_CREDENTIAL_TYPE_MAP)[_ctx.agent.model.provider],
					size: _ctx.size === "sm" ? 16 : _ctx.size === "lg" ? 40 : 20
				}, null, 8, [
					"class",
					"credential-type-name",
					"size"
				]))]),
				_: 1
			}, 8, ["disabled"]);
		};
	}
});
var ChatAgentAvatar_vue_vue_type_style_index_0_lang_module_default = {
	n8nIcon: "_n8nIcon_ray3d_123",
	lg: "_lg_ray3d_126",
	emoji: "_emoji_ray3d_134",
	sm: "_sm_ray3d_139",
	md: "_md_ray3d_143",
	credentialsIcon: "_credentialsIcon_ray3d_154",
	isReady: "_isReady_ray3d_157"
};
var ChatAgentAvatar_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ChatAgentAvatar_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatAgentAvatar_vue_vue_type_style_index_0_lang_module_default }]]);
export { ChatAgentAvatar_default as t };
