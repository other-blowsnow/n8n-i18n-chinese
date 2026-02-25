import { D as createElementBlock, Gt as unref, M as createVNode, P as defineComponent, et as openBlock, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { F as N8nSpinner_default } from "./src-BPnX41kb.js";
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
	wrapper: "_wrapper_tjus5_125",
	spinner: "_spinner_tjus5_132"
};
var LoadingView_default = /* @__PURE__ */ __plugin_vue_export_helper_default(LoadingView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": LoadingView_vue_vue_type_style_index_0_lang_module_default }]]);
export { LoadingView_default as t };
