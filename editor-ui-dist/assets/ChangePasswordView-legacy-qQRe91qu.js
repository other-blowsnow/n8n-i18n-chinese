;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-2Qb71DGn.js", "./src-legacy-BL8uywAx.js", "./en-legacy-s6H-lEA2.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-ZZ87M1Mo.js", "./icon-legacy-CRT-hvlv.js", "./empty-legacy-CsIOGMHW.js", "./useTelemetry-legacy-Ck7lGOrk.js", "./useToast-legacy-tN8taI-S.js", "./sanitize-html-legacy-Cack6L-S.js", "./path-browserify-legacy-BQKq4wLb.js", "./constants-legacy-D0ziSY9e.js", "./merge-legacy-BVgKBTAX.js", "./useRootStore-legacy-D1vvqLPX.js", "./dateformat-legacy-BaeIHy_2.js", "./useDebounce-legacy-B8z7M2-W.js", "./useExternalHooks-legacy-DgS1u46v.js", "./useStyles-legacy-DnD2qvTK.js", "./sso.store-legacy-FlNedFeU.js", "./AuthView-legacy-7qV7_vcr.js"], function (_export, _context) {
    "use strict";

    var createCommentVNode, ref, defineComponent, createBlock, onMounted, openBlock, useI18n, useRouter, useUsersStore, useToast, VIEWS, MFA_AUTHENTICATION_CODE_INPUT_MAX_LENGTH, AuthView_default, ChangePasswordView_vue_vue_type_script_setup_true_lang_default, ChangePasswordView_default;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        onMounted = _vueRuntimeEsmBundlerLegacy003Js.Z;
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
        MFA_AUTHENTICATION_CODE_INPUT_MAX_LENGTH = _constantsLegacy00NJs.mc;
      }, function (_mergeLegacy00PJs) {}, function (_useRootStoreLegacy00TJs) {}, function (_dateformatLegacy00VJs) {}, function (_useDebounceLegacy00XJs) {}, function (_useExternalHooksLegacy00ZJs) {}, function (_useStylesLegacy00$Js) {}, function (_ssoStoreLegacy033Js) {}, function (_AuthViewLegacy05vJs) {
        AuthView_default = _AuthViewLegacy05vJs.t;
      }],
      execute: function () {
        //#region src/features/core/auth/views/ChangePasswordView.vue?vue&type=script&setup=true&lang.ts
        ChangePasswordView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "ChangePasswordView",
          setup(__props) {
            const usersStore = useUsersStore();
            const locale = useI18n();
            const toast = useToast();
            const router = useRouter();
            const password = ref("");
            const loading = ref(false);
            const config = ref(null);
            const passwordsMatch = value => {
              if (typeof value !== "string") return false;
              if (value !== password.value) return {
                messageKey: "auth.changePassword.passwordsMustMatchError"
              };
              return false;
            };
            const getResetToken = () => {
              return !router.currentRoute.value.query.token || typeof router.currentRoute.value.query.token !== "string" ? null : router.currentRoute.value.query.token;
            };
            const getMfaEnabled = () => {
              if (!router.currentRoute.value.query.mfaEnabled) return null;
              return router.currentRoute.value.query.mfaEnabled === "true" ? true : false;
            };
            const onSubmit = async values => {
              try {
                loading.value = true;
                const token = getResetToken();
                if (token) {
                  const changePasswordParameters = {
                    token,
                    password: password.value,
                    ...(values.mfaCode && {
                      mfaCode: values.mfaCode
                    })
                  };
                  await usersStore.changePassword(changePasswordParameters);
                  toast.showMessage({
                    type: "success",
                    title: locale.baseText("auth.changePassword.passwordUpdated"),
                    message: locale.baseText("auth.changePassword.passwordUpdatedMessage")
                  });
                  await router.push({
                    name: VIEWS.SIGNIN
                  });
                } else toast.showError(new Error(locale.baseText("auth.validation.missingParameters")), locale.baseText("auth.changePassword.error"));
              } catch (error) {
                toast.showError(error, locale.baseText("auth.changePassword.error"));
              }
              loading.value = false;
            };
            const onInput = e => {
              if (e.name === "password" && typeof e.value === "string") password.value = e.value;
            };
            onMounted(async () => {
              const form = {
                title: locale.baseText("auth.changePassword"),
                buttonText: locale.baseText("auth.changePassword"),
                redirectText: locale.baseText("auth.signin"),
                redirectLink: "/signin",
                inputs: [{
                  name: "password",
                  properties: {
                    label: locale.baseText("auth.newPassword"),
                    type: "password",
                    required: true,
                    validationRules: [{
                      name: "DEFAULT_PASSWORD_RULES"
                    }],
                    infoText: locale.baseText("auth.defaultPasswordRequirements"),
                    autocomplete: "new-password",
                    capitalize: true
                  }
                }, {
                  name: "password2",
                  properties: {
                    label: locale.baseText("auth.changePassword.reenterNewPassword"),
                    type: "password",
                    required: true,
                    validators: {
                      TWO_PASSWORDS_MATCH: {
                        validate: passwordsMatch
                      }
                    },
                    validationRules: [{
                      name: "TWO_PASSWORDS_MATCH"
                    }],
                    autocomplete: "new-password",
                    capitalize: true
                  }
                }]
              };
              const token = getResetToken();
              if (getMfaEnabled()) form.inputs.push({
                name: "mfaCode",
                initialValue: "",
                properties: {
                  required: true,
                  label: locale.baseText("mfa.code.input.label"),
                  placeholder: locale.baseText("mfa.code.input.placeholder"),
                  maxlength: 6,
                  capitalize: true,
                  validateOnBlur: true
                }
              });
              config.value = form;
              try {
                if (!token) throw new Error(locale.baseText("auth.changePassword.missingTokenError"));
                await usersStore.validatePasswordToken({
                  token
                });
              } catch (e) {
                toast.showError(e, locale.baseText("auth.changePassword.tokenValidationError"));
                router.replace({
                  name: VIEWS.SIGNIN
                });
              }
            });
            return (_ctx, _cache) => {
              return config.value ? (openBlock(), createBlock(AuthView_default, {
                key: 0,
                form: config.value,
                "form-loading": loading.value,
                onSubmit,
                onUpdate: onInput
              }, null, 8, ["form", "form-loading"])) : createCommentVNode("", true);
            };
          }
        }); //#endregion
        //#region src/features/core/auth/views/ChangePasswordView.vue
        _export("default", ChangePasswordView_default = ChangePasswordView_vue_vue_type_script_setup_true_lang_default); //#endregion
      }
    };
  });
})();