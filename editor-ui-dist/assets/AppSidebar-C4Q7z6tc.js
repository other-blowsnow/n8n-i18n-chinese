import { $ as openBlock, A as createTextVNode, C as createBaseVNode, E as createElementBlock, Ft as ref, K as onBeforeMount, N as defineComponent, S as computed, Sn as toDisplayString, T as createCommentVNode, W as nextTick, Wt as unref, X as onMounted, _ as Fragment, _n as normalizeClass, gt as watch, h as withModifiers, j as createVNode, q as onBeforeUnmount, rt as renderList, w as createBlock, yn as normalizeStyle, yt as withCtx } from "./vue.runtime.esm-bundler-C6vn67cX.js";
import { s as useI18n } from "./src-DQKWamAF.js";
import { Da as N8nText_default, F as N8nResizeWrapper_default, Oa as N8nButton_default, gt as useRouter, ht as useRoute, ka as N8nIcon_default, q as N8nMenuItem_default, v as N8nScrollArea_default, zi as N8nTooltip_default } from "./src-DFOx8N22.js";
import { t as _plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-Da88TEg1.js";
import { b as injectWorkflowDocumentStore, bn as useSourceControlStore, yn as useProjectsStore } from "./workflows.store-DyUv-2Dd.js";
import { n as BottomMenu_default, t as MainSidebarHeader_default } from "./MainSidebarHeader-BFtIta24.js";
import { Ca as LOCAL_STORAGE_SIDEBAR_WIDTH, Dr as DATA_TABLE_DETAILS, Vi as WHATS_NEW_MODAL_KEY, cl as getResourcePermissions, li as ABOUT_MODAL_KEY, ou as SIDEBAR_EXPANDED_EXPERIMENT, si as VIEWS } from "./constants-BMUE7W6Y.js";
import { t as useRootStore } from "./useRootStore-BOF8LYEF.js";
import { t as useSettingsStore } from "./settings.store-D_uIyAbF.js";
import { O as DEFAULT_PROJECT_ICON, f as useUIStore, g as usePostHog, n as hasPermission, p as useTelemetry, t as useUsersStore } from "./users.store-OUM63rct.js";
import { t as useCloudPlanStore } from "./cloudPlan.store-M3yGRLP8.js";
import { t as useVersionsStore } from "./versions.store-CAc7HNYn.js";
import { n as useFavoritesStore } from "./workflowsList.store-8HiamWjt.js";
import { a as trackTemplatesClick, t as TemplateClickSource } from "./utils-COtHqUdh.js";
import { t as useTemplatesStore } from "./templates.store-BdFZFlXH.js";
import { t as usePageRedirectionHelper } from "./usePageRedirectionHelper-DWmYNQPB.js";
import { n as EXTERNAL_LINKS, t as useBugReporting } from "./useBugReporting-BtNcxH-P.js";
import { t as useAiGateway } from "./useAiGateway-DQYdR7-k.js";
import { c as CHAT_VIEW } from "./constants-Cet-q9NP.js";
import { r as INSTANCE_AI_VIEW } from "./constants-DlgrjQNI.js";
import { t as sourceControlEventBus } from "./sourceControl.eventBus-D7edB4hN.js";
import { t as useKeybindings } from "./useKeybindings-De-2L-tf.js";
import { t as useGlobalEntityCreation } from "./useGlobalEntityCreation-BhDV83_u.js";
import { t as useSettingsItems } from "./useSettingsItems-BT0ZpQZ8.js";
import { t as useSidebarLayout } from "./useSidebarLayout-ClUsjrtN.js";
import { t as useResourceCenterStore } from "./resourceCenter.store-2M6C8fSu.js";
//#region src/app/components/MainSidebarSourceControl.vue?vue&type=script&setup=true&lang.ts
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
			}, [__props.isCollapsed ? (openBlock(), createBlock(unref(N8nTooltip_default), {
				key: 0,
				"show-after": tooltipOpenDelay.value,
				placement: "right",
				"avoid-collisions": false
			}, {
				content: withCtx(() => [createBaseVNode("div", null, toDisplayString(currentBranch.value), 1)]),
				default: withCtx(() => [createBaseVNode("div", {
					class: normalizeClass(_ctx.$style.icon),
					style: normalizeStyle({
						color: accessibleTextColor.value,
						background: unref(sourceControlStore).preferences.branchColor
					})
				}, [createVNode(unref(N8nIcon_default), {
					icon: "git-branch",
					size: "small"
				})], 6)]),
				_: 1
			}, 8, ["show-after"])) : (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.icon),
				style: normalizeStyle({
					color: accessibleTextColor.value,
					background: unref(sourceControlStore).preferences.branchColor
				})
			}, [createVNode(unref(N8nIcon_default), {
				icon: "git-branch",
				size: "small"
			}), createVNode(unref(N8nText_default), {
				bold: "",
				size: "small",
				class: normalizeClass(_ctx.$style.branchName)
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(currentBranch.value), 1)]),
				_: 1
			}, 8, ["class"])], 6)), createBaseVNode("div", { class: normalizeClass(_ctx.$style.buttonContainer) }, [createVNode(unref(N8nTooltip_default), {
				disabled: !__props.isCollapsed && hasPullPermission.value,
				"show-after": tooltipOpenDelay.value,
				placement: __props.isCollapsed ? "right" : "top"
			}, {
				content: withCtx(() => [createBaseVNode("div", null, toDisplayString(!hasPullPermission.value ? unref(i18n).baseText("settings.sourceControl.button.pull.forbidden") : unref(i18n).baseText("settings.sourceControl.button.pull")), 1)]),
				default: withCtx(() => [createVNode(unref(N8nButton_default), {
					variant: "ghost",
					size: "xsmall",
					"data-test-id": "main-sidebar-source-control-pull",
					icon: "arrow-down",
					disabled: !hasPullPermission.value,
					label: __props.isCollapsed ? "" : unref(i18n).baseText("settings.sourceControl.button.pull"),
					onClick: pullWorkfolder
				}, null, 8, ["disabled", "label"])]),
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
					variant: "ghost",
					size: "xsmall",
					"data-test-id": "main-sidebar-source-control-push",
					icon: "arrow-up",
					label: __props.isCollapsed ? "" : unref(i18n).baseText("settings.sourceControl.button.push"),
					disabled: unref(sourceControlStore).preferences.branchReadOnly || !hasPushPermission.value,
					onClick: pushWorkfolder
				}, null, 8, ["label", "disabled"])]),
				_: 1
			}, 8, [
				"disabled",
				"show-after",
				"placement"
			])], 2)], 2)) : createCommentVNode("", true)], 2)) : createCommentVNode("", true);
		};
	}
});
var MainSidebarSourceControl_vue_vue_type_style_index_0_lang_module_default = {
	sync: "_sync_pfkpq_125",
	collapsed: "_collapsed_pfkpq_132",
	icon: "_icon_pfkpq_136",
	buttonContainer: "_buttonContainer_pfkpq_146",
	connected: "_connected_pfkpq_152",
	branchName: "_branchName_pfkpq_160"
};
var MainSidebarSourceControl_default = /* @__PURE__ */ _plugin_vue_export_helper_default(MainSidebarSourceControl_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": MainSidebarSourceControl_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/features/collaboration/projects/composables/useFavoriteNavItems.ts
function useFavoriteNavItems() {
	const favoritesStore = useFavoritesStore();
	const projectsStore = useProjectsStore();
	const favoriteWorkflowItems = computed(() => favoritesStore.favorites.filter((f) => f.resourceType === "workflow").map((f) => ({
		menuItem: {
			id: `favorite-workflow-${f.resourceId}`,
			label: f.resourceName,
			icon: "log-in",
			route: { to: {
				name: VIEWS.WORKFLOW,
				params: { workflowId: f.resourceId }
			} }
		},
		resourceId: f.resourceId,
		resourceType: "workflow"
	})));
	const favoriteProjectItems = computed(() => favoritesStore.favorites.filter((f) => f.resourceType === "project").map((f) => {
		const project = projectsStore.myProjects.find((p) => p.id === f.resourceId);
		return {
			menuItem: {
				id: f.resourceId,
				label: f.resourceName,
				icon: project?.icon ?? DEFAULT_PROJECT_ICON,
				route: { to: {
					name: VIEWS.PROJECTS_WORKFLOWS,
					params: { projectId: f.resourceId }
				} }
			},
			resourceId: f.resourceId,
			resourceType: "project"
		};
	}));
	const favoriteDataTableItems = computed(() => favoritesStore.favorites.filter((f) => f.resourceType === "dataTable" && f.resourceProjectId).map((f) => ({
		menuItem: {
			id: `favorite-datatable-${f.resourceId}`,
			label: f.resourceName,
			icon: "table",
			route: { to: {
				name: DATA_TABLE_DETAILS,
				params: {
					projectId: f.resourceProjectId,
					id: f.resourceId
				}
			} }
		},
		resourceId: f.resourceId,
		resourceType: "dataTable"
	})));
	const favoriteFolderItems = computed(() => favoritesStore.favorites.filter((f) => f.resourceType === "folder" && f.resourceProjectId).map((f) => ({
		menuItem: {
			id: `favorite-folder-${f.resourceId}`,
			label: f.resourceName,
			icon: "folder",
			route: { to: {
				name: VIEWS.PROJECTS_FOLDERS,
				params: {
					projectId: f.resourceProjectId,
					folderId: f.resourceId
				}
			} }
		},
		resourceId: f.resourceId,
		resourceType: "folder"
	})));
	const favoriteGroups = computed(() => {
		const groups = [];
		if (favoriteProjectItems.value.length > 0) groups.push({
			type: "project",
			items: favoriteProjectItems.value
		});
		if (favoriteFolderItems.value.length > 0) groups.push({
			type: "folder",
			items: favoriteFolderItems.value
		});
		if (favoriteWorkflowItems.value.length > 0) groups.push({
			type: "workflow",
			items: favoriteWorkflowItems.value
		});
		if (favoriteDataTableItems.value.length > 0) groups.push({
			type: "dataTable",
			items: favoriteDataTableItems.value
		});
		return groups;
	});
	const activeTabId = computed(() => {
		const id = projectsStore.projectNavActiveId;
		return (Array.isArray(id) ? id[0] : id) ?? void 0;
	});
	function onFavoriteProjectClick(itemId) {
		const project = projectsStore.myProjects.find((p) => p.id === itemId);
		if (project) projectsStore.setCurrentProject(project);
	}
	function onFavoriteWorkflowClick() {
		projectsStore.setCurrentProject(null);
	}
	async function onUnpinFavorite(resourceId, resourceType) {
		await favoritesStore.toggleFavorite(resourceId, resourceType);
	}
	return {
		favoriteWorkflowItems,
		favoriteProjectItems,
		favoriteDataTableItems,
		favoriteFolderItems,
		favoriteGroups,
		activeTabId,
		onFavoriteProjectClick,
		onFavoriteWorkflowClick,
		onUnpinFavorite
	};
}
//#endregion
//#region src/features/collaboration/projects/components/ProjectNavigation.vue?vue&type=script&setup=true&lang.ts
var _hoisted_1 = ["onClick"];
var _hoisted_2 = ["aria-label", "onClick"];
var PROJECTS_COLLAPSED_KEY = "n8n:sidebar:projects-collapsed";
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
		const favoritesStore = useFavoritesStore();
		const { favoriteGroups, activeTabId, onFavoriteProjectClick, onFavoriteWorkflowClick, onUnpinFavorite } = useFavoriteNavItems();
		const displayProjects = computed(() => globalEntityCreation.displayProjects.value);
		const isFoldersFeatureEnabled = computed(() => settingsStore.isFoldersFeatureEnabled);
		const isChatLinkAvailable = computed(() => settingsStore.isChatFeatureEnabled && hasPermission(["rbac"], { rbac: { scope: "chatHub:message" } }));
		const isInstanceAiNavVisible = computed(() => {
			if (!settingsStore.isModuleActive("instance-ai")) return false;
			return settingsStore.moduleSettings["instance-ai"]?.enabled !== false;
		});
		const hasMultipleVerifiedUsers = computed(() => usersStore.allUsers.filter((user) => !user.isPendingUser).length > 1);
		const FAVORITES_COLLAPSED_KEY = computed(() => `n8n:sidebar:${usersStore.currentUser?.id ?? "anonymous"}:favorites-collapsed`);
		const favoritesCollapsed = ref(localStorage.getItem(FAVORITES_COLLAPSED_KEY.value) === "true");
		const projectsCollapsed = ref(localStorage.getItem(PROJECTS_COLLAPSED_KEY) === "true");
		watch(favoritesCollapsed, (val) => localStorage.setItem(FAVORITES_COLLAPSED_KEY.value, String(val)));
		watch(projectsCollapsed, (val) => localStorage.setItem(PROJECTS_COLLAPSED_KEY, String(val)));
		const home = computed(() => ({
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
			icon: project.icon ?? DEFAULT_PROJECT_ICON,
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
		const hasFavorites = computed(() => favoritesStore.favorites.length > 0);
		const instanceAi = computed(() => ({
			id: "instance-ai",
			icon: "sparkles",
			label: locale.baseText("projects.menu.instanceAi"),
			route: { to: { name: INSTANCE_AI_VIEW } },
			preview: true
		}));
		const chat = computed(() => ({
			id: "chat",
			icon: "message-circle",
			label: locale.baseText("projects.menu.chat"),
			position: "bottom",
			route: { to: { name: CHAT_VIEW } },
			preview: true
		}));
		async function onSourceControlPull() {
			await projectsStore.getMyProjects();
		}
		onBeforeMount(async () => {
			await usersStore.fetchUsers({
				filter: { isPending: false },
				take: 2
			});
			sourceControlEventBus.on("pull", onSourceControlPull);
		});
		onBeforeUnmount(() => {
			sourceControlEventBus.off("pull", onSourceControlPull);
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.projects) }, [
				createBaseVNode("div", { class: normalizeClass([_ctx.$style.home, props.collapsed ? _ctx.$style.collapsed : ""]) }, [
					createVNode(unref(N8nMenuItem_default), {
						item: home.value,
						compact: props.collapsed,
						active: unref(activeTabId) === "home",
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
						active: unref(activeTabId) === personalProject.value.id,
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
						active: unref(activeTabId) === "shared",
						"data-test-id": "project-shared-menu-item"
					}, null, 8, [
						"item",
						"compact",
						"active"
					])) : createCommentVNode("", true),
					isInstanceAiNavVisible.value ? (openBlock(), createBlock(unref(N8nMenuItem_default), {
						key: 2,
						item: instanceAi.value,
						compact: props.collapsed,
						active: unref(activeTabId) === "instance-ai",
						"data-test-id": "project-instance-ai-menu-item"
					}, null, 8, [
						"item",
						"compact",
						"active"
					])) : createCommentVNode("", true),
					isChatLinkAvailable.value ? (openBlock(), createBlock(unref(N8nMenuItem_default), {
						key: 3,
						item: chat.value,
						compact: props.collapsed,
						active: unref(activeTabId) === "chat",
						"data-test-id": "project-chat-menu-item"
					}, null, 8, [
						"item",
						"compact",
						"active"
					])) : createCommentVNode("", true)
				], 2),
				hasFavorites.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [!props.collapsed ? (openBlock(), createElementBlock("button", {
					key: 0,
					class: normalizeClass(_ctx.$style.sectionHeader),
					onClick: _cache[0] || (_cache[0] = ($event) => favoritesCollapsed.value = !favoritesCollapsed.value)
				}, [createVNode(unref(N8nText_default), {
					size: "small",
					bold: "",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("favorites.menu.title")), 1)]),
					_: 1
				}), createVNode(unref(N8nIcon_default), {
					icon: "chevron-down",
					size: "medium",
					class: normalizeClass([_ctx.$style.chevron, favoritesCollapsed.value ? _ctx.$style.chevronCollapsed : ""])
				}, null, 8, ["class"])], 2)) : createCommentVNode("", true), props.collapsed || !favoritesCollapsed.value ? (openBlock(), createElementBlock("div", {
					key: 1,
					class: normalizeClass(_ctx.$style.projectItems)
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(favoriteGroups), (group, groupIndex) => {
					return openBlock(), createElementBlock(Fragment, { key: group.type }, [!props.collapsed && groupIndex > 0 ? (openBlock(), createElementBlock("div", {
						key: 0,
						class: normalizeClass(_ctx.$style.groupSpacer)
					}, null, 2)) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList(group.items, (entry) => {
						return openBlock(), createElementBlock("div", {
							key: entry.menuItem.id,
							class: normalizeClass([_ctx.$style.favoriteItem, props.collapsed && _ctx.$style.collapsed]),
							onClick: ($event) => group.type === "project" ? unref(onFavoriteProjectClick)(entry.resourceId) : group.type === "workflow" ? unref(onFavoriteWorkflowClick)() : void 0
						}, [createVNode(unref(N8nMenuItem_default), {
							item: entry.menuItem,
							compact: props.collapsed,
							active: unref(activeTabId) === entry.menuItem.id
						}, null, 8, [
							"item",
							"compact",
							"active"
						]), !props.collapsed ? (openBlock(), createElementBlock("button", {
							key: 0,
							class: normalizeClass(_ctx.$style.unpinButton),
							"aria-label": unref(locale).baseText("favorites.remove"),
							"data-test-id": "favorite-unpin-button",
							onClick: withModifiers(($event) => unref(onUnpinFavorite)(entry.resourceId, entry.resourceType), ["stop", "prevent"])
						}, [createVNode(unref(N8nIcon_default), {
							icon: "x",
							size: "small"
						})], 10, _hoisted_2)) : createCommentVNode("", true)], 10, _hoisted_1);
					}), 128))], 64);
				}), 128))], 2)) : createCommentVNode("", true)], 64)) : createCommentVNode("", true),
				unref(projectsStore).isTeamProjectFeatureEnabled && displayProjects.value.length > 0 ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [!props.collapsed ? (openBlock(), createElementBlock("button", {
					key: 0,
					class: normalizeClass(_ctx.$style.sectionHeader),
					onClick: _cache[1] || (_cache[1] = ($event) => projectsCollapsed.value = !projectsCollapsed.value)
				}, [createVNode(unref(N8nText_default), {
					size: "small",
					bold: "",
					color: "text-light"
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("projects.menu.title")), 1)]),
					_: 1
				}), createVNode(unref(N8nIcon_default), {
					icon: "chevron-down",
					size: "medium",
					class: normalizeClass([_ctx.$style.chevron, projectsCollapsed.value ? _ctx.$style.chevronCollapsed : ""])
				}, null, 8, ["class"])], 2)) : createCommentVNode("", true)], 64)) : createCommentVNode("", true),
				(unref(projectsStore).isTeamProjectFeatureEnabled || isFoldersFeatureEnabled.value) && (!unref(projectsStore).isTeamProjectFeatureEnabled || !projectsCollapsed.value || props.collapsed) ? (openBlock(), createElementBlock("div", {
					key: 2,
					class: normalizeClass(_ctx.$style.projectItems)
				}, [(openBlock(true), createElementBlock(Fragment, null, renderList(displayProjects.value, (project) => {
					return openBlock(), createBlock(unref(N8nMenuItem_default), {
						key: project.id,
						class: normalizeClass({ [_ctx.$style.collapsed]: props.collapsed }),
						item: getProjectMenuItem(project),
						compact: props.collapsed,
						active: unref(activeTabId) === project.id,
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
	projects: "_projects_14k04_125",
	plusBtn: "_plusBtn_14k04_130",
	projectItems: "_projectItems_14k04_134",
	upgradeLink: "_upgradeLink_14k04_138",
	sectionHeader: "_sectionHeader_14k04_143",
	chevron: "_chevron_14k04_161",
	chevronCollapsed: "_chevronCollapsed_14k04_175",
	projectsLabel: "_projectsLabel_14k04_179",
	collapsed: "_collapsed_14k04_189",
	addFirstProjectBtn: "_addFirstProjectBtn_14k04_202",
	home: "_home_14k04_211",
	groupSpacer: "_groupSpacer_14k04_218",
	favoriteItem: "_favoriteItem_14k04_222",
	unpinButton: "_unpinButton_14k04_225"
};
var ProjectNavigation_default = /* @__PURE__ */ _plugin_vue_export_helper_default(ProjectNavigation_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ProjectNavigation_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/experiments/sidebarExpanded/useSidebarExpandedExperiment.ts
function useSidebarExpandedExperiment() {
	const posthogStore = usePostHog();
	const uiStore = useUIStore();
	const applyExperiment = () => {
		if (uiStore.sidebarMenuCollapsed === null) {
			const isVariant = posthogStore.getVariant(SIDEBAR_EXPANDED_EXPERIMENT.name) === SIDEBAR_EXPANDED_EXPERIMENT.variant;
			uiStore.sidebarMenuCollapsed = !isVariant;
			if (isVariant) localStorage.setItem(LOCAL_STORAGE_SIDEBAR_WIDTH, "200");
		}
	};
	return { applyExperiment };
}
//#endregion
//#region src/app/components/MainSidebar.vue?vue&type=script&setup=true&lang.ts
var MainSidebar_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "MainSidebar",
	setup(__props) {
		const cloudPlanStore = useCloudPlanStore();
		const rootStore = useRootStore();
		const settingsStore = useSettingsStore();
		const templatesStore = useTemplatesStore();
		const uiStore = useUIStore();
		const versionsStore = useVersionsStore();
		const workflowDocumentStore = injectWorkflowDocumentStore();
		const resourceCenterStore = useResourceCenterStore();
		const i18n = useI18n();
		const router = useRouter();
		const telemetry = useTelemetry();
		const pageRedirectionHelper = usePageRedirectionHelper();
		const { getReportingURL } = useBugReporting();
		const { applyExperiment: applySidebarExpandedExperiment } = useSidebarExpandedExperiment();
		applySidebarExpandedExperiment();
		if (resourceCenterStore.shouldAutoExpandSidebar) {
			if (uiStore.sidebarMenuCollapsed) {
				uiStore.sidebarMenuCollapsed = false;
				localStorage.setItem(LOCAL_STORAGE_SIDEBAR_WIDTH, "200");
			}
			resourceCenterStore.markSidebarAutoExpanded();
		}
		const { isCollapsed, isResizing, sidebarWidth, onResizeStart, onResize, onResizeEnd, toggleCollapse } = useSidebarLayout();
		const { settingsItems } = useSettingsItems();
		const { fetchWallet, isEnabled: isAiGatewayEnabled } = useAiGateway();
		const basePath = ref("");
		const scrollAreaRef = ref();
		const hasOverflow = ref(false);
		const hasScrolledFromTop = ref(false);
		let resizeObserver = null;
		const showWhatsNewNotification = computed(() => versionsStore.hasVersionUpdates || versionsStore.whatsNewArticles.some((article) => !versionsStore.isWhatsNewArticleRead(article.id)));
		const isResourceCenterEnabled = computed(() => resourceCenterStore.isFeatureEnabled());
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
				icon: {
					type: "icon",
					value: "lightbulb",
					color: "primary"
				},
				label: i18n.baseText("experiments.resourceCenter.sidebar"),
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
			if (isAiGatewayEnabled.value) fetchWallet();
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
				workflow_id: workflowDocumentStore.value.workflowId
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
				case "templates":
					trackTemplatesClick(TemplateClickSource.sidebarButton);
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
					[_ctx.$style.sideMenuCollapsed]: unref(isCollapsed),
					[_ctx.$style.sideMenuResizing]: unref(isResizing)
				}),
				width: unref(sidebarWidth),
				style: normalizeStyle(unref(isCollapsed) ? {} : { width: `${unref(sidebarWidth)}px` }),
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
					createVNode(MainSidebarSourceControl_default, { "is-collapsed": unref(isCollapsed) }, null, 8, ["is-collapsed"])
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
	sideMenu: "_sideMenu_wytei_125",
	sideMenuCollapsed: "_sideMenuCollapsed_wytei_135",
	sideMenuResizing: "_sideMenuResizing_wytei_139",
	scrollAreaWrapper: "_scrollAreaWrapper_wytei_143",
	scrollAreaWrapperWithBottomBorder: "_scrollAreaWrapperWithBottomBorder_wytei_152",
	scrollAreaWrapperWithTopBorder: "_scrollAreaWrapperWithTopBorder_wytei_156"
};
var MainSidebar_default = /* @__PURE__ */ _plugin_vue_export_helper_default(MainSidebar_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": MainSidebar_vue_vue_type_style_index_0_lang_module_default }]]);
//#endregion
//#region src/app/components/app/AppSidebar.vue
var AppSidebar_default = /* @__PURE__ */ defineComponent({
	__name: "AppSidebar",
	setup(__props) {
		return (_ctx, _cache) => {
			return openBlock(), createBlock(MainSidebar_default);
		};
	}
});
//#endregion
export { AppSidebar_default as t };
