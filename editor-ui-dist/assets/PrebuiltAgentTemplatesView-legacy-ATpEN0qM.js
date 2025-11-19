;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-CVC6fg6H.js", "./src-legacy-D3-Bo0sy.js", "./en-legacy-Bgme8Vbm.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-Bk9bFklR.js", "./icon-legacy-1U_nlJHf.js", "./empty-legacy-DnVUoqbC.js", "./useTelemetry-legacy-BdQlQKwu.js", "./sanitize-html-legacy-DfOUEbdf.js", "./path-browserify-legacy-DJbEMZcd.js", "./constants-legacy-B0GcWb62.js", "./merge-legacy-C_ujDigB.js", "./dateformat-legacy-Xt1X-tys.js", "./useDebounce-legacy-IwiEyerO.js", "./useExternalHooks-legacy-CI7QLTD3.js", "./cloudPlan.store-legacy-LWdjrdTo.js", "./templates.store-legacy-BHiM3N7j.js", "./nodeCreator.store-legacy-DazC1kYi.js", "./nodeIcon-legacy-7NxDDHQi.js", "./NodeIcon-legacy-B6aK_5Ny.js", "./PageViewLayout-legacy-B1As2gDz.js"], function (_export, _context) {
    "use strict";

    var computed, createElementBlock, unref, createVNode, defineComponent, toDisplayString, createBlock, onMounted, Fragment, normalizeClass, withCtx, openBlock, renderList, createTextVNode, createSlots, createBaseVNode, useI18n, N8nNodeCreatorNode_default, N8nHeading_default, N8nCard_default, N8nLink_default, __plugin_vue_export_helper_default, useNodeTypesStore, VIEWS, useCalloutHelpers, NodeIcon_default, PageViewLayout_default, __vite_style__, PrebuiltAgentTemplatesView_vue_vue_type_script_setup_true_lang_default, content, header, section, grid, card, tutorials, templateLink, PrebuiltAgentTemplatesView_vue_vue_type_style_index_0_lang_module_default, cssModules, PrebuiltAgentTemplatesView_default;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Sn;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        onMounted = _vueRuntimeEsmBundlerLegacy003Js.Z;
        Fragment = _vueRuntimeEsmBundlerLegacy003Js._;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js._n;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        renderList = _vueRuntimeEsmBundlerLegacy003Js.it;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        createSlots = _vueRuntimeEsmBundlerLegacy003Js.k;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {
        N8nNodeCreatorNode_default = _srcLegacy007Js.O;
        N8nHeading_default = _srcLegacy007Js.Pn;
        N8nCard_default = _srcLegacy007Js.X;
        N8nLink_default = _srcLegacy007Js.mt;
      }, function (_enLegacy00bJs) {}, function (_preloadHelperLegacy00dJs) {}, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {}, function (_iconLegacy00lJs) {}, function (_emptyLegacy00tJs) {}, function (_useTelemetryLegacy00FJs) {
        useNodeTypesStore = _useTelemetryLegacy00FJs.rt;
      }, function (_sanitizeHtmlLegacy00JJs) {}, function (_pathBrowserifyLegacy00LJs) {}, function (_constantsLegacy00NJs) {
        VIEWS = _constantsLegacy00NJs.mo;
      }, function (_mergeLegacy00PJs) {}, function (_dateformatLegacy00TJs) {}, function (_useDebounceLegacy00VJs) {}, function (_useExternalHooksLegacy00XJs) {}, function (_cloudPlanStoreLegacy013Js) {}, function (_templatesStoreLegacy015Js) {}, function (_nodeCreatorStoreLegacy01jJs) {
        useCalloutHelpers = _nodeCreatorStoreLegacy01jJs._;
      }, function (_nodeIconLegacy01lJs) {}, function (_NodeIconLegacy01vJs) {
        NodeIcon_default = _NodeIconLegacy01vJs.t;
      }, function (_PageViewLayoutLegacy04jJs) {
        PageViewLayout_default = _PageViewLayoutLegacy04jJs.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._content_1jt4v_123 {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  gap: var(--spacing--md);\n  padding-bottom: var(--spacing--lg);\n}\n._header_1jt4v_131 {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n._section_1jt4v_137 {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing--sm);\n}\n._grid_1jt4v_143 {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: var(--spacing--sm);\n  width: 100%;\n  box-sizing: border-box;\n  align-items: start;\n  align-content: start;\n  grid-auto-rows: auto;\n  margin-bottom: var(--spacing--sm);\n}\n._card_1jt4v_155 {\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  align-self: start;\n}\n._tutorials_1jt4v_162 {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  gap: var(--spacing--sm);\n  margin-bottom: var(--spacing--sm);\n}\n._templateLink_1jt4v_170 {\n  padding: 0;\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/app/views/PrebuiltAgentTemplatesView.vue?vue&type=script&setup=true&lang.ts
        PrebuiltAgentTemplatesView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "PrebuiltAgentTemplatesView",
          setup(__props) {
            const nodeTypesStore = useNodeTypesStore();
            const i18n = useI18n();
            const calloutHelpers = useCalloutHelpers();
            const preBuiltAgents = computed(() => calloutHelpers.getPreBuiltAgentNodeCreatorItems());
            const tutorials$1 = computed(() => calloutHelpers.getTutorialTemplatesNodeCreatorItems());
            const openTemplate = templateId => {
              calloutHelpers.openSampleWorkflowTemplate(templateId, {
                telemetry: {
                  source: "templates"
                }
              });
            };
            onMounted(async () => {
              await nodeTypesStore.loadNodeTypesIfNotLoaded();
            });
            return (_ctx, _cache) => {
              return openBlock(), createBlock(PageViewLayout_default, null, {
                default: withCtx(() => [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.content)
                }, [createBaseVNode("section", {
                  class: normalizeClass(_ctx.$style.section)
                }, [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.header)
                }, [createVNode(unref(N8nHeading_default), {
                  tag: "h2",
                  bold: "",
                  size: "xlarge"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("preBuiltAgentTemplates.title")), 1)]),
                  _: 1
                }), createVNode(unref(N8nLink_default), {
                  to: {
                    name: unref(VIEWS).TEMPLATES
                  },
                  underline: "",
                  bold: ""
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("preBuiltAgentTemplates.viewAllLink")), 1)]),
                  _: 1
                }, 8, ["to"])], 2), createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.grid)
                }, [(openBlock(true), createElementBlock(Fragment, null, renderList(preBuiltAgents.value, template => {
                  return openBlock(), createBlock(unref(N8nCard_default), {
                    key: template.key,
                    class: normalizeClass(_ctx.$style.card),
                    onClick: $event => openTemplate(template.properties.templateId)
                  }, {
                    default: withCtx(() => [createVNode(unref(N8nNodeCreatorNode_default), {
                      class: normalizeClass(_ctx.$style.templateLink),
                      title: template.properties.title,
                      description: template.properties.description,
                      tag: template.properties.tag,
                      "show-action-arrow": true,
                      "is-trigger": false,
                      "hide-node-icon": true
                    }, createSlots({
                      _: 2
                    }, [template.properties.nodes ? {
                      name: "extraDetails",
                      fn: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(template.properties.nodes, node => {
                        return openBlock(), createBlock(NodeIcon_default, {
                          key: node.name,
                          "node-type": node,
                          size: 16,
                          "show-tooltip": true
                        }, null, 8, ["node-type"]);
                      }), 128))]),
                      key: "0"
                    } : void 0]), 1032, ["class", "title", "description", "tag"])]),
                    _: 2
                  }, 1032, ["class", "onClick"]);
                }), 128))], 2)], 2), createBaseVNode("section", {
                  class: normalizeClass(_ctx.$style.section)
                }, [createVNode(unref(N8nHeading_default), {
                  tag: "h2",
                  bold: "",
                  size: "xlarge"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("preBuiltAgentTemplates.tutorials")), 1)]),
                  _: 1
                }), createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.tutorials)
                }, [(openBlock(true), createElementBlock(Fragment, null, renderList(tutorials$1.value, template => {
                  return openBlock(), createBlock(unref(N8nCard_default), {
                    key: template.key,
                    class: normalizeClass(_ctx.$style.card),
                    onClick: $event => openTemplate(template.properties.templateId)
                  }, {
                    default: withCtx(() => [createVNode(unref(N8nNodeCreatorNode_default), {
                      class: normalizeClass(_ctx.$style.templateLink),
                      title: template.properties.title,
                      description: template.properties.description,
                      tag: template.properties.tag,
                      "show-action-arrow": true,
                      "is-trigger": false,
                      "hide-node-icon": true
                    }, createSlots({
                      _: 2
                    }, [template.properties.nodes ? {
                      name: "extraDetails",
                      fn: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(template.properties.nodes, node => {
                        return openBlock(), createBlock(NodeIcon_default, {
                          key: node.name,
                          "node-type": node,
                          size: 16,
                          "show-tooltip": true
                        }, null, 8, ["node-type"]);
                      }), 128))]),
                      key: "0"
                    } : void 0]), 1032, ["class", "title", "description", "tag"])]),
                    _: 2
                  }, 1032, ["class", "onClick"]);
                }), 128))], 2)], 2), createVNode(unref(N8nLink_default), {
                  to: {
                    name: unref(VIEWS).TEMPLATES
                  },
                  underline: "",
                  bold: ""
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("preBuiltAgentTemplates.viewAllLink")), 1)]),
                  _: 1
                }, 8, ["to"])], 2)]),
                _: 1
              });
            };
          }
        }); //#endregion
        //#region src/app/views/PrebuiltAgentTemplatesView.vue?vue&type=style&index=0&lang.module.scss
        content = "_content_1jt4v_123";
        header = "_header_1jt4v_131";
        section = "_section_1jt4v_137";
        grid = "_grid_1jt4v_143";
        card = "_card_1jt4v_155";
        tutorials = "_tutorials_1jt4v_162";
        templateLink = "_templateLink_1jt4v_170";
        PrebuiltAgentTemplatesView_vue_vue_type_style_index_0_lang_module_default = {
          content,
          header,
          section,
          grid,
          card,
          tutorials,
          templateLink
        }; //#endregion
        //#region src/app/views/PrebuiltAgentTemplatesView.vue
        cssModules = {
          "$style": PrebuiltAgentTemplatesView_vue_vue_type_style_index_0_lang_module_default
        };
        _export("default", PrebuiltAgentTemplatesView_default = /* @__PURE__ */__plugin_vue_export_helper_default(PrebuiltAgentTemplatesView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]])); //#endregion
      }
    };
  });
})();