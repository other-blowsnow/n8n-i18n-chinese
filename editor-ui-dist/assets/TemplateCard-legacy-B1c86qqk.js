;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy--Sn1h8On.js", "./_MapCache-legacy-D8JKoBWh.js", "./src-legacy-Cj9TtJhY.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-B7Y_hCM_.js", "./useTelemetry-legacy-CBjbIfKX.js", "./constants-legacy-DVoQkFTS.js", "./templates.store-legacy-DlwNzr1T.js", "./NodeIcon-legacy-Dx_hWKEO.js"], function (_export, _context) {
    "use strict";

    var computed, toDisplayString, createElementBlock, createCommentVNode, unref, ref, onBeforeUnmount, createVNode, defineComponent, createBlock, onMounted, Fragment, withCtx, openBlock, withModifiers, renderList, createTextVNode, normalizeClass, createBaseVNode, useI18n, N8nButton_default, N8nText_default, N8nCard_default, __plugin_vue_export_helper_default, useRouter, useUIStore, useNodeTypesStore, EXPERIMENT_TEMPLATES_DATA_QUALITY_KEY, useTemplatesDataQualityStore, NodeIcon_default, __vite_style__, TemplateCard_vue_vue_type_script_setup_true_lang_default, nodes, nodeIcon, suggestion, actions, TemplateCard_vue_vue_type_style_index_0_lang_module_default, cssModules, TemplateCard_default;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Cn;
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
        onBeforeUnmount = _vueRuntimeEsmBundlerLegacy003Js.J;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        onMounted = _vueRuntimeEsmBundlerLegacy003Js.Z;
        Fragment = _vueRuntimeEsmBundlerLegacy003Js._;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        withModifiers = _vueRuntimeEsmBundlerLegacy003Js.h;
        renderList = _vueRuntimeEsmBundlerLegacy003Js.it;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js.vn;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {
        N8nButton_default = _srcLegacy007Js.Hn;
        N8nText_default = _srcLegacy007Js.Vn;
        N8nCard_default = _srcLegacy007Js.Z;
      }, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {
        useRouter = _truncateLegacy00hJs.b;
      }, function (_useTelemetryLegacy00HJs) {
        useUIStore = _useTelemetryLegacy00HJs.Fi;
        useNodeTypesStore = _useTelemetryLegacy00HJs.at;
      }, function (_constantsLegacy00TJs) {
        EXPERIMENT_TEMPLATES_DATA_QUALITY_KEY = _constantsLegacy00TJs.Ho;
      }, function (_templatesStoreLegacy01fJs) {
        useTemplatesDataQualityStore = _templatesStoreLegacy01fJs.a;
      }, function (_NodeIconLegacy01FJs) {
        NodeIcon_default = _NodeIconLegacy01FJs.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._nodes_ztiub_123 {\n  display: flex;\n  flex-direction: row;\n}\n._nodeIcon_ztiub_128 {\n  padding: var(--spacing--2xs);\n  background-color: var(--dialog--color--background);\n  border-radius: var(--radius--lg);\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: end;\n  margin-right: var(--spacing--3xs);\n}\n._suggestion_ztiub_139 {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  min-width: 200px;\n  background-color: var(--color--background--light-2);\n  cursor: pointer;\n}\n._actions_ztiub_148 {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/experiments/templatesDataQuality/components/TemplateCard.vue?vue&type=script&setup=true&lang.ts
        TemplateCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "TemplateCard",
          props: {
            template: {},
            tileNumber: {}
          },
          setup(__props) {
            const props = __props;
            const nodeTypesStore = useNodeTypesStore();
            const {
              getTemplateRoute,
              trackTemplateTileClick,
              trackTemplateShown
            } = useTemplatesDataQualityStore();
            const router = useRouter();
            const uiStore = useUIStore();
            const locale = useI18n();
            const templateNodes = computed(() => {
              if (!props.template?.nodes) return [];
              const uniqueNodeTypes = new Set(props.template.nodes.map(node => node.name));
              return Array.from(uniqueNodeTypes).slice(0, 2).map(nodeType => nodeTypesStore.getNodeType(nodeType)).filter(Boolean);
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
              observer = new IntersectionObserver(entries => {
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
                }, [(openBlock(true), createElementBlock(Fragment, null, renderList(templateNodes.value, nodeType => {
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
                })]), createBaseVNode("div", {
                  class: normalizeClass([_ctx.$style.actions, "mt-m"])
                }, [createVNode(unref(N8nButton_default), {
                  label: unref(locale).baseText("workflows.templateRecoV2.useTemplate"),
                  type: "secondary",
                  size: "mini",
                  onClick: withModifiers(handleUseTemplate, ["stop"])
                }, null, 8, ["label"])], 2)]),
                _: 1
              }, 8, ["class"]);
            };
          }
        }); //#endregion
        //#region src/experiments/templatesDataQuality/components/TemplateCard.vue?vue&type=style&index=0&lang.module.scss
        nodes = "_nodes_ztiub_123";
        nodeIcon = "_nodeIcon_ztiub_128";
        suggestion = "_suggestion_ztiub_139";
        actions = "_actions_ztiub_148";
        TemplateCard_vue_vue_type_style_index_0_lang_module_default = {
          nodes,
          nodeIcon,
          suggestion,
          actions
        }; //#endregion
        //#region src/experiments/templatesDataQuality/components/TemplateCard.vue
        cssModules = {
          "$style": TemplateCard_vue_vue_type_style_index_0_lang_module_default
        };
        _export("t", TemplateCard_default = /* @__PURE__ */__plugin_vue_export_helper_default(TemplateCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]])); //#endregion
      }
    };
  });
})();