;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./useTelemetry-legacy-BdQlQKwu.js"], function (_export, _context) {
    "use strict";

    var computed, createElementBlock, defineComponent, renderSlot, openBlock, useSettingsStore, EnterpriseEdition_ee_vue_vue_type_script_setup_true_lang_default, EnterpriseEdition_ee_default;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        renderSlot = _vueRuntimeEsmBundlerLegacy003Js.at;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
      }, function (_useTelemetryLegacy00FJs) {
        useSettingsStore = _useTelemetryLegacy00FJs.Bo;
      }],
      execute: function () {
        //#region src/app/components/EnterpriseEdition.ee.vue?vue&type=script&setup=true&lang.ts
        EnterpriseEdition_ee_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "EnterpriseEdition.ee",
          props: {
            features: {
              default: () => []
            }
          },
          setup(__props) {
            const props = __props;
            const settingsStore = useSettingsStore();
            const canAccess = computed(() => props.features.reduce((acc, feature) => acc && !!settingsStore.isEnterpriseFeatureEnabled[feature], true));
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", null, [canAccess.value ? renderSlot(_ctx.$slots, "default", {
                key: 0
              }) : renderSlot(_ctx.$slots, "fallback", {
                key: 1
              })]);
            };
          }
        }); //#endregion
        //#region src/app/components/EnterpriseEdition.ee.vue
        _export("t", EnterpriseEdition_ee_default = EnterpriseEdition_ee_vue_vue_type_script_setup_true_lang_default); //#endregion
      }
    };
  });
})();