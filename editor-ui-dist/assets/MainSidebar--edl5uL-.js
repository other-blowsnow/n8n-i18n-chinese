import { C as computed, Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, G as nextTick, Gt as unref, It as ref, J as onBeforeUnmount, M as createVNode, P as defineComponent, Q as onUnmounted, T as createBlock, W as mergeProps, Z as onMounted, _ as Fragment, _t as watch, b as Teleport, bn as normalizeStyle, bt as withCtx, ct as resolveDynamicComponent, et as openBlock, it as renderList, j as createTextVNode, q as onBeforeMount, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-tP5dCd7J.js";
import { _t as I18nT, g as onClickOutside, gt as useI18n, j as useLocalStorage, pt as i18n } from "./_MapCache-DZpzsuCB.js";
import { C as N8nResizeWrapper_default, D as N8nPopoverReka_default, Gn as N8nIcon_default, Hn as N8nText_default, I as N8nLogo_default, N as N8nNavigationDropdown_default, P as N8nMenuItem_default, Un as N8nButton_default, ht as N8nTooltip_default, mt as N8nLink_default, s as N8nScrollArea_default, xt as N8nIconButton_default } from "./src-j4VKDieO.js";
import "./en-b3uD8cvU.js";
import "./preload-helper-CR0ecmWK.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { v as useRoute, y as useRouter } from "./truncate-BlCeUq7F.js";
import "./overlay-Crh-SkkJ.js";
import "./empty-BuGRxzl4.js";
import "./useMessage-LAVj4VkL.js";
import { $o as useSettingsStore, Cc as STORES, Fn as useSourceControlStore, Js as getBecomeCreatorCta, Pn as useProjectsStore, Qo as useStorage, Wi as useUIStore, dr as useUsersStore, nr as hasPermission, p as useTelemetry, v as useWorkflowsStore } from "./builder.store-BjWbk2Wl.js";
import "./sanitize-html-Cft-jOcY.js";
import "./CalendarDate-B-JEhNYg.js";
import "./path-browserify-BgjP7RyT.js";
import { C as RELEASE_NOTES_URL, Ga as DateTime, Ho as ABOUT_MODAL_KEY, Ks as LOCAL_STORAGE_SIDEBAR_WIDTH, Qo as EXPERIMENT_TEMPLATE_RECO_V3_KEY, Vo as VIEWS, Xo as EXPERIMENT_TEMPLATES_DATA_QUALITY_KEY, Zo as EXPERIMENT_TEMPLATE_RECO_V2_KEY, hs as WHATS_NEW_MODAL_KEY, jo as getResourcePermissions } from "./constants-ksa9xIxI.js";
import "./merge-D6lLi7TL.js";
import { k as defineStore, r as useRootStore } from "./_baseOrderBy-B2FQHwl_.js";
import "./dateformat-hG8NERse.js";
import "./useDebounce-Cb7xvwM5.js";
import "./npsSurvey.store-KZKvEKjG.js";
import { t as useCloudPlanStore } from "./cloudPlan.store-2sNk8KGc.js";
import { a as useTemplatesDataQualityStore, i as trackTemplatesClick, n as TemplateClickSource, t as useTemplatesStore } from "./templates.store-Bn6ky68e.js";
import "./focusPanel.store-B3Hj42tS.js";
import "./useWorkflowSaving-Cw6HTOE_.js";
import "./retry-CMAFrhVi.js";
import "./executions.store-C5l19MhO.js";
import "./useRunWorkflow-XIsejmpa.js";
import "./usePinnedData-CWeGQujV.js";
import { _ as useCalloutHelpers } from "./nodeCreator.store-DIZVn2cH.js";
import "./nodeIcon-7dyMxFgB.js";
import "./useClipboard-Dy2su5yb.js";
import "./useCanvasOperations-DMjr_djE.js";
import "./folders.store-BHgrqAL-.js";
import "./NodeIcon-BDiqVc0r.js";
import { t as KeyboardShortcutTooltip_default } from "./KeyboardShortcutTooltip-Clqv-mcZ.js";
import { t as useVersionsStore } from "./versions.store-D8eaWwWC.js";
import { t as usePageRedirectionHelper } from "./usePageRedirectionHelper-DuL7b4l7.js";
import "./dataTable.store-DZQFcsqE.js";
import { i as useGlobalEntityCreation, n as useBugReporting, r as EXTERNAL_LINKS, t as useCommandBar } from "./useCommandBar-DMtTPvpr.js";
import "./uniqBy-BVnXCFIn.js";
import "./ProjectIcon-DTrnRNdg.js";
import "./CredentialIcon-CHvZKgl9.js";
import "./FileSaver.min--9uV1QmK.js";
import "./sortByProperty-DAqnDMg7.js";
import { l as CHAT_VIEW } from "./constants-qk3hx0l8.js";
import "./useRecentResources-JcD1xHVW.js";
import { t as sourceControlEventBus } from "./sourceControl.eventBus-Df3ar02x.js";
import { t as useKeybindings } from "./useKeybindings-DXSpR_-o.js";
import { n as usePersonalizedTemplatesV2Store, t as usePersonalizedTemplatesV3Store } from "./personalizedTemplatesV3.store-BcMODHqP.js";
import "./chat.store-DnJwLoWK.js";
import "./fileUtils-D3GQ2UWQ.js";
import { t as useSettingsItems } from "./useSettingsItems-Ck-M2q_A.js";
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
var BecomeTemplateCreatorCta_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "BecomeTemplateCreatorCta",
	setup(__props) {
		const i18n$1 = useI18n();
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
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n$1).baseText("becomeCreator.text")), 1)]),
				_: 1
			}), createBaseVNode("button", {
				class: normalizeClass(_ctx.$style.closeButton),
				"data-test-id": "close-become-template-creator-cta",
				onClick: _cache[0] || (_cache[0] = ($event) => unref(store).dismissCta())
			}, [createVNode(unref(N8nIcon_default), {
				icon: "x",
				title: unref(i18n$1).baseText("generic.close")
			}, null, 8, ["title"])], 2)], 2), createVNode(unref(N8nButton_default), {
				class: normalizeClass(_ctx.$style.becomeCreatorButton),
				label: unref(i18n$1).baseText("becomeCreator.buttonText"),
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
		const i18n$1 = useI18n();
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
					label: unref(i18n$1).baseText("whatsNew.versionsBehind", { interpolate: { count: unref(versionsStore).nextVersions.length > 99 ? "99+" : unref(versionsStore).nextVersions.length } })
				},
				onClick: onUpdateClick
			}, null, 8, ["item"]);
		};
	}
});
var ProjectNavigation_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ProjectNavigation",
	props: {
		collapsed: { type: Boolean },
		planName: {}
	},
	setup(__props) {
		const props = __props;
		const locale = useI18n();
		const globalEntityCreation = useGlobalEntityCreation();
		const projectsStore = useProjectsStore();
		const settingsStore = useSettingsStore();
		const usersStore = useUsersStore();
		const displayProjects = computed(() => globalEntityCreation.displayProjects.value);
		const isFoldersFeatureEnabled = computed(() => settingsStore.isFoldersFeatureEnabled);
		const isChatLinkAvailable = computed(() => settingsStore.isChatFeatureEnabled && hasPermission(["rbac"], { rbac: { scope: "chatHub:message" } }));
		const hasMultipleVerifiedUsers = computed(() => usersStore.allUsers.filter((user) => !user.isPendingUser).length > 1);
		const home$1 = computed(() => ({
			id: "home",
			label: locale.baseText("projects.menu.overview"),
			icon: "house",
			route: { to: { name: VIEWS.HOMEPAGE } }
		}));
		const shared = computed(() => ({
			id: "shared",
			label: locale.baseText("projects.menu.shared"),
			icon: "share",
			route: { to: { name: VIEWS.SHARED_WITH_ME } }
		}));
		const getProjectMenuItem = (project) => ({
			id: project.id,
			label: project.name ?? "",
			icon: project.icon,
			route: { to: {
				name: VIEWS.PROJECTS_WORKFLOWS,
				params: { projectId: project.id }
			} }
		});
		const personalProject = computed(() => ({
			id: projectsStore.personalProject?.id ?? "",
			label: locale.baseText("projects.menu.personal"),
			icon: "user",
			route: { to: {
				name: VIEWS.PROJECTS_WORKFLOWS,
				params: { projectId: projectsStore.personalProject?.id }
			} }
		}));
		const activeTabId = computed(() => {
			return (Array.isArray(projectsStore.projectNavActiveId) ? projectsStore.projectNavActiveId[0] : projectsStore.projectNavActiveId) ?? void 0;
		});
		const chat = computed(() => ({
			id: "chat",
			icon: "message-circle",
			label: locale.baseText("projects.menu.chat"),
			position: "bottom",
			route: { to: { name: CHAT_VIEW } }
		}));
		async function onSourceControlPull() {
			await projectsStore.getMyProjects();
		}
		onBeforeMount(async () => {
			await usersStore.fetchUsers();
			sourceControlEventBus.on("pull", onSourceControlPull);
		});
		onBeforeUnmount(() => {
			sourceControlEventBus.off("pull", onSourceControlPull);
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.projects) }, [
				createBaseVNode("div", { class: normalizeClass([_ctx.$style.home, props.collapsed ? _ctx.$style.collapsed : ""]) }, [
					createVNode(unref(N8nMenuItem_default), {
						item: home$1.value,
						compact: props.collapsed,
						active: activeTabId.value === "home",
						"data-test-id": "project-home-menu-item"
					}, null, 8, [
						"item",
						"compact",
						"active"
					]),
					unref(projectsStore).isTeamProjectFeatureEnabled || isFoldersFeatureEnabled.value ? (openBlock(), createBlock(unref(N8nMenuItem_default), {
						key: 0,
						item: personalProject.value,
						compact: props.collapsed,
						active: activeTabId.value === personalProject.value.id,
						"data-test-id": "project-personal-menu-item"
					}, null, 8, [
						"item",
						"compact",
						"active"
					])) : createCommentVNode("", true),
					(unref(projectsStore).isTeamProjectFeatureEnabled || isFoldersFeatureEnabled.value) && hasMultipleVerifiedUsers.value ? (openBlock(), createBlock(unref(N8nMenuItem_default), {
						key: 1,
						item: shared.value,
						compact: props.collapsed,
						active: activeTabId.value === "shared",
						"data-test-id": "project-shared-menu-item"
					}, null, 8, [
						"item",
						"compact",
						"active"
					])) : createCommentVNode("", true),
					isChatLinkAvailable.value ? (openBlock(), createBlock(unref(N8nMenuItem_default), {
						key: 2,
						item: chat.value,
						compact: props.collapsed,
						active: activeTabId.value === "chat",
						"data-test-id": "project-chat-menu-item"
					}, null, 8, [
						"item",
						"compact",
						"active"
					])) : createCommentVNode("", true)
				], 2),
				!props.collapsed && unref(projectsStore).isTeamProjectFeatureEnabled && displayProjects.value.length > 0 ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					class: normalizeClass([_ctx.$style.projectsLabel]),
					size: "small",
					bold: "",
					role: "heading",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("projects.menu.title")), 1)]),
					_: 1
				}, 8, ["class"])) : createCommentVNode("", true),
				unref(projectsStore).isTeamProjectFeatureEnabled || isFoldersFeatureEnabled.value ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.projectItems)
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(displayProjects.value, (project) => {
					return openBlock(), createBlock(unref(N8nMenuItem_default), {
						key: project.id,
						class: normalizeClass({ [_ctx.$style.collapsed]: props.collapsed }),
						item: getProjectMenuItem(project),
						compact: props.collapsed,
						active: activeTabId.value === project.id,
						"data-test-id": "project-menu-item"
					}, null, 8, [
						"class",
						"item",
						"compact",
						"active"
					]);
				}), 128))], 2)) : createCommentVNode("", true)
			], 2);
		};
	}
});
var ProjectNavigation_vue_vue_type_style_index_0_lang_module_default = {
	projects: "_projects_cvp5s_123",
	plusBtn: "_plusBtn_cvp5s_128",
	projectItems: "_projectItems_cvp5s_132",
	upgradeLink: "_upgradeLink_cvp5s_136",
	projectsLabel: "_projectsLabel_cvp5s_141",
	collapsed: "_collapsed_cvp5s_150",
	addFirstProjectBtn: "_addFirstProjectBtn_cvp5s_163",
	home: "_home_cvp5s_172"
};
var ProjectNavigation_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ProjectNavigation_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ProjectNavigation_vue_vue_type_style_index_0_lang_module_default }]]);
var MainSidebarSourceControl_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "MainSidebarSourceControl",
	props: { isCollapsed: { type: Boolean } },
	setup(__props) {
		const sourceControlStore = useSourceControlStore();
		const projectStore = useProjectsStore();
		const i18n$1 = useI18n();
		const route = useRoute();
		const router = useRouter();
		const tooltipOpenDelay = ref(300);
		const currentBranch = computed(() => {
			return sourceControlStore.preferences.branchName;
		});
		const hasPushPermission = computed(() => {
			return hasPermission(["rbac"], { rbac: { scope: "sourceControl:push" } }) || projectStore.myProjects.some((project) => project.type === "team" && getResourcePermissions(project?.scopes)?.sourceControl?.push);
		});
		const hasPullPermission = computed(() => {
			return hasPermission(["rbac"], { rbac: { scope: "sourceControl:pull" } });
		});
		const sourceControlAvailable = computed(() => sourceControlStore.isEnterpriseSourceControlEnabled && (hasPullPermission.value || hasPushPermission.value));
		function getAccessibleTextColor(backgroundColor) {
			const hex = backgroundColor.replace("#", "");
			const r = parseInt(hex.slice(0, 2), 16) / 255;
			const g = parseInt(hex.slice(2, 4), 16) / 255;
			const b = parseInt(hex.slice(4, 6), 16) / 255;
			const getLuminance = (channel) => {
				return channel <= .03928 ? channel / 12.92 : Math.pow((channel + .055) / 1.055, 2.4);
			};
			return .2126 * getLuminance(r) + .7152 * getLuminance(g) + .0722 * getLuminance(b) > .5 ? "#000000" : "#ffffff";
		}
		const accessibleTextColor = computed(() => {
			return getAccessibleTextColor(sourceControlStore.preferences.branchColor);
		});
		async function pushWorkfolder() {
			router.push({ query: {
				...route.query,
				sourceControl: "push"
			} });
		}
		function pullWorkfolder() {
			router.push({ query: {
				...route.query,
				sourceControl: "pull"
			} });
		}
		return (_ctx, _cache) => {
			return sourceControlAvailable.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass({
					[_ctx.$style.sync]: true,
					[_ctx.$style.collapsed]: _ctx.isCollapsed,
					[_ctx.$style.isConnected]: unref(sourceControlStore).isEnterpriseSourceControlEnabled
				}),
				"data-test-id": "main-sidebar-source-control"
			}, [unref(sourceControlStore).preferences.connected && unref(sourceControlStore).preferences.branchName ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.connected),
				"data-test-id": "main-sidebar-source-control-connected"
			}, [createVNode(unref(N8nTooltip_default), {
				disabled: !_ctx.isCollapsed,
				"show-after": tooltipOpenDelay.value,
				placement: "right"
			}, {
				content: withCtx(() => [createBaseVNode("div", null, toDisplayString(currentBranch.value), 1)]),
				default: withCtx(() => [createBaseVNode("span", {
					class: normalizeClass(_ctx.$style.icon),
					style: normalizeStyle({
						color: accessibleTextColor.value,
						background: unref(sourceControlStore).preferences.branchColor
					})
				}, [createVNode(unref(N8nIcon_default), {
					icon: "git-branch",
					size: "small"
				}), !_ctx.isCollapsed ? (openBlock(), createBlock(unref(N8nText_default), {
					key: 0,
					bold: "",
					size: "small",
					class: normalizeClass(_ctx.$style.branchName)
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(currentBranch.value), 1)]),
					_: 1
				}, 8, ["class"])) : createCommentVNode("", true)], 6)]),
				_: 1
			}, 8, ["disabled", "show-after"]), createBaseVNode("div", null, [createVNode(unref(N8nTooltip_default), {
				disabled: !_ctx.isCollapsed && hasPullPermission.value,
				"show-after": tooltipOpenDelay.value,
				placement: _ctx.isCollapsed ? "right" : "top"
			}, {
				content: withCtx(() => [createBaseVNode("div", null, toDisplayString(!hasPullPermission.value ? unref(i18n$1).baseText("settings.sourceControl.button.pull.forbidden") : unref(i18n$1).baseText("settings.sourceControl.button.pull")), 1)]),
				default: withCtx(() => [createVNode(unref(N8nButton_default), {
					disabled: !hasPullPermission.value,
					"data-test-id": "main-sidebar-source-control-pull",
					icon: "arrow-down",
					type: "tertiary",
					size: _ctx.isCollapsed ? "small" : "mini",
					text: "",
					square: _ctx.isCollapsed,
					label: _ctx.isCollapsed ? "" : unref(i18n$1).baseText("settings.sourceControl.button.pull"),
					onClick: pullWorkfolder
				}, null, 8, [
					"disabled",
					"size",
					"square",
					"label"
				])]),
				_: 1
			}, 8, [
				"disabled",
				"show-after",
				"placement"
			]), createVNode(unref(N8nTooltip_default), {
				disabled: !_ctx.isCollapsed && !unref(sourceControlStore).preferences.branchReadOnly && hasPushPermission.value,
				"show-after": tooltipOpenDelay.value,
				placement: _ctx.isCollapsed ? "right" : "top"
			}, {
				content: withCtx(() => [createBaseVNode("div", null, toDisplayString(unref(sourceControlStore).preferences.branchReadOnly || !hasPushPermission.value ? unref(i18n$1).baseText("settings.sourceControl.button.push.forbidden") : unref(i18n$1).baseText("settings.sourceControl.button.push")), 1)]),
				default: withCtx(() => [createVNode(unref(N8nButton_default), {
					square: _ctx.isCollapsed,
					label: _ctx.isCollapsed ? "" : unref(i18n$1).baseText("settings.sourceControl.button.push"),
					disabled: unref(sourceControlStore).preferences.branchReadOnly || !hasPushPermission.value,
					"data-test-id": "main-sidebar-source-control-push",
					icon: "arrow-up",
					type: "tertiary",
					text: "",
					size: _ctx.isCollapsed ? "small" : "mini",
					onClick: pushWorkfolder
				}, null, 8, [
					"square",
					"label",
					"disabled",
					"size"
				])]),
				_: 1
			}, 8, [
				"disabled",
				"show-after",
				"placement"
			])])], 2)) : createCommentVNode("", true)], 2)) : createCommentVNode("", true);
		};
	}
});
var MainSidebarSourceControl_vue_vue_type_style_index_0_lang_module_default = {
	sync: "_sync_1fdij_123",
	collapsed: "_collapsed_1fdij_129",
	icon: "_icon_1fdij_133",
	connected: "_connected_1fdij_141",
	branchName: "_branchName_1fdij_149"
};
var MainSidebarSourceControl_default = /* @__PURE__ */ __plugin_vue_export_helper_default(MainSidebarSourceControl_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": MainSidebarSourceControl_vue_vue_type_style_index_0_lang_module_default }]]);
var MainSidebarTrialUpgrade_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "MainSidebarTrialUpgrade",
	setup(__props) {
		const cloudPlanStore = useCloudPlanStore();
		const pageRedirectionHelper = usePageRedirectionHelper();
		const uiStore = useUIStore();
		const isCollapsed = computed(() => uiStore.sidebarMenuCollapsed);
		const isVisible = computed(() => {
			return cloudPlanStore.userIsTrialing && cloudPlanStore.isTrialUpgradeOnSidebar;
		});
		const trialDaysLeft = computed(() => -1 * cloudPlanStore.trialDaysLeft);
		const trialMessage = computed(() => {
			return i18n.baseText("generic.trial.message", {
				adjustToNumber: trialDaysLeft.value,
				interpolate: { count: String(trialDaysLeft.value) }
			});
		});
		const tooltipContent$1 = computed(() => {
			return i18n.baseText("generic.trial.tooltip", {
				adjustToNumber: trialDaysLeft.value,
				interpolate: { count: String(trialDaysLeft.value) }
			});
		});
		const onUpgradeClick = () => {
			pageRedirectionHelper.goToUpgrade("main-sidebar", "upgrade-main-sidebar", "redirect");
		};
		return (_ctx, _cache) => {
			return isVisible.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass([_ctx.$style.mainSidebarTrialUpgrade, { [_ctx.$style.collapsed]: isCollapsed.value }]),
				"data-test-id": "main-sidebar-trial-upgrade"
			}, [createVNode(unref(N8nTooltip_default), { placement: isCollapsed.value ? "right" : "top" }, {
				content: withCtx(() => [createTextVNode(toDisplayString(tooltipContent$1.value), 1)]),
				default: withCtx(() => [createVNode(unref(N8nButton_default), {
					type: "success",
					size: "mini",
					icon: "zap",
					label: isCollapsed.value ? "" : unref(i18n).baseText("generic.upgrade"),
					square: isCollapsed.value,
					"data-test-id": "trial-upgrade-button",
					onClick: onUpgradeClick
				}, null, 8, ["label", "square"])]),
				_: 1
			}, 8, ["placement"]), !isCollapsed.value ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.mainSidebarTrialMessage)
			}, toDisplayString(trialMessage.value), 3)) : createCommentVNode("", true)], 2)) : createCommentVNode("", true);
		};
	}
});
var MainSidebarTrialUpgrade_vue_vue_type_style_index_0_lang_module_default = {
	mainSidebarTrialUpgrade: "_mainSidebarTrialUpgrade_1yg9r_123",
	collapsed: "_collapsed_1yg9r_130",
	mainSidebarTrialMessage: "_mainSidebarTrialMessage_1yg9r_134"
};
var MainSidebarTrialUpgrade_default = /* @__PURE__ */ __plugin_vue_export_helper_default(MainSidebarTrialUpgrade_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": MainSidebarTrialUpgrade_vue_vue_type_style_index_0_lang_module_default }]]);
var TemplateTooltip_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "TemplateTooltip",
	setup(__props) {
		const personalizedTemplatesV3Store = usePersonalizedTemplatesV3Store();
		const { markTemplateRecommendationInteraction, trackPersonalizationTooltipView, trackPersonalizationTooltipDismiss } = personalizedTemplatesV3Store;
		const locale = useI18n();
		const tooltipRef = ref();
		const isVisible = ref(false);
		const position = ref({
			top: 0,
			left: 0
		});
		const tooltipKey = ref(0);
		const shouldShow = computed(() => personalizedTemplatesV3Store.shouldShowTemplateTooltip);
		const calculatePosition = () => {
			const templatesElement = document.querySelector("[data-test-id=\"menu-item\"][id=\"templates\"]");
			if (!templatesElement) return;
			const menuRect = templatesElement.getBoundingClientRect();
			position.value = {
				top: menuRect.top + menuRect.height / 2 - 5,
				left: menuRect.right
			};
			tooltipKey.value++;
		};
		const showTooltip = async () => {
			isVisible.value = true;
			trackPersonalizationTooltipView();
			await nextTick();
			calculatePosition();
		};
		const hideTooltip = () => {
			isVisible.value = false;
		};
		const handleDismiss = () => {
			trackPersonalizationTooltipDismiss();
			markTemplateRecommendationInteraction();
			hideTooltip();
		};
		const handleResize = () => {
			if (isVisible.value) calculatePosition();
		};
		const handleContentResize = () => {
			if (isVisible.value) setTimeout(() => {
				calculatePosition();
			}, 500);
		};
		watch(shouldShow, async (newValue) => {
			if (newValue) await showTooltip();
			else hideTooltip();
		}, { immediate: true });
		let contentResizeObserver = null;
		onMounted(() => {
			window.addEventListener("resize", handleResize);
			window.addEventListener("scroll", handleResize);
			const contentElement = document.getElementById("content");
			if (contentElement) {
				contentResizeObserver = new ResizeObserver(handleContentResize);
				contentResizeObserver.observe(contentElement);
			}
		});
		onUnmounted(() => {
			window.removeEventListener("resize", handleResize);
			window.removeEventListener("scroll", handleResize);
			if (contentResizeObserver) {
				contentResizeObserver.disconnect();
				contentResizeObserver = null;
			}
		});
		return (_ctx, _cache) => {
			return openBlock(), createBlock(Teleport, { to: "body" }, [isVisible.value && shouldShow.value ? (openBlock(), createElementBlock("div", {
				ref_key: "tooltipRef",
				ref: tooltipRef,
				key: tooltipKey.value,
				class: normalizeClass(_ctx.$style.triggerContainer),
				style: normalizeStyle({
					position: "fixed",
					top: position.value.top + "px",
					left: position.value.left + "px"
				})
			}, [createVNode(unref(N8nTooltip_default), {
				visible: true,
				placement: "right",
				"show-arrow": true,
				"popper-style": {
					maxWidth: "260px",
					minWidth: "240px"
				}
			}, {
				content: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.tooltipContent) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.text) }, toDisplayString(unref(locale).baseText("experiments.personalizedTemplatesV3.recommendationTooltip")), 3), createBaseVNode("button", {
					class: normalizeClass(_ctx.$style.dismissButton),
					type: "button",
					onClick: handleDismiss,
					"aria-label": "Dismiss tooltip"
				}, [createVNode(unref(N8nIcon_default), {
					icon: "x",
					size: "small"
				})], 2)], 2)]),
				default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.tooltipTrigger) }, null, 2)]),
				_: 1
			})], 6)) : createCommentVNode("", true)]);
		};
	}
});
var TemplateTooltip_vue_vue_type_style_index_0_lang_module_default = {
	triggerContainer: "_triggerContainer_5kwt6_123",
	tooltipTrigger: "_tooltipTrigger_5kwt6_128",
	tooltipContent: "_tooltipContent_5kwt6_134",
	text: "_text_5kwt6_140",
	dismissButton: "_dismissButton_5kwt6_146"
};
var TemplateTooltip_default = /* @__PURE__ */ __plugin_vue_export_helper_default(TemplateTooltip_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": TemplateTooltip_vue_vue_type_style_index_0_lang_module_default }]]);
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
var MainSidebar_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "MainSidebar",
	setup(__props) {
		const becomeTemplateCreatorStore = useBecomeTemplateCreatorStore();
		const cloudPlanStore = useCloudPlanStore();
		const rootStore = useRootStore();
		const settingsStore = useSettingsStore();
		const templatesStore = useTemplatesStore();
		const uiStore = useUIStore();
		const usersStore = useUsersStore();
		const versionsStore = useVersionsStore();
		const workflowsStore = useWorkflowsStore();
		const sourceControlStore = useSourceControlStore();
		const personalizedTemplatesV2Store = usePersonalizedTemplatesV2Store();
		const personalizedTemplatesV3Store = usePersonalizedTemplatesV3Store();
		const templatesDataQualityStore = useTemplatesDataQualityStore();
		const i18n$1 = useI18n();
		const router = useRouter();
		const telemetry = useTelemetry();
		const pageRedirectionHelper = usePageRedirectionHelper();
		const { getReportingURL } = useBugReporting();
		const calloutHelpers = useCalloutHelpers();
		const { isCollapsed, sidebarWidth, onResizeStart, onResize, onResizeEnd, toggleCollapse } = useSidebarLayout();
		useKeybindings({
			ctrl_alt_o: () => handleSelect("about"),
			["bracketleft"]: () => toggleCollapse()
		});
		const { isEnabled: isCommandBarEnabled } = useCommandBar();
		const { settingsItems } = useSettingsItems();
		const basePath = ref("");
		const showWhatsNewNotification = computed(() => versionsStore.hasVersionUpdates || versionsStore.whatsNewArticles.some((article) => !versionsStore.isWhatsNewArticleRead(article.id)));
		const isTemplatesExperimentEnabled = computed(() => {
			return personalizedTemplatesV2Store.isFeatureEnabled() || personalizedTemplatesV3Store.isFeatureEnabled() || templatesDataQualityStore.isFeatureEnabled();
		});
		const mainMenuItems = computed(() => [
			{
				id: "cloud-admin",
				position: "bottom",
				label: "Admin Panel",
				icon: "cloud",
				available: settingsStore.isCloudDeployment && hasPermission(["instanceOwner"])
			},
			{
				id: "templates",
				icon: "package-open",
				label: i18n$1.baseText("generic.templates"),
				position: "bottom",
				available: settingsStore.isTemplatesEnabled && calloutHelpers.isPreBuiltAgentsCalloutVisible.value && !isTemplatesExperimentEnabled.value,
				route: { to: { name: VIEWS.PRE_BUILT_AGENT_TEMPLATES } }
			},
			{
				id: "templates",
				icon: "package-open",
				label: i18n$1.baseText("generic.templates"),
				position: "bottom",
				available: settingsStore.isTemplatesEnabled && isTemplatesExperimentEnabled.value
			},
			{
				id: "templates",
				icon: "package-open",
				label: i18n$1.baseText("generic.templates"),
				position: "bottom",
				available: settingsStore.isTemplatesEnabled && !calloutHelpers.isPreBuiltAgentsCalloutVisible.value && templatesStore.hasCustomTemplatesHost && !isTemplatesExperimentEnabled.value,
				route: { to: { name: VIEWS.TEMPLATES } }
			},
			{
				id: "templates",
				icon: "package-open",
				label: i18n$1.baseText("generic.templates"),
				position: "bottom",
				available: settingsStore.isTemplatesEnabled && !calloutHelpers.isPreBuiltAgentsCalloutVisible.value && !templatesStore.hasCustomTemplatesHost && !isTemplatesExperimentEnabled.value,
				link: {
					href: templatesStore.websiteTemplateRepositoryURL,
					target: "_blank"
				}
			},
			{
				id: "insights",
				icon: "chart-column-decreasing",
				label: "Insights",
				position: "bottom",
				route: { to: { name: VIEWS.INSIGHTS } },
				available: settingsStore.isModuleActive("insights") && hasPermission(["rbac"], { rbac: { scope: "insights:list" } })
			},
			{
				id: "help",
				icon: "circle-help",
				label: i18n$1.baseText("mainSidebar.help"),
				notification: showWhatsNewNotification.value,
				position: "bottom",
				children: [
					{
						id: "quickstart",
						icon: "video",
						label: i18n$1.baseText("mainSidebar.helpMenuItems.quickstart"),
						link: {
							href: EXTERNAL_LINKS.QUICKSTART_VIDEO,
							target: "_blank"
						}
					},
					{
						id: "docs",
						icon: "book",
						label: i18n$1.baseText("mainSidebar.helpMenuItems.documentation"),
						link: {
							href: EXTERNAL_LINKS.DOCUMENTATION,
							target: "_blank"
						}
					},
					{
						id: "forum",
						icon: "users",
						label: i18n$1.baseText("mainSidebar.helpMenuItems.forum"),
						link: {
							href: EXTERNAL_LINKS.FORUM,
							target: "_blank"
						}
					},
					{
						id: "examples",
						icon: "graduation-cap",
						label: i18n$1.baseText("mainSidebar.helpMenuItems.course"),
						link: {
							href: EXTERNAL_LINKS.COURSES,
							target: "_blank"
						}
					},
					{
						id: "report-bug",
						icon: "bug",
						label: i18n$1.baseText("mainSidebar.helpMenuItems.reportBug"),
						link: {
							href: getReportingURL(),
							target: "_blank"
						}
					},
					{
						id: "about",
						icon: "info",
						label: i18n$1.baseText("mainSidebar.aboutN8n"),
						position: "bottom"
					}
				]
			},
			{
				id: "settings",
				label: i18n$1.baseText("mainSidebar.settings"),
				icon: "settings",
				available: true,
				children: settingsItems.value
			}
		]);
		const visibleMenuItems = computed(() => mainMenuItems.value.filter((item) => item.available !== false));
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
					label: i18n$1.baseText("mainSidebar.whatsNew.fullChangelog"),
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
					props: { tooltipText: !usersStore.canUserUpdateVersion ? i18n$1.baseText("whatsNew.updateNudgeTooltip") : void 0 }
				}
			]
		}));
		const createBtn = ref();
		const userIsTrialing = computed(() => cloudPlanStore.userIsTrialing);
		onMounted(() => {
			basePath.value = rootStore.baseUrl;
			becomeTemplateCreatorStore.startMonitoringCta();
		});
		onBeforeUnmount(() => {
			becomeTemplateCreatorStore.stopMonitoringCta();
		});
		const trackHelpItemClick = (itemType) => {
			telemetry.track("User clicked help resource", {
				type: itemType,
				workflow_id: workflowsStore.workflowId
			});
		};
		function openCommandBar(event) {
			event.stopPropagation();
			nextTick(() => {
				const keyboardEvent = new KeyboardEvent("keydown", {
					key: "k",
					code: "KeyK",
					metaKey: true,
					bubbles: true,
					cancelable: true
				});
				document.dispatchEvent(keyboardEvent);
			});
		}
		const handleSelect = (key) => {
			switch (key) {
				case "templates":
					if (templatesDataQualityStore.isFeatureEnabled()) {
						uiStore.openModal(EXPERIMENT_TEMPLATES_DATA_QUALITY_KEY);
						trackTemplatesClick(TemplateClickSource.sidebarButton);
					} else if (personalizedTemplatesV3Store.isFeatureEnabled()) {
						personalizedTemplatesV3Store.markTemplateRecommendationInteraction();
						uiStore.openModalWithData({
							name: EXPERIMENT_TEMPLATE_RECO_V3_KEY,
							data: {}
						});
						trackTemplatesClick(TemplateClickSource.sidebarButton);
					} else if (personalizedTemplatesV2Store.isFeatureEnabled()) {
						uiStore.openModalWithData({
							name: EXPERIMENT_TEMPLATE_RECO_V2_KEY,
							data: {}
						});
						trackTemplatesClick(TemplateClickSource.sidebarButton);
					} else if (settingsStore.isTemplatesEnabled && !templatesStore.hasCustomTemplatesHost) trackTemplatesClick(TemplateClickSource.sidebarButton);
					break;
				case "about":
					trackHelpItemClick("about");
					uiStore.openModal(ABOUT_MODAL_KEY);
					break;
				case "cloud-admin":
					pageRedirectionHelper.goToDashboard();
					break;
				case "quickstart":
				case "docs":
				case "forum":
				case "examples":
					trackHelpItemClick(key);
					break;
				case "insights": telemetry.track("User clicked insights link from side menu");
				default:
					if (key.startsWith("whats-new-article-")) {
						const articleId = Number(key.replace("whats-new-article-", ""));
						telemetry.track("User clicked on what's new section", { article_id: articleId });
						uiStore.openModalWithData({
							name: WHATS_NEW_MODAL_KEY,
							data: { articleId }
						});
					}
					break;
			}
		};
		const { menu, handleSelect: handleMenuSelect, createProjectAppendSlotName, createWorkflowsAppendSlotName, createCredentialsAppendSlotName, projectsLimitReachedMessage, upgradeLabel, hasPermissionToCreateProjects } = useGlobalEntityCreation();
		onClickOutside(createBtn, () => {
			createBtn.value?.close();
		});
		const onLogout = () => {
			router.push({ name: VIEWS.SIGNOUT });
		};
		return (_ctx, _cache) => {
			return openBlock(), createBlock(unref(N8nResizeWrapper_default), {
				id: "side-menu",
				class: normalizeClass({
					[_ctx.$style.sideMenu]: true,
					[_ctx.$style.sideMenuCollapsed]: unref(isCollapsed)
				}),
				width: unref(sidebarWidth),
				style: normalizeStyle({ width: `${unref(sidebarWidth)}px` }),
				"supported-directions": ["right"],
				"min-width": 200,
				"max-width": 500,
				"grid-size": 8,
				onResizestart: unref(onResizeStart),
				onResize: unref(onResize),
				onResizeend: unref(onResizeEnd)
			}, {
				default: withCtx(() => [
					createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [
						!unref(isCollapsed) ? (openBlock(), createBlock(unref(N8nLogo_default), {
							key: 0,
							class: normalizeClass(_ctx.$style.logo),
							size: "small",
							collapsed: unref(isCollapsed),
							"release-channel": unref(settingsStore).settings.releaseChannel
						}, {
							default: withCtx(() => [unref(sourceControlStore).preferences.branchReadOnly && !unref(isCollapsed) ? (openBlock(), createBlock(unref(N8nTooltip_default), {
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
										default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n$1).baseText("readOnlyEnv.tooltip.link")), 1)]),
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
						}, 8, [
							"class",
							"collapsed",
							"release-channel"
						])) : createCommentVNode("", true),
						createVNode(KeyboardShortcutTooltip_default, {
							placement: unref(isCollapsed) ? "right" : "bottom",
							label: unref(isCollapsed) ? unref(i18n$1).baseText("mainSidebar.state.expand") : unref(i18n$1).baseText("mainSidebar.state.collapse"),
							"show-after": "500",
							shortcut: { keys: ["["] }
						}, {
							default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
								id: "toggle-sidebar-button",
								size: "small",
								type: "highlight",
								icon: "panel-left",
								"icon-size": "large",
								"aria-label": "Toggle sidebar",
								onClick: unref(toggleCollapse)
							}, null, 8, ["onClick"])]),
							_: 1
						}, 8, ["placement", "label"]),
						createVNode(unref(N8nNavigationDropdown_default), {
							ref_key: "createBtn",
							ref: createBtn,
							"data-test-id": "universal-add",
							menu: unref(menu),
							onSelect: unref(handleMenuSelect)
						}, {
							[unref(createWorkflowsAppendSlotName)]: withCtx(() => [unref(sourceControlStore).preferences.branchReadOnly ? (openBlock(), createBlock(unref(N8nTooltip_default), {
								key: 0,
								placement: "right",
								content: unref(i18n$1).baseText("readOnlyEnv.cantAdd.workflow")
							}, {
								default: withCtx(() => [createVNode(unref(N8nIcon_default), {
									style: {
										"margin-left": "auto",
										"margin-right": "5px"
									},
									icon: "lock",
									size: "xsmall"
								})]),
								_: 1
							}, 8, ["content"])) : createCommentVNode("", true)]),
							[unref(createCredentialsAppendSlotName)]: withCtx(() => [unref(sourceControlStore).preferences.branchReadOnly ? (openBlock(), createBlock(unref(N8nTooltip_default), {
								key: 0,
								placement: "right",
								content: unref(i18n$1).baseText("readOnlyEnv.cantAdd.credential")
							}, {
								default: withCtx(() => [createVNode(unref(N8nIcon_default), {
									style: {
										"margin-left": "auto",
										"margin-right": "5px"
									},
									icon: "lock",
									size: "xsmall"
								})]),
								_: 1
							}, 8, ["content"])) : createCommentVNode("", true)]),
							[unref(createProjectAppendSlotName)]: withCtx(({ item }) => [unref(sourceControlStore).preferences.branchReadOnly ? (openBlock(), createBlock(unref(N8nTooltip_default), {
								key: 0,
								placement: "right",
								content: unref(i18n$1).baseText("readOnlyEnv.cantAdd.project")
							}, {
								default: withCtx(() => [createVNode(unref(N8nIcon_default), {
									style: {
										"margin-left": "auto",
										"margin-right": "5px"
									},
									icon: "lock",
									size: "xsmall"
								})]),
								_: 1
							}, 8, ["content"])) : item.disabled ? (openBlock(), createBlock(unref(N8nTooltip_default), {
								key: 1,
								placement: "right",
								content: unref(projectsLimitReachedMessage)
							}, {
								default: withCtx(() => [!unref(hasPermissionToCreateProjects) ? (openBlock(), createBlock(unref(N8nIcon_default), {
									key: 0,
									style: {
										"margin-left": "auto",
										"margin-right": "5px"
									},
									icon: "lock",
									size: "xsmall"
								})) : (openBlock(), createBlock(unref(N8nButton_default), {
									key: 1,
									size: "mini",
									style: { "margin-left": "auto" },
									type: "tertiary",
									onClick: ($event) => unref(handleMenuSelect)(item.id)
								}, {
									default: withCtx(() => [createTextVNode(toDisplayString(unref(upgradeLabel)), 1)]),
									_: 2
								}, 1032, ["onClick"]))]),
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
						}, 1032, ["menu", "onSelect"]),
						unref(isCommandBarEnabled) ? (openBlock(), createBlock(KeyboardShortcutTooltip_default, {
							key: 1,
							placement: unref(isCollapsed) ? "right" : "bottom",
							"show-after": "500",
							label: unref(i18n$1).baseText("nodeView.openCommandBar"),
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
						}, 8, ["placement", "label"])) : createCommentVNode("", true)
					], 2),
					createVNode(unref(N8nScrollArea_default), { "as-child": "" }, {
						default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.scrollArea) }, [createVNode(ProjectNavigation_default, {
							collapsed: unref(isCollapsed),
							"plan-name": unref(cloudPlanStore).currentPlanData?.displayName
						}, null, 8, ["collapsed", "plan-name"]), createBaseVNode("div", { class: normalizeClass(_ctx.$style.bottomMenu) }, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.bottomMenuItems) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(visibleMenuItems.value, (item) => {
							return openBlock(), createElementBlock(Fragment, { key: item.id }, [item.children && item.id === "help" ? (openBlock(), createBlock(unref(N8nPopoverReka_default), {
								key: "help",
								side: "right",
								align: "end",
								"side-offset": 12
							}, {
								content: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.popover) }, [
									!unref(isCollapsed) && !userIsTrialing.value ? (openBlock(), createBlock(BecomeTemplateCreatorCta_default, { key: 0 })) : createCommentVNode("", true),
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
									compact: unref(isCollapsed),
									onClick: () => handleSelect(item.id)
								}, null, 8, [
									"data-test-id",
									"item",
									"compact",
									"onClick"
								])]),
								_: 2
							}, 1024)) : item.children && item.id === "settings" ? (openBlock(), createBlock(unref(N8nPopoverReka_default), {
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
									compact: unref(isCollapsed),
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
								compact: unref(isCollapsed),
								onClick: () => handleSelect(item.id)
							}, null, 8, [
								"data-test-id",
								"item",
								"compact",
								"onClick"
							]))], 64);
						}), 128))], 2)], 2)], 2)]),
						_: 1
					}),
					createVNode(MainSidebarSourceControl_default, { "is-collapsed": unref(isCollapsed) }, null, 8, ["is-collapsed"]),
					createVNode(MainSidebarTrialUpgrade_default),
					createVNode(TemplateTooltip_default)
				]),
				_: 1
			}, 8, [
				"class",
				"width",
				"style",
				"onResizestart",
				"onResize",
				"onResizeend"
			]);
		};
	}
});
var MainSidebar_vue_vue_type_style_index_0_lang_module_default = {
	sideMenu: "_sideMenu_1g1dy_123",
	header: "_header_1g1dy_131",
	sideMenuCollapsed: "_sideMenuCollapsed_1g1dy_145",
	logo: "_logo_1g1dy_154",
	scrollArea: "_scrollArea_1g1dy_158",
	bottomMenu: "_bottomMenu_1g1dy_164",
	bottomMenuItems: "_bottomMenuItems_1g1dy_174",
	popover: "_popover_1g1dy_178",
	divider: "_divider_1g1dy_185",
	popoverTitle: "_popoverTitle_1g1dy_194",
	readOnlyEnvironmentIcon: "_readOnlyEnvironmentIcon_1g1dy_206"
};
var MainSidebar_default = /* @__PURE__ */ __plugin_vue_export_helper_default(MainSidebar_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": MainSidebar_vue_vue_type_style_index_0_lang_module_default }]]);
export { MainSidebar_default as default };
