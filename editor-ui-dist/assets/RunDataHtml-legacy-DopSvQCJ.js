;
(function () {
  System.register(["./chunk-legacy-Re9CbdfL.js", "./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./sanitize-html-legacy-DfOUEbdf.js"], function (_export, _context) {
    "use strict";

    var __toESM, createElementBlock, openBlock, __plugin_vue_export_helper_default, require_sanitize_html, __vite_style__, import_sanitize_html, sanitizeOptions, RunDataHtml_vue_vue_type_script_lang_default, _hoisted_1, RunDataHtml_default;
    function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
      return openBlock(), createElementBlock("iframe", {
        class: "__html-display",
        srcdoc: $options.sanitizedHtml
      }, null, 8, _hoisted_1);
    }
    return {
      setters: [function (_chunkLegacy001Js) {
        __toESM = _chunkLegacy001Js.o;
      }, function (_vueRuntimeEsmBundlerLegacy003Js) {
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
      }, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_sanitizeHtmlLegacy00JJs) {
        require_sanitize_html = _sanitizeHtmlLegacy00JJs.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n.__html-display {\n  width: 100%;\n  height: 100%;\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/features/ndv/runData/components/RunDataHtml.vue?vue&type=script&lang.ts
        import_sanitize_html = /* @__PURE__ */__toESM(require_sanitize_html());
        sanitizeOptions = {
          allowVulnerableTags: false,
          enforceHtmlBoundary: false,
          disallowedTagsMode: "discard",
          allowedTags: [...import_sanitize_html.defaults.allowedTags, "style", "img", "title"],
          allowedAttributes: {
            ...import_sanitize_html.defaults.allowedAttributes,
            "*": ["class", "style"]
          },
          transformTags: {
            head: ""
          }
        };
        RunDataHtml_vue_vue_type_script_lang_default = {
          name: "RunDataHtml",
          props: {
            inputHtml: {
              type: String,
              required: true
            }
          },
          computed: {
            sanitizedHtml() {
              return (0, import_sanitize_html.default)(this.inputHtml, sanitizeOptions);
            }
          }
        }; //#endregion
        //#region src/features/ndv/runData/components/RunDataHtml.vue
        _hoisted_1 = ["srcdoc"];
        _export("t", RunDataHtml_default = /* @__PURE__ */__plugin_vue_export_helper_default(RunDataHtml_vue_vue_type_script_lang_default, [["render", _sfc_render]])); //#endregion
      }
    };
  });
})();