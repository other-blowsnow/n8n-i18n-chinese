import { Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, Gt as unref, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, j as createTextVNode, vn as normalizeClass } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { Hi as N8nIcon_default, zi as N8nText_default } from "./src-Cq27d_Gp.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
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
			]) }, [__props.icon.type === "icon" ? (openBlock(), createBlock(unref(N8nIcon_default), {
				key: 0,
				icon: __props.icon.value,
				class: normalizeClass(_ctx.$style.icon),
				color: __props.color
			}, null, 8, [
				"icon",
				"class",
				"color"
			])) : __props.icon.type === "emoji" ? (openBlock(), createBlock(unref(N8nText_default), {
				key: 1,
				color: "text-light",
				class: normalizeClass(_ctx.$style.emoji)
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(__props.icon.value), 1)]),
				_: 1
			}, 8, ["class"])) : createCommentVNode("", true)], 2);
		};
	}
});
var ProjectIcon_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_rc0yc_125",
	round: "_round_rc0yc_132",
	borderless: "_borderless_rc0yc_135",
	mini: "_mini_rc0yc_139",
	icon: "_icon_rc0yc_143",
	emoji: "_emoji_rc0yc_146",
	small: "_small_rc0yc_150",
	medium: "_medium_rc0yc_158",
	large: "_large_rc0yc_166"
};
var ProjectIcon_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ProjectIcon_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ProjectIcon_vue_vue_type_style_index_0_lang_module_default }]]);
export { isIconOrEmoji as n, ProjectIcon_default as t };
