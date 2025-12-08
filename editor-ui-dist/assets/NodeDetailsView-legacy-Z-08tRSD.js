;
(function () {
  System.register(["./vue.runtime.esm-bundler-legacy--Sn1h8On.js", "./_MapCache-legacy-D8JKoBWh.js", "./src-legacy-Cj9TtJhY.js", "./en-legacy-DJK4SpPN.js", "./preload-helper-legacy-CXRjoQ0T.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-B7Y_hCM_.js", "./icon-legacy-BY20yo2X.js", "./date-picker-legacy-CAbJvocp.js", "./overlay-legacy-CXMgVVsR.js", "./ParameterInputList-legacy-CW4cBIRC.js", "./empty-legacy-ZG0-xpne.js", "./useMessage-legacy-Bq4gN3bH.js", "./col-legacy-CxLSXDZy.js", "./dialog-legacy-rX7N7U_z.js", "./useTelemetry-legacy-CBjbIfKX.js", "./useToast-legacy-Bs0yTjbT.js", "./sanitize-html-legacy-B93rGWi4.js", "./CalendarDate-legacy-BUvNgcoo.js", "./path-browserify-legacy-PZw06cM9.js", "./constants-legacy-DVoQkFTS.js", "./merge-legacy-DGYepJ5X.js", "./assistant.store-legacy-BX8dK0Zr.js", "./_baseOrderBy-legacy-CowL7g45.js", "./dateformat-legacy-C4HUJTCr.js", "./useDebounce-legacy-aeZbWFlx.js", "./useExternalHooks-legacy-m8Ri2ypi.js", "./useStyles-legacy-E8NPEyeD.js", "./chatPanel.store-legacy-BU46NDuy.js", "./npsSurvey.store-legacy-D_PBTjAl.js", "./cloudPlan.store-legacy-C4eAilUn.js", "./templates.store-legacy-DlwNzr1T.js", "./focusPanel.store-legacy-Dw3dYlFJ.js", "./useWorkflowSaving-legacy-BHut1jGA.js", "./retry-legacy-CTwsGM7o.js", "./executions.store-legacy-CpYgwHim.js", "./useRunWorkflow-legacy-CSmvMbOu.js", "./usePinnedData-legacy-IorZJXJD.js", "./nodeCreator.store-legacy-CQKlKmbq.js", "./nodeIcon-legacy-BbcJmy2Y.js", "./useClipboard-legacy-DZ3u10W3.js", "./useCanvasOperations-legacy-Dy7bqKYJ.js", "./folders.store-legacy-BLQLrj83.js", "./NodeIcon-legacy-Dx_hWKEO.js", "./dataTable.store-legacy-DlUze0Nq.js", "./CopyInput-legacy-BWKfk93V.js", "./isEmpty-legacy-o_vvPd34.js", "./NDVEmptyState-legacy-DNQQF-0V.js", "./exports-legacy-COvxY4M6.js", "./externalSecrets.ee.store-legacy-MpKGkvpw.js", "./uniqBy-legacy-gxEYkhsQ.js", "./semver-legacy-BKAPDo98.js", "./CommunityNodeUpdateInfo-legacy-D5IoP0Tc.js", "./RunDataHtml-legacy-BRE8NZRs.js", "./VueMarkdown-legacy-Ht0dL07Q.js", "./Draggable-legacy-CvtfWl1o.js", "./VirtualSchema-legacy-w9iC4W9I.js", "./TextWithHighlights-legacy-BkMBE92Y.js", "./useTelemetryContext-legacy-PxM4E3Ex.js", "./schemaPreview.store-legacy-DYKXPGZ8.js", "./nodeTransforms-legacy-z7fSldVf.js", "./FileSaver.min-legacy-D7uxxng5.js", "./vue-json-pretty-legacy-DXTjoBRT.js", "./dateFormatter-legacy-D5cMfBrw.js", "./useExecutionHelpers-legacy-CtJU_32C.js", "./NodeSettings-legacy-FInMqsWj.js", "./useActions-legacy-DT3Dwvz-.js", "./vue-legacy-DYOFx85F.js", "./useWorkflowActivate-legacy-DyCpKXd2.js", "./core-legacy-Dbm4ZHjr.js", "./useExecutionData-legacy-6TE5ESHE.js", "./AnimatedSpinner-legacy-jmjQlQzV.js", "./useLogsTreeExpand-legacy-DjmalBpw.js", "./core-legacy-CovukW6E.js", "./RunDataParsedAiContent-legacy-rzWWSYl7.js", "./TriggerPanel-legacy-4yypMUjk.js"], function (_export, _context) {
    "use strict";

    var computed, toDisplayString, createElementBlock, createCommentVNode, nextTick, unref, ref, onBeforeUnmount, createVNode, defineComponent, createBlock, onMounted, watch, renderSlot, normalizeStyle, withCtx, openBlock, createTextVNode, createSlots, useSlots, normalizeClass, createBaseVNode, useI18n, useThrottleFn, N8nText_default, N8nIcon_default, N8nResizeWrapper_default, useDeviceSupport, N8nTooltip_default, __plugin_vue_export_helper_default, createEventBus, InputPanel_default, useMessage, ElDialog, useUIStore, dataPinningEventBus, useStorage, useNDVStore, useNodeTypesStore, useWorkflowsStore, useTelemetry, useNodeHelpers, MODAL_CONFIRM, APP_MODALS_ELEMENT_ID, MAIN_NODE_PANEL_WIDTH, jsonParse, NodeConnectionTypes, BASE_NODE_SURVEY_URL, getNodeOutputs, EXECUTABLE_TRIGGER_NODE_TYPES, LOCAL_STORAGE_MAIN_PANEL_RELATIVE_WIDTH, START_NODE_TYPE, STICKY_NODE_TYPE, ndvEventBus, storeToRefs, useExternalHooks, useStyles, usePinnedData, Draggable_default, useTelemetryContext, NodeSettings_default, useWorkflowActivate, OutputPanel_default, NDVFloatingNodes_default, TriggerPanel_default, __vite_style__, PanelDragButton_vue_vue_type_script_setup_true_lang_default, dragContainer, dragButton, leftArrow, rightArrow, visible$1, arrow, grid, PanelDragButton_vue_vue_type_style_index_0_lang_module_default, cssModules$2, PanelDragButton_default, SIDE_MARGIN, SIDE_PANELS_MARGIN, MIN_PANEL_WIDTH, PANEL_WIDTH, PANEL_WIDTH_LARGE, NDVDraggablePanels_vue_vue_type_script_setup_true_lang_default, dataPanel, inputPanel, outputPanel, mainPanel, draggable, mainPanelInner, dragging, dragButtonContainer, visible, NDVDraggablePanels_vue_vue_type_style_index_0_lang_module_default, cssModules$1, NDVDraggablePanels_default, _hoisted_1, NodeDetailsView_vue_vue_type_script_setup_true_lang_default, modalBackground, triggerWarning, backToCanvas, featureRequest, NodeDetailsView_vue_vue_type_style_index_1_lang_module_default, cssModules, NodeDetailsView_default;
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
        createBlock = _vueRuntimeEsmBundlerLegacy003Js.T;
        onMounted = _vueRuntimeEsmBundlerLegacy003Js.Z;
        watch = _vueRuntimeEsmBundlerLegacy003Js._t;
        renderSlot = _vueRuntimeEsmBundlerLegacy003Js.at;
        normalizeStyle = _vueRuntimeEsmBundlerLegacy003Js.bn;
        withCtx = _vueRuntimeEsmBundlerLegacy003Js.bt;
        openBlock = _vueRuntimeEsmBundlerLegacy003Js.et;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        createSlots = _vueRuntimeEsmBundlerLegacy003Js.k;
        useSlots = _vueRuntimeEsmBundlerLegacy003Js.pt;
        normalizeClass = _vueRuntimeEsmBundlerLegacy003Js.vn;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
      }, function (_MapCacheLegacy005Js) {
        useI18n = _MapCacheLegacy005Js.gt;
        useThrottleFn = _MapCacheLegacy005Js.it;
      }, function (_srcLegacy007Js) {
        N8nText_default = _srcLegacy007Js.Vn;
        N8nIcon_default = _srcLegacy007Js.Wn;
        N8nResizeWrapper_default = _srcLegacy007Js.b;
        useDeviceSupport = _srcLegacy007Js.it;
        N8nTooltip_default = _srcLegacy007Js.mt;
      }, function (_enLegacy00bJs) {}, function (_preloadHelperLegacy00dJs) {}, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {
        createEventBus = _truncateLegacy00hJs.x;
      }, function (_iconLegacy00nJs) {}, function (_datePickerLegacy00pJs) {}, function (_overlayLegacy00rJs) {}, function (_ParameterInputListLegacy00tJs) {
        InputPanel_default = _ParameterInputListLegacy00tJs.c;
      }, function (_emptyLegacy00vJs) {}, function (_useMessageLegacy00xJs) {
        useMessage = _useMessageLegacy00xJs.t;
      }, function (_colLegacy00BJs) {}, function (_dialogLegacy00DJs) {
        ElDialog = _dialogLegacy00DJs.t;
      }, function (_useTelemetryLegacy00HJs) {
        useUIStore = _useTelemetryLegacy00HJs.Fi;
        dataPinningEventBus = _useTelemetryLegacy00HJs.Mi;
        useStorage = _useTelemetryLegacy00HJs.Vo;
        useNDVStore = _useTelemetryLegacy00HJs.a;
        useNodeTypesStore = _useTelemetryLegacy00HJs.at;
        useWorkflowsStore = _useTelemetryLegacy00HJs.o;
        useTelemetry = _useTelemetryLegacy00HJs.t;
        useNodeHelpers = _useTelemetryLegacy00HJs.xn;
      }, function (_useToastLegacy00JJs) {}, function (_sanitizeHtmlLegacy00LJs) {}, function (_CalendarDateLegacy00NJs) {}, function (_pathBrowserifyLegacy00RJs) {}, function (_constantsLegacy00TJs) {
        MODAL_CONFIRM = _constantsLegacy00TJs.$o;
        APP_MODALS_ELEMENT_ID = _constantsLegacy00TJs.D;
        MAIN_NODE_PANEL_WIDTH = _constantsLegacy00TJs.K;
        jsonParse = _constantsLegacy00TJs.Oa;
        NodeConnectionTypes = _constantsLegacy00TJs.Wa;
        BASE_NODE_SURVEY_URL = _constantsLegacy00TJs.c;
        getNodeOutputs = _constantsLegacy00TJs.ea;
        EXECUTABLE_TRIGGER_NODE_TYPES = _constantsLegacy00TJs.in;
        LOCAL_STORAGE_MAIN_PANEL_RELATIVE_WIDTH = _constantsLegacy00TJs.ks;
        START_NODE_TYPE = _constantsLegacy00TJs.lr;
        STICKY_NODE_TYPE = _constantsLegacy00TJs.ur;
      }, function (_mergeLegacy00VJs) {}, function (_assistantStoreLegacy00XJs) {
        ndvEventBus = _assistantStoreLegacy00XJs.n;
      }, function (_baseOrderByLegacy00ZJs) {
        storeToRefs = _baseOrderByLegacy00ZJs.A;
      }, function (_dateformatLegacy00$Js) {}, function (_useDebounceLegacy011Js) {}, function (_useExternalHooksLegacy013Js) {
        useExternalHooks = _useExternalHooksLegacy013Js.t;
      }, function (_useStylesLegacy015Js) {
        useStyles = _useStylesLegacy015Js.t;
      }, function (_chatPanelStoreLegacy017Js) {}, function (_npsSurveyStoreLegacy01bJs) {}, function (_cloudPlanStoreLegacy01dJs) {}, function (_templatesStoreLegacy01fJs) {}, function (_focusPanelStoreLegacy01hJs) {}, function (_useWorkflowSavingLegacy01jJs) {}, function (_retryLegacy01lJs) {}, function (_executionsStoreLegacy01nJs) {}, function (_useRunWorkflowLegacy01pJs) {}, function (_usePinnedDataLegacy01rJs) {
        usePinnedData = _usePinnedDataLegacy01rJs.t;
      }, function (_nodeCreatorStoreLegacy01tJs) {}, function (_nodeIconLegacy01vJs) {}, function (_useClipboardLegacy01xJs) {}, function (_useCanvasOperationsLegacy01zJs) {}, function (_foldersStoreLegacy01DJs) {}, function (_NodeIconLegacy01FJs) {}, function (_dataTableStoreLegacy01RJs) {}, function (_CopyInputLegacy01XJs) {}, function (_isEmptyLegacy021Js) {}, function (_NDVEmptyStateLegacy023Js) {}, function (_exportsLegacy025Js) {}, function (_externalSecretsEeStoreLegacy027Js) {}, function (_uniqByLegacy029Js) {}, function (_semverLegacy02bJs) {}, function (_CommunityNodeUpdateInfoLegacy02dJs) {}, function (_RunDataHtmlLegacy02nJs) {}, function (_VueMarkdownLegacy02rJs) {}, function (_DraggableLegacy02tJs) {
        Draggable_default = _DraggableLegacy02tJs.t;
      }, function (_VirtualSchemaLegacy02vJs) {}, function (_TextWithHighlightsLegacy02xJs) {}, function (_useTelemetryContextLegacy02zJs) {
        useTelemetryContext = _useTelemetryContextLegacy02zJs.t;
      }, function (_schemaPreviewStoreLegacy02BJs) {}, function (_nodeTransformsLegacy02DJs) {}, function (_FileSaverMinLegacy02HJs) {}, function (_vueJsonPrettyLegacy02JJs) {}, function (_dateFormatterLegacy02LJs) {}, function (_useExecutionHelpersLegacy02NJs) {}, function (_NodeSettingsLegacy02RJs) {
        NodeSettings_default = _NodeSettingsLegacy02RJs.t;
      }, function (_useActionsLegacy03tJs) {}, function (_vueLegacy03xJs) {}, function (_useWorkflowActivateLegacy03TJs) {
        useWorkflowActivate = _useWorkflowActivateLegacy03TJs.t;
      }, function (_coreLegacy03ZJs) {}, function (_useExecutionDataLegacy04vJs) {}, function (_AnimatedSpinnerLegacy05BJs) {}, function (_useLogsTreeExpandLegacy06RJs) {}, function (_coreLegacy06TJs) {}, function (_RunDataParsedAiContentLegacy079Js) {}, function (_TriggerPanelLegacy07hJs) {
        OutputPanel_default = _TriggerPanelLegacy07hJs.n;
        NDVFloatingNodes_default = _TriggerPanelLegacy07hJs.r;
        TriggerPanel_default = _TriggerPanelLegacy07hJs.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._dragContainer_1i6l1_123 {\n  pointer-events: all;\n}\n._dragButton_1i6l1_127 {\n  background-color: var(--ndv--header--color);\n  width: 64px;\n  height: 21px;\n  border-top-left-radius: var(--radius);\n  border-top-right-radius: var(--radius);\n  cursor: grab;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: visible;\n  position: relative;\n  z-index: 3;\n}\n._dragButton_1i6l1_127:hover ._leftArrow_1i6l1_141,\n._dragButton_1i6l1_127:hover ._rightArrow_1i6l1_142 {\n  visibility: visible;\n}\n._visible_1i6l1_146 {\n  visibility: visible !important;\n}\n._arrow_1i6l1_150 {\n  position: absolute;\n  color: var(--color--background--light-3);\n  font-size: var(--font-size--3xs);\n  visibility: hidden;\n  top: 0;\n}\n._leftArrow_1i6l1_141 {\n  left: -16px;\n}\n._rightArrow_1i6l1_142 {\n  right: -16px;\n}\n._grid_1i6l1_168 > div {\n  display: flex;\n}\n._grid_1i6l1_168 > div:first-child > div {\n  margin-bottom: 2px;\n}\n._grid_1i6l1_168 > div > div {\n  height: 2px;\n  width: 2px;\n  border-radius: 50%;\n  background-color: var(--color--foreground--shade-2);\n  margin-right: 4px;\n}\n._grid_1i6l1_168 > div > div:last-child {\n  margin-right: 0;\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._dataPanel_1xgxx_123 {\n  position: absolute;\n  height: calc(100% - 2 * var(--spacing--lg));\n  position: absolute;\n  top: var(--spacing--lg);\n  z-index: 0;\n  min-width: 280px;\n}\n._inputPanel_1xgxx_132 {\n  left: var(--spacing--lg);\n}\n._inputPanel_1xgxx_132 > * {\n  border-radius: var(--radius--lg) 0 0 var(--radius--lg);\n}\n._outputPanel_1xgxx_140 {\n  right: var(--spacing--lg);\n}\n._outputPanel_1xgxx_140 > * {\n  border-radius: 0 var(--radius--lg) var(--radius--lg) 0;\n}\n._mainPanel_1xgxx_148 {\n  position: absolute;\n  height: 100%;\n}\n._mainPanel_1xgxx_148:hover ._draggable_1xgxx_152 {\n  visibility: visible;\n}\n._mainPanelInner_1xgxx_156 {\n  height: 100%;\n  border: var(--border);\n  border-radius: var(--radius--lg);\n  box-shadow: 0 4px 16px rgba(50, 61, 85, 0.1);\n  overflow: hidden;\n}\n._mainPanelInner_1xgxx_156._dragging_1xgxx_163 {\n  border-color: var(--color--primary);\n  box-shadow: 0 6px 16px rgba(255, 74, 51, 0.15);\n}\n._draggable_1xgxx_152 {\n  visibility: hidden;\n}\n._double-width_1xgxx_172 {\n  left: 90%;\n}\n._dragButtonContainer_1xgxx_176 {\n  position: absolute;\n  top: -12px;\n  width: 100%;\n  height: 12px;\n  display: flex;\n  justify-content: center;\n  pointer-events: none;\n}\n._dragButtonContainer_1xgxx_176 ._draggable_1xgxx_152 {\n  pointer-events: all;\n}\n._dragButtonContainer_1xgxx_176:hover ._draggable_1xgxx_152 {\n  visibility: visible;\n}\n._visible_1xgxx_192 {\n  visibility: visible;\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n.ndv-wrapper {\n  overflow: visible;\n  margin-top: 0;\n}\n.data-display-wrapper {\n  height: 100%;\n  margin-top: var(--spacing--xl) !important;\n  margin-bottom: var(--spacing--xl) !important;\n  width: 100%;\n  background: none;\n  border: none;\n}\n.data-display-wrapper .el-dialog__header {\n  padding: 0 !important;\n}\n.data-display-wrapper .el-dialog__body {\n  padding: 0 !important;\n  height: 100%;\n  min-height: 400px;\n  overflow: visible;\n  border-radius: 8px;\n}\n.data-display {\n  height: 100%;\n  width: 100%;\n  display: flex;\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._modalBackground_1qkc8_123 {\n  height: 100%;\n  width: 100%;\n}\n._triggerWarning_1qkc8_128 {\n  max-width: 180px;\n}\n._backToCanvas_1qkc8_132 {\n  position: fixed;\n  top: var(--spacing--xs);\n  left: var(--spacing--lg);\n  display: flex;\n  align-items: center;\n  gap: var(--spacing--3xs);\n}\n._backToCanvas_1qkc8_132 span {\n  color: var(--ndv--back--color--text);\n}\n._backToCanvas_1qkc8_132:hover {\n  cursor: pointer;\n}\n@media (min-width: 1920px) {\n._backToCanvas_1qkc8_132 {\n    top: var(--spacing--xs);\n    left: var(--spacing--md);\n}\n}\n._featureRequest_1qkc8_153 {\n  position: absolute;\n  bottom: var(--spacing--4xs);\n  left: calc(100% + var(--spacing--sm));\n  color: var(--feature-request--color--text);\n  font-size: var(--font-size--2xs);\n  white-space: nowrap;\n}\n._featureRequest_1qkc8_153 * {\n  margin-right: var(--spacing--3xs);\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/features/ndv/panel/components/PanelDragButton.vue?vue&type=script&setup=true&lang.ts
        PanelDragButton_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "PanelDragButton",
          props: {
            canMoveRight: {
              type: Boolean
            },
            canMoveLeft: {
              type: Boolean
            }
          },
          emits: ["drag", "dragstart", "dragend"],
          setup(__props, {
            emit: __emit
          }) {
            const emit = __emit;
            const onDrag = e => {
              emit("drag", e);
            };
            const onDragEnd = () => {
              emit("dragend");
            };
            const onDragStart = () => {
              emit("dragstart");
            };
            return (_ctx, _cache) => {
              return openBlock(), createBlock(Draggable_default, {
                type: "panel-resize",
                class: normalizeClass(_ctx.$style.dragContainer),
                onDrag,
                onDragstart: onDragStart,
                onDragend: onDragEnd
              }, {
                default: withCtx(({
                  isDragging
                }) => [createBaseVNode("div", {
                  class: normalizeClass({
                    [_ctx.$style.dragButton]: true
                  }),
                  "data-test-id": "panel-drag-button"
                }, [_ctx.canMoveLeft ? (openBlock(), createElementBlock("span", {
                  key: 0,
                  class: normalizeClass({
                    [_ctx.$style.leftArrow]: true,
                    [_ctx.$style.visible]: isDragging
                  })
                }, [createVNode(unref(N8nIcon_default), {
                  icon: "arrow-left"
                })], 2)) : createCommentVNode("", true), _ctx.canMoveRight ? (openBlock(), createElementBlock("span", {
                  key: 1,
                  class: normalizeClass({
                    [_ctx.$style.rightArrow]: true,
                    [_ctx.$style.visible]: isDragging
                  })
                }, [createVNode(unref(N8nIcon_default), {
                  icon: "arrow-right"
                })], 2)) : createCommentVNode("", true), createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.grid)
                }, _cache[0] || (_cache[0] = [createBaseVNode("div", null, [createBaseVNode("div"), createBaseVNode("div"), createBaseVNode("div"), createBaseVNode("div"), createBaseVNode("div")], -1), createBaseVNode("div", null, [createBaseVNode("div"), createBaseVNode("div"), createBaseVNode("div"), createBaseVNode("div"), createBaseVNode("div")], -1)]), 2)], 2)]),
                _: 1
              }, 8, ["class"]);
            };
          }
        }); //#endregion
        //#region src/features/ndv/panel/components/PanelDragButton.vue?vue&type=style&index=0&lang.module.scss
        dragContainer = "_dragContainer_1i6l1_123";
        dragButton = "_dragButton_1i6l1_127";
        leftArrow = "_leftArrow_1i6l1_141 _arrow_1i6l1_150";
        rightArrow = "_rightArrow_1i6l1_142 _arrow_1i6l1_150";
        visible$1 = "_visible_1i6l1_146";
        arrow = "_arrow_1i6l1_150";
        grid = "_grid_1i6l1_168";
        PanelDragButton_vue_vue_type_style_index_0_lang_module_default = {
          dragContainer,
          dragButton,
          leftArrow,
          rightArrow,
          visible: visible$1,
          arrow,
          grid
        }; //#endregion
        //#region src/features/ndv/panel/components/PanelDragButton.vue
        cssModules$2 = {
          "$style": PanelDragButton_vue_vue_type_style_index_0_lang_module_default
        };
        PanelDragButton_default = /* @__PURE__ */__plugin_vue_export_helper_default(PanelDragButton_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$2]]); //#endregion
        //#region src/features/ndv/panel/components/NDVDraggablePanels.vue?vue&type=script&setup=true&lang.ts
        SIDE_MARGIN = 24;
        SIDE_PANELS_MARGIN = 80;
        MIN_PANEL_WIDTH = 310;
        PANEL_WIDTH = 350;
        PANEL_WIDTH_LARGE = 420;
        NDVDraggablePanels_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "NDVDraggablePanels",
          props: {
            isDraggable: {
              type: Boolean
            },
            hideInputAndOutput: {
              type: Boolean
            },
            nodeType: {}
          },
          emits: ["init", "dragstart", "dragend", "switchSelectedNode", "close"],
          setup(__props, {
            emit: __emit
          }) {
            const MIN_WINDOW_WIDTH = 2 * (SIDE_MARGIN + SIDE_PANELS_MARGIN) + MIN_PANEL_WIDTH;
            const initialMainPanelWidth = {
              regular: 390,
              dragless: 390,
              unknown: 390,
              inputless: 390,
              wide: 390 * 2
            };
            const throttledOnResize = useThrottleFn(onResize, 100);
            const ndvStore = useNDVStore();
            const uiStore = useUIStore();
            const props = __props;
            const isDragging = ref(false);
            const initialized = ref(false);
            const containerWidth = ref(uiStore.appGridDimensions.width);
            const emit = __emit;
            const slots = useSlots();
            onMounted(() => {
              if (mainPanelDimensions.value.relativeLeft === 1 && mainPanelDimensions.value.relativeRight === 1) {
                setMainPanelWidth();
                setPositions(getInitialLeftPosition(mainPanelDimensions.value.relativeWidth));
                restorePositionData();
              }
              emit("init", {
                position: mainPanelDimensions.value.relativeLeft
              });
              setTimeout(() => {
                initialized.value = true;
              }, 0);
              ndvEventBus.on("setPositionByName", setPositionByName);
            });
            onBeforeUnmount(() => {
              ndvEventBus.off("setPositionByName", setPositionByName);
            });
            watch(() => uiStore.appGridDimensions, async dimensions => {
              const ndv = document.getElementById("ndv");
              if (ndv) {
                await nextTick();
                const {
                  width: ndvWidth
                } = ndv.getBoundingClientRect();
                containerWidth.value = ndvWidth;
              } else containerWidth.value = dimensions.width;
              const minRelativeWidth = pxToRelativeWidth(MIN_PANEL_WIDTH);
              if (mainPanelDimensions.value.relativeWidth < minRelativeWidth) setMainPanelWidth(minRelativeWidth);
              const isBelowMinLeft = minimumLeftPosition.value > mainPanelDimensions.value.relativeLeft;
              const isMaxRight = maximumRightPosition.value > mainPanelDimensions.value.relativeRight;
              if (dimensions.width > MIN_WINDOW_WIDTH && isBelowMinLeft && isMaxRight) {
                setMainPanelWidth(minRelativeWidth);
                setPositions(getInitialLeftPosition(mainPanelDimensions.value.relativeWidth));
              }
              setPositions(mainPanelDimensions.value.relativeLeft);
            });
            const currentNodePaneType = computed(() => {
              if (!hasInputSlot.value) return "inputless";
              if (!props.isDraggable) return "dragless";
              if (props.nodeType === null) return "unknown";
              return props.nodeType.parameterPane ?? "regular";
            });
            const mainPanelDimensions = computed(() => {
              return ndvStore.mainPanelDimensions[currentNodePaneType.value];
            });
            const calculatedPositions = computed(() => {
              const hasInput = slots.input !== void 0;
              const outputPanelRelativeLeft = mainPanelDimensions.value.relativeLeft + mainPanelDimensions.value.relativeWidth;
              return {
                inputPanelRelativeRight: hasInput ? 1 - outputPanelRelativeLeft + mainPanelDimensions.value.relativeWidth : 1 - pxToRelativeWidth(SIDE_MARGIN),
                outputPanelRelativeLeft
              };
            });
            const outputPanelRelativeTranslate = computed(() => {
              const panelMinLeft = 1 - pxToRelativeWidth(MIN_PANEL_WIDTH + SIDE_MARGIN);
              const currentRelativeLeftDelta = calculatedPositions.value.outputPanelRelativeLeft - panelMinLeft;
              return currentRelativeLeftDelta > 0 ? currentRelativeLeftDelta : 0;
            });
            const supportedResizeDirections = computed(() => {
              const supportedDirections = ["right"];
              if (props.isDraggable) supportedDirections.push("left");
              return supportedDirections;
            });
            const hasInputSlot = computed(() => {
              return slots.input !== void 0;
            });
            const inputPanelMargin = computed(() => pxToRelativeWidth(SIDE_PANELS_MARGIN));
            const minimumLeftPosition = computed(() => {
              if (containerWidth.value < MIN_WINDOW_WIDTH) return pxToRelativeWidth(1);
              if (!hasInputSlot.value) return pxToRelativeWidth(SIDE_MARGIN);
              return pxToRelativeWidth(SIDE_MARGIN + 20) + inputPanelMargin.value;
            });
            const maximumRightPosition = computed(() => {
              if (containerWidth.value < MIN_WINDOW_WIDTH) return pxToRelativeWidth(1);
              return pxToRelativeWidth(SIDE_MARGIN + 20) + inputPanelMargin.value;
            });
            const canMoveLeft = computed(() => {
              return mainPanelDimensions.value.relativeLeft > minimumLeftPosition.value;
            });
            const canMoveRight = computed(() => {
              return mainPanelDimensions.value.relativeRight > maximumRightPosition.value;
            });
            const mainPanelStyles = computed(() => {
              return {
                left: `${relativeWidthToPx(mainPanelDimensions.value.relativeLeft)}px`,
                right: `${relativeWidthToPx(mainPanelDimensions.value.relativeRight)}px`
              };
            });
            const inputPanelStyles = computed(() => {
              return {
                right: `${relativeWidthToPx(calculatedPositions.value.inputPanelRelativeRight)}px`
              };
            });
            const outputPanelStyles = computed(() => {
              return {
                left: `${relativeWidthToPx(calculatedPositions.value.outputPanelRelativeLeft)}px`,
                transform: `translateX(-${relativeWidthToPx(outputPanelRelativeTranslate.value)}px)`
              };
            });
            const hasDoubleWidth = computed(() => {
              return props.nodeType?.parameterPane === "wide";
            });
            const fixedPanelWidth = computed(() => {
              const multiplier = hasDoubleWidth.value ? 2 : 1;
              if (containerWidth.value > 1700) return PANEL_WIDTH_LARGE * multiplier;
              return PANEL_WIDTH * multiplier;
            });
            const onSwitchSelectedNode = node => emit("switchSelectedNode", node);
            function getInitialLeftPosition(width) {
              if (currentNodePaneType.value === "dragless") return pxToRelativeWidth(SIDE_MARGIN + 1 + fixedPanelWidth.value);
              return hasInputSlot.value ? .5 - width / 2 : minimumLeftPosition.value;
            }
            function setMainPanelWidth(relativeWidth) {
              const mainPanelRelativeWidth = relativeWidth || pxToRelativeWidth(initialMainPanelWidth[currentNodePaneType.value]);
              ndvStore.setMainPanelDimensions({
                panelType: currentNodePaneType.value,
                dimensions: {
                  relativeWidth: mainPanelRelativeWidth
                }
              });
            }
            function setPositions(relativeLeft) {
              const mainPanelRelativeLeft = relativeLeft || 1 - calculatedPositions.value.inputPanelRelativeRight;
              const mainPanelRelativeRight = 1 - mainPanelRelativeLeft - mainPanelDimensions.value.relativeWidth;
              const isMaxRight = maximumRightPosition.value > mainPanelRelativeRight;
              const isMinLeft = minimumLeftPosition.value > mainPanelRelativeLeft;
              const isInputless = currentNodePaneType.value === "inputless";
              if (isMinLeft) {
                ndvStore.setMainPanelDimensions({
                  panelType: currentNodePaneType.value,
                  dimensions: {
                    relativeLeft: minimumLeftPosition.value,
                    relativeRight: 1 - mainPanelDimensions.value.relativeWidth - minimumLeftPosition.value
                  }
                });
                return;
              }
              if (isMaxRight) {
                ndvStore.setMainPanelDimensions({
                  panelType: currentNodePaneType.value,
                  dimensions: {
                    relativeLeft: 1 - mainPanelDimensions.value.relativeWidth - maximumRightPosition.value,
                    relativeRight: maximumRightPosition.value
                  }
                });
                return;
              }
              ndvStore.setMainPanelDimensions({
                panelType: currentNodePaneType.value,
                dimensions: {
                  relativeLeft: isInputless ? minimumLeftPosition.value : mainPanelRelativeLeft,
                  relativeRight: mainPanelRelativeRight
                }
              });
            }
            function setPositionByName(position) {
              setPositions({
                minLeft: minimumLeftPosition.value,
                maxRight: maximumRightPosition.value,
                initial: getInitialLeftPosition(mainPanelDimensions.value.relativeWidth)
              }[position]);
            }
            function pxToRelativeWidth(px) {
              return px / containerWidth.value;
            }
            function relativeWidthToPx(relativeWidth) {
              return relativeWidth * containerWidth.value;
            }
            function onResizeEnd() {
              storePositionData();
            }
            function onResizeThrottle(data) {
              if (initialized.value) throttledOnResize(data);
            }
            function onResize({
              direction,
              x,
              width
            }) {
              const relativeDistance = pxToRelativeWidth(x);
              const relativeWidth = pxToRelativeWidth(width);
              if (direction === "left" && relativeDistance <= minimumLeftPosition.value) return;
              if (direction === "right" && 1 - relativeDistance <= maximumRightPosition.value) return;
              if (width <= MIN_PANEL_WIDTH) return;
              setMainPanelWidth(relativeWidth);
              setPositions(direction === "left" ? relativeDistance : mainPanelDimensions.value.relativeLeft);
            }
            function restorePositionData() {
              const storedPanelWidthData = useStorage(`${LOCAL_STORAGE_MAIN_PANEL_RELATIVE_WIDTH}_${currentNodePaneType.value}`).value;
              if (storedPanelWidthData) {
                const parsedWidth = parseFloat(storedPanelWidthData);
                setMainPanelWidth(parsedWidth);
                setPositions(getInitialLeftPosition(parsedWidth));
                return true;
              }
              return false;
            }
            function storePositionData() {
              useStorage(`${LOCAL_STORAGE_MAIN_PANEL_RELATIVE_WIDTH}_${currentNodePaneType.value}`).value = mainPanelDimensions.value.relativeWidth.toString();
            }
            function onDragStart() {
              isDragging.value = true;
              emit("dragstart", {
                position: mainPanelDimensions.value.relativeLeft
              });
            }
            function onDrag(position) {
              setPositions(pxToRelativeWidth(position[0]) - mainPanelDimensions.value.relativeWidth / 2);
            }
            function onDragEnd() {
              setTimeout(() => {
                isDragging.value = false;
                emit("dragend", {
                  windowWidth: containerWidth.value,
                  position: mainPanelDimensions.value.relativeLeft
                });
              }, 0);
              storePositionData();
            }
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", null, [unref(ndvStore).activeNode ? (openBlock(), createBlock(NDVFloatingNodes_default, {
                key: 0,
                "root-node": unref(ndvStore).activeNode,
                onSwitchSelectedNode
              }, null, 8, ["root-node"])) : createCommentVNode("", true), !_ctx.hideInputAndOutput ? (openBlock(), createElementBlock("div", {
                key: 1,
                class: normalizeClass(_ctx.$style.inputPanel),
                style: normalizeStyle(inputPanelStyles.value)
              }, [renderSlot(_ctx.$slots, "input")], 6)) : createCommentVNode("", true), !_ctx.hideInputAndOutput ? (openBlock(), createElementBlock("div", {
                key: 2,
                class: normalizeClass(_ctx.$style.outputPanel),
                style: normalizeStyle(outputPanelStyles.value)
              }, [renderSlot(_ctx.$slots, "output")], 6)) : createCommentVNode("", true), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.mainPanel),
                style: normalizeStyle(mainPanelStyles.value)
              }, [createVNode(unref(N8nResizeWrapper_default), {
                "is-resizing-enabled": currentNodePaneType.value !== "unknown",
                width: relativeWidthToPx(mainPanelDimensions.value.relativeWidth),
                "min-width": MIN_PANEL_WIDTH,
                "grid-size": 20,
                "supported-directions": supportedResizeDirections.value,
                outset: "",
                onResize: onResizeThrottle,
                onResizeend: onResizeEnd
              }, {
                default: withCtx(() => [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.dragButtonContainer)
                }, [!_ctx.hideInputAndOutput && _ctx.isDraggable ? (openBlock(), createBlock(PanelDragButton_default, {
                  key: 0,
                  class: normalizeClass({
                    [_ctx.$style.draggable]: true,
                    [_ctx.$style.visible]: isDragging.value
                  }),
                  "can-move-left": canMoveLeft.value,
                  "can-move-right": canMoveRight.value,
                  onDragstart: onDragStart,
                  onDrag,
                  onDragend: onDragEnd
                }, null, 8, ["class", "can-move-left", "can-move-right"])) : createCommentVNode("", true)], 2), createBaseVNode("div", {
                  class: normalizeClass({
                    [_ctx.$style.mainPanelInner]: true,
                    [_ctx.$style.dragging]: isDragging.value
                  })
                }, [renderSlot(_ctx.$slots, "main")], 2)]),
                _: 3
              }, 8, ["is-resizing-enabled", "width", "supported-directions"])], 6)]);
            };
          }
        }); //#endregion
        //#region src/features/ndv/panel/components/NDVDraggablePanels.vue?vue&type=style&index=0&lang.module.scss
        dataPanel = "_dataPanel_1xgxx_123";
        inputPanel = "_inputPanel_1xgxx_132 _dataPanel_1xgxx_123";
        outputPanel = "_outputPanel_1xgxx_140 _dataPanel_1xgxx_123";
        mainPanel = "_mainPanel_1xgxx_148";
        draggable = "_draggable_1xgxx_152";
        mainPanelInner = "_mainPanelInner_1xgxx_156";
        dragging = "_dragging_1xgxx_163";
        dragButtonContainer = "_dragButtonContainer_1xgxx_176";
        visible = "_visible_1xgxx_192";
        NDVDraggablePanels_vue_vue_type_style_index_0_lang_module_default = {
          dataPanel,
          inputPanel,
          outputPanel,
          mainPanel,
          draggable,
          mainPanelInner,
          dragging,
          "double-width": "_double-width_1xgxx_172",
          dragButtonContainer,
          visible
        }; //#endregion
        //#region src/features/ndv/panel/components/NDVDraggablePanels.vue
        cssModules$1 = {
          "$style": NDVDraggablePanels_vue_vue_type_style_index_0_lang_module_default
        };
        NDVDraggablePanels_default = /* @__PURE__ */__plugin_vue_export_helper_default(NDVDraggablePanels_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$1]]); //#endregion
        //#region src/features/ndv/shared/views/NodeDetailsView.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1 = {
          key: 0,
          ref: "container",
          class: "data-display",
          "data-test-id": "ndv-modal",
          tabindex: "0"
        };
        NodeDetailsView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "NodeDetailsView",
          props: {
            workflowObject: {},
            readOnly: {
              type: Boolean,
              default: false
            },
            renaming: {
              type: Boolean
            },
            isProductionExecutionPreview: {
              type: Boolean,
              default: false
            }
          },
          emits: ["saveKeyboardShortcut", "valueChanged", "switchSelectedNode", "openConnectionNodeCreator", "stopExecution"],
          setup(__props, {
            emit: __emit
          }) {
            const emit = __emit;
            const props = __props;
            const ndvStore = useNDVStore();
            const externalHooks = useExternalHooks();
            const nodeHelpers = useNodeHelpers();
            const {
              activeNode
            } = storeToRefs(ndvStore);
            const pinnedData = usePinnedData(activeNode);
            const workflowActivate = useWorkflowActivate();
            const nodeTypesStore = useNodeTypesStore();
            const workflowsStore = useWorkflowsStore();
            const deviceSupport = useDeviceSupport();
            const telemetry = useTelemetry();
            const telemetryContext = useTelemetryContext({
              view_shown: "ndv"
            });
            const i18n = useI18n();
            const message = useMessage();
            const {
              APP_Z_INDEXES
            } = useStyles();
            const settingsEventBus = createEventBus();
            const runInputIndex = ref(-1);
            const runOutputIndex = computed(() => ndvStore.output.run ?? -1);
            const selectedInput = ref();
            const isLinkingEnabled = ref(true);
            const triggerWaitingWarningEnabled = ref(false);
            const isDragging = ref(false);
            const mainPanelPosition = ref(0);
            const pinDataDiscoveryTooltipVisible = ref(false);
            const avgInputRowHeight = ref(0);
            const avgOutputRowHeight = ref(0);
            const isInputPaneActive = ref(false);
            const isOutputPaneActive = ref(false);
            const isPairedItemHoveringEnabled = ref(true);
            const pushRef = computed(() => ndvStore.pushRef);
            const activeNodeType = computed(() => {
              if (activeNode.value) return nodeTypesStore.getNodeType(activeNode.value.type, activeNode.value.typeVersion);
              return null;
            });
            const showTriggerWaitingWarning = computed(() => triggerWaitingWarningEnabled.value && !!activeNodeType.value && !activeNodeType.value.group.includes("trigger") && workflowsStore.isWorkflowRunning && workflowsStore.executionWaitingForWebhook);
            const workflowRunData = computed(() => {
              if (workflowExecution.value === null) return null;
              const executionData = workflowExecution.value.data;
              if (executionData?.resultData) return executionData.resultData.runData;
              return null;
            });
            const parentNodes = computed(() => {
              if (activeNode.value) return props.workflowObject.getParentNodesByDepth(activeNode.value.name, 1);
              return [];
            });
            const parentNode = computed(() => {
              for (const parent of parentNodes.value) {
                if (workflowsStore?.pinnedWorkflowData?.[parent.name]) return parent;
                if (workflowRunData.value?.[parent.name]) return parent;
              }
              return parentNodes.value[0];
            });
            const inputNodeName = computed(() => {
              if ((activeNode.value && activeNodeType.value ? getNodeOutputs(props.workflowObject, activeNode.value, activeNodeType.value) : []).filter(output => {
                if (typeof output === "string") return output !== NodeConnectionTypes.Main;
                return output.type !== NodeConnectionTypes.Main;
              }).length > 0 && activeNode.value) return props.workflowObject.getChildNodes(activeNode.value.name, "ALL_NON_MAIN")?.[0];
              return selectedInput.value ?? parentNode.value?.name;
            });
            const inputNode = computed(() => {
              if (inputNodeName.value) return workflowsStore.getNodeByName(inputNodeName.value);
              return null;
            });
            const inputSize = computed(() => ndvStore.ndvInputDataWithPinnedData.length);
            const isTriggerNode = computed(() => !!activeNodeType.value && (activeNodeType.value.group.includes("trigger") || activeNodeType.value.name === "n8n-nodes-base.start"));
            const showTriggerPanel = computed(() => {
              const override = !!activeNodeType.value?.triggerPanel;
              if (typeof activeNodeType.value?.triggerPanel === "boolean") return override;
              const isWebhookBasedNode = !!activeNodeType.value?.webhooks?.length;
              const isPollingNode = activeNodeType.value?.polling;
              return !props.readOnly && isTriggerNode.value && (isWebhookBasedNode || isPollingNode || override);
            });
            const isExecutableTriggerNode = computed(() => {
              if (!activeNodeType.value) return false;
              return EXECUTABLE_TRIGGER_NODE_TYPES.includes(activeNodeType.value.name);
            });
            const isActiveStickyNode = computed(() => !!ndvStore.activeNode && ndvStore.activeNode.type === "n8n-nodes-base.stickyNote");
            const workflowExecution = computed(() => workflowsStore.getWorkflowExecution);
            const maxOutputRun = computed(() => {
              if (activeNode.value === null) return 0;
              const runData = workflowRunData.value;
              if (!runData?.[activeNode.value.name]) return 0;
              if (runData[activeNode.value.name].length) return runData[activeNode.value.name].length - 1;
              return 0;
            });
            const outputRun = computed(() => runOutputIndex.value === -1 ? maxOutputRun.value : Math.min(runOutputIndex.value, maxOutputRun.value));
            const maxInputRun = computed(() => {
              if (inputNode.value === null || activeNode.value === null) return 0;
              const workflowNode = props.workflowObject.getNode(activeNode.value.name);
              if (!workflowNode || !activeNodeType.value) return 0;
              const outputs = getNodeOutputs(props.workflowObject, workflowNode, activeNodeType.value);
              let node = inputNode.value;
              const runData = workflowRunData.value;
              if (outputs.some(output => output !== NodeConnectionTypes.Main)) node = activeNode.value;
              if (!node || !runData?.hasOwnProperty(node.name)) return 0;
              if (runData[node.name].length) return runData[node.name].length - 1;
              return 0;
            });
            const connectedCurrentNodeOutputs = computed(() => {
              return parentNodes.value.find(({
                name
              }) => name === inputNodeName.value)?.indicies;
            });
            const inputRun = computed(() => {
              if (isLinkingEnabled.value && maxOutputRun.value === maxInputRun.value) return outputRun.value;
              const currentInputNodeName = inputNodeName.value;
              if (runInputIndex.value === -1 && currentInputNodeName) return connectedCurrentNodeOutputs.value?.map(outputIndex => nodeHelpers.getLastRunIndexWithData(currentInputNodeName, outputIndex)).find(runIndex => runIndex !== -1) ?? maxInputRun.value;
              return Math.min(runInputIndex.value, maxInputRun.value);
            });
            const canLinkRuns = computed(() => maxOutputRun.value > 0 && maxOutputRun.value === maxInputRun.value);
            const linked = computed(() => isLinkingEnabled.value && canLinkRuns.value);
            const featureRequestUrl = computed(() => {
              if (!activeNodeType.value) return "";
              return `${BASE_NODE_SURVEY_URL}${activeNodeType.value.name}`;
            });
            const outputPanelEditMode = computed(() => ndvStore.outputPanelEditMode);
            const isExecutionWaitingForWebhook = computed(() => workflowsStore.executionWaitingForWebhook);
            const blockUi = computed(() => workflowsStore.isWorkflowRunning || isExecutionWaitingForWebhook.value);
            const foreignCredentials = computed(() => nodeHelpers.getForeignCredentialsIfSharingEnabled(activeNode.value?.credentials));
            const hasForeignCredential = computed(() => foreignCredentials.value.length > 0);
            const inputPanelDisplayMode = computed(() => ndvStore.inputPanelDisplayMode);
            const outputPanelDisplayMode = computed(() => ndvStore.outputPanelDisplayMode);
            const setIsTooltipVisible = ({
              isTooltipVisible
            }) => {
              pinDataDiscoveryTooltipVisible.value = isTooltipVisible;
            };
            const onKeyDown = e => {
              if (e.key === "s" && deviceSupport.isCtrlKeyPressed(e)) onSaveWorkflow(e);
            };
            const onSaveWorkflow = e => {
              e.stopPropagation();
              e.preventDefault();
              if (props.readOnly) return;
              emit("saveKeyboardShortcut", e);
            };
            const onInputItemHover = e => {
              if (e === null || !inputNodeName.value || !isPairedItemHoveringEnabled.value) {
                ndvStore.setHoveringItem(null);
                return;
              }
              const item = {
                nodeName: inputNodeName.value,
                runIndex: inputRun.value,
                outputIndex: e.outputIndex,
                itemIndex: e.itemIndex
              };
              ndvStore.setHoveringItem(item);
            };
            const onInputTableMounted = e => {
              avgInputRowHeight.value = e.avgRowHeight;
            };
            const onWorkflowActivate = () => {
              ndvStore.unsetActiveNodeName();
              setTimeout(() => {
                workflowActivate.activateCurrentWorkflow("ndv");
              }, 1e3);
            };
            const onOutputItemHover = e => {
              if (e === null || !activeNode.value || !isPairedItemHoveringEnabled.value) {
                ndvStore.setHoveringItem(null);
                return;
              }
              const item = {
                nodeName: activeNode.value?.name,
                runIndex: outputRun.value,
                outputIndex: e.outputIndex,
                itemIndex: e.itemIndex
              };
              ndvStore.setHoveringItem(item);
            };
            const onFeatureRequestClick = () => {
              window.open(featureRequestUrl.value, "_blank");
              if (activeNode.value) telemetry.track("User clicked ndv link", {
                node_type: activeNode.value.type,
                workflow_id: workflowsStore.workflowId,
                push_ref: pushRef.value,
                pane: NodeConnectionTypes.Main,
                type: "i-wish-this-node-would"
              });
            };
            const onDragEnd = e => {
              isDragging.value = false;
              telemetry.track("User moved parameters pane", {
                window_width: e.windowWidth,
                start_position: mainPanelPosition.value,
                end_position: e.position,
                node_type: activeNodeType.value ? activeNodeType.value.name : "",
                push_ref: pushRef.value,
                workflow_id: workflowsStore.workflowId
              });
              mainPanelPosition.value = e.position;
            };
            const onDragStart = e => {
              isDragging.value = true;
              mainPanelPosition.value = e.position;
            };
            const onPanelsInit = e => {
              mainPanelPosition.value = e.position;
            };
            const onLinkRunToOutput = () => {
              isLinkingEnabled.value = true;
              trackLinking("output");
            };
            const onUnlinkRun = pane => {
              runInputIndex.value = runOutputIndex.value;
              isLinkingEnabled.value = false;
              trackLinking(pane);
            };
            const onNodeExecute = () => {
              setTimeout(() => {
                if (!activeNode.value || !workflowsStore.isWorkflowRunning) return;
                triggerWaitingWarningEnabled.value = true;
              }, 1e3);
            };
            const openSettings = () => {
              settingsEventBus.emit("openSettings");
            };
            const trackLinking = pane => {
              telemetry.track("User changed ndv run linking", {
                node_type: activeNodeType.value ? activeNodeType.value.name : "",
                push_ref: pushRef.value,
                linked: linked.value,
                pane
              });
            };
            const onLinkRunToInput = () => {
              ndvStore.setOutputRunIndex(runInputIndex.value);
              isLinkingEnabled.value = true;
              trackLinking("input");
            };
            const valueChanged = parameterData => {
              emit("valueChanged", parameterData);
            };
            const onSwitchSelectedNode = nodeTypeName => {
              emit("switchSelectedNode", nodeTypeName);
            };
            const onOpenConnectionNodeCreator = (nodeTypeName, connectionType, connectionIndex = 0) => {
              emit("openConnectionNodeCreator", nodeTypeName, connectionType, connectionIndex);
            };
            const close = async () => {
              if (isDragging.value) return;
              if (outputPanelEditMode.value.enabled && activeNode.value) {
                if ((await message.confirm("", i18n.baseText("ndv.pinData.beforeClosing.title"), {
                  confirmButtonText: i18n.baseText("ndv.pinData.beforeClosing.confirm"),
                  cancelButtonText: i18n.baseText("ndv.pinData.beforeClosing.cancel")
                })) === "confirm") {
                  const {
                    value
                  } = outputPanelEditMode.value;
                  try {
                    pinnedData.setData(jsonParse(value), "on-ndv-close-modal");
                  } catch (error) {
                    console.error(error);
                  }
                }
                ndvStore.setOutputPanelEditModeEnabled(false);
              }
              await externalHooks.run("dataDisplay.nodeEditingFinished");
              telemetry.track("User closed node modal", {
                node_type: activeNodeType.value ? activeNodeType.value?.name : "",
                push_ref: pushRef.value,
                workflow_id: workflowsStore.workflowId
              });
              triggerWaitingWarningEnabled.value = false;
              ndvStore.unsetActiveNodeName();
              ndvStore.resetNDVPushRef();
            };
            const trackRunChange = (run, pane) => {
              telemetry.track("User changed ndv run dropdown", {
                push_ref: pushRef.value,
                run_index: run,
                node_type: activeNodeType.value ? activeNodeType.value?.name : "",
                pane
              });
            };
            const onRunOutputIndexChange = run => {
              ndvStore.setOutputRunIndex(run);
              trackRunChange(run, "output");
            };
            const onRunInputIndexChange = run => {
              runInputIndex.value = run;
              if (linked.value) ndvStore.setOutputRunIndex(run);
              trackRunChange(run, "input");
            };
            const onOutputTableMounted = e => {
              avgOutputRowHeight.value = e.avgRowHeight;
            };
            const onInputNodeChange = (value, index) => {
              runInputIndex.value = -1;
              isLinkingEnabled.value = true;
              selectedInput.value = value;
              telemetry.track("User changed ndv input dropdown", {
                node_type: activeNode.value ? activeNode.value.type : "",
                push_ref: pushRef.value,
                workflow_id: workflowsStore.workflowId,
                selection_value: index,
                input_node_type: inputNode.value ? inputNode.value.type : ""
              });
            };
            const onStopExecution = () => {
              emit("stopExecution");
            };
            const activateInputPane = () => {
              isInputPaneActive.value = true;
              isOutputPaneActive.value = false;
            };
            const activateOutputPane = () => {
              isInputPaneActive.value = false;
              isOutputPaneActive.value = true;
            };
            const onSearch = search => {
              isPairedItemHoveringEnabled.value = !search;
            };
            const registerKeyboardListener = () => {
              document.addEventListener("keydown", onKeyDown, true);
            };
            const unregisterKeyboardListener = () => {
              document.removeEventListener("keydown", onKeyDown, true);
            };
            const setSelectedInput = value => {
              selectedInput.value = value;
            };
            const handleChangeDisplayMode = (pane, mode) => {
              ndvStore.setPanelDisplayMode({
                pane,
                mode
              });
            };
            watch(activeNode, (node, oldNode) => {
              if (node && !oldNode) registerKeyboardListener();else if (!node) unregisterKeyboardListener();
              if (node && node.name !== oldNode?.name && !isActiveStickyNode.value) {
                runInputIndex.value = -1;
                ndvStore.setOutputRunIndex(-1);
                isLinkingEnabled.value = true;
                selectedInput.value = void 0;
                triggerWaitingWarningEnabled.value = false;
                avgOutputRowHeight.value = 0;
                avgInputRowHeight.value = 0;
                setTimeout(() => ndvStore.setNDVPushRef(), 0);
                if (!activeNodeType.value) return;
                externalHooks.run("dataDisplay.nodeTypeChanged", {
                  nodeSubtitle: nodeHelpers.getNodeSubtitle(node, activeNodeType.value, props.workflowObject)
                });
                setTimeout(() => {
                  if (activeNode.value) {
                    const outgoingConnections = workflowsStore.outgoingConnectionsByNodeName(activeNode.value?.name);
                    telemetry.track("User opened node modal", {
                      node_id: activeNode.value?.id,
                      node_type: activeNodeType.value ? activeNodeType.value?.name : "",
                      workflow_id: workflowsStore.workflowId,
                      push_ref: pushRef.value,
                      is_editable: !hasForeignCredential.value,
                      parameters_pane_position: mainPanelPosition.value,
                      input_first_connector_runs: maxInputRun.value,
                      output_first_connector_runs: maxOutputRun.value,
                      selected_view_inputs: isTriggerNode.value ? "trigger" : inputPanelDisplayMode.value,
                      selected_view_outputs: outputPanelDisplayMode.value,
                      input_connectors: parentNodes.value.length,
                      output_connectors: outgoingConnections?.main?.length,
                      input_displayed_run_index: inputRun.value,
                      output_displayed_run_index: outputRun.value,
                      data_pinning_tooltip_presented: pinDataDiscoveryTooltipVisible.value,
                      input_displayed_row_height_avg: avgInputRowHeight.value,
                      output_displayed_row_height_avg: avgOutputRowHeight.value,
                      source: telemetryContext.ndv_source?.value ?? "other"
                    });
                  }
                }, 2e3);
              }
              if (window.top && !isActiveStickyNode.value) window.top.postMessage(JSON.stringify({
                command: node ? "openNDV" : "closeNDV"
              }), "*");
            }, {
              immediate: true
            });
            watch(maxOutputRun, () => {
              ndvStore.setOutputRunIndex(-1);
            });
            watch(maxInputRun, () => {
              runInputIndex.value = -1;
            });
            watch(inputNodeName, nodeName => {
              setTimeout(() => {
                ndvStore.setInputNodeName(nodeName);
              }, 0);
            });
            watch(inputRun, inputRun$1 => {
              setTimeout(() => {
                ndvStore.setInputRunIndex(inputRun$1);
              }, 0);
            });
            onMounted(() => {
              dataPinningEventBus.on("data-pinning-discovery", setIsTooltipVisible);
              ndvEventBus.on("updateInputNodeName", setSelectedInput);
            });
            onBeforeUnmount(() => {
              dataPinningEventBus.off("data-pinning-discovery", setIsTooltipVisible);
              ndvEventBus.off("updateInputNodeName", setSelectedInput);
              unregisterKeyboardListener();
            });
            return (_ctx, _cache) => {
              return openBlock(), createBlock(unref(ElDialog), {
                id: "ndv",
                "model-value": (!!unref(activeNode) || _ctx.renaming) && !isActiveStickyNode.value,
                "before-close": close,
                "show-close": false,
                class: "data-display-wrapper ndv-wrapper",
                "overlay-class": "data-display-overlay",
                width: "auto",
                "append-to": `#${unref(APP_MODALS_ELEMENT_ID)}`,
                "data-test-id": "ndv",
                "z-index": unref(APP_Z_INDEXES).NDV
              }, {
                default: withCtx(() => [createVNode(unref(N8nTooltip_default), {
                  placement: "bottom-start",
                  visible: showTriggerWaitingWarning.value,
                  disabled: !showTriggerWaitingWarning.value
                }, {
                  content: withCtx(() => [createBaseVNode("div", {
                    class: normalizeClass(_ctx.$style.triggerWarning)
                  }, toDisplayString(unref(i18n).baseText("ndv.backToCanvas.waitingForTriggerWarning")), 3)]),
                  default: withCtx(() => [createBaseVNode("div", {
                    class: normalizeClass(_ctx.$style.backToCanvas),
                    "data-test-id": "back-to-canvas",
                    onClick: close
                  }, [createVNode(unref(N8nIcon_default), {
                    icon: "arrow-left",
                    color: "text-xlight",
                    size: "medium"
                  }), createVNode(unref(N8nText_default), {
                    color: "text-xlight",
                    size: "medium",
                    bold: true
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("ndv.backToCanvas")), 1)]),
                    _: 1
                  })], 2)]),
                  _: 1
                }, 8, ["visible", "disabled"]), unref(activeNode) ? (openBlock(), createElementBlock("div", _hoisted_1, [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.modalBackground),
                  onClick: close
                }, null, 2), (openBlock(), createBlock(NDVDraggablePanels_default, {
                  key: unref(activeNode).name,
                  "is-trigger-node": isTriggerNode.value,
                  "hide-input-and-output": activeNodeType.value === null,
                  position: isTriggerNode.value && !showTriggerPanel.value ? 0 : void 0,
                  "is-draggable": !isTriggerNode.value,
                  "has-double-width": activeNodeType.value?.parameterPane === "wide",
                  "node-type": activeNodeType.value,
                  onSwitchSelectedNode,
                  onOpenConnectionNodeCreator,
                  onClose: close,
                  onInit: onPanelsInit,
                  onDragstart: onDragStart,
                  onDragend: onDragEnd
                }, createSlots({
                  output: withCtx(() => [createVNode(OutputPanel_default, {
                    "data-test-id": "output-panel",
                    "workflow-object": _ctx.workflowObject,
                    "can-link-runs": canLinkRuns.value,
                    "run-index": outputRun.value,
                    "linked-runs": linked.value,
                    "push-ref": pushRef.value,
                    "is-read-only": _ctx.readOnly || hasForeignCredential.value,
                    "block-u-i": blockUi.value && isTriggerNode.value && !isExecutableTriggerNode.value,
                    "is-production-execution-preview": _ctx.isProductionExecutionPreview,
                    "is-pane-active": isOutputPaneActive.value,
                    "display-mode": outputPanelDisplayMode.value,
                    onActivatePane: activateOutputPane,
                    onLinkRun: onLinkRunToOutput,
                    onUnlinkRun: _cache[2] || (_cache[2] = () => onUnlinkRun("output")),
                    onRunChange: onRunOutputIndexChange,
                    onOpenSettings: openSettings,
                    onTableMounted: onOutputTableMounted,
                    onItemHover: onOutputItemHover,
                    onSearch,
                    onDisplayModeChange: _cache[3] || (_cache[3] = $event => handleChangeDisplayMode("output", $event))
                  }, null, 8, ["workflow-object", "can-link-runs", "run-index", "linked-runs", "push-ref", "is-read-only", "block-u-i", "is-production-execution-preview", "is-pane-active", "display-mode"])]),
                  main: withCtx(() => [createVNode(NodeSettings_default, {
                    "event-bus": unref(settingsEventBus),
                    dragging: isDragging.value,
                    "push-ref": pushRef.value,
                    "foreign-credentials": foreignCredentials.value,
                    "read-only": _ctx.readOnly,
                    "block-u-i": blockUi.value && showTriggerPanel.value,
                    executable: !_ctx.readOnly,
                    "input-size": inputSize.value,
                    onValueChanged: valueChanged,
                    onExecute: onNodeExecute,
                    onStopExecution,
                    onActivate: onWorkflowActivate,
                    onSwitchSelectedNode,
                    onOpenConnectionNodeCreator
                  }, null, 8, ["event-bus", "dragging", "push-ref", "foreign-credentials", "read-only", "block-u-i", "executable", "input-size"]), featureRequestUrl.value ? (openBlock(), createElementBlock("a", {
                    key: 0,
                    class: normalizeClass(_ctx.$style.featureRequest),
                    target: "_blank",
                    onClick: onFeatureRequestClick
                  }, [createVNode(unref(N8nIcon_default), {
                    icon: "lightbulb"
                  }), createTextVNode(" " + toDisplayString(unref(i18n).baseText("ndv.featureRequest")), 1)], 2)) : createCommentVNode("", true)]),
                  _: 2
                }, [showTriggerPanel.value || !isTriggerNode.value ? {
                  name: "input",
                  fn: withCtx(() => [showTriggerPanel.value ? (openBlock(), createBlock(TriggerPanel_default, {
                    key: 0,
                    "node-name": unref(activeNode).name,
                    "push-ref": pushRef.value,
                    onExecute: onNodeExecute,
                    onActivate: onWorkflowActivate
                  }, null, 8, ["node-name", "push-ref"])) : !isTriggerNode.value ? (openBlock(), createBlock(InputPanel_default, {
                    key: 1,
                    "workflow-object": _ctx.workflowObject,
                    "can-link-runs": canLinkRuns.value,
                    "run-index": inputRun.value,
                    "linked-runs": linked.value,
                    "active-node-name": unref(activeNode).name,
                    "current-node-name": inputNodeName.value,
                    "push-ref": pushRef.value,
                    "read-only": _ctx.readOnly || hasForeignCredential.value,
                    "is-production-execution-preview": _ctx.isProductionExecutionPreview,
                    "search-shortcut": isInputPaneActive.value ? "/" : void 0,
                    "display-mode": inputPanelDisplayMode.value,
                    "is-mapping-onboarded": unref(ndvStore).isMappingOnboarded,
                    "focused-mappable-input": unref(ndvStore).focusedMappableInput,
                    onActivatePane: activateInputPane,
                    onLinkRun: onLinkRunToInput,
                    onUnlinkRun: _cache[0] || (_cache[0] = () => onUnlinkRun("input")),
                    onRunChange: onRunInputIndexChange,
                    onOpenSettings: openSettings,
                    onChangeInputNode: onInputNodeChange,
                    onExecute: onNodeExecute,
                    onTableMounted: onInputTableMounted,
                    onItemHover: onInputItemHover,
                    onSearch,
                    onDisplayModeChange: _cache[1] || (_cache[1] = $event => handleChangeDisplayMode("input", $event))
                  }, null, 8, ["workflow-object", "can-link-runs", "run-index", "linked-runs", "active-node-name", "current-node-name", "push-ref", "read-only", "is-production-execution-preview", "search-shortcut", "display-mode", "is-mapping-onboarded", "focused-mappable-input"])) : createCommentVNode("", true)]),
                  key: "0"
                } : void 0]), 1032, ["is-trigger-node", "hide-input-and-output", "position", "is-draggable", "has-double-width", "node-type"]))], 512)) : createCommentVNode("", true)]),
                _: 1
              }, 8, ["model-value", "append-to", "z-index"]);
            };
          }
        }); //#endregion
        //#region src/features/ndv/shared/views/NodeDetailsView.vue?vue&type=style&index=1&lang.module.scss
        modalBackground = "_modalBackground_1qkc8_123";
        triggerWarning = "_triggerWarning_1qkc8_128";
        backToCanvas = "_backToCanvas_1qkc8_132";
        featureRequest = "_featureRequest_1qkc8_153";
        NodeDetailsView_vue_vue_type_style_index_1_lang_module_default = {
          modalBackground,
          triggerWarning,
          backToCanvas,
          featureRequest
        }; //#endregion
        //#region src/features/ndv/shared/views/NodeDetailsView.vue
        cssModules = {
          "$style": NodeDetailsView_vue_vue_type_style_index_1_lang_module_default
        };
        _export("default", NodeDetailsView_default = /* @__PURE__ */__plugin_vue_export_helper_default(NodeDetailsView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules]])); //#endregion
      }
    };
  });
})();