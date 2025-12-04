;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy--Sn1h8On.js", "./_MapCache-legacy-BGDm4XBh.js", "./src-legacy-6DYpZVh_.js", "./en-legacy-DJK4SpPN.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-BWv-BWgW.js", "./icon-legacy-B_qPQAkZ.js", "./empty-legacy-ZG0-xpne.js", "./useTelemetry-legacy-z15msZ3G.js", "./useToast-legacy-BYJycbCO.js", "./sanitize-html-legacy-D7fDKXy5.js", "./path-browserify-legacy-BRGcgaOH.js", "./constants-legacy-lM1Uv86G.js", "./merge-legacy-CyNDE0Ib.js", "./_baseOrderBy-legacy-DT_yzgQM.js", "./dateformat-legacy-C7RFTAF8.js", "./useDebounce-legacy-B0zW2D-C.js", "./useExternalHooks-legacy-D--WxRfr.js", "./useStyles-legacy-CJudPaTy.js", "./sso.store-legacy-DKeySsJP.js", "./AuthView-legacy-Cx1dosVP.js"], function (_export, _context) {
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
      }, function (_srcLegacy007Js) {}, function (_enLegacy00bJs) {}, function (_preloadHelperLegacy00dJs) {}, function (_pluginVue_exportHelperLegacy00fJs) {}, function (_truncateLegacy00hJs) {}, function (_iconLegacy00nJs) {}, function (_emptyLegacy00vJs) {}, function (_useTelemetryLegacy00HJs) {
        useSettingsStore = _useTelemetryLegacy00HJs.Bo;
        useUsersStore = _useTelemetryLegacy00HJs.er;
      }, function (_useToastLegacy00JJs) {
        useToast = _useToastLegacy00JJs.t;
      }, function (_sanitizeHtmlLegacy00LJs) {}, function (_pathBrowserifyLegacy00PJs) {}, function (_constantsLegacy00RJs) {}, function (_mergeLegacy00TJs) {}, function (_baseOrderByLegacy00XJs) {}, function (_dateformatLegacy00ZJs) {}, function (_useDebounceLegacy00$Js) {}, function (_useExternalHooksLegacy011Js) {}, function (_useStylesLegacy013Js) {}, function (_ssoStoreLegacy037Js) {}, function (_AuthViewLegacy05PJs) {
        AuthView_default = _AuthViewLegacy05PJs.t;
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