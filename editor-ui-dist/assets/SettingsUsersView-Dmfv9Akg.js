import { d as defineComponent, r as ref, e3 as ROLE, x as computed, T as resolveComponent, h as createElementBlock, g as openBlock, e as createBlock, w as withCtx, p as N8nText, n as normalizeClass, k as createTextVNode, t as toDisplayString, j as createBaseVNode, i as createVNode, l as unref, N as N8nIcon, aN as N8nActionDropdown, _ as _export_sfc, c as useI18n, f as createCommentVNode, F as Fragment, A as renderList, a4 as N8nTooltip, ed as N8nActionToggle, ee as formatTimeAgo, ef as mergeModels, eg as useModel, aE as hasPermission, eh as N8nDataTableServer, J as N8nUserInfo, c8 as normalizeProps, c9 as guardReactiveProps, cg as useClipboard, a as useToast, v as useSettingsStore, Z as useUIStore, u as useUsersStore, dX as useSSOStore, ay as useDocumentTitle, aB as usePageRedirectionHelper, aF as EnterpriseEditionFeature, o as onMounted, ei as USERS_LIST_SORT_OPTIONS, m as N8nHeading, dY as N8nActionBox, a6 as I18nT, C as N8nLink, e7 as N8nNotice, aL as N8nBadge, c$ as N8nInput, q as N8nButton, ej as INVITE_USER_MODAL_KEY, ek as DELETE_USER_MODAL_KEY, el as useDebounceFn } from "./index-BsWH3eYA.js";
const _hoisted_1$1 = { key: 1 };
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "SettingsUsersRoleCell",
  props: {
    data: {},
    roles: {},
    actions: {}
  },
  emits: ["update:role"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const selectedRole = ref(props.data.role ?? ROLE.Default);
    const isEditable = computed(() => props.data.role !== ROLE.Owner);
    const roleLabel2 = computed(() => props.roles[selectedRole.value].label);
    const onActionSelect = (role) => {
      emit("update:role", {
        role,
        userId: props.data.id
      });
    };
    return (_ctx, _cache) => {
      const _component_N8nText = N8nText;
      const _component_ElRadio = resolveComponent("ElRadio");
      return openBlock(), createElementBlock("div", null, [
        isEditable.value ? (openBlock(), createBlock(unref(N8nActionDropdown), {
          key: 0,
          placement: "bottom-start",
          items: props.actions,
          "data-test-id": "user-role-dropdown",
          onSelect: onActionSelect
        }, {
          activator: withCtx(() => [
            createBaseVNode("button", {
              class: normalizeClass(_ctx.$style.roleLabel),
              type: "button"
            }, [
              createVNode(_component_N8nText, { color: "text-dark" }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(roleLabel2.value), 1)
                ]),
                _: 1
              }),
              createVNode(unref(N8nIcon), {
                color: "text-dark",
                icon: "chevron-down",
                size: "large"
              })
            ], 2)
          ]),
          menuItem: withCtx((item) => [
            item.id === "delete" ? (openBlock(), createBlock(_component_N8nText, {
              key: 0,
              color: "text-dark",
              class: normalizeClass(_ctx.$style.removeUser)
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(item.label), 1)
              ]),
              _: 2
            }, 1032, ["class"])) : (openBlock(), createBlock(_component_ElRadio, {
              key: 1,
              "model-value": selectedRole.value,
              label: item.id,
              "onUpdate:modelValue": ($event) => selectedRole.value = item.id
            }, {
              default: withCtx(() => [
                createBaseVNode("span", {
                  class: normalizeClass(_ctx.$style.radioLabel)
                }, [
                  createVNode(_component_N8nText, {
                    color: "text-dark",
                    class: "pb-3xs"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(item.label), 1)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(_component_N8nText, {
                    color: "text-dark",
                    size: "small"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(props.roles[item.id].desc), 1)
                    ]),
                    _: 2
                  }, 1024)
                ], 2)
              ]),
              _: 2
            }, 1032, ["model-value", "label", "onUpdate:modelValue"]))
          ]),
          _: 1
        }, 8, ["items"])) : (openBlock(), createElementBlock("span", _hoisted_1$1, toDisplayString(roleLabel2.value), 1))
      ]);
    };
  }
});
const roleLabel = "_roleLabel_xwvmw_123";
const radioLabel = "_radioLabel_xwvmw_133";
const removeUser = "_removeUser_xwvmw_143";
const style0$2 = {
  roleLabel,
  radioLabel,
  removeUser
};
const cssModules$2 = {
  "$style": style0$2
};
const SettingsUsersRoleCell = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__cssModules", cssModules$2]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "SettingsUsersProjectsCell",
  props: {
    data: {}
  },
  setup(__props) {
    const props = __props;
    const i18n = useI18n();
    const rolesAccessingAllProjects = ref([ROLE.Owner, ROLE.Admin]);
    const visibleProjectsNum = ref(2);
    const allProjects = computed(() => {
      if (props.data.role && rolesAccessingAllProjects.value.includes(props.data.role)) {
        return [i18n.baseText("settings.users.table.row.allProjects")];
      } else if (!props.data.projectRelations?.length) {
        return [i18n.baseText("settings.users.table.row.personalProject")];
      } else {
        return props.data.projectRelations.map(({ name }) => name);
      }
    });
    const projects2 = computed(() => ({
      visible: allProjects.value.slice(0, visibleProjectsNum.value),
      additional: allProjects.value.slice(visibleProjectsNum.value)
    }));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.projects)
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(projects2.value.visible, (project2, index) => {
          return openBlock(), createElementBlock(Fragment, { key: index }, [
            createBaseVNode("span", {
              class: normalizeClass(_ctx.$style.project)
            }, toDisplayString(project2), 3),
            index < projects2.value.visible.length - 1 ? (openBlock(), createElementBlock("span", {
              key: 0,
              class: normalizeClass(_ctx.$style.comma)
            }, ",", 2)) : createCommentVNode("", true)
          ], 64);
        }), 128)),
        projects2.value.additional.length > 0 ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: normalizeClass(_ctx.$style.comma)
        }, ",", 2)) : createCommentVNode("", true),
        projects2.value.additional.length > 0 ? (openBlock(), createBlock(unref(N8nTooltip), { key: 1 }, {
          content: withCtx(() => [
            createBaseVNode("ul", {
              class: normalizeClass(_ctx.$style.projectList)
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(projects2.value.additional, (project2, index) => {
                return openBlock(), createElementBlock("li", { key: index }, toDisplayString(project2), 1);
              }), 128))
            ], 2)
          ]),
          default: withCtx(() => [
            createBaseVNode("span", {
              class: normalizeClass(_ctx.$style.project)
            }, "+ " + toDisplayString(projects2.value.additional.length), 3)
          ]),
          _: 1
        })) : createCommentVNode("", true)
      ], 2);
    };
  }
});
const projects = "_projects_1clp6_123";
const project = "_project_1clp6_123";
const comma = "_comma_1clp6_138";
const projectList = "_projectList_1clp6_143";
const style0$1 = {
  projects,
  project,
  comma,
  projectList
};
const cssModules$1 = {
  "$style": style0$1
};
const SettingsUsersProjectsCell = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__cssModules", cssModules$1]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "SettingsUsersActionsCell",
  props: {
    data: {},
    actions: {}
  },
  emits: ["action"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const onUserAction = (action) => {
      emit("action", {
        action,
        userId: props.data.id
      });
    };
    return (_ctx, _cache) => {
      const _component_N8nActionToggle = N8nActionToggle;
      return openBlock(), createElementBlock("div", null, [
        !props.data.isOwner && props.data.signInType !== "ldap" && props.actions.length > 0 ? (openBlock(), createBlock(_component_N8nActionToggle, {
          key: 0,
          placement: "bottom",
          actions: props.actions,
          theme: "dark",
          onAction: onUserAction
        }, null, 8, ["actions"])) : createCommentVNode("", true)
      ]);
    };
  }
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "SettingsUsersLastActiveCell",
  props: {
    data: {}
  },
  setup(__props) {
    const i18n = useI18n();
    const props = __props;
    const formattedDate = computed(
      () => props.data.lastActiveAt ? formatTimeAgo(props.data.lastActiveAt) : i18n.baseText("generic.never")
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", null, toDisplayString(formattedDate.value), 1);
    };
  }
});
const _hoisted_1 = { class: "pt-xs pb-xs" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SettingsUsersTable",
  props: /* @__PURE__ */ mergeModels({
    data: {},
    actions: {},
    loading: { type: Boolean }
  }, {
    "tableOptions": {
      default: () => ({})
    },
    "tableOptionsModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["update:options", "update:role", "action"], ["update:tableOptions"]),
  setup(__props, { emit: __emit }) {
    const i18n = useI18n();
    const props = __props;
    const emit = __emit;
    const tableOptions = useModel(__props, "tableOptions");
    const rows = computed(() => props.data.items);
    const headers = ref([
      {
        title: i18n.baseText("settings.users.table.header.user"),
        key: "name",
        width: 400,
        value(row) {
          return {
            ...row,
            // TODO: Fix UsersInfoProps type, it should be aligned with the API response and implement 'isPending' instead of `isPendingUser`
            isPendingUser: row.isPending
          };
        }
      },
      {
        title: i18n.baseText("settings.users.table.header.accountType"),
        key: "role"
      },
      {
        title: i18n.baseText("settings.users.table.header.lastActive"),
        key: "lastActiveAt",
        value(row) {
          return {
            ...row,
            // TODO: Fix N8nDataTableServer so it doesn't break sorting when `value` is of mixed type (for example, string or null)
            lastActiveAt: row.lastActiveAt ?? ""
          };
        }
      },
      {
        title: i18n.baseText("settings.users.table.header.2fa"),
        key: "mfaEnabled",
        value(row) {
          return row.mfaEnabled ? i18n.baseText("settings.users.table.row.2fa.enabled") : i18n.baseText("settings.users.table.row.2fa.disabled");
        }
      },
      {
        title: i18n.baseText("projects.menu.title"),
        key: "projects",
        disableSort: true,
        // TODO: Fix TableHeader type so it allows `disableSort` without `value` (which is not used here)
        value() {
          return;
        }
      },
      {
        title: "",
        key: "actions",
        align: "end",
        width: 46,
        disableSort: true,
        // TODO: Fix TableHeader type so it allows `disableSort` without `value` (which is not used here)
        value() {
          return;
        }
      }
    ]);
    const roles = computed(() => ({
      [ROLE.Owner]: { label: i18n.baseText("auth.roles.owner"), desc: "" },
      [ROLE.Admin]: {
        label: i18n.baseText("auth.roles.admin"),
        desc: i18n.baseText("settings.users.table.row.role.description.admin")
      },
      [ROLE.Member]: {
        label: i18n.baseText("auth.roles.member"),
        desc: i18n.baseText("settings.users.table.row.role.description.member")
      },
      [ROLE.Default]: { label: i18n.baseText("auth.roles.default"), desc: "" }
    }));
    const roleActions = computed(() => [
      {
        id: ROLE.Member,
        label: i18n.baseText("auth.roles.member")
      },
      {
        id: ROLE.Admin,
        label: i18n.baseText("auth.roles.admin")
      },
      {
        id: "delete",
        label: i18n.baseText("settings.users.table.row.deleteUser"),
        divided: true
      }
    ]);
    const canUpdateRole = computed(() => {
      return hasPermission(["rbac"], { rbac: { scope: ["user:update", "user:changeRole"] } });
    });
    const filterActions = (user) => {
      if (user.isOwner) return [];
      return props.actions.filter(
        (action) => action.guard?.({ ...user, isPendingUser: user.isPending }) ?? true
      );
    };
    const onRoleChange = ({ role, userId }) => {
      if (role === "delete") {
        emit("action", { action: "delete", userId });
      } else {
        emit("update:role", { role, userId });
      }
    };
    return (_ctx, _cache) => {
      const _component_N8nText = N8nText;
      return openBlock(), createElementBlock("div", null, [
        createVNode(unref(N8nDataTableServer), {
          "sort-by": tableOptions.value.sortBy,
          "onUpdate:sortBy": _cache[1] || (_cache[1] = ($event) => tableOptions.value.sortBy = $event),
          page: tableOptions.value.page,
          "onUpdate:page": _cache[2] || (_cache[2] = ($event) => tableOptions.value.page = $event),
          "items-per-page": tableOptions.value.itemsPerPage,
          "onUpdate:itemsPerPage": _cache[3] || (_cache[3] = ($event) => tableOptions.value.itemsPerPage = $event),
          headers: headers.value,
          items: rows.value,
          "items-length": _ctx.data.count,
          "onUpdate:options": _cache[4] || (_cache[4] = ($event) => emit("update:options", $event))
        }, {
          [`item.name`]: withCtx(({ value }) => [
            createBaseVNode("div", _hoisted_1, [
              createVNode(unref(N8nUserInfo), normalizeProps(guardReactiveProps(value)), null, 16)
            ])
          ]),
          [`item.role`]: withCtx(({ item }) => [
            canUpdateRole.value ? (openBlock(), createBlock(SettingsUsersRoleCell, {
              key: 0,
              data: item,
              roles: roles.value,
              actions: roleActions.value,
              "onUpdate:role": onRoleChange
            }, null, 8, ["data", "roles", "actions"])) : (openBlock(), createBlock(_component_N8nText, {
              key: 1,
              color: "text-dark"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(roles.value[item.role ?? unref(ROLE).Default].label), 1)
              ]),
              _: 2
            }, 1024))
          ]),
          [`item.lastActiveAt`]: withCtx(({ item }) => [
            createVNode(_sfc_main$2, { data: item }, null, 8, ["data"])
          ]),
          [`item.projects`]: withCtx(({ item }) => [
            createVNode(SettingsUsersProjectsCell, { data: item }, null, 8, ["data"])
          ]),
          [`item.actions`]: withCtx(({ item }) => [
            createVNode(_sfc_main$3, {
              data: item,
              actions: filterActions(item),
              onAction: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("action", $event))
            }, null, 8, ["data", "actions"])
          ]),
          _: 2
        }, 1032, ["sort-by", "page", "items-per-page", "headers", "items", "items-length"])
      ]);
    };
  }
});
const tooltipKey = "settings.personal.mfa.enforce.unlicensed_tooltip";
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
    const search2 = ref("");
    const usersTableState = ref({
      page: 0,
      itemsPerPage: 10,
      sortBy: [
        { id: "firstName", desc: false },
        { id: "lastName", desc: false },
        { id: "email", desc: false }
      ]
    });
    const showUMSetupWarning = computed(() => hasPermission(["defaultUser"]));
    const isEnforceMFAEnabled = computed(
      () => settingsStore.isEnterpriseFeatureEnabled[EnterpriseEditionFeature.EnforceMFA]
    );
    onMounted(async () => {
      documentTitle.set(i18n.baseText("settings.users"));
      if (!showUMSetupWarning.value) {
        await updateUsersTableData(usersTableState.value);
      }
    });
    const usersListActions = computed(() => {
      return [
        {
          label: i18n.baseText("settings.users.actions.copyInviteLink"),
          value: "copyInviteLink",
          guard: (user) => usersStore.usersLimitNotReached && !user.firstName && !!user.inviteAcceptUrl
        },
        {
          label: i18n.baseText("settings.users.actions.reinvite"),
          value: "reinvite",
          guard: (user) => usersStore.usersLimitNotReached && !user.firstName && settingsStore.isSmtpSetup
        },
        {
          label: i18n.baseText("settings.users.actions.copyPasswordResetLink"),
          value: "copyPasswordResetLink",
          guard: (user) => hasPermission(["rbac"], { rbac: { scope: "user:resetPassword" } }) && usersStore.usersLimitNotReached && !user.isPendingUser && user.id !== usersStore.currentUserId
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
    const isAdvancedPermissionsEnabled = computed(
      () => settingsStore.isEnterpriseFeatureEnabled[EnterpriseEditionFeature.AdvancedPermissions]
    );
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
      uiStore.openModalWithData({
        name: INVITE_USER_MODAL_KEY,
        data: {
          afterInvite: async () => {
            await updateUsersTableData(usersTableState.value);
          }
        }
      });
    }
    async function onDelete(userId) {
      uiStore.openModalWithData({
        name: DELETE_USER_MODAL_KEY,
        data: {
          userId,
          afterDelete: async () => {
            await updateUsersTableData(usersTableState.value);
          }
        }
      });
    }
    async function onReinvite(userId) {
      try {
        const user = usersStore.usersList.state.items.find((u) => u.id === userId);
        if (user?.email && user?.role) {
          if (!["global:admin", "global:member"].includes(user.role)) {
            throw new Error("Invalid role name on reinvite");
          }
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
        }
      } catch (e) {
        showError(e, i18n.baseText("settings.users.userReinviteError"));
      }
    }
    async function onCopyInviteLink(userId) {
      const user = usersStore.usersList.state.items.find((u) => u.id === userId);
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
      try {
        const user = usersStore.usersList.state.items.find((u) => u.id === userId);
        if (user) {
          const url = await usersStore.getUserPasswordResetLink(user);
          void clipboard.copy(url.link);
          showToast({
            type: "success",
            title: i18n.baseText("settings.users.passwordResetUrlCreated"),
            message: i18n.baseText("settings.users.passwordResetUrlCreated.message")
          });
        }
      } catch (error) {
        showError(error, i18n.baseText("settings.users.passwordResetLinkError"));
      }
    }
    async function onAllowSSOManualLogin(userId) {
      const user = usersStore.usersList.state.items.find((u) => u.id === userId);
      if (user) {
        if (!user.settings) {
          user.settings = {};
        }
        user.settings.allowSSOManualLogin = true;
        await usersStore.updateOtherUserSettings(userId, user.settings);
        await updateUsersTableData(usersTableState.value);
        showToast({
          type: "success",
          title: i18n.baseText("settings.users.allowSSOManualLogin"),
          message: i18n.baseText("settings.users.allowSSOManualLogin.message")
        });
      }
    }
    async function onDisallowSSOManualLogin(userId) {
      const user = usersStore.usersList.state.items.find((u) => u.id === userId);
      if (user?.settings) {
        user.settings.allowSSOManualLogin = false;
        await usersStore.updateOtherUserSettings(userId, user.settings);
        await updateUsersTableData(usersTableState.value);
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
    const onUpdateRole = async (payload) => {
      const user = usersStore.usersList.state.items.find((u) => u.id === payload.userId);
      if (!user) {
        showError(new Error("User not found"), i18n.baseText("settings.users.userNotFound"));
        return;
      }
      await onRoleChange(user, payload.role);
    };
    async function onRoleChange(user, newRoleName) {
      try {
        await usersStore.updateGlobalRole({ id: user.id, newRoleName });
        const role = userRoles.value.find(({ value }) => value === newRoleName)?.label || newRoleName;
        showToast({
          type: "success",
          title: i18n.baseText("settings.users.userRoleUpdated"),
          message: i18n.baseText("settings.users.userRoleUpdated.message", {
            interpolate: {
              user: user.firstName && user.lastName ? `${user.firstName} ${user.lastName}` : user.email ?? "",
              role
            }
          })
        });
      } catch (e) {
        showError(e, i18n.baseText("settings.users.userReinviteError"));
      }
    }
    const isValidSortKey = (key) => USERS_LIST_SORT_OPTIONS.includes(key);
    const updateUsersTableData = async ({ page, itemsPerPage, sortBy }) => {
      try {
        usersTableState.value = {
          page,
          itemsPerPage,
          sortBy
        };
        const skip = page * itemsPerPage;
        const take = itemsPerPage;
        const transformedSortBy = sortBy.flatMap(({ id, desc }) => {
          const dir = desc ? "desc" : "asc";
          if (id === "name") {
            return [`firstName:${dir}`, `lastName:${dir}`, `email:${dir}`];
          }
          return `${id}:${dir}`;
        }).filter(isValidSortKey);
        await usersStore.usersList.execute(0, {
          skip,
          take,
          sortBy: transformedSortBy,
          expand: ["projectRelations"],
          filter: {
            fullText: search2.value.trim()
          }
        });
      } catch (error) {
        showError(error, i18n.baseText("settings.users.table.update.error"));
      }
    };
    const debouncedUpdateUsersTableData = useDebounceFn(() => {
      usersTableState.value.page = 0;
      void updateUsersTableData(usersTableState.value);
    }, 300);
    const onSearch = (value) => {
      search2.value = value;
      void debouncedUpdateUsersTableData();
    };
    async function onUpdateMfaEnforced(value) {
      try {
        await usersStore.updateEnforceMfa(value);
        showToast({
          type: "success",
          title: value ? i18n.baseText("settings.personal.mfa.enforce.enabled.title") : i18n.baseText("settings.personal.mfa.enforce.disabled.title"),
          message: value ? i18n.baseText("settings.personal.mfa.enforce.enabled.message") : i18n.baseText("settings.personal.mfa.enforce.disabled.message")
        });
      } catch (error) {
        showError(error, i18n.baseText("settings.personal.mfa.enforce.error"));
      }
    }
    return (_ctx, _cache) => {
      const _component_N8nText = N8nText;
      const _component_N8nHeading = N8nHeading;
      const _component_N8nActionBox = N8nActionBox;
      const _component_N8nLink = N8nLink;
      const _component_N8nNotice = N8nNotice;
      const _component_N8nBadge = N8nBadge;
      const _component_el_switch = resolveComponent("el-switch");
      const _component_N8nTooltip = N8nTooltip;
      const _component_EnterpriseEdition = resolveComponent("EnterpriseEdition");
      const _component_N8nIcon = N8nIcon;
      const _component_N8nInput = N8nInput;
      const _component_N8nButton = N8nButton;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.container)
      }, [
        createVNode(_component_N8nHeading, {
          tag: "h1",
          size: "2xlarge",
          class: "mb-xl"
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(unref(i18n).baseText("settings.users")) + " ", 1),
            !showUMSetupWarning.value ? (openBlock(), createBlock(_component_N8nText, {
              key: 0,
              class: normalizeClass(_ctx.$style.userCount),
              color: "text-light"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n).baseText("settings.users.count", {
                  interpolate: {
                    count: unref(usersStore).usersList.state.count
                  },
                  adjustToNumber: unref(usersStore).usersList.state.count
                })), 1)
              ]),
              _: 1
            }, 8, ["class"])) : createCommentVNode("", true)
          ]),
          _: 1
        }),
        !unref(usersStore).usersLimitNotReached ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(_ctx.$style.setupInfoContainer)
        }, [
          createVNode(_component_N8nActionBox, {
            heading: unref(i18n).baseText(unref(uiStore).contextBasedTranslationKeys.users.settings.unavailable.title),
            description: unref(i18n).baseText(unref(uiStore).contextBasedTranslationKeys.users.settings.unavailable.description),
            "button-text": unref(i18n).baseText(unref(uiStore).contextBasedTranslationKeys.users.settings.unavailable.button),
            "onClick:button": goToUpgrade
          }, null, 8, ["heading", "description", "button-text"])
        ], 2)) : createCommentVNode("", true),
        !isAdvancedPermissionsEnabled.value ? (openBlock(), createBlock(_component_N8nNotice, { key: 1 }, {
          default: withCtx(() => [
            createVNode(unref(I18nT), {
              keypath: "settings.users.advancedPermissions.warning",
              scope: "global"
            }, {
              link: withCtx(() => [
                createVNode(_component_N8nLink, {
                  "data-test-id": "upgrade-permissions-link",
                  size: "small",
                  onClick: goToUpgradeAdvancedPermissions
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(i18n).baseText("generic.upgrade")), 1)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        })) : createCommentVNode("", true),
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.settingsContainer)
        }, [
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.settingsContainerInfo)
          }, [
            createVNode(_component_N8nText, { bold: true }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n).baseText("settings.personal.mfa.enforce.title")) + " ", 1),
                !isEnforceMFAEnabled.value ? (openBlock(), createBlock(_component_N8nBadge, {
                  key: 0,
                  class: "ml-4xs"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(i18n).baseText("generic.upgrade")), 1)
                  ]),
                  _: 1
                })) : createCommentVNode("", true)
              ]),
              _: 1
            }),
            createVNode(_component_N8nText, {
              size: "small",
              color: "text-light"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(i18n).baseText("settings.personal.mfa.enforce.message")), 1)
              ]),
              _: 1
            })
          ], 2),
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.settingsContainerAction)
          }, [
            createVNode(_component_EnterpriseEdition, {
              features: [unref(EnterpriseEditionFeature).EnforceMFA]
            }, {
              fallback: withCtx(() => [
                createVNode(_component_N8nTooltip, null, {
                  content: withCtx(() => [
                    createVNode(unref(I18nT), {
                      keypath: tooltipKey,
                      tag: "span",
                      scope: "global"
                    }, {
                      action: withCtx(() => [
                        createBaseVNode("a", { onClick: goToUpgrade }, toDisplayString(unref(i18n).baseText("settings.personal.mfa.enforce.unlicensed_tooltip.link")), 1)
                      ]),
                      _: 1
                    })
                  ]),
                  default: withCtx(() => [
                    createVNode(_component_el_switch, {
                      "model-value": unref(settingsStore).isMFAEnforced,
                      size: "large",
                      disabled: true
                    }, null, 8, ["model-value"])
                  ]),
                  _: 1
                })
              ]),
              default: withCtx(() => [
                createVNode(_component_el_switch, {
                  "model-value": unref(settingsStore).isMFAEnforced,
                  size: "large",
                  "data-test-id": "enable-force-mfa",
                  "onUpdate:modelValue": onUpdateMfaEnforced
                }, null, 8, ["model-value"])
              ]),
              _: 1
            }, 8, ["features"])
          ], 2)
        ], 2),
        !showUMSetupWarning.value ? (openBlock(), createElementBlock("div", {
          key: 2,
          class: normalizeClass(_ctx.$style.buttonContainer)
        }, [
          createVNode(_component_N8nInput, {
            class: normalizeClass(_ctx.$style.search),
            "model-value": search2.value,
            placeholder: unref(i18n).baseText("settings.users.search.placeholder"),
            clearable: "",
            "data-test-id": "users-list-search",
            "onUpdate:modelValue": onSearch
          }, {
            prefix: withCtx(() => [
              createVNode(_component_N8nIcon, { icon: "search" })
            ]),
            _: 1
          }, 8, ["class", "model-value", "placeholder"]),
          createVNode(_component_N8nTooltip, {
            disabled: !unref(ssoStore).isSamlLoginEnabled
          }, {
            content: withCtx(() => [
              createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("settings.users.invite.tooltip")), 1)
            ]),
            default: withCtx(() => [
              createBaseVNode("div", null, [
                createVNode(_component_N8nButton, {
                  disabled: unref(ssoStore).isSamlLoginEnabled || !unref(usersStore).usersLimitNotReached,
                  label: unref(i18n).baseText("settings.users.invite"),
                  size: "large",
                  "data-test-id": "settings-users-invite-button",
                  onClick: onInvite
                }, null, 8, ["disabled", "label"])
              ])
            ]),
            _: 1
          }, 8, ["disabled"])
        ], 2)) : createCommentVNode("", true),
        unref(usersStore).usersLimitNotReached || unref(usersStore).usersList.state.count > 1 ? (openBlock(), createElementBlock("div", {
          key: 3,
          class: normalizeClass(_ctx.$style.usersContainer)
        }, [
          createVNode(_sfc_main$1, {
            "table-options": usersTableState.value,
            "onUpdate:tableOptions": _cache[0] || (_cache[0] = ($event) => usersTableState.value = $event),
            "data-test-id": "settings-users-table",
            data: unref(usersStore).usersList.state,
            loading: unref(usersStore).usersList.isLoading,
            actions: usersListActions.value,
            "onUpdate:options": updateUsersTableData,
            "onUpdate:role": onUpdateRole,
            onAction: onUsersListAction
          }, null, 8, ["table-options", "data", "loading", "actions"])
        ], 2)) : createCommentVNode("", true)
      ], 2);
    };
  }
});
const userCount = "_userCount_1tyt1_123";
const buttonContainer = "_buttonContainer_1tyt1_128";
const search = "_search_1tyt1_135";
const setupInfoContainer = "_setupInfoContainer_1tyt1_139";
const settingsContainer = "_settingsContainer_1tyt1_143";
const settingsContainerInfo = "_settingsContainerInfo_1tyt1_154";
const settingsContainerAction = "_settingsContainerAction_1tyt1_163";
const container = "_container_1tyt1_171";
const style0 = {
  userCount,
  buttonContainer,
  search,
  setupInfoContainer,
  settingsContainer,
  settingsContainerInfo,
  settingsContainerAction,
  container
};
const cssModules = {
  "$style": style0
};
const SettingsUsersView = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);
export {
  SettingsUsersView as default
};
