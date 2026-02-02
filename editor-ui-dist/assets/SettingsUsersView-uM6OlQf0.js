import { o as __toESM } from "./chunk-r2Y0G7H8.js";
import { C as computed, Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, Gt as unref, I as guardReactiveProps, It as ref, M as createVNode, P as defineComponent, T as createBlock, U as mergeModels, Z as onMounted, _ as Fragment, bt as withCtx, et as openBlock, ft as useModel, it as renderList, j as createTextVNode, vn as normalizeClass, w as createBaseVNode, yn as normalizeProps } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { bt as I18nT, ot as useDebounceFn, yt as useI18n } from "./_MapCache-8-eqnC2S.js";
import { At as N8nLink_default, B as N8nNotice_default, Bi as N8nButton_default, E as N8nUserInfo_default, Hi as N8nIcon_default, Ht as N8nTooltip_default, Kt as N8nInput_default, Li as N8nHeading_default, Mi as N8nActionBox_default, St as N8nActionDropdown_default, Tt as N8nBadge_default, Xt as ElSwitch, bt as N8nActionToggle_default, d as N8nDataTableServer_default, zi as N8nText_default } from "./src-Cq27d_Gp.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-DjneYy0u.js";
import { $a as DELETE_USER_MODAL_KEY, Er as usePostHog, ar as hasPermission, cn as useDocumentTitle, fs as useSettingsStore, go as INVITE_USER_MODAL_KEY, hr as useToast, r as useUIStore, t as useUsersStore, xr as useMessage } from "./users.store-qBZsmf9-.js";
import { t as ElRadio } from "./radio-BHS_2JGO.js";
import { t as Alert_default } from "./Alert-BA2OIoCc.js";
import { Fc as DEBOUNCE_TIME, Mc as EnterpriseEditionFeature, Oc as TAMPER_PROOF_INVITE_LINKS, Qr as ROLE, Uc as getDebounceTime, ci as USERS_LIST_SORT_OPTIONS, hs as MODAL_CONFIRM } from "./constants-Cyrg9Nbl.js";
import "./merge-O0QrB7po.js";
import "./_baseOrderBy-3Uh8XZv3.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-DmlUcXhA.js";
import "./versions.store-YehYbHFz.js";
import { t as usePageRedirectionHelper } from "./usePageRedirectionHelper-DjPq0E7w.js";
import { t as useClipboard } from "./useClipboard-D9AU0bV9.js";
import { r as formatTimeAgo } from "./dateFormatter-C2jhIUgb.js";
import { t as EnterpriseEdition_ee_default } from "./EnterpriseEdition.ee-BtSNB8sY.js";
import { n as useSSOStore } from "./sso.store-BdPWgyOO.js";
import { t as useUserRoleProvisioningStore } from "./userRoleProvisioning.store-DotpqtCK.js";
var _hoisted_1$1 = { key: 1 };
var SettingsUsersRoleCell_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
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
		const roleLabel$1 = computed(() => props.roles[selectedRole.value]?.label);
		const onActionSelect = (role) => {
			emit("update:role", {
				role,
				userId: props.data.id
			});
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [isEditable.value ? (openBlock(), createBlock(unref(N8nActionDropdown_default), {
				key: 0,
				placement: "bottom-start",
				items: props.actions,
				"data-test-id": "user-role-dropdown",
				onSelect: onActionSelect
			}, {
				activator: withCtx(() => [createBaseVNode("button", {
					class: normalizeClass(_ctx.$style.roleLabel),
					type: "button"
				}, [createVNode(unref(N8nText_default), { color: "text-dark" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(roleLabel$1.value), 1)]),
					_: 1
				}), createVNode(unref(N8nIcon_default), {
					color: "text-dark",
					icon: "chevron-down",
					size: "large"
				})], 2)]),
				menuItem: withCtx((item) => [createVNode(unref(ElRadio), {
					"model-value": selectedRole.value,
					label: item.id,
					"onUpdate:modelValue": ($event) => selectedRole.value = item.id
				}, {
					default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.radioLabel) }, [createVNode(unref(N8nText_default), {
						color: "text-dark",
						class: "pb-3xs"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(item.label), 1)]),
						_: 2
					}, 1024), createVNode(unref(N8nText_default), {
						color: "text-dark",
						size: "small"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(props.roles[item.id]?.desc), 1)]),
						_: 2
					}, 1024)], 2)]),
					_: 2
				}, 1032, [
					"model-value",
					"label",
					"onUpdate:modelValue"
				])]),
				_: 1
			}, 8, ["items"])) : (openBlock(), createElementBlock("span", _hoisted_1$1, toDisplayString(roleLabel$1.value), 1))]);
		};
	}
});
var SettingsUsersRoleCell_vue_vue_type_style_index_0_lang_module_default = {
	roleLabel: "_roleLabel_18lcu_125",
	radioLabel: "_radioLabel_18lcu_135",
	removeUser: "_removeUser_18lcu_145"
};
var SettingsUsersRoleCell_default = /* @__PURE__ */ __plugin_vue_export_helper_default(SettingsUsersRoleCell_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SettingsUsersRoleCell_vue_vue_type_style_index_0_lang_module_default }]]);
var SettingsUsersProjectsCell_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SettingsUsersProjectsCell",
	props: { data: {} },
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const rolesAccessingAllProjects = ref([ROLE.Owner, ROLE.Admin]);
		const visibleProjectsNum = ref(2);
		const allProjects = computed(() => {
			if (props.data.role && rolesAccessingAllProjects.value.includes(props.data.role)) return [i18n.baseText("settings.users.table.row.allProjects")];
			else if (!props.data.projectRelations?.length) return [i18n.baseText("settings.users.table.row.personalProject")];
			else return props.data.projectRelations.map(({ name }) => name);
		});
		const projects$1 = computed(() => ({
			visible: allProjects.value.slice(0, visibleProjectsNum.value),
			additional: allProjects.value.slice(visibleProjectsNum.value)
		}));
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.projects) }, [
				(openBlock(true), createElementBlock(Fragment, null, renderList(projects$1.value.visible, (project$1, index) => {
					return openBlock(), createElementBlock(Fragment, { key: index }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.project) }, toDisplayString(project$1), 3), index < projects$1.value.visible.length - 1 ? (openBlock(), createElementBlock("span", {
						key: 0,
						class: normalizeClass(_ctx.$style.comma)
					}, ",", 2)) : createCommentVNode("", true)], 64);
				}), 128)),
				projects$1.value.additional.length > 0 ? (openBlock(), createElementBlock("span", {
					key: 0,
					class: normalizeClass(_ctx.$style.comma)
				}, ",", 2)) : createCommentVNode("", true),
				projects$1.value.additional.length > 0 ? (openBlock(), createBlock(unref(N8nTooltip_default), { key: 1 }, {
					content: withCtx(() => [createBaseVNode("ul", { class: normalizeClass(_ctx.$style.projectList) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(projects$1.value.additional, (project$1, index) => {
						return openBlock(), createElementBlock("li", { key: index }, toDisplayString(project$1), 1);
					}), 128))], 2)]),
					default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.project) }, "+ " + toDisplayString(projects$1.value.additional.length), 3)]),
					_: 1
				})) : createCommentVNode("", true)
			], 2);
		};
	}
});
var SettingsUsersProjectsCell_vue_vue_type_style_index_0_lang_module_default = {
	projects: "_projects_1ynwg_125",
	project: "_project_1ynwg_125",
	comma: "_comma_1ynwg_140",
	projectList: "_projectList_1ynwg_145"
};
var SettingsUsersProjectsCell_default = /* @__PURE__ */ __plugin_vue_export_helper_default(SettingsUsersProjectsCell_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SettingsUsersProjectsCell_vue_vue_type_style_index_0_lang_module_default }]]);
var SettingsUsersActionsCell_default = /* @__PURE__ */ defineComponent({
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
			return openBlock(), createElementBlock("div", null, [props.data.signInType !== "ldap" && props.actions.length > 0 ? (openBlock(), createBlock(unref(N8nActionToggle_default), {
				key: 0,
				placement: "bottom",
				actions: props.actions,
				theme: "dark",
				onAction: onUserAction
			}, null, 8, ["actions"])) : createCommentVNode("", true)]);
		};
	}
});
var SettingsUsersLastActiveCell_default = /* @__PURE__ */ defineComponent({
	__name: "SettingsUsersLastActiveCell",
	props: { data: {} },
	setup(__props) {
		const i18n = useI18n();
		const props = __props;
		const formattedDate = computed(() => props.data.lastActiveAt ? formatTimeAgo(props.data.lastActiveAt) : i18n.baseText("generic.never"));
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("span", null, toDisplayString(formattedDate.value), 1);
		};
	}
});
var _hoisted_1 = { class: "pt-xs pb-xs" };
var SettingsUsersTable_default = /* @__PURE__ */ defineComponent({
	__name: "SettingsUsersTable",
	props: /* @__PURE__ */ mergeModels({
		data: {},
		actions: {},
		loading: { type: Boolean },
		canEditRole: { type: Boolean }
	}, {
		"tableOptions": { default: () => ({}) },
		"tableOptionsModifiers": {}
	}),
	emits: /* @__PURE__ */ mergeModels([
		"update:options",
		"update:role",
		"action"
	], ["update:tableOptions"]),
	setup(__props, { emit: __emit }) {
		const i18n = useI18n();
		const settingsStore = useSettingsStore();
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
				value() {}
			},
			{
				title: "",
				key: "actions",
				align: "end",
				width: 46,
				disableSort: true,
				value() {}
			}
		]);
		const roles = computed(() => ({
			[ROLE.Owner]: {
				label: i18n.baseText("auth.roles.owner"),
				desc: ""
			},
			[ROLE.Admin]: {
				label: i18n.baseText("auth.roles.admin"),
				desc: i18n.baseText("settings.users.table.row.role.description.admin")
			},
			[ROLE.Member]: {
				label: i18n.baseText("auth.roles.member"),
				desc: i18n.baseText("settings.users.table.row.role.description.member")
			},
			...settingsStore.isChatFeatureEnabled && { [ROLE.ChatUser]: {
				label: i18n.baseText("auth.roles.chatUser"),
				desc: i18n.baseText("settings.users.table.row.role.description.chatUser")
			} },
			[ROLE.Default]: {
				label: i18n.baseText("auth.roles.default"),
				desc: ""
			}
		}));
		const roleActions = computed(() => [
			{
				id: ROLE.Member,
				label: i18n.baseText("auth.roles.member")
			},
			...settingsStore.isChatFeatureEnabled ? [{
				id: ROLE.ChatUser,
				label: i18n.baseText("auth.roles.chatUser")
			}] : [],
			{
				id: ROLE.Admin,
				label: i18n.baseText("auth.roles.admin")
			}
		]);
		const canUpdateRole = computed(() => {
			if (!hasPermission(["rbac"], { rbac: { scope: ["user:update", "user:changeRole"] } })) return false;
			if (!props.canEditRole) return false;
			return true;
		});
		const filterActions = (user) => {
			if (user.isOwner) return [];
			return props.actions.filter((action) => action.guard?.({
				...user,
				isPendingUser: user.isPending
			}) ?? true);
		};
		const onRoleChange = ({ role, userId }) => {
			emit("update:role", {
				role,
				userId
			});
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [createVNode(unref(N8nDataTableServer_default), {
				"sort-by": tableOptions.value.sortBy,
				"onUpdate:sortBy": _cache[1] || (_cache[1] = ($event) => tableOptions.value.sortBy = $event),
				page: tableOptions.value.page,
				"onUpdate:page": _cache[2] || (_cache[2] = ($event) => tableOptions.value.page = $event),
				"items-per-page": tableOptions.value.itemsPerPage,
				"onUpdate:itemsPerPage": _cache[3] || (_cache[3] = ($event) => tableOptions.value.itemsPerPage = $event),
				headers: headers.value,
				items: rows.value,
				"items-length": __props.data.count,
				"page-sizes": [
					10,
					25,
					50
				],
				"onUpdate:options": _cache[4] || (_cache[4] = ($event) => emit("update:options", $event))
			}, {
				[`item.name`]: withCtx(({ value }) => [createBaseVNode("div", _hoisted_1, [createVNode(unref(N8nUserInfo_default), normalizeProps(guardReactiveProps(value)), null, 16)])]),
				[`item.role`]: withCtx(({ item }) => [canUpdateRole.value ? (openBlock(), createBlock(SettingsUsersRoleCell_default, {
					key: 0,
					data: item,
					roles: roles.value,
					actions: roleActions.value,
					"onUpdate:role": onRoleChange
				}, null, 8, [
					"data",
					"roles",
					"actions"
				])) : (openBlock(), createBlock(unref(N8nText_default), {
					key: 1,
					color: "text-dark"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(roles.value[item.role ?? unref(ROLE).Default]?.label), 1)]),
					_: 2
				}, 1024))]),
				[`item.lastActiveAt`]: withCtx(({ item }) => [createVNode(SettingsUsersLastActiveCell_default, { data: item }, null, 8, ["data"])]),
				[`item.projects`]: withCtx(({ item }) => [createVNode(SettingsUsersProjectsCell_default, { data: item }, null, 8, ["data"])]),
				[`item.actions`]: withCtx(({ item }) => [createVNode(SettingsUsersActionsCell_default, {
					data: item,
					actions: filterActions(item),
					onAction: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("action", $event))
				}, null, 8, ["data", "actions"])]),
				_: 2
			}, 1032, [
				"sort-by",
				"page",
				"items-per-page",
				"headers",
				"items",
				"items-length"
			])]);
		};
	}
});
var tooltipKey = "settings.personal.mfa.enforce.unlicensed_tooltip";
var SettingsUsersView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "SettingsUsersView",
	setup(__props) {
		const clipboard = useClipboard();
		const { showToast, showError } = useToast();
		const message = useMessage();
		const settingsStore = useSettingsStore();
		const uiStore = useUIStore();
		const usersStore = useUsersStore();
		const ssoStore = useSSOStore();
		const documentTitle = useDocumentTitle();
		const pageRedirectionHelper = usePageRedirectionHelper();
		const userRoleProvisioningStore = useUserRoleProvisioningStore();
		const postHog = usePostHog();
		const i18n = useI18n();
		const search$1 = ref("");
		const usersTableState = ref({
			page: 0,
			itemsPerPage: 10,
			sortBy: [
				{
					id: "firstName",
					desc: false
				},
				{
					id: "lastName",
					desc: false
				},
				{
					id: "email",
					desc: false
				}
			]
		});
		const showUMSetupWarning = computed(() => hasPermission(["defaultUser"]));
		const isEnforceMFAEnabled = computed(() => settingsStore.isEnterpriseFeatureEnabled[EnterpriseEditionFeature.EnforceMFA]);
		const isInstanceRoleProvisioningEnabled = computed(() => userRoleProvisioningStore.provisioningConfig?.scopesProvisionInstanceRole || false);
		const isTamperProofInviteLinksEnabled = computed(() => postHog.isVariantEnabled(TAMPER_PROOF_INVITE_LINKS.name, TAMPER_PROOF_INVITE_LINKS.variant));
		onMounted(async () => {
			documentTitle.set(i18n.baseText("settings.users"));
			if (!showUMSetupWarning.value) await updateUsersTableData(usersTableState.value);
			await userRoleProvisioningStore.getProvisioningConfig();
		});
		const usersListActions = computed(() => {
			return [
				{
					label: i18n.baseText("settings.users.actions.generateInviteLink"),
					value: "generateInviteLink",
					guard: (user) => isTamperProofInviteLinksEnabled.value && hasPermission(["rbac"], { rbac: { scope: "user:generateInviteLink" } }) && usersStore.usersLimitNotReached && user.id !== usersStore.currentUserId && !user.firstName
				},
				{
					label: i18n.baseText("settings.users.actions.copyInviteLink"),
					value: "copyInviteLink",
					guard: (user) => !isTamperProofInviteLinksEnabled.value && usersStore.usersLimitNotReached && !user.firstName && !!user.inviteAcceptUrl
				},
				{
					label: i18n.baseText("settings.users.actions.reinvite"),
					value: "reinvite",
					guard: (user) => usersStore.usersLimitNotReached && !user.firstName && settingsStore.isSmtpSetup
				},
				{
					label: i18n.baseText("settings.users.actions.delete"),
					value: "delete",
					guard: (user) => hasPermission(["rbac"], { rbac: { scope: "user:delete" } }) && user.id !== usersStore.currentUserId
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
		const isAdvancedPermissionsEnabled = computed(() => settingsStore.isEnterpriseFeatureEnabled[EnterpriseEditionFeature.AdvancedPermissions]);
		const userRoles = computed(() => {
			return [
				{
					value: ROLE.Member,
					label: i18n.baseText("auth.roles.member")
				},
				{
					value: ROLE.ChatUser,
					label: i18n.baseText("auth.roles.chatUser"),
					disabled: !isAdvancedPermissionsEnabled.value
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
				case "generateInviteLink":
					await onGenerateInviteLink(userId);
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
				data: { afterInvite: async () => {
					await updateUsersTableData(usersTableState.value);
				} }
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
					if (!["global:admin", "global:member"].includes(user.role)) throw new Error("Invalid role name on reinvite");
					await usersStore.reinviteUser({
						email: user.email,
						role: user.role
					});
					showToast({
						type: "success",
						title: i18n.baseText("settings.users.inviteResent"),
						message: i18n.baseText("settings.users.emailSentTo", { interpolate: { email: user.email ?? "" } })
					});
				}
			} catch (e) {
				showError(e, i18n.baseText("settings.users.userReinviteError"));
			}
		}
		async function onCopyInviteLink(userId) {
			const user = usersStore.usersList.state.items.find((u) => u.id === userId);
			if (user?.inviteAcceptUrl) {
				clipboard.copy(user.inviteAcceptUrl);
				showToast({
					type: "success",
					title: i18n.baseText("settings.users.inviteUrlCreated"),
					message: i18n.baseText("settings.users.inviteUrlCreated.message")
				});
			}
		}
		async function onGenerateInviteLink(userId) {
			try {
				if (usersStore.usersList.state.items.find((u) => u.id === userId)) {
					const url = await usersStore.generateInviteLink({ id: userId });
					clipboard.copy(url.link);
					showToast({
						type: "success",
						title: i18n.baseText("settings.users.inviteUrlCreated"),
						message: i18n.baseText("settings.users.inviteUrlCreated.message")
					});
				}
			} catch (error) {
				showError(error, i18n.baseText("settings.users.inviteLinkError"));
			}
		}
		async function onCopyPasswordResetLink(userId) {
			try {
				const user = usersStore.usersList.state.items.find((u) => u.id === userId);
				if (user) {
					const url = await usersStore.getUserPasswordResetLink(user);
					clipboard.copy(url.link);
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
				if (!user.settings) user.settings = {};
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
			pageRedirectionHelper.goToUpgrade("settings-users", "upgrade-users");
		}
		function goToUpgradeAdvancedPermissions() {
			pageRedirectionHelper.goToUpgrade("settings-users", "upgrade-advanced-permissions");
		}
		const onUpdateRole = async (payload) => {
			const user = usersStore.usersList.state.items.find((u) => u.id === payload.userId);
			if (!user) {
				showError(/* @__PURE__ */ new Error("User not found"), i18n.baseText("settings.users.userNotFound"));
				return;
			}
			await onRoleChange(user, payload.role);
		};
		async function onRoleChange(user, newRoleName) {
			if (newRoleName === user.role) return;
			const name = user.firstName && user.lastName ? `${user.firstName} ${user.lastName}` : user.email ?? "";
			const role = userRoles.value.find(({ value }) => value === newRoleName)?.label ?? newRoleName;
			if (newRoleName === ROLE.ChatUser) {
				if (await message.confirm(i18n.baseText("settings.users.userRoleUpdated.confirm.message", { interpolate: { role } }), i18n.baseText("settings.users.userRoleUpdated.confirm.title", { interpolate: { user: name } }), {
					confirmButtonText: i18n.baseText("settings.users.userRoleUpdated.confirm.button"),
					cancelButtonText: i18n.baseText("settings.users.userRoleUpdated.cancel.button")
				}) !== "confirm") return;
			}
			try {
				await usersStore.updateGlobalRole({
					id: user.id,
					newRoleName
				});
				showToast({
					type: "success",
					title: i18n.baseText("settings.users.userRoleUpdated"),
					message: i18n.baseText("settings.users.userRoleUpdated.message", { interpolate: {
						user: name,
						role
					} })
				});
			} catch (e) {
				showError(e, i18n.baseText("settings.users.userRoleUpdatedError"));
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
					if (id === "name") return [
						`firstName:${dir}`,
						`lastName:${dir}`,
						`email:${dir}`
					];
					return `${id}:${dir}`;
				}).filter(isValidSortKey);
				await usersStore.usersList.execute(0, {
					skip,
					take,
					sortBy: transformedSortBy,
					expand: ["projectRelations"],
					filter: { fullText: search$1.value.trim() }
				});
			} catch (error) {
				showError(error, i18n.baseText("settings.users.table.update.error"));
			}
		};
		const debouncedUpdateUsersTableData = useDebounceFn(() => {
			usersTableState.value.page = 0;
			updateUsersTableData(usersTableState.value);
		}, getDebounceTime(DEBOUNCE_TIME.INPUT.SEARCH));
		const onSearch = (value) => {
			search$1.value = value;
			debouncedUpdateUsersTableData();
		};
		async function onUpdateMfaEnforced(value) {
			const boolValue = typeof value === "boolean" ? value : Boolean(value);
			try {
				await usersStore.updateEnforceMfa(boolValue);
				showToast({
					type: "success",
					title: boolValue ? i18n.baseText("settings.personal.mfa.enforce.enabled.title") : i18n.baseText("settings.personal.mfa.enforce.disabled.title"),
					message: boolValue ? i18n.baseText("settings.personal.mfa.enforce.enabled.message") : i18n.baseText("settings.personal.mfa.enforce.disabled.message")
				});
			} catch (error) {
				showError(error, i18n.baseText("settings.personal.mfa.enforce.error"));
			}
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [
				createVNode(unref(N8nHeading_default), {
					tag: "h1",
					size: "2xlarge",
					class: "mb-xl"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.users")) + " ", 1), !showUMSetupWarning.value ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 0,
						class: normalizeClass(_ctx.$style.userCount),
						color: "text-light"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.users.count", {
							interpolate: { count: unref(usersStore).usersList.state.count },
							adjustToNumber: unref(usersStore).usersList.state.count
						})), 1)]),
						_: 1
					}, 8, ["class"])) : createCommentVNode("", true)]),
					_: 1
				}),
				!unref(usersStore).usersLimitNotReached ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.setupInfoContainer)
				}, [createVNode(unref(N8nActionBox_default), {
					heading: unref(i18n).baseText(unref(uiStore).contextBasedTranslationKeys.users.settings.unavailable.title),
					description: unref(i18n).baseText(unref(uiStore).contextBasedTranslationKeys.users.settings.unavailable.description),
					"button-text": unref(i18n).baseText(unref(uiStore).contextBasedTranslationKeys.users.settings.unavailable.button),
					"onClick:button": goToUpgrade
				}, null, 8, [
					"heading",
					"description",
					"button-text"
				])], 2)) : createCommentVNode("", true),
				!isAdvancedPermissionsEnabled.value ? (openBlock(), createBlock(unref(N8nNotice_default), { key: 1 }, {
					default: withCtx(() => [createVNode(unref(I18nT), {
						keypath: "settings.users.advancedPermissions.warning",
						scope: "global"
					}, {
						link: withCtx(() => [createVNode(unref(N8nLink_default), {
							"data-test-id": "upgrade-permissions-link",
							size: "small",
							onClick: goToUpgradeAdvancedPermissions
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.upgrade")), 1)]),
							_: 1
						})]),
						_: 1
					})]),
					_: 1
				})) : createCommentVNode("", true),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.settingsContainer) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.settingsContainerInfo) }, [createVNode(unref(N8nText_default), { bold: true }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.personal.mfa.enforce.title")) + " ", 1), !isEnforceMFAEnabled.value ? (openBlock(), createBlock(unref(N8nBadge_default), {
						key: 0,
						class: "ml-4xs"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.upgrade")), 1)]),
						_: 1
					})) : createCommentVNode("", true)]),
					_: 1
				}), createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("settings.personal.mfa.enforce.message")), 1)]),
					_: 1
				})], 2), createBaseVNode("div", { class: normalizeClass(_ctx.$style.settingsContainerAction) }, [createVNode(EnterpriseEdition_ee_default, { features: [unref(EnterpriseEditionFeature).EnforceMFA] }, {
					fallback: withCtx(() => [createVNode(unref(N8nTooltip_default), null, {
						content: withCtx(() => [createVNode(unref(I18nT), {
							keypath: tooltipKey,
							tag: "span",
							scope: "global"
						}, {
							action: withCtx(() => [createBaseVNode("a", { onClick: goToUpgrade }, toDisplayString(unref(i18n).baseText("settings.personal.mfa.enforce.unlicensed_tooltip.link")), 1)]),
							_: 1
						})]),
						default: withCtx(() => [createVNode(unref(ElSwitch), {
							"model-value": unref(settingsStore).isMFAEnforced,
							size: "large",
							disabled: true
						}, null, 8, ["model-value"])]),
						_: 1
					})]),
					default: withCtx(() => [createVNode(unref(ElSwitch), {
						"model-value": unref(settingsStore).isMFAEnforced,
						size: "large",
						"data-test-id": "enable-force-mfa",
						"onUpdate:modelValue": onUpdateMfaEnforced
					}, null, 8, ["model-value"])]),
					_: 1
				}, 8, ["features"])], 2)], 2),
				isInstanceRoleProvisioningEnabled.value ? (openBlock(), createElementBlock("div", {
					key: 2,
					class: normalizeClass(_ctx.$style.container)
				}, [createVNode(Alert_default, {
					type: "info",
					title: unref(i18n).baseText("settings.provisioningInstanceRolesHandledBySsoProvider.description")
				}, null, 8, ["title"])], 2)) : createCommentVNode("", true),
				!showUMSetupWarning.value ? (openBlock(), createElementBlock("div", {
					key: 3,
					class: normalizeClass(_ctx.$style.buttonContainer)
				}, [createVNode(unref(N8nInput_default), {
					class: normalizeClass(_ctx.$style.search),
					"model-value": search$1.value,
					placeholder: unref(i18n).baseText("settings.users.search.placeholder"),
					clearable: "",
					"data-test-id": "users-list-search",
					"onUpdate:modelValue": onSearch
				}, {
					prefix: withCtx(() => [createVNode(unref(N8nIcon_default), { icon: "search" })]),
					_: 1
				}, 8, [
					"class",
					"model-value",
					"placeholder"
				]), createVNode(unref(N8nTooltip_default), { disabled: !unref(ssoStore).isSamlLoginEnabled }, {
					content: withCtx(() => [createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("settings.users.invite.tooltip")), 1)]),
					default: withCtx(() => [createBaseVNode("div", null, [createVNode(unref(N8nButton_default), {
						disabled: unref(ssoStore).isSamlLoginEnabled || !unref(usersStore).usersLimitNotReached || isInstanceRoleProvisioningEnabled.value,
						label: unref(i18n).baseText("settings.users.invite"),
						size: "large",
						"data-test-id": "settings-users-invite-button",
						onClick: onInvite
					}, null, 8, ["disabled", "label"])])]),
					_: 1
				}, 8, ["disabled"])], 2)) : createCommentVNode("", true),
				unref(usersStore).usersLimitNotReached || unref(usersStore).usersList.state.count > 1 ? (openBlock(), createElementBlock("div", {
					key: 4,
					class: normalizeClass(_ctx.$style.usersContainer)
				}, [createVNode(SettingsUsersTable_default, {
					"table-options": usersTableState.value,
					"onUpdate:tableOptions": _cache[0] || (_cache[0] = ($event) => usersTableState.value = $event),
					"data-test-id": "settings-users-table",
					"can-edit-role": !isInstanceRoleProvisioningEnabled.value,
					data: unref(usersStore).usersList.state,
					loading: unref(usersStore).usersList.isLoading,
					actions: usersListActions.value,
					"onUpdate:options": updateUsersTableData,
					"onUpdate:role": onUpdateRole,
					onAction: onUsersListAction
				}, null, 8, [
					"table-options",
					"can-edit-role",
					"data",
					"loading",
					"actions"
				])], 2)) : createCommentVNode("", true)
			], 2);
		};
	}
});
var SettingsUsersView_vue_vue_type_style_index_0_lang_module_default = {
	userCount: "_userCount_yo0sz_125",
	buttonContainer: "_buttonContainer_yo0sz_130",
	search: "_search_yo0sz_137",
	setupInfoContainer: "_setupInfoContainer_yo0sz_141",
	settingsContainer: "_settingsContainer_yo0sz_145",
	settingsContainerInfo: "_settingsContainerInfo_yo0sz_156",
	settingsContainerAction: "_settingsContainerAction_yo0sz_165",
	container: "_container_yo0sz_173"
};
var SettingsUsersView_default = /* @__PURE__ */ __plugin_vue_export_helper_default(SettingsUsersView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": SettingsUsersView_vue_vue_type_style_index_0_lang_module_default }]]);
export { SettingsUsersView_default as default };
