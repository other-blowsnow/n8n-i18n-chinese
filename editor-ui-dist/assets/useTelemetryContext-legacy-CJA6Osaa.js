;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./constants-legacy-B0GcWb62.js"], function (_export, _context) {
    "use strict";

    var createElementBlock, defineComponent, normalizeClass, openBlock, provide, resolveDirective, withDirectives, inject, __plugin_vue_export_helper_default, TelemetryContextSymbol, __vite_style__, MappingPill_vue_vue_type_script_setup_true_lang_default, dragPill, droppablePill, defaultPill, MappingPill_vue_vue_type_style_index_0_lang_module_default, cssModules, MappingPill_default;
    //#endregion
    //#region src/app/composables/useTelemetryContext.ts
    /**
    * Composable that injects/provides data for telemetry payload.
    *
    * Intended for populating telemetry payload in reusable components to include
    * contextual information that depends on which part of UI it is used.
    */
    function useTelemetryContext(overrides = {}) {
      const merged = {
        ...inject(TelemetryContextSymbol, {}),
        ...overrides
      };
      provide(TelemetryContextSymbol, merged);
      return merged;
    }

    //#endregion
    _export("t", useTelemetryContext);
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js._n;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        provide = _vueRuntimeEsmBundlerLegacy003Js.nt;
        resolveDirective = _vueRuntimeEsmBundlerLegacy003Js.st;
        withDirectives = _vueRuntimeEsmBundlerLegacy003Js.xt;
        inject = _vueRuntimeEsmBundlerLegacy003Js.z;
      }, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_constantsLegacy00NJs) {
        TelemetryContextSymbol = _constantsLegacy00NJs.Es;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._dragPill_wasb1_123 {\n  display: inline-flex;\n  height: 24px;\n  padding: 0 var(--spacing--3xs);\n  border: 1px solid var(--color--foreground--tint-1);\n  border-radius: 4px;\n  background: var(--color--background--light-3);\n  font-size: var(--font-size--2xs);\n  color: var(--color--text);\n  white-space: nowrap;\n  align-items: center;\n}\n._dragPill_wasb1_123 span {\n  display: flex;\n  height: 100%;\n  align-items: center;\n}\n._droppablePill_wasb1_141,\n._droppablePill_wasb1_141 span span {\n  color: var(--color--success);\n  border-color: var(--color--success--tint-1);\n  background-color: white;\n}\n._defaultPill_wasb1_148 {\n  transform: translate(-50%, -100%);\n  box-shadow: 0 2px 6px rgba(68, 28, 23, 0.2);\n}\n._defaultPill_wasb1_148,\n._defaultPill_wasb1_148 span span {\n  color: var(--color--primary);\n  border-color: var(--color--primary--tint-1);\n  background-color: var(--color--primary--tint-3);\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/features/ndv/runData/components/MappingPill.vue?vue&type=script&setup=true&lang.ts
        MappingPill_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "MappingPill",
          props: {
            html: {},
            canDrop: {
              type: Boolean,
              default: false
            }
          },
          setup(__props) {
            return (_ctx, _cache) => {
              const _directive_n8n_html = resolveDirective("n8n-html");
              return withDirectives((openBlock(), createElementBlock("div", {
                class: normalizeClass([_ctx.$style.dragPill, _ctx.canDrop ? _ctx.$style.droppablePill : _ctx.$style.defaultPill])
              }, null, 2)), [[_directive_n8n_html, _ctx.html]]);
            };
          }
        }); //#endregion
        //#region src/features/ndv/runData/components/MappingPill.vue?vue&type=style&index=0&lang.module.scss
        dragPill = "_dragPill_wasb1_123";
        droppablePill = "_droppablePill_wasb1_141";
        defaultPill = "_defaultPill_wasb1_148";
        MappingPill_vue_vue_type_style_index_0_lang_module_default = {
          dragPill,
          droppablePill,
          defaultPill
        }; //#endregion
        //#region src/features/ndv/runData/components/MappingPill.vue
        cssModules = {
          "$style": MappingPill_vue_vue_type_style_index_0_lang_module_default
        };
        _export("n", MappingPill_default = /* @__PURE__ */__plugin_vue_export_helper_default(MappingPill_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]]));
      }
    };
  });
})();