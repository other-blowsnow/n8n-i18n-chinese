;
(function () {
  System.register(["./chunk-legacy-Re9CbdfL.js", "./vue.runtime.esm-bundler-legacy--Sn1h8On.js", "./_MapCache-legacy-BGDm4XBh.js", "./src-legacy-6DYpZVh_.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-BWv-BWgW.js", "./empty-legacy-ZG0-xpne.js", "./useTelemetry-legacy-z15msZ3G.js", "./useToast-legacy-BYJycbCO.js", "./constants-legacy-lM1Uv86G.js", "./_baseOrderBy-legacy-DT_yzgQM.js", "./useExternalHooks-legacy-D--WxRfr.js", "./npsSurvey.store-legacy-B5srzxcX.js", "./cloudPlan.store-legacy-CaAxcbYV.js", "./templates.store-legacy-dWApE3rc.js", "./nodeCreator.store-legacy-06_T1NV-.js", "./versions.store-legacy-GXtvQmrr.js", "./banners.store-legacy-CYgAZIH_.js", "./dataTable.store-legacy-ENA4UMK7.js", "./CredentialIcon-legacy-BDJvL2pe.js", "./TimeAgo-legacy-tR0vQn0D.js", "./roles.store-legacy-B7G0Jd_z.js", "./sso.store-legacy-DKeySsJP.js", "./insights.store-legacy-BA4cTmK7.js", "./mcp.constants-legacy-cy3RN44j.js", "./constants-legacy-CDt9VJ1s.js", "./chat.store-legacy-xVTW4QR1.js", "./useRecentResources-legacy-BOYKJL9I.js"], function (_export, _context) {
    "use strict";

    var __toESM, __commonJS, computed, toDisplayString, createElementBlock, init_dist, createCommentVNode, global, unref, ref, h, createVNode, defineComponent, createBlock, onMounted, withCtx, openBlock, createTextVNode, resolveComponent, normalizeClass, createBaseVNode, I18nT, useI18n, i18n, N8nText_default, N8nActionBox_default, N8nHeading_default, N8nActionToggle_default, N8nButton_default, N8nDataTableServer_default, N8nLoading_default, N8nTooltip_default, __vitePreload, __plugin_vue_export_helper_default, isNavigationFailure, createWebHistory, createRouter, RouterView, require_range, require_syntax, require___vite_browser_external, require_has_symbols, require_callBound, require_gopd, require_has_property_descriptors, require_hasown, require_call_bind, require_get_intrinsic, require_es_object_atoms, require_type, require_es_define_property, hasRole, useSettingsStore, useCredentialsStore, tryToParseNumber, useDocumentTitle, register, v4_default, isDefaultUser, isGuest, useUIStore, useRBACStore, useSourceControlStore, shouldEnableMfa, isAuthenticated, hasScope, useUsersStore, usePostHog, isEnterpriseFeatureEnabled, useNodeTypesStore, useTelemetry, useProjectsStore, useToast, DATA_TABLE_DETAILS, require_shams, ADD_DATA_TABLE_MODAL_KEY, require_safe_regex_test$1, DATA_TABLE_VIEW, require_is_regex, require_call_bound, VIEWS, require_is_callable, require_define_properties, require_callBound$1, getResourcePermissions, PROVIDER_CREDENTIAL_TYPE_MAP, EDITABLE_CANVAS_VIEWS, PROJECT_DATA_TABLES, EnterpriseEditionFeature, require_call_bind$1, MfaRequiredError, useRootStore, useExternalHooks, useNpsSurveyStore, useCloudPlanStore, useTemplatesStore, useCalloutHelpers, useVersionsStore, useBannersStore, useDataTableStore, CredentialIcon_default, TimeAgo_default, useRolesStore, useSSOStore, useInsightsStore, MCP_SETTINGS_VIEW, CHAT_MODEL_BY_ID_SELECTOR_MODAL_KEY, TOOLS_SELECTOR_MODAL_KEY, providerDisplayNames, CHAT_CREDENTIAL_SELECTOR_MODAL_KEY, CHAT_VIEW, CHAT_AGENTS_VIEW, CHAT_PROVIDER_SETTINGS_MODAL_KEY, CHAT_CONVERSATION_VIEW, CHAT_SETTINGS_VIEW, AGENT_EDITOR_MODAL_KEY, useChatStore, useRecentResources, __vite_style__, authenticatedMiddleware, enterpriseMiddleware, guestMiddleware, rbacMiddleware, roleMiddleware, customMiddleware, defaultUserMiddleware, middleware, require_isNaN, require_isFinite, require_isInteger, require_has_proto, require_ArrayCreate, require_IsArray$1, require_IsArray, require_Call, require_StringToBigInt, require_isPrimitive$1, require_isPrimitive, require_is_date_object, require_is_symbol, require_es2015, require_ToPrimitive, require_safe_regex_test, require_RequireObjectCoercible, require_ToString$1, require_implementation$2, require_polyfill$2, require_shim$2, require_string_prototype, require_StringToNumber, require_ToNumber, require_ToNumeric, require_lessThan$1, require_lessThan, require_IsLessThan, require_ToString, require_CompareArrayElements, require_IsPropertyKey, require_property_descriptor, require_IsAccessorDescriptor, require_IsExtensible, require_Type$1, require_Type, require_ToBoolean, require_IsCallable$1, require_ToPropertyDescriptor, require_SameValue, require_DefineOwnProperty, require_isFullyPopulatedPropertyDescriptor, require_fromPropertyDescriptor, require_FromPropertyDescriptor, require_IsDataDescriptor, require_IsGenericDescriptor, require_ValidateAndApplyPropertyDescriptor, require_OrdinaryDefineOwnProperty, require_CreateDataProperty, require_CreateDataPropertyOrThrow, require_object_inspect, require_Get, require_maxSafeInteger, require_floor, require_truncate, require_ToIntegerOrInfinity, require_ToLength, require_LengthOfArrayLike, require_HasProperty, require_IsCallable, require_isObject, require_isPropertyKey, require_HasOwnProperty, require_functions_have_names, require_implementation$1, require_polyfill$1, require_shim$1, require_function_prototype, require_isAbstractClosure, require_SortIndexedProperties, require_ToObject$1, require_ToObject, require_implementation, require_polyfill, require_es_shim_unscopables, require_shim, require_array_prototype, import_array_prototype, SourceControlInitializationErrorMessage_vue_vue_type_script_setup_true_lang_default, SourceControlInitializationErrorMessage_default, i18n$2, MainSidebar$3, DataTableView, DataTableDetailsView, DataTableModule, resources, MainSidebar$2, InsightsDashboard, InsightsModule, i18n$1, SettingsMCPView, MCPModule, _hoisted_1, TRUNCATE_MODELS_AFTER, ChatProvidersTable_vue_vue_type_script_setup_true_lang_default, container$1, tableContainer, actions, header, chatProvidersTable, menuIcon, providerCell, ChatProvidersTable_vue_vue_type_style_index_0_lang_module_default, cssModules$1, ChatProvidersTable_default, SettingsChatHubView_vue_vue_type_script_setup_true_lang_default, container, title, SettingsChatHubView_vue_vue_type_style_index_0_lang_module_default, cssModules, SettingsChatHubView_default, ChatSidebar, ChatView, ChatAgentsView, ChatModule, modules, registerModuleResources, registerModuleProjectTabs, registerModuleSettingsPages, checkModuleAvailability, registerModuleModals, registerModuleRoutes, state, authenticatedFeaturesInitialized, MainSidebar$1, WorkflowsView, CredentialsView, ProjectSettings, ExecutionsView, ProjectVariables, checkProjectAvailability, commonChildRoutes, commonChildRouteExtensions, projectsRoutes, ChangePasswordView, ErrorView, EntityNotFound, EntityUnAuthorised, OAuthConsentView, ForgotMyPasswordView, MainHeader, MainSidebar, LogsPanel, DemoFooter, NodeView, WorkflowExecutionsView, WorkflowExecutionsLandingPage, WorkflowExecutionsPreview, SettingsView, SettingsLdapView, SettingsPersonalView, SettingsUsersView, SettingsCommunityNodesView, SettingsApiView, SettingsLogStreamingView, SetupView, SigninView, SignupView, TemplatesCollectionView, TemplatesWorkflowView, SetupWorkflowFromTemplateView, TemplatesSearchView, SettingsUsageAndPlan, SettingsSso, SignoutView, SamlOnboarding, SettingsSourceControl, SettingsExternalSecrets, WorkerView, WorkflowHistory, WorkflowOnboardingView, EvaluationsView, TestRunDetailView, EvaluationRootView, PrebuiltAgentTemplatesView, MigrationReportView, MigrationRuleReportView, routes, router, router_default;
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
      const i18n$3 = useI18n();
      registerAuthenticationHooks();
      /**
      * Initialize stores
      */
      try {
        await settingsStore.initialize();
      } catch (error) {
        console.error("Failed to initialize settings store", error);
        toast.showToast({
          title: i18n$3.baseText("startupError"),
          message: i18n$3.baseText("startupError.message"),
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
      const i18n$3 = useI18n();
      const toast = useToast();
      const sourceControlStore = useSourceControlStore();
      const settingsStore = useSettingsStore();
      const rootStore = useRootStore();
      const nodeTypesStore = useNodeTypesStore();
      const cloudPlanStore = useCloudPlanStore();
      const projectsStore = useProjectsStore();
      const rolesStore = useRolesStore();
      const bannersStore = useBannersStore();
      const versionsStore = useVersionsStore();
      const dataTableStore = useDataTableStore();
      if (sourceControlStore.isEnterpriseSourceControlEnabled) try {
        await sourceControlStore.getPreferences();
      } catch (e) {
        toast.showMessage({
          title: i18n$3.baseText("settings.sourceControl.connection.error"),
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
      setters: [function (_chunkLegacy001Js) {
        __toESM = _chunkLegacy001Js.o;
        __commonJS = _chunkLegacy001Js.t;
      }, function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Cn;
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        init_dist = _vueRuntimeEsmBundlerLegacy003Js.Dn;
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        global = _vueRuntimeEsmBundlerLegacy003Js.En;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
        h = _vueRuntimeEsmBundlerLegacy003Js.L;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        onMounted = _vueRuntimeEsmBundlerLegacy003Js.Z;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        resolveComponent = _vueRuntimeEsmBundlerLegacy003Js.ot;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js.vn;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
      }, function (_MapCacheLegacy005Js) {
        I18nT = _MapCacheLegacy005Js._t;
        useI18n = _MapCacheLegacy005Js.gt;
        i18n = _MapCacheLegacy005Js.pt;
      }, function (_srcLegacy007Js) {
        N8nText_default = _srcLegacy007Js.Kn;
        N8nActionBox_default = _srcLegacy007Js.Ot;
        N8nHeading_default = _srcLegacy007Js.Wn;
        N8nActionToggle_default = _srcLegacy007Js.et;
        N8nButton_default = _srcLegacy007Js.qn;
        N8nDataTableServer_default = _srcLegacy007Js.s;
        N8nLoading_default = _srcLegacy007Js.tt;
        N8nTooltip_default = _srcLegacy007Js.yt;
      }, function (_preloadHelperLegacy00dJs) {
        __vitePreload = _preloadHelperLegacy00dJs.t;
      }, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {
        isNavigationFailure = _truncateLegacy00hJs._;
        createWebHistory = _truncateLegacy00hJs.g;
        createRouter = _truncateLegacy00hJs.h;
        RouterView = _truncateLegacy00hJs.m;
      }, function (_emptyLegacy00vJs) {
        require_range = _emptyLegacy00vJs.C;
        require_syntax = _emptyLegacy00vJs.S;
        require___vite_browser_external = _emptyLegacy00vJs.T;
        require_has_symbols = _emptyLegacy00vJs._;
        require_callBound = _emptyLegacy00vJs.a;
        require_gopd = _emptyLegacy00vJs.b;
        require_has_property_descriptors = _emptyLegacy00vJs.c;
        require_hasown = _emptyLegacy00vJs.d;
        require_call_bind = _emptyLegacy00vJs.o;
        require_get_intrinsic = _emptyLegacy00vJs.u;
        require_es_object_atoms = _emptyLegacy00vJs.w;
        require_type = _emptyLegacy00vJs.x;
        require_es_define_property = _emptyLegacy00vJs.y;
      }, function (_useTelemetryLegacy00HJs) {
        hasRole = _useTelemetryLegacy00HJs.$n;
        useSettingsStore = _useTelemetryLegacy00HJs.Bo;
        useCredentialsStore = _useTelemetryLegacy00HJs.Bt;
        tryToParseNumber = _useTelemetryLegacy00HJs.Ci;
        useDocumentTitle = _useTelemetryLegacy00HJs.Cn;
        register = _useTelemetryLegacy00HJs.Fi;
        v4_default = _useTelemetryLegacy00HJs.Io;
        isDefaultUser = _useTelemetryLegacy00HJs.Jn;
        isGuest = _useTelemetryLegacy00HJs.Kn;
        useUIStore = _useTelemetryLegacy00HJs.Ni;
        useRBACStore = _useTelemetryLegacy00HJs.Qn;
        useSourceControlStore = _useTelemetryLegacy00HJs.Tn;
        shouldEnableMfa = _useTelemetryLegacy00HJs.Xn;
        isAuthenticated = _useTelemetryLegacy00HJs.Yn;
        hasScope = _useTelemetryLegacy00HJs.Zn;
        useUsersStore = _useTelemetryLegacy00HJs.er;
        usePostHog = _useTelemetryLegacy00HJs.i;
        isEnterpriseFeatureEnabled = _useTelemetryLegacy00HJs.qn;
        useNodeTypesStore = _useTelemetryLegacy00HJs.rt;
        useTelemetry = _useTelemetryLegacy00HJs.t;
        useProjectsStore = _useTelemetryLegacy00HJs.wn;
      }, function (_useToastLegacy00JJs) {
        useToast = _useToastLegacy00JJs.t;
      }, function (_constantsLegacy00RJs) {
        DATA_TABLE_DETAILS = _constantsLegacy00RJs.Ar;
        require_shams = _constantsLegacy00RJs.Ba;
        ADD_DATA_TABLE_MODAL_KEY = _constantsLegacy00RJs.Er;
        require_safe_regex_test$1 = _constantsLegacy00RJs.Fa;
        DATA_TABLE_VIEW = _constantsLegacy00RJs.Fr;
        require_is_regex = _constantsLegacy00RJs.Ia;
        require_call_bound = _constantsLegacy00RJs.La;
        VIEWS = _constantsLegacy00RJs.No;
        require_is_callable = _constantsLegacy00RJs.Pa;
        require_define_properties = _constantsLegacy00RJs.Pi;
        require_callBound$1 = _constantsLegacy00RJs.Ra;
        getResourcePermissions = _constantsLegacy00RJs.To;
        PROVIDER_CREDENTIAL_TYPE_MAP = _constantsLegacy00RJs.Zr;
        EDITABLE_CANVAS_VIEWS = _constantsLegacy00RJs.jo;
        PROJECT_DATA_TABLES = _constantsLegacy00RJs.qr;
        EnterpriseEditionFeature = _constantsLegacy00RJs.sc;
        require_call_bind$1 = _constantsLegacy00RJs.za;
      }, function (_baseOrderByLegacy00XJs) {
        MfaRequiredError = _baseOrderByLegacy00XJs.a;
        useRootStore = _baseOrderByLegacy00XJs.r;
      }, function (_useExternalHooksLegacy011Js) {
        useExternalHooks = _useExternalHooksLegacy011Js.t;
      }, function (_npsSurveyStoreLegacy019Js) {
        useNpsSurveyStore = _npsSurveyStoreLegacy019Js.t;
      }, function (_cloudPlanStoreLegacy01bJs) {
        useCloudPlanStore = _cloudPlanStoreLegacy01bJs.t;
      }, function (_templatesStoreLegacy01dJs) {
        useTemplatesStore = _templatesStoreLegacy01dJs.t;
      }, function (_nodeCreatorStoreLegacy01rJs) {
        useCalloutHelpers = _nodeCreatorStoreLegacy01rJs._;
      }, function (_versionsStoreLegacy01JJs) {
        useVersionsStore = _versionsStoreLegacy01JJs.t;
      }, function (_bannersStoreLegacy01NJs) {
        useBannersStore = _bannersStoreLegacy01NJs.t;
      }, function (_dataTableStoreLegacy01PJs) {
        useDataTableStore = _dataTableStoreLegacy01PJs.t;
      }, function (_CredentialIconLegacy02jJs) {
        CredentialIcon_default = _CredentialIconLegacy02jJs.t;
      }, function (_TimeAgoLegacy02RJs) {
        TimeAgo_default = _TimeAgoLegacy02RJs.t;
      }, function (_rolesStoreLegacy02XJs) {
        useRolesStore = _rolesStoreLegacy02XJs.t;
      }, function (_ssoStoreLegacy037Js) {
        useSSOStore = _ssoStoreLegacy037Js.n;
      }, function (_insightsStoreLegacy03bJs) {
        useInsightsStore = _insightsStoreLegacy03bJs.t;
      }, function (_mcpConstantsLegacy03hJs) {
        MCP_SETTINGS_VIEW = _mcpConstantsLegacy03hJs.r;
      }, function (_constantsLegacy03jJs) {
        CHAT_MODEL_BY_ID_SELECTOR_MODAL_KEY = _constantsLegacy03jJs.a;
        TOOLS_SELECTOR_MODAL_KEY = _constantsLegacy03jJs.d;
        providerDisplayNames = _constantsLegacy03jJs.f;
        CHAT_CREDENTIAL_SELECTOR_MODAL_KEY = _constantsLegacy03jJs.i;
        CHAT_VIEW = _constantsLegacy03jJs.l;
        CHAT_AGENTS_VIEW = _constantsLegacy03jJs.n;
        CHAT_PROVIDER_SETTINGS_MODAL_KEY = _constantsLegacy03jJs.o;
        CHAT_CONVERSATION_VIEW = _constantsLegacy03jJs.r;
        CHAT_SETTINGS_VIEW = _constantsLegacy03jJs.s;
        AGENT_EDITOR_MODAL_KEY = _constantsLegacy03jJs.t;
      }, function (_chatStoreLegacy03lJs) {
        useChatStore = _chatStoreLegacy03lJs.t;
      }, function (_useRecentResourcesLegacy03pJs) {
        useRecentResources = _useRecentResourcesLegacy03pJs.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._container_i795b_123 {\n  margin-top: var(--spacing--sm);\n  margin-bottom: var(--spacing--xl);\n}\n._tableContainer_i795b_128 .table-pagination {\n  display: none;\n}\n._actions_i795b_132 {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing--xs);\n}\n._header_i795b_138 {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: var(--spacing--sm);\n}\n._chatProvidersTable_i795b_145 tr:last-child {\n  border-bottom: none !important;\n}\n._menuIcon_i795b_149 {\n  flex-shrink: 0;\n}\n._providerCell_i795b_153 {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing--xs);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._container_1g3bj_123 {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing--lg);\n}\n._title_1g3bj_129 {\n  margin-bottom: var(--spacing--sm);\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
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
        //#region ../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/helpers/isNaN.js
        require_isNaN = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/helpers/isNaN.js": (exports, module) => {
            module.exports = Number.isNaN || function isNaN$2(a) {
              return a !== a;
            };
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/helpers/isFinite.js
        require_isFinite = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/helpers/isFinite.js": (exports, module) => {
            var $isNaN$4 = require_isNaN();
            module.exports = function (x) {
              return (typeof x === "number" || typeof x === "bigint") && !$isNaN$4(x) && x !== Infinity && x !== -Infinity;
            };
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/helpers/isInteger.js
        require_isInteger = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/helpers/isInteger.js": (exports, module) => {
            var GetIntrinsic$6 = require_get_intrinsic();
            var $abs = GetIntrinsic$6("%Math.abs%");
            var $floor$2 = GetIntrinsic$6("%Math.floor%");
            var $isNaN$3 = require_isNaN();
            var $isFinite$1 = require_isFinite();
            module.exports = function isInteger$2(argument) {
              if (typeof argument !== "number" || $isNaN$3(argument) || !$isFinite$1(argument)) return false;
              var absValue = $abs(argument);
              return $floor$2(absValue) === absValue;
            };
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/has-proto@1.0.3/node_modules/has-proto/index.js
        require_has_proto = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/has-proto@1.0.3/node_modules/has-proto/index.js": (exports, module) => {
            var test = {
              __proto__: null,
              foo: {}
            };
            var $Object$1 = Object;
            /** @type {import('.')} */
            module.exports = function hasProto$1() {
              return {
                __proto__: test
              }.foo === test.foo && !(test instanceof $Object$1);
            };
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/2024/ArrayCreate.js
        require_ArrayCreate = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/2024/ArrayCreate.js": (exports, module) => {
            var GetIntrinsic$5 = require_get_intrinsic();
            var $ArrayPrototype = GetIntrinsic$5("%Array.prototype%");
            var $RangeError = require_range();
            var $SyntaxError$2 = require_syntax();
            var $TypeError$30 = require_type();
            var isInteger$1 = require_isInteger();
            var MAX_ARRAY_LENGTH = Math.pow(2, 32) - 1;
            var hasProto = require_has_proto()();
            var $setProto = GetIntrinsic$5("%Object.setPrototypeOf%", true) || (hasProto ? function (O, proto) {
              O.__proto__ = proto;
              return O;
            } : null);
            module.exports = function ArrayCreate$1(length) {
              if (!isInteger$1(length) || length < 0) throw new $TypeError$30("Assertion failed: `length` must be an integer Number >= 0");
              if (length > MAX_ARRAY_LENGTH) throw new $RangeError("length is greater than (2**32 - 1)");
              var proto = arguments.length > 1 ? arguments[1] : $ArrayPrototype;
              var A = [];
              if (proto !== $ArrayPrototype) {
                if (!$setProto) throw new $SyntaxError$2("ArrayCreate: a `proto` argument that is not `Array.prototype` is not supported in an environment that does not support setting the [[Prototype]]");
                $setProto(A, proto);
              }
              if (length !== 0) A.length = length;
              return A;
            };
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/helpers/IsArray.js
        require_IsArray$1 = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/helpers/IsArray.js": (exports, module) => {
            var $Array = require_get_intrinsic()("%Array%");
            var toStr$3 = !$Array.isArray && require_callBound()("Object.prototype.toString");
            module.exports = $Array.isArray || function IsArray$1(argument) {
              return toStr$3(argument) === "[object Array]";
            };
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/2024/IsArray.js
        require_IsArray = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/2024/IsArray.js": (exports, module) => {
            module.exports = require_IsArray$1();
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/2024/Call.js
        require_Call = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/2024/Call.js": (exports, module) => {
            var GetIntrinsic$4 = require_get_intrinsic();
            var callBound$6 = require_callBound();
            var $TypeError$29 = require_type();
            var IsArray = require_IsArray();
            var $apply = GetIntrinsic$4("%Reflect.apply%", true) || callBound$6("Function.prototype.apply");
            module.exports = function Call$1(F, V) {
              var argumentsList = arguments.length > 2 ? arguments[2] : [];
              if (!IsArray(argumentsList)) throw new $TypeError$29("Assertion failed: optional `argumentsList`, if provided, must be a List");
              return $apply(F, V, argumentsList);
            };
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/2024/StringToBigInt.js
        require_StringToBigInt = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/2024/StringToBigInt.js": (exports, module) => {
            var $BigInt = require_get_intrinsic()("%BigInt%", true);
            var $TypeError$28 = require_type();
            var $SyntaxError$1 = require_syntax();
            module.exports = function StringToBigInt$1(argument) {
              if (typeof argument !== "string") throw new $TypeError$28("`argument` must be a string");
              if (!$BigInt) throw new $SyntaxError$1("BigInts are not supported in this environment");
              try {
                return $BigInt(argument);
              } catch (e) {
                return;
              }
            };
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/helpers/isPrimitive.js
        require_isPrimitive$1 = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/helpers/isPrimitive.js": (exports, module) => {
            module.exports = function isPrimitive$4(value) {
              return value === null || typeof value !== "function" && typeof value !== "object";
            };
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/es-to-primitive@1.2.1/node_modules/es-to-primitive/helpers/isPrimitive.js
        require_isPrimitive = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/es-to-primitive@1.2.1/node_modules/es-to-primitive/helpers/isPrimitive.js": (exports, module) => {
            module.exports = function isPrimitive$4(value) {
              return value === null || typeof value !== "function" && typeof value !== "object";
            };
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/is-date-object@1.1.0/node_modules/is-date-object/index.js
        require_is_date_object = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/is-date-object@1.1.0/node_modules/is-date-object/index.js": (exports, module) => {
            var callBound$5 = require_call_bound();
            var getDay = callBound$5("Date.prototype.getDay");
            /** @type {import('.')} */
            var tryDateObject = function tryDateGetDayCall(value) {
              try {
                getDay(value);
                return true;
              } catch (e) {
                return false;
              }
            };
            /** @type {(value: unknown) => string} */
            var toStr$2 = callBound$5("Object.prototype.toString");
            var dateClass = "[object Date]";
            var hasToStringTag = require_shams()();
            /** @type {import('.')} */
            module.exports = function isDateObject(value) {
              if (typeof value !== "object" || value === null) return false;
              return hasToStringTag ? tryDateObject(value) : toStr$2(value) === dateClass;
            };
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/is-symbol@1.1.1/node_modules/is-symbol/index.js
        require_is_symbol = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/is-symbol@1.1.1/node_modules/is-symbol/index.js": (exports, module) => {
            var callBound$4 = require_call_bound();
            var $toString = callBound$4("Object.prototype.toString");
            var hasSymbols$1 = require_has_symbols()();
            var safeRegexTest = require_safe_regex_test$1();
            if (hasSymbols$1) {
              var $symToStr = callBound$4("Symbol.prototype.toString");
              var isSymString = safeRegexTest(/^Symbol\(.*\)$/);
              /** @type {(value: object) => value is Symbol} */
              var isSymbolObject = function isRealSymbolObject(value) {
                if (typeof value.valueOf() !== "symbol") return false;
                return isSymString($symToStr(value));
              };
              /** @type {import('.')} */
              module.exports = function isSymbol$2(value) {
                if (typeof value === "symbol") return true;
                if (!value || typeof value !== "object" || $toString(value) !== "[object Symbol]") return false;
                try {
                  return isSymbolObject(value);
                } catch (e) {
                  return false;
                }
              };
            } else /** @type {import('.')} */
              module.exports = function isSymbol$2(value) {
                return false;
              };
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/es-to-primitive@1.2.1/node_modules/es-to-primitive/es2015.js
        require_es2015 = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/es-to-primitive@1.2.1/node_modules/es-to-primitive/es2015.js": (exports, module) => {
            var hasSymbols = typeof Symbol === "function" && typeof Symbol.iterator === "symbol";
            var isPrimitive$3 = require_isPrimitive();
            var isCallable = require_is_callable();
            var isDate$1 = require_is_date_object();
            var isSymbol$1 = require_is_symbol();
            var ordinaryToPrimitive = function OrdinaryToPrimitive(O, hint) {
              if (typeof O === "undefined" || O === null) throw new TypeError("Cannot call method on " + O);
              if (typeof hint !== "string" || hint !== "number" && hint !== "string") throw new TypeError("hint must be \"string\" or \"number\"");
              var methodNames = hint === "string" ? ["toString", "valueOf"] : ["valueOf", "toString"];
              var method, result, i;
              for (i = 0; i < methodNames.length; ++i) {
                method = O[methodNames[i]];
                if (isCallable(method)) {
                  result = method.call(O);
                  if (isPrimitive$3(result)) return result;
                }
              }
              throw new TypeError("No default value");
            };
            var GetMethod = function GetMethod$1(O, P) {
              var func = O[P];
              if (func !== null && typeof func !== "undefined") {
                if (!isCallable(func)) throw new TypeError(func + " returned for property " + P + " of object " + O + " is not a function");
                return func;
              }
            };
            module.exports = function ToPrimitive$3(input) {
              if (isPrimitive$3(input)) return input;
              var hint = "default";
              if (arguments.length > 1) {
                if (arguments[1] === String) hint = "string";else if (arguments[1] === Number) hint = "number";
              }
              var exoticToPrim;
              if (hasSymbols) {
                if (Symbol.toPrimitive) exoticToPrim = GetMethod(input, Symbol.toPrimitive);else if (isSymbol$1(input)) exoticToPrim = Symbol.prototype.valueOf;
              }
              if (typeof exoticToPrim !== "undefined") {
                var result = exoticToPrim.call(input, hint);
                if (isPrimitive$3(result)) return result;
                throw new TypeError("unable to convert exotic object to primitive");
              }
              if (hint === "default" && (isDate$1(input) || isSymbol$1(input))) hint = "string";
              return ordinaryToPrimitive(input, hint === "default" ? "number" : hint);
            };
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/2024/ToPrimitive.js
        require_ToPrimitive = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/2024/ToPrimitive.js": (exports, module) => {
            var toPrimitive = require_es2015();
            module.exports = function ToPrimitive$3(input) {
              if (arguments.length > 1) return toPrimitive(input, arguments[1]);
              return toPrimitive(input);
            };
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/safe-regex-test@1.0.3/node_modules/safe-regex-test/index.js
        require_safe_regex_test = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/safe-regex-test@1.0.3/node_modules/safe-regex-test/index.js": (exports, module) => {
            var callBound$3 = require_callBound$1();
            var isRegex = require_is_regex();
            var $exec = callBound$3("RegExp.prototype.exec");
            var $TypeError$27 = require_type();
            module.exports = function regexTester$1(regex$1) {
              if (!isRegex(regex$1)) throw new $TypeError$27("`regex` must be a RegExp");
              return function test$1(s) {
                return $exec(regex$1, s) !== null;
              };
            };
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/es-object-atoms@1.1.1/node_modules/es-object-atoms/RequireObjectCoercible.js
        require_RequireObjectCoercible = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/es-object-atoms@1.1.1/node_modules/es-object-atoms/RequireObjectCoercible.js": (exports, module) => {
            var $TypeError$26 = require_type();
            /** @type {import('./RequireObjectCoercible')} */
            module.exports = function RequireObjectCoercible$3(value) {
              if (value == null) throw new $TypeError$26(arguments.length > 0 && arguments[1] || "Cannot call method on " + value);
              return value;
            };
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/es-abstract@1.24.0/node_modules/es-abstract/2024/ToString.js
        require_ToString$1 = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/es-abstract@1.24.0/node_modules/es-abstract/2024/ToString.js": (exports, module) => {
            var $String$1 = require_get_intrinsic()("%String%");
            var $TypeError$25 = require_type();
            module.exports = function ToString$4(argument) {
              if (typeof argument === "symbol") throw new $TypeError$25("Cannot convert a Symbol value to a string");
              return $String$1(argument);
            };
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/string.prototype.trim@1.2.9/node_modules/string.prototype.trim/implementation.js
        require_implementation$2 = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/string.prototype.trim@1.2.9/node_modules/string.prototype.trim/implementation.js": (exports, module) => {
            var RequireObjectCoercible$2 = require_RequireObjectCoercible();
            var ToString$3 = require_ToString$1();
            var $replace$1 = require_callBound$1()("String.prototype.replace");
            var mvsIsWS = /^\s$/.test("᠎");
            var leftWhitespace = mvsIsWS ? /^[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/ : /^[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/;
            var rightWhitespace = mvsIsWS ? /[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+$/ : /[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+$/;
            module.exports = function trim() {
              return $replace$1($replace$1(ToString$3(RequireObjectCoercible$2(this)), leftWhitespace, ""), rightWhitespace, "");
            };
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/string.prototype.trim@1.2.9/node_modules/string.prototype.trim/polyfill.js
        require_polyfill$2 = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/string.prototype.trim@1.2.9/node_modules/string.prototype.trim/polyfill.js": (exports, module) => {
            var implementation$5 = require_implementation$2();
            var zeroWidthSpace = "​";
            var mongolianVowelSeparator = "᠎";
            module.exports = function getPolyfill$6() {
              if (String.prototype.trim && zeroWidthSpace.trim() === zeroWidthSpace && mongolianVowelSeparator.trim() === mongolianVowelSeparator && ("_" + mongolianVowelSeparator).trim() === "_" + mongolianVowelSeparator && (mongolianVowelSeparator + "_").trim() === mongolianVowelSeparator + "_") return String.prototype.trim;
              return implementation$5;
            };
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/string.prototype.trim@1.2.9/node_modules/string.prototype.trim/shim.js
        require_shim$2 = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/string.prototype.trim@1.2.9/node_modules/string.prototype.trim/shim.js": (exports, module) => {
            var define$4 = require_define_properties();
            var getPolyfill$5 = require_polyfill$2();
            module.exports = function shimStringTrim() {
              var polyfill$1 = getPolyfill$5();
              define$4(String.prototype, {
                trim: polyfill$1
              }, {
                trim: function testTrim() {
                  return String.prototype.trim !== polyfill$1;
                }
              });
              return polyfill$1;
            };
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/string.prototype.trim@1.2.9/node_modules/string.prototype.trim/index.js
        require_string_prototype = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/string.prototype.trim@1.2.9/node_modules/string.prototype.trim/index.js": (exports, module) => {
            var callBind$2 = require_call_bind$1();
            var define$3 = require_define_properties();
            var RequireObjectCoercible$1 = require_RequireObjectCoercible();
            var implementation$4 = require_implementation$2();
            var getPolyfill$4 = require_polyfill$2();
            var shim$2 = require_shim$2();
            var bound$2 = callBind$2(getPolyfill$4());
            var boundMethod = function trim(receiver) {
              RequireObjectCoercible$1(receiver);
              return bound$2(receiver);
            };
            define$3(boundMethod, {
              getPolyfill: getPolyfill$4,
              implementation: implementation$4,
              shim: shim$2
            });
            module.exports = boundMethod;
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/2024/StringToNumber.js
        require_StringToNumber = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/2024/StringToNumber.js": (exports, module) => {
            var GetIntrinsic$3 = require_get_intrinsic();
            var $Number$3 = GetIntrinsic$3("%Number%");
            var $RegExp = GetIntrinsic$3("%RegExp%");
            var $TypeError$24 = require_type();
            var $parseInteger = GetIntrinsic$3("%parseInt%");
            var callBound$2 = require_callBound();
            var regexTester = require_safe_regex_test();
            var $strSlice = callBound$2("String.prototype.slice");
            var isBinary = regexTester(/^0b[01]+$/i);
            var isOctal = regexTester(/^0o[0-7]+$/i);
            var isInvalidHexLiteral = regexTester(/^[-+]0x[0-9a-f]+$/i);
            var hasNonWS = regexTester(new $RegExp("[" + ["", "​", "￾"].join("") + "]", "g"));
            var $trim = require_string_prototype();
            module.exports = function StringToNumber$1(argument) {
              if (typeof argument !== "string") throw new $TypeError$24("Assertion failed: `argument` is not a String");
              if (isBinary(argument)) return $Number$3($parseInteger($strSlice(argument, 2), 2));
              if (isOctal(argument)) return $Number$3($parseInteger($strSlice(argument, 2), 8));
              if (hasNonWS(argument) || isInvalidHexLiteral(argument)) return NaN;
              var trimmed = $trim(argument);
              if (trimmed !== argument) return StringToNumber$1(trimmed);
              return $Number$3(argument);
            };
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/2024/ToNumber.js
        require_ToNumber = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/2024/ToNumber.js": (exports, module) => {
            var GetIntrinsic$2 = require_get_intrinsic();
            var $TypeError$23 = require_type();
            var $Number$2 = GetIntrinsic$2("%Number%");
            var isPrimitive$2 = require_isPrimitive$1();
            var ToPrimitive$2 = require_ToPrimitive();
            var StringToNumber = require_StringToNumber();
            module.exports = function ToNumber$3(argument) {
              var value = isPrimitive$2(argument) ? argument : ToPrimitive$2(argument, $Number$2);
              if (typeof value === "symbol") throw new $TypeError$23("Cannot convert a Symbol value to a number");
              if (typeof value === "bigint") throw new $TypeError$23("Conversion from 'BigInt' to 'number' is not allowed.");
              if (typeof value === "string") return StringToNumber(value);
              return $Number$2(value);
            };
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/2024/ToNumeric.js
        require_ToNumeric = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/2024/ToNumeric.js": (exports, module) => {
            var $Number$1 = require_get_intrinsic()("%Number%");
            var isPrimitive$1 = require_isPrimitive$1();
            var ToPrimitive$1 = require_ToPrimitive();
            var ToNumber$2 = require_ToNumber();
            module.exports = function ToNumeric$1(argument) {
              var primValue = isPrimitive$1(argument) ? argument : ToPrimitive$1(argument, $Number$1);
              if (typeof primValue === "bigint") return primValue;
              return ToNumber$2(primValue);
            };
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/2024/BigInt/lessThan.js
        require_lessThan$1 = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/2024/BigInt/lessThan.js": (exports, module) => {
            var $TypeError$22 = require_type();
            module.exports = function BigIntLessThan$1(x, y) {
              if (typeof x !== "bigint" || typeof y !== "bigint") throw new $TypeError$22("Assertion failed: `x` and `y` arguments must be BigInts");
              return x < y;
            };
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/2024/Number/lessThan.js
        require_lessThan = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/2024/Number/lessThan.js": (exports, module) => {
            var $TypeError$21 = require_type();
            var isNaN$1 = require_isNaN();
            module.exports = function NumberLessThan$1(x, y) {
              if (typeof x !== "number" || typeof y !== "number") throw new $TypeError$21("Assertion failed: `x` and `y` arguments must be Numbers");
              if (isNaN$1(x) || isNaN$1(y)) return;
              return x < y;
            };
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/2024/IsLessThan.js
        require_IsLessThan = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/2024/IsLessThan.js": (exports, module) => {
            var GetIntrinsic$1 = require_get_intrinsic();
            var $Number = GetIntrinsic$1("%Number%");
            var $TypeError$20 = require_type();
            var min = GetIntrinsic$1("%Math.min%");
            var $isNaN$2 = require_isNaN();
            var $charCodeAt = require_callBound()("String.prototype.charCodeAt");
            var StringToBigInt = require_StringToBigInt();
            var ToNumeric = require_ToNumeric();
            var ToPrimitive = require_ToPrimitive();
            var BigIntLessThan = require_lessThan$1();
            var NumberLessThan = require_lessThan();
            module.exports = function IsLessThan$1(x, y, LeftFirst) {
              if (typeof LeftFirst !== "boolean") throw new $TypeError$20("Assertion failed: LeftFirst argument must be a Boolean");
              var px;
              var py;
              if (LeftFirst) {
                px = ToPrimitive(x, $Number);
                py = ToPrimitive(y, $Number);
              } else {
                py = ToPrimitive(y, $Number);
                px = ToPrimitive(x, $Number);
              }
              if (typeof px === "string" && typeof py === "string") {
                var lx = px.length;
                var ly = py.length;
                for (var i = 0; i < min(lx, ly); i++) {
                  var cx = $charCodeAt(px, i);
                  var cy = $charCodeAt(py, i);
                  if (cx < cy) return true;
                  if (cx > cy) return false;
                }
                return lx < ly;
              }
              var nx;
              var ny;
              if (typeof px === "bigint" && typeof py === "string") {
                ny = StringToBigInt(py);
                if (typeof ny === "undefined") return;
                return BigIntLessThan(px, ny);
              }
              if (typeof px === "string" && typeof py === "bigint") {
                nx = StringToBigInt(px);
                if (typeof nx === "undefined") return;
                return BigIntLessThan(nx, py);
              }
              nx = ToNumeric(px);
              ny = ToNumeric(py);
              if (typeof nx === typeof ny) return typeof nx === "number" ? NumberLessThan(nx, ny) : BigIntLessThan(nx, ny);
              if ($isNaN$2(nx) || $isNaN$2(ny)) return;
              if (nx === -Infinity || ny === Infinity) return true;
              if (nx === Infinity || ny === -Infinity) return false;
              return nx < ny;
            };
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/2024/ToString.js
        require_ToString = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/2024/ToString.js": (exports, module) => {
            var $String = require_get_intrinsic()("%String%");
            var $TypeError$19 = require_type();
            module.exports = function ToString$4(argument) {
              if (typeof argument === "symbol") throw new $TypeError$19("Cannot convert a Symbol value to a string");
              return $String(argument);
            };
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/2024/CompareArrayElements.js
        require_CompareArrayElements = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/2024/CompareArrayElements.js": (exports, module) => {
            var $TypeError$18 = require_type();
            var Call = require_Call();
            var IsLessThan = require_IsLessThan();
            var ToNumber$1 = require_ToNumber();
            var ToString$2 = require_ToString();
            var isNaN = require_isNaN();
            module.exports = function CompareArrayElements$1(x, y, compareFn) {
              if (typeof compareFn !== "function" && typeof compareFn !== "undefined") throw new $TypeError$18("Assertion failed: `compareFn` must be a function or undefined");
              if (typeof x === "undefined" && typeof y === "undefined") return 0;
              if (typeof x === "undefined") return 1;
              if (typeof y === "undefined") return -1;
              if (typeof compareFn !== "undefined") {
                var v = ToNumber$1(Call(compareFn, void 0, [x, y]));
                if (isNaN(v)) return 0;
                return v;
              }
              var xString = ToString$2(x);
              var yString = ToString$2(y);
              if (IsLessThan(xString, yString, true)) return -1;
              if (IsLessThan(yString, xString, true)) return 1;
              return 0;
            };
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/2024/IsPropertyKey.js
        require_IsPropertyKey = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/2024/IsPropertyKey.js": (exports, module) => {
            module.exports = function IsPropertyKey$6(argument) {
              return typeof argument === "string" || typeof argument === "symbol";
            };
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/helpers/records/property-descriptor.js
        require_property_descriptor = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/helpers/records/property-descriptor.js": (exports, module) => {
            var $TypeError$17 = require_type();
            var hasOwn$6 = require_hasown();
            var allowed = {
              __proto__: null,
              "[[Configurable]]": true,
              "[[Enumerable]]": true,
              "[[Get]]": true,
              "[[Set]]": true,
              "[[Value]]": true,
              "[[Writable]]": true
            };
            module.exports = function isPropertyDescriptor$7(Desc) {
              if (!Desc || typeof Desc !== "object") return false;
              for (var key in Desc) if (hasOwn$6(Desc, key) && !allowed[key]) return false;
              var isData = hasOwn$6(Desc, "[[Value]]") || hasOwn$6(Desc, "[[Writable]]");
              var IsAccessor = hasOwn$6(Desc, "[[Get]]") || hasOwn$6(Desc, "[[Set]]");
              if (isData && IsAccessor) throw new $TypeError$17("Property Descriptors may not be both accessor and data descriptors");
              return true;
            };
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/2024/IsAccessorDescriptor.js
        require_IsAccessorDescriptor = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/2024/IsAccessorDescriptor.js": (exports, module) => {
            var $TypeError$16 = require_type();
            var hasOwn$5 = require_hasown();
            var isPropertyDescriptor$6 = require_property_descriptor();
            module.exports = function IsAccessorDescriptor$3(Desc) {
              if (typeof Desc === "undefined") return false;
              if (!isPropertyDescriptor$6(Desc)) throw new $TypeError$16("Assertion failed: `Desc` must be a Property Descriptor");
              if (!hasOwn$5(Desc, "[[Get]]") && !hasOwn$5(Desc, "[[Set]]")) return false;
              return true;
            };
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/2024/IsExtensible.js
        require_IsExtensible = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/2024/IsExtensible.js": (exports, module) => {
            var GetIntrinsic = require_get_intrinsic();
            var $preventExtensions = GetIntrinsic("%Object.preventExtensions%", true);
            var $isExtensible = GetIntrinsic("%Object.isExtensible%", true);
            var isPrimitive = require_isPrimitive$1();
            module.exports = $preventExtensions ? function IsExtensible$1(obj) {
              return !isPrimitive(obj) && $isExtensible(obj);
            } : function IsExtensible$1(obj) {
              return !isPrimitive(obj);
            };
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/5/Type.js
        require_Type$1 = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/5/Type.js": (exports, module) => {
            module.exports = function Type$9(x) {
              if (x === null) return "Null";
              if (typeof x === "undefined") return "Undefined";
              if (typeof x === "function" || typeof x === "object") return "Object";
              if (typeof x === "number") return "Number";
              if (typeof x === "boolean") return "Boolean";
              if (typeof x === "string") return "String";
            };
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/2024/Type.js
        require_Type = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/2024/Type.js": (exports, module) => {
            var ES5Type = require_Type$1();
            module.exports = function Type$9(x) {
              if (typeof x === "symbol") return "Symbol";
              if (typeof x === "bigint") return "BigInt";
              return ES5Type(x);
            };
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/2024/ToBoolean.js
        require_ToBoolean = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/2024/ToBoolean.js": (exports, module) => {
            module.exports = function ToBoolean$1(value) {
              return !!value;
            };
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/2024/IsCallable.js
        require_IsCallable$1 = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/2024/IsCallable.js": (exports, module) => {
            module.exports = require_is_callable();
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/2024/ToPropertyDescriptor.js
        require_ToPropertyDescriptor = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/2024/ToPropertyDescriptor.js": (exports, module) => {
            var hasOwn$4 = require_hasown();
            var $TypeError$15 = require_type();
            var Type$8 = require_Type();
            var ToBoolean = require_ToBoolean();
            var IsCallable$2 = require_IsCallable$1();
            module.exports = function ToPropertyDescriptor$1(Obj) {
              if (Type$8(Obj) !== "Object") throw new $TypeError$15("ToPropertyDescriptor requires an object");
              var desc = {};
              if (hasOwn$4(Obj, "enumerable")) desc["[[Enumerable]]"] = ToBoolean(Obj.enumerable);
              if (hasOwn$4(Obj, "configurable")) desc["[[Configurable]]"] = ToBoolean(Obj.configurable);
              if (hasOwn$4(Obj, "value")) desc["[[Value]]"] = Obj.value;
              if (hasOwn$4(Obj, "writable")) desc["[[Writable]]"] = ToBoolean(Obj.writable);
              if (hasOwn$4(Obj, "get")) {
                var getter = Obj.get;
                if (typeof getter !== "undefined" && !IsCallable$2(getter)) throw new $TypeError$15("getter must be a function");
                desc["[[Get]]"] = getter;
              }
              if (hasOwn$4(Obj, "set")) {
                var setter = Obj.set;
                if (typeof setter !== "undefined" && !IsCallable$2(setter)) throw new $TypeError$15("setter must be a function");
                desc["[[Set]]"] = setter;
              }
              if ((hasOwn$4(desc, "[[Get]]") || hasOwn$4(desc, "[[Set]]")) && (hasOwn$4(desc, "[[Value]]") || hasOwn$4(desc, "[[Writable]]"))) throw new $TypeError$15("Invalid property descriptor. Cannot both specify accessors and a value or writable attribute");
              return desc;
            };
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/2024/SameValue.js
        require_SameValue = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/2024/SameValue.js": (exports, module) => {
            var $isNaN$1 = require_isNaN();
            module.exports = function SameValue$2(x, y) {
              if (x === y) {
                if (x === 0) return 1 / x === 1 / y;
                return true;
              }
              return $isNaN$1(x) && $isNaN$1(y);
            };
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/helpers/DefineOwnProperty.js
        require_DefineOwnProperty = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/helpers/DefineOwnProperty.js": (exports, module) => {
            var hasPropertyDescriptors = require_has_property_descriptors();
            var $defineProperty = require_es_define_property();
            var hasArrayLengthDefineBug = hasPropertyDescriptors.hasArrayLengthDefineBug();
            var isArray$1 = hasArrayLengthDefineBug && require_IsArray$1();
            var $isEnumerable = require_callBound()("Object.prototype.propertyIsEnumerable");
            module.exports = function DefineOwnProperty$1(IsDataDescriptor$2, SameValue$2, FromPropertyDescriptor$1, O, P, desc) {
              if (!$defineProperty) {
                if (!IsDataDescriptor$2(desc)) return false;
                if (!desc["[[Configurable]]"] || !desc["[[Writable]]"]) return false;
                if (P in O && $isEnumerable(O, P) !== !!desc["[[Enumerable]]"]) return false;
                var V = desc["[[Value]]"];
                O[P] = V;
                return SameValue$2(O[P], V);
              }
              if (hasArrayLengthDefineBug && P === "length" && "[[Value]]" in desc && isArray$1(O) && O.length !== desc["[[Value]]"]) {
                O.length = desc["[[Value]]"];
                return O.length === desc["[[Value]]"];
              }
              $defineProperty(O, P, FromPropertyDescriptor$1(desc));
              return true;
            };
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/helpers/isFullyPopulatedPropertyDescriptor.js
        require_isFullyPopulatedPropertyDescriptor = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/helpers/isFullyPopulatedPropertyDescriptor.js": (exports, module) => {
            var isPropertyDescriptor$5 = require_property_descriptor();
            module.exports = function isFullyPopulatedPropertyDescriptor$1(ES, Desc) {
              return isPropertyDescriptor$5(Desc) && typeof Desc === "object" && "[[Enumerable]]" in Desc && "[[Configurable]]" in Desc && (ES.IsAccessorDescriptor(Desc) || ES.IsDataDescriptor(Desc));
            };
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/helpers/fromPropertyDescriptor.js
        require_fromPropertyDescriptor = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/helpers/fromPropertyDescriptor.js": (exports, module) => {
            module.exports = function fromPropertyDescriptor$1(Desc) {
              if (typeof Desc === "undefined") return Desc;
              var obj = {};
              if ("[[Value]]" in Desc) obj.value = Desc["[[Value]]"];
              if ("[[Writable]]" in Desc) obj.writable = !!Desc["[[Writable]]"];
              if ("[[Get]]" in Desc) obj.get = Desc["[[Get]]"];
              if ("[[Set]]" in Desc) obj.set = Desc["[[Set]]"];
              if ("[[Enumerable]]" in Desc) obj.enumerable = !!Desc["[[Enumerable]]"];
              if ("[[Configurable]]" in Desc) obj.configurable = !!Desc["[[Configurable]]"];
              return obj;
            };
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/2024/FromPropertyDescriptor.js
        require_FromPropertyDescriptor = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/2024/FromPropertyDescriptor.js": (exports, module) => {
            var $TypeError$14 = require_type();
            var isPropertyDescriptor$4 = require_property_descriptor();
            var fromPropertyDescriptor = require_fromPropertyDescriptor();
            module.exports = function FromPropertyDescriptor$1(Desc) {
              if (typeof Desc !== "undefined" && !isPropertyDescriptor$4(Desc)) throw new $TypeError$14("Assertion failed: `Desc` must be a Property Descriptor");
              return fromPropertyDescriptor(Desc);
            };
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/2024/IsDataDescriptor.js
        require_IsDataDescriptor = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/2024/IsDataDescriptor.js": (exports, module) => {
            var $TypeError$13 = require_type();
            var hasOwn$3 = require_hasown();
            var isPropertyDescriptor$3 = require_property_descriptor();
            module.exports = function IsDataDescriptor$2(Desc) {
              if (typeof Desc === "undefined") return false;
              if (!isPropertyDescriptor$3(Desc)) throw new $TypeError$13("Assertion failed: `Desc` must be a Property Descriptor");
              if (!hasOwn$3(Desc, "[[Value]]") && !hasOwn$3(Desc, "[[Writable]]")) return false;
              return true;
            };
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/2024/IsGenericDescriptor.js
        require_IsGenericDescriptor = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/2024/IsGenericDescriptor.js": (exports, module) => {
            var $TypeError$12 = require_type();
            var IsAccessorDescriptor$2 = require_IsAccessorDescriptor();
            var IsDataDescriptor$1 = require_IsDataDescriptor();
            var isPropertyDescriptor$2 = require_property_descriptor();
            module.exports = function IsGenericDescriptor$1(Desc) {
              if (typeof Desc === "undefined") return false;
              if (!isPropertyDescriptor$2(Desc)) throw new $TypeError$12("Assertion failed: `Desc` must be a Property Descriptor");
              if (!IsAccessorDescriptor$2(Desc) && !IsDataDescriptor$1(Desc)) return true;
              return false;
            };
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/2024/ValidateAndApplyPropertyDescriptor.js
        require_ValidateAndApplyPropertyDescriptor = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/2024/ValidateAndApplyPropertyDescriptor.js": (exports, module) => {
            var $TypeError$11 = require_type();
            var DefineOwnProperty = require_DefineOwnProperty();
            var isFullyPopulatedPropertyDescriptor = require_isFullyPopulatedPropertyDescriptor();
            var isPropertyDescriptor$1 = require_property_descriptor();
            var FromPropertyDescriptor = require_FromPropertyDescriptor();
            var IsAccessorDescriptor$1 = require_IsAccessorDescriptor();
            var IsDataDescriptor = require_IsDataDescriptor();
            var IsGenericDescriptor = require_IsGenericDescriptor();
            var IsPropertyKey$5 = require_IsPropertyKey();
            var SameValue$1 = require_SameValue();
            var Type$7 = require_Type();
            module.exports = function ValidateAndApplyPropertyDescriptor$1(O, P, extensible, Desc, current) {
              var oType = Type$7(O);
              if (oType !== "Undefined" && oType !== "Object") throw new $TypeError$11("Assertion failed: O must be undefined or an Object");
              if (!IsPropertyKey$5(P)) throw new $TypeError$11("Assertion failed: P must be a Property Key");
              if (typeof extensible !== "boolean") throw new $TypeError$11("Assertion failed: extensible must be a Boolean");
              if (!isPropertyDescriptor$1(Desc)) throw new $TypeError$11("Assertion failed: Desc must be a Property Descriptor");
              if (typeof current !== "undefined" && !isPropertyDescriptor$1(current)) throw new $TypeError$11("Assertion failed: current must be a Property Descriptor, or undefined");
              if (typeof current === "undefined") {
                if (!extensible) return false;
                if (oType === "Undefined") return true;
                if (IsAccessorDescriptor$1(Desc)) return DefineOwnProperty(IsDataDescriptor, SameValue$1, FromPropertyDescriptor, O, P, Desc);
                return DefineOwnProperty(IsDataDescriptor, SameValue$1, FromPropertyDescriptor, O, P, {
                  "[[Configurable]]": !!Desc["[[Configurable]]"],
                  "[[Enumerable]]": !!Desc["[[Enumerable]]"],
                  "[[Value]]": Desc["[[Value]]"],
                  "[[Writable]]": !!Desc["[[Writable]]"]
                });
              }
              if (!isFullyPopulatedPropertyDescriptor({
                IsAccessorDescriptor: IsAccessorDescriptor$1,
                IsDataDescriptor
              }, current)) throw new $TypeError$11("`current`, when present, must be a fully populated and valid Property Descriptor");
              if (!current["[[Configurable]]"]) {
                if ("[[Configurable]]" in Desc && Desc["[[Configurable]]"]) return false;
                if ("[[Enumerable]]" in Desc && !SameValue$1(Desc["[[Enumerable]]"], current["[[Enumerable]]"])) return false;
                if (!IsGenericDescriptor(Desc) && !SameValue$1(IsAccessorDescriptor$1(Desc), IsAccessorDescriptor$1(current))) return false;
                if (IsAccessorDescriptor$1(current)) {
                  if ("[[Get]]" in Desc && !SameValue$1(Desc["[[Get]]"], current["[[Get]]"])) return false;
                  if ("[[Set]]" in Desc && !SameValue$1(Desc["[[Set]]"], current["[[Set]]"])) return false;
                } else if (!current["[[Writable]]"]) {
                  if ("[[Writable]]" in Desc && Desc["[[Writable]]"]) return false;
                  if ("[[Value]]" in Desc && !SameValue$1(Desc["[[Value]]"], current["[[Value]]"])) return false;
                }
              }
              if (oType !== "Undefined") {
                var configurable;
                var enumerable;
                if (IsDataDescriptor(current) && IsAccessorDescriptor$1(Desc)) {
                  configurable = ("[[Configurable]]" in Desc ? Desc : current)["[[Configurable]]"];
                  enumerable = ("[[Enumerable]]" in Desc ? Desc : current)["[[Enumerable]]"];
                  return DefineOwnProperty(IsDataDescriptor, SameValue$1, FromPropertyDescriptor, O, P, {
                    "[[Configurable]]": !!configurable,
                    "[[Enumerable]]": !!enumerable,
                    "[[Get]]": ("[[Get]]" in Desc ? Desc : current)["[[Get]]"],
                    "[[Set]]": ("[[Set]]" in Desc ? Desc : current)["[[Set]]"]
                  });
                } else if (IsAccessorDescriptor$1(current) && IsDataDescriptor(Desc)) {
                  configurable = ("[[Configurable]]" in Desc ? Desc : current)["[[Configurable]]"];
                  enumerable = ("[[Enumerable]]" in Desc ? Desc : current)["[[Enumerable]]"];
                  return DefineOwnProperty(IsDataDescriptor, SameValue$1, FromPropertyDescriptor, O, P, {
                    "[[Configurable]]": !!configurable,
                    "[[Enumerable]]": !!enumerable,
                    "[[Value]]": ("[[Value]]" in Desc ? Desc : current)["[[Value]]"],
                    "[[Writable]]": !!("[[Writable]]" in Desc ? Desc : current)["[[Writable]]"]
                  });
                }
                return DefineOwnProperty(IsDataDescriptor, SameValue$1, FromPropertyDescriptor, O, P, Desc);
              }
              return true;
            };
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/2024/OrdinaryDefineOwnProperty.js
        require_OrdinaryDefineOwnProperty = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/2024/OrdinaryDefineOwnProperty.js": (exports, module) => {
            var $gOPD = require_gopd();
            var $SyntaxError = require_syntax();
            var $TypeError$10 = require_type();
            var isPropertyDescriptor = require_property_descriptor();
            var IsAccessorDescriptor = require_IsAccessorDescriptor();
            var IsExtensible = require_IsExtensible();
            var IsPropertyKey$4 = require_IsPropertyKey();
            var ToPropertyDescriptor = require_ToPropertyDescriptor();
            var SameValue = require_SameValue();
            var Type$6 = require_Type();
            var ValidateAndApplyPropertyDescriptor = require_ValidateAndApplyPropertyDescriptor();
            module.exports = function OrdinaryDefineOwnProperty$1(O, P, Desc) {
              if (Type$6(O) !== "Object") throw new $TypeError$10("Assertion failed: O must be an Object");
              if (!IsPropertyKey$4(P)) throw new $TypeError$10("Assertion failed: P must be a Property Key");
              if (!isPropertyDescriptor(Desc)) throw new $TypeError$10("Assertion failed: Desc must be a Property Descriptor");
              if (!$gOPD) {
                if (IsAccessorDescriptor(Desc)) throw new $SyntaxError("This environment does not support accessor property descriptors.");
                var creatingNormalDataProperty = !(P in O) && Desc["[[Writable]]"] && Desc["[[Enumerable]]"] && Desc["[[Configurable]]"] && "[[Value]]" in Desc;
                var settingExistingDataProperty = P in O && (!("[[Configurable]]" in Desc) || Desc["[[Configurable]]"]) && (!("[[Enumerable]]" in Desc) || Desc["[[Enumerable]]"]) && (!("[[Writable]]" in Desc) || Desc["[[Writable]]"]) && "[[Value]]" in Desc;
                if (creatingNormalDataProperty || settingExistingDataProperty) {
                  O[P] = Desc["[[Value]]"];
                  return SameValue(O[P], Desc["[[Value]]"]);
                }
                throw new $SyntaxError("This environment does not support defining non-writable, non-enumerable, or non-configurable properties");
              }
              var desc = $gOPD(O, P);
              var current = desc && ToPropertyDescriptor(desc);
              return ValidateAndApplyPropertyDescriptor(O, P, IsExtensible(O), Desc, current);
            };
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/2024/CreateDataProperty.js
        require_CreateDataProperty = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/2024/CreateDataProperty.js": (exports, module) => {
            var $TypeError$9 = require_type();
            var IsPropertyKey$3 = require_IsPropertyKey();
            var OrdinaryDefineOwnProperty = require_OrdinaryDefineOwnProperty();
            var Type$5 = require_Type();
            module.exports = function CreateDataProperty$1(O, P, V) {
              if (Type$5(O) !== "Object") throw new $TypeError$9("Assertion failed: Type(O) is not Object");
              if (!IsPropertyKey$3(P)) throw new $TypeError$9("Assertion failed: IsPropertyKey(P) is not true");
              return OrdinaryDefineOwnProperty(O, P, {
                "[[Configurable]]": true,
                "[[Enumerable]]": true,
                "[[Value]]": V,
                "[[Writable]]": true
              });
            };
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/2024/CreateDataPropertyOrThrow.js
        require_CreateDataPropertyOrThrow = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/2024/CreateDataPropertyOrThrow.js": (exports, module) => {
            var $TypeError$8 = require_type();
            var CreateDataProperty = require_CreateDataProperty();
            var IsPropertyKey$2 = require_IsPropertyKey();
            var Type$4 = require_Type();
            module.exports = function CreateDataPropertyOrThrow$1(O, P, V) {
              if (Type$4(O) !== "Object") throw new $TypeError$8("Assertion failed: Type(O) is not Object");
              if (!IsPropertyKey$2(P)) throw new $TypeError$8("Assertion failed: IsPropertyKey(P) is not true");
              if (!CreateDataProperty(O, P, V)) throw new $TypeError$8("unable to create data property");
            };
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/object-inspect@1.13.4/node_modules/object-inspect/index.js
        require_object_inspect = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/object-inspect@1.13.4/node_modules/object-inspect/index.js": (exports, module) => {
            init_dist();
            var hasMap = typeof Map === "function" && Map.prototype;
            var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null;
            var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === "function" ? mapSizeDescriptor.get : null;
            var mapForEach = hasMap && Map.prototype.forEach;
            var hasSet = typeof Set === "function" && Set.prototype;
            var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null;
            var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === "function" ? setSizeDescriptor.get : null;
            var setForEach = hasSet && Set.prototype.forEach;
            var weakMapHas = typeof WeakMap === "function" && WeakMap.prototype ? WeakMap.prototype.has : null;
            var weakSetHas = typeof WeakSet === "function" && WeakSet.prototype ? WeakSet.prototype.has : null;
            var weakRefDeref = typeof WeakRef === "function" && WeakRef.prototype ? WeakRef.prototype.deref : null;
            var booleanValueOf = Boolean.prototype.valueOf;
            var objectToString = Object.prototype.toString;
            var functionToString = Function.prototype.toString;
            var $match = String.prototype.match;
            var $slice = String.prototype.slice;
            var $replace = String.prototype.replace;
            var $toUpperCase = String.prototype.toUpperCase;
            var $toLowerCase = String.prototype.toLowerCase;
            var $test = RegExp.prototype.test;
            var $concat = Array.prototype.concat;
            var $join = Array.prototype.join;
            var $arrSlice = Array.prototype.slice;
            var $floor$1 = Math.floor;
            var bigIntValueOf = typeof BigInt === "function" ? BigInt.prototype.valueOf : null;
            var gOPS = Object.getOwnPropertySymbols;
            var symToString = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? Symbol.prototype.toString : null;
            var hasShammedSymbols = typeof Symbol === "function" && typeof Symbol.iterator === "object";
            var toStringTag = typeof Symbol === "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? "object" : "symbol") ? Symbol.toStringTag : null;
            var isEnumerable = Object.prototype.propertyIsEnumerable;
            var gPO = (typeof Reflect === "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function (O) {
              return O.__proto__;
            } : null);
            function addNumericSeparator(num, str) {
              if (num === Infinity || num === -Infinity || num !== num || num && num > -1e3 && num < 1e3 || $test.call(/e/, str)) return str;
              var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
              if (typeof num === "number") {
                var int = num < 0 ? -$floor$1(-num) : $floor$1(num);
                if (int !== num) {
                  var intStr = String(int);
                  var dec = $slice.call(str, intStr.length + 1);
                  return $replace.call(intStr, sepRegex, "$&_") + "." + $replace.call($replace.call(dec, /([0-9]{3})/g, "$&_"), /_$/, "");
                }
              }
              return $replace.call(str, sepRegex, "$&_");
            }
            var utilInspect = require___vite_browser_external();
            var inspectCustom = utilInspect.custom;
            var inspectSymbol = isSymbol(inspectCustom) ? inspectCustom : null;
            var quotes = {
              __proto__: null,
              "double": "\"",
              single: "'"
            };
            var quoteREs = {
              __proto__: null,
              "double": /(["\\])/g,
              single: /(['\\])/g
            };
            module.exports = function inspect_(obj, options, depth, seen) {
              var opts = options || {};
              if (has(opts, "quoteStyle") && !has(quotes, opts.quoteStyle)) throw new TypeError("option \"quoteStyle\" must be \"single\" or \"double\"");
              if (has(opts, "maxStringLength") && (typeof opts.maxStringLength === "number" ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity : opts.maxStringLength !== null)) throw new TypeError("option \"maxStringLength\", if provided, must be a positive integer, Infinity, or `null`");
              var customInspect = has(opts, "customInspect") ? opts.customInspect : true;
              if (typeof customInspect !== "boolean" && customInspect !== "symbol") throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
              if (has(opts, "indent") && opts.indent !== null && opts.indent !== "	" && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)) throw new TypeError("option \"indent\" must be \"\\t\", an integer > 0, or `null`");
              if (has(opts, "numericSeparator") && typeof opts.numericSeparator !== "boolean") throw new TypeError("option \"numericSeparator\", if provided, must be `true` or `false`");
              var numericSeparator = opts.numericSeparator;
              if (typeof obj === "undefined") return "undefined";
              if (obj === null) return "null";
              if (typeof obj === "boolean") return obj ? "true" : "false";
              if (typeof obj === "string") return inspectString(obj, opts);
              if (typeof obj === "number") {
                if (obj === 0) return Infinity / obj > 0 ? "0" : "-0";
                var str = String(obj);
                return numericSeparator ? addNumericSeparator(obj, str) : str;
              }
              if (typeof obj === "bigint") {
                var bigIntStr = String(obj) + "n";
                return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
              }
              var maxDepth = typeof opts.depth === "undefined" ? 5 : opts.depth;
              if (typeof depth === "undefined") depth = 0;
              if (depth >= maxDepth && maxDepth > 0 && typeof obj === "object") return isArray(obj) ? "[Array]" : "[Object]";
              var indent = getIndent(opts, depth);
              if (typeof seen === "undefined") seen = [];else if (indexOf(seen, obj) >= 0) return "[Circular]";
              function inspect$1(value, from, noIndent) {
                if (from) {
                  seen = $arrSlice.call(seen);
                  seen.push(from);
                }
                if (noIndent) {
                  var newOpts = {
                    depth: opts.depth
                  };
                  if (has(opts, "quoteStyle")) newOpts.quoteStyle = opts.quoteStyle;
                  return inspect_(value, newOpts, depth + 1, seen);
                }
                return inspect_(value, opts, depth + 1, seen);
              }
              if (typeof obj === "function" && !isRegExp(obj)) {
                var name = nameOf(obj);
                var keys = arrObjKeys(obj, inspect$1);
                return "[Function" + (name ? ": " + name : " (anonymous)") + "]" + (keys.length > 0 ? " { " + $join.call(keys, ", ") + " }" : "");
              }
              if (isSymbol(obj)) {
                var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, "$1") : symToString.call(obj);
                return typeof obj === "object" && !hasShammedSymbols ? markBoxed(symString) : symString;
              }
              if (isElement(obj)) {
                var s = "<" + $toLowerCase.call(String(obj.nodeName));
                var attrs = obj.attributes || [];
                for (var i = 0; i < attrs.length; i++) s += " " + attrs[i].name + "=" + wrapQuotes(quote(attrs[i].value), "double", opts);
                s += ">";
                if (obj.childNodes && obj.childNodes.length) s += "...";
                s += "</" + $toLowerCase.call(String(obj.nodeName)) + ">";
                return s;
              }
              if (isArray(obj)) {
                if (obj.length === 0) return "[]";
                var xs = arrObjKeys(obj, inspect$1);
                if (indent && !singleLineValues(xs)) return "[" + indentedJoin(xs, indent) + "]";
                return "[ " + $join.call(xs, ", ") + " ]";
              }
              if (isError(obj)) {
                var parts = arrObjKeys(obj, inspect$1);
                if (!("cause" in Error.prototype) && "cause" in obj && !isEnumerable.call(obj, "cause")) return "{ [" + String(obj) + "] " + $join.call($concat.call("[cause]: " + inspect$1(obj.cause), parts), ", ") + " }";
                if (parts.length === 0) return "[" + String(obj) + "]";
                return "{ [" + String(obj) + "] " + $join.call(parts, ", ") + " }";
              }
              if (typeof obj === "object" && customInspect) {
                if (inspectSymbol && typeof obj[inspectSymbol] === "function" && utilInspect) return utilInspect(obj, {
                  depth: maxDepth - depth
                });else if (customInspect !== "symbol" && typeof obj.inspect === "function") return obj.inspect();
              }
              if (isMap(obj)) {
                var mapParts = [];
                if (mapForEach) mapForEach.call(obj, function (value, key) {
                  mapParts.push(inspect$1(key, obj, true) + " => " + inspect$1(value, obj));
                });
                return collectionOf("Map", mapSize.call(obj), mapParts, indent);
              }
              if (isSet(obj)) {
                var setParts = [];
                if (setForEach) setForEach.call(obj, function (value) {
                  setParts.push(inspect$1(value, obj));
                });
                return collectionOf("Set", setSize.call(obj), setParts, indent);
              }
              if (isWeakMap(obj)) return weakCollectionOf("WeakMap");
              if (isWeakSet(obj)) return weakCollectionOf("WeakSet");
              if (isWeakRef(obj)) return weakCollectionOf("WeakRef");
              if (isNumber(obj)) return markBoxed(inspect$1(Number(obj)));
              if (isBigInt(obj)) return markBoxed(inspect$1(bigIntValueOf.call(obj)));
              if (isBoolean(obj)) return markBoxed(booleanValueOf.call(obj));
              if (isString(obj)) return markBoxed(inspect$1(String(obj)));
              if (typeof window !== "undefined" && obj === window) return "{ [object Window] }";
              if (typeof globalThis !== "undefined" && obj === globalThis || typeof global !== "undefined" && obj === global) return "{ [object globalThis] }";
              if (!isDate(obj) && !isRegExp(obj)) {
                var ys = arrObjKeys(obj, inspect$1);
                var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
                var protoTag = obj instanceof Object ? "" : "null prototype";
                var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr$1(obj), 8, -1) : protoTag ? "Object" : "";
                var tag = (isPlainObject || typeof obj.constructor !== "function" ? "" : obj.constructor.name ? obj.constructor.name + " " : "") + (stringTag || protoTag ? "[" + $join.call($concat.call([], stringTag || [], protoTag || []), ": ") + "] " : "");
                if (ys.length === 0) return tag + "{}";
                if (indent) return tag + "{" + indentedJoin(ys, indent) + "}";
                return tag + "{ " + $join.call(ys, ", ") + " }";
              }
              return String(obj);
            };
            function wrapQuotes(s, defaultStyle, opts) {
              var quoteChar = quotes[opts.quoteStyle || defaultStyle];
              return quoteChar + s + quoteChar;
            }
            function quote(s) {
              return $replace.call(String(s), /"/g, "&quot;");
            }
            function canTrustToString(obj) {
              return !toStringTag || !(typeof obj === "object" && (toStringTag in obj || typeof obj[toStringTag] !== "undefined"));
            }
            function isArray(obj) {
              return toStr$1(obj) === "[object Array]" && canTrustToString(obj);
            }
            function isDate(obj) {
              return toStr$1(obj) === "[object Date]" && canTrustToString(obj);
            }
            function isRegExp(obj) {
              return toStr$1(obj) === "[object RegExp]" && canTrustToString(obj);
            }
            function isError(obj) {
              return toStr$1(obj) === "[object Error]" && canTrustToString(obj);
            }
            function isString(obj) {
              return toStr$1(obj) === "[object String]" && canTrustToString(obj);
            }
            function isNumber(obj) {
              return toStr$1(obj) === "[object Number]" && canTrustToString(obj);
            }
            function isBoolean(obj) {
              return toStr$1(obj) === "[object Boolean]" && canTrustToString(obj);
            }
            function isSymbol(obj) {
              if (hasShammedSymbols) return obj && typeof obj === "object" && obj instanceof Symbol;
              if (typeof obj === "symbol") return true;
              if (!obj || typeof obj !== "object" || !symToString) return false;
              try {
                symToString.call(obj);
                return true;
              } catch (e) {}
              return false;
            }
            function isBigInt(obj) {
              if (!obj || typeof obj !== "object" || !bigIntValueOf) return false;
              try {
                bigIntValueOf.call(obj);
                return true;
              } catch (e) {}
              return false;
            }
            var hasOwn$2 = Object.prototype.hasOwnProperty || function (key) {
              return key in this;
            };
            function has(obj, key) {
              return hasOwn$2.call(obj, key);
            }
            function toStr$1(obj) {
              return objectToString.call(obj);
            }
            function nameOf(f) {
              if (f.name) return f.name;
              var m = $match.call(functionToString.call(f), /^function\s*([\w$]+)/);
              if (m) return m[1];
              return null;
            }
            function indexOf(xs, x) {
              if (xs.indexOf) return xs.indexOf(x);
              for (var i = 0, l = xs.length; i < l; i++) if (xs[i] === x) return i;
              return -1;
            }
            function isMap(x) {
              if (!mapSize || !x || typeof x !== "object") return false;
              try {
                mapSize.call(x);
                try {
                  setSize.call(x);
                } catch (s) {
                  return true;
                }
                return x instanceof Map;
              } catch (e) {}
              return false;
            }
            function isWeakMap(x) {
              if (!weakMapHas || !x || typeof x !== "object") return false;
              try {
                weakMapHas.call(x, weakMapHas);
                try {
                  weakSetHas.call(x, weakSetHas);
                } catch (s) {
                  return true;
                }
                return x instanceof WeakMap;
              } catch (e) {}
              return false;
            }
            function isWeakRef(x) {
              if (!weakRefDeref || !x || typeof x !== "object") return false;
              try {
                weakRefDeref.call(x);
                return true;
              } catch (e) {}
              return false;
            }
            function isSet(x) {
              if (!setSize || !x || typeof x !== "object") return false;
              try {
                setSize.call(x);
                try {
                  mapSize.call(x);
                } catch (m) {
                  return true;
                }
                return x instanceof Set;
              } catch (e) {}
              return false;
            }
            function isWeakSet(x) {
              if (!weakSetHas || !x || typeof x !== "object") return false;
              try {
                weakSetHas.call(x, weakSetHas);
                try {
                  weakMapHas.call(x, weakMapHas);
                } catch (s) {
                  return true;
                }
                return x instanceof WeakSet;
              } catch (e) {}
              return false;
            }
            function isElement(x) {
              if (!x || typeof x !== "object") return false;
              if (typeof HTMLElement !== "undefined" && x instanceof HTMLElement) return true;
              return typeof x.nodeName === "string" && typeof x.getAttribute === "function";
            }
            function inspectString(str, opts) {
              if (str.length > opts.maxStringLength) {
                var remaining = str.length - opts.maxStringLength;
                var trailer = "... " + remaining + " more character" + (remaining > 1 ? "s" : "");
                return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
              }
              var quoteRE = quoteREs[opts.quoteStyle || "single"];
              quoteRE.lastIndex = 0;
              return wrapQuotes($replace.call($replace.call(str, quoteRE, "\\$1"), /[\x00-\x1f]/g, lowbyte), "single", opts);
            }
            function lowbyte(c) {
              var n = c.charCodeAt(0);
              var x = {
                8: "b",
                9: "t",
                10: "n",
                12: "f",
                13: "r"
              }[n];
              if (x) return "\\" + x;
              return "\\x" + (n < 16 ? "0" : "") + $toUpperCase.call(n.toString(16));
            }
            function markBoxed(str) {
              return "Object(" + str + ")";
            }
            function weakCollectionOf(type) {
              return type + " { ? }";
            }
            function collectionOf(type, size, entries, indent) {
              var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ", ");
              return type + " (" + size + ") {" + joinedEntries + "}";
            }
            function singleLineValues(xs) {
              for (var i = 0; i < xs.length; i++) if (indexOf(xs[i], "\n") >= 0) return false;
              return true;
            }
            function getIndent(opts, depth) {
              var baseIndent;
              if (opts.indent === "	") baseIndent = "	";else if (typeof opts.indent === "number" && opts.indent > 0) baseIndent = $join.call(Array(opts.indent + 1), " ");else return null;
              return {
                base: baseIndent,
                prev: $join.call(Array(depth + 1), baseIndent)
              };
            }
            function indentedJoin(xs, indent) {
              if (xs.length === 0) return "";
              var lineJoiner = "\n" + indent.prev + indent.base;
              return lineJoiner + $join.call(xs, "," + lineJoiner) + "\n" + indent.prev;
            }
            function arrObjKeys(obj, inspect$1) {
              var isArr = isArray(obj);
              var xs = [];
              if (isArr) {
                xs.length = obj.length;
                for (var i = 0; i < obj.length; i++) xs[i] = has(obj, i) ? inspect$1(obj[i], obj) : "";
              }
              var syms = typeof gOPS === "function" ? gOPS(obj) : [];
              var symMap;
              if (hasShammedSymbols) {
                symMap = {};
                for (var k = 0; k < syms.length; k++) symMap["$" + syms[k]] = syms[k];
              }
              for (var key in obj) {
                if (!has(obj, key)) continue;
                if (isArr && String(Number(key)) === key && key < obj.length) continue;
                if (hasShammedSymbols && symMap["$" + key] instanceof Symbol) continue;else if ($test.call(/[^\w$]/, key)) xs.push(inspect$1(key, obj) + ": " + inspect$1(obj[key], obj));else xs.push(key + ": " + inspect$1(obj[key], obj));
              }
              if (typeof gOPS === "function") {
                for (var j = 0; j < syms.length; j++) if (isEnumerable.call(obj, syms[j])) xs.push("[" + inspect$1(syms[j]) + "]: " + inspect$1(obj[syms[j]], obj));
              }
              return xs;
            }
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/2024/Get.js
        require_Get = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/2024/Get.js": (exports, module) => {
            var $TypeError$7 = require_type();
            var inspect = require_object_inspect();
            var IsPropertyKey$1 = require_IsPropertyKey();
            var Type$3 = require_Type();
            module.exports = function Get$2(O, P) {
              if (Type$3(O) !== "Object") throw new $TypeError$7("Assertion failed: Type(O) is not Object");
              if (!IsPropertyKey$1(P)) throw new $TypeError$7("Assertion failed: IsPropertyKey(P) is not true, got " + inspect(P));
              return O[P];
            };
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/helpers/maxSafeInteger.js
        require_maxSafeInteger = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/helpers/maxSafeInteger.js": (exports, module) => {
            module.exports = Number.MAX_SAFE_INTEGER || 9007199254740991;
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/2024/floor.js
        require_floor = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/2024/floor.js": (exports, module) => {
            var $floor = Math.floor;
            module.exports = function floor$1(x) {
              if (typeof x === "bigint") return x;
              return $floor(x);
            };
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/2024/truncate.js
        require_truncate = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/2024/truncate.js": (exports, module) => {
            var floor = require_floor();
            var $TypeError$6 = require_type();
            module.exports = function truncate$1(x) {
              if (typeof x !== "number" && typeof x !== "bigint") throw new $TypeError$6("argument must be a Number or a BigInt");
              var result = x < 0 ? -floor(-x) : floor(x);
              return result === 0 ? 0 : result;
            };
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/2024/ToIntegerOrInfinity.js
        require_ToIntegerOrInfinity = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/2024/ToIntegerOrInfinity.js": (exports, module) => {
            var ToNumber = require_ToNumber();
            var truncate = require_truncate();
            var $isNaN = require_isNaN();
            var $isFinite = require_isFinite();
            module.exports = function ToIntegerOrInfinity$1(value) {
              var number = ToNumber(value);
              if ($isNaN(number) || number === 0) return 0;
              if (!$isFinite(number)) return number;
              return truncate(number);
            };
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/2024/ToLength.js
        require_ToLength = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/2024/ToLength.js": (exports, module) => {
            var MAX_SAFE_INTEGER = require_maxSafeInteger();
            var ToIntegerOrInfinity = require_ToIntegerOrInfinity();
            module.exports = function ToLength$1(argument) {
              var len = ToIntegerOrInfinity(argument);
              if (len <= 0) return 0;
              if (len > MAX_SAFE_INTEGER) return MAX_SAFE_INTEGER;
              return len;
            };
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/2024/LengthOfArrayLike.js
        require_LengthOfArrayLike = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/2024/LengthOfArrayLike.js": (exports, module) => {
            var $TypeError$5 = require_type();
            var Get$1 = require_Get();
            var ToLength = require_ToLength();
            var Type$2 = require_Type();
            module.exports = function LengthOfArrayLike$1(obj) {
              if (Type$2(obj) !== "Object") throw new $TypeError$5("Assertion failed: `obj` must be an Object");
              return ToLength(Get$1(obj, "length"));
            };
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/2024/HasProperty.js
        require_HasProperty = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/2024/HasProperty.js": (exports, module) => {
            var $TypeError$4 = require_type();
            var IsPropertyKey = require_IsPropertyKey();
            var Type$1 = require_Type();
            module.exports = function HasProperty$1(O, P) {
              if (Type$1(O) !== "Object") throw new $TypeError$4("Assertion failed: `O` must be an Object");
              if (!IsPropertyKey(P)) throw new $TypeError$4("Assertion failed: `P` must be a Property Key");
              return P in O;
            };
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/es-abstract@1.24.0/node_modules/es-abstract/2023/IsCallable.js
        require_IsCallable = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/es-abstract@1.24.0/node_modules/es-abstract/2023/IsCallable.js": (exports, module) => {
            module.exports = require_is_callable();
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/es-object-atoms@1.1.1/node_modules/es-object-atoms/isObject.js
        require_isObject = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/es-object-atoms@1.1.1/node_modules/es-object-atoms/isObject.js": (exports, module) => {
            /** @type {import('./isObject')} */
            module.exports = function isObject$1(x) {
              return !!x && (typeof x === "function" || typeof x === "object");
            };
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/es-abstract@1.24.0/node_modules/es-abstract/helpers/isPropertyKey.js
        require_isPropertyKey = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/es-abstract@1.24.0/node_modules/es-abstract/helpers/isPropertyKey.js": (exports, module) => {
            module.exports = function isPropertyKey$1(argument) {
              return typeof argument === "string" || typeof argument === "symbol";
            };
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/es-abstract@1.24.0/node_modules/es-abstract/2023/HasOwnProperty.js
        require_HasOwnProperty = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/es-abstract@1.24.0/node_modules/es-abstract/2023/HasOwnProperty.js": (exports, module) => {
            var $TypeError$3 = require_type();
            var hasOwn$1 = require_hasown();
            var isObject = require_isObject();
            var isPropertyKey = require_isPropertyKey();
            module.exports = function HasOwnProperty$1(O, P) {
              if (!isObject(O)) throw new $TypeError$3("Assertion failed: `O` must be an Object");
              if (!isPropertyKey(P)) throw new $TypeError$3("Assertion failed: `P` must be a Property Key");
              return hasOwn$1(O, P);
            };
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/functions-have-names@1.2.3/node_modules/functions-have-names/index.js
        require_functions_have_names = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/functions-have-names@1.2.3/node_modules/functions-have-names/index.js": (exports, module) => {
            var functionsHaveNames$2 = function functionsHaveNames$3() {
              return typeof function f() {}.name === "string";
            };
            var gOPD = Object.getOwnPropertyDescriptor;
            if (gOPD) try {
              gOPD([], "length");
            } catch (e) {
              gOPD = null;
            }
            functionsHaveNames$2.functionsHaveConfigurableNames = function functionsHaveConfigurableNames() {
              if (!functionsHaveNames$2() || !gOPD) return false;
              var desc = gOPD(function () {}, "name");
              return !!desc && !!desc.configurable;
            };
            var $bind = Function.prototype.bind;
            functionsHaveNames$2.boundFunctionsHaveNames = function boundFunctionsHaveNames() {
              return functionsHaveNames$2() && typeof $bind === "function" && function f() {}.bind().name !== "";
            };
            module.exports = functionsHaveNames$2;
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/function.prototype.name@1.1.6/node_modules/function.prototype.name/implementation.js
        require_implementation$1 = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/function.prototype.name@1.1.6/node_modules/function.prototype.name/implementation.js": (exports, module) => {
            var IsCallable$1 = require_IsCallable();
            var HasOwnProperty = require_HasOwnProperty();
            var functionsHaveNames$1 = require_functions_have_names()();
            var callBound$1 = require_callBound$1();
            var $functionToString = callBound$1("Function.prototype.toString");
            var $stringMatch = callBound$1("String.prototype.match");
            var toStr = callBound$1("Object.prototype.toString");
            var classRegex = /^class /;
            var isClass = function isClassConstructor(fn) {
              if (IsCallable$1(fn)) return false;
              if (typeof fn !== "function") return false;
              try {
                return !!$stringMatch($functionToString(fn), classRegex);
              } catch (e) {}
              return false;
            };
            var regex = /\s*function\s+([^(\s]*)\s*/;
            var isIE68 = !(0 in [,]);
            var objectClass = "[object Object]";
            var ddaClass = "[object HTMLAllCollection]";
            var functionProto = Function.prototype;
            var isDDA = function isDocumentDotAll() {
              return false;
            };
            if (typeof document === "object") {
              var all = document.all;
              if (toStr(all) === toStr(document.all)) isDDA = function isDocumentDotAll(value) {
                if ((isIE68 || !value) && (typeof value === "undefined" || typeof value === "object")) try {
                  var str = toStr(value);
                  return (str === ddaClass || str === objectClass) && value("") == null;
                } catch (e) {}
                return false;
              };
            }
            module.exports = function getName() {
              if (isDDA(this) || !isClass(this) && !IsCallable$1(this)) throw new TypeError("Function.prototype.name sham getter called on non-function");
              if (functionsHaveNames$1 && HasOwnProperty(this, "name")) return this.name;
              if (this === functionProto) return "";
              var match = $stringMatch($functionToString(this), regex);
              return match && match[1];
            };
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/function.prototype.name@1.1.6/node_modules/function.prototype.name/polyfill.js
        require_polyfill$1 = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/function.prototype.name@1.1.6/node_modules/function.prototype.name/polyfill.js": (exports, module) => {
            var implementation$3 = require_implementation$1();
            module.exports = function getPolyfill$6() {
              return implementation$3;
            };
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/function.prototype.name@1.1.6/node_modules/function.prototype.name/shim.js
        require_shim$1 = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/function.prototype.name@1.1.6/node_modules/function.prototype.name/shim.js": (exports, module) => {
            var supportsDescriptors = require_define_properties().supportsDescriptors;
            var functionsHaveNames = require_functions_have_names()();
            var getPolyfill$3 = require_polyfill$1();
            var defineProperty = Object.defineProperty;
            var TypeErr = TypeError;
            module.exports = function shimName() {
              var polyfill$1 = getPolyfill$3();
              if (functionsHaveNames) return polyfill$1;
              if (!supportsDescriptors) throw new TypeErr("Shimming Function.prototype.name support requires ES5 property descriptor support.");
              var functionProto$1 = Function.prototype;
              defineProperty(functionProto$1, "name", {
                configurable: true,
                enumerable: false,
                get: function () {
                  var name = polyfill$1.call(this);
                  if (this !== functionProto$1) defineProperty(this, "name", {
                    configurable: true,
                    enumerable: false,
                    value: name,
                    writable: false
                  });
                  return name;
                }
              });
              return polyfill$1;
            };
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/function.prototype.name@1.1.6/node_modules/function.prototype.name/index.js
        require_function_prototype = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/function.prototype.name@1.1.6/node_modules/function.prototype.name/index.js": (exports, module) => {
            var define$2 = require_define_properties();
            var callBind$1 = require_call_bind$1();
            var implementation$2 = require_implementation$1();
            var getPolyfill$2 = require_polyfill$1();
            var shim$1 = require_shim$1();
            var bound$1 = callBind$1(implementation$2);
            define$2(bound$1, {
              getPolyfill: getPolyfill$2,
              implementation: implementation$2,
              shim: shim$1
            });
            module.exports = bound$1;
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/helpers/isAbstractClosure.js
        require_isAbstractClosure = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/helpers/isAbstractClosure.js": (exports, module) => {
            var functionName = require_function_prototype();
            var anon = functionName(function () {});
            module.exports = function isAbstractClosure$1(x) {
              return typeof x === "function" && (!x.prototype || functionName(x) === anon);
            };
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/2024/SortIndexedProperties.js
        require_SortIndexedProperties = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/2024/SortIndexedProperties.js": (exports, module) => {
            var callBound = require_callBound();
            var $TypeError$2 = require_type();
            var Get = require_Get();
            var HasProperty = require_HasProperty();
            var ToString$1 = require_ToString();
            var Type = require_Type();
            var isAbstractClosure = require_isAbstractClosure();
            var isInteger = require_isInteger();
            var $push = callBound("Array.prototype.push");
            var $sort = callBound("Array.prototype.sort");
            module.exports = function SortIndexedProperties$1(obj, len, SortCompare, holes) {
              if (Type(obj) !== "Object") throw new $TypeError$2("Assertion failed: Type(obj) is not Object");
              if (!isInteger(len) || len < 0) throw new $TypeError$2("Assertion failed: `len` must be an integer >= 0");
              if (!isAbstractClosure(SortCompare) || SortCompare.length !== 2) throw new $TypeError$2("Assertion failed: `SortCompare` must be an abstract closure taking 2 arguments");
              if (holes !== "skip-holes" && holes !== "read-through-holes") throw new $TypeError$2("Assertion failed: `holes` must be either `skip-holes` or `read-through-holes`");
              var items = [];
              var k = 0;
              while (k < len) {
                var Pk = ToString$1(k);
                if (holes === "skip-holes" ? HasProperty(obj, Pk) : true) $push(items, Get(obj, Pk));
                k += 1;
              }
              $sort(items, SortCompare);
              return items;
            };
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/es-object-atoms@1.1.1/node_modules/es-object-atoms/ToObject.js
        require_ToObject$1 = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/es-object-atoms@1.1.1/node_modules/es-object-atoms/ToObject.js": (exports, module) => {
            var $Object = require_es_object_atoms();
            var RequireObjectCoercible = require_RequireObjectCoercible();
            /** @type {import('./ToObject')} */
            module.exports = function ToObject$1(value) {
              RequireObjectCoercible(value);
              return $Object(value);
            };
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/2024/ToObject.js
        require_ToObject = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/es-abstract@1.23.3/node_modules/es-abstract/2024/ToObject.js": (exports, module) => {
            module.exports = require_ToObject$1();
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/array.prototype.tosorted@1.1.4/node_modules/array.prototype.tosorted/implementation.js
        require_implementation = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/array.prototype.tosorted@1.1.4/node_modules/array.prototype.tosorted/implementation.js": (exports, module) => {
            var ArrayCreate = require_ArrayCreate();
            var CompareArrayElements = require_CompareArrayElements();
            var CreateDataPropertyOrThrow = require_CreateDataPropertyOrThrow();
            var IsCallable = require_IsCallable$1();
            var LengthOfArrayLike = require_LengthOfArrayLike();
            var SortIndexedProperties = require_SortIndexedProperties();
            var ToObject = require_ToObject();
            var ToString = require_ToString();
            var $TypeError$1 = require_type();
            module.exports = function toSorted(comparefn) {
              if (typeof comparefn !== "undefined" && !IsCallable(comparefn)) throw new $TypeError$1("`comparefn` must be a function");
              var O = ToObject(this);
              var len = LengthOfArrayLike(O);
              var A = ArrayCreate(len);
              var SortCompare = function (x, y) {
                return CompareArrayElements(x, y, comparefn);
              };
              var sortedList = SortIndexedProperties(O, len, SortCompare, "read-through-holes");
              var j = 0;
              while (j < len) {
                CreateDataPropertyOrThrow(A, ToString(j), sortedList[j]);
                j += 1;
              }
              return A;
            };
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/array.prototype.tosorted@1.1.4/node_modules/array.prototype.tosorted/polyfill.js
        require_polyfill = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/array.prototype.tosorted@1.1.4/node_modules/array.prototype.tosorted/polyfill.js": (exports, module) => {
            var implementation$1 = require_implementation();
            module.exports = function getPolyfill$6() {
              return Array.prototype.toSorted || implementation$1;
            };
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/es-shim-unscopables@1.1.0/node_modules/es-shim-unscopables/index.js
        require_es_shim_unscopables = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/es-shim-unscopables@1.1.0/node_modules/es-shim-unscopables/index.js": (exports, module) => {
            var hasOwn = require_hasown();
            var hasUnscopables = typeof Symbol === "function" && typeof Symbol.unscopables === "symbol";
            var map = hasUnscopables && Array.prototype[Symbol.unscopables];
            var $TypeError = TypeError;
            /** @type {import('.')} */
            module.exports = function shimUnscopables$1(method) {
              if (typeof method !== "string" || !method) throw new $TypeError("method must be a non-empty string");
              if (!hasOwn(Array.prototype, method)) throw new $TypeError("method must be on Array.prototype");
              if (hasUnscopables && map) map[method] = true;
            };
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/array.prototype.tosorted@1.1.4/node_modules/array.prototype.tosorted/shim.js
        require_shim = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/array.prototype.tosorted@1.1.4/node_modules/array.prototype.tosorted/shim.js": (exports, module) => {
            var define$1 = require_define_properties();
            var shimUnscopables = require_es_shim_unscopables();
            var getPolyfill$1 = require_polyfill();
            module.exports = function shim$3() {
              var polyfill$1 = getPolyfill$1();
              define$1(Array.prototype, {
                toSorted: polyfill$1
              }, {
                toSorted: function () {
                  return Array.prototype.toSorted !== polyfill$1;
                }
              });
              shimUnscopables("toSorted");
              return polyfill$1;
            };
          }
        }); //#endregion
        //#region ../../../node_modules/.pnpm/array.prototype.tosorted@1.1.4/node_modules/array.prototype.tosorted/index.js
        require_array_prototype = /* @__PURE__ */__commonJS({
          "../../../node_modules/.pnpm/array.prototype.tosorted@1.1.4/node_modules/array.prototype.tosorted/index.js": (exports, module) => {
            var define = require_define_properties();
            var callBind = require_call_bind();
            var implementation = require_implementation();
            var getPolyfill = require_polyfill();
            var polyfill = getPolyfill();
            var shim = require_shim();
            var bound = callBind(polyfill);
            define(bound, {
              getPolyfill,
              implementation,
              shim
            });
            module.exports = bound;
          }
        }); //#endregion
        //#region src/app/polyfills.ts
        import_array_prototype = /* @__PURE__ */__toESM(require_array_prototype());
        if (!("randomUUID" in crypto)) Object.defineProperty(crypto, "randomUUID", {
          value: v4_default
        });

        //#endregion
        //#region src/features/integrations/sourceControl.ee/components/SourceControlInitializationErrorMessage.vue?vue&type=script&setup=true&lang.ts
        SourceControlInitializationErrorMessage_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "SourceControlInitializationErrorMessage",
          setup(__props) {
            const i18n$3 = useI18n();
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
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n$3).baseText("settings.sourceControl.connection.error.link")), 1)]),
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
        i18n$2 = useI18n();
        MainSidebar$3 = async () => await __vitePreload(() => _context.import("./MainSidebar-legacy-Kmlm4Ykk.js"), true               ? void 0 : void 0);
        DataTableView = async () => await __vitePreload(() => _context.import("./DataTableView-legacy-BRIl44DF.js"), true               ? void 0 : void 0);
        DataTableDetailsView = async () => await __vitePreload(() => _context.import("./DataTableDetailsView-legacy-2uxsNGkT.js"), true               ? void 0 : void 0);
        DataTableModule = {
          id: "data-table",
          name: "Data Table",
          description: "Manage and store data efficiently with the Data Table module.",
          icon: "database",
          modals: [{
            key: ADD_DATA_TABLE_MODAL_KEY,
            component: async () => await __vitePreload(() => _context.import("./AddDataTableModal-legacy-FjpowHZj.js"), true               ? void 0 : void 0),
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
            },
            beforeEnter: (_to, _from, next) => {
              const insightsStore = useInsightsStore();
              if (insightsStore.isSummaryEnabled) insightsStore.weeklySummary.execute();
              next();
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
              label: i18n$2.baseText("dataTable.dataTables"),
              value: DATA_TABLE_VIEW,
              to: {
                name: DATA_TABLE_VIEW
              }
            }],
            project: [{
              label: i18n$2.baseText("dataTable.dataTables"),
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
        MainSidebar$2 = async () => await __vitePreload(() => _context.import("./MainSidebar-legacy-Kmlm4Ykk.js"), true               ? void 0 : void 0);
        InsightsDashboard = async () => await __vitePreload(() => _context.import("./InsightsDashboard-legacy-CEhVwkhN.js"), true               ? void 0 : void 0);
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
        i18n$1 = useI18n();
        SettingsMCPView = async () => await __vitePreload(() => _context.import("./SettingsMCPView-legacy-k6zuaDF-.js"), true               ? void 0 : void 0);
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
            label: i18n$1.baseText("settings.mcp"),
            position: "top",
            route: {
              to: {
                name: MCP_SETTINGS_VIEW
              }
            }
          }]
        }; //#endregion
        //#region src/features/ai/chatHub/components/ChatProvidersTable.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1 = {
          key: 0
        };
        TRUNCATE_MODELS_AFTER = 4;
        ChatProvidersTable_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "ChatProvidersTable",
          props: {
            settings: {},
            loading: {
              type: Boolean
            },
            disabled: {
              type: Boolean
            }
          },
          emits: ["editProvider", "refresh"],
          setup(__props, {
            emit: __emit
          }) {
            const props = __props;
            const emit = __emit;
            const i18n$3 = useI18n();
            const tableHeaders = ref([{
              title: i18n$3.baseText("settings.chatHub.providers.table.provider"),
              key: "provider",
              width: 80,
              disableSort: true,
              value() {}
            }, {
              title: i18n$3.baseText("settings.chatHub.providers.table.models"),
              key: "models",
              width: 300,
              disableSort: true,
              value() {}
            }, {
              title: i18n$3.baseText("settings.chatHub.providers.table.updatedAt"),
              key: "updatedAt",
              disableSort: true,
              width: 80,
              value() {}
            }, {
              title: "",
              key: "actions",
              align: "end",
              width: 50,
              disableSort: true,
              value() {}
            }]);
            const tableActions = computed(() => [{
              label: i18n$3.baseText("settings.chatHub.providers.table.action.editProvider"),
              value: "editProvider",
              disabled: props.disabled
            }]);
            const settingItems = computed(() => {
              return props.settings ? Object.values(props.settings) : [];
            });
            const modelsText = settings => {
              if (!settings.enabled) return i18n$3.baseText("settings.chatHub.providers.table.models.disabled");else if (settings.allowedModels.length === 0) return i18n$3.baseText("settings.chatHub.providers.table.models.allModels");else {
                if (settings.allowedModels.length > TRUNCATE_MODELS_AFTER) return settings.allowedModels.slice(0, TRUNCATE_MODELS_AFTER).map(m => m.displayName).join(", ") + i18n$3.baseText("settings.chatHub.providers.table.models.more", {
                  interpolate: {
                    count: settings.allowedModels.length - TRUNCATE_MODELS_AFTER
                  }
                });
                return settings.allowedModels.map(m => m.displayName).join(", ");
              }
            };
            const onTableAction = (action, settings) => {
              switch (action) {
                case "editProvider":
                  emit("editProvider", settings);
                  break;
                default:
                  break;
              }
            };
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(_ctx.$style.tableContainer)
              }, [props.loading ? (openBlock(), createElementBlock("div", _hoisted_1, [createVNode(unref(N8nLoading_default), {
                loading: props.loading,
                variant: "h1",
                class: normalizeClass(_ctx.$style.header)
              }, null, 8, ["loading", "class"]), createVNode(unref(N8nLoading_default), {
                loading: props.loading,
                variant: "p",
                rows: 5,
                "shrink-last": false
              }, null, 8, ["loading"])])) : (openBlock(), createElementBlock("div", {
                key: 1,
                class: normalizeClass(_ctx.$style.container)
              }, [createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.header)
              }, [createVNode(unref(N8nHeading_default), {
                size: "medium",
                bold: true
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n$3).baseText("settings.chatHub.providers.table.title")), 1)]),
                _: 1
              }), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.actions)
              }, [createVNode(unref(N8nTooltip_default), {
                content: unref(i18n$3).baseText("settings.chatHub.providers.table.refresh.tooltip")
              }, {
                default: withCtx(() => [createVNode(unref(N8nButton_default), {
                  size: "small",
                  type: "tertiary",
                  icon: "refresh-cw",
                  square: true,
                  onClick: _cache[0] || (_cache[0] = $event => _ctx.$emit("refresh"))
                })]),
                _: 1
              }, 8, ["content"])], 2)], 2), !props.settings ? (openBlock(), createBlock(unref(N8nActionBox_default), {
                key: 0,
                heading: unref(i18n$3).baseText("settings.chatHub.providers.table.empty.title"),
                description: unref(i18n$3).baseText("settings.chatHub.providers.table.empty.description")
              }, null, 8, ["heading", "description"])) : (openBlock(), createBlock(unref(N8nDataTableServer_default), {
                key: 1,
                class: normalizeClass(_ctx.$style.chatProvidersTable),
                headers: tableHeaders.value,
                items: settingItems.value,
                "items-length": settingItems.value.length
              }, {
                [`item.provider`]: withCtx(({
                  item
                }) => [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.providerCell)
                }, [item.provider in unref(PROVIDER_CREDENTIAL_TYPE_MAP) ? (openBlock(), createBlock(CredentialIcon_default, {
                  key: 0,
                  "credential-type-name": unref(PROVIDER_CREDENTIAL_TYPE_MAP)[item.provider],
                  size: 16,
                  class: normalizeClass(_ctx.$style.menuIcon)
                }, null, 8, ["credential-type-name", "class"])) : createCommentVNode("", true), createVNode(unref(N8nText_default), {
                  bold: ""
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(providerDisplayNames)[item.provider]), 1)]),
                  _: 2
                }, 1024)], 2)]),
                [`item.models`]: withCtx(({
                  item
                }) => [item.allowedModels?.length && item.allowedModels?.length > TRUNCATE_MODELS_AFTER ? (openBlock(), createBlock(unref(N8nTooltip_default), {
                  key: 0,
                  content: item.allowedModels?.map(m => m.displayName).join(", ")
                }, {
                  default: withCtx(() => [createVNode(unref(N8nText_default), {
                    color: item.enabled ? "text-base" : "primary"
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(modelsText(item)), 1)]),
                    _: 2
                  }, 1032, ["color"])]),
                  _: 2
                }, 1032, ["content"])) : (openBlock(), createBlock(unref(N8nText_default), {
                  key: 1,
                  color: item.enabled ? "text-base" : "primary"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(modelsText(item)), 1)]),
                  _: 2
                }, 1032, ["color"]))]),
                [`item.updatedAt`]: withCtx(({
                  item
                }) => [createBaseVNode("span", null, [item.updatedAt ? (openBlock(), createBlock(TimeAgo_default, {
                  key: 0,
                  date: item.updatedAt
                }, null, 8, ["date"])) : (openBlock(), createBlock(unref(N8nText_default), {
                  key: 1
                }, {
                  default: withCtx(() => _cache[1] || (_cache[1] = [createTextVNode("-")])),
                  _: 1
                }))])]),
                [`item.actions`]: withCtx(({
                  item
                }) => [createVNode(unref(N8nActionToggle_default), {
                  placement: "bottom",
                  actions: tableActions.value,
                  theme: "dark",
                  onAction: $event => onTableAction($event, item)
                }, null, 8, ["actions", "onAction"])]),
                _: 2
              }, 1032, ["class", "headers", "items", "items-length"]))], 2))], 2);
            };
          }
        }); //#endregion
        //#region src/features/ai/chatHub/components/ChatProvidersTable.vue?vue&type=style&index=0&lang.module.scss
        container$1 = "_container_i795b_123";
        tableContainer = "_tableContainer_i795b_128";
        actions = "_actions_i795b_132";
        header = "_header_i795b_138";
        chatProvidersTable = "_chatProvidersTable_i795b_145";
        menuIcon = "_menuIcon_i795b_149";
        providerCell = "_providerCell_i795b_153";
        ChatProvidersTable_vue_vue_type_style_index_0_lang_module_default = {
          container: container$1,
          tableContainer,
          actions,
          header,
          chatProvidersTable,
          menuIcon,
          providerCell
        }; //#endregion
        //#region src/features/ai/chatHub/components/ChatProvidersTable.vue
        cssModules$1 = {
          "$style": ChatProvidersTable_vue_vue_type_style_index_0_lang_module_default
        };
        ChatProvidersTable_default = /* @__PURE__ */__plugin_vue_export_helper_default(ChatProvidersTable_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$1]]); //#endregion
        //#region src/features/ai/chatHub/SettingsChatHubView.vue?vue&type=script&setup=true&lang.ts
        SettingsChatHubView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "SettingsChatHubView",
          setup(__props) {
            const i18n$3 = useI18n();
            const toast = useToast();
            const documentTitle = useDocumentTitle();
            const chatStore = useChatStore();
            const usersStore = useUsersStore();
            const settingsStore = useSettingsStore();
            const credentialsStore = useCredentialsStore();
            const uiStore = useUIStore();
            const telemetry = useTelemetry();
            const isOwner = computed(() => usersStore.isInstanceOwner);
            const isAdmin = computed(() => usersStore.isAdmin);
            const disabled = computed(() => !isOwner.value && !isAdmin.value);
            const fetchSettings = async () => {
              try {
                await chatStore.fetchAllChatSettings();
              } catch (error) {
                toast.showError(error, i18n$3.baseText("settings.chatHub.providers.fetching.error"));
              }
            };
            function onEditProvider(settings) {
              uiStore.openModalWithData({
                name: CHAT_PROVIDER_SETTINGS_MODAL_KEY,
                data: {
                  provider: settings.provider,
                  disabled: disabled.value,
                  onNewCredential: provider => {
                    const credentialType = PROVIDER_CREDENTIAL_TYPE_MAP[provider];
                    telemetry.track("User opened Credential modal", {
                      credential_type: credentialType,
                      source: "chat_hub_settings",
                      new_credential: true,
                      workflow_id: null
                    });
                    uiStore.openNewCredential(credentialType);
                  },
                  onConfirm: async updatedSettings => {
                    try {
                      await chatStore.updateProviderSettings(updatedSettings);
                      toast.showMessage({
                        title: i18n$3.baseText("settings.chatHub.providers.updated.success"),
                        type: "success"
                      });
                      await settingsStore.getModuleSettings();
                    } catch (error) {
                      toast.showError(error, i18n$3.baseText("settings.chatHub.providers.updated.error"));
                    }
                  },
                  onCancel: () => {}
                }
              });
            }
            async function onRefreshWorkflows() {
              await fetchSettings();
            }
            onMounted(async () => {
              documentTitle.set(i18n$3.baseText("settings.chatHub"));
              if (!settingsStore.isChatFeatureEnabled) return;
              await fetchSettings();
              await credentialsStore.fetchAllCredentials();
              await credentialsStore.fetchCredentialTypes(false);
            });
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(_ctx.$style.container)
              }, [createVNode(unref(N8nHeading_default), {
                size: "2xlarge",
                class: normalizeClass(_ctx.$style.title)
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n$3).baseText("settings.chatHub")), 1)]),
                _: 1
              }, 8, ["class"]), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.container)
              }, [createVNode(ChatProvidersTable_default, {
                "data-test-id": "chat-providers-table",
                settings: unref(chatStore).settings,
                loading: unref(chatStore).settingsLoading,
                disabled: disabled.value,
                onEditProvider,
                onRefresh: onRefreshWorkflows
              }, null, 8, ["settings", "loading", "disabled"])], 2)], 2);
            };
          }
        }); //#endregion
        //#region src/features/ai/chatHub/SettingsChatHubView.vue?vue&type=style&index=0&lang.module.scss
        container = "_container_1g3bj_123";
        title = "_title_1g3bj_129";
        SettingsChatHubView_vue_vue_type_style_index_0_lang_module_default = {
          container,
          title
        }; //#endregion
        //#region src/features/ai/chatHub/SettingsChatHubView.vue
        cssModules = {
          "$style": SettingsChatHubView_vue_vue_type_style_index_0_lang_module_default
        };
        SettingsChatHubView_default = /* @__PURE__ */__plugin_vue_export_helper_default(SettingsChatHubView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]]); //#endregion
        //#region src/features/ai/chatHub/module.descriptor.ts
        ChatSidebar = async () => await __vitePreload(() => _context.import("./ChatSidebar-legacy-BJl2QFAD.js"), true               ? void 0 : void 0);
        ChatView = async () => await __vitePreload(() => _context.import("./ChatView-legacy-C4_yS0E4.js"), true               ? void 0 : void 0);
        ChatAgentsView = async () => await __vitePreload(() => _context.import("./ChatAgentsView-legacy-5Iy3wEeJ.js"), true               ? void 0 : void 0);
        ChatModule = {
          id: "chat-hub",
          name: "Chat",
          description: "Interact with various LLM models or your n8n AI agents.",
          icon: "chat",
          modals: [{
            key: TOOLS_SELECTOR_MODAL_KEY,
            component: async () => await __vitePreload(() => _context.import("./ToolsSelectorModal-legacy-D1s5q8bM.js"), true               ? void 0 : void 0),
            initialState: {
              open: false,
              data: {
                selected: [],
                onConfirm: () => {}
              }
            }
          }, {
            key: AGENT_EDITOR_MODAL_KEY,
            component: async () => await __vitePreload(() => _context.import("./AgentEditorModal-legacy-En6Izu9d.js"), true               ? void 0 : void 0),
            initialState: {
              open: false,
              data: {
                credentials: {},
                onClose: () => {},
                onCreateCustomAgent: () => {}
              }
            }
          }, {
            key: CHAT_CREDENTIAL_SELECTOR_MODAL_KEY,
            component: async () => await __vitePreload(() => _context.import("./CredentialSelectorModal-legacy-BnvyhJrm.js"), true               ? void 0 : void 0),
            initialState: {
              open: false,
              data: {
                provider: null,
                initialValue: null,
                onSelect: () => {},
                onCreateNew: () => {}
              }
            }
          }, {
            key: CHAT_MODEL_BY_ID_SELECTOR_MODAL_KEY,
            component: async () => await __vitePreload(() => _context.import("./ModelByIdSelectorModal-legacy-2V1PWhyS.js"), true               ? void 0 : void 0),
            initialState: {
              open: false,
              data: {
                provider: null,
                initialValue: null,
                onSelect: () => {}
              }
            }
          }, {
            key: CHAT_PROVIDER_SETTINGS_MODAL_KEY,
            component: async () => await __vitePreload(() => _context.import("./ProviderSettingsModal-legacy-CSDt81lr.js"), true               ? void 0 : void 0),
            initialState: {
              open: false,
              data: {
                provider: null,
                disabled: false,
                onConfirm: () => {},
                onCancel: () => {}
              }
            }
          }],
          routes: [{
            name: CHAT_VIEW,
            path: "/home/chat",
            components: {
              default: ChatView,
              sidebar: ChatSidebar
            },
            meta: {
              middleware: ["authenticated"],
              getProperties() {
                return {
                  feature: "chat-hub"
                };
              }
            }
          }, {
            name: CHAT_CONVERSATION_VIEW,
            path: "/home/chat/:id",
            components: {
              default: ChatView,
              sidebar: ChatSidebar
            },
            meta: {
              middleware: ["authenticated"],
              getProperties() {
                return {
                  feature: "chat-hub"
                };
              }
            }
          }, {
            name: CHAT_AGENTS_VIEW,
            path: "/home/chat/agents",
            components: {
              default: ChatAgentsView,
              sidebar: ChatSidebar
            },
            meta: {
              middleware: ["authenticated"],
              getProperties() {
                return {
                  feature: "chat-hub"
                };
              }
            }
          }, {
            path: "chat",
            name: CHAT_SETTINGS_VIEW,
            components: {
              settingsView: SettingsChatHubView_default
            },
            meta: {
              middleware: ["authenticated", "rbac"],
              middlewareOptions: {
                rbac: {
                  scope: ["chatHub:manage"]
                }
              },
              telemetry: {
                pageCategory: "settings",
                getProperties() {
                  return {
                    feature: "chat-hub"
                  };
                }
              }
            }
          }],
          projectTabs: {
            overview: [],
            project: []
          },
          resources: [{
            key: "chat",
            displayName: "Chat"
          }],
          settingsPages: [{
            id: "settings-chat-hub",
            icon: "message-circle",
            label: i18n.baseText("settings.chatHub"),
            position: "top",
            route: {
              to: {
                name: CHAT_SETTINGS_VIEW
              }
            }
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
          modules.forEach(module$1 => {
            module$1.resources?.forEach(resource => {
              registerResource(resource);
            });
          });
        };
        /**
        * Initialize modules project tabs (used in ProjectHeader), done in init.ts
        */
        registerModuleProjectTabs = () => {
          const uiStore = useUIStore();
          modules.forEach(module$1 => {
            if (module$1.projectTabs) {
              if (module$1.projectTabs.overview) uiStore.registerCustomTabs("overview", module$1.id, module$1.projectTabs.overview);
              if (module$1.projectTabs.project) uiStore.registerCustomTabs("project", module$1.id, module$1.projectTabs.project);
              if (module$1.projectTabs.shared) uiStore.registerCustomTabs("shared", module$1.id, module$1.projectTabs.shared);
            }
          });
        };
        /**
        * Initialize modules settings sidebar items (used in SettingsSidebar), done in init.ts
        */
        registerModuleSettingsPages = () => {
          const uiStore = useUIStore();
          modules.forEach(module$1 => {
            if (module$1.settingsPages && module$1.settingsPages.length > 0) uiStore.registerSettingsPages(module$1.id, module$1.settingsPages);
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
          modules.forEach(module$1 => {
            module$1.modals?.forEach(modalDef => {
              register(modalDef);
            });
          });
          useUIStore().initializeModalsFromRegistry();
        };
        /**
        * Initialize module routes, done in main.ts
        */
        _export("n", registerModuleRoutes = router$1 => {
          modules.forEach(module$1 => {
            module$1.routes?.forEach(route => {
              const enhancedRoute = {
                ...route,
                meta: {
                  ...route.meta,
                  moduleName: module$1.id,
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
        //#region src/app/init.ts
        state = {
          initialized: false
        };
        authenticatedFeaturesInitialized = false;
        MainSidebar$1 = async () => await __vitePreload(() => _context.import("./MainSidebar-legacy-Kmlm4Ykk.js"), true               ? void 0 : void 0);
        WorkflowsView = async () => await __vitePreload(() => _context.import("./WorkflowsView-legacy-0a1l48Bl.js"), true               ? void 0 : void 0);
        CredentialsView = async () => await __vitePreload(() => _context.import("./CredentialsView-legacy-DKOuH6tD.js"), true               ? void 0 : void 0);
        ProjectSettings = async () => await __vitePreload(() => _context.import("./ProjectSettings-legacy-nHHVJ1PF.js"), true               ? void 0 : void 0);
        ExecutionsView = async () => await __vitePreload(() => _context.import("./ExecutionsView-legacy-Cj3TJrZJ.js"), true               ? void 0 : void 0);
        ProjectVariables = async () => await __vitePreload(() => _context.import("./ProjectVariables-legacy-CYzH6u5A.js"), true               ? void 0 : void 0);
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
          beforeEnter: (_to, _from, next) => {
            const insightsStore = useInsightsStore();
            if (insightsStore.isSummaryEnabled) insightsStore.weeklySummary.execute();
            next();
          },
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
        //#region src/app/router.ts
        ChangePasswordView = async () => await __vitePreload(() => _context.import("./ChangePasswordView-legacy-DZwrcWxV.js"), true               ? void 0 : void 0);
        ErrorView = async () => await __vitePreload(() => _context.import("./ErrorView-legacy-Bsyi66mD.js"), true               ? void 0 : void 0);
        EntityNotFound = async () => await __vitePreload(() => _context.import("./EntityNotFound-legacy-BDfBZHq6.js"), true               ? void 0 : void 0);
        EntityUnAuthorised = async () => await __vitePreload(() => _context.import("./EntityUnAuthorised-legacy-BgVBpONn.js"), true               ? void 0 : void 0);
        OAuthConsentView = async () => await __vitePreload(() => _context.import("./OAuthConsentView-legacy-DBziktPO.js"), true               ? void 0 : void 0);
        ForgotMyPasswordView = async () => await __vitePreload(() => _context.import("./ForgotMyPasswordView-legacy-DSvUNOXc.js"), true               ? void 0 : void 0);
        MainHeader = async () => await __vitePreload(() => _context.import("./MainHeader-legacy-Btz8sY3K.js"), true               ? void 0 : void 0);
        MainSidebar = async () => await __vitePreload(() => _context.import("./MainSidebar-legacy-Kmlm4Ykk.js"), true               ? void 0 : void 0);
        LogsPanel = async () => await __vitePreload(() => _context.import("./LogsPanel-legacy-Dz79MlvS.js"), true               ? void 0 : void 0);
        DemoFooter = async () => await __vitePreload(() => _context.import("./DemoFooter-legacy-DEMbtQQd.js"), true               ? void 0 : void 0);
        NodeView = async () => await __vitePreload(() => _context.import("./NodeView-legacy-DvONQjoc.js"), true               ? void 0 : void 0);
        WorkflowExecutionsView = async () => await __vitePreload(() => _context.import("./WorkflowExecutionsView-legacy-Dphpabnc.js"), true               ? void 0 : void 0);
        WorkflowExecutionsLandingPage = async () => await __vitePreload(() => _context.import("./WorkflowExecutionsLandingPage-legacy-BIrt9VhP.js"), true               ? void 0 : void 0);
        WorkflowExecutionsPreview = async () => await __vitePreload(() => _context.import("./WorkflowExecutionsPreview-legacy-CSjcXTYi.js"), true               ? void 0 : void 0);
        SettingsView = async () => await __vitePreload(() => _context.import("./SettingsView-legacy-CSrPZAiS.js"), true               ? void 0 : void 0);
        SettingsLdapView = async () => await __vitePreload(() => _context.import("./SettingsLdapView-legacy-BJpdguzv.js"), true               ? void 0 : void 0);
        SettingsPersonalView = async () => await __vitePreload(() => _context.import("./SettingsPersonalView-legacy-COR-ZQKM.js"), true               ? void 0 : void 0);
        SettingsUsersView = async () => await __vitePreload(() => _context.import("./SettingsUsersView-legacy-AXABS_YB.js"), true               ? void 0 : void 0);
        SettingsCommunityNodesView = async () => await __vitePreload(() => _context.import("./SettingsCommunityNodesView-legacy-Du8h4PGj.js"), true               ? void 0 : void 0);
        SettingsApiView = async () => await __vitePreload(() => _context.import("./SettingsApiView-legacy-B_cQU7dF.js"), true               ? void 0 : void 0);
        SettingsLogStreamingView = async () => await __vitePreload(() => _context.import("./SettingsLogStreamingView-legacy-BF_hdPHK.js"), true               ? void 0 : void 0);
        SetupView = async () => await __vitePreload(() => _context.import("./SetupView-legacy-sGZC3fSH.js"), true               ? void 0 : void 0);
        SigninView = async () => await __vitePreload(() => _context.import("./SigninView-legacy-ChwXbaze.js"), true               ? void 0 : void 0);
        SignupView = async () => await __vitePreload(() => _context.import("./SignupView-legacy-DkWhj-lL.js"), true               ? void 0 : void 0);
        TemplatesCollectionView = async () => await __vitePreload(() => _context.import("./TemplatesCollectionView-legacy-Drh13mlg.js"), true               ? void 0 : void 0);
        TemplatesWorkflowView = async () => await __vitePreload(() => _context.import("./TemplatesWorkflowView-legacy-DIaiXKSj.js"), true               ? void 0 : void 0);
        SetupWorkflowFromTemplateView = async () => await __vitePreload(() => _context.import("./SetupWorkflowFromTemplateView-legacy-B89PB0uS.js"), true               ? void 0 : void 0);
        TemplatesSearchView = async () => await __vitePreload(() => _context.import("./TemplatesSearchView-legacy-bU4fdakQ.js"), true               ? void 0 : void 0);
        SettingsUsageAndPlan = async () => await __vitePreload(() => _context.import("./SettingsUsageAndPlan-legacy-Bo75bC8t.js"), true               ? void 0 : void 0);
        SettingsSso = async () => await __vitePreload(() => _context.import("./SettingsSso-legacy-DrK47mv3.js"), true               ? void 0 : void 0);
        SignoutView = async () => await __vitePreload(() => _context.import("./SignoutView-legacy-BqDRPfyN.js"), true               ? void 0 : void 0);
        SamlOnboarding = async () => await __vitePreload(() => _context.import("./SamlOnboarding-legacy-zmbmqBWg.js"), true               ? void 0 : void 0);
        SettingsSourceControl = async () => await __vitePreload(() => _context.import("./SettingsSourceControl-legacy-DnqRcjFB.js"), true               ? void 0 : void 0);
        SettingsExternalSecrets = async () => await __vitePreload(() => _context.import("./SettingsExternalSecrets-legacy-Vy1kWBoI.js"), true               ? void 0 : void 0);
        WorkerView = async () => await __vitePreload(() => _context.import("./WorkerView-legacy-Df7Mnwij.js"), true               ? void 0 : void 0);
        WorkflowHistory = async () => await __vitePreload(() => _context.import("./WorkflowHistory-legacy-Cqdv2OD0.js"), true               ? void 0 : void 0);
        WorkflowOnboardingView = async () => await __vitePreload(() => _context.import("./WorkflowOnboardingView-legacy-DvGFGmu2.js"), true               ? void 0 : void 0);
        EvaluationsView = async () => await __vitePreload(() => _context.import("./EvaluationsView-legacy-Bf32XvdY.js"), true               ? void 0 : void 0);
        TestRunDetailView = async () => await __vitePreload(() => _context.import("./TestRunDetailView-legacy-FOGnfRPf.js"), true               ? void 0 : void 0);
        EvaluationRootView = async () => await __vitePreload(() => _context.import("./EvaluationsRootView-legacy-DRX_pS9g.js"), true               ? void 0 : void 0);
        PrebuiltAgentTemplatesView = async () => await __vitePreload(() => _context.import("./PrebuiltAgentTemplatesView-legacy-BPYxwrwK.js"), true               ? void 0 : void 0);
        MigrationReportView = async () => await __vitePreload(() => _context.import("./MigrationRules-legacy-CleMN39O.js"), true               ? void 0 : void 0);
        MigrationRuleReportView = async () => await __vitePreload(() => _context.import("./MigrationRuleDetail-legacy-BjP_ueX4.js"), true               ? void 0 : void 0);
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
            middleware: ["authenticated"]
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
            path: "migration-report",
            components: {
              settingsView: RouterView
            },
            children: [{
              path: "",
              name: VIEWS.MIGRATION_REPORT,
              component: MigrationReportView
            }, {
              path: ":migrationRuleId",
              name: VIEWS.MIGRATION_RULE_REPORT,
              component: MigrationRuleReportView,
              props: true
            }],
            meta: {
              middleware: ["authenticated", "rbac"],
              middlewareOptions: {
                rbac: {
                  scope: ["breakingChanges:list"]
                }
              },
              telemetry: {
                pageCategory: "settings",
                getProperties() {
                  return {
                    feature: "migration-report"
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
              component: async () => await __vitePreload(() => _context.import("./ProjectRolesView-legacy-B4YJEifH.js"), true               ? void 0 : void 0)
            }, {
              path: "new",
              name: VIEWS.PROJECT_NEW_ROLE,
              component: async () => await __vitePreload(() => _context.import("./ProjectRoleView-legacy-CmK3P6PT.js"), true               ? void 0 : void 0)
            }, {
              path: "edit/:roleSlug",
              name: VIEWS.PROJECT_ROLE_SETTINGS,
              component: async () => await __vitePreload(() => _context.import("./ProjectRoleView-legacy-CmK3P6PT.js"), true               ? void 0 : void 0)
            }],
            meta: {
              middleware: ["authenticated", "rbac"],
              middlewareOptions: {
                rbac: {
                  scope: ["role:manage"]
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