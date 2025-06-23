import { d as defineComponent, bW as useClipboard, a as useToast, v as useSettingsStore, J as useUIStore, u as useUsersStore, eA as useSSOStore, a7 as useDocumentTitle, aa as usePageRedirectionHelper, x as computed, ad as hasPermission, o as onMounted, c as useI18n, ae as EnterpriseEditionFeature, eG as ROLE, h as resolveComponent, i as createElementBlock, g as openBlock, k as createBaseVNode, f as createCommentVNode, e as createBlock, j as createVNode, w as withCtx, l as createTextVNode, t as toDisplayString, m as unref, n as normalizeClass, F as Fragment, G as renderList, eM as INVITE_USER_MODAL_KEY, _ as _export_sfc } from "./index-Y0sphpVt.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SettingsUsersView",
  setup(__props) {
    const clipboard = useClipboard();
    const { showToast, showError } = useToast();
    const settingsStore = useSettingsStore();
    const uiStore = useUIStore();
    const usersStore = useUsersStore();
    const ssoStore = useSSOStore();
    const documentTitle = useDocumentTitle();
    const pageRedirectionHelper = usePageRedirectionHelper();
    const i18n = useI18n();
    const showUMSetupWarning = computed(() => {
      return hasPermission(["defaultUser"]);
    });
    onMounted(async () => {
      documentTitle.set(i18n.baseText("settings.users"));
      if (!showUMSetupWarning.value) {
        await usersStore.fetchUsers();
      }
    });
    const usersListActions = computed(() => {
      return [
        {
          label: i18n.baseText("settings.users.actions.copyInviteLink"),
          value: "copyInviteLink",
          guard: (user) => settingsStore.isBelowUserQuota && !user.firstName && !!user.inviteAcceptUrl
        },
        {
          label: i18n.baseText("settings.users.actions.reinvite"),
          value: "reinvite",
          guard: (user) => settingsStore.isBelowUserQuota && !user.firstName && settingsStore.isSmtpSetup
        },
        {
          label: i18n.baseText("settings.users.actions.delete"),
          value: "delete",
          guard: (user) => hasPermission(["rbac"], { rbac: { scope: "user:delete" } }) && user.id !== usersStore.currentUserId
        },
        {
          label: i18n.baseText("settings.users.actions.copyPasswordResetLink"),
          value: "copyPasswordResetLink",
          guard: (user) => hasPermission(["rbac"], { rbac: { scope: "user:resetPassword" } }) && settingsStore.isBelowUserQuota && !user.isPendingUser && user.id !== usersStore.currentUserId
        },
        {
          label: i18n.baseText("settings.users.actions.allowSSOManualLogin"),
          value: "allowSSOManualLogin",
          guard: (user) => !!ssoStore.isSamlLoginEnabled && !user.settings?.allowSSOManualLogin
        },
        {
          label: i18n.baseText("settings.users.actions.disallowSSOManualLogin"),
          value: "disallowSSOManualLogin",
          guard: (user) => !!ssoStore.isSamlLoginEnabled && user.settings?.allowSSOManualLogin === true
        }
      ];
    });
    const isAdvancedPermissionsEnabled = computed(() => {
      return settingsStore.isEnterpriseFeatureEnabled[EnterpriseEditionFeature.AdvancedPermissions];
    });
    const userRoles = computed(() => {
      return [
        {
          value: ROLE.Member,
          label: i18n.baseText("auth.roles.member")
        },
        {
          value: ROLE.Admin,
          label: i18n.baseText("auth.roles.admin"),
          disabled: !isAdvancedPermissionsEnabled.value
        }
      ];
    });
    const canUpdateRole = computed(() => {
      return hasPermission(["rbac"], { rbac: { scope: ["user:update", "user:changeRole"] } });
    });
    async function onUsersListAction({ action, userId }) {
      switch (action) {
        case "delete":
          await onDelete(userId);
          break;
        case "reinvite":
          await onReinvite(userId);
          break;
        case "copyInviteLink":
          await onCopyInviteLink(userId);
          break;
        case "copyPasswordResetLink":
          await onCopyPasswordResetLink(userId);
          break;
        case "allowSSOManualLogin":
          await onAllowSSOManualLogin(userId);
          break;
        case "disallowSSOManualLogin":
          await onDisallowSSOManualLogin(userId);
          break;
      }
    }
    function onInvite() {
      uiStore.openModal(INVITE_USER_MODAL_KEY);
    }
    async function onDelete(userId) {
      const user = usersStore.usersById[userId];
      if (user) {
        uiStore.openDeleteUserModal(userId);
      }
    }
    async function onReinvite(userId) {
      const user = usersStore.usersById[userId];
      if (user?.email && user?.role) {
        if (!["global:admin", "global:member"].includes(user.role)) {
          throw new Error("Invalid role name on reinvite");
        }
        try {
          await usersStore.reinviteUser({
            email: user.email,
            role: user.role
          });
          showToast({
            type: "success",
            title: i18n.baseText("settings.users.inviteResent"),
            message: i18n.baseText("settings.users.emailSentTo", {
              interpolate: { email: user.email ?? "" }
            })
          });
        } catch (e) {
          showError(e, i18n.baseText("settings.users.userReinviteError"));
        }
      }
    }
    async function onCopyInviteLink(userId) {
      const user = usersStore.usersById[userId];
      if (user?.inviteAcceptUrl) {
        void clipboard.copy(user.inviteAcceptUrl);
        showToast({
          type: "success",
          title: i18n.baseText("settings.users.inviteUrlCreated"),
          message: i18n.baseText("settings.users.inviteUrlCreated.message")
        });
      }
    }
    async function onCopyPasswordResetLink(userId) {
      const user = usersStore.usersById[userId];
      if (user) {
        const url = await usersStore.getUserPasswordResetLink(user);
        void clipboard.copy(url.link);
        showToast({
          type: "success",
          title: i18n.baseText("settings.users.passwordResetUrlCreated"),
          message: i18n.baseText("settings.users.passwordResetUrlCreated.message")
        });
      }
    }
    async function onAllowSSOManualLogin(userId) {
      const user = usersStore.usersById[userId];
      if (user) {
        if (!user.settings) {
          user.settings = {};
        }
        user.settings.allowSSOManualLogin = true;
        await usersStore.updateOtherUserSettings(userId, user.settings);
        showToast({
          type: "success",
          title: i18n.baseText("settings.users.allowSSOManualLogin"),
          message: i18n.baseText("settings.users.allowSSOManualLogin.message")
        });
      }
    }
    async function onDisallowSSOManualLogin(userId) {
      const user = usersStore.usersById[userId];
      if (user?.settings) {
        user.settings.allowSSOManualLogin = false;
        await usersStore.updateOtherUserSettings(userId, user.settings);
        showToast({
          type: "success",
          title: i18n.baseText("settings.users.disallowSSOManualLogin"),
          message: i18n.baseText("settings.users.disallowSSOManualLogin.message")
        });
      }
    }
    function goToUpgrade() {
      void pageRedirectionHelper.goToUpgrade("settings-users", "upgrade-users");
    }
    function goToUpgradeAdvancedPermissions() {
      void pageRedirectionHelper.goToUpgrade("settings-users", "upgrade-advanced-permissions");
    }
    async function onRoleChange(user, newRoleName) {
      try {
        await usersStore.updateGlobalRole({ id: user.id, newRoleName });
        const role = userRoles.value.find(({ value }) => value === newRoleName)?.label || newRoleName;
        showToast({
          type: "success",
          title: i18n.baseText("settings.users.userRoleUpdated"),
          message: i18n.baseText("settings.users.userRoleUpdated.message", {
            interpolate: {
              user: user.fullName ?? "",
              role
            }
          })
        });
      } catch (e) {
        showError(e, i18n.baseText("settings.users.userReinviteError"));
      }
    }
    return (_ctx, _cache) => {
      const _component_n8n_heading = resolveComponent("n8n-heading");
      const _component_n8n_button = resolveComponent("n8n-button");
      const _component_n8n_tooltip = resolveComponent("n8n-tooltip");
      const _component_n8n_action_box = resolveComponent("n8n-action-box");
      const _component_n8n_link = resolveComponent("n8n-link");
      const _component_i18n_t = resolveComponent("i18n-t");
      const _component_n8n_notice = resolveComponent("n8n-notice");
      const _component_n8n_option = resolveComponent("n8n-option");
      const _component_n8n_select = resolveComponent("n8n-select");
      const _component_n8n_users_list = resolveComponent("n8n-users-list");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.container)
      }, [
        createBaseVNode("div", null, [
          createVNode(_component_n8n_heading, { size: "2xlarge" }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(i18n).baseText("settings.users")), 1)
            ]),
            _: 1
          }),
          !showUMSetupWarning.value ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(_ctx.$style.buttonContainer)
          }, [
            createVNode(_component_n8n_tooltip, {
              disabled: !unref(ssoStore).isSamlLoginEnabled
            }, {
              content: withCtx(() => [
                createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("settings.users.invite.tooltip")), 1)
              ]),
              default: withCtx(() => [
                createBaseVNode("div", null, [
                  createVNode(_component_n8n_button, {
                    disabled: unref(ssoStore).isSamlLoginEnabled || !unref(settingsStore).isBelowUserQuota,
                    label: unref(i18n).baseText("settings.users.invite"),
                    size: "large",
                    "data-test-id": "settings-users-invite-button",
                    onClick: onInvite
                  }, null, 8, ["disabled", "label"])
                ])
              ]),
              _: 1
            }, 8, ["disabled"])
          ], 2)) : createCommentVNode("", true)
        ]),
        !unref(settingsStore).isBelowUserQuota ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(_ctx.$style.setupInfoContainer)
        }, [
          createVNode(_component_n8n_action_box, {
            heading: unref(i18n).baseText(unref(uiStore).contextBasedTranslationKeys.users.settings.unavailable.title),
            description: unref(i18n).baseText(unref(uiStore).contextBasedTranslationKeys.users.settings.unavailable.description),
            "button-text": unref(i18n).baseText(unref(uiStore).contextBasedTranslationKeys.users.settings.unavailable.button),
            "onClick:button": goToUpgrade
          }, null, 8, ["heading", "description", "button-text"])
        ], 2)) : createCommentVNode("", true),
        !isAdvancedPermissionsEnabled.value ? (openBlock(), createBlock(_component_n8n_notice, { key: 1 }, {
          default: withCtx(() => [
            createVNode(_component_i18n_t, { keypath: "settings.users.advancedPermissions.warning" }, {
              link: withCtx(() => [
                createVNode(_component_n8n_link, {
                  size: "small",
                  onClick: goToUpgradeAdvancedPermissions
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(i18n).baseText("settings.users.advancedPermissions.warning.link")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : createCommentVNode("", true),
        unref(settingsStore).isBelowUserQuota || unref(usersStore).allUsers.length > 1 ? (openBlock(), createElementBlock("div", {
          key: 2,
          class: normalizeClass(_ctx.$style.usersContainer)
        }, [
          createVNode(_component_n8n_users_list, {
            actions: usersListActions.value,
            users: unref(usersStore).allUsers,
            "current-user-id": unref(usersStore).currentUserId,
            "is-saml-login-enabled": unref(ssoStore).isSamlLoginEnabled,
            onAction: onUsersListAction
          }, {
            actions: withCtx(({ user }) => [
              user.id !== unref(usersStore).currentUserId ? (openBlock(), createBlock(_component_n8n_select, {
                key: 0,
                "model-value": user?.role || "global:member",
                disabled: !canUpdateRole.value,
                "data-test-id": "user-role-select",
                "onUpdate:modelValue": ($event) => onRoleChange(user, $event)
              }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(userRoles.value, (role) => {
                    return openBlock(), createBlock(_component_n8n_option, {
                      key: role.value,
                      value: role.value,
                      label: role.label,
                      disabled: role.disabled
                    }, null, 8, ["value", "label", "disabled"]);
                  }), 128))
                ]),
                _: 2
              }, 1032, ["model-value", "disabled", "onUpdate:modelValue"])) : createCommentVNode("", true)
            ]),
            _: 1
          }, 8, ["actions", "users", "current-user-id", "is-saml-login-enabled"])
        ], 2)) : createCommentVNode("", true)
      ], 2);
    };
  }
});
const container = "_container_14n6l_123";
const usersContainer = "_usersContainer_14n6l_131";
const buttonContainer = "_buttonContainer_14n6l_135";
const setupInfoContainer = "_setupInfoContainer_14n6l_141";
const alert = "_alert_14n6l_145";
const style0 = {
  container,
  usersContainer,
  buttonContainer,
  setupInfoContainer,
  alert
};
const cssModules = {
  "$style": style0
};
const SettingsUsersView = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);
export {
  SettingsUsersView as default
};
