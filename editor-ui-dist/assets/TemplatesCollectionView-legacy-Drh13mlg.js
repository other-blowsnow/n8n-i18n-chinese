;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy--Sn1h8On.js", "./_MapCache-legacy-BGDm4XBh.js", "./src-legacy-6DYpZVh_.js", "./en-legacy-DJK4SpPN.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-BWv-BWgW.js", "./icon-legacy-B_qPQAkZ.js", "./empty-legacy-ZG0-xpne.js", "./useTelemetry-legacy-z15msZ3G.js", "./sanitize-html-legacy-D7fDKXy5.js", "./path-browserify-legacy-BRGcgaOH.js", "./constants-legacy-lM1Uv86G.js", "./merge-legacy-CyNDE0Ib.js", "./_baseOrderBy-legacy-DT_yzgQM.js", "./dateformat-legacy-C7RFTAF8.js", "./useDebounce-legacy-B0zW2D-C.js", "./useExternalHooks-legacy-D--WxRfr.js", "./cloudPlan.store-legacy-CaAxcbYV.js", "./templates.store-legacy-dWApE3rc.js", "./nodeIcon-legacy-vDRr0hL7.js", "./NodeIcon-legacy-nNR3V-3Y.js", "./nodeTransforms-legacy-kJD9EoUb.js", "./TimeAgo-legacy-tR0vQn0D.js", "./templateTransforms-legacy-kjzXGYFa.js", "./templateActions-legacy-LeuiKknI.js", "./TemplatesView-legacy-CZwFocAh.js", "./TemplateDetails-legacy-BZxUpPPw.js", "./TemplateList-legacy-CMyjmt4N.js"], function (_export, _context) {
    "use strict";

    var computed, toDisplayString, createElementBlock, createCommentVNode, unref, ref, createVNode, defineComponent, createBlock, onMounted, watch, withCtx, openBlock, createTextVNode, createSlots, normalizeClass, createBaseVNode, useI18n, N8nText_default, N8nMarkdown_default, N8nHeading_default, N8nLoading_default, __plugin_vue_export_helper_default, useRouter, useRoute, useDocumentTitle, isFullTemplatesCollection, useNodeTypesStore, useTelemetry, VIEWS, useExternalHooks, useTemplatesStore, useTemplateWorkflow, TemplatesView_default, TemplateDetails_default, TemplateList_default, __vite_style__, TemplatesCollectionView_vue_vue_type_script_setup_true_lang_default, wrapper, notFound, title, button, mainContent, markdown, details, TemplatesCollectionView_vue_vue_type_style_index_0_lang_module_default, cssModules, TemplatesCollectionView_default;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Cn;
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        onMounted = _vueRuntimeEsmBundlerLegacy003Js.Z;
        watch = _vueRuntimeEsmBundlerLegacy003Js._t;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        createSlots = _vueRuntimeEsmBundlerLegacy003Js.k;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js.vn;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {
        N8nText_default = _srcLegacy007Js.Kn;
        N8nMarkdown_default = _srcLegacy007Js.M;
        N8nHeading_default = _srcLegacy007Js.Wn;
        N8nLoading_default = _srcLegacy007Js.tt;
      }, function (_enLegacy00bJs) {}, function (_preloadHelperLegacy00dJs) {}, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {
        useRouter = _truncateLegacy00hJs.b;
        useRoute = _truncateLegacy00hJs.y;
      }, function (_iconLegacy00nJs) {}, function (_emptyLegacy00vJs) {}, function (_useTelemetryLegacy00HJs) {
        useDocumentTitle = _useTelemetryLegacy00HJs.Cn;
        isFullTemplatesCollection = _useTelemetryLegacy00HJs.Mt;
        useNodeTypesStore = _useTelemetryLegacy00HJs.rt;
        useTelemetry = _useTelemetryLegacy00HJs.t;
      }, function (_sanitizeHtmlLegacy00LJs) {}, function (_pathBrowserifyLegacy00PJs) {}, function (_constantsLegacy00RJs) {
        VIEWS = _constantsLegacy00RJs.No;
      }, function (_mergeLegacy00TJs) {}, function (_baseOrderByLegacy00XJs) {}, function (_dateformatLegacy00ZJs) {}, function (_useDebounceLegacy00$Js) {}, function (_useExternalHooksLegacy011Js) {
        useExternalHooks = _useExternalHooksLegacy011Js.t;
      }, function (_cloudPlanStoreLegacy01bJs) {}, function (_templatesStoreLegacy01dJs) {
        useTemplatesStore = _templatesStoreLegacy01dJs.t;
      }, function (_nodeIconLegacy01tJs) {}, function (_NodeIconLegacy01DJs) {}, function (_nodeTransformsLegacy02BJs) {}, function (_TimeAgoLegacy02RJs) {}, function (_templateTransformsLegacy03zJs) {}, function (_templateActionsLegacy07RJs) {
        useTemplateWorkflow = _templateActionsLegacy07RJs.n;
      }, function (_TemplatesViewLegacy07TJs) {
        TemplatesView_default = _TemplatesViewLegacy07TJs.t;
      }, function (_TemplateDetailsLegacy07XJs) {
        TemplateDetails_default = _TemplateDetailsLegacy07XJs.t;
      }, function (_TemplateListLegacy07ZJs) {
        TemplateList_default = _TemplateListLegacy07ZJs.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._wrapper_1m9iq_123 {\n  display: flex;\n  justify-content: space-between;\n}\n@media (max-width: 768px) {\n._wrapper_1m9iq_123 {\n    display: block;\n}\n}\n._notFound_1m9iq_133 {\n  padding-top: var(--spacing--xl);\n}\n._title_1m9iq_137 {\n  width: 100%;\n}\n._button_1m9iq_141 {\n  display: block;\n}\n._mainContent_1m9iq_145 {\n  padding-right: var(--spacing--2xl);\n  margin-bottom: var(--spacing--lg);\n  width: 100%;\n}\n@media (max-width: 768px) {\n._mainContent_1m9iq_145 {\n    padding-right: 0;\n}\n}\n._markdown_1m9iq_156 {\n  margin-bottom: var(--spacing--lg);\n}\n._details_1m9iq_160 {\n  width: 180px;\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/features/workflows/templates/views/TemplatesCollectionView.vue?vue&type=script&setup=true&lang.ts
        TemplatesCollectionView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
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
              const {
                id
              } = route.params;
              return Array.isArray(id) ? id[0] : id;
            });
            const collection = computed(() => templatesStore.getCollectionById[collectionId.value]);
            const collectionWorkflows = computed(() => {
              if (!collection.value || loading.value) return [];
              return collection.value.workflows.map(({
                id
              }) => templatesStore.getTemplatesById(id.toString())).filter(workflow => !!workflow);
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
            const onOpenTemplate = ({
              event,
              id
            }) => {
              navigateTo(event, VIEWS.TEMPLATE, `${id}`);
            };
            const onUseWorkflow = async ({
              event,
              id
            }) => {
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
                const {
                  href
                } = router.resolve({
                  name: page,
                  params: {
                    id
                  }
                });
                window.open(href, "_blank");
                return;
              } else router.push({
                name: page,
                params: {
                  id
                }
              });
            };
            watch(() => collection.value, () => {
              if (collection.value && "full" in collection.value && collection.value.full) documentTitle.set(`Template collection: ${collection.value.name}`);else documentTitle.set("Templates");
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
              return openBlock(), createBlock(TemplatesView_default, {
                "go-back-enabled": true
              }, createSlots({
                header: withCtx(() => [!notFoundError.value ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: normalizeClass(_ctx.$style.wrapper)
                }, [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.title)
                }, [collection.value && collection.value.name ? (openBlock(), createBlock(unref(N8nHeading_default), {
                  key: 0,
                  tag: "h1",
                  size: "2xlarge"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(collection.value.name), 1)]),
                  _: 1
                })) : createCommentVNode("", true), collection.value && collection.value.name ? (openBlock(), createBlock(unref(N8nText_default), {
                  key: 1,
                  color: "text-base",
                  size: "small"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("templates.collection")), 1)]),
                  _: 1
                })) : createCommentVNode("", true), createVNode(unref(N8nLoading_default), {
                  loading: !collection.value || !collection.value.name,
                  rows: 2,
                  variant: "h1"
                }, null, 8, ["loading"])], 2)], 2)) : (openBlock(), createElementBlock("div", {
                  key: 1,
                  class: normalizeClass(_ctx.$style.notFound)
                }, [createVNode(unref(N8nText_default), {
                  color: "text-base"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("templates.collectionsNotFound")), 1)]),
                  _: 1
                })], 2))]),
                _: 2
              }, [!notFoundError.value ? {
                name: "content",
                fn: withCtx(() => [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.wrapper)
                }, [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.mainContent)
                }, [loading.value || unref(isFullTemplatesCollection)(collection.value) ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: normalizeClass(_ctx.$style.markdown)
                }, [createVNode(unref(N8nMarkdown_default), {
                  content: unref(isFullTemplatesCollection)(collection.value) && collection.value.description ? collection.value.description : "",
                  images: unref(isFullTemplatesCollection)(collection.value) && collection.value.image ? collection.value.image : void 0,
                  loading: loading.value
                }, null, 8, ["content", "images", "loading"])], 2)) : createCommentVNode("", true), createVNode(TemplateList_default, {
                  "infinite-scroll-enabled": false,
                  loading: loading.value,
                  "use-workflow-button": true,
                  workflows: collectionWorkflows.value,
                  onUseWorkflow,
                  onOpenTemplate
                }, null, 8, ["loading", "workflows"])], 2), createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.details)
                }, [createVNode(TemplateDetails_default, {
                  "block-title": unref(i18n).baseText("template.details.appsInTheCollection"),
                  loading: loading.value,
                  template: collection.value
                }, null, 8, ["block-title", "loading", "template"])], 2)], 2)]),
                key: "0"
              } : void 0]), 1024);
            };
          }
        }); //#endregion
        //#region src/features/workflows/templates/views/TemplatesCollectionView.vue?vue&type=style&index=0&lang.module.scss
        wrapper = "_wrapper_1m9iq_123";
        notFound = "_notFound_1m9iq_133";
        title = "_title_1m9iq_137";
        button = "_button_1m9iq_141";
        mainContent = "_mainContent_1m9iq_145";
        markdown = "_markdown_1m9iq_156";
        details = "_details_1m9iq_160";
        TemplatesCollectionView_vue_vue_type_style_index_0_lang_module_default = {
          wrapper,
          notFound,
          title,
          button,
          mainContent,
          markdown,
          details
        }; //#endregion
        //#region src/features/workflows/templates/views/TemplatesCollectionView.vue
        cssModules = {
          "$style": TemplatesCollectionView_vue_vue_type_style_index_0_lang_module_default
        };
        _export("default", TemplatesCollectionView_default = /* @__PURE__ */__plugin_vue_export_helper_default(TemplatesCollectionView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]])); //#endregion
      }
    };
  });
})();