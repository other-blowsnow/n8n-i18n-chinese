;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy--Sn1h8On.js", "./_MapCache-legacy-CGBwnn--.js", "./src-legacy-CT0lqlSJ.js", "./en-legacy-DJK4SpPN.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy--yD2a8cz.js", "./icon-legacy-r8SehkIr.js", "./empty-legacy-ZG0-xpne.js", "./useTelemetry-legacy-sJyF7ZT4.js", "./useToast-legacy-PRNOn8i6.js", "./sanitize-html-legacy-B93rGWi4.js", "./CalendarDate-legacy-BUvNgcoo.js", "./path-browserify-legacy-PZw06cM9.js", "./constants-legacy-gArZ_E9E.js", "./merge-legacy-DObJI3f6.js", "./_baseOrderBy-legacy-DKiGlyzj.js", "./dateformat-legacy-C4HUJTCr.js", "./useDebounce-legacy-CALhBdzA.js", "./useExternalHooks-legacy-CJTR8c_S.js", "./useStyles-legacy-E8NPEyeD.js", "./sso.store-legacy-CstNXoU7.js", "./AuthView-legacy-nOsb39M0.js"], function (_export, _context) {
    "use strict";

    var ref, defineComponent, reactive, createBlock, openBlock, useI18n, useRouter, useSettingsStore, useUsersStore, useToast, VIEWS, AuthView_default, SetupView_vue_vue_type_script_setup_true_lang_default, SetupView_default;
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
      }, function (_iconLegacy00nJs) {}, function (_emptyLegacy00vJs) {}, function (_useTelemetryLegacy00HJs) {
        useSettingsStore = _useTelemetryLegacy00HJs.Ho;
        useUsersStore = _useTelemetryLegacy00HJs.nr;
      }, function (_useToastLegacy00JJs) {
        useToast = _useToastLegacy00JJs.t;
      }, function (_sanitizeHtmlLegacy00LJs) {}, function (_CalendarDateLegacy00NJs) {}, function (_pathBrowserifyLegacy00RJs) {}, function (_constantsLegacy00TJs) {
        VIEWS = _constantsLegacy00TJs.Po;
      }, function (_mergeLegacy00VJs) {}, function (_baseOrderByLegacy00ZJs) {}, function (_dateformatLegacy00$Js) {}, function (_useDebounceLegacy011Js) {}, function (_useExternalHooksLegacy013Js) {}, function (_useStylesLegacy015Js) {}, function (_ssoStoreLegacy039Js) {}, function (_AuthViewLegacy05RJs) {
        AuthView_default = _AuthViewLegacy05RJs.t;
      }],
      execute: function () {
        //#region src/features/core/auth/views/SetupView.vue?vue&type=script&setup=true&lang.ts
        SetupView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "SetupView",
          setup(__props) {
            const settingsStore = useSettingsStore();
            const usersStore = useUsersStore();
            const toast = useToast();
            const locale = useI18n();
            const router = useRouter();
            const loading = ref(false);
            const formConfig = reactive({
              title: locale.baseText("auth.setup.setupOwner"),
              buttonText: locale.baseText("auth.setup.next"),
              inputs: [{
                name: "email",
                properties: {
                  label: locale.baseText("auth.email"),
                  type: "email",
                  required: true,
                  validationRules: [{
                    name: "VALID_EMAIL"
                  }],
                  autocomplete: "email",
                  capitalize: true
                }
              }, {
                name: "firstName",
                properties: {
                  label: locale.baseText("auth.firstName"),
                  maxlength: 32,
                  required: true,
                  autocomplete: "given-name",
                  capitalize: true
                }
              }, {
                name: "lastName",
                properties: {
                  label: locale.baseText("auth.lastName"),
                  maxlength: 32,
                  required: true,
                  autocomplete: "family-name",
                  capitalize: true
                }
              }, {
                name: "password",
                properties: {
                  label: locale.baseText("auth.password"),
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
                name: "agree",
                properties: {
                  label: locale.baseText("auth.agreement.label"),
                  type: "checkbox"
                }
              }]
            });
            const onSubmit = async values => {
              try {
                const forceRedirectedHere = settingsStore.showSetupPage;
                loading.value = true;
                await usersStore.createOwner(values);
                if (values.agree === true) try {
                  await usersStore.submitContactEmail(values.email.toString(), values.agree);
                } catch {}
                if (forceRedirectedHere) await router.push({
                  name: VIEWS.HOMEPAGE
                });else await router.push({
                  name: VIEWS.USERS_SETTINGS
                });
              } catch (error) {
                toast.showError(error, locale.baseText("auth.setup.settingUpOwnerError"));
              }
              loading.value = false;
            };
            return (_ctx, _cache) => {
              return openBlock(), createBlock(AuthView_default, {
                form: formConfig,
                "form-loading": loading.value,
                "data-test-id": "setup-form",
                onSubmit
              }, null, 8, ["form", "form-loading"]);
            };
          }
        }); //#endregion
        //#region src/features/core/auth/views/SetupView.vue
        _export("default", SetupView_default = SetupView_vue_vue_type_script_setup_true_lang_default); //#endregion
      }
    };
  });
})();