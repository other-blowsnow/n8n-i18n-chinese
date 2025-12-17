import { C as computed, Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, P as defineComponent, _ as Fragment, et as openBlock, it as renderList, j as createTextVNode, vn as normalizeClass } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
function splitTextBySearch(text, search) {
	if (!search) return [{
		isMatched: false,
		content: text
	}];
	const escapeRegExp = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
	const pattern = new RegExp(`(${escapeRegExp(search)})`, "i");
	return text.split(pattern).map((part) => ({
		isMatched: pattern.test(part),
		content: part
	})).filter((part) => part.content !== "");
}
var _hoisted_1 = { key: 0 };
var _hoisted_2 = ["textContent"];
var TextWithHighlights_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "TextWithHighlights",
	props: {
		content: { type: [
			String,
			Object,
			Number,
			Boolean,
			null
		] },
		search: {}
	},
	setup(__props) {
		const props = __props;
		const parts = computed(() => {
			return props.search && typeof props.content === "string" ? splitTextBySearch(props.content, props.search) : [];
		});
		return (_ctx, _cache) => {
			return parts.value.length && typeof props.content === "string" ? (openBlock(), createElementBlock("span", _hoisted_1, [(openBlock(true), createElementBlock(Fragment, null, renderList(parts.value, (part, index) => {
				return openBlock(), createElementBlock(Fragment, null, [part.isMatched && part.content ? (openBlock(), createElementBlock("mark", { key: `mark-${index}` }, toDisplayString(part.content), 1)) : part.content ? (openBlock(), createElementBlock("span", { key: `span-${index}` }, toDisplayString(part.content), 1)) : createCommentVNode("", true)], 64);
			}), 256))])) : (openBlock(), createElementBlock("span", {
				key: 1,
				class: normalizeClass(_ctx.$style.content)
			}, [typeof props.content === "string" ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(props.content.split("\n"), (line, index) => {
				return openBlock(), createElementBlock("span", { key: `line-${index}` }, [index > 0 ? (openBlock(), createElementBlock("span", {
					key: 0,
					class: normalizeClass(_ctx.$style.newLine)
				}, "\\n", 2)) : createCommentVNode("", true), createTextVNode(toDisplayString(line), 1)]);
			}), 128)) : (openBlock(), createElementBlock("span", {
				key: 1,
				textContent: toDisplayString(props.content)
			}, null, 8, _hoisted_2))], 2));
		};
	}
});
var TextWithHighlights_vue_vue_type_style_index_0_lang_module_default = {
	content: "_content_90cst_123",
	newLine: "_newLine_90cst_123"
};
var TextWithHighlights_default = /* @__PURE__ */ __plugin_vue_export_helper_default(TextWithHighlights_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": TextWithHighlights_vue_vue_type_style_index_0_lang_module_default }]]);
export { splitTextBySearch as n, TextWithHighlights_default as t };
