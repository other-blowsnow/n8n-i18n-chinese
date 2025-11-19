import { C as computed, D as createElementBlock, E as createCommentVNode, Gt as unref, M as createVNode, P as defineComponent, Sn as toDisplayString, T as createBlock, _ as Fragment, _n as normalizeClass, at as renderSlot, bt as withCtx, et as openBlock, it as renderList, j as createTextVNode, w as createBaseVNode } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { gt as useI18n } from "./_MapCache-pT3vKw8Z.js";
import { In as N8nText_default, Pn as N8nHeading_default, et as N8nLoading_default, h as N8nTags_default } from "./src-BmrdBtCN.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { b as useRouter } from "./truncate-1c7Iwk7N.js";
import { Mt as isFullTemplatesCollection, Nt as isTemplatesWorkflow, Vr as filterTemplateNodes, li as abbreviateNumber } from "./useTelemetry-C2EhNQhN.js";
import { t as useTemplatesStore } from "./templates.store-CFt_GGxU.js";
import { t as NodeIcon_default } from "./NodeIcon-B-yC7jws.js";
import { t as TimeAgo_default } from "./TimeAgo-DCz5bgJ1.js";
var TemplateDetailsBlock_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "TemplateDetailsBlock",
	props: { title: {} },
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.block) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [createVNode(unref(N8nHeading_default), {
				tag: "h3",
				size: "small",
				color: "text-base"
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(_ctx.title), 1)]),
				_: 1
			})], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [renderSlot(_ctx.$slots, "default")], 2)], 2);
		};
	}
});
var TemplateDetailsBlock_vue_vue_type_style_index_0_lang_module_default = {
	block: "_block_88jt1_123",
	header: "_header_88jt1_127",
	content: "_content_88jt1_132"
};
var TemplateDetailsBlock_default = /* @__PURE__ */ __plugin_vue_export_helper_default(TemplateDetailsBlock_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": TemplateDetailsBlock_vue_vue_type_style_index_0_lang_module_default }]]);
var TemplateDetails_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "TemplateDetails",
	props: {
		template: {},
		blockTitle: {},
		loading: { type: Boolean }
	},
	setup(__props) {
		const props = __props;
		const router = useRouter();
		const i18n = useI18n();
		const templatesStore = useTemplatesStore();
		const categoriesAsTags = computed(() => props.template && "categories" in props.template ? props.template.categories.map((category) => ({
			id: `${category.id}`,
			name: category.name
		})) : []);
		const redirectToCategory = (id) => {
			templatesStore.resetSessionId();
			router.push(`/templates?categories=${id}`);
		};
		const redirectToSearchPage = (node) => {
			templatesStore.resetSessionId();
			router.push(`/templates?search=${node.displayName}`);
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [
				createVNode(unref(N8nLoading_default), {
					loading: _ctx.loading,
					rows: 5,
					variant: "p"
				}, null, 8, ["loading"]),
				!_ctx.loading && _ctx.template && _ctx.template.nodes.length > 0 ? (openBlock(), createBlock(TemplateDetailsBlock_default, {
					key: 0,
					title: _ctx.blockTitle
				}, {
					default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.icons) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(filterTemplateNodes)(_ctx.template.nodes), (node) => {
						return openBlock(), createElementBlock("div", {
							key: node.name,
							class: normalizeClass(_ctx.$style.icon)
						}, [createVNode(NodeIcon_default, {
							"node-type": node,
							size: 24,
							"show-tooltip": true,
							onClick: ($event) => redirectToSearchPage(node)
						}, null, 8, ["node-type", "onClick"])], 2);
					}), 128))], 2)]),
					_: 1
				}, 8, ["title"])) : createCommentVNode("", true),
				!_ctx.loading && unref(isFullTemplatesCollection)(_ctx.template) && categoriesAsTags.value.length > 0 ? (openBlock(), createBlock(TemplateDetailsBlock_default, {
					key: 1,
					title: unref(i18n).baseText("template.details.categories")
				}, {
					default: withCtx(() => [createVNode(unref(N8nTags_default), {
						tags: categoriesAsTags.value,
						"onClick:tag": redirectToCategory
					}, null, 8, ["tags"])]),
					_: 1
				}, 8, ["title"])) : createCommentVNode("", true),
				!_ctx.loading && _ctx.template ? (openBlock(), createBlock(TemplateDetailsBlock_default, {
					key: 2,
					title: unref(i18n).baseText("template.details.details")
				}, {
					default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.text) }, [unref(isTemplatesWorkflow)(_ctx.template) ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 0,
						size: "small",
						color: "text-base"
					}, {
						default: withCtx(() => [
							createTextVNode(toDisplayString(unref(i18n).baseText("template.details.created")) + " ", 1),
							createVNode(TimeAgo_default, { date: _ctx.template.createdAt }, null, 8, ["date"]),
							createTextVNode(" " + toDisplayString(unref(i18n).baseText("template.details.by")) + " " + toDisplayString(_ctx.template.user ? _ctx.template.user.username : "n8n team"), 1)
						]),
						_: 1
					})) : createCommentVNode("", true)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.text) }, [unref(isTemplatesWorkflow)(_ctx.template) && _ctx.template.totalViews !== 0 ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 0,
						size: "small",
						color: "text-base"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("template.details.viewed")) + " " + toDisplayString(unref(abbreviateNumber)(_ctx.template.totalViews)) + " " + toDisplayString(unref(i18n).baseText("template.details.times")), 1)]),
						_: 1
					})) : createCommentVNode("", true)], 2)]),
					_: 1
				}, 8, ["title"])) : createCommentVNode("", true)
			]);
		};
	}
});
var TemplateDetails_vue_vue_type_style_index_0_lang_module_default = {
	icons: "_icons_18wvw_123",
	icon: "_icon_18wvw_123",
	text: "_text_18wvw_134"
};
var TemplateDetails_default = /* @__PURE__ */ __plugin_vue_export_helper_default(TemplateDetails_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": TemplateDetails_vue_vue_type_style_index_0_lang_module_default }]]);
export { TemplateDetails_default as t };
