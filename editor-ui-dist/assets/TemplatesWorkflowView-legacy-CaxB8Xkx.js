;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-CVC6fg6H.js", "./src-legacy-D3-Bo0sy.js", "./en-legacy-Bgme8Vbm.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-Bk9bFklR.js", "./icon-legacy-1U_nlJHf.js", "./empty-legacy-DnVUoqbC.js", "./useTelemetry-legacy-BdQlQKwu.js", "./useToast-legacy-D8KBGcJW.js", "./sanitize-html-legacy-DfOUEbdf.js", "./path-browserify-legacy-DJbEMZcd.js", "./constants-legacy-B0GcWb62.js", "./merge-legacy-C_ujDigB.js", "./dateformat-legacy-Xt1X-tys.js", "./useDebounce-legacy-IwiEyerO.js", "./useExternalHooks-legacy-CI7QLTD3.js", "./cloudPlan.store-legacy-LWdjrdTo.js", "./templates.store-legacy-BHiM3N7j.js", "./executions.store-legacy-BxTud2_e.js", "./nodeIcon-legacy-7NxDDHQi.js", "./NodeIcon-legacy-B6aK_5Ny.js", "./nodeTransforms-legacy-B6vSYCn_.js", "./TimeAgo-legacy-DZ56LCYg.js", "./templateTransforms-legacy-fH0YEGiR.js", "./WorkflowPreview-legacy-Cb5LgcWz.js", "./templateActions-legacy-DTPhBzWh.js", "./TemplatesView-legacy-CYw3qLVl.js", "./TemplateDetails-legacy-RSLpX_vA.js"], function (_export, _context) {
    "use strict";

    var computed, createElementBlock, createCommentVNode, unref, ref, createVNode, defineComponent, toDisplayString, createBlock, onMounted, normalizeClass, watch, withCtx, openBlock, createTextVNode, createSlots, createBaseVNode, useI18n, N8nText_default, N8nButton_default, N8nHeading_default, N8nLoading_default, N8nMarkdown_default, __plugin_vue_export_helper_default, useRouter, useRoute, useDocumentTitle, useNodeTypesStore, useTelemetry, useExternalHooks, useTemplatesStore, WorkflowPreview_default, useTemplateWorkflow, TemplatesView_default, TemplateDetails_default, __vite_style__, TemplatesWorkflowView_vue_vue_type_script_setup_true_lang_default, wrapper, notFound, title, button, image, content, markdown, details, TemplatesWorkflowView_vue_vue_type_style_index_0_lang_module_default, cssModules, TemplatesWorkflowView_default;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Sn;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        onMounted = _vueRuntimeEsmBundlerLegacy003Js.Z;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js._n;
        watch = _vueRuntimeEsmBundlerLegacy003Js._t;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        createSlots = _vueRuntimeEsmBundlerLegacy003Js.k;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {
        N8nText_default = _srcLegacy007Js.In;
        N8nButton_default = _srcLegacy007Js.Ln;
        N8nHeading_default = _srcLegacy007Js.Pn;
        N8nLoading_default = _srcLegacy007Js.et;
        N8nMarkdown_default = _srcLegacy007Js.j;
      }, function (_enLegacy00bJs) {}, function (_preloadHelperLegacy00dJs) {}, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {
        useRouter = _truncateLegacy00hJs.b;
        useRoute = _truncateLegacy00hJs.y;
      }, function (_iconLegacy00lJs) {}, function (_emptyLegacy00tJs) {}, function (_useTelemetryLegacy00FJs) {
        useDocumentTitle = _useTelemetryLegacy00FJs.Tn;
        useNodeTypesStore = _useTelemetryLegacy00FJs.rt;
        useTelemetry = _useTelemetryLegacy00FJs.t;
      }, function (_useToastLegacy00HJs) {}, function (_sanitizeHtmlLegacy00JJs) {}, function (_pathBrowserifyLegacy00LJs) {}, function (_constantsLegacy00NJs) {}, function (_mergeLegacy00PJs) {}, function (_dateformatLegacy00TJs) {}, function (_useDebounceLegacy00VJs) {}, function (_useExternalHooksLegacy00XJs) {
        useExternalHooks = _useExternalHooksLegacy00XJs.t;
      }, function (_cloudPlanStoreLegacy013Js) {}, function (_templatesStoreLegacy015Js) {
        useTemplatesStore = _templatesStoreLegacy015Js.t;
      }, function (_executionsStoreLegacy01dJs) {}, function (_nodeIconLegacy01lJs) {}, function (_NodeIconLegacy01vJs) {}, function (_nodeTransformsLegacy02nJs) {}, function (_TimeAgoLegacy02HJs) {}, function (_templateTransformsLegacy03lJs) {}, function (_WorkflowPreviewLegacy05NJs) {
        WorkflowPreview_default = _WorkflowPreviewLegacy05NJs.t;
      }, function (_templateActionsLegacy07dJs) {
        useTemplateWorkflow = _templateActionsLegacy07dJs.n;
      }, function (_TemplatesViewLegacy07fJs) {
        TemplatesView_default = _TemplatesViewLegacy07fJs.t;
      }, function (_TemplateDetailsLegacy07jJs) {
        TemplateDetails_default = _TemplateDetailsLegacy07jJs.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._wrapper_tqev9_123 {\n  display: flex;\n  justify-content: space-between;\n}\n._notFound_tqev9_128 {\n  padding-top: var(--spacing--xl);\n}\n._title_tqev9_132 {\n  width: 75%;\n}\n._button_tqev9_136 {\n  display: block;\n}\n._image_tqev9_140 {\n  width: 100%;\n  height: 500px;\n  border: var(--border);\n  border-radius: var(--radius--lg);\n  overflow: hidden;\n}\n._image_tqev9_140 img {\n  width: 100%;\n}\n._content_tqev9_151 {\n  padding: var(--spacing--2xl) 0;\n  display: flex;\n  justify-content: space-between;\n}\n@media (max-width: 768px) {\n._content_tqev9_151 {\n    display: block;\n}\n}\n._markdown_tqev9_162 {\n  width: calc(100% - 180px);\n  padding-right: var(--spacing--2xl);\n  margin-bottom: var(--spacing--lg);\n}\n@media (max-width: 768px) {\n._markdown_tqev9_162 {\n    width: 100%;\n}\n}\n._details_tqev9_173 {\n  width: 180px;\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/features/workflows/templates/views/TemplatesWorkflowView.vue?vue&type=script&setup=true&lang.ts
        TemplatesWorkflowView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
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
              if (contentArea) contentArea.scrollTo({
                top: 0
              });
            };
            watch(() => template.value, newTemplate => {
              if (newTemplate) documentTitle.set(`Template template: ${newTemplate.name}`);else documentTitle.set("Templates");
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
              return openBlock(), createBlock(TemplatesView_default, {
                "go-back-enabled": true
              }, createSlots({
                header: withCtx(() => [!notFoundError.value ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: normalizeClass(_ctx.$style.wrapper)
                }, [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.title)
                }, [template.value && template.value.name ? (openBlock(), createBlock(unref(N8nHeading_default), {
                  key: 0,
                  tag: "h1",
                  size: "2xlarge"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(template.value.name), 1)]),
                  _: 1
                })) : createCommentVNode("", true), template.value && template.value.name ? (openBlock(), createBlock(unref(N8nText_default), {
                  key: 1,
                  color: "text-base",
                  size: "small"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.workflow")), 1)]),
                  _: 1
                })) : createCommentVNode("", true), createVNode(unref(N8nLoading_default), {
                  loading: !template.value || !template.value.name,
                  rows: 2,
                  variant: "h1"
                }, null, 8, ["loading"])], 2), createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.button)
                }, [template.value ? (openBlock(), createBlock(unref(N8nButton_default), {
                  key: 0,
                  "data-test-id": "use-template-button",
                  label: unref(i18n).baseText("template.buttons.useThisWorkflowButton"),
                  size: "large",
                  onClick: _cache[0] || (_cache[0] = $event => openTemplateSetup(templateId.value, $event))
                }, null, 8, ["label"])) : createCommentVNode("", true), createVNode(unref(N8nLoading_default), {
                  loading: !template.value,
                  rows: 1,
                  variant: "button"
                }, null, 8, ["loading"])], 2)], 2)) : (openBlock(), createElementBlock("div", {
                  key: 1,
                  class: normalizeClass(_ctx.$style.notFound)
                }, [createVNode(unref(N8nText_default), {
                  color: "text-base"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("templates.workflowsNotFound")), 1)]),
                  _: 1
                })], 2))]),
                _: 2
              }, [!notFoundError.value ? {
                name: "content",
                fn: withCtx(() => [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.image)
                }, [showPreview.value ? (openBlock(), createBlock(WorkflowPreview_default, {
                  key: 0,
                  loading: loading.value,
                  workflow: template.value?.workflow,
                  onClose: onHidePreview
                }, null, 8, ["loading", "workflow"])) : createCommentVNode("", true)], 2), createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.content)
                }, [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.markdown),
                  "data-test-id": "template-description"
                }, [createVNode(unref(N8nMarkdown_default), {
                  content: template.value?.description,
                  images: template.value?.image,
                  loading: loading.value
                }, null, 8, ["content", "images", "loading"])], 2), createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.details)
                }, [createVNode(TemplateDetails_default, {
                  "block-title": unref(i18n).baseText("template.details.appsInTheWorkflow"),
                  loading: loading.value,
                  template: template.value
                }, null, 8, ["block-title", "loading", "template"])], 2)], 2)]),
                key: "0"
              } : void 0]), 1024);
            };
          }
        }); //#endregion
        //#region src/features/workflows/templates/views/TemplatesWorkflowView.vue?vue&type=style&index=0&lang.module.scss
        wrapper = "_wrapper_tqev9_123";
        notFound = "_notFound_tqev9_128";
        title = "_title_tqev9_132";
        button = "_button_tqev9_136";
        image = "_image_tqev9_140";
        content = "_content_tqev9_151";
        markdown = "_markdown_tqev9_162";
        details = "_details_tqev9_173";
        TemplatesWorkflowView_vue_vue_type_style_index_0_lang_module_default = {
          wrapper,
          notFound,
          title,
          button,
          image,
          content,
          markdown,
          details
        }; //#endregion
        //#region src/features/workflows/templates/views/TemplatesWorkflowView.vue
        cssModules = {
          "$style": TemplatesWorkflowView_vue_vue_type_style_index_0_lang_module_default
        };
        _export("default", TemplatesWorkflowView_default = /* @__PURE__ */__plugin_vue_export_helper_default(TemplatesWorkflowView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]])); //#endregion
      }
    };
  });
})();