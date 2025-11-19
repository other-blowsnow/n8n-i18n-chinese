;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-CVC6fg6H.js", "./src-legacy-D3-Bo0sy.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-Bk9bFklR.js"], function (_export, _context) {
    "use strict";

    var createElementBlock, createCommentVNode, unref, createVNode, defineComponent, toDisplayString, normalizeClass, renderSlot, openBlock, createBaseVNode, useI18n, N8nIcon_default, __plugin_vue_export_helper_default, useRouter, __vite_style__, _hoisted_1, GoBackButton_vue_vue_type_script_setup_true_lang_default, wrapper, icon, text, GoBackButton_vue_vue_type_style_index_0_lang_module_default, cssModules$1, GoBackButton_default, TemplatesView_vue_vue_type_script_setup_true_lang_default, template, container, header, goBack, TemplatesView_vue_vue_type_style_index_0_lang_module_default, cssModules, TemplatesView_default;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Sn;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js._n;
        renderSlot = _vueRuntimeEsmBundlerLegacy003Js.at;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {
        N8nIcon_default = _srcLegacy007Js.zn;
      }, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {
        useRouter = _truncateLegacy00hJs.b;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._wrapper_1reb8_123 {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n._wrapper_1reb8_123:hover ._icon_1reb8_128,\n._wrapper_1reb8_123:hover ._text_1reb8_129 {\n  color: var(--color--primary);\n}\n._icon_1reb8_128 {\n  margin-right: var(--spacing--2xs);\n  color: var(--color--foreground--shade-1);\n  font-size: var(--font-size--md);\n}\n._text_1reb8_129 {\n  font-size: var(--font-size--sm);\n  line-height: var(--line-height--lg);\n  color: var(--color--text);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._template_1xuli_123 {\n  display: flex;\n  width: 100%;\n  max-width: var(--content-container--width);\n  padding: var(--spacing--lg) var(--spacing--lg) 0;\n  justify-content: center;\n}\n@media (min-width: 1200px) {\n._template_1xuli_123 {\n    padding: var(--spacing--2xl) var(--spacing--2xl) 0;\n}\n}\n._container_1xuli_136 {\n  width: 100%;\n}\n._header_1xuli_140 {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: var(--spacing--2xl);\n}\n._goBack_1xuli_146 {\n  margin-bottom: var(--spacing--2xs);\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/app/components/GoBackButton.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1 = ["textContent"];
        GoBackButton_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "GoBackButton",
          setup(__props) {
            const router = useRouter();
            const i18n = useI18n();
            const navigateTo = () => {
              router.back();
            };
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(_ctx.$style.wrapper),
                onClick: navigateTo
              }, [createVNode(unref(N8nIcon_default), {
                class: normalizeClass(_ctx.$style.icon),
                icon: "arrow-left"
              }, null, 8, ["class"]), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.text),
                textContent: toDisplayString(unref(i18n).baseText("template.buttons.goBackButton"))
              }, null, 10, _hoisted_1)], 2);
            };
          }
        }); //#endregion
        //#region src/app/components/GoBackButton.vue?vue&type=style&index=0&lang.module.scss
        wrapper = "_wrapper_1reb8_123";
        icon = "_icon_1reb8_128";
        text = "_text_1reb8_129";
        GoBackButton_vue_vue_type_style_index_0_lang_module_default = {
          wrapper,
          icon,
          text
        }; //#endregion
        //#region src/app/components/GoBackButton.vue
        cssModules$1 = {
          "$style": GoBackButton_vue_vue_type_style_index_0_lang_module_default
        };
        GoBackButton_default = /* @__PURE__ */__plugin_vue_export_helper_default(GoBackButton_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$1]]); //#endregion
        //#region src/features/workflows/templates/views/TemplatesView.vue?vue&type=script&setup=true&lang.ts
        TemplatesView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "TemplatesView",
          props: {
            goBackEnabled: {
              type: Boolean,
              default: false
            }
          },
          setup(__props) {
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(_ctx.$style.template)
              }, [createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.container)
              }, [createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.header)
              }, [_ctx.goBackEnabled ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(_ctx.$style.goBack)
              }, [createVNode(GoBackButton_default)], 2)) : createCommentVNode("", true), renderSlot(_ctx.$slots, "header")], 2), createBaseVNode("div", null, [renderSlot(_ctx.$slots, "content")])], 2)], 2);
            };
          }
        }); //#endregion
        //#region src/features/workflows/templates/views/TemplatesView.vue?vue&type=style&index=0&lang.module.scss
        template = "_template_1xuli_123";
        container = "_container_1xuli_136";
        header = "_header_1xuli_140";
        goBack = "_goBack_1xuli_146";
        TemplatesView_vue_vue_type_style_index_0_lang_module_default = {
          template,
          container,
          header,
          goBack
        }; //#endregion
        //#region src/features/workflows/templates/views/TemplatesView.vue
        cssModules = {
          "$style": TemplatesView_vue_vue_type_style_index_0_lang_module_default
        };
        _export("t", TemplatesView_default = /* @__PURE__ */__plugin_vue_export_helper_default(TemplatesView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]])); //#endregion
      }
    };
  });
})();