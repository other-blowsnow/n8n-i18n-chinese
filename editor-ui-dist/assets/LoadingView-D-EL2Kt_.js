import { $ as openBlock, C as createBaseVNode, E as createElementBlock, N as defineComponent, Wt as unref, _n as normalizeClass, j as createVNode } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import { R as N8nSpinner_default } from "./src-r-l70KdD.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
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
var LoadingView_default = /* @__PURE__ */ __plugin_vue_export_helper_default(LoadingView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": LoadingView_vue_vue_type_style_index_0_lang_module_default }]]);
export { LoadingView_default as t };
