import { C as computed, Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, T as createBlock, W as mergeProps, _ as Fragment, bt as withCtx, ct as resolveDynamicComponent, et as openBlock, it as renderList, j as createTextVNode, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import { M as useLocalStorage, _t as useI18n, g as onClickOutside, vt as I18nT } from "./_MapCache-JtHpcr1I.js";
import { D as N8nPopover_default, I as N8nLogo_default, M as N8nNavigationDropdown_default, N as N8nMenuItem_default, P as BetaTag_default, Sn as N8nButton_default, ht as N8nTooltip_default, mt as N8nLink_default, wn as N8nIcon_default, xn as N8nText_default, xt as N8nIconButton_default } from "./src-B6-MneGY.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { f as RouterLink } from "./truncate-DXd76JRD.js";
import { Dr as useUsersStore, O as useTelemetry, Tc as STORES, Zn as useSourceControlStore, hs as useSettingsStore, ms as useStorage, oa as useUIStore, oc as getBecomeCreatorCta, p as useCloudPlanStore } from "./builder.store-phNxKIwY.js";
import { Ha as DateTime, Ro as VIEWS, Vs as LOCAL_STORAGE_SIDEBAR_WIDTH, x as RELEASE_NOTES_URL } from "./constants-BZlxVYBu.js";
import { k as defineStore, r as useRootStore } from "./_baseOrderBy-D1tl8utV.js";
import { t as KeyboardShortcutTooltip_default } from "./KeyboardShortcutTooltip-C_yYKgzd.js";
import { t as useVersionsStore } from "./versions.store-CkffsF2l.js";
import { t as usePageRedirectionHelper } from "./usePageRedirectionHelper-C8gXfkqX.js";
import { i as useGlobalEntityCreation, t as useCommandBar } from "./useCommandBar-DMiQjYKv.js";
const isCustomMenuItem = (e) => "component" in e;
var LOCAL_STORAGE_KEY = "N8N_BECOME_TEMPLATE_CREATOR_CTA_DISMISSED_AT";
var RESHOW_DISMISSED_AFTER_DAYS = 30;
var POLL_INTERVAL_IN_MS = 900 * 1e3;
const useBecomeTemplateCreatorStore = defineStore(STORES.BECOME_TEMPLATE_CREATOR, () => {
	const cloudPlanStore = useCloudPlanStore();
	const rootStore = useRootStore();
	const dismissedAt = useStorage(LOCAL_STORAGE_KEY);
	const ctaMeetsCriteria = ref(false);
	const monitorCtasTimer = ref(null);
	const isDismissed = computed(() => {
		return dismissedAt.value ? !hasEnoughTimePassedSinceDismissal(dismissedAt.value) : false;
	});
	const showBecomeCreatorCta = computed(() => {
		return ctaMeetsCriteria.value && !cloudPlanStore.userIsTrialing && !isDismissed.value;
	});
	const dismissCta = () => {
		dismissedAt.value = DateTime.now().toISO();
	};
	const fetchBecomeCreatorCta = async () => {
		ctaMeetsCriteria.value = await getBecomeCreatorCta(rootStore.restApiContext);
	};
	const fetchUserCtasIfNeeded = async () => {
		if (isDismissed.value || cloudPlanStore.userIsTrialing || ctaMeetsCriteria.value) return;
		await fetchBecomeCreatorCta();
	};
	const startMonitoringCta = () => {
		if (monitorCtasTimer.value) return;
		setTimeout(fetchUserCtasIfNeeded, 1e3);
		monitorCtasTimer.value = setInterval(fetchUserCtasIfNeeded, POLL_INTERVAL_IN_MS);
	};
	const stopMonitoringCta = () => {
		if (!monitorCtasTimer.value) return;
		clearInterval(monitorCtasTimer.value);
		monitorCtasTimer.value = null;
	};
	return {
		showBecomeCreatorCta,
		dismissCta,
		startMonitoringCta,
		stopMonitoringCta
	};
});
function hasEnoughTimePassedSinceDismissal(dismissedAt) {
	return DateTime.fromISO(dismissedAt).plus({ days: RESHOW_DISMISSED_AFTER_DAYS }) <= DateTime.now();
}
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
		const { isEnabled: isCommandBarEnabled } = useCommandBar();
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
				[_ctx.$style.collapsed]: _ctx.isCollapsed
			}) }, [
				!_ctx.isCollapsed ? (openBlock(), createBlock(unref(RouterLink), {
					key: 0,
					to: { name: unref(VIEWS).HOMEPAGE },
					class: normalizeClass(_ctx.$style.logo)
				}, {
					default: withCtx(() => [createVNode(unref(N8nLogo_default), {
						size: "small",
						collapsed: _ctx.isCollapsed,
						"release-channel": unref(settingsStore).settings.releaseChannel
					}, {
						default: withCtx(() => [_ctx.isBeta ? (openBlock(), createBlock(BetaTag_default, {
							key: 0,
							class: normalizeClass(_ctx.$style.beta),
							"data-test-id": "beta-icon"
						}, null, 8, ["class"])) : createCommentVNode("", true), unref(sourceControlStore).preferences.branchReadOnly && !_ctx.isCollapsed ? (openBlock(), createBlock(unref(N8nTooltip_default), {
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
				!_ctx.hideCreate ? (openBlock(), createBlock(unref(N8nNavigationDropdown_default), {
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
							_: 2
						}, 1032, ["class", "onClick"]))]),
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
				unref(isCommandBarEnabled) ? (openBlock(), createBlock(KeyboardShortcutTooltip_default, {
					key: 2,
					placement: _ctx.isCollapsed ? "right" : "bottom",
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
				}, 8, ["placement", "label"])) : createCommentVNode("", true),
				createVNode(KeyboardShortcutTooltip_default, {
					placement: _ctx.isCollapsed ? "right" : "bottom",
					label: _ctx.isCollapsed ? unref(i18n).baseText("mainSidebar.state.expand") : unref(i18n).baseText("mainSidebar.state.collapse"),
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
	header: "_header_voqst_123",
	collapsed: "_collapsed_voqst_137",
	logo: "_logo_voqst_142",
	beta: "_beta_voqst_146",
	readOnlyEnvironmentIcon: "_readOnlyEnvironmentIcon_voqst_151",
	iconButton: "_iconButton_voqst_161",
	upgradeButton: "_upgradeButton_voqst_166"
};
var MainSidebarHeader_default = /* @__PURE__ */ __plugin_vue_export_helper_default(MainSidebarHeader_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": MainSidebarHeader_vue_vue_type_style_index_0_lang_module_default }]]);
var BecomeTemplateCreatorCta_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "BecomeTemplateCreatorCta",
	setup(__props) {
		const i18n = useI18n();
		const store = useBecomeTemplateCreatorStore();
		const telemetry = useTelemetry();
		const onClick = () => {
			telemetry.track("User clicked become creator CTA");
		};
		return (_ctx, _cache) => {
			return unref(store).showBecomeCreatorCta ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.container),
				"data-test-id": "become-template-creator-cta"
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.textAndCloseButton) }, [createVNode(unref(N8nText_default), { size: "small" }, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("becomeCreator.text")), 1)]),
				_: 1
			}), createBaseVNode("button", {
				class: normalizeClass(_ctx.$style.closeButton),
				"data-test-id": "close-become-template-creator-cta",
				onClick: _cache[0] || (_cache[0] = ($event) => unref(store).dismissCta())
			}, [createVNode(unref(N8nIcon_default), {
				icon: "x",
				title: unref(i18n).baseText("generic.close")
			}, null, 8, ["title"])], 2)], 2), createVNode(unref(N8nButton_default), {
				class: normalizeClass(_ctx.$style.becomeCreatorButton),
				label: unref(i18n).baseText("becomeCreator.buttonText"),
				type: "secondary",
				element: "a",
				href: "https://creators.n8n.io/hub",
				target: "_blank",
				onClick
			}, null, 8, ["class", "label"])], 2)) : createCommentVNode("", true);
		};
	}
});
var BecomeTemplateCreatorCta_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_1yloq_123",
	textAndCloseButton: "_textAndCloseButton_1yloq_132",
	text: "_text_1yloq_132",
	closeButton: "_closeButton_1yloq_145",
	becomeCreatorButton: "_becomeCreatorButton_1yloq_157"
};
var BecomeTemplateCreatorCta_default = /* @__PURE__ */ __plugin_vue_export_helper_default(BecomeTemplateCreatorCta_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": BecomeTemplateCreatorCta_vue_vue_type_style_index_0_lang_module_default }]]);
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
		const cloudPlanStore = useCloudPlanStore();
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
				{
					id: "version-upgrade-cta",
					component: VersionUpdateCTA_default,
					available: versionsStore.hasVersionUpdates && usersStore.canUserUpdateVersion,
					props: { tooltipText: !usersStore.canUserUpdateVersion ? i18n.baseText("whatsNew.updateNudgeTooltip") : void 0 }
				}
			]
		}));
		const userIsTrialing = computed(() => cloudPlanStore.userIsTrialing);
		function handleSelect(key) {
			emit("select", key);
		}
		function onLogout() {
			emit("logout");
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass({
				[_ctx.$style.bottomMenu]: true,
				[_ctx.$style.collapsed]: _ctx.isCollapsed
			}) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.bottomMenuItems) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.items, (item) => {
				return openBlock(), createElementBlock(Fragment, { key: item.id }, [item.children && item.id === "help" ? (openBlock(), createBlock(unref(N8nPopover_default), {
					key: "help",
					side: "right",
					align: "end",
					"side-offset": 12
				}, {
					content: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.popover) }, [
						!_ctx.isCollapsed && !userIsTrialing.value ? (openBlock(), createBlock(BecomeTemplateCreatorCta_default, { key: 0 })) : createCommentVNode("", true),
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
						whatsNewItems.value.available ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [createVNode(unref(N8nText_default), {
							bold: "",
							size: "small",
							class: normalizeClass(_ctx.$style.popoverTitle),
							color: "text-light"
						}, {
							default: withCtx(() => _cache[0] || (_cache[0] = [createTextVNode("What's new")])),
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
						}), 128))], 64)) : createCommentVNode("", true)
					], 2)]),
					trigger: withCtx(() => [createVNode(unref(N8nMenuItem_default), {
						"data-test-id": `main-sidebar-${item.id}`,
						item,
						compact: _ctx.isCollapsed,
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
						compact: _ctx.isCollapsed,
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
					compact: _ctx.isCollapsed,
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
	bottomMenu: "_bottomMenu_17gn9_123",
	collapsed: "_collapsed_17gn9_128",
	bottomMenuItems: "_bottomMenuItems_17gn9_132",
	popover: "_popover_17gn9_136",
	popoverTitle: "_popoverTitle_17gn9_143",
	divider: "_divider_17gn9_150"
};
var BottomMenu_default = /* @__PURE__ */ __plugin_vue_export_helper_default(BottomMenu_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": BottomMenu_vue_vue_type_style_index_0_lang_module_default }]]);
export { useBecomeTemplateCreatorStore as i, MainSidebarHeader_default as n, useSidebarLayout as r, BottomMenu_default as t };
