import { Cn as toDisplayString, E as createCommentVNode, Gt as unref, P as defineComponent, T as createBlock, W as mergeProps, at as renderSlot, bt as withCtx, et as openBlock, vn as normalizeClass, w as createBaseVNode, yn as normalizeProps } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { Ct as N8nKeyboardShortcut_default, Ht as N8nTooltip_default } from "./src-Cq27d_Gp.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
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
	shortcut: "_shortcut_82c6g_125",
	label: "_label_82c6g_132"
};
var KeyboardShortcutTooltip_default = /* @__PURE__ */ __plugin_vue_export_helper_default(KeyboardShortcutTooltip_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": KeyboardShortcutTooltip_vue_vue_type_style_index_0_lang_module_default }]]);
export { KeyboardShortcutTooltip_default as t };
