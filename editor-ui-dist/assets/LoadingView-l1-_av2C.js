import { $ as openBlock, C as createBaseVNode, E as createElementBlock, Gt as unref, N as defineComponent, j as createVNode, vn as normalizeClass } from "./vue.runtime.esm-bundler-CDDUUZhE.js";
import { P as N8nSpinner_default } from "./src-BVC_ZvSs.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
//#region src/app/views/LoadingView.vue?vue&type=script&setup=true&lang.ts
var LoadingView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "LoadingView",
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.wrapper),
				"data-test-id": "node-view-loader"
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.spinner) }, [createVNode(unref(N8nSpinner_default))], 2)], 2);
		};
	}
});
var LoadingView_vue_vue_type_style_index_0_lang_module_default = {
	wrapper: "_wrapper_y2oo6_125",
	spinner: "_spinner_y2oo6_137"
};
var LoadingView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(LoadingView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": LoadingView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { LoadingView_default as t };
