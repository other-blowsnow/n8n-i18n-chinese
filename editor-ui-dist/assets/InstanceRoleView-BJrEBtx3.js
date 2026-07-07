import { $ as openBlock, A as createTextVNode, Bt as toRaw, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, _ as Fragment, bt as withCtx, gt as watch, j as createVNode, jt as isRef, p as vShow, rt as renderList, vn as normalizeClass, w as createBlock, xt as withDirectives } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { s as useI18n } from "./src-BqnE5xyQ.js";
import { Ct as TableBase_default, E as N8nUserInfo_default, Ga as N8nHeading_default, Ja as N8nButton_default, Rt as N8nActionDropdown_default, Ut as N8nLoading_default, Ya as N8nIcon_default, _t as useRouter, k as N8nTabs_default, qa as N8nText_default, w as N8nUserSelect_default, yt as Checkbox_default } from "./src-CSWS3PCK.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { s as useAsyncState } from "./core-CxAuVuwP.js";
import { t as useMessage } from "./useMessage-Cc5ySTVL.js";
import { t as useToast } from "./useToast-DB6zPjqx.js";
import { ui as VIEWS } from "./constants-BpExsFUJ.js";
import { n as hasPermission, p as useTelemetry, t as useUsersStore } from "./users.store-D_2YlqZ_.js";
import { t as useRolesStore } from "./roles.store-dgIsT17z.js";
import { n as RoleEditorLayout_default, t as useRoleEditorForm } from "./useRoleEditorForm-DAUk3Iz5.js";
import { a as getOptionState, n as INSTANCE_SCOPE_GROUP_LIST, o as toggleOption, t as ALL_INSTANCE_SCOPES } from "./instanceRoleScopes-Dsy4RjAb.js";
//#region src/features/roles/instance/InstanceRoleAssignmentsTab.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1$1 = ["disabled"];
var InstanceRoleAssignmentsTab_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceRoleAssignmentsTab",
	props: { roleSlug: {} },
	setup(__props) {
		const props = __props;
		const rolesStore = useRolesStore();
		const usersStore = useUsersStore();
		const router = useRouter();
		const i18n = useI18n();
		const { showError, showMessage } = useToast();
		const canChangeRole = computed(() => hasPermission(["rbac"], { rbac: { scope: "user:changeRole" } }));
		const { state: members, isLoading, error, execute } = useAsyncState(async () => await rolesStore.fetchRoleMembers(props.roleSlug), {
			members: [],
			total: 0
		});
		watch(() => props.roleSlug, async () => await execute());
		const updatingUserIds = ref(/* @__PURE__ */ new Set());
		function roleOptionsFor(currentRoleSlug) {
			return rolesStore.processedInstanceRoles.map((role) => ({
				id: role.slug,
				label: role.displayName,
				checked: role.slug === currentRoleSlug
			}));
		}
		const memberUserIds = computed(() => members.value.members.map((member) => member.userId));
		function roleLabel(slug) {
			return rolesStore.processedInstanceRoles.find((role) => role.slug === slug)?.displayName ?? slug;
		}
		function isCurrentUser(member) {
			return member.userId === usersStore.currentUserId;
		}
		function canEditMember(member) {
			return canChangeRole.value && !isCurrentUser(member);
		}
		async function changeRole(userId, newRoleName) {
			updatingUserIds.value.add(userId);
			try {
				await usersStore.updateGlobalRole({
					id: userId,
					newRoleName
				});
				await execute();
				await rolesStore.fetchRoles();
				showMessage({
					type: "success",
					message: i18n.baseText("roles.instance.assignments.changeRole.success")
				});
			} catch (e) {
				showError(e, i18n.baseText("roles.instance.assignments.changeRole.error"));
			} finally {
				updatingUserIds.value.delete(userId);
			}
		}
		async function onAddMember(userId) {
			if (!userId) return;
			await changeRole(userId, props.roleSlug);
		}
		function goToMembers() {
			router.push({ name: VIEWS.USERS_SETTINGS });
		}
		onMounted(async () => {
			if (canChangeRole.value) await usersStore.fetchUsers();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.toolbar) }, [canChangeRole.value ? (openBlock(), createBlock(unref(N8nUserSelect_default), {
				key: 0,
				class: normalizeClass(_ctx.$style.addMember),
				"model-value": "",
				users: unref(usersStore).allUsers,
				"current-user-id": unref(usersStore).currentUserId ?? "",
				"ignore-ids": memberUserIds.value,
				placeholder: unref(i18n).baseText("roles.instance.assignments.addMember"),
				"data-test-id": "instance-role-add-member",
				"onUpdate:modelValue": onAddMember
			}, {
				prefix: withCtx(() => [createVNode(unref(N8nIcon_default), { icon: "search" })]),
				_: 1
			}, 8, [
				"class",
				"users",
				"current-user-id",
				"ignore-ids",
				"placeholder"
			])) : createCommentVNode("", true), createBaseVNode("button", {
				class: normalizeClass(_ctx.$style.viewAllMembers),
				type: "button",
				"data-test-id": "instance-role-view-all-members",
				onClick: goToMembers
			}, [createVNode(unref(N8nText_default), { color: "text-dark" }, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("roles.instance.assignments.viewAllMembers")), 1)]),
				_: 1
			}), createVNode(unref(N8nIcon_default), { icon: "arrow-right" })], 2)], 2), unref(isLoading) ? (openBlock(), createBlock(unref(N8nLoading_default), {
				key: 0,
				rows: 3
			})) : unref(error) ? (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.stateBox)
			}, [createVNode(unref(N8nText_default), { color: "text-light" }, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("roles.instance.assignments.fetch.error")), 1)]),
				_: 1
			})], 2)) : unref(members).members.length === 0 ? (openBlock(), createElementBlock("div", {
				key: 2,
				class: normalizeClass(_ctx.$style.stateBox)
			}, [createVNode(unref(N8nText_default), { color: "text-light" }, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("roles.instance.assignments.emptyState")), 1)]),
				_: 1
			})], 2)) : (openBlock(), createBlock(unref(TableBase_default), { key: 3 }, {
				default: withCtx(() => [createBaseVNode("thead", null, [createBaseVNode("tr", null, [createBaseVNode("th", null, toDisplayString(unref(i18n).baseText("roles.instance.assignments.memberColumn")), 1), createBaseVNode("th", null, toDisplayString(unref(i18n).baseText("roles.instance.assignments.roleColumn")), 1)])]), createBaseVNode("tbody", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(members).members, (member) => {
					return openBlock(), createElementBlock("tr", {
						key: member.userId,
						"data-test-id": "instance-role-member-row"
					}, [createBaseVNode("td", null, [createVNode(unref(N8nUserInfo_default), {
						"first-name": member.firstName,
						"last-name": member.lastName,
						email: member.email,
						"is-current-user": isCurrentUser(member)
					}, null, 8, [
						"first-name",
						"last-name",
						"email",
						"is-current-user"
					])]), createBaseVNode("td", null, [canEditMember(member) ? (openBlock(), createBlock(unref(N8nActionDropdown_default), {
						key: 0,
						placement: "bottom-start",
						items: roleOptionsFor(member.role),
						disabled: updatingUserIds.value.has(member.userId),
						"data-test-id": "instance-role-member-dropdown",
						onSelect: (slug) => changeRole(member.userId, slug)
					}, {
						activator: withCtx(() => [createBaseVNode("button", {
							class: normalizeClass(_ctx.$style.roleLabel),
							type: "button",
							disabled: updatingUserIds.value.has(member.userId)
						}, [createVNode(unref(N8nText_default), { color: "text-dark" }, {
							default: withCtx(() => [createTextVNode(toDisplayString(roleLabel(member.role)), 1)]),
							_: 2
						}, 1024), updatingUserIds.value.has(member.userId) ? (openBlock(), createBlock(unref(N8nIcon_default), {
							key: 0,
							icon: "spinner",
							spin: "",
							color: "text-dark",
							size: "large"
						})) : (openBlock(), createBlock(unref(N8nIcon_default), {
							key: 1,
							icon: "chevron-down",
							color: "text-dark",
							size: "large"
						}))], 10, _hoisted_1$1)]),
						menuItem: withCtx((item) => [createVNode(unref(N8nText_default), { color: "text-dark" }, {
							default: withCtx(() => [createTextVNode(toDisplayString(item.label), 1)]),
							_: 2
						}, 1024)]),
						_: 2
					}, 1032, [
						"items",
						"disabled",
						"onSelect"
					])) : (openBlock(), createBlock(unref(N8nText_default), {
						key: 1,
						color: "text-dark"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(roleLabel(member.role)), 1)]),
						_: 2
					}, 1024))])]);
				}), 128))])]),
				_: 1
			}))], 2);
		};
	}
});
var InstanceRoleAssignmentsTab_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_1yxn1_125",
	toolbar: "_toolbar_1yxn1_129",
	addMember: "_addMember_1yxn1_137",
	viewAllMembers: "_viewAllMembers_1yxn1_142",
	stateBox: "_stateBox_1yxn1_153",
	roleLabel: "_roleLabel_1yxn1_158"
};
var InstanceRoleAssignmentsTab_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceRoleAssignmentsTab_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceRoleAssignmentsTab_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/roles/instance/components/ScopeGroupSelector.vue?vue&type=script&setup=true&lang.ts
var ScopeGroupSelector_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ScopeGroupSelector",
	props: {
		modelValue: {},
		readonly: {
			type: Boolean,
			default: false
		},
		loading: {
			type: Boolean,
			default: false
		}
	},
	emits: ["update:modelValue"],
	setup(__props, { emit: __emit }) {
		const i18n = useI18n();
		const props = __props;
		const emit = __emit;
		const groups = INSTANCE_SCOPE_GROUP_LIST;
		/** data-testid must be a single value: turn "Manage own" into "manage-own". */
		function optionTestId(resource, option) {
			return `scope-option-${resource}-${option.key.toLowerCase().replace(/\s+/g, "-")}`;
		}
		function onToggle(option) {
			if (props.readonly) return;
			emit("update:modelValue", toggleOption(props.modelValue, option.scopes));
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.cardContainer) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(groups), (group) => {
				return openBlock(), createElementBlock("div", {
					key: group.resource,
					class: normalizeClass(_ctx.$style.card)
				}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardTitle) }, toDisplayString(unref(i18n).baseText(group.labelKey)), 3), createBaseVNode("div", { class: normalizeClass(_ctx.$style.optionList) }, [__props.loading ? (openBlock(), createBlock(unref(N8nLoading_default), {
					key: 0,
					rows: group.options.length,
					"shrink-last": false
				}, null, 8, ["rows"])) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(group.options, (option) => {
					return openBlock(), createBlock(unref(Checkbox_default), {
						key: option.key,
						"data-test-id": optionTestId(group.resource, option),
						label: unref(i18n).baseText(option.labelKey),
						"model-value": unref(getOptionState)(__props.modelValue, option.scopes) === "checked",
						indeterminate: unref(getOptionState)(__props.modelValue, option.scopes) === "indeterminate",
						disabled: __props.readonly,
						class: normalizeClass(_ctx.$style.checkbox),
						"onUpdate:modelValue": ($event) => onToggle(option)
					}, null, 8, [
						"data-test-id",
						"label",
						"model-value",
						"indeterminate",
						"disabled",
						"class",
						"onUpdate:modelValue"
					]);
				}), 128))], 2)], 2);
			}), 128))], 2);
		};
	}
});
var ScopeGroupSelector_vue_vue_type_style_index_0_lang_module_default = {
	cardContainer: "_cardContainer_18xss_2",
	card: "_card_18xss_2",
	cardTitle: "_cardTitle_18xss_20",
	optionList: "_optionList_18xss_25",
	checkbox: "_checkbox_18xss_32"
};
var ScopeGroupSelector_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ScopeGroupSelector_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ScopeGroupSelector_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/roles/instance/InstanceRoleView.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = {
	key: 0,
	class: "mb-l"
};
var _hoisted_2 = {
	key: 1,
	class: "mt-xl"
};
var _hoisted_3 = { key: 1 };
var InstanceRoleView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceRoleView",
	props: { roleSlug: {} },
	setup(__props) {
		const rolesStore = useRolesStore();
		const router = useRouter();
		const { showMessage, showError } = useToast();
		const i18n = useI18n();
		const message = useMessage();
		const telemetry = useTelemetry();
		const props = __props;
		const { activeTab, tabOptions, form, isLoading, initialState, isReadOnly, isNew, showEditButtons, showCreateButton, hasUnsavedChanges, displayNameValidationRules, resetForm } = useRoleEditorForm({
			roleSlug: () => props.roleSlug,
			viewRoute: VIEWS.INSTANCE_ROLE_VIEW,
			fetchError: i18n.baseText("roles.instance.action.fetch.error")
		});
		const editorLabels = computed(() => ({
			newRoleTitle: i18n.baseText("roles.instance.newRole"),
			roleName: i18n.baseText("projectRoles.roleName"),
			description: i18n.baseText("projectRoles.description"),
			optional: i18n.baseText("projectRoles.optional"),
			systemRoleNotEditable: i18n.baseText("projectRoles.systemRoleNotEditable"),
			discardChanges: i18n.baseText("projectRoles.discardChanges"),
			save: i18n.baseText("projectRoles.save"),
			create: i18n.baseText("projectRoles.create")
		}));
		const presetRoles = computed(() => rolesStore.processedInstanceRoles.filter((r) => r.systemRole));
		function onBackClick() {
			router.push({
				name: VIEWS.ROLES_SETTINGS,
				query: { tab: "instance" }
			});
		}
		function setPreset(slug) {
			const preset = rolesStore.processedInstanceRoles.find((role) => role.slug === slug);
			if (!preset) return;
			form.value.scopes = structuredClone(toRaw(preset.scopes)).filter((s) => ALL_INSTANCE_SCOPES.includes(s));
		}
		async function createInstanceRole() {
			try {
				const role = await rolesStore.createRole({
					displayName: form.value.displayName,
					description: form.value.description ?? void 0,
					scopes: form.value.scopes,
					roleType: "global"
				});
				rolesStore.fetchRoles();
				telemetry.track("User successfully created new role", {
					role_id: role.slug,
					role_name: role.displayName,
					permissions: role.scopes
				});
				router.replace({
					name: VIEWS.INSTANCE_ROLE_SETTINGS,
					params: { roleSlug: role.slug }
				});
				showMessage({
					type: "success",
					message: i18n.baseText("roles.instance.action.create.success")
				});
				initialState.value = structuredClone(role);
				return role;
			} catch (error) {
				showError(error, i18n.baseText("roles.instance.action.create.error"));
				return;
			}
		}
		async function updateInstanceRole(slug) {
			try {
				const role = await rolesStore.updateRole(slug, {
					displayName: form.value.displayName,
					description: form.value.description ?? void 0,
					scopes: form.value.scopes
				});
				rolesStore.fetchRoles();
				telemetry.track("User updated role", {
					role_id: role.slug,
					role_name: role.displayName,
					permissions_from: initialState.value?.scopes,
					permissions_to: role.scopes
				});
				initialState.value = structuredClone(role);
				showMessage({
					type: "success",
					message: i18n.baseText("roles.instance.action.update.success")
				});
				return role;
			} catch (error) {
				showError(error, i18n.baseText("roles.instance.action.update.error"));
				return;
			}
		}
		async function handleSubmit() {
			if (props.roleSlug) await updateInstanceRole(props.roleSlug);
			else await createInstanceRole();
		}
		async function deleteRole() {
			if (!initialState.value) return;
			if (await message.confirm(i18n.baseText("roles.action.delete.text", { interpolate: { roleName: initialState.value.displayName } }), i18n.baseText("roles.action.delete.title", { interpolate: { roleName: initialState.value.displayName } }), {
				type: "warning",
				confirmButtonText: i18n.baseText("roles.action.delete"),
				cancelButtonText: i18n.baseText("roles.action.cancel")
			}) !== "confirm") return;
			try {
				await rolesStore.deleteRole(initialState.value.slug);
				const index = rolesStore.roles.global.findIndex((role) => role.slug === initialState.value?.slug);
				if (index !== -1) rolesStore.roles.global.splice(index, 1);
				showMessage({
					title: i18n.baseText("roles.action.delete.success"),
					type: "success"
				});
				telemetry.track("User successfully deleted role", {
					role_id: initialState.value.slug,
					role_name: initialState.value.displayName,
					permissions: initialState.value.scopes
				});
				router.push({
					name: VIEWS.ROLES_SETTINGS,
					query: { tab: "instance" }
				});
			} catch (error) {
				showError(error, i18n.baseText("roles.action.delete.error"));
			}
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(RoleEditorLayout_default, {
				"display-name": unref(form).displayName,
				"onUpdate:displayName": _cache[2] || (_cache[2] = ($event) => unref(form).displayName = $event),
				description: unref(form).description,
				"onUpdate:description": _cache[3] || (_cache[3] = ($event) => unref(form).description = $event),
				"is-new": unref(isNew),
				"is-read-only": unref(isReadOnly),
				"show-edit-buttons": unref(showEditButtons),
				"show-create-button": unref(showCreateButton),
				"has-unsaved-changes": unref(hasUnsavedChanges),
				"back-button-text": unref(i18n).baseText("roles.instance.backToRoles"),
				labels: editorLabels.value,
				"display-name-validation-rules": unref(displayNameValidationRules),
				onBack: onBackClick,
				onSave: handleSubmit,
				onDiscard: _cache[4] || (_cache[4] = ($event) => unref(resetForm)(unref(initialState))),
				onCreate: handleSubmit
			}, {
				default: withCtx(() => [
					__props.roleSlug ? (openBlock(), createElementBlock("div", _hoisted_1, [createVNode(unref(N8nTabs_default), {
						modelValue: unref(activeTab),
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(activeTab) ? activeTab.value = $event : null),
						options: unref(tabOptions)
					}, null, 8, ["modelValue", "options"])])) : createCommentVNode("", true),
					withDirectives(createBaseVNode("div", null, [
						!unref(isReadOnly) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createVNode(unref(N8nText_default), {
							color: "text-light",
							class: "mb-2xs",
							tag: "p"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("roles.instance.preset")), 1)]),
							_: 1
						}), createBaseVNode("div", { class: normalizeClass(["mb-s", _ctx.$style.presetsContainer]) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(presetRoles.value, (preset) => {
							return openBlock(), createBlock(unref(N8nButton_default), {
								key: preset.slug,
								variant: "subtle",
								"data-test-id": `role-preset-${preset.slug}`,
								onClick: ($event) => setPreset(preset.slug)
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(preset.displayName), 1)]),
								_: 2
							}, 1032, ["data-test-id", "onClick"]);
						}), 128))], 2)], 64)) : createCommentVNode("", true),
						createVNode(ScopeGroupSelector_default, {
							modelValue: unref(form).scopes,
							"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(form).scopes = $event),
							readonly: unref(isReadOnly),
							loading: unref(isLoading)
						}, null, 8, [
							"modelValue",
							"readonly",
							"loading"
						]),
						__props.roleSlug && !unref(isReadOnly) ? (openBlock(), createElementBlock("div", _hoisted_2, [
							createVNode(unref(N8nHeading_default), {
								tag: "h2",
								class: "mb-2xs",
								size: "large"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("roles.instance.dangerZone")), 1)]),
								_: 1
							}),
							createVNode(unref(N8nText_default), {
								tag: "p",
								class: "mb-s"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("roles.instance.action.delete.warning")), 1)]),
								_: 1
							}),
							createVNode(unref(N8nButton_default), {
								variant: "destructive",
								onClick: deleteRole
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("roles.instance.action.delete.button")), 1)]),
								_: 1
							})
						])) : createCommentVNode("", true)
					], 512), [[vShow, !__props.roleSlug || unref(activeTab) === "permissions"]]),
					__props.roleSlug && unref(activeTab) === "assignments" ? (openBlock(), createElementBlock("div", _hoisted_3, [createVNode(InstanceRoleAssignmentsTab_default, { "role-slug": __props.roleSlug }, null, 8, ["role-slug"])])) : createCommentVNode("", true)
				]),
				_: 1
			}, 8, [
				"display-name",
				"description",
				"is-new",
				"is-read-only",
				"show-edit-buttons",
				"show-create-button",
				"has-unsaved-changes",
				"back-button-text",
				"labels",
				"display-name-validation-rules"
			]);
		};
	}
});
var InstanceRoleView_vue_vue_type_style_index_0_lang_module_default = { presetsContainer: "_presetsContainer_2kwa6_2" };
var InstanceRoleView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceRoleView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceRoleView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { InstanceRoleView_default as default };
