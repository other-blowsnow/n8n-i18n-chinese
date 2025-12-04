;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy--Sn1h8On.js", "./_MapCache-legacy-BGDm4XBh.js", "./src-legacy-6DYpZVh_.js", "./en-legacy-DJK4SpPN.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-BWv-BWgW.js", "./icon-legacy-B_qPQAkZ.js", "./empty-legacy-ZG0-xpne.js", "./useTelemetry-legacy-z15msZ3G.js", "./useToast-legacy-BYJycbCO.js", "./sanitize-html-legacy-D7fDKXy5.js", "./path-browserify-legacy-BRGcgaOH.js", "./constants-legacy-lM1Uv86G.js", "./merge-legacy-CyNDE0Ib.js", "./_baseOrderBy-legacy-DT_yzgQM.js", "./dateformat-legacy-C7RFTAF8.js", "./useDebounce-legacy-B0zW2D-C.js", "./useExternalHooks-legacy-D--WxRfr.js", "./useStyles-legacy-CJudPaTy.js", "./sso.store-legacy-DKeySsJP.js", "./AuthView-legacy-Cx1dosVP.js"], function (_export, _context) {
    "use strict";

    var computed, ref, defineComponent, createBlock, onMounted, openBlock, useI18n, useRouter, useRoute, useUsersStore, useToast, VIEWS, AuthView_default, SignupView_vue_vue_type_script_setup_true_lang_default, SignupView_default;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        onMounted = _vueRuntimeEsmBundlerLegacy003Js.Z;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {}, function (_enLegacy00bJs) {}, function (_preloadHelperLegacy00dJs) {}, function (_pluginVue_exportHelperLegacy00fJs) {}, function (_truncateLegacy00hJs) {
        useRouter = _truncateLegacy00hJs.b;
        useRoute = _truncateLegacy00hJs.y;
      }, function (_iconLegacy00nJs) {}, function (_emptyLegacy00vJs) {}, function (_useTelemetryLegacy00HJs) {
        useUsersStore = _useTelemetryLegacy00HJs.er;
      }, function (_useToastLegacy00JJs) {
        useToast = _useToastLegacy00JJs.t;
      }, function (_sanitizeHtmlLegacy00LJs) {}, function (_pathBrowserifyLegacy00PJs) {}, function (_constantsLegacy00RJs) {
        VIEWS = _constantsLegacy00RJs.No;
      }, function (_mergeLegacy00TJs) {}, function (_baseOrderByLegacy00XJs) {}, function (_dateformatLegacy00ZJs) {}, function (_useDebounceLegacy00$Js) {}, function (_useExternalHooksLegacy011Js) {}, function (_useStylesLegacy013Js) {}, function (_ssoStoreLegacy037Js) {}, function (_AuthViewLegacy05PJs) {
        AuthView_default = _AuthViewLegacy05PJs.t;
      }],
      execute: function () {
        //#region src/features/core/auth/views/SignupView.vue?vue&type=script&setup=true&lang.ts
        SignupView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "SignupView",
          setup(__props) {
            const usersStore = useUsersStore();
            const toast = useToast();
            const i18n = useI18n();
            const router = useRouter();
            const route = useRoute();
            const FORM_CONFIG = {
              title: i18n.baseText("auth.signup.setupYourAccount"),
              buttonText: i18n.baseText("auth.signup.finishAccountSetup"),
              inputs: [{
                name: "firstName",
                properties: {
                  label: i18n.baseText("auth.firstName"),
                  maxlength: 32,
                  required: true,
                  autocomplete: "given-name",
                  capitalize: true,
                  focusInitially: true
                }
              }, {
                name: "lastName",
                properties: {
                  label: i18n.baseText("auth.lastName"),
                  maxlength: 32,
                  required: true,
                  autocomplete: "family-name",
                  capitalize: true
                }
              }, {
                name: "password",
                properties: {
                  label: i18n.baseText("auth.password"),
                  type: "password",
                  validationRules: [{
                    name: "DEFAULT_PASSWORD_RULES"
                  }],
                  required: true,
                  infoText: i18n.baseText("auth.defaultPasswordRequirements"),
                  autocomplete: "new-password",
                  capitalize: true
                }
              }, {
                name: "agree",
                properties: {
                  label: i18n.baseText("auth.agreement.label"),
                  type: "checkbox"
                }
              }]
            };
            const loading = ref(false);
            const inviter = ref(null);
            const inviterId = ref(null);
            const inviteeId = ref(null);
            const inviteMessage = computed(() => {
              if (!inviter.value) return "";
              return i18n.baseText("settings.signup.signUpInviterInfo", {
                interpolate: {
                  firstName: inviter.value.firstName,
                  lastName: inviter.value.lastName
                }
              });
            });
            onMounted(async () => {
              const inviterIdParam = getQueryParameter("inviterId");
              const inviteeIdParam = getQueryParameter("inviteeId");
              try {
                if (!inviterIdParam || !inviteeIdParam) throw new Error(i18n.baseText("auth.signup.missingTokenError"));
                inviterId.value = inviterIdParam;
                inviteeId.value = inviteeIdParam;
                inviter.value = (await usersStore.validateSignupToken({
                  inviteeId: inviteeId.value,
                  inviterId: inviterId.value
                })).inviter;
              } catch (e) {
                toast.showError(e, i18n.baseText("auth.signup.tokenValidationError"));
                router.replace({
                  name: VIEWS.SIGNIN
                });
              }
            });
            async function onSubmit(values) {
              if (!inviterId.value || !inviteeId.value) {
                toast.showError(new Error(i18n.baseText("auth.signup.tokenValidationError")), i18n.baseText("auth.signup.setupYourAccountError"));
                return;
              }
              try {
                loading.value = true;
                await usersStore.acceptInvitation({
                  ...values,
                  inviterId: inviterId.value,
                  inviteeId: inviteeId.value
                });
                if (values.agree === true) try {
                  await usersStore.submitContactEmail(values.email.toString(), values.agree);
                } catch {}
                await router.push({
                  name: VIEWS.HOMEPAGE
                });
              } catch (error) {
                toast.showError(error, i18n.baseText("auth.signup.setupYourAccountError"));
              }
              loading.value = false;
            }
            function getQueryParameter(key) {
              return !route.query[key] || typeof route.query[key] !== "string" ? null : route.query[key];
            }
            return (_ctx, _cache) => {
              return openBlock(), createBlock(AuthView_default, {
                form: FORM_CONFIG,
                "form-loading": loading.value,
                subtitle: inviteMessage.value,
                onSubmit
              }, null, 8, ["form-loading", "subtitle"]);
            };
          }
        }); //#endregion
        //#region src/features/core/auth/views/SignupView.vue
        _export("default", SignupView_default = SignupView_vue_vue_type_script_setup_true_lang_default); //#endregion
      }
    };
  });
})();