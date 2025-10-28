import { D as createElementBlock, _n as normalizeClass, at as renderSlot, et as openBlock, w as createBaseVNode } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
var PageViewLayout_vue_vue_type_style_index_0_lang_module_default = {
	wrapper: "_wrapper_e6hlb_123",
	content: "_content_e6hlb_139"
};
var _sfc_main = {};
function _sfc_render(_ctx, _cache) {
	return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.wrapper) }, [renderSlot(_ctx.$slots, "header"), createBaseVNode("main", { class: normalizeClass(_ctx.$style.content) }, [renderSlot(_ctx.$slots, "default")], 2)], 2);
}
var PageViewLayout_default = /* @__PURE__ */ __plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render], ["__cssModules", { "$style": PageViewLayout_vue_vue_type_style_index_0_lang_module_default }]]);
export { PageViewLayout_default as t };
