import { D as createElementBlock, E as createCommentVNode, Gt as unref, M as createVNode, P as defineComponent, Sn as toDisplayString, _n as normalizeClass, at as renderSlot, et as openBlock, w as createBaseVNode } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { gt as useI18n } from "./_MapCache-pT3vKw8Z.js";
import { zn as N8nIcon_default } from "./src-BmrdBtCN.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { b as useRouter } from "./truncate-1c7Iwk7N.js";
var _hoisted_1 = ["textContent"];
var GoBackButton_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "GoBackButton",
	setup(__props) {
		const router = useRouter();
		const i18n = useI18n();
		const navigateTo = () => {
			router.back();
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.wrapper),
				onClick: navigateTo
			}, [createVNode(unref(N8nIcon_default), {
				class: normalizeClass(_ctx.$style.icon),
				icon: "arrow-left"
			}, null, 8, ["class"]), createBaseVNode("div", {
				class: normalizeClass(_ctx.$style.text),
				textContent: toDisplayString(unref(i18n).baseText("template.buttons.goBackButton"))
			}, null, 10, _hoisted_1)], 2);
		};
	}
});
var GoBackButton_vue_vue_type_style_index_0_lang_module_default = {
	wrapper: "_wrapper_1reb8_123",
	icon: "_icon_1reb8_128",
	text: "_text_1reb8_129"
};
var GoBackButton_default = /* @__PURE__ */ __plugin_vue_export_helper_default(GoBackButton_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": GoBackButton_vue_vue_type_style_index_0_lang_module_default }]]);
var TemplatesView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "TemplatesView",
	props: { goBackEnabled: {
		type: Boolean,
		default: false
	} },
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.template) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.container) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [_ctx.goBackEnabled ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.goBack)
			}, [createVNode(GoBackButton_default)], 2)) : createCommentVNode("", true), renderSlot(_ctx.$slots, "header")], 2), createBaseVNode("div", null, [renderSlot(_ctx.$slots, "content")])], 2)], 2);
		};
	}
});
var TemplatesView_vue_vue_type_style_index_0_lang_module_default = {
	template: "_template_1xuli_123",
	container: "_container_1xuli_136",
	header: "_header_1xuli_140",
	goBack: "_goBack_1xuli_146"
};
var TemplatesView_default = /* @__PURE__ */ __plugin_vue_export_helper_default(TemplatesView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": TemplatesView_vue_vue_type_style_index_0_lang_module_default }]]);
export { TemplatesView_default as t };
