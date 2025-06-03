import { d as defineComponent, R as useRoute, r as ref, q as computed, V as VIEWS, c as useI18n, X as watch, h as resolveComponent, e as createBlock, g as openBlock, i as createElementBlock, n as normalizeClass, x as renderSlot, j as createVNode, m as unref, gh as N8nActionToggle, w as withCtx, aT as _sfc_main$3, _ as _export_sfc, b as useRouter, a1 as useProjectsStore, a0 as useSourceControlStore, p as useSettingsStore, ab as ProjectTypes, a7 as getResourcePermissions, k as createBaseVNode, f as createCommentVNode, eQ as ProjectIcon, l as createTextVNode, t as toDisplayString, bh as N8nButton, b8 as mergeProps, aR as N8nTooltip } from "./index-BxcQLnKq.js";
import { u as useProjectPages } from "./useProjectPages-DaxT8gqv.js";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ProjectTabs",
  props: {
    showSettings: { type: Boolean, default: false },
    showExecutions: { type: Boolean, default: true },
    pageType: { default: "project" }
  },
  setup(__props) {
    const props = __props;
    const locale = useI18n();
    const route = useRoute();
    const selectedTab = ref("");
    const projectId = computed(() => {
      return Array.isArray(route?.params?.projectId) ? route.params.projectId[0] : route?.params?.projectId;
    });
    const getRouteConfigs = () => {
      if (projectId.value) {
        return {
          workflows: {
            name: VIEWS.PROJECTS_WORKFLOWS,
            params: { projectId: projectId.value }
          },
          credentials: {
            name: VIEWS.PROJECTS_CREDENTIALS,
            params: { projectId: projectId.value }
          },
          executions: {
            name: VIEWS.PROJECTS_EXECUTIONS,
            params: { projectId: projectId.value }
          }
        };
      }
      if (props.pageType === "shared") {
        return {
          workflows: { name: VIEWS.SHARED_WORKFLOWS },
          credentials: { name: VIEWS.SHARED_CREDENTIALS },
          executions: { name: VIEWS.NOT_FOUND }
        };
      }
      return {
        workflows: { name: VIEWS.WORKFLOWS },
        credentials: { name: VIEWS.CREDENTIALS },
        executions: { name: VIEWS.EXECUTIONS }
      };
    };
    const createTab = (label, routeKey, routes) => {
      return {
        label: locale.baseText(label),
        value: routes[routeKey].name,
        to: routes[routeKey]
      };
    };
    const options = computed(() => {
      const routes = getRouteConfigs();
      const tabs = [
        createTab("mainSidebar.workflows", "workflows", routes),
        createTab("mainSidebar.credentials", "credentials", routes)
      ];
      if (props.showExecutions) {
        tabs.push(createTab("mainSidebar.executions", "executions", routes));
      }
      if (props.showSettings) {
        tabs.push({
          label: locale.baseText("projects.settings"),
          value: VIEWS.PROJECT_SETTINGS,
          to: { name: VIEWS.PROJECT_SETTINGS, params: { projectId: projectId.value } }
        });
      }
      return tabs;
    });
    watch(
      () => route?.name,
      () => {
        selectedTab.value = route.name === VIEWS.PROJECTS_FOLDERS ? VIEWS.PROJECTS_WORKFLOWS : route.name;
      },
      { immediate: true }
    );
    return (_ctx, _cache) => {
      const _component_N8nTabs = resolveComponent("N8nTabs");
      return openBlock(), createBlock(_component_N8nTabs, {
        modelValue: selectedTab.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => selectedTab.value = $event),
        options: options.value,
        "data-test-id": "project-tabs"
      }, null, 8, ["modelValue", "options"]);
    };
  }
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ProjectCreateResource",
  props: {
    actions: {},
    disabled: { type: Boolean },
    type: {}
  },
  emits: ["action"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const emit = __emit;
    const actionToggleRef = ref(null);
    __expose({
      openActionToggle: (isOpen) => actionToggleRef.value?.openActionToggle(isOpen)
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([_ctx.$style.buttonGroup])
      }, [
        renderSlot(_ctx.$slots, "default"),
        createVNode(unref(N8nActionToggle), {
          ref_key: "actionToggleRef",
          ref: actionToggleRef,
          "data-test-id": "add-resource",
          actions: _ctx.actions,
          placement: "bottom-end",
          teleported: false,
          onAction: _cache[0] || (_cache[0] = ($event) => emit("action", $event))
        }, {
          default: withCtx(() => [
            createVNode(unref(_sfc_main$3), {
              disabled: _ctx.disabled,
              class: normalizeClass([_ctx.$style.buttonGroupDropdown]),
              icon: "angle-down",
              type: _ctx.type ?? "primary"
            }, null, 8, ["disabled", "class", "type"])
          ]),
          _: 1
        }, 8, ["actions"])
      ], 2);
    };
  }
});
const buttonGroup = "_buttonGroup_aulto_123";
const buttonGroupDropdown = "_buttonGroupDropdown_aulto_137";
const style0$1 = {
  buttonGroup,
  buttonGroupDropdown
};
const cssModules$1 = {
  "$style": style0$1
};
const ProjectCreateResource = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__cssModules", cssModules$1]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProjectHeader",
  emits: ["createFolder"],
  setup(__props, { emit: __emit }) {
    const route = useRoute();
    const router = useRouter();
    const i18n = useI18n();
    const projectsStore = useProjectsStore();
    const sourceControlStore = useSourceControlStore();
    const settingsStore = useSettingsStore();
    const projectPages = useProjectPages();
    const emit = __emit;
    const headerIcon = computed(() => {
      if (projectsStore.currentProject?.type === ProjectTypes.Personal) {
        return { type: "icon", value: "user" };
      } else if (projectsStore.currentProject?.name) {
        return projectsStore.currentProject.icon ?? { type: "icon", value: "layer-group" };
      } else {
        return { type: "icon", value: "home" };
      }
    });
    const projectName = computed(() => {
      if (!projectsStore.currentProject) {
        if (projectPages.isOverviewSubPage) {
          return i18n.baseText("projects.menu.overview");
        } else if (projectPages.isSharedSubPage) {
          return i18n.baseText("projects.header.shared.title");
        }
        return null;
      } else if (projectsStore.currentProject.type === ProjectTypes.Personal) {
        return i18n.baseText("projects.menu.personal");
      } else {
        return projectsStore.currentProject.name;
      }
    });
    const projectPermissions = computed(
      () => getResourcePermissions(projectsStore.currentProject?.scopes).project
    );
    const showSettings = computed(
      () => !!route?.params?.projectId && !!projectPermissions.value.update && projectsStore.currentProject?.type === ProjectTypes.Team
    );
    const homeProject = computed(() => projectsStore.currentProject ?? projectsStore.personalProject);
    const isPersonalProject = computed(() => {
      return homeProject.value?.type === ProjectTypes.Personal;
    });
    const showFolders = computed(() => {
      return settingsStore.isFoldersFeatureEnabled && [VIEWS.PROJECTS_WORKFLOWS, VIEWS.PROJECTS_FOLDERS].includes(route.name);
    });
    const ACTION_TYPES = {
      WORKFLOW: "workflow",
      CREDENTIAL: "credential",
      FOLDER: "folder"
    };
    const createWorkflowButton = computed(() => ({
      value: ACTION_TYPES.WORKFLOW,
      label: i18n.baseText("projects.header.create.workflow"),
      icon: sourceControlStore.preferences.branchReadOnly ? "lock" : void 0,
      size: "mini",
      disabled: sourceControlStore.preferences.branchReadOnly || !getResourcePermissions(homeProject.value?.scopes).workflow.create
    }));
    const menu = computed(() => {
      const items = [
        {
          value: ACTION_TYPES.CREDENTIAL,
          label: i18n.baseText("projects.header.create.credential"),
          disabled: sourceControlStore.preferences.branchReadOnly || !getResourcePermissions(homeProject.value?.scopes).credential.create
        }
      ];
      if (showFolders.value) {
        items.push({
          value: ACTION_TYPES.FOLDER,
          label: i18n.baseText("projects.header.create.folder"),
          disabled: sourceControlStore.preferences.branchReadOnly || !getResourcePermissions(homeProject.value?.scopes).folder.create
        });
      }
      return items;
    });
    const showProjectIcon = computed(() => {
      return !projectPages.isOverviewSubPage && !projectPages.isSharedSubPage && !isPersonalProject.value;
    });
    const actions2 = {
      [ACTION_TYPES.WORKFLOW]: (projectId) => {
        void router.push({
          name: VIEWS.NEW_WORKFLOW,
          query: {
            projectId,
            parentFolderId: route.params.folderId
          }
        });
      },
      [ACTION_TYPES.CREDENTIAL]: (projectId) => {
        void router.push({
          name: VIEWS.PROJECTS_CREDENTIALS,
          params: {
            projectId,
            credentialId: "create"
          }
        });
      },
      [ACTION_TYPES.FOLDER]: async () => {
        emit("createFolder");
      }
    };
    const pageType = computed(() => {
      if (projectPages.isOverviewSubPage) {
        return "overview";
      } else if (projectPages.isSharedSubPage) {
        return "shared";
      } else {
        return "project";
      }
    });
    const subtitle = computed(() => {
      if (projectPages.isOverviewSubPage) {
        return i18n.baseText("projects.header.overview.subtitle");
      } else if (projectPages.isSharedSubPage) {
        return i18n.baseText("projects.header.shared.subtitle");
      } else if (isPersonalProject.value) {
        return i18n.baseText("projects.header.personal.subtitle");
      }
      return null;
    });
    const onSelect = (action) => {
      const executableAction = actions2[action];
      if (!homeProject.value) {
        return;
      }
      executableAction(homeProject.value.id);
    };
    return (_ctx, _cache) => {
      const _component_N8nHeading = resolveComponent("N8nHeading");
      const _component_N8nText = resolveComponent("N8nText");
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.projectHeader)
        }, [
          createBaseVNode("div", {
            class: normalizeClass(_ctx.$style.projectDetails)
          }, [
            showProjectIcon.value ? (openBlock(), createBlock(ProjectIcon, {
              key: 0,
              icon: headerIcon.value,
              "border-less": true,
              size: "medium"
            }, null, 8, ["icon"])) : createCommentVNode("", true),
            createBaseVNode("div", {
              class: normalizeClass(_ctx.$style.headerActions)
            }, [
              projectName.value ? (openBlock(), createBlock(_component_N8nHeading, {
                key: 0,
                bold: "",
                tag: "h2",
                size: "xlarge",
                "data-test-id": "project-name"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(projectName.value), 1)
                ]),
                _: 1
              })) : createCommentVNode("", true),
              createVNode(_component_N8nText, { color: "text-light" }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "subtitle", {}, () => [
                    subtitle.value ? (openBlock(), createBlock(_component_N8nText, {
                      key: 0,
                      color: "text-light",
                      "data-test-id": "project-subtitle"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(subtitle.value), 1)
                      ]),
                      _: 1
                    })) : createCommentVNode("", true)
                  ])
                ]),
                _: 3
              })
            ], 2)
          ], 2),
          unref(route).name !== unref(VIEWS).PROJECT_SETTINGS ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass([_ctx.$style.headerActions])
          }, [
            createVNode(unref(N8nTooltip), {
              disabled: !unref(sourceControlStore).preferences.branchReadOnly,
              content: unref(i18n).baseText("readOnlyEnv.cantAdd.any")
            }, {
              default: withCtx(() => [
                createVNode(ProjectCreateResource, {
                  "data-test-id": "add-resource-buttons",
                  actions: menu.value,
                  disabled: unref(sourceControlStore).preferences.branchReadOnly,
                  onAction: onSelect
                }, {
                  default: withCtx(() => [
                    createVNode(unref(N8nButton), mergeProps({ "data-test-id": "add-resource-workflow" }, createWorkflowButton.value, {
                      onClick: _cache[0] || (_cache[0] = ($event) => onSelect(ACTION_TYPES.WORKFLOW))
                    }), null, 16)
                  ]),
                  _: 1
                }, 8, ["actions", "disabled"])
              ]),
              _: 1
            }, 8, ["disabled", "content"])
          ], 2)) : createCommentVNode("", true)
        ], 2),
        renderSlot(_ctx.$slots, "default"),
        createBaseVNode("div", {
          class: normalizeClass(_ctx.$style.actions)
        }, [
          createVNode(_sfc_main$2, {
            "page-type": pageType.value,
            "show-executions": !unref(projectPages).isSharedSubPage,
            "show-settings": showSettings.value
          }, null, 8, ["page-type", "show-executions", "show-settings"])
        ], 2)
      ]);
    };
  }
});
const projectHeader = "_projectHeader_1cqsm_123";
const projectDescription = "_projectDescription_1cqsm_124";
const projectDetails = "_projectDetails_1cqsm_132";
const actions = "_actions_1cqsm_137";
const headerActions = "_headerActions_1cqsm_147";
const style0 = {
  projectHeader,
  projectDescription,
  projectDetails,
  actions,
  headerActions
};
const cssModules = {
  "$style": style0
};
const ProjectHeader = /* @__PURE__ */ _export_sfc(_sfc_main, [["__cssModules", cssModules]]);
export {
  ProjectHeader as P
};
