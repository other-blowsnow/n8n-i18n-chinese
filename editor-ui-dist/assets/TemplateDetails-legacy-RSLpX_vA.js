;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-CVC6fg6H.js", "./src-legacy-D3-Bo0sy.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-Bk9bFklR.js", "./useTelemetry-legacy-BdQlQKwu.js", "./templates.store-legacy-BHiM3N7j.js", "./NodeIcon-legacy-B6aK_5Ny.js", "./TimeAgo-legacy-DZ56LCYg.js"], function (_export, _context) {
    "use strict";

    var computed, createElementBlock, createCommentVNode, unref, createVNode, defineComponent, toDisplayString, createBlock, Fragment, normalizeClass, renderSlot, withCtx, openBlock, renderList, createTextVNode, createBaseVNode, useI18n, N8nText_default, N8nHeading_default, N8nLoading_default, N8nTags_default, __plugin_vue_export_helper_default, useRouter, isFullTemplatesCollection, isTemplatesWorkflow, filterTemplateNodes, abbreviateNumber, useTemplatesStore, NodeIcon_default, TimeAgo_default, __vite_style__, TemplateDetailsBlock_vue_vue_type_script_setup_true_lang_default, block, header, content, TemplateDetailsBlock_vue_vue_type_style_index_0_lang_module_default, cssModules$1, TemplateDetailsBlock_default, TemplateDetails_vue_vue_type_script_setup_true_lang_default, icons, icon, text, TemplateDetails_vue_vue_type_style_index_0_lang_module_default, cssModules, TemplateDetails_default;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Sn;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        Fragment = _vueRuntimeEsmBundlerLegacy003Js._;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js._n;
        renderSlot = _vueRuntimeEsmBundlerLegacy003Js.at;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        renderList = _vueRuntimeEsmBundlerLegacy003Js.it;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {
        N8nText_default = _srcLegacy007Js.In;
        N8nHeading_default = _srcLegacy007Js.Pn;
        N8nLoading_default = _srcLegacy007Js.et;
        N8nTags_default = _srcLegacy007Js.h;
      }, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {
        useRouter = _truncateLegacy00hJs.b;
      }, function (_useTelemetryLegacy00FJs) {
        isFullTemplatesCollection = _useTelemetryLegacy00FJs.Mt;
        isTemplatesWorkflow = _useTelemetryLegacy00FJs.Nt;
        filterTemplateNodes = _useTelemetryLegacy00FJs.Vr;
        abbreviateNumber = _useTelemetryLegacy00FJs.li;
      }, function (_templatesStoreLegacy015Js) {
        useTemplatesStore = _templatesStoreLegacy015Js.t;
      }, function (_NodeIconLegacy01vJs) {
        NodeIcon_default = _NodeIconLegacy01vJs.t;
      }, function (_TimeAgoLegacy02HJs) {
        TimeAgo_default = _TimeAgoLegacy02HJs.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._block_88jt1_123 {\n  padding-bottom: var(--spacing--xl);\n}\n._header_88jt1_127 {\n  padding: 0 0 var(--spacing--4xs);\n  border-bottom: var(--border);\n}\n._content_88jt1_132 {\n  padding: var(--spacing--xs) 0 0;\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._icons_18wvw_123 {\n  display: flex;\n  flex-wrap: wrap;\n}\n._icon_18wvw_123 {\n  margin-right: var(--spacing--xs);\n  margin-bottom: var(--spacing--xs);\n  cursor: pointer;\n}\n._text_18wvw_134 {\n  padding-bottom: var(--spacing--xs);\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/features/workflows/templates/components/TemplateDetailsBlock.vue?vue&type=script&setup=true&lang.ts
        TemplateDetailsBlock_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "TemplateDetailsBlock",
          props: {
            title: {}
          },
          setup(__props) {
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(_ctx.$style.block)
              }, [createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.header)
              }, [createVNode(unref(N8nHeading_default), {
                tag: "h3",
                size: "small",
                color: "text-base"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(_ctx.title), 1)]),
                _: 1
              })], 2), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.content)
              }, [renderSlot(_ctx.$slots, "default")], 2)], 2);
            };
          }
        }); //#endregion
        //#region src/features/workflows/templates/components/TemplateDetailsBlock.vue?vue&type=style&index=0&lang.module.scss
        block = "_block_88jt1_123";
        header = "_header_88jt1_127";
        content = "_content_88jt1_132";
        TemplateDetailsBlock_vue_vue_type_style_index_0_lang_module_default = {
          block,
          header,
          content
        }; //#endregion
        //#region src/features/workflows/templates/components/TemplateDetailsBlock.vue
        cssModules$1 = {
          "$style": TemplateDetailsBlock_vue_vue_type_style_index_0_lang_module_default
        };
        TemplateDetailsBlock_default = /* @__PURE__ */__plugin_vue_export_helper_default(TemplateDetailsBlock_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$1]]); //#endregion
        //#region src/features/workflows/templates/components/TemplateDetails.vue?vue&type=script&setup=true&lang.ts
        TemplateDetails_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "TemplateDetails",
          props: {
            template: {},
            blockTitle: {},
            loading: {
              type: Boolean
            }
          },
          setup(__props) {
            const props = __props;
            const router = useRouter();
            const i18n = useI18n();
            const templatesStore = useTemplatesStore();
            const categoriesAsTags = computed(() => props.template && "categories" in props.template ? props.template.categories.map(category => ({
              id: `${category.id}`,
              name: category.name
            })) : []);
            const redirectToCategory = id => {
              templatesStore.resetSessionId();
              router.push(`/templates?categories=${id}`);
            };
            const redirectToSearchPage = node => {
              templatesStore.resetSessionId();
              router.push(`/templates?search=${node.displayName}`);
            };
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", null, [createVNode(unref(N8nLoading_default), {
                loading: _ctx.loading,
                rows: 5,
                variant: "p"
              }, null, 8, ["loading"]), !_ctx.loading && _ctx.template && _ctx.template.nodes.length > 0 ? (openBlock(), createBlock(TemplateDetailsBlock_default, {
                key: 0,
                title: _ctx.blockTitle
              }, {
                default: withCtx(() => [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.icons)
                }, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(filterTemplateNodes)(_ctx.template.nodes), node => {
                  return openBlock(), createElementBlock("div", {
                    key: node.name,
                    class: normalizeClass(_ctx.$style.icon)
                  }, [createVNode(NodeIcon_default, {
                    "node-type": node,
                    size: 24,
                    "show-tooltip": true,
                    onClick: $event => redirectToSearchPage(node)
                  }, null, 8, ["node-type", "onClick"])], 2);
                }), 128))], 2)]),
                _: 1
              }, 8, ["title"])) : createCommentVNode("", true), !_ctx.loading && unref(isFullTemplatesCollection)(_ctx.template) && categoriesAsTags.value.length > 0 ? (openBlock(), createBlock(TemplateDetailsBlock_default, {
                key: 1,
                title: unref(i18n).baseText("template.details.categories")
              }, {
                default: withCtx(() => [createVNode(unref(N8nTags_default), {
                  tags: categoriesAsTags.value,
                  "onClick:tag": redirectToCategory
                }, null, 8, ["tags"])]),
                _: 1
              }, 8, ["title"])) : createCommentVNode("", true), !_ctx.loading && _ctx.template ? (openBlock(), createBlock(TemplateDetailsBlock_default, {
                key: 2,
                title: unref(i18n).baseText("template.details.details")
              }, {
                default: withCtx(() => [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.text)
                }, [unref(isTemplatesWorkflow)(_ctx.template) ? (openBlock(), createBlock(unref(N8nText_default), {
                  key: 0,
                  size: "small",
                  color: "text-base"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("template.details.created")) + " ", 1), createVNode(TimeAgo_default, {
                    date: _ctx.template.createdAt
                  }, null, 8, ["date"]), createTextVNode(" " + toDisplayString(unref(i18n).baseText("template.details.by")) + " " + toDisplayString(_ctx.template.user ? _ctx.template.user.username : "n8n team"), 1)]),
                  _: 1
                })) : createCommentVNode("", true)], 2), createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.text)
                }, [unref(isTemplatesWorkflow)(_ctx.template) && _ctx.template.totalViews !== 0 ? (openBlock(), createBlock(unref(N8nText_default), {
                  key: 0,
                  size: "small",
                  color: "text-base"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("template.details.viewed")) + " " + toDisplayString(unref(abbreviateNumber)(_ctx.template.totalViews)) + " " + toDisplayString(unref(i18n).baseText("template.details.times")), 1)]),
                  _: 1
                })) : createCommentVNode("", true)], 2)]),
                _: 1
              }, 8, ["title"])) : createCommentVNode("", true)]);
            };
          }
        }); //#endregion
        //#region src/features/workflows/templates/components/TemplateDetails.vue?vue&type=style&index=0&lang.module.scss
        icons = "_icons_18wvw_123";
        icon = "_icon_18wvw_123";
        text = "_text_18wvw_134";
        TemplateDetails_vue_vue_type_style_index_0_lang_module_default = {
          icons,
          icon,
          text
        }; //#endregion
        //#region src/features/workflows/templates/components/TemplateDetails.vue
        cssModules = {
          "$style": TemplateDetails_vue_vue_type_style_index_0_lang_module_default
        };
        _export("t", TemplateDetails_default = /* @__PURE__ */__plugin_vue_export_helper_default(TemplateDetails_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]])); //#endregion
      }
    };
  });
})();