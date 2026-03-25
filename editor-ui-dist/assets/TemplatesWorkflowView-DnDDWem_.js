import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Ft as ref, N as defineComponent, O as createSlots, S as computed, Sn as toDisplayString, T as createCommentVNode, Wt as unref, X as onMounted, _n as normalizeClass, gt as watch, h as withModifiers, j as createVNode, q as onBeforeUnmount, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import { bt as useI18n } from "./_MapCache-DL4VDRVM.js";
import { Q as N8nMarkdown_default, Qi as N8nButton_default, Zi as N8nText_default, _t as useRouter, gt as useRoute } from "./src-CO68IM2H.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import { Dn as useTemplatesStore, Dr as useExternalHooks, en as useTelemetry, vn as useDocumentTitle, w as useNodeTypesStore } from "./users.store-Bj_XyNBb.js";
import "./constants-CasV1Nn-.js";
import "./merge-aQ2KMKTv.js";
import "./_baseOrderBy-CfcpbHUH.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-DVsIZ8uv.js";
import "./executions.store-CjVhJlRx.js";
import "./uniqBy-BguIU7IC.js";
import "./nodeIcon-Dlbdx7jv.js";
import "./nodeTransforms-BkycvANY.js";
import "./templateTransforms-CwPYKADA.js";
import "./NodeIcon-CC7z2JLa.js";
import "./values-wdwhPdwN.js";
import { t as RecommendedTemplateCard_default } from "./RecommendedTemplateCard-CZ1ZtbB7.js";
import { t as WorkflowPreview_default } from "./WorkflowPreview-Dg2YIEWK.js";
import { n as useTemplateWorkflow } from "./templateActions-DisKOI5d.js";
import { t as TemplatesView_default } from "./TemplatesView-FSS9AVkl.js";
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
		const isPreviewVisible = ref(true);
		const previewWrapperRef = ref(null);
		let previewObserver = null;
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
		watch(previewWrapperRef, (newRef) => {
			if (previewObserver) {
				previewObserver.disconnect();
				previewObserver = null;
			}
			if (newRef) {
				previewObserver = new IntersectionObserver((entries) => {
					for (const entry of entries) isPreviewVisible.value = entry.isIntersecting;
				}, { threshold: 0 });
				previewObserver.observe(newRef);
			}
		}, { immediate: true });
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
		onBeforeUnmount(() => {
			if (previewObserver) {
				previewObserver.disconnect();
				previewObserver = null;
			}
		});
		const strippedWorkflow = computed(() => {
			if (!template.value?.workflow) return void 0;
			if (template.value.readyToDemo) return template.value.workflow;
			return {
				...template.value.workflow,
				pinData: {}
			};
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(TemplatesView_default, { "full-width": true }, createSlots({ _: 2 }, [notFoundError.value ? {
				name: "header",
				fn: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.notFound) }, [createVNode(unref(N8nText_default), { color: "text-base" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("templates.workflowsNotFound")), 1)]),
					_: 1
				})], 2)]),
				key: "0"
			} : void 0, !notFoundError.value ? {
				name: "content",
				fn: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.previewWrapper) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.image) }, [showPreview.value ? (openBlock(), createBlock(WorkflowPreview_default, {
					key: 0,
					loading: loading.value,
					workflow: strippedWorkflow.value,
					onClose: onHidePreview
				}, null, 8, ["loading", "workflow"])) : createCommentVNode("", true)], 2)], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.contentContainer) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.templateCard) }, [template.value ? (openBlock(), createBlock(RecommendedTemplateCard_default, {
					key: 0,
					template: template.value,
					"show-details": true
				}, {
					belowContent: withCtx(() => [createVNode(unref(N8nButton_default), {
						"data-test-id": "use-template-button",
						label: unref(i18n).baseText("template.buttons.tryTemplate"),
						size: "large",
						onClick: _cache[0] || (_cache[0] = withModifiers(($event) => openTemplateSetup(templateId.value, $event), ["stop"]))
					}, null, 8, ["label"])]),
					_: 1
				}, 8, ["template"])) : createCommentVNode("", true)], 2), createBaseVNode("div", {
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
				])], 2)], 2)], 2)]),
				key: "1"
			} : void 0]), 1024);
		};
	}
});
var TemplatesWorkflowView_vue_vue_type_style_index_0_lang_module_default = {
	notFound: "_notFound_1t3tp_125",
	previewWrapper: "_previewWrapper_1t3tp_129",
	image: "_image_1t3tp_133",
	button: "_button_1t3tp_143",
	contentContainer: "_contentContainer_1t3tp_151",
	content: "_content_1t3tp_151",
	templateCard: "_templateCard_1t3tp_167",
	markdown: "_markdown_1t3tp_182"
};
var TemplatesWorkflowView_default = /* @__PURE__ */ __plugin_vue_export_helper_default(TemplatesWorkflowView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": TemplatesWorkflowView_vue_vue_type_style_index_0_lang_module_default }]]);
export { TemplatesWorkflowView_default as default };
