import { C as computed, Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, T as createBlock, Z as onMounted, _t as watch, bt as withCtx, et as openBlock, j as createTextVNode, k as createSlots, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import { gt as useI18n } from "./_MapCache-DZpzsuCB.js";
import { Bn as N8nHeading_default, F as N8nMarkdown_default, Hn as N8nText_default, at as N8nLoading_default } from "./src-j4VKDieO.js";
import "./en-b3uD8cvU.js";
import "./preload-helper-CR0ecmWK.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { v as useRoute, y as useRouter } from "./truncate-BlCeUq7F.js";
import "./empty-BuGRxzl4.js";
import { Kt as isFullTemplatesCollection, Nn as useDocumentTitle, _t as useNodeTypesStore, i as useExternalHooks, p as useTelemetry } from "./builder.store-BjWbk2Wl.js";
import "./sanitize-html-Cft-jOcY.js";
import "./CalendarDate-B-JEhNYg.js";
import "./path-browserify-BgjP7RyT.js";
import { Vo as VIEWS } from "./constants-ksa9xIxI.js";
import "./merge-D6lLi7TL.js";
import "./_baseOrderBy-B2FQHwl_.js";
import "./dateformat-hG8NERse.js";
import "./useDebounce-Cb7xvwM5.js";
import "./cloudPlan.store-2sNk8KGc.js";
import { t as useTemplatesStore } from "./templates.store-Bn6ky68e.js";
import "./nodeIcon-7dyMxFgB.js";
import "./NodeIcon-BDiqVc0r.js";
import "./nodeTransforms-BqV90EB_.js";
import "./TimeAgo-i8FaEReL.js";
import "./templateTransforms-DxlsHqIx.js";
import { n as useTemplateWorkflow } from "./templateActions-DxSA6WcH.js";
import { t as TemplatesView_default } from "./TemplatesView-DZuVtR9D.js";
import { t as TemplateDetails_default } from "./TemplateDetails-6diOUor9.js";
import { t as TemplateList_default } from "./TemplateList-B0eVAl87.js";
var TemplatesCollectionView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "TemplatesCollectionView",
	setup(__props) {
		const externalHooks = useExternalHooks();
		const templatesStore = useTemplatesStore();
		const nodeTypesStore = useNodeTypesStore();
		const route = useRoute();
		const router = useRouter();
		const telemetry = useTelemetry();
		const i18n = useI18n();
		const documentTitle = useDocumentTitle();
		const loading = ref(true);
		const notFoundError = ref(false);
		const collectionId = computed(() => {
			const { id } = route.params;
			return Array.isArray(id) ? id[0] : id;
		});
		const collection = computed(() => templatesStore.getCollectionById[collectionId.value]);
		const collectionWorkflows = computed(() => {
			if (!collection.value || loading.value) return [];
			return collection.value.workflows.map(({ id }) => templatesStore.getTemplatesById(id.toString())).filter((workflow) => !!workflow);
		});
		const scrollToTop = () => {
			setTimeout(() => {
				const contentArea = document.getElementById("content");
				if (contentArea) contentArea.scrollTo({
					top: 0,
					behavior: "smooth"
				});
			}, 50);
		};
		const onOpenTemplate = ({ event, id }) => {
			navigateTo(event, VIEWS.TEMPLATE, `${id}`);
		};
		const onUseWorkflow = async ({ event, id }) => {
			await useTemplateWorkflow({
				router,
				templateId: `${id}`,
				inNewBrowserTab: event.metaKey || event.ctrlKey,
				templatesStore,
				externalHooks,
				nodeTypesStore,
				telemetry,
				source: "template_list"
			});
		};
		const navigateTo = (e, page, id) => {
			if (e.metaKey || e.ctrlKey) {
				const { href } = router.resolve({
					name: page,
					params: { id }
				});
				window.open(href, "_blank");
				return;
			} else router.push({
				name: page,
				params: { id }
			});
		};
		watch(() => collection.value, () => {
			if (collection.value && "full" in collection.value && collection.value.full) documentTitle.set(`Template collection: ${collection.value.name}`);
			else documentTitle.set("Templates");
		});
		onMounted(async () => {
			scrollToTop();
			if (collection.value && "full" in collection.value && collection.value.full) {
				loading.value = false;
				return;
			}
			try {
				await templatesStore.fetchCollectionById(collectionId.value);
			} catch (e) {
				notFoundError.value = true;
			}
			loading.value = false;
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(TemplatesView_default, { "go-back-enabled": true }, createSlots({
				header: withCtx(() => [!notFoundError.value ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.wrapper)
				}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.title) }, [
					collection.value && collection.value.name ? (openBlock(), createBlock(unref(N8nHeading_default), {
						key: 0,
						tag: "h1",
						size: "2xlarge"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(collection.value.name), 1)]),
						_: 1
					})) : createCommentVNode("", true),
					collection.value && collection.value.name ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 1,
						color: "text-base",
						size: "small"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("templates.collection")), 1)]),
						_: 1
					})) : createCommentVNode("", true),
					createVNode(unref(N8nLoading_default), {
						loading: !collection.value || !collection.value.name,
						rows: 2,
						variant: "h1"
					}, null, 8, ["loading"])
				], 2)], 2)) : (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.notFound)
				}, [createVNode(unref(N8nText_default), { color: "text-base" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("templates.collectionsNotFound")), 1)]),
					_: 1
				})], 2))]),
				_: 2
			}, [!notFoundError.value ? {
				name: "content",
				fn: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.wrapper) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.mainContent) }, [loading.value || unref(isFullTemplatesCollection)(collection.value) ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.markdown)
				}, [createVNode(unref(N8nMarkdown_default), {
					content: unref(isFullTemplatesCollection)(collection.value) && collection.value.description ? collection.value.description : "",
					images: unref(isFullTemplatesCollection)(collection.value) && collection.value.image ? collection.value.image : void 0,
					loading: loading.value
				}, null, 8, [
					"content",
					"images",
					"loading"
				])], 2)) : createCommentVNode("", true), createVNode(TemplateList_default, {
					"infinite-scroll-enabled": false,
					loading: loading.value,
					"use-workflow-button": true,
					workflows: collectionWorkflows.value,
					onUseWorkflow,
					onOpenTemplate
				}, null, 8, ["loading", "workflows"])], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.details) }, [createVNode(TemplateDetails_default, {
					"block-title": unref(i18n).baseText("template.details.appsInTheCollection"),
					loading: loading.value,
					template: collection.value
				}, null, 8, [
					"block-title",
					"loading",
					"template"
				])], 2)], 2)]),
				key: "0"
			} : void 0]), 1024);
		};
	}
});
var TemplatesCollectionView_vue_vue_type_style_index_0_lang_module_default = {
	wrapper: "_wrapper_1m9iq_123",
	notFound: "_notFound_1m9iq_133",
	title: "_title_1m9iq_137",
	button: "_button_1m9iq_141",
	mainContent: "_mainContent_1m9iq_145",
	markdown: "_markdown_1m9iq_156",
	details: "_details_1m9iq_160"
};
var TemplatesCollectionView_default = /* @__PURE__ */ __plugin_vue_export_helper_default(TemplatesCollectionView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": TemplatesCollectionView_vue_vue_type_style_index_0_lang_module_default }]]);
export { TemplatesCollectionView_default as default };
