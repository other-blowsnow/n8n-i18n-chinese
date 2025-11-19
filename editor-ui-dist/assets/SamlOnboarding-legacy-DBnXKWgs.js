;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-CVC6fg6H.js", "./src-legacy-D3-Bo0sy.js", "./en-legacy-Bgme8Vbm.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-Bk9bFklR.js", "./icon-legacy-1U_nlJHf.js", "./empty-legacy-DnVUoqbC.js", "./useTelemetry-legacy-BdQlQKwu.js", "./useToast-legacy-D8KBGcJW.js", "./sanitize-html-legacy-DfOUEbdf.js", "./path-browserify-legacy-DJbEMZcd.js", "./constants-legacy-B0GcWb62.js", "./merge-legacy-C_ujDigB.js", "./dateformat-legacy-Xt1X-tys.js", "./useDebounce-legacy-IwiEyerO.js", "./useExternalHooks-legacy-CI7QLTD3.js", "./sso.store-legacy-Bk24_rEU.js", "./AuthView-legacy-CXnJwkts.js"], function (_export, _context) {
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
        VIEWS = _constantsLegacy00NJs.mo;
      }, function (_mergeLegacy00PJs) {}, function (_dateformatLegacy00TJs) {}, function (_useDebounceLegacy00VJs) {}, function (_useExternalHooksLegacy00XJs) {}, function (_ssoStoreLegacy02ZJs) {}, function (_AuthViewLegacy05fJs) {
        AuthView_default = _AuthViewLegacy05fJs.t;
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