;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-2Qb71DGn.js", "./src-legacy-BL8uywAx.js", "./en-legacy-s6H-lEA2.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-ZZ87M1Mo.js", "./icon-legacy-CRT-hvlv.js", "./empty-legacy-CsIOGMHW.js", "./useTelemetry-legacy-Ck7lGOrk.js", "./useToast-legacy-tN8taI-S.js", "./sanitize-html-legacy-Cack6L-S.js", "./path-browserify-legacy-BQKq4wLb.js", "./constants-legacy-D0ziSY9e.js", "./merge-legacy-BVgKBTAX.js", "./useRootStore-legacy-D1vvqLPX.js", "./dateformat-legacy-BaeIHy_2.js", "./useDebounce-legacy-B8z7M2-W.js", "./useExternalHooks-legacy-DgS1u46v.js", "./useStyles-legacy-DnD2qvTK.js", "./sso.store-legacy-FlNedFeU.js", "./AuthView-legacy-7qV7_vcr.js"], function (_export, _context) {
    "use strict";

    var computed, ref, defineComponent, createBlock, openBlock, useI18n, useSettingsStore, useUsersStore, useToast, AuthView_default, ForgotMyPasswordView_vue_vue_type_script_setup_true_lang_default, ForgotMyPasswordView_default;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {}, function (_enLegacy00bJs) {}, function (_preloadHelperLegacy00dJs) {}, function (_pluginVue_exportHelperLegacy00fJs) {}, function (_truncateLegacy00hJs) {}, function (_iconLegacy00lJs) {}, function (_emptyLegacy00tJs) {}, function (_useTelemetryLegacy00FJs) {
        useSettingsStore = _useTelemetryLegacy00FJs.Bo;
        useUsersStore = _useTelemetryLegacy00FJs.er;
      }, function (_useToastLegacy00HJs) {
        useToast = _useToastLegacy00HJs.t;
      }, function (_sanitizeHtmlLegacy00JJs) {}, function (_pathBrowserifyLegacy00LJs) {}, function (_constantsLegacy00NJs) {}, function (_mergeLegacy00PJs) {}, function (_useRootStoreLegacy00TJs) {}, function (_dateformatLegacy00VJs) {}, function (_useDebounceLegacy00XJs) {}, function (_useExternalHooksLegacy00ZJs) {}, function (_useStylesLegacy00$Js) {}, function (_ssoStoreLegacy033Js) {}, function (_AuthViewLegacy05vJs) {
        AuthView_default = _AuthViewLegacy05vJs.t;
      }],
      execute: function () {
        //#region src/features/core/auth/views/ForgotMyPasswordView.vue?vue&type=script&setup=true&lang.ts
        ForgotMyPasswordView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "ForgotMyPasswordView",
          setup(__props) {
            const settingsStore = useSettingsStore();
            const usersStore = useUsersStore();
            const toast = useToast();
            const locale = useI18n();
            const loading = ref(false);
            const formConfig = computed(() => {
              const EMAIL_INPUTS = [{
                name: "email",
                properties: {
                  label: locale.baseText("auth.email"),
                  type: "email",
                  required: true,
                  validationRules: [{
                    name: "VALID_EMAIL"
                  }],
                  autocomplete: "email",
                  capitalize: true,
                  focusInitially: true
                }
              }];
              const NO_SMTP_INPUTS = [{
                name: "no-smtp-warning",
                properties: {
                  label: locale.baseText("forgotPassword.noSMTPToSendEmailWarning"),
                  type: "info"
                }
              }];
              const DEFAULT_FORM_CONFIG = {
                title: locale.baseText("forgotPassword.recoverPassword"),
                redirectText: locale.baseText("forgotPassword.returnToSignIn"),
                redirectLink: "/signin"
              };
              if (settingsStore.isSmtpSetup) return {
                ...DEFAULT_FORM_CONFIG,
                buttonText: locale.baseText("forgotPassword.getRecoveryLink"),
                inputs: EMAIL_INPUTS
              };
              return {
                ...DEFAULT_FORM_CONFIG,
                inputs: NO_SMTP_INPUTS
              };
            });
            const isFormWithEmail = values => {
              return "email" in values;
            };
            const onSubmit = async values => {
              if (!isFormWithEmail(values)) return;
              try {
                loading.value = true;
                await usersStore.sendForgotPasswordEmail(values);
                toast.showMessage({
                  type: "success",
                  title: locale.baseText("forgotPassword.recoveryEmailSent"),
                  message: locale.baseText("forgotPassword.emailSentIfExists", {
                    interpolate: {
                      email: values.email
                    }
                  })
                });
              } catch (error) {
                let message = locale.baseText("forgotPassword.smtpErrorContactAdministrator");
                if (error.httpStatusCode) {
                  const {
                    httpStatusCode: status
                  } = error;
                  if (status === 429) message = locale.baseText("forgotPassword.tooManyRequests");else if (error.httpStatusCode === 422) message = locale.baseText(error.message);
                  toast.showMessage({
                    type: "error",
                    title: locale.baseText("forgotPassword.sendingEmailError"),
                    message
                  });
                }
              }
              loading.value = false;
            };
            return (_ctx, _cache) => {
              return openBlock(), createBlock(AuthView_default, {
                form: formConfig.value,
                "form-loading": loading.value,
                onSubmit
              }, null, 8, ["form", "form-loading"]);
            };
          }
        }); //#endregion
        //#region src/features/core/auth/views/ForgotMyPasswordView.vue
        _export("default", ForgotMyPasswordView_default = ForgotMyPasswordView_vue_vue_type_script_setup_true_lang_default); //#endregion
      }
    };
  });
})();