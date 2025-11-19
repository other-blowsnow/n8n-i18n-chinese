;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-CVC6fg6H.js", "./src-legacy-D3-Bo0sy.js", "./truncate-legacy-Bk9bFklR.js", "./useTelemetry-legacy-BdQlQKwu.js", "./useToast-legacy-D8KBGcJW.js", "./constants-legacy-B0GcWb62.js", "./cloudPlan.store-legacy-LWdjrdTo.js", "./usePageRedirectionHelper-legacy-D76LkYaE.js", "./sortByProperty-legacy-CgPLoqtk.js"], function (_export, _context) {
    "use strict";

    var computed, ref, useI18n, updatedIconSet, useDeviceSupport, useRouter, useSettingsStore, useSourceControlStore, useProjectsStore, useRootStore, useToast, getResourcePermissions, VIEWS, useCloudPlanStore, usePageRedirectionHelper, sortByProperty, isIconName, isProjectIcon, useGlobalEntityCreation, EXTERNAL_LINKS, BASE_FORUM_URL, REPORT_TEMPLATE;
    //#region src/app/composables/useDebugInfo.ts
    function useDebugInfo() {
      const settingsStore = useSettingsStore();
      const rootStore = useRootStore();
      const {
        isTouchDevice,
        userAgent
      } = useDeviceSupport();
      const coreInfo = skipSensitive => {
        const info = {
          n8nVersion: rootStore.versionCli,
          platform: settingsStore.isDocker && settingsStore.deploymentType === "cloud" ? "docker (cloud)" : settingsStore.isDocker ? "docker (self-hosted)" : "npm",
          nodeJsVersion: settingsStore.nodeJsVersion,
          nodeEnv: settingsStore.nodeEnv,
          database: settingsStore.databaseType === "postgresdb" ? "postgres" : settingsStore.databaseType === "mysqldb" ? "mysql" : settingsStore.databaseType,
          executionMode: settingsStore.isQueueModeEnabled ? settingsStore.isMultiMain ? "scaling (multi-main)" : "scaling (single-main)" : "regular",
          concurrency: settingsStore.settings.concurrency,
          license: settingsStore.isCommunityPlan || !settingsStore.settings.license ? "community" : settingsStore.settings.license.environment === "production" ? "enterprise (production)" : "enterprise (sandbox)"
        };
        if (!skipSensitive) return {
          ...info,
          consumerId: !skipSensitive ? settingsStore.consumerId : void 0
        };
        return info;
      };
      const storageInfo = () => {
        return {
          success: settingsStore.saveDataSuccessExecution,
          error: settingsStore.saveDataErrorExecution,
          progress: settingsStore.saveDataProgressExecution,
          manual: settingsStore.saveManualExecutions,
          binaryMode: settingsStore.binaryDataMode === "default" ? "memory" : settingsStore.binaryDataMode
        };
      };
      const pruningInfo = () => {
        if (!settingsStore.pruning?.isEnabled) return {
          enabled: false
        };
        return {
          enabled: true,
          maxAge: `${settingsStore.pruning?.maxAge} hours`,
          maxCount: `${settingsStore.pruning?.maxCount} executions`
        };
      };
      const securityInfo = () => {
        const info = {};
        if (!settingsStore.security.blockFileAccessToN8nFiles) info.blockFileAccessToN8nFiles = false;
        if (!settingsStore.security.secureCookie) info.secureCookie = false;
        if (Object.keys(info).length === 0) return;
        return info;
      };
      const client = () => {
        return {
          userAgent,
          isTouchDevice
        };
      };
      const gatherDebugInfo = skipSensitive => {
        const debugInfo = {
          core: coreInfo(skipSensitive),
          storage: storageInfo(),
          pruning: pruningInfo(),
          client: client()
        };
        const security = securityInfo();
        if (security) debugInfo.security = security;
        return debugInfo;
      };
      const toMarkdown = (debugInfo, {
        secondaryHeader
      }) => {
        const extraLevel = secondaryHeader ? "#" : "";
        let markdown = `${extraLevel}# Debug info\n\n`;
        for (const sectionKey in debugInfo) {
          markdown += `${extraLevel}## ${sectionKey}\n\n`;
          const section = debugInfo[sectionKey];
          if (!section) continue;
          for (const itemKey in section) {
            const itemValue = section[itemKey];
            markdown += `- ${itemKey}: ${itemValue}\n`;
          }
          markdown += "\n";
        }
        return markdown;
      };
      const appendTimestamp = markdown => {
        return `${markdown}Generated at: ${(/* @__PURE__ */new Date()).toISOString()}`;
      };
      const generateDebugInfo = ({
        skipSensitive,
        secondaryHeader
      } = {}) => {
        return appendTimestamp(toMarkdown(gatherDebugInfo(skipSensitive), {
          secondaryHeader
        }));
      };
      return {
        generateDebugInfo
      };
    }

    //#endregion
    //#region src/app/composables/useGlobalEntityCreation.ts

    function useBugReporting() {
      const debugInfo = useDebugInfo();
      const getReportingURL = () => {
        const url = new URL(BASE_FORUM_URL);
        const report = `${REPORT_TEMPLATE}\n${debugInfo.generateDebugInfo({
          skipSensitive: true,
          secondaryHeader: true
        })}}`;
        url.searchParams.append("body", report);
        return url.toString();
      };
      return {
        getReportingURL
      };
    }

    //#endregion
    _export({
      i: useDebugInfo,
      t: useBugReporting
    });
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {
        updatedIconSet = _srcLegacy007Js.Bn;
        useDeviceSupport = _srcLegacy007Js.rt;
      }, function (_truncateLegacy00hJs) {
        useRouter = _truncateLegacy00hJs.b;
      }, function (_useTelemetryLegacy00FJs) {
        useSettingsStore = _useTelemetryLegacy00FJs.Bo;
        useSourceControlStore = _useTelemetryLegacy00FJs.Dn;
        useProjectsStore = _useTelemetryLegacy00FJs.En;
        useRootStore = _useTelemetryLegacy00FJs.Qs;
      }, function (_useToastLegacy00HJs) {
        useToast = _useToastLegacy00HJs.t;
      }, function (_constantsLegacy00NJs) {
        getResourcePermissions = _constantsLegacy00NJs._r;
        VIEWS = _constantsLegacy00NJs.mo;
      }, function (_cloudPlanStoreLegacy013Js) {
        useCloudPlanStore = _cloudPlanStoreLegacy013Js.t;
      }, function (_usePageRedirectionHelperLegacy01DJs) {
        usePageRedirectionHelper = _usePageRedirectionHelperLegacy01DJs.t;
      }, function (_sortByPropertyLegacy02RJs) {
        sortByProperty = _sortByPropertyLegacy02RJs.t;
      }],
      execute: function () {
        isIconName = icon => typeof icon === "string" && Object.keys(updatedIconSet).includes(icon);
        isProjectIcon = icon => isIconName(icon) || typeof icon === "object" && icon !== null && "value" in icon && typeof icon.value === "string" && "type" in icon && (icon.type === "emoji" || icon.type === "icon" && isIconName(icon.value));
        _export("r", useGlobalEntityCreation = () => {
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
          const displayProjects = computed(() => sortByProperty("name", projectsStore.myProjects.filter(p => p.type === "team")));
          const disabledWorkflow = (scopes = []) => sourceControlStore.preferences.branchReadOnly || !getResourcePermissions(scopes).workflow.create;
          const disabledCredential = (scopes = []) => sourceControlStore.preferences.branchReadOnly || !getResourcePermissions(scopes).credential.create;
          const menu = computed(() => {
            if (!projectsStore.isTeamProjectFeatureEnabled) return [{
              id: "workflow",
              title: "Workflow",
              route: {
                name: VIEWS.NEW_WORKFLOW,
                query: {
                  projectId: projectsStore.personalProject?.id
                }
              }
            }, {
              id: "credential",
              title: "Credential",
              route: {
                name: VIEWS.CREDENTIALS,
                params: {
                  projectId: projectsStore.personalProject?.id,
                  credentialId: "create"
                }
              }
            }, {
              id: CREATE_PROJECT_ID,
              title: "Project",
              disabled: true
            }];
            return [{
              id: WORKFLOWS_MENU_ID,
              title: "Workflow",
              disabled: sourceControlStore.preferences.branchReadOnly,
              ...(!sourceControlStore.preferences.branchReadOnly && {
                submenu: [{
                  id: "workflow-title",
                  title: "Create in",
                  disabled: true
                }, {
                  id: "workflow-personal",
                  title: i18n.baseText("projects.menu.personal"),
                  icon: "user",
                  disabled: disabledWorkflow(projectsStore.personalProject?.scopes),
                  route: {
                    name: VIEWS.NEW_WORKFLOW,
                    query: {
                      projectId: projectsStore.personalProject?.id
                    }
                  }
                }, ...displayProjects.value.map(project => ({
                  id: `workflow-${project.id}`,
                  title: project.name,
                  icon: isProjectIcon(project.icon) ? project.icon : DEFAULT_ICON,
                  disabled: disabledWorkflow(project.scopes),
                  route: {
                    name: VIEWS.NEW_WORKFLOW,
                    query: {
                      projectId: project.id
                    }
                  }
                }))]
              })
            }, {
              id: CREDENTIALS_MENU_ID,
              title: "Credential",
              disabled: sourceControlStore.preferences.branchReadOnly,
              ...(!sourceControlStore.preferences.branchReadOnly && {
                submenu: [{
                  id: "credential-title",
                  title: "Create in",
                  disabled: true
                }, {
                  id: "credential-personal",
                  title: i18n.baseText("projects.menu.personal"),
                  icon: "user",
                  disabled: disabledCredential(projectsStore.personalProject?.scopes),
                  route: {
                    name: VIEWS.PROJECTS_CREDENTIALS,
                    params: {
                      projectId: projectsStore.personalProject?.id,
                      credentialId: "create"
                    }
                  }
                }, ...displayProjects.value.map(project => ({
                  id: `credential-${project.id}`,
                  title: project.name,
                  icon: isProjectIcon(project.icon) ? project.icon : DEFAULT_ICON,
                  disabled: disabledCredential(project.scopes),
                  route: {
                    name: VIEWS.PROJECTS_CREDENTIALS,
                    params: {
                      projectId: project.id,
                      credentialId: "create"
                    }
                  }
                }))]
              })
            }, {
              id: CREATE_PROJECT_ID,
              title: "Project",
              disabled: !projectsStore.canCreateProjects || !projectsStore.hasPermissionToCreateProjects
            }];
          });
          const createProject = async uiContext => {
            isCreatingProject.value = true;
            try {
              const newProject = await projectsStore.createProject({
                name: i18n.baseText("projects.settings.newProjectName"),
                icon: {
                  type: "icon",
                  value: DEFAULT_ICON
                },
                uiContext
              });
              await router.push({
                name: VIEWS.PROJECT_SETTINGS,
                params: {
                  projectId: newProject.id
                }
              });
              toast.showMessage({
                title: i18n.baseText("projects.settings.save.successful.title", {
                  interpolate: {
                    projectName: newProject.name
                  }
                }),
                type: "success"
              });
            } catch (error) {
              toast.showError(error, i18n.baseText("projects.error.title"));
            } finally {
              isCreatingProject.value = false;
            }
          };
          const handleSelect = id => {
            if (id !== CREATE_PROJECT_ID) return;
            if (projectsStore.canCreateProjects && projectsStore.hasPermissionToCreateProjects) {
              createProject("universal_button");
              return;
            }
            usePageRedirectionHelper().goToUpgrade("rbac", "upgrade-rbac");
          };
          const projectsLimitReachedMessage = computed(() => {
            if (settingsStore.isCloudDeployment) return i18n.baseText("projects.create.limitReached.cloud", {
              interpolate: {
                planName: cloudPlanStore.currentPlanData?.displayName ?? "",
                limit: projectsStore.teamProjectsLimit
              }
            });
            if (!projectsStore.isTeamProjectFeatureEnabled) return i18n.baseText("projects.create.limitReached.self");
            if (!projectsStore.hasPermissionToCreateProjects) return i18n.baseText("projects.create.permissionDenied");
            return i18n.baseText("projects.create.limitReached", {
              interpolate: {
                limit: projectsStore.teamProjectsLimit
              }
            });
          });
          return {
            menu,
            handleSelect,
            createProjectAppendSlotName: computed(() => `item.append.${CREATE_PROJECT_ID}`),
            createWorkflowsAppendSlotName: computed(() => `item.append.${WORKFLOWS_MENU_ID}`),
            createCredentialsAppendSlotName: computed(() => `item.append.${CREDENTIALS_MENU_ID}`),
            projectsLimitReachedMessage,
            hasPermissionToCreateProjects: projectsStore.hasPermissionToCreateProjects,
            upgradeLabel: computed(() => {
              if (settingsStore.isCloudDeployment) return i18n.baseText("generic.upgrade");
              if (!projectsStore.isTeamProjectFeatureEnabled) return i18n.baseText("generic.enterprise");
              return i18n.baseText("generic.upgrade");
            }),
            createProject,
            isCreatingProject,
            displayProjects
          };
        }); //#endregion
        //#region src/app/constants/externalLinks.ts
        _export("n", EXTERNAL_LINKS = {
          QUICKSTART_VIDEO: "https://www.youtube.com/watch?v=4cQWJViybAQ",
          DOCUMENTATION: "https://docs.n8n.io?utm_source=n8n_app&utm_medium=app_sidebar",
          FORUM: "https://community.n8n.io?utm_source=n8n_app&utm_medium=app_sidebar",
          COURSES: "https://docs.n8n.io/courses/"
        }); //#endregion
        //#region src/app/composables/useBugReporting.ts
        BASE_FORUM_URL = "https://github.com/n8n-io/n8n/issues/new?labels=bug-report";
        REPORT_TEMPLATE = `
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
      }
    };
  });
})();