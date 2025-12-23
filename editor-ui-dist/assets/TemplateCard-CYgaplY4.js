import { C as computed, Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, J as onBeforeUnmount, M as createVNode, P as defineComponent, T as createBlock, Z as onMounted, _ as Fragment, bt as withCtx, et as openBlock, h as withModifiers, it as renderList, j as createTextVNode, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import { gt as useI18n } from "./_MapCache-DZpzsuCB.js";
import { Hn as N8nText_default, Un as N8nButton_default, et as N8nCard_default } from "./src-j4VKDieO.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { y as useRouter } from "./truncate-BlCeUq7F.js";
import { Wi as useUIStore, _t as useNodeTypesStore } from "./builder.store-BjWbk2Wl.js";
import { Xo as EXPERIMENT_TEMPLATES_DATA_QUALITY_KEY } from "./constants-ksa9xIxI.js";
import { a as useTemplatesDataQualityStore } from "./templates.store-Bn6ky68e.js";
import { t as NodeIcon_default } from "./NodeIcon-BDiqVc0r.js";
var TemplateCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "TemplateCard",
	props: {
		template: {},
		tileNumber: {}
	},
	setup(__props) {
		const props = __props;
		const nodeTypesStore = useNodeTypesStore();
		const { getTemplateRoute, trackTemplateTileClick, trackTemplateShown } = useTemplatesDataQualityStore();
		const router = useRouter();
		const uiStore = useUIStore();
		const locale = useI18n();
		const templateNodes = computed(() => {
			if (!props.template?.nodes) return [];
			const uniqueNodeTypes = new Set(props.template.nodes.map((node) => node.name));
			return Array.from(uniqueNodeTypes).slice(0, 2).map((nodeType) => nodeTypesStore.getNodeType(nodeType)).filter(Boolean);
		});
		const hasTrackedShown = ref(false);
		const cardRef = ref(null);
		let observer = null;
		const trackWhenVisible = () => {
			if (hasTrackedShown.value || props.tileNumber === void 0) return;
			hasTrackedShown.value = true;
			trackTemplateShown(props.template.id, props.tileNumber);
			if (observer && cardRef.value) observer.unobserve(cardRef.value.$el);
			observer = null;
		};
		const handleUseTemplate = async () => {
			trackTemplateTileClick(props.template.id);
			await router.push(getTemplateRoute(props.template.id));
			uiStore.closeModal(EXPERIMENT_TEMPLATES_DATA_QUALITY_KEY);
		};
		onMounted(() => {
			if (!cardRef.value) return;
			if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
				trackWhenVisible();
				return;
			}
			observer = new IntersectionObserver((entries) => {
				for (const entry of entries) if (entry.isIntersecting) {
					trackWhenVisible();
					break;
				}
			});
			observer.observe(cardRef.value.$el);
		});
		onBeforeUnmount(() => {
			if (observer) {
				observer.disconnect();
				observer = null;
			}
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nCard_default), {
				ref_key: "cardRef",
				ref: cardRef,
				class: normalizeClass(_ctx.$style.suggestion),
				onClick: handleUseTemplate
			}, {
				default: withCtx(() => [createBaseVNode("div", null, [templateNodes.value.length > 0 ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass([_ctx.$style.nodes, "mb-s"])
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(templateNodes.value, (nodeType) => {
					return openBlock(), createElementBlock("div", {
						key: nodeType.name,
						class: normalizeClass(_ctx.$style.nodeIcon)
					}, [createVNode(NodeIcon_default, {
						size: 18,
						"stroke-width": 1.5,
						"node-type": nodeType
					}, null, 8, ["node-type"])], 2);
				}), 128))], 2)) : createCommentVNode("", true), createVNode(unref(N8nText_default), {
					size: "medium",
					bold: true
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(_ctx.template.name), 1)]),
					_: 1
				})]), createBaseVNode("div", { class: normalizeClass([_ctx.$style.actions, "mt-m"]) }, [createVNode(unref(N8nButton_default), {
					label: unref(locale).baseText("workflows.templateRecoV2.useTemplate"),
					type: "secondary",
					size: "mini",
					onClick: withModifiers(handleUseTemplate, ["stop"])
				}, null, 8, ["label"])], 2)]),
				_: 1
			}, 8, ["class"]);
		};
	}
});
var TemplateCard_vue_vue_type_style_index_0_lang_module_default = {
	nodes: "_nodes_ztiub_123",
	nodeIcon: "_nodeIcon_ztiub_128",
	suggestion: "_suggestion_ztiub_139",
	actions: "_actions_ztiub_148"
};
var TemplateCard_default = /* @__PURE__ */ __plugin_vue_export_helper_default(TemplateCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": TemplateCard_vue_vue_type_style_index_0_lang_module_default }]]);
export { TemplateCard_default as t };
