;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy--Sn1h8On.js", "./_MapCache-legacy-DHBQRRQG.js"], function (_export, _context) {
    "use strict";

    var toDisplayString, createElementBlock, unref, defineComponent, openBlock, createTextVNode, createBaseVNode, useI18n, WorkflowActivationErrorMessage_vue_vue_type_script_setup_true_lang_default, WorkflowActivationErrorMessage_default;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Cn;
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }],
      execute: function () {
        //#region src/app/components/WorkflowActivationErrorMessage.vue?vue&type=script&setup=true&lang.ts
        WorkflowActivationErrorMessage_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "WorkflowActivationErrorMessage",
          props: {
            message: {}
          },
          setup(__props) {
            const i18n = useI18n();
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", null, [createTextVNode(toDisplayString(unref(i18n).baseText("workflowActivator.showMessage.displayActivationError.message.errorDataNotUndefined")) + " ", 1), _cache[0] || (_cache[0] = createBaseVNode("br", null, null, -1)), createBaseVNode("i", null, toDisplayString(_ctx.message), 1)]);
            };
          }
        }); //#endregion
        //#region src/app/components/WorkflowActivationErrorMessage.vue
        _export("t", WorkflowActivationErrorMessage_default = WorkflowActivationErrorMessage_vue_vue_type_script_setup_true_lang_default); //#endregion
      }
    };
  });
})();