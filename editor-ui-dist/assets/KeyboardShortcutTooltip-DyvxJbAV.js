import { $ as openBlock, C as createBaseVNode, Cn as toDisplayString, Gt as unref, N as defineComponent, T as createCommentVNode, U as mergeProps, bt as withCtx, it as renderSlot, vn as normalizeClass, w as createBlock, yn as normalizeProps } from "./vue.runtime.esm-bundler-CiTcVoZc.js";
import { Rt as N8nKeyboardShortcut_default, zi as N8nTooltip_default } from "./src-BY3LHeey.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
//#region src/app/components/KeyboardShortcutTooltip.vue?vue&type=script&setup=true&lang.ts
var KeyboardShortcutTooltip_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "KeyboardShortcutTooltip",
	props: {
		label: {},
		shortcut: { default: void 0 },
		placement: { default: "top" },
		disabled: { type: Boolean }
	},
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nTooltip_default), {
				placement: __props.placement,
				"show-after": 500,
				disabled: __props.disabled
			}, {
				content: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.shortcut) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.label) }, toDisplayString(__props.label), 3), __props.shortcut ? (openBlock(), createBlock(unref(N8nKeyboardShortcut_default), normalizeProps(mergeProps({ key: 0 }, __props.shortcut)), null, 16)) : createCommentVNode("", true)], 2)]),
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 8, ["placement", "disabled"]);
		};
	}
});
var KeyboardShortcutTooltip_vue_vue_type_style_index_0_lang_module_default = {
	shortcut: "_shortcut_1so0d_125",
	label: "_label_1so0d_135"
};
var KeyboardShortcutTooltip_default = /* @__PURE__ */ _plugin_vue_export_helper_default(KeyboardShortcutTooltip_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": KeyboardShortcutTooltip_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { KeyboardShortcutTooltip_default as t };
