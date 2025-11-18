import { E as createCommentVNode, Gt as unref, P as defineComponent, Sn as toDisplayString, T as createBlock, W as mergeProps, _n as normalizeClass, at as renderSlot, bt as withCtx, et as openBlock, vn as normalizeProps, w as createBaseVNode } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { nt as N8nKeyboardShortcut_default, vt as N8nTooltip_default } from "./src-BmrdBtCN.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
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
				placement: _ctx.placement,
				"show-after": 500,
				disabled: _ctx.disabled
			}, {
				content: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.shortcut) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.label) }, toDisplayString(_ctx.label), 3), _ctx.shortcut ? (openBlock(), createBlock(unref(N8nKeyboardShortcut_default), normalizeProps(mergeProps({ key: 0 }, _ctx.shortcut)), null, 16)) : createCommentVNode("", true)], 2)]),
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}, 8, ["placement", "disabled"]);
		};
	}
});
var KeyboardShortcutTooltip_vue_vue_type_style_index_0_lang_module_default = {
	shortcut: "_shortcut_af6oh_123",
	label: "_label_af6oh_130"
};
var KeyboardShortcutTooltip_default = /* @__PURE__ */ __plugin_vue_export_helper_default(KeyboardShortcutTooltip_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": KeyboardShortcutTooltip_vue_vue_type_style_index_0_lang_module_default }]]);
export { KeyboardShortcutTooltip_default as t };
