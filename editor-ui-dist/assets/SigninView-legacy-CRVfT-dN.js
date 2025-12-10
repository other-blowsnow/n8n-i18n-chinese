;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy--Sn1h8On.js", "./_MapCache-legacy-CGBwnn--.js", "./src-legacy-CT0lqlSJ.js", "./en-legacy-DJK4SpPN.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy--yD2a8cz.js", "./icon-legacy-r8SehkIr.js", "./empty-legacy-ZG0-xpne.js", "./useTelemetry-legacy-sJyF7ZT4.js", "./useToast-legacy-PRNOn8i6.js", "./sanitize-html-legacy-B93rGWi4.js", "./CalendarDate-legacy-BUvNgcoo.js", "./path-browserify-legacy-PZw06cM9.js", "./constants-legacy-gArZ_E9E.js", "./merge-legacy-DObJI3f6.js", "./_baseOrderBy-legacy-DKiGlyzj.js", "./dateformat-legacy-C4HUJTCr.js", "./useDebounce-legacy-CALhBdzA.js", "./useExternalHooks-legacy-CJTR8c_S.js", "./useStyles-legacy-E8NPEyeD.js", "./auth.eventBus-legacy-BBciwqNZ.js", "./sso.store-legacy-CstNXoU7.js", "./AuthView-legacy-nOsb39M0.js"], function (_export, _context) {
    "use strict";

    var computed, toDisplayString, createElementBlock, createCommentVNode, unref, ref, createVNode, defineComponent, reactive, createBlock, onMounted, withCtx, openBlock, createTextVNode, normalizeClass, createBaseVNode, toRefs, useI18n, N8nButton_default, N8nLogo_default, N8nText_default, N8nCard_default, N8nFormInputs_default, N8nHeading_default, __plugin_vue_export_helper_default, useRouter, useRoute, useSettingsStore, useUsersStore, useTelemetry, useToast, MFA_AUTHENTICATION_CODE_INPUT_MAX_LENGTH, MFA_FORM, MFA_AUTHENTICATION_REQUIRED_ERROR_CODE, VIEWS, MFA_AUTHENTICATION_RECOVERY_CODE_INPUT_MAX_LENGTH, mfaEventBus, useSSOStore, AuthView_default, __vite_style__, MfaView_vue_vue_type_script_setup_true_lang_default, container, formContainer, headerContainer, formError, recoveryCodeLink, infoBox, MfaView_vue_vue_type_style_index_0_lang_module_default, cssModules, MfaView_default, SigninView_vue_vue_type_script_setup_true_lang_default, SigninView_default;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Cn;
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        reactive = _vueRuntimeEsmBundlerLegacy003Js.Pt;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        onMounted = _vueRuntimeEsmBundlerLegacy003Js.Z;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js.vn;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
      }, function (_MapCacheLegacy005Js) {
        toRefs = _MapCacheLegacy005Js.$;
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {
        N8nButton_default = _srcLegacy007Js.Hn;
        N8nLogo_default = _srcLegacy007Js.N;
        N8nText_default = _srcLegacy007Js.Vn;
        N8nCard_default = _srcLegacy007Js.Z;
        N8nFormInputs_default = _srcLegacy007Js.z;
        N8nHeading_default = _srcLegacy007Js.zn;
      }, function (_enLegacy00bJs) {}, function (_preloadHelperLegacy00dJs) {}, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {
        useRouter = _truncateLegacy00hJs.b;
        useRoute = _truncateLegacy00hJs.y;
      }, function (_iconLegacy00nJs) {}, function (_emptyLegacy00vJs) {}, function (_useTelemetryLegacy00HJs) {
        useSettingsStore = _useTelemetryLegacy00HJs.Ho;
        useUsersStore = _useTelemetryLegacy00HJs.nr;
        useTelemetry = _useTelemetryLegacy00HJs.t;
      }, function (_useToastLegacy00JJs) {
        useToast = _useToastLegacy00JJs.t;
      }, function (_sanitizeHtmlLegacy00LJs) {}, function (_CalendarDateLegacy00NJs) {}, function (_pathBrowserifyLegacy00RJs) {}, function (_constantsLegacy00TJs) {
        MFA_AUTHENTICATION_CODE_INPUT_MAX_LENGTH = _constantsLegacy00TJs.Cc;
        MFA_FORM = _constantsLegacy00TJs.Dc;
        MFA_AUTHENTICATION_REQUIRED_ERROR_CODE = _constantsLegacy00TJs.Ec;
        VIEWS = _constantsLegacy00TJs.Po;
        MFA_AUTHENTICATION_RECOVERY_CODE_INPUT_MAX_LENGTH = _constantsLegacy00TJs.Tc;
      }, function (_mergeLegacy00VJs) {}, function (_baseOrderByLegacy00ZJs) {}, function (_dateformatLegacy00$Js) {}, function (_useDebounceLegacy011Js) {}, function (_useExternalHooksLegacy013Js) {}, function (_useStylesLegacy015Js) {}, function (_authEventBusLegacy01$Js) {
        mfaEventBus = _authEventBusLegacy01$Js.n;
      }, function (_ssoStoreLegacy039Js) {
        useSSOStore = _ssoStoreLegacy039Js.n;
      }, function (_AuthViewLegacy05RJs) {
        AuthView_default = _AuthViewLegacy05RJs.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\nbody {\n  background-color: var(--color--background--light-2);\n}\n._container_f63sf_127 {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  padding-top: var(--spacing--2xl);\n}\n._container_f63sf_127 > * {\n  width: 352px;\n}\n._formContainer_f63sf_137 {\n  padding-bottom: var(--spacing--xl);\n}\n._headerContainer_f63sf_141 {\n  text-align: center;\n  margin-bottom: var(--spacing--xl);\n}\n._formError_f63sf_146 input {\n  border-color: var(--color--danger);\n}\n._recoveryCodeLink_f63sf_150 {\n  text-decoration: underline;\n}\n._infoBox_f63sf_154 {\n  padding-top: var(--spacing--4xs);\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/features/core/auth/views/MfaView.vue?vue&type=script&setup=true&lang.ts
        MfaView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "MfaView",
          props: {
            reportError: {
              type: Boolean
            }
          },
          emits: ["onFormChanged", "onBackClick", "submit"],
          setup(__props, {
            emit: __emit
          }) {
            const props = __props;
            const hasAnyChanges = ref(false);
            const formBus = ref(mfaEventBus);
            const formInputs = ref(null);
            const showRecoveryCodeForm = ref(false);
            const verifyingMfaCode = ref(false);
            const formError$1 = ref("");
            const {
              reportError
            } = toRefs(props);
            const mfaFormRef = ref(null);
            const i18 = useI18n();
            const emit = __emit;
            const formField = (name, label, placeholder, maxlength, focus = true, autocomplete = "off") => {
              return {
                name,
                initialValue: "",
                properties: {
                  label,
                  placeholder,
                  maxlength,
                  capitalize: true,
                  validateOnBlur: false,
                  focusInitially: focus,
                  autocomplete
                }
              };
            };
            const onRecoveryCodeClick = () => {
              formError$1.value = "";
              showRecoveryCodeForm.value = true;
              hasAnyChanges.value = false;
              formInputs.value = [mfaRecoveryCodeFieldWithDefaults()];
              emit("onFormChanged", MFA_FORM.MFA_RECOVERY_CODE);
            };
            const onBackClick = () => {
              if (!showRecoveryCodeForm.value) {
                emit("onBackClick", MFA_FORM.MFA_TOKEN);
                return;
              }
              showRecoveryCodeForm.value = false;
              hasAnyChanges.value = true;
              formInputs.value = [mfaCodeFieldWithDefaults()];
              emit("onBackClick", MFA_FORM.MFA_RECOVERY_CODE);
              focusMfaCodeAfterPasswordManager();
            };
            const onSubmit = formData => {
              const data = formData;
              formError$1.value = !showRecoveryCodeForm.value ? i18.baseText("mfa.code.invalid") : i18.baseText("mfa.recovery.invalid");
              emit("submit", data);
            };
            const focusMfaCodeAfterPasswordManager = () => {
              setTimeout(() => {
                if (mfaFormRef.value) {
                  const container$1 = mfaFormRef.value.$el;
                  if (!container$1) return;
                  const inputElement = container$1.querySelector("input[name=\"mfaCode\"]");
                  if (inputElement) inputElement.focus();
                }
              }, 200);
            };
            const onInput = ({
              target: {
                value,
                name
              }
            }) => {
              const isSubmittingMfaCode = name === "mfaCode";
              const inputValidLength = isSubmittingMfaCode ? 6 : 36;
              if (value.length !== inputValidLength) {
                hasAnyChanges.value = false;
                return;
              }
              verifyingMfaCode.value = true;
              hasAnyChanges.value = true;
              const dataToSubmit = isSubmittingMfaCode ? {
                mfaCode: value,
                mfaRecoveryCode: ""
              } : {
                mfaCode: "",
                mfaRecoveryCode: value
              };
              try {
                onSubmit(dataToSubmit);
              } catch (e) {} finally {
                verifyingMfaCode.value = false;
              }
            };
            const mfaRecoveryCodeFieldWithDefaults = () => {
              return formField("mfaRecoveryCode", i18.baseText("mfa.recovery.input.label"), i18.baseText("mfa.recovery.input.placeholder"), 36);
            };
            const mfaCodeFieldWithDefaults = () => {
              return formField("mfaCode", i18.baseText("mfa.code.input.label"), i18.baseText("mfa.code.input.placeholder"), 6, false, "one-time-code");
            };
            const onSaveClick = () => {
              formBus.value.emit("submit");
            };
            const {
              settings: {
                releaseChannel
              }
            } = useSettingsStore();
            onMounted(() => {
              formInputs.value = [mfaCodeFieldWithDefaults()];
              focusMfaCodeAfterPasswordManager();
            });
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(_ctx.$style.container)
              }, [createVNode(unref(N8nLogo_default), {
                size: "large",
                "release-channel": unref(releaseChannel)
              }, null, 8, ["release-channel"]), createVNode(unref(N8nCard_default), null, {
                default: withCtx(() => [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.headerContainer)
                }, [createVNode(unref(N8nHeading_default), {
                  size: "xlarge",
                  color: "text-dark"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(showRecoveryCodeForm.value ? unref(i18).baseText("mfa.recovery.modal.title") : unref(i18).baseText("mfa.code.modal.title")), 1)]),
                  _: 1
                })], 2), createBaseVNode("div", {
                  class: normalizeClass([_ctx.$style.formContainer, unref(reportError) ? _ctx.$style.formError : ""])
                }, [formInputs.value ? (openBlock(), createBlock(unref(N8nFormInputs_default), {
                  key: 0,
                  ref_key: "mfaFormRef",
                  ref: mfaFormRef,
                  "data-test-id": "mfa-login-form",
                  inputs: formInputs.value,
                  "event-bus": formBus.value,
                  onInput,
                  onSubmit
                }, null, 8, ["inputs", "event-bus"])) : createCommentVNode("", true), createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.infoBox)
                }, [!showRecoveryCodeForm.value && !unref(reportError) ? (openBlock(), createBlock(unref(N8nText_default), {
                  key: 0,
                  size: "small",
                  color: "text-base",
                  bold: false
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(i18).baseText("mfa.code.input.info")) + " ", 1), createBaseVNode("a", {
                    "data-test-id": "mfa-enter-recovery-code-button",
                    onClick: onRecoveryCodeClick
                  }, toDisplayString(unref(i18).baseText("mfa.code.input.info.action")), 1)]),
                  _: 1
                })) : createCommentVNode("", true), unref(reportError) ? (openBlock(), createBlock(unref(N8nText_default), {
                  key: 1,
                  color: "danger",
                  size: "small"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(formError$1.value) + " ", 1), !showRecoveryCodeForm.value ? (openBlock(), createElementBlock("a", {
                    key: 0,
                    class: normalizeClass(_ctx.$style.recoveryCodeLink),
                    onClick: onRecoveryCodeClick
                  }, toDisplayString(unref(i18).baseText("mfa.recovery.input.info.action")), 3)) : createCommentVNode("", true)]),
                  _: 1
                })) : createCommentVNode("", true)], 2)], 2), createBaseVNode("div", null, [createVNode(unref(N8nButton_default), {
                  float: "right",
                  loading: verifyingMfaCode.value,
                  label: showRecoveryCodeForm.value ? unref(i18).baseText("mfa.recovery.button.verify") : unref(i18).baseText("mfa.code.button.continue"),
                  size: "large",
                  disabled: !hasAnyChanges.value,
                  onClick: onSaveClick
                }, null, 8, ["loading", "label", "disabled"]), createVNode(unref(N8nButton_default), {
                  float: "left",
                  label: unref(i18).baseText("mfa.button.back"),
                  size: "large",
                  type: "tertiary",
                  onClick: onBackClick
                }, null, 8, ["label"])])]),
                _: 1
              })], 2);
            };
          }
        }); //#endregion
        //#region src/features/core/auth/views/MfaView.vue?vue&type=style&index=0&lang.module.scss
        container = "_container_f63sf_127";
        formContainer = "_formContainer_f63sf_137";
        headerContainer = "_headerContainer_f63sf_141";
        formError = "_formError_f63sf_146";
        recoveryCodeLink = "_recoveryCodeLink_f63sf_150";
        infoBox = "_infoBox_f63sf_154";
        MfaView_vue_vue_type_style_index_0_lang_module_default = {
          container,
          formContainer,
          headerContainer,
          formError,
          recoveryCodeLink,
          infoBox
        }; //#endregion
        //#region src/features/core/auth/views/MfaView.vue
        cssModules = {
          "$style": MfaView_vue_vue_type_style_index_0_lang_module_default
        };
        MfaView_default = /* @__PURE__ */__plugin_vue_export_helper_default(MfaView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]]); //#endregion
        //#region src/features/core/auth/views/SigninView.vue?vue&type=script&setup=true&lang.ts
        SigninView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "SigninView",
          setup(__props) {
            const usersStore = useUsersStore();
            const settingsStore = useSettingsStore();
            const ssoStore = useSSOStore();
            const route = useRoute();
            const router = useRouter();
            const toast = useToast();
            const locale = useI18n();
            const telemetry = useTelemetry();
            const loading = ref(false);
            const showMfaView = ref(false);
            const emailOrLdapLoginId = ref("");
            const password = ref("");
            const reportError = ref(false);
            const ldapLoginLabel = computed(() => ssoStore.ldapLoginLabel);
            const isLdapLoginEnabled = computed(() => ssoStore.isLdapLoginEnabled);
            const emailLabel = computed(() => {
              let label = locale.baseText("auth.email");
              if (isLdapLoginEnabled.value && ldapLoginLabel.value) label = ldapLoginLabel.value;
              return label;
            });
            const formConfig = reactive({
              title: locale.baseText("auth.signin"),
              buttonText: locale.baseText("auth.signin"),
              redirectText: locale.baseText("forgotPassword"),
              redirectLink: "/forgot-password",
              inputs: [{
                name: "emailOrLdapLoginId",
                properties: {
                  label: emailLabel.value,
                  type: "email",
                  required: true,
                  ...(!isLdapLoginEnabled.value && {
                    validationRules: [{
                      name: "VALID_EMAIL"
                    }]
                  }),
                  showRequiredAsterisk: false,
                  validateOnBlur: false,
                  autocomplete: "email",
                  capitalize: true,
                  focusInitially: true
                }
              }, {
                name: "password",
                properties: {
                  label: locale.baseText("auth.password"),
                  type: "password",
                  required: true,
                  showRequiredAsterisk: false,
                  validateOnBlur: false,
                  autocomplete: "current-password",
                  capitalize: true
                }
              }]
            });
            const onMFASubmitted = async form => {
              await login({
                emailOrLdapLoginId: emailOrLdapLoginId.value,
                password: password.value,
                mfaCode: form.mfaCode,
                mfaRecoveryCode: form.mfaRecoveryCode
              });
            };
            const onEmailPasswordSubmitted = async form => {
              await login(form);
            };
            const isRedirectSafe = () => {
              const redirect = getRedirectQueryParameter();
              if (redirect.startsWith("/")) return true;
              try {
                return new URL(redirect).origin === window.location.origin;
              } catch {
                return false;
              }
            };
            const getRedirectQueryParameter = () => {
              let redirect = "";
              if (typeof route.query?.redirect === "string") redirect = decodeURIComponent(route.query?.redirect);
              return redirect;
            };
            const login = async form => {
              try {
                loading.value = true;
                await usersStore.loginWithCreds({
                  emailOrLdapLoginId: form.emailOrLdapLoginId,
                  password: form.password,
                  mfaCode: form.mfaCode,
                  mfaRecoveryCode: form.mfaRecoveryCode
                });
                loading.value = false;
                await settingsStore.getSettings();
                toast.clearAllStickyNotifications();
                if (settingsStore.isMFAEnforced && !usersStore.currentUser?.mfaAuthenticated) {
                  await router.push({
                    name: VIEWS.PERSONAL_SETTINGS
                  });
                  return;
                }
                telemetry.track("User attempted to login", {
                  result: showMfaView.value ? "mfa_success" : "success"
                });
                if (isRedirectSafe()) {
                  const redirect = getRedirectQueryParameter();
                  if (redirect.startsWith("http")) {
                    window.location.href = redirect;
                    return;
                  }
                  router.push(redirect);
                  return;
                }
                await router.push({
                  name: VIEWS.HOMEPAGE
                });
              } catch (error) {
                if (error.errorCode === 998) {
                  showMfaView.value = true;
                  cacheCredentials(form);
                  return;
                }
                telemetry.track("User attempted to login", {
                  result: showMfaView.value ? "mfa_token_rejected" : "credentials_error"
                });
                if (!showMfaView.value) {
                  toast.showError(error, locale.baseText("auth.signin.error"));
                  loading.value = false;
                  return;
                }
                reportError.value = true;
              }
            };
            const onBackClick = fromForm => {
              reportError.value = false;
              if (fromForm === MFA_FORM.MFA_TOKEN) {
                showMfaView.value = false;
                loading.value = false;
              }
            };
            const onFormChanged = toForm => {
              if (toForm === MFA_FORM.MFA_RECOVERY_CODE) reportError.value = false;
            };
            const cacheCredentials = form => {
              emailOrLdapLoginId.value = form.emailOrLdapLoginId;
              password.value = form.password;
            };
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", null, [!showMfaView.value ? (openBlock(), createBlock(AuthView_default, {
                key: 0,
                form: formConfig,
                "form-loading": loading.value,
                "with-sso": true,
                "data-test-id": "signin-form",
                onSubmit: onEmailPasswordSubmitted
              }, null, 8, ["form", "form-loading"])) : createCommentVNode("", true), showMfaView.value ? (openBlock(), createBlock(MfaView_default, {
                key: 1,
                "report-error": reportError.value,
                onSubmit: onMFASubmitted,
                onOnBackClick: onBackClick,
                onOnFormChanged: onFormChanged
              }, null, 8, ["report-error"])) : createCommentVNode("", true)]);
            };
          }
        }); //#endregion
        //#region src/features/core/auth/views/SigninView.vue
        _export("default", SigninView_default = SigninView_vue_vue_type_script_setup_true_lang_default); //#endregion
      }
    };
  });
})();