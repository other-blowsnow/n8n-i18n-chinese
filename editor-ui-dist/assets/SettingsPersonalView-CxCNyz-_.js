import { d as defineComponent, a as useToast, a4 as useDocumentTitle, r as ref, H as useUIStore, u as useUsersStore, p as useSettingsStore, q as computed, o as onMounted, c as useI18n, y as onBeforeUnmount, dO as promptMfaCodeBus, h as resolveComponent, i as createElementBlock, g as openBlock, k as createBaseVNode, f as createCommentVNode, j as createVNode, w as withCtx, l as createTextVNode, t as toDisplayString, m as unref, n as normalizeClass, e as createBlock, dJ as createFormEventBus, dP as MFA_DOCS_URL, F as Fragment, D as renderList, dQ as CHANGE_PASSWORD_MODAL_KEY, dR as PROMPT_MFA_CODE_MODAL_KEY, dS as MFA_SETUP_MODAL_KEY, _ as _export_sfc } from "./index-qdO_UsJ-.js";
const _hoisted_1 = { class: "mb-s" };
const _hoisted_2 = { "data-test-id": "personal-data-form" };
const _hoisted_3 = { key: 0 };
const _hoisted_4 = { class: "mb-s" };
const _hoisted_5 = { class: "mb-s" };
const _hoisted_6 = {
  key: 0,
  "data-test-id": "mfa-section"
};
const _hoisted_7 = { class: "mb-xs" };
const _hoisted_8 = { class: "mb-s" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SettingsPersonalView",
  setup(__props) {
    const i18n = useI18n();
    const { showToast, showError } = useToast();
    const documentTitle = useDocumentTitle();
    const hasAnyBasicInfoChanges = ref(false);
    const formInputs = ref(null);
    const formBus = createFormEventBus();
    const readyToSubmit = ref(false);
    const currentSelectedTheme = ref(useUIStore().theme);
    const themeOptions = ref([
      {
        name: "system",
        label: "settings.personal.theme.systemDefault"
      },
      {
        name: "light",
        label: "settings.personal.theme.light"
      },
      {
        name: "dark",
        label: "settings.personal.theme.dark"
      }
    ]);
    const uiStore = useUIStore();
    const usersStore = useUsersStore();
    const settingsStore = useSettingsStore();
    const currentUser = computed(() => {
      return usersStore.currentUser;
    });
    const isExternalAuthEnabled = computed(() => {
      const isLdapEnabled = settingsStore.settings.enterprise.ldap && currentUser.value?.signInType === "ldap";
      const isSamlEnabled = settingsStore.isSamlLoginEnabled && settingsStore.isDefaultAuthenticationSaml;
      return isLdapEnabled || isSamlEnabled;
    });
    const isPersonalSecurityEnabled = computed(() => {
      return usersStore.isInstanceOwner || !isExternalAuthEnabled.value;
    });
    const mfaDisabled = computed(() => {
      return !usersStore.mfaEnabled;
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
    onMounted(() => {
      documentTitle.set(i18n.baseText("settings.personal.personalSettings"));
      formInputs.value = [
        {
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
        },
        {
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
        },
        {
          name: "email",
          initialValue: currentUser.value?.email,
          properties: {
            label: i18n.baseText("auth.email"),
            type: "email",
            required: true,
            validationRules: [{ name: "VALID_EMAIL" }],
            autocomplete: "email",
            capitalize: true,
            disabled: !isPersonalSecurityEnabled.value
          }
        }
      ];
    });
    function onInput() {
      hasAnyBasicInfoChanges.value = true;
    }
    function onReadyToSubmit(ready) {
      readyToSubmit.value = ready;
    }
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
    async function onSubmit(form) {
      const emailChanged = usersStore.currentUser?.email !== form.email;
      if (usersStore.currentUser?.mfaEnabled && emailChanged) {
        uiStore.openModal(PROMPT_MFA_CODE_MODAL_KEY);
        promptMfaCodeBus.once("closed", async (payload) => {
          if (!payload) {
            return;
          }
          await saveUserSettings({
            ...form,
            mfaCode: payload.mfaCode
          });
        });
      } else {
        await saveUserSettings(form);
      }
    }
    async function updateUserBasicInfo(userBasicInfo) {
      if (!hasAnyBasicInfoChanges.value || !usersStore.currentUserId) {
        return;
      }
      await usersStore.updateUser({
        firstName: userBasicInfo.firstName,
        lastName: userBasicInfo.lastName,
        email: userBasicInfo.email,
        mfaCode: userBasicInfo.mfaCode
      });
      hasAnyBasicInfoChanges.value = false;
    }
    async function updatePersonalisationSettings() {
      if (!hasAnyPersonalisationChanges.value) {
        return;
      }
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
      if (!payload) {
        return;
      }
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
      const _component_n8n_heading = resolveComponent("n8n-heading");
      const _component_n8n_text = resolveComponent("n8n-text");
      const _component_n8n_avatar = resolveComponent("n8n-avatar");
      const _component_n8n_form_inputs = resolveComponent("n8n-form-inputs");
      const _component_n8n_link = resolveComponent("n8n-link");
      const _component_n8n_input_label = resolveComponent("n8n-input-label");
      const _component_n8n_button = resolveComponent("n8n-button");
      const _component_n8n_option = resolveComponent("n8n-option");
      const _component_n8n_select = resolveComponent("n8n-select");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.container),
        "data-test-id": "personal-settings-container"
      }, [
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.header)
        }, [
          createVNode(_component_n8n_heading, { size: "2xlarge" }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(i18n).baseText("settings.personal.personalSettings")), 1)
            ]),
            _: 1
          }),
          currentUser.value ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(_ctx.$style.user)
          }, [
            createBaseVNode("span", {
              class: normalizeClass(_ctx.$style.username),
              "data-test-id": "current-user-name"
            }, [
              createVNode(_component_n8n_text, { color: "text-light" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(currentUser.value.fullName), 1)
                ]),
                _: 1
              })
            ], 2),
            createVNode(_component_n8n_avatar, {
              "first-name": currentUser.value.firstName,
              "last-name": currentUser.value.lastName,
              size: "large"
            }, null, 8, ["first-name", "last-name"])
          ], 2)) : createCommentVNode("", true)
        ], 2),
        createBaseVNode("div", null, [
          createBaseVNode("div", _hoisted_1, [
            createVNode(_component_n8n_heading, { size: "large" }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n).baseText("settings.personal.basicInformation")), 1)
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_2, [
            formInputs.value ? (openBlock(), createBlock(_component_n8n_form_inputs, {
              key: 0,
              inputs: formInputs.value,
              "event-bus": unref(formBus),
              onUpdate: onInput,
              onReady: onReadyToSubmit,
              onSubmit
            }, null, 8, ["inputs", "event-bus"])) : createCommentVNode("", true)
          ])
        ]),
        isPersonalSecurityEnabled.value ? (openBlock(), createElementBlock("div", _hoisted_3, [
          createBaseVNode("div", _hoisted_4, [
            createVNode(_component_n8n_heading, { size: "large" }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n).baseText("settings.personal.security")), 1)
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", _hoisted_5, [
            createVNode(_component_n8n_input_label, {
              label: unref(i18n).baseText("auth.password")
            }, {
              default: withCtx(() => [
                createVNode(_component_n8n_link, {
                  "data-test-id": "change-password-link",
                  onClick: openPasswordModal
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(i18n).baseText("auth.changePassword")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["label"])
          ]),
          isMfaFeatureEnabled.value ? (openBlock(), createElementBlock("div", _hoisted_6, [
            createBaseVNode("div", _hoisted_7, [
              createVNode(_component_n8n_input_label, {
                label: unref(i18n).baseText("settings.personal.mfa.section.title")
              }, null, 8, ["label"]),
              createVNode(_component_n8n_text, {
                bold: false,
                class: normalizeClass(_ctx.$style.infoText)
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(mfaDisabled.value ? unref(i18n).baseText("settings.personal.mfa.button.disabled.infobox") : unref(i18n).baseText("settings.personal.mfa.button.enabled.infobox")) + " ", 1),
                  createVNode(_component_n8n_link, {
                    to: unref(MFA_DOCS_URL),
                    size: "small",
                    bold: true
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(i18n).baseText("generic.learnMore")), 1)
                    ]),
                    _: 1
                  }, 8, ["to"])
                ]),
                _: 1
              }, 8, ["class"])
            ]),
            mfaDisabled.value ? (openBlock(), createBlock(_component_n8n_button, {
              key: 0,
              class: normalizeClass(_ctx.$style.button),
              type: "tertiary",
              label: unref(i18n).baseText("settings.personal.mfa.button.enabled"),
              "data-test-id": "enable-mfa-button",
              onClick: onMfaEnableClick
            }, null, 8, ["class", "label"])) : (openBlock(), createBlock(_component_n8n_button, {
              key: 1,
              class: normalizeClass(_ctx.$style.disableMfaButton),
              type: "tertiary",
              label: unref(i18n).baseText("settings.personal.mfa.button.disabled"),
              "data-test-id": "disable-mfa-button",
              onClick: onMfaDisableClick
            }, null, 8, ["class", "label"]))
          ])) : createCommentVNode("", true)
        ])) : createCommentVNode("", true),
        createBaseVNode("div", null, [
          createBaseVNode("div", _hoisted_8, [
            createVNode(_component_n8n_heading, { size: "large" }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n).baseText("settings.personal.personalisation")), 1)
              ]),
              _: 1
            })
          ]),
          createBaseVNode("div", null, [
            createVNode(_component_n8n_input_label, {
              label: unref(i18n).baseText("settings.personal.theme")
            }, {
              default: withCtx(() => [
                createVNode(_component_n8n_select, {
                  modelValue: currentSelectedTheme.value,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => currentSelectedTheme.value = $event),
                  class: normalizeClass(_ctx.$style.themeSelect),
                  "data-test-id": "theme-select",
                  size: "small",
                  filterable: ""
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(themeOptions.value, (item) => {
                      return openBlock(), createBlock(_component_n8n_option, {
                        key: item.name,
                        label: unref(i18n).baseText(item.label),
                        value: item.name
                      }, null, 8, ["label", "value"]);
                    }), 128))
                  ]),
                  _: 1
                }, 8, ["modelValue", "class"])
              ]),
              _: 1
            }, 8, ["label"])
          ])
        ]),
        createBaseVNode("div", null, [
          createVNode(_component_n8n_button, {
            float: "right",
            label: unref(i18n).baseText("settings.personal.save"),
            size: "large",
            disabled: !hasAnyChanges.value || !readyToSubmit.value,
            "data-test-id": "save-settings-button",
            onClick: onSaveClick
          }, null, 8, ["label", "disabled"])
        ])
      ], 2);
    };
  }
});
const container = "_container_1ni3x_123";
const header = "_header_1ni3x_130";
const user = "_user_1ni3x_139";
const username = "_username_1ni3x_149";
const disableMfaButton = "_disableMfaButton_1ni3x_161";
const button = "_button_1ni3x_168";
const infoText = "_infoText_1ni3x_175";
const themeSelect = "_themeSelect_1ni3x_180";
const style0 = {
  container,
  header,
  user,
  username,
  disableMfaButton,
  button,
  infoText,
  themeSelect
};
const cssModules = {
  "$style": style0
};
const SettingsPersonalView = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);
export {
  SettingsPersonalView as default
};
