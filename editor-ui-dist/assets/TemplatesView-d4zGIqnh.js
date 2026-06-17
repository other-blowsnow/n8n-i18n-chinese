import { $ as openBlock, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, N as defineComponent, T as createCommentVNode, it as renderSlot, j as createVNode, vn as normalizeClass } from "./vue.runtime.esm-bundler-CiTcVoZc.js";
import { s as useI18n } from "./src-Ug6bR7N9.js";
import { Ya as N8nIcon_default, gt as useRouter } from "./src-BY3LHeey.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
//#region src/app/components/GoBackButton.vue?vue&type=script&setup=true&lang.ts
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
	wrapper: "_wrapper_trrfk_125",
	icon: "_icon_trrfk_130",
	text: "_text_trrfk_131"
};
var GoBackButton_default = /* @__PURE__ */ _plugin_vue_export_helper_default(GoBackButton_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": GoBackButton_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/workflows/templates/views/TemplatesView.vue?vue&type=script&setup=true&lang.ts
var TemplatesView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "TemplatesView",
	props: {
		goBackEnabled: {
			type: Boolean,
			default: false
		},
		fullWidth: {
			type: Boolean,
			default: false
		}
	},
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass([_ctx.$style.template, { [_ctx.$style.fullWidth]: __props.fullWidth }]) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.container) }, [__props.goBackEnabled ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.header)
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.goBack) }, [createVNode(GoBackButton_default)], 2), renderSlot(_ctx.$slots, "header")], 2)) : createCommentVNode("", true), createBaseVNode("div", null, [renderSlot(_ctx.$slots, "content")])], 2)], 2);
		};
	}
});
var TemplatesView_vue_vue_type_style_index_0_lang_module_default = {
	template: "_template_cwiqq_125",
	fullWidth: "_fullWidth_cwiqq_137",
	container: "_container_cwiqq_142",
	header: "_header_cwiqq_146",
	goBack: "_goBack_cwiqq_152"
};
var TemplatesView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(TemplatesView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": TemplatesView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { TemplatesView_default as t };
