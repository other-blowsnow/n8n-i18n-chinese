import { _ as __unplugin_components_6 } from "./TemplateDetails-CKOMiHEW.js";
import { d as defineComponent, bp as useTemplatesStore, ah as useNodeTypesStore, aa as useRoute, b as useRouter, ay as useDocumentTitle, r as ref, x as computed, af as watch, o as onMounted, e as createBlock, g as openBlock, bu as createSlots, w as withCtx, j as createBaseVNode, n as normalizeClass, f as createCommentVNode, i as createVNode, eH as N8nMarkdown, l as unref, c as useI18n, h as createElementBlock, m as N8nHeading, k as createTextVNode, t as toDisplayString, p as N8nText, dK as N8nLoading, q as N8nButton, ap as useTelemetry, bs as useExternalHooks, _ as _export_sfc } from "./index-BsWH3eYA.js";
import { W as WorkflowPreview } from "./WorkflowPreview-CKGMAmhl.js";
import { u as useTemplateWorkflow } from "./templateActions-BRX-GxUO.js";
import { T as TemplatesView } from "./TemplatesView-BiyV7YY-.js";
import "./Tags-DUtDWGPx.js";
import "./Tag-CKyJVEEK.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
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
    const templateId = computed(
      () => Array.isArray(route.params.id) ? route.params.id[0] : route.params.id
    );
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
      if (contentArea) {
        contentArea.scrollTo({
          top: 0
        });
      }
    };
    watch(
      () => template.value,
      (newTemplate) => {
        if (newTemplate) {
          documentTitle.set(`Template template: ${newTemplate.name}`);
        } else {
          documentTitle.set("Templates");
        }
      }
    );
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
      const _component_n8n_heading = N8nHeading;
      const _component_n8n_text = N8nText;
      const _component_n8n_loading = N8nLoading;
      const _component_n8n_button = N8nButton;
      const _component_WorkflowPreview = WorkflowPreview;
      const _component_n8n_markdown = N8nMarkdown;
      const _component_TemplateDetails = __unplugin_components_6;
      return openBlock(), createBlock(TemplatesView, { "go-back-enabled": true }, createSlots({
        header: withCtx(() => [
          !notFoundError.value ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(_ctx.$style.wrapper)
          }, [
            createBaseVNode("div", {
              class: normalizeClass(_ctx.$style.title)
            }, [
              template.value && template.value.name ? (openBlock(), createBlock(_component_n8n_heading, {
                key: 0,
                tag: "h1",
                size: "2xlarge"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(template.value.name), 1)
                ]),
                _: 1
              })) : createCommentVNode("", true),
              template.value && template.value.name ? (openBlock(), createBlock(_component_n8n_text, {
                key: 1,
                color: "text-base",
                size: "small"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(i18n).baseText("generic.workflow")), 1)
                ]),
                _: 1
              })) : createCommentVNode("", true),
              createVNode(_component_n8n_loading, {
                loading: !template.value || !template.value.name,
                rows: 2,
                variant: "h1"
              }, null, 8, ["loading"])
            ], 2),
            createBaseVNode("div", {
              class: normalizeClass(_ctx.$style.button)
            }, [
              template.value ? (openBlock(), createBlock(_component_n8n_button, {
                key: 0,
                "data-test-id": "use-template-button",
                label: unref(i18n).baseText("template.buttons.useThisWorkflowButton"),
                size: "large",
                onClick: _cache[0] || (_cache[0] = ($event) => openTemplateSetup(templateId.value, $event))
              }, null, 8, ["label"])) : createCommentVNode("", true),
              createVNode(_component_n8n_loading, {
                loading: !template.value,
                rows: 1,
                variant: "button"
              }, null, 8, ["loading"])
            ], 2)
          ], 2)) : (openBlock(), createElementBlock("div", {
            key: 1,
            class: normalizeClass(_ctx.$style.notFound)
          }, [
            createVNode(_component_n8n_text, { color: "text-base" }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n).baseText("templates.workflowsNotFound")), 1)
              ]),
              _: 1
            })
          ], 2))
        ]),
        _: 2
      }, [
        !notFoundError.value ? {
          name: "content",
          fn: withCtx(() => [
            createBaseVNode("div", {
              class: normalizeClass(_ctx.$style.image)
            }, [
              showPreview.value ? (openBlock(), createBlock(_component_WorkflowPreview, {
                key: 0,
                loading: loading.value,
                workflow: template.value?.workflow,
                onClose: onHidePreview
              }, null, 8, ["loading", "workflow"])) : createCommentVNode("", true)
            ], 2),
            createBaseVNode("div", {
              class: normalizeClass(_ctx.$style.content)
            }, [
              createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.markdown),
                "data-test-id": "template-description"
              }, [
                createVNode(_component_n8n_markdown, {
                  content: template.value?.description,
                  images: template.value?.image,
                  loading: loading.value
                }, null, 8, ["content", "images", "loading"])
              ], 2),
              createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.details)
              }, [
                createVNode(_component_TemplateDetails, {
                  "block-title": unref(i18n).baseText("template.details.appsInTheWorkflow"),
                  loading: loading.value,
                  template: template.value
                }, null, 8, ["block-title", "loading", "template"])
              ], 2)
            ], 2)
          ]),
          key: "0"
        } : void 0
      ]), 1024);
    };
  }
});
const wrapper = "_wrapper_gfp08_123";
const notFound = "_notFound_gfp08_128";
const title = "_title_gfp08_132";
const button = "_button_gfp08_136";
const image = "_image_gfp08_140";
const content = "_content_gfp08_151";
const markdown = "_markdown_gfp08_162";
const details = "_details_gfp08_173";
const style0 = {
  wrapper,
  notFound,
  title,
  button,
  image,
  content,
  markdown,
  details
};
const cssModules = {
  "$style": style0
};
const TemplatesWorkflowView = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);
export {
  TemplatesWorkflowView as default
};
