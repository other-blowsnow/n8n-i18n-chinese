;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-CVC6fg6H.js", "./src-legacy-D3-Bo0sy.js", "./en-legacy-Bgme8Vbm.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-Bk9bFklR.js", "./icon-legacy-1U_nlJHf.js", "./empty-legacy-DnVUoqbC.js", "./useTelemetry-legacy-BdQlQKwu.js", "./useToast-legacy-D8KBGcJW.js", "./sanitize-html-legacy-DfOUEbdf.js", "./path-browserify-legacy-DJbEMZcd.js", "./constants-legacy-B0GcWb62.js", "./merge-legacy-C_ujDigB.js", "./dateformat-legacy-Xt1X-tys.js", "./useDebounce-legacy-IwiEyerO.js", "./useExternalHooks-legacy-CI7QLTD3.js", "./sso.store-legacy-Bk24_rEU.js", "./AuthView-legacy-CXnJwkts.js"], function (_export, _context) {
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
      }, function (_iconLegacy00lJs) {}, function (_emptyLegacy00tJs) {}, function (_useTelemetryLegacy00FJs) {
        useSettingsStore = _useTelemetryLegacy00FJs.Bo;
        useUsersStore = _useTelemetryLegacy00FJs.er;
      }, function (_useToastLegacy00HJs) {
        useToast = _useToastLegacy00HJs.t;
      }, function (_sanitizeHtmlLegacy00JJs) {}, function (_pathBrowserifyLegacy00LJs) {}, function (_constantsLegacy00NJs) {
        VIEWS = _constantsLegacy00NJs.mo;
      }, function (_mergeLegacy00PJs) {}, function (_dateformatLegacy00TJs) {}, function (_useDebounceLegacy00VJs) {}, function (_useExternalHooksLegacy00XJs) {}, function (_ssoStoreLegacy02ZJs) {}, function (_AuthViewLegacy05fJs) {
        AuthView_default = _AuthViewLegacy05fJs.t;
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