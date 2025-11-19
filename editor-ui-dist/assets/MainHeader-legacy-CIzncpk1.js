;
(function () {
  System.register(["./chunk-legacy-Re9CbdfL.js", "./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-CVC6fg6H.js", "./src-legacy-D3-Bo0sy.js", "./en-legacy-Bgme8Vbm.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-Bk9bFklR.js", "./icon-legacy-1U_nlJHf.js", "./overlay-legacy-CnSmhTdu.js", "./empty-legacy-DnVUoqbC.js", "./useMessage-legacy-CgoaFFwd.js", "./useTelemetry-legacy-BdQlQKwu.js", "./useToast-legacy-D8KBGcJW.js", "./sanitize-html-legacy-DfOUEbdf.js", "./path-browserify-legacy-DJbEMZcd.js", "./constants-legacy-B0GcWb62.js", "./merge-legacy-C_ujDigB.js", "./assistant.store-legacy-D5C3Qmmi.js", "./dateformat-legacy-Xt1X-tys.js", "./useDebounce-legacy-IwiEyerO.js", "./useExternalHooks-legacy-CI7QLTD3.js", "./npsSurvey.store-legacy-C1YRCoTJ.js", "./cloudPlan.store-legacy-LWdjrdTo.js", "./templates.store-legacy-BHiM3N7j.js", "./focusPanel.store-legacy-uio45UIZ.js", "./useWorkflowSaving-legacy-CRxiFnlk.js", "./retry-legacy-CkXCWkMV.js", "./executions.store-legacy-BxTud2_e.js", "./useRunWorkflow-legacy-6mzz_m9l.js", "./usePinnedData-legacy-rNpwQUsO.js", "./nodeCreator.store-legacy-DazC1kYi.js", "./nodeIcon-legacy-7NxDDHQi.js", "./useClipboard-legacy-DdtOZJuB.js", "./useCanvasOperations-legacy-GAH95RK2.js", "./folders.store-legacy-C8VGYd29.js", "./KeyboardShortcutTooltip-legacy-ZyxuvJWt.js", "./versions.store-legacy-CwMoPJwF.js", "./usePageRedirectionHelper-legacy-D76LkYaE.js", "./banners.store-legacy-BmDUT9wa.js", "./ProjectIcon-legacy-ktkmz5xT.js", "./schemaPreview.store-legacy-B2ITMEum.js", "./FileSaver.min-legacy-BTN44Z38.js", "./EnterpriseEdition.ee-legacy-Dc4zPsd3.js", "./SaveButton-legacy-ys08MKgQ.js", "./TagsDropdown-legacy-B77bF58I.js", "./WorkflowTagsDropdown-legacy-EBdnlj6g.js", "./mcp.constants-legacy-CZfk8DW2.js", "./useMcp-legacy-7hybpKbM.js", "./useWorkflowActivate-legacy-DRFvTgOe.js", "./ProjectBreadcrumb-legacy-CEhLqYgd.js", "./WorkflowActivator-legacy-BZHH4tHv.js", "./useBeforeUnload-legacy-Dk0Umr-a.js", "./PushConnectionTracker-legacy-CEDOiBkQ.js", "./useWorkflowsCache-legacy-jn-9DlJh.js", "./usePushConnection-legacy-B56pt3C1.js", "./readyToRunWorkflows.store-legacy-D55qrb6S.js", "./readyToRunWorkflowsV2.store-legacy-C5SMFEOl.js"], function (_export, _context) {
    "use strict";

    var __toESM, hasOwn, computed, createElementBlock, createCommentVNode, nextTick, unref, ref, onBeforeUnmount, h, createVNode, defineComponent, toDisplayString, createBlock, onMounted, Fragment, normalizeClass, watch, renderSlot, withCtx, useCssModule, hyphenate, openBlock, renderList, createTextVNode, useTemplateRef, resolveComponent, vShow, onBeforeMount, init_shared_esm_bundler, createBaseVNode, withDirectives, normalizeStyle, I18nT, useI18n, useLocalStorage, useDocumentVisibility, ElTag, N8nPopoverReka_default, N8nInput_default, N8nButton_default, N8nIconButton_default, N8nInputLabel_default, SuggestedActions_default, N8nInlineTextEdit_default, N8nUserStack_default, N8nBadge_default, N8nLink_default, N8nActionDropdown_default, N8nTooltip_default, N8nRadioButtons_default, N8nIcon_default, __vitePreload, __plugin_vue_export_helper_default, useRouter, createEventBus, useRoute, useMessage, useSettingsStore, STORES, useSourceControlStore, nodeViewEventBus, useProjectsStore, hasPermission, ResourceType, useUIStore, ProjectTypes, useRootStore, useDocumentTitle, PROJECT_MOVE_RESOURCE_MODAL, useTagsStore, useNDVStore, useEvaluationStore, useUsersStore, useWorkflowHelpers, useWorkflowsStore, useNodeTypesStore, useTelemetry, defineStore, getBannerRowHeight, useToast, EnterpriseEditionFeature, WORKFLOW_SHARE_MODAL_KEY, MODAL_CONFIRM, IMPORT_WORKFLOW_URL_MODAL_KEY, TIME_SAVED_DOCS_URL, WORKFLOW_ACTIVE_MODAL_KEY, TIME, EVALUATIONS_DOCS_URL, getResourcePermissions, MAX_WORKFLOW_NAME_LENGTH, WORKFLOW_MENU_ACTIONS, ERROR_WORKFLOW_DOCS_URL, VIEWS, MAIN_HEADER_TABS, WORKFLOW_SETTINGS_MODAL_KEY, LOCAL_STORAGE_HIDE_GITHUB_STAR_BUTTON, PLACEHOLDER_EMPTY_WORKFLOW_ID, WEBHOOK_NODE_TYPE, STICKY_NODE_TYPE, DUPLICATE_MODAL_KEY, N8N_MAIN_GITHUB_REPO_URL, require_debounce, useDebounce, useNpsSurveyStore, useWorkflowSaving, useExecutionsStore, usePushConnectionStore, useFoldersStore, usePageRedirectionHelper, useBannersStore, require_FileSaver_min, EnterpriseEdition_ee_default, SaveButton_default, WorkflowTagsDropdown_default, MCP_DOCS_PAGE_URL, useMcp, FolderBreadcrumbs_default, WorkflowActivator_default, useBeforeUnload, PushConnectionTracker_default, useWorkflowSettingsCache, usePushConnection, __vite_style__, TabBar_vue_vue_type_script_setup_true_lang_default, container$3, TabBar_vue_vue_type_style_index_0_lang_module_default, cssModules$4, TabBar_default, BREAKPOINT_SM, BREAKPOINT_MD, BREAKPOINT_LG, BREAKPOINT_XL, BreakpointsObserver_vue_vue_type_script_setup_true_lang_default, BreakpointsObserver_default, HEARTBEAT_INTERVAL, useCollaborationStore, CollaborationPane_vue_vue_type_script_setup_true_lang_default, container$2, CollaborationPane_vue_vue_type_style_index_0_lang_module_default, cssModules$3, CollaborationPane_default, _hoisted_1$2, _hoisted_2$2, WorkflowHistoryButton_vue_vue_type_script_setup_true_lang_default, WorkflowHistoryButton_default, WorkflowProductionChecklist_vue_vue_type_script_setup_true_lang_default, WorkflowProductionChecklist_default, IntersectionObserver_vue_vue_type_script_setup_true_lang_default, IntersectionObserver_default, IntersectionObserved_vue_vue_type_script_setup_true_lang_default, IntersectionObserved_default, import_debounce, _hoisted_1$1, _hoisted_2$1, TagsContainer_vue_vue_type_script_setup_true_lang_default, TagsContainer_default, WorkflowTagsContainer_vue_vue_type_script_setup_true_lang_default, WorkflowTagsContainer_default, INVALID_CHARS_REGEX, ZERO_WIDTH_CHARS_REGEX, UNICODE_SPACES_REGEX, LEADING_TRAILING_DOTS_SPACES_REGEX, WINDOWS_RESERVED_NAMES, DEFAULT_FALLBACK_NAME, MAX_FILENAME_LENGTH, sanitizeFilename, import_FileSaver_min, WorkflowDescriptionPopover_vue_vue_type_script_setup_true_lang_default, active, WorkflowDescriptionPopover_vue_vue_type_style_index_0_lang_module_default, cssModules$2, WorkflowDescriptionPopover_default, _hoisted_1, _hoisted_2, WorkflowDetails_vue_vue_type_script_setup_true_lang_default, container$1, group, hiddenInput, deleteItem, disabledShareButton, closeNodeViewDiscovery, WorkflowDetails_vue_vue_type_style_index_1_lang_module_default, cssModules$1, WorkflowDetails_default, vue_github_button_default, MainHeader_vue_vue_type_script_setup_true_lang_default, container, MainHeader_vue_vue_type_style_index_0_lang_module_default, cssModules, MainHeader_default;
    return {
      setters: [function (_chunkLegacy001Js) {
        __toESM = _chunkLegacy001Js.o;
      }, function (_vueRuntimeEsmBundlerLegacy003Js) {
        hasOwn = _vueRuntimeEsmBundlerLegacy003Js.$t;
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        nextTick = _vueRuntimeEsmBundlerLegacy003Js.G;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
        onBeforeUnmount = _vueRuntimeEsmBundlerLegacy003Js.J;
        h = _vueRuntimeEsmBundlerLegacy003Js.L;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Sn;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        onMounted = _vueRuntimeEsmBundlerLegacy003Js.Z;
        Fragment = _vueRuntimeEsmBundlerLegacy003Js._;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js._n;
        watch = _vueRuntimeEsmBundlerLegacy003Js._t;
        renderSlot = _vueRuntimeEsmBundlerLegacy003Js.at;
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
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
        withDirectives = _vueRuntimeEsmBundlerLegacy003Js.xt;
        normalizeStyle = _vueRuntimeEsmBundlerLegacy003Js.yn;
      }, function (_MapCacheLegacy005Js) {
        I18nT = _MapCacheLegacy005Js._t;
        useI18n = _MapCacheLegacy005Js.gt;
        useLocalStorage = _MapCacheLegacy005Js.j;
        useDocumentVisibility = _MapCacheLegacy005Js.w;
      }, function (_srcLegacy007Js) {
        ElTag = _srcLegacy007Js.Bt;
        N8nPopoverReka_default = _srcLegacy007Js.C;
        N8nInput_default = _srcLegacy007Js.Ct;
        N8nButton_default = _srcLegacy007Js.Ln;
        N8nIconButton_default = _srcLegacy007Js.Tt;
        N8nInputLabel_default = _srcLegacy007Js.Y;
        SuggestedActions_default = _srcLegacy007Js._;
        N8nInlineTextEdit_default = _srcLegacy007Js.a;
        N8nUserStack_default = _srcLegacy007Js.f;
        N8nBadge_default = _srcLegacy007Js.it;
        N8nLink_default = _srcLegacy007Js.mt;
        N8nActionDropdown_default = _srcLegacy007Js.tt;
        N8nTooltip_default = _srcLegacy007Js.vt;
        N8nRadioButtons_default = _srcLegacy007Js.x;
        N8nIcon_default = _srcLegacy007Js.zn;
      }, function (_enLegacy00bJs) {}, function (_preloadHelperLegacy00dJs) {
        __vitePreload = _preloadHelperLegacy00dJs.t;
      }, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {
        useRouter = _truncateLegacy00hJs.b;
        createEventBus = _truncateLegacy00hJs.x;
        useRoute = _truncateLegacy00hJs.y;
      }, function (_iconLegacy00lJs) {}, function (_overlayLegacy00pJs) {}, function (_emptyLegacy00tJs) {}, function (_useMessageLegacy00vJs) {
        useMessage = _useMessageLegacy00vJs.t;
      }, function (_useTelemetryLegacy00FJs) {
        useSettingsStore = _useTelemetryLegacy00FJs.Bo;
        STORES = _useTelemetryLegacy00FJs.Cc;
        useSourceControlStore = _useTelemetryLegacy00FJs.Dn;
        nodeViewEventBus = _useTelemetryLegacy00FJs.Ei;
        useProjectsStore = _useTelemetryLegacy00FJs.En;
        hasPermission = _useTelemetryLegacy00FJs.Gn;
        ResourceType = _useTelemetryLegacy00FJs.Ir;
        useUIStore = _useTelemetryLegacy00FJs.Ni;
        ProjectTypes = _useTelemetryLegacy00FJs.On;
        useRootStore = _useTelemetryLegacy00FJs.Qs;
        useDocumentTitle = _useTelemetryLegacy00FJs.Tn;
        PROJECT_MOVE_RESOURCE_MODAL = _useTelemetryLegacy00FJs.Wi;
        useTagsStore = _useTelemetryLegacy00FJs._n;
        useNDVStore = _useTelemetryLegacy00FJs.a;
        useEvaluationStore = _useTelemetryLegacy00FJs.at;
        useUsersStore = _useTelemetryLegacy00FJs.er;
        useWorkflowHelpers = _useTelemetryLegacy00FJs.mn;
        useWorkflowsStore = _useTelemetryLegacy00FJs.o;
        useNodeTypesStore = _useTelemetryLegacy00FJs.rt;
        useTelemetry = _useTelemetryLegacy00FJs.t;
        defineStore = _useTelemetryLegacy00FJs.xc;
      }, function (_useToastLegacy00HJs) {
        getBannerRowHeight = _useToastLegacy00HJs.i;
        useToast = _useToastLegacy00HJs.t;
      }, function (_sanitizeHtmlLegacy00JJs) {}, function (_pathBrowserifyLegacy00LJs) {}, function (_constantsLegacy00NJs) {
        EnterpriseEditionFeature = _constantsLegacy00NJs.Hs;
        WORKFLOW_SHARE_MODAL_KEY = _constantsLegacy00NJs.Jo;
        MODAL_CONFIRM = _constantsLegacy00NJs.No;
        IMPORT_WORKFLOW_URL_MODAL_KEY = _constantsLegacy00NJs.Oo;
        TIME_SAVED_DOCS_URL = _constantsLegacy00NJs.T;
        WORKFLOW_ACTIVE_MODAL_KEY = _constantsLegacy00NJs.Uo;
        TIME = _constantsLegacy00NJs.Xs;
        EVALUATIONS_DOCS_URL = _constantsLegacy00NJs._;
        getResourcePermissions = _constantsLegacy00NJs._r;
        MAX_WORKFLOW_NAME_LENGTH = _constantsLegacy00NJs.a;
        WORKFLOW_MENU_ACTIONS = _constantsLegacy00NJs.dc;
        ERROR_WORKFLOW_DOCS_URL = _constantsLegacy00NJs.g;
        VIEWS = _constantsLegacy00NJs.mo;
        MAIN_HEADER_TABS = _constantsLegacy00NJs.po;
        WORKFLOW_SETTINGS_MODAL_KEY = _constantsLegacy00NJs.qo;
        LOCAL_STORAGE_HIDE_GITHUB_STAR_BUTTON = _constantsLegacy00NJs.rs;
        PLACEHOLDER_EMPTY_WORKFLOW_ID = _constantsLegacy00NJs.s;
        WEBHOOK_NODE_TYPE = _constantsLegacy00NJs.wa;
        STICKY_NODE_TYPE = _constantsLegacy00NJs.xn;
        DUPLICATE_MODAL_KEY = _constantsLegacy00NJs.xo;
        N8N_MAIN_GITHUB_REPO_URL = _constantsLegacy00NJs.y;
      }, function (_mergeLegacy00PJs) {}, function (_assistantStoreLegacy00RJs) {}, function (_dateformatLegacy00TJs) {}, function (_useDebounceLegacy00VJs) {
        require_debounce = _useDebounceLegacy00VJs.n;
        useDebounce = _useDebounceLegacy00VJs.t;
      }, function (_useExternalHooksLegacy00XJs) {}, function (_npsSurveyStoreLegacy011Js) {
        useNpsSurveyStore = _npsSurveyStoreLegacy011Js.t;
      }, function (_cloudPlanStoreLegacy013Js) {}, function (_templatesStoreLegacy015Js) {}, function (_focusPanelStoreLegacy017Js) {}, function (_useWorkflowSavingLegacy019Js) {
        useWorkflowSaving = _useWorkflowSavingLegacy019Js.t;
      }, function (_retryLegacy01bJs) {}, function (_executionsStoreLegacy01dJs) {
        useExecutionsStore = _executionsStoreLegacy01dJs.t;
      }, function (_useRunWorkflowLegacy01fJs) {
        usePushConnectionStore = _useRunWorkflowLegacy01fJs.i;
      }, function (_usePinnedDataLegacy01hJs) {}, function (_nodeCreatorStoreLegacy01jJs) {}, function (_nodeIconLegacy01lJs) {}, function (_useClipboardLegacy01nJs) {}, function (_useCanvasOperationsLegacy01pJs) {}, function (_foldersStoreLegacy01tJs) {
        useFoldersStore = _foldersStoreLegacy01tJs.t;
      }, function (_KeyboardShortcutTooltipLegacy01xJs) {}, function (_versionsStoreLegacy01BJs) {}, function (_usePageRedirectionHelperLegacy01DJs) {
        usePageRedirectionHelper = _usePageRedirectionHelperLegacy01DJs.t;
      }, function (_bannersStoreLegacy01FJs) {
        useBannersStore = _bannersStoreLegacy01FJs.t;
      }, function (_ProjectIconLegacy025Js) {}, function (_schemaPreviewStoreLegacy02lJs) {}, function (_FileSaverMinLegacy02rJs) {
        require_FileSaver_min = _FileSaverMinLegacy02rJs.t;
      }, function (_EnterpriseEditionEeLegacy02DJs) {
        EnterpriseEdition_ee_default = _EnterpriseEditionEeLegacy02DJs.t;
      }, function (_SaveButtonLegacy02PJs) {
        SaveButton_default = _SaveButtonLegacy02PJs.t;
      }, function (_TagsDropdownLegacy02TJs) {}, function (_WorkflowTagsDropdownLegacy02VJs) {
        WorkflowTagsDropdown_default = _WorkflowTagsDropdownLegacy02VJs.t;
      }, function (_mcpConstantsLegacy037Js) {
        MCP_DOCS_PAGE_URL = _mcpConstantsLegacy037Js.n;
      }, function (_useMcpLegacy03rJs) {
        useMcp = _useMcpLegacy03rJs.t;
      }, function (_useWorkflowActivateLegacy03zJs) {}, function (_ProjectBreadcrumbLegacy03JJs) {}, function (_WorkflowActivatorLegacy03LJs) {
        FolderBreadcrumbs_default = _WorkflowActivatorLegacy03LJs.n;
        WorkflowActivator_default = _WorkflowActivatorLegacy03LJs.t;
      }, function (_useBeforeUnloadLegacy03NJs) {
        useBeforeUnload = _useBeforeUnloadLegacy03NJs.t;
      }, function (_PushConnectionTrackerLegacy03PJs) {
        PushConnectionTracker_default = _PushConnectionTrackerLegacy03PJs.t;
      }, function (_useWorkflowsCacheLegacy03RJs) {
        useWorkflowSettingsCache = _useWorkflowsCacheLegacy03RJs.t;
      }, function (_usePushConnectionLegacy03TJs) {
        usePushConnection = _usePushConnectionLegacy03TJs.t;
      }, function (_readyToRunWorkflowsStoreLegacy03VJs) {}, function (_readyToRunWorkflowsV2StoreLegacy03XJs) {}],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._container_cznfu_123 {\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%) translateY(50%);\n  min-height: 30px;\n  display: flex;\n  padding: var(--spacing--5xs);\n  background-color: var(--color--foreground);\n  border-radius: var(--radius);\n  transition: all 150ms ease-in-out;\n  z-index: 1;\n}\n@media screen and (max-width: 430px) {\n._container_cznfu_123 {\n    flex-direction: column;\n}\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._container_dsr9f_123 {\n  margin: 0 var(--spacing--4xs);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n.tags-container[data-v-27a13ab2] {\n  display: block;\n  max-width: 300px;\n}\n.tags[data-v-27a13ab2] {\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  max-width: 100%;\n}\n.tags > span[data-v-27a13ab2] {\n  padding-right: 4px;\n}\n.hideTag[data-v-27a13ab2] {\n  visibility: hidden;\n}\n.el-tag.hoverable[data-v-27a13ab2]:hover {\n  border-color: var(--color--primary);\n}\n.count-container[data-v-27a13ab2] {\n  position: absolute;\n  max-width: 40px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._description-button_wp41v_123 {\n  border: none;\n  position: relative;\n  top: var(--spacing--5xs);\n}\n._description-button_wp41v_123._active_wp41v_128 {\n  color: var(--color--background--shade-2);\n}\n._description-button_wp41v_123:hover, ._description-button_wp41v_123:focus, ._description-button_wp41v_123:focus-visible, ._description-button_wp41v_123:active {\n  background: none;\n  background-color: transparent !important;\n  outline: none !important;\n  color: var(--color--background--shade-2) !important;\n}\n._description-edit-content_wp41v_138 {\n  display: flex;\n  flex-direction: column;\n  padding: var(--spacing--xs);\n  width: 400px;\n}\n._popover-footer_wp41v_145 {\n  display: flex;\n  justify-content: flex-end;\n  gap: var(--spacing--2xs);\n  padding: 0 var(--spacing--xs) var(--spacing--xs);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n.name-container[data-v-efdec302] {\n  margin-right: var(--spacing--sm);\n}\n.name-container[data-v-efdec302] .el-input {\n  padding: 0;\n}\n.name[data-v-efdec302] {\n  color: var(--color--text--shade-1);\n  font-size: var(--font-size--sm);\n  padding: var(--spacing--3xs) var(--spacing--4xs) var(--spacing--4xs);\n}\n.activator[data-v-efdec302] {\n  color: var(--color--text--shade-1);\n  font-weight: var(--font-weight--regular);\n  font-size: 13px;\n  line-height: 24px;\n  align-items: center;\n}\n.activator > span[data-v-efdec302] {\n  margin-right: 5px;\n}\n.add-tag[data-v-efdec302] {\n  font-size: 12px;\n  padding: 20px 0;\n  color: var(--color--text--tint-1);\n  font-weight: var(--font-weight--bold);\n  white-space: nowrap;\n}\n.add-tag[data-v-efdec302]:hover {\n  color: var(--color--primary);\n}\n.tags[data-v-efdec302] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  flex: 1;\n  margin-right: 20px;\n}\n.tags-edit[data-v-efdec302] {\n  min-width: 100px;\n  width: 100%;\n  max-width: 460px;\n}\n.actions[data-v-efdec302] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing--md);\n  flex-wrap: nowrap;\n}\n@media screen and (max-width: 767px) {\n.name[data-v-efdec302] input {\n    min-width: 180px;\n}\n}\n@media (max-width: 1390px) {\n.name-container[data-v-efdec302] {\n    margin-right: var(--spacing--xs);\n}\n.actions[data-v-efdec302] {\n    gap: var(--spacing--xs);\n}\n}\n@media (max-width: 1350px) {\n.name-container[data-v-efdec302] {\n    margin-right: var(--spacing--2xs);\n}\n.actions[data-v-efdec302] {\n    gap: var(--spacing--2xs);\n}\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._container_177kb_123 {\n  position: relative;\n  width: 100%;\n  padding: var(--spacing--xs) var(--spacing--md);\n  display: flex;\n  align-items: center;\n  flex-wrap: nowrap;\n}\n._path-separator_177kb_132 {\n  font-size: var(--font-size--xl);\n  color: var(--color--foreground);\n  padding: var(--spacing--3xs) var(--spacing--4xs) var(--spacing--4xs);\n}\n._group_177kb_138 {\n  display: flex;\n  gap: var(--spacing--xs);\n}\n._hiddenInput_177kb_143 {\n  display: none;\n}\n._deleteItem_177kb_147 {\n  color: var(--color--danger);\n}\n._disabledShareButton_177kb_151 {\n  cursor: not-allowed;\n}\n._closeNodeViewDiscovery_177kb_155 {\n  position: absolute;\n  right: var(--spacing--xs);\n  top: var(--spacing--xs);\n  cursor: pointer;\n}\n._header-controls_177kb_162 {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing--md);\n  width: 100%;\n  flex: 1;\n  margin: 0 var(--spacing--md);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._container_18v8t_123 {\n  display: flex;\n  position: relative;\n  width: 100%;\n  align-items: center;\n}\n._main-header_18v8t_130 {\n  min-height: var(--navbar--height);\n  background-color: var(--color--background--light-3);\n  width: 100%;\n  box-sizing: border-box;\n  border-bottom: var(--border-width) var(--border-style) var(--color--foreground);\n}\n._top-menu_18v8t_138 {\n  position: relative;\n  display: flex;\n  height: var(--navbar--height);\n  align-items: center;\n  font-size: 0.9em;\n  font-weight: var(--font-weight--regular);\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n._github-button_18v8t_149 {\n  display: flex;\n  align-items: center;\n  align-self: stretch;\n  padding: var(--spacing--5xs) var(--spacing--md);\n  background-color: var(--color--background--light-3);\n  border-left: var(--border-width) var(--border-style) var(--color--foreground);\n}\n._close-github-button_18v8t_158 {\n  display: none;\n  position: absolute;\n  right: 0;\n  top: 0;\n  transform: translate(50%, -46%);\n  color: var(--color--foreground--shade-2);\n  background-color: var(--color--background--light-3);\n  border-radius: 100%;\n  cursor: pointer;\n}\n._close-github-button_18v8t_158:hover {\n  color: var(--p--color--primary-420);\n}\n._github-button-container_18v8t_173 {\n  position: relative;\n}\n._github-button_18v8t_149:hover ._close-github-button_18v8t_158 {\n  display: block;\n}\n@media (max-width: 1390px) {\n._github-button_18v8t_149 {\n    padding: var(--spacing--5xs) var(--spacing--xs);\n}\n}\n@media (max-width: 1340px) {\n._github-button_18v8t_149 {\n    border-left: 0;\n    padding-left: 0;\n}\n}\n@media (max-width: 1290px) {\n._github-button_18v8t_149 {\n    display: none;\n}\n}/*$vite$:1*/";
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
        container$3 = "_container_cznfu_123";
        TabBar_vue_vue_type_style_index_0_lang_module_default = {
          container: container$3
        }; //#endregion
        //#region src/app/components/MainHeader/TabBar.vue
        cssModules$4 = {
          "$style": TabBar_vue_vue_type_style_index_0_lang_module_default
        };
        TabBar_default = /* @__PURE__ */__plugin_vue_export_helper_default(TabBar_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$4]]); //#endregion
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
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(`collaboration-pane-container ${_ctx.$style.container}`),
                "data-test-id": "collaboration-pane"
              }, [showUserStack.value ? (openBlock(), createBlock(unref(N8nUserStack_default), {
                key: 0,
                users: collaboratorsSorted.value,
                "current-user-email": currentUserEmail.value
              }, null, 8, ["users", "current-user-email"])) : createCommentVNode("", true)], 2);
            };
          }
        }); //#endregion
        //#region src/features/collaboration/collaboration/components/CollaborationPane.vue?vue&type=style&index=0&lang.module.scss
        container$2 = "_container_dsr9f_123";
        CollaborationPane_vue_vue_type_style_index_0_lang_module_default = {
          container: container$2
        }; //#endregion
        //#region src/features/collaboration/collaboration/components/CollaborationPane.vue
        cssModules$3 = {
          "$style": CollaborationPane_vue_vue_type_style_index_0_lang_module_default
        };
        CollaborationPane_default = /* @__PURE__ */__plugin_vue_export_helper_default(CollaborationPane_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$3]]); //#endregion
        //#region src/features/workflows/workflowHistory/components/WorkflowHistoryButton.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1$2 = {
          key: 0
        };
        _hoisted_2$2 = {
          key: 1
        };
        WorkflowHistoryButton_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "WorkflowHistoryButton",
          props: {
            workflowId: {},
            isNewWorkflow: {
              type: Boolean
            },
            isFeatureEnabled: {
              type: Boolean
            }
          },
          emits: ["upgrade"],
          setup(__props, {
            emit: __emit
          }) {
            const locale = useI18n();
            const props = __props;
            const emit = __emit;
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
                content: withCtx(() => [_ctx.isFeatureEnabled && _ctx.isNewWorkflow ? (openBlock(), createElementBlock("span", _hoisted_1$2, toDisplayString(unref(locale).baseText("workflowHistory.button.tooltip.empty")), 1)) : _ctx.isFeatureEnabled ? (openBlock(), createElementBlock("span", _hoisted_2$2, toDisplayString(unref(locale).baseText("workflowHistory.button.tooltip.enabled")), 1)) : (openBlock(), createBlock(unref(I18nT), {
                  key: 2,
                  keypath: "workflowHistory.button.tooltip.disabled",
                  scope: "global"
                }, {
                  link: withCtx(() => [createVNode(unref(N8nLink_default), {
                    size: "small",
                    onClick: _cache[0] || (_cache[0] = $event => emit("upgrade"))
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("workflowHistory.button.tooltip.disabled.link")), 1)]),
                    _: 1
                  })]),
                  _: 1
                }))]),
                default: withCtx(() => [createVNode(_component_RouterLink, {
                  to: workflowHistoryRoute.value
                }, {
                  default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
                    disabled: _ctx.isNewWorkflow || !_ctx.isFeatureEnabled,
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
            const telemetry = useTelemetry();
            const sourceControlStore = useSourceControlStore();
            const settingsStore = useSettingsStore();
            const {
              isEligibleForMcpAccess
            } = useMcp();
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
            const hasTimeSaved = computed(() => {
              return props.workflow.settings?.timeSavedPerExecution !== void 0;
            });
            const isActivationModalOpen = computed(() => {
              return uiStore.isModalActiveById[WORKFLOW_ACTIVE_MODAL_KEY];
            });
            const isProtectedEnvironment = computed(() => {
              return sourceControlStore.preferences.branchReadOnly;
            });
            const isMcpAvailable = computed(() => {
              return settingsStore.isModuleActive("mcp") && settingsStore.moduleSettings.mcp?.mcpAccessEnabled && isEligibleForMcpAccess(props.workflow);
            });
            const availableActions = computed(() => {
              if (!props.workflow.active || workflowsCache.isCacheLoading.value) return [];
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
              if (isMcpAvailable.value && !suggestedActionSettings["mcp-access"]?.ignored) actions.push({
                id: "mcp-access",
                title: i18n.baseText("mcp.productionCheklist.title"),
                description: i18n.baseText("mcp.productionCheklist.description"),
                moreInfoLink: MCP_DOCS_PAGE_URL,
                completed: props.workflow.settings?.availableInMCP ?? false
              });
              return actions;
            });
            async function loadWorkflowSettings() {
              if (props.workflow.id) cachedSettings.value = await workflowsCache.getMergedWorkflowSettings(props.workflow.id);
            }
            async function handleActionClick(actionId) {
              if (actionId === "evaluations") await router.push({
                name: VIEWS.EVALUATION_EDIT,
                params: {
                  name: props.workflow.id
                }
              });else if (actionId === "errorWorkflow" || actionId === "timeSaved" || actionId === "mcp-access") uiStore.openModal(WORKFLOW_SETTINGS_MODAL_KEY);
              isPopoverOpen.value = false;
            }
            function isValidAction(action) {
              return ["evaluations", "errorWorkflow", "timeSaved", "mcp-access"].includes(action);
            }
            async function handleIgnoreClick(actionId) {
              if (!isValidAction(actionId)) return;
              await workflowsCache.ignoreSuggestedAction(props.workflow.id, actionId);
              await loadWorkflowSettings();
              telemetry.track("user clicked ignore suggested action", {
                actionId
              });
            }
            async function handleIgnoreAll() {
              if ((await message.confirm(i18n.baseText("workflowProductionChecklist.ignoreAllConfirmation.description"), i18n.baseText("workflowProductionChecklist.ignoreAllConfirmation.title"), {
                confirmButtonText: i18n.baseText("workflowProductionChecklist.ignoreAllConfirmation.confirm")
              })) === "confirm") {
                await workflowsCache.ignoreAllSuggestedActionsForAllWorkflows(availableActions.value.map(action => action.id));
                await loadWorkflowSettings();
                telemetry.track("user clicked ignore suggested actions for all workflows");
              }
            }
            function openSuggestedActions() {
              isPopoverOpen.value = true;
            }
            function onPopoverOpened() {
              telemetry.track("user opened suggested actions checklist");
            }
            function handlePopoverOpenChange(open) {
              if (open) {
                isPopoverOpen.value = true;
                onPopoverOpened();
              } else if (!isActivationModalOpen.value) isPopoverOpen.value = false;
            }
            watch(() => props.workflow.active, async (isActive, wasActive) => {
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
        _hoisted_1$1 = {
          class: "tags"
        };
        _hoisted_2$1 = ["onClick"];
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
            },
            hoverable: {
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
                default: withCtx(() => [createBaseVNode("span", _hoisted_1$1, [(openBlock(true), createElementBlock(Fragment, null, renderList(tags.value, tag => {
                  return openBlock(), createElementBlock("span", {
                    key: tag.id,
                    class: normalizeClass({
                      clickable: !tag.hidden
                    }),
                    onClick: e => onClick(e, tag)
                  }, [tag.isCount ? (openBlock(), createBlock(unref(ElTag), {
                    key: 0,
                    title: tag.title,
                    type: "info",
                    size: "small",
                    class: "count-container",
                    "disable-transitions": true
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(tag.name), 1)]),
                    _: 2
                  }, 1032, ["title"])) : (openBlock(), createBlock(IntersectionObserved_default, {
                    key: 1,
                    class: normalizeClass({
                      hideTag: tag.hidden
                    }),
                    "data-id": tag.id,
                    enabled: _ctx.responsive,
                    "event-bus": unref(intersectionEventBus)
                  }, {
                    default: withCtx(() => [createVNode(unref(ElTag), {
                      title: tag.name,
                      type: "info",
                      size: "small",
                      class: normalizeClass({
                        hoverable: _ctx.hoverable
                      }),
                      "disable-transitions": true
                    }, {
                      default: withCtx(() => [createTextVNode(toDisplayString(tag.name), 1)]),
                      _: 2
                    }, 1032, ["title", "class"])]),
                    _: 2
                  }, 1032, ["class", "data-id", "enabled", "event-bus"]))], 10, _hoisted_2$1);
                }), 128))])]),
                _: 1
              }, 8, ["style", "enabled", "event-bus"]);
            };
          }
        }); //#endregion
        //#region src/features/shared/tags/components/TagsContainer.vue
        TagsContainer_default = /* @__PURE__ */__plugin_vue_export_helper_default(TagsContainer_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-27a13ab2"]]); //#endregion
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
            },
            hoverable: {
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
                hoverable: _ctx.hoverable,
                onClick
              }, null, 8, ["tag-ids", "tags-by-id", "limit", "clickable", "responsive", "hoverable"]);
            };
          }
        }); //#endregion
        //#region src/features/shared/tags/components/WorkflowTagsContainer.vue
        WorkflowTagsContainer_default = WorkflowTagsContainer_vue_vue_type_script_setup_true_lang_default; //#endregion
        //#region src/app/utils/fileUtils.ts
        /**
        * Filename sanitization utilities
        * For handling cross-platform filename compatibility issues
        */
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
        //#region src/app/components/MainHeader/WorkflowDescriptionPopover.vue?vue&type=script&setup=true&lang.ts
        import_FileSaver_min = /* @__PURE__ */__toESM(require_FileSaver_min());
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
            const telemetry = useTelemetry();
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
            const hasWebhooks = computed(() => {
              const workflow = workflowStore.workflow;
              if (!workflow) return false;
              return workflow.nodes.some(node => !node.disabled && node.type === "n8n-nodes-base.webhook");
            });
            const textareaTip = computed(() => {
              const baseTooltip = i18n.baseText("workflow.description.tooltip");
              if (!isMcpEnabled.value) return i18n.baseText("workflow.description.tooltip");
              return `${baseTooltip}. ${i18n.baseText("workflow.description.placeholder.mcp")}.\n${hasWebhooks.value ? i18n.baseText("workflow.description.placeholder.mcp.webhook") : ""}`;
            });
            const saveDescription = async () => {
              isSaving.value = true;
              uiStore.addActiveAction("workflowSaving");
              try {
                await workflowStore.saveWorkflowDescription(props.workflowId, normalizedCurrentValue.value ?? null);
                lastSavedDescription.value = descriptionValue.value;
                uiStore.stateIsDirty = false;
                telemetry.track("User set workflow description", {
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
        active = "_active_wp41v_128";
        WorkflowDescriptionPopover_vue_vue_type_style_index_0_lang_module_default = {
          "description-button": "_description-button_wp41v_123",
          active,
          "description-edit-content": "_description-edit-content_wp41v_138",
          "popover-footer": "_popover-footer_wp41v_145"
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
            const rootStore = useRootStore();
            const settingsStore = useSettingsStore();
            const sourceControlStore = useSourceControlStore();
            const tagsStore = useTagsStore();
            const uiStore = useUIStore();
            const usersStore = useUsersStore();
            const workflowsStore = useWorkflowsStore();
            const projectsStore = useProjectsStore();
            const foldersStore = useFoldersStore();
            const npsSurveyStore = useNpsSurveyStore();
            const i18n = useI18n();
            const router = useRouter();
            const route = useRoute();
            const locale = useI18n();
            const telemetry = useTelemetry();
            const message = useMessage();
            const toast = useToast();
            const documentTitle = useDocumentTitle();
            const workflowSaving = useWorkflowSaving({
              router
            });
            const workflowHelpers = useWorkflowHelpers();
            const pageRedirectionHelper = usePageRedirectionHelper();
            const isTagsEditEnabled = ref(false);
            const appliedTagIds = ref([]);
            const tagsSaving = ref(false);
            const importFileRef = ref();
            const tagsEventBus = createEventBus();
            const changeOwnerEventBus = createEventBus();
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
            const onWorkflowPage = computed(() => {
              return route.meta && (route.meta.nodeView || route.meta.keepWorkflowAlive === true);
            });
            const onExecutionsTab = computed(() => {
              return [VIEWS.EXECUTION_HOME.toString(), VIEWS.WORKFLOW_EXECUTIONS.toString(), VIEWS.EXECUTION_PREVIEW].includes(route.name || "");
            });
            const workflowPermissions = computed(() => getResourcePermissions(props.scopes).workflow);
            const workflowMenuItems = computed(() => {
              const actions = [{
                id: WORKFLOW_MENU_ACTIONS.DOWNLOAD,
                label: locale.baseText("menuActions.download"),
                disabled: !onWorkflowPage.value
              }];
              if (workflowPermissions.value.move && projectsStore.isTeamProjectFeatureEnabled) actions.push({
                id: WORKFLOW_MENU_ACTIONS.CHANGE_OWNER,
                label: locale.baseText("workflows.item.changeOwner"),
                disabled: isNewWorkflow.value
              });
              if (!props.readOnly && !props.isArchived) actions.push({
                id: WORKFLOW_MENU_ACTIONS.RENAME,
                label: locale.baseText("generic.rename"),
                disabled: !onWorkflowPage.value || workflowPermissions.value.update !== true
              });
              if (workflowPermissions.value.update === true && !props.readOnly && !props.isArchived || isNewWorkflow.value) {
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
                disabled: !onWorkflowPage.value || isNewWorkflow.value
              });
              if (workflowPermissions.value.delete === true && !props.readOnly || isNewWorkflow.value) if (props.isArchived) {
                actions.push({
                  id: WORKFLOW_MENU_ACTIONS.UNARCHIVE,
                  label: locale.baseText("menuActions.unarchive"),
                  disabled: !onWorkflowPage.value || isNewWorkflow.value
                });
                actions.push({
                  id: WORKFLOW_MENU_ACTIONS.DELETE,
                  label: locale.baseText("menuActions.delete"),
                  disabled: !onWorkflowPage.value || isNewWorkflow.value,
                  customClass: $style.deleteItem,
                  divided: true
                });
              } else actions.push({
                id: WORKFLOW_MENU_ACTIONS.ARCHIVE,
                label: locale.baseText("menuActions.archive"),
                disabled: !onWorkflowPage.value || isNewWorkflow.value,
                customClass: $style.deleteItem,
                divided: true
              });
              return actions;
            });
            const isWorkflowHistoryFeatureEnabled = computed(() => {
              return settingsStore.isEnterpriseFeatureEnabled[EnterpriseEditionFeature.WorkflowHistory];
            });
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
            function getWorkflowId() {
              let id = void 0;
              if (props.id !== "__EMPTY__") id = props.id;else if (route.params.name && route.params.name !== "new") id = route.params.name;
              return id;
            }
            async function onSaveButtonClick() {
              if (isWorkflowSaving.value) return;
              const id = getWorkflowId();
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
            function onShareButtonClick() {
              uiStore.openModalWithData({
                name: WORKFLOW_SHARE_MODAL_KEY,
                data: {
                  id: props.id
                }
              });
              telemetry.track("User opened sharing modal", {
                workflow_id: props.id,
                user_id_sharer: usersStore.currentUser?.id,
                sub_view: route.name === VIEWS.WORKFLOWS ? "Workflows listing" : "Workflow editor"
              });
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
              telemetry.track("User edited workflow tags", {
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
              const id = getWorkflowId();
              if (await workflowSaving.saveCurrentWorkflow({
                name
              })) {
                showCreateWorkflowSuccessToast(id);
                documentTitle.setDocumentTitle(newName, "IDLE");
              }
              uiStore.removeActiveAction("workflowSaving");
              renameInput.value?.forceCancel();
            }
            async function handleFileImport() {
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
              await router.push({
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
              await router.push({
                name: VIEWS.WORKFLOWS
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
                  onNameToggle();
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
                    (0, import_FileSaver_min.saveAs)(blob, name + ".json");
                    break;
                  }
                case WORKFLOW_MENU_ACTIONS.IMPORT_FROM_URL:
                  uiStore.openModal(IMPORT_WORKFLOW_URL_MODAL_KEY);
                  break;
                case WORKFLOW_MENU_ACTIONS.IMPORT_FROM_FILE:
                  handleImportWorkflowFromFile();
                  break;
                case WORKFLOW_MENU_ACTIONS.PUSH:
                  try {
                    await onSaveButtonClick();
                    router.push({
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
                case WORKFLOW_MENU_ACTIONS.ARCHIVE:
                  await handleArchiveWorkflow();
                  break;
                case WORKFLOW_MENU_ACTIONS.UNARCHIVE:
                  await handleUnarchiveWorkflow();
                  break;
                case WORKFLOW_MENU_ACTIONS.DELETE:
                  await handleDeleteWorkflow();
                  break;
                case WORKFLOW_MENU_ACTIONS.CHANGE_OWNER:
                  {
                    const workflowId = getWorkflowId();
                    if (!workflowId) return;
                    changeOwnerEventBus.once("resource-moved", async () => await router.push({
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
                default:
                  break;
              }
            }
            function goToUpgrade() {
              pageRedirectionHelper.goToUpgrade("workflow_sharing", "upgrade-workflow-sharing");
            }
            function goToWorkflowHistoryUpgrade() {
              pageRedirectionHelper.goToUpgrade("workflow-history", "upgrade-workflow-history");
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
              importFileRef.value?.click();
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
            const onWorkflowActiveToggle = async value => {
              if (!value.active) emit("workflow:deactivated");
            };
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
                }, null, 8, ["workflow"])) : createCommentVNode("", true), createBaseVNode("span", {
                  class: normalizeClass(`activator ${unref($style).group}`)
                }, [createVNode(WorkflowActivator_default, {
                  "is-archived": _ctx.isArchived,
                  "workflow-active": _ctx.active,
                  "workflow-id": _ctx.id,
                  "workflow-permissions": workflowPermissions.value,
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
                  }, [!isNewWorkflow.value ? (openBlock(), createBlock(CollaborationPane_default, {
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
                  saved: !unref(uiStore).stateIsDirty && !isNewWorkflow.value,
                  disabled: isWorkflowSaving.value || _ctx.readOnly || _ctx.isArchived || !isNewWorkflow.value && !workflowPermissions.value.update,
                  "is-saving": isWorkflowSaving.value,
                  "with-shortcut": !_ctx.readOnly && !_ctx.isArchived && workflowPermissions.value.update,
                  "shortcut-tooltip": unref(i18n).baseText("saveWorkflowButton.hint"),
                  "data-test-id": "workflow-save-button",
                  onClick: onSaveButtonClick
                }, null, 8, ["saved", "disabled", "is-saving", "with-shortcut", "shortcut-tooltip"]), createVNode(WorkflowHistoryButton_default, {
                  "workflow-id": props.id,
                  "is-feature-enabled": isWorkflowHistoryFeatureEnabled.value,
                  "is-new-workflow": isNewWorkflow.value,
                  onUpgrade: goToWorkflowHistoryUpgrade
                }, null, 8, ["workflow-id", "is-feature-enabled", "is-new-workflow"])], 2), createBaseVNode("div", {
                  class: normalizeClass([unref($style).workflowMenuContainer, unref($style).group])
                }, [createBaseVNode("input", {
                  ref_key: "importFileRef",
                  ref: importFileRef,
                  class: normalizeClass(unref($style).hiddenInput),
                  type: "file",
                  "data-test-id": "workflow-import-input",
                  onChange: _cache[1] || (_cache[1] = $event => handleFileImport())
                }, null, 34), createVNode(unref(N8nActionDropdown_default), {
                  items: workflowMenuItems.value,
                  "data-test-id": "workflow-menu",
                  onSelect: onWorkflowMenuSelect
                }, null, 8, ["items"])], 2)]),
                _: 1
              })], 2);
            };
          }
        }); //#endregion
        //#region src/app/components/MainHeader/WorkflowDetails.vue?vue&type=style&index=1&lang.module.scss
        container$1 = "_container_177kb_123";
        group = "_group_177kb_138";
        hiddenInput = "_hiddenInput_177kb_143";
        deleteItem = "_deleteItem_177kb_147";
        disabledShareButton = "_disabledShareButton_177kb_151";
        closeNodeViewDiscovery = "_closeNodeViewDiscovery_177kb_155";
        WorkflowDetails_vue_vue_type_style_index_1_lang_module_default = {
          container: container$1,
          "path-separator": "_path-separator_177kb_132",
          group,
          hiddenInput,
          deleteItem,
          disabledShareButton,
          closeNodeViewDiscovery,
          "header-controls": "_header-controls_177kb_162"
        }; //#endregion
        //#region src/app/components/MainHeader/WorkflowDetails.vue
        cssModules$1 = {
          "$style": WorkflowDetails_vue_vue_type_style_index_1_lang_module_default
        };
        WorkflowDetails_default = /* @__PURE__ */__plugin_vue_export_helper_default(WorkflowDetails_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$1], ["__scopeId", "data-v-efdec302"]]); //#endregion
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
              "./buttons.esm-legacy-BLrJSt1Z.js"), true               ? void 0 : void 0).then(function (module) {
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
        container = "_container_18v8t_123";
        MainHeader_vue_vue_type_style_index_0_lang_module_default = {
          container,
          "main-header": "_main-header_18v8t_130",
          "top-menu": "_top-menu_18v8t_138",
          "github-button": "_github-button_18v8t_149",
          "close-github-button": "_close-github-button_18v8t_158",
          "github-button-container": "_github-button-container_18v8t_173"
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