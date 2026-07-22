import { $ as openBlock, A as createTextVNode, Bt as toRaw, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, N as defineComponent, S as computed, T as createCommentVNode, _ as Fragment, bt as withCtx, gt as watch, j as createVNode, jt as isRef, p as vShow, rt as renderList, vn as normalizeClass, w as createBlock, xt as withDirectives } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { ot as useI18n, s as useAsyncState, st as I18nT } from "./core-CngOnFvY.js";
import { $a as N8nHeading_default, At as TableBase_default, Et as Checkbox_default, Ji as N8nTooltip_default, L as N8nTabs_default, O as N8nUserInfo_default, Qt as N8nLoading_default, eo as N8nCallout_default, gt as N8nLink_default, no as N8nButton_default, to as N8nText_default, wt as useRouter } from "./src-CtyOKmD-.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { t as useMessage } from "./useMessage-ZuCTOGWe.js";
import { t as useToast } from "./useToast-COvPNq4S.js";
import { d as CUSTOM_ROLES_DOCS_URL, hi as VIEWS } from "./constants-CSBjw1Ht.js";
import { p as useTelemetry, t as useUsersStore } from "./users.store-C2APvywU.js";
import { t as useRolesStore } from "./roles.store-DDxCRVHX.js";
import { n as RoleEditorLayout_default, t as useRoleEditorForm } from "./useRoleEditorForm-C5aTFIae.js";
import { c as resolveOptionState, l as toggleOption, n as INSTANCE_SCOPE_GROUP_LIST, o as getEscalationWarningKey, r as SUPERSEDED_BY, s as isOptionImplied, t as ALL_INSTANCE_SCOPES } from "./instanceRoleScopes-DaPcyV7b.js";
//#region src/features/roles/instance/InstanceRoleAssignmentsTab.vue?vue&type=script&setup=true&lang.ts
var InstanceRoleAssignmentsTab_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "InstanceRoleAssignmentsTab",
	props: { roleSlug: {} },
	setup(__props) {
		const props = __props;
		const rolesStore = useRolesStore();
		const usersStore = useUsersStore();
		const i18n = useI18n();
		const { state: members, isLoading, error, execute } = useAsyncState(async () => await rolesStore.fetchRoleMembers(props.roleSlug), {
			members: [],
			total: 0
		});
		watch(() => props.roleSlug, async () => await execute());
		function roleLabel(slug) {
			return rolesStore.processedInstanceRoles.find((role) => role.slug === slug)?.displayName ?? slug;
		}
		function isCurrentUser(member) {
			return member.userId === usersStore.currentUserId;
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [unref(isLoading) ? (openBlock(), createBlock(unref(N8nLoading_default), {
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
					])]), createBaseVNode("td", null, [createVNode(unref(N8nText_default), { color: "text-dark" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(roleLabel(member.role)), 1)]),
						_: 2
					}, 1024)])]);
				}), 128))])]),
				_: 1
			}))], 2);
		};
	}
});
var InstanceRoleAssignmentsTab_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_vmyx5_125",
	stateBox: "_stateBox_vmyx5_129"
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
		function impliedTooltip(option, groupOptions) {
			const supersededByKey = SUPERSEDED_BY[option.key];
			if (!supersededByKey) return "";
			const superseding = groupOptions.find((o) => o.key === supersededByKey);
			if (!superseding) return "";
			return i18n.baseText("instanceRoles.option.includedIn", { interpolate: { option: i18n.baseText(superseding.labelKey) } });
		}
		function onToggle(option, groupOptions) {
			if (props.readonly) return;
			if (isOptionImplied(option, groupOptions, props.modelValue)) return;
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
					return openBlock(), createBlock(unref(N8nTooltip_default), {
						key: option.key,
						content: impliedTooltip(option, group.options),
						disabled: !unref(isOptionImplied)(option, group.options, __props.modelValue),
						placement: "top"
					}, {
						default: withCtx(() => [createVNode(unref(Checkbox_default), {
							"data-test-id": optionTestId(group.resource, option),
							label: unref(i18n).baseText(option.labelKey),
							"model-value": unref(resolveOptionState)(option, group.options, __props.modelValue) === "checked",
							indeterminate: unref(resolveOptionState)(option, group.options, __props.modelValue) === "indeterminate",
							disabled: __props.readonly || unref(isOptionImplied)(option, group.options, __props.modelValue),
							class: normalizeClass(_ctx.$style.checkbox),
							"onUpdate:modelValue": ($event) => onToggle(option, group.options)
						}, null, 8, [
							"data-test-id",
							"label",
							"model-value",
							"indeterminate",
							"disabled",
							"class",
							"onUpdate:modelValue"
						])]),
						_: 2
					}, 1032, ["content", "disabled"]);
				}), 128)), !__props.readonly && unref(getEscalationWarningKey)(group.resource, __props.modelValue) ? (openBlock(), createBlock(unref(N8nCallout_default), {
					key: 2,
					theme: "warning",
					class: normalizeClass(_ctx.$style.warning),
					"data-test-id": `scope-escalation-warning-${group.resource}`
				}, {
					default: withCtx(() => [createVNode(unref(I18nT), {
						keypath: unref(getEscalationWarningKey)(group.resource, __props.modelValue),
						scope: "global"
					}, {
						link: withCtx(() => [createVNode(unref(N8nLink_default), {
							href: unref(CUSTOM_ROLES_DOCS_URL),
							"new-window": true,
							size: "small",
							theme: "secondary",
							bold: true,
							underline: true
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("instanceRoles.warning.viewDocs")), 1)]),
							_: 1
						}, 8, ["href"])]),
						_: 1
					}, 8, ["keypath"])]),
					_: 2
				}, 1032, ["class", "data-test-id"])) : createCommentVNode("", true)], 2)], 2);
			}), 128))], 2);
		};
	}
});
var ScopeGroupSelector_vue_vue_type_style_index_0_lang_module_default = {
	cardContainer: "_cardContainer_1tpb8_2",
	card: "_card_1tpb8_2",
	cardTitle: "_cardTitle_1tpb8_20",
	optionList: "_optionList_1tpb8_25",
	checkbox: "_checkbox_1tpb8_32",
	warning: "_warning_1tpb8_36"
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
		const { activeTab, tabOptions, form, isLoading, initialState, isReadOnly, isNew, showEditButtons, showCreateButton, hasUnsavedChanges, displayNameValidationRules, submitted, validateOnSubmit, resetForm } = useRoleEditorForm({
			roleSlug: () => props.roleSlug,
			viewRoute: VIEWS.INSTANCE_ROLE_VIEW,
			filterScopes: (scopes) => scopes.filter((s) => ALL_INSTANCE_SCOPES.includes(s)),
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
			if (!validateOnSubmit("roles.instance.action.create.error")) return;
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
				"show-display-name-error": unref(submitted),
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
				"display-name-validation-rules",
				"show-display-name-error"
			]);
		};
	}
});
var InstanceRoleView_vue_vue_type_style_index_0_lang_module_default = { presetsContainer: "_presetsContainer_2kwa6_2" };
var InstanceRoleView_default = /* @__PURE__ */ _plugin_vue_export_helper_default(InstanceRoleView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": InstanceRoleView_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { InstanceRoleView_default as default };
