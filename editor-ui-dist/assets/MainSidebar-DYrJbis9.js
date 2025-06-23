import { aL as get, d as defineComponent, aM as useLoadingService, J as useUIStore, a3 as useSourceControlStore, a4 as useProjectsStore, a as useToast, r as ref, x as computed, ad as hasPermission, ab as getResourcePermissions, h as resolveComponent, i as createElementBlock, f as createCommentVNode, g as openBlock, D as normalizeStyle, n as normalizeClass, m as unref, k as createBaseVNode, j as createVNode, l as createTextVNode, t as toDisplayString, w as withCtx, c as useI18n, E as createEventBus, ar as SOURCE_CONTROL_PUSH_MODAL_KEY, aN as notifyUserAboutPullWorkFolderOutcome, aO as sourceControlEventBus, aP as SOURCE_CONTROL_PULL_MODAL_KEY, _ as _export_sfc, R as defineStore, aQ as useCloudPlanStore, a1 as useRootStore, aR as useStorage, aS as DateTime, X as STORES, am as useTelemetry, v as useSettingsStore, b as useRouter, aT as sortByProperty, V as VIEWS, aa as usePageRedirectionHelper, e as createBlock, F as Fragment, G as renderList, aU as useDebugInfo, aV as useTemplatesStore, u as useUsersStore, aW as useVersionsStore, T as useWorkflowsStore, I as useDebounce, U as useRoute, o as onMounted, aX as useExternalHooks, B as nextTick, z as onBeforeUnmount, aY as onClickOutside, aZ as N8nTooltip, a_ as N8nLink, a$ as _sfc_main$5, b0 as N8nNavigationDropdown, b1 as createSlots, b2 as VERSIONS_MODAL_KEY, b3 as ABOUT_MODAL_KEY } from "./index-Y0sphpVt.js";
import { L as Logo } from "./Logo-BLWB3gvb.js";
async function getBecomeCreatorCta(context) {
  const response = await get(context.baseUrl, "/cta/become-creator");
  return response;
}
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "MainSidebarSourceControl",
  props: {
    isCollapsed: { type: Boolean }
  },
  setup(__props) {
    const responseStatuses = {
      CONFLICT: 409
    };
    const loadingService = useLoadingService();
    const uiStore = useUIStore();
    const sourceControlStore = useSourceControlStore();
    const projectStore = useProjectsStore();
    const toast = useToast();
    const i18n = useI18n();
    const eventBus = createEventBus();
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
      loadingService.startLoading();
      loadingService.setLoadingText(i18n.baseText("settings.sourceControl.loading.checkingForChanges"));
      try {
        const status = await sourceControlStore.getAggregatedStatus();
        if (!status.length) {
          toast.showMessage({
            title: "No changes to commit",
            message: "Everything is up to date",
            type: "info"
          });
          return;
        }
        uiStore.openModalWithData({
          name: SOURCE_CONTROL_PUSH_MODAL_KEY,
          data: { eventBus, status }
        });
      } catch (error) {
        toast.showError(error, i18n.baseText("error"));
      } finally {
        loadingService.stopLoading();
        loadingService.setLoadingText(i18n.baseText("genericHelpers.loading"));
      }
    }
    async function pullWorkfolder() {
      loadingService.startLoading();
      loadingService.setLoadingText(i18n.baseText("settings.sourceControl.loading.pull"));
      try {
        const status = await sourceControlStore.pullWorkfolder(false);
        await notifyUserAboutPullWorkFolderOutcome(status, toast);
        sourceControlEventBus.emit("pull");
      } catch (error) {
        const errorResponse = error.response;
        if (errorResponse?.status === responseStatuses.CONFLICT) {
          uiStore.openModalWithData({
            name: SOURCE_CONTROL_PULL_MODAL_KEY,
            data: { eventBus, status: errorResponse.data.data }
          });
        } else {
          toast.showError(error, "Error");
        }
      } finally {
        loadingService.stopLoading();
        loadingService.setLoadingText(i18n.baseText("genericHelpers.loading"));
      }
    }
    return (_ctx, _cache) => {
      const _component_n8n_icon = resolveComponent("n8n-icon");
      const _component_n8n_button = resolveComponent("n8n-button");
      const _component_n8n_tooltip = resolveComponent("n8n-tooltip");
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
            createVNode(_component_n8n_icon, { icon: "code-branch" }),
            createTextVNode(" " + toDisplayString(currentBranch.value), 1)
          ], 2),
          createBaseVNode("div", {
            class: normalizeClass({ "pt-xs": !_ctx.isCollapsed })
          }, [
            createVNode(_component_n8n_tooltip, {
              disabled: !_ctx.isCollapsed && hasPullPermission.value,
              "show-after": tooltipOpenDelay.value,
              placement: _ctx.isCollapsed ? "right" : "top"
            }, {
              content: withCtx(() => [
                createBaseVNode("div", null, toDisplayString(!hasPullPermission.value ? unref(i18n).baseText("settings.sourceControl.button.pull.forbidden") : unref(i18n).baseText("settings.sourceControl.button.pull")), 1)
              ]),
              default: withCtx(() => [
                createVNode(_component_n8n_button, {
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
            createVNode(_component_n8n_tooltip, {
              disabled: !_ctx.isCollapsed && !unref(sourceControlStore).preferences.branchReadOnly && hasPushPermission.value,
              "show-after": tooltipOpenDelay.value,
              placement: _ctx.isCollapsed ? "right" : "top"
            }, {
              content: withCtx(() => [
                createBaseVNode("div", null, toDisplayString(unref(sourceControlStore).preferences.branchReadOnly || !hasPushPermission.value ? unref(i18n).baseText("settings.sourceControl.button.push.forbidden") : unref(i18n).baseText("settings.sourceControl.button.push")), 1)
              ]),
              default: withCtx(() => [
                createVNode(_component_n8n_button, {
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
const sync = "_sync_fv3ov_123";
const isConnected = "_isConnected_fv3ov_130";
const collapsed$1 = "_collapsed_fv3ov_134";
const branchName = "_branchName_fv3ov_144";
const connected = "_connected_fv3ov_154";
const style0$4 = {
  sync,
  isConnected,
  collapsed: collapsed$1,
  branchName,
  connected
};
const cssModules$4 = {
  "$style": style0$4
};
const __unplugin_components_3 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__cssModules", cssModules$4]]);
const notification = "_notification_1usal_130";
const style0$3 = {
  "gift-icon": "_gift-icon_1usal_123",
  notification
};
const _sfc_main$3 = {};
function _sfc_render(_ctx, _cache) {
  const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.$style["gift-icon"])
  }, [
    createVNode(_component_font_awesome_icon, { icon: "gift" }),
    createBaseVNode("div", {
      class: normalizeClass(_ctx.$style["notification"])
    }, _cache[0] || (_cache[0] = [
      createBaseVNode("div", null, null, -1)
    ]), 2)
  ], 2);
}
const cssModules$3 = {
  "$style": style0$3
};
const __unplugin_components_2 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render], ["__cssModules", cssModules$3]]);
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
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "BecomeTemplateCreatorCta",
  setup(__props) {
    const i18n = useI18n();
    const store = useBecomeTemplateCreatorStore();
    const telemetry = useTelemetry();
    const onClick = () => {
      telemetry.track("User clicked become creator CTA");
    };
    return (_ctx, _cache) => {
      const _component_n8n_icon = resolveComponent("n8n-icon");
      const _component_n8n_button = resolveComponent("n8n-button");
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
            createVNode(_component_n8n_icon, {
              icon: "times",
              size: "xsmall",
              title: unref(i18n).baseText("generic.close")
            }, null, 8, ["title"])
          ], 2)
        ], 2),
        createVNode(_component_n8n_button, {
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
const container = "_container_19by7_123";
const textAndCloseButton = "_textAndCloseButton_19by7_131";
const text = "_text_19by7_131";
const closeButton = "_closeButton_19by7_144";
const becomeCreatorButton = "_becomeCreatorButton_19by7_157";
const style0$2 = {
  container,
  textAndCloseButton,
  text,
  closeButton,
  becomeCreatorButton
};
const cssModules$2 = {
  "$style": style0$2
};
const __unplugin_components_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__cssModules", cssModules$2]]);
const useGlobalEntityCreation = () => {
  const CREATE_PROJECT_ID = "create-project";
  const WORKFLOWS_MENU_ID = "workflow";
  const CREDENTIALS_MENU_ID = "credential";
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
              icon: "layer-group",
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
              icon: "layer-group",
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
  const createProject = async () => {
    isCreatingProject.value = true;
    try {
      const newProject = await projectsStore.createProject({
        name: i18n.baseText("projects.settings.newProjectName"),
        icon: { type: "icon", value: "layer-group" }
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
      void createProject();
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
const _hoisted_1$1 = {
  key: 0,
  class: "mt-m mb-m"
};
const _hoisted_2 = {
  key: 3,
  class: "mb-m"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
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
    const isCreatingProject = computed(() => globalEntityCreation.isCreatingProject.value);
    const displayProjects = computed(() => globalEntityCreation.displayProjects.value);
    const isFoldersFeatureEnabled = computed(() => settingsStore.isFoldersFeatureEnabled);
    const home = computed(() => ({
      id: "home",
      label: locale.baseText("projects.menu.overview"),
      icon: "home",
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
      label: project.name,
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
    return (_ctx, _cache) => {
      const _component_N8nMenuItem = resolveComponent("N8nMenuItem");
      const _component_ElMenu = resolveComponent("ElMenu");
      const _component_N8nButton = resolveComponent("N8nButton");
      const _component_N8nTooltip = resolveComponent("N8nTooltip");
      const _component_N8nText = resolveComponent("N8nText");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(_ctx.$style.projects)
      }, [
        createVNode(_component_ElMenu, {
          collapse: props.collapsed,
          class: "home"
        }, {
          default: withCtx(() => [
            createVNode(_component_N8nMenuItem, {
              item: home.value,
              compact: props.collapsed,
              "active-tab": unref(projectsStore).projectNavActiveId,
              mode: "tabs",
              "data-test-id": "project-home-menu-item"
            }, null, 8, ["item", "compact", "active-tab"]),
            unref(projectsStore).isTeamProjectFeatureEnabled || isFoldersFeatureEnabled.value ? (openBlock(), createBlock(_component_N8nMenuItem, {
              key: 0,
              item: personalProject.value,
              compact: props.collapsed,
              "active-tab": unref(projectsStore).projectNavActiveId,
              mode: "tabs",
              "data-test-id": "project-personal-menu-item"
            }, null, 8, ["item", "compact", "active-tab"])) : createCommentVNode("", true),
            unref(projectsStore).isTeamProjectFeatureEnabled || isFoldersFeatureEnabled.value ? (openBlock(), createBlock(_component_N8nMenuItem, {
              key: 1,
              item: shared.value,
              compact: props.collapsed,
              "active-tab": unref(projectsStore).projectNavActiveId,
              mode: "tabs",
              "data-test-id": "project-shared-menu-item"
            }, null, 8, ["item", "compact", "active-tab"])) : createCommentVNode("", true)
          ]),
          _: 1
        }, 8, ["collapse"]),
        unref(projectsStore).isTeamProjectFeatureEnabled ? (openBlock(), createElementBlock("hr", _hoisted_1$1)) : createCommentVNode("", true),
        !props.collapsed && unref(projectsStore).isTeamProjectFeatureEnabled ? (openBlock(), createBlock(_component_N8nText, {
          key: 1,
          class: normalizeClass([_ctx.$style.projectsLabel]),
          tag: "h3",
          bold: ""
        }, {
          default: withCtx(() => [
            createBaseVNode("span", null, toDisplayString(unref(locale).baseText("projects.menu.title")), 1),
            createVNode(_component_N8nTooltip, {
              placement: "right",
              disabled: unref(projectsStore).hasPermissionToCreateProjects,
              content: unref(locale).baseText("projects.create.permissionDenied")
            }, {
              default: withCtx(() => [
                unref(projectsStore).canCreateProjects ? (openBlock(), createBlock(_component_N8nButton, {
                  key: 0,
                  icon: "plus",
                  text: "",
                  "data-test-id": "project-plus-button",
                  disabled: isCreatingProject.value || !unref(projectsStore).hasPermissionToCreateProjects,
                  class: normalizeClass(_ctx.$style.plusBtn),
                  onClick: unref(globalEntityCreation).createProject
                }, null, 8, ["disabled", "class", "onClick"])) : createCommentVNode("", true)
              ]),
              _: 1
            }, 8, ["disabled", "content"])
          ]),
          _: 1
        }, 8, ["class"])) : createCommentVNode("", true),
        unref(projectsStore).isTeamProjectFeatureEnabled || isFoldersFeatureEnabled.value ? (openBlock(), createBlock(_component_ElMenu, {
          key: 2,
          collapse: props.collapsed,
          class: normalizeClass(_ctx.$style.projectItems)
        }, {
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(displayProjects.value, (project) => {
              return openBlock(), createBlock(_component_N8nMenuItem, {
                key: project.id,
                class: normalizeClass({
                  [_ctx.$style.collapsed]: props.collapsed
                }),
                item: getProjectMenuItem(project),
                compact: props.collapsed,
                "active-tab": unref(projectsStore).projectNavActiveId,
                mode: "tabs",
                "data-test-id": "project-menu-item"
              }, null, 8, ["class", "item", "compact", "active-tab"]);
            }), 128))
          ]),
          _: 1
        }, 8, ["collapse", "class"])) : createCommentVNode("", true),
        createVNode(_component_N8nTooltip, {
          placement: "right",
          disabled: unref(projectsStore).hasPermissionToCreateProjects,
          content: unref(locale).baseText("projects.create.permissionDenied")
        }, {
          default: withCtx(() => [
            showAddFirstProject.value ? (openBlock(), createBlock(_component_N8nButton, {
              key: 0,
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
              onClick: unref(globalEntityCreation).createProject
            }, {
              default: withCtx(() => [
                createBaseVNode("span", null, toDisplayString(unref(locale).baseText("projects.menu.addFirstProject")), 1)
              ]),
              _: 1
            }, 8, ["class", "disabled", "onClick"])) : createCommentVNode("", true)
          ]),
          _: 1
        }, 8, ["disabled", "content"]),
        unref(projectsStore).isTeamProjectFeatureEnabled ? (openBlock(), createElementBlock("hr", _hoisted_2)) : createCommentVNode("", true)
      ], 2);
    };
  }
});
const projects = "_projects_jcrfa_123";
const plusBtn = "_plusBtn_jcrfa_131";
const projectItems = "_projectItems_jcrfa_135";
const upgradeLink = "_upgradeLink_jcrfa_141";
const collapsed = "_collapsed_jcrfa_146";
const projectsLabel = "_projectsLabel_jcrfa_150";
const addFirstProjectBtn = "_addFirstProjectBtn_jcrfa_173";
const style0$1 = {
  projects,
  plusBtn,
  projectItems,
  upgradeLink,
  collapsed,
  projectsLabel,
  addFirstProjectBtn
};
const cssModules$1 = {
  "$style": style0$1
};
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__cssModules", cssModules$1], ["__scopeId", "data-v-7c9247d0"]]);
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
const _hoisted_1 = {
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
    const { callDebounced } = useDebounce();
    const externalHooks = useExternalHooks();
    const i18n = useI18n();
    useRoute();
    const router = useRouter();
    const telemetry = useTelemetry();
    const pageRedirectionHelper = usePageRedirectionHelper();
    const { getReportingURL } = useBugReporting();
    const user = ref(null);
    const basePath = ref("");
    const fullyExpanded = ref(false);
    const userMenuItems = ref([
      {
        id: "settings",
        label: i18n.baseText("settings")
      },
      {
        id: "logout",
        label: i18n.baseText("auth.signout")
      }
    ]);
    const mainMenuItems = computed(() => [
      {
        id: "cloud-admin",
        position: "bottom",
        label: "Admin Panel",
        icon: "cloud",
        available: settingsStore.isCloudDeployment && hasPermission(["instanceOwner"])
      },
      {
        // Link to in-app templates, available if custom templates are enabled
        id: "templates",
        icon: "box-open",
        label: i18n.baseText("mainSidebar.templates"),
        position: "bottom",
        available: settingsStore.isTemplatesEnabled && templatesStore.hasCustomTemplatesHost,
        route: { to: { name: VIEWS.TEMPLATES } }
      },
      {
        // Link to website templates, available if custom templates are not enabled
        id: "templates",
        icon: "box-open",
        label: i18n.baseText("mainSidebar.templates"),
        position: "bottom",
        available: settingsStore.isTemplatesEnabled && !templatesStore.hasCustomTemplatesHost,
        link: {
          href: templatesStore.websiteTemplateRepositoryURL,
          target: "_blank"
        }
      },
      {
        id: "variables",
        icon: "variable",
        label: i18n.baseText("mainSidebar.variables"),
        customIconSize: "medium",
        position: "bottom",
        route: { to: { name: VIEWS.VARIABLES } }
      },
      {
        id: "insights",
        icon: "chart-bar",
        label: "Insights",
        customIconSize: "medium",
        position: "bottom",
        route: { to: { name: VIEWS.INSIGHTS } },
        available: settingsStore.settings.insights.enabled && hasPermission(["rbac"], { rbac: { scope: "insights:list" } })
      },
      {
        id: "help",
        icon: "question",
        label: i18n.baseText("mainSidebar.help"),
        position: "bottom",
        children: [
          {
            id: "quickstart",
            icon: "video",
            label: i18n.baseText("mainSidebar.helpMenuItems.quickstart"),
            link: {
              href: "https://www.youtube.com/watch?v=1MwSoB0gnM4",
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
      }
    ]);
    const createBtn = ref();
    const isCollapsed = computed(() => uiStore.sidebarMenuCollapsed);
    const hasVersionUpdates = computed(
      () => settingsStore.settings.releaseChannel === "stable" && versionsStore.hasVersionUpdates
    );
    const nextVersions = computed(() => versionsStore.nextVersions);
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
    const trackTemplatesClick = () => {
      telemetry.track("User clicked on templates", {
        role: usersStore.currentUserCloudInfo?.role,
        active_workflow_count: workflowsStore.activeWorkflows.length
      });
    };
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
    const openUpdatesPanel = () => {
      uiStore.openModal(VERSIONS_MODAL_KEY);
    };
    const handleSelect = (key) => {
      switch (key) {
        case "templates":
          if (settingsStore.isTemplatesEnabled && !templatesStore.hasCustomTemplatesHost) {
            trackTemplatesClick();
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
      }
    };
    function onResize() {
      void callDebounced(onResizeEnd, { debounceTime: 250 });
    }
    async function onResizeEnd() {
      if (window.outerWidth < 900) {
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
      const _component_N8nIcon = resolveComponent("N8nIcon");
      const _component_i18n_t = resolveComponent("i18n-t");
      const _component_N8nButton = resolveComponent("N8nButton");
      const _component_ProjectNavigation = __unplugin_components_0;
      const _component_BecomeTemplateCreatorCta = __unplugin_components_1;
      const _component_GiftNotificationIcon = __unplugin_components_2;
      const _component_N8nText = resolveComponent("N8nText");
      const _component_MainSidebarSourceControl = __unplugin_components_3;
      const _component_N8nAvatar = resolveComponent("N8nAvatar");
      const _component_ElDropdownItem = resolveComponent("ElDropdownItem");
      const _component_ElDropdownMenu = resolveComponent("ElDropdownMenu");
      const _component_ElDropdown = resolveComponent("ElDropdown");
      const _component_N8nActionDropdown = resolveComponent("N8nActionDropdown");
      const _component_N8nMenu = resolveComponent("N8nMenu");
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
          isCollapsed.value ? (openBlock(), createBlock(_component_N8nIcon, {
            key: 0,
            icon: "chevron-right",
            size: "xsmall",
            class: "ml-5xs"
          })) : (openBlock(), createBlock(_component_N8nIcon, {
            key: 1,
            icon: "chevron-left",
            size: "xsmall",
            class: "mr-5xs"
          }))
        ], 2),
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.logo)
        }, [
          createVNode(Logo, {
            location: "sidebar",
            collapsed: isCollapsed.value,
            "release-channel": unref(settingsStore).settings.releaseChannel
          }, {
            default: withCtx(() => [
              unref(sourceControlStore).preferences.branchReadOnly && !isCollapsed.value ? (openBlock(), createBlock(unref(N8nTooltip), {
                key: 0,
                placement: "bottom"
              }, {
                content: withCtx(() => [
                  createVNode(_component_i18n_t, { keypath: "readOnlyEnv.tooltip" }, {
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
                  createVNode(_component_N8nIcon, {
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
                  createVNode(_component_N8nIcon, {
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
                  createVNode(_component_N8nIcon, {
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
                  createVNode(_component_N8nIcon, {
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
                  !unref(hasPermissionToCreateProjects) ? (openBlock(), createBlock(_component_N8nIcon, {
                    key: 0,
                    style: { "margin-left": "auto", "margin-right": "5px" },
                    icon: "lock",
                    size: "xsmall"
                  })) : (openBlock(), createBlock(_component_N8nButton, {
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
              createVNode(unref(_sfc_main$5), {
                icon: "plus",
                type: "secondary",
                outline: ""
              })
            ]),
            _: 2
          }, 1032, ["menu", "onSelect"])
        ], 2),
        createVNode(_component_N8nMenu, {
          items: mainMenuItems.value,
          collapsed: isCollapsed.value,
          onSelect: handleSelect
        }, createSlots({
          header: withCtx(() => [
            createVNode(_component_ProjectNavigation, {
              collapsed: isCollapsed.value,
              "plan-name": unref(cloudPlanStore).currentPlanData?.displayName
            }, null, 8, ["collapsed", "plan-name"])
          ]),
          beforeLowerMenu: withCtx(() => [
            fullyExpanded.value && !userIsTrialing.value ? (openBlock(), createBlock(_component_BecomeTemplateCreatorCta, { key: 0 })) : createCommentVNode("", true)
          ]),
          menuSuffix: withCtx(() => [
            createBaseVNode("div", null, [
              hasVersionUpdates.value ? (openBlock(), createElementBlock("div", {
                key: 0,
                "data-test-id": "version-updates-panel-button",
                class: normalizeClass(_ctx.$style.updates),
                onClick: openUpdatesPanel
              }, [
                createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.giftContainer)
                }, [
                  createVNode(_component_GiftNotificationIcon)
                ], 2),
                createVNode(_component_N8nText, {
                  class: normalizeClass({ ["ml-xs"]: true, [_ctx.$style.expanded]: fullyExpanded.value }),
                  color: "text-base"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(nextVersions.value.length > 99 ? "99+" : nextVersions.value.length) + " update" + toDisplayString(nextVersions.value.length > 1 ? "s" : ""), 1)
                  ]),
                  _: 1
                }, 8, ["class"])
              ], 2)) : createCommentVNode("", true),
              createVNode(_component_MainSidebarSourceControl, { "is-collapsed": isCollapsed.value }, null, 8, ["is-collapsed"])
            ])
          ]),
          _: 2
        }, [
          showUserArea.value ? {
            name: "footer",
            fn: withCtx(() => [
              createBaseVNode("div", {
                ref_key: "user",
                ref: user,
                class: normalizeClass(_ctx.$style.userArea)
              }, [
                createBaseVNode("div", _hoisted_1, [
                  createVNode(_component_ElDropdown, {
                    placement: "right-end",
                    trigger: "click",
                    onCommand: onUserActionToggle
                  }, createSlots({
                    default: withCtx(() => [
                      createBaseVNode("div", {
                        class: normalizeClass({ [_ctx.$style.avatar]: true, ["clickable"]: isCollapsed.value })
                      }, [
                        createVNode(_component_N8nAvatar, {
                          "first-name": unref(usersStore).currentUser?.firstName,
                          "last-name": unref(usersStore).currentUser?.lastName,
                          size: "small"
                        }, null, 8, ["first-name", "last-name"])
                      ], 2)
                    ]),
                    _: 2
                  }, [
                    isCollapsed.value ? {
                      name: "dropdown",
                      fn: withCtx(() => [
                        createVNode(_component_ElDropdownMenu, null, {
                          default: withCtx(() => [
                            createVNode(_component_ElDropdownItem, { command: "settings" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(i18n).baseText("settings")), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(_component_ElDropdownItem, { command: "logout" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(unref(i18n).baseText("auth.signout")), 1)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      key: "0"
                    } : void 0
                  ]), 1024)
                ]),
                createBaseVNode("div", {
                  class: normalizeClass({ ["ml-2xs"]: true, [_ctx.$style.userName]: true, [_ctx.$style.expanded]: fullyExpanded.value })
                }, [
                  createVNode(_component_N8nText, {
                    size: "small",
                    bold: true,
                    color: "text-dark"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(usersStore).currentUser?.fullName), 1)
                    ]),
                    _: 1
                  })
                ], 2),
                createBaseVNode("div", {
                  class: normalizeClass({ [_ctx.$style.userActions]: true, [_ctx.$style.expanded]: fullyExpanded.value })
                }, [
                  createVNode(_component_N8nActionDropdown, {
                    items: userMenuItems.value,
                    placement: "top-start",
                    "data-test-id": "user-menu",
                    onSelect: onUserActionToggle
                  }, null, 8, ["items"])
                ], 2)
              ], 2)
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["items", "collapsed"])
      ], 2);
    };
  }
});
const sideMenu = "_sideMenu_1w9ys_123";
const logo = "_logo_1w9ys_133";
const sideMenuCollapsed = "_sideMenuCollapsed_1w9ys_144";
const sideMenuCollapseButton = "_sideMenuCollapseButton_1w9ys_153";
const updates = "_updates_1w9ys_172";
const expanded = "_expanded_1w9ys_185";
const userArea = "_userArea_1w9ys_192";
const userName = "_userName_1w9ys_199";
const userActions = "_userActions_1w9ys_213";
const readOnlyEnvironmentIcon = "_readOnlyEnvironmentIcon_1w9ys_225";
const style0 = {
  sideMenu,
  logo,
  sideMenuCollapsed,
  sideMenuCollapseButton,
  updates,
  expanded,
  userArea,
  userName,
  userActions,
  readOnlyEnvironmentIcon
};
const cssModules = {
  "$style": style0
};
const MainSidebar = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);
export {
  MainSidebar as default
};
