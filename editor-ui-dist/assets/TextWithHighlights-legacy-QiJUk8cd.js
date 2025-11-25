;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js"], function (_export, _context) {
    "use strict";

    var computed, createElementBlock, createCommentVNode, defineComponent, toDisplayString, Fragment, normalizeClass, openBlock, renderList, createTextVNode, __plugin_vue_export_helper_default, __vite_style__, _hoisted_1, _hoisted_2, TextWithHighlights_vue_vue_type_script_setup_true_lang_default, content, newLine, TextWithHighlights_vue_vue_type_style_index_0_lang_module_default, cssModules, TextWithHighlights_default;
    //#region src/app/utils/stringUtils.ts
    /**
    * Split given text by the search term
    *
    * @param text Text to split
    * @param search The search term
    * @returns An array containing splitted text, each containing text fragment and the match flag.
    */
    function splitTextBySearch(text, search) {
      if (!search) return [{
        isMatched: false,
        content: text
      }];
      const escapeRegExp = s => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const pattern = new RegExp(`(${escapeRegExp(search)})`, "i");
      return text.split(pattern).map(part => ({
        isMatched: pattern.test(part),
        content: part
      })).filter(part => part.content !== "");
    }

    //#endregion
    //#region src/features/ndv/runData/components/TextWithHighlights.vue?vue&type=script&setup=true&lang.ts
    _export("n", splitTextBySearch);
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Sn;
        Fragment = _vueRuntimeEsmBundlerLegacy003Js._;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js._n;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        renderList = _vueRuntimeEsmBundlerLegacy003Js.it;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
      }, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n:root ._content_90cst_123 ._newLine_90cst_123 {\n  font-family: var(--font-family--monospace);\n  color: var(--line-break--color);\n  padding-right: 2px;\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        _hoisted_1 = {
          key: 0
        };
        _hoisted_2 = ["textContent"];
        TextWithHighlights_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "TextWithHighlights",
          props: {
            content: {
              type: [String, Object, Number, Boolean, null]
            },
            search: {}
          },
          setup(__props) {
            const props = __props;
            const parts = computed(() => {
              return props.search && typeof props.content === "string" ? splitTextBySearch(props.content, props.search) : [];
            });
            return (_ctx, _cache) => {
              return parts.value.length && typeof props.content === "string" ? (openBlock(), createElementBlock("span", _hoisted_1, [(openBlock(true), createElementBlock(Fragment, null, renderList(parts.value, (part, index) => {
                return openBlock(), createElementBlock(Fragment, null, [part.isMatched && part.content ? (openBlock(), createElementBlock("mark", {
                  key: `mark-${index}`
                }, toDisplayString(part.content), 1)) : part.content ? (openBlock(), createElementBlock("span", {
                  key: `span-${index}`
                }, toDisplayString(part.content), 1)) : createCommentVNode("", true)], 64);
              }), 256))])) : (openBlock(), createElementBlock("span", {
                key: 1,
                class: normalizeClass(_ctx.$style.content)
              }, [typeof props.content === "string" ? (openBlock(true), createElementBlock(Fragment, {
                key: 0
              }, renderList(props.content.split("\n"), (line, index) => {
                return openBlock(), createElementBlock("span", {
                  key: `line-${index}`
                }, [index > 0 ? (openBlock(), createElementBlock("span", {
                  key: 0,
                  class: normalizeClass(_ctx.$style.newLine)
                }, "\\n", 2)) : createCommentVNode("", true), createTextVNode(toDisplayString(line), 1)]);
              }), 128)) : (openBlock(), createElementBlock("span", {
                key: 1,
                textContent: toDisplayString(props.content)
              }, null, 8, _hoisted_2))], 2));
            };
          }
        }); //#endregion
        //#region src/features/ndv/runData/components/TextWithHighlights.vue?vue&type=style&index=0&lang.module.scss
        content = "_content_90cst_123";
        newLine = "_newLine_90cst_123";
        TextWithHighlights_vue_vue_type_style_index_0_lang_module_default = {
          content,
          newLine
        }; //#endregion
        //#region src/features/ndv/runData/components/TextWithHighlights.vue
        cssModules = {
          "$style": TextWithHighlights_vue_vue_type_style_index_0_lang_module_default
        };
        _export("t", TextWithHighlights_default = /* @__PURE__ */__plugin_vue_export_helper_default(TextWithHighlights_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]])); //#endregion
      }
    };
  });
})();