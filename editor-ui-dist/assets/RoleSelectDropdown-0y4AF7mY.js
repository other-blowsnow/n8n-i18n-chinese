import "./chunk-CC9Q-vWm.js";
import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, H as mergeModels, It as ref, N as defineComponent, S as computed, T as createCommentVNode, U as mergeProps, _ as Fragment, bt as withCtx, dt as useModel, gt as watch, h as withModifiers, it as renderSlot, j as createVNode, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-Bs4WIMNP.js";
import { c as I18nT, s as useI18n } from "./src-CEUyFjtd.js";
import { Ja as N8nButton_default, Ti as N8nBadge_default, Ui as Input_default, Ya as N8nIcon_default, _t as useRouter, c as SelectItem_default, lt as N8nLink_default, qa as N8nText_default, s as Select_default, zi as N8nTooltip_default } from "./src-XWsjz-dU.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { t as ElDialog } from "./dialog-DESMSoCw.js";
import { D as APP_MODALS_ELEMENT_ID, di as VIEWS, u as CUSTOM_ROLES_DOCS_URL } from "./constants-BaNoJas_.js";
import { t as useSettingsStore } from "./settings.store-BSo6Wkgz.js";
import { n as hasPermission, p as useTelemetry } from "./users.store-CHh4wCL_.js";
import { t as usePageRedirectionHelper } from "./usePageRedirectionHelper-COLGp2w8.js";
import { i as UI_VISIBLE_SCOPES, r as TOTAL_PROJECT_PERMISSIONS } from "./projectRoleScopes-Df2fnwgR.js";
//#region src/features/roles/components/CustomRolesUpgradeModal.vue?vue&type=script&setup=true&lang.ts
var CustomRolesUpgradeModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "CustomRolesUpgradeModal",
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
			await goToUpgrade("custom-roles-selector", "upgrade-custom-roles");
			visible.value = false;
		};
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(ElDialog), {
				modelValue: visible.value,
				"onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => visible.value = $event),
				title: unref(i18n).baseText("projects.settings.role.upgrade.title"),
				width: "400",
				"append-to": `#${unref(APP_MODALS_ELEMENT_ID)}`
			}, {
				footer: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.footer) }, [createVNode(unref(N8nButton_default), {
					variant: "subtle",
					onClick: _cache[0] || (_cache[0] = ($event) => visible.value = false)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.cancel")), 1)]),
					_: 1
				}), createVNode(unref(N8nButton_default), {
					variant: "solid",
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
					default: withCtx(() => [createVNode(unref(I18nT), {
						keypath: "projects.settings.role.upgrade.custom.body",
						tag: "span"
					}, {
						documentation: withCtx(() => [createVNode(unref(N8nLink_default), {
							href: unref(CUSTOM_ROLES_DOCS_URL),
							"new-window": true
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.documentation")), 1)]),
							_: 1
						}, 8, ["href"])]),
						_: 1
					})]),
					_: 1
				})], 2)]),
				_: 1
			}, 8, [
				"modelValue",
				"title",
				"append-to"
			]);
		};
	}
});
var CustomRolesUpgradeModal_vue_vue_type_style_index_0_lang_module_default = {
	content: "_content_c8g9i_125",
	footer: "_footer_c8g9i_129",
	externalIcon: "_externalIcon_c8g9i_135"
};
var CustomRolesUpgradeModal_default = /* @__PURE__ */ _plugin_vue_export_helper_default(CustomRolesUpgradeModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": CustomRolesUpgradeModal_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/roles/components/RoleHoverPopover.vue?vue&type=script&setup=true&lang.ts
var RoleHoverPopover_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "RoleHoverPopover",
	props: {
		role: {},
		permissionCount: { default: void 0 },
		totalPermissions: { default: void 0 },
		editRouteName: { default: VIEWS.PROJECT_ROLE_SETTINGS },
		viewRouteName: { default: VIEWS.PROJECT_ROLE_VIEW },
		fromView: { default: VIEWS.PROJECT_SETTINGS }
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const router = useRouter();
		const settingsStore = useSettingsStore();
		const upgradeModalVisible = ref(false);
		const canManageRoles = computed(() => hasPermission(["rbac"], { rbac: { scope: "role:manage" } }));
		const canEditRole = computed(() => canManageRoles.value && !props.role.systemRole);
		const resolvedPermissionCount = computed(() => props.permissionCount ?? props.role.scopes?.filter((scope) => UI_VISIBLE_SCOPES.has(scope)).length ?? 0);
		const resolvedTotalPermissions = computed(() => props.totalPermissions ?? TOTAL_PROJECT_PERMISSIONS);
		const buttonText = computed(() => canEditRole.value ? i18n.baseText("projects.settings.role.popover.viewAndEdit") : i18n.baseText("projects.settings.role.popover.viewDetails"));
		const onButtonClick = () => {
			if (!settingsStore.isCustomRolesFeatureEnabled) {
				upgradeModalVisible.value = true;
				return;
			}
			router.push({
				name: canEditRole.value ? props.editRouteName : props.viewRouteName,
				params: { roleSlug: props.role.slug },
				query: { from: props.fromView }
			});
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock(Fragment, null, [createVNode(unref(N8nTooltip_default), {
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
						size: "large",
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
							count: String(resolvedPermissionCount.value),
							total: String(resolvedTotalPermissions.value)
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
						variant: "outline",
						size: "small",
						class: normalizeClass(_ctx.$style.actionButton),
						disabled: !canManageRoles.value,
						onClick: onButtonClick
					}, {
						default: withCtx(() => [createTextVNode(toDisplayString(buttonText.value) + " ", 1), createVNode(unref(N8nIcon_default), {
							icon: "arrow-up-right",
							size: "large",
							class: normalizeClass(_ctx.$style.externalIcon)
						}, null, 8, ["class"])]),
						_: 1
					}, 8, ["class", "disabled"])
				], 2)]),
				default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
				_: 3
			}), createVNode(CustomRolesUpgradeModal_default, {
				modelValue: upgradeModalVisible.value,
				"onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => upgradeModalVisible.value = $event)
			}, null, 8, ["modelValue"])], 64);
		};
	}
});
var RoleHoverPopover_vue_vue_type_style_index_0_lang_module_default = {
	popoverContent: "_popoverContent_1vgnc_125",
	roleName: "_roleName_1vgnc_130",
	permissionCount: "_permissionCount_1vgnc_134",
	description: "_description_1vgnc_138",
	actionButton: "_actionButton_1vgnc_142",
	externalIcon: "_externalIcon_1vgnc_148"
};
var RoleHoverPopover_default = /* @__PURE__ */ _plugin_vue_export_helper_default(RoleHoverPopover_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": RoleHoverPopover_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/roles/components/RoleContactAdminModal.vue?vue&type=script&setup=true&lang.ts
var RoleContactAdminModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "RoleContactAdminModal",
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
				"show-close": true,
				"append-to": `#${unref(APP_MODALS_ELEMENT_ID)}`
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
					default: withCtx(() => [createVNode(unref(I18nT), {
						keypath: bodyKey.value,
						tag: "span"
					}, {
						documentation: withCtx(() => [createVNode(unref(N8nLink_default), {
							href: unref(CUSTOM_ROLES_DOCS_URL),
							"new-window": true
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.documentation")), 1)]),
							_: 1
						}, 8, ["href"])]),
						_: 1
					}, 8, ["keypath"])]),
					_: 1
				})], 2)]),
				_: 1
			}, 8, ["modelValue", "append-to"]);
		};
	}
});
var RoleContactAdminModal_vue_vue_type_style_index_0_lang_module_default = { content: "_content_186py_125" };
var RoleContactAdminModal_default = /* @__PURE__ */ _plugin_vue_export_helper_default(RoleContactAdminModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": RoleContactAdminModal_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/roles/components/RoleSelectDropdown.vue?vue&type=script&setup=true&lang.ts
var RoleSelectDropdown_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "RoleSelectDropdown",
	props: {
		systemRoles: {},
		customRoles: {},
		currentRole: {},
		hasCustomRolesLicense: { type: Boolean },
		canManageRoles: { type: Boolean },
		addCustomRoleRouteName: {},
		loading: {
			type: Boolean,
			default: false
		},
		testId: { default: "role-dropdown" },
		permissionCountFn: {
			type: Function,
			default: void 0
		},
		totalPermissions: { default: void 0 },
		editRouteName: { default: void 0 },
		viewRouteName: { default: void 0 },
		fromView: { default: void 0 }
	},
	emits: ["update:role", "system-role-upgrade-needed"],
	setup(__props, { emit: __emit }) {
		const props = __props;
		const emit = __emit;
		const i18n = useI18n();
		const router = useRouter();
		const telemetry = useTelemetry();
		const dropdownOpen = ref(false);
		const contactAdminModalVisible = ref(false);
		const upgradeModalVisible = ref(false);
		const searchQuery = ref("");
		watch(dropdownOpen, (open) => {
			if (!open) {
				searchQuery.value = "";
				setTimeout(() => {
					if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
				}, 0);
			}
		});
		const closeDropdown = () => {
			dropdownOpen.value = false;
		};
		const selectedRole = computed(() => [...props.systemRoles, ...props.customRoles].find((role) => role.slug === props.currentRole));
		const filteredSystemRoles = computed(() => {
			const query = searchQuery.value.toLowerCase().trim();
			if (!query) return props.systemRoles;
			return props.systemRoles.filter((role) => role.displayName.toLowerCase().includes(query));
		});
		const filteredCustomRoles = computed(() => {
			const query = searchQuery.value.toLowerCase().trim();
			if (!query) return props.customRoles;
			return props.customRoles.filter((role) => role.displayName.toLowerCase().includes(query));
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
						role,
						requiresUpgrade: !role.licensed
					});
				});
			}
			if (filteredCustomRoles.value.length > 0 || !searchQuery.value && !props.hasCustomRolesLicense) {
				items.push({
					type: "label",
					label: i18n.baseText("projects.settings.role.selector.section.custom")
				});
				filteredCustomRoles.value.forEach((role) => {
					items.push({
						value: role.slug,
						label: role.displayName,
						role,
						requiresUpgrade: !role.licensed
					});
				});
			}
			return items;
		});
		const onRoleSelect = (value) => {
			if (!value || typeof value !== "string") return;
			const role = [...props.systemRoles, ...props.customRoles].find((r) => r.slug === value);
			if (role && !role.licensed) {
				closeDropdown();
				if (role.systemRole) emit("system-role-upgrade-needed");
				else upgradeModalVisible.value = true;
				return;
			}
			emit("update:role", value);
		};
		const onAddCustomRoleClick = () => {
			telemetry.track("User clicked add custom role from role selector");
			closeDropdown();
			if (!props.hasCustomRolesLicense) upgradeModalVisible.value = true;
			else if (!props.canManageRoles) contactAdminModalVisible.value = true;
			else router.push({ name: props.addCustomRoleRouteName });
		};
		const isUnavailableRoleItem = (item) => item.requiresUpgrade === true;
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [
				createVNode(unref(Select_default), {
					open: dropdownOpen.value,
					"onUpdate:open": _cache[4] || (_cache[4] = ($event) => dropdownOpen.value = $event),
					items: roleItems.value,
					"model-value": __props.currentRole,
					size: "small",
					variant: "ghost",
					position: "popper",
					disabled: __props.loading,
					"content-class": _ctx.$style.roleSelectContent,
					class: normalizeClass(_ctx.$style.roleSelect),
					"data-test-id": __props.testId,
					"onUpdate:modelValue": onRoleSelect
				}, {
					default: withCtx(() => [createVNode(unref(N8nTooltip_default), {
						content: selectedRole.value?.displayName,
						disabled: !selectedRole.value || dropdownOpen.value,
						placement: "top",
						"as-child": ""
					}, {
						default: withCtx(() => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.triggerContent) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.triggerLabel) }, toDisplayString(selectedRole.value?.displayName), 3), __props.loading ? (openBlock(), createBlock(unref(N8nIcon_default), {
							key: 0,
							icon: "spinner",
							spin: "",
							size: "small"
						})) : createCommentVNode("", true)], 2)]),
						_: 1
					}, 8, ["content", "disabled"])]),
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
						role: item.role,
						"permission-count": __props.permissionCountFn ? __props.permissionCountFn(item.role) : void 0,
						"total-permissions": __props.totalPermissions,
						"edit-route-name": __props.editRouteName,
						"view-route-name": __props.viewRouteName,
						"from-view": __props.fromView
					}, {
						default: withCtx(() => [createVNode(unref(SelectItem_default), mergeProps(item, { class: _ctx.$style.selectItem }), {
							"item-label": withCtx(() => [createVNode(unref(N8nText_default), {
								tag: "span",
								size: "medium",
								color: isUnavailableRoleItem(item) ? "text-light" : "text-dark",
								class: normalizeClass(_ctx.$style.itemLabel)
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(item.label), 1)]),
								_: 2
							}, 1032, ["color", "class"])]),
							"item-trailing": withCtx(() => [isUnavailableRoleItem(item) ? (openBlock(), createBlock(unref(N8nBadge_default), {
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
					}, 1032, [
						"role",
						"permission-count",
						"total-permissions",
						"edit-route-name",
						"view-route-name",
						"from-view"
					])) : createCommentVNode("", true)]),
					label: withCtx(({ item }) => [createBaseVNode("span", { class: normalizeClass(_ctx.$style.sectionLabelContent) }, [createTextVNode(toDisplayString(item.label) + " ", 1), item.label === unref(i18n).baseText("projects.settings.role.selector.section.custom") && !__props.hasCustomRolesLicense ? (openBlock(), createBlock(unref(N8nBadge_default), {
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
					"disabled",
					"content-class",
					"class",
					"data-test-id"
				]),
				createVNode(RoleContactAdminModal_default, {
					modelValue: contactAdminModalVisible.value,
					"onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => contactAdminModalVisible.value = $event),
					"custom-roles-exist": __props.customRoles.length > 0
				}, null, 8, ["modelValue", "custom-roles-exist"]),
				createVNode(CustomRolesUpgradeModal_default, {
					modelValue: upgradeModalVisible.value,
					"onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => upgradeModalVisible.value = $event)
				}, null, 8, ["modelValue"])
			], 2);
		};
	}
});
var RoleSelectDropdown_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_oxfjk_125",
	searchContainer: "_searchContainer_oxfjk_131",
	searchInput: "_searchInput_oxfjk_135",
	roleSelect: "_roleSelect_oxfjk_143",
	triggerContent: "_triggerContent_oxfjk_154",
	triggerLabel: "_triggerLabel_oxfjk_163",
	itemLabel: "_itemLabel_oxfjk_170",
	selectItem: "_selectItem_oxfjk_178",
	upgradeBadge: "_upgradeBadge_oxfjk_185",
	sectionLabelContent: "_sectionLabelContent_oxfjk_190",
	sectionUpgradeBadge: "_sectionUpgradeBadge_oxfjk_196",
	addCustomRoleButton: "_addCustomRoleButton_oxfjk_203",
	roleSelectContent: "_roleSelectContent_oxfjk_219"
};
var RoleSelectDropdown_default = /* @__PURE__ */ _plugin_vue_export_helper_default(RoleSelectDropdown_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": RoleSelectDropdown_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { CustomRolesUpgradeModal_default as n, RoleSelectDropdown_default as t };
