import { C as computed, D as createElementBlock, E as createCommentVNode, G as nextTick, Gt as unref, It as ref, J as onBeforeUnmount, M as createVNode, P as defineComponent, Q as onUnmounted, Sn as toDisplayString, T as createBlock, W as mergeProps, Z as onMounted, _ as Fragment, _n as normalizeClass, _t as watch, b as Teleport, bt as withCtx, ct as resolveDynamicComponent, et as openBlock, it as renderList, j as createTextVNode, mt as useTemplateRef, q as onBeforeMount, w as createBaseVNode, yn as normalizeStyle } from "./vue.runtime.esm-bundler-DDuXT-9r.js";
import { _t as I18nT, g as onClickOutside, gt as useI18n } from "./_MapCache-pT3vKw8Z.js";
import { A as N8nMenuItem_default, C as N8nPopoverReka_default, In as N8nText_default, Ln as N8nButton_default, M as N8nLogo_default, Pn as N8nHeading_default, Tt as N8nIconButton_default, i as N8nScrollArea_default, k as N8nNavigationDropdown_default, mt as N8nLink_default, vt as N8nTooltip_default, zn as N8nIcon_default } from "./src-BmrdBtCN.js";
import "./en-BYTsM8fR.js";
import "./preload-helper-CR0ecmWK.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-BwBpWJRZ.js";
import { b as useRouter, y as useRoute } from "./truncate-1c7Iwk7N.js";
import "./icon-mgEZlgYz.js";
import "./empty-RTEMfF4N.js";
import { Bo as useSettingsStore, Cc as STORES, Dn as useSourceControlStore, En as useProjectsStore, Gn as hasPermission, Is as getBecomeCreatorCta, Ni as useUIStore, Qs as useRootStore, er as useUsersStore, o as useWorkflowsStore, t as useTelemetry, xc as defineStore, zo as useStorage } from "./useTelemetry-C2EhNQhN.js";
import "./useToast-C8xM63lB.js";
import "./sanitize-html-Cfxibw1n.js";
import "./path-browserify-CTmc1OxV.js";
import { $i as DateTime, Bo as VERSIONS_MODAL_KEY, Co as EXPERIMENT_TEMPLATE_RECO_V2_KEY, S as RELEASE_NOTES_URL, So as EXPERIMENT_TEMPLATES_DATA_QUALITY_KEY, Vo as WHATS_NEW_MODAL_KEY, _r as getResourcePermissions, ho as ABOUT_MODAL_KEY, mo as VIEWS, wo as EXPERIMENT_TEMPLATE_RECO_V3_KEY } from "./constants-C_oOJnqT.js";
import "./merge-DCUiz6nU.js";
import "./dateformat-D7TIhVd4.js";
import { t as useDebounce } from "./useDebounce-DyoINrYS.js";
import { t as useExternalHooks } from "./useExternalHooks-CE2Rdzfk.js";
import { t as useCloudPlanStore } from "./cloudPlan.store-Dw9c9iy4.js";
import { a as useTemplatesDataQualityStore, i as trackTemplatesClick, n as TemplateClickSource, t as useTemplatesStore } from "./templates.store-CFt_GGxU.js";
import { _ as useCalloutHelpers } from "./nodeCreator.store-BXjpGwrk.js";
import "./nodeIcon-BWTKM7V3.js";
import { t as useVersionsStore } from "./versions.store-DbkVHo9d.js";
import { t as usePageRedirectionHelper } from "./usePageRedirectionHelper-BOaFWroN.js";
import { n as EXTERNAL_LINKS, r as useGlobalEntityCreation, t as useBugReporting } from "./useBugReporting-CSx88Kxg.js";
import "./sortByProperty-CUhVU03p.js";
import { i as CHAT_VIEW } from "./constants-9ReQTHaF.js";
import { t as sourceControlEventBus } from "./sourceControl.eventBus-D3rGavFB.js";
import { t as useKeybindings } from "./useKeybindings-DdITEiRN.js";
import { n as usePersonalizedTemplatesV2Store, t as usePersonalizedTemplatesV3Store } from "./personalizedTemplatesV3.store-Bdk_O6S4.js";
import { t as MainSidebarUserArea_default } from "./MainSidebarUserArea-ns2gnf4W.js";
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
			}, [createBaseVNode("div", { class: normalizeClass(_ctx.$style.textAndCloseButton) }, [createBaseVNode("p", { class: normalizeClass(_ctx.$style.text) }, toDisplayString(unref(i18n).baseText("becomeCreator.text")), 3), createBaseVNode("button", {
				class: normalizeClass(_ctx.$style.closeButton),
				"data-test-id": "close-become-template-creator-cta",
				onClick: _cache[0] || (_cache[0] = ($event) => unref(store).dismissCta())
			}, [createVNode(unref(N8nIcon_default), {
				icon: "x",
				size: "xsmall",
				title: unref(i18n).baseText("generic.close")
			}, null, 8, ["title"])], 2)], 2), createVNode(unref(N8nButton_default), {
				class: normalizeClass(_ctx.$style.becomeCreatorButton),
				label: unref(i18n).baseText("becomeCreator.buttonText"),
				size: "xmini",
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
	container: "_container_1ab4u_123",
	textAndCloseButton: "_textAndCloseButton_1ab4u_131",
	text: "_text_1ab4u_131",
	closeButton: "_closeButton_1ab4u_144",
	becomeCreatorButton: "_becomeCreatorButton_1ab4u_156"
};
var BecomeTemplateCreatorCta_default = /* @__PURE__ */ __plugin_vue_export_helper_default(BecomeTemplateCreatorCta_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": BecomeTemplateCreatorCta_vue_vue_type_style_index_0_lang_module_default }]]);
var VersionUpdateCTA_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
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
		const uiStore = useUIStore();
		const pageRedirectionHelper = usePageRedirectionHelper();
		const telemetry = useTelemetry();
		const openUpdatesPanel = () => {
			uiStore.openModal(VERSIONS_MODAL_KEY);
		};
		const onUpdateClick = async () => {
			telemetry.track("User clicked on update button", { source: "main-sidebar" });
			await pageRedirectionHelper.goToVersions();
		};
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.container) }, [createVNode(unref(N8nLink_default), {
				size: "small",
				theme: "text",
				"data-test-id": "version-update-next-versions-link",
				onClick: openUpdatesPanel
			}, {
				default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("whatsNew.versionsBehind", { interpolate: { count: unref(versionsStore).nextVersions.length > 99 ? "99+" : unref(versionsStore).nextVersions.length } })), 1)]),
				_: 1
			}), createVNode(unref(N8nTooltip_default), {
				disabled: !props.tooltipText,
				content: props.tooltipText
			}, {
				default: withCtx(() => [createVNode(unref(N8nButton_default), {
					class: normalizeClass(_ctx.$style.button),
					label: unref(i18n).baseText("whatsNew.update"),
					"data-test-id": "version-update-cta-button",
					size: "mini",
					disabled: props.disabled,
					onClick: onUpdateClick
				}, null, 8, [
					"class",
					"label",
					"disabled"
				])]),
				_: 1
			}, 8, ["disabled", "content"])], 2);
		};
	}
});
var VersionUpdateCTA_vue_vue_type_style_index_0_lang_module_default = {
	container: "_container_5mg6c_123",
	button: "_button_5mg6c_135"
};
var VersionUpdateCTA_default = /* @__PURE__ */ __plugin_vue_export_helper_default(VersionUpdateCTA_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": VersionUpdateCTA_vue_vue_type_style_index_0_lang_module_default }]]);
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
var _hoisted_1 = { class: "home" };
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
		const isCreatingProject = computed(() => globalEntityCreation.isCreatingProject.value);
		const displayProjects = computed(() => globalEntityCreation.displayProjects.value);
		const isFoldersFeatureEnabled = computed(() => settingsStore.isFoldersFeatureEnabled);
		const hasMultipleVerifiedUsers = computed(() => usersStore.allUsers.filter((user) => !user.isPendingUser).length > 1);
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
		const showAddFirstProject = computed(() => projectsStore.isTeamProjectFeatureEnabled && !displayProjects.value.length);
		const activeTabId = computed(() => {
			return (Array.isArray(projectsStore.projectNavActiveId) ? projectsStore.projectNavActiveId[0] : projectsStore.projectNavActiveId) ?? void 0;
		});
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
				createBaseVNode("div", _hoisted_1, [
					createVNode(unref(N8nMenuItem_default), {
						item: home.value,
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
					])) : createCommentVNode("", true)
				]),
				!props.collapsed && unref(projectsStore).isTeamProjectFeatureEnabled ? (openBlock(), createBlock(unref(N8nHeading_default), {
					key: 0,
					class: normalizeClass([_ctx.$style.projectsLabel]),
					bold: "",
					size: "small",
					color: "text-light",
					tag: "h3"
				}, {
					default: withCtx(() => [createBaseVNode("span", null, toDisplayString(unref(locale).baseText("projects.menu.title")), 1), unref(projectsStore).canCreateProjects ? (openBlock(), createBlock(unref(N8nTooltip_default), {
						key: 0,
						placement: "right",
						disabled: unref(projectsStore).hasPermissionToCreateProjects,
						content: unref(locale).baseText("projects.create.permissionDenied")
					}, {
						default: withCtx(() => [createVNode(unref(N8nButton_default), {
							icon: "plus",
							text: "",
							"data-test-id": "project-plus-button",
							disabled: isCreatingProject.value || !unref(projectsStore).hasPermissionToCreateProjects,
							class: normalizeClass(_ctx.$style.plusBtn),
							onClick: _cache[0] || (_cache[0] = ($event) => unref(globalEntityCreation).createProject("add_icon"))
						}, null, 8, ["disabled", "class"])]),
						_: 1
					}, 8, ["disabled", "content"])) : createCommentVNode("", true)]),
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
				}), 128))], 2)) : createCommentVNode("", true),
				showAddFirstProject.value ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 2,
					placement: "right",
					disabled: unref(projectsStore).hasPermissionToCreateProjects,
					content: unref(locale).baseText("projects.create.permissionDenied")
				}, {
					default: withCtx(() => [createVNode(unref(N8nButton_default), {
						class: normalizeClass([_ctx.$style.addFirstProjectBtn, { [_ctx.$style.collapsed]: props.collapsed }]),
						disabled: isCreatingProject.value || !unref(projectsStore).hasPermissionToCreateProjects,
						type: "secondary",
						icon: "plus",
						"data-test-id": "add-first-project-button",
						onClick: _cache[1] || (_cache[1] = ($event) => unref(globalEntityCreation).createProject("add_first_project_button"))
					}, {
						default: withCtx(() => [createBaseVNode("span", null, toDisplayString(unref(locale).baseText("projects.menu.addFirstProject")), 1)]),
						_: 1
					}, 8, ["class", "disabled"])]),
					_: 1
				}, 8, ["disabled", "content"])) : createCommentVNode("", true)
			], 2);
		};
	}
});
var ProjectNavigation_vue_vue_type_style_index_0_lang_module_default = {
	projects: "_projects_81iv3_123",
	plusBtn: "_plusBtn_81iv3_128",
	projectItems: "_projectItems_81iv3_132",
	upgradeLink: "_upgradeLink_81iv3_136",
	projectsLabel: "_projectsLabel_81iv3_141",
	collapsed: "_collapsed_81iv3_150",
	addFirstProjectBtn: "_addFirstProjectBtn_81iv3_163"
};
var ProjectNavigation_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ProjectNavigation_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ProjectNavigation_vue_vue_type_style_index_0_lang_module_default }], ["__scopeId", "data-v-7bf5593b"]]);
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
				style: normalizeStyle({ borderLeftColor: unref(sourceControlStore).preferences.branchColor }),
				"data-test-id": "main-sidebar-source-control"
			}, [unref(sourceControlStore).preferences.connected && unref(sourceControlStore).preferences.branchName ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.connected),
				"data-test-id": "main-sidebar-source-control-connected"
			}, [createBaseVNode("span", { class: normalizeClass(_ctx.$style.branchName) }, [createVNode(unref(N8nIcon_default), { icon: "git-branch" }), createTextVNode(" " + toDisplayString(currentBranch.value), 1)], 2), createBaseVNode("div", { class: normalizeClass({ "pt-xs": !_ctx.isCollapsed }) }, [createVNode(unref(N8nTooltip_default), {
				disabled: !_ctx.isCollapsed && hasPullPermission.value,
				"show-after": tooltipOpenDelay.value,
				placement: _ctx.isCollapsed ? "right" : "top"
			}, {
				content: withCtx(() => [createBaseVNode("div", null, toDisplayString(!hasPullPermission.value ? unref(i18n).baseText("settings.sourceControl.button.pull.forbidden") : unref(i18n).baseText("settings.sourceControl.button.pull")), 1)]),
				default: withCtx(() => [createVNode(unref(N8nButton_default), {
					class: normalizeClass({
						"mr-2xs": !_ctx.isCollapsed,
						"mb-2xs": _ctx.isCollapsed
					}),
					disabled: !hasPullPermission.value,
					"data-test-id": "main-sidebar-source-control-pull",
					icon: "arrow-down",
					type: "tertiary",
					size: "mini",
					square: _ctx.isCollapsed,
					label: _ctx.isCollapsed ? "" : unref(i18n).baseText("settings.sourceControl.button.pull"),
					onClick: pullWorkfolder
				}, null, 8, [
					"class",
					"disabled",
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
				content: withCtx(() => [createBaseVNode("div", null, toDisplayString(unref(sourceControlStore).preferences.branchReadOnly || !hasPushPermission.value ? unref(i18n).baseText("settings.sourceControl.button.push.forbidden") : unref(i18n).baseText("settings.sourceControl.button.push")), 1)]),
				default: withCtx(() => [createVNode(unref(N8nButton_default), {
					square: _ctx.isCollapsed,
					label: _ctx.isCollapsed ? "" : unref(i18n).baseText("settings.sourceControl.button.push"),
					disabled: unref(sourceControlStore).preferences.branchReadOnly || !hasPushPermission.value,
					"data-test-id": "main-sidebar-source-control-push",
					icon: "arrow-up",
					type: "tertiary",
					size: "mini",
					onClick: pushWorkfolder
				}, null, 8, [
					"square",
					"label",
					"disabled"
				])]),
				_: 1
			}, 8, [
				"disabled",
				"show-after",
				"placement"
			])], 2)], 2)) : createCommentVNode("", true)], 6)) : createCommentVNode("", true);
		};
	}
});
var MainSidebarSourceControl_vue_vue_type_style_index_0_lang_module_default = {
	sync: "_sync_1xb4i_123",
	isConnected: "_isConnected_1xb4i_129",
	collapsed: "_collapsed_1xb4i_133",
	branchName: "_branchName_1xb4i_143",
	connected: "_connected_1xb4i_153"
};
var MainSidebarSourceControl_default = /* @__PURE__ */ __plugin_vue_export_helper_default(MainSidebarSourceControl_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": MainSidebarSourceControl_vue_vue_type_style_index_0_lang_module_default }]]);
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
		const { callDebounced } = useDebounce();
		const externalHooks = useExternalHooks();
		const i18n = useI18n();
		const telemetry = useTelemetry();
		const pageRedirectionHelper = usePageRedirectionHelper();
		const { getReportingURL } = useBugReporting();
		const calloutHelpers = useCalloutHelpers();
		useKeybindings({ ctrl_alt_o: () => handleSelect("about") });
		const user = useTemplateRef("user");
		const basePath = ref("");
		const fullyExpanded = ref(false);
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
				id: "chat",
				icon: "message-circle",
				label: "Chat",
				position: "bottom",
				route: { to: { name: CHAT_VIEW } },
				available: settingsStore.isChatFeatureEnabled && hasPermission(["rbac"], { rbac: { scope: "chatHub:message" } })
			},
			{
				id: "templates",
				icon: "package-open",
				label: i18n.baseText("generic.templates"),
				position: "bottom",
				available: settingsStore.isTemplatesEnabled && calloutHelpers.isPreBuiltAgentsCalloutVisible.value && !isTemplatesExperimentEnabled.value,
				route: { to: { name: VIEWS.PRE_BUILT_AGENT_TEMPLATES } }
			},
			{
				id: "templates",
				icon: "package-open",
				label: i18n.baseText("generic.templates"),
				position: "bottom",
				available: settingsStore.isTemplatesEnabled && isTemplatesExperimentEnabled.value
			},
			{
				id: "templates",
				icon: "package-open",
				label: i18n.baseText("generic.templates"),
				position: "bottom",
				available: settingsStore.isTemplatesEnabled && !calloutHelpers.isPreBuiltAgentsCalloutVisible.value && templatesStore.hasCustomTemplatesHost && !isTemplatesExperimentEnabled.value,
				route: { to: { name: VIEWS.TEMPLATES } }
			},
			{
				id: "templates",
				icon: "package-open",
				label: i18n.baseText("generic.templates"),
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
				label: i18n.baseText("mainSidebar.help"),
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
				id: "whats-new",
				icon: "bell",
				notification: showWhatsNewNotification.value,
				label: i18n.baseText("mainSidebar.whatsNew"),
				position: "bottom",
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
						available: versionsStore.hasVersionUpdates,
						props: {
							disabled: !usersStore.canUserUpdateVersion,
							tooltipText: !usersStore.canUserUpdateVersion ? i18n.baseText("whatsNew.updateNudgeTooltip") : void 0
						}
					}
				]
			}
		]);
		const visibleMenuItems = computed(() => mainMenuItems.value.filter((item) => item.available !== false));
		const createBtn = ref();
		const isCollapsed = computed(() => uiStore.sidebarMenuCollapsed);
		const showUserArea = computed(() => hasPermission(["authenticated"]));
		const userIsTrialing = computed(() => cloudPlanStore.userIsTrialing);
		onMounted(async () => {
			window.addEventListener("resize", onResize);
			basePath.value = rootStore.baseUrl;
			if (user.value?.$el) externalHooks.run("mainSidebar.mounted", { userRef: user.value.$el });
			becomeTemplateCreatorStore.startMonitoringCta();
			await nextTick(onResizeEnd);
		});
		onBeforeUnmount(() => {
			becomeTemplateCreatorStore.stopMonitoringCta();
			window.removeEventListener("resize", onResize);
		});
		const trackHelpItemClick = (itemType) => {
			telemetry.track("User clicked help resource", {
				type: itemType,
				workflow_id: workflowsStore.workflowId
			});
		};
		const toggleCollapse = () => {
			uiStore.toggleSidebarMenuCollapse();
			if (!isCollapsed.value) setTimeout(() => {
				fullyExpanded.value = !isCollapsed.value;
			}, 300);
			else fullyExpanded.value = !isCollapsed.value;
		};
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
		function onResize() {
			callDebounced(onResizeEnd, { debounceTime: 250 });
		}
		async function onResizeEnd() {
			if (window.innerWidth < 900) uiStore.sidebarMenuCollapsed = true;
			else uiStore.sidebarMenuCollapsed = uiStore.sidebarMenuCollapsedPreference;
			nextTick(() => {
				fullyExpanded.value = !isCollapsed.value;
			});
		}
		const { menu, handleSelect: handleMenuSelect, createProjectAppendSlotName, createWorkflowsAppendSlotName, createCredentialsAppendSlotName, projectsLimitReachedMessage, upgradeLabel, hasPermissionToCreateProjects } = useGlobalEntityCreation();
		onClickOutside(createBtn, () => {
			createBtn.value?.close();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", {
				id: "side-menu",
				class: normalizeClass({
					["side-menu"]: true,
					[_ctx.$style.sideMenu]: true,
					[_ctx.$style.sideMenuCollapsed]: isCollapsed.value
				})
			}, [
				createBaseVNode("div", {
					id: "collapse-change-button",
					class: normalizeClass(["clickable", _ctx.$style.sideMenuCollapseButton]),
					onClick: toggleCollapse
				}, [isCollapsed.value ? (openBlock(), createBlock(unref(N8nIcon_default), {
					key: 0,
					icon: "chevron-right",
					size: "xsmall",
					class: "ml-5xs"
				})) : (openBlock(), createBlock(unref(N8nIcon_default), {
					key: 1,
					icon: "chevron-left",
					size: "xsmall",
					class: "mr-5xs"
				}))], 2),
				createBaseVNode("div", { class: normalizeClass(_ctx.$style.logo) }, [createVNode(unref(N8nLogo_default), {
					size: "small",
					collapsed: isCollapsed.value,
					"release-channel": unref(settingsStore).settings.releaseChannel
				}, {
					default: withCtx(() => [unref(sourceControlStore).preferences.branchReadOnly && !isCollapsed.value ? (openBlock(), createBlock(unref(N8nTooltip_default), {
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
							size: "xsmall",
							class: normalizeClass(_ctx.$style.readOnlyEnvironmentIcon)
						}, null, 8, ["class"])]),
						_: 1
					})) : createCommentVNode("", true)]),
					_: 1
				}, 8, ["collapsed", "release-channel"]), createVNode(unref(N8nNavigationDropdown_default), {
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
						content: unref(i18n).baseText("readOnlyEnv.cantAdd.credential")
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
						content: unref(i18n).baseText("readOnlyEnv.cantAdd.project")
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
						icon: "plus",
						type: "secondary",
						outline: ""
					})]),
					_: 2
				}, 1032, ["menu", "onSelect"])], 2),
				createVNode(unref(N8nScrollArea_default), { "as-child": "" }, {
					default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.scrollArea) }, [createVNode(ProjectNavigation_default, {
						collapsed: isCollapsed.value,
						"plan-name": unref(cloudPlanStore).currentPlanData?.displayName
					}, null, 8, ["collapsed", "plan-name"]), createBaseVNode("div", { class: normalizeClass(_ctx.$style.bottomMenu) }, [fullyExpanded.value && !userIsTrialing.value ? (openBlock(), createBlock(BecomeTemplateCreatorCta_default, { key: 0 })) : createCommentVNode("", true), createBaseVNode("div", { class: normalizeClass(_ctx.$style.bottomMenuItems) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(visibleMenuItems.value, (item) => {
						return openBlock(), createElementBlock(Fragment, { key: item.id }, [item.children ? (openBlock(), createBlock(unref(N8nPopoverReka_default), {
							key: item.id,
							side: "right",
							align: "end",
							"side-offset": 16
						}, {
							content: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.popover) }, [createVNode(unref(N8nText_default), {
								class: normalizeClass(_ctx.$style.popoverTitle),
								bold: "",
								color: "foreground-xdark"
							}, {
								default: withCtx(() => [createTextVNode(toDisplayString(item.label), 1)]),
								_: 2
							}, 1032, ["class"]), (openBlock(true), createElementBlock(Fragment, null, renderList(item.children, (child) => {
								return openBlock(), createElementBlock(Fragment, { key: child.id }, [unref(isCustomMenuItem)(child) ? (openBlock(), createBlock(resolveDynamicComponent(child.component), mergeProps({
									key: 0,
									ref_for: true
								}, child.props), null, 16)) : (openBlock(), createBlock(unref(N8nMenuItem_default), {
									key: 1,
									item: child,
									onClick: () => handleSelect(child.id)
								}, null, 8, ["item", "onClick"]))], 64);
							}), 128))], 2)]),
							trigger: withCtx(() => [createVNode(unref(N8nMenuItem_default), {
								item,
								compact: isCollapsed.value,
								onClick: () => handleSelect(item.id)
							}, null, 8, [
								"item",
								"compact",
								"onClick"
							])]),
							_: 2
						}, 1024)) : (openBlock(), createBlock(unref(N8nMenuItem_default), {
							key: 1,
							item,
							compact: isCollapsed.value,
							onClick: () => handleSelect(item.id)
						}, null, 8, [
							"item",
							"compact",
							"onClick"
						]))], 64);
					}), 128))], 2)], 2)], 2)]),
					_: 1
				}),
				createVNode(MainSidebarSourceControl_default, { "is-collapsed": isCollapsed.value }, null, 8, ["is-collapsed"]),
				showUserArea.value ? (openBlock(), createBlock(MainSidebarUserArea_default, {
					key: 0,
					ref_key: "user",
					ref: user,
					"fully-expanded": fullyExpanded.value,
					"is-collapsed": isCollapsed.value
				}, null, 8, ["fully-expanded", "is-collapsed"])) : createCommentVNode("", true),
				createVNode(TemplateTooltip_default)
			], 2);
		};
	}
});
var MainSidebar_vue_vue_type_style_index_0_lang_module_default = {
	sideMenu: "_sideMenu_19mj0_123",
	logo: "_logo_19mj0_132",
	sideMenuCollapsed: "_sideMenuCollapsed_19mj0_143",
	scrollArea: "_scrollArea_19mj0_152",
	sideMenuCollapseButton: "_sideMenuCollapseButton_19mj0_158",
	bottomMenu: "_bottomMenu_19mj0_177",
	bottomMenuItems: "_bottomMenuItems_19mj0_183",
	popover: "_popover_19mj0_187",
	popoverTitle: "_popoverTitle_19mj0_192",
	readOnlyEnvironmentIcon: "_readOnlyEnvironmentIcon_19mj0_202"
};
var MainSidebar_default = /* @__PURE__ */ __plugin_vue_export_helper_default(MainSidebar_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": MainSidebar_vue_vue_type_style_index_0_lang_module_default }]]);
export { MainSidebar_default as default };
