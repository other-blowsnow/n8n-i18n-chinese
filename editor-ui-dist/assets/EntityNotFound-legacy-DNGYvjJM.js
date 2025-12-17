;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy--Sn1h8On.js", "./_MapCache-legacy-DHBQRRQG.js", "./src-legacy-Bos09xer.js", "./en-legacy-DJK4SpPN.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-BIn0keUI.js", "./icon-legacy-CIK-lB61.js", "./empty-legacy-ZG0-xpne.js", "./sanitize-html-legacy-B93rGWi4.js", "./CalendarDate-legacy-BUvNgcoo.js", "./path-browserify-legacy-PZw06cM9.js"], function (_export, _context) {
    "use strict";

    var toDisplayString, createElementBlock, unref, createVNode, defineComponent, withCtx, openBlock, createTextVNode, createBaseVNode, useI18n, N8nButton_default, N8nText_default, N8nCard_default, N8nHeading_default, __plugin_vue_export_helper_default, __vite_style__, _hoisted_1, EntityNotFound_vue_vue_type_script_setup_true_lang_default, EntityNotFound_default;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Cn;
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {
        N8nButton_default = _srcLegacy007Js.Hn;
        N8nText_default = _srcLegacy007Js.Vn;
        N8nCard_default = _srcLegacy007Js.Z;
        N8nHeading_default = _srcLegacy007Js.zn;
      }, function (_enLegacy00bJs) {}, function (_preloadHelperLegacy00dJs) {}, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {}, function (_iconLegacy00nJs) {}, function (_emptyLegacy00vJs) {}, function (_sanitizeHtmlLegacy00LJs) {}, function (_CalendarDateLegacy00NJs) {}, function (_pathBrowserifyLegacy00RJs) {}],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "\n.entity-not-found-view[data-v-57737623] {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n}\n.entity-card[data-v-57737623] {\n\tmax-width: 400px;\n\tpadding: var(--spacing--xl);\n}\n/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/app/views/EntityNotFound.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1 = {
          class: "entity-not-found-view"
        };
        EntityNotFound_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "EntityNotFound",
          props: {
            entityType: {}
          },
          setup(__props) {
            const locale = useI18n();
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", _hoisted_1, [createVNode(unref(N8nCard_default), {
                class: "entity-card"
              }, {
                default: withCtx(() => [_cache[0] || (_cache[0] = createBaseVNode("div", {
                  class: "text-center mb-l"
                }, [createBaseVNode("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "24",
                  height: "24",
                  viewBox: "0 0 24 24",
                  fill: "none"
                }, [createBaseVNode("circle", {
                  cx: "12",
                  cy: "12",
                  r: "10",
                  stroke: "var(--text-button--color--text--secondary)",
                  "stroke-width": "2"
                }), createBaseVNode("rect", {
                  x: "11",
                  y: "6",
                  width: "2",
                  height: "8",
                  fill: "var(--text-button--color--text--secondary)"
                }), createBaseVNode("rect", {
                  x: "11",
                  y: "16",
                  width: "2",
                  height: "2",
                  fill: "var(--text-button--color--text--secondary)"
                })])], -1)), createVNode(unref(N8nHeading_default), {
                  size: "xlarge",
                  align: "center",
                  tag: "h2",
                  color: "text-dark",
                  class: "mb-2xs"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("error.entityNotFound.title", {
                    interpolate: {
                      entity: unref(locale).baseText(`generic.${_ctx.entityType}`)
                    }
                  })), 1)]),
                  _: 1
                }), createVNode(unref(N8nText_default), {
                  color: "text-base",
                  tag: "p",
                  align: "center",
                  class: "mb-m"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("error.entityNotFound.text", {
                    interpolate: {
                      entity: unref(locale).baseText(`generic.${_ctx.entityType}`).toLocaleLowerCase()
                    }
                  })), 1)]),
                  _: 1
                }), createVNode(unref(N8nButton_default), {
                  href: "/",
                  element: "a",
                  type: "secondary"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("error.entityNotFound.action")), 1)]),
                  _: 1
                })]),
                _: 1
              })]);
            };
          }
        }); //#endregion
        //#region src/app/views/EntityNotFound.vue
        _export("default", EntityNotFound_default = /* @__PURE__ */__plugin_vue_export_helper_default(EntityNotFound_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-57737623"]])); //#endregion
      }
    };
  });
})();