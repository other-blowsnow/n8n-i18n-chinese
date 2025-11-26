;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js"], function (_export, _context) {
    "use strict";

    var createStaticVNode, createElementBlock, openBlock, __plugin_vue_export_helper_default, __vite_style__, _sfc_main, _hoisted_1, AnimatedSpinner_default;
    function _sfc_render(_ctx, _cache) {
      return openBlock(), createElementBlock("svg", _hoisted_1, _cache[0] || (_cache[0] = [createStaticVNode("<g data-v-5d3fc1df><path d=\"M7 0L7 3\" stroke=\"currentColor\" stroke-width=\"2\" class=\"line one\" data-v-5d3fc1df></path><path d=\"M11.9497 2.05031L9.82837 4.17163\" stroke=\"currentColor\" stroke-width=\"2\" class=\"line two\" data-v-5d3fc1df></path><path d=\"M14 7L11 7\" stroke=\"currentColor\" stroke-width=\"2\" class=\"line three\" data-v-5d3fc1df></path><path d=\"M11.9497 11.9497L9.82839 9.82839\" stroke=\"currentColor\" stroke-width=\"2\" class=\"line four\" data-v-5d3fc1df></path><path d=\"M7 14L7 11\" stroke=\"currentColor\" stroke-width=\"2\" class=\"line five\" data-v-5d3fc1df></path><path d=\"M0 7L3 7\" stroke=\"currentColor\" stroke-width=\"2\" class=\"line seven\" data-v-5d3fc1df></path><path d=\"M2.05031 2.05031L4.17163 4.17163\" stroke=\"currentColor\" stroke-width=\"2\" class=\"line eight\" data-v-5d3fc1df></path><path d=\"M2.05029 11.9497L4.17161 9.82839\" stroke=\"currentColor\" stroke-width=\"2\" class=\"line six\" data-v-5d3fc1df></path></g>", 1)]));
    }
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        createStaticVNode = _vueRuntimeEsmBundlerLegacy003Js.A;
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
      }, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "\n@keyframes fade-5d3fc1df {\n0% {\n\t\topacity: 100;\n}\n20% {\n\t\topacity: 0;\n}\n40% {\n\t\topacity: 100;\n}\n}\n.line[data-v-5d3fc1df] {\n\tanimation: fade-5d3fc1df 1.6s infinite;\n}\n.one[data-v-5d3fc1df] {\n\tanimation-delay: 0s;\n}\n.two[data-v-5d3fc1df] {\n\tanimation-delay: 0.2s;\n}\n.three[data-v-5d3fc1df] {\n\tanimation-delay: 0.4s;\n}\n.four[data-v-5d3fc1df] {\n\tanimation-delay: 0.6s;\n}\n.five[data-v-5d3fc1df] {\n\tanimation-delay: 0.8s;\n}\n.six[data-v-5d3fc1df] {\n\tanimation-delay: 1s;\n}\n.seven[data-v-5d3fc1df] {\n\tanimation-delay: 1.2s;\n}\n.eight[data-v-5d3fc1df] {\n\tanimation-delay: 1.4s;\n}\n/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/app/components/AnimatedSpinner.vue
        _sfc_main = {};
        _hoisted_1 = {
          width: "14",
          height: "14",
          viewBox: "0 0 14 14",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        };
        _export("t", AnimatedSpinner_default = /* @__PURE__ */__plugin_vue_export_helper_default(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-5d3fc1df"]])); //#endregion
      }
    };
  });
})();