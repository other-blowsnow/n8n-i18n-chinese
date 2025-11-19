;
(function () {
  System.register(["./chunk-legacy-Re9CbdfL.js", "./vue.runtime.esm-bundler-legacy-Bq05oSFs.js", "./_MapCache-legacy-CVC6fg6H.js", "./src-legacy-D3-Bo0sy.js", "./_plugin-vue_export-helper-legacy-DZMI5HPp.js", "./truncate-legacy-Bk9bFklR.js", "./useTelemetry-legacy-BdQlQKwu.js", "./constants-legacy-B0GcWb62.js", "./useRunWorkflow-legacy-6mzz_m9l.js", "./usePinnedData-legacy-rNpwQUsO.js", "./nodeCreator.store-legacy-DazC1kYi.js", "./NodeIcon-legacy-B6aK_5Ny.js", "./CopyInput-legacy-1gKnXvth.js", "./isEmpty-legacy-Doz7ETSg.js", "./NDVEmptyState-legacy-Hez6Mzj_.js", "./VirtualSchema-legacy-9f7FeJ8b.js", "./FileSaver.min-legacy-BTN44Z38.js", "./dateFormatter-legacy-wx3IBOwQ.js", "./useExecutionData-legacy-pAWtPQKq.js", "./useLogsTreeExpand-legacy-zHK_fj8w.js", "./RunDataParsedAiContent-legacy-DFNSgMiY.js"], function (_export, _context) {
    "use strict";

    var __toESM, computed, createElementBlock, createCommentVNode, unref, ref, onBeforeUnmount, createVNode, defineComponent, toDisplayString, createBlock, onMounted, Fragment, normalizeClass, watch, withCtx, openBlock, withModifiers, renderList, createTextVNode, createSlots, Transition, vShow, resolveDirective, createBaseVNode, withDirectives, shallowRef, I18nT, useI18n, N8nInfoAccordion_default, N8nText_default, N8nButton_default, N8nInfoTip_default, N8nHeading_default, N8nSpinner_default, N8nPulse_default, N8nLink_default, N8nTooltip_default, N8nRadioButtons_default, N8nIcon_default, __plugin_vue_export_helper_default, useRouter, createEventBus, parseAiContent, useUIStore, getTriggerNodeServiceName, storeToRefs, injectWorkflowState, formatTokenUsageCount, useNDVStore, usePostHog, useWorkflowHelpers, waitingNodeTooltip, useWorkflowsStore, isTriggerPanelObject, useNodeTypesStore, useTelemetry, CanvasNodeDirtiness, WEBHOOK_NODE_TYPE, NDV_UI_OVERHAUL_EXPERIMENT, CHAT_TRIGGER_NODE_TYPE, FORM_TRIGGER_NODE_TYPE, NodeConnectionTypes, MAX_DISPLAY_DATA_SIZE_LOGS_VIEW, VIEWS, WORKFLOW_SETTINGS_MODAL_KEY, useNodeDirtiness, useNodeType, usePinnedData, require_capitalize, NodeIcon_default, CopyInput_default, NodeErrorView_default, ViewSubExecution_default, RunData_default, NDVEmptyState_default, NodeExecuteButton_default, require_FileSaver_min, convertToDisplayDateComponents, useExecutionData, findLogEntryById, getConsumedTokens, useLogsExecutionData, ConsumedTokensDetails_default, LogsOverviewRows_default, useLogsTreeExpand, getReferencedData, RunDataParsedAiContent_default, __vite_style__, _hoisted_1$3, FloatingNodePosition, NDVFloatingNodes_vue_vue_type_script_setup_true_lang_default, floatingNodes, nodesList, inputSub, outputSub, outputMain, inputMain, connectedNode, v2, NDVFloatingNodes_vue_vue_type_style_index_0_lang_module_default, cssModules$6, NDVFloatingNodes_default, RunInfo_vue_vue_type_script_setup_true_lang_default, tooltipRow, RunInfo_vue_vue_type_style_index_0_lang_module_default, cssModules$5, RunInfo_default, import_capitalize, import_FileSaver_min, AiRunContentBlock_vue_vue_type_script_setup_true_lang_default, block, blockContent, blockContentExpanded, rawSwitch, blockHeader, blockTitle, blockToggle, error, warning, warningState, warningActions, AiRunContentBlock_vue_vue_type_style_index_0_lang_module_default, cssModules$4, AiRunContentBlock_default, _hoisted_1$2, _hoisted_2$1, _hoisted_3$1, RunDataAiContent_vue_vue_type_script_setup_true_lang_default, container$2, nodeIcon, header$1, headerWrap, title$1, meta, tokensUsage, RunDataAiContent_vue_vue_type_style_index_0_lang_module_default, cssModules$3, RunDataAiContent_default, RunDataAi_vue_vue_type_script_setup_true_lang_default, noData, empty, tree, runData$1, container$1, RunDataAi_vue_vue_type_style_index_0_lang_module_default, cssModules$2, RunDataAi_default, _hoisted_1$1, OutputPanel_vue_vue_type_script_setup_true_lang_default, runData, runDataV2, outputTypeSelect, titleSection, titleSectionV2, title, titleV2, noOutputData, link, spinner, OutputPanel_vue_vue_type_style_index_0_lang_module_default, cssModules$1, OutputPanel_default, _hoisted_1, _hoisted_2, _hoisted_3, _hoisted_4, _hoisted_5, _hoisted_6, _hoisted_7, _hoisted_8, TriggerPanel_vue_vue_type_script_setup_true_lang_default, container, header, action, shake, accordion, TriggerPanel_vue_vue_type_style_index_0_lang_module_default, cssModules, TriggerPanel_default;
    return {
      setters: [function (_chunkLegacy001Js) {
        __toESM = _chunkLegacy001Js.o;
      }, function (_vueRuntimeEsmBundlerLegacy003Js) {
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
        withModifiers = _vueRuntimeEsmBundlerLegacy003Js.h;
        renderList = _vueRuntimeEsmBundlerLegacy003Js.it;
        createTextVNode = _vueRuntimeEsmBundlerLegacy003Js.j;
        createSlots = _vueRuntimeEsmBundlerLegacy003Js.k;
        Transition = _vueRuntimeEsmBundlerLegacy003Js.n;
        vShow = _vueRuntimeEsmBundlerLegacy003Js.p;
        resolveDirective = _vueRuntimeEsmBundlerLegacy003Js.st;
        createBaseVNode = _vueRuntimeEsmBundlerLegacy003Js.w;
        withDirectives = _vueRuntimeEsmBundlerLegacy003Js.xt;
        shallowRef = _vueRuntimeEsmBundlerLegacy003Js.zt;
      }, function (_MapCacheLegacy005Js) {
        I18nT = _MapCacheLegacy005Js._t;
        useI18n = _MapCacheLegacy005Js.gt;
      }, function (_srcLegacy007Js) {
        N8nInfoAccordion_default = _srcLegacy007Js.F;
        N8nText_default = _srcLegacy007Js.In;
        N8nButton_default = _srcLegacy007Js.Ln;
        N8nInfoTip_default = _srcLegacy007Js.P;
        N8nHeading_default = _srcLegacy007Js.Pn;
        N8nSpinner_default = _srcLegacy007Js.Rn;
        N8nPulse_default = _srcLegacy007Js.S;
        N8nLink_default = _srcLegacy007Js.mt;
        N8nTooltip_default = _srcLegacy007Js.vt;
        N8nRadioButtons_default = _srcLegacy007Js.x;
        N8nIcon_default = _srcLegacy007Js.zn;
      }, function (_pluginVue_exportHelperLegacy00fJs) {
        __plugin_vue_export_helper_default = _pluginVue_exportHelperLegacy00fJs.t;
      }, function (_truncateLegacy00hJs) {
        useRouter = _truncateLegacy00hJs.b;
        createEventBus = _truncateLegacy00hJs.x;
      }, function (_useTelemetryLegacy00FJs) {
        parseAiContent = _useTelemetryLegacy00FJs.K;
        useUIStore = _useTelemetryLegacy00FJs.Ni;
        getTriggerNodeServiceName = _useTelemetryLegacy00FJs.Qr;
        storeToRefs = _useTelemetryLegacy00FJs.Sc;
        injectWorkflowState = _useTelemetryLegacy00FJs.Sn;
        formatTokenUsageCount = _useTelemetryLegacy00FJs.W;
        useNDVStore = _useTelemetryLegacy00FJs.a;
        usePostHog = _useTelemetryLegacy00FJs.i;
        useWorkflowHelpers = _useTelemetryLegacy00FJs.mn;
        waitingNodeTooltip = _useTelemetryLegacy00FJs.nt;
        useWorkflowsStore = _useTelemetryLegacy00FJs.o;
        isTriggerPanelObject = _useTelemetryLegacy00FJs.pr;
        useNodeTypesStore = _useTelemetryLegacy00FJs.rt;
        useTelemetry = _useTelemetryLegacy00FJs.t;
        CanvasNodeDirtiness = _useTelemetryLegacy00FJs.xr;
      }, function (_constantsLegacy00NJs) {
        WEBHOOK_NODE_TYPE = _constantsLegacy00NJs.On;
        NDV_UI_OVERHAUL_EXPERIMENT = _constantsLegacy00NJs.Ps;
        CHAT_TRIGGER_NODE_TYPE = _constantsLegacy00NJs.Q;
        FORM_TRIGGER_NODE_TYPE = _constantsLegacy00NJs.St;
        NodeConnectionTypes = _constantsLegacy00NJs.ea;
        MAX_DISPLAY_DATA_SIZE_LOGS_VIEW = _constantsLegacy00NJs.gs;
        VIEWS = _constantsLegacy00NJs.mo;
        WORKFLOW_SETTINGS_MODAL_KEY = _constantsLegacy00NJs.qo;
      }, function (_useRunWorkflowLegacy01fJs) {
        useNodeDirtiness = _useRunWorkflowLegacy01fJs.r;
      }, function (_usePinnedDataLegacy01hJs) {
        useNodeType = _usePinnedDataLegacy01hJs.n;
        usePinnedData = _usePinnedDataLegacy01hJs.t;
      }, function (_nodeCreatorStoreLegacy01jJs) {
        require_capitalize = _nodeCreatorStoreLegacy01jJs.y;
      }, function (_NodeIconLegacy01vJs) {
        NodeIcon_default = _NodeIconLegacy01vJs.t;
      }, function (_CopyInputLegacy01NJs) {
        CopyInput_default = _CopyInputLegacy01NJs.t;
      }, function (_isEmptyLegacy01TJs) {
        NodeErrorView_default = _isEmptyLegacy01TJs.a;
        ViewSubExecution_default = _isEmptyLegacy01TJs.i;
        RunData_default = _isEmptyLegacy01TJs.n;
      }, function (_NDVEmptyStateLegacy01VJs) {
        NDVEmptyState_default = _NDVEmptyStateLegacy01VJs.t;
      }, function (_VirtualSchemaLegacy02fJs) {
        NodeExecuteButton_default = _VirtualSchemaLegacy02fJs.n;
      }, function (_FileSaverMinLegacy02rJs) {
        require_FileSaver_min = _FileSaverMinLegacy02rJs.t;
      }, function (_dateFormatterLegacy02zJs) {
        convertToDisplayDateComponents = _dateFormatterLegacy02zJs.n;
      }, function (_useExecutionDataLegacy04bJs) {
        useExecutionData = _useExecutionDataLegacy04bJs.t;
      }, function (_useLogsTreeExpandLegacy06fJs) {
        findLogEntryById = _useLogsTreeExpandLegacy06fJs.c;
        getConsumedTokens = _useLogsTreeExpandLegacy06fJs.d;
        useLogsExecutionData = _useLogsTreeExpandLegacy06fJs.n;
        ConsumedTokensDetails_default = _useLogsTreeExpandLegacy06fJs.o;
        LogsOverviewRows_default = _useLogsTreeExpandLegacy06fJs.r;
        useLogsTreeExpand = _useLogsTreeExpandLegacy06fJs.t;
      }, function (_RunDataParsedAiContentLegacy06zJs) {
        getReferencedData = _RunDataParsedAiContentLegacy06zJs.n;
        RunDataParsedAiContent_default = _RunDataParsedAiContentLegacy06zJs.t;
      }],
      execute: function () {
        __vite_style__ = document.createElement('style');
        __vite_style__.textContent = "/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._floatingNodes_1bfoo_123 {\n  position: absolute;\n  bottom: 0;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 10;\n  pointer-events: none;\n}\n._nodesList_1bfoo_133 {\n  list-style: none;\n  padding: 0;\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  width: min-content;\n  margin: auto;\n  transform-origin: center;\n  gap: var(--spacing--sm);\n  transition: transform 0.2s ease-in-out;\n}\n._nodesList_1bfoo_133._inputSub_1bfoo_147, ._nodesList_1bfoo_133._outputSub_1bfoo_147 {\n  right: 0;\n  left: 0;\n  flex-direction: row;\n}\n._nodesList_1bfoo_133._outputSub_1bfoo_147 {\n  top: 0;\n  transform: translateY(-50%);\n}\n._nodesList_1bfoo_133._inputSub_1bfoo_147 {\n  bottom: 0;\n  transform: translateY(50%);\n}\n._nodesList_1bfoo_133._outputMain_1bfoo_160, ._nodesList_1bfoo_133._inputMain_1bfoo_160 {\n  top: 0;\n  bottom: 0;\n}\n._nodesList_1bfoo_133._outputMain_1bfoo_160 {\n  right: 0;\n  transform: translateX(50%);\n}\n._nodesList_1bfoo_133._inputMain_1bfoo_160 {\n  left: 0;\n  transform: translateX(-50%);\n}\n._connectedNode_1bfoo_173 {\n  border: var(--border);\n  background-color: var(--node--color--background);\n  border-radius: 100%;\n  padding: var(--spacing--sm);\n  cursor: pointer;\n  pointer-events: all;\n  transition: transform 0.2s cubic-bezier(0.19, 1, 0.22, 1);\n  position: relative;\n  transform: scale(0.8);\n  display: flex;\n  justify-self: center;\n  align-self: center;\n}\n._connectedNode_1bfoo_173::after {\n  content: \"\";\n  position: absolute;\n  top: -35%;\n  right: -15%;\n  bottom: -35%;\n  left: -15%;\n  z-index: -1;\n}\n._outputMain_1bfoo_160 ._connectedNode_1bfoo_173, ._inputMain_1bfoo_160 ._connectedNode_1bfoo_173 {\n  border-radius: var(--radius--lg);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n._outputMain_1bfoo_160 ._connectedNode_1bfoo_173:hover {\n  transform: scale(1.2) translateX(-50%);\n}\n._outputSub_1bfoo_147 ._connectedNode_1bfoo_173:hover {\n  transform: scale(1.2) translateY(50%);\n}\n._inputMain_1bfoo_160 ._connectedNode_1bfoo_173:hover {\n  transform: scale(1.2) translateX(50%);\n}\n._inputSub_1bfoo_147 ._connectedNode_1bfoo_173:hover {\n  transform: scale(1.2) translateY(-50%);\n}\n._v2_1bfoo_214 ._connectedNode_1bfoo_173 {\n  padding: var(--spacing--xs);\n}\n._v2_1bfoo_214 ._connectedNode_1bfoo_173::after {\n  display: none;\n}\n._v2_1bfoo_214 ._connectedNode_1bfoo_173:hover {\n  transform: scale(1.1);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._tooltipRow_1uvh5_123 {\n  display: flex;\n  column-gap: var(--spacing--4xs);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._block_1xr6g_123 {\n  padding: var(--spacing--sm) 0 var(--spacing--2xs) var(--spacing--2xs);\n  border: 1px solid var(--color--foreground--tint-1);\n  margin-top: var(--spacing--sm);\n  border-radius: var(--radius);\n}\n:root ._blockContent_1xr6g_130 {\n  height: 0;\n  overflow: hidden;\n}\n:root ._blockContent_1xr6g_130._blockContentExpanded_1xr6g_134 {\n  height: auto;\n}\n._rawSwitch_1xr6g_138 {\n  opacity: 0;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin-left: auto;\n  margin-right: var(--spacing--2xs);\n}\n._block_1xr6g_123:hover ._rawSwitch_1xr6g_138 {\n  opacity: 1;\n}\n._blockHeader_1xr6g_148 {\n  display: flex;\n  gap: var(--spacing--xs);\n  cursor: pointer;\n  /* This hack is needed to make the whole surface of header clickable  */\n  margin: calc(-1 * var(--spacing--xs));\n  padding: var(--spacing--2xs) var(--spacing--xs);\n  align-items: center;\n}\n._blockHeader_1xr6g_148 * {\n  -webkit-user-select: none;\n          user-select: none;\n}\n._blockTitle_1xr6g_161 {\n  font-size: var(--font-size--sm);\n  color: var(--color--text--shade-1);\n  margin: 0;\n  padding-bottom: var(--spacing--4xs);\n}\n._blockToggle_1xr6g_168 {\n  border: none;\n  background: none;\n  padding: 0;\n  color: var(--color--text);\n  margin-top: calc(-1 * var(--spacing--3xs));\n}\n._error_1xr6g_176 {\n  padding: var(--spacing--sm) 0;\n}\n._warning_1xr6g_180 {\n  padding: var(--spacing--sm) var(--spacing--md);\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: var(--spacing--sm);\n}\n._warningState_1xr6g_189 {\n  width: 100%;\n}\n._warningActions_1xr6g_193 {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing--xs);\n  width: 100%;\n  align-items: center;\n}\n._warningActions_1xr6g_193 .n8n-button {\n  min-width: 9rem;\n}\n._container_1ddvo_2 {\n\tpadding: 0 var(--spacing--sm) var(--spacing--sm);\n}\n._nodeIcon_1ddvo_5 {\n\tmargin-top: calc(var(--spacing--3xs) * -1);\n}\n._header_1ddvo_8 {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: var(--spacing--3xs);\n\tmargin-bottom: var(--spacing--sm);\n}\n._headerWrap_1ddvo_14 {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n._title_1ddvo_18 {\n\tdisplay: flex;\n\talign-items: center;\n\tfont-size: var(--font-size--sm);\n\tgap: var(--spacing--3xs);\n\tcolor: var(--color--text--shade-1);\n}\n._meta_1ddvo_25 {\n\tlist-style: none;\n\tdisplay: flex;\n\talign-items: center;\n\tflex-wrap: wrap;\n\tfont-size: var(--font-size--xs);\n& > li:not(:last-child) {\n\t\tborder-right: 1px solid var(--color--text);\n\t\tpadding-right: var(--spacing--3xs);\n}\n& > li:not(:first-child) {\n\t\tpadding-left: var(--spacing--3xs);\n}\n}\n._tokensUsage_1ddvo_41 {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: var(--spacing--3xs);\n}\n/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._noData_owvsu_123 {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  color: var(--color--text--tint-1);\n}\n._empty_owvsu_131 {\n  padding: var(--spacing--lg);\n}\n._tree_owvsu_135 {\n  flex-shrink: 0;\n  flex-grow: 0;\n  width: 30%;\n  min-width: 180px;\n}\n._runData_owvsu_142 {\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n}\n._container_owvsu_148 {\n  height: 100%;\n  padding: 0 var(--spacing--xs);\n  display: flex;\n  gap: var(--spacing--xs);\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n[data-output-type=\"logs\"] [class*=\"itemsCount\"],\n[data-output-type=\"logs\"] [class*=\"displayModes\"] {\n  display: none;\n}\n._runData_w7r0e_128 {\n  background-color: var(--run-data--color--background);\n}\n._runDataV2_w7r0e_132 {\n  background-color: var(--ndvv2--run-data--color--background);\n}\n._outputTypeSelect_w7r0e_136 {\n  margin-bottom: var(--spacing--4xs);\n  width: -moz-fit-content;\n  width: fit-content;\n}\n._titleSection_w7r0e_141 {\n  display: flex;\n  align-items: center;\n}\n._titleSection_w7r0e_141 > * {\n  margin-right: var(--spacing--2xs);\n}\n._titleSectionV2_w7r0e_149 {\n  padding-left: var(--spacing--4xs);\n}\n._title_w7r0e_141 {\n  text-transform: uppercase;\n  color: var(--color--text--tint-1);\n  letter-spacing: 2px;\n  font-weight: var(--font-weight--bold);\n  font-size: var(--font-size--sm);\n}\n._titleV2_w7r0e_161 {\n  letter-spacing: 2px;\n  font-size: var(--font-size--xs);\n}\n._noOutputData_w7r0e_166 {\n  max-width: 180px;\n}\n._noOutputData_w7r0e_166 > *:first-child {\n  margin-bottom: var(--spacing--md);\n}\n._noOutputData_w7r0e_166 > * {\n  margin-bottom: var(--spacing--2xs);\n}\n._link_w7r0e_176 {\n  display: inline;\n  padding: 0;\n  font-size: var(--font-size--sm);\n  font-weight: var(--font-weight--regular);\n}\n._spinner_w7r0e_183 {\n  display: flex;\n  justify-content: center;\n  margin-bottom: var(--ndv--spacing);\n}\n._spinner_w7r0e_183 * {\n  color: var(--color--primary);\n  min-height: 40px;\n  min-width: 40px;\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n._container_6tej3_123 {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background-color: var(--run-data--color--background);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: var(--spacing--sm) var(--spacing--sm) var(--spacing--xl) var(--spacing--sm);\n  text-align: center;\n  overflow: hidden;\n}\n._container_6tej3_123 > * {\n  width: 100%;\n}\n._header_6tej3_140 {\n  margin-bottom: var(--spacing--sm);\n}\n._header_6tej3_140 > * {\n  margin-bottom: var(--spacing--2xs);\n}\n._action_6tej3_147 {\n  margin-bottom: var(--spacing--2xl);\n}\n._shake_6tej3_151 {\n  animation: _shake_6tej3_151 8s infinite;\n}\n@keyframes _shake_6tej3_151 {\n90% {\n    transform: translateX(0);\n}\n92.5% {\n    transform: translateX(6px);\n}\n95% {\n    transform: translateX(-6px);\n}\n97.5% {\n    transform: translateX(6px);\n}\n100% {\n    transform: translateX(0);\n}\n}\n._accordion_6tej3_172 {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n}/* BEM support Func\n -------------------------- */\n/* Transition\n-------------------------- */\n/* Color\n-------------------------- */\n/* Link\n-------------------------- */\n/* Border\n-------------------------- */\n/* Outline\n-------------------------- */\n/* Box shadow\n-------------------------- */\n/* Fill\n-------------------------- */\n/* Typography\n-------------------------- */\n/* z-index\n-------------------------- */\n/* Disable base\n-------------------------- */\n/* Icon\n-------------------------- */\n/* Checkbox\n-------------------------- */\n/* Radio\n-------------------------- */\n/* Select\n-------------------------- */\n/* Alert\n-------------------------- */\n/* MessageBox\n-------------------------- */\n/* Message\n-------------------------- */\n/* Notification\n-------------------------- */\n/* Input\n-------------------------- */\n/* Cascader\n-------------------------- */\n/* Group\n-------------------------- */\n/* Tab\n-------------------------- */\n/* Button\n-------------------------- */\n/* cascader\n-------------------------- */\n/* Switch\n-------------------------- */\n/* Dialog\n-------------------------- */\n/* Table\n-------------------------- */\n/* Pagination\n-------------------------- */\n/* Popup\n-------------------------- */\n/* Popover\n-------------------------- */\n/* Tooltip\n-------------------------- */\n/* Tag\n-------------------------- */\n/* Tree\n-------------------------- */\n/* Dropdown\n-------------------------- */\n/* Badge\n-------------------------- */\n/* Card\n--------------------------*/\n/* Slider\n--------------------------*/\n/* Steps\n--------------------------*/\n/* Menu\n--------------------------*/\n/* Rate\n--------------------------*/\n/* DatePicker\n--------------------------*/\n/* Loading\n--------------------------*/\n/* Scrollbar\n--------------------------*/\n/* Carousel\n--------------------------*/\n/* Collapse\n--------------------------*/\n/* Transfer\n--------------------------*/\n/* Header\n  --------------------------*/\n/* Footer\n--------------------------*/\n/* Main\n--------------------------*/\n/* Timeline\n--------------------------*/\n/* Backtop\n--------------------------*/\n/* Link\n--------------------------*/\n/* Calendar\n--------------------------*/\n/* Form\n-------------------------- */\n/* Avatar\n--------------------------*/\n/* Break-point\n--------------------------*/\n/* Break-points\n -------------------------- */\n/* Scrollbar\n -------------------------- */\n/* Placeholder\n -------------------------- */\n/* BEM\n -------------------------- */\n.fade-enter-active[data-v-d428ffd7],\n.fade-leave-active[data-v-d428ffd7] {\n  transition: opacity 200ms;\n}\n.fade-enter[data-v-d428ffd7],\n.fade-leave-to[data-v-d428ffd7] {\n  opacity: 0;\n}/*$vite$:1*/";
        document.head.appendChild(__vite_style__);
        //#region src/features/ndv/panel/components/NDVFloatingNodes.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1$3 = ["data-node-name", "data-node-placement", "onClick"];
        FloatingNodePosition = /* @__PURE__ */function (FloatingNodePosition$1) {
          FloatingNodePosition$1["top"] = "outputSub";
          FloatingNodePosition$1["right"] = "outputMain";
          FloatingNodePosition$1["left"] = "inputMain";
          return FloatingNodePosition$1;
        }(FloatingNodePosition || {});
        NDVFloatingNodes_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "NDVFloatingNodes",
          props: {
            rootNode: {}
          },
          emits: ["switchSelectedNode"],
          setup(__props, {
            expose: __expose,
            emit: __emit
          }) {
            const props = __props;
            const workflowsStore = useWorkflowsStore();
            const nodeTypesStore = useNodeTypesStore();
            const posthogStore = usePostHog();
            const emit = __emit;
            const isNDVV2 = computed(() => posthogStore.isVariantEnabled(NDV_UI_OVERHAUL_EXPERIMENT.name, NDV_UI_OVERHAUL_EXPERIMENT.variant));
            function moveNodeDirection(direction) {
              const matchedDirectionNode = connectedNodes.value[direction][0];
              if (matchedDirectionNode) emit("switchSelectedNode", matchedDirectionNode.node.name);
            }
            function onKeyDown(e) {
              if (e.shiftKey && e.altKey && (e.ctrlKey || e.metaKey)) {
                const matchingDirection = {
                  ArrowUp: FloatingNodePosition.top,
                  ArrowRight: FloatingNodePosition.right,
                  ArrowLeft: FloatingNodePosition.left
                }[e.key] || null;
                if (matchingDirection) moveNodeDirection(matchingDirection);
              }
            }
            function getINodesFromNames(names) {
              return names.map(name => {
                const node = workflowsStore.getNodeByName(name);
                if (node) {
                  const nodeType = nodeTypesStore.getNodeType(node.type);
                  if (nodeType) return {
                    node,
                    nodeType
                  };
                }
                return null;
              }).filter(n => n !== null);
            }
            const connectedNodes = computed(() => {
              const workflowObject = workflowsStore.workflowObject;
              const rootName = props.rootNode.name;
              return {
                [FloatingNodePosition.top]: getINodesFromNames(workflowObject.getChildNodes(rootName, "ALL_NON_MAIN")),
                [FloatingNodePosition.right]: getINodesFromNames(workflowObject.getChildNodes(rootName, NodeConnectionTypes.Main, 1)).reverse(),
                [FloatingNodePosition.left]: getINodesFromNames(workflowObject.getParentNodes(rootName, NodeConnectionTypes.Main, 1)).reverse()
              };
            });
            const connectionGroups = [FloatingNodePosition.top, FloatingNodePosition.right, FloatingNodePosition.left];
            const tooltipPositionMapper = {
              [FloatingNodePosition.top]: "bottom",
              [FloatingNodePosition.right]: "left",
              [FloatingNodePosition.left]: "right"
            };
            onMounted(() => {
              document.addEventListener("keydown", onKeyDown, true);
            });
            onBeforeUnmount(() => {
              document.removeEventListener("keydown", onKeyDown, true);
            });
            __expose({
              moveNodeDirection
            });
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("aside", {
                class: normalizeClass([_ctx.$style.floatingNodes, {
                  [_ctx.$style.v2]: isNDVV2.value
                }]),
                "data-test-id": "floating-nodes"
              }, [(openBlock(), createElementBlock(Fragment, null, renderList(connectionGroups, connectionGroup => {
                return createBaseVNode("ul", {
                  key: connectionGroup,
                  class: normalizeClass([_ctx.$style.nodesList, _ctx.$style[connectionGroup]])
                }, [(openBlock(true), createElementBlock(Fragment, null, renderList(connectedNodes.value[connectionGroup], ({
                  node,
                  nodeType
                }) => {
                  return openBlock(), createElementBlock(Fragment, null, [node && nodeType ? (openBlock(), createBlock(unref(N8nTooltip_default), {
                    key: node.name,
                    placement: tooltipPositionMapper[connectionGroup],
                    teleported: false,
                    offset: isNDVV2.value ? 16 : 60
                  }, {
                    content: withCtx(() => [createTextVNode(toDisplayString(node.name), 1)]),
                    default: withCtx(() => [createBaseVNode("li", {
                      class: normalizeClass(_ctx.$style.connectedNode),
                      "data-test-id": "floating-node",
                      "data-node-name": node.name,
                      "data-node-placement": connectionGroup,
                      onClick: $event => emit("switchSelectedNode", node.name)
                    }, [createVNode(NodeIcon_default, {
                      "node-type": nodeType,
                      "node-name": node.name,
                      "tooltip-position": tooltipPositionMapper[connectionGroup],
                      size: isNDVV2.value ? 24 : 35,
                      circle: ""
                    }, null, 8, ["node-type", "node-name", "tooltip-position", "size"])], 10, _hoisted_1$3)]),
                    _: 2
                  }, 1032, ["placement", "offset"])) : createCommentVNode("", true)], 64);
                }), 256))], 2);
              }), 64))], 2);
            };
          }
        }); //#endregion
        //#region src/features/ndv/panel/components/NDVFloatingNodes.vue?vue&type=style&index=0&lang.module.scss
        floatingNodes = "_floatingNodes_1bfoo_123";
        nodesList = "_nodesList_1bfoo_133";
        inputSub = "_inputSub_1bfoo_147";
        outputSub = "_outputSub_1bfoo_147";
        outputMain = "_outputMain_1bfoo_160";
        inputMain = "_inputMain_1bfoo_160";
        connectedNode = "_connectedNode_1bfoo_173";
        v2 = "_v2_1bfoo_214";
        NDVFloatingNodes_vue_vue_type_style_index_0_lang_module_default = {
          floatingNodes,
          nodesList,
          inputSub,
          outputSub,
          outputMain,
          inputMain,
          connectedNode,
          v2
        }; //#endregion
        //#region src/features/ndv/panel/components/NDVFloatingNodes.vue
        cssModules$6 = {
          "$style": NDVFloatingNodes_vue_vue_type_style_index_0_lang_module_default
        };
        _export("r", NDVFloatingNodes_default = /* @__PURE__ */__plugin_vue_export_helper_default(NDVFloatingNodes_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$6]])); //#endregion
        //#region src/features/ndv/runData/components/RunInfo.vue?vue&type=script&setup=true&lang.ts
        RunInfo_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "RunInfo",
          props: {
            taskData: {},
            hasStaleData: {
              type: Boolean
            },
            hasPinData: {
              type: Boolean
            }
          },
          setup(__props) {
            const i18n = useI18n();
            const props = __props;
            const runTaskData = computed(() => {
              return props.taskData;
            });
            const theme = computed(() => {
              return props.taskData?.error ? "danger" : "success";
            });
            const runMetadata = computed(() => {
              if (!runTaskData.value) return null;
              const {
                date,
                time
              } = convertToDisplayDateComponents(runTaskData.value.startTime);
              return {
                executionTime: runTaskData.value.executionTime,
                startTime: `${date} at ${time}`
              };
            });
            return (_ctx, _cache) => {
              const _directive_n8n_html = resolveDirective("n8n-html");
              return _ctx.hasStaleData ? (openBlock(), createBlock(unref(N8nInfoTip_default), {
                key: 0,
                theme: "warning-light",
                type: "tooltip",
                "tooltip-placement": "right",
                "data-test-id": "node-run-info-stale"
              }, {
                default: withCtx(() => [withDirectives(createBaseVNode("span", null, null, 512), [[_directive_n8n_html, unref(i18n).baseText(_ctx.hasPinData ? "ndv.output.staleDataWarning.pinData" : "ndv.output.staleDataWarning.regular")]])]),
                _: 1
              })) : runMetadata.value ? (openBlock(), createElementBlock("div", {
                key: 1,
                class: normalizeClass(_ctx.$style.tooltipRow)
              }, [_ctx.taskData?.executionStatus !== "canceled" ? (openBlock(), createBlock(unref(N8nInfoTip_default), {
                key: 0,
                type: "note",
                theme: theme.value,
                "data-test-id": `node-run-status-${theme.value}`,
                size: "large"
              }, null, 8, ["theme", "data-test-id"])) : createCommentVNode("", true), createVNode(unref(N8nInfoTip_default), {
                type: "tooltip",
                theme: "info",
                "data-test-id": `node-run-info`,
                "tooltip-placement": "right"
              }, {
                default: withCtx(() => [createBaseVNode("div", null, [createVNode(unref(N8nText_default), {
                  bold: true,
                  size: "small"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(runTaskData.value?.error ? unref(i18n).baseText("runData.executionStatus.failed") : runTaskData.value?.executionStatus === "canceled" ? unref(i18n).baseText("runData.executionStatus.canceled") : unref(i18n).baseText("runData.executionStatus.success")), 1)]),
                  _: 1
                }), _cache[0] || (_cache[0] = createBaseVNode("br", null, null, -1)), createVNode(unref(N8nText_default), {
                  bold: true,
                  size: "small"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("runData.startTime") + ":"), 1)]),
                  _: 1
                }), createTextVNode(" " + toDisplayString(runMetadata.value.startTime), 1), _cache[1] || (_cache[1] = createBaseVNode("br", null, null, -1)), createVNode(unref(N8nText_default), {
                  bold: true,
                  size: "small"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("runData.executionTime") + ":"), 1)]),
                  _: 1
                }), createTextVNode(" " + toDisplayString(runMetadata.value.executionTime) + " " + toDisplayString(unref(i18n).baseText("runData.ms")), 1)])]),
                _: 1
              })], 2)) : createCommentVNode("", true);
            };
          }
        }); //#endregion
        //#region src/features/ndv/runData/components/RunInfo.vue?vue&type=style&index=0&lang.module.scss
        tooltipRow = "_tooltipRow_1uvh5_123";
        RunInfo_vue_vue_type_style_index_0_lang_module_default = {
          tooltipRow
        }; //#endregion
        //#region src/features/ndv/runData/components/RunInfo.vue
        cssModules$5 = {
          "$style": RunInfo_vue_vue_type_style_index_0_lang_module_default
        };
        RunInfo_default = /* @__PURE__ */__plugin_vue_export_helper_default(RunInfo_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$5]]); //#endregion
        //#region src/features/ndv/runData/components/ai/AiRunContentBlock.vue?vue&type=script&setup=true&lang.ts
        import_capitalize = /* @__PURE__ */__toESM(require_capitalize());
        import_FileSaver_min = /* @__PURE__ */__toESM(require_FileSaver_min());
        AiRunContentBlock_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "AiRunContentBlock",
          props: {
            runData: {},
            error: {}
          },
          setup(__props) {
            const props = __props;
            const i18n = useI18n();
            const isExpanded = ref(getInitialExpandedState());
            const renderType = ref("rendered");
            const dataSize = ref(0);
            const showData = ref(false);
            const dataSizeInMB = computed(() => (dataSize.value / (1024 * 1024)).toFixed(1));
            const parsedRun = computed(() => parseAiContent(props.runData.data ?? [], props.runData.type));
            const contentParsed = computed(() => parsedRun.value.some(item => item.parsedContent?.parsed === true));
            function getInitialExpandedState() {
              return !{
                input: [NodeConnectionTypes.AiDocument, NodeConnectionTypes.AiTextSplitter],
                output: [NodeConnectionTypes.AiDocument, NodeConnectionTypes.AiEmbedding, NodeConnectionTypes.AiTextSplitter, NodeConnectionTypes.AiVectorStore]
              }[props.runData.inOut].includes(props.runData.type);
            }
            function onBlockHeaderClick() {
              isExpanded.value = !isExpanded.value;
            }
            function onRenderTypeChange(value) {
              renderType.value = value;
            }
            function updateShowData() {
              showData.value = dataSize.value < MAX_DISPLAY_DATA_SIZE_LOGS_VIEW;
            }
            function refreshDataSize() {
              showData.value = false;
              dataSize.value = new Blob([JSON.stringify(props.runData.data)]).size;
              updateShowData();
            }
            function onShowDataAnyway() {
              showData.value = true;
            }
            function downloadJsonData() {
              const fileName = props.runData.inOut === "input" ? "input_data" : "output_data";
              (0, import_FileSaver_min.saveAs)(new Blob([JSON.stringify(props.runData.data, null, 2)], {
                type: "application/json"
              }), `${fileName}.json`);
            }
            onMounted(() => {
              refreshDataSize();
            });
            watch(() => props.runData.data, () => {
              refreshDataSize();
            });
            return (_ctx, _cache) => {
              const _directive_n8n_html = resolveDirective("n8n-html");
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(_ctx.$style.block)
              }, [createBaseVNode("header", {
                class: normalizeClass(_ctx.$style.blockHeader),
                onClick: onBlockHeaderClick
              }, [createBaseVNode("button", {
                class: normalizeClass(_ctx.$style.blockToggle)
              }, [createVNode(unref(N8nIcon_default), {
                icon: isExpanded.value ? "chevron-down" : "chevron-right",
                size: "large"
              }, null, 8, ["icon"])], 2), createBaseVNode("p", {
                class: normalizeClass(_ctx.$style.blockTitle)
              }, toDisplayString(unref(import_capitalize.default)(_ctx.runData.inOut)), 3), contentParsed.value && !_ctx.error && isExpanded.value ? (openBlock(), createBlock(unref(N8nRadioButtons_default), {
                key: 0,
                size: "small",
                "model-value": renderType.value,
                class: normalizeClass(_ctx.$style.rawSwitch),
                options: [{
                  label: "Rendered",
                  value: "rendered"
                }, {
                  label: "JSON",
                  value: "json"
                }],
                "onUpdate:modelValue": onRenderTypeChange
              }, null, 8, ["model-value", "class"])) : createCommentVNode("", true)], 2), createBaseVNode("main", {
                class: normalizeClass({
                  [_ctx.$style.blockContent]: true,
                  [_ctx.$style.blockContentExpanded]: isExpanded.value
                })
              }, [_ctx.error ? (openBlock(), createBlock(NodeErrorView_default, {
                key: 0,
                error: _ctx.error,
                class: normalizeClass(_ctx.$style.error),
                "show-details": ""
              }, null, 8, ["error", "class"])) : showData.value ? (openBlock(), createBlock(RunDataParsedAiContent_default, {
                key: 1,
                data: _ctx.runData.data,
                type: _ctx.runData.type,
                content: parsedRun.value,
                "render-type": renderType.value
              }, null, 8, ["data", "type", "content", "render-type"])) : (openBlock(), createElementBlock("section", {
                key: 2,
                class: normalizeClass(_ctx.$style.warning)
              }, [createVNode(NDVEmptyState_default, {
                title: unref(i18n).baseText("ndv.output.tooMuchData.title"),
                class: normalizeClass(_ctx.$style.warningState)
              }, {
                default: withCtx(() => [withDirectives(createBaseVNode("span", null, null, 512), [[_directive_n8n_html, unref(i18n).baseText("ndv.output.logs.tooMuchData.message", {
                  interpolate: {
                    size: dataSizeInMB.value,
                    inOut: _ctx.runData.inOut
                  }
                })]])]),
                _: 1
              }, 8, ["title", "class"]), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.warningActions)
              }, [createVNode(unref(N8nButton_default), {
                outline: "",
                size: "small",
                label: unref(i18n).baseText("ndv.output.tooMuchData.showDataAnyway"),
                onClick: withModifiers(onShowDataAnyway, ["stop"])
              }, null, 8, ["label"]), createVNode(unref(N8nButton_default), {
                size: "small",
                label: unref(i18n).baseText("runData.downloadBinaryData"),
                onClick: withModifiers(downloadJsonData, ["stop"])
              }, null, 8, ["label"])], 2)], 2))], 2)], 2);
            };
          }
        }); //#endregion
        //#region src/features/ndv/runData/components/ai/AiRunContentBlock.vue?vue&type=style&index=0&lang.module.scss
        block = "_block_1xr6g_123";
        blockContent = "_blockContent_1xr6g_130";
        blockContentExpanded = "_blockContentExpanded_1xr6g_134";
        rawSwitch = "_rawSwitch_1xr6g_138";
        blockHeader = "_blockHeader_1xr6g_148";
        blockTitle = "_blockTitle_1xr6g_161";
        blockToggle = "_blockToggle_1xr6g_168";
        error = "_error_1xr6g_176";
        warning = "_warning_1xr6g_180";
        warningState = "_warningState_1xr6g_189";
        warningActions = "_warningActions_1xr6g_193";
        AiRunContentBlock_vue_vue_type_style_index_0_lang_module_default = {
          block,
          blockContent,
          blockContentExpanded,
          rawSwitch,
          blockHeader,
          blockTitle,
          blockToggle,
          error,
          warning,
          warningState,
          warningActions
        }; //#endregion
        //#region src/features/ndv/runData/components/ai/AiRunContentBlock.vue
        cssModules$4 = {
          "$style": AiRunContentBlock_vue_vue_type_style_index_0_lang_module_default
        };
        AiRunContentBlock_default = /* @__PURE__ */__plugin_vue_export_helper_default(AiRunContentBlock_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$4]]); //#endregion
        //#region src/features/ndv/runData/components/ai/RunDataAiContent.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1$2 = {
          key: 0
        };
        _hoisted_2$1 = {
          key: 1
        };
        _hoisted_3$1 = {
          key: 2
        };
        RunDataAiContent_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "RunDataAiContent",
          props: {
            inputData: {}
          },
          setup(__props) {
            const props = __props;
            const data = computed(() => props.inputData.runData ? getReferencedData(props.inputData.runData) : void 0);
            const nodeTypesStore = useNodeTypesStore();
            const i18n = useI18n();
            const consumedTokensSum = computed(() => getConsumedTokens(outputRun.value?.data ?? []));
            function extractRunMeta(run) {
              const uiNode = props.inputData.node;
              const nodeType = nodeTypesStore.getNodeType(uiNode?.type ?? "");
              return {
                startTimeMs: run.metadata.startTime,
                executionTimeMs: run.metadata.executionTime,
                node: nodeType,
                type: run.inOut,
                connectionType: run.type,
                subExecution: run.metadata?.subExecution
              };
            }
            const outputRun = computed(() => {
              return data.value?.find(r => r.inOut === "output");
            });
            const runMeta = computed(() => {
              if (outputRun.value === void 0) return;
              return extractRunMeta(outputRun.value);
            });
            const outputError = computed(() => props.inputData.runData?.error);
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(_ctx.$style.container)
              }, [createBaseVNode("header", {
                class: normalizeClass(_ctx.$style.header)
              }, [runMeta.value?.node ? (openBlock(), createBlock(NodeIcon_default, {
                key: 0,
                class: normalizeClass(_ctx.$style.nodeIcon),
                "node-type": runMeta.value.node,
                size: 20
              }, null, 8, ["class", "node-type"])) : createCommentVNode("", true), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.headerWrap)
              }, [createBaseVNode("p", {
                class: normalizeClass(_ctx.$style.title)
              }, toDisplayString(_ctx.inputData.node.name), 3), createBaseVNode("ul", {
                class: normalizeClass(_ctx.$style.meta)
              }, [runMeta.value?.startTimeMs ? (openBlock(), createElementBlock("li", _hoisted_1$2, toDisplayString(runMeta.value?.executionTimeMs) + "ms", 1)) : createCommentVNode("", true), runMeta.value?.startTimeMs ? (openBlock(), createElementBlock("li", _hoisted_2$1, [createVNode(unref(N8nTooltip_default), null, {
                content: withCtx(() => [createTextVNode(toDisplayString(new Date(runMeta.value?.startTimeMs).toLocaleString()), 1)]),
                default: withCtx(() => [createTextVNode(" " + toDisplayString(unref(i18n).baseText("runData.aiContentBlock.startedAt", {
                  interpolate: {
                    startTime: new Date(runMeta.value?.startTimeMs).toLocaleTimeString()
                  }
                })), 1)]),
                _: 1
              })])) : createCommentVNode("", true), runMeta.value ? (openBlock(), createElementBlock("li", _hoisted_3$1, [createVNode(ViewSubExecution_default, {
                "task-metadata": runMeta.value,
                "display-mode": "ai",
                inline: true
              }, null, 8, ["task-metadata"])])) : createCommentVNode("", true), (consumedTokensSum.value?.totalTokens ?? 0) > 0 ? (openBlock(), createElementBlock("li", {
                key: 3,
                class: normalizeClass(_ctx.$style.tokensUsage)
              }, [createTextVNode(toDisplayString(unref(i18n).baseText("runData.aiContentBlock.tokens", {
                interpolate: {
                  count: unref(formatTokenUsageCount)(consumedTokensSum.value, "total")
                }
              })) + " ", 1), createVNode(unref(N8nInfoTip_default), {
                type: "tooltip",
                theme: "info-light",
                "tooltip-placement": "right"
              }, {
                default: withCtx(() => [createVNode(ConsumedTokensDetails_default, {
                  "consumed-tokens": consumedTokensSum.value
                }, null, 8, ["consumed-tokens"])]),
                _: 1
              })], 2)) : createCommentVNode("", true)], 2)], 2)], 2), (openBlock(true), createElementBlock(Fragment, null, renderList(data.value ?? [], (run, index) => {
                return openBlock(), createElementBlock("main", {
                  key: index,
                  class: normalizeClass(_ctx.$style.content)
                }, [createVNode(AiRunContentBlock_default, {
                  "run-data": run,
                  error: run.inOut === "output" ? outputError.value : void 0
                }, null, 8, ["run-data", "error"])], 2);
              }), 128))], 2);
            };
          }
        }); //#endregion
        //#region src/features/ndv/runData/components/ai/RunDataAiContent.vue?vue&type=style&index=0&lang.module.css
        container$2 = "_container_1ddvo_2";
        nodeIcon = "_nodeIcon_1ddvo_5";
        header$1 = "_header_1ddvo_8";
        headerWrap = "_headerWrap_1ddvo_14";
        title$1 = "_title_1ddvo_18";
        meta = "_meta_1ddvo_25";
        tokensUsage = "_tokensUsage_1ddvo_41";
        RunDataAiContent_vue_vue_type_style_index_0_lang_module_default = {
          container: container$2,
          nodeIcon,
          header: header$1,
          headerWrap,
          title: title$1,
          meta,
          tokensUsage
        }; //#endregion
        //#region src/features/ndv/runData/components/ai/RunDataAiContent.vue
        cssModules$3 = {
          "$style": RunDataAiContent_vue_vue_type_style_index_0_lang_module_default
        };
        RunDataAiContent_default = /* @__PURE__ */__plugin_vue_export_helper_default(RunDataAiContent_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$3]]); //#endregion
        //#region src/features/ndv/runData/components/ai/RunDataAi.vue?vue&type=script&setup=true&lang.ts
        RunDataAi_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "RunDataAi",
          props: {
            node: {},
            runIndex: {
              default: 0
            }
          },
          setup(__props) {
            const i18n = useI18n();
            const {
              entries,
              execution,
              latestNodeNameById,
              loadSubExecution
            } = useLogsExecutionData({
              filter: computed(() => ({
                rootNodeId: __props.node.id,
                rootNodeRunIndex: __props.runIndex
              }))
            });
            const {
              flatLogEntries,
              toggleExpanded
            } = useLogsTreeExpand(entries, loadSubExecution);
            const selected = shallowRef();
            function select(entry) {
              selected.value = entry?.node.id === __props.node.id ? void 0 : entry;
            }
            watch(entries, latestEntries => {
              if (!selected.value || findLogEntryById(selected.value.id, latestEntries) === void 0) selected.value = latestEntries[0]?.children[0];
            }, {
              immediate: true
            });
            return (_ctx, _cache) => {
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(_ctx.$style.container)
              }, [unref(flatLogEntries).length > 0 ? (openBlock(), createElementBlock(Fragment, {
                key: 0
              }, [createVNode(LogsOverviewRows_default, {
                class: normalizeClass(_ctx.$style.tree),
                "is-compact": "",
                "is-read-only": "",
                "flat-log-entries": unref(flatLogEntries),
                "should-show-token-count-column": false,
                "latest-node-info": unref(latestNodeNameById),
                selected: selected.value,
                "can-open-ndv": false,
                execution: unref(execution),
                onToggleExpanded: unref(toggleExpanded),
                onSelect: select
              }, null, 8, ["class", "flat-log-entries", "latest-node-info", "selected", "execution", "onToggleExpanded"]), createBaseVNode("div", {
                class: normalizeClass(_ctx.$style.runData)
              }, [selected.value ? (openBlock(), createBlock(RunDataAiContent_default, {
                key: 0,
                "input-data": selected.value
              }, null, 8, ["input-data"])) : (openBlock(), createElementBlock("div", {
                key: 1,
                class: normalizeClass(_ctx.$style.empty)
              }, [createVNode(unref(N8nText_default), {
                size: "large"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("ndv.output.ai.empty", {
                  interpolate: {
                    node: _ctx.node.name
                  }
                })), 1)]),
                _: 1
              })], 2))], 2)], 64)) : (openBlock(), createElementBlock("div", {
                key: 1,
                class: normalizeClass(_ctx.$style.noData)
              }, toDisplayString(unref(i18n).baseText("ndv.output.ai.waiting")), 3))], 2);
            };
          }
        }); //#endregion
        //#region src/features/ndv/runData/components/ai/RunDataAi.vue?vue&type=style&index=0&lang.module.scss
        noData = "_noData_owvsu_123";
        empty = "_empty_owvsu_131";
        tree = "_tree_owvsu_135";
        runData$1 = "_runData_owvsu_142";
        container$1 = "_container_owvsu_148";
        RunDataAi_vue_vue_type_style_index_0_lang_module_default = {
          noData,
          empty,
          tree,
          runData: runData$1,
          container: container$1
        }; //#endregion
        //#region src/features/ndv/runData/components/ai/RunDataAi.vue
        cssModules$2 = {
          "$style": RunDataAi_vue_vue_type_style_index_0_lang_module_default
        };
        RunDataAi_default = /* @__PURE__ */__plugin_vue_export_helper_default(RunDataAi_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$2]]); //#endregion
        //#region src/features/ndv/panel/components/OutputPanel.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1$1 = {
          key: 0,
          "data-test-id": "ndv-output-waiting"
        };
        OutputPanel_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "OutputPanel",
          props: {
            workflowObject: {},
            runIndex: {},
            isReadOnly: {
              type: Boolean
            },
            linkedRuns: {
              type: Boolean
            },
            canLinkRuns: {
              type: Boolean
            },
            pushRef: {},
            blockUI: {
              type: Boolean,
              default: false
            },
            isProductionExecutionPreview: {
              type: Boolean,
              default: false
            },
            isPaneActive: {
              type: Boolean,
              default: false
            },
            displayMode: {}
          },
          emits: ["linkRun", "unlinkRun", "runChange", "activatePane", "tableMounted", "itemHover", "search", "openSettings", "execute", "displayModeChange"],
          setup(__props, {
            emit: __emit
          }) {
            const OUTPUT_TYPE = {
              REGULAR: "regular",
              LOGS: "logs"
            };
            const props = __props;
            const emit = __emit;
            const ndvStore = useNDVStore();
            const nodeTypesStore = useNodeTypesStore();
            const workflowsStore = useWorkflowsStore();
            const workflowState = injectWorkflowState();
            const posthogStore = usePostHog();
            const telemetry = useTelemetry();
            const i18n = useI18n();
            const {
              activeNode
            } = storeToRefs(ndvStore);
            const {
              dirtinessByName
            } = useNodeDirtiness();
            const {
              isSubNodeType
            } = useNodeType({
              node: activeNode
            });
            const pinnedData = usePinnedData(activeNode, {
              runIndex: props.runIndex,
              displayMode: props.displayMode
            });
            const outputMode = ref(OUTPUT_TYPE.REGULAR);
            const outputTypes = ref([{
              label: i18n.baseText("ndv.output.outType.regular"),
              value: OUTPUT_TYPE.REGULAR
            }, {
              label: i18n.baseText("ndv.output.outType.logs"),
              value: OUTPUT_TYPE.LOGS
            }]);
            const runDataRef = ref();
            const collapsingColumnName = ref(null);
            const node = computed(() => {
              return ndvStore.activeNode ?? void 0;
            });
            const {
              hasNodeRun,
              workflowExecution,
              workflowRunData
            } = useExecutionData({
              node
            });
            const isTriggerNode = computed(() => {
              return !!node.value && nodeTypesStore.isTriggerNode(node.value.type);
            });
            const hasAiMetadata = computed(() => {
              if (isNodeRunning.value || !workflowRunData.value) return false;
              if (node.value) {
                const resultData = props.workflowObject.getParentNodes(node.value.name, "ALL_NON_MAIN").map(workflowsStore.getWorkflowResultDataByNodeName);
                return resultData && Array.isArray(resultData) && resultData.length > 0;
              }
              return false;
            });
            const hasError = computed(() => Boolean(workflowRunData.value && node.value && workflowRunData.value[node.value.name]?.[props.runIndex]?.error));
            const defaultOutputMode = computed(() => {
              return hasError.value && hasAiMetadata.value ? OUTPUT_TYPE.LOGS : OUTPUT_TYPE.REGULAR;
            });
            const isNodeRunning = computed(() => {
              return workflowRunning.value && !!node.value && workflowState.executingNode.isNodeExecuting(node.value.name);
            });
            const workflowRunning = computed(() => workflowsStore.isWorkflowRunning);
            const runTaskData = computed(() => {
              if (!node.value || workflowExecution.value === null) return null;
              const runData$2 = workflowRunData.value;
              if (!runData$2?.hasOwnProperty(node.value.name)) return null;
              if (runData$2[node.value.name].length <= props.runIndex) return null;
              return runData$2[node.value.name][props.runIndex];
            });
            const runsCount = computed(() => {
              if (node.value === null) return 0;
              const runData$2 = workflowRunData.value;
              if (runData$2 === null || node.value && !runData$2.hasOwnProperty(node.value.name)) return 0;
              if (node.value && runData$2[node.value.name].length) return runData$2[node.value.name].length;
              return 0;
            });
            const staleData = computed(() => {
              if (!node.value) return false;
              return dirtinessByName.value[node.value.name] === CanvasNodeDirtiness.PARAMETERS_UPDATED;
            });
            const outputPanelEditMode = computed(() => {
              return ndvStore.outputPanelEditMode;
            });
            const canPinData = computed(() => {
              return pinnedData.isValidNodeType.value && !props.isReadOnly;
            });
            const allToolsWereUnusedNotice = computed(() => {
              if (!node.value || runsCount.value === 0 || hasError.value) return void 0;
              if (pinnedData.hasData.value) return void 0;
              const toolsAvailable = props.workflowObject.getParentNodes(node.value.name, NodeConnectionTypes.AiTool, 1);
              const toolsUsedInLatestRun = toolsAvailable.filter(tool => !!workflowRunData.value?.[tool]?.[props.runIndex]);
              if (toolsAvailable.length > 0 && toolsUsedInLatestRun.length === 0) return i18n.baseText("ndv.output.noToolUsedInfo");else return;
            });
            const isNDVV2 = computed(() => posthogStore.isVariantEnabled(NDV_UI_OVERHAUL_EXPERIMENT.name, NDV_UI_OVERHAUL_EXPERIMENT.variant));
            const insertTestData = () => {
              if (!runDataRef.value) return;
              runDataRef.value.enterEditMode({
                origin: "insertTestDataLink"
              });
              telemetry.track("User clicked ndv link", {
                workflow_id: workflowsStore.workflowId,
                push_ref: props.pushRef,
                node_type: node.value?.type,
                pane: "output",
                type: "insert-test-data"
              });
            };
            const onLinkRun = () => {
              emit("linkRun");
            };
            const onUnlinkRun = () => {
              emit("unlinkRun");
            };
            const openSettings = () => {
              emit("openSettings");
              telemetry.track("User clicked ndv link", {
                node_type: node.value?.type,
                workflow_id: workflowsStore.workflowId,
                push_ref: props.pushRef,
                pane: "output",
                type: "settings"
              });
            };
            const onRunIndexChange = run => {
              emit("runChange", run);
            };
            onMounted(() => {
              outputMode.value = defaultOutputMode.value;
            });
            watch(defaultOutputMode, (newValue, oldValue) => {
              if (newValue === OUTPUT_TYPE.LOGS && oldValue === OUTPUT_TYPE.REGULAR && hasNodeRun.value) outputMode.value = defaultOutputMode.value;
            });
            const activatePane = () => {
              emit("activatePane");
            };
            function handleChangeCollapsingColumn(columnName) {
              collapsingColumnName.value = columnName;
            }
            return (_ctx, _cache) => {
              const _directive_n8n_html = resolveDirective("n8n-html");
              return openBlock(), createBlock(RunData_default, {
                ref_key: "runDataRef",
                ref: runDataRef,
                class: normalizeClass([_ctx.$style.runData, {
                  [_ctx.$style.runDataV2]: isNDVV2.value
                }]),
                node: node.value,
                "workflow-object": _ctx.workflowObject,
                "run-index": _ctx.runIndex,
                "linked-runs": _ctx.linkedRuns,
                "can-link-runs": _ctx.canLinkRuns,
                "too-much-data-title": unref(i18n).baseText("ndv.output.tooMuchData.title"),
                "no-data-in-branch-message": unref(i18n).baseText("ndv.output.noOutputDataInBranch"),
                "is-executing": isNodeRunning.value,
                "executing-message": unref(i18n).baseText("ndv.output.executing"),
                "push-ref": _ctx.pushRef,
                "block-u-i": _ctx.blockUI,
                "is-production-execution-preview": _ctx.isProductionExecutionPreview,
                "search-shortcut": _ctx.isPaneActive ? "/" : void 0,
                "hide-pagination": outputMode.value === "logs",
                "pane-type": "output",
                "data-output-type": outputMode.value,
                "callout-message": allToolsWereUnusedNotice.value,
                "display-mode": _ctx.displayMode,
                "disable-ai-content": true,
                "collapsing-table-column-name": collapsingColumnName.value,
                "data-test-id": "ndv-output-panel",
                onActivatePane: activatePane,
                onRunChange: onRunIndexChange,
                onLinkRun,
                onUnlinkRun,
                onTableMounted: _cache[3] || (_cache[3] = $event => emit("tableMounted", $event)),
                onItemHover: _cache[4] || (_cache[4] = $event => emit("itemHover", $event)),
                onSearch: _cache[5] || (_cache[5] = $event => emit("search", $event)),
                onDisplayModeChange: _cache[6] || (_cache[6] = $event => emit("displayModeChange", $event)),
                onCollapsingTableColumnChanged: handleChangeCollapsingColumn
              }, createSlots({
                header: withCtx(() => [createBaseVNode("div", {
                  class: normalizeClass([_ctx.$style.titleSection, {
                    [_ctx.$style.titleSectionV2]: isNDVV2.value
                  }])
                }, [hasAiMetadata.value ? (openBlock(), createBlock(unref(N8nRadioButtons_default), {
                  key: 0,
                  modelValue: outputMode.value,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => outputMode.value = $event),
                  "data-test-id": "ai-output-mode-select",
                  options: outputTypes.value
                }, null, 8, ["modelValue", "options"])) : (openBlock(), createElementBlock("span", {
                  key: 1,
                  class: normalizeClass([_ctx.$style.title, {
                    [_ctx.$style.titleV2]: isNDVV2.value
                  }])
                }, toDisplayString(unref(i18n).baseText(outputPanelEditMode.value.enabled ? "ndv.output.edit" : "ndv.output")), 3)), unref(hasNodeRun) && !unref(pinnedData).hasData.value && (runsCount.value === 1 || runsCount.value > 0 && staleData.value) ? withDirectives((openBlock(), createBlock(RunInfo_default, {
                  key: 2,
                  "task-data": runTaskData.value,
                  "has-stale-data": staleData.value,
                  "has-pin-data": unref(pinnedData).hasData.value
                }, null, 8, ["task-data", "has-stale-data", "has-pin-data"])), [[vShow, !outputPanelEditMode.value.enabled]]) : createCommentVNode("", true)], 2)]),
                "node-not-run": withCtx(() => [isNDVV2.value ? (openBlock(), createElementBlock(Fragment, {
                  key: 0
                }, [_ctx.isReadOnly ? (openBlock(), createBlock(NDVEmptyState_default, {
                  key: 0,
                  title: unref(i18n).baseText(isTriggerNode.value ? "ndv.output.noOutputData.trigger.title" : "ndv.output.noOutputData.v2.title")
                }, null, 8, ["title"])) : (openBlock(), createBlock(NDVEmptyState_default, {
                  key: 1,
                  title: unref(i18n).baseText(isTriggerNode.value ? "ndv.output.noOutputData.trigger.title" : "ndv.output.noOutputData.v2.title")
                }, createSlots({
                  default: withCtx(() => [!canPinData.value || unref(isSubNodeType) ? (openBlock(), createBlock(unref(I18nT), {
                    key: 0,
                    tag: "span",
                    keypath: unref(isSubNodeType) ? "ndv.output.runNodeHintSubNode" : "ndv.output.noOutputData.v2.description",
                    scope: "global"
                  }, {
                    link: withCtx(() => [createVNode(NodeExecuteButton_default, {
                      "hide-icon": "",
                      transparent: "",
                      type: "secondary",
                      "node-name": unref(activeNode)?.name ?? "",
                      label: unref(i18n).baseText(isTriggerNode.value ? "ndv.output.noOutputData.trigger.action" : "ndv.output.noOutputData.v2.action"),
                      "telemetry-source": "inputs",
                      onExecute: _cache[1] || (_cache[1] = $event => emit("execute"))
                    }, null, 8, ["node-name", "label"]), _cache[8] || (_cache[8] = createBaseVNode("br", null, null, -1))]),
                    _: 1
                  }, 8, ["keypath"])) : (openBlock(), createElementBlock(Fragment, {
                    key: 1
                  }, [createVNode(NodeExecuteButton_default, {
                    "hide-icon": "",
                    transparent: "",
                    type: "secondary",
                    "node-name": unref(activeNode)?.name ?? "",
                    label: unref(i18n).baseText(isTriggerNode.value ? "ndv.output.noOutputData.trigger.action" : "ndv.output.noOutputData.v2.action"),
                    "telemetry-source": "inputs",
                    onExecute: _cache[2] || (_cache[2] = $event => emit("execute"))
                  }, null, 8, ["node-name", "label"]), _cache[9] || (_cache[9] = createBaseVNode("br", null, null, -1)), createTextVNode(" " + toDisplayString(unref(i18n).baseText("generic.or")) + " ", 1), createVNode(unref(N8nText_default), {
                    tag: "a",
                    size: "medium",
                    color: "primary",
                    onClick: insertTestData
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("ndv.output.insertTestData")), 1)]),
                    _: 1
                  })], 64))]),
                  _: 2
                }, [isTriggerNode.value ? {
                  name: "icon",
                  fn: withCtx(() => [_cache[7] || (_cache[7] = createBaseVNode("svg", {
                    width: "16",
                    viewBox: "0 0 14 18",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                  }, [createBaseVNode("path", {
                    d: "M10.9062 2.40625L8.5 8.03125H12C12.4062 8.03125 12.7812 8.28125 12.9375 8.65625C13.0625 9.0625 12.9688 9.5 12.6562 9.78125L4.65625 16.7812C4.28125 17.0625 3.78125 17.0938 3.40625 16.8125C3.03125 16.5625 2.875 16.0625 3.0625 15.625L5.46875 10H2C1.5625 10 1.1875 9.75 1.0625 9.375C0.90625 8.96875 1 8.53125 1.3125 8.25L9.3125 1.25C9.6875 0.96875 10.1875 0.9375 10.5625 1.21875C10.9375 1.46875 11.0938 1.96875 10.9062 2.40625Z",
                    fill: "currentColor"
                  })], -1))]),
                  key: "0"
                } : {
                  name: "icon",
                  fn: withCtx(() => [createVNode(unref(N8nIcon_default), {
                    icon: "arrow-right-from-line",
                    size: "xlarge"
                  })]),
                  key: "1"
                }]), 1032, ["title"]))], 64)) : (openBlock(), createElementBlock(Fragment, {
                  key: 1
                }, [workflowRunning.value && !isTriggerNode.value ? (openBlock(), createElementBlock("div", _hoisted_1$1, [createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.spinner)
                }, [createVNode(unref(N8nSpinner_default), {
                  type: "ring"
                })], 2), createVNode(unref(N8nText_default), null, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("ndv.output.waitingToRun")), 1)]),
                  _: 1
                })])) : createCommentVNode("", true), !workflowRunning.value ? (openBlock(), createBlock(unref(N8nText_default), {
                  key: 1,
                  "data-test-id": "ndv-output-run-node-hint"
                }, {
                  default: withCtx(() => [unref(isSubNodeType) ? (openBlock(), createElementBlock(Fragment, {
                    key: 0
                  }, [createTextVNode(toDisplayString(unref(i18n).baseText("ndv.output.runNodeHintSubNode")), 1)], 64)) : (openBlock(), createElementBlock(Fragment, {
                    key: 1
                  }, [createTextVNode(toDisplayString(unref(i18n).baseText("ndv.output.runNodeHint")) + " ", 1), canPinData.value ? (openBlock(), createElementBlock("span", {
                    key: 0,
                    onClick: insertTestData
                  }, [_cache[10] || (_cache[10] = createBaseVNode("br", null, null, -1)), createTextVNode(" " + toDisplayString(unref(i18n).baseText("generic.or")) + " ", 1), createVNode(unref(N8nText_default), {
                    tag: "a",
                    size: "medium",
                    color: "primary"
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("ndv.output.insertTestData")), 1)]),
                    _: 1
                  })])) : createCommentVNode("", true)], 64))]),
                  _: 1
                })) : createCommentVNode("", true)], 64))]),
                "node-waiting": withCtx(() => [createVNode(NDVEmptyState_default, {
                  title: unref(i18n).baseText("ndv.output.waitNodeWaiting.title"),
                  wide: ""
                }, {
                  default: withCtx(() => [withDirectives(createBaseVNode("span", null, null, 512), [[_directive_n8n_html, unref(waitingNodeTooltip)(node.value, _ctx.workflowObject)]])]),
                  _: 1
                }, 8, ["title"])]),
                "no-output-data": withCtx(() => [createVNode(NDVEmptyState_default, {
                  title: unref(i18n).baseText("ndv.output.noOutputData.title")
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("ndv.output.noOutputData.message")) + " ", 1), createBaseVNode("a", {
                    onClick: openSettings
                  }, toDisplayString(unref(i18n).baseText("ndv.output.noOutputData.message.settings")), 1), createTextVNode(" " + toDisplayString(unref(i18n).baseText("ndv.output.noOutputData.message.settingsOption")), 1)]),
                  _: 1
                }, 8, ["title"])]),
                "recovered-artificial-output-data": withCtx(() => [createVNode(NDVEmptyState_default, {
                  title: unref(i18n).baseText("executionDetails.executionFailed.recoveredNodeTitle")
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("executionDetails.executionFailed.recoveredNodeMessage")), 1)]),
                  _: 1
                }, 8, ["title"])]),
                _: 2
              }, [outputMode.value === "logs" && node.value ? {
                name: "content",
                fn: withCtx(() => [createVNode(RunDataAi_default, {
                  node: node.value,
                  "run-index": _ctx.runIndex,
                  "workflow-object": _ctx.workflowObject
                }, null, 8, ["node", "run-index", "workflow-object"])]),
                key: "0"
              } : void 0, !unref(pinnedData).hasData.value && runsCount.value > 1 ? {
                name: "run-info",
                fn: withCtx(() => [createVNode(RunInfo_default, {
                  "task-data": runTaskData.value
                }, null, 8, ["task-data"])]),
                key: "1"
              } : void 0]), 1032, ["class", "node", "workflow-object", "run-index", "linked-runs", "can-link-runs", "too-much-data-title", "no-data-in-branch-message", "is-executing", "executing-message", "push-ref", "block-u-i", "is-production-execution-preview", "search-shortcut", "hide-pagination", "data-output-type", "callout-message", "display-mode", "collapsing-table-column-name"]);
            };
          }
        }); //#endregion
        //#region src/features/ndv/panel/components/OutputPanel.vue?vue&type=style&index=0&lang.module.scss
        runData = "_runData_w7r0e_128";
        runDataV2 = "_runDataV2_w7r0e_132";
        outputTypeSelect = "_outputTypeSelect_w7r0e_136";
        titleSection = "_titleSection_w7r0e_141";
        titleSectionV2 = "_titleSectionV2_w7r0e_149";
        title = "_title_w7r0e_141";
        titleV2 = "_titleV2_w7r0e_161";
        noOutputData = "_noOutputData_w7r0e_166";
        link = "_link_w7r0e_176";
        spinner = "_spinner_w7r0e_183";
        OutputPanel_vue_vue_type_style_index_0_lang_module_default = {
          runData,
          runDataV2,
          outputTypeSelect,
          titleSection,
          titleSectionV2,
          title,
          titleV2,
          noOutputData,
          link,
          spinner
        }; //#endregion
        //#region src/features/ndv/panel/components/OutputPanel.vue
        cssModules$1 = {
          "$style": OutputPanel_vue_vue_type_style_index_0_lang_module_default
        };
        _export("n", OutputPanel_default = /* @__PURE__ */__plugin_vue_export_helper_default(OutputPanel_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules$1]])); //#endregion
        //#region src/features/ndv/panel/components/TriggerPanel.vue?vue&type=script&setup=true&lang.ts
        _hoisted_1 = {
          key: "empty"
        };
        _hoisted_2 = {
          key: "listening",
          "data-test-id": "trigger-listening"
        };
        _hoisted_3 = {
          key: 0
        };
        _hoisted_4 = {
          key: 1
        };
        _hoisted_5 = {
          key: 0
        };
        _hoisted_6 = {
          key: "default"
        };
        _hoisted_7 = {
          key: 0,
          class: "mb-xl"
        };
        _hoisted_8 = ["textContent"];
        TriggerPanel_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */defineComponent({
          __name: "TriggerPanel",
          props: {
            nodeName: {},
            pushRef: {
              default: ""
            }
          },
          emits: ["activate", "execute"],
          setup(__props, {
            emit: __emit
          }) {
            const props = __props;
            const emit = __emit;
            const nodesTypeStore = useNodeTypesStore();
            const uiStore = useUIStore();
            const workflowsStore = useWorkflowsStore();
            const ndvStore = useNDVStore();
            const router = useRouter();
            const workflowHelpers = useWorkflowHelpers();
            const i18n = useI18n();
            const telemetry = useTelemetry();
            const executionsHelpEventBus = createEventBus();
            const help = ref(null);
            const node = computed(() => workflowsStore.getNodeByName(props.nodeName));
            const nodeType = computed(() => {
              if (node.value) return nodesTypeStore.getNodeType(node.value.type, node.value.typeVersion);
              return null;
            });
            const triggerPanel = computed(() => {
              const panel = nodeType.value?.triggerPanel;
              if (isTriggerPanelObject(panel)) return panel;
            });
            const hideContent = computed(() => {
              const hideContent$1 = triggerPanel.value?.hideContent;
              if (typeof hideContent$1 === "boolean") return hideContent$1;
              if (node.value) {
                const hideContentValue = workflowsStore.workflowObject.expression.getSimpleParameterValue(node.value, hideContent$1, "internal", {});
                if (typeof hideContentValue === "boolean") return hideContentValue;
              }
              return false;
            });
            const hasIssues = computed(() => {
              return Boolean(node.value?.issues && (node.value.issues.parameters ?? node.value.issues.credentials));
            });
            const serviceName = computed(() => {
              if (nodeType.value) return getTriggerNodeServiceName(nodeType.value);
              return "";
            });
            const displayChatButton = computed(() => {
              return Boolean(node.value && node.value.type === "@n8n/n8n-nodes-langchain.chatTrigger" && node.value.parameters.mode !== "webhook");
            });
            const isWebhookNode = computed(() => {
              return Boolean(node.value && node.value.type === "n8n-nodes-base.webhook");
            });
            const webhookHttpMethod = computed(() => {
              if (!node.value || !nodeType.value?.webhooks?.length) return;
              const httpMethod = workflowHelpers.getWebhookExpressionValue(nodeType.value.webhooks[0], "httpMethod", false);
              if (Array.isArray(httpMethod)) return httpMethod.join(", ");
              return httpMethod;
            });
            const webhookTestUrl = computed(() => {
              if (!node.value || !nodeType.value?.webhooks?.length) return;
              return workflowHelpers.getWebhookUrl(nodeType.value.webhooks[0], node.value, "test");
            });
            const isWebhookBasedNode = computed(() => {
              return Boolean(nodeType.value?.webhooks?.length);
            });
            const isPollingNode = computed(() => {
              return Boolean(nodeType.value?.polling);
            });
            const isListeningForEvents = computed(() => {
              if (!node.value || node.value.disabled || !isWebhookBasedNode.value) return false;
              if (!workflowsStore.executionWaitingForWebhook) return false;
              const executedNode = workflowsStore.executedNode;
              const isCurrentNodeExecuted = executedNode === props.nodeName;
              const isChildNodeExecuted = executedNode ? workflowsStore.workflowObject.getParentNodes(executedNode).includes(props.nodeName) : false;
              return !executedNode || isCurrentNodeExecuted || isChildNodeExecuted;
            });
            const workflowRunning = computed(() => workflowsStore.isWorkflowRunning);
            const isActivelyPolling = computed(() => {
              const triggeredNode = workflowsStore.executedNode;
              return workflowRunning.value && isPollingNode.value && props.nodeName === triggeredNode;
            });
            const isWorkflowActive = computed(() => {
              return workflowsStore.isWorkflowActive;
            });
            const listeningTitle = computed(() => {
              return nodeType.value?.name === "n8n-nodes-base.formTrigger" ? i18n.baseText("ndv.trigger.webhookNode.formTrigger.listening") : i18n.baseText("ndv.trigger.webhookNode.listening");
            });
            const listeningHint = computed(() => {
              switch (nodeType.value?.name) {
                case CHAT_TRIGGER_NODE_TYPE:
                  return i18n.baseText("ndv.trigger.webhookBasedNode.chatTrigger.serviceHint");
                case FORM_TRIGGER_NODE_TYPE:
                  return i18n.baseText("ndv.trigger.webhookBasedNode.formTrigger.serviceHint");
                default:
                  return i18n.baseText("ndv.trigger.webhookBasedNode.serviceHint", {
                    interpolate: {
                      service: serviceName.value
                    }
                  });
              }
            });
            const header$2 = computed(() => {
              if (isActivelyPolling.value) return i18n.baseText("ndv.trigger.pollingNode.fetchingEvent");
              if (triggerPanel.value?.header) return triggerPanel.value.header;
              if (isWebhookBasedNode.value) return i18n.baseText("ndv.trigger.webhookBasedNode.action", {
                interpolate: {
                  name: serviceName.value
                }
              });
              return "";
            });
            const subheader = computed(() => {
              if (isActivelyPolling.value) return i18n.baseText("ndv.trigger.pollingNode.fetchingHint", {
                interpolate: {
                  name: serviceName.value
                }
              });
              return "";
            });
            const executionsHelp = computed(() => {
              if (triggerPanel.value?.executionsHelp) {
                if (typeof triggerPanel.value.executionsHelp === "string") return triggerPanel.value.executionsHelp;
                if (!isWorkflowActive.value && triggerPanel.value.executionsHelp.inactive) return triggerPanel.value.executionsHelp.inactive;
                if (isWorkflowActive.value && triggerPanel.value.executionsHelp.active) return triggerPanel.value.executionsHelp.active;
              }
              if (isWebhookBasedNode.value) if (isWorkflowActive.value) return i18n.baseText("ndv.trigger.webhookBasedNode.executionsHelp.active", {
                interpolate: {
                  service: serviceName.value
                }
              });else return i18n.baseText("ndv.trigger.webhookBasedNode.executionsHelp.inactive", {
                interpolate: {
                  service: serviceName.value
                }
              });
              if (isPollingNode.value) if (isWorkflowActive.value) return i18n.baseText("ndv.trigger.pollingNode.executionsHelp.active", {
                interpolate: {
                  service: serviceName.value
                }
              });else return i18n.baseText("ndv.trigger.pollingNode.executionsHelp.inactive", {
                interpolate: {
                  service: serviceName.value
                }
              });
              return "";
            });
            const activationHint = computed(() => {
              if (isActivelyPolling.value || !triggerPanel.value) return "";
              if (triggerPanel.value.activationHint) {
                if (typeof triggerPanel.value.activationHint === "string") return triggerPanel.value.activationHint;
                if (!isWorkflowActive.value && typeof triggerPanel.value.activationHint.inactive === "string") return triggerPanel.value.activationHint.inactive;
                if (isWorkflowActive.value && typeof triggerPanel.value.activationHint.active === "string") return triggerPanel.value.activationHint.active;
              }
              if (isWebhookBasedNode.value) if (isWorkflowActive.value) return i18n.baseText("ndv.trigger.webhookBasedNode.activationHint.active", {
                interpolate: {
                  service: serviceName.value
                }
              });else return i18n.baseText("ndv.trigger.webhookBasedNode.activationHint.inactive", {
                interpolate: {
                  service: serviceName.value
                }
              });
              if (isPollingNode.value) if (isWorkflowActive.value) return i18n.baseText("ndv.trigger.pollingNode.activationHint.active", {
                interpolate: {
                  service: serviceName.value
                }
              });else return i18n.baseText("ndv.trigger.pollingNode.activationHint.inactive", {
                interpolate: {
                  service: serviceName.value
                }
              });
              return "";
            });
            const expandExecutionHelp = () => {
              if (help.value) executionsHelpEventBus.emit("expand");
            };
            const openWebhookUrl = () => {
              telemetry.track("User clicked ndv link", {
                workflow_id: workflowsStore.workflowId,
                push_ref: props.pushRef,
                pane: "input",
                type: "open-chat"
              });
              window.open(webhookTestUrl.value, "_blank", "noreferrer");
            };
            const onLinkClick = e => {
              if (!e.target) return;
              const target = e.target;
              if (target.localName !== "a") return;
              if (target.dataset?.key) {
                e.stopPropagation();
                e.preventDefault();
                if (target.dataset.key === "activate") emit("activate");else if (target.dataset.key === "executions") {
                  telemetry.track("User clicked ndv link", {
                    workflow_id: workflowsStore.workflowId,
                    push_ref: props.pushRef,
                    pane: "input",
                    type: "open-executions-log"
                  });
                  ndvStore.unsetActiveNodeName();
                  router.push({
                    name: VIEWS.EXECUTIONS
                  });
                } else if (target.dataset.key === "settings") uiStore.openModal(WORKFLOW_SETTINGS_MODAL_KEY);
              }
            };
            const onTestLinkCopied = () => {
              telemetry.track("User copied webhook URL", {
                pane: "inputs",
                type: "test url"
              });
            };
            const onNodeExecute = () => {
              emit("execute");
            };
            return (_ctx, _cache) => {
              const _directive_n8n_html = resolveDirective("n8n-html");
              return openBlock(), createElementBlock("div", {
                class: normalizeClass(_ctx.$style.container)
              }, [createVNode(Transition, {
                name: "fade",
                mode: "out-in"
              }, {
                default: withCtx(() => [hasIssues.value || hideContent.value ? (openBlock(), createElementBlock("div", _hoisted_1)) : isListeningForEvents.value ? (openBlock(), createElementBlock("div", _hoisted_2, [createVNode(unref(N8nPulse_default), null, {
                  default: withCtx(() => [createVNode(NodeIcon_default, {
                    "node-type": nodeType.value,
                    size: 40
                  }, null, 8, ["node-type"])]),
                  _: 1
                }), isWebhookNode.value ? (openBlock(), createElementBlock("div", _hoisted_3, [createVNode(unref(N8nText_default), {
                  tag: "div",
                  size: "large",
                  color: "text-dark",
                  class: "mb-2xs",
                  bold: ""
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("ndv.trigger.webhookNode.listening")), 1)]),
                  _: 1
                }), createBaseVNode("div", {
                  class: normalizeClass([_ctx.$style.shake, "mb-xs"])
                }, [createVNode(unref(N8nText_default), null, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("ndv.trigger.webhookNode.requestHint", {
                    interpolate: {
                      type: webhookHttpMethod.value ?? ""
                    }
                  })), 1)]),
                  _: 1
                })], 2), createVNode(CopyInput_default, {
                  value: webhookTestUrl.value,
                  "toast-title": unref(i18n).baseText("ndv.trigger.copiedTestUrl"),
                  class: "mb-2xl",
                  size: "medium",
                  collapse: true,
                  "copy-button-text": unref(i18n).baseText("generic.clickToCopy"),
                  onCopy: onTestLinkCopied
                }, null, 8, ["value", "toast-title", "copy-button-text"]), createVNode(NodeExecuteButton_default, {
                  "data-test-id": "trigger-execute-button",
                  "node-name": _ctx.nodeName,
                  size: "medium",
                  "telemetry-source": "inputs",
                  onExecute: onNodeExecute
                }, null, 8, ["node-name"])])) : (openBlock(), createElementBlock("div", _hoisted_4, [createVNode(unref(N8nText_default), {
                  tag: "div",
                  size: "large",
                  color: "text-dark",
                  class: "mb-2xs",
                  bold: ""
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(listeningTitle.value), 1)]),
                  _: 1
                }), createBaseVNode("div", {
                  class: normalizeClass([_ctx.$style.shake, "mb-xs"])
                }, [createVNode(unref(N8nText_default), {
                  tag: "div"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(listeningHint.value), 1)]),
                  _: 1
                })], 2), displayChatButton.value ? (openBlock(), createElementBlock("div", _hoisted_5, [createVNode(unref(N8nButton_default), {
                  class: "mb-xl",
                  onClick: _cache[0] || (_cache[0] = $event => openWebhookUrl())
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("ndv.trigger.chatTrigger.openChat")), 1)]),
                  _: 1
                })])) : createCommentVNode("", true), createVNode(NodeExecuteButton_default, {
                  "data-test-id": "trigger-execute-button",
                  "node-name": _ctx.nodeName,
                  size: "medium",
                  "telemetry-source": "inputs",
                  onExecute: onNodeExecute
                }, null, 8, ["node-name"])]))])) : (openBlock(), createElementBlock("div", _hoisted_6, [isActivelyPolling.value ? (openBlock(), createElementBlock("div", _hoisted_7, [createVNode(unref(N8nSpinner_default), {
                  type: "ring"
                })])) : createCommentVNode("", true), createBaseVNode("div", {
                  class: normalizeClass(_ctx.$style.action)
                }, [createBaseVNode("div", {
                  "data-test-id": "trigger-header",
                  class: normalizeClass(_ctx.$style.header)
                }, [header$2.value ? (openBlock(), createBlock(unref(N8nHeading_default), {
                  key: 0,
                  tag: "h1",
                  bold: ""
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(header$2.value), 1)]),
                  _: 1
                })) : createCommentVNode("", true), subheader.value ? (openBlock(), createBlock(unref(N8nText_default), {
                  key: 1
                }, {
                  default: withCtx(() => [createBaseVNode("span", {
                    textContent: toDisplayString(subheader.value)
                  }, null, 8, _hoisted_8)]),
                  _: 1
                })) : createCommentVNode("", true)], 2), createVNode(NodeExecuteButton_default, {
                  "data-test-id": "trigger-execute-button",
                  "node-name": _ctx.nodeName,
                  size: "medium",
                  "telemetry-source": "inputs",
                  onExecute: onNodeExecute
                }, null, 8, ["node-name"])], 2), activationHint.value ? (openBlock(), createBlock(unref(N8nText_default), {
                  key: 1,
                  size: "small",
                  onClick: onLinkClick
                }, {
                  default: withCtx(() => [withDirectives(createBaseVNode("span", null, null, 512), [[_directive_n8n_html, activationHint.value]]), _cache[1] || (_cache[1] = createTextVNode("\xA0 "))]),
                  _: 1
                })) : createCommentVNode("", true), activationHint.value && executionsHelp.value ? (openBlock(), createBlock(unref(N8nLink_default), {
                  key: 2,
                  size: "small",
                  onClick: expandExecutionHelp
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("ndv.trigger.moreInfo")), 1)]),
                  _: 1
                })) : createCommentVNode("", true), executionsHelp.value ? (openBlock(), createBlock(unref(N8nInfoAccordion_default), {
                  key: 3,
                  ref_key: "help",
                  ref: help,
                  class: normalizeClass(_ctx.$style.accordion),
                  title: unref(i18n).baseText("ndv.trigger.executionsHint.question"),
                  description: executionsHelp.value,
                  "event-bus": unref(executionsHelpEventBus),
                  "onClick:body": onLinkClick
                }, null, 8, ["class", "title", "description", "event-bus"])) : createCommentVNode("", true)]))]),
                _: 1
              })], 2);
            };
          }
        }); //#endregion
        //#region src/features/ndv/panel/components/TriggerPanel.vue?vue&type=style&index=0&lang.module.scss
        container = "_container_6tej3_123";
        header = "_header_6tej3_140";
        action = "_action_6tej3_147";
        shake = "_shake_6tej3_151";
        accordion = "_accordion_6tej3_172";
        TriggerPanel_vue_vue_type_style_index_0_lang_module_default = {
          container,
          header,
          action,
          shake,
          accordion
        }; //#endregion
        //#region src/features/ndv/panel/components/TriggerPanel.vue
        cssModules = {
          "$style": TriggerPanel_vue_vue_type_style_index_0_lang_module_default
        };
        _export("t", TriggerPanel_default = /* @__PURE__ */__plugin_vue_export_helper_default(TriggerPanel_vue_vue_type_script_setup_true_lang_default, [["__cssModules", cssModules], ["__scopeId", "data-v-d428ffd7"]])); //#endregion
      }
    };
  });
})();