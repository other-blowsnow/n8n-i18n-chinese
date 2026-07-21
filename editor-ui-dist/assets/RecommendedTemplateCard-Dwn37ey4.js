import { o as __toESM } from "./chunk-CC9Q-vWm.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, _ as Fragment, bt as withCtx, it as renderSlot, j as createVNode, q as onBeforeUnmount, rt as renderList, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { ot as useI18n } from "./core-Cb7jeMu8.js";
import { Rt as N8nCard_default, ro as N8nIcon_default, rt as N8nTag_default, to as N8nText_default, wt as useRouter } from "./src-DAbbz2gO.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { _ as useNodeTypesStore, f as getNodeTypeDisplayableCredentials } from "./workflowDocument.store-CUnvofeB.js";
import { t as require_uniqBy } from "./uniqBy-WvDPPzHV.js";
import { n as keyFromCredentialTypeAndName, r as normalizeTemplateNodeCredentials } from "./templateTransforms-e8Z1Il6Q.js";
import { t as NodeIcon_default } from "./NodeIcon-C8JZsKVW.js";
import { t as useRecommendedTemplatesStore } from "./recommendedTemplates.store-DwycaQUe.js";
//#region src/features/workflows/templates/recommendations/components/RecommendedTemplateCard.vue?vue&type=script&setup=true&lang.ts
var import_uniqBy = /* @__PURE__ */ __toESM(require_uniqBy(), 1);
var _hoisted_1 = ["src", "alt"];
var _hoisted_2 = { key: 2 };
var RecommendedTemplateCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "RecommendedTemplateCard",
	props: {
		template: {},
		tileNumber: {},
		showDetails: { type: Boolean },
		clickable: {
			type: Boolean,
			default: false
		}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const nodeTypesStore = useNodeTypesStore();
		const { getTemplateRoute, trackTemplateTileClick, trackTemplateShown } = useRecommendedTemplatesStore();
		const router = useRouter();
		const templateNodes = computed(() => {
			if (!props.template?.nodes) return [];
			const uniqueNodeTypes = (0, import_uniqBy.default)(props.template.nodes, (node) => node.icon).map((node) => node.name);
			return Array.from(uniqueNodeTypes).slice(0, 2).map((nodeType) => nodeTypesStore.getNodeType(nodeType)).filter(Boolean);
		});
		const credentialsCount = computed(() => {
			const workflowNodes = props.template?.workflow?.nodes ?? [];
			if (workflowNodes.length === 0) return 0;
			const uniqueCredentialKeys = /* @__PURE__ */ new Set();
			for (const node of workflowNodes) {
				const requiredCredentials = getNodeTypeDisplayableCredentials(nodeTypesStore, node);
				if (requiredCredentials.length === 0) continue;
				const normalizedNodeCredentials = node.credentials ? normalizeTemplateNodeCredentials(node.credentials) : {};
				for (const credentialDescription of requiredCredentials) {
					const credentialType = credentialDescription.name;
					const key = keyFromCredentialTypeAndName(credentialType, normalizedNodeCredentials[credentialType] ?? "");
					uniqueCredentialKeys.add(key);
				}
			}
			return uniqueCredentialKeys.size;
		});
		const setupTimeMinutes = computed(() => {
			return 2 + credentialsCount.value * 3;
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
			if (!props.clickable) return;
			trackTemplateTileClick(props.template.id);
			await router.push(getTemplateRoute(props.template.id));
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
				class: normalizeClass([_ctx.$style.suggestion, { [_ctx.$style.clickable]: __props.clickable }]),
				onClick: handleUseTemplate
			}, {
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardContent) }, [
					createVNode(unref(N8nText_default), {
						size: "large",
						bold: true,
						class: normalizeClass(_ctx.$style.title)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(__props.template.name), 1)]),
						_: 1
					}, 8, ["class"]),
					__props.template.user ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.userInfo)
					}, [
						__props.template.user.avatar ? (openBlock(), createElementBlock("img", {
							key: 0,
							src: __props.template.user.avatar,
							alt: __props.template.user.name,
							class: normalizeClass(_ctx.$style.userAvatar)
						}, null, 10, _hoisted_1)) : (openBlock(), createBlock(unref(N8nIcon_default), {
							key: 1,
							icon: "user",
							size: 16
						})),
						createVNode(unref(N8nText_default), { size: "medium" }, {
							default: withCtx(() => [createTextVNode(toDisplayString(__props.template.user.name), 1)]),
							_: 1
						}),
						__props.template.user.verified ? (openBlock(), createElementBlock("span", {
							key: 2,
							class: normalizeClass(_ctx.$style.verifiedBadge)
						}, [createVNode(unref(N8nIcon_default), {
							icon: "shield-half",
							size: 16
						}), createVNode(unref(N8nText_default), { size: "medium" }, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("templates.card.verified")), 1)]),
							_: 1
						})], 2)) : createCommentVNode("", true)
					], 2)) : createCommentVNode("", true),
					__props.showDetails && __props.template.categories?.length ? (openBlock(), createElementBlock("div", {
						key: 1,
						class: normalizeClass(_ctx.$style.categories)
					}, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.template.categories, (category) => {
						return openBlock(), createBlock(unref(N8nTag_default), {
							key: category.id,
							text: category.name,
							clickable: false,
							class: normalizeClass(_ctx.$style.categoryTag)
						}, null, 8, ["text", "class"]);
					}), 128))], 2)) : createCommentVNode("", true),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.statItem) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.statItemLeft) }, [__props.template.readyToDemo === true ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass([_ctx.$style.statItem, _ctx.$style.mintGreen])
					}, [createVNode(unref(N8nIcon_default), {
						icon: "zap",
						size: 16
					}), createVNode(unref(N8nText_default), { size: "medium" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("templates.card.readyToRun")), 1)]),
						_: 1
					})], 2)) : (openBlock(), createElementBlock("div", {
						key: 1,
						class: normalizeClass(_ctx.$style.statItem)
					}, [createVNode(unref(N8nIcon_default), {
						icon: "clock",
						size: 16
					}), createVNode(unref(N8nText_default), { size: "medium" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("templates.card.setupTime", { interpolate: { count: setupTimeMinutes.value } })), 1)]),
						_: 1
					})], 2))], 2), templateNodes.value.length > 0 ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.nodes)
					}, [(openBlock(true), createElementBlock(Fragment, null, renderList(templateNodes.value, (nodeType) => {
						return openBlock(), createBlock(NodeIcon_default, {
							key: nodeType.name,
							size: 20,
							"node-type": nodeType
						}, null, 8, ["node-type"]);
					}), 128))], 2)) : createCommentVNode("", true)], 2),
					_ctx.$slots.belowContent ? (openBlock(), createElementBlock("div", _hoisted_2, [renderSlot(_ctx.$slots, "belowContent")])) : createCommentVNode("", true)
				], 2)]),
				_: 3
			}, 8, ["class"]);
		};
	}
});
var RecommendedTemplateCard_vue_vue_type_style_index_0_lang_module_default = {
	suggestion: "_suggestion_16wa4_125",
	clickable: "_clickable_16wa4_134",
	title: "_title_16wa4_140",
	cardContent: "_cardContent_16wa4_145",
	nodes: "_nodes_16wa4_152",
	statItemLeft: "_statItemLeft_16wa4_157",
	userInfo: "_userInfo_16wa4_164",
	userAvatar: "_userAvatar_16wa4_171",
	verifiedBadge: "_verifiedBadge_16wa4_178",
	categories: "_categories_16wa4_185",
	categoryTag: "_categoryTag_16wa4_191",
	statItem: "_statItem_16wa4_157",
	mintGreen: "_mintGreen_16wa4_204"
};
var RecommendedTemplateCard_default = /* @__PURE__ */ _plugin_vue_export_helper_default(RecommendedTemplateCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": RecommendedTemplateCard_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { RecommendedTemplateCard_default as t };
