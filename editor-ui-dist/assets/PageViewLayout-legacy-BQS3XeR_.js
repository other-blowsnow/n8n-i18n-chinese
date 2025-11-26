;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js"], function (_export, _context) {
    "use strict";

    var createElementBlock, normalizeClass, renderSlot, openBlock, createBaseVNode, __plugin_vue_export_helper_default, __vite_style__, wrapper, content, PageViewLayout_vue_vue_type_style_index_0_lang_module_default, _sfc_main, cssModules, PageViewLayout_default;
    function _sfc_render(_ctx, _cache) {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.wrapper)
      }, [renderSlot(_ctx.$slots, "header"), createBaseVNode("main", {
        class: normalizeClass(_ctx.$style.content)
      }, [renderSlot(_ctx.$slots, "default")], 2)], 2);
    }
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js._n;
        renderSlot = _vueRuntimeEsmBundlerLegacy003Js.at;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
      }, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._wrapper_1lm7r_123 {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  max-width: var(--content-container--width);\n  box-sizing: border-box;\n  align-content: start;\n  padding: var(--spacing--lg) var(--spacing--2xl) 0;\n}\n@media screen and (max-width: 991px) {\n._wrapper_1lm7r_123 {\n    padding: var(--spacing--sm) var(--spacing--sm) 0;\n}\n}\n._content_1lm7r_139 {\n  display: grid;\n  height: 100%;\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/app/components/layouts/PageViewLayout.vue?vue&type=style&index=0&lang.module.scss
        wrapper = "_wrapper_1lm7r_123";
        content = "_content_1lm7r_139";
        PageViewLayout_vue_vue_type_style_index_0_lang_module_default = {
          wrapper,
          content
        }; //#endregion
        //#region src/app/components/layouts/PageViewLayout.vue
        _sfc_main = {};
        cssModules = {
          "$style": PageViewLayout_vue_vue_type_style_index_0_lang_module_default
        };
        _export("t", PageViewLayout_default = /* @__PURE__ */__plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render], ["__cssModules", cssModules]])); //#endregion
      }
    };
  });
})();