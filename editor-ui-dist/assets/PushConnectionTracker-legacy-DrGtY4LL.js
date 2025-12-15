;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy--Sn1h8On.js", "./_MapCache-legacy-BVuLoslx.js", "./src-legacy-DKZ8j8GV.js", "./useRunWorkflow-legacy-Bl_ngpym.js"], function (_export, _context) {
    "use strict";

    var computed, toDisplayString, createElementBlock, unref, createVNode, defineComponent, renderSlot, withCtx, openBlock, createTextVNode, resolveDirective, createBaseVNode, withDirectives, useI18n, N8nIcon_default, N8nTooltip_default, usePushConnectionStore, _hoisted_1, PushConnectionTracker_vue_vue_type_script_setup_true_lang_default, PushConnectionTracker_default;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Cn;
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        renderSlot = _vueRuntimeEsmBundlerLegacy003Js.at;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        resolveDirective = _vueRuntimeEsmBundlerLegacy003Js.st;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
        withDirectives = _vueRuntimeEsmBundlerLegacy003Js.xt;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {
        N8nIcon_default = _srcLegacy007Js.Wn;
        N8nTooltip_default = _srcLegacy007Js.mt;
      }, function (_useRunWorkflowLegacy01pJs) {
        usePushConnectionStore = _useRunWorkflowLegacy01pJs.i;
      }],
      execute: function () {
        //#region src/app/components/PushConnectionTracker.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1 = {
          key: 0,
          class: "push-connection-lost primary-color"
        };
        PushConnectionTracker_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "PushConnectionTracker",
          setup(__props) {
            const pushConnectionStore = usePushConnectionStore();
            const i18n = useI18n();
            const showConnectionLostError = computed(() => {
              return pushConnectionStore.isConnectionRequested && !pushConnectionStore.isConnected;
            });
            return (_ctx, _cache) => {
              const _directive_n8n_html = resolveDirective("n8n-html");
              return openBlock(), createElementBlock("span", null, [showConnectionLostError.value ? (openBlock(), createElementBlock("div", _hoisted_1, [createVNode(unref(N8nTooltip_default), {
                placement: "bottom-end"
              }, {
                content: withCtx(() => [withDirectives(createBaseVNode("div", null, null, 512), [[_directive_n8n_html, unref(i18n).baseText("pushConnectionTracker.cannotConnectToServer")]])]),
                default: withCtx(() => [createBaseVNode("span", null, [createVNode(unref(N8nIcon_default), {
                  icon: "triangle-alert"
                }), createTextVNode("\xA0 " + toDisplayString(unref(i18n).baseText("pushConnectionTracker.connectionLost")), 1)])]),
                _: 1
              })])) : renderSlot(_ctx.$slots, "default", {
                key: 1
              })]);
            };
          }
        }); //#endregion
        //#region src/app/components/PushConnectionTracker.vue
        _export("t", PushConnectionTracker_default = PushConnectionTracker_vue_vue_type_script_setup_true_lang_default); //#endregion
      }
    };
  });
})();