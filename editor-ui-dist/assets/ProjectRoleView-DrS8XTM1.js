import { o as __toESM } from "./chunk-r2Y0G7H8.js";
import { Bt as toRaw, C as computed, Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, T as createBlock, _ as Fragment, _t as watch, bt as withCtx, et as openBlock, it as renderList, j as createTextVNode, p as vShow, vn as normalizeClass, w as createBaseVNode, xt as withDirectives } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { x as useAsyncState, yt as useI18n } from "./_MapCache-Bv7c3f3H.js";
import { Di as useRouter, Ei as useRoute, F as N8nTabs_default, Gi as N8nButton_default, Hi as N8nHeading_default, M as N8nUserInfo_default, Pi as Input_default, Wi as N8nText_default, bi as RouterLink, c as DialogFooter_default, ct as N8nFormInput_default, d as DialogHeader_default, ji as N8nTooltip_default, kt as N8nLoading_default, l as Dialog_default, mt as TableBase_default, u as DialogTitle_default } from "./src-NOcRrhMI.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import { Er as useToast, It as useTelemetry, Mr as useMessage, Q as require_sortBy, js as useSettingsStore } from "./users.store-D2CJwIMh.js";
import { Os as MODAL_CONFIRM, cs as VIEWS, zo as require_isEqual } from "./constants-BfwnXJD0.js";
import "./merge-18y757JO.js";
import "./_baseOrderBy-DYXZYdmk.js";
import { t as require_dateformat } from "./dateformat-Bc6vycUF.js";
import "./useDebounce-CfqGZdKt.js";
import { t as useRolesStore } from "./roles.store-BHdU5hTP.js";
import { n as SCOPE_TYPES, t as SCOPES } from "./projectRoleScopes-BwCy7CpD.js";
var import_sortBy = /* @__PURE__ */ __toESM(require_sortBy(), 1);
var import_dateformat = /* @__PURE__ */ __toESM(require_dateformat(), 1);
var import_isEqual = /* @__PURE__ */ __toESM(require_isEqual(), 1);
var RoleProjectMembersModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "RoleProjectMembersModal",
	props: {
		open: { type: Boolean },
		roleSlug: {},
		projectId: {},
		projectName: {}
	},
	emits: ["update:open"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const rolesStore = useRolesStore();
		const i18n = useI18n();
		const router = useRouter();
		const membersData = ref({ members: [] });
		const isLoading = ref(false);
		watch(() => props.open, async (isOpen) => {
			if (!isOpen) return;
			isLoading.value = true;
			try {
				membersData.value = await rolesStore.fetchRoleProjectMembers(props.roleSlug, props.projectId);
			} finally {
				isLoading.value = false;
			}
		}, { immediate: true });
		const roleDisplayNameMap = computed(() => {
			const allRoles = [
				...rolesStore.roles.global,
				...rolesStore.roles.project,
				...rolesStore.roles.credential,
				...rolesStore.roles.workflow
			];
			return new Map(allRoles.map((r) => [r.slug, r.displayName]));
		});
		function getRoleDisplayName(slug) {
			return roleDisplayNameMap.value.get(slug) ?? slug;
		}
		function navigateToProjectSettings() {
			emit("update:open", false);
			router.push({
				name: VIEWS.PROJECT_SETTINGS,
				params: { projectId: props.projectId }
			});
		}
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(Dialog_default), {
				open: __props.open,
				size: "medium",
				"onUpdate:open": _cache[1] || (_cache[1] = ($event) => emit("update:open", $event))
			}, {
				default: withCtx(() => [
					createVNode(unref(DialogHeader_default), null, {
						default: withCtx(() => [createVNode(unref(DialogTitle_default), null, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("projectRoles.assignments.membersModal.title", { interpolate: { projectName: __props.projectName } })), 1)]),
							_: 1
						})]),
						_: 1
					}),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [isLoading.value ? (openBlock(), createBlock(unref(N8nLoading_default), {
						key: 0,
						rows: 3
					})) : (openBlock(), createElementBlock("div", {
						key: 1,
						class: normalizeClass(_ctx.$style.memberList)
					}, [(openBlock(true), createElementBlock(Fragment, null, renderList(membersData.value.members, (member) => {
						return openBlock(), createElementBlock("div", {
							key: member.userId,
							class: normalizeClass(_ctx.$style.memberRow)
						}, [createVNode(unref(N8nUserInfo_default), {
							"first-name": member.firstName,
							"last-name": member.lastName,
							email: member.email
						}, null, 8, [
							"first-name",
							"last-name",
							"email"
						]), createVNode(unref(N8nText_default), {
							class: normalizeClass(_ctx.$style.roleLabel),
							color: "text-light",
							size: "small"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(getRoleDisplayName(member.role)), 1)]),
							_: 2
						}, 1032, ["class"])], 2);
					}), 128))], 2))], 2),
					createVNode(unref(DialogFooter_default), null, {
						default: withCtx(() => [createVNode(unref(N8nButton_default), {
							variant: "subtle",
							onClick: _cache[0] || (_cache[0] = ($event) => emit("update:open", false))
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("projectRoles.assignments.membersModal.cancel")), 1)]),
							_: 1
						}), createVNode(unref(N8nButton_default), { onClick: navigateToProjectSettings }, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("projectRoles.assignments.membersModal.manageMembers")), 1)]),
							_: 1
						})]),
						_: 1
					})
				]),
				_: 1
			}, 8, ["open"]);
		};
	}
});
var RoleProjectMembersModal_vue_vue_type_style_index_0_lang_module_default = {
	content: "_content_bm3ht_2",
	memberList: "_memberList_bm3ht_8",
	memberRow: "_memberRow_bm3ht_13",
	roleLabel: "_roleLabel_bm3ht_25"
};
var RoleProjectMembersModal_default = /* @__PURE__ */ __plugin_vue_export_helper_default(RoleProjectMembersModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": RoleProjectMembersModal_vue_vue_type_style_index_0_lang_module_default }]]);
var _hoisted_1$1 = ["onClick"];
var RoleAssignmentsTab_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "RoleAssignmentsTab",
	props: { roleSlug: {} },
	setup(__props) {
		const props = __props;
		const rolesStore = useRolesStore();
		const i18n = useI18n();
		const { state: assignments, isLoading, execute } = useAsyncState(async () => await rolesStore.fetchRoleAssignments(props.roleSlug), {
			projects: [],
			totalProjects: 0
		});
		watch(() => props.roleSlug, async () => await execute());
		const membersModalOpen = ref(false);
		const selectedProject = ref(null);
		const sortColumn = ref("memberCount");
		const sortDirection = ref("desc");
		const sortedProjects = computed(() => {
			return [...assignments.value.projects].sort((a, b) => {
				let cmp = 0;
				if (sortColumn.value === "projectName") cmp = a.projectName.localeCompare(b.projectName);
				else if (sortColumn.value === "memberCount") cmp = a.memberCount - b.memberCount;
				else cmp = (a.lastAssigned ?? "").localeCompare(b.lastAssigned ?? "");
				return sortDirection.value === "desc" ? -cmp : cmp;
			});
		});
		function toggleSort(column) {
			if (sortColumn.value === column) sortDirection.value = sortDirection.value === "asc" ? "desc" : "asc";
			else {
				sortColumn.value = column;
				sortDirection.value = column === "memberCount" ? "desc" : "asc";
			}
		}
		function sortIndicator(column) {
			if (sortColumn.value !== column) return "";
			return sortDirection.value === "asc" ? " ↑" : " ↓";
		}
		function openMembersModal(project) {
			selectedProject.value = project;
			membersModalOpen.value = true;
		}
		function formatDate(dateStr) {
			if (!dateStr) return "—";
			return (0, import_dateformat.default)(new Date(dateStr), "mmm dS, yyyy");
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [unref(isLoading) ? (openBlock(), createBlock(unref(N8nLoading_default), {
				key: 0,
				rows: 3
			})) : unref(assignments).projects.length === 0 ? (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.emptyState)
			}, [createVNode(unref(N8nText_default), { color: "text-light" }, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("projectRoles.assignments.emptyState")), 1)]),
				_: 1
			})], 2)) : (openBlock(), createBlock(unref(TableBase_default), { key: 2 }, {
				default: withCtx(() => [createBaseVNode("thead", null, [createBaseVNode("tr", null, [
					createBaseVNode("th", {
						class: normalizeClass(_ctx.$style.sortableHeader),
						onClick: _cache[0] || (_cache[0] = ($event) => toggleSort("projectName"))
					}, toDisplayString(unref(i18n).baseText("projectRoles.assignments.projectColumn")) + toDisplayString(sortIndicator("projectName")), 3),
					createBaseVNode("th", {
						class: normalizeClass([_ctx.$style.alignRight, _ctx.$style.sortableHeader]),
						onClick: _cache[1] || (_cache[1] = ($event) => toggleSort("memberCount"))
					}, toDisplayString(unref(i18n).baseText("projectRoles.assignments.membersColumn")) + toDisplayString(sortIndicator("memberCount")), 3),
					createBaseVNode("th", {
						class: normalizeClass(_ctx.$style.sortableHeader),
						onClick: _cache[2] || (_cache[2] = ($event) => toggleSort("lastAssigned"))
					}, toDisplayString(unref(i18n).baseText("projectRoles.assignments.lastAssignedColumn")) + toDisplayString(sortIndicator("lastAssigned")), 3)
				])]), createBaseVNode("tbody", null, [(openBlock(true), createElementBlock(Fragment, null, renderList(sortedProjects.value, (project) => {
					return openBlock(), createElementBlock("tr", { key: project.projectId }, [
						createBaseVNode("td", null, [createVNode(unref(RouterLink), {
							to: {
								name: unref(VIEWS).PROJECTS_WORKFLOWS,
								params: { projectId: project.projectId }
							},
							class: normalizeClass(_ctx.$style.projectLink)
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(project.projectName), 1)]),
							_: 2
						}, 1032, ["to", "class"])]),
						createBaseVNode("td", { class: normalizeClass(_ctx.$style.alignRight) }, [createBaseVNode("button", {
							class: normalizeClass(_ctx.$style.memberCountButton),
							onClick: ($event) => openMembersModal(project)
						}, toDisplayString(project.memberCount), 11, _hoisted_1$1)], 2),
						createBaseVNode("td", null, toDisplayString(formatDate(project.lastAssigned)), 1)
					]);
				}), 128))])]),
				_: 1
			})), selectedProject.value ? (openBlock(), createBlock(RoleProjectMembersModal_default, {
				key: 3,
				open: membersModalOpen.value,
				"role-slug": __props.roleSlug,
				"project-id": selectedProject.value.projectId,
				"project-name": selectedProject.value.projectName,
				"onUpdate:open": _cache[3] || (_cache[3] = ($event) => membersModalOpen.value = $event)
			}, null, 8, [
				"open",
				"role-slug",
				"project-id",
				"project-name"
			])) : createCommentVNode("", true)], 2);
		};
	}
});
var RoleAssignmentsTab_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_1r9vx_2",
	emptyState: "_emptyState_1r9vx_6",
	alignRight: "_alignRight_1r9vx_11",
	sortableHeader: "_sortableHeader_1r9vx_15",
	projectLink: "_projectLink_1r9vx_20",
	memberCountButton: "_memberCountButton_1r9vx_29"
};
var RoleAssignmentsTab_default = /* @__PURE__ */ __plugin_vue_export_helper_default(RoleAssignmentsTab_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": RoleAssignmentsTab_vue_vue_type_style_index_0_lang_module_default }]]);
var _hoisted_1 = {
	key: 0,
	class: "mb-l"
};
var _hoisted_2 = { style: { "flex": "1" } };
var _hoisted_3 = {
	key: 1,
	class: "mt-xl"
};
var ProjectRoleView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ProjectRoleView",
	props: { roleSlug: {} },
	setup(__props) {
		const rolesStore = useRolesStore();
		const route = useRoute();
		const router = useRouter();
		const { showError, showMessage } = useToast();
		const i18n = useI18n();
		const message = useMessage();
		const telemetry = useTelemetry();
		const settingsStore = useSettingsStore();
		const props = __props;
		const activeTab = ref(route.query?.tab ?? "permissions");
		watch(activeTab, (newTab) => {
			router.replace({ query: {
				...route.query,
				tab: newTab
			} });
		});
		const tabOptions = computed(() => [{
			label: i18n.baseText("projectRoles.tab.permissions"),
			value: "permissions"
		}, {
			label: i18n.baseText("projectRoles.tab.assignments"),
			value: "assignments"
		}]);
		const cameFromProjectSettings = computed(() => route.query.from === VIEWS.PROJECT_SETTINGS);
		const backButtonText = computed(() => cameFromProjectSettings.value ? i18n.baseText("projectRoles.backToProjectSettings") : i18n.baseText("projectRoles.backToProjectRoles"));
		const onBackClick = () => {
			if (cameFromProjectSettings.value) router.back();
			else router.push({ name: VIEWS.PROJECT_ROLES_SETTINGS });
		};
		const defaultForm = () => ({
			displayName: "",
			description: "",
			scopes: structuredClone(toRaw(rolesStore.processedProjectRoles.find((role) => role.slug === "project:viewer")?.scopes || []))
		});
		const initialState = ref();
		const { state: form, isLoading } = useAsyncState(async () => {
			if (!props.roleSlug) return defaultForm();
			try {
				const role = await rolesStore.fetchRoleBySlug({ slug: props.roleSlug });
				initialState.value = structuredClone(role);
				return {
					displayName: role.displayName,
					description: role.description,
					scopes: role.scopes
				};
			} catch (error) {
				showError(error, "Error fetching role");
				return defaultForm();
			}
		}, defaultForm(), { shallow: false });
		const isReadOnly = computed(() => initialState.value?.systemRole === true || route.name === VIEWS.PROJECT_ROLE_VIEW);
		const hasUnsavedChanges = computed(() => {
			if (!initialState.value) return false;
			if (!(0, import_isEqual.default)(initialState.value.displayName, form.value.displayName)) return true;
			if (!(0, import_isEqual.default)(initialState.value.description ?? null, form.value.description || null)) return true;
			if (!(0, import_isEqual.default)((0, import_sortBy.default)(initialState.value.scopes), (0, import_sortBy.default)(form.value.scopes))) return true;
			return false;
		});
		function resetForm(payload) {
			form.value = payload ? {
				displayName: payload.displayName,
				description: payload.description,
				scopes: payload.scopes
			} : defaultForm();
		}
		const scopeTypes = computed(() => {
			if (!settingsStore.moduleSettings["external-secrets"]?.roleBasedAccess) return SCOPE_TYPES.filter((type) => type !== "externalSecretsProvider" && type !== "externalSecret");
			return SCOPE_TYPES;
		});
		const scopes = SCOPES;
		function toggleScope(scope) {
			const index = form.value.scopes.indexOf(scope);
			const isBeingAdded = index === -1;
			if (index !== -1) form.value.scopes.splice(index, 1);
			else form.value.scopes.push(scope);
			if (scope.startsWith("dataTable:") && scope.endsWith(":read")) {
				toggleScope(scope.replace(":read", ":listProject"));
				return;
			}
			if (scope.endsWith(":read")) toggleScope(scope.replace(":read", ":list"));
			if (scope === "workflow:execute" && isBeingAdded) {
				if (!form.value.scopes.includes("workflow:read")) toggleScope("workflow:read");
			}
			if (scope === "workflow:read" && !isBeingAdded) {
				if (form.value.scopes.includes("workflow:execute")) toggleScope("workflow:execute");
			}
		}
		async function createProjectRole() {
			try {
				const role = await rolesStore.createProjectRole({
					...form.value,
					description: form.value.description ?? void 0,
					roleType: "project"
				});
				rolesStore.fetchRoles();
				telemetry.track("User successfully created new role", {
					role_id: role.slug,
					role_name: role.displayName,
					permissions: role.scopes
				});
				router.replace({
					name: VIEWS.PROJECT_ROLE_SETTINGS,
					params: { roleSlug: role.slug }
				});
				showMessage({
					type: "success",
					message: i18n.baseText("projectRoles.action.create.success")
				});
				initialState.value = structuredClone(role);
				return role;
			} catch (error) {
				showError(error, i18n.baseText("projectRoles.action.create.error"));
				return;
			}
		}
		async function confirmRoleUpdate(usedByUsers) {
			if (!usedByUsers) return true;
			return await message.confirm(i18n.baseText("projectRoles.action.update.text", { interpolate: { count: usedByUsers } }), i18n.baseText("projectRoles.action.update.title", { interpolate: { count: usedByUsers } }), {
				type: "warning",
				confirmButtonText: i18n.baseText("projectRoles.action.update"),
				cancelButtonText: i18n.baseText("projectRoles.action.cancel")
			}) === MODAL_CONFIRM;
		}
		async function updateProjectRole(slug) {
			if (!await confirmRoleUpdate(initialState?.value?.usedByUsers)) return;
			try {
				const role = await rolesStore.updateProjectRole(slug, {
					...form.value,
					description: form.value.description ?? void 0
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
					message: i18n.baseText("projectRoles.action.update.success")
				});
				return role;
			} catch (error) {
				showError(error, i18n.baseText("projectRoles.action.update.error"));
				return;
			}
		}
		async function handleSubmit() {
			if (props.roleSlug) await updateProjectRole(props.roleSlug);
			else await createProjectRole();
		}
		function setPreset(slug) {
			const preset = rolesStore.processedProjectRoles.find((role) => role.slug === slug);
			if (!preset) return;
			form.value.scopes = structuredClone(toRaw(preset.scopes));
		}
		async function deleteRole() {
			if (!initialState?.value) return;
			if (await message.confirm(i18n.baseText("projectRoles.action.delete.text", { interpolate: { roleName: initialState.value.displayName } }), i18n.baseText("projectRoles.action.delete.title", { interpolate: { roleName: initialState.value.displayName } }), {
				type: "warning",
				confirmButtonText: i18n.baseText("projectRoles.action.delete"),
				cancelButtonText: i18n.baseText("projectRoles.action.cancel")
			}) !== "confirm") return;
			telemetry.track("User clicked delete role", {
				role_id: initialState.value.slug,
				role_name: initialState.value.displayName,
				permissions: initialState.value?.scopes
			});
			try {
				await rolesStore.deleteProjectRole(initialState.value.slug);
				const index = rolesStore.roles.project.findIndex((role) => role.slug === initialState.value?.slug);
				if (index !== -1) rolesStore.roles.project.splice(index, 1);
				showMessage({
					title: i18n.baseText("projectRoles.action.delete.success"),
					type: "success"
				});
				telemetry.track("User successfully deleted role", {
					role_id: initialState.value.slug,
					role_name: initialState.value.displayName,
					permissions: initialState.value?.scopes
				});
				router.back();
			} catch (error) {
				showError(error, i18n.baseText("projectRoles.action.delete.error"));
				return;
			}
		}
		const displayNameValidationRules = [{ name: "REQUIRED" }, {
			name: "MIN_LENGTH",
			config: { minimum: 2 }
		}];
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(["pb-xl", _ctx.$style.container]) }, [
				createVNode(unref(N8nButton_default), {
					variant: "ghost",
					icon: "arrow-left",
					class: normalizeClass(_ctx.$style.backButton),
					text: "",
					onClick: onBackClick
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(backButtonText.value), 1)]),
					_: 1
				}, 8, ["class"]),
				createBaseVNode("div", { class: normalizeClass(["mb-xl", _ctx.$style.headerContainer]) }, [createVNode(unref(N8nHeading_default), {
					tag: "h1",
					size: "2xlarge"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(__props.roleSlug ? `Role "${unref(form).displayName}"` : unref(i18n).baseText("projectRoles.newRole")), 1)]),
					_: 1
				}), initialState.value && !isReadOnly.value && !unref(isLoading) ? (openBlock(), createElementBlock("div", {
					key: 0,
					class: normalizeClass(_ctx.$style.headerActions)
				}, [createVNode(unref(N8nButton_default), {
					variant: "subtle",
					disabled: !hasUnsavedChanges.value,
					onClick: _cache[0] || (_cache[0] = ($event) => resetForm(initialState.value))
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("projectRoles.discardChanges")), 1)]),
					_: 1
				}, 8, ["disabled"]), createVNode(unref(N8nButton_default), {
					disabled: !hasUnsavedChanges.value,
					onClick: handleSubmit
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("projectRoles.save")), 1)]),
					_: 1
				}, 8, ["disabled"])], 2)) : !__props.roleSlug ? (openBlock(), createBlock(unref(N8nButton_default), {
					key: 1,
					onClick: handleSubmit
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("projectRoles.create")), 1)]),
					_: 1
				})) : createCommentVNode("", true)], 2),
				createBaseVNode("div", { class: normalizeClass(["mb-l", _ctx.$style.formContainer]) }, [isReadOnly.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createVNode(unref(N8nFormInput_default), {
					modelValue: unref(form).displayName,
					"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(form).displayName = $event),
					label: unref(i18n).baseText("projectRoles.roleName"),
					class: "mb-s",
					"show-required-asterisk": "",
					required: ""
				}, {
					default: withCtx(() => [createVNode(unref(N8nTooltip_default), {
						content: unref(i18n).baseText("projectRoles.systemRoleNotEditable"),
						placement: "top"
					}, {
						default: withCtx(() => [createVNode(unref(Input_default), {
							modelValue: unref(form).displayName,
							"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(form).displayName = $event),
							maxlength: 100,
							disabled: ""
						}, null, 8, ["modelValue"])]),
						_: 1
					}, 8, ["content"])]),
					_: 1
				}, 8, ["modelValue", "label"]), createVNode(unref(N8nFormInput_default), {
					modelValue: unref(form).description,
					"onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => unref(form).description = $event),
					label: unref(i18n).baseText("projectRoles.description")
				}, {
					default: withCtx(() => [createVNode(unref(N8nTooltip_default), {
						content: unref(i18n).baseText("projectRoles.systemRoleNotEditable"),
						placement: "top"
					}, {
						default: withCtx(() => [createVNode(unref(Input_default), {
							modelValue: unref(form).description,
							"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => unref(form).description = $event),
							type: "textarea",
							placeholder: unref(i18n).baseText("projectRoles.optional"),
							maxlength: 500,
							autosize: {
								minRows: 2,
								maxRows: 4
							},
							disabled: ""
						}, null, 8, ["modelValue", "placeholder"])]),
						_: 1
					}, 8, ["content"])]),
					_: 1
				}, 8, ["modelValue", "label"])], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createVNode(unref(N8nFormInput_default), {
					modelValue: unref(form).displayName,
					"onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => unref(form).displayName = $event),
					label: unref(i18n).baseText("projectRoles.roleName"),
					"validate-on-blur": "",
					"validation-rules": displayNameValidationRules,
					class: "mb-s",
					"show-required-asterisk": "",
					required: "",
					maxlength: 100
				}, null, 8, ["modelValue", "label"]), createVNode(unref(N8nFormInput_default), {
					modelValue: unref(form).description,
					"onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => unref(form).description = $event),
					label: unref(i18n).baseText("projectRoles.description"),
					placeholder: unref(i18n).baseText("projectRoles.optional"),
					type: "textarea",
					maxlength: 500,
					autosize: {
						minRows: 2,
						maxRows: 4
					}
				}, null, 8, [
					"modelValue",
					"label",
					"placeholder"
				])], 64))], 2),
				__props.roleSlug ? (openBlock(), createElementBlock("div", _hoisted_1, [createVNode(unref(N8nTabs_default), {
					modelValue: activeTab.value,
					"onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => activeTab.value = $event),
					options: tabOptions.value
				}, null, 8, ["modelValue", "options"])])) : createCommentVNode("", true),
				withDirectives(createBaseVNode("div", null, [
					!isReadOnly.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createVNode(unref(N8nText_default), {
						color: "text-light",
						class: "mb-2xs",
						tag: "p"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("projectRoles.preset")), 1)]),
						_: 1
					}), createBaseVNode("div", { class: normalizeClass(["mb-s", _ctx.$style.presetsContainer]) }, [
						createVNode(unref(N8nButton_default), {
							variant: "subtle",
							onClick: _cache[8] || (_cache[8] = ($event) => setPreset("project:admin"))
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("projectRoles.admin")), 1)]),
							_: 1
						}),
						createVNode(unref(N8nButton_default), {
							variant: "subtle",
							onClick: _cache[9] || (_cache[9] = ($event) => setPreset("project:editor"))
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("projectRoles.editor")), 1)]),
							_: 1
						}),
						createVNode(unref(N8nButton_default), {
							variant: "subtle",
							onClick: _cache[10] || (_cache[10] = ($event) => setPreset("project:viewer"))
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("projectRoles.viewer")), 1)]),
							_: 1
						})
					], 2)], 64)) : createCommentVNode("", true),
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardContainer) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(scopeTypes.value, (type) => {
						return openBlock(), createElementBlock("div", {
							key: type,
							class: normalizeClass(["mb-s mt-s", _ctx.$style.card])
						}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.cardTitle) }, toDisplayString(unref(i18n).baseText(`projectRoles.type.${type}`)), 3), createBaseVNode("div", _hoisted_2, [unref(isLoading) ? (openBlock(), createBlock(unref(N8nLoading_default), {
							key: 0,
							rows: unref(scopes)[type].length,
							"shrink-last": false
						}, null, 8, ["rows"])) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(unref(scopes)[type], (scope) => {
							return openBlock(), createElementBlock("div", {
								key: scope,
								class: "mb-2xs"
							}, [createVNode(unref(N8nTooltip_default), {
								content: unref(i18n).baseText(`projectRoles.${scope}.tooltip`),
								placement: "right",
								enterable: false,
								"show-after": 250
							}, {
								default: withCtx(() => [createVNode(unref(N8nFormInput_default), {
									"data-test-id": `scope-checkbox-${scope}`,
									"model-value": unref(form).scopes.includes(scope),
									label: unref(i18n).baseText(`projectRoles.${scope}`),
									"validate-on-blur": "",
									type: "checkbox",
									class: normalizeClass(_ctx.$style.checkbox),
									disabled: isReadOnly.value,
									"onUpdate:modelValue": () => toggleScope(scope)
								}, null, 8, [
									"data-test-id",
									"model-value",
									"label",
									"class",
									"disabled",
									"onUpdate:modelValue"
								])]),
								_: 2
							}, 1032, ["content"])]);
						}), 128))])], 2);
					}), 128))], 2),
					__props.roleSlug && !isReadOnly.value ? (openBlock(), createElementBlock("div", _hoisted_3, [
						createVNode(unref(N8nHeading_default), {
							tag: "h2",
							class: "mb-2xs",
							size: "large"
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("projectRoles.dangerZone")), 1)]),
							_: 1
						}),
						createVNode(unref(N8nText_default), {
							tag: "p",
							class: "mb-s"
						}, {
							default: withCtx(() => [initialState.value?.usedByProjects ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
								createTextVNode(toDisplayString(unref(i18n).baseText("projectRoles.action.delete.useWarning.before")) + " ", 1),
								createBaseVNode("a", {
									class: normalizeClass(_ctx.$style.assignmentsLink),
									onClick: _cache[11] || (_cache[11] = ($event) => activeTab.value = "assignments")
								}, toDisplayString(unref(i18n).baseText("projectRoles.action.delete.useWarning.linkText", {
									adjustToNumber: initialState.value.usedByProjects,
									interpolate: { count: initialState.value.usedByProjects }
								})), 3),
								createTextVNode(". " + toDisplayString(unref(i18n).baseText("projectRoles.action.delete.useWarning.after")), 1)
							], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createTextVNode(toDisplayString(unref(i18n).baseText("projectRoles.action.delete.warning")), 1)], 64))]),
							_: 1
						}),
						createVNode(unref(N8nButton_default), {
							variant: "destructive",
							disabled: Boolean(initialState.value?.usedByProjects),
							onClick: deleteRole
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("projectRoles.action.delete.button")), 1)]),
							_: 1
						}, 8, ["disabled"])
					])) : createCommentVNode("", true)
				], 512), [[vShow, !__props.roleSlug || activeTab.value === "permissions"]]),
				__props.roleSlug && activeTab.value === "assignments" ? (openBlock(), createBlock(RoleAssignmentsTab_default, {
					key: 1,
					"role-slug": __props.roleSlug
				}, null, 8, ["role-slug"])) : createCommentVNode("", true)
			], 2);
		};
	}
});
var ProjectRoleView_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_1sfyd_2",
	cardContainer: "_cardContainer_1sfyd_9",
	card: "_card_1sfyd_9",
	cardTitle: "_cardTitle_1sfyd_28",
	backButton: "_backButton_1sfyd_32",
	headerContainer: "_headerContainer_1sfyd_38",
	headerActions: "_headerActions_1sfyd_45",
	formContainer: "_formContainer_1sfyd_51",
	presetsContainer: "_presetsContainer_1sfyd_55",
	checkbox: "_checkbox_1sfyd_60",
	assignmentsLink: "_assignmentsLink_1sfyd_68"
};
var ProjectRoleView_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ProjectRoleView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ProjectRoleView_vue_vue_type_style_index_0_lang_module_default }]]);
export { ProjectRoleView_default as default };
