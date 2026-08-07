import { $ as openBlock, C as createBaseVNode, E as createElementBlock, it as renderSlot, vn as normalizeClass } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
var PageViewLayout_vue_vue_type_style_index_0_lang_module_default = {
	wrapper: "_wrapper_1bol0_125",
	content: "_content_1bol0_141"
};
//#endregion
//#region src/app/components/layouts/PageViewLayout.vue
var _sfc_main = {};
function _sfc_render(_ctx, _cache) {
	return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.wrapper) }, [renderSlot(_ctx.$slots, "header"), createBaseVNode("main", { class: normalizeClass(_ctx.$style.content) }, [renderSlot(_ctx.$slots, "default")], 2)], 2);
}
var PageViewLayout_default = /* @__PURE__ */ _plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render], ["__cssModules", { "$style": PageViewLayout_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { PageViewLayout_default as t };
