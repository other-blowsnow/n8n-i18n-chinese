;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-CVC6fg6H.js", "./src-legacy-D3-Bo0sy.js", "./en-legacy-Bgme8Vbm.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-Bk9bFklR.js", "./icon-legacy-1U_nlJHf.js", "./date-picker-legacy-Cor1wJX7.js", "./overlay-legacy-CnSmhTdu.js", "./empty-legacy-DnVUoqbC.js", "./useMessage-legacy-CgoaFFwd.js", "./useTelemetry-legacy-BdQlQKwu.js", "./useToast-legacy-D8KBGcJW.js", "./sanitize-html-legacy-DfOUEbdf.js", "./path-browserify-legacy-DJbEMZcd.js", "./constants-legacy-B0GcWb62.js", "./merge-legacy-C_ujDigB.js", "./dateformat-legacy-Xt1X-tys.js", "./useDebounce-legacy-IwiEyerO.js", "./useExternalHooks-legacy-CI7QLTD3.js", "./npsSurvey.store-legacy-C1YRCoTJ.js", "./cloudPlan.store-legacy-LWdjrdTo.js", "./templates.store-legacy-BHiM3N7j.js", "./focusPanel.store-legacy-uio45UIZ.js", "./useWorkflowSaving-legacy-CRxiFnlk.js", "./executions.store-legacy-BxTud2_e.js", "./usePinnedData-legacy-rNpwQUsO.js", "./nodeCreator.store-legacy-DazC1kYi.js", "./nodeIcon-legacy-7NxDDHQi.js", "./useClipboard-legacy-DdtOZJuB.js", "./useCanvasOperations-legacy-GAH95RK2.js", "./folders.store-legacy-C8VGYd29.js", "./versions.store-legacy-CwMoPJwF.js", "./usePageRedirectionHelper-legacy-D76LkYaE.js", "./dateFormatter-legacy-wx3IBOwQ.js", "./useExecutionHelpers-legacy-DltYlgRM.js", "./TagsDropdown-legacy-B77bF58I.js", "./WorkflowTagsDropdown-legacy-EBdnlj6g.js", "./WorkflowExecutionsInfoAccordion-legacy-DglmeHUR.js", "./AnnotationTagsDropdown.ee-legacy-CfAAqqBA.js", "./ExecutionsTime-legacy-Cxo1iWCI.js", "./useIntersectionObserver-legacy-CQWXa295.js"], function (_export, _context) {
    "use strict";

    var computed, createElementBlock, createCommentVNode, unref, ref, onBeforeUnmount, createVNode, defineComponent, toDisplayString, createBlock, onMounted, Fragment, normalizeClass, watch, withCtx, openBlock, renderList, createTextVNode, resolveComponent, TransitionGroup, createBaseVNode, useI18n, N8nText_default, N8nHeading_default, N8nSpinner_default, ElCheckbox, N8nLoading_default, N8nTags_default, N8nActionDropdown_default, N8nTooltip_default, N8nIcon_default, __plugin_vue_export_helper_default, useRouter, onBeforeRouteLeave, useRoute, useSettingsStore, useProjectsStore, executionRetryMessage, NO_NETWORK_ERROR_CODE, isComponentPublicInstance, useWorkflowsStore, useNodeTypesStore, useTelemetry, getNodeViewTab, useToast, EnterpriseEditionFeature, getResourcePermissions, VIEWS, NEW_WORKFLOW_ID, MAIN_HEADER_TABS, PLACEHOLDER_EMPTY_WORKFLOW_ID, useDebounce, useWorkflowSaving, useExecutionsStore, useCanvasOperations, usePageRedirectionHelper, toTime, toDayMonth, useExecutionHelpers, WorkflowExecutionsInfoAccordion_default, ExecutionsFilter_default, ConcurrentExecutionsHeader_default, ExecutionsTime_default, useIntersectionObserver, __vite_style__, _hoisted_1$1, WorkflowExecutionsCard_vue_vue_type_script_setup_true_lang_default, WorkflowExecutionsCard, active, executionStatus, executionLink, spinner, running, statusLabel, success, waiting, error, unknown, annotation, ratingIcon, up, down, icon, icons, retry, manual, showGap, WorkflowExecutionsCard_vue_vue_type_style_index_0_lang_module_default, cssModules$2, WorkflowExecutionsCard_default, _hoisted_1, _hoisted_2, WorkflowExecutionsSidebar_vue_vue_type_script_setup_true_lang_default, container$1, heading, controls, executionList, infoAccordion, noResultsContainer, WorkflowExecutionsSidebar_vue_vue_type_style_index_0_lang_module_default, cssModules$1, WorkflowExecutionsSidebar_default, WorkflowExecutionsList_vue_vue_type_script_setup_true_lang_default, container, content, WorkflowExecutionsList_vue_vue_type_style_index_0_lang_module_default, cssModules, WorkflowExecutionsList_default, WorkflowExecutionsView_vue_vue_type_script_setup_true_lang_default, WorkflowExecutionsView_default;
    return {
      setters: [function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
        onBeforeUnmount = _vueRuntimeEsmBundlerLegacy003Js.J;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Sn;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        onMounted = _vueRuntimeEsmBundlerLegacy003Js.Z;
        Fragment = _vueRuntimeEsmBundlerLegacy003Js._;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js._n;
        watch = _vueRuntimeEsmBundlerLegacy003Js._t;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        renderList = _vueRuntimeEsmBundlerLegacy003Js.it;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        resolveComponent = _vueRuntimeEsmBundlerLegacy003Js.ot;
        TransitionGroup = _vueRuntimeEsmBundlerLegacy003Js.r;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {
        N8nText_default = _srcLegacy007Js.In;
        N8nHeading_default = _srcLegacy007Js.Pn;
        N8nSpinner_default = _srcLegacy007Js.Rn;
        ElCheckbox = _srcLegacy007Js.Vt;
        N8nLoading_default = _srcLegacy007Js.et;
        N8nTags_default = _srcLegacy007Js.h;
        N8nActionDropdown_default = _srcLegacy007Js.tt;
        N8nTooltip_default = _srcLegacy007Js.vt;
        N8nIcon_default = _srcLegacy007Js.zn;
      }, function (_enLegacy00bJs) {}, function (_preloadHelperLegacy00dJs) {}, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {
        useRouter = _truncateLegacy00hJs.b;
        onBeforeRouteLeave = _truncateLegacy00hJs.v;
        useRoute = _truncateLegacy00hJs.y;
      }, function (_iconLegacy00lJs) {}, function (_datePickerLegacy00nJs) {}, function (_overlayLegacy00pJs) {}, function (_emptyLegacy00tJs) {}, function (_useMessageLegacy00vJs) {}, function (_useTelemetryLegacy00FJs) {
        useSettingsStore = _useTelemetryLegacy00FJs.Bo;
        useProjectsStore = _useTelemetryLegacy00FJs.En;
        executionRetryMessage = _useTelemetryLegacy00FJs.X;
        NO_NETWORK_ERROR_CODE = _useTelemetryLegacy00FJs.cc;
        isComponentPublicInstance = _useTelemetryLegacy00FJs.nr;
        useWorkflowsStore = _useTelemetryLegacy00FJs.o;
        useNodeTypesStore = _useTelemetryLegacy00FJs.rt;
        useTelemetry = _useTelemetryLegacy00FJs.t;
        getNodeViewTab = _useTelemetryLegacy00FJs.x;
      }, function (_useToastLegacy00HJs) {
        useToast = _useToastLegacy00HJs.t;
      }, function (_sanitizeHtmlLegacy00JJs) {}, function (_pathBrowserifyLegacy00LJs) {}, function (_constantsLegacy00NJs) {
        EnterpriseEditionFeature = _constantsLegacy00NJs.Hs;
        getResourcePermissions = _constantsLegacy00NJs._r;
        VIEWS = _constantsLegacy00NJs.mo;
        NEW_WORKFLOW_ID = _constantsLegacy00NJs.o;
        MAIN_HEADER_TABS = _constantsLegacy00NJs.po;
        PLACEHOLDER_EMPTY_WORKFLOW_ID = _constantsLegacy00NJs.s;
      }, function (_mergeLegacy00PJs) {}, function (_dateformatLegacy00TJs) {}, function (_useDebounceLegacy00VJs) {
        useDebounce = _useDebounceLegacy00VJs.t;
      }, function (_useExternalHooksLegacy00XJs) {}, function (_npsSurveyStoreLegacy011Js) {}, function (_cloudPlanStoreLegacy013Js) {}, function (_templatesStoreLegacy015Js) {}, function (_focusPanelStoreLegacy017Js) {}, function (_useWorkflowSavingLegacy019Js) {
        useWorkflowSaving = _useWorkflowSavingLegacy019Js.t;
      }, function (_executionsStoreLegacy01dJs) {
        useExecutionsStore = _executionsStoreLegacy01dJs.t;
      }, function (_usePinnedDataLegacy01hJs) {}, function (_nodeCreatorStoreLegacy01jJs) {}, function (_nodeIconLegacy01lJs) {}, function (_useClipboardLegacy01nJs) {}, function (_useCanvasOperationsLegacy01pJs) {
        useCanvasOperations = _useCanvasOperationsLegacy01pJs.t;
      }, function (_foldersStoreLegacy01tJs) {}, function (_versionsStoreLegacy01BJs) {}, function (_usePageRedirectionHelperLegacy01DJs) {
        usePageRedirectionHelper = _usePageRedirectionHelperLegacy01DJs.t;
      }, function (_dateFormatterLegacy02zJs) {
        toTime = _dateFormatterLegacy02zJs.a;
        toDayMonth = _dateFormatterLegacy02zJs.i;
      }, function (_useExecutionHelpersLegacy02BJs) {
        useExecutionHelpers = _useExecutionHelpersLegacy02BJs.t;
      }, function (_TagsDropdownLegacy02TJs) {}, function (_WorkflowTagsDropdownLegacy02VJs) {}, function (_WorkflowExecutionsInfoAccordionLegacy05HJs) {
        WorkflowExecutionsInfoAccordion_default = _WorkflowExecutionsInfoAccordionLegacy05HJs.t;
      }, function (_AnnotationTagsDropdownEeLegacy05LJs) {}, function (_ExecutionsTimeLegacy05RJs) {
        ExecutionsFilter_default = _ExecutionsTimeLegacy05RJs.n;
        ConcurrentExecutionsHeader_default = _ExecutionsTimeLegacy05RJs.r;
        ExecutionsTime_default = _ExecutionsTimeLegacy05RJs.t;
      }, function (_useIntersectionObserverLegacy05VJs) {
        useIntersectionObserver = _useIntersectionObserverLegacy05VJs.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._WorkflowExecutionsCard_19371_123 {\n  --execution-list-item--color--background: var(--execution-card--color--background);\n  --execution-list-item--color--background--highlight: var(--color--warning--tint-1);\n  display: flex;\n  flex-direction: column;\n  padding-right: var(--spacing--md);\n}\n._WorkflowExecutionsCard_19371_123._active_19371_130 {\n  border-left: var(--spacing--4xs) var(--border-style) transparent !important;\n}\n._WorkflowExecutionsCard_19371_123._active_19371_130 ._executionStatus_19371_133 {\n  color: var(--color--text--shade-1) !important;\n}\n._WorkflowExecutionsCard_19371_123:hover ._executionLink_19371_136, ._WorkflowExecutionsCard_19371_123._active_19371_130 ._executionLink_19371_136 {\n  --execution-list-item--color--background: var(--execution-card--color--background--hover);\n}\n._WorkflowExecutionsCard_19371_123._new_19371_139 ._spinner_19371_139, ._WorkflowExecutionsCard_19371_123._running_19371_139 ._spinner_19371_139 {\n  position: relative;\n  top: 1px;\n}\n._WorkflowExecutionsCard_19371_123._new_19371_139, ._WorkflowExecutionsCard_19371_123._new_19371_139 ._executionLink_19371_136, ._WorkflowExecutionsCard_19371_123._running_19371_139, ._WorkflowExecutionsCard_19371_123._running_19371_139 ._executionLink_19371_136 {\n  border-left: var(--spacing--4xs) var(--border-style) var(--execution-card--border-color--running);\n}\n._WorkflowExecutionsCard_19371_123._new_19371_139 ._statusLabel_19371_146,\n._WorkflowExecutionsCard_19371_123._new_19371_139 ._spinner_19371_139, ._WorkflowExecutionsCard_19371_123._running_19371_139 ._statusLabel_19371_146,\n._WorkflowExecutionsCard_19371_123._running_19371_139 ._spinner_19371_139 {\n  color: var(--color--warning);\n}\n._WorkflowExecutionsCard_19371_123._success_19371_151, ._WorkflowExecutionsCard_19371_123._success_19371_151 ._executionLink_19371_136 {\n  border-left: var(--spacing--4xs) var(--border-style) var(--execution-card--border-color--success);\n}\n._WorkflowExecutionsCard_19371_123._new_19371_139, ._WorkflowExecutionsCard_19371_123._new_19371_139 ._executionLink_19371_136 {\n  border-left: var(--spacing--4xs) var(--border-style) var(--execution-card--border-color--waiting);\n}\n._WorkflowExecutionsCard_19371_123._new_19371_139 ._statusLabel_19371_146 {\n  color: var(--execution-card--color--text--waiting);\n}\n._WorkflowExecutionsCard_19371_123._waiting_19371_160, ._WorkflowExecutionsCard_19371_123._waiting_19371_160 ._executionLink_19371_136 {\n  border-left: var(--spacing--4xs) var(--border-style) var(--execution-card--border-color--waiting);\n}\n._WorkflowExecutionsCard_19371_123._waiting_19371_160 ._statusLabel_19371_146 {\n  color: var(--color--secondary);\n}\n._WorkflowExecutionsCard_19371_123._error_19371_166, ._WorkflowExecutionsCard_19371_123._error_19371_166 ._executionLink_19371_136 {\n  border-left: var(--spacing--4xs) var(--border-style) var(--execution-card--border-color--error);\n}\n._WorkflowExecutionsCard_19371_123._error_19371_166 ._statusLabel_19371_146 {\n  color: var(--color--danger);\n}\n._WorkflowExecutionsCard_19371_123._unknown_19371_172, ._WorkflowExecutionsCard_19371_123._unknown_19371_172 ._executionLink_19371_136 {\n  border-left: var(--spacing--4xs) var(--border-style) var(--execution-card--border-color--unknown);\n}\n._WorkflowExecutionsCard_19371_123 ._annotation_19371_175 {\n  display: flex;\n  flex-direction: row;\n  gap: var(--spacing--3xs);\n  align-items: center;\n  margin: var(--spacing--4xs) 0 0;\n}\n._WorkflowExecutionsCard_19371_123 ._annotation_19371_175 ._ratingIcon_19371_182 ._up_19371_182 {\n  color: var(--color--success);\n}\n._WorkflowExecutionsCard_19371_123 ._annotation_19371_175 ._ratingIcon_19371_182 ._down_19371_185 {\n  color: var(--color--danger);\n}\n._executionLink_19371_136 {\n  background: var(--execution-list-item--color--background);\n  display: flex;\n  width: 100%;\n  align-items: center;\n  justify-content: space-between;\n  color: var(--color--text);\n  font-size: var(--font-size--xs);\n  padding: var(--spacing--xs);\n  padding-right: var(--spacing--sm);\n  position: relative;\n  left: calc(-1 * var(--spacing--4xs));\n}\n._executionLink_19371_136:active ._icon_19371_202,\n._executionLink_19371_136:active ._statusLabel_19371_146 {\n  color: var(--color--text);\n}\n._icons_19371_207 {\n  display: flex;\n  align-items: center;\n}\n._icon_19371_202 {\n  font-size: var(--font-size--sm);\n}\n._icon_19371_202._retry_19371_215 svg {\n  color: var(--color--primary);\n}\n._icon_19371_202._manual_19371_218 {\n  position: relative;\n  top: 1px;\n}\n._icon_19371_202 + ._icon_19371_202 {\n  margin-left: var(--spacing--2xs);\n}\n._showGap_19371_226 {\n  margin-bottom: var(--spacing--2xs);\n}\n._showGap_19371_226 ._executionLink_19371_136 {\n  border-bottom: 1px solid var(--color--foreground--shade-1);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._container_hrgxj_123 {\n  flex: 310px 0 0;\n  background-color: var(--color--background--light-3);\n  border-right: var(--border);\n  padding: var(--spacing--lg) 0 var(--spacing--lg) var(--spacing--lg);\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  position: relative;\n}\n._heading_hrgxj_135 {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  padding-right: var(--spacing--lg);\n}\n._controls_hrgxj_142 {\n  padding: var(--spacing--sm) 0 var(--spacing--xs);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-right: var(--spacing--md);\n}\n._controls_hrgxj_142 button {\n  display: flex;\n  align-items: center;\n}\n._executionList_hrgxj_154 {\n  flex: 1;\n  overflow: auto;\n  margin-bottom: var(--spacing--md);\n  background-color: var(--color--background--light-3) !important;\n}\n._executionList_hrgxj_154::before {\n  position: absolute;\n  display: block;\n  width: 270px;\n  height: 6px;\n  background: linear-gradient(to bottom, rgb(251, 251, 251) 0%, rgba(251, 251, 251, 0) 100%);\n  z-index: 999;\n}\n._executionList_hrgxj_154 > div:first-child {\n  margin-top: 3px;\n}\n._infoAccordion_hrgxj_172 {\n  position: absolute;\n  bottom: 0;\n  margin-left: calc(-1 * var(--spacing--lg));\n  border-top: var(--border);\n  width: 100%;\n}\n._infoAccordion_hrgxj_172 > div {\n  width: 100%;\n  background-color: var(--color--background--light-2);\n  margin-top: 0 !important;\n}\n._noResultsContainer_hrgxj_185 {\n  width: 100%;\n  margin-top: var(--spacing--2xl);\n  text-align: center;\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n.executions-sidebar[data-v-bb8454a7] .el-skeleton__item {\n  height: 60px;\n  border-radius: 0;\n}\n[data-v-bb8454a7] .el-checkbox {\n  display: flex;\n  align-items: center;\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._container_udnba_123 {\n  display: flex;\n  height: 100%;\n  width: 100%;\n}\n._content_udnba_129 {\n  flex: 1;\n}\n@media screen and (max-width: 991px) {\n._container_udnba_123 {\n    flex-direction: column;\n}\n._content_udnba_129 {\n    flex: 1 1 50%;\n}\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/features/execution/executions/components/workflow/WorkflowExecutionsCard.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1$1 = {
          key: 2
        };
        WorkflowExecutionsCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "WorkflowExecutionsCard",
          props: {
            execution: {},
            highlight: {
              type: Boolean
            },
            showGap: {
              type: Boolean
            },
            workflowPermissions: {}
          },
          emits: ["retryExecution", "mounted"],
          setup(__props, {
            emit: __emit
          }) {
            const props = __props;
            const emit = __emit;
            const route = useRoute();
            const locale = useI18n();
            const executionHelpers = useExecutionHelpers();
            const workflowsStore = useWorkflowsStore();
            const settingsStore = useSettingsStore();
            const isAdvancedExecutionFilterEnabled = computed(() => settingsStore.isEnterpriseFeatureEnabled[EnterpriseEditionFeature.AdvancedExecutionFilters]);
            const isAnnotationEnabled = computed(() => isAdvancedExecutionFilterEnabled.value);
            const currentWorkflow = computed(() => route.params.name || workflowsStore.workflowId);
            const retryExecutionActions = computed(() => [{
              id: "current-workflow",
              label: locale.baseText("executionsList.retryWithCurrentlySavedWorkflow")
            }, {
              id: "original-workflow",
              label: locale.baseText("executionsList.retryWithOriginalWorkflow")
            }]);
            const executionUIDetails = computed(() => executionHelpers.getUIDetails(props.execution));
            const isActive = computed(() => props.execution.id === route.params.executionId);
            const isRetriable = computed(() => executionHelpers.isExecutionRetriable(props.execution));
            onMounted(() => {
              emit("mounted", props.execution.id);
            });
            function onRetryMenuItemSelect(action) {
              emit("retryExecution", {
                execution: props.execution,
                command: action
              });
            }
            return (_ctx, _cache) => {
              const _component_RouterLink = resolveComponent("RouterLink");
              return openBlock(), createElementBlock("div", {
                class: normalizeClass({
                  ["execution-card"]: true,
                  [_ctx.$style.WorkflowExecutionsCard]: true,
                  [_ctx.$style.active]: isActive.value,
                  [_ctx.$style[executionUIDetails.value.name]]: true,
                  [_ctx.$style.highlight]: _ctx.highlight,
                  [_ctx.$style.showGap]: _ctx.showGap
                })
              }, [createVNode(_component_RouterLink, {
                class: normalizeClass(_ctx.$style.executionLink),
                to: {
                  name: unref(VIEWS).EXECUTION_PREVIEW,
                  params: {
                    name: currentWorkflow.value,
                    executionId: _ctx.execution.id
                  },
                  query: unref(route).query
                },
                "data-test-execution-status": executionUIDetails.value.name
              }, {
                default: withCtx(() => [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.description)
                }, [executionUIDetails.value.name === "new" ? (openBlock(), createBlock(unref(N8nText_default), {
                  key: 0,
                  color: "text-dark",
                  bold: true,
                  size: "medium",
                  "data-test-id": "execution-time"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(toDayMonth)(executionUIDetails.value.createdAt)) + " - " + toDisplayString(unref(locale).baseText("executionDetails.startingSoon")), 1)]),
                  _: 1
                })) : (openBlock(), createBlock(unref(N8nText_default), {
                  key: 1,
                  color: "text-dark",
                  bold: true,
                  size: "medium",
                  "data-test-id": "execution-time"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(executionUIDetails.value.startTime), 1)]),
                  _: 1
                })), createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.executionStatus)
                }, [executionUIDetails.value.name === "running" ? (openBlock(), createBlock(unref(N8nSpinner_default), {
                  key: 0,
                  size: "small",
                  class: normalizeClass([_ctx.$style.spinner, "mr-4xs"])
                }, null, 8, ["class"])) : createCommentVNode("", true), createVNode(unref(N8nText_default), {
                  class: normalizeClass(_ctx.$style.statusLabel),
                  size: "small"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(executionUIDetails.value.label), 1)]),
                  _: 1
                }, 8, ["class"]), _cache[0] || (_cache[0] = createTextVNode(" " + toDisplayString(" ") + " ")), executionUIDetails.value.name === "running" && !_ctx.execution.stoppedAt ? (openBlock(), createBlock(unref(N8nText_default), {
                  key: 1,
                  color: isActive.value ? "text-dark" : "text-base",
                  size: "small",
                  "data-test-id": "execution-time-in-status"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("executionDetails.runningTimeRunning")) + " ", 1), createVNode(ExecutionsTime_default, {
                    "start-time": _ctx.execution.startedAt ?? _ctx.execution.createdAt
                  }, null, 8, ["start-time"])]),
                  _: 1
                }, 8, ["color"])) : createCommentVNode("", true), executionUIDetails.value.name === "new" && _ctx.execution.createdAt ? (openBlock(), createBlock(unref(N8nText_default), {
                  key: 2,
                  color: isActive.value ? "text-dark" : "text-base",
                  size: "small"
                }, {
                  default: withCtx(() => [createBaseVNode("span", null, toDisplayString(unref(locale).baseText("executionDetails.at")) + " " + toDisplayString(unref(toTime)(_ctx.execution.createdAt)), 1)]),
                  _: 1
                }, 8, ["color"])) : executionUIDetails.value.runningTime !== "" ? (openBlock(), createBlock(unref(N8nText_default), {
                  key: 3,
                  color: isActive.value ? "text-dark" : "text-base",
                  size: "small"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("executionDetails.runningTimeFinished", {
                    interpolate: {
                      time: executionUIDetails.value?.runningTime
                    }
                  })), 1)]),
                  _: 1
                }, 8, ["color"])) : createCommentVNode("", true)], 2), _ctx.execution.mode === "retry" ? (openBlock(), createElementBlock("div", _hoisted_1$1, [createVNode(unref(N8nText_default), {
                  color: isActive.value ? "text-dark" : "text-base",
                  size: "small"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(locale).baseText("executionDetails.retry")) + " #" + toDisplayString(_ctx.execution.retryOf), 1)]),
                  _: 1
                }, 8, ["color"])])) : createCommentVNode("", true), isAnnotationEnabled.value ? (openBlock(), createElementBlock("div", {
                  key: 3,
                  class: normalizeClass(_ctx.$style.annotation)
                }, [_ctx.execution.annotation?.vote ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: normalizeClass(_ctx.$style.ratingIcon)
                }, [_ctx.execution.annotation.vote == "up" ? (openBlock(), createBlock(unref(N8nIcon_default), {
                  key: 0,
                  class: normalizeClass(_ctx.$style.up),
                  icon: "thumbs-up"
                }, null, 8, ["class"])) : (openBlock(), createBlock(unref(N8nIcon_default), {
                  key: 1,
                  class: normalizeClass(_ctx.$style.down),
                  icon: "thumbs-down"
                }, null, 8, ["class"]))], 2)) : createCommentVNode("", true), executionUIDetails.value.tags.length > 0 ? (openBlock(), createBlock(unref(N8nTags_default), {
                  key: 1,
                  tags: executionUIDetails.value.tags,
                  clickable: false
                }, null, 8, ["tags"])) : createCommentVNode("", true)], 2)) : createCommentVNode("", true)], 2), createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.icons)
                }, [isRetriable.value ? (openBlock(), createBlock(unref(N8nActionDropdown_default), {
                  key: 0,
                  class: normalizeClass([_ctx.$style.icon, _ctx.$style.retry]),
                  items: retryExecutionActions.value,
                  disabled: !_ctx.workflowPermissions.execute,
                  "activator-icon": "redo-2",
                  "data-test-id": "retry-execution-button",
                  onSelect: onRetryMenuItemSelect
                }, null, 8, ["class", "items", "disabled"])) : createCommentVNode("", true), _ctx.execution.mode === "manual" ? (openBlock(), createBlock(unref(N8nTooltip_default), {
                  key: 1,
                  placement: "top"
                }, {
                  content: withCtx(() => [createBaseVNode("span", null, toDisplayString(unref(locale).baseText("executionsList.test")), 1)]),
                  default: withCtx(() => [createVNode(unref(N8nIcon_default), {
                    class: normalizeClass([_ctx.$style.icon, _ctx.$style.manual]),
                    icon: "flask-conical"
                  }, null, 8, ["class"])]),
                  _: 1
                })) : createCommentVNode("", true), _ctx.execution.mode === "evaluation" ? (openBlock(), createBlock(unref(N8nTooltip_default), {
                  key: 2,
                  placement: "top"
                }, {
                  content: withCtx(() => [createBaseVNode("span", null, toDisplayString(unref(locale).baseText("executionsList.evaluation")), 1)]),
                  default: withCtx(() => [createVNode(unref(N8nIcon_default), {
                    class: normalizeClass([_ctx.$style.icon, _ctx.$style.evaluation]),
                    icon: "check-check"
                  }, null, 8, ["class"])]),
                  _: 1
                })) : createCommentVNode("", true)], 2)]),
                _: 1
              }, 8, ["class", "to", "data-test-execution-status"])], 2);
            };
          }
        }); //#endregion
        //#region src/features/execution/executions/components/workflow/WorkflowExecutionsCard.vue?vue&type=style&index=0&lang.module.scss
        WorkflowExecutionsCard = "_WorkflowExecutionsCard_19371_123";
        active = "_active_19371_130";
        executionStatus = "_executionStatus_19371_133";
        executionLink = "_executionLink_19371_136";
        spinner = "_spinner_19371_139";
        running = "_running_19371_139";
        statusLabel = "_statusLabel_19371_146";
        success = "_success_19371_151";
        waiting = "_waiting_19371_160";
        error = "_error_19371_166";
        unknown = "_unknown_19371_172";
        annotation = "_annotation_19371_175";
        ratingIcon = "_ratingIcon_19371_182";
        up = "_up_19371_182";
        down = "_down_19371_185";
        icon = "_icon_19371_202";
        icons = "_icons_19371_207";
        retry = "_retry_19371_215";
        manual = "_manual_19371_218";
        showGap = "_showGap_19371_226";
        WorkflowExecutionsCard_vue_vue_type_style_index_0_lang_module_default = {
          WorkflowExecutionsCard,
          active,
          executionStatus,
          executionLink,
          "new": "_new_19371_139",
          spinner,
          running,
          statusLabel,
          success,
          waiting,
          error,
          unknown,
          annotation,
          ratingIcon,
          up,
          down,
          icon,
          icons,
          retry,
          manual,
          showGap
        }; //#endregion
        //#region src/features/execution/executions/components/workflow/WorkflowExecutionsCard.vue
        cssModules$2 = {
          "$style": WorkflowExecutionsCard_vue_vue_type_style_index_0_lang_module_default
        };
        WorkflowExecutionsCard_default = /* @__PURE__ */__plugin_vue_export_helper_default(WorkflowExecutionsCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$2]]); //#endregion
        //#region src/features/execution/executions/components/workflow/WorkflowExecutionsSidebar.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1 = {
          key: 0,
          class: "mr-l"
        };
        _hoisted_2 = {
          key: 3,
          class: "mr-m"
        };
        WorkflowExecutionsSidebar_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "WorkflowExecutionsSidebar",
          props: {
            workflow: {},
            executions: {},
            loading: {
              type: Boolean
            },
            loadingMore: {
              type: Boolean
            },
            temporaryExecution: {}
          },
          emits: ["retryExecution", "loadMore", "filterUpdated", "update:autoRefresh"],
          setup(__props, {
            emit: __emit
          }) {
            const props = __props;
            const emit = __emit;
            const route = useRoute();
            const router = useRouter();
            const i18n = useI18n();
            const executionsStore = useExecutionsStore();
            const settingsStore = useSettingsStore();
            const pageRedirectionHelper = usePageRedirectionHelper();
            const autoScrollDeps = ref({
              activeExecutionSet: false,
              cardsMounted: false,
              scroll: true
            });
            const currentWorkflowExecutionsCardRefs = ref({});
            const sidebarContainerRef = ref(null);
            const executionListRef = ref(null);
            const {
              observe: observeForLoadMore
            } = useIntersectionObserver({
              root: executionListRef,
              threshold: .01,
              onIntersect: () => emit("loadMore", 20)
            });
            const workflowPermissions = computed(() => getResourcePermissions(props.workflow?.scopes).workflow);
            const showConcurrencyHeader = computed(() => settingsStore.isConcurrencyEnabled && !settingsStore.isQueueModeEnabled);
            watch(() => route, (to, from) => {
              if (from.name === VIEWS.EXECUTION_PREVIEW && to.name === VIEWS.EXECUTION_HOME) router.go(-1);
            });
            watch(() => executionsStore.activeExecution, (newValue, oldValue) => {
              if (newValue && newValue.id !== oldValue?.id) autoScrollDeps.value.activeExecutionSet = true;
            });
            watch(autoScrollDeps, updatedDeps => {
              if (Object.values(updatedDeps).every(Boolean)) scrollToActiveCard();
            }, {
              deep: true
            });
            function addCurrentWorkflowExecutionsCardRef(comp, id) {
              if (comp && isComponentPublicInstance(comp) && id) currentWorkflowExecutionsCardRefs.value[id] = comp;
            }
            function onItemMounted(id) {
              const index = props.executions.findIndex(execution => execution.id === id);
              if (executionsStore.activeExecution?.id === id) {
                autoScrollDeps.value.activeExecutionSet = true;
                autoScrollDeps.value.cardsMounted = true;
              }
              if (index === props.executions.length - 1 && !props.loading && !props.loadingMore) {
                const cardElement = currentWorkflowExecutionsCardRefs.value[id]?.$el;
                observeForLoadMore(cardElement);
              }
            }
            function loadMore(limit = 20) {
              if (!props.loading) {
                if (executionListRef.value) {
                  const diff = executionListRef.value.offsetHeight - (executionListRef.value.scrollHeight - executionListRef.value.scrollTop);
                  if (diff > -10 && diff < 10) emit("loadMore", limit);
                }
              }
            }
            function onRetryExecution(payload) {
              emit("retryExecution", payload);
            }
            function onFilterChanged(filter) {
              autoScrollDeps.value.activeExecutionSet = false;
              autoScrollDeps.value.cardsMounted = false;
              autoScrollDeps.value.scroll = true;
              emit("filterUpdated", filter);
            }
            function onAutoRefreshChange(enabled) {
              emit("update:autoRefresh", typeof enabled === "boolean" ? enabled : Boolean(enabled));
            }
            function scrollToActiveCard() {
              if (executionListRef.value && executionsStore.activeExecution && currentWorkflowExecutionsCardRefs.value[executionsStore.activeExecution.id]) {
                const cardRect = currentWorkflowExecutionsCardRefs.value[executionsStore.activeExecution.id].$el.getBoundingClientRect();
                const LIST_HEADER_OFFSET = 200;
                if (cardRect.top > executionListRef.value.offsetHeight) {
                  autoScrollDeps.value.scroll = false;
                  executionListRef.value.scrollTo({
                    top: cardRect.top - LIST_HEADER_OFFSET,
                    behavior: "smooth"
                  });
                }
              }
            }
            const goToUpgrade = () => {
              pageRedirectionHelper.goToUpgrade("concurrency", "upgrade-concurrency");
            };
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                ref_key: "sidebarContainerRef",
                ref: sidebarContainerRef,
                class: normalizeClass(["executions-sidebar", _ctx.$style.container]),
                "data-test-id": "executions-sidebar"
              }, [createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.heading)
              }, [createVNode(unref(N8nHeading_default), {
                tag: "h2",
                size: "medium",
                color: "text-dark"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("generic.executions")), 1)]),
                _: 1
              }), showConcurrencyHeader.value ? (openBlock(), createBlock(ConcurrentExecutionsHeader_default, {
                key: 0,
                "running-executions-count": unref(executionsStore).concurrentExecutionsCount,
                "concurrency-cap": unref(settingsStore).concurrency,
                "is-cloud-deployment": unref(settingsStore).isCloudDeployment,
                onGoToUpgrade: goToUpgrade
              }, null, 8, ["running-executions-count", "concurrency-cap", "is-cloud-deployment"])) : createCommentVNode("", true)], 2), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.controls)
              }, [createVNode(unref(ElCheckbox), {
                modelValue: unref(executionsStore).autoRefresh,
                "onUpdate:modelValue": [_cache[0] || (_cache[0] = $event => unref(executionsStore).autoRefresh = $event), onAutoRefreshChange],
                "data-test-id": "auto-refresh-checkbox"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("executionsList.autoRefresh")), 1)]),
                _: 1
              }, 8, ["modelValue"]), createVNode(ExecutionsFilter_default, {
                "popover-placement": "right-start",
                onFilterChanged
              })], 2), createBaseVNode("div", {
                ref_key: "executionListRef",
                ref: executionListRef,
                class: normalizeClass(_ctx.$style.executionList),
                "data-test-id": "current-executions-list",
                onScroll: _cache[1] || (_cache[1] = $event => loadMore(20))
              }, [_ctx.loading ? (openBlock(), createElementBlock("div", _hoisted_1, [createVNode(unref(N8nLoading_default), {
                variant: "rect"
              })])) : createCommentVNode("", true), !_ctx.loading && _ctx.executions.length === 0 ? (openBlock(), createElementBlock("div", {
                key: 1,
                class: normalizeClass(_ctx.$style.noResultsContainer),
                "data-test-id": "execution-list-empty"
              }, [createVNode(unref(N8nText_default), {
                color: "text-base",
                size: "medium",
                align: "center"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("executionsLandingPage.noResults")), 1)]),
                _: 1
              })], 2)) : _ctx.temporaryExecution ? (openBlock(), createBlock(WorkflowExecutionsCard_default, {
                key: 2,
                ref: el => addCurrentWorkflowExecutionsCardRef(el, _ctx.temporaryExecution?.id),
                execution: _ctx.temporaryExecution,
                "data-test-id": `execution-details-${_ctx.temporaryExecution.id}`,
                "show-gap": true,
                "workflow-permissions": workflowPermissions.value,
                onRetryExecution
              }, null, 8, ["execution", "data-test-id", "workflow-permissions"])) : createCommentVNode("", true), createVNode(TransitionGroup, {
                name: "executions-list"
              }, {
                default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.executions, execution => {
                  return openBlock(), createBlock(WorkflowExecutionsCard_default, {
                    key: execution.id,
                    ref_for: true,
                    ref: el => addCurrentWorkflowExecutionsCardRef(el, execution.id),
                    execution,
                    "workflow-permissions": workflowPermissions.value,
                    "data-test-id": `execution-details-${execution.id}`,
                    onRetryExecution,
                    onMounted: onItemMounted
                  }, null, 8, ["execution", "workflow-permissions", "data-test-id"]);
                }), 128))]),
                _: 1
              }), _ctx.loadingMore ? (openBlock(), createElementBlock("div", _hoisted_2, [createVNode(unref(N8nLoading_default), {
                variant: "p",
                rows: 1
              })])) : createCommentVNode("", true)], 34), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.infoAccordion)
              }, [createVNode(WorkflowExecutionsInfoAccordion_default, {
                "initially-expanded": false
              })], 2)], 2);
            };
          }
        }); //#endregion
        //#region src/features/execution/executions/components/workflow/WorkflowExecutionsSidebar.vue?vue&type=style&index=0&lang.module.scss
        container$1 = "_container_hrgxj_123";
        heading = "_heading_hrgxj_135";
        controls = "_controls_hrgxj_142";
        executionList = "_executionList_hrgxj_154";
        infoAccordion = "_infoAccordion_hrgxj_172";
        noResultsContainer = "_noResultsContainer_hrgxj_185";
        WorkflowExecutionsSidebar_vue_vue_type_style_index_0_lang_module_default = {
          container: container$1,
          heading,
          controls,
          executionList,
          infoAccordion,
          noResultsContainer
        }; //#endregion
        //#region src/features/execution/executions/components/workflow/WorkflowExecutionsSidebar.vue
        cssModules$1 = {
          "$style": WorkflowExecutionsSidebar_vue_vue_type_style_index_0_lang_module_default
        };
        WorkflowExecutionsSidebar_default = /* @__PURE__ */__plugin_vue_export_helper_default(WorkflowExecutionsSidebar_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$1], ["__scopeId", "data-v-bb8454a7"]]); //#endregion
        //#region src/features/execution/executions/components/workflow/WorkflowExecutionsList.vue?vue&type=script&setup=true&lang.ts
        WorkflowExecutionsList_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "WorkflowExecutionsList",
          props: {
            loading: {
              type: Boolean,
              default: false
            },
            workflow: {},
            executions: {
              default: () => []
            },
            execution: {},
            loadingMore: {
              type: Boolean,
              default: false
            }
          },
          emits: ["execution:delete", "execution:stop", "execution:retry", "update:auto-refresh", "update:filters", "load-more", "reload"],
          setup(__props, {
            emit: __emit
          }) {
            const props = __props;
            const emit = __emit;
            const {
              promptSaveUnsavedWorkflowChanges
            } = useWorkflowSaving({
              router: useRouter()
            });
            const temporaryExecution = computed(() => props.executions.find(execution => execution.id === props.execution?.id) ? void 0 : props.execution ?? void 0);
            const hidePreview = computed(() => {
              return props.loading || !props.execution && props.executions.length;
            });
            const onDeleteCurrentExecution = () => {
              if (!props.execution?.id) return;
              emit("execution:delete", props.execution.id);
            };
            const onStopExecution = () => {
              if (!props.execution?.id) return;
              emit("execution:stop", props.execution.id);
            };
            const onRetryExecution = payload => {
              const loadWorkflow = payload.command === "current-workflow";
              emit("execution:retry", {
                id: payload.execution.id,
                loadWorkflow
              });
            };
            onBeforeRouteLeave(async (to, _, next) => {
              if (getNodeViewTab(to) === MAIN_HEADER_TABS.WORKFLOW) {
                next();
                return;
              }
              await promptSaveUnsavedWorkflowChanges(next);
            });
            return (_ctx, _cache) => {
              const _component_RouterView = resolveComponent("RouterView");
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(_ctx.$style.container)
              }, [createVNode(WorkflowExecutionsSidebar_default, {
                executions: _ctx.executions,
                loading: _ctx.loading && !_ctx.executions.length,
                "loading-more": _ctx.loadingMore,
                "temporary-execution": temporaryExecution.value,
                workflow: _ctx.workflow,
                "onUpdate:autoRefresh": _cache[0] || (_cache[0] = $event => emit("update:auto-refresh", $event)),
                onReloadExecutions: _cache[1] || (_cache[1] = $event => emit("reload")),
                onFilterUpdated: _cache[2] || (_cache[2] = $event => emit("update:filters", $event)),
                onLoadMore: _cache[3] || (_cache[3] = $event => emit("load-more")),
                onRetryExecution
              }, null, 8, ["executions", "loading", "loading-more", "temporary-execution", "workflow"]), !hidePreview.value ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(_ctx.$style.content)
              }, [createVNode(_component_RouterView, {
                name: "executionPreview",
                execution: _ctx.execution,
                onDeleteCurrentExecution,
                onRetryExecution,
                onStopExecution
              }, null, 8, ["execution"])], 2)) : createCommentVNode("", true)], 2);
            };
          }
        }); //#endregion
        //#region src/features/execution/executions/components/workflow/WorkflowExecutionsList.vue?vue&type=style&index=0&lang.module.scss
        container = "_container_udnba_123";
        content = "_content_udnba_129";
        WorkflowExecutionsList_vue_vue_type_style_index_0_lang_module_default = {
          container,
          content
        }; //#endregion
        //#region src/features/execution/executions/components/workflow/WorkflowExecutionsList.vue
        cssModules = {
          "$style": WorkflowExecutionsList_vue_vue_type_style_index_0_lang_module_default
        };
        WorkflowExecutionsList_default = /* @__PURE__ */__plugin_vue_export_helper_default(WorkflowExecutionsList_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]]); //#endregion
        //#region src/features/execution/executions/views/WorkflowExecutionsView.vue?vue&type=script&setup=true&lang.ts
        WorkflowExecutionsView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "WorkflowExecutionsView",
          setup(__props) {
            const executionsStore = useExecutionsStore();
            const workflowsStore = useWorkflowsStore();
            const nodeTypesStore = useNodeTypesStore();
            const projectsStore = useProjectsStore();
            const i18n = useI18n();
            const telemetry = useTelemetry();
            const route = useRoute();
            const router = useRouter();
            const toast = useToast();
            const {
              callDebounced
            } = useDebounce();
            const {
              initializeWorkspace
            } = useCanvasOperations();
            const loading = ref(false);
            const loadingMore = ref(false);
            const workflow = ref();
            const workflowId = computed(() => {
              const workflowIdParam = route.params.name;
              return ["__EMPTY__", "new"].includes(workflowIdParam) ? void 0 : workflowIdParam;
            });
            const executionId = computed(() => route.params.executionId);
            const executions = computed(() => workflowId.value ? [...(executionsStore.currentExecutionsByWorkflowId[workflowId.value] ?? []), ...(executionsStore.executionsByWorkflowId[workflowId.value] ?? [])] : []);
            const execution = computed(() => {
              return executions.value.find(e => e.id === executionId.value) ?? currentExecution.value;
            });
            const currentExecution = ref();
            watch(() => workflowId.value, async () => {
              await fetchWorkflow();
            });
            watch(() => executionId.value, async () => {
              await fetchExecution();
            });
            onMounted(async () => {
              await Promise.all([nodeTypesStore.loadNodeTypesIfNotLoaded(), fetchWorkflow()]);
              if (workflowId.value) await Promise.all([executionsStore.initialize(workflowId.value), fetchExecution()]);
              await initializeRoute();
              document.addEventListener("visibilitychange", onDocumentVisibilityChange);
            });
            onBeforeUnmount(() => {
              executionsStore.reset();
              document.removeEventListener("visibilitychange", onDocumentVisibilityChange);
            });
            async function fetchExecution() {
              if (!executionId.value) return;
              try {
                currentExecution.value = await executionsStore.fetchExecution(executionId.value);
                executionsStore.activeExecution = currentExecution.value;
              } catch (error$1) {
                toast.showError(error$1, i18n.baseText("nodeView.showError.openExecution.title"));
              }
              if (!currentExecution.value) {
                toast.showMessage({
                  type: "error",
                  title: i18n.baseText("openExecution.missingExeuctionId.title"),
                  message: i18n.baseText("openExecution.missingExeuctionId.message")
                });
                return;
              }
            }
            function onDocumentVisibilityChange() {
              if (document.visibilityState === "hidden") executionsStore.stopAutoRefreshInterval();else executionsStore.startAutoRefreshInterval(workflowId.value);
            }
            async function initializeRoute() {
              if (route.name === VIEWS.EXECUTION_HOME && executions.value.length > 0 && workflow.value) await router.replace({
                name: VIEWS.EXECUTION_PREVIEW,
                params: {
                  name: workflow.value.id,
                  executionId: executions.value[0].id
                },
                query: route.query
              }).catch(() => {});
            }
            async function fetchWorkflow() {
              if (workflowId.value) {
                if (workflowsStore.workflow.id === "__EMPTY__") try {
                  await workflowsStore.fetchActiveWorkflows();
                  initializeWorkspace(await workflowsStore.fetchWorkflow(workflowId.value));
                } catch (error$1) {
                  toast.showError(error$1, i18n.baseText("nodeView.showError.openWorkflow.title"));
                }
                workflow.value = workflowsStore.getWorkflowById(workflowId.value);
                const workflowData = await workflowsStore.fetchWorkflow(workflow.value.id);
                await projectsStore.setProjectNavActiveIdByWorkflowHomeProject(workflowData.homeProject);
              } else workflow.value = workflowsStore.workflow;
            }
            async function onAutoRefreshToggle(value) {
              if (value) await executionsStore.startAutoRefreshInterval(workflowId.value);else executionsStore.stopAutoRefreshInterval();
            }
            async function onRefreshData() {
              if (!workflowId.value) return;
              try {
                await executionsStore.fetchExecutions({
                  ...executionsStore.executionsFilters,
                  workflowId: workflowId.value
                });
              } catch (error$1) {
                if (error$1.errorCode === 999) toast.showMessage({
                  title: i18n.baseText("executionsList.showError.refreshData.title"),
                  message: error$1.message,
                  type: "error",
                  duration: 3500
                }, false);else toast.showError(error$1, i18n.baseText("executionsList.showError.refreshData.title"));
              }
            }
            async function onUpdateFilters(newFilters) {
              executionsStore.reset();
              executionsStore.setFilters(newFilters);
              await executionsStore.initialize(workflowId.value);
            }
            async function onExecutionStop(id) {
              if (!id) return;
              try {
                await executionsStore.stopCurrentExecution(id);
                toast.showMessage({
                  title: i18n.baseText("executionsList.showMessage.stopExecution.title"),
                  message: i18n.baseText("executionsList.showMessage.stopExecution.message", {
                    interpolate: {
                      activeExecutionId: id
                    }
                  }),
                  type: "success"
                });
                await onRefreshData();
              } catch (error$1) {
                toast.showError(error$1, i18n.baseText("executionsList.showError.stopExecution.title"));
              }
            }
            async function onExecutionDelete(id) {
              if (!id) return;
              loading.value = true;
              try {
                const executionIndex = executions.value.findIndex(e => e.id === id);
                const nextExecution = executions.value[executionIndex + 1] || executions.value[executionIndex - 1] || executions.value[0];
                await executionsStore.deleteExecutions({
                  ids: [id]
                });
                if (workflow.value) if (executions.value.length > 0) await router.replace({
                  name: VIEWS.EXECUTION_PREVIEW,
                  params: {
                    name: workflow.value.id,
                    executionId: nextExecution.id
                  }
                }).catch(() => {});else await router.replace({
                  name: VIEWS.EXECUTION_HOME,
                  params: {
                    name: workflow.value.id
                  }
                });
              } catch (error$1) {
                loading.value = false;
                toast.showError(error$1, i18n.baseText("executionsList.showError.handleDeleteSelected.title"));
                return;
              }
              loading.value = false;
              toast.showMessage({
                title: i18n.baseText("executionsList.showMessage.handleDeleteSelected.title"),
                type: "success"
              });
            }
            async function onExecutionRetry(payload) {
              toast.showMessage({
                title: i18n.baseText("executionDetails.runningMessage"),
                type: "info",
                duration: 2e3
              });
              await retryExecution(payload);
              await onRefreshData();
              telemetry.track("User clicked retry execution button", {
                workflow_id: workflow.value?.id,
                execution_id: payload.id,
                retry_type: payload.loadWorkflow ? "current" : "original"
              });
            }
            async function retryExecution(payload) {
              try {
                const retryMessage = executionRetryMessage((await executionsStore.retryExecution(payload.id, payload.loadWorkflow)).status);
                if (retryMessage) toast.showMessage(retryMessage);
              } catch (error$1) {
                toast.showError(error$1, i18n.baseText("executionsList.showError.retryExecution.title"));
              }
            }
            async function onLoadMore() {
              if (!loadingMore.value) await callDebounced(loadMore, {
                debounceTime: 1e3
              });
            }
            async function loadMore() {
              if (!!executionsStore.executionsFilters.status?.includes("running") || executions.value.length >= executionsStore.executionsCount) return;
              loadingMore.value = true;
              let lastId;
              if (executions.value.length !== 0) lastId = executions.value.slice(-1)[0].id;
              try {
                await executionsStore.fetchExecutions(executionsStore.executionsFilters, lastId);
              } catch (error$1) {
                loadingMore.value = false;
                toast.showError(error$1, i18n.baseText("executionsList.showError.loadMore.title"));
                return;
              }
              loadingMore.value = false;
            }
            return (_ctx, _cache) => {
              return workflow.value ? (openBlock(), createBlock(WorkflowExecutionsList_default, {
                key: 0,
                executions: executions.value,
                execution: execution.value,
                workflow: workflow.value,
                loading: loading.value,
                "loading-more": loadingMore.value,
                "onExecution:stop": onExecutionStop,
                "onExecution:delete": onExecutionDelete,
                "onExecution:retry": onExecutionRetry,
                "onUpdate:filters": onUpdateFilters,
                "onUpdate:autoRefresh": onAutoRefreshToggle,
                onLoadMore,
                onReload: onRefreshData
              }, null, 8, ["executions", "execution", "workflow", "loading", "loading-more"])) : createCommentVNode("", true);
            };
          }
        }); //#endregion
        //#region src/features/execution/executions/views/WorkflowExecutionsView.vue
        _export("default", WorkflowExecutionsView_default = WorkflowExecutionsView_vue_vue_type_script_setup_true_lang_default); //#endregion
      }
    };
  });
})();