import { C as computed, Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, T as createBlock, W as mergeProps, _ as Fragment, bt as withCtx, ct as resolveDynamicComponent, et as openBlock, it as renderList, j as createTextVNode, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { M as useLocalStorage, bt as I18nT, g as onClickOutside, yt as useI18n } from "./_MapCache-8-eqnC2S.js";
import { Ai as N8nIconButton_default, At as N8nLink_default, Bi as N8nButton_default, G as BetaTag_default, Hi as N8nIcon_default, Ht as N8nTooltip_default, R as N8nPopover_default, U as N8nNavigationDropdown_default, W as N8nMenuItem_default, jt as RouterLink, q as N8nLogo_default, zi as N8nText_default } from "./src-Cq27d_Gp.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import { Nt as useTelemetry, br as useSourceControlStore, fs as useSettingsStore, r as useUIStore, t as useUsersStore } from "./users.store-qBZsmf9-.js";
import { Xo as VIEWS, tc as LOCAL_STORAGE_SIDEBAR_WIDTH, x as RELEASE_NOTES_URL } from "./constants-Cyrg9Nbl.js";
import { t as useVersionsStore } from "./versions.store-YehYbHFz.js";
import { t as usePageRedirectionHelper } from "./usePageRedirectionHelper-DjPq0E7w.js";
import { t as KeyboardShortcutTooltip_default } from "./KeyboardShortcutTooltip-Dvjl2Kjb.js";
import { t as useGlobalEntityCreation } from "./useGlobalEntityCreation-qhjVTCDb.js";
const isCustomMenuItem = (e) => "component" in e;
function useSidebarLayout() {
	const uiStore = useUIStore();
	const isCollapsed = computed(() => uiStore.sidebarMenuCollapsed);
	const sidebarWidth = useLocalStorage(LOCAL_STORAGE_SIDEBAR_WIDTH, isCollapsed.value ? 42 : 300);
	const toggleCollapse = () => {
		uiStore.toggleSidebarMenuCollapse();
		if (!isCollapsed.value) sidebarWidth.value = 200;
		else sidebarWidth.value = 42;
	};
	const isResizing = ref(false);
	function onResizeStart() {
		isResizing.value = true;
	}
	function onResize(event) {
		if (isCollapsed.value && event.x > 100) {
			toggleCollapse();
			return;
		}
		if (isCollapsed.value) return;
		if (event.x < 100 && !isCollapsed.value) {
			toggleCollapse();
			return;
		}
		sidebarWidth.value = event.width;
	}
	function onResizeEnd() {
		isResizing.value = false;
	}
	return {
		isCollapsed,
		toggleCollapse,
		sidebarWidth,
		isResizing,
		onResizeStart,
		onResize,
		onResizeEnd
	};
}
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
								label: "Sign out",
								icon: "door-open"
							},
							onClick: onLogout
						})
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
					onClick: () => handleSelect(item.id)
				}, null, 8, [
					"data-test-id",
					"item",
					"compact",
					"onClick"
				]))], 64);
			}), 128))], 2)], 2);
		};
	}
});
var BottomMenu_vue_vue_type_style_index_0_lang_module_default = {
	bottomMenu: "_bottomMenu_1mulz_125",
	collapsed: "_collapsed_1mulz_130",
	bottomMenuItems: "_bottomMenuItems_1mulz_134",
	popover: "_popover_1mulz_138",
	popoverTitle: "_popoverTitle_1mulz_145",
	divider: "_divider_1mulz_152"
};
var BottomMenu_default = /* @__PURE__ */ __plugin_vue_export_helper_default(BottomMenu_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": BottomMenu_vue_vue_type_style_index_0_lang_module_default }]]);
var MainSidebarHeader_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "MainSidebarHeader",
	props: {
		isCollapsed: { type: Boolean },
		isBeta: { type: Boolean },
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
						default: withCtx(() => [__props.isBeta ? (openBlock(), createBlock(BetaTag_default, {
							key: 0,
							class: normalizeClass(_ctx.$style.beta),
							"data-test-id": "beta-icon"
						}, null, 8, ["class"])) : createCommentVNode("", true), unref(sourceControlStore).preferences.branchReadOnly && !__props.isCollapsed ? (openBlock(), createBlock(unref(N8nTooltip_default), {
							key: 1,
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
							size: "mini",
							class: normalizeClass(_ctx.$style.upgradeButton),
							type: "tertiary",
							onClick: ($event) => unref(handleMenuSelect)(item.id)
						}, {
							default: withCtx(() => [createTextVNode(toDisplayString(unref(upgradeLabel)), 1)]),
							_: 1
						}, 8, ["class", "onClick"]))]),
						_: 2
					}, 1032, ["content"])) : createCommentVNode("", true)]),
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						size: "small",
						type: "highlight",
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
						size: "small",
						type: "highlight",
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
						size: "small",
						type: "highlight",
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
	header: "_header_evx79_125",
	collapsed: "_collapsed_evx79_138",
	logo: "_logo_evx79_143",
	beta: "_beta_evx79_147",
	readOnlyEnvironmentIcon: "_readOnlyEnvironmentIcon_evx79_152",
	iconButton: "_iconButton_evx79_162",
	upgradeButton: "_upgradeButton_evx79_167"
};
var MainSidebarHeader_default = /* @__PURE__ */ __plugin_vue_export_helper_default(MainSidebarHeader_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": MainSidebarHeader_vue_vue_type_style_index_0_lang_module_default }]]);
export { BottomMenu_default as n, useSidebarLayout as r, MainSidebarHeader_default as t };
