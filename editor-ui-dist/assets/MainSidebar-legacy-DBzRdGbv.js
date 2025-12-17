;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy--Sn1h8On.js", "./_MapCache-legacy-DHBQRRQG.js", "./src-legacy-Bos09xer.js", "./en-legacy-DJK4SpPN.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-BIn0keUI.js", "./icon-legacy-CIK-lB61.js", "./overlay-legacy-B0b_K0kO.js", "./empty-legacy-ZG0-xpne.js", "./useMessage-legacy-BdVFquy4.js", "./useTelemetry-legacy-CqPMRSSw.js", "./useToast-legacy-BExpsCTi.js", "./sanitize-html-legacy-B93rGWi4.js", "./CalendarDate-legacy-BUvNgcoo.js", "./path-browserify-legacy-PZw06cM9.js", "./constants-legacy-7i-p8Q83.js", "./merge-legacy-y9V-HyOw.js", "./_baseOrderBy-legacy-BktlFW96.js", "./dateformat-legacy-C4HUJTCr.js", "./useDebounce-legacy-KtnINwEe.js", "./useExternalHooks-legacy-DAimL5by.js", "./useStyles-legacy-E8NPEyeD.js", "./npsSurvey.store-legacy-B1YzgCUi.js", "./cloudPlan.store-legacy-DZDCwxzb.js", "./templates.store-legacy-sX7PVeAe.js", "./focusPanel.store-legacy-WkMhKz3s.js", "./useWorkflowSaving-legacy-BFUB_zl0.js", "./retry-legacy-CTwsGM7o.js", "./executions.store-legacy-BaIYxkfK.js", "./useRunWorkflow-legacy-BCrAw3fm.js", "./usePinnedData-legacy-C2_lNu6m.js", "./nodeCreator.store-legacy-ClrARTgu.js", "./nodeIcon-legacy-DNazPV7p.js", "./useClipboard-legacy-Du1kdRcU.js", "./useCanvasOperations-legacy-BcFAMD9u.js", "./folders.store-legacy-KRiXeR1A.js", "./NodeIcon-legacy-3DGovIp_.js", "./KeyboardShortcutTooltip-legacy-DjUpZPe-.js", "./versions.store-legacy-Bif3-3_C.js", "./usePageRedirectionHelper-legacy-Jjfhks9b.js", "./dataTable.store-legacy-DHg0WAFT.js", "./useCommandBar-legacy-z7fUg8CG.js", "./uniqBy-legacy-rjbrja-W.js", "./ProjectIcon-legacy-CN9AeG6u.js", "./CredentialIcon-legacy-BNm3IfGT.js", "./FileSaver.min-legacy-D7uxxng5.js", "./sortByProperty-legacy-Cr1t4fIx.js", "./constants-legacy-DjFSod4r.js", "./useRecentResources-legacy-DeWuUvW1.js", "./sourceControl.eventBus-legacy-ClEuQxOt.js", "./useKeybindings-legacy-BFRN4rVv.js", "./personalizedTemplatesV3.store-legacy-BqTKeg7M.js", "./useSettingsItems-legacy-CiASrqPu.js"], function (_export, _context) {
    "use strict";

    var computed, toDisplayString, createElementBlock, createCommentVNode, nextTick, unref, ref, onBeforeUnmount, createVNode, defineComponent, onUnmounted, createBlock, mergeProps, onMounted, Fragment, watch, Teleport, normalizeStyle, withCtx, resolveDynamicComponent, openBlock, renderList, createTextVNode, onBeforeMount, normalizeClass, createBaseVNode, I18nT, onClickOutside, useI18n, useLocalStorage, N8nNavigationDropdown_default, N8nButton_default, N8nLogo_default, N8nText_default, N8nIcon_default, N8nResizeWrapper_default, N8nScrollArea_default, N8nMenuItem_default, N8nTooltip_default, N8nLink_default, N8nPopoverReka_default, N8nIconButton_default, __plugin_vue_export_helper_default, useRouter, useRoute, useSourceControlStore, useProjectsStore, useUIStore, useStorage, useSettingsStore, STORES, useUsersStore, useWorkflowsStore, hasPermission, useTelemetry, getBecomeCreatorCta, LOCAL_STORAGE_SIDEBAR_WIDTH, RELEASE_NOTES_URL, EXPERIMENT_TEMPLATES_DATA_QUALITY_KEY, EXPERIMENT_TEMPLATE_RECO_V2_KEY, VIEWS, getResourcePermissions, ABOUT_MODAL_KEY, DateTime, EXPERIMENT_TEMPLATE_RECO_V3_KEY, WHATS_NEW_MODAL_KEY, defineStore, useRootStore, useCloudPlanStore, useTemplatesDataQualityStore, trackTemplatesClick, TemplateClickSource, useTemplatesStore, useCalloutHelpers, KeyboardShortcutTooltip_default, useVersionsStore, usePageRedirectionHelper, useGlobalEntityCreation, useBugReporting, EXTERNAL_LINKS, useCommandBar, CHAT_VIEW, sourceControlEventBus, useKeybindings, usePersonalizedTemplatesV2Store, usePersonalizedTemplatesV3Store, useSettingsItems, __vite_style__, isCustomMenuItem, LOCAL_STORAGE_KEY, RESHOW_DISMISSED_AFTER_DAYS, POLL_INTERVAL_IN_MS, useBecomeTemplateCreatorStore, BecomeTemplateCreatorCta_vue_vue_type_script_setup_true_lang_default, container, textAndCloseButton, text$1, closeButton, becomeCreatorButton, BecomeTemplateCreatorCta_vue_vue_type_style_index_0_lang_module_default, cssModules$4, BecomeTemplateCreatorCta_default, VersionUpdateCTA_vue_vue_type_script_setup_true_lang_default, VersionUpdateCTA_default, ProjectNavigation_vue_vue_type_script_setup_true_lang_default, projects, plusBtn, projectItems, upgradeLink, projectsLabel, collapsed$1, addFirstProjectBtn, home, ProjectNavigation_vue_vue_type_style_index_0_lang_module_default, cssModules$3, ProjectNavigation_default, MainSidebarSourceControl_vue_vue_type_script_setup_true_lang_default, sync, collapsed, icon, connected, branchName, MainSidebarSourceControl_vue_vue_type_style_index_0_lang_module_default, cssModules$2, MainSidebarSourceControl_default, TemplateTooltip_vue_vue_type_script_setup_true_lang_default, triggerContainer, tooltipTrigger, tooltipContent, text, dismissButton, TemplateTooltip_vue_vue_type_style_index_0_lang_module_default, cssModules$1, TemplateTooltip_default, MainSidebar_vue_vue_type_script_setup_true_lang_default, sideMenu, header, sideMenuCollapsed, logo, scrollArea, bottomMenu, bottomMenuItems, popover, divider, popoverTitle, readOnlyEnvironmentIcon, MainSidebar_vue_vue_type_style_index_0_lang_module_default, cssModules, MainSidebar_default;
    function hasEnoughTimePassedSinceDismissal(dismissedAt) {
      return DateTime.fromISO(dismissedAt).plus({
        days: RESHOW_DISMISSED_AFTER_DAYS
      }) <= DateTime.now();
    }

    //#endregion
    //#region src/app/components/BecomeTemplateCreatorCta/BecomeTemplateCreatorCta.vue?vue&type=script&setup=true&lang.ts

    //#endregion
    //#region src/app/composables/useSidebarLayout.ts
    function useSidebarLayout() {
      const uiStore = useUIStore();
      const isCollapsed = computed(() => uiStore.sidebarMenuCollapsed);
      const sidebarWidth = useLocalStorage(LOCAL_STORAGE_SIDEBAR_WIDTH, isCollapsed.value ? 42 : 300);
      const toggleCollapse = () => {
        uiStore.toggleSidebarMenuCollapse();
        if (!isCollapsed.value) sidebarWidth.value = 200;else sidebarWidth.value = 42;
      };
      const isResizing = ref(false);
      function onResizeStart() {
        isResizing.value = true;
      }
      function onResize(event) {
        if (isCollapsed.value && event.x > 100) {
          toggleCollapse();
          return;
        }
        if (isCollapsed.value) return;
        if (event.x < 100 && !isCollapsed.value) {
          toggleCollapse();
          return;
        }
        sidebarWidth.value = event.width;
      }
      function onResizeEnd() {
        isResizing.value = false;
      }
      return {
        isCollapsed,
        toggleCollapse,
        sidebarWidth,
        isResizing,
        onResizeStart,
        onResize,
        onResizeEnd
      };
    }

    //#endregion
    //#region src/app/components/MainSidebar.vue?vue&type=script&setup=true&lang.ts
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Cn;
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        nextTick = _vueRuntimeEsmBundlerLegacy003Js.G;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
        onBeforeUnmount = _vueRuntimeEsmBundlerLegacy003Js.J;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        onUnmounted = _vueRuntimeEsmBundlerLegacy003Js.Q;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        mergeProps = _vueRuntimeEsmBundlerLegacy003Js.W;
        onMounted = _vueRuntimeEsmBundlerLegacy003Js.Z;
        Fragment = _vueRuntimeEsmBundlerLegacy003Js._;
        watch = _vueRuntimeEsmBundlerLegacy003Js._t;
        Teleport = _vueRuntimeEsmBundlerLegacy003Js.b;
        normalizeStyle = _vueRuntimeEsmBundlerLegacy003Js.bn;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        resolveDynamicComponent = _vueRuntimeEsmBundlerLegacy003Js.ct;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        renderList = _vueRuntimeEsmBundlerLegacy003Js.it;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        onBeforeMount = _vueRuntimeEsmBundlerLegacy003Js.q;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js.vn;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
      }, function (_MapCacheLegacy005Js) {
        I18nT = _MapCacheLegacy005Js._t;
        onClickOutside = _MapCacheLegacy005Js.g;
        useI18n = _MapCacheLegacy005Js.gt;
        useLocalStorage = _MapCacheLegacy005Js.j;
      }, function (_srcLegacy007Js) {
        N8nNavigationDropdown_default = _srcLegacy007Js.A;
        N8nButton_default = _srcLegacy007Js.Hn;
        N8nLogo_default = _srcLegacy007Js.N;
        N8nText_default = _srcLegacy007Js.Vn;
        N8nIcon_default = _srcLegacy007Js.Wn;
        N8nResizeWrapper_default = _srcLegacy007Js.b;
        N8nScrollArea_default = _srcLegacy007Js.i;
        N8nMenuItem_default = _srcLegacy007Js.j;
        N8nTooltip_default = _srcLegacy007Js.mt;
        N8nLink_default = _srcLegacy007Js.ut;
        N8nPopoverReka_default = _srcLegacy007Js.w;
        N8nIconButton_default = _srcLegacy007Js.xt;
      }, function (_enLegacy00bJs) {}, function (_preloadHelperLegacy00dJs) {}, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {
        useRouter = _truncateLegacy00hJs.b;
        useRoute = _truncateLegacy00hJs.y;
      }, function (_iconLegacy00nJs) {}, function (_overlayLegacy00rJs) {}, function (_emptyLegacy00vJs) {}, function (_useMessageLegacy00xJs) {}, function (_useTelemetryLegacy00HJs) {
        useSourceControlStore = _useTelemetryLegacy00HJs.Dn;
        useProjectsStore = _useTelemetryLegacy00HJs.En;
        useUIStore = _useTelemetryLegacy00HJs.Fi;
        useStorage = _useTelemetryLegacy00HJs.Uo;
        useSettingsStore = _useTelemetryLegacy00HJs.Wo;
        STORES = _useTelemetryLegacy00HJs.cc;
        useUsersStore = _useTelemetryLegacy00HJs.nr;
        useWorkflowsStore = _useTelemetryLegacy00HJs.o;
        hasPermission = _useTelemetryLegacy00HJs.qn;
        useTelemetry = _useTelemetryLegacy00HJs.t;
        getBecomeCreatorCta = _useTelemetryLegacy00HJs.zs;
      }, function (_useToastLegacy00JJs) {}, function (_sanitizeHtmlLegacy00LJs) {}, function (_CalendarDateLegacy00NJs) {}, function (_pathBrowserifyLegacy00RJs) {}, function (_constantsLegacy00TJs) {
        LOCAL_STORAGE_SIDEBAR_WIDTH = _constantsLegacy00TJs.Bs;
        RELEASE_NOTES_URL = _constantsLegacy00TJs.C;
        EXPERIMENT_TEMPLATES_DATA_QUALITY_KEY = _constantsLegacy00TJs.Go;
        EXPERIMENT_TEMPLATE_RECO_V2_KEY = _constantsLegacy00TJs.Ko;
        VIEWS = _constantsLegacy00TJs.Lo;
        getResourcePermissions = _constantsLegacy00TJs.Oo;
        ABOUT_MODAL_KEY = _constantsLegacy00TJs.Ro;
        DateTime = _constantsLegacy00TJs.Wa;
        EXPERIMENT_TEMPLATE_RECO_V3_KEY = _constantsLegacy00TJs.qo;
        WHATS_NEW_MODAL_KEY = _constantsLegacy00TJs.us;
      }, function (_mergeLegacy00VJs) {}, function (_baseOrderByLegacy00ZJs) {
        defineStore = _baseOrderByLegacy00ZJs.k;
        useRootStore = _baseOrderByLegacy00ZJs.r;
      }, function (_dateformatLegacy00$Js) {}, function (_useDebounceLegacy011Js) {}, function (_useExternalHooksLegacy013Js) {}, function (_useStylesLegacy015Js) {}, function (_npsSurveyStoreLegacy01bJs) {}, function (_cloudPlanStoreLegacy01dJs) {
        useCloudPlanStore = _cloudPlanStoreLegacy01dJs.t;
      }, function (_templatesStoreLegacy01fJs) {
        useTemplatesDataQualityStore = _templatesStoreLegacy01fJs.a;
        trackTemplatesClick = _templatesStoreLegacy01fJs.i;
        TemplateClickSource = _templatesStoreLegacy01fJs.n;
        useTemplatesStore = _templatesStoreLegacy01fJs.t;
      }, function (_focusPanelStoreLegacy01hJs) {}, function (_useWorkflowSavingLegacy01jJs) {}, function (_retryLegacy01lJs) {}, function (_executionsStoreLegacy01nJs) {}, function (_useRunWorkflowLegacy01pJs) {}, function (_usePinnedDataLegacy01rJs) {}, function (_nodeCreatorStoreLegacy01tJs) {
        useCalloutHelpers = _nodeCreatorStoreLegacy01tJs._;
      }, function (_nodeIconLegacy01vJs) {}, function (_useClipboardLegacy01xJs) {}, function (_useCanvasOperationsLegacy01zJs) {}, function (_foldersStoreLegacy01DJs) {}, function (_NodeIconLegacy01FJs) {}, function (_KeyboardShortcutTooltipLegacy01HJs) {
        KeyboardShortcutTooltip_default = _KeyboardShortcutTooltipLegacy01HJs.t;
      }, function (_versionsStoreLegacy01LJs) {
        useVersionsStore = _versionsStoreLegacy01LJs.t;
      }, function (_usePageRedirectionHelperLegacy01NJs) {
        usePageRedirectionHelper = _usePageRedirectionHelperLegacy01NJs.t;
      }, function (_dataTableStoreLegacy01RJs) {}, function (_useCommandBarLegacy01VJs) {
        useGlobalEntityCreation = _useCommandBarLegacy01VJs.i;
        useBugReporting = _useCommandBarLegacy01VJs.n;
        EXTERNAL_LINKS = _useCommandBarLegacy01VJs.r;
        useCommandBar = _useCommandBarLegacy01VJs.t;
      }, function (_uniqByLegacy029Js) {}, function (_ProjectIconLegacy02fJs) {}, function (_CredentialIconLegacy02lJs) {}, function (_FileSaverMinLegacy02HJs) {}, function (_sortByPropertyLegacy031Js) {}, function (_constantsLegacy03lJs) {
        CHAT_VIEW = _constantsLegacy03lJs.l;
      }, function (_useRecentResourcesLegacy03rJs) {}, function (_sourceControlEventBusLegacy03HJs) {
        sourceControlEventBus = _sourceControlEventBusLegacy03HJs.t;
      }, function (_useKeybindingsLegacy03LJs) {
        useKeybindings = _useKeybindingsLegacy03LJs.t;
      }, function (_personalizedTemplatesV3StoreLegacy03NJs) {
        usePersonalizedTemplatesV2Store = _personalizedTemplatesV3StoreLegacy03NJs.n;
        usePersonalizedTemplatesV3Store = _personalizedTemplatesV3StoreLegacy03NJs.t;
      }, function (_useSettingsItemsLegacy04nJs) {
        useSettingsItems = _useSettingsItemsLegacy04nJs.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._container_1yloq_123 {\n  display: flex;\n  flex-direction: column;\n  background-color: var(--color--background--light-2);\n  border: var(--border);\n  margin: var(--spacing--2xs);\n  border-radius: var(--radius);\n}\n._textAndCloseButton_1yloq_132 {\n  display: flex;\n  margin-top: var(--spacing--xs);\n  margin-left: var(--spacing--sm);\n  margin-right: var(--spacing--2xs);\n}\n._text_1yloq_132 {\n  flex: 1;\n  font-size: var(--font-size--3xs);\n  line-height: var(--line-height--sm);\n}\n._closeButton_1yloq_145 {\n  flex: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: var(--spacing--2xs);\n  border: none;\n  color: var(--color--text--tint-1);\n  background-color: transparent;\n  cursor: pointer;\n}\n._becomeCreatorButton_1yloq_157 {\n  margin: var(--spacing--sm);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._projects_cvp5s_123 {\n  width: 100%;\n  align-items: start;\n  gap: var(--spacing--3xs);\n}\n._projects_cvp5s_123:hover ._plusBtn_cvp5s_128 {\n  display: block;\n}\n._projectItems_cvp5s_132 {\n  padding: var(--spacing--2xs) var(--spacing--3xs);\n}\n._upgradeLink_cvp5s_136 {\n  color: var(--color--primary);\n  cursor: pointer;\n}\n._projectsLabel_cvp5s_141 {\n  display: flex;\n  justify-content: space-between;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  box-sizing: border-box;\n  padding: 0 var(--spacing--xs);\n  margin-top: var(--spacing--2xs);\n}\n._projectsLabel_cvp5s_141._collapsed_cvp5s_150 {\n  padding: 0;\n  margin-left: 0;\n  justify-content: center;\n}\n._plusBtn_cvp5s_128 {\n  margin: 0;\n  padding: 0;\n  color: var(--color--text--tint-1);\n  display: none;\n}\n._addFirstProjectBtn_cvp5s_163 {\n  font-size: var(--font-size--xs);\n  margin: 0 var(--spacing--xs);\n  width: calc(100% - var(--spacing--xs) * 2);\n}\n._addFirstProjectBtn_cvp5s_163._collapsed_cvp5s_150 {\n  display: none;\n}\n._home_cvp5s_172 {\n  padding: 0 var(--spacing--3xs) var(--spacing--2xs);\n}\n._home_cvp5s_172._collapsed_cvp5s_150 {\n  border-bottom: var(--border);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._sync_1fdij_123 {\n  padding: 0 var(--spacing--5xs) 0 0;\n}\n._sync_1fdij_123 button {\n  font-size: var(--font-size--2xs);\n}\n._sync_1fdij_123._collapsed_1fdij_129 {\n  padding: var(--spacing--2xs) 0 0;\n}\n._icon_1fdij_133 {\n  padding: var(--spacing--4xs) var(--spacing--xs);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--spacing--3xs);\n}\n._connected_1fdij_141 {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-top: var(--border);\n  padding-right: var(--spacing--4xs);\n}\n._branchName_1fdij_149 {\n  white-space: normal;\n  line-break: anywhere;\n  margin-top: -1px;\n}\n._collapsed_1fdij_129 {\n  text-align: center;\n  flex-direction: column-reverse;\n  padding-top: var(--spacing--4xs);\n}\n._collapsed_1fdij_129 ._connected_1fdij_141 {\n  flex-direction: column-reverse;\n  gap: var(--spacing--3xs);\n  padding-right: 0;\n}\n._collapsed_1fdij_129 ._connected_1fdij_141 ._icon_1fdij_133 {\n  width: 100%;\n  padding: var(--spacing--3xs) 0;\n  justify-content: center;\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._triggerContainer_5kwt6_123 {\n  z-index: 9999;\n  pointer-events: auto;\n}\n._tooltipTrigger_5kwt6_128 {\n  width: 1px;\n  height: 1px;\n  opacity: 0;\n}\n._tooltipContent_5kwt6_134 {\n  display: flex;\n  align-items: flex-start;\n  gap: var(--spacing--2xs);\n}\n._text_5kwt6_140 {\n  flex: 1;\n  font-size: var(--font-size--2xs);\n  line-height: var(--line-height--md);\n}\n._dismissButton_5kwt6_146 {\n  background: none;\n  border: none;\n  padding: 0;\n  cursor: pointer;\n  color: var(--color--text--tint-1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 16px;\n  height: 16px;\n  flex-shrink: 0;\n}\n._dismissButton_5kwt6_146:hover {\n  color: var(--color--text);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._sideMenu_1g1dy_123 {\n  position: relative;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  border-right: var(--border);\n  background-color: var(--menu--color--background, var(--color--background--light-2));\n}\n._sideMenu_1g1dy_123 ._header_1g1dy_131 {\n  display: flex;\n  align-items: center;\n  padding: var(--spacing--2xs) var(--spacing--3xs);\n  margin-bottom: var(--spacing--2xs);\n  justify-content: space-between;\n  gap: var(--spacing--4xs);\n}\n._sideMenu_1g1dy_123 ._header_1g1dy_131 img {\n  position: relative;\n  left: 1px;\n  height: 20px;\n  margin-right: auto;\n}\n._sideMenu_1g1dy_123._sideMenuCollapsed_1g1dy_145 {\n  width: 42px;\n  min-width: auto;\n}\n._sideMenu_1g1dy_123._sideMenuCollapsed_1g1dy_145 ._header_1g1dy_131 {\n  flex-direction: column;\n  border-bottom: var(--border);\n}\n._logo_1g1dy_154 {\n  margin-right: auto;\n}\n._scrollArea_1g1dy_158 {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n._bottomMenu_1g1dy_164 {\n  display: flex;\n  flex-direction: column;\n  margin-top: auto;\n}\n._sideMenuCollapsed_1g1dy_145 ._bottomMenu_1g1dy_164 {\n  border-top: var(--border);\n}\n._bottomMenuItems_1g1dy_174 {\n  padding: var(--spacing--3xs);\n}\n._popover_1g1dy_178 {\n  padding: var(--spacing--4xs);\n  min-width: 260px;\n  border-radius: var(--radius);\n  background-color: var(--menu--color--background, var(--color--background--light-2));\n}\n._divider_1g1dy_185 {\n  display: block;\n  width: 100%;\n  padding-top: var(--spacing--3xs);\n  border-bottom: var(--border);\n  margin-bottom: var(--spacing--3xs);\n  background-color: var(--color--border);\n}\n._popoverTitle_1g1dy_194 {\n  display: block;\n  margin-bottom: var(--spacing--3xs);\n  padding-left: var(--spacing--3xs);\n  margin-top: var(--spacing--xs);\n}\n@media screen and (max-height: 470px) {\n#help {\n    display: none;\n}\n}\n._readOnlyEnvironmentIcon_1g1dy_206 {\n  display: inline-block;\n  color: white;\n  background-color: var(--color--warning);\n  align-self: center;\n  padding: 2px;\n  border-radius: var(--radius--sm);\n  margin: 7px 12px 0 5px;\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region ../@n8n/design-system/src/types/menu.ts
        isCustomMenuItem = e => "component" in e; //#endregion
        //#region src/app/components/BecomeTemplateCreatorCta/becomeTemplateCreatorStore.ts
        LOCAL_STORAGE_KEY = "N8N_BECOME_TEMPLATE_CREATOR_CTA_DISMISSED_AT";
        RESHOW_DISMISSED_AFTER_DAYS = 30;
        POLL_INTERVAL_IN_MS = 900 * 1e3;
        useBecomeTemplateCreatorStore = defineStore(STORES.BECOME_TEMPLATE_CREATOR, () => {
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
        BecomeTemplateCreatorCta_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
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
              }, [createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.textAndCloseButton)
              }, [createVNode(unref(N8nText_default), {
                size: "small"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("becomeCreator.text")), 1)]),
                _: 1
              }), createBaseVNode("button", {
                class: normalizeClass(_ctx.$style.closeButton),
                "data-test-id": "close-become-template-creator-cta",
                onClick: _cache[0] || (_cache[0] = $event => unref(store).dismissCta())
              }, [createVNode(unref(N8nIcon_default), {
                icon: "x",
                title: unref(i18n).baseText("generic.close")
              }, null, 8, ["title"])], 2)], 2), createVNode(unref(N8nButton_default), {
                class: normalizeClass(_ctx.$style.becomeCreatorButton),
                label: unref(i18n).baseText("becomeCreator.buttonText"),
                type: "secondary",
                element: "a",
                href: "https://creators.n8n.io/hub",
                target: "_blank",
                onClick
              }, null, 8, ["class", "label"])], 2)) : createCommentVNode("", true);
            };
          }
        }); //#endregion
        //#region src/app/components/BecomeTemplateCreatorCta/BecomeTemplateCreatorCta.vue?vue&type=style&index=0&lang.module.scss
        container = "_container_1yloq_123";
        textAndCloseButton = "_textAndCloseButton_1yloq_132";
        text$1 = "_text_1yloq_132";
        closeButton = "_closeButton_1yloq_145";
        becomeCreatorButton = "_becomeCreatorButton_1yloq_157";
        BecomeTemplateCreatorCta_vue_vue_type_style_index_0_lang_module_default = {
          container,
          textAndCloseButton,
          text: text$1,
          closeButton,
          becomeCreatorButton
        }; //#endregion
        //#region src/app/components/BecomeTemplateCreatorCta/BecomeTemplateCreatorCta.vue
        cssModules$4 = {
          "$style": BecomeTemplateCreatorCta_vue_vue_type_style_index_0_lang_module_default
        };
        BecomeTemplateCreatorCta_default = /* @__PURE__ */__plugin_vue_export_helper_default(BecomeTemplateCreatorCta_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$4]]); //#endregion
        //#region src/app/components/VersionUpdateCTA.vue?vue&type=script&setup=true&lang.ts
        VersionUpdateCTA_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "VersionUpdateCTA",
          props: {
            disabled: {
              type: Boolean,
              default: false
            },
            tooltipText: {
              default: void 0
            }
          },
          setup(__props) {
            const props = __props;
            const i18n = useI18n();
            const versionsStore = useVersionsStore();
            const pageRedirectionHelper = usePageRedirectionHelper();
            const telemetry = useTelemetry();
            const onUpdateClick = async () => {
              telemetry.track("User clicked on update button", {
                source: "main-sidebar"
              });
              await pageRedirectionHelper.goToVersions();
            };
            return (_ctx, _cache) => {
              return openBlock(), createBlock(unref(N8nMenuItem_default), {
                "data-test-id": "version-update-cta-button",
                item: {
                  id: "version-update-cta",
                  icon: {
                    value: "status-warning",
                    type: "icon",
                    color: "primary"
                  },
                  disabled: props.disabled,
                  label: unref(i18n).baseText("whatsNew.versionsBehind", {
                    interpolate: {
                      count: unref(versionsStore).nextVersions.length > 99 ? "99+" : unref(versionsStore).nextVersions.length
                    }
                  })
                },
                onClick: onUpdateClick
              }, null, 8, ["item"]);
            };
          }
        }); //#endregion
        //#region src/app/components/VersionUpdateCTA.vue
        VersionUpdateCTA_default = VersionUpdateCTA_vue_vue_type_script_setup_true_lang_default; //#endregion
        //#region src/features/collaboration/projects/components/ProjectNavigation.vue?vue&type=script&setup=true&lang.ts
        ProjectNavigation_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "ProjectNavigation",
          props: {
            collapsed: {
              type: Boolean
            },
            planName: {}
          },
          setup(__props) {
            const props = __props;
            const locale = useI18n();
            const globalEntityCreation = useGlobalEntityCreation();
            const projectsStore = useProjectsStore();
            const settingsStore = useSettingsStore();
            const usersStore = useUsersStore();
            const displayProjects = computed(() => globalEntityCreation.displayProjects.value);
            const isFoldersFeatureEnabled = computed(() => settingsStore.isFoldersFeatureEnabled);
            const hasMultipleVerifiedUsers = computed(() => usersStore.allUsers.filter(user => !user.isPendingUser).length > 1);
            const home$1 = computed(() => ({
              id: "home",
              label: locale.baseText("projects.menu.overview"),
              icon: "house",
              route: {
                to: {
                  name: VIEWS.HOMEPAGE
                }
              }
            }));
            const shared = computed(() => ({
              id: "shared",
              label: locale.baseText("projects.menu.shared"),
              icon: "share",
              route: {
                to: {
                  name: VIEWS.SHARED_WITH_ME
                }
              }
            }));
            const getProjectMenuItem = project => ({
              id: project.id,
              label: project.name ?? "",
              icon: project.icon,
              route: {
                to: {
                  name: VIEWS.PROJECTS_WORKFLOWS,
                  params: {
                    projectId: project.id
                  }
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
                  params: {
                    projectId: projectsStore.personalProject?.id
                  }
                }
              }
            }));
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
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(_ctx.$style.projects)
              }, [createBaseVNode("div", {
                class: normalizeClass([_ctx.$style.home, props.collapsed ? _ctx.$style.collapsed : ""])
              }, [createVNode(unref(N8nMenuItem_default), {
                item: home$1.value,
                compact: props.collapsed,
                active: activeTabId.value === "home",
                "data-test-id": "project-home-menu-item"
              }, null, 8, ["item", "compact", "active"]), unref(projectsStore).isTeamProjectFeatureEnabled || isFoldersFeatureEnabled.value ? (openBlock(), createBlock(unref(N8nMenuItem_default), {
                key: 0,
                item: personalProject.value,
                compact: props.collapsed,
                active: activeTabId.value === personalProject.value.id,
                "data-test-id": "project-personal-menu-item"
              }, null, 8, ["item", "compact", "active"])) : createCommentVNode("", true), (unref(projectsStore).isTeamProjectFeatureEnabled || isFoldersFeatureEnabled.value) && hasMultipleVerifiedUsers.value ? (openBlock(), createBlock(unref(N8nMenuItem_default), {
                key: 1,
                item: shared.value,
                compact: props.collapsed,
                active: activeTabId.value === "shared",
                "data-test-id": "project-shared-menu-item"
              }, null, 8, ["item", "compact", "active"])) : createCommentVNode("", true)], 2), !props.collapsed && unref(projectsStore).isTeamProjectFeatureEnabled && displayProjects.value.length > 0 ? (openBlock(), createBlock(unref(N8nText_default), {
                key: 0,
                class: normalizeClass([_ctx.$style.projectsLabel]),
                size: "small",
                bold: "",
                role: "heading",
                color: "text-light"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("projects.menu.title")), 1)]),
                _: 1
              }, 8, ["class"])) : createCommentVNode("", true), unref(projectsStore).isTeamProjectFeatureEnabled || isFoldersFeatureEnabled.value ? (openBlock(), createElementBlock("div", {
                key: 1,
                class: normalizeClass(_ctx.$style.projectItems)
              }, [(openBlock(true), createElementBlock(Fragment, null, renderList(displayProjects.value, project => {
                return openBlock(), createBlock(unref(N8nMenuItem_default), {
                  key: project.id,
                  class: normalizeClass({
                    [_ctx.$style.collapsed]: props.collapsed
                  }),
                  item: getProjectMenuItem(project),
                  compact: props.collapsed,
                  active: activeTabId.value === project.id,
                  "data-test-id": "project-menu-item"
                }, null, 8, ["class", "item", "compact", "active"]);
              }), 128))], 2)) : createCommentVNode("", true)], 2);
            };
          }
        }); //#endregion
        //#region src/features/collaboration/projects/components/ProjectNavigation.vue?vue&type=style&index=0&lang.module.scss
        projects = "_projects_cvp5s_123";
        plusBtn = "_plusBtn_cvp5s_128";
        projectItems = "_projectItems_cvp5s_132";
        upgradeLink = "_upgradeLink_cvp5s_136";
        projectsLabel = "_projectsLabel_cvp5s_141";
        collapsed$1 = "_collapsed_cvp5s_150";
        addFirstProjectBtn = "_addFirstProjectBtn_cvp5s_163";
        home = "_home_cvp5s_172";
        ProjectNavigation_vue_vue_type_style_index_0_lang_module_default = {
          projects,
          plusBtn,
          projectItems,
          upgradeLink,
          projectsLabel,
          collapsed: collapsed$1,
          addFirstProjectBtn,
          home
        }; //#endregion
        //#region src/features/collaboration/projects/components/ProjectNavigation.vue
        cssModules$3 = {
          "$style": ProjectNavigation_vue_vue_type_style_index_0_lang_module_default
        };
        ProjectNavigation_default = /* @__PURE__ */__plugin_vue_export_helper_default(ProjectNavigation_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$3]]); //#endregion
        //#region src/app/components/MainSidebarSourceControl.vue?vue&type=script&setup=true&lang.ts
        MainSidebarSourceControl_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "MainSidebarSourceControl",
          props: {
            isCollapsed: {
              type: Boolean
            }
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
              return hasPermission(["rbac"], {
                rbac: {
                  scope: "sourceControl:push"
                }
              }) || projectStore.myProjects.some(project => project.type === "team" && getResourcePermissions(project?.scopes)?.sourceControl?.push);
            });
            const hasPullPermission = computed(() => {
              return hasPermission(["rbac"], {
                rbac: {
                  scope: "sourceControl:pull"
                }
              });
            });
            const sourceControlAvailable = computed(() => sourceControlStore.isEnterpriseSourceControlEnabled && (hasPullPermission.value || hasPushPermission.value));
            function getAccessibleTextColor(backgroundColor) {
              const hex = backgroundColor.replace("#", "");
              const r = parseInt(hex.slice(0, 2), 16) / 255;
              const g = parseInt(hex.slice(2, 4), 16) / 255;
              const b = parseInt(hex.slice(4, 6), 16) / 255;
              const getLuminance = channel => {
                return channel <= .03928 ? channel / 12.92 : Math.pow((channel + .055) / 1.055, 2.4);
              };
              return .2126 * getLuminance(r) + .7152 * getLuminance(g) + .0722 * getLuminance(b) > .5 ? "#000000" : "#ffffff";
            }
            const accessibleTextColor = computed(() => {
              return getAccessibleTextColor(sourceControlStore.preferences.branchColor);
            });
            async function pushWorkfolder() {
              router.push({
                query: {
                  ...route.query,
                  sourceControl: "push"
                }
              });
            }
            function pullWorkfolder() {
              router.push({
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
                "data-test-id": "main-sidebar-source-control"
              }, [unref(sourceControlStore).preferences.connected && unref(sourceControlStore).preferences.branchName ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(_ctx.$style.connected),
                "data-test-id": "main-sidebar-source-control-connected"
              }, [createVNode(unref(N8nTooltip_default), {
                disabled: !_ctx.isCollapsed,
                "show-after": tooltipOpenDelay.value,
                placement: "right"
              }, {
                content: withCtx(() => [createBaseVNode("div", null, toDisplayString(currentBranch.value), 1)]),
                default: withCtx(() => [createBaseVNode("span", {
                  class: normalizeClass(_ctx.$style.icon),
                  style: normalizeStyle({
                    color: accessibleTextColor.value,
                    background: unref(sourceControlStore).preferences.branchColor
                  })
                }, [createVNode(unref(N8nIcon_default), {
                  icon: "git-branch",
                  size: "small"
                }), !_ctx.isCollapsed ? (openBlock(), createBlock(unref(N8nText_default), {
                  key: 0,
                  bold: "",
                  size: "small",
                  class: normalizeClass(_ctx.$style.branchName)
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(currentBranch.value), 1)]),
                  _: 1
                }, 8, ["class"])) : createCommentVNode("", true)], 6)]),
                _: 1
              }, 8, ["disabled", "show-after"]), createBaseVNode("div", null, [createVNode(unref(N8nTooltip_default), {
                disabled: !_ctx.isCollapsed && hasPullPermission.value,
                "show-after": tooltipOpenDelay.value,
                placement: _ctx.isCollapsed ? "right" : "top"
              }, {
                content: withCtx(() => [createBaseVNode("div", null, toDisplayString(!hasPullPermission.value ? unref(i18n).baseText("settings.sourceControl.button.pull.forbidden") : unref(i18n).baseText("settings.sourceControl.button.pull")), 1)]),
                default: withCtx(() => [createVNode(unref(N8nButton_default), {
                  disabled: !hasPullPermission.value,
                  "data-test-id": "main-sidebar-source-control-pull",
                  icon: "arrow-down",
                  type: "tertiary",
                  size: _ctx.isCollapsed ? "small" : "mini",
                  text: "",
                  square: _ctx.isCollapsed,
                  label: _ctx.isCollapsed ? "" : unref(i18n).baseText("settings.sourceControl.button.pull"),
                  onClick: pullWorkfolder
                }, null, 8, ["disabled", "size", "square", "label"])]),
                _: 1
              }, 8, ["disabled", "show-after", "placement"]), createVNode(unref(N8nTooltip_default), {
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
                  text: "",
                  size: _ctx.isCollapsed ? "small" : "mini",
                  onClick: pushWorkfolder
                }, null, 8, ["square", "label", "disabled", "size"])]),
                _: 1
              }, 8, ["disabled", "show-after", "placement"])])], 2)) : createCommentVNode("", true)], 2)) : createCommentVNode("", true);
            };
          }
        }); //#endregion
        //#region src/app/components/MainSidebarSourceControl.vue?vue&type=style&index=0&lang.module.scss
        sync = "_sync_1fdij_123";
        collapsed = "_collapsed_1fdij_129";
        icon = "_icon_1fdij_133";
        connected = "_connected_1fdij_141";
        branchName = "_branchName_1fdij_149";
        MainSidebarSourceControl_vue_vue_type_style_index_0_lang_module_default = {
          sync,
          collapsed,
          icon,
          connected,
          branchName
        }; //#endregion
        //#region src/app/components/MainSidebarSourceControl.vue
        cssModules$2 = {
          "$style": MainSidebarSourceControl_vue_vue_type_style_index_0_lang_module_default
        };
        MainSidebarSourceControl_default = /* @__PURE__ */__plugin_vue_export_helper_default(MainSidebarSourceControl_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$2]]); //#endregion
        //#region src/experiments/personalizedTemplatesV3/components/TemplateTooltip.vue?vue&type=script&setup=true&lang.ts
        TemplateTooltip_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
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
            watch(shouldShow, async newValue => {
              if (newValue) await showTooltip();else hideTooltip();
            }, {
              immediate: true
            });
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
              return openBlock(), createBlock(Teleport, {
                to: "body"
              }, [isVisible.value && shouldShow.value ? (openBlock(), createElementBlock("div", {
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
                content: withCtx(() => [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.tooltipContent)
                }, [createBaseVNode("span", {
                  class: normalizeClass(_ctx.$style.text)
                }, toDisplayString(unref(locale).baseText("experiments.personalizedTemplatesV3.recommendationTooltip")), 3), createBaseVNode("button", {
                  class: normalizeClass(_ctx.$style.dismissButton),
                  type: "button",
                  onClick: handleDismiss,
                  "aria-label": "Dismiss tooltip"
                }, [createVNode(unref(N8nIcon_default), {
                  icon: "x",
                  size: "small"
                })], 2)], 2)]),
                default: withCtx(() => [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.tooltipTrigger)
                }, null, 2)]),
                _: 1
              })], 6)) : createCommentVNode("", true)]);
            };
          }
        }); //#endregion
        //#region src/experiments/personalizedTemplatesV3/components/TemplateTooltip.vue?vue&type=style&index=0&lang.module.scss
        triggerContainer = "_triggerContainer_5kwt6_123";
        tooltipTrigger = "_tooltipTrigger_5kwt6_128";
        tooltipContent = "_tooltipContent_5kwt6_134";
        text = "_text_5kwt6_140";
        dismissButton = "_dismissButton_5kwt6_146";
        TemplateTooltip_vue_vue_type_style_index_0_lang_module_default = {
          triggerContainer,
          tooltipTrigger,
          tooltipContent,
          text,
          dismissButton
        }; //#endregion
        //#region src/experiments/personalizedTemplatesV3/components/TemplateTooltip.vue
        cssModules$1 = {
          "$style": TemplateTooltip_vue_vue_type_style_index_0_lang_module_default
        };
        TemplateTooltip_default = /* @__PURE__ */__plugin_vue_export_helper_default(TemplateTooltip_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$1]]);
        MainSidebar_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
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
            const i18n = useI18n();
            const router = useRouter();
            const telemetry = useTelemetry();
            const pageRedirectionHelper = usePageRedirectionHelper();
            const {
              getReportingURL
            } = useBugReporting();
            const calloutHelpers = useCalloutHelpers();
            const {
              isCollapsed,
              sidebarWidth,
              onResizeStart,
              onResize,
              onResizeEnd,
              toggleCollapse
            } = useSidebarLayout();
            useKeybindings({
              ctrl_alt_o: () => handleSelect("about"),
              ["bracketleft"]: () => toggleCollapse()
            });
            const {
              isEnabled: isCommandBarEnabled
            } = useCommandBar();
            const {
              settingsItems
            } = useSettingsItems();
            const basePath = ref("");
            const showWhatsNewNotification = computed(() => versionsStore.hasVersionUpdates || versionsStore.whatsNewArticles.some(article => !versionsStore.isWhatsNewArticleRead(article.id)));
            const isTemplatesExperimentEnabled = computed(() => {
              return personalizedTemplatesV2Store.isFeatureEnabled() || personalizedTemplatesV3Store.isFeatureEnabled() || templatesDataQualityStore.isFeatureEnabled();
            });
            const mainMenuItems = computed(() => [{
              id: "cloud-admin",
              position: "bottom",
              label: "Admin Panel",
              icon: "cloud",
              available: settingsStore.isCloudDeployment && hasPermission(["instanceOwner"])
            }, {
              id: "chat",
              icon: "message-circle",
              label: "Chat",
              position: "bottom",
              route: {
                to: {
                  name: CHAT_VIEW
                }
              },
              available: settingsStore.isChatFeatureEnabled && hasPermission(["rbac"], {
                rbac: {
                  scope: "chatHub:message"
                }
              })
            }, {
              id: "templates",
              icon: "package-open",
              label: i18n.baseText("generic.templates"),
              position: "bottom",
              available: settingsStore.isTemplatesEnabled && calloutHelpers.isPreBuiltAgentsCalloutVisible.value && !isTemplatesExperimentEnabled.value,
              route: {
                to: {
                  name: VIEWS.PRE_BUILT_AGENT_TEMPLATES
                }
              }
            }, {
              id: "templates",
              icon: "package-open",
              label: i18n.baseText("generic.templates"),
              position: "bottom",
              available: settingsStore.isTemplatesEnabled && isTemplatesExperimentEnabled.value
            }, {
              id: "templates",
              icon: "package-open",
              label: i18n.baseText("generic.templates"),
              position: "bottom",
              available: settingsStore.isTemplatesEnabled && !calloutHelpers.isPreBuiltAgentsCalloutVisible.value && templatesStore.hasCustomTemplatesHost && !isTemplatesExperimentEnabled.value,
              route: {
                to: {
                  name: VIEWS.TEMPLATES
                }
              }
            }, {
              id: "templates",
              icon: "package-open",
              label: i18n.baseText("generic.templates"),
              position: "bottom",
              available: settingsStore.isTemplatesEnabled && !calloutHelpers.isPreBuiltAgentsCalloutVisible.value && !templatesStore.hasCustomTemplatesHost && !isTemplatesExperimentEnabled.value,
              link: {
                href: templatesStore.websiteTemplateRepositoryURL,
                target: "_blank"
              }
            }, {
              id: "insights",
              icon: "chart-column-decreasing",
              label: "Insights",
              position: "bottom",
              route: {
                to: {
                  name: VIEWS.INSIGHTS
                }
              },
              available: settingsStore.isModuleActive("insights") && hasPermission(["rbac"], {
                rbac: {
                  scope: "insights:list"
                }
              })
            }, {
              id: "help",
              icon: "circle-help",
              label: i18n.baseText("mainSidebar.help"),
              notification: showWhatsNewNotification.value,
              position: "bottom",
              children: [{
                id: "quickstart",
                icon: "video",
                label: i18n.baseText("mainSidebar.helpMenuItems.quickstart"),
                link: {
                  href: EXTERNAL_LINKS.QUICKSTART_VIDEO,
                  target: "_blank"
                }
              }, {
                id: "docs",
                icon: "book",
                label: i18n.baseText("mainSidebar.helpMenuItems.documentation"),
                link: {
                  href: EXTERNAL_LINKS.DOCUMENTATION,
                  target: "_blank"
                }
              }, {
                id: "forum",
                icon: "users",
                label: i18n.baseText("mainSidebar.helpMenuItems.forum"),
                link: {
                  href: EXTERNAL_LINKS.FORUM,
                  target: "_blank"
                }
              }, {
                id: "examples",
                icon: "graduation-cap",
                label: i18n.baseText("mainSidebar.helpMenuItems.course"),
                link: {
                  href: EXTERNAL_LINKS.COURSES,
                  target: "_blank"
                }
              }, {
                id: "report-bug",
                icon: "bug",
                label: i18n.baseText("mainSidebar.helpMenuItems.reportBug"),
                link: {
                  href: getReportingURL(),
                  target: "_blank"
                }
              }, {
                id: "about",
                icon: "info",
                label: i18n.baseText("mainSidebar.aboutN8n"),
                position: "bottom"
              }]
            }, {
              id: "settings",
              label: i18n.baseText("mainSidebar.settings"),
              icon: "settings",
              available: true,
              children: settingsItems.value
            }]);
            const visibleMenuItems = computed(() => mainMenuItems.value.filter(item => item.available !== false));
            const whatsNewItems = computed(() => ({
              available: versionsStore.hasVersionUpdates || versionsStore.whatsNewArticles.length > 0,
              children: [...versionsStore.whatsNewArticles.map(article => ({
                id: `whats-new-article-${article.id}`,
                label: article.title,
                size: "small",
                customIconSize: "small",
                icon: {
                  type: "emoji",
                  value: "•",
                  color: !versionsStore.isWhatsNewArticleRead(article.id) ? "primary" : "text-light"
                }
              })), {
                id: "full-changelog",
                icon: "external-link",
                label: i18n.baseText("mainSidebar.whatsNew.fullChangelog"),
                link: {
                  href: RELEASE_NOTES_URL,
                  target: "_blank"
                },
                size: "small",
                customIconSize: "small"
              }, {
                id: "version-upgrade-cta",
                component: VersionUpdateCTA_default,
                available: versionsStore.hasVersionUpdates && usersStore.canUserUpdateVersion,
                props: {
                  tooltipText: !usersStore.canUserUpdateVersion ? i18n.baseText("whatsNew.updateNudgeTooltip") : void 0
                }
              }]
            }));
            const createBtn = ref();
            const userIsTrialing = computed(() => cloudPlanStore.userIsTrialing);
            onMounted(() => {
              basePath.value = rootStore.baseUrl;
              becomeTemplateCreatorStore.startMonitoringCta();
            });
            onBeforeUnmount(() => {
              becomeTemplateCreatorStore.stopMonitoringCta();
            });
            const trackHelpItemClick = itemType => {
              telemetry.track("User clicked help resource", {
                type: itemType,
                workflow_id: workflowsStore.workflowId
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
            const handleSelect = key => {
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
            const onLogout = () => {
              router.push({
                name: VIEWS.SIGNOUT
              });
            };
            return (_ctx, _cache) => {
              return openBlock(), createBlock(unref(N8nResizeWrapper_default), {
                id: "side-menu",
                class: normalizeClass({
                  [_ctx.$style.sideMenu]: true,
                  [_ctx.$style.sideMenuCollapsed]: unref(isCollapsed)
                }),
                width: unref(sidebarWidth),
                style: normalizeStyle({
                  width: `${unref(sidebarWidth)}px`
                }),
                "supported-directions": ["right"],
                "min-width": 200,
                "max-width": 500,
                "grid-size": 8,
                onResizestart: unref(onResizeStart),
                onResize: unref(onResize),
                onResizeend: unref(onResizeEnd)
              }, {
                default: withCtx(() => [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.header)
                }, [!unref(isCollapsed) ? (openBlock(), createBlock(unref(N8nLogo_default), {
                  key: 0,
                  class: normalizeClass(_ctx.$style.logo),
                  size: "small",
                  collapsed: unref(isCollapsed),
                  "release-channel": unref(settingsStore).settings.releaseChannel
                }, {
                  default: withCtx(() => [unref(sourceControlStore).preferences.branchReadOnly && !unref(isCollapsed) ? (openBlock(), createBlock(unref(N8nTooltip_default), {
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
                      class: normalizeClass(_ctx.$style.readOnlyEnvironmentIcon)
                    }, null, 8, ["class"])]),
                    _: 1
                  })) : createCommentVNode("", true)]),
                  _: 1
                }, 8, ["class", "collapsed", "release-channel"])) : createCommentVNode("", true), createVNode(KeyboardShortcutTooltip_default, {
                  placement: unref(isCollapsed) ? "right" : "bottom",
                  label: unref(isCollapsed) ? unref(i18n).baseText("mainSidebar.state.expand") : unref(i18n).baseText("mainSidebar.state.collapse"),
                  "show-after": "500",
                  shortcut: {
                    keys: ["["]
                  }
                }, {
                  default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
                    id: "toggle-sidebar-button",
                    size: "small",
                    type: "highlight",
                    icon: "panel-left",
                    "icon-size": "large",
                    "aria-label": "Toggle sidebar",
                    onClick: unref(toggleCollapse)
                  }, null, 8, ["onClick"])]),
                  _: 1
                }, 8, ["placement", "label"]), createVNode(unref(N8nNavigationDropdown_default), {
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
                  [unref(createProjectAppendSlotName)]: withCtx(({
                    item
                  }) => [unref(sourceControlStore).preferences.branchReadOnly ? (openBlock(), createBlock(unref(N8nTooltip_default), {
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
                      style: {
                        "margin-left": "auto"
                      },
                      type: "tertiary",
                      onClick: $event => unref(handleMenuSelect)(item.id)
                    }, {
                      default: withCtx(() => [createTextVNode(toDisplayString(unref(upgradeLabel)), 1)]),
                      _: 2
                    }, 1032, ["onClick"]))]),
                    _: 2
                  }, 1032, ["content"])) : createCommentVNode("", true)]),
                  default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
                    size: "small",
                    type: "highlight",
                    icon: "plus",
                    "icon-size": "large",
                    "aria-label": "Add new item"
                  })]),
                  _: 2
                }, 1032, ["menu", "onSelect"]), unref(isCommandBarEnabled) ? (openBlock(), createBlock(KeyboardShortcutTooltip_default, {
                  key: 1,
                  placement: unref(isCollapsed) ? "right" : "bottom",
                  "show-after": "500",
                  label: unref(i18n).baseText("nodeView.openCommandBar"),
                  shortcut: {
                    keys: ["k"],
                    metaKey: true
                  }
                }, {
                  default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
                    size: "small",
                    type: "highlight",
                    icon: "search",
                    "icon-size": "large",
                    "aria-label": "Open command palette",
                    onClick: openCommandBar
                  })]),
                  _: 1
                }, 8, ["placement", "label"])) : createCommentVNode("", true)], 2), createVNode(unref(N8nScrollArea_default), {
                  "as-child": ""
                }, {
                  default: withCtx(() => [createBaseVNode("div", {
                    class: normalizeClass(_ctx.$style.scrollArea)
                  }, [createVNode(ProjectNavigation_default, {
                    collapsed: unref(isCollapsed),
                    "plan-name": unref(cloudPlanStore).currentPlanData?.displayName
                  }, null, 8, ["collapsed", "plan-name"]), createBaseVNode("div", {
                    class: normalizeClass(_ctx.$style.bottomMenu)
                  }, [createBaseVNode("div", {
                    class: normalizeClass(_ctx.$style.bottomMenuItems)
                  }, [(openBlock(true), createElementBlock(Fragment, null, renderList(visibleMenuItems.value, item => {
                    return openBlock(), createElementBlock(Fragment, {
                      key: item.id
                    }, [item.children && item.id === "help" ? (openBlock(), createBlock(unref(N8nPopoverReka_default), {
                      key: "help",
                      side: "right",
                      align: "end",
                      "side-offset": 12
                    }, {
                      content: withCtx(() => [createBaseVNode("div", {
                        class: normalizeClass(_ctx.$style.popover)
                      }, [!unref(isCollapsed) && !userIsTrialing.value ? (openBlock(), createBlock(BecomeTemplateCreatorCta_default, {
                        key: 0
                      })) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList(item.children, child => {
                        return openBlock(), createElementBlock(Fragment, {
                          key: child.id
                        }, [unref(isCustomMenuItem)(child) ? (openBlock(), createBlock(resolveDynamicComponent(child.component), mergeProps({
                          key: 0,
                          ref_for: true
                        }, child.props), null, 16)) : (openBlock(), createBlock(unref(N8nMenuItem_default), {
                          key: 1,
                          item: child,
                          onClick: () => handleSelect(child.id)
                        }, null, 8, ["item", "onClick"]))], 64);
                      }), 128)), whatsNewItems.value.available ? (openBlock(), createElementBlock(Fragment, {
                        key: 1
                      }, [createVNode(unref(N8nText_default), {
                        bold: "",
                        size: "small",
                        class: normalizeClass(_ctx.$style.popoverTitle),
                        color: "text-light"
                      }, {
                        default: withCtx(() => _cache[0] || (_cache[0] = [createTextVNode("What's new")])),
                        _: 1
                      }, 8, ["class"]), (openBlock(true), createElementBlock(Fragment, null, renderList(whatsNewItems.value.children, child => {
                        return openBlock(), createElementBlock(Fragment, {
                          key: child.id
                        }, [unref(isCustomMenuItem)(child) ? (openBlock(), createBlock(resolveDynamicComponent(child.component), mergeProps({
                          key: 0,
                          ref_for: true
                        }, child.props), null, 16)) : (openBlock(), createBlock(unref(N8nMenuItem_default), {
                          key: 1,
                          item: child,
                          onClick: () => handleSelect(child.id)
                        }, null, 8, ["item", "onClick"]))], 64);
                      }), 128))], 64)) : createCommentVNode("", true)], 2)]),
                      trigger: withCtx(() => [createVNode(unref(N8nMenuItem_default), {
                        "data-test-id": `main-sidebar-${item.id}`,
                        item,
                        compact: unref(isCollapsed),
                        onClick: () => handleSelect(item.id)
                      }, null, 8, ["data-test-id", "item", "compact", "onClick"])]),
                      _: 2
                    }, 1024)) : item.children && item.id === "settings" ? (openBlock(), createBlock(unref(N8nPopoverReka_default), {
                      key: "settings",
                      side: "right",
                      align: "end",
                      "side-offset": 12
                    }, {
                      content: withCtx(() => [createBaseVNode("div", {
                        class: normalizeClass(_ctx.$style.popover)
                      }, [(openBlock(true), createElementBlock(Fragment, null, renderList(item.children, child => {
                        return openBlock(), createElementBlock(Fragment, {
                          key: child.id
                        }, [unref(isCustomMenuItem)(child) ? (openBlock(), createBlock(resolveDynamicComponent(child.component), mergeProps({
                          key: 0,
                          ref_for: true
                        }, child.props), null, 16)) : (openBlock(), createBlock(unref(N8nMenuItem_default), {
                          key: 1,
                          item: child,
                          onClick: () => handleSelect(child.id)
                        }, null, 8, ["item", "onClick"]))], 64);
                      }), 128)), createBaseVNode("span", {
                        class: normalizeClass(_ctx.$style.divider)
                      }, null, 2), createVNode(unref(N8nMenuItem_default), {
                        "data-test-id": "main-sidebar-log-out",
                        item: {
                          id: "sign-out",
                          label: "Sign out",
                          icon: "door-open"
                        },
                        onClick: onLogout
                      })], 2)]),
                      trigger: withCtx(() => [createVNode(unref(N8nMenuItem_default), {
                        "data-test-id": `main-sidebar-${item.id}`,
                        item,
                        compact: unref(isCollapsed),
                        onClick: () => handleSelect(item.id)
                      }, null, 8, ["data-test-id", "item", "compact", "onClick"])]),
                      _: 2
                    }, 1024)) : (openBlock(), createBlock(unref(N8nMenuItem_default), {
                      key: 2,
                      "data-test-id": `main-sidebar-${item.id}`,
                      item,
                      compact: unref(isCollapsed),
                      onClick: () => handleSelect(item.id)
                    }, null, 8, ["data-test-id", "item", "compact", "onClick"]))], 64);
                  }), 128))], 2)], 2)], 2)]),
                  _: 1
                }), createVNode(MainSidebarSourceControl_default, {
                  "is-collapsed": unref(isCollapsed)
                }, null, 8, ["is-collapsed"]), createVNode(TemplateTooltip_default)]),
                _: 1
              }, 8, ["class", "width", "style", "onResizestart", "onResize", "onResizeend"]);
            };
          }
        }); //#endregion
        //#region src/app/components/MainSidebar.vue?vue&type=style&index=0&lang.module.scss
        sideMenu = "_sideMenu_1g1dy_123";
        header = "_header_1g1dy_131";
        sideMenuCollapsed = "_sideMenuCollapsed_1g1dy_145";
        logo = "_logo_1g1dy_154";
        scrollArea = "_scrollArea_1g1dy_158";
        bottomMenu = "_bottomMenu_1g1dy_164";
        bottomMenuItems = "_bottomMenuItems_1g1dy_174";
        popover = "_popover_1g1dy_178";
        divider = "_divider_1g1dy_185";
        popoverTitle = "_popoverTitle_1g1dy_194";
        readOnlyEnvironmentIcon = "_readOnlyEnvironmentIcon_1g1dy_206";
        MainSidebar_vue_vue_type_style_index_0_lang_module_default = {
          sideMenu,
          header,
          sideMenuCollapsed,
          logo,
          scrollArea,
          bottomMenu,
          bottomMenuItems,
          popover,
          divider,
          popoverTitle,
          readOnlyEnvironmentIcon
        }; //#endregion
        //#region src/app/components/MainSidebar.vue
        cssModules = {
          "$style": MainSidebar_vue_vue_type_style_index_0_lang_module_default
        };
        _export("default", MainSidebar_default = /* @__PURE__ */__plugin_vue_export_helper_default(MainSidebar_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]])); //#endregion
      }
    };
  });
})();