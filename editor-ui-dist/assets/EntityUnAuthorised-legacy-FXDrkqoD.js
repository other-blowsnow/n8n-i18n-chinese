;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-CVC6fg6H.js", "./src-legacy-D3-Bo0sy.js", "./en-legacy-Bgme8Vbm.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-Bk9bFklR.js", "./icon-legacy-1U_nlJHf.js", "./empty-legacy-DnVUoqbC.js", "./sanitize-html-legacy-DfOUEbdf.js", "./path-browserify-legacy-DJbEMZcd.js"], function (_export, _context) {
    "use strict";

    var createElementBlock, unref, createVNode, defineComponent, toDisplayString, withCtx, openBlock, createTextVNode, createBaseVNode, useI18n, N8nText_default, N8nHeading_default, N8nCard_default, __plugin_vue_export_helper_default, __vite_style__, _hoisted_1, EntityUnAuthorised_vue_vue_type_script_setup_true_lang_default, EntityUnAuthorised_default;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Sn;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {
        N8nText_default = _srcLegacy007Js.In;
        N8nHeading_default = _srcLegacy007Js.Pn;
        N8nCard_default = _srcLegacy007Js.X;
      }, function (_enLegacy00bJs) {}, function (_preloadHelperLegacy00dJs) {}, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {}, function (_iconLegacy00lJs) {}, function (_emptyLegacy00tJs) {}, function (_sanitizeHtmlLegacy00JJs) {}, function (_pathBrowserifyLegacy00LJs) {}],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "\n.entity-un-authorized-view[data-v-e8d3fd89] {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n}\n.entity-card[data-v-e8d3fd89] {\n\tmax-width: 400px;\n\tpadding: var(--spacing--xl);\n}\n/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/app/views/EntityUnAuthorised.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1 = {
          class: "entity-un-authorized-view"
        };
        EntityUnAuthorised_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "EntityUnAuthorised",
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
                }, [createBaseVNode("path", {
                  d: "M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z",
                  stroke: "var(--text-button--color--text--secondary)",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                }), createBaseVNode("path", {
                  d: "M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11",
                  stroke: "var(--text-button--color--text--secondary)",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round"
                })])], -1)), createVNode(unref(N8nHeading_default), {
                  size: "xlarge",
                  align: "center",
                  tag: "h2",
                  color: "text-dark",
                  class: "mb-2xs"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("error.entityUnAuthorized.title")), 1)]),
                  _: 1
                }), createVNode(unref(N8nText_default), {
                  color: "text-base",
                  tag: "p",
                  align: "center"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("error.entityUnAuthorized.content", {
                    interpolate: {
                      entity: unref(locale).baseText(`generic.${_ctx.entityType}`).toLocaleLowerCase()
                    }
                  })), 1)]),
                  _: 1
                })]),
                _: 1
              })]);
            };
          }
        }); //#endregion
        //#region src/app/views/EntityUnAuthorised.vue
        _export("default", EntityUnAuthorised_default = /* @__PURE__ */__plugin_vue_export_helper_default(EntityUnAuthorised_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-e8d3fd89"]])); //#endregion
      }
    };
  });
})();