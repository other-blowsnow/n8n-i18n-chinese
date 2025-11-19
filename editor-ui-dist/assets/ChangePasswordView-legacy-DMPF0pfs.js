;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-CVC6fg6H.js", "./src-legacy-D3-Bo0sy.js", "./en-legacy-Bgme8Vbm.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-Bk9bFklR.js", "./icon-legacy-1U_nlJHf.js", "./empty-legacy-DnVUoqbC.js", "./useTelemetry-legacy-BdQlQKwu.js", "./useToast-legacy-D8KBGcJW.js", "./sanitize-html-legacy-DfOUEbdf.js", "./path-browserify-legacy-DJbEMZcd.js", "./constants-legacy-B0GcWb62.js", "./merge-legacy-C_ujDigB.js", "./dateformat-legacy-Xt1X-tys.js", "./useDebounce-legacy-IwiEyerO.js", "./useExternalHooks-legacy-CI7QLTD3.js", "./sso.store-legacy-Bk24_rEU.js", "./AuthView-legacy-CXnJwkts.js"], function (_export, _context) {
    "use strict";

    var createCommentVNode, ref, defineComponent, createBlock, onMounted, openBlock, useI18n, useRouter, useUsersStore, useToast, MFA_AUTHENTICATION_CODE_INPUT_MAX_LENGTH, VIEWS, AuthView_default, ChangePasswordView_vue_vue_type_script_setup_true_lang_default, ChangePasswordView_default;
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
        MFA_AUTHENTICATION_CODE_INPUT_MAX_LENGTH = _constantsLegacy00NJs.ec;
        VIEWS = _constantsLegacy00NJs.mo;
      }, function (_mergeLegacy00PJs) {}, function (_dateformatLegacy00TJs) {}, function (_useDebounceLegacy00VJs) {}, function (_useExternalHooksLegacy00XJs) {}, function (_ssoStoreLegacy02ZJs) {}, function (_AuthViewLegacy05fJs) {
        AuthView_default = _AuthViewLegacy05fJs.t;
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