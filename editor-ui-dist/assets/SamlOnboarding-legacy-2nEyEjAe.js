;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-2Qb71DGn.js", "./src-legacy-BL8uywAx.js", "./en-legacy-s6H-lEA2.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-ZZ87M1Mo.js", "./icon-legacy-CRT-hvlv.js", "./empty-legacy-CsIOGMHW.js", "./useTelemetry-legacy-Ck7lGOrk.js", "./useToast-legacy-tN8taI-S.js", "./sanitize-html-legacy-Cack6L-S.js", "./path-browserify-legacy-BQKq4wLb.js", "./constants-legacy-D0ziSY9e.js", "./merge-legacy-BVgKBTAX.js", "./useRootStore-legacy-D1vvqLPX.js", "./dateformat-legacy-BaeIHy_2.js", "./useDebounce-legacy-B8z7M2-W.js", "./useExternalHooks-legacy-DgS1u46v.js", "./useStyles-legacy-DnD2qvTK.js", "./sso.store-legacy-FlNedFeU.js", "./AuthView-legacy-7qV7_vcr.js"], function (_export, _context) {
    "use strict";

    var ref, defineComponent, reactive, createBlock, openBlock, useI18n, useRouter, useUsersStore, useToast, VIEWS, AuthView_default, SamlOnboarding_vue_vue_type_script_setup_true_lang_default, SamlOnboarding_default;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        reactive = _vueRuntimeEsmBundlerLegacy003Js.Pt;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {}, function (_enLegacy00bJs) {}, function (_preloadHelperLegacy00dJs) {}, function (_pluginVue_exportHelperLegacy00fJs) {}, function (_truncateLegacy00hJs) {
        useRouter = _truncateLegacy00hJs.b;
      }, function (_iconLegacy00lJs) {}, function (_emptyLegacy00tJs) {}, function (_useTelemetryLegacy00FJs) {
        useUsersStore = _useTelemetryLegacy00FJs.er;
      }, function (_useToastLegacy00HJs) {
        useToast = _useToastLegacy00HJs.t;
      }, function (_sanitizeHtmlLegacy00JJs) {}, function (_pathBrowserifyLegacy00LJs) {}, function (_constantsLegacy00NJs) {
        VIEWS = _constantsLegacy00NJs.Oo;
      }, function (_mergeLegacy00PJs) {}, function (_useRootStoreLegacy00TJs) {}, function (_dateformatLegacy00VJs) {}, function (_useDebounceLegacy00XJs) {}, function (_useExternalHooksLegacy00ZJs) {}, function (_useStylesLegacy00$Js) {}, function (_ssoStoreLegacy033Js) {}, function (_AuthViewLegacy05vJs) {
        AuthView_default = _AuthViewLegacy05vJs.t;
      }],
      execute: function () {
        //#region src/features/settings/sso/views/SamlOnboarding.vue?vue&type=script&setup=true&lang.ts
        SamlOnboarding_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "SamlOnboarding",
          setup(__props) {
            const router = useRouter();
            const locale = useI18n();
            const toast = useToast();
            const usersStore = useUsersStore();
            const loading = ref(false);
            const FORM_CONFIG = reactive({
              title: locale.baseText("auth.signup.setupYourAccount"),
              buttonText: locale.baseText("auth.signup.finishAccountSetup"),
              inputs: [{
                name: "firstName",
                initialValue: usersStore.currentUser?.firstName,
                properties: {
                  label: locale.baseText("auth.firstName"),
                  maxlength: 32,
                  required: true,
                  autocomplete: "given-name",
                  capitalize: true
                }
              }, {
                name: "lastName",
                initialValue: usersStore.currentUser?.lastName,
                properties: {
                  label: locale.baseText("auth.lastName"),
                  maxlength: 32,
                  required: true,
                  autocomplete: "family-name",
                  capitalize: true
                }
              }]
            });
            const isFormWithFirstAndLastName = values => {
              return "firstName" in values && "lastName" in values;
            };
            const onSubmit = async values => {
              if (!isFormWithFirstAndLastName(values)) return;
              try {
                loading.value = true;
                await usersStore.updateUserName(values);
                await router.push({
                  name: VIEWS.HOMEPAGE
                });
              } catch (error) {
                loading.value = false;
                toast.showError(error, "Error", error.message);
              }
            };
            return (_ctx, _cache) => {
              return openBlock(), createBlock(AuthView_default, {
                form: FORM_CONFIG,
                "form-loading": loading.value,
                onSubmit
              }, null, 8, ["form", "form-loading"]);
            };
          }
        }); //#endregion
        //#region src/features/settings/sso/views/SamlOnboarding.vue
        _export("default", SamlOnboarding_default = SamlOnboarding_vue_vue_type_script_setup_true_lang_default); //#endregion
      }
    };
  });
})();