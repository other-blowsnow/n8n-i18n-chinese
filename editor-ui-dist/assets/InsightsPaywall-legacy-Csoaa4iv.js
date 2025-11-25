;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-2Qb71DGn.js", "./src-legacy-BL8uywAx.js", "./en-legacy-s6H-lEA2.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-ZZ87M1Mo.js", "./icon-legacy-CRT-hvlv.js", "./empty-legacy-CsIOGMHW.js", "./useTelemetry-legacy-Ck7lGOrk.js", "./useToast-legacy-tN8taI-S.js", "./sanitize-html-legacy-Cack6L-S.js", "./path-browserify-legacy-BQKq4wLb.js", "./constants-legacy-D0ziSY9e.js", "./merge-legacy-BVgKBTAX.js", "./useRootStore-legacy-D1vvqLPX.js", "./dateformat-legacy-BaeIHy_2.js", "./useDebounce-legacy-B8z7M2-W.js", "./useExternalHooks-legacy-DgS1u46v.js", "./useStyles-legacy-DnD2qvTK.js", "./cloudPlan.store-legacy-Uv9UJvN5.js", "./versions.store-legacy-DvrrUt8o.js", "./usePageRedirectionHelper-legacy-BOS_Zm4X.js"], function (_export, _context) {
    "use strict";

    var createElementBlock, unref, createVNode, defineComponent, toDisplayString, normalizeClass, withCtx, openBlock, createTextVNode, useI18n, N8nIcon_default, N8nText_default, N8nButton_default, __plugin_vue_export_helper_default, usePageRedirectionHelper, __vite_style__, InsightsPaywall_vue_vue_type_script_setup_true_lang_default, callout, InsightsPaywall_vue_vue_type_style_index_0_lang_module_default, cssModules, InsightsPaywall_default;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Sn;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js._n;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {
        N8nIcon_default = _srcLegacy007Js.Bn;
        N8nText_default = _srcLegacy007Js.Ln;
        N8nButton_default = _srcLegacy007Js.Rn;
      }, function (_enLegacy00bJs) {}, function (_preloadHelperLegacy00dJs) {}, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {}, function (_iconLegacy00lJs) {}, function (_emptyLegacy00tJs) {}, function (_useTelemetryLegacy00FJs) {}, function (_useToastLegacy00HJs) {}, function (_sanitizeHtmlLegacy00JJs) {}, function (_pathBrowserifyLegacy00LJs) {}, function (_constantsLegacy00NJs) {}, function (_mergeLegacy00PJs) {}, function (_useRootStoreLegacy00TJs) {}, function (_dateformatLegacy00VJs) {}, function (_useDebounceLegacy00XJs) {}, function (_useExternalHooksLegacy00ZJs) {}, function (_useStylesLegacy00$Js) {}, function (_cloudPlanStoreLegacy017Js) {}, function (_versionsStoreLegacy01FJs) {}, function (_usePageRedirectionHelperLegacy01HJs) {
        usePageRedirectionHelper = _usePageRedirectionHelperLegacy01HJs.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._callout_9szlr_123 {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  padding: 6rem 0;\n  align-items: center;\n  max-width: 360px;\n  margin: 0 auto;\n  text-align: center;\n  gap: 10px;\n  justify-content: center;\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/features/execution/insights/components/InsightsPaywall.vue?vue&type=script&setup=true&lang.ts
        InsightsPaywall_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "InsightsPaywall",
          setup(__props) {
            const pageRedirectionHelper = usePageRedirectionHelper();
            const i18n = useI18n();
            const goToUpgrade = async () => {
              await pageRedirectionHelper.goToUpgrade("insights", "upgrade-insights");
            };
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(_ctx.$style.callout)
              }, [createVNode(unref(N8nIcon_default), {
                icon: "lock",
                size: "xlarge"
              }), createVNode(unref(N8nText_default), {
                bold: "",
                tag: "h4",
                size: "large"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("insights.dashboard.paywall.title")), 1)]),
                _: 1
              }), createVNode(unref(N8nText_default), null, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("insights.dashboard.paywall.description")), 1)]),
                _: 1
              }), createVNode(unref(N8nButton_default), {
                type: "primary",
                "native-type": "button",
                size: "large",
                onClick: goToUpgrade
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.upgrade")), 1)]),
                _: 1
              })], 2);
            };
          }
        }); //#endregion
        //#region src/features/execution/insights/components/InsightsPaywall.vue?vue&type=style&index=0&lang.module.scss
        callout = "_callout_9szlr_123";
        InsightsPaywall_vue_vue_type_style_index_0_lang_module_default = {
          callout
        }; //#endregion
        //#region src/features/execution/insights/components/InsightsPaywall.vue
        cssModules = {
          "$style": InsightsPaywall_vue_vue_type_style_index_0_lang_module_default
        };
        _export("default", InsightsPaywall_default = /* @__PURE__ */__plugin_vue_export_helper_default(InsightsPaywall_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]])); //#endregion
      }
    };
  });
})();