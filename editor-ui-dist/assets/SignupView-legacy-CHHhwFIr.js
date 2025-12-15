;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy--Sn1h8On.js", "./_MapCache-legacy-BVuLoslx.js", "./src-legacy-DKZ8j8GV.js", "./en-legacy-DJK4SpPN.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-pg0njr0t.js", "./icon-legacy-Do9qTDxB.js", "./empty-legacy-ZG0-xpne.js", "./useTelemetry-legacy-BDcNi2-V.js", "./useToast-legacy-YkrI3Kyu.js", "./sanitize-html-legacy-B93rGWi4.js", "./CalendarDate-legacy-BUvNgcoo.js", "./path-browserify-legacy-PZw06cM9.js", "./constants-legacy-BOwjEkaj.js", "./merge-legacy-C4vVqZRQ.js", "./_baseOrderBy-legacy-B3XavLhF.js", "./dateformat-legacy-C4HUJTCr.js", "./useDebounce-legacy-Ds5JlDtt.js", "./useExternalHooks-legacy-CQQO1RoW.js", "./useStyles-legacy-E8NPEyeD.js", "./sso.store-legacy-DdrKF34M.js", "./AuthView-legacy-CsFXiJyj.js"], function (_export, _context) {
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
        useUsersStore = _useTelemetryLegacy00HJs.nr;
      }, function (_useToastLegacy00JJs) {
        useToast = _useToastLegacy00JJs.t;
      }, function (_sanitizeHtmlLegacy00LJs) {}, function (_CalendarDateLegacy00NJs) {}, function (_pathBrowserifyLegacy00RJs) {}, function (_constantsLegacy00TJs) {
        VIEWS = _constantsLegacy00TJs.Po;
      }, function (_mergeLegacy00VJs) {}, function (_baseOrderByLegacy00ZJs) {}, function (_dateformatLegacy00$Js) {}, function (_useDebounceLegacy011Js) {}, function (_useExternalHooksLegacy013Js) {}, function (_useStylesLegacy015Js) {}, function (_ssoStoreLegacy039Js) {}, function (_AuthViewLegacy05RJs) {
        AuthView_default = _AuthViewLegacy05RJs.t;
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