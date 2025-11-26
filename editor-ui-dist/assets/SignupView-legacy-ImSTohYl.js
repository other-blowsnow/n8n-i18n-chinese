;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-2Qb71DGn.js", "./src-legacy-BL8uywAx.js", "./en-legacy-s6H-lEA2.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-ZZ87M1Mo.js", "./icon-legacy-CRT-hvlv.js", "./empty-legacy-CsIOGMHW.js", "./useTelemetry-legacy-Ck7lGOrk.js", "./useToast-legacy-tN8taI-S.js", "./sanitize-html-legacy-Cack6L-S.js", "./path-browserify-legacy-BQKq4wLb.js", "./constants-legacy-D0ziSY9e.js", "./merge-legacy-BVgKBTAX.js", "./useRootStore-legacy-D1vvqLPX.js", "./dateformat-legacy-BaeIHy_2.js", "./useDebounce-legacy-B8z7M2-W.js", "./useExternalHooks-legacy-DgS1u46v.js", "./useStyles-legacy-DnD2qvTK.js", "./sso.store-legacy-FlNedFeU.js", "./AuthView-legacy-7qV7_vcr.js"], function (_export, _context) {
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