;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy--Sn1h8On.js", "./_MapCache-legacy-DHBQRRQG.js", "./src-legacy-Bos09xer.js", "./en-legacy-DJK4SpPN.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-BIn0keUI.js", "./icon-legacy-CIK-lB61.js", "./empty-legacy-ZG0-xpne.js", "./useTelemetry-legacy-CqPMRSSw.js", "./useToast-legacy-BExpsCTi.js", "./sanitize-html-legacy-B93rGWi4.js", "./CalendarDate-legacy-BUvNgcoo.js", "./path-browserify-legacy-PZw06cM9.js", "./constants-legacy-7i-p8Q83.js", "./merge-legacy-y9V-HyOw.js", "./_baseOrderBy-legacy-BktlFW96.js", "./dateformat-legacy-C4HUJTCr.js", "./useDebounce-legacy-KtnINwEe.js", "./useExternalHooks-legacy-DAimL5by.js", "./useStyles-legacy-E8NPEyeD.js", "./cloudPlan.store-legacy-DZDCwxzb.js", "./auth.eventBus-legacy-CcP3J25I.js", "./sso.store-legacy-B78a9rkh.js"], function (_export, _context) {
    "use strict";

    var computed, toDisplayString, createElementBlock, createCommentVNode, unref, ref, onBeforeUnmount, createVNode, defineComponent, createBlock, onMounted, Fragment, withCtx, openBlock, renderList, createTextVNode, normalizeClass, createBaseVNode, useI18n, N8nNotice_default, N8nSelect_default, N8nButton_default, N8nOption_default, N8nText_default, N8nInputLabel_default, createFormEventBus, N8nTooltip_default, N8nLink_default, N8nAvatar_default, N8nFormInputs_default, N8nHeading_default, __plugin_vue_export_helper_default, useUIStore, useDocumentTitle, useSettingsStore, useUsersStore, useToast, MFA_SETUP_MODAL_KEY, CONFIRM_PASSWORD_MODAL_KEY, ROLE, PROMPT_MFA_CODE_MODAL_KEY, MFA_DOCS_URL, CHANGE_PASSWORD_MODAL_KEY, useCloudPlanStore, promptMfaCodeBus, confirmPasswordEventBus, useSSOStore, __vite_style__, _hoisted_1, _hoisted_2, _hoisted_3, _hoisted_4, _hoisted_5, _hoisted_6, _hoisted_7, _hoisted_8, SettingsPersonalView_vue_vue_type_script_setup_true_lang_default, container, header, user, username, tooltip, disableMfaButton, button, infoText, themeSelect, SettingsPersonalView_vue_vue_type_style_index_0_lang_module_default, cssModules, SettingsPersonalView_default;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Cn;
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
        onBeforeUnmount = _vueRuntimeEsmBundlerLegacy003Js.J;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        onMounted = _vueRuntimeEsmBundlerLegacy003Js.Z;
        Fragment = _vueRuntimeEsmBundlerLegacy003Js._;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        renderList = _vueRuntimeEsmBundlerLegacy003Js.it;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js.vn;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {
        N8nNotice_default = _srcLegacy007Js.D;
        N8nSelect_default = _srcLegacy007Js.G;
        N8nButton_default = _srcLegacy007Js.Hn;
        N8nOption_default = _srcLegacy007Js.K;
        N8nText_default = _srcLegacy007Js.Vn;
        N8nInputLabel_default = _srcLegacy007Js.X;
        createFormEventBus = _srcLegacy007Js.bt;
        N8nTooltip_default = _srcLegacy007Js.mt;
        N8nLink_default = _srcLegacy007Js.ut;
        N8nAvatar_default = _srcLegacy007Js.vt;
        N8nFormInputs_default = _srcLegacy007Js.z;
        N8nHeading_default = _srcLegacy007Js.zn;
      }, function (_enLegacy00bJs) {}, function (_preloadHelperLegacy00dJs) {}, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {}, function (_iconLegacy00nJs) {}, function (_emptyLegacy00vJs) {}, function (_useTelemetryLegacy00HJs) {
        useUIStore = _useTelemetryLegacy00HJs.Fi;
        useDocumentTitle = _useTelemetryLegacy00HJs.Tn;
        useSettingsStore = _useTelemetryLegacy00HJs.Wo;
        useUsersStore = _useTelemetryLegacy00HJs.nr;
      }, function (_useToastLegacy00JJs) {
        useToast = _useToastLegacy00JJs.t;
      }, function (_sanitizeHtmlLegacy00LJs) {}, function (_CalendarDateLegacy00NJs) {}, function (_pathBrowserifyLegacy00RJs) {}, function (_constantsLegacy00TJs) {
        MFA_SETUP_MODAL_KEY = _constantsLegacy00TJs.$o;
        CONFIRM_PASSWORD_MODAL_KEY = _constantsLegacy00TJs.Ho;
        ROLE = _constantsLegacy00TJs.Xr;
        PROMPT_MFA_CODE_MODAL_KEY = _constantsLegacy00TJs.ss;
        MFA_DOCS_URL = _constantsLegacy00TJs.y;
        CHANGE_PASSWORD_MODAL_KEY = _constantsLegacy00TJs.zo;
      }, function (_mergeLegacy00VJs) {}, function (_baseOrderByLegacy00ZJs) {}, function (_dateformatLegacy00$Js) {}, function (_useDebounceLegacy011Js) {}, function (_useExternalHooksLegacy013Js) {}, function (_useStylesLegacy015Js) {}, function (_cloudPlanStoreLegacy01dJs) {
        useCloudPlanStore = _cloudPlanStoreLegacy01dJs.t;
      }, function (_authEventBusLegacy01$Js) {
        promptMfaCodeBus = _authEventBusLegacy01$Js.r;
        confirmPasswordEventBus = _authEventBusLegacy01$Js.t;
      }, function (_ssoStoreLegacy039Js) {
        useSSOStore = _ssoStoreLegacy039Js.n;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._container_1qm18_123 {\n  padding-bottom: 100px;\n}\n._container_1qm18_123 > * {\n  margin-bottom: var(--spacing--2xl);\n}\n._header_1qm18_130 {\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n}\n._header_1qm18_130 *:first-child {\n  flex-grow: 1;\n}\n._user_1qm18_139 {\n  display: flex;\n  align-items: center;\n}\n@media (max-width: 600px) {\n._user_1qm18_139 {\n    display: none;\n}\n}\n._username_1qm18_149 {\n  display: grid;\n  grid-template-columns: 1fr;\n  margin-right: var(--spacing--sm);\n}\n@media (max-width: 992px) {\n._username_1qm18_149 {\n    max-width: 100px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n}\n._tooltip_1qm18_162 {\n  justify-self: start;\n}\n._disableMfaButton_1qm18_166 > span {\n  font-weight: var(--font-weight--bold);\n}\n._button_1qm18_170 {\n  font-size: var(--spacing--xs);\n}\n._button_1qm18_170 > span {\n  font-weight: var(--font-weight--bold);\n}\n._infoText_1qm18_177 {\n  font-size: var(--font-size--2xs);\n  color: var(--color--text--tint-1);\n}\n._themeSelect_1qm18_182 {\n  max-width: 50%;\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/features/core/auth/views/SettingsPersonalView.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1 = {
          class: "mb-s"
        };
        _hoisted_2 = {
          "data-test-id": "personal-data-form"
        };
        _hoisted_3 = {
          key: 0
        };
        _hoisted_4 = {
          class: "mb-s"
        };
        _hoisted_5 = {
          class: "mb-s"
        };
        _hoisted_6 = {
          key: 0,
          "data-test-id": "mfa-section"
        };
        _hoisted_7 = {
          class: "mb-xs"
        };
        _hoisted_8 = {
          class: "mb-s"
        };
        SettingsPersonalView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "SettingsPersonalView",
          setup(__props) {
            const i18n = useI18n();
            const {
              showToast,
              showError
            } = useToast();
            const documentTitle = useDocumentTitle();
            const hasAnyBasicInfoChanges = ref(false);
            const formInputs = ref(null);
            const formBus = createFormEventBus();
            const readyToSubmit = ref(false);
            const currentSelectedTheme = ref(useUIStore().theme);
            const themeOptions = ref([{
              name: "system",
              label: "settings.personal.theme.systemDefault"
            }, {
              name: "light",
              label: "settings.personal.theme.light"
            }, {
              name: "dark",
              label: "settings.personal.theme.dark"
            }]);
            const uiStore = useUIStore();
            const usersStore = useUsersStore();
            const settingsStore = useSettingsStore();
            const ssoStore = useSSOStore();
            const cloudPlanStore = useCloudPlanStore();
            const currentUser = computed(() => {
              return usersStore.currentUser;
            });
            const isExternalAuthEnabled = computed(() => {
              const isLdapEnabled = ssoStore.isEnterpriseLdapEnabled && currentUser.value?.signInType === "ldap";
              const isSamlEnabled = ssoStore.isSamlLoginEnabled && ssoStore.isDefaultAuthenticationSaml;
              const isOidcEnabled = ssoStore.isEnterpriseOidcEnabled && currentUser.value?.signInType === "oidc";
              return isLdapEnabled || isSamlEnabled || isOidcEnabled;
            });
            const isPersonalSecurityEnabled = computed(() => {
              return usersStore.isInstanceOwner || !isExternalAuthEnabled.value;
            });
            const mfaDisabled = computed(() => {
              return !usersStore.mfaEnabled;
            });
            const mfaEnforced = computed(() => {
              return settingsStore.isMFAEnforced;
            });
            const isMfaFeatureEnabled = computed(() => {
              return settingsStore.isMfaFeatureEnabled;
            });
            const hasAnyPersonalisationChanges = computed(() => {
              return currentSelectedTheme.value !== uiStore.theme;
            });
            const hasAnyChanges = computed(() => {
              return hasAnyBasicInfoChanges.value || hasAnyPersonalisationChanges.value;
            });
            const roles = computed(() => ({
              [ROLE.Default]: {
                name: i18n.baseText("auth.roles.default"),
                description: i18n.baseText("settings.personal.role.tooltip.default")
              },
              [ROLE.Member]: {
                name: i18n.baseText("auth.roles.member"),
                description: i18n.baseText("settings.personal.role.tooltip.member")
              },
              [ROLE.Admin]: {
                name: i18n.baseText("auth.roles.admin"),
                description: i18n.baseText("settings.personal.role.tooltip.admin")
              },
              [ROLE.Owner]: {
                name: i18n.baseText("auth.roles.owner"),
                description: i18n.baseText("settings.personal.role.tooltip.owner", {
                  interpolate: {
                    cloudAccess: cloudPlanStore.hasCloudPlan ? i18n.baseText("settings.personal.role.tooltip.cloud") : ""
                  }
                })
              }
            }));
            const currentUserRole = computed(() => roles.value[usersStore.globalRoleName]);
            onMounted(() => {
              documentTitle.set(i18n.baseText("settings.personal.personalSettings"));
              formInputs.value = [{
                name: "firstName",
                initialValue: currentUser.value?.firstName,
                properties: {
                  label: i18n.baseText("auth.firstName"),
                  maxlength: 32,
                  required: true,
                  autocomplete: "given-name",
                  capitalize: true,
                  disabled: isExternalAuthEnabled.value
                }
              }, {
                name: "lastName",
                initialValue: currentUser.value?.lastName,
                properties: {
                  label: i18n.baseText("auth.lastName"),
                  maxlength: 32,
                  required: true,
                  autocomplete: "family-name",
                  capitalize: true,
                  disabled: isExternalAuthEnabled.value
                }
              }, {
                name: "email",
                initialValue: currentUser.value?.email,
                properties: {
                  label: i18n.baseText("auth.email"),
                  type: "email",
                  required: true,
                  validationRules: [{
                    name: "VALID_EMAIL"
                  }],
                  autocomplete: "email",
                  capitalize: true,
                  disabled: !isPersonalSecurityEnabled.value
                }
              }];
            });
            function onInput() {
              hasAnyBasicInfoChanges.value = true;
            }
            function onReadyToSubmit(ready) {
              readyToSubmit.value = ready;
            }
            /** Saves users basic info and personalization settings */
            async function saveUserSettings(params) {
              try {
                await updateUserBasicInfo(params);
                await updatePersonalisationSettings();
                showToast({
                  title: i18n.baseText("settings.personal.personalSettingsUpdated"),
                  message: "",
                  type: "success"
                });
              } catch (e) {
                showError(e, i18n.baseText("settings.personal.personalSettingsUpdatedError"));
              }
            }
            async function onSubmit(data) {
              const form = data;
              const emailChanged = usersStore.currentUser?.email !== form.email;
              if (usersStore.currentUser?.mfaEnabled && emailChanged) {
                uiStore.openModal(PROMPT_MFA_CODE_MODAL_KEY);
                promptMfaCodeBus.once("closed", async payload => {
                  if (!payload) return;
                  await saveUserSettings({
                    ...form,
                    mfaCode: payload.mfaCode
                  });
                });
              } else if (emailChanged) {
                uiStore.openModal(CONFIRM_PASSWORD_MODAL_KEY);
                confirmPasswordEventBus.once("close", async payload => {
                  if (!payload) return;
                  await saveUserSettings({
                    ...form,
                    currentPassword: payload.currentPassword
                  });
                  uiStore.closeModal(CONFIRM_PASSWORD_MODAL_KEY);
                });
              } else await saveUserSettings(form);
            }
            async function updateUserBasicInfo(userBasicInfo) {
              if (!hasAnyBasicInfoChanges.value || !usersStore.currentUserId) return;
              await usersStore.updateUser({
                firstName: userBasicInfo.firstName,
                lastName: userBasicInfo.lastName,
                email: userBasicInfo.email,
                mfaCode: userBasicInfo.mfaCode,
                currentPassword: userBasicInfo.currentPassword
              });
              hasAnyBasicInfoChanges.value = false;
            }
            async function updatePersonalisationSettings() {
              if (!hasAnyPersonalisationChanges.value) return;
              uiStore.setTheme(currentSelectedTheme.value);
            }
            function onSaveClick() {
              formBus.emit("submit");
            }
            function openPasswordModal() {
              uiStore.openModal(CHANGE_PASSWORD_MODAL_KEY);
            }
            async function onMfaEnableClick() {
              if (!settingsStore.isCloudDeployment || !usersStore.isInstanceOwner) {
                uiStore.openModal(MFA_SETUP_MODAL_KEY);
                return;
              }
              try {
                await usersStore.canEnableMFA();
                uiStore.openModal(MFA_SETUP_MODAL_KEY);
              } catch (e) {
                showToast({
                  title: i18n.baseText("settings.personal.mfa.toast.canEnableMfa.title"),
                  message: e.message,
                  type: "error"
                });
                await usersStore.sendConfirmationEmail();
              }
            }
            async function disableMfa(payload) {
              if (!payload) return;
              try {
                await usersStore.disableMfa(payload);
                showToast({
                  title: i18n.baseText("settings.personal.mfa.toast.disabledMfa.title"),
                  message: i18n.baseText("settings.personal.mfa.toast.disabledMfa.message"),
                  type: "success",
                  duration: 0
                });
              } catch (e) {
                showError(e, i18n.baseText("settings.personal.mfa.toast.disabledMfa.error.message"));
              }
            }
            async function onMfaDisableClick() {
              uiStore.openModal(PROMPT_MFA_CODE_MODAL_KEY);
              promptMfaCodeBus.once("closed", disableMfa);
            }
            onBeforeUnmount(() => {
              promptMfaCodeBus.off("closed", disableMfa);
            });
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(_ctx.$style.container),
                "data-test-id": "personal-settings-container"
              }, [createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.header)
              }, [createVNode(unref(N8nHeading_default), {
                size: "2xlarge"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.personal.personalSettings")), 1)]),
                _: 1
              }), currentUser.value ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(_ctx.$style.user)
              }, [createBaseVNode("span", {
                class: normalizeClass(_ctx.$style.username),
                "data-test-id": "current-user-name"
              }, [createVNode(unref(N8nText_default), {
                color: "text-base",
                bold: ""
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(currentUser.value.fullName), 1)]),
                _: 1
              }), createVNode(unref(N8nTooltip_default), {
                placement: "bottom"
              }, {
                content: withCtx(() => [createTextVNode(toDisplayString(currentUserRole.value.description), 1)]),
                default: withCtx(() => [createVNode(unref(N8nText_default), {
                  class: normalizeClass(_ctx.$style.tooltip),
                  color: "text-light",
                  "data-test-id": "current-user-role"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(currentUserRole.value.name), 1)]),
                  _: 1
                }, 8, ["class"])]),
                _: 1
              })], 2), createVNode(unref(N8nAvatar_default), {
                "first-name": currentUser.value.firstName,
                "last-name": currentUser.value.lastName,
                size: "large"
              }, null, 8, ["first-name", "last-name"])], 2)) : createCommentVNode("", true)], 2), createBaseVNode("div", null, [createBaseVNode("div", _hoisted_1, [createVNode(unref(N8nHeading_default), {
                size: "large"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.personal.basicInformation")), 1)]),
                _: 1
              })]), createBaseVNode("div", _hoisted_2, [formInputs.value ? (openBlock(), createBlock(unref(N8nFormInputs_default), {
                key: 0,
                inputs: formInputs.value,
                "event-bus": unref(formBus),
                onUpdate: onInput,
                onReady: onReadyToSubmit,
                onSubmit
              }, null, 8, ["inputs", "event-bus"])) : createCommentVNode("", true)])]), isPersonalSecurityEnabled.value ? (openBlock(), createElementBlock("div", _hoisted_3, [createBaseVNode("div", _hoisted_4, [createVNode(unref(N8nHeading_default), {
                size: "large"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.personal.security")), 1)]),
                _: 1
              })]), createBaseVNode("div", _hoisted_5, [createVNode(unref(N8nInputLabel_default), {
                label: unref(i18n).baseText("auth.password")
              }, {
                default: withCtx(() => [createVNode(unref(N8nLink_default), {
                  "data-test-id": "change-password-link",
                  onClick: openPasswordModal
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("auth.changePassword")), 1)]),
                  _: 1
                })]),
                _: 1
              }, 8, ["label"])]), isMfaFeatureEnabled.value ? (openBlock(), createElementBlock("div", _hoisted_6, [createBaseVNode("div", _hoisted_7, [createVNode(unref(N8nInputLabel_default), {
                label: unref(i18n).baseText("settings.personal.mfa.section.title")
              }, null, 8, ["label"]), createVNode(unref(N8nText_default), {
                bold: false,
                class: normalizeClass(_ctx.$style.infoText)
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(mfaDisabled.value ? unref(i18n).baseText("settings.personal.mfa.button.disabled.infobox") : unref(i18n).baseText("settings.personal.mfa.button.enabled.infobox")) + " ", 1), createVNode(unref(N8nLink_default), {
                  to: unref(MFA_DOCS_URL),
                  size: "small",
                  bold: true
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.learnMore")), 1)]),
                  _: 1
                }, 8, ["to"])]),
                _: 1
              }, 8, ["class"])]), mfaDisabled.value && mfaEnforced.value ? (openBlock(), createBlock(unref(N8nNotice_default), {
                key: 0,
                content: unref(i18n).baseText("settings.personal.mfa.enforced")
              }, null, 8, ["content"])) : createCommentVNode("", true), mfaDisabled.value ? (openBlock(), createBlock(unref(N8nButton_default), {
                key: 1,
                class: normalizeClass(_ctx.$style.button),
                type: "tertiary",
                label: unref(i18n).baseText("settings.personal.mfa.button.enabled"),
                "data-test-id": "enable-mfa-button",
                onClick: onMfaEnableClick
              }, null, 8, ["class", "label"])) : (openBlock(), createBlock(unref(N8nButton_default), {
                key: 2,
                class: normalizeClass(_ctx.$style.disableMfaButton),
                type: "tertiary",
                label: unref(i18n).baseText("settings.personal.mfa.button.disabled"),
                "data-test-id": "disable-mfa-button",
                onClick: onMfaDisableClick
              }, null, 8, ["class", "label"]))])) : createCommentVNode("", true)])) : createCommentVNode("", true), createBaseVNode("div", null, [createBaseVNode("div", _hoisted_8, [createVNode(unref(N8nHeading_default), {
                size: "large"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.personal.personalisation")), 1)]),
                _: 1
              })]), createBaseVNode("div", null, [createVNode(unref(N8nInputLabel_default), {
                label: unref(i18n).baseText("settings.personal.theme")
              }, {
                default: withCtx(() => [createVNode(unref(N8nSelect_default), {
                  modelValue: currentSelectedTheme.value,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => currentSelectedTheme.value = $event),
                  class: normalizeClass(_ctx.$style.themeSelect),
                  "data-test-id": "theme-select",
                  size: "small",
                  filterable: ""
                }, {
                  default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(themeOptions.value, item => {
                    return openBlock(), createBlock(unref(N8nOption_default), {
                      key: item.name,
                      label: unref(i18n).baseText(item.label),
                      value: item.name
                    }, null, 8, ["label", "value"]);
                  }), 128))]),
                  _: 1
                }, 8, ["modelValue", "class"])]),
                _: 1
              }, 8, ["label"])])]), createBaseVNode("div", null, [createVNode(unref(N8nButton_default), {
                float: "right",
                label: unref(i18n).baseText("settings.personal.save"),
                size: "large",
                disabled: !hasAnyChanges.value || !readyToSubmit.value,
                "data-test-id": "save-settings-button",
                onClick: onSaveClick
              }, null, 8, ["label", "disabled"])])], 2);
            };
          }
        }); //#endregion
        //#region src/features/core/auth/views/SettingsPersonalView.vue?vue&type=style&index=0&lang.module.scss
        container = "_container_1qm18_123";
        header = "_header_1qm18_130";
        user = "_user_1qm18_139";
        username = "_username_1qm18_149";
        tooltip = "_tooltip_1qm18_162";
        disableMfaButton = "_disableMfaButton_1qm18_166";
        button = "_button_1qm18_170";
        infoText = "_infoText_1qm18_177";
        themeSelect = "_themeSelect_1qm18_182";
        SettingsPersonalView_vue_vue_type_style_index_0_lang_module_default = {
          container,
          header,
          user,
          username,
          tooltip,
          disableMfaButton,
          button,
          infoText,
          themeSelect
        }; //#endregion
        //#region src/features/core/auth/views/SettingsPersonalView.vue
        cssModules = {
          "$style": SettingsPersonalView_vue_vue_type_style_index_0_lang_module_default
        };
        _export("default", SettingsPersonalView_default = /* @__PURE__ */__plugin_vue_export_helper_default(SettingsPersonalView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]])); //#endregion
      }
    };
  });
})();