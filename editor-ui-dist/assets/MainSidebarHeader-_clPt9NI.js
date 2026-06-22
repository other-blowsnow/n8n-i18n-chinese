import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Cn as toDisplayString, E as createElementBlock, Gt as unref, It as ref, N as defineComponent, S as computed, T as createCommentVNode, U as mergeProps, _ as Fragment, bt as withCtx, j as createVNode, rt as renderList, st as resolveDynamicComponent, vn as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-CiTcVoZc.js";
import { c as I18nT, s as useI18n } from "./src-BxlYlwM1.js";
import { B as N8nPopover_default, Ja as N8nButton_default, K as N8nNavigationDropdown_default, Q as N8nLogo_default, Wi as N8nIconButton_default, Ya as N8nIcon_default, ct as N8nLink_default, lt as RouterLink, q as N8nMenuItem_default, qa as N8nText_default, zi as N8nTooltip_default } from "./src-BY3LHeey.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { wn as useSourceControlStore } from "./workflows.store-BKCVa7q0.js";
import { b as RELEASE_NOTES_URL, li as VIEWS } from "./constants-CLQJMg7Y.js";
import { t as useSettingsStore } from "./settings.store-HAN34Lkc.js";
import { n as onClickOutside } from "./core-CZJuH52F.js";
import { p as useTelemetry, t as useUsersStore } from "./users.store-AINJEAwY.js";
import { t as useVersionsStore } from "./versions.store-C17mmJoF.js";
import { t as usePageRedirectionHelper } from "./usePageRedirectionHelper-ZFOaDfHH.js";
import { t as KeyboardShortcutTooltip_default } from "./KeyboardShortcutTooltip-DyvxJbAV.js";
import { t as useGlobalEntityCreation } from "./useGlobalEntityCreation-BEYXnxp-.js";
//#region ../@n8n/design-system/src/types/menu.ts
var isCustomMenuItem = (e) => "component" in e;
//#endregion
//#region src/app/components/VersionUpdateCTA.vue
var VersionUpdateCTA_default = /* @__PURE__ */ defineComponent({
	__name: "VersionUpdateCTA",
	props: {
		disabled: {
			type: Boolean,
			default: false
		},
		tooltipText: { default: void 0 }
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const versionsStore = useVersionsStore();
		const pageRedirectionHelper = usePageRedirectionHelper();
		const telemetry = useTelemetry();
		const onUpdateClick = async () => {
			telemetry.track("User clicked on update button", { source: "main-sidebar" });
			await pageRedirectionHelper.goToVersions();
		};
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nMenuItem_default), {
				"data-test-id": "version-update-cta-button",
				item: {
					id: "version-update-cta",
					icon: {
						value: "status-warning",
						type: "icon",
						color: "primary"
					},
					disabled: props.disabled,
					disabledReason: props.tooltipText,
					label: unref(i18n).baseText("whatsNew.versionsBehind", { interpolate: { count: unref(versionsStore).nextVersions.length > 99 ? "99+" : unref(versionsStore).nextVersions.length } })
				},
				onClick: onUpdateClick
			}, null, 8, ["item"]);
		};
	}
});
//#endregion
//#region src/app/components/BottomMenu.vue?vue&type=script&setup=true&lang.ts
var BottomMenu_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "BottomMenu",
	props: {
		items: {},
		isCollapsed: { type: Boolean }
	},
	emits: ["select", "logout"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const versionsStore = useVersionsStore();
		const usersStore = useUsersStore();
		const i18n = useI18n();
		const whatsNewItems = computed(() => ({
			available: versionsStore.hasVersionUpdates || versionsStore.whatsNewArticles.length > 0,
			children: [
				...versionsStore.whatsNewArticles.map((article) => ({
					id: `whats-new-article-${article.id}`,
					label: article.title,
					size: "small",
					customIconSize: "small",
					icon: {
						type: "emoji",
						value: "•",
						color: !versionsStore.isWhatsNewArticleRead(article.id) ? "primary" : "text-light"
					}
				})),
				{
					id: "full-changelog",
					icon: "external-link",
					label: i18n.baseText("mainSidebar.whatsNew.fullChangelog"),
					link: {
						href: RELEASE_NOTES_URL,
						target: "_blank"
					},
					size: "small",
					customIconSize: "small"
				},
				...versionsStore.hasVersionUpdates ? [{
					id: "version-upgrade-cta",
					component: VersionUpdateCTA_default,
					props: {
						tooltipText: !usersStore.canUserUpdateVersion ? i18n.baseText("whatsNew.updateNudgeTooltip") : void 0,
						disabled: !usersStore.canUserUpdateVersion
					}
				}] : []
			]
		}));
		function handleSelect(key) {
			emit("select", key);
		}
		function onLogout() {
			emit("logout");
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass({
				[_ctx.$style.bottomMenu]: true,
				[_ctx.$style.collapsed]: __props.isCollapsed
			}) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.bottomMenuItems) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(__props.items, (item) => {
				return openBlock(), createElementBlock(Fragment, { key: item.id }, [item.children && item.id === "help" ? (openBlock(), createBlock(unref(N8nPopover_default), {
					key: "help",
					side: "right",
					align: "end",
					"side-offset": 12
				}, {
					content: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.popover) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(item.children, (child) => {
						return openBlock(), createElementBlock(Fragment, { key: child.id }, [unref(isCustomMenuItem)(child) ? (openBlock(), createBlock(resolveDynamicComponent(child.component), mergeProps({
							key: 0,
							ref_for: true
						}, child.props), null, 16)) : (openBlock(), createBlock(unref(N8nMenuItem_default), {
							key: 1,
							item: child,
							onClick: () => handleSelect(child.id)
						}, null, 8, ["item", "onClick"]))], 64);
					}), 128)), whatsNewItems.value.available ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [createVNode(unref(N8nText_default), {
						bold: "",
						size: "small",
						class: normalizeClass(_ctx.$style.popoverTitle),
						color: "text-light"
					}, {
						default: withCtx(() => [..._cache[0] || (_cache[0] = [createTextVNode("What's new", -1)])]),
						_: 1
					}, 8, ["class"]), (openBlock(true), createElementBlock(Fragment, null, renderList(whatsNewItems.value.children, (child) => {
						return openBlock(), createElementBlock(Fragment, { key: child.id }, [unref(isCustomMenuItem)(child) ? (openBlock(), createBlock(resolveDynamicComponent(child.component), mergeProps({
							key: 0,
							ref_for: true
						}, child.props), null, 16)) : (openBlock(), createBlock(unref(N8nMenuItem_default), {
							key: 1,
							item: child,
							onClick: () => handleSelect(child.id)
						}, null, 8, ["item", "onClick"]))], 64);
					}), 128))], 64)) : createCommentVNode("", true)], 2)]),
					trigger: withCtx(() => [createVNode(unref(N8nMenuItem_default), {
						"data-test-id": `main-sidebar-${item.id}`,
						item,
						compact: __props.isCollapsed,
						onClick: () => handleSelect(item.id)
					}, null, 8, [
						"data-test-id",
						"item",
						"compact",
						"onClick"
					])]),
					_: 2
				}, 1024)) : item.children && item.id === "settings" ? (openBlock(), createBlock(unref(N8nPopover_default), {
					key: "settings",
					side: "right",
					align: "end",
					"side-offset": 12
				}, {
					content: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.popover) }, [
						(openBlock(true), createElementBlock(Fragment, null, renderList(item.children, (child) => {
							return openBlock(), createElementBlock(Fragment, { key: child.id }, [unref(isCustomMenuItem)(child) ? (openBlock(), createBlock(resolveDynamicComponent(child.component), mergeProps({
								key: 0,
								ref_for: true
							}, child.props), null, 16)) : (openBlock(), createBlock(unref(N8nMenuItem_default), {
								key: 1,
								item: child,
								onClick: () => handleSelect(child.id)
							}, null, 8, ["item", "onClick"]))], 64);
						}), 128)),
						createBaseVNode("span", { class: normalizeClass(_ctx.$style.divider) }, null, 2),
						createVNode(unref(N8nMenuItem_default), {
							"data-test-id": "main-sidebar-log-out",
							item: {
								id: "sign-out",
								label: unref(i18n).baseText("auth.signout"),
								icon: "door-open"
							},
							onClick: onLogout
						}, null, 8, ["item"])
					], 2)]),
					trigger: withCtx(() => [createVNode(unref(N8nMenuItem_default), {
						"data-test-id": `main-sidebar-${item.id}`,
						item,
						compact: __props.isCollapsed,
						onClick: () => handleSelect(item.id)
					}, null, 8, [
						"data-test-id",
						"item",
						"compact",
						"onClick"
					])]),
					_: 2
				}, 1024)) : (openBlock(), createBlock(unref(N8nMenuItem_default), {
					key: 2,
					"data-test-id": `main-sidebar-${item.id}`,
					item,
					compact: __props.isCollapsed,
					class: normalizeClass(item.id === "resource-center" ? _ctx.$style.resourceCenterMenuItem : void 0),
					onClick: () => handleSelect(item.id)
				}, null, 8, [
					"data-test-id",
					"item",
					"compact",
					"class",
					"onClick"
				]))], 64);
			}), 128))], 2)], 2);
		};
	}
});
var BottomMenu_vue_vue_type_style_index_0_lang_module_default = {
	bottomMenu: "_bottomMenu_1ff4z_125",
	collapsed: "_collapsed_1ff4z_130",
	bottomMenuItems: "_bottomMenuItems_1ff4z_134",
	resourceCenterMenuItem: "_resourceCenterMenuItem_1ff4z_138",
	popover: "_popover_1ff4z_142",
	popoverTitle: "_popoverTitle_1ff4z_147",
	divider: "_divider_1ff4z_154"
};
var BottomMenu_default = /* @__PURE__ */ _plugin_vue_export_helper_default(BottomMenu_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": BottomMenu_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/app/components/MainSidebarHeader.vue?vue&type=script&setup=true&lang.ts
var MainSidebarHeader_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "MainSidebarHeader",
	props: {
		isCollapsed: { type: Boolean },
		hideCreate: { type: Boolean }
	},
	emits: ["collapse", "openCommandBar"],
	setup(__props, { emit: __emit }) {
		const emit = __emit;
		const i18n = useI18n();
		const sourceControlStore = useSourceControlStore();
		const settingsStore = useSettingsStore();
		const createBtn = ref();
		onClickOutside(createBtn, () => {
			createBtn.value?.close();
		});
		function toggleCollapse() {
			emit("collapse");
		}
		function openCommandBar(event) {
			emit("openCommandBar", event);
		}
		const { menu, handleSelect: handleMenuSelect, createProjectAppendSlotName, createWorkflowsAppendSlotName, createCredentialsAppendSlotName, projectsLimitReachedMessage, upgradeLabel, hasPermissionToCreateProjects } = useGlobalEntityCreation();
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass({
				[_ctx.$style.header]: true,
				[_ctx.$style.collapsed]: __props.isCollapsed
			}) }, [
				!__props.isCollapsed ? (openBlock(), createBlock(unref(RouterLink), {
					key: 0,
					to: { name: unref(VIEWS).HOMEPAGE },
					class: normalizeClass(_ctx.$style.logo)
				}, {
					default: withCtx(() => [createVNode(unref(N8nLogo_default), {
						size: "small",
						collapsed: __props.isCollapsed,
						"release-channel": unref(settingsStore).settings.releaseChannel
					}, {
						default: withCtx(() => [unref(sourceControlStore).preferences.branchReadOnly && !__props.isCollapsed ? (openBlock(), createBlock(unref(N8nTooltip_default), {
							key: 0,
							placement: "bottom"
						}, {
							content: withCtx(() => [createVNode(unref(I18nT), {
								keypath: "readOnlyEnv.tooltip",
								scope: "global"
							}, {
								link: withCtx(() => [createVNode(unref(N8nLink_default), {
									to: "https://docs.n8n.io/source-control-environments/setup/#step-4-connect-n8n-and-configure-your-instance",
									size: "small"
								}, {
									default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("readOnlyEnv.tooltip.link")), 1)]),
									_: 1
								})]),
								_: 1
							})]),
							default: withCtx(() => [createVNode(unref(N8nIcon_default), {
								"data-test-id": "read-only-env-icon",
								icon: "lock",
								class: normalizeClass(_ctx.$style.readOnlyEnvironmentIcon)
							}, null, 8, ["class"])]),
							_: 1
						})) : createCommentVNode("", true)]),
						_: 1
					}, 8, ["collapsed", "release-channel"])]),
					_: 1
				}, 8, ["to", "class"])) : createCommentVNode("", true),
				!__props.hideCreate ? (openBlock(), createBlock(unref(N8nNavigationDropdown_default), {
					key: 1,
					ref_key: "createBtn",
					ref: createBtn,
					"data-test-id": "universal-add",
					menu: unref(menu),
					teleport: true,
					onSelect: unref(handleMenuSelect)
				}, {
					[unref(createWorkflowsAppendSlotName)]: withCtx(() => [unref(sourceControlStore).preferences.branchReadOnly ? (openBlock(), createBlock(unref(N8nTooltip_default), {
						key: 0,
						placement: "right",
						content: unref(i18n).baseText("readOnlyEnv.cantAdd.workflow")
					}, {
						default: withCtx(() => [createVNode(unref(N8nIcon_default), {
							class: normalizeClass(_ctx.$style.iconButton),
							icon: "lock",
							size: "xsmall"
						}, null, 8, ["class"])]),
						_: 1
					}, 8, ["content"])) : createCommentVNode("", true)]),
					[unref(createCredentialsAppendSlotName)]: withCtx(() => [unref(sourceControlStore).preferences.branchReadOnly ? (openBlock(), createBlock(unref(N8nTooltip_default), {
						key: 0,
						placement: "right",
						content: unref(i18n).baseText("readOnlyEnv.cantAdd.credential")
					}, {
						default: withCtx(() => [createVNode(unref(N8nIcon_default), {
							class: normalizeClass(_ctx.$style.iconButton),
							icon: "lock",
							size: "xsmall"
						}, null, 8, ["class"])]),
						_: 1
					}, 8, ["content"])) : createCommentVNode("", true)]),
					[unref(createProjectAppendSlotName)]: withCtx(({ item }) => [unref(sourceControlStore).preferences.branchReadOnly ? (openBlock(), createBlock(unref(N8nTooltip_default), {
						key: 0,
						placement: "right",
						content: unref(i18n).baseText("readOnlyEnv.cantAdd.project")
					}, {
						default: withCtx(() => [createVNode(unref(N8nIcon_default), {
							class: normalizeClass(_ctx.$style.iconButton),
							icon: "lock",
							size: "xsmall"
						}, null, 8, ["class"])]),
						_: 1
					}, 8, ["content"])) : item.disabled ? (openBlock(), createBlock(unref(N8nTooltip_default), {
						key: 1,
						placement: "right",
						content: unref(projectsLimitReachedMessage)
					}, {
						default: withCtx(() => [!unref(hasPermissionToCreateProjects) ? (openBlock(), createBlock(unref(N8nIcon_default), {
							key: 0,
							class: normalizeClass(_ctx.$style.iconButton),
							icon: "lock",
							size: "xsmall"
						}, null, 8, ["class"])) : (openBlock(), createBlock(unref(N8nButton_default), {
							key: 1,
							variant: "subtle",
							size: "mini",
							class: normalizeClass(_ctx.$style.upgradeButton),
							onClick: ($event) => unref(handleMenuSelect)(item.id)
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(upgradeLabel)), 1)]),
							_: 1
						}, 8, ["class", "onClick"]))]),
						_: 2
					}, 1032, ["content"])) : createCommentVNode("", true)]),
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						class: "n8n-button--highlight",
						variant: "ghost",
						size: "small",
						icon: "plus",
						"icon-size": "large",
						"aria-label": "Add new item"
					})]),
					_: 2
				}, 1032, ["menu", "onSelect"])) : createCommentVNode("", true),
				createVNode(KeyboardShortcutTooltip_default, {
					placement: __props.isCollapsed ? "right" : "bottom",
					"show-after": 500,
					label: unref(i18n).baseText("nodeView.openCommandBar"),
					shortcut: {
						keys: ["k"],
						metaKey: true
					}
				}, {
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						class: "n8n-button--highlight",
						variant: "ghost",
						size: "small",
						icon: "search",
						"icon-size": "large",
						"aria-label": "Open command palette",
						onClick: openCommandBar
					})]),
					_: 1
				}, 8, ["placement", "label"]),
				createVNode(KeyboardShortcutTooltip_default, {
					placement: __props.isCollapsed ? "right" : "bottom",
					label: __props.isCollapsed ? unref(i18n).baseText("mainSidebar.state.expand") : unref(i18n).baseText("mainSidebar.state.collapse"),
					"show-after": 500,
					shortcut: { keys: ["["] }
				}, {
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						id: "toggle-sidebar-button",
						class: "n8n-button--highlight",
						variant: "ghost",
						size: "small",
						icon: "panel-left",
						"icon-size": "large",
						"aria-label": "Toggle sidebar",
						onClick: toggleCollapse
					})]),
					_: 1
				}, 8, ["placement", "label"])
			], 2);
		};
	}
});
var MainSidebarHeader_vue_vue_type_style_index_0_lang_module_default = {
	header: "_header_1bvb0_125",
	collapsed: "_collapsed_1bvb0_138",
	logo: "_logo_1bvb0_143",
	readOnlyEnvironmentIcon: "_readOnlyEnvironmentIcon_1bvb0_147",
	iconButton: "_iconButton_1bvb0_157",
	upgradeButton: "_upgradeButton_1bvb0_162"
};
var MainSidebarHeader_default = /* @__PURE__ */ _plugin_vue_export_helper_default(MainSidebarHeader_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": MainSidebarHeader_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
export { BottomMenu_default as n, MainSidebarHeader_default as t };
