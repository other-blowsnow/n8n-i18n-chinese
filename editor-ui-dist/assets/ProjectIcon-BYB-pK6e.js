import { D as createElementBlock, E as createCommentVNode, Gt as unref, P as defineComponent, Sn as toDisplayString, T as createBlock, _n as normalizeClass, bt as withCtx, et as openBlock, j as createTextVNode } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { In as N8nText_default, zn as N8nIcon_default } from "./src-BmrdBtCN.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
function isIconOrEmoji(icon$1) {
	return typeof icon$1 === "object" && icon$1 !== null && "type" in icon$1 && (icon$1.type === "icon" || icon$1.type === "emoji") && "value" in icon$1 && typeof icon$1.value === "string";
}
var ProjectIcon_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ProjectIcon",
	props: {
		icon: {},
		size: { default: "medium" },
		round: {
			type: Boolean,
			default: false
		},
		borderLess: {
			type: Boolean,
			default: false
		},
		color: { default: "text-base" }
	},
	setup(__props) {
		const props = __props;
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass([
				_ctx.$style.container,
				_ctx.$style[props.size],
				{
					[_ctx.$style.round]: props.round,
					[_ctx.$style.borderless]: props.borderLess
				}
			]) }, [_ctx.icon.type === "icon" ? (openBlock(), createBlock(unref(N8nIcon_default), {
				key: 0,
				icon: _ctx.icon.value,
				class: normalizeClass(_ctx.$style.icon),
				color: _ctx.color
			}, null, 8, [
				"icon",
				"class",
				"color"
			])) : _ctx.icon.type === "emoji" ? (openBlock(), createBlock(unref(N8nText_default), {
				key: 1,
				color: "text-light",
				class: normalizeClass(_ctx.$style.emoji)
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(_ctx.icon.value), 1)]),
				_: 1
			}, 8, ["class"])) : createCommentVNode("", true)], 2);
		};
	}
});
var ProjectIcon_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_kzol1_123",
	round: "_round_kzol1_130",
	borderless: "_borderless_kzol1_133",
	mini: "_mini_kzol1_137",
	icon: "_icon_kzol1_141",
	emoji: "_emoji_kzol1_144",
	small: "_small_kzol1_148",
	medium: "_medium_kzol1_156",
	large: "_large_kzol1_164"
};
var ProjectIcon_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ProjectIcon_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ProjectIcon_vue_vue_type_style_index_0_lang_module_default }]]);
export { isIconOrEmoji as n, ProjectIcon_default as t };
