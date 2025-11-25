;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-2Qb71DGn.js", "./src-legacy-BL8uywAx.js", "./en-legacy-s6H-lEA2.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-ZZ87M1Mo.js", "./icon-legacy-CRT-hvlv.js", "./empty-legacy-CsIOGMHW.js", "./useTelemetry-legacy-Ck7lGOrk.js", "./useToast-legacy-tN8taI-S.js", "./sanitize-html-legacy-Cack6L-S.js", "./path-browserify-legacy-BQKq4wLb.js", "./constants-legacy-D0ziSY9e.js", "./merge-legacy-BVgKBTAX.js", "./useRootStore-legacy-D1vvqLPX.js", "./dateformat-legacy-BaeIHy_2.js", "./useDebounce-legacy-B8z7M2-W.js", "./useExternalHooks-legacy-DgS1u46v.js", "./useStyles-legacy-DnD2qvTK.js", "./cloudPlan.store-legacy-Uv9UJvN5.js", "./templates.store-legacy-BBTwiez6.js", "./nodeCreator.store-legacy-BJENueFH.js", "./nodeIcon-legacy-Y3uKJRlj.js", "./versions.store-legacy-DvrrUt8o.js", "./usePageRedirectionHelper-legacy-BOS_Zm4X.js", "./useBugReporting-legacy-DpO5j7R-.js", "./sortByProperty-legacy-DJFvCMwr.js", "./constants-legacy-BrIb7Ao9.js", "./sourceControl.eventBus-legacy-OhO-8f6x.js", "./useKeybindings-legacy-Byo5OXLV.js", "./personalizedTemplatesV3.store-legacy-CesC4w5X.js", "./MainSidebarUserArea-legacy-CLlLy3gk.js"], function (_export, _context) {
    "use strict";

    var computed, createElementBlock, createCommentVNode, nextTick, unref, ref, onBeforeUnmount, createVNode, defineComponent, onUnmounted, toDisplayString, createBlock, mergeProps, onMounted, Fragment, normalizeClass, watch, Teleport, withCtx, resolveDynamicComponent, openBlock, renderList, createTextVNode, useTemplateRef, onBeforeMount, createBaseVNode, normalizeStyle, I18nT, onClickOutside, useI18n, N8nNavigationDropdown_default, N8nIcon_default, N8nIconButton_default, N8nHeading_default, N8nText_default, N8nLogo_default, N8nButton_default, N8nLink_default, N8nScrollArea_default, N8nMenuItem_default, N8nPopoverReka_default, N8nTooltip_default, __plugin_vue_export_helper_default, useRouter, useRoute, useSettingsStore, useSourceControlStore, useProjectsStore, hasPermission, getBecomeCreatorCta, useUIStore, STORES, useUsersStore, useWorkflowsStore, useTelemetry, useStorage, EXPERIMENT_TEMPLATES_DATA_QUALITY_KEY, EXPERIMENT_TEMPLATE_RECO_V2_KEY, VIEWS, EXPERIMENT_TEMPLATE_RECO_V3_KEY, RELEASE_NOTES_URL, getResourcePermissions, DateTime, VERSIONS_MODAL_KEY, ABOUT_MODAL_KEY, WHATS_NEW_MODAL_KEY, defineStore, useRootStore, useDebounce, useExternalHooks, useCloudPlanStore, useTemplatesDataQualityStore, trackTemplatesClick, TemplateClickSource, useTemplatesStore, useCalloutHelpers, useVersionsStore, usePageRedirectionHelper, EXTERNAL_LINKS, useGlobalEntityCreation, useBugReporting, CHAT_VIEW, sourceControlEventBus, useKeybindings, usePersonalizedTemplatesV2Store, usePersonalizedTemplatesV3Store, MainSidebarUserArea_default, __vite_style__, isCustomMenuItem, LOCAL_STORAGE_KEY, RESHOW_DISMISSED_AFTER_DAYS, POLL_INTERVAL_IN_MS, useBecomeTemplateCreatorStore, BecomeTemplateCreatorCta_vue_vue_type_script_setup_true_lang_default, container$1, textAndCloseButton, text$1, closeButton, becomeCreatorButton, BecomeTemplateCreatorCta_vue_vue_type_style_index_0_lang_module_default, cssModules$5, BecomeTemplateCreatorCta_default, VersionUpdateCTA_vue_vue_type_script_setup_true_lang_default, container, button, VersionUpdateCTA_vue_vue_type_style_index_0_lang_module_default, cssModules$4, VersionUpdateCTA_default, TemplateTooltip_vue_vue_type_script_setup_true_lang_default, triggerContainer, tooltipTrigger, tooltipContent, text, dismissButton, TemplateTooltip_vue_vue_type_style_index_0_lang_module_default, cssModules$3, TemplateTooltip_default, _hoisted_1, ProjectNavigation_vue_vue_type_script_setup_true_lang_default, projects, plusBtn, projectItems, upgradeLink, projectsLabel, collapsed$1, addFirstProjectBtn, ProjectNavigation_vue_vue_type_style_index_0_lang_module_default, cssModules$2, ProjectNavigation_default, MainSidebarSourceControl_vue_vue_type_script_setup_true_lang_default, sync, isConnected, collapsed, branchName, connected, MainSidebarSourceControl_vue_vue_type_style_index_0_lang_module_default, cssModules$1, MainSidebarSourceControl_default, MainSidebar_vue_vue_type_script_setup_true_lang_default, sideMenu, logo, sideMenuCollapsed, scrollArea, sideMenuCollapseButton, bottomMenu, bottomMenuItems, popover, popoverTitle, readOnlyEnvironmentIcon, MainSidebar_vue_vue_type_style_index_0_lang_module_default, cssModules, MainSidebar_default;
    function hasEnoughTimePassedSinceDismissal(dismissedAt) {
      return DateTime.fromISO(dismissedAt).plus({
        days: RESHOW_DISMISSED_AFTER_DAYS
      }) <= DateTime.now();
    }

    //#endregion
    //#region src/app/components/BecomeTemplateCreatorCta/BecomeTemplateCreatorCta.vue?vue&type=script&setup=true&lang.ts
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        nextTick = _vueRuntimeEsmBundlerLegacy003Js.G;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
        onBeforeUnmount = _vueRuntimeEsmBundlerLegacy003Js.J;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        onUnmounted = _vueRuntimeEsmBundlerLegacy003Js.Q;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Sn;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        mergeProps = _vueRuntimeEsmBundlerLegacy003Js.W;
        onMounted = _vueRuntimeEsmBundlerLegacy003Js.Z;
        Fragment = _vueRuntimeEsmBundlerLegacy003Js._;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js._n;
        watch = _vueRuntimeEsmBundlerLegacy003Js._t;
        Teleport = _vueRuntimeEsmBundlerLegacy003Js.b;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        resolveDynamicComponent = _vueRuntimeEsmBundlerLegacy003Js.ct;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        renderList = _vueRuntimeEsmBundlerLegacy003Js.it;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        useTemplateRef = _vueRuntimeEsmBundlerLegacy003Js.mt;
        onBeforeMount = _vueRuntimeEsmBundlerLegacy003Js.q;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
        normalizeStyle = _vueRuntimeEsmBundlerLegacy003Js.yn;
      }, function (_MapCacheLegacy005Js) {
        I18nT = _MapCacheLegacy005Js._t;
        onClickOutside = _MapCacheLegacy005Js.g;
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {
        N8nNavigationDropdown_default = _srcLegacy007Js.A;
        N8nIcon_default = _srcLegacy007Js.Bn;
        N8nIconButton_default = _srcLegacy007Js.Et;
        N8nHeading_default = _srcLegacy007Js.Fn;
        N8nText_default = _srcLegacy007Js.Ln;
        N8nLogo_default = _srcLegacy007Js.N;
        N8nButton_default = _srcLegacy007Js.Rn;
        N8nLink_default = _srcLegacy007Js.ht;
        N8nScrollArea_default = _srcLegacy007Js.i;
        N8nMenuItem_default = _srcLegacy007Js.j;
        N8nPopoverReka_default = _srcLegacy007Js.w;
        N8nTooltip_default = _srcLegacy007Js.yt;
      }, function (_enLegacy00bJs) {}, function (_preloadHelperLegacy00dJs) {}, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {
        useRouter = _truncateLegacy00hJs.b;
        useRoute = _truncateLegacy00hJs.y;
      }, function (_iconLegacy00lJs) {}, function (_emptyLegacy00tJs) {}, function (_useTelemetryLegacy00FJs) {
        useSettingsStore = _useTelemetryLegacy00FJs.Bo;
        useSourceControlStore = _useTelemetryLegacy00FJs.Dn;
        useProjectsStore = _useTelemetryLegacy00FJs.En;
        hasPermission = _useTelemetryLegacy00FJs.Gn;
        getBecomeCreatorCta = _useTelemetryLegacy00FJs.Is;
        useUIStore = _useTelemetryLegacy00FJs.Ni;
        STORES = _useTelemetryLegacy00FJs.ac;
        useUsersStore = _useTelemetryLegacy00FJs.er;
        useWorkflowsStore = _useTelemetryLegacy00FJs.o;
        useTelemetry = _useTelemetryLegacy00FJs.t;
        useStorage = _useTelemetryLegacy00FJs.zo;
      }, function (_useToastLegacy00HJs) {}, function (_sanitizeHtmlLegacy00JJs) {}, function (_pathBrowserifyLegacy00LJs) {}, function (_constantsLegacy00NJs) {
        EXPERIMENT_TEMPLATES_DATA_QUALITY_KEY = _constantsLegacy00NJs.Io;
        EXPERIMENT_TEMPLATE_RECO_V2_KEY = _constantsLegacy00NJs.Lo;
        VIEWS = _constantsLegacy00NJs.Oo;
        EXPERIMENT_TEMPLATE_RECO_V3_KEY = _constantsLegacy00NJs.Ro;
        RELEASE_NOTES_URL = _constantsLegacy00NJs.S;
        getResourcePermissions = _constantsLegacy00NJs._r;
        DateTime = _constantsLegacy00NJs.da;
        VERSIONS_MODAL_KEY = _constantsLegacy00NJs.es;
        ABOUT_MODAL_KEY = _constantsLegacy00NJs.ko;
        WHATS_NEW_MODAL_KEY = _constantsLegacy00NJs.ts;
      }, function (_mergeLegacy00PJs) {}, function (_useRootStoreLegacy00TJs) {
        defineStore = _useRootStoreLegacy00TJs.D;
        useRootStore = _useRootStoreLegacy00TJs.t;
      }, function (_dateformatLegacy00VJs) {}, function (_useDebounceLegacy00XJs) {
        useDebounce = _useDebounceLegacy00XJs.t;
      }, function (_useExternalHooksLegacy00ZJs) {
        useExternalHooks = _useExternalHooksLegacy00ZJs.t;
      }, function (_useStylesLegacy00$Js) {}, function (_cloudPlanStoreLegacy017Js) {
        useCloudPlanStore = _cloudPlanStoreLegacy017Js.t;
      }, function (_templatesStoreLegacy019Js) {
        useTemplatesDataQualityStore = _templatesStoreLegacy019Js.a;
        trackTemplatesClick = _templatesStoreLegacy019Js.i;
        TemplateClickSource = _templatesStoreLegacy019Js.n;
        useTemplatesStore = _templatesStoreLegacy019Js.t;
      }, function (_nodeCreatorStoreLegacy01nJs) {
        useCalloutHelpers = _nodeCreatorStoreLegacy01nJs._;
      }, function (_nodeIconLegacy01pJs) {}, function (_versionsStoreLegacy01FJs) {
        useVersionsStore = _versionsStoreLegacy01FJs.t;
      }, function (_usePageRedirectionHelperLegacy01HJs) {
        usePageRedirectionHelper = _usePageRedirectionHelperLegacy01HJs.t;
      }, function (_useBugReportingLegacy01PJs) {
        EXTERNAL_LINKS = _useBugReportingLegacy01PJs.n;
        useGlobalEntityCreation = _useBugReportingLegacy01PJs.r;
        useBugReporting = _useBugReportingLegacy01PJs.t;
      }, function (_sortByPropertyLegacy02XJs) {}, function (_constantsLegacy03fJs) {
        CHAT_VIEW = _constantsLegacy03fJs.a;
      }, function (_sourceControlEventBusLegacy03vJs) {
        sourceControlEventBus = _sourceControlEventBusLegacy03vJs.t;
      }, function (_useKeybindingsLegacy03zJs) {
        useKeybindings = _useKeybindingsLegacy03zJs.t;
      }, function (_personalizedTemplatesV3StoreLegacy03BJs) {
        usePersonalizedTemplatesV2Store = _personalizedTemplatesV3StoreLegacy03BJs.n;
        usePersonalizedTemplatesV3Store = _personalizedTemplatesV3StoreLegacy03BJs.t;
      }, function (_MainSidebarUserAreaLegacy045Js) {
        MainSidebarUserArea_default = _MainSidebarUserAreaLegacy045Js.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._container_1ab4u_123 {\n  display: flex;\n  flex-direction: column;\n  background-color: var(--color--background--light-2);\n  border: var(--border);\n  border-right: 0;\n}\n._textAndCloseButton_1ab4u_131 {\n  display: flex;\n  margin-top: var(--spacing--xs);\n  margin-left: var(--spacing--sm);\n  margin-right: var(--spacing--2xs);\n}\n._text_1ab4u_131 {\n  flex: 1;\n  font-size: var(--font-size--3xs);\n  line-height: var(--line-height--sm);\n}\n._closeButton_1ab4u_144 {\n  flex: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: var(--spacing--2xs);\n  border: none;\n  color: var(--color--text--tint-1);\n  background-color: transparent;\n  cursor: pointer;\n}\n._becomeCreatorButton_1ab4u_156 {\n  margin: var(--spacing--sm);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._container_5mg6c_123 {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  gap: var(--spacing--2xs);\n  padding: var(--spacing--2xs) var(--spacing--xs);\n  border-radius: var(--radius);\n  border: var(--border);\n  background: var(--color--background--light-1);\n  margin-top: var(--spacing--xs);\n}\n._button_5mg6c_135 {\n  width: 100%;\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._triggerContainer_5kwt6_123 {\n  z-index: 9999;\n  pointer-events: auto;\n}\n._tooltipTrigger_5kwt6_128 {\n  width: 1px;\n  height: 1px;\n  opacity: 0;\n}\n._tooltipContent_5kwt6_134 {\n  display: flex;\n  align-items: flex-start;\n  gap: var(--spacing--2xs);\n}\n._text_5kwt6_140 {\n  flex: 1;\n  font-size: var(--font-size--2xs);\n  line-height: var(--line-height--md);\n}\n._dismissButton_5kwt6_146 {\n  background: none;\n  border: none;\n  padding: 0;\n  cursor: pointer;\n  color: var(--color--text--tint-1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 16px;\n  height: 16px;\n  flex-shrink: 0;\n}\n._dismissButton_5kwt6_146:hover {\n  color: var(--color--text);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._projects_81iv3_123 {\n  width: 100%;\n  align-items: start;\n  gap: var(--spacing--3xs);\n}\n._projects_81iv3_123:hover ._plusBtn_81iv3_128 {\n  display: block;\n}\n._projectItems_81iv3_132 {\n  padding: var(--spacing--xs);\n}\n._upgradeLink_81iv3_136 {\n  color: var(--color--primary);\n  cursor: pointer;\n}\n._projectsLabel_81iv3_141 {\n  display: flex;\n  justify-content: space-between;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  box-sizing: border-box;\n  padding: 0 var(--spacing--sm);\n  margin-top: var(--spacing--md);\n}\n._projectsLabel_81iv3_141._collapsed_81iv3_150 {\n  padding: 0;\n  margin-left: 0;\n  justify-content: center;\n}\n._plusBtn_81iv3_128 {\n  margin: 0;\n  padding: 0;\n  color: var(--color--text--tint-1);\n  display: none;\n}\n._addFirstProjectBtn_81iv3_163 {\n  font-size: var(--font-size--xs);\n  margin: 0 var(--spacing--sm);\n  width: calc(100% - var(--spacing--sm) * 2);\n}\n._addFirstProjectBtn_81iv3_163._collapsed_81iv3_150 > span:last-child {\n  display: none;\n  margin: 0 var(--spacing--sm) var(--spacing--md);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n.home[data-v-7bf5593b] {\n  padding: 0 var(--spacing--xs);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._sync_1xb4i_123 {\n  padding: var(--spacing--sm) var(--spacing--sm) var(--spacing--sm) var(--spacing--lg);\n  background: var(--color--background--light-2);\n  border-top: var(--border-width) var(--border-style) var(--color--foreground);\n  font-size: var(--font-size--2xs);\n}\n._sync_1xb4i_123._isConnected_1xb4i_129 {\n  padding-left: var(--spacing--md);\n  border-left: var(--spacing--3xs) var(--border-style) var(--color--foreground);\n}\n._sync_1xb4i_123._isConnected_1xb4i_129._collapsed_1xb4i_133 {\n  padding-left: var(--spacing--xs);\n}\n._sync_1xb4i_123:empty {\n  display: none;\n}\n._sync_1xb4i_123 button {\n  font-size: var(--font-size--3xs);\n}\n._branchName_1xb4i_143 {\n  white-space: normal;\n  line-break: anywhere;\n}\n._collapsed_1xb4i_133 {\n  text-align: center;\n  padding-left: var(--spacing--sm);\n  padding-right: var(--spacing--sm);\n}\n._collapsed_1xb4i_133 ._connected_1xb4i_153 > span {\n  display: none;\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._sideMenu_1icmk_123 {\n  position: relative;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  border-right: var(--border-width) var(--border-style) var(--color--foreground);\n  width: 200px;\n  background-color: var(--menu--color--background, var(--color--background--light-1));\n}\n._sideMenu_1icmk_123 ._logo_1icmk_132 {\n  display: flex;\n  align-items: center;\n  padding: var(--spacing--xs);\n  justify-content: space-between;\n}\n._sideMenu_1icmk_123 ._logo_1icmk_132 img {\n  position: relative;\n  left: 1px;\n  height: 20px;\n}\n._sideMenu_1icmk_123._sideMenuCollapsed_1icmk_143 {\n  width: 65px;\n  min-width: auto;\n}\n._sideMenu_1icmk_123._sideMenuCollapsed_1icmk_143 ._logo_1icmk_132 {\n  flex-direction: column;\n  gap: 12px;\n}\n._scrollArea_1icmk_152 {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n._sideMenuCollapseButton_1icmk_158 {\n  position: absolute;\n  right: -10px;\n  top: 50%;\n  z-index: 999;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: var(--color--text);\n  background-color: var(--color--foreground--tint-2);\n  width: 20px;\n  height: 20px;\n  border: var(--border-width) var(--border-style) var(--color--foreground);\n  border-radius: 50%;\n}\n._sideMenuCollapseButton_1icmk_158:hover {\n  color: var(--color--primary--shade-1);\n}\n._bottomMenu_1icmk_177 {\n  display: flex;\n  flex-direction: column;\n  margin-top: auto;\n}\n._bottomMenuItems_1icmk_183 {\n  padding: var(--spacing--xs);\n}\n._popover_1icmk_187 {\n  padding: var(--spacing--xs);\n  min-width: 200px;\n}\n._popoverTitle_1icmk_192 {\n  display: block;\n  margin-bottom: var(--spacing--3xs);\n}\n@media screen and (max-height: 470px) {\n#help {\n    display: none;\n}\n}\n._readOnlyEnvironmentIcon_1icmk_202 {\n  display: inline-block;\n  color: white;\n  background-color: var(--color--warning);\n  align-self: center;\n  padding: 2px;\n  border-radius: var(--radius--sm);\n  margin: 7px 12px 0 5px;\n}/*$vite$:1*/";
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
              }, [createBaseVNode("p", {
                class: normalizeClass(_ctx.$style.text)
              }, toDisplayString(unref(i18n).baseText("becomeCreator.text")), 3), createBaseVNode("button", {
                class: normalizeClass(_ctx.$style.closeButton),
                "data-test-id": "close-become-template-creator-cta",
                onClick: _cache[0] || (_cache[0] = $event => unref(store).dismissCta())
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
        }); //#endregion
        //#region src/app/components/BecomeTemplateCreatorCta/BecomeTemplateCreatorCta.vue?vue&type=style&index=0&lang.module.scss
        container$1 = "_container_1ab4u_123";
        textAndCloseButton = "_textAndCloseButton_1ab4u_131";
        text$1 = "_text_1ab4u_131";
        closeButton = "_closeButton_1ab4u_144";
        becomeCreatorButton = "_becomeCreatorButton_1ab4u_156";
        BecomeTemplateCreatorCta_vue_vue_type_style_index_0_lang_module_default = {
          container: container$1,
          textAndCloseButton,
          text: text$1,
          closeButton,
          becomeCreatorButton
        }; //#endregion
        //#region src/app/components/BecomeTemplateCreatorCta/BecomeTemplateCreatorCta.vue
        cssModules$5 = {
          "$style": BecomeTemplateCreatorCta_vue_vue_type_style_index_0_lang_module_default
        };
        BecomeTemplateCreatorCta_default = /* @__PURE__ */__plugin_vue_export_helper_default(BecomeTemplateCreatorCta_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$5]]); //#endregion
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
              }, [createVNode(unref(N8nLink_default), {
                size: "small",
                theme: "text",
                "data-test-id": "version-update-next-versions-link",
                onClick: openUpdatesPanel
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("whatsNew.versionsBehind", {
                  interpolate: {
                    count: unref(versionsStore).nextVersions.length > 99 ? "99+" : unref(versionsStore).nextVersions.length
                  }
                })), 1)]),
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
                }, null, 8, ["class", "label", "disabled"])]),
                _: 1
              }, 8, ["disabled", "content"])], 2);
            };
          }
        }); //#endregion
        //#region src/app/components/VersionUpdateCTA.vue?vue&type=style&index=0&lang.module.scss
        container = "_container_5mg6c_123";
        button = "_button_5mg6c_135";
        VersionUpdateCTA_vue_vue_type_style_index_0_lang_module_default = {
          container,
          button
        }; //#endregion
        //#region src/app/components/VersionUpdateCTA.vue
        cssModules$4 = {
          "$style": VersionUpdateCTA_vue_vue_type_style_index_0_lang_module_default
        };
        VersionUpdateCTA_default = /* @__PURE__ */__plugin_vue_export_helper_default(VersionUpdateCTA_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$4]]); //#endregion
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
        cssModules$3 = {
          "$style": TemplateTooltip_vue_vue_type_style_index_0_lang_module_default
        };
        TemplateTooltip_default = /* @__PURE__ */__plugin_vue_export_helper_default(TemplateTooltip_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$3]]); //#endregion
        //#region src/features/collaboration/projects/components/ProjectNavigation.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1 = {
          class: "home"
        };
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
            const isCreatingProject = computed(() => globalEntityCreation.isCreatingProject.value);
            const displayProjects = computed(() => globalEntityCreation.displayProjects.value);
            const isFoldersFeatureEnabled = computed(() => settingsStore.isFoldersFeatureEnabled);
            const hasMultipleVerifiedUsers = computed(() => usersStore.allUsers.filter(user => !user.isPendingUser).length > 1);
            const home = computed(() => ({
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
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(_ctx.$style.projects)
              }, [createBaseVNode("div", _hoisted_1, [createVNode(unref(N8nMenuItem_default), {
                item: home.value,
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
              }, null, 8, ["item", "compact", "active"])) : createCommentVNode("", true)]), !props.collapsed && unref(projectsStore).isTeamProjectFeatureEnabled ? (openBlock(), createBlock(unref(N8nHeading_default), {
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
                    onClick: _cache[0] || (_cache[0] = $event => unref(globalEntityCreation).createProject("add_icon"))
                  }, null, 8, ["disabled", "class"])]),
                  _: 1
                }, 8, ["disabled", "content"])) : createCommentVNode("", true)]),
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
              }), 128))], 2)) : createCommentVNode("", true), showAddFirstProject.value ? (openBlock(), createBlock(unref(N8nTooltip_default), {
                key: 2,
                placement: "right",
                disabled: unref(projectsStore).hasPermissionToCreateProjects,
                content: unref(locale).baseText("projects.create.permissionDenied")
              }, {
                default: withCtx(() => [createVNode(unref(N8nButton_default), {
                  class: normalizeClass([_ctx.$style.addFirstProjectBtn, {
                    [_ctx.$style.collapsed]: props.collapsed
                  }]),
                  disabled: isCreatingProject.value || !unref(projectsStore).hasPermissionToCreateProjects,
                  type: "secondary",
                  icon: "plus",
                  "data-test-id": "add-first-project-button",
                  onClick: _cache[1] || (_cache[1] = $event => unref(globalEntityCreation).createProject("add_first_project_button"))
                }, {
                  default: withCtx(() => [createBaseVNode("span", null, toDisplayString(unref(locale).baseText("projects.menu.addFirstProject")), 1)]),
                  _: 1
                }, 8, ["class", "disabled"])]),
                _: 1
              }, 8, ["disabled", "content"])) : createCommentVNode("", true)], 2);
            };
          }
        }); //#endregion
        //#region src/features/collaboration/projects/components/ProjectNavigation.vue?vue&type=style&index=0&lang.module.scss
        projects = "_projects_81iv3_123";
        plusBtn = "_plusBtn_81iv3_128";
        projectItems = "_projectItems_81iv3_132";
        upgradeLink = "_upgradeLink_81iv3_136";
        projectsLabel = "_projectsLabel_81iv3_141";
        collapsed$1 = "_collapsed_81iv3_150";
        addFirstProjectBtn = "_addFirstProjectBtn_81iv3_163";
        ProjectNavigation_vue_vue_type_style_index_0_lang_module_default = {
          projects,
          plusBtn,
          projectItems,
          upgradeLink,
          projectsLabel,
          collapsed: collapsed$1,
          addFirstProjectBtn
        }; //#endregion
        //#region src/features/collaboration/projects/components/ProjectNavigation.vue
        cssModules$2 = {
          "$style": ProjectNavigation_vue_vue_type_style_index_0_lang_module_default
        };
        ProjectNavigation_default = /* @__PURE__ */__plugin_vue_export_helper_default(ProjectNavigation_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$2], ["__scopeId", "data-v-7bf5593b"]]); //#endregion
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
                style: normalizeStyle({
                  borderLeftColor: unref(sourceControlStore).preferences.branchColor
                }),
                "data-test-id": "main-sidebar-source-control"
              }, [unref(sourceControlStore).preferences.connected && unref(sourceControlStore).preferences.branchName ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(_ctx.$style.connected),
                "data-test-id": "main-sidebar-source-control-connected"
              }, [createBaseVNode("span", {
                class: normalizeClass(_ctx.$style.branchName)
              }, [createVNode(unref(N8nIcon_default), {
                icon: "git-branch"
              }), createTextVNode(" " + toDisplayString(currentBranch.value), 1)], 2), createBaseVNode("div", {
                class: normalizeClass({
                  "pt-xs": !_ctx.isCollapsed
                })
              }, [createVNode(unref(N8nTooltip_default), {
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
                }, null, 8, ["class", "disabled", "square", "label"])]),
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
                  size: "mini",
                  onClick: pushWorkfolder
                }, null, 8, ["square", "label", "disabled"])]),
                _: 1
              }, 8, ["disabled", "show-after", "placement"])], 2)], 2)) : createCommentVNode("", true)], 6)) : createCommentVNode("", true);
            };
          }
        }); //#endregion
        //#region src/app/components/MainSidebarSourceControl.vue?vue&type=style&index=0&lang.module.scss
        sync = "_sync_1xb4i_123";
        isConnected = "_isConnected_1xb4i_129";
        collapsed = "_collapsed_1xb4i_133";
        branchName = "_branchName_1xb4i_143";
        connected = "_connected_1xb4i_153";
        MainSidebarSourceControl_vue_vue_type_style_index_0_lang_module_default = {
          sync,
          isConnected,
          collapsed,
          branchName,
          connected
        }; //#endregion
        //#region src/app/components/MainSidebarSourceControl.vue
        cssModules$1 = {
          "$style": MainSidebarSourceControl_vue_vue_type_style_index_0_lang_module_default
        };
        MainSidebarSourceControl_default = /* @__PURE__ */__plugin_vue_export_helper_default(MainSidebarSourceControl_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$1]]); //#endregion
        //#region src/app/components/MainSidebar.vue?vue&type=script&setup=true&lang.ts
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
            const {
              callDebounced
            } = useDebounce();
            const externalHooks = useExternalHooks();
            const i18n = useI18n();
            const telemetry = useTelemetry();
            const pageRedirectionHelper = usePageRedirectionHelper();
            const {
              getReportingURL
            } = useBugReporting();
            const calloutHelpers = useCalloutHelpers();
            useKeybindings({
              ctrl_alt_o: () => handleSelect("about")
            });
            const user = useTemplateRef("user");
            const basePath = ref("");
            const fullyExpanded = ref(false);
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
              id: "whats-new",
              icon: "bell",
              notification: showWhatsNewNotification.value,
              label: i18n.baseText("mainSidebar.whatsNew"),
              position: "bottom",
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
                available: versionsStore.hasVersionUpdates,
                props: {
                  disabled: !usersStore.canUserUpdateVersion,
                  tooltipText: !usersStore.canUserUpdateVersion ? i18n.baseText("whatsNew.updateNudgeTooltip") : void 0
                }
              }]
            }]);
            const visibleMenuItems = computed(() => mainMenuItems.value.filter(item => item.available !== false));
            const createBtn = ref();
            const isCollapsed = computed(() => uiStore.sidebarMenuCollapsed);
            const showUserArea = computed(() => hasPermission(["authenticated"]));
            const userIsTrialing = computed(() => cloudPlanStore.userIsTrialing);
            onMounted(async () => {
              window.addEventListener("resize", onResize);
              basePath.value = rootStore.baseUrl;
              if (user.value?.$el) externalHooks.run("mainSidebar.mounted", {
                userRef: user.value.$el
              });
              becomeTemplateCreatorStore.startMonitoringCta();
              await nextTick(onResizeEnd);
            });
            onBeforeUnmount(() => {
              becomeTemplateCreatorStore.stopMonitoringCta();
              window.removeEventListener("resize", onResize);
            });
            const trackHelpItemClick = itemType => {
              telemetry.track("User clicked help resource", {
                type: itemType,
                workflow_id: workflowsStore.workflowId
              });
            };
            const toggleCollapse = () => {
              uiStore.toggleSidebarMenuCollapse();
              if (!isCollapsed.value) setTimeout(() => {
                fullyExpanded.value = !isCollapsed.value;
              }, 300);else fullyExpanded.value = !isCollapsed.value;
            };
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
            function onResize() {
              callDebounced(onResizeEnd, {
                debounceTime: 250
              });
            }
            async function onResizeEnd() {
              if (window.innerWidth < 900) uiStore.sidebarMenuCollapsed = true;else uiStore.sidebarMenuCollapsed = uiStore.sidebarMenuCollapsedPreference;
              nextTick(() => {
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
              }, [createBaseVNode("div", {
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
              }))], 2), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.logo)
              }, [createVNode(unref(N8nLogo_default), {
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
                  icon: "plus",
                  type: "secondary",
                  outline: ""
                })]),
                _: 2
              }, 1032, ["menu", "onSelect"])], 2), createVNode(unref(N8nScrollArea_default), {
                "as-child": ""
              }, {
                default: withCtx(() => [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.scrollArea)
                }, [createVNode(ProjectNavigation_default, {
                  collapsed: isCollapsed.value,
                  "plan-name": unref(cloudPlanStore).currentPlanData?.displayName
                }, null, 8, ["collapsed", "plan-name"]), createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.bottomMenu)
                }, [fullyExpanded.value && !userIsTrialing.value ? (openBlock(), createBlock(BecomeTemplateCreatorCta_default, {
                  key: 0
                })) : createCommentVNode("", true), createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.bottomMenuItems)
                }, [(openBlock(true), createElementBlock(Fragment, null, renderList(visibleMenuItems.value, item => {
                  return openBlock(), createElementBlock(Fragment, {
                    key: item.id
                  }, [item.children ? (openBlock(), createBlock(unref(N8nPopoverReka_default), {
                    key: item.id,
                    side: "right",
                    align: "end",
                    "side-offset": 16
                  }, {
                    content: withCtx(() => [createBaseVNode("div", {
                      class: normalizeClass(_ctx.$style.popover)
                    }, [createVNode(unref(N8nText_default), {
                      class: normalizeClass(_ctx.$style.popoverTitle),
                      bold: "",
                      color: "foreground-xdark"
                    }, {
                      default: withCtx(() => [createTextVNode(toDisplayString(item.label), 1)]),
                      _: 2
                    }, 1032, ["class"]), (openBlock(true), createElementBlock(Fragment, null, renderList(item.children, child => {
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
                    }), 128))], 2)]),
                    trigger: withCtx(() => [createVNode(unref(N8nMenuItem_default), {
                      item,
                      compact: isCollapsed.value,
                      onClick: () => handleSelect(item.id)
                    }, null, 8, ["item", "compact", "onClick"])]),
                    _: 2
                  }, 1024)) : (openBlock(), createBlock(unref(N8nMenuItem_default), {
                    key: 1,
                    item,
                    compact: isCollapsed.value,
                    onClick: () => handleSelect(item.id)
                  }, null, 8, ["item", "compact", "onClick"]))], 64);
                }), 128))], 2)], 2)], 2)]),
                _: 1
              }), createVNode(MainSidebarSourceControl_default, {
                "is-collapsed": isCollapsed.value
              }, null, 8, ["is-collapsed"]), showUserArea.value ? (openBlock(), createBlock(MainSidebarUserArea_default, {
                key: 0,
                ref_key: "user",
                ref: user,
                "fully-expanded": fullyExpanded.value,
                "is-collapsed": isCollapsed.value
              }, null, 8, ["fully-expanded", "is-collapsed"])) : createCommentVNode("", true), createVNode(TemplateTooltip_default)], 2);
            };
          }
        }); //#endregion
        //#region src/app/components/MainSidebar.vue?vue&type=style&index=0&lang.module.scss
        sideMenu = "_sideMenu_1icmk_123";
        logo = "_logo_1icmk_132";
        sideMenuCollapsed = "_sideMenuCollapsed_1icmk_143";
        scrollArea = "_scrollArea_1icmk_152";
        sideMenuCollapseButton = "_sideMenuCollapseButton_1icmk_158";
        bottomMenu = "_bottomMenu_1icmk_177";
        bottomMenuItems = "_bottomMenuItems_1icmk_183";
        popover = "_popover_1icmk_187";
        popoverTitle = "_popoverTitle_1icmk_192";
        readOnlyEnvironmentIcon = "_readOnlyEnvironmentIcon_1icmk_202";
        MainSidebar_vue_vue_type_style_index_0_lang_module_default = {
          sideMenu,
          logo,
          sideMenuCollapsed,
          scrollArea,
          sideMenuCollapseButton,
          bottomMenu,
          bottomMenuItems,
          popover,
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