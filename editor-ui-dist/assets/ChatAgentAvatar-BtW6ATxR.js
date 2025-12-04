import { Cn as toDisplayString, Gt as unref, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, j as createTextVNode, k as createSlots, vn as normalizeClass } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import { Ct as N8nAvatar_default, Yn as N8nIcon_default, yt as N8nTooltip_default } from "./src-BDzAa1Y3.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { Zr as PROVIDER_CREDENTIAL_TYPE_MAP } from "./constants-CuU0cMc8.js";
import { t as CredentialIcon_default } from "./CredentialIcon-CQYfUFHx.js";
var ChatAgentAvatar_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ChatAgentAvatar",
	props: {
		agent: {},
		size: {},
		tooltip: { type: Boolean }
	},
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nTooltip_default), {
				"show-after": 100,
				placement: "left",
				disabled: !_ctx.tooltip
			}, createSlots({
				default: withCtx(() => [!_ctx.agent ? (openBlock(), createBlock(unref(N8nIcon_default), {
					key: 0,
					icon: "messages-square",
					size: _ctx.size === "lg" ? "xxlarge" : _ctx.size === "sm" ? "large" : "xlarge"
				}, null, 8, ["size"])) : _ctx.agent.model.provider === "custom-agent" || _ctx.agent.model.provider === "n8n" ? (openBlock(), createBlock(unref(N8nAvatar_default), {
					key: 1,
					class: normalizeClass([_ctx.$style.avatar, _ctx.$style[_ctx.size]]),
					"first-name": _ctx.agent.name,
					size: _ctx.size === "lg" ? "medium" : _ctx.size === "sm" ? "xxsmall" : "xsmall"
				}, null, 8, [
					"class",
					"first-name",
					"size"
				])) : (openBlock(), createBlock(CredentialIcon_default, {
					key: 2,
					"credential-type-name": unref(PROVIDER_CREDENTIAL_TYPE_MAP)[_ctx.agent.model.provider],
					size: _ctx.size === "sm" ? 16 : _ctx.size === "lg" ? 40 : 20
				}, null, 8, ["credential-type-name", "size"]))]),
				_: 2
			}, [_ctx.agent ? {
				name: "content",
				fn: withCtx(() => [createTextVNode(toDisplayString(_ctx.agent.name), 1)]),
				key: "0"
			} : void 0]), 1032, ["disabled"]);
		};
	}
});
var ChatAgentAvatar_vue_vue_type_style_index_0_lang_module_default = {
	avatar: "_avatar_pqn2d_123",
	md: "_md_pqn2d_123"
};
var ChatAgentAvatar_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ChatAgentAvatar_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ChatAgentAvatar_vue_vue_type_style_index_0_lang_module_default }]]);
export { ChatAgentAvatar_default as t };
