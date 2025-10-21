import { b7 as get, b8 as useDebugInfo, v as useSettingsStore, b9 as useCloudPlanStore, av as useProjectsStore, af as useSourceControlStore, b as useRouter, a as useToast, r as ref, x as computed, ba as sortByProperty, V as VIEWS, c as useI18n, aC as getResourcePermissions, bb as updatedIconSet, aB as usePageRedirectionHelper, a0 as defineStore, au as useRootStore, bc as useStorage, bd as DateTime, a5 as STORES, d as defineComponent, h as createElementBlock, f as createCommentVNode, k as unref, g as openBlock, n as normalizeClass, j as createBaseVNode, i as createVNode, t as toDisplayString, N as N8nIcon, q as N8nButton, al as useTelemetry, _ as _export_sfc, be as useVersionsStore, Q as useUIStore, w as withCtx, l as createTextVNode, C as N8nLink, aa as N8nTooltip, bf as VERSIONS_MODAL_KEY, bg as usePersonalizedTemplatesV3Store, a8 as watch, o as onMounted, bh as onUnmounted, e as createBlock, ap as normalizeStyle, bi as Teleport, Z as nextTick, u as useUsersStore, b3 as onBeforeMount, bj as N8nMenuItem, m as N8nHeading, F as Fragment, A as renderList, a3 as useRoute, aE as hasPermission, bk as useTemplatesStore, a2 as useWorkflowsStore, bl as usePersonalizedTemplatesV2Store, P as useDebounce, bm as useCalloutHelpers, bn as usePostHog, bo as useKeybindings, bp as PROJECT_VARIABLES_EXPERIMENT, bq as CHAT_VIEW, br as RELEASE_NOTES_URL, bs as useExternalHooks, X as onBeforeUnmount, bt as onClickOutside, ac as I18nT, ab as _sfc_main$6, y as N8nPopoverReka, p as N8nText, bu as resolveDynamicComponent, K as mergeProps, bv as N8nScrollArea, G as N8nAvatar, bw as WHATS_NEW_MODAL_KEY, bx as ABOUT_MODAL_KEY, by as EXPERIMENT_TEMPLATE_RECO_V3_KEY, bz as trackTemplatesClick, bA as TemplateClickSource, bB as EXPERIMENT_TEMPLATE_RECO_V2_KEY } from "./index-lkSN61-i.js";
import { L as Logo } from "./Logo-DbBoKm01.js";
import { N as N8nNavigationDropdown } from "./NavigationDropdown-C8gyWHQe.js";
const isCustomMenuItem = (e) => "component" in e;
async function getBecomeCreatorCta(context) {
  const response = await get(context.baseUrl, "/cta/become-creator");
  return response;
}
const BASE_FORUM_URL = "https://github.com/n8n-io/n8n/issues/new?labels=bug-report";
const REPORT_TEMPLATE = `
<!-- Please follow the template below. Skip the questions that are not relevant to you. -->

## Describe the problem/error/question


## What is the error message (if any)?


## Please share your workflow/screenshots/recording

\`\`\`
(Select the nodes on your canvas and use the keyboard shortcuts CMD+C/CTRL+C and CMD+V/CTRL+V to copy and paste the workflow.)
⚠️ WARNING ⚠️ If you have sensitive data in your workflow (like API keys), please remove it before sharing.
\`\`\`


## Share the output returned by the last node
<!-- If you need help with data transformations, please also share your expected output. -->

`;
function useBugReporting() {
  const debugInfo = useDebugInfo();
  const getReportingURL = () => {
    const url = new URL(BASE_FORUM_URL);
    const report = `${REPORT_TEMPLATE}
${debugInfo.generateDebugInfo({ skipSensitive: true, secondaryHeader: true })}}`;
    url.searchParams.append("body", report);
    return url.toString();
  };
  return {
    getReportingURL
  };
}
const isIconName = (icon) => typeof icon === "string" && Object.keys(updatedIconSet).includes(icon);
const isProjectIcon = (icon) => isIconName(icon) || typeof icon === "object" && icon !== null && "value" in icon && typeof icon.value === "string" && "type" in icon && (icon.type === "emoji" || icon.type === "icon" && isIconName(icon.value));
const useGlobalEntityCreation = () => {
  const CREATE_PROJECT_ID = "create-project";
  const WORKFLOWS_MENU_ID = "workflow";
  const CREDENTIALS_MENU_ID = "credential";
  const DEFAULT_ICON = "layers";
  const settingsStore = useSettingsStore();
  const cloudPlanStore = useCloudPlanStore();
  const projectsStore = useProjectsStore();
  const sourceControlStore = useSourceControlStore();
  const router = useRouter();
  const i18n = useI18n();
  const toast = useToast();
  const isCreatingProject = ref(false);
  const displayProjects = computed(
    () => sortByProperty(
      "name",
      projectsStore.myProjects.filter((p) => p.type === "team")
    )
  );
  const disabledWorkflow = (scopes = []) => sourceControlStore.preferences.branchReadOnly || !getResourcePermissions(scopes).workflow.create;
  const disabledCredential = (scopes = []) => sourceControlStore.preferences.branchReadOnly || !getResourcePermissions(scopes).credential.create;
  const menu = computed(() => {
    if (!projectsStore.isTeamProjectFeatureEnabled) {
      return [
        {
          id: "workflow",
          title: "Workflow",
          route: {
            name: VIEWS.NEW_WORKFLOW,
            query: {
              projectId: projectsStore.personalProject?.id
            }
          }
        },
        {
          id: "credential",
          title: "Credential",
          route: {
            name: VIEWS.CREDENTIALS,
            params: {
              projectId: projectsStore.personalProject?.id,
              credentialId: "create"
            }
          }
        },
        {
          id: CREATE_PROJECT_ID,
          title: "Project",
          disabled: true
        }
      ];
    }
    return [
      {
        id: WORKFLOWS_MENU_ID,
        title: "Workflow",
        disabled: sourceControlStore.preferences.branchReadOnly,
        ...!sourceControlStore.preferences.branchReadOnly && {
          submenu: [
            {
              id: "workflow-title",
              title: "Create in",
              disabled: true
            },
            {
              id: "workflow-personal",
              title: i18n.baseText("projects.menu.personal"),
              icon: "user",
              disabled: disabledWorkflow(projectsStore.personalProject?.scopes),
              route: {
                name: VIEWS.NEW_WORKFLOW,
                query: { projectId: projectsStore.personalProject?.id }
              }
            },
            ...displayProjects.value.map((project) => ({
              id: `workflow-${project.id}`,
              title: project.name,
              icon: isProjectIcon(project.icon) ? project.icon : DEFAULT_ICON,
              disabled: disabledWorkflow(project.scopes),
              route: {
                name: VIEWS.NEW_WORKFLOW,
                query: { projectId: project.id }
              }
            }))
          ]
        }
      },
      {
        id: CREDENTIALS_MENU_ID,
        title: "Credential",
        disabled: sourceControlStore.preferences.branchReadOnly,
        ...!sourceControlStore.preferences.branchReadOnly && {
          submenu: [
            {
              id: "credential-title",
              title: "Create in",
              disabled: true
            },
            {
              id: "credential-personal",
              title: i18n.baseText("projects.menu.personal"),
              icon: "user",
              disabled: disabledCredential(projectsStore.personalProject?.scopes),
              route: {
                name: VIEWS.PROJECTS_CREDENTIALS,
                params: { projectId: projectsStore.personalProject?.id, credentialId: "create" }
              }
            },
            ...displayProjects.value.map((project) => ({
              id: `credential-${project.id}`,
              title: project.name,
              icon: isProjectIcon(project.icon) ? project.icon : DEFAULT_ICON,
              disabled: disabledCredential(project.scopes),
              route: {
                name: VIEWS.PROJECTS_CREDENTIALS,
                params: { projectId: project.id, credentialId: "create" }
              }
            }))
          ]
        }
      },
      {
        id: CREATE_PROJECT_ID,
        title: "Project",
        disabled: !projectsStore.canCreateProjects || !projectsStore.hasPermissionToCreateProjects
      }
    ];
  });
  const createProject = async (uiContext) => {
    isCreatingProject.value = true;
    try {
      const newProject = await projectsStore.createProject({
        name: i18n.baseText("projects.settings.newProjectName"),
        icon: { type: "icon", value: DEFAULT_ICON },
        uiContext
      });
      await router.push({ name: VIEWS.PROJECT_SETTINGS, params: { projectId: newProject.id } });
      toast.showMessage({
        title: i18n.baseText("projects.settings.save.successful.title", {
          interpolate: { projectName: newProject.name }
        }),
        type: "success"
      });
    } catch (error) {
      toast.showError(error, i18n.baseText("projects.error.title"));
    } finally {
      isCreatingProject.value = false;
    }
  };
  const handleSelect = (id) => {
    if (id !== CREATE_PROJECT_ID) return;
    if (projectsStore.canCreateProjects && projectsStore.hasPermissionToCreateProjects) {
      void createProject("universal_button");
      return;
    }
    void usePageRedirectionHelper().goToUpgrade("rbac", "upgrade-rbac");
  };
  const projectsLimitReachedMessage = computed(() => {
    if (settingsStore.isCloudDeployment) {
      return i18n.baseText("projects.create.limitReached.cloud", {
        interpolate: {
          planName: cloudPlanStore.currentPlanData?.displayName ?? "",
          limit: projectsStore.teamProjectsLimit
        }
      });
    }
    if (!projectsStore.isTeamProjectFeatureEnabled) {
      return i18n.baseText("projects.create.limitReached.self");
    }
    if (!projectsStore.hasPermissionToCreateProjects) {
      return i18n.baseText("projects.create.permissionDenied");
    }
    return i18n.baseText("projects.create.limitReached", {
      interpolate: {
        limit: projectsStore.teamProjectsLimit
      }
    });
  });
  const createProjectAppendSlotName = computed(() => `item.append.${CREATE_PROJECT_ID}`);
  const createWorkflowsAppendSlotName = computed(() => `item.append.${WORKFLOWS_MENU_ID}`);
  const createCredentialsAppendSlotName = computed(() => `item.append.${CREDENTIALS_MENU_ID}`);
  const hasPermissionToCreateProjects = projectsStore.hasPermissionToCreateProjects;
  const upgradeLabel = computed(() => {
    if (settingsStore.isCloudDeployment) {
      return i18n.baseText("generic.upgrade");
    }
    if (!projectsStore.isTeamProjectFeatureEnabled) {
      return i18n.baseText("generic.enterprise");
    }
    return i18n.baseText("generic.upgrade");
  });
  return {
    menu,
    handleSelect,
    createProjectAppendSlotName,
    createWorkflowsAppendSlotName,
    createCredentialsAppendSlotName,
    projectsLimitReachedMessage,
    hasPermissionToCreateProjects,
    upgradeLabel,
    createProject,
    isCreatingProject,
    displayProjects
  };
};
const LOCAL_STORAGE_KEY = "N8N_BECOME_TEMPLATE_CREATOR_CTA_DISMISSED_AT";
const RESHOW_DISMISSED_AFTER_DAYS = 30;
const POLL_INTERVAL_IN_MS = 15 * 60 * 1e3;
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
    const becomeCreatorCta = await getBecomeCreatorCta(rootStore.restApiContext);
    ctaMeetsCriteria.value = becomeCreatorCta;
  };
  const fetchUserCtasIfNeeded = async () => {
    if (isDismissed.value || cloudPlanStore.userIsTrialing || ctaMeetsCriteria.value) {
      return;
    }
    await fetchBecomeCreatorCta();
  };
  const startMonitoringCta = () => {
    if (monitorCtasTimer.value) {
      return;
    }
    setTimeout(fetchUserCtasIfNeeded, 1e3);
    monitorCtasTimer.value = setInterval(fetchUserCtasIfNeeded, POLL_INTERVAL_IN_MS);
  };
  const stopMonitoringCta = () => {
    if (!monitorCtasTimer.value) {
      return;
    }
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
  const reshowAtTime = DateTime.fromISO(dismissedAt).plus({
    days: RESHOW_DISMISSED_AFTER_DAYS
  });
  return reshowAtTime <= DateTime.now();
}
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
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
      }, [
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.textAndCloseButton)
        }, [
          createBaseVNode("p", {
            class: normalizeClass(_ctx.$style.text)
          }, toDisplayString(unref(i18n).baseText("becomeCreator.text")), 3),
          createBaseVNode("button", {
            class: normalizeClass(_ctx.$style.closeButton),
            "data-test-id": "close-become-template-creator-cta",
            onClick: _cache[0] || (_cache[0] = ($event) => unref(store).dismissCta())
          }, [
            createVNode(unref(N8nIcon), {
              icon: "x",
              size: "xsmall",
              title: unref(i18n).baseText("generic.close")
            }, null, 8, ["title"])
          ], 2)
        ], 2),
        createVNode(unref(N8nButton), {
          class: normalizeClass(_ctx.$style.becomeCreatorButton),
          label: unref(i18n).baseText("becomeCreator.buttonText"),
          size: "xmini",
          type: "secondary",
          element: "a",
          href: "https://creators.n8n.io/hub",
          target: "_blank",
          onClick
        }, null, 8, ["class", "label"])
      ], 2)) : createCommentVNode("", true);
    };
  }
});
const container$1 = "_container_1ab4u_123";
const textAndCloseButton = "_textAndCloseButton_1ab4u_131";
const text$1 = "_text_1ab4u_131";
const closeButton = "_closeButton_1ab4u_144";
const becomeCreatorButton = "_becomeCreatorButton_1ab4u_156";
const style0$5 = {
  container: container$1,
  textAndCloseButton,
  text: text$1,
  closeButton,
  becomeCreatorButton
};
const cssModules$5 = {
  "$style": style0$5
};
const BecomeTemplateCreatorCta = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__cssModules", cssModules$5]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "VersionUpdateCTA",
  props: {
    disabled: { type: Boolean, default: false },
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
      telemetry.track("User clicked on update button", {
        source: "main-sidebar"
      });
      await pageRedirectionHelper.goToVersions();
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.container)
      }, [
        createVNode(unref(N8nLink), {
          size: "small",
          theme: "text",
          "data-test-id": "version-update-next-versions-link",
          onClick: openUpdatesPanel
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(unref(i18n).baseText("whatsNew.versionsBehind", {
              interpolate: {
                count: unref(versionsStore).nextVersions.length > 99 ? "99+" : unref(versionsStore).nextVersions.length
              }
            })), 1)
          ]),
          _: 1
        }),
        createVNode(unref(N8nTooltip), {
          disabled: !props.tooltipText,
          content: props.tooltipText
        }, {
          default: withCtx(() => [
            createVNode(unref(N8nButton), {
              class: normalizeClass(_ctx.$style.button),
              label: unref(i18n).baseText("whatsNew.update"),
              "data-test-id": "version-update-cta-button",
              size: "mini",
              disabled: props.disabled,
              onClick: onUpdateClick
            }, null, 8, ["class", "label", "disabled"])
          ]),
          _: 1
        }, 8, ["disabled", "content"])
      ], 2);
    };
  }
});
const container = "_container_5mg6c_123";
const button = "_button_5mg6c_135";
const style0$4 = {
  container,
  button
};
const cssModules$4 = {
  "$style": style0$4
};
const VersionUpdateCTA = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__cssModules", cssModules$4]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "TemplateTooltip",
  setup(__props) {
    const personalizedTemplatesV3Store = usePersonalizedTemplatesV3Store();
    const {
      markTemplateRecommendationInteraction,
      trackPersonalizationTooltipView,
      trackPersonalizationTooltipDismiss
    } = personalizedTemplatesV3Store;
    const locale = useI18n();
    const tooltipRef = ref();
    const isVisible = ref(false);
    const position = ref({ top: 0, left: 0 });
    const tooltipKey = ref(0);
    const shouldShow = computed(() => personalizedTemplatesV3Store.shouldShowTemplateTooltip);
    const calculatePosition = () => {
      const templatesElement = document.querySelector('[data-test-id="menu-item"][id="templates"]');
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
      if (isVisible.value) {
        calculatePosition();
      }
    };
    const handleContentResize = () => {
      if (isVisible.value) {
        setTimeout(() => {
          calculatePosition();
        }, 500);
      }
    };
    watch(
      shouldShow,
      async (newValue) => {
        if (newValue) {
          await showTooltip();
        } else {
          hideTooltip();
        }
      },
      { immediate: true }
    );
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
      return openBlock(), createBlock(Teleport, { to: "body" }, [
        isVisible.value && shouldShow.value ? (openBlock(), createElementBlock("div", {
          ref_key: "tooltipRef",
          ref: tooltipRef,
          key: tooltipKey.value,
          class: normalizeClass(_ctx.$style.triggerContainer),
          style: normalizeStyle({
            position: "fixed",
            top: position.value.top + "px",
            left: position.value.left + "px"
          })
        }, [
          createVNode(unref(N8nTooltip), {
            visible: true,
            placement: "right",
            "show-arrow": true,
            "popper-style": { maxWidth: "260px", minWidth: "240px" }
          }, {
            content: withCtx(() => [
              createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.tooltipContent)
              }, [
                createBaseVNode("span", {
                  class: normalizeClass(_ctx.$style.text)
                }, toDisplayString(unref(locale).baseText("experiments.personalizedTemplatesV3.recommendationTooltip")), 3),
                createBaseVNode("button", {
                  class: normalizeClass(_ctx.$style.dismissButton),
                  type: "button",
                  onClick: handleDismiss,
                  "aria-label": "Dismiss tooltip"
                }, [
                  createVNode(unref(N8nIcon), {
                    icon: "x",
                    size: "small"
                  })
                ], 2)
              ], 2)
            ]),
            default: withCtx(() => [
              createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.tooltipTrigger)
              }, null, 2)
            ]),
            _: 1
          })
        ], 6)) : createCommentVNode("", true)
      ]);
    };
  }
});
const triggerContainer = "_triggerContainer_5kwt6_123";
const tooltipTrigger = "_tooltipTrigger_5kwt6_128";
const tooltipContent = "_tooltipContent_5kwt6_134";
const text = "_text_5kwt6_140";
const dismissButton = "_dismissButton_5kwt6_146";
const style0$3 = {
  triggerContainer,
  tooltipTrigger,
  tooltipContent,
  text,
  dismissButton
};
const cssModules$3 = {
  "$style": style0$3
};
const TemplateTooltip = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__cssModules", cssModules$3]]);
const _hoisted_1$1 = { class: "home" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
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
    const hasMultipleVerifiedUsers = computed(
      () => usersStore.allUsers.filter((user) => !user.isPendingUser).length > 1
    );
    const home = computed(() => ({
      id: "home",
      label: locale.baseText("projects.menu.overview"),
      icon: "house",
      route: {
        to: { name: VIEWS.HOMEPAGE }
      }
    }));
    const shared = computed(() => ({
      id: "shared",
      label: locale.baseText("projects.menu.shared"),
      icon: "share",
      route: {
        to: { name: VIEWS.SHARED_WITH_ME }
      }
    }));
    const getProjectMenuItem = (project) => ({
      id: project.id,
      label: project.name ?? "",
      icon: project.icon,
      route: {
        to: {
          name: VIEWS.PROJECTS_WORKFLOWS,
          params: { projectId: project.id }
        }
      }
    });
    const personalProject = computed(() => ({
      id: projectsStore.personalProject?.id ?? "",
      label: locale.baseText("projects.menu.personal"),
      icon: "user",
      route: {
        to: {
          name: VIEWS.PROJECTS_WORKFLOWS,
          params: { projectId: projectsStore.personalProject?.id }
        }
      }
    }));
    const showAddFirstProject = computed(
      () => projectsStore.isTeamProjectFeatureEnabled && !displayProjects.value.length
    );
    const activeTabId = computed(() => {
      return (Array.isArray(projectsStore.projectNavActiveId) ? projectsStore.projectNavActiveId[0] : projectsStore.projectNavActiveId) ?? void 0;
    });
    onBeforeMount(async () => {
      await usersStore.fetchUsers();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.projects)
      }, [
        createBaseVNode("div", _hoisted_1$1, [
          createVNode(unref(N8nMenuItem), {
            item: home.value,
            compact: props.collapsed,
            active: activeTabId.value === "home",
            "data-test-id": "project-home-menu-item"
          }, null, 8, ["item", "compact", "active"]),
          unref(projectsStore).isTeamProjectFeatureEnabled || isFoldersFeatureEnabled.value ? (openBlock(), createBlock(unref(N8nMenuItem), {
            key: 0,
            item: personalProject.value,
            compact: props.collapsed,
            active: activeTabId.value === personalProject.value.id,
            "data-test-id": "project-personal-menu-item"
          }, null, 8, ["item", "compact", "active"])) : createCommentVNode("", true),
          (unref(projectsStore).isTeamProjectFeatureEnabled || isFoldersFeatureEnabled.value) && hasMultipleVerifiedUsers.value ? (openBlock(), createBlock(unref(N8nMenuItem), {
            key: 1,
            item: shared.value,
            compact: props.collapsed,
            active: activeTabId.value === "shared",
            "data-test-id": "project-shared-menu-item"
          }, null, 8, ["item", "compact", "active"])) : createCommentVNode("", true)
        ]),
        !props.collapsed && unref(projectsStore).isTeamProjectFeatureEnabled ? (openBlock(), createBlock(unref(N8nHeading), {
          key: 0,
          class: normalizeClass([_ctx.$style.projectsLabel]),
          bold: "",
          size: "small",
          color: "text-light",
          tag: "h3"
        }, {
          default: withCtx(() => [
            createBaseVNode("span", null, toDisplayString(unref(locale).baseText("projects.menu.title")), 1),
            unref(projectsStore).canCreateProjects ? (openBlock(), createBlock(unref(N8nTooltip), {
              key: 0,
              placement: "right",
              disabled: unref(projectsStore).hasPermissionToCreateProjects,
              content: unref(locale).baseText("projects.create.permissionDenied")
            }, {
              default: withCtx(() => [
                createVNode(unref(N8nButton), {
                  icon: "plus",
                  text: "",
                  "data-test-id": "project-plus-button",
                  disabled: isCreatingProject.value || !unref(projectsStore).hasPermissionToCreateProjects,
                  class: normalizeClass(_ctx.$style.plusBtn),
                  onClick: _cache[0] || (_cache[0] = ($event) => unref(globalEntityCreation).createProject("add_icon"))
                }, null, 8, ["disabled", "class"])
              ]),
              _: 1
            }, 8, ["disabled", "content"])) : createCommentVNode("", true)
          ]),
          _: 1
        }, 8, ["class"])) : createCommentVNode("", true),
        unref(projectsStore).isTeamProjectFeatureEnabled || isFoldersFeatureEnabled.value ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass(_ctx.$style.projectItems)
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(displayProjects.value, (project) => {
            return openBlock(), createBlock(unref(N8nMenuItem), {
              key: project.id,
              class: normalizeClass({
                [_ctx.$style.collapsed]: props.collapsed
              }),
              item: getProjectMenuItem(project),
              compact: props.collapsed,
              active: activeTabId.value === project.id,
              "data-test-id": "project-menu-item"
            }, null, 8, ["class", "item", "compact", "active"]);
          }), 128))
        ], 2)) : createCommentVNode("", true),
        showAddFirstProject.value ? (openBlock(), createBlock(unref(N8nTooltip), {
          key: 2,
          placement: "right",
          disabled: unref(projectsStore).hasPermissionToCreateProjects,
          content: unref(locale).baseText("projects.create.permissionDenied")
        }, {
          default: withCtx(() => [
            createVNode(unref(N8nButton), {
              class: normalizeClass([
                _ctx.$style.addFirstProjectBtn,
                {
                  [_ctx.$style.collapsed]: props.collapsed
                }
              ]),
              disabled: isCreatingProject.value || !unref(projectsStore).hasPermissionToCreateProjects,
              type: "secondary",
              icon: "plus",
              "data-test-id": "add-first-project-button",
              onClick: _cache[1] || (_cache[1] = ($event) => unref(globalEntityCreation).createProject("add_first_project_button"))
            }, {
              default: withCtx(() => [
                createBaseVNode("span", null, toDisplayString(unref(locale).baseText("projects.menu.addFirstProject")), 1)
              ]),
              _: 1
            }, 8, ["class", "disabled"])
          ]),
          _: 1
        }, 8, ["disabled", "content"])) : createCommentVNode("", true)
      ], 2);
    };
  }
});
const projects = "_projects_81iv3_123";
const plusBtn = "_plusBtn_81iv3_128";
const projectItems = "_projectItems_81iv3_132";
const upgradeLink = "_upgradeLink_81iv3_136";
const projectsLabel = "_projectsLabel_81iv3_141";
const collapsed$1 = "_collapsed_81iv3_150";
const addFirstProjectBtn = "_addFirstProjectBtn_81iv3_163";
const style0$2 = {
  projects,
  plusBtn,
  projectItems,
  upgradeLink,
  projectsLabel,
  collapsed: collapsed$1,
  addFirstProjectBtn
};
const cssModules$2 = {
  "$style": style0$2
};
const ProjectNavigation = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__cssModules", cssModules$2], ["__scopeId", "data-v-5d368480"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "MainSidebarSourceControl",
  props: {
    isCollapsed: { type: Boolean }
  },
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
      return hasPermission(["rbac"], { rbac: { scope: "sourceControl:push" } }) || projectStore.myProjects.some(
        (project) => project.type === "team" && getResourcePermissions(project?.scopes)?.sourceControl?.push
      );
    });
    const hasPullPermission = computed(() => {
      return hasPermission(["rbac"], { rbac: { scope: "sourceControl:pull" } });
    });
    const sourceControlAvailable = computed(
      () => sourceControlStore.isEnterpriseSourceControlEnabled && (hasPullPermission.value || hasPushPermission.value)
    );
    async function pushWorkfolder() {
      void router.push({
        query: {
          ...route.query,
          sourceControl: "push"
        }
      });
    }
    function pullWorkfolder() {
      void router.push({
        query: {
          ...route.query,
          sourceControl: "pull"
        }
      });
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
      }, [
        unref(sourceControlStore).preferences.connected && unref(sourceControlStore).preferences.branchName ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(_ctx.$style.connected),
          "data-test-id": "main-sidebar-source-control-connected"
        }, [
          createBaseVNode("span", {
            class: normalizeClass(_ctx.$style.branchName)
          }, [
            createVNode(unref(N8nIcon), { icon: "git-branch" }),
            createTextVNode(" " + toDisplayString(currentBranch.value), 1)
          ], 2),
          createBaseVNode("div", {
            class: normalizeClass({ "pt-xs": !_ctx.isCollapsed })
          }, [
            createVNode(unref(N8nTooltip), {
              disabled: !_ctx.isCollapsed && hasPullPermission.value,
              "show-after": tooltipOpenDelay.value,
              placement: _ctx.isCollapsed ? "right" : "top"
            }, {
              content: withCtx(() => [
                createBaseVNode("div", null, toDisplayString(!hasPullPermission.value ? unref(i18n).baseText("settings.sourceControl.button.pull.forbidden") : unref(i18n).baseText("settings.sourceControl.button.pull")), 1)
              ]),
              default: withCtx(() => [
                createVNode(unref(N8nButton), {
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
                }, null, 8, ["class", "disabled", "square", "label"])
              ]),
              _: 1
            }, 8, ["disabled", "show-after", "placement"]),
            createVNode(unref(N8nTooltip), {
              disabled: !_ctx.isCollapsed && !unref(sourceControlStore).preferences.branchReadOnly && hasPushPermission.value,
              "show-after": tooltipOpenDelay.value,
              placement: _ctx.isCollapsed ? "right" : "top"
            }, {
              content: withCtx(() => [
                createBaseVNode("div", null, toDisplayString(unref(sourceControlStore).preferences.branchReadOnly || !hasPushPermission.value ? unref(i18n).baseText("settings.sourceControl.button.push.forbidden") : unref(i18n).baseText("settings.sourceControl.button.push")), 1)
              ]),
              default: withCtx(() => [
                createVNode(unref(N8nButton), {
                  square: _ctx.isCollapsed,
                  label: _ctx.isCollapsed ? "" : unref(i18n).baseText("settings.sourceControl.button.push"),
                  disabled: unref(sourceControlStore).preferences.branchReadOnly || !hasPushPermission.value,
                  "data-test-id": "main-sidebar-source-control-push",
                  icon: "arrow-up",
                  type: "tertiary",
                  size: "mini",
                  onClick: pushWorkfolder
                }, null, 8, ["square", "label", "disabled"])
              ]),
              _: 1
            }, 8, ["disabled", "show-after", "placement"])
          ], 2)
        ], 2)) : createCommentVNode("", true)
      ], 6)) : createCommentVNode("", true);
    };
  }
});
const sync = "_sync_1xb4i_123";
const isConnected = "_isConnected_1xb4i_129";
const collapsed = "_collapsed_1xb4i_133";
const branchName = "_branchName_1xb4i_143";
const connected = "_connected_1xb4i_153";
const style0$1 = {
  sync,
  isConnected,
  collapsed,
  branchName,
  connected
};
const cssModules$1 = {
  "$style": style0$1
};
const MainSidebarSourceControl = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__cssModules", cssModules$1]]);
const _hoisted_1 = { key: 0 };
const _hoisted_2 = {
  class: "ml-3xs",
  "data-test-id": "main-sidebar-user-menu"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
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
    const { callDebounced } = useDebounce();
    const externalHooks = useExternalHooks();
    const i18n = useI18n();
    useRoute();
    const router = useRouter();
    const telemetry = useTelemetry();
    const pageRedirectionHelper = usePageRedirectionHelper();
    const { getReportingURL } = useBugReporting();
    const calloutHelpers = useCalloutHelpers();
    const posthogStore = usePostHog();
    useKeybindings({
      ctrl_alt_o: () => handleSelect("about")
    });
    const user = ref(null);
    const basePath = ref("");
    const fullyExpanded = ref(false);
    const userMenuItems = ref([
      {
        id: "settings",
        icon: "settings",
        label: i18n.baseText("settings")
      },
      {
        id: "logout",
        icon: "door-open",
        label: i18n.baseText("auth.signout")
      }
    ]);
    const showWhatsNewNotification = computed(
      () => versionsStore.hasVersionUpdates || versionsStore.whatsNewArticles.some(
        (article) => !versionsStore.isWhatsNewArticleRead(article.id)
      )
    );
    const isProjectVariablesEnabled = computed(
      () => posthogStore.isVariantEnabled(
        PROJECT_VARIABLES_EXPERIMENT.name,
        PROJECT_VARIABLES_EXPERIMENT.variant
      )
    );
    const mainMenuItems = computed(() => [
      {
        id: "cloud-admin",
        position: "bottom",
        label: "Admin Panel",
        icon: "cloud",
        available: settingsStore.isCloudDeployment && hasPermission(["instanceOwner"])
      },
      {
        // Link to in-app pre-built agent templates, available experiment is enabled
        id: "templates",
        icon: "package-open",
        label: i18n.baseText("mainSidebar.templates"),
        position: "bottom",
        available: settingsStore.isTemplatesEnabled && calloutHelpers.isPreBuiltAgentsCalloutVisible.value && !(personalizedTemplatesV2Store.isFeatureEnabled() || personalizedTemplatesV3Store.isFeatureEnabled()),
        route: { to: { name: VIEWS.PRE_BUILT_AGENT_TEMPLATES } }
      },
      {
        // Link to personalized template modal, available when V2 or V3 experiment is enabled
        id: "templates",
        icon: "package-open",
        label: i18n.baseText("mainSidebar.templates"),
        position: "bottom",
        available: settingsStore.isTemplatesEnabled && (personalizedTemplatesV2Store.isFeatureEnabled() || personalizedTemplatesV3Store.isFeatureEnabled())
      },
      {
        // Link to in-app templates, available if custom templates are enabled and experiment is disabled
        id: "templates",
        icon: "package-open",
        label: i18n.baseText("mainSidebar.templates"),
        position: "bottom",
        available: settingsStore.isTemplatesEnabled && !calloutHelpers.isPreBuiltAgentsCalloutVisible.value && templatesStore.hasCustomTemplatesHost && !(personalizedTemplatesV2Store.isFeatureEnabled() || personalizedTemplatesV3Store.isFeatureEnabled()),
        route: { to: { name: VIEWS.TEMPLATES } }
      },
      {
        // Link to website templates, available if custom templates are not enabled
        id: "templates",
        icon: "package-open",
        label: i18n.baseText("mainSidebar.templates"),
        position: "bottom",
        available: settingsStore.isTemplatesEnabled && !calloutHelpers.isPreBuiltAgentsCalloutVisible.value && !templatesStore.hasCustomTemplatesHost && !(personalizedTemplatesV2Store.isFeatureEnabled() || personalizedTemplatesV3Store.isFeatureEnabled()),
        link: {
          href: templatesStore.websiteTemplateRepositoryURL,
          target: "_blank"
        }
      },
      {
        id: "variables",
        icon: "variable",
        label: i18n.baseText("mainSidebar.variables"),
        position: "bottom",
        route: { to: { name: VIEWS.VARIABLES } },
        available: !isProjectVariablesEnabled.value
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
        id: "chat",
        icon: "bot",
        label: "Chat",
        position: "bottom",
        route: { to: { name: CHAT_VIEW } },
        available: settingsStore.isChatFeatureEnabled && hasPermission(["rbac"], { rbac: { scope: "chatHub:message" } })
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
              href: "https://www.youtube.com/watch?v=4cQWJViybAQ",
              target: "_blank"
            }
          },
          {
            id: "docs",
            icon: "book",
            label: i18n.baseText("mainSidebar.helpMenuItems.documentation"),
            link: {
              href: "https://docs.n8n.io?utm_source=n8n_app&utm_medium=app_sidebar",
              target: "_blank"
            }
          },
          {
            id: "forum",
            icon: "users",
            label: i18n.baseText("mainSidebar.helpMenuItems.forum"),
            link: {
              href: "https://community.n8n.io?utm_source=n8n_app&utm_medium=app_sidebar",
              target: "_blank"
            }
          },
          {
            id: "examples",
            icon: "graduation-cap",
            label: i18n.baseText("mainSidebar.helpMenuItems.course"),
            link: {
              href: "https://docs.n8n.io/courses/",
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
          ...versionsStore.whatsNewArticles.map(
            (article) => ({
              id: `whats-new-article-${article.id}`,
              label: article.title,
              size: "small",
              customIconSize: "small",
              icon: {
                type: "emoji",
                value: "•",
                color: !versionsStore.isWhatsNewArticleRead(article.id) ? "primary" : "text-light"
              }
            })
          ),
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
            component: VersionUpdateCTA,
            available: versionsStore.hasVersionUpdates,
            props: {
              disabled: !usersStore.canUserUpdateVersion,
              tooltipText: !usersStore.canUserUpdateVersion ? i18n.baseText("whatsNew.updateNudgeTooltip") : void 0
            }
          }
        ]
      }
    ]);
    const visibleMenuItems = computed(
      () => mainMenuItems.value.filter((item) => item.available !== false)
    );
    const createBtn = ref();
    const isCollapsed = computed(() => uiStore.sidebarMenuCollapsed);
    const showUserArea = computed(() => hasPermission(["authenticated"]));
    const userIsTrialing = computed(() => cloudPlanStore.userIsTrialing);
    onMounted(async () => {
      window.addEventListener("resize", onResize);
      basePath.value = rootStore.baseUrl;
      if (user.value) {
        void externalHooks.run("mainSidebar.mounted", {
          userRef: user.value
        });
      }
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
    const onUserActionToggle = (action) => {
      switch (action) {
        case "logout":
          onLogout();
          break;
        case "settings":
          void router.push({ name: VIEWS.SETTINGS });
          break;
      }
    };
    const onLogout = () => {
      void router.push({ name: VIEWS.SIGNOUT });
    };
    const toggleCollapse = () => {
      uiStore.toggleSidebarMenuCollapse();
      if (!isCollapsed.value) {
        setTimeout(() => {
          fullyExpanded.value = !isCollapsed.value;
        }, 300);
      } else {
        fullyExpanded.value = !isCollapsed.value;
      }
    };
    const handleSelect = (key) => {
      switch (key) {
        case "templates":
          if (personalizedTemplatesV3Store.isFeatureEnabled()) {
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
          } else if (settingsStore.isTemplatesEnabled && !templatesStore.hasCustomTemplatesHost) {
            trackTemplatesClick(TemplateClickSource.sidebarButton);
          }
          break;
        case "about": {
          trackHelpItemClick("about");
          uiStore.openModal(ABOUT_MODAL_KEY);
          break;
        }
        case "cloud-admin": {
          void pageRedirectionHelper.goToDashboard();
          break;
        }
        case "quickstart":
        case "docs":
        case "forum":
        case "examples": {
          trackHelpItemClick(key);
          break;
        }
        case "insights":
          telemetry.track("User clicked insights link from side menu");
        default:
          if (key.startsWith("whats-new-article-")) {
            const articleId = Number(key.replace("whats-new-article-", ""));
            telemetry.track("User clicked on what's new section", {
              article_id: articleId
            });
            uiStore.openModalWithData({
              name: WHATS_NEW_MODAL_KEY,
              data: {
                articleId
              }
            });
          }
          break;
      }
    };
    function onResize() {
      void callDebounced(onResizeEnd, { debounceTime: 250 });
    }
    async function onResizeEnd() {
      if (window.innerWidth < 900) {
        uiStore.sidebarMenuCollapsed = true;
      } else {
        uiStore.sidebarMenuCollapsed = uiStore.sidebarMenuCollapsedPreference;
      }
      void nextTick(() => {
        fullyExpanded.value = !isCollapsed.value;
      });
    }
    const {
      menu,
      handleSelect: handleMenuSelect,
      createProjectAppendSlotName,
      createWorkflowsAppendSlotName,
      createCredentialsAppendSlotName,
      projectsLimitReachedMessage,
      upgradeLabel,
      hasPermissionToCreateProjects
    } = useGlobalEntityCreation();
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
        }, [
          isCollapsed.value ? (openBlock(), createBlock(unref(N8nIcon), {
            key: 0,
            icon: "chevron-right",
            size: "xsmall",
            class: "ml-5xs"
          })) : (openBlock(), createBlock(unref(N8nIcon), {
            key: 1,
            icon: "chevron-left",
            size: "xsmall",
            class: "mr-5xs"
          }))
        ], 2),
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.logo)
        }, [
          createVNode(unref(Logo), {
            size: "small",
            collapsed: isCollapsed.value,
            "release-channel": unref(settingsStore).settings.releaseChannel
          }, {
            default: withCtx(() => [
              unref(sourceControlStore).preferences.branchReadOnly && !isCollapsed.value ? (openBlock(), createBlock(unref(N8nTooltip), {
                key: 0,
                placement: "bottom"
              }, {
                content: withCtx(() => [
                  createVNode(unref(I18nT), {
                    keypath: "readOnlyEnv.tooltip",
                    scope: "global"
                  }, {
                    link: withCtx(() => [
                      createVNode(unref(N8nLink), {
                        to: "https://docs.n8n.io/source-control-environments/setup/#step-4-connect-n8n-and-configure-your-instance",
                        size: "small"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(unref(i18n).baseText("readOnlyEnv.tooltip.link")), 1)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                default: withCtx(() => [
                  createVNode(unref(N8nIcon), {
                    "data-test-id": "read-only-env-icon",
                    icon: "lock",
                    size: "xsmall",
                    class: normalizeClass(_ctx.$style.readOnlyEnvironmentIcon)
                  }, null, 8, ["class"])
                ]),
                _: 1
              })) : createCommentVNode("", true)
            ]),
            _: 1
          }, 8, ["collapsed", "release-channel"]),
          createVNode(unref(N8nNavigationDropdown), {
            ref_key: "createBtn",
            ref: createBtn,
            "data-test-id": "universal-add",
            menu: unref(menu),
            onSelect: unref(handleMenuSelect)
          }, {
            [unref(createWorkflowsAppendSlotName)]: withCtx(() => [
              unref(sourceControlStore).preferences.branchReadOnly ? (openBlock(), createBlock(unref(N8nTooltip), {
                key: 0,
                placement: "right",
                content: unref(i18n).baseText("readOnlyEnv.cantAdd.workflow")
              }, {
                default: withCtx(() => [
                  createVNode(unref(N8nIcon), {
                    style: { "margin-left": "auto", "margin-right": "5px" },
                    icon: "lock",
                    size: "xsmall"
                  })
                ]),
                _: 1
              }, 8, ["content"])) : createCommentVNode("", true)
            ]),
            [unref(createCredentialsAppendSlotName)]: withCtx(() => [
              unref(sourceControlStore).preferences.branchReadOnly ? (openBlock(), createBlock(unref(N8nTooltip), {
                key: 0,
                placement: "right",
                content: unref(i18n).baseText("readOnlyEnv.cantAdd.credential")
              }, {
                default: withCtx(() => [
                  createVNode(unref(N8nIcon), {
                    style: { "margin-left": "auto", "margin-right": "5px" },
                    icon: "lock",
                    size: "xsmall"
                  })
                ]),
                _: 1
              }, 8, ["content"])) : createCommentVNode("", true)
            ]),
            [unref(createProjectAppendSlotName)]: withCtx(({ item }) => [
              unref(sourceControlStore).preferences.branchReadOnly ? (openBlock(), createBlock(unref(N8nTooltip), {
                key: 0,
                placement: "right",
                content: unref(i18n).baseText("readOnlyEnv.cantAdd.project")
              }, {
                default: withCtx(() => [
                  createVNode(unref(N8nIcon), {
                    style: { "margin-left": "auto", "margin-right": "5px" },
                    icon: "lock",
                    size: "xsmall"
                  })
                ]),
                _: 1
              }, 8, ["content"])) : item.disabled ? (openBlock(), createBlock(unref(N8nTooltip), {
                key: 1,
                placement: "right",
                content: unref(projectsLimitReachedMessage)
              }, {
                default: withCtx(() => [
                  !unref(hasPermissionToCreateProjects) ? (openBlock(), createBlock(unref(N8nIcon), {
                    key: 0,
                    style: { "margin-left": "auto", "margin-right": "5px" },
                    icon: "lock",
                    size: "xsmall"
                  })) : (openBlock(), createBlock(unref(N8nButton), {
                    key: 1,
                    size: "mini",
                    style: { "margin-left": "auto" },
                    type: "tertiary",
                    onClick: ($event) => unref(handleMenuSelect)(item.id)
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(upgradeLabel)), 1)
                    ]),
                    _: 2
                  }, 1032, ["onClick"]))
                ]),
                _: 2
              }, 1032, ["content"])) : createCommentVNode("", true)
            ]),
            default: withCtx(() => [
              createVNode(unref(_sfc_main$6), {
                icon: "plus",
                type: "secondary",
                outline: ""
              })
            ]),
            _: 2
          }, 1032, ["menu", "onSelect"])
        ], 2),
        createVNode(unref(N8nScrollArea), { "as-child": "" }, {
          default: withCtx(() => [
            createBaseVNode("div", {
              class: normalizeClass(_ctx.$style.scrollArea)
            }, [
              createVNode(ProjectNavigation, {
                collapsed: isCollapsed.value,
                "plan-name": unref(cloudPlanStore).currentPlanData?.displayName
              }, null, 8, ["collapsed", "plan-name"]),
              createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.bottomMenu)
              }, [
                fullyExpanded.value && !userIsTrialing.value ? (openBlock(), createBlock(BecomeTemplateCreatorCta, { key: 0 })) : createCommentVNode("", true),
                createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.bottomMenuItems)
                }, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(visibleMenuItems.value, (item) => {
                    return openBlock(), createElementBlock(Fragment, {
                      key: item.id
                    }, [
                      item.children ? (openBlock(), createBlock(unref(N8nPopoverReka), {
                        key: item.id,
                        side: "right",
                        align: "end",
                        "side-offset": 16
                      }, {
                        content: withCtx(() => [
                          createBaseVNode("div", {
                            class: normalizeClass(_ctx.$style.popover)
                          }, [
                            createVNode(unref(N8nText), {
                              class: normalizeClass(_ctx.$style.popoverTitle),
                              bold: "",
                              color: "foreground-xdark"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.label), 1)
                              ]),
                              _: 2
                            }, 1032, ["class"]),
                            (openBlock(true), createElementBlock(Fragment, null, renderList(item.children, (child) => {
                              return openBlock(), createElementBlock(Fragment, {
                                key: child.id
                              }, [
                                unref(isCustomMenuItem)(child) ? (openBlock(), createBlock(resolveDynamicComponent(child.component), mergeProps({
                                  key: 0,
                                  ref_for: true
                                }, child.props), null, 16)) : (openBlock(), createBlock(unref(N8nMenuItem), {
                                  key: 1,
                                  item: child,
                                  onClick: () => handleSelect(child.id)
                                }, null, 8, ["item", "onClick"]))
                              ], 64);
                            }), 128))
                          ], 2)
                        ]),
                        trigger: withCtx(() => [
                          createVNode(unref(N8nMenuItem), {
                            item,
                            compact: isCollapsed.value,
                            onClick: () => handleSelect(item.id)
                          }, null, 8, ["item", "compact", "onClick"])
                        ]),
                        _: 2
                      }, 1024)) : (openBlock(), createBlock(unref(N8nMenuItem), {
                        key: 1,
                        item,
                        compact: isCollapsed.value,
                        onClick: () => handleSelect(item.id)
                      }, null, 8, ["item", "compact", "onClick"]))
                    ], 64);
                  }), 128))
                ], 2)
              ], 2)
            ], 2)
          ]),
          _: 1
        }),
        createVNode(MainSidebarSourceControl, { "is-collapsed": isCollapsed.value }, null, 8, ["is-collapsed"]),
        showUserArea.value ? (openBlock(), createElementBlock("div", _hoisted_1, [
          createBaseVNode("div", {
            ref_key: "user",
            ref: user,
            class: normalizeClass(_ctx.$style.userArea)
          }, [
            createVNode(unref(N8nPopoverReka), {
              side: "right",
              align: "end",
              "side-offset": 16
            }, {
              content: withCtx(() => [
                createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.popover)
                }, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(userMenuItems.value, (action) => {
                    return openBlock(), createBlock(unref(N8nMenuItem), {
                      key: action.id,
                      item: action,
                      "data-test-id": `user-menu-item-${action.id}`,
                      onClick: () => onUserActionToggle(action.id)
                    }, null, 8, ["item", "data-test-id", "onClick"]);
                  }), 128))
                ], 2)
              ]),
              trigger: withCtx(() => [
                createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.userAreaInner)
                }, [
                  createBaseVNode("div", _hoisted_2, [
                    createBaseVNode("div", {
                      class: normalizeClass({ [_ctx.$style.avatar]: true, ["clickable"]: isCollapsed.value })
                    }, [
                      createVNode(unref(N8nAvatar), {
                        "first-name": unref(usersStore).currentUser?.firstName,
                        "last-name": unref(usersStore).currentUser?.lastName,
                        size: "small"
                      }, null, 8, ["first-name", "last-name"])
                    ], 2)
                  ]),
                  createBaseVNode("div", {
                    class: normalizeClass({
                      ["ml-2xs"]: true,
                      [_ctx.$style.userName]: true,
                      [_ctx.$style.expanded]: fullyExpanded.value
                    })
                  }, [
                    createVNode(unref(N8nText), {
                      size: "small",
                      color: "text-dark"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(usersStore).currentUser?.fullName), 1)
                      ]),
                      _: 1
                    })
                  ], 2),
                  createBaseVNode("div", {
                    "data-test-id": "user-menu",
                    class: normalizeClass({ [_ctx.$style.userActions]: true, [_ctx.$style.expanded]: fullyExpanded.value })
                  }, [
                    createVNode(unref(_sfc_main$6), {
                      icon: "ellipsis",
                      text: "",
                      square: "",
                      type: "tertiary"
                    })
                  ], 2)
                ], 2)
              ]),
              _: 1
            })
          ], 2)
        ])) : createCommentVNode("", true),
        createVNode(TemplateTooltip)
      ], 2);
    };
  }
});
const sideMenu = "_sideMenu_144ie_123";
const logo = "_logo_144ie_132";
const sideMenuCollapsed = "_sideMenuCollapsed_144ie_143";
const scrollArea = "_scrollArea_144ie_152";
const sideMenuCollapseButton = "_sideMenuCollapseButton_144ie_158";
const bottomMenu = "_bottomMenu_144ie_177";
const bottomMenuItems = "_bottomMenuItems_144ie_183";
const popover = "_popover_144ie_187";
const popoverTitle = "_popoverTitle_144ie_192";
const userArea = "_userArea_144ie_197";
const userName = "_userName_144ie_203";
const expanded = "_expanded_144ie_210";
const userActions = "_userActions_144ie_217";
const userAreaInner = "_userAreaInner_144ie_224";
const readOnlyEnvironmentIcon = "_readOnlyEnvironmentIcon_144ie_235";
const style0 = {
  sideMenu,
  logo,
  sideMenuCollapsed,
  scrollArea,
  sideMenuCollapseButton,
  bottomMenu,
  bottomMenuItems,
  popover,
  popoverTitle,
  userArea,
  userName,
  expanded,
  userActions,
  userAreaInner,
  readOnlyEnvironmentIcon
};
const cssModules = {
  "$style": style0
};
const MainSidebar = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);
export {
  MainSidebar as default
};
