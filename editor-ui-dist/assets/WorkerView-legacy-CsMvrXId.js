;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-2Qb71DGn.js", "./src-legacy-BL8uywAx.js", "./en-legacy-s6H-lEA2.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-ZZ87M1Mo.js", "./icon-legacy-CRT-hvlv.js", "./overlay-legacy-m4tN0qRV.js", "./empty-legacy-CsIOGMHW.js", "./useMessage-legacy-B0itSvLh.js", "./useTelemetry-legacy-Ck7lGOrk.js", "./useToast-legacy-tN8taI-S.js", "./sanitize-html-legacy-Cack6L-S.js", "./path-browserify-legacy-BQKq4wLb.js", "./constants-legacy-D0ziSY9e.js", "./merge-legacy-BVgKBTAX.js", "./assistant.store-legacy-BS37qd99.js", "./useRootStore-legacy-D1vvqLPX.js", "./dateformat-legacy-BaeIHy_2.js", "./useDebounce-legacy-B8z7M2-W.js", "./useExternalHooks-legacy-DgS1u46v.js", "./useStyles-legacy-DnD2qvTK.js", "./npsSurvey.store-legacy-CwlhN2c-.js", "./cloudPlan.store-legacy-Uv9UJvN5.js", "./templates.store-legacy-BBTwiez6.js", "./focusPanel.store-legacy-vFw1UYwX.js", "./useWorkflowSaving-legacy-PpRfkiZ4.js", "./retry-legacy-WzzNqxgG.js", "./executions.store-legacy-CCeFhqfk.js", "./useRunWorkflow-legacy-BKiR_QGl.js", "./usePinnedData-legacy-3iyzJWb4.js", "./nodeCreator.store-legacy-BJENueFH.js", "./nodeIcon-legacy-Y3uKJRlj.js", "./useClipboard-legacy-C1DalLye.js", "./useCanvasOperations-legacy-D6pMyQRO.js", "./folders.store-legacy-Dx0000za.js", "./versions.store-legacy-DvrrUt8o.js", "./usePageRedirectionHelper-legacy-BOS_Zm4X.js", "./schemaPreview.store-legacy-BF5R3PJk.js", "./sortByProperty-legacy-DJFvCMwr.js", "./chart-legacy-C56SXVvf.js", "./PushConnectionTracker-legacy-CGKIs1Bh.js", "./usePushConnection-legacy-BzvTUXHh.js", "./aiTemplatesStarterCollection.store-legacy-DB8I2wFR.js", "./readyToRun.store-legacy-B1hPK3bO.js", "./dist-legacy-Cpq_3X2H.js"], function (_export, _context) {
    "use strict";

    var computed, createElementBlock, createCommentVNode, unref, ref, onBeforeUnmount, createVNode, defineComponent, toDisplayString, createBlock, onMounted, Fragment, normalizeClass, renderSlot, withCtx, openBlock, renderList, createTextVNode, onBeforeMount, createBaseVNode, useI18n, N8nIcon_default, N8nHeading_default, N8nText_default, N8nActionBox_default, N8nCard_default, N8nSpinner_default, __plugin_vue_export_helper_default, useRouter, useSettingsStore, useDocumentTitle, useTelemetry, useToast, useRootStore, usePushConnectionStore, useClipboard, usePageRedirectionHelper, sortByProperty, PushConnectionTracker_default, WORKER_HISTORY_LENGTH, useOrchestrationStore, usePushConnection, Chart, __vite_style__, WorkerAccordion_vue_vue_type_script_setup_true_lang_default, container$1, header, headerText, expanded, description, WorkerAccordion_vue_vue_type_style_index_0_lang_module_default, cssModules$6, WorkerAccordion_default, _hoisted_1$3, _hoisted_2$1, WorkerJobAccordion_vue_vue_type_script_setup_true_lang_default, accordionItems$2, accordionItem$2, empty, WorkerJobAccordion_vue_vue_type_style_index_0_lang_module_default, cssModules$5, WorkerJobAccordion_default, _hoisted_1$2, WorkerNetAccordion_vue_vue_type_script_setup_true_lang_default, accordionItems$1, accordionItem$1, clickable, WorkerNetAccordion_vue_vue_type_style_index_0_lang_module_default, cssModules$4, WorkerNetAccordion_default, WorkerChartsAccordion_vue_vue_type_script_setup_true_lang_default, accordionItems, accordionItem, charts, chart, WorkerChartsAccordion_vue_vue_type_style_index_0_lang_module_default, cssModules$3, WorkerChartsAccordion_default, WorkerCard_vue_vue_type_script_setup_true_lang_default, container, cardLink, cardHeading, stale, cardDescription, cardActions, WorkerCard_vue_vue_type_style_index_0_lang_module_default, cssModules$2, WorkerCard_default, _hoisted_1$1, _hoisted_2, _hoisted_3, _hoisted_4, WorkerList_vue_vue_type_script_setup_true_lang_default, workerListHeader, card, tableLoader, WorkerList_vue_vue_type_style_index_0_lang_module_default, cssModules$1, WorkerList_default, _hoisted_1, WorkerView_vue_vue_type_script_setup_true_lang_default, actionBox, WorkerView_vue_vue_type_style_index_0_lang_module_default, cssModules, WorkerView_default;
    //#region src/features/settings/orchestration.ee/orchestration.utils.ts
    function averageWorkerLoadFromLoads(loads) {
      return loads.reduce((prev, curr) => prev + curr, 0) / loads.length;
    }
    function averageWorkerLoadFromLoadsAsString(loads) {
      return averageWorkerLoadFromLoads(loads).toFixed(2);
    }
    function memAsGb(mem) {
      return mem / 1024 / 1024 / 1024;
    }

    //#endregion
    //#region src/features/settings/orchestration.ee/components/WorkerAccordion.vue?vue&type=script&setup=true&lang.ts
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
        renderSlot = _vueRuntimeEsmBundlerLegacy003Js.at;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        renderList = _vueRuntimeEsmBundlerLegacy003Js.it;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        onBeforeMount = _vueRuntimeEsmBundlerLegacy003Js.q;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {
        N8nIcon_default = _srcLegacy007Js.Bn;
        N8nHeading_default = _srcLegacy007Js.Fn;
        N8nText_default = _srcLegacy007Js.Ln;
        N8nActionBox_default = _srcLegacy007Js.Ot;
        N8nCard_default = _srcLegacy007Js.Z;
        N8nSpinner_default = _srcLegacy007Js.zn;
      }, function (_enLegacy00bJs) {}, function (_preloadHelperLegacy00dJs) {}, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {
        useRouter = _truncateLegacy00hJs.b;
      }, function (_iconLegacy00lJs) {}, function (_overlayLegacy00pJs) {}, function (_emptyLegacy00tJs) {}, function (_useMessageLegacy00vJs) {}, function (_useTelemetryLegacy00FJs) {
        useSettingsStore = _useTelemetryLegacy00FJs.Bo;
        useDocumentTitle = _useTelemetryLegacy00FJs.Tn;
        useTelemetry = _useTelemetryLegacy00FJs.t;
      }, function (_useToastLegacy00HJs) {
        useToast = _useToastLegacy00HJs.t;
      }, function (_sanitizeHtmlLegacy00JJs) {}, function (_pathBrowserifyLegacy00LJs) {}, function (_constantsLegacy00NJs) {}, function (_mergeLegacy00PJs) {}, function (_assistantStoreLegacy00RJs) {}, function (_useRootStoreLegacy00TJs) {
        useRootStore = _useRootStoreLegacy00TJs.t;
      }, function (_dateformatLegacy00VJs) {}, function (_useDebounceLegacy00XJs) {}, function (_useExternalHooksLegacy00ZJs) {}, function (_useStylesLegacy00$Js) {}, function (_npsSurveyStoreLegacy015Js) {}, function (_cloudPlanStoreLegacy017Js) {}, function (_templatesStoreLegacy019Js) {}, function (_focusPanelStoreLegacy01bJs) {}, function (_useWorkflowSavingLegacy01dJs) {}, function (_retryLegacy01fJs) {}, function (_executionsStoreLegacy01hJs) {}, function (_useRunWorkflowLegacy01jJs) {
        usePushConnectionStore = _useRunWorkflowLegacy01jJs.i;
      }, function (_usePinnedDataLegacy01lJs) {}, function (_nodeCreatorStoreLegacy01nJs) {}, function (_nodeIconLegacy01pJs) {}, function (_useClipboardLegacy01rJs) {
        useClipboard = _useClipboardLegacy01rJs.t;
      }, function (_useCanvasOperationsLegacy01tJs) {}, function (_foldersStoreLegacy01xJs) {}, function (_versionsStoreLegacy01FJs) {}, function (_usePageRedirectionHelperLegacy01HJs) {
        usePageRedirectionHelper = _usePageRedirectionHelperLegacy01HJs.t;
      }, function (_schemaPreviewStoreLegacy02vJs) {}, function (_sortByPropertyLegacy02XJs) {
        sortByProperty = _sortByPropertyLegacy02XJs.t;
      }, function (_chartLegacy03HJs) {}, function (_PushConnectionTrackerLegacy03VJs) {
        PushConnectionTracker_default = _PushConnectionTrackerLegacy03VJs.t;
      }, function (_usePushConnectionLegacy03ZJs) {
        WORKER_HISTORY_LENGTH = _usePushConnectionLegacy03ZJs.n;
        useOrchestrationStore = _usePushConnectionLegacy03ZJs.r;
        usePushConnection = _usePushConnectionLegacy03ZJs.t;
      }, function (_aiTemplatesStarterCollectionStoreLegacy03$Js) {}, function (_readyToRunStoreLegacy041Js) {}, function (_distLegacy05dJs) {
        Chart = _distLegacy05dJs.n;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._container_1nnt5_123 {\n  width: 100%;\n}\n._header_1nnt5_127 {\n  cursor: pointer;\n  display: flex;\n  padding-top: var(--spacing--sm);\n  align-items: center;\n}\n._header_1nnt5_127 ._headerText_1nnt5_133 {\n  flex-grow: 1;\n}\n._expanded_1nnt5_137 {\n  padding: var(--spacing--sm) 0 0 0;\n}\n._description_1nnt5_141 {\n  display: flex;\n  padding: 0 var(--spacing--sm) var(--spacing--sm) var(--spacing--sm);\n}\n._description_1nnt5_141 b {\n  font-weight: var(--font-weight--bold);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._accordionItems_pocpt_123 {\n  display: flex;\n  flex-direction: column !important;\n  align-items: flex-start !important;\n  width: 100%;\n}\n._accordionItem_pocpt_123 {\n  display: block !important;\n  text-align: left;\n  margin-bottom: var(--spacing--4xs);\n}\n._empty_pocpt_136 {\n  display: block !important;\n  text-align: left;\n  margin-top: var(--spacing--2xs);\n  margin-left: var(--spacing--4xs);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._accordionItems_blrmp_123 {\n  display: flex;\n  flex-direction: column !important;\n  align-items: flex-start !important;\n  width: 100%;\n  margin-top: var(--spacing--2xs);\n}\n._accordionItem_blrmp_123 {\n  display: block !important;\n  text-align: left;\n  margin-bottom: var(--spacing--4xs);\n}\n._clickable_blrmp_137 {\n  cursor: pointer !important;\n}\n._clickable_blrmp_137:hover {\n  color: var(--color--primary);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._accordionItems_rnm37_123 {\n  display: flex;\n  flex-direction: column !important;\n  align-items: flex-start !important;\n  width: 100%;\n}\n._accordionItem_rnm37_123 {\n  display: block !important;\n  text-align: left;\n  margin-bottom: var(--spacing--4xs);\n}\n._charts_rnm37_136 {\n  width: 100%;\n  flex-direction: column;\n}\n._chart_rnm37_136 {\n  max-width: 100%;\n  max-height: 200px;\n  position: relative;\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._container_1ejgw_123 {\n  width: 100%;\n}\n._cardLink_1ejgw_127 {\n  transition: box-shadow 0.3s ease;\n  cursor: pointer;\n  padding: 0;\n  align-items: stretch;\n}\n._cardLink_1ejgw_127:hover {\n  box-shadow: 0 2px 8px rgba(68, 28, 23, 0.1);\n}\n._cardHeading_1ejgw_137 {\n  font-size: var(--font-size--sm);\n  word-break: break-word;\n  padding: var(--spacing--sm) 0 0 var(--spacing--sm);\n}\n._stale_1ejgw_143 {\n  opacity: 0.5;\n}\n._cardDescription_1ejgw_147 {\n  min-height: 19px;\n  display: flex;\n  align-items: center;\n  padding: 0 0 var(--spacing--sm) var(--spacing--sm);\n}\n._cardActions_1ejgw_154 {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  align-self: stretch;\n  padding: 0 var(--spacing--sm) 0 0;\n  cursor: default;\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._workerListHeader_1k6ao_123 {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: var(--spacing--sm);\n}\n._card_1k6ao_130 {\n  margin-bottom: var(--spacing--sm);\n}\n._tableLoader_1k6ao_134 {\n  width: 100%;\n  height: 48px;\n  margin-bottom: var(--spacing--2xs);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._actionBox_185wr_123 {\n  margin: var(--spacing--2xl) 0 0;\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        WorkerAccordion_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "WorkerAccordion",
          props: {
            icon: {
              default: "list-checks"
            },
            iconColor: {
              default: "text-dark"
            },
            initialExpanded: {
              type: Boolean,
              default: true
            }
          },
          setup(__props) {
            const expanded$1 = ref(__props.initialExpanded);
            function toggle() {
              expanded$1.value = !expanded$1.value;
            }
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(["accordion", _ctx.$style.container])
              }, [createBaseVNode("div", {
                class: normalizeClass({
                  [_ctx.$style.header]: true,
                  [_ctx.$style.expanded]: expanded$1.value
                }),
                onClick: toggle
              }, [createVNode(unref(N8nIcon_default), {
                icon: _ctx.icon,
                color: _ctx.iconColor,
                size: "small",
                class: "mr-2xs"
              }, null, 8, ["icon", "color"]), createVNode(unref(N8nText_default), {
                class: normalizeClass(_ctx.$style.headerText),
                color: "text-base",
                size: "small",
                align: "left",
                bold: ""
              }, {
                default: withCtx(() => [renderSlot(_ctx.$slots, "title")]),
                _: 3
              }, 8, ["class"]), createVNode(unref(N8nIcon_default), {
                icon: expanded$1.value ? "chevron-up" : "chevron-down",
                bold: ""
              }, null, 8, ["icon"])], 2), expanded$1.value ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass({
                  [_ctx.$style.description]: true,
                  [_ctx.$style.collapsed]: !expanded$1.value
                })
              }, [renderSlot(_ctx.$slots, "content")], 2)) : createCommentVNode("", true)], 2);
            };
          }
        }); //#endregion
        //#region src/features/settings/orchestration.ee/components/WorkerAccordion.vue?vue&type=style&index=0&lang.module.scss
        container$1 = "_container_1nnt5_123";
        header = "_header_1nnt5_127";
        headerText = "_headerText_1nnt5_133";
        expanded = "_expanded_1nnt5_137";
        description = "_description_1nnt5_141";
        WorkerAccordion_vue_vue_type_style_index_0_lang_module_default = {
          container: container$1,
          header,
          headerText,
          expanded,
          description
        }; //#endregion
        //#region src/features/settings/orchestration.ee/components/WorkerAccordion.vue
        cssModules$6 = {
          "$style": WorkerAccordion_vue_vue_type_style_index_0_lang_module_default
        };
        WorkerAccordion_default = /* @__PURE__ */__plugin_vue_export_helper_default(WorkerAccordion_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$6]]); //#endregion
        //#region src/features/settings/orchestration.ee/components/WorkerJobAccordion.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1$3 = ["href"];
        _hoisted_2$1 = ["href"];
        WorkerJobAccordion_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "WorkerJobAccordion",
          props: {
            items: {}
          },
          setup(__props) {
            const props = __props;
            const i18n = useI18n();
            function runningSince(started) {
              let seconds = Math.floor(((/* @__PURE__ */new Date()).getTime() - started.getTime()) / 1e3);
              const hrs = Math.floor(seconds / 3600);
              seconds -= hrs * 3600;
              const mnts = Math.floor(seconds / 60);
              seconds -= mnts * 60;
              return `${hrs}h ${mnts}m ${Math.floor(seconds)}s`;
            }
            return (_ctx, _cache) => {
              return openBlock(), createBlock(WorkerAccordion_default, {
                icon: "list-checks",
                "icon-color": "text-dark",
                "initial-expanded": true
              }, {
                title: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workerList.item.jobListTitle")) + " (" + toDisplayString(_ctx.items.length) + ") ", 1)]),
                content: withCtx(() => [props.items.length > 0 ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: normalizeClass(_ctx.$style.accordionItems)
                }, [(openBlock(true), createElementBlock(Fragment, null, renderList(props.items, item => {
                  return openBlock(), createElementBlock("div", {
                    key: item.executionId,
                    class: normalizeClass(_ctx.$style.accordionItem)
                  }, [createBaseVNode("a", {
                    href: "/workflow/" + item.workflowId + "/executions/" + item.executionId
                  }, " Execution " + toDisplayString(item.executionId) + " - " + toDisplayString(item.workflowName), 9, _hoisted_1$3), createVNode(unref(N8nText_default), {
                    color: "text-base",
                    size: "small",
                    align: "left"
                  }, {
                    default: withCtx(() => [createTextVNode(" | Started at: " + toDisplayString(new Date(item.startedAt)?.toLocaleTimeString()) + " | Running for " + toDisplayString(runningSince(new Date(item.startedAt))) + " " + toDisplayString(item.retryOf ? `| Retry of: ${item.retryOf}` : "") + " | ", 1)]),
                    _: 2
                  }, 1024), createBaseVNode("a", {
                    target: "_blank",
                    href: "/workflow/" + item.workflowId
                  }, " (Open workflow)", 8, _hoisted_2$1)], 2);
                }), 128))], 2)) : (openBlock(), createElementBlock("div", {
                  key: 1,
                  class: normalizeClass(_ctx.$style.accordionItems)
                }, [createBaseVNode("span", {
                  class: normalizeClass(_ctx.$style.empty)
                }, toDisplayString(unref(i18n).baseText("workerList.item.jobList.empty")), 3)], 2))]),
                _: 1
              });
            };
          }
        }); //#endregion
        //#region src/features/settings/orchestration.ee/components/WorkerJobAccordion.vue?vue&type=style&index=0&lang.module.scss
        accordionItems$2 = "_accordionItems_pocpt_123";
        accordionItem$2 = "_accordionItem_pocpt_123";
        empty = "_empty_pocpt_136";
        WorkerJobAccordion_vue_vue_type_style_index_0_lang_module_default = {
          accordionItems: accordionItems$2,
          accordionItem: accordionItem$2,
          empty
        }; //#endregion
        //#region src/features/settings/orchestration.ee/components/WorkerJobAccordion.vue
        cssModules$5 = {
          "$style": WorkerJobAccordion_vue_vue_type_style_index_0_lang_module_default
        };
        WorkerJobAccordion_default = /* @__PURE__ */__plugin_vue_export_helper_default(WorkerJobAccordion_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$5]]); //#endregion
        //#region src/features/settings/orchestration.ee/components/WorkerNetAccordion.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1$2 = ["onClick"];
        WorkerNetAccordion_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "WorkerNetAccordion",
          props: {
            items: {}
          },
          setup(__props) {
            const props = __props;
            const i18n = useI18n();
            const clipboard = useClipboard();
            const {
              showMessage
            } = useToast();
            function onCopyToClipboard(content) {
              try {
                clipboard.copy(content);
                showMessage({
                  title: i18n.baseText("workerList.item.copyAddressToClipboard"),
                  type: "success"
                });
              } catch {}
            }
            return (_ctx, _cache) => {
              return openBlock(), createBlock(WorkerAccordion_default, {
                icon: "list-checks",
                "icon-color": "text-dark",
                "initial-expanded": false
              }, {
                title: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workerList.item.netListTitle")) + " (" + toDisplayString(_ctx.items.length) + ") ", 1)]),
                content: withCtx(() => [props.items.length > 0 ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: normalizeClass(_ctx.$style.accordionItems)
                }, [(openBlock(true), createElementBlock(Fragment, null, renderList(props.items, item => {
                  return openBlock(), createElementBlock("div", {
                    key: item.address,
                    class: normalizeClass(_ctx.$style.accordionItem),
                    onClick: $event => onCopyToClipboard(item.address)
                  }, [createTextVNode(toDisplayString(item.family) + ": ", 1), createBaseVNode("span", {
                    class: normalizeClass(_ctx.$style.clickable)
                  }, toDisplayString(item.address), 3), createTextVNode(" " + toDisplayString(item.internal ? "(internal)" : ""), 1)], 10, _hoisted_1$2);
                }), 128))], 2)) : createCommentVNode("", true)]),
                _: 1
              });
            };
          }
        }); //#endregion
        //#region src/features/settings/orchestration.ee/components/WorkerNetAccordion.vue?vue&type=style&index=0&lang.module.scss
        accordionItems$1 = "_accordionItems_blrmp_123";
        accordionItem$1 = "_accordionItem_blrmp_123";
        clickable = "_clickable_blrmp_137";
        WorkerNetAccordion_vue_vue_type_style_index_0_lang_module_default = {
          accordionItems: accordionItems$1,
          accordionItem: accordionItem$1,
          clickable
        }; //#endregion
        //#region src/features/settings/orchestration.ee/components/WorkerNetAccordion.vue
        cssModules$4 = {
          "$style": WorkerNetAccordion_vue_vue_type_style_index_0_lang_module_default
        };
        WorkerNetAccordion_default = /* @__PURE__ */__plugin_vue_export_helper_default(WorkerNetAccordion_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$4]]); //#endregion
        //#region src/features/settings/orchestration.ee/components/WorkerChartsAccordion.vue?vue&type=script&setup=true&lang.ts
        WorkerChartsAccordion_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "WorkerChartsAccordion",
          props: {
            workerId: {}
          },
          setup(__props) {
            const props = __props;
            const i18n = useI18n();
            const blankDataSet = (label, color, prefill = 0) => ({
              datasets: [{
                label,
                backgroundColor: color,
                data: prefill ? Array(Math.min(100, prefill)).fill(0) : []
              }],
              labels: Array(Math.min(100, prefill)).fill("")
            });
            const orchestrationStore = useOrchestrationStore();
            const chartRefJobs = ref(void 0);
            const chartRefCPU = ref(void 0);
            const chartRefMemory = ref(void 0);
            const optionsBase = () => ({
              responsive: true,
              maintainAspectRatio: true,
              scales: {
                y: {
                  type: "linear",
                  display: true,
                  position: "left",
                  min: 0,
                  suggestedMax: 5
                }
              }
            });
            const optionsJobs = optionsBase();
            const optionsCPU = optionsBase();
            if (optionsCPU.scales?.y) optionsCPU.scales.y.suggestedMax = 100;
            const maxMemory = memAsGb(orchestrationStore.workers[props.workerId]?.totalMem) ?? 1;
            const optionsMemory = optionsBase();
            if (optionsMemory.scales?.y) optionsMemory.scales.y.suggestedMax = maxMemory;
            const dataJobs = ref(blankDataSet("Job Count", "rgb(255, 111, 92)", 100));
            const dataCPU = ref(blankDataSet("Processor Usage", "rgb(19, 205, 103)", 100));
            const dataMemory = ref(blankDataSet("Memory Usage", "rgb(244, 216, 174)", 100));
            orchestrationStore.$onAction(({
              name,
              store
            }) => {
              if (name === "updateWorkerStatus") {
                const prefillCount = 100 - (store.workersHistory[props.workerId]?.length ?? 0);
                const newDataJobs = blankDataSet("Job Count", "rgb(255, 111, 92)", prefillCount);
                const newDataCPU = blankDataSet("Processor Usage", "rgb(19, 205, 103)", prefillCount);
                const newDataMemory = blankDataSet("Memory Usage", "rgb(244, 216, 174)", prefillCount);
                store.workersHistory[props.workerId]?.forEach(item => {
                  newDataJobs.datasets[0].data.push(item.data.runningJobsSummary.length);
                  newDataJobs.labels?.push(new Date(item.timestamp).toLocaleTimeString());
                  newDataCPU.datasets[0].data.push(averageWorkerLoadFromLoads(item.data.loadAvg));
                  newDataCPU.labels = newDataJobs.labels;
                  newDataMemory.datasets[0].data.push(maxMemory - memAsGb(item.data.freeMem));
                  newDataMemory.labels = newDataJobs.labels;
                });
                dataJobs.value = newDataJobs;
                dataCPU.value = newDataCPU;
                dataMemory.value = newDataMemory;
              }
            });
            return (_ctx, _cache) => {
              return openBlock(), createBlock(WorkerAccordion_default, {
                icon: "list-checks",
                "icon-color": "text-dark",
                "initial-expanded": false
              }, {
                title: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workerList.item.chartsTitle")), 1)]),
                content: withCtx(() => [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.charts)
                }, [createVNode(unref(Chart), {
                  ref_key: "chartRefJobs",
                  ref: chartRefJobs,
                  type: "line",
                  data: dataJobs.value,
                  options: unref(optionsJobs),
                  class: normalizeClass(_ctx.$style.chart)
                }, null, 8, ["data", "options", "class"]), createVNode(unref(Chart), {
                  ref_key: "chartRefCPU",
                  ref: chartRefCPU,
                  type: "line",
                  data: dataCPU.value,
                  options: unref(optionsCPU),
                  class: normalizeClass(_ctx.$style.chart)
                }, null, 8, ["data", "options", "class"]), createVNode(unref(Chart), {
                  ref_key: "chartRefMemory",
                  ref: chartRefMemory,
                  type: "line",
                  data: dataMemory.value,
                  options: unref(optionsMemory),
                  class: normalizeClass(_ctx.$style.chart)
                }, null, 8, ["data", "options", "class"])], 2)]),
                _: 1
              });
            };
          }
        }); //#endregion
        //#region src/features/settings/orchestration.ee/components/WorkerChartsAccordion.vue?vue&type=style&index=0&lang.module.scss
        accordionItems = "_accordionItems_rnm37_123";
        accordionItem = "_accordionItem_rnm37_123";
        charts = "_charts_rnm37_136";
        chart = "_chart_rnm37_136";
        WorkerChartsAccordion_vue_vue_type_style_index_0_lang_module_default = {
          accordionItems,
          accordionItem,
          charts,
          chart
        }; //#endregion
        //#region src/features/settings/orchestration.ee/components/WorkerChartsAccordion.vue
        cssModules$3 = {
          "$style": WorkerChartsAccordion_vue_vue_type_style_index_0_lang_module_default
        };
        WorkerChartsAccordion_default = /* @__PURE__ */__plugin_vue_export_helper_default(WorkerChartsAccordion_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$3]]); //#endregion
        //#region src/features/settings/orchestration.ee/components/WorkerCard.vue?vue&type=script&setup=true&lang.ts
        WorkerCard_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "WorkerCard",
          props: {
            workerId: {}
          },
          setup(__props) {
            let interval;
            const orchestrationStore = useOrchestrationStore();
            const i18n = useI18n();
            const props = __props;
            const secondsSinceLastUpdateString = ref("0");
            const stale$1 = ref(false);
            const worker = computed(() => {
              return orchestrationStore.getWorkerStatus(props.workerId);
            });
            const sortedWorkerInterfaces = computed(() => sortByProperty("family", worker.value?.interfaces.slice() ?? []));
            function upTime(seconds) {
              const days = Math.floor(seconds / (3600 * 24));
              seconds -= days * 3600 * 24;
              const hrs = Math.floor(seconds / 3600);
              seconds -= hrs * 3600;
              const mnts = Math.floor(seconds / 60);
              seconds -= mnts * 60;
              return `${days}d ${hrs}h ${mnts}m ${Math.floor(seconds)}s`;
            }
            onMounted(() => {
              interval = setInterval(() => {
                const lastUpdated = orchestrationStore.getWorkerLastUpdated(props.workerId);
                if (!lastUpdated) return;
                const secondsSinceLastUpdate = Math.ceil((Date.now() - lastUpdated) / 1e3);
                stale$1.value = secondsSinceLastUpdate > 10;
                secondsSinceLastUpdateString.value = secondsSinceLastUpdate.toFixed(0);
              }, 500);
            });
            onBeforeUnmount(() => {
              clearInterval(interval);
            });
            return (_ctx, _cache) => {
              return worker.value ? (openBlock(), createBlock(unref(N8nCard_default), {
                key: 0,
                class: normalizeClass(_ctx.$style.cardLink)
              }, {
                header: withCtx(() => [createVNode(unref(N8nHeading_default), {
                  tag: "h2",
                  bold: "",
                  class: normalizeClass(stale$1.value ? [_ctx.$style.cardHeading, _ctx.$style.stale] : [_ctx.$style.cardHeading]),
                  "data-test-id": "worker-card-name"
                }, {
                  default: withCtx(() => [createTextVNode(" Name: " + toDisplayString(worker.value.senderId) + " (" + toDisplayString(worker.value.hostname) + ") ", 1), _cache[0] || (_cache[0] = createBaseVNode("br", null, null, -1)), createTextVNode(" Average Load: " + toDisplayString(unref(averageWorkerLoadFromLoadsAsString)(worker.value.loadAvg ?? [0])) + " | Free Memory: " + toDisplayString(unref(memAsGb)(worker.value.freeMem).toFixed(2)) + "GB / " + toDisplayString(unref(memAsGb)(worker.value.totalMem).toFixed(2)) + "GB " + toDisplayString(stale$1.value ? " (stale)" : ""), 1)]),
                  _: 1
                }, 8, ["class"])]),
                append: withCtx(() => [createBaseVNode("div", {
                  ref: "cardActions",
                  class: normalizeClass(_ctx.$style.cardActions)
                }, null, 2)]),
                default: withCtx(() => [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.cardDescription)
                }, [createVNode(unref(N8nText_default), {
                  color: "text-light",
                  size: "small",
                  class: normalizeClass(_ctx.$style.container)
                }, {
                  default: withCtx(() => [createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("workerList.item.lastUpdated")) + " " + toDisplayString(secondsSinceLastUpdateString.value) + "s ago | n8n-Version: " + toDisplayString(worker.value.version) + " | Architecture: " + toDisplayString(worker.value.arch) + " ( " + toDisplayString(worker.value.platform) + ") | Uptime: " + toDisplayString(upTime(worker.value.uptime)), 1), createVNode(WorkerJobAccordion_default, {
                    items: worker.value.runningJobsSummary
                  }, null, 8, ["items"]), createVNode(WorkerNetAccordion_default, {
                    items: sortedWorkerInterfaces.value
                  }, null, 8, ["items"]), createVNode(WorkerChartsAccordion_default, {
                    "worker-id": worker.value.senderId
                  }, null, 8, ["worker-id"])]),
                  _: 1
                }, 8, ["class"])], 2)]),
                _: 1
              }, 8, ["class"])) : createCommentVNode("", true);
            };
          }
        }); //#endregion
        //#region src/features/settings/orchestration.ee/components/WorkerCard.vue?vue&type=style&index=0&lang.module.scss
        container = "_container_1ejgw_123";
        cardLink = "_cardLink_1ejgw_127";
        cardHeading = "_cardHeading_1ejgw_137";
        stale = "_stale_1ejgw_143";
        cardDescription = "_cardDescription_1ejgw_147";
        cardActions = "_cardActions_1ejgw_154";
        WorkerCard_vue_vue_type_style_index_0_lang_module_default = {
          container,
          cardLink,
          cardHeading,
          stale,
          cardDescription,
          cardActions
        }; //#endregion
        //#region src/features/settings/orchestration.ee/components/WorkerCard.vue
        cssModules$2 = {
          "$style": WorkerCard_vue_vue_type_style_index_0_lang_module_default
        };
        WorkerCard_default = /* @__PURE__ */__plugin_vue_export_helper_default(WorkerCard_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$2]]); //#endregion
        //#region src/features/settings/orchestration.ee/components/WorkerList.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1$1 = {
          key: 0
        };
        _hoisted_2 = {
          key: 1
        };
        _hoisted_3 = {
          key: 0
        };
        _hoisted_4 = {
          key: 1
        };
        WorkerList_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "WorkerList",
          props: {
            autoRefreshEnabled: {
              type: Boolean,
              default: true
            }
          },
          setup(__props) {
            const router = useRouter();
            const i18n = useI18n();
            const pushConnection = usePushConnection({
              router
            });
            const documentTitle = useDocumentTitle();
            const telemetry = useTelemetry();
            const orchestrationManagerStore = useOrchestrationStore();
            const rootStore = useRootStore();
            const pushStore = usePushConnectionStore();
            const initialStatusReceived = computed(() => orchestrationManagerStore.initialStatusReceived);
            const workerIds = computed(() => Object.keys(orchestrationManagerStore.workers));
            const pageTitle = computed(() => i18n.baseText("workerList.pageTitle"));
            onMounted(() => {
              documentTitle.set(pageTitle.value);
              telemetry.track("User viewed worker view", {
                instance_id: rootStore.instanceId
              });
            });
            onBeforeMount(() => {
              pushConnection.initialize();
              pushStore.pushConnect();
              orchestrationManagerStore.startWorkerStatusPolling();
            });
            onBeforeUnmount(() => {
              orchestrationManagerStore.stopWorkerStatusPolling();
              pushStore.pushDisconnect();
              pushConnection.terminate();
            });
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", null, [createVNode(PushConnectionTracker_default, {
                class: "actions"
              }), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.workerListHeader)
              }, [createVNode(unref(N8nHeading_default), {
                tag: "h1",
                size: "2xlarge"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(pageTitle.value), 1)]),
                _: 1
              })], 2), !initialStatusReceived.value ? (openBlock(), createElementBlock("div", _hoisted_1$1, [createVNode(unref(N8nSpinner_default))])) : (openBlock(), createElementBlock("div", _hoisted_2, [workerIds.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_3, toDisplayString(unref(i18n).baseText("workerList.empty")), 1)) : (openBlock(), createElementBlock("div", _hoisted_4, [(openBlock(true), createElementBlock(Fragment, null, renderList(workerIds.value, workerId => {
                return openBlock(), createElementBlock("div", {
                  key: workerId,
                  class: normalizeClass(_ctx.$style.card)
                }, [createVNode(WorkerCard_default, {
                  "worker-id": workerId,
                  "data-test-id": "worker-card"
                }, null, 8, ["worker-id"])], 2);
              }), 128))]))]))]);
            };
          }
        }); //#endregion
        //#region src/features/settings/orchestration.ee/components/WorkerList.vue?vue&type=style&index=0&lang.module.scss
        workerListHeader = "_workerListHeader_1k6ao_123";
        card = "_card_1k6ao_130";
        tableLoader = "_tableLoader_1k6ao_134";
        WorkerList_vue_vue_type_style_index_0_lang_module_default = {
          workerListHeader,
          card,
          tableLoader
        }; //#endregion
        //#region src/features/settings/orchestration.ee/components/WorkerList.vue
        cssModules$1 = {
          "$style": WorkerList_vue_vue_type_style_index_0_lang_module_default
        };
        WorkerList_default = /* @__PURE__ */__plugin_vue_export_helper_default(WorkerList_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$1]]); //#endregion
        //#region src/features/settings/orchestration.ee/views/WorkerView.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1 = ["href"];
        WorkerView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "WorkerView",
          setup(__props) {
            const settingsStore = useSettingsStore();
            const pageRedirectionHelper = usePageRedirectionHelper();
            const i18n = useI18n();
            const goToUpgrade = () => {
              pageRedirectionHelper.goToUpgrade("worker-view", "upgrade-worker-view");
            };
            return (_ctx, _cache) => {
              return unref(settingsStore).isQueueModeEnabled && unref(settingsStore).isWorkerViewAvailable ? (openBlock(), createBlock(WorkerList_default, {
                key: 0,
                "data-test-id": "worker-view-licensed"
              })) : (openBlock(), createBlock(unref(N8nActionBox_default), {
                key: 1,
                "data-test-id": "worker-view-unlicensed",
                class: normalizeClass(_ctx.$style.actionBox),
                description: unref(i18n).baseText("workerList.actionBox.description"),
                "button-text": unref(i18n).baseText("workerList.actionBox.buttonText"),
                "onClick:button": goToUpgrade
              }, {
                heading: withCtx(() => [createBaseVNode("span", null, toDisplayString(unref(i18n).baseText("workerList.actionBox.title")), 1)]),
                description: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("workerList.actionBox.description")) + " ", 1), createBaseVNode("a", {
                  href: unref(i18n).baseText("workerList.docs.url"),
                  target: "_blank"
                }, toDisplayString(unref(i18n).baseText("workerList.actionBox.description.link")), 9, _hoisted_1)]),
                _: 1
              }, 8, ["class", "description", "button-text"]));
            };
          }
        }); //#endregion
        //#region src/features/settings/orchestration.ee/views/WorkerView.vue?vue&type=style&index=0&lang.module.scss
        actionBox = "_actionBox_185wr_123";
        WorkerView_vue_vue_type_style_index_0_lang_module_default = {
          actionBox
        }; //#endregion
        //#region src/features/settings/orchestration.ee/views/WorkerView.vue
        cssModules = {
          "$style": WorkerView_vue_vue_type_style_index_0_lang_module_default
        };
        _export("default", WorkerView_default = /* @__PURE__ */__plugin_vue_export_helper_default(WorkerView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]])); //#endregion
      }
    };
  });
})();