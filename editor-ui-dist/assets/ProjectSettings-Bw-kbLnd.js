import { C as computed, D as createElementBlock, E as createCommentVNode, G as nextTick, Gt as unref, I as guardReactiveProps, It as ref, M as createVNode, P as defineComponent, Sn as toDisplayString, T as createBlock, U as mergeModels, Z as onMounted, _n as normalizeClass, _t as watch, bt as withCtx, et as openBlock, ft as useModel, h as withModifiers, j as createTextVNode, q as onBeforeMount, vn as normalizeProps, w as createBaseVNode } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { _t as I18nT, gt as useI18n, rt as useDebounceFn } from "./_MapCache-pT3vKw8Z.js";
import { $ as N8nActionToggle_default, B as N8nFormInput_default, Ct as N8nInput_default, In as N8nText_default, Ln as N8nButton_default, Y as N8nInputLabel_default, d as N8nUserSelect_default, l as N8nIconPicker_default, p as N8nUserInfo_default, s as N8nDataTableServer_default, tt as N8nActionDropdown_default, zn as N8nIcon_default } from "./src-BmrdBtCN.js";
import "./en-BYTsM8fR.js";
import "./preload-helper-CR0ecmWK.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { b as useRouter } from "./truncate-1c7Iwk7N.js";
import "./icon-mgEZlgYz.js";
import "./overlay-DxjKgl5T.js";
import "./empty-RTEMfF4N.js";
import { t as ElRadio } from "./radio-D_9iFkwT.js";
import { t as ElDialog } from "./dialog-CzxM5dHR.js";
import { En as useProjectsStore, Tn as useDocumentTitle, er as useUsersStore, sr as isProjectRole, t as useTelemetry } from "./useTelemetry-C2EhNQhN.js";
import { t as useToast } from "./useToast-C8xM63lB.js";
import "./sanitize-html-Cfxibw1n.js";
import "./path-browserify-CTmc1OxV.js";
import { Hi as deepCopy, mo as VIEWS } from "./constants-C_oOJnqT.js";
import "./merge-DCUiz6nU.js";
import "./dateformat-D7TIhVd4.js";
import "./useDebounce-DyoINrYS.js";
import "./useExternalHooks-CE2Rdzfk.js";
import { t as useCloudPlanStore } from "./cloudPlan.store-Dw9c9iy4.js";
import "./folders.store-Cwp_DTVT.js";
import "./versions.store-DbkVHo9d.js";
import { t as usePageRedirectionHelper } from "./usePageRedirectionHelper-BOaFWroN.js";
import { n as isIconOrEmoji } from "./ProjectIcon-BYB-pK6e.js";
import "./orderBy-BTQ4q55E.js";
import { t as ProjectSharing_default } from "./ProjectSharing-C7uZgDYB.js";
import { t as useRolesStore } from "./roles.store-Cht5fHcq.js";
import "./readyToRunWorkflowsV2.store-DpzmixIa.js";
import { t as ProjectHeader_default } from "./ProjectHeader-DEFzma1m.js";
var _hoisted_1$4 = { key: 1 };
var _hoisted_2$1 = { class: "pt-l" };
var ProjectDeleteDialog_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ProjectDeleteDialog",
	props: /* @__PURE__ */ mergeModels({
		currentProject: {},
		projects: {},
		resourceCounts: {}
	}, {
		"modelValue": { type: Boolean },
		"modelModifiers": {}
	}),
	emits: /* @__PURE__ */ mergeModels(["confirmDelete"], ["update:modelValue"]),
	setup(__props, { emit: __emit }) {
		const props = __props;
		const visible = useModel(__props, "modelValue");
		const emit = __emit;
		const locale = useI18n();
		const selectedProject = ref(null);
		const operation$1 = ref(null);
		const wipeConfirmText = ref("");
		const hasMovableResources = computed(() => props.resourceCounts.credentials + props.resourceCounts.workflows + props.resourceCounts.dataTables > 0);
		const isValid = computed(() => {
			const expectedWipeConfirmation = locale.baseText("projects.settings.delete.question.wipe.placeholder");
			return !hasMovableResources.value || operation$1.value === "transfer" && !!selectedProject.value || operation$1.value === "wipe" && wipeConfirmText.value === expectedWipeConfirmation;
		});
		const onDelete = () => {
			if (!isValid.value) return;
			if (operation$1.value === "wipe") selectedProject.value = null;
			emit("confirmDelete", selectedProject.value?.id);
		};
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(ElDialog), {
				modelValue: visible.value,
				"onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => visible.value = $event),
				title: unref(locale).baseText("projects.settings.delete.title", { interpolate: { projectName: props.currentProject?.name ?? "" } }),
				width: "650"
			}, {
				footer: withCtx(() => [createVNode(unref(N8nButton_default), {
					type: "danger",
					"native-type": "button",
					disabled: !isValid.value,
					"data-test-id": "project-settings-delete-confirm-button",
					onClick: withModifiers(onDelete, ["stop", "prevent"])
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("projects.settings.danger.deleteProject")), 1)]),
					_: 1
				}, 8, ["disabled"])]),
				default: withCtx(() => [!hasMovableResources.value ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					color: "text-base"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("projects.settings.delete.message.empty")), 1)]),
					_: 1
				})) : hasMovableResources.value ? (openBlock(), createElementBlock("div", _hoisted_1$4, [createVNode(unref(N8nText_default), { color: "text-base" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("projects.settings.delete.message")), 1)]),
					_: 1
				}), createBaseVNode("div", _hoisted_2$1, [
					createVNode(unref(ElRadio), {
						"model-value": operation$1.value ?? "",
						label: "transfer",
						class: "mb-s",
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => operation$1.value = "transfer")
					}, {
						default: withCtx(() => [createVNode(unref(N8nText_default), { color: "text-dark" }, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("projects.settings.delete.question.transfer.label")), 1)]),
							_: 1
						})]),
						_: 1
					}, 8, ["model-value"]),
					operation$1.value === "transfer" ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.operation)
					}, [createVNode(unref(N8nText_default), { color: "text-dark" }, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("projects.settings.delete.question.transfer.title")), 1)]),
						_: 1
					}), createVNode(ProjectSharing_default, {
						modelValue: selectedProject.value,
						"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => selectedProject.value = $event),
						class: "pt-2xs",
						projects: props.projects,
						"empty-options-text": unref(locale).baseText("projects.sharing.noMatchingProjects")
					}, null, 8, [
						"modelValue",
						"projects",
						"empty-options-text"
					])], 2)) : createCommentVNode("", true),
					createVNode(unref(ElRadio), {
						"model-value": operation$1.value ?? "",
						label: "wipe",
						class: "mb-s",
						"onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => operation$1.value = "wipe")
					}, {
						default: withCtx(() => [createVNode(unref(N8nText_default), { color: "text-dark" }, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("projects.settings.delete.question.wipe.label")), 1)]),
							_: 1
						})]),
						_: 1
					}, 8, ["model-value"]),
					operation$1.value === "wipe" ? (openBlock(), createElementBlock("div", {
						key: 1,
						class: normalizeClass(_ctx.$style.operation)
					}, [createVNode(unref(N8nInputLabel_default), { label: unref(locale).baseText("projects.settings.delete.question.wipe.title") }, {
						default: withCtx(() => [createVNode(unref(N8nInput_default), {
							modelValue: wipeConfirmText.value,
							"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => wipeConfirmText.value = $event),
							"data-test-id": "project-delete-confirm-input",
							placeholder: unref(locale).baseText("projects.settings.delete.question.wipe.placeholder")
						}, null, 8, ["modelValue", "placeholder"])]),
						_: 1
					}, 8, ["label"])], 2)) : createCommentVNode("", true)
				])])) : createCommentVNode("", true)]),
				_: 1
			}, 8, ["modelValue", "title"]);
		};
	}
});
var ProjectDeleteDialog_vue_vue_type_style_index_0_lang_module_default = { operation: "_operation_12mti_123" };
var ProjectDeleteDialog_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ProjectDeleteDialog_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ProjectDeleteDialog_vue_vue_type_style_index_0_lang_module_default }]]);
var _hoisted_1$3 = { class: "pt-l" };
var ProjectRoleUpgradeDialog_default = /* @__PURE__ */ defineComponent({
	__name: "ProjectRoleUpgradeDialog",
	props: /* @__PURE__ */ mergeModels({
		limit: {},
		planName: {}
	}, {
		"modelValue": { type: Boolean },
		"modelModifiers": {}
	}),
	emits: ["update:modelValue"],
	setup(__props) {
		const props = __props;
		const visible = useModel(__props, "modelValue");
		const pageRedirectionHelper = usePageRedirectionHelper();
		const locale = useI18n();
		const goToUpgrade = async () => {
			await pageRedirectionHelper.goToUpgrade("rbac", "upgrade-rbac");
			visible.value = false;
		};
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(ElDialog), {
				modelValue: visible.value,
				"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => visible.value = $event),
				title: unref(locale).baseText("projects.settings.role.upgrade.title"),
				width: "500"
			}, {
				footer: withCtx(() => [createVNode(unref(N8nButton_default), {
					type: "secondary",
					"native-type": "button",
					onClick: _cache[0] || (_cache[0] = ($event) => visible.value = false)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("generic.cancel")), 1)]),
					_: 1
				}), createVNode(unref(N8nButton_default), {
					type: "primary",
					"native-type": "button",
					onClick: goToUpgrade
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("projects.create.limitReached.link")), 1)]),
					_: 1
				})]),
				default: withCtx(() => [createBaseVNode("div", _hoisted_1$3, [createVNode(unref(I18nT), {
					keypath: "projects.settings.role.upgrade.message",
					scope: "global"
				}, {
					planName: withCtx(() => [createTextVNode(toDisplayString(props.planName), 1)]),
					limit: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("projects.create.limit", {
						adjustToNumber: props.limit,
						interpolate: { count: String(props.limit) }
					})), 1)]),
					_: 1
				})])]),
				_: 1
			}, 8, ["modelValue", "title"]);
		};
	}
});
var ProjectMembersActionsCell_default = /* @__PURE__ */ defineComponent({
	__name: "ProjectMembersActionsCell",
	props: {
		data: {},
		actions: {}
	},
	emits: ["action"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const onAction = (action) => {
			emit("action", {
				action,
				userId: props.data.id
			});
		};
		return (_ctx, _cache) => {
			return props.actions.length > 0 ? (openBlock(), createBlock(unref(N8nActionToggle_default), {
				key: 0,
				placement: "bottom",
				actions: props.actions,
				theme: "dark",
				onAction
			}, null, 8, ["actions"])) : createCommentVNode("", true);
		};
	}
});
var _hoisted_1$2 = { key: 1 };
var ProjectMembersRoleCell_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ProjectMembersRoleCell",
	props: {
		data: {},
		roles: {},
		actions: {}
	},
	emits: ["update:role", "badge-click"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const selectedRole = computed(() => props.roles.find((role) => role.slug === props.data.role));
		const isEditable = computed(() => props.data.role !== "project:personalOwner");
		const onActionSelect = (role) => {
			emit("update:role", {
				role,
				userId: props.data.id
			});
		};
		return (_ctx, _cache) => {
			return isEditable.value ? (openBlock(), createBlock(unref(N8nActionDropdown_default), {
				key: 0,
				placement: "bottom-start",
				items: props.actions,
				"max-height": 280,
				"data-test-id": "project-member-role-dropdown",
				onSelect: onActionSelect,
				onBadgeClick: _cache[0] || (_cache[0] = ($event) => emit("badge-click", $event))
			}, {
				activator: withCtx(() => [createBaseVNode("button", {
					class: normalizeClass(_ctx.$style.roleLabel),
					type: "button"
				}, [createVNode(unref(N8nText_default), { color: "text-dark" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(selectedRole.value?.displayName), 1)]),
					_: 1
				}), createVNode(unref(N8nIcon_default), {
					color: "text-dark",
					icon: "chevron-down",
					size: "large"
				})], 2)]),
				menuItem: withCtx((item) => [createVNode(unref(ElRadio), {
					"model-value": selectedRole.value?.slug,
					label: item.id,
					disabled: item.disabled
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
						default: withCtx(() => [createTextVNode(toDisplayString(item.description), 1)]),
						_: 2
					}, 1024)], 2)]),
					_: 2
				}, 1032, [
					"model-value",
					"label",
					"disabled"
				])]),
				_: 1
			}, 8, ["items"])) : (openBlock(), createElementBlock("span", _hoisted_1$2, toDisplayString(selectedRole.value?.displayName), 1));
		};
	}
});
var ProjectMembersRoleCell_vue_vue_type_style_index_0_lang_module_default = {
	roleLabel: "_roleLabel_3ta9s_123",
	radioLabel: "_radioLabel_3ta9s_133"
};
var ProjectMembersRoleCell_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ProjectMembersRoleCell_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ProjectMembersRoleCell_vue_vue_type_style_index_0_lang_module_default }]]);
var _hoisted_1$1 = { class: "pt-xs pb-xs" };
var ProjectMembersTable_default = /* @__PURE__ */ defineComponent({
	__name: "ProjectMembersTable",
	props: /* @__PURE__ */ mergeModels({
		data: {},
		loading: { type: Boolean },
		currentUserId: {},
		projectRoles: {},
		actions: {}
	}, {
		"tableOptions": { default: () => ({
			page: 0,
			itemsPerPage: 10,
			sortBy: []
		}) },
		"tableOptionsModifiers": {}
	}),
	emits: /* @__PURE__ */ mergeModels([
		"update:options",
		"update:role",
		"action",
		"show-upgrade-dialog"
	], ["update:tableOptions"]),
	setup(__props, { emit: __emit }) {
		const i18n = useI18n();
		const props = __props;
		const emit = __emit;
		const tableOptions = useModel(__props, "tableOptions");
		const rows = computed(() => props.data.items);
		const headers = ref([
			{
				title: i18n.baseText("projects.settings.table.header.user"),
				key: "name",
				width: 400,
				disableSort: true,
				value: (row) => row
			},
			{
				title: i18n.baseText("projects.settings.table.header.role"),
				key: "role",
				disableSort: true
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
		const roleActions = computed(() => props.projectRoles.map((role) => ({
			id: role.slug,
			label: role.displayName,
			disabled: !role.licensed,
			description: role.description ?? void 0,
			badge: !role.licensed ? i18n.baseText("generic.upgrade") : void 0,
			badgeProps: !role.licensed ? {
				theme: "warning",
				bold: true
			} : void 0
		})));
		const canUpdateRole = (member) => member.id !== props.currentUserId;
		const onRoleChange = ({ role, userId }) => {
			emit("update:role", {
				role,
				userId
			});
		};
		const filterActions = (member) => {
			if (member.id === props.currentUserId || member.role === "project:personalOwner") return [];
			return (props.actions ?? []).filter((action) => action.guard?.(member) ?? true);
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", null, [createVNode(unref(N8nDataTableServer_default), {
				"sort-by": tableOptions.value.sortBy,
				"onUpdate:sortBy": _cache[2] || (_cache[2] = ($event) => tableOptions.value.sortBy = $event),
				page: tableOptions.value.page,
				"onUpdate:page": _cache[3] || (_cache[3] = ($event) => tableOptions.value.page = $event),
				"items-per-page": _ctx.data.count,
				headers: headers.value,
				items: rows.value,
				"items-length": _ctx.data.count,
				loading: _ctx.loading,
				"page-sizes": [_ctx.data.count + 1],
				"onUpdate:options": _cache[4] || (_cache[4] = ($event) => emit("update:options", $event))
			}, {
				[`item.name`]: withCtx(({ value }) => [createBaseVNode("div", _hoisted_1$1, [createVNode(unref(N8nUserInfo_default), normalizeProps(guardReactiveProps(value)), null, 16)])]),
				[`item.role`]: withCtx(({ item }) => [canUpdateRole(item) ? (openBlock(), createBlock(ProjectMembersRoleCell_default, {
					key: 0,
					data: item,
					roles: props.projectRoles,
					actions: roleActions.value,
					"onUpdate:role": onRoleChange,
					onBadgeClick: _cache[0] || (_cache[0] = ($event) => emit("show-upgrade-dialog"))
				}, null, 8, [
					"data",
					"roles",
					"actions"
				])) : (openBlock(), createBlock(unref(N8nText_default), {
					key: 1,
					color: "text-dark"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(props.projectRoles.find((role) => role.slug === item.role)?.displayName ?? item.role), 1)]),
					_: 2
				}, 1024))]),
				[`item.actions`]: withCtx(({ item }) => [createVNode(ProjectMembersActionsCell_default, {
					data: item,
					actions: filterActions(item),
					onAction: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("action", $event))
				}, null, 8, ["data", "actions"])]),
				_: 2
			}, 1032, [
				"sort-by",
				"page",
				"items-per-page",
				"headers",
				"items",
				"items-length",
				"loading",
				"page-sizes"
			])]);
		};
	}
});
var _hoisted_1 = { for: "projectName" };
var _hoisted_2 = { for: "projectDescription" };
var _hoisted_3 = { for: "projectMembers" };
var _hoisted_4 = { class: "mb-m" };
var SEARCH_THRESHOLD = 10;
var ProjectSettings_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ProjectSettings",
	setup(__props) {
		const usersStore = useUsersStore();
		const i18n = useI18n();
		const projectsStore = useProjectsStore();
		const rolesStore = useRolesStore();
		const cloudPlanStore = useCloudPlanStore();
		const toast = useToast();
		const router = useRouter();
		const telemetry = useTelemetry();
		const documentTitle = useDocumentTitle();
		const showSaveError = (error) => {
			toast.showError(error, i18n.baseText("projects.settings.save.error.title"));
		};
		const dialogVisible = ref(false);
		const upgradeDialogVisible = ref(false);
		const isDirty = ref(false);
		const isValid = ref(false);
		const resourceCounts = ref({
			credentials: -1,
			dataTables: -1,
			workflows: -1
		});
		const formData = ref({
			name: "",
			description: "",
			relations: []
		});
		const suppressNextSync = ref(false);
		const nameInput = ref(null);
		const projectIcon = ref({
			type: "icon",
			value: "layers"
		});
		const search$1 = ref("");
		const membersTableState = ref({
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
		const usersList = computed(() => usersStore.allUsers.filter((user) => {
			return !(formData.value.relations || []).find((r) => r.id === user.id);
		}));
		const projects = computed(() => projectsStore.availableProjects.filter((project) => project.id !== projectsStore.currentProjectId));
		const firstLicensedRole = computed(() => rolesStore.processedProjectRoles.find((role) => role.licensed)?.slug);
		const projectMembersActions = computed(() => [{
			label: i18n.baseText("projects.settings.table.row.removeUser"),
			value: "remove",
			guard: (member) => member.id !== usersStore.currentUser?.id && member.role !== "project:personalOwner"
		}]);
		const onAddMember = async (userId) => {
			if (!projectsStore.currentProject) return;
			if (!usersStore.usersById[userId]) return;
			const role = firstLicensedRole.value;
			if (!role) return;
			if (!formData.value.relations.find((r) => r.id === userId)) formData.value.relations.push({
				id: userId,
				role
			});
			try {
				suppressNextSync.value = true;
				await projectsStore.addMember(projectsStore.currentProject.id, {
					userId,
					role
				});
				toast.showMessage({
					type: "success",
					title: i18n.baseText("projects.settings.member.added.title")
				});
				telemetry.track("User added member to project", {
					project_id: projectsStore.currentProject.id,
					target_user_id: userId,
					role
				});
			} catch (error) {
				formData.value.relations = formData.value.relations.filter((r) => r.id !== userId);
				showSaveError(error);
			}
		};
		const onUpdateMemberRole = async ({ userId, role }) => {
			if (!projectsStore.currentProject) return;
			const memberIndex = formData.value.relations.findIndex((r) => r.id === userId);
			if (memberIndex === -1) return;
			const originalRole = formData.value.relations[memberIndex].role;
			formData.value.relations[memberIndex].role = role;
			try {
				suppressNextSync.value = true;
				await projectsStore.updateMemberRole(projectsStore.currentProject.id, userId, role);
				rolesStore.fetchRoles();
				toast.showMessage({
					type: "success",
					title: i18n.baseText("projects.settings.memberRole.updated.title")
				});
				telemetry.track("User changed member role on project", {
					project_id: projectsStore.currentProject.id,
					target_user_id: userId,
					role
				});
			} catch (error) {
				formData.value.relations[memberIndex].role = originalRole;
				toast.showError(error, i18n.baseText("projects.settings.memberRole.update.error.title"));
			}
		};
		const onTextInput = () => {
			isDirty.value = true;
		};
		async function onRemoveMember(userId) {
			const current = projectsStore.currentProject;
			if (!current) return;
			const idx = formData.value.relations.findIndex((r) => r.id === userId);
			if (idx === -1) return;
			const removed = formData.value.relations.splice(idx, 1)[0];
			if (!current.relations.some((r) => r.id === userId)) return;
			try {
				suppressNextSync.value = true;
				await projectsStore.removeMember(current.id, userId);
				toast.showMessage({
					type: "success",
					title: i18n.baseText("projects.settings.member.removed.title")
				});
				telemetry.track("User removed member from project", {
					project_id: current.id,
					target_user_id: userId
				});
			} catch (error) {
				formData.value.relations.splice(idx, 0, removed);
				showSaveError(error);
			}
		}
		const onMembersListAction = async ({ action, userId }) => {
			switch (action) {
				case "remove":
					await onRemoveMember(userId);
					break;
				default: break;
			}
		};
		const resetFormData = () => {
			formData.value.relations = projectsStore.currentProject?.relations ? deepCopy(projectsStore.currentProject.relations) : [];
			formData.value.name = projectsStore.currentProject?.name ?? "";
			formData.value.description = projectsStore.currentProject?.description ?? "";
		};
		const onCancel = () => {
			resetFormData();
			isDirty.value = false;
		};
		const makeFormDataDiff = () => {
			const diff = {};
			if (!projectsStore.currentProject) return diff;
			if (formData.value.name !== projectsStore.currentProject.name) diff.name = formData.value.name ?? "";
			if (formData.value.description !== projectsStore.currentProject.description) diff.description = formData.value.description ?? "";
			if (formData.value.relations.length !== projectsStore.currentProject.relations.length) {
				diff.memberAdded = formData.value.relations.filter((r) => !projectsStore.currentProject?.relations.find((cr) => cr.id === r.id));
				diff.memberRemoved = projectsStore.currentProject.relations.filter((cr) => !formData.value.relations.find((r) => r.id === cr.id));
			}
			diff.role = formData.value.relations.filter((r) => {
				return (projectsStore.currentProject?.relations.find((cr) => cr.id === r.id))?.role !== r.role && !diff.memberAdded?.find((ar) => ar.id === r.id);
			});
			return diff;
		};
		const sendTelemetry = (diff) => {
			const projectId = projectsStore.currentProject?.id;
			if (diff.name) telemetry.track("User changed project name", {
				project_id: projectId,
				name: diff.name
			});
			diff.memberAdded?.forEach((r) => {
				telemetry.track("User added member to project", {
					project_id: projectId,
					target_user_id: r.id,
					role: r.role
				});
			});
			diff.memberRemoved?.forEach((r) => {
				telemetry.track("User removed member from project", {
					project_id: projectId,
					target_user_id: r.id
				});
			});
			diff.role?.forEach((r) => {
				telemetry.track("User changed member role on project", {
					project_id: projectId,
					target_user_id: r.id,
					role: r.role
				});
			});
		};
		const updateProject = async () => {
			if (!projectsStore.currentProject) return;
			try {
				await projectsStore.updateProject(projectsStore.currentProject.id, {
					name: formData.value.name ?? "",
					description: formData.value.description ?? ""
				});
				isDirty.value = false;
			} catch (error) {
				showSaveError(error);
				throw error;
			}
		};
		const onSubmit = async () => {
			if (!isDirty.value) return;
			try {
				await updateProject();
				sendTelemetry(makeFormDataDiff());
				toast.showMessage({
					title: i18n.baseText("projects.settings.save.successful.title", { interpolate: { projectName: formData.value.name ?? "" } }),
					type: "success"
				});
			} catch (error) {}
		};
		const onDelete = async () => {
			await projectsStore.getAvailableProjects();
			if (projectsStore.currentProjectId) resourceCounts.value = await projectsStore.getResourceCounts(projectsStore.currentProjectId);
			dialogVisible.value = true;
		};
		const onConfirmDelete = async (transferId) => {
			try {
				if (projectsStore.currentProject) {
					const projectName$1 = projectsStore.currentProject?.name ?? "";
					await projectsStore.deleteProject(projectsStore.currentProject.id, transferId);
					await router.push({ name: VIEWS.HOMEPAGE });
					toast.showMessage({
						title: i18n.baseText("projects.settings.delete.successful.title", { interpolate: { projectName: projectName$1 } }),
						type: "success"
					});
					dialogVisible.value = true;
				}
			} catch (error) {
				toast.showError(error, i18n.baseText("projects.settings.delete.error.title"));
			}
		};
		const selectProjectNameIfMatchesDefault = () => {
			if (formData.value.name === i18n.baseText("projects.settings.newProjectName")) {
				nameInput.value?.inputRef?.focus();
				nameInput.value?.inputRef?.select();
			}
		};
		const onIconUpdated = async () => {
			if (!projectsStore.currentProject) return;
			try {
				await projectsStore.updateProject(projectsStore.currentProject.id, { icon: projectIcon.value });
				toast.showMessage({
					title: i18n.baseText("projects.settings.icon.update.successful.title"),
					type: "success"
				});
			} catch (error) {
				showSaveError(error);
			}
		};
		watch(() => projectsStore.currentProject, async () => {
			if (suppressNextSync.value) {
				suppressNextSync.value = false;
				return;
			}
			resetFormData();
			await nextTick();
			selectProjectNameIfMatchesDefault();
			if (projectsStore.currentProject?.icon && isIconOrEmoji(projectsStore.currentProject.icon)) projectIcon.value = projectsStore.currentProject.icon;
		}, { immediate: true });
		const relationUsers = computed(() => formData.value.relations.map((relation) => {
			const user = usersStore.usersById[relation.id];
			const safeRole = isProjectRole(relation.role) ? relation.role : "project:viewer";
			return {
				...user,
				...relation,
				role: safeRole,
				firstName: user?.firstName ?? null,
				lastName: user?.lastName ?? null,
				email: user?.email ?? null
			};
		}));
		const membersTableData = computed(() => ({
			items: relationUsers.value,
			count: relationUsers.value.length
		}));
		const filteredMembersData = computed(() => {
			if (!search$1.value.trim()) return membersTableData.value;
			const searchTerm = search$1.value.toLowerCase();
			const filtered = relationUsers.value.filter((member) => {
				const fullName = `${member.firstName ?? ""} ${member.lastName ?? ""}`.toLowerCase();
				const email = (member.email ?? "").toLowerCase();
				return fullName.includes(searchTerm) || email.includes(searchTerm);
			});
			return {
				items: filtered,
				count: filtered.length
			};
		});
		const shouldShowSearch = computed(() => relationUsers.value.length >= SEARCH_THRESHOLD);
		watch(shouldShowSearch, (show) => {
			if (!show && search$1.value) search$1.value = "";
		});
		const debouncedSearch = useDebounceFn(() => {
			membersTableState.value.page = 0;
		}, 300);
		const onSearch = (value) => {
			search$1.value = value;
			debouncedSearch();
		};
		const onUpdateMembersTableOptions = (options) => {
			membersTableState.value = options;
		};
		onBeforeMount(async () => {
			await usersStore.fetchUsers();
		});
		onMounted(() => {
			documentTitle.set(i18n.baseText("projects.settings"));
			selectProjectNameIfMatchesDefault();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				class: normalizeClass(_ctx.$style.projectSettings),
				"data-test-id": "project-settings-container"
			}, [
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [createVNode(ProjectHeader_default), createBaseVNode("div", { class: normalizeClass(_ctx.$style.headerRow) }, [createVNode(unref(N8nText_default), {
					tag: "h1",
					size: "xlarge",
					class: "pt-xs pb-m"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("projects.settings.info")), 1)]),
					_: 1
				}), createBaseVNode("div", { class: normalizeClass(_ctx.$style.headerButtons) }, [createVNode(unref(N8nButton_default), {
					type: "secondary",
					"native-type": "button",
					disabled: !isDirty.value,
					class: "mr-2xs",
					"data-test-id": "project-settings-cancel-button",
					onClick: withModifiers(onCancel, ["stop", "prevent"])
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("projects.settings.button.cancel")), 1)]),
					_: 1
				}, 8, ["disabled"]), createVNode(unref(N8nButton_default), {
					disabled: !isValid.value || !isDirty.value,
					type: "primary",
					"data-test-id": "project-settings-save-button",
					onClick: withModifiers(onSubmit, ["stop", "prevent"])
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("projects.settings.button.save")), 1)]),
					_: 1
				}, 8, ["disabled"])], 2)], 2)], 2),
				createBaseVNode("form", { onSubmit: withModifiers(onSubmit, ["prevent"]) }, [
					createBaseVNode("fieldset", null, [createBaseVNode("label", _hoisted_1, toDisplayString(unref(i18n).baseText("projects.settings.name")), 1), createBaseVNode("div", { class: normalizeClass(_ctx.$style.projectName) }, [createVNode(unref(N8nIconPicker_default), {
						modelValue: projectIcon.value,
						"onUpdate:modelValue": [_cache[0] || (_cache[0] = ($event) => projectIcon.value = $event), onIconUpdated],
						"button-tooltip": unref(i18n).baseText("projects.settings.iconPicker.button.tooltip")
					}, null, 8, ["modelValue", "button-tooltip"]), createVNode(unref(N8nFormInput_default), {
						id: "projectName",
						ref_key: "nameInput",
						ref: nameInput,
						modelValue: formData.value.name,
						"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => formData.value.name = $event),
						label: "",
						type: "text",
						name: "name",
						required: "",
						"data-test-id": "project-settings-name-input",
						class: normalizeClass(_ctx.$style.projectNameInput),
						onEnter: onSubmit,
						onInput: onTextInput,
						onValidate: _cache[2] || (_cache[2] = ($event) => isValid.value = $event)
					}, null, 8, ["modelValue", "class"])], 2)]),
					createBaseVNode("fieldset", null, [createBaseVNode("label", _hoisted_2, toDisplayString(unref(i18n).baseText("projects.settings.description")), 1), createVNode(unref(N8nFormInput_default), {
						id: "projectDescription",
						modelValue: formData.value.description,
						"onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => formData.value.description = $event),
						label: "",
						name: "description",
						type: "textarea",
						maxlength: 512,
						autosize: true,
						"data-test-id": "project-settings-description-input",
						class: normalizeClass(_ctx.$style.projectDescriptionInput),
						onEnter: onSubmit,
						onInput: onTextInput,
						onValidate: _cache[4] || (_cache[4] = ($event) => isValid.value = $event)
					}, null, 8, ["modelValue", "class"])]),
					createBaseVNode("fieldset", null, [
						createBaseVNode("h3", null, [createBaseVNode("label", _hoisted_3, toDisplayString(unref(i18n).baseText("projects.settings.projectMembers")), 1)]),
						createBaseVNode("div", { class: normalizeClass([_ctx.$style.membersInputRow, "mb-s"]) }, [createVNode(unref(N8nUserSelect_default), {
							id: "projectMembers",
							class: normalizeClass(_ctx.$style.userSelect),
							size: "large",
							users: usersList.value,
							"current-user-id": unref(usersStore).currentUser?.id,
							placeholder: unref(i18n).baseText("workflows.shareModal.select.placeholder"),
							"data-test-id": "project-members-select",
							"onUpdate:modelValue": onAddMember
						}, {
							prefix: withCtx(() => [createVNode(unref(N8nIcon_default), { icon: "search" })]),
							_: 1
						}, 8, [
							"class",
							"users",
							"current-user-id",
							"placeholder"
						]), shouldShowSearch.value ? (openBlock(), createBlock(unref(N8nInput_default), {
							key: 0,
							class: normalizeClass(_ctx.$style.search),
							"model-value": search$1.value,
							placeholder: unref(i18n).baseText("projects.settings.members.search.placeholder"),
							clearable: "",
							"data-test-id": "project-members-search",
							"onUpdate:modelValue": onSearch
						}, {
							prefix: withCtx(() => [createVNode(unref(N8nIcon_default), { icon: "search" })]),
							_: 1
						}, 8, [
							"class",
							"model-value",
							"placeholder"
						])) : createCommentVNode("", true)], 2),
						relationUsers.value.length > 0 ? (openBlock(), createElementBlock("div", {
							key: 0,
							class: normalizeClass(_ctx.$style.membersTableContainer)
						}, [createVNode(ProjectMembersTable_default, {
							"table-options": membersTableState.value,
							"onUpdate:tableOptions": _cache[5] || (_cache[5] = ($event) => membersTableState.value = $event),
							"data-test-id": "project-members-table",
							data: filteredMembersData.value,
							"current-user-id": unref(usersStore).currentUser?.id,
							"project-roles": unref(rolesStore).processedProjectRoles,
							actions: projectMembersActions.value,
							"onUpdate:options": onUpdateMembersTableOptions,
							"onUpdate:role": onUpdateMemberRole,
							onAction: onMembersListAction,
							onShowUpgradeDialog: _cache[6] || (_cache[6] = ($event) => upgradeDialogVisible.value = true)
						}, null, 8, [
							"table-options",
							"data",
							"current-user-id",
							"project-roles",
							"actions"
						])], 2)) : createCommentVNode("", true)
					]),
					createBaseVNode("fieldset", null, [
						createBaseVNode("h3", _hoisted_4, toDisplayString(unref(i18n).baseText("projects.settings.danger.title")), 1),
						createBaseVNode("small", { class: normalizeClass(_ctx.$style.danger) }, toDisplayString(unref(i18n).baseText("projects.settings.danger.message")), 3),
						createVNode(unref(N8nButton_default), {
							type: "tertiary",
							size: "large",
							"native-type": "button",
							"data-test-id": "project-settings-delete-button",
							onClick: withModifiers(onDelete, ["stop", "prevent"])
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("projects.settings.danger.deleteProject")), 1)]),
							_: 1
						})
					])
				], 32),
				createVNode(ProjectDeleteDialog_default, {
					modelValue: dialogVisible.value,
					"onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => dialogVisible.value = $event),
					"current-project": unref(projectsStore).currentProject,
					"resource-counts": resourceCounts.value,
					projects: projects.value,
					onConfirmDelete
				}, null, 8, [
					"modelValue",
					"current-project",
					"resource-counts",
					"projects"
				]),
				createVNode(ProjectRoleUpgradeDialog_default, {
					modelValue: upgradeDialogVisible.value,
					"onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => upgradeDialogVisible.value = $event),
					limit: unref(projectsStore).teamProjectsLimit,
					"plan-name": unref(cloudPlanStore).currentPlanData?.displayName
				}, null, 8, [
					"modelValue",
					"limit",
					"plan-name"
				])
			], 2);
		};
	}
});
var ProjectSettings_vue_vue_type_style_index_0_lang_module_default = {
	projectSettings: "_projectSettings_142pd_123",
	header: "_header_142pd_147",
	headerRow: "_headerRow_142pd_153",
	headerButtons: "_headerButtons_142pd_160",
	upgrade: "_upgrade_142pd_166",
	membersInputRow: "_membersInputRow_142pd_170",
	membersTableContainer: "_membersTableContainer_142pd_178",
	search: "_search_142pd_182",
	projectName: "_projectName_142pd_187",
	projectNameInput: "_projectNameInput_142pd_192",
	projectDescriptionInput: "_projectDescriptionInput_142pd_196",
	userSelect: "_userSelect_142pd_197",
	danger: "_danger_142pd_207"
};
var ProjectSettings_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ProjectSettings_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ProjectSettings_vue_vue_type_style_index_0_lang_module_default }]]);
export { ProjectSettings_default as default };
