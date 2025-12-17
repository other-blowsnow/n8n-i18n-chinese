;
(function () {
  System.register(["./chunk-legacy-Re9CbdfL.js", "./vue.runtime.esm-bundler-legacy--Sn1h8On.js", "./_MapCache-legacy-DHBQRRQG.js", "./src-legacy-Bos09xer.js", "./en-legacy-DJK4SpPN.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-BIn0keUI.js", "./icon-legacy-CIK-lB61.js", "./overlay-legacy-B0b_K0kO.js", "./empty-legacy-ZG0-xpne.js", "./useMessage-legacy-BdVFquy4.js", "./useTelemetry-legacy-CqPMRSSw.js", "./useToast-legacy-BExpsCTi.js", "./sanitize-html-legacy-B93rGWi4.js", "./CalendarDate-legacy-BUvNgcoo.js", "./path-browserify-legacy-PZw06cM9.js", "./constants-legacy-7i-p8Q83.js", "./merge-legacy-y9V-HyOw.js", "./_baseOrderBy-legacy-BktlFW96.js", "./dateformat-legacy-C4HUJTCr.js", "./useDebounce-legacy-KtnINwEe.js", "./useExternalHooks-legacy-DAimL5by.js", "./useStyles-legacy-E8NPEyeD.js", "./npsSurvey.store-legacy-B1YzgCUi.js", "./cloudPlan.store-legacy-DZDCwxzb.js", "./templates.store-legacy-sX7PVeAe.js", "./focusPanel.store-legacy-WkMhKz3s.js", "./useWorkflowSaving-legacy-BFUB_zl0.js", "./executions.store-legacy-BaIYxkfK.js", "./versions.store-legacy-Bif3-3_C.js", "./usePageRedirectionHelper-legacy-Jjfhks9b.js", "./FileSaver.min-legacy-D7uxxng5.js", "./useWorkflowActivate-legacy-qCRmLf5j.js", "./utils-legacy-CABLNf_l.js", "./WorkflowPreview-legacy-a9h-I1OO.js", "./useIntersectionObserver-legacy-a8ObNv7k.js"], function (_export, _context) {
    "use strict";

    var __toESM, computed, toDisplayString, createElementBlock, createCommentVNode, unref, ref, h, createVNode, defineComponent, createBlock, onMounted, Fragment, watch, renderSlot, withCtx, openBlock, withModifiers, renderList, createTextVNode, resolveComponent, onBeforeMount, normalizeClass, watchEffect, createBaseVNode, I18nT, useI18n, N8nButton_default, N8nText_default, N8nIcon_default, N8nBadge_default, N8nActionToggle_default, N8nTooltip_default, N8nLoading_default, N8nLink_default, N8nHeading_default, __plugin_vue_export_helper_default, useRouter, createEventBus, useRoute, useUIStore, getWorkflowHistory, getWorkflowVersion, getNewWorkflow, useSettingsStore, useUsersStore, useWorkflowsStore, telemetry, useToast, VIEWS, getResourcePermissions, WORKFLOW_HISTORY_VERSION_UNPUBLISH, IS_DRAFT_PUBLISH_ENABLED, WORKFLOW_HISTORY_VERSION_RESTORE, WORKFLOW_HISTORY_PUBLISH_MODAL_KEY, defineStore, useRootStore, usePageRedirectionHelper, require_FileSaver_min, useWorkflowActivate, generateVersionName, getLastPublishedVersion, formatTimestamp, WorkflowPreview_default, useIntersectionObserver, __vite_style__, _hoisted_1$3, _hoisted_2$1, _hoisted_3, _hoisted_4, WorkflowHistoryListItem_vue_vue_type_script_setup_true_lang_default, item, mainLine$1, metaItem, tail, selected, actionsVisible, actions, publishedBadge, tooltipContent, WorkflowHistoryListItem_vue_vue_type_style_index_0_lang_module_default, cssModules$3, WorkflowHistoryListItem_default, _hoisted_1$2, WorkflowHistoryList_vue_vue_type_script_setup_true_lang_default, list, empty, loader, retention, WorkflowHistoryList_vue_vue_type_style_index_0_lang_module_default, cssModules$2, WorkflowHistoryList_default, _hoisted_1$1, _hoisted_2, MAX_DESCRIPTION_LENGTH, WorkflowHistoryContent_vue_vue_type_script_setup_true_lang_default, content, info, card, descriptionBox, mainLine, textOld, label, WorkflowHistoryContent_vue_vue_type_style_index_0_lang_module_default, cssModules$1, WorkflowHistoryContent_default, import_FileSaver_min, useWorkflowHistoryStore, _hoisted_1, WorkflowHistoryVersionRestoreModalActions, WorkflowHistory_vue_vue_type_script_setup_true_lang_default, view, header, corner, contentComponentWrapper, listComponentWrapper, WorkflowHistory_vue_vue_type_style_index_0_lang_module_default, cssModules, WorkflowHistory_default;
    return {
      setters: [function (_chunkLegacy001Js) {
        __toESM = _chunkLegacy001Js.o;
      }, function (_vueRuntimeEsmBundlerLegacy003Js) {
        computed = _vueRuntimeEsmBundlerLegacy003Js.C;
        toDisplayString = _vueRuntimeEsmBundlerLegacy003Js.Cn;
        createElementBlock = _vueRuntimeEsmBundlerLegacy003Js.D;
        createCommentVNode = _vueRuntimeEsmBundlerLegacy003Js.E;
        unref = _vueRuntimeEsmBundlerLegacy003Js.Gt;
        ref = _vueRuntimeEsmBundlerLegacy003Js.It;
        h = _vueRuntimeEsmBundlerLegacy003Js.L;
        createVNode = _vueRuntimeEsmBundlerLegacy003Js.M;
        defineComponent = _vueRuntimeEsmBundlerLegacy003Js.P;
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        onMounted = _vueRuntimeEsmBundlerLegacy003Js.Z;
        Fragment = _vueRuntimeEsmBundlerLegacy003Js._;
        watch = _vueRuntimeEsmBundlerLegacy003Js._t;
        renderSlot = _vueRuntimeEsmBundlerLegacy003Js.at;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        withModifiers = _vueRuntimeEsmBundlerLegacy003Js.h;
        renderList = _vueRuntimeEsmBundlerLegacy003Js.it;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        resolveComponent = _vueRuntimeEsmBundlerLegacy003Js.ot;
        onBeforeMount = _vueRuntimeEsmBundlerLegacy003Js.q;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js.vn;
        watchEffect = _vueRuntimeEsmBundlerLegacy003Js.vt;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
      }, function (_MapCacheLegacy005Js) {
        I18nT = _MapCacheLegacy005Js._t;
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {
        N8nButton_default = _srcLegacy007Js.Hn;
        N8nText_default = _srcLegacy007Js.Vn;
        N8nIcon_default = _srcLegacy007Js.Wn;
        N8nBadge_default = _srcLegacy007Js.at;
        N8nActionToggle_default = _srcLegacy007Js.et;
        N8nTooltip_default = _srcLegacy007Js.mt;
        N8nLoading_default = _srcLegacy007Js.tt;
        N8nLink_default = _srcLegacy007Js.ut;
        N8nHeading_default = _srcLegacy007Js.zn;
      }, function (_enLegacy00bJs) {}, function (_preloadHelperLegacy00dJs) {}, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {
        useRouter = _truncateLegacy00hJs.b;
        createEventBus = _truncateLegacy00hJs.x;
        useRoute = _truncateLegacy00hJs.y;
      }, function (_iconLegacy00nJs) {}, function (_overlayLegacy00rJs) {}, function (_emptyLegacy00vJs) {}, function (_useMessageLegacy00xJs) {}, function (_useTelemetryLegacy00HJs) {
        useUIStore = _useTelemetryLegacy00HJs.Fi;
        getWorkflowHistory = _useTelemetryLegacy00HJs.Go;
        getWorkflowVersion = _useTelemetryLegacy00HJs.Ko;
        getNewWorkflow = _useTelemetryLegacy00HJs.Ro;
        useSettingsStore = _useTelemetryLegacy00HJs.Wo;
        useUsersStore = _useTelemetryLegacy00HJs.nr;
        useWorkflowsStore = _useTelemetryLegacy00HJs.o;
        telemetry = _useTelemetryLegacy00HJs.r;
      }, function (_useToastLegacy00JJs) {
        useToast = _useToastLegacy00JJs.t;
      }, function (_sanitizeHtmlLegacy00LJs) {}, function (_CalendarDateLegacy00NJs) {}, function (_pathBrowserifyLegacy00RJs) {}, function (_constantsLegacy00TJs) {
        VIEWS = _constantsLegacy00TJs.Lo;
        getResourcePermissions = _constantsLegacy00TJs.Oo;
        WORKFLOW_HISTORY_VERSION_UNPUBLISH = _constantsLegacy00TJs._s;
        IS_DRAFT_PUBLISH_ENABLED = _constantsLegacy00TJs.a;
        WORKFLOW_HISTORY_VERSION_RESTORE = _constantsLegacy00TJs.gs;
        WORKFLOW_HISTORY_PUBLISH_MODAL_KEY = _constantsLegacy00TJs.hs;
      }, function (_mergeLegacy00VJs) {}, function (_baseOrderByLegacy00ZJs) {
        defineStore = _baseOrderByLegacy00ZJs.k;
        useRootStore = _baseOrderByLegacy00ZJs.r;
      }, function (_dateformatLegacy00$Js) {}, function (_useDebounceLegacy011Js) {}, function (_useExternalHooksLegacy013Js) {}, function (_useStylesLegacy015Js) {}, function (_npsSurveyStoreLegacy01bJs) {}, function (_cloudPlanStoreLegacy01dJs) {}, function (_templatesStoreLegacy01fJs) {}, function (_focusPanelStoreLegacy01hJs) {}, function (_useWorkflowSavingLegacy01jJs) {}, function (_executionsStoreLegacy01nJs) {}, function (_versionsStoreLegacy01LJs) {}, function (_usePageRedirectionHelperLegacy01NJs) {
        usePageRedirectionHelper = _usePageRedirectionHelperLegacy01NJs.t;
      }, function (_FileSaverMinLegacy02HJs) {
        require_FileSaver_min = _FileSaverMinLegacy02HJs.t;
      }, function (_useWorkflowActivateLegacy03RJs) {
        useWorkflowActivate = _useWorkflowActivateLegacy03RJs.t;
      }, function (_utilsLegacy03VJs) {
        generateVersionName = _utilsLegacy03VJs.n;
        getLastPublishedVersion = _utilsLegacy03VJs.r;
        formatTimestamp = _utilsLegacy03VJs.t;
      }, function (_WorkflowPreviewLegacy06pJs) {
        WorkflowPreview_default = _WorkflowPreviewLegacy06pJs.t;
      }, function (_useIntersectionObserverLegacy06xJs) {
        useIntersectionObserver = _useIntersectionObserverLegacy06xJs.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._item_hpps2_123 {\n  display: flex;\n  position: relative;\n  align-items: center;\n  justify-content: space-between;\n  border-left: 2px var(--border-style) transparent;\n  border-bottom: var(--border-width) var(--border-style) var(--color--foreground);\n  color: var(--color--text);\n  font-size: var(--font-size--2xs);\n}\n._item_hpps2_123 p {\n  display: grid;\n  padding: var(--spacing--sm);\n  cursor: pointer;\n  flex: 1 1 auto;\n}\n._item_hpps2_123 p time {\n  padding: 0 0 var(--spacing--5xs);\n  color: var(--color--text--shade-1);\n  font-size: var(--font-size--sm);\n  font-weight: var(--font-weight--bold);\n}\n._item_hpps2_123 p span,\n._item_hpps2_123 p data {\n  justify-self: start;\n  max-width: 160px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin-top: calc(var(--spacing--4xs) * -1);\n  font-size: var(--font-size--2xs);\n}\n._item_hpps2_123 p ._mainLine_hpps2_155 {\n  padding: 0 0 var(--spacing--5xs);\n  color: var(--color--text--shade-1);\n  font-size: var(--font-size--sm);\n  font-weight: var(--font-weight--bold);\n}\n._item_hpps2_123 p ._metaItem_hpps2_161 {\n  justify-self: start;\n  max-width: 180px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin-top: calc(var(--spacing--4xs) * -1);\n  font-size: var(--font-size--2xs);\n  padding: 0;\n  color: var(--color--text);\n  font-weight: var(--font-weight--regular);\n}\n._item_hpps2_123 ._tail_hpps2_173 {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n._item_hpps2_123._selected_hpps2_178 {\n  background-color: var(--color--background);\n  border-left-color: var(--color--primary);\n}\n._item_hpps2_123._selected_hpps2_178 p {\n  cursor: default;\n}\n._item_hpps2_123:hover, ._item_hpps2_123._actionsVisible_hpps2_185 {\n  border-left-color: var(--color--foreground--shade-2);\n}\n._actions_hpps2_185 {\n  display: block;\n  padding: var(--spacing--3xs);\n}\n._publishedBadge_hpps2_194 {\n  background-color: var(--color--success);\n  color: var(--color--foreground--tint-2);\n}\n._publishedBadge_hpps2_194 .n8n-text {\n  font-size: var(--font-size--2xs);\n  line-height: var(--line-height--sm);\n}\n._tooltipContent_hpps2_203 {\n  min-width: 200px;\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing--4xs);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._list_1i94b_123 {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n}\n._empty_1i94b_132 {\n  display: flex;\n  position: absolute;\n  height: 100%;\n  padding: 0 25%;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  color: var(--color--text);\n  font-size: var(--font-size--sm);\n  line-height: var(--line-height--lg);\n}\n._loader_1i94b_145 {\n  padding: 0 var(--spacing--sm);\n}\n._retention_1i94b_149 {\n  display: grid;\n  padding: var(--spacing--sm);\n  font-size: var(--font-size--2xs);\n  line-height: var(--line-height--lg);\n  text-align: center;\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._content_1x7a8_123 {\n  position: absolute;\n  display: block;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n}\n._info_1x7a8_133 {\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  width: 100%;\n}\n._card_1x7a8_141 {\n  padding: var(--spacing--sm) var(--spacing--lg) 0;\n  border: 0;\n  align-items: start;\n}\n._card_1x7a8_141 ._descriptionBox_1x7a8_146 {\n  display: flex;\n  flex-direction: column;\n  max-width: 330px;\n  gap: var(--spacing--3xs);\n  margin-top: var(--spacing--3xs);\n  padding: var(--spacing--xs);\n  border: var(--border-width) var(--border-style) var(--color--foreground);\n  border-radius: var(--radius);\n  background-color: var(--color--background--light-3);\n}\n._card_1x7a8_141 ._descriptionBox_1x7a8_146 ._mainLine_1x7a8_157 {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  cursor: default;\n}\n._card_1x7a8_141 ._textOld_1x7a8_163 {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n}\n._card_1x7a8_141 ._textOld_1x7a8_163 p {\n  display: flex;\n  align-items: center;\n  padding: 0;\n  cursor: default;\n}\n._card_1x7a8_141 ._textOld_1x7a8_163 p:first-child {\n  padding-top: var(--spacing--3xs);\n  padding-bottom: var(--spacing--4xs);\n}\n._card_1x7a8_141 ._textOld_1x7a8_163 p:first-child * {\n  margin-top: auto;\n  font-size: var(--font-size--md);\n}\n._card_1x7a8_141 ._textOld_1x7a8_163 p:last-child {\n  padding-top: var(--spacing--3xs);\n}\n._card_1x7a8_141 ._textOld_1x7a8_163 p:last-child * {\n  font-size: var(--font-size--2xs);\n}\n._card_1x7a8_141 ._textOld_1x7a8_163 p ._label_1x7a8_188 {\n  color: var(--color--text--tint-1);\n  padding-right: var(--spacing--4xs);\n}\n._card_1x7a8_141 ._textOld_1x7a8_163 p * {\n  max-width: unset;\n  justify-self: unset;\n  white-space: unset;\n  overflow: hidden;\n  text-overflow: unset;\n  padding: 0;\n  font-size: var(--font-size--sm);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._view_ley84_123 {\n  position: relative;\n  display: grid;\n  width: 100%;\n  grid-template-areas: \"header corner\" \"content list\";\n  grid-template-columns: auto 330px;\n  grid-template-rows: 65px auto;\n  background-color: var(--color--background--light-3);\n}\n._header_ley84_133 {\n  grid-area: header;\n  display: flex;\n  align-items: center;\n  padding: 0 var(--spacing--lg);\n  border-bottom: var(--border-width) var(--border-style) var(--color--foreground);\n}\n._corner_ley84_141 {\n  grid-area: corner;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 var(--spacing--3xs) 0 var(--spacing--sm);\n  background-color: var(--color--background--light-2er);\n  border-bottom: var(--border-width) var(--border-style) var(--color--foreground);\n  border-left: var(--border-width) var(--border-style) var(--color--foreground);\n}\n._contentComponentWrapper_ley84_152 {\n  grid-area: content;\n  position: relative;\n}\n._listComponentWrapper_ley84_157 {\n  grid-area: list;\n  position: relative;\n}\n._listComponentWrapper_ley84_157::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: var(--border-width);\n  background-color: var(--color--foreground);\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/features/workflows/workflowHistory/components/WorkflowHistoryListItem.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1$3 = ["datetime"];
        _hoisted_2$1 = ["datetime"];
        _hoisted_3 = ["value"];
        _hoisted_4 = {
          key: 0
        };
        WorkflowHistoryListItem_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "WorkflowHistoryListItem",
          props: {
            item: {},
            index: {},
            actions: {},
            isSelected: {
              type: Boolean,
              default: false
            },
            isVersionActive: {
              type: Boolean,
              default: false
            }
          },
          emits: ["action", "preview", "mounted"],
          setup(__props, {
            emit: __emit
          }) {
            const props = __props;
            const emit = __emit;
            const i18n = useI18n();
            const usersStore = useUsersStore();
            const actionsVisible$1 = ref(false);
            const itemElement = ref(null);
            const authorElement = ref(null);
            const isAuthorElementTruncated = ref(false);
            const isDraftPublishEnabled = true;
            const formattedCreatedAt = computed(() => {
              const {
                date,
                time
              } = formatTimestamp(props.item.createdAt);
              return i18n.baseText("workflowHistory.item.createdAt", {
                interpolate: {
                  date,
                  time
                }
              });
            });
            const authors = computed(() => {
              const allAuthors = props.item.authors.split(", ");
              let label$1 = allAuthors[0];
              if (allAuthors.length > 1) label$1 = `${label$1} + ${allAuthors.length - 1}`;
              return {
                size: allAuthors.length,
                label: label$1
              };
            });
            const versionName = computed(() => {
              if (props.item.name) return props.item.name;
              return props.isVersionActive ? generateVersionName(props.item.versionId) : "";
            });
            const lastPublishInfo = computed(() => {
              if (!props.isVersionActive) return null;
              const lastPublishedByUser = getLastPublishedVersion(props.item.workflowPublishHistory);
              if (!lastPublishedByUser) return null;
              return lastPublishedByUser;
            });
            const publishedAt = computed(() => {
              if (!lastPublishInfo.value) return null;
              const {
                date,
                time
              } = formatTimestamp(lastPublishInfo.value.createdAt);
              return i18n.baseText("workflowHistory.item.createdAt", {
                interpolate: {
                  date,
                  time
                }
              });
            });
            const publishedByUserName = computed(() => {
              const userId = lastPublishInfo.value?.userId;
              if (!userId) return null;
              const user = usersStore.usersById[userId];
              return user?.fullName ?? user?.email ?? null;
            });
            const idLabel = computed(() => i18n.baseText("workflowHistory.item.id", {
              interpolate: {
                id: props.item.versionId
              }
            }));
            const onAction = value => {
              emit("action", {
                action: value,
                id: props.item.versionId,
                data: {
                  formattedCreatedAt: formattedCreatedAt.value,
                  versionName: versionName.value,
                  description: props.item.description
                }
              });
            };
            const onVisibleChange = visible => {
              actionsVisible$1.value = visible;
            };
            const onItemClick = event => {
              emit("preview", {
                event,
                id: props.item.versionId
              });
            };
            onMounted(() => {
              emit("mounted", {
                index: props.index,
                offsetTop: itemElement.value?.offsetTop ?? 0,
                isSelected: props.isSelected
              });
              isAuthorElementTruncated.value = (authorElement.value?.scrollWidth ?? 0) > (authorElement.value?.clientWidth ?? 0);
            });
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("li", {
                ref_key: "itemElement",
                ref: itemElement,
                "data-test-id": "workflow-history-list-item",
                class: normalizeClass({
                  [_ctx.$style.item]: true,
                  [_ctx.$style.selected]: props.isSelected,
                  [_ctx.$style.actionsVisible]: actionsVisible$1.value
                })
              }, [renderSlot(_ctx.$slots, "default", {
                formattedCreatedAt: formattedCreatedAt.value
              }, () => [unref(isDraftPublishEnabled) ? (openBlock(), createElementBlock("p", {
                key: 0,
                onClick: onItemClick
              }, [versionName.value ? (openBlock(), createElementBlock("span", {
                key: 0,
                class: normalizeClass(_ctx.$style.mainLine)
              }, toDisplayString(versionName.value), 3)) : createCommentVNode("", true), createBaseVNode("time", {
                datetime: _ctx.item.createdAt,
                class: normalizeClass(_ctx.$style.metaItem)
              }, toDisplayString(unref(i18n).baseText("workflowHistory.item.savedAtLabel")) + " " + toDisplayString(formattedCreatedAt.value), 11, _hoisted_1$3), createVNode(unref(N8nTooltip_default), {
                placement: "right-end",
                disabled: authors.value.size < 2 && !isAuthorElementTruncated.value
              }, {
                content: withCtx(() => [createTextVNode(toDisplayString(props.item.authors), 1)]),
                default: withCtx(() => [createBaseVNode("span", {
                  ref_key: "authorElement",
                  ref: authorElement,
                  class: normalizeClass(_ctx.$style.metaItem)
                }, toDisplayString(authors.value.label), 3)]),
                _: 1
              }, 8, ["disabled"])])) : (openBlock(), createElementBlock("p", {
                key: 1,
                onClick: onItemClick
              }, [createBaseVNode("time", {
                datetime: _ctx.item.createdAt
              }, toDisplayString(formattedCreatedAt.value), 9, _hoisted_2$1), createVNode(unref(N8nTooltip_default), {
                placement: "right-end",
                disabled: authors.value.size < 2 && !isAuthorElementTruncated.value
              }, {
                content: withCtx(() => [createTextVNode(toDisplayString(props.item.authors), 1)]),
                default: withCtx(() => [createBaseVNode("span", {
                  ref_key: "authorElement",
                  ref: authorElement
                }, toDisplayString(authors.value.label), 513)]),
                _: 1
              }, 8, ["disabled"]), createBaseVNode("data", {
                value: _ctx.item.versionId
              }, toDisplayString(idLabel.value), 9, _hoisted_3)]))]), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.tail)
              }, [unref(isDraftPublishEnabled) && props.isVersionActive ? (openBlock(), createBlock(unref(N8nTooltip_default), {
                key: 0,
                placement: "top",
                disabled: !publishedAt.value
              }, {
                content: withCtx(() => [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.tooltipContent)
                }, [createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("workflowHistory.item.publishedAtLabel")) + " " + toDisplayString(publishedAt.value), 1), publishedByUserName.value ? (openBlock(), createElementBlock("span", _hoisted_4, toDisplayString(publishedByUserName.value), 1)) : createCommentVNode("", true)], 2)]),
                default: withCtx(() => [createVNode(unref(N8nBadge_default), {
                  size: "medium",
                  class: normalizeClass(_ctx.$style.publishedBadge),
                  "show-border": false
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowHistory.item.active")), 1)]),
                  _: 1
                }, 8, ["class"])]),
                _: 1
              }, 8, ["disabled"])) : createCommentVNode("", true), !unref(isDraftPublishEnabled) && props.index === 0 ? (openBlock(), createBlock(unref(N8nBadge_default), {
                key: 1
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowHistory.item.latest")), 1)]),
                _: 1
              })) : createCommentVNode("", true), createVNode(unref(N8nActionToggle_default), {
                theme: "dark",
                class: normalizeClass(_ctx.$style.actions),
                actions: props.actions,
                placement: "bottom-end",
                onAction,
                onClick: _cache[0] || (_cache[0] = withModifiers(() => {}, ["stop"])),
                onVisibleChange
              }, {
                default: withCtx(() => [renderSlot(_ctx.$slots, "action-toggle-button")]),
                _: 3
              }, 8, ["class", "actions"])], 2)], 2);
            };
          }
        }); //#endregion
        //#region src/features/workflows/workflowHistory/components/WorkflowHistoryListItem.vue?vue&type=style&index=0&lang.module.scss
        item = "_item_hpps2_123";
        mainLine$1 = "_mainLine_hpps2_155";
        metaItem = "_metaItem_hpps2_161";
        tail = "_tail_hpps2_173";
        selected = "_selected_hpps2_178";
        actionsVisible = "_actionsVisible_hpps2_185";
        actions = "_actions_hpps2_185";
        publishedBadge = "_publishedBadge_hpps2_194";
        tooltipContent = "_tooltipContent_hpps2_203";
        WorkflowHistoryListItem_vue_vue_type_style_index_0_lang_module_default = {
          item,
          mainLine: mainLine$1,
          metaItem,
          tail,
          selected,
          actionsVisible,
          actions,
          publishedBadge,
          tooltipContent
        }; //#endregion
        //#region src/features/workflows/workflowHistory/components/WorkflowHistoryListItem.vue
        cssModules$3 = {
          "$style": WorkflowHistoryListItem_vue_vue_type_style_index_0_lang_module_default
        };
        WorkflowHistoryListItem_default = /* @__PURE__ */__plugin_vue_export_helper_default(WorkflowHistoryListItem_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$3]]); //#endregion
        //#region src/features/workflows/workflowHistory/components/WorkflowHistoryList.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1$2 = ["aria-label"];
        WorkflowHistoryList_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "WorkflowHistoryList",
          props: {
            items: {},
            selectedItem: {},
            actions: {},
            requestNumberOfItems: {},
            lastReceivedItemsLength: {},
            evaluatedPruneDays: {},
            shouldUpgrade: {
              type: Boolean
            },
            isListLoading: {
              type: Boolean
            },
            activeVersionId: {}
          },
          emits: ["action", "preview", "loadMore", "upgrade"],
          setup(__props, {
            emit: __emit
          }) {
            const props = __props;
            const emit = __emit;
            const i18n = useI18n();
            const listElement = ref(null);
            const shouldAutoScroll = ref(true);
            const {
              observe: observeForLoadMore
            } = useIntersectionObserver({
              root: listElement,
              threshold: .01,
              onIntersect: () => emit("loadMore", {
                take: props.requestNumberOfItems,
                skip: props.items.length
              })
            });
            const getActions = (item$1, index) => {
              let filteredActions = props.actions;
              if (index === 0) filteredActions = filteredActions.filter(action => action.value !== "restore");
              if (true) {
                if (item$1.versionId === props.activeVersionId) filteredActions = filteredActions.filter(action => action.value !== "publish");else filteredActions = filteredActions.filter(action => action.value !== "unpublish");
              } else filteredActions = filteredActions.filter(action => action.value !== "publish" && action.value !== "unpublish");
              return filteredActions;
            };
            const onAction = ({
              action,
              id,
              data
            }) => {
              shouldAutoScroll.value = false;
              emit("action", {
                action,
                id,
                data
              });
            };
            const onPreview = ({
              event,
              id
            }) => {
              shouldAutoScroll.value = false;
              emit("preview", {
                event,
                id
              });
            };
            const onItemMounted = ({
              index,
              offsetTop,
              isSelected
            }) => {
              if (isSelected && shouldAutoScroll.value) {
                shouldAutoScroll.value = false;
                listElement.value?.scrollTo({
                  top: offsetTop,
                  behavior: "smooth"
                });
              }
              if (index === props.items.length - 1 && props.lastReceivedItemsLength === props.requestNumberOfItems) observeForLoadMore(listElement.value?.children[index]);
            };
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("ul", {
                ref_key: "listElement",
                ref: listElement,
                class: normalizeClass(_ctx.$style.list),
                "data-test-id": "workflow-history-list"
              }, [(openBlock(true), createElementBlock(Fragment, null, renderList(props.items, (item$1, index) => {
                return openBlock(), createBlock(WorkflowHistoryListItem_default, {
                  key: item$1.versionId,
                  index,
                  item: item$1,
                  "is-selected": item$1.versionId === props.selectedItem?.versionId,
                  "is-version-active": item$1.versionId === props.activeVersionId,
                  actions: getActions(item$1, index),
                  onAction,
                  onPreview,
                  onMounted: onItemMounted
                }, null, 8, ["index", "item", "is-selected", "is-version-active", "actions"]);
              }), 128)), !props.items.length && !props.isListLoading ? (openBlock(), createElementBlock("li", {
                key: 0,
                class: normalizeClass(_ctx.$style.empty)
              }, [createTextVNode(toDisplayString(unref(i18n).baseText("workflowHistory.empty")) + " ", 1), _cache[1] || (_cache[1] = createBaseVNode("br", null, null, -1)), createTextVNode(" " + toDisplayString(unref(i18n).baseText("workflowHistory.hint")), 1)], 2)) : createCommentVNode("", true), props.isListLoading ? (openBlock(), createElementBlock("li", {
                key: 1,
                class: normalizeClass(_ctx.$style.loader),
                role: "status",
                "aria-live": "polite",
                "aria-busy": "true",
                "aria-label": unref(i18n).baseText("generic.loading")
              }, [createVNode(unref(N8nLoading_default), {
                rows: 3,
                class: "mb-xs"
              }), createVNode(unref(N8nLoading_default), {
                rows: 3,
                class: "mb-xs"
              }), createVNode(unref(N8nLoading_default), {
                rows: 3,
                class: "mb-xs"
              })], 10, _hoisted_1$2)) : createCommentVNode("", true), props.shouldUpgrade ? (openBlock(), createElementBlock("li", {
                key: 2,
                class: normalizeClass(_ctx.$style.retention)
              }, [createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("workflowHistory.limit", {
                interpolate: {
                  days: String(props.evaluatedPruneDays)
                }
              })), 1), createVNode(unref(I18nT), {
                keypath: "workflowHistory.upgrade",
                tag: "span",
                scope: "global"
              }, {
                link: withCtx(() => [createBaseVNode("a", {
                  href: "#",
                  onClick: _cache[0] || (_cache[0] = $event => emit("upgrade"))
                }, toDisplayString(unref(i18n).baseText("workflowHistory.upgrade.link")), 1)]),
                _: 1
              })], 2)) : createCommentVNode("", true)], 2);
            };
          }
        }); //#endregion
        //#region src/features/workflows/workflowHistory/components/WorkflowHistoryList.vue?vue&type=style&index=0&lang.module.scss
        list = "_list_1i94b_123";
        empty = "_empty_1i94b_132";
        loader = "_loader_1i94b_145";
        retention = "_retention_1i94b_149";
        WorkflowHistoryList_vue_vue_type_style_index_0_lang_module_default = {
          list,
          empty,
          loader,
          retention
        }; //#endregion
        //#region src/features/workflows/workflowHistory/components/WorkflowHistoryList.vue
        cssModules$2 = {
          "$style": WorkflowHistoryList_vue_vue_type_style_index_0_lang_module_default
        };
        WorkflowHistoryList_default = /* @__PURE__ */__plugin_vue_export_helper_default(WorkflowHistoryList_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$2]]); //#endregion
        //#region src/features/workflows/workflowHistory/components/WorkflowHistoryContent.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1$1 = ["datetime"];
        _hoisted_2 = ["value"];
        MAX_DESCRIPTION_LENGTH = 200;
        WorkflowHistoryContent_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "WorkflowHistoryContent",
          props: {
            workflow: {},
            workflowVersion: {},
            actions: {},
            isVersionActive: {
              type: Boolean
            },
            isListLoading: {
              type: Boolean
            },
            isFirstItemShown: {
              type: Boolean
            }
          },
          emits: ["action"],
          setup(__props, {
            emit: __emit
          }) {
            const i18n = useI18n();
            const props = __props;
            const emit = __emit;
            const isDraftPublishEnabled = true;
            const workflowVersionPreview = computed(() => {
              if (!props.workflowVersion || !props.workflow) return;
              const {
                pinData,
                ...workflow
              } = props.workflow;
              return {
                ...workflow,
                nodes: props.workflowVersion.nodes,
                connections: props.workflowVersion.connections
              };
            });
            const formattedCreatedAt = computed(() => {
              if (!props.workflowVersion) return "";
              const {
                date,
                time
              } = formatTimestamp(props.workflowVersion.createdAt);
              return i18n.baseText("workflowHistory.item.createdAt", {
                interpolate: {
                  date,
                  time
                }
              });
            });
            const versionNameDisplay = computed(() => {
              if (props.workflowVersion?.name) return props.workflowVersion.name;
              return props.isVersionActive && props.workflowVersion ? generateVersionName(props.workflowVersion.versionId) : formattedCreatedAt.value;
            });
            const isDescriptionExpanded = ref(false);
            const description = computed(() => props.workflowVersion?.description ?? "");
            const isDescriptionLong = computed(() => description.value.length > MAX_DESCRIPTION_LENGTH);
            const displayDescription = computed(() => {
              if (!isDescriptionLong.value || isDescriptionExpanded.value) return description.value;
              return description.value.substring(0, MAX_DESCRIPTION_LENGTH) + "... ";
            });
            const toggleDescription = () => {
              isDescriptionExpanded.value = !isDescriptionExpanded.value;
            };
            const actions$1 = computed(() => {
              let filteredActions = props.actions;
              if (props.isFirstItemShown) filteredActions = filteredActions.filter(action => action.value !== "restore");
              if (isDraftPublishEnabled) {
                if (props.isVersionActive) filteredActions = filteredActions.filter(action => action.value !== "publish");else filteredActions = filteredActions.filter(action => action.value !== "unpublish");
              } else filteredActions = filteredActions.filter(action => action.value !== "publish" && action.value !== "unpublish");
              return filteredActions;
            });
            const onAction = ({
              action,
              id,
              data
            }) => {
              emit("action", {
                action,
                id,
                data
              });
            };
            watch(() => props.workflowVersion, () => {
              isDescriptionExpanded.value = false;
            });
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(_ctx.$style.content)
              }, [props.workflowVersion ? (openBlock(), createBlock(WorkflowPreview_default, {
                key: 0,
                workflow: workflowVersionPreview.value,
                loading: props.isListLoading,
                "loader-type": "spinner"
              }, null, 8, ["workflow", "loading"])) : createCommentVNode("", true), createBaseVNode("ul", {
                class: normalizeClass(_ctx.$style.info)
              }, [props.workflowVersion ? (openBlock(), createBlock(WorkflowHistoryListItem_default, {
                key: 0,
                class: normalizeClass(_ctx.$style.card),
                index: -1,
                item: props.workflowVersion,
                "is-selected": false,
                actions: actions$1.value,
                onAction
              }, {
                default: withCtx(({
                  formattedCreatedAt: formattedCreatedAt$1
                }) => [unref(isDraftPublishEnabled) ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: normalizeClass(_ctx.$style.descriptionBox)
                }, [versionNameDisplay.value ? (openBlock(), createBlock(unref(N8nTooltip_default), {
                  key: 0,
                  content: versionNameDisplay.value
                }, {
                  default: withCtx(() => [createVNode(unref(N8nText_default), {
                    class: normalizeClass(_ctx.$style.mainLine),
                    bold: "",
                    color: "text-dark"
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(versionNameDisplay.value), 1)]),
                    _: 1
                  }, 8, ["class"])]),
                  _: 1
                }, 8, ["content"])) : createCommentVNode("", true), description.value ? (openBlock(), createBlock(unref(N8nText_default), {
                  key: 1,
                  size: "small",
                  color: "text-base"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(displayDescription.value) + " ", 1), isDescriptionLong.value ? (openBlock(), createBlock(unref(N8nLink_default), {
                    key: 0,
                    size: "small",
                    onClick: toggleDescription
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(isDescriptionExpanded.value ? unref(i18n).baseText("generic.showLess") : unref(i18n).baseText("generic.showMore")), 1)]),
                    _: 1
                  })) : createCommentVNode("", true)]),
                  _: 1
                })) : createCommentVNode("", true)], 2)) : (openBlock(), createElementBlock("section", {
                  key: 1,
                  class: normalizeClass(_ctx.$style.textOld)
                }, [createBaseVNode("p", null, [createBaseVNode("span", {
                  class: normalizeClass(_ctx.$style.label)
                }, toDisplayString(unref(i18n).baseText("workflowHistory.content.title")) + ": ", 3), createBaseVNode("time", {
                  datetime: props.workflowVersion.createdAt
                }, toDisplayString(formattedCreatedAt$1), 9, _hoisted_1$1)]), createBaseVNode("p", null, [createBaseVNode("span", {
                  class: normalizeClass(_ctx.$style.label)
                }, toDisplayString(unref(i18n).baseText("workflowHistory.content.editedBy")) + ": ", 3), createBaseVNode("span", null, toDisplayString(props.workflowVersion.authors), 1)]), createBaseVNode("p", null, [createBaseVNode("span", {
                  class: normalizeClass(_ctx.$style.label)
                }, toDisplayString(unref(i18n).baseText("workflowHistory.content.versionId")) + ": ", 3), createBaseVNode("data", {
                  value: props.workflowVersion.versionId
                }, toDisplayString(props.workflowVersion.versionId), 9, _hoisted_2)])], 2))]),
                "action-toggle-button": withCtx(() => [createVNode(unref(N8nButton_default), {
                  type: "tertiary",
                  size: "large",
                  "data-test-id": "action-toggle-button"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowHistory.content.actions")) + " ", 1), createVNode(unref(N8nIcon_default), {
                    class: "ml-3xs",
                    icon: "chevron-down",
                    size: "small"
                  })]),
                  _: 1
                })]),
                _: 1
              }, 8, ["class", "item", "actions"])) : createCommentVNode("", true)], 2)], 2);
            };
          }
        }); //#endregion
        //#region src/features/workflows/workflowHistory/components/WorkflowHistoryContent.vue?vue&type=style&index=0&lang.module.scss
        content = "_content_1x7a8_123";
        info = "_info_1x7a8_133";
        card = "_card_1x7a8_141";
        descriptionBox = "_descriptionBox_1x7a8_146";
        mainLine = "_mainLine_1x7a8_157";
        textOld = "_textOld_1x7a8_163";
        label = "_label_1x7a8_188";
        WorkflowHistoryContent_vue_vue_type_style_index_0_lang_module_default = {
          content,
          info,
          card,
          descriptionBox,
          mainLine,
          textOld,
          label
        }; //#endregion
        //#region src/features/workflows/workflowHistory/components/WorkflowHistoryContent.vue
        cssModules$1 = {
          "$style": WorkflowHistoryContent_vue_vue_type_style_index_0_lang_module_default
        };
        WorkflowHistoryContent_default = /* @__PURE__ */__plugin_vue_export_helper_default(WorkflowHistoryContent_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$1]]); //#endregion
        //#region ../@n8n/rest-api-client/dist/api/workflowHistory.mjs
        import_FileSaver_min = /* @__PURE__ */__toESM(require_FileSaver_min()); //#endregion
        //#region src/features/workflows/workflowHistory/workflowHistory.store.ts
        useWorkflowHistoryStore = defineStore("workflowHistory", () => {
          const rootStore = useRootStore();
          const settingsStore = useSettingsStore();
          const workflowsStore = useWorkflowsStore();
          const licensePruneTime = computed(() => settingsStore.settings.workflowHistory.licensePruneTime);
          const evaluatedPruneTime = computed(() => settingsStore.settings.workflowHistory.pruneTime);
          const shouldUpgrade = computed(() => licensePruneTime.value !== -1 && licensePruneTime.value === evaluatedPruneTime.value);
          const getWorkflowHistory$1 = async (workflowId, queryParams) => await getWorkflowHistory(rootStore.restApiContext, workflowId, queryParams);
          const getWorkflowVersion$1 = async (workflowId, versionId) => await getWorkflowVersion(rootStore.restApiContext, workflowId, versionId);
          const downloadVersion = async (workflowId, workflowVersionId, data) => {
            const [workflow, workflowVersion] = await Promise.all([workflowsStore.fetchWorkflow(workflowId), getWorkflowVersion$1(workflowId, workflowVersionId)]);
            const {
              connections,
              nodes
            } = workflowVersion;
            (0, import_FileSaver_min.saveAs)(new Blob([JSON.stringify({
              ...workflow,
              nodes,
              connections
            }, null, 2)], {
              type: "application/json;charset=utf-8"
            }), `${workflow.name}(${data.formattedCreatedAt}).json`);
          };
          const cloneIntoNewWorkflow = async (workflowId, workflowVersionId, data) => {
            const [workflow, workflowVersion] = await Promise.all([workflowsStore.fetchWorkflow(workflowId), getWorkflowVersion$1(workflowId, workflowVersionId)]);
            const {
              connections,
              nodes
            } = workflowVersion;
            const {
              name
            } = workflow;
            const newWorkflowData = {
              nodes,
              connections,
              name: (await getNewWorkflow(rootStore.restApiContext, {
                name: `${name} (${data.formattedCreatedAt})`
              })).name
            };
            return await workflowsStore.createNewWorkflow(newWorkflowData);
          };
          const restoreWorkflow = async (workflowId, workflowVersionId, shouldDeactivate) => {
            const {
              connections,
              nodes
            } = await getWorkflowVersion$1(workflowId, workflowVersionId);
            const updateData = {
              connections,
              nodes
            };
            if (shouldDeactivate) updateData.active = false;
            return await workflowsStore.updateWorkflow(workflowId, updateData, true).catch(async error => {
              if (error.httpStatusCode === 400 && typeof error.message === "string" && error.message.includes("can not be activated")) return await workflowsStore.fetchWorkflow(workflowId);else throw new Error(error);
            });
          };
          return {
            getWorkflowHistory: getWorkflowHistory$1,
            getWorkflowVersion: getWorkflowVersion$1,
            downloadVersion,
            cloneIntoNewWorkflow,
            restoreWorkflow,
            evaluatedPruneTime,
            shouldUpgrade
          };
        }); //#endregion
        //#region src/features/workflows/workflowHistory/views/WorkflowHistory.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1 = {
          key: 0
        };
        WorkflowHistoryVersionRestoreModalActions = /* @__PURE__ */function (WorkflowHistoryVersionRestoreModalActions$1) {
          WorkflowHistoryVersionRestoreModalActions$1["restore"] = "restore";
          WorkflowHistoryVersionRestoreModalActions$1["deactivateAndRestore"] = "deactivateAndRestore";
          WorkflowHistoryVersionRestoreModalActions$1["cancel"] = "cancel";
          return WorkflowHistoryVersionRestoreModalActions$1;
        }(WorkflowHistoryVersionRestoreModalActions || {});
        WorkflowHistory_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "WorkflowHistory",
          setup(__props) {
            const workflowHistoryActionTypes = ["restore", "publish", "unpublish", "clone", "open", "download"];
            const WORKFLOW_HISTORY_ACTIONS = workflowHistoryActionTypes.reduce((record, key) => ({
              ...record,
              [key.toUpperCase()]: key
            }), {});
            const route = useRoute();
            const router = useRouter();
            const i18n = useI18n();
            const toast = useToast();
            const pageRedirectionHelper = usePageRedirectionHelper();
            const workflowHistoryStore = useWorkflowHistoryStore();
            const uiStore = useUIStore();
            const workflowsStore = useWorkflowsStore();
            const workflowActivate = useWorkflowActivate();
            const canRender = ref(true);
            const isListLoading = ref(true);
            const requestNumberOfItems = ref(20);
            const lastReceivedItemsLength = ref(0);
            const activeWorkflow = ref(null);
            const workflowHistory = ref([]);
            const selectedWorkflowVersion = ref(null);
            const workflowId = computed(() => normalizeSingleRouteParam("workflowId"));
            const versionId = computed(() => normalizeSingleRouteParam("versionId"));
            const editorRoute = computed(() => ({
              name: VIEWS.WORKFLOW,
              params: {
                name: workflowId.value
              }
            }));
            const workflowPermissions = computed(() => getResourcePermissions(workflowsStore.getWorkflowById(workflowId.value)?.scopes).workflow);
            const workflowActiveVersionId = computed(() => {
              return workflowsStore.getWorkflowById(workflowId.value)?.activeVersion?.versionId;
            });
            const isDraftPublishEnabled = true;
            const actions$1 = computed(() => workflowHistoryActionTypes.filter(value => !(value === "publish" && activeWorkflow.value?.isArchived)).map(value => ({
              label: i18n.baseText(`workflowHistory.item.actions.${value}`),
              disabled: value === "clone" && !workflowPermissions.value.create || value === "restore" && !workflowPermissions.value.update || (value === "publish" || value === "unpublish") && !workflowPermissions.value.update,
              value
            })));
            const isFirstItemShown = computed(() => workflowHistory.value[0]?.versionId === versionId.value);
            const evaluatedPruneDays = computed(() => Math.floor(workflowHistoryStore.evaluatedPruneTime / 24));
            const sendTelemetry = event => {
              telemetry.track(event, {
                instance_id: useRootStore().instanceId,
                workflow_id: workflowId.value
              });
            };
            const loadMore = async queryParams => {
              const history = await workflowHistoryStore.getWorkflowHistory(workflowId.value, queryParams);
              lastReceivedItemsLength.value = history.length;
              workflowHistory.value = workflowHistory.value.concat(history);
            };
            onBeforeMount(async () => {
              sendTelemetry("User opened workflow history");
              try {
                const [workflow] = await Promise.all([workflowsStore.fetchWorkflow(workflowId.value), loadMore({
                  take: requestNumberOfItems.value
                })]);
                activeWorkflow.value = workflow;
                isListLoading.value = false;
                if (!versionId.value && workflowHistory.value.length) await router.replace({
                  name: VIEWS.WORKFLOW_HISTORY,
                  params: {
                    workflowId: workflowId.value,
                    versionId: workflowHistory.value[0].versionId
                  }
                });
              } catch (error) {
                canRender.value = false;
                toast.showError(error, i18n.baseText("workflowHistory.title"));
              }
            });
            const normalizeSingleRouteParam = name => {
              const param = route.params[name];
              if (typeof param === "string") return param;
              return param?.[0] ?? "";
            };
            const openInNewTab = id => {
              const {
                href
              } = router.resolve({
                name: VIEWS.WORKFLOW_HISTORY,
                params: {
                  workflowId: workflowId.value,
                  versionId: id
                }
              });
              window.open(href, "_blank");
            };
            const openRestorationModal = async (isWorkflowActivated, formattedCreatedAt) => {
              return await new Promise((resolve, reject) => {
                const buttons = [{
                  text: i18n.baseText("workflowHistory.action.restore.modal.button.cancel"),
                  type: "tertiary",
                  action: () => {
                    resolve(WorkflowHistoryVersionRestoreModalActions.cancel);
                  }
                }];
                if (isWorkflowActivated && !isDraftPublishEnabled) buttons.push({
                  text: i18n.baseText("workflowHistory.action.restore.modal.button.deactivateAndRestore"),
                  type: "tertiary",
                  action: () => {
                    resolve(WorkflowHistoryVersionRestoreModalActions.deactivateAndRestore);
                  }
                });
                buttons.push({
                  text: i18n.baseText("workflowHistory.action.restore.modal.button.restore"),
                  type: "primary",
                  action: () => {
                    resolve(WorkflowHistoryVersionRestoreModalActions.restore);
                  }
                });
                try {
                  uiStore.openModalWithData({
                    name: WORKFLOW_HISTORY_VERSION_RESTORE,
                    data: {
                      beforeClose: () => {
                        resolve(WorkflowHistoryVersionRestoreModalActions.cancel);
                      },
                      isWorkflowActivated,
                      formattedCreatedAt,
                      buttons
                    }
                  });
                } catch (error) {
                  reject(error);
                }
              });
            };
            const cloneWorkflowVersion = async (id, data) => {
              const clonedWorkflow = await workflowHistoryStore.cloneIntoNewWorkflow(workflowId.value, id, data);
              const {
                href
              } = router.resolve({
                name: VIEWS.WORKFLOW,
                params: {
                  name: clonedWorkflow.id
                }
              });
              toast.showMessage({
                title: i18n.baseText("workflowHistory.action.clone.success.title"),
                message: h("a", {
                  href,
                  target: "_blank"
                }, i18n.baseText("workflowHistory.action.clone.success.message")),
                type: "success",
                duration: 1e4
              });
            };
            const restoreWorkflowVersion = async (id, data) => {
              const workflow = await workflowsStore.fetchWorkflow(workflowId.value);
              let deactivateAndRestore = false;
              if (!isDraftPublishEnabled) {
                const modalAction = await openRestorationModal(workflow.active, data.formattedCreatedAt);
                if (modalAction === WorkflowHistoryVersionRestoreModalActions.cancel) return;
                deactivateAndRestore = modalAction === WorkflowHistoryVersionRestoreModalActions.deactivateAndRestore;
              }
              activeWorkflow.value = await workflowHistoryStore.restoreWorkflow(workflowId.value, id, deactivateAndRestore);
              if (workflowId.value === workflowsStore.workflowId && activeWorkflow.value.checksum) workflowsStore.setWorkflowChecksum(activeWorkflow.value.checksum);
              workflowHistory.value = (await workflowHistoryStore.getWorkflowHistory(workflowId.value, {
                take: 1
              })).concat(workflowHistory.value);
              toast.showMessage({
                title: i18n.baseText("workflowHistory.action.restore.success.title"),
                type: "success"
              });
            };
            const publishWorkflowVersion = (id, data) => {
              const publishEventBus = createEventBus();
              publishEventBus.once("publish", publishData => {
                activeWorkflow.value = workflowsStore.getWorkflowById(workflowId.value);
                const historyItem = workflowHistory.value.find(item$1 => item$1.versionId === publishData.versionId);
                if (historyItem) {
                  historyItem.name = publishData.name;
                  historyItem.description = publishData.description;
                  if (activeWorkflow.value?.activeVersion?.workflowPublishHistory) historyItem.workflowPublishHistory = activeWorkflow.value.activeVersion.workflowPublishHistory;
                }
                if (selectedWorkflowVersion.value?.versionId === publishData.versionId) selectedWorkflowVersion.value = {
                  ...selectedWorkflowVersion.value,
                  name: publishData.name,
                  description: publishData.description,
                  workflowPublishHistory: activeWorkflow.value?.activeVersion?.workflowPublishHistory ?? selectedWorkflowVersion.value.workflowPublishHistory
                };
                sendTelemetry("User published version from history");
              });
              uiStore.openModalWithData({
                name: WORKFLOW_HISTORY_PUBLISH_MODAL_KEY,
                data: {
                  versionId: id,
                  workflowId: workflowId.value,
                  formattedCreatedAt: data.formattedCreatedAt,
                  versionName: data.versionName,
                  description: data.description,
                  eventBus: publishEventBus
                }
              });
            };
            const unpublishWorkflowVersion = (id, data) => {
              if (workflowActiveVersionId.value !== id) return;
              const unpublishEventBus = createEventBus();
              unpublishEventBus.once("unpublish", async () => {
                const success = await workflowActivate.unpublishWorkflowFromHistory(workflowId.value);
                uiStore.closeModal(WORKFLOW_HISTORY_VERSION_UNPUBLISH);
                if (!success) return;
                activeWorkflow.value = workflowsStore.getWorkflowById(workflowId.value);
                toast.showMessage({
                  title: i18n.baseText("workflowHistory.action.unpublish.success.title"),
                  type: "success"
                });
                sendTelemetry("User unpublished workflow from history");
              });
              uiStore.openModalWithData({
                name: WORKFLOW_HISTORY_VERSION_UNPUBLISH,
                data: {
                  versionName: data.versionName,
                  eventBus: unpublishEventBus
                }
              });
            };
            const onAction = async ({
              action,
              id,
              data
            }) => {
              try {
                switch (action) {
                  case WORKFLOW_HISTORY_ACTIONS.OPEN:
                    openInNewTab(id);
                    sendTelemetry("User opened version in new tab");
                    break;
                  case WORKFLOW_HISTORY_ACTIONS.DOWNLOAD:
                    await workflowHistoryStore.downloadVersion(workflowId.value, id, data);
                    sendTelemetry("User downloaded version");
                    break;
                  case WORKFLOW_HISTORY_ACTIONS.CLONE:
                    await cloneWorkflowVersion(id, data);
                    sendTelemetry("User cloned version");
                    break;
                  case WORKFLOW_HISTORY_ACTIONS.RESTORE:
                    await restoreWorkflowVersion(id, data);
                    sendTelemetry("User restored version");
                    break;
                  case WORKFLOW_HISTORY_ACTIONS.PUBLISH:
                    publishWorkflowVersion(id, data);
                    break;
                  case WORKFLOW_HISTORY_ACTIONS.UNPUBLISH:
                    unpublishWorkflowVersion(id, data);
                    break;
                }
              } catch (error) {
                toast.showError(error, i18n.baseText("workflowHistory.action.error.title", {
                  interpolate: {
                    action: i18n.baseText(`workflowHistory.item.actions.${action}`).toLowerCase()
                  }
                }));
              }
            };
            const onPreview = async ({
              event,
              id
            }) => {
              if (event.metaKey || event.ctrlKey) {
                openInNewTab(id);
                sendTelemetry("User opened version in new tab");
              } else await router.push({
                name: VIEWS.WORKFLOW_HISTORY,
                params: {
                  workflowId: workflowId.value,
                  versionId: id
                }
              });
            };
            const onUpgrade = () => {
              pageRedirectionHelper.goToUpgrade("workflow-history", "upgrade-workflow-history");
            };
            watchEffect(async () => {
              if (!versionId.value) return;
              try {
                const [workflowVersion, workflow] = await Promise.all([workflowHistoryStore.getWorkflowVersion(workflowId.value, versionId.value), workflowsStore.fetchWorkflow(workflowId.value)]);
                selectedWorkflowVersion.value = workflowVersion;
                activeWorkflow.value = workflow;
                sendTelemetry("User selected version");
              } catch (error) {
                if (error.message?.includes("version")) toast.showError(/* @__PURE__ */new Error(`${error.message} "${versionId.value}"&nbsp;`), i18n.baseText("workflowHistory.title"));else {
                  canRender.value = false;
                  toast.showError(error, i18n.baseText("workflowHistory.title"));
                }
              }
            });
            return (_ctx, _cache) => {
              const _component_RouterLink = resolveComponent("RouterLink");
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(_ctx.$style.view)
              }, [createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.header)
              }, [createVNode(unref(N8nHeading_default), {
                tag: "h2",
                size: "medium"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(activeWorkflow.value?.name), 1)]),
                _: 1
              }), activeWorkflow.value?.isArchived ? (openBlock(), createElementBlock("span", _hoisted_1, [createVNode(unref(N8nBadge_default), {
                class: "ml-s",
                theme: "tertiary",
                bold: "",
                "data-test-id": "workflow-archived-tag"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflows.item.archived")), 1)]),
                _: 1
              })])) : createCommentVNode("", true)], 2), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.corner)
              }, [createVNode(unref(N8nHeading_default), {
                tag: "h2",
                size: "medium",
                bold: ""
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workflowHistory.title")), 1)]),
                _: 1
              }), createVNode(_component_RouterLink, {
                to: editorRoute.value,
                "data-test-id": "workflow-history-close-button"
              }, {
                default: withCtx(() => [createVNode(unref(N8nButton_default), {
                  type: "tertiary",
                  icon: "x",
                  size: "small",
                  text: "",
                  square: ""
                })]),
                _: 1
              }, 8, ["to"])], 2), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.listComponentWrapper)
              }, [canRender.value ? (openBlock(), createBlock(WorkflowHistoryList_default, {
                key: 0,
                items: workflowHistory.value,
                "last-received-items-length": lastReceivedItemsLength.value,
                "selected-item": selectedWorkflowVersion.value,
                actions: actions$1.value,
                "request-number-of-items": requestNumberOfItems.value,
                "should-upgrade": unref(workflowHistoryStore).shouldUpgrade,
                "evaluated-prune-days": evaluatedPruneDays.value,
                "is-list-loading": isListLoading.value,
                "active-version-id": workflowActiveVersionId.value,
                onAction,
                onPreview,
                onLoadMore: loadMore,
                onUpgrade
              }, null, 8, ["items", "last-received-items-length", "selected-item", "actions", "request-number-of-items", "should-upgrade", "evaluated-prune-days", "is-list-loading", "active-version-id"])) : createCommentVNode("", true)], 2), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.contentComponentWrapper)
              }, [canRender.value ? (openBlock(), createBlock(WorkflowHistoryContent_default, {
                key: 0,
                workflow: activeWorkflow.value,
                "workflow-version": selectedWorkflowVersion.value,
                "is-version-active": selectedWorkflowVersion.value?.versionId === workflowActiveVersionId.value,
                actions: actions$1.value,
                "is-list-loading": isListLoading.value,
                "is-first-item-shown": isFirstItemShown.value,
                onAction
              }, null, 8, ["workflow", "workflow-version", "is-version-active", "actions", "is-list-loading", "is-first-item-shown"])) : createCommentVNode("", true)], 2)], 2);
            };
          }
        }); //#endregion
        //#region src/features/workflows/workflowHistory/views/WorkflowHistory.vue?vue&type=style&index=0&lang.module.scss
        view = "_view_ley84_123";
        header = "_header_ley84_133";
        corner = "_corner_ley84_141";
        contentComponentWrapper = "_contentComponentWrapper_ley84_152";
        listComponentWrapper = "_listComponentWrapper_ley84_157";
        WorkflowHistory_vue_vue_type_style_index_0_lang_module_default = {
          view,
          header,
          corner,
          contentComponentWrapper,
          listComponentWrapper
        }; //#endregion
        //#region src/features/workflows/workflowHistory/views/WorkflowHistory.vue
        cssModules = {
          "$style": WorkflowHistory_vue_vue_type_style_index_0_lang_module_default
        };
        _export("default", WorkflowHistory_default = /* @__PURE__ */__plugin_vue_export_helper_default(WorkflowHistory_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]])); //#endregion
      }
    };
  });
})();