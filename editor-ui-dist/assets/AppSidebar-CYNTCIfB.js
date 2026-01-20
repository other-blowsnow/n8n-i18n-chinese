import { C as computed, Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, G as nextTick, Gt as unref, It as ref, J as onBeforeUnmount, M as createVNode, P as defineComponent, Q as onUnmounted, T as createBlock, Z as onMounted, _ as Fragment, _t as watch, b as Teleport, bn as normalizeStyle, bt as withCtx, et as openBlock, it as renderList, j as createTextVNode, q as onBeforeMount, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { _t as useI18n, mt as i18n } from "./_MapCache-nsH9LP_7.js";
import { On as N8nText_default, P as N8nMenuItem_default, St as N8nTooltip_default, c as N8nScrollArea_default, jn as N8nIcon_default, kn as N8nButton_default, w as N8nResizeWrapper_default } from "./src-Ca6p-F4w.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-fRq25RGE.js";
import { v as useRoute, y as useRouter } from "./truncate-D24O8Gpt.js";
import { Mt as useTelemetry, Qn as TemplateClickSource, er as trackTemplatesClick, hr as useSourceControlStore, ls as useSettingsStore, nr as useCloudPlanStore, pn as useTemplatesStore, r as useUIStore, rr as hasPermission, s as useWorkflowsStore, t as useUsersStore, tr as useTemplatesDataQualityStore, zt as useProjectsStore } from "./users.store-DmlY2Qk6.js";
import "./sanitize-html-DeDnsMgc.js";
import "./empty-nq5-pHAR.js";
import { n as MainSidebarHeader_default, r as useSidebarLayout, t as BottomMenu_default } from "./BottomMenu-Bc8Bhq6S.js";
import { Bo as ABOUT_MODAL_KEY, Jo as EXPERIMENT_TEMPLATE_RECO_V2_KEY, Yo as EXPERIMENT_TEMPLATE_RECO_V3_KEY, fs as WHATS_NEW_MODAL_KEY, ko as getResourcePermissions, qo as EXPERIMENT_TEMPLATES_DATA_QUALITY_KEY, zo as VIEWS } from "./constants-D1rOdsyc.js";
import "./merge-CM3retKU.js";
import { r as useRootStore } from "./_baseOrderBy-BQpO5lC4.js";
import "./dateformat-BeHi9sF4.js";
import "./useDebounce-DRet0zBh.js";
import { t as useVersionsStore } from "./versions.store-dKvX2_bH.js";
import { t as usePageRedirectionHelper } from "./usePageRedirectionHelper-Djhqqrz8.js";
import { n as EXTERNAL_LINKS, t as useBugReporting } from "./useBugReporting-BsJgWC70.js";
import "./canvas.utils-B0dhpigY.js";
import "./KeyboardShortcutTooltip-B0jiPSJu.js";
import { u as CHAT_VIEW } from "./constants-Bgby4me8.js";
import { t as sourceControlEventBus } from "./sourceControl.eventBus-IauMcOhQ.js";
import { t as useKeybindings } from "./useKeybindings-Bm5AnrA0.js";
import { n as usePersonalizedTemplatesV2Store, t as usePersonalizedTemplatesV3Store } from "./personalizedTemplatesV3.store-7fLEKK25.js";
import { t as useGlobalEntityCreation } from "./useGlobalEntityCreation-B4LQuzHv.js";
import { t as useSettingsItems } from "./useSettingsItems-CJvPFb7y.js";
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
					[_ctx.$style.collapsed]: __props.isCollapsed,
					[_ctx.$style.isConnected]: unref(sourceControlStore).isEnterpriseSourceControlEnabled
				}),
				"data-test-id": "main-sidebar-source-control"
			}, [unref(sourceControlStore).preferences.connected && unref(sourceControlStore).preferences.branchName ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.connected),
				"data-test-id": "main-sidebar-source-control-connected"
			}, [createVNode(unref(N8nTooltip_default), {
				disabled: !__props.isCollapsed,
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
				}), !__props.isCollapsed ? (openBlock(), createBlock(unref(N8nText_default), {
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
				disabled: !__props.isCollapsed && hasPullPermission.value,
				"show-after": tooltipOpenDelay.value,
				placement: __props.isCollapsed ? "right" : "top"
			}, {
				content: withCtx(() => [createBaseVNode("div", null, toDisplayString(!hasPullPermission.value ? unref(i18n$1).baseText("settings.sourceControl.button.pull.forbidden") : unref(i18n$1).baseText("settings.sourceControl.button.pull")), 1)]),
				default: withCtx(() => [createVNode(unref(N8nButton_default), {
					disabled: !hasPullPermission.value,
					"data-test-id": "main-sidebar-source-control-pull",
					icon: "arrow-down",
					type: "tertiary",
					size: __props.isCollapsed ? "small" : "mini",
					text: "",
					square: __props.isCollapsed,
					label: __props.isCollapsed ? "" : unref(i18n$1).baseText("settings.sourceControl.button.pull"),
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
				disabled: !__props.isCollapsed && !unref(sourceControlStore).preferences.branchReadOnly && hasPushPermission.value,
				"show-after": tooltipOpenDelay.value,
				placement: __props.isCollapsed ? "right" : "top"
			}, {
				content: withCtx(() => [createBaseVNode("div", null, toDisplayString(unref(sourceControlStore).preferences.branchReadOnly || !hasPushPermission.value ? unref(i18n$1).baseText("settings.sourceControl.button.push.forbidden") : unref(i18n$1).baseText("settings.sourceControl.button.push")), 1)]),
				default: withCtx(() => [createVNode(unref(N8nButton_default), {
					square: __props.isCollapsed,
					label: __props.isCollapsed ? "" : unref(i18n$1).baseText("settings.sourceControl.button.push"),
					disabled: unref(sourceControlStore).preferences.branchReadOnly || !hasPushPermission.value,
					"data-test-id": "main-sidebar-source-control-push",
					icon: "arrow-up",
					type: "tertiary",
					text: "",
					size: __props.isCollapsed ? "small" : "mini",
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
			route: { to: { name: CHAT_VIEW } },
			beta: true
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
var MainSidebar_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "MainSidebar",
	setup(__props) {
		const cloudPlanStore = useCloudPlanStore();
		const rootStore = useRootStore();
		const settingsStore = useSettingsStore();
		const templatesStore = useTemplatesStore();
		const uiStore = useUIStore();
		const versionsStore = useVersionsStore();
		const workflowsStore = useWorkflowsStore();
		const personalizedTemplatesV2Store = usePersonalizedTemplatesV2Store();
		const personalizedTemplatesV3Store = usePersonalizedTemplatesV3Store();
		const templatesDataQualityStore = useTemplatesDataQualityStore();
		const i18n$1 = useI18n();
		const router = useRouter();
		const telemetry = useTelemetry();
		const pageRedirectionHelper = usePageRedirectionHelper();
		const { getReportingURL } = useBugReporting();
		const { isCollapsed, sidebarWidth, onResizeStart, onResize, onResizeEnd, toggleCollapse } = useSidebarLayout();
		const { settingsItems } = useSettingsItems();
		const basePath = ref("");
		const scrollAreaRef = ref();
		const hasOverflow = ref(false);
		const hasScrolledFromTop = ref(false);
		let resizeObserver = null;
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
				available: settingsStore.isTemplatesEnabled && isTemplatesExperimentEnabled.value
			},
			{
				id: "templates",
				icon: "package-open",
				label: i18n$1.baseText("generic.templates"),
				position: "bottom",
				available: settingsStore.isTemplatesEnabled && templatesStore.hasCustomTemplatesHost && !isTemplatesExperimentEnabled.value,
				route: { to: { name: VIEWS.TEMPLATES } }
			},
			{
				id: "templates",
				icon: "package-open",
				label: i18n$1.baseText("generic.templates"),
				position: "bottom",
				available: settingsStore.isTemplatesEnabled && !templatesStore.hasCustomTemplatesHost && !isTemplatesExperimentEnabled.value,
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
		const checkOverflow = () => {
			const position = scrollAreaRef.value?.getScrollPosition();
			if (position && scrollAreaRef.value?.$el) {
				const element = scrollAreaRef.value.$el;
				const hasVerticalOverflow = position.height > element.clientHeight;
				hasOverflow.value = hasVerticalOverflow;
				hasScrolledFromTop.value = hasVerticalOverflow && position.top > 0;
			}
		};
		watch(isCollapsed, () => {
			nextTick(() => {
				checkOverflow();
			});
		});
		onMounted(() => {
			basePath.value = rootStore.baseUrl;
			nextTick(() => {
				checkOverflow();
				if (scrollAreaRef.value?.$el) {
					const element = scrollAreaRef.value.$el;
					resizeObserver = new ResizeObserver(() => {
						checkOverflow();
					});
					resizeObserver.observe(element);
					checkOverflow();
				}
			});
			window.addEventListener("resize", checkOverflow);
		});
		onBeforeUnmount(() => {
			if (resizeObserver) {
				resizeObserver.disconnect();
				resizeObserver = null;
			}
			window.removeEventListener("resize", checkOverflow);
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
				case "insights":
					telemetry.track("User clicked insights link from side menu");
					break;
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
		const onLogout = () => {
			router.push({ name: VIEWS.SIGNOUT });
		};
		useKeybindings({
			ctrl_alt_o: () => handleSelect("about"),
			["bracketleft"]: () => toggleCollapse()
		});
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
					createVNode(MainSidebarHeader_default, {
						"is-collapsed": unref(isCollapsed),
						onCollapse: unref(toggleCollapse),
						onOpenCommandBar: openCommandBar
					}, null, 8, ["is-collapsed", "onCollapse"]),
					createBaseVNode("div", { class: normalizeClass({
						[_ctx.$style.scrollAreaWrapper]: true,
						[_ctx.$style.scrollAreaWrapperWithBottomBorder]: hasOverflow.value && !unref(isCollapsed),
						[_ctx.$style.scrollAreaWrapperWithTopBorder]: hasScrolledFromTop.value && !unref(isCollapsed)
					}) }, [createVNode(unref(N8nScrollArea_default), {
						ref_key: "scrollAreaRef",
						ref: scrollAreaRef,
						onScrollCapture: checkOverflow
					}, {
						default: withCtx(() => [createVNode(ProjectNavigation_default, {
							collapsed: unref(isCollapsed),
							"plan-name": unref(cloudPlanStore).currentPlanData?.displayName
						}, null, 8, ["collapsed", "plan-name"])]),
						_: 1
					}, 512)], 2),
					createVNode(BottomMenu_default, {
						items: visibleMenuItems.value,
						"is-collapsed": unref(isCollapsed),
						onLogout,
						onSelect: handleSelect
					}, null, 8, ["items", "is-collapsed"]),
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
	sideMenu: "_sideMenu_13nlp_123",
	sideMenuCollapsed: "_sideMenuCollapsed_13nlp_131",
	scrollAreaWrapper: "_scrollAreaWrapper_13nlp_136",
	scrollAreaWrapperWithBottomBorder: "_scrollAreaWrapperWithBottomBorder_13nlp_145",
	scrollAreaWrapperWithTopBorder: "_scrollAreaWrapperWithTopBorder_13nlp_149"
};
var MainSidebar_default = /* @__PURE__ */ __plugin_vue_export_helper_default(MainSidebar_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": MainSidebar_vue_vue_type_style_index_0_lang_module_default }]]);
var AppSidebar_default = /* @__PURE__ */ defineComponent({
	__name: "AppSidebar",
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createBlock(MainSidebar_default);
		};
	}
});
export { AppSidebar_default as default };
