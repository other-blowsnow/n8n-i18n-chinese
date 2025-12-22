import { o as __toESM } from "./chunk-6z4oVpB-.js";
import { D as createElementBlock, et as openBlock } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { t as require_sanitize_html } from "./sanitize-html-Cft-jOcY.js";
var import_sanitize_html = /* @__PURE__ */ __toESM(require_sanitize_html());
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
var _hoisted_1 = ["srcdoc"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	return openBlock(), createElementBlock("iframe", {
		class: "__html-display",
		srcdoc: $options.sanitizedHtml
	}, null, 8, _hoisted_1);
}
var RunDataHtml_default = /* @__PURE__ */ __plugin_vue_export_helper_default(RunDataHtml_vue_vue_type_script_lang_default, [["render", _sfc_render]]);
export { RunDataHtml_default as t };
