import { o as __toESM } from "./chunk-r2Y0G7H8.js";
import { C as computed, Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, G as nextTick, Gt as unref, I as guardReactiveProps, It as ref, M as createVNode, P as defineComponent, T as createBlock, U as mergeModels, W as mergeProps, Z as onMounted, _t as watch, at as renderSlot, bt as withCtx, et as openBlock, ft as useModel, h as withModifiers, j as createTextVNode, q as onBeforeMount, vn as normalizeClass, w as createBaseVNode, yn as normalizeProps } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { bt as I18nT, ot as useDebounceFn, yt as useI18n } from "./_MapCache-Bq6g7eJk.js";
import { At as N8nBadge_default, E as N8nUserSelect_default, Hi as N8nButton_default, O as N8nUserInfo_default, Oi as N8nTooltip_default, Pi as N8nActionBox_default, Tt as N8nActionToggle_default, Ui as N8nIcon_default, Vi as N8nText_default, a as SelectItem_default, at as N8nFormInput_default, gi as N8nLink_default, i as Select_default, ji as Input_default, ot as N8nInputLabel_default, p as N8nDataTableServer_default, w as N8nIconPicker_default, wi as useRouter, zi as N8nHeading_default } from "./src-Vlm7Mxf-.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import { Gt as useProjectsStore, Lt as useTelemetry, Xr as isProjectRole, fn as useDocumentTitle, lr as useCloudPlanStore, r as useUIStore, t as useUsersStore, ws as useSettingsStore, yr as useToast } from "./users.store-BwYRQvCY.js";
import { t as ElRadio } from "./radio-C-EO8aaN.js";
import { t as ElDialog } from "./dialog-BI9bvPzT.js";
import { t as Alert_default } from "./Alert-DYfwOWg1.js";
import { Es as SECRETS_PROVIDER_CONNECTION_MODAL_KEY, Qc as DEBOUNCE_TIME, Ua as deepCopy, f as CUSTOM_ROLES_DOCS_URL, ol as getDebounceTime, rs as VIEWS, ti as ROLE } from "./constants-RiJkz47J.js";
import "./merge-CLls_idn.js";
import "./_baseOrderBy-BE23B-S3.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-BghtiK4X.js";
import "./versions.store-C9Ch1_0N.js";
import { t as usePageRedirectionHelper } from "./usePageRedirectionHelper-CR50q2Bt.js";
import { t as useEnvFeatureFlag } from "./useEnvFeatureFlag-B-aCettH.js";
import "./folders.store-BY8Vuq5D.js";
import { n as isIconOrEmoji } from "./ProjectIcon-DSgmszLL.js";
import "./orderBy-Dox6KsmS.js";
import { t as ProjectSharing_default } from "./ProjectSharing-B3l0no-g.js";
import { t as useRolesStore } from "./roles.store-CnmTuWAs.js";
import "./readyToRun.store-2wJgp99Y.js";
import { t as ProjectHeader_default } from "./ProjectHeader-DtGEmwXm.js";
import { t as useUserRoleProvisioningStore } from "./userRoleProvisioning.store-CzbsYenu.js";
import { t as useSecretsProvidersList } from "./useSecretsProvidersList.ee-BubGPoJU.js";
var _hoisted_1$5 = { key: 1 };
var _hoisted_2$2 = { class: "pt-l" };
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
					variant: "destructive",
					type: "button",
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
				})) : hasMovableResources.value ? (openBlock(), createElementBlock("div", _hoisted_1$5, [createVNode(unref(N8nText_default), { color: "text-base" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("projects.settings.delete.message")), 1)]),
					_: 1
				}), createBaseVNode("div", _hoisted_2$2, [
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
						default: withCtx(() => [createVNode(unref(Input_default), {
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
var ProjectDeleteDialog_vue_vue_type_style_index_0_lang_module_default = { operation: "_operation_jv0de_125" };
var ProjectDeleteDialog_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ProjectDeleteDialog_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ProjectDeleteDialog_vue_vue_type_style_index_0_lang_module_default }]]);
var _hoisted_1$4 = { class: "pt-l" };
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
					variant: "subtle",
					"native-type": "button",
					onClick: _cache[0] || (_cache[0] = ($event) => visible.value = false)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("generic.cancel")), 1)]),
					_: 1
				}), createVNode(unref(N8nButton_default), {
					variant: "solid",
					"native-type": "button",
					onClick: goToUpgrade
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("projects.create.limitReached.link")), 1)]),
					_: 1
				})]),
				default: withCtx(() => [createBaseVNode("div", _hoisted_1$4, [createVNode(unref(I18nT), {
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
var RoleHoverPopover_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "RoleHoverPopover",
	props: { role: {} },
	setup(__props) {
		const UI_VISIBLE_SCOPES = new Set([
			"project:read",
			"project:update",
			"project:delete",
			"folder:read",
			"folder:update",
			"folder:create",
			"folder:move",
			"folder:delete",
			"workflow:read",
			"workflow:update",
			"workflow:create",
			"workflow:publish",
			"workflow:move",
			"workflow:delete",
			"credential:read",
			"credential:update",
			"credential:create",
			"credential:share",
			"credential:move",
			"credential:delete",
			"dataTable:read",
			"dataTable:readRow",
			"dataTable:update",
			"dataTable:writeRow",
			"dataTable:create",
			"dataTable:delete",
			"projectVariable:read",
			"projectVariable:update",
			"projectVariable:create",
			"projectVariable:delete",
			"sourceControl:push"
		]);
		const TOTAL_PROJECT_PERMISSIONS = UI_VISIBLE_SCOPES.size;
		const props = __props;
		const i18n = useI18n();
		const router = useRouter();
		const usersStore = useUsersStore();
		const isAdminOrOwner = computed(() => usersStore.isInstanceOwner || usersStore.isAdmin);
		const canEditRole = computed(() => isAdminOrOwner.value && !props.role.systemRole);
		const permissionCount$1 = computed(() => props.role.scopes?.filter((scope) => UI_VISIBLE_SCOPES.has(scope)).length ?? 0);
		const buttonText = computed(() => canEditRole.value ? i18n.baseText("projects.settings.role.popover.viewAndEdit") : i18n.baseText("projects.settings.role.popover.viewDetails"));
		const onButtonClick = () => {
			if (canEditRole.value) router.push({
				name: VIEWS.PROJECT_ROLE_SETTINGS,
				params: { roleSlug: props.role.slug }
			});
			else router.push({
				name: VIEWS.PROJECT_ROLE_VIEW,
				params: { roleSlug: props.role.slug }
			});
		};
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nTooltip_default), {
				placement: "right",
				"show-after": 300,
				enterable: true,
				offset: 1,
				"content-class": "role-hover-popover"
			}, {
				content: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.popoverContent) }, [
					createVNode(unref(N8nText_default), {
						tag: "div",
						bold: true,
						size: "medium",
						class: normalizeClass(_ctx.$style.roleName)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(__props.role.displayName), 1)]),
						_: 1
					}, 8, ["class"]),
					createVNode(unref(N8nText_default), {
						tag: "div",
						size: "small",
						color: "text-light",
						class: normalizeClass(_ctx.$style.permissionCount)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("projects.settings.role.selector.permissionCount", { interpolate: {
							count: String(permissionCount$1.value),
							total: String(unref(TOTAL_PROJECT_PERMISSIONS))
						} })), 1)]),
						_: 1
					}, 8, ["class"]),
					__props.role.description ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 0,
						tag: "div",
						size: "small",
						class: normalizeClass(_ctx.$style.description)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(__props.role.description), 1)]),
						_: 1
					}, 8, ["class"])) : createCommentVNode("", true),
					createVNode(unref(N8nButton_default), {
						type: "tertiary",
						size: "small",
						class: normalizeClass(_ctx.$style.actionButton),
						onClick: onButtonClick
					}, {
						append: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.externalIcon) }, "↗", 2)]),
						default: withCtx(() => [createTextVNode(toDisplayString(buttonText.value) + " ", 1)]),
						_: 1
					}, 8, ["class"])
				], 2)]),
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			});
		};
	}
});
var RoleHoverPopover_vue_vue_type_style_index_0_lang_module_default = {
	popoverContent: "_popoverContent_1ra36_125",
	roleName: "_roleName_1ra36_130",
	permissionCount: "_permissionCount_1ra36_134",
	description: "_description_1ra36_138",
	actionButton: "_actionButton_1ra36_142",
	externalIcon: "_externalIcon_1ra36_146"
};
var RoleHoverPopover_default = /* @__PURE__ */ __plugin_vue_export_helper_default(RoleHoverPopover_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": RoleHoverPopover_vue_vue_type_style_index_0_lang_module_default }]]);
var ProjectRoleContactAdminModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ProjectRoleContactAdminModal",
	props: /* @__PURE__ */ mergeModels({ customRolesExist: {
		type: Boolean,
		default: false
	} }, {
		"modelValue": { type: Boolean },
		"modelModifiers": {}
	}),
	emits: ["update:modelValue"],
	setup(__props) {
		const props = __props;
		const visible = useModel(__props, "modelValue");
		const i18n = useI18n();
		const titleKey = computed(() => props.customRolesExist ? "projects.settings.role.contactAdmin.titleWithRoles" : "projects.settings.role.contactAdmin.title");
		const bodyKey = computed(() => props.customRolesExist ? "projects.settings.role.contactAdmin.bodyWithRoles" : "projects.settings.role.contactAdmin.body");
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(ElDialog), {
				modelValue: visible.value,
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => visible.value = $event),
				width: "400",
				"show-close": true
			}, {
				header: withCtx(() => [createVNode(unref(N8nText_default), {
					tag: "span",
					size: "large",
					bold: true
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(titleKey.value)), 1)]),
					_: 1
				})]),
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createVNode(unref(N8nText_default), {
					tag: "p",
					size: "medium"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText(bodyKey.value).replace("{documentation}", "")) + " ", 1), createVNode(unref(N8nLink_default), {
						href: unref(CUSTOM_ROLES_DOCS_URL),
						"new-window": true
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.documentation")), 1)]),
						_: 1
					}, 8, ["href"])]),
					_: 1
				})], 2)]),
				_: 1
			}, 8, ["modelValue"]);
		};
	}
});
var ProjectRoleContactAdminModal_vue_vue_type_style_index_0_lang_module_default = { content: "_content_m6nnw_125" };
var ProjectRoleContactAdminModal_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ProjectRoleContactAdminModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ProjectRoleContactAdminModal_vue_vue_type_style_index_0_lang_module_default }]]);
var ProjectCustomRolesUpgradeModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ProjectCustomRolesUpgradeModal",
	props: {
		"modelValue": { type: Boolean },
		"modelModifiers": {}
	},
	emits: ["update:modelValue"],
	setup(__props) {
		const visible = useModel(__props, "modelValue");
		const i18n = useI18n();
		const { goToUpgrade } = usePageRedirectionHelper();
		const onViewPlans = async () => {
			await goToUpgrade("custom-roles", "upgrade-custom-roles");
			visible.value = false;
		};
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(ElDialog), {
				modelValue: visible.value,
				"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => visible.value = $event),
				title: unref(i18n).baseText("projects.settings.role.upgrade.title"),
				width: "400"
			}, {
				footer: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.footer) }, [createVNode(unref(N8nButton_default), {
					type: "secondary",
					onClick: _cache[0] || (_cache[0] = ($event) => visible.value = false)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.cancel")), 1)]),
					_: 1
				}), createVNode(unref(N8nButton_default), {
					type: "primary",
					onClick: onViewPlans
				}, {
					append: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.externalIcon) }, "↗", 2)]),
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("projects.settings.role.upgrade.custom.viewPlans")) + " ", 1)]),
					_: 1
				})], 2)]),
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.content) }, [createVNode(unref(N8nText_default), {
					tag: "p",
					size: "medium"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("projects.settings.role.upgrade.custom.body").replace("{documentation}", "")) + " ", 1), createVNode(unref(N8nLink_default), {
						href: unref(CUSTOM_ROLES_DOCS_URL),
						"new-window": true
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.documentation")), 1)]),
						_: 1
					}, 8, ["href"])]),
					_: 1
				})], 2)]),
				_: 1
			}, 8, ["modelValue", "title"]);
		};
	}
});
var ProjectCustomRolesUpgradeModal_vue_vue_type_style_index_0_lang_module_default = {
	content: "_content_c8g9i_125",
	footer: "_footer_c8g9i_129",
	externalIcon: "_externalIcon_c8g9i_135"
};
var ProjectCustomRolesUpgradeModal_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ProjectCustomRolesUpgradeModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ProjectCustomRolesUpgradeModal_vue_vue_type_style_index_0_lang_module_default }]]);
var _hoisted_1$3 = { key: 1 };
var ProjectMembersRoleCell_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ProjectMembersRoleCell",
	props: {
		data: {},
		roles: {}
	},
	emits: ["update:role"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const router = useRouter();
		const settingsStore = useSettingsStore();
		const usersStore = useUsersStore();
		const dropdownOpen = ref(false);
		const contactAdminModalVisible = ref(false);
		const upgradeModalVisible = ref(false);
		const searchQuery = ref("");
		watch(dropdownOpen, (open) => {
			if (!open) searchQuery.value = "";
		});
		const closeDropdown = () => {
			dropdownOpen.value = false;
			if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
		};
		const selectedRole = computed(() => props.roles.find((role) => role.slug === props.data.role));
		const isEditable = computed(() => props.data.role !== "project:personalOwner");
		const hasCustomRolesLicense = computed(() => settingsStore.isCustomRolesFeatureEnabled);
		const isAdminOrOwner = computed(() => usersStore.isInstanceOwner || usersStore.isAdmin);
		const systemRoles = computed(() => props.roles.filter((role) => role.systemRole));
		const customRoles = computed(() => props.roles.filter((role) => !role.systemRole));
		const filteredSystemRoles = computed(() => {
			const query = searchQuery.value.toLowerCase().trim();
			if (!query) return systemRoles.value;
			return systemRoles.value.filter((role) => role.displayName.toLowerCase().includes(query));
		});
		const filteredCustomRoles = computed(() => {
			const query = searchQuery.value.toLowerCase().trim();
			if (!query) return customRoles.value;
			return customRoles.value.filter((role) => role.displayName.toLowerCase().includes(query));
		});
		const roleItems = computed(() => {
			const items = [];
			if (filteredSystemRoles.value.length > 0) {
				items.push({
					type: "label",
					label: i18n.baseText("projects.settings.role.selector.section.system")
				});
				filteredSystemRoles.value.forEach((role) => {
					items.push({
						value: role.slug,
						label: role.displayName,
						role
					});
				});
			}
			if (filteredCustomRoles.value.length > 0 || !searchQuery.value && !hasCustomRolesLicense.value) {
				items.push({
					type: "label",
					label: i18n.baseText("projects.settings.role.selector.section.custom")
				});
				filteredCustomRoles.value.forEach((role) => {
					items.push({
						value: role.slug,
						label: role.displayName,
						disabled: !role.licensed,
						role
					});
				});
			}
			return items;
		});
		const onRoleSelect = (value) => {
			if (!value || typeof value !== "string") return;
			const role = props.roles.find((r) => r.slug === value);
			if (role && !role.licensed) {
				closeDropdown();
				upgradeModalVisible.value = true;
				return;
			}
			emit("update:role", {
				role: value,
				userId: props.data.id
			});
		};
		const onAddCustomRoleClick = () => {
			closeDropdown();
			if (!hasCustomRolesLicense.value) upgradeModalVisible.value = true;
			else if (!isAdminOrOwner.value) contactAdminModalVisible.value = true;
			else router.push({ name: VIEWS.PROJECT_NEW_ROLE });
		};
		return (_ctx, _cache) => {
			return isEditable.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.container)
			}, [
				createVNode(unref(Select_default), {
					open: dropdownOpen.value,
					"onUpdate:open": _cache[4] || (_cache[4] = ($event) => dropdownOpen.value = $event),
					items: roleItems.value,
					"model-value": __props.data.role,
					size: "small",
					variant: "ghost",
					class: normalizeClass(_ctx.$style.roleSelect),
					"data-test-id": "project-member-role-dropdown",
					"onUpdate:modelValue": onRoleSelect
				}, {
					default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.triggerContent) }, toDisplayString(selectedRole.value?.displayName), 3)]),
					header: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.searchContainer) }, [createVNode(unref(Input_default), {
						modelValue: searchQuery.value,
						"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchQuery.value = $event),
						placeholder: unref(i18n).baseText("generic.search"),
						size: "medium",
						class: normalizeClass(_ctx.$style.searchInput),
						onClick: _cache[1] || (_cache[1] = withModifiers(() => {}, ["stop"])),
						onKeydown: _cache[2] || (_cache[2] = withModifiers(() => {}, ["stop"]))
					}, null, 8, [
						"modelValue",
						"placeholder",
						"class"
					])], 2)]),
					item: withCtx(({ item }) => [item.role ? (openBlock(), createBlock(RoleHoverPopover_default, {
						key: 0,
						role: item.role
					}, {
						default: withCtx(() => [createVNode(unref(SelectItem_default), mergeProps(item, { class: _ctx.$style.selectItem }), {
							"item-label": withCtx(() => [createVNode(unref(N8nText_default), {
								tag: "span",
								size: "medium",
								color: item.disabled ? "text-light" : "text-dark"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(item.label), 1)]),
								_: 2
							}, 1032, ["color"])]),
							"item-trailing": withCtx(() => [item.disabled && hasCustomRolesLicense.value ? (openBlock(), createBlock(unref(N8nBadge_default), {
								key: 0,
								theme: "warning",
								class: normalizeClass(_ctx.$style.upgradeBadge)
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.upgrade")), 1)]),
								_: 1
							}, 8, ["class"])) : createCommentVNode("", true)]),
							_: 2
						}, 1040, ["class"])]),
						_: 2
					}, 1032, ["role"])) : createCommentVNode("", true)]),
					label: withCtx(({ item }) => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.sectionLabelContent) }, [createTextVNode(toDisplayString(item.label) + " ", 1), item.label === unref(i18n).baseText("projects.settings.role.selector.section.custom") && !hasCustomRolesLicense.value ? (openBlock(), createBlock(unref(N8nBadge_default), {
						key: 0,
						theme: "default",
						class: normalizeClass(_ctx.$style.sectionUpgradeBadge),
						onClick: _cache[3] || (_cache[3] = withModifiers(($event) => {
							closeDropdown();
							upgradeModalVisible.value = true;
						}, ["stop"]))
					}, {
						default: withCtx(() => [createVNode(unref(N8nIcon_default), {
							icon: "lock",
							size: "xsmall"
						}), createTextVNode(" " + toDisplayString(unref(i18n).baseText("generic.upgrade")), 1)]),
						_: 1
					}, 8, ["class"])) : createCommentVNode("", true)], 2)]),
					footer: withCtx(() => [createBaseVNode("button", {
						type: "button",
						class: normalizeClass(_ctx.$style.addCustomRoleButton),
						onClick: withModifiers(onAddCustomRoleClick, ["stop"])
					}, [createVNode(unref(N8nIcon_default), {
						icon: "plus",
						size: "small"
					}), createVNode(unref(N8nText_default), {
						tag: "span",
						size: "small"
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("projects.settings.role.selector.addCustomRole")), 1)]),
						_: 1
					})], 2)]),
					_: 1
				}, 8, [
					"open",
					"items",
					"model-value",
					"class"
				]),
				createVNode(ProjectRoleContactAdminModal_default, {
					modelValue: contactAdminModalVisible.value,
					"onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => contactAdminModalVisible.value = $event),
					"custom-roles-exist": customRoles.value.length > 0
				}, null, 8, ["modelValue", "custom-roles-exist"]),
				createVNode(ProjectCustomRolesUpgradeModal_default, {
					modelValue: upgradeModalVisible.value,
					"onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => upgradeModalVisible.value = $event)
				}, null, 8, ["modelValue"])
			], 2)) : (openBlock(), createElementBlock("span", _hoisted_1$3, toDisplayString(selectedRole.value?.displayName), 1));
		};
	}
});
var ProjectMembersRoleCell_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_lhuqt_125",
	searchContainer: "_searchContainer_lhuqt_129",
	searchInput: "_searchInput_lhuqt_133",
	roleSelect: "_roleSelect_lhuqt_141",
	triggerContent: "_triggerContent_lhuqt_150",
	selectItem: "_selectItem_lhuqt_157",
	upgradeBadge: "_upgradeBadge_lhuqt_164",
	sectionLabelContent: "_sectionLabelContent_lhuqt_169",
	sectionUpgradeBadge: "_sectionUpgradeBadge_lhuqt_175",
	addCustomRoleButton: "_addCustomRoleButton_lhuqt_182"
};
var ProjectMembersRoleCell_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ProjectMembersRoleCell_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ProjectMembersRoleCell_vue_vue_type_style_index_0_lang_module_default }]]);
var _hoisted_1$2 = { class: "pt-xs pb-xs" };
var ProjectMembersTable_default = /* @__PURE__ */ defineComponent({
	__name: "ProjectMembersTable",
	props: /* @__PURE__ */ mergeModels({
		data: {},
		loading: { type: Boolean },
		currentUserId: {},
		projectRoles: {},
		actions: {},
		canEditRole: { type: Boolean }
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
		"action"
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
				width: 200,
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
		const canUpdateRole = (member) => member.id !== props.currentUserId && props.canEditRole;
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
				"onUpdate:sortBy": _cache[1] || (_cache[1] = ($event) => tableOptions.value.sortBy = $event),
				page: tableOptions.value.page,
				"onUpdate:page": _cache[2] || (_cache[2] = ($event) => tableOptions.value.page = $event),
				"items-per-page": __props.data.count,
				headers: headers.value,
				items: rows.value,
				"items-length": __props.data.count,
				loading: __props.loading,
				"page-sizes": [__props.data.count + 1],
				"onUpdate:options": _cache[3] || (_cache[3] = ($event) => emit("update:options", $event))
			}, {
				[`item.name`]: withCtx(({ value }) => [createBaseVNode("div", _hoisted_1$2, [createVNode(unref(N8nUserInfo_default), normalizeProps(guardReactiveProps(value)), null, 16)])]),
				[`item.role`]: withCtx(({ item }) => [canUpdateRole(item) ? (openBlock(), createBlock(ProjectMembersRoleCell_default, {
					key: 0,
					data: item,
					roles: props.projectRoles,
					"onUpdate:role": onRoleChange
				}, null, 8, ["data", "roles"])) : (openBlock(), createBlock(unref(N8nText_default), {
					key: 1,
					color: "text-dark"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(props.projectRoles.find((role) => role.slug === item.role)?.displayName ?? item.role), 1)]),
					_: 2
				}, 1024))]),
				[`item.actions`]: withCtx(({ item }) => [createVNode(ProjectMembersActionsCell_default, {
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
				"items-length",
				"loading",
				"page-sizes"
			])]);
		};
	}
});
var _hoisted_1$1 = { key: 0 };
var _hoisted_2$1 = { class: "mb-s" };
var _hoisted_3$1 = { for: "projectExternalSecrets" };
var _hoisted_4$1 = ["onClick"];
var ProjectExternalSecrets_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ProjectExternalSecrets",
	setup(__props, { expose: __expose }) {
		const i18n = useI18n();
		const toast = useToast();
		const router = useRouter();
		const projectsStore = useProjectsStore();
		const uiStore = useUIStore();
		const usersStore = useUsersStore();
		const secretsProviders = useSecretsProvidersList();
		const envFeatureFlag = useEnvFeatureFlag();
		const projectSecretProviders = ref([]);
		const isLoadingSecretProviders = ref(false);
		const secretsSearch = ref("");
		const expandedProviders = ref(/* @__PURE__ */ new Set());
		const currentPage = ref(0);
		const itemsPerPage = ref(5);
		const isFeatureEnabled = computed(() => envFeatureFlag.check.value("EXTERNAL_SECRETS_FOR_PROJECTS"));
		const hasExternalSecretsListPermission = computed(() => projectsStore.currentProject?.scopes?.includes("externalSecretsProvider:list") ?? false);
		const hasProjectExternalSecretsCreatePermission = computed(() => projectsStore.currentProject?.scopes?.includes("externalSecretsProvider:create") ?? false);
		const isInstanceAdmin = computed(() => usersStore.currentUser?.role === ROLE.Owner || usersStore.currentUser?.role === ROLE.Admin);
		const showExternalSecretsSection = computed(() => isFeatureEnabled.value && hasExternalSecretsListPermission.value);
		const emptyStateType = computed(() => {
			if (projectSecretProviders.value.length > 0) return null;
			if (isInstanceAdmin.value) return secretsProviders.activeProviders.value.length > 0 ? "instance-admin-no-project-providers" : "project-admin-no-providers";
			return hasProjectExternalSecretsCreatePermission.value ? "project-admin-no-providers" : null;
		});
		const emptyStateConfig = computed(() => {
			const type = emptyStateType.value;
			if (!type) return null;
			return {
				"instance-admin-no-project-providers": {
					heading: i18n.baseText("projects.settings.externalSecrets.emptyState.heading"),
					description: i18n.baseText("projects.settings.externalSecrets.emptyState.instanceAdmin.noProjectProviders.description"),
					buttonText: i18n.baseText("projects.settings.externalSecrets.button.shareSecretsStore"),
					buttonType: "secondary",
					buttonAction: onShareSecretsStore,
					testId: "external-secrets-empty-state-no-project-providers"
				},
				"project-admin-no-providers": {
					heading: i18n.baseText("projects.settings.externalSecrets.emptyState.heading"),
					description: i18n.baseText("projects.settings.externalSecrets.emptyState.projectAdmin.description"),
					buttonText: i18n.baseText("projects.settings.externalSecrets.button.addSecretsStore"),
					buttonType: "secondary",
					buttonAction: onAddSecretsStore,
					testId: "external-secrets-empty-state-project-admin"
				}
			}[type];
		});
		const filteredProviders = computed(() => {
			if (!secretsSearch.value.trim()) return projectSecretProviders.value;
			const searchTerm = secretsSearch.value.toLowerCase();
			return projectSecretProviders.value.filter((provider) => {
				return provider.secrets?.some((secret) => secret.name.toLowerCase().includes(searchTerm) || provider.name.toLowerCase().includes(searchTerm));
			});
		});
		const paginatedProviders = computed(() => {
			const start = currentPage.value * itemsPerPage.value;
			const end = start + itemsPerPage.value;
			return filteredProviders.value.slice(start, end);
		});
		const tableRows = computed(() => {
			const rows = [];
			paginatedProviders.value.forEach((provider) => {
				const providerDisplayName = getProviderTypeInfo(provider.type)?.displayName ?? provider.type;
				const isExpanded = expandedProviders.value.has(provider.name);
				let secrets = provider.secrets ?? [];
				if (secretsSearch.value.trim()) {
					const searchTerm = secretsSearch.value.toLowerCase();
					secrets = secrets.filter((secret) => secret.name.toLowerCase().includes(searchTerm) || provider.name.toLowerCase().includes(searchTerm));
				}
				const secretsCount = secrets.length;
				rows.push({
					id: `header-${provider.name}`,
					type: "provider-header",
					providerName: provider.name,
					providerKey: provider.name,
					providerType: provider.type,
					providerDisplayName,
					secretsCount,
					isExpanded
				});
				if (isExpanded && secrets.length > 0) secrets.forEach((secret) => {
					rows.push({
						id: `${provider.name}-${secret.name}`,
						type: "secret",
						secretName: secret.name,
						providerName: provider.name,
						providerKey: provider.name,
						providerType: provider.type,
						providerDisplayName,
						credentialsCount: secret.credentialsCount
					});
				});
			});
			return rows;
		});
		const tableHeaders = computed(() => [
			{
				title: i18n.baseText("projects.settings.externalSecrets.table.header.secretName"),
				key: "secretName",
				disableSort: true,
				value: (row) => row.type === "secret" ? row.secretName : ""
			},
			{
				title: i18n.baseText("projects.settings.externalSecrets.table.header.provider"),
				key: "secretsStore",
				disableSort: true,
				value: (row) => row.providerName
			},
			{
				title: i18n.baseText("projects.settings.externalSecrets.table.header.usedInCredentials"),
				key: "credentialsCount",
				width: 200,
				disableSort: true,
				value: (row) => row.type === "secret" && row.credentialsCount !== void 0 ? row.credentialsCount : ""
			}
		]);
		function toggleProvider(providerName) {
			if (expandedProviders.value.has(providerName)) expandedProviders.value.delete(providerName);
			else expandedProviders.value.add(providerName);
		}
		function getProviderTypeInfo(providerType) {
			return secretsProviders.providerTypes.value.find((type) => type.type === providerType);
		}
		async function fetchProjectSecretProviders() {
			if (!projectsStore.currentProjectId || !hasExternalSecretsListPermission.value || !isFeatureEnabled.value) return;
			isLoadingSecretProviders.value = true;
			try {
				projectSecretProviders.value = await projectsStore.getProjectSecretProviders(projectsStore.currentProjectId);
			} catch (error) {
				toast.showError(error, i18n.baseText("projects.settings.externalSecrets.load.error"));
			} finally {
				isLoadingSecretProviders.value = false;
			}
		}
		function openConnectionModal(providerKey, activeTab = "connection") {
			const existingNames = secretsProviders.activeProviders.value.map((provider) => provider.name);
			uiStore.openModalWithData({
				name: SECRETS_PROVIDER_CONNECTION_MODAL_KEY,
				data: {
					activeTab,
					providerKey,
					providerTypes: secretsProviders.providerTypes.value,
					existingProviderNames: existingNames,
					projectId: projectsStore.currentProjectId,
					onClose: async () => {
						await fetchProjectSecretProviders();
					}
				}
			});
		}
		function openProviderModal(providerKey) {
			openConnectionModal(providerKey, "connection");
		}
		function onAddSecretsStore() {
			openConnectionModal();
		}
		function onShareSecretsStore() {
			router.push({ name: VIEWS.EXTERNAL_SECRETS_SETTINGS });
		}
		watch(secretsSearch, () => {
			currentPage.value = 0;
		});
		watch(() => projectsStore.currentProjectId, async (newProjectId) => {
			if (newProjectId && showExternalSecretsSection.value) await fetchProjectSecretProviders();
		}, { immediate: true });
		onMounted(async () => {
			if (!showExternalSecretsSection.value) return;
			await Promise.all([secretsProviders.fetchProviderTypes(), secretsProviders.fetchActiveConnections()]);
		});
		__expose({ fetchProjectSecretProviders });
		return (_ctx, _cache) => {
			return showExternalSecretsSection.value ? (openBlock(), createElementBlock("fieldset", _hoisted_1$1, [createBaseVNode("h3", _hoisted_2$1, [createBaseVNode("label", _hoisted_3$1, toDisplayString(unref(i18n).baseText("projects.settings.externalSecrets")), 1)]), emptyStateConfig.value ? (openBlock(), createBlock(unref(N8nActionBox_default), {
				key: 0,
				class: normalizeClass(_ctx.$style.externalSecretsEmpty),
				"data-test-id": emptyStateConfig.value.testId,
				description: "yes"
			}, {
				description: withCtx(() => [createVNode(unref(N8nHeading_default), {
					tag: "h3",
					size: "small",
					class: "mb-2xs"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(emptyStateConfig.value.heading), 1)]),
					_: 1
				}), createVNode(unref(N8nText_default), {
					size: "small",
					color: "text-base",
					class: normalizeClass(_ctx.$style.description)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(emptyStateConfig.value.description), 1)]),
					_: 1
				}, 8, ["class"])]),
				additionalContent: withCtx(() => [createVNode(unref(N8nButton_default), {
					type: "highlight",
					class: "mr-2xs",
					element: "a",
					href: unref(i18n).baseText("settings.externalSecrets.docs"),
					target: "_blank",
					"data-test-id": "secrets-provider-connections-learn-more"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.learnMore")) + " ", 1), createVNode(unref(N8nIcon_default), { icon: "arrow-up-right" })]),
					_: 1
				}, 8, ["href"]), createVNode(unref(N8nButton_default), {
					type: emptyStateConfig.value.buttonType,
					"data-test-id": `${emptyStateType.value}-button`,
					onClick: emptyStateConfig.value.buttonAction
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(emptyStateConfig.value.buttonText), 1)]),
					_: 1
				}, 8, [
					"type",
					"data-test-id",
					"onClick"
				])]),
				_: 1
			}, 8, ["class", "data-test-id"])) : projectSecretProviders.value.length > 0 ? (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.secretProvidersContainer)
			}, [projectSecretProviders.value.length >= 5 ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.searchContainer)
			}, [createVNode(unref(Input_default), {
				modelValue: secretsSearch.value,
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => secretsSearch.value = $event),
				placeholder: unref(i18n).baseText("projects.settings.externalSecrets.search.placeholder"),
				clearable: "",
				"data-test-id": "secrets-providers-search",
				size: "small"
			}, {
				prefix: withCtx(() => [createVNode(unref(N8nIcon_default), { icon: "search" })]),
				_: 1
			}, 8, ["modelValue", "placeholder"])], 2)) : createCommentVNode("", true), createVNode(unref(N8nDataTableServer_default), {
				page: currentPage.value,
				"onUpdate:page": _cache[1] || (_cache[1] = ($event) => currentPage.value = $event),
				headers: tableHeaders.value,
				items: tableRows.value,
				"items-length": filteredProviders.value.length,
				loading: isLoadingSecretProviders.value,
				"items-per-page": itemsPerPage.value,
				"page-sizes": [
					5,
					10,
					25,
					50
				],
				"row-props": (row) => ({ class: row.type === "provider-header" ? _ctx.$style.groupHeaderRow : "" }),
				"data-test-id": "external-secrets-table"
			}, {
				item: withCtx(({ item }) => [item.type === "provider-header" ? (openBlock(), createElementBlock("tr", {
					key: 0,
					class: normalizeClass(_ctx.$style.groupHeaderRow),
					onClick: ($event) => toggleProvider(item.providerName)
				}, [createBaseVNode("td", {
					colspan: "3",
					class: normalizeClass(_ctx.$style.groupHeaderCell)
				}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.groupHeaderContent) }, [createVNode(unref(N8nIcon_default), {
					icon: item.isExpanded ? "chevron-down" : "chevron-right",
					class: normalizeClass(_ctx.$style.expandIcon)
				}, null, 8, ["icon", "class"]), createVNode(unref(N8nText_default), { bold: "" }, {
					default: withCtx(() => [createTextVNode(toDisplayString(item.providerDisplayName), 1)]),
					_: 2
				}, 1024)], 2)], 2)], 10, _hoisted_4$1)) : (openBlock(), createElementBlock("tr", {
					key: 1,
					class: normalizeClass(_ctx.$style.secretRow)
				}, [
					createBaseVNode("td", { class: normalizeClass(_ctx.$style.secretNameCell) }, [createBaseVNode("code", { class: normalizeClass(_ctx.$style.secretName) }, toDisplayString(item.secretName), 3)], 2),
					createBaseVNode("td", { class: normalizeClass(_ctx.$style.secretStoreCell) }, [createVNode(unref(N8nLink_default), {
						class: normalizeClass(_ctx.$style.providerLink),
						"data-test-id": "secrets-store-link",
						onClick: ($event) => openProviderModal(item.providerKey)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(item.providerName), 1)]),
						_: 2
					}, 1032, ["class", "onClick"])], 2),
					createBaseVNode("td", { class: normalizeClass(_ctx.$style.secretCredentialsCell) }, [item.credentialsCount !== void 0 ? (openBlock(), createBlock(unref(N8nText_default), {
						key: 0,
						size: "small",
						class: normalizeClass(_ctx.$style.credentialsCount)
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(item.credentialsCount), 1)]),
						_: 2
					}, 1032, ["class"])) : createCommentVNode("", true)], 2)
				], 2))]),
				_: 1
			}, 8, [
				"page",
				"headers",
				"items",
				"items-length",
				"loading",
				"items-per-page",
				"row-props"
			])], 2)) : createCommentVNode("", true)])) : createCommentVNode("", true);
		};
	}
});
var ProjectExternalSecrets_vue_vue_type_style_index_0_lang_module_default = {
	externalSecretsEmpty: "_externalSecretsEmpty_137hw_125",
	description: "_description_137hw_129",
	secretProvidersContainer: "_secretProvidersContainer_137hw_134",
	searchContainer: "_searchContainer_137hw_140",
	groupHeaderRow: "_groupHeaderRow_137hw_145",
	groupHeaderCell: "_groupHeaderCell_137hw_153",
	secretRow: "_secretRow_137hw_157",
	groupHeaderContent: "_groupHeaderContent_137hw_179",
	expandIcon: "_expandIcon_137hw_188",
	secretNameCell: "_secretNameCell_137hw_196",
	secretName: "_secretName_137hw_196",
	secretIcon: "_secretIcon_137hw_210",
	secretStoreCell: "_secretStoreCell_137hw_215",
	secretCredentialsCell: "_secretCredentialsCell_137hw_219",
	providerLink: "_providerLink_137hw_223",
	credentialsCount: "_credentialsCount_137hw_227"
};
var ProjectExternalSecrets_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ProjectExternalSecrets_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ProjectExternalSecrets_vue_vue_type_style_index_0_lang_module_default }]]);
var _hoisted_1 = { for: "projectName" };
var _hoisted_2 = { for: "projectDescription" };
var _hoisted_3 = { id: "projectMembers" };
var _hoisted_4 = { for: "projectMembers" };
var _hoisted_5 = {
	key: 0,
	class: "mb-m"
};
var _hoisted_6 = { class: "mb-m" };
var SEARCH_THRESHOLD = 10;
var ProjectSettings_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ProjectSettings",
	setup(__props) {
		const usersStore = useUsersStore();
		const i18n = useI18n();
		const projectsStore = useProjectsStore();
		const rolesStore = useRolesStore();
		const cloudPlanStore = useCloudPlanStore();
		const userRoleProvisioningStore = useUserRoleProvisioningStore();
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
		const userSearchQuery = ref("");
		const userSearchResults = ref([]);
		const isLoadingUsers = ref(false);
		const usersList = computed(() => userSearchResults.value.filter((user) => {
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
			const user = usersStore.usersById[userId];
			if (!user) return;
			let role = firstLicensedRole.value;
			if (!role) return;
			if (user.role === ROLE.Owner || user.role === ROLE.Admin) {
				if (rolesStore.processedProjectRoles.find((r) => r.slug === "project:admin" && r.licensed)) role = "project:admin";
			}
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
				firstName: relation?.firstName ?? user?.firstName ?? null,
				lastName: relation?.lastName ?? user?.lastName ?? null,
				email: relation?.email ?? user?.email ?? null
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
		}, getDebounceTime(DEBOUNCE_TIME.INPUT.SEARCH));
		const onSearch = (value) => {
			search$1.value = value;
			debouncedSearch();
		};
		const onUpdateMembersTableOptions = (options) => {
			membersTableState.value = options;
		};
		const searchUsers = async (query) => {
			userSearchQuery.value = query;
			isLoadingUsers.value = true;
			try {
				const filter = query.trim() ? { fullText: query } : void 0;
				await usersStore.fetchUsers({
					take: 50,
					filter
				});
				if (query.trim()) userSearchResults.value = usersStore.allUsers.filter((user) => {
					const searchLower = query.toLowerCase();
					const fullName = `${user.firstName ?? ""} ${user.lastName ?? ""}`.toLowerCase();
					const email = (user.email ?? "").toLowerCase();
					return fullName.includes(searchLower) || email.includes(searchLower);
				});
				else userSearchResults.value = usersStore.allUsers;
			} catch (error) {
				toast.showError(error, i18n.baseText("projects.settings.users.search.error"));
			} finally {
				isLoadingUsers.value = false;
			}
		};
		const debouncedUserSearch = useDebounceFn(searchUsers, getDebounceTime(DEBOUNCE_TIME.INPUT.SEARCH));
		onBeforeMount(async () => {
			await searchUsers("");
		});
		const isProjectRoleProvisioningEnabled = computed(() => userRoleProvisioningStore.provisioningConfig?.scopesProvisionProjectRoles || false);
		onMounted(async () => {
			documentTitle.set(i18n.baseText("projects.settings"));
			selectProjectNameIfMatchesDefault();
			await Promise.all([userRoleProvisioningStore.getProvisioningConfig(), rolesStore.fetchRoles()]);
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
					variant: "subtle",
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
					variant: "solid",
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
					createVNode(ProjectExternalSecrets_default, { class: normalizeClass(_ctx.$style.externalSecrets) }, null, 8, ["class"]),
					createBaseVNode("fieldset", _hoisted_3, [
						createBaseVNode("h3", null, [createBaseVNode("label", _hoisted_4, toDisplayString(unref(i18n).baseText("projects.settings.projectMembers")), 1)]),
						createBaseVNode("div", { class: normalizeClass([_ctx.$style.membersInputRow, "mb-s"]) }, [createVNode(unref(N8nUserSelect_default), {
							id: "projectMembers",
							class: normalizeClass(_ctx.$style.userSelect),
							size: "large",
							users: usersList.value,
							"current-user-id": unref(usersStore).currentUser?.id,
							placeholder: unref(i18n).baseText("workflows.shareModal.select.placeholder"),
							"data-test-id": "project-members-select",
							remote: "",
							"remote-method": unref(debouncedUserSearch),
							loading: isLoadingUsers.value,
							"onUpdate:modelValue": onAddMember,
							disabled: isProjectRoleProvisioningEnabled.value
						}, {
							prefix: withCtx(() => [createVNode(unref(N8nIcon_default), { icon: "search" })]),
							_: 1
						}, 8, [
							"class",
							"users",
							"current-user-id",
							"placeholder",
							"remote-method",
							"loading",
							"disabled"
						]), shouldShowSearch.value ? (openBlock(), createBlock(unref(Input_default), {
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
						isProjectRoleProvisioningEnabled.value ? (openBlock(), createElementBlock("div", _hoisted_5, [createVNode(unref(Alert_default), {
							type: "info",
							title: unref(i18n).baseText("settings.provisioningProjectRolesHandledBySsoProvider.description")
						}, null, 8, ["title"])])) : createCommentVNode("", true),
						relationUsers.value.length > 0 ? (openBlock(), createElementBlock("div", {
							key: 1,
							class: normalizeClass(_ctx.$style.membersTableContainer)
						}, [createVNode(ProjectMembersTable_default, {
							"table-options": membersTableState.value,
							"onUpdate:tableOptions": _cache[5] || (_cache[5] = ($event) => membersTableState.value = $event),
							"data-test-id": "project-members-table",
							data: filteredMembersData.value,
							"current-user-id": unref(usersStore).currentUser?.id,
							"project-roles": unref(rolesStore).processedProjectRoles,
							actions: projectMembersActions.value,
							"can-edit-role": !isProjectRoleProvisioningEnabled.value,
							"onUpdate:options": onUpdateMembersTableOptions,
							"onUpdate:role": onUpdateMemberRole,
							onAction: onMembersListAction
						}, null, 8, [
							"table-options",
							"data",
							"current-user-id",
							"project-roles",
							"actions",
							"can-edit-role"
						])], 2)) : createCommentVNode("", true)
					]),
					createBaseVNode("fieldset", null, [
						createBaseVNode("h3", _hoisted_6, toDisplayString(unref(i18n).baseText("projects.settings.danger.title")), 1),
						createBaseVNode("small", { class: normalizeClass(_ctx.$style.danger) }, toDisplayString(unref(i18n).baseText("projects.settings.danger.message")), 3),
						createVNode(unref(N8nButton_default), {
							variant: "subtle",
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
					"onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => dialogVisible.value = $event),
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
					"onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => upgradeDialogVisible.value = $event),
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
	projectSettings: "_projectSettings_yap04_125",
	header: "_header_yap04_149",
	headerRow: "_headerRow_yap04_155",
	headerButtons: "_headerButtons_yap04_162",
	upgrade: "_upgrade_yap04_168",
	externalSecrets: "_externalSecrets_yap04_172",
	membersInputRow: "_membersInputRow_yap04_177",
	membersTableContainer: "_membersTableContainer_yap04_185",
	search: "_search_yap04_189",
	projectName: "_projectName_yap04_194",
	projectNameInput: "_projectNameInput_yap04_199",
	projectDescriptionInput: "_projectDescriptionInput_yap04_203",
	userSelect: "_userSelect_yap04_204",
	danger: "_danger_yap04_214"
};
var ProjectSettings_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ProjectSettings_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ProjectSettings_vue_vue_type_style_index_0_lang_module_default }]]);
export { ProjectSettings_default as default };
