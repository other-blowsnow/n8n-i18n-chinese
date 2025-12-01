;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy--Sn1h8On.js", "./_MapCache-legacy-BGDm4XBh.js", "./truncate-legacy-BWv-BWgW.js", "./icon-legacy-B_qPQAkZ.js", "./empty-legacy-ZG0-xpne.js", "./useTelemetry-legacy-z15msZ3G.js", "./useToast-legacy-BYJycbCO.js", "./constants-legacy-lM1Uv86G.js", "./merge-legacy-CyNDE0Ib.js", "./_baseOrderBy-legacy-DT_yzgQM.js", "./dateformat-legacy-C7RFTAF8.js", "./useDebounce-legacy-B0zW2D-C.js", "./useExternalHooks-legacy-D--WxRfr.js", "./useStyles-legacy-CJudPaTy.js"], function (_export, _context) {
    "use strict";

    var createElementBlock, defineComponent, onMounted, openBlock, useI18n, useRouter, useUsersStore, useToast, VIEWS, SignoutView_vue_vue_type_script_setup_true_lang_default, SignoutView_default;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        onMounted = _vueRuntimeEsmBundlerLegacy003Js.Z;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_truncateLegacy00hJs) {
        useRouter = _truncateLegacy00hJs.b;
      }, function (_iconLegacy00nJs) {}, function (_emptyLegacy00vJs) {}, function (_useTelemetryLegacy00HJs) {
        useUsersStore = _useTelemetryLegacy00HJs.er;
      }, function (_useToastLegacy00JJs) {
        useToast = _useToastLegacy00JJs.t;
      }, function (_constantsLegacy00RJs) {
        VIEWS = _constantsLegacy00RJs.No;
      }, function (_mergeLegacy00TJs) {}, function (_baseOrderByLegacy00XJs) {}, function (_dateformatLegacy00ZJs) {}, function (_useDebounceLegacy00$Js) {}, function (_useExternalHooksLegacy011Js) {}, function (_useStylesLegacy013Js) {}],
      execute: function () {
        //#region src/features/core/auth/views/SignoutView.vue?vue&type=script&setup=true&lang.ts
        SignoutView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "SignoutView",
          setup(__props) {
            const usersStore = useUsersStore();
            const toast = useToast();
            const router = useRouter();
            const i18n = useI18n();
            const logout = async () => {
              try {
                await usersStore.logout();
                window.location.href = router.resolve({
                  name: VIEWS.SIGNIN
                }).href;
              } catch (e) {
                toast.showError(e, i18n.baseText("auth.signout.error"));
              }
            };
            onMounted(() => {
              logout();
            });
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div");
            };
          }
        }); //#endregion
        //#region src/features/core/auth/views/SignoutView.vue
        _export("default", SignoutView_default = SignoutView_vue_vue_type_script_setup_true_lang_default); //#endregion
      }
    };
  });
})();