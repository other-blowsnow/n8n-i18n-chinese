import { D as createElementBlock, E as createCommentVNode, P as defineComponent, Z as onMounted, at as renderSlot, et as openBlock, mt as useTemplateRef, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
var BaseLayout_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "BaseLayout",
	emits: ["mounted"],
	setup(__props, { emit: __emit }) {
		const layoutRef = useTemplateRef("layout");
		const emit = __emit;
		onMounted(() => {
			if (layoutRef.value) emit("mounted", layoutRef.value);
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				ref: "layout",
				class: normalizeClass(["app-grid", _ctx.$style.appGrid])
			}, [
				!!_ctx.$slots.banners ? (openBlock(), createElementBlock("div", {
					key: 0,
					id: "banners",
					class: normalizeClass(_ctx.$style.banners)
				}, [renderSlot(_ctx.$slots, "banners")], 2)) : createCommentVNode("", true),
				!!_ctx.$slots.header ? (openBlock(), createElementBlock("header", {
					key: 1,
					id: "header",
					class: normalizeClass(_ctx.$style.header)
				}, [renderSlot(_ctx.$slots, "header")], 2)) : createCommentVNode("", true),
				!!_ctx.$slots.sidebar ? (openBlock(), createElementBlock("aside", {
					key: 2,
					id: "sidebar",
					class: normalizeClass(_ctx.$style.sidebar)
				}, [renderSlot(_ctx.$slots, "sidebar")], 2)) : createCommentVNode("", true),
				createBaseVNode("main", {
					id: "content",
					class: normalizeClass(_ctx.$style.content)
				}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.contentWrapper) }, [renderSlot(_ctx.$slots, "default")], 2), !!_ctx.$slots.footer ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.contentFooter)
				}, [renderSlot(_ctx.$slots, "footer")], 2)) : createCommentVNode("", true)], 2),
				!!_ctx.$slots.aside ? (openBlock(), createElementBlock("aside", {
					key: 3,
					id: "aside",
					class: normalizeClass(_ctx.$style.aside)
				}, [renderSlot(_ctx.$slots, "aside")], 2)) : createCommentVNode("", true),
				renderSlot(_ctx.$slots, "overlays")
			], 2);
		};
	}
});
var BaseLayout_vue_vue_type_style_index_0_lang_module_default = {
	appGrid: "_appGrid_5yuj7_125",
	banners: "_banners_5yuj7_136",
	header: "_header_5yuj7_142",
	sidebar: "_sidebar_5yuj7_148",
	aside: "_aside_5yuj7_152",
	content: "_content_5yuj7_159",
	contentWrapper: "_contentWrapper_5yuj7_167",
	contentFooter: "_contentFooter_5yuj7_181"
};
var BaseLayout_default = /* @__PURE__ */ __plugin_vue_export_helper_default(BaseLayout_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": BaseLayout_vue_vue_type_style_index_0_lang_module_default }]]);
export { BaseLayout_default as t };
