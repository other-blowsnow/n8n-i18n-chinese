import { d as defineComponent, bp as useTemplatesStore, ah as useNodeTypesStore, aa as useRoute, b as useRouter, ay as useDocumentTitle, r as ref, x as computed, af as watch, o as onMounted, e as createBlock, g as openBlock, bu as createSlots, w as withCtx, j as createBaseVNode, n as normalizeClass, h as createElementBlock, f as createCommentVNode, i as createVNode, l as unref, eG as isFullTemplatesCollection, eH as N8nMarkdown, c as useI18n, m as N8nHeading, k as createTextVNode, t as toDisplayString, p as N8nText, dK as N8nLoading, V as VIEWS, ap as useTelemetry, bs as useExternalHooks, _ as _export_sfc } from "./index-BsWH3eYA.js";
import { _ as __unplugin_components_6 } from "./TemplateDetails-CKOMiHEW.js";
import { T as TemplateList } from "./TemplateList-D37AAKD5.js";
import { T as TemplatesView } from "./TemplatesView-BiyV7YY-.js";
import { u as useTemplateWorkflow } from "./templateActions-BRX-GxUO.js";
import "./Tags-DUtDWGPx.js";
import "./Tag-CKyJVEEK.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
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
      if (!collection.value || loading.value) {
        return [];
      }
      return collection.value.workflows.map(({ id }) => templatesStore.getTemplatesById(id.toString())).filter((workflow) => !!workflow);
    });
    const scrollToTop = () => {
      setTimeout(() => {
        const contentArea = document.getElementById("content");
        if (contentArea) {
          contentArea.scrollTo({
            top: 0,
            behavior: "smooth"
          });
        }
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
        const { href } = router.resolve({ name: page, params: { id } });
        window.open(href, "_blank");
        return;
      } else {
        void router.push({ name: page, params: { id } });
      }
    };
    watch(
      () => collection.value,
      () => {
        if (collection.value && "full" in collection.value && collection.value.full) {
          documentTitle.set(`Template collection: ${collection.value.name}`);
        } else {
          documentTitle.set("Templates");
        }
      }
    );
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
      const _component_n8n_heading = N8nHeading;
      const _component_n8n_text = N8nText;
      const _component_n8n_loading = N8nLoading;
      const _component_n8n_markdown = N8nMarkdown;
      return openBlock(), createBlock(TemplatesView, { "go-back-enabled": true }, createSlots({
        header: withCtx(() => [
          !notFoundError.value ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(_ctx.$style.wrapper)
          }, [
            createBaseVNode("div", {
              class: normalizeClass(_ctx.$style.title)
            }, [
              collection.value && collection.value.name ? (openBlock(), createBlock(_component_n8n_heading, {
                key: 0,
                tag: "h1",
                size: "2xlarge"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(collection.value.name), 1)
                ]),
                _: 1
              })) : createCommentVNode("", true),
              collection.value && collection.value.name ? (openBlock(), createBlock(_component_n8n_text, {
                key: 1,
                color: "text-base",
                size: "small"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(i18n).baseText("templates.collection")), 1)
                ]),
                _: 1
              })) : createCommentVNode("", true),
              createVNode(_component_n8n_loading, {
                loading: !collection.value || !collection.value.name,
                rows: 2,
                variant: "h1"
              }, null, 8, ["loading"])
            ], 2)
          ], 2)) : (openBlock(), createElementBlock("div", {
            key: 1,
            class: normalizeClass(_ctx.$style.notFound)
          }, [
            createVNode(_component_n8n_text, { color: "text-base" }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n).baseText("templates.collectionsNotFound")), 1)
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
              class: normalizeClass(_ctx.$style.wrapper)
            }, [
              createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.mainContent)
              }, [
                loading.value || unref(isFullTemplatesCollection)(collection.value) ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: normalizeClass(_ctx.$style.markdown)
                }, [
                  createVNode(_component_n8n_markdown, {
                    content: unref(isFullTemplatesCollection)(collection.value) && collection.value.description ? collection.value.description : "",
                    images: unref(isFullTemplatesCollection)(collection.value) && collection.value.image ? collection.value.image : void 0,
                    loading: loading.value
                  }, null, 8, ["content", "images", "loading"])
                ], 2)) : createCommentVNode("", true),
                createVNode(TemplateList, {
                  "infinite-scroll-enabled": false,
                  loading: loading.value,
                  "use-workflow-button": true,
                  workflows: collectionWorkflows.value,
                  onUseWorkflow,
                  onOpenTemplate
                }, null, 8, ["loading", "workflows"])
              ], 2),
              createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.details)
              }, [
                createVNode(__unplugin_components_6, {
                  "block-title": unref(i18n).baseText("template.details.appsInTheCollection"),
                  loading: loading.value,
                  template: collection.value
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
const wrapper = "_wrapper_17kne_123";
const notFound = "_notFound_17kne_133";
const title = "_title_17kne_137";
const button = "_button_17kne_141";
const mainContent = "_mainContent_17kne_145";
const markdown = "_markdown_17kne_156";
const details = "_details_17kne_160";
const style0 = {
  wrapper,
  notFound,
  title,
  button,
  mainContent,
  markdown,
  details
};
const cssModules = {
  "$style": style0
};
const TemplatesCollectionView = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);
export {
  TemplatesCollectionView as default
};
