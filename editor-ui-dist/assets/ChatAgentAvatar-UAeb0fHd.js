import { C as computed, Cn as toDisplayString, D as createElementBlock, Gt as unref, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, j as createTextVNode, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import { _t as useI18n } from "./_MapCache-BkdQjeTY.js";
import { ht as N8nTooltip_default, wn as N8nIcon_default } from "./src-0Q2qrNp2.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { gn as useCredentialsStore } from "./builder.store-qZ4NaPKL.js";
import { Yr as PROVIDER_CREDENTIAL_TYPE_MAP } from "./constants-BRw0fx_r.js";
import { t as CredentialIcon_default } from "./CredentialIcon-y2-C14wd.js";
import { d as personalAgentDefaultIcon, m as workflowAgentDefaultIcon, u as isLlmProviderModel } from "./chat.store-CbEpWMx3.js";
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
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.container) }, [_ctx.agent?.icon?.type === "emoji" ? (openBlock(), createElementBlock("span", {
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
				]))], 2)]),
				_: 1
			}, 8, ["disabled"]);
		};
	}
});
var ChatAgentAvatar_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_6zc6p_123",
	n8nIcon: "_n8nIcon_6zc6p_133",
	lg: "_lg_6zc6p_136",
	emoji: "_emoji_6zc6p_144",
	sm: "_sm_6zc6p_149",
	md: "_md_6zc6p_153",
	credentialsIcon: "_credentialsIcon_6zc6p_164",
	isReady: "_isReady_6zc6p_167"
};
var ChatAgentAvatar_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ChatAgentAvatar_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatAgentAvatar_vue_vue_type_style_index_0_lang_module_default }]]);
export { ChatAgentAvatar_default as t };
