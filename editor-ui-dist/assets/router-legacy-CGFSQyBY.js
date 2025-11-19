;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-CVC6fg6H.js", "./preload-helper-legacy-CXRjoQ0T.js", "./truncate-legacy-Bk9bFklR.js", "./useTelemetry-legacy-BdQlQKwu.js", "./useToast-legacy-D8KBGcJW.js", "./constants-legacy-B0GcWb62.js", "./useExternalHooks-legacy-CI7QLTD3.js", "./npsSurvey.store-legacy-C1YRCoTJ.js", "./cloudPlan.store-legacy-LWdjrdTo.js", "./templates.store-legacy-BHiM3N7j.js", "./nodeCreator.store-legacy-DazC1kYi.js", "./versions.store-legacy-CwMoPJwF.js", "./banners.store-legacy-BmDUT9wa.js", "./dataTable.store-legacy-BFWf9Jk0.js", "./roles.store-legacy-8cTG8Ztk.js", "./sso.store-legacy-Bk24_rEU.js", "./insights.store-legacy-ExCnA8Kt.js", "./mcp.constants-legacy-CZfk8DW2.js", "./constants-legacy-D22nGw-a.js", "./useRecentResources-legacy-DW2sKJPV.js"], function (_export, _context) {
    "use strict";

    var computed, unref, h, createVNode, defineComponent, toDisplayString, createBlock, withCtx, openBlock, createTextVNode, resolveComponent, I18nT, useI18n, __vitePreload, isNavigationFailure, createWebHistory, createRouter, RouterView, hasRole, useSettingsStore, tryToParseNumber, useSourceControlStore, useProjectsStore, register, isDefaultUser, isGuest, useUIStore, useRBACStore, useRootStore, shouldEnableMfa, isAuthenticated, hasScope, useUsersStore, usePostHog, isEnterpriseFeatureEnabled, useNodeTypesStore, MfaRequiredError, useTelemetry, useToast, EnterpriseEditionFeature, DATA_TABLE_VIEW, ADD_DATA_TABLE_MODAL_KEY, SSO_JUST_IN_TIME_PROVSIONING_EXPERIMENT, DATA_TABLE_DETAILS, getResourcePermissions, EDITABLE_CANVAS_VIEWS, PROJECT_DATA_TABLES, VIEWS, useExternalHooks, useNpsSurveyStore, useCloudPlanStore, useTemplatesStore, useCalloutHelpers, useVersionsStore, useBannersStore, useDataTableStore, useRolesStore, useSSOStore, useInsightsStore, MCP_SETTINGS_VIEW, CHAT_VIEW, CHAT_CONVERSATION_VIEW, CHAT_AGENTS_VIEW, useRecentResources, authenticatedMiddleware, enterpriseMiddleware, guestMiddleware, rbacMiddleware, roleMiddleware, customMiddleware, defaultUserMiddleware, middleware, SourceControlInitializationErrorMessage_vue_vue_type_script_setup_true_lang_default, SourceControlInitializationErrorMessage_default, i18n$1, MainSidebar$3, DataTableView, DataTableDetailsView, DataTableModule, resources, MainSidebar$2, InsightsDashboard, InsightsModule, i18n, SettingsMCPView, MCPModule, ChatSidebar, ChatView, ChatAgentsView, ChatModule, modules, registerModuleResources, registerModuleProjectTabs, registerModuleSettingsPages, checkModuleAvailability, registerModuleModals, registerModuleRoutes, state, authenticatedFeaturesInitialized, MainSidebar$1, WorkflowsView, CredentialsView, ProjectSettings, ExecutionsView, ProjectVariables, checkProjectAvailability, commonChildRoutes, commonChildRouteExtensions, projectsRoutes, useEnvFeatureFlag, ChangePasswordView, ErrorView, EntityNotFound, EntityUnAuthorised, OAuthConsentView, ForgotMyPasswordView, MainHeader, MainSidebar, LogsPanel, DemoFooter, NodeView, WorkflowExecutionsView, WorkflowExecutionsLandingPage, WorkflowExecutionsPreview, SettingsView, SettingsLdapView, SettingsPersonalView, SettingsUsersView, SettingsCommunityNodesView, SettingsApiView, SettingsLogStreamingView, SetupView, SigninView, SignupView, TemplatesCollectionView, TemplatesWorkflowView, SetupWorkflowFromTemplateView, TemplatesSearchView, SettingsUsageAndPlan, SettingsSso, SignoutView, SamlOnboarding, SettingsSourceControl, SettingsExternalSecrets, SettingsProvisioningView, WorkerView, WorkflowHistory, WorkflowOnboardingView, EvaluationsView, TestRunDetailView, EvaluationRootView, PrebuiltAgentTemplatesView, routes, router, router_default;
    //#endregion
    //#region src/app/utils/rbacUtils.ts
    function inferProjectIdFromRoute(to) {
      const routeParts = to.path.split("/");
      const projectsIndex = routeParts.indexOf("projects");
      return routeParts[projectsIndex !== -1 ? projectsIndex + 1 : -1];
    }
    function inferResourceTypeFromRoute(to) {
      const routeParts = to.path.split("/");
      const routeMap = {
        workflow: "workflows",
        credential: "credentials",
        user: "users",
        variable: "variables",
        sourceControl: "source-control",
        externalSecret: "external-secrets"
      };
      const isResource = key => routeParts.includes(routeMap[key]);
      for (const resource of Object.keys(routeMap)) if (isResource(resource)) return resource;
    }
    function inferResourceIdFromRoute(to) {
      return to.params.id ?? to.params.name;
    }

    //#endregion
    //#region src/app/utils/rbac/middleware/rbac.ts

    /**
    * Register a new resource type
    */
    function registerResource(metadata) {
      resources.set(metadata.key, metadata);
    }

    //#endregion
    //#region src/features/execution/insights/module.descriptor.ts

    /**
    * Initializes the core application stores and hooks
    * This is called once, when the first route is loaded.
    */
    async function initializeCore() {
      if (state.initialized) return;
      const settingsStore = useSettingsStore();
      const usersStore = useUsersStore();
      const versionsStore = useVersionsStore();
      const ssoStore = useSSOStore();
      const bannersStore = useBannersStore();
      const toast = useToast();
      const i18n$2 = useI18n();
      registerAuthenticationHooks();
      /**
      * Initialize stores
      */
      try {
        await settingsStore.initialize();
      } catch (error) {
        toast.showToast({
          title: i18n$2.baseText("startupError"),
          message: i18n$2.baseText("startupError.message"),
          type: "error",
          duration: 0
        });
      }
      ssoStore.initialize({
        authenticationMethod: settingsStore.userManagement.authenticationMethod,
        config: settingsStore.settings.sso,
        features: {
          saml: settingsStore.isEnterpriseFeatureEnabled[EnterpriseEditionFeature.Saml],
          ldap: settingsStore.isEnterpriseFeatureEnabled[EnterpriseEditionFeature.Ldap],
          oidc: settingsStore.isEnterpriseFeatureEnabled[EnterpriseEditionFeature.Oidc]
        }
      });
      const banners = [];
      if (settingsStore.isEnterpriseFeatureEnabled.showNonProdBanner) banners.push("NON_PRODUCTION_LICENSE");
      if (!(settingsStore.settings.banners?.dismissed || []).includes("V1") && settingsStore.settings.versionCli.startsWith("1.")) banners.push("V1");
      bannersStore.loadStaticBanners({
        banners
      });
      versionsStore.initialize(settingsStore.settings.versionNotifications);
      useExternalHooks().run("app.mount");
      if (!settingsStore.isPreviewMode) await usersStore.initialize({
        quota: settingsStore.userManagement.quota
      });
      state.initialized = true;
    }
    /**
    * Initializes the features of the application that require an authenticated user
    */
    async function initializeAuthenticatedFeatures(initialized = authenticatedFeaturesInitialized, routeName) {
      if (initialized) return;
      if (!useUsersStore().currentUser) return;
      const i18n$2 = useI18n();
      const toast = useToast();
      const sourceControlStore = useSourceControlStore();
      const settingsStore = useSettingsStore();
      const rootStore = useRootStore();
      const nodeTypesStore = useNodeTypesStore();
      const cloudPlanStore = useCloudPlanStore();
      const projectsStore = useProjectsStore();
      const rolesStore = useRolesStore();
      const insightsStore = useInsightsStore();
      const bannersStore = useBannersStore();
      const versionsStore = useVersionsStore();
      const dataTableStore = useDataTableStore();
      if (sourceControlStore.isEnterpriseSourceControlEnabled) try {
        await sourceControlStore.getPreferences();
      } catch (e) {
        toast.showMessage({
          title: i18n$2.baseText("settings.sourceControl.connection.error"),
          message: h(SourceControlInitializationErrorMessage_default),
          type: "error",
          duration: 0
        });
        console.error("Failed to initialize source control store", e);
      }
      if (rootStore.defaultLocale !== "en") await nodeTypesStore.getNodeTranslationHeaders();
      if (settingsStore.isCloudDeployment) cloudPlanStore.initialize().then(() => {
        if (cloudPlanStore.userIsTrialing) {
          if (cloudPlanStore.trialExpired) bannersStore.pushBannerToStack("TRIAL_OVER");else bannersStore.pushBannerToStack("TRIAL");
        } else if (cloudPlanStore.currentUserCloudInfo?.confirmed === false) bannersStore.pushBannerToStack("EMAIL_CONFIRMATION");
      }).catch(error => {
        console.error("Failed to initialize cloud plan store:", error);
      });
      if (settingsStore.isDataTableFeatureEnabled) dataTableStore.fetchDataTableSize().then(({
        quotaStatus
      }) => {
        if (quotaStatus === "error") bannersStore.pushBannerToStack("DATA_TABLE_STORAGE_LIMIT_ERROR");else if (quotaStatus === "warn") bannersStore.pushBannerToStack("DATA_TABLE_STORAGE_LIMIT_WARNING");
      }).catch(error => {
        console.error("Failed to fetch data table limits:", error);
      });
      if (insightsStore.isSummaryEnabled) insightsStore.weeklySummary.execute();
      if (!settingsStore.isPreviewMode && routeName !== VIEWS.DEMO) versionsStore.checkForNewVersions();
      await Promise.all([projectsStore.getMyProjects(), projectsStore.getPersonalProject(), projectsStore.getProjectsCount(), rolesStore.fetchRoles()]);
      registerModuleResources();
      registerModuleProjectTabs();
      registerModuleModals();
      registerModuleSettingsPages();
      authenticatedFeaturesInitialized = true;
    }
    function registerAuthenticationHooks() {
      const rootStore = useRootStore();
      const usersStore = useUsersStore();
      const cloudPlanStore = useCloudPlanStore();
      const postHogStore = usePostHog();
      const bannersStore = useBannersStore();
      const npsSurveyStore = useNpsSurveyStore();
      const telemetry = useTelemetry();
      const RBACStore = useRBACStore();
      const settingsStore = useSettingsStore();
      usersStore.registerLoginHook(async user => {
        await settingsStore.getSettings();
        RBACStore.setGlobalScopes(user.globalScopes ?? []);
        telemetry.identify(rootStore.instanceId, user.id, rootStore.versionCli);
        postHogStore.init(user.featureFlags);
        npsSurveyStore.setupNpsSurveyOnLogin(user.id, user.settings);
        settingsStore.getModuleSettings();
        bannersStore.loadDynamicBanners();
      });
      usersStore.registerLogoutHook(() => {
        bannersStore.clearBannerStack();
        npsSurveyStore.resetNpsSurveyOnLogOut();
        postHogStore.reset();
        cloudPlanStore.reset();
        telemetry.reset();
        RBACStore.setGlobalScopes([]);
      });
    }

    //#endregion
    //#region src/features/collaboration/projects/projects.routes.ts

    function getTemplatesRedirect(defaultRedirect) {
      if (!useSettingsStore().isTemplatesEnabled) return {
        name: `${defaultRedirect}` || VIEWS.NOT_FOUND
      };
      return false;
    }
    function withCanvasReadOnlyMeta(route) {
      if (!route.meta) route.meta = {};
      route.meta.readOnlyCanvas = !EDITABLE_CANVAS_VIEWS.includes(route?.name ?? "");
      if (route.children) route.children = route.children.map(withCanvasReadOnlyMeta);
      return route;
    }
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        h = _vueRuntimeEsmBundlerLegacy003Js.L;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Sn;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        resolveComponent = _vueRuntimeEsmBundlerLegacy003Js.ot;
      }, function (_MapCacheLegacy005Js) {
        I18nT = _MapCacheLegacy005Js._t;
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_preloadHelperLegacy00dJs) {
        __vitePreload = _preloadHelperLegacy00dJs.t;
      }, function (_truncateLegacy00hJs) {
        isNavigationFailure = _truncateLegacy00hJs._;
        createWebHistory = _truncateLegacy00hJs.g;
        createRouter = _truncateLegacy00hJs.h;
        RouterView = _truncateLegacy00hJs.m;
      }, function (_useTelemetryLegacy00FJs) {
        hasRole = _useTelemetryLegacy00FJs.$n;
        useSettingsStore = _useTelemetryLegacy00FJs.Bo;
        tryToParseNumber = _useTelemetryLegacy00FJs.Ci;
        useSourceControlStore = _useTelemetryLegacy00FJs.Dn;
        useProjectsStore = _useTelemetryLegacy00FJs.En;
        register = _useTelemetryLegacy00FJs.Fi;
        isDefaultUser = _useTelemetryLegacy00FJs.Jn;
        isGuest = _useTelemetryLegacy00FJs.Kn;
        useUIStore = _useTelemetryLegacy00FJs.Ni;
        useRBACStore = _useTelemetryLegacy00FJs.Qn;
        useRootStore = _useTelemetryLegacy00FJs.Qs;
        shouldEnableMfa = _useTelemetryLegacy00FJs.Xn;
        isAuthenticated = _useTelemetryLegacy00FJs.Yn;
        hasScope = _useTelemetryLegacy00FJs.Zn;
        useUsersStore = _useTelemetryLegacy00FJs.er;
        usePostHog = _useTelemetryLegacy00FJs.i;
        isEnterpriseFeatureEnabled = _useTelemetryLegacy00FJs.qn;
        useNodeTypesStore = _useTelemetryLegacy00FJs.rt;
        MfaRequiredError = _useTelemetryLegacy00FJs.sc;
        useTelemetry = _useTelemetryLegacy00FJs.t;
      }, function (_useToastLegacy00HJs) {
        useToast = _useToastLegacy00HJs.t;
      }, function (_constantsLegacy00NJs) {
        EnterpriseEditionFeature = _constantsLegacy00NJs.Hs;
        DATA_TABLE_VIEW = _constantsLegacy00NJs.Kn;
        ADD_DATA_TABLE_MODAL_KEY = _constantsLegacy00NJs.Ln;
        SSO_JUST_IN_TIME_PROVSIONING_EXPERIMENT = _constantsLegacy00NJs.Rs;
        DATA_TABLE_DETAILS = _constantsLegacy00NJs.Vn;
        getResourcePermissions = _constantsLegacy00NJs._r;
        EDITABLE_CANVAS_VIEWS = _constantsLegacy00NJs.fo;
        PROJECT_DATA_TABLES = _constantsLegacy00NJs.ir;
        VIEWS = _constantsLegacy00NJs.mo;
      }, function (_useExternalHooksLegacy00XJs) {
        useExternalHooks = _useExternalHooksLegacy00XJs.t;
      }, function (_npsSurveyStoreLegacy011Js) {
        useNpsSurveyStore = _npsSurveyStoreLegacy011Js.t;
      }, function (_cloudPlanStoreLegacy013Js) {
        useCloudPlanStore = _cloudPlanStoreLegacy013Js.t;
      }, function (_templatesStoreLegacy015Js) {
        useTemplatesStore = _templatesStoreLegacy015Js.t;
      }, function (_nodeCreatorStoreLegacy01jJs) {
        useCalloutHelpers = _nodeCreatorStoreLegacy01jJs._;
      }, function (_versionsStoreLegacy01BJs) {
        useVersionsStore = _versionsStoreLegacy01BJs.t;
      }, function (_bannersStoreLegacy01FJs) {
        useBannersStore = _bannersStoreLegacy01FJs.t;
      }, function (_dataTableStoreLegacy01HJs) {
        useDataTableStore = _dataTableStoreLegacy01HJs.t;
      }, function (_rolesStoreLegacy02NJs) {
        useRolesStore = _rolesStoreLegacy02NJs.t;
      }, function (_ssoStoreLegacy02ZJs) {
        useSSOStore = _ssoStoreLegacy02ZJs.n;
      }, function (_insightsStoreLegacy031Js) {
        useInsightsStore = _insightsStoreLegacy031Js.t;
      }, function (_mcpConstantsLegacy037Js) {
        MCP_SETTINGS_VIEW = _mcpConstantsLegacy037Js.r;
      }, function (_constantsLegacy039Js) {
        CHAT_VIEW = _constantsLegacy039Js.i;
        CHAT_CONVERSATION_VIEW = _constantsLegacy039Js.n;
        CHAT_AGENTS_VIEW = _constantsLegacy039Js.t;
      }, function (_useRecentResourcesLegacy03bJs) {
        useRecentResources = _useRecentResourcesLegacy03bJs.t;
      }],
      execute: function () {
        //#region src/app/utils/rbac/middleware/authenticated.ts
        authenticatedMiddleware = async (to, _from, next, options) => {
          const url = new URL(window.location.href);
          url.searchParams.delete("redirect");
          const redirect = to.query.redirect ?? encodeURIComponent(`${url.pathname}${url.search}`);
          if (!isAuthenticated(options)) return next({
            name: VIEWS.SIGNIN,
            query: {
              redirect
            }
          });
          if (shouldEnableMfa()) {
            if (to.name !== VIEWS.PERSONAL_SETTINGS) return next({
              name: VIEWS.PERSONAL_SETTINGS,
              query: {
                redirect
              }
            });
            return;
          }
        }; //#endregion
        //#region src/app/utils/rbac/middleware/enterprise.ts
        enterpriseMiddleware = async (_to, _from, next, options) => {
          if (!isEnterpriseFeatureEnabled(options)) return next({
            name: VIEWS.HOMEPAGE
          });
        }; //#endregion
        //#region src/app/utils/rbac/middleware/guest.ts
        guestMiddleware = async (to, _from, next) => {
          if (!isGuest()) {
            const redirect = to.query.redirect ?? "";
            if (redirect.startsWith("/")) return next(redirect);
            try {
              if (new URL(redirect).origin === window.location.origin) return next(redirect);
            } catch {}
            return next({
              name: VIEWS.HOMEPAGE
            });
          }
        };
        rbacMiddleware = async (to, _from, next, {
          scope,
          options
        }) => {
          const projectId = inferProjectIdFromRoute(to);
          const resourceType = inferResourceTypeFromRoute(to);
          if (!hasScope({
            scope,
            projectId,
            resourceType,
            resourceId: resourceType ? inferResourceIdFromRoute(to) : void 0,
            options
          })) return next({
            name: VIEWS.HOMEPAGE
          });
        }; //#endregion
        //#region src/app/utils/rbac/middleware/role.ts
        roleMiddleware = async (_to, _from, next, checkRoles) => {
          if (!hasRole(checkRoles)) return next({
            name: VIEWS.HOMEPAGE
          });
        }; //#endregion
        //#region src/app/utils/rbac/middleware/custom.ts
        customMiddleware = async (to, from, next, isValid) => {
          if (!isValid({
            to,
            from,
            next
          })) return next({
            name: VIEWS.HOMEPAGE
          });
        }; //#endregion
        //#region src/app/utils/rbac/middleware/defaultUser.ts
        defaultUserMiddleware = async (_to, _from, next) => {
          if (!isDefaultUser()) return next({
            name: VIEWS.HOMEPAGE
          });
        }; //#endregion
        //#region src/app/utils/rbac/middleware.ts
        middleware = {
          authenticated: authenticatedMiddleware,
          custom: customMiddleware,
          defaultUser: defaultUserMiddleware,
          enterprise: enterpriseMiddleware,
          guest: guestMiddleware,
          rbac: rbacMiddleware,
          role: roleMiddleware
        }; //#endregion
        //#region src/features/integrations/sourceControl.ee/components/SourceControlInitializationErrorMessage.vue?vue&type=script&setup=true&lang.ts
        SourceControlInitializationErrorMessage_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "SourceControlInitializationErrorMessage",
          setup(__props) {
            const i18n$2 = useI18n();
            return (_ctx, _cache) => {
              const _component_RouterLink = resolveComponent("RouterLink");
              return openBlock(), createBlock(unref(I18nT), {
                keypath: "settings.sourceControl.connection.error.message",
                tag: "div",
                scope: "global"
              }, {
                link: withCtx(() => [createVNode(_component_RouterLink, {
                  to: {
                    name: unref(VIEWS).SOURCE_CONTROL
                  }
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n$2).baseText("settings.sourceControl.connection.error.link")), 1)]),
                  _: 1
                }, 8, ["to"])]),
                _: 1
              });
            };
          }
        }); //#endregion
        //#region src/features/integrations/sourceControl.ee/components/SourceControlInitializationErrorMessage.vue
        SourceControlInitializationErrorMessage_default = SourceControlInitializationErrorMessage_vue_vue_type_script_setup_true_lang_default; //#endregion
        //#region src/features/core/dataTable/module.descriptor.ts
        i18n$1 = useI18n();
        MainSidebar$3 = async () => await __vitePreload(() => _context.import("./MainSidebar-legacy-DjsZexSw.js"), true               ? void 0 : void 0);
        DataTableView = async () => await __vitePreload(() => _context.import("./DataTableView-legacy-BfnWcEKE.js"), true               ? void 0 : void 0);
        DataTableDetailsView = async () => await __vitePreload(() => _context.import("./DataTableDetailsView-legacy-HzK6hqK4.js"), true               ? void 0 : void 0);
        DataTableModule = {
          id: "data-table",
          name: "Data Table",
          description: "Manage and store data efficiently with the Data Table module.",
          icon: "database",
          modals: [{
            key: ADD_DATA_TABLE_MODAL_KEY,
            component: async () => await __vitePreload(() => _context.import("./AddDataTableModal-legacy-3zj-oSYu.js"), true               ? void 0 : void 0),
            initialState: {
              open: false
            }
          }],
          routes: [{
            name: DATA_TABLE_VIEW,
            path: "/home/datatables",
            components: {
              default: DataTableView,
              sidebar: MainSidebar$3
            },
            meta: {
              middleware: ["authenticated", "custom"]
            }
          }, {
            name: PROJECT_DATA_TABLES,
            path: "datatables/:new(new)?",
            props: true,
            components: {
              default: DataTableView,
              sidebar: MainSidebar$3
            },
            meta: {
              projectRoute: true,
              middleware: ["authenticated", "custom"]
            }
          }, {
            name: DATA_TABLE_DETAILS,
            path: "datatables/:id",
            props: true,
            components: {
              default: DataTableDetailsView,
              sidebar: MainSidebar$3
            },
            meta: {
              projectRoute: true,
              middleware: ["authenticated", "custom"]
            }
          }],
          projectTabs: {
            overview: [{
              label: i18n$1.baseText("dataTable.dataTables"),
              value: DATA_TABLE_VIEW,
              to: {
                name: DATA_TABLE_VIEW
              }
            }],
            project: [{
              label: i18n$1.baseText("dataTable.dataTables"),
              value: PROJECT_DATA_TABLES,
              dynamicRoute: {
                name: PROJECT_DATA_TABLES,
                includeProjectId: true
              }
            }]
          },
          resources: [{
            key: "dataTable",
            displayName: "Data Table"
          }]
        }; //#endregion
        //#region src/app/moduleInitializer/resourceRegistry.ts
        resources = /* @__PURE__ */new Map();
        MainSidebar$2 = async () => await __vitePreload(() => _context.import("./MainSidebar-legacy-DjsZexSw.js"), true               ? void 0 : void 0);
        InsightsDashboard = async () => await __vitePreload(() => _context.import("./InsightsDashboard-legacy-DGULPxU8.js"), true               ? void 0 : void 0);
        InsightsModule = {
          id: "insights",
          name: "Insights",
          description: "Provides insights and analytics features for projects.",
          icon: "chart-column-decreasing",
          routes: [{
            path: "/insights",
            beforeEnter() {
              return useInsightsStore().isInsightsEnabled || {
                name: VIEWS.NOT_FOUND
              };
            },
            components: {
              default: RouterView,
              sidebar: MainSidebar$2
            },
            meta: {
              middleware: ["authenticated", "rbac"],
              middlewareOptions: {
                rbac: {
                  scope: ["insights:list"]
                }
              }
            },
            children: [{
              path: ":insightType?",
              name: VIEWS.INSIGHTS,
              beforeEnter(to) {
                if (to.params.insightType) return true;
                return Object.assign(to, {
                  params: {
                    ...to.params,
                    insightType: "total"
                  }
                });
              },
              component: InsightsDashboard,
              props: true
            }]
          }]
        }; //#endregion
        //#region src/features/ai/mcpAccess/module.descriptor.ts
        i18n = useI18n();
        SettingsMCPView = async () => await __vitePreload(() => _context.import("./SettingsMCPView-legacy-9JAK47Da.js"), true               ? void 0 : void 0);
        MCPModule = {
          id: "mcp",
          name: "MCP Access",
          description: "Access your n8n instance through MCP clients",
          icon: "mcp",
          routes: [{
            path: "mcp",
            name: MCP_SETTINGS_VIEW,
            components: {
              settingsView: SettingsMCPView
            },
            meta: {
              middleware: ["authenticated", "custom"],
              telemetry: {
                pageCategory: "settings"
              }
            }
          }],
          settingsPages: [{
            id: "settings-mcp",
            icon: "mcp",
            label: i18n.baseText("settings.mcp"),
            position: "top",
            route: {
              to: {
                name: MCP_SETTINGS_VIEW
              }
            }
          }]
        }; //#endregion
        //#region src/features/ai/chatHub/module.descriptor.ts
        ChatSidebar = async () => await __vitePreload(() => _context.import("./ChatSidebar-legacy-DS-4orE7.js"), true               ? void 0 : void 0);
        ChatView = async () => await __vitePreload(() => _context.import("./ChatView-legacy-BNwjLsRW.js"), true               ? void 0 : void 0);
        ChatAgentsView = async () => await __vitePreload(() => _context.import("./ChatAgentsView-legacy-fOit7Swc.js"), true               ? void 0 : void 0);
        ChatModule = {
          id: "chat-hub",
          name: "Chat",
          description: "Interact with various LLM models or your n8n AI agents.",
          icon: "chat",
          modals: [],
          routes: [{
            name: CHAT_VIEW,
            path: "/home/chat",
            components: {
              default: ChatView,
              sidebar: ChatSidebar
            },
            meta: {
              middleware: ["authenticated", "custom"]
            }
          }, {
            name: CHAT_CONVERSATION_VIEW,
            path: "/home/chat/:id",
            components: {
              default: ChatView,
              sidebar: ChatSidebar
            },
            meta: {
              middleware: ["authenticated", "custom"]
            }
          }, {
            name: CHAT_AGENTS_VIEW,
            path: "/home/chat/agents",
            components: {
              default: ChatAgentsView,
              sidebar: ChatSidebar
            },
            meta: {
              middleware: ["authenticated", "custom"]
            }
          }],
          projectTabs: {
            overview: [],
            project: []
          },
          resources: [{
            key: "chat",
            displayName: "Chat"
          }]
        }; //#endregion
        //#region src/app/moduleInitializer/moduleInitializer.ts
        /**
        * Hard-coding modules list until we have a dynamic way to load modules.
        */
        modules = [InsightsModule, DataTableModule, MCPModule, ChatModule];
        /**
        * Initialize modules resources (used in ResourcesListLayout), done in init.ts
        */
        registerModuleResources = () => {
          modules.forEach(module => {
            module.resources?.forEach(resource => {
              registerResource(resource);
            });
          });
        };
        /**
        * Initialize modules project tabs (used in ProjectHeader), done in init.ts
        */
        registerModuleProjectTabs = () => {
          const uiStore = useUIStore();
          modules.forEach(module => {
            if (module.projectTabs) {
              if (module.projectTabs.overview) uiStore.registerCustomTabs("overview", module.id, module.projectTabs.overview);
              if (module.projectTabs.project) uiStore.registerCustomTabs("project", module.id, module.projectTabs.project);
              if (module.projectTabs.shared) uiStore.registerCustomTabs("shared", module.id, module.projectTabs.shared);
            }
          });
        };
        /**
        * Initialize modules settings sidebar items (used in SettingsSidebar), done in init.ts
        */
        registerModuleSettingsPages = () => {
          const uiStore = useUIStore();
          modules.forEach(module => {
            if (module.settingsPages && module.settingsPages.length > 0) uiStore.registerSettingsPages(module.id, module.settingsPages);
          });
        };
        /**
        * Middleware function to check if a module is available
        */
        checkModuleAvailability = options => {
          if (!options?.to?.meta?.moduleName || typeof options.to.meta.moduleName !== "string") return true;
          return useSettingsStore().isModuleActive(options.to.meta.moduleName);
        };
        /**
        * Initialize module modals, done in init.ts
        */
        registerModuleModals = () => {
          modules.forEach(module => {
            module.modals?.forEach(modalDef => {
              register(modalDef);
            });
          });
          useUIStore().initializeModalsFromRegistry();
        };
        /**
        * Initialize module routes, done in main.ts
        */
        _export("n", registerModuleRoutes = router$1 => {
          modules.forEach(module => {
            module.routes?.forEach(route => {
              const enhancedRoute = {
                ...route,
                meta: {
                  ...route.meta,
                  moduleName: module.id,
                  ...(route.meta?.middleware?.includes("custom") && {
                    middlewareOptions: {
                      ...route.meta?.middlewareOptions,
                      custom: checkModuleAvailability
                    }
                  })
                }
              };
              if (route.meta?.projectRoute) router$1.addRoute(VIEWS.PROJECT_DETAILS, enhancedRoute);else if (route.meta?.telemetry && route.meta.telemetry.pageCategory === "settings") router$1.addRoute(VIEWS.SETTINGS, enhancedRoute);else router$1.addRoute(enhancedRoute);
            });
          });
        }); //#endregion
        //#region src/init.ts
        state = {
          initialized: false
        };
        authenticatedFeaturesInitialized = false;
        MainSidebar$1 = async () => await __vitePreload(() => _context.import("./MainSidebar-legacy-DjsZexSw.js"), true               ? void 0 : void 0);
        WorkflowsView = async () => await __vitePreload(() => _context.import("./WorkflowsView-legacy-BRdSb5rK.js"), true               ? void 0 : void 0);
        CredentialsView = async () => await __vitePreload(() => _context.import("./CredentialsView-legacy-L-7_0vUA.js"), true               ? void 0 : void 0);
        ProjectSettings = async () => await __vitePreload(() => _context.import("./ProjectSettings-legacy--bSmURt-.js"), true               ? void 0 : void 0);
        ExecutionsView = async () => await __vitePreload(() => _context.import("./ExecutionsView-legacy-DQzgRkjj.js"), true               ? void 0 : void 0);
        ProjectVariables = async () => await __vitePreload(() => _context.import("./ProjectVariables-legacy-D_BYvMVp.js"), true               ? void 0 : void 0);
        checkProjectAvailability = to => {
          if (!to?.params.projectId) return true;
          return !!useProjectsStore().myProjects.find(p => to?.params.projectId === p.id);
        };
        commonChildRoutes = [{
          path: "workflows",
          components: {
            default: WorkflowsView,
            sidebar: MainSidebar$1
          },
          meta: {
            middleware: ["authenticated", "custom"],
            middlewareOptions: {
              custom: options => checkProjectAvailability(options?.to)
            }
          }
        }, {
          path: "credentials/:credentialId?",
          props: true,
          components: {
            default: CredentialsView,
            sidebar: MainSidebar$1
          },
          meta: {
            middleware: ["authenticated", "custom"],
            middlewareOptions: {
              custom: options => checkProjectAvailability(options?.to)
            }
          }
        }, {
          path: "executions",
          components: {
            default: ExecutionsView,
            sidebar: MainSidebar$1
          },
          meta: {
            middleware: ["authenticated", "custom"],
            middlewareOptions: {
              custom: options => checkProjectAvailability(options?.to)
            }
          }
        }, {
          path: "folders/:folderId?/workflows",
          components: {
            default: WorkflowsView,
            sidebar: MainSidebar$1
          },
          meta: {
            middleware: ["authenticated", "custom"],
            middlewareOptions: {
              custom: options => checkProjectAvailability(options?.to)
            }
          }
        }, {
          path: "variables",
          components: {
            default: ProjectVariables,
            sidebar: MainSidebar$1
          },
          meta: {
            middleware: ["authenticated", "custom"],
            middlewareOptions: {
              custom: options => checkProjectAvailability(options?.to)
            }
          }
        }];
        commonChildRouteExtensions = {
          home: [{
            name: VIEWS.WORKFLOWS
          }, {
            name: VIEWS.CREDENTIALS
          }, {
            name: VIEWS.EXECUTIONS
          }, {
            name: VIEWS.FOLDERS
          }, {
            name: VIEWS.HOME_VARIABLES
          }],
          projects: [{
            name: VIEWS.PROJECTS_WORKFLOWS
          }, {
            name: VIEWS.PROJECTS_CREDENTIALS
          }, {
            name: VIEWS.PROJECTS_EXECUTIONS
          }, {
            name: VIEWS.PROJECTS_FOLDERS
          }, {
            name: VIEWS.PROJECTS_VARIABLES
          }]
        };
        projectsRoutes = [{
          path: "/projects",
          name: VIEWS.PROJECTS,
          meta: {
            middleware: ["authenticated"]
          },
          redirect: "/home/workflows",
          children: [{
            name: VIEWS.PROJECT_DETAILS,
            path: ":projectId",
            meta: {
              middleware: ["authenticated"]
            },
            redirect: {
              name: VIEWS.PROJECTS_WORKFLOWS
            },
            children: commonChildRoutes.map((route, idx) => ({
              ...route,
              name: commonChildRouteExtensions.projects[idx].name
            })).concat([{
              path: "settings",
              name: VIEWS.PROJECT_SETTINGS,
              components: {
                default: ProjectSettings,
                sidebar: MainSidebar$1
              },
              meta: {
                middleware: ["authenticated", "custom"],
                middlewareOptions: {
                  custom: options => {
                    return !!getResourcePermissions(useProjectsStore().myProjects.find(p => p.id === options?.to.params.projectId)?.scopes).project.update;
                  }
                }
              }
            }])
          }]
        }, {
          path: "/home",
          name: VIEWS.HOMEPAGE,
          meta: {
            middleware: ["authenticated"]
          },
          redirect: "/home/workflows",
          children: commonChildRoutes.map((route, idx) => ({
            ...route,
            name: commonChildRouteExtensions.home[idx].name
          }))
        }, {
          path: "/shared",
          name: VIEWS.SHARED_WITH_ME,
          meta: {
            middleware: ["authenticated"]
          },
          redirect: "/shared/workflows",
          children: [{
            path: "workflows",
            name: VIEWS.SHARED_WORKFLOWS,
            components: {
              default: WorkflowsView,
              sidebar: MainSidebar$1
            },
            meta: {
              middleware: ["authenticated", "custom"],
              middlewareOptions: {
                custom: options => checkProjectAvailability(options?.to)
              }
            }
          }, {
            path: "credentials/:credentialId?",
            props: true,
            name: VIEWS.SHARED_CREDENTIALS,
            components: {
              default: CredentialsView,
              sidebar: MainSidebar$1
            },
            meta: {
              middleware: ["authenticated", "custom"],
              middlewareOptions: {
                custom: options => checkProjectAvailability(options?.to)
              }
            }
          }]
        }, {
          path: "/workflows",
          redirect: "/home/workflows"
        }, {
          path: "/credentials",
          redirect: "/home/credentials"
        }, {
          path: "/executions",
          redirect: "/home/executions"
        }, {
          path: "/variables",
          redirect: "/home/variables"
        }]; //#endregion
        //#region src/features/shared/envFeatureFlag/useEnvFeatureFlag.ts
        useEnvFeatureFlag = () => {
          const settingsStore = useSettingsStore();
          return {
            check: computed(() => flag => {
              const key = `N8N_ENV_FEAT_${flag}`;
              const settingsProvidedEnvFeatFlag = settingsStore.settings.envFeatureFlags?.[key];
              if (settingsProvidedEnvFeatFlag !== void 0) return settingsProvidedEnvFeatFlag !== "false" && !!settingsProvidedEnvFeatFlag;
              const buildTimeValue = {
                "BASE_URL": "/%7B%7BBASE_PATH%7D%7D/",
                "DEV": false,
                "LEGACY": true,
                "MODE": "production",
                "PROD": true,
                "SSR": false,
                "VUE_APP_PUBLIC_PATH": "/{{BASE_PATH}}/"
              }[key];
              if (buildTimeValue !== void 0) return buildTimeValue !== "false" && !!buildTimeValue;
              return false;
            })
          };
        }; //#endregion
        //#region src/router.ts
        ChangePasswordView = async () => await __vitePreload(() => _context.import("./ChangePasswordView-legacy-DMPF0pfs.js"), true               ? void 0 : void 0);
        ErrorView = async () => await __vitePreload(() => _context.import("./ErrorView-legacy-BAZBSnyA.js"), true               ? void 0 : void 0);
        EntityNotFound = async () => await __vitePreload(() => _context.import("./EntityNotFound-legacy-iZmICNLi.js"), true               ? void 0 : void 0);
        EntityUnAuthorised = async () => await __vitePreload(() => _context.import("./EntityUnAuthorised-legacy-FXDrkqoD.js"), true               ? void 0 : void 0);
        OAuthConsentView = async () => await __vitePreload(() => _context.import("./OAuthConsentView-legacy-CgbtXILJ.js"), true               ? void 0 : void 0);
        ForgotMyPasswordView = async () => await __vitePreload(() => _context.import("./ForgotMyPasswordView-legacy-CgIkPU1o.js"), true               ? void 0 : void 0);
        MainHeader = async () => await __vitePreload(() => _context.import("./MainHeader-legacy-CIzncpk1.js"), true               ? void 0 : void 0);
        MainSidebar = async () => await __vitePreload(() => _context.import("./MainSidebar-legacy-DjsZexSw.js"), true               ? void 0 : void 0);
        LogsPanel = async () => await __vitePreload(() => _context.import("./LogsPanel-legacy-Cv_WvP-5.js"), true               ? void 0 : void 0);
        DemoFooter = async () => await __vitePreload(() => _context.import("./DemoFooter-legacy-D2CzR4EY.js"), true               ? void 0 : void 0);
        NodeView = async () => await __vitePreload(() => _context.import("./NodeView-legacy-BgeVxgFF.js"), true               ? void 0 : void 0);
        WorkflowExecutionsView = async () => await __vitePreload(() => _context.import("./WorkflowExecutionsView-legacy-CVqLmP0X.js"), true               ? void 0 : void 0);
        WorkflowExecutionsLandingPage = async () => await __vitePreload(() => _context.import("./WorkflowExecutionsLandingPage-legacy-F6Vw3JBT.js"), true               ? void 0 : void 0);
        WorkflowExecutionsPreview = async () => await __vitePreload(() => _context.import("./WorkflowExecutionsPreview-legacy-JBl-57I4.js"), true               ? void 0 : void 0);
        SettingsView = async () => await __vitePreload(() => _context.import("./SettingsView-legacy-DCwaT_jE.js"), true               ? void 0 : void 0);
        SettingsLdapView = async () => await __vitePreload(() => _context.import("./SettingsLdapView-legacy-DhCU_3Jd.js"), true               ? void 0 : void 0);
        SettingsPersonalView = async () => await __vitePreload(() => _context.import("./SettingsPersonalView-legacy-BnZnmFbx.js"), true               ? void 0 : void 0);
        SettingsUsersView = async () => await __vitePreload(() => _context.import("./SettingsUsersView-legacy-DeVQnCoO.js"), true               ? void 0 : void 0);
        SettingsCommunityNodesView = async () => await __vitePreload(() => _context.import("./SettingsCommunityNodesView-legacy-BNPe_ezP.js"), true               ? void 0 : void 0);
        SettingsApiView = async () => await __vitePreload(() => _context.import("./SettingsApiView-legacy-C-4J5dG0.js"), true               ? void 0 : void 0);
        SettingsLogStreamingView = async () => await __vitePreload(() => _context.import("./SettingsLogStreamingView-legacy-B_41AhwQ.js"), true               ? void 0 : void 0);
        SetupView = async () => await __vitePreload(() => _context.import("./SetupView-legacy-D0_iVgtP.js"), true               ? void 0 : void 0);
        SigninView = async () => await __vitePreload(() => _context.import("./SigninView-legacy-Cv-9X7Kz.js"), true               ? void 0 : void 0);
        SignupView = async () => await __vitePreload(() => _context.import("./SignupView-legacy-CAbVBURj.js"), true               ? void 0 : void 0);
        TemplatesCollectionView = async () => await __vitePreload(() => _context.import("./TemplatesCollectionView-legacy-t3Vb_naf.js"), true               ? void 0 : void 0);
        TemplatesWorkflowView = async () => await __vitePreload(() => _context.import("./TemplatesWorkflowView-legacy-CaxB8Xkx.js"), true               ? void 0 : void 0);
        SetupWorkflowFromTemplateView = async () => await __vitePreload(() => _context.import("./SetupWorkflowFromTemplateView-legacy-9ruLOSXX.js"), true               ? void 0 : void 0);
        TemplatesSearchView = async () => await __vitePreload(() => _context.import("./TemplatesSearchView-legacy-CsHGqigB.js"), true               ? void 0 : void 0);
        SettingsUsageAndPlan = async () => await __vitePreload(() => _context.import("./SettingsUsageAndPlan-legacy-Djv_k1QE.js"), true               ? void 0 : void 0);
        SettingsSso = async () => await __vitePreload(() => _context.import("./SettingsSso-legacy-3h3cJxkY.js"), true               ? void 0 : void 0);
        SignoutView = async () => await __vitePreload(() => _context.import("./SignoutView-legacy-DGxJ8m_3.js"), true               ? void 0 : void 0);
        SamlOnboarding = async () => await __vitePreload(() => _context.import("./SamlOnboarding-legacy-DBnXKWgs.js"), true               ? void 0 : void 0);
        SettingsSourceControl = async () => await __vitePreload(() => _context.import("./SettingsSourceControl-legacy-BQFU9hiN.js"), true               ? void 0 : void 0);
        SettingsExternalSecrets = async () => await __vitePreload(() => _context.import("./SettingsExternalSecrets-legacy-DD4sSaz0.js"), true               ? void 0 : void 0);
        SettingsProvisioningView = async () => await __vitePreload(() => _context.import("./SettingsProvisioningView-legacy-D-XK8d4v.js"), true               ? void 0 : void 0);
        WorkerView = async () => await __vitePreload(() => _context.import("./WorkerView-legacy-Dz_JvyOO.js"), true               ? void 0 : void 0);
        WorkflowHistory = async () => await __vitePreload(() => _context.import("./WorkflowHistory-legacy-BodOwWQa.js"), true               ? void 0 : void 0);
        WorkflowOnboardingView = async () => await __vitePreload(() => _context.import("./WorkflowOnboardingView-legacy-fCLZi7hp.js"), true               ? void 0 : void 0);
        EvaluationsView = async () => await __vitePreload(() => _context.import("./EvaluationsView-legacy-CJSwnVM6.js"), true               ? void 0 : void 0);
        TestRunDetailView = async () => await __vitePreload(() => _context.import("./TestRunDetailView-legacy-C9dhYV5n.js"), true               ? void 0 : void 0);
        EvaluationRootView = async () => await __vitePreload(() => _context.import("./EvaluationsRootView-legacy-CFL9y6s5.js"), true               ? void 0 : void 0);
        PrebuiltAgentTemplatesView = async () => await __vitePreload(() => _context.import("./PrebuiltAgentTemplatesView-legacy-ATpEN0qM.js"), true               ? void 0 : void 0);
        routes = [{
          path: "/",
          redirect: "/home/workflows",
          meta: {
            middleware: ["authenticated"]
          }
        }, {
          path: "/collections/:id",
          name: VIEWS.COLLECTION,
          components: {
            default: TemplatesCollectionView,
            sidebar: MainSidebar
          },
          meta: {
            templatesEnabled: true,
            telemetry: {
              getProperties(route) {
                const templatesStore = useTemplatesStore();
                return {
                  collection_id: route.params.id,
                  wf_template_repo_session_id: templatesStore.currentSessionId
                };
              }
            },
            getRedirect: getTemplatesRedirect,
            middleware: ["authenticated"]
          }
        }, {
          path: "/templates/agents",
          name: VIEWS.PRE_BUILT_AGENT_TEMPLATES,
          components: {
            default: PrebuiltAgentTemplatesView,
            sidebar: MainSidebar
          },
          meta: {
            templatesEnabled: true,
            getRedirect: getTemplatesRedirect,
            middleware: ["authenticated"]
          },
          beforeEnter: (_to, _from, next) => {
            const calloutHelpers = useCalloutHelpers();
            const templatesStore = useTemplatesStore();
            if (!calloutHelpers.isPreBuiltAgentsCalloutVisible.value) window.location.href = templatesStore.websiteTemplateRepositoryURL;else next();
          }
        }, {
          path: "/templates/:id",
          name: VIEWS.TEMPLATE,
          components: {
            default: TemplatesWorkflowView,
            sidebar: MainSidebar
          },
          meta: {
            templatesEnabled: true,
            getRedirect: getTemplatesRedirect,
            telemetry: {
              getProperties(route) {
                const templatesStore = useTemplatesStore();
                return {
                  template_id: tryToParseNumber(Array.isArray(route.params.id) ? route.params.id[0] : route.params.id),
                  wf_template_repo_session_id: templatesStore.currentSessionId
                };
              }
            },
            middleware: ["authenticated"]
          }
        }, {
          path: "/templates/:id/setup",
          name: VIEWS.TEMPLATE_SETUP,
          components: {
            default: SetupWorkflowFromTemplateView,
            sidebar: MainSidebar
          },
          meta: {
            templatesEnabled: true,
            getRedirect: getTemplatesRedirect,
            telemetry: {
              getProperties(route) {
                const templatesStore = useTemplatesStore();
                return {
                  template_id: tryToParseNumber(Array.isArray(route.params.id) ? route.params.id[0] : route.params.id),
                  wf_template_repo_session_id: templatesStore.currentSessionId
                };
              }
            },
            middleware: ["authenticated"]
          }
        }, {
          path: "/templates/",
          name: VIEWS.TEMPLATES,
          components: {
            default: TemplatesSearchView,
            sidebar: MainSidebar
          },
          meta: {
            templatesEnabled: true,
            getRedirect: getTemplatesRedirect,
            scrollOffset: 0,
            telemetry: {
              getProperties() {
                return {
                  wf_template_repo_session_id: useTemplatesStore().currentSessionId
                };
              }
            },
            setScrollPosition(pos) {
              this.scrollOffset = pos;
            },
            middleware: ["authenticated"]
          },
          beforeEnter: (_to, _from, next) => {
            const templatesStore = useTemplatesStore();
            if (!templatesStore.hasCustomTemplatesHost) window.location.href = templatesStore.websiteTemplateRepositoryURL;else next();
          }
        }, {
          path: "/workflow/:name/debug/:executionId",
          name: VIEWS.EXECUTION_DEBUG,
          components: {
            default: NodeView,
            header: MainHeader,
            sidebar: MainSidebar,
            footer: LogsPanel
          },
          meta: {
            nodeView: true,
            keepWorkflowAlive: true,
            middleware: ["authenticated", "enterprise"],
            middlewareOptions: {
              enterprise: {
                feature: [EnterpriseEditionFeature.DebugInEditor]
              }
            }
          }
        }, {
          path: "/workflow/:name/executions",
          name: VIEWS.WORKFLOW_EXECUTIONS,
          components: {
            default: WorkflowExecutionsView,
            header: MainHeader,
            sidebar: MainSidebar
          },
          meta: {
            keepWorkflowAlive: true,
            middleware: ["authenticated"]
          },
          children: [{
            path: "",
            name: VIEWS.EXECUTION_HOME,
            components: {
              executionPreview: WorkflowExecutionsLandingPage
            },
            meta: {
              keepWorkflowAlive: true,
              middleware: ["authenticated"]
            }
          }, {
            path: ":executionId/:nodeId?",
            name: VIEWS.EXECUTION_PREVIEW,
            components: {
              executionPreview: WorkflowExecutionsPreview
            },
            meta: {
              keepWorkflowAlive: true,
              middleware: ["authenticated"]
            }
          }]
        }, {
          path: "/workflow/:name/evaluation",
          name: VIEWS.EVALUATION,
          components: {
            default: EvaluationRootView,
            header: MainHeader,
            sidebar: MainSidebar
          },
          props: {
            default: true
          },
          meta: {
            keepWorkflowAlive: true,
            middleware: ["authenticated"]
          },
          children: [{
            path: "",
            name: VIEWS.EVALUATION_EDIT,
            component: EvaluationsView,
            props: true
          }, {
            path: "test-runs/:runId",
            name: VIEWS.EVALUATION_RUNS_DETAIL,
            component: TestRunDetailView,
            props: true
          }]
        }, {
          path: "/workflow/:workflowId/history/:versionId?",
          name: VIEWS.WORKFLOW_HISTORY,
          components: {
            default: WorkflowHistory,
            sidebar: MainSidebar
          },
          meta: {
            middleware: ["authenticated", "enterprise"],
            middlewareOptions: {
              enterprise: {
                feature: [EnterpriseEditionFeature.WorkflowHistory]
              }
            }
          }
        }, {
          path: "/workflows/templates/:id",
          name: VIEWS.TEMPLATE_IMPORT,
          components: {
            default: NodeView,
            header: MainHeader,
            sidebar: MainSidebar
          },
          meta: {
            templatesEnabled: true,
            keepWorkflowAlive: true,
            getRedirect: getTemplatesRedirect,
            middleware: ["authenticated"]
          }
        }, {
          path: "/workflows/onboarding/:id",
          name: VIEWS.WORKFLOW_ONBOARDING,
          components: {
            default: WorkflowOnboardingView,
            header: MainHeader,
            sidebar: MainSidebar
          },
          meta: {
            templatesEnabled: true,
            keepWorkflowAlive: true,
            getRedirect: () => getTemplatesRedirect(VIEWS.NEW_WORKFLOW),
            middleware: ["authenticated"]
          }
        }, {
          path: "/workflow/new",
          name: VIEWS.NEW_WORKFLOW,
          components: {
            default: NodeView,
            header: MainHeader,
            sidebar: MainSidebar,
            footer: LogsPanel
          },
          meta: {
            nodeView: true,
            keepWorkflowAlive: true,
            middleware: ["authenticated"]
          }
        }, {
          path: "/workflows/demo",
          name: VIEWS.DEMO,
          components: {
            default: NodeView,
            footer: DemoFooter
          },
          meta: {
            middleware: ["authenticated"],
            middlewareOptions: {
              authenticated: {
                bypass: () => {
                  return useSettingsStore().isPreviewMode;
                }
              }
            }
          }
        }, {
          path: "/workflow/:name/:nodeId?",
          name: VIEWS.WORKFLOW,
          components: {
            default: NodeView,
            header: MainHeader,
            sidebar: MainSidebar,
            footer: LogsPanel
          },
          meta: {
            nodeView: true,
            keepWorkflowAlive: true,
            middleware: ["authenticated"]
          }
        }, {
          path: "/workflow",
          redirect: "/workflow/new"
        }, {
          path: "/signin",
          name: VIEWS.SIGNIN,
          components: {
            default: SigninView
          },
          meta: {
            telemetry: {
              pageCategory: "auth"
            },
            middleware: ["guest"]
          }
        }, {
          path: "/signup",
          name: VIEWS.SIGNUP,
          components: {
            default: SignupView
          },
          meta: {
            telemetry: {
              pageCategory: "auth"
            },
            middleware: ["guest"]
          }
        }, {
          path: "/signout",
          name: VIEWS.SIGNOUT,
          components: {
            default: SignoutView
          },
          meta: {
            telemetry: {
              pageCategory: "auth"
            },
            middleware: ["authenticated"]
          }
        }, {
          path: "/oauth/consent",
          name: VIEWS.OAUTH_CONSENT,
          components: {
            default: OAuthConsentView
          },
          meta: {
            middleware: ["authenticated"]
          }
        }, {
          path: "/setup",
          name: VIEWS.SETUP,
          components: {
            default: SetupView
          },
          meta: {
            middleware: ["defaultUser"],
            telemetry: {
              pageCategory: "auth"
            }
          }
        }, {
          path: "/forgot-password",
          name: VIEWS.FORGOT_PASSWORD,
          components: {
            default: ForgotMyPasswordView
          },
          meta: {
            middleware: ["guest"],
            telemetry: {
              pageCategory: "auth"
            }
          }
        }, {
          path: "/change-password",
          name: VIEWS.CHANGE_PASSWORD,
          components: {
            default: ChangePasswordView
          },
          meta: {
            middleware: ["guest"],
            telemetry: {
              pageCategory: "auth"
            }
          }
        }, {
          path: "/settings",
          name: VIEWS.SETTINGS,
          component: SettingsView,
          props: true,
          redirect: () => {
            if (useSettingsStore().settings.hideUsagePage) return {
              name: VIEWS.PERSONAL_SETTINGS
            };
            return {
              name: VIEWS.USAGE
            };
          },
          children: [{
            path: "usage",
            name: VIEWS.USAGE,
            components: {
              settingsView: SettingsUsageAndPlan
            },
            meta: {
              middleware: ["authenticated", "custom"],
              middlewareOptions: {
                custom: () => {
                  return !useSettingsStore().settings.hideUsagePage;
                }
              },
              telemetry: {
                pageCategory: "settings",
                getProperties() {
                  return {
                    feature: "usage"
                  };
                }
              }
            }
          }, {
            path: "personal",
            name: VIEWS.PERSONAL_SETTINGS,
            components: {
              settingsView: SettingsPersonalView
            },
            meta: {
              middleware: ["authenticated"],
              telemetry: {
                pageCategory: "settings",
                getProperties() {
                  return {
                    feature: "personal"
                  };
                }
              }
            }
          }, {
            path: "users",
            name: VIEWS.USERS_SETTINGS,
            components: {
              settingsView: SettingsUsersView
            },
            meta: {
              middleware: ["authenticated", "rbac"],
              middlewareOptions: {
                rbac: {
                  scope: ["user:create", "user:update"]
                }
              },
              telemetry: {
                pageCategory: "settings",
                getProperties() {
                  return {
                    feature: "users"
                  };
                }
              }
            }
          }, {
            path: "project-roles",
            components: {
              settingsView: RouterView
            },
            children: [{
              path: "",
              name: VIEWS.PROJECT_ROLES_SETTINGS,
              component: async () => await __vitePreload(() => _context.import("./ProjectRolesView-legacy-Bq5gh6rm.js"), true               ? void 0 : void 0)
            }, {
              path: "new",
              name: VIEWS.PROJECT_NEW_ROLE,
              component: async () => await __vitePreload(() => _context.import("./ProjectRoleView-legacy-CQQgr6d5.js"), true               ? void 0 : void 0)
            }, {
              path: "edit/:roleSlug",
              name: VIEWS.PROJECT_ROLE_SETTINGS,
              component: async () => await __vitePreload(() => _context.import("./ProjectRoleView-legacy-CQQgr6d5.js"), true               ? void 0 : void 0)
            }],
            meta: {
              middleware: ["authenticated", "rbac", "custom"],
              middlewareOptions: {
                rbac: {
                  scope: ["role:manage"]
                },
                custom: () => {
                  return useEnvFeatureFlag().check.value("CUSTOM_ROLES");
                }
              },
              telemetry: {
                pageCategory: "settings",
                getProperties() {
                  return {
                    feature: "project-roles"
                  };
                }
              }
            }
          }, {
            path: "api",
            name: VIEWS.API_SETTINGS,
            components: {
              settingsView: SettingsApiView
            },
            meta: {
              middleware: ["authenticated"],
              telemetry: {
                pageCategory: "settings",
                getProperties() {
                  return {
                    feature: "api"
                  };
                }
              }
            }
          }, {
            path: "environments",
            name: VIEWS.SOURCE_CONTROL,
            components: {
              settingsView: SettingsSourceControl
            },
            meta: {
              middleware: ["authenticated", "rbac"],
              middlewareOptions: {
                rbac: {
                  scope: "sourceControl:manage"
                }
              },
              telemetry: {
                pageCategory: "settings",
                getProperties() {
                  return {
                    feature: "environments"
                  };
                }
              }
            }
          }, {
            path: "external-secrets",
            name: VIEWS.EXTERNAL_SECRETS_SETTINGS,
            components: {
              settingsView: SettingsExternalSecrets
            },
            meta: {
              middleware: ["authenticated", "rbac"],
              middlewareOptions: {
                rbac: {
                  scope: ["externalSecretsProvider:list", "externalSecretsProvider:update"]
                }
              },
              telemetry: {
                pageCategory: "settings",
                getProperties() {
                  return {
                    feature: "external-secrets"
                  };
                }
              }
            }
          }, {
            path: "sso",
            name: VIEWS.SSO_SETTINGS,
            components: {
              settingsView: SettingsSso
            },
            meta: {
              middleware: ["authenticated", "rbac"],
              middlewareOptions: {
                rbac: {
                  scope: "saml:manage"
                }
              },
              telemetry: {
                pageCategory: "settings",
                getProperties() {
                  return {
                    feature: "sso"
                  };
                }
              }
            }
          }, {
            path: "log-streaming",
            name: VIEWS.LOG_STREAMING_SETTINGS,
            components: {
              settingsView: SettingsLogStreamingView
            },
            meta: {
              middleware: ["authenticated", "rbac"],
              middlewareOptions: {
                rbac: {
                  scope: "logStreaming:manage"
                }
              },
              telemetry: {
                pageCategory: "settings"
              }
            }
          }, {
            path: "workers",
            name: VIEWS.WORKER_VIEW,
            components: {
              settingsView: WorkerView
            },
            meta: {
              middleware: ["authenticated"]
            }
          }, {
            path: "community-nodes",
            name: VIEWS.COMMUNITY_NODES,
            components: {
              settingsView: SettingsCommunityNodesView
            },
            meta: {
              middleware: ["authenticated", "rbac", "custom"],
              middlewareOptions: {
                rbac: {
                  scope: ["communityPackage:list", "communityPackage:update"]
                },
                custom: () => {
                  return useSettingsStore().isCommunityNodesFeatureEnabled;
                }
              },
              telemetry: {
                pageCategory: "settings"
              }
            }
          }, {
            path: "ldap",
            name: VIEWS.LDAP_SETTINGS,
            components: {
              settingsView: SettingsLdapView
            },
            meta: {
              middleware: ["authenticated", "rbac"],
              middlewareOptions: {
                rbac: {
                  scope: "ldap:manage"
                }
              }
            }
          }, {
            path: "provisioning",
            name: VIEWS.PROVISIONING_SETTINGS,
            components: {
              settingsView: SettingsProvisioningView
            },
            meta: {
              middleware: ["authenticated", "rbac", "custom"],
              middlewareOptions: {
                rbac: {
                  scope: "provisioning:manage"
                },
                custom: () => {
                  return usePostHog().isFeatureEnabled(SSO_JUST_IN_TIME_PROVSIONING_EXPERIMENT.name);
                }
              },
              telemetry: {
                pageCategory: "settings",
                getProperties() {
                  return {
                    feature: "provisioning"
                  };
                }
              }
            }
          }]
        }, {
          path: "/saml/onboarding",
          name: VIEWS.SAML_ONBOARDING,
          components: {
            default: SamlOnboarding
          },
          meta: {
            middleware: ["authenticated", "custom"],
            middlewareOptions: {
              custom: () => {
                const settingsStore = useSettingsStore();
                return useSSOStore().isEnterpriseSamlEnabled && !settingsStore.isCloudDeployment;
              }
            },
            telemetry: {
              pageCategory: "auth"
            }
          }
        }, ...projectsRoutes, {
          path: "/entity-not-found/:entityType(credential|workflow)",
          props: true,
          name: VIEWS.ENTITY_NOT_FOUND,
          components: {
            default: EntityNotFound,
            sidebar: MainSidebar
          }
        }, {
          path: "/entity-not-authorized/:entityType(credential|workflow)",
          props: true,
          name: VIEWS.ENTITY_UNAUTHORIZED,
          components: {
            default: EntityUnAuthorised,
            sidebar: MainSidebar
          }
        }, {
          path: "/:pathMatch(.*)*",
          name: VIEWS.NOT_FOUND,
          component: ErrorView,
          props: {
            messageKey: "error.pageNotFound",
            errorCode: 404,
            redirectTextKey: "error.goBack",
            redirectPage: VIEWS.HOMEPAGE
          },
          meta: {
            nodeView: true,
            telemetry: {
              disabled: true
            }
          }
        }];
        router = createRouter({
          history: createWebHistory(window.BASE_PATH ?? "/"),
          scrollBehavior(to, _, savedPosition) {
            if (savedPosition === null && to.name === VIEWS.TEMPLATES && to.meta?.setScrollPosition) to.meta.setScrollPosition(0);
          },
          routes: routes.map(withCanvasReadOnlyMeta)
        });
        router.beforeEach(async (to, from, next) => {
          try {
            /**
            * Initialize application core
            * This step executes before first route is loaded and is required for permission checks
            */
            await initializeCore();
            await initializeAuthenticatedFeatures(void 0, to.name);
            if (useSettingsStore().showSetupPage) {
              if (to.name === VIEWS.SETUP) return next();
              return next({
                name: VIEWS.SETUP
              });
            }
            /**
            * Verify user permissions for current route
            */
            const routeMiddleware = to.meta?.middleware ?? [];
            const routeMiddlewareOptions = to.meta?.middlewareOptions ?? {};
            for (const middlewareName of routeMiddleware) {
              let nextCalled = false;
              const middlewareNext = location => {
                next(location);
                nextCalled = true;
              };
              const middlewareOptions = routeMiddlewareOptions[middlewareName];
              const middlewareFn = middleware[middlewareName];
              await middlewareFn(to, from, middlewareNext, middlewareOptions);
              if (nextCalled) return;
            }
            return next();
          } catch (failure) {
            const settingsStore = useSettingsStore();
            if (failure instanceof MfaRequiredError && settingsStore.isMFAEnforced) if (to.name !== VIEWS.PERSONAL_SETTINGS) return next({
              name: VIEWS.PERSONAL_SETTINGS
            });else return next();
            if (isNavigationFailure(failure)) console.log(failure);else console.error(failure);
          }
        });
        router.afterEach((to, from) => {
          try {
            const telemetry = useTelemetry();
            const uiStore = useUIStore();
            const templatesStore = useTemplatesStore();
            /**
            * Run external hooks
            */
            useExternalHooks().run("main.routeChange", {
              from,
              to
            });
            /**
            * Track current view for telemetry
            */
            uiStore.currentView = to.name ?? "";
            if (to.meta?.templatesEnabled) templatesStore.setSessionId();else templatesStore.resetSessionId();
            telemetry.page(to);
            const {
              trackResourceOpened
            } = useRecentResources();
            trackResourceOpened(to);
          } catch (failure) {
            if (isNavigationFailure(failure)) console.log(failure);else console.error(failure);
          }
        });
        _export("t", router_default = router); //#endregion
      }
    };
  });
})();