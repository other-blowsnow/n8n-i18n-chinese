;
(function () {
  System.register(["./chunk-legacy-Re9CbdfL.js", "./vue.runtime.esm-bundler-legacy--Sn1h8On.js", "./_MapCache-legacy-DHBQRRQG.js", "./src-legacy-Bos09xer.js", "./en-legacy-DJK4SpPN.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-BIn0keUI.js", "./icon-legacy-CIK-lB61.js", "./overlay-legacy-B0b_K0kO.js", "./empty-legacy-ZG0-xpne.js", "./useMessage-legacy-BdVFquy4.js", "./useTelemetry-legacy-CqPMRSSw.js", "./useToast-legacy-BExpsCTi.js", "./sanitize-html-legacy-B93rGWi4.js", "./CalendarDate-legacy-BUvNgcoo.js", "./path-browserify-legacy-PZw06cM9.js", "./constants-legacy-7i-p8Q83.js", "./merge-legacy-y9V-HyOw.js", "./assistant.store-legacy-DYtdKUYg.js", "./_baseOrderBy-legacy-BktlFW96.js", "./dateformat-legacy-C4HUJTCr.js", "./useDebounce-legacy-KtnINwEe.js", "./useExternalHooks-legacy-DAimL5by.js", "./useStyles-legacy-E8NPEyeD.js", "./npsSurvey.store-legacy-B1YzgCUi.js", "./cloudPlan.store-legacy-DZDCwxzb.js", "./templates.store-legacy-sX7PVeAe.js", "./focusPanel.store-legacy-WkMhKz3s.js", "./useWorkflowSaving-legacy-BFUB_zl0.js", "./retry-legacy-CTwsGM7o.js", "./executions.store-legacy-BaIYxkfK.js", "./useRunWorkflow-legacy-BCrAw3fm.js", "./usePinnedData-legacy-C2_lNu6m.js", "./nodeCreator.store-legacy-ClrARTgu.js", "./nodeIcon-legacy-DNazPV7p.js", "./useClipboard-legacy-Du1kdRcU.js", "./useCanvasOperations-legacy-BcFAMD9u.js", "./folders.store-legacy-KRiXeR1A.js", "./NodeIcon-legacy-3DGovIp_.js", "./KeyboardShortcutTooltip-legacy-DjUpZPe-.js", "./versions.store-legacy-Bif3-3_C.js", "./usePageRedirectionHelper-legacy-Jjfhks9b.js", "./banners.store-legacy-AbpT6bmM.js", "./dataTable.store-legacy-DHg0WAFT.js", "./ProjectIcon-legacy-CN9AeG6u.js", "./CredentialIcon-legacy-BNm3IfGT.js", "./schemaPreview.store-legacy-DX-Fb6xk.js", "./FileSaver.min-legacy-D7uxxng5.js", "./EnterpriseEdition.ee-legacy-N3PLvt71.js", "./TimeAgo-legacy-CJbrDEH2.js", "./roles.store-legacy-BZneEk9K.js", "./SaveButton-legacy-CPkxsQhp.js", "./TagsDropdown-legacy-F3b-IM2L.js", "./WorkflowTagsDropdown-legacy-DA54xak_.js", "./sso.store-legacy-B78a9rkh.js", "./router-legacy-DMMBObQd.js", "./insights.store-legacy-DnI3Ai2V.js", "./insights.constants-legacy-CQF1GF20.js", "./insights.utils-legacy-YE5fp2p6.js", "./mcp.constants-legacy-BkbTHrFy.js", "./constants-legacy-DjFSod4r.js", "./chat.store-legacy-zhhYNgMQ.js", "./fileUtils-legacy-BbiGYBne.js", "./useRecentResources-legacy-DeWuUvW1.js", "./useMcp-legacy-BpV48GRn.js", "./useWorkflowActivate-legacy-qCRmLf5j.js", "./WorkflowActivationErrorMessage-legacy-BYrF9RGO.js", "./utils-legacy-CABLNf_l.js", "./ProjectBreadcrumb-legacy-Bfsl3k6O.js", "./WorkflowActivator-legacy-BWG7pk1u.js", "./PushConnectionTracker-legacy-Bs1HxsPD.js", "./useWorkflowsCache-legacy-D0rX5Rkv.js", "./useBeforeUnload-legacy-DYr094ub.js", "./usePushConnection-legacy--F8b4Q6Q.js", "./aiTemplatesStarterCollection.store-legacy-DYkQT14N.js", "./readyToRun.store-legacy-DXCdWlgV.js"], function (_export, _context) {
    "use strict";

    var __toESM, hasOwn, computed, toDisplayString, createElementBlock, createCommentVNode, nextTick, unref, ref, onBeforeUnmount, h, createVNode, defineComponent, createBlock, onMounted, Fragment, watch, renderSlot, normalizeStyle, withCtx, useCssModule, hyphenate, openBlock, renderList, createTextVNode, useTemplateRef, resolveComponent, vShow, onBeforeMount, init_shared_esm_bundler, normalizeClass, createBaseVNode, withDirectives, I18nT, useI18n, useLocalStorage, useDocumentVisibility, N8nButton_default, N8nRadioButtons_default, N8nIcon_default, N8nInputLabel_default, SuggestedActions_default, N8nInlineTextEdit_default, N8nBadge_default, N8nUserStack_default, N8nTooltip_default, N8nActionDropdown_default, N8nTag_default, N8nPopoverReka_default, N8nIconButton_default, N8nInput_default, __vitePreload, __plugin_vue_export_helper_default, useRouter, createEventBus, useRoute, useMessage, useSourceControlStore, useProjectsStore, useUIStore, PROJECT_MOVE_RESOURCE_MODAL, nodeViewEventBus, ProjectTypes, ResourceType, useDocumentTitle, useSettingsStore, getActivatableTriggerNodes, useTagsStore, useNDVStore, useNodeTypesStore, STORES, usePostHog, useWorkflowHelpers, useUsersStore, useWorkflowsStore, hasPermission, telemetry, useEvaluationStore, useTelemetry, getBannerRowHeight, useToast, LOCAL_STORAGE_HIDE_GITHUB_STAR_BUTTON, WORKFLOW_MENU_ACTIONS, TIME_SAVED_DOCS_URL, MAIN_HEADER_TABS, VIEWS, getResourcePermissions, TIME, DUPLICATE_MODAL_KEY, IMPORT_WORKFLOW_URL_MODAL_KEY, ERROR_WORKFLOW_DOCS_URL, EnterpriseEditionFeature, WORKFLOW_HISTORY_VERSION_UNPUBLISH, IS_DRAFT_PUBLISH_ENABLED, N8N_MAIN_GITHUB_REPO_URL, WORKFLOW_SHARE_MODAL_KEY, PLACEHOLDER_EMPTY_WORKFLOW_ID, STICKY_NODE_TYPE, WORKFLOW_ACTIVE_MODAL_KEY, TIME_SAVED_NODE_EXPERIMENT, TIME_SAVED_NODE_TYPE, MODAL_CONFIRM, MAX_WORKFLOW_NAME_LENGTH, EVALUATIONS_DOCS_URL, WORKFLOW_PUBLISH_MODAL_KEY, WORKFLOW_SETTINGS_MODAL_KEY, defineStore, useRootStore, require_debounce, useDebounce, useNpsSurveyStore, useWorkflowSaving, useExecutionsStore, usePushConnectionStore, useFoldersStore, usePageRedirectionHelper, useBannersStore, require_FileSaver_min, EnterpriseEdition_ee_default, TimeAgo_default, SaveButton_default, WorkflowTagsDropdown_default, router_default, MCP_DOCS_PAGE_URL, MCP_SETTINGS_VIEW, useMcp, useWorkflowActivate, generateVersionName, getLastPublishedVersion, FolderBreadcrumbs_default, WorkflowActivator_default, PushConnectionTracker_default, useWorkflowSettingsCache, useBeforeUnload, usePushConnection, __vite_style__, TabBar_vue_vue_type_script_setup_true_lang_default, container$5, TabBar_vue_vue_type_style_index_0_lang_module_default, cssModules$7, TabBar_default, BREAKPOINT_SM, BREAKPOINT_MD, BREAKPOINT_LG, BREAKPOINT_XL, BreakpointsObserver_vue_vue_type_script_setup_true_lang_default, BreakpointsObserver_default, WorkflowProductionChecklist_vue_vue_type_script_setup_true_lang_default, WorkflowProductionChecklist_default, IntersectionObserver_vue_vue_type_script_setup_true_lang_default, IntersectionObserver_default, IntersectionObserved_vue_vue_type_script_setup_true_lang_default, IntersectionObserved_default, import_debounce, _hoisted_1$2, _hoisted_2$2, TagsContainer_vue_vue_type_script_setup_true_lang_default, TagsContainer_default, WorkflowTagsContainer_vue_vue_type_script_setup_true_lang_default, WorkflowTagsContainer_default, HEARTBEAT_INTERVAL, useCollaborationStore, CollaborationPane_vue_vue_type_script_setup_true_lang_default, container$4, CollaborationPane_vue_vue_type_style_index_0_lang_module_default, cssModules$6, CollaborationPane_default, _hoisted_1$1, _hoisted_2$1, WorkflowHistoryButton_vue_vue_type_script_setup_true_lang_default, WorkflowHistoryButton_default, INVALID_CHARS_REGEX, ZERO_WIDTH_CHARS_REGEX, UNICODE_SPACES_REGEX, LEADING_TRAILING_DOTS_SPACES_REGEX, WINDOWS_RESERVED_NAMES, DEFAULT_FALLBACK_NAME, MAX_FILENAME_LENGTH, sanitizeFilename, import_FileSaver_min, getWorkflowId, ActionsDropdownMenu_vue_vue_type_script_setup_true_lang_default, deleteItem, group$1, hiddenInput, ActionsDropdownMenu_vue_vue_type_style_index_0_lang_module_default, cssModules$5, ActionsDropdownMenu_default, WorkflowHeaderActions_vue_vue_type_script_setup_true_lang_default, container$3, activator, group, disabledShareButton, WorkflowHeaderActions_vue_vue_type_style_index_0_lang_module_default, cssModules$4, WorkflowHeaderActions_default, WorkflowHeaderDraftPublishActions_vue_vue_type_script_setup_true_lang_default, container$2, activeVersionIndicator, icon, publishButtonWrapper, publishButtonIndicator, WorkflowHeaderDraftPublishActions_vue_vue_type_style_index_0_lang_module_default, cssModules$3, WorkflowHeaderDraftPublishActions_default, WorkflowDescriptionPopover_vue_vue_type_script_setup_true_lang_default, active, WorkflowDescriptionPopover_vue_vue_type_style_index_0_lang_module_default, cssModules$2, WorkflowDescriptionPopover_default, _hoisted_1, _hoisted_2, WorkflowDetails_vue_vue_type_script_setup_true_lang_default, container$1, closeNodeViewDiscovery, WorkflowDetails_vue_vue_type_style_index_1_lang_module_default, cssModules$1, WorkflowDetails_default, vue_github_button_default, MainHeader_vue_vue_type_script_setup_true_lang_default, container, MainHeader_vue_vue_type_style_index_0_lang_module_default, cssModules, MainHeader_default;
    return {
      setters: [function (_chunkLegacy001Js) {
        __toESM = _chunkLegacy001Js.o;
      }, function (_vueRuntimeEsmBundlerLegacy003Js) {
        hasOwn = _vueRuntimeEsmBundlerLegacy003Js.$t;
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Cn;
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        nextTick = _vueRuntimeEsmBundlerLegacy003Js.G;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
        onBeforeUnmount = _vueRuntimeEsmBundlerLegacy003Js.J;
        h = _vueRuntimeEsmBundlerLegacy003Js.L;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        onMounted = _vueRuntimeEsmBundlerLegacy003Js.Z;
        Fragment = _vueRuntimeEsmBundlerLegacy003Js._;
        watch = _vueRuntimeEsmBundlerLegacy003Js._t;
        renderSlot = _vueRuntimeEsmBundlerLegacy003Js.at;
        normalizeStyle = _vueRuntimeEsmBundlerLegacy003Js.bn;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        useCssModule = _vueRuntimeEsmBundlerLegacy003Js.c;
        hyphenate = _vueRuntimeEsmBundlerLegacy003Js.en;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        renderList = _vueRuntimeEsmBundlerLegacy003Js.it;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        useTemplateRef = _vueRuntimeEsmBundlerLegacy003Js.mt;
        resolveComponent = _vueRuntimeEsmBundlerLegacy003Js.ot;
        vShow = _vueRuntimeEsmBundlerLegacy003Js.p;
        onBeforeMount = _vueRuntimeEsmBundlerLegacy003Js.q;
        init_shared_esm_bundler = _vueRuntimeEsmBundlerLegacy003Js.tn;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js.vn;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
        withDirectives = _vueRuntimeEsmBundlerLegacy003Js.xt;
      }, function (_MapCacheLegacy005Js) {
        I18nT = _MapCacheLegacy005Js._t;
        useI18n = _MapCacheLegacy005Js.gt;
        useLocalStorage = _MapCacheLegacy005Js.j;
        useDocumentVisibility = _MapCacheLegacy005Js.w;
      }, function (_srcLegacy007Js) {
        N8nButton_default = _srcLegacy007Js.Hn;
        N8nRadioButtons_default = _srcLegacy007Js.S;
        N8nIcon_default = _srcLegacy007Js.Wn;
        N8nInputLabel_default = _srcLegacy007Js.X;
        SuggestedActions_default = _srcLegacy007Js._;
        N8nInlineTextEdit_default = _srcLegacy007Js.a;
        N8nBadge_default = _srcLegacy007Js.at;
        N8nUserStack_default = _srcLegacy007Js.f;
        N8nTooltip_default = _srcLegacy007Js.mt;
        N8nActionDropdown_default = _srcLegacy007Js.nt;
        N8nTag_default = _srcLegacy007Js.v;
        N8nPopoverReka_default = _srcLegacy007Js.w;
        N8nIconButton_default = _srcLegacy007Js.xt;
        N8nInput_default = _srcLegacy007Js.yt;
      }, function (_enLegacy00bJs) {}, function (_preloadHelperLegacy00dJs) {
        __vitePreload = _preloadHelperLegacy00dJs.t;
      }, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {
        useRouter = _truncateLegacy00hJs.b;
        createEventBus = _truncateLegacy00hJs.x;
        useRoute = _truncateLegacy00hJs.y;
      }, function (_iconLegacy00nJs) {}, function (_overlayLegacy00rJs) {}, function (_emptyLegacy00vJs) {}, function (_useMessageLegacy00xJs) {
        useMessage = _useMessageLegacy00xJs.t;
      }, function (_useTelemetryLegacy00HJs) {
        useSourceControlStore = _useTelemetryLegacy00HJs.Dn;
        useProjectsStore = _useTelemetryLegacy00HJs.En;
        useUIStore = _useTelemetryLegacy00HJs.Fi;
        PROJECT_MOVE_RESOURCE_MODAL = _useTelemetryLegacy00HJs.Ki;
        nodeViewEventBus = _useTelemetryLegacy00HJs.Oi;
        ProjectTypes = _useTelemetryLegacy00HJs.On;
        ResourceType = _useTelemetryLegacy00HJs.Rr;
        useDocumentTitle = _useTelemetryLegacy00HJs.Tn;
        useSettingsStore = _useTelemetryLegacy00HJs.Wo;
        getActivatableTriggerNodes = _useTelemetryLegacy00HJs.Wr;
        useTagsStore = _useTelemetryLegacy00HJs._n;
        useNDVStore = _useTelemetryLegacy00HJs.a;
        useNodeTypesStore = _useTelemetryLegacy00HJs.at;
        STORES = _useTelemetryLegacy00HJs.cc;
        usePostHog = _useTelemetryLegacy00HJs.i;
        useWorkflowHelpers = _useTelemetryLegacy00HJs.mn;
        useUsersStore = _useTelemetryLegacy00HJs.nr;
        useWorkflowsStore = _useTelemetryLegacy00HJs.o;
        hasPermission = _useTelemetryLegacy00HJs.qn;
        telemetry = _useTelemetryLegacy00HJs.r;
        useEvaluationStore = _useTelemetryLegacy00HJs.st;
        useTelemetry = _useTelemetryLegacy00HJs.t;
      }, function (_useToastLegacy00JJs) {
        getBannerRowHeight = _useToastLegacy00JJs.r;
        useToast = _useToastLegacy00JJs.t;
      }, function (_sanitizeHtmlLegacy00LJs) {}, function (_CalendarDateLegacy00NJs) {}, function (_pathBrowserifyLegacy00RJs) {}, function (_constantsLegacy00TJs) {
        LOCAL_STORAGE_HIDE_GITHUB_STAR_BUTTON = _constantsLegacy00TJs.As;
        WORKFLOW_MENU_ACTIONS = _constantsLegacy00TJs.Bc;
        TIME_SAVED_DOCS_URL = _constantsLegacy00TJs.E;
        MAIN_HEADER_TABS = _constantsLegacy00TJs.Io;
        VIEWS = _constantsLegacy00TJs.Lo;
        getResourcePermissions = _constantsLegacy00TJs.Oo;
        TIME = _constantsLegacy00TJs.Tc;
        DUPLICATE_MODAL_KEY = _constantsLegacy00TJs.Wo;
        IMPORT_WORKFLOW_URL_MODAL_KEY = _constantsLegacy00TJs.Zo;
        ERROR_WORKFLOW_DOCS_URL = _constantsLegacy00TJs._;
        EnterpriseEditionFeature = _constantsLegacy00TJs._c;
        WORKFLOW_HISTORY_VERSION_UNPUBLISH = _constantsLegacy00TJs._s;
        IS_DRAFT_PUBLISH_ENABLED = _constantsLegacy00TJs.a;
        N8N_MAIN_GITHUB_REPO_URL = _constantsLegacy00TJs.b;
        WORKFLOW_SHARE_MODAL_KEY = _constantsLegacy00TJs.bs;
        PLACEHOLDER_EMPTY_WORKFLOW_ID = _constantsLegacy00TJs.c;
        STICKY_NODE_TYPE = _constantsLegacy00TJs.dr;
        WORKFLOW_ACTIVE_MODAL_KEY = _constantsLegacy00TJs.fs;
        TIME_SAVED_NODE_EXPERIMENT = _constantsLegacy00TJs.gc;
        TIME_SAVED_NODE_TYPE = _constantsLegacy00TJs.gr;
        MODAL_CONFIRM = _constantsLegacy00TJs.ns;
        MAX_WORKFLOW_NAME_LENGTH = _constantsLegacy00TJs.o;
        EVALUATIONS_DOCS_URL = _constantsLegacy00TJs.v;
        WORKFLOW_PUBLISH_MODAL_KEY = _constantsLegacy00TJs.vs;
        WORKFLOW_SETTINGS_MODAL_KEY = _constantsLegacy00TJs.ys;
      }, function (_mergeLegacy00VJs) {}, function (_assistantStoreLegacy00XJs) {}, function (_baseOrderByLegacy00ZJs) {
        defineStore = _baseOrderByLegacy00ZJs.k;
        useRootStore = _baseOrderByLegacy00ZJs.r;
      }, function (_dateformatLegacy00$Js) {}, function (_useDebounceLegacy011Js) {
        require_debounce = _useDebounceLegacy011Js.n;
        useDebounce = _useDebounceLegacy011Js.t;
      }, function (_useExternalHooksLegacy013Js) {}, function (_useStylesLegacy015Js) {}, function (_npsSurveyStoreLegacy01bJs) {
        useNpsSurveyStore = _npsSurveyStoreLegacy01bJs.t;
      }, function (_cloudPlanStoreLegacy01dJs) {}, function (_templatesStoreLegacy01fJs) {}, function (_focusPanelStoreLegacy01hJs) {}, function (_useWorkflowSavingLegacy01jJs) {
        useWorkflowSaving = _useWorkflowSavingLegacy01jJs.t;
      }, function (_retryLegacy01lJs) {}, function (_executionsStoreLegacy01nJs) {
        useExecutionsStore = _executionsStoreLegacy01nJs.t;
      }, function (_useRunWorkflowLegacy01pJs) {
        usePushConnectionStore = _useRunWorkflowLegacy01pJs.i;
      }, function (_usePinnedDataLegacy01rJs) {}, function (_nodeCreatorStoreLegacy01tJs) {}, function (_nodeIconLegacy01vJs) {}, function (_useClipboardLegacy01xJs) {}, function (_useCanvasOperationsLegacy01zJs) {}, function (_foldersStoreLegacy01DJs) {
        useFoldersStore = _foldersStoreLegacy01DJs.t;
      }, function (_NodeIconLegacy01FJs) {}, function (_KeyboardShortcutTooltipLegacy01HJs) {}, function (_versionsStoreLegacy01LJs) {}, function (_usePageRedirectionHelperLegacy01NJs) {
        usePageRedirectionHelper = _usePageRedirectionHelperLegacy01NJs.t;
      }, function (_bannersStoreLegacy01PJs) {
        useBannersStore = _bannersStoreLegacy01PJs.t;
      }, function (_dataTableStoreLegacy01RJs) {}, function (_ProjectIconLegacy02fJs) {}, function (_CredentialIconLegacy02lJs) {}, function (_schemaPreviewStoreLegacy02BJs) {}, function (_FileSaverMinLegacy02HJs) {
        require_FileSaver_min = _FileSaverMinLegacy02HJs.t;
      }, function (_EnterpriseEditionEeLegacy02PJs) {
        EnterpriseEdition_ee_default = _EnterpriseEditionEeLegacy02PJs.t;
      }, function (_TimeAgoLegacy02TJs) {
        TimeAgo_default = _TimeAgoLegacy02TJs.t;
      }, function (_rolesStoreLegacy02ZJs) {}, function (_SaveButtonLegacy02$Js) {
        SaveButton_default = _SaveButtonLegacy02$Js.t;
      }, function (_TagsDropdownLegacy033Js) {}, function (_WorkflowTagsDropdownLegacy035Js) {
        WorkflowTagsDropdown_default = _WorkflowTagsDropdownLegacy035Js.t;
      }, function (_ssoStoreLegacy039Js) {}, function (_routerLegacy03bJs) {
        router_default = _routerLegacy03bJs.t;
      }, function (_insightsStoreLegacy03dJs) {}, function (_insightsConstantsLegacy03fJs) {}, function (_insightsUtilsLegacy03hJs) {}, function (_mcpConstantsLegacy03jJs) {
        MCP_DOCS_PAGE_URL = _mcpConstantsLegacy03jJs.n;
        MCP_SETTINGS_VIEW = _mcpConstantsLegacy03jJs.r;
      }, function (_constantsLegacy03lJs) {}, function (_chatStoreLegacy03nJs) {}, function (_fileUtilsLegacy03pJs) {}, function (_useRecentResourcesLegacy03rJs) {}, function (_useMcpLegacy03JJs) {
        useMcp = _useMcpLegacy03JJs.t;
      }, function (_useWorkflowActivateLegacy03RJs) {
        useWorkflowActivate = _useWorkflowActivateLegacy03RJs.t;
      }, function (_WorkflowActivationErrorMessageLegacy03TJs) {}, function (_utilsLegacy03VJs) {
        generateVersionName = _utilsLegacy03VJs.n;
        getLastPublishedVersion = _utilsLegacy03VJs.r;
      }, function (_ProjectBreadcrumbLegacy043Js) {}, function (_WorkflowActivatorLegacy045Js) {
        FolderBreadcrumbs_default = _WorkflowActivatorLegacy045Js.n;
        WorkflowActivator_default = _WorkflowActivatorLegacy045Js.t;
      }, function (_PushConnectionTrackerLegacy047Js) {
        PushConnectionTracker_default = _PushConnectionTrackerLegacy047Js.t;
      }, function (_useWorkflowsCacheLegacy049Js) {
        useWorkflowSettingsCache = _useWorkflowsCacheLegacy049Js.t;
      }, function (_useBeforeUnloadLegacy04bJs) {
        useBeforeUnload = _useBeforeUnloadLegacy04bJs.t;
      }, function (_usePushConnectionLegacy04fJs) {
        usePushConnection = _usePushConnectionLegacy04fJs.t;
      }, function (_aiTemplatesStarterCollectionStoreLegacy04hJs) {}, function (_readyToRunStoreLegacy04jJs) {}],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._container_cznfu_123 {\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%) translateY(50%);\n  min-height: 30px;\n  display: flex;\n  padding: var(--spacing--5xs);\n  background-color: var(--color--foreground);\n  border-radius: var(--radius);\n  transition: all 150ms ease-in-out;\n  z-index: 1;\n}\n@media screen and (max-width: 430px) {\n._container_cznfu_123 {\n    flex-direction: column;\n}\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n.tags-container[data-v-2e7ba899] {\n  display: block;\n  max-width: 300px;\n}\n.hideTag[data-v-2e7ba899] {\n  visibility: hidden;\n}\n.tags[data-v-2e7ba899] {\n  display: flex;\n  gap: var(--spacing--4xs);\n}\n.count-container[data-v-2e7ba899] {\n  position: absolute;\n  max-width: 40px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._container_dsr9f_123 {\n  margin: 0 var(--spacing--4xs);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._deleteItem_ntqfl_123 {\n  color: var(--color--danger);\n}\n._group_ntqfl_127 {\n  display: flex;\n  gap: var(--spacing--xs);\n}\n._hiddenInput_ntqfl_132 {\n  display: none;\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._container_uqc1z_123 {\n  display: contents;\n}\n._activator_uqc1z_127 {\n  color: var(--color--text--shade-1);\n  font-weight: var(--font-weight--regular);\n  font-size: 13px;\n  line-height: 24px;\n  align-items: center;\n}\n._activator_uqc1z_127 > span {\n  margin-right: 5px;\n}\n._group_uqc1z_138 {\n  display: flex;\n  gap: var(--spacing--xs);\n}\n._disabledShareButton_uqc1z_143 {\n  cursor: not-allowed;\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._container_19vh4_123 {\n  display: contents;\n}\n._activeVersionIndicator_19vh4_127 {\n  display: inline-flex;\n  align-items: center;\n}\n._activeVersionIndicator_19vh4_127 ._icon_19vh4_131:focus {\n  outline: none;\n}\n._publishButtonWrapper_19vh4_135 {\n  position: relative;\n  display: inline-block;\n}\n._publishButtonIndicator_19vh4_140 {\n  position: absolute;\n  top: -2px;\n  right: -2px;\n  width: 7px;\n  height: 7px;\n  background-color: var(--color--primary);\n  border-radius: 50%;\n  box-shadow: 0 0 0 2px var(--color--background--light-3);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._description-button_37v5e_123 {\n  border: none;\n  position: relative;\n}\n._description-button_37v5e_123._active_37v5e_127 {\n  color: var(--color--background--shade-2);\n}\n._description-button_37v5e_123:hover, ._description-button_37v5e_123:focus, ._description-button_37v5e_123:focus-visible, ._description-button_37v5e_123:active {\n  background: none;\n  background-color: transparent !important;\n  outline: none !important;\n  color: var(--color--background--shade-2) !important;\n}\n._description-edit-content_37v5e_137 {\n  display: flex;\n  flex-direction: column;\n  padding: var(--spacing--xs);\n  width: 400px;\n}\n._popover-footer_37v5e_144 {\n  display: flex;\n  justify-content: flex-end;\n  gap: var(--spacing--2xs);\n  padding: 0 var(--spacing--xs) var(--spacing--xs);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n.name-container[data-v-5dc32625] {\n  margin-right: var(--spacing--sm);\n}\n.name-container[data-v-5dc32625] .el-input {\n  padding: 0;\n}\n.name[data-v-5dc32625] {\n  color: var(--color--text--shade-1);\n  font-size: var(--font-size--sm);\n  padding: var(--spacing--3xs) var(--spacing--4xs) var(--spacing--4xs);\n}\n.add-tag[data-v-5dc32625] {\n  font-size: 12px;\n  padding: 20px 0;\n  color: var(--color--text--tint-1);\n  font-weight: var(--font-weight--bold);\n  white-space: nowrap;\n}\n.add-tag[data-v-5dc32625]:hover {\n  color: var(--color--primary);\n}\n.tags[data-v-5dc32625] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  flex: 1;\n  margin-right: 20px;\n}\n.tags-edit[data-v-5dc32625] {\n  min-width: 100px;\n  width: 100%;\n  max-width: 460px;\n}\n.actions[data-v-5dc32625] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing--md);\n  flex-wrap: nowrap;\n}\n@media screen and (max-width: 767px) {\n.name[data-v-5dc32625] input {\n    min-width: 180px;\n}\n}\n@media (max-width: 1390px) {\n.name-container[data-v-5dc32625] {\n    margin-right: var(--spacing--xs);\n}\n.actions[data-v-5dc32625] {\n    gap: var(--spacing--xs);\n}\n}\n@media (max-width: 1350px) {\n.name-container[data-v-5dc32625] {\n    margin-right: var(--spacing--2xs);\n}\n.actions[data-v-5dc32625] {\n    gap: var(--spacing--2xs);\n}\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._container_7bao3_123 {\n  position: relative;\n  width: 100%;\n  padding: var(--spacing--xs) var(--spacing--md);\n  display: flex;\n  align-items: center;\n  flex-wrap: nowrap;\n}\n._path-separator_7bao3_132 {\n  font-size: var(--font-size--xl);\n  color: var(--color--foreground);\n  padding: var(--spacing--3xs) var(--spacing--4xs) var(--spacing--4xs);\n}\n._closeNodeViewDiscovery_7bao3_138 {\n  position: absolute;\n  right: var(--spacing--xs);\n  top: var(--spacing--xs);\n  cursor: pointer;\n}\n._header-controls_7bao3_145 {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing--md);\n  width: 100%;\n  flex: 1;\n  margin: 0 var(--spacing--md);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._container_4ekmy_123 {\n  display: flex;\n  position: relative;\n  width: 100%;\n  align-items: center;\n}\n._main-header_4ekmy_130 {\n  min-height: var(--navbar--height);\n  background-color: var(--color--background--light-3);\n  width: 100%;\n  box-sizing: border-box;\n  border-bottom: var(--border-width) var(--border-style) var(--color--foreground);\n}\n._top-menu_4ekmy_138 {\n  position: relative;\n  display: flex;\n  height: var(--navbar--height);\n  align-items: center;\n  font-size: 0.9em;\n  font-weight: var(--font-weight--regular);\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n._github-button_4ekmy_149 {\n  display: flex;\n  align-items: center;\n  align-self: stretch;\n  padding: var(--spacing--5xs) var(--spacing--md);\n  background-color: var(--color--background--light-3);\n  border-left: var(--border-width) var(--border-style) var(--color--foreground);\n}\n._close-github-button_4ekmy_158 {\n  display: none;\n  position: absolute;\n  right: 0;\n  top: 0;\n  transform: translate(50%, -46%);\n  color: var(--color--foreground--shade-2);\n  background-color: var(--color--background--light-3);\n  border-radius: 100%;\n  cursor: pointer;\n}\n._close-github-button_4ekmy_158:hover {\n  color: var(--color--orange-400);\n}\n._github-button-container_4ekmy_173 {\n  position: relative;\n}\n._github-button_4ekmy_149:hover ._close-github-button_4ekmy_158 {\n  display: block;\n}\n@media (max-width: 1390px) {\n._github-button_4ekmy_149 {\n    padding: var(--spacing--5xs) var(--spacing--xs);\n}\n}\n@media (max-width: 1340px) {\n._github-button_4ekmy_149 {\n    border-left: 0;\n    padding-left: 0;\n}\n}\n@media (max-width: 1290px) {\n._github-button_4ekmy_149 {\n    display: none;\n}\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/app/components/MainHeader/TabBar.vue?vue&type=script&setup=true&lang.ts
        TabBar_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "TabBar",
          props: {
            items: {},
            modelValue: {
              default: MAIN_HEADER_TABS.WORKFLOW
            }
          },
          emits: ["update:modelValue"],
          setup(__props, {
            emit: __emit
          }) {
            const emit = __emit;
            function onUpdateModelValue(tab, event) {
              emit("update:modelValue", tab, event);
            }
            return (_ctx, _cache) => {
              return _ctx.items ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass({
                  [_ctx.$style.container]: true,
                  ["tab-bar-container"]: true
                })
              }, [createVNode(unref(N8nRadioButtons_default), {
                "model-value": _ctx.modelValue,
                options: _ctx.items,
                "onUpdate:modelValue": onUpdateModelValue
              }, null, 8, ["model-value", "options"])], 2)) : createCommentVNode("", true);
            };
          }
        }); //#endregion
        //#region src/app/components/MainHeader/TabBar.vue?vue&type=style&index=0&lang.module.scss
        container$5 = "_container_cznfu_123";
        TabBar_vue_vue_type_style_index_0_lang_module_default = {
          container: container$5
        }; //#endregion
        //#region src/app/components/MainHeader/TabBar.vue
        cssModules$7 = {
          "$style": TabBar_vue_vue_type_style_index_0_lang_module_default
        };
        TabBar_default = /* @__PURE__ */__plugin_vue_export_helper_default(TabBar_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$7]]); //#endregion
        //#region src/app/constants/breakpoints.ts
        BREAKPOINT_SM = 768;
        BREAKPOINT_MD = 992;
        BREAKPOINT_LG = 1200;
        BREAKPOINT_XL = 1920; //#endregion
        //#region src/app/components/BreakpointsObserver.vue?vue&type=script&setup=true&lang.ts
        BreakpointsObserver_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "BreakpointsObserver",
          props: {
            valueXS: {},
            valueXL: {},
            valueLG: {},
            valueMD: {},
            valueSM: {},
            valueDefault: {}
          },
          setup(__props) {
            const props = __props;
            const {
              callDebounced
            } = useDebounce();
            const bannersStore = useBannersStore();
            const width = ref(window.innerWidth);
            const bp = computed(() => {
              if (width.value < 768) return "XS";
              if (width.value >= 1920) return "XL";
              if (width.value >= 1200) return "LG";
              if (width.value >= 992) return "MD";
              return "SM";
            });
            const value = computed(() => {
              if (props.valueXS && width.value < 768) return props.valueXS;
              if (props.valueXL && width.value >= 1920) return props.valueXL;
              if (props.valueLG && width.value >= 1200) return props.valueLG;
              if (props.valueMD && width.value >= 992) return props.valueMD;
              if (props.valueSM) return props.valueSM;
              return props.valueDefault;
            });
            const onResize = () => {
              callDebounced(onResizeEnd, {
                debounceTime: 50
              });
            };
            const onResizeEnd = async () => {
              width.value = window.innerWidth;
              await nextTick();
              const bannerHeight = await getBannerRowHeight();
              bannersStore.updateBannersHeight(bannerHeight);
            };
            onMounted(() => {
              window.addEventListener("resize", onResize);
            });
            onBeforeUnmount(() => {
              window.removeEventListener("resize", onResize);
            });
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("span", null, [renderSlot(_ctx.$slots, "default", {
                bp: bp.value,
                value: value.value
              })]);
            };
          }
        }); //#endregion
        //#region src/app/components/BreakpointsObserver.vue
        BreakpointsObserver_default = BreakpointsObserver_vue_vue_type_script_setup_true_lang_default; //#endregion
        //#region src/app/components/WorkflowProductionChecklist.vue?vue&type=script&setup=true&lang.ts
        WorkflowProductionChecklist_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "WorkflowProductionChecklist",
          props: {
            workflow: {}
          },
          setup(__props) {
            const props = __props;
            const i18n = useI18n();
            const router = useRouter();
            const evaluationStore = useEvaluationStore();
            const nodeTypesStore = useNodeTypesStore();
            const workflowsCache = useWorkflowSettingsCache();
            const uiStore = useUIStore();
            const message = useMessage();
            const telemetry$1 = useTelemetry();
            const sourceControlStore = useSourceControlStore();
            const settingsStore = useSettingsStore();
            const {
              isEligibleForMcpAccess
            } = useMcp();
            const usersStore = useUsersStore();
            const posthogStore = usePostHog();
            const isPopoverOpen = ref(false);
            const cachedSettings = ref(null);
            const hasAINode = computed(() => {
              return props.workflow.nodes.some(node => {
                return nodeTypesStore.getNodeType(node.type, node.typeVersion)?.codex?.categories?.includes("AI");
              });
            });
            const hasEvaluationSetOutputsNode = computed(() => {
              return evaluationStore.evaluationSetOutputsNodeExist;
            });
            const hasErrorWorkflow = computed(() => {
              return !!props.workflow.settings?.errorWorkflow;
            });
            const hasSavedTimeNodes = computed(() => {
              if (!posthogStore.isFeatureEnabled(TIME_SAVED_NODE_EXPERIMENT.name)) return false;
              if (!props.workflow?.nodes) return false;
              return props.workflow.nodes.some(node => node.type === "n8n-nodes-base.timeSaved" && node.disabled !== true);
            });
            const hasTimeSaved = computed(() => {
              return props.workflow.settings?.timeSavedPerExecution !== void 0 || hasSavedTimeNodes.value;
            });
            const isActivationModalOpen = computed(() => {
              return uiStore.isModalActiveById[WORKFLOW_ACTIVE_MODAL_KEY];
            });
            const isProtectedEnvironment = computed(() => {
              return sourceControlStore.preferences.branchReadOnly;
            });
            const isOwner = computed(() => usersStore.isInstanceOwner);
            const isAdmin = computed(() => usersStore.isAdmin);
            const isMcpModuleEnabled = computed(() => {
              return settingsStore.isModuleActive("mcp");
            });
            const isMcpAccessEnabled = computed(() => {
              return settingsStore.moduleSettings.mcp?.mcpAccessEnabled ?? false;
            });
            const isWorkflowEligibleForMcpAccess = computed(() => {
              return isEligibleForMcpAccess(props.workflow);
            });
            const canToggleInstanceMCPAccess = computed(() => isOwner.value || isAdmin.value);
            const availableActions = computed(() => {
              if (props.workflow.activeVersionId === null || workflowsCache.isCacheLoading.value) return [];
              const actions = [];
              const suggestedActionSettings = cachedSettings.value?.suggestedActions ?? {};
              if (!suggestedActionSettings.errorWorkflow?.ignored) actions.push({
                id: "errorWorkflow",
                title: i18n.baseText("workflowProductionChecklist.errorWorkflow.title"),
                description: i18n.baseText("workflowProductionChecklist.errorWorkflow.description"),
                moreInfoLink: ERROR_WORKFLOW_DOCS_URL,
                completed: hasErrorWorkflow.value
              });
              if (hasAINode.value && evaluationStore.isEvaluationEnabled && !suggestedActionSettings.evaluations?.ignored) actions.push({
                id: "evaluations",
                title: i18n.baseText("workflowProductionChecklist.evaluations.title"),
                description: i18n.baseText("workflowProductionChecklist.evaluations.description"),
                moreInfoLink: EVALUATIONS_DOCS_URL,
                completed: hasEvaluationSetOutputsNode.value
              });
              if (!suggestedActionSettings.timeSaved?.ignored) actions.push({
                id: "timeSaved",
                title: i18n.baseText("workflowProductionChecklist.timeSaved.title"),
                description: i18n.baseText("workflowProductionChecklist.timeSaved.description"),
                moreInfoLink: TIME_SAVED_DOCS_URL,
                completed: hasTimeSaved.value
              });
              const mcpAction = getMcpAction();
              if (mcpAction) actions.push(mcpAction);
              return actions;
              function getMcpAction() {
                if (!isMcpModuleEnabled.value || !isWorkflowEligibleForMcpAccess.value) return null;
                const baseAction = {
                  title: i18n.baseText("mcp.productionChecklist.title"),
                  moreInfoLink: MCP_DOCS_PAGE_URL
                };
                if (!isMcpAccessEnabled.value) {
                  if (!canToggleInstanceMCPAccess.value || suggestedActionSettings["instance-mcp-access"]?.ignored) return null;
                  return {
                    ...baseAction,
                    id: "instance-mcp-access",
                    description: i18n.baseText("mcp.productionChecklist.instance.description"),
                    completed: false
                  };
                }
                if (suggestedActionSettings["workflow-mcp-access"]?.ignored) return null;
                return {
                  ...baseAction,
                  id: "workflow-mcp-access",
                  description: i18n.baseText("mcp.productionChecklist.workflow.description"),
                  completed: props.workflow.settings?.availableInMCP ?? false
                };
              }
            });
            async function loadWorkflowSettings() {
              if (props.workflow.id) cachedSettings.value = await workflowsCache.getMergedWorkflowSettings(props.workflow.id);
            }
            async function handleActionClick(actionId) {
              switch (actionId) {
                case "evaluations":
                  await router.push({
                    name: VIEWS.EVALUATION_EDIT,
                    params: {
                      name: props.workflow.id
                    }
                  });
                  break;
                case "errorWorkflow":
                case "timeSaved":
                case "workflow-mcp-access":
                  uiStore.openModal(WORKFLOW_SETTINGS_MODAL_KEY);
                  break;
                case "instance-mcp-access":
                  await router.push({
                    name: MCP_SETTINGS_VIEW
                  });
                  break;
                default:
                  break;
              }
              isPopoverOpen.value = false;
            }
            function isValidAction(action) {
              return ["evaluations", "errorWorkflow", "timeSaved", "workflow-mcp-access", "instance-mcp-access"].includes(action);
            }
            async function handleIgnoreClick(actionId) {
              if (!isValidAction(actionId)) return;
              await workflowsCache.ignoreSuggestedAction(props.workflow.id, actionId);
              await loadWorkflowSettings();
              telemetry$1.track("user clicked ignore suggested action", {
                actionId
              });
            }
            async function handleIgnoreAll() {
              if ((await message.confirm(i18n.baseText("workflowProductionChecklist.ignoreAllConfirmation.description"), i18n.baseText("workflowProductionChecklist.ignoreAllConfirmation.title"), {
                confirmButtonText: i18n.baseText("workflowProductionChecklist.ignoreAllConfirmation.confirm")
              })) === "confirm") {
                await workflowsCache.ignoreAllSuggestedActionsForAllWorkflows(availableActions.value.map(action => action.id));
                await loadWorkflowSettings();
                telemetry$1.track("user clicked ignore suggested actions for all workflows");
              }
            }
            function openSuggestedActions() {
              isPopoverOpen.value = true;
            }
            function onPopoverOpened() {
              telemetry$1.track("user opened suggested actions checklist");
            }
            function handlePopoverOpenChange(open) {
              if (open) {
                isPopoverOpen.value = true;
                onPopoverOpened();
              } else if (!isActivationModalOpen.value) isPopoverOpen.value = false;
            }
            watch(() => !!props.workflow.activeVersionId, async (isActive, wasActive) => {
              if (isActive && !wasActive) {
                if (!cachedSettings.value?.firstActivatedAt) setTimeout(() => {
                  openSuggestedActions();
                }, 0);
                await workflowsCache.updateFirstActivatedAt(props.workflow.id);
              }
            });
            onMounted(async () => {
              await loadWorkflowSettings();
            });
            return (_ctx, _cache) => {
              return availableActions.value.length > 0 ? (openBlock(), createBlock(unref(SuggestedActions_default), {
                key: 0,
                open: isPopoverOpen.value,
                title: unref(i18n).baseText("workflowProductionChecklist.title"),
                actions: availableActions.value,
                "ignore-all-label": unref(i18n).baseText("workflowProductionChecklist.turnOffWorkflowSuggestions"),
                notice: isProtectedEnvironment.value ? unref(i18n).baseText("workflowProductionChecklist.readOnlyNotice") : "",
                "popover-alignment": "end",
                onActionClick: handleActionClick,
                onIgnoreClick: handleIgnoreClick,
                onIgnoreAll: handleIgnoreAll,
                "onUpdate:open": handlePopoverOpenChange
              }, null, 8, ["open", "title", "actions", "ignore-all-label", "notice"])) : createCommentVNode("", true);
            };
          }
        }); //#endregion
        //#region src/app/components/WorkflowProductionChecklist.vue
        WorkflowProductionChecklist_default = WorkflowProductionChecklist_vue_vue_type_script_setup_true_lang_default; //#endregion
        //#region src/app/components/IntersectionObserver.vue?vue&type=script&setup=true&lang.ts
        IntersectionObserver_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "IntersectionObserver",
          props: {
            threshold: {
              default: 0
            },
            enabled: {
              type: Boolean,
              default: false
            },
            eventBus: {}
          },
          emits: ["observed"],
          setup(__props, {
            emit: __emit
          }) {
            const props = __props;
            const emit = __emit;
            const observer = ref(null);
            const root = ref(null);
            onBeforeUnmount(() => {
              if (props.enabled && observer.value) observer.value.disconnect();
            });
            onMounted(() => {
              if (!props.enabled) return;
              const options = {
                root: root.value,
                rootMargin: "0px",
                threshold: props.threshold
              };
              const intersectionObserver = new IntersectionObserver(entries => {
                entries.forEach(({
                  target,
                  isIntersecting
                }) => {
                  emit("observed", {
                    el: target,
                    isIntersecting
                  });
                });
              }, options);
              observer.value = intersectionObserver;
              props.eventBus.on("observe", observed => {
                if (observed) intersectionObserver.observe(observed);
              });
              props.eventBus.on("unobserve", observed => {
                intersectionObserver.unobserve(observed);
              });
            });
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                ref_key: "root",
                ref: root
              }, [renderSlot(_ctx.$slots, "default")], 512);
            };
          }
        }); //#endregion
        //#region src/app/components/IntersectionObserver.vue
        IntersectionObserver_default = IntersectionObserver_vue_vue_type_script_setup_true_lang_default; //#endregion
        //#region src/app/components/IntersectionObserved.vue?vue&type=script&setup=true&lang.ts
        IntersectionObserved_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "IntersectionObserved",
          props: {
            enabled: {
              type: Boolean,
              default: false
            },
            eventBus: {}
          },
          setup(__props) {
            const props = __props;
            const observed = ref(null);
            onMounted(async () => {
              if (!props.enabled) return;
              await nextTick();
              props.eventBus.emit("observe", observed.value);
            });
            onBeforeUnmount(() => {
              if (props.enabled) props.eventBus.emit("unobserve", observed.value);
            });
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("span", {
                ref_key: "observed",
                ref: observed
              }, [renderSlot(_ctx.$slots, "default")], 512);
            };
          }
        }); //#endregion
        //#region src/app/components/IntersectionObserved.vue
        IntersectionObserved_default = IntersectionObserved_vue_vue_type_script_setup_true_lang_default; //#endregion
        //#region src/features/shared/tags/components/TagsContainer.vue?vue&type=script&setup=true&lang.ts
        import_debounce = /* @__PURE__ */__toESM(require_debounce());
        _hoisted_1$2 = {
          class: "tags"
        };
        _hoisted_2$2 = ["onClick"];
        TagsContainer_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "TagsContainer",
          props: {
            tagIds: {},
            tagsById: {},
            limit: {
              default: 20
            },
            clickable: {
              type: Boolean,
              default: false
            },
            responsive: {
              type: Boolean,
              default: false
            }
          },
          emits: ["click"],
          setup(__props, {
            emit: __emit
          }) {
            const props = __props;
            const emit = __emit;
            const maxWidth = ref(320);
            const intersectionEventBus = createEventBus();
            const visibility = ref({});
            const tagsContainer = ref();
            const style = computed(() => ({
              "max-width": `${maxWidth.value}px`
            }));
            const tags = computed(() => {
              const allTags = props.tagIds.map(tagId => props.tagsById[tagId]).filter(Boolean);
              let toDisplay = props.limit ? allTags.slice(0, props.limit) : allTags;
              toDisplay = toDisplay.map(tag => ({
                ...tag,
                hidden: props.responsive && !visibility.value[tag.id]
              }));
              let visibleCount = toDisplay.length;
              if (props.responsive) visibleCount = Object.values(visibility.value).reduce((accu, val) => val ? accu + 1 : accu, 0);
              if (visibleCount < allTags.length) {
                const hidden = allTags.slice(visibleCount);
                const hiddenTitle = hidden.reduce((accu, tag) => accu ? `${accu}, ${tag.name}` : tag.name, "");
                const countTag = {
                  id: "count",
                  name: `+${hidden.length}`,
                  title: hiddenTitle,
                  isCount: true
                };
                toDisplay.splice(visibleCount, 0, countTag);
              }
              return toDisplay;
            });
            const setMaxWidth = () => {
              const parent = tagsContainer.value?.$el?.parentNode;
              if (parent) {
                maxWidth.value = 0;
                nextTick(() => {
                  maxWidth.value = parent.clientWidth;
                });
              }
            };
            const debouncedSetMaxWidth = (0, import_debounce.default)(setMaxWidth, 100);
            const onObserved = ({
              el,
              isIntersecting
            }) => {
              if (el.dataset.id) visibility.value = {
                ...visibility.value,
                [el.dataset.id]: isIntersecting
              };
            };
            const onClick = (e, tag) => {
              if (props.clickable) e.stopPropagation();
              if (!tag.hidden) emit("click", tag.id);
            };
            onMounted(() => {
              setMaxWidth();
              window.addEventListener("resize", debouncedSetMaxWidth);
            });
            onBeforeUnmount(() => {
              window.removeEventListener("resize", debouncedSetMaxWidth);
            });
            return (_ctx, _cache) => {
              return openBlock(), createBlock(IntersectionObserver_default, {
                ref_key: "tagsContainer",
                ref: tagsContainer,
                threshold: 1,
                class: "tags-container",
                style: normalizeStyle(style.value),
                enabled: _ctx.responsive,
                "event-bus": unref(intersectionEventBus),
                onObserved
              }, {
                default: withCtx(() => [createBaseVNode("span", _hoisted_1$2, [(openBlock(true), createElementBlock(Fragment, null, renderList(tags.value, tag => {
                  return openBlock(), createElementBlock("span", {
                    key: tag.id,
                    class: normalizeClass({
                      clickable: !tag.hidden
                    }),
                    onClick: e => onClick(e, tag)
                  }, [tag.isCount ? (openBlock(), createBlock(unref(N8nTag_default), {
                    key: 0,
                    title: tag.title,
                    text: tag.name,
                    clickable: false,
                    class: "count-container"
                  }, null, 8, ["title", "text"])) : (openBlock(), createBlock(IntersectionObserved_default, {
                    key: 1,
                    class: normalizeClass({
                      hideTag: tag.hidden
                    }),
                    "data-id": tag.id,
                    enabled: _ctx.responsive,
                    "event-bus": unref(intersectionEventBus)
                  }, {
                    default: withCtx(() => [createVNode(unref(N8nTag_default), {
                      title: tag.name,
                      text: tag.name,
                      clickable: _ctx.clickable
                    }, null, 8, ["title", "text", "clickable"])]),
                    _: 2
                  }, 1032, ["class", "data-id", "enabled", "event-bus"]))], 10, _hoisted_2$2);
                }), 128))])]),
                _: 1
              }, 8, ["style", "enabled", "event-bus"]);
            };
          }
        }); //#endregion
        //#region src/features/shared/tags/components/TagsContainer.vue
        TagsContainer_default = /* @__PURE__ */__plugin_vue_export_helper_default(TagsContainer_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-2e7ba899"]]); //#endregion
        //#region src/features/shared/tags/components/WorkflowTagsContainer.vue?vue&type=script&setup=true&lang.ts
        WorkflowTagsContainer_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "WorkflowTagsContainer",
          props: {
            tagIds: {},
            limit: {},
            clickable: {
              type: Boolean
            },
            responsive: {
              type: Boolean
            }
          },
          emits: ["click"],
          setup(__props, {
            emit: __emit
          }) {
            const emit = __emit;
            const annotationTagsStore = useTagsStore();
            const tagsById = computed(() => annotationTagsStore.tagsById);
            function onClick(tagId) {
              emit("click", tagId);
            }
            return (_ctx, _cache) => {
              return openBlock(), createBlock(TagsContainer_default, {
                "tag-ids": _ctx.tagIds,
                "tags-by-id": tagsById.value,
                limit: _ctx.limit,
                clickable: _ctx.clickable,
                responsive: _ctx.responsive,
                onClick
              }, null, 8, ["tag-ids", "tags-by-id", "limit", "clickable", "responsive"]);
            };
          }
        }); //#endregion
        //#region src/features/shared/tags/components/WorkflowTagsContainer.vue
        WorkflowTagsContainer_default = WorkflowTagsContainer_vue_vue_type_script_setup_true_lang_default; //#endregion
        //#region src/features/collaboration/collaboration/collaboration.store.ts
        HEARTBEAT_INTERVAL = 5 * TIME.MINUTE;
        /**
        * Store for tracking active users for workflows. I.e. to show
        * who is collaboratively viewing/editing the workflow at the same time.
        */
        useCollaborationStore = defineStore(STORES.COLLABORATION, () => {
          const pushStore = usePushConnectionStore();
          const workflowsStore = useWorkflowsStore();
          const usersStore = useUsersStore();
          const uiStore = useUIStore();
          const {
            addBeforeUnloadEventBindings,
            removeBeforeUnloadEventBindings,
            addBeforeUnloadHandler
          } = useBeforeUnload({
            route: useRoute()
          });
          const unloadTimeout = ref(null);
          addBeforeUnloadHandler(() => {
            notifyWorkflowClosed();
            if (uiStore.stateIsDirty) unloadTimeout.value = setTimeout(() => notifyWorkflowOpened, 5 * TIME.SECOND);
          });
          const collaborators = ref([]);
          const heartbeatTimer = ref(null);
          const startHeartbeat = () => {
            stopHeartbeat();
            heartbeatTimer.value = window.setInterval(notifyWorkflowOpened, HEARTBEAT_INTERVAL);
          };
          const stopHeartbeat = () => {
            if (heartbeatTimer.value !== null) {
              clearInterval(heartbeatTimer.value);
              heartbeatTimer.value = null;
            }
          };
          const pushStoreEventListenerRemovalFn = ref(null);
          function initialize() {
            if (pushStoreEventListenerRemovalFn.value) return;
            pushStoreEventListenerRemovalFn.value = pushStore.addEventListener(event => {
              if (event.type === "collaboratorsChanged" && event.data.workflowId === workflowsStore.workflowId) collaborators.value = event.data.collaborators;
            });
            addBeforeUnloadEventBindings();
            notifyWorkflowOpened();
            startHeartbeat();
          }
          function terminate() {
            if (typeof pushStoreEventListenerRemovalFn.value === "function") {
              pushStoreEventListenerRemovalFn.value();
              pushStoreEventListenerRemovalFn.value = null;
            }
            notifyWorkflowClosed();
            stopHeartbeat();
            pushStore.clearQueue();
            removeBeforeUnloadEventBindings();
            if (unloadTimeout.value) clearTimeout(unloadTimeout.value);
          }
          function notifyWorkflowOpened() {
            const {
              workflowId
            } = workflowsStore;
            if (workflowId === "__EMPTY__") return;
            pushStore.send({
              type: "workflowOpened",
              workflowId
            });
          }
          function notifyWorkflowClosed() {
            const {
              workflowId
            } = workflowsStore;
            if (workflowId === "__EMPTY__") return;
            pushStore.send({
              type: "workflowClosed",
              workflowId
            });
            collaborators.value = collaborators.value.filter(({
              user
            }) => user.id !== usersStore.currentUserId);
          }
          return {
            collaborators,
            initialize,
            terminate,
            startHeartbeat,
            stopHeartbeat
          };
        }); //#endregion
        //#region src/features/collaboration/collaboration/components/CollaborationPane.vue?vue&type=script&setup=true&lang.ts
        CollaborationPane_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "CollaborationPane",
          setup(__props) {
            const collaborationStore = useCollaborationStore();
            const usersStore = useUsersStore();
            watch(useDocumentVisibility(), visibilityState => {
              if (visibilityState === "hidden") collaborationStore.stopHeartbeat();else collaborationStore.startHeartbeat();
            });
            const showUserStack = computed(() => collaborationStore.collaborators.length > 1);
            const collaboratorsSorted = computed(() => {
              const users = collaborationStore.collaborators.map(({
                user
              }) => user);
              const index = users.findIndex(user => user.id === usersStore.currentUser?.id);
              if (index < 1) return {
                defaultGroup: users
              };
              const [currentUser] = users.splice(index, 1);
              return {
                defaultGroup: [currentUser, ...users]
              };
            });
            const currentUserEmail = computed(() => usersStore.currentUser?.email);
            onMounted(() => {
              collaborationStore.initialize();
            });
            onBeforeUnmount(() => {
              collaborationStore.terminate();
            });
            return (_ctx, _cache) => {
              return showUserStack.value ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(`collaboration-pane-container ${_ctx.$style.container}`),
                "data-test-id": "collaboration-pane"
              }, [createVNode(unref(N8nUserStack_default), {
                users: collaboratorsSorted.value,
                "current-user-email": currentUserEmail.value
              }, null, 8, ["users", "current-user-email"])], 2)) : createCommentVNode("", true);
            };
          }
        }); //#endregion
        //#region src/features/collaboration/collaboration/components/CollaborationPane.vue?vue&type=style&index=0&lang.module.scss
        container$4 = "_container_dsr9f_123";
        CollaborationPane_vue_vue_type_style_index_0_lang_module_default = {
          container: container$4
        }; //#endregion
        //#region src/features/collaboration/collaboration/components/CollaborationPane.vue
        cssModules$6 = {
          "$style": CollaborationPane_vue_vue_type_style_index_0_lang_module_default
        };
        CollaborationPane_default = /* @__PURE__ */__plugin_vue_export_helper_default(CollaborationPane_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$6]]); //#endregion
        //#region src/features/workflows/workflowHistory/components/WorkflowHistoryButton.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1$1 = {
          key: 0
        };
        _hoisted_2$1 = {
          key: 1
        };
        WorkflowHistoryButton_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "WorkflowHistoryButton",
          props: {
            workflowId: {},
            isNewWorkflow: {
              type: Boolean
            }
          },
          setup(__props) {
            const locale = useI18n();
            const props = __props;
            const workflowHistoryRoute = computed(() => ({
              name: VIEWS.WORKFLOW_HISTORY,
              params: {
                workflowId: props.workflowId
              }
            }));
            return (_ctx, _cache) => {
              const _component_RouterLink = resolveComponent("RouterLink");
              return openBlock(), createBlock(unref(N8nTooltip_default), {
                placement: "bottom"
              }, {
                content: withCtx(() => [_ctx.isNewWorkflow ? (openBlock(), createElementBlock("span", _hoisted_1$1, toDisplayString(unref(locale).baseText("workflowHistory.button.tooltip.empty")), 1)) : (openBlock(), createElementBlock("span", _hoisted_2$1, toDisplayString(unref(locale).baseText("workflowHistory.button.tooltip")), 1))]),
                default: withCtx(() => [createVNode(_component_RouterLink, {
                  to: workflowHistoryRoute.value
                }, {
                  default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
                    disabled: _ctx.isNewWorkflow,
                    "data-test-id": "workflow-history-button",
                    type: "highlight",
                    icon: "history",
                    size: "medium"
                  }, null, 8, ["disabled"])]),
                  _: 1
                }, 8, ["to"])]),
                _: 1
              });
            };
          }
        }); //#endregion
        //#region src/features/workflows/workflowHistory/components/WorkflowHistoryButton.vue
        WorkflowHistoryButton_default = WorkflowHistoryButton_vue_vue_type_script_setup_true_lang_default; //#endregion
        //#region ../../@n8n/utils/dist/sanitize.mjs
        INVALID_CHARS_REGEX = /[<>:"/\\|?*\u0000-\u001F\u007F-\u009F]/g;
        ZERO_WIDTH_CHARS_REGEX = /[\u200B-\u200D\u2060\uFEFF]/g;
        UNICODE_SPACES_REGEX = /[\u00A0\u2000-\u200A]/g;
        LEADING_TRAILING_DOTS_SPACES_REGEX = /^[\s.]+|[\s.]+$/g;
        WINDOWS_RESERVED_NAMES = new Set(["CON", "PRN", "AUX", "NUL", "COM1", "COM2", "COM3", "COM4", "COM5", "COM6", "COM7", "COM8", "COM9", "LPT1", "LPT2", "LPT3", "LPT4", "LPT5", "LPT6", "LPT7", "LPT8", "LPT9"]);
        DEFAULT_FALLBACK_NAME = "untitled";
        MAX_FILENAME_LENGTH = 200;
        /**
        * Sanitizes a filename to be compatible with Mac, Linux, and Windows file systems
        *
        * Main features:
        * - Replace invalid characters (e.g. ":" in hello:world)
        * - Handle Windows reserved names
        * - Limit filename length
        * - Normalize Unicode characters
        *
        * @param filename - The filename to sanitize (without extension)
        * @param maxLength - Maximum filename length (default: 200)
        * @returns A sanitized filename (without extension)
        *
        * @example
        * sanitizeFilename('hello:world') // returns 'hello_world'
        * sanitizeFilename('CON') // returns '_CON'
        * sanitizeFilename('') // returns 'untitled'
        */
        sanitizeFilename = (filename, maxLength = MAX_FILENAME_LENGTH) => {
          if (!filename) return DEFAULT_FALLBACK_NAME;
          let baseName = filename.trim().replace(INVALID_CHARS_REGEX, "_").replace(ZERO_WIDTH_CHARS_REGEX, "").replace(UNICODE_SPACES_REGEX, " ").replace(LEADING_TRAILING_DOTS_SPACES_REGEX, "");
          if (!baseName) baseName = DEFAULT_FALLBACK_NAME;
          if (WINDOWS_RESERVED_NAMES.has(baseName.toUpperCase())) baseName = `_${baseName}`;
          if (baseName.length > maxLength) baseName = baseName.slice(0, maxLength);
          return baseName;
        }; //#endregion
        //#region src/app/components/MainHeader/utils.ts
        import_FileSaver_min = /* @__PURE__ */__toESM(require_FileSaver_min());
        getWorkflowId = (propId, routeName) => {
          let id = void 0;
          if (propId !== "__EMPTY__") id = propId;else if (routeName && routeName !== "new") id = routeName;
          return id;
        }; //#endregion
        //#region src/app/components/MainHeader/ActionsDropdownMenu.vue?vue&type=script&setup=true&lang.ts
        ActionsDropdownMenu_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "ActionsDropdownMenu",
          props: {
            workflowPermissions: {},
            isNewWorkflow: {
              type: Boolean
            },
            readOnly: {
              type: Boolean
            },
            isArchived: {
              type: Boolean
            },
            id: {},
            name: {},
            tags: {},
            currentFolder: {},
            meta: {}
          },
          emits: ["workflow:saved"],
          setup(__props, {
            expose: __expose,
            emit: __emit
          }) {
            const props = __props;
            const emit = __emit;
            const importFileRef = ref();
            const toast = useToast();
            const locale = useI18n();
            const route = useRoute();
            const projectsStore = useProjectsStore();
            const sourceControlStore = useSourceControlStore();
            const workflowsStore = useWorkflowsStore();
            const uiStore = useUIStore();
            const $style = useCssModule();
            const rootStore = useRootStore();
            const tagsStore = useTagsStore();
            const settingsStore = useSettingsStore();
            const usersStore = useUsersStore();
            const workflowHelpers = useWorkflowHelpers();
            const workflowActivate = useWorkflowActivate();
            const changeOwnerEventBus = createEventBus();
            const workflowTelemetry = useTelemetry();
            const onWorkflowPage = computed(() => {
              return route.meta && (route.meta.nodeView || route.meta.keepWorkflowAlive === true);
            });
            const onExecutionsTab = computed(() => {
              return [VIEWS.EXECUTION_HOME.toString(), VIEWS.WORKFLOW_EXECUTIONS.toString(), VIEWS.EXECUTION_PREVIEW].includes(route.name || "");
            });
            const activeVersion = computed(() => workflowsStore.workflow.activeVersion);
            const isDraftPublishEnabled = true;
            const isSharingEnabled = computed(() => settingsStore.isEnterpriseFeatureEnabled[EnterpriseEditionFeature.Sharing]);
            function handleFileImport() {
              const inputRef = importFileRef.value;
              if (inputRef?.files && inputRef.files.length !== 0) {
                const reader = new FileReader();
                reader.onload = () => {
                  let workflowData;
                  try {
                    workflowData = JSON.parse(reader.result);
                  } catch (error) {
                    toast.showMessage({
                      title: locale.baseText("mainSidebar.showMessage.handleFileImport.title"),
                      message: locale.baseText("mainSidebar.showMessage.handleFileImport.message"),
                      type: "error"
                    });
                    return;
                  } finally {
                    reader.onload = null;
                    inputRef.value = "";
                  }
                  nodeViewEventBus.emit("importWorkflowData", {
                    data: workflowData
                  });
                };
                reader.readAsText(inputRef.files[0]);
              }
            }
            const workflowMenuItems = computed(() => {
              const actions = [{
                id: WORKFLOW_MENU_ACTIONS.DOWNLOAD,
                label: locale.baseText("menuActions.download"),
                disabled: !onWorkflowPage.value
              }];
              if (isDraftPublishEnabled && isSharingEnabled.value) actions.push({
                id: WORKFLOW_MENU_ACTIONS.SHARE,
                label: locale.baseText("workflowDetails.share"),
                disabled: !onWorkflowPage.value
              });
              if (props.workflowPermissions.move && projectsStore.isTeamProjectFeatureEnabled) actions.push({
                id: WORKFLOW_MENU_ACTIONS.CHANGE_OWNER,
                label: locale.baseText("workflows.item.changeOwner"),
                disabled: props.isNewWorkflow
              });
              if (!props.readOnly && !props.isArchived) actions.push({
                id: WORKFLOW_MENU_ACTIONS.RENAME,
                label: locale.baseText("generic.rename"),
                disabled: !onWorkflowPage.value || props.workflowPermissions.update !== true
              });
              if (props.workflowPermissions.update === true && !props.readOnly && !props.isArchived || props.isNewWorkflow) {
                actions.unshift({
                  id: WORKFLOW_MENU_ACTIONS.DUPLICATE,
                  label: locale.baseText("menuActions.duplicate"),
                  disabled: !onWorkflowPage.value || !props.id
                });
                actions.push({
                  id: WORKFLOW_MENU_ACTIONS.IMPORT_FROM_URL,
                  label: locale.baseText("menuActions.importFromUrl"),
                  disabled: !onWorkflowPage.value || onExecutionsTab.value
                }, {
                  id: WORKFLOW_MENU_ACTIONS.IMPORT_FROM_FILE,
                  label: locale.baseText("menuActions.importFromFile"),
                  disabled: !onWorkflowPage.value || onExecutionsTab.value
                });
              }
              if (hasPermission(["rbac"], {
                rbac: {
                  scope: "sourceControl:push"
                }
              })) actions.push({
                id: WORKFLOW_MENU_ACTIONS.PUSH,
                label: locale.baseText("menuActions.push"),
                disabled: !sourceControlStore.isEnterpriseSourceControlEnabled || !onWorkflowPage.value || onExecutionsTab.value || sourceControlStore.preferences.branchReadOnly
              });
              actions.push({
                id: WORKFLOW_MENU_ACTIONS.SETTINGS,
                label: locale.baseText("generic.settings"),
                disabled: !onWorkflowPage.value || props.isNewWorkflow
              });
              if (isDraftPublishEnabled && activeVersion.value && props.workflowPermissions.update && !props.readOnly) actions.push({
                id: WORKFLOW_MENU_ACTIONS.UNPUBLISH,
                label: locale.baseText("menuActions.unpublish"),
                disabled: !onWorkflowPage.value
              });
              if (props.workflowPermissions.delete === true && !props.readOnly || props.isNewWorkflow) if (props.isArchived) {
                actions.push({
                  id: WORKFLOW_MENU_ACTIONS.UNARCHIVE,
                  label: locale.baseText("menuActions.unarchive"),
                  disabled: !onWorkflowPage.value || props.isNewWorkflow
                });
                actions.push({
                  id: WORKFLOW_MENU_ACTIONS.DELETE,
                  label: locale.baseText("menuActions.delete"),
                  disabled: !onWorkflowPage.value || props.isNewWorkflow,
                  customClass: $style.deleteItem,
                  divided: true
                });
              } else actions.push({
                id: WORKFLOW_MENU_ACTIONS.ARCHIVE,
                label: locale.baseText("menuActions.archive"),
                disabled: !onWorkflowPage.value || props.isNewWorkflow,
                customClass: $style.deleteItem,
                divided: true
              });
              return actions;
            });
            function onUnpublishWorkflow() {
              const workflowId = getWorkflowId(props.id, route.params.name);
              if (!workflowId || !activeVersion.value) {
                toast.showMessage({
                  title: locale.baseText("workflowHistory.action.unpublish.notAvailable"),
                  type: "warning"
                });
                return;
              }
              const unpublishEventBus = createEventBus();
              unpublishEventBus.once("unpublish", async () => {
                const success = await workflowActivate.unpublishWorkflowFromHistory(workflowId);
                uiStore.closeModal(WORKFLOW_HISTORY_VERSION_UNPUBLISH);
                if (success) toast.showMessage({
                  title: locale.baseText("workflowHistory.action.unpublish.success.title"),
                  type: "success"
                });
              });
              uiStore.openModalWithData({
                name: WORKFLOW_HISTORY_VERSION_UNPUBLISH,
                data: {
                  versionName: activeVersion.value.name,
                  eventBus: unpublishEventBus
                }
              });
            }
            async function onWorkflowMenuSelect(action) {
              switch (action) {
                case WORKFLOW_MENU_ACTIONS.DUPLICATE:
                  uiStore.openModalWithData({
                    name: DUPLICATE_MODAL_KEY,
                    data: {
                      id: props.id,
                      name: props.name,
                      tags: props.tags,
                      parentFolderId: props.currentFolder?.id
                    }
                  });
                  break;
                case WORKFLOW_MENU_ACTIONS.RENAME:
                  nodeViewEventBus.emit("renameWorkflow");
                  break;
                case WORKFLOW_MENU_ACTIONS.DOWNLOAD:
                  {
                    const workflowData = await workflowHelpers.getWorkflowDataToSave();
                    const {
                      tags,
                      ...data
                    } = workflowData;
                    const exportData = {
                      ...data,
                      meta: {
                        ...props.meta,
                        instanceId: rootStore.instanceId
                      },
                      tags: (tags ?? []).map(tagId => {
                        const {
                          usageCount,
                          ...tag
                        } = tagsStore.tagsById[tagId];
                        return tag;
                      })
                    };
                    const blob = new Blob([JSON.stringify(exportData, null, 2)], {
                      type: "application/json;charset=utf-8"
                    });
                    let name = props.name || "unsaved_workflow";
                    name = sanitizeFilename(name);
                    telemetry.track("User exported workflow", {
                      workflow_id: workflowData.id
                    });
                    (0, import_FileSaver_min.default)(blob, name + ".json");
                    break;
                  }
                case WORKFLOW_MENU_ACTIONS.IMPORT_FROM_URL:
                  uiStore.openModal(IMPORT_WORKFLOW_URL_MODAL_KEY);
                  break;
                case WORKFLOW_MENU_ACTIONS.IMPORT_FROM_FILE:
                  nodeViewEventBus.emit("importWorkflowFromFile");
                  break;
                case WORKFLOW_MENU_ACTIONS.PUSH:
                  try {
                    emit("workflow:saved");
                    router_default.push({
                      query: {
                        ...route.query,
                        sourceControl: "push"
                      }
                    });
                  } catch (error) {
                    switch (error.message) {
                      case "source_control_not_connected":
                        toast.showError({
                          ...error,
                          message: ""
                        }, locale.baseText("settings.sourceControl.error.not.connected.title"), locale.baseText("settings.sourceControl.error.not.connected.message"));
                        break;
                      default:
                        toast.showError(error, locale.baseText("error"));
                    }
                  }
                  break;
                case WORKFLOW_MENU_ACTIONS.SETTINGS:
                  uiStore.openModal(WORKFLOW_SETTINGS_MODAL_KEY);
                  break;
                case WORKFLOW_MENU_ACTIONS.SHARE:
                  uiStore.openModalWithData({
                    name: WORKFLOW_SHARE_MODAL_KEY,
                    data: {
                      id: props.id
                    }
                  });
                  workflowTelemetry.track("User opened sharing modal", {
                    workflow_id: props.id,
                    user_id_sharer: usersStore.currentUser?.id,
                    sub_view: route.name === VIEWS.WORKFLOWS ? "Workflows listing" : "Workflow editor"
                  });
                  break;
                case WORKFLOW_MENU_ACTIONS.ARCHIVE:
                  nodeViewEventBus.emit("archiveWorkflow");
                  break;
                case WORKFLOW_MENU_ACTIONS.UNARCHIVE:
                  nodeViewEventBus.emit("unarchiveWorkflow");
                  break;
                case WORKFLOW_MENU_ACTIONS.DELETE:
                  nodeViewEventBus.emit("deleteWorkflow");
                  break;
                case WORKFLOW_MENU_ACTIONS.CHANGE_OWNER:
                  {
                    const workflowId = getWorkflowId(props.id, route.params.name);
                    if (!workflowId) return;
                    changeOwnerEventBus.once("resource-moved", async () => await router_default.push({
                      name: VIEWS.WORKFLOWS
                    }));
                    uiStore.openModalWithData({
                      name: PROJECT_MOVE_RESOURCE_MODAL,
                      data: {
                        resource: workflowsStore.workflowsById[workflowId],
                        resourceType: ResourceType.Workflow,
                        resourceTypeLabel: locale.baseText("generic.workflow").toLowerCase(),
                        eventBus: changeOwnerEventBus
                      }
                    });
                    break;
                  }
                case WORKFLOW_MENU_ACTIONS.UNPUBLISH:
                  onUnpublishWorkflow();
                  break;
                default:
                  break;
              }
            }
            onMounted(() => {
              nodeViewEventBus.on("unpublishWorkflow", onUnpublishWorkflow);
            });
            onBeforeUnmount(() => {
              nodeViewEventBus.off("unpublishWorkflow", onUnpublishWorkflow);
            });
            __expose({
              importFileRef
            });
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass([unref($style).group])
              }, [createBaseVNode("input", {
                ref_key: "importFileRef",
                ref: importFileRef,
                class: normalizeClass(unref($style).hiddenInput),
                type: "file",
                "data-test-id": "workflow-import-input",
                onChange: _cache[0] || (_cache[0] = $event => handleFileImport())
              }, null, 34), createVNode(unref(N8nActionDropdown_default), {
                items: workflowMenuItems.value,
                "data-test-id": "workflow-menu",
                onSelect: onWorkflowMenuSelect
              }, null, 8, ["items"])], 2);
            };
          }
        }); //#endregion
        //#region src/app/components/MainHeader/ActionsDropdownMenu.vue?vue&type=style&index=0&lang.module.scss
        deleteItem = "_deleteItem_ntqfl_123";
        group$1 = "_group_ntqfl_127";
        hiddenInput = "_hiddenInput_ntqfl_132";
        ActionsDropdownMenu_vue_vue_type_style_index_0_lang_module_default = {
          deleteItem,
          group: group$1,
          hiddenInput
        }; //#endregion
        //#region src/app/components/MainHeader/ActionsDropdownMenu.vue
        cssModules$5 = {
          "$style": ActionsDropdownMenu_vue_vue_type_style_index_0_lang_module_default
        };
        ActionsDropdownMenu_default = /* @__PURE__ */__plugin_vue_export_helper_default(ActionsDropdownMenu_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$5]]); //#endregion
        //#region src/app/components/MainHeader/WorkflowHeaderActions.vue?vue&type=script&setup=true&lang.ts
        WorkflowHeaderActions_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "WorkflowHeaderActions",
          props: {
            readOnly: {
              type: Boolean
            },
            id: {},
            tags: {},
            name: {},
            meta: {},
            active: {
              type: Boolean
            },
            currentFolder: {},
            isArchived: {
              type: Boolean
            },
            isNewWorkflow: {
              type: Boolean
            },
            workflowPermissions: {}
          },
          emits: ["workflow:deactivated", "workflow:saved"],
          setup(__props, {
            expose: __expose,
            emit: __emit
          }) {
            const i18n = useI18n();
            const uiStore = useUIStore();
            const telemetry$1 = useTelemetry();
            const usersStore = useUsersStore();
            const route = useRoute();
            const pageRedirectionHelper = usePageRedirectionHelper();
            const $style = useCssModule();
            const props = __props;
            const emit = __emit;
            const isWorkflowSaving = computed(() => {
              return uiStore.isActionActive.workflowSaving;
            });
            const actionsMenuRef = useTemplateRef("actionsMenu");
            const importFileRef = computed(() => actionsMenuRef.value?.importFileRef);
            const onWorkflowActiveToggle = async value => {
              if (!value.active) emit("workflow:deactivated");
            };
            function onShareButtonClick() {
              uiStore.openModalWithData({
                name: WORKFLOW_SHARE_MODAL_KEY,
                data: {
                  id: props.id
                }
              });
              telemetry$1.track("User opened sharing modal", {
                workflow_id: props.id,
                user_id_sharer: usersStore.currentUser?.id,
                sub_view: route.name === VIEWS.WORKFLOWS ? "Workflows listing" : "Workflow editor"
              });
            }
            function goToUpgrade() {
              pageRedirectionHelper.goToUpgrade("workflow_sharing", "upgrade-workflow-sharing");
            }
            __expose({
              importFileRef
            });
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(unref($style).container)
              }, [createBaseVNode("span", {
                class: normalizeClass([unref($style).activator, unref($style).group])
              }, [createVNode(WorkflowActivator_default, {
                "is-archived": _ctx.isArchived,
                "workflow-active": _ctx.active,
                "workflow-id": _ctx.id,
                "workflow-permissions": _ctx.workflowPermissions,
                "onUpdate:workflowActive": onWorkflowActiveToggle
              }, null, 8, ["is-archived", "workflow-active", "workflow-id", "workflow-permissions"])], 2), createVNode(EnterpriseEdition_ee_default, {
                features: [unref(EnterpriseEditionFeature).Sharing]
              }, {
                fallback: withCtx(() => [createVNode(unref(N8nTooltip_default), null, {
                  content: withCtx(() => [createVNode(unref(I18nT), {
                    keypath: unref(uiStore).contextBasedTranslationKeys.workflows.sharing.unavailable.description.tooltip,
                    tag: "span",
                    scope: "global"
                  }, {
                    action: withCtx(() => [createBaseVNode("a", {
                      onClick: goToUpgrade
                    }, toDisplayString(unref(i18n).baseText(unref(uiStore).contextBasedTranslationKeys.workflows.sharing.unavailable.button)), 1)]),
                    _: 1
                  }, 8, ["keypath"])]),
                  default: withCtx(() => [createVNode(unref(N8nButton_default), {
                    type: "secondary",
                    class: normalizeClass(["mr-2xs", unref($style).disabledShareButton])
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowDetails.share")), 1)]),
                    _: 1
                  }, 8, ["class"])]),
                  _: 1
                })]),
                default: withCtx(() => [createBaseVNode("div", {
                  class: normalizeClass(unref($style).group)
                }, [!_ctx.isNewWorkflow ? (openBlock(), createBlock(CollaborationPane_default, {
                  key: 0
                })) : createCommentVNode("", true), createVNode(unref(N8nButton_default), {
                  type: "secondary",
                  "data-test-id": "workflow-share-button",
                  onClick: onShareButtonClick
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowDetails.share")), 1)]),
                  _: 1
                })], 2)]),
                _: 1
              }, 8, ["features"]), createBaseVNode("div", {
                class: normalizeClass(unref($style).group)
              }, [createVNode(SaveButton_default, {
                type: "primary",
                saved: !unref(uiStore).stateIsDirty && !_ctx.isNewWorkflow,
                disabled: isWorkflowSaving.value || _ctx.readOnly || _ctx.isArchived || !_ctx.isNewWorkflow && !_ctx.workflowPermissions.update,
                "is-saving": isWorkflowSaving.value,
                "with-shortcut": !_ctx.readOnly && !_ctx.isArchived && _ctx.workflowPermissions.update,
                "shortcut-tooltip": unref(i18n).baseText("saveWorkflowButton.hint"),
                "data-test-id": "workflow-save-button",
                onClick: _cache[0] || (_cache[0] = $event => _ctx.$emit("workflow:saved"))
              }, null, 8, ["saved", "disabled", "is-saving", "with-shortcut", "shortcut-tooltip"]), createVNode(WorkflowHistoryButton_default, {
                "workflow-id": props.id,
                "is-new-workflow": _ctx.isNewWorkflow
              }, null, 8, ["workflow-id", "is-new-workflow"]), createVNode(ActionsDropdownMenu_default, {
                id: _ctx.id,
                ref: "actionsMenu",
                "workflow-permissions": _ctx.workflowPermissions,
                "is-new-workflow": _ctx.isNewWorkflow,
                "read-only": _ctx.readOnly,
                "is-archived": _ctx.isArchived,
                name: _ctx.name,
                tags: _ctx.tags,
                "current-folder": _ctx.currentFolder,
                meta: _ctx.meta,
                "onWorkflow:saved": _cache[1] || (_cache[1] = $event => _ctx.$emit("workflow:saved"))
              }, null, 8, ["id", "workflow-permissions", "is-new-workflow", "read-only", "is-archived", "name", "tags", "current-folder", "meta"])], 2)], 2);
            };
          }
        }); //#endregion
        //#region src/app/components/MainHeader/WorkflowHeaderActions.vue?vue&type=style&index=0&lang.module.scss
        container$3 = "_container_uqc1z_123";
        activator = "_activator_uqc1z_127";
        group = "_group_uqc1z_138";
        disabledShareButton = "_disabledShareButton_uqc1z_143";
        WorkflowHeaderActions_vue_vue_type_style_index_0_lang_module_default = {
          container: container$3,
          activator,
          group,
          disabledShareButton
        }; //#endregion
        //#region src/app/components/MainHeader/WorkflowHeaderActions.vue
        cssModules$4 = {
          "$style": WorkflowHeaderActions_vue_vue_type_style_index_0_lang_module_default
        };
        WorkflowHeaderActions_default = /* @__PURE__ */__plugin_vue_export_helper_default(WorkflowHeaderActions_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$4]]); //#endregion
        //#region src/app/components/MainHeader/WorkflowHeaderDraftPublishActions.vue?vue&type=script&setup=true&lang.ts
        WorkflowHeaderDraftPublishActions_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "WorkflowHeaderDraftPublishActions",
          props: {
            readOnly: {
              type: Boolean
            },
            id: {},
            tags: {},
            name: {},
            meta: {},
            currentFolder: {},
            isArchived: {
              type: Boolean
            },
            isNewWorkflow: {
              type: Boolean
            },
            workflowPermissions: {}
          },
          emits: ["workflow:saved"],
          setup(__props, {
            expose: __expose
          }) {
            const props = __props;
            const actionsMenuRef = useTemplateRef("actionsMenu");
            const locale = useI18n();
            const uiStore = useUIStore();
            const workflowsStore = useWorkflowsStore();
            const i18n = useI18n();
            const {
              saveCurrentWorkflow
            } = useWorkflowSaving({
              router: useRouter()
            });
            const autoSaveForPublish = ref(false);
            const isWorkflowSaving = computed(() => {
              return uiStore.isActionActive.workflowSaving && !autoSaveForPublish.value;
            });
            const importFileRef = computed(() => actionsMenuRef.value?.importFileRef);
            const onPublishButtonClick = async () => {
              if (uiStore.stateIsDirty || props.isNewWorkflow) {
                autoSaveForPublish.value = true;
                const saved = await saveCurrentWorkflow({}, true);
                autoSaveForPublish.value = false;
                if (!saved) return;
              }
              uiStore.openModalWithData({
                name: WORKFLOW_PUBLISH_MODAL_KEY,
                data: {}
              });
            };
            const foundTriggers = computed(() => getActivatableTriggerNodes(workflowsStore.workflowTriggerNodes));
            const containsTrigger = computed(() => {
              return foundTriggers.value.length > 0;
            });
            const isWorkflowSaved = computed(() => {
              return !uiStore.stateIsDirty && !props.isNewWorkflow;
            });
            const showPublishIndicator = computed(() => {
              if (!containsTrigger.value) return false;
              if (workflowsStore.nodesIssuesExist) return false;
              return workflowsStore.workflow.versionId && workflowsStore.workflow.versionId !== workflowsStore.workflow.activeVersion?.versionId || uiStore.stateIsDirty;
            });
            const activeVersion = computed(() => workflowsStore.workflow.activeVersion);
            const activeVersionName = computed(() => {
              if (!activeVersion.value) return "";
              return activeVersion.value.name || generateVersionName(activeVersion.value.versionId);
            });
            const latestPublishDate = computed(() => {
              return getLastPublishedVersion(activeVersion.value?.workflowPublishHistory ?? [])?.createdAt;
            });
            onMounted(() => {
              nodeViewEventBus.on("publishWorkflow", onPublishButtonClick);
            });
            onBeforeUnmount(() => {
              nodeViewEventBus.off("publishWorkflow", onPublishButtonClick);
            });
            __expose({
              importFileRef
            });
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(_ctx.$style.container)
              }, [!_ctx.isNewWorkflow ? (openBlock(), createBlock(CollaborationPane_default, {
                key: 0
              })) : createCommentVNode("", true), activeVersion.value ? (openBlock(), createElementBlock("div", {
                key: 1,
                class: normalizeClass(_ctx.$style.activeVersionIndicator),
                "data-test-id": "workflow-active-version-indicator"
              }, [createVNode(unref(N8nTooltip_default), null, {
                content: withCtx(() => [createTextVNode(toDisplayString(activeVersionName.value), 1), _cache[2] || (_cache[2] = createBaseVNode("br", null, null, -1)), createTextVNode(toDisplayString(unref(i18n).baseText("workflowHistory.item.active")) + " ", 1), latestPublishDate.value ? (openBlock(), createBlock(TimeAgo_default, {
                  key: 0,
                  date: latestPublishDate.value
                }, null, 8, ["date"])) : createCommentVNode("", true)]),
                default: withCtx(() => [createVNode(unref(N8nIcon_default), {
                  icon: "circle-check",
                  color: "success",
                  size: "xlarge",
                  class: normalizeClass(_ctx.$style.icon)
                }, null, 8, ["class"])]),
                _: 1
              })], 2)) : createCommentVNode("", true), !_ctx.isArchived && _ctx.workflowPermissions.update ? (openBlock(), createElementBlock("div", {
                key: 2,
                class: normalizeClass(_ctx.$style.publishButtonWrapper)
              }, [createVNode(unref(N8nButton_default), {
                loading: autoSaveForPublish.value,
                disabled: isWorkflowSaving.value,
                type: "secondary",
                "data-test-id": "workflow-open-publish-modal-button",
                onClick: onPublishButtonClick
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("workflows.publish")), 1)]),
                _: 1
              }, 8, ["loading", "disabled"]), showPublishIndicator.value ? (openBlock(), createElementBlock("span", {
                key: 0,
                class: normalizeClass(_ctx.$style.publishButtonIndicator),
                "data-test-id": "workflow-publish-indicator"
              }, null, 2)) : createCommentVNode("", true)], 2)) : createCommentVNode("", true), createVNode(SaveButton_default, {
                type: "primary",
                saved: isWorkflowSaved.value,
                disabled: isWorkflowSaving.value || _ctx.readOnly || _ctx.isArchived || !_ctx.isNewWorkflow && !_ctx.workflowPermissions.update,
                "is-saving": isWorkflowSaving.value,
                "with-shortcut": !_ctx.readOnly && !_ctx.isArchived && _ctx.workflowPermissions.update,
                "shortcut-tooltip": unref(i18n).baseText("saveWorkflowButton.hint"),
                "data-test-id": "workflow-save-button",
                onClick: _cache[0] || (_cache[0] = $event => _ctx.$emit("workflow:saved"))
              }, null, 8, ["saved", "disabled", "is-saving", "with-shortcut", "shortcut-tooltip"]), createVNode(WorkflowHistoryButton_default, {
                "workflow-id": props.id,
                "is-new-workflow": _ctx.isNewWorkflow
              }, null, 8, ["workflow-id", "is-new-workflow"]), createVNode(ActionsDropdownMenu_default, {
                id: _ctx.id,
                ref: "actionsMenu",
                "workflow-permissions": _ctx.workflowPermissions,
                "is-new-workflow": _ctx.isNewWorkflow,
                "read-only": _ctx.readOnly,
                "is-archived": _ctx.isArchived,
                name: _ctx.name,
                tags: _ctx.tags,
                "current-folder": _ctx.currentFolder,
                meta: _ctx.meta,
                "onWorkflow:saved": _cache[1] || (_cache[1] = $event => _ctx.$emit("workflow:saved"))
              }, null, 8, ["id", "workflow-permissions", "is-new-workflow", "read-only", "is-archived", "name", "tags", "current-folder", "meta"])], 2);
            };
          }
        }); //#endregion
        //#region src/app/components/MainHeader/WorkflowHeaderDraftPublishActions.vue?vue&type=style&index=0&lang.module.scss
        container$2 = "_container_19vh4_123";
        activeVersionIndicator = "_activeVersionIndicator_19vh4_127";
        icon = "_icon_19vh4_131";
        publishButtonWrapper = "_publishButtonWrapper_19vh4_135";
        publishButtonIndicator = "_publishButtonIndicator_19vh4_140";
        WorkflowHeaderDraftPublishActions_vue_vue_type_style_index_0_lang_module_default = {
          container: container$2,
          activeVersionIndicator,
          icon,
          publishButtonWrapper,
          publishButtonIndicator
        }; //#endregion
        //#region src/app/components/MainHeader/WorkflowHeaderDraftPublishActions.vue
        cssModules$3 = {
          "$style": WorkflowHeaderDraftPublishActions_vue_vue_type_style_index_0_lang_module_default
        };
        WorkflowHeaderDraftPublishActions_default = /* @__PURE__ */__plugin_vue_export_helper_default(WorkflowHeaderDraftPublishActions_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$3]]); //#endregion
        //#region src/app/components/MainHeader/WorkflowDescriptionPopover.vue?vue&type=script&setup=true&lang.ts
        WorkflowDescriptionPopover_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "WorkflowDescriptionPopover",
          props: {
            workflowId: {},
            workflowDescription: {
              default: ""
            }
          },
          setup(__props) {
            const props = __props;
            const i18n = useI18n();
            const toast = useToast();
            const telemetry$1 = useTelemetry();
            const settingsStore = useSettingsStore();
            const workflowStore = useWorkflowsStore();
            const uiStore = useUIStore();
            const descriptionValue = ref(props.workflowDescription);
            const popoverOpen = ref(false);
            const descriptionInput = useTemplateRef("descriptionInput");
            const isSaving = ref(false);
            const lastSavedDescription = ref(props.workflowDescription);
            const normalizedCurrentValue = computed(() => (descriptionValue.value ?? "").trim());
            const normalizedLastSaved = computed(() => (lastSavedDescription.value ?? "").trim());
            const canSave = computed(() => normalizedCurrentValue.value !== normalizedLastSaved.value);
            const isMcpEnabled = computed(() => settingsStore.isModuleActive("mcp") && settingsStore.moduleSettings.mcp?.mcpAccessEnabled);
            const textareaTip = computed(() => {
              if (!isMcpEnabled.value) return i18n.baseText("workflow.description.tooltip");
              return i18n.baseText("workflow.description.placeholder.mcp");
            });
            const saveDescription = async () => {
              isSaving.value = true;
              uiStore.addActiveAction("workflowSaving");
              try {
                await workflowStore.saveWorkflowDescription(props.workflowId, normalizedCurrentValue.value ?? null);
                lastSavedDescription.value = descriptionValue.value;
                uiStore.stateIsDirty = false;
                telemetry$1.track("User set workflow description", {
                  workflow_id: props.workflowId,
                  description: normalizedCurrentValue.value ?? null
                });
              } catch (error) {
                toast.showError(error, i18n.baseText("workflow.description.error.title"));
                descriptionValue.value = lastSavedDescription.value;
              } finally {
                isSaving.value = false;
                uiStore.removeActiveAction("workflowSaving");
              }
            };
            const handlePopoverOpenChange = async open => {
              popoverOpen.value = open;
              if (open) {
                await nextTick();
                descriptionInput.value?.focus();
              } else await saveDescription();
            };
            const handleKeyDown = async event => {
              if (event.key === "Escape") {
                event.preventDefault();
                event.stopPropagation();
                await cancel();
              }
              if (event.key === "Enter" && !event.shiftKey) {
                if (!canSave.value) return;
                event.preventDefault();
                event.stopPropagation();
                await save();
              }
            };
            const cancel = async () => {
              descriptionValue.value = lastSavedDescription.value;
              uiStore.stateIsDirty = false;
              popoverOpen.value = false;
            };
            const save = async () => {
              await saveDescription();
              popoverOpen.value = false;
            };
            watch(() => props.workflowDescription, newValue => {
              descriptionValue.value = newValue;
              lastSavedDescription.value = newValue;
            });
            watch(descriptionValue, newValue => {
              if ((newValue ?? "").trim() !== normalizedLastSaved.value) uiStore.stateIsDirty = true;else uiStore.stateIsDirty = false;
            });
            return (_ctx, _cache) => {
              return openBlock(), createBlock(unref(N8nTooltip_default), {
                disabled: popoverOpen.value,
                content: unref(i18n).baseText("workflow.description.tooltip")
              }, {
                default: withCtx(() => [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style["description-popover-wrapper"]),
                  "data-test-id": "workflow-description-popover"
                }, [createVNode(unref(N8nPopoverReka_default), {
                  id: "workflow-description-popover",
                  open: popoverOpen.value,
                  "onUpdate:open": handlePopoverOpenChange
                }, {
                  trigger: withCtx(() => [createVNode(unref(N8nIconButton_default), {
                    class: normalizeClass({
                      [_ctx.$style["description-button"]]: true,
                      [_ctx.$style.active]: popoverOpen.value
                    }),
                    square: true,
                    "data-test-id": "workflow-description-button",
                    icon: "notebook-pen",
                    type: "tertiary",
                    size: "small",
                    "aria-label": unref(i18n).baseText("workflow.description.tooltip")
                  }, null, 8, ["class", "aria-label"])]),
                  content: withCtx(() => [createBaseVNode("div", {
                    class: normalizeClass(_ctx.$style["description-edit-content"]),
                    "data-test-id": "workflow-description-edit-content"
                  }, [createVNode(unref(N8nInputLabel_default), {
                    label: unref(i18n).baseText("generic.description"),
                    "tooltip-text": textareaTip.value
                  }, {
                    default: withCtx(() => [createVNode(unref(N8nInput_default), {
                      ref_key: "descriptionInput",
                      ref: descriptionInput,
                      modelValue: descriptionValue.value,
                      "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => descriptionValue.value = $event),
                      placeholder: textareaTip.value,
                      rows: 6,
                      "data-test-id": "workflow-description-input",
                      type: "textarea",
                      onKeydown: handleKeyDown
                    }, null, 8, ["modelValue", "placeholder"])]),
                    _: 1
                  }, 8, ["label", "tooltip-text"])], 2), createBaseVNode("footer", {
                    class: normalizeClass(_ctx.$style["popover-footer"])
                  }, [createVNode(unref(N8nButton_default), {
                    label: unref(i18n).baseText("generic.cancel"),
                    size: "small",
                    disabled: isSaving.value,
                    type: "tertiary",
                    "data-test-id": "workflow-description-cancel-button",
                    onClick: cancel
                  }, null, 8, ["label", "disabled"]), createVNode(unref(N8nButton_default), {
                    label: unref(i18n).baseText("generic.unsavedWork.confirmMessage.confirmButtonText"),
                    size: "small",
                    loading: isSaving.value,
                    disabled: !canSave.value || isSaving.value,
                    type: "primary",
                    "data-test-id": "workflow-description-save-button",
                    onClick: save
                  }, null, 8, ["label", "loading", "disabled"])], 2)]),
                  _: 1
                }, 8, ["open"])], 2)]),
                _: 1
              }, 8, ["disabled", "content"]);
            };
          }
        }); //#endregion
        //#region src/app/components/MainHeader/WorkflowDescriptionPopover.vue?vue&type=style&index=0&lang.module.scss
        active = "_active_37v5e_127";
        WorkflowDescriptionPopover_vue_vue_type_style_index_0_lang_module_default = {
          "description-button": "_description-button_37v5e_123",
          active,
          "description-edit-content": "_description-edit-content_37v5e_137",
          "popover-footer": "_popover-footer_37v5e_144"
        }; //#endregion
        //#region src/app/components/MainHeader/WorkflowDescriptionPopover.vue
        cssModules$2 = {
          "$style": WorkflowDescriptionPopover_vue_vue_type_style_index_0_lang_module_default
        };
        WorkflowDescriptionPopover_default = /* @__PURE__ */__plugin_vue_export_helper_default(WorkflowDescriptionPopover_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$2]]); //#endregion
        //#region src/app/components/MainHeader/WorkflowDetails.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1 = {
          class: "tags",
          "data-test-id": "workflow-tags-container"
        };
        _hoisted_2 = {
          key: 1
        };
        WorkflowDetails_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "WorkflowDetails",
          props: {
            readOnly: {
              type: Boolean
            },
            id: {},
            tags: {},
            name: {},
            meta: {},
            scopes: {},
            active: {
              type: Boolean
            },
            currentFolder: {},
            isArchived: {
              type: Boolean
            },
            description: {}
          },
          emits: ["workflow:deactivated"],
          setup(__props, {
            emit: __emit
          }) {
            const WORKFLOW_NAME_BP_TO_WIDTH = {
              XS: 150,
              SM: 200,
              MD: 250,
              LG: 500,
              XL: 1e3
            };
            const props = __props;
            const emit = __emit;
            const $style = useCssModule();
            const settingsStore = useSettingsStore();
            const uiStore = useUIStore();
            const workflowsStore = useWorkflowsStore();
            const projectsStore = useProjectsStore();
            const foldersStore = useFoldersStore();
            const npsSurveyStore = useNpsSurveyStore();
            const i18n = useI18n();
            const router = useRouter();
            const route = useRoute();
            const locale = useI18n();
            const telemetry$1 = useTelemetry();
            const message = useMessage();
            const toast = useToast();
            const documentTitle = useDocumentTitle();
            const workflowSaving = useWorkflowSaving({
              router
            });
            const isTagsEditEnabled = ref(false);
            const appliedTagIds = ref([]);
            const tagsSaving = ref(false);
            const workflowHeaderActionsRef = useTemplateRef("workflowHeaderActions");
            const tagsEventBus = createEventBus();
            const hasChanged = (prev, curr) => {
              if (prev.length !== curr.length) return true;
              const set = new Set(prev);
              return curr.reduce((acc, val) => acc || !set.has(val), false);
            };
            const isNewWorkflow = computed(() => {
              return !props.id || props.id === "__EMPTY__" || props.id === "new";
            });
            const isWorkflowSaving = computed(() => {
              return uiStore.isActionActive.workflowSaving;
            });
            const workflowPermissions = computed(() => getResourcePermissions(props.scopes).workflow);
            const workflowTagIds = computed(() => {
              return (props.tags ?? []).map(tag => typeof tag === "string" ? tag : tag.id);
            });
            const currentProjectName = computed(() => {
              if (projectsStore.currentProject?.type === ProjectTypes.Personal) return locale.baseText("projects.menu.personal");
              return projectsStore.currentProject?.name;
            });
            const currentFolderForBreadcrumbs = computed(() => {
              if (!isNewWorkflow.value && props.currentFolder) return props.currentFolder;
              const folderId = route.query.parentFolderId;
              if (folderId) return foldersStore.getCachedFolder(folderId);
              return null;
            });
            watch(() => props.id, () => {
              isTagsEditEnabled.value = false;
              renameInput.value?.forceCancel();
            });
            async function onSaveButtonClick() {
              if (isWorkflowSaving.value) return;
              const id = getWorkflowId(props.id, route.params.name);
              const name = props.name;
              const tags = props.tags;
              if (await workflowSaving.saveCurrentWorkflow({
                id,
                name,
                tags
              })) {
                showCreateWorkflowSuccessToast(id);
                await npsSurveyStore.fetchPromptsData();
                if (route.name === VIEWS.EXECUTION_DEBUG) await router.replace({
                  name: VIEWS.WORKFLOW,
                  params: {
                    name: props.id
                  }
                });
              }
            }
            function onTagsEditEnable() {
              appliedTagIds.value = props.tags ?? [];
              isTagsEditEnabled.value = true;
              setTimeout(() => {
                renameInput.value?.forceCancel();
                tagsEventBus.emit("focus");
              }, 0);
            }
            async function onTagsBlur() {
              const current = props.tags ?? [];
              const tags = appliedTagIds.value;
              if (!hasChanged(current, tags)) {
                isTagsEditEnabled.value = false;
                return;
              }
              if (tagsSaving.value) return;
              tagsSaving.value = true;
              const saved = await workflowSaving.saveCurrentWorkflow({
                tags
              });
              telemetry$1.track("User edited workflow tags", {
                workflow_id: props.id,
                new_tag_count: tags.length
              });
              tagsSaving.value = false;
              if (saved) isTagsEditEnabled.value = false;
            }
            function onTagsEditEsc() {
              isTagsEditEnabled.value = false;
            }
            const renameInput = useTemplateRef("renameInput");
            function onNameToggle() {
              if (renameInput.value?.forceFocus) renameInput.value.forceFocus();
            }
            async function onNameSubmit(name) {
              const newName = name.trim();
              if (!newName) {
                toast.showMessage({
                  title: locale.baseText("renameAction.emptyName.title"),
                  message: locale.baseText("renameAction.emptyName.message"),
                  type: "error"
                });
                renameInput.value?.forceCancel();
                return;
              }
              if (newName === props.name) {
                renameInput.value?.forceCancel();
                return;
              }
              uiStore.addActiveAction("workflowSaving");
              const id = getWorkflowId(props.id, route.params.name);
              if (await workflowSaving.saveCurrentWorkflow({
                name
              })) {
                showCreateWorkflowSuccessToast(id);
                documentTitle.setDocumentTitle(newName, "IDLE");
              }
              uiStore.removeActiveAction("workflowSaving");
              renameInput.value?.forceCancel();
            }
            async function handleArchiveWorkflow() {
              if (props.active) {
                if ((await message.confirm(locale.baseText("mainSidebar.confirmMessage.workflowArchive.message", {
                  interpolate: {
                    workflowName: props.name
                  }
                }), locale.baseText("mainSidebar.confirmMessage.workflowArchive.headline"), {
                  type: "warning",
                  confirmButtonText: locale.baseText("mainSidebar.confirmMessage.workflowArchive.confirmButtonText"),
                  cancelButtonText: locale.baseText("mainSidebar.confirmMessage.workflowArchive.cancelButtonText")
                })) !== "confirm") return;
              }
              try {
                await workflowsStore.archiveWorkflow(props.id);
              } catch (error) {
                toast.showError(error, locale.baseText("generic.archiveWorkflowError"));
                return;
              }
              uiStore.stateIsDirty = false;
              toast.showMessage({
                title: locale.baseText("mainSidebar.showMessage.handleArchive.title", {
                  interpolate: {
                    workflowName: props.name
                  }
                }),
                type: "success"
              });
              const workflow = workflowsStore.getWorkflowById(props.id);
              if (workflow?.homeProject?.type === ProjectTypes.Team) await router.push({
                name: VIEWS.PROJECTS_WORKFLOWS,
                params: {
                  projectId: workflow.homeProject.id
                }
              });else await router.push({
                name: VIEWS.WORKFLOWS
              });
            }
            async function handleUnarchiveWorkflow() {
              await workflowsStore.unarchiveWorkflow(props.id);
              toast.showMessage({
                title: locale.baseText("mainSidebar.showMessage.handleUnarchive.title", {
                  interpolate: {
                    workflowName: props.name
                  }
                }),
                type: "success"
              });
            }
            async function handleDeleteWorkflow() {
              if ((await message.confirm(locale.baseText("mainSidebar.confirmMessage.workflowDelete.message", {
                interpolate: {
                  workflowName: props.name
                }
              }), locale.baseText("mainSidebar.confirmMessage.workflowDelete.headline"), {
                type: "warning",
                confirmButtonText: locale.baseText("mainSidebar.confirmMessage.workflowDelete.confirmButtonText"),
                cancelButtonText: locale.baseText("mainSidebar.confirmMessage.workflowDelete.cancelButtonText")
              })) !== "confirm") return;
              const workflow = workflowsStore.getWorkflowById(props.id);
              const isTeamProject = workflow?.homeProject?.type === ProjectTypes.Team;
              try {
                await workflowsStore.deleteWorkflow(props.id);
              } catch (error) {
                toast.showError(error, locale.baseText("generic.deleteWorkflowError"));
                return;
              }
              uiStore.stateIsDirty = false;
              documentTitle.reset();
              toast.showMessage({
                title: locale.baseText("mainSidebar.showMessage.handleSelect1.title", {
                  interpolate: {
                    workflowName: props.name
                  }
                }),
                type: "success"
              });
              if (isTeamProject && workflow?.homeProject) await router.push({
                name: VIEWS.PROJECTS_WORKFLOWS,
                params: {
                  projectId: workflow.homeProject.id
                }
              });else await router.push({
                name: VIEWS.WORKFLOWS
              });
            }
            function getPersonalProjectToastContent() {
              const title = locale.baseText("workflows.create.personal.toast.title");
              if (!props.currentFolder) return {
                title
              };
              return {
                title,
                toastMessage: locale.baseText("workflows.create.folder.toast.title", {
                  interpolate: {
                    projectName: "Personal",
                    folderName: props.currentFolder.name
                  }
                })
              };
            }
            function getToastContent() {
              const currentProject = projectsStore.currentProject;
              const isPersonalProject = !projectsStore.currentProject || currentProject?.id === projectsStore.personalProject?.id;
              const projectName = currentProjectName.value ?? "";
              if (isPersonalProject) return getPersonalProjectToastContent();
              const titleKey = props.currentFolder ? "workflows.create.folder.toast.title" : "workflows.create.project.toast.title";
              const interpolateData = props.currentFolder ? {
                projectName,
                folderName: props.currentFolder.name ?? ""
              } : {
                projectName
              };
              return {
                title: locale.baseText(titleKey, {
                  interpolate: interpolateData
                }),
                toastMessage: locale.baseText("workflows.create.project.toast.text", {
                  interpolate: {
                    projectName
                  }
                })
              };
            }
            function showCreateWorkflowSuccessToast(id) {
              if (!(!id || ["new", "__EMPTY__"].includes(id))) return;
              const {
                title,
                toastMessage
              } = getToastContent();
              toast.showMessage({
                title,
                message: toastMessage,
                type: "success"
              });
            }
            const onBreadcrumbsItemSelected = item => {
              if (item.href) router.push(item.href).catch(error => {
                toast.showError(error, i18n.baseText("folders.open.error.title"));
              });
            };
            const handleImportWorkflowFromFile = () => {
              if (workflowHeaderActionsRef.value?.importFileRef) workflowHeaderActionsRef.value.importFileRef.click();
            };
            onMounted(() => {
              nodeViewEventBus.on("importWorkflowFromFile", handleImportWorkflowFromFile);
              nodeViewEventBus.on("archiveWorkflow", handleArchiveWorkflow);
              nodeViewEventBus.on("unarchiveWorkflow", handleUnarchiveWorkflow);
              nodeViewEventBus.on("deleteWorkflow", handleDeleteWorkflow);
              nodeViewEventBus.on("renameWorkflow", onNameToggle);
              nodeViewEventBus.on("addTag", onTagsEditEnable);
            });
            onBeforeUnmount(() => {
              nodeViewEventBus.off("importWorkflowFromFile", handleImportWorkflowFromFile);
              nodeViewEventBus.off("archiveWorkflow", handleArchiveWorkflow);
              nodeViewEventBus.off("unarchiveWorkflow", handleUnarchiveWorkflow);
              nodeViewEventBus.off("deleteWorkflow", handleDeleteWorkflow);
              nodeViewEventBus.off("renameWorkflow", onNameToggle);
              nodeViewEventBus.off("addTag", onTagsEditEnable);
            });
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(unref($style).container)
              }, [createVNode(BreakpointsObserver_default, {
                "value-x-s": 15,
                "value-s-m": 25,
                "value-m-d": 50,
                class: "name-container",
                "data-test-id": "canvas-breadcrumbs"
              }, {
                default: withCtx(({
                  bp
                }) => [createVNode(FolderBreadcrumbs_default, {
                  "current-folder": currentFolderForBreadcrumbs.value,
                  "current-folder-as-link": true,
                  onItemSelected: onBreadcrumbsItemSelected
                }, {
                  append: withCtx(() => [unref(projectsStore).currentProject ?? unref(projectsStore).personalProject ? (openBlock(), createElementBlock("span", {
                    key: 0,
                    class: normalizeClass(unref($style)["path-separator"])
                  }, "/", 2)) : createCommentVNode("", true), (openBlock(), createBlock(unref(N8nInlineTextEdit_default), {
                    ref_key: "renameInput",
                    ref: renameInput,
                    key: _ctx.id,
                    placeholder: "Workflow name",
                    "data-test-id": "workflow-name-input",
                    class: "name",
                    "model-value": _ctx.name,
                    "max-length": unref(128),
                    "max-width": WORKFLOW_NAME_BP_TO_WIDTH[bp],
                    "read-only": _ctx.readOnly || _ctx.isArchived || !isNewWorkflow.value && !workflowPermissions.value.update,
                    disabled: _ctx.readOnly || _ctx.isArchived || !isNewWorkflow.value && !workflowPermissions.value.update,
                    "onUpdate:modelValue": onNameSubmit
                  }, null, 8, ["model-value", "max-length", "max-width", "read-only", "disabled"]))]),
                  _: 2
                }, 1032, ["current-folder"])]),
                _: 1
              }), createBaseVNode("span", _hoisted_1, [unref(settingsStore).areTagsEnabled ? (openBlock(), createElementBlock(Fragment, {
                key: 0
              }, [isTagsEditEnabled.value && !(_ctx.readOnly || _ctx.isArchived) && (isNewWorkflow.value || workflowPermissions.value.update) ? (openBlock(), createBlock(WorkflowTagsDropdown_default, {
                key: 0,
                ref: "dropdown",
                modelValue: appliedTagIds.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => appliedTagIds.value = $event),
                "event-bus": unref(tagsEventBus),
                placeholder: unref(i18n).baseText("workflowDetails.chooseOrCreateATag"),
                class: "tags-edit",
                "data-test-id": "workflow-tags-dropdown",
                onBlur: onTagsBlur,
                onEsc: onTagsEditEsc
              }, null, 8, ["modelValue", "event-bus", "placeholder"])) : (_ctx.tags ?? []).length === 0 && !(_ctx.readOnly || _ctx.isArchived) && (isNewWorkflow.value || workflowPermissions.value.update) ? (openBlock(), createElementBlock("div", _hoisted_2, [createBaseVNode("span", {
                class: "add-tag clickable",
                "data-test-id": "new-tag-link",
                onClick: onTagsEditEnable
              }, " + " + toDisplayString(unref(i18n).baseText("workflowDetails.addTag")), 1)])) : (openBlock(), createBlock(WorkflowTagsContainer_default, {
                key: _ctx.id,
                "tag-ids": workflowTagIds.value,
                clickable: true,
                responsive: true,
                "data-test-id": "workflow-tags",
                onClick: onTagsEditEnable
              }, null, 8, ["tag-ids"]))], 64)) : createCommentVNode("", true), createBaseVNode("span", {
                class: normalizeClass(unref($style)["header-controls"])
              }, [_ctx.isArchived ? (openBlock(), createBlock(unref(N8nBadge_default), {
                key: 0,
                class: "ml-3xs",
                theme: "tertiary",
                bold: "",
                "data-test-id": "workflow-archived-tag"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("workflows.item.archived")), 1)]),
                _: 1
              })) : !props.readOnly && workflowPermissions.value.update ? (openBlock(), createBlock(WorkflowDescriptionPopover_default, {
                key: 1,
                "workflow-id": props.id,
                "workflow-description": props.description
              }, null, 8, ["workflow-id", "workflow-description"])) : createCommentVNode("", true)], 2)]), createVNode(PushConnectionTracker_default, {
                class: "actions"
              }, {
                default: withCtx(() => [!isNewWorkflow.value ? (openBlock(), createBlock(WorkflowProductionChecklist_default, {
                  key: 0,
                  workflow: unref(workflowsStore).workflow
                }, null, 8, ["workflow"])) : createCommentVNode("", true), unref(true) ? (openBlock(), createBlock(WorkflowHeaderDraftPublishActions_default, {
                  key: 1,
                  id: _ctx.id,
                  ref: "workflowHeaderActions",
                  tags: _ctx.tags,
                  name: _ctx.name,
                  meta: _ctx.meta,
                  "read-only": _ctx.readOnly,
                  "is-archived": _ctx.isArchived,
                  "is-new-workflow": isNewWorkflow.value,
                  "workflow-permissions": workflowPermissions.value,
                  "onWorkflow:saved": onSaveButtonClick
                }, null, 8, ["id", "tags", "name", "meta", "read-only", "is-archived", "is-new-workflow", "workflow-permissions"])) : (openBlock(), createBlock(WorkflowHeaderActions_default, {
                  key: 2,
                  id: _ctx.id,
                  ref: "workflowHeaderActions",
                  name: _ctx.name,
                  tags: _ctx.tags,
                  "current-folder": _ctx.currentFolder,
                  meta: _ctx.meta,
                  "read-only": _ctx.readOnly,
                  "is-archived": _ctx.isArchived,
                  active: _ctx.active,
                  "is-new-workflow": isNewWorkflow.value,
                  "workflow-permissions": workflowPermissions.value,
                  "onWorkflow:saved": onSaveButtonClick,
                  "onWorkflow:deactivated": _cache[1] || (_cache[1] = $event => emit("workflow:deactivated"))
                }, null, 8, ["id", "name", "tags", "current-folder", "meta", "read-only", "is-archived", "active", "is-new-workflow", "workflow-permissions"]))]),
                _: 1
              })], 2);
            };
          }
        }); //#endregion
        //#region src/app/components/MainHeader/WorkflowDetails.vue?vue&type=style&index=1&lang.module.scss
        container$1 = "_container_7bao3_123";
        closeNodeViewDiscovery = "_closeNodeViewDiscovery_7bao3_138";
        WorkflowDetails_vue_vue_type_style_index_1_lang_module_default = {
          container: container$1,
          "path-separator": "_path-separator_7bao3_132",
          closeNodeViewDiscovery,
          "header-controls": "_header-controls_7bao3_145"
        }; //#endregion
        //#region src/app/components/MainHeader/WorkflowDetails.vue
        cssModules$1 = {
          "$style": WorkflowDetails_vue_vue_type_style_index_1_lang_module_default
        };
        WorkflowDetails_default = /* @__PURE__ */__plugin_vue_export_helper_default(WorkflowDetails_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$1], ["__scopeId", "data-v-5dc32625"]]); //#endregion
        //#region ../../../node_modules/.pnpm/vue-github-button@3.1.3/node_modules/vue-github-button/index.js
        init_shared_esm_bundler();
        vue_github_button_default = defineComponent({
          name: "github-button",
          props: {
            href: String,
            ariaLabel: String,
            title: String,
            dataIcon: String,
            dataColorScheme: String,
            dataSize: String,
            dataShowCount: String,
            dataText: String
          },
          render: function () {
            const props = {
              ref: "_"
            };
            for (const key in this.$props) props[hyphenate(key)] = this.$props[key];
            return h("span", [hasOwn(this.$slots, "default") ? h("a", props, this.$slots.default()) : h("a", props)]);
          },
          mounted: function () {
            this.paint();
          },
          beforeUpdate: function () {
            this.reset();
          },
          updated: function () {
            this.paint();
          },
          beforeUnmount: function () {
            this.reset();
          },
          methods: {
            paint: function () {
              if (this.$el.lastChild !== this.$refs._) return;
              const _ = this.$el.appendChild(document.createElement("span"));
              const _this = this;
              __vitePreload(() => _context.import(/* webpackMode: "eager" */
              "./buttons.esm-legacy-UGn3xku4.js"), true               ? void 0 : void 0).then(function (module) {
                if (_this.$el.lastChild !== _) return;
                module.render(_.appendChild(_this.$refs._), function (el) {
                  if (_this.$el.lastChild !== _) return;
                  _.parentNode.replaceChild(el, _);
                });
              });
            },
            reset: function () {
              if (this.$refs._ == null) return;
              this.$el.replaceChild(this.$refs._, this.$el.lastChild);
            }
          }
        }); //#endregion
        //#region src/app/components/MainHeader/MainHeader.vue?vue&type=script&setup=true&lang.ts
        MainHeader_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "MainHeader",
          setup(__props) {
            const router = useRouter();
            const route = useRoute();
            const locale = useI18n();
            const pushConnection = usePushConnection({
              router
            });
            const toast = useToast();
            const ndvStore = useNDVStore();
            const uiStore = useUIStore();
            const sourceControlStore = useSourceControlStore();
            const workflowsStore = useWorkflowsStore();
            const executionsStore = useExecutionsStore();
            const settingsStore = useSettingsStore();
            const activeHeaderTab = ref(MAIN_HEADER_TABS.WORKFLOW);
            const workflowToReturnTo = ref("");
            const executionToReturnTo = ref("");
            const dirtyState = ref(false);
            const githubButtonHidden = useLocalStorage(LOCAL_STORAGE_HIDE_GITHUB_STAR_BUTTON, false);
            const evaluationRoutes = [VIEWS.EVALUATION_EDIT, VIEWS.EVALUATION_RUNS_DETAIL];
            const workflowRoutes = [VIEWS.WORKFLOW, VIEWS.NEW_WORKFLOW, VIEWS.EXECUTION_DEBUG];
            const executionRoutes = [VIEWS.EXECUTION_HOME, VIEWS.WORKFLOW_EXECUTIONS, VIEWS.EXECUTION_PREVIEW];
            const tabBarItems = computed(() => {
              return [{
                value: MAIN_HEADER_TABS.WORKFLOW,
                label: locale.baseText("generic.editor")
              }, {
                value: MAIN_HEADER_TABS.EXECUTIONS,
                label: locale.baseText("generic.executions")
              }, {
                value: MAIN_HEADER_TABS.EVALUATION,
                label: locale.baseText("generic.tests")
              }];
            });
            const activeNode = computed(() => ndvStore.activeNode);
            const hideMenuBar = computed(() => Boolean(activeNode.value && activeNode.value.type !== "n8n-nodes-base.stickyNote"));
            const workflow = computed(() => workflowsStore.workflow);
            const workflowId = computed(() => String(router.currentRoute.value.params.name || workflowsStore.workflowId));
            const onWorkflowPage = computed(() => !!(route.meta.nodeView || route.meta.keepWorkflowAlive));
            const readOnly = computed(() => sourceControlStore.preferences.branchReadOnly);
            const isEnterprise = computed(() => settingsStore.isQueueModeEnabled && settingsStore.isWorkerViewAvailable);
            const isTelemetryEnabled = computed(() => {
              return settingsStore.isTelemetryEnabled;
            });
            const showGitHubButton = computed(() => !isEnterprise.value && !settingsStore.settings.inE2ETests && !githubButtonHidden.value && isTelemetryEnabled.value);
            const parentFolderForBreadcrumbs = computed(() => {
              if (!workflow.value.parentFolder) return;
              return {
                id: workflow.value.parentFolder.id,
                name: workflow.value.parentFolder.name,
                parentFolder: workflow.value.parentFolder.parentFolderId ?? void 0
              };
            });
            watch(route, (to, from) => {
              syncTabsWithRoute(to, from);
            });
            onBeforeMount(() => {
              pushConnection.initialize();
            });
            onBeforeUnmount(() => {
              pushConnection.terminate();
            });
            onMounted(async () => {
              dirtyState.value = uiStore.stateIsDirty;
              syncTabsWithRoute(route);
            });
            function isViewRoute(name) {
              return typeof name === "string" && [evaluationRoutes, workflowRoutes, executionRoutes].flat().includes(name);
            }
            function syncTabsWithRoute(to, from) {
              const routeTabMapping = [{
                routes: evaluationRoutes,
                tab: MAIN_HEADER_TABS.EVALUATION
              }, {
                routes: executionRoutes,
                tab: MAIN_HEADER_TABS.EXECUTIONS
              }, {
                routes: workflowRoutes,
                tab: MAIN_HEADER_TABS.WORKFLOW
              }];
              if (to.name && isViewRoute(to.name)) {
                const matchingTab = routeTabMapping.find(({
                  routes
                }) => routes.includes(to.name));
                if (matchingTab) activeHeaderTab.value = matchingTab.tab;
              }
              if (to.params.name !== "new" && typeof to.params.name === "string") workflowToReturnTo.value = to.params.name;
              if (from?.name === VIEWS.EXECUTION_PREVIEW && to.params.name === from.params.name && typeof from.params.executionId === "string") executionToReturnTo.value = from.params.executionId;
            }
            function onTabSelected(tab, event) {
              const openInNewTab = event.ctrlKey || event.metaKey;
              switch (tab) {
                case MAIN_HEADER_TABS.WORKFLOW:
                  navigateToWorkflowView(openInNewTab);
                  break;
                case MAIN_HEADER_TABS.EXECUTIONS:
                  navigateToExecutionsView(openInNewTab);
                  break;
                case MAIN_HEADER_TABS.EVALUATION:
                  navigateToEvaluationsView(openInNewTab);
                  break;
                default:
                  break;
              }
            }
            async function navigateToWorkflowView(openInNewTab) {
              let routeToNavigateTo;
              if (!["", "new", "__EMPTY__"].includes(workflowToReturnTo.value)) routeToNavigateTo = {
                name: VIEWS.WORKFLOW,
                params: {
                  name: workflowToReturnTo.value
                }
              };else routeToNavigateTo = {
                name: VIEWS.NEW_WORKFLOW
              };
              if (openInNewTab) {
                const {
                  href
                } = router.resolve(routeToNavigateTo);
                window.open(href, "_blank");
              } else if (route.name !== routeToNavigateTo.name) {
                if (route.name === VIEWS.NEW_WORKFLOW) uiStore.stateIsDirty = dirtyState.value;
                activeHeaderTab.value = MAIN_HEADER_TABS.WORKFLOW;
                await router.push(routeToNavigateTo);
              }
            }
            async function navigateToExecutionsView(openInNewTab) {
              const routeWorkflowId = workflowId.value === "__EMPTY__" ? "new" : workflowId.value;
              const executionToReturnToValue = executionsStore.activeExecution?.id || executionToReturnTo.value;
              const routeToNavigateTo = executionToReturnToValue ? {
                name: VIEWS.EXECUTION_PREVIEW,
                params: {
                  name: routeWorkflowId,
                  executionId: executionToReturnToValue
                }
              } : {
                name: VIEWS.EXECUTION_HOME,
                params: {
                  name: routeWorkflowId
                }
              };
              if (openInNewTab) {
                const {
                  href
                } = router.resolve(routeToNavigateTo);
                window.open(href, "_blank");
              } else if (route.name !== routeToNavigateTo.name) {
                dirtyState.value = uiStore.stateIsDirty;
                workflowToReturnTo.value = workflowId.value;
                activeHeaderTab.value = MAIN_HEADER_TABS.EXECUTIONS;
                await router.push(routeToNavigateTo);
              }
            }
            async function navigateToEvaluationsView(openInNewTab) {
              const routeWorkflowId = workflowId.value === "__EMPTY__" ? "new" : workflowId.value;
              const routeToNavigateTo = {
                name: VIEWS.EVALUATION_EDIT,
                params: {
                  name: routeWorkflowId
                }
              };
              if (openInNewTab) {
                const {
                  href
                } = router.resolve(routeToNavigateTo);
                window.open(href, "_blank");
              } else if (route.name !== routeToNavigateTo.name) {
                dirtyState.value = uiStore.stateIsDirty;
                workflowToReturnTo.value = workflowId.value;
                activeHeaderTab.value = MAIN_HEADER_TABS.EXECUTIONS;
                await router.push(routeToNavigateTo);
              }
            }
            function hideGithubButton() {
              githubButtonHidden.value = true;
            }
            async function onWorkflowDeactivated() {
              if (settingsStore.isModuleActive("mcp") && workflow.value.settings?.availableInMCP) try {
                const updatedWorkflow = await workflowsStore.fetchWorkflow(workflow.value.id);
                workflowsStore.setWorkflow(updatedWorkflow);
                toast.showToast({
                  title: locale.baseText("mcp.workflowDeactivated.title"),
                  message: locale.baseText("mcp.workflowDeactivated.message"),
                  type: "info"
                });
              } catch (error) {
                toast.showError(error, locale.baseText("workflowSettings.showError.fetchSettings.title"));
              }
            }
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(_ctx.$style.container)
              }, [createBaseVNode("div", {
                class: normalizeClass({
                  [_ctx.$style["main-header"]]: true,
                  [_ctx.$style.expanded]: !unref(uiStore).sidebarMenuCollapsed
                })
              }, [withDirectives(createBaseVNode("div", {
                class: normalizeClass(_ctx.$style["top-menu"])
              }, [workflow.value?.name ? (openBlock(), createBlock(WorkflowDetails_default, {
                key: 0,
                id: workflow.value.id,
                tags: workflow.value.tags,
                name: workflow.value.name,
                meta: workflow.value.meta,
                scopes: workflow.value.scopes,
                active: workflow.value.active,
                "read-only": readOnly.value,
                "current-folder": parentFolderForBreadcrumbs.value,
                "is-archived": workflow.value.isArchived,
                description: workflow.value.description,
                "onWorkflow:deactivated": onWorkflowDeactivated
              }, null, 8, ["id", "tags", "name", "meta", "scopes", "active", "read-only", "current-folder", "is-archived", "description"])) : createCommentVNode("", true), showGitHubButton.value ? (openBlock(), createElementBlock("div", {
                key: 1,
                class: normalizeClass([_ctx.$style["github-button"], "hidden-sm-and-down"])
              }, [createBaseVNode("div", {
                class: normalizeClass(_ctx.$style["github-button-container"])
              }, [createVNode(unref(vue_github_button_default), {
                href: unref(N8N_MAIN_GITHUB_REPO_URL),
                "data-color-scheme": unref(uiStore).appliedTheme,
                "data-size": "large",
                "data-show-count": "true",
                "aria-label": unref(locale).baseText("editor.mainHeader.githubButton.label")
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("generic.star")), 1)]),
                _: 1
              }, 8, ["href", "data-color-scheme", "aria-label"]), createVNode(unref(N8nIcon_default), {
                class: normalizeClass(_ctx.$style["close-github-button"]),
                icon: "circle-x",
                size: "medium",
                onClick: hideGithubButton
              }, null, 8, ["class"])], 2)], 2)) : createCommentVNode("", true)], 2), [[vShow, !hideMenuBar.value]]), onWorkflowPage.value ? (openBlock(), createBlock(TabBar_default, {
                key: 0,
                items: tabBarItems.value,
                "model-value": activeHeaderTab.value,
                "onUpdate:modelValue": onTabSelected
              }, null, 8, ["items", "model-value"])) : createCommentVNode("", true)], 2)], 2);
            };
          }
        }); //#endregion
        //#region src/app/components/MainHeader/MainHeader.vue?vue&type=style&index=0&lang.module.scss
        container = "_container_4ekmy_123";
        MainHeader_vue_vue_type_style_index_0_lang_module_default = {
          container,
          "main-header": "_main-header_4ekmy_130",
          "top-menu": "_top-menu_4ekmy_138",
          "github-button": "_github-button_4ekmy_149",
          "close-github-button": "_close-github-button_4ekmy_158",
          "github-button-container": "_github-button-container_4ekmy_173"
        }; //#endregion
        //#region src/app/components/MainHeader/MainHeader.vue
        cssModules = {
          "$style": MainHeader_vue_vue_type_style_index_0_lang_module_default
        };
        _export("default", MainHeader_default = /* @__PURE__ */__plugin_vue_export_helper_default(MainHeader_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]])); //#endregion
      }
    };
  });
})();