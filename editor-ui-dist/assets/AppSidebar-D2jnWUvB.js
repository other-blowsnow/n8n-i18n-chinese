import { C as computed, Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, G as nextTick, Gt as unref, It as ref, J as onBeforeUnmount, M as createVNode, P as defineComponent, Q as onUnmounted, T as createBlock, Z as onMounted, _ as Fragment, _t as watch, b as Teleport, bn as normalizeStyle, bt as withCtx, et as openBlock, it as renderList, j as createTextVNode, q as onBeforeMount, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-8-eqnC2S.js";
import { Bi as N8nButton_default, Hi as N8nIcon_default, Ht as N8nTooltip_default, Lt as useRoute, N as N8nResizeWrapper_default, Rt as useRouter, W as N8nMenuItem_default, c as N8nScrollArea_default, zi as N8nText_default } from "./src-Cq27d_Gp.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import { Nt as useTelemetry, Vt as useProjectsStore, ar as hasPermission, br as useSourceControlStore, fs as useSettingsStore, gn as useTemplatesStore, ir as useCloudPlanStore, r as useUIStore, s as useWorkflowsStore, t as useUsersStore } from "./users.store-qBZsmf9-.js";
import { n as BottomMenu_default, r as useSidebarLayout, t as MainSidebarHeader_default } from "./MainSidebarHeader-BSZWPhPI.js";
import { Bo as getResourcePermissions, Cs as WHATS_NEW_MODAL_KEY, Dc as RESOURCE_CENTER_EXPERIMENT, Xo as VIEWS, Zo as ABOUT_MODAL_KEY } from "./constants-Cyrg9Nbl.js";
import { r as useRootStore } from "./_baseOrderBy-3Uh8XZv3.js";
import { t as useVersionsStore } from "./versions.store-YehYbHFz.js";
import { t as usePageRedirectionHelper } from "./usePageRedirectionHelper-DjPq0E7w.js";
import { n as EXTERNAL_LINKS, t as useBugReporting } from "./useBugReporting-DUcJ8bi0.js";
import { l as CHAT_VIEW } from "./constants-mCmg0XQZ.js";
import { t as sourceControlEventBus } from "./sourceControl.eventBus--cdNSnZo.js";
import { t as useKeybindings } from "./useKeybindings-CsWMJtRb.js";
import { t as useGlobalEntityCreation } from "./useGlobalEntityCreation-qhjVTCDb.js";
import { t as useSettingsItems } from "./useSettingsItems-Do1BDoxp.js";
import { t as useResourceCenterStore } from "./resourceCenter.store-AYMcYt9P.js";
var MainSidebarSourceControl_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "MainSidebarSourceControl",
	props: { isCollapsed: { type: Boolean } },
	setup(__props) {
		const sourceControlStore = useSourceControlStore();
		const projectStore = useProjectsStore();
		const i18n = useI18n();
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
				content: withCtx(() => [createBaseVNode("div", null, toDisplayString(!hasPullPermission.value ? unref(i18n).baseText("settings.sourceControl.button.pull.forbidden") : unref(i18n).baseText("settings.sourceControl.button.pull")), 1)]),
				default: withCtx(() => [createVNode(unref(N8nButton_default), {
					disabled: !hasPullPermission.value,
					"data-test-id": "main-sidebar-source-control-pull",
					icon: "arrow-down",
					type: "tertiary",
					size: __props.isCollapsed ? "small" : "mini",
					text: "",
					square: __props.isCollapsed,
					label: __props.isCollapsed ? "" : unref(i18n).baseText("settings.sourceControl.button.pull"),
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
				content: withCtx(() => [createBaseVNode("div", null, toDisplayString(unref(sourceControlStore).preferences.branchReadOnly || !hasPushPermission.value ? unref(i18n).baseText("settings.sourceControl.button.push.forbidden") : unref(i18n).baseText("settings.sourceControl.button.push")), 1)]),
				default: withCtx(() => [createVNode(unref(N8nButton_default), {
					square: __props.isCollapsed,
					label: __props.isCollapsed ? "" : unref(i18n).baseText("settings.sourceControl.button.push"),
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
	sync: "_sync_1r9zz_125",
	collapsed: "_collapsed_1r9zz_131",
	icon: "_icon_1r9zz_135",
	connected: "_connected_1r9zz_143",
	branchName: "_branchName_1r9zz_151"
};
var MainSidebarSourceControl_default = /* @__PURE__ */ __plugin_vue_export_helper_default(MainSidebarSourceControl_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": MainSidebarSourceControl_vue_vue_type_style_index_0_lang_module_default }]]);
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
	projects: "_projects_65xj9_125",
	plusBtn: "_plusBtn_65xj9_130",
	projectItems: "_projectItems_65xj9_134",
	upgradeLink: "_upgradeLink_65xj9_138",
	projectsLabel: "_projectsLabel_65xj9_143",
	collapsed: "_collapsed_65xj9_152",
	addFirstProjectBtn: "_addFirstProjectBtn_65xj9_165",
	home: "_home_65xj9_174"
};
var ProjectNavigation_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ProjectNavigation_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ProjectNavigation_vue_vue_type_style_index_0_lang_module_default }]]);
var ResourceCenterTooltip_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ResourceCenterTooltip",
	setup(__props) {
		const resourceCenterStore = useResourceCenterStore();
		const { isCollapsed } = useSidebarLayout();
		const { markResourceCenterTooltipDismissed, trackResourceCenterTooltipView, trackResourceCenterTooltipDismiss } = resourceCenterStore;
		const locale = useI18n();
		const tooltipRef = ref();
		const isVisible = ref(false);
		const position = ref({
			top: 0,
			left: 0
		});
		const tooltipKey = ref(0);
		const shouldShow = computed(() => resourceCenterStore.shouldShowResourceCenterTooltip);
		const tooltipText = computed(() => {
			return locale.baseText("experiments.resourceCenter.tooltip.text");
		});
		const calculatePosition = () => {
			const resourceCenterElement = document.querySelector("[data-test-id=\"menu-item\"][id=\"resource-center\"]");
			if (!resourceCenterElement) return;
			const menuRect = resourceCenterElement.getBoundingClientRect();
			position.value = {
				top: menuRect.top + menuRect.height / 2 - 5,
				left: menuRect.right
			};
			tooltipKey.value++;
		};
		const showTooltip = async () => {
			isVisible.value = true;
			trackResourceCenterTooltipView();
			await nextTick();
			calculatePosition();
		};
		const hideTooltip = () => {
			isVisible.value = false;
		};
		const handleDismiss = () => {
			trackResourceCenterTooltipDismiss();
			markResourceCenterTooltipDismissed();
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
		watch(isCollapsed, async () => {
			if (isVisible.value) {
				await nextTick();
				setTimeout(() => {
					calculatePosition();
				}, 300);
			}
		});
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
				content: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.tooltipContent) }, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.text) }, toDisplayString(tooltipText.value), 3), createBaseVNode("button", {
					class: normalizeClass(_ctx.$style.dismissButton),
					type: "button",
					"aria-label": "Dismiss tooltip",
					onClick: handleDismiss
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
var ResourceCenterTooltip_vue_vue_type_style_index_0_lang_module_default = {
	triggerContainer: "_triggerContainer_vqbgd_125",
	tooltipTrigger: "_tooltipTrigger_vqbgd_130",
	tooltipContent: "_tooltipContent_vqbgd_136",
	text: "_text_vqbgd_142",
	dismissButton: "_dismissButton_vqbgd_148"
};
var ResourceCenterTooltip_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ResourceCenterTooltip_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ResourceCenterTooltip_vue_vue_type_style_index_0_lang_module_default }]]);
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
		const resourceCenterStore = useResourceCenterStore();
		const i18n = useI18n();
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
		const isResourceCenterEnabled = computed(() => resourceCenterStore.isFeatureEnabled());
		const resourceCenterLabel = computed(() => {
			if (resourceCenterStore.getCurrentVariant() === RESOURCE_CENTER_EXPERIMENT.variantInspiration) return i18n.baseText("experiments.resourceCenter.sidebar.inspiration");
			return i18n.baseText("experiments.resourceCenter.sidebar");
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
				id: "resource-center",
				icon: "lightbulb",
				label: resourceCenterLabel.value,
				position: "bottom",
				available: isResourceCenterEnabled.value,
				route: { to: { name: VIEWS.RESOURCE_CENTER } }
			},
			{
				id: "templates",
				icon: "package-open",
				label: i18n.baseText("generic.templates"),
				position: "bottom",
				available: settingsStore.isTemplatesEnabled && templatesStore.hasCustomTemplatesHost && !isResourceCenterEnabled.value,
				route: { to: { name: VIEWS.TEMPLATES } }
			},
			{
				id: "templates",
				icon: "package-open",
				label: i18n.baseText("generic.templates"),
				position: "bottom",
				available: settingsStore.isTemplatesEnabled && !templatesStore.hasCustomTemplatesHost && !isResourceCenterEnabled.value,
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
				label: i18n.baseText("mainSidebar.help"),
				notification: showWhatsNewNotification.value,
				position: "bottom",
				children: [
					{
						id: "quickstart",
						icon: "video",
						label: i18n.baseText("mainSidebar.helpMenuItems.quickstart"),
						link: {
							href: EXTERNAL_LINKS.QUICKSTART_VIDEO,
							target: "_blank"
						}
					},
					{
						id: "docs",
						icon: "book",
						label: i18n.baseText("mainSidebar.helpMenuItems.documentation"),
						link: {
							href: EXTERNAL_LINKS.DOCUMENTATION,
							target: "_blank"
						}
					},
					{
						id: "forum",
						icon: "users",
						label: i18n.baseText("mainSidebar.helpMenuItems.forum"),
						link: {
							href: EXTERNAL_LINKS.FORUM,
							target: "_blank"
						}
					},
					{
						id: "examples",
						icon: "graduation-cap",
						label: i18n.baseText("mainSidebar.helpMenuItems.course"),
						link: {
							href: EXTERNAL_LINKS.COURSES,
							target: "_blank"
						}
					},
					{
						id: "report-bug",
						icon: "bug",
						label: i18n.baseText("mainSidebar.helpMenuItems.reportBug"),
						link: {
							href: getReportingURL(),
							target: "_blank"
						}
					},
					{
						id: "about",
						icon: "info",
						label: i18n.baseText("mainSidebar.aboutN8n"),
						position: "bottom"
					}
				]
			},
			{
				id: "settings",
				label: i18n.baseText("mainSidebar.settings"),
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
				case "resource-center":
					resourceCenterStore.markResourceCenterTooltipDismissed();
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
					createVNode(ResourceCenterTooltip_default)
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
	sideMenu: "_sideMenu_oveah_125",
	sideMenuCollapsed: "_sideMenuCollapsed_oveah_133",
	scrollAreaWrapper: "_scrollAreaWrapper_oveah_138",
	scrollAreaWrapperWithBottomBorder: "_scrollAreaWrapperWithBottomBorder_oveah_147",
	scrollAreaWrapperWithTopBorder: "_scrollAreaWrapperWithTopBorder_oveah_151"
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
export { AppSidebar_default as t };
