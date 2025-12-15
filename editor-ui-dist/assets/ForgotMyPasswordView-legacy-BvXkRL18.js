;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy--Sn1h8On.js", "./_MapCache-legacy-BVuLoslx.js", "./src-legacy-DKZ8j8GV.js", "./en-legacy-DJK4SpPN.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-pg0njr0t.js", "./icon-legacy-Do9qTDxB.js", "./empty-legacy-ZG0-xpne.js", "./useTelemetry-legacy-BDcNi2-V.js", "./useToast-legacy-YkrI3Kyu.js", "./sanitize-html-legacy-B93rGWi4.js", "./CalendarDate-legacy-BUvNgcoo.js", "./path-browserify-legacy-PZw06cM9.js", "./constants-legacy-BOwjEkaj.js", "./merge-legacy-C4vVqZRQ.js", "./_baseOrderBy-legacy-B3XavLhF.js", "./dateformat-legacy-C4HUJTCr.js", "./useDebounce-legacy-Ds5JlDtt.js", "./useExternalHooks-legacy-CQQO1RoW.js", "./useStyles-legacy-E8NPEyeD.js", "./sso.store-legacy-DdrKF34M.js", "./AuthView-legacy-CsFXiJyj.js"], function (_export, _context) {
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
        useSettingsStore = _useTelemetryLegacy00HJs.Ho;
        useUsersStore = _useTelemetryLegacy00HJs.nr;
      }, function (_useToastLegacy00JJs) {
        useToast = _useToastLegacy00JJs.t;
      }, function (_sanitizeHtmlLegacy00LJs) {}, function (_CalendarDateLegacy00NJs) {}, function (_pathBrowserifyLegacy00RJs) {}, function (_constantsLegacy00TJs) {}, function (_mergeLegacy00VJs) {}, function (_baseOrderByLegacy00ZJs) {}, function (_dateformatLegacy00$Js) {}, function (_useDebounceLegacy011Js) {}, function (_useExternalHooksLegacy013Js) {}, function (_useStylesLegacy015Js) {}, function (_ssoStoreLegacy039Js) {}, function (_AuthViewLegacy05RJs) {
        AuthView_default = _AuthViewLegacy05RJs.t;
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