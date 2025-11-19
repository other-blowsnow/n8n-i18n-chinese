;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./src-legacy-D3-Bo0sy.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js"], function (_export, _context) {
    "use strict";

    var createCommentVNode, unref, defineComponent, toDisplayString, createBlock, mergeProps, normalizeClass, renderSlot, withCtx, openBlock, normalizeProps, createBaseVNode, N8nKeyboardShortcut_default, N8nTooltip_default, __plugin_vue_export_helper_default, __vite_style__, KeyboardShortcutTooltip_vue_vue_type_script_setup_true_lang_default, shortcut, label, KeyboardShortcutTooltip_vue_vue_type_style_index_0_lang_module_default, cssModules, KeyboardShortcutTooltip_default;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Sn;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        mergeProps = _vueRuntimeEsmBundlerLegacy003Js.W;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js._n;
        renderSlot = _vueRuntimeEsmBundlerLegacy003Js.at;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        normalizeProps = _vueRuntimeEsmBundlerLegacy003Js.vn;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
      }, function (_srcLegacy007Js) {
        N8nKeyboardShortcut_default = _srcLegacy007Js.nt;
        N8nTooltip_default = _srcLegacy007Js.vt;
      }, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._shortcut_af6oh_123 {\n  display: flex;\n  align-items: center;\n  font-size: var(--font-size--2xs);\n  gap: var(--spacing--2xs);\n}\n._label_af6oh_130 {\n  flex-shrink: 0;\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/app/components/KeyboardShortcutTooltip.vue?vue&type=script&setup=true&lang.ts
        KeyboardShortcutTooltip_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "KeyboardShortcutTooltip",
          props: {
            label: {},
            shortcut: {
              default: void 0
            },
            placement: {
              default: "top"
            },
            disabled: {
              type: Boolean
            }
          },
          setup(__props) {
            return (_ctx, _cache) => {
              return openBlock(), createBlock(unref(N8nTooltip_default), {
                placement: _ctx.placement,
                "show-after": 500,
                disabled: _ctx.disabled
              }, {
                content: withCtx(() => [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.shortcut)
                }, [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.label)
                }, toDisplayString(_ctx.label), 3), _ctx.shortcut ? (openBlock(), createBlock(unref(N8nKeyboardShortcut_default), normalizeProps(mergeProps({
                  key: 0
                }, _ctx.shortcut)), null, 16)) : createCommentVNode("", true)], 2)]),
                default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
                _: 3
              }, 8, ["placement", "disabled"]);
            };
          }
        }); //#endregion
        //#region src/app/components/KeyboardShortcutTooltip.vue?vue&type=style&index=0&lang.module.scss
        shortcut = "_shortcut_af6oh_123";
        label = "_label_af6oh_130";
        KeyboardShortcutTooltip_vue_vue_type_style_index_0_lang_module_default = {
          shortcut,
          label
        }; //#endregion
        //#region src/app/components/KeyboardShortcutTooltip.vue
        cssModules = {
          "$style": KeyboardShortcutTooltip_vue_vue_type_style_index_0_lang_module_default
        };
        _export("t", KeyboardShortcutTooltip_default = /* @__PURE__ */__plugin_vue_export_helper_default(KeyboardShortcutTooltip_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]])); //#endregion
      }
    };
  });
})();