import { C as computed, Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, T as createBlock, Z as onMounted, _t as watch, bt as withCtx, et as openBlock, j as createTextVNode, k as createSlots, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import { _t as useI18n } from "./_MapCache-CXkqqBNu.js";
import { F as N8nMarkdown_default, Sn as N8nButton_default, at as N8nLoading_default, xn as N8nText_default, yn as N8nHeading_default } from "./src-CUTxC6Rl.js";
import "./en-CF30SCh2.js";
import "./preload-helper-CR0ecmWK.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { v as useRoute, y as useRouter } from "./truncate-OrFlV_nl.js";
import { Nt as useNodeTypesStore, O as useTelemetry, Yn as useDocumentTitle, b as useExternalHooks, c as useTemplatesStore } from "./builder.store-6Ubaqfxq.js";
import "./empty-BuGRxzl4.js";
import "./sanitize-html-Cc45ZKm8.js";
import "./CalendarDate-zWqgZMlk.js";
import "./path-browserify-BtCDmZ3_.js";
import "./constants-eN0e8XyV.js";
import "./merge-E8nEcjT4.js";
import "./_baseOrderBy-Ca3_tgno.js";
import "./dateformat-CM9k0--B.js";
import "./useDebounce-zOuYGjD3.js";
import "./executions.store-B4S6yM7f.js";
import "./nodeIcon-DsiEOlU0.js";
import "./NodeIcon-c7CeRjf6.js";
import "./nodeTransforms-Br2QRM5q.js";
import "./TimeAgo-CGwszD7S.js";
import "./templateTransforms-BR4iK1Jx.js";
import { t as WorkflowPreview_default } from "./WorkflowPreview-CuT67asL.js";
import { n as useTemplateWorkflow } from "./templateActions-wNwE9zu0.js";
import { t as TemplatesView_default } from "./TemplatesView-BSS9YAUq.js";
import { t as TemplateDetails_default } from "./TemplateDetails-G011QFyy.js";
var TemplatesWorkflowView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "TemplatesWorkflowView",
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
		const showPreview = ref(true);
		const notFoundError = ref(false);
		const templateId = computed(() => Array.isArray(route.params.id) ? route.params.id[0] : route.params.id);
		const template = computed(() => templatesStore.getFullTemplateById(templateId.value));
		const openTemplateSetup = async (id, e) => {
			await useTemplateWorkflow({
				router,
				templateId: id,
				inNewBrowserTab: e.metaKey || e.ctrlKey,
				externalHooks,
				nodeTypesStore,
				telemetry,
				templatesStore,
				source: "template_preview"
			});
		};
		const onHidePreview = () => {
			showPreview.value = false;
		};
		const scrollToTop = () => {
			const contentArea = document.getElementById("content");
			if (contentArea) contentArea.scrollTo({ top: 0 });
		};
		watch(() => template.value, (newTemplate) => {
			if (newTemplate) documentTitle.set(`Template template: ${newTemplate.name}`);
			else documentTitle.set("Templates");
		});
		onMounted(async () => {
			scrollToTop();
			if (template.value?.full) {
				loading.value = false;
				return;
			}
			try {
				await templatesStore.fetchTemplateById(templateId.value);
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
					template.value && template.value.name ? (openBlock(), createBlock(unref(N8nHeading_default), {
						key: 0,
						tag: "h1",
						size: "2xlarge"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(template.value.name), 1)]),
						_: 1
					})) : createCommentVNode("", true),
					template.value && template.value.name ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 1,
						color: "text-base",
						size: "small"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.workflow")), 1)]),
						_: 1
					})) : createCommentVNode("", true),
					createVNode(unref(N8nLoading_default), {
						loading: !template.value || !template.value.name,
						rows: 2,
						variant: "h1"
					}, null, 8, ["loading"])
				], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.button) }, [template.value ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 0,
					"data-test-id": "use-template-button",
					label: unref(i18n).baseText("template.buttons.useThisWorkflowButton"),
					size: "large",
					onClick: _cache[0] || (_cache[0] = ($event) => openTemplateSetup(templateId.value, $event))
				}, null, 8, ["label"])) : createCommentVNode("", true), createVNode(unref(N8nLoading_default), {
					loading: !template.value,
					rows: 1,
					variant: "button"
				}, null, 8, ["loading"])], 2)], 2)) : (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.notFound)
				}, [createVNode(unref(N8nText_default), { color: "text-base" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("templates.workflowsNotFound")), 1)]),
					_: 1
				})], 2))]),
				_: 2
			}, [!notFoundError.value ? {
				name: "content",
				fn: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.image) }, [showPreview.value ? (openBlock(), createBlock(WorkflowPreview_default, {
					key: 0,
					loading: loading.value,
					workflow: template.value?.workflow,
					onClose: onHidePreview
				}, null, 8, ["loading", "workflow"])) : createCommentVNode("", true)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.markdown),
					"data-test-id": "template-description"
				}, [createVNode(unref(N8nMarkdown_default), {
					content: template.value?.description,
					images: template.value?.image,
					loading: loading.value
				}, null, 8, [
					"content",
					"images",
					"loading"
				])], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.details) }, [createVNode(TemplateDetails_default, {
					"block-title": unref(i18n).baseText("template.details.appsInTheWorkflow"),
					loading: loading.value,
					template: template.value
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
var TemplatesWorkflowView_vue_vue_type_style_index_0_lang_module_default = {
	wrapper: "_wrapper_tqev9_123",
	notFound: "_notFound_tqev9_128",
	title: "_title_tqev9_132",
	button: "_button_tqev9_136",
	image: "_image_tqev9_140",
	content: "_content_tqev9_151",
	markdown: "_markdown_tqev9_162",
	details: "_details_tqev9_173"
};
var TemplatesWorkflowView_default = /* @__PURE__ */ __plugin_vue_export_helper_default(TemplatesWorkflowView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": TemplatesWorkflowView_vue_vue_type_style_index_0_lang_module_default }]]);
export { TemplatesWorkflowView_default as default };
