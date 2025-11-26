;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-2Qb71DGn.js", "./truncate-legacy-ZZ87M1Mo.js", "./icon-legacy-CRT-hvlv.js", "./empty-legacy-CsIOGMHW.js", "./useTelemetry-legacy-Ck7lGOrk.js", "./useToast-legacy-tN8taI-S.js", "./constants-legacy-D0ziSY9e.js", "./merge-legacy-BVgKBTAX.js", "./useRootStore-legacy-D1vvqLPX.js", "./dateformat-legacy-BaeIHy_2.js", "./useDebounce-legacy-B8z7M2-W.js", "./useExternalHooks-legacy-DgS1u46v.js", "./useStyles-legacy-DnD2qvTK.js"], function (_export, _context) {
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
      }, function (_iconLegacy00lJs) {}, function (_emptyLegacy00tJs) {}, function (_useTelemetryLegacy00FJs) {
        useUsersStore = _useTelemetryLegacy00FJs.er;
      }, function (_useToastLegacy00HJs) {
        useToast = _useToastLegacy00HJs.t;
      }, function (_constantsLegacy00NJs) {
        VIEWS = _constantsLegacy00NJs.Oo;
      }, function (_mergeLegacy00PJs) {}, function (_useRootStoreLegacy00TJs) {}, function (_dateformatLegacy00VJs) {}, function (_useDebounceLegacy00XJs) {}, function (_useExternalHooksLegacy00ZJs) {}, function (_useStylesLegacy00$Js) {}],
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