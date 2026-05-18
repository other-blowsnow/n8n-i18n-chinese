import { o as __toESM } from "./chunk-CC9Q-vWm.js";
import { $ as openBlock, E as createElementBlock } from "./vue.runtime.esm-bundler-Bw8GKr4Y.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { t as require_sanitize_html } from "./sanitize-html-qWBDDsBK.js";
//#region src/features/ndv/runData/components/RunDataHtml.vue?vue&type=script&lang.ts
var import_sanitize_html = /* @__PURE__ */ __toESM(require_sanitize_html(), 1);
var sanitizeOptions = {
	allowVulnerableTags: false,
	enforceHtmlBoundary: false,
	disallowedTagsMode: "discard",
	allowedTags: [
		...import_sanitize_html.defaults.allowedTags,
		"style",
		"img",
		"title"
	],
	allowedAttributes: {
		...import_sanitize_html.defaults.allowedAttributes,
		"*": ["class", "style"]
	},
	transformTags: { head: "" }
};
var RunDataHtml_vue_vue_type_script_lang_default = {
	name: "RunDataHtml",
	props: { inputHtml: {
		type: String,
		required: true
	} },
	computed: { sanitizedHtml() {
		return (0, import_sanitize_html.default)(this.inputHtml, sanitizeOptions);
	} }
};
//#endregion
//#region src/features/ndv/runData/components/RunDataHtml.vue
var _hoisted_1 = ["srcdoc"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	return openBlock(), createElementBlock("iframe", {
		class: "__html-display",
		srcdoc: $options.sanitizedHtml
	}, null, 8, _hoisted_1);
}
var RunDataHtml_default = /* @__PURE__ */ _plugin_vue_export_helper_default(RunDataHtml_vue_vue_type_script_lang_default, [["render", _sfc_render]]);
//#endregion
export { RunDataHtml_default as t };
